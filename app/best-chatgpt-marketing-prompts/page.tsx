"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"
import Link from "next/link"

export default function ChatGPTMarketingPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-green-600 text-white py-32 px-6 md:px-12">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <BarChart3 className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            Marketing
            <br />
            <span className="italic">Prompts.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            50 full-funnel ChatGPT templates that turn your AI assistant into a complete marketing department.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <article className="prose prose-lg max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Agentic Marketing: Turn ChatGPT Into Your Marketing Department
          </h2>
          <p>
            Marketing in 2026 is about Agentic Orchestration. You are no longer just asking for a "caption"—you're
            building a system.
          </p>
          <Card className="bg-green-50 border-green-200 p-6 my-8">
            <h4 className="font-bold mb-4">The Full-Funnel Prompt Set</h4>
            <div className="space-y-4">
              <div>
                <strong>Top of Funnel:</strong> "Analyze reviews to identify functional, emotional, and social 'jobs'
                customers hire the product for."
              </div>
              <div>
                <strong>Mid Funnel:</strong> "Write comparison guides maintaining fairness while highlighting our
                advantages."
              </div>
              <div>
                <strong>Bottom Funnel:</strong> "Use PAS framework for high-converting landing page scripts."
              </div>
            </div>
          </Card>
        </article>

        <section className="py-16 border-t max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-12">FAQ: Marketing Prompts</h2>
          <Accordion type="single" collapsible>
            {[
              {
                q: "What is prompt chaining for marketing?",
                a: "Break complex marketing tasks into sequential prompts: Research → Pillars → Copy → Design. Each builds on the previous output.",
              },
              {
                q: "How do I create customer personas with ChatGPT?",
                a: "Use: 'Based on [customer data], create 5 detailed personas including pain points, desires, objections, and ideal messaging.'",
              },
              {
                q: "What's the PAS framework for sales copy?",
                a: "Problem → Agitate the problem → Solve it. This psychological framework increases conversion rates by 30-50%.",
              },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-6">
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </section>

      <footer className="bg-muted py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-t pt-8 text-center">
          <p className="text-xs text-muted-foreground">© 2026 GPTPrompts.AI</p>
        </div>
      </footer>
    </main>
  )
}
