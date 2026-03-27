import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { BookOpen, Sparkles, Feather } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Creative Writing Prompts for Beginners | GPTPrompts.AI",
  description:
    "Overcome writer's block with beginner-friendly creative writing prompts. Learn character development, world-building, and storytelling techniques from expert guidance.",
}

export default function CreativeWritingPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#8b4513] text-[#faf8f3] py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <BookOpen className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Creative Writing <br />
            <span className="italic opacity-90">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Conquer the blank page. Unlock your flow state with character-driven, world-building, and dialogue prompts
            designed to launch your literary journey.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#8b4513] mb-6">Writing Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "why", label: "Why Use Writing Prompts", num: "00" },
                  { id: "character", label: "Character-Driven Prompts", num: "01" },
                  { id: "worldbuilding", label: "World-Building Prompts", num: "02" },
                  { id: "dialogue", label: "Dialogue & Voice", num: "03" },
                  { id: "sensory", label: "Sensory Writing", num: "04" },
                  { id: "genre", label: "Genre-Specific Prompts", num: "05" },
                  { id: "revision", label: "Revision Prompts", num: "06" },
                  { id: "flow", label: "Achieving Flow State", num: "07" },
                  { id: "faq", label: "Writing FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#8b4513] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">Why Use Creative Writing Prompts?</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Creative writing prompts serve as a scaffold for the imagination. Much like an athlete uses resistance
              bands to build muscle, a writer uses prompts to overcome perfectionism, build consistency, and explore new
              genres. For many aspiring authors, the hardest part isn't the middle or the end—it's the blank page.
              Writer's block is often just a lack of direction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <Card className="p-6 border-[#8b4513]/20">
                <Sparkles className="w-8 h-8 text-[#8b4513] mb-4" />
                <h3 className="font-bold mb-2">Overcome Perfectionism</h3>
                <p className="text-sm text-muted-foreground">
                  Prompts shift focus from "masterpiece" to "completing an exercise"
                </p>
              </Card>
              <Card className="p-6 border-[#8b4513]/20">
                <Feather className="w-8 h-8 text-[#8b4513] mb-4" />
                <h3 className="font-bold mb-2">Build Consistency</h3>
                <p className="text-sm text-muted-foreground">Daily hooks make it easier to establish a writing habit</p>
              </Card>
              <Card className="p-6 border-[#8b4513]/20">
                <BookOpen className="w-8 h-8 text-[#8b4513] mb-4" />
                <h3 className="font-bold mb-2">Explore Genres</h3>
                <p className="text-sm text-muted-foreground">Move from non-fiction to sci-fi, poetry, or fantasy</p>
              </Card>
            </div>
          </article>

          <section id="character" className="space-y-12 bg-[#8b4513] text-[#faf8f3] p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Character-Driven Prompts</h2>
              <p className="text-xl opacity-90 mb-8">
                A great story is simply a person with a problem. Use these prompts to build complex characters.
              </p>
              <div className="space-y-6">
                <Card className="p-6 bg-[#6d3410] border-none">
                  <h4 className="text-[#ffd999] font-bold mb-3">The Secretive Stranger</h4>
                  <p className="opacity-90 mb-3">
                    Write a scene where a character is trying to get through airport security with a suitcase full of
                    something that isn't illegal, but is incredibly difficult to explain.
                  </p>
                  <p className="text-sm opacity-75">
                    <strong>Goal:</strong> Focus on dialogue and body language to convey nervousness.
                  </p>
                </Card>
                <Card className="p-6 bg-[#6d3410] border-none">
                  <h4 className="text-[#ffd999] font-bold mb-3">The Misplaced Expert</h4>
                  <p className="opacity-90 mb-3">
                    An expert in 18th-century French poetry is suddenly forced to lead a survivalist hiking group
                    through the Alaskan wilderness.
                  </p>
                  <p className="text-sm opacity-75">
                    <strong>Goal:</strong> Contrast the character's internal knowledge with their external environment.
                  </p>
                </Card>
                <Card className="p-6 bg-[#6d3410] border-none">
                  <h4 className="text-[#ffd999] font-bold mb-3">The Internal Dialogue</h4>
                  <p className="opacity-90 mb-3">
                    Two characters are on a first date. Write the scene where their spoken dialogue is polite, but their
                    internal thoughts (in italics) are brutally honest.
                  </p>
                  <p className="text-sm opacity-75">
                    <strong>Goal:</strong> Reveal character depth through contrast.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          <section id="dialogue" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Dialogue & Voice</h2>
            <Card className="p-8 border-none shadow-xl bg-secondary/30">
              <h3 className="text-2xl font-bold mb-4">The Key to Authentic Dialogue</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Dialogue should feel natural but be intentional. Avoid info-dumping and let characters reveal
                information through conflict and emotion.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-[#8b4513]/20 font-mono text-sm text-slate-700">
                  <p className="mb-2">❌ Weak: "I can't believe you stole my inheritance and ran off to Tahiti!"</p>
                  <p>✓ Strong: "You took the money. Didn't even leave a note." [Long pause] "Why?"</p>
                </div>
              </div>
            </Card>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Creative Writing FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How long should each writing session be?",
                  a: "Start with 20-30 minutes. Consistency beats duration. A daily 20-minute session is more valuable than a weekly 3-hour marathon.",
                },
                {
                  q: "Should I edit while writing?",
                  a: "No. Get the words on the page first. Edit in a separate pass. Editing while writing kills momentum and flow state.",
                },
                {
                  q: "What if a prompt doesn't resonate?",
                  a: "Skip it. The best prompt is the one that excites you. Your enthusiasm translates to better writing.",
                },
                {
                  q: "How do I avoid clichés in my writing?",
                  a: "Ask 'What's the subtext?' Instead of a grizzled detective, what if he's terrified? Complexity kills clichés.",
                },
                {
                  q: "Is it okay to write 'bad' drafts?",
                  a: "Absolutely. Every published author writes terrible first drafts. That's the point of drafting.",
                },
                {
                  q: "How do I know if my dialogue is good?",
                  a: "Read it aloud. If it feels clunky or unnatural, your reader will feel it too. Dialogue should be rhythmic.",
                },
                {
                  q: "Should I write in first person or third person?",
                  a: "Choose based on intimacy. First person feels immediate; third person feels observational. Both work—pick what serves your story.",
                },
                {
                  q: "How do I develop a consistent writing voice?",
                  a: "Write regularly. Read in your genre. Notice patterns in authors you admire. Your voice emerges through repetition.",
                },
                {
                  q: "What's the difference between plot and story?",
                  a: "Plot is what happens. Story is how it means something. A good story makes readers feel. Prioritize emotion.",
                },
                {
                  q: "How do I overcome perfectionism?",
                  a: "Remember: your first draft's only job is to exist. Perfection comes in revision. Give yourself permission to write badly.",
                },
                {
                  q: "Should I outline or pants my story?",
                  a: "Both work. Outliners feel secure; pantsers feel free. Try both and see which energizes you.",
                },
                {
                  q: "How many words should a short story be?",
                  a: "There's no magic number, but 1,500-5,000 words is a common range. Flash fiction is under 1,000. Let the story breathe.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#8b4513] transition-colors text-left">
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
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
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
