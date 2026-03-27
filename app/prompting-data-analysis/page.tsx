import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Prompting for Data Analysis: Extract AI Insights from Complex Data | GPTPrompts.AI",
  description:
    "Master data analysis with AI prompts. Learn to extract trends, anomalies, correlations, and actionable insights from datasets using structured prompting techniques.",
  keywords:
    "data analysis prompts, AI analytics, exploratory data analysis, statistical analysis, business intelligence, data visualization prompts",
}

export default function DataAnalysisPrompts() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-br from-[#0891b2] to-[#06b6d4] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <BarChart3 className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-70 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
            Data Analysis <br />
            <span className="italic opacity-90">Prompts.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Transform raw data into business intelligence. Use AI to explore datasets, identify patterns, test
            hypotheses, and generate actionable recommendations.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-6">Navigation</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "fundamentals", label: "Data Exploration", num: "01" },
                  { id: "eda", label: "EDA Prompts", num: "02" },
                  { id: "patterns", label: "Pattern Recognition", num: "03" },
                  { id: "statistical", label: "Statistical Analysis", num: "04" },
                  { id: "segmentation", label: "Segmentation", num: "05" },
                  { id: "insights", label: "Insights & Action", num: "06" },
                  { id: "visualization", label: "Visualization", num: "07" },
                  { id: "faq", label: "FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-cyan-600 transition-colors"
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
          {/* Section 1 */}
          <section id="fundamentals" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Data Exploration Fundamentals</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Prompting for data analysis turns AI into an analytical partner, extracting trends, anomalies, and
              recommendations from complex datasets via structured prompts. Data analysts, BI professionals, and
              business leaders use these prompts to interpret CSVs, reports, and visualizations.
            </p>

            <Card className="p-8 bg-card/50 border-border">
              <h3 className="text-2xl font-bold mb-6">Comprehensive Dataset Overview Prompt</h3>
              <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                {`Analyze this dataset [UPLOAD CSV or PASTE SUMMARY]:

1. **Structure**: Rows/cols/types/missing values (%)
2. **Distributions**: Skewness/outliers per numeric col
3. **Correlations**: Top 5 pairs (strength/direction)
4. **Segments**: Natural groupings/clusters
5. **Quality Issues**: Priorities + fixes

Provide: Summary table + 3 priority questions to ask next`}
              </pre>
            </Card>
          </section>

          {/* Section 2 - EDA */}
          <section id="eda" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Exploratory Data Analysis (EDA) Prompts
            </h2>

            <div className="space-y-6">
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Quick EDA Template</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`EDA for [DATA DESCRIPTION]:

- Key stats: mean/median/mode/IQR per column
- Visual suggestions: 3 chart types
- First insights: Hypotheses to test
- Cleaning plan: Step-by-step
- Missing data strategy`}
                </pre>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Time Series Analysis</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Analyze time series: [PASTE DATA or "Monthly sales 2020-2025"]

1. Trends: Growth/seasonality/cycles
2. Anomalies: Dates + magnitudes
3. Forecasts: Next 6 periods (method/confidence)
4. Drivers: Likely correlations
5. Interventions: When/impact?
Provide: Line chart description + forecast table`}
                </pre>
              </Card>
            </div>
          </section>

          {/* Section 3 - Patterns */}
          <section id="patterns" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Trend and Pattern Recognition</h2>

            <Card className="p-8 border-border">
              <h3 className="text-xl font-bold mb-4">Correlation Deep Dive</h3>
              <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                {`Find strongest relationships in [DATA]:

Create table: | Var1 | Var2 | Corr | P-value | Causal plausibility |

Analysis:
- Visualize top 3 as scatter + regression
- Business implications ranked
- Confounders to consider`}
              </pre>
            </Card>
          </section>

          {/* Section 4 - Statistical */}
          <section id="statistical" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Statistical Inference Prompts</h2>

            <div className="space-y-6">
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Hypothesis Testing Guide</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Test hypothesis: "[HYPOTHESIS]" on [DATA]

1. Statistical test recommended
2. Null/alternative clearly stated
3. P-value + interpretation
4. Effect size/practical significance
5. Conclusion + confidence level`}
                </pre>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">A/B Test Analyzer</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Analyze A/B test results:
Control: [METRIC=N, MEAN=VAL, SD=VAL]
Variant: [SAME]

