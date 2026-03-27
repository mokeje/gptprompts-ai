import { Card } from "@/components/ui/card"
import Link from "next/link"
export const metadata = {
  title: "Prompt Injection & AI Security: Protecting Your Enterprise Systems 2026 | GPTPrompts.AI",
  description:
    "AI security whitepaper: direct injection, indirect injection, context confusion. 5-layer defensive blueprint. Red teaming strategies.",
}

export default function PromptSecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="bg-red-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            AI
            <br />
            <span className="italic">Security.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            Prompt injection mitigation. Defense-in-depth strategies for enterprise AI systems.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-4xl font-bold mb-6">The 3 Main Attack Vectors</h2>
          <Card className="bg-red-50 p-6">
            <ul className="space-y-2">
              <li>Direct Injection (Jailbreaking)</li>
              <li>Indirect Injection (RAG attacks)</li>
              <li>Context Confusion (Formatting tricks)</li>
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
