"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useEffect } from "react"

export default function ClaudeArtifactsPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Claude Artifacts: Creating Interactive Code and Documents",
      description:
        "Master Claude Artifacts to generate interactive code, documents, and visualizations directly within Claude interface.",
      author: { "@type": "Organization", name: "GPTPrompts.AI" },
    }
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }, [])

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">Claude Artifacts Guide</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Learn to leverage Claude Artifacts for creating interactive code, HTML documents, and real-time
            visualizations without leaving the chat interface.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-6">Guide Sections</h3>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { id: "what-artifacts", label: "What Are Artifacts", num: "01" },
                { id: "when-to-use", label: "When to Use", num: "02" },
                { id: "artifact-types", label: "Artifact Types", num: "03" },
                { id: "code-artifacts", label: "Code Artifacts", num: "04" },
                { id: "document-artifacts", label: "Document Artifacts", num: "05" },
                { id: "interactive", label: "Interactive Elements", num: "06" },
                { id: "best-practices", label: "Best Practices", num: "07" },
                { id: "examples", label: "Real Examples", num: "08" },
                { id: "faq", label: "FAQ", num: "09" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-center justify-between hover:text-emerald-600 transition-colors"
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
          <section id="what-artifacts" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-emerald-600 uppercase">01</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">What Are Claude Artifacts?</h2>
            </div>
            <div className="prose prose-lg max-w-none space-y-4">
              <p>
                Claude Artifacts are dynamic, interactive blocks that Claude generates within the conversation
                interface. Instead of describing code or documents, Claude can create runnable, editable, shareable
                artifacts for HTML documents, React components, Python scripts, and more.
              </p>
              <Card className="p-6 bg-emerald-50 border-emerald-200">
                <h4 className="font-bold mb-3">Key Features:</h4>
                <ul className="space-y-2 text-sm">
                  <li>✓ Real-time code execution and preview</li>
                  <li>✓ Interactive forms and visualizations</li>
                  <li>✓ One-click copying and sharing</li>
                  <li>✓ Support for HTML, React, CSS, JavaScript, Python</li>
                  <li>✓ Full-screen editing and viewing modes</li>
                  <li>✓ Version history and iteration</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="when-to-use" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-emerald-600 uppercase">02</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">When to Use Artifacts</h2>
            </div>
            <div className="grid gap-6">
              <Card className="p-6 border-l-4 border-l-emerald-600">
                <h3 className="font-bold mb-2">✓ Good Use Cases</h3>
                <ul className="text-sm space-y-1">
                  <li>Building interactive web tools or calculators</li>
                  <li>Creating HTML email templates</li>
                  <li>Generating React components with state</li>
                  <li>Writing data processing scripts</li>
                  <li>Building form-based data collectors</li>
                  <li>Creating visualizations and charts</li>
                </ul>
              </Card>
              <Card className="p-6 border-l-4 border-l-red-500">
                <h3 className="font-bold mb-2">✗ Avoid Artifacts For</h3>
                <ul className="text-sm space-y-1">
                  <li>Simple code snippets (3-10 lines)</li>
                  <li>Configuration files or environment setup</li>
                  <li>Inline documentation or comments</li>
                  <li>Code fragments for copy-paste into larger projects</li>
                  <li>Quick solutions requiring immediate explanation</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="artifact-types" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-emerald-600 uppercase">03</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Types of Artifacts</h2>
            </div>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">HTML + CSS Artifacts</h3>
                <p className="text-sm mb-4">
                  Perfect for landing pages, email templates, and interactive web layouts. Claude creates fully
                  functional, styled HTML with embedded CSS.
                </p>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-xs mb-4">
                  {`Example: "Create an interactive pricing calculator with three tiers. Include toggle for annual/monthly billing."`}
                </pre>
                <p className="text-xs text-muted-foreground">
                  Claude generates a complete HTML artifact with JavaScript interactivity, not just a code block.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">React Components</h3>
                <p className="text-sm mb-4">
                  Full-featured React components with hooks, state management, and Tailwind CSS styling.
                </p>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-xs mb-4">
                  {`Example: "Build a React component for a kanban board with drag-and-drop. Include sample tasks in different columns."`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Python Scripts</h3>
                <p className="text-sm mb-4">
                  Data processing, analysis, and automation scripts that run in Claude's Python environment.
                </p>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-xs">
                  {`Example: "Write a Python script that analyzes a CSV file and outputs summary statistics and charts."`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="code-artifacts" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-emerald-600 uppercase">04</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Creating Effective Code Artifacts</h2>
            </div>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-lg font-bold mb-4">Prompt for Interactive Calculator</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`"Create an HTML calculator for [calculation type]. Include:
- Inputs for [VARIABLES]
- Real-time calculation display
- Reset button
- Styling with Tailwind or CSS
- Copy-to-clipboard button for results"

Claude generates fully interactive, ready-to-use calculator.`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-lg font-bold mb-4">Prompt for Data Visualization</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`"Build a React component that:
- Displays [DATA TYPE] in a chart
- Includes interactive filters
- Shows summary statistics
- Uses Chart.js or Recharts
- Is fully responsive"

Claude creates ready-to-view visualization.`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-emerald-600 uppercase">09</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Can I export artifacts?",
                  a: "Yes. Click 'Copy code' to get the full source, or download directly depending on artifact type.",
                },
                {
                  q: "Can I use artifacts in production?",
                  a: "For simple tools yes, but be aware they run in Claude's environment. Extract code for production deployments.",
                },
                {
                  q: "What JavaScript libraries are available?",
                  a: "Artifacts support common libraries like React, Chart.js, D3, Recharts, and standard browser APIs.",
                },
                {
                  q: "Can I edit artifacts after creation?",
                  a: "Yes. Ask Claude to modify the artifact and it updates in real-time in the conversation.",
                },
                {
                  q: "How large can artifacts be?",
                  a: "Artifacts can be quite large (100s of lines), but stay within reasonable limits for performance.",
                },
                {
                  q: "Can I use artifacts for learning?",
                  a: "Absolutely. Request artifacts with explanations to learn how code works by seeing live examples.",
                },
                {
                  q: "Are artifacts saved?",
                  a: "You can copy the code to save locally. Artifacts in conversations are part of your chat history.",
                },
                {
                  q: "Can I combine multiple artifacts?",
                  a: "You can have multiple artifacts in one conversation. Request them as separate components.",
                },
                {
                  q: "What's the best way to request artifact modifications?",
                  a: "Be specific: 'Add a dark mode toggle' or 'Change the color scheme to purple.' Claude tracks context.",
                },
                {
                  q: "Can I use artifacts for prototyping products?",
                  a: "Yes. Build interactive prototypes quickly to test ideas before full development.",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded px-4">
                  <AccordionTrigger className="hover:text-emerald-600">{item.q}</AccordionTrigger>
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
                <Link href="/chatgpt-prompts" className="hover:text-emerald-600">
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link href="/claude-projects-prompts" className="hover:text-emerald-600">
                  Claude Projects Prompts
                </Link>
              </li>
              <li>
                <Link href="/custom-gpts-prompts" className="hover:text-emerald-600">
                  Custom GPTs Prompts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-code-generation" className="hover:text-emerald-600">
                  Code Generation
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-api-prompting" className="hover:text-emerald-600">
                  API Prompting
                </Link>
              </li>
              <li>
                <Link href="/few-shot-prompting" className="hover:text-emerald-600">
                  Few-Shot Prompting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Development Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/chatgpt-data-analysis" className="hover:text-emerald-600">
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-role-based-prompting" className="hover:text-emerald-600">
                  Role-Based Prompting
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-creative-writing" className="hover:text-emerald-600">
                  Creative Writing
                </Link>
              </li>
              <li>
                <Link href="/gpt-o1-guide" className="hover:text-emerald-600">
                  GPT-o1 Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-engineering-fundamentals" className="hover:text-emerald-600">
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/avoiding-hallucinations" className="hover:text-emerald-600">
                  Avoiding Hallucinations
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-business-productivity" className="hover:text-emerald-600">
                  Business Productivity
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-emerald-600">
                  View All Pages
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-emerald-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/journal-guide" className="hover:text-emerald-600">
                  Journal Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t text-sm text-center text-muted-foreground">
          <p>
            © 2026 GPTPrompts.AI. Master Claude Artifacts for interactive code, documents, and real-time collaboration.
          </p>
        </div>
      </footer>
    </main>
  )
}
