import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Midjourney Prompts: 130+ Best AI Prompts & Prompt Formulas for Stunning Images (2026 Guide)",
  description:
    "Complete Midjourney prompts guide with 130+ copy-paste prompts, advanced parameters, style references, and techniques for logos, characters, products, and more.",
  keywords: "Midjourney prompts, Midjourney guide, Discord AI image generation, prompt engineering",
}

export default function MidjourneyPromptsGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <nav className="bg-background/40 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/website-links" className="hover:text-foreground transition-colors">
              Prompts Library
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Midjourney Prompts Guide</span>
          </div>
        </div>
      </nav>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Midjourney Prompts: 130+ Best AI Prompts & Prompt Formulas for Stunning Images (2026 Guide)
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Master Midjourney with 130+ copy-paste prompts, advanced parameters, style references, and techniques for
            creating logos, characters, products, landscapes, and more.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">What Is Midjourney and Why Prompts Matter</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Midjourney is a powerful AI image generator that turns short text prompts into detailed, stylized images
              for art, branding, products, and social media content. Its latest versions support advanced controls like
              aspect ratios, style references, and parameters that give creators very fine control over composition and
              style.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Midjourney works inside Discord: you type a text prompt (and optional parameters), and it returns a grid
              of images you can upscale or vary. Because the model is highly sensitive to wording, small prompt changes
              can massively affect color, lighting, realism, and mood. Learning how to structure prompts systematically
              is the difference between "random cool images" and predictable, brand-ready outputs.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">How Midjourney Prompts Work (Core Formula)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most high-quality Midjourney prompts follow a repeatable structure rather than random words. A simple and
              reliable formula is:
            </p>
            <div className="bg-secondary/30 border border-secondary p-6 rounded-lg my-6 font-mono text-sm">
              <p className="text-foreground">
                Subject + Key Details + Style + Setting + Lighting + Camera/Composition + Parameters
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Essential Midjourney Parameters (Quick Reference)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Parameters are added at the end of your prompt and control how Midjourney renders the image:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">--ar (aspect ratio):</strong> Defines image dimensions, such as --ar
                1:1 for square, 16:9 for YouTube thumbnails, or 9:16 for vertical Reels/TikTok.
              </li>
              <li>
                <strong className="text-foreground">--stylize or --s:</strong> Controls how strongly Midjourney's
                default aesthetic is applied; high values give more artistic, stylized results.
              </li>
              <li>
                <strong className="text-foreground">--chaos:</strong> Adds randomness; higher chaos generates more
                unexpected and varied images.
              </li>
              <li>
                <strong className="text-foreground">--quality or --q:</strong> Adjusts rendering detail and time; 1 is
                standard, lower values render faster at lower detail.
              </li>
              <li>
                <strong className="text-foreground">--seed:</strong> Sets a starting noise seed so you can reproduce or
                slightly vary previous results consistently.
              </li>
              <li>
                <strong className="text-foreground">--no:</strong> Negative prompt to exclude elements, like --no text,
                watermark.
              </li>
              <li>
                <strong className="text-foreground">--niji / anime models:</strong> Switches to anime-optimized models
                if you need a more stylized Japanese-inspired look.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Midjourney Logo Prompts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Logos benefit from simplicity, clear shapes, and a strong design direction so they still work at small
              sizes. Include niche, tone, and audience so Midjourney suggests concepts that feel right for your market.
            </p>
            <div className="bg-secondary/30 border border-secondary p-6 rounded-lg my-6 space-y-3">
              <p className="text-foreground font-semibold mb-3">Example ideas:</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  Minimalist line-art logo for a London fintech startup targeting Gen Z investors, clean blue and white
                  palette, flat vector style, modern icon, white background, --ar 1:1 --no text.
                </li>
                <li>
                  Retro badge logo for an Australian surf café, warm vintage colors, hand-drawn waves and sun, textured
                  but simple, high contrast, --ar 1:1 --no text.
                </li>
                <li>
                  Geometric logo for a German SaaS analytics platform, abstract shapes forming a graph, cool blues and
                  purples, tech style, negative space, --ar 1:1 --no text.
                </li>
                <li>
                  Elegant monogram logo for a Paris fashion boutique, gold on black, luxury, minimal flourishes,
                  centered layout, vector, --ar 1:1 --no text.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Midjourney Character & Portrait Prompts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Character prompts are perfect for story IPs, mascot concepts, VTubers, and social media personas. You get
              better results when you specify face shape, outfit, personality, and camera style.
            </p>
            <div className="bg-secondary/30 border border-secondary p-6 rounded-lg my-6 space-y-3">
              <p className="text-foreground font-semibold mb-3">Example ideas:</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  Confident female tech founder in her early 30s from New York, smart casual outfit, subtle makeup,
                  standing in a modern office, realistic portrait photography, soft window light, shallow depth of
                  field, --ar 3:4.
                </li>
                <li>
                  Anime-style esports character from Berlin, neon streetwear, bold purple and cyan palette, dynamic
                  pose, cyberpunk city background, glowing signs, --ar 9:16 --niji.
                </li>
                <li>
                  Cozy bookish character from London, oversized sweater, round glasses, warm café interior, painterly
                  illustration style, soft vignette, --ar 3:4.
                </li>
                <li>
                  Fantasy knight from medieval France, detailed armor with fleur-de-lis accents, stormy sky, dramatic
                  rim lighting, cinematic concept art style, --ar 16:9.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Advanced Midjourney Prompt Techniques</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Once the basics feel comfortable, there are several advanced techniques that give you more control over
              style and consistency:
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Style references (--sref):</strong> You can attach one or more style
                reference images so Midjourney mimics their aesthetic.
              </li>
              <li>
                <strong className="text-foreground">Image weight (--iw):</strong> When combining text prompts with
                reference images, image weight controls how strongly Midjourney follows the image versus the text
                description.
              </li>
              <li>
                <strong className="text-foreground">Negative prompts and exclusions:</strong> Using --no carefully helps
                avoid clutter or unwanted artifacts, especially in backgrounds and product shots.
              </li>
              <li>
                <strong className="text-foreground">Chaos and weirdness:</strong> Adjusting --chaos and experimental
                options can push images toward unusual or experimental looks for concept exploration.
              </li>
            </ul>
          </section>

          <section className="mt-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/chatgpt-prompts-midjourney"
                className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <p className="font-semibold text-foreground mb-1">ChatGPT for Midjourney</p>
                <p className="text-sm text-muted-foreground">120+ ChatGPT prompt generator ideas for Midjourney</p>
              </Link>
              <Link
                href="/website-links"
                className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <p className="font-semibold text-foreground mb-1">Prompts Library</p>
                <p className="text-sm text-muted-foreground">Browse all AI image generation prompting guides</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
