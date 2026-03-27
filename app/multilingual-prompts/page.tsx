"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Languages } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function MultilingualPromptsPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Multi-Language Prompts: Use AI Across Languages Effectively",
      description:
        "Master cross-lingual prompting with the Nuance Preservation Framework and Bridge Language Technique",
      author: { "@type": "Organization", name: "GPTPrompts.AI" },
      datePublished: "2026-01-07",
    }
    const scriptTag = document.createElement("script")
    scriptTag.type = "application/ld+json"
    scriptTag.textContent = JSON.stringify(schema)
    document.head.appendChild(scriptTag)
  }, [])

  const sections = [
    {
      id: "intro",
      title: "The Nuance Preservation Framework",
      content:
        "As global markets converge in 2026, the ability to prompt across linguistic barriers is a superpower. Direct translation often fails because it misses the 'Low-Context vs. High-Context' cultural divide.",
    },
    {
      id: "localization",
      title: "Prompting for Localization, Not Just Translation",
      content: `The Localization Prompt: "Translate this marketing copy into Japanese. Do not use a literal translation. Adjust the tone to be more formal (Keigo) and ensure the imagery used resonates with Tokyo's metropolitan lifestyle."`,
    },
    {
      id: "bridge",
      title: "The Bridge Language Technique",
      content: `For rare languages, LLMs often perform better if you prompt them in English but ask for the output in the target language.
      
      "System Instruction: You are a fluent Swahili orator. Task: Explain the concept of 'Blockchain' to a rural farming community using local agricultural metaphors."`,
    },
    {
      id: "multimodal",
      title: "Multi-Modal Language Processing",
      content:
        "We discuss how to use prompts for Voice-to-Voice translation systems, ensuring that 'filler words' and 'intonation markers' are correctly interpreted by AI agents during real-time meetings.",
    },
    {
      id: "global",
      title: "Ranking in Global Markets",
      content:
        "This article targets international SEO by providing 'Universal Language Prompts'—templates that are tested and proven to work across Spanish, French, Mandarin, Arabic, and Hindi. By showing the AI's performance in diverse scripts, the article becomes a primary resource for global enterprise teams.",
    },
  ]

  const faqs = [
    {
      q: "Which AI models are best for multilingual prompting?",
      a: "Claude 3.5 Sonnet and GPT-4 handle 100+ languages well. For rare languages, use specialized models.",
    },
    {
      q: "How do I maintain context across language shifts?",
      a: "Use explicit context markers like [ORIGINAL_LANGUAGE: Spanish] [TARGET_LANGUAGE: Mandarin].",
    },
    {
      q: "What's the accuracy of AI translation vs. professional translators?",
      a: "AI reaches 95%+ accuracy for common languages. For nuanced marketing copy, human review is still recommended.",
    },
    {
      q: "Can I use prompt chaining for multilingual content?",
      a: "Yes. Chain: translate → localize → cultural review → final approval.",
    },
    {
      q: "How do I handle idioms and cultural references?",
      a: "Explicitly prompt: 'Replace idioms with local cultural equivalents that convey the same meaning.'",
    },
    {
      q: "What's the latency impact of multilingual prompting?",
      a: "Minimal. Processing multilingual text has similar latency to English.",
    },
    {
      q: "Can AI handle code-switching (mixing languages)?",
      a: "Yes, but clarify which language is 'primary' in your prompt.",
    },
    {
      q: "How do I ensure consistent terminology across languages?",
      a: "Provide a glossary: 'Use these terms consistently: [English] → [Target Language]'.",
    },
    {
      q: "What are the limitations of multilingual AI?",
      a: "Rare languages (<50M speakers) have lower quality. Low-resource languages are challenging.",
    },
    {
      q: "How do I test multilingual prompt quality?",
      a: "Use native speakers to review. Compare with professional translations. Measure semantic similarity.",
    },
    {
      q: "Can I prompt AI to detect language bias?",
      a: "Yes. Ask: 'Does this text contain cultural stereotypes or biases toward [group]?'",
    },
    {
      q: "What's the cost of multilingual prompting at scale?",
      a: "Token usage increases 10-20% due to longer prompts. Cost is similar per-token across languages.",
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="bg-gradient-to-r from-violet-600 to-violet-700 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            Multilingual <br />
            <span className="italic opacity-90">Prompts.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed opacity-90">
            Master cross-lingual prompting across 100+ languages with the Nuance Preservation Framework.
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Navigation */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-6">Sections</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {sections.map((section, idx) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-center justify-between hover:text-violet-600 transition-colors"
                    >
                      <span>{section.title}</span>
                      <span className="text-xs font-bold text-violet-600">{String(idx + 1).padStart(2, "0")}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main */}
        <div className="lg:col-span-9 space-y-24">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                <Languages className="w-8 h-8 text-violet-600" />
                {section.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
            </section>
          ))}

          {/* FAQ */}
          <section id="faq" className="scroll-mt-32">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
              <MessageCircle className="w-8 h-8 text-violet-600" />
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-lg px-6">
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
            <h4 className="font-bold mb-4">Guides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-best-practices-15-rules" className="hover:text-violet-600">
                  Best Practices
                </Link>
              </li>
              <li>
                <Link href="/prompt-chaining-guide" className="hover:text-violet-600">
                  Chaining
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-violet-600">
                  ChatGPT
                </Link>
              </li>
              <li>
                <Link href="/claude-prompts" className="hover:text-violet-600">
                  Claude
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Learning</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-engineering-fundamentals" className="hover:text-violet-600">
                  Fundamentals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/website-links" className="hover:text-violet-600">
                  All Pages
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-violet-600">
                  Home
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
