"use client"

import { useState } from "react"
import Link from "next/link"

const ACCENT = "#fe2c55"

const CopyCard = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="bg-[#120608] border border-[#2a0a10] rounded-lg p-5 hover:border-rose-500/40 transition-colors">
      <pre className="bg-[#0a0304] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-56">{text}</pre>
      <button onClick={handleCopy} className="w-full text-white font-semibold py-2 px-4 rounded transition-colors text-sm" style={{ backgroundColor: ACCENT }}>
        {copied ? "✓ Copied!" : "Copy Prompt"}
      </button>
    </div>
  )
}

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center p-5 bg-[#111] hover:bg-[#1a1a1a] transition-colors text-left">
        <span className="text-gray-200 font-semibold text-sm pr-4">{q}</span>
        <span className="text-rose-400 text-lg flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="bg-[#0d0d0d] border-t border-gray-800 p-5"><p className="text-gray-400 text-sm leading-relaxed">{a}</p></div>}
    </div>
  )
}

const sections = [
  {
    id: "hooks-openers",
    title: "Hook & Opening Line Prompts",
    description: "Generate scroll-stopping first 3 seconds for any niche and format.",
    prompts: [
      `Generate 20 TikTok video hooks for my niche.

My niche: [describe your niche — e.g., personal finance for 20-somethings, fitness for busy parents, web design for freelancers]
Target viewer: [describe who scrolls past your content and who you want to stop]
My content style: [educational / entertainment / POV / storytelling / transformation]

Use these proven hook structures:
- Bold claim: "Nobody talks about [thing] and it's costing you [loss]"
- Question: "Why do [common belief]? Here's the real reason:"
- Contrast: "I used to [old way]. Then I discovered [new way]."
- Warning: "Stop doing [common thing] if you want [outcome]"
- Curiosity gap: "There's a [time period] rule that changed everything for my [result]"
- Stats shock: "[Surprising stat] — here's what that means for you"
- Relatable failure: "I [embarrassing mistake] for [time period] before I realised [truth]"

Write hooks that feel natural to say out loud, max 12 words each.`,
      `I need hook variations for this specific video idea.

Video concept: [describe what your video is about]
Niche: [your niche]

Write 10 different hooks for this exact video, each using a different emotional angle:
- Fear of missing out
- Curiosity
- Validation ('you're not the only one')
- Challenge/controversy
- Transformation promise
- Secret/insider knowledge
- Relatability
- Urgency
- Shock/surprise
- Aspiration

Mark which 3 you think will get the highest watch time and explain briefly why.`,
      `Help me write pattern interrupt hooks for my [niche] TikTok account.

A pattern interrupt is a hook that makes someone stop mid-scroll because it's unexpected, strange, or emotionally jarring.

My typical content: [describe what you usually post]
My audience: [describe]

Generate 15 pattern interrupt hooks that:
- Feel unexpected or counterintuitive for my niche
- Are honest and backed by something real I could teach
- Would work as a spoken first sentence in a video
- Don't use clickbait that disappoints the viewer after the hook`,
      `I want to test different hook formats. Write the same video idea as 5 different hook types.

Video idea: [describe the core insight or topic]
Niche: [your niche]

Rewrite the hook as:
1. A confession ("I have to be honest…")
2. A how-to opener ("How to [outcome] without [pain]")
3. A mistake reveal ("The [number] mistake killing your [goal]")
4. A behind-the-scenes ("What nobody shows you about [topic]")
5. A story opener ("Six months ago I was [relatable situation]…")`,
    ],
  },
  {
    id: "video-scripts",
    title: "Video Script Prompts",
    description: "Full scripts and structural outlines for educational, story-led, and viral formats.",
    prompts: [
      `Write a full 60-second TikTok script on [topic].

My niche: [niche]
Target viewer: [describe]
Core message or insight: [what you want them to take away]
My preferred style: [direct / story-led / listicle / POV / transformation arc]

Structure:
- Hook (0-3 sec): the opening line that stops scrolls
- Setup (3-10 sec): establish the problem or context in 1-2 sentences
- Core content (10-50 sec): deliver the value in 3-5 punchy points — each with one sentence of context
- CTA (50-60 sec): tell them exactly what to do next (follow, comment, save, click link in bio)

Write the script as spoken words I can read off a teleprompter or bullet-point from memory. No hashtags.`,
      `Help me create a story-format TikTok script using the 3-act structure.

My story: [briefly describe the real experience or transformation you want to share]
Lesson or takeaway: [what do you want the viewer to learn or feel]

Script structure:
- Act 1 (Hook + Setup, 0-8 sec): Start in the middle of the action. Set the stakes. Make the viewer wonder what happens next.
- Act 2 (Conflict + Journey, 8-45 sec): The struggle, the turning point, the discovery. Be specific — use names, numbers, dates.
- Act 3 (Resolution + CTA, 45-60 sec): The outcome. The lesson distilled to one sentence. CTA tied to the story's theme.

Write for authenticity, not polish. This should sound like I'm talking to a friend.`,
      `Create a 'hot take' or opinion-led TikTok script that will spark comments.

My niche: [niche]
The unpopular opinion or contrarian take I want to share: [describe your take]
Why I believe this: [your reasoning and evidence]
The counterargument I need to address: [the most common pushback]

Script format:
- Hook: State the take boldly — don't soften it
- Establish credibility: Why am I qualified to say this?
- Make the case: 3 evidence-based points
- Address the counterargument: Acknowledge it honestly, then explain why your take still stands
- CTA: Ask viewers to share their opinion in the comments — use a specific question

Keep the tone confident but not arrogant. Controversy should come from the idea, not the delivery.`,
      `I want to create a 'before and after' transformation TikTok script.

The transformation topic: [e.g., "my morning routine", "my finances", "my freelance business", "my skin"]
Before state: [describe in specific, relatable terms]
After state: [describe the specific results with numbers or concrete details where possible]
Time it took: [realistic timeframe]
The key thing that changed: [the method, mindset, tool, or habit]

Write a script that:
- Opens with the 'after' result to hook immediately
- Uses a split-screen or text-over-video format in mind
- Explains the exact change that made the difference (not vague)
- Ends with an offer to share more detail in comments or a follow CTA`,
    ],
  },
  {
    id: "content-strategy",
    title: "Content Strategy & Ideas Prompts",
    description: "Build a consistent content calendar and never run out of ideas.",
    prompts: [
      `Build me a 30-day TikTok content plan for my account.

My niche: [niche]
My current following: [number and how long I've been posting]
Content goal: [grow followers / build trust / drive sales / grow email list]
Posting frequency: [daily / 5x week / 3x week]
My content strengths: [e.g., I'm good at teaching, storytelling, showing behind-the-scenes]

Create a 30-day content calendar with:
- A mix of content formats (educational, POV, story, trending audio, transformation)
- Specific video topics (not just categories)
- Which videos to prioritise for saves and shares vs. comments
- 2 'pillar posts' per week that establish my authority
- Notes on which existing trending formats to adapt to my niche`,
      `Help me build a content series that builds a loyal following.

My niche: [niche]
The type of knowledge I want to be known for: [describe]
My audience's biggest goal: [what they want to achieve]

Design a recurring content series concept, for example:
- 'Weekly myth-busting' — debunking common misconceptions in my niche
- 'Real [niche] numbers' — sharing real data most people hide
- 'Day in the life of a [professional]' — behind-the-scenes series

Give me 3 series concepts that fit my niche, with:
- Series name and format (length, frequency, signature structure)
- 5 specific episode ideas for each series
- Why each series drives follows and saves`,
      `Generate 25 video ideas for my TikTok account on [niche].

My target viewer: [describe in detail — age, goals, frustrations, what they search for]
What I can authentically teach or share: [your expertise or lived experience]
Content gaps I've noticed in my niche: [things you're not seeing other creators cover well]

For each idea, provide:
- A video title / working concept
- A potential hook (opening line)
- The core value delivery (what the viewer will learn or feel)
- Estimated performance driver: saves, comments, shares, or follows

Group ideas into: evergreen (always relevant), trending (time-sensitive), and authority-building.`,
      `Help me repurpose one long-form piece of content into 10 TikToks.

Original content: [paste the blog post, newsletter, YouTube video transcript, or podcast episode summary]

Extract:
1. 5 standalone insights or tips that each work as a 30-60 second video
2. 3 contrarian or surprising points that could drive debate in the comments
3. 2 personal stories or examples that could become story-format videos

For each of the 10 videos, write: the hook, a 3-sentence script outline, and the CTA.`,
    ],
  },
  {
    id: "captions-cta",
    title: "Caption & CTA Prompts",
    description: "Write captions that extend watch time and CTAs that drive real action.",
    prompts: [
      `Write 5 TikTok captions for this video.

Video topic: [describe what the video covers]
Niche: [your niche]
Goal of this video: [get follows / comments / saves / link-in-bio clicks]

Each caption should:
- Be under 150 characters (TikTok caption limit for in-feed display)
- Open with a question or teaser that makes people watch to the end
- Include a call to action relevant to the goal
- Use 3-5 relevant hashtags (mix of niche hashtags and broad ones)

Write one caption optimised for each of these goals:
1. Maximise comments (ask a polarising question)
2. Maximise saves (tease the value)
3. Maximise follows (position your account as the go-to)
4. Drive link-in-bio clicks (create urgency or exclusivity)
5. Maximise shares (tap into identity or relatability)`,
      `Generate call-to-action lines I can use to end my videos.

My niche: [niche]
My main conversion goal: [follow / email signup / link in bio / comment]
My posting frequency: [so viewers know what to expect if they follow]

Write 15 CTA variations grouped by type:
- Follow CTAs (5): position why following you is worth it
- Save CTAs (5): frame why this video is worth saving for later
- Comment CTAs (5): ask a specific question that invites genuine responses

Each CTA should feel natural to say out loud and not sound like a generic "smash that follow button." Tailor to my niche and tone.`,
      `Help me write TikTok comments replies that grow my account.

My niche: [niche]
Recent video topic: [describe the video]
Top comments I received: [paste 5-10 real comments]

For each comment, write a reply that:
- Adds value (don't just say "thanks!")
- Continues the conversation naturally
- May hint at a follow-up video on that topic
- Uses my authentic tone: [describe your tone — funny / educational / warm / direct]

Also identify: which 2-3 comments suggest the best follow-up video topics?`,
      `Write the on-screen text overlays for my TikTok video.

Video concept: [describe the video and its structure]
Video length: [seconds]
Key points being made at each stage: [outline the flow]

Create text overlays for:
- The opening 3 seconds (reinforce the hook)
- Each key point (punchy summary, not full sentences)
- The CTA at the end

Keep each overlay under 7 words. Use contrast language where possible ("Before / After", "Wrong / Right", "Most people / Smart people").`,
    ],
  },
  {
    id: "analytics-growth",
    title: "Growth & Analytics Prompts",
    description: "Analyse what's working, understand your audience, and build a growth strategy.",
    prompts: [
      `Help me analyse my TikTok performance and identify what to do next.

My top 5 performing videos (by views or watch time):
1. [video title / topic] — [views, watch time %, likes, comments, shares]
2. [repeat]
3-5. [repeat]

My bottom 5 performing videos:
1-5. [same format]

My posting frequency: [daily / X per week]
Current following: [number]

Analyse:
1. What do the top performers have in common? (format, topic, hook style, length)
2. What do the underperformers have in common?
3. What content type should I double down on?
4. What format should I stop or change?
5. My top 3 growth priorities for the next 30 days`,
      `I want to understand my ideal TikTok viewer deeply.

My niche: [niche]
My most commented videos: [describe what they were about]
Common comments and questions I receive: [paste examples]
My account goal: [build an audience to sell a product/service / grow personal brand / entertainment]

Based on this, help me:
1. Build a detailed viewer persona (age range, goals, fears, current situation, what they've already tried)
2. Identify the top 5 problems they're searching for solutions to
3. List the emotions my content should make them feel (educated, validated, inspired, amused, etc.)
4. Suggest 3 content pillars that align with both their needs and my account goal
5. Name the top 3 creators they likely also follow and what I can uniquely offer that those creators don't`,
      `Help me create a TikTok growth plan for the next 90 days.

Current state:
- Followers: [number]
- Average views per video: [number]
- Posting frequency: [X per week]
- Top-performing content type: [describe]
- Account goal: [what you want to achieve in 90 days]

Create a 90-day plan covering:
- Days 1-30: Consistency + testing (what to test, how to measure)
- Days 31-60: Double down on what's working (specific actions)
- Days 61-90: Scale and convert (how to turn audience into whatever your goal is)

Include: weekly posting volume, content format mix, and 2-3 specific experiments to run.`,
      `Write a pitch script for brand deals and sponsorships.

My TikTok stats:
- Followers: [number]
- Average views: [number per video]
- Niche: [niche]
- Audience demographics: [age, gender split, location if known]
- Engagement rate: [%]

Write:
1. A 3-paragraph cold outreach email to a brand that fits my niche
2. A media kit one-pager outline (sections to include and what to put in each)
3. Suggested rate card framing: how to present my prices confidently
4. 3 ways to position my niche account as more valuable than a generic lifestyle account with the same following`,
    ],
  },
]

