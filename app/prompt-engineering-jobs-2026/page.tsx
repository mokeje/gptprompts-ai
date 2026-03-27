import { Card } from "@/components/ui/card"
import { TrendingUp, Code, Shield } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Prompt Engineering Jobs & Salary Guide 2026: The New Career Frontier | GPTPrompts.AI",
  description:
    "2026 salary benchmarks for prompt engineers: Entry-level ($95-120k) to Executive ($250-450k+). Skills, job market analysis, and career pathways.",
}

export default function PromptEngineeringJobsPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CareerGuide",
    headline: "Prompt Engineering Jobs & Salary Guide 2026",
    description: "Comprehensive salary and career guide for prompt engineering roles",
    datePublished: "2026-01-07",
    jobCategories: [
      {
        "@type": "JobPosting",
        title: "AI Associate",
        salary: "$95,000 - $120,000",
        description: "Entry-level role focusing on basic prompt tuning and content auditing",
      },
      {
        "@type": "JobPosting",
        title: "Prompt Architect",
        salary: "$145,000 - $190,000",
        description: "Mid-career focusing on RAG pipelines and prompt versioning",
      },
      {
        "@type": "JobPosting",
        title: "Head of AI Strategy",
        salary: "$250,000 - $450,000+",
        description: "Executive role ensuring AI alignment and enterprise efficiency",
      },
    ],
  }

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8">
            Prompt Engineer <br />
            Salaries 2026
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-pretty leading-relaxed opacity-90">
            Complete salary breakdown, in-demand skills, and where the highest-paying jobs are in 2026.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              role: "AI Associate",
              salary: "$95k – $120k",
              icon: TrendingUp,
              focus: "Basic prompt tuning, content auditing",
            },
            {
              role: "Prompt Architect",
              salary: "$145k – $190k",
              icon: Code,
              focus: "RAG pipelines, prompt versioning",
            },
            {
              role: "Head of AI Strategy",
              salary: "$250k – $450k+",
              icon: Shield,
              focus: "AI alignment, enterprise safety",
            },
          ].map((item, i) => {
            const IconComponent = item.icon
            return (
              <Card key={i} className="p-8 border-2 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <IconComponent className="w-8 h-8 text-emerald-600" />
                  <div>
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <p className="text-2xl font-bold text-emerald-600">{item.salary}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{item.focus}</p>
              </Card>
            )
          })}
        </div>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12">Top 5 Required Skills for 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                skill: "Python Scripting",
                desc: "Programmatically call APIs and integrate models into workflows",
              },
              {
                skill: "Context Window Management",
                desc: "Feed optimal data into models without overflowing memory",
              },
              {
                skill: "Red Teaming",
                desc: "Break prompts to ensure no data leaks or biased outputs",
              },
              {
                skill: "Evaluation Metrics",
                desc: "Score AI outputs using BLEU, ROUGE, and LLM-as-a-judge frameworks",
              },
              {
                skill: "Multi-Modal Expertise",
                desc: "Craft prompts handling video, audio, and text simultaneously",
              },
              {
                skill: "Bonus: Domain Knowledge",
                desc: "Legal, healthcare, finance expertise commands premium salaries",
              },
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-secondary/20 border-none">
                <h3 className="font-bold text-lg mb-2 text-emerald-600">{item.skill}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12">Where the Highest-Paying Jobs Are</h2>
          <Card className="p-12 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200">
            <h3 className="text-2xl font-bold mb-8">Highly Regulated Industries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-emerald-900 mb-3">Legal & Finance</h4>
                <p className="text-muted-foreground">
                  Creating prompts that summarize 500-page contracts with 100% accuracy. Salary range: $180-320k.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-emerald-900 mb-3">Healthcare</h4>
                <p className="text-muted-foreground">
                  Orchestrating AI for diagnostic reports while maintaining HIPAA-level privacy. Salary range:
                  $200-400k.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </section>
    </main>
  )
}
