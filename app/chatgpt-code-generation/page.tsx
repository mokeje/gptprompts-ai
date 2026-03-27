"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useEffect } from "react"

export default function CodeGenerationPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "ChatGPT for Code Generation: Prompts for Developers",
      description:
        "Master ChatGPT code generation with prompts for writing, debugging, refactoring, and optimizing code across languages and frameworks.",
      author: { "@type": "Organization", name: "GPTPrompts.AI" },
    }
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }, [])

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            ChatGPT for Code Generation
          </h1>
          <p className="text-xl max-w-3xl opacity-90">
            Write, debug, refactor, and optimize code faster with ChatGPT. From boilerplate to edge cases, master
            developer prompting.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-6">Guide Sections</h3>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { id: "intro", label: "Code Generation Overview", num: "01" },
                { id: "writing", label: "Writing Code", num: "02" },
                { id: "debugging", label: "Debugging & Errors", num: "03" },
                { id: "refactoring", label: "Refactoring", num: "04" },
                { id: "optimization", label: "Performance", num: "05" },
                { id: "documentation", label: "Documentation", num: "06" },
                { id: "testing", label: "Testing", num: "07" },
                { id: "examples", label: "Real Examples", num: "08" },
                { id: "faq", label: "FAQ", num: "09" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-center justify-between hover:text-orange-600 transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-bold text-muted-foreground">{item.num}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-16">
          <section id="intro" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-orange-600 uppercase">01</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">ChatGPT for Code Generation Overview</h2>
            </div>
            <div className="prose prose-lg max-w-none space-y-4">
              <p>
                ChatGPT code generation prompts help developers write, debug, refactor, and optimize across languages
                and frameworks faster. Engineers use these programming prompts to bootstrap boilerplate, solve edge
                cases, document APIs, and conduct automated code reviews.
              </p>
              <Card className="p-6 bg-orange-50 border-orange-200">
                <h4 className="font-bold mb-3">Key Capabilities:</h4>
                <ul className="space-y-2 text-sm">
                  <li>✓ Function/method generation with full test suites</li>
                  <li>✓ API endpoint creation with validation</li>
                  <li>✓ Error diagnosis and root cause analysis</li>
                  <li>✓ Performance optimization and benchmarking</li>
                  <li>✓ Code refactoring for SOLID principles</li>
                  <li>✓ Microservice decomposition</li>
                  <li>✓ Auto-documentation generation</li>
                  <li>✓ Design pattern application</li>
                  <li>✓ Code review simulation</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="writing" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-orange-600 uppercase">02</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Writing Code with ChatGPT</h2>
            </div>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Function/Method Generator</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm mb-4">
                  {`Write [LANGUAGE] function: [NAME]

Requirements:
- Input: [PARAMETERS + TYPES + VALIDATION]
- Output: [RETURN TYPE + FORMAT]
- Edge cases to handle: [LIST 3-5]
- Performance: [TIME/SPACE CONSTRAINTS]
- Error handling: [STRATEGY]
- Tests: Include 5 unit tests covering happy path + edges

Follow [STYLE GUIDE/CONVENTIONS]. Add comprehensive docstring.`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">API Endpoint Builder</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`Create REST API endpoint in [FRAMEWORK: FastAPI/Express/Spring]:

Endpoint: [METHOD] /api/[PATH]
Auth: [SCHEME]
Request body: [SCHEMA]
Response: [SCHEMA + STATUS CODES]
Database: [ORM/MODEL RELATIONS]
Validation: [BUSINESS RULES]
Logging: Structured + errors
Security: Rate limiting + injection protection

Include OpenAPI spec snippet.`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="debugging" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-orange-600 uppercase">03</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Debugging and Error Resolution</h2>
            </div>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Error Trace Analyzer</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm mb-4">
                  {`Debug this error: [STACK TRACE/ERROR MESSAGE]

Context:
Language/framework: [DETAILS]
Recent changes: [WHAT YOU CHANGED]
Expected vs actual: [BEHAVIOR]

Analysis:
1. Root cause hypothesis (ranked)
2. Reproduction steps
3. Fix code with explanation
4. Prevention: Linting rule or test to add`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Performance Bottleneck Hunter</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`Optimize this [LANGUAGE] code: [PASTE CODE]

Metrics: [CURRENT PERF, TARGET]
Constraints: [MEMORY/CPU/BATTERY]
Input size range: [SCALE]

Deliver:
BEFORE/AFTER benchmarks expected
Algorithmic improvement explanation  
Complexity analysis (time/space)
Production monitoring recommendations`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="refactoring" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-orange-600 uppercase">04</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Refactoring and Architecture</h2>
            </div>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Code Refactoring Transformer</h3>
              <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                {`Refactor this [LANGUAGE] code for [PRINCIPLE: SOLID/DRY/performance]: [PASTE CODE]

New requirements:
- Test coverage: 90%+
- Readability: Junior dev comprehensible  
- Extensibility: [FUTURE USE CASES]
- Error boundaries: Graceful degradation

Output: Refactored code + migration guide + before/after test suite.`}
              </pre>
            </Card>
          </section>

          <section id="faq" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-orange-600 uppercase">09</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Can I use ChatGPT for production code?",
                  a: "Yes, with code review. ChatGPT is excellent for boilerplate and patterns, but always review generated code for security, performance, and edge cases.",
                },
                {
                  q: "How specific should my code prompts be?",
                  a: "Very specific. Include language, framework, edge cases, performance needs, and style guides. Vague prompts get mediocre code.",
                },
                {
                  q: "What's the best way to debug with ChatGPT?",
                  a: "Paste full stack traces, context about changes, and expected vs actual behavior. Ask for root cause analysis ranked by probability.",
                },
                {
                  q: "Can ChatGPT optimize my existing code?",
                  a: "Yes. Paste code with current performance metrics and target goals. ChatGPT suggests algorithmic improvements and refactoring.",
                },
                {
                  q: "How do I handle ChatGPT generating insecure code?",
                  a: "Review security aspects manually. Ask ChatGPT specifically: 'Add security checks for SQL injection, XSS, CSRF.' Request code review simulation.",
                },
                {
                  q: "Should I paste passwords or API keys in prompts?",
                  a: "Never. ChatGPT keeps conversation history. Use placeholder variables like [API_KEY] instead.",
                },
                {
                  q: "What's the best way to generate tests with ChatGPT?",
                  a: "Ask for specific coverage: 'Generate tests covering happy path, edge cases, error conditions, and performance regression.'",
                },
                {
                  q: "Can ChatGPT help with refactoring legacy code?",
                  a: "Yes, but break it into smaller chunks. Paste functions individually, ask for SOLID principle application and modernization.",
                },
                {
                  q: "How do I ensure ChatGPT code matches my style guide?",
                  a: "Include your style guide in the prompt: 'Follow PEP8 for Python' or 'Use Airbnb style guide for JavaScript.'",
                },
                {
                  q: "What languages does ChatGPT handle well?",
                  a: "All major languages: Python, JavaScript/TypeScript, Go, Rust, Java, C++, SQL. Less common languages may have lower accuracy.",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded px-4">
                  <AccordionTrigger className="hover:text-orange-600">{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      <footer className="border-t mt-24 py-12 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">ChatGPT Guides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-orange-600">
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-api-prompting" className="hover:text-orange-600">
                  API Prompting
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-role-based-prompting" className="hover:text-orange-600">
                  Role-Based Prompting
                </Link>
              </li>
              <li>
                <Link href="/few-shot-prompting" className="hover:text-orange-600">
                  Few-Shot Prompting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Development Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/claude-artifacts-guide" className="hover:text-orange-600">
                  Claude Artifacts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-data-analysis" className="hover:text-orange-600">
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link href="/gpt-o1-guide" className="hover:text-orange-600">
                  GPT-o1 Guide
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-business-productivity" className="hover:text-orange-600">
                  Business Productivity
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-engineering-fundamentals" className="hover:text-orange-600">
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/prompt-best-practices" className="hover:text-orange-600">
                  Best Practices
                </Link>
              </li>
              <li>
                <Link href="/avoiding-hallucinations" className="hover:text-orange-600">
                  Avoiding Hallucinations
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-orange-600">
                  View All Pages
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-orange-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/journal-guide" className="hover:text-orange-600">
                  Journal Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t text-sm text-center text-muted-foreground">
          <p>
            © 2026 GPTPrompts.AI. Master code generation with ChatGPT for faster development and better engineering
            practices.
          </p>
        </div>
      </footer>
    </main>
  )
}
