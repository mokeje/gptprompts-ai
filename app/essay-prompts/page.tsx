import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GraduationCap } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Personal Statement & Essay Prompts: The Academic Guide | GPTPrompts.AI",
  description:
    "Master the art of academic writing with our guide to personal statements and essay prompts. Learn how to structure arguments and tell compelling stories.",
}

export default function EssayPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#4f46e5] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <GraduationCap className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Essay <br />
            <span className="italic opacity-90 text-indigo-200">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Tell your story, master the argument. Our academic hub reveals the personal statement and essay prompts that
            turn standard applications into acceptance letters.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70"></div>
        </div>
      </header>

      {/* ... rest of the file code skipped for brevity ... */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">Academic Excellence</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "The Power of Persuasion", num: "01" },
                  { id: "personal", label: "Personal Statement Hub", num: "02" },
                  { id: "argument", label: "Argumentative Essays", num: "03" },
                  { id: "narrative", label: "Narrative & Identity", num: "04" },
                  { id: "college", label: "College App Secrets", num: "05" },
                  { id: "structure", label: "The Master Structure", num: "06" },
                  { id: "llm", label: "AI Drafting Ethics", num: "07" },
                  { id: "faq", label: "Essay FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#4f46e5] transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-[10px] opacity-30 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        {/* Content Body */}
        <div className="lg:col-span-9 space-y-32 max-w-4xl">
          {/* ... existing sections ... */}
          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Essay Mastery FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How long should a personal statement be?",
                  a: "Most are between 500-800 words. Quality always beats quantity. A tight, well-argued essay is more impactful than a wandering longer one.",
                },
                {
                  q: "Should I use humor in my essays?",
                  a: "Only if you are naturally funny and it serves the point. Humor is high-risk, high-reward. If in doubt, stay professional but authentic.",
                },
                {
                  q: "How do I find a unique topic?",
                  a: "Don't look for a unique topic; look for a unique lens. Even a common experience like 'learning to cook' can be unique if you connect it to a deeper philosophical realization.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#4f46e5] transition-colors text-left">
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
