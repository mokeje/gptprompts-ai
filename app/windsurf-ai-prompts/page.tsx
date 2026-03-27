"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react"

const accent = "#06B6D4"

function PromptCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#06B6D4]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] mb-2 inline-block">{tag}</span>}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }} className="shrink-0 p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#06B6D4]/20 transition-colors">
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-400" />}
        </button>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed font-mono whitespace-pre-wrap">{prompt}</p>
    </div>
  )
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-[#1a1a1a] transition-colors">
        <span className="font-medium text-white pr-4">{q}</span>
        {open ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#2a2a2a] pt-4">{a}</div>}
    </div>
  )
}

export default function WindsurfAIPromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#06B6D4]/30 text-[#06B6D4]">AI Code Editor</span>
            <span className="text-xs text-gray-500">by Codeium</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Windsurf AI Prompts:<br />The Developer's Guide</h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Windsurf is Codeium's agentic IDE — built from the ground up for AI-first development. Unlike Cursor, Windsurf's "Cascade" agent can plan and execute multi-step tasks autonomously, understanding your entire codebase in context.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Cascade AI agent", "Full codebase context", "Multi-step tasks", "Flows & commands"].map(b => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Windsurf vs Cursor */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Windsurf vs Cursor — Key Differences</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  <th className="text-left py-3 pr-6 text-gray-400 font-medium">Feature</th>
                  <th className="text-left py-3 pr-6 font-semibold" style={{ color: accent }}>Windsurf</th>
                  <th className="text-left py-3 text-gray-400 font-medium">Cursor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a1a1a]">
                {[
                  ["AI Agent", "Cascade — fully autonomous multi-step", "Composer — step by step"],
                  ["Codebase context", "Entire repo indexed automatically", "Manual @codebase tagging"],
                  ["Task execution", "Plans + executes autonomously", "Asks for approval each step"],
                  ["Price", "Free tier available, Pro $15/mo", "Free tier, Pro $20/mo"],
                  ["Base editor", "Built on VSCode fork", "Built on VSCode fork"],
                  ["Best for", "Autonomous multi-file tasks", "Precise, controlled edits"],
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

      {/* Cascade Prompts */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Cascade Agent Prompts</h2>
          <p className="text-gray-400 mb-6">Cascade is Windsurf's autonomous agent. These prompts are designed for multi-step tasks that Cascade can plan and execute on its own.</p>
          <div className="grid gap-4">
            <PromptCard tag="Cascade" title="Build a Complete Feature End-to-End" prompt={`I need you to implement a complete user authentication system for this Next.js app. It should include: (1) a /login page with email/password form, (2) a /signup page, (3) JWT token handling, (4) protected route middleware that redirects unauthenticated users to /login, (5) a useAuth() hook for accessing user state, and (6) a logout button in the header. Use NextAuth.js with the credentials provider. Look at the existing codebase structure first, then implement everything needed without breaking existing functionality.`} />
            <PromptCard tag="Cascade" title="Refactor Entire Codebase to TypeScript" prompt={`Refactor this JavaScript project to TypeScript. Please: (1) analyze the full codebase to understand all data structures and function signatures, (2) add proper TypeScript types throughout, (3) create interfaces for all major data objects, (4) add a tsconfig.json if one doesn't exist, (5) fix any type errors that arise, and (6) make sure the build still passes after refactoring. Work through the files systematically and make sure nothing breaks.`} />
            <PromptCard tag="Cascade" title="Add Comprehensive Test Coverage" prompt={`Add unit tests to this codebase using Vitest and React Testing Library. First, analyze the most critical/complex files that have no tests. Then: (1) write tests for the 5 most important utility functions, (2) write component tests for the 3 most important UI components, (3) write integration tests for the main user flows, (4) aim for at least 70% coverage on critical paths. Show me what you're planning to test before you start.`} />
          </div>
        </div>
      </section>

      {/* Chat Prompts */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Windsurf Chat Prompts</h2>
          <p className="text-gray-400 mb-6">Use these in Windsurf's chat panel for quick questions, explanations, and targeted help.</p>
          <div className="grid gap-4">
            <PromptCard tag="Understanding" title="Understand Unfamiliar Code" prompt={`Explain this code to me in plain English: @[filename]. I need to understand: (1) what problem it's solving, (2) how the main algorithm/logic works, (3) any design patterns being used and why, (4) potential edge cases or failure modes, and (5) what I should know before modifying it.`} />
            <PromptCard tag="Architecture" title="Plan Before Building" prompt={`I want to add [feature] to this codebase. Before writing any code, I want to understand the best approach. Please: (1) analyze the existing codebase to understand relevant patterns, (2) suggest 2-3 implementation approaches with tradeoffs, (3) recommend which approach fits best with the existing architecture, (4) outline which files will need to change and in what order. Only give me the plan — I'll ask you to implement it once I approve.`} />
            <PromptCard tag="Performance" title="Find and Fix Performance Issues" prompt={`Analyze @[filename or component] for performance issues. Look for: unnecessary re-renders, expensive computations that should be memoized, large bundle imports that could be lazy-loaded, N+1 queries or waterfalls, and unoptimized images or assets. Prioritize the top 3 issues by impact and show me exactly how to fix each one.`} />
            <PromptCard tag="Security" title="Security Audit This File" prompt={`Perform a security audit on @[filename]. Check for: SQL injection vulnerabilities, XSS attack vectors, exposed sensitive data in logs or responses, missing authentication/authorization checks, insecure dependencies, and any other security issues. List each issue with severity (Critical/High/Medium/Low) and show me the fix.`} />
          </div>
        </div>
      </section>

      {/* Flows */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Windsurf Flows & Inline Prompts</h2>
          <p className="text-gray-400 mb-6">Windsurf's "Flows" feature lets you create reusable prompt workflows. These are great starting points.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { t: "Write a docstring", p: "Add a comprehensive JSDoc/TSDoc comment to this function explaining: what it does, all parameters with types and descriptions, the return value, any thrown errors, and a usage example." },
              { t: "Add loading & error states", p: "This component fetches data but has no loading or error handling. Add: a skeleton loader while data is fetching, a user-friendly error message with retry button if fetch fails, and empty state if data returns empty array." },
              { t: "Make this responsive", p: "This component only works on desktop. Make it fully responsive with: mobile-first CSS, proper breakpoints for tablet and desktop, touch-friendly tap targets (min 44px), and a hamburger menu if there's navigation." },
              { t: "Optimize this query", p: "This database query is slow. Analyze it and: identify what's causing the performance issue, suggest the right index to add, rewrite the query if it can be optimized, and estimate the performance improvement." },
            ].map(p => (
              <PromptCard key={p.t} title={p.t} prompt={p.p} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Windsurf FAQ</h2>
          <div className="space-y-3">
            <FAQ q="What is Windsurf?" a="Windsurf is an AI-powered code editor built by Codeium. Its key feature is Cascade — an autonomous AI agent that can plan and execute complex, multi-step coding tasks across your entire codebase. Unlike standard AI code assistants, Cascade understands your full project context and can make coordinated changes across multiple files." />
            <FAQ q="Is Windsurf free?" a="Windsurf has a free tier that includes limited Cascade uses per month. The Pro plan ($15/month) gives unlimited Cascade flows and access to more powerful AI models. It's generally cheaper than Cursor's Pro plan." />
            <FAQ q="Windsurf vs Cursor — which should I use?" a="Windsurf's Cascade agent is better for autonomous, multi-step tasks where you want AI to figure out what needs to change across your codebase. Cursor is better for precise, controlled edits where you want to review each change. Many developers use Windsurf for large feature work and Cursor for targeted debugging." />
            <FAQ q="What AI models does Windsurf use?" a="Windsurf Cascade uses a combination of Codeium's own models and frontier models from Anthropic and OpenAI. The specific model can vary by plan tier. Windsurf's models are specifically tuned for code generation and codebase understanding." />
            <FAQ q="How is Windsurf different from GitHub Copilot?" a="GitHub Copilot is primarily an inline code completion tool — it suggests the next few lines as you type. Windsurf's Cascade is a full agentic system that can take a high-level task, plan how to implement it, and execute changes across your entire codebase autonomously. They operate at completely different levels of autonomy." />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">More AI Coding Tool Guides</h2>
          <p className="text-gray-400 mb-6">Compare Cursor, Bolt.new, v0, Vibe Coding, and all the top AI dev tools.</p>
          <Link href="/website-links" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: accent }}>
            Browse All Guides →
          </Link>
        </div>
      </section>
    </div>
  )
}
