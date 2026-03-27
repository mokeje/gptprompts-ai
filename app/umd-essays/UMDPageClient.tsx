"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Target } from "lucide-react"
import Link from "next/link"

export default function UMDPageClient() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* <CHANGE> Hero with UMD red theme */}
      <header className="bg-gradient-to-br from-red-700 to-red-900 text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Target className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            UMD Essays <br />
            <span className="italic opacity-90">Fearless Ideas.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Master University of Maryland's short-answer essays. Learn to write bold, specific, and concise responses
            that stand out in 650 characters.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-red-700 mb-6">UMD Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "UMD Application", num: "01" },
                  { id: "prompt1", label: "Travel Prompt", num: "02" },
                  { id: "prompt2", label: "Multidisciplinary", num: "03" },
                  { id: "prompt3", label: "Hidden Talent", num: "04" },
                  { id: "strategy", label: "Writing Strategy", num: "05" },
                  { id: "ai-tips", label: "AI as Editor", num: "06" },
                  { id: "examples", label: "Real Examples", num: "07" },
                  { id: "faq", label: "UMD FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-red-700 transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">The Challenge of UMD Short Answers</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              University of Maryland is famous for its brevity. Unlike the Common App personal statement, these prompts
              are "short-takes." You have roughly 160 words (650 characters) to make an impression. This constraint
              forces you to be specific, strategic, and memorable.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              UMD values "Fearless Ideas"—bold thinking, intellectual curiosity, and well-rounded humanity. Your essays
              should demonstrate that you're not just academically strong, but intellectually diverse and willing to
              take risks.
            </p>
          </article>

          <section
            id="prompt1"
            className="space-y-12 bg-red-900/20 p-12 md:p-20 rounded-[3rem] border border-red-500/20"
          >
            <h2 className="text-3xl font-bold tracking-tight">
              Prompt 1: "If I could travel anywhere, I would go to..."
            </h2>
            <p className="text-muted-foreground">
              Most students choose Japan, Iceland, or Paris. To stand out, your destination must be a metaphor for your
              curiosity.
            </p>
            <div className="bg-background/80 p-8 rounded-2xl border border-red-500/20">
              <h4 className="text-red-700 font-bold mb-4 uppercase tracking-widest text-xs">Pro AI Approach</h4>
              <p className="font-mono text-sm mb-4 bg-black/20 p-4 rounded">
                "Give me 5 unique travel destinations for a student interested in Marine Biology that aren't typical
                tourist traps."
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>The Goal:</strong> Show, don't tell. If you choose the Galápagos Islands, mention specific
                evolutionary traits you want to observe.
              </p>
            </div>
          </section>

          <section id="prompt2" className="space-y-12">
            <h2 className="text-3xl font-bold tracking-tight">Prompt 2: "In addition to my major..."</h2>
            <p className="text-muted-foreground">
              UMD loves "multidisciplinary" students. If you're applying for Computer Science, talk about your love for
              19th-century poetry. This proves you're a well-rounded human, not a robot.
            </p>
            <Card className="p-8 border-2 border-red-500/30">
              <p className="font-bold text-red-700 mb-3">The Multidisciplinary Edge</p>
              <p className="text-sm text-muted-foreground mb-4">
                Most applicants list tangential interests. Instead, find a genuine intersection. Example: "My Computer
                Science background informs my study of narrative structures in gaming—I'm interested in how AI can craft
                emotionally compelling stories."
              </p>
            </Card>
          </section>

          <section id="strategy" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Writing for the "Terps" Brand</h2>
            <p className="text-muted-foreground">Maryland looks for "Fearless Ideas." Your tone should be:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Bold", desc: "Don't play it safe. Avoid generic statements like 'help the world.'" },
                { title: "Specific", desc: "Use names, dates, and technical terms. Be precise." },
                { title: "Concise", desc: "650 characters means no 'very,' 'really,' or filler words." },
              ].map((item, i) => (
                <Card key={i} className="p-6 border-red-500/20">
                  <h4 className="font-bold text-red-700 mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">UMD Essay FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How many essays does UMD require?",
                  a: "Three short-answer prompts of ~650 characters each. They're supplemental, not replacements for the Common App essay.",
                },
                {
                  q: "Do I need to tailor my essays for specific majors?",
                  a: "Not required, but recommended. Show knowledge of UMD programs specific to your major.",
                },
                {
                  q: "Can I use AI to write my UMD essays?",
                  a: "Use AI as an editor, not a writer. Ask it to tighten prose, not generate ideas. Academic integrity matters.",
                },
                {
                  q: "What tone should I use?",
                  a: "Conversational but intellectual. Show personality while maintaining academic credibility.",
                },
                {
                  q: "How do I stand out with short-answer essays?",
                  a: "Specificity. Names, numbers, and concrete details. Avoid vague statements.",
                },
                {
                  q: "Should I mention Maryland traditions?",
                  a: "If relevant. Knowing about Thon or specific research facilities shows genuine interest.",
                },
                {
                  q: "What's the character limit exactly?",
                  a: "Approximately 650 characters. Don't exceed by more than 10-15 characters.",
                },
                { q: "Can I be funny in UMD essays?", a: "Yes, if it's genuine and relevant. Don't force humor." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-red-500/20 py-4">
                  <AccordionTrigger className="text-xl font-bold hover:text-red-700 transition-colors text-left">
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
              Master university essays and AI prompts with expert guidance.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">University Essays</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Common App Essays", href: "/common-app-essays" },
                { label: "NYU Essays", href: "/nyu-essay-prompts" },
                { label: "Stanford Essays", href: "/stanford-essay-prompts" },
                { label: "Princeton Essays", href: "/princeton-essays" },
                { label: "UMD Essays", href: "/umd-essays", highlight: true },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.highlight ? "text-red-400 font-bold" : "hover:text-primary opacity-80"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">More Universities</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "UChicago Essays", href: "/uchicago-essays" },
                { label: "Penn State Essays", href: "/penn-state-essays" },
                { label: "UGA Essays", href: "/uga-essays" },
                { label: "Wisconsin Essays", href: "/wisconsin-essays" },
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
