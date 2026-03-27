import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GraduationCap, Brain, Heart } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Stanford Essay Prompts 2025: Strategic Guide to Stanford Supplementals | GPTPrompts.AI",
  description:
    "Master Stanford's supplemental essays with our expert guide. Learn how to show intellectual vitality and personality in your application.",
}

export default function StanfordEssayPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#8c1515] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
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
            Stanford <br />
            <span className="italic opacity-90">Prompts 2025.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Decoding the Stanford supplementals: From 'Intellectual Vitality' to the 'Roommate Letter.' A masterclass in
            creative authenticity.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70">
            <span>Updated Dec 2025</span>
          </div>
        </div>
      </header>

      {/* ... */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* ... */}
        <div className="lg:col-span-9 space-y-32 max-w-4xl">
          {/* ... existing intro ... */}
          <section id="intellectual" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#8c1515]/10 rounded-xl">
                <Brain className="w-8 h-8 text-[#8c1515]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Prompt 1: Intellectual Vitality</h2>
            </div>
            {/* ... */}
          </section>

          <section id="roommate" className="space-y-12 bg-secondary p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#8c1515] font-bold uppercase tracking-widest text-sm mb-6">
                <Heart className="w-5 h-5" />
                <span>The Community Prompt</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">The Roommate Letter</h2>
              {/* ... */}
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Stanford Admissions FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                /* ... other items ... */
                {
                  q: "How strictly is the limit enforced for short questions?",
                  a: "The portal literally won't let you submit more than specified. Every part of your answer must earn its place. Use strong verbs, avoid fluff like 'I believe' or 'I think', and cut out unnecessary adjectives.",
                },
                /* ... */
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-[#8c1515]/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#8c1515] transition-colors text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xl leading-relaxed pt-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold tracking-tight mb-12">Stanford Essay FAQ</h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "How important is the 'intellectual vitality' essay in Stanford admissions?",
                    a: "Critical. Stanford explicitly values intellectual curiosity. This essay is your chance to show that you're genuinely excited about learning beyond the classroom. Avoid surface-level interests.",
                  },
                  {
                    q: "Should the intellectual vitality essay relate to my intended major?",
                    a: "Not necessarily. Stanford wants to see genuine passion for learning, whether it's inside or outside your major. However, showing how it connects to your goals is a plus.",
                  },
                  {
                    q: "How do I write an effective roommate letter?",
                    a: "Be authentic and personal. Don't try to impress; instead, let your personality shine. Include genuine anecdotes, your quirks, what makes you laugh, and what you value in friendships.",
                  },
                  {
                    q: "Is the roommate letter as important as the other essays?",
                    a: "Yes. Stanford uses this to assess personality fit and community contribution. It's not just a fun add-on; it's a significant part of your application.",
                  },
                  {
                    q: "Can I discuss challenges in the short essays?",
                    a: "Yes, but be strategic. Each prompt has a specific focus. If the prompt doesn't ask about challenges, don't force it. Stay on topic.",
                  },
                  {
                    q: "How much time should I spend on each short question?",
                    a: "Despite limited word counts, treat them seriously. Each answer should be thoughtful and specific. One sentence answers are rarely sufficient.",
                  },
                  {
                    q: "What is Stanford looking for in the 'what do you want to study' prompt?",
                    a: "Genuine curiosity and specific reasoning. Mention resources at Stanford (professors, programs, centers) that align with your interests. Generic answers will be rejected.",
                  },
                  {
                    q: "Should I tailor my essays for different Stanford schools (Engineering, Business, etc.)?",
                    a: "Absolutely. Each school has different cultures and priorities. Tailor your essays to reflect this.",
                  },
                  {
                    q: "How do I avoid clichés in the intellectual vitality essay?",
                    a: "Skip generic topics like 'I read and it changed my life' or 'I love science.' Instead, dive deep into a specific moment, book, experiment, or idea that genuinely fascinated you.",
                  },
                  {
                    q: "Can I mention Stanford's location or prestige in my essays?",
                    a: "Avoid it. Every applicant will mention this. Focus on Stanford's specific academic offerings, research opportunities, and community values instead.",
                  },
                  {
                    q: "What tone should I use in the roommate letter?",
                    a: "Warm, conversational, and genuine. It's one of the most personal parts of your application. Let your real voice come through.",
                  },
                  {
                    q: "How many Stanford-specific details should I include?",
                    a: "At least 4-6 specific references across all essays. Show genuine research and engagement with Stanford's academic community.",
                  },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-[#8c1515]/10 py-4">
                    <AccordionTrigger className="text-2xl font-bold hover:text-[#8c1515] transition-colors text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-xl leading-relaxed pt-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </div>
      </section>

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
                { label: "Wisconsin Essays", href: "/wisconsin-essays" },
                { label: "Princeton Essays", href: "/princeton-essays" },
                { label: "UGA Essays", href: "/uga-essays" },
                { label: "Common App Essays", href: "/common-app-essays" },
                { label: "Scholarship Essays", href: "/scholarship-essays" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/stanford-essay-prompts" ? "text-[#8c1515] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
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
                { label: "Career Prompts", href: "/careers" },
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Image Prompts", href: "/image-prompts" },
                { label: "SQL Prompts", href: "/sql-prompts" },
                { label: "500+ Writing Prompts", href: "/500-writing-prompts" },
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
