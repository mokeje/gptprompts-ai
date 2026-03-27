import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { CheckSquare } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ChatGPT Prompts for Business Productivity: Complete Guide to Automation | GPTPrompts.AI",
  description:
    "Master ChatGPT for business with copy-paste productivity prompts for scheduling, email, project management, and workflow automation. Cut hours from your workweek.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Complete Guide to ChatGPT Prompts for Business Productivity",
  description:
    "Master ChatGPT for business productivity with actionable prompts for scheduling, emails, and project management.",
  author: { "@type": "Organization", name: "GPTPrompts.AI" },
  datePublished: "2026-01-12",
  keywords: "ChatGPT business prompts, productivity automation, email templates, project management",
}

export default function ChatGPTBusinessProductivityPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <script type="application/ld+json" dangerously set innerHTML={JSON.stringify(jsonLd)} />

      {/* Hero Header */}
      <header className="bg-gradient-to-r from-[#10a37f] to-[#0d7d6f] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            ChatGPT for <br />
            <span className="italic opacity-90">Business.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed opacity-90">
            Stop wasting hours on emails, scheduling, and planning. Master ChatGPT prompts designed for business
            productivity—with copy-paste templates you can use today.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#10a37f] mb-6">Contents</h3>
              <ul className="space-y-3 text-sm font-medium">
                {[
                  { id: "what-are", label: "What Are ChatGPT Prompts", num: "01" },
                  { id: "scheduling", label: "Scheduling & Calendar", num: "02" },
                  { id: "email", label: "Email Drafting", num: "03" },
                  { id: "project", label: "Project Management", num: "04" },
                  { id: "automation", label: "Task Automation", num: "05" },
                  { id: "advanced", label: "Advanced Tips", num: "06" },
                  { id: "library", label: "Prompt Library", num: "07" },
                  { id: "faq", label: "FAQ", num: "08" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-muted-foreground hover:text-[#10a37f] transition-colors flex justify-between items-center"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs opacity-50">{item.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <article className="lg:col-span-9 space-y-16">
          {/* Section 1 */}
          <section id="what-are" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#10a37f]">01 — Foundation</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">
                What Are ChatGPT Prompts (And Why They Matter)?
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A ChatGPT prompt is the instruction you give the AI to produce a specific outcome. The quality of your
              prompts directly influences the quality of the results. For business productivity, great prompts define a
              clear role, explain context, specify output format, and include constraints.
            </p>
            <div className="bg-[#f0f9f7] border border-[#10a37f]/20 rounded-lg p-8 space-y-4">
              <h3 className="font-bold text-lg">Great business prompts should:</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <CheckSquare className="w-5 h-5 text-[#10a37f] flex-shrink-0 mt-0.5" />{" "}
                  <span>Define a clear role for ChatGPT (e.g., "You are my executive assistant…")</span>
                </li>
                <li className="flex gap-3">
                  <CheckSquare className="w-5 h-5 text-[#10a37f] flex-shrink-0 mt-0.5" />{" "}
                  <span>Explain the context (who you are, what you do, what you need)</span>
                </li>
                <li className="flex gap-3">
                  <CheckSquare className="w-5 h-5 text-[#10a37f] flex-shrink-0 mt-0.5" />{" "}
                  <span>Specify the format of the output (bullets, table, email, etc.)</span>
                </li>
                <li className="flex gap-3">
                  <CheckSquare className="w-5 h-5 text-[#10a37f] flex-shrink-0 mt-0.5" />{" "}
                  <span>Include constraints (word count, tone, audience, tools used)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section id="scheduling" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#10a37f]">02 — Scheduling</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">
                Scheduling and Calendar Management
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ChatGPT can't click your calendar, but it can draft scheduling emails, suggest optimal meeting times, and
              create time-blocked schedules. These prompts save 20-30 minutes per workday.
            </p>
            <Card className="border-[#10a37f]/20 bg-card p-6">
              <h4 className="font-bold mb-3">Daily Planning Prompt:</h4>
              <div className="bg-muted p-4 rounded font-mono text-sm whitespace-pre-wrap">
                {`You are my productivity coach. I will paste my task list for today with rough time estimates and deadlines.

Reorganize the tasks using the Eisenhower matrix (urgent/important).

Suggest an optimized schedule for an 8‑hour workday with 2 short breaks and 1 lunch break.

Highlight which tasks I should delegate or automate.

Here are my tasks: [PASTE TASKS HERE].`}
              </div>
            </Card>
          </section>

          {/* Section 3 */}
          <section id="email" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#10a37f]">03 — Email</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">
                Email Drafting and Communication
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Email is one of the biggest time drains. With the right ChatGPT prompts, systematize your email drafting
              in under 5 minutes per message. Cut email writing time by 50–80%.
            </p>
            <Card className="border-[#10a37f]/20 bg-card p-6">
              <h4 className="font-bold mb-3">General Email Framework:</h4>
              <div className="bg-muted p-4 rounded font-mono text-sm whitespace-pre-wrap">
                {`You are my email writing assistant.
Context: [BRIEF CONTEXT].
Recipient: [ROLE, RELATIONSHIP, FORMALITY LEVEL].
Goal of the email: [GOAL].
Constraints: [WORD LIMIT, TONE, ANY MUST‑INCLUDE POINTS].

Structure the email as:
- Clear subject line
- Short opening that provides context
- Main message in 1–3 paragraphs or bullet points
- Clear call to action / next step`}
              </div>
            </Card>
          </section>

          {/* Section 4 */}
          <section id="project" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#10a37f]">04 — Project</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">Project Management Prompts</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ChatGPT won't replace your project management software, but it can help you think, plan, and document
              faster. Turn vague ideas into clear project plans in minutes.
            </p>
            <Card className="border-[#10a37f]/20 bg-card p-6">
              <h4 className="font-bold mb-3">Project Breakdown Prompt:</h4>
              <div className="bg-muted p-4 rounded font-mono text-sm whitespace-pre-wrap">
                {`Act as a senior project manager. I want to run a project about: [PROJECT IDEA].

Ask me 5–10 clarifying questions to define scope, objectives, constraints, and success metrics.

Based on my answers, propose:
- A one‑paragraph project summary
- 3–5 main phases
- Key deliverables in each phase
- Rough timeline and dependencies`}
              </div>
            </Card>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#10a37f]">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "How much time can ChatGPT save in business?",
                  a: "Studies show 2-3x faster workflows for repetitive tasks like email drafting, scheduling, and documentation. Users report saving 10-20 hours per week.",
                },
                {
                  q: "Should I trust ChatGPT outputs for client communication?",
                  a: "Always review and personalize before sending. ChatGPT is excellent for drafts and structures, but human judgment ensures brand voice and accuracy.",
                },
                {
                  q: "Can ChatGPT replace my team?",
                  a: "No. ChatGPT automates 'brain work' (drafting, planning, organizing) so your team focuses on decisions, strategy, and relationships.",
                },
                {
                  q: "What's the best way to structure a business prompt?",
                  a: 'Use: Role ("You are...") + Context + Goal + Format + Constraints. This structure produces 3x better outputs than vague requests.',
                },
                {
                  q: "How do I avoid repetitive prompting?",
                  a: "Build a prompt template library. Save 5-10 templates for common tasks (emails, planning, SOPs). Reuse and customize the bracketed sections.",
                },
                {
                  q: "Is ChatGPT better than other AI tools for business?",
                  a: "ChatGPT is best for most business workflows due to its versatility, affordability, and ease of use. For specialized tasks, some teams combine ChatGPT with domain-specific tools.",
                },
                {
                  q: "Can I automate ChatGPT prompts with Zapier or Make?",
                  a: "Yes. Combine ChatGPT API with automation tools to trigger prompts based on emails, calendar events, or form submissions.",
                },
                {
                  q: "How do I measure the ROI of ChatGPT for my business?",
                  a: "Track: hours saved per week, email turnaround time, project planning time, and quality of outputs. Most businesses see 5-10x ROI within 30 days.",
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-[#10a37f]/20">
                  <AccordionTrigger className="hover:text-[#10a37f] font-medium">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </article>
      </section>

      {/* Footer */}
      <footer className="bg-muted border-t mt-32 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          <div>
            <h4 className="font-bold mb-4">ChatGPT Guides</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-[#10a37f]">
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-json-prompting" className="hover:text-[#10a37f]">
                  JSON Prompting
                </Link>
              </li>
              <li>
                <Link href="/best-chatgpt-marketing-prompts" className="hover:text-[#10a37f]">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/ai-prompt-generators" className="hover:text-[#10a37f]">
                  Prompt Generators
                </Link>
              </li>
              <li>
                <Link href="/prompt-engineering-fundamentals" className="hover:text-[#10a37f]">
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-[#10a37f]">
                  View All Pages
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm text-muted-foreground">
              © 2026 GPTPrompts.AI. All rights reserved. Master AI prompting with our comprehensive guides and
              templates.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
