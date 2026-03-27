import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Question-Based Prompts: Extract Information Effectively with AI | GPTPrompts.AI",
  description:
    "Master question-based prompting to extract precise information from AI. Learn interrogative techniques, multi-part queries, and structured extraction methods for reliable retrieval.",
  keywords:
    "question prompts, interrogative AI, information extraction, Q&A prompts, data retrieval, factual extraction",
}

export default function QuestionBasedPrompts() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <HelpCircle className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-70 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
            Question-Based <br />
            <span className="italic opacity-90">Prompts.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Extract precise information from AI with interrogative prompts. Master direct questions, multi-step chains,
            and structured extraction for 90%+ accuracy retrieval.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">Navigation</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "why-questions", label: "Why Questions Work", num: "01" },
                  { id: "question-types", label: "Question Types", num: "02" },
                  { id: "advanced", label: "Advanced Techniques", num: "03" },
                  { id: "best-practices", label: "Best Practices", num: "04" },
                  { id: "applications", label: "Domain Applications", num: "05" },
                  { id: "faq", label: "FAQ", num: "06" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-blue-600 transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs font-mono opacity-50 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-24">
          <section id="why-questions" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why Questions Beat Imperatives</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Question-based prompts extract precise information by structuring queries to target specific details,
              contexts, or analyses. Imperatives ("Summarize X") invite interpretation; questions ("What are the 3 main
              causes of X?") demand focused extraction, boosting precision 20-40% via natural QA training.
            </p>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <Card className="p-6 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                <h3 className="font-bold text-red-900 dark:text-red-300 mb-4">❌ Imperative (Vague)</h3>
                <p className="text-sm text-red-800 dark:text-red-400 font-mono">"Summarize sales performance."</p>
                <p className="text-xs text-red-700 dark:text-red-500 mt-2">Gets broad, unfocused summary</p>
              </Card>

              <Card className="p-6 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <h3 className="font-bold text-green-900 dark:text-green-300 mb-4">✅ Question (Precise)</h3>
                <p className="text-sm text-green-800 dark:text-green-400 font-mono">
                  "What were Q3's top 3 revenue drivers with % contribution?"
                </p>
                <p className="text-xs text-green-700 dark:text-green-500 mt-2">Gets specific, structured data</p>
              </Card>
            </div>
          </section>

          <section id="question-types" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Question Types and Applications</h2>

            <div className="space-y-6">
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">1. Direct Factual Extraction</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Template: "What is [ENTITY] in [CONTEXT]?"

Example: "What is the CEO of Tesla mentioned in this article?"
Result: Pulls exact names, dates, numbers.

Use case: Named entity recognition, fact verification, key info retrieval`}
                </pre>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">2. Multi-Part Interrogatives</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Template: "List [NUMBER] [ATTRIBUTES] from [SOURCE]."

Example: "From this report, list the top 5 revenue drivers with % contributions."
Result: Structured lists/tables.

Use case: Comparative analysis, ranked extraction, quantitative data`}
                </pre>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">3. Comparative Questions</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Template: "Compare [A] vs [B] on [CRITERIA]."

Example: "Compare Python vs Java for web dev on: speed, cost, ecosystem (table)."
Result: Decision aids, pros/cons matrices.

Use case: Vendor selection, feature comparison, trade-off analysis`}
                </pre>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">4. Causal/Reasoning Queries</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Template: "Why [PHENOMENON]? Explain step-by-step."

Example: "Why did sales drop Q3? Analyze step-by-step from data."
Result: Root cause analysis, reasoning chains.

Use case: Problem diagnosis, root cause analysis, explainability`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="advanced" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Advanced Extraction Techniques</h2>

            <div className="space-y-6">
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Chain-of-Question (CoQ)</h3>
                <p className="text-muted-foreground mb-4">
                  Break complex extraction into smaller sequential questions:
                </p>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`1. Identify all dates in text.
2. Which relate to events?
3. Extract event descriptions for those dates.

Benefit: Mitigates overload, reduces hallucinations`}
                </pre>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Template Fill Extraction</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Find: Person worked at [COMPANY].
Output: "[NAME] at [COMPANY]" or "Not found."

