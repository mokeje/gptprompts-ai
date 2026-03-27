import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Users, Leaf } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "University of Wisconsin Essay Prompts 2026: How to Use AI for UW Essays | GPTPrompts.AI",
  description:
    "Master UW-Madison essay prompts with our comprehensive guide. Strategies for Wisconsin Idea essays and proven techniques for UW supplemental essays 2026.",
}

export default function WisconsinPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#C6002B] to-[#FFFFFF] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Leaf className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Wisconsin <br />
            <span className="italic opacity-90">Essays.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Embrace the Wisconsin Idea. Strategic guidance for UW-Madison essays using thoughtful AI collaboration.
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">Understanding Wisconsin's Values and Culture</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              The University of Wisconsin-Madison stands as a premier public research university known for academic
              excellence, the Wisconsin Idea of public service, vibrant campus culture, and strong traditions. Writing
              compelling essays for UW-Madison requires demonstrating intellectual curiosity, commitment to the
              Wisconsin Idea, fit with Badger culture, and authentic enthusiasm for the university.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The Wisconsin Idea—that education should improve lives beyond campus boundaries—is central to UW-Madison's
              identity. Strong applications demonstrate understanding of and commitment to this philosophy while showing
              how you'll contribute to the Badger community.
            </p>
          </article>

          <section className="space-y-12 bg-slate-900 text-slate-100 p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#C6002B] font-bold uppercase tracking-widest text-sm mb-6">
                <Users className="w-5 h-5" />
                <span>Building Wisconsin Essays</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Effective AI Prompting for UW Essays
              </h2>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                Successful AI-assisted Wisconsin essays require providing detailed context about your experiences,
                values, and understanding of Wisconsin specifically. The Wisconsin Idea and collaborative culture are
                central to what makes UW distinctive.
              </p>
              <div className="space-y-8">
                <div className="p-8 bg-slate-800 rounded-2xl border border-white/5">
                  <h4 className="text-[#C6002B] font-bold mb-4 uppercase tracking-widest text-xs">
                    Wisconsin Essay Foundation:
                  </h4>
                  <ul className="space-y-4 text-sm opacity-70 list-disc list-inside">
                    <li>Your intended major and why you chose it</li>
                    <li>Specific UW-Madison programs or opportunities that interest you</li>
                    <li>Relevant experiences that shaped your interests</li>
                    <li>Personal values and what drives you</li>
                    <li>Service or community engagement experiences</li>
                    <li>Concrete reasons why Wisconsin appeals to you</li>
                    <li>How the Wisconsin Idea resonates with your values</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Mastering the "Why Wisconsin" Essay</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wisconsin often asks why you're interested in attending and what draws you to UW-Madison specifically.
              This essay requires demonstrating knowledge of Wisconsin's unique offerings and clear articulation of your
              fit.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/20">
              <h3 className="text-2xl font-bold mb-4 text-[#C6002B]">Effective Prompt Example</h3>
              <p className="text-sm leading-relaxed opacity-80">
                "Help me write a 'Why Wisconsin' essay for the College of Letters & Science. I'm interested in Economics
                major, Professor Steven Durlauf's research on inequality, the La Follette School connection, and
                Madison's progressive political culture. I value education that serves the public good, which aligns
                with the Wisconsin Idea. I'm excited about the combination of academic rigor and social consciousness.
                Show me how to demonstrate genuine knowledge without just listing programs."
              </p>
            </Card>
          </section>

          <section className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Wisconsin Essay FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What is the Wisconsin Idea and why does it matter?",
                  a: "The Wisconsin Idea states that university research and teaching should benefit people beyond campus. Strong UW essays demonstrate you understand and value this philosophy of public service.",
                },
                {
                  q: "How important is mentioning the Wisconsin Idea?",
                  a: "Very important if you're genuinely committed to using education for public good. Authentic engagement with this concept distinguishes strong UW applications.",
                },
                {
                  q: "Should I mention UW traditions like Jump Around?",
                  a: "You can mention them authentically if they genuinely matter to you. Focus on what traditions represent—community, spirit, connection—rather than treating them as checkboxes.",
                },
                {
                  q: "How do I write about Madison's location without being generic?",
                  a: "Reference specific aspects like the beautiful campus setting on Lake Mendota, the progressive political culture, or outdoor recreation, but connect them to your actual interests.",
                },
                {
                  q: "Can I write about Madison's progressive culture if I'm politically conservative?",
                  a: "Absolutely. You can discuss how UW's diversity of perspectives, commitment to open inquiry, and intellectual rigor appeal to you regardless of your own political views.",
                },
                {
                  q: "What makes Wisconsin's approach to education distinctive?",
                  a: "UW combines rigorous research with undergraduate access, collaborative rather than competitive culture, commitment to public good, and the belief that education should create impact beyond campus.",
                },
                {
                  q: "How do I demonstrate fit with Wisconsin's collaborative culture?",
                  a: "Discuss experiences where you've worked with diverse groups, engaged in collaborative projects, or contributed to community. Show you value teamwork and collective success.",
                },
                {
                  q: "Should I write about diversity and inclusion at Wisconsin?",
                  a: "If Wisconsin asks about campus diversity, discuss what unique perspectives you'd contribute and how you'll engage across differences. Avoid performative statements.",
                },
                {
                  q: "How important are UW's research opportunities for undergraduate students?",
                  a: "Very important for STEM and research-focused students. If research matters to your goals, specifically discuss UW research centers, professors, or programs aligned with your interests.",
                },
                {
                  q: "Can I mention Wisconsin's Big Ten athletics?",
                  a: "Yes, if it's genuine. Focus on what the athletic tradition represents—school spirit, community, excellence—rather than just mentioning football or basketball.",
                },
                {
                  q: "What if I don't have clear research interests yet?",
                  a: "That's fine. Discuss intellectual curiosity, desire to explore disciplines, and what excites you about learning. Wisconsin values intellectual development even without specific research goals.",
                },
                {
                  q: "What's the biggest mistake in Wisconsin essays?",
                  a: "Generic statements that could apply to any large public university. Wisconsin values specificity, genuine engagement with the Wisconsin Idea, and authentic understanding of Badger culture.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#C6002B] transition-colors text-left">
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
                    className={`transition-colors ${link.href === "/wisconsin-essays" ? "text-[#C6002B] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
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
