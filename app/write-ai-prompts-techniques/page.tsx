import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Brain } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How to Write AI Prompts: 10 Proven Techniques for Better Results | GPTPrompts.AI",
  description:
    "Master the 10 proven techniques for writing better AI prompts. Learn persona anchors, few-shot prompting, chain-of-thought, and semantic delimiters that unlock AI potential.",
}

export default function WritingTechniquesPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#2563eb] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Brain className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Write AI Prompts <br />
            <span className="italic opacity-90">Perfectly.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            10 proven techniques from top AI researchers. Transform vague ideas into precise, powerful prompts that
            unlock 10x better results.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#2563eb] mb-6">10 Techniques</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "The Art vs Science", num: "00" },
                  { id: "technique1", label: "The Persona Anchor", num: "01" },
                  { id: "technique2", label: "Few-Shot Prompting", num: "02" },
                  { id: "technique3", label: "Chain of Thought", num: "03" },
                  { id: "technique4", label: "Semantic Delimiters", num: "04" },
                  { id: "technique5", label: "Negative Prompting", num: "05" },
                  { id: "technique6", label: "Iterative Refinement", num: "06" },
                  { id: "technique7", label: "Temperature Control", num: "07" },
                  { id: "technique8", label: "Fill-in-the-Blank", num: "08" },
                  { id: "technique9", label: "Recursive Summarization", num: "09" },
                  { id: "technique10", label: "Audience Mirroring", num: "10" },
                  { id: "faq", label: "Techniques FAQ", num: "11" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#2563eb] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              If Prompt Engineering is Science, Prompts are Art
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              The difference between a mediocre response and an exceptional one often comes down to the subtle art of
              prompt composition. These 10 techniques, drawn from academic research and field practice, will transform
              how you communicate with AI models.
            </p>
          </article>

          <section className="space-y-24">
            {[
              {
                id: "technique1",
                num: "01",
                title: "The Persona Anchor (RTF Framework)",
                desc: "Don't just ask for an answer. Assign a Role. An AI acting as a 'Stanford Professor' will give a vastly different answer than an AI acting as a 'TikTok Creator.' The persona anchors the model's knowledge domain and communication style.",
                example:
                  '"Act as a financial advisor with 20 years of experience. Explain cryptocurrency to a beginner without using technical jargon."',
              },
              {
                id: "technique2",
                num: "02",
                title: "Few-Shot Prompting",
                desc: "Provide examples. If you want the AI to write product descriptions, give it two examples of descriptions you love before asking it to write a third. This 'teaches' the AI the pattern within the context window.",
                example:
                  '"Example 1: [Great description]. Example 2: [Great description]. Now write one for: [Your product]."',
              },
              {
                id: "technique3",
                num: "03",
                title: "The Chain of Thought (CoT) Trigger",
                desc: "Include the phrase: 'Think step-by-step before providing the final answer.' This forces the model to use internal reasoning tokens, significantly increasing accuracy in math, logic, and complex planning.",
                example: '"Think step-by-step. Then solve: [Complex problem]."',
              },
              {
                id: "technique4",
                num: "04",
                title: "Semantic Delimiters",
                desc: "Use markers like ### to separate instructions from the data you want the AI to process. This prevents 'Instruction Drift,' where the AI gets confused about what is a command and what is text to be edited.",
                example: '"###INSTRUCTION\\nRewrite this text for clarity.\\n###DATA\\n[Paste text here]\\n###END"',
              },
              {
                id: "technique5",
                num: "05",
                title: "Negative Prompting",
                desc: "Tell the AI what NOT to do. 'Do not use bullet points,' 'Avoid corporate jargon,' or 'Don't mention competitors.' This is the fastest way to refine your output.",
                example:
                  '"Write a compelling article. Do not use ALL CAPS, do not mention price, avoid sales language."',
              },
              {
                id: "technique6",
                num: "06",
                title: "The Iterative Loop (Refinement Prompt)",
                desc: "After the AI gives an answer, don't stop. Use: 'Critique your previous answer for clarity and tone. Now, rewrite it based on that critique.' This dramatically improves output quality.",
                example: '"[Previous output]. Now critique this for accuracy and tone, then rewrite it."',
              },
            ].map((tech, i) => (
              <section key={i} id={tech.id} className="scroll-mt-32">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-6xl font-black opacity-10 leading-none">{tech.num}</span>
                  <div>
                    <h3 className="text-3xl font-bold">{tech.title}</h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{tech.desc}</p>
                <div className="bg-black text-[#2563eb] p-6 font-mono text-sm rounded-lg">
                  <span className="opacity-50 italic block mb-2">// Example</span>
                  {tech.example}
                </div>
              </section>
            ))}
          </section>

          <section id="technique7" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">07. Temperature & Top-P Control</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In professional settings, we prompt for Predictability. Ask the AI to "Provide the most statistically
              likely response" for facts, or "Be as creative and divergent as possible" for brainstorming.
            </p>
          </section>

          <section id="technique8" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">08. The Fill-in-the-Blank Method</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Instead of a long paragraph, give the AI a template with variables like [PRODUCT_NAME] and [AUDIENCE].
              This makes your prompts reusable for your entire team and ensures consistency.
            </p>
          </section>

          <section id="technique9" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">09. Recursive Summarization</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For 1,500+ word documents, ask the AI to "Summarize the key themes first, then expand on each theme
              individually." This prevents the "Context Loss" that often happens at the end of long generations.
            </p>
          </section>

          <section id="technique10" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">10. The Audience Mirror</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Always specify the target reader. "Explain this to a 5-year-old" vs. "Explain this to a CTO" produces
              entirely different linguistic structures and complexity levels.
            </p>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Techniques FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Which technique should I use first?",
                  a: "Start with Persona Anchor (#1) and Few-Shot Prompting (#2). These two techniques alone will improve your results by 50%+.",
                },
                {
                  q: "Can I combine multiple techniques in one prompt?",
                  a: "Absolutely. The best prompts combine Persona Anchor + Semantic Delimiters + Few-Shot + Chain of Thought. Layer them strategically.",
                },
                {
                  q: "How do I know which technique to use for my task?",
                  a: "For logic/math: Chain of Thought. For writing: Audience Mirror + Iterative Loop. For consistency: Fill-in-the-Blank. Experiment to find your formula.",
                },
                {
                  q: "Do these techniques work with all AI models?",
                  a: "Most work universally, but some models respond better to specific techniques. Claude prefers semantic delimiters (XML tags). ChatGPT excels with persona anchors. Test to find what works best for your model.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#2563eb]">{faq.q}</AccordionTrigger>
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
              Master the 10 proven techniques for writing better AI prompts.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Core Guides</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Prompt Engineering Fundamentals", href: "/prompt-engineering-fundamentals" },
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Prompt Best Practices", href: "/prompt-best-practices" },
                { label: "Free Prompts Library", href: "/free-ai-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Prompt Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts Library", href: "/chatgpt-prompts-library" },
                { label: "Prompt Generators", href: "/ai-prompt-generators" },
                { label: "Midjourney Guide", href: "/midjourney-guide" },
                { label: "Human-Like Prompts", href: "/human-sound-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Career Path</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Prompt Engineering Jobs", href: "/prompt-engineering-jobs-2026" },
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letters", href: "/cover-letter-prompts" },
                { label: "Career Guides", href: "/careers" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Tools & AI Models</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Image Prompts", href: "/image-prompts" },
                { label: "SQL Prompts", href: "/sql-prompts" },
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
