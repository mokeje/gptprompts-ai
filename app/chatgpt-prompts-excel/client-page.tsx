"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Zap, Grid3x3, TrendingUp, BarChart3, BookOpen } from "lucide-react"

const accent = "#10A37F"
const bg = "#060a08"

function CopyCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#0d1410] border border-[#1a2e24] rounded-xl p-5 hover:border-[#10A37F]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#10A37F]/10 text-[#10A37F] mb-2 inline-block">
              {tag}
            </span>
          )}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button
          onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
          className="shrink-0 p-2 rounded-lg bg-[#1a2e24] hover:bg-[#10A37F]/20 transition-colors"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-400" />}
        </button>
      </div>
      <pre className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap font-sans">{prompt}</pre>
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#1a2e24] rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-[#0d1410] transition-colors">
        <span className="font-medium text-white pr-4">{q}</span>
        {open ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#1a2e24] pt-4">{a}</div>}
    </div>
  )
}

const sections = [
  {
    id: "formulas",
    icon: <Zap size={20} />,
    title: "Formula Writing & Explanation",
    subtitle: "Get ChatGPT to write, fix, or explain any Excel formula — from basic lookups to complex nested logic.",
    tag: "Formulas",
    prompts: [
      {
        title: "Write a Formula from Plain English",
        prompt: `Write an Excel formula that does the following:
[Describe what you want it to do in plain English]

Context:
- Column A contains: [describe data]
- Column B contains: [describe data]
- I want the result in column: [which column]
- Any special conditions: [e.g. "if value is blank, return 0", "ignore case", "only include rows where column C = 'Active'"]

Give me the formula, then explain each part of it in plain English so I understand how it works.`,
      },
      {
        title: "Fix a Broken Formula",
        prompt: `My Excel formula is returning an error or wrong result. Please help me fix it.

Formula: [paste your formula]
Expected result: [what it should return]
Actual result or error: [what it's currently returning — e.g. #VALUE!, #REF!, wrong number]
Data description: [briefly describe what's in each relevant column]

Please: (1) identify the bug, (2) show the corrected formula, (3) explain what was wrong and why the fix works.`,
      },
      {
        title: "Explain This Formula Step by Step",
        prompt: `Explain this Excel formula in plain English, step by step:

[paste formula here]

Context: This formula is used to [briefly describe what it's supposed to do].

Break it down so someone who isn't an Excel expert could understand it. Explain: what each function does, how they're nested, and what the formula returns overall.`,
      },
      {
        title: "Convert VLOOKUP to XLOOKUP",
        prompt: `Convert this Excel VLOOKUP formula to the modern XLOOKUP equivalent:

VLOOKUP: [paste formula]

After converting:
1. Show me the XLOOKUP formula
2. Explain what changed and why XLOOKUP is better for this use case
3. Highlight any differences in behaviour I should be aware of (e.g. handling of errors, column count changes)`,
      },
    ],
  },
  {
    id: "data-cleaning",
    icon: <Grid3x3 size={20} />,
    title: "Data Cleaning & Transformation",
    subtitle: "Prompts for cleaning messy data, standardising formats, splitting columns, and removing duplicates.",
    tag: "Data Cleaning",
    prompts: [
      {
        title: "Clean and Standardise a Data Column",
        prompt: `I have a column in Excel with messy data that needs cleaning. Help me write formulas or steps to:
[Choose what applies:]
- Remove leading/trailing spaces
- Standardise capitalisation (all UPPER / all lower / Title Case)
- Remove special characters except [specify which to keep]
- Remove numbers/text from a mixed column
- Standardise date formats to DD/MM/YYYY or YYYY-MM-DD
- Extract only the [first name / last name / domain / number] from mixed text

Column description: [What's in it and what it looks like now]
Desired output: [What it should look like]`,
      },
      {
        title: "Split One Column into Multiple",
        prompt: `I need to split a single Excel column into multiple columns. Here's what the data looks like:

Current format: [e.g. "John Smith, john@email.com, London" all in one cell]
Desired output:
- Column A: [First part — e.g. First Name]
- Column B: [Second part — e.g. Last Name]
- Column C: [Third part — e.g. Email]

The separator is: [comma / space / dash / semicolon / other]

Give me the formulas to split this data into separate columns, plus any edge cases I should watch for.`,
      },
      {
        title: "Find and Handle Duplicates",
        prompt: `Help me find and deal with duplicate rows in my Excel spreadsheet.

My data is in columns [A through X] and has [number] rows.
A "duplicate" means: [e.g. same email address / same order ID / all columns match / first 3 columns match]

I want to:
[Choose one:]
- Highlight duplicates with conditional formatting
- Create a formula column that flags duplicates as TRUE/FALSE
- Keep only the first occurrence and remove the rest
- Keep only the most recent row (based on column [X] which contains dates)

Show me the steps or formulas to accomplish this.`,
      },
      {
        title: "Combine Data from Multiple Sheets",
        prompt: `I have data spread across [number] sheets in the same Excel workbook and need to combine them into one master sheet.

Sheet names: [List them — e.g. January, February, March]
Data structure: Each sheet has the same columns: [list column headers]
Starting row of data: Row [X] (row 1 is headers)

Options I want help with:
1. A formula approach to pull data from each sheet into a master sheet
2. A Power Query approach (if that's better for this case)
3. How to keep the master sheet automatically updated when I add rows to other sheets

Which approach do you recommend and why?`,
      },
    ],
  },
  {
    id: "analysis",
    icon: <TrendingUp size={20} />,
    title: "Data Analysis & Calculations",
    subtitle: "Prompts for building calculations, running comparisons, summarising data, and finding insights.",
    tag: "Analysis",
    prompts: [
      {
        title: "Build a Summary Calculation Table",
        prompt: `Help me build a summary table in Excel that calculates key metrics from my raw data.

My raw data is on a sheet called [Sheet Name] and contains:
- [Column A]: [description]
- [Column B]: [description]
- [Column C]: [description]

I want a summary table that shows:
- Total [metric] by [category]
- Average [metric] per [group]
- Count of [items] where [condition]
- [Any other metrics you need]

Should I use SUMIF/COUNTIF formulas, a PivotTable, or SUMPRODUCT? Recommend the best approach and show me how to build it.`,
      },
      {
        title: "Year-over-Year or Period Comparison",
        prompt: `I need to compare data across two time periods in Excel and calculate the variance.

Data setup:
- Column A: [Category names]
- Column B: [Current period values — e.g. 2025]
- Column C: [Previous period values — e.g. 2024]

I need formulas to calculate:
1. Absolute variance (Current minus Previous)
2. Percentage change ((Current - Previous) / Previous)
3. Direction indicator: UP / DOWN / FLAT
4. Optional: a simple in-cell bar using REPT to visualise size

Format the percentage to 1 decimal place. Handle divide-by-zero errors for rows where the previous period is 0.`,
      },
      {
        title: "Running Total and Cumulative Calculations",
        prompt: `I need to add running totals and cumulative calculations to my Excel spreadsheet.

Column layout:
- Column A: [Date or period]
- Column B: [Values to accumulate — e.g. sales, revenue, units]

Help me create:
1. A running total column (cumulative sum from row 1 to current row)
2. Running percentage of total (what % of the overall total has been reached so far)
3. A formula that resets the running total each time a new month/year starts (if applicable)

Make the formulas work correctly even when I add new rows at the bottom.`,
      },
      {
        title: "Statistical Summary of a Dataset",
        prompt: `Help me calculate a statistical summary of my dataset in Excel.

My data is in column [X], rows [Y to Z], and represents [describe what the data is].

I want to calculate:
- Count of values
- Sum
- Average (mean)
- Median
- Mode
- Standard deviation
- Min and Max
- 25th percentile (Q1), 75th percentile (Q3), and IQR
- Count of outliers (values more than 2 standard deviations from the mean)

Show me the formula for each one and put them all in a clean summary table layout.`,
      },
    ],
  },
  {
    id: "pivot-charts",
    icon: <BarChart3 size={20} />,
    title: "PivotTables, Charts & Dashboards",
    subtitle: "Build powerful PivotTables, create the right charts, and design Excel dashboards that communicate clearly.",
    tag: "PivotTables",
    prompts: [
      {
        title: "Build a PivotTable — Step by Step",
        prompt: `Walk me through building a PivotTable in Excel to answer this question:
[Describe what you want to know — e.g. "What are total sales by product category for each month?"]

My raw data has these columns:
[List your column headers]

The data is on sheet: [Sheet name]
Row count: approximately [number]

Please:
1. Tell me exactly where to place the PivotTable
2. Which field goes in Rows, Columns, Values, and Filters
3. How to format the value field (sum, count, average, %)
4. Any grouping I should apply (e.g. group dates by month)
5. How to sort the PivotTable to show the most useful view first`,
      },
      {
        title: "Choose the Right Chart Type",
        prompt: `I need to visualise this data in Excel and I'm not sure which chart type to use:

Data description: [Describe what you have — e.g. "Monthly revenue by product category for 12 months, 5 categories"]
What I want to show: [e.g. "How each category contributes to total revenue each month" / "Which category grew the fastest" / "How values compare at a single point in time"]

Please:
1. Recommend the best chart type for this goal and explain why
2. Tell me the alternatives and when I'd choose those instead
3. Walk me through how to create the recommended chart in Excel (which columns to select, chart type to choose)
4. Give me 2-3 tips to make the chart look cleaner and more professional`,
      },
      {
        title: "Build a Simple Excel Dashboard",
        prompt: `Help me plan and build a simple one-page Excel dashboard to track [describe what you're tracking — e.g. monthly sales performance / project milestones / budget vs actuals].

My raw data includes: [List your key data columns]
Audience: [Who will use this — e.g. my manager, the team, myself]
Key questions the dashboard should answer:
1. [Question 1]
2. [Question 2]
3. [Question 3]

Please help me:
1. Decide which charts and tables to include
2. How to structure the layout on the page
3. How to use named ranges or dynamic references so the dashboard updates automatically
4. How to use slicers or dropdowns to let users filter the data`,
      },
      {
        title: "Dynamic Chart with Dropdown Filter",
        prompt: `I want to create a chart in Excel that updates dynamically based on a dropdown selection.

My data: [Describe your data structure]
What I want to filter by: [e.g. product category, region, year, sales rep]
Chart type: [e.g. bar chart, line chart]

Walk me through:
1. How to create a Data Validation dropdown list in a cell
2. How to use INDEX/MATCH or OFFSET to create dynamic source data that changes based on the dropdown
3. How to link the chart to the dynamic range
4. Testing — how to verify it's working correctly

I'm using Excel [version: 365 / 2019 / 2016].`,
      },
    ],
  },
  {
    id: "automation",
    icon: <BookOpen size={20} />,
    title: "Automation, VBA & Power Query",
    subtitle: "Prompts for automating repetitive tasks, writing VBA macros, and using Power Query to transform data.",
    tag: "Automation",
    prompts: [
      {
        title: "Write a VBA Macro for a Repetitive Task",
        prompt: `Write a VBA macro in Excel that automates this repetitive task:
[Describe exactly what you do manually — e.g. "Every week I copy column A from Sheet1, paste it as values into Sheet2 column B, then sort Sheet2 by column C descending, then save the file"]

Additional requirements:
- Add a confirmation message before the macro runs
- Show a success message when it's done
- Handle errors gracefully (don't crash if a sheet is missing)

I'll run this macro by clicking a button. Include instructions for how to add it to a button on the sheet.`,
      },
      {
        title: "Power Query — Clean and Import Data",
        prompt: `Help me use Power Query in Excel to import and clean data from [CSV file / another Excel file / web URL / SharePoint].

Source: [Describe the source and what the raw data looks like]

Transformations I need:
- Remove columns: [list columns to drop]
- Rename columns: [old name → new name]
- Filter rows where [column] [is / is not / contains] [value]
- Remove blank rows
- Change data type of [column] to [Text / Number / Date]
- [Any other transformations]

Goal: Load the cleaned data into Excel sheet [Sheet name] and set it to refresh automatically [manually / on file open / on schedule].

Walk me through the steps in Power Query Editor.`,
      },
      {
        title: "Automate a Monthly Report",
        prompt: `I create the same Excel report every month and want to automate it. Help me plan the automation.

Current manual process:
1. [Step 1 — e.g. copy data from system export CSV into Raw Data tab]
2. [Step 2 — e.g. run calculations in Summary tab]
3. [Step 3 — e.g. update charts]
4. [Step 4 — e.g. save as new file with current month name]

My Excel version: [365 / 2019 / 2016]

Please:
1. Identify which steps can be automated with Power Query, formulas, or VBA
2. Recommend the best approach for each step
3. Give me a high-level plan for how to build this automation
4. Highlight any steps that will still need manual input`,
      },
      {
        title: "Create a Dynamic Drop-Down List",
        prompt: `Help me create a dynamic drop-down list in Excel that automatically updates when I add new items.

Setup:
- My list of options is in column [X] on sheet [Sheet name]
- The drop-down should appear in cell [or range] [specify]
- When I add a new item to the list, the drop-down should automatically include it

Method options:
1. Using a named range + OFFSET (older approach)
2. Using a Table (Excel Table) + structured reference (recommended modern approach)
3. Using UNIQUE formula (if Excel 365)

Recommend the best method for my setup and walk me through creating it step by step, including how to handle blank entries in the list.`,
      },
    ],
  },
]