Determine: Winner? CI? Power? Subgroups? Recommendations`}
                </pre>
              </Card>
            </div>
          </section>

          {/* Section 5 - Segmentation */}
          <section id="segmentation" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Customer Segmentation Prompts</h2>

            <Card className="p-8 border-border">
              <h3 className="text-xl font-bold mb-4">Customer/Product Clustering</h3>
              <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                {`Cluster analysis for [DATA: customer metrics]:

1. Natural segments (3-5)
2. Profiles: Traits + size (%)
3. Value differences (LTV/churn)
4. Strategies per segment
5. Validation metrics (silhouette score)

Output: Segment comparison matrix`}
              </pre>
            </Card>
          </section>

          {/* Section 6 - Insights */}
          <section id="insights" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Actionable Insight Generation</h2>

            <div className="space-y-6">
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Executive Summary Engine</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`From analysis [PASTE RESULTS], create executive brief:

1. The story (headline insight)
2. Key evidence (3 bullets)
3. Actions (prioritized table: Impact/Effort/Owner)
4. Risks/watch items
5. Next dataset to acquire`}
                </pre>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">KPI Impact Calculator</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Quantify business impact:

Finding: [INSIGHT]
Metrics affected: Revenue/churn/LTV
Magnitude: $$ range
Leverage points: Experiments to run
ROI estimate: Year 1/2/3`}
                </pre>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Data Analysis FAQ</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">What should I do with messy data?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Start with the data cleaning prompt: "First: Clean outliers/missing values → Then analyze." AI can
                  suggest handling methods like imputation, outlier removal, or data transformation strategies tailored
                  to your domain.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  How much data should I share with AI?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  For sensitive/confidential data, use hypothetical summaries or aggregated statistics instead of raw
                  data. Many organizations provide structure descriptions rather than actual values. Ensure compliance
                  with data privacy regulations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  What's the best way to present findings?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Use the Executive Summary Engine prompt for leadership, detailed statistical breakdowns for analysts,
                  and visualizations for all audiences. Always include confidence levels, assumptions, and recommended
                  next steps.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  Should I trust AI's statistical conclusions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Always verify AI outputs with domain expertise and traditional statistical software. AI excels at
                  pattern suggestion and interpretation but can have errors in complex calculations. Use AI to
                  accelerate hypothesis generation, then validate with rigorous methods.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  How do I choose which chart to use?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Use the Chart Selector prompt: provide your finding and data shape, and AI recommends the best
                  visualization type with reasoning. Match chart to insight (trends = line, distribution = histogram,
                  comparison = bar, relationships = scatter).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">What's correlation vs. causation?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Correlation shows variables move together; causation means one causes the other. AI can find
                  correlations easily but can't prove causation. Use the Causal Inference prompt to suggest controlled
                  experiments or quasi-experimental designs to test causality.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q7" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  How many segments should I create?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Usually 3-5 segments balance actionability with complexity. Too few miss nuance; too many become
                  unwieldy. Let silhouette scores and business logic guide you. Test segment strategies against business
                  KPIs to validate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q8" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">What's statistical significance?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A result is statistically significant if P-value &lt; 0.05 (typically), meaning results aren't likely
                  due to chance. However, statistical significance ≠ practical significance. A tiny effect can be
                  statistically significant but not business-meaningful.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q9" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">How do I handle outliers?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Don't automatically remove outliers—investigate first. They may be data errors, rare but real
                  phenomena, or valuable edge cases. Analyze with and without outliers; report both. Use domain
                  expertise to decide whether to include, transform, or flag them.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q10" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">What does p-value really mean?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  P-value is the probability of observing results as extreme (or more) if the null hypothesis were true.
                  Low P-value (&lt;0.05) suggests evidence against null. It's NOT the probability the hypothesis is
                  true. Common misconception: P &lt; 0.05 doesn't guarantee practical significance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16 px-6 md:px-12 mt-24 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-bold text-foreground mb-4">Analysis</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/prompt-engineering-fundamentals" className="hover:text-foreground transition-colors">
                  Fundamentals
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
            <h4 className="font-bold text-foreground mb-4">Business</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-foreground transition-colors">
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link href="/claude-prompts" className="hover:text-foreground transition-colors">
                  Claude Prompts
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
            <h4 className="font-bold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <a href="mailto:hello@gptprompts.ai" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 GPTPrompts.AI. Master data analysis with AI-powered prompting techniques.</p>
        </div>
      </footer>
    </main>
  )
}
