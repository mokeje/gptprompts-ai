"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Users } from "lucide-react"
import Link from "next/link"

export default function PennStateClientPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Users className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Penn State <br />
            <span className="italic opacity-90">Essays.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Master Penn State and Schreyer Honors essays. Demonstrate leadership, ethical thinking, and commitment to
            community.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-6">Penn State Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "PSU Application", num: "01" },
                  { id: "optional", label: "Optional Essay", num: "02" },
                  { id: "schreyer", label: "Schreyer Honors", num: "03" },
                  { id: "leadership", label: "Leadership Prompt", num: "04" },
                  { id: "global", label: "Global Issue", num: "05" },
                  { id: "culture", label: "We Are Culture", num: "06" },
                  { id: "faq", label: "Penn State FAQ", num: "07" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-blue-400 transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">Penn State: The Power of Community</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Penn State is built on a massive, loyal alumni network. Your essays should demonstrate that you want to
              contribute to that community, not just benefit from it. The "optional" personal statement is actually
              required if you want to be competitive.
            </p>
          </article>

          <section id="schreyer" className="space-y-12">
            <h2 className="text-3xl font-bold tracking-tight">Schreyer Honors College: The Real Challenge</h2>
            <p className="text-muted-foreground">
              The Schreyer prompts focus on three pillars: Ethics, Leadership, and Global Perspective.
            </p>
          </section>

          <section
            id="leadership"
            className="space-y-12 bg-blue-900/20 p-12 md:p-20 rounded-[3rem] border border-blue-500/20"
          >
            <h2 className="text-3xl font-bold tracking-tight">The Leadership Prompt</h2>
            <p className="text-muted-foreground">
              Schreyer doesn't want to know that you were "President of the French Club." They want a story of crisis
              management and collaborative problem-solving.
            </p>
            <div className="bg-background/80 p-8 rounded-2xl border border-blue-500/20">
              <h4 className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-xs">STAR Framework</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <strong>Situation:</strong> What was the context?
                </li>
                <li>
                  <strong>Task:</strong> What was your role?
                </li>
                <li>
                  <strong>Action:</strong> What did you do? (Emphasize collaboration)
                </li>
                <li>
                  <strong>Result:</strong> What was the outcome? (Quantify if possible)
                </li>
              </ul>
              <p className="text-sm text-blue-400 font-bold mt-6">Key Phrase: "Collaborative problem-solving"</p>
            </div>
          </section>

          <section id="global" className="space-y-12">
            <h2 className="text-3xl font-bold tracking-tight">The Global Issue Prompt</h2>
            <p className="text-muted-foreground">
              This prompt asks you to identify a problem facing the world and propose a solution.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 border-red-500/20 bg-red-900/10">
                <h4 className="font-bold text-red-500 mb-2">❌ Don't Choose</h4>
                <p className="text-xs text-muted-foreground">Climate Change, World Hunger (too broad)</p>
              </Card>
              <Card className="p-6 border-green-500/20 bg-green-900/10">
                <h4 className="font-bold text-green-500 mb-2">✓ Choose Instead</h4>
                <p className="text-xs text-muted-foreground">"Microplastics in PA waterways" (specific, local)</p>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Penn State Essay FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Is the Penn State personal statement really optional?",
                  a: "'Optional' means 'required if you want to be competitive.' Write it.",
                },
                {
                  q: "What's the difference between general PSU and Schreyer?",
                  a: "Schreyer is honors college with higher standards. More rigorous essays.",
                },
                {
                  q: "How many Schreyer essays are there?",
                  a: "Typically 2-3 supplemental essays plus the optional personal statement.",
                },
                {
                  q: "Should I mention 'Thon' or other traditions?",
                  a: "Only if genuine. Forced mentions look insincere. Instead, mention specific programs or research facilities.",
                },
                {
                  q: "What tone should I use?",
                  a: "Professional, ambitious, and community-oriented. Show leadership and ethics.",
                },
                { q: "Can I use bullet points in PSU essays?", a: "In activities section, yes. In essays, use prose." },
                {
                  q: "How do I show commitment to the PSU community?",
                  a: "Research specific clubs, labs, or initiatives. Show you've done your homework.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-blue-500/20 py-4">
                  <AccordionTrigger className="text-xl font-bold hover:text-blue-400 transition-colors text-left">
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
              We Are Penn State. Master community-focused essays.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Universities</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Penn State Essays", href: "/penn-state-essays", highlight: true },
                { label: "UChicago Essays", href: "/uchicago-essays" },
                { label: "Stanford Essays", href: "/stanford-essay-prompts" },
                { label: "UMD Essays", href: "/umd-essays" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.highlight ? "text-blue-400 font-bold" : "hover:text-primary opacity-80"}`}
                  >
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
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
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
