import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Prompts for Health & Wellness Coaches: Client Plans, Content & Social Media (2026 Guide)",
  description:
    "Master health coaching with 100+ AI prompts for client plans, nutrition guidance, stress management, social media, and email marketing. Learn ethical prompting for wellness coaching.",
  keywords: "health coaching prompts, wellness prompts, nutrition prompts, fitness prompts, coach content templates",
}

export default function HealthWellnessCoachesPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-rose-900 to-rose-800 text-white py-16 px-6 md:px-12 border-b">
        <div className="max-w-4xl mx-auto">
          <Link href="/website-links" className="text-sm opacity-70 hover:opacity-100 mb-6 inline-block">
            ← Back to Prompts Library
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            AI Prompts for Health & Wellness Coaches: Client Plans, Content & Social Media
          </h1>
          <p className="text-xl text-gray-200">
            Create personalized client plans, educational content, and social campaigns with AI guidance
          </p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 prose prose-invert max-w-none">
        <h2>Prompt Framework for Health & Wellness Coaches</h2>
        <p>
          Health-coach prompt libraries and AI guides recommend a simple 3-part formula: Role → Task → Context. For
          wellness, context should always include goals, constraints, and disclaimers.
        </p>

        <pre className="bg-slate-900 p-6 rounded-lg overflow-x-auto">
          {`"You are a certified health & wellness coach.
Niche: [e.g., weight loss for busy moms, stress management for founders].
Client: [age, gender, lifestyle, key challenges].
Goal: [specific health outcome].
Constraints: [time, budget, equipment, medical conditions].
Create [plan/content type] that is realistic, habit-based, and includes appropriate safety disclaimers."`}
        </pre>

        <p>This mirrors how health-coach prompt templates structure information for personalized plans and content.</p>

        <h2>AI Prompts for Client Plans & Coaching Materials</h2>

        <h3>Personalized 4–6 week wellness plan</h3>
        <p>
          "Act as a certified health & wellness coach. Client profile: [age, gender, job, current activity level, sleep,
          stress, diet summary]. Goals: [e.g., lose 5kg in 12 weeks, reduce stress, improve energy]. Constraints:
          [equipment, time per day, injuries, medical notes]. Create a 4-week habit-based wellness plan including:
          Weekly focus theme, 3–5 simple daily habits (movement, nutrition, sleep, stress), 1 weekly reflection
          question. Include a brief disclaimer that this is educational and not medical advice."
        </p>

        <h3>Nutrition guidance (non-prescriptive)</h3>
        <p>
          "Act as a nutrition-focused wellness coach (not a doctor). Client: [details]. Goals: [e.g., stabilize energy,
          support gentle fat loss]. Create: 5 simple guidelines for everyday eating (not a strict 'diet'), A sample
          1-day meal pattern with flexible options, 5 snack ideas. Avoid rigid rules; emphasize balance and listening to
          hunger cues. Include a reminder to consult a healthcare provider for medical conditions."
        </p>

        <h3>Starter movement routine (beginner-friendly)</h3>
        <p>
          "Design a beginner-friendly weekly movement plan for someone who currently does almost no exercise, works at a
          desk, and has [note: mild knee pain / no injuries]. Goal: build consistency and confidence, not intensity.
          Provide: 7-day overview (rest days clearly marked), Daily movement suggestions (e.g., walking, gentle
          mobility, light strength) with time ranges, 3 safety tips and red-flag symptoms that mean they should stop and
          seek medical advice."
        </p>

        <h3>Stress & mindfulness toolkit</h3>
        <p>
          "Create a simple stress-management toolkit for a client who feels overwhelmed at work. Include: A 5-minute
          morning routine, 3 micro-practices they can do during the workday (under 2 minutes each), A 10-minute evening
          wind-down, 5 journaling prompts to explore stress triggers and boundaries."
        </p>

        <h3>Coaching session template</h3>
        <p>
          "Design a 60-minute 1:1 coaching session structure for a health & wellness coach working with [type of client]
          on [goal]. Break down: check-in, review of last week, coaching conversation, planning next steps, and closing.
          Include 5 powerful coaching questions I can ask during the session."
        </p>

        <h2>AI Prompts for Content (Blogs, Emails, Resources)</h2>

        <h3>Educational blog outline</h3>
        <p>
          "Outline a 1,500-word blog post for my health coaching website on '[topic]' for [audience]. Include: A hooky
          introduction focused on their real-life struggles, 4–6 main sections teaching practical steps, 1 section that
          addresses common myths, A conclusion with a gentle CTA to book a discovery call."
        </p>

        <h3>Client handout / one-pager</h3>
        <p>
          "Create a one-page client handout titled '[topic]' (e.g., 'Foundations of Blood Sugar Balance', 'Sleep Hygiene
          Basics'). Use headings, bullet points, and simple explanations. End with 3 'Today I will…' action prompts they
          can check off."
        </p>

        <h3>Email nurture sequence for new subscribers</h3>
        <p>
          "Act as a wellness coach email marketer. Write a 5-email welcome sequence for new subscribers who downloaded
          my guide on [topic]. Email 1: welcome + what to expect, Email 2: your story and why you coach, Email 3:
          educational value (3 tips), Email 4: case study / client success story, Email 5: soft invitation to book a
          free consult. Each 150–200 words, warm and conversational."
        </p>

        <h2>AI Prompts for Social Media (Instagram, TikTok, YouTube, LinkedIn)</h2>

        <h3>30-day social content calendar</h3>
        <p>
          "Create a 30-day social media content calendar for a health & wellness coach helping [niche] with [main
          outcome]. Platforms: [IG / TikTok / LinkedIn]. Mix content types: education, myth-busting, personal story,
          client story, behind-the-scenes, and soft offers. For each day, provide a post idea and the best format (reel,
          carousel, static, story, or text-only)."
        </p>

        <h3>Post prompts by category</h3>
        <p>
          "Generate: 15 educational post prompts, 10 inspirational/mindset post prompts, 10 engagement questions for a
          health coach who helps [audience] with [goal]. Each prompt should be specific enough that I could sit down and
          write a post from it."
        </p>

        <h3>Caption drafts with CTA</h3>
        <p>
          "Write 10 Instagram captions (max ~150 words) for [niche] about [topic, e.g., 'small habit changes', 'stress
          and overeating']. Each caption should: Start with a hook line, Share 1 key idea or tip, End with a simple CTA
          (save, comment, or share)."
        </p>

        <h2>Marketing & Business Systems Prompts for Coaches</h2>

        <h3>Clarify your niche & messaging</h3>
        <p>
          "Act as a marketing coach for health professionals. Help me clarify my niche by answering: Who I help
          (specific people), What main problems I solve, What results I help them achieve, My unique angle or
          philosophy. Use my notes: [paste], and then propose a one-sentence positioning statement and a 2–3 sentence
          bio for social profiles."
        </p>

        <h3>Program / package outline</h3>
        <p>
          "Design a 12-week health-coaching program for [niche & main goal]. Include: What's included (sessions,
          messaging support, resources), Weekly themes, Example milestones, How to explain the program in simple
          language to a potential client."
        </p>

        <h3>Sales page structure</h3>
        <p>
          "Outline a sales page for my [program name] for [audience]. Sections: hero, problem, why now, your story,
          what's included, testimonials slots, FAQ, and CTA. Add bullet prompts for what to say under each section."
        </p>

        <h2>Safety, Ethics & Best Practices When Using AI as a Wellness Coach</h2>
        <ul>
          <li>
            <strong>Stay in scope.</strong> Use prompts that generate habit ideas, reflections, and education—not
            diagnoses, prescriptions, or treatment plans; always encourage clients to consult medical professionals for
            specific conditions.
          </li>
          <li>
            <strong>Include disclaimers.</strong> Ask AI to add short disclaimers ("educational only, not medical
            advice") to plans and content.
          </li>
          <li>
            <strong>Customize with your expertise.</strong> AI gives a draft; you adjust based on your training, values,
            and actual knowledge of the client.
          </li>
          <li>
            <strong>Protect privacy.</strong> Avoid pasting identifiable client information into third-party tools;
            describe anonymized profiles instead.
          </li>
          <li>
            <strong>Use AI for systems, not just posts.</strong> Biggest time savings come from templates, plans, email
            sequences, and workflows that you re-use, not only single captions.
          </li>
        </ul>

        <h2>FAQ: AI Prompts for Health & Wellness Coaches</h2>
        <div className="space-y-6 mt-8">
          <div className="bg-slate-900 p-6 rounded-lg">
            <h4 className="font-bold mb-3">Is it ethical to use AI for wellness coaching?</h4>
            <p>
              Yes, if used properly. AI is a tool for content creation, client systems, and ideation. You remain the
              certified coach responsible for personalization, safety, and client outcomes. Always disclose AI use and
              include disclaimers.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg">
            <h4 className="font-bold mb-3">Can AI create meal plans or workout programs?</h4>
            <p>
              Yes, but only general, non-prescriptive guidance. AI can draft habit ideas, beginner routines, and
              educational content. For specific medical or performance goals, you review, customize, and validate based
              on your certification and client data.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg">
            <h4 className="font-bold mb-3">How do I avoid AI-generated content sounding generic?</h4>
            <p>
              Customize AI outputs with your voice, stories, and expertise. Use prompts that ask for specific niches,
              examples from your ideal client, and your unique philosophy. Then edit and personalize to match your
              brand.
            </p>
          </div>
        </div>
      </article>

      <footer className="bg-slate-900 text-white py-12 px-6 md:px-12 mt-16 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/website-links" className="hover:opacity-70 transition-opacity">
            ← Back to Prompts Library
          </Link>
          <p className="mt-6 text-sm opacity-60">© 2026 GPTPrompts.AI - All Rights Reserved</p>
        </div>
      </footer>
    </main>
  )
}
