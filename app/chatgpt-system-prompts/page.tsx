import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Settings, Shield, Zap } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ChatGPT System Prompts: 50+ Best Examples & How to Write Them | GPTPrompts.AI",
  description:
    "Master ChatGPT system prompts. 50+ copy-paste system prompts for business, coding, writing, customer service, and more. Learn how to write system prompts that transform ChatGPT's behavior permanently.",
  keywords: ["chatgpt system prompts", "system prompt examples", "best system prompts", "custom gpt system prompt", "openai system prompt", "chatgpt system message"],
}

export default function ChatGPTSystemPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#10a37f] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Settings className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            System<br />
            <span className="italic opacity-90">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            The most powerful, underused feature in ChatGPT. Set permanent instructions that transform how the AI behaves for every single conversation.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70">
            <span>50+ Examples</span>
            <span>·</span>
            <span>ChatGPT · Claude · API</span>
            <span>·</span>
            <span>Updated 2026</span>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#10a37f] mb-6">System Prompts</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "what", label: "What Are System Prompts?", num: "00" },
                  { id: "how-to-write", label: "How to Write Them", num: "01" },
                  { id: "personal", label: "Personal Productivity", num: "02" },
                  { id: "business", label: "Business & Customer Service", num: "03" },
                  { id: "coding", label: "Coding Assistant", num: "04" },
                  { id: "writing", label: "Writing & Content", num: "05" },
                  { id: "custom-gpt", label: "Custom GPT Prompts", num: "06" },
                  { id: "api", label: "API System Prompts", num: "07" },
                  { id: "faq", label: "FAQ", num: "08" },
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
            <Card className="p-4 border-[#10a37f]/20 bg-[#10a37f]/5">
              <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#10a37f]" /> Where to Add
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                ChatGPT: Settings → Personalization → Custom Instructions. Claude: Start of conversation. API: system parameter.
              </p>
            </Card>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-24 pb-32">

          <section id="what" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-6">What Are System Prompts?</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              A system prompt is a special instruction that runs before every conversation — it defines the AI's persona, capabilities, constraints, and behavior at a fundamental level. Unlike regular prompts, system prompts persist and shape every response the AI gives.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Think of it as programming an AI assistant. Instead of repeating "you are an expert copywriter who writes in a casual tone" at the start of every chat, you set it once and it's always active.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <Settings className="w-5 h-5" />, title: "Sets behavior permanently", desc: "Active for every conversation without re-prompting" },
                { icon: <Shield className="w-5 h-5" />, title: "Defines constraints", desc: "What the AI should and shouldn't do" },
                { icon: <Zap className="w-5 h-5" />, title: "Creates personas", desc: "Give the AI a specific role, tone, and expertise" },
              ].map((item) => (
                <Card key={item.title} className="p-4">
                  <div className="text-[#10a37f] mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="how-to-write" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-6">How to Write Great System Prompts</h2>
            <p className="text-muted-foreground mb-6">Great system prompts follow a consistent structure. Include these 5 elements:</p>
            <div className="space-y-3 mb-8">
              {[
                { num: "1", title: "Role/Persona", desc: "Who is the AI? 'You are an expert financial analyst with 20 years of experience...'" },
                { num: "2", title: "Context", desc: "What's the situation? 'You are helping users of a B2B SaaS platform...'" },
                { num: "3", title: "Behavior rules", desc: "How should it respond? 'Always ask clarifying questions before answering. Never guess.'" },
                { num: "4", title: "Format instructions", desc: "How should output look? 'Respond in bullet points. Keep answers under 200 words.'" },
                { num: "5", title: "Constraints", desc: "What should it avoid? 'Do not discuss competitors. Escalate billing questions.'" },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 p-4 rounded-lg border">
                  <div className="w-8 h-8 bg-[#10a37f] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.num}</div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="personal" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Personal Productivity System Prompts</h2>
            <p className="text-muted-foreground mb-8">Set these in ChatGPT Custom Instructions to make every session more useful.</p>
            <div className="space-y-4">
              {[
                {
                  title: "The Personal Assistant",
                  prompt: `You are my personal AI assistant. Here's what you need to know about me:

Name: [Your name]
Profession: [Your job]
Goals: [Your current main goals]
Communication style: I prefer concise, direct answers. Skip preamble — just give me the answer.
Always:
- Be honest even if it's not what I want to hear
- Ask for clarification when my request is ambiguous
- Remember context from earlier in this conversation
- Suggest things I might not have considered
Never:
- Start responses with "Great!" or similar filler
- Give generic advice when specific advice is possible
- Over-explain obvious things`
                },
                {
                  title: "The Focused Work Mode",
                  prompt: `You are a productivity assistant in deep work mode.

My focus today: [task or project]
My goal for this session: [specific outcome]

Rules:
- Keep all responses brief and actionable
- If I go off-topic, gently redirect me to my goal
- Structure any outputs in numbered steps
- When I'm stuck, ask ONE question to unblock me
- End each response with a single "Next action: [specific step]"`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-[#10a37f]">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          <section id="business" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Business & Customer Service</h2>
            <p className="text-muted-foreground mb-8">Use these as the system prompt for a Custom GPT or API-powered customer service bot.</p>
            <div className="space-y-4">
              {[
                {
                  title: "Customer Support Bot",
                  prompt: `You are a customer support agent for [Company Name], a [brief description].

Your role: Help customers resolve issues quickly and leave happy.

Products you support: [list products]
Common issues you handle: [list 5-6 common issues]

Response rules:
- Always greet the customer by name if provided
- Acknowledge their frustration before solving the problem
- Provide step-by-step solutions with numbered lists
- If you can't solve it, escalate with: "Let me connect you with our team at [email]"
- End with: "Is there anything else I can help you with today?"

Tone: Professional but warm. Never defensive or dismissive.
Never: Make up information. If unsure, say "Let me verify that for you."`
                },
                {
                  title: "Sales Qualification Bot",
                  prompt: `You are a sales development representative for [Company Name].

Your goal: Qualify leads and book demos for our sales team.

Qualification criteria:
- Company size: 50+ employees
- Industry: [target industries]
- Budget: $[X]/month range
- Decision maker: [titles]

Your process:
1. Ask about their current challenge with [problem your product solves]
2. Discover company size and team structure
3. Understand their budget and timeline
4. If qualified, offer to book a 30-min demo
5. If not qualified, politely end with helpful resources

Never: Make pricing commitments. Don't pitch features before understanding their needs.`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-[#10a37f]">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          <section id="coding" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Coding Assistant System Prompts</h2>
            <p className="text-muted-foreground mb-8">Set these in your API calls or Cursor's .cursorrules for consistent coding assistance.</p>
            <div className="space-y-4">
              {[
                {
                  title: "Senior Developer Persona",
                  prompt: `You are a senior software engineer with 15 years of experience. Your specialty is [tech stack].

Code standards you enforce:
- TypeScript strict mode — never suggest 'any' types
- SOLID principles
- Meaningful variable/function names (no x, tmp, data)
- Error handling in every async function
- Comments only for non-obvious logic

When reviewing code: Point out issues in order of severity (Critical → Major → Minor → Style)
When writing code: Write it as if it will be reviewed by the most critical engineer on the team
When explaining: Use concrete examples, not abstract principles

Default response format for code questions:
1. Direct answer (1-2 sentences)
2. Code example
3. Why this is the right approach
4. Common mistake to avoid`
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">System Prompts FAQ</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                { q: "Where do I put system prompts in ChatGPT?", a: "In ChatGPT, go to Settings → Personalization → Custom Instructions. There are two boxes: 'What should ChatGPT know about you?' and 'How should ChatGPT respond?' Both act as system instructions. For Custom GPTs, there's a dedicated 'System prompt' field in the GPT builder." },
                { q: "Can users override system prompts?", a: "Regular users can partially override system prompts by asking the AI to ignore them. However, a well-written system prompt with strong constraints is harder to override. For production applications (customer service bots, etc.), use the OpenAI API where you control the system message directly." },
                { q: "What's the character limit for system prompts?", a: "ChatGPT Custom Instructions: ~1,500 characters per box (3,000 total). Custom GPT system prompts: up to 8,000 characters. OpenAI API: depends on model context window (128K tokens for GPT-4o). Claude API: no practical limit within the 200K token context window." },
                { q: "How do I write system prompts for Claude?", a: "Claude system prompts work the same as ChatGPT's but Claude responds especially well to explicit XML tags in system prompts. For example: <role>You are a senior financial analyst</role><rules><rule>Always cite your sources</rule></rules>. Claude also benefits from 'Constitutional AI' style instructions about values and behavior." },
                { q: "Can I have different system prompts for different contexts?", a: "Yes. Create different Custom GPTs for different use cases (writing assistant, coding helper, customer service). Each has its own system prompt. For API users, you can dynamically set different system prompts per use case in your code." },
              ].map((item) => (
                <AccordionItem key={item.q} value={item.q} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="border-t pt-16">
            <h2 className="text-2xl font-bold mb-6">Related Prompt Engineering Guides</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Custom Instructions", href: "/chatgpt-custom-instructions" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Role-Based Prompting", href: "/chatgpt-role-based-prompting" },
                { label: "Few-Shot Prompting", href: "/few-shot-prompting" },
                { label: "Prompt Chaining", href: "/prompt-chaining-guide" },
                { label: "API Prompting", href: "/chatgpt-api-prompting" },
                { label: "Prompt Best Practices", href: "/prompt-best-practices" },
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
