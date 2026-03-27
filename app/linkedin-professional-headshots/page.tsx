import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Camera, Lightbulb } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "LinkedIn Professional Headshots with AI: Boost Your Profile with Perfect Photos | GPTPrompts.AI",
  description:
    "Create professional LinkedIn headshots using AI image generators. Master prompting techniques for realistic, high-quality portraits that boost your personal brand.",
}

export default function LinkedInHeadshotsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Camera className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[0.85] mb-8">
            Professional <br />
            <span className="italic opacity-90">AI Headshots.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Create stunning LinkedIn profile photos with AI image generators. Master the prompting techniques that
            produce realistic, high-quality portraits without the $500 price tag.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">Master AI Headshots</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "The Digital First Handshake", num: "01" },
                  { id: "science", label: "Science of Professional Images", num: "02" },
                  { id: "lighting", label: "Lighting Keywords", num: "03" },
                  { id: "lens", label: "Lens Specifications", num: "04" },
                  { id: "texture", label: "Texture & Realism", num: "05" },
                  { id: "templates", label: "Sample Prompt Templates", num: "06" },
                  { id: "pitfalls", label: "Common Pitfalls to Avoid", num: "07" },
                  { id: "tools", label: "AI Headshot Tools", num: "08" },
                  { id: "faq", label: "LinkedIn Headshots FAQ", num: "09" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-blue-600 transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">Your LinkedIn Headshot is Your First Handshake</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              In the digital-first job market, your LinkedIn headshot is your first and often only chance to make a
              lasting impression. Recruiters spend less than 6 seconds on a profile, and your photo is the first thing
              they notice. However, not everyone has the budget for a $500 professional photography session.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Enter AI image generators like Midjourney, DALL-E 3, and specialized AI headshot tools. With precise
              prompting, you can generate professional-quality portraits that look authentically like photographs, not
              video game characters. The secret lies in understanding lighting, lens specifications, and texture
              keywords.
            </p>
          </article>

          <section id="science" className="space-y-12 bg-slate-900 text-slate-100 p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-blue-400 font-bold uppercase tracking-widest text-sm mb-6">
                <Lightbulb className="w-5 h-5" />
                <span>The Science of Realism</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Three Elements of a Professional Image
              </h2>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                A high-ranking LinkedIn photo needs exactly three things: correct lighting, realistic texture, and
                appropriate attire. Move beyond generic phrases like "Professional man in a suit" and inject technical
                specificity.
              </p>
              <div className="space-y-8">
                <div className="p-8 bg-slate-800 rounded-2xl border border-white/5">
                  <h4 className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-xs">
                    The Professional Photo Trifecta:
                  </h4>
                  <ul className="space-y-4 text-sm opacity-70">
                    <li>
                      <strong>1. Lighting:</strong> Proper lighting defines shadows, highlights skin tone, and creates
                      dimension.
                    </li>
                    <li>
                      <strong>2. Texture:</strong> Realistic skin texture, subtle details, and pore-level accuracy
                      separate professional photos from AI fakes.
                    </li>
                    <li>
                      <strong>3. Attire:</strong> Appropriate clothing for your industry signals professionalism and
                      context.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="lighting" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-600/10 rounded-xl">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Lighting Keywords for Realism</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional photographers have names for lighting techniques. Using these specific terms in your AI
              prompts dramatically improves realism.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Rembrandt Lighting",
                  desc: "Classic studio technique with dramatic shadows. Creates triangular highlight on the cheek opposite the key light.",
                },
                {
                  title: "Golden Hour",
                  desc: "Warm, diffused natural light from sunrise or sunset. Flatters skin tones and creates a dreamy quality.",
                },
                {
                  title: "Soft Studio Lighting",
                  desc: "Diffused artificial light with minimal shadows. Professional, flattering, and forgiving for skin imperfections.",
                },
                {
                  title: "Natural Window Light",
                  desc: "Directional light from a window. Soft when diffused, creates natural-looking highlights and depth.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-8 border-none shadow-xl bg-secondary/20">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">{item.title}</h3>
                  <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="lens" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Lens Specifications Matter</h2>
            <div className="space-y-8">
              <div className="p-8 bg-blue-600/5 border-l-4 border-blue-600 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Technical Camera Terms</h3>
                <p className="mb-4 text-muted-foreground">
                  Photographers use specific lenses and aperture settings to achieve professional results. Tell the AI
                  to use these exact specifications:
                </p>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>
                    <strong>85mm lens:</strong> The gold standard for portraits. Creates flattering proportions and
                    natural bokeh.
                  </li>
                  <li>
                    <strong>f/1.8 - f/2.8 aperture:</strong> Shallow depth of field blurs the background while keeping
                    the face sharp.
                  </li>
                  <li>
                    <strong>Shallow depth of field:</strong> Explicitly demands background blur (bokeh) for professional
                    separation.
                  </li>
                  <li>
                    <strong>4K resolution:</strong> Ensures high-quality detail and clarity.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="templates" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Sample Prompt Templates</h2>
            <div className="space-y-8">
              <div className="p-8 bg-blue-600/5 border-l-4 border-blue-600 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">The Executive Look</h3>
                <code className="block bg-foreground/10 p-4 rounded text-sm overflow-x-auto leading-relaxed">
                  "Photorealistic portrait of a professional [gender] in their 30s, wearing a charcoal blazer and white
                  button-down. 85mm lens, f/2.8 aperture. Soft studio lighting, neutral grey background. High-resolution
                  skin textures, natural pores, no filters. Professional posture, confident direct gaze with slight
                  smile, studio photography style."
                </code>
              </div>

              <div className="p-8 bg-blue-600/5 border-l-4 border-blue-600 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">The Creative Professional</h3>
                <code className="block bg-foreground/10 p-4 rounded text-sm overflow-x-auto leading-relaxed">
                  "Candid-style headshot of a [gender] professional in a minimalist modern office. Soft natural light
                  from a side window. Wearing high-quality turtleneck. Shallow depth of field with blurred office
                  background. Authentic natural expression, sharp focus on eyes, realistic skin texture, 4k resolution,
                  professional headshot photography."
                </code>
              </div>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">LinkedIn Headshots FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Which AI tool is best for headshots?",
                  a: "Midjourney and DALL-E 3 produce the highest-quality results. Specialized tools like 'Headshot Pro' exist but often cost money. Experiment with free versions first.",
                },
                {
                  q: "Can AI headshots look obviously fake?",
                  a: "Yes, if you don't specify texture and lighting. Avoid vague prompts like 'professional headshot.' Use the anatomical keywords and lens specifications provided above.",
                },
                {
                  q: "Should I disclose that my headshot is AI-generated?",
                  a: "LinkedIn's terms allow AI-generated content if disclosed. However, if your AI photo looks authentically like a real photo, disclosure may hurt your personal brand. Be transparent if asked directly.",
                },
                {
                  q: "What's the most common mistake in AI headshot prompts?",
                  a: "Over-perfection. AI-generated headshots fail when they look 'too perfect' or have plastic skin. Add constraints like 'no heavy makeup,' 'natural skin texture,' and 'authentic expression.'",
                },
                {
                  q: "How do I avoid the 'uncanny valley' effect?",
                  a: "Use negative prompts: 'no extra limbs, no distorted features, no plastic skin, no obvious AI artifacts.' Demand anatomical accuracy and authentic imperfection.",
                },
                {
                  q: "Can I generate different headshots for different industries?",
                  a: "Absolutely. Adjust attire and setting: 'lawyer in a navy suit, formal background' vs 'creative professional in casual blazer, modern office background.'",
                },
                {
                  q: "What's the difference between professional and casual AI headshots?",
                  a: "Professional headshots use studio lighting, neutral backgrounds, formal attire, and direct camera gaze. Casual can include environment, outdoor lighting, and candid expressions.",
                },
                {
                  q: "How many variations should I generate?",
                  a: "Generate 5-10 variations and pick the best one. AI quality varies widely. Look for sharp focus on eyes, natural skin texture, and authentic expression.",
                },
                {
                  q: "Can I use the same AI headshot across multiple platforms?",
                  a: "Yes, but optimize sizing for each platform. LinkedIn prefers square 500x500px images. Resize accordingly without losing quality.",
                },
                {
                  q: "Is an AI headshot better than no headshot?",
                  a: "A professional AI headshot is absolutely better than no profile photo or a blurry selfie. It signals professionalism and investment in your personal brand.",
                },
                {
                  q: "How often should I update my LinkedIn headshot?",
                  a: "Update annually or when your appearance changes significantly. Professional photos age naturally, but AI-generated ones can look outdated if your style changes.",
                },
                {
                  q: "What if I don't like my AI-generated headshots?",
                  a: "Adjust the prompt. Try different lighting keywords, lens specifications, or attire. Iterate until you find a style that matches your personal brand.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-blue-600 transition-colors text-left">
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

      {/* Footer */}
      <footer className="bg-foreground text-background py-32 px-6 md:px-12 mt-32 border-t border-background/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm text-lg">
              Master prompt engineering and unlock the true potential of AI systems.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">AI Models</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Perplexity Prompts", href: "/perplexity-prompts" },
                { label: "Midjourney Prompts", href: "/midjourney-prompts" },
                { label: "Free AI Prompts", href: "/free-ai-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">University Essays</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Stanford Essays", href: "/stanford-essay-prompts" },
                { label: "MIT Essays", href: "/uc-essay-prompts" },
                { label: "Princeton Essays", href: "/princeton-essays" },
                { label: "NYU Essays", href: "/nyu-essay-prompts" },
                { label: "Common App Essays", href: "/common-app-essays" },
                { label: "View All Universities", href: "/essay-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Career & Writing</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Story Prompts", href: "/story-prompts" },
                { label: "Photo Editing", href: "/photo-editing-prompts" },
                { label: "Social Media", href: "/social-media-marketing-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Advanced Tools</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Gemini AI Guide", href: "/gemini-ai-guide" },
                { label: "Google AI Studio", href: "/google-ai-studio" },
                { label: "BlackBox AI", href: "/blackbox-ai" },
                { label: "Leonardo AI", href: "/leonardo-ai" },
                { label: "Suno AI", href: "/suno-ai" },
                { label: "View All Tools", href: "/kimi-ai-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Resources & Guides</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Human-Like Prompts", href: "/human-like-prompts", highlight: true },
                { label: "LinkedIn Professional Headshots", href: "/linkedin-professional-headshots", highlight: true },
                { label: "Perfect Resume with AI", href: "/perfect-resume-ai", highlight: true },
                { label: "Prompt Writing Best Practices", href: "/prompt-best-practices", highlight: true },
                { label: "Virtual Assistant Prompts", href: "/virtual-assistant-prompts" },
                { label: "Creative Writing for Beginners", href: "/creative-writing-prompts-beginners" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.highlight ? "text-blue-600 font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
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
