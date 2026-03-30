'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Rocket, Server, Database, Bug, Cloud, Shield } from 'lucide-react';

const accent = '#F97316';
const borderCol = '#2a1500';
const bgDark = '#060301';

const CopyCard = ({ title, prompt, tag }: { title: string; prompt: string; tag: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-lg border p-5 transition-colors" style={{ borderColor: borderCol, background: bgDark }} onMouseEnter={e => (e.currentTarget.style.borderColor = `${accent}60`)} onMouseLeave={e => (e.currentTarget.style.borderColor = borderCol)}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full border" style={{ borderColor: `${accent}40`, color: accent }}>{tag}</span>
          <h3 className="text-white font-semibold mt-1">{title}</h3>
        </div>
        <button onClick={handleCopy} className="shrink-0 text-gray-400 transition-colors hover:text-orange-400">
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="whitespace-pre-wrap font-sans text-sm text-gray-300 leading-relaxed">{prompt}</pre>
    </div>
  );
};

const FAQ = ({ item }: { item: { question: string; answer: string } }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg overflow-hidden border" style={{ borderColor: borderCol }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors" style={{ background: bgDark }}>
        <span className="font-medium text-white pr-4">{item.question}</span>
        {open ? <ChevronUp size={18} className="shrink-0" style={{ color: accent }} /> : <ChevronDown size={18} className="shrink-0 text-gray-400" />}
      </button>
      {open && <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed" style={{ background: bgDark }}>{item.answer}</div>}
    </div>
  );
};

