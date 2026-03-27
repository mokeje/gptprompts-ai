"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useEffect } from "react"

export default function APIPromptingPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "ChatGPT API Prompting: Best Practices for Integration",
      description:
        "Master ChatGPT API prompting with best practices for integration, streaming, function calling, and production deployments.",
      author: { "@type": "Organization", name: "GPTPrompts.AI" },
    }
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }, [])

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">ChatGPT API Prompting</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Best practices for integrating ChatGPT into applications with optimized prompting, error handling, and cost
            efficiency.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-rose-600 mb-6">Guide Sections</h3>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { id: "intro", label: "API Prompting Overview", num: "01" },
                { id: "setup", label: "Setup & Authentication", num: "02" },
                { id: "prompt-structure", label: "Prompt Structure", num: "03" },
                { id: "streaming", label: "Streaming Responses", num: "04" },
                { id: "function-calling", label: "Function Calling", num: "05" },
                { id: "error-handling", label: "Error Handling", num: "06" },
                { id: "cost-optimization", label: "Cost Optimization", num: "07" },
                { id: "examples", label: "Code Examples", num: "08" },
                { id: "faq", label: "FAQ", num: "09" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-center justify-between hover:text-rose-600 transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-bold text-muted-foreground">{item.num}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-16">
          <section id="intro" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-rose-600 uppercase">01</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">ChatGPT API Prompting Overview</h2>
            </div>
            <div className="prose prose-lg max-w-none space-y-4">
              <p>
                Integrating ChatGPT via API requires optimized prompting strategies that balance response quality, cost,
                and latency. Production-grade prompts differ from chat-based prompts: they must handle edge cases,
                maintain consistency, and work reliably at scale.
              </p>
              <Card className="p-6 bg-rose-50 border-rose-200">
                <h4 className="font-bold mb-3">Key Considerations:</h4>
                <ul className="space-y-2 text-sm">
                  <li>✓ Deterministic, reproducible responses</li>
                  <li>✓ Token optimization and cost management</li>
                  <li>✓ Error handling and fallback strategies</li>
                  <li>✓ Rate limiting and retry logic</li>
                  <li>✓ Prompt caching for frequently-used instructions</li>
                  <li>✓ Function calling for structured outputs</li>
                  <li>✓ Streaming for real-time user feedback</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="prompt-structure" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-rose-600 uppercase">03</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Optimal Prompt Structure for API</h2>
            </div>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">System + User Message Pattern</h3>
              <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm mb-6">
                {`System Message (Cached):
You are a [ROLE/PURPOSE]. Your task is to [SPECIFIC GOAL].

RULES:
- Output format: [JSON/CSV/MARKDOWN]
- Constraints: [SPECIFIC LIMITS]
- Edge cases: [HOW TO HANDLE]
- Tone: [STYLE]

User Message (Input):
[USER DATA/QUERY]

Example output:
[SHOW EXPECTED FORMAT]`}
              </pre>
              <p className="text-sm">This structure is cached on the API, reducing cost for repeated requests.</p>
            </Card>
          </section>

          <section id="function-calling" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-rose-600 uppercase">05</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Function Calling Best Practices</h2>
            </div>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Defining Function Schemas</h3>
              <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                {`functions = [
  {
    "name": "analyze_sentiment",
    "description": "Analyze sentiment of customer feedback",
    "parameters": {
      "type": "object",
      "properties": {
        "text": {"type": "string"},
        "scale": {"type": "integer", "minimum": 1, "maximum": 10}
      },
      "required": ["text", "scale"]
    }
  }
]

# Call API with function definitions
response = openai.ChatCompletion.create(
  model="gpt-4-turbo",
  messages=[{"role": "user", "content": user_input}],
  functions=functions,
  function_call="auto"  # Let model decide when to call
)`}
              </pre>
            </Card>
          </section>

          <section id="cost-optimization" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-rose-600 uppercase">07</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Cost Optimization Strategies</h2>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <h4 className="font-bold mb-2">1. Prompt Caching</h4>
                <p className="text-sm mb-3">
                  Cache long system prompts to reduce token costs by 90% on repeated calls.
                </p>
                <pre className="bg-slate-100 p-3 rounded overflow-x-auto text-xs">
                  {`# System message marked for caching
system_message = {
  "role": "system",
  "content": [...large instruction set...],
  "cache_control": {"type": "ephemeral"}
}`}
                </pre>
              </Card>

              <Card className="p-6">
                <h4 className="font-bold mb-2">2. Model Selection</h4>
                <p className="text-sm">
                  Use GPT-4 Turbo for complex tasks, GPT-3.5 Turbo for simple ones. Estimate 10x cost difference.
                </p>
              </Card>

              <Card className="p-6">
                <h4 className="font-bold mb-2">3. Token Optimization</h4>
                <p className="text-sm">
                  Remove unnecessary words, use shorthand for common terms, return only needed fields in output.
                </p>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-rose-600 uppercase">09</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "What's the difference between ChatGPT web and API prompting?",
                  a: "API prompts must be deterministic and handle errors gracefully. Web prompts can be more conversational. System messages are key for API reliability.",
                },
                {
                  q: "How do I reduce API costs?",
                  a: "Use prompt caching, choose appropriate models, optimize token usage, batch requests, and implement smart retry logic.",
                },
                {
                  q: "Should I use streaming for all requests?",
                  a: "Stream for user-facing features (better UX). Use non-streaming for backend processing where latency is less critical.",
                },
                {
                  q: "How do I handle API rate limits?",
                  a: "Implement exponential backoff retry logic, use queue systems for burst traffic, and monitor usage with dashboards.",
                },
                {
                  q: "What's the best way to validate API responses?",
                  a: "Use function calling with strict schemas, validate JSON against schema, implement fallback logic for edge cases.",
                },
                {
                  q: "How often should I update my system prompts?",
                  a: "Monitor quality metrics. Update when accuracy drops, user feedback changes, or new use cases emerge. Version control prompts.",
                },
                {
                  q: "Can I use temperature=0 for all requests?",
                  a: "Yes for deterministic tasks. For creative work, use temperature 0.7-1.0. Higher = more variety but less consistency.",
                },
                {
                  q: "How do I debug API response issues?",
                  a: "Log full requests/responses, test with smaller models first, validate inputs, check token limits, review cost/latency.",
                },
                {
                  q: "What's the maximum prompt length?",
                  a: "Context window varies by model (4K-128K tokens). Reserve tokens for response. Most APIs auto-trim if exceeded.",
                },
                {
                  q: "Should I use more detailed prompts for API?",
                  a: "Yes. Detailed system messages increase accuracy and reduce errors. Cache long prompts to offset token cost.",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded px-4">
                  <AccordionTrigger className="hover:text-rose-600">{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      <footer className="border-t mt-24 py-12 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">ChatGPT Guides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-rose-600">
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-code-generation" className="hover:text-rose-600">
                  Code Generation
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-role-based-prompting" className="hover:text-rose-600">
                  Role-Based Prompting
                </Link>
              </li>
              <li>
                <Link href="/few-shot-prompting" className="hover:text-rose-600">
                  Few-Shot Prompting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Development Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/claude-artifacts-guide" className="hover:text-rose-600">
                  Claude Artifacts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-data-analysis" className="hover:text-rose-600">
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-creative-writing" className="hover:text-rose-600">
                  Creative Writing
                </Link>
              </li>
              <li>
                <Link href="/gpt-o1-guide" className="hover:text-rose-600">
                  GPT-o1 Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-engineering-fundamentals" className="hover:text-rose-600">
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/prompt-best-practices" className="hover:text-rose-600">
                  Best Practices
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-business-productivity" className="hover:text-rose-600">
                  Business Productivity
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-rose-600">
                  View All Pages
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-rose-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-rose-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/journal-guide" className="hover:text-rose-600">
                  Journal Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t text-sm text-center text-muted-foreground">
          <p>
            © 2026 GPTPrompts.AI. Master ChatGPT API integration with production-ready prompting strategies and best
            practices.
          </p>
        </div>
      </footer>
    </main>
  )
}
