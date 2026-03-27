import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Code } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Few-Shot Prompting with ChatGPT: Examples and Best Practices | GPTPrompts.AI",
  description:
    "Master few-shot prompting with 2-5 examples to teach ChatGPT patterns. Copy-paste templates for sentiment analysis, content generation, coding, and classification.",
}

export default function FewShotPromptingPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            Few-Shot <br />
            <span className="italic opacity-90">Prompting.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            Teach ChatGPT patterns with 2-5 examples. Master in-context learning to generate consistent code, writing,
            classifications, and structured data.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9] mb-6">Contents</h3>
              <ul className="space-y-3 text-sm font-medium">
                {[
                  { id: "types", label: "Few vs Zero vs One Shot", num: "01" },
                  { id: "how", label: "How It Works", num: "02" },
                  { id: "examples", label: "Real Examples", num: "03" },
                  { id: "best", label: "Best Practices", num: "04" },
                  { id: "library", label: "Prompt Library", num: "05" },
                  { id: "faq", label: "FAQ", num: "06" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-muted-foreground hover:text-[#0ea5e9] transition-colors flex justify-between"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs opacity-50">{item.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        <article className="lg:col-span-9 space-y-16">
          <section id="types" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9]">01 — Types</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">
                Few-Shot vs Zero-Shot vs One-Shot
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#0ea5e9]/20">
                    <th className="text-left p-3 font-bold">Type</th>
                    <th className="text-left p-3 font-bold">Examples</th>
                    <th className="text-left p-3 font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#0ea5e9]/10">
                    <td className="p-3">Zero-Shot</td>
                    <td className="p-3">0</td>
                    <td className="p-3">Simple, well-known tasks</td>
                  </tr>
                  <tr className="border-b border-[#0ea5e9]/10">
                    <td className="p-3">One-Shot</td>
                    <td className="p-3">1</td>
                    <td className="p-3">Basic format guidance</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#0ea5e9]">Few-Shot</td>
                    <td className="p-3 font-bold text-[#0ea5e9]">2-5</td>
                    <td className="p-3 font-bold text-[#0ea5e9]">Complex patterns, styles, edge cases</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Few-shot shines when outputs need specific structure (JSON, rhymes, sentiment with reasoning) or when
              zero-shot fails on domain-specific logic.
            </p>
          </section>

          <section id="examples" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9]">03 — Examples</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">Real-World Few-Shot Examples</h2>
            </div>

            <Card className="border-[#0ea5e9]/20 bg-card p-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Sentiment Analysis
              </h4>
              <div className="bg-muted p-4 rounded font-mono text-sm whitespace-pre-wrap">
                {`Classify sentiment as positive, negative, or neutral:

Text: "This is awesome!" → Positive
Text: "This is bad!" → Negative
Text: "The movie was okay." → Neutral
Text: "Wow that was rad!" → Positive

Text: "Service was adequate." → ?

Expected Output: Neutral`}
              </div>
            </Card>

            <Card className="border-[#0ea5e9]/20 bg-card p-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Code className="w-5 h-5" />
                JSON Extraction
              </h4>
              <div className="bg-muted p-4 rounded font-mono text-sm whitespace-pre-wrap">
                {`Extract entities as JSON:

"Tim Cook leads Apple" → {"person": "Tim Cook", "company": "Apple"}
"Elon Musk tweets about Tesla" → {"person": "Elon Musk", "company": "Tesla", "action": "tweets"}

"Article mentions Google CEO" → ?`}
              </div>
            </Card>

            <Card className="border-[#0ea5e9]/20 bg-card p-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Product Categorization
              </h4>
              <div className="bg-muted p-4 rounded font-mono text-sm whitespace-pre-wrap">
                {`Classify product type:

"iPhone 15 Pro" → Electronics → Smartphone
"Nike Air Max shoes" → Apparel → Footwear
"USB-C cable 2m" → ?

Expected: Electronics → Accessories`}
              </div>
            </Card>
          </section>

          <section id="best" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9]">04 — Best</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">
                Best Practices for Few-Shot Success
              </h2>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-lg font-bold text-[#0ea5e9] min-w-[30px]">✓</span>
                <div>
                  <h4 className="font-bold">2-5 examples max</h4>
                  <p className="text-sm text-muted-foreground">
                    More risks context overflow; fewer loses pattern clarity.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-lg font-bold text-[#0ea5e9] min-w-[30px]">✓</span>
                <div>
                  <h4 className="font-bold">Diverse examples</h4>
                  <p className="text-sm text-muted-foreground">Cover edge cases, variations, common errors.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-lg font-bold text-[#0ea5e9] min-w-[30px]">✓</span>
                <div>
                  <h4 className="font-bold">Consistent formatting</h4>
                  <p className="text-sm text-muted-foreground">
                    Same delimiters, structure, output style across examples.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-lg font-bold text-[#0ea5e9] min-w-[30px]">✓</span>
                <div>
                  <h4 className="font-bold">Quality over quantity</h4>
                  <p className="text-sm text-muted-foreground">Realistic, correct examples beat generic ones.</p>
                </div>
              </li>
            </ul>
          </section>

          <section id="faq" className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0ea5e9]">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "Why use few-shot over fine-tuning?",
                  a: "Few-shot is instant and requires no training. It works in-context immediately. Fine-tuning is better for high-volume, domain-specific tasks where accuracy must be perfect.",
                },
                {
                  q: "Can few-shot work with no system prompt?",
                  a: "Yes, but system prompt + few-shot examples boosts reliability significantly. System prompts set tone/role; examples show exact format.",
                },
                {
                  q: "What if my examples are incorrect?",
                  a: "ChatGPT will generalize from bad examples. Always verify your examples are 100% correct before using in production.",
                },
                {
                  q: "How many tokens do few-shot examples cost?",
                  a: "Each example uses tokens. For ChatGPT API, 2-5 good examples typically cost 100-500 tokens total.",
                },
                {
                  q: "Can I mix few-shot with chain-of-thought?",
                  a: "Absolutely. Examples showing reasoning steps + system prompt for CoT = powerful combination for complex tasks.",
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-[#0ea5e9]/20">
                  <AccordionTrigger className="hover:text-[#0ea5e9]">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </article>
      </section>

      <footer className="bg-muted border-t mt-32 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          <div>
            <h4 className="font-bold mb-4">Prompting Techniques</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-[#0ea5e9]">
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link href="/prompt-chaining-guide" className="hover:text-[#0ea5e9]">
                  Prompt Chaining
                </Link>
              </li>
              <li>
                <Link href="/prompt-engineering-fundamentals" className="hover:text-[#0ea5e9]">
                  Fundamentals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Advanced Techniques</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/chatgpt-json-prompting" className="hover:text-[#0ea5e9]">
                  JSON Prompting
                </Link>
              </li>
              <li>
                <Link href="/gpt-o1-guide" className="hover:text-[#0ea5e9]">
                  GPT-o1 Reasoning
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-[#0ea5e9]">
                  View All Pages
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm text-muted-foreground">
              © 2026 GPTPrompts.AI. Few-shot prompting turns ChatGPT into a pattern-matching specialist, delivering
              precise outputs with minimal examples.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
