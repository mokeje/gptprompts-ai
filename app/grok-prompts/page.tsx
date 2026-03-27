import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Zap, MessageSquare, Brain } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Grok Prompts: Master xAI's Grok 3 AI | GPTPrompts.AI",
  description:
    "Complete guide to Grok AI prompts. Master Grok 3's unique capabilities — real-time web access, wit, and deep reasoning. 40+ prompts for research, writing, coding, and X/Twitter integration.",
  keywords: ["grok prompts", "grok ai prompts", "grok 3 prompts", "xai grok", "grok chatbot prompts", "best grok prompts"],
}

export default function GrokPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-black text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Brain className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity">
            GPTPrompts.AI
          </Link>
          <div className="inline-flex items-center gap-2 text-xs font-mono bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            xAI · Real-time Web Access · Grok 3
          </div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Grok<br />
            <span className="italic text-gray-400">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 text-gray-300">
            Elon Musk's AI has a real-time web connection, a sharp wit, and is deeply integrated with X. Here's how to use it to its full potential.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            <span>40+ Prompts</span>
            <span>·</span>
            <span>Grok 3 · Real-time data</span>
            <span>·</span>
            <span>Updated 2026</span>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">Grok Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "Grok vs ChatGPT vs Claude", num: "00" },
                  { id: "realtime", label: "Real-Time Research", num: "01" },
                  { id: "analysis", label: "Deep Analysis", num: "02" },
                  { id: "creative", label: "Creative & Humor", num: "03" },
                  { id: "coding", label: "Coding with Grok", num: "04" },
                  { id: "twitter", label: "X/Twitter Content", num: "05" },
                  { id: "faq", label: "FAQ", num: "06" },
                ].map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="group flex items-center justify-between hover:text-black transition-colors">
                      <span>{link.label}</span>
                      <span className="text-xs opacity-30 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-4 border-gray-200 bg-gray-50">
              <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" /> Grok's Superpower
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Real-time web access. Unlike ChatGPT (without browsing), Grok can pull current data from the web and X/Twitter in every response.
              </p>
            </Card>
            <div className="space-y-2 text-sm">
              <p className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Related</p>
              <Link href="/chatgpt-prompts" className="block hover:text-black transition-colors">ChatGPT Guide →</Link>
              <Link href="/claude-prompts" className="block hover:text-black transition-colors">Claude Guide →</Link>
              <Link href="/deepseek-ai-prompts" className="block hover:text-black transition-colors">DeepSeek Prompts →</Link>
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-24 pb-32">
          <section id="intro" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Grok vs ChatGPT vs Claude</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Grok is xAI's large language model, built from scratch by Elon Musk's team. Grok 3 (released February 2025) is genuinely competitive with GPT-4o and Claude 3.7 on benchmarks — and has some unique advantages worth knowing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: <Zap className="w-5 h-5" />, title: "Real-time web access", desc: "Always-on web search in every response — no toggle needed" },
                { icon: <MessageSquare className="w-5 h-5" />, title: "X/Twitter integration", desc: "Access to real-time X posts and trending discussions" },
                { icon: <Brain className="w-5 h-5" />, title: "Think mode", desc: "Extended reasoning for hard problems (like o1/Claude's extended thinking)" },
              ].map((item) => (
                <Card key={item.title} className="p-4">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Best for:</strong> Current events research, social media monitoring, tasks where real-time data matters, and users who want a more direct, opinionated AI.
              <br /><strong>Use ChatGPT/Claude instead for:</strong> Complex multi-turn coding projects, document analysis with uploads, or when you want maximum predictability.
            </p>
          </section>

          <section id="realtime" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Real-Time Research Prompts</h2>
            <p className="text-muted-foreground mb-8">Grok's biggest edge: it has live web access built in. No need to enable "browse the web" — it's always on.</p>
            <div className="space-y-4">
              {[
                {
                  title: "Current Events Analysis",
                  prompt: `What is happening with [topic/company/situation] right now?

Give me:
1. What happened (current, factual summary)
2. Why it matters
3. Different perspectives on this (not just one side)
4. What to watch for next
5. Your assessment of the significance

Prioritize information from the last 7 days. Flag if key facts are uncertain.`
                },
                {
                  title: "Market Intelligence Brief",
                  prompt: `Search for the latest information on [company/industry/market].

Find:
- Recent news in the last 30 days
- Any major announcements, launches, or controversies
- Stock or market movements if public company
- Social media sentiment on X
- What competitors are doing

Format as a 1-page intelligence brief with date stamps on information.`
                },
                {
                  title: "Trending Topic Research",
                  prompt: `What is trending right now on X/Twitter about [topic]?

Tell me:
- Top 5 posts or discussions about this
- The general sentiment (positive/negative/neutral)
- Key people driving the conversation
- Any viral content or memes related to this
- What this tells us about public opinion

I want to understand this trend, not just see a list of posts.`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-black">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          <section id="creative" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Creative & Humor Prompts</h2>
            <p className="text-muted-foreground mb-6">Grok was designed with a distinct personality — it can be witty, direct, and willing to engage with edgy topics that other AIs avoid.</p>
            <div className="space-y-4">
              {[
                {
                  title: "Satirical/Witty Content",
                  prompt: `Write [content type] about [topic] with a sharp, satirical edge.

Tone: Witty and incisive — like The Onion meets industry insider
Target: [audience]
Edge: Don't pull punches — be funny about the real absurdities
Length: [X] words/paragraphs

Avoid: Generic jokes, clichéd references, anything that feels focus-grouped. Go for the unexpected angle.`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-black">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          <section id="faq" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Grok FAQ</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                { q: "Is Grok 3 better than ChatGPT?", a: "On most benchmarks, Grok 3 performs comparably to GPT-4o and Claude 3.7. It's particularly competitive on coding and mathematics. Grok's unique advantage is always-on real-time web search and X/Twitter integration. ChatGPT has a larger ecosystem of plugins, custom GPTs, and DALL-E image generation." },
                { q: "How do I access Grok?", a: "Grok is available through X (formerly Twitter) with an X Premium or Premium+ subscription. You can also access it at grok.com. Grok 3 with extended thinking is available to X Premium+ subscribers." },
                { q: "What is Grok's 'Think mode'?", a: "Think mode is Grok's extended reasoning feature — similar to OpenAI's o1 chain-of-thought. When enabled, Grok 'thinks through' a problem step by step before giving a final answer. It's slower but significantly better on math, coding, and logic problems." },
                { q: "Does Grok have an API?", a: "Yes — xAI released the Grok API in 2024. It's OpenAI API-compatible, meaning you can swap the base URL and use Grok in applications built for ChatGPT. The API includes Grok 3 and Grok 3 mini models." },
                { q: "Is Grok good for coding?", a: "Grok 3 performs competitively on coding benchmarks. It has real-time access to documentation and Stack Overflow discussions, which is useful. For complex multi-file projects, Cursor AI (which supports Grok via API) gives better results than Grok's chat interface alone." },
              ].map((item) => (
                <AccordionItem key={item.q} value={item.q} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="border-t pt-16">
            <h2 className="text-2xl font-bold mb-6">Compare AI Models</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Perplexity Prompts", href: "/perplexity-prompts" },
                { label: "DeepSeek AI", href: "/deepseek-ai-prompts" },
                { label: "GPT-4o Guide", href: "/gpt-4o-prompts" },
                { label: "o1 Reasoning", href: "/gpt-o1-guide" },
                { label: "All AI Models", href: "/website-links#ai-models" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-center p-3 rounded-lg border hover:border-black hover:text-black transition-colors">
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
