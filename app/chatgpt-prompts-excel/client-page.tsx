'use client';

import { useState } from 'react';
import { ChevronDown, Copy, Check, Zap, Grid3x3, TrendingUp, BarChart3, BookOpen } from 'lucide-react';

interface CopyCardProps {
  prompt: string;
}

function CopyCard({ prompt }: CopyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy');
    }
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#217346]/50 transition-colors">
      <p className="text-sm text-gray-300 mb-3 line-clamp-3">{prompt}</p>
      <button
        onClick={handleCopy}
        className="w-full bg-[#217346] hover:bg-[#1a5a37] text-white py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors"
      >
        {copied ? (
          <>
            <Check size={16} /> Copied!
          </>
        ) : (
          <>
            <Copy size={16} /> Copy Prompt
          </>
        )}
      </button>
    </div>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

function FAQ({ items }: FAQProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden">
          <button
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            className="w-full p-4 text-left flex items-center justify-between hover:bg-[#222] transition-colors"
          >
            <h3 className="font-medium text-gray-100">{item.question}</h3>
            <ChevronDown
              size={18}
              className={`text-[#217346] transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`}
            />
          </button>
          {expandedIndex === index && (
            <div className="bg-[#0f0f0f] px-4 py-3 border-t border-[#333] text-gray-300 text-sm">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ExcelPromptsPage() {
  const faqItems: FAQItem[] = [
    {
      question: 'What Excel tasks can ChatGPT help with?',
      answer: 'ChatGPT can help with formula creation, data analysis, pivot tables, VLOOKUP, conditional formatting, automation through VBA/macros, data cleaning, and generating complex Excel workflows.',
    },
    {
      question: 'How do I use these prompts in Excel?',
      answer: 'Copy a prompt and paste it into ChatGPT. Describe your specific data or requirements, and ChatGPT will generate formulas, scripts, or step-by-step instructions tailored to your needs.',
    },
    {
      question: 'Can these prompts work with Google Sheets?',
      answer: 'Yes, most Excel prompts are compatible with Google Sheets. Some advanced features like VBA macros are Excel-specific, but formulas and data manipulation prompts work across both platforms.',
    },
    {
      question: 'Do I need Excel experience to use these prompts?',
      answer: 'No. These prompts are designed for all skill levels. ChatGPT will explain complex formulas and provide beginner-friendly guidance alongside advanced techniques.',
    },
    {
      question: 'How can I automate repetitive Excel tasks?',
      answer: 'Use prompts related to VBA macros, Power Query, or automation scripts. ChatGPT can generate code to automate data entry, report generation, and data transformations.',
    },
    {
      question: 'What&apos;s the best way to clean messy data in Excel?',
      answer: 'Use data cleaning prompts to generate formulas for removing duplicates, trimming whitespace, standardizing formats, and handling missing values. ChatGPT can build custom cleaning workflows.',
    },
    {
      question: 'Can I create advanced dashboards with these prompts?',
      answer: 'Yes. Use prompts for pivot tables, conditional formatting, and chart creation. ChatGPT can guide you through building interactive dashboards with formulas and visual elements.',
    },
    {
      question: 'How do I optimize large Excel files for performance?',
      answer: 'Ask ChatGPT about formula optimization, removing unnecessary calculations, using efficient functions like SUMIF instead of array formulas, and structuring data for better performance.',
    },
    {
      question: 'Are these prompts safe to use in professional environments?',
      answer: 'Yes, all prompts are designed for professional use. They follow Excel best practices and can be adapted for corporate workflows, financial analysis, and reporting requirements.',
    },
    {
      question: 'How can I master VLOOKUP and INDEX/MATCH?',
      answer: 'Use lookup prompts to understand the differences, get practical examples, and learn when to use each function. ChatGPT can break down complex lookups into understandable steps.',
    },
    {
      question: 'What&apos;s the fastest way to learn Excel formulas?',
      answer: 'Start with basic prompts for fundamental functions, then progress to intermediate and advanced formulas. Use prompts that explain the logic behind each formula rather than just giving answers.',
    },
    {
      question: 'Can these prompts help with financial modeling?',
      answer: 'Absolutely. Use prompts for building financial models, forecasting, sensitivity analysis, and creating scenario planning tools. ChatGPT can help structure complex financial calculations.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        body { font-family: 'Outfit', sans-serif; }
      `}</style>

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': ['Article', 'FAQPage'],
          headline: 'ChatGPT Prompts for Excel: Formulas, Automation & Data Analysis',
          description: 'Discover powerful ChatGPT prompts for Excel formulas, data analysis, automation, dashboards, and financial modeling.',
          datePublished: '2024-01-15',
          dateModified: '2024-03-28',
          author: {
            '@type': 'Organization',
            name: 'gptprompts.ai',
          },
          mainEntity: {
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          },
        })}
      </script>

      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Grid3x3 size={32} className="text-[#217346]" />
            <h1 className="text-4xl font-bold">ChatGPT Prompts for Excel</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Master Excel formulas, automate workflows, analyze data, and build dashboards with AI-powered prompts. From VLOOKUP to complex financial models, these prompts help you work smarter.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap size={24} className="text-[#217346]" />
            Formula & Function Prompts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CopyCard prompt="Create a VLOOKUP formula that finds a value from one Excel sheet and returns a corresponding value from another sheet. Handle errors with IFERROR so missing matches show 'Not Found' instead of #N/A." />
            <CopyCard prompt="Build an INDEX/MATCH formula that's more flexible than VLOOKUP. Show me how to use it for multiple criteria lookups and explain when it&apos;s better than VLOOKUP." />
            <CopyCard prompt="Generate a SUMIF formula to sum all values in column B where the corresponding value in column A equals 'Sales'. Then show me how to modify it for multiple criteria using SUMIFS." />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BarChart3 size={24} className="text-[#217346]" />
            Data Analysis & Cleanup Prompts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CopyCard prompt="I have a messy dataset with duplicate rows, extra spaces, and inconsistent formatting. Create an Excel workflow to: 1) Remove duplicates, 2) Trim whitespace, 3) Standardize date formats, 4) Identify missing values." />
            <CopyCard prompt="Show me how to create a pivot table in Excel that summarizes sales by region and product category. Then explain how to add filters and sort the results by revenue." />
            <CopyCard prompt="Build formulas to calculate: 1) Average sales per customer, 2) Month-over-month growth percentage, 3) Top 10% performing products. Use real Excel functions and explain each step." />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp size={24} className="text-[#217346]" />
            Automation & Macro Prompts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CopyCard prompt="Write a VBA macro that automatically: 1) Imports data from a CSV file, 2) Cleans and formats it, 3) Creates a pivot table, 4) Sends the report via email. Include error handling." />
            <CopyCard prompt="Create a Power Query script that pulls data from a web API or database, transforms it (filter, rename columns, remove nulls), and loads it into Excel automatically every morning." />
            <CopyCard prompt="Build a macro that generates personalized Excel reports. For each customer in my list, create a separate sheet with their specific data, charts, and a formatted summary page." />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen size={24} className="text-[#217346]" />
            Dashboard & Visualization Prompts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CopyCard prompt="Design an Excel dashboard that shows: 1) Revenue trends over time (line chart), 2) Sales by region (pie chart), 3) KPI cards (total sales, growth %), 4) Filters for dynamic updates." />
            <CopyCard prompt="Create conditional formatting rules that: 1) Highlight cells above/below targets, 2) Use color scales for performance ranges, 3) Add data bars for quick comparisons. Make it professional and readable." />
            <CopyCard prompt="Build an interactive Excel dashboard using slicers and timelines. Show monthly sales data that updates when I change the date range or select different regions. Include a summary KPI section." />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap size={24} className="text-[#217346]" />
            Advanced & Financial Modeling Prompts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CopyCard prompt="Build a 3-statement financial model in Excel: 1) Income statement, 2) Balance sheet, 3) Cash flow statement. Link them so changes in revenue automatically update all three." />
            <CopyCard prompt="Create a forecasting model using historical sales data. Generate 12-month projections with trend analysis, seasonal adjustments, and confidence intervals. Include sensitivity tables." />
            <CopyCard prompt="Design a break-even analysis tool. Input fixed costs, variable costs, and selling price. Calculate and visualize the break-even point. Add a slider to explore what-if scenarios." />
          </div>
        </section>

        <section className="bg-[#1a1a1a] rounded-lg p-8 border border-[#333] mb-12">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>

        <section className="bg-[#1a1a1a] rounded-lg p-8 border border-[#333]">
          <h2 className="text-2xl font-bold mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/chatgpt-prompts-business-plans"
              className="p-4 bg-[#0a0a0a] border border-[#333] rounded-lg hover:border-[#217346]/50 transition-colors"
            >
              <h3 className="font-semibold text-white mb-2">ChatGPT Prompts for Business Plans</h3>
              <p className="text-sm text-gray-400">Generate comprehensive business plans, market analysis, and financial projections.</p>
            </a>
            <a
              href="/ai-prompts-customer-service"
              className="p-4 bg-[#0a0a0a] border border-[#333] rounded-lg hover:border-[#217346]/50 transition-colors"
            >
              <h3 className="font-semibold text-white mb-2">AI Prompts for Customer Service</h3>
              <p className="text-sm text-gray-400">Create engaging responses, resolve issues, and improve customer satisfaction.</p>
            </a>
            <a
              href="/ai-prompts-presentations"
              className="p-4 bg-[#0a0a0a] border border-[#333] rounded-lg hover:border-[#217346]/50 transition-colors"
            >
              <h3 className="font-semibold text-white mb-2">AI Prompts for Presentations</h3>
              <p className="text-sm text-gray-400">Design compelling slides, structure narratives, and captivate audiences.</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
