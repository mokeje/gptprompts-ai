import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Zap, Code2, Target } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How to Create Effective Prompts for Virtual Assistants | GPTPrompts.AI",
  description:
    "Master the R-C-I-O Framework for Virtual Assistant prompts. Learn prompt engineering techniques to get superior results from AI and human assistants.",
}

export default function VAPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#0066cc] text-[#ffffff] py-32 px-6 md:px-12 relative overflow-hidden">
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
            Virtual Assistant <br />
            <span className="italic opacity-90">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Master the R-C-I-O Framework. Learn the science of instruction clarity that transforms average outputs into
            exceptional results from both AI and human assistants.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0066cc] mb-6">VA Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "why", label: "Why Prompt Engineering Matters", num: "00" },
                  { id: "anatomy", label: "Anatomy of a Perfect Prompt", num: "01" },
                  { id: "rcio", label: "R-C-I-O Framework", num: "02" },
                  { id: "advanced", label: "Advanced Techniques", num: "03" },
                  { id: "examples", label: "Workflow Examples", num: "04" },
                  { id: "human-ai", label: "Human vs AI Assistants", num: "05" },
                  { id: "mistakes", label: "Common Mistakes", num: "06" },
                  { id: "optimization", label: "Prompt Optimization", num: "07" },
                  { id: "faq", label: "VA Prompts FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#0066cc] transition-colors"
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

        {/* Content Body */}
        <div className="lg:col-span-9 space-y-32 max-w-4xl">
          <article id="why" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              Why Prompt Engineering is the New Essential Skill
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Prompt engineering isn't just for coders; it's a vital communication skill for the modern workforce.
              Effective prompts save hours of revision, reduce "hallucinations" in AI, and ensure that your Virtual
              Assistant understands the intent, context, and constraints of your project. Whether you're managing an
              AI-powered assistant or delegating to a human VA, clarity is currency.
            </p>
          </article>

          <section id="rcio" className="space-y-12 bg-[#0066cc] text-white p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#00d9ff] font-bold uppercase tracking-widest text-sm mb-6">
                <Target className="w-5 h-5" />
                <span>The Framework</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">The R-C-I-O Framework</h2>
              <div className="space-y-6">
                <Card className="p-6 bg-[#005fa3] border-none">
                  <h4 className="text-[#00d9ff] font-bold mb-3 uppercase tracking-widest text-sm">Role</h4>
                  <p className="opacity-90">
                    Give the VA an identity. Don't ask for "a blog post"—say "You are an expert travel writer with 15
                    years of experience covering eco-tourism."
                  </p>
                </Card>
                <Card className="p-6 bg-[#005fa3] border-none">
                  <h4 className="text-[#00d9ff] font-bold mb-3 uppercase tracking-widest text-sm">Context</h4>
                  <p className="opacity-90">
                    Provide the why and who. "The audience is college freshmen planning their first backpacking trip.
                    The goal is to inspire, not overwhelm."
                  </p>
                </Card>
                <Card className="p-6 bg-[#005fa3] border-none">
                  <h4 className="text-[#00d9ff] font-bold mb-3 uppercase tracking-widest text-sm">Instruction</h4>
                  <p className="opacity-90">
                    Use specific verbs. "Analyze," "Synthesize," "Draft"—not vague requests like "Help me with..."
                  </p>
                </Card>
                <Card className="p-6 bg-[#005fa3] border-none">
                  <h4 className="text-[#00d9ff] font-bold mb-3 uppercase tracking-widest text-sm">Output</h4>
                  <p className="opacity-90">
                    Define the format. Do you want a bulleted list, markdown table, or 1000-word essay? Specify.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          <section id="advanced" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#0066cc]/10 rounded-xl">
                <Code2 className="w-8 h-8 text-[#0066cc]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Advanced Prompting Techniques</h2>
            </div>

            <div className="space-y-6">
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Few-Shot Prompting</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Provide 2-3 examples of the exact style or output you want. This "teaches" the VA the pattern without
                  needing lengthy instructions.
                </p>
                <div className="p-4 bg-white rounded-xl border border-[#0066cc]/20 font-mono text-sm text-slate-700">
                  "Here are three examples of emails I've sent that nail our brand voice. Analyze their tone, structure,
                  and vocabulary. Write a follow-up email to [CLIENT] in this exact style."
                </div>
              </Card>

              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Chain-of-Thought Prompting</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Ask the VA to "think step by step" before delivering the final answer. This dramatically improves
                  reasoning tasks.
                </p>
                <div className="p-4 bg-white rounded-xl border border-[#0066cc]/20 font-mono text-sm text-slate-700">
                  "Walk me through your reasoning for choosing this pricing strategy. Then provide a final
                  recommendation."
                </div>
              </Card>

              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Constraint-Based Prompting</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Set clear boundaries. "Do not use jargon," "Keep it under 100 words," or "Avoid first-person
                  narrative."
                </p>
                <div className="p-4 bg-white rounded-xl border border-[#0066cc]/20 font-mono text-sm text-slate-700">
                  "Write a product description. Constraints: No marketing buzzwords, active voice only, max 150 words."
                </div>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Virtual Assistant Prompts FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How do I know if my prompt is clear enough?",
                  a: "Test it. If the VA asks clarifying questions, the prompt needs refinement. A good prompt should be understood the same way by different people.",
                },
                {
                  q: "Should I give different prompts for AI vs human assistants?",
                  a: "Slightly. AI assistants benefit from explicit formatting instructions ('Use markdown', 'Create a table'). Human VAs benefit from context about your audience and goals.",
                },
                {
                  q: "How long should a prompt be?",
                  a: "There's no ideal length. What matters is clarity. A 2-sentence prompt with perfect specificity beats a 500-word rambling one.",
                },
                {
                  q: "What's the difference between a 'system prompt' and a regular prompt?",
                  a: "A system prompt is permanent—it sets the overall 'personality' of the VA. Regular prompts are one-off requests within that persona.",
                },
                {
                  q: "How do I handle revision requests?",
                  a: "Don't just say 'make it better.' Be specific: 'The tone feels too casual. Rewrite using a professional-but-friendly voice.'",
                },
                {
                  q: "Can I reuse prompts?",
                  a: "Absolutely. Save your best prompts in a template library. Customize them for different projects to save time.",
                },
                {
                  q: "What if the VA doesn't follow my instructions?",
                  a: "First, check if the instruction was ambiguous. If not, the VA may need more examples or a simpler prompt.",
                },
                {
                  q: "How do I measure if a prompt is working?",
                  a: "Track: revision requests, time to approval, and accuracy. If revisions drop over time, your prompts are improving.",
                },
                {
                  q: "Should I give positive reinforcement in prompts?",
                  a: "Yes. 'This is important for our brand' or 'Take your time—quality matters' can improve output quality.",
                },
                {
                  q: "How often should I update my VA prompts?",
                  a: "Review quarterly. As your business evolves, your VA's instructions should too. What worked in Q1 may be outdated by Q4.",
                },
                {
                  q: "Can I use the same prompt for multiple VAs?",
                  a: "Yes, but calibrate. Some VAs may need more details, while others work better with high-level briefs. Adjust based on personality.",
                },
                {
                  q: "What's the best way to onboard a new VA with prompts?",
                  a: "Provide a 'Prompt Handbook' with 5-10 sample prompts they'll use frequently. Walk them through the R-C-I-O framework in context.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#0066cc] transition-colors text-left">
                    {faq.q}
                  </AccordionTrigger>
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm text-lg">
              The world's most comprehensive prompt engineering library. Master the machines, unleash your potential.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">AI Models</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Perplexity Prompts", href: "/perplexity-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/virtual-assistant-prompts" ? "text-[#0066cc] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Career & Writing</h4>
            <ul className="space-y-5 text-sm font-medium">
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Resources</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Free AI Prompts", href: "/free-ai-prompts" },
                { label: "Good AI Prompts", href: "/good-ai-prompts" },
                { label: "Coolest ChatGPT", href: "/coolest-chatgpt-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Advanced Tools</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Gemini AI Guide", href: "/gemini-ai-guide" },
                { label: "Janitor AI Guide", href: "/janitor-ai-guide" },
                { label: "Google AI Studio", href: "/google-ai-studio" },
                { label: "More Tools...", href: "/free-ai-prompts" },
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
