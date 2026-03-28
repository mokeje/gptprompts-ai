"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Wand2, Camera, Palette, Layers, Sparkles, Image } from "lucide-react"

const accent = "#8B5CF6"

function CopyCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#8B5CF6]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] mb-2 inline-block">{tag}</span>}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }} className="shrink-0 p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#8B5CF6]/20 transition-colors" aria-label="Copy prompt">
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-400" />}
        </button>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed font-mono whitespace-pre-wrap">{prompt}</p>
    </div>
  )
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-[#1a1a1a] transition-colors">
        <span className="font-medium text-white pr-4">{q}</span>
        {open ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#2a2a2a] pt-4">{a}</div>}
    </div>
  )
}

const faqItems = [
  {
    q: "What is Flux AI and who makes it?",
    a: "Flux is an open-source image generation model created by Black Forest Labs, the team behind Stable Diffusion. It comes in several variants: Flux.1 [pro] for highest quality, Flux.1 [dev] for developers and fine-tuning, and Flux.1 [schnell] for fast generations. Flux is known for superior text rendering in images, photorealistic quality, and strong prompt adherence compared to earlier diffusion models."
  },
  {
    q: "How is Flux different from Midjourney and DALL-E 3?",
    a: "Flux excels at photorealism, accurate text rendering within images, and precise prompt following. Midjourney tends toward artistic, stylized outputs with strong aesthetic appeal. DALL-E 3 integrates tightly with ChatGPT for conversational image creation. Flux is open-source and can be run locally or fine-tuned, giving developers and creators more control than the closed alternatives."
  },
  {
    q: "Where can I use Flux to generate images?",
    a: "Flux is available through several platforms: Replicate, fal.ai, Together AI, and Freepik's Flux playground for web-based generation. Developers can also run Flux locally using ComfyUI or the diffusers library from Hugging Face. Many image generation apps and Discord bots have added Flux as a model option alongside Stable Diffusion and DALL-E."
  },
  {
    q: "What makes Flux good at rendering text in images?",
    a: "Flux was specifically trained to handle text rendering, which has historically been a weakness of diffusion models. It can generate signs, logos, book covers, and UI mockups with legible, correctly spelled text. For best results, put the desired text in quotation marks within your prompt and keep text short (under 10 words works best)."
  },
  {
    q: "How long should Flux prompts be?",
    a: "Flux handles both short and long prompts well, but medium-length prompts (2 to 5 sentences) tend to produce the best results. Describe the subject, setting, lighting, style, and mood. Unlike Midjourney, Flux benefits from natural language descriptions rather than comma-separated keyword lists. Be specific about what you want to see."
  },
  {
    q: "Can I fine-tune Flux for my own use case?",
    a: "Yes. Flux.1 [dev] supports fine-tuning with LoRA adapters. You can train custom styles, specific characters, or brand-consistent imagery with as few as 20 to 50 training images. Fine-tuning services are available through Replicate and Hugging Face, and you can also train locally using the diffusers library."
  },
  {
    q: "What aspect ratios does Flux support?",
    a: "Flux supports a wide range of aspect ratios. Common choices include 1:1 (square), 16:9 (landscape), 9:16 (portrait/mobile), 4:3, and 3:2. Specify your desired ratio in the prompt or through the platform's settings. Higher resolutions like 1024x1024 or 1344x768 produce the sharpest results."
  },
  {
    q: "How do I avoid common Flux prompt mistakes?",
    a: "Avoid vague descriptions like 'a beautiful scene.' Instead, specify the subject, environment, lighting, camera angle, and style. Do not use negative prompts with Flux Pro since it handles them differently than Stable Diffusion. Keep text-in-image requests short and in quotation marks. Avoid conflicting style instructions."
  },
  {
    q: "What is the difference between Flux Pro, Dev, and Schnell?",
    a: "Flux Pro delivers the highest quality and is accessed via API. Flux Dev is the open-weight version for developers, supporting fine-tuning and local deployment. Flux Schnell is optimized for speed, generating images in 1 to 4 steps instead of 20+. Choose Pro for commercial work, Dev for custom models, and Schnell for rapid iteration and previews."
  },
  {
    q: "Can Flux generate consistent characters across multiple images?",
    a: "Base Flux does not have built-in character consistency, but you can achieve it through fine-tuning with LoRA. Train a LoRA on 20+ images of a character, then reference the trigger word in your prompts. Some platforms like Replicate offer one-click character training workflows that simplify this process."
  },
]

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Flux AI Image Prompts: Master Black Forest Labs' Image Model in 2026",
  description: "Expert Flux AI prompts for photorealistic images, text rendering, portraits, product photography, and creative art. Copy-paste prompts for Flux Pro, Dev, and Schnell models.",
  image: "https://gptprompts.ai/flux-ai-prompts.jpg",
  author: { "@type": "Organization", name: "GPTPrompts.AI" },
  publisher: { "@type": "Organization", name: "GPTPrompts.AI" },
  datePublished: "2026-03-28",
  dateModified: "2026-03-28",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(item => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

export default function FluxAIPromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#8B5CF6]/30 text-[#8B5CF6]">Image Generation</span>
            <span className="text-xs text-gray-500">by Black Forest Labs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Flux AI Prompts:<br />Next-Gen Image Generation</h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Flux by Black Forest Labs produces the most photorealistic AI images available today, with industry-leading text rendering and prompt adherence. From portraits to product shots, these prompts are engineered for Flux Pro, Dev, and Schnell models.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Photorealistic", "Text in Images", "Open Source", "Fine-Tunable", "Fast Generation"].map(b => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Structure */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Flux Prompt Structure Guide</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">Flux reads natural language better than keyword-stuffed prompts. Structure your descriptions like you are directing a photographer or painting a scene.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { n: "1", icon: <Camera size={16} />, t: "Subject first", d: "Start with what or who is in the image. 'A woman in her 30s wearing a tailored navy blazer' is far better than 'professional, woman, blazer.'" },
              { n: "2", icon: <Layers size={16} />, t: "Set the scene", d: "Describe the environment: 'standing in a sunlit rooftop garden with the city skyline blurred in the background.' Context gives Flux spatial reasoning." },
              { n: "3", icon: <Sparkles size={16} />, t: "Specify lighting", d: "Lighting defines mood. 'Golden hour side lighting with warm shadows' or 'studio lighting with a white cyclorama background.' Be precise." },
              { n: "4", icon: <Palette size={16} />, t: "Define the style", d: "Photography style (editorial, documentary, product), artistic movement (impressionist, cyberpunk), or camera reference (shot on Hasselblad, 85mm f/1.4)." },
              { n: "5", icon: <Wand2 size={16} />, t: "Text in quotes", d: "For text-in-image: put the words in quotation marks. 'A neon sign reading \"OPEN 24/7\" above a bar entrance.' Keep text under 10 words." },
            ].map(p => (
              <div key={p.n} className="flex gap-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm font-bold" style={{ backgroundColor: `${accent}20`, color: accent }}>{p.n}</div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{p.t}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portrait & People */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Portrait and People Prompts</h2>
          <p className="text-gray-400 mb-6">Flux excels at realistic portraits with natural skin tones, accurate anatomy, and expressive faces.</p>
          <div className="grid gap-4">
            <CopyCard tag="Headshot" title="Professional LinkedIn Headshot" prompt={`A professional headshot of a confident man in his early 40s. He has short dark hair with a few gray strands at the temples, wearing a charcoal suit with an open-collar white shirt. Warm, approachable smile with natural eye contact toward the camera. Shot in a modern office with large windows creating soft, diffused natural light from the left side. Shallow depth of field blurring the background into soft bokeh. Professional corporate photography style, shot on a Canon EOS R5 with an 85mm f/1.4 lens. Clean, bright, and polished look suitable for LinkedIn and company websites.`} />

            <CopyCard tag="Editorial" title="Fashion Editorial Portrait" prompt={`A striking editorial portrait of a young woman with braided hair adorned with small gold cuffs. She wears an oversized vintage denim jacket over a flowing saffron-colored silk dress. Standing on a weathered concrete rooftop at golden hour, with the warm sun backlighting her hair creating a halo effect. She gazes slightly off-camera with a contemplative expression. Shot from a low angle looking upward. Kodak Portra 400 film aesthetic with warm tones and soft grain. Vogue editorial photography style. Natural wind creating movement in the dress fabric.`} />

            <CopyCard tag="Lifestyle" title="Candid Lifestyle Photography" prompt={`A candid photograph of two friends laughing together at a small outdoor cafe table. One person is mid-sip on an iced coffee while the other is telling a story with animated hand gestures. Late afternoon light filtering through a canopy of leaves above, creating dappled light patterns on the table. The cafe has a rustic Mediterranean aesthetic with terracotta pots and climbing bougainvillea on a white stucco wall behind them. Shot on a Fujifilm X-T5, 56mm lens, capturing genuine emotion and connection. Warm, inviting color palette with natural earth tones.`} />
          </div>
        </div>
      </section>

      {/* Product & Commercial */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Product and Commercial Prompts</h2>
          <p className="text-gray-400 mb-6">Generate product photography, packaging mockups, and commercial imagery with Flux.</p>
          <div className="grid gap-4">
            <CopyCard tag="Product" title="Minimalist Product Photography" prompt={`A sleek matte black wireless earbuds case sitting on a smooth white marble surface. The case is slightly open, revealing one earbud with a subtle LED indicator glowing in ice blue. Soft studio lighting from the upper left creating gentle shadows and a highlight along the case edge. Clean, minimal composition with generous negative space. Small water droplets on the marble suggesting freshness and precision. Apple-style product photography aesthetic. Shot on a Phase One medium format camera with perfect focus and zero distortion. White background fading to pure white at the edges.`} />

            <CopyCard tag="Food" title="Overhead Food Photography" prompt={`Overhead flat-lay photograph of a rustic brunch spread on a reclaimed wood table. Center: a cast iron skillet with perfectly cooked eggs and herbs. Surrounding items: sourdough toast with avocado, a bowl of mixed berries, a French press coffee, a small jar of honey with a wooden dipper, and a folded linen napkin. Scattered fresh herbs and a few crumbs for authenticity. Warm morning light streaming from the upper right. Rich, saturated colors with a warm color grade. Food magazine editorial quality. Shot on a Nikon Z8 from directly above with a 35mm lens.`} />

            <CopyCard tag="Text" title="Neon Sign with Text Rendering" prompt={`A warm, atmospheric photograph of a vintage bar entrance at night. Above the heavy wooden door hangs a glowing neon sign reading "THE LAST WORD" in elegant cursive script, with a smaller neon cocktail glass icon beneath it. The sign casts a warm pink and amber glow on the brick wall and wet cobblestone street below. Rain-slicked surfaces reflecting the neon colors. A few patrons visible through frosted glass windows with warm interior light. Moody film noir atmosphere. Shot on a Leica M11 with a 50mm Summilux, slight grain and natural vignetting.`} />
          </div>
        </div>
      </section>

      {/* Creative & Artistic */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Creative and Artistic Prompts</h2>
          <p className="text-gray-400 mb-6">Push Flux into artistic territory with illustrated, surreal, and concept art styles.</p>
          <div className="grid gap-4">
            <CopyCard tag="Concept Art" title="Sci-Fi Environment Concept" prompt={`A vast floating city above the clouds at sunset. Interconnected platforms and towers connected by glass-enclosed bridges, with lush vertical gardens growing on every surface. Small personal aircraft weave between the structures. The architecture blends organic curves with geometric precision, materials mixing warm copper, living wood, and translucent crystal panels. Below the city, clouds are painted in layers of orange, purple, and gold by the setting sun. A few distant floating islands are visible on the horizon. Digital concept art style in the tradition of Syd Mead meets Studio Ghibli. Ultra-detailed with atmospheric perspective and volumetric lighting.`} />

            <CopyCard tag="Illustration" title="Children's Book Illustration" prompt={`A whimsical watercolor illustration of a small fox wearing a tiny red scarf, sitting on a stack of oversized books in a cozy library. The library has tall wooden shelves reaching to the ceiling, filled with colorful books. A warm reading lamp casts a golden circle of light around the fox. Dust motes float in the lamplight. A teacup and a half-eaten cookie sit on a small plate beside the books. The fox is reading a tiny book with wide, curious eyes. Soft watercolor style with visible brush strokes, gentle color bleeding, and a warm, comforting palette of amber, sage green, and soft cream. Children's picture book illustration quality.`} />

            <CopyCard tag="Abstract" title="Data Visualization Art" prompt={`An abstract visualization of a neural network as a living organism. Thousands of glowing nodes connected by luminescent threads in shades of violet, electric blue, and warm gold. The network forms an organic, brain-like shape that appears to breathe and pulse with energy. Individual data points flow along the connections as tiny particles of light. The background is deep space black with subtle nebula-like clouds. The overall composition suggests both technology and biology merging into something new. Rendered in a style that sits between scientific visualization and digital fine art. Ultra-high detail with subsurface scattering effects on the nodes.`} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <FAQ key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Related Prompt Guides</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Midjourney Prompts", href: "/midjourney-prompts" },
              { label: "DALL-E 3 Prompts", href: "/dalle-3-prompts" },
              { label: "Stable Diffusion Prompts", href: "/stable-diffusion-prompts" },
              { label: "Leonardo AI Prompts", href: "/leonardo-ai-prompts" },
              { label: "Image Prompts", href: "/image-prompts" },
              { label: "AI Drawing Prompts", href: "/ai-drawing-prompts" },
              { label: "Photo Editing Prompts", href: "/photo-editing-prompts" },
              { label: "Adobe Firefly Prompts", href: "/adobe-firefly-prompts" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="text-sm px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-gray-300 hover:border-[#8B5CF6]/40 hover:text-white transition-all text-center">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
