import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Lightbulb, Zap } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Princeton Essay Prompts 2026: How to Use AI for Princeton Essays | GPTPrompts.AI",
  description:
    "Master Princeton essay prompts with our comprehensive guide. Advanced strategies, intellectual frameworks, and proven techniques for Princeton supplemental essays 2026.",
}

export default function PrincetonPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#003366] to-[#FF6600] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Lightbulb className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Princeton <br />
            <span className="italic opacity-90">Essays.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Intellectual brilliance meets authentic voice. Master Princeton's most competitive essays with sophisticated
            AI collaboration strategies.
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">Understanding Princeton's Standards</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Princeton stands among the world's most prestigious institutions, seeking students with extraordinary
              intellectual curiosity, authentic passion for learning, and clear commitment to service. With acceptance
              rates among the lowest in the nation, your essays must demonstrate not merely excellence but
              exceptionalism.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Princeton's supplemental essays include questions about your academic interests, extracurricular
              engagement, and what you'll contribute to Princeton's distinctive community. These essays are critical for
              distinguishing yourself among thousands of academically brilliant applicants.
            </p>
          </article>

          <section className="space-y-12 bg-slate-900 text-slate-100 p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#FF6600] font-bold uppercase tracking-widest text-sm mb-6">
                <Zap className="w-5 h-5" />
                <span>Advanced Prompting Strategy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Intellectual Depth in AI Collaboration
              </h2>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                Princeton essays require extraordinary intellectual sophistication. Effective AI prompts must reflect
                genuine scholarly depth, original thinking, and clear articulation of how Princeton's specific resources
                enable your intellectual and personal growth.
              </p>
              <div className="space-y-8">
                <div className="p-8 bg-slate-800 rounded-2xl border border-white/5">
                  <h4 className="text-[#FF6600] font-bold mb-4 uppercase tracking-widest text-xs">
                    Princeton Essay Foundation:
                  </h4>
                  <ul className="space-y-4 text-sm opacity-70 list-disc list-inside">
                    <li>Your intended field and specific intellectual passions</li>
                    <li>Specific Princeton professors, labs, or research that fascinates you</li>
                    <li>Your own scholarly work or intellectual achievements</li>
                    <li>How you'll use Princeton's resources for meaningful research or learning</li>
                    <li>Your vision for long-term intellectual and professional impact</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Princeton Academic Interest Essays</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Princeton asks students to write about their academic interests with sophistication and depth. These
              essays must demonstrate genuine intellectual passion, specific knowledge of Princeton's offerings, and
              clear articulation of how Princeton will enable your scholarly development.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/20">
              <h3 className="text-2xl font-bold mb-4 text-[#FF6600]">Sophisticated Prompt Example</h3>
              <p className="text-sm leading-relaxed opacity-80">
                "Help me write about my fascination with neuroscience and philosophy of mind. I'm genuinely interested
                in how neural mechanisms inform philosophical questions about consciousness. I've read extensively in
                both fields, conducted psychology research on perception, and taken advanced philosophy courses. I want
                to write about my interest in Princeton's Neuroscience certificate, Professor Uri Hasson's research on
                social cognition, and opportunities to work across the neuroscience institute and philosophy department.
                Show me how to demonstrate intellectual sophistication and original thinking without sounding
                pretentious."
              </p>
            </Card>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Princeton Essays FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How important is specific knowledge of Princeton programs?",
                  a: "Extremely important. Princeton wants students who have researched thoroughly and can articulate why their specific programs, professors, and resources align with their intellectual goals.",
                },
                {
                  q: "Should I write about the residential college system?",
                  a: "Only if it genuinely matters to you and you've learned about its specifics. Admissions can tell if you're including it as a checkbox versus genuine enthusiasm.",
                },
                {
                  q: "What's the difference between Princeton's expectations and other elite universities?",
                  a: "Princeton emphasizes undergraduate focus, mentorship, and residential college community alongside academic excellence. Your essays should reflect these unique elements.",
                },
                {
                  q: "How do I demonstrate intellectual brilliance without arrogance?",
                  a: "Balance confidence with intellectual humility. Show genuine curiosity, acknowledge areas you want to explore further, and demonstrate openness to learning from Princeton's community.",
                },
                {
                  q: "Can I write about extracurriculars instead of academics?",
                  a: "Princeton has separate prompts for different areas. Ensure you're addressing each prompt specifically rather than substituting one for another.",
                },
                {
                  q: "How specific should I be about research interests?",
                  a: "Very specific. Rather than 'interested in physics,' discuss particular questions, problems, or phenomena that fascinate you and how Princeton's resources enable exploring them.",
                },
                {
                  q: "Should I mention Princeton's motto or traditions?",
                  a: "Reference them authentically if they connect to your specific experience or interests. Focus on substance rather than demonstrating you can recite facts.",
                },
                {
                  q: "What if my interests span multiple disciplines?",
                  a: "Princeton values interdisciplinary thinking. Clearly articulate how your interests connect and how Princeton's certificate programs or cross-departmental opportunities enable your work.",
                },
                {
                  q: "How do I write about service at a research university?",
                  a: "Discuss how you'll use your education to create meaningful impact. Princeton values service and social responsibility alongside academic achievement.",
                },
                {
                  q: "Can AI help with complex intellectual ideas?",
                  a: "Yes. AI can help organize sophisticated ideas, refine argumentation, and provide feedback on clarity. Ensure the ideas and voice remain authentically yours.",
                },
                {
                  q: "How important is the 'Why Princeton' essay?",
                  a: "Very important. It demonstrates research, genuine interest, and specific fit. Combined with your academic interest essay, it shows you understand what makes Princeton distinctive.",
                },
                {
                  q: "What's the biggest mistake in Princeton essays?",
                  a: "Generic statements that could apply to any elite university. Princeton values specificity, intellectual depth, and genuine understanding of what makes Princeton unique.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#FF6600] transition-colors text-left">
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

      {/* ... existing footer ... */}
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
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/princeton-essays" ? "text-[#FF6600] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
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
