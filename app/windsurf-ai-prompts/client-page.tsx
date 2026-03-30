"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Zap, MessageSquare, Bug, GitBranch, Layout } from "lucide-react"

const accent = "#06B6D4"
const bg = "#060d0f"

function CopyCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#0f1f22] border border-[#1a3038] rounded-xl p-5 hover:border-[#06B6D4]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] mb-2 inline-block">
              {tag}
            </span>
          )}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(prompt)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
          }}
          className="shrink-0 p-2 rounded-lg bg-[#1a3038] hover:bg-[#06B6D4]/20 transition-colors"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-400" />}
        </button>
      </div>
      <pre className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap font-sans">{prompt}</pre>
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#1a3038] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#0f1f22] transition-colors"
      >
        <span className="font-medium text-white pr-4">{q}</span>
        {open ? (
          <ChevronUp size={16} className="text-gray-400 shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-gray-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#1a3038] pt-4">{a}</div>
      )}
    </div>
  )
}

const sections = [
  {
    id: "cascade-agent",
    icon: <Zap size={20} />,
    title: "Cascade Agent Prompts",
    subtitle:
      "Cascade is Windsurf's autonomous multi-step AI agent. These prompts are designed to kick off complex, end-to-end tasks that Cascade can plan and execute independently.",
    tag: "Cascade",
    prompts: [
      {
        title: "Build a Complete Feature End-to-End",
        prompt: `I need you to implement a complete user authentication system for this Next.js app. It should include:
1. A /login page with email/password form
2. A /signup page with validation
3. JWT token handling in secure HTTP-only cookies
4. Protected route middleware that redirects unauthenticated users to /login
5. A useAuth() hook for accessing user state anywhere
6. A logout button in the header that clears the session

Use NextAuth.js with the credentials provider. Look at the existing codebase structure first, then implement everything needed without breaking existing functionality. Show me your plan before you start coding.`,
      },
      {
        title: "Refactor Entire Codebase to TypeScript",
        prompt: `Refactor this JavaScript project to full TypeScript. Please:
1. Analyse the full codebase to understand all data structures and function signatures
2. Add proper TypeScript types and interfaces throughout
3. Create a types/ directory with shared interface definitions
4. Add a tsconfig.json with strict mode enabled
5. Fix any type errors that arise during conversion
6. Ensure the build still passes after refactoring

Work through the files systematically starting with the most shared utilities. Show me your plan and which files you'll touch before starting.`,
      },
      {
        title: "Add Comprehensive Test Coverage",
        prompt: `Add unit and integration tests to this codebase using Vitest and React Testing Library. First, analyse the most critical and complex files that have no tests. Then:
1. Write unit tests for the 5 most important utility functions
2. Write component tests for the 3 most critical UI components
3. Write integration tests for the main user flows (sign-up, checkout, etc.)
4. Set up coverage reporting and aim for 70%+ on critical paths

Show me your testing plan before you start writing any test files.`,
      },
      {
        title: "Migrate Database Schema with Zero Downtime",
        prompt: `I need to add a [new_field] column to the [table_name] table in our PostgreSQL database with zero downtime. Please:
1. Analyse the current schema and all places that read/write this table
2. Write a safe migration script that adds the column as nullable first
3. Write a backfill script to populate existing rows
4. Update all relevant queries, ORM models, and API responses
5. Add the NOT NULL constraint only after backfill is complete

Walk me through the migration strategy and risk factors before generating any code.`,
      },
    ],
  },
  {
    id: "chat",
    icon: <MessageSquare size={20} />,
    title: "Windsurf Chat Prompts",
    subtitle:
      "Use these in Windsurf's chat panel for understanding code, getting explanations, and planning changes before you implement them.",
    tag: "Chat",
    prompts: [
      {
        title: "Understand Unfamiliar Code Deeply",
        prompt: `Explain this code to me in plain English: @[filename]

I need to understand:
1. What problem is it solving and why does it exist in the codebase?
2. How does the main algorithm or logic work step by step?
3. What design patterns are being used and why?
4. What are the key assumptions and potential edge cases?
5. What should I know before modifying it without breaking something?

Assume I haven't worked on this part of the codebase before.`,
      },
      {
        title: "Plan Before Building (Architecture Review)",
        prompt: `I want to add [feature description] to this codebase. Before writing any code, help me plan the approach:

1. Analyse the existing codebase to find relevant patterns and conventions already in use
2. Suggest 2-3 implementation approaches with their tradeoffs
3. Recommend which approach fits best with the existing architecture
4. Outline which files will need to change, in what order, and why

Only give me the plan. I'll review it and ask you to implement once I approve.`,
      },
      {
        title: "Explain a Bug Before Fixing It",
        prompt: `There's a bug in @[filename] — [describe the symptom, e.g. "the form submits but the user isn't saved to the database"].

Before fixing anything, please:
1. Trace through the code and identify the root cause
2. Explain why the bug happens in plain English
3. Show me the exact line(s) where the problem originates
4. Describe the fix you would make and why it's the right approach

Only explain — don't change any code yet. I want to understand before we fix.`,
      },
      {
        title: "Code Review — Find All Issues First",
        prompt: `Review @[filename] as if you were a senior engineer doing a pull request review. Check for:
- Logic errors or off-by-one mistakes
- Missing error handling or edge cases
- Performance issues (unnecessary re-renders, N+1 queries, etc.)
- Security concerns (XSS, injection, exposed secrets, etc.)
- Code quality issues (naming, duplication, complexity)
- Anything that violates the patterns I see elsewhere in this codebase

List all issues with severity (Critical / High / Medium / Low) before suggesting any fixes.`,
      },
    ],
  },
  {
    id: "debugging",
    icon: <Bug size={20} />,
    title: "Debugging & Error Fixing Prompts",
    subtitle:
      "Targeted prompts for tracking down bugs, diagnosing errors, and fixing issues without introducing regressions.",
    tag: "Debug",
    prompts: [
      {
        title: "Fix a Runtime Error with Full Context",
        prompt: `I'm getting this error in production:

[paste full error message and stack trace]

The error occurs when [describe what the user does to trigger it].

Please:
1. Analyse the stack trace and identify the root cause
2. Find the relevant code in @[filename or component]
3. Explain what's going wrong in plain English
4. Provide the fix with an explanation of why it resolves the issue
5. Check if the same issue could exist elsewhere in the codebase`,
      },
      {
        title: "Debug a Race Condition or Async Issue",
        prompt: `I have an intermittent bug that seems to be a race condition or async issue. It only happens sometimes when:
[describe the scenario]

The relevant code is in @[filename].

Please:
1. Identify all the async operations involved and their execution order
2. Find where race conditions or timing issues could occur
3. Explain the specific sequence of events that causes the bug
4. Provide a fix that eliminates the race condition properly
5. Suggest how to write a test that would catch this in future`,
      },
      {
        title: "Find Why a Test is Failing",
        prompt: `This test is failing and I don't understand why:

[paste the failing test code and error output]

Please:
1. Analyse both the test and the implementation it's testing
2. Identify why the test fails — is it a bug in the code or in the test itself?
3. If it's a code bug, show me the fix
4. If the test is wrong, explain what it should actually be testing
5. Check whether any other tests might be affected by the same underlying issue`,
      },
      {
        title: "Performance Profile and Fix",
        prompt: `This component/function is slow: @[filename]

Performance issue description: [e.g. "re-renders 20+ times when a user types in the search box"]

Please:
1. Identify all the performance bottlenecks in this code
2. Explain what's causing each issue (unnecessary re-renders, missing memoisation, expensive computation in render, etc.)
3. Prioritise the top 3 issues by impact
4. Show me the exact changes needed to fix each one
5. Estimate the expected improvement for each fix`,
      },
    ],
  },
  {
    id: "flows",
    icon: <GitBranch size={20} />,
    title: "Windsurf Flows & Reusable Commands",
    subtitle:
      "Windsurf Flows let you save and reuse prompt workflows. These are battle-tested prompts worth saving as your own named Flows.",
    tag: "Flow",
    prompts: [
      {
        title: "Add JSDoc / TSDoc to Any Function",
        prompt: `Add a comprehensive JSDoc/TSDoc comment block to this function. Include:
- A one-sentence summary of what the function does
- @param tags for every parameter with type and description
- @returns tag describing the return value and its type
- @throws if any errors can be thrown
- @example with a realistic usage example
- Any important side effects or caveats

Keep it accurate to what the code actually does — don't describe what it should do.`,
      },
      {
        title: "Add Loading, Error & Empty States",
        prompt: `This component fetches data but has no loading or error handling. Add all three states:

1. Loading state — show a skeleton loader that matches the shape of the loaded content
2. Error state — show a user-friendly error message with a Retry button that re-fetches
3. Empty state — show a helpful empty state message if the data array is empty or null

Use the same styling patterns already present in this codebase. Don't change the data-fetching logic — only add the UI states around it.`,
      },
      {
        title: "Make This Component Fully Responsive",
        prompt: `This component only works well on desktop. Make it fully responsive:

1. Implement mobile-first CSS with proper breakpoints for mobile, tablet, and desktop
2. Ensure all tap targets are at least 44px for touch screens
3. Replace any hover-only interactions with alternatives that work on touch
4. Stack layout elements that are side-by-side on desktop when on mobile
5. Test that text is readable without zooming on a 375px viewport

Don't change the logic or data — only the layout and responsive behaviour.`,
      },
      {
        title: "Optimise a Slow Database Query",
        prompt: `This database query is slow and causing performance issues:

[paste the query]

Please:
1. Identify what's causing the slowness (missing index, full table scan, N+1, cartesian product, etc.)
2. Suggest the right index or indexes to add and explain why
3. Rewrite the query if it can be made more efficient
4. Check if similar slow patterns exist in nearby queries
5. Estimate the performance improvement from your changes

Show the EXPLAIN output interpretation if relevant.`,
      },
    ],
  },
  {
    id: "architecture",
    icon: <Layout size={20} />,
    title: "Architecture & System Design Prompts",
    subtitle:
      "Use these prompts when you need Windsurf to help you think through big decisions before writing a line of code.",
    tag: "Architecture",
    prompts: [
      {
        title: "Design the Folder & File Structure",
        prompt: `I'm building a [describe the project — e.g. "SaaS dashboard with multi-tenancy and role-based access control"] using [tech stack].

Before I write any code, help me design the folder and file structure:
1. Propose a directory layout with explanations for each top-level directory
2. Show where feature modules, shared utilities, and config files should live
3. Explain the naming conventions you'd use and why
4. Highlight any structural decisions that will be hard to change later
5. Show an example of where a specific feature (e.g. auth, billing) would live in this structure`,
      },
      {
        title: "Review and Improve API Design",
        prompt: `Review the API design in @[filename or route folder]. I want to know:
1. Does the URL structure follow RESTful conventions? Where does it deviate?
2. Are HTTP methods used correctly (GET for reads, POST for creates, etc.)?
3. Are there any response shape inconsistencies across endpoints?
4. Is there anything that would make this API painful to consume as a frontend developer?
5. What changes would you recommend to improve consistency and usability?

Suggest concrete changes with before/after examples.`,
      },
      {
        title: "Identify Technical Debt and Prioritise It",
        prompt: `Do a technical debt audit of @[filename or directory]. I want to understand:
1. What are the biggest maintainability problems in this code?
2. What will become a major problem as the codebase scales?
3. What's safe to leave for now vs. what needs to be fixed soon?
4. Are there any security or performance time bombs hiding in here?
5. If you had to prioritise a refactor list, what are the top 5 items?

Be honest and direct — I want to know the real state of this code.`,
      },
      {
        title: "State Management Architecture Review",
        prompt: `Review how state is managed in this application by looking at @[relevant files]. I need to know:
1. What state management approach is being used and is it appropriate for the app's scale?
2. Where is state being held too high or too low in the component tree?
3. Is there any redundant or duplicated state that could cause sync issues?
4. Where is server state being mixed up with UI state (and is that causing bugs)?
5. What would you recommend changing about the state architecture and in what order?`,
      },
    ],
  },
]

