import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Palette, Layers, Zap, Maximize } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Midjourney Prompts: The Master Guide to Generative Art | GPTPrompts.AI",
  description:
    "Master Midjourney v6 with our authoritative guide. Learn how to write image prompts for photorealism, architecture, logo design, and consistent characters.",
}

export default function MidjourneyPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-black text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
          <Palette className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Midjourney <br />
            <span className="italic font-serif opacity-90 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Prompts.
            </span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Paint with words. Our master guide covers everything from v6 parameters to style references, ensuring your
            generative art stands out in a crowded digital world.
          </p>
          {/* Removed word count and reading time spans */}
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-6">Artistic Control</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "The V6 Paradigm", num: "01" },
                  { id: "anatomy", label: "Prompt Anatomy", num: "02" },
                  { id: "photography", label: "Photorealism Mastery", num: "03" },
                  { id: "style-ref", label: "Style Refs (--sref)", num: "04" },
                  { id: "char-ref", label: "Character Refs (--cref)", num: "05" },
                  { id: "pan-zoom", label: "Pan & Zoom Editing", num: "06" },
                  { id: "parameters", label: "Parameters Hub", num: "07" },
                  { id: "faq", label: "Midjourney FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-pink-600 transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">Visual Language: The Power of Midjourney v6</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Midjourney v6 marks a departure from "vibes" toward "intention." In previous versions, users often relied
              on "word salads"—strings of adjectives like '8k, hyperrealistic, octane render'—to get good results. V6,
              however, understands natural language and composition. This means your <strong>Midjourney prompts</strong>{" "}
              need to be structured, coherent, and descriptive.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              To master image generation, you must think like both a photographer and a director. You are defining the
              subject, the camera angle, the lens type, the lighting conditions, and the artistic medium. Our guide
              systematically deconstructs these elements to give you total control over the canvas.
            </p>
          </article>

          <section
            id="style-ref"
            className="space-y-12 bg-pink-600/5 p-12 md:p-20 rounded-[3rem] border border-pink-600/10"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-pink-600 font-bold uppercase tracking-widest text-sm mb-6">
                <Zap className="w-5 h-5" />
                <span>The Style Reference Engine</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Aesthetics on Demand</h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                The `--sref` parameter is perhaps the most powerful tool in the v6 arsenal. It allows you to "copy" the
                aesthetic of an existing image and apply it to any new prompt.
              </p>
              <div className="p-8 bg-white rounded-2xl border border-pink-600/20">
                <h4 className="font-bold mb-4">Mastering --sref:</h4>
                <p className="text-sm text-muted-foreground italic mb-4">
                  "A futuristic skyline, neon lights --sref [URL] --sw 1000"
                </p>
                <p className="text-xs opacity-70">
                  Tip: Use `--sw` (Style Weight) to control the intensity of the reference. 1000 is maximum influence,
                  while 50 is a subtle hint.
                </p>
              </div>
            </div>
          </section>

          <section id="char-ref" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-pink-600/10 rounded-xl">
                <Layers className="w-8 h-8 text-pink-600" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Consistent Characters (--cref)</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Maintaining character identity across multiple scenes has historically been the "Holy Grail" of AI art.
              `--cref` solves this by mapping facial features and clothing from a reference image.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/30">
              <h3 className="text-xl font-bold mb-4">Character Consistency Workflow:</h3>
              <ol className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <strong>Generate your Base:</strong> Create an image of your character against a simple background.
                </li>
                <li>
                  <strong>Extract the URL:</strong> Copy the link to that generated image.
                </li>
                <li>
                  <strong>The Follow-up Prompt:</strong> "[Your character] running through a forest --cref [URL] --cw
                  100"
                </li>
                <li>
                  <strong>Adjusting Weight:</strong> Use `--cw 0` to only keep the face, allowing you to change clothing
                  and hair.
                </li>
              </ol>
            </Card>
          </section>

          <section id="pan-zoom" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-black rounded-xl">
                <Maximize className="w-8 h-8 text-pink-600" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Post-Generation Control</h2>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              <p>
                Don't settle for the first result. Midjourney's interactive tools allow you to expand and shift your
                canvas with surgical precision.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="p-6 border rounded-xl">
                  <h4 className="font-bold mb-2">Vary (Region)</h4>
                  <p className="text-sm opacity-70">
                    The 'Inpainting' tool. Select an area of your image and re-prompt it. "Change her hat to a crown" or
                    "Remove the coffee cup."
                  </p>
                </div>
                <div className="p-6 border rounded-xl">
                  <h4 className="font-bold mb-2">Zoom Out (2x)</h4>
                  <p className="text-sm opacity-70">
                    Expands the canvas while keeping the center consistent. Excellent for turning a portrait into a
                    cinematic wide shot.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Midjourney Art FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What is the best prompt for photorealistic people?",
                  a: "Avoid 'realistic' or 'hyperdetailed.' Instead, use photography terms: 'Shot on 85mm lens, f/1.8, high-end commercial fashion photography, pore-level detail, natural skin texture, soft shadows.' Also, ensure you are using --v 6.0.",
                },
                {
                  q: "How do I maintain a consistent character in Midjourney?",
                  a: "Use the '--cref' parameter followed by the image URL of your character. You can also use '--cw' (Character Weight) from 0 to 100 to control how much of the character's clothing and environment is carried over.",
                },
                {
                  q: "Can Midjourney generate text now?",
                  a: "Yes, v6 is much better at text. Put the text you want in quotation marks, like: 'a neon sign that says \"GPTPrompts\" in a dark alley.' Ensure you are using --v 6.0.",
                },
                {
                  q: "What does '--stylize' actually do?",
                  a: "The '--stylize' (or '--s') parameter controls how much of Midjourney's default aesthetic is applied. A low value (0-100) follows your prompt literally. A high value (750-1000) produces more artistic, often 'prettier' images but may ignore some specific instructions.",
                },
                {
                  q: "How do I use Style References (--sref) for branding?",
                  a: "Upload your brand's style guide or a collection of your brand's photos. Use those URLs with --sref to ensure every generated asset matches your brand's color palette and mood.",
                },
                {
                  q: "What is 'Personalization' in Midjourney?",
                  a: "By using the '--p' parameter, Midjourney uses your history of rankings and likes to tailor images to your personal taste. You can also share your 'personalization code' with others.",
                },
                {
                  q: "How do I prompt for architectural renderings?",
                  a: "Focus on materials and time of day. 'Minimalist concrete villa, large glass panels, brutalist influence, dusk lighting, interior warm glow, 8k resolution, architectural photography style.'",
                },
                {
                  q: "What are 'Negative Prompts' in Midjourney?",
                  a: "Use the '--no' parameter. For example, '--no people' or '--no trees'. This tells the model what to explicitly exclude from the final generation.",
                },
                {
                  q: "Can I change the aspect ratio after generating?",
                  a: "Yes, using the 'Zoom Out' or 'Pan' tools. You can change the aspect ratio of the expansion to turn a square image into a landscape or portrait.",
                },
                {
                  q: "What is the 'Chaos' parameter?",
                  a: "The '--chaos' (or '--c') parameter (0-100) controls how different the four initial grid images are from each other. High chaos leads to more unexpected and varied results.",
                },
                {
                  q: "How do I upscale images without losing detail?",
                  a: "Midjourney has built-in upscalers ('Subtle' and 'Creative'). Creative often adds more detail that wasn't there before, while Subtle stays true to the original pixels.",
                },
                {
                  q: "Is there a way to prompt for specific color palettes?",
                  a: "Yes. Use terms like 'Pastel palette,' 'Monochromatic blue,' or 'High-contrast black and white.' You can also use --sref with a color swatch image.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-pink-600 transition-colors text-left">
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
                    className={`transition-colors ${link.href === "/midjourney-prompts" ? "text-pink-600 font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
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
              <li className="pt-8 mt-8 border-t border-background/10">
                <p className="text-[10px] opacity-30 uppercase tracking-widest leading-loose">
                  © 2025 GPTPrompts.AI <br />
                  All Rights Reserved.
                </p>
              </li>
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
