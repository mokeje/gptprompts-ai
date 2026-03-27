import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ChatGPT Prompts for Paralegals | Legal Document Automation",
  description:
    "Master paralegal workflows with 40+ ChatGPT prompts for legal document drafting, case management, discovery, and legal research automation. Increase productivity by 10x.",
  keywords:
    "paralegal prompts, legal document prompts, ChatGPT paralegal, legal automation, discovery prompts, case management",
}

export default function ParalegalPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Paralegal Prompts: 40+ ChatGPT Templates for Legal Professionals
          </h1>
          <p className="text-xl opacity-90">
            Automate legal document drafting, case management, discovery review, and client communications with
            AI-powered paralegal workflows.
          </p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 space-y-12">
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">1. Document Drafting Automation</h2>
          <p className="text-lg leading-relaxed">
            Paralegals spend countless hours drafting standard legal documents. These prompts accelerate the process
            dramatically:
          </p>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Contract Templates:</strong> "Draft a [SERVICE] agreement for [COMPANY] with terms including:
                [KEY TERMS]. Include standard clauses for payment, termination, and liability limits."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Pleading Generation:</strong> "Write a motion to dismiss for [SPECIFIC CASE] based on [LEGAL
                GROUNDS]. Include relevant case citations and statutory references."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Deposition Summaries:</strong> "Summarize this deposition transcript highlighting: [KEY TOPICS].
                Flag contradictions and inconsistencies."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">2. Case Management & Organization</h2>
          <p className="text-lg leading-relaxed">Keep complex cases organized with AI assistance:</p>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Case Timeline Builder:</strong> "Create a chronological timeline of events for [CASE NAME]
                including: dates, parties involved, key documents, and legal milestones."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Witness Database:</strong> "Organize witness information for [CASE]: name, contact info,
                testimony summary, and credibility assessment."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Document Index:</strong> "Create a document index for discovery: Bates number range,
                description, relevance, and privilege status."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">3. Discovery Management</h2>
          <p className="text-lg leading-relaxed">Accelerate discovery review with intelligent analysis:</p>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Email Review:</strong> "Review these emails for [CASE TOPIC] and flag: responsive documents,
                privileged communications, and smoking gun evidence."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Production Review:</strong> "Prepare production responses for interrogatories: [LIST]. Ensure
                responses are accurate, complete, and properly formatted."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Privilege Review:</strong> "Review document batch [X] for attorney-client privilege and work
                product doctrine. Create privilege log."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">4. Client Communication Templates</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Status Updates:</strong> "Write a client status update for [CASE] covering: recent developments,
                next steps, timeline, and fee implications."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Legal Explanations:</strong> "Explain [LEGAL CONCEPT] to a non-lawyer client in simple terms
                using [CASE CONTEXT]."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Settlement Analysis:</strong> "Analyze settlement offer of $[AMOUNT] considering: case
                strengths, litigation costs, and risk factors."
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded space-y-4">
          <h3 className="text-2xl font-bold">Pro Paralegal Workflow: 40 Hours → 8 Hours</h3>
          <div className="space-y-3">
            <p>
              <strong>Traditional:</strong> Draft contract (6h) + Case summary (8h) + Discovery index (12h) + Client
              letter (4h) + Timeline (10h) = 40 hours
            </p>
            <p>
              <strong>AI-Assisted:</strong> Draft contract with AI (1h) + Case summary (1.5h) + Discovery index (2h) +
              Client letter (1h) + Timeline (1.5h) + Review (1h) = 8 hours
            </p>
            <p className="text-lg font-bold text-blue-900">Result: 80% time savings, higher accuracy, 5x output</p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">5. Legal Research Support</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Case Briefing:</strong> "Brief [CASE CITATION]: parties, facts, legal issue, holding, rationale,
                and application to [CLIENT ISSUE]."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Statute Analysis:</strong> "Analyze [STATUTE] explaining: purpose, key provisions, penalties,
                and how it applies to [FACT PATTERN]."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Legal Memo Drafting:</strong> "Draft a legal memo on [ISSUE] for [JURISDICTION] including:
                authority, analysis, and conclusion."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">Can ChatGPT replace paralegals?</h3>
              <p className="text-lg leading-relaxed">
                No. AI is a powerful tool that multiplies paralegal productivity by 3-5x. Paralegals provide judgment,
                client service, and legal expertise that AI cannot replicate. The best paralegals use AI strategically.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">What about confidentiality with ChatGPT?</h3>
              <p className="text-lg leading-relaxed">
                Use enterprise ChatGPT or Claude with data privacy settings. Redact sensitive info. Never upload
                unredacted client documents to public AI tools. Consider on-premise solutions for highly sensitive
                cases.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">How accurate is AI-drafted legal language?</h3>
              <p className="text-lg leading-relaxed">
                AI generates good starting points but requires attorney review. Expect 70-85% accuracy on standard
                documents. Always verify legal conclusions and cite proper authorities.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t-2 pt-12 mt-12 space-y-6">
          <h2 className="text-3xl font-bold">Ready to Transform Your Paralegal Workflow?</h2>
          <p className="text-lg">
            Start with document drafting templates and gradually build your paralegal AI playbook. Each saved hour
            multiplies over hundreds of cases.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/chatgpt-prompts" className="px-6 py-3 bg-primary text-white rounded hover:opacity-90">
              Explore More ChatGPT Prompts
            </Link>
            <Link
              href="/legal-brief-prompts"
              className="px-6 py-3 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white"
            >
              Legal Brief Prompts
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
