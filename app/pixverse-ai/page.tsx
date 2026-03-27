import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Video, Play, Sparkles } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pixverse AI Video Generation: Complete Prompting Guide | GPTPrompts.AI",
  description:
    "Master Pixverse AI with our ultimate guide to AI video generation. Learn text-to-video prompting, image-to-video techniques, and create stunning visual content from text descriptions.",
}

export default function PixverseAIPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Video className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Pixverse <br />
            <span className="italic opacity-90">AI.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Transform ideas into motion. Master AI video generation with text-to-video and image-to-video prompting
            techniques.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#a78bfa] mb-6">Explore Pixverse</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "What is Pixverse", num: "00" },
                  { id: "features", label: "Key Features", num: "01" },
                  { id: "getting-started", label: "Getting Started", num: "02" },
                  { id: "prompting", label: "Prompting Mastery", num: "03" },
                  { id: "styles", label: "Video Styles", num: "04" },
                  { id: "applications", label: "Use Cases", num: "05" },
                  { id: "optimization", label: "Quality Tips", num: "06" },
                  { id: "limitations", label: "Limitations", num: "07" },
                  { id: "faq", label: "Pixverse FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#a78bfa] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">What is Pixverse AI?</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Pixverse AI is an innovative artificial intelligence platform specializing in video generation from text
              descriptions and images. This cutting-edge tool allows users to create videos without traditional filming,
              editing software expertise, or expensive production equipment.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              By simply describing a scene or providing a reference image, Pixverse transforms ideas into motion video
              content. The platform represents a significant advancement in generative AI technology, moving beyond
              static image generation to dynamic video creation.
            </p>
          </article>

          <section id="features" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#a78bfa]/10 rounded-xl">
                <Play className="w-8 h-8 text-[#a78bfa]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Key Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Text-to-Video</h3>
                <p className="text-muted-foreground mb-4">
                  Write descriptive prompts explaining scenes, actions, moods, and styles. Pixverse AI generates
                  corresponding video footage that brings your imagination to life.
                </p>
              </Card>
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Image-to-Video</h3>
                <p className="text-muted-foreground mb-4">
                  Upload photos or artwork and describe desired animations. Pixverse creates dynamic video from static
                  images, perfect for animating designs and bringing art to life.
                </p>
              </Card>
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Multiple Styles</h3>
                <p className="text-muted-foreground mb-4">
                  Choose from realistic, anime, artistic, and sci-fi aesthetics. Match video style to your brand,
                  audience, or creative vision.
                </p>
              </Card>
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Camera Control</h3>
                <p className="text-muted-foreground mb-4">
                  Specify camera movements like pans, zooms, and tracking shots to define your video's cinematographic
                  feel.
                </p>
              </Card>
            </div>
          </section>

          <section id="getting-started" className="space-y-12 bg-[#a78bfa]/5 p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#a78bfa] font-bold uppercase tracking-widest text-sm mb-6">
                <Sparkles className="w-5 h-5" />
                <span>Quick Start</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Getting Started with Pixverse</h2>
              <div className="space-y-8">
                <div className="p-8 bg-white rounded-2xl border border-[#a78bfa]/10">
                  <h4 className="font-bold mb-4">Step 1: Create Account</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit Pixverse's website and sign up with email or social login. New users receive free credits to
                    explore capabilities.
                  </p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-[#a78bfa]/10">
                  <h4 className="font-bold mb-4">Step 2: Choose Mode</h4>
                  <p className="text-sm text-muted-foreground">
                    Select text-to-video mode for creating from descriptions or image-to-video mode for animating static
                    images.
                  </p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-[#a78bfa]/10">
                  <h4 className="font-bold mb-4">Step 3: Generate & Refine</h4>
                  <p className="text-sm text-muted-foreground">
                    Write your prompt, configure settings, generate, and refine results until you achieve your desired
                    video.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="prompting" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Mastering Pixverse Prompting</h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <h3>Provide Comprehensive Scene Descriptions</h3>
              <p>
                Pixverse performs best with rich, detailed prompts. Instead of "a sunset," describe "a breathtaking
                golden hour sunset over ocean waves with warm orange and pink hues reflecting off the water."
              </p>

              <h3>Specify Subject Actions</h3>
              <p>
                Define what subjects should do. "A woman dancing joyfully in a modern living room with graceful, flowing
                movements" creates clear action expectations.
              </p>

              <h3>Define Camera Perspective</h3>
              <p>
                Include cinematographic direction. Say "wide establishing shot," "slow zoom in," or "handheld camera
                following behind" to shape visual perspective.
              </p>

              <h3>Set Environmental Details</h3>
              <p>
                Describe weather, lighting, background elements, and atmosphere. "During golden hour with soft,
                directional sunlight" enhances realism.
              </p>
            </div>
          </section>

          <section id="applications" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Real-World Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-secondary/50 border-secondary">
                <h3 className="text-xl font-bold mb-4">Content Creation</h3>
                <p className="text-muted-foreground text-sm">
                  Generate eye-catching video clips for Instagram, TikTok, and YouTube without constant filming or
                  expensive equipment.
                </p>
              </Card>
              <Card className="p-8 bg-secondary/50 border-secondary">
                <h3 className="text-xl font-bold mb-4">Marketing & Advertising</h3>
                <p className="text-muted-foreground text-sm">
                  Create product demonstrations, concept visualizations, and attention-grabbing advertisement elements
                  quickly and cost-effectively.
                </p>
              </Card>
              <Card className="p-8 bg-secondary/50 border-secondary">
                <h3 className="text-xl font-bold mb-4">Educational Content</h3>
                <p className="text-muted-foreground text-sm">
                  Visualize abstract concepts, historical events, scientific processes, and literary scenes to make
                  learning more engaging.
                </p>
              </Card>
              <Card className="p-8 bg-secondary/50 border-secondary">
                <h3 className="text-xl font-bold mb-4">Creative Art</h3>
                <p className="text-muted-foreground text-sm">
                  Explore new artistic mediums by generating surreal scenes, abstract visuals, and experimental video
                  art.
                </p>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Pixverse AI FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How long does video generation take?",
                  a: "Generation time varies based on video length, complexity, and server load. Typically, short clips (5-15 seconds) generate within minutes, while longer videos may take longer.",
                },
                {
                  q: "What aspect ratios does Pixverse support?",
                  a: "Pixverse supports multiple aspect ratios including vertical (TikTok/Reels), widescreen (YouTube), and square formats for flexible platform posting.",
                },
                {
                  q: "Can I edit generated videos afterward?",
                  a: "Yes, you can extend video length, modify frames, adjust styling, and combine multiple clips using Pixverse's editing tools or external video editors.",
                },
                {
                  q: "How detailed should my prompts be?",
                  a: "The more detailed, the better. Include subject descriptions, actions, camera movements, lighting, atmosphere, and style preferences for optimal results.",
                },
                {
                  q: "What video styles are available?",
                  a: "Pixverse supports realistic photographic styles, anime and cartoon aesthetics, artistic and painterly looks, and sci-fi or fantasy themes.",
                },
                {
                  q: "Can Pixverse generate videos with text overlays?",
                  a: "While Pixverse focuses on video generation, you can add text overlays in post-production using video editing software for complete control.",
                },
                {
                  q: "Is there a limit to video length?",
                  a: "Pixverse supports various video lengths, but longer videos require more processing time and may use more credits on paid plans.",
                },
                {
                  q: "Can I use generated videos commercially?",
                  a: "Check Pixverse's current terms of service. Generally, videos generated from your account belong to you for personal and commercial use.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#a78bfa] transition-colors text-left">
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Video & Creative</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Midjourney Prompts", href: "/midjourney-prompts" },
                { label: "Stable Diffusion", href: "/stable-diffusion-prompts" },
                { label: "Pixverse AI", href: "/pixverse-ai" },
                { label: "Hailuo AI", href: "/hailuo-ai" },
                { label: "Image Prompts", href: "/image-prompts" },
                { label: "Story Prompts", href: "/story-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/pixverse-ai" ? "text-[#a78bfa] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
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
