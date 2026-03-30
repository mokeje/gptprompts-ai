import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ChatGPT Custom Instructions Guide 2026: Setup, Templates & Examples",
  description:
    "Step-by-step guide to setting up ChatGPT Custom Instructions. Includes copy-paste templates for work, writing, coding, and more so you get better responses every time.",
}

export default function ChatGPTCustomInstructionsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            Custom <br />
            <span className="italic opacity-90">Instructions.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            Stop repeating yourself. Master ChatGPT Custom Instructions to create personalized, persistent prompts that
            apply to every conversation automatically.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6] mb-6">Contents</h3>
              <ul className="space-y-3 text-sm font-medium">
                {[
                  { id: "what", label: "What Are Custom Instructions", num: "01" },
                  { id: "setup", label: "Step-by-Step Setup", num: "02" },
                  { id: "benefits", label: "Key Benefits", num: "03" },
                  { id: "templates", label: "Copy-Paste Templates", num: "04" },
                  { id: "advanced", label: "Advanced Tips", num: "05" },
                  { id: "troubleshoot", label: "Troubleshooting", num: "06" },
                  { id: "faq", label: "FAQ", num: "07" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-muted-foreground hover:text-[#8b5cf6] transition-colors flex justify-between"
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

        <article className="lg:col-span-9 space-y-16">
          <section id="what" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6]">01 — Intro</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">
                What are ChatGPT Custom Instructions?
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Custom Instructions are a ChatGPT feature (available to Plus, Pro, and Team users) that define two key
              elements applied to all new chats:
            </p>
            <div className="space-y-4">
              <Card className="border-[#8b5cf6]/20 bg-card p-6">
                <h4 className="font-bold mb-2">Field 1: What ChatGPT should know about you</h4>
                <p className="text-sm text-muted-foreground">
                  Your background, profession, preferences, constraints, or context (e.g., "I'm a marketing manager for
                  a SaaS startup targeting small businesses").
                </p>
              </Card>
              <Card className="border-[#8b5cf6]/20 bg-card p-6">
                <h4 className="font-bold mb-2">Field 2: How ChatGPT should respond</h4>
                <p className="text-sm text-muted-foreground">
                  Desired tone, format, length, rules (e.g., "Always use bullet points, keep responses under 300 words,
                  avoid fluff").
                </p>
              </Card>
            </div>
            <p className="text-base text-muted-foreground">
              These persist across all your chats, eliminating the need to restate context. Users report 40-60%
              reduction in prompt length and 2-3x faster workflows.
            </p>
          </section>

          <section id="setup" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6]">02 — Setup</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">
                Step-by-Step Setup for Custom Instructions
              </h2>
            </div>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-[#8b5cf6] min-w-[40px]">1</span>
                <div>
                  <h4 className="font-bold">Open ChatGPT and click your profile icon (bottom-left sidebar)</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Select &quot;Customize ChatGPT&quot; or go to Settings &gt; Personalization &gt; Custom
                    Instructions.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-[#8b5cf6] min-w-[40px]">2</span>
                <div>
                  <h4 className="font-bold">Toggle Custom Instructions ON</h4>
                  <p className="text-sm text-muted-foreground mt-1">If not already enabled, activate the feature.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-[#8b5cf6] min-w-[40px]">3</span>
                <div>
                  <h4 className="font-bold">
                    Fill Field 1: &quot;What would you like ChatGPT to know about you?&quot;
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Include role, goals, audience, tools, constraints. Keep under 1,500 characters.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-[#8b5cf6] min-w-[40px]">4</span>
                <div>
                  <h4 className="font-bold">Fill Field 2: &quot;How would you like ChatGPT to respond?&quot;</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Specify format, tone, rules. Bullet points, tables, or structured outputs work best.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl font-bold text-[#8b5cf6] min-w-[40px]">5</span>
                <div>
                  <h4 className="font-bold">Click Save and test in a new chat</h4>
                  <p className="text-sm text-muted-foreground mt-1">Refine iteratively based on outputs.</p>
                </div>
              </li>
            </ol>
          </section>

          <section id="templates" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6]">04 — Templates</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">
                Copy-Paste Templates by Use Case
              </h2>
            </div>

            <Card className="border-[#8b5cf6]/20 bg-card p-6">
              <h4 className="font-bold mb-4">Content Creators &amp; Marketers</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-bold text-muted-foreground mb-2">Field 1 (About you):</p>
                  <div className="bg-muted p-3 rounded text-sm">
                    "I'm a content marketer for tech startups. I write blog posts, social media, and email newsletters
                    targeting developers and founders. Always optimize for SEO with primary keywords like [LIST
                    KEYWORDS]. My brand voice is helpful, witty, and actionable."
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground mb-2">Field 2 (How to respond):</p>
                  <div className="bg-muted p-3 rounded text-sm">
                    "Structure responses as: 3-sentence intro hook, bullet points or numbered steps, 1-2 actionable
                    takeaways. Keep under 400 words, use engaging headers, end with a CTA. Include 2-3 internal link
                    ideas."
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-[#8b5cf6]/20 bg-card p-6">
              <h4 className="font-bold mb-4">Business Professionals &amp; Entrepreneurs</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-bold text-muted-foreground mb-2">Field 1 (About you):</p>
                  <div className="bg-muted p-3 rounded text-sm">
                    "I'm a SaaS founder with a remote team of 10. Focus on growth hacking, customer support, and
                    operations. Use tools like Notion, Zapier, HubSpot. Budget-conscious; prioritize free/low-cost
                    tactics."
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground mb-2">Field 2 (How to respond):</p>
                  <div className="bg-muted p-3 rounded text-sm">
                    "Respond in business-professional tone: concise, data-driven, realistic. Format as: Summary (1
                    para), Pros/cons table if comparing, Step-by-step implementation, Risks and mitigations. Avoid hype;
                    cite sources if possible."
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section id="faq" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6]">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "Do Custom Instructions apply to all conversations?",
                  a: "Yes, they apply to all new chats by default. You can toggle them off for individual chats or create multiple accounts for different use cases.",
                },
                {
                  q: "Can I have multiple Custom Instructions?",
                  a: "Currently, you have one set per account. For different workflows, create separate ChatGPT accounts or use custom GPTs.",
                },
                {
                  q: "How long should my Custom Instructions be?",
                  a: "Keep each field under 1,500 characters. Concise, well-organized instructions produce better adherence than lengthy ones.",
                },
                {
                  q: "Do they work with ChatGPT API?",
                  a: "Custom Instructions are a UI feature. For API use, pass system prompts in the request to replicate the effect.",
                },
                {
                  q: "Can I combine Custom Instructions with Memory?",
                  a: "Yes. Custom Instructions set baselines; Memory adds conversation-specific details for even more personalization.",
                },
                {
                  q: "What if ChatGPT ignores my instructions?",
                  a: "Try: adding &quot;ALWAYS&quot; before critical rules, shortening to essentials, including examples, or rephrasing more directly.",
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-[#8b5cf6]/20">
                  <AccordionTrigger className="hover:text-[#8b5cf6]">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </article>
      </section>

      <footer className="bg-muted border-t mt-32 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          <div>
            <h4 className="font-bold mb-4">ChatGPT Guides</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-[#8b5cf6]">
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-business-productivity" className="hover:text-[#8b5cf6]">
                  Business Productivity
                </Link>
              </li>
              <li>
                <Link href="/avoiding-hallucinations" className="hover:text-[#8b5cf6]">
                  Avoiding Hallucinations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Learning</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/few-shot-prompting" className="hover:text-[#8b5cf6]">
                  Few-Shot Prompting
                </Link>
              </li>
              <li>
                <Link href="/gpt-o1-guide" className="hover:text-[#8b5cf6]">
                  GPT-o1 Reasoning
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-[#8b5cf6]">
                  View All Pages
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm text-muted-foreground">
              © 2026 GPTPrompts.AI. Mastering ChatGPT Custom Instructions transforms your AI into a personalized,
              always-ready assistant for any workflow.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
