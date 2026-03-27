"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScanLine as ChainLink, Brain } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function PromptChainingPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Prompt Chaining: Linking Multiple Prompts for Complex AI Workflows",
      description:
        "Master the 4-step prompt chaining framework to break down complex tasks into autonomous AI workflows",
      author: { "@type": "Organization", name: "GPTPrompts.AI" },
      datePublished: "2026-01-07",
      image: "https://gptprompts.ai/og-image.jpg",
    }
    const scriptTag = document.createElement("script")
    scriptTag.type = "application/ld+json"
    scriptTag.textContent = JSON.stringify(schema)
    document.head.appendChild(scriptTag)
  }, [])

  const sections = [
    {
      id: "intro",
      title: "The Theory of Modular Intelligence",
      content:
        "In 2026, the single-prompt approach is considered 'Legacy AI.' To solve high-level business problems, master engineers use Prompt Chaining. This is the process of breaking down a complex task into a sequence of smaller, dependent prompts where the output of one step becomes the context for the next.",
    },
    {
      id: "framework",
      title: "The 4-Step Chaining Framework",
      content: `
        1. Extraction (The Foundation): Extracting key variables from raw data.
        2. Transformation (The Logic): Converting those variables into a structured plan or draft.
        3. Refinement (The Quality Control): Auditing the draft against specific constraints.
        4. Formatting (The Delivery): Finalizing the output into a specific file type (JSON, Markdown, or HTML).
      `,
    },
    {
      id: "usecase",
      title: "Advanced Use Case: The Autonomous Marketing Funnel",
      content: `
        Prompt 1 (The Researcher): "Analyze this URL and identify the core value proposition and 3 target demographics."
        Prompt 2 (The Strategist): "Using the demographics from Step 1, create a 30-day content calendar."
        Prompt 3 (The Copywriter): "Write 5 Facebook Ad headlines for 'Demographic A' using the value prop from Step 1."
      `,
    },
    {
      id: "reasoning",
      title: "Reasoning Density Principle",
      content:
        "LLMs have a finite 'Reasoning Density.' If you ask an AI to write a 50-page book in one prompt, quality degrades. If you chain 50 prompts—each focusing on a single chapter—quality remains elite. This is the Principle of Atomic Tasks.",
    },
    {
      id: "aeo",
      title: "Optimizing for AEO",
      content:
        "To ensure this guide is cited by AI engines, we include a 'Prompt Chaining Logic Table' that maps out dependencies, a format that RAG (Retrieval-Augmented Generation) systems prefer for extracting structured answers.",
    },
  ]

  const faqs = [
    {
      q: "What's the difference between chaining and few-shot prompting?",
      a: "Chaining involves multiple sequential prompts where output feeds into the next. Few-shot uses examples within a single prompt.",
    },
    {
      q: "How many prompts should I chain together?",
      a: "Start with 3-5 prompts. Each should perform one atomic task. More chains increase latency but improve quality.",
    },
    {
      q: "Can I chain different AI models?",
      a: "Yes. You can use ChatGPT for research, Claude for analysis, and GPT-4 for final output in the same chain.",
    },
    {
      q: "How do I ensure context isn't lost between prompts?",
      a: "Always pass the previous output as context in the next prompt. Use clear variable markers like [PREVIOUS_OUTPUT].",
    },
    {
      q: "What's the cost impact of prompt chaining?",
      a: "Higher token usage due to multiple API calls, but better output justifies it. Consider prompt caching to reduce costs by 90%.",
    },
    {
      q: "Is chaining better than using system instructions?",
      a: "Both have uses. Chaining suits complex workflows. System instructions suit single-turn interactions.",
    },
    {
      q: "How do I debug a broken chain?",
      a: "Test each prompt individually first. Log outputs between steps. Verify context is properly passed.",
    },
    {
      q: "Can I chain prompts in production applications?",
      a: "Absolutely. Major enterprises use chains for customer service, content generation, and data analysis at scale.",
    },
    {
      q: "What's the latency impact?",
      a: "Each prompt adds ~2-5 seconds depending on model and complexity. Parallel execution can mitigate this.",
    },
    {
      q: "How does chaining compare to using agents?",
      a: "Chaining is deterministic and predictable. Agents are autonomous and adaptive. Use chaining for structured workflows.",
    },
    {
      q: "Can I use chaining with vision models?",
      a: "Yes. Extract text from images in step 1, then chain subsequent analysis prompts.",
    },
    {
      q: "What are the best tools for managing chains?",
      a: "LangChain, LlamaIndex, and custom Python scripts are popular for building and monitoring chains.",
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            Prompt <br />
            <span className="italic opacity-90">Chaining.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed opacity-90">
            Master the art of linking multiple prompts for autonomous, enterprise-grade AI workflows. Break complex
            problems into atomic tasks.
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Navigation */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">Guide Sections</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {sections.map((section, idx) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-center justify-between hover:text-blue-600 transition-colors"
                    >
                      <span>{section.title}</span>
                      <span className="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#faq"
                    className="group flex items-center justify-between hover:text-blue-600 transition-colors"
                  >
                    <span>FAQ</span>
                    <span className="text-xs font-bold text-blue-600">{sections.length + 1}</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-24">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                <ChainLink className="w-8 h-8 text-blue-600" />
                {section.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
            </section>
          ))}

          {/* FAQ */}
          <section id="faq" className="scroll-mt-32">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
              <Brain className="w-8 h-8 text-blue-600" />
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="border rounded-lg px-6 data-[state=open]:bg-muted"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="text-left font-semibold">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16 px-6 md:px-12 mt-32 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h4 className="font-bold mb-4">AI Models</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-blue-600">
                  ChatGPT
                </Link>
              </li>
              <li>
                <Link href="/claude-prompts" className="hover:text-blue-600">
                  Claude
                </Link>
              </li>
              <li>
                <Link href="/gemini-prompts" className="hover:text-blue-600">
                  Gemini
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-engineering-fundamentals" className="hover:text-blue-600">
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/advanced-prompt-engineering" className="hover:text-blue-600">
                  Advanced
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-blue-600">
                  All Pages
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Guides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-best-practices-15-rules" className="hover:text-blue-600">
                  Best Practices
                </Link>
              </li>
              <li>
                <Link href="/zero-shot-few-shot" className="hover:text-blue-600">
                  Zero vs Few-Shot
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Learning</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-engineering-certification" className="hover:text-blue-600">
                  Certification
                </Link>
              </li>
              <li>
                <Link href="/prompt-engineering-jobs-2026" className="hover:text-blue-600">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-600">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2026 GPTPrompts.AI - All Rights Reserved</p>
        </div>
      </footer>
    </main>
  )
}