const faqs = [
  { q: "Can ChatGPT write Excel formulas?", a: "Yes — ChatGPT is excellent at writing Excel formulas. Describe what you want the formula to do in plain English, give it the column layout, and it will generate the formula with an explanation. It works for everything from basic SUM to complex nested INDEX/MATCH and dynamic array formulas." },
  { q: "How do I get the best Excel formula results from ChatGPT?", a: "Be specific: tell it what data is in each column, what the formula should return, any conditions (if blank, return 0), and what Excel version you're using. Include the actual cell references (A2:A100) rather than vague descriptions. Paste error messages exactly as they appear." },
  { q: "Can ChatGPT help fix broken Excel formulas?", a: "Yes. Paste the formula, describe what it should do, and paste the error or wrong result. ChatGPT will identify the bug, provide the corrected formula, and explain what went wrong. This is one of the most useful Excel use cases for AI." },
  { q: "What Excel tasks is ChatGPT best at?", a: "Writing and explaining formulas (VLOOKUP, INDEX/MATCH, XLOOKUP, IF statements), data cleaning logic, PivotTable setup guidance, VBA macro writing for automation, Power Query transformation steps, and building dashboards. It's less reliable for highly visual tasks like formatting complex charts." },
  { q: "Can ChatGPT write VBA macros?", a: "Yes. Describe what you want to automate in plain English and ChatGPT will generate a VBA macro. Always test macros in a copy of your file first. ChatGPT is good at basic to intermediate VBA — for very complex enterprise automation, review the code carefully before running it on important data." },
  { q: "How do I use AI to learn Excel formulas?", a: "Ask ChatGPT to explain formulas you don't understand step by step, or ask it to show you the formula for a specific task and then explain each component. You can also ask it to give you examples with sample data, which helps build understanding faster than documentation." },
  { q: "Can ChatGPT help with Power Query?", a: "Yes. Describe your data source and the transformations you need, and ChatGPT can guide you through the Power Query Editor steps. It can also help you write M code (Power Query's formula language) for more complex transformations." },
  { q: "What Excel version should I mention in my prompt?", a: "Always mention your Excel version (Excel 365, Excel 2019, Excel 2016, Excel for Mac, Google Sheets). Excel 365 has dynamic array functions (XLOOKUP, FILTER, UNIQUE, SORT) that older versions don't support. Without knowing your version, ChatGPT may give you formulas that don't work in your version." },
  { q: "Can I use these prompts in Google Sheets instead of Excel?", a: "Most formula prompts work for Google Sheets too — the syntax is very similar. Just specify 'Google Sheets' in your prompt instead of Excel. Power Query and VBA prompts are Excel-specific; for Google Sheets automation, ask about Google Apps Script instead." },
  { q: "How do I describe my data to ChatGPT clearly?", a: "Give it the column headers, what each column contains, the row range, and a sample row of data if possible. For example: 'Column A has customer names (text), Column B has order dates (MM/DD/YYYY), Column C has order values (numbers). Row 1 is headers, data starts row 2.' The more context, the more accurate the formula." },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "ChatGPT Prompts for Excel 2026: 60+ Copy-Paste Formula & Data Templates",
      description: "60+ copy-paste ChatGPT prompts for Excel — formulas, data cleaning, PivotTables, charts, dashboards, VBA macros, and Power Query.",
      author: { "@type": "Organization", name: "GPTPrompts" },
      dateModified: "2026-01-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
}

