'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Copy, Check, Sparkles, Zap, Users, Target, BarChart3, FileText, MessageSquare, Lightbulb } from 'lucide-react';

interface CopyCardProps {
  title: string;
  prompt: string;
  icon: React.ReactNode;
}

const CopyCard: React.FC<CopyCardProps> = ({ title, prompt, icon }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#0891B2] transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div style={{ color: '#0891B2' }}>{icon}</div>
          <h4 className="text-white font-semibold text-sm">{title}</h4>
        </div>
        <button
          onClick={handleCopy}
          className="p-2 hover:bg-[#2a2a2a] rounded-md transition-colors"
          aria-label="Copy prompt"
        >
          {copied ? (
            <Check size={18} style={{ color: '#0891B2' }} />
          ) : (
            <Copy size={18} className="text-[#666]" />
          )}
        </button>
      </div>
      <p className="text-[#999] text-sm leading-relaxed">{prompt}</p>
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#333] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-[#1a1a1a] hover:bg-[#222] flex items-center justify-between transition-colors"
      >
        <span className="text-white font-medium text-left">{question}</span>
        <ChevronDown
          size={20}
          className="text-[#0891B2] flex-shrink-0 transition-transform"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      {isOpen && (
        <div className="bg-[#1a1a1a] px-6 py-4 border-t border-[#333]">
          <p className="text-[#999] text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function AccountantsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI Prompts for Accountants: Automate Tasks, Reduce Errors, Save Hours',
    description:
      'A curated collection of AI prompts designed for accountants and finance professionals to streamline bookkeeping, tax planning, financial reporting, and client communication.',
    image: 'https://gptprompts.ai/og-image-accountants.png',
    datePublished: '2025-01-15',
    dateModified: '2026-03-28',
    author: {
      '@type': 'Organization',
      name: 'GPTPrompts.AI',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can AI help with tax compliance and calculations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, AI can assist with tax research, deduction identification, compliance checking, and calculation verification. However, final decisions should always be made by qualified accounting professionals familiar with specific regulations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can AI improve bookkeeping accuracy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI can help identify reconciliation discrepancies, categorize transactions, flag unusual patterns, and verify data entry accuracy. This reduces manual errors and speeds up the bookkeeping process.',
        },
      },
      {
        '@type': 'Question',
        name: 'What AI tools work best for financial reporting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI excels at data analysis, report generation, variance analysis, and narrative summaries. Tools like ChatGPT, Claude, and Gemini can help draft reports and interpret financial data.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can AI help with client communication?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. AI can draft client memos, explain complex concepts clearly, create templates for common communications, and help personalize messages for different client segments.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I ensure AI recommendations comply with accounting standards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Always verify AI outputs against current GAAP, IFRS, or relevant tax codes. Use AI as an assistant to enhance your expertise, not replace professional judgment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are these prompts suitable for both CPAs and bookkeepers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, these prompts are designed to help accounting professionals at all levels—from bookkeepers managing daily transactions to CPAs handling complex tax and audit work.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can AI detect accounting errors or fraud red flags?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI can identify unusual patterns, reconciliation discrepancies, and anomalies in data that warrant investigation. However, final fraud assessment requires human expertise.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I keep client data secure when using AI tools?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use privacy-focused AI tools, avoid sharing confidential client details, anonymize data, and ensure your AI tool provider complies with GDPR and relevant data protection regulations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can these prompts help with audit preparation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, AI can help organize documentation, prepare audit responses, create audit schedules, and draft audit memos. This streamlines preparation and ensures nothing is overlooked.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much time can I save using these AI prompts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Time savings vary by task, but accountants typically save 2-5 hours per week on routine tasks like bookkeeping, tax research, report drafting, and client communications.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-[#1a1a1a] rounded-full border border-[#333]">
              <span style={{ color: '#0891B2' }} className="text-sm font-semibold">
                AI Prompts for Accountants
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Automate Your Accounting Workflow
            </h1>
            <p className="text-[#999] text-lg max-w-2xl mx-auto">
              50+ proven AI prompts for bookkeeping, tax planning, financial reporting, and client
              communication. Save hours every week and eliminate manual errors.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 text-center">
              <div style={{ color: '#0891B2' }} className="text-3xl font-bold mb-2">
                50+
              </div>
              <div className="text-[#999] text-sm">Accounting Prompts</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 text-center">
              <div style={{ color: '#0891B2' }} className="text-3xl font-bold mb-2">
                5x
              </div>
              <div className="text-[#999] text-sm">Faster Tasks</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 text-center">
              <div style={{ color: '#0891B2' }} className="text-3xl font-bold mb-2">
                10 Hours+
              </div>
              <div className="text-[#999] text-sm">Weekly Savings</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 text-center">
              <div style={{ color: '#0891B2' }} className="text-3xl font-bold mb-2">
                100%
              </div>
              <div className="text-[#999] text-sm">Free Access</div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Bookkeeping & Reconciliation */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div style={{ color: '#0891B2' }}>
                <BarChart3 size={28} />
              </div>
              <h2 className="text-2xl font-bold">Bookkeeping & Reconciliation</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CopyCard
                icon={<FileText size={20} />}
                title="Bank Reconciliation Analyzer"
                prompt="I have the following bank statement and accounting records. Please identify all discrepancies, categorize them (timing differences, errors, missing transactions), and provide recommendations for resolving each:

Bank balance: [AMOUNT]
Accounting balance: [AMOUNT]
Outstanding items: [LIST]
Recent transactions: [PASTE DATA]

Format your analysis as: Issue → Category → Recommendation"
              />
              <CopyCard
                icon={<FileText size={20} />}
                title="Transaction Categorization Assistant"
                prompt="Please review these [NUMBER] transactions and categorize them appropriately for a [INDUSTRY] business. Group them by account (Income, Expenses, Assets, Liabilities) and flag any unusual or potentially miscategorized items.

Transactions:
[PASTE LIST]

For each flagged item, explain why recategorization might be needed."
              />
              <CopyCard
                icon={<FileText size={20} />}
                title="Expense Audit & Pattern Detection"
                prompt="Analyze these [TIMEFRAME] expense records for patterns, anomalies, or red flags. Identify:
- Unusual spending spikes
- Duplicate or near-duplicate transactions
- Transactions that might need additional documentation
- Spending that deviates from historical trends

Expenses: [PASTE DATA]

Present findings by category with severity levels."
              />
              <CopyCard
                icon={<FileText size={20} />}
                title="General Ledger Review Checklist"
                prompt="Create a general ledger review checklist for a [BUSINESS TYPE] with [APPROXIMATE TRANSACTION COUNT] monthly transactions. Include:
- Key accounts to review
- Common error types to look for
- Reconciliation procedures
- Documentation requirements

Tailor this for: [SPECIFIC FOCUS AREA]"
              />
            </div>
          </section>

          {/* Tax Planning & Compliance */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div style={{ color: '#0891B2' }}>
                <Zap size={28} />
              </div>
              <h2 className="text-2xl font-bold">Tax Planning & Compliance</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CopyCard
                icon={<FileText size={20} />}
                title="Tax Deduction Identifier"
                prompt="Based on this [BUSINESS TYPE] operating in [STATE/COUNTRY], identify all potential tax deductions for [TAX YEAR]. Consider:
- Industry-specific deductions
- Home office deductions (if applicable)
- Equipment and depreciation
- Professional development
- Business meals and entertainment

Business info: [DESCRIBE OPERATIONS]
Current deductions: [LIST WHAT'S CLAIMED]

Suggest any overlooked deductions with explanations."
              />
              <CopyCard
                icon={<FileText size={20} />}
                title="Quarterly Tax Estimate Calculator"
                prompt="Help me calculate quarterly estimated tax payments for [BUSINESS STRUCTURE: Sole Proprietor/Partnership/S-Corp/C-Corp] in [STATE].

YTD income: [AMOUNT]
Projected annual income: [AMOUNT]
Previous year tax liability: [AMOUNT]
Expected deductions: [AMOUNT]
Quarterly payment history: [OPTIONAL]

Provide Q[QUARTER] estimated payment with explanation of calculation."
              />
              <CopyCard
                icon={<FileText size={20} />}
                title="Tax Compliance Deadline Tracker"
                prompt="Create a comprehensive tax compliance calendar for [YEAR] for a [BUSINESS STRUCTURE] operating in [STATE/COUNTRY]. Include:
- Federal filing deadlines
- State filing deadlines
- Payroll tax due dates
- Sales tax deadlines (if applicable)
- 1099/W2 requirements
- Required documentation

Format as a timeline with reminders and action items."
              />
              <CopyCard
                icon={<FileText size={20} />}
                title="Tax Strategy Optimizer"
                prompt="Given the following financial situation, suggest tax optimization strategies:

Business structure: [CURRENT STRUCTURE]
Income level: [AMOUNT]
Deductions claimed: [AMOUNT]
State of operation: [STATE]
Industry: [INDUSTRY]
Projected growth: [OUTLOOK]

Analyze whether structure changes, timing strategies, or deduction opportunities could reduce tax liability while remaining compliant."
              />
            </div>
          </section>

          {/* Financial Reporting */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div style={{ color: '#0891B2' }}>
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold">Financial Reporting</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CopyCard
                icon={<FileText size={20} />}
                title="Financial Statement Narrative Generator"
                prompt="Based on these financial statements, generate a professional narrative summary for [REPORT TYPE: Annual Report/Management Discussion/Quarterly Review]:

Income Statement: [PASTE DATA]
Balance Sheet: [PASTE DATA]
Cash Flow: [PASTE DATA]
Prior period comparison: [PASTE DATA]

Include:
- Overall performance summary
- Key metrics and trends
- Variances from prior period
- Significant events or changes"
              />
              <CopyCard
                icon={<FileText size={20} />}
                title="Variance Analysis Explainer"
                prompt="Help me explain these budget variances to [AUDIENCE: Management/Board/Investors]:

Budgeted vs Actual results:
[PASTE DETAILED VARIANCE DATA]

Create clear explanations for:
- Major positive variances
- Concerning negative variances
- Overall performance assessment
- Recommendations for next period"
              />
              <CopyCard
                icon={<FileText size={20} />}
                title="Financial Ratio Analyst"
                prompt="Calculate and interpret key financial ratios for this [INDUSTRY] company:

Balance Sheet: [PASTE]
Income Statement: [PASTE]
Prior year data: [PASTE]

Analyze:
- Liquidity ratios (Current, Quick, Cash)
- Profitability ratios (Margins, ROA, ROE)
- Efficiency ratios (Asset Turnover, Receivable Days)
- Leverage ratios (Debt-to-Equity, Interest Coverage)

Compare to industry benchmarks and prior year."
              />
              <CopyCard
                icon={<FileText size={20} />}
                title="Cash Flow Forecast Builder"
                prompt="Create a [NUMBER]-month cash flow forecast for [BUSINESS TYPE]:

Current cash position: [AMOUNT]
Historical monthly revenue: [PASTE DATA]
Fixed monthly expenses: [LIST]
Variable expenses (as % of revenue): [PERCENTAGES]
Planned capital expenditures: [LIST WITH DATES]
Seasonal patterns: [DESCRIBE]

Identify potential cash shortfalls and working capital needs."
              />
            </div>
          </section>

          {/* Client Communication */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div style={{ color: '#0891B2' }}>
                <Users size={28} />
              </div>
              <h2 className="text-2xl font-bold">Client Communication</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CopyCard
                icon={<FileText size={20} />}
                title="Client Tax Letter Template"
                prompt="Draft a professional tax planning letter for a [CLIENT TYPE: Individual/Small Business/Corporation] client:

Key points to cover:
- [ITEM 1]
- [ITEM 2]
- [ITEM 3]

Client context:
- Income level: [AMOUNT]
- Business structure: [STRUCTURE]
- Recent changes: [DESCRIBE]

Tone: [Professional/Friendly/Formal]
Length: [Short/Standard/Detailed]"
              />
              <CopyCard
                icon={<FileText size={20} />}
                title="Financial Concept Explainer"
                prompt="Explain the following accounting/financial concepts to a non-financial client in simple, clear language:

Concepts to explain:
1. [CONCEPT 1] - Why it matters: [RELEVANCE]
2. [CONCEPT 2] - Why it matters: [RELEVANCE]
3. [CONCEPT 3] - Why it matters: [RELEVANCE]

Include practical examples from their [INDUSTRY] business where possible.
Avoid jargon; use analogies if helpful."
              />
              <CopyCard
                icon={<FileText size={20} />}
                title="Quarterly Review Meeting Agenda"
                prompt="Create a quarterly review meeting agenda for a [CLIENT TYPE] client:

Business type: [INDUSTRY]
Key focus areas: [AREAS TO DISCUSS]
Previous period highlights: [KEY ITEMS]
Current concerns: [ITEMS CLIENT RAISED]
Meeting duration: [TIMEFRAME]

Include:
- Topics to cover
- Materials to prepare
- Questions to ask
- Action items to discuss"
              />
              <CopyCard
                icon={<FileText size={20} />}
                title="Year-End Tax Planning Memo"
                prompt="Draft a year-end tax planning memo for a [CLIENT TYPE] with the following profile:

Income: [AMOUNT]
Entity type: [STRUCTURE]
State of residence: [STATE]
Key changes this year: [LIST]
Projected year-end position: [DESCRIPTION]
Concerns: [WHAT THEY'RE WORRIED ABOUT]

Suggest actionable year-end strategies with deadlines."
              />
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <FAQItem
                question="Can AI help with tax compliance and calculations?"
                answer="Yes, AI can assist with tax research, deduction identification, compliance checking, and calculation verification. However, final decisions should always be made by qualified accounting professionals familiar with specific regulations and the client's unique situation."
              />
              <FAQItem
                question="How can AI improve bookkeeping accuracy?"
                answer="AI can help identify reconciliation discrepancies, categorize transactions, flag unusual patterns, and verify data entry accuracy. This reduces manual errors and speeds up the bookkeeping process significantly."
              />
              <FAQItem
                question="What AI tools work best for financial reporting?"
                answer="AI excels at data analysis, report generation, variance analysis, and narrative summaries. Tools like ChatGPT, Claude, and Gemini can help draft reports, interpret financial data, and create professional summaries for stakeholders."
              />
              <FAQItem
                question="Can AI help with client communication?"
                answer="Absolutely. AI can draft client memos, explain complex concepts clearly, create templates for common communications, and help personalize messages for different client segments and situations."
              />
              <FAQItem
                question="How do I ensure AI recommendations comply with accounting standards?"
                answer="Always verify AI outputs against current GAAP, IFRS, or relevant tax codes. Use AI as an assistant to enhance your expertise, not replace professional judgment. Review recommendations for compliance with specific client circumstances."
              />
              <FAQItem
                question="Are these prompts suitable for both CPAs and bookkeepers?"
                answer="Yes, these prompts are designed to help accounting professionals at all levels—from bookkeepers managing daily transactions to CPAs handling complex tax and audit work."
              />
              <FAQItem
                question="Can AI detect accounting errors or fraud red flags?"
                answer="AI can identify unusual patterns, reconciliation discrepancies, and anomalies in data that warrant investigation. However, final fraud assessment and investigation requires human expertise and professional judgment."
              />
              <FAQItem
                question="How do I keep client data secure when using AI tools?"
                answer="Use privacy-focused AI tools, avoid sharing confidential client details, anonymize data, and ensure your AI tool provider complies with GDPR and relevant data protection regulations. Never share sensitive client information without consent."
              />
              <FAQItem
                question="Can these prompts help with audit preparation?"
                answer="Yes, AI can help organize documentation, prepare audit responses, create audit schedules, and draft audit memos. This streamlines preparation and ensures nothing is overlooked during the audit process."
              />
              <FAQItem
                question="How much time can I save using these AI prompts?"
                answer="Time savings vary by task, but accountants typically save 2-5 hours per week on routine tasks like bookkeeping, tax research, report drafting, and client communications. Complex analysis may see even greater efficiency gains."
              />
            </div>
          </section>

          {/* Related Pages */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Explore More Prompts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <Link href="/ai-prompts-finance">
                <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#0891B2] transition-colors cursor-pointer">
                  <div style={{ color: '#0891B2' }} className="text-sm font-semibold mb-1">
                    Finance Professionals
                  </div>
                  <p className="text-[#999] text-xs">AI prompts for financial analysts and planners</p>
                </div>
              </Link>
              <Link href="/chatgpt-cpa-tax-planning">
                <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#0891B2] transition-colors cursor-pointer">
                  <div style={{ color: '#0891B2' }} className="text-sm font-semibold mb-1">
                    CPA Tax Planning
                  </div>
                  <p className="text-[#999] text-xs">Specialized tax prompts for certified professionals</p>
                </div>
              </Link>
              <Link href="/chatgpt-data-analysis">
                <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#0891B2] transition-colors cursor-pointer">
                  <div style={{ color: '#0891B2' }} className="text-sm font-semibold mb-1">
                    Data Analysis
                  </div>
                  <p className="text-[#999] text-xs">Prompts for analyzing and interpreting data</p>
                </div>
              </Link>
              <Link href="/sql-prompts">
                <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#0891B2] transition-colors cursor-pointer">
                  <div style={{ color: '#0891B2' }} className="text-sm font-semibold mb-1">
                    SQL Prompts
                  </div>
                  <p className="text-[#999] text-xs">Database queries for financial data</p>
                </div>
              </Link>
              <Link href="/chatgpt-business-productivity">
                <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#0891B2] transition-colors cursor-pointer">
                  <div style={{ color: '#0891B2' }} className="text-sm font-semibold mb-1">
                    Business Productivity
                  </div>
                  <p className="text-[#999] text-xs">Prompts to streamline business operations</p>
                </div>
              </Link>
              <Link href="/chatgpt-prompts">
                <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#0891B2] transition-colors cursor-pointer">
                  <div style={{ color: '#0891B2' }} className="text-sm font-semibold mb-1">
                    All ChatGPT Prompts
                  </div>
                  <p className="text-[#999] text-xs">Browse our full prompt library</p>
                </div>
              </Link>
              <Link href="/claude-prompts">
                <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#0891B2] transition-colors cursor-pointer">
                  <div style={{ color: '#0891B2' }} className="text-sm font-semibold mb-1">
                    Claude Prompts
                  </div>
                  <p className="text-[#999] text-xs">Prompts optimized for Claude AI</p>
                </div>
              </Link>
              <Link href="/gemini-prompts">
                <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#0891B2] transition-colors cursor-pointer">
                  <div style={{ color: '#0891B2' }} className="text-sm font-semibold mb-1">
                    Gemini Prompts
                  </div>
                  <p className="text-[#999] text-xs">Prompts for Google Gemini</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
