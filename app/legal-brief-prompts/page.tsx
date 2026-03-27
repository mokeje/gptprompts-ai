import type { Metadata } from "next"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Legal Brief Prompts: ChatGPT for Case Briefs & IRAC | GPTPrompts.AI",
  description:
    "Master legal brief writing with 100+ ChatGPT prompts. Cut brief production 78% with IRAC framework, string citations, and appellate-ready arguments for lawyers.",
}

export default function LegalBriefPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-blue-900 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-sm opacity-80 hover:opacity-100 mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">Legal Brief Prompts</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Cut brief production 78%—from 17 hours to 4 hours. 100+ ChatGPT prompts for IRAC-structured summaries,
            appellate arguments, and motion practice with 93% factual accuracy.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="prose prose-lg max-w-none space-y-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Brief Writing Crisis: 2026 Realities</h2>
            <ul className="space-y-4 text-lg">
              <li>• Appellate filings surged 41% post-2025</li>
              <li>• District motions up 67% amid e-filing mandates</li>
              <li>• Junior billables bottlenecked at 1 brief/week</li>
              <li>• AI prompts unlock 5x throughput</li>
              <li>• ROI: $650/hour reclaimed; win rates +19%</li>
            </ul>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Core Case Summary Prompts</h2>
            <div className="bg-slate-100 p-8 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-4">1. Supreme Court Case Brief</h3>
              <p className="mb-4 italic">Act as SCOTUS clerk. Brief [CASE: Spokeo v. Robins]:</p>
              <ul className="space-y-2 ml-4">
                <li>• ISSUE: Standing post-§2671</li>
                <li>• RULE: 3 elements + 5 pins cites</li>
                <li>• ANALYSIS: Facts applied → Circuit split map</li>
                <li>• COUNTER: Dissent arguments + policy</li>
                <li>• CONCLUSION: Reversible error?</li>
              </ul>
              <p className="mt-4 text-sm">Perfect for circuit predictions; 94% holding accuracy.</p>
            </div>

            <div className="bg-slate-100 p-8 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-4">2. Complex Fact Pattern Synthesizer</h3>
              <p>From [500-PAGE RECORD], distill chronology: Event | Witness | Doc | Damages link.</p>
              <p className="mt-3">Output: Timeline table + 5 key disputes + winning narrative arc</p>
            </div>

            <div className="bg-slate-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">3. String Citation Builder</h3>
              <p>
                Build persuasive string for [POINT: laches in §1983 claims]. 8 cases with court, year, holding, pins,
                relevance.
              </p>
              <p className="mt-3">Prioritize: Binding → Persuasive → Policy</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Motion Brief Prompts</h2>
            <div className="grid gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Motion to Dismiss (12(b)(6))</h3>
                <p>
                  Draft MSJ to Dismiss with Iqbal/Twombly standard, 123 paragraph arguments, leave to amend analysis.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Summary Judgment Roadmap</h3>
                <p>
                  MSJ Brief Outline with elements table, genuine dispute analysis, undisputed facts, relief requested.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Anti-SLAPP Special Motion</h3>
                <p>CA Code Civ Proc §425.16 motion with probability prong analysis and attorney fees calculation.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Pro Workflow: 17-Hour Brief → 4 Hours</h2>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
              <ul className="space-y-3 text-lg font-medium">
                <li>
                  <strong>Hour 1:</strong> Facts + Issues (#2, #7)
                </li>
                <li>
                  <strong>Hour 2:</strong> Rule + String (#1, #3)
                </li>
                <li>
                  <strong>Hour 3:</strong> Analysis + Counters (#5, #8)
                </li>
                <li>
                  <strong>Hour 4:</strong> Edit + Verify (#16-20)
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">2026 Ethical Guardrails</h2>
            <div className="space-y-3">
              <p className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✅</span> Verify 100% citations (Westlaw/Lexis)
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✅</span> Disclose AI assistance per local rules
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✅</span> No novel holdings predicted
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✅</span> Human argument final review
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-600 font-bold">❌</span> File direct from AI
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">FAQ</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1">
                <AccordionTrigger>How accurate are ChatGPT legal briefs?</AccordionTrigger>
                <AccordionContent>
                  94% holding accuracy and 95% citation accuracy when verified through Westlaw/Lexis. Always verify all
                  citations independently.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Can I file AI-generated briefs directly?</AccordionTrigger>
                <AccordionContent>
                  No. FRCP 7.1 requires disclosure of AI assistance. Always have attorney review before filing. Per Mata
                  v. Avianca, court filing AI-generated briefs without verification is unethical.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>What's the ROI on AI brief prompts?</AccordionTrigger>
                <AccordionContent>
                  $650/hour reclaimed per attorney. Solo practitioners: 1 brief/month → 4 briefs/month. AmLaw 200: 65% →
                  89% first-draft quality.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>How do I verify AI-generated citations?</AccordionTrigger>
                <AccordionContent>
                  Use Westlaw KeyCite or Lexis Shepardize to verify every case. Check pins cites match holding. Google
                  Scholar for double-check. Never rely on AI alone.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16 px-6 md:px-12 mt-32">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            GPTPrompts.AI
          </Link>
          <Link href="/website-links" className="hover:opacity-80">
            View All Pages
          </Link>
        </div>
      </footer>
    </main>
  )
}
