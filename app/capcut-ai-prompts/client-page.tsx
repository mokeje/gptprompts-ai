'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Copy, Check, ChevronDown, ChevronUp, Video, Sparkles, TrendingUp, Scissors, Music } from 'lucide-react'

export default function CapCutAIPromptsPage() {
  const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    return (
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
        <h4 className="font-bold text-white mb-4">{title}</h4>
        <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
          {prompt}
        </pre>
        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 bg-[#10A937] hover:bg-[#0d8829] text-white font-medium py-2 px-4 rounded transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy Prompt
            </>
          )}
        </button>
      </div>
    )
  }

  const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false)

    return (
      <div className="border border-[#2a2a2a] rounded-lg">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-4 hover:bg-[#1a1a1a] transition-colors text-left"
        >
          <span className="font-medium text-white">{q}</span>
          {open ? (
            <ChevronUp className="w-5 h-5 text-[#10A937] flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
          )}
        </button>
        {open && (
          <div className="border-t border-[#2a2a2a] p-4 bg-[#0f0f0f] text-gray-300 leading-relaxed">
            {a}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <header className="bg-gradient-to-b from-[#10A937] to-[#0d7a29] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block hover:text-[#a8e6a1] transition-colors">
            GPTPrompts.AI
          </Link>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
              <Video className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-6xl md:text-8xl font-bold">CapCut AI</h1>
              <p className="text-2xl md:text-4xl text-[#a8e6a1] font-light">TikTok, Reels &amp; Shorts</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            60+ copy-paste prompts for CapCut&apos;s AI tools. Get video scripts, captions, effect descriptions, and content ideas that work with CapCut&apos;s AI script writer, auto-captions, and Dream feature.
          </p>
          <div className="mt-8 inline-block bg-white/20 text-white px-6 py-2 rounded-lg font-semibold">
            Category: AI Video Editing &amp; Creation
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24">

        {/* Video Scripts Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <Scissors className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Video Scripts for CapCut Script Writer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="60-Second TikTok Script"
              prompt={`Write a 60-second TikTok video script about [topic]. Format it for CapCut Script Writer with:
- Hook (first 3 seconds): a statement or question that stops scrolling
- Main content: 3 quick points or a mini story (45 seconds)
- CTA close: tell viewers what to do next (follow, comment, share)

Tone: [casual / educational / entertaining / inspirational]
Target audience: [describe your viewers]
Include on-screen text suggestions for key moments.`}
            />
            <CopyCard
              title="Before & After Transformation Script"
              prompt={`Write a before-and-after transformation video script for [topic — e.g. room makeover, fitness journey, skill improvement]. Structure:

BEFORE section (15 sec): Show the problem or starting point with relatable commentary
TRANSITION moment (3 sec): The reveal hook — build suspense
AFTER section (20 sec): Show the result and key steps that got there
OUTRO (5 sec): One actionable tip viewers can try today

Include suggested text overlays and transition cues.`}
            />
            <CopyCard
              title="Day-in-the-Life Voiceover Script"
              prompt={`Write a voiceover script for a &apos;day in the life of a [person/role]&apos; video. Length: 60-90 seconds.

Make it:
- Personal and conversational (not corporate)
- Include at least 2 specific, relatable moments (not just generic descriptions)
- Build energy throughout — start calm, end with something interesting or surprising
- Include suggested scene timestamps (e.g. &apos;0:00 - morning routine clip&apos;)
- Add 3 on-screen text overlays that complement the voice`}
            />
          </div>
        </section>

        {/* Captions & Text Overlays Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Captions, Text Overlays &amp; Hooks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Scroll-Stopping Hook Generator"
              prompt={`Generate 10 scroll-stopping video opening hooks for a video about [your topic]. Each hook should work as the FIRST thing viewers see or hear.

Write 2 of each type:
- Shocking stat or fact
- Bold controversial opinion
- Relatable pain point (&apos;If you&apos;ve ever...&apos;)
- Curiosity gap (&apos;Nobody told me that...&apos;)
- Direct challenge (&apos;Stop doing X if you want Y&apos;)

Keep each hook under 10 words.`}
            />
            <CopyCard
              title="On-Screen Text Overlay Pack"
              prompt={`Create a pack of 15 on-screen text overlays for a [type of video — e.g. recipe, tutorial, vlog, motivational] video on [topic].

Include:
- 5 attention-grabbing statements (under 6 words each)
- 5 numbered tips or facts to flash on screen
- 3 reaction phrases (&apos;Wait for it...&apos;, &apos;This changed everything&apos;, etc.)
- 2 closing CTAs for the final seconds

Make them punchy — these go on screen for 2-3 seconds max.`}
            />
            <CopyCard
              title="Auto-Caption Edit Script"
              prompt={`I have a video transcript with auto-captions. Here is the raw text: [paste transcript]

Clean it up for CapCut&apos;s caption feature:
1. Fix any obvious transcription errors
2. Break long sentences into caption-friendly chunks (max 8 words per line)
3. Add [PAUSE] markers where natural breaks should be
4. Flag any words that sound-alike AI tools often get wrong
5. Suggest 3 moments where an animated caption style would add impact`}
            />
          </div>
        </section>

        {/* Content Ideas Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Content Ideas &amp; Video Concepts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="30-Day Content Calendar"
              prompt={`Create a 30-day video content calendar for a [niche — e.g. fitness, cooking, travel, personal finance] TikTok or Reels account. For each week, suggest:
- 2 educational/tip videos
- 1 personal/behind-the-scenes video
- 1 trending format or challenge to participate in
- 1 high-engagement interactive video (poll, question, duet bait)

Format as a simple table: Day | Video concept | Hook idea | Format (e.g. talking head, voiceover B-roll, POV)`}
            />
            <CopyCard
              title="Trending Sound Video Concept"
              prompt={`I want to use this trending audio/sound on TikTok or Reels: [describe the sound or trend]

Suggest 5 video concepts that would work well with this audio for my [niche/topic]. For each concept:
- The visual setup or scene
- What the text overlay should say at the key moment
- Why this would resonate with my audience
- Effort level: Easy / Medium / Hard to film`}
            />
            <CopyCard
              title="Viral Series Planner"
              prompt={`Help me design a 5-part video series for [topic] that builds on itself. Requirements:
- Each video should stand alone AND reward people who watch the full series
- Video 1 should end on something unresolved to drive viewers to part 2
- Include a consistent visual or audio hook that signals &apos;this is part of the series&apos;
- Suggest a naming format (e.g. &apos;Part 1: ...&apos; or &apos;[Topic] 101: Episode 1&apos;)

Give me: title, core premise, and the cliffhanger or hook for each part.`}
            />
          </div>
        </section>

        {/* CapCut Dream / AI Video Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">CapCut Dream &amp; AI Video Generation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="AI Dream Video Prompt"
              prompt={`Create a detailed prompt for CapCut&apos;s Dream (AI video generation) feature:

Scene: [describe the scene visually]
Style: [cinematic / anime / realistic / dreamy / retro]
Mood: [calm / energetic / mysterious / joyful]
Key visual elements: [list specific things to include]
Camera movement: [static / slow pan / zoom in / tracking shot]
Lighting: [golden hour / neon night / soft natural / dramatic contrast]
Duration feel: short loop or slow unfolding scene

Make the prompt specific and visual — not abstract.`}
            />
            <CopyCard
              title="Photo-to-Video Style Prompt"
              prompt={`I want to animate this photo using CapCut AI. Describe the motion and style I should apply:

Photo description: [describe your photo — subject, background, mood]
Desired animation style: [subtle breathing / parallax / cinematic pan / zoom / weather effect]
Background motion: [clouds moving / leaves blowing / water rippling / none]
Emotional tone to enhance: [peaceful / dramatic / nostalgic / energetic]
Platform: [TikTok / Instagram Reels / YouTube Shorts]

Write the specific animation instruction I should type into CapCut.`}
            />
            <CopyCard
              title="Product Showcase Video Script"
              prompt={`Write a 30-second product showcase video script for [product name] using CapCut. The video should feel premium and visually driven.

Structure:
- 0-5s: Eye-catching visual of the product (suggest angle and lighting)
- 5-15s: 2-3 key benefits shown visually (not just spoken)
- 15-25s: Social proof moment (suggest text overlay: review quote or stat)
- 25-30s: Clear CTA + product name hold

Write suggested on-screen text for each section. Keep voiceover (if any) under 50 words total.`}
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              q="What AI features does CapCut have?"
              a="CapCut includes several AI-powered features: AI Script Writer (generates video scripts from a topic), Auto Captions (transcribes and styles your voiceover), AI Image (generates images from prompts), Dream (generates short AI video clips), AI Enhance (upscales and improves video quality), Auto Reframe (adjusts aspect ratio intelligently), and Smart Cutout (removes backgrounds). Most features are available free with a CapCut account."
            />
            <FAQItem
              q="How do I use CapCut&apos;s AI Script Writer?"
              a="Open CapCut and go to the Script Writer feature (available in the app or web version). Enter your video topic, choose your platform (TikTok, Reels, YouTube), select the tone and length, then click Generate. The AI produces a ready-to-use script you can edit. You can then use CapCut&apos;s text-to-speech or record your own voiceover directly from the script."
            />
            <FAQItem
              q="Are CapCut AI prompts different from other AI tools?"
              a="CapCut&apos;s AI tools use shorter, more visual prompts than tools like ChatGPT. For video and image generation in CapCut, you&apos;re describing visual scenes, styles, and moods rather than giving instructions. For the Script Writer and caption tools, clear topic descriptions and tone guidance work best. The prompts on this page are optimised for both approaches."
            />
            <FAQItem
              q="Can I use CapCut AI for commercial videos?"
              a="Yes, CapCut allows commercial use for videos created with its tools, but review the specific terms for AI-generated content and music. AI-generated images and videos created within CapCut can typically be used commercially. Music from CapCut&apos;s library has platform-specific licensing — some tracks are cleared for commercial use, others are not. Always check the track license before using in ads."
            />
            <FAQItem
              q="What&apos;s the best way to use CapCut for TikTok growth?"
              a="Focus on hooks and captions first — these have the biggest impact on watch time and engagement. Use CapCut&apos;s AI Auto Captions to make all your videos text-accessible (this also helps with reach). Batch create using CapCut templates to stay consistent. Use the Script Writer for faster ideation. Analyse your top-performing videos and create series based on them."
            />
            <FAQItem
              q="Is CapCut free for AI features?"
              a="Most of CapCut&apos;s core AI features are free, including Auto Captions, AI Enhance, Smart Cutout, and the Script Writer. Some advanced features like AI video generation (Dream) and higher export resolutions may require a CapCut Pro subscription. The free tier is sufficient for most content creators starting out."
            />
            <FAQItem
              q="How do I make AI-generated CapCut videos look less generic?"
              a="The key is specificity in your prompts. Instead of &apos;sunset beach&apos;, use &apos;golden hour beach with calm waves, silhouette of a person walking, warm pink and orange sky, cinematic 16:9&apos;. Combine AI-generated clips with your own footage for a more authentic feel. Add your own voiceover instead of relying entirely on AI. Use CapCut&apos;s colour grading tools to add a consistent visual identity."
            />
            <FAQItem
              q="What video formats work best with CapCut AI?"
              a="CapCut is optimised for vertical video (9:16 ratio) for TikTok and Instagram Reels, and supports 16:9 for YouTube. The AI features work best with short-form content (15-90 seconds). For longer videos (YouTube), CapCut is a capable editor but the AI tools are less differentiated from other platforms."
            />
            <FAQItem
              q="Can CapCut AI remove backgrounds automatically?"
              a="Yes. CapCut&apos;s Smart Cutout feature uses AI to automatically remove or replace backgrounds from video. It works well for human subjects against contrasting backgrounds. For complex backgrounds or detailed edges (like hair), results are decent for quick edits but may require some manual cleanup. The feature is available free on both mobile and desktop."
            />
            <FAQItem
              q="How do I use CapCut for Instagram Reels vs TikTok?"
              a="CapCut works well for both platforms. For TikTok, focus on fast cuts, trending sounds, and strong text hooks in the first 2 seconds. For Instagram Reels, slightly longer watch time is rewarded — aim for polished visuals and clear value delivery. Use CapCut&apos;s platform presets when exporting to automatically apply the right resolution and aspect ratio for each platform."
            />
          </div>
        </section>

        {/* Related Links */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Explore Related Prompts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/tiktok-prompts-creators" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">TikTok Prompts</h3>
              <p className="text-gray-400 mt-2">AI prompts for TikTok creators</p>
            </Link>
            <Link href="/ai-prompts-invideo" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">InVideo AI Prompts</h3>
              <p className="text-gray-400 mt-2">AI video generation scripts</p>
            </Link>
            <Link href="/runway-ml-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Runway ML Prompts</h3>
              <p className="text-gray-400 mt-2">Professional AI video creation</p>
            </Link>
            <Link href="/ai-prompts-heygen" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">HeyGen Prompts</h3>
              <p className="text-gray-400 mt-2">AI avatar video scripts</p>
            </Link>
            <Link href="/ai-prompts-content-creators" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Content Creator Prompts</h3>
              <p className="text-gray-400 mt-2">AI tools for digital creators</p>
            </Link>
            <Link href="/sora-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Sora Prompts</h3>
              <p className="text-gray-400 mt-2">OpenAI&apos;s text-to-video model</p>
            </Link>
            <Link href="/social-media-marketing-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Social Media Marketing</h3>
              <p className="text-gray-400 mt-2">Content strategy &amp; growth</p>
            </Link>
            <Link href="/pika-ai-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Pika AI Prompts</h3>
              <p className="text-gray-400 mt-2">Animate images and create clips</p>
            </Link>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'CapCut AI Prompts 2026: 60+ Copy-Paste Scripts for AI Video Editing',
        description: '60+ copy-paste CapCut AI prompts for video scripts, captions, effects, and content ideas. Make better TikTok, Reels, and YouTube Shorts with CapCut AI tools.',
        datePublished: '2026-03-30',
        dateModified: '2026-03-30',
        author: { '@type': 'Organization', name: 'GPTPrompts.AI' }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What AI features does CapCut have?', acceptedAnswer: { '@type': 'Answer', text: 'CapCut includes AI Script Writer, Auto Captions, AI Image, Dream (video generation), AI Enhance, Auto Reframe, and Smart Cutout. Most are free with a CapCut account.' } },
          { '@type': 'Question', name: 'Is CapCut free for AI features?', acceptedAnswer: { '@type': 'Answer', text: 'Most core AI features are free including Auto Captions, Script Writer, and Smart Cutout. Advanced features like Dream and higher export resolutions may need CapCut Pro.' } },
          { '@type': 'Question', name: 'Can I use CapCut AI for commercial videos?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, CapCut allows commercial use for videos created with its tools. Always check music track licensing before using in commercial or sponsored content.' } }
        ]
      })}} />
    </div>
  )
}
