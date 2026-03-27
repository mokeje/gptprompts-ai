import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Prompts for Lovo AI: 70+ Script & Style Ideas for Natural Voiceovers (2026 Guide)",
  description:
    "Master Lovo AI voiceover generation with 70+ script templates and style prompts. Learn meta-prompts for YouTube, business, and eLearning content. Complete guide with best practices.",
  keywords: "Lovo prompts, voiceover scripts, AI voices, text-to-speech, Lovo guide",
}

export default function LovoPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16 px-6 md:px-12 border-b">
        <div className="max-w-4xl mx-auto">
          <Link href="/website-links" className="text-sm opacity-70 hover:opacity-100 mb-6 inline-block">
            ← Back to Prompts Library
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            AI Prompts for Lovo AI: 70+ Script & Style Ideas for Natural Voiceovers
          </h1>
          <p className="text-xl text-gray-200">
            Master voiceover scriptwriting and natural delivery with production-ready prompts
          </p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 prose prose-invert max-w-none">
        <h2>How Lovo AI Prompts Work</h2>
        <p>Lovo (Genny) uses prompts in two key places:</p>
        <ul>
          <li>
            <strong>AI Script / AI Writer</strong> – where you describe the video or audio you want and it generates a
            script.
          </li>
          <li>
            <strong>Text-to-Speech blocks</strong> – where your written script (with punctuation and structure) is
            turned into voiceover.
          </li>
        </ul>
        <p>
          Lovo's tutorials stress that good scripts start from clear templates (explainer, ad, how-to, etc.) and that
          each paragraph becomes a separate voice block you can fine-tune in the timeline. Best-practice guides
          recommend: outline key points, write short informative sentences, provide clear direction, and avoid including
          notes you don't want read aloud.
        </p>

        <h2>Meta-Prompts for Lovo AI Script (AI Writer)</h2>
        <h3>Base AI Script prompt template</h3>
        <pre className="bg-slate-900 p-4 rounded">
          {`"Write a voiceover script for a [type of content: explainer video / ad / tutorial / podcast intro].
Topic: [topic].
Audience: [who].
Goal: [what they should know or do after watching].
Length: about [X] words / [Y] minutes.
Tone: [friendly/professional/energetic/calm].
Use short, spoken-style sentences and organize the script into paragraphs that can be used as separate voice blocks in Lovo."`}
        </pre>

        <h3>20+ AI Script meta-prompts</h3>
        <ul>
          <li>
            "Create a 60-second explainer script for a video introducing my AI prompts website for content creators.
            Audience: YouTubers and bloggers. Tone: friendly and practical."
          </li>
          <li>
            "Write a 90-second product demo script that walks through 3 steps to use AI prompts to write better blog
            posts."
          </li>
          <li>
            "Generate a 2-minute tutorial script on how to turn text into voice using Lovo AI step-by-step, aimed at
            beginners."
          </li>
          <li>
            "Write a 45-second ad script promoting a new prompt pack for social media content, with one strong hook and
            one clear CTA."
          </li>
          <li>
            "Create a 3-minute course lesson script explaining the basics of voiceover scriptwriting for AI tools, with
            examples."
          </li>
          <li>
            "Turn this outline into a 2-minute voiceover script for a faceless YouTube video, conversational tone and
            simple language."
          </li>
          <li>
            "Write a 90-second script summarizing 3 reasons creators should use AI voiceovers instead of recording
            manually, with one example per reason."
          </li>
          <li>
            "Draft a 3-minute onboarding script welcoming new users to my AI prompts platform and showing how to find
            what they need."
          </li>
          <li>"Create a 60-second script for a TikTok/Reel voiceover explaining one quick AI prompt hack."</li>
          <li>
            "Generate a 2-minute script describing how to convert blog posts into narrated videos using Lovo and my
            prompts."
          </li>
        </ul>

        <h2>25+ Script Ideas for Lovo Voiceover Blocks</h2>

        <h3>Content & YouTube</h3>
        <ul>
          <li>
            60-second voiceover introducing a "Top 5 AI tools for creators" video, with one sentence per tool in the
            intro.
          </li>
          <li>
            2-minute walkthrough script explaining how to find, copy, and adapt prompts on your site, broken into three
            clear sections.
          </li>
          <li>3-minute tutorial voiceover for "How to batch create voiceovers with Lovo for your YouTube channel."</li>
          <li>
            90-second narration for a montage showing your workday, explaining each step: plan, script, record, edit.
          </li>
          <li>60-second "why I use AI voices instead of recording everything myself" script.</li>
          <li>
            2-minute story about going from manual editing to AI-assisted editing and voiceovers, with a simple
            narrative arc.
          </li>
          <li>
            3-minute lesson script explaining a basic prompt framework (e.g., Role + Task + Context + Output), with
            examples.
          </li>
          <li>90-second "FAQ" script addressing the 5 questions people ask most about your prompts or tools.</li>
          <li>2-minute outro script for your course, summarizing what students learned and what to do next.</li>
          <li>60-second script for a "quick tip" video that overlays B-roll of your workflow with a voiceover.</li>
        </ul>

        <h3>Business, ads & eLearning</h3>
        <ul>
          <li>30-second voiceover ad for your AI prompts site targeted at e-commerce founders.</li>
          <li>
            45-second "cold audience" script addressing a pain point (no time to write) and hinting at your solution.
          </li>
          <li>60-second script for a landing page hero video for your prompts membership.</li>
          <li>90-second script for a case-study video summarizing a client win.</li>
          <li>2-minute internal training voiceover on how to use AI tools safely in your company.</li>
          <li>3-minute eLearning script introducing a module on "AI basics for marketing teams".</li>
          <li>2-minute script teaching "how to write voiceover-friendly copy" with do's and don'ts.</li>
          <li>90-second script for an internal announcement about a new content process using AI tools.</li>
          <li>2-minute script explaining a new SOP, step-by-step, with simple language.</li>
          <li>
            3-minute script for a mini-course lesson on "how to repurpose scripts for video, audio, and social posts".
          </li>
        </ul>

        <h2>Best Practices for Lovo AI Voice Prompts</h2>
        <ul>
          <li>
            <strong>Outline first, then write:</strong> know your audience, key messages, and call-to-action before
            drafting your script.
          </li>
          <li>
            <strong>Use short, informative sentences:</strong> avoid long, complex structures; aim for natural spoken
            language.
          </li>
          <li>
            <strong>Clean the script before generating:</strong> remove notes, adjust acronyms, and trim anything you
            don't want read aloud.
          </li>
          <li>
            <strong>Leverage blocks and multiple voices:</strong> use separate voice blocks for sections, speakers, or
            tone shifts to keep editing flexible.
          </li>
          <li>
            <strong>Iterate & listen back:</strong> generate, listen, then tweak speed, emphasis, pauses, and even
            script wording based on how it actually sounds.
          </li>
        </ul>
      </article>

      <footer className="bg-slate-900 text-white py-12 px-6 md:px-12 mt-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p className="opacity-60">© 2026 GPTPrompts.AI</p>
          <Link href="/website-links" className="hover:opacity-80 transition-opacity">
            Back to Prompts Library
          </Link>
        </div>
      </footer>
    </main>
  )
}
