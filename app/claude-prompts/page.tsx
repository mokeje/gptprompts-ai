import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { ShieldCheck, FileText, Laptop } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Claude Prompts: The Master Guide to Anthropic's AI | GPTPrompts.AI",
  description:
    "Master Claude 3.5 Sonnet with our authoritative guide. Learn how to use Claude prompts for coding, nuanced writing, and complex reasoning with XML tags.",
}

export default function ClaudePage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#d97757] text-[#fdfcfb] py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <ShieldCheck className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Claude <br />
            <span className="italic opacity-90">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Precision, nuance, and code. Our guide reveals the XML-based prompting techniques that make Claude 3.5 the
            premier choice for developers and writers seeking human-level quality.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70"></div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#d97757] mb-6">Claude Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "The Claude Difference", num: "00" },
                  { id: "xml-tags", label: "XML Tag Strategy", num: "01" },
                  { id: "coding", label: "Artifacts & Coding", num: "02" },
                  { id: "computer-use", label: "Computer Use API", num: "03" },
                  { id: "nuance", label: "Nuanced Writing", num: "04" },
                  { id: "reasoning", label: "Chain-of-Thought", num: "05" },
                  { id: "projects", label: "Claude Projects", num: "06" },
                  { id: "system-prompts", label: "System Prompts", num: "07" },
                  { id: "faq", label: "Claude FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#d97757] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">The Claude Difference: Nuance Over Hype</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Anthropic's Claude 3.5 Sonnet has emerged as the developer's favorite for a reason: it follows complex
              instructions with a precision that often eludes other models. However, to get this performance, you must
              abandon "chatting" and start "structuring." <strong>Claude prompts</strong> are at their best when they
              use clear delimiters, logical blocks, and explicit reasoning steps.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our guide dives deep into the specific Anthropic-recommended techniques—like using XML tags to separate
              content from instructions—that allow Claude to process massive context windows (up to 200k tokens) without
              losing the thread of the conversation.
            </p>
          </article>

          <section id="computer-use" className="space-y-12 bg-[#212121] text-[#fdfcfb] p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#d97757] font-bold uppercase tracking-widest text-sm mb-6">
                <Laptop className="w-5 h-5" />
                <span>Future-Proofing: Computer Use</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Prompting the Digital Agent</h2>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                Claude is now capable of using a computer just like a human—viewing screens, moving cursors, and
                clicking buttons. Prompting for agents requires **procedural instructions**.
              </p>
              <Card className="p-8 bg-[#333] border-none">
                <h4 className="text-[#d97757] font-bold mb-4 uppercase tracking-widest text-xs">
                  The Agent Framework:
                </h4>
                <p className="text-sm opacity-70 italic mb-4">
                  "Use the browser to find the most recent [EVENT]. Once found, navigate to my CRM and update the [LEAD]
                  status. If you encounter a login screen, alert me and wait for manual input."
                </p>
                <p className="text-xs opacity-50">
                  Key Concept: 'Instruction Buffering'. Break complex agent tasks into clear, verifiable sub-goals.
                </p>
              </Card>
            </div>
          </section>

          <section id="xml-tags" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#d97757]/10 rounded-xl">
                <FileText className="w-8 h-8 text-[#d97757]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Mastering XML Tag Structure</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Claude is uniquely optimized to recognize XML tags. This is the single most effective way to improve its
              instruction-following.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/30">
              <h3 className="text-xl font-bold mb-4">The Nested XML Strategy</h3>
              <div className="p-6 bg-white rounded-xl border border-[#d97757]/20 font-mono text-sm leading-relaxed text-slate-700">
                <p className="mb-2">&lt;instructions&gt;</p>
                <p className="mb-2 ml-4">&lt;goal&gt;Analyze the data.&lt;/goal&gt;</p>
                <p className="mb-2 ml-4">&lt;constraints&gt;No jargon.&lt;/constraints&gt;</p>
                <p className="mb-2">&lt;/instructions&gt;</p>
                <p className="mb-2">&lt;content&gt;</p>
                <p className="mb-2">[Insert Long Text]</p>
                <p className="mb-2">&lt;/content&gt;</p>
              </div>
            </Card>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Claude Mastery FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Why does Claude like XML tags so much?",
                  a: "Claude was trained on data that frequently used structured tags. It treats them as definitive boundaries, which helps it distinguish between context, instructions, and examples more effectively than simple bullet points.",
                },
                {
                  q: "How is Claude 3.5 Sonnet different for prompting than GPT-4o?",
                  a: "Claude is generally more verbose and follows negative constraints ('Don't do X') better. It also has a more 'human-like' writing tone by default, requiring fewer style instructions than GPT models.",
                },
                {
                  q: "What are Claude Projects?",
                  a: "Claude Projects allow you to upload a set of 'Project Instructions' that act as a permanent system prompt for all chats within that project. This is perfect for maintaining consistent brand voice or coding styles across multiple sessions.",
                },
                {
                  q: "How do I prompt Claude to write in a specific tone?",
                  a: "Use 'Style Reference' texts. Paste 2-3 examples of your target tone inside &lt;style_examples&gt; tags and prompt: 'Analyze the tone, cadence, and vocabulary of these examples. Write the new content in the exact same style.'",
                },
                {
                  q: "What is 'Artifacts' and how do I prompt for it?",
                  a: "Artifacts is a UI feature that displays code, markdown, and diagrams in a side panel. To trigger it, prompt for 'a standalone component' or 'a full-page diagram'. Claude will automatically use the Artifacts interface.",
                },
                {
                  q: "Can Claude analyze images?",
                  a: "Yes. Claude 3.5 is highly capable of visual reasoning. Prompt: 'Look at this architectural floor plan. Identify the potential flow issues for a high-traffic kitchen area.'",
                },
                {
                  q: "How does Claude handle long context compared to Gemini?",
                  a: "While Gemini has a larger window (2M), Claude (200k) is often praised for its 'recall accuracy'—its ability to find a specific piece of information buried in the middle of a massive document without losing focus.",
                },
                {
                  q: "What are the safety guardrails for Claude?",
                  a: "Anthropic emphasizes 'Constitutional AI'. Claude is programmed with a set of principles that guide its behavior. If it refuses a prompt, it's usually because it perceives a risk of harm or bias based on these principles.",
                },
                {
                  q: "How do I prompt for 'Reasoning' in Claude?",
                  a: "Ask Claude to 'Walk through your reasoning in a &lt;thinking&gt; block before providing the final answer.' This is especially effective for complex math, logic, or code refactoring tasks.",
                },
                {
                  q: "Can I use Claude for SEO content?",
                  a: "Yes. Use the prompt: 'Act as a Senior SEO Strategist. Create a content outline that targets the following primary and secondary keywords. Ensure the structure follows [Your Preferred SEO Framework].'",
                },
                {
                  q: "How do I keep my Claude prompts consistent?",
                  a: "Use 'Project Instructions' for long-term consistency. For one-off sessions, use a 'System Prompt' to define the model's persona and rules before starting the conversation.",
                },
                {
                  q: "What is the 'Claude Project' knowledge base?",
                  a: "You can upload PDFs, text files, and code files to a Project. Claude uses these as a primary source of truth for all prompts in that project, ensuring it 'knows' your specific documentation or style guide.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#d97757] transition-colors text-left">
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
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/claude-prompts" ? "text-[#d97757] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Career & Writing</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Personal Statement Prompts", href: "/essay-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Story Prompts", href: "/story-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Specialized</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Image Prompts", href: "/image-prompts" },
                { label: "SQL Prompts", href: "/sql-prompts" },
                { label: "Journaling Guide", href: "/journal-guide" },
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
