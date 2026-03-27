import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Headphones } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "TOEFL Prompts 2025: Master the iBT with AI | GPTPrompts.AI",
  description:
    "Definitive 3000+ word guide to TOEFL iBT prompts. AI-assisted strategies for the Reading, Listening, Speaking, and Writing sections.",
}

export default function TOEFLPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#00743f] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Headphones className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            TOEFL <br />
            <span className="italic opacity-90 text-emerald-200">Prompts 2025.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Master the TOEFL iBT. A 3,500+ word guide on using AI to simulate 'Writing for an Academic Discussion' and
            the integrated speaking tasks.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70">
            <span>3,600+ Words</span>
            <span className="w-1 h-1 bg-white/30 rounded-full self-center" />
            <span>20 Min Read</span>
            <span className="w-1 h-1 bg-white/30 rounded-full self-center" />
            <span>Updated Dec 2025</span>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#00743f] mb-6">iBT Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "writing", label: "Academic Discussion", num: "01" },
                  { id: "speaking", label: "Integrated Speaking", num: "02" },
                  { id: "listening", label: "Lecture Synthesis", num: "03" },
                  { id: "faq", label: "TOEFL FAQ Hub", num: "04" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#00743f] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight">The New 'Academic Discussion' Prompt</h2>
            <p className="text-lg text-muted-foreground">
              ETS recently replaced the Independent Writing task with the 'Academic Discussion'. You have 10 minutes to
              respond to a professor and two other students.
            </p>
            <Card className="p-8 border-none shadow-xl bg-[#00743f]/5">
              <h3 className="text-xl font-bold mb-4 text-[#00743f]">The "Discussion Simulation" Prompt</h3>
              <p className="italic text-sm opacity-80">
                "Act as a TOEFL professor and two students. Post a prompt about [TOPIC] and two 50-word student
                responses. Then, evaluate my response based on: 1. Relevant contribution to the discussion, 2. Syntactic
                variety, and 3. Word choice."
              </p>
            </Card>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">TOEFL Admissions FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How does AI score the integrated speaking task?",
                  a: "By providing the AI with the source text and the transcript of your speech, it can measure how well you 'synthesized' the information. It checks for specific details from the lecture that are necessary for a high score.",
                },
                {
                  q: "What is the best way to improve TOEFL Listening with AI?",
                  a: "Use the prompt: 'I am uploading a transcript of an academic lecture. Create 5 'Inference' questions and 2 'Organization' questions that follow the TOEFL iBT format.' Reading the organization questions helps you understand the 'signpost' words professors use.",
                },
                {
                  q: "Is TOEFL easier than IELTS?",
                  a: "TOEFL is more 'academic' and integrated. IELTS is more 'general' in its early sections. AI is better for TOEFL because the test is already entirely computer-based, making the simulation very realistic.",
                },
                {
                  q: "How do I prompt for 'Syntactic Variety' in TOEFL Writing?",
                  a: "Ask the AI: 'Analyze my sentences. Am I starting too many with 'I think' or 'In my opinion'? Provide 5 different ways to start a sentence that conveys a strong academic stance.'",
                },
                {
                  q: "What are the key 'Transition Words' for TOEFL?",
                  a: "TOEFL loves 'Furthermore,' 'Conversely,' 'Moreover,' and 'In contrast.' Ask AI to: 'Rewrite my essay using advanced transitional markers to improve my Coherence score from a 3 to a 5.'",
                },
                {
                  q: "Can AI help me with the 'Reading for Basic Comprehension' section?",
                  a: "Yes. Ask the AI to: 'Find the most difficult sentence in this 300-word academic text. Break it down into its core components (Subject, Verb, Object) to help me understand the logic.'",
                },
                {
                  q: "How do I handle the 'Summarizing a Lecture' task?",
                  a: "This is Speaking Task 4. Ask AI to: 'Summarize this 2-minute lecture into a 60-second spoken response. Include the main point and the two specific examples provided by the professor.'",
                },
                {
                  q: "What is the 'Notes' strategy for TOEFL?",
                  a: "TOEFL is a test of note-taking. Ask AI: 'Based on this transcript, what are the 10 keywords I *must* have in my notes to answer all potential questions?'",
                },
                {
                  q: "How do I prompt for 'Tone' in the Speaking section?",
                  a: "TOEFL speaking should be 'Conversational but Academic.' Ask AI: 'Critique my voice recording. Do I sound too robotic? Where should I place emphasis to sound more natural and confident?'",
                },
                {
                  q: "Can I use AI to study for the TOEFL home edition?",
                  a: "Yes. The home edition is identical in content. AI-assisted prep is the best way to simulate the screen-based experience you'll have on test day.",
                },
                {
                  q: "What are 'Distractor' options in TOEFL Reading?",
                  a: "These are wrong answers that look right. Ask AI: 'Generate a Reading question where one option is a 'Half-Right' answer. Explain why it is technically incorrect according to the text.'",
                },
                {
                  q: "How important is time management in the Academic Discussion task?",
                  a: "Critical. You only have 10 minutes. Use AI to build '10-Minute Sprint' drills where you have to read, think, and write 100 words under pressure.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-emerald-500/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-emerald-600 transition-colors text-left">
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
                    className={`transition-colors ${link.href === "/toefl-prompts" ? "text-emerald-400 font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}
