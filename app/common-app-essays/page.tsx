import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { BookMarked, PenTool } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Common App Essay Prompts 2026: How to Use AI for Your Personal Statement | GPTPrompts.AI",
  description:
    "Master Common Application essay prompts with our comprehensive guide. Strategies for all 7 prompts and proven techniques for your 650-word personal statement 2026.",
}

export default function CommonAppPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#2D5F7F] to-[#4A90C9] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <BookMarked className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Common App <br />
            <span className="italic opacity-90">Essays.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Your story matters. Master the 650-word personal statement that works for 1000+ colleges using strategic AI
            collaboration.
          </p>
          <div className="flex gap-4 pt-8">
            <div className="px-6 py-3 bg-white/20 rounded-full text-lg font-semibold">
              <span>Updated Dec 2026</span>
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="space-y-24">
          <article className="prose prose-lg prose-slate max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Understanding the Common App Essay's Purpose</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              The Common Application personal statement is your opportunity to share your story with over 1,000 colleges
              and universities. This 650-word essay is one of the most important pieces of your college application,
              revealing who you are beyond grades, test scores, and activities lists.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Strong Common App essays are deeply personal and reveal genuine insight, demonstrate self-awareness and
              maturity, use specific details and vivid storytelling, maintain authentic voice throughout, and show
              rather than tell who you are. This essay should make admissions officers feel like they know you after
              reading it.
            </p>
          </article>

          <section className="space-y-12 bg-slate-900 text-slate-100 p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#4A90C9] font-bold uppercase tracking-widest text-sm mb-6">
                <PenTool className="w-5 h-5" />
                <span>Understanding the Seven Prompts</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Seven Paths to Your Story</h2>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                The Common App offers seven intentionally broad prompts to allow maximum flexibility. Nearly any
                meaningful story can fit at least one prompt. Choose based on your story, not which prompt sounds most
                impressive.
              </p>
              <div className="space-y-8">
                <div className="p-8 bg-slate-800 rounded-2xl border border-white/5">
                  <h4 className="text-[#4A90C9] font-bold mb-4 uppercase tracking-widest text-xs">
                    Common App Prompts Overview:
                  </h4>
                  <ul className="space-y-4 text-sm opacity-70 list-disc list-inside">
                    <li>
                      Prompt 1: Background, identity, interest, or talent so meaningful your application would be
                      incomplete without it
                    </li>
                    <li>Prompt 2: A time you faced a challenge, setback, or failure and how you responded</li>
                    <li>Prompt 3: A time you questioned or challenged a belief or idea</li>
                    <li>Prompt 4: Reflecting on something someone has done for you that made you happy or grateful</li>
                    <li>Prompt 5: An accomplishment, event, or realization that sparked personal growth</li>
                    <li>Prompt 6: A topic, idea, or concept you find so engaging that you lose track of time</li>
                    <li>Prompt 7: Share an essay on any topic of your choice</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Building Effective AI Prompts for Common App Essays</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Successful AI-assisted Common App writing requires providing rich, specific context about your story,
              experiences, and what you want to convey. Generic prompts yield generic essays.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/20">
              <h3 className="text-2xl font-bold mb-4 text-[#4A90C9]">Effective Brainstorming Prompt</h3>
              <p className="text-sm leading-relaxed opacity-80">
                "I'm brainstorming Common App essay topics. My potential ideas include: learning to embrace my biracial
                identity after feeling caught between two cultures, overcoming my fear of public speaking by joining
                debate team, teaching my grandmother to use technology which deepened our relationship, my obsession
                with urban planning and how I spend hours on city design software, and failing to make varsity soccer
                and how that taught me about finding meaning beyond external validation. Help me evaluate which story
                would make the most compelling, revealing essay and which Common App prompt fits best."
              </p>
            </Card>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Common App Essay FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Which Common App prompt should I choose?",
                  a: "Choose based on which story best reveals who you are and what matters to you. Nearly any meaningful experience can fit one of the prompts.",
                },
                {
                  q: "How important is the opening hook?",
                  a: "Very important. Your opening sentences must immediately engage readers. Avoid generic statements and drop readers directly into a moment or vivid detail.",
                },
                {
                  q: "What's the ideal length for a Common App essay?",
                  a: "The limit is 650 words. Aim for using most of that space to develop your story fully with specific details and reflection rather than concluding early.",
                },
                {
                  q: "Should I write about challenges or achievements?",
                  a: "Either can work. Choose whichever story most authentically reveals your character, values, and personal growth.",
                },
                {
                  q: "How do I ensure my voice sounds authentic?",
                  a: "Write about something that genuinely matters to you, use language you actually speak, and avoid trying to sound impressive. Read your essay aloud to check for authenticity.",
                },
                {
                  q: "Can I write about a common topic like sports or family?",
                  a: "Yes, but make it specific and personal to you. Focus on what this experience uniquely taught you rather than general observations.",
                },
                {
                  q: "How much reflection should I include?",
                  a: "Balance showing (narrative, specific scenes) with telling (reflection on what it means). Avoid pure narrative without insight or essays that are only reflection.",
                },
                {
                  q: "Should I mention my intended major or career goals?",
                  a: "Only if it's central to your story. The Common App essay is about who you are, not necessarily what you want to do. Save career discussion for supplementals.",
                },
                {
                  q: "Can I use humor in my Common App essay?",
                  a: "Yes, if it's natural to you and reflects your authentic voice. Avoid trying too hard to be funny, which often comes across as forced.",
                },
                {
                  q: "How do I avoid writing a generic essay?",
                  a: "Focus on specific details unique to your experience. Include dialogue, sensory details, and reflection that reveals your thinking. Make every sentence advance your narrative.",
                },
                {
                  q: "Can AI help me write my Common App essay?",
                  a: "Absolutely. Use AI for brainstorming, organizing ideas, refining phrasing, and getting feedback. Ensure the final essay reflects your authentic voice and genuine experiences.",
                },
                {
                  q: "Should I get feedback from others?",
                  a: "Yes, from teachers, counselors, or mentors who know you well. Their feedback should help clarify your voice, not change your story or perspective.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#4A90C9] transition-colors text-left">
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
              The world's most comprehensive prompt engineering library. Master the machines, unleash your potential.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">University Essays</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "NYU Essays", href: "/nyu-essay-prompts" },
                { label: "Stanford Essays", href: "/stanford-essay-prompts" },
                { label: "UC Essays", href: "/uc-essay-prompts" },
                { label: "UMich Essays", href: "/umich-essay-prompts" },
                { label: "UT Austin Essays", href: "/ut-essay-prompts" },
                { label: "UW Essays", href: "/uw-essay-prompts" },
                { label: "Virginia Tech Essays", href: "/virginia-tech-essays" },
                { label: "Princeton Essays", href: "/princeton-essays" },
                { label: "UGA Essays", href: "/uga-essays" },
                { label: "Wisconsin Essays", href: "/wisconsin-essays" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary opacity-80 hover:opacity-100 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Test & Application Prep</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Common App Essays", href: "/common-app-essays" },
                { label: "Scholarship Essays", href: "/scholarship-essays" },
                { label: "SAT Prompts", href: "/sat-prompts" },
                { label: "IELTS Prompts", href: "/ielts-prompts" },
                { label: "TOEFL Prompts", href: "/toefl-prompts" },
                { label: "GRE Prompts", href: "/gre-prompts" },
                { label: "GMAT Prompts", href: "/gmat-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Core Resources</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Journal Guide", href: "/journal-guide" },
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
