"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Database, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function PromptDataAnalysisPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Prompt Engineering for Data Analysis: Extracting Insights with AI",
      description: "Master analytical prompting to transform raw data into actionable insights using AI",
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
      title: "Mastering the Advanced Data Analysis Engine",
      content:
        "The role of the Data Analyst has been fundamentally redefined. In 2026, technical analysts use Analytical Prompting to bridge the gap between raw Python code and natural language insights.",
    },
    {
      id: "cleaning",
      title: "Data Cleaning & Pre-processing",
      content: `The Cleaning Prompt: "The following dataset has inconsistent date formats and missing values in the 'Revenue' column. Standardize all dates to ISO 8601 and impute missing revenue based on the average of the surrounding 3 months."`,
    },
    {
      id: "stats",
      title: "Statistical Interpretation",
      content: `Don't just ask for a chart; ask for the Significance.
      "Analyze this A/B test result. Is the 2% increase in conversion statistically significant? Calculate the p-value and explain the result to a non-technical stakeholder."`,
    },
    {
      id: "bridging",
      title: "Bridging AI and SQL/Python",
      content: `A critical skill is using AI to write Complex Queries:
      • Generating recursive CTEs in SQL
      • Writing Pandas scripts for multi-dimensional array manipulation
      • Automating data visualization prompts for Matplotlib and Seaborn`,
    },
    {
      id: "aeo",
      title: "AEO Strategy: The Data Insight Schema",
      content:
        "We include a section on how to prompt AI to output data in 'Insight Blocks'—a specific format that makes it easy for other AI systems to summarize executive dashboards.",
    },
  ]

  const faqs = [
    {
      q: "How do I ensure data privacy when using AI for analysis?",
      a: "Use anonymized datasets. Never paste sensitive customer data directly. Use local models or secure API endpoints.",
    },
    {
      q: "What's the best prompt structure for data cleaning?",
      a: "Be specific about issues: missing values, duplicates, outliers. Specify the output format (CSV, JSON, etc.).",
    },
    {
      q: "Can AI handle large datasets?",
      a: "For datasets >100MB, use chunking. Process data in batches and aggregate results.",
    },
    {
      q: "How accurate is AI-generated statistical analysis?",
      a: "Very accurate for standard tests (t-tests, ANOVA). Always verify with traditional tools for critical decisions.",
    },
    {
      q: "What's the cost of analyzing data with AI?",
      a: "Depends on dataset size and model. GPT-4 costs roughly $0.03-0.30 per analysis task.",
    },
    {
      q: "Can I prompt AI to create dashboards?",
      a: "Yes. It can generate Python code (Streamlit, Dash) or SQL queries for BI tools.",
    },
    {
      q: "How do I validate AI-generated insights?",
      a: "Cross-reference with domain experts. Run sensitivity analyses. Test on historical data.",
    },
    {
      q: "What's the best AI model for data analysis?",
      a: "Claude 3.5 Sonnet excels at SQL generation. GPT-4 is strong at statistical reasoning.",
    },
    {
      q: "Can AI detect anomalies in time-series data?",
      a: "Yes. Prompt it to identify statistical outliers, seasonal patterns, and trend breaks.",
    },
    {
      q: "How do I integrate AI analysis into my BI pipeline?",
      a: "Use APIs to call AI models within ETL workflows. Store prompts as templates for repeatability.",
    },
    {
      q: "What are common mistakes in analytical prompts?",
      a: "Being too vague, not specifying output format, ignoring context, forgetting to ask for methodology.",
    },
    {
      q: "Can I use chaining for complex analysis?",
      a: "Absolutely. Chain data cleaning → statistical testing → visualization → summary narrative.",
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            Data <br />
            <span className="italic opacity-90">Analysis.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed opacity-90">
            Transform raw data into actionable insights using analytical prompting techniques.
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Navigation */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-6">Sections</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {sections.map((section, idx) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-center justify-between hover:text-emerald-600 transition-colors"
                    >
                      <span>{section.title}</span>
                      <span className="text-xs font-bold text-emerald-600">{String(idx + 1).padStart(2, "0")}</span>
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
                <Database className="w-8 h-8 text-emerald-600" />
                {section.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
            </section>
          ))}

          {/* FAQ */}
          <section id="faq" className="scroll-mt-32">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
              FAQ
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
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-chaining-guide" className="hover:text-emerald-600">
                  Prompt Chaining
                </Link>
              </li>
              <li>
                <Link href="/advanced-prompt-engineering" className="hover:text-emerald-600">
                  Advanced
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Guides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-best-practices-15-rules" className="hover:text-emerald-600">
                  Best Practices
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Learning</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-engineering-jobs-2026" className="hover:text-emerald-600">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/chatgpt-json-prompting" className="hover:text-emerald-600">
                  JSON Prompting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-600">
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