const sections = [
  {
    title: 'Full-Stack App Building',
    icon: Rocket,
    description: 'Build complete applications end-to-end with Replit Agent handling frontend, backend, database, and deployment in a single connected workflow.',
    prompts: [
      { tag: 'Full-Stack', title: 'Task management app with auth', prompt: `Build a full-stack task management app:
- Next.js frontend with TypeScript
- Node.js/Express backend
- PostgreSQL database with Prisma ORM
- JWT authentication (register, login, logout)
- Task CRUD: create, read, update, delete, mark complete
- Filter tasks by status, priority, and due date
- Input validation on frontend and backend
- Error boundaries and toast notifications
- Responsive Tailwind CSS layout` },
      { tag: 'Full-Stack', title: 'E-commerce platform with Stripe', prompt: `Create a full-stack e-commerce platform:
- Next.js App Router frontend
- Product listing with search, filter, pagination
- Shopping cart with localStorage persistence
- Stripe checkout integration (test mode)
- Order management and history
- User authentication with email/password
- Admin dashboard for product management
- Mobile-responsive with Tailwind CSS
- Environment-based configuration` },
      { tag: 'Full-Stack', title: 'Real-time collaborative tool', prompt: `Develop a real-time collaborative notes app:
- React frontend with Socket.io client
- Node.js/Express backend with Socket.io server
- PostgreSQL for notes persistence
- User authentication and note ownership
- Real-time sync across multiple open sessions
- Conflict resolution for concurrent edits
- Rich text formatting (bold, italic, headings, lists)
- Auto-save every 30 seconds
- Invite other users to collaborate` },
      { tag: 'Full-Stack', title: 'Job board with applications', prompt: `Build a job board platform:
- Next.js frontend
- Employers can post jobs, applicants can apply
- Job search with filters (location, salary, type)
- Application tracking: applied, reviewed, rejected, offered
- Email notifications using Resend or Nodemailer
- File upload for CV (store in Supabase storage)
- Protected routes: employer dashboard, applicant profile
- PostgreSQL with proper relational schema
- Rate limiting on public endpoints` },
    ],
  },
  {
    title: 'Backend & API Development',
    icon: Server,
    description: 'Design and implement scalable, production-ready APIs with proper authentication, validation, error handling, and documentation.',
    prompts: [
      { tag: 'API', title: 'RESTful API with rate limiting', prompt: `Build a RESTful API in Node.js/Express:
- Resource: [your resource — e.g., articles, products, users]
- CRUD endpoints following REST conventions
- JWT authentication middleware
- Request validation with Zod or Joi
- Rate limiting: 100 requests/hour per IP
- Consistent error response format: { error, message, statusCode }
- Request logging with Morgan
- Swagger/OpenAPI documentation at /api/docs
- Pagination for list endpoints` },
      { tag: 'API', title: 'GraphQL API with subscriptions', prompt: `Design a GraphQL API with Apollo Server:
- Schema for [domain — e.g., social feed, e-commerce]
- Queries: fetch users, posts, comments with pagination
- Mutations: create, update, delete with auth guards
- Subscriptions for real-time updates on new posts
- DataLoader to batch and cache DB queries
- Authentication via JWT in Authorization header
- Input validation and meaningful error messages
- Rate limiting per operation type
- Introspection disabled in production` },
      { tag: 'API', title: 'Webhook handler with signature verification', prompt: `Create a webhook handler in [language] for [service — e.g., Stripe, GitHub]:
- Receive POST requests at /webhooks/[service]
- Verify webhook signature using the secret key
- Parse event type and route to handler function
- Handle these events: [list your event types]
- Return 200 quickly; process async via queue
- Idempotency: skip events already processed
- Log every event with timestamp and outcome
- Return 400 for invalid signatures, 200 for all valid events
- Retry handling: accept the same event multiple times safely` },
      { tag: 'API', title: 'Microservices with message queue', prompt: `Design a microservices architecture:
Services: User Service, Order Service, Notification Service

Each service:
- Independent Express API on separate port
- Own database (no cross-service direct queries)
- Communicates via RabbitMQ/Redis pub-sub
- Health check endpoint at /health

Flows:
- User creates order → Order Service publishes event → Notification Service sends email
- Handle partial failures: what if Notification is down?

Provide: service structure, message schemas, error handling, and local dev setup` },
    ],
  },
  {
    title: 'Database Design',
    icon: Database,
    description: 'Plan robust, scalable database schemas with proper relationships, indexes, and migration strategies for your application.',
    prompts: [
      { tag: 'Database', title: 'Multi-tenant SaaS schema', prompt: `Design a PostgreSQL schema for a multi-tenant SaaS app:
- Tables: organisations, users (with roles), projects, tasks, audit_log
- Row-Level Security (RLS) for tenant data isolation
- Roles: owner, admin, member, viewer per organisation
- Soft deletes on all main tables (deleted_at)
- Indexes on: user_id, organisation_id, created_at, status
- Audit log: track who changed what and when
- Foreign keys and constraints for data integrity
- Include migration scripts and seed data
- Document the schema with comments` },
      { tag: 'Database', title: 'E-learning platform schema', prompt: `Create a normalized schema for an e-learning platform:
- Entities: users, instructors, courses, lessons, quizzes, questions, answers, enrolments, progress
- A course has many lessons; a lesson has a quiz
- Track progress per user per lesson (started, completed, score)
- Enrolment: paid or free, start date, completion date
- Efficient queries for: "show my courses", "lesson completion rate", "quiz scores"
- Views for common dashboard queries
- Partitioning strategy for large progress table
- Read vs. write optimisation (heavy reads)` },
      { tag: 'Database', title: 'Real-time analytics data model', prompt: `Design a MongoDB schema for an analytics dashboard:
- Collections: events, sessions, page_views, metrics, aggregated_hourly, aggregated_daily
- Events: high-volume writes (1000+ events/sec)
- TTL index: delete raw events after 90 days
- Aggregation pipeline to roll up events into hourly/daily summaries
- Efficient queries for: "clicks by page last 7 days", "unique visitors this month"
- Sharding strategy for events collection
- Indexes to support dashboard queries without full scans
- Document all collection schemas with field types` },
      { tag: 'Database', title: 'Database migration strategy', prompt: `My application has this existing schema: [paste current schema]

I need to:
- [Describe the schema change — e.g., add user_preferences table, rename column, split table]

Provide:
1. Migration SQL (safe to run on live database with zero downtime)
2. Rollback SQL if the migration needs to be reversed
3. Steps to verify the migration succeeded
4. Any application code changes needed before and after
5. How to handle rows that violate new constraints
6. Estimated migration time for [N] rows` },
    ],
  },
  {
    title: 'Debugging & Troubleshooting',
    icon: Bug,
    description: 'Diagnose and fix complex issues with Replit Agent\'s full project context — from memory leaks to race conditions to production incidents.',
    prompts: [
      { tag: 'Debug', title: 'Memory leak investigation', prompt: `My Node.js app crashes after ~24 hours with out-of-memory errors.

Current setup:
- Express API with WebSocket connections
- [Approx N] concurrent connections at peak
- Heap grows steadily without dropping

Help me:
1. Profile the heap (heap snapshot, clinic.js)
2. Identify the top memory leak suspects in this code: [paste code]
3. Check for missing event listener cleanup
4. Implement proper connection teardown
5. Add memory usage logging (log every 5 min)
6. Set up alerts when heap exceeds [threshold]
7. Write a test to reproduce and verify the fix` },
      { tag: 'Debug', title: 'React performance bottleneck', prompt: `My React app is slow — components re-render on every keystroke even when their data hasn't changed.

Symptoms:
- Janky animations and delayed input responses
- React DevTools Profiler shows components re-rendering unnecessarily
- Component tree: [describe structure]

Help me:
1. Identify which components are over-rendering and why
2. Apply useMemo and useCallback where appropriate
3. Fix context usage causing unnecessary re-renders
4. Implement code splitting for large components
5. Add performance metrics logging
6. Set React Profiler budgets to catch future regressions

Here is the component in question: [paste code]` },
      { tag: 'Debug', title: 'Database query slow investigation', prompt: `This SQL query takes 8 seconds on a table with 2M rows:
[paste query]

Table schema: [paste schema including indexes]

Help me:
1. Run EXPLAIN ANALYZE on the query and interpret the output
2. Identify the bottleneck (missing index, bad join, full scan)
3. Rewrite the query to be faster (maintain same results)
4. Add the correct indexes (without blocking production writes)
5. Verify with EXPLAIN that the new plan is better
6. Estimate the expected query time after the fix
7. Check if this query runs frequently and should be cached` },
      { tag: 'Debug', title: 'Race condition diagnosis', prompt: `My application has a race condition:

Symptoms: [describe what goes wrong — e.g., duplicate orders created, balance goes negative, data overwrites]

Code involved: [paste the relevant section]

Help me:
1. Identify where the race condition occurs
2. Reproduce it deterministically in a test
3. Fix using [atomic DB operations / mutex / optimistic locking / transaction]
4. Handle the failure case when the condition is detected
5. Add a regression test that fails without the fix
6. Verify under load that the fix holds (stress test strategy)` },
    ],
  },
  {
    title: 'DevOps & Deployment',
    icon: Cloud,
    description: 'Containerise, configure CI/CD pipelines, and deploy applications with proper environment management and monitoring.',
    prompts: [
      { tag: 'DevOps', title: 'Dockerfile with multi-stage build', prompt: `Write a production-ready Dockerfile for this [language] application:
- Use an official minimal base image (not :latest)
- Multi-stage build: build stage and runtime stage
- Run as a non-root user in production
- Copy only necessary files to final image
- Use .dockerignore to exclude node_modules, .env, logs
- EXPOSE the correct port
- Set NODE_ENV=production (or equivalent)
- Health check instruction
- Final image should be under [target size]MB

Also write a docker-compose.yml for local dev with the app + database + any other services.` },
      { tag: 'DevOps', title: 'GitHub Actions CI/CD pipeline', prompt: `Create a GitHub Actions workflow for this project:

On every PR:
- Run linting and type checking
- Run unit and integration tests
- Build the Docker image
- Run security scan (Snyk or Trivy)
- Comment test coverage on the PR

On merge to main:
- Build and push Docker image to [registry — e.g., GHCR, Docker Hub]
- Deploy to [environment — e.g., Railway, Fly.io, ECS]
- Run smoke tests post-deploy
- Notify Slack on success or failure

Include secrets management (never log secrets). Cache dependencies for speed.` },
      { tag: 'DevOps', title: 'Environment configuration management', prompt: `Design a config management strategy for three environments: local, staging, production.

Requirements:
- Never commit secrets to git
- Different DB, API keys, and feature flags per environment
- Local: use .env file with example .env.example committed
- Staging/Prod: use [platform secrets — e.g., Fly.io secrets, AWS SSM, Vercel env vars]
- Type-safe config loading with validation at startup (fail fast if required env var missing)
- Feature flags: some features enabled in staging but not prod

Provide: the config module code, validation schema, and deployment setup.` },
      { tag: 'DevOps', title: 'Monitoring and alerting setup', prompt: `Add observability to this Node.js application:

1. Structured logging: replace all console.log with pino (JSON logs with request ID, user ID, duration)
2. Health check endpoint /health returning: uptime, DB connection status, memory usage, version
3. Prometheus metrics endpoint /metrics exposing: request count, response time histogram, error rate
4. Error tracking: integrate Sentry (capture unhandled exceptions and promise rejections)
5. Uptime monitoring: what to configure in UptimeRobot or Better Uptime
6. Alert conditions: when to alert (error rate > 1%, response time > 2s, DB unavailable)` },
    ],
  },
  {
    title: 'Testing & Code Quality',
    icon: Shield,
    description: 'Write comprehensive tests, enforce code quality standards, and build confidence in your codebase with automated checks.',
    prompts: [
      { tag: 'Testing', title: 'Unit test suite for a service', prompt: `Write a complete unit test suite for this service using [Jest / Vitest / Pytest]:
[paste service code]

Cover:
1. Happy path for each public method
2. All error states (invalid input, not found, unauthorised)
3. Edge cases: empty arrays, null values, boundary numbers
4. Mock all external dependencies (DB, HTTP calls, file system)
5. At least one test verifying error messages are human-readable
6. Performance: no test should take more than 100ms

Targets:
- 90%+ branch coverage
- Clear test names: "should [behaviour] when [condition]"
- Grouped with describe blocks` },
      { tag: 'Testing', title: 'Integration test for an API endpoint', prompt: `Write integration tests for this API endpoint: [endpoint and method]

Test these scenarios:
1. Valid request — correct response body and status code
2. Missing required fields — 400 with field-specific error
3. Invalid auth token — 401
4. Insufficient permissions — 403
5. Resource not found — 404
6. Database error (mock DB failure) — 500 with safe error message

Setup:
- Use supertest or similar to make real HTTP requests
- Use a test database (not mocked)
- Seed test data in beforeEach, clean up in afterEach
- Assert exact response shape, not just status code` },
      { tag: 'Testing', title: 'End-to-end test with Playwright', prompt: `Write Playwright end-to-end tests for this user flow:
[describe the flow — e.g., user registers, creates a task, marks it complete, logs out]

Cover:
1. Full happy path from start to finish
2. Error state: submit form with invalid data
3. Authenticated vs unauthenticated access
4. Mobile viewport (375px wide)

Best practices:
- Use data-testid attributes for selectors (not CSS classes)
- Create reusable Page Object classes for shared interactions
- Screenshot on failure for debugging
- Run in CI with headless Chromium
- Keep test isolation: each test starts from clean state` },
      { tag: 'Testing', title: 'Load testing strategy', prompt: `Design a load testing strategy for this API:
[describe endpoints and expected traffic]

Provide:
1. k6 or Artillery test script for the most critical endpoints
2. Test scenarios: steady state (100 RPS), spike (500 RPS for 30s), soak (100 RPS for 1 hour)
3. Metrics to watch: response time p50/p95/p99, error rate, throughput
4. Acceptance criteria: p95 < 500ms, error rate < 0.1%
5. How to identify the bottleneck when the limit is hit (DB? App? Network?)
6. Recommended infrastructure for the expected load` },
    ],
  },
];

