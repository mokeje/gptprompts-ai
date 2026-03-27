"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function GPAOptimizationPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-green-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80">
            GPTPrompts.AI
          </Link>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-8">GPA Optimization</h1>
          <p className="text-2xl max-w-4xl text-pretty leading-relaxed opacity-90">
            Strategic prompting helps college students maintain 3.5+ GPAs through course selection, study planning, and
            performance tracking for grad school success.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Diagnostic & Planning</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">GPA Audit</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              My transcript: [COURSES/GRADES]. Current: X.XX. Goal: 3.7+ next semester. Analyze: Easy professors?
              Pitfalls? Credit optimization? Drop/add recommendations? 4-year audit.
            </code>
          </Card>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Master Study Plan</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              Courses: [LIST]. Weekly hours: 25. Exams: [LIST]. 4-phase plan: Foundations (W1-4) → Practice (W5-8) →
              Review (W9-12) → Finals sprint (W13). Daily template + spaced repetition.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Study Systems</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Daily Study Optimizer</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              Today courses: [PRIORITIES]. Energy: High morning/low afternoon. Deadlines: [LIST]. Optimal 4-hour block:
              Deep work (2hr) → Active recall (1hr) → Review (1hr). Pomodoro schedule.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Time Management</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Weekly Block Schedule</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              Fixed: Classes [TIMES], job 10-15hr, sleep 11pm-7am. Study goal: 25hr/week. Calendar: Mon-Sun blocks
              color-coded. Buffer time for overflow.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Performance Tracking</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Weekly GPA Forecast</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              Week 5 grades so far: [LIST]. Remaining: [EXAMS]. Historical performance: [SIMILAR]. Projected semester
              GPA + adjustments needed.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Long-Term Strategy</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">4-Year GPA Roadmap</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              Current: Sophomore, 3.4 cum GPA. Grad goals: [MED SCHOOL/IBANKING]. Majors/minors: [LIST]. Course path:
              GPA-maximizing sequence. Summer options. Study abroad fit.
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
