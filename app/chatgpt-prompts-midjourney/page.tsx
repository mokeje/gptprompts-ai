import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ChatGPT Prompts for Midjourney: 120+ AI Prompt Generator Ideas (2026 Guide)",
  description:
    "Master ChatGPT prompts for Midjourney with 120+ prompt templates for logos, characters, products, social media, concept art, and advanced workflows. Complete guide with copy-paste prompts.",
  keywords: "ChatGPT Midjourney prompts, Midjourney prompt generator, AI art prompts, image generation prompts",
}

export default function ChatGPTMidjourneyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Breadcrumb Navigation */}
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
            <span className="text-foreground font-medium">ChatGPT for Midjourney</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            ChatGPT Prompts for Midjourney: 120+ AI Prompt Generator Ideas (2026 Guide)
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Master the art of generating Midjourney prompts with ChatGPT. Learn how to transform rough ideas into
            polished, parameter-aware prompts that produce stunning visual results every time.
          </p>
        </header>

        {/* Content Sections */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Why Use ChatGPT to Write Midjourney Prompts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ChatGPT works extremely well as a "prompt engineer assistant" that transforms rough image ideas into
              polished, parameter-aware Midjourney prompts. Instead of manually crafting every description, you can
              describe your concept once and let ChatGPT generate multiple detailed prompt variations in seconds. This
              is especially powerful when batch-creating prompts for logos, products, social media creatives, or entire
              visual campaigns.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Creators and marketers already use ChatGPT to expand, refine, and systematize their Midjourney prompts,
              often following step-by-step workflows that involve setting context, feeding examples, and then generating
              structured outputs. Combined with Midjourney's own prompt rules, this makes it much easier to get
              repeatable, on-brand images instead of random results.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Base Framework: Turn ChatGPT into a Midjourney Prompt Engineer
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Before you ask for any art, you want to "program" ChatGPT with a clear role and structure. A reusable
              setup prompt can look like this:
            </p>
            <div className="bg-secondary/30 border border-secondary p-6 rounded-lg my-6 font-mono text-sm">
              <p className="text-foreground">
                "You are a Midjourney prompt engineer. For every idea I give you, generate 5 detailed Midjourney prompts
                using this structure: Subject + key details + style + setting + lighting + camera/composition +
                Midjourney parameters (like --ar, --stylize, --chaos, --seed, --no).
                <br />
                <br />
                Ask me 3 clarifying questions first, then output the prompts as a bullet list, one line per prompt, no
                commentary."
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              This pattern reflects real community practice where users ask ChatGPT to "act as a Midjourney prompt
              engineer" and follow strict format rules. By forcing clarifying questions first, you ensure that prompts
              pick up important details such as target platform, audience, colors, and aspect ratio.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">ChatGPT Prompts for Midjourney Logos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Logo prompt generation is a high-value use case because logos must stay simple, scalable, and on-brand.
              ChatGPT can take a short brand description and output multiple Midjourney logo prompts that all follow a
              consistent structure.
            </p>
            <div className="bg-secondary/30 border border-secondary p-6 rounded-lg my-6 space-y-4">
              <div>
                <p className="text-foreground font-semibold mb-2">Meta-prompt ideas (what users paste into ChatGPT):</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    "Act as a Midjourney logo prompt engineer. Ask me 5 questions about my brand name, sector, target
                    audience, and desired style. Then generate 10 minimalist logo prompts using vector/flat design
                    language, white background, and --ar 1:1, with no extra text in the image."
                  </li>
                  <li>
                    "I will describe a startup in one sentence. Turn it into 8 different Midjourney logo prompts, each
                    exploring a different visual concept (icon-based, lettermark, mascot, abstract shape, badge), and
                    always specify a clear color palette and overall mood."
                  </li>
                  <li>
                    "Using the following brand keywords [paste keywords], generate 12 Midjourney prompts for modern tech
                    logos that would work for app icons, each with simple shapes, strong contrast, and clean negative
                    space."
                  </li>
                  <li>
                    "Ask me which country or region my brand targets (US, UK, Germany, France, Australia). Then generate
                    6 logo prompts that subtly reflect that region's design culture, while keeping the design clean and
                    global."
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              ChatGPT Prompts for Midjourney Characters & Portraits
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ChatGPT can enforce consistency in character prompts by reusing core descriptions and varying only pose,
              outfit, or setting. This is crucial for brands that want recurring mascots or for creators who need a cast
              of characters.
            </p>
            <div className="bg-secondary/30 border border-secondary p-6 rounded-lg my-6 space-y-4">
              <div>
                <p className="text-foreground font-semibold mb-2">Meta-prompt ideas:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    "You are designing a recurring Midjourney character. Ask me detailed questions about age, gender,
                    face shape, hairstyle, clothing style, personality, and color scheme. Then generate 10 prompts that
                    keep the same character but change pose, background, and lighting."
                  </li>
                  <li>
                    "Create 12 Midjourney prompts for realistic portraits of professionals in different roles (founder,
                    marketer, engineer, designer), using consistent lighting and camera language, suitable for website
                    'About us' pages."
                  </li>
                  <li>
                    "Generate 8 anime-style character prompts for a [genre] story set in [setting], using --niji. Keep a
                    consistent art style and color palette, but vary each character's role, outfit, and props."
                  </li>
                  <li>
                    "Ask for my brand colors and target audience. Then produce 10 Midjourney prompts for a mascot
                    character that would appeal to them, specifying expression, clothing, and background that fits
                    social content and stickers."
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">ChatGPT Prompts for Midjourney Product Photos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For ecommerce and product marketing, ChatGPT can generate prompts that sound like professional photography
              briefs. This helps non-designers get catalog-style and lifestyle images from Midjourney quickly.
            </p>
            <div className="bg-secondary/30 border border-secondary p-6 rounded-lg my-6 space-y-4">
              <div>
                <p className="text-foreground font-semibold mb-2">Meta-prompt ideas:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    "Act as a product photographer. Ask me about product type, material, target audience, and platform
                    (Amazon, Shopify, Instagram). Then generate 10 Midjourney product photo prompts specifying surface,
                    background, lighting style, and camera details."
                  </li>
                  <li>
                    "I will paste a product description. Turn it into 6 Midjourney prompts: 3 clean studio shots and 3
                    lifestyle shots in different real-world environments, all optimized for ecommerce listing images."
                  </li>
                  <li>
                    "Generate 12 product mockup prompts for packaging concepts of [product type], exploring different
                    color schemes, label layouts, and hero angles, while keeping backgrounds minimal and high-end."
                  </li>
                  <li>
                    "Ask me which region I'm selling in (US, UK, DE, FR, AU) and whether my brand is budget, mid-range,
                    or premium. Based on my answers, produce 8 Midjourney prompts for product photos that match that
                    market and price positioning."
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              ChatGPT Prompts for Midjourney Social Media & Ad Creatives
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Social media needs a large volume of fresh visuals, and ChatGPT can automate the "ideation and prompt
              writing" part. The focus should be on vertical formats, strong focal points, and leaving space for text
              overlays.
            </p>
            <div className="bg-secondary/30 border border-secondary p-6 rounded-lg my-6 space-y-4">
              <div>
                <p className="text-foreground font-semibold mb-2">Meta-prompt ideas:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    "Generate 15 Midjourney prompts for vertical social media posts (--ar 9:16) for a [niche] brand
                    targeting [audience]. Each prompt should emphasize bold composition, strong contrast, and empty
                    space at the top or center for text overlays."
                  </li>
                  <li>
                    "Ask me for 5 content topics I'm posting about this month. Then, for each topic, create 3 Midjourney
                    prompts suitable for Instagram carousels, with a consistent illustration style and color palette."
                  </li>
                  <li>
                    "Create 10 thumbnail-style Midjourney prompts for YouTube videos about [topic]. Each prompt should
                    describe a close-up of the main subject, big expressive emotion, and a simple, high-contrast
                    background that works at tiny sizes."
                  </li>
                  <li>
                    "You are a performance marketer. Based on my ad angle and audience, generate 8 Midjourney prompts
                    that visualize the pain point and 8 prompts that visualize the dream outcome, all optimized for paid
                    social ads."
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              ChatGPT Prompts for Midjourney Scenes, Landscapes & Concept Art
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For world-building, films, and games, ChatGPT is great at expanding short scene seeds into rich, cinematic
              Midjourney prompts. This is particularly useful for creators who are strong on ideas but struggle with
              visual vocabulary.
            </p>
            <div className="bg-secondary/30 border border-secondary p-6 rounded-lg my-6 space-y-4">
              <div>
                <p className="text-foreground font-semibold mb-2">Meta-prompt ideas:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    "I will give you a one-sentence scene idea. Ask 4 questions to clarify mood, time of day, and style,
                    then create 6 cinematic Midjourney prompts specifying weather, camera angle, and detailed
                    environment."
                  </li>
                  <li>
                    "Generate 10 Midjourney prompts for fantasy landscapes that could serve as game backgrounds, each
                    with a distinct color palette, terrain type, and atmospheric mood."
                  </li>
                  <li>
                    "Ask me to describe a sci-fi world in a paragraph. Then turn it into 12 environment prompts (cities,
                    interiors, wilderness areas) that share a unified style and technology level."
                  </li>
                  <li>
                    "Create 8 Midjourney prompts for cozy everyday scenes in major cities (New York, London, Berlin,
                    Paris, Sydney), each emphasizing local architecture, light, and street life in a warm, inviting
                    style."
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              ChatGPT Prompts for Midjourney Comics & Storyboards
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ChatGPT can also help plan visual narratives by generating prompts for sequences of frames and panels.
              This is ideal for storyboard previews, explainer sequences, and social "comic" posts.
            </p>
            <div className="bg-secondary/30 border border-secondary p-6 rounded-lg my-6 space-y-4">
              <div>
                <p className="text-foreground font-semibold mb-2">Meta-prompt ideas:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    "Ask me for a 4-step story (problem → struggle → solution → result). Then generate 4 Midjourney
                    prompts, one for each panel of a comic strip, keeping a consistent art style and character design."
                  </li>
                  <li>
                    "Create 10 storyboard frame prompts for a 30-second product explainer video, describing camera
                    angle, key action, and character emotion for each frame."
                  </li>
                  <li>
                    "You are a comic artist's assistant. After I describe my main character and setting, generate 12
                    Midjourney prompts for single-panel illustrations that show different moments of their daily life."
                  </li>
                  <li>
                    "Generate 8 Midjourney prompts for 'before vs after' scenes that visually highlight transformation
                    (messy vs organized, stressed vs relaxed, old system vs new solution), suitable for marketing
                    content."
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              ChatGPT Prompts for Advanced Midjourney Workflows
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beyond simple "idea → image", you can use ChatGPT as a multi-step pipeline: critic, refiner, and batch
              generator. This is where your page can stand out with more advanced meta-prompts.
            </p>
            <div className="bg-secondary/30 border border-secondary p-6 rounded-lg my-6 space-y-4">
              <div>
                <p className="text-foreground font-semibold mb-2">Meta-prompt ideas:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    "Act as a Midjourney prompt critic. I will paste a prompt and a short description of the result I
                    want. Analyze the prompt, point out weaknesses, and propose 3 improved prompts that better match my
                    goal."
                  </li>
                  <li>
                    "You are a Midjourney batch generator. Ask me for a theme, target platform (print, Instagram,
                    YouTube, website), and style language. Then generate 20 prompts: 5 logos, 5 product photos, 5 social
                    graphics, 5 abstract backgrounds, all sharing a coherent style."
                  </li>
                  <li>
                    "Act as a prompt clean-up tool. I will paste messy Midjourney prompts. Rewrite them to be concise,
                    remove filler words, and organize descriptors from subject → details → style → lighting →
                    composition → parameters."
                  </li>
                  <li>
                    "Design a Midjourney 'style guide' for my brand. Ask me about colors, vibe, and references. Then
                    output 10 reusable prompt snippets and 10 full example prompts that I can use as a base for any new
                    idea."
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Best Practices: Getting the Most From ChatGPT + Midjourney
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A few habits significantly improve results when using ChatGPT to generate Midjourney prompts:
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Provide examples first:</strong> Paste 3–5 of your favorite
                Midjourney prompts and tell ChatGPT to analyze their structure before generating new ones in the same
                style.
              </li>
              <li>
                <strong className="text-foreground">Be explicit about constraints:</strong> Always mention aspect ratio,
                desired realism level, and whether text should appear in the image (usually "no extra text").
              </li>
              <li>
                <strong className="text-foreground">Iterate instead of starting over:</strong> Paste a generated prompt
                back into ChatGPT and say "shorter", "more cinematic", or "simpler background" to converge on a better
                version.
              </li>
              <li>
                <strong className="text-foreground">Document winning prompts:</strong> Maintain your own prompt library
                of high-performers and use ChatGPT to remix them for new products, audiences, or regions.
              </li>
            </ul>
          </section>

          <section className="mt-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/midjourney-prompts"
                className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <p className="font-semibold text-foreground mb-1">Midjourney Prompts Guide</p>
                <p className="text-sm text-muted-foreground">
                  Complete guide with 130+ prompts and advanced techniques
                </p>
              </Link>
              <Link
                href="/website-links"
                className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <p className="font-semibold text-foreground mb-1">Prompts Library</p>
                <p className="text-sm text-muted-foreground">Browse all prompting guides and resources</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
