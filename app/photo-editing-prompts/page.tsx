import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { ImageIcon, Wand2, Palette } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Photo Editing Prompts for Designers | GPTPrompts.AI",
  description:
    "Master AI photo editing with free prompts for Firefly, Midjourney, and Canva Magic Edit. Learn the S-S-L-C Formula for professional retouching and generative fill.",
}

export default function PhotoEditingPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#e74c3c] text-[#ffffff] py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <ImageIcon className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Photo Editing <br />
            <span className="italic opacity-90">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Elevate your vision with AI-powered photo editing. Master retouching, color grading, and generative fill
            using the S-S-L-C Formula.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#e74c3c] mb-6">Design Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "science", label: "Science of Edit Prompts", num: "00" },
                  { id: "sslc", label: "S-S-L-C Formula", num: "01" },
                  { id: "portrait", label: "Portrait Retouching", num: "02" },
                  { id: "generative", label: "Generative Fill", num: "03" },
                  { id: "lighting", label: "Lighting & Mood", num: "04" },
                  { id: "background", label: "Background Changes", num: "05" },
                  { id: "batch", label: "Batch Editing", num: "06" },
                  { id: "export", label: "Export Optimization", num: "07" },
                  { id: "faq", label: "Photo Editing FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#e74c3c] transition-colors"
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
          <article id="science" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">The Science of the "Edit" Prompt</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Unlike "generation" prompts (which create something from nothing), editing prompts require a delicate
              balance of what to change and what to preserve. To rank your designs at a professional level, use the
              S-S-L-C Formula: Subject, Style, Lighting, and Constraint.
            </p>
          </article>

          <section id="sslc" className="space-y-12 bg-[#e74c3c] text-white p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">The S-S-L-C Formula</h2>
              <div className="space-y-6">
                <Card className="p-6 bg-[#c0392b] border-none">
                  <h4 className="text-[#fff] font-bold mb-3 uppercase tracking-widest text-sm">Subject</h4>
                  <p className="opacity-90">
                    What specific part of the image are we targeting? Be precise: "the background," "the subject's
                    face," or "the sky."
                  </p>
                </Card>
                <Card className="p-6 bg-[#c0392b] border-none">
                  <h4 className="text-[#fff] font-bold mb-3 uppercase tracking-widest text-sm">Style</h4>
                  <p className="opacity-90">
                    Are we aiming for "Cinematic," "Flat Design," or "Street Photography"? Define the aesthetic.
                  </p>
                </Card>
                <Card className="p-6 bg-[#c0392b] border-none">
                  <h4 className="text-[#fff] font-bold mb-3 uppercase tracking-widest text-sm">Lighting</h4>
                  <p className="opacity-90">
                    Do we want "Golden Hour," "High-Key," or "Volumetric"? Lighting creates mood.
                  </p>
                </Card>
                <Card className="p-6 bg-[#c0392b] border-none">
                  <h4 className="text-[#fff] font-bold mb-3 uppercase tracking-widest text-sm">Constraint</h4>
                  <p className="opacity-90">
                    What must remain untouched? (e.g., "Preserve original facial features.") Constraints prevent
                    unwanted changes.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          <section id="portrait" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#e74c3c]/10 rounded-xl">
                <Wand2 className="w-8 h-8 text-[#e74c3c]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Retouching and Portrait Enhancement</h2>
            </div>

            <Card className="p-8 border-none shadow-xl bg-secondary/30">
              <h3 className="text-2xl font-bold mb-4">The High-Fashion Editorial Look</h3>
              <div className="p-4 bg-white rounded-xl border border-[#e74c3c]/20 font-mono text-sm text-slate-700 mb-4">
                "Enhance the uploaded portrait with high-end editorial skin retouching. Preserve natural pore texture
                while removing minor blemishes. Apply a global color grade with cool shadows and warm midtones. Add
                subtle rim lighting to the subject's silhouette."
              </div>
              <p className="text-sm text-muted-foreground">Best For: Professional headshots and fashion portfolios.</p>
            </Card>

            <Card className="p-8 border-none shadow-xl bg-secondary/30">
              <h3 className="text-2xl font-bold mb-4">The Golden Hour Shift</h3>
              <div className="p-4 bg-white rounded-xl border border-[#e74c3c]/20 font-mono text-sm text-slate-700 mb-4">
                "Transform the lighting of this outdoor photo to Golden Hour. Add a soft, warm orange glow coming from
                the top-right corner. Introduce lens flare and increase the saturation of the sky while keeping skin
                tones natural."
              </div>
              <p className="text-sm text-muted-foreground">Best For: Lifestyle photography and travel blogs.</p>
            </Card>
          </section>

          <section id="generative" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#e74c3c]/10 rounded-xl">
                <Palette className="w-8 h-8 text-[#e74c3c]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Generative Fill: Expanding the Frame</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Generative fill is the most powerful tool in a designer's kit for 2026. It allows you to change clothes,
              remove unwanted objects, expand frames, or completely transform compositions without manual masking.
            </p>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Photo Editing FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What's the difference between AI retouching and traditional Photoshop?",
                  a: "AI retouching is faster and more predictable. Traditional Photoshop gives more control. Modern workflows use both: AI for heavy lifting, manual for finesse.",
                },
                {
                  q: "How do I preserve natural skin texture in portraits?",
                  a: "Use phrases like 'preserve pore texture' and 'maintain natural skin.' Avoid 'smooth' or 'plastic'—AI overcompensates.",
                },
                {
                  q: "Can I use these prompts for batch editing?",
                  a: "Yes. Save your best prompts as 'presets.' Apply them to multiple photos for consistency.",
                },
                {
                  q: "What if the AI removes something I wanted to keep?",
                  a: "Use the Constraint section of S-S-L-C. Specify what must remain untouched.",
                },
                {
                  q: "How specific should my prompts be?",
                  a: "The more specific, the better. 'Warm lighting' is vague; 'golden hour, 3000K color temp' is precise.",
                },
                {
                  q: "What are the best AI tools for photo editing?",
                  a: "Adobe Firefly, Midjourney, Canva Magic Edit, and Photoshop's Generative Fill. Each excels at different tasks.",
                },
                {
                  q: "Can I edit video with these prompts?",
                  a: "Yes, but frame-by-frame. Video editing is evolving; expect better AI video tools soon.",
                },
                {
                  q: "How do I export photos for web vs print?",
                  a: "Web: 72 DPI, RGB, JPEG. Print: 300 DPI, CMYK, TIFF. Always export after editing.",
                },
                {
                  q: "Is it ethical to heavily edit photos?",
                  a: "Disclosure is key. Heavy editing for advertising should be labeled. Editorial standards vary by publication.",
                },
                {
                  q: "How do I develop a consistent editing style?",
                  a: "Create a 'house style' prompt. Apply it to all photos. Consistency builds brand recognition.",
                },
                {
                  q: "Can I undo edits if I change my mind?",
                  a: "Most AI tools work non-destructively. Always keep the original. Generate variations and pick the best.",
                },
                {
                  q: "What's the learning curve for AI photo editing?",
                  a: "Minimal. Start with simple prompts, refine over time. Within 10-20 edits, you'll find your style.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#e74c3c] transition-colors text-left">
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

      <footer className="bg-foreground text-background py-32 px-6 md:px-12 mt-32 border-t border-background/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Career & Writing</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
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
                { label: "Good AI Prompts", href: "/good-ai-prompts" },
                { label: "Coolest ChatGPT", href: "/coolest-chatgpt-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Advanced Tools</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Gemini AI Guide", href: "/gemini-ai-guide" },
                { label: "Janitor AI Guide", href: "/janitor-ai-guide" },
                { label: "Google AI Studio", href: "/google-ai-studio" },
                { label: "More Tools...", href: "/free-ai-prompts" },
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