const faqItems = [
  { q: "What's the #1 thing that affects TikTok video performance?", a: "Watch time and completion rate. TikTok's algorithm prioritises videos that people watch all the way through and rewatch. This is why hooks are so critical — if you lose viewers in the first 3 seconds, no amount of good content further in will save the video. Focus on earning every second of attention." },
  { q: "How long should my TikTok videos be?", a: "In 2026, 15-30 second videos consistently get the highest completion rates. 45-90 second videos perform well for educational and story content when the hook is strong. Videos over 3 minutes work for deep-dive formats but require an audience already invested in your account. Test different lengths — watch time % is the metric to watch, not raw views." },
  { q: "How many hashtags should I use on TikTok?", a: "3-5 targeted hashtags is the current best practice. Mix 1-2 niche-specific hashtags with 1-2 slightly broader ones. Avoid stuffing 20 hashtags — it signals spam to the algorithm and doesn't help discovery. More important than hashtags: the text overlays and spoken words in your video, which TikTok reads to understand your content." },
  { q: "Should I post every day on TikTok?", a: "Consistency beats frequency. 3-5 high-quality videos per week will outperform daily posting of low-effort content. The algorithm rewards accounts with consistently strong watch time, not just volume. If you do post daily, have a production system (batching scripts, filming in bulk) so quality stays high. Burning out and going quiet is worse than a sustainable schedule." },
  { q: "How do I grow faster on TikTok if I'm just starting?", a: "Three tactics work best early on: (1) Post your best idea first, not your worst — first impressions matter. (2) Study the 3 biggest accounts in your niche and identify the hook/format patterns they share. (3) Focus on saves and shares in your CTAs — these are stronger signals than likes. Your first viral video often comes from a single well-structured educational or story video, not from posting 100 average ones." },
  { q: "What's the best time to post on TikTok?", a: "It varies by audience. For most niches, evenings (7-10pm in your audience's timezone) and weekday lunch hours see the most activity. But timing matters less than you think — TikTok's algorithm can surface any video at any time if early watch time is strong. Test posting at different times for 2 weeks and check your analytics to find when your specific audience is most active." },
  { q: "How do I go viral on TikTok?", a: "Virality is usually a byproduct of hitting emotional resonance at scale — something extremely relatable, surprising, or useful that people feel compelled to share. You can increase the odds by: using a strong pattern interrupt hook, making content that validates a common but unexpressed feeling, sharing something counterintuitive in your niche, or riding a trending format/sound with a fresh angle. But consistency is a more reliable strategy than chasing virality." },
  { q: "Can I use ChatGPT scripts word-for-word on TikTok?", a: "You can use them as starting points, but always edit for your own voice before filming. ChatGPT doesn't know your specific speech patterns, filler words, or pacing. Read the script out loud before filming — it will immediately reveal which lines sound robotic. The best use of these prompts is to generate structure and hooks, then improvise the actual delivery in your own words." },
  { q: "Should I use trending sounds on TikTok?", a: "Yes — TikTok gives a distribution boost to videos using trending audio within the first 48-72 hours of the sound going viral. Track trending sounds in your country/niche via the TikTok Creative Center. The trick is to use trending sounds that complement your content naturally, not force them in. If a sound doesn't fit, original audio with clear speech often outperforms forced trend-chasing." },
  { q: "How do I turn my TikTok following into income?", a: "The most reliable paths in 2026: (1) Creator Fund / Creator Rewards Program — pays per view, but rates vary. (2) Brand deals — negotiate sponsored content once you hit 10k+ followers in a clear niche. (3) Link in bio to your own product or service — by far the highest-margin option. (4) Affiliate marketing — promote relevant products on commission. Build an email list from day one, regardless of TikTok's algorithm changes." },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "TikTok Creator Prompts 2026: 60+ Copy-Paste Scripts for Hooks, Scripts & Growth",
  description: "Get 60+ copy-paste ChatGPT prompts for TikTok creators. Expert templates for scroll-stopping hooks, video scripts, content strategy, captions, and growth analysis.",
  author: { "@type": "Organization", name: "GPTPrompts.AI" },
  datePublished: "2025-01-01",
  dateModified: "2026-03-01",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
}

