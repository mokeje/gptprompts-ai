import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Palette } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Midjourney Prompts Guide: Create Stunning AI Art 2026 | GPTPrompts.AI",
  description:
    "Master Midjourney V6 with our complete prompts guide. Learn photography syntax, stylistic keywords, aspect ratios, and advanced parameters to generate stunning AI art.",
}

export default function MidjourneyGuidePage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#9333ea] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Palette className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Midjourney Prompts <br />
            <span className="italic opacity-90">Guide.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Create stunning AI art by mastering photography syntax, stylistic keywords, and advanced parameters. The
            visual language of Midjourney explained.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#9333ea] mb-6">Midjourney Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "Visual Language Basics", num: "01" },
                  { id: "anatomy", label: "Prompt Anatomy", num: "02" },
                  { id: "parameters", label: "Mastering Parameters", num: "03" },
                  { id: "photography", label: "Photography Syntax", num: "04" },
                  { id: "styles", label: "Stylistic Keywords", num: "05" },
                  { id: "usecase", label: "Niche Use Cases", num: "06" },
                  { id: "faq", label: "Midjourney FAQ", num: "07" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#9333ea] transition-colors"
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

        <div className="lg:col-span-9 space-y-32 max-w-4xl">
          <article id="intro" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">The Visual Language of AI Art</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Midjourney V6 and beyond have introduced deep natural language understanding, but mastery requires
              thinking in the language of photography, cinematography, and fine art. The most stunning AI-generated
              images blend technical specifications with artistic references and lighting philosophy.
            </p>
          </article>

          <section id="anatomy" className="space-y-12 bg-[#fafafa] p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight mb-8">The Anatomy of a Winning Midjourney Prompt</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A high-level Midjourney prompt consists of four strategic layers:
              </p>
              <div className="space-y-6">
                {[
                  { layer: "The Subject", desc: "e.g., A futuristic nomad in the Sahara desert at sunset" },
                  {
                    layer: "Environment/Lighting",
                    desc: "Cyberpunk neon, golden hour light, diffused volumetric lighting",
                  },
                  { layer: "Technical Specs", desc: "Shot on 35mm film, f/1.8 aperture, Hasselblad, 8k resolution" },
                  { layer: "Stylistic Influence", desc: "Minimalism, Bauhaus, Wes Anderson color palette, cinematic" },
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-[#9333ea] pl-6">
                    <h3 className="font-bold text-lg mb-2">{item.layer}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="parameters" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Mastering Parameters (2026 Update)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  param: "--ar (Aspect Ratio)",
                  desc: "16:9 for cinematic, 4:5 for social media, 1:1 for square, 3:2 for landscape",
                },
                {
                  param: "--s (Stylize)",
                  desc: "0-1000 scale. Higher (750+) = more artistic flair. Lower = literal interpretation",
                },
                {
                  param: "--c (Chaos)",
                  desc: "Controls variation in initial images. High chaos = brainstorming mode. Low = consistency",
                },
                {
                  param: "--v (Version)",
                  desc: "Use --v 6.1 for photorealism, --niji for anime, --default for balanced results",
                },
              ].map((item, i) => (
                <Card key={i} className="p-6">
                  <h3 className="font-bold mb-2 text-[#9333ea]">{item.param}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="photography" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Photography Syntax for AI Artists</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-[#9333ea] pl-6">
                <h3 className="text-2xl font-bold mb-4">Lens Choice</h3>
                <p className="text-muted-foreground mb-4">
                  Different lenses create different aesthetics. Use: Wide-angle (16-35mm) for landscape grandeur.
                  Standard (50mm) for natural perspective. Telephoto (70-200mm) for compression and intimacy. Macro (1:1
                  ratio) for product detail.
                </p>
              </div>
              <div className="border-l-4 border-[#9333ea] pl-6">
                <h3 className="text-2xl font-bold mb-4">Lighting Terminology</h3>
                <p className="text-muted-foreground">
                  Golden hour, rim lighting, chiaroscuro, soft diffused light, volumetric lighting, underglow, neon
                  backlighting. Midjourney responds well to specific lighting descriptors that photographers use.
                </p>
              </div>
            </div>
          </section>

          <section id="usecase" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Niche Use Cases</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Product Photography",
                  prompt:
                    '"High-end skincare bottle on carrara marble slab, water droplets, soft studio lighting, macro lens, 8k resolution --ar 4:5 --v 6.1 --s 750"',
                },
                {
                  title: "Architectural Visualization",
                  prompt:
                    '"Zaha Hadid inspired library interior, parametric design, sunlight streaming through glass, ultra-wide angle lens, photorealistic, volumetric lighting --ar 16:9 --v 6.1"',
                },
                {
                  title: "Fashion Editorial",
                  prompt:
                    '"High fashion editorial photography, model in avant-garde outfit, editorial lighting, shot on Hasselblad 35mm, Vogue aesthetic, color graded, --ar 9:16 --s 800"',
                },
              ].map((use, i) => (
                <div key={i} className="bg-black text-white p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-[#9333ea]">{use.title}</h3>
                  <div className="font-mono text-sm opacity-80">{use.prompt}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Midjourney FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What's the difference between V6 and V6.1?",
                  a: "V6.1 has improved photorealism and consistency. Use V6.1 for photorealistic images, standard V6 for more stylized results.",
                },
                {
                  q: "How do I get consistent characters across multiple generations?",
                  a: "Use the --cref flag with a reference image URL. Combine with --sref for style consistency. Describe the character in detail to maintain consistency.",
                },
                {
                  q: "What's the best approach for iterating on a design?",
                  a: "Use the U buttons to upscale your preferred variation, then use that upscale as a new reference. Adjust parameters incrementally rather than drastically.",
                },
                {
                  q: "Can I use Midjourney for commercial projects?",
                  a: "Yes, with a paid Midjourney subscription. Free tier outputs cannot be used commercially.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#9333ea]">{faq.q}</AccordionTrigger>
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm text-lg">
              Master the visual language of Midjourney AI art generation.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Image Generation</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Midjourney Prompts", href: "/midjourney-prompts" },
                { label: "Image Prompts", href: "/image-prompts" },
                { label: "Leonardo AI", href: "/leonardo-ai" },
                { label: "Stable Diffusion", href: "/stable-diffusion-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Prompt Guides</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Prompt Engineering Fundamentals", href: "/prompt-engineering-fundamentals" },
                { label: "ChatGPT Prompts Library", href: "/chatgpt-prompts-library" },
                { label: "AI Prompt Techniques", href: "/write-ai-prompts-techniques" },
                { label: "Prompt Generators", href: "/ai-prompt-generators" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Related Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Photography Techniques", href: "/photo-editing-prompts" },
                { label: "Free Prompts Library", href: "/free-ai-prompts" },
                { label: "Design Prompts", href: "/image-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Tools & Career</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Pixverse AI", href: "/pixverse-ai" },
                { label: "Hailuo AI", href: "/hailuo-ai" },
                { label: "Prompt Jobs 2026", href: "/prompt-engineering-jobs-2026" },
                { label: "LinkedIn Headshots", href: "/linkedin-professional-headshots" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-8 mt-8 border-t border-background/10">
                <p className="text-[10px] opacity-30 uppercase tracking-widest leading-loose">
                  © 2026 GPTPrompts.AI <br />
                  All Rights Reserved.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}
