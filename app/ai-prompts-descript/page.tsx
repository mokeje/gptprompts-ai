import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Prompts for Descript: 60+ Script, Editing & Overdub Ideas (2026 Guide)",
  description:
    "Master Descript AI with 60+ script generation, editing, and Overdub prompts. Learn Ask AI, clarity editing, and TTS techniques. Complete Descript guide.",
}

export default function DescriptPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <header className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/website-links" className="text-sm opacity-70 mb-4 inline-block">
            ← Back to Prompts Library
          </Link>
          <h1 className="text-5xl font-bold mb-4">AI Prompts for Descript: 60+ Script, Editing & Overdub Ideas</h1>
          <p className="text-xl text-gray-200">
            Master Descript's AI tools with script generation, video editing, and Overdub voiceover prompts
          </p>
        </div>
      </header>
      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">How Descript AI Prompts Work</h2>
          <p className="mb-4">
            Descript uses AI in three main areas: Ask AI (for drafting scripts), AI video editing actions (like "Edit
            for Clarity"), and Overdub (text-to-speech). Great "prompts" are detailed context blocks: tell the AI what
            the project is, who it's for, what you want changed, and how long it should be.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Meta-Prompts for Descript's Ask AI Script Writer</h2>
          <pre className="bg-slate-900 text-white p-4 rounded mb-4">
            {`"You are writing a script for a [type of video].
Topic: [topic].
Audience: [who].
Goal: [what they should learn].
Length: about [X] words / [Y] minutes.
Tone: [friendly/professional/enthusiastic].
Structure: [hook → body → CTA] with clear, short sentences."`}
          </pre>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">20+ Specific Script Prompts</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>2-minute YouTube video script on using Descript Overdub</li>
            <li>60-second hook for "5 AI tools every content creator should know"</li>
            <li>3-minute tutorial on using 'Edit for Clarity' AI action</li>
            <li>90-second explainer for small business on why transcription helps editing</li>
            <li>2-minute video script from bullet notes</li>
            <li>60-second video explainer from a blog section</li>
            <li>3-minute interview highlight script</li>
            <li>3-minute educational script on batch recording content</li>
            <li>2-minute onboarding script for new team members</li>
            <li>60-second promo script for an online course</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">20+ AI Editing Prompt Ideas</h2>
          <p className="mb-4">Use these in Ask AI on a transcript inside Descript:</p>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              "Edit this script for clarity: remove filler words, repetitions, and unfinished thoughts while keeping
              meaning"
            </li>
            <li>"Shorten this to 60 seconds of audio while preserving the three main points"</li>
            <li>"Rewrite to sound more conversational with shorter sentences"</li>
            <li>"Simplify this explanation for a non-technical beginner"</li>
            <li>"Turn this montage into a clear, step-by-step tutorial with numbered steps"</li>
            <li>"Highlight 5 potential short clips under 30 seconds for social media"</li>
            <li>"Write three alternative hooks (10–15 seconds each) for this video"</li>
            <li>"Create show notes and episode description with 5 SEO title ideas"</li>
            <li>"Convert this paragraph into bullet points (max 8 words each)"</li>
            <li>"Remove sentences that repeat the same idea"</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Best Practices for Descript AI Prompts</h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>
              <strong>Lead with context:</strong> specify audience, format, and desired outcome
            </li>
            <li>
              <strong>Write for spoken delivery:</strong> short sentences, clear punctuation, everyday language
            </li>
            <li>
              <strong>Break work into stages:</strong> draft, clarify, shorten as separate prompts
            </li>
            <li>
              <strong>Save successful prompts:</strong> save as templates in Descript for future use
            </li>
            <li>
              <strong>Use transcripts as source:</strong> let Ask AI transform real recordings into summaries and hooks
            </li>
          </ul>
        </section>
      </article>
      <footer className="bg-slate-900 text-white py-12 px-6 mt-16 border-t">
        <div className="max-w-4xl mx-auto flex justify-between">
          <p className="opacity-60">© 2026 GPTPrompts.AI</p>
          <Link href="/website-links">Back to Prompts Library</Link>
        </div>
      </footer>
    </main>
  )
}
