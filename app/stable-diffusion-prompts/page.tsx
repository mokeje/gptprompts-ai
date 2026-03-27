import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Wand2, Cpu, Layers } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Stable Diffusion Prompts: The Definitive Open-Source Guide | GPTPrompts.AI",
  description:
    "Master Stable Diffusion XL and SD 1.5 with our massive guide. Learn negative prompting, weights, LoRA integration, and the best Stable Diffusion prompts for photorealism.",
}

export default function StableDiffusionPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#8b5cf6] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Wand2 className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            SD <br />
            <span className="italic opacity-90 text-purple-200">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Own the local model. Our master guide reveals the advanced Stable Diffusion prompts that unlock
            unprecedented control over photorealism, artistic style, and anatomical accuracy.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70"></div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6] mb-6">Open Synthesis</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "The Open Source Edge", num: "01" },
                  { id: "syntax", label: "Weights & Syntax", num: "02" },
                  { id: "negative", label: "Negative Prompting", num: "03" },
                  { id: "controlnet", label: "ControlNet & Layout", num: "04" },
                  { id: "lora", label: "LoRA & Checkpoints", num: "05" },
                  { id: "photorealism", label: "Mastering Realism", num: "06" },
                  { id: "config", label: "Technical Config", num: "07" },
                  { id: "faq", label: "SD FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#8b5cf6] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              The Open Source Edge: Why Stable Diffusion Matters
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Unlike DALL-E or Midjourney, Stable Diffusion gives you the keys to the engine. It's a tool for creators
              who demand absolute control. However, that control comes with a steep learning curve. Mastering{" "}
              <strong>Stable Diffusion prompts</strong> requires an understanding of token weighting, negative embedding
              spaces, and how different checkpoints interpret your words.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              This guide explores the specific syntax that sets SD apart. We cover how to use parentheses for emphasis,
              the critical role of the negative prompt box, and how to integrate LoRAs to achieve consistent characters
              and styles across multiple generations.
            </p>
          </article>

          <section
            id="controlnet"
            className="space-y-12 bg-purple-50 p-12 md:p-20 rounded-[3rem] border border-purple-100"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#8b5cf6] font-bold uppercase tracking-widest text-sm mb-6">
                <Layers className="w-5 h-5" />
                <span>ControlNet Mastery</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Structural Sovereignty</h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                ControlNet is the ultimate plugin for Stable Diffusion. It allows you to use reference images to define
                the exact pose, depth, or edges of your generation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded-2xl border border-purple-100 shadow-sm">
                  <h4 className="font-bold mb-4">Canny Edge Detection:</h4>
                  <p className="text-sm text-muted-foreground">
                    "Use a sketch of a building as a Canny reference. Prompt: 'Hyper-modern glass skyscraper, sunset
                    lighting, architectural photography, 8k.' The model will follow the lines of your sketch exactly."
                  </p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-purple-100 shadow-sm">
                  <h4 className="font-bold mb-4">OpenPose:</h4>
                  <p className="text-sm text-muted-foreground">
                    "Upload a photo of a person dancing. Use OpenPose to extract the skeleton. Prompt: 'Cyberpunk cyborg
                    performing a ritual dance, neon trails, cinematic smoke.' The cyborg will match the dancer's pose."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="photorealism" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-50 rounded-xl">
                <Cpu className="w-8 h-8 text-[#8b5cf6]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Advanced Photorealism Syntax</h2>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              <p>
                To achieve 'Pore-level' detail in Stable Diffusion, you must prompt for the <strong>process</strong> of
                photography, not just the result.
              </p>
              <Card className="p-8 bg-slate-900 text-slate-100 my-8">
                <h4 className="text-[#8b5cf6] font-bold mb-4 uppercase tracking-widest text-xs">The Realism Stack:</h4>
                <p className="font-mono text-sm leading-relaxed italic opacity-80">
                  "(RAW photo:1.2), portrait of a [SUBJECT], (highly detailed skin:1.3), 8k uhd, dslr, soft lighting,
                  high quality, Fujifilm XT4, 85mm lens, f/1.8, (subtle skin imperfections:1.1), (natural lighting:1.2)"
                </p>
                <p className="text-[10px] mt-4 opacity-50 font-sans uppercase tracking-widest">
                  Note: The weights (e.g. :1.3) are critical for preventing the 'Plastic AI Skin' look.
                </p>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Stable Diffusion FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What is the difference between SDXL and SD 1.5?",
                  a: "SDXL is much more capable of understanding natural language and has a higher base resolution (1024x1024). SD 1.5 is faster, requires less VRAM, and has a much larger library of community-created LoRAs and specialized checkpoints.",
                },
                {
                  q: "How many steps should I use in my generation?",
                  a: "Generally 20-35 steps for most samplers like DPM++ 2M Karras. Going above 50 rarely improves the image and usually just increases generation time. Some Turbo or Lightning models can work in as few as 4-8 steps.",
                },
                {
                  q: "What is CFG Scale?",
                  a: "Classifier Free Guidance. It controls how closely the model follows your prompt. A scale of 7-9 is the 'sweet spot' for most models. Too high, and the image becomes over-saturated, 'deep-fried', or distorted.",
                },
                {
                  q: "What are LoRAs and how do I prompt them?",
                  a: "LoRAs (Low-Rank Adaptation) are small sub-models that add a specific style or person to a checkpoint. You prompt them using trigger words and a weight: '<lora:Name:0.7>'. A weight of 0.6-0.8 is usually best.",
                },
                {
                  q: "How do I fix mangled hands in Stable Diffusion?",
                  a: "Use negative prompts like 'extra fingers, mutated hands, bad anatomy.' Alternatively, use ControlNet 'Depth' or 'Scribble' to provide a structural guide for the hands, or use an Inpainting model to fix them post-generation.",
                },
                {
                  q: "What is 'Inpainting' and 'Outpainting'?",
                  a: "Inpainting is fixing a specific part of an image (like a face or a hand). Outpainting is expanding the borders of the image to see more of the scene. Both are done using specialized models or extensions like 'ControlNet Inpaint'.",
                },
                {
                  q: "Can I run Stable Diffusion on my own computer?",
                  a: "Yes, provided you have a decent GPU (preferably NVIDIA with 8GB+ VRAM). Tools like Automatic1111, ComfyUI, or Forge make it easy to install and run locally.",
                },
                {
                  q: "What are 'Textual Inversions'?",
                  a: "Textual Inversions (or 'Embeddings') are tiny files that teach the model a new concept using a single word. They are often used in the negative prompt box (e.g. 'EasyNegative') to simplify complex negative prompts.",
                },
                {
                  q: "How do I use 'Attention Switching'?",
                  a: "Use the '[cat|dog] on a sofa' syntax. This tells the model to generate a cat for the first step, a dog for the second, and so on. It creates unique hybrid creatures or blends.",
                },
                {
                  q: "What is 'Hires. fix' and when should I use it?",
                  a: "Hires. fix generates an image at a lower resolution and then upscales/refines it in one go. Use it to avoid 'doubling' artifacts (like two heads) when trying to generate large images in SD 1.5.",
                },
                {
                  q: "What is the best sampler to use?",
                  a: "DPM++ 2M Karras or Euler a are the most common. DPM++ 2M Karras is generally considered the 'gold standard' for balanced speed and quality in SDXL and 1.5.",
                },
                {
                  q: "Can I generate videos with Stable Diffusion?",
                  a: "Yes, using extensions like AnimateDiff or SVD (Stable Video Diffusion). These tools use your prompts to generate short, consistent video clips based on your image generations.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#8b5cf6] transition-colors text-left">
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

      {/* Footer Placeholder */}
      <footer className="bg-foreground text-background py-32 px-6 md:px-12 mt-32 border-t border-background/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="text-3xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm">
              The expert library for the open-source creative movement. Mastering the local machine.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest opacity-40">Creative Suite</h4>
            <ul className="space-y-4 font-medium">
              <li>
                <Link href="/stable-diffusion-prompts" className="text-purple-400 font-bold">
                  SD Prompts
                </Link>
              </li>
              <li>
                <Link href="/image-prompts" className="hover:text-purple-400 transition-colors">
                  Image Prompts
                </Link>
              </li>
              <li>
                <Link href="/midjourney-prompts" className="hover:text-purple-400 transition-colors">
                  Midjourney Prompts
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest opacity-40">Legal</h4>
            <ul className="space-y-4 font-medium opacity-60">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}
