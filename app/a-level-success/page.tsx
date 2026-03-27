"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function ALevelPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-cyan-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80">
            GPTPrompts.AI
          </Link>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-8">A-Level Success</h1>
          <p className="text-2xl max-w-4xl text-pretty leading-relaxed opacity-90">
            ChatGPT transforms A-Level revision for UK sixth formers with exam board-specific prompts targeting A*/A
            grades across Maths, sciences, humanities, and languages for UCAS tariff success.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">A-Level Universal Prep</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Specification Mastery</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              AQA A-Level [SUBJECT] spec breakdown: Units 1-12 key content → 5 exam Qs/unit. High-mark FRQs x3. Past
              paper trends 2018-25. Predicted 2026 focus.
            </code>
          </Card>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Timed Paper Simulator</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              Full AQA [SUBJECT] Paper 1 (2hr): 80 marks. Section A MCQ, B essays. I answer [PASTE] → AQA mark scheme
              score + feedback.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Subject-Specific Prompts</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Sciences</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              AQA Maths: Pure Maths P1 (Differentiation/integration 10 Qs). OCR Biology: Paper 2 gene expression essay
              (25m). Edexcel Chemistry: Organic synthesis mechanisms.
            </code>
          </Card>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Humanities</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              AQA History: Tudor England DBQ (source analysis 30m). Edexcel English Lit: Unseen poetry TPCASTT
              breakdown. OCR Religious Studies: Philosophy 40-mark essays.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Critical Thinking & Exam Technique</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">A* Essay Framework</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              A-Level [SUBJECT] 25-mark essay: "[QUESTION]". Structure: Intro/debate (4m) → Arg1/evidence (8m) →
              Arg2/counter (8m) → Synth/conclusion (5m). Score per AO marks.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Revision Mastery</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Active Recall Generator</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              AQA A-Level [TOPIC] 50 flashcards: Q → A (precise spec). Essay plans x5 (A*). Past paper Qs 2015-25.
            </code>
          </Card>
        </section>
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
