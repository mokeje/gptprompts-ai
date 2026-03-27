"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Code, ImageIcon } from "lucide-react"
import Link from "next/link"

export default function StableDiffusionClientPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-purple-600 text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <ImageIcon className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            Stable Diffusion <br />
            <span className="italic opacity-90">Mastery.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Token weighting, negative prompting, and photorealism. The definitive guide to creating production-ready
            imagery with Stable Diffusion SDXL and beyond.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-6">Sections</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "The Physics of Prompts", num: "01" },
                  { id: "tokens", label: "Token Weighting", num: "02" },
                  { id: "cameras", label: "Technical Camera Specs", num: "03" },
                  { id: "lighting", label: "Lighting & Atmosphere", num: "04" },
                  { id: "advanced", label: "Advanced Syntax", num: "05" },
                  { id: "photorealism", label: "Photorealism Checklist", num: "06" },
                  { id: "faq", label: "FAQ", num: "07" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-purple-600 transition-colors"
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

        {/* Content */}
        <div className="lg:col-span-9 space-y-20 max-w-4xl">
          <article id="intro" className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-6">The Physics of an Elite Image Prompt</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stable Diffusion doesn't see sentences—it sees tokens. To rank as a power user, your prompt structure must
              follow hierarchical logic: [Subject] + [Action/Pose] + [Environment/Background] + [Lighting/Mood] +
              [Camera/Technical] + [Artist Style].
            </p>
            <Card className="bg-purple-50 border-purple-200 p-6 my-8">
              <h4 className="font-bold mb-4">The Prompt Hierarchy</h4>
              <ul className="space-y-2 text-sm">
                <li>1. Subject & Action (specific materials, weathering)</li>
                <li>2. Technical Camera Specs (85mm f/1.8, 35mm f/8, 14mm)</li>
                <li>3. Lighting & Atmosphere (volumetric fog, ray tracing, rim lighting)</li>
                <li>4. Advanced Syntax (token weighting, negative prompts, wildcards)</li>
                <li>5. Artist Style (photographic, painterly, cinematic)</li>
              </ul>
            </Card>
          </article>

          <article id="tokens" className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Token Weighting: The Power Feature</h2>
            <p className="text-lg text-muted-foreground">
              Token weighting uses (keyword:1.3) to increase emphasis or (keyword:0.7) to reduce it. For example,
              (cyberpunk:1.4) ensures the neon aesthetic dominates.
            </p>
            <Card className="bg-blue-50 border-blue-200 p-6 my-8">
              <Code className="w-5 h-5 mb-3" />
              <p className="font-mono text-sm">
                A rugged fisherman with (weathered skin:1.4) and (salt-and-pepper beard:1.2), (oil painting:0.8),
                professional portrait
              </p>
            </Card>
          </article>

          <article id="cameras" className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Technical Camera Specifications</h2>
            <p className="text-lg text-muted-foreground">
              To achieve photorealism, you must prompt for the lens. Each focal length produces dramatically different
              results.
            </p>
            <div className="space-y-4 my-8">
              <Card className="p-6 border-l-4 border-purple-600">
                <h4 className="font-bold mb-2">85mm f/1.8</h4>
                <p className="text-sm text-muted-foreground">
                  Perfect for portraits with creamy background blur (bokeh)
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-purple-600">
                <h4 className="font-bold mb-2">35mm f/8</h4>
                <p className="text-sm text-muted-foreground">
                  Ideal for sharp street photography and environmental shots
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-purple-600">
                <h4 className="font-bold mb-2">14mm Wide-Angle</h4>
                <p className="text-sm text-muted-foreground">Used for grand architecture or sprawling landscapes</p>
              </Card>
            </div>
          </article>

          <article id="lighting" className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Lighting & Atmosphere: The Soul of the Image</h2>
            <p className="text-lg text-muted-foreground">
              Lighting dictates the "soul" of the image. Use technical terms like "Volumetric Fog," "Ray Tracing,"
              "Global Illumination," or "Rim Lighting" to add 3D depth.
            </p>
          </article>

          <article id="advanced" className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Advanced Syntax & Power Features</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-3">Negative Prompting</h4>
                <p className="text-muted-foreground mb-3">
                  Remove the "AI look" with essential negative tokens: blurry, low contrast, distorted limbs, extra
                  fingers, cartoonish, oversaturated.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3">Wildcards & Randomized Choice</h4>
                <p className="text-muted-foreground">
                  Use brackets {`a warrior | a mage | a thief`} to generate variations in a single batch, vital for
                  character design.
                </p>
              </div>
            </div>
          </article>

          <article id="photorealism" className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-6">The Photorealism Checklist 2026</h2>
            <p className="text-lg text-muted-foreground mb-6">
              To ensure your images aren't flagged as "synthetic," include these high-frequency keywords in your
              workflow:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Subsurface scattering</li>
              <li>✓ 4k raw photo</li>
              <li>✓ Unfiltered</li>
              <li>✓ Micro-texture</li>
              <li>✓ High dynamic range (HDR)</li>
              <li>✓ Ray-traced shadows</li>
            </ul>
          </article>

          {/* FAQ Section */}
          <section id="faq" className="py-16 border-t">
            <h2 className="text-4xl font-bold tracking-tight mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "What's the difference between SDXL and Stable Diffusion 1.5?",
                  a: "SDXL has 3x the parameters and significantly better quality, especially for photorealism and complex compositions. Use SDXL for production work.",
                },
                {
                  q: "How do I fix distorted hands and extra fingers?",
                  a: "Add to negative prompt: 'distorted hands, extra fingers, bad anatomy.' Use token weighting (hands:0.7) to reduce hand detail if issues persist.",
                },
                {
                  q: "What's the best way to use LoRAs with Stable Diffusion?",
                  a: "LoRAs are fine-tuned models for specific styles. Add them as: (LoRA name:0.8) to blend with your main prompt without overwhelming it.",
                },
                {
                  q: "How do I create consistent character designs?",
                  a: "Use character reference images and include: 'same character,' 'consistent appearance,' and specific physical descriptors in every prompt.",
                },
                {
                  q: "What are the best negative prompts for professional results?",
                  a: "Universal negatives: 'blurry, low quality, watermark, logo, text, distorted, bad anatomy, extra limbs, oversaturated, plastic, amateur.'",
                },
                {
                  q: "How do I optimize for speed while maintaining quality?",
                  a: "Use 20-30 steps instead of 50+. Enable VAE Tiling. Use Euler sampler. These maintain 95% quality at 50% speed.",
                },
                {
                  q: "What's the ideal seed strategy for variations?",
                  a: "Use same seed with (variation:1.0) to create subtle variations. Change seed for dramatically different results maintaining style consistency.",
                },
                {
                  q: "How do I create seamless textures for game assets?",
                  a: "Use: 'seamless tileable texture, flat lighting, no shadows, 8k resolution.' Add (tile:1.2) at the end for emphasis.",
                },
                {
                  q: "What are embedding-based attacks in Stable Diffusion?",
                  a: "Be cautious with unknown model files. Stick to official repositories and community-vetted checkpoints from Hugging Face.",
                },
                {
                  q: "How do I achieve the 'cinematic' look?",
                  a: "Use: 'cinematic, dramatic lighting, 35mm film, color graded, depth of field, professional color grade, shot on Arri Alexa.'",
                },
                {
                  q: "Can I use Stable Diffusion commercially?",
                  a: "Yes, under the RAIL license. Commercial use is permitted for model outputs, but check your training data sources.",
                },
                {
                  q: "What's the best approach for iterative refinement?",
                  a: "Start broad (style, mood), then narrow (specific details, materials). Use upscalers like Real-ESRGAN for final polish.",
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-base font-semibold hover:no-underline">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            <div>
              <h4 className="font-bold text-sm mb-4">Brand</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                GPTPrompts.AI is your complete resource for mastering prompt engineering across all AI platforms.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4 text-purple-600">AI Models</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <Link href="/chatgpt-prompts" className="hover:text-foreground transition-colors">
                    ChatGPT Prompts
                  </Link>
                </li>
                <li>
                  <Link href="/claude-prompts" className="hover:text-foreground transition-colors">
                    Claude Prompts
                  </Link>
                </li>
                <li>
                  <Link href="/stable-diffusion-prompts" className="hover:text-foreground transition-colors">
                    Stable Diffusion
                  </Link>
                </li>
                <li>
                  <Link href="/midjourney-prompts" className="hover:text-foreground transition-colors">
                    Midjourney Prompts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Resources</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <Link href="/ai-prompt-generators" className="hover:text-foreground transition-colors">
                    Prompt Generators
                  </Link>
                </li>
                <li>
                  <Link href="/chatgpt-prompts-library" className="hover:text-foreground transition-colors">
                    Prompt Library
                  </Link>
                </li>
                <li>
                  <Link href="/prompt-engineering-fundamentals" className="hover:text-foreground transition-colors">
                    Fundamentals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Advanced</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <Link href="/prompt-caching" className="hover:text-foreground transition-colors">
                    Prompt Caching
                  </Link>
                </li>
                <li>
                  <Link href="/prompt-injection-security" className="hover:text-foreground transition-colors">
                    AI Security
                  </Link>
                </li>
                <li>
                  <Link href="/prompt-optimization" className="hover:text-foreground transition-colors">
                    Optimization
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">Writing</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>
                  <Link href="/ai-writing-prompts" className="hover:text-foreground transition-colors">
                    Writing Prompts
                  </Link>
                </li>
                <li>
                  <Link href="/story-prompts" className="hover:text-foreground transition-colors">
                    Story Ideas
                  </Link>
                </li>
                <li>
                  <Link href="/creative-writing-prompts-beginners" className="hover:text-foreground transition-colors">
                    For Beginners
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© 2026 GPTPrompts.AI. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">Empowering creators through advanced prompt engineering.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
