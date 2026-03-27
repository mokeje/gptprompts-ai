import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Sparkles, Globe, Database, Video } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gemini Prompts: Master Google's Multimodal AI | GPTPrompts.AI",
  description:
    "Unlock the full power of Google Gemini with our comprehensive guide. Learn how to use Gemini prompts for multimodal tasks, massive context analysis, and Google ecosystem integration.",
}

export default function GeminiPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#1a73e8] to-[#4285f4] text-white py-32 px-6 md:px-12 relative overflow-hidden">
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
            Gemini <br />
            <span className="italic opacity-90">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Unleash the 2M context window. Our guide is the definitive manual for prompting Google's most advanced
            multimodal AI models across the entire Google ecosystem.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1a73e8] mb-6">Explore Gemini</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "The Gemini Edge", num: "00" },
                  { id: "multimodal", label: "Multimodal Power", num: "01" },
                  { id: "video", label: "Video Masterclass", num: "02" },
                  { id: "context", label: "Massive Context (1M+)", num: "03" },
                  { id: "workspace", label: "Workspace Integration", num: "04" },
                  { id: "flash-pro", label: "Flash vs Pro Logic", num: "05" },
                  { id: "reasoning", label: "System Instructions", num: "06" },
                  { id: "coding", label: "Coding with Gemini", num: "07" },
                  { id: "faq", label: "Gemini FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#1a73e8] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">The Gemini Edge: Why Google's AI is Different</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Google Gemini is not just a language model—it is a native multimodal intelligence. While other models were
              trained on text and then "tapped" into vision or audio, Gemini was built from the ground up to understand
              video, images, code, and text simultaneously. This shift in architecture requires a fundamental shift in
              how we write <strong>Gemini prompts</strong>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              To truly master Gemini, you must leverage its three unique strengths: its massive 2-million-token context
              window, its deep integration with the Google Workspace ecosystem (Docs, Gmail, Drive), and its native
              multimodality. Our guide explores how to prompt across these dimensions to achieve results that are simply
              impossible with traditional LLMs.
            </p>
          </article>

          <section id="multimodal" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#1a73e8]/10 rounded-xl">
                <Globe className="w-8 h-8 text-[#1a73e8]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">The Art of Multimodal Prompting</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Gemini shines when you feed it multiple data types at once. Here's how to structure multimodal prompts:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Video + Text</h3>
                <p className="text-muted-foreground italic mb-4">
                  "Analyze this 10-minute presentation. Extract all mentioned KPIs and create a summary table. Highlight
                  any moments where the speaker's tone shifts from confident to hesitant."
                </p>
              </Card>
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Code + Image</h3>
                <p className="text-muted-foreground italic mb-4">
                  "Look at this screenshot of a UI layout. Now analyze this React code. Identify the specific lines in
                  the code that are causing the spacing issues shown in the screenshot."
                </p>
              </Card>
            </div>
          </section>

          <section id="video" className="space-y-12 bg-[#1a73e8]/5 p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#1a73e8] font-bold uppercase tracking-widest text-sm mb-6">
                <Video className="w-5 h-5" />
                <span>Video Reasoning</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Directing the Digital Eye</h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Gemini's ability to "watch" video is unmatched. It doesn't just look at frames; it understands temporal
                flow.
              </p>
              <div className="space-y-8">
                <div className="p-8 bg-white rounded-2xl border border-[#1a73e8]/10">
                  <h4 className="font-bold mb-4">The "Event Locator" Prompt:</h4>
                  <p className="text-sm text-muted-foreground italic">
                    "I am uploading a 60-minute security footage file. Find the exact timestamp where the person in the
                    red jacket enters the frame. Describe their actions in the subsequent 30 seconds."
                  </p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-[#1a73e8]/10">
                  <h4 className="font-bold mb-4">The "Cinematic Analyst" Prompt:</h4>
                  <p className="text-sm text-muted-foreground italic">
                    "Analyze this short film. Identify the color palette used in the first act vs the third act. Explain
                    how the lighting shift contributes to the emotional stakes of the protagonist's journey."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="context" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#1a73e8]/10 rounded-xl">
                <Database className="w-8 h-8 text-[#1a73e8]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">The 2M Context Masterclass</h2>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              <p>
                Gemini 1.5 Pro allows you to upload entire books, codebases, or hour-long videos. The secret to long
                context prompting is "Needle in a Haystack" precision. When working with 1M+ tokens, you must be
                explicit about the <strong>schema</strong> of your desired output.
              </p>
              <Card className="p-8 bg-slate-900 text-slate-100 my-8">
                <h4 className="text-[#1a73e8] font-bold mb-4 uppercase tracking-widest text-xs">Precision Workflow:</h4>
                <ol className="space-y-4">
                  <li>
                    <strong>Define the Corpus:</strong> "I have uploaded 50 legal contracts totaling 800,000 tokens."
                  </li>
                  <li>
                    <strong>Targeted Extraction:</strong> "Find every clause that mentions 'Force Majeure' and
                    specifically references 'Public Health Emergencies'."
                  </li>
                  <li>
                    <strong>Structured Synthesis:</strong> "Generate a CSV table with columns: [Contract Name], [Clause
                    Number], [Specific Phrasing], [Liability Implications]."
                  </li>
                </ol>
              </Card>
            </div>
          </section>

          <section id="flash-pro" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Flash vs. Pro: Matching the Model to the Prompt</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Google offers two primary versions of Gemini 1.5. Choosing the right one depends on your prompt's
              complexity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Gemini 1.5 Flash</h3>
                <p className="text-sm opacity-70 mb-6">Optimized for speed and high-volume tasks.</p>
                <ul className="space-y-2 text-sm font-medium">
                  <li>• High-speed data extraction</li>
                  <li>• Real-time chat bots</li>
                  <li>• Summarizing short to medium documents</li>
                  <li>• Simple multimodal labeling</li>
                </ul>
              </div>
              <div className="p-8 border rounded-2xl border-[#1a73e8]/20 bg-[#1a73e8]/5">
                <h3 className="text-2xl font-bold mb-4">Gemini 1.5 Pro</h3>
                <p className="text-sm opacity-70 mb-6">Optimized for deep reasoning and massive context.</p>
                <ul className="space-y-2 text-sm font-medium">
                  <li>• Analyzing massive codebases (1M+ tokens)</li>
                  <li>• Complex video reasoning</li>
                  <li>• Cross-document synthesis</li>
                  <li>• Nuanced creative writing</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Gemini Strategy FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Is Gemini 1.5 Pro better than GPT-4 for prompts?",
                  a: "For long-context tasks (like reading a 500-page book) and multimodal video analysis, Gemini is currently superior. Its native ability to process video as a first-class citizen sets it apart. However, for pure logic and coding instruction, GPT-4 is often competitive.",
                },
                {
                  q: "How do I use 'System Instructions' in Gemini?",
                  a: "System instructions are top-level rules that define the model's behavior. Unlike a standard prompt, they are more permanent and should be used to define persona, tone, and formatting constraints that must persist across the entire session.",
                },
                {
                  q: "Can Gemini access the live web?",
                  a: "Yes. Using Google Search integration, Gemini can provide real-time information. A good prompt would be: 'Research the current stock price of [TICKER] and compare it to its performance after the last earnings report. Cite your sources.'",
                },
                {
                  q: "What is the @-mentions feature in Gemini?",
                  a: "Extensions like @Gmail, @Drive, and @Docs allow you to pull your personal data directly into the prompt. For example: '@Gmail Find the flight itinerary from Sarah and add a summary of the hotel details to my @Drive 'Vacation Plan' doc.'",
                },
                {
                  q: "Does Gemini support few-shot prompting?",
                  a: "Yes, and it is highly effective. Because of the large context window, you can provide dozens or even hundreds of examples (Many-Shot Prompting) to prime the model for extremely specific or niche formatting requirements.",
                },
                {
                  q: "How do I prompt Gemini for better code?",
                  a: "Use the 'Chain of Thought' approach within a block. Ask Gemini to first 'Explain the logic of the solution in comments' before writing the actual code. Also, specify the library versions you are using to ensure compatibility.",
                },
                {
                  q: "Can Gemini generate images?",
                  a: "Yes, through integration with Imagen. You can prompt: 'Generate an image of a [SUBJECT] in the style of [ARTIST].' Note that image generation is currently separate from the multimodal understanding engine.",
                },
                {
                  q: "What is 'Temperature' in Gemini API prompts?",
                  a: "Temperature controls the randomness of the output. 0.0 is deterministic (good for facts/code), while 1.0+ is highly creative (good for brainstorming/stories).",
                },
                {
                  q: "How do I handle the 2M context window efficiently?",
                  a: "Even though it can handle 2M tokens, focus matters. Always tell the model *where* in the documents to look first to minimize 'attention drift' and ensure the most relevant data is prioritized.",
                },
                {
                  q: "Can Gemini analyze audio files directly?",
                  a: "Yes. You can upload .mp3 or .wav files. Prompt it to: 'Transcribe this meeting and identify every time someone mentions a budget constraint.' It is natively multimodal for audio.",
                },
                {
                  q: "What are the safety guardrails for Gemini prompts?",
                  a: "Google has strict safety filters. If a prompt is blocked, try rephrasing to be more objective and removing any terms that might trigger the 'harmful content' filter, even if your intent is benign.",
                },
                {
                  q: "How do I prompt for 'Native Video' understanding?",
                  a: "Instead of describing a video, upload it. Then ask: 'In the video, what happens at 03:45?' Gemini treats the video as a primary data source, not as a series of still frames.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#1a73e8] transition-colors text-left">
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
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
                { label: "Midjourney Prompts", href: "/midjourney-prompts" },
                { label: "Stable Diffusion Prompts", href: "/stable-diffusion-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/gemini-prompts" ? "text-[#1a73e8] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Career & Writing</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Personal Statement Prompts", href: "/essay-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Story Prompts", href: "/story-prompts" },
                { label: "500+ Writing Prompts", href: "/500-writing-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Specialized</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Image Prompts", href: "/image-prompts" },
                { label: "SQL Prompts", href: "/sql-prompts" },
                { label: "Journaling Guide", href: "/journal-guide" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Resources & Guides</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Virtual Assistant Prompts", href: "/virtual-assistant-prompts" },
                { label: "Creative Writing for Beginners", href: "/creative-writing-prompts-beginners" },
                { label: "Photo Editing Prompts", href: "/photo-editing-prompts" },
                { label: "Social Media Marketing", href: "/social-media-marketing-prompts" },
                { label: "Free Prompts Library", href: "/free-ai-prompts" },
                { label: "Coolest ChatGPT Prompts", href: "/coolest-chatgpt-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-8 mt-8 border-t border-background/10">
                <p className="text-[10px] opacity-30 uppercase tracking-widest leading-loose">
                  © 2026 GPTPrompts.AI <br />
                  All Rights Reserved.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}
