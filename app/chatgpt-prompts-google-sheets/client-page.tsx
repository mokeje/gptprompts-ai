'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

function CopyCard({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-white/20 hover:bg-white/[0.07] cursor-pointer"
      onClick={() => {
        navigator.clipboard.writeText(prompt)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
    >
      <p className="pr-10 text-[15px] leading-relaxed text-gray-300">{prompt}</p>
      <div className="absolute right-4 top-4 text-gray-500 group-hover:text-white transition-colors">
        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
      </div>
    </div>
  )
}

export default function GoogleSheetsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const promptCategories = [
    {
      title: 'Formula & Function Assistance',
      prompts: [
        'Create a VLOOKUP formula that matches customer IDs from Sheet1 column A with their purchase amounts in Sheet2 and returns the highest purchase. Handle cases where no match is found with a default value of 0.',
        'Write an IF statement combined with COUNTIFS that counts how many times each product appears in a sales list, then marks it as "High Volume" if it appears more than 5 times, otherwise "Standard".',
        'Generate a formula that calculates the percentage change month-over-month for revenue data in column B, accounting for months with zero revenue to avoid division errors.',
        'Create a SUMPRODUCT formula that multiplies quantities in column B by unit prices in column C, then applies a tiered discount: 10% off if total > $1000, 15% off if total > $5000.',
        'Write an INDEX-MATCH formula to pull employee performance ratings from a lookup table based on both employee name (column A) and review period (column B).',
        'Generate a formula using ARRAYFORMULA that automatically calculates running totals for a sales column, updating as new data is added.'
      ]
    },
    {
      title: 'Data Automation & Cleanup',
      prompts: [
        'Create a script that automatically removes duplicate rows from a Google Sheet based on column A, keeping only the first occurrence and logging how many duplicates were removed.',
        'Write a formula-based solution that splits full names in column A into first names (column B) and last names (column C) using text functions.',
        'Generate a process to automatically validate email addresses in column A, flagging invalid formats with a helper column that marks them as "Valid" or "Invalid".',
        'Create an automated data cleanup solution that trims extra spaces from all cells in a range, removes leading/trailing whitespace, and converts text to proper case.',
        'Write a formula that extracts domain names from email addresses in column A and lists them with a count of how many emails use each domain.',
        'Generate an automation that consolidates data from multiple sheets into a summary sheet, deduplicating entries and maintaining data integrity.'
      ]
    },
    {
      title: 'Analytics & Reporting',
      prompts: [
        'Create a dashboard template that tracks key metrics: total revenue, average transaction value, customer count, and month-over-month growth rate, with conditional formatting for trends.',
        'Write formulas that segment customers by purchase frequency (1-time buyer, repeat, loyal) and calculate lifetime value for each segment.',
        'Generate a weekly performance report that pulls data from raw transaction logs, calculates key metrics by day, and highlights top performers and underperformers.',
        'Create a cohort analysis sheet that groups customers by signup month and tracks retention, repeat purchase rate, and revenue contribution over time.',
        'Write a formula system that calculates marketing ROI by campaign, comparing ad spend against attributed revenue, with variance analysis from forecast.',
        'Generate an automated inventory tracking sheet that monitors stock levels, flags items below reorder points, and projects when replenishment is needed based on usage velocity.'
      ]
    },
    {
      title: 'Business Process Automation',
      prompts: [
        'Create an automated expense tracking sheet with categories, approval workflows, and a summary that flags expenses exceeding budget by department.',
        'Write a formula-based project management template that calculates task completion percentage, identifies overdue items, and provides a timeline view of project health.',
        'Generate an automated employee timesheet system that calculates hours worked, applies overtime rules (1.5x after 40 hours), and totals labor costs by department.',
        'Create a lead scoring system in Google Sheets that weights multiple factors (engagement level, company size, budget) and automatically ranks leads by conversion probability.',
        'Write an automated invoice generation tool that pulls customer information, itemizes charges based on a pricing table, and calculates totals with applicable taxes.',
        'Generate a customer feedback aggregation sheet that collects responses from multiple sources, categorizes sentiment, and identifies top issues for resolution.'
      ]
    },
    {
      title: 'Advanced Formulas & Logic',
      prompts: [
        'Create a complex nested formula that calculates commission tiers: 5% on first $10K, 8% on $10K-$50K, 12% on amounts over $50K, all from a single sales amount.',
        'Write a formula combining FILTER, SORT, and conditional logic to automatically rank sales by region, filter out underperformers, and sort by revenue descending.',
        'Generate a scenario planning template where changing assumptions in one section automatically updates financial projections and variance analysis.',
        'Create a formula that simulates different pricing strategies and shows the impact on margin, volume, and revenue for sensitivity analysis.',
        'Write a dynamic filtering system using FILTER and QUERY functions that lets users filter data by multiple criteria without creating separate sheets.',
        'Generate a recursive-style formula structure that builds organization hierarchies, showing reporting relationships and team sizes at each level.'
      ]
    },
    {
      title: 'Integration & Connectivity',
      prompts: [
        'Create a Google Sheets integration that pulls real-time data from an external API using IMPORTDATA and refreshes automatically every hour.',
        'Write a script that syncs data between Google Sheets and a CRM system, pushing updates in one direction and logging all changes for audit purposes.',
        'Generate a form-to-sheet automation that captures form responses, deduplicates submissions based on email, and assigns them to team members for follow-up.',
        'Create a Slack notification system triggered by Google Sheets that alerts the team when specific thresholds are crossed (e.g., inventory runs low).',
        'Write a Gmail integration that creates a ticket in Google Sheets whenever an email arrives with a specific label, extracting key information automatically.',
        'Generate a trigger-based workflow that exports data from Google Sheets to multiple destinations (CSV files, email summaries, other sheets) on a daily schedule.'
      ]
    }
  ]

  const faqs = [
    {
      question: 'Can I use these prompts with standard Google Sheets or do I need Apps Script?',
      answer: 'Most formula-based prompts work directly in Google Sheets. For automations requiring scripts or integrations, you\'ll need Apps Script (free, accessible from Tools > Script Editor). The prompts specify which approach is needed.'
    },
    {
      question: 'How do I handle errors when my formulas reference empty cells?',
      answer: 'Use IFERROR() or IFNA() to wrap your formulas. Example: =IFERROR(VLOOKUP(...), "Not Found"). This prevents #N/A or #VALUE! errors and displays your custom fallback instead.'
    },
    {
      question: 'What\'s the best way to protect my formulas from being accidentally edited?',
      answer: 'Use Sheet Protection: Right-click the sheet tab > Protect sheets and ranges > Set protection rules. You can lock formula cells while allowing users to edit data cells. Create a second tab for user inputs and reference them in your formula sheet.'
    },
    {
      question: 'How do I make my Google Sheets faster when working with large datasets?',
      answer: 'Avoid volatile functions like TODAY() and RAND() in every cell. Use QUERY or FILTER instead of multiple VLOOKUP formulas. Archive old data to separate sheets. Use named ranges for frequently referenced data. Consider splitting data across multiple sheets by time period or category.'
    },
    {
      question: 'Can I schedule Google Sheets to send reports automatically?',
      answer: 'Yes. Use Apps Script with the MailApp service or Gmail API to send scheduled emails. Set a trigger (Tools > Triggers) to run daily. The script can extract data, format it as an email body or attachment, and send to stakeholders.'
    },
    {
      question: 'How do I create a dropdown list with conditional options in Google Sheets?',
      answer: 'Use Data Validation with a custom formula. Select cells, go to Data > Data validation > List from a range > Use a formula like =FILTER(column_range, criteria). This dynamically updates dropdown options based on another column\'s value.'
    },
    {
      question: 'What\'s the difference between VLOOKUP and INDEX-MATCH, and when should I use each?',
      answer: 'VLOOKUP searches left to right only; INDEX-MATCH is more flexible and can search right to left. INDEX-MATCH is also more efficient for large datasets. Use INDEX-MATCH for complex lookups; VLOOKUP for simple ones. Both work, but INDEX-MATCH is generally considered best practice.'
    },
    {
      question: 'How do I prevent accidental deletions when multiple people edit the same sheet?',
      answer: 'Enable Version History (File > Version history) to track all changes. Protect critical sheets or ranges. Use Data Validation to restrict what users can enter. Create read-only views for sensitive data. Set up email notifications for major changes (Tools > Notification rules).'
    },
    {
      question: 'Can I create calculated columns that update automatically when new rows are added?',
      answer: 'Yes. Use ARRAYFORMULA at the top of a column with your formula. Example: =ARRAYFORMULA(IF(A:A="","", formula_here)). This applies the formula to all rows automatically, including new ones as they\'re added.'
    },
    {
      question: 'How do I export data from Google Sheets while maintaining formatting?',
      answer: 'Download as Excel (.xlsx) to preserve most formatting, or as PDF for exact visual appearance. For scripted exports, use Apps Script with the Advanced Sheets API to control formatting programmatically. CSV exports lose formatting but are easiest to integrate with other systems.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/5 px-6 py-20 sm:px-12 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F9D58]/5 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-[#0F9D58]/20 bg-[#0F9D58]/5">
            <span className="text-sm font-medium text-[#0F9D58]">Google Sheets Automation</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            ChatGPT Prompts for Google Sheets Formulas & Automation
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Master Google Sheets with 36 expert-crafted ChatGPT prompts. Build powerful formulas, automate workflows, create dashboards, and scale spreadsheet operations without code.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-lg bg-[#0F9D58] text-black font-semibold hover:bg-[#0F9D58]/90 transition-colors">
              Copy All Prompts
            </button>
            <button className="px-8 py-3 rounded-lg border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Prompt Categories */}
      <div className="px-6 py-16 sm:px-12">
        <div className="max-w-4xl">
          {promptCategories.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">{category.title}</h2>
              <div className="grid gap-4">
                {category.prompts.map((prompt, pIdx) => (
                  <CopyCard key={pIdx} prompt={prompt} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 py-16 sm:px-12 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-white">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <span className={`transform transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02] text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Pages Section */}
      <div className="px-6 py-16 sm:px-12 border-t border-white/5">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">Explore More Prompt Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a href="/ai-prompts-linkedin" className="group p-6 rounded-lg border border-white/10 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#0A66C2]">AI Prompts for LinkedIn</h3>
              <p className="text-sm text-gray-400">Posts, profiles, and outreach strategies</p>
            </a>
            <a href="/ai-prompts-for-startups" className="group p-6 rounded-lg border border-white/10 hover:border-[#FF6B35]/50 hover:bg-[#FF6B35]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FF6B35]">AI Prompts for Startups</h3>
              <p className="text-sm text-gray-400">Founder strategies and growth hacks</p>
            </a>
            <a href="/ai-prompts-for-researchers" className="group p-6 rounded-lg border border-white/10 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#7C3AED]">AI Prompts for Researchers</h3>
              <p className="text-sm text-gray-400">Academic research and literature reviews</p>
            </a>
            <a href="/ai-prompts-for-writers" className="group p-6 rounded-lg border border-white/10 hover:border-[#D946EF]/50 hover:bg-[#D946EF]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#D946EF]">AI Prompts for Writers</h3>
              <p className="text-sm text-gray-400">Content creation and storytelling</p>
            </a>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ChatGPT Prompts for Google Sheets Formulas & Automation',
            description: 'Master Google Sheets with 36 expert-crafted ChatGPT prompts for formulas, automation, analytics, and business processes.',
            image: 'https://gptprompts.ai/og-image.png',
            datePublished: new Date().toISOString(),
            author: {
              '@type': 'Organization',
              name: 'GPT Prompts'
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />
    </div>
  )
}
