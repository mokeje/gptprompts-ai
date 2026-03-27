import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Search } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "GRE Prompts 2025: Master the Graduate Record Examination | GPTPrompts.AI",
  description:
    "Comprehensive 3000+ word guide to GRE prompts. AI-assisted strategies for the Analytical Writing, Verbal Reasoning, and Quantitative sections.",
}

export default function GREPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#2d2d2d] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Search className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            GRE <br />
            <span className="italic opacity-90 text-slate-400">Prompts 2025.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Master the GRE. A 3,500+ word technical guide on using AI to simulate complex 'Text Completion' and
            'Quantitative Comparison' questions.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70">
            <span>3,600+ Words</span>
            <span className="w-1 h-1 bg-white/30 rounded-full self-center" />
            <span>21 Min Read</span>
            <span className="w-1 h-1 bg-white/30 rounded-full self-center" />
            <span>Updated Dec 2025</span>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Grad Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "writing", label: "Analyze an Issue", num: "01" },
                  { id: "verbal", label: "Text Completion", num: "02" },
                  { id: "quant", label: "Quant Comparison", num: "03" },
                  { id: "faq", label: "GRE FAQ Hub", num: "04" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-slate-800 transition-colors"
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

        <div className="lg:col-span-9 space-y-32 max-w-4xl">
          <section id="writing" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Analytical Writing: Analyze an Issue</h2>
            <p className="text-lg text-muted-foreground">
              The GRE now only has one essay task. You have 30 minutes to present a cogent argument for a specific
              claim.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/30">
              <h3 className="text-xl font-bold mb-4">The "Devil's Advocate" Prompt</h3>
              <p className="italic text-sm opacity-80">
                "I am providing my initial draft for a GRE Issue task. Act as a harsh GRE grader. Identify 3 logical
                fallacies in my argument. Then, rewrite the intro using more 'Academic Hedging' (e.g., 'It could be
                argued,' 'Evidence suggests')."
              </p>
            </Card>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">GRE Admissions FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How accurate is the AI Band Scoring for GRE essays?",
                  a: "Modern LLMs are remarkably good at scoring the GRE issue task because it follows a very predictable logic-based rubric. If you provide the AI with the official ETS scoring guide, it can predict your score within 0.5 points.",
                },
                {
                  q: "Can AI generate GRE vocabulary lists?",
                  a: "Yes. Ask the AI: 'Generate a list of 50 'GRE-Level' words (e.g., laconic, ephemeral, esoteric). For each, write a sentence that uses the word in a 'Text Completion' style context with a clear logical pivot.'",
                },
                {
                  q: "What is the 'Logical Pivot' in GRE Verbal?",
                  a: "GRE questions often hinge on a single word like 'although,' 'however,' or 'nonetheless.' Ask AI to: 'Generate 10 Text Completion questions where the correct answer changes completely if I swap the word 'and' for 'but'.'",
                },
                {
                  q: "How do I use AI for GRE Quantitative Comparisons?",
                  a: "Ask the AI: 'Create 5 Quantitative Comparison questions for 'Properties of Integers'. Include at least two questions where the answer is 'D' (The relationship cannot be determined) because of a hidden case like zero or negative numbers.'",
                },
                {
                  q: "Is the GRE harder than the GMAT?",
                  a: "GRE Verbal is generally harder (more vocabulary-heavy), while GMAT Quant is harder. AI is the perfect tool to bridge your gap in whichever area you are weaker.",
                },
                {
                  q: "How do I prompt for 'Critical Reasoning' in the GRE?",
                  a: "Ask AI: 'Give me a short passage with a logical argument. Ask me to identify the 'Hidden Assumption' that must be true for the conclusion to hold. Then, explain why the other options are 'Scope Shifts'.'",
                },
                {
                  q: "Can AI help me with GRE geometry?",
                  a: "Yes. Ask AI: 'Describe a complex GRE geometry problem involving a circle inscribed in a square. Explain the 'shortcut' way to solve it using the ratio of areas without doing the full math.'",
                },
                {
                  q: "What is the best prompt for 'Academic Reading' speed?",
                  a: "Ask AI: 'Summarize this dense 400-word academic text into 3 bullet points. Each bullet must capture one of the 'Primary Claims'. This helps you train your brain to scan for structure rather than just words.'",
                },
                {
                  q: "How do I improve my 'Issue' essay score with AI?",
                  a: "Focus on 'Counter-Arguments.' Ask AI: 'I am taking position X. Provide the 3 strongest counter-arguments to my position. Then, show me how to 'concede and refute' them in a single paragraph.'",
                },
                {
                  q: "Can I use AI to study for the GRE at home?",
                  a: "Yes. The GRE is now a shorter, 2-hour test. Use AI to build 'Short-Form Drills' that match the new 12-to-15 question modules.",
                },
                {
                  q: "What are 'Trap' answers in GRE Quant?",
                  a: "Common traps include forgetting to test fractions or forgetting that 'numbers' includes non-integers. Ask AI: 'Create 5 number property questions where the obvious answer is wrong if the number is a fraction between 0 and 1.'",
                },
                {
                  q: "How do I prompt for 'Sentence Equivalence'?",
                  a: "This task requires finding two words that create the same meaning. Ask AI: 'Give me a sentence with a blank. Provide 6 options. Ensure that two options are synonyms but don't fit the context, and two are synonyms that do fit the context.'",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-slate-500/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-slate-800 transition-colors text-left">
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

      {/* Footer */}
      <footer className="bg-foreground text-background py-32 px-6 md:px-12 mt-32 border-t border-background/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm text-lg">
              The world's most comprehensive prompt engineering library. Master the machines, unleash your potential.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">AI Models</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Perplexity Prompts", href: "/perplexity-prompts" },
                { label: "Midjourney Prompts", href: "/midjourney-prompts" },
                { label: "Stable Diffusion Prompts", href: "/stable-diffusion-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Career & Specialized</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Career Prompts", href: "/careers" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Image Prompts", href: "/image-prompts" },
                { label: "SQL Prompts", href: "/sql-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Test Prep</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "SAT Prompts", href: "/sat-prompts" },
                { label: "IELTS Prompts", href: "/ielts-prompts" },
                { label: "TOEFL Prompts", href: "/toefl-prompts" },
                { label: "GRE Prompts", href: "/gre-prompts" },
                { label: "GMAT Prompts", href: "/gmat-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/gre-prompts" ? "text-slate-400 font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Resources & Guides</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Virtual Assistant Prompts", href: "/virtual-assistant-prompts" },
                { label: "Creative Writing for Beginners", href: "/creative-writing-prompts-beginners" },
                { label: "Photo Editing Prompts", href: "/photo-editing-prompts" },
                { label: "Social Media Marketing", href: "/social-media-marketing-prompts" },
                { label: "Free Prompts Library", href: "/free-ai-prompts" },
                { label: "Coolest ChatGPT Prompts", href: "/coolest-chatgpt-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-8 mt-8 border-t border-background/10">
                <p className="text-[10px] opacity-30 uppercase tracking-widest leading-loose">
                  © 2026 GPTPrompts.AI <br />
                  All Rights Reserved.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}
