"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Terminal } from "lucide-react"

const accent = "#D97706"

function PromptCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#D97706]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#D97706]/10 text-[#D97706] mb-2 inline-block">{tag}</span>}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }} className="shrink-0 p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#D97706]/20 transition-colors">
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

export default function ClaudeCodePromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#D97706]/30 text-[#D97706]">Claude Code</span>
            <span className="text-xs text-gray-500">Agentic CLI · by Anthropic</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Claude Code Prompts:<br />The Complete Guide
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Claude Code is Anthropic's agentic coding tool — a CLI that reads your entire codebase, writes code, runs tests, and executes multi-step tasks autonomously. It's a fundamentally different experience from chat-based AI coding. Here's how to get the most out of it.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Full codebase context", "Autonomous task execution", "CLI-based", "Runs tests & commands"].map(b => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* What makes Claude Code different */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What Makes Claude Code Different</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { t: "Full codebase context", d: "Claude Code reads your entire repository — every file, every function. It doesn't just see what you paste; it understands your whole project architecture." },
              { t: "Autonomous execution", d: "Claude Code can run shell commands, execute tests, install packages, and make changes across multiple files — then verify the results automatically." },
              { t: "Agentic task planning", d: "Give Claude Code a high-level goal and it plans the steps needed, executes them in order, checks for errors, and iterates until the task is done." },
            ].map(c => (
              <div key={c.t} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                <Terminal size={20} style={{ color: accent }} className="mb-3" />
                <h3 className="font-semibold text-white mb-2">{c.t}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#111] border border-[#D97706]/20 rounded-xl p-5">
            <p className="text-sm text-gray-400 font-mono">
              <span className="text-[#D97706]">$</span> claude "add rate limiting to all API endpoints and add tests for each"<br />
              <span className="text-gray-600 text-xs">→ Claude reads your codebase → identifies all API routes → implements rate limiting → writes tests → runs them → fixes failures → reports back</span>
            </p>
          </div>
        </div>
      </section>

      {/* Feature Building Prompts */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Feature Building Prompts</h2>
          <p className="text-gray-400 mb-6">These prompts are designed for Claude Code's full-codebase, agentic mode. Be specific about requirements — Claude Code works best with clear goals and success criteria.</p>
          <div className="grid gap-4">
            <PromptCard tag="New Feature" title="Build a Complete Feature" prompt={`Add a user notification system to this app. Requirements:
- Users can receive in-app notifications (new message, comment, mention)
- Notifications show as a badge count on the bell icon in the navbar
- Clicking the bell opens a dropdown showing the last 10 notifications
- Each notification is marked as read when clicked
- Add a "Mark all as read" button
- Persist notifications in the database with created_at, read, type, and message fields

Look at the existing codebase first to understand the database schema and component patterns, then implement this feature end-to-end. Write tests for the notification service. Make sure existing tests still pass.`} />
            <PromptCard tag="Refactor" title="Refactor for Performance" prompt={`Analyze this codebase for performance issues and fix the top 3 most impactful ones. For each fix:
1. Explain what the problem is and why it hurts performance
2. Show the before and after code
3. Estimate the performance improvement
4. Add a comment in the code explaining why this pattern is used

Focus on: database query optimization, unnecessary re-renders in React components, and any N+1 query patterns. Run the test suite after each change to make sure nothing breaks.`} />
            <PromptCard tag="Testing" title="Add Complete Test Coverage" prompt={`Add comprehensive tests to this codebase. First, run the existing tests to see what passes and what the current coverage is. Then:
1. Add unit tests for all utility functions in /lib and /utils that have no tests
2. Add component tests for the 5 most critical UI components
3. Add API route tests for all endpoints
4. Aim for 80% coverage on /lib, /utils, and /api directories
5. Use the existing testing patterns and imports already in the codebase

Run the full test suite at the end and report the final coverage.`} />
          </div>
        </div>
      </section>

      {/* Debugging Prompts */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Debugging & Investigation Prompts</h2>
          <p className="text-gray-400 mb-6">Claude Code can trace bugs across your entire codebase — something chat interfaces can't do effectively.</p>
          <div className="grid gap-4">
            <PromptCard tag="Debug" title="Find and Fix a Bug" prompt={`There's a bug where [describe the bug — e.g. "users get logged out randomly after about 20 minutes"]. I don't know where it's coming from.

Please:
1. Search the codebase for all code related to authentication and session management
2. Identify the most likely causes of this bug
3. Add logging to help confirm which cause is the actual problem
4. Fix the root cause
5. Add a test that would catch this bug in the future

Run the tests at the end to confirm nothing is broken.`} />
            <PromptCard tag="Debug" title="Trace a Data Flow" prompt={`I need to understand exactly how data flows through this app for [specific user action, e.g. "when a user submits a payment"].

Trace the complete flow from the frontend event handler through all middleware, API routes, service layers, and database operations. Create a clear summary showing:
- Every file involved in order
- What data is passed between each layer
- Any validations or transformations that happen
- Where errors are handled (or should be handled but aren't)

Don't make any changes — just trace and document.`} />
            <PromptCard tag="Security" title="Security Audit" prompt={`Perform a security audit of this codebase. Check for:
1. SQL injection vulnerabilities (raw queries, string interpolation)
2. XSS attack vectors (unsanitized user input rendered as HTML)
3. Authentication bypasses (routes that should require auth but don't)
4. Exposed sensitive data in API responses (passwords, tokens, PII)
5. Missing rate limiting on sensitive endpoints (login, signup, password reset)
6. Insecure dependencies (run npm audit and report critical/high issues)

For each issue found: severity (Critical/High/Medium/Low), file and line number, explanation, and the fix. Implement fixes for all Critical and High severity issues.`} />
          </div>
        </div>
      </section>

      {/* Code Quality */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Code Quality & Maintenance Prompts</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { t: "Update all dependencies", p: "Audit all dependencies in package.json. Update everything to the latest stable version. For any major version bumps, check the migration guide and handle breaking changes. Run tests after each major update. Report what was updated and any issues found." },
              { t: "Add TypeScript types", p: "This JavaScript codebase needs TypeScript. Add TypeScript types throughout, starting with the most critical files: API routes, database models, and shared utility functions. Add a tsconfig.json, fix all type errors, and make sure the build passes." },
              { t: "Document the codebase", p: "Generate comprehensive documentation for this codebase. Create: (1) a ARCHITECTURE.md explaining the high-level structure and how the main pieces fit together, (2) JSDoc comments for all exported functions that lack them, (3) inline comments for any complex algorithms. Keep comments explanatory (why), not descriptive (what)." },
              { t: "Clean up dead code", p: "Find and remove dead code in this codebase. Look for: exported functions/components that are never imported, commented-out code blocks, unused variables and imports, TODO comments older than 90 days, and feature flags that are always true or always false. List everything you find before removing it." },
            ].map(p => <PromptCard key={p.t} title={p.t} prompt={p.p} />)}
          </div>
        </div>
      </section>

      {/* Claude Code vs Cursor vs Copilot */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Claude Code vs Cursor vs GitHub Copilot</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  <th className="text-left py-3 pr-6 text-gray-400 font-medium">Feature</th>
                  <th className="text-left py-3 pr-6 font-semibold" style={{ color: accent }}>Claude Code</th>
                  <th className="text-left py-3 pr-6 text-gray-400 font-medium">Cursor</th>
                  <th className="text-left py-3 text-gray-400 font-medium">GitHub Copilot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a1a1a]">
                {[
                  ["Interface", "CLI (terminal)", "IDE (VSCode fork)", "IDE extension"],
                  ["Full codebase context", "✅ Always", "✅ With @codebase", "⚠️ Limited"],
                  ["Autonomous execution", "✅ Full agentic", "✅ Composer", "❌ No"],
                  ["Runs shell commands", "✅ Yes", "✅ Yes", "❌ No"],
                  ["Runs tests automatically", "✅ Yes", "⚠️ Manual", "❌ No"],
                  ["IDE integration", "❌ Terminal only", "✅ Full IDE", "✅ All major IDEs"],
                  ["Price", "$20/mo (Claude Pro)", "$20/mo", "$10/mo"],
                  ["Best for", "Complex agentic tasks", "Everyday coding", "Inline autocomplete"],
                ].map(([feat, cc, cur, cop]) => (
                  <tr key={feat}>
                    <td className="py-3 pr-6 text-gray-300">{feat}</td>
                    <td className="py-3 pr-6 text-white font-medium">{cc}</td>
                    <td className="py-3 pr-6 text-gray-400">{cur}</td>
                    <td className="py-3 text-gray-400">{cop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Claude Code FAQ</h2>
          <div className="space-y-3">
            <FAQ q="What is Claude Code?" a="Claude Code is Anthropic's agentic coding CLI. You install it as a command-line tool, point it at your codebase, and give it high-level tasks. It reads your entire codebase, plans what changes are needed, writes code, runs tests, executes shell commands, and iterates until the task is complete — all autonomously." />
            <FAQ q="How do I install Claude Code?" a="Claude Code is available through Anthropic's developer platform. Install it via npm: `npm install -g @anthropic-ai/claude-code`. You'll need a Claude Pro or API subscription. Run `claude` in your project directory to start." />
            <FAQ q="How is Claude Code different from using Claude in the browser?" a="The browser version of Claude can only see what you paste — typically a few hundred lines at most. Claude Code has full access to your entire repository, can run shell commands, execute tests, install packages, and make coordinated changes across dozens of files. It's a fundamentally more powerful tool for serious coding work." />
            <FAQ q="Can Claude Code break my codebase?" a="Claude Code can make significant changes across multiple files. It's designed to be careful and always runs tests when available, but you should always use version control (git) so you can revert if needed. It's good practice to commit before any large Claude Code task so you have a clean rollback point." />
            <FAQ q="Is Claude Code better than Cursor?" a="They're different tools. Claude Code is terminal-based and excels at autonomous, multi-step tasks — especially for developers comfortable with the CLI. Cursor is an IDE that's better for everyday coding with real-time AI assistance. Many developers use both: Cursor for day-to-day work, Claude Code for complex refactors and feature implementations." />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">More AI Coding Guides</h2>
          <p className="text-gray-400 mb-6">Compare Cursor, Windsurf, Bolt.new, GitHub Copilot, and every AI coding tool.</p>
          <Link href="/website-links" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-black transition-all hover:opacity-90" style={{ backgroundColor: accent }}>
            Browse All Guides →
          </Link>
        </div>
      </section>
    </div>
  )
}
