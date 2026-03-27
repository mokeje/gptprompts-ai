import { Database } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How to Use AI for SQL: Complete Database Engineering Guide | GPTPrompts.AI",
  description:
    "Master SQL with AI. Learn comprehensive prompting strategies for writing queries, optimizing performance, designing schemas, debugging errors, and database engineering best practices.",
}

export default function SQLPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#6366f1] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Database className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            SQL <br />
            <span className="italic opacity-90 text-indigo-200">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Automate the query. Our comprehensive guide reveals advanced SQL prompts for complex schemas, optimized
            queries, and deep data analysis using AI-assisted engineering.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#6366f1] mb-6">Complete Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "role", label: "AI's Role in SQL", num: "01" },
                  { id: "context", label: "Providing Context", num: "02" },
                  { id: "queries", label: "Writing Queries", num: "03" },
                  { id: "joins", label: "Working with JOINs", num: "04" },
                  { id: "optimization", label: "Query Optimization", num: "05" },
                  { id: "schema", label: "Schema Design", num: "06" },
                  { id: "dialects", label: "SQL Dialects", num: "07" },
                  { id: "complex", label: "Complex Patterns", num: "08" },
                  { id: "dml", label: "Data Manipulation", num: "09" },
                  { id: "debugging", label: "Debugging Errors", num: "10" },
                  { id: "faq", label: "SQL FAQ", num: "11" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#6366f1] transition-colors"
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

        <div className="lg:col-span-9 space-y-24 max-w-4xl">
          <article id="role" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Understanding AI's Role in SQL Development</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              AI can help with writing SQL queries from requirements, optimizing existing queries for performance,
              debugging SQL errors and issues, designing database schemas and relationships, explaining complex queries,
              converting between SQL dialects, generating test data, and suggesting best practices. However, you must
              understand SQL fundamentals yourself. AI assists but doesn't replace database knowledge, data modeling
              skills, or understanding your specific data and business logic.
            </p>
          </article>

          <article id="context" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Providing Essential Context</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Effective SQL prompts require context about your database structure, SQL dialect, and objectives. Always
              provide: database type (PostgreSQL, MySQL, SQL Server, Oracle, SQLite), table structures with column names
              and data types, relationships between tables (foreign keys, joins), sample data or data characteristics,
              what you're trying to accomplish, any constraints or requirements, and performance considerations if
              relevant.
            </p>
          </article>

          <article id="queries" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Writing SQL Queries from Requirements</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Translate business requirements into SQL. For simple queries, specify database type and what you need. For
              complex queries with multiple conditions, describe all filtering and aggregation needs. For queries with
              window functions or CTEs, explain the advanced logic needed.
            </p>
            <p className="text-sm bg-muted p-4 rounded italic">
              Example: "Write query finding customers who: 1) Made 3+ orders in last 6 months, 2) Have average order
              value &gt;$100, 3) Haven't ordered in last 30 days. Return customer_id, name, total_orders,
              avg_order_value. Use window functions. PostgreSQL syntax."
            </p>
          </article>

          <article id="joins" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Working with JOINs</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              JOINs are fundamental but often confusing. AI can help structure complex joins. Specify the tables you're
              joining, relationships between them (primary/foreign keys), what columns you need, and whether you need
              INNER JOIN, LEFT JOIN, RIGHT JOIN, or FULL OUTER JOIN based on whether you want to preserve all records.
            </p>
          </article>

          <article id="optimization" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Optimizing SQL Performance</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              AI can suggest optimization strategies for slow queries. Provide the slow query, table sizes, current
              indexes, and execution time. AI can recommend index improvements, query restructuring, or alternative
              approaches. Always explain what the query plan means and identify bottlenecks.
            </p>
          </article>

          <article id="schema" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Database Schema Design</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              AI helps design efficient, normalized database structures. Describe your data requirements, intended
              relationships, and whether you should normalize or denormalize based on access patterns. Discuss
              trade-offs between data integrity and performance.
            </p>
          </article>

          <article id="dialects" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Working with Different SQL Dialects</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              SQL varies across database systems. AI can translate between systems, handle dialect-specific features,
              and leverage platform-specific optimizations. Specify your target database and version for accurate
              solutions.
            </p>
          </article>

          <article id="complex" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Complex SQL Patterns</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Advanced SQL requires specialized techniques: window functions for analytical queries, pivot/unpivot for
              data transformation, recursive CTEs for hierarchical queries, and dynamic SQL for variable requirements.
              Ask AI for specific examples of these patterns.
            </p>
          </article>

          <article id="dml" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Data Manipulation (INSERT, UPDATE, DELETE)</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond SELECT queries, AI helps with data modification. Handle complex INSERTs with foreign key
              relationships, conditional UPDATEs with multiple conditions, safe DELETEs with transaction handling, and
              UPSERT operations (insert-or-update) with syntax specific to your database.
            </p>
          </article>

          <article id="debugging" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Debugging SQL Errors</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When you get SQL errors, provide the error message, your query, table structures, and what you're trying
              to accomplish. AI can interpret errors and suggest fixes. For unexpected results, share the query,
              expected output, actual output, and sample data.
            </p>
          </article>

          <article id="faq" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">SQL FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Should I use an ORM or write SQL directly?",
                  a: "Both have trade-offs. ORMs abstract database details but can produce inefficient queries. For complex queries, direct SQL often performs better. Use AI to help with both.",
                },
                {
                  q: "How do I prevent SQL injection?",
                  a: "Always use parameterized queries/prepared statements. Never concatenate user input directly into queries. AI can help ensure safe parameterization.",
                },
                {
                  q: "What's the difference between views and materialized views?",
                  a: "Views are queries executed each time. Materialized views are pre-calculated result sets updated periodically. Use materialized views for frequently accessed aggregated data.",
                },
                {
                  q: "How many indexes should I have?",
                  a: "Balance is key. Indexes speed up SELECT queries but slow down INSERT/UPDATE/DELETE. Index columns frequently filtered/joined, but don't over-index.",
                },
                {
                  q: "When should I denormalize?",
                  a: "Denormalization trades data redundancy for query performance. Use cautiously for heavily queried aggregates. Ensure you have strategy for keeping denormalized data in sync.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-l-4 border-[#6366f1] pl-6">
                  <h4 className="text-lg font-bold mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <footer className="bg-foreground text-background py-32 px-6 md:px-12 mt-32 border-t border-background/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            {/* Brand */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">GPTPrompts.AI</h4>
              <p className="text-sm leading-relaxed opacity-70">
                The ultimate platform for mastering AI prompting across all models and use cases.
              </p>
            </div>

            {/* AI Models */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">AI Models</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                  { name: "Claude Prompts", href: "/claude-prompts" },
                  { name: "Gemini AI", href: "/gemini-ai-prompts" },
                  { name: "Kimi AI Prompts", href: "/kimi-ai-prompts" },
                  { name: "Midjourney", href: "/midjourney-prompts" },
                  { name: "Perplexity Prompts", href: "/perplexity-prompts" },
                  { name: "Stable Diffusion", href: "/stable-diffusion-prompts" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="opacity-70 hover:opacity-100 transition-opacity">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* University Essays */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">University Essays</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Common App Essays", href: "/common-app-essays" },
                  { name: "NYU Essays", href: "/nyu-essay-prompts" },
                  { name: "Princeton Essays", href: "/princeton-essays" },
                  { name: "Stanford Essays", href: "/stanford-essay-prompts" },
                  { name: "UC Essays", href: "/uc-essay-prompts" },
                  { name: "UChicago Essays", href: "/uchicago-essays" },
                  { name: "UMich Essays", href: "/umich-essay-prompts" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="opacity-70 hover:opacity-100 transition-opacity">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career & Specialized */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Career & Resources</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Resume Prompts", href: "/resume-prompts" },
                  { name: "Cover Letters", href: "/cover-letter-prompts" },
                  { name: "Essay Prompts", href: "/essay-prompts" },
                  { name: "Story Prompts", href: "/story-prompts" },
                  { name: "Creative Writing", href: "/writing-prompts" },
                  { name: "Image Prompts", href: "/image-prompts" },
                  { name: "Free Prompts Library", href: "/free-ai-prompts" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="opacity-70 hover:opacity-100 transition-opacity">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
            <p>&copy; 2026 GPTPrompts.AI. All rights reserved.</p>
            <p>Crafted with precision for AI professionals worldwide.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
