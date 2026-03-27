import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ChatGPT Prompts Library: 500+ Tested Prompts | GPTPrompts.AI",
  description:
    "Explore 500+ tested ChatGPT prompts for business, content creation, coding, and professional development. Copy-paste ready templates organized by use case.",
}

export default function ChatGPTLibraryPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#10a37f] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <BookOpen className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            ChatGPT Prompts <br />
            <span className="italic opacity-90">Library.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            500+ battle-tested prompts for every use case. Copy, paste, and adapt. No trial and error required.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#10a37f] mb-6">Prompt Library</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "Library Overview", num: "01" },
                  { id: "business", label: "Business Prompts", num: "02" },
                  { id: "content", label: "Content Creation", num: "03" },
                  { id: "coding", label: "Coding & Dev", num: "04" },
                  { id: "learning", label: "Learning Prompts", num: "05" },
                  { id: "faq", label: "Library FAQ", num: "06" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#10a37f] transition-colors"
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
          <article id="intro" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Your ChatGPT Prompt Reference</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              This library contains 500+ field-tested prompts organized by category. Each prompt follows best practices
              and includes examples of how to customize for your specific needs.
            </p>
          </article>

          <section id="business" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Business & Entrepreneurship</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Market Analysis Prompt",
                  template:
                    "You are a venture capital analyst with 20 years of experience. Analyze the following startup pitch for: (1) competitive moats, (2) market size, (3) potential failure points, (4) 2026 market fit. [Paste Pitch Here]. Format as a strategic memo.",
                },
                {
                  title: "Customer Persona Generator",
                  template:
                    "Create a detailed psychographic profile for a buyer interested in [PRODUCT/SERVICE]. Include: primary goals, fears, objections, triggers, income level, media consumption, buying journey stages. Make it specific to someone who would purchase in the next 30 days.",
                },
                {
                  title: "Competitive Advantage Identifier",
                  template:
                    "I operate in the [INDUSTRY]. My competitors are [LIST COMPETITORS]. Analyze what they do well and identify 3 specific areas where I can differentiate. Provide tactics for each differentiation strategy.",
                },
              ].map((prompt, i) => (
                <div key={i} className="border-l-4 border-[#10a37f] pl-6 py-4">
                  <h3 className="text-xl font-bold mb-4">{prompt.title}</h3>
                  <div className="bg-black text-[#10a37f] p-4 font-mono text-sm rounded">
                    <span className="opacity-50 italic">// Prompt Template</span>
                    <p className="mt-2">{prompt.template}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="content" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Advanced Content Creation</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Narrative Architecture",
                  template:
                    'Rewrite the following article using the inverted pyramid style: start with the most crucial data, use punchy active-voice headers, and structure each section with the "So What?" principle. [Paste Article]. Optimize for both SEO and readability.',
                },
                {
                  title: "Viral Hook Generator",
                  template:
                    "Based on psychological principles of curiosity, generate 5 attention-grabbing hooks for a LinkedIn post about [TOPIC]. Each hook should spark controversy without being offensive. Include the supporting angle for each hook.",
                },
              ].map((prompt, i) => (
                <div key={i} className="border-l-4 border-[#10a37f] pl-6 py-4">
                  <h3 className="text-xl font-bold mb-4">{prompt.title}</h3>
                  <div className="bg-black text-[#10a37f] p-4 font-mono text-sm rounded">
                    <span className="opacity-50 italic">// Prompt Template</span>
                    <p className="mt-2">{prompt.template}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="coding" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Coding & Development</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Code Review & Debugging",
                  template:
                    "Review this [LANGUAGE] script for: (1) memory leaks, (2) security vulnerabilities, (3) performance issues. Explain each fix step-by-step with comments. [Paste Code]. Suggest optimizations for production use.",
                },
                {
                  title: "API Integration Template",
                  template:
                    "Write a [LANGUAGE] script to fetch data from [API_ENDPOINT], transform it into [DESIRED_FORMAT], and output to [OUTPUT_DESTINATION]. Include error handling, rate limiting, and logging. Use the most current API version.",
                },
              ].map((prompt, i) => (
                <div key={i} className="border-l-4 border-[#10a37f] pl-6 py-4">
                  <h3 className="text-xl font-bold mb-4">{prompt.title}</h3>
                  <div className="bg-black text-[#10a37f] p-4 font-mono text-sm rounded">
                    <span className="opacity-50 italic">// Prompt Template</span>
                    <p className="mt-2">{prompt.template}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Prompt Library FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How should I customize these prompts for my needs?",
                  a: "Replace [BRACKETED TERMS] with your specific information. Test multiple variations. Add constraint clauses like 'Do not use corporate jargon' at the end to refine outputs.",
                },
                {
                  q: "Can I use these prompts with other AI models?",
                  a: "Most prompts are model-agnostic, but Claude prefers XML tags and Gemini likes structured JSON. Adjust terminology based on the model's documented preferences.",
                },
                {
                  q: "Are these prompts free to use commercially?",
                  a: "Yes, all prompts in this library are free to use, modify, and commercialize. No attribution required.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#10a37f]">{faq.q}</AccordionTrigger>
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm text-lg">
              500+ copy-paste ready prompts for every ChatGPT use case.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Core Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Prompt Generators", href: "/ai-prompt-generators" },
                { label: "Prompt Engineering Fundamentals", href: "/prompt-engineering-fundamentals" },
                { label: "Free Prompts", href: "/free-ai-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Related Guides</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "AI Prompt Techniques", href: "/write-ai-prompts-techniques" },
                { label: "Midjourney Guide", href: "/midjourney-guide" },
                { label: "Human-Like Prompts", href: "/human-sound-prompts" },
                { label: "Prompt Best Practices", href: "/prompt-best-practices" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Career</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letters", href: "/cover-letter-prompts" },
                { label: "Prompt Jobs 2026", href: "/prompt-engineering-jobs-2026" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Tools</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Image Prompts", href: "/image-prompts" },
                { label: "SQL Prompts", href: "/sql-prompts" },
                { label: "Story Prompts", href: "/story-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
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
