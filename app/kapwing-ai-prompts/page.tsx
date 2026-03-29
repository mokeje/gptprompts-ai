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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#FF6154] transition-colors">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono mb-4 max-h-64">{prompt}</pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#FF6154] hover:bg-[#e5554a] text-white font-medium py-2 px-4 rounded">
        {copied ? (<><Check className="w-4 h-4" />Copied</>) : (<><Copy className="w-4 h-4" />Copy Prompt</>)}
      </button>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 bg-[#1a1a1a] hover:bg-[#242424] transition-colors">
        <span className="font-semibold text-white text-left">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#FF6154] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="p-4 bg-[#0a0a0a] border-t border-[#2a2a2a] text-gray-300">{answer}</div>}
    </div>
  )
}

export default function KapwingAIPromptsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "100+ Best Kapwing AI Prompts for Video & Image Editing",
    description: "Expert Kapwing AI prompts for video editing, subtitle generation, content repurposing, meme creation, and social media resizing.",
    datePublished: "2026-03-29",
    dateModified: "2026-03-29",
    image: "https://gptprompts.ai/og.png",
    author: { "@type": "Organization", name: "GPTPrompts.AI" }
  }
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is Kapwing AI?", acceptedAnswer: { "@type": "Answer", text: "Kapwing is an online video and image editing platform that uses AI to help creators produce professional content quickly, including features like auto-subtitles, smart cut, background removal, and AI-powered resizing." } },
      { "@type": "Question", name: "Is Kapwing free to use?", acceptedAnswer: { "@type": "Answer", text: "Kapwing offers a free tier with basic features and watermarked exports. Paid plans remove watermarks and unlock advanced AI features like longer exports, team collaboration, and priority processing." } },
      { "@type": "Question", name: "Can Kapwing generate subtitles automatically?", acceptedAnswer: { "@type": "Answer", text: "Yes, Kapwing has AI-powered automatic subtitle generation that transcribes audio and creates styled captions. It supports multiple languages and allows custom styling of subtitle text." } },
      { "@type": "Question", name: "What video formats does Kapwing support?", acceptedAnswer: { "@type": "Answer", text: "Kapwing supports all major video formats including MP4, MOV, AVI, and WebM. It can also handle images, GIFs, and audio files for multimedia editing projects." } },
      { "@type": "Question", name: "How do I repurpose long videos with Kapwing?", acceptedAnswer: { "@type": "Answer", text: "Use Kapwing Smart Cut to automatically identify and remove silences, then resize clips to different aspect ratios for various platforms like TikTok, Instagram Reels, and YouTube Shorts." } },
      { "@type": "Question", name: "Can Kapwing remove video backgrounds?", acceptedAnswer: { "@type": "Answer", text: "Yes, Kapwing offers AI-powered background removal for both images and videos, allowing you to replace backgrounds with solid colors, images, or other video footage." } },
      { "@type": "Question", name: "Is Kapwing good for team collaboration?", acceptedAnswer: { "@type": "Answer", text: "Kapwing is designed for team workflows with real-time collaboration, shared workspaces, brand kits, and commenting features that make it easy for teams to produce content together." } },
      { "@type": "Question", name: "What social media platforms can I export to?", acceptedAnswer: { "@type": "Answer", text: "Kapwing supports preset dimensions for TikTok, Instagram (Feed, Stories, Reels), YouTube (standard and Shorts), Twitter/X, LinkedIn, Facebook, and Pinterest." } },
      { "@type": "Question", name: "How does Kapwing AI compare to other video editors?", acceptedAnswer: { "@type": "Answer", text: "Kapwing is browser-based and focuses on speed and simplicity compared to desktop editors like Premiere Pro. Its AI features are particularly strong for social media content creation and repurposing." } },
      { "@type": "Question", name: "Can I create memes with Kapwing?", acceptedAnswer: { "@type": "Answer", text: "Yes, Kapwing has a dedicated meme maker with templates, text overlay tools, and AI-assisted editing that makes it one of the most popular tools for creating memes and viral content." } }
    ]
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF6154]/10 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1 bg-[#FF6154]/10 border border-[#FF6154]/30 rounded-full text-sm text-[#FF6154] mb-6">100+ Expert Kapwing Prompts</div>
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Best Kapwing AI Prompts for Video &amp; Image Editing</h1>
          <p className="text-xl text-gray-400 mb-8">Master Kapwing&apos;s AI-powered video editing, subtitle generation, content repurposing, meme creation, and social media optimization with these ready-to-use prompts.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#FF6154]">Video Editing &amp; Trimming</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="Smart Cut for Podcast Episodes" prompt="I have a 45-minute podcast recording. Use Smart Cut to remove all silences longer than 0.5 seconds. Keep natural pauses under 0.3 seconds for conversational flow. Export at 1080p with a 16:9 aspect ratio for YouTube." />
            <CopyCard title="Highlight Reel from Long Video" prompt="From this 30-minute webinar recording, identify the 5 most engaging segments based on visual activity and speaker emphasis. Create a 2-minute highlight reel with smooth transitions between clips. Add a 3-second branded intro and outro." />
            <CopyCard title="Tutorial Video Assembly" prompt="Combine these 8 screen recording clips into a cohesive tutorial video. Add 1-second crossfade transitions between each clip. Include a title card at the beginning with the text 'How to Set Up Your Dashboard' in white on a dark blue background." />
            <CopyCard title="Product Demo Cleanup" prompt="Clean up this product demo video by removing the first 15 seconds of dead air, cutting the section from 2:30 to 3:45 where I fumbled the explanation, and trimming the last 20 seconds. Add a fade-in at the start and fade-out at the end." />
            <CopyCard title="Interview Clip Extraction" prompt="From this 1-hour interview, extract the segments where the guest discusses AI adoption (approximately 12:30-18:45 and 34:00-41:20). Join these segments with a text card between them that reads 'On AI Adoption' and export as a standalone clip." />
            <CopyCard title="Speed Ramp Effect" prompt="Apply a speed ramp effect to this 60-second cooking timelapse: start at 2x speed for the first 20 seconds (prep work), slow to 1x for the middle 20 seconds (main cooking action), then speed up to 4x for the final 20 seconds (plating). Add upbeat background music." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#FF6154]">Subtitle &amp; Caption Generation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="Animated Captions for Reels" prompt="Generate auto-subtitles for this 60-second Instagram Reel. Style the captions with a bold white font, black outline, positioned at the bottom center. Highlight the current word being spoken in yellow. Use a maximum of 2 lines per caption frame." />
            <CopyCard title="Multi-Language Subtitles" prompt="Transcribe this English-language video and generate subtitles in both English and Spanish. Use a clean sans-serif font at 24px, white text with a semi-transparent black background bar. Position subtitles at the bottom with 20px padding from the edge." />
            <CopyCard title="Podcast Audiogram with Captions" prompt="Convert this 90-second podcast audio clip into a video audiogram. Use a dark gradient background with a centered waveform animation. Add auto-generated captions in a large, bold font (32px) centered on the screen. Format as a 1:1 square for Instagram." />
            <CopyCard title="Keyword-Highlighted Subtitles" prompt="Generate subtitles for this educational video. Highlight key terms and technical vocabulary in a bright accent color (#FF6154) while keeping regular text in white. Add a subtle drop shadow behind all text for readability against varying backgrounds." />
            <CopyCard title="TikTok-Style Captions" prompt="Create TikTok-style animated captions for this 30-second clip. Each phrase should pop onto the screen with a scale-up animation. Use a bold Impact-style font, centered on screen, with each word appearing individually in sync with the audio." />
            <CopyCard title="Accessible Caption Formatting" prompt="Generate WCAG-compliant subtitles for this corporate training video. Use a high-contrast combination (white text on black background), minimum 18px font size, speaker identification labels for multi-speaker sections, and include descriptions of relevant sound effects in brackets." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#FF6154]">Content Repurposing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="YouTube to TikTok Conversion" prompt="Take this 10-minute YouTube video (16:9) and create 5 short-form vertical clips (9:16) optimized for TikTok. Each clip should be 30-60 seconds, focusing on the most engaging moments. Auto-reframe to keep the speaker centered. Add captions to each clip." />
            <CopyCard title="Webinar to Social Clips" prompt="Repurpose this 60-minute webinar into a content package: 1) A 3-minute summary clip for LinkedIn (16:9), 2) Three 60-second highlight clips for Instagram Reels (9:16), 3) Five quote card images using the speaker&apos;s best soundbites. Add subtitles to all video clips." />
            <CopyCard title="Blog Post to Video" prompt="Transform this blog post about remote work productivity into a 2-minute video. Create text-on-screen slides for each key point, use smooth transitions between slides, add a professional background with subtle motion. Include a call-to-action slide at the end." />
            <CopyCard title="Podcast to Video Clips" prompt="Convert this 45-minute podcast episode into 8 short video clips for social media. Each clip should capture a complete thought or story (45-90 seconds). Add the podcast cover art as a background, include animated waveforms, and generate captions for each clip." />
            <CopyCard title="Multi-Platform Resize" prompt="Take this single 60-second video ad and create versions for every major platform: 16:9 for YouTube, 9:16 for TikTok and Instagram Reels, 1:1 for Instagram Feed, 4:5 for Facebook Feed, and 2:3 for Pinterest. Use smart cropping to keep the subject centered in each format." />
            <CopyCard title="Event Recap Compilation" prompt="Compile these 12 short event clips (ranging from 10-45 seconds each) into a 3-minute event recap video. Arrange chronologically, add smooth crossfade transitions, overlay upbeat royalty-free music, and include text overlays with event name, date, and location at the beginning." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#FF6154]">Meme &amp; Viral Content Creation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="Classic Meme Template" prompt="Create a meme using the 'distracted boyfriend' template layout. Top text: 'Me looking at the new AI tools'. The girlfriend labeled 'My current workflow'. The other person labeled 'Shiny new automation platform'. Use Impact font with white text and black outline." />
            <CopyCard title="Reaction GIF Creation" prompt="Extract the segment from 0:23 to 0:26 of this video where the presenter does a surprised reaction. Convert it to a GIF, add the text 'When the AI actually works on the first try' in white bold text at the top. Optimize file size to under 5MB." />
            <CopyCard title="Before/After Split Screen" prompt="Create a split-screen comparison meme. Left side labeled 'How I think I look on Zoom calls' with a professional headshot. Right side labeled 'How I actually look' with a casual webcam screenshot. Add a thin white dividing line and use a clean sans-serif font." />
            <CopyCard title="Trending Audio Meme Video" prompt="Create a 15-second video meme format: Start with a relatable text overlay 'When your boss says the meeting could have been an email' displayed for 3 seconds. Then show a reaction clip. Add the trending audio clip underneath. Format as 9:16 for TikTok." />
            <CopyCard title="Screenshot Meme Compilation" prompt="Arrange these 4 screenshot images into a 2x2 grid meme. Add a header text above the grid: 'The four horsemen of Monday morning'. Add a subtle numbered label (1-4) in each corner. Use a dark background (#1a1a1a) with white text and 10px spacing between images." />
            <CopyCard title="Video Meme with Text Overlay" prompt="Take this 8-second video clip and turn it into a shareable meme. Add large text at the top: 'Nobody: ... My coworker explaining their weekend:' in bold white with a black stroke. Keep the video looping. Export as both MP4 and GIF format." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#FF6154]">Social Media Optimization</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="Instagram Carousel from Video" prompt="Break this 3-minute explainer video into 10 static carousel slides for Instagram. Each slide should capture a key frame with the main point as text overlay. Use consistent branding (font: Inter Bold, colors: white text on #1a1a1a background). Add slide numbers (1/10, 2/10, etc.)." />
            <CopyCard title="YouTube Thumbnail Creation" prompt="Create a YouTube thumbnail (1280x720) for a video titled 'I Tested Every AI Tool for 30 Days'. Use a split composition: left side shows a person looking amazed, right side shows a grid of AI tool logos. Add bold yellow text with a red arrow pointing to the most surprising result." />
            <CopyCard title="Pinterest Pin from Video" prompt="Extract the most visually striking frame from this recipe video and create a Pinterest-optimized pin (1000x1500). Add the recipe title at the top in an elegant script font, cooking time and difficulty at the bottom in a clean badge style. Include a subtle gradient overlay for text readability." />
            <CopyCard title="LinkedIn Video Post" prompt="Edit this 5-minute presentation into a 90-second LinkedIn video post. Keep the opening hook (first 10 seconds), the key insight (around 2:30), and the actionable takeaway (around 4:15). Add professional lower-third text with speaker name and title. Include subtitles and export at 1080x1080." />
            <CopyCard title="Twitter/X Video Clip" prompt="Create a punchy 30-second clip from this interview for Twitter/X. Select the most quotable moment, add bold captions that animate word-by-word, include a 2-second branded end card with our handle @OurBrand. Export at 1200x675 (Twitter optimal) with embedded subtitles." />
            <CopyCard title="Stories Template Series" prompt="Create a 5-part Instagram Stories series from this product launch video. Each story should be 15 seconds max in 9:16 format. Story 1: teaser with countdown. Story 2-4: key features with text overlays. Story 5: call-to-action with swipe-up prompt. Use consistent brand colors throughout." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="What is Kapwing AI?" answer="Kapwing is an online video and image editing platform that uses AI to help creators produce professional content quickly, including features like auto-subtitles, smart cut, background removal, and AI-powered resizing." />
            <FAQItem question="Is Kapwing free to use?" answer="Kapwing offers a free tier with basic features and watermarked exports. Paid plans remove watermarks and unlock advanced AI features like longer exports, team collaboration, and priority processing." />
            <FAQItem question="Can Kapwing generate subtitles automatically?" answer="Yes, Kapwing has AI-powered automatic subtitle generation that transcribes audio and creates styled captions. It supports multiple languages and allows custom styling of subtitle text." />
            <FAQItem question="What video formats does Kapwing support?" answer="Kapwing supports all major video formats including MP4, MOV, AVI, and WebM. It can also handle images, GIFs, and audio files for multimedia editing projects." />
            <FAQItem question="How do I repurpose long videos with Kapwing?" answer="Use Kapwing Smart Cut to automatically identify and remove silences, then resize clips to different aspect ratios for various platforms like TikTok, Instagram Reels, and YouTube Shorts." />
            <FAQItem question="Can Kapwing remove video backgrounds?" answer="Yes, Kapwing offers AI-powered background removal for both images and videos, allowing you to replace backgrounds with solid colors, images, or other video footage." />
            <FAQItem question="Is Kapwing good for team collaboration?" answer="Kapwing is designed for team workflows with real-time collaboration, shared workspaces, brand kits, and commenting features that make it easy for teams to produce content together." />
            <FAQItem question="What social media platforms can I export to?" answer="Kapwing supports preset dimensions for TikTok, Instagram (Feed, Stories, Reels), YouTube (standard and Shorts), Twitter/X, LinkedIn, Facebook, and Pinterest." />
            <FAQItem question="How does Kapwing AI compare to other video editors?" answer="Kapwing is browser-based and focuses on speed and simplicity compared to desktop editors like Premiere Pro. Its AI features are particularly strong for social media content creation and repurposing." />
            <FAQItem question="Can I create memes with Kapwing?" answer="Yes, Kapwing has a dedicated meme maker with templates, text overlay tools, and AI-assisted editing that makes it one of the most popular tools for creating memes and viral content." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Explore More Prompts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "ChatGPT Prompts", href: "/chatgpt-prompts", color: "#10A37F" },
              { title: "Midjourney Prompts", href: "/midjourney-prompts", color: "#8B5CF6" },
              { title: "DALL-E 3 Prompts", href: "/dalle-3-prompts", color: "#10A37F" },
              { title: "Stable Diffusion Prompts", href: "/stable-diffusion-prompts", color: "#A855F7" },
              { title: "AI Drawing Prompts", href: "/ai-drawing-prompts", color: "#F59E0B" },
              { title: "Sora Prompts", href: "/sora-prompts", color: "#FF4500" },
              { title: "Leonardo AI Prompts", href: "/leonardo-ai-prompts", color: "#E040FB" },
              { title: "Flux AI Prompts", href: "/flux-ai-prompts", color: "#06B6D4" },
            ].map((page) => (
              <Link key={page.href} href={page.href} className="block p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-opacity-60 transition-colors text-center" style={{ borderColor: page.color + "40" }}>
                <span className="font-medium text-white text-sm">{page.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}