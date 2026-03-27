import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Prompts for Project Management: Boost Productivity & Collaboration",
  description:
    "Complete guide to ChatGPT and AI prompts for project managers. Generate project charters, timelines, status reports, risk management, and team communication prompts.",
  keywords: "project management prompts, PM prompts, Asana prompts, Jira prompts, project planning",
}

export default function ProjectManagementPromptsPage() {
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
          <span className="text-gray-700">Project Management</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Prompts for Project Management: Boost Productivity & Collaboration
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            AI is no longer just a chatbot—it's a powerful project management assistant that can help you plan, track,
            communicate, and report on projects with far less manual work. The key is using the right AI prompts for
            project management.
          </p>
        </header>

        {/* Why AI Prompts Work */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why AI Prompts Work for Project Management</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
            <p className="text-gray-700 mb-4">
              Project managers spend a huge amount of time on repetitive, high‑effort tasks. AI can automate 60–80% of
              this work if you give it clear, structured prompts.
            </p>
            <p className="text-gray-700 mb-4">AI becomes a:</p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>
                • <strong>Virtual project assistant</strong> (planning, tracking, reporting)
              </li>
              <li>
                • <strong>Meeting facilitator</strong> (agendas, summaries, action items)
              </li>
              <li>
                • <strong>Communication coach</strong> (emails, updates, escalation messages)
              </li>
              <li>
                • <strong>Risk and problem-solving partner</strong>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              The result: less busywork, faster delivery, and more time for strategic work.
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Principles of Project Management Prompting</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Be Specific, Not Vague</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="font-semibold text-red-900 mb-2">❌ Weak:</p>
                <p className="text-gray-700 italic text-sm">"Help me plan a project."</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-green-900 mb-2">✅ Strong:</p>
                <p className="text-gray-700 italic text-sm">
                  "I'm launching a new e-commerce website for a Nigerian fashion brand. Create a project charter with
                  project goal and scope, key deliverables, timeline, main stakeholders, and success criteria."
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Provide Context and Constraints</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700">Always include:</p>
              <ul className="mt-3 space-y-2 text-gray-700 ml-4">
                <li>
                  • <strong>Project type:</strong> e-commerce launch, software development, marketing campaign, etc.
                </li>
                <li>
                  • <strong>Timeline:</strong> start date, key milestones, deadline
                </li>
                <li>
                  • <strong>Team and stakeholders:</strong> roles, departments, decision-makers
                </li>
                <li>
                  • <strong>Tools:</strong> Asana, Trello, Jira, Notion, Excel, etc.
                </li>
                <li>
                  • <strong>Constraints:</strong> budget, resources, risks, dependencies
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Project Planning Prompts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prompting for Project Planning & Scoping</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Project Charter / Brief</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Create a project charter for [project name]. Include: Project goal and scope, Key deliverables,
                Timeline (start date, key milestones, launch date), Main stakeholders (roles and departments), Success
                criteria (KPIs), High‑level risks and assumptions."
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Work Breakdown Structure (WBS)</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Break down the project '[project name]' into a Work Breakdown Structure (WBS). Level 1: Major phases,
                Level 2: Key deliverables, Level 3: Major tasks. Output as a hierarchical list or table."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Milestone Planning</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Define 5–7 key milestones for the project '[project name]'. For each: Name and description, Target
                date, Key deliverables, Success criteria, Responsible role(s). Output as a table."
              </p>
            </div>
          </div>
        </section>

        {/* Task Management Prompts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prompting for Task & Milestone Management</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Task Breakdown and Estimation</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Break down the deliverable '[deliverable name]' into individual tasks. For each task: Task name and
                description, Estimated effort (in hours or days), Dependencies, Responsible role. Output as a table
                suitable for import into [tool name]."
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Gantt Chart / Timeline Planning</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Create a high‑level Gantt chart for the project '[project name]'. Show phases, key milestones and
                dates, major tasks and duration, dependencies between tasks. Output as a table with columns: Task, Start
                Date, End Date, Duration, Dependencies, Owner."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Resource and Capacity Planning</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "I have a team of [number] people with roles: [list roles]. The project has [number] major deliverables
                and a timeline of [duration]. Suggest a realistic resource allocation plan that: Assigns key
                deliverables to roles, Avoids over‑allocation, Builds in buffer time."
              </p>
            </div>
          </div>
        </section>

        {/* Meeting & Collaboration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prompting for Meetings & Collaboration</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Meeting Agendas</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Create a meeting agenda for a [meeting type] on [date]. Include: Meeting goal and expected outcomes,
                Key topics (progress, blockers, decisions needed), Time allocation for each topic, Pre‑reading or
                preparation required, Participants and their roles."
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Meeting Notes & Summaries</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Summarize these meeting notes into a clear, structured format: Meeting title, date, and participants,
                Key discussion points, Decisions made, Action items (task, owner, due date), Open questions and next
                steps."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Follow‑Up Emails & Messages</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Write a follow‑up email after a project meeting. Meeting: [meeting type] on [date]. Key decisions:
                [list], Action items: [task, owner, due date], Next steps and next meeting. Tone: Professional and
                collaborative."
              </p>
            </div>
          </div>
        </section>

        {/* Status Reporting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Prompting for Status Reporting & Stakeholder Communication
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Weekly / Monthly Status Reports</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Create a weekly project status report for [project name]. Include: Overall status (on track, at risk,
                delayed), Progress this week (key tasks completed), Upcoming work (next week's priorities), Risks and
                issues, Decisions needed, Next steps and next meeting."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Stakeholder Updates & Escalations</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Write a stakeholder update email for [project name]. Audience: [e.g., senior management]. Include:
                Current status (on track, at risk, delayed), Key achievements this period, Major risks and issues,
                Support or decisions needed, Next steps and timeline. Tone: Professional, transparent, and
                solution‑focused."
              </p>
            </div>
          </div>
        </section>

        {/* Risk Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prompting for Risk Management & Problem‑Solving</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Risk Identification & Assessment</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Identify 5–7 key risks for the project '[project name]'. For each risk: Description, Likelihood
                (low/medium/high), Impact (low/medium/high), Risk owner, Mitigation strategies. Output as a risk
                register table."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Problem‑Solving & Decision Support</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "We have a problem: [describe problem]. Suggest 3–5 practical solutions, including: Short‑term fixes,
                Long‑term adjustments, Pros and cons of each option, Recommended action and next steps."
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices and Pitfalls to Avoid</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-3">✅ Do This</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Be specific about project type, timeline, team, and tools</li>
                <li>Request structured output (tables, bullets, JSON) for easy import</li>
                <li>Break complex tasks into smaller, focused prompts</li>
                <li>Always review and refine AI outputs before sharing</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-3">❌ Avoid This</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Vague prompts like "Help me manage this project"</li>
                <li>Sharing sensitive project data in prompts</li>
                <li>Treating AI outputs as final without critical review</li>
                <li>Ignoring team context and stakeholder expectations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Prompting Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/how-to-write-effective-ai-prompts" className="text-blue-600 hover:underline">
              → How to Write Effective AI Prompts
            </Link>
            <Link href="/chatgpt-prompts" className="text-blue-600 hover:underline">
              → ChatGPT Prompts
            </Link>
            <Link href="/common-ai-prompt-mistakes" className="text-blue-600 hover:underline">
              → Common Prompt Mistakes
            </Link>
            <Link href="/website-links" className="text-blue-600 hover:underline">
              → Back to Prompts Library
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8 text-center text-gray-600 text-sm">
          <p>
            Used wisely, AI prompts help project managers reduce busywork, improve communication, and make better
            decisions—freeing up time and energy for what matters most: delivering successful projects and building
            high-performing teams.
          </p>
          <Link href="/website-links" className="text-blue-600 hover:underline mt-4 block">
            ← Back to Prompts Library
          </Link>
        </footer>
      </div>
    </main>
  )
}
