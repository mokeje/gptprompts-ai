import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Sparkles, Zap, Brain } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Kimi AI Prompts: Master the Chinese AI Assistant | GPTPrompts.AI",
  description:
    "Complete guide to Kimi AI prompts. Learn how to use Kimi for Chinese language tasks, content generation, and reasoning with advanced prompting techniques.",
}

export default function KimiAIPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Sparkles className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Kimi <br />
            <span className="italic opacity-90">AI Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Experience the power of Kimi, the advanced AI assistant designed for nuanced reasoning and multilingual
            excellence. Master prompting techniques that unlock Kimi's full potential.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6] mb-6">Kimi Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "Kimi Capabilities", num: "00" },
                  { id: "structure", label: "Prompt Structure", num: "01" },
                  { id: "multilingual", label: "Multilingual Power", num: "02" },
                  { id: "reasoning", label: "Advanced Reasoning", num: "03" },
                  { id: "content", label: "Content Generation", num: "04" },
                  { id: "technical", label: "Technical Prompting", num: "05" },
                  { id: "faq", label: "Kimi FAQ", num: "06" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#8b5cf6] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              Understanding Kimi: The Next-Generation AI Assistant
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Kimi AI represents a breakthrough in conversational intelligence, designed with deep multilingual support
              and advanced reasoning capabilities. Unlike conventional AI assistants, Kimi excels at understanding
              context, maintaining coherent narratives, and providing nuanced responses across multiple languages.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The key to unlocking Kimi's potential lies in structured prompting. By providing clear context, explicit
              constraints, and detailed output specifications, you can guide Kimi to produce exceptional results across
              content creation, analysis, coding, and strategic thinking tasks.
            </p>
          </article>

          <section id="structure" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#8b5cf6]/10 rounded-xl">
                <Zap className="w-8 h-8 text-[#8b5cf6]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">The Kimi Prompt Architecture</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Effective Kimi prompts follow a specific architecture that maximizes the AI's reasoning and contextual
              understanding.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/30">
              <h3 className="text-xl font-bold mb-6">The 5-Layer Kimi Framework</h3>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-xl border border-[#8b5cf6]/20">
                  <p className="font-mono text-sm mb-3 font-bold text-[#8b5cf6]">Layer 1: Context Setting</p>
                  <p className="text-sm text-slate-600">Define the scenario, background, and relevant information.</p>
                  <p className="text-xs text-slate-500 mt-2 italic">"You are a senior UX strategist evaluating..."</p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-[#8b5cf6]/20">
                  <p className="font-mono text-sm mb-3 font-bold text-[#8b5cf6]">Layer 2: Explicit Task</p>
                  <p className="text-sm text-slate-600">State the exact action or output required.</p>
                  <p className="text-xs text-slate-500 mt-2 italic">
                    "Analyze the following user flow and identify friction points."
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-[#8b5cf6]/20">
                  <p className="font-mono text-sm mb-3 font-bold text-[#8b5cf6]">Layer 3: Constraints</p>
                  <p className="text-sm text-slate-600">Specify what should NOT be included or limitations.</p>
                  <p className="text-xs text-slate-500 mt-2 italic">
                    "Avoid technical jargon. Focus on end-user impact only."
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-[#8b5cf6]/20">
                  <p className="font-mono text-sm mb-3 font-bold text-[#8b5cf6]">Layer 4: Format Specification</p>
                  <p className="text-sm text-slate-600">
                    Define the exact output structure (list, table, narrative, etc.).
                  </p>
                  <p className="text-xs text-slate-500 mt-2 italic">
                    "Provide output as a numbered list with priority ranking."
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-[#8b5cf6]/20">
                  <p className="font-mono text-sm mb-3 font-bold text-[#8b5cf6]">Layer 5: Quality Indicators</p>
                  <p className="text-sm text-slate-600">Specify tone, depth, and quality standards.</p>
                  <p className="text-xs text-slate-500 mt-2 italic">
                    "Aim for actionable insights that a product team can implement."
                  </p>
                </div>
              </div>
            </Card>
          </section>

          <section id="multilingual" className="space-y-12 bg-[#f3f0ff] text-foreground p-12 md:p-20 rounded-[2rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#8b5cf6] font-bold uppercase tracking-widest text-sm mb-6">
                <Brain className="w-5 h-5" />
                <span>Global Communication</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Mastering Multilingual Prompting</h2>
              <p className="text-xl opacity-90 mb-12 leading-relaxed">
                Kimi's multilingual capabilities allow seamless code-switching and nuanced language handling. Prompt in
                your native language with full confidence.
              </p>
              <div className="space-y-4">
                <Card className="p-6 bg-white border-2 border-[#8b5cf6]/30">
                  <p className="text-sm font-bold text-[#8b5cf6] mb-2">Example: Chinese-English Hybrid Prompt</p>
                  <p className="text-xs font-mono text-slate-600 leading-relaxed">
                    "请用英文总结这份报告的关键要点。Keep the summary to 3 bullet points and maintain a professional
                    tone."
                  </p>
                </Card>
                <Card className="p-6 bg-white border-2 border-[#8b5cf6]/30">
                  <p className="text-sm font-bold text-[#8b5cf6] mb-2">Best Practice: Language Declaration</p>
                  <p className="text-xs font-mono text-slate-600 leading-relaxed">
                    Always declare the expected language upfront: "Respond in Chinese using simplified characters. Use
                    formal business vocabulary."
                  </p>
                </Card>
              </div>
            </div>
          </section>

          <section id="reasoning" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Advanced Reasoning & Chain-of-Thought</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kimi excels at multi-step reasoning. Explicitly request step-by-step breakdowns to access deeper
              analytical capabilities.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/30">
              <h3 className="text-xl font-bold mb-6">The Reasoning Trigger</h3>
              <div className="p-6 bg-white rounded-xl border border-[#8b5cf6]/20 font-mono text-sm leading-relaxed text-slate-700 space-y-3">
                <p>Prompt: "Walk through your reasoning step-by-step."</p>
                <p className="text-xs text-slate-500 italic">
                  Result: Kimi will break down complex tasks into logical phases, improving accuracy by 40%+
                </p>
              </div>
            </Card>
          </section>

          <section id="content" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Content Generation Excellence</h2>
            <div className="space-y-6">
              <Card className="p-6 border-2 border-[#8b5cf6]/20">
                <h3 className="text-lg font-bold mb-3">The Brand Voice Template</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  "Generate social media content that reflects this brand voice: [Insert 2-3 examples]. Match the tone,
                  vocabulary, and humor style exactly."
                </p>
              </Card>
              <Card className="p-6 border-2 border-[#8b5cf6]/20">
                <h3 className="text-lg font-bold mb-3">The Storytelling Technique</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  "Create a narrative arc with these story beats: [beats]. Ensure emotional resonance at each turning
                  point."
                </p>
              </Card>
              <Card className="p-6 border-2 border-[#8b5cf6]/20">
                <h3 className="text-lg font-bold mb-3">The SEO-Optimized Copy</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  "Write product description targeting these keywords: [keywords]. Maintain readability while
                  incorporating natural keyword placement."
                </p>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Kimi AI FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How is Kimi different from ChatGPT?",
                  a: "Kimi is optimized for multilingual reasoning and advanced analytical tasks. While ChatGPT excels at conversational breadth, Kimi specializes in depth, context retention, and nuanced language understanding across multiple languages.",
                },
                {
                  q: "What languages does Kimi support?",
                  a: "Kimi supports 50+ languages with native-level fluency in Chinese, English, Japanese, and Korean. It handles code-switching seamlessly and maintains context across language transitions.",
                },
                {
                  q: "How do I trigger Kimi's advanced reasoning mode?",
                  a: "Request 'step-by-step reasoning' or 'think through this carefully.' Kimi will automatically activate deeper analytical processing, improving output quality for complex tasks.",
                },
                {
                  q: "Can I use Kimi for technical coding tasks?",
                  a: "Yes. Kimi handles code generation, debugging, and architecture discussion across multiple programming languages. Use the 'reasoning mode' for complex algorithmic problems.",
                },
                {
                  q: "How do I ensure output consistency across multiple Kimi conversations?",
                  a: "Provide explicit 'reference outputs' or style examples at the beginning of each conversation. Kimi excels at pattern recognition and will maintain consistency if given clear examples.",
                },
                {
                  q: "What is Kimi's context window size?",
                  a: "Kimi supports up to 200,000 tokens of context, allowing for long documents, research papers, or comprehensive project briefs without losing coherence.",
                },
                {
                  q: "How do I prompt Kimi for creative tasks?",
                  a: "Use 'permission statements' like 'Feel free to be creative and experimental here' to unlock Kimi's creative potential. Avoid overly rigid constraints for creative work.",
                },
                {
                  q: "Can Kimi handle real-time data or current events?",
                  a: "Kimi's knowledge was last updated in early 2024. For real-time information, provide the current data in your prompt or use Kimi in conjunction with web search tools.",
                },
                {
                  q: "How do I request output in a specific format from Kimi?",
                  a: "Be extremely specific: 'Output as JSON', 'Create a markdown table', 'Provide a step-by-step numbered list'. Kimi responds best to precise format instructions.",
                },
                {
                  q: "What should I do if Kimi's output isn't meeting my needs?",
                  a: "Provide feedback directly: 'That's too informal. Make it more professional' or 'Add more technical depth.' Kimi uses feedback to refine subsequent responses within the same conversation.",
                },
                {
                  q: "How do I use Kimi for business strategy discussions?",
                  a: "Frame the prompt as a consulting engagement: 'Act as a strategy consultant analyzing [situation]. Identify risks, opportunities, and a recommended action plan.'",
                },
                {
                  q: "Can Kimi analyze and summarize long documents?",
                  a: "Absolutely. Paste the full document and request: 'Summarize the key points, main arguments, and actionable recommendations from this document.' Kimi will handle even 50,000+ word documents effectively.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#8b5cf6] transition-colors text-left">
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">AI Models</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Kimi AI Prompts", href: "/kimi-ai-prompts" },
                { label: "Perplexity Prompts", href: "/perplexity-prompts" },
                { label: "Midjourney Prompts", href: "/midjourney-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/kimi-ai-prompts" ? "text-[#8b5cf6] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
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
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Free AI Prompts Library", href: "/free-ai-prompts" },
                { label: "Best ChatGPT Prompts", href: "/coolest-chatgpt-prompts" },
                { label: "Beginner AI Prompts", href: "/good-ai-prompts" },
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
                { label: "NYU Essays", href: "/nyu-essay-prompts" },
                { label: "Stanford Essays", href: "/stanford-essay-prompts" },
                { label: "UMD Essays", href: "/umd-essays" },
                { label: "UChicago Essays", href: "/uchicago-essays" },
                { label: "Penn State Essays", href: "/penn-state-essays" },
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
