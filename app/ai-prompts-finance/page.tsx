import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Prompts for Finance & Accounting: Budgets, Forecasts & Financial Summaries (2026 Guide)",
  description:
    "Master financial analysis with 80+ AI prompts for budgeting, forecasting, reporting, and accounting. Learn FP&A frameworks, variance analysis, and scenario modeling with ChatGPT and Claude.",
  keywords: "finance prompts, accounting prompts, budget planning, financial forecasting, FP&A, AI for finance",
}

export default function FinancePromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-6 md:px-12 border-b">
        <div className="max-w-4xl mx-auto">
          <Link href="/website-links" className="text-sm opacity-70 hover:opacity-100 mb-6 inline-block">
            ← Back to Prompts Library
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            AI Prompts for Finance & Accounting: Budgets, Forecasts & Financial Summaries
          </h1>
          <p className="text-xl text-gray-200">
            Accelerate financial analysis, reporting, and decision-making with AI-powered prompts
          </p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 prose prose-invert max-w-none">
        <h2>Prompt Framework for Finance & Accounting Work</h2>
        <p>
          Finance prompt libraries recommend combining role, data context, time horizon, and output format in every
          request. A reusable pattern for your page:
        </p>

        <pre className="bg-slate-900 p-6 rounded-lg overflow-x-auto">
          {`"You are a senior [FP&A analyst / accountant / CFO].
Company: [size, industry, business model].
Data available: [P&L, BS, cash flow, exports].
Time horizon: [historical period + forecast period].
Task: [budget / forecast / summary].
Output format: [table, bullet summary, narrative, scenario list].
Constraints: [assumptions, materiality level, audience]."`}
        </pre>

        <p>
          Guides stress: use AI as an analyst or drafting assistant, but keep humans in charge of checking maths,
          assumptions, and compliance.
        </p>

        <h2>AI Prompts for Budgets & Expense Planning</h2>

        <h3>Top-down annual budget draft</h3>
        <p>
          "Act as an FP&A manager. Using last year's summarized P&L and high-level plan: [paste or describe], draft a
          first-pass annual operating budget. Include a table with monthly projections for revenue, COGS, gross margin,
          operating expenses (by major category), and operating income, plus 3–5 bullet assumptions."
        </p>

        <h3>Departmental OPEX budget</h3>
        <p>
          "Create a detailed operating expense budget template for the [department] for the next 12 months, based on
          historical spend patterns: [describe categories or paste]. Group expenses into: people, software, marketing,
          travel, and other. Suggest line items, typical drivers, and questions to ask the department head about each
          area."
        </p>

        <h3>Zero-based budgeting prompts</h3>
        <p>
          "Using this current year budget: [summary], propose a zero-based budget for next year. For each major line,
          state: Whether it is essential or optional, The minimum viable level of spend, Risks of cutting too far."
        </p>

        <h3>Cost-cutting analysis</h3>
        <p>
          "Identify 5–10 potential cost-optimization opportunities from this summarized expense breakdown: [paste]. For
          each, estimate impact level (high/medium/low), ease of implementation, and risks to operations or growth if we
          reduce this spend."
        </p>

        <h2>AI Prompts for Forecasts & Scenario Modeling</h2>

        <h3>Revenue forecast from history</h3>
        <p>
          "Act as a financial analyst. Based on this monthly revenue data for the past [X] months: [table or summary],
          describe the key trends (seasonality, growth rate, volatility) and generate a simple 12-month revenue forecast
          under a 'current trend continues' assumption. Present the forecast in a table and list your assumptions."
        </p>

        <h3>Driver-based forecast</h3>
        <p>
          "Build a driver-based revenue model structure for a SaaS business with: starting MRR, new MRR, expansion MRR,
          and churned MRR. Explain the formulas and key assumptions needed to forecast 12 months ahead, and suggest
          sensitivity tests on churn and acquisition."
        </p>

        <h3>Cash flow forecasting</h3>
        <p>
          "Using this simplified P&L and balance sheet summary: [paste], outline a method to produce a 6-month cash flow
          forecast. Identify: main cash inflow/outflow categories, timing assumptions (DSO, DPO, inventory days), and
          how to convert the accrual P&L to a cash-basis view."
        </p>

        <h3>Scenario analysis for key risks</h3>
        <p>
          "Identify 3–5 key financial risks for a business like ours [industry, model]. For each risk, propose: A
          scenario description, How to translate it into revenue/expense assumptions, Simple metrics to monitor (e.g.,
          gross margin, cash runway, covenant headroom)."
        </p>

        <h2>AI Prompts for Financial Summaries & Management Reports</h2>

        <h3>CFO / board one-pager</h3>
        <p>
          "Summarize this monthly financial package (P&L, cash, KPIs) into a CFO and board-ready one-pager. Include: 3–5
          key highlights, 3–5 risks or issues, Short commentary on revenue, margins, cash, and runway, 3 recommended
          actions or decisions needed. Keep language concise and non-technical."
        </p>

        <h3>Variance analysis (budget vs actual)</h3>
        <p>
          "Analyze this budget vs actual report for [period]: [table]. Identify the top 5 favorable and unfavorable
          variances by value and percentage, explain likely drivers in plain language, and suggest follow-up questions
          to ask department owners."
        </p>

        <h3>Trend analysis across years</h3>
        <p>
          "Compare these last [3–5] years of financials: [summary]. Describe trends in revenue, gross margin, operating
          expenses, and net income. Highlight any step-changes or anomalies and suggest hypotheses to investigate."
        </p>

        <h2>AI Prompts for Accounting, Controls & Advisory</h2>

        <h3>Bookkeeping / GL review</h3>
        <p>
          "Act as a professional accountant. Review this trial balance or GL excerpt: [paste anonymized]. Identify: Any
          obviously misclassified accounts, Unusual balances, Accounts that may need reconciliation or further review."
        </p>

        <h3>AP / AR process improvement</h3>
        <p>
          "Outline best-practice steps for improving [accounts payable / accounts receivable] efficiency in a [size]
          company. Include: process changes, controls, use of automation tools, and KPIs to track (e.g., DPO, DSO)."
        </p>

        <h3>Tax document summarization</h3>
        <p>
          "Summarize the key points from this tax return / tax notice: [summary or excerpt]. List: taxable income, major
          deductions, credits, and any issues that may warrant follow-up with a tax professional."
        </p>

        <h2>Safety, Compliance & Prompting Best Practices in Finance</h2>
        <ul>
          <li>
            <strong>Never trust numbers blindly.</strong> Use AI for structure, explanations, and hypotheses; always
            verify calculations and outputs in Excel/BI tools or with your own models.
          </li>
          <li>
            <strong>Protect confidentiality.</strong> Don't paste sensitive client or company data into external tools
            unless policies allow; anonymize where possible.
          </li>
          <li>
            <strong>Specify audience and purpose.</strong> Prompts that say "for the CFO," "for non-finance managers,"
            or "for investors" produce better-targeted summaries.
          </li>
          <li>
            <strong>Be explicit about time period and data scope.</strong> Mention whether data is YTD, last 12 months,
            or forecast so the AI doesn't mix them up.
          </li>
          <li>
            <strong>Use AI more for narrative and structure than decisions.</strong> Let it draft commentary, design
            report templates, and propose scenarios; you choose assumptions and sign off.
          </li>
        </ul>

        <h2>FAQ: AI Prompts for Finance</h2>
        <div className="space-y-6 mt-8">
          <div className="bg-slate-900 p-6 rounded-lg">
            <h4 className="font-bold mb-3">Can AI replace my financial analyst?</h4>
            <p>
              No. AI accelerates grunt work—data summarization, first-pass forecasting, and report drafting. Analysts
              focus on assumptions, validation, strategic judgment, and compliance checks that humans must own.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg">
            <h4 className="font-bold mb-3">How do I ensure AI output is accurate?</h4>
            <p>
              Always verify formulas, assumptions, and totals independently. Use AI for ideation and structure, not
              final numbers. Double-check variance explanations and forecasting logic before presenting to leadership.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg">
            <h4 className="font-bold mb-3">Is it safe to use AI for board reporting?</h4>
            <p>
              Yes, if you review and validate all outputs first. AI can draft narratives and summaries; you own the
              final message, accuracy, and compliance. Never submit AI-generated reports without human review.
            </p>
          </div>
        </div>
      </article>

      <footer className="bg-slate-900 text-white py-12 px-6 md:px-12 mt-16 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/website-links" className="hover:opacity-70 transition-opacity">
            ← Back to Prompts Library
          </Link>
          <p className="mt-6 text-sm opacity-60">© 2026 GPTPrompts.AI - All Rights Reserved</p>
        </div>
      </footer>
    </main>
  )
}
