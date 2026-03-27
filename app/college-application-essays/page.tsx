"use client"

import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function CollegeEssaysPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-purple-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80">
            GPTPrompts.AI
          </Link>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-8">College Application Essays</h1>
          <p className="text-2xl max-w-4xl text-pretty leading-relaxed opacity-90">
            AI-powered writing prompts help brainstorm authentic ideas, structure compelling narratives, and polish
            drafts while preserving your voice for the 2025-26 college cycle.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        <aside className="lg:col-span-1 lg:sticky lg:top-12 self-start">
          <nav className="space-y-2 text-sm font-medium">
            <div className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-6">Sections</div>
            {["Brainstorming", "Structure", "Authenticity", "Common App", "Supplements", "Polish", "FAQ"].map(
              (item, i) => (
                <a key={item} href={`#section-${i}`} className="block hover:text-purple-600 transition-colors py-2">
                  {item}
                </a>
              ),
            )}
          </nav>
        </aside>

        <div className="lg:col-span-3 space-y-16">
          <section id="section-0" className="space-y-6">
            <h2 className="text-4xl font-bold">Essay Brainstorming</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Prompt Selection Helper</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                Review my experiences [volunteer trip, competition, challenge]. Match to best Common App prompt.
                Suggest: story angle, "show" moments with sensory details, growth arc thesis, why this prompt fits your
                voice.
              </code>
            </Card>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Story Memory Mining</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                My vague idea: [summer job]. Generate 5 specific "show don't tell" scenes with sensory details,
                dialogue, internal conflict. Highlight theme connection for each.
              </code>
            </Card>
          </section>

          <section id="section-1" className="space-y-6">
            <h2 className="text-4xl font-bold">Essay Structure & Development</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Narrative Arc Builder</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                Structure 650-word essay: Hook (100w) → Turn: Conflict/pivot (200w) → Insight: What learned (200w) →
                Mirror: How changed (150w). Fill with my 3 key moments. Example: Failed competition → Team blame →
                Leadership through vulnerability.
              </code>
            </Card>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Intellectual Curiosity Essay</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                Prompt 6 essay for [passion topic]: Discovery moment → Rabbit holes pursued (3 specific) →
                Mentors/resources found → How it shapes worldview → Future connection to college fit.
              </code>
            </Card>
          </section>

          <section id="section-2" className="space-y-6">
            <h2 className="text-4xl font-bold">Voice & Authenticity</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Authenticity Check</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                My draft [PASTE]. Score: Voice 1-10? Content specificity/authenticity? Structure balance? Rewrite
                flagged sections. Provide 3 cliché flags. Identify "AI voice" tells.
              </code>
            </Card>
          </section>

          <section id="section-3" className="space-y-6">
            <h2 className="text-4xl font-bold">Common App Essays</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Supplement Strategy</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                Why [College]? Interests: [3 passions]. Profile: [GPA/SAT]. Research: [known facts]. Essay (250w): Hook
                → Specific resources → Contribution → Fit.
              </code>
            </Card>
          </section>

          <section id="section-4" className="space-y-6">
            <h2 className="text-4xl font-bold">Polish & Revision</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Essay Doctor</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                Improve essay [PASTE]: Structure? Pacing? Voice authentic? Impact? Memorable hook/ending? Specific edits
                (track changes). Score: 1-10 admissions potential.
              </code>
            </Card>
          </section>

          <section id="section-5" className="space-y-6">
            <h2 className="text-4xl font-bold">Admissions Reader Simulation</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Expert Feedback</h3>
              <p className="mb-4">
                As admissions officer (read 5000 essays): Rate your essay. Hook grabs in 30s? Voice distinct/memorable?
                Fit clear? Overall: Top 10%? Red flags?
              </p>
            </Card>
          </section>

          <section id="section-6" className="space-y-6">
            <h2 className="text-4xl font-bold">FAQ</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                {
                  q: "How do I choose between Common App prompts?",
                  a: "Use brainstorming prompts to map experiences to each prompt. Pick the one with strongest specific story and growth arc.",
                },
                {
                  q: "Should I use AI to write my essay?",
                  a: "No. Use AI for brainstorming, structure, and editing only. Admissions readers detect AI voice. Your authentic voice is your strength.",
                },
                {
                  q: "How specific should my examples be?",
                  a: "Very specific. Names, dates, dialogue, sensory details. Avoid summaries. Show your story rather than tell it.",
                },
                {
                  q: "What's the ideal essay length?",
                  a: "Common App: 650 words max. Supplements vary by school. Follow prompts exactly. More isn't better—clarity and authenticity are.",
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16 px-6 md:px-12 mt-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="/" className="text-xl font-bold hover:opacity-80">
            GPTPrompts.AI
          </Link>
          <nav className="flex gap-8 text-sm">
            <Link href="/website-links" className="hover:opacity-60">
              View All Pages
            </Link>
            <Link href="/" className="hover:opacity-60">
              Home
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  )
}
