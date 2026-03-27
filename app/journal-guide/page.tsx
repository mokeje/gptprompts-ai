import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Wind } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "The Ultimate Guide to Journaling with Prompts for Self-Discovery | GPTPrompts.AI",
  description:
    "Unlock personal growth with our comprehensive guide on journaling with prompts. Explore journaling prompts for mental health, anxiety, self-discovery, and daily mindfulness.",
}

export default function JournalGuide() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-primary text-primary-foreground py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Wind className="w-full h-full rotate-45" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Journaling <br />
            <span className="italic font-serif opacity-90">with Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-3xl text-pretty leading-relaxed mb-10 opacity-90">
            Transform your mental health and unlock self-discovery through the power of guided writing. Our curated
            guide is your companion for inner peace.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70">
            <span>Last Updated Dec 2025</span>
          </div>
        </div>
      </header>

      {/* ... existing section and aside code ... */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* ... */}
        <div className="lg:col-span-9 space-y-32 max-w-4xl">
          {/* ... existing content ... */}
          {/* Habit Science Section */}
          <section id="habit-science" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">The Science of Reflective Writing</h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p>
                To achieve true depth in your journaling practice, we must look beyond the "what" and into the "why."
                Psychologists call the process of journaling 'Narrative Therapy.' When we write, we aren't just
                recording events; we are re-authoring our lives.
              </p>
              {/* ... */}
            </div>
          </section>

          {/* FAQ Section */}
          <section id="resources" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Journaling Strategy FAQ</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Finding the right journaling prompts book or digital medium is crucial for long-term consistency. Whether
              you prefer a physical book with prompts or a simple notepad, prioritize ease of use.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What should I look for in a journaling prompts book?",
                  a: "A good journaling prompts book should offer variety in prompt types, clear organization by category (mental health, creativity, etc.), and quality prompts that go beyond surface-level questions. Choose one that aligns with your specific goals—whether that's therapy-supportive or purely creative.",
                },
                {
                  q: "How often should I use daily journal prompts?",
                  a: "Consistency matters more than length. Five to ten minutes daily is ideal for building a sustainable habit. Using daily journal prompts removes decision fatigue, making it easier to stick with the practice during busy seasons.",
                },
                /* ... other items ... */
                {
                  q: "Is there a specific 'journaling prompts book' you recommend?",
                  a: "While there are many physical books, we believe a dynamic guide is more effective because it can be tailored to your changing mental state. However, 'The Artist's Way' is a classic for creative prompts.",
                },
                /* ... other items ... */
                {
                  q: "How do I handle writer's block during journaling?",
                  a: "Switch the format. If you've been writing essays, switch to 'Bullet Journaling' or 'Sketch Journaling.' The goal is the reflection, not the length—even though we've provided extensive guides here for your reference!",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-primary transition-colors text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xl leading-relaxed pt-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>
      {/* ... */}
    </main>
  )
}
