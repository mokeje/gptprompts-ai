"use client"

import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Play, TrendingUp, BarChart2, Scissors, Target } from "lucide-react"
import Link from "next/link"

const ACCENT = "#FF0000"

function CopyCard({ title, prompt, tag }: { title: string; prompt: string; tag: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#FF0000] transition-colors">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-white font-semibold text-lg flex-1">{title}</h3>
        <span className="text-xs bg-[#FF0000]/10 text-[#FF0000] px-2 py-1 rounded whitespace-nowrap">{tag}</span>
      </div>
      <pre className="text-gray-400 text-sm mb-4 leading-relaxed whitespace-pre-wrap font-sans">{prompt}</pre>
      <button
        onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
        className="flex items-center gap-2 text-[#FF0000] hover:text-[#FF0000]/80 text-sm transition-colors"
      >
        {copied ? <><Check size={16} /><span>Copied!</span></> : <><Copy size={16} /><span>Copy prompt</span></>}
      </button>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#333] py-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left hover:text-[#FF0000] transition-colors">
        <span className="text-white font-medium pr-4">{question}</span>
        {open ? <ChevronUp size={20} className="text-[#FF0000] shrink-0" /> : <ChevronDown size={20} className="shrink-0" />}
      </button>
      {open && <p className="text-gray-400 mt-3 text-sm leading-relaxed">{answer}</p>}
    </div>
  )
}

