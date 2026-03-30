"use client"

import { useState } from "react"
import Link from "next/link"

const CopyCard = ({ text, accentColor = "#6366f1" }: { text: string; accentColor?: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a4a] rounded-lg p-5 hover:border-indigo-500/50 transition-colors">
      <pre className="bg-[#0f0f1a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-56">
        {text}
      </pre>
      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded transition-colors text-sm"
        style={{ backgroundColor: accentColor }}
      >
        {copied ? "✓ Copied!" : "Copy Prompt"}
      </button>
    </div>
  )
}

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 bg-[#111] hover:bg-[#1a1a1a] transition-colors text-left"
      >
        <span className="text-gray-200 font-semibold text-sm pr-4">{q}</span>
        <span className="text-indigo-400 text-lg flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="bg-[#0d0d0d] border-t border-gray-800 p-5">
          <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

const ACCENT = "#6366f1"

const sections = [
  {
    id: "portraits-characters",
    title: "Portrait & Character Prompts",
    description: "Prompts for detailed human subjects, fantasy characters, and expressive portraits.",
    prompts: [
      `A photorealistic portrait of a weathered sea captain, 60s, salt-and-pepper beard, deep-set blue eyes reflecting a stormy horizon, dramatic Rembrandt lighting, Canon 5D macro lens, shallow depth of field, muted teal and amber color palette`,
      `A fantasy warrior queen standing on a cliff edge at golden hour, intricate silver armor engraved with Celtic knotwork, flowing crimson cape, fierce yet serene expression, epic fantasy oil painting style, highly detailed, cinematic composition`,
      `Expressive close-up portrait of a young jazz musician mid-performance, eyes closed, sweat glistening under warm stage lights, textured oil-painting style, rich browns and golds, visible brushstrokes, emotional depth`,
      `A futuristic cyberpunk street vendor selling glowing noodles, neon-lit rain-soaked alley, steam rising, diverse crowd in background, cinematic wide-angle lens, hyperrealistic, Blade Runner aesthetic, highly detailed`,
      `A serene elderly woman reading in a sunlit library, dust motes in golden afternoon light, towers of books surrounding her, warm Vermeer-inspired lighting, photorealistic, shallow depth of field`,
      `A forest ranger silhouetted against a blazing sunset, hand resting on a weathered wooden fence, American West landscape, National Geographic documentary photography style, golden hour, wide cinematic frame`,
    ],
  },
  {
    id: "environments-landscapes",
    title: "Environment & Landscape Prompts",
    description: "Stunning scenes from real and imaginary worlds.",
    prompts: [
      `A bioluminescent jungle at night, towering alien trees with glowing blue spores drifting through humid air, a narrow winding path lit by floating firefly-like organisms, dreamy and ethereal, cinematic wide shot, 4K detail`,
      `An abandoned Victorian greenhouse reclaimed by nature, shattered glass ceiling letting in shafts of sunlight, tropical plants overflowing cracked stone paths, moss on every surface, atmospheric haze, architectural photography style`,
      `A vast Martian canyon at sunrise, crimson dust clouds rolling across the valley floor, twin moons barely visible on the horizon, desolate and majestic, NASA concept art style, ultra-wide perspective, muted reds and purples`,
      `An idyllic Japanese village in cherry blossom season, sakura petals floating over a wooden bridge above a crystal-clear stream, golden hour light filtering through the trees, Studio Ghibli inspired aesthetic, painterly, warm and peaceful`,
      `A storm-lashed Scottish highlands fortress at midnight, lightning illuminating ancient stone walls, a lone torch burning in a tower window, dramatic low-angle composition, moody dark fantasy painting style, cool blue-greys`,
      `An underwater ancient city with coral-covered marble columns, schools of colourful fish weaving through archways, shafts of turquoise light from the surface above, photorealistic underwater photography style`,
    ],
  },
  {
    id: "product-commercial",
    title: "Product & Commercial Prompts",
    description: "Product shots, brand imagery, and advertising-ready visuals.",
    prompts: [
      `A luxury perfume bottle on a polished obsidian surface, surrounded by scattered white jasmine petals and a single lit candle, soft side-lighting creating elegant shadows, commercial product photography, 50mm lens, pure white background`,
      `A premium coffee packaging bag displayed on a rustic wooden café counter, steam rising from a nearby espresso cup, natural morning window light, warm earthy tones, lifestyle brand photography style, editorial quality`,
      `A sleek pair of running shoes floating mid-air against a clean white background, motion blur trails in neon orange and purple suggesting speed, dynamic sports marketing aesthetic, high contrast, Nike campaign style`,
      `A handmade leather journal open on a white marble desk beside a vintage fountain pen and dried wildflowers, overhead flat-lay composition, warm natural light, minimal and sophisticated, stationery brand photography`,
      `A skincare serum bottle submerged in crystal-clear water with floating cucumber slices and mint leaves, macro product photography, cool clean aesthetic, shallow depth of field, health and beauty brand`,
      `An artisan chocolate bar broken to reveal a sea-salt caramel filling, placed on parchment paper with scattered cocoa nibs and sea salt crystals, warm moody lighting, food photography close-up, award-winning editorial style`,
    ],
  },
  {
    id: "artistic-illustration",
    title: "Art Style & Illustration Prompts",
    description: "Prompts specifying art movements, illustration techniques, and visual styles.",
    prompts: [
      `Art Nouveau illustration of a woman entwined with wisteria vines, flowing organic lines, muted violets and greens with gold leaf accents, inspired by Alphonse Mucha, decorative border, flat colour fills with fine ink detail`,
      `Bauhaus poster design for a fictional jazz concert, geometric shapes, primary colours on cream background, bold sans-serif typography integrated into the composition, 1920s modernist aesthetic`,
      `A surrealist landscape in the style of Salvador Dali: melting clocks draped over a burning giraffe, soft shadow desert, hyperrealistic rendering with dreamlike scale distortion, oil on canvas texture`,
      `Ukiyo-e woodblock print of a samurai standing in a snowstorm, bold black outlines, flat colour fills in indigo and white, stylised wave patterns in the background, traditional Japanese printmaking aesthetic`,
      `A whimsical children's book illustration: a small fox in a rain-coat exploring a magical mushroom forest, soft watercolour washes, warm earthy palette, textured paper grain visible, gentle and inviting mood`,
      `1970s psychedelic concert poster for a fictional band called "Solar Wind", swirling rainbow lettering, cosmic imagery, dense pattern work, high-contrast colours, hand-drawn feel, vintage offset-printing texture`,
    ],
  },
  {
    id: "concept-experimental",
    title: "Concept & Experimental Prompts",
    description: "Abstract, surreal, and imaginative compositions that push creative boundaries.",
    prompts: [
      `A human brain rendered as a coral reef ecosystem, neurons as branching coral, memories as luminous fish darting through synaptic gaps, photorealistic underwater photography style, teal and gold light filtering from above`,
      `Time as a physical object: a small glass sphere containing a frozen moment — a child blowing out birthday candles — suspended in a dark void, light bending around it, conceptual fine-art photography`,
      `A vast library where every book is a universe: open books floating in zero gravity, galaxies and nebulae spilling out of their pages, infinite shelves receding into starfield darkness, majestic and awe-inspiring, conceptual illustration`,
      `Music made visible: sound waves of a jazz saxophone solo rendered as luminous ribbons of colour flowing through a dark concert hall, high-speed photography aesthetic, abstract but grounded in reality`,
      `A city built inside a giant clockwork mechanism, tiny buildings on rotating gears, citizens commuting on pendulums, golden light streaming through gaps in the brass machinery, steampunk fantasy, bird's-eye view`,
      `The moment of falling asleep illustrated literally: a figure in pyjamas stepping off the edge of a bed that melts into a dreamscape ocean, surrealist oil painting style, rich warm yellows and deep blues`,
    ],
  },
]

const faqItems = [
  {
    q: "What makes a DALL-E 3 prompt effective?",
    a: "The most effective DALL-E 3 prompts combine four elements: a clear subject and action, a specific environment or setting, lighting and colour details, and an art style or medium. DALL-E 3 understands natural language, so write in full sentences rather than tag lists. The more precise and visual your description, the closer the output will be to your vision.",
  },
  {
    q: "Should I use DALL-E 3 or Midjourney for my project?",
    a: "DALL-E 3 (via ChatGPT) excels at following complex natural language instructions, rendering accurate text within images, and producing consistent results from detailed prompts. Midjourney tends to produce more stylised, aesthetically polished outputs with its parameter-based syntax. Choose DALL-E 3 when you need precise control or readable text in the image; choose Midjourney when you want striking visual style with less instruction.",
  },
  {
    q: "How do I get DALL-E 3 to include readable text in an image?",
    a: 'DALL-E 3 is the best AI image generator for text rendering. Put the exact text you want in quotation marks within your prompt — for example: a storefront sign reading "Open 24 Hours". Add style context like "neon signage", "hand-painted lettering", or "bold sans-serif font" to guide the appearance.',
  },
  {
    q: "What image sizes does DALL-E 3 support?",
    a: "DALL-E 3 generates images at 1024x1024 (square), 1024x1792 (portrait), and 1792x1024 (landscape). For social media posts, square works well; for phone wallpapers use portrait; for desktop backgrounds or banners use landscape. Specify your intended use in the prompt itself (e.g., 'for a phone wallpaper') to encourage appropriate compositions.",
  },
  {
    q: "Can I use DALL-E 3 images commercially?",
    a: "Yes. According to OpenAI's usage policies, you own the images you create with DALL-E 3 through ChatGPT Plus and the API, and can use them commercially. However, OpenAI retains certain rights. Always review OpenAI's current terms of service for the most up-to-date information on commercial usage, especially if you are reselling generated images.",
  },
  {
    q: "Why does DALL-E 3 sometimes refuse my prompt?",
    a: "DALL-E 3 has content policies that prevent generating certain categories of content including realistic violence, explicit material, and images of real named individuals. If your prompt is refused, try rephrasing it to be more abstract or fictional, remove references to real people, or adjust the context. Adding 'illustration' or 'conceptual art' framing can sometimes help with borderline prompts.",
  },
  {
    q: "How do I maintain character consistency across multiple DALL-E 3 images?",
    a: "DALL-E 3 does not natively support persistent characters across generations. Workarounds include: (1) including an extremely detailed description of the character in every prompt, (2) uploading a reference image first and asking ChatGPT to maintain that character, or (3) using the Edit feature to keep the same base image while changing only specific elements. For production projects requiring consistency, consider Midjourney's --cref parameter or other tools with native character persistence.",
  },
  {
    q: "What is negative prompting in DALL-E 3?",
    a: "Unlike Stable Diffusion, DALL-E 3 does not have a dedicated negative prompt field. Instead, use positive exclusion language directly in your prompt: 'no text', 'no people in the background', 'avoid shadows on the subject', 'clean background without clutter'. Phrasing what you want the image to exclude as part of the main prompt is the most reliable approach.",
  },
  {
    q: "How do I get more photorealistic results?",
    a: "For photorealism, include camera and lens details (e.g., 'Canon EOS 5D, 85mm portrait lens, f/1.8'), lighting setup ('soft diffused studio light', 'natural golden hour backlight'), and texture cues ('skin pores visible', 'fabric texture', 'reflective surface'). Ending your prompt with 'photorealistic, ultra-high detail, 4K' also reinforces the style. Avoid mentioning illustration or painting terms.",
  },
  {
    q: "Can I use ChatGPT to improve my DALL-E 3 prompts?",
    a: "Yes, and this is one of the most powerful workflows. Ask ChatGPT to 'rewrite this image description as a detailed DALL-E 3 prompt' or 'list 5 visual details that would make this scene more authentic and cinematic, then generate it'. Using the language model's knowledge to enrich the visual description before generation consistently produces better results than writing prompts from scratch.",
  },
]

export default function ClientPage() {
  return (
    <div className="min-h-screen bg-[#080810] text-white">
      {/* Hero */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-indigo-900/40 bg-gradient-to-b from-indigo-950/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">AI Image Generation</p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">
            DALL-E 3 Prompts: 60+ Copy-Paste Examples for Stunning AI Images
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Master OpenAI's DALL-E 3 with production-ready prompts for portraits, landscapes, product shots, art styles,
            and experimental concepts. Each prompt is copy-paste ready for ChatGPT Plus or the DALL-E API.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-6 text-indigo-400">How to Write Effective DALL-E 3 Prompts</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          DALL-E 3 is trained on natural language, so it responds best to full descriptive sentences rather than
          keyword tags. The most reliable prompt structure combines four elements: the subject and action, the
          environment or setting, the lighting and colour palette, and the art style or photographic medium. Specify
          these in sequence for the most predictable results.
        </p>
        <div className="bg-[#10101e] border border-indigo-900/40 rounded-xl p-6 mb-6">
          <p className="text-indigo-300 font-semibold mb-3 text-sm uppercase tracking-wider">Master Prompt Formula</p>
          <p className="font-mono text-sm text-gray-300 leading-relaxed">
            [Subject + action or pose]. [Environment / setting + time of day]. [Lighting description + colour palette]. [Art
            style or photographic technique + quality keywords].
          </p>
        </div>
        <p className="text-gray-400 leading-relaxed">
          Unlike Stable Diffusion, DALL-E 3 does not use negative prompts. Instead, add exclusions directly into your
          prompt ("clean background with no text", "no people visible"). DALL-E 3 also renders readable text inside
          images better than any other model — put the exact text in quotation marks within your prompt.
        </p>
      </div>

      {/* Prompt sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {sections.map((section) => (
          <div key={section.id} className="mb-16">
            <h2 className="text-3xl font-bold mb-2 text-indigo-400">{section.title}</h2>
            <p className="text-gray-500 mb-8 text-sm">{section.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.prompts.map((prompt, idx) => (
                <CopyCard key={idx} text={prompt} accentColor={ACCENT} />
              ))}
            </div>
          </div>
        ))}

        {/* FAQ */}
        <div className="mt-20 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-indigo-400">DALL-E 3 Prompting FAQ</h2>
          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <FaqItem key={idx} q={item.q} a={item.a} />
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-indigo-400">More AI Image & Video Prompt Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Midjourney Prompts", href: "/midjourney-prompts", color: "#6366f1" },
              { title: "Stable Diffusion Prompts", href: "/stable-diffusion-prompts", color: "#8b5cf6" },
              { title: "Ideogram AI Prompts", href: "/ideogram-ai-prompts", color: "#6366f1" },
              { title: "Runway ML Prompts", href: "/runway-ml-prompts", color: "#8b5cf6" },
              { title: "Sora Prompts", href: "/sora-prompts", color: "#6366f1" },
              { title: "Veo 3 Prompts", href: "/veo-3-prompts", color: "#4285f4" },
              { title: "ChatGPT Prompts", href: "/chatgpt-prompts", color: "#10a37f" },
              { title: "Kling AI Prompts", href: "/kling-ai-prompts", color: "#8b5cf6" },
              { title: "All Prompt Guides", href: "/website-links", color: "#6366f1" },
            ].map((page, idx) => (
              <Link
                key={idx}
                href={page.href}
                className="p-4 rounded-lg border transition-all duration-200 hover:opacity-80"
                style={{
                  borderColor: page.color + "40",
                  backgroundColor: page.color + "08",
                }}
              >
                <span className="font-semibold text-sm" style={{ color: page.color }}>
                  {page.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
