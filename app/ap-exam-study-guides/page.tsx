"use client"

import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function APExamPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-red-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80">
            GPTPrompts.AI
          </Link>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-8">AP Exam Study Guides</h1>
          <p className="text-2xl max-w-4xl text-pretty leading-relaxed opacity-90">
            ChatGPT accelerates AP exam prep across 38+ subjects with subject-specific prompts for MCQ, FRQ, and DBQ
            essays, simulating College Board rigor for college credit success.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        <aside className="lg:col-span-1 lg:sticky lg:top-12 self-start">
          <nav className="space-y-2 text-sm font-medium">
            <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-6">Subjects</div>
            {[
              "US History",
              "Biology",
              "Chemistry",
              "Literature",
              "Calculus",
              "Physics",
              "Psychology",
              "Computer Science",
              "FAQ",
            ].map((item, i) => (
              <a key={item} href={`#subject-${i}`} className="block hover:text-red-600 transition-colors py-2">
                {item}
              </a>
            ))}
          </nav>
        </aside>

        <div className="lg:col-span-3 space-y-16">
          <section id="subject-0" className="space-y-6">
            <h2 className="text-4xl font-bold">Universal AP Prep Prompts</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Diagnostic Quiz Generator</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                Create 15-question AP [SUBJECT] diagnostic (10 MCQ, 5 FRQ-style): Official style/timing, medium
                difficulty, cover units 1-4. Score my answers, identify weak areas, create 4-week study plan.
              </code>
            </Card>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Concept Mastery Drill</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                Explain AP [SUBJECT] [UNIT] like teaching honors class: Core concepts (3 bullets) → Common
                misconceptions → 5 practice MCQs + FRQ → Study tips/mnemonics.
              </code>
            </Card>
          </section>

          <section id="subject-1" className="space-y-6">
            <h2 className="text-4xl font-bold">AP US History</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">DBQ Essay Coach</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                APUSH DBQ: "1865-1900 industrialization." Structure essay (7 points): Thesis → Context → Evidence x4 →
                Analysis x2 → Complexity. Score my draft per rubric. Provide model 7/7 example.
              </code>
            </Card>
          </section>

          <section id="subject-2" className="space-y-6">
            <h2 className="text-4xl font-bold">AP Biology</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">FRQ Lab Design</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                AP Bio FRQ: Design experiment testing [HYPOTHESIS: enzyme activity]. Include
                IV/DV/controls/graph/prediction/stats. Score my response per rubric.
              </code>
            </Card>
          </section>

          <section id="subject-3" className="space-y-6">
            <h2 className="text-4xl font-bold">AP Chemistry</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Calculations Drill</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                AP Chem stoichiometry: 8 problems escalating difficulty. Show ICE tables, significant figures. Timed: 20
                minutes. Provide step-by-step solutions.
              </code>
            </Card>
          </section>

          <section id="subject-4" className="space-y-6">
            <h2 className="text-4xl font-bold">AP Literature</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Poetry & Prose Analysis</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                AP Lit poem [PASTE]: TPCASTT breakdown → Thesis for prose prompt → Sample essay scoring 6/6. Analyze
                passage: Speaker attitude, syntax, theme → Model response.
              </code>
            </Card>
          </section>

          <section id="subject-5" className="space-y-6">
            <h2 className="text-4xl font-bold">AP Calculus</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Free Response Marathon</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                AP Calc AB FRQ set: Calculus concepts, applications. Step-by-step solutions. Score my work [PASTE].
                Graph analysis: Sketch f(x) with f'(x)=[EQ], f'' signs.
              </code>
            </Card>
          </section>

          <section id="subject-6" className="space-y-6">
            <h2 className="text-4xl font-bold">AP Physics</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">Concept Application</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                AP Physics 1: Projectile motion problem set (5). Vectors/forces/energy. Units/significant figures.
                Provide full workings.
              </code>
            </Card>
          </section>

          <section id="subject-7" className="space-y-6">
            <h2 className="text-4xl font-bold">Cross-Subject Strategies</h2>
            <Card className="p-8 bg-muted">
              <h3 className="font-bold mb-4">FRQ Rubric Practice</h3>
              <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
                Score my AP [SUBJECT] FRQ per official rubric: Point-by-point breakdown. Model 6/6 vs yours. Identify
                missing points.
              </code>
            </Card>
          </section>

          <section id="subject-8" className="space-y-6">
            <h2 className="text-4xl font-bold">FAQ</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                {
                  q: "How much should I study for AP exams?",
                  a: "Plan 4-5 weeks intensive prep. Use ChatGPT daily for targeted drills. Full practice tests weekly. Track scores for consistency.",
                },
                {
                  q: "Should I take multiple APs?",
                  a: "Yes, if you can manage the workload. 2-3 APs is common. Prioritize based on course strength and college requirements.",
                },
                {
                  q: "What's the best way to study FRQs?",
                  a: "Drill under timed conditions. Score against official rubrics. Identify patterns in how you lose points. Practice writing quickly.",
                },
                {
                  q: "How do I improve my multiple-choice accuracy?",
                  a: "Track error patterns: careless mistakes, concept gaps, or misreading? Use ChatGPT to create targeted drills for weak areas.",
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
