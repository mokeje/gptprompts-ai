import { Code } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Google AI Studio Guide 2026: Build AI Apps with Gemini (Free Tutorial)",
  description:
    "Learn how to use Google AI Studio for free. Step-by-step guide covering prompt testing, multimodal inputs, API integration, and building your first Gemini-powered app.",
}

export default function GoogleAIStudioPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#4285f4] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Code className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Google AI
            <br />
            <span className="italic opacity-90 text-blue-200">Studio.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Build AI applications without complexity. Master Google's development platform for prototyping, testing, and
            deploying advanced Gemini-powered applications at scale.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#4285f4] mb-6">Complete Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "what", label: "What is Google AI Studio", num: "01" },
                  { id: "features", label: "Key Features", num: "02" },
                  { id: "getting", label: "Getting Started", num: "03" },
                  { id: "prompting", label: "Prompt Engineering", num: "04" },
                  { id: "multimodal", label: "Multimodal Inputs", num: "05" },
                  { id: "parameters", label: "Model Parameters", num: "06" },
                  { id: "applications", label: "Practical Applications", num: "07" },
                  { id: "production", label: "Production Deployment", num: "08" },
                  { id: "bestpractices", label: "Best Practices", num: "09" },
                  { id: "faq", label: "Google AI Studio FAQ", num: "10" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#4285f4] transition-colors"
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
          <article id="what" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">What is Google AI Studio?</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Google AI Studio is a browser-based development environment providing direct access to Google's Gemini AI
              models through an intuitive interface. Designed for developers, researchers, and AI enthusiasts, this
              platform bridges the gap between simple chatbot interfaces and complex API implementation, offering a
              powerful workspace for prototyping, testing, and deploying AI applications. Unlike consumer-facing AI chat
              applications, Google AI Studio focuses on experimentation and development with structured prompts,
              parameter configuration, and code generation capabilities.
            </p>
          </article>

          <article id="features" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Key Features of Google AI Studio</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Multimodal Prompt Design</h3>
                <p className="text-lg text-muted-foreground">
                  Create prompts combining text, images, audio, and other data types for complex scenarios requiring AI
                  understanding across multiple modalities.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Structured Prompting</h3>
                <p className="text-lg text-muted-foreground">
                  Use templates and frameworks for organizing complex prompts, including multi-turn conversations and
                  few-shot examples for improved consistency.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Model Configuration</h3>
                <p className="text-lg text-muted-foreground">
                  Fine-tune AI behavior with controls over temperature, sampling methods, safety settings, and output
                  parameters for precise application requirements.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Prompt Gallery</h3>
                <p className="text-lg text-muted-foreground">
                  Access pre-built examples demonstrating various use cases and best practices, providing starting
                  points for custom implementations.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Code Export</h3>
                <p className="text-lg text-muted-foreground">
                  Generate ready-to-use code in multiple programming languages including Python and JavaScript for
                  seamless integration into applications.
                </p>
              </div>
            </div>
          </article>

          <article id="getting" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Getting Started with Google AI Studio</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Access Google AI Studio by visiting aistudio.google.com and signing in with a Google account. The platform
              is free to use within generous quotas, making it accessible for learning, prototyping, and moderate
              production use. Upon first access, you'll receive API keys for authentication. Select your prompt type
              (freeform, structured, or chat), configure parameters, and run your first prompt to see immediate results.
            </p>
          </article>

          <article id="prompting" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Advanced Prompt Engineering</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Effective prompt engineering leverages system instructions, few-shot learning with examples, strategic
              context management, and careful parameter tuning. System instructions define the AI's role globally,
              few-shot examples train the model on desired patterns, context organization helps the AI understand
              relevance, and parameter adjustment controls randomness, coherence, and content filtering.
            </p>
            <p className="text-sm bg-muted p-4 rounded italic">
              Example: "As a Python expert, review this code [snippet] for optimization. Provide specific suggestions
              with performance impact estimates. Format output as a structured report with priority levels."
            </p>
          </article>

          <article id="multimodal" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Leveraging Multimodal Capabilities</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Google AI Studio's multimodal support enables complex workflows. Upload images for visual analysis,
              include documents for comprehensive understanding, provide screenshots for troubleshooting, or combine
              text with visual references for design discussions. The AI's simultaneous understanding of multiple data
              types enables more accurate analysis and contextual responses compared to text-only interaction.
            </p>
          </article>

          <article id="parameters" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Configuring Model Parameters</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Parameter tuning significantly impacts output quality. Temperature controls randomness (0 = deterministic,
              1 = creative). Top-k affects selection pool for diversity. Top-p uses nucleus sampling for coherence.
              Safety settings filter potentially harmful content with adjustable thresholds. Maximum output length caps
              response size. Experiment with different configurations to find optimal settings for your specific use
              case.
            </p>
          </article>

          <article id="applications" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Practical Applications</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li>
                • <strong>Content Generation:</strong> Create templates for blog posts, social media, product
                descriptions with brand guidelines
              </li>
              <li>
                • <strong>Data Extraction:</strong> Convert unstructured data to structured formats like JSON or
                database entries
              </li>
              <li>
                • <strong>Code Generation:</strong> Generate boilerplate, tests, documentation, and translate between
                languages
              </li>
              <li>
                • <strong>Question Answering:</strong> Build systems for customer support, knowledge bases, and
                education
              </li>
              <li>
                • <strong>Language Services:</strong> Translation, localization, multilingual content adaptation
              </li>
            </ul>
          </article>

          <article id="production" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Deploying to Production</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Transitioning from prototype to production requires careful planning. Optimize prompts for efficiency,
              test extensively across edge cases, implement robust error handling with retry logic, secure API keys
              using environment variables, monitor usage through Google Cloud Console, and set budget alerts. The code
              export feature generates production-ready code in your preferred language, but ensure proper security and
              scaling configurations before going live.
            </p>
          </article>

          <article id="bestpractices" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Best Practices</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li>• Iterative Development: Start simple and gradually add complexity</li>
              <li>• Version Control: Maintain prompts in version control like code</li>
              <li>• Testing: Create comprehensive test suites for regression detection</li>
              <li>• Documentation: Record what works, what doesn't, and why</li>
              <li>• Collaboration: Share prompts and learnings with team members</li>
            </ul>
          </article>

          <article id="faq" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Google AI Studio FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Is there a cost to use Google AI Studio?",
                  a: "Basic usage is free within quota limits. API usage beyond free quotas requires payment through Google Cloud billing.",
                },
                {
                  q: "Can I deploy Google AI Studio prompts to production?",
                  a: "Yes. Use the code export feature to generate API integration code for your preferred programming language and framework.",
                },
                {
                  q: "What programming languages are supported for export?",
                  a: "Google AI Studio supports Python, JavaScript, and other languages. Check documentation for complete language support.",
                },
                {
                  q: "How do I secure my API keys?",
                  a: "Never expose keys in public repositories. Use environment variables, secure key management services, and implement access controls.",
                },
                {
                  q: "What file formats can I upload?",
                  a: "Supports images (JPG, PNG, etc.), documents (PDF, etc.), and text files. Check current documentation for complete format support.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-l-4 border-[#4285f4] pl-6">
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
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">GPTPrompts.AI</h4>
              <p className="text-sm leading-relaxed opacity-70">
                The ultimate platform for mastering AI prompting across all models and use cases.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">AI Models</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                  { name: "Claude Prompts", href: "/claude-prompts" },
                  { name: "Gemini AI", href: "/gemini-ai-guide" },
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

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Resources</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Resume Prompts", href: "/resume-prompts" },
                  { name: "Cover Letters", href: "/cover-letter-prompts" },
                  { name: "Essay Prompts", href: "/essay-prompts" },
                  { name: "Story Prompts", href: "/story-prompts" },
                  { name: "SQL Prompts", href: "/sql-prompts" },
                  { name: "Image Prompts", href: "/image-prompts" },
                  { name: "Free Prompts", href: "/free-ai-prompts" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="opacity-70 hover:opacity-100 transition-opacity">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Tools & Guides</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Gemini AI Guide", href: "/gemini-ai-guide" },
                  { name: "Janitor AI Guide", href: "/janitor-ai-guide" },
                  { name: "Viggle AI", href: "/viggle-ai-prompts" },
                  { name: "Coolest ChatGPT", href: "/coolest-chatgpt-prompts" },
                  { name: "Good AI Prompts", href: "/good-ai-prompts" },
                  { name: "Common App Essays", href: "/common-app-essays" },
                  { name: "Scholarship Essays", href: "/scholarship-essays" },
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
