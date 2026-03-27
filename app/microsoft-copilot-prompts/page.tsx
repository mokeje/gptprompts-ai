import { Card } from "@/components/ui/card"
import Link from "next/link"
export const metadata = {
  title: "Best Microsoft Copilot Prompts: The Ultimate Enterprise Workflow Guide 2026 | GPTPrompts.AI",
  description:
    "Enterprise-grade Microsoft Copilot prompts. M365 workflows, Teams recaps, Excel analytics, Power BI strategies, and Graph grounding techniques.",
}

export default function MicrosoftCopilotPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="bg-blue-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            Microsoft
            <br />
            <span className="italic">Copilot Enterprise.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            The central nervous system of M365. Prompts for Teams, Excel, Power BI, and Graph grounding.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-4xl font-bold mb-6">The Four-Part Architecture</h2>
          <Card className="bg-blue-50 p-6">
            <ul className="space-y-2">
              <li>Goal</li>
              <li>Context</li>
              <li>Expectations</li>
              <li>Source</li>
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
