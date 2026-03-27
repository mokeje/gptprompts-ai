import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GraduationCap } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "UC Essay Prompts 2025: Master the Personal Insight Questions (PIQs) | GPTPrompts.AI",
  description:
    "Comprehensive guide to the University of California PIQs. Strategic advice for choosing and writing your 4 winning UC essays.",
}

export default function UCEssayPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#003262] text-white py-32 px-6 md:px-12 relative overflow-hidden border-b-8 border-[#FDB515]">
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
            UC PIQ <br />
            <span className="italic opacity-90 text-[#FDB515]">Prompts 2025.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Winning the UC game: A deep-dive into the 8 Personal Insight Questions. Selection strategy, straight-talk
            writing, and storytelling for the University of California.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70">
            <span>Updated Dec 2025</span>
          </div>
        </div>
      </header>

      {/* ... */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* ... aside ... */}
        <div className="lg:col-span-9 space-y-32 max-w-4xl">
          <article id="piq-overview" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              The UC Personal Insight Questions: Facts Over Flowery
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              The University of California (UC) application is different from the Common App. While the Common App
              favors narrative storytelling and metaphors, the UC **Personal Insight Questions (PIQs)** are more like an
              interview on paper. Admissions officers have explicitly stated they value{" "}
              <strong>clarity and information</strong> over creative writing style.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              You must choose 4 out of the 8 prompts. This guide will help you select the prompts that highlight
              different aspects of your profile and teach you the "Straight-Talk" method that UC readers prefer.
            </p>
          </article>
          {/* ... existing breakdown ... */}
          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">University of California FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                /* ... other items ... */
                {
                  q: "How important is the length of the responses?",
                  a: "Follow the specified limit. You don't need to hit the maximum exactly. A strong, concise answer is better than a fluffed-up longer one. Focus on the density of information.",
                },
                /* ... */
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-[#003262]/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#003262] transition-colors text-left">
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
              <h2 className="text-4xl font-bold tracking-tight mb-12">UC Essays FAQ</h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    q: "How important is PIQ selection strategy?",
                    a: "Very. You must choose 4 out of 8 carefully. Select prompts that showcase different dimensions of your profile. Don't choose four that tell the same story.",
                  },
                  {
                    q: "What does 'straight talk' mean for UC essays?",
                    a: "UC officers prefer clarity, specificity, and authenticity over flowery prose. Be direct. Show, don't tell. Avoid vague generalizations.",
                  },
                  {
                    q: "Should I mention UC-specific details in every essay?",
                    a: "Not required for PIQs. However, if there's a specific UC school or program that fits, mention it naturally. Research is always appreciated.",
                  },
                  {
                    q: "How do I balance vulnerability with strength in the essays?",
                    a: "Show growth through challenges. Don't present yourself as perfect, but don't dwell on victimhood either. Focus on what you learned and how you moved forward.",
                  },
                  {
                    q: "Can I discuss the same activity in multiple essays?",
                    a: "Yes, but from different angles. For example, one essay might explore leadership through an activity, another might discuss personal growth from the same experience.",
                  },
                  {
                    q: "What tone should I use for UC essays?",
                    a: "Professional but personable. Avoid academic jargon and overly formal language. Write as if you're talking to an intelligent peer.",
                  },
                  {
                    q: "Is there flexibility in how I respond to the PIQs?",
                    a: "Yes. The prompts are intentionally open-ended. You have creative freedom in how you interpret and respond, as long as you address the core question.",
                  },
                  {
                    q: "How specific should I be with examples?",
                    a: "Very specific. Generic examples weaken your essay. Use concrete details: names, dates, dialogue, sensory descriptions.",
                  },
                  {
                    q: "Should I disclose sensitive information like mental health or abuse?",
                    a: "Only if it's essential to your story and you can discuss it with perspective and growth. Admissions officers read thousands of essays; be strategic about what you share.",
                  },
                  {
                    q: "How many UC-specific details should I include?",
                    a: "If responding to UC-specific prompts, include 3-5 details about programs, research opportunities, or community values that align with your goals.",
                  },
                  {
                    q: "Can I use humor in UC essays?",
                    a: "Yes, if it's natural and serves the essay. Forced humor is awkward. If you're naturally funny, let that personality shine through.",
                  },
                  {
                    q: "What if my achievement doesn't seem 'big' enough?",
                    a: "UC values impact and growth over scale. A meaningful project within your community is more compelling than a generic achievement.",
                  },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-[#003262]/10 py-4">
                    <AccordionTrigger className="text-2xl font-bold hover:text-[#003262] transition-colors text-left">
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
                    className={`transition-colors ${link.href === "/uc-essay-prompts" ? "text-[#003262] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
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
