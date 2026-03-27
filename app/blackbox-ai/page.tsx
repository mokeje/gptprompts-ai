import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Code2, Zap, Lightbulb } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "BlackBox AI Prompts: Complete Developer Guide | GPTPrompts.AI",
  description:
    "Master BlackBox AI with our comprehensive guide. Learn prompt engineering for code generation, debugging, optimization, and multi-language development across 20+ programming languages.",
}

export default function BlackBoxAIPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white py-32 px-6 md:px-12 relative overflow-hidden">
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
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            BlackBox <br />
            <span className="italic opacity-90">AI.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            The definitive guide to AI-powered code generation, debugging, and optimization. Master BlackBox AI across
            20+ programming languages.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#00d9ff] mb-6">Explore BlackBox</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "What is BlackBox AI", num: "00" },
                  { id: "features", label: "Core Features", num: "01" },
                  { id: "getting-started", label: "Getting Started", num: "02" },
                  { id: "prompting", label: "Prompting Mastery", num: "03" },
                  { id: "use-cases", label: "Real Use Cases", num: "04" },
                  { id: "languages", label: "Language Support", num: "05" },
                  { id: "security", label: "Security Best Practices", num: "06" },
                  { id: "comparisons", label: "vs Other Tools", num: "07" },
                  { id: "faq", label: "BlackBox FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#00d9ff] transition-colors"
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

        {/* Content Body */}
        <div className="lg:col-span-9 space-y-32 max-w-4xl">
          <article id="intro" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">What is BlackBox AI?</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              BlackBox AI is an AI-powered coding assistant designed specifically for developers and programmers. Unlike
              general-purpose AI tools, BlackBox focuses exclusively on code-related tasks including code generation,
              debugging, code explanation, optimization suggestions, and programming education.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The platform integrates directly into development workflows through browser extensions, IDE plugins, and a
              standalone web interface. This accessibility allows developers to get coding assistance without leaving
              their development environment, significantly improving productivity. BlackBox supports over 20 programming
              languages including Python, JavaScript, Java, C++, Go, Rust, and many others.
            </p>
          </article>

          <section id="features" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00d9ff]/10 rounded-xl">
                <Zap className="w-8 h-8 text-[#00d9ff]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Core Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Code Generation</h3>
                <p className="text-muted-foreground mb-4">
                  Describe what you want to build in plain English, and BlackBox generates production-ready code
                  snippets, complete functions, and class structures.
                </p>
              </Card>
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Code Explanation</h3>
                <p className="text-muted-foreground mb-4">
                  Understand complex code by having BlackBox break down functionality, explain algorithms, identify
                  issues, and suggest improvements.
                </p>
              </Card>
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Real-time Debugging</h3>
                <p className="text-muted-foreground mb-4">
                  Analyze error messages, identify logical errors, recommend debugging strategies, and learn why errors
                  occur.
                </p>
              </Card>
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Code Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Get AI-powered suggestions for more efficient algorithms, better data structures, and performance
                  improvements.
                </p>
              </Card>
            </div>
          </section>

          <section id="getting-started" className="space-y-12 bg-[#00d9ff]/5 p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#00d9ff] font-bold uppercase tracking-widest text-sm mb-6">
                <Lightbulb className="w-5 h-5" />
                <span>Quick Setup</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Getting Started</h2>
              <div className="space-y-8">
                <div className="p-8 bg-white rounded-2xl border border-[#00d9ff]/10">
                  <h4 className="font-bold mb-4">1. Browser Extension</h4>
                  <p className="text-sm text-muted-foreground">
                    Install BlackBox for Chrome, Firefox, or Edge to access code assistance from any webpage including
                    Stack Overflow and GitHub.
                  </p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-[#00d9ff]/10">
                  <h4 className="font-bold mb-4">2. IDE Plugin</h4>
                  <p className="text-sm text-muted-foreground">
                    Add BlackBox to VS Code, JetBrains IDEs, Sublime Text, or Atom for seamless in-editor code
                    assistance through keyboard shortcuts.
                  </p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-[#00d9ff]/10">
                  <h4 className="font-bold mb-4">3. Web Application</h4>
                  <p className="text-sm text-muted-foreground">
                    Use the web interface for quick queries and learning sessions without requiring any installation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="prompting" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Mastering BlackBox AI Prompting</h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <h3>Be Specific About Requirements</h3>
              <p>
                Vague prompts yield generic code. Instead of "create a function to sort data," request specific
                functionality with context and constraints.
              </p>

              <h3>Specify Programming Language and Version</h3>
              <p>
                Always indicate your target language and framework. Say "write a React functional component using hooks"
                rather than just "create a component."
              </p>

              <h3>Include Context and Constraints</h3>
              <p>
                Mention specific libraries, frameworks, or architectural patterns. For example: "create a user
                authentication function using JWT tokens for a Node.js Express application with MongoDB."
              </p>

              <h3>Request Error Handling and Edge Cases</h3>
              <p>
                Ask explicitly for proper error handling to ensure generated code is production-ready rather than just
                functional in ideal conditions.
              </p>
            </div>
          </section>

          <section id="use-cases" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Real Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-secondary/50 border-secondary">
                <h3 className="text-xl font-bold mb-4">Learning New Languages</h3>
                <p className="text-muted-foreground text-sm">
                  Describe functionality in languages you know and see implementations in new languages to bridge
                  knowledge gaps efficiently.
                </p>
              </Card>
              <Card className="p-8 bg-secondary/50 border-secondary">
                <h3 className="text-xl font-bold mb-4">Debugging Issues</h3>
                <p className="text-muted-foreground text-sm">
                  Share code snippets and error messages. BlackBox often identifies overlooked issues or suggests
                  alternative approaches.
                </p>
              </Card>
              <Card className="p-8 bg-secondary/50 border-secondary">
                <h3 className="text-xl font-bold mb-4">Algorithm Implementation</h3>
                <p className="text-muted-foreground text-sm">
                  Generate implementations for sorting algorithms, search algorithms, graph traversal, and complex data
                  structures.
                </p>
              </Card>
              <Card className="p-8 bg-secondary/50 border-secondary">
                <h3 className="text-xl font-bold mb-4">Boilerplate Generation</h3>
                <p className="text-muted-foreground text-sm">
                  Save time with CRUD operations, configuration files, and project structure initialization.
                </p>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">BlackBox AI FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How does BlackBox compare to GitHub Copilot?",
                  a: "BlackBox provides more flexible access options with competitive free tiers. While GitHub Copilot integrates deeply with VS Code, BlackBox works across multiple IDEs and platforms with browser extension support.",
                },
                {
                  q: "Can BlackBox generate code for all programming languages?",
                  a: "BlackBox supports 20+ major programming languages including Python, JavaScript, Java, C++, Go, Rust, PHP, C#, Swift, Kotlin, and many others. It understands language-specific idioms and best practices.",
                },
                {
                  q: "Is BlackBox AI code secure?",
                  a: "BlackBox generates functionally correct code, but security validation is your responsibility. Always review generated code for vulnerabilities, never share sensitive information in prompts, and verify dependencies.",
                },
                {
                  q: "How do I get the best results from BlackBox?",
                  a: "Write detailed, specific prompts with context about your project, language, and constraints. Iterate on generated code, ask for explanations alongside generation, and treat AI output as a starting point for refinement.",
                },
                {
                  q: "Does BlackBox support real-time collaboration?",
                  a: "Yes, you can integrate BlackBox into your team's workflow. Share effective prompts with teammates and create a shared knowledge base of successful strategies.",
                },
                {
                  q: "What should I do if BlackBox generates incorrect code?",
                  a: "Test thoroughly and treat generated code as a starting point. Refine your prompt with specific feedback about what's wrong and regenerate with clearer specifications.",
                },
                {
                  q: "Can BlackBox help me optimize existing code?",
                  a: "Absolutely. Share code sections with BlackBox and ask for optimization suggestions. The AI recommends better algorithms, data structures, and performance improvements.",
                },
                {
                  q: "How does BlackBox handle framework-specific code?",
                  a: "Mention your specific framework in the prompt - React, Django, Express, Spring, etc. BlackBox stays current with modern framework patterns and best practices.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#00d9ff] transition-colors text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xl leading-relaxed pt-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-32 px-6 md:px-12 mt-32 border-t border-background/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm text-lg">
              The world's most comprehensive prompt engineering library. Master the machines, unleash your potential.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">AI Models</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Perplexity Prompts", href: "/perplexity-prompts" },
                { label: "BlackBox AI", href: "/blackbox-ai" },
                { label: "Kimi AI Prompts", href: "/kimi-ai-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/blackbox-ai" ? "text-[#00d9ff] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Video & Creative</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Midjourney Prompts", href: "/midjourney-prompts" },
                { label: "Stable Diffusion Prompts", href: "/stable-diffusion-prompts" },
                { label: "Pixverse AI", href: "/pixverse-ai" },
                { label: "Hailuo AI", href: "/hailuo-ai" },
                { label: "Image Prompts", href: "/image-prompts" },
                { label: "Story Prompts", href: "/story-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Resources</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Free AI Prompts", href: "/free-ai-prompts" },
                { label: "Coolest ChatGPT", href: "/coolest-chatgpt-prompts" },
                { label: "Good AI Prompts", href: "/good-ai-prompts" },
                { label: "Gemini AI Guide", href: "/gemini-ai-guide" },
                { label: "Janitor AI", href: "/janitor-ai-guide" },
                { label: "Google AI Studio", href: "/google-ai-studio" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-background/10 mt-24 pt-12">
          <p className="text-center text-sm opacity-50">
            © 2026 GPTPrompts.AI. All rights reserved. Master the machines, unleash your potential.
          </p>
        </div>
      </footer>
    </main>
  )
}
