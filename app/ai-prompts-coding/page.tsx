import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Prompts for Coding (GitHub Copilot, Cursor, Replit): Code, Debugging & Refactors (2026 Guide)",
  description:
    "Master GitHub Copilot, Cursor, and Replit with 60+ production-ready coding prompts. Learn prompt principles, code generation, refactoring, debugging, and testing strategies for developers.",
  keywords: "coding prompts, GitHub Copilot, Cursor AI, Replit, prompt engineering, code generation",
}

export default function CodingPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-16 px-6 md:px-12 border-b">
        <div className="max-w-4xl mx-auto">
          <Link href="/website-links" className="text-sm opacity-70 hover:opacity-100 mb-6 inline-block">
            ← Back to Prompts Library
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            AI Prompts for Coding: GitHub Copilot, Cursor, Replit (2026 Guide)
          </h1>
          <p className="text-xl text-gray-200">
            Master code generation, refactoring, debugging, and testing with production-ready prompts
          </p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 prose prose-invert max-w-none">
        <h2>Prompt Principles These Tools Expect</h2>
        <p>
          GitHub Copilot, Cursor, and Replit all respond best to single, specific tasks, with clear context and
          constraints. Official guides recommend:
        </p>
        <ul>
          <li>Break work into small steps instead of "build my whole app"</li>
          <li>Provide surrounding code, file names, and examples (input → output)</li>
          <li>Specify language, libraries, types, and edge cases you care about</li>
        </ul>

        <h3>A reusable pattern for your prompts:</h3>
        <pre className="bg-slate-900 p-6 rounded-lg overflow-x-auto">
          {`"You are an experienced [language/framework] engineer.
Task: [generate / refactor / explain / debug].
Context: [repo description, file, snippet].
Requirements: [libraries, style, performance, edge cases].
Output: [function signature, tests, comments, or explanation only]."`}
        </pre>

        <p>
          Below are ready-to-paste prompt ideas grouped by GitHub Copilot, Cursor, and Replit Ghostwriter / Replit
          Agent.
        </p>

        <h2>GitHub Copilot Prompts (Editor & Copilot Chat)</h2>
        <p>GitHub's own docs emphasize comments above function stubs and focused chat questions.</p>

        <h3>Code generation & stubs</h3>
        <ul>
          <li>
            "Write a TypeScript function paginate&lt;T&gt;(items: T[], page: number, perPage: number) that returns an
            object with data, total, page, and pageCount. Handle out-of-range page numbers gracefully (clamp to valid
            range)."
          </li>
          <li>
            "In this file, add an Express middleware requireAuth that reads a JWT from the Authorization header,
            verifies it with process.env.JWT_SECRET, attaches the decoded user to req.user, and returns 401 on failure."
          </li>
          <li>
            "Python: Given a list of transaction objects with fields: id, amount, currency, created_at, add a function
            that groups them by currency and returns totals per currency as a dict."
          </li>
        </ul>

        <h3>Refactoring & improvement</h3>
        <ul>
          <li>
            "Refactor this function to be more readable and testable. Extract helper functions where it reduces nesting,
            and add type hints. Don't change external behavior."
          </li>
          <li>
            "Improve this React component to avoid unnecessary re-renders. Use useMemo / useCallback where appropriate,
            and explain briefly in comments why each optimization helps."
          </li>
        </ul>

        <h3>Debugging & tests</h3>
        <ul>
          <li>
            "This function occasionally throws in production. Identify potential issues and propose fixes. Focus on
            null/undefined, race conditions, and async errors."
          </li>
          <li>
            "Write unit tests for parseConfig using Jest. Cover: valid config, missing optional fields, invalid types,
            and throwing on required missing fields. Use AAA structure."
          </li>
        </ul>

        <h3>Explanations & documentation</h3>
        <ul>
          <li>
            "Explain what this Rust function does, step by step, including ownership and lifetimes implications. Assume
            the reader is new to Rust."
          </li>
          <li>
            "Add comprehensive JSDoc comments to this public API, documenting params, return types, and possible
            errors."
          </li>
        </ul>

        <h2>Cursor AI Prompts (Rules, Chat, and In-Editor)</h2>
        <p>Cursor is designed around prompt-driven edits and repo-aware tasks.</p>

        <h3>Code generation within a repo</h3>
        <ul>
          <li>
            "Inside this Next.js app, create a usePaginatedQuery React hook in hooks/usePaginatedQuery.ts that wraps our
            existing apiClient. It should accept endpoint, params, and pageSize, and return an object with properties:
            data, isLoading, error, loadMore, and hasMore. Use the same error-handling pattern as in hooks/useQuery.ts."
          </li>
          <li>
            "Generate a Django model Order in orders/models.py with fields: id (UUID primary key), user (FK),
            total_amount (Decimal), currency, status (choices: pending, paid, cancelled), created_at, updated_at. Add a
            method mark_paid that records paid timestamp and status."
          </li>
        </ul>

        <h3>Refactor / multi-file changes</h3>
        <ul>
          <li>
            "Refactor this repo to replace requests with httpx while preserving all behavior. Update imports, session
            handling, and any async code accordingly. Show me a diff before applying."
          </li>
          <li>
            "In this project, introduce a logging module with a get_logger(name) helper. Replace ad-hoc print statements
            in the services package with structured logs (level, message, context dict). Keep style consistent with
            existing logging usage if any."
          </li>
        </ul>

        <h3>Debugging & migration</h3>
        <ul>
          <li>
            "We're getting intermittent 'connection reset' errors from this HTTP client. Inspect client.py and any call
            sites to identify likely causes (timeouts, retries, connection pooling). Propose changes and show patches."
          </li>
          <li>
            "Migrate this React Router v5 code to React Router v6. Update route definitions, Switch/Routes, and hooks
            (useHistory → useNavigate). Ensure type safety with TypeScript."
          </li>
        </ul>

        <h2>Replit Ghostwriter / Replit Agent Prompts</h2>
        <p>Replit emphasizes clear, single-feature prompts with explicit constraints.</p>

        <h3>Feature-by-feature building</h3>
        <ul>
          <li>
            "Set up a basic full-stack project for a todo app in Replit using Node.js + Express backend and vanilla JS
            frontend. Include routes to create, list, update, and delete todos stored in Replit Database. No
            authentication yet."
          </li>
          <li>
            "Add user signup and login endpoints to this existing Express app. Requirements: /signup and /login routes,
            Password hashing with bcrypt, JWT-based auth with Authorization: Bearer header, Middleware to protect /todos
            routes."
          </li>
        </ul>

        <h2>Cross-Tool Prompt Patterns (Works in All Three)</h2>
        <ul>
          <li>
            <strong>"Set the stage" prompt:</strong> "We're building a [type of app] using [stack]. Outline the core
            components, folders, and data models we'll need. Then scaffold minimal starter code or stubs for each major
            part, following best practices for this stack."
          </li>
          <li>
            <strong>Single, specific task prompts:</strong> "Write a function normalizePhoneNumber in [language] that
            accepts various phone formats and returns E.164, assuming default country [X] when missing. Include error
            handling and unit tests in the same file."
          </li>
          <li>
            <strong>Explain and improve prompts:</strong> "Review this function and: Explain what it does in 2–3
            sentences, Point out any bugs, edge cases, or security concerns, Suggest an improved version with comments."
          </li>
        </ul>

        <h2>Best Practices for Coding Tools</h2>
        <ul>
          <li>
            <strong>One task at a time.</strong> Ask for one function, one refactor, or one bugfix—huge multi-step asks
            lead to weaker results.
          </li>
          <li>
            <strong>Be specific and short.</strong> Describe exact behavior, signatures, libraries, and edge cases
            without writing a whole essay.
          </li>
          <li>
            <strong>Always give context.</strong> Include relevant code, filenames, or a brief repo goal so the tool can
            fit into your architecture.
          </li>
          <li>
            <strong>Iterate & refine.</strong> If the first answer isn't right, rephrase, add constraints, or split the
            task, instead of abandoning the tool.
          </li>
          <li>
            <strong>Treat AI as a pair programmer.</strong> You stay responsible for designing APIs, reviewing code,
            writing tests, and checking security; AI accelerates the grunt work.
          </li>
        </ul>

        <h2>FAQ: AI Prompts for Coding</h2>
        <div className="space-y-6 mt-8">
          <div className="bg-slate-900 p-6 rounded-lg">
            <h4 className="font-bold mb-3">Should I use GitHub Copilot or Cursor for prompting?</h4>
            <p>
              GitHub Copilot excels at inline suggestions and chat; Cursor shines for multi-file refactors and
              repo-aware tasks. Replit is best for full-stack scaffolding. Start with Copilot for quick fixes, Cursor
              for larger changes.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg">
            <h4 className="font-bold mb-3">How detailed should my prompt be?</h4>
            <p>
              Balance specificity with brevity. Include language/framework, edge cases, and constraints. Avoid writing a
              10-paragraph specification; a focused 3-4 sentences is often better.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg">
            <h4 className="font-bold mb-3">Can AI tools generate secure code?</h4>
            <p>
              AI can help, but you must review all output. Never trust generated code for auth, encryption, or SQL
              queries without scrutiny. Use prompts that explicitly mention security concerns.
            </p>
          </div>
        </div>
      </article>

      <footer className="bg-slate-900 text-white py-12 px-6 md:px-12 mt-16 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/website-links" className="hover:opacity-70 transition-opacity">
            ← Back to Prompts Library
          </Link>
          <p className="mt-6 text-sm opacity-60">© 2026 GPTPrompts.AI - All Rights Reserved</p>
        </div>
      </footer>
    </main>
  )
}