const faqs = [
  {
    q: "What is Windsurf AI?",
    a: "Windsurf is an AI-powered code editor built by Codeium, designed from the ground up for AI-first development. Its key differentiator is Cascade — an autonomous AI agent that can plan and execute complex, multi-step coding tasks across your entire codebase, not just suggest the next line of code.",
  },
  {
    q: "What is Windsurf Cascade and how does it work?",
    a: "Cascade is Windsurf's agentic AI system. When you give it a high-level task, Cascade reads your codebase to understand the full context, creates a plan, executes changes across multiple files, and can even run terminal commands. It operates with a much higher level of autonomy than standard AI code assistants, which only suggest edits one chunk at a time.",
  },
  {
    q: "How is Windsurf different from Cursor?",
    a: "Both are AI code editors built on VSCode forks, but their philosophies differ. Windsurf's Cascade agent operates autonomously — it plans and executes multi-file tasks without asking for approval at each step. Cursor's Composer is more step-by-step and approval-driven, giving you more control but requiring more back-and-forth. Many developers use Windsurf for large features and Cursor for precise, targeted edits.",
  },
  {
    q: "Is Windsurf free to use?",
    a: "Windsurf has a free tier that includes limited Cascade uses per month. The Pro plan ($15/month as of 2025) provides unlimited Cascade flows and access to more powerful AI models. It's generally priced lower than Cursor's Pro plan ($20/month), making it attractive for developers who want autonomous agent capabilities at lower cost.",
  },
  {
    q: "What AI models does Windsurf use?",
    a: "Windsurf Cascade uses a combination of Codeium's proprietary models and frontier models from Anthropic (Claude) and OpenAI (GPT-4). The model tier available to you depends on your plan. Windsurf's models are specifically fine-tuned for code generation, codebase understanding, and multi-step task planning.",
  },
  {
    q: "How is Windsurf different from GitHub Copilot?",
    a: "GitHub Copilot is primarily an inline autocomplete tool — it suggests the next few lines as you type and helps with single functions. Windsurf's Cascade is a full agentic system that can take a high-level goal like 'add user authentication' and execute all the code changes needed across your entire project. They operate at completely different levels of autonomy.",
  },
  {
    q: "What are Windsurf Flows?",
    a: "Flows are reusable prompt workflows you can save and run with a single command in Windsurf. You can create a Flow for any repeated task — like 'add JSDoc to this function', 'make this component responsive', or 'run a security audit on this file'. Flows save you from retyping the same prompts and let you build a personal library of powerful AI commands.",
  },
  {
    q: "What kinds of tasks is Windsurf best suited for?",
    a: "Windsurf excels at tasks that require understanding or modifying multiple files at once: building new features from scratch, large-scale refactors, migrating to TypeScript, adding test coverage across a codebase, or implementing complex systems like authentication, billing, or notifications. It's less optimal for precise one-line tweaks where you want full control over every change.",
  },
  {
    q: "How do I write better prompts for Windsurf Cascade?",
    a: "The most effective Cascade prompts are specific about the end goal, reference relevant files using @filename syntax, ask Cascade to show you a plan before executing, and break large tasks into phases. Avoid vague prompts like 'improve this code' — instead be explicit about what 'better' means: faster, more readable, more testable, more secure, etc.",
  },
  {
    q: "Can Windsurf run terminal commands?",
    a: "Yes. Windsurf Cascade can run terminal commands as part of its task execution — for example, installing packages with npm install, running tests, or executing build scripts. This makes it possible to complete end-to-end tasks that require not just code changes but also dependency management and validation without switching to a separate terminal.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Windsurf AI Prompts 2026: 60+ Copy-Paste Templates for the Cascade Agent",
      description:
        "60+ copy-paste prompts for Windsurf AI — Codeium's agentic IDE. Expert templates for Cascade agent tasks, chat, debugging, Flows, and architecture planning.",
      author: { "@type": "Organization", name: "GPTPrompts" },
      dateModified: "2026-01-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

export default function WindsurfAIPromptsClient() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: bg }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-[#1a3038] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-xs font-medium px-3 py-1 rounded-full border"
              style={{ borderColor: `${accent}30`, color: accent }}
            >
              AI Code Editor
            </span>
            <span className="text-xs text-gray-500">by Codeium</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Windsurf AI Prompts 2026:<br />60+ Templates for the Cascade Agent
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Windsurf is Codeium&apos;s agentic IDE — built from the ground up for AI-first development. Unlike
            Cursor, Windsurf&apos;s Cascade agent plans and executes multi-step tasks autonomously, with your entire
            codebase in context.
          </p>

          <div className="flex flex-wrap gap-6 mb-8">
            {[
              { label: "60+", desc: "Copy-paste prompts" },
              { label: "5", desc: "Prompt categories" },
              { label: "10", desc: "FAQ answers" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold" style={{ color: accent }}>{s.label}</div>
                <div className="text-sm text-gray-400">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {["Cascade AI agent", "Full codebase context", "Multi-step tasks", "Flows & commands", "Free tier"].map(
              (b) => (
                <span key={b} className="text-sm px-3 py-1.5 bg-[#0f1f22] border border-[#1a3038] rounded-lg text-gray-300">
                  {b}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Windsurf vs Cursor comparison */}
      <section className="py-12 px-4 border-b border-[#1a3038]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Windsurf vs Cursor — Key Differences</h2>
          <p className="text-gray-400 mb-6 text-sm">
            Both are VSCode-based AI editors, but they take very different approaches to AI assistance.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1a3038]">
                  <th className="text-left py-3 pr-6 text-gray-400 font-medium">Feature</th>
                  <th className="text-left py-3 pr-6 font-semibold" style={{ color: accent }}>
                    Windsurf
                  </th>
                  <th className="text-left py-3 text-gray-400 font-medium">Cursor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0f1f22]">
                {[
                  ["AI Agent", "Cascade — autonomous multi-step", "Composer — step-by-step approval"],
                  ["Codebase context", "Entire repo indexed automatically", "Manual @codebase tagging"],
                  ["Task execution", "Plans + executes autonomously", "Asks for approval each step"],
                  ["Price", "Free tier, Pro $15/mo", "Free tier, Pro $20/mo"],
                  ["Best for", "Autonomous multi-file tasks", "Precise, controlled edits"],
                  ["Terminal access", "Yes — runs commands in tasks", "Yes — via Composer"],
                ].map(([feat, ws, cur]) => (
                  <tr key={feat}>
                    <td className="py-3 pr-6 text-gray-300">{feat}</td>
                    <td className="py-3 pr-6 text-white font-medium">{ws}</td>
                    <td className="py-3 text-gray-400">{cur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Prompt Sections */}
      {sections.map((section) => (
        <section key={section.id} className="py-14 px-4 border-b border-[#1a3038]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span style={{ color: accent }}>{section.icon}</span>
              <h2 className="text-2xl font-bold">{section.title}</h2>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{section.subtitle}</p>
            <div className="grid gap-4">
              {section.prompts.map((p) => (
                <CopyCard key={p.title} title={p.title} prompt={p.prompt} tag={section.tag} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-[#1a3038]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Windsurf AI FAQ</h2>
          <p className="text-gray-400 mb-6 text-sm">Everything you need to know about Windsurf and the Cascade agent.</p>
          <div className="space-y-3">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-14 px-4 border-b border-[#1a3038]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">More AI Coding Tool Guides</h2>
          <p className="text-gray-400 mb-6 text-sm">Compare Windsurf with other top AI developer tools.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: "/cursor-ai-prompts",
                label: "Cursor AI Prompts",
                desc: "60+ prompts for Cursor's Composer agent and chat panel",
                color: "#7C3AED",
              },
              {
                href: "/github-copilot-prompts",
                label: "GitHub Copilot Prompts",
                desc: "Expert prompts for GitHub Copilot inline completions and chat",
                color: "#2563EB",
              },
              {
                href: "/vibe-coding-prompts",
                label: "Vibe Coding Prompts",
                desc: "AI-first coding prompts for building with natural language",
                color: "#EC4899",
              },
              {
                href: "/bolt-new-prompts",
                label: "Bolt.new Prompts",
                desc: "Prompts for building full-stack apps with Bolt.new",
                color: "#F59E0B",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-[#0f1f22] p-6 rounded-lg hover:border-[#06B6D4]/40 border border-[#1a3038] transition-all"
              >
                <h3
                  className="text-lg font-bold text-white mb-2 transition-colors"
                  style={{ color: "white" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = link.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  {link.label}
                </h3>
                <p className="text-gray-400 text-sm">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <footer className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="font-semibold text-white mb-3">AI Code Editors</h3>
              <ul className="space-y-2">
                {[
                  { href: "/cursor-ai-prompts", label: "Cursor AI Prompts" },
                  { href: "/github-copilot-prompts", label: "GitHub Copilot Prompts" },
                  { href: "/vibe-coding-prompts", label: "Vibe Coding Prompts" },
                  { href: "/bolt-new-prompts", label: "Bolt.new Prompts" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-gray-400 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">AI Models</h3>
              <ul className="space-y-2">
                {[
                  { href: "/chatgpt-prompts", label: "ChatGPT Prompts" },
                  { href: "/claude-prompts", label: "Claude Prompts" },
                  { href: "/gemini-prompts", label: "Gemini Prompts" },
                  { href: "/grok-ai-prompts", label: "Grok Prompts" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-gray-400 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">AI Tools</h3>
              <ul className="space-y-2">
                {[
                  { href: "/custom-gpts-prompts", label: "Custom GPTs Prompts" },
                  { href: "/claude-projects-prompts", label: "Claude Projects Prompts" },
                  { href: "/gemini-gems-prompts", label: "Gemini Gems Prompts" },
                  { href: "/ai-agent-prompts", label: "AI Agent Prompts" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-gray-400 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
