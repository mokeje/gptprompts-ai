import { Card } from "@/components/ui/card"
import Link from "next/link"
export const metadata = {
  title: "ChatGPT Prompt Examples: 100+ Real-World Use Cases for 2026 | GPTPrompts.AI",
  description:
    "100+ tested ChatGPT prompts organized by industry: marketing, programming, education, and more. Copy-paste templates for immediate use.",
}

export default function ChatGPTUseCasesPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <header className="bg-teal-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            100+ Use
            <br />
            <span className="italic">Cases.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            Real-world ChatGPT examples for marketing, coding, education, and productivity. Copy-paste ready.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-4xl font-bold mb-6">Categorized Prompt Libraries</h2>
          <Card className="bg-teal-50 p-6 my-8">
            <h4 className="font-bold mb-3">I. Marketing & Growth</h4>
            <p className="font-mono text-sm mb-3 bg-white p-3 rounded">
              "Analyze customer reviews. Identify emotional 'jobs' they're hiring our product for."
            </p>
          </Card>
        </article>
      </section>

      <footer className="bg-muted py-20">
        <div className="text-xs text-center text-muted-foreground">© 2026 GPTPrompts.AI</div>
      </footer>
    </main>
  )
}
