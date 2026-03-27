import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nonprofit Marketing Prompts | ChatGPT Content Templates for Nonprofits",
  description:
    "75+ ChatGPT prompts for nonprofit marketing including social media content, donor communication, campaign strategy, and storytelling templates to boost engagement.",
  keywords:
    "nonprofit marketing, nonprofit prompts, nonprofit social media, donor communication, nonprofit storytelling",
}

export default function NonprofitMarketingPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nonprofit Marketing Prompts: 75+ ChatGPT Templates</h1>
          <p className="text-xl opacity-90">
            Social media content, donor communication, campaign strategy, and impact storytelling templates to amplify
            nonprofit reach and engagement.
          </p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 space-y-12">
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">1. Social Media Content Strategy (25+ prompts)</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Campaign Themes:</strong> "Create 12 monthly social media themes for our nonprofit focused on
                [CAUSE]. Include hook, content pillars, and hashtags."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Content Calendar:</strong> "Generate a 30-day social media calendar for [NONPROFIT] with: posts,
                timing, visuals descriptions, and CTAs."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Platform-Specific Posts:</strong> "Write 5 Instagram reels scripts for [NONPROFIT] that drive
                [GOAL]. Include trending audio suggestions."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">2. Donor Communication & Engagement (20+ prompts)</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Donor Thank You:</strong> "Write personalized thank you letters for donors at different giving
                levels ($[AMOUNT] to $[AMOUNT]). Make each feel valued."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Impact Stories:</strong> "Tell an emotional impact story about how our [PROGRAM] changed
                [BENEFICIARY'S] life. Include quantified outcomes."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Donor Newsletters:</strong> "Create a quarterly donor newsletter for [NONPROFIT] with: impact
                highlights, upcoming events, volunteer opportunities, and giving opportunities."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">3. Campaign Strategy & Messaging (15+ prompts)</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Campaign Brief:</strong> "Create a campaign brief for [NONPROFIT CAMPAIGN] including: goal,
                target audience, key message, tactics, timeline, and success metrics."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Messaging Framework:</strong> "Develop messaging for [NONPROFIT] that appeals to [AUDIENCE].
                Create headline, subheading, CTA, and supporting copy."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Awareness vs Action:</strong> "Create two versions of messaging for [NONPROFIT]: one that raises
                awareness, one that drives action/donations."
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-green-50 border-l-4 border-green-500 p-8 rounded space-y-4">
          <h3 className="text-2xl font-bold">Content Creation Efficiency: 40 Hours → 8 Hours</h3>
          <div className="space-y-3 text-lg">
            <p>
              <strong>Manual Content Creation (40 hours/month):</strong>
            </p>
            <ul className="ml-6 space-y-2">
              <li>✓ Social planning & strategy (8 hours)</li>
              <li>✓ Individual post writing (24 hours)</li>
              <li>✓ Donor communications (5 hours)</li>
              <li>✓ Campaign planning (3 hours)</li>
            </ul>
            <p className="mt-4">
              <strong>AI-Assisted Content (8 hours/month):</strong>
            </p>
            <ul className="ml-6 space-y-2">
              <li>✓ AI strategy & calendar (1 hour)</li>
              <li>✓ AI content drafting (3 hours)</li>
              <li>✓ AI donor letters (1 hour)</li>
              <li>✓ Marketing review & edits (3 hours)</li>
            </ul>
            <p className="text-lg font-bold text-green-900 mt-4">
              Time Savings: 80% | Result: More consistent, higher-volume content
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">4. Storytelling & Impact Communication (12+ prompts)</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Impact Narrative:</strong> "Create an impact narrative for [NONPROFIT] that connects: problem,
                solution, results, and call-to-action."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Before & After Stories:</strong> "Write compelling before-and-after stories for [BENEFICIARY
                TYPE]. Show transformation with specific details."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Data to Story:</strong> "Convert these statistics [DATA] into compelling stories for
                [NONPROFIT]. Make numbers relatable and emotional."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">5. Email Marketing & Fundraising Appeals (8+ prompts)</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Email Series:</strong> "Create a 5-email fundraising sequence for [NONPROFIT GOAL]: teaser,
                story, impact, urgency, close."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Subject Lines:</strong> "Write 10 high-performing subject lines for [NONPROFIT] emails that
                drive [SPECIFIC GOAL]. Make them urgent & emotional."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Annual Appeal:</strong> "Draft an annual year-end giving appeal for [NONPROFIT] that tells your
                story and asks for support."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">Can AI capture our nonprofit's unique voice?</h3>
              <p className="text-lg leading-relaxed">
                AI learns from examples. Provide 2-3 samples of your best content, then ask AI to write in that style.
                Refine iteratively to nail your voice.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">Is AI content authentic for nonprofit storytelling?</h3>
              <p className="text-lg leading-relaxed">
                AI provides excellent drafts but needs human review for authenticity. Always verify facts and ensure
                stories reflect real beneficiary experiences. The best content is AI + human collaboration.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">How do we avoid sounding robotic?</h3>
              <p className="text-lg leading-relaxed">
                Ask AI to write in conversational, emotionally resonant tone. Include specific details. Have team
                members edit for voice and authenticity.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t-2 pt-12 mt-12 space-y-6">
          <h2 className="text-3xl font-bold">Amplify Your Nonprofit Impact with AI</h2>
          <p className="text-lg">
            Nonprofits do more with less. AI multiplies your marketing capacity 5-10x, freeing limited staff to focus on
            mission-critical work while maintaining authentic voice and impact.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/nonprofit-grant-writing" className="px-6 py-3 bg-primary text-white rounded hover:opacity-90">
              Grant Writing Prompts
            </Link>
            <Link
              href="/chatgpt-prompts"
              className="px-6 py-3 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white"
            >
              All ChatGPT Prompts
            </Link>
          </div>
        </section>
      </article>

      <footer className="bg-foreground text-background py-12 px-6 md:px-12 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="opacity-75">© 2026 GPTPrompts.AI - Professional AI Prompting Guides</p>
          <Link href="/website-links" className="text-primary hover:underline">
            View All Pages
          </Link>
        </div>
      </footer>
    </main>
  )
}
