import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Prompts for InVideo AI: 80+ Text-to-Video & Script Ideas (2026 Guide)",
  description:
    "Master InVideo AI with 80+ text-to-video prompts and script templates. Learn frameworks, social media, marketing, and training video prompts. Complete guide with examples.",
}

export default function InVideoPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/website-links" className="text-sm opacity-70 hover:opacity-100 mb-4 inline-block">
            ← Back to Prompts Library
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            AI Prompts for InVideo AI: 80+ Text-to-Video & Script Ideas
          </h1>
          <p className="text-xl text-gray-200">
            Master text-to-video generation with comprehensive prompt frameworks and 80+ production-ready scripts
          </p>
        </div>
      </header>
      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">How InVideo AI Prompts Work</h2>
          <p className="mb-4">
            InVideo AI turns prompts into full videos: script, scenes, footage, music, and voiceover. The official
            prompting guide recommends always specifying video type, duration, topic, platform, mood, and CTA, and
            front-loading that info at the start of the prompt. Strong prompts look like a tight creative brief, not a
            vague sentence.
          </p>
          <p className="mb-4">A practical framework from InVideo AI's marketing guides is:</p>
          <pre className="bg-slate-900 text-white p-4 rounded mb-4">
            Type + Duration + Platform + Topic + Brand/Source + Visual Tone + Voiceover + CTA
          </pre>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Text-to-Video Prompt Template (Core Pattern)</h2>
          <pre className="bg-slate-900 text-white p-4 rounded">
            {`"Make a [duration] [type of video] for [platform] about [topic].
Target audience: [who].
Use a [tone] mood and [pacing] pacing.
Pull details from: [URL].
Visuals: [cinematic/clean/energetic/minimal].
Voice: [dynamic/calm/persuasive].
CTA: [call-to-action]."`}
          </pre>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">25+ YouTube & General Content Prompts</h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>3-minute YouTube explainer about 'What are AI prompts and why they matter' for beginners</li>
            <li>5-minute YouTube tutorial 'How to use AI prompts to write scripts faster'</li>
            <li>60-second YouTube Short sharing one powerful AI prompt hack</li>
            <li>4-minute YouTube video '7 AI tools every creator should know in 2026'</li>
            <li>3-minute faceless video about 'How to turn one blog post into 10 pieces of content'</li>
            <li>2-minute video: '3 mistakes you're making with AI image prompts'</li>
            <li>5-minute deep dive about 'AI prompts for SEO content'</li>
            <li>3-minute 'day in the life' for an AI content creator</li>
            <li>4-minute 'Prompt Engineering 101' mini-class</li>
            <li>2-minute recap video summarizing a live webinar</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">25+ Social Media & Short-Form Prompts</h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>30-second Instagram Reel explaining one AI prompt hack for viral hooks</li>
            <li>45-second TikTok breaking down a single powerful prompt for Midjourney</li>
            <li>30-second YouTube Shorts 'Stop doing this with AI prompts'</li>
            <li>40-second LinkedIn vertical video for B2B marketers</li>
            <li>20-second Twitter/X video summarizing one AI adoption statistic</li>
            <li>30-second teaser for a longer YouTube video</li>
            <li>45-second carousel-style video '3 things to include in any AI prompt'</li>
            <li>20-second countdown 'Top 3 AI tools in 2026'</li>
            <li>30-second 'myth vs reality' about AI content</li>
            <li>45-second 'behind-the-scenes' text-to-clip workflow video</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Best Practices for InVideo AI Prompts</h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>
              <strong>Front-load key info:</strong> type, platform, duration, topic, and audience at the start
            </li>
            <li>
              <strong>Be specific, not vague:</strong> include tone, pacing, visual direction, and CTA
            </li>
            <li>
              <strong>Use brand URLs and assets:</strong> include your website or landing page link
            </li>
            <li>
              <strong>Mention visual & audio style:</strong> describe setting, lighting, camera feel, and
              music/voiceover
            </li>
            <li>
              <strong>Iterate & refine:</strong> tweak one element at a time rather than starting from scratch
            </li>
          </ul>
        </section>
      </article>
      <footer className="bg-slate-900 text-white py-12 px-6 mt-16 border-t">
        <div className="max-w-4xl mx-auto flex justify-between">
          <p className="opacity-60">© 2026 GPTPrompts.AI</p>
          <Link href="/website-links" className="hover:opacity-80">
            Back to Prompts Library
          </Link>
        </div>
      </footer>
    </main>
  )
}
