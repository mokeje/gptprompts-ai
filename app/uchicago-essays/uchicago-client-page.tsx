"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Brain } from "lucide-react"
import Link from "next/link"

export default function UChicagoClientPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-br from-slate-800 to-slate-950 text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Brain className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            UChicago <br />
            <span className="italic opacity-90">Essays.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Master UChicago's philosophically challenging essays. Learn to tackle "Where is Waldo, really?" with logic,
            wit, and intellectual rigor.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">UChicago Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "Philosophy of UChicago", num: "01" },
                  { id: "extended", label: "Extended Essay", num: "02" },
                  { id: "why", label: "Why UChicago", num: "03" },
                  { id: "structure", label: "Essay Structure", num: "04" },
                  { id: "ai-role", label: "AI's Role", num: "05" },
                  { id: "examples", label: "Real Prompts", num: "06" },
                  { id: "faq", label: "UChicago FAQ", num: "07" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-slate-300 transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">The Philosophy of UChicago Admissions</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              UChicago is the "Where Fun Goes to Die" school—but in a way they are proud of. They want the
              intellectuals, the philosophers, and the weirdos. Their supplemental prompts reflect this commitment to
              intellectual rigor and unconventional thinking.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              UChicago essays are intentionally impossible to answer with a standard five-paragraph essay. They're
              designed to reveal how you think, not what you know.
            </p>
          </article>

          <section
            id="extended"
            className="space-y-12 bg-slate-900/20 p-12 md:p-20 rounded-[3rem] border border-slate-500/20"
          >
            <h2 className="text-3xl font-bold tracking-tight">The Extended Essay: Your Intellectual Playground</h2>
            <p className="text-muted-foreground">
              Each year, UChicago releases a list of prompts suggested by current students. Example: "Where is Waldo,
              really?"
            </p>
            <div className="bg-background/80 p-8 rounded-2xl border border-slate-500/20">
              <h4 className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-xs">Strategic Approach</h4>
              <p className="text-sm text-muted-foreground mb-4">
                This isn't a question about a book; it's a question about sociology, surveillance, or the human
                condition. Pick a lens and defend it rigorously.
              </p>
              <p className="font-mono text-sm mb-4 bg-black/20 p-4 rounded">
                Lens 1: Quantum Physics (Waldo exists everywhere until observed) Lens 2: Art History (Waldo as
                commentary on spectacle) Lens 3: Capitalism (Waldo as commodified attention)
              </p>
            </div>
          </section>

          <section id="structure" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Structure of a Winning UChicago Response</h2>
            <div className="space-y-6">
              {[
                { section: "The Hook", desc: "Start in the middle of a thought. Don't explain from the beginning." },
                {
                  section: "The Logic",
                  desc: "Show the 'math' of your thinking. If making a weird claim, back it with rigor.",
                },
                {
                  section: "The Conclusion",
                  desc: "Don't wrap it up with a bow. Leave the reader with a new question.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-6 border-slate-500/20">
                  <h4 className="font-bold text-slate-300 mb-2">{item.section}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">UChicago Essay FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Are UChicago essay prompts released in advance?",
                  a: "Yes, UChicago publishes a list of possible prompts. You typically choose one or write your own question.",
                },
                {
                  q: "How many essays does UChicago require?",
                  a: "One extended essay (650-1000 words) plus a short 'Why UChicago?' (250-500 words).",
                },
                {
                  q: "Can I be weird in UChicago essays?",
                  a: "Yes! That's the point. UChicago rewards unconventional thinking and intellectual risk-taking.",
                },
                {
                  q: "Should I mention the Core Curriculum?",
                  a: "Only if you have specific context. Avoid generic statements about the Core.",
                },
                {
                  q: "How can AI help with UChicago essays?",
                  a: "Use AI to stress-test your logic: 'What are counter-arguments to my claim? How can I strengthen my reasoning?'",
                },
                {
                  q: "What tone should I use?",
                  a: "Intellectual but accessible. Show your thinking process, not just conclusions.",
                },
                {
                  q: "Can I choose an unusual prompt?",
                  a: "Absolutely. UChicago allows you to write your own question. This can differentiate you.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-slate-500/20 py-4">
                  <AccordionTrigger className="text-xl font-bold hover:text-slate-300 transition-colors text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg leading-relaxed pt-6">
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm text-lg">
              Master the world's toughest essay prompts.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Universities</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "UChicago Essays", href: "/uchicago-essays", highlight: true },
                { label: "Stanford Essays", href: "/stanford-essay-prompts" },
                { label: "Princeton Essays", href: "/princeton-essays" },
                { label: "Penn State Essays", href: "/penn-state-essays" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.highlight ? "text-slate-300 font-bold" : "hover:text-primary opacity-80"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">More Resources</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Free AI Prompts", href: "/free-ai-prompts" },
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-8 mt-8 border-t border-background/10">
                <p className="text-[10px] opacity-30 uppercase tracking-widest">© 2026 GPTPrompts.AI</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}
