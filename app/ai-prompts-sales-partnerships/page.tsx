import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Prompts for Sales, Partnerships, and Business Development Teams",
  description:
    "Complete guide to ChatGPT and AI prompts for sales teams, partnerships, and business development. Includes prospecting, outreach, deal structuring, and GTM prompts with examples.",
  keywords: "sales prompts, partnership prompts, business development, outreach prompts, deal structure",
}

export default function SalesPartnershipsPromptsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/website-links" className="text-blue-600 hover:underline">
            Prompts Library
          </Link>
          <span>/</span>
          <span className="text-gray-700">Sales & Partnerships</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Prompts for Sales, Partnerships, and Business Development Teams
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Sales, partnerships, and business development teams can use AI prompts to research accounts, personalize
            outreach at scale, prepare for calls, and structure strategic deals far faster than manual work alone. When
            designed well, prompts act like repeatable playbooks that save hours per week while improving win rates and
            relationship quality.
          </p>
        </header>

        {/* Core Principles Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Prompt Principles for GTM Teams</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-gray-700 mb-4">Effective prompts for revenue teams follow a few key rules:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Add context:</span>
                <span>
                  Product, ICP, deal stage, and region (e.g., "Series B SaaS selling globally to mid‑market HR leaders")
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Be specific:</span>
                <span>
                  About output: "3 outreach emails," "1‑page account brief," "objection‑handling script," etc.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Include constraints:</span>
                <span>Word limits, tone ("consultative, not pushy"), and format (bullets, email, call script)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold min-w-fit">Use iteration:</span>
                <span>Ask for 3 versions, then refine ("shorter," "more technical," "less salesy")</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sales Team Prompts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Prompts for Sales Teams</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Prospecting and Account Research</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Beginner Prompt</p>
              <p className="text-gray-700 italic">
                "Summarize what [Company Name] does in simple language and list 5 challenges they're likely facing in
                [function, e.g., 'sales operations']. Keep it under 200 words."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">Intermediate Prompt</p>
              <p className="text-gray-700 italic">
                "Act as an SDR researching [Company Name], a [industry] company based in [region]. Using publicly
                available information, outline: Company snapshot (size, markets, products), Likely priorities for their
                [role], 3 key initiatives they might care about that our product can support, 3 relevant talking points
                for a cold call or email."
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Personalized Outreach and Sequences</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Cold Email Template Prompt</p>
              <p className="text-gray-700 italic">
                "Write 3 concise cold emails (≤110 words) to a [title] at [Company Type] about [pain/problem]. Tone:
                consultative, not pushy. Each email should: Reference a specific trigger, Connect that trigger to a
                likely challenge, Position our solution in 1–2 sentences, End with a soft CTA for a 15‑minute call."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">Follow‑Up Prompt</p>
              <p className="text-gray-700 italic">
                "Create 5 follow‑up email variations for prospects who haven't replied after my first outreach. Keep
                each under 80 words. Mix approaches: value add (share a resource), polite bump, 'permission to close
                file', social proof, and direct question."
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Call Preparation and Debriefing</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Pre‑Call Prep</p>
              <p className="text-gray-700 italic">
                "Prepare a discovery call brief for my meeting with [Prospect Name], [Title] at [Company]. Summarize:
                Their likely goals and KPIs, 5 discovery questions to ask, 3 hypotheses about pains we can solve, 2
                upsell or cross‑sell opportunities to watch for."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">Post‑Call Analysis</p>
              <p className="text-gray-700 italic">
                "Based on this discovery call transcript, identify: Top 3 pains the buyer explicitly mentioned,
                Features/benefits they reacted most positively to, Any competitors referenced, Recommended focus for the
                follow‑up email and proposal."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Objection Handling and Proposal Support</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Objection‑Handling Prompt</p>
              <p className="text-gray-700 italic">
                "Create a playbook for handling these common objections: [list]. For each: Short summary of the
                objection, 2–3 clarifying questions to ask, 2 reply options (one logical, one emotional), A closing
                question to keep the deal moving."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">Proposal Outline</p>
              <p className="text-gray-700 italic">
                "Draft a proposal structure for a mid‑market SaaS deal worth ~$[value]. Sections should include:
                executive summary, current challenges, recommended solution, implementation plan, success metrics,
                pricing & commercial terms, and next steps."
              </p>
            </div>
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Prompts for Partnerships Teams</h2>
          <p className="text-gray-700 mb-6">
            Partnerships teams handle co‑marketing, integrations, channel relationships, and strategic alliances—work
            with longer sales cycles and more stakeholders.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Identifying and Prioritizing Partners</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Partner Landscape Prompt</p>
              <p className="text-gray-700 italic">
                "Act as a partnerships manager for a global SaaS company that serves [ICP]. Identify 15 potential
                strategic partners (ISVs, agencies, or ecosystems) that share our audience but don't directly compete.
                For each, provide: company type, why they're a fit, and a possible collaboration model."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">Prioritization Prompt</p>
              <p className="text-gray-700 italic">
                "Given this list of potential partners [paste], rank them by strategic fit using criteria: audience
                overlap, brand alignment, ease of integration, and revenue potential. Present a simple scorecard and
                recommend the top 5 to pursue first."
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Outreach and Co‑Marketing Proposals</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Initial Partner Outreach</p>
              <p className="text-gray-700 italic">
                "Draft 3 outreach emails to [Partner Type] proposing a strategic partnership. Focus on shared audience
                and mutual value. Each version should take a different angle: co‑marketing, product integration, and
                referral program."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">Co‑Marketing Plan Prompt</p>
              <p className="text-gray-700 italic">
                "Create a 90‑day co‑marketing plan between our company and [Partner]. Include: 3 joint content ideas,
                Distribution plan across email, social, and partner channels, Lead sharing and attribution rules, Simple
                success metrics and review cadence."
              </p>
            </div>
          </div>
        </section>

        {/* Business Development Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            AI Prompts for Business Development and Strategic Deals
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Market and Opportunity Assessment</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="font-semibold text-gray-900 mb-2">New Market Exploration</p>
              <p className="text-gray-700 italic">
                "Act as a business strategist. Evaluate the opportunity for our company to expand into [new region or
                segment]. Provide: market overview, key trends, competitive landscape, regulatory considerations,
                go‑to‑market options, and top 5 risks."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">Idea Assessment</p>
              <p className="text-gray-700 italic">
                "Please act as an expert business advisor and assess this business concept: [idea]. Evaluate market
                opportunity, problem–solution fit, competitive differentiation, business model viability, and
                scalability."
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Strategic Deal Structuring</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Deal Structure Options</p>
              <p className="text-gray-700 italic">
                "Design 3 alternative partnership or deal structures for a potential collaboration with [Company].
                Options should include: revenue share model, flat‑fee + performance bonus model, and a pilot‑first
                model."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900 mb-2">Risk and Scenario Planning</p>
              <p className="text-gray-700 italic">
                "For a potential multi‑year strategic deal worth ~$[amount], outline key risks across legal, commercial,
                product, and brand dimensions. For each risk, propose mitigations and contract clauses."
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices for GTM Teams Using AI</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Best Practices</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Build a shared prompt library per team with proven templates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Always insert real context: vertical, geography, deal size</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use AI to summarize transcripts but keep humans in the loop</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Turn prompts into SOPs for consistency</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Pitfalls to Avoid</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Over‑generic prompts → generic messaging that underperforms</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Copy‑pasting AI text without editing for tone or accuracy</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Sharing sensitive customer data with unapproved tools</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Prompting Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/chatgpt-prompts" className="text-blue-600 hover:underline">
              → ChatGPT Prompts
            </Link>
            <Link href="/how-to-write-effective-ai-prompts" className="text-blue-600 hover:underline">
              → How to Write Effective AI Prompts
            </Link>
            <Link href="/freelance-client-acquisition" className="text-blue-600 hover:underline">
              → Client Acquisition Prompts
            </Link>
            <Link href="/website-links" className="text-blue-600 hover:underline">
              → Back to Prompts Library
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8 text-center text-gray-600 text-sm">
          <p>
            Used wisely, AI prompts help sales, partnerships, and BD teams work faster, smarter, and more
            strategically—freeing up time for high-value conversations that actually close deals and build lasting
            alliances.
          </p>
          <Link href="/website-links" className="text-blue-600 hover:underline mt-4 block">
            ← Back to Prompts Library
          </Link>
        </footer>
      </div>
    </main>
  )
}
