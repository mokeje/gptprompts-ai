'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Code2, Bug, Layers, TestTube, Zap } from 'lucide-react';

const accent = '#10A37F';

interface CopyCardProps { title: string; prompt: string; tag: string; }

function CopyCard({ title, prompt, tag }: CopyCardProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="mb-4 p-4 border rounded-lg border-[#0f2a1e] hover:border-[#10A37F] transition-colors bg-[#060a08]">
      <div className="mb-2"><span className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>{tag}</span></div>
      <p className="text-white text-sm font-medium mb-2">{title}</p>
      <pre className="text-gray-400 text-sm mb-3 leading-relaxed whitespace-pre-wrap font-sans">{prompt}</pre>
      <button onClick={handleCopy} className="inline-flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors border" style={{ color: copied ? accent : '#888', borderColor: copied ? accent : '#333' }}>
        {copied ? <><Check size={14} />Copied!</> : <><Copy size={14} />Copy</>}
      </button>
    </div>
  );
}

function FAQ({ item }: { item: { question: string; answer: string } }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-3 border border-[#0f2a1e] rounded-lg overflow-hidden hover:border-[#10A37F] transition-colors">
      <button onClick={() => setExpanded(!expanded)} className="w-full p-4 flex items-center justify-between bg-[#060a08] hover:bg-[#0a110d] transition-colors">
        <h3 className="font-semibold text-white text-left text-sm">{item.question}</h3>
        {expanded ? <ChevronUp size={18} style={{ color: accent }} className="flex-shrink-0" /> : <ChevronDown size={18} className="flex-shrink-0 text-gray-500" />}
      </button>
      {expanded && <div className="p-4 bg-[#030605] border-t border-[#0f2a1e] text-gray-300 text-sm leading-relaxed">{item.answer}</div>}
    </div>
  );
}

const faqs = [
  { question: 'What is OpenAI Codex and how does it differ from GPT-4?', answer: 'OpenAI Codex is a model fine-tuned specifically for code generation and understanding — it powers GitHub Copilot. GPT-4 (and o1/o3 models) have absorbed much of Codex\'s capability and generally outperform it on complex reasoning tasks. For practical purposes in 2026, you can use GPT-4o or o3 for coding tasks via the API. The term "Codex prompts" broadly refers to prompts optimised for code generation tasks across any capable LLM.' },
  { question: 'Which AI model is best for code generation in 2026?', answer: 'OpenAI\'s o3 and GPT-4o lead on most coding benchmarks. Anthropic\'s Claude 3.7 Sonnet performs strongly on complex multi-file reasoning. Google\'s Gemini Advanced handles long codebases well with its 1M token context. For day-to-day coding: GPT-4o or Claude Sonnet for general tasks, o3 for hard algorithmic problems. GitHub Copilot (powered by OpenAI) is the leading IDE integration.' },
  { question: 'How do I write better prompts for code generation?', answer: 'Include: language and framework version, the specific function or module context, input/output types, edge cases to handle, and your preferred style conventions. The more context you provide, the more accurate and production-ready the output. Ask for explanations alongside code — understanding the generated code is essential for debugging and extending it later.' },
  { question: 'Can AI reliably generate production-ready code?', answer: 'AI can generate solid first drafts for many standard patterns, but production readiness requires human review. Common issues: missing error handling, insecure patterns (SQL injection, improper auth), race conditions, untested edge cases, and hardcoded values. Use AI output as a starting point that you review, test, and refine — not as code you deploy without inspection.' },
  { question: 'How do I use AI to debug code effectively?', answer: 'Paste the error message, stack trace, and the relevant code. Add context: what were you trying to do, what did you expect, what happened instead. Ask for root cause explanation, not just a fix — understanding why something broke helps you avoid it in future. For complex bugs, ask AI to walk through the code execution mentally step by step to identify where the logic diverges from your intention.' },
  { question: 'What programming languages does AI code generation support best?', answer: 'Python, JavaScript/TypeScript, and SQL have the largest training data and tend to get the best outputs. Go, Rust, Java, and C++ are well-supported. Newer or niche languages (Elixir, Zig, Julia) work but may produce less idiomatic code. For any language, specifying the version and common idioms in your prompt improves results significantly.' },
  { question: 'How do I get AI to write tests for my code?', answer: 'Paste the function or class and ask for tests covering: the happy path, edge cases (empty input, null, boundary values), and error conditions. Specify your testing framework (pytest, Jest, RSpec etc.) and whether you want unit or integration tests. Ask for test names that describe the behaviour being tested — this forces AI to think about what the code should do, not just what it does.' },
  { question: 'Can AI help with code reviews?', answer: 'Yes. Paste the code (or diff) and ask for review covering: correctness, performance, security, readability, and testability. Ask AI to prioritise issues as critical/moderate/minor. For security-sensitive code (auth, data handling, API integrations), explicitly ask AI to look for injection risks, improper validation, and credential handling. Always treat AI code review as one input, not the final authority.' },
  { question: 'How do I use AI to learn a new programming language or framework?', answer: 'The most effective approach: pick a small real project you want to build, then use AI to explain concepts as you encounter them. Ask "why does this work this way" not just "what\'s the syntax". Ask AI to compare patterns to languages you already know. Use AI to explain idiomatic code examples from the official docs. Actively build and break things — AI is a tutor, not a replacement for hands-on practice.' },
  { question: 'What are the security risks of using AI-generated code?', answer: 'Key risks: AI may generate insecure patterns it saw in training data, miss context-specific security requirements, produce outdated cryptographic methods, or generate SQL/command injection vulnerabilities. Mitigation: always review security-sensitive code manually, use static analysis tools, never paste real credentials or secrets into AI prompts, and run dependency scanners on AI-suggested packages. For high-security systems, treat AI as a junior developer whose code requires senior review.' },
];

