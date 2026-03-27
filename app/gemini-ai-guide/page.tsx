import { Sparkles } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gemini AI Guide: Complete Prompting Strategies | GPTPrompts.AI",
  description:
    "Master Gemini AI with our complete guide. Learn advanced prompting techniques, multimodal capabilities, Google Workspace integration, and best practices for all Gemini models.",
}

export default function GeminiAIPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#0f9fff] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Sparkles className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Gemini AI
            <br />
            <span className="italic opacity-90 text-blue-200">Guide.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Google's advanced multimodal AI system. Master Gemini's capabilities, integration with Google services, and
            advanced prompting techniques for maximum impact.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0f9fff] mb-6">Complete Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "understanding", label: "What is Gemini AI", num: "01" },
                  { id: "features", label: "Key Features", num: "02" },
                  { id: "access", label: "Accessing Gemini", num: "03" },
                  { id: "prompting", label: "Prompting Techniques", num: "04" },
                  { id: "multimodal", label: "Multimodal Capabilities", num: "05" },
                  { id: "usecases", label: "Practical Use Cases", num: "06" },
                  { id: "privacy", label: "Privacy & Data", num: "07" },
                  { id: "integration", label: "Google Workspace Integration", num: "08" },
                  { id: "tips", label: "Pro Tips & Best Practices", num: "09" },
                  { id: "faq", label: "Gemini AI FAQ", num: "10" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#0f9fff] transition-colors"
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
          <article id="understanding" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">What is Gemini AI?</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Gemini AI represents Google's most advanced artificial intelligence system, designed to compete with
              leading AI models in natural language processing, multimodal understanding, and complex reasoning tasks.
              Unlike traditional AI models limited to single data types, Gemini processes multiple forms of information
              simultaneously including text, images, audio, and video, providing comprehensive understanding and
              intelligent responses across diverse use cases.
            </p>
          </article>

          <article id="features" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Key Features of Gemini AI</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Multimodal Processing</h3>
                <p className="text-lg text-muted-foreground">
                  Seamlessly combine text prompts with images, documents, and visual data for comprehensive
                  understanding and analysis.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Multiple Model Tiers</h3>
                <p className="text-lg text-muted-foreground">
                  Choose from Gemini Ultra for complex tasks, Gemini Pro for balanced performance, and Gemini Nano for
                  mobile devices.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Google Workspace Integration</h3>
                <p className="text-lg text-muted-foreground">
                  Direct integration with Gmail, Docs, Sheets, and Slides brings AI assistance to familiar productivity
                  tools.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Real-Time Information</h3>
                <p className="text-lg text-muted-foreground">
                  Access current information through Google Search integration for timely, accurate responses.
                </p>
              </div>
            </div>
          </article>

          <article id="access" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">How to Access Gemini AI</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Accessing Gemini AI is straightforward through multiple channels. Visit gemini.google.com with your Google
              account for free basic access. Download the Gemini app for Android or iOS for mobile access. For
              developers, access the Gemini API through Google AI Studio for programmatic integration into custom
              applications. Premium features are available through Google One AI Premium subscriptions.
            </p>
          </article>

          <article id="prompting" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Mastering Gemini Prompting Techniques</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Effective Gemini prompting requires clarity and context. Be specific in your requests, provide relevant
              context and background information, structure complex requests into manageable pieces, iterate and refine
              based on results, and leverage role-playing prompts to activate relevant knowledge domains.
            </p>
            <p className="text-sm bg-muted p-4 rounded italic">
              Example: "As a marketing strategist, analyze this Q4 performance report [image] and suggest digital
              marketing strategies for SMEs selling luxury goods. Focus on social media platforms popular with
              high-net-worth individuals aged 35-55."
            </p>
          </article>

          <article id="multimodal" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Leveraging Multimodal Capabilities</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Gemini's multimodal nature is a powerful advantage. Upload images to ask questions about them, share
              documents for analysis, provide visual references for design discussions, or include screenshots for
              troubleshooting. The AI's ability to understand visual information often leads to more accurate and
              nuanced responses than text alone.
            </p>
          </article>

          <article id="usecases" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Practical Use Cases</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Content creation workflows benefit from Gemini's multimodal understanding. Students and researchers use it
              for study assistance and research support. Developers leverage it for code review and debugging. Business
              professionals utilize it for email drafting, meeting summaries, and data analysis. Language learners
              practice conversation and grammar with multilingual support.
            </p>
          </article>

          <article id="privacy" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Privacy and Data Considerations</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Google collects conversation data to improve AI performance, but you can manage privacy settings through
              your account. For sensitive information, exercise caution about what you share. Enterprise users get
              enhanced privacy protections through Google Workspace accounts with administrative controls and compliance
              features.
            </p>
          </article>

          <article id="integration" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Google Workspace Integration</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Gemini integrates seamlessly with Google's productivity suite. In Gmail, use AI assistance for composing
              emails. In Docs, get writing suggestions and content generation. In Sheets, perform data analysis and
              transformation. In Slides, create presentations with AI assistance. This integration brings powerful AI
              capabilities directly into your existing workflow.
            </p>
          </article>

          <article id="tips" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Pro Tips and Best Practices</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li>• Experiment with different prompting styles to discover what works best for your needs</li>
              <li>• Keep a document of effective prompts you develop for recurring tasks</li>
              <li>• Leverage Gemini's conversation memory within sessions by referencing previous responses</li>
              <li>• Fact-check important information, especially regarding recent events or specialized domains</li>
              <li>• Use the rating system to provide feedback and help improve the AI over time</li>
            </ul>
          </article>

          <article id="faq" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Gemini AI FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Is Gemini better than ChatGPT?",
                  a: "Both have strengths. Gemini excels at multimodal understanding and Google Workspace integration. ChatGPT has advantages in certain reasoning tasks. The best choice depends on your specific needs.",
                },
                {
                  q: "Can I use Gemini for commercial purposes?",
                  a: "Yes, but review the terms of service. API access has specific commercial licensing. Google One AI Premium offers commercial usage rights.",
                },
                {
                  q: "How does Gemini handle real-time information?",
                  a: "Through Google Search integration, Gemini can access current information about recent events, trending topics, and latest developments.",
                },
                {
                  q: "What file types can I upload to Gemini?",
                  a: "Supports images (JPG, PNG, etc.), documents (PDF, etc.), and text files. Always check current documentation for complete file type support.",
                },
                {
                  q: "Can I use Gemini offline?",
                  a: "No, Gemini requires internet connection. Some features like real-time information require active internet access.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-l-4 border-[#0f9fff] pl-6">
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
                  { name: "Janitor AI Guide", href: "/janitor-ai-guide" },
                  { name: "Google AI Studio", href: "/google-ai-studio" },
                  { name: "Viggle AI", href: "/viggle-ai-prompts" },
                  { name: "Coolest ChatGPT Prompts", href: "/coolest-chatgpt-prompts" },
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