const sections = [
  {
    icon: Play,
    title: "Title Writing & CTR Optimisation",
    prompts: [
      {
        title: "Master YouTube Title Generator",
        tag: "Title Writing",
        prompt: `You are a YouTube growth strategist and title copywriter.

Channel niche: [describe your niche]
Target audience: [who they are + main pain point]
Video type: [tutorial / case study / story / comparison / list]
Video topic: [what this video is actually about]
Primary keyword to rank for: [e.g. "ChatGPT prompts for YouTube"]

Generate 20 YouTube title ideas that:
- Are under 60-65 characters when possible
- Include the primary keyword or a close variant in at least 8 titles
- Mix angles: tutorial, promise/result, curiosity gap, "I tried X", vs-style
- Avoid misleading clickbait or all-caps screaming

Return as a numbered list with a one-line angle note for each.`,
      },
      {
        title: "Title A/B Variations",
        tag: "A/B Testing",
        prompt: `Take this draft YouTube title: "[your draft title]"

Generate 15 A/B test variations that:
- Keep the core keyword / search intent intact
- Each tries a different angle: specific result, curiosity gap, "I was wrong about X", transformation (from X to Y), mistake-focused, time-bound ("in 30 days"), numbered list
- Stay under ~65 characters
- Avoid vague filler words like "amazing" or "must-see"

Format as a table: Variation | Angle Used | Char Count`,
      },
      {
        title: "Shorts-Optimised Titles",
        tag: "YouTube Shorts",
        prompt: `Write 20 YouTube Shorts titles for this topic: "[describe your Shorts video topic]"

Rules:
- Max 50 characters per title
- Use punchy, conversational language similar to TikTok hooks
- Mix: "POV:", numbered tips, "Stop doing X", "This changed everything", "When you realise..."
- Highlight 5 where the title text could also appear as on-screen text for maximum synergy

Return as a numbered list.`,
      },
      {
        title: "Cross-Platform SEO Title",
        tag: "SEO",
        prompt: `Generate 15 YouTube titles for this video: "[topic + brief description]"

The titles must work for:
1. YouTube search (match what people type)
2. Google search (could serve as a blog post H1)
3. AI Overviews / Perplexity (clear question-answer structure)

For each title, include: a natural-language query version and a benefit-led version.
Keep all under ~65 characters. Flag the 3 strongest for YouTube SEO specifically.`,
      },
    ],
  },
  {
    icon: Target,
    title: "Thumbnail Concept & Visual Direction",
    prompts: [
      {
        title: "Thumbnail Concept Brief",
        tag: "Thumbnail Design",
        prompt: `Create a thumbnail design brief for this YouTube video: "[title + topic]"

For each of 8 thumbnail concepts, describe:
- Subject and pose (pointing, shocked face, before/after split, object in hand)
- Background style (solid colour, blurred scene, studio backdrop)
- Text overlay (max 3-5 words — what it says and placement)
- Colour palette and dominant emotion conveyed
- Why it would work on mobile (small thumbnail view)

Format as numbered concepts, each with a 2-3 sentence brief.`,
      },
      {
        title: "Title + Thumbnail Text Pairs",
        tag: "CTR Pairing",
        prompt: `Generate 10 YouTube title + thumbnail text pairs for this video: "[topic]"

Rules:
- Title (max ~60 chars): SEO-friendly, benefit-led
- Thumbnail text (max 4 words): adds drama, curiosity, or a sharp contrast to the title — never repeats the title
- Mix emotional tones: shocking, relief, achievement, curiosity, fear of missing out

Return as a table with three columns: Title | Thumbnail Text | Emotional Angle`,
      },
      {
        title: "Thumbnail Split Test Analysis",
        tag: "Optimisation",
        prompt: `I am deciding between these two thumbnail approaches for my video on "[topic]":

Option A: [describe thumbnail A — subject, background, text, colours]
Option B: [describe thumbnail B — subject, background, text, colours]

My channel niche is [niche] and my average viewer is [describe audience].

Analyse both options and tell me:
1. Which is likely to get a higher CTR and why
2. Weaknesses of each option
3. How to improve the weaker one in 2 specific changes
4. Which platform/feed (home, search, suggested) each thumbnail is optimised for`,
      },
      {
        title: "Thumbnail Text Upgrade",
        tag: "Copywriting",
        prompt: `My current YouTube thumbnail text for this video is: "[current text]"
The video title is: "[title]"
The video is about: "[topic]"

The thumbnail text isn't driving enough clicks.

Generate 15 alternative thumbnail text options (3-5 words each) that:
- Create curiosity or urgency without misleading
- Complement rather than repeat the title
- Work at small sizes (mobile screen, suggested feed)
- Use power words, numbers, or clear contrasts

Flag your top 3 picks and explain why.`,
      },
    ],
  },
  {
    icon: BarChart2,
    title: "CTR & Analytics Optimisation",
    prompts: [
      {
        title: "Low CTR Diagnosis",
        tag: "Analytics",
        prompt: `My YouTube video has underperformed with a below-average CTR. Here is the context:

Video topic: [topic]
Current title: [title]
Thumbnail description: [describe it]
Channel niche: [niche]
Average CTR for this channel: [X%]
This video's CTR: [Y%]
Main traffic source: [search / browse features / suggested]

Diagnose the most likely CTR issues and suggest:
1. 5 alternative title rewrites
2. 3 thumbnail changes to test
3. Whether the title-thumbnail pairing is working or competing
4. One quick-win fix to test first`,
      },
      {
        title: "CTR Benchmark & Goal Setting",
        tag: "Strategy",
        prompt: `Help me set realistic CTR benchmarks and improvement goals for my YouTube channel.

Channel niche: [niche]
Current average CTR: [X%]
Main traffic sources: [list]
Video types I make: [tutorials / vlogs / shorts / etc]
Channel size: [subscriber count]

Tell me:
1. What a good, great, and exceptional CTR looks like for my niche and traffic source
2. What small changes typically produce the biggest CTR lifts
3. A 4-week testing plan to improve CTR by at least 1-2 percentage points
4. Which videos from my current library I should re-title and re-thumbnail first`,
      },
      {
        title: "Impression-to-Watch Time Analysis",
        tag: "Analytics",
        prompt: `Explain the relationship between YouTube CTR and average view duration for my channel type.

Channel niche: [niche]
Current CTR: [X%]
Current average view duration: [Y minutes or Z%]
Typical video length: [length]

Tell me:
1. Whether my CTR and watch time are in healthy balance
2. If high CTR with low watch time is a thumbnail/title honesty problem
3. If low CTR with high watch time means my thumbnails aren't competitive
4. What to optimise first based on my numbers
5. Two specific tests to run over the next 4 uploads`,
      },
      {
        title: "Seasonal CTR Maximiser",
        tag: "Planning",
        prompt: `I create content in the [niche] space. Help me plan titles and thumbnails that take advantage of seasonal trends and platform algorithm spikes.

My upload schedule: [X videos per week/month]
Upcoming dates or events relevant to my niche: [list]
My audience location: [country/region]

For each of the next [4 / 8] weeks:
1. Identify the strongest seasonal angle for my niche
2. Suggest 3 title ideas capitalising on that moment
3. Suggest a thumbnail emotional angle that fits
4. Flag any windows where early uploads win search advantage`,
      },
    ],
  },
  {
    icon: Scissors,
    title: "YouTube Shorts Strategy",
    prompts: [
      {
        title: "Shorts Hook Generator",
        tag: "Shorts Hook",
        prompt: `Write 20 scroll-stopping first lines (hooks) for YouTube Shorts about this topic: "[topic]"

The hook must appear in the first 2 seconds and make the viewer stop scrolling.

Mix hook types:
- Bold claim: "Most people get this completely wrong..."
- Question: "What happens if you [action]?"
- Surprising stat: "X% of [audience] don't know this..."
- Relatable situation: "You know when you..."
- Pattern interrupt: Start mid-story or mid-action

For each hook, suggest a matching on-screen text overlay (max 6 words).`,
      },
      {
        title: "Shorts-to-Long-Form Bridge",
        tag: "Strategy",
        prompt: `I want to use YouTube Shorts to drive views to my long-form videos.

Long-form video topic: [topic]
Long-form title: [title]
Shorts content I can create from this video: [ideas or timestamps]

Create a plan for 5 Shorts that:
1. Each tease a specific insight or moment from the long video
2. End with a natural CTA to watch the full video
3. Work as standalone Shorts (not just clips)
4. Include a suggested title and hook for each

Also suggest the best posting cadence to maximise long-form traffic from Shorts.`,
      },
      {
        title: "Viral Shorts Topic Research",
        tag: "Research",
        prompt: `I make YouTube Shorts in the [niche] space targeting [audience].

Generate 30 Shorts topic ideas that have high viral potential because they are:
- Fast to consume and instantly valuable
- Highly shareable (surprising, relatable, or satisfying)
- Evergreen OR tapping a current trend
- Optimised for re-watch (loop-worthy)

For each idea include: suggested title (max 50 chars), hook line, and one reason it is shareable.
Group by: Educational / Entertaining / Inspirational / Controversial (safe)`,
      },
      {
        title: "Shorts Posting & Growth Plan",
        tag: "Growth",
        prompt: `Help me build a 30-day YouTube Shorts growth plan.

My niche: [niche]
My goal: [grow subscribers / increase long-form views / build brand awareness]
Current Shorts performance: [views per Short on average]
How many Shorts I can post per week: [number]

Create a 30-day plan including:
1. Weekly theme or content pillars
2. Posting frequency and best times (based on my niche)
3. Which Shorts formats to rotate (hook types, lengths, styles)
4. How to cross-post to TikTok and Reels without getting penalised
5. One experiment to run in week 3 to test what resonates`,
      },
    ],
  },
  {
    icon: TrendingUp,
    title: "Channel Growth & Content Strategy",
    prompts: [
      {
        title: "Channel Growth Audit",
        tag: "Strategy",
        prompt: `I need a YouTube channel growth audit for my channel in the [niche] space.

Channel stats:
- Subscriber count: [number]
- Average views per video: [number]
- Upload frequency: [X per week/month]
- Top performing video: [title + view count]
- Worst performing video: [title + view count]
- Content types I make: [list]

Audit these five areas and give specific action items for each:
1. Title & thumbnail strategy
2. Content pillars and topic selection
3. Upload consistency and scheduling
4. Audience retention and video structure
5. One underused growth lever I am likely missing`,
      },
      {
        title: "Content Pillar Framework",
        tag: "Planning",
        prompt: `Help me build a content pillar strategy for my YouTube channel.

Niche: [niche]
Target audience: [describe them]
My expertise: [what you know best]
Channel goal: [subscribers / revenue / brand / traffic to website]

Design a content framework with:
1. 3-5 content pillars with a clear purpose for each
2. 5 video ideas per pillar (with working titles)
3. A recommended ratio of pillar content per month
4. How to use series and playlists to deepen each pillar
5. Which pillar to prioritise first based on my goal`,
      },
      {
        title: "Competitor Title & Thumbnail Teardown",
        tag: "Research",
        prompt: `I want to analyse competitor YouTube channels in my niche to improve my own title and thumbnail strategy.

My niche: [niche]
Top 3 competitor channels: [channel names or URLs]
My current average CTR: [X%]

For each competitor, analyse:
1. Title patterns they repeat (structure, length, keywords used)
2. Thumbnail style and recurring visual elements
3. Their apparent CTR angle (curiosity, result, emotion)
4. What topics and formats perform best for them

Then suggest:
- 3 title patterns I should test based on what's working for them
- 2 thumbnail styles I should A/B test
- 1 gap in the market none of them are filling`,
      },
      {
        title: "Video Repurposing System",
        tag: "Repurposing",
        prompt: `Help me build a repurposing system for my YouTube content so each video generates maximum reach across platforms.

My primary YouTube niche: [niche]
Platforms I want to repurpose to: [TikTok / Instagram Reels / LinkedIn / Twitter/X / Blog / Newsletter / Podcast]
My upload frequency: [X videos per week]
Available editing time per week: [X hours]

For each video I upload, create a repurposing checklist that includes:
1. Which clips to extract for each platform (timestamps approach)
2. How to adapt the title/hook for each platform's audience
3. The fastest way to convert one video into 5+ pieces of content
4. How to schedule and batch this work efficiently
5. One automation tool or workflow to save time`,
      },
    ],
  },
]

