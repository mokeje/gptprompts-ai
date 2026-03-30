"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Code, Terminal, GitBranch, Cpu, Layers } from "lucide-react"

const accent = "#7C3AED"

function CopyCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#7C3AED]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] mb-2 inline-block">{tag}</span>}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }} className="shrink-0 p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#7C3AED]/20 transition-colors" aria-label="Copy prompt">
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

const faqItems = [
  {
    q: "What is Cursor AI and how is it different from VS Code?",
    a: "Cursor is an AI-native code editor built on top of VS Code. It shares the same extensions, keybindings, and settings, but adds deep AI integration: Composer for multi-file code generation, Chat for codebase-aware conversations, and inline editing with Cmd+K. Unlike VS Code with Copilot, Cursor understands your entire project context."
  },
  {
    q: "Which AI model should I use in Cursor?",
    a: "For complex tasks like architecture, full features, and multi-file generation, use Claude Sonnet or GPT-4o. For quick edits and autocomplete, cursor-small is fastest and cheapest. GPT-4o is strong for debugging. Claude excels at TypeScript, React, and modern frameworks. You can switch models per conversation."
  },
  {
    q: "How do I use Cursor Composer effectively?",
    a: "Always reference relevant files with @file, describe the goal before the implementation, specify which patterns to follow from your codebase, and tell Composer what NOT to change. Think of it like briefing a senior developer. The more context you provide, the better the output."
  },
  {
    q: "What are the @ symbols in Cursor and how do I use them?",
    a: "The @ symbol lets you reference context: @file brings in a specific file, @codebase searches your entire project, @docs references documentation, @web searches the internet, and @git accesses your git history. Always add relevant @ references before complex prompts for dramatically better results."
  },
  {
    q: "Can Cursor generate code across multiple files at once?",
    a: "Yes. Composer is specifically designed for multi-file generation. Describe the feature you want, reference the relevant files with @, and Composer will create or modify multiple files simultaneously. It handles imports, type definitions, and cross-file dependencies automatically."
  },
  {
    q: "How do I get better autocomplete suggestions from Cursor?",
    a: "Keep related files open in tabs so Cursor has more context. Write clear comments describing what you want before the code. Use descriptive variable and function names. The autocomplete learns from your codebase patterns, so consistent coding style improves suggestions."
  },
  {
    q: "Is Cursor worth the subscription cost?",
    a: "Most developers report saving 2 to 4 hours per day with Cursor. The Pro plan includes 500 fast requests per month with premium models. If you code professionally, the productivity gain typically pays for itself within the first week. The free tier includes limited AI requests to try it out."
  },
  {
    q: "How do I use Cursor for debugging?",
    a: "Paste the error message or stack trace into Chat with @file referencing the problematic file. Describe what you expected versus what happened. Cursor will analyze the error in context of your actual code, not generic examples. For complex bugs, use @codebase to let it search for related issues across your project."
  },
  {
    q: "Can I use Cursor with any programming language?",
    a: "Cursor works with every language VS Code supports. It performs best with TypeScript, JavaScript, Python, Rust, and Go because these have the most training data. For less common languages, provide more context and examples in your prompts. The @ references work regardless of language."
  },
  {
    q: "How does Cursor handle large codebases?",
    a: "Cursor indexes your entire codebase for semantic search via @codebase. For very large projects, be specific about which files and directories are relevant. Use .cursorignore to exclude build artifacts, node_modules, and generated files from indexing. This keeps the AI focused on your actual source code."
  },
  {
    q: "What is the difference between Cursor Chat and Composer?",
    a: "Chat is for conversations: asking questions, exploring ideas, understanding code, and getting explanations. Composer is for action: generating, editing, and creating code across multiple files. Use Chat when you need to think, use Composer when you need to build."
  },
  {
    q: "How do I migrate from VS Code to Cursor?",
    a: "Cursor imports your VS Code extensions, settings, keybindings, and themes automatically on first launch. Your workflow stays identical, with AI capabilities added on top. You can run both side by side during the transition. Most developers switch fully within a day or two."
  },
]

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cursor AI Prompts: The Complete Guide to AI-Powered Coding in 2026",
  description: "Master Cursor AI with expert prompts for Composer, Chat, and inline editing. Code generation, debugging, testing, and architecture prompts for developers.",
  image: "https://gptprompts.ai/cursor-ai-prompts.jpg",
  author: { "@type": "Organization", name: "GPTPrompts.AI" },
  publisher: { "@type": "Organization", name: "GPTPrompts.AI" },
  datePublished: "2026-03-28",
  dateModified: "2026-03-28",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(item => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

export default function CursorAIPromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#7C3AED]/30 text-[#7C3AED]">AI Tools</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Cursor AI Prompts: The Complete<br />Guide to AI-Powered Coding</h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Cursor is the AI code editor that understands your entire codebase. These prompts help you master Composer, Chat, and inline editing to write better code faster than ever.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Composer", "Chat", "Inline Edits", "Multi-File Generation", "Debugging"].map(b => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Code Generation & Scaffolding */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Code size={20} className="text-[#7C3AED]" />
            <h2 className="text-2xl font-bold">Code Generation and Scaffolding</h2>
          </div>
          <p className="text-gray-400 mb-6">Generate complete features, components, and modules with Cursor Composer. Always reference existing files for consistent patterns.</p>
          <div className="grid gap-4">
            <CopyCard tag="Composer" title="Full Feature Generation with Context" prompt={`@file:src/types/user.ts @file:src/components/Dashboard.tsx @file:src/lib/api.ts

Build a complete user settings page with the following requirements:

1. Create a new SettingsPage component following the same patterns as Dashboard.tsx
2. Include sections for: profile info, notification preferences, and account security
3. Use the User type from types/user.ts for all data
4. Use the API client patterns from lib/api.ts for data fetching
5. Add form validation with error states
6. Include loading and error states matching our existing patterns
7. Add TypeScript types for all form data

Follow our existing file structure and naming conventions. Do not modify any existing files.`} />

            <CopyCard tag="Composer" title="API Route and Database Schema" prompt={`@codebase

I need to add a new "projects" feature to this app. Generate the following:

1. Database schema/migration for a projects table (id, name, description, owner_id, status, created_at, updated_at)
2. API routes for CRUD operations following our existing API patterns
3. TypeScript types and Zod validation schemas
4. A reusable API client function matching our existing fetch patterns

Look at how other entities (like users or teams) are structured in the codebase and follow the same patterns exactly. List what files you will create and modify before generating code.`} />

            <CopyCard tag="Composer" title="React Component from Design Description" prompt={`@file:src/components/ui/Button.tsx @file:src/components/ui/Card.tsx @file:tailwind.config.ts

Create a PricingTable component with 3 tiers (Starter, Pro, Enterprise):

- Each tier shows: name, price, feature list, and CTA button
- Use our existing Button and Card components
- Responsive: stack vertically on mobile, 3 columns on desktop
- Highlight the "Pro" tier as recommended
- Add a monthly/annual toggle that updates prices
- Use our Tailwind theme colors from the config
- TypeScript with proper prop types
- Export as default from src/components/PricingTable.tsx`} />
          </div>
        </div>
      </section>

      {/* Debugging & Performance */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Terminal size={20} className="text-[#7C3AED]" />
            <h2 className="text-2xl font-bold">Debugging and Performance</h2>
          </div>
          <p className="text-gray-400 mb-6">Paste errors into Chat with file references for context-aware debugging that actually understands your code.</p>
          <div className="grid gap-4">
            <CopyCard tag="Chat" title="Error Diagnosis with Stack Trace" prompt={`@file:src/app/api/auth/route.ts

I am getting this error in production:

[PASTE YOUR ERROR AND STACK TRACE HERE]

This happens when users try to [describe the action]. It worked fine until [what changed recently].

Please:
1. Identify the root cause based on my actual code
2. Explain why this error occurs
3. Provide the exact fix with code changes
4. Suggest how to prevent similar issues in the future`} />

            <CopyCard tag="Chat" title="Performance Profiling and Optimization" prompt={`@file:src/components/DataTable.tsx @file:src/hooks/useData.ts

This component re-renders excessively and the page feels sluggish with 500+ rows. Profile the component and tell me:

1. What is causing unnecessary re-renders?
2. Are there missing memoization opportunities (useMemo, useCallback, React.memo)?
3. Should I implement virtualization for this dataset size?
4. Are there any expensive computations that should be cached?
5. What is the optimal data fetching strategy for this pattern?

Give me the optimized version of both files with explanations for each change.`} />

            <CopyCard tag="Chat" title="Race Condition and Async Bug Fix" prompt={`@file:src/hooks/useSearch.ts @file:src/lib/api.ts

My search feature has a race condition. When I type quickly, older API responses sometimes overwrite newer results. The search results flicker and show stale data.

Current behavior: type "react" -> results for "r", "re", "rea" arrive out of order
Expected behavior: only show results for the final query "react"

Analyze the code and fix the race condition. Consider: AbortController, request cancellation, debouncing, and stale request detection. Show me the complete fixed implementation.`} />
          </div>
        </div>
      </section>

      {/* Testing & Quality */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Layers size={20} className="text-[#7C3AED]" />
            <h2 className="text-2xl font-bold">Testing and Quality</h2>
          </div>
          <p className="text-gray-400 mb-6">Generate comprehensive test suites that cover real scenarios, not just happy paths.</p>
          <div className="grid gap-4">
            <CopyCard tag="Composer" title="Comprehensive Test Suite Generation" prompt={`@file:src/components/CheckoutForm.tsx @file:src/lib/payments.ts @file:src/types/order.ts

Generate a complete test suite for CheckoutForm using our existing test patterns:

1. Unit tests for form validation (valid/invalid inputs for each field)
2. Integration tests for the payment submission flow
3. Edge cases: network failures, duplicate submissions, timeout handling
4. Accessibility tests: keyboard navigation, screen reader labels, error announcements
5. Mock the payments API following our existing mock patterns

Use the same test framework and assertion style as our other test files. Include both positive and negative test cases. Add descriptive test names that explain the expected behavior.`} />

            <CopyCard tag="Chat" title="Code Review and Quality Analysis" prompt={`@file:src/services/OrderService.ts

Review this code as a senior engineer. Check for:

1. Bug risks: null/undefined handling, off-by-one errors, race conditions
2. Security: input validation, SQL injection, XSS, data exposure
3. Performance: N+1 queries, unnecessary allocations, missing indexes
4. Maintainability: naming, single responsibility, testability, DRY violations
5. Error handling: are all failure modes covered? Are errors informative?

For each issue found, explain the risk level (critical/medium/low), show the problematic line, and provide the exact fix. Do not suggest style changes unless they affect readability.`} />

            <CopyCard tag="Composer" title="E2E Test Scenarios from User Stories" prompt={`@codebase

Generate end-to-end test scenarios for our user authentication flow. Cover these user stories:

1. New user signs up with email and password
2. Existing user logs in
3. User resets forgotten password
4. OAuth login with Google
5. Session expiry and automatic redirect to login
6. Rate limiting after 5 failed login attempts

For each scenario, write the test using our existing E2E framework. Include setup, the user actions, assertions, and teardown. Make sure tests are independent and can run in any order.`} />
          </div>
        </div>
      </section>

      {/* Architecture & Design Patterns */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Cpu size={20} className="text-[#7C3AED]" />
            <h2 className="text-2xl font-bold">Architecture and Design Patterns</h2>
          </div>
          <p className="text-gray-400 mb-6">Use Cursor Chat for architecture decisions and Composer for implementation. Let the AI reason about tradeoffs before writing code.</p>
          <div className="grid gap-4">
            <CopyCard tag="Chat" title="Architecture Decision Analysis" prompt={`@codebase

I need to add real-time notifications to this app. Before writing any code, analyze our current architecture and recommend an approach:

1. What real-time technology fits best? (WebSockets, SSE, polling, or a managed service like Pusher/Ably)
2. Where should the notification logic live in our current architecture?
3. How should we handle: delivery guarantees, offline users, notification preferences, and read/unread state?
4. What database changes are needed?
5. What are the scaling implications of each approach?

Consider our current tech stack, deployment setup, and team size. Recommend the simplest solution that meets the requirements. Do not write code yet.`} />

            <CopyCard tag="Composer" title="Refactor to Clean Architecture" prompt={`@file:src/app/api/orders/route.ts

This API route has grown to 300+ lines with business logic, database queries, and validation all mixed together. Refactor it into clean architecture:

1. Extract business logic into a service layer (src/services/OrderService.ts)
2. Extract database operations into a repository (src/repositories/OrderRepository.ts)
3. Extract validation into schemas (src/schemas/order.ts)
4. Keep the route handler thin: validate -> call service -> return response
5. Add proper TypeScript interfaces for each layer boundary
6. Maintain all existing behavior and error handling

Show me the complete refactored files. The route handler should be under 30 lines.`} />

            <CopyCard tag="Chat" title="Database Schema Design Review" prompt={`@file:prisma/schema.prisma

Review my database schema for a multi-tenant SaaS application. Evaluate:

1. Are relationships properly defined with appropriate cascade rules?
2. Are indexes optimized for common query patterns?
3. Is the multi-tenancy model correct (shared database, tenant_id column)?
4. Are there any normalization issues or missing tables?
5. What fields need unique constraints that are currently missing?
6. Will this schema handle 100K+ tenants and millions of rows efficiently?

For each suggestion, explain the problem it solves and provide the exact schema change.`} />
          </div>
        </div>
      </section>

      {/* Productivity & Workflow */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <GitBranch size={20} className="text-[#7C3AED]" />
            <h2 className="text-2xl font-bold">Productivity and Workflow</h2>
          </div>
          <p className="text-gray-400 mb-6">Accelerate everyday development tasks with prompts designed for real-world workflows.</p>
          <div className="grid gap-4">
            <CopyCard tag="Chat" title="PR Description and Documentation" prompt={`@git

I just finished implementing [FEATURE_NAME]. Look at my recent git changes and generate:

1. A PR description with: summary, motivation, what changed (grouped by area), testing notes, and screenshots needed
2. Update the relevant README or docs to reflect the new feature
3. Add inline code comments for any complex logic that future developers might find confusing
4. Suggest if this PR should be split into smaller PRs for easier review

Format the PR description in markdown with clear sections.`} />

            <CopyCard tag="Inline" title="Quick Refactor with Cmd+K" prompt={`Refactor this function to:
- Use early returns instead of nested if/else
- Add TypeScript types for all parameters and return value
- Handle the null/undefined edge cases
- Add a JSDoc comment explaining what it does
- Keep the same behavior, just cleaner code`} />

            <CopyCard tag="Chat" title="Codebase Onboarding and Understanding" prompt={`@codebase

I just joined this project. Give me a complete onboarding overview:

1. What is this application and what does it do?
2. What is the tech stack (frontend, backend, database, deployment)?
3. How is the codebase organized? Explain the folder structure and key directories.
4. What are the main data models and how do they relate?
5. Where are the API routes and what patterns do they follow?
6. What testing frameworks and patterns are used?
7. What are the most important files I should read first?

Be specific and reference actual files and directories. Do not give generic advice.`} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <FAQ key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Related Prompt Guides</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "AI Coding Prompts", href: "/ai-prompts-coding" },
              { label: "ChatGPT Code Generation", href: "/chatgpt-code-generation" },
              { label: "Replit Agent Prompts", href: "/replit-agent-prompts" },
              { label: "v0 Prompts", href: "/v0-prompts" },
              { label: "Lovable AI Prompts", href: "/lovable-ai-prompts" },
              { label: "BlackBox AI", href: "/blackbox-ai" },
              { label: "GitHub Copilot Prompts", href: "/github-copilot-prompts" },
              { label: "Windsurf AI Prompts", href: "/windsurf-ai-prompts" },
              { label: "AI for Developers", href: "/ai-prompts-for-developers" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="text-sm px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-gray-300 hover:border-[#7C3AED]/40 hover:text-white transition-all text-center">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
