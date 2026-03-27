import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Prompts for ClickUp AI: Task Automation, Sprint Planning & Status Reports (2026 Guide)",
  description:
    "Master ClickUp Brain with 50+ prompts for task automation, sprint planning, and status reports. Complete guide for agile project management.",
}

export default function ClickUpPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <header className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/website-links" className="text-sm opacity-70 mb-4 inline-block">
            ← Back to Prompts Library
          </Link>
          <h1 className="text-5xl font-bold mb-4">
            AI Prompts for ClickUp AI: Task Automation, Sprint Planning & Status Reports
          </h1>
          <p className="text-xl text-gray-200">
            Master ClickUp Brain with comprehensive prompts for automation, sprints, and reporting
          </p>
        </div>
      </header>
      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">How ClickUp AI / Brain Fits In</h2>
          <p className="mb-4">
            ClickUp Brain can read your spaces, docs, and tasks, then generate docs, tasks, summaries, and prompts from
            that context. The prompts below work in ClickUp Brain, ChatGPT, or your own platform.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Prompts for Task Automation Ideas</h2>
          <p className="mb-4">Use these in a Doc or Brain chat, referencing lists/docs as needed:</p>
          <ul className="space-y-3 list-disc list-inside">
            <li>
              "Analyze tasks in this list and propose 5 automation rules that would reduce manual updates. For each,
              describe trigger, condition, and action in ClickUp terms."
            </li>
            <li>
              "Review recurring tasks tagged 'manual' and suggest which can be automated. Output table with task name,
              automation idea, estimated time saved."
            </li>
            <li>
              "Read process doc and turn into step-by-step automation blueprint: which tasks auto-created, when, default
              assignee, status, checklists."
            </li>
            <li>
              "Look at tasks completed last 30 days, identify patterns, propose reusable template and automations."
            </li>
            <li>
              "Using 'Bug Reports' and 'Customer Feedback' lists, suggest 3 automations to auto-create follow-up tasks."
            </li>
            <li>"Generate prioritization guidelines based on urgency and impact. Output as checklist."</li>
            <li>
              "From survey responses and support tickets, highlight common issues and recommend automation ideas."
            </li>
            <li>"Design intake form + automation flow for new project requests."</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Prompts for Sprint Planning</h2>
          <h3 className="text-2xl font-semibold mt-4 mb-3">Backlog grooming & grouping</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>"Summarize each backlog task into one sentence. Add suggested priority and flag duplicates."</li>
            <li>"Group related stories into epics/themes. Propose epic names and descriptions."</li>
            <li>"Identify overlapping or duplicate stories. Suggest merges or closures."</li>
            <li>"From backlog and roadmap doc, suggest candidate stories for next sprint."</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-4 mb-3">Scoping and sizing</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>"For each Ready story, generate 'Definition of Done' checklist for the task."</li>
            <li>"Propose story point estimates (1, 3, 5, 8, 13) with justifications."</li>
            <li>"Summarize feature spec into 3–5 implementable stories with acceptance criteria."</li>
            <li>"Using last three sprints' velocity, recommend sprint [X] story set fitting capacity."</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Prompts for Status Reports & Updates</h2>
          <h3 className="text-2xl font-semibold mt-4 mb-3">Weekly and executive status reports</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              "Create weekly status report based on tasks updated last 7 days. Include status, completed work, risks,
              next week's focus."
            </li>
            <li>"Write executive-level summary (3–5 bullets) using only information from tasks tagged [Project]."</li>
            <li>"Summarize changes in sprint list since last Friday."</li>
            <li>"Generate stakeholder update email template pulling from sprint review doc and key risks."</li>
            <li>"Draft one-page project health report using dashboards and lists data."</li>
          </ul>
          <h3 className="text-2xl font-semibold mt-4 mb-3">Per-team / per-owner updates</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>"For each assignee, summarize completed work, current work, blockers. Group by person."</li>
            <li>
              "Create status update for [Team] based on all tagged tasks. Include completed, in-review, dependencies."
            </li>
            <li>
              "Generate talking points for stand-up using tasks updated last 24 hours. Format: Yesterday/Today/Blockers
              per person."
            </li>
            <li>"Create concise #leadership Slack update summarizing [Epic] progress using linked tasks and doc."</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">How to Phrase Strong ClickUp AI Prompts</h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>
              <strong>Always specify context + source:</strong> "Using tasks in [this list/view] and docs linked to
              [this task/Doc]…"
            </li>
            <li>
              <strong>Define artifact type clearly:</strong> "Draft a Sprint Plan / SOP / automation blueprint" instead
              of vague instructions
            </li>
            <li>
              <strong>Include constraints & audience:</strong> "For executives in 3–5 bullets", "Slack-length update",
              "email-ready"
            </li>
            <li>
              <strong>Anchor to project type:</strong> mention "software development", "marketing campaign", etc.
            </li>
            <li>
              <strong>Iterate with small edits:</strong> "shorten to 5 bullets", "make more formal" instead of starting
              over
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
