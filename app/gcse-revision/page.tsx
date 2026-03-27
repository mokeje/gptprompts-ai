"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function GCSERevisionPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-indigo-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80">
            GPTPrompts.AI
          </Link>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-8">GCSE Revision</h1>
          <p className="text-2xl max-w-4xl text-pretty leading-relaxed opacity-90">
            ChatGPT revolutionizes GCSE revision for UK Year 11 students with exam board-specific prompts generating
            past papers, summaries, flashcards, and mark scheme practice for 9-1 grading.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Universal GCSE Revision</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Diagnostic Assessment</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              GCSE [BOARD: AQA] [SUBJECT] diagnostic: 20 questions (15 MCQ/5 short answer). Grade 7-9 level. Score my
              answers → Weak topics → 6-week plan.
            </code>
          </Card>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Revision Timetable Generator</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              GCSEs: [SUBJECTS/BOARDS]. Mock scores: [LIST]. Time: School 9-3:30, homework 2hr/night, weekends 4hr.
              Daily timetable: Active recall priority, Past paper Fridays, Predicted grades trajectory.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Core Subjects</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">GCSE Maths Topic Mastery</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              AQA GCSE Maths Higher: [TOPIC: quadratics]. Key formulae/methods → 10 exam questions (5 grade 7, 5 grade
              9) → Mark scheme/model answers → Common errors.
            </code>
          </Card>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">GCSE English Language</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              AQA English Paper 1: Fiction extract [GENERATE 500w] + Q1-4 (20 marks). Q1: List (4m), Q2: Language (8m),
              Q3: Structure (8m). Model responses provided.
            </code>
          </Card>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">GCSE Science</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              GCSE Biology Paper 1: Cell biology quiz (20 MCQ/FR). Chemistry: Moles/stoichiometry 10 problems. Physics:
              Projectile motion 8 questions.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Exam Technique</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Mark Scheme Mastery</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              Score my GCSE [SUBJECT] answer per official mark scheme: Level 1-4 breakdown. Model grade 9 vs yours. 2
              specific improvements.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Active Recall & Spaced Repetition</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Flashcard Generator</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              Create Anki flashcards for AQA GCSE [TOPIC]. Front: Question/clue. Back: Answer + explanation. 20 cards.
              Daily quiz with streak tracker.
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
