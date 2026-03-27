import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Gift, Lightbulb } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free AI Prompts Library: 1000+ Ready-to-Use Prompts | GPTPrompts.AI",
  description:
    "Access our comprehensive free AI prompts library. Discover 1000+ curated prompts for productivity, creativity, learning, and business. No signup required.",
}

export default function FreeAIPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#10b981] to-[#059669] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Gift className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Free AI <br />
            <span className="italic opacity-90">Prompts Library.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            1000+ ready-to-use prompts covering everything from productivity hacks to creative brainstorming. Download,
            customize, and unleash your AI potential.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#059669] mb-6">Browse Library</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "productivity", label: "Productivity Hacks", num: "00" },
                  { id: "creative", label: "Creative & Writing", num: "01" },
                  { id: "learning", label: "Learning & Education", num: "02" },
                  { id: "business", label: "Business & Strategy", num: "03" },
                  { id: "technical", label: "Technical & Coding", num: "04" },
                  { id: "personal", label: "Personal Development", num: "05" },
                  { id: "faq", label: "Library FAQ", num: "06" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#059669] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">Your Complete Free Prompt Resource</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              We believe great prompts should be accessible to everyone. Our Free AI Prompts Library is a living
              collection of 1000+ battle-tested prompts, organized by category and skill level. Whether you're a
              beginner taking your first AI steps or a power user looking for advanced techniques, you'll find
              immediately actionable prompts here.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Every prompt in this library has been tested, refined, and documented with clear instructions on how to
              customize it for your specific needs. Download them, copy them, share them—they're yours to use freely.
            </p>
          </article>

          <section id="productivity" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#059669]/10 rounded-xl">
                <Lightbulb className="w-8 h-8 text-[#059669]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Productivity & Workflow</h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "The Email Optimizer",
                  prompt:
                    "Rewrite this email to be more concise while retaining the core message and tone. [Insert email]. Target 50% word reduction.",
                },
                {
                  title: "The Meeting Summarizer",
                  prompt:
                    "Summarize this meeting transcript into 3 key decision points and 5 action items. [Paste transcript]. Format as a bulleted list.",
                },
                {
                  title: "The Task Prioritizer",
                  prompt:
                    "I have these tasks: [List tasks]. Rank them by impact-to-effort ratio. Provide a recommended order and reasoning.",
                },
                {
                  title: "The Documentation Writer",
                  prompt:
                    "Turn this code/process into clear, step-by-step documentation for non-technical users. [Insert content]. Use plain language.",
                },
                {
                  title: "The Research Synthesizer",
                  prompt:
                    "Analyze these research findings: [Paste findings]. Extract 3 key insights and suggest 2 follow-up research questions.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-6 border-2 border-[#059669]/20 hover:border-[#059669]/50 transition-colors">
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm font-mono bg-slate-50 p-4 rounded border border-slate-200 text-slate-700">
                    {item.prompt}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section id="creative" className="space-y-12 bg-[#f0fdf4] text-foreground p-12 md:p-20 rounded-[2rem]">
            <h2 className="text-4xl font-bold tracking-tight mb-12">Creative & Content Generation</h2>
            <div className="space-y-6">
              {[
                {
                  title: "The Social Media Generator",
                  prompt:
                    "Create 5 LinkedIn posts about [topic]. Mix educational, inspirational, and conversational tones. Make them shareable and engaging.",
                },
                {
                  title: "The Storyteller",
                  prompt:
                    "Write a 500-word short story with these elements: [setting, character, conflict]. Build tension throughout.",
                },
                {
                  title: "The Headline Genius",
                  prompt:
                    "Generate 10 compelling headlines for this content: [Insert content]. Include 3 curiosity-gap headlines and 3 benefit-focused headlines.",
                },
                {
                  title: "The Content Repurposer",
                  prompt:
                    "Transform this blog post into: a Twitter thread, a LinkedIn article, and a 30-second video script. [Paste blog post].",
                },
                {
                  title: "The Ad Copy Writer",
                  prompt:
                    "Write 5 Google Ads variations for [product/service]. Target [audience]. Emphasize [unique selling point]. Include a call-to-action.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-6 bg-white border-2 border-[#059669]/20">
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm font-mono bg-slate-50 p-4 rounded border border-slate-200 text-slate-700">
                    {item.prompt}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section id="learning" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Learning & Education</h2>
            <div className="space-y-6">
              {[
                {
                  title: "The Study Guide Creator",
                  prompt:
                    "Create a comprehensive study guide for [topic]. Include key concepts, practice questions, and memory tricks. Target [skill level] learners.",
                },
                {
                  title: "The Concept Explainer",
                  prompt:
                    "Explain [complex concept] as if I'm 12 years old. Use analogies and everyday examples. Keep it under 200 words.",
                },
                {
                  title: "The Quiz Master",
                  prompt:
                    "Generate 10 quiz questions on [topic]. Mix multiple-choice, true/false, and short-answer formats. Provide answer key with explanations.",
                },
                {
                  title: "The Language Tutor",
                  prompt:
                    "Create a 5-step learning path to master [skill]. Include resources, practice exercises, and milestones. Estimate time to proficiency.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-6 border-2 border-[#059669]/20 hover:border-[#059669]/50 transition-colors">
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm font-mono bg-slate-50 p-4 rounded border border-slate-200 text-slate-700">
                    {item.prompt}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Free Prompts Library FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Can I use these prompts commercially?",
                  a: "Yes! All prompts in our free library are licensed for commercial use. You can modify them, integrate them into products, and use them in client work.",
                },
                {
                  q: "How often is the library updated?",
                  a: "We add new prompts weekly and update existing ones based on user feedback. Subscribe to our newsletter for new additions.",
                },
                {
                  q: "Can I contribute my own prompts?",
                  a: "We'd love that! Email us at prompts@gptprompts.ai with your submission. Outstanding contributions get featured and credited.",
                },
                {
                  q: "What AI models work best with these prompts?",
                  a: "Our prompts are optimized for ChatGPT and Claude but work across all major AI models. Adjust phrasing slightly for model-specific quirks.",
                },
                {
                  q: "How do I customize these prompts for my specific use case?",
                  a: "Each prompt includes customization fields marked with [brackets]. Replace these with your specific context. That's it!",
                },
                {
                  q: "Are there advanced versions of these prompts?",
                  a: "Yes! Our premium membership includes advanced prompt variations, custom training, and direct access to our prompt engineers.",
                },
                {
                  q: "Can I download the entire library?",
                  a: "Absolutely. Use the 'Download All' button to get all prompts as a CSV or JSON file.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#059669] transition-colors text-left">
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Resources</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Kimi AI Prompts", href: "/kimi-ai-prompts" },
                { label: "Free Prompts Library", href: "/free-ai-prompts" },
                { label: "Best ChatGPT Prompts", href: "/coolest-chatgpt-prompts" },
                { label: "Beginner AI Prompts", href: "/good-ai-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/free-ai-prompts" ? "text-[#059669] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Career & Guides</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Essay Prompts", href: "/essay-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Story Prompts", href: "/story-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Universities</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Stanford Essays", href: "/stanford-essay-prompts" },
                { label: "UMD Essays", href: "/umd-essays" },
                { label: "UChicago Essays", href: "/uchicago-essays" },
                { label: "Princeton Essays", href: "/princeton-essays" },
                { label: "Common App Essays", href: "/common-app-essays" },
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
