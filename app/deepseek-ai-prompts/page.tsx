import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Code2 } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "DeepSeek AI Prompts: A Guide to Enhanced Code Generation | GPTPrompts.AI",
  description:
    "Master DeepSeek AI with advanced code generation prompts. Learn chain-of-thought reasoning, structured outputs, JSON mode, and prefix completion for professional development.",
  keywords: "DeepSeek prompts, code generation, prompt engineering, DeepSeek R1, developer guide, AI coding",
}

export default function DeepSeekPromptsPage() {
  const faqItems = [
    {
      q: "What makes DeepSeek different from other code generation models?",
      a: "DeepSeek's R1 family is optimized for chain-of-thought reasoning, making it especially effective for multi-step coding tasks like debugging, refactoring, and system design. It performs well with lean, well-structured prompts that separate thinking from output.",
    },
    {
      q: "How do I use JSON mode with DeepSeek for structured outputs?",
      a: "In JSON mode, clearly demand JSON output and prohibit prose in your prompt. State required fields explicitly and ask for deterministic, machine-readable responses. This is ideal for CI pipelines, code review bots, and tooling automation.",
    },
    {
      q: "What is prefix completion and when should I use it?",
      a: "Prefix completion lets you provide part of a code file (like a docstring and function signature) and ask DeepSeek to continue implementation. It's especially effective when embedding DeepSeek into editors or CI systems that require pure code completions.",
    },
    {
      q: "How do I structure prompts for debugging with DeepSeek?",
      a: "Be explicit about the current code, error messages, and failing test descriptions. Use <Thinking> tags for internal reasoning about the bug, then provide corrected code in <answer> tags with a 2-3 bullet point explanation.",
    },
    {
      q: "What's the best approach for refactoring code with DeepSeek?",
      a: "Frame refactoring as a task with explicit goals: preserve behavior, improve readability, apply idiomatic patterns, and optionally improve complexity. Use <Thinking> for analysis and <answer> for the refactored code with justification.",
    },
    {
      q: "How can I use DeepSeek for system design and architecture?",
      a: "Ask DeepSeek to analyze requirements, recommend tech stacks, propose architecture diagrams, list risks and mitigations, and outline code structure. Present answers in markdown sections for clarity.",
    },
    {
      q: "What are best practices for keeping DeepSeek prompts focused?",
      a: "Keep prompts single-task and focused. Split large tasks like 'generate UI, backend, and database' into smaller steps. Use separate prompts for front-end, backend, tests, and documentation, then combine results.",
    },
    {
      q: "How do I embed team coding standards into DeepSeek prompts?",
      a: "Mention code style (PEP 8, ESLint rules, or internal guidelines), specify patterns to use or avoid, and include requirements like 'prefer pure functions' or 'no singletons'. Save reusable templates for standardization.",
    },
    {
      q: "Can DeepSeek help generate documentation and README files?",
      a: "Yes. Frame it as a documentation task: provide code files, ask for project description, installation steps, usage examples, configuration options, and contribution guidelines in markdown format.",
    },
    {
      q: "How should I iterate on DeepSeek prompts for better results?",
      a: "Start with a simple prompt version to get baseline code, then refine iteratively with requests like 'rewrite using dependency injection' or 'add tests for edge cases X, Y, Z'. This mirrors human pair-programming workflows.",
    },
    {
      q: "What's the difference between greenfield and debugging prompts?",
      a: "Greenfield prompts generate clean code from scratch for single tasks with clear requirements and constraints. Debugging prompts diagnose and fix existing bugs by explaining root causes and proposing minimal safe fixes.",
    },
    {
      q: "How do I integrate DeepSeek into CI/CD pipelines?",
      a: "Use DeepSeek to analyze diffs, suggest improvements, generate missing tests, or create review comments as part of pull request workflows. Leverage JSON mode and structured outputs for reliable automation.",
    },
  ]

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "DeepSeek AI Prompts: A Guide to Enhanced Code Generation",
    description:
      "Master DeepSeek AI with advanced code generation prompts. Learn chain-of-thought reasoning, structured outputs, and practical prompt patterns.",
    image: "https://gptprompts.ai/deepseek-prompts.jpg",
    author: { "@type": "Organization", name: "GPTPrompts.AI" },
    publisher: { "@type": "Organization", name: "GPTPrompts.AI" },
  }

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Code2 className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-8">
            DeepSeek AI <br />
            <span className="italic opacity-90">Code Generation.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-pretty leading-relaxed opacity-90">
            Transform DeepSeek into a reasoning-driven engineering partner. Master chain-of-thought prompting,
            structured outputs, and professional code generation patterns.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#2563eb] mb-6">Sections</h3>
              <ul className="space-y-4 text-sm font-medium">
                {[
                  { id: "what-makes-different", label: "What Makes DeepSeek Different", num: "01" },
                  { id: "core-principles", label: "Core Prompting Principles", num: "02" },
                  { id: "prompt-patterns", label: "Practical Prompt Patterns", num: "03" },
                  { id: "advanced-techniques", label: "Advanced Techniques", num: "04" },
                  { id: "real-world-examples", label: "Real-World Templates", num: "05" },
                  { id: "best-practices", label: "Best Practices", num: "06" },
                  { id: "workflows", label: "Developer Workflows", num: "07" },
                  { id: "faq", label: "FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#2563eb] transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs opacity-50 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-16">
          {/* Section 1 */}
          <section id="what-makes-different" className="space-y-6">
            <div>
              <span className="text-[#2563eb] font-bold text-sm">Section 01</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">What Makes DeepSeek Different for Coding?</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              DeepSeek's R1 family is built for strong chain-of-thought reasoning, which makes it especially good at
              multi-step coding tasks like debugging, refactoring, and system design. Unlike some models that prefer
              long context and many examples, DeepSeek often performs best with well-structured but lean prompts that
              clearly separate "thinking" from "final answer."
            </p>
            <Card className="bg-[#f0f9ff] border-[#2563eb]/20 p-6">
              <p className="font-semibold text-[#1e40af]">Key Strengths:</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>✓ Optimized for structured, step-by-step reasoning</li>
                <li>✓ Supports JSON-only output and prefix completion modes</li>
                <li>✓ Excellent at multi-step coding tasks and debugging</li>
                <li>✓ Produces cleaner code with fewer bugs</li>
              </ul>
            </Card>
          </section>

          {/* Section 2 */}
          <section id="core-principles" className="space-y-6">
            <div>
              <span className="text-[#2563eb] font-bold text-sm">Section 02</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Core Principles of Prompting DeepSeek</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  Be Explicit About Task and Constraints
                </h3>
                <p className="text-muted-foreground mb-3">
                  Vague instructions like "fix this code" tend to yield generic answers. When prompting DeepSeek,
                  describe the goal, language, key constraints, and any special requirements.
                </p>
                <Card className="bg-slate-900 text-slate-100 p-4 font-mono text-sm rounded-lg overflow-auto">
                  <pre>{`You are a senior backend engineer. Write idiomatic Python 3.11 code using FastAPI and Pydantic. Follow clean architecture, type hints, and include basic error handling.`}</pre>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  Separate Reasoning from Final Output
                </h3>
                <p className="text-muted-foreground mb-3">
                  DeepSeek responds particularly well when you explicitly separate "thinking" and "answer" phases using
                  tags like &lt;think&gt; and &lt;answer&gt;.
                </p>
                <Card className="bg-slate-900 text-slate-100 p-4 font-mono text-sm rounded-lg overflow-auto">
                  <pre>{`Think through the problem step by step inside <Thinking> tags, then provide only the final code and a short explanation inside <answer> tags.`}</pre>
                </Card>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="prompt-patterns" className="space-y-6">
            <div>
              <span className="text-[#2563eb] font-bold text-sm">Section 03</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Practical Prompt Patterns</h2>
            </div>

            <div className="space-y-8">
              <Card className="p-8 border-l-4 border-[#2563eb]">
                <h3 className="text-2xl font-bold mb-4">1. Greenfield Code Generation</h3>
                <p className="text-muted-foreground mb-4">
                  Use this when you want DeepSeek to write a fresh function or module.
                </p>
                <Card className="bg-slate-900 text-slate-100 p-4 font-mono text-xs rounded-lg overflow-auto">
                  <pre>{`You are a senior [LANGUAGE] engineer.
Task: Write a function that [describe the exact behavior].
Requirements:
- Use [framework or library if any].
- Include type hints and docstrings.
- Handle edge cases such as [list].

First, reason step by step inside <Thinking> tags about API design, algorithm, and edge cases. Then output only the final code inside <answer> tags.`}</pre>
                </Card>
              </Card>

              <Card className="p-8 border-l-4 border-[#2563eb]">
                <h3 className="text-2xl font-bold mb-4">2. Debugging and Bug-Hunting</h3>
                <p className="text-muted-foreground mb-4">
                  DeepSeek excels at reading broken code and tracing logic errors.
                </p>
                <Card className="bg-slate-900 text-slate-100 p-4 font-mono text-xs rounded-lg overflow-auto">
                  <pre>{`You are a debugging assistant for a [LANGUAGE/FRAMEWORK] codebase.
I will give you:
- The current code
- The error message or failing test
Your job:
- Explain the root cause step by step
- Propose the smallest safe fix
- Show the corrected code`}</pre>
                </Card>
              </Card>

              <Card className="p-8 border-l-4 border-[#2563eb]">
                <h3 className="text-2xl font-bold mb-4">3. Refactoring and Optimization</h3>
                <p className="text-muted-foreground mb-4">Frame prompts as refactoring tasks with explicit goals.</p>
                <Card className="bg-slate-900 text-slate-100 p-4 font-mono text-xs rounded-lg overflow-auto">
                  <pre>{`Act as a principal engineer reviewing this [LANGUAGE] function for production.
Goals:
- Preserve external behavior
- Improve readability and maintainability
- Apply idiomatic patterns and best practices

Steps:
- Analyze current code
- List main issues
- Show refactored version
- Briefly justify key changes`}</pre>
                </Card>
              </Card>
            </div>
          </section>

          {/* Section 4 */}
          <section id="advanced-techniques" className="space-y-6">
            <div>
              <span className="text-[#2563eb] font-bold text-sm">Section 04</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Advanced Techniques: JSON Mode & Prefix Completion</h2>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-[#f0f9ff] border-[#2563eb]/20">
                <h3 className="text-xl font-bold mb-3">JSON-Only Structured Output</h3>
                <p className="text-muted-foreground mb-4">
                  For tools, CI pipelines, or code review bots, you need deterministic machine-readable output. JSON
                  mode rejects invalid structures.
                </p>
                <Card className="bg-slate-900 text-slate-100 p-4 font-mono text-xs rounded-lg overflow-auto">
                  <pre>{`You are a static analysis assistant for a Python repository.
Analyze the code snippet and output a JSON object with:
- "issues": array of {line, type, message}
- "complexity_score": 1-10

Output only valid JSON, with no markdown or explanations.`}</pre>
                </Card>
              </Card>

              <Card className="p-6 bg-[#f0f9ff] border-[#2563eb]/20">
                <h3 className="text-xl font-bold mb-3">Prefix Completion for Code Generation</h3>
                <p className="text-muted-foreground mb-4">
                  Feed part of a file (docstring and function signature) and ask DeepSeek to continue. Perfect for IDE
                  integration.
                </p>
                <Card className="bg-slate-900 text-slate-100 p-4 font-mono text-xs rounded-lg overflow-auto">
                  <pre>{`I will give you a Python file prefix. Continue the implementation in the same style. Don't add comments outside the shown context.`}</pre>
                </Card>
              </Card>
            </div>
          </section>

          {/* Section 5 */}
          <section id="real-world-examples" className="space-y-6">
            <div>
              <span className="text-[#2563eb] font-bold text-sm">Section 05</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Real-World Template Examples</h2>
            </div>

            <Card className="p-6 bg-[#f0f9ff] border-[#2563eb]/20">
              <h3 className="text-xl font-bold mb-3">System Design and Architecture</h3>
              <Card className="bg-slate-900 text-slate-100 p-4 font-mono text-xs rounded-lg overflow-auto">
                <pre>{`You are a senior systems architect.
Project: [brief description]
Requirements: [functional + non-functional]

Tasks:
1. Analyze requirements
2. Recommend tech stack
3. Propose high-level architecture
4. List main risks and mitigations
5. Outline code structure

Present final answer in markdown sections.`}</pre>
              </Card>
            </Card>

            <Card className="p-6 bg-[#f0f9ff] border-[#2563eb]/20">
              <h3 className="text-xl font-bold mb-3">Documentation and README Generation</h3>
              <Card className="bg-slate-900 text-slate-100 p-4 font-mono text-xs rounded-lg overflow-auto">
                <pre>{`You are a technical writer documenting an open-source project.
Generate:
- Project description
- Installation steps
- Usage examples
- Configuration options
- Contribution guidelines

Use markdown headings suitable for GitHub README.`}</pre>
              </Card>
            </Card>
          </section>

          {/* Section 6 */}
          <section id="best-practices" className="space-y-6">
            <div>
              <span className="text-[#2563eb] font-bold text-sm">Section 06</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Best Practices for Reliable Code Generation</h2>
            </div>

            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-[#2563eb]">
                <h3 className="text-lg font-bold mb-2">1. Keep Prompts Focused and Single-Task</h3>
                <p className="text-muted-foreground">
                  Split large tasks like "generate UI, backend, and database" into smaller steps. Use separate prompts
                  for each component, then integrate.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-[#2563eb]">
                <h3 className="text-lg font-bold mb-2">2. Iterate Iteratively, Not One-Shot</h3>
                <p className="text-muted-foreground">
                  Start with a simple version, then refine with requests like "rewrite using dependency injection" or
                  "add tests for edge cases X, Y, Z."
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-[#2563eb]">
                <h3 className="text-lg font-bold mb-2">3. Bake in Style Guides and Conventions</h3>
                <p className="text-muted-foreground">
                  Embed team standards directly: mention code style (PEP 8, ESLint), patterns to use/avoid, and save
                  reusable templates for standardization.
                </p>
              </Card>
            </div>
          </section>

          {/* Section 7 */}
          <section id="workflows" className="space-y-6">
            <div>
              <span className="text-[#2563eb] font-bold text-sm">Section 07</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Using DeepSeek in Real Developer Workflows</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              DeepSeek becomes powerful when integrated into daily tools and pipelines:
            </p>

            <div className="space-y-3">
              <Card className="p-4 bg-[#f0f9ff] border-[#2563eb]/20">
                <p className="font-semibold text-[#1e40af] mb-2">In IDEs and Editors</p>
                <p className="text-sm text-muted-foreground">
                  Prefix completion and JSON-based suggestions power auto-complete, refactors, and review comments.
                </p>
              </Card>

              <Card className="p-4 bg-[#f0f9ff] border-[#2563eb]/20">
                <p className="font-semibold text-[#1e40af] mb-2">In CI/CD Pipelines</p>
                <p className="text-sm text-muted-foreground">
                  DeepSeek can analyze diffs, suggest improvements, generate missing tests as part of PR workflows.
                </p>
              </Card>

              <Card className="p-4 bg-[#f0f9ff] border-[#2563eb]/20">
                <p className="font-semibold text-[#1e40af] mb-2">For AI Developer Tools</p>
                <p className="text-sm text-muted-foreground">
                  Leverage structured outputs and reasoning fields to build reliable automation around code generation.
                </p>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="space-y-6">
            <div>
              <span className="text-[#2563eb] font-bold text-sm">Section 08</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="py-4 hover:no-underline">
                    <span className="text-left font-semibold text-[#1e40af]">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-100 py-16 px-6 md:px-12 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div>
            <h3 className="text-white font-bold mb-6">Brand</h3>
            <p className="text-sm text-slate-400 mb-4">
              GPTPrompts.AI is your ultimate resource for mastering AI prompt engineering across all platforms.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">AI Models</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-[#2563eb]">
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link href="/claude-prompts" className="hover:text-[#2563eb]">
                  Claude Prompts
                </Link>
              </li>
              <li>
                <Link href="/deepseek-ai-prompts" className="hover:text-[#2563eb]">
                  DeepSeek Prompts
                </Link>
              </li>
              <li>
                <Link href="/gemini-prompts" className="hover:text-[#2563eb]">
                  Gemini Prompts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">Advanced Tools</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/leonardo-ai" className="hover:text-[#2563eb]">
                  Leonardo AI
                </Link>
              </li>
              <li>
                <Link href="/midjourney-prompts" className="hover:text-[#2563eb]">
                  Midjourney Prompts
                </Link>
              </li>
              <li>
                <Link href="/stable-diffusion-prompts" className="hover:text-[#2563eb]">
                  Stable Diffusion
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/prompt-engineering-fundamentals" className="hover:text-[#2563eb]">
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-[#2563eb]">
                  All Pages
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#2563eb]">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/careers" className="hover:text-[#2563eb]">
                  Careers
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563eb]">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2563eb]">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-12 pt-8 max-w-7xl mx-auto">
          <p className="text-sm text-slate-400">© 2026 GPTPrompts.AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
