import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Code2, Terminal, Zap } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cursor AI Prompts: The Complete 2026 Guide to AI-Powered Coding | GPTPrompts.AI",
  description:
    "Master Cursor AI with expert prompts and techniques. Learn how to use Cursor's AI Composer, Chat, and inline edits to write code 10x faster. Includes 50+ copy-paste prompts for every coding task.",
  keywords: ["cursor ai prompts", "cursor ai", "cursor composer prompts", "cursor chat prompts", "ai coding prompts", "cursor ai guide"],
  openGraph: {
    title: "Cursor AI Prompts: The Complete 2026 Guide",
    description: "50+ expert Cursor AI prompts for coding, debugging, refactoring, and building full apps with AI.",
    type: "article",
  },
}

export default function CursorAIPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero */}
      <header className="bg-[#6c47ff] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Terminal className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Cursor AI<br />
            <span className="italic opacity-90">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            The complete guide to prompting Cursor AI. Master Composer, Chat, and inline edits to build entire features, debug complex bugs, and write production-quality code with AI.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70">
            <span>50+ Prompts</span>
            <span>·</span>
            <span>Cursor 0.45+</span>
            <span>·</span>
            <span>Updated 2026</span>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#6c47ff] mb-6">Cursor Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "Why Cursor Changes Everything", num: "00" },
                  { id: "composer", label: "Composer Prompts", num: "01" },
                  { id: "chat", label: "AI Chat Prompts", num: "02" },
                  { id: "inline", label: "Inline Edit (⌘K)", num: "03" },
                  { id: "debugging", label: "Debugging Prompts", num: "04" },
                  { id: "refactoring", label: "Refactoring Prompts", num: "05" },
                  { id: "context", label: "@ Context Mastery", num: "06" },
                  { id: "rules", label: ".cursorrules Guide", num: "07" },
                  { id: "faq", label: "FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="group flex items-center justify-between hover:text-[#6c47ff] transition-colors">
                      <span>{link.label}</span>
                      <span className="text-xs opacity-30 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-4 border-[#6c47ff]/20 bg-[#6c47ff]/5">
              <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#6c47ff]" /> Pro Tip
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Always add context with @file, @codebase, or @docs before complex prompts. Cursor's AI performs 3x better with relevant context.
              </p>
            </Card>
            <div className="space-y-2 text-sm">
              <p className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Related</p>
              <Link href="/ai-prompts-coding" className="block hover:text-[#6c47ff] transition-colors">AI Coding Prompts →</Link>
              <Link href="/vibe-coding-prompts" className="block hover:text-[#6c47ff] transition-colors">Vibe Coding Guide →</Link>
              <Link href="/chatgpt-code-generation" className="block hover:text-[#6c47ff] transition-colors">ChatGPT Code Generation →</Link>
              <Link href="/claude-prompts" className="block hover:text-[#6c47ff] transition-colors">Claude for Coding →</Link>
            </div>
          </nav>
        </aside>

        {/* Content */}
        <div className="lg:col-span-9 space-y-24 pb-32">

          {/* Intro */}
          <section id="intro" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Why Cursor Changes Everything</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Cursor is not just an AI-powered code editor — it's a fundamentally different way of building software. Unlike GitHub Copilot's autocomplete approach, Cursor understands your entire codebase and can generate, edit, and reason about thousands of lines of code simultaneously.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              But Cursor is only as powerful as the prompts you give it. Vague instructions produce mediocre code. Precise, context-rich prompts produce production-ready features in minutes. This guide teaches you exactly how to communicate with Cursor to get the best results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <Code2 className="w-5 h-5" />, title: "Composer", desc: "Full-feature generation across multiple files simultaneously" },
                { icon: <Terminal className="w-5 h-5" />, title: "Chat (⌘L)", desc: "Ask questions about your codebase and get explanations" },
                { icon: <Zap className="w-5 h-5" />, title: "Inline Edit (⌘K)", desc: "Edit specific lines or functions with natural language" },
              ].map((item) => (
                <Card key={item.title} className="p-4">
                  <div className="text-[#6c47ff] mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Composer Prompts */}
          <section id="composer" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Composer Prompts (⌘I)</h2>
            <p className="text-muted-foreground mb-8">Composer is Cursor's most powerful feature — it writes code across multiple files and understands your full project structure. Use these prompts for building complete features.</p>

            <h3 className="text-xl font-bold mb-4">🏗️ Building New Features</h3>
            <div className="space-y-4 mb-10">
              {[
                {
                  title: "Full CRUD Feature",
                  prompt: `Create a complete CRUD API for [Resource] using [framework]. Include:
- TypeScript interfaces/types for the model
- Database schema (Prisma/Drizzle)
- API routes: GET /[resource], GET /[resource]/:id, POST /[resource], PUT /[resource]/:id, DELETE /[resource]/:id
- Input validation with Zod
- Error handling with proper HTTP status codes
- Unit tests for each endpoint
Follow the patterns used in @[existing-similar-file]`
                },
                {
                  title: "React Component with State",
                  prompt: `Build a [ComponentName] React component that:
- Props: [list props and their types]
- State: [describe what state it manages]
- Behavior: [describe what it does]
- Uses existing components from @components
- Follows the styling patterns in @[style-file]
- Includes loading, error, and empty states
- Is fully accessible (ARIA labels, keyboard navigation)`
                },
                {
                  title: "Authentication System",
                  prompt: `Implement a complete authentication system using [Auth library: NextAuth/Clerk/Auth.js]. Include:
- Sign up, sign in, sign out flows
- Session management
- Protected routes middleware
- User profile page
- Password reset (if applicable)
Use the database schema in @schema.prisma and follow patterns in @[existing-auth-file]`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-[#6c47ff]">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#6c47ff]" /> {item.title}
                  </h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4">🔄 Refactoring & Migration</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Migrate to New Pattern",
                  prompt: `Refactor @[directory] to use [new pattern/library].
- Current pattern: [describe what it's doing now]
- Target pattern: [describe what it should do]
- Do NOT change any business logic
- Keep all existing tests passing
- Update imports throughout the codebase
- Add migration notes in comments where the change is non-obvious`
                },
                {
                  title: "Add TypeScript Strict Mode",
                  prompt: `Add strict TypeScript types to @[file].
- Replace all 'any' types with specific types
- Add return types to all functions
- Add prop types to all React components
- Create interfaces for all data structures
- Do not change any logic, only add types
Reference @types for existing type definitions`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-[#6c47ff]">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          {/* Chat Prompts */}
          <section id="chat" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">AI Chat Prompts (⌘L)</h2>
            <p className="text-muted-foreground mb-8">Use Cursor Chat to understand your codebase, get explanations, and plan features before writing code.</p>
            <div className="space-y-4">
              {[
                { title: "Understand a Complex File", prompt: `Explain what @[file] does. Walk me through:
1. Its main purpose and responsibility
2. The key functions/methods and what they do
3. Its dependencies and what it depends on
4. Any potential issues or code smells you notice` },
                { title: "Architecture Planning", prompt: `I want to add [feature] to this codebase (@codebase).
Before writing any code, tell me:
1. Which existing files I'd need to modify
2. What new files I should create
3. The best approach given the current architecture
4. Any potential issues or tradeoffs
5. The order I should implement things in` },
                { title: "Performance Analysis", prompt: `Review @[file] for performance issues. Identify:
- Unnecessary re-renders (if React)
- N+1 query problems
- Missing indexes (if database queries)
- Memory leaks
- Expensive operations that could be cached
Rank issues by severity and suggest specific fixes` },
                { title: "Security Review", prompt: `Do a security audit of @[file]. Check for:
- SQL injection vulnerabilities
- XSS vulnerabilities
- CSRF vulnerabilities
- Authentication/authorization issues
- Exposed sensitive data
- Input validation gaps
List each issue with severity (Critical/High/Medium/Low) and how to fix it` },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-[#6c47ff]">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          {/* Inline Edit */}
          <section id="inline" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Inline Edit Prompts (⌘K)</h2>
            <p className="text-muted-foreground mb-8">Select code, press ⌘K, and describe the change. These are the prompts that save you the most time day-to-day.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { scenario: "Add error handling", prompt: "Add try/catch with proper error logging. Use the error format from the rest of the codebase" },
                { scenario: "Make function async", prompt: "Convert to async/await. Handle the Promise correctly and propagate errors" },
                { scenario: "Extract to component", prompt: "Extract this JSX into a separate reusable component with typed props" },
                { scenario: "Add loading state", prompt: "Add isLoading, error, and empty states with appropriate UI for each" },
                { scenario: "Write tests", prompt: "Write comprehensive unit tests covering: happy path, edge cases, and error cases. Use the test patterns in @[test-file]" },
                { scenario: "Add JSDoc comments", prompt: "Add JSDoc comments explaining the purpose, params, returns, and any side effects" },
                { scenario: "Optimize query", prompt: "Optimize this database query. Add proper indexes, select only needed fields, and add pagination" },
                { scenario: "Add validation", prompt: "Add Zod validation schema for all inputs. Return validation errors with field-level messages" },
              ].map((item) => (
                <Card key={item.scenario} className="p-4">
                  <h4 className="font-bold text-sm text-[#6c47ff] mb-2">{item.scenario}</h4>
                  <p className="text-sm text-muted-foreground font-mono bg-muted rounded p-2">{item.prompt}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Debugging */}
          <section id="debugging" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Debugging Prompts</h2>
            <p className="text-muted-foreground mb-8">Cursor is exceptional at debugging. Give it the error, the file, and context — and it almost always finds the fix.</p>
            <div className="space-y-4">
              {[
                {
                  title: "Fix a Specific Error",
                  prompt: `I'm getting this error: [PASTE EXACT ERROR MESSAGE]

It's happening in @[file] when I [describe what you were doing].

Here's the relevant stack trace: [paste stack trace]

Fix the root cause. Don't just suppress the error — explain why it's happening and fix the underlying issue.`
                },
                {
                  title: "Debug a Logic Bug",
                  prompt: `In @[file], the function [functionName] is returning [actual result] but it should return [expected result].

Input: [describe or paste the test input]
Expected: [what should happen]
Actual: [what is happening]

Walk me through the logic step by step, identify where it goes wrong, and fix it.`
                },
                {
                  title: "Fix Failing Tests",
                  prompt: `These tests in @[test-file] are failing: [paste test names or output]

The implementation is in @[impl-file].

Don't change the tests — fix the implementation to make all tests pass. Explain what was wrong.`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-red-500">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          {/* @ Context */}
          <section id="context" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">@ Context Mastery</h2>
            <p className="text-muted-foreground mb-8">The @ symbol is Cursor's superpower. Always add context — it dramatically improves output quality.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { symbol: "@file", use: "Reference a specific file — Cursor reads it fully before responding" },
                { symbol: "@folder", use: "Reference an entire directory — great for 'follow the patterns in @components'" },
                { symbol: "@codebase", use: "Cursor searches your whole repo for relevant context — use for architecture questions" },
                { symbol: "@web", use: "Cursor fetches live web content — use for docs, changelogs, or API references" },
                { symbol: "@docs", use: "Reference your custom docs indexed in Cursor settings" },
                { symbol: "@git", use: "Reference recent git commits — 'what changed in @git last 5 commits?'" },
                { symbol: "@terminal", use: "Include your terminal output as context — great for debugging build errors" },
                { symbol: "@notepads", use: "Reference saved notepads with recurring context like architecture decisions" },
              ].map((item) => (
                <Card key={item.symbol} className="p-4">
                  <code className="text-[#6c47ff] font-bold font-mono">{item.symbol}</code>
                  <p className="text-sm text-muted-foreground mt-1">{item.use}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* .cursorrules */}
          <section id="rules" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">.cursorrules — The Secret Weapon</h2>
            <p className="text-muted-foreground mb-6">
              Create a <code className="text-[#6c47ff] font-mono bg-muted px-1 rounded">.cursorrules</code> file in your project root. Cursor reads it before every response. This lets you set permanent instructions so you never have to repeat yourself.
            </p>
            <Card className="p-6 mb-8">
              <h4 className="font-bold mb-4">Example .cursorrules for a Next.js project:</h4>
              <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto font-mono leading-relaxed">{`# Project: [Your App Name]
# Stack: Next.js 14, TypeScript, Tailwind CSS, Prisma, PostgreSQL

## Code Style
- Use TypeScript strict mode — never use 'any'
- Prefer const over let
- Use named exports, not default exports (except pages)
- Function components only (no class components)
- Use Tailwind for styling — no inline styles or CSS modules

## Architecture
- App Router: server components by default, 'use client' only when needed
- Data fetching: React Server Components with async/await
- Database: always use Prisma ORM, never raw SQL
- API routes in /app/api/[route]/route.ts format

## Patterns
- Error handling: always use try/catch with proper error types
- Loading states: always add loading.tsx for async data
- Validation: always use Zod for input validation
- Auth: use the auth() function from @/lib/auth

## Don't
- Don't use useEffect for data fetching — use server components
- Don't use React Query — we use server-side data fetching
- Don't add new dependencies without asking first`}</pre>
            </Card>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Cursor AI FAQ</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                { q: "Is Cursor AI better than GitHub Copilot?", a: "For most developers, yes. Cursor's key advantage is its codebase awareness — it understands your entire project, not just the current file. Composer can generate code across multiple files simultaneously, which Copilot cannot do. However, Copilot has tighter IDE integration in VS Code and a lower price point." },
                { q: "Which AI model should I use in Cursor?", a: "For complex tasks (architecture, full feature generation), use Claude 3.7 Sonnet or GPT-4o — they have the best reasoning. For quick edits and autocomplete, cursor-small (Cursor's built-in model) is fastest. GPT-4o works great for debugging. Claude excels at TypeScript and modern frameworks." },
                { q: "What is the best way to use Cursor's Composer?", a: "Always: 1) Start with a clear goal statement, 2) Reference relevant existing files with @, 3) Specify what patterns to follow, 4) Tell it what NOT to change. The more context you give, the better the output. Think of Composer like briefing a senior engineer — give them the full picture." },
                { q: "How do I make Cursor remember my preferences?", a: "Use .cursorrules in your project root for project-specific rules. Use Cursor Settings → Rules for AI for global preferences that apply everywhere. You can add rules like 'always use TypeScript', 'prefer functional programming', or 'always add error handling'." },
                { q: "Can Cursor build an entire app from scratch?", a: "Yes — and this is increasingly common ('vibe coding'). The best approach: start with a clear architecture prompt describing the full stack and structure, then use Composer for each feature. The key is being specific about tech choices, existing patterns, and constraints." },
              ].map((item) => (
                <AccordionItem key={item.q} value={item.q} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Related */}
          <section className="border-t pt-16">
            <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Vibe Coding Guide", href: "/vibe-coding-prompts" },
                { label: "AI Coding Prompts", href: "/ai-prompts-coding" },
                { label: "ChatGPT for Coding", href: "/chatgpt-code-generation" },
                { label: "Claude for Code", href: "/claude-prompts" },
                { label: "GitHub Copilot", href: "/ai-prompts-coding" },
                { label: "Prompt Engineering", href: "/prompt-engineering-fundamentals" },
                { label: "System Prompts", href: "/chatgpt-system-prompts" },
                { label: "Prompt Best Practices", href: "/prompt-best-practices" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-center p-3 rounded-lg border hover:border-[#6c47ff] hover:text-[#6c47ff] transition-colors">
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
