import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { MapPin, Trophy } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "University of Georgia Essay Prompts 2026: How to Use AI for UGA Essays | GPTPrompts.AI",
  description:
    "Master UGA essay prompts with our comprehensive guide. Strategies, frameworks, and proven techniques for University of Georgia supplemental essays 2026.",
}

export default function UGAPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#BA0021] to-[#000000] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Trophy className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Georgia <br />
            <span className="italic opacity-90">Essays.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Join the Bulldog Nation. Strategic frameworks for compelling University of Georgia essays using AI
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">Understanding UGA's Admissions Philosophy</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              The University of Georgia represents excellence in public education with its rich history, strong academic
              programs, vibrant campus culture, and commitment to the motto "Et docere et rerum exquirere causas" (To
              teach, to serve, and to inquire into the nature of things). UGA takes a holistic approach to admissions,
              considering essays as crucial components that reveal your personality, values, and potential contributions
              to the Bulldog Nation.
            </p>
          </article>

          <section className="space-y-12 bg-slate-900 text-slate-100 p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#BA0021] font-bold uppercase tracking-widest text-sm mb-6">
                <MapPin className="w-5 h-5" />
                <span>Building Strategic AI Prompts</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">UGA Essay Foundation</h2>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                Effective AI-assisted UGA essays require providing detailed context about your experiences, values, and
                specific knowledge of UGA. Generic prompts yield generic responses.
              </p>
              <div className="space-y-8">
                <div className="p-8 bg-slate-800 rounded-2xl border border-white/5">
                  <h4 className="text-[#BA0021] font-bold mb-4 uppercase tracking-widest text-xs">
                    Core Context Elements:
                  </h4>
                  <ul className="space-y-4 text-sm opacity-70 list-disc list-inside">
                    <li>Your intended school or college within UGA</li>
                    <li>Specific programs, courses, or faculty that interest you</li>
                    <li>Relevant experiences and accomplishments</li>
                    <li>Personal values and what drives you</li>
                    <li>Leadership or service experiences</li>
                    <li>Connection to Georgia or the South if applicable</li>
                    <li>How you'll contribute to the Bulldog community</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Mastering the "Why UGA" Essay</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              UGA often asks why you want to attend and what you'll contribute to the university community. This essay
              requires specific knowledge of UGA's offerings and clear articulation of your fit with Bulldog culture.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/20">
              <h3 className="text-2xl font-bold mb-4 text-[#BA0021]">Effective Prompt Example</h3>
              <p className="text-sm leading-relaxed opacity-80">
                "Help me write a 'Why UGA' essay for Terry College of Business. I'm interested in the Sports Marketing
                certificate, Professor Mark Johnston's marketing courses, and Athens' thriving local business community.
                I love that UGA combines rigorous academics with incredible school spirit. I want to join professional
                organizations and work in sports marketing long-term. Show me how to demonstrate genuine knowledge and
                enthusiasm without just listing programs or sounding like I only care about football."
              </p>
            </Card>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">University of Georgia Essay FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What makes UGA distinct from other large public universities?",
                  a: "UGA's combination of rigorous academics, strong traditions, passionate school spirit, beautiful campus in Athens, and commitment to both research and undergraduate education create a distinctive experience.",
                },
                {
                  q: "How important is mentioning UGA traditions?",
                  a: "Reference traditions authentically if they genuinely excite you. Focus on what draws you to UGA's community rather than just reciting facts about traditions.",
                },
                {
                  q: "Should I write about being in-state or out-of-state?",
                  a: "If you have genuine connection to Georgia or the South, it can be meaningful. Focus on your authentic relationship to the region rather than what you think admissions wants to hear.",
                },
                {
                  q: "How specific should I be about UGA programs?",
                  a: "Very specific. Rather than mentioning 'good business school,' reference particular programs, professors, research centers, or opportunities that genuinely excite you.",
                },
                {
                  q: "Can I write about UGA football and school spirit?",
                  a: "Yes, if it's genuine. Focus on what the community and tradition represent rather than superficial elements. Admissions values demonstrated enthusiasm.",
                },
                {
                  q: "What if I'm applying to a competitive program within UGA?",
                  a: "Your essays carry additional weight. Ensure you demonstrate exceptional achievement in your field and specific understanding of that program's unique features.",
                },
                {
                  q: "How do I address UGA's commitment to public service?",
                  a: "Discuss your own service or leadership experiences and how UGA's mission aligns with your values and goals for making positive impact.",
                },
                {
                  q: "Should I mention Athens as a college town?",
                  a: "You can if it genuinely matters to you—the progressive culture, local businesses, outdoor recreation. Avoid generic statements unless they connect to your actual interests.",
                },
                {
                  q: "How do I show authentic enthusiasm without sounding generic?",
                  a: "Reference specific elements of UGA that excite you—particular professors, research, clubs, traditions—combined with reflection on how they align with your goals.",
                },
                {
                  q: "What's the biggest mistake in UGA essays?",
                  a: "Generic statements that could apply to any large public university. UGA values specificity, research, and genuine understanding of what makes the university special.",
                },
                {
                  q: "Can I use AI to help organize my UGA thoughts?",
                  a: "Absolutely. AI can help brainstorm angles, organize ideas, refine phrasing, and provide feedback. Ensure the final essay reflects your authentic voice.",
                },
                {
                  q: "How do short answer questions differ from longer essays?",
                  a: "Short answers require precision and impact. Each sentence should advance your narrative. Long essays allow for more development of ideas and examples.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#BA0021] transition-colors text-left">
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
                    className={`transition-colors ${link.href === "/uga-essays" ? "text-[#BA0021] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
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
