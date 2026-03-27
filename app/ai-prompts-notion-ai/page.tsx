import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Prompts for Notion AI: SOPs, Meeting Notes & Knowledge Bases (2026 Guide)",
  description:
    "Master Notion AI with 50+ prompts for SOPs, meeting notes, and knowledge base management. Complete guide for documentation workflows.",
}

export default function NotionAIPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/website-links" className="text-sm opacity-70 mb-4 inline-block">
            ← Back to Prompts Library
          </Link>
          <h1 className="text-5xl font-bold mb-4">AI Prompts for Notion AI: SOPs, Meeting Notes & Knowledge Bases</h1>
          <p className="text-xl text-gray-200">
            Master documentation automation with Notion AI prompts for processes, meetings, and knowledge management
          </p>
        </div>
      </header>
      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">How Notion AI Helps</h2>
          <p className="mb-4">
            Notion AI lives directly inside your pages and databases. Prompts are instructions that act on selected text
            or whole pages. For SOPs, meeting notes, and knowledge bases, Notion recommends using AI to summarize,
            rewrite, generate drafts, and answer questions.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Notion AI Prompts for SOPs</h2>
          <h3 className="text-2xl font-semibold mt-4 mb-3">Meta-structure prompt</h3>
          <pre className="bg-slate-900 text-white p-4 rounded mb-4">
            {`"Turn this into a Standard Operating Procedure with:
Purpose, Scope, Prerequisites, Step-by-Step Instructions, 
Roles & Responsibilities, Tools & Links, Review Cadence.
Use concise language and bullet points."`}
          </pre>
          <h3 className="text-2xl font-semibold mt-4 mb-3">10+ SOP Prompts</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              "Combine scattered bullet points into one SOP for [process]. Resolve contradictions and flag unclear
              steps."
            </li>
            <li>"Draft SOP for [task] using this page and linked items. Include decision points and edge cases."</li>
            <li>
              "Rewrite this SOP for new hires. Shorten sentences, simplify jargon, start steps with action verbs."
            </li>
            <li>"Summarize video transcript into SOP for [process], keeping only repeatable steps."</li>
            <li>"Extract workflow from last three weeks of meeting notes, draft standardized SOP."</li>
            <li>"Review this SOP and suggest clarity improvements, missing steps, automation points."</li>
            <li>"Convert this checklist into formal SOP with phases and prerequisites."</li>
            <li>"Create quick-start version for experienced members, linking to full SOP details."</li>
            <li>"Extract training version with examples and common mistakes as toggles."</li>
            <li>"Read related tasks and propose updated SOP reflecting how team actually works."</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Notion AI Prompts for Meeting Notes</h2>
          <h3 className="text-2xl font-semibold mt-4 mb-3">Summarizing & structuring</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              "Summarize into: Agenda recap, Key Decisions, Action Items (owners/dates), Open Questions. Keep concise."
            </li>
            <li>"Extract action items as bullet points with owner and due date."</li>
            <li>"Create one-paragraph executive summary for leadership on decisions, risks, next steps."</li>
            <li>"Turn brainstorm into structured plan: Ideas, Shortlist, Next Experiments, Owners."</li>
            <li>"Draft follow-up message summarizing decisions and listing action items."</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Notion AI Prompts for Knowledge Bases</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              "Design knowledge base structure for [TEAM/COMPANY]. Describe databases, properties, relationships,
              views."
            </li>
            <li>"Create build plan for '[Company] Knowledge Hub' with linked databases and recommended views."</li>
            <li>"Propose tagging system to filter docs by team, topic, and status. Suggest 10 initial tags."</li>
            <li>"Generate 'How it works' wiki article. Add: Overview, When to use, Steps, FAQs."</li>
            <li>"Create FAQ page about [topic] from SOPs and notes."</li>
            <li>"Scan all pages and list duplicated/overlapping docs that could merge."</li>
            <li>"Draft 'Start Here' guide for new employees linking core SOPs and policies."</li>
            <li>"Generate weekly review checklist for docs due for review based on Review date property."</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Best Practices for Notion AI</h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>
              <strong>Lead with clear context:</strong> specify role, audience, and clear instructions
            </li>
            <li>
              <strong>Use structured instructions:</strong> tell AI exactly what sections and format you want
            </li>
            <li>
              <strong>Iterate with AI:</strong> use follow-up prompts to improve, refine, or expand
            </li>
            <li>
              <strong>Maintain formatting:</strong> AI preserves headings and structure when you ask
            </li>
            <li>
              <strong>Batch with databases:</strong> use Ask AI across multiple linked pages for consistency
            </li>
          </ul>
        </section>
      </article>
      <footer className="bg-slate-900 text-white py-12 px-6 mt-16 border-t">
        <div className="max-w-4xl mx-auto flex justify-between">
          <p className="opacity-60">© 2026 GPTPrompts.AI</p>
          <Link href="/website-links">Back to Prompts Library</Link>
        </div>
      </footer>
    </main>
  )
}
