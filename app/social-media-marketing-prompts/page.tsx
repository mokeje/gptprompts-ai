import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { TrendingUp, Share2, Target } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "20 Social Media Marketing Prompts for Marketers | GPTPrompts.AI",
  description:
    "Master AI-powered social media with 20 high-performing prompts for TikTok, Instagram, LinkedIn, and X. Drive engagement, growth, and conversions.",
}

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#1f2937] text-[#f3f4f6] py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <TrendingUp className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Social Media <br />
            <span className="italic opacity-90">Marketing.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            20 high-performing AI prompts to spark engagement, drive traffic, and convert followers into loyal customers
            across all major platforms.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1f2937] mb-6">Marketing Mastery</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "The 2026 Landscape", num: "00" },
                  { id: "strategy", label: "Strategy & Planning", num: "01" },
                  { id: "platform", label: "Platform-Specific", num: "02" },
                  { id: "conversion", label: "High-Conversion", num: "03" },
                  { id: "engagement", label: "Engagement & Community", num: "04" },
                  { id: "repurposing", label: "Repurposing Content", num: "05" },
                  { id: "crisis", label: "Crisis & Trends", num: "06" },
                  { id: "workflow", label: "Prompt-First Workflow", num: "07" },
                  { id: "faq", label: "Marketing FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#1f2937] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">The 2026 Social Media Landscape</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              In the hyper-competitive landscape of 2026, social media marketing has moved beyond simple posting. It is
              now about relevance, speed, and algorithmic alignment. To stay ahead, marketers are using AI to
              brainstorm, draft, and optimize content across platforms like Instagram, TikTok, LinkedIn, and X. These 20
              prompts represent the most effective strategies from the world's top growth marketers.
            </p>
          </article>

          <section id="strategy" className="space-y-12 bg-[#1f2937] text-[#f3f4f6] p-12 md:p-20 rounded-[3rem]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#60a5fa] font-bold uppercase tracking-widest text-sm mb-6">
                <Target className="w-5 h-5" />
                <span>Strategy & Planning Prompts</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Before You Create, Plan</h2>
              <div className="space-y-6">
                <Card className="p-6 bg-[#111827] border-none">
                  <h4 className="text-[#60a5fa] font-bold mb-3 uppercase tracking-widest text-sm">
                    The Audience Persona
                  </h4>
                  <p className="opacity-90">
                    "Act as a Market Researcher. Create a detailed buyer persona for a [Product/Service] targeting Gen Z
                    eco-conscious consumers. Include their pain points, preferred social platforms, and the 'slang' or
                    tone that resonates with them."
                  </p>
                </Card>
                <Card className="p-6 bg-[#111827] border-none">
                  <h4 className="text-[#60a5fa] font-bold mb-3 uppercase tracking-widest text-sm">
                    The 30-Day Content Pillar
                  </h4>
                  <p className="opacity-90">
                    "I need a 4-week content calendar for a [Niche] brand. Divide the content into four pillars:
                    Educational, Inspirational, Promotional, and Behind-the-Scenes. Provide a headline for each day."
                  </p>
                </Card>
                <Card className="p-6 bg-[#111827] border-none">
                  <h4 className="text-[#60a5fa] font-bold mb-3 uppercase tracking-widest text-sm">
                    Competitor Gap Analysis
                  </h4>
                  <p className="opacity-90">
                    "Analyze the top 3 competitors in the [Industry] space. Based on their recent high-performing posts,
                    identify three 'content gaps' or topics they are ignoring that my brand can capitalize on."
                  </p>
                </Card>
                <Card className="p-6 bg-[#111827] border-none">
                  <h4 className="text-[#60a5fa] font-bold mb-3 uppercase tracking-widest text-sm">
                    Brand Voice Guidelines
                  </h4>
                  <p className="opacity-90">
                    "Read this sample of my writing [Paste Sample]. Create a 'Brand Voice Guide' that defines our tone,
                    three core values, and a list of 'Words We Use' vs. 'Words We Avoid.'"
                  </p>
                </Card>
              </div>
            </div>
          </section>

          <section id="platform" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#1f2937]/10 rounded-xl">
                <Share2 className="w-8 h-8 text-[#1f2937]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Platform-Specific Hook & Caption Prompts</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Each platform has its own "vibe." These prompts ensure your content fits the feed perfectly.
            </p>

            <div className="space-y-6">
              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Viral TikTok/Reels Script</h3>
                <div className="p-4 bg-white rounded-xl border border-[#1f2937]/20 font-mono text-sm text-slate-700 mb-4">
                  "Write a 30-second script for a TikTok video about [Topic]. Use the 'Problem-Agitation-Solution' (PAS)
                  framework. Include a visual hook for the first 3 seconds and a trending audio suggestion."
                </div>
              </Card>

              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">LinkedIn Thought Leadership</h3>
                <div className="p-4 bg-white rounded-xl border border-[#1f2937]/20 font-mono text-sm text-slate-700 mb-4">
                  "Write a LinkedIn post about [Industry Trend]. The tone should be professional yet slightly contrarian
                  to spark debate in the comments. End with a question to encourage engagement."
                </div>
              </Card>

              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">Instagram Carousel Outline</h3>
                <div className="p-4 bg-white rounded-xl border border-[#1f2937]/20 font-mono text-sm text-slate-700 mb-4">
                  "Create a 7-slide outline for an Instagram Carousel teaching [Skill]. Provide the text for each slide
                  and a brief description of what the visual should look like."
                </div>
              </Card>

              <Card className="p-8 border-none shadow-xl bg-secondary/30">
                <h3 className="text-2xl font-bold mb-4">X (Twitter) Thread</h3>
                <div className="p-4 bg-white rounded-xl border border-[#1f2937]/20 font-mono text-sm text-slate-700 mb-4">
                  "Turn this blog post [Link/Text] into a 10-tweet thread. Start with a hook that addresses a common
                  pain point and use 'white space' effectively to make it readable."
                </div>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Social Media Marketing FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How often should I post?",
                  a: "Platform-dependent. TikTok: 1-3x daily. Instagram: 3-5x weekly. LinkedIn: 2-3x weekly. X: 5-10x daily. Consistency matters more than frequency.",
                },
                {
                  q: "What's the best time to post?",
                  a: "Use platform analytics to find when your audience is most active. Generally: 6-9 AM and 7-11 PM. Test and refine.",
                },
                {
                  q: "How do I measure social media ROI?",
                  a: "Track: reach, engagement rate, click-through rate, conversions, and customer acquisition cost. Use UTM links to connect social to revenue.",
                },
                {
                  q: "Should I use hashtags?",
                  a: "Yes, strategically. 15-30 hashtags on Instagram. 5-10 on LinkedIn. Mix popular and niche tags. Avoid hashtag stuffing.",
                },
                {
                  q: "How do I handle negative comments?",
                  a: "Respond quickly, professionally, and empathetically. Acknowledge the concern, offer a solution. Never be defensive.",
                },
                {
                  q: "What's the ideal post length?",
                  a: "Instagram captions: 125-150 words. LinkedIn: 100-200 words. X: 100-280 characters. TikTok: Let visuals speak.",
                },
                {
                  q: "Should I engage with other brands?",
                  a: "Yes. Comment genuinely on competitor posts, industry leaders, and complementary brands. This builds visibility and credibility.",
                },
                {
                  q: "How do I repurpose content?",
                  a: "Turn blog posts into threads, videos into reels, podcasts into quote graphics. One pillar content = multiple platform versions.",
                },
                {
                  q: "What's the best strategy for paid ads?",
                  a: "Start with organic content that performs well. Promote high-engagement posts. Use lookalike audiences. Test multiple creatives.",
                },
                {
                  q: "How do I build a community?",
                  a: "Respond to comments, DMs, and mentions. Host Q&As. Feature user-generated content. Make followers feel valued.",
                },
                {
                  q: "Should I collaborate with influencers?",
                  a: "Yes, if aligned with your brand. Micro-influencers (10k-100k) often have better engagement rates than mega-influencers.",
                },
                {
                  q: "How do I stay updated with algorithm changes?",
                  a: "Follow platform blogs, join marketing communities, and run A/B tests regularly. Adapt quickly to platform updates.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#1f2937] transition-colors text-left">
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

      <footer className="bg-foreground text-background py-32 px-6 md:px-12 mt-32 border-t border-background/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm text-lg">
              The world's most comprehensive prompt engineering library. Master the machines, unleash your potential.
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
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Story Prompts", href: "/story-prompts" },
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
                { label: "Free AI Prompts", href: "/free-ai-prompts" },
                { label: "Good AI Prompts", href: "/good-ai-prompts" },
                { label: "Coolest ChatGPT", href: "/coolest-chatgpt-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Advanced Tools</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Gemini AI Guide", href: "/gemini-ai-guide" },
                { label: "Janitor AI Guide", href: "/janitor-ai-guide" },
                { label: "Google AI Studio", href: "/google-ai-studio" },
                { label: "More Tools...", href: "/free-ai-prompts" },
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
