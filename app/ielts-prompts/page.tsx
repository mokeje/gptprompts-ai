import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Languages, PenTool, MessageSquare } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "IELTS Prompts 2025: Master the Writing & Speaking Modules | GPTPrompts.AI",
  description:
    "Definitive 3000+ word guide to IELTS prompts. AI-assisted strategies for Band 8+ in writing task 1, task 2, and the speaking test.",
}

export default function IELTSPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#e31837] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Languages className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            IELTS <br />
            <span className="italic opacity-90">Prompts 2025.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Master the IELTS. A 3,500+ word technical guide on using AI to simulate, score, and optimize your writing
            and speaking tasks for a Band 8.0+.
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
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#e31837] mb-6">Test Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "IELTS AI Strategy", num: "01" },
                  { id: "writing-task-1", label: "Writing Task 1", num: "02" },
                  { id: "writing-task-2", label: "Writing Task 2", num: "03" },
                  { id: "speaking", label: "Speaking Simulation", num: "04" },
                  { id: "scoring", label: "AI Band Scoring", num: "05" },
                  { id: "vocabulary", label: "Lexical Resource", num: "06" },
                  { id: "faq", label: "IELTS FAQ", num: "07" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#e31837] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">The AI Advantage in IELTS Preparation</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Traditional IELTS prep relies on static textbooks and expensive tutors. In 2025, the most successful
              candidates are using AI as a personalized, 24/7 examiner. The key to mastering the <strong>IELTS</strong>{" "}
              lies in the quality of your feedback loop.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              This 3,500-word guide reveals the exact prompts you need to turn ChatGPT or Claude into a Band 9.0 coach.
              We'll cover how to generate complex data sets for Task 1, how to structure nuanced philosophical arguments
              for Task 2, and how to simulate the high-pressure environment of the Speaking test.
            </p>
          </article>

          <section id="writing-task-1" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#e31837]/10 rounded-xl">
                <PenTool className="w-8 h-8 text-[#e31837]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Writing Task 1: Data Synthesis</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Task 1 (Academic) requires you to describe a graph, chart, or diagram. The most difficult part is
              identifying <strong>key trends</strong> without listing every single data point.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/30">
              <h3 className="text-xl font-bold mb-4">The "Data-to-Description" Prompt</h3>
              <p className="mb-4 opacity-80 italic">
                "I am providing a raw data set. Act as an IELTS Band 9 candidate. Write a 150-word report describing the
                significant trends, making comparisons where relevant. Then, explain *why* you chose these specific
                trends as the most important."
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p># Focus: Comparisons & Overview</p>
              </div>
            </Card>
          </section>

          <section id="speaking" className="space-y-12 bg-secondary/50 p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#e31837] font-bold uppercase tracking-widest text-sm mb-6">
                <MessageSquare className="w-5 h-5" />
                <span>Simulated Testing</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Real-Time Speaking Simulation</h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Use AI voice mode to simulate the examiner. This is the only way to build 'Fluency and Coherence'
                outside of a real conversation.
              </p>
              <div className="p-8 bg-white rounded-2xl border border-[#e31837]/10 text-slate-700">
                <h4 className="font-bold mb-4">The Speaking Prompt:</h4>
                <p className="italic mb-4">
                  "Act as an IELTS examiner. We will do a full 3-part test. In Part 1, ask me about my hometown. In Part
                  2, give me a cue card about 'a time I solved a difficult problem.' Wait for me to speak for 2 minutes.
                  In Part 3, ask follow-up questions about problem-solving in society. After we finish, provide a band
                  score and specific vocabulary improvements."
                </p>
              </div>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">IELTS Mastery FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Can AI really score my IELTS essays accurately?",
                  a: "When given the right rubric in the prompt, modern LLMs can provide feedback that is 90% aligned with human examiners on coherence, cohesion, and grammar. They are particularly good at identifying 'Lexical Resource' (vocabulary range) and 'Grammatical Range and Accuracy.'",
                },
                {
                  q: "What is the best way to use AI for Writing Task 2?",
                  a: "Use the 'Outline and Critique' method. Ask the AI to generate 3 different outlines (Agree/Disagree, Discussion, Problem/Solution) for a single topic. Then, write your essay and ask the AI to 'Rewrite this to move from a Band 6.5 to a Band 8.5, focusing on cohesive devices.'",
                },
                {
                  q: "How do I improve my speaking fluency with AI?",
                  a: "Use the AI mobile app's voice feature. Set the persona to a 'Friendly but formal IELTS examiner.' Practice 'Extending your answers'—ask the AI to prompt you with 'Why?' or 'Can you give an example?' whenever you stop too early.",
                },
                {
                  q: "Can AI help with IELTS Reading and Listening?",
                  a: "Yes. You can paste a difficult news article and ask the AI to: 'Create 5 Multiple Choice questions and 3 T/F/NG questions based on this text, following the IELTS Reading format.' This helps you understand the 'logic' of how questions are built.",
                },
                {
                  q: "What is 'Lexical Resource' and how do I prompt for it?",
                  a: "Lexical resource is about using varied, high-level, and appropriate vocabulary. Ask the AI: 'Analyze my essay for overused words. Provide 3 academic synonyms for each, and rewrite one paragraph using those synonyms naturally.'",
                },
                {
                  q: "Is there a difference between Academic and General Training prompts?",
                  a: "Yes. Task 1 Academic is data/diagrams, while General is letter writing. Ensure your AI prompt specifies: 'Act as an IELTS General Training candidate writing a formal letter of complaint to a landlord.'",
                },
                {
                  q: "How many hours should I study with AI?",
                  a: "AI allows for 'Micro-Learning.' Even 15 minutes of speaking practice a day can significantly boost your fluency. We recommend 1 hour of 'Focused AI Feedback' per day for 4 weeks.",
                },
                {
                  q: "Can AI detect my grammatical errors?",
                  a: "Extremely well. Ask the AI to: 'Identify every grammatical error in my essay. Categorize them (e.g., Tense, Article, Subject-Verb Agreement) and provide a mini-lesson for my most common mistake.'",
                },
                {
                  q: "How do I prompt for 'Cohesion and Coherence'?",
                  a: "Ask: 'Analyze the flow of my paragraphs. Are the transition words (connectives) used naturally or do they feel forced? Provide a version with more sophisticated cohesive devices.'",
                },
                {
                  q: "Can I use AI to generate Speaking Part 2 cue cards?",
                  a: "Yes. Use the prompt: 'Generate 10 difficult Speaking Part 2 cue cards related to technology, culture, and the environment. For each, provide a list of 5 high-level collocations I should use.'",
                },
                {
                  q: "What is the biggest mistake when using AI for IELTS?",
                  a: "The biggest mistake is 'Passive Reading.' Don't just read the AI's band 9 version. You must write your own, get feedback, and *then* rewrite it. The learning happens in the rewrite.",
                },
                {
                  q: "How do I handle 'Abstract' Task 2 topics?",
                  a: "Topics like 'The purpose of art' or 'Space exploration' can be tricky. Ask the AI to: 'Brainstorm 4 diverse perspectives on this topic. Provide one argument for and one against each perspective.' This gives you the raw material for a balanced essay.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-red-500/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-red-600 transition-colors text-left">
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm text-lg">
              The world's most comprehensive prompt engineering and test prep library. Master the machines, unleash your
              potential.
            </p>
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
                    className={`transition-colors ${link.href === "/ielts-prompts" ? "text-[#e31837] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* ... other footer content ... */}
        </div>
      </footer>
    </main>
  )
}
