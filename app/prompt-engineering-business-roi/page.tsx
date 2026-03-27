import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Prompt Engineering for Business ROI: Quantified AI Strategies | GPTPrompts.AI",
  description:
    "Master ROI-driven business prompts that cut costs 20-50%, accelerate growth, and systematize operations. Learn quantified prompting for sales, marketing, and strategy.",
  keywords:
    "business prompts, ROI prompting, sales optimization, revenue growth, business strategy, cost reduction, automation ROI",
}

export default function BusinessROIPrompts() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-br from-[#059669] to-[#047857] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <TrendingUp className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-70 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
            Business <br />
            <span className="italic opacity-90">ROI Prompts.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Automate workflows, optimize decisions, and quantify outcomes. Turn AI into a profit-generating machine with
            ROI-focused prompts across sales, marketing, ops, and strategy.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-6">Navigation</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "roi-framework", label: "ROI Framework", num: "01" },
                  { id: "sales", label: "Sales Prompts", num: "02" },
                  { id: "marketing", label: "Marketing Prompts", num: "03" },
                  { id: "operations", label: "Operations", num: "04" },
                  { id: "strategy", label: "Strategy", num: "05" },
                  { id: "optimization", label: "Optimization", num: "06" },
                  { id: "faq", label: "Business FAQ", num: "07" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-emerald-600 transition-colors"
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
          <section id="roi-framework" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">ROI Framework for Business Prompts</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Prompt engineering for business focuses on ROI-driven prompts that automate workflows, optimize decisions,
              and quantify outcomes. Every effective business prompt follows this structure to deliver measurable value.
            </p>

            <Card className="p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-emerald-900/30 border-emerald-200 dark:border-emerald-800">
              <h3 className="text-2xl font-bold mb-6">Universal Business Prompt Template</h3>
              <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                {`Business: [INDUSTRY/STAGE/ARR]
Challenge: [PROBLEM] costing $[ESTIMATE]
Goal: [OUTCOME: revenue/ops/speed]
Constraints: [BUDGET/TIME/TEAM]

Analyze → Recommend → Prioritize → Implement
Quantify ROI where possible`}
              </pre>
              <p className="text-sm text-muted-foreground mt-4">
                Structure every prompt with business context, quantified pain, and measurable outcomes.
              </p>
            </Card>
          </section>

          <section id="sales" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Sales and Revenue Prompts</h2>

            <div className="space-y-6">
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Pipeline Prioritization Prompt</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Sales pipeline: [DEALS: Company|Stage|Value|Close Date|Signals]

1. Win probability scores (table)
2. Prioritized call list ($$ impact)
3. Risked revenue forecast
4. Objection handling scripts (top 3)
5. Next actions assigned

Output: Action-ready prioritization`}
                </pre>
                <p className="text-sm text-muted-foreground">Turns raw pipeline into prioritized revenue actions.</p>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Pricing Strategy Optimizer</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Current pricing: [TIERS/VALUES]
Competitors: [RANGE]
Churn: X%, CAC: $Y

Recommendations:
1. Price test experiments (3 variants)
2. Value metrics pricing shift
3. LTV:CAC optimization
4. Projected revenue lift (%)`}
                </pre>
                <p className="text-sm text-muted-foreground">Quantifies pricing impact before testing.</p>
              </Card>
            </div>
          </section>

          <section id="marketing" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Marketing and Growth Prompts</h2>

            <div className="space-y-6">
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Channel ROI Calculator</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Marketing spend: [CHANNEL → $SPENT → LEADS → CONVERSIONS → REVENUE]

Analysis:
| Channel | CAC | ROAS | Scalability | Recommendation |

ROI optimization plan (cut/scale/launch)`}
                </pre>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Content Investment Model</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Content performance: [TOPIC → VIEWS → LEADS → COST]

90-day plan:
1. High-ROI topics (table)
2. Production calendar (10 pieces)
3. Repurposing matrix
4. Expected pipeline value`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="operations" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Operations and Efficiency</h2>

            <div className="space-y-6">
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Process Bottleneck Auditor</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Process: [STEPS/DURATION/COST]
Pain: [DELAYS/ERRORS]

1. Bottleneck identification (fishbone diagram)
2. Quick wins (<1 week, >20% gain)
3. Automation candidates (ROI ranked)
4. Headcount tradeoff analysis`}
                </pre>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Hiring Prioritization Framework</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Open roles: [ROLE → SALARY → IMPACT METRIC]
Budget: $X, Growth target: Y%

Hire sequence:
1. Revenue impact first
2. Bottleneck relief
3. Strategic hires
Projected ARR acceleration`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="strategy" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Strategic Decision Prompts</h2>

            <div className="space-y-6">
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Market Entry Framework</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Market: [INDUSTRY/SIZE/TAM]
Competitors: [3-5]
Our advantage: [USP]

Go/no-go analysis:
1. TAM/SAM/SOM breakdown
2. Entry barriers + moats
3. MVP pricing/launch plan
4. Year 1 P&L projection`}
                </pre>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Product Prioritization (RICE)</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Features: [ID|Effort|Business Value|Risk]
Engineering capacity: 3 months

RICE scoring → Roadmap:
- Quarter 1-4 deliverables
- Revenue acceleration timeline
- Kill list (deprioritized)`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="optimization" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Prompt Optimization for Maximum ROI</h2>

            <Card className="p-8 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 mb-6">
              <h3 className="font-bold mb-4 text-emerald-900 dark:text-emerald-300">Impact Multiplier Checklist</h3>
              <ul className="space-y-3 text-sm text-emerald-800 dark:text-emerald-400">
                <li>☐ Quantifiable outcome? (Y/N) — If no, skip.</li>
                <li>☐ Time saved? (hours/week) — Calculate annual value: hours × $rate</li>
                <li>☐ $$ impact? (range: conservative/expected/upside)</li>
                <li>☐ Scalable? (team-wide, companywide?)</li>
              </ul>
              <p className="text-xs mt-4 text-emerald-700 dark:text-emerald-500">
                <strong>Rating:</strong> High/Med/Low → Deploy only High + some Med.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <h3 className="text-xl font-bold mb-4">Automation ROI Calculator Prompt</h3>
              <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                {`Manual process: [HOURS/WEEK × COST/HR = $]
AI prompt accuracy: 90%
Implementation: 2 days

Projected savings:
- Year 1 savings
- Year 2 savings
- Year 3 savings
- Break-even week
- Scale potential (10x?)`}
              </pre>
            </Card>
          </section>

          <section id="faq" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Business Prompting FAQ</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  How do I prove the ROI of a prompt?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Measure before and after: Time spent, error rate, output quality, decision speed. Calculate: (Before
                  Cost - After Cost) / Implementation Cost = ROI%. Run a pilot with 10% of team first, measure, then
                  scale.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  What if my team resists AI prompts?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Show them time savings first: "This prompt saves 2 hours/week." Frame as assistant, not replacement.
                  Start with high-value, low-risk tasks. Build credibility with small wins, then expand.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  How often should I refresh business prompts?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Quarterly. Market changes, business priorities shift. Measure effectiveness, iterate based on
                  feedback. Deprecate low-ROI prompts, invest in high-performers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  Can I automate this prompt across our team?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. Document the prompt, create SOP, train team. Version control prompts in Notion/Confluence. Use
                  webhooks or Zapier to chain prompts. Scale systematically, not ad-hoc.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  What's the fastest way to calculate ROI?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  (Hours Saved × Hourly Rate) - Implementation Cost = Annual ROI. For 100 hours/year saved at $50/hr:
                  $5,000 - $200 (implementation) = $4,800 ROI. Multiply by team size for companywide impact.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </section>

      <footer className="bg-muted py-16 px-6 md:px-12 mt-24 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-bold text-foreground mb-4">Business</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-foreground transition-colors">
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link href="/prompt-best-practices" className="hover:text-foreground transition-colors">
                  Best Practices
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Strategy</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/prompt-engineering-seo" className="hover:text-foreground transition-colors">
                  SEO Optimization
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
          <p>© 2026 GPTPrompts.AI. Master ROI-driven business prompts for quantified growth and automation.</p>
        </div>
      </footer>
    </main>
  )
}
