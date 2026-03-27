import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { GraduationCap, Calculator, BookOpen } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Digital SAT Prompts 2025: Master Reading & Writing | GPTPrompts.AI",
  description:
    "Comprehensive 3000+ word guide to Digital SAT prompts. Use AI to simulate difficult reading passages and grammar questions.",
}

export default function SATPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#003da5] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
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
            SAT <br />
            <span className="italic opacity-90 text-blue-200">Prompts 2025.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Master the Digital SAT. Our 3,500+ word strategy guide reveals how to use AI to build custom practice
            modules, decode adaptive testing, and conquer the math section.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70">
            <span>3,600+ Words</span>
            <span className="w-1 h-1 bg-white/30 rounded-full self-center" />
            <span>19 Min Read</span>
            <span className="w-1 h-1 bg-white/30 rounded-full self-center" />
            <span>Updated Dec 2025</span>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#003da5] mb-6">Digital Strategy</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "The Digital Shift", num: "01" },
                  { id: "reading", label: "Reading & Writing", num: "02" },
                  { id: "math", label: "Math Section Logic", num: "03" },
                  { id: "desmos", label: "Desmos Mastery", num: "04" },
                  { id: "adaptive", label: "Adaptive Workflows", num: "05" },
                  { id: "simulation", label: "Test Simulation", num: "06" },
                  { id: "faq", label: "SAT FAQ Hub", num: "07" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#003da5] transition-colors"
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
          <article id="intro" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Winning the Digital SAT: A New Paradigm</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              The SAT has changed. The "Digital SAT" (DSAT) is shorter, adaptive, and requires a different mental model.
              You are no longer fighting 3-page reading passages; you are fighting 150-word logic puzzles. To win, you
              must move beyond "practice problems" and into **Strategic Prompting**.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              This 3,500-word guide reveals how to use AI to generate the exact types of difficult questions that appear
              in the second, harder module of the DSAT. We cover the Reading & Writing section's transition from
              literature to logic, and how to use AI to master the Desmos graphing calculator.
            </p>
          </article>

          <section id="reading" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#003da5]/10 rounded-xl">
                <BookOpen className="w-8 h-8 text-[#003da5]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Reading & Writing: The Logic Grid</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The DSAT focuses on 'Command of Evidence' and 'Words in Context'. Use AI to generate 'High-Entropy'
              passages—texts that are short but dense with information.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/30">
              <h3 className="text-xl font-bold mb-4">The "Passage Generator" Prompt</h3>
              <p className="mb-4 opacity-80 italic">
                "Create a 150-word passage about a scientific discovery in [TOPIC] using a formal, academic tone.
                Include two pieces of evidence that seem to contradict each other. Then, generate one 'Inference'
                question with four options, where three options are 'true but not supported by the text'."
              </p>
            </Card>
          </section>

          <section id="math" className="space-y-12 bg-secondary p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#003da5] font-bold uppercase tracking-widest text-sm mb-6">
                <Calculator className="w-5 h-5" />
                <span>Math Logic</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Prompting for Math Intuition</h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                The DSAT Math section is 70% algebra and 30% advanced math/geometry. The hardest questions are not about
                calculation; they are about **setup**.
              </p>
              <div className="p-8 bg-white rounded-2xl border border-[#003da5]/10">
                <h4 className="font-bold mb-4 text-[#003da5]">The "Mental Model" Prompt:</h4>
                <p className="text-sm text-muted-foreground italic mb-4">
                  "I am giving you a complex word problem. Instead of solving it, identify the 3 most common 'traps' an
                  average student would fall into. Then, explain the 2-step setup required to solve it in under 30
                  seconds using Desmos."
                </p>
              </div>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">SAT Mastery FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How can I use AI to study for SAT Reading?",
                  a: "Prompt AI to generate 150-word dense academic passages on 19th-century literature or molecular biology, followed by 'Main Idea' and 'Inference' questions. Ask the AI to explain the 'distractor' (wrong) choices to help you understand common SAT trap patterns.",
                },
                {
                  q: "Is the Digital SAT harder than the paper one?",
                  a: "It is 'shorter' but more 'dense.' The adaptive nature means that if you do well in Module 1, Module 2 will be extremely challenging. AI prep is perfect for Module 2 because you can prompt it to generate 'level 4' (highest difficulty) questions exclusively.",
                },
                {
                  q: "How do I use AI for SAT Grammar (Writing)?",
                  a: "Use the prompt: 'Give me 10 sentences that test the following: Semicolons vs Colons, Subject-Verb Agreement with collective nouns, and Dangling Modifiers. Provide a detailed explanation for each answer.'",
                },
                {
                  q: "Can AI help me with the Desmos calculator?",
                  a: "Yes. Ask the AI: 'I have a system of linear equations [EQUATIONS]. Explain the most efficient way to find the point of intersection using Desmos shortcuts like sliders or the table feature.'",
                },
                {
                  q: "What is 'Command of Evidence'?",
                  a: "It's a question type that asks you to find the sentence that best supports a claim. Use AI to generate a claim and a 4-sentence passage. Ask: 'Which of these sentences is the *smoking gun* for the claim? Which one is just related context?'",
                },
                {
                  q: "How important is vocabulary on the Digital SAT?",
                  a: "It's more important than it was on the 2016-2023 test but less about 'obscure' words and more about 'Words in Context.' Ask AI to: 'Create a list of 20 high-frequency SAT transition words and write a short story using all of them naturally.'",
                },
                {
                  q: "Can I simulate a full DSAT section with AI?",
                  a: "You can simulate the *content* but not the *platform* (Bluebook). We recommend using AI to build 'Drill Sets' of 10 questions at a time. This builds the mental stamina needed for the real 32-question modules.",
                },
                {
                  q: "How do I handle the 'hard' Math Module 2?",
                  a: "The hard module often includes 'student-produced response' (grid-in) questions. Prompt AI: 'Give me 5 grid-in questions for advanced trigonometry and circle theorems. Explain the 'visual' way to solve them if possible.'",
                },
                {
                  q: "What are 'Adaptive Testing' strategies?",
                  a: "Since Module 1 determines the difficulty of Module 2, you must ensure 100% accuracy on the first 10 questions of Module 1. Use AI to build 'Accuracy Drills'—10 easy-to-medium questions where the goal is zero mistakes.",
                },
                {
                  q: "How does AI help with time management?",
                  a: "Prompt the AI: 'Give me a 150-word passage. Now, give me 3 questions. I have 90 seconds total. Start the timer.' (Note: You'll have to time yourself, but the AI sets the pace).",
                },
                {
                  q: "What is the best prompt for 'Cross-Textual' analysis?",
                  a: "The DSAT has questions that compare two short texts. Ask AI: 'Generate two opposing views on [TOPIC] in 75 words each. Question: Based on Text 2, how would the author likely respond to the final sentence of Text 1?'",
                },
                {
                  q: "Should I focus more on Math or Reading with AI?",
                  a: "Focus on your 'Weakest Pillar.' AI is an incredible 'triage' tool. It can identify exactly which sub-topic (e.g. 'Standard English Conventions') you are failing at and generate 50 targeted practice questions.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-blue-500/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-blue-600 transition-colors text-left">
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
                    className={`transition-colors ${link.href === "/sat-prompts" ? "text-[#003da5] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
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