const faqs = [
  { q: "Do AI-generated YouTube titles hurt SEO?", a: "No, as long as titles accurately reflect your content. YouTube's algorithm cares about viewer satisfaction, watch time, and CTR — not whether a title started as an AI draft. The key is to edit AI suggestions to match your voice and video's actual value." },
  { q: "What is a good CTR for YouTube in 2026?", a: "CTR varies by traffic source. For browse features, 4-10% is typical. For search traffic, 2-5% is common. Shorts can reach 5-20%. What matters more than the absolute number is your trend over time and how your CTR compares to your channel average." },
  { q: "Should I optimise my YouTube title for YouTube search or Google search?", a: "Ideally both. Many high-performing titles use natural-language phrases that match what users type into both platforms. Titles that work as clear questions or how-to statements tend to perform well on YouTube, Google, and in AI Overviews." },
  { q: "How many title ideas should I generate per video?", a: "Most top YouTube strategists recommend generating at least 10-20 title options per video before choosing. More options give you better material to A/B test and a wider range of angles to compare." },
  { q: "How many words should YouTube thumbnail text be?", a: "Generally 3-5 words for maximum readability at small sizes. Thumbnail text should complement the title, not repeat it. Think of it as adding the emotional hook that the title cannot fit." },
  { q: "Can the same title work for a YouTube video and a blog post?", a: "Yes, and it is a powerful cross-platform SEO tactic. Titles structured as clear questions or how-to phrases often work as blog H1s too, helping your content appear in both YouTube and Google — and making it easier for AI systems like ChatGPT and Perplexity to surface it." },
  { q: "Why is my CTR low even though my video is good?", a: "Most low CTR is a thumbnail and title problem, not a content problem. Common causes: thumbnail is cluttered or hard to read at small sizes, title is too generic or does not communicate a clear benefit, or title and thumbnail are saying the same thing instead of working together." },
  { q: "How often should I A/B test my thumbnails?", a: "YouTube's built-in A/B test tool (Test and Compare) allows you to test thumbnails automatically. Run tests for at least 10,000 impressions before drawing conclusions. Test one element at a time — face vs no face, text overlay vs clean, bright vs dark background." },
  { q: "What is the best length for a YouTube title?", a: "Aim for under 60-65 characters to avoid truncation in search results and on mobile. The most important keywords should appear in the first 40 characters. However, a compelling 70-character title that hooks the viewer still beats a dull 50-character one." },
  { q: "Can AI help me plan my whole YouTube content strategy?", a: "Yes. AI tools like ChatGPT and Claude can help you identify content pillars, generate video ideas, analyse competitor patterns, and plan monthly content calendars. Use AI for the research and brainstorming layer — your creative judgment and audience knowledge then make the strategy work." },
]

