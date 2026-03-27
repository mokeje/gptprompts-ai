import { Card } from "@/components/ui/card"
import Link from "next/link"
export const metadata = {
  title: "ChatGPT JSON Prompting: A Developer's Guide to Structured Data 2026 | GPTPrompts.AI",
  description:
    "Master JSON prompting with Schema-First methodology, function calling, strict output templates, and debugging hallucinations for LLM integration.",
}

export default function JSONPromptingPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-cyan-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            JSON
            <br />
            <span className="italic">Prompting.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            Structured data every time. Schema enforcement and function calling for production-grade AI integrations.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-4xl font-bold mb-6">The Schema-First Methodology</h2>
          <p>Getting "chatty" responses is a liability. You need Strictly Typed JSON every time.</p>
          <Card className="bg-cyan-50 border-cyan-200 p-6 my-8">
            <h4 className="font-bold mb-3">Strict Output Template</h4>
            <p className="font-mono text-xs bg-white p-4 rounded border">
              Return JSON only. No markdown. Schema defined above. [INPUT_TEXT]
            </p>
          </Card>
        </article>
      </section>

      <footer className="bg-muted py-20 px-6 md:px-12">
        <div className="text-xs text-muted-foreground text-center">© 2026 GPTPrompts.AI</div>
      </footer>
    </main>
  )
}