export default function OpenAICodexPromptsPage() {
  return (
    <div className="min-h-screen bg-[#030605]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'OpenAI Codex Prompts: Expert Code Generation Templates for Python, JS & APIs', description: 'Master AI code generation with expert prompts for Python, JavaScript, SQL, debugging, code review, refactoring, test writing, and API integration.', image: 'https://gptprompts.ai/codex-og.jpg', datePublished: '2026-03-29', dateModified: '2026-03-29', author: { '@type': 'Organization', name: 'GPT Prompts AI' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />

      <section className="border-b border-[#0f2a1e] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Code2 size={32} style={{ color: accent }} />
            <h1 className="text-4xl font-bold text-white">OpenAI Codex Prompts</h1>
          </div>
          <p className="text-gray-400 text-lg mb-4">Expert prompts for AI-powered code generation — Python, JavaScript, SQL, APIs, debugging, refactoring, and test writing.</p>
          <div className="flex flex-wrap gap-2">
            {['Python', 'JavaScript', 'SQL', 'Debugging'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium border" style={{ borderColor: accent, color: accent }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Code2 size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Python & Data Science</h2></div>
          <CopyCard tag="Python" title="Data processing pipeline"
            prompt={`Write a Python function that:
- Reads a CSV file at [filepath] using pandas
- Cleans the data: drops rows with >50% null values, fills remaining nulls with column median for numerics and "Unknown" for strings
- Normalises numeric columns to 0-1 range (min-max scaling)
- Returns a cleaned DataFrame and a summary dict with: original row count, dropped rows, columns normalised
Include type hints, docstring, and handle FileNotFoundError gracefully.`} />
          <CopyCard tag="Python" title="Async API client with retry logic"
            prompt={`Write an async Python function that fetches data from [API endpoint] with:
- httpx async client
- Retry logic: 3 attempts with exponential backoff (1s, 2s, 4s)
- Timeout of 10 seconds per request
- Rate limiting: max 10 requests per second
- Returns parsed JSON response or raises a custom APIError with status code and message
Include type hints and a simple usage example.`} />
          <CopyCard tag="Python" title="Class with context manager and logging"
            prompt={`Create a Python class DatabaseConnection that:
- Connects to PostgreSQL using psycopg2 (connection params from environment variables)
- Implements __enter__ and __exit__ for context manager usage
- Logs all queries at DEBUG level with execution time
- Logs errors at ERROR level with full stack trace
- Automatically rolls back on exception, commits on clean exit
Include an example showing a SELECT query and an INSERT with error handling.`} />
          <CopyCard tag="Python" title="CLI tool with argparse"
            prompt={`Write a Python CLI tool that processes [task] with these arguments:
- Required: --input (file path)
- Optional: --output (file path, defaults to stdout)
- Optional: --format (choices: json, csv, table; default: table)
- Optional: --verbose flag for detailed logging
- --version flag showing "1.0.0"
Use argparse with helpful descriptions. Include input validation with clear error messages. Add a shebang line and make it executable.`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Layers size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">JavaScript & TypeScript</h2></div>
          <CopyCard tag="TypeScript" title="Type-safe API service class"
            prompt={`Create a TypeScript service class for the [API name] REST API:
- Constructor accepts baseURL and apiKey
- Generic fetch method: fetchData<T>(endpoint: string, options?: RequestInit): Promise<T>
- Specific methods for: getUser(id: string), listItems(params: QueryParams), createItem(data: CreateItemDTO), updateItem(id: string, data: UpdateItemDTO)
- All methods return typed responses using interface definitions you write
- Error handling: throws typed APIError class with status, message, and response body
- Include JSDoc comments for each method`} />
          <CopyCard tag="React" title="Custom hook with caching"
            prompt={`Write a React custom hook useData<T> that:
- Fetches data from a URL parameter
- Caches results in a Map (keyed by URL) to avoid re-fetching
- Returns: { data: T | null, loading: boolean, error: Error | null, refetch: () => void }
- Accepts optional refreshInterval (ms) for automatic re-fetching
- Cleans up intervals and cancels in-flight requests on unmount
- TypeScript with generics
Include a usage example with a typed interface.`} />
          <CopyCard tag="Node.js" title="Express middleware for auth + rate limiting"
            prompt={`Write Express.js middleware that:
1. authenticateJWT: verifies Bearer token from Authorization header, attaches decoded payload to req.user, returns 401 for invalid/expired tokens
2. rateLimit: allows 100 requests per IP per 15 minutes using an in-memory Map, returns 429 with Retry-After header when exceeded
3. requestLogger: logs method, path, status code, and duration in ms

Show how to chain them on a router: router.use(rateLimit, authenticateJWT, requestLogger)
TypeScript. No external auth libraries — use jsonwebtoken only.`} />
          <CopyCard tag="TypeScript" title="Generic data transformation pipeline"
            prompt={`Write a TypeScript pipeline utility that chains transformation functions:
- type TransformFn<T, U> = (input: T) => U
- function pipe<A, B, C, D>(...fns): (input: A) => D (overloads for 2-4 stages)
- function pipeAsync<A, B>(...fns): (input: A) => Promise<B> for async transforms
- Includes error boundary: if any step throws, wrap in PipelineError with step index and original error
Show an example: parse JSON → validate schema → transform shape → format output`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Bug size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Debugging & Code Review</h2></div>
          <CopyCard tag="Debugging" title="Root cause analysis from error"
            prompt={`I'm getting this error in my [language/framework] application:
Error: [paste full error message and stack trace]

Relevant code:
[paste the function/module where the error occurs]

Context: [what were you trying to do? what did you expect to happen?]

Please:
1. Identify the root cause (not just the symptom)
2. Explain why this error occurs conceptually
3. Provide a specific fix with the corrected code
4. Suggest a test that would catch this regression in future
5. Note any related issues in the code worth fixing`} />
          <CopyCard tag="Code Review" title="Security-focused code review"
            prompt={`Review this code for security vulnerabilities:
[paste code]

Focus on:
1. Injection risks (SQL, command, LDAP) — are user inputs sanitised?
2. Authentication/authorisation — are endpoints properly protected?
3. Sensitive data handling — credentials, PII, tokens
4. Dependency risks — are there known-vulnerable packages?
5. Error messages — do they leak implementation details?

Rate each issue Critical/High/Medium/Low. For Critical and High issues, provide a specific fix.`} />
          <CopyCard tag="Refactoring" title="Refactor for readability and performance"
            prompt={`Refactor this code to improve readability and performance:
[paste code]

Priorities:
1. Extract magic numbers and strings into named constants
2. Break functions longer than 20 lines into smaller, single-purpose functions
3. Replace nested if-else with early returns or strategy pattern where appropriate
4. Identify any O(n²) or worse complexity that could be optimised
5. Improve variable/function names to be self-documenting

Show the refactored version with a brief explanation of each change made.`} />
          <CopyCard tag="Documentation" title="Generate code documentation"
            prompt={`Generate comprehensive documentation for this code:
[paste code]

Include:
- Module/file overview: what does this code do and why does it exist?
- For each function/method: purpose, parameters (name, type, description), return value, side effects, exceptions thrown
- Usage examples for the main public API (2-3 examples)
- Any non-obvious design decisions and why they were made
Format as [JSDoc / Python docstrings / Markdown] appropriate for this language.`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><TestTube size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Test Writing</h2></div>
          <CopyCard tag="Unit Tests" title="Comprehensive unit test suite"
            prompt={`Write unit tests for this function using [pytest / Jest / RSpec]:
[paste the function]

Cover:
1. Happy path: expected inputs produce expected outputs
2. Edge cases: empty input, null/undefined, boundary values, max/min
3. Error cases: invalid types, missing required fields, values out of range
4. Side effects: verify any database calls, API calls, or file writes are made correctly

Use descriptive test names in the format "it should [expected behaviour] when [condition]".
Mock any external dependencies. Aim for >90% branch coverage.`} />
          <CopyCard tag="Integration Tests" title="API endpoint integration tests"
            prompt={`Write integration tests for these API endpoints:
[list endpoints: method, path, expected behaviour]

For each endpoint test:
- 200/201 success case with valid payload
- 400 validation error cases (missing fields, wrong types)
- 401 unauthorised (no token / invalid token)
- 404 not found (for endpoints with ID params)
- 500 handling: mock the database to throw and verify error response format

Use [Supertest / FastAPI TestClient / RSpec request spec]. Include test database setup and teardown.`} />
          <CopyCard tag="Mocking" title="Mock strategy for external dependencies"
            prompt={`I need to test [module] which depends on [list dependencies: database, external API, file system, etc.].
Write the mocking strategy:
1. For each dependency, show how to mock it in [testing framework]
2. Identify what the mock should verify vs. just stub
3. Show how to test both success and failure scenarios for each dependency
4. Explain how to avoid over-mocking (testing mocks instead of real behaviour)
5. Provide the test setup/teardown code for managing mock lifecycle`} />
          <CopyCard tag="TDD" title="TDD workflow for a new feature"
            prompt={`I want to build: [describe the feature]
Walk me through building it test-first (TDD):
1. Write the failing test for the simplest case
2. Write the minimum code to make it pass
3. Refactor without breaking the test
4. Write the next failing test for the next requirement
5. Repeat

Continue this cycle for: [list 3-4 key requirements of the feature]
Use [language] with [testing framework]. Keep each step minimal — this is the red-green-refactor loop.`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Zap size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">SQL & Data Queries</h2></div>
          <CopyCard tag="SQL" title="Complex analytical query"
            prompt={`Write a SQL query for [database: PostgreSQL / MySQL / BigQuery] that:
- Calculates [metric] from table [table name] with columns [list relevant columns]
- Groups by [dimensions]
- Filters to [date range / conditions]
- Ranks results using window functions
- Handles nulls appropriately
- Is optimised for large datasets (hint on index usage if relevant)

Include a brief explanation of each CTE or complex clause.`} />
          <CopyCard tag="SQL" title="Database schema with indexes"
            prompt={`Design a PostgreSQL schema for [use case — e.g., "a SaaS subscription billing system"].
Requirements:
- [List 3-5 entities and their key attributes]
- [List key relationships: one-to-many, many-to-many]
- [Performance requirement: e.g., "fast lookup by user_id and date range"]

Include:
- CREATE TABLE statements with appropriate data types and constraints
- Foreign key relationships
- Indexes for expected query patterns
- A brief explanation of design decisions (why UUID vs serial, why this index)`} />
          <CopyCard tag="SQL" title="Query optimisation and explain plan"
            prompt={`This query is running slowly (>5 seconds on ~2M rows):
[paste slow query]

Table structure: [paste CREATE TABLE or describe columns and approximate row counts]
Existing indexes: [list them]

Please:
1. Identify the likely performance bottleneck(s)
2. Suggest specific index additions or changes
3. Rewrite the query if there's a more efficient approach
4. Explain what to look for in the EXPLAIN ANALYZE output to confirm the fix works`} />
          <CopyCard tag="SQL" title="Data migration script"
            prompt={`Write a SQL migration script to [describe the schema change — e.g., "split the full_name column into first_name and last_name", or "add a status enum column with a default value"].

The migration should:
- Be idempotent (safe to run twice)
- Handle existing data (backfill the new column/table)
- Include a rollback script
- Add a comment explaining what the migration does and why
- Work for [PostgreSQL / MySQL] version [X]`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Zap size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">API Integration & Architecture</h2></div>
          <CopyCard tag="REST API" title="REST API client with auth and pagination"
            prompt={`Build a [language] REST API client for [service] that handles:
- Authentication: [API key header / OAuth2 bearer token / basic auth]
- Pagination: automatically fetches all pages when results exceed one page
- Rate limiting: respects the [X] requests/minute limit using a token bucket approach
- Retry: 3 retries with exponential backoff for 429 and 5xx responses
- Response parsing: typed response models for each endpoint

Endpoints needed:
- GET /[resource] (list with filters)
- GET /[resource]/{id} (get single)
- POST /[resource] (create)
- PATCH /[resource]/{id} (update)

Include type definitions/interfaces and a usage example.`} />
          <CopyCard tag="WebSocket" title="WebSocket client with reconnection"
            prompt={`Write a [language] WebSocket client that:
- Connects to [endpoint] with [authentication method]
- Automatically reconnects on disconnect with exponential backoff (max 5 retries)
- Maintains a message queue and replays unacknowledged messages after reconnect
- Dispatches incoming messages by type to registered handlers
- Exposes: connect(), disconnect(), send(type, payload), on(type, handler), off(type, handler)
- Logs connection lifecycle events (connected, disconnected, reconnecting, error) at appropriate log levels
Include TypeScript types if using JS/TS.`} />
          <CopyCard tag="Microservices" title="Service-to-service communication pattern"
            prompt={`Design the communication pattern between these microservices: [list your services]
Requirements:
- Synchronous for [list operations that need immediate response]
- Asynchronous for [list operations that can be eventual]
- Service A needs to know when Service B completes [specific operation]

Provide:
1. The recommended pattern for each communication type (REST, gRPC, message queue, event bus)
2. The message/event schema for async communications
3. How to handle partial failures and rollbacks
4. The retry and circuit breaker strategy
5. How to trace a request across all services for debugging`} />
          <CopyCard tag="Database" title="Repository pattern implementation"
            prompt={`Implement the Repository pattern for [entity — e.g., User, Order] in [language/framework]:
- IUserRepository interface with: findById, findByEmail, findAll(filters, pagination), create, update, delete
- PostgreSQLUserRepository implementing the interface using [ORM or raw SQL]
- InMemoryUserRepository for testing
- Factory function that returns the right implementation based on environment

The implementation should:
- Use transactions where data integrity requires it
- Log all queries in development
- Never expose raw DB errors to callers (wrap in domain errors)
- Handle optimistic locking for concurrent updates to the same record`} />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          {faqs.map((item, i) => <FAQ key={i} item={{ question: item.question, answer: item.answer }} />)}
        </section>

        <section className="mb-12 p-6 rounded-lg border border-[#0f2a1e] bg-[#060a08]">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Reference: Code Generation Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div><p className="font-semibold text-white mb-1">Always include in your prompt:</p><ul className="space-y-1"><li>Programming language and version</li><li>Framework or library context</li><li>Input/output types and examples</li><li>Edge cases to handle explicitly</li><li>Error handling requirements</li><li>Performance or style constraints</li></ul></div>
            <div><p className="font-semibold text-white mb-1">Review generated code for:</p><ul className="space-y-1"><li>Security vulnerabilities (injection, auth)</li><li>Missing error handling paths</li><li>Hardcoded credentials or values</li><li>Off-by-one errors and boundary cases</li><li>Compatibility with your language version</li><li>Test coverage of edge cases</li></ul></div>
          </div>
        </section>

        <section className="mb-12 p-6 rounded-lg border border-[#0f2a1e] bg-[#060a08]">
          <h3 className="text-lg font-semibold text-white mb-3">Language and Framework Support</h3>
          <p className="text-gray-400 text-sm mb-4">OpenAI Codex and GPT-4 code models support all major programming languages. Prompt quality matters more than language choice — the more context you provide, the better the output.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-400 mb-4">
            {['Python', 'JavaScript', 'TypeScript', 'Go', 'Rust', 'Java', 'C#', 'C++', 'Ruby', 'PHP', 'Swift', 'Kotlin', 'SQL', 'Bash', 'R', 'Scala'].map((lang, i) => (
              <div key={i} className="px-2 py-1 rounded border border-[#0f2a1e] text-center" style={{ color: accent }}>{lang}</div>
            ))}
          </div>
          <p className="text-gray-500 text-xs">For best results with any language: specify the version (e.g. Python 3.11, Node 20, Go 1.22), mention the relevant framework, and paste real code rather than describing it abstractly.</p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Strongest for', value: 'Python, JavaScript, TypeScript — largest training data, most reliable output for these languages.' },
              { label: 'Works well for', value: 'Go, Rust, Java, C# — good results with clear context, but verify output carefully for idiomatic patterns.' },
              { label: 'Use with care for', value: 'Domain-specific languages, niche frameworks, or proprietary codebases — always review outputs against your own standards.' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded border border-[#0f2a1e]">
                <p className="font-semibold mb-1" style={{ color: accent }}>{item.label}</p>
                <p className="text-gray-400 text-xs">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded border border-[#0f2a1e] text-sm text-gray-400">
            <span className="font-semibold text-white">Security reminder: </span>Never paste API keys, passwords, connection strings, or sensitive credentials into code generation prompts. Use placeholder names like <span style={{ color: accent }}>YOUR_API_KEY</span> or environment variable references, and replace them in your actual codebase. Generated code should always be reviewed before committing to production.
          </div>
          <div className="mt-3 p-3 rounded border border-[#0f2a1e] text-sm text-gray-400">
            <span className="font-semibold text-white">On hallucinated packages: </span>Code models occasionally reference libraries or methods that do not exist. Always verify that any package name, version, or API method in generated code actually exists in the official documentation before adding it to your project.
          </div>
          <div className="mt-3 p-3 rounded border border-[#0f2a1e] text-sm text-gray-400">
            <span className="font-semibold text-white">Context window tip: </span>For large files, paste only the relevant function or class, not the entire codebase. If you need the model to understand how multiple parts interact, describe the relationship in plain language rather than pasting everything. Targeted context produces more accurate, focused output.
          </div>
          <div className="mt-3 p-3 rounded border border-[#0f2a1e] text-sm text-gray-400">
            <span className="font-semibold text-white">Iterative refinement: </span>Treat the first generated output as a draft, not a finished product. Follow up with: "Now add error handling for X", "Refactor this part to be more readable", or "Add a test for the edge case where the input is empty". Iteration almost always produces better results than a single long prompt.
          </div>
        </section>

        <section className="mb-12 p-6 rounded-lg border border-[#0f2a1e] bg-[#060a08]">
          <h3 className="text-lg font-semibold text-white mb-4">Codex Prompt Patterns by Task Type</h3>
          <div className="space-y-2 text-sm">
            {[
              { task: 'Generate a function', pattern: '"Write a [language] function that [does X]. Accept [inputs] and return [output]. Handle [edge case] by [behaviour]."' },
              { task: 'Refactor code', pattern: '"Refactor the following code to [goal — e.g. reduce complexity, use async/await]. Keep the same behaviour: [paste code]"' },
              { task: 'Add error handling', pattern: '"Add error handling to this function. Catch [errors], log them with context, and return [fallback]. Do not change the happy path: [code]"' },
              { task: 'Write tests', pattern: '"Write unit tests using [framework]. Cover: the happy path, empty inputs, null values, boundary conditions, and error states: [code]"' },
              { task: 'Explain code', pattern: '"Explain what this code does in plain English. Then describe what happens if [edge case]. Highlight any potential bugs: [code]"' },
              { task: 'Convert languages', pattern: '"Translate this [source language] code to [target language]. Preserve all logic. Use idiomatic [target language] patterns: [code]"' },
              { task: 'Write a SQL query', pattern: '"Write a [dialect] query to [goal]. Tables: [schema]. Filter by [conditions]. Return [columns]. Optimise for [concern]."' },
              { task: 'Debug an error', pattern: '"I\'m getting this error: [message]. Here is the code: [code]. Here is the context: [what I was doing]. What is the cause and fix?"' },
              { task: 'Document code', pattern: '"Add JSDoc / docstrings to every function in this file. Include: what it does, each parameter\'s type and purpose, what it returns, and any thrown exceptions: [code]"' },
              { task: 'Review for security', pattern: '"Review this code for security vulnerabilities. Focus on: input validation, SQL injection risks, authentication logic, and any data exposed to the client: [code]"' },
              { task: 'Optimise performance', pattern: '"This function is slow for large inputs. Profile it and suggest optimisations. Preserve correctness. Explain the time complexity before and after: [code]"' },
              { task: 'Migrate framework', pattern: '"Migrate this [old framework] component to [new framework]. Maintain identical behaviour. Flag anything that has no direct equivalent and suggest alternatives: [code]"' },
              { task: 'Generate boilerplate', pattern: '"Generate a [language] project structure for a [type of app — e.g. REST API, CLI tool]. Include: folder layout, dependency list, config files, and a working hello-world entry point."' },
              { task: 'Write a regex', pattern: '"Write a regex in [language] that matches [description]. Provide: the regex, an explanation of each part, 3 examples that should match, and 3 that should not."' },
              { task: 'Code review prep', pattern: '"Review this PR diff and identify: potential bugs, missing edge cases, performance concerns, style issues, and anything that should have a test: [paste diff]"' },
              { task: 'Generate mock data', pattern: '"Generate 10 realistic mock records for a [entity] with these fields: [list fields and types]. Use realistic values, not Lorem ipsum. Output as JSON."' },
              { task: 'Add logging', pattern: '"Add structured logging to this function using [library — e.g. pino, winston, zap]. Log: entry, exit, errors, and key decision points. Do not log sensitive values: [code]"' },
              { task: 'Design a schema', pattern: '"Design a [SQL/MongoDB/Firestore] schema for a [type of application]. Include: entities, relationships, indexes for likely queries, and an explanation of your key design decisions."' },
              { task: 'Write a CLI tool', pattern: '"Write a [language] CLI tool that [does X]. Include: argument parsing with --help text, sensible defaults, input validation, and human-readable error messages on failure."' },
              { task: 'Add types', pattern: '"Add TypeScript types to this JavaScript file. Infer types from usage where possible. Use strict types — avoid any. Mark nullable fields explicitly: [code]"' },
              { task: 'Write a webhook handler', pattern: '"Write a [language] webhook handler for [service — e.g. Stripe, GitHub]. Verify the signature, parse the payload, handle [event types], and return the correct response codes for success and failure."' },
              { task: 'Containerise an app', pattern: '"Write a Dockerfile for this [language] application. Use a minimal base image, implement multi-stage builds to keep the final image small, and follow container security best practices."' },
              { task: 'Seed a database', pattern: '"Write a database seed script in [language] that creates realistic test data for [describe schema]. Include variety in the data — different statuses, edge case values, and relationships between records."' },
              { task: 'Write a cron job', pattern: '"Write a [language] cron job that [does X] on a [schedule — e.g. daily at midnight]. Include: idempotency so it is safe to run twice, logging, and alerting on failure."' },
            ].map((row, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-2 py-2 border-b border-[#0f2a1e] last:border-0">
                <div className="md:w-40 shrink-0 font-medium text-white text-xs">{row.task}</div>
                <div className="font-mono text-xs text-gray-400 leading-relaxed">{row.pattern}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#0f2a1e] pt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Related Prompts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'Replit Agent Prompts', href: '/replit-agent-prompts' },
              { name: 'Windsurf AI Prompts', href: '/windsurf-ai-prompts' },
              { name: 'Cursor AI Prompts', href: '/cursor-ai-prompts' },
              { name: 'GitHub Copilot Prompts', href: '/github-copilot-prompts' },
              { name: 'AI Agent Prompts', href: '/ai-agent-prompts' },
              { name: 'Vibe Coding Prompts', href: '/vibe-coding' },
              { name: 'ChatGPT Prompts Excel', href: '/chatgpt-prompts-excel' },
              { name: 'AI Prompts for Data Analysts', href: '/ai-prompts-for-data-analysts' },
            ].map((link, i) => (
              <a key={i} href={link.href} className="px-4 py-3 rounded border border-[#0f2a1e] text-gray-300 hover:border-[#10A37F] hover:text-[#10A37F] transition-colors text-sm font-medium">{link.name}</a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