export default function ExcelPromptsClient() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: bg }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-[#1a2e24] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border" style={{ borderColor: `${accent}30`, color: accent }}>Excel</span>
            <span className="text-xs text-gray-500">60+ prompts</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            ChatGPT Prompts for Excel 2026:<br />60+ Copy-Paste Templates
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Copy-paste prompts for every Excel challenge — formula writing, data cleaning, PivotTables, charts, dashboards, VBA macros, and Power Query. Works with ChatGPT, Claude, and Gemini.
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            {[{ label: "60+", desc: "Excel prompts" }, { label: "5", desc: "Categories" }, { label: "10", desc: "FAQ answers" }].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold" style={{ color: accent }}>{s.label}</div>
                <div className="text-sm text-gray-400">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {["Formula writing", "Data cleaning", "PivotTables & charts", "Dashboards", "VBA & Power Query"].map((b) => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#0d1410] border border-[#1a2e24] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.id} className="py-14 px-4 border-b border-[#1a2e24]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span style={{ color: accent }}>{section.icon}</span>
              <h2 className="text-2xl font-bold">{section.title}</h2>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{section.subtitle}</p>
            <div className="grid gap-4">
              {section.prompts.map((p) => (
                <CopyCard key={p.title} title={p.title} prompt={p.prompt} tag={section.tag} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-14 px-4 border-b border-[#1a2e24]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">ChatGPT for Excel — FAQ</h2>
          <p className="text-gray-400 mb-6 text-sm">Everything you need to know about using AI for Excel.</p>
          <div className="space-y-3">{faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}</div>
        </div>
      </section>

      <section className="py-14 px-4 border-b border-[#1a2e24]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related Prompt Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/chatgpt-prompts-google-sheets", label: "ChatGPT Prompts for Google Sheets", desc: "Formulas, data analysis, and automation for Google Sheets" },
              { href: "/ai-prompts-for-data-analysts", label: "AI Prompts for Data Analysts", desc: "SQL, Python, dashboards, and data storytelling prompts" },
              { href: "/chatgpt-data-analysis", label: "ChatGPT for Data Analysis", desc: "Analyse datasets, find insights, and build reports with AI" },
              { href: "/ai-prompts-personal-finance", label: "AI Prompts for Personal Finance", desc: "Budget trackers, expense analysis, and financial planning" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group bg-[#0d1410] p-6 rounded-lg hover:border-[#10A37F]/40 border border-[#1a2e24] transition-all">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#10A37F] transition-colors">{link.label}</h3>
                <p className="text-gray-400 text-sm">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-white mb-3">Data & Spreadsheets</h3>
            <ul className="space-y-2">
              {[{ href: "/chatgpt-prompts-google-sheets", label: "Google Sheets Prompts" }, { href: "/sql-prompts", label: "SQL Prompts" }, { href: "/ai-prompts-for-data-analysts", label: "AI for Data Analysts" }, { href: "/chatgpt-data-analysis", label: "ChatGPT Data Analysis" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Business Productivity</h3>
            <ul className="space-y-2">
              {[{ href: "/chatgpt-business-productivity", label: "ChatGPT for Business" }, { href: "/chatgpt-prompts-business-plans", label: "Business Plan Prompts" }, { href: "/ai-prompts-for-consultants", label: "AI for Consultants" }, { href: "/ai-prompts-finance", label: "AI Prompts for Finance" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">AI Models</h3>
            <ul className="space-y-2">
              {[{ href: "/chatgpt-prompts", label: "ChatGPT Prompts" }, { href: "/claude-prompts", label: "Claude Prompts" }, { href: "/gemini-prompts", label: "Gemini Prompts" }, { href: "/grok-ai-prompts", label: "Grok Prompts" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
