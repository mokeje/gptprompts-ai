import { Card } from "@/components/ui/card"
import Link from "next/link"
export const metadata = {
  title: "Prompt Caching: How to Reduce AI Costs and Latency by 90% 2026 | GPTPrompts.AI",
  description:
    "Developer guide to prompt caching: exact match, prefix, semantic caching. The Double Caching framework. ROI calculator for SaaS companies.",
}

export default function PromptCachingPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="bg-violet-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            Prompt
            <br />
            <span className="italic">Caching.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            Reduce AI costs by 90%. Double Caching framework for SaaS scale.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-4xl font-bold mb-6">The Caching Hierarchy</h2>
          <Card className="bg-violet-50 p-6">
            <ul className="space-y-3">
              <li>
                <strong>Exact Match:</strong> Same question → cached result
              </li>
              <li>
                <strong>Prefix:</strong> Cache system instructions
              </li>
              <li>
                <strong>Semantic:</strong> Vectorized matching
              </li>
            </ul>
          </Card>
        </article>
      </section>

      <footer className="bg-muted py-20">
        <div className="text-xs text-center text-muted-foreground">© 2026 GPTPrompts.AI</div>
      </footer>
    </main>
  )
}
