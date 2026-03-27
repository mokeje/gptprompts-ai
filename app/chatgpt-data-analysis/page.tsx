"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useEffect } from "react"

export default function DataAnalysisPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "ChatGPT for Data Analysis: Prompts for Insights and Visualization",
      description:
        "Master ChatGPT for data analysis with structured prompts for trend detection, anomaly discovery, statistical interpretation, and actionable business insights.",
      author: { "@type": "Organization", name: "GPTPrompts.AI" },
    }
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }, [])

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            ChatGPT for Data Analysis
          </h1>
          <p className="text-xl max-w-3xl opacity-90">
            Turn raw data into actionable insights with AI-powered prompts for trend detection, statistical analysis,
            and executive reporting.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-6">Guide Sections</h3>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { id: "intro", label: "Data Analysis Overview", num: "01" },
                { id: "exploration", label: "Data Exploration", num: "02" },
                { id: "statistical", label: "Statistical Analysis", num: "03" },
                { id: "visualization", label: "Visualization Engine", num: "04" },
                { id: "insights", label: "Actionable Insights", num: "05" },
                { id: "advanced", label: "Advanced Analytics", num: "06" },
                { id: "practical", label: "Practical Examples", num: "07" },
                { id: "best-practices", label: "Best Practices", num: "08" },
                { id: "faq", label: "FAQ", num: "09" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-center justify-between hover:text-cyan-600 transition-colors"
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
              <span className="text-sm font-bold text-cyan-600 uppercase">01</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">ChatGPT for Data Analysis Overview</h2>
            </div>
            <div className="prose prose-lg max-w-none space-y-4">
              <p>
                ChatGPT accelerates data analysis by turning raw numbers into actionable insights through structured
                prompts that identify trends, anomalies, and recommendations. Data analysts and marketers use these
                analytics prompts to interpret datasets, generate visualization ideas, and communicate findings to
                stakeholders without coding from scratch.
              </p>
              <Card className="p-6 bg-cyan-50 border-cyan-200">
                <h4 className="font-bold mb-3">Core Capabilities:</h4>
                <ul className="space-y-2 text-sm">
                  <li>✓ Dataset quality assessment and cleaning recommendations</li>
                  <li>✓ Anomaly and outlier detection with severity ratings</li>
                  <li>✓ Correlation analysis and causation checking</li>
                  <li>✓ Statistical significance evaluation</li>
                  <li>✓ Visualization type recommendations</li>
                  <li>✓ Business impact quantification</li>
                  <li>✓ Actionable recommendation generation</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="exploration" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-cyan-600 uppercase">02</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Data Exploration and Cleaning Prompts</h2>
            </div>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Initial Dataset Overview</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm mb-4">
                  {`Analyze this dataset summary: [PASTE METADATA: rows, columns, types, sample values].

Output structured analysis:
1. **Data Quality**: Missing values? Duplicates? Outliers?
2. **Key Distributions**: Skewness patterns, categorical imbalances
3. **Correlation Signals**: Top 3 potential relationships  
4. **Recommended Cleaning**: Specific steps prioritized by impact
5. **Analysis Priority**: Top 3 questions this data can answer`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Anomaly Detection</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`Review these data points for anomalies: [PASTE DATA OR SUMMARY].

Flag:
- Statistical outliers (IQR method)
- Business rule violations 
- Trend breaks
- Seasonal anomalies

For each: Severity (Critical/High/Medium), potential causes, investigation steps.`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="statistical" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-cyan-600 uppercase">03</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Statistical Analysis Prompts</h2>
            </div>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Correlation and Causation Checker</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm mb-4">
                  {`Given these correlations: [VARIABLE PAIRS + COEFFS]

Assess:
1. **Statistical significance**: Likely noise vs signal?
2. **Business plausibility**: Makes causal sense?
3. **Confounding variables**: What might explain both?
4. **Actionable experiments**: How to test causality?

Output: Risk-rated recommendations (Safe to act / Needs validation / Likely spurious).`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">A/B Test Result Interpreter</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`A/B test results:
Variant A: [METRIC=VALUE, N=SAMPLE_SIZE, CONFIDENCE]
Variant B: [METRIC=VALUE, N=SAMPLE_SIZE, CONFIDENCE]

Analysis:
1. Winner declaration + p-value
2. Practical significance (effect size)
3. Subgroup analysis suggestions
4. Confidence intervals visualization description
5. Implementation recommendation`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="visualization" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-cyan-600 uppercase">04</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Visualization Recommendation Engine</h2>
            </div>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Chart Type Selector</h3>
              <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                {`Dataset characteristics: [NUMERICAL/CATEGORICAL, DIMENSIONS, TREND/COMPARISON/RANKING GOAL]

Recommend 3 visualization types with:
Chart | Why This Chart | X-Axis | Y-Axis | Color Encoding | Annotations Needed
------|---------------|---------|---------|----------------|------------------
[Row] | [ ] | [ ] | [ ] | [ ] | [ ]

Include accessibility + stakeholder communication considerations.`}
              </pre>
            </Card>
          </section>

          <section id="insights" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-cyan-600 uppercase">05</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Actionable Insights Generator</h2>
            </div>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Business Impact Calculator</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm mb-4">
                  {`Key findings: [LIST 3-5 STATISTICALLY SIGNIFICANT RESULTS]

Translate to business impact:
1. **Revenue Impact**: $$ quantification or range
2. **Customer Impact**: Retention/churn/LTV effects  
3. **Operational Levers**: What dials to turn
4. **Quick Wins**: 30-day actions (<$5K budget)
5. **Strategic Implications**: 12-month roadmap shifts`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Customer Segmentation Storyteller</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`Segmentation results: [CLUSTER DESCRIPTIONS + SIZES + KEY TRAITS].

Create customer journey narratives:
Segment 1: "Meet Sarah..." [pain points → current behavior → ideal solution]
Segment 2: etc.

Marketing recommendations per segment (personalization tactics).`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-cyan-600 uppercase">09</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Can ChatGPT replace data analysts?",
                  a: "No. ChatGPT is a force-multiplier. It handles interpretation, visualization recommendations, and report writing. Analysts focus on strategy and deeper investigation.",
                },
                {
                  q: "How do I format data for analysis prompts?",
                  a: "Paste metadata summaries (rows, columns, sample values) or statistical summaries (min/max/mean). Full datasets usually exceed token limits.",
                },
                {
                  q: "What statistical methods does ChatGPT understand?",
                  a: "ChatGPT understands common methods (t-tests, chi-square, correlation, regression concepts) but isn't a replacement for statistical software.",
                },
                {
                  q: "How accurate is ChatGPT's p-value interpretation?",
                  a: "Good for general guidance, but always verify critical calculations with proper statistical tools. Use ChatGPT for interpretation, not computation.",
                },
                {
                  q: "Can I use these prompts for client reporting?",
                  a: "Absolutely. ChatGPT excels at executive summaries, visualization descriptions, and business impact narratives for stakeholder communication.",
                },
                {
                  q: "How do I handle large datasets with ChatGPT?",
                  a: "Summarize first: provide column definitions, sample rows, and key statistics. Let ChatGPT recommend analysis approaches.",
                },
                {
                  q: "What's the best way to ask for trend analysis?",
                  a: "Provide time series data with dates. Ask for: trend direction, seasonality patterns, anomalies, and forecasting recommendations.",
                },
                {
                  q: "Can ChatGPT help with dashboard design?",
                  a: "Yes. Describe metrics, audience, and goals. ChatGPT recommends chart types, KPI focus, and layout structure.",
                },
                {
                  q: "How do I validate ChatGPT's recommendations?",
                  a: "Cross-check insights against domain expertise, validate statistical reasoning, and test recommendations with controlled experiments.",
                },
                {
                  q: "What's the difference between ChatGPT and SQL for analysis?",
                  a: "ChatGPT is for interpretation, storytelling, and recommendations. SQL is for extracting and aggregating data. Use both together.",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded px-4">
                  <AccordionTrigger className="hover:text-cyan-600">{item.q}</AccordionTrigger>
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
                <Link href="/chatgpt-prompts" className="hover:text-cyan-600">
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-role-based-prompting" className="hover:text-cyan-600">
                  Role-Based Prompting
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-code-generation" className="hover:text-cyan-600">
                  Code Generation
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-api-prompting" className="hover:text-cyan-600">
                  API Prompting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Business Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/best-chatgpt-marketing-prompts" className="hover:text-cyan-600">
                  Marketing Prompts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-business-productivity" className="hover:text-cyan-600">
                  Business Productivity
                </Link>
              </li>
              <li>
                <Link href="/prompt-engineering-fundamentals" className="hover:text-cyan-600">
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/few-shot-prompting" className="hover:text-cyan-600">
                  Few-Shot Prompting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Other Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/claude-artifacts-guide" className="hover:text-cyan-600">
                  Claude Artifacts
                </Link>
              </li>
              <li>
                <Link href="/gpt-o1-guide" className="hover:text-cyan-600">
                  GPT-o1 Guide
                </Link>
              </li>
              <li>
                <Link href="/avoiding-hallucinations" className="hover:text-cyan-600">
                  Avoiding Hallucinations
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-cyan-600">
                  View All Pages
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-cyan-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/journal-guide" className="hover:text-cyan-600">
                  Journal Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t text-sm text-center text-muted-foreground">
          <p>
            © 2026 GPTPrompts.AI. Master data analysis, statistical interpretation, and business insights with AI
            prompts.
          </p>
        </div>
      </footer>
    </main>
  )
}
