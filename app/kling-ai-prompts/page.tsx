import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Film } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Kling AI Prompts: Exploring New Frontiers in Creative AI | GPTPrompts.AI",
  description:
    "Master Kling AI with advanced text-to-video and image-to-video prompts. Learn motion control, camera movement, temporal coherence, and creative cinematography techniques.",
}

export default function KlingAIPromptsPage() {
  const faqItems = [
    {
      q: "What is Kling AI and why does it matter for creators?",
      a: "Kling AI is a powerful text-to-video and image-to-video generation platform that emphasizes motion, camera movement, and temporal coherence. It matters for creators and marketers because it enables professional-quality video generation from simple text descriptions.",
    },
    {
      q: "How does Kling AI's prompting differ from text-only models?",
      a: "Kling requires attention to motion, camera movement, timing, and temporal coherence. You describe not just what appears on screen, but how it moves, changes, and evolves over time—like directing a film rather than just describing an image.",
    },
    {
      q: "What are the core components of effective Kling prompts?",
      a: "Key components include: Subject (what's in the video), Environment (setting and context), Style (artistic direction), Motion (how things move), Camera (angles and movement), and Duration (video length and pacing).",
    },
    {
      q: "How do I create cinematic Kling prompts for storytelling?",
      a: "Focus on narrative beats: establish the scene, introduce action, build tension, and resolve. Use cinematic language like 'tracking shot', 'dolly in', 'crane up', and describe how emotions evolve throughout the sequence.",
    },
    {
      q: "What techniques work best for product marketing videos?",
      a: "Highlight product features with smooth camera movements. Use 360-degree rotation, zoom-ins on details, and transitions between use cases. Include scale references and lifestyle context to show value.",
    },
    {
      q: "How do I use negative prompts effectively in Kling?",
      a: "Specify what you DON'T want to appear: 'no text overlay', 'no flickering', 'no jerky movements'. This helps Kling avoid common issues and maintains consistent quality throughout the video.",
    },
    {
      q: "Can I create multi-scene storyboarded videos with Kling?",
      a: "Yes. Use multiple Kling prompts for different scenes, then combine them. Structure each prompt to transition smoothly into the next, maintaining consistent style, lighting, and pacing across scenes.",
    },
    {
      q: "How does image-to-video prompting differ from text-to-video?",
      a: "Image-to-video starts with a visual reference and animates it. Your prompt describes how the image should move, evolve, or transform—the starting point is visual instead of textual.",
    },
    {
      q: "What's the best way to describe camera movement in Kling?",
      a: "Use specific terms: 'tracking shot left to right', 'dolly zoom', 'pan upward', 'crane down', 'orbiting around subject'. Be precise about speed and smoothness.",
    },
    {
      q: "How can I experiment and iterate on Kling prompts?",
      a: "Start with simple prompts to understand Kling's capabilities, then gradually add complexity. Test variations of camera movement, pacing, and style. Save successful prompts as templates.",
    },
    {
      q: "What are common mistakes when prompting Kling AI?",
      a: "Avoid overly complex narratives in single prompts, vague motion descriptions, and conflicting style directions. Keep prompts focused and clear about what you want to see happen on screen.",
    },
    {
      q: "How do I prepare assets and optimize for social platforms with Kling?",
      a: "Generate videos in different aspect ratios (16:9 for YouTube, 9:16 for TikTok, 1:1 for Instagram). Plan pacing for short-form content and use strong hooks in the first frame.",
    },
  ]

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kling AI Prompts: Exploring New Frontiers in Creative AI",
    description: "Master Kling AI with advanced text-to-video and image-to-video prompts for creative content.",
    author: { "@type": "Organization", name: "GPTPrompts.AI" },
    publisher: { "@type": "Organization", name: "GPTPrompts.AI" },
  }

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-32 px-6 md:px-12 relative overflow-hidden">
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
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-8">
            Kling AI <br />
            <span className="italic opacity-90">Creative Prompts.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-pretty leading-relaxed opacity-90">
            Direct cinematic videos with AI. Master text-to-video and image-to-video prompting for storytelling,
            marketing, and artistic vision.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-6">Sections</h3>
              <ul className="space-y-4 text-sm font-medium">
                {[
                  { id: "intro", label: "What is Kling AI", num: "01" },
                  { id: "core-components", label: "Core Components", num: "02" },
                  { id: "use-cases", label: "Prompt Patterns by Use Case", num: "03" },
                  { id: "advanced", label: "Advanced Techniques", num: "04" },
                  { id: "workflow", label: "Creator Workflow Tips", num: "05" },
                  { id: "faq", label: "FAQ", num: "06" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-purple-600 transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs opacity-50 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        {/* Content */}
        <div className="lg:col-span-9 space-y-16">
          <section id="intro" className="space-y-6">
            <div>
              <span className="text-purple-600 font-bold text-sm">Section 01</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">What is Kling AI and Why It Matters</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kling AI is a powerful text-to-video and image-to-video generation platform that emphasizes motion, camera
              movement, and temporal coherence. For creators and marketers, it opens possibilities for generating
              professional-quality video content from simple text descriptions or visual references, without expensive
              production equipment or teams.
            </p>
          </section>

          <section id="core-components" className="space-y-6">
            <div>
              <span className="text-purple-600 font-bold text-sm">Section 02</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Core Prompt Components</h2>
            </div>

            <div className="space-y-4">
              {[
                { title: "Subject", desc: "What's in the video—characters, objects, and primary elements" },
                { title: "Environment", desc: "Setting and context—locations, time of day, weather, atmosphere" },
                { title: "Style", desc: "Artistic direction—cinematic, documentary, animated, surreal" },
                { title: "Motion", desc: "How things move—gestures, walking, flying, transforming" },
                { title: "Camera", desc: "Angles and movement—tracking shots, pans, zooms, crane movements" },
                { title: "Duration", desc: "Video length and pacing—15 seconds, 1 minute, fast-paced or slow" },
              ].map((item, idx) => (
                <Card key={idx} className="p-4 border-l-4 border-purple-600">
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="use-cases" className="space-y-6">
            <div>
              <span className="text-purple-600 font-bold text-sm">Section 03</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Prompt Patterns by Use Case</h2>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-purple-50 border-purple-200">
                <h3 className="font-bold text-xl mb-3">Cinematic Storytelling</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Focus on narrative beats: setup, action, tension, resolution. Use cinematic language and emotional
                  arcs.
                </p>
                <Card className="bg-slate-900 text-slate-100 p-3 font-mono text-xs rounded overflow-auto">
                  <pre>{`A character stands at dawn overlooking a vast valley. Camera tracks slowly toward them as they turn and begin walking. Wind-swept, epic orchestral music builds. The scene transitions to them reaching a mountaintop at golden hour.`}</pre>
                </Card>
              </Card>

              <Card className="p-6 bg-purple-50 border-purple-200">
                <h3 className="font-bold text-xl mb-3">Product Marketing Videos</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Highlight features with smooth camera movements and scale references.
                </p>
                <Card className="bg-slate-900 text-slate-100 p-3 font-mono text-xs rounded overflow-auto">
                  <pre>{`Product rotates slowly on white background. Camera dolly-zooms to show fine details. Transitions to lifestyle shot: person using product in bright, modern setting. Motion is smooth and professional.`}</pre>
                </Card>
              </Card>

              <Card className="p-6 bg-purple-50 border-purple-200">
                <h3 className="font-bold text-xl mb-3">Artistic & Experimental</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Push creative boundaries with surreal visuals and abstract motion.
                </p>
                <Card className="bg-slate-900 text-slate-100 p-3 font-mono text-xs rounded overflow-auto">
                  <pre>{`Abstract shapes morph and float through a neon-lit void. Colors shift from blue to purple to pink. Camera orbits around the forms as they dance and reshape organically.`}</pre>
                </Card>
              </Card>
            </div>
          </section>

          <section id="advanced" className="space-y-6">
            <div>
              <span className="text-purple-600 font-bold text-sm">Section 04</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Advanced Techniques</h2>
            </div>

            <Card className="p-6 bg-purple-50 border-l-4 border-purple-600">
              <h3 className="font-bold text-lg mb-3">Multi-Prompt Storyboarding</h3>
              <p className="text-muted-foreground mb-3">
                Create complex narratives by combining multiple Kling prompts as scenes, ensuring smooth transitions and
                consistent visual language.
              </p>
            </Card>

            <Card className="p-6 bg-purple-50 border-l-4 border-purple-600">
              <h3 className="font-bold text-lg mb-3">Negative Prompts</h3>
              <p className="text-muted-foreground mb-3">
                Specify what NOT to appear: "no text overlay, no flickering, no jerky movements" to maintain quality and
                avoid common issues.
              </p>
            </Card>

            <Card className="p-6 bg-purple-50 border-l-4 border-purple-600">
              <h3 className="font-bold text-lg mb-3">Image-to-Video Animation</h3>
              <p className="text-muted-foreground mb-3">
                Start with a visual reference and describe how it should move, evolve, or transform—powerful for
                animating static photos or artwork.
              </p>
            </Card>
          </section>

          <section id="workflow" className="space-y-6">
            <div>
              <span className="text-purple-600 font-bold text-sm">Section 05</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Creator Workflow Tips</h2>
            </div>

            <div className="space-y-3">
              <Card className="p-4 bg-purple-50 border-purple-200">
                <p className="font-semibold text-purple-900">Iterate on Prompts</p>
                <p className="text-sm text-muted-foreground">
                  Start simple, gradually add complexity. Test variations and save successful prompts as templates.
                </p>
              </Card>

              <Card className="p-4 bg-purple-50 border-purple-200">
                <p className="font-semibold text-purple-900">Pair with Other Tools</p>
                <p className="text-sm text-muted-foreground">
                  Combine Kling videos with other creative tools—music generators, editing software, animation tools.
                </p>
              </Card>

              <Card className="p-4 bg-purple-50 border-purple-200">
                <p className="font-semibold text-purple-900">Optimize for Platforms</p>
                <p className="text-sm text-muted-foreground">
                  Generate in different aspect ratios (16:9, 9:16, 1:1). Plan pacing for short-form content with strong
                  hooks.
                </p>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-6">
            <div>
              <span className="text-purple-600 font-bold text-sm">Section 06</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="py-4 hover:no-underline">
                    <span className="text-left font-semibold text-purple-700">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-100 py-16 px-6 md:px-12 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div>
            <h3 className="text-white font-bold mb-6">Brand</h3>
            <p className="text-sm text-slate-400">
              Master AI creativity with comprehensive prompting guides for every platform and use case.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">AI Models</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-purple-400">
                  ChatGPT
                </Link>
              </li>
              <li>
                <Link href="/midjourney-prompts" className="hover:text-purple-400">
                  Midjourney
                </Link>
              </li>
              <li>
                <Link href="/stable-diffusion-prompts" className="hover:text-purple-400">
                  Stable Diffusion
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">Video AI</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/kling-ai-prompts" className="hover:text-purple-400">
                  Kling AI
                </Link>
              </li>
              <li>
                <Link href="/sora-ai-video-prompts" className="hover:text-purple-400">
                  Sora AI
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/website-links" className="hover:text-purple-400">
                  All Pages
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/careers" className="hover:text-purple-400">
                  Careers
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-12 pt-8 max-w-7xl mx-auto">
          <p className="text-sm text-slate-400">© 2026 GPTPrompts.AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
