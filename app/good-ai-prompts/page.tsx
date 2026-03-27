import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Lightbulb, Star } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Good AI Prompts for Beginners: Start Here Guide to AI Prompting | GPTPrompts.AI",
  description:
    "Complete beginner's guide to writing good AI prompts. Learn the Golden Rule of 3, simple high-reward prompts, and instant productivity hacks for first-time AI users.",
}

export default function GoodAIPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#3b82f6] to-[#1e40af] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Star className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Good AI <br />
            <span className="italic opacity-90">Prompts for Beginners.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            No experience required. Learn the simple formula that turns vague questions into powerful AI responses.
            Start here.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1e40af] mb-6">Beginner Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "why", label: "Why Good Prompts Matter", num: "00" },
                  { id: "golden-rule", label: "The Golden Rule of 3", num: "01" },
                  { id: "5-prompts", label: "5 Quick-Win Prompts", num: "02" },
                  { id: "common-mistakes", label: "Common Mistakes", num: "03" },
                  { id: "tips", label: "Beginner Tips", num: "04" },
                  { id: "faq", label: "Beginner FAQ", num: "05" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#1e40af] transition-colors"
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
          <article id="why" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Why Good Prompts Matter (Even for Beginners)</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              If you're new to AI, the interface can feel intimidating. You type a question, and ChatGPT gives you an
              answer. But what if the answer isn't quite right? What if it's too technical, or too vague, or just
              doesn't match what you needed?
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The secret: AI responds to **structure**. By following a simple formula—the Golden Rule of 3—you'll get
              dramatically better results. No experience needed. No complex terminology. Just clarity.
            </p>
          </article>

          <section id="golden-rule" className="space-y-12 bg-[#f0f9ff] text-foreground p-12 md:p-20 rounded-[2rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#1e40af] font-bold uppercase tracking-widest text-sm mb-6">
                <Lightbulb className="w-5 h-5" />
                <span>The Foundation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">The Golden Rule of 3</h2>
              <p className="text-xl opacity-90 mb-12 leading-relaxed">
                Every good AI prompt contains exactly three things. Master these, and you've unlocked 80% of what makes
                prompts work.
              </p>
              <div className="space-y-6">
                <Card className="p-6 bg-white border-2 border-[#1e40af]/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1e40af] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Persona: Who is the AI?</h3>
                      <p className="text-sm text-muted-foreground">Tell the AI what role to play. Don't skip this.</p>
                      <p className="text-xs font-mono bg-slate-50 p-3 rounded mt-3 text-slate-700">
                        "You are a professional resume writer with 15 years of experience..."
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-white border-2 border-[#1e40af]/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1e40af] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Goal: What do you want?</h3>
                      <p className="text-sm text-muted-foreground">Be specific about your end result.</p>
                      <p className="text-xs font-mono bg-slate-50 p-3 rounded mt-3 text-slate-700">
                        "I need you to rewrite my resume to emphasize leadership skills..."
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-white border-2 border-[#1e40af]/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1e40af] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Format: How should it look?</h3>
                      <p className="text-sm text-muted-foreground">Specify the output structure.</p>
                      <p className="text-xs font-mono bg-slate-50 p-3 rounded mt-3 text-slate-700">
                        "Provide the output as a bulleted list under each job title."
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          <section id="5-prompts" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">5 Instant Productivity Prompts</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Copy these exactly, replace the bracketed sections with your info, and you'll get professional-quality
              results immediately.
            </p>
            <div className="space-y-6">
              <Card className="p-8 border-2 border-[#1e40af]/20 hover:border-[#1e40af]/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#1e40af]/20 rounded-full flex items-center justify-center text-sm font-bold text-[#1e40af]">
                    1
                  </div>
                  <h3 className="text-lg font-bold">The Meal Planner</h3>
                </div>
                <p className="text-sm font-mono bg-slate-50 p-4 rounded border border-slate-200 text-slate-700 mb-4">
                  "You are a nutritionist specializing in meal planning. Create a 3-day high-protein meal plan using
                  only these ingredients: [chicken, spinach, rice]. Format the output as a daily breakdown with
                  breakfast, lunch, and dinner."
                </p>
                <p className="text-xs text-slate-500">Perfect for: Meal prep, dietary restrictions, grocery shopping</p>
              </Card>

              <Card className="p-8 border-2 border-[#1e40af]/20 hover:border-[#1e40af]/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#1e40af]/20 rounded-full flex items-center justify-center text-sm font-bold text-[#1e40af]">
                    2
                  </div>
                  <h3 className="text-lg font-bold">The Email Polisher</h3>
                </div>
                <p className="text-sm font-mono bg-slate-50 p-4 rounded border border-slate-200 text-slate-700 mb-4">
                  "You are a business communication expert. Rewrite this email to sound more professional but still
                  friendly: [Insert your email]. Keep the core message intact."
                </p>
                <p className="text-xs text-slate-500">
                  Perfect for: Work emails, professional correspondence, tone refinement
                </p>
              </Card>

              <Card className="p-8 border-2 border-[#1e40af]/20 hover:border-[#1e40af]/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#1e40af]/20 rounded-full flex items-center justify-center text-sm font-bold text-[#1e40af]">
                    3
                  </div>
                  <h3 className="text-lg font-bold">The Study Buddy</h3>
                </div>
                <p className="text-sm font-mono bg-slate-50 p-4 rounded border border-slate-200 text-slate-700 mb-4">
                  "You are a patient tutor helping a 10-year-old understand history. Explain the French Revolution in
                  simple, engaging language. Use analogies from everyday life. Keep it to 3-4 paragraphs."
                </p>
                <p className="text-xs text-slate-500">
                  Perfect for: Learning complex topics, teaching kids, simplification
                </p>
              </Card>

              <Card className="p-8 border-2 border-[#1e40af]/20 hover:border-[#1e40af]/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#1e40af]/20 rounded-full flex items-center justify-center text-sm font-bold text-[#1e40af]">
                    4
                  </div>
                  <h3 className="text-lg font-bold">The Gift Ideas Generator</h3>
                </div>
                <p className="text-sm font-mono bg-slate-50 p-4 rounded border border-slate-200 text-slate-700 mb-4">
                  "You are a creative gift consultant. Suggest 5 unique gift ideas for a [30-year-old who loves
                  gardening and sci-fi books]. Include price range and where to buy. Format as a numbered list with
                  brief descriptions."
                </p>
                <p className="text-xs text-slate-500">
                  Perfect for: Gift shopping, brainstorming, personalized suggestions
                </p>
              </Card>

              <Card className="p-8 border-2 border-[#1e40af]/20 hover:border-[#1e40af]/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#1e40af]/20 rounded-full flex items-center justify-center text-sm font-bold text-[#1e40af]">
                    5
                  </div>
                  <h3 className="text-lg font-bold">The Travel Agent</h3>
                </div>
                <p className="text-sm font-mono bg-slate-50 p-4 rounded border border-slate-200 text-slate-700 mb-4">
                  "You are an expert travel planner specializing in weekend trips. Create a detailed 2-day itinerary for
                  a weekend in Tokyo. Include dining recommendations, attractions, and travel times between locations."
                </p>
                <p className="text-xs text-slate-500">Perfect for: Trip planning, exploration, time management</p>
              </Card>
            </div>
          </section>

          <section id="common-mistakes" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Common Beginner Mistakes (And How to Fix Them)</h2>
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-red-700 mb-2">❌ Being Too Vague</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-mono">Bad: "Write something about fitness"</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-mono text-green-700">
                    Good: "Write a 500-word beginner's guide to starting a strength training routine at home with no
                    equipment."
                  </span>
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-red-700 mb-2">❌ Forgetting the Persona</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-mono">Bad: "Write a job description"</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-mono text-green-700">
                    Good: "You are an HR recruiter. Write a job description for a Senior Software Engineer position at a
                    startup..."
                  </span>
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-red-700 mb-2">❌ Not Specifying Format</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-mono">Bad: "Summarize this article"</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-mono text-green-700">
                    Good: "Summarize this article as 5 bullet points, each no more than 2 sentences."
                  </span>
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-red-700 mb-2">❌ Asking Multiple Questions at Once</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-mono">
                    Bad: "Should I learn Python or JavaScript? Which is easier? How long will it take?"
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-mono text-green-700">
                    Good: "I want to learn web development. Should I learn Python or JavaScript first? Explain the pros
                    and cons of each."
                  </span>
                </p>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Beginner AI Prompts FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What if I don't have a 'persona' for my prompt?",
                  a: "You can start with simple ones: 'You are a helpful assistant who explains things simply' or 'You are an expert in [your topic].' Even vague personas improve results.",
                },
                {
                  q: "How long should my prompt be?",
                  a: "Longer is usually better. Aim for 2-3 sentences minimum, up to a paragraph. More context = better results. Don't write a novel, but don't be too brief either.",
                },
                {
                  q: "What if ChatGPT's answer isn't good?",
                  a: "Try rephrasing your prompt. Add more detail, change the persona, or specify the format differently. You can also ask follow-up questions like 'Make it simpler' or 'Add more examples.'",
                },
                {
                  q: "Can I use these prompts on all AI platforms?",
                  a: "These prompts work on ChatGPT, Claude, Gemini, and most other AI assistants. Some platforms may interpret them slightly differently, but the Golden Rule of 3 works everywhere.",
                },
                {
                  q: "Is it better to be creative with prompts or stick to formulas?",
                  a: "Start with formulas. Once you understand the Golden Rule of 3, you can experiment with your own style. The formula is just a framework.",
                },
                {
                  q: "What's the difference between good and bad prompts?",
                  a: "Good prompts have clarity, context, and constraints. Bad prompts are vague, lack direction, and don't specify what you want. Follow the Golden Rule of 3 and you'll be good.",
                },
                {
                  q: "Can I save my good prompts?",
                  a: "Yes! Most AI platforms have a 'favorite' or 'save' feature. Create a personal library of your best prompts for future use.",
                },
                {
                  q: "What should I do if I get an error message?",
                  a: "Check if your prompt is respectful and not asking the AI to do anything illegal or harmful. Otherwise, try simplifying your prompt or breaking it into two separate requests.",
                },
                {
                  q: "Are there any prompts I should avoid?",
                  a: "Avoid asking AI to help with illegal activities, create malware, or generate harmful content. Otherwise, the sky's the limit—AI can help with almost anything productive.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#1e40af] transition-colors text-left">
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">For Beginners</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Good AI Prompts for Beginners", href: "/good-ai-prompts" },
                { label: "Free AI Prompts Library", href: "/free-ai-prompts" },
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Kimi AI Prompts", href: "/kimi-ai-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/good-ai-prompts" ? "text-[#1e40af] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Advanced</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Coolest ChatGPT Prompts", href: "/coolest-chatgpt-prompts" },
                { label: "SQL Prompts", href: "/sql-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
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
