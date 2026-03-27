import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Research Prompts | ChatGPT for Case Law Analysis",
  description:
    "35+ ChatGPT prompts for legal research including case briefing, statute analysis, legal memo drafting, and precedent synthesis. Master AI-assisted legal analysis.",
  keywords: "legal research prompts, case briefing, legal memo, statute analysis, ChatGPT legal research",
}

export default function LegalResearchPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Legal Research Prompts: ChatGPT for Case Law & Statute Analysis
          </h1>
          <p className="text-xl opacity-90">
            Accelerate legal research with 35+ AI prompts for case briefing, statutory interpretation, precedent
            analysis, and legal memo drafting.
          </p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 space-y-12">
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">1. Case Law Analysis</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Standard Case Brief:</strong> "Brief [CASE CITATION]. Include: parties, procedural history,
                facts, legal issue, holding, reasoning, and dissent if applicable."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Precedent Application:</strong> "Explain how [PRECEDENT CASE] applies to our client's situation:
                [FACT PATTERN]."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Distinguishing Cases:</strong> "Compare [CASE A] and [CASE B]. Identify similarities and key
                distinctions."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">2. Statutory Interpretation</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Statute Breakdown:</strong> "Analyze [STATUTE]: purpose, key terms, penalties, exceptions, and
                procedural requirements."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Regulatory Compliance:</strong> "Explain [REGULATION] and identify compliance requirements for
                [TYPE OF BUSINESS]."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Legislative History:</strong> "Summarize the legislative history of [STATUTE] including: intent,
                amendments, and policy considerations."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">3. Legal Memo Drafting</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Predictive Memo:</strong> "Draft a legal memo predicting outcome of [DISPUTE] under
                [JURISDICTION]. Issue-Rule-Analysis-Conclusion format."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Transactional Memo:</strong> "Prepare a transactional memo analyzing [TRANSACTION] for [CLIENT].
                Cover legal issues, risks, and recommendations."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Comparative Analysis Memo:</strong> "Compare [LEGAL CONCEPT] across [JURISDICTIONS]. Identify
                best practices and differences."
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-indigo-50 border-l-4 border-indigo-500 p-8 rounded space-y-4">
          <h3 className="text-2xl font-bold">Research Efficiency: Manual vs. AI-Assisted</h3>
          <div className="space-y-3 text-lg">
            <p>
              <strong>Traditional Legal Research (20+ hours):</strong>
            </p>
            <ul className="ml-6 space-y-2">
              <li>✓ Shepardizing & KeyCiting (4 hours)</li>
              <li>✓ Reading primary cases (12 hours)</li>
              <li>✓ Writing memo (4 hours)</li>
            </ul>
            <p className="mt-4">
              <strong>AI-Assisted Research (4-6 hours):</strong>
            </p>
            <ul className="ml-6 space-y-2">
              <li>✓ AI case briefing (1 hour)</li>
              <li>✓ AI memo drafting (2 hours)</li>
              <li>✓ Attorney review & refinement (2-3 hours)</li>
            </ul>
            <p className="text-lg font-bold text-indigo-900 mt-4">
              Time Savings: 70-80% | Quality: Enhanced through AI synthesis
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">4. Precedent Synthesis</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Trend Analysis:</strong> "Analyze the evolution of [LEGAL CONCEPT] through these cases: [LIST].
                Identify trends and turning points."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Conflicting Authority:</strong> "These courts disagree on [ISSUE]: [CASE A] vs [CASE B]. Analyze
                the debate and likely Supreme Court position."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Circuit Split Analysis:</strong> "Summarize the circuit split on [ISSUE]. What's the majority
                position vs minority? Predict Supreme Court outcome."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">5. Research Organization & Management</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Authority Hierarchy:</strong> "Organize these authorities by persuasiveness for [JURISDICTION]:
                [LIST]. Explain ranking."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Research Outline:</strong> "Create a research outline for [LEGAL ISSUE] including: primary
                authorities, secondary sources, and gaps."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Bad Law Identification:</strong> "Identify overruled, reversed, or limited authority in this
                research set: [LIST]."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">Is AI legal research accurate?</h3>
              <p className="text-lg leading-relaxed">
                AI provides excellent starting analysis (75-85% accuracy) but requires verification. Always
                Shepardize/KeyCite independently. Use AI to accelerate research, not replace due diligence.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">Can I rely on AI case summaries?</h3>
              <p className="text-lg leading-relaxed">
                Use AI summaries to screen cases and identify relevant ones. Always read the full opinion for critical
                cases. AI excels at spotting issues but misses nuance attorneys catch.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">What about current law and recent cases?</h3>
              <p className="text-lg leading-relaxed">
                AI training data has cutoff dates. For recent developments, use traditional legal research tools. Then
                use AI to synthesize findings into analysis.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t-2 pt-12 mt-12 space-y-6">
          <h2 className="text-3xl font-bold">Transform Your Legal Research Workflow</h2>
          <p className="text-lg">
            AI-assisted research increases attorney productivity 3-5x while maintaining quality. Start with case
            briefing and progress to complex multi-issue synthesis.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/legal-brief-prompts" className="px-6 py-3 bg-primary text-white rounded hover:opacity-90">
              Legal Brief Prompts
            </Link>
            <Link
              href="/chatgpt-prompts"
              className="px-6 py-3 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white"
            >
              All ChatGPT Prompts
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
