import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Zap, Target, Lightbulb } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Prompt Writing Best Practices: From Concept to Conversion | GPTPrompts.AI",
  description:
    "Master the CTIF framework for high-conversion AI prompts. Learn chain-of-thought prompting, SEO integration, and advanced techniques to scale quality content.",
}

export default function PromptBestPracticesPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Zap className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[0.85] mb-8">
            Prompt Writing <br />
            <span className="italic opacity-90">Best Practices.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Master the CTIF framework for high-conversion prompts. Learn chain-of-thought reasoning, SEO integration,
            and advanced techniques that transform AI from a tool into a strategic collaborator.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-6">
                Master Prompt Writing
              </h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "Prompt Engineering is Coding", num: "01" },
                  { id: "ctif", label: "The CTIF Framework", num: "02" },
                  { id: "context", label: "Context Construction", num: "03" },
                  { id: "task", label: "Task Definition", num: "04" },
                  { id: "instruction", label: "Instruction Architecture", num: "05" },
                  { id: "chain-of-thought", label: "Chain of Thought Prompting", num: "06" },
                  { id: "conversion", label: "Conversion & SEO", num: "07" },
                  { id: "iteration", label: "Iterative Optimization", num: "08" },
                  { id: "faq", label: "Best Practices FAQ", num: "09" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-purple-600 transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">Prompt Engineering is the New Coding</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Writing prompts is rapidly becoming as important as coding. Whether you're generating a blog post, an
              email sequence, or a landing page, the quality of your output is a direct reflection of the quality of
              your input. With the right framework, you can scale high-quality content that actually converts.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The difference between mediocre AI output and exceptional AI output isn't luck—it's structure. Treat the
              AI as a junior employee that needs explicit, contextual, and well-organized instructions. This approach
              unlocks precision, consistency, and measurable results.
            </p>
          </article>

          <section id="ctif" className="space-y-12 bg-slate-900 text-slate-100 p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-purple-400 font-bold uppercase tracking-widest text-sm mb-6">
                <Target className="w-5 h-5" />
                <span>The CTIF Framework</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Context-Task-Instruction-Format</h2>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                Every high-performing prompt follows this four-pillar structure. Master it, and you'll unlock consistent
                quality at scale.
              </p>
              <div className="space-y-8">
                <div className="p-8 bg-slate-800 rounded-2xl border border-white/5">
                  <h4 className="text-purple-400 font-bold mb-6 uppercase tracking-widest text-xs">
                    The Four Pillars:
                  </h4>
                  <ul className="space-y-6 text-sm opacity-70">
                    <li>
                      <strong>Context:</strong> Who are you, and who is your audience? Example: "You are a world-class
                      copywriter writing for a skeptical B2B SaaS audience."
                    </li>
                    <li>
                      <strong>Task:</strong> What is the specific goal? Example: "Write a 3-email nurture sequence for
                      leads who downloaded a whitepaper."
                    </li>
                    <li>
                      <strong>Instruction:</strong> What are the constraints and stylistic requirements? Example: "Use
                      the AIDA formula. Avoid hype. Keep sentences under 20 words. Include a specific CTA."
                    </li>
                    <li>
                      <strong>Format:</strong> How should the data be delivered? Example: "Deliver as a Markdown
                      document with clear subject lines and preview text for each email."
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="chain-of-thought" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-600/10 rounded-xl">
                <Lightbulb className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Chain of Thought: The Secret Weapon</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Don't expect perfection on the first try. Chain of Thought (CoT) prompting forces the AI to "think
              step-by-step" before providing the final answer. This dramatically reduces hallucinations and improves
              strategic depth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Standard Prompt (Weak)",
                  desc: '"Write a blog post about AI trends." AI outputs generic content because it skipped the thinking step.',
                },
                {
                  title: "Chain of Thought (Strong)",
                  desc: '"Think step-by-step: What are the top 3 AI trends in 2026? Who should care? What problems do they solve? Then write a blog post."',
                },
                {
                  title: "Better Output Quality",
                  desc: "CoT reasoning forces the model through logic, eliminating lazy answers and producing strategic, well-structured content.",
                },
                {
                  title: "Use Cases",
                  desc: "Strategic content, technical explanations, problem-solving, creative writing, complex analysis—anywhere thinking matters more than simple generation.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-8 border-none shadow-xl bg-secondary/20">
                  <h3 className="text-xl font-bold mb-3 text-purple-600">{item.title}</h3>
                  <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="conversion" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Prompting for Conversion & SEO</h2>
            <div className="space-y-8">
              <div className="p-8 bg-purple-600/5 border-l-4 border-purple-600 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">SEO-Integrated Prompts</h3>
                <p className="mb-6 text-muted-foreground">
                  When writing for web visibility and conversion, your prompts must include explicit SEO constraints:
                </p>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li>
                    <strong>• Keyword Integration:</strong> "Integrate the primary keyword 'AI tools for beginners' in
                    the first 100 words and at least 3 times throughout."
                  </li>
                  <li>
                    <strong>• Structure Optimization:</strong> "Use H2 and H3 headers that answer the most common
                    'People Also Ask' questions related to AI tools."
                  </li>
                  <li>
                    <strong>• Authority Signals:</strong> "Include statistics, expert quotes, and citation suggestions
                    to boost E-E-A-T signals."
                  </li>
                  <li>
                    <strong>• CTA Strategy:</strong> "Include a compelling Call to Action that uses urgency without
                    being pushy: avoid 'Click here,' use 'Start your free trial now.'"
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-purple-600/5 border-l-4 border-purple-600 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Complete Conversion Prompt</h3>
                <code className="block bg-foreground/10 p-4 rounded text-sm overflow-x-auto leading-relaxed">
                  "You are a conversion copywriter. Write a landing page section (250-300 words) targeting 'AI tools for
                  beginners.' Include: 1) Keyword in first 50 words, 2) Three pain points, 3) One solution, 4) Social
                  proof example, 5) A soft CTA that builds trust. Use short sentences. Avoid buzzwords. Format with H2,
                  H3 headers, and bullet points."
                </code>
              </div>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Best Practices FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What's the difference between good and great prompts?",
                  a: "Good prompts get the job done. Great prompts anticipate edge cases, include constraints, define persona, and ask for step-by-step reasoning. Great prompts scale effortlessly.",
                },
                {
                  q: "How long should a prompt be?",
                  a: "There's no ideal length. Longer prompts with more context produce better results. Include only relevant information—padding doesn't help. Typically 2-5 sentences is minimum; 500+ words is fine if it clarifies your needs.",
                },
                {
                  q: "Should I be polite to AI?",
                  a: "No scientific evidence suggests politeness improves output. Be direct and clear. 'Write an email' is just as effective as 'Could you please write an email?' Your time is better spent on clarity than courtesy.",
                },
                {
                  q: "Can I reuse prompts across different AI models?",
                  a: "Generally yes, but each model has quirks. Claude responds well to XML tags, ChatGPT prefers markdown, Gemini handles complex instructions better. Adjust format but keep the core structure.",
                },
                {
                  q: "What's the most common prompt mistake?",
                  a: "Vagueness. 'Write something creative' fails. 'Write a 500-word blog post about AI for HR professionals, using the STAR method, targeting beginners, with 3 FAQs' succeeds. Specificity is everything.",
                },
                {
                  q: "How do I know if my prompt is effective?",
                  a: "Test multiple versions. Run A/B tests. The best prompts produce consistent, high-quality output across multiple runs. If you get 1 good result out of 3, the prompt needs refinement.",
                },
                {
                  q: "Should I prompt for errors or assume accuracy?",
                  a: "Always prompt for accuracy checks. End with: 'Verify your answer: Does this make logical sense? Any contradictions? Any questionable claims?' This reduces hallucinations significantly.",
                },
                {
                  q: "Can I combine multiple frameworks (CTIF + CoT + SEO)?",
                  a: "Absolutely. The best prompts layer frameworks. Start with CTIF for structure, add CoT for reasoning, add SEO for web visibility. Layering frameworks creates superior output.",
                },
                {
                  q: "What's 'prompt injection' and should I worry?",
                  a: "Prompt injection is when users try to override your instructions. In production, use system prompts and role-play guards. For personal use, it's rarely a concern.",
                },
                {
                  q: "How do I scale prompt writing across a team?",
                  a: "Document your prompts. Create a 'Prompt Style Guide' with approved frameworks, tone, and constraints. Test new prompts collaboratively before rolling out.",
                },
                {
                  q: "Should I use the same prompt for different content types?",
                  a: "No. A blog post prompt differs from an email prompt, which differs from an ad copy prompt. Customize your framework to the medium and goal.",
                },
                {
                  q: "What's the ROI of optimizing prompts?",
                  a: "Significant. Better prompts mean less iteration, faster output, higher quality, and reduced editing time. A 10-hour writing project can shrink to 2 hours with proper prompting.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-purple-600 transition-colors text-left">
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm text-lg">
              Master prompt engineering and unlock the true potential of AI systems.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">AI Models</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Perplexity Prompts", href: "/perplexity-prompts" },
                { label: "Midjourney Prompts", href: "/midjourney-prompts" },
                { label: "Free AI Prompts", href: "/free-ai-prompts" },
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
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Stanford Essays", href: "/stanford-essay-prompts" },
                { label: "MIT Essays", href: "/uc-essay-prompts" },
                { label: "Princeton Essays", href: "/princeton-essays" },
                { label: "NYU Essays", href: "/nyu-essay-prompts" },
                { label: "Common App Essays", href: "/common-app-essays" },
                { label: "View All Universities", href: "/essay-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Career & Writing</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Story Prompts", href: "/story-prompts" },
                { label: "Photo Editing", href: "/photo-editing-prompts" },
                { label: "Social Media", href: "/social-media-marketing-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Advanced Tools</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Gemini AI Guide", href: "/gemini-ai-guide" },
                { label: "Google AI Studio", href: "/google-ai-studio" },
                { label: "BlackBox AI", href: "/blackbox-ai" },
                { label: "Leonardo AI", href: "/leonardo-ai" },
                { label: "Suno AI", href: "/suno-ai" },
                { label: "View All Tools", href: "/kimi-ai-prompts" },
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
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Human-Like Prompts", href: "/human-like-prompts", highlight: true },
                { label: "LinkedIn Professional Headshots", href: "/linkedin-professional-headshots", highlight: true },
                { label: "Perfect Resume with AI", href: "/perfect-resume-ai", highlight: true },
                { label: "Prompt Writing Best Practices", href: "/prompt-best-practices", highlight: true },
                { label: "Virtual Assistant Prompts", href: "/virtual-assistant-prompts" },
                { label: "Creative Writing for Beginners", href: "/creative-writing-prompts-beginners" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.highlight ? "text-purple-600 font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
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
