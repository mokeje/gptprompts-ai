import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contract Review Prompts | ChatGPT for Legal Document Analysis",
  description:
    "30+ ChatGPT prompts for contract review including risk identification, redline suggestions, negotiation analysis, and compliance verification for legal professionals.",
  keywords:
    "contract review prompts, contract analysis, ChatGPT legal review, risk identification, contract negotiation",
}

export default function ContractReviewPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contract Review Prompts: ChatGPT for Legal Document Analysis
          </h1>
          <p className="text-xl opacity-90">
            30+ AI prompts for contract review including risk scoring, redline suggestions, negotiation strategies, and
            compliance verification.
          </p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 space-y-12">
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">1. Risk Identification & Scoring</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Risk Scorecard:</strong> "Review this [CONTRACT TYPE] and score risks 1-10 for: liability
                exposure, financial impact, performance requirements, and termination provisions."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Red Flag Analysis:</strong> "Identify and explain red flags in: payment terms, warranties,
                liability caps, indemnification, and termination conditions."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Deal Killer Issues:</strong> "Which clauses in this contract could be deal-killers? Rank by
                severity and suggest negotiation priorities."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">2. Redline Suggestions & Edits</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Protective Redlines:</strong> "Suggest protective redlines for a [CLIENT POSITION] in this
                [CONTRACT TYPE]. Explain each change rationale."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Clause Improvements:</strong> "Improve this indemnification clause: [CLAUSE TEXT]. Make it more
                protective for [CLIENT]."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Standard vs Counterparty:</strong> "Compare our standard [CLAUSE] vs counterparty version.
                Suggest negotiated middle ground."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">3. Negotiation Strategy & Analysis</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Negotiation Priority Matrix:</strong> "Create a priority matrix for contract negotiations:
                must-haves, nice-to-haves, and trade-offs for [CLIENT]."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Counterparty Analysis:</strong> "Based on their proposed contract, what are counterparty's
                likely business concerns? How can we address them while protecting [CLIENT]?"
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Win-Win Solutions:</strong> "Counterparty wants [PROVISION]. We need [DIFFERENT PROVISION].
                Suggest creative solutions that satisfy both parties."
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-purple-50 border-l-4 border-purple-500 p-8 rounded space-y-4">
          <h3 className="text-2xl font-bold">Contract Review Efficiency: 8 Hours → 1 Hour</h3>
          <div className="space-y-3 text-lg">
            <p>
              <strong>Traditional Contract Review (8 hours):</strong>
            </p>
            <ul className="ml-6 space-y-2">
              <li>✓ Initial read & notes (2 hours)</li>
              <li>✓ Risk identification (2 hours)</li>
              <li>✓ Redline preparation (2 hours)</li>
              <li>✓ Memo drafting (2 hours)</li>
            </ul>
            <p className="mt-4">
              <strong>AI-Assisted Review (1-2 hours):</strong>
            </p>
            <ul className="ml-6 space-y-2">
              <li>✓ AI risk scorecard (10 mins)</li>
              <li>✓ AI redline suggestions (15 mins)</li>
              <li>✓ AI negotiation memo (20 mins)</li>
              <li>✓ Attorney review & refinement (30-45 mins)</li>
            </ul>
            <p className="text-lg font-bold text-purple-900 mt-4">
              Time Savings: 75-87% | Quality: Enhanced consistency & completeness
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">4. Compliance & Legal Framework Review</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Regulatory Compliance Check:</strong> "Does this [CONTRACT] comply with [REGULATION/LAW]?
                Identify any compliance gaps or violations."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Industry Standard Review:</strong> "Compare this contract against industry standards for
                [INDUSTRY]. What's missing or non-standard?"
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Enforceability Assessment:</strong> "Analyze enforceability of [PROVISION] in [JURISDICTION].
                Are there public policy concerns?"
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">5. Clause-Specific Review</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Liability Cap Analysis:</strong> "Is this liability cap of $[AMOUNT] reasonable? What's market
                standard for [INDUSTRY]? Counter-proposal recommendation?"
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Termination Clause Review:</strong> "Analyze termination provisions: termination rights, notice
                periods, consequences. What's our exposure?"
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>IP Ownership Analysis:</strong> "Review intellectual property provisions. What IP is covered?
                Who owns derivative works? Licensing requirements?"
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">Can AI identify all contract risks?</h3>
              <p className="text-lg leading-relaxed">
                AI catches common risks (80-90%) but may miss industry-specific or context-dependent risks. Use AI for
                initial screening, then attorney review for business context and nuance.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">Should I use AI redlines directly?</h3>
              <p className="text-lg leading-relaxed">
                No. Use AI suggestions as starting points. Attorney must customize redlines based on negotiation
                strategy, relationship with counterparty, and risk tolerance.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">What about proprietary or specialized contracts?</h3>
              <p className="text-lg leading-relaxed">
                AI works best with common contract types (NDAs, Service Agreements, Employment Contracts). For
                specialized agreements, provide context and market data for better AI analysis.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t-2 pt-12 mt-12 space-y-6">
          <h2 className="text-3xl font-bold">Revolutionize Contract Review Workflows</h2>
          <p className="text-lg">
            From intake to redlines to negotiation memos, AI can accelerate every stage of contract review while
            improving thoroughness and consistency.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/legal-brief-prompts" className="px-6 py-3 bg-primary text-white rounded hover:opacity-90">
              Legal Brief Prompts
            </Link>
            <Link
              href="/paralegal-prompts"
              className="px-6 py-3 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white"
            >
              Paralegal Prompts
            </Link>
          </div>
        </section>
      </article>

      <footer className="bg-foreground text-background py-12 px-6 md:px-12 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="opacity-75">© 2026 GPTPrompts.AI - Professional AI Prompting Guides</p>
          <Link href="/website-links" className="text-primary hover:underline">
            View All Pages
          </Link>
        </div>
      </footer>
    </main>
  )
}
