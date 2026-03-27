"use client"

import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function SATACTClientPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-blue-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-8">SAT & ACT Prep</h1>
          <p className="text-2xl max-w-4xl text-pretty leading-relaxed opacity-90">
            ChatGPT streamlines SAT and ACT prep with targeted prompts for practice questions, explanations, strategies,
            and time management, helping students boost scores through personalized drills.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        <aside className="lg:col-span-1 lg:sticky lg:top-12 self-start">
          <nav className="space-y-2 text-sm font-medium">
            <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">Sections</div>
            {[
              "Diagnostic & Planning",
              "SAT Reading",
              "SAT Math",
              "SAT Writing",
              "ACT English",
              "ACT Math",
              "ACT Science",
              "Time Management",
              "FAQ",
            ].map((item, i) => (
              <a key={item} href={`#section-${i}`} className="block hover:text-blue-600 transition-colors py-2">
                {item}
              </a>
            ))}
          </nav>
        </aside>

        <div className="lg:col-span-3 space-y-16">
          <section id="section-0" className="space-y-6">
            <h2 className="text-4xl font-bold">Diagnostic Assessment & Study Planning</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Initial Assessment Prompt</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                Act as SAT/ACT diagnostic tutor. Create 10-question mixed quiz (5 SAT, 5 ACT style): Reading (2
                passages), Math (4 problems), Writing/English (4 grammar). Score my answers [PASTE], identify
                weaknesses, suggest 4-week plan.
              </code>
            </Card>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Personalized Study Plan</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                My diagnostic: SAT Math 580, Reading 620, Writing 590. Goal: SAT 1400/ACT 32 in 8 weeks. Time: 1hr/day
                weekdays, 3hr weekends. Create week-by-week plan with daily practice + weak area drills + full sections
                weekly.
              </code>
            </Card>
          </section>

          <section id="section-1" className="space-y-6">
            <h2 className="text-4xl font-bold">SAT Reading Comprehension</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Reading Practice Generator</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                SAT Reading: Generate passage (400 words, academic fiction/nonfiction) + 5 questions: Main idea,
                Evidence, Vocab-in-context, Inference, Data interpretation. Difficulty: Medium. Provide answers +
                explanations.
              </code>
            </Card>
          </section>

          <section id="section-2" className="space-y-6">
            <h2 className="text-4xl font-bold">SAT Math Problem-Solving</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Math No-Calculator Drills</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                SAT Math no-calc: 8 problems (heart of algebra/problem-solving/data). Mix algebra, quadratics, geometry.
                Medium-hard. Step-by-step solutions. Create word problems for Rate/time/distance concepts.
              </code>
            </Card>
          </section>

          <section id="section-3" className="space-y-6">
            <h2 className="text-4xl font-bold">SAT Writing & Language</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Grammar & Expression</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                SAT Writing: 10 grammar questions from passage (450 words). Punctuation, syntax, usage, expression.
                Multiple choice. Provide explanations referencing grammar rules.
              </code>
            </Card>
          </section>

          <section id="section-4" className="space-y-6">
            <h2 className="text-4xl font-bold">ACT English Section</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">English Mastery Drills</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                ACT English: 400-word passage + 12 questions. Conciseness, transitions, modifiers, idioms. Timed style.
                Answers + rule breakdowns.
              </code>
            </Card>
          </section>

          <section id="section-5" className="space-y-6">
            <h2 className="text-4xl font-bold">ACT Math & Science</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Math & Science Practice</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                ACT Math: 10 problems (pre-alg/alg/trig/coord geo). Medium difficulty. Full workings shown. ACT Science:
                Data representation + 6 questions analyzing trends.
              </code>
            </Card>
          </section>

          <section id="section-6" className="space-y-6">
            <h2 className="text-4xl font-bold">ACT Reading & Science</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Prose Fiction & Data Analysis</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                ACT Reading: Prose fiction passage (800 words) + 10 questions. ACT Science: Graph + table +
                interpretation questions analyzing experimental data.
              </code>
            </Card>
          </section>

          <section id="section-7" className="space-y-6">
            <h2 className="text-4xl font-bold">Time Management & Strategy</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Pacing Strategies</h3>
              <p className="mb-4">
                Timed drills, error pattern analysis, full section simulations, and test day anxiety management.
              </p>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                Timed SAT Math section: 8 medium problems, 20 minutes. Score + pacing analysis. Identify if you're too
                slow on geometry or making careless errors.
              </code>
            </Card>
          </section>

          <section id="section-8" className="space-y-6">
            <h2 className="text-4xl font-bold">FAQ</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                {
                  q: "How long should I study for SAT/ACT?",
                  a: "Most students benefit from 3-6 months of consistent study, 30 minutes to 1 hour daily. Use ChatGPT prompts daily for targeted practice.",
                },
                {
                  q: "Should I focus on SAT or ACT?",
                  a: "Take diagnostic tests for both. Choose the one that plays to your strengths - SAT emphasizes reading speed, ACT emphasizes science reasoning.",
                },
                {
                  q: "How do I identify my weaknesses?",
                  a: "Use the diagnostic assessment prompt to identify patterns. ChatGPT can analyze your errors and create targeted practice sets for weak areas.",
                },
                {
                  q: "What's the best error analysis strategy?",
                  a: "Review every wrong answer. ChatGPT can show you why alternatives are wrong and concept gaps behind mistakes.",
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
