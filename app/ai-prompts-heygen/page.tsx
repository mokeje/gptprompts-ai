import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Prompts for HeyGen: 80+ Avatar, Script & Motion Ideas (2026 Guide)",
  description:
    "Master HeyGen avatar videos with 80+ prompts for avatar looks, scripts, and motion. Learn best practices and professional templates.",
}

export default function HeyGenPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <header className="bg-gradient-to-r from-orange-900 to-orange-800 text-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/website-links" className="text-sm opacity-70 mb-4 inline-block">
            ← Back to Prompts Library
          </Link>
          <h1 className="text-5xl font-bold mb-4">AI Prompts for HeyGen: 80+ Avatar, Script & Motion Ideas</h1>
          <p className="text-xl text-gray-200">
            Create professional avatar videos with comprehensive prompts for looks, scripts, and realistic motion
          </p>
        </div>
      </header>
      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">How HeyGen Prompts Work</h2>
          <p className="mb-4">
            HeyGen lets you control: how AI avatars look, how they move, and how AI scripts are generated. For looks,
            structure prompts into image type, main subject, background scene, and composition style. For scripts, use
            short bullet lists with tone, role, pacing, and motion instructions.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Prompt Formula for Avatar Looks</h2>
          <p className="mb-4">
            HeyGen's avatar look guide suggests: Image type + Main subject + Background scene + Composition & aesthetics
          </p>
          <pre className="bg-slate-900 text-white p-4 rounded mb-4">
            {`"Studio headshot photo of a professional woman in her 30s wearing a blazer, 
neutral gray background, mid-range composition, natural lighting, 
confident but friendly expression, highly detailed, realistic."`}
          </pre>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">25+ Avatar Look Prompts</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Professional woman, 30s, blazer, neutral background, mid-range, realistic</li>
            <li>Middle-aged man with glasses, modern office, soft lighting, blurred background</li>
            <li>Young Black woman, casual streetwear, colorful city wall, warm tones</li>
            <li>South Asian man, button-down shirt, light beige background, professional look</li>
            <li>Woman, 40s, curly hair, bright blouse, home office with plants</li>
            <li>Young man, hoodie, headphones, dark background, tech creator vibe</li>
            <li>Woman in café with laptop, warm light, shallow depth of field, relaxed</li>
            <li>Older man, gray hair, kind eyes, soft blue background, close-up, gentle smile</li>
            <li>Woman, business attire, corporate office, daylight from windows, confident</li>
            <li>Fitness coach, sportswear, gym setting, strong lighting, energetic expression</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">30+ Script Prompt Ideas</h2>
          <pre className="bg-slate-900 text-white p-4 rounded mb-4">
            {`"Role: [role].
Audience: [audience].
Goal: [goal].
Length: [duration].
Structure: [hook → body → CTA].
Tone: [tone keywords]."`}
          </pre>
          <ul className="space-y-2 list-disc list-inside mt-4">
            <li>60-second brand explainer for AI prompts membership</li>
            <li>90-second SaaS onboarding walkthrough for non-technical users</li>
            <li>45-second elevator pitch for your prompts library</li>
            <li>2-minute product demo walking through 3 steps</li>
            <li>60-second customer testimonial script</li>
            <li>2-minute training script on expense submission</li>
            <li>90-second explainer on prompt engineering basics</li>
            <li>3-minute course module on AI tools</li>
            <li>60-second safety reminder script</li>
            <li>90-second onboarding for remote employees</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Best Practices for HeyGen Prompts</h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>
              <strong>Put crucial instructions first:</strong> role, audience, goal, then style details
            </li>
            <li>
              <strong>Keep prompts short and clear:</strong> use simple, direct language with bullet points
            </li>
            <li>
              <strong>Separate concerns:</strong> use one prompt for look, one for script, one for motion
            </li>
            <li>
              <strong>Use realistic phrasing:</strong> "natural pose", "authentic emotion", "realistic lighting"
            </li>
            <li>
              <strong>Iterate & adjust:</strong> try multiple runs, then refine one factor at a time
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
