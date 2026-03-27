import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Zap } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Best AI Prompt Generators: Top 15 Tools 2026 | GPTPrompts.AI",
  description:
    "Discover the top 15 AI prompt generator tools for 2026. Master AIPRM, PromptPerfect, Midjourney Prompt Helper, and more to create perfect prompts effortlessly.",
}

export default function PromptGeneratorsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#7c3aed] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Zap className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Best AI Prompt <br />
            <span className="italic opacity-90">Generators.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Skip the trial and error. The top 15 meta-prompting tools that transform vague ideas into structured,
            high-performance prompts in seconds.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#7c3aed] mb-6">Generator Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "Why Generators Matter", num: "01" },
                  { id: "top-tools", label: "Top 15 Tools", num: "02" },
                  { id: "aiprm", label: "AIPRM for ChatGPT", num: "03" },
                  { id: "frameworks", label: "Prompting Frameworks", num: "04" },
                  { id: "comparison", label: "Tool Comparison", num: "05" },
                  { id: "faq", label: "Generator FAQ", num: "06" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#7c3aed] transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-[10px] opacity-30 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-32 max-w-4xl">
          <article id="intro" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">The Hidden Cost of Poor Prompts</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              In 2026, the "blank page" problem isn't about inspiration—it's about precision. Vague prompts lead to
              mediocre outputs, wasted tokens, and frustrated teams. AI prompt generators solve this by applying
              battle-tested frameworks like RTF (Role, Task, Format) and PARE (Persona, Action, Result, Example) to
              ensure every prompt hits its mark on the first try.
            </p>
          </article>

          <section id="top-tools" className="space-y-16">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">The Top 15 Prompt Generators</h2>
            <div className="grid grid-cols-1 gap-12">
              {[
                {
                  num: "1",
                  title: "AIPRM for ChatGPT",
                  desc: "The gold standard for marketers and SEO specialists. Community-vetted templates with one-click optimization.",
                  color: "from-green-500",
                },
                {
                  num: "2",
                  title: "PromptPerfect",
                  desc: "The developer's choice. Auto-optimizes prompts by adding technical constraints and reducing hallucinations.",
                  color: "from-blue-500",
                },
                {
                  num: "3",
                  title: "Midjourney Prompt Helper",
                  desc: "Specialized for visual generation. GUI interface replaces complex parameter memorization with visual selection.",
                  color: "from-purple-500",
                },
                {
                  num: "4",
                  title: "ClickUp AI",
                  desc: "Project-aware prompt generation. Creates contextual prompts based on your workflow data and project metadata.",
                  color: "from-cyan-500",
                },
                {
                  num: "5",
                  title: "GravityWrite",
                  desc: "Conversion-focused prompts for creators. Generates high-performing ad copy and scripts through structured intake forms.",
                  color: "from-orange-500",
                },
              ].map((tool, i) => (
                <div key={i} className="border-b border-black/5 pb-12">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl font-black opacity-10">{tool.num}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{tool.title}</h3>
                      <p className="text-muted-foreground mt-2">{tool.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="frameworks" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Prompting Frameworks Explained</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#7c3aed]">RTF Framework</h3>
                <p className="text-muted-foreground mb-6">
                  Role: Who is the AI? Task: What should it do? Format: How should it present the output?
                </p>
                <div className="text-sm font-mono bg-black/5 p-4">
                  Role: SEO Expert
                  <br />
                  Task: Write meta description
                  <br />
                  Format: 155 chars, active voice
                </div>
              </Card>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#7c3aed]">PARE Framework</h3>
                <p className="text-muted-foreground mb-6">
                  Persona: Define the AI's identity. Action: What's the main goal? Result: Expected output. Example:
                  Show a sample.
                </p>
                <div className="text-sm font-mono bg-black/5 p-4">
                  Persona: McKinsey Partner
                  <br />
                  Action: Analyze market opportunity
                  <br />
                  Example: Provide competitive moats
                </div>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Generator FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Should I use a generator or write prompts manually?",
                  a: "Use generators for routine tasks and learning. Write manually for deeply specialized or creative work. The best approach? Use a generator as a starting template, then refine.",
                },
                {
                  q: "Do generators work for all AI models?",
                  a: "Most are model-agnostic, but generators optimized for ChatGPT may not work perfectly with Claude or Gemini. Look for generators with toggle options for different models.",
                },
                {
                  q: "How much do premium generators cost?",
                  a: "Pricing ranges from free (with limited features) to $20-50/month for enterprise solutions. Most ROI comes from reducing trial-and-error time rather than tool cost.",
                },
                {
                  q: "Can I use generated prompts for commercial purposes?",
                  a: "Yes, but always review the generator's terms of service. Most allow commercial use of outputs generated through their platform.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#7c3aed]">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xl leading-relaxed pt-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-32 px-6 md:px-12 mt-32 border-t border-background/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm text-lg">
              The definitive resource for AI prompt engineering and generator tools.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">AI Models</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Midjourney Prompts", href: "/midjourney-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Prompt Engineering Fundamentals", href: "/prompt-engineering-fundamentals" },
                { label: "Free Prompts Library", href: "/free-ai-prompts" },
                { label: "Image Prompts", href: "/image-prompts" },
                { label: "SQL Prompts", href: "/sql-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Career & Writing</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Story Prompts", href: "/story-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Related Guides</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts Library", href: "/chatgpt-prompts-library" },
                { label: "Midjourney Guide", href: "/midjourney-guide" },
                { label: "AI Prompt Techniques", href: "/write-ai-prompts-techniques" },
                { label: "Human-Like Prompts", href: "/human-sound-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-8 mt-8 border-t border-background/10">
                <p className="text-[10px] opacity-30 uppercase tracking-widest leading-loose">
                  © 2026 GPTPrompts.AI <br />
                  All Rights Reserved.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}
