import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Trending AI Photo Prompts 2026: 100+ Viral Styles with Copy-Paste Prompts",
  description:
    "Discover the hottest AI photo prompts of 2026. 100+ copy-paste prompts for trending styles including Explorecore, Vaporwave, Claymation, and more. Updated for the latest trends.",
}

export default function TrendingPhotoPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Guide",
            headline: "Trending AI Photo Prompts 2026: Stay Ahead of the Visual Curve",
            description: "Comprehensive guide to trending AI photo styles and prompts for 2026",
            author: { "@type": "Organization", name: "GPTPrompts.AI" },
            datePublished: "2026-01-07",
            image: "/ai-photo-trends-2026.jpg",
          }),
        }}
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
            Trending AI Photo Prompts 2026
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-pretty leading-relaxed opacity-90">
            Master the Nano Banana era, emotional vibe-coding, and the 2026 visual zeitgeist. From Explorecore to
            Claymation, learn the exact prompts top creators are using to generate viral AI photos.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Navigation */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-6">Contents</h3>
              <ul className="space-y-4 text-sm font-medium">
                {[
                  { id: "nano-banana", label: "The Nano Banana Era", num: "01" },
                  { id: "trends", label: "High-Velocity Trends", num: "02" },
                  { id: "library", label: "Prompt Library", num: "03" },
                  { id: "techniques", label: "Advanced Techniques", num: "04" },
                  { id: "faq", label: "FAQ", num: "05" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-muted-foreground hover:text-purple-600 transition-colors flex justify-between"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs opacity-50">{item.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        {/* Content */}
        <div className="lg:col-span-9 space-y-24 max-w-4xl">
          <article id="nano-banana" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              The Nano Banana Era: Why Precision is the New Trend
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground mb-6">
              In 2026, the AI image landscape has shifted from "generic photorealism" to "emotional vibe-coding." With
              the release of models like Google Gemini Nano Banana and Midjourney v7, the ability to generate
              scroll-stopping art depends on knowing the current aesthetic zeitgeist.
            </p>
            <p className="text-xl leading-relaxed text-muted-foreground">
              The trend is "Imperfect by Design." Users are moving away from plastic, over-smoothed AI faces toward
              "Notes App Chic" and "Lo-Fi Realism." This guide explores the viral styles defining the year with 100+
              copy-paste prompts.
            </p>
          </article>

          <article id="trends" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">High-Velocity Visual Trends for 2026</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Explorecore</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  A desire for calm, expansive, and "breathable" visuals. Think minimalist mountain ranges with soft
                  serif typography overlays.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm">
                  "A serene minimalist landscape with soft pastel mountains, negative space, elegant serif typography,
                  ultra-calm atmosphere, editorial magazine aesthetic."
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Vaporwave Nostalgia (90s Edit)</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Neon pinks, tape glitches, and pixel art textures that evoke early computing.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm">
                  "Vaporwave aesthetic with neon pink and teal neon signs, VHS tape glitch effects, pixel art textures,
                  1990s computer aesthetic, cyberpunk lounge."
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Claymation & Felt Styles</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Using prompts to turn real photos into stop-motion characters.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm">
                  "Transform this photo into a handcrafted felt puppet style with visible stitching, soft fabric
                  texture, stop-motion aesthetic, warm studio lighting."
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Cinematic Glow</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Creating portraits with a modern neon-lit lounge aesthetic.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm">
                  "An ultra-realistic portrait in a modern neon-lit lounge, teal shadows, warm halo light behind hair,
                  high-grain 35mm film style, professional photography, bokeh background."
                </div>
              </div>
            </div>
          </article>

          <article id="library" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">The Master Trending Library (Copy-Paste)</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Cinematic Glow</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "An ultra-realistic portrait in a modern neon-lit lounge, teal shadows, warm halo light behind hair,
                  high-grain 35mm film style, professional photography, bokeh background."
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">The Origami Wildlife</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "A majestic tiger made entirely of folded gold-foil origami paper, placed on a textured wooden table,
                  soft morning sunlight, macro detail, highly intricate."
                </div>
              </div>

              {/* Additional templates can be added here */}
            </div>
          </article>

          <article id="techniques" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Advanced Techniques for 2026</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Master these frameworks to elevate your prompt engineering and create consistently viral AI photos.
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                <strong>Dynamic Motion:</strong> To make photos feel real, prompt for motion. Static balloons look fake;
                floating balloons with "helium sway" look authentic.
              </p>
              <p className="text-lg">
                <strong>Emotional Vibe-Coding:</strong> Instead of describing what you see, describe what you feel.
                "Nostalgic warmth" beats "warm lighting."
              </p>
              <p className="text-lg">
                <strong>Texture Density:</strong> Specify materials in visceral detail: "rough linen," "weathered
                brass," "frosted glass."
              </p>
              {/* Additional techniques can be added here */}
            </div>
          </article>

          <article id="faq" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "What's the difference between Nano Banana and Midjourney v7?",
                  a: "Nano Banana excels at emotional consistency and nuanced color grading. Midjourney v7 is better for motion and anatomical precision.",
                },
                {
                  q: "How do I prompt for 'Imperfect by Design'?",
                  a: 'Use phrases like "realistic imperfections," "natural grain," "slight motion blur," and "authentic skin texture." Avoid words like "flawless" or "perfect."',
                },
                {
                  q: "Can I mix Explorecore with Vaporwave?",
                  a: "Yes, hybrid aesthetics are trending. Use: 'Explorecore minimalist landscape with vaporwave neon accents and retro-futuristic elements.'",
                },
                {
                  q: "What camera settings should I include?",
                  a: "Specificity wins. Use '85mm f/1.2 lens, ISO 400, soft rim lighting' instead of generic 'cinematic.'",
                },
                {
                  q: "How long should trending prompts be?",
                  a: "Sweet spot is 40-80 words. Too short lacks detail; too long confuses the model.",
                },
                // Additional FAQ items can be added here
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-lg font-semibold hover:text-purple-600">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6 md:px-12 mt-32">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">AI Models</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/midjourney-prompts" className="hover:text-white transition-colors">
                    Midjourney
                  </Link>
                </li>
                <li>
                  <Link href="/stable-diffusion-prompts" className="hover:text-white transition-colors">
                    Stable Diffusion
                  </Link>
                </li>
                <li>
                  <Link href="/dalle-3-guide" className="hover:text-white transition-colors">
                    DALL-E 3
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Photo Guides</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/ai-family-photo-prompts" className="hover:text-white transition-colors">
                    Family Photos
                  </Link>
                </li>
                <li>
                  <Link href="/ai-couple-photo-prompts" className="hover:text-white transition-colors">
                    Couple Photos
                  </Link>
                </li>
                <li>
                  <Link href="/cinematic-8k-ai-prompts" className="hover:text-white transition-colors">
                    Cinematic 8K
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/prompt-engineering-fundamentals" className="hover:text-white transition-colors">
                    Fundamentals
                  </Link>
                </li>
                <li>
                  <Link href="/prompt-best-practices" className="hover:text-white transition-colors">
                    Best Practices
                  </Link>
                </li>
                <li>
                  <Link href="/website-links" className="hover:text-white transition-colors">
                    All Pages
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 flex justify-between items-center">
            <p className="text-sm text-slate-400">© 2026 GPTPrompts.AI - All Rights Reserved</p>
            <Link href="/" className="font-bold hover:text-purple-400 transition-colors">
              GPTPrompts.AI
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