export default function TikTokPromptsCreatorsClient() {
  return (
    <div className="min-h-screen bg-[#080407] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-rose-900/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-rose-400 text-sm font-semibold uppercase tracking-widest mb-4">TikTok Content Creation</p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">TikTok Creator Prompts 2026: 60+ Copy-Paste Scripts for Hooks, Videos & Growth</h1>
          <p className="text-xl text-gray-400 leading-relaxed">Expert ChatGPT prompts for TikTok creators: scroll-stopping hooks, full video scripts, content strategy, captions, CTAs, and growth analysis. Everything you need to grow consistently.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-6" style={{ color: ACCENT }}>How to Use These TikTok Prompts</h2>
        <p className="text-gray-400 leading-relaxed mb-6">Replace every [bracketed placeholder] with specific details about your niche, audience, and content. The more specific your inputs, the less generic the output. These prompts are designed for ChatGPT (GPT-4o or GPT-4.5) — open a new chat for each prompt session to avoid context bleed from previous conversations.</p>
        <div className="bg-[#120608] border border-rose-900/40 rounded-xl p-6">
          <p className="text-rose-300 font-semibold mb-3 text-sm uppercase tracking-wider">TikTok growth stack</p>
          <p className="text-gray-400 text-sm leading-relaxed">Hook bank → Video scripts → Content calendar → Captions + CTAs → Weekly analytics review → Iterate</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {sections.map((section) => (
          <div key={section.id} className="mb-16">
            <h2 className="text-3xl font-bold mb-2" style={{ color: ACCENT }}>{section.title}</h2>
            <p className="text-gray-500 mb-8 text-sm">{section.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.prompts.map((prompt, idx) => <CopyCard key={idx} text={prompt} />)}
            </div>
          </div>
        ))}

        <div className="mt-20 mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ color: ACCENT }}>TikTok Creator FAQ</h2>
          <div className="space-y-3">{faqItems.map((item, idx) => <FaqItem key={idx} q={item.q} a={item.a} />)}</div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8" style={{ color: ACCENT }}>More Creator & Social Media Prompt Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "YouTube Thumbnail & Title Prompts", href: "/youtube-thumbnails-titles", color: "#ff0000" },
              { title: "Social Media Marketing Prompts", href: "/social-media-marketing-prompts", color: "#8b5cf6" },
              { title: "CapCut AI Prompts", href: "/capcut-ai-prompts", color: "#fe2c55" },
              { title: "ChatGPT Course Creator Prompts", href: "/chatgpt-course-creators", color: "#f97316" },
              { title: "AI Prompts for LinkedIn", href: "/ai-prompts-linkedin", color: "#0a66c2" },
              { title: "Meta AI Prompts", href: "/meta-ai-prompts", color: "#1877f2" },
              { title: "ChatGPT Prompts", href: "/chatgpt-prompts", color: "#10a37f" },
              { title: "AI Story Generator Prompts", href: "/ai-story-generator-prompts", color: "#8b5cf6" },
              { title: "All Prompt Guides", href: "/website-links", color: "#fe2c55" },
            ].map((page, idx) => (
              <Link key={idx} href={page.href} className="p-4 rounded-lg border transition-all duration-200 hover:opacity-80" style={{ borderColor: page.color + "40", backgroundColor: page.color + "08" }}>
                <span className="font-semibold text-sm" style={{ color: page.color }}>{page.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