export default function YouTubeThumbnailsTitlesClient() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Prompts for YouTube Thumbnails and Titles: 60+ Copy-Paste Templates (2026)",
    description: "60+ copy-paste ChatGPT prompts for YouTube titles, thumbnail concepts, CTR optimisation, Shorts hooks, and channel growth strategy.",
    author: { "@type": "Organization", name: "GPTPrompts.AI" },
    datePublished: new Date().toISOString(),
  }
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white py-16 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-[#FF0000]/10 text-[#FF0000] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          YouTube Prompts 2026
        </div>
        <h1 className="text-5xl font-bold mb-6 text-[#FF0000]">YouTube Thumbnails & Titles Prompts</h1>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
          60+ copy-paste ChatGPT prompts for click-worthy YouTube titles, scroll-stopping thumbnails, Shorts hooks, CTR analysis, and channel growth strategy. Built for creators who want more clicks with less guesswork.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[["60+", "Copy-Paste Prompts"], ["5", "Strategy Sections"], ["10", "FAQ Answers"]].map(([num, label]) => (
            <div key={label} className="bg-[#1a1a1a] border border-[#FF0000]/30 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-[#FF0000]">{num}</p>
              <p className="text-sm text-gray-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sections */}
      {sections.map((sec, i) => {
        const Icon = sec.icon
        return (
          <section key={i} className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Icon size={32} style={{ color: ACCENT }} />
              <h2 className="text-3xl font-bold text-white">{sec.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {sec.prompts.map((p, j) => (
                <CopyCard key={j} title={p.title} prompt={p.prompt} tag={p.tag} />
              ))}
            </div>
          </section>
        )
      })}

      {/* FAQ */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-8">
          {faqs.map((f, i) => (
            <FaqItem key={i} question={f.q} answer={f.a} />
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">More Prompt Collections for Creators</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: "/tiktok-prompts-creators", label: "TikTok Creator Prompts", color: "#fe2c55", desc: "Hooks, scripts, captions, and growth strategy" },
            { href: "/chatgpt-course-creators", label: "Course Creator Prompts", color: "#f97316", desc: "Curriculum, scripts, sales pages, onboarding" },
            { href: "/instagram-reels-hooks", label: "Instagram Reels Hooks", color: "#E1306C", desc: "Scroll-stopping opening lines for Reels" },
            { href: "/social-media-marketing-prompts", label: "Social Media Marketing", color: "#6366f1", desc: "Content calendars, captions, and strategy" },
          ].map((r) => (
            <Link key={r.href} href={r.href} className="group bg-[#1a1a1a] border border-[#333] rounded-lg p-5 hover:border-[#FF0000] transition-colors">
              <h3 className="text-white font-semibold mb-2 group-hover:text-[#FF0000] transition-colors">{r.label}</h3>
              <p className="text-gray-400 text-sm">{r.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
