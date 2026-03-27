"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Play, Zap } from "lucide-react"
import Link from "next/link"

export default function ViggleAIPageClient() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* <CHANGE> Hero Section with Viggle branding */}
      <header className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Play className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Viggle AI <br />
            <span className="italic opacity-90">Motion Mastery.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Transform static images into dynamic animations. Master the JST-1 model with advanced motion prompts and
            professional-grade character consistency techniques.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-6">Viggle Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "Viggle Revolution", num: "01" },
                  { id: "commands", label: "Core Commands", num: "02" },
                  { id: "animate", label: "Animate Command", num: "03" },
                  { id: "mix", label: "Mix Command", num: "04" },
                  { id: "ideate", label: "Ideate & Stylize", num: "05" },
                  { id: "consistency", label: "Character Consistency", num: "06" },
                  { id: "troubleshooting", label: "Troubleshooting", num: "07" },
                  { id: "future", label: "Professional Applications", num: "08" },
                  { id: "faq", label: "Viggle FAQ", num: "09" },
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

        {/* Content Body */}
        <div className="lg:col-span-9 space-y-32 max-w-4xl">
          <article id="intro" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">The Viggle Revolution: AI-Powered Motion Control</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Viggle AI has fundamentally shifted the landscape of AI video generation by introducing character
              consistency and motion control previously unavailable to the public. Unlike standard text-to-video tools,
              Viggle uses the advanced JST-1 model that understands human physics at a molecular level.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              This guide explores the nuances of Viggle prompts to help you move beyond basic memes into
              professional-grade animation suitable for marketing, content creation, and entertainment production.
            </p>
          </article>

          <section id="commands" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">The Four Pillars of Viggle Discord</h2>
            <p className="text-lg text-muted-foreground">
              To achieve 1,000-word quality results, you must master these four command types.
            </p>
          </section>

          <section
            id="animate"
            className="space-y-12 bg-purple-900/20 p-12 md:p-20 rounded-[3rem] border border-purple-500/20"
          >
            <div className="flex items-center gap-3 text-purple-600 font-bold uppercase tracking-widest text-sm mb-6">
              <Play className="w-5 h-5" />
              <span>The /Animate Command</span>
            </div>
            <h3 className="text-3xl font-bold tracking-tight">Your Creative Engine</h3>
            <p className="text-xl text-muted-foreground">
              This is the most popular command. It requires an image and a motion prompt.
            </p>
            <div className="bg-background/80 p-8 rounded-2xl border border-purple-500/20">
              <h4 className="text-purple-600 font-bold mb-4 uppercase tracking-widest text-xs">The Prompt Structure</h4>
              <p className="font-mono text-sm mb-6">[Subject] + [Action] + [Environment] + [Stylization]</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                <strong>Pro Tip:</strong> Instead of "man dancing," use "man performing synchronized K-pop choreography,
                high energy, fluid transitions, professional concert lighting." Specificity is key.
              </p>
            </div>
          </section>

          <section id="mix" className="space-y-12">
            <div className="flex items-center gap-3 text-purple-600 font-bold uppercase tracking-widest text-sm mb-6">
              <Zap className="w-5 h-5" />
              <span>The /Mix Command</span>
            </div>
            <h3 className="text-2xl font-bold">Reference-Based Motion Mapping</h3>
            <p className="text-muted-foreground">
              The /Mix command lets you take motion from a reference video and apply it to a static image. This is the
              secret behind viral "SpongeBob dancing like the Joker" videos.
            </p>
            <Card className="p-8 border-2 border-purple-500/30">
              <p className="text-sm font-bold text-purple-600 mb-3">CRITICAL: Source Video Quality</p>
              <p className="text-sm text-muted-foreground">
                Ensure the source video has a clear silhouette. If the background is too busy, the AI will struggle to
                map the limbs correctly. Solid backgrounds work best.
              </p>
            </Card>
          </section>

          <section id="consistency" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Advanced: Character Consistency & Hallucination Prevention
            </h2>
            <p className="text-muted-foreground">
              One of the biggest hurdles in AI video is "hallucination"—where a character grows an extra limb or
              disappears.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Weighting Keywords", desc: "Use 'fixed torso', 'stable lighting', 'consistent proportions'" },
                {
                  title: "Negative Prompting",
                  desc: "Describe what you DON'T want: 'avoid distorted limbs, no floating objects'",
                },
                {
                  title: "Green Screen Trick",
                  desc: "Always prompt for 'solid green background' for post-production editing",
                },
                { title: "Resolution Matters", desc: "Always use images 720p or higher to prevent blurriness" },
              ].map((item, i) => (
                <Card key={i} className="p-6 border-purple-500/20">
                  <h4 className="font-bold text-purple-600 mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="troubleshooting" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Troubleshooting Common Viggle Errors</h2>
            <div className="space-y-6">
              {[
                {
                  issue: "Video too blurry",
                  solution: "Uploaded image is under 720p. Increase resolution to 1080p minimum.",
                },
                {
                  issue: "Distorted limbs",
                  solution: "Avoid overlapping movements. Don't ask for 'clapping while doing a backflip.'",
                },
                {
                  issue: "Character disappears",
                  solution:
                    "Increase the specificity of your subject description. Use 'fully visible male character, age 25-30' instead of 'person.'",
                },
                {
                  issue: "Wrong motion applied",
                  solution:
                    "In /Mix, ensure source video has clear silhouette. Busy backgrounds confuse the motion mapper.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-red-900/10 rounded-xl border border-red-500/20">
                  <h4 className="font-bold text-red-600 mb-2">{item.issue}</h4>
                  <p className="text-sm text-muted-foreground">{item.solution}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Viggle AI FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What is the difference between /Animate and /Ideate?",
                  a: "/Animate requires an image + motion prompt. /Ideate is pure text-to-video with no image input.",
                },
                {
                  q: "How long can a Viggle video be?",
                  a: "Current limit is 4-6 seconds per generation. You can chain multiple generations for longer videos.",
                },
                {
                  q: "Can I use Viggle commercially?",
                  a: "Yes, with Pro/Business plans. Always check terms—free tier content typically requires attribution.",
                },
                {
                  q: "What image formats does Viggle accept?",
                  a: "PNG, JPG, WebP. Recommended: 1080p or higher, 16:9 or square aspect ratio.",
                },
                {
                  q: "How do I prevent the 'jelly limbs' effect?",
                  a: "Add 'rigid body structure' and 'anatomically correct' to your prompt. Avoid unrealistic physics.",
                },
                {
                  q: "Can I animate non-human subjects?",
                  a: "Yes, but results are best with humanoid figures. Animal and object animation works but requires more specific prompting.",
                },
                {
                  q: "What's the difference between /Stylize and /Mix?",
                  a: "/Stylize changes aesthetic (real to anime). /Mix applies motion from reference video. Different use cases.",
                },
                {
                  q: "How do I get consistent character across multiple videos?",
                  a: "Save the original image. Use /Animate multiple times with the same image for consistent character design.",
                },
                {
                  q: "Is Viggle better than other AI video tools?",
                  a: "Viggle excels at character consistency and motion control. Tools like Runway are better for text-to-video flexibility.",
                },
                {
                  q: "Can I export as different formats?",
                  a: "Yes—MP4, WebM, GIF. Choose based on platform: MP4 for web, GIF for social media loops.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-purple-500/20 py-4">
                  <AccordionTrigger className="text-xl font-bold hover:text-purple-600 transition-colors text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg leading-relaxed pt-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      {/* ... existing footer ... */}
      <footer className="bg-foreground text-background py-32 px-6 md:px-12 mt-32 border-t border-background/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm text-lg">
              The world's most comprehensive prompt engineering library.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">AI Models</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Perplexity Prompts", href: "/perplexity-prompts" },
                { label: "Viggle AI Prompts", href: "/viggle-ai-prompts", highlight: true },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.highlight ? "text-purple-400 font-bold" : "hover:text-primary opacity-80"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">University Essays</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Common App Essays", href: "/common-app-essays" },
                { label: "NYU Essays", href: "/nyu-essay-prompts" },
                { label: "Stanford Essays", href: "/stanford-essay-prompts" },
                { label: "Princeton Essays", href: "/princeton-essays" },
                { label: "UChicago Essays", href: "/uchicago-essays" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Resources</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Free AI Prompts Library", href: "/free-ai-prompts" },
                { label: "SQL Prompts", href: "/sql-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-8 mt-8 border-t border-background/10">
                <p className="text-[10px] opacity-30 uppercase tracking-widest">© 2026 GPTPrompts.AI</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}
