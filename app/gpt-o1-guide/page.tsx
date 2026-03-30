import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Zap } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How to Use GPT-o1 Reasoning Model: Advanced Prompting Techniques | GPTPrompts.AI",
  description:
    "Master GPT-o1 advanced prompting. Simple, direct questions with constraints achieve 10x better reasoning than GPT-4o. Complete guide with real prompts.",
}

export default function GPTOOneGuidePage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            GPT-o1 <br />
            <span className="italic opacity-90">Reasoning.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            Master OpenAI's new reasoning model. GPT-o1 thinks deeper than GPT-4o. Learn the advanced prompting
            techniques that unlock 10x better complex problem-solving.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6] mb-6">Contents</h3>
              <ul className="space-y-3 text-sm font-medium">
                {[
                  { id: "intro", label: "Understanding o1", num: "01" },
                  { id: "principles", label: "Core Principles", num: "02" },
                  { id: "chain", label: "Chain of Thought", num: "03" },
                  { id: "verification", label: "Verification Prompts", num: "04" },
                  { id: "constraint", label: "Constraint-Based", num: "05" },
                  { id: "advanced", label: "Advanced Patterns", num: "06" },
                  { id: "routing", label: "Routing Strategies", num: "07" },
                  { id: "faq", label: "FAQ", num: "08" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-muted-foreground hover:text-[#8b5cf6] transition-colors flex justify-between"
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
          <section id="intro" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6]">01 — Intro</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">
                Understanding the GPT-o1 Reasoning Model
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              GPT-o1 is a family of "reasoning models" trained to spend more compute on thinking through problems before
              answering, especially on math, code, and scientific tasks. Instead of just predicting the next token, o1
              generates a long internal chain of thought, iteratively refining its approach and correcting mistakes
              before emitting a final answer.
            </p>
            <Card className="border-[#8b5cf6]/20 bg-card p-6">
              <h4 className="font-bold mb-4">GPT-o1 vs GPT-4o: Quick Comparison</h4>
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold text-[#8b5cf6]">GPT-o1 Strengths:</p>
                    <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                      <li>Deep reasoning</li>
                      <li>Multi-step problems</li>
                      <li>Math & code</li>
                      <li>Slower (trade-off)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold">GPT-4o Strengths:</p>
                    <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                      <li>Fast responses</li>
                      <li>Conversational</li>
                      <li>General tasks</li>
                      <li>Lower latency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section id="principles" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6]">02 — Core</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">
                Core Prompting Principles for o1
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Advanced prompting for o1 is less about forcing chain of thought and more about sharply defining goals,
              constraints, and verification.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <Zap className="w-6 h-6 text-[#8b5cf6] flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Keep prompts simple and direct</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Short, focused questions with minimal extraneous context let o1 allocate its "thinking" to the core
                    problem.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Zap className="w-6 h-6 text-[#8b5cf6] flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Skip explicit chain-of-thought prompts</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    o1 already performs internal reasoning. Prompts like "think step by step" are usually unnecessary.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Zap className="w-6 h-6 text-[#8b5cf6] flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Use clear delimiters and structure</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    For complex inputs, mark sections: INPUT, CONSTRAINTS, GOAL so o1 parses reliably.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Zap className="w-6 h-6 text-[#8b5cf6] flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Specify constraints and success criteria</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Reasoning models respond well to explicit boundaries (time/space limits, allowed algorithms) and
                    crisp definitions of correct solutions.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section id="faq" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6]">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "When should I use o1 vs GPT-4o?",
                  a: "Use o1 for complex math, code debugging, research, and multi-step logic. Use GPT-4o for fast Q&A, content, conversations, and real-time applications.",
                },
                {
                  q: "Does o1 eliminate hallucinations?",
                  a: "No, but its reasoning process makes hallucinations less likely on logic-heavy tasks. Still use verification prompts for fact-checking.",
                },
                {
                  q: "What does o1 do with its 'thinking'?",
                  a: "o1 generates long internal reasoning tokens (not shown) that refine its approach, check logic, and backtrack when stuck. Only the final answer is displayed.",
                },
                {
                  q: "Can I see o1's thinking process?",
                  a: "OpenAI is working on \"thinking transparency\" to reveal internal reasoning. For now, ask it to 'explain your logic after solving' to audit the approach.",
                },
                {
                  q: "Is o1 cheaper or more expensive than GPT-4o?",
                  a: "o1 is more expensive per token due to extra compute. Use it only for tasks that truly benefit from deep reasoning.",
                },
                {
                  q: "Can I chain o1 calls together?",
                  a: "Yes. A common pattern: GPT-4o drafts a solution → o1 verifies/refines it → human reviews. This balances speed and reasoning.",
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-[#8b5cf6]/20">
                  <AccordionTrigger className="hover:text-[#8b5cf6]">{item.q}</AccordionTrigger>
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
            <h4 className="font-bold mb-4">Advanced AI Models</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/chatgpt-o3-prompts" className="hover:text-[#8b5cf6]">
                  ChatGPT o3
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-[#8b5cf6]">
                  ChatGPT
                </Link>
              </li>
              <li>
                <Link href="/claude-prompts" className="hover:text-[#8b5cf6]">
                  Claude
                </Link>
              </li>
              <li>
                <Link href="/gpt-4-5-prompts" className="hover:text-[#8b5cf6]">
                  GPT-4.5 Prompts
                </Link>
              </li>
              <li>
                <Link href="/prompt-engineering-fundamentals" className="hover:text-[#8b5cf6]">
                  Fundamentals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Learning Path</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/few-shot-prompting" className="hover:text-[#8b5cf6]">
                  Few-Shot
                </Link>
              </li>
              <li>
                <Link href="/prompt-chaining-guide" className="hover:text-[#8b5cf6]">
                  Chaining
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-[#8b5cf6]">
                  View All Pages
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm text-muted-foreground">
              © 2026 GPTPrompts.AI. Applied with these advanced techniques, GPT-o1 becomes a powerful reasoning engine
              for technical professionals and researchers.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
