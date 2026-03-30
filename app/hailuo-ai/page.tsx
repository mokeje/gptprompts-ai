import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Film, Camera, Award } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hailuo AI Prompts 2026: Complete Video Generation Guide (MiniMax AI)",
  description:
    "Master Hailuo AI video generation with copy-paste prompts and techniques. Learn camera movements, lighting, and advanced settings for photorealistic AI video results.",
}

export default function HailuoAIPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#ec4899] to-[#f43f5e] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Film className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Hailuo <br />
            <span className="italic opacity-90">AI.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Photorealistic video from text. Master Hailuo AI's advanced video synthesis and create stunning AI-generated
            videos with exceptional realism and motion quality.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#fb7185] mb-6">Explore Hailuo</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "What is Hailuo AI", num: "00" },
                  { id: "features", label: "Advanced Features", num: "01" },
                  { id: "accessing", label: "Accessing Platform", num: "02" },
                  { id: "prompting", label: "Prompting Mastery", num: "03" },
                  { id: "applications", label: "Real Applications", num: "04" },
                  { id: "optimization", label: "Quality Optimization", num: "05" },
                  { id: "ethical", label: "Ethics & Responsibility", num: "06" },
                  { id: "comparisons", label: "vs Other Platforms", num: "07" },
                  { id: "faq", label: "Hailuo FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#fb7185] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">What is Hailuo AI?</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Hailuo AI, also known as MiniMax AI, is a sophisticated artificial intelligence platform specializing in
              high-quality video generation from text and image inputs. Developed by MiniMax Technology, Hailuo has
              gained recognition for producing remarkably realistic and detailed AI-generated videos that often surpass
              competitors in visual quality and motion coherence.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The platform distinguishes itself through advanced video synthesis capabilities that handle complex
              scenes, realistic human movements, and natural physics simulation. Hailuo has carved a niche by focusing
              on photorealistic video generation that closely mimics real-world footage.
            </p>
          </article>

          <section id="features" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#fb7185]/10 rounded-xl">
                <Award className="w-8 h-8 text-[#fb7185]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Advanced Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Advanced Text-to-Video</h3>
                <p className="text-muted-foreground mb-4">
                  Hailuo translates detailed text descriptions into fluid video sequences with impressive accuracy,
                  handling complex prompts with multiple subjects and intricate compositions.
                </p>
              </Card>
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">High-Resolution Output</h3>
                <p className="text-muted-foreground mb-4">
                  Generate videos with crisp detail, smooth frame rates, and professional-grade resolution suitable for
                  social media, web content, and presentations.
                </p>
              </Card>
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Physics & Motion Realism</h3>
                <p className="text-muted-foreground mb-4">
                  Hailuo demonstrates strong understanding of natural movement, gravity, and physical interactions.
                  Objects fall realistically and characters move with believable weight.
                </p>
              </Card>
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Extended Video Length</h3>
                <p className="text-muted-foreground mb-4">
                  Support for longer sequences that tell more complete stories or demonstrate concepts thoroughly,
                  beyond very brief clips.
                </p>
              </Card>
            </div>
          </section>

          <section id="accessing" className="space-y-12 bg-[#fb7185]/5 p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#fb7185] font-bold uppercase tracking-widest text-sm mb-6">
                <Camera className="w-5 h-5" />
                <span>Platform Access</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Accessing Hailuo AI</h2>
              <div className="space-y-8">
                <div className="p-8 bg-white rounded-2xl border border-[#fb7185]/10">
                  <h4 className="font-bold mb-4">Web Application</h4>
                  <p className="text-sm text-muted-foreground">
                    Visit the official Hailuo website, create an account with email or phone verification, and access
                    the browser-based interface immediately.
                  </p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-[#fb7185]/10">
                  <h4 className="font-bold mb-4">Account Setup</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete email verification or phone authentication depending on regional availability. Some regions
                    have limited access or different feature availability.
                  </p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-[#fb7185]/10">
                  <h4 className="font-bold mb-4">Free & Premium Tiers</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore limited free access for testing, with paid tiers unlocking higher usage volumes, faster
                    generation, and enhanced features.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="prompting" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Mastering Hailuo AI Prompting</h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <h3>Provide Comprehensive Scene Descriptions</h3>
              <p>
                Hailuo performs best with rich, detailed prompts. Establish clear visual expectations with specific
                details about subjects, settings, and atmosphere.
              </p>

              <h3>Specify Subject Actions and Movements</h3>
              <p>
                Define what subjects should do within the frame. The more precisely you describe movements, the better
                Hailuo animates them realistically.
              </p>

              <h3>Establish Temporal Flow</h3>
              <p>
                For longer videos, describe the sequence of events. This creates narrative flow the AI can follow
                throughout the generation.
              </p>

              <h3>Define Camera Perspective and Movement</h3>
              <p>
                Include camera descriptions like "low angle looking up," "slow zoom in," or "handheld camera following."
                These shape visual perspective and cinematographic impact.
              </p>

              <h3>Set Environmental and Atmospheric Details</h3>
              <p>
                Describe weather, time of day, lighting quality, background elements. "Evening rain with neon lights
                reflecting off wet pavement" sets specific mood.
              </p>
            </div>
          </section>

          <section id="applications" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Practical Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-secondary/50 border-secondary">
                <h3 className="text-xl font-bold mb-4">Content Creators</h3>
                <p className="text-muted-foreground text-sm">
                  Generate diverse video content for social media platforms, enabling consistent posting schedules
                  without constant filming.
                </p>
              </Card>
              <Card className="p-8 bg-secondary/50 border-secondary">
                <h3 className="text-xl font-bold mb-4">Marketing & Advertising</h3>
                <p className="text-muted-foreground text-sm">
                  Create product visualizations, concept demonstrations, and attention-grabbing advertisement elements
                  with substantial cost savings.
                </p>
              </Card>
              <Card className="p-8 bg-secondary/50 border-secondary">
                <h3 className="text-xl font-bold mb-4">Filmmakers & Producers</h3>
                <p className="text-muted-foreground text-sm">
                  Use for pre-visualization and storyboarding, helping teams align on vision before expensive production
                  days.
                </p>
              </Card>
              <Card className="p-8 bg-secondary/50 border-secondary">
                <h3 className="text-xl font-bold mb-4">Educators & Artists</h3>
                <p className="text-muted-foreground text-sm">
                  Develop instructional content visualizing concepts, create artistic video art, and explore new
                  creative mediums.
                </p>
              </Card>
            </div>
          </section>

          <section id="ethical" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Ethical Considerations</h2>
            <div className="space-y-8">
              <Card className="p-8 bg-secondary/50 border-secondary">
                <h3 className="text-xl font-bold mb-4">Responsible Content Creation</h3>
                <p className="text-muted-foreground">
                  Clearly label AI-generated content when sharing publicly. Avoid creating misleading or deceptive
                  videos that could spread misinformation.
                </p>
              </Card>
              <Card className="p-8 bg-secondary/50 border-secondary">
                <h3 className="text-xl font-bold mb-4">Privacy & Consent</h3>
                <p className="text-muted-foreground">
                  Avoid generating videos featuring identifiable people without consent. Respect individuals' likeness
                  rights and privacy considerations.
                </p>
              </Card>
              <Card className="p-8 bg-secondary/50 border-secondary">
                <h3 className="text-xl font-bold mb-4">Platform Policies</h3>
                <p className="text-muted-foreground">
                  Adhere to Hailuo's content policies prohibiting violent content, explicit material, hate speech,
                  deepfakes, and illegal activities.
                </p>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Hailuo AI FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How does Hailuo compare to other video generation platforms?",
                  a: "Hailuo often produces more photorealistic results with better physics simulation and support for longer videos. Different platforms have different strengths, so compare based on your specific creative needs.",
                },
                {
                  q: "What resolution does Hailuo support?",
                  a: "Hailuo generates high-quality videos suitable for professional applications, web content, and social media. Exact specifications evolve with platform updates.",
                },
                {
                  q: "How long do videos take to generate?",
                  a: "Generation time varies based on video length, complexity, and current server load. Longer or more complex videos require more processing time.",
                },
                {
                  q: "Can I use generated videos commercially?",
                  a: "Check Hailuo's current terms of service regarding usage rights. Generally, videos generated from your account are yours for personal and commercial use.",
                },
                {
                  q: "What if my generation fails or produces poor results?",
                  a: "Review prompts for policy compliance, try generation at different times, verify account standing, or increase prompt specificity and regenerate with refinements.",
                },
                {
                  q: "How do I optimize video quality?",
                  a: "Start with clear objectives, generate initial videos, analyze results, modify prompts to address shortcomings, and regenerate until satisfied with quality.",
                },
                {
                  q: "Can Hailuo generate videos with multiple subjects interacting?",
                  a: "While Hailuo handles single subjects very well, multiple people interacting can be challenging. Complex human interactions and precise gestures may vary in quality.",
                },
                {
                  q: "Should I be concerned about temporal consistency?",
                  a: "Hailuo generally performs well with temporal consistency, but occasional frame inconsistencies can occur in very complex scenes or longer videos. Testing is recommended.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#fb7185] transition-colors text-left">
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
                    className={`transition-colors ${link.href === "/hailuo-ai" ? "text-[#fb7185] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
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
