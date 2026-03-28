import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { MessageSquare, Target, Brain } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ChatGPT Prompts: The Definitive 2025 Guide to Master AI | GPTPrompts.AI",
  description:
    "Master ChatGPT with our authoritative guide. Discover advanced prompt engineering techniques, mega-prompts, and the best ChatGPT prompts for business, coding, and productivity.",
}

export default function ChatGPTPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#10a37f] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <MessageSquare className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            ChatGPT <br />
            <span className="italic opacity-90">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Stop chatting, start engineering. Our definitive guide reveals the advanced techniques that turn ChatGPT
            into a world-class assistant, researcher, and creator.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#10a37f] mb-6">Master ChatGPT</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "The ChatGPT Revolution", num: "01" },
                  { id: "o1-reasoning", label: "GPT-o1 Reasoning", num: "02" },
                  { id: "framework", label: "Advanced Frameworks", num: "03" },
                  { id: "business", label: "Business & Marketing", num: "04" },
                  { id: "coding", label: "Coding & Technical", num: "05" },
                  { id: "mega-prompts", label: "Mega-Prompts Hub", num: "06" },
                  { id: "custom-instructions", label: "Custom Instructions", num: "07" },
                  { id: "jailbreaking", label: "Safety & Ethics", num: "08" },
                  { id: "faq", label: "ChatGPT FAQ", num: "09" },
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

        {/* Content Body */}
        <div className="lg:col-span-9 space-y-32 max-w-4xl">
          <article id="intro" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Beyond the Basics: Why Most ChatGPT Prompts Fail</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Most users treat ChatGPT like a search engine or a calculator. They ask simple, one-off questions and
              receive generic, surface-level answers. To unlock the true potential of GPT-4o and the new reasoning
              series like GPT-o1, you must shift your mindset from "asking" to "directing."
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Mastering <strong>ChatGPT prompts</strong> isn't about memorizing specific phrases; it's about
              understanding context window management, few-shot prompting, and chain-of-thought reasoning. When you
              provide the right structural constraints, the model stops hallucinating and starts producing high-value,
              original insights that are indistinguishable from human expertise.
            </p>
          </article>

          <section id="o1-reasoning" className="space-y-12 bg-slate-900 text-slate-100 p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#10a37f] font-bold uppercase tracking-widest text-sm mb-6">
                <Brain className="w-5 h-5" />
                <span>The GPT-o1 Paradigm</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Prompting for Pure Reason</h2>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                OpenAI's o1 series introduces internal 'Chain of Thought'. You no longer need to tell the model to
                'think step by step'—it does it by default. Instead, you must prompt for **objective verification**.
              </p>
              <div className="space-y-8">
                <div className="p-8 bg-slate-800 rounded-2xl border border-white/5">
                  <h4 className="text-[#10a37f] font-bold mb-4 uppercase tracking-widest text-xs">The o1 Framework:</h4>
                  <ul className="space-y-4 text-sm opacity-70">
                    <li>
                      <strong>1. Define the Constraint:</strong> "Solve this complex logic puzzle. Use absolute
                      mathematical proof for every step."
                    </li>
                    <li>
                      <strong>2. Set the Persona:</strong> "Act as a theoretical physicist reviewing a new hypothesis."
                    </li>
                    <li>
                      <strong>3. Demand Self-Correction:</strong> "After providing your solution, identify two potential
                      flaws in your own reasoning and provide counter-arguments."
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="framework" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#10a37f]/10 rounded-xl">
                <Target className="w-8 h-8 text-[#10a37f]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">The RGC Framework for ChatGPT</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you remember only one thing about prompting, let it be the RGC (Role, Goal, Context) framework.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Role",
                  desc: "Assign a persona. 'Act as a Senior SEO Specialist' or 'Act as a Python Mentor.'",
                },
                {
                  title: "Goal",
                  desc: "Define the exact output. 'Create a 12-month content calendar' or 'Refactor this code.'",
                },
                {
                  title: "Context",
                  desc: "Provide the 'why' and 'how.' Include target audience, tone, and constraints.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-8 border-none shadow-xl bg-secondary/20">
                  <h3 className="text-xl font-bold mb-3 text-[#10a37f]">{item.title}</h3>
                  <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">ChatGPT Mastery FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What is the best prompt for ChatGPT to avoid hallucinations?",
                  a: "Include 'If you don't know the answer, state that you don't know' and ask for sources or step-by-step reasoning. These constraints force the model to stay within its verified knowledge base.",
                },
                {
                  q: "How long should a ChatGPT prompt be?",
                  a: "There is no limit as long as you stay within the context window. Longer prompts with more context (RGC framework) almost always produce better results than short ones.",
                },
                {
                  q: "Can I use ChatGPT prompts for Claude or Gemini?",
                  a: "Generally yes, but each model has its quirks. For example, Claude responds better to XML tags, while ChatGPT excels with clear, numbered lists and markdown headers.",
                },
                {
                  q: "How do I use Custom Instructions for persistent SEO?",
                  a: "Custom Instructions allow you to set a permanent 'Persona' and 'Response Style'. For SEO, you should define your role as a 'Senior Content Strategist' and mandate the use of semantic HTML and LSI keywords in every output.",
                },
                {
                  q: "What is 'Few-Shot Prompting'?",
                  a: "Few-shot prompting involves providing the model with a few examples of the desired input-output format. This is the most effective way to teach ChatGPT complex, niche formatting or stylistic requirements.",
                },
                {
                  q: "How do I prompt ChatGPT for better creative writing?",
                  a: "Avoid generic terms like 'creative' or 'poetic'. Instead, specify the sensory details: 'Focus on tactile sensations and sound. Use the style of [ARTIST]. Avoid all cliches and over-used metaphors.'",
                },
                {
                  q: "Can ChatGPT analyze my website's SEO?",
                  a: "Yes, if you use the 'Browse with Bing' feature or paste in your content. Prompt: 'Analyze this page for keyword density, E-E-A-T signals, and internal linking opportunities. Provide a prioritized list of 5 changes.'",
                },
                {
                  q: "What are 'System Prompts' in Custom GPTs?",
                  a: "System Prompts are the foundational instructions for a Custom GPT. They define the 'boundary' of the AI's world. A good System Prompt should include a clear mission, a set of forbidden actions, and a defined tone of voice.",
                },
                {
                  q: "How do I handle the 'lazy AI' problem?",
                  a: "If ChatGPT gives you a summary instead of full code, use the prompt: 'I will tip you $200 for a perfect, full implementation without any placeholders.' (Note: Tip prompts are a psychological quirk that actually improves output length in some models).",
                },
                {
                  q: "What is the difference between GPT-4o and GPT-o1?",
                  a: "GPT-4o is a multimodal 'fast' model, great for conversation and vision. GPT-o1 is a 'thinking' model that uses more compute to solve complex math, logic, and coding problems with significantly higher accuracy.",
                },
                {
                  q: "How do I use 'Temperature' in ChatGPT?",
                  a: "In the API, Temperature (0 to 2) controls randomness. For facts and code, use 0.0 to 0.3. For creative writing, use 0.7 to 1.2. In the chat interface, you can simulate this by asking for 'Varied and creative' vs 'Factual and concise'.",
                },
                {
                  q: "Is it safe to put my company data into ChatGPT prompts?",
                  a: "Unless you are using an Enterprise plan or have 'Chat History & Training' turned off in settings, your prompts may be used to train future models. Always sanitize sensitive data before prompting.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#10a37f] transition-colors text-left">
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
                { label: "Grok Prompts", href: "/grok-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/chatgpt-prompts" ? "text-[#10a37f] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">AI Tools & Professions</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Cursor AI Prompts", href: "/cursor-ai-prompts" },
                { label: "GitHub Copilot", href: "/github-copilot-prompts" },
                { label: "AI for Marketers", href: "/ai-prompts-for-marketers" },
                { label: "AI for Developers", href: "/ai-prompts-for-developers" },
                { label: "AI for Data Analysts", href: "/ai-prompts-for-data-analysts" },
                { label: "ChatGPT for Excel", href: "/chatgpt-prompts-excel" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Productivity</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "AI for Presentations", href: "/ai-prompts-presentations" },
                { label: "AI for Brainstorming", href: "/ai-prompts-brainstorming" },
                { label: "AI for Meeting Notes", href: "/ai-prompts-meeting-notes" },
                { label: "Business Plans", href: "/chatgpt-prompts-business-plans" },
                { label: "Personal Finance", href: "/ai-prompts-personal-finance" },
                { label: "Customer Service", href: "/ai-prompts-customer-service" },
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
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Image Prompts", href: "/image-prompts" },
                { label: "Free Prompts Library", href: "/free-ai-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Social Media Marketing", href: "/social-media-marketing-prompts" },
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