Benefit: NER-like precision, minimizes noise`}
                </pre>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Few-Shot QA Calibration</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Ex1: "Capital of France?" → "Paris"
Ex2: "GDP of Japan?" → "$4.2T"
Q: "Revenue of Apple FY24?" → ?

Benefit: Calibrates nuance, sets output format`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="best-practices" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Best Practices for Effective Questions
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-3 text-left border border-border font-bold">Pitfall</th>
                    <th className="p-3 text-left border border-border font-bold text-red-600">❌ Bad Question</th>
                    <th className="p-3 text-left border border-border font-bold text-green-600">✅ Good Question</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-border">Vague</td>
                    <td className="p-3 border border-border font-mono text-xs">"Info on sales"</td>
                    <td className="p-3 border border-border font-mono text-xs">"What drove Q4 sales growth %?"</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="p-3 border border-border">Leading</td>
                    <td className="p-3 border border-border font-mono text-xs">"Confirm X caused Y"</td>
                    <td className="p-3 border border-border font-mono text-xs">"What factors contributed to Y?"</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border">Compound</td>
                    <td className="p-3 border border-border font-mono text-xs">"Sales and costs?"</td>
                    <td className="p-3 border border-border font-mono text-xs">
                      "Top 3 sales drivers? Costs breakdown?"
                    </td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="p-3 border border-border">Open-Ended</td>
                    <td className="p-3 border border-border font-mono text-xs">"Tell about X"</td>
                    <td className="p-3 border border-border font-mono text-xs">"3 key benefits of X?"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="p-8 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <h3 className="font-bold mb-4 text-blue-900 dark:text-blue-300">Optimization Techniques</h3>
              <ul className="space-y-3 text-sm text-blue-800 dark:text-blue-400">
                <li>
                  <strong>Be Literal:</strong> "What number?" not "Was number reported?"
                </li>
                <li>
                  <strong>Add Constraints:</strong> "Quote exactly" / "Top 3 only" / "2-sentence answer"
                </li>
                <li>
                  <strong>Request Verification:</strong> "Confidence? Sources? Quote text."
                </li>
                <li>
                  <strong>Specify Format:</strong> "Table: | Col1 | Col2 |" or "JSON:" or "Numbered list:"
                </li>
              </ul>
            </Card>
          </section>

          <section id="applications" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Domain Applications</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 border-border">
                <h3 className="font-bold mb-4">Research/Lit Review</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Question:</strong> "From abstracts: What methods for [TOPIC]? Authors/journals/year (table)."
                </p>
                <p className="text-xs text-muted-foreground mt-2">Use case: Gap spotting, literature synthesis</p>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="font-bold mb-4">Data Extraction</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Question:</strong> "Extract: Invoice total, date, items (JSON). [IMAGE/TEXT]"
                </p>
                <p className="text-xs text-muted-foreground mt-2">Use case: Document processing, structured output</p>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="font-bold mb-4">Troubleshooting</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Question:</strong> "Screenshot error: What line causes it? Likely fix?"
                </p>
                <p className="text-xs text-muted-foreground mt-2">Use case: Debugging, error analysis</p>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="font-bold mb-4">Financial Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Question:</strong> "From earnings call: What's guidance for FY25? Direct quote?"
                </p>
                <p className="text-xs text-muted-foreground mt-2">Use case: Earnings analysis, investor research</p>
              </Card>
            </div>
          </section>

          <section id="faq" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Question Prompting FAQ</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  How much context should I provide?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Enough to eliminate ambiguity. "What is X?" needs context; "What is X in [SPECIFIC ARTICLE]?" is
                  clear. Provide document, timeframe, or scope. More context = more precise answers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">Should I ask follow-up questions?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. Chain questions sequentially: "From [TEXT], extract [X]?" then "Why did [X] happen?"
                  Follow-ups refine and deepen retrieval. Each answer informs the next question.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">How do I verify AI answers?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Always ask for sources: "Quote the exact text supporting this." Cross-reference with original
                  documents. For factual claims, spot-check 3-5 key pieces. Never assume AI accuracy without validation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  Can I ask complex multi-hop questions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, but break into steps. "Who led Project X? What was its budget?" works better than "Tell me
                  everything about Project X." Narrower questions = more reliable answers. Chain for multi-hop
                  retrieval.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">What format should I request?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Specify: "Table format: | Name | Role | Company |" or "JSON:" or "Numbered list:" or "Direct quote."
                  Format specification eliminates ambiguity and ensures usable output.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </section>

      <footer className="bg-muted py-16 px-6 md:px-12 mt-24 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-bold text-foreground mb-4">Prompt Types</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/prompt-engineering-seo" className="hover:text-foreground transition-colors">
                  SEO Prompts
                </Link>
              </li>
              <li>
                <Link href="/prompting-data-analysis" className="hover:text-foreground transition-colors">
                  Data Analysis
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">AI Models</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-foreground transition-colors">
                  ChatGPT
                </Link>
              </li>
              <li>
                <Link href="/claude-prompts" className="hover:text-foreground transition-colors">
                  Claude
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-foreground transition-colors">
                  All Pages
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">More</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 GPTPrompts.AI. Master question-based prompting for precise information extraction.</p>
        </div>
      </footer>
    </main>
  )
}
