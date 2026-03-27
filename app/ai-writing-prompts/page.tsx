"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import Link from "next/link"

export default function AIWritingPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-amber-600 text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <BookOpen className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            AI Writing
            <br />
            <span className="italic opacity-90">Prompts.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            200+ tested prompts with burstiness and perplexity. Create content that feels human, converts, and
            engages—not robotic.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-6">Categories</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  "Blog & Thought Leadership",
                  "Social Media Viral Loops",
                  "Fiction & Worldbuilding",
                  "Technical Writing",
                  "Personal Productivity",
                  "FAQ",
                ].map((item, i) => (
                  <li key={i}>
                    <a href={`#${i}`} className="hover:text-amber-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-20 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              The AI Content Flood & The 2026 Demand for Authenticity
            </h2>
            <p className="text-lg text-muted-foreground">
              The "AI content flood" of 2024-2025 has created unprecedented demand for Burstiness and Perplexity—writing
              that feels unpredictable and genuinely human.
            </p>
          </article>

          <article className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Category 1: Blog Post & Thought Leadership</h2>
            <Card className="bg-amber-50 border-amber-200 p-6 my-8">
              <h4 className="font-bold mb-3">The Oppositional Prompt</h4>
              <p className="font-mono text-sm mb-3">
                "Write a 1,200-word blog post arguing against the common wisdom that [Topic] is always beneficial. Use a
                skeptical, data-driven tone."
              </p>
              <p className="text-sm text-muted-foreground">
                Standout Result: Instead of repeating conventional wisdom, this prompt creates naturally contrarian
                content that ranks for niche queries and generates discussion.
              </p>
            </Card>
          </article>

          <section id="faq" className="py-16 border-t">
            <h2 className="text-4xl font-bold tracking-tight mb-12">FAQ: Writing Prompts Mastery</h2>
            <Accordion type="single" collapsible>
              {[
                {
                  q: "How do I avoid AI detection in my writing?",
                  a: "Use prompts that request 'burstiness' and 'varied sentence length.' Include contrarian arguments and specific data. AI detectors struggle with genuinely thoughtful content.",
                },
                {
                  q: "What's the difference between 'blog prompts' and 'thought leadership' prompts?",
                  a: "Blog prompts optimize for engagement and shares. Thought leadership prompts position you as an expert and build authority over time.",
                },
                {
                  q: "How do I make ChatGPT write more 'unpredictably'?",
                  a: "Use: 'Use unexpected metaphors, vary sentence structure, include one contrarian insight, and avoid corporate jargon.'",
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-base font-semibold">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      <footer className="bg-muted py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            <div>
              <h4 className="font-bold text-sm mb-4">Brand</h4>
              <p className="text-xs text-muted-foreground">Your complete AI prompting resource.</p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">AI Models</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/chatgpt-prompts" className="hover:text-foreground">
                    ChatGPT
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Resources</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/prompt-engineering-fundamentals" className="hover:text-foreground">
                    Fundamentals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Writing</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/story-prompts" className="hover:text-foreground">
                    Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Advanced</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/prompt-optimization" className="hover:text-foreground">
                    Optimization
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center">
            <p className="text-xs text-muted-foreground">© 2026 GPTPrompts.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
