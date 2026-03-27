import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Sparkles, Rocket, Code2 } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Vibe Coding Prompts: Build Apps with Pure AI in 2026 | GPTPrompts.AI",
  description:
    "Master vibe coding — Andrej Karpathy's term for building software by describing what you want to AI. 40+ expert prompts for Cursor, Claude, ChatGPT, v0, Bolt, and Lovable. Build full apps without traditional coding.",
  keywords: ["vibe coding prompts", "vibe coding", "ai coding prompts", "build app with ai", "no-code ai", "cursor vibe coding", "claude vibe coding"],
}

export default function VibeCodingPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a2e] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity">
            GPTPrompts.AI
          </Link>
          <div className="inline-flex items-center gap-2 text-xs font-mono bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3 h-3 text-purple-400" />
            Coined by Andrej Karpathy · Trending 2025-2026
          </div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Vibe Coding<br />
            <span className="italic text-purple-400">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 text-gray-300">
            Build real software by describing what you want to AI. No deep syntax knowledge required. Just ideas, prompts, and iteration.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
            <span>40+ Prompts</span>
            <span>·</span>
            <span>Cursor · Claude · ChatGPT · v0 · Bolt</span>
            <span>·</span>
            <span>Updated 2026</span>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-6">Vibe Coding</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "what", label: "What Is Vibe Coding?", num: "00" },
                  { id: "tools", label: "Which Tool to Use", num: "01" },
                  { id: "starting", label: "Starting a New App", num: "02" },
                  { id: "features", label: "Adding Features", num: "03" },
                  { id: "debugging", label: "Debugging & Fixing", num: "04" },
                  { id: "ui", label: "UI & Design Prompts", num: "05" },
                  { id: "deployment", label: "Deploy & Ship", num: "06" },
                  { id: "faq", label: "FAQ", num: "07" },
                ].map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="group flex items-center justify-between hover:text-purple-600 transition-colors">
                      <span>{link.label}</span>
                      <span className="text-xs opacity-30 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-4 border-purple-200 bg-purple-50">
              <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                <Rocket className="w-4 h-4 text-purple-600" /> Best Stack for Vibe Coding
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Next.js + Tailwind + shadcn/ui + Cursor AI. This combo lets AI generate complete, working code consistently.
              </p>
            </Card>
            <div className="space-y-2 text-sm">
              <p className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Related</p>
              <Link href="/cursor-ai-prompts" className="block hover:text-purple-600 transition-colors">Cursor AI Guide →</Link>
              <Link href="/chatgpt-code-generation" className="block hover:text-purple-600 transition-colors">ChatGPT for Code →</Link>
              <Link href="/claude-prompts" className="block hover:text-purple-600 transition-colors">Claude for Coding →</Link>
              <Link href="/ai-prompts-coding" className="block hover:text-purple-600 transition-colors">AI Coding Prompts →</Link>
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-24 pb-32">
          <section id="what" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-6">What Is Vibe Coding?</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              In February 2025, AI researcher Andrej Karpathy described a new way of programming: <em>"fully give in to the vibes, embrace exponentials, and forget that the code even exists."</em> He called it <strong>vibe coding</strong> — building software by describing what you want to an AI and iterating until it works.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Vibe coding isn't about being sloppy. It's about a fundamental shift in how we interact with computers. Instead of translating ideas into syntax, you describe outcomes. The AI handles the translation. You stay at the idea level.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The key skill in vibe coding isn't programming — it's prompting. How well you can describe what you want, communicate constraints, and guide the AI through iteration determines how good your output is.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <Sparkles className="w-5 h-5" />, title: "Describe, don't code", desc: "Focus on outcomes, not syntax" },
                { icon: <Code2 className="w-5 h-5" />, title: "Iterate rapidly", desc: "Each prompt is a step forward" },
                { icon: <Rocket className="w-5 h-5" />, title: "Ship fast", desc: "From idea to deployed in hours" },
              ].map((item) => (
                <Card key={item.title} className="p-4">
                  <div className="text-purple-600 mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="tools" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Which Tool to Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { tool: "Cursor AI", best: "Full app development", why: "Best for building complex, multi-file apps. Has codebase awareness and Composer for multi-file edits.", link: "/cursor-ai-prompts" },
                { tool: "v0 by Vercel", best: "UI components", why: "Best for generating React/Next.js UI. Outputs clean shadcn components you can copy directly.", link: "/v0-prompts" },
                { tool: "Bolt.new", best: "Quick prototypes", why: "Runs in browser, no setup. Great for fast prototypes and demos.", link: "/bolt-new-prompts" },
                { tool: "Lovable", best: "Full-stack apps", why: "Point-and-click + prompts. Connects to Supabase automatically. Good for non-developers.", link: "/" },
                { tool: "Claude (claude.ai)", best: "Complex logic", why: "Best at reasoning through architecture and writing clean, idiomatic code.", link: "/claude-prompts" },
                { tool: "ChatGPT", best: "Quick scripts", why: "Great for one-off scripts, data processing, and explaining concepts.", link: "/chatgpt-prompts" },
              ].map((item) => (
                <Card key={item.tool} className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold">{item.tool}</h3>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-medium">{item.best}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.why}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="starting" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Starting a New App</h2>
            <p className="text-muted-foreground mb-8">The opening prompt is the most important. A strong start defines the entire architecture. Be specific, verbose, and detailed.</p>
            <div className="space-y-4">
              {[
                {
                  title: "The Architecture First Prompt",
                  prompt: `Before writing any code, help me plan this app:

App idea: [describe your app in 2-3 sentences]
Users: [who will use it and what's their technical level]
Core features:
1. [feature 1]
2. [feature 2]
3. [feature 3]

Tell me:
1. Recommended tech stack (be specific about libraries/versions)
2. Database schema (tables and relationships)
3. Key pages/routes I'll need
4. Authentication approach
5. The order I should build things
6. Any tricky parts I should know about upfront`
                },
                {
                  title: "First Code Prompt (After Planning)",
                  prompt: `Build the initial scaffold for my [app type] app.

Stack: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Prisma, PostgreSQL
Auth: [NextAuth/Clerk/none]

Set up:
- Project structure with app router
- Database schema for: [list main entities]
- Base layout with sidebar navigation
- Landing/home page with hero section
- Authentication pages (if applicable)
- Dark mode toggle
- Mobile responsive from the start

Follow these conventions:
- Server components by default
- Client components only when needed for interactivity
- All data types in types.ts
- API routes in /app/api/`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-purple-500">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          <section id="features" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Adding Features</h2>
            <p className="text-muted-foreground mb-8">Each new feature should be a focused, specific prompt. Don't ask for too much at once.</p>
            <div className="space-y-4">
              {[
                {
                  title: "Standard Feature Prompt Template",
                  prompt: `Add [feature name] to the app.

What it should do:
- [behavior 1]
- [behavior 2]
- [behavior 3]

UI: [describe what it should look like — button, modal, page, sidebar, etc.]
Data: [what data it reads/writes]
Edge cases: [what should happen when X]

Follow the patterns in [existing feature] and use the same component style.
Don't change any existing functionality.`
                },
                {
                  title: "CRUD Feature (Full)",
                  prompt: `Build complete CRUD functionality for [resource type].

Fields: [list all fields with types]
Business rules: [any validation or logic — e.g., "title is required, max 100 chars"]
UI needed:
- List view with search and pagination
- Create form with validation
- Edit form (pre-populated)
- Delete with confirmation dialog
- Success/error toast notifications

Use the existing form patterns and connect to the database via Prisma.`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-purple-500">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          <section id="debugging" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Debugging in Vibe Coding</h2>
            <p className="text-muted-foreground mb-6">You'll hit errors. Here's how to handle them effectively with AI.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Paste the exact error", prompt: "Here's the exact error: [paste]. It's happening when I do [action]. The relevant file is [file]. Fix the root cause — don't just suppress it." },
                { title: "Something looks wrong", prompt: "This isn't working correctly. Expected: [X]. Actual: [Y]. Here's the relevant code: [paste]. Walk me through why and fix it." },
                { title: "Page not rendering", prompt: "The [page/component] isn't showing anything. Console shows: [paste]. Here's the component: [paste]. Diagnose and fix." },
                { title: "Performance issue", prompt: "The app is slow when I [action]. Profile this and tell me why. Suggest the top 3 optimizations and implement the most impactful one." },
              ].map((item) => (
                <Card key={item.title} className="p-4">
                  <h4 className="font-bold text-sm text-purple-600 mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground font-mono bg-muted rounded p-2 leading-relaxed">{item.prompt}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="faq" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Vibe Coding FAQ</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                { q: "Do I need to know how to code to vibe code?", a: "Not deeply, but some programming literacy helps enormously. You need to understand concepts like APIs, databases, components, and functions — even if you can't write the code yourself. The more you understand, the better your prompts will be and the faster you'll spot when the AI makes mistakes." },
                { q: "What's the best app for vibe coding beginners?", a: "Start with Bolt.new or Lovable — they require zero setup and run entirely in your browser. Once you've shipped a few projects and want more control, graduate to Cursor AI with a local development environment." },
                { q: "How do I handle it when the AI breaks something?", a: "Always use git. Commit after each working feature. When something breaks, you can revert instantly. Tell the AI: 'This broke X. Let's revert to before and try a different approach.' Providing the exact error and the file makes debugging much faster." },
                { q: "Can vibe coding build production apps?", a: "Yes — many production apps at real companies are now built primarily with AI assistance. The key is human review of security-sensitive code (authentication, payment processing, data access) and proper testing. Never deploy AI-generated code to production without understanding what it does." },
                { q: "What's the biggest mistake vibe coders make?", a: "Building too much before testing. Build one small feature, test it, commit it, then move on. The more context the AI accumulates without testing, the more bugs compound. Small, tested iterations win every time." },
              ].map((item) => (
                <AccordionItem key={item.q} value={item.q} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="border-t pt-16">
            <h2 className="text-2xl font-bold mb-6">More AI Coding Resources</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Cursor AI Prompts", href: "/cursor-ai-prompts" },
                { label: "ChatGPT for Code", href: "/chatgpt-code-generation" },
                { label: "Claude Artifacts", href: "/claude-artifacts-guide" },
                { label: "AI Coding Tools", href: "/ai-prompts-coding" },
                { label: "Prompt Chaining", href: "/prompt-chaining-guide" },
                { label: "Prompt Best Practices", href: "/prompt-best-practices" },
                { label: "Claude Guide", href: "/claude-prompts" },
                { label: "GPT-4o Prompts", href: "/gpt-4o-prompts" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-center p-3 rounded-lg border hover:border-purple-500 hover:text-purple-600 transition-colors">
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
