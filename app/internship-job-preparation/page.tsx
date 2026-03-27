"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function InternshipJobPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-orange-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80">
            GPTPrompts.AI
          </Link>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-8">Internship & Job Preparation</h1>
          <p className="text-2xl max-w-4xl text-pretty leading-relaxed opacity-90">
            ChatGPT supercharges internship and job prep with prompts for ATS-friendly resumes, tailored cover letters,
            mock interviews, and networking.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Resume Optimization</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">ATS-Beating Resume</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              Create 1-page resume for [ROLE] at [COMPANY]. Experience: [PASTE]. Skills: [LIST]. ATS format: Keywords
              from JD, quantified achievements, action verbs, 1-column clean.
            </code>
          </Card>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Bullet Point Power-Up</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              Upgrade bullets [PASTE]: STAR format (Situation/Task/Action/Result). Quantify: %, $, #. Strong verbs. Tech
              intern focus.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Cover Letter Mastery</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Storytelling Cover Letter</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              250-word cover letter for [ROLE] at [COMPANY]. Hook: [MEMORABLE STORY]. Skills match: [JD → MY EXP]. Why
              them: [RESEARCH]. Tone: Professional/passionate.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Interview Preparation</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Behavioral Mock Interview</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              Conduct [ROLE] interview: 8 behavioral questions (STAR). After each answer [PASTE MINE]: Feedback on
              structure/impact/content. Improved version provided.
            </code>
          </Card>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Technical Interview Simulator</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              [ROLE] technical interview: Coding (LeetCode medium), System design, Behavioral. Live code review of my
              solution.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Networking & LinkedIn</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">LinkedIn Profile Overhaul</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              Optimize LinkedIn for [ROLE]. Headline/About/Summary. Experience bullets (3/role). Skills endorsements.
              100+ connections strategy.
            </code>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Application Strategy</h2>
          <Card className="p-8 bg-muted">
            <h3 className="font-bold mb-4">Batch Application Optimizer</h3>
            <code className="text-sm bg-background p-4 block rounded overflow-x-auto">
              10 target internships [LIST]. Prioritize: Fit/pay/location. Tailored timeline + tracking spreadsheet. Apps
              open Dec—apply Jan, interviews Feb-Mar.
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
