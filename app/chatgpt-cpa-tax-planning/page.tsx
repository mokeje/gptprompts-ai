import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ChatGPT Prompts for CPAs: Tax Planning, Entity Strategy & Compliance",
  description:
    "Master tax planning and preparation with ChatGPT. Multi-year strategies, S-Corp analysis, estimated taxes, and compliance checklists for CPAs and tax professionals.",
}

export default function CPATaxPlanningPage() {
  const single = "Single"
  const MFJ = "Married Filing Jointly"
  const S_corp = "S-Corp"
  const LLC = "LLC taxed as S-Corp"
  const C_corp = "C-Corp"
  const country = "USA"
  const state = "California"
  const figures = "$100,000"
  const number = "10%"

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-green-700 text-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-sm opacity-80 hover:opacity-100 mb-6 inline-block">
            Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">ChatGPT Prompts for CPAs</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Tax planning and preparation made faster. Strategic prompts for entity analysis, compliance, estimated
            taxes, and multi-year tax planning—from solo practices to mid-size firms.
          </p>
        </div>
      </header>

      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-6">Why CPAs Should Use ChatGPT for Tax</h2>
          <p>
            CPAs spend a huge amount of time on repetitive tax work—organizing documents, answering recurring questions,
            drafting emails, and building preliminary tax planning scenarios. Well-designed ChatGPT prompts for
            accountants can automate these low-value tasks, freeing capacity for strategic tax planning, client
            education, and CFO-level advisory.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h3 className="font-semibold mb-3">Key Benefits:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Faster tax preparation workflows (organizers, checklists, draft calculations)</li>
              <li>Better tax planning conversations with visual summaries and plain-English explanations</li>
              <li>More consistent client communication and compliance documentation</li>
              <li>Easier variance analysis and tax-focused budgeting across many clients</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Multi-Year Tax Planning Strategy Prompt</h2>
          <p>
            Build a comprehensive 3-5 year tax plan for profitable clients with entity structure optimization, quarterly
            tax calendars, and integrated retirement and succession planning.
          </p>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "Act as a proactive tax planning CPA. Build a 3-year tax planning strategy for this client: – Filing
              status/entity: {single} / {MFJ} / {S_corp} / {LLC} / {C_corp}– Location: {country}, {state}– Current year
              revenue and net profit: {figures}– Expected growth %: {number}
              Identify immediate tax-saving opportunities for the current year with rough dollar estimates. Recommend
              entity structure optimizations (if any) and explain pros/cons. Create a 3-year tax planning calendar with
              quarterly action items."
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. S-Corp vs LLC or Sole Proprietor Tax Strategy</h2>
          <p>
            Compare tax outcomes and show side-by-side federal and state tax estimates, including self-employment tax,
            with break-even analysis and compliance cost discussion.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Tax-Focused Budget & Variance Analysis</h2>
          <p>
            Build tax-focused budgets with projected taxable income, estimated tax liability by quarter, recommended
            payment schedules, and variance analysis showing how ±10% changes affect tax and cash flow.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Tax-Saving Ideas Prompt for Small Business</h2>
          <p>
            Generate 10-15 legitimate tax-saving strategies with estimated impact (low/medium/high), dollar ranges,
            implementation complexity, and audit risk ratings.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Compliance & Preparation Prompts</h2>
          <ul className="list-disc pl-6 space-y-3 mt-6">
            <li>
              <strong>Tax Organizer & Document Checklist:</strong> Generate custom tax organizers for individuals,
              S-corps, partnerships, or rental investors with checkboxes for all required documents.
            </li>
            <li>
              <strong>Estimated Tax Payment Schedule:</strong> Calculate quarterly estimated tax payments with
              safe-harbor rules and client-ready explanations.
            </li>
            <li>
              <strong>Business Expense Categorization:</strong> Sort raw expenses into 'Deductible', 'Probably
              deductible', and 'Not deductible' categories with tax rules explained.
            </li>
            <li>
              <strong>Depreciation & Fixed Asset Schedule:</strong> Build MACRS depreciation schedules with Section 179
              and bonus depreciation analysis (verify in tax software).
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Specialized Compliance Prompts</h2>
          <ul className="list-disc pl-6 space-y-3 mt-6">
            <li>
              <strong>Sales Tax Nexus & Obligation:</strong> Create state-by-state checklists for economic/physical
              nexus, registration, and filing frequency.
            </li>
            <li>
              <strong>1099 vs W-2 Worker Classification:</strong> Risk-score worker classifications with
              misclassification risk analysis and documentation suggestions.
            </li>
            <li>
              <strong>VAT & International Tax Compliance:</strong> Draft VAT compliance checklists for EU and
              cross-border operations.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Best Practices & Limitations</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Always verify numbers in professional tax software and cross-check against current tax codes.</li>
            <li>Avoid pasting raw PII into consumer AI tools; use enterprise versions or anonymize data.</li>
            <li>
              Document in workpapers when AI helped create checklists or strategies, and note the review performed.
            </li>
            <li>
              Remember AI is not connected to official IRS/state databases in real time; law changes must be confirmed.
            </li>
          </ul>
        </div>
      </section>

      <footer className="bg-gray-100 py-12 px-6 md:px-12 mt-20">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 GPTPrompts.AI. All rights reserved.</p>
          <div className="mt-6 flex justify-center gap-6">
            <Link href="/website-links" className="hover:text-foreground">
              View All Pages
            </Link>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
