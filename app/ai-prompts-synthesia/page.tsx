import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Prompts for Synthesia: 80+ Script & Avatar Ideas for Pro AI Videos (2026 Guide)",
  description:
    "Master Synthesia AI avatar videos with 80+ script templates and ideas. Learn meta-prompts for marketing, training, and internal comms. Complete guide with best practices and examples.",
  keywords: "Synthesia prompts, AI avatar videos, script prompts, video generation, Synthesia guide",
}

export default function SynthesiaPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-6 md:px-12 border-b">
        <div className="max-w-4xl mx-auto">
          <Link href="/website-links" className="text-sm opacity-70 hover:opacity-100 mb-6 inline-block">
            ← Back to Prompts Library
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            AI Prompts for Synthesia: 80+ Script & Avatar Ideas for Pro AI Videos
          </h1>
          <p className="text-xl text-gray-200">
            Master script generation and avatar creation with production-ready prompts
          </p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 prose prose-invert max-w-none">
        <h2>How Synthesia Prompts Work</h2>
        <p>Synthesia turns scripts into AI-avatar videos, so your "prompts" are mainly:</p>
        <ul>
          <li>Script prompts (what the avatar says, scene by scene)</li>
          <li>Instruction prompts (how ChatGPT/AI should write those scripts)</li>
          <li>Avatar/look choices</li>
        </ul>
        <p>
          Synthesia's own guides recommend: be specific about topic, audience, goal, and length; write in short,
          conversational sentences; and keep scenes concise, aiming for around 130–150 words per minute and multiple
          scenes instead of one long block.
        </p>

        <h2>Meta-Prompts to Generate Synthesia Scripts (Use with ChatGPT)</h2>
        <p>
          Synthesia explicitly encourages using AI (like ChatGPT) to generate scene-by-scene scripts using robust
          prompts. You can publish these as copy-paste "super-prompts" for your readers.
        </p>

        <h3>General script generator (base template)</h3>
        <pre className="bg-slate-900 p-4 rounded">
          {`"You are writing a script for a Synthesia AI avatar video.
Topic: [topic].
Audience: [who they are].
Goal: [what they should know/do after watching].
Length: [X] minutes.
Structure: Hook (10–15 seconds), 3 main points with simple examples, then a clear call-to-action.
Tone: [friendly/professional/enthusiastic].
Write short, spoken-style sentences and avoid long paragraphs."`}
        </pre>

        <h3>Meta-prompts by use-case</h3>
        <ul>
          <li>
            "Generate a 60-second Synthesia script for a marketing explainer. Audience: small business owners. Goal:
            show how AI prompts save time. Structure: strong hook, 3 benefits, CTA to visit our website. Tone: energetic
            but clear."
          </li>
          <li>
            "Write a 2-minute training script for new employees about cybersecurity basics. Audience: non-technical
            staff. Tone: calm and instructive. Use a simple 3-step structure and avoid jargon."
          </li>
          <li>
            "Create a 90-second internal announcement script for employees about a new remote-work policy. Tone:
            transparent and supportive. Include what is changing, why, and where to find more info."
          </li>
          <li>
            "Generate a 3-minute tutorial script broken into 5 scenes explaining how to use our AI prompts website. For
            each scene: heading, on-screen text (short), and spoken narration."
          </li>
          <li>
            "Write a 60-second customer testimonial script where the avatar speaks as a satisfied client who doubled
            content output with our prompts. Tone: genuine and specific. Include 2 concrete results."
          </li>
        </ul>

        <h2>30+ Ready Script Angles for Synthesia Videos</h2>

        <h3>Marketing & sales videos</h3>
        <ul>
          <li>
            60-second homepage explainer: what your AI prompts site is, who it's for, and one core benefit; simple
            language, one clear CTA.
          </li>
          <li>
            90-second product demo: avatar walks through 3 steps to find, copy, and customize prompts on your site, with
            one example prompt per step.
          </li>
          <li>
            45-second "problem-agitate-solve" video: pain of blank-page content, stress of deadlines, then how prompts
            fix it quickly.
          </li>
          <li>
            60-second "feature to benefit" video: 3 features of your prompt library each turned into a practical outcome
            for marketers.
          </li>
          <li>
            2-minute case study: short story of a creator who went from 1 video per week to 5 using your prompts, with
            before/after metrics.
          </li>
          <li>
            60-second "pricing explainer": avatar briefly outlines plans, who each tier is for, and suggests which to
            choose.
          </li>
          <li>
            90-second comparison: using AI prompts vs hiring an extra copywriter, focusing on time, cost, and
            scalability.
          </li>
          <li>
            45-second retargeting video: avatar talks only to people who visited the site but didn't sign up, answers 3
            objections.
          </li>
          <li>
            60-second "what's new this month" update: avatar lists new prompt packs and features, with a quick tease of
            next month.
          </li>
          <li>
            90-second webinar invite: avatar introduces a live session on "Using AI prompts for YouTube and blogs",
            giving 3 reasons to attend.
          </li>
        </ul>

        <h3>Training & education</h3>
        <ul>
          <li>
            2-minute "how to write better prompts" mini-lesson, with one bad prompt, one improved prompt, and simple
            rules.
          </li>
          <li>
            3-minute onboarding video: avatar explains how to navigate your site, search prompts, and save favorites.
          </li>
          <li>
            2-minute "prompt safety & ethics" explainer, covering respectful language and avoiding sensitive topics.
          </li>
          <li>
            3-minute module: avatar teaches a simple framework (e.g. Role + Task + Context + Output format) with
            examples.
          </li>
          <li>
            90-second refresher: quick recap of how to use prompts correctly inside a company's workflow (e.g. drafts,
            reviews, approvals).
          </li>
          <li>
            2-minute tutorial: avatar shows how to adapt one prompt across social platforms (YouTube, TikTok, LinkedIn).
          </li>
          <li>3-minute "AI tools overview" for new staff, introducing Synthesia, ChatGPT, and your prompt hub.</li>
          <li>2-minute "FAQ" video answering the top 5 questions users ask about your prompts or platform.</li>
          <li>90-second micro-lesson for sales teams: how to use AI prompts to prepare call scripts quickly.</li>
          <li>
            2-minute "writing for video" lesson: avatar explains why spoken scripts must be shorter and more
            conversational than blog text.
          </li>
        </ul>

        <h3>Internal comms & HR</h3>
        <ul>
          <li>60-second welcome video to new hires, outlining what they can do in the first week.</li>
          <li>90-second "monthly update" with 3 highlights and 1 upcoming initiative.</li>
          <li>2-minute "how to request content from marketing using AI prompts", with step-by-step instructions.</li>
          <li>60-second culture video emphasizing values and how AI helps employees focus on higher-value work.</li>
          <li>2-minute training on using AI responsibly and responsibly, referencing company policy.</li>
          <li>90-second announcement of a new internal AI training program, with dates and sign-up info.</li>
          <li>60-second "survey request" video where the avatar explains why feedback matters and how to respond.</li>
          <li>2-minute "year-in-review" highlight reel script with achievements and gratitude.</li>
          <li>90-second video explaining a new performance-review format, structured into 3 simple steps.</li>
          <li>60-second reminder to complete compliance training, with an encouraging but firm tone.</li>
        </ul>

        <h2>Prompting for Scene Structure & Visuals</h2>
        <p>
          Synthesia's templates and "Generate with AI" features break videos into scenes with avatars, background media,
          and on-screen text.
        </p>
        <ul>
          <li>
            "For each scene, output: Scene title, on-screen text (max 10 words), and avatar narration (40–60 words).
            Make the on-screen text support, not duplicate, the narration."
          </li>
          <li>
            "Write a 5-scene script. Each scene should include: 1) short heading, 2) one visual suggestion (icon,
            B-roll, or simple animation), 3) 2–3 short sentences for the avatar to say."
          </li>
          <li>
            "Use the FOCA framework (Focus, Outcome, Content, Action) for a 60-second video: one sentence for focus, two
            for outcome, three for content, and one for action."
          </li>
        </ul>

        <h2>Best Practices for Strong Synthesia Prompts</h2>
        <ul>
          <li>
            <strong>Always define goal, audience, and length</strong> in the prompt before asking for a script; this
            dramatically improves relevance.
          </li>
          <li>
            <strong>Write for the ear, not the eye:</strong> short sentences, everyday language, and about 130–150 words
            per narrated minute.
          </li>
          <li>
            <strong>Use scene-by-scene structure</strong> instead of dumping everything in one scene; this gives better
            pacing and easier edits.
          </li>
          <li>
            <strong>Iterate with feedback:</strong> generate a first draft, then prompt the AI to "make it shorter",
            "more conversational", or "add an example" rather than starting over.
          </li>
          <li>
            <strong>Test voices and avatars:</strong> Synthesia suggests trying 2–3 voices on your first scene and
            picking the best match before generating the full video.
          </li>
        </ul>

        <h2>Key Takeaways</h2>
        <p>
          Using these templates and 80+ angle ideas, your "AI Prompts for Synthesia" page can act as a practical hub for
          marketers, trainers, and internal comms teams who want fast, high-quality avatar videos driven by
          well-engineered prompts.
        </p>
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
