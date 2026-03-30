'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Grid3X3, Zap, BarChart3, Settings, Link2 } from 'lucide-react';

const accent = '#0F9D58';

interface CopyCardProps {
  title: string;
  prompt: string;
  tag: string;
}

function CopyCard({ title, prompt, tag }: CopyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-4 p-4 border rounded-lg border-[#1a2b20] hover:border-[#0F9D58] transition-colors bg-[#060a08]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>{tag}</span>
      </div>
      <p className="text-white text-sm font-medium mb-2">{title}</p>
      <pre className="text-gray-400 text-sm mb-3 leading-relaxed whitespace-pre-wrap font-sans">{prompt}</pre>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors border"
        style={{
          color: copied ? accent : '#888',
          borderColor: copied ? accent : '#333',
        }}
      >
        {copied ? <><Check size={14} />Copied!</> : <><Copy size={14} />Copy</>}
      </button>
    </div>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

function FAQ({ item }: { item: FAQItem }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-3 border border-[#1a2b20] rounded-lg overflow-hidden hover:border-[#0F9D58] transition-colors">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between bg-[#060a08] hover:bg-[#0a110d] transition-colors"
      >
        <h3 className="font-semibold text-white text-left text-sm">{item.question}</h3>
        {expanded
          ? <ChevronUp size={18} style={{ color: accent }} className="flex-shrink-0" />
          : <ChevronDown size={18} className="flex-shrink-0 text-gray-500" />}
      </button>
      {expanded && (
        <div className="p-4 bg-[#030605] border-t border-[#1a2b20] text-gray-300 text-sm leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

const faqItems: FAQItem[] = [
  {
    question: 'Can I use ChatGPT to build formulas for Google Sheets directly?',
    answer: 'Yes. Describe what you want in plain English — "I want to look up the revenue in column B for each customer ID in column A, matched against a reference table on Sheet2" — and ChatGPT will write the formula. You can paste the output directly into Google Sheets. Always verify the formula logic with a few test cases before deploying across large datasets.',
  },
  {
    question: 'What\'s the difference between using VLOOKUP and INDEX-MATCH, and when should I use each?',
    answer: 'VLOOKUP can only search left-to-right and breaks when columns are inserted. INDEX-MATCH is more flexible — it searches in any direction, handles inserted columns gracefully, and is faster on large datasets. For simple lookups on static tables, VLOOKUP is fine. For anything complex — reverse lookups, dynamic column references, or large data ranges — INDEX-MATCH is the better habit. In newer Google Sheets, XLOOKUP combines the simplicity of VLOOKUP with the flexibility of INDEX-MATCH.',
  },
  {
    question: 'How do I use ChatGPT to help with Google Apps Script?',
    answer: 'Describe what you want to automate in plain English: "Write an Apps Script that reads column A, checks if each value is greater than 100, and sends an email to the address in column B with the subject \'Alert: threshold exceeded\'." ChatGPT generates working script code. Open the Script Editor (Extensions > Apps Script), paste the code, and test. Always run scripts on a copy of your data first. Ask ChatGPT to add error handling and logging for production use.',
  },
  {
    question: 'How can I clean messy data in Google Sheets using ChatGPT prompts?',
    answer: 'Describe the messiness: "I have a column of phone numbers in mixed formats — some with country codes, some without, some with dashes, some without. Write a formula to normalize them all to +1XXXXXXXXXX format." ChatGPT will generate REGEXREPLACE or custom text function combinations. For large cleaning jobs, ask for an Apps Script that processes the entire column automatically.',
  },
  {
    question: 'What formulas should I learn first for business analytics in Google Sheets?',
    answer: 'Priority order: SUMIF/SUMIFS (conditional totals), COUNTIF/COUNTIFS (conditional counts), VLOOKUP or INDEX-MATCH (lookups), ARRAYFORMULA (apply formulas to entire columns), QUERY (SQL-like data filtering), FILTER (dynamic row filtering), and IMPORTRANGE (pull data from other sheets). Mastering these seven covers 90% of business analytics use cases in Google Sheets.',
  },
  {
    question: 'How do I create a dynamic dashboard that auto-updates in Google Sheets?',
    answer: 'Build your raw data on one sheet and your dashboard on another. Use QUERY or FILTER formulas that reference the raw data sheet — these automatically update when data changes. Use conditional formatting to add visual signals (green/yellow/red). Link to Google Forms for automatic data entry. For charts, set the data range to include blank future rows so charts extend automatically. Use SPARKLINE for compact in-cell trend indicators.',
  },
  {
    question: 'Can I schedule Google Sheets to send reports automatically?',
    answer: 'Yes, via Apps Script. Write a script that formats your data and uses MailApp.sendEmail() to send it. Then add a time-based trigger (in the Script Editor under Triggers) to run it daily, weekly, or on a custom schedule. This is how you build automated weekly reports, inventory alerts, or budget notifications without any paid tools.',
  },
  {
    question: 'What\'s the best way to protect important formulas from being accidentally overwritten?',
    answer: 'Use range protection: select the cells with formulas, right-click > Protect range > set who can edit. For dashboards, protect all formula cells and only leave input cells editable. Consider a separate "Inputs" sheet where users enter data, and a "Reports" sheet with protected formulas that reference those inputs. Version history (File > Version history) is your safety net if something gets overwritten.',
  },
  {
    question: 'How do I make Google Sheets run faster when it\'s slowing down?',
    answer: 'Main culprits: volatile functions (NOW(), TODAY(), RAND()) that recalculate on every change; ARRAYFORMULA on entire columns including millions of empty cells; excessive IMPORTRANGE calls; and too many complex nested formulas. Fixes: limit volatile function use, cap ARRAYFORMULA ranges with IF(A1="","",formula), consolidate IMPORTRANGE calls, and archive old data. Check File > Spreadsheet settings to set calculation to "On change" rather than "On change and every minute".',
  },
  {
    question: 'Can I connect Google Sheets to external APIs or other tools with ChatGPT\'s help?',
    answer: 'Yes. ChatGPT can write Apps Script code to fetch data from REST APIs using UrlFetchApp, connect to Google services (Gmail, Calendar, Drive), or integrate with third-party tools. Describe the API you want to connect to and what data you need. For tools with no API (like some CRMs), ChatGPT can help design a Zapier or Make.com workflow that pushes data into Sheets automatically.',
  },
];

export default function GoogleSheetsPromptsPage() {
  return (
    <div className="min-h-screen bg-[#030605]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ChatGPT Prompts for Google Sheets: Formulas, Automation & Dashboards',
            description: 'Master Google Sheets with expert ChatGPT prompts for formula writing, data cleaning, analytics dashboards, business process automation, and Apps Script integration.',
            image: 'https://gptprompts.ai/google-sheets-og.jpg',
            datePublished: '2026-03-28',
            dateModified: '2026-03-28',
            author: { '@type': 'Organization', name: 'GPT Prompts AI' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="border-b border-[#1a2b20] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Grid3X3 size={32} style={{ color: accent }} />
            <h1 className="text-4xl font-bold text-white">ChatGPT Prompts for Google Sheets</h1>
          </div>
          <p className="text-gray-400 text-lg mb-4">
            Build powerful formulas, automate workflows, create dashboards, and clean data faster. Expert prompts for Google Sheets users at every skill level.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Formulas', 'Automation', 'Dashboards', 'Apps Script'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium border" style={{ borderColor: accent, color: accent }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Section 1: Formulas */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Grid3X3 size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Formula Writing & Explanation</h2>
          </div>
          <CopyCard
            tag="Formula"
            title="VLOOKUP with error handling"
            prompt={`Write a VLOOKUP formula that:
- Looks up the value in cell A2 in the first column of Sheet2!A:D
- Returns the value from the 3rd column of that range
- Handles cases where no match is found by returning "Not found" instead of #N/A
- Also show me the INDEX-MATCH equivalent that achieves the same result`}
          />
          <CopyCard
            tag="Formula"
            title="Multi-condition SUMIFS for business reporting"
            prompt={`Write a SUMIFS formula that totals sales amounts from column C where:
- The date in column A is within the current month
- The region in column B matches the value in cell F2
- The status in column D is either "Closed" or "Won"
Explain each argument so I can adapt it for other conditions.`}
          />
          <CopyCard
            tag="Formula"
            title="ARRAYFORMULA for auto-calculated columns"
            prompt={`I want column E to automatically calculate the profit margin for every row: (Revenue in column C - Cost in column D) / Revenue in column C, formatted as a percentage.
Write an ARRAYFORMULA that:
- Goes in cell E1 and covers all rows automatically as new data is added
- Skips the header row
- Shows a blank instead of an error when column C is empty`}
          />
          <CopyCard
            tag="Formula"
            title="Dynamic tiered commission calculator"
            prompt={`Write a formula that calculates commission for sales amounts in column B using these tiers:
- 0–$10,000: 5%
- $10,001–$50,000: 8%
- $50,001+: 12%

The commission should apply the correct rate to the full amount (not marginal — flat rate per tier).
Show me both a nested IF version and an IFS version.`}
          />
        </section>

        {/* Section 2: Data Cleaning */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Zap size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Data Cleaning & Transformation</h2>
          </div>
          <CopyCard
            tag="Data Cleaning"
            title="Normalise messy text data"
            prompt={`I have a column of company names that are inconsistent — some are all caps, some lowercase, some with extra spaces, some with "Ltd", "Limited", "Ltd." inconsistently.
Write formulas (or an Apps Script) to:
1. Trim extra spaces (leading, trailing, and double-spaces)
2. Convert to proper case (first letter of each word capitalised)
3. Standardise "Limited" / "Ltd." / "Ltd" to "Ltd"
Show me the formula approach first, then the Apps Script approach for bulk processing.`}
          />
          <CopyCard
            tag="Data Cleaning"
            title="Split full names into first and last"
            prompt={`Column A contains full names in the format "FirstName LastName". Some entries have middle names too: "FirstName MiddleName LastName".
Write formulas to:
- Column B: Extract first name only
- Column C: Extract last name only (the last word in the string)
- Column D: Flag rows that have a middle name (TRUE/FALSE)
Handle edge cases where someone has only one name.`}
          />
          <CopyCard
            tag="Data Cleaning"
            title="Remove duplicates and log changes via Apps Script"
            prompt={`Write an Apps Script that:
1. Scans column A for duplicate values (keeping the first occurrence)
2. Deletes all duplicate rows
3. Logs the number of rows deleted and the values that were removed to a "Change Log" sheet with timestamp
4. Sends a summary email to [my email] after completion

Add error handling so if something goes wrong, the script logs the error and exits cleanly without partial deletion.`}
          />
          <CopyCard
            tag="Data Cleaning"
            title="Email validation with formula"
            prompt={`Write a formula in column B that validates whether each email address in column A is properly formatted.
Mark each cell as:
- "Valid" — if it matches standard email format (has @ sign, domain, extension)
- "Invalid" — if it's missing @ sign or domain
- "Empty" — if column A is blank

Use REGEXMATCH. Explain the regex pattern so I can modify it if needed.`}
          />
        </section>

        {/* Section 3: Analytics & Dashboards */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Data Analysis & Dashboards</h2>
          </div>
          <CopyCard
            tag="Analytics"
            title="Monthly KPI dashboard with auto-update"
            prompt={`Design a Google Sheets dashboard structure for tracking these monthly KPIs: Total Revenue, New Customers, Churn Rate, Average Order Value, and MoM Growth %.

Include:
- Where to put raw data vs summary
- QUERY or SUMIFS formulas to pull monthly totals automatically
- Conditional formatting rules to flag metrics above/below target
- SPARKLINE formulas to show trends in-cell
- A drop-down to filter by region or product line`}
          />
          <CopyCard
            tag="Analytics"
            title="Cohort retention analysis"
            prompt={`I have customer transaction data with columns: Customer ID, First Purchase Date, Transaction Date, Revenue.
Build a cohort analysis in Google Sheets that:
- Groups customers by the month of their first purchase (cohort)
- Shows retention rate for each cohort in months 0, 1, 2, 3, 6, 12
- Calculates cumulative revenue per cohort
- Uses conditional formatting to heat-map retention (green = high, red = low)
Provide both the data structure and the formulas needed.`}
          />
          <CopyCard
            tag="Analytics"
            title="Sales pipeline tracker with probability weighting"
            prompt={`Create a sales pipeline sheet with:
- Columns: Deal Name, Stage, Deal Value, Close Date, Probability %, Owner
- A weighted pipeline value column (Value × Probability)
- Summary section showing: Total Pipeline, Weighted Pipeline, Count by Stage
- QUERY formula that shows only deals closing in the next 30 days
- Conditional formatting: red for past close dates, yellow for <7 days, green for on track`}
          />
          <CopyCard
            tag="Analytics"
            title="Budget vs actuals variance tracker"
            prompt={`Build a budget vs actuals sheet for [monthly/quarterly] tracking with:
- Input area for budget figures by category
- Input area for actual spend
- Variance column (Actual - Budget) with conditional formatting (red = over budget)
- % variance column
- YTD totals for both budget and actuals
- A SPARKLINE trend chart for each category
- Alert formula that flags any category more than 10% over budget`}
          />
        </section>

        {/* Section 4: Automation */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Settings size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Business Process Automation</h2>
          </div>
          <CopyCard
            tag="Automation"
            title="Automated invoice generator"
            prompt={`Write an Apps Script that generates a PDF invoice from Google Sheets data:
- Input sheet has: Client Name, Email, Line Items (description, qty, unit price)
- Script calculates subtotal, tax (at rate in cell B1), and total
- Creates a formatted invoice in a new sheet
- Exports it as PDF to Google Drive in a folder called "Invoices/[Month-Year]"
- Emails the PDF to the client email address
Include a trigger so it runs when a "Generate Invoice" checkbox is ticked in column H.`}
          />
          <CopyCard
            tag="Automation"
            title="Slack or email alert when threshold is crossed"
            prompt={`Write an Apps Script that monitors a Google Sheet and sends an alert when:
- Inventory in column C drops below the reorder point in column D
- A deal in the pipeline sheet changes stage to "Closed Lost"
- A budget category exceeds 90% of its budget allocation

For each alert, send an email to [email address] with: which item triggered the alert, current value, threshold, and a link to the sheet.
Set up the trigger to run every hour.`}
          />
          <CopyCard
            tag="Automation"
            title="Form response auto-assignment and notification"
            prompt={`I have a Google Form that collects support ticket submissions. Responses go to a Google Sheet.
Write an Apps Script (triggered on form submit) that:
1. Assigns each new ticket to a team member from a rotation list in Sheet2!A:A
2. Adds "Assigned" status and assignee name to columns G and H
3. Sends an email to the assignee with ticket details and a link to the sheet
4. Sends a confirmation email to the submitter with their ticket number
Include error handling if the rotation list is empty.`}
          />
          <CopyCard
            tag="Automation"
            title="Weekly report email with data summary"
            prompt={`Write an Apps Script that sends a weekly email report every Monday at 8am containing:
- Total revenue for the past 7 days (from the transactions sheet)
- Number of new customers this week
- Top 3 products by revenue this week
- Any budget categories that exceeded their weekly allocation
Format the email in clean HTML with a table. Send to a distribution list stored in Sheet2!A:A.
Set up the time-based trigger automatically within the script.`}
          />
        </section>

        {/* Section 5: Advanced Formulas */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Link2 size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Advanced Formulas & Integrations</h2>
          </div>
          <CopyCard
            tag="Advanced"
            title="QUERY function for dynamic filtering"
            prompt={`I have a dataset on Sheet1 with columns: Date, Region, Product, Sales, Returns, Net Sales.
Write QUERY formulas for:
1. Show all rows where Region = the value in cell B1 AND Sales > 1000, sorted by Date descending
2. Summarise total Net Sales and count of transactions by Product for the current month
3. Show top 10 products by Net Sales for a date range specified by cells D1 and D2

Explain the QUERY syntax so I can write my own variations.`}
          />
          <CopyCard
            tag="Advanced"
            title="IMPORTRANGE with dynamic sheet reference"
            prompt={`I want to pull data from multiple Google Sheets (one per month) into a master summary sheet.
Sheet URLs are stored in column A of my "Sources" tab.
Write a solution that:
- Uses IMPORTRANGE to pull the "Summary" tab from each source sheet
- Combines them into one continuous table on the master sheet
- Handles errors gracefully if a source sheet is unavailable
- Includes a column showing which source sheet each row came from`}
          />
          <CopyCard
            tag="Advanced"
            title="Scenario planning model"
            prompt={`Build a scenario planning model in Google Sheets with three scenarios: Conservative, Base Case, Optimistic.
Structure:
- Assumptions section (inputs that change per scenario): growth rate, margin, CAC, churn
- Dropdown in cell B1 to select which scenario to view
- All calculated outputs update automatically based on selection
- Comparison table showing all three scenarios side by side
- Key insight row showing which metrics differ most between scenarios
Use named ranges and indirect references so the model is easy to maintain.`}
          />
          <CopyCard
            tag="Advanced"
            title="Live API data integration via Apps Script"
            prompt={`Write an Apps Script that fetches data from a public REST API (example: exchange rates from https://api.exchangerate-api.com/v4/latest/USD) and writes it to my Google Sheet:
- Fetch the JSON response
- Parse the relevant fields (in this case: currency codes and rates)
- Write them to a sheet called "Exchange Rates" with headers and today's timestamp
- Set a daily trigger to refresh automatically
- Handle API errors with a logged error message rather than crashing

Show me how to adapt this pattern for any REST API that returns JSON.`}
          />
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div>
            {faqItems.map((item, i) => (
              <FAQ key={i} item={item} />
            ))}
          </div>
        </section>

        {/* Related Pages */}
        <section className="border-t border-[#1a2b20] pt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Related Prompts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'ChatGPT Prompts for Excel', href: '/chatgpt-prompts-excel' },
              { name: 'AI Prompts for Data Analysts', href: '/ai-prompts-for-data-analysts' },
              { name: 'ChatGPT Data Analysis Prompts', href: '/chatgpt-data-analysis' },
              { name: 'AI Prompts for Finance', href: '/ai-prompts-personal-finance' },
              { name: 'AI Prompts for Startups', href: '/ai-prompts-for-startups' },
              { name: 'ChatGPT Prompts PowerPoint', href: '/chatgpt-prompts-powerpoint' },
              { name: 'AI Prompts for Researchers', href: '/ai-prompts-for-researchers' },
              { name: 'Gemini Advanced Prompts', href: '/gemini-advanced-prompts' },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="px-4 py-3 rounded border border-[#1a2b20] text-gray-300 hover:border-[#0F9D58] hover:text-[#0F9D58] transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
