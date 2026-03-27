import { ImageIcon } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Image Prompts: The Definitive Visual Synthesis Guide | GPTPrompts.AI",
  description:
    "Master AI image generation with our guide to image prompts. Learn lighting, camera angles, artistic styles, and the anatomy of a professional prompt.",
}

export default function ImagePromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#ec4899] text-white py-32 px-6 md:px-12 relative overflow-hidden">
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
            Image <br />
            <span className="italic opacity-90 text-pink-200">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Paint with words. Our master guide reveals the advanced image prompts that turn basic ideas into
            professional-grade visual assets across Midjourney, DALL-E, and Stable Diffusion.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70"></div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#ec4899] mb-6">Complete Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "fundamentals", label: "Image Prompting Fundamentals", num: "01" },
                  { id: "anatomy", label: "Anatomy of a Great Prompt", num: "02" },
                  { id: "subject", label: "Subject & Composition", num: "03" },
                  { id: "style", label: "Artistic Styles", num: "04" },
                  { id: "lighting", label: "Lighting & Mood", num: "05" },
                  { id: "camera", label: "Camera Angles & Perspective", num: "06" },
                  { id: "quality", label: "Quality Modifiers", num: "07" },
                  { id: "negative", label: "Negative Prompts", num: "08" },
                  { id: "advanced", label: "Advanced Techniques", num: "09" },
                  { id: "faq", label: "Image Prompts FAQ", num: "10" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#ec4899] transition-colors"
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
          <article id="fundamentals" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Understanding Image Prompt Fundamentals</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Effective image prompts communicate your vision clearly to AI image generation models. The best prompts
              balance specificity with artistic flexibility, include relevant descriptors for subject, style,
              composition, and mood, avoid overly technical jargon, and guide the model toward desired results without
              dictating every detail.
            </p>
          </article>

          <article id="anatomy" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">The Anatomy of a Powerful Image Prompt</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Professional image prompts follow a structured formula: Main Subject, Detailed Description, Artistic
              Style, Lighting/Mood, Camera/Composition, Quality Modifiers. This structure ensures all important elements
              are addressed while remaining flexible for creative interpretation.
            </p>
          </article>

          <article id="subject" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Defining Subject and Composition</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Start with a clear main subject. Instead of "a person," describe "a professional woman in her 30s,
              confident expression, wearing tailored navy blazer." Specify composition: rule of thirds, centered, rule
              of odds, symmetrical, or asymmetrical. Consider the relationship between multiple subjects if present.
            </p>
          </article>

          <article id="style" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Applying Artistic Styles</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Specify artistic direction: photorealistic, oil painting, watercolor, digital art, comic book, anime,
              cinema, conceptual art, or specific artist influences. Reference real artists: "in the style of Ansel
              Adams," "inspired by Hayao Miyazaki," or "resembling a Renaissance painting."
            </p>
          </article>

          <article id="lighting" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Controlling Lighting and Mood</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Lighting dramatically affects mood. Specify: golden hour, blue hour, harsh midday, soft diffused, dramatic
              chiaroscuro, or neon-lit. Include mood descriptors: dramatic, serene, energetic, melancholic, mysterious,
              or inspiring. These elements work together to create emotional resonance.
            </p>
          </article>

          <article id="camera" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Camera Angles and Perspective</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Perspective shapes storytelling. Specify: wide-angle establishing shot, close-up, bird's-eye view,
              worm's-eye view, Dutch angle, or bokeh background. Include depth of field: shallow depth with blurred
              background or deep focus with sharp throughout. Camera movement: static, smooth pan, cinematic tracking.
            </p>
          </article>

          <article id="quality" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Quality and Rendering Modifiers</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Quality descriptors improve results: ultra high resolution, 8K, detailed, intricate, sharp focus, highly
              polished, professional photography, award-winning, or museum quality. Specify technical parameters: ray
              tracing, volumetric lighting, global illumination, or physically accurate materials.
            </p>
          </article>

          <article id="negative" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Using Negative Prompts Strategically</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Negative prompts exclude unwanted elements: "avoid blurry," "no text or watermarks," "not cartoon," "no
              distorted hands," or "exclude amateur quality." Strategic negative prompting refines results by telling
              the model what to avoid. Be specific about common issues you've encountered.
            </p>
          </article>

          <article id="advanced" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Advanced Image Prompting Techniques</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Advanced techniques include weighted prompts emphasizing important elements, prompt engineering using
              specific model terminology, iterative refinement based on results, and combining multiple reference
              styles. Experiment with aspect ratios, seed values for consistency, and model-specific parameters to
              achieve desired results.
            </p>
          </article>

          <article id="faq" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Image Prompting FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How specific should my image prompts be?",
                  a: "Balance specificity with creative flexibility. Give clear direction on main elements, style, and mood, but allow the AI room for artistic interpretation. Over-specification can feel stiff.",
                },
                {
                  q: "Does prompt length affect quality?",
                  a: "Longer doesn't always mean better, but more detailed prompts generally yield better results. Focus on clarity and relevance rather than length.",
                },
                {
                  q: "How do I get consistent characters across images?",
                  a: "Describe character details consistently, use model-specific features like seeds or character references, or reference the same base image with variations.",
                },
                {
                  q: "Can I use prompts across different image generation models?",
                  a: "Partially. Core concepts transfer, but each model has unique strengths. Adjust terminology for model-specific performance.",
                },
                {
                  q: "What if I'm not getting the style I want?",
                  a: "Try referencing specific artists, include 'inspired by,' adjust artistic style descriptors, and use negative prompts to exclude unwanted aesthetics.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-l-4 border-[#ec4899] pl-6">
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
                  { name: "SQL Prompts", href: "/sql-prompts" },
                  { name: "Creative Writing", href: "/writing-prompts" },
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
