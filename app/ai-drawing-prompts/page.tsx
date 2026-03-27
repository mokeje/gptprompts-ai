"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react"

const accent = "#EC4899"

function PromptCard({ title, prompt, tag, preview }: { title: string; prompt: string; tag?: string; preview?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#EC4899]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#EC4899]/10 text-[#EC4899] mb-2 inline-block">{tag}</span>}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }} className="shrink-0 p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#EC4899]/20 transition-colors">
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-400" />}
        </button>
      </div>
      {preview && <p className="text-xs text-[#EC4899]/70 mb-2 font-mono">{preview}</p>}
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

const tools = [
  { name: "Midjourney", best: "Photorealistic images, fine art, and cinematic scenes. The highest quality output for most styles. Requires Discord.", color: "#5865F2" },
  { name: "DALL·E 3", best: "Text in images, accurate prompt following, and quick iterations. Built into ChatGPT — great starting point with no setup.", color: "#10a37f" },
  { name: "Stable Diffusion", best: "Full creative control, no censorship limits, and runs locally. Requires more setup but the most flexible option.", color: "#FF6B35" },
  { name: "Adobe Firefly", best: "Commercial-safe images with full IP indemnification. Best for professional/business use where licensing matters.", color: "#FF0000" },
  { name: "Ideogram", best: "Text-heavy designs, logos, and typography in images. The best AI tool specifically for readable text in graphics.", color: "#8B5CF6" },
  { name: "Flux (Black Forest)", best: "Photorealistic portraits and product shots. Emerging competitor to Midjourney with impressive realism.", color: "#06B6D4" },
]

export default function AIDrawingPromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#EC4899]/30 text-[#EC4899]">AI Art</span>
            <span className="text-xs text-gray-500">Midjourney · DALL·E · Stable Diffusion · Flux</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            AI Drawing Prompts:<br />Create Stunning Art with AI
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            AI image generation is all about the prompt. The right words unlock photorealistic portraits, dreamy illustrations, cinematic scenes, and abstract art — the wrong ones give you generic results. These prompts are structured to get consistently great outputs from Midjourney, DALL·E, and Stable Diffusion.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Photorealistic", "Illustration", "Character design", "Landscapes", "Abstract", "Portraits"].map(b => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt anatomy */}
      <section className="py-12 px-4 border-b border-[#1a1a1a] bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">The Anatomy of a Great AI Image Prompt</h2>
          <div className="bg-[#111] border border-[#EC4899]/20 rounded-xl p-5 mb-6 font-mono text-sm">
            <p className="text-gray-300 leading-loose">
              <span className="text-[#EC4899]">[Subject]</span> {" "}
              <span className="text-blue-400">[Action/Pose]</span>, {" "}
              <span className="text-yellow-400">[Setting/Environment]</span>, {" "}
              <span className="text-green-400">[Lighting]</span>, {" "}
              <span className="text-purple-400">[Art Style]</span>, {" "}
              <span className="text-orange-400">[Camera/Perspective]</span>, {" "}
              <span className="text-red-400">[Quality modifiers]</span>
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {[
              { label: "Be specific about the subject", tip: "\"A red fox\" → \"A young red fox with bright amber eyes and a bushy tail\"" },
              { label: "Describe the mood with lighting", tip: "Golden hour, dramatic side lighting, misty morning fog, neon reflections — lighting does more than you think." },
              { label: "Name the style reference", tip: "\"In the style of Studio Ghibli\" or \"cinematic, like a Roger Deakins film\" gives the AI a concrete reference." },
            ].map(t => (
              <div key={t.label} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                <h3 className="font-semibold text-white text-sm mb-2">{t.label}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photorealistic */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Photorealistic Portrait Prompts</h2>
          <p className="text-gray-400 mb-6">These produce highly realistic human portraits. Best with Midjourney v6, DALL·E 3, or Flux.</p>
          <div className="grid gap-4">
            <PromptCard tag="Portrait" title="Cinematic Portrait" prompt={`A photorealistic portrait of a [age] year old [description] woman/man, [distinctive feature], [expression], shot on a Sony A7R V with an 85mm f/1.4 lens, shallow depth of field, soft bokeh background, golden hour side lighting, 8K resolution, ultra-detailed skin texture, photojournalism style --ar 2:3 --style raw --q 2`} />
            <PromptCard tag="Portrait" title="Editorial / Magazine Style" prompt={`Editorial fashion photograph, a [description] woman wearing [outfit], [setting/background], dramatic studio lighting with a single key light, high fashion aesthetic, shot by Annie Leibovitz, Vogue magazine cover style, film grain, desaturated color grading, ultra-sharp, 8K --ar 2:3 --style raw`} />
            <PromptCard tag="Environmental" title="Person in Environment" prompt={`A [description] person [action], in [detailed setting], [time of day], [weather], [mood], cinematic composition, [specific lighting], photorealistic, shot on a Leica M11, 35mm lens, natural light, documentary photography style, award-winning photo, National Geographic --ar 16:9 --style raw`} />
          </div>
        </div>
      </section>

      {/* Illustration & Art */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Illustration & Art Style Prompts</h2>
          <p className="text-gray-400 mb-6">Consistent, stylized illustration prompts for character design, book art, and digital illustration.</p>
          <div className="grid gap-4">
            <PromptCard tag="Anime" title="Studio Ghibli Style" prompt={`A young girl [action] in [setting], Studio Ghibli animation style, soft watercolor backgrounds, lush green scenery, warm diffused sunlight filtering through trees, hand-painted aesthetic, pastel color palette, Hayao Miyazaki inspired, whimsical and peaceful atmosphere, detailed environment, 4K --ar 16:9`} />
            <PromptCard tag="Fantasy" title="Fantasy Character Design" prompt={`Full body character design of a [race/class] [gender], wearing [armor/clothing description], [distinctive features], [expression/pose], fantasy RPG art style, clean linework, vibrant colors, detailed costume, concept art by [artist reference like WLOP or Artgerm], white background, character sheet style, high resolution --ar 1:1`} />
            <PromptCard tag="Illustration" title="Children's Book Style" prompt={`A [subject] in [setting], children's book illustration style, soft and warm color palette, gentle rounded shapes, watercolor texture, whimsical and friendly, cozy atmosphere, inspired by Beatrix Potter, detailed but approachable, suitable for young children, hand-drawn aesthetic --ar 4:3`} />
            <PromptCard tag="Comic" title="Comic Book / Graphic Novel" prompt={`[Scene description], comic book art style, bold black ink outlines, dynamic composition, [color scheme], halftone dots, dramatic lighting, superhero comic aesthetic, inspired by [Jim Lee / Jack Kirby / Alex Ross], action-packed, bold colors --ar 2:3`} />
          </div>
        </div>
      </section>

      {/* Landscapes & Environments */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Landscape & Environment Prompts</h2>
          <p className="text-gray-400 mb-6">Epic scenery, atmospheric environments, and world-building visuals.</p>
          <div className="grid gap-4">
            <PromptCard tag="Fantasy" title="Epic Fantasy Landscape" prompt={`A vast fantasy landscape with [key features], dramatic sky with [weather/clouds], [time of day] lighting, [mood — e.g. ominous, serene, majestic], epic scale, cinematic composition, matte painting style, ultra-detailed, painted by [Thomas Cole / Hudson River School / Greg Rutkowski], 8K wallpaper --ar 21:9`} />
            <PromptCard tag="Sci-Fi" title="Futuristic Cityscape" prompt={`A sprawling cyberpunk megacity at night, neon signs in [colors] reflecting off rain-soaked streets, flying vehicles in the distance, massive holographic advertisements, atmospheric haze and fog, ultra-detailed architecture mixing brutalist and glass skyscrapers, inspired by Blade Runner 2049, cinematic photography, anamorphic lens flares --ar 21:9`} />
            <PromptCard tag="Nature" title="Photorealistic Nature Scene" prompt={`A photorealistic [type of landscape] during [season], [specific weather — e.g. after rainfall, during snowfall, foggy morning], [distinctive natural feature], golden hour light, rays of light through [trees/clouds], ultra-sharp detail, shot on a Hasselblad with a wide-angle lens, National Geographic quality, award-winning nature photography --ar 16:9`} />
          </div>
        </div>
      </section>

      {/* Quick Style Prompts */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Quick Style Modifier Prompts</h2>
          <p className="text-gray-400 mb-6">Copy these style suffix blocks and add them to any base prompt to instantly change the aesthetic.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { t: "Oil painting", p: "Oil painting on canvas, thick impasto brushstrokes, rich saturated colors, painterly texture, museum quality, signed artwork, detailed brushwork visible, [subject], warm studio lighting, fine art" },
              { t: "Lo-fi aesthetic", p: "[Subject], lo-fi illustration style, soft muted colors, cozy aesthetic, grain texture, simple shapes, warm amber and teal tones, late night study room vibes, Tumblr aesthetic, 2010s indie art" },
              { t: "Dark academia", p: "[Subject], dark academia aesthetic, muted browns and greens, candlelight, antique textures, Oxford University library setting, leather-bound books, gothic architecture, moody and intellectual atmosphere" },
              { t: "Watercolor", p: "[Subject], delicate watercolor illustration, soft wet-on-wet blending, white paper showing through, loose expressive brushstrokes, botanical illustration style, pastel colors, ink outlines, transparent washes" },
            ].map(p => <PromptCard key={p.t} title={p.t} prompt={p.p} />)}
          </div>
        </div>
      </section>

      {/* Tool Comparison */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Which AI Art Tool Should You Use?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tools.map(t => (
              <div key={t.name} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: t.color }} />
                  <h3 className="font-bold text-white">{t.name}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{t.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">AI Drawing FAQ</h2>
          <div className="space-y-3">
            <FAQ q="What is the best AI for generating art?" a="Midjourney v6 is the most popular for highest quality outputs — it produces stunning photorealistic and artistic images with minimal effort. DALL·E 3 (inside ChatGPT) is the easiest to start with and follows complex prompts well. Stable Diffusion is the best if you want full creative control and no censorship restrictions. Flux is the newest competitor with impressive photorealism." />
            <FAQ q="What makes a good AI art prompt?" a="The best AI art prompts include: a specific subject description, the lighting conditions, an artistic style reference (an artist, a film, a medium like 'oil painting'), camera perspective if photorealistic, and quality keywords like 'ultra-detailed', '8K', 'award-winning'. Vague prompts give generic results — specificity is what separates good outputs from great ones." />
            <FAQ q="Can I sell AI-generated art?" a="It depends on the tool. DALL·E 3 and Adobe Firefly both allow commercial use of generated images. Midjourney requires a Pro subscription for commercial use. Stable Diffusion outputs are generally yours to use commercially. Always check the specific tool's terms of service before selling AI art." />
            <FAQ q="How do I make AI art look more realistic?" a="For realism: specify a real camera (Sony A7R V, Hasselblad, Leica), include a lens (85mm f/1.4), add 'photorealistic', 'RAW photo', 'shot on film', 'ultra-detailed', and describe specific lighting (golden hour, soft box, natural window light). In Midjourney, add --style raw and --q 2 to reduce AI stylization." />
            <FAQ q="What negative prompts should I use?" a="In Stable Diffusion (which supports negative prompts), add: 'blurry, bad anatomy, distorted hands, extra fingers, watermark, low quality, cartoon, ugly, deformed, duplicate' to your negative prompt field. Midjourney doesn't have a traditional negative prompt but you can add --no [unwanted elements] to exclude things." />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">More AI Creative Guides</h2>
          <p className="text-gray-400 mb-6">Explore prompts for Midjourney, Ideogram, Flux, DALL·E, and every major AI art tool.</p>
          <Link href="/website-links" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: accent }}>
            Browse All Guides →
          </Link>
        </div>
      </section>
    </div>
  )
}
