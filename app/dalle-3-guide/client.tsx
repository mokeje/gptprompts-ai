"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function ClientPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-indigo-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            DALL-E 3<br />
            <span className="italic">Visual Mastery.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed opacity-90">
            Master visual storytelling with DALL-E 3's semantic intelligence. Stop prompting, start directing.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto space-y-20">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-4xl font-bold mb-6">The Director's Chair Framework</h2>
          <p>
            DALL-E 3 interprets your prompt as a scene. Master DALL-E 3 by shifting from "prompt engineering" to "visual
            directing."
          </p>
          <Card className="bg-indigo-50 border-indigo-200 p-6 my-8">
            <h4 className="font-bold mb-4">The 4 Pillars of a Master Prompt</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <strong>Core Subject & Action:</strong> "A miniature astronaut harvesting glowing blue mushrooms"
              </li>
              <li>
                <strong>Environment & Atmosphere:</strong> "On the dark side of a crystalline moon, Earth visible as a
                marble"
              </li>
              <li>
                <strong>Lighting & Color:</strong> "Bioluminescence; deep indigos and neon cyans"
              </li>
              <li>
                <strong>Artistic Medium:</strong> "High-detail macro photograph with shallow depth of field"
              </li>
            </ul>
          </Card>
        </article>

        <article className="prose prose-lg max-w-none">
          <h2 className="text-4xl font-bold mb-6">Solving the "AI Text" Problem</h2>
          <p>DALL-E 3 uniquely renders legible text. Use quotation marks and spatial anchor keywords.</p>
          <Card className="bg-blue-50 border-blue-200 p-6">
            <p className="font-mono text-sm">
              "A storefront for a bakery called 'The Glazed Galaxy'. Text in gold 1950s neon font, centered above door."
            </p>
          </Card>
        </article>

        <section className="py-16 border-t">
          <h2 className="text-4xl font-bold mb-12">FAQ: DALL-E 3 Mastery</h2>
          <Accordion type="single" collapsible>
            {[
              {
                q: "How is DALL-E 3 different from Midjourney?",
                a: "DALL-E 3 excels with descriptive narrative and semantic understanding. Midjourney requires specialized 'tag' syntax. DALL-E 3 is more intuitive.",
              },
              {
                q: "Can I use DALL-E 3 for commercial work?",
                a: "Yes. DALL-E 3 images created via ChatGPT or API are owned by you and can be used commercially without restrictions.",
              },
              {
                q: "What's the 'Meta-Visual' prompt technique?",
                a: "Ask ChatGPT to list 5 visual elements that would make a concept authentic BEFORE generating. Then generate with those elements.",
              },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-6">
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </section>

      <footer className="bg-muted py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-muted-foreground text-center">© 2026 GPTPrompts.AI</p>
        </div>
      </footer>
    </main>
  )
}
