import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Zap, Rocket, Sparkles } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Coolest ChatGPT Prompts: Advanced AI Hacks & Hidden Capabilities | GPTPrompts.AI",
  description:
    "Discover the coolest ChatGPT prompts that unlock hidden capabilities. Learn God mode prompts, roleplay, simulations, and advanced AI use cases for 2026.",
}

export default function CoolestChatGPTPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#ec4899] to-[#d946ef] text-white py-32 px-6 md:px-12 relative overflow-hidden">
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
            Coolest <br />
            <span className="italic opacity-90">ChatGPT Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Beyond basic questions. Unlock advanced AI capabilities with prompts that turn ChatGPT into a simulator,
            game engine, strategist, and more.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#d946ef] mb-6">Advanced Prompts</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "Beyond Basics", num: "00" },
                  { id: "simulator", label: "The Simulator", num: "01" },
                  { id: "synthesizer", label: "Knowledge Synthesizer", num: "02" },
                  { id: "game", label: "Game Engine", num: "03" },
                  { id: "roleplay", label: "Advanced Roleplay", num: "04" },
                  { id: "strategies", label: "Strategic Prompts", num: "05" },
                  { id: "faq", label: "Advanced FAQ", num: "06" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#d946ef] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">Pushing the Boundaries of What ChatGPT Can Do</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              ChatGPT's full potential lies far beyond simple Q&A. The coolest prompts unlock capabilities that feel
              almost magical: ChatGPT as a training partner, a strategic consultant, a game engine, or a knowledge
              synthesizer connecting disparate fields.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The key? Zero-Shot Chain of Thought (CoT) prompting. By requesting step-by-step reasoning, we activate a
              deeper layer of ChatGPT's analytical capabilities. What follows are battle-tested advanced prompts that
              redefine what's possible.
            </p>
          </article>

          <section id="simulator" className="space-y-12 bg-[#fdf2f8] text-foreground p-12 md:p-20 rounded-[2rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#d946ef] font-bold uppercase tracking-widest text-sm mb-6">
                <Rocket className="w-5 h-5" />
                <span>The Simulator Prompt</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Turn ChatGPT Into Your Training Ground
              </h2>
              <p className="text-xl opacity-90 mb-12 leading-relaxed">
                Roleplay scenarios at scale. Use ChatGPT to simulate difficult conversations, technical interviews, or
                high-pressure negotiations before they happen in real life.
              </p>
              <Card className="p-8 bg-white border-2 border-[#d946ef]/30">
                <h4 className="text-[#d946ef] font-bold mb-4 uppercase tracking-widest text-xs">The Prompt:</h4>
                <p className="text-sm text-slate-600 italic mb-4">
                  "Act as a difficult customer who is unhappy with a software delay. I will play the customer success
                  manager. Let's start the roleplay. When I message, respond as the customer would, adding emotional
                  tension and legitimate concerns."
                </p>
                <p className="text-xs text-slate-500 font-bold mt-6 mb-2">Why This Works:</p>
                <p className="text-xs text-slate-500">
                  ChatGPT maintains character consistency and creates realistic objections. After 5-10 exchanges, you'll
                  be far better prepared for actual customer calls.
                </p>
              </Card>
            </div>
          </section>

          <section id="synthesizer" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#d946ef]/10 rounded-xl">
                <Zap className="w-8 h-8 text-[#d946ef]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">The Knowledge Synthesizer</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ask ChatGPT to find unexpected connections between unrelated fields. This unlocks creative thinking and
              novel problem-solving approaches.
            </p>
            <div className="space-y-6">
              <Card className="p-6 border-2 border-[#d946ef]/20 hover:border-[#d946ef]/50 transition-colors">
                <h3 className="font-bold mb-3">The Physics of Baking Prompt</h3>
                <p className="text-sm font-mono bg-slate-50 p-4 rounded border border-slate-200 text-slate-700 mb-4">
                  "Explain the principles of Quantum Physics using only metaphors from the world of professional baking.
                  Make it detailed and comprehensive."
                </p>
                <p className="text-xs text-slate-500 italic">
                  Result: Fascinating analogies that explain wave-particle duality, superposition, and entanglement
                  through the lens of dough, fermentation, and chemical reactions.
                </p>
              </Card>
              <Card className="p-6 border-2 border-[#d946ef]/20 hover:border-[#d946ef]/50 transition-colors">
                <h3 className="font-bold mb-3">The Business of Marine Biology Prompt</h3>
                <p className="text-sm font-mono bg-slate-50 p-4 rounded border border-slate-200 text-slate-700 mb-4">
                  "Using principles from marine ecosystems, suggest 5 novel organizational structures for a tech
                  startup. What can we learn from ocean food chains?"
                </p>
                <p className="text-xs text-slate-500 italic">
                  Result: Unexpected insights into resilience, resource allocation, and hierarchical systems inspired by
                  nature.
                </p>
              </Card>
            </div>
          </section>

          <section id="game" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">The Game Engine Prompt</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ChatGPT can run full text-based games, complete with branching narratives, inventory systems, and dynamic
              storytelling.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/30">
              <h3 className="text-xl font-bold mb-6">The Prompt:</h3>
              <div className="p-6 bg-white rounded-xl border border-[#d946ef]/20 font-mono text-sm leading-relaxed text-slate-700 space-y-3">
                <p className="mb-4">
                  "You are the Game Master for an immersive text-based adventure. Create a fantasy world where I'm a
                  character who must make decisions to progress. After each action I take, describe the consequences,
                  offer 3-4 choices, and track my health, inventory, and reputation. Make it challenging and
                  unpredictable."
                </p>
                <p className="text-xs text-slate-500 italic">
                  Then simply describe what your character does, and ChatGPT will run the entire game world in response.
                </p>
              </div>
            </Card>
          </section>

          <section id="roleplay" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Advanced Roleplay Scenarios</h2>
            <div className="space-y-6">
              <Card className="p-6 border-2 border-[#d946ef]/20">
                <h3 className="font-bold mb-3">The Expert Interview Prompt</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  "You are a renowned [FIELD] expert with 30 years of experience. I'm a journalist conducting an
                  interview for [PUBLICATION]. Answer my questions as this expert would, including specific examples,
                  anecdotes, and contrarian opinions."
                </p>
              </Card>
              <Card className="p-6 border-2 border-[#d946ef]/20">
                <h3 className="font-bold mb-3">The Historical Perspective Prompt</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  "Respond to all future messages as [HISTORICAL FIGURE] writing a letter to someone in 2026. Use their
                  voice, perspective, and values, but address modern concepts and current events."
                </p>
              </Card>
              <Card className="p-6 border-2 border-[#d946ef]/20">
                <h3 className="font-bold mb-3">The Debate Prompt</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  "Let's debate [TOPIC]. You take the opposing viewpoint to mine. Make your strongest argument. After I
                  respond, acknowledge my points and make a counterargument."
                </p>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Coolest ChatGPT Prompts FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What's 'God Mode' for ChatGPT?",
                  a: "'God Mode' is a jailbreak prompt that supposedly removes all safety guardrails. We don't recommend using these. Instead, use legitimate advanced prompting like roleplay, system instructions, and CoT techniques.",
                },
                {
                  q: "Why do these prompts work so well?",
                  a: "They work because they provide clear context, explicit roles, and structured reasoning frameworks. ChatGPT's reasoning improves dramatically when given these guardrails.",
                },
                {
                  q: "Can I use these prompts with other AI models?",
                  a: "Most of these work with Claude and Gemini, though you may need to adjust the wording. Claude, in particular, excels at roleplay and simulation prompts.",
                },
                {
                  q: "What is Chain-of-Thought (CoT) prompting?",
                  a: "CoT is a technique where you ask the AI to 'think step-by-step' before answering. This activates deeper reasoning and significantly improves answer quality.",
                },
                {
                  q: "How do I modify these prompts for my specific use?",
                  a: "Replace the bracketed fields with your specific context. For roleplay, change the character or scenario. For simulations, adjust the rules and parameters.",
                },
                {
                  q: "Can these prompts help with learning?",
                  a: "Absolutely. Use ChatGPT as an interactive tutor, test subject, or debate partner. These advanced prompts are some of the best learning tools available.",
                },
                {
                  q: "What's the difference between these and basic prompts?",
                  a: "Basic prompts ask questions. Advanced prompts create scenarios, demand step-by-step reasoning, and provide structured frameworks for ChatGPT to work within.",
                },
                {
                  q: "Are there prompts for business strategy?",
                  a: "Yes. Use ChatGPT as a strategic advisor: 'Act as a venture capitalist analyzing this business plan. Identify risks, opportunities, and suggest 3 pivots I should consider.'",
                },
                {
                  q: "Can I generate even cooler prompts myself?",
                  a: "Absolutely. The framework is: provide context, define a role, set constraints, ask for reasoning, and specify format. Combine these elements for custom advanced prompts.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#d946ef] transition-colors text-left">
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">AI Resources</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Kimi AI Prompts", href: "/kimi-ai-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Best ChatGPT Prompts", href: "/coolest-chatgpt-prompts" },
                { label: "Free Prompts Library", href: "/free-ai-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/coolest-chatgpt-prompts" ? "text-[#d946ef] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Learning</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Beginner AI Prompts", href: "/good-ai-prompts" },
                { label: "Coolest ChatGPT Prompts", href: "/coolest-chatgpt-prompts" },
                { label: "SQL Prompts", href: "/sql-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Story Prompts", href: "/story-prompts" },
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
                { label: "Stanford Essays", href: "/stanford-essay-prompts" },
                { label: "UMD Essays", href: "/umd-essays" },
                { label: "UChicago Essays", href: "/uchicago-essays" },
                { label: "Princeton Essays", href: "/princeton-essays" },
                { label: "Common App Essays", href: "/common-app-essays" },
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
