import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Avoiding ChatGPT Hallucinations: Prompting Strategies That Work | GPTPrompts.AI",
  description:
    "Master techniques to prevent ChatGPT hallucinations. Evidence-based prompting strategies, verification loops, and structured fact-checking reduce errors by 95%.",
}

export default function AvoidingHallucinationsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            Avoiding <br />
            <span className="italic opacity-90">Hallucinations.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            Stop ChatGPT from making things up. Master research-tested techniques to force accurate, sourced, verifiable
            responses for high-stakes work.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#dc2626] mb-6">Contents</h3>
              <ul className="space-y-3 text-sm font-medium">
                {[
                  { id: "causes", label: "What Causes Hallucinations", num: "01" },
                  { id: "core", label: "Core Principles", num: "02" },
                  { id: "verification", label: "Verification Techniques", num: "03" },
                  { id: "techniques", label: "Anti-Hallucination Prompts", num: "04" },
                  { id: "framework", label: "Team Framework", num: "05" },
                  { id: "faq", label: "FAQ", num: "06" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-muted-foreground hover:text-[#dc2626] transition-colors flex justify-between"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs opacity-50">{item.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        <article className="lg:col-span-9 space-y-16">
          <section id="causes" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#dc2626]">01 — Problem</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">
                What Causes ChatGPT Hallucinations?
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hallucinations occur when ChatGPT generates plausible but incorrect information. Common triggers include
              vague prompts, lack of source constraints, and absence of verification steps. Unlike simple errors,
              hallucinations confidently fabricate details like fake statistics, non-existent studies, or incorrect
              facts.
            </p>
            <Card className="border-red-200 bg-red-50 p-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Common Hallucination Triggers:
              </h4>
              <ul className="space-y-2 text-sm list-disc list-inside">
                <li>Knowledge gaps or outdated training data</li>
                <li>Vague or ambiguous prompts</li>
                <li>No source grounding requirements</li>
                <li>Pressure to provide confident answers despite uncertainty</li>
                <li>Lack of verification or self-audit steps</li>
              </ul>
            </Card>
          </section>

          <section id="core" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#dc2626]">02 — Core</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">Core Prompting Principles</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Effective hallucination prevention hinges on three principles: explicit uncertainty handling,
              source-grounding, and iterative verification.
            </p>

            <Card className="border-[#dc2626]/20 bg-card p-6">
              <h4 className="font-bold mb-3">Safe Mode Template:</h4>
              <div className="bg-muted p-4 rounded font-mono text-sm whitespace-pre-wrap">
                {`You are a rigorous research assistant. For every response:

1. If you lack definitive knowledge or cannot cite a specific source, state "I don't have verified information" upfront.

2. Only provide facts you can trace to established knowledge through reasoning.

3. When uncertain about any detail, flag it explicitly with [UNCERTAIN].

4. Prefer saying "no answer" over speculation.`}
              </div>
            </Card>
          </section>

          <section id="verification" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#dc2626]">03 — Verification</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">
                Structured Verification Techniques
              </h2>
            </div>

            <Card className="border-[#dc2626]/20 bg-card p-6">
              <h4 className="font-bold mb-3">Pre-Answer Verification Checklist:</h4>
              <div className="bg-muted p-4 rounded font-mono text-sm whitespace-pre-wrap">
                {`Before providing your final answer, complete this verification process:

1. **Source Check**: Can I cite 2+ specific, credible sources for every major claim?
2. **Logic Check**: Does each step follow logically from established premises?
3. **Edge Cases**: Have I considered counterexamples or exceptions?
4. **Uncertainty**: Are there areas where reasonable experts might disagree?

Only after passing ALL checks, provide the answer. If any check fails, explain why and what additional information is needed.`}
              </div>
            </Card>

            <Card className="border-[#dc2626]/20 bg-card p-6 mt-4">
              <h4 className="font-bold mb-3">Double-Verification Pattern:</h4>
              <div className="bg-muted p-4 rounded font-mono text-sm whitespace-pre-wrap">
                {`Step 1: Generate your best answer to [QUESTION].

Step 2: Immediately switch to critic mode. Review your answer and identify:
   - Any statements without clear sourcing
   - Logical gaps or questionable assumptions
   - Potentially outdated information

Step 3: Revise the answer based on your critique, or state what cannot be reliably answered.`}
              </div>
            </Card>
          </section>

          <section id="faq" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#dc2626]">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "How can I detect hallucinations in ChatGPT responses?",
                  a: "Look for: unsourced claims, fake citations, overly confident statements about uncertain facts, and contradictions with known information. Use verification checklists and fact-check critical claims.",
                },
                {
                  q: "What percentage of hallucinations can I prevent with prompting?",
                  a: "Research-tested techniques reduce hallucination rates from 20-30% (baseline) to under 5% in controlled settings. Results vary by task complexity.",
                },
                {
                  q: "Is ChatGPT suitable for high-stakes decisions?",
                  a: "Only when combined with human oversight and verification prompts. ChatGPT excels as a research assistant but should never be the sole source for critical decisions.",
                },
                {
                  q: "What's the difference between a hallucination and a mistake?",
                  a: 'A hallucination is a confident fabrication ("Study X from 2021 found..."). A mistake is an error with acknowledgment of uncertainty ("I\'m not sure, but I think...").',
                },
                {
                  q: "Can I train ChatGPT to reduce hallucinations?",
                  a: "No direct training, but custom instructions and prompt engineering significantly improve performance. Few-shot examples help too.",
                },
                {
                  q: "Should I use GPT-o1 to reduce hallucinations?",
                  a: "GPT-o1 handles complex reasoning better but doesn't eliminate hallucinations. Always use verification prompts regardless of model.",
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-[#dc2626]/20">
                  <AccordionTrigger className="hover:text-[#dc2626]">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </article>
      </section>

      <footer className="bg-muted border-t mt-32 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          <div>
            <h4 className="font-bold mb-4">ChatGPT Guides</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-[#dc2626]">
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-business-productivity" className="hover:text-[#dc2626]">
                  Business Productivity
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-for-content-marketing" className="hover:text-[#dc2626]">
                  Content Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Safety & Best Practices</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/few-shot-prompting" className="hover:text-[#dc2626]">
                  Few-Shot Prompting
                </Link>
              </li>
              <li>
                <Link href="/prompt-caching" className="hover:text-[#dc2626]">
                  Prompt Caching
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-[#dc2626]">
                  View All Pages
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm text-muted-foreground">
              © 2026 GPTPrompts.AI. With verification prompts and structured fact-checking, ChatGPT becomes a reliable
              research and analysis tool for high-stakes work.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
