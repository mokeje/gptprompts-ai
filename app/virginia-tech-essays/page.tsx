import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Virginia Tech Essay Prompts 2026: How to Use AI for VT Essays | GPTPrompts.AI",
  description:
    "Master Virginia Tech essay prompts with our comprehensive guide. Get expert strategies, frameworks, and proven techniques for VT supplemental essays 2026.",
}

export default function VTPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#CC0000] to-[#8B4513] text-white py-32 px-6 md:px-12 relative overflow-hidden">
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
            Virginia Tech <br />
            <span className="italic opacity-90">Essays.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Master the "Ut Prosim" philosophy. Our definitive guide reveals strategic frameworks for compelling VT
            supplemental essays using AI collaboration.
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">Understanding Virginia Tech's Values</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Virginia Tech stands as a premier research university with a distinctive commitment to "Ut Prosim" (That I
              May Serve). The institution seeks students who demonstrate technical aptitude, community engagement,
              leadership, and authentic alignment with Hokie values. Strong VT essays showcase your understanding of the
              university's mission while revealing your individual perspective and genuine passion.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Virginia Tech's application typically includes the Common Application personal statement and supplemental
              essays specific to Virginia Tech. These supplemental essays provide your opportunity to demonstrate fit
              with VT's engineering excellence, service-oriented culture, and collaborative spirit.
            </p>
          </article>

          <section className="space-y-12 bg-slate-900 text-slate-100 p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#CC0000] font-bold uppercase tracking-widest text-sm mb-6">
                <BookOpen className="w-5 h-5" />
                <span>Building Effective AI Prompts</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Strategic Prompting for VT Essays</h2>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                Successful AI-assisted VT essays require providing detailed context about your experiences, academic
                interests, and specific knowledge of Virginia Tech. Generic prompts yield generic responses that won't
                distinguish you from thousands of other applicants.
              </p>
              <div className="space-y-8">
                <div className="p-8 bg-slate-800 rounded-2xl border border-white/5">
                  <h4 className="text-[#CC0000] font-bold mb-4 uppercase tracking-widest text-xs">
                    Foundation Context:
                  </h4>
                  <ul className="space-y-4 text-sm opacity-70 list-disc list-inside">
                    <li>Your intended college and major within Virginia Tech</li>
                    <li>Specific VT programs, facilities, or research that interest you</li>
                    <li>Relevant academic and extracurricular experiences</li>
                    <li>How you embody "Ut Prosim" values through service</li>
                    <li>Concrete reasons why Virginia Tech specifically appeals to you</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Mastering the "Why VT" Essay</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Virginia Tech's supplemental essays often ask why you're interested in attending and how you'll contribute
              to the Hokie community. This essay requires specific knowledge of VT's offerings and clear articulation of
              your fit with the university's mission.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/20">
              <h3 className="text-2xl font-bold mb-4 text-[#CC0000]">Effective Prompt Example</h3>
              <p className="text-sm leading-relaxed opacity-80">
                "Help me write a 'Why Virginia Tech' essay for the College of Engineering. I'm interested in the
                Aerospace Engineering program, particularly Space@VT initiatives, and the commitment to the Corps of
                Cadets. I've built model rockets, led STEM outreach to younger students, and believe engineers should
                solve problems that improve lives. Show me how to demonstrate genuine knowledge of VT without just
                listing programs."
              </p>
            </Card>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Virginia Tech Essay FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What does 'Ut Prosim' mean and why is it important?",
                  a: "'Ut Prosim' means 'That I May Serve' and represents Virginia Tech's commitment to using education and research for public good. Strong essays demonstrate you understand and embody this philosophy.",
                },
                {
                  q: "How specific should I be about VT programs?",
                  a: "Very specific. Rather than mentioning 'great engineering programs,' reference particular labs, professors, research initiatives, or facilities that genuinely excite you. Admissions officers can tell if you've done real research.",
                },
                {
                  q: "Should I mention the Corps of Cadets even if I'm not joining?",
                  a: "Only if you're genuinely interested. VT values the Corps culture but doesn't require membership. Focus on what specifically attracts you to VT rather than checking boxes.",
                },
                {
                  q: "How do I write about service if I haven't done formal volunteering?",
                  a: "Ut Prosim can be demonstrated through class projects, leadership roles, or community involvement. Show your commitment to service in whatever form is authentic to your experience.",
                },
                {
                  q: "What makes a VT essay stand out from other university essays?",
                  a: "Connection to specific VT elements—particular college culture, unique programs, the service mission—combined with reflection on how you'll contribute to the Hokie community.",
                },
                {
                  q: "How long should my VT supplemental essay be?",
                  a: "Check the application for specific word limits, typically 200-500 words. Quality over length; every sentence should advance your narrative and demonstrate fit.",
                },
                {
                  q: "Should I mention Blacksburg's location?",
                  a: "You can if it's genuinely meaningful to you—the mountain setting, close-knit community, research focus. Avoid generic statements about rural areas unless they connect to your actual interests.",
                },
                {
                  q: "How do I avoid sounding like I'm just attending for the name?",
                  a: "Demonstrate specific knowledge of VT's offerings, values, and culture. Show how VT's approach to education aligns with your goals, not just that you want a degree from VT.",
                },
                {
                  q: "Can I use AI to help organize my thoughts about VT?",
                  a: "Absolutely. AI can help brainstorm angles, organize ideas, refine phrasing, and provide feedback. Ensure the final essay reflects your authentic voice and genuine understanding of VT.",
                },
                {
                  q: "What if I'm applying to multiple VTs programs?",
                  a: "Tailor each essay to the specific program or college. While VT's broader mission remains consistent, different colleges have distinct cultures and strengths worth highlighting.",
                },
                {
                  q: "How important are VT essays compared to my main Common App essay?",
                  a: "Both are important. Supplemental essays show research, interest, and specific fit. Your Common App essay reveals who you are. Together, they create a complete picture.",
                },
                {
                  q: "Should I mention VT's motto or traditions?",
                  a: "Reference them authentically if they genuinely matter to you. Focus on substance and genuine understanding rather than showing you can recite facts about the university.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#CC0000] transition-colors text-left">
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
                { label: "USC Essays", href: "/usc-essay-prompts" },
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
                    className={`transition-colors ${link.href === "/virginia-tech-essays" ? "text-[#CC0000] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
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
