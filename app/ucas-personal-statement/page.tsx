"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function UCASPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-pink-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80">
            GPTPrompts.AI
          </Link>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-8">UCAS Personal Statement</h1>
          <p className="text-2xl max-w-4xl text-pretty leading-relaxed opacity-90">
            ChatGPT aids UCAS personal statement writing (4,000 characters max) by brainstorming authentic ideas,
            structuring narratives, and polishing drafts while preserving your voice for Russell Group unis.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">UCAS Essentials</h2>
          <p className="text-lg">
            Structure (80/20 academic/extracurricular): Opening hook + subject passion (15%) → Academic interest (40%) →
            Skills/experience (25%) → Extracurriculars (10%) → Close (10%)
          </p>
          <p className="text-lg font-semibold">
            AI Ethics: Brainstorm/structure only—no full drafts. Universities detect plagiarism; authenticity wins.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Brainstorming Prompts</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Experience Mining</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              My profile: [GPA/SUBJECTS/CLUBS]. UCAS course: [e.g., Computer Science]. Generate 8 story ideas: Academic
              passion (reading/projects), Skills (leadership/problem-solving), Why uni (specific programs). Rank by
              impact.
            </code>
          </Card>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Super-Curricular Ideas</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              [SUBJECT] super-curriculars: 5 books/podcasts/articles, 3 projects/experiments, MOOCs/competitions. Tie to
              course: [SPECIFIC UNI MODULE].
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Structure & Drafting</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Full Statement Framework</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              Build UCAS skeleton for [COURSE]: 47-line structure. Para 1: Hook + passion origin → Para 2-3: Academic
              depth (2 examples) → Para 4: Skills via ECs/work → Para 5: Uni fit + future.
            </code>
          </Card>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Oxbridge Variant</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              Oxbridge [COURSE] (Cambridge/Imperial): 70% academics: reading list, EPs. Specific tutors/modules.
              Admissions test prep mention.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Polish & Voice</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Authenticity Check</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              My draft [PASTE]. UCAS score: Voice student-like or AI? Content specific/authentic? Structure balanced?
              Rewrite flagged sections in Year 13 tone.
            </code>
          </Card>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Word Count Optimizer</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              Trim to 3900 chars: [PASTE]. Prioritize academics. Concise phrasing while maintaining voice.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Workflow</h2>
          <div className="space-y-3 text-lg">
            <p>• Brainstorm: 10 ideas → Top 3</p>
            <p>• Research: Uni sites/courses</p>
            <p>• Draft: Framework + stories</p>
            <p>• Polish: Voice/authenticity</p>
            <p>• Check: 70% academic, char count</p>
            <p className="font-semibold">UK Timeline: Apply by Jan 31 (Oxbridge Oct); equal consideration until June</p>
          </div>
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
