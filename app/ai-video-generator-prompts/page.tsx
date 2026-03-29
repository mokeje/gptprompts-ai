"use client"
import { useState } from "react"
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#7C3AED] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium py-2 px-4 rounded transition-colors">
        {copied ? (<><Check className="w-4 h-4" />Copied</>) : (<><Copy className="w-4 h-4" />Copy Prompt</>)}
      </button>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center p-6 bg-[#1a1a1a] hover:bg-[#252525] transition-colors">
        <h4 className="font-bold text-white text-left">{question}</h4>
        {open ? <ChevronUp className="w-5 h-5 text-[#7C3AED]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {open && <div className="bg-[#0a0a0a] p-6 border-t border-[#2a2a2a] text-gray-300">{answer}</div>}
    </div>
  )
}

export default function AIVideoGeneratorPrompts() {
  const prompts = {
    "Video Concept & Planning": [
      "Generate a detailed video concept for [TOPIC/PRODUCT]. Include: target audience, video length (15/30/60 seconds), key message, visual style (realistic/animated/3D/mixed), tone (professional/casual/humorous), and a shot-by-shot breakdown. Specify any on-screen text, graphics, or animations needed. Topic: [INSERT TOPIC]",
      "Create a video script for a [VIDEO TYPE] about [SUBJECT]. The script should be: engaging from the first 3 seconds, include a clear call-to-action, use conversational language, specify visual cues and transitions, and be optimized for [PLATFORM - YouTube/Instagram/TikTok/LinkedIn]. Subject: [INSERT SUBJECT]",
      "Design a video storyboard for [CONCEPT]. Create descriptions for each scene including: camera angles, movement, lighting mood, character/object placement, dialogue/voiceover text, duration per scene, and transition effects. Concept: [INSERT CONCEPT]",
      "Develop a video marketing hook that captures attention in [TIME] seconds for [PRODUCT/SERVICE]. The hook should: address pain point or curiosity gap, use pattern interrupt techniques, include visual intrigue, and naturally lead into the main message. Time: [INSERT TIME]. Product: [INSERT PRODUCT]",
      "Create a video brief for a [INDUSTRY] explainer video about [TOPIC]. Include: learning objectives, key concepts to cover, visual metaphors or analogies, example scenarios, difficulty level, recommended video length, and suggested animation style. Industry: [INSERT INDUSTRY]. Topic: [INSERT TOPIC]",
      "Design a video series outline with [NUMBER] episodes about [TOPIC]. For each episode specify: title, key focus, duration, intended audience, CTA, and how it builds on previous episodes. Ensure continuity and viewer retention strategies. Topic: [INSERT TOPIC]. Episodes: [NUMBER]"
    ],
    "Script & Dialogue Writing": [
      "Write a video script for [VIDEO TYPE] with these requirements: protagonist personality [DESCRIPTION], main conflict or challenge [DESCRIPTION], resolution showing [PRODUCT/BENEFIT], total length [DURATION], tone [TONE], include exact voiceover timing. Type: [INSERT TYPE]. Duration: [INSERT DURATION]",
      "Create natural, conversational dialogue between [NUMBER] characters discussing [TOPIC]. Include: character personalities and speaking patterns, realistic interruptions or hesitations, emotional beats, humor moments if appropriate, and stage directions. Characters: [NUMBER]. Topic: [INSERT TOPIC]",
      "Develop a hard-sell video script for [PRODUCT] that: opens with urgency/scarcity, builds desire through benefits (not features), includes objection handling, uses specific testimonial quotes, creates FOMO, and ends with clear CTA. Length: [DURATION]. Product: [INSERT PRODUCT]",
      "Write a soft-sell/storytelling video script about [BRAND MISSION] that: uses emotional narrative, shows real customer/employee stories, avoids obvious selling, includes subtle brand integration, builds trust, and ends with implicit CTA. Length: [DURATION]. Brand: [INSERT BRAND]",
      "Create educational video narration for [TOPIC] that: breaks complex concepts into digestible segments, uses analogies and examples, includes pauses for visual emphasis, specifies tone variations (emphasis/urgency/curiosity), and includes transition phrases between sections. Topic: [INSERT TOPIC]",
      "Generate a video script specifically optimized for [PLATFORM] with platform-specific: caption format (if auto-captioned), pacing for algorithm (hooks in first 3 seconds), native features (text overlays/emoji for TikTok, LinkedIn metrics, YouTube chapters), and retention strategies for watch time. Platform: [INSERT PLATFORM]"
    ],
    "Visual Style & Effects Direction": [
      "Describe a comprehensive visual style guide for a video series about [TOPIC]. Specify: color palette (5-7 primary colors), typography style (modern/classic/playful), camera movement (static/fluid/dynamic), lighting (bright/moody/dramatic), effects (minimal/moderate/heavy), and example reference videos. Topic: [INSERT TOPIC]",
      "Create a detailed animation brief for [TYPE OF ANIMATION] explainer about [SUBJECT]. Include: character/asset design style, animation pace (slow/normal/fast), transition styles between scenes, emphasis techniques, audio sync requirements, and reference animations. Animation Type: [INSERT TYPE]. Subject: [INSERT SUBJECT]",
      "Develop motion graphics specifications for a [PLATFORM] video including: on-screen text appearance (font, size, duration, animation in/out), lower thirds styling, social media graphics (captions, hashtags, handles), call-to-action buttons, and timing for each graphic element. Platform: [INSERT PLATFORM]",
      "Design a visual metaphor or infographic system for explaining [COMPLEX CONCEPT]. Describe: how the metaphor works, visual elements used, how complexity scales with depth, animation techniques to reveal information, and how to transition between different parts of the concept. Concept: [INSERT CONCEPT]",
      "Specify effects and transitions for a [GENRE] video that: matches the tone, enhances pacing, uses consistent style throughout, guides viewer attention, integrates product/brand naturally, and avoids overwhelming the message. List specific effect names or descriptions. Genre: [INSERT GENRE]",
      "Create a visual brand consistency guide for video content including: logo treatment and animation, title/credit card styling, watermark placement, color grading consistency across shots, font hierarchy for text overlays, and transition library to use throughout the series"
    ],
    "Platform-Specific Optimization": [
      "Optimize a video script/storyboard specifically for TikTok including: hook in first 0.5-1 seconds, trending sounds/music integration points, text overlay strategy, hashtag mentions, creator duet/stitch opportunities, optimal length ([DURATION]), and engagement tactics. Duration: [INSERT DURATION]",
      "Create YouTube-optimized video specifications: exact title (character count optimization), comprehensive description with timestamps, suggested chapter markers, thumbnail direction (visual design), end screen strategy, suggested playlists, and recommended watch duration patterns. Video topic: [INSERT TOPIC]",
      "Design an Instagram Reels video strategy for [PRODUCT/BRAND] including: 15-30-60 second versions, caption strategy (hooks, CTAs, hashtag strategy), trending audio integration, text overlay placement for mobile viewing, and repurposing strategy from TikTok/YouTube. Product: [INSERT PRODUCT]",
      "Develop a LinkedIn video content strategy including: professional tone balance with relatability, storytelling angles that resonate with decision-makers, optimal length and pacing for newsfeed attention, CTA strategy specific to B2B, and company page native features to leverage. Topic: [INSERT TOPIC]",
      "Create platform-agnostic video specs that specify [DURATION], [KEY MESSAGE], [AUDIENCE], then provide individual optimization for: YouTube, TikTok, Instagram, LinkedIn, and Twitter (including exact text variations per platform). Duration: [INSERT DURATION]",
      "Design a video repurposing strategy for [ORIGINAL VIDEO] across [PLATFORMS]. Specify: how to cut, what to emphasize per platform, caption/voiceover changes, text overlay modifications, optimal lengths, native feature integration, and timing recommendations for posting. Original: [INSERT VIDEO]. Platforms: [INSERT PLATFORMS]"
    ],
    "Advanced Production Considerations": [
      "Create production requirements for a [VIDEO TYPE] including: equipment needed (camera/lighting/audio), crew roles, shooting locations/setup, permits/permissions needed, talent/actor specifications, post-production software, timeline, and estimated production complexity. Type: [INSERT TYPE]",
      "Develop a color grading guide for [MOOD/AESTHETIC] that specifies: primary color palette, saturation levels, contrast/brightness adjustments, specific LUT recommendations if applicable, how to maintain consistency across multiple shots/scenes, and emotional impact of the color choices. Mood: [INSERT MOOD]",
      "Design audio specifications for a professional video including: voiceover tone/pace/emotion, background music style and intensity, sound effects strategy, audio levels and mixing, silence/pause strategy for emphasis, and how audio enhances the visual narrative. Video type: [INSERT TYPE]",
      "Create a detailed editing rhythm plan for [CONTENT TYPE] including: cut frequency (frequency per second), transition timing, pacing accelerations/decelerations, use of B-roll, graphics timing, text on-screen duration, and how editing pace supports the message and platform. Content type: [INSERT TYPE]",
      "Develop accessibility specifications for a professional video: accurate closed captions format, audio description strategy for key visual elements, color contrast requirements, text sizing for readability, and compliance with WCAG 2.1 AA standards while maintaining visual aesthetic. Video topic: [INSERT TOPIC]",
      "Create a video quality checklist covering: technical specs (resolution, frame rate, bitrate), audio quality standards, color grading consistency, motion smoothness, text legibility, brand compliance, and final delivery format specifications for different platforms. Video type: [INSERT TYPE]"
    ]
  }

  const faqs = [
    {
      question: "How do I choose the right AI video generator for my needs?",
      answer: "Different AI video generators excel in different areas. Consider: (1) Input type—some work best with text prompts, others with images or existing video. (2) Output quality—from 480p to 4K, with varying visual fidelity. (3) Customization—how much control you have over camera movement, effects, transitions. (4) Speed—rendering time from seconds to hours. (5) Cost model—per-video, subscription, or credits. Popular tools include Synthesia (talking heads), Runway (video editing + generation), Pika Labs (text-to-video), and D-ID (avatar videos). Match tool capability to your specific output goal."
    },
    {
      question: "What makes an effective prompt for AI video generation?",
      answer: "Effective video generation prompts include: (1) Visual specificity—describe exact camera angles, movements, lighting, color tone. (2) Temporal details—how scenes flow, pacing, transition style. (3) Character/object descriptions—detailed appearance, actions, positioning. (4) Audio/dialogue cues—what should be heard, emotional tone. (5) Context—the story or message being conveyed. (6) Reference points—'like a commercial by [brand]' or 'inspired by [movie style]'. Vague prompts produce generic results; specific, detailed prompts yield videos closer to your vision."
    },
    {
      question: "How do I edit or refine AI-generated video output?",
      answer: "AI video generation is rarely perfect on first pass. Refinement strategies: (1) Use dedicated editing tools (Adobe Premiere, DaVinci Resolve, CapCut) to trim, reorder, or re-time scenes. (2) Layer in voiceovers, music, or additional audio. (3) Add text overlays, captions, graphics for emphasis. (4) Apply color grading to unify aesthetic across AI-generated and potentially human footage. (5) Re-generate specific sections if tools support scene-by-scene generation. (6) Combine multiple AI-generated clips to create your final output. Expect 20-50% post-generation editing time."
    },
    {
      question: "What are the quality limitations of AI video generation today?",
      answer: "Current AI video generators have these limitations: (1) Motion consistency—camera movement and character motion can feel unnatural. (2) Physics—objects may defy gravity or move unnaturally. (3) Hands and faces—fine details often look distorted (this is improving rapidly). (4) Length—most tools generate clips under 30-60 seconds; longer videos require stitching clips together. (5) Hyperrealism—photorealistic outputs still show artifacts; more stylized/animated outputs look more convincing. (6) Coherence—maintaining consistent character/style across multiple clips requires careful prompting. Best results come from embracing AI aesthetic (stylized, animated, illustrative) rather than demanding photorealism."
    },
    {
      question: "Can I use AI-generated videos commercially or for client work?",
      answer: "Yes, but with important caveats: (1) Check your tool\'s licensing terms—most allow commercial use for paying subscribers, but read the fine print. (2) Verify rights to any input materials (reference images, music, scripts). (3) Disclose AI use in commercial video if your industry requires it (advertising, journalism, education contexts increasingly require transparency). (4) Ensure generated content doesn\'t infringe on copyrighted styles or training data. (5) Some tools allow white-labeling; others prohibit it. For client work, get explicit permission from your client before using AI generation, and choose tools that grant commercial rights clearly."
    },
    {
      question: "How do I optimize AI-generated video for different platforms?",
      answer: "Platform optimization requires: (1) Aspect ratio—vertical for TikTok/Reels (9:16), square for Instagram (1:1), landscape for YouTube (16:9). (2) Length—TikTok favors 15-60 seconds, YouTube rewards 8+ minutes, Reels work at 15-90 seconds. (3) Hook timing—first 1-3 seconds critical for social platforms, YouTube can afford 5-10 second intro. (4) Text overlays—essential for social (captions for watching without sound), minimal for YouTube (relies on voiceover). (5) File format and bitrate—platform-specific compression requirements. (6) Captions—auto-captioning often inaccurate; add manual captions for accessibility and performance. Generate at platform resolution or upscale carefully afterward."
    },
    {
      question: "What\'s the difference between text-to-video and image-to-video AI tools?",
      answer: "Key differences: Text-to-video (like Pika, Runway) starts from a detailed description and generates video from scratch, giving you complete creative control but requiring very specific prompting. Image-to-video tools (like Runway\'s multi-frame) start with static images you provide and animate them, preserving your visual direction but giving you less ability to change fundamentals. Text-to-video is better for: starting from scratch, exploring creative ideas, generating varied outputs quickly. Image-to-video is better for: maintaining brand consistency, working with existing visual assets, controlling exact visual appearance. Hybrid approach: use image-to-video when you have visual references; use text-to-video when you don\'t."
    },
    {
      question: "How do I maintain visual consistency across multiple AI-generated clips?",
      answer: "Consistency challenges with multiple clips include character appearance, lighting, color grading, and style. Solutions: (1) Create a detailed visual reference document (mood board, color palette, character specs) and reference it in every prompt. (2) Use the same tool for all clips if possible—different tools have different aesthetic 'signatures'. (3) Generate scenes in the same session to maintain style consistency (model training/parameters stay the same). (4) Create consistent prompts—use identical language for repeated elements, specify matching lighting/color in each prompt. (5) Heavy post-production color grading can unify disparate clips visually. (6) Use consistent voiceover/music/sound design to disguise minor visual inconsistencies. Expect to spend significant time on color grading and editing to achieve true consistency."
    },
    {
      question: "What are common mistakes to avoid when using AI video generators?",
      answer: "Common mistakes: (1) Vague prompts—'make a video about marketing' produces generic output. Be specific with visuals, emotion, style. (2) Expecting photorealism—AI handles stylized, animated, illustrated better than photorealistic. (3) Long first-pass videos—generate short clips, stitch together, rather than expecting 5+ minute videos to render perfectly. (4) Ignoring post-production—assume 50% of final work happens in editing, not generation. (5) Unchanging prompts—test variations, regenerate if initial output misses the mark. (6) Forgetting audio—great visuals + weak audio undermines the result. Invest in voiceover quality and music selection. (7) Violating licensing—always check commercial use rights. (8) Over-relying on AI—use it as an accelerant, not a replacement for creative direction."
    },
    {
      question: "How long does it take to generate a professional-quality video with AI?",
      answer: "Timeline varies by tool and video length: Text-to-video generation time ranges from 30 seconds (quick preview) to 15+ minutes (high-quality, long-form). Image-to-video is typically faster (2-5 minutes for smooth animation). Add post-production: editing 15-30%, color grading 20-30%, audio work 20%, export/optimization 10%. So a 30-second polished video might take: 3 minutes generation + 12 minutes editing/refinement = 15 minutes total. A 2-minute video might take: 10 minutes generation + 1-2 hours post-production. Best practice: budget 30 minutes per final second of video for professional-quality output. Workflow efficiency improves with practice and template development."
    }
  ]

  const relatedPages = [
    { title: "AI Detection Prompts", href: "/ai-detection-prompts", color: "#EF4444" },
    { title: "AI Content Detection Prompts", href: "/ai-content-detection-prompts", color: "#F97316" },
    { title: "Turnitin AI Prompts", href: "/turnitin-ai-prompts", color: "#DC2626" },
    { title: "AI Face Swap Prompts", href: "/ai-face-swap-prompts", color: "#EC4899" },
    { title: "AI Image Upscaler Prompts", href: "/ai-image-upscaler-prompts", color: "#06B6D4" },
    { title: "Craiyon AI Prompts", href: "/craiyon-ai-prompts", color: "#FBBF24" },
    { title: "AI Headshot Prompts", href: "/ai-headshot-prompts", color: "#3B82F6" },
    { title: "AI Logo Generator Prompts", href: "/ai-logo-generator-prompts", color: "#8B5CF6" }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AI Video Generator Prompts - Advanced Techniques for Professional Video Creation",
            description: "Expert prompts for creating high-quality videos using AI generation tools, covering concept development, scripting, visual styling, platform optimization, and production considerations.",
            image: "https://gptprompts.ai/og-ai-video-generator.jpg",
            datePublished: "2026-03-29",
            dateModified: "2026-03-29",
            author: { "@type": "Organization", name: "GPT Prompts AI" }
          })
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-lg mb-6">
            <span className="text-[#7C3AED] font-semibold text-sm">AI Video Generation & Creation</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">AI Video Generator Prompts</h1>
          <p className="text-xl text-gray-400 max-w-3xl">Master the art of creating professional-quality videos with AI generation tools. These prompts cover everything from concept development and scriptwriting to visual styling, platform optimization, and production specifications for AI-generated video content.</p>
        </div>

        <div className="grid gap-6 mb-16">
          {Object.entries(prompts).map(([category, categoryPrompts]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full"></div>
                {category}
              </h2>
              <div className="grid gap-4">
                {categoryPrompts.map((prompt, idx) => (
                  <CopyCard key={idx} title={`${category} - Prompt ${idx + 1}`} prompt={prompt} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Related Prompt Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedPages.map((page, idx) => (
              <Link key={idx} href={page.href} className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#7C3AED] transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white group-hover:text-[#7C3AED] transition-colors">{page.title}</h3>
                  <div className="w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: page.color }}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 text-center">
          <p className="text-gray-400 mb-4">Need custom AI video generation prompts for your specific project?</p>
          <Link href="/contact" className="inline-block bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-3 px-8 rounded transition-colors">Get Custom Prompts</Link>
        </div>
      </div>
    </div>
  )
}
