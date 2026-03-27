import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { BookOpen, Target, Brain } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Prompt Engineering Fundamentals: A Comprehensive Guide | GPTPrompts.AI",
  description:
    "Master prompt engineering from fundamentals to advanced techniques. Learn core components, salary insights, best practices, and industry certifications for 2026.",
}

export default function PromptEngineeringFundamentalsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white py-32 px-6 md:px-12 relative overflow-hidden">
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
            Prompt Engineering <br />
            <span className="italic opacity-90">Fundamentals.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            The art and science of crafting precise inputs to guide Large Language Models toward generating
            high-quality, relevant outputs. Master the foundation of AI interaction.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">Master Fundamentals</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "core", label: "Core Components", num: "01" },
                  { id: "lifecycle", label: "Prompting Lifecycle", num: "02" },
                  { id: "careers", label: "Careers & Salary", num: "03" },
                  { id: "tutorial", label: "Writing Effective Prompts", num: "04" },
                  { id: "advanced", label: "Advanced Techniques", num: "05" },
                  { id: "certifications", label: "Certifications 2026", num: "06" },
                  { id: "faq", label: "Fundamentals FAQ", num: "07" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#4f46e5] transition-colors"
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
          <article id="core" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Core Components of a Perfect Prompt</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Every high-performing prompt typically contains four structural elements that work together to guide the
              AI toward your desired output.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 not-prose">
              {[
                {
                  title: "Instruction",
                  desc: "The specific task or directive (e.g., 'Summarize,' 'Write,' 'Analyze').",
                },
                {
                  title: "Context",
                  desc: "Background information or external constraints (e.g., 'Write for a 10-year-old audience').",
                },
                {
                  title: "Input Data",
                  desc: "The actual content you want the AI to process (e.g., a specific paragraph or data set).",
                },
                {
                  title: "Output Indicator",
                  desc: "The desired format or style of the result (e.g., 'Format as a table,' 'Use a professional tone').",
                },
              ].map((item, i) => (
                <Card key={i} className="p-6 border border-[#4f46e5]/20 bg-[#4f46e5]/5">
                  <h4 className="font-bold text-[#4f46e5] mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </article>

          <section id="lifecycle" className="space-y-12 bg-slate-900 text-slate-100 p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#4f46e5] font-bold uppercase tracking-widest text-sm mb-6">
                <Target className="w-5 h-5" />
                <span>The Prompting Lifecycle</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Writing a Prompt is Never One-Off</h2>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                Prompt engineering follows an iterative loop that ensures continuous improvement and optimization of
                your inputs.
              </p>
              <div className="space-y-8">
                {[
                  { step: "Draft", desc: "Create an initial instruction based on your goal." },
                  { step: "Test", desc: "Submit the prompt and observe the AI's response." },
                  { step: "Evaluate", desc: "Identify gaps, hallucinations, or formatting errors." },
                  { step: "Refine", desc: "Add constraints, examples, or context to bridge the gap." },
                  { step: "Repeat", desc: "Iterate until the output meets 100% of your requirements." },
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-slate-800 rounded-2xl border border-white/5">
                    <h4 className="text-[#4f46e5] font-bold mb-2 uppercase tracking-widest text-xs">{item.step}</h4>
                    <p className="opacity-70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="careers" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              Prompt Engineering Careers: Salary & Job Outlook 2026
            </h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg text-muted-foreground">
                In 2026, prompt engineering has matured into a specialized discipline. While standalone roles exist at
                research labs, the skill is increasingly integrated into software engineering and data science
                positions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { level: "Junior", range: "$62,000 - $109,000" },
                { level: "Mid-Level", range: "$126,000 median" },
                { level: "Senior/Elite", range: "$250,000 - $375,000+" },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="p-8 bg-gradient-to-br from-[#4f46e5]/10 to-[#7c3aed]/10 border border-[#4f46e5]/20"
                >
                  <h4 className="font-bold text-[#4f46e5] mb-2 uppercase text-sm">{item.level} Roles</h4>
                  <p className="text-2xl font-bold text-foreground">{item.range}</p>
                </Card>
              ))}
            </div>
            <div className="mt-12 space-y-4">
              <h3 className="text-2xl font-bold">High-Paying Industries</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex gap-4">
                  <span className="text-[#4f46e5] font-bold">Legal</span>{" "}
                  <span className="text-muted-foreground">Up to $151,000 (Document automation & compliance)</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#4f46e5] font-bold">Financial Services</span>{" "}
                  <span className="text-muted-foreground">Up to $131,000 (Risk analysis & reporting)</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#4f46e5] font-bold">Healthcare</span>{" "}
                  <span className="text-muted-foreground">Diagnostic assistance & medical documentation</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="tutorial" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">How to Write Effective AI Prompts</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Strategy 1: Assign a Persona",
                  content: "Never ask a general question. Always tell the AI who it should be.",
                  bad: "How do I fix a leaky pipe?",
                  good: "You are a Master Plumber with 20 years of experience. Provide a step-by-step guide for a beginner to fix a leaky kitchen sink pipe using common household tools.",
                },
                {
                  title: "Strategy 2: Use Few-Shot Prompting",
                  content:
                    "LLMs learn patterns instantly. Give them 2–3 examples of the format you want before asking for the final result.",
                  bad: "Classify this as fruit or vegetable: Salmon",
                  good: "Input: Apples. Output: Fruit. Input: Carrots. Output: Vegetable. Input: Salmon. Output: [AI fills this in]",
                },
                {
                  title: "Strategy 3: The Think Step-by-Step Directive",
                  content:
                    "Adding 'Think step-by-step' forces the AI to show its logic, reducing hallucinations in math, logic, and complex reasoning tasks.",
                  bad: "What is 15% of 240?",
                  good: "Think step-by-step: What is 15% of 240? Show your calculation process.",
                },
              ].map((item, i) => (
                <div key={i} className="p-8 border border-[#4f46e5]/20 rounded-lg bg-[#4f46e5]/5">
                  <h3 className="text-2xl font-bold mb-2 text-[#4f46e5]">{item.title}</h3>
                  <p className="text-muted-foreground mb-6">{item.content}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded">
                      <p className="text-xs uppercase font-bold text-red-600 mb-2">Bad Approach</p>
                      <p className="text-sm italic">"{item.bad}"</p>
                    </div>
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded">
                      <p className="text-xs uppercase font-bold text-green-600 mb-2">Better Approach</p>
                      <p className="text-sm italic">"{item.good}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="advanced" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#4f46e5]/10 rounded-xl">
                <Brain className="w-8 h-8 text-[#4f46e5]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Advanced Prompting Techniques & Best Practices</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Zero-Shot vs. Few-Shot",
                  items: [
                    "Zero-Shot: Direct command without examples. Best for simple, common tasks.",
                    "Few-Shot: Provide demonstrations (input-output pairs). Critical for specific tones or structured data outputs like JSON.",
                  ],
                },
                {
                  title: "Chain-of-Thought & Tree-of-Thought",
                  items: [
                    "Chain-of-Thought: AI follows a single logical path.",
                    "Tree-of-Thought: AI generates multiple reasoning paths simultaneously, evaluates them, and 'prunes' the ones that don't work.",
                  ],
                },
                {
                  title: "Prompt Caching & Optimization",
                  items: [
                    "Reuse system prompts or large context blocks to reduce API costs.",
                    "Save up to 80% on token costs for high-volume applications.",
                  ],
                },
              ].map((item, i) => (
                <Card key={i} className="p-8 border-none shadow-lg bg-secondary/20">
                  <h3 className="text-xl font-bold mb-4 text-[#4f46e5]">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.items.map((subitem, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-[#4f46e5] font-bold">•</span>
                        <span>{subitem}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          <section id="certifications" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              Top Prompt Engineering Certifications & Courses 2026
            </h2>
            <p className="text-lg text-muted-foreground">
              To stay competitive, many professionals are pursuing formal recognition of their prompt engineering skills
              through these leading programs.
            </p>
            <div className="grid grid-cols-1 gap-6 mt-8">
              {[
                {
                  name: "Vanderbilt University (Coursera)",
                  course: "Prompt Engineering for ChatGPT",
                  desc: "Top-rated foundational course covering ChatGPT prompt techniques.",
                },
                {
                  name: "DataCamp AI Fundamentals",
                  course: "AI Certifications",
                  desc: "Broader certification including prompt engineering as a core module.",
                },
                {
                  name: "AI Certs (AC-130)",
                  course: "Advanced Certifications",
                  desc: "Technical certification focusing on LLM architecture and prompt security (protecting against prompt injection).",
                },
                {
                  name: "DeepLearning.AI",
                  course: "API-Level Specialization",
                  desc: "Specialized short courses for integrating prompting into API level (LangChain, etc.).",
                },
              ].map((cert, i) => (
                <div key={i} className="p-6 border border-[#4f46e5]/20 bg-[#4f46e5]/5 rounded-lg">
                  <h4 className="font-bold text-[#4f46e5] mb-1">{cert.name}</h4>
                  <p className="text-sm font-semibold mb-2">{cert.course}</p>
                  <p className="text-sm text-muted-foreground">{cert.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Prompt Engineering Fundamentals FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What are the 4 core components of a perfect prompt?",
                  a: "Instruction (specific task), Context (background information), Input Data (content to process), and Output Indicator (desired format or style).",
                },
                {
                  q: "What is the prompting lifecycle?",
                  a: "It's an iterative loop: Draft → Test → Evaluate → Refine → Repeat until the output meets 100% of your requirements.",
                },
                {
                  q: "How much do prompt engineers earn in 2026?",
                  a: "Junior roles: $62K-$109K. Mid-level: ~$126K. Senior/Elite at top labs: $250K-$375K+. Highest in legal ($151K), financial services ($131K), and healthcare sectors.",
                },
                {
                  q: "What is the difference between Zero-Shot and Few-Shot prompting?",
                  a: "Zero-Shot is a direct command without examples, best for simple tasks. Few-Shot provides demonstrations and is critical for maintaining specific tones or structured outputs like JSON.",
                },
                {
                  q: "What does Chain-of-Thought prompting do?",
                  a: "It forces the AI to show its reasoning step-by-step, which significantly reduces hallucinations in math, logic, and complex reasoning tasks.",
                },
                {
                  q: "How can Prompt Caching reduce costs?",
                  a: "By reusing system prompts or large context blocks instead of reprocessing them each time, you can save up to 80% on token costs for high-volume applications.",
                },
                {
                  q: "Which industries pay the highest salaries for prompt engineers?",
                  a: "Legal (up to $151K for document automation), Financial Services (up to $131K for risk analysis), and Healthcare (diagnostic assistance and medical documentation).",
                },
                {
                  q: "What certification should I pursue for prompt engineering?",
                  a: "Vanderbilt's 'Prompt Engineering for ChatGPT' is highly recommended for beginners. For advanced skills, consider AI Certs (AC-130) or DeepLearning.AI's API-level courses.",
                },
                {
                  q: "How do I know if my prompt is effective?",
                  a: "Test it and observe the AI's response. Identify gaps, hallucinations, or formatting errors, then refine by adding constraints, examples, or context. Repeat until outputs meet your requirements.",
                },
                {
                  q: "Can I use the same prompt structure for different AI models?",
                  a: "Generally yes, but each model has quirks. Claude responds better to XML tags, ChatGPT excels with numbered lists and markdown, and Gemini has its own preferences.",
                },
                {
                  q: "What is the best way to provide examples in a Few-Shot prompt?",
                  a: "Provide 2-3 clear input-output examples that demonstrate exactly the format, tone, and style you want. The AI will learn the pattern and apply it to new inputs.",
                },
                {
                  q: "Is prompt engineering a sustainable career in 2026?",
                  a: "Yes. As AI becomes more integrated into business workflows, prompt engineering skills are becoming essential across industries, from startups to Fortune 500 companies.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#4f46e5] transition-colors text-left">
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16">
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
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Story Prompts", href: "/story-prompts" },
                { label: "Essay Prompts", href: "/essay-prompts" },
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
                { label: "Princeton Essays", href: "/princeton-essays" },
                { label: "UC Essays", href: "/uc-essay-prompts" },
                { label: "Common App Essays", href: "/common-app-essays" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Advanced AI Tools</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Gemini AI Guide", href: "/gemini-ai-guide" },
                { label: "Google AI Studio", href: "/google-ai-studio" },
                { label: "Leonardo AI", href: "/leonardo-ai" },
                { label: "Gamma AI", href: "/gamma-ai" },
                { label: "Krea AI", href: "/krea-ai" },
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
                { label: "Human-Like Prompts", href: "/human-like-prompts" },
                { label: "Fundamentals Guide", href: "/prompt-engineering-fundamentals" },
                { label: "Best Practices", href: "/prompt-best-practices" },
                { label: "Virtual Assistant Prompts", href: "/virtual-assistant-prompts" },
                { label: "Creative Writing for Beginners", href: "/creative-writing-prompts-beginners" },
                { label: "Photo Editing Prompts", href: "/photo-editing-prompts" },
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