const faqs = [
  { question: 'What is Replit Agent and how does it differ from GitHub Copilot?', answer: 'Replit Agent is a full-project AI coding assistant embedded inside the Replit IDE. Unlike Copilot, which suggests single lines or snippets, Replit Agent understands your entire project — files, dependencies, environment, and runtime — so it can build multi-file features, debug cross-service issues, and scaffold complete applications. It has direct access to your running environment, which means it can see actual errors, not just static code.' },
  { question: 'What languages and frameworks does Replit Agent work best with?', answer: 'Replit Agent performs best with Python, JavaScript, and TypeScript, which have the most training data and broadest framework support. It also handles Go, Java, C#, Ruby, PHP, and Rust well. It understands major frameworks like React, Next.js, Express, FastAPI, Django, and Spring Boot, and knows their conventions, common patterns, and typical project structures.' },
  { question: 'Can I use Replit Agent for production commercial projects?', answer: 'Yes. Code you generate with Replit Agent is yours to use commercially, subject to Replit\'s terms of service. Treat generated code the same way you would any code from a developer — review it, test it, and ensure it meets your security and quality standards before deploying to production. Never paste real credentials or customer data into prompts.' },
  { question: 'How specific should my prompts be for best results?', answer: 'Very specific. Include: the programming language and version, framework, what the code should do, the input/output types, edge cases to handle, and any constraints (performance, compatibility, existing patterns). Vague prompts like "build an API" produce generic output. Specific prompts like "build a Node.js Express API with JWT auth, Zod validation, and PostgreSQL for user management" produce immediately usable code.' },
  { question: 'How does Replit Agent handle debugging across multiple files?', answer: 'When you describe a bug with sufficient context — the error message, which operation fails, and what you expected — Replit Agent can examine multiple files, trace the execution path, and identify where the failure originates. It can find bugs in database queries, API middleware, frontend components, and their interactions. Paste the full error stack trace for best results.' },
  { question: 'Should I review code generated by Replit Agent before committing?', answer: 'Always. Replit Agent produces good-quality code, but like any generated code, it can: reference libraries that don\'t exist, miss edge cases, use deprecated patterns, include security vulnerabilities (especially around auth and SQL), or misunderstand your domain requirements. Review generated code with the same attention you would give a pull request from a junior developer.' },
  { question: 'Can Replit Agent help me learn while building?', answer: 'Yes. You can ask it to explain its reasoning: "Build this and explain each decision", or "Why did you choose this pattern over [alternative]?". This makes it effective for learning design patterns, language idioms, and architecture principles in the context of real code — not abstract examples. Many developers use it as an interactive tutor while building real projects.' },
  { question: 'What is the best way to prompt for database-related tasks?', answer: 'For database tasks, include: the database system and version, your current schema, the query or operation you need, your data volume (helps with indexing advice), and any performance requirements. For schema design, describe the business domain and key queries. For migrations, paste both the current and target schema. Asking for EXPLAIN ANALYZE output interpretation also works well.' },
  { question: 'How do I handle secrets and credentials with Replit Agent?', answer: 'Never paste real API keys, passwords, or connection strings into prompts. Use placeholders like YOUR_API_KEY or environment variable names in your prompts, then replace them in your actual .env or Replit Secrets panel. Replit Agent knows how to generate code that reads from environment variables — just ask it to use process.env.VARIABLE_NAME or equivalent for your language.' },
  { question: 'Does Replit Agent understand my existing codebase patterns?', answer: 'Yes. Replit Agent reads your existing files, so if you\'ve established conventions — like a specific error handling pattern, a naming convention, or a particular folder structure — it will generally follow them when generating new code. If you want it to follow a specific pattern, either point to an existing example ("follow the pattern in /services/users.ts") or describe the convention explicitly in your prompt.' },
];

