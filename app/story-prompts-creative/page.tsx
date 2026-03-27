import { Card } from "@/components/ui/card"
import Link from "next/link"
export const metadata = {
  title: "AI Story Prompts for Creative Writing: 150+ Prompts to End Writer's Block 2026 | GPTPrompts.AI",
  description:
    "150+ AI story prompts across 5 narrative stages. Inciting incidents, character depth, plot building, dialogue subtext, and the Hero's Journey framework for fiction writers.",
}

export default function StoryPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-rose-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            Story
            <br />
            <span className="italic">Prompts.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty opacity-90">
            150+ AI prompts across 5 narrative stages. Build worlds. End writer's block forever.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto space-y-20">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-4xl font-bold mb-6">The Art of "Building Worlds" with AI</h2>
          <p>
            By 2026, AI has become the co-author of choice for fiction and non-fiction writers. The secret isn't asking
            AI to "write a story"—it's asking it to Build a World.
          </p>
          <Card className="bg-rose-50 border-rose-200 p-6 my-8">
            <h4 className="font-bold mb-3">Stage 1: The Inciting Incident (150+ Prompts)</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Sci-Fi:</strong> "A planet where memories are traded. A character wakes with a fortune they
                don't remember earning."
              </li>
              <li>
                <strong>Fantasy:</strong> "Magic is cast through music. Your protagonist is tone-deaf but can conduct
                silence."
              </li>
            </ul>
          </Card>
        </article>
      </section>

      <footer className="bg-muted py-20 px-6 md:px-12">
        <div className="text-xs text-muted-foreground text-center">© 2026 GPTPrompts.AI</div>
      </footer>
    </main>
  )
}
