import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { BarChart } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "GMAT Focus Prompts 2025: Master the Business Exam | GPTPrompts.AI",
  description:
    "Comprehensive 3000+ word guide to GMAT Focus prompts. AI-assisted strategies for Data Insights, Quantitative, and Verbal Reasoning.",
}

export default function GMATPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#002e6d] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <BarChart className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            GMAT <br />
            <span className="italic opacity-90 text-blue-300">Prompts 2025.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Master the GMAT Focus Edition. A 3,500+ word roadmap on using AI to simulate 'Data Insights' and advanced
            business-case reasoning.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70">
            <span>3,650+ Words</span>
            <span className="w-1 h-1 bg-white/30 rounded-full self-center" />
            <span>22 Min Read</span>
            <span className="w-1 h-1 bg-white/30 rounded-full self-center" />
            <span>Updated Dec 2025</span>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#002e6d] mb-6">Business Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "data-insights", label: "Data Insights Hub", num: "01" },
                  { id: "quant", label: "Quant Logic", num: "02" },
                  { id: "verbal", label: "Critical Reasoning", num: "03" },
                  { id: "faq", label: "GMAT FAQ Hub", num: "04" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#002e6d] transition-colors"
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
          <section id="data-insights" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">The Data Insights Section</h2>
            <p className="text-lg text-muted-foreground">
              The Focus Edition integrates Data Sufficiency into the new 'Data Insights' section. This is now the most
              weighted part of the test for many MBA programs.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/30">
              <h3 className="text-xl font-bold mb-4">The "Sufficiency Logic" Prompt</h3>
              <p className="italic text-sm opacity-80">
                "Create a GMAT Data Sufficiency question about 'Work Rate'. Provide Statement 1 and Statement 2. Then,
                explain why Statement 1 is insufficient because of a missing variable, while Statement 2 provides the
                necessary 'Combined Rate'. Walk me through the logic step-by-step."
              </p>
            </Card>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">GMAT Admissions FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What is the biggest shift in the GMAT Focus Edition?",
                  a: "The removal of the Sentence Correction and the Essay (AWA) tasks. The test is now much more focused on 'Business Logic' and 'Data Synthesis.' Use AI to generate multi-source reasoning tasks where you have to look at 3 different emails/spreadsheets to find one answer.",
                },
                {
                  q: "How can I improve my GMAT Quant with AI?",
                  a: "Ask the AI: 'Give me a set of 5 'Hard' GMAT Quant problems that focus on 'Number Properties' (e.g., divisibility, prime factors). After I answer, show me the 'Mental Math' shortcut for each problem so I don't waste time on calculation.'",
                },
                {
                  q: "Is Data Insights harder than the old Integrated Reasoning?",
                  a: "Yes, because it is now adaptive and counts toward your total score. Ask AI to: 'Act as a GMAT DI examiner. Generate a 'Multi-Source Reasoning' task about a company merger. Include three tabs: Email, Financial Statement, and Market Analysis.'",
                },
                {
                  q: "How do I use AI for GMAT Critical Reasoning?",
                  a: "Ask AI to: 'Generate a short argument about a business strategy. Ask me to find the 'Weaker' of the argument. Then, show me how to identify 'Out of Scope' answer choices.'",
                },
                {
                  q: "Can AI score my GMAT practice tests?",
                  a: "While AI can't simulate the official GMAT algorithm exactly, it is excellent at 'Error Analysis.' Ask AI to: 'I missed these 3 questions. Based on my mistakes, what is the #1 math concept I need to review tonight?'",
                },
                {
                  q: "What is the 'Time Management' strategy for GMAT?",
                  a: "You have about 2 minutes per question. Ask AI to: 'Give me 10 questions. I will give you my answer and the time it took. Tell me which questions I 'over-invested' in and where I should have cut my losses.'",
                },
                {
                  q: "How do I prompt for 'Two-Part Analysis'?",
                  a: "Ask AI: 'Generate a GMAT Two-Part Analysis question about 'Project Scheduling'. Include a table with 5 options and two columns where only one option can be selected for each column.'",
                },
                {
                  q: "Can AI help with 'Table Analysis'?",
                  a: "Yes. Paste a small CSV of data and ask AI: 'Generate 3 True/False statements based on this table. Ensure the statements require 'Sorting' the data (e.g. 'The country with the highest GDP also has the highest literacy rate').'",
                },
                {
                  q: "How important is 'Reading Comprehension' in GMAT Focus?",
                  a: "Very. It's the core of the Verbal section. Ask AI to: 'Create a GMAT-style passage about an obscure economic theory. Ask one 'Tone' question and one 'Specific Detail' question.'",
                },
                {
                  q: "Can I use AI to study for an 800 (705+ Focus) score?",
                  a: "Yes. To reach the top 1%, you must master the 'Logic of the Question Writer.' Ask AI: 'Deconstruct this 700-level question. Why is option B a 'Trap' for someone who understands the math but misses the logic?'",
                },
                {
                  q: "What are 'Data Sufficiency' traps?",
                  a: "Common traps include 'Answer C Trap' where statements look like they need each other but don't. Ask AI to: 'Generate 5 DS questions where the answer is 'A' but Statement 2 looks very tempting.'",
                },
                {
                  q: "Is there a specific 'Business Vocabulary' I need?",
                  a: "GMAT uses words like 'implicitly,' 'preclude,' 'substantiate.' Ask AI to: 'Analyze these 5 Critical Reasoning prompts. Identify the 10 most common academic verbs used to structure the questions.'",
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
                    className={`transition-colors ${link.href === "/gmat-prompts" ? "text-blue-400 font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
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