export default function ReplitAgentPromptsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Replit Agent Prompts: Full-Stack Development, APIs, Databases, and Debugging',
    description: 'Effective prompts for Replit Agent covering full-stack app building, backend APIs, database design, debugging, DevOps, and testing. Build production-ready applications faster with AI-assisted coding.',
    author: { '@type': 'Organization', name: 'GPTPrompts.AI' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };

  return (
    <div className="min-h-screen text-white" style={{ background: '#0a0502' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 text-sm font-medium" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
            AI Coding Agent
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Replit Agent Prompts</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Build full-stack apps, APIs, and databases faster with Replit Agent. These prompts cover the full development lifecycle — from scaffolding to debugging to deployment — using Replit Agent's full project context awareness.</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['Full-Stack', 'Backend APIs', 'Databases', 'Debugging', 'DevOps', 'Testing'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs border text-gray-400" style={{ borderColor: borderCol }}>{tag}</span>
            ))}
          </div>
        </div>

        {sections.map((sec, si) => (
          <section key={si} className="mb-14">
            <div className="flex items-center gap-3 mb-2">
              <sec.icon size={22} style={{ color: accent }} />
              <h2 className="text-2xl font-bold text-white">{sec.title}</h2>
            </div>
            <p className="text-gray-400 mb-6 ml-9">{sec.description}</p>
            <div className="space-y-4">
              {sec.prompts.map((p, pi) => <CopyCard key={pi} {...p} />)}
            </div>
          </section>
        ))}

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((item, i) => <FAQ key={i} item={{ question: item.question, answer: item.answer }} />)}
          </div>
        </section>

        <section className="mb-12 p-6 rounded-lg border" style={{ borderColor: borderCol, background: bgDark }}>
          <h3 className="text-lg font-semibold text-white mb-3">Replit Agent vs Other AI Coding Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            {[
              { name: 'Replit Agent', strength: 'Full project context, runs in your environment, sees real errors and test output.' },
              { name: 'GitHub Copilot', strength: 'Best inline autocomplete in VS Code / JetBrains. Great for line-by-line suggestions.' },
              { name: 'Cursor AI', strength: 'Powerful multi-file editing in a VS Code fork. Strong at large-scale refactors.' },
              { name: 'Windsurf (Codeium)', strength: 'Fast autocomplete and chat in VS Code. Good free tier for individual developers.' },
              { name: 'OpenAI Codex (API)', strength: 'Programmatic code generation for building custom AI coding pipelines and tools.' },
              { name: 'Claude (Anthropic)', strength: 'Excellent at understanding complex requirements, explaining code, and long-context analysis.' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded border" style={{ borderColor: borderCol }}>
                <p className="font-semibold mb-1" style={{ color: accent }}>{item.name}</p>
                <p className="text-gray-400">{item.strength}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t pt-8" style={{ borderColor: borderCol }}>
          <h3 className="text-lg font-semibold text-white mb-4">Related Prompts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'OpenAI Codex Prompts', href: '/openai-codex-prompts' },
              { name: 'Cursor AI Prompts', href: '/cursor-ai-prompts' },
              { name: 'Windsurf AI Prompts', href: '/windsurf-ai-prompts' },
              { name: 'GitHub Copilot Prompts', href: '/github-copilot-prompts' },
              { name: 'AI Agent Prompts', href: '/ai-agent-prompts' },
              { name: 'Manus AI Prompts', href: '/manus-ai-prompts' },
              { name: 'ChatGPT Prompts for Coding', href: '/chatgpt-prompts-coding-interviews' },
              { name: 'AI Prompts for Data Analysts', href: '/ai-prompts-for-data-analysts' },
            ].map((link, i) => (
              <a key={i} href={link.href} className="px-4 py-3 rounded border text-gray-300 transition-colors text-sm font-medium" style={{ borderColor: borderCol }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = accent; (e.currentTarget as HTMLAnchorElement).style.color = accent; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = borderCol; (e.currentTarget as HTMLAnchorElement).style.color = '#d1d5db'; }}>{link.name}</a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
