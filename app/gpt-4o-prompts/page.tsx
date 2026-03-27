import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Eye, Mic, Brain } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "GPT-4o Prompts: Master ChatGPT's Most Powerful Model | GPTPrompts.AI",
  description:
    "Unlock GPT-4o's full potential with expert prompts. Vision analysis, audio, code generation, and reasoning — 50+ prompts for GPT-4o's unique multimodal capabilities. The definitive 2026 guide.",
  keywords: ["gpt-4o prompts", "gpt4o prompts", "chatgpt 4o prompts", "gpt-4o guide", "openai gpt-4o", "gpt-4o vision prompts"],
}

export default function GPT4oPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#10a37f] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Brain className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            GPT-4o<br />
            <span className="italic opacity-90">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            GPT-4o is ChatGPT's most powerful model — handling text, images, audio, and code natively. This guide teaches you how to unlock every capability with the right prompts.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70">
            <span>50+ Prompts</span>
            <span>·</span>
            <span>Text · Vision · Audio · Code</span>
            <span>·</span>
            <span>Updated 2026</span>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#10a37f] mb-6">GPT-4o Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "GPT-4o vs GPT-4", num: "00" },
                  { id: "text", label: "Text Prompts", num: "01" },
                  { id: "vision", label: "Vision & Image Analysis", num: "02" },
                  { id: "coding", label: "Coding with GPT-4o", num: "03" },
                  { id: "reasoning", label: "Complex Reasoning", num: "04" },
                  { id: "structured", label: "Structured Output", num: "05" },
                  { id: "faq", label: "FAQ", num: "06" },
                ].map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="group flex items-center justify-between hover:text-[#10a37f] transition-colors">
                      <span>{link.label}</span>
                      <span className="text-xs opacity-30 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Related</p>
              <Link href="/chatgpt-prompts" className="block hover:text-[#10a37f] transition-colors">ChatGPT Guide →</Link>
              <Link href="/chatgpt-system-prompts" className="block hover:text-[#10a37f] transition-colors">System Prompts →</Link>
              <Link href="/gpt-o1-guide" className="block hover:text-[#10a37f] transition-colors">o1 Reasoning Model →</Link>
              <Link href="/claude-prompts" className="block hover:text-[#10a37f] transition-colors">Claude vs GPT-4o →</Link>
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-24 pb-32">
          <section id="intro" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-6">GPT-4o vs Other ChatGPT Models</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              GPT-4o ("o" for "omni") is OpenAI's flagship model — it processes text, images, and audio natively as a single unified model, not separate systems stitched together. This makes it faster, cheaper, and more capable than GPT-4 Turbo for most tasks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: <Brain className="w-5 h-5" />, title: "Text & Reasoning", desc: "Best-in-class for complex analysis, writing, and instruction following" },
                { icon: <Eye className="w-5 h-5" />, title: "Vision", desc: "Analyze images, screenshots, documents, and charts natively" },
                { icon: <Mic className="w-5 h-5" />, title: "Multimodal", desc: "Handles text + image inputs simultaneously for richer context" },
              ].map((item) => (
                <Card key={item.title} className="p-4">
                  <div className="text-[#10a37f] mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Use GPT-4o when:</strong> You need the best balance of speed, cost, and capability. It's the default model in ChatGPT Plus and the best choice for 90% of tasks. Use o1 or o3 only when you specifically need deep reasoning on math/logic problems.
            </p>
          </section>

          <section id="text" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">GPT-4o Text Prompts</h2>
            <p className="text-muted-foreground mb-8">GPT-4o excels at complex instruction-following, nuanced writing, and long-form analysis.</p>
            <div className="space-y-4">
              {[
                {
                  title: "Deep Analysis Prompt",
                  prompt: `Analyze [topic/document/situation] comprehensively.

Approach this like a McKinsey consultant would:
1. Executive summary (3 bullet points)
2. Key findings (with evidence for each)
3. Root cause analysis
4. Strategic implications
5. Recommended actions (prioritized by impact/effort)

Be specific, not generic. Cite concrete examples. Where you don't have data, flag the assumption explicitly.`
                },
                {
                  title: "Long-Form Writing",
                  prompt: `Write a [type: article/report/essay] on [topic].

Length: [X] words
Audience: [describe readers — their expertise level, why they care]
Tone: [professional/conversational/academic]
Structure: Use H2 and H3 headers
Key points to cover: [list 3-5 must-include points]
Perspective: [any specific angle or argument to make]
Don't include: [what to avoid]

Open with a hook — a surprising fact, compelling question, or vivid scenario. Not a definition.`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-[#10a37f]">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          <section id="vision" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Vision & Image Analysis Prompts</h2>
            <p className="text-muted-foreground mb-8">GPT-4o can analyze any image you upload — documents, screenshots, charts, photos, code, and more.</p>
            <div className="space-y-4">
              {[
                {
                  title: "Document/Screenshot Analysis",
                  prompt: `[Upload image]
Analyze this image and tell me:
1. What is shown (describe it fully)
2. Key data points or important information
3. Any issues, errors, or anomalies you notice
4. What action I should take based on this`
                },
                {
                  title: "Data Chart Analysis",
                  prompt: `[Upload chart/graph]
Analyze this data visualization:
1. What metric(s) are shown and over what period
2. Key trends (rising, falling, volatile, stable)
3. Notable outliers or anomalies and possible explanations
4. What this data suggests about [business/situation]
5. What questions this raises that the chart doesn't answer`
                },
                {
                  title: "UI/Design Feedback",
                  prompt: `[Upload screenshot of UI]
Review this UI design and provide feedback:

1. First impression (what's the purpose, is it immediately clear?)
2. UX issues (anything confusing, hard to find, or poorly organized?)
3. Visual hierarchy (does the eye go to the right places?)
4. Accessibility concerns (contrast, font size, interactive element sizing)
5. Top 3 specific improvements that would have the biggest impact`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-[#10a37f]">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          <section id="structured" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Structured Output Prompts</h2>
            <p className="text-muted-foreground mb-6">GPT-4o is exceptional at returning structured data — JSON, tables, and formatted outputs that you can use programmatically.</p>
            <div className="space-y-4">
              {[
                {
                  title: "JSON Data Extraction",
                  prompt: `Extract the following information from this text and return it as valid JSON only (no explanation, no markdown):

Text: [paste text]

Schema:
{
  "name": string,
  "date": "YYYY-MM-DD",
  "amount": number,
  "category": string,
  "notes": string | null
}

If a field is missing from the text, use null. Return ONLY valid JSON.`
                },
                {
                  title: "Structured Research Output",
                  prompt: `Research [topic] and return findings in this exact JSON structure:
{
  "summary": "2-3 sentence overview",
  "key_facts": ["fact 1", "fact 2", "fact 3"],
  "pros": ["pro 1", "pro 2"],
  "cons": ["con 1", "con 2"],
  "recommendation": "clear recommendation",
  "confidence": "high|medium|low"
}

Base your confidence rating on how well-established the information is.`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-[#10a37f]">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          <section id="faq" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">GPT-4o FAQ</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                { q: "Is GPT-4o better than GPT-4?", a: "For most tasks, yes. GPT-4o is faster (2x), cheaper (50% cost via API), natively multimodal, and performs comparably or better than GPT-4 Turbo on most benchmarks. The only exception is very deep logical reasoning where GPT-o1/o3 specifically excel." },
                { q: "What's the difference between GPT-4o and o1/o3?", a: "GPT-4o is the best general-purpose model. o1 and o3 are reasoning models that 'think step by step' before answering — they're slower and more expensive but dramatically better at math, logic, and science problems. Use o1/o3 for PhD-level problems; use GPT-4o for everything else." },
                { q: "How do I access GPT-4o?", a: "GPT-4o is the default model in ChatGPT Plus ($20/month). Free ChatGPT users get limited GPT-4o access. For developers, it's available via the OpenAI API as gpt-4o. The latest version is gpt-4o-2024-11-20." },
                { q: "Can GPT-4o see images?", a: "Yes — GPT-4o has native vision capabilities. Upload any image (screenshot, photo, document, chart) and ask questions about it. This works in ChatGPT's web interface, mobile app, and via the API with the image_url parameter." },
                { q: "What is GPT-4o mini?", a: "GPT-4o mini is a smaller, faster, cheaper version of GPT-4o. It's 10x cheaper than GPT-4o via the API and good for high-volume, simpler tasks (classification, summarization, basic Q&A). Use GPT-4o for complex tasks and GPT-4o mini for scale." },
              ].map((item) => (
                <AccordionItem key={item.q} value={item.q} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="border-t pt-16">
            <h2 className="text-2xl font-bold mb-6">Related AI Model Guides</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "o1 Reasoning Guide", href: "/gpt-o1-guide" },
                { label: "DeepSeek AI", href: "/deepseek-ai-prompts" },
                { label: "System Prompts", href: "/chatgpt-system-prompts" },
                { label: "API Prompting", href: "/chatgpt-api-prompting" },
                { label: "Perplexity Prompts", href: "/perplexity-prompts" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-center p-3 rounded-lg border hover:border-[#10a37f] hover:text-[#10a37f] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
