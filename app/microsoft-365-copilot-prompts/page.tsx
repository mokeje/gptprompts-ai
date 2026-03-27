"use client"

import Link from "next/link"

export default function Microsoft365CopilotPromptsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Breadcrumb */}
      <nav className="border-b border-border/40 bg-background/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/website-links" className="hover:text-foreground transition-colors">
              Prompts Library
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Microsoft 365 Copilot Prompts</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-4">AI Prompts for Microsoft 365 Copilot</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Master Teams, Outlook, and business reporting with 50+ production-ready prompts for Microsoft 365 Copilot
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Microsoft 365</span>
            <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              Productivity
            </span>
            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Business</span>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12 prose prose-sm max-w-none">
          <h2>Microsoft 365 Copilot Prompt Framework</h2>
          <p>
            Microsoft's Copilot guidance uses four core ingredients: Goal, Context, Source, and Expectations. This
            framework ensures your prompts leverage Teams, Outlook, Word, Excel, OneDrive, and SharePoint data
            effectively. By referencing people, files, and meetings directly (/file, /meeting tags), you get better,
            more contextual results.
          </p>
          <p>
            The most effective Microsoft 365 Copilot prompts follow this pattern:{" "}
            <strong>Action + Context + Goal</strong>. For example: "Summarize this week's emails about Project X and
            create 5 bullet updates for my manager."
          </p>
        </section>

        {/* Teams Prompts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Copilot Prompts for Teams (Meetings & Chat)</h2>
          <div className="space-y-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Meeting Recap</h3>
              <p className="text-muted-foreground mb-4">
                "Recap our last Teams meeting about [project name]. List key decisions, action items with owners, and
                any open questions, in bullet form."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Quick meeting summaries for stakeholder updates
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Idea Synthesis</h3>
              <p className="text-muted-foreground mb-4">
                "What ideas were discussed in today's meeting on [topic], and who suggested them? Group them by theme."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Extracting and organizing ideas from brainstorming sessions
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Stakeholder Summary</h3>
              <p className="text-muted-foreground mb-4">
                "Create a short summary of this meeting I can paste into an email to stakeholders, focusing on outcomes
                and next steps."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Distribute meeting outcomes efficiently
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Risk & Blocker Analysis</h3>
              <p className="text-muted-foreground mb-4">
                "From all meetings this week tagged [project/keyword], highlight repeated risks or blockers and suggest
                3 follow-up actions."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Proactive risk management across projects
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Chat Summary</h3>
              <p className="text-muted-foreground mb-4">
                "Summarize my recent Teams chats with [person/team] into a status update: what we're working on
                together, current blockers, and deadlines."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Quick team collaboration overviews
              </p>
            </div>
          </div>
        </section>

        {/* Outlook Prompts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Copilot Prompts for Outlook (Email Triage & Drafting)</h2>
          <div className="space-y-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Email Thread Summary</h3>
              <p className="text-muted-foreground mb-4">
                "Summarize this email thread into key points and action items, then suggest a 3-sentence reply I could
                send."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Process long email threads quickly
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Project Status Draft</h3>
              <p className="text-muted-foreground mb-4">
                "Draft a concise update email to [recipient / team] about the current status of [project] using the
                latest emails and files related to it. Keep it under 200 words."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Automated status update emails
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Tone Enhancement</h3>
              <p className="text-muted-foreground mb-4">
                "Rewrite my draft reply to sound more professional and to-the-point, while keeping all commitments I
                made."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Polish email tone and clarity
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Information Extraction</h3>
              <p className="text-muted-foreground mb-4">
                "Find all recent emails related to [topic/customer] and summarize key agreements, dates, and next steps
                in a short paragraph."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Extract critical business information
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Subject Line Generation</h3>
              <p className="text-muted-foreground mb-4">
                "Create three alternative subject lines for this email that are clear, specific, and under 60
                characters."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Optimize email open rates
              </p>
            </div>
          </div>
        </section>

        {/* Business Reports */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Copilot Prompts for Business & Management Reports</h2>
          <div className="space-y-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Comprehensive Report Draft</h3>
              <p className="text-muted-foreground mb-4">
                "Using the latest [Excel file / range] and [Word/PowerPoint] docs on [project/quarter], draft a 1–2 page
                business report. Include sections: Executive summary, Key metrics, Wins, Risks, and Next steps."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Generate complete business reports
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Data Analysis & Insights</h3>
              <p className="text-muted-foreground mb-4">
                "Analyze the Q1 and Q2 sales data in [workbook] and describe key trends, outliers, and opportunities in
                plain language for non-technical stakeholders."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Translate complex data into actionable insights
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Presentation Conversion</h3>
              <p className="text-muted-foreground mb-4">
                "Turn this detailed financial report into 5 slide-ready bullet lists: one list per slide, focusing on
                what changed vs last period."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Convert reports to presentations
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Performance Summary</h3>
              <p className="text-muted-foreground mb-4">
                "Summarize our performance on [product/region] over the last 6 months using data from [file] and meeting
                notes tagged 'review'. Highlight strengths, weaknesses, and recommended actions."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Executive performance reviews
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Report Clarity</h3>
              <p className="text-muted-foreground mb-4">
                "Rewrite this draft quarterly report to be clearer and more concise, preserving all numbers but
                shortening explanations."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Use Case:</strong> Improve report readability
              </p>
            </div>
          </div>
        </section>

        {/* Cross-App Prompts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Copilot Chat Prompts Across 365</h2>
          <p className="text-muted-foreground mb-6">
            In Copilot Chat (the unified experience), you can draw from Outlook, Teams, OneDrive, and more for
            comprehensive summaries and insights.
          </p>
          <div className="space-y-4 mb-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Priority Identification</h3>
              <p className="text-muted-foreground mb-4">
                "Based on my recent emails, Teams meetings, and To Do tasks, list my top 5 priorities for this week with
                one sentence of reasoning for each."
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Project Catch-Up</h3>
              <p className="text-muted-foreground mb-4">
                "Provide a summary of the updates and action items on [project X] from the last 2 weeks of emails,
                meetings, and documents."
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Collaboration Overview</h3>
              <p className="text-muted-foreground mb-4">
                "What work do I currently have going on with [name]? Summarize shared projects, open actions, and
                upcoming deadlines."
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">FAQ Outline</h3>
              <p className="text-muted-foreground mb-4">
                "Turn this FAQ document into a 10-slide onboarding outline: one slide title and 3 bullets per slide."
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-lg">Content Validation</h3>
              <p className="text-muted-foreground mb-4">
                "Check this product launch rationale for inconsistencies or missing pieces. Suggest improvements in
                bullet points."
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best-Practice Patterns for Copilot Prompts</h2>
          <div className="space-y-4">
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
              <h3 className="font-semibold mb-2">State a Clear Goal First</h3>
              <p className="text-muted-foreground">
                Start with action verbs: "Summarize…", "Create…", "Analyze…", "Rewrite…"
              </p>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Add Context & Source</h3>
              <p className="text-muted-foreground">
                Mention project names, people, and specific files/threads/meetings Copilot should use
              </p>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Set Expectations</h3>
              <p className="text-muted-foreground">
                Define audience, length, tone ("for executives in 5 bullets", "under 200 words", "neutral,
                professional")
              </p>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Iterate Prompts</h3>
              <p className="text-muted-foreground">
                Follow up with "make it shorter", "more formal", or "add action items" instead of starting from scratch
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-card border border-border rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold hover:bg-background/50">
                How do I reference specific files in Copilot prompts?
              </summary>
              <div className="px-6 pb-6 text-muted-foreground border-t border-border">
                Use the format /file [filename] or /meeting [meeting name] to reference specific resources. Copilot will
                pull context from those files or meeting transcripts.
              </div>
            </details>
            <details className="group bg-card border border-border rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold hover:bg-background/50">
                Can Copilot access data across multiple Office 365 apps?
              </summary>
              <div className="px-6 pb-6 text-muted-foreground border-t border-border">
                Yes. Copilot Chat can access Outlook, Teams, OneDrive, SharePoint, Word, Excel, and PowerPoint.
                Reference them naturally in your prompts.
              </div>
            </details>
            <details className="group bg-card border border-border rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold hover:bg-background/50">
                What's the best way to structure a report prompt?
              </summary>
              <div className="px-6 pb-6 text-muted-foreground border-t border-border">
                Start with Goal (what you want), add Context (which data/timeframe), specify Expectations (audience,
                length, tone), and end with Format (bullets, paragraphs, sections).
              </div>
            </details>
            <details className="group bg-card border border-border rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold hover:bg-background/50">
                How do I ensure my Copilot outputs are accurate?
              </summary>
              <div className="px-6 pb-6 text-muted-foreground border-t border-border">
                Always verify summaries against original sources. Set clear expectations for accuracy and ask Copilot to
                flag any uncertainties or missing context.
              </div>
            </details>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12 bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Related Prompting Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/google-workspace-ai-prompts" className="text-primary hover:underline font-medium">
              → Google Workspace AI Prompts
            </Link>
            <Link href="/zapier-ai-prompts" className="text-primary hover:underline font-medium">
              → Zapier AI Workflow Prompts
            </Link>
            <Link href="/hubspot-ai-prompts" className="text-primary hover:underline font-medium">
              → HubSpot AI Email & CRM Prompts
            </Link>
            <Link href="/airtable-ai-prompts" className="text-primary hover:underline font-medium">
              → Airtable AI Database Prompts
            </Link>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="text-center pt-8 border-t border-border">
          <Link href="/website-links" className="text-primary hover:underline font-medium">
            ← Back to Prompts Library
          </Link>
        </div>
      </div>
    </main>
  )
}
