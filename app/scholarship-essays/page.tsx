import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Award, TrendingUp } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Scholarship Essay Prompts 2026: How to Use AI to Win Funding | GPTPrompts.AI",
  description:
    "Master scholarship essay prompts with our comprehensive guide. Strategies for essays that win funding and proven techniques to fund your education 2026.",
}

export default function ScholarshipPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#1B5E20] to-[#66BB6A] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Award className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Scholarship <br />
            <span className="italic opacity-90">Essays.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Fund your future. Master scholarship essays that convince committees to invest in your education and
            potential.
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">Understanding What Scholarship Committees Seek</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Scholarship essays represent crucial opportunities to fund your education while showcasing your
              achievements, goals, and potential. Unlike college admissions essays that focus on fit with specific
              institutions, scholarship essays must demonstrate why you deserve financial investment in your education
              and future.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Scholarship committees invest in students who demonstrate academic excellence and potential, clear goals
              and purpose, leadership and initiative, commitment to community or field, alignment with the scholarship's
              mission and values, and likelihood of making meaningful impact. Your essays must convince reviewers you're
              worth investing in financially.
            </p>
          </article>

          <section className="space-y-12 bg-slate-900 text-slate-100 p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#66BB6A] font-bold uppercase tracking-widest text-sm mb-6">
                <TrendingUp className="w-5 h-5" />
                <span>Strategic Scholarship Writing</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Building Your Investment Case</h2>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                Effective scholarship essay prompts require providing specific context about both you and the
                scholarship. Your essays must demonstrate why this particular scholarship's mission aligns with your
                goals and why you're an exceptional candidate for funding.
              </p>
              <div className="space-y-8">
                <div className="p-8 bg-slate-800 rounded-2xl border border-white/5">
                  <h4 className="text-[#66BB6A] font-bold mb-4 uppercase tracking-widest text-xs">
                    Scholarship Essay Foundation:
                  </h4>
                  <ul className="space-y-4 text-sm opacity-70 list-disc list-inside">
                    <li>Your academic achievements and GPA</li>
                    <li>Relevant extracurricular activities and leadership roles</li>
                    <li>Career goals and intended major</li>
                    <li>Financial circumstances if relevant</li>
                    <li>Community service or impact you've created</li>
                    <li>Challenges you've overcome</li>
                    <li>Specific information about the scholarship and its priorities</li>
                    <li>Alignment between your goals and the scholarship's mission</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Addressing Common Scholarship Essay Prompts</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Scholarship applications often include similar questions. Understanding how to approach each type will
              help you craft compelling responses that convince committees you deserve their investment.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/20">
              <h3 className="text-2xl font-bold mb-4 text-[#66BB6A]">
                Sample Prompt: Why Do You Deserve This Scholarship?
              </h3>
              <p className="text-sm leading-relaxed opacity-80">
                "I'm applying for the Smith Engineering Scholarship which prioritizes students pursuing engineering
                careers with demonstrated leadership and commitment to using engineering for social good. I have a 3.9
                GPA, lead my school's robotics team, volunteer teaching STEM to underserved students, and want to study
                civil engineering to work on sustainable infrastructure in developing communities. My family's income is
                below $50,000 and I'm first-generation college. Help me develop essay ideas that align with this
                scholarship's priorities while showcasing my unique qualifications and demonstrating this scholarship
                would be money well spent on my education and future impact."
              </p>
            </Card>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Scholarship Essay FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How important is researching the scholarship before writing?",
                  a: "Extremely important. Scholarship essays should be tailored to that specific scholarship's priorities and mission. Generic essays rarely win funding.",
                },
                {
                  q: "Should I write about financial need if not required?",
                  a: "Only if it's genuine and relevant to the scholarship's criteria. Focus on why you're a strong investment, not just need for funding.",
                },
                {
                  q: "How do I demonstrate return on investment?",
                  a: "Show your track record of achievement, clear and realistic plans, commitment to your goals, likelihood of completing your degree, and potential for future impact.",
                },
                {
                  q: "What makes a scholarship essay stand out?",
                  a: "Specificity about your goals, demonstrated achievement, clear alignment with the scholarship's mission, concrete details and examples, and genuine passion for your field.",
                },
                {
                  q: "Can I apply for multiple scholarships with the same essay?",
                  a: "Not directly, but you can create a strong foundation essay and tailor it to each scholarship's specific priorities and mission.",
                },
                {
                  q: "How important are numbers and metrics in scholarship essays?",
                  a: "Very important. Rather than saying you're a good student, mention your 3.95 GPA. Rather than saying you volunteer, specify 250 hours at the food bank.",
                },
                {
                  q: "Should I mention overcoming challenges?",
                  a: "Yes, if relevant. Frame challenges as opportunities that revealed your strength and determination, not as reasons you need money.",
                },
                {
                  q: "What if I don't have extensive community service?",
                  a: "That's okay. Focus on what you have done and what makes you a strong candidate. Committees value quality of impact over quantity of hours.",
                },
                {
                  q: "How do I write about career goals without sounding cliché?",
                  a: "Be specific about the problem you want to solve or the impact you want to create. Connect your goals to your background and experiences authentically.",
                },
                {
                  q: "Can AI help me write scholarship essays?",
                  a: "Absolutely. Use AI for brainstorming, organizing ideas, refining arguments, and getting feedback. Ensure every experience and goal is genuine and authentic.",
                },
                {
                  q: "How long should scholarship essays be?",
                  a: "Follow the application requirements exactly. If 500 words, aim for 500. If 250, stay concise. Missing word limits suggests lack of attention to detail.",
                },
                {
                  q: "What's the biggest scholarship essay mistake?",
                  a: "Writing generically without tailoring to the specific scholarship. Committees can tell if you're using the same essay for every scholarship.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#66BB6A] transition-colors text-left">
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
