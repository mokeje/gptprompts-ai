import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Volunteer Recruitment Prompts | ChatGPT for Nonprofits",
  description:
    "30+ ChatGPT prompts for nonprofit volunteer recruitment including job descriptions, recruitment campaigns, onboarding communications, and retention strategies.",
  keywords: "volunteer recruitment, nonprofit volunteers, volunteer management, ChatGPT nonprofit, volunteer retention",
}

export default function VolunteerRecruitmentPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-rose-900 to-rose-700 text-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Volunteer Recruitment Prompts: 30+ ChatGPT Templates</h1>
          <p className="text-xl opacity-90">
            Job descriptions, recruitment campaigns, onboarding materials, and retention strategies to attract and keep
            passionate volunteers for your nonprofit.
          </p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 space-y-12">
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">1. Volunteer Job Descriptions (8+ prompts)</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Position Description:</strong> "Write an exciting volunteer job description for [ROLE] at
                [NONPROFIT]. Include: mission impact, responsibilities, qualifications, and time commitment."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Multiple Positions:</strong> "Create job descriptions for 5 different volunteer roles: [LIST].
                Highlight different skills needed and impact for each."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Impact Story in JD:</strong> "Rewrite this volunteer position description to emphasize impact.
                Include a brief story of what volunteers accomplish."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">2. Recruitment Campaign Copy (8+ prompts)</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Campaign Hook:</strong> "Write a compelling campaign to recruit [ROLE] volunteers for
                [NONPROFIT]. Start with an emotional hook about impact."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Social Media Ads:</strong> "Create 5 Facebook ad variations recruiting volunteers for
                [NONPROFIT]. Mix different messaging angles and CTAs."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Email Campaign:</strong> "Build a 3-email recruitment sequence: awareness of opportunity,
                value/impact, call-to-action with next steps."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">3. Onboarding & Training (7+ prompts)</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Welcome Email:</strong> "Write a welcome email for new [ROLE] volunteers at [NONPROFIT]. Build
                excitement, explain next steps, answer FAQs."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Training Guide:</strong> "Create an onboarding guide for [ROLE] volunteers covering: background,
                procedures, tools, safety, and support resources."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>First Day Checklist:</strong> "Write a first-day volunteer checklist for [NONPROFIT]. Cover
                logistics, introductions, tools, and success setup."
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-rose-50 border-l-4 border-rose-500 p-8 rounded space-y-4">
          <h3 className="text-2xl font-bold">Volunteer Recruitment Impact</h3>
          <div className="space-y-3 text-lg">
            <p>
              <strong>Average Nonprofit Volunteer Stats:</strong>
            </p>
            <ul className="ml-6 space-y-2">
              <li>✓ 77 million Americans volunteer annually</li>
              <li>✓ Average volunteer commitment: 52 hours/year</li>
              <li>✓ Value of volunteer hour: $30-50 (labor equivalent)</li>
              <li>✓ Retention challenge: 40% of volunteers leave after 1 year</li>
            </ul>
            <p className="mt-4">
              <strong>With AI-Optimized Recruitment:</strong>
            </p>
            <ul className="ml-6 space-y-2">
              <li>✓ Job descriptions 60% more appealing</li>
              <li>✓ Campaign ROI: 3-5x better response rates</li>
              <li>✓ Onboarding effectiveness: 35% higher retention</li>
              <li>✓ Volunteer satisfaction: +25% improvement</li>
            </ul>
            <p className="text-lg font-bold text-rose-900 mt-4">
              Result: More volunteers, better retention, greater impact
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">4. Volunteer Engagement & Retention (5+ prompts)</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Recognition Program:</strong> "Design a volunteer recognition program for [NONPROFIT]. Include:
                milestones, rewards, celebration, and testimonials."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Retention Communication:</strong> "Write monthly volunteer engagement emails for [NONPROFIT]
                showing impact and keeping volunteers connected."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Upgrade to Leadership:</strong> "Create messaging to invite volunteer leaders to [NONPROFIT]
                board or committee positions."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">5. FAQ & Troubleshooting (2+ prompts)</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Volunteer FAQ:</strong> "Create comprehensive FAQ for volunteer applicants at [NONPROFIT]: time
                commitment, expectations, benefits, scheduling, support."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Common Questions:</strong> "Write response templates for these common volunteer questions:
                [LIST]. Be warm, helpful, and encouraging."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">Can we personalize recruitment for different volunteer types?</h3>
              <p className="text-lg leading-relaxed">
                Absolutely. Use AI to tailor messages for: students (flexible hours, resume builders), professionals
                (skill use, networking), retirees (meaningful contribution, community). Different motivations =
                different messaging.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">How do we improve volunteer retention?</h3>
              <p className="text-lg leading-relaxed">
                Three keys: clear expectations (good JD), great onboarding, and consistent appreciation. AI helps with
                all three. Plus, regular impact communication keeps volunteers motivated.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">Should we recruit online or offline?</h3>
              <p className="text-lg leading-relaxed">
                Use both. Online recruitment reaches wider audience. Offline (community events, word-of-mouth) gets
                higher quality matches. Best approach: hybrid with referral incentives.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t-2 pt-12 mt-12 space-y-6">
          <h2 className="text-3xl font-bold">Build Your Volunteer Army with AI</h2>
          <p className="text-lg">
            Volunteers are the lifeblood of nonprofits. AI-optimized recruitment, onboarding, and engagement can
            dramatically increase both volunteer quality and retention, multiplying your mission impact.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/nonprofit-marketing-prompts"
              className="px-6 py-3 bg-primary text-white rounded hover:opacity-90"
            >
              Nonprofit Marketing Prompts
            </Link>
            <Link
              href="/fundraising-email-prompts"
              className="px-6 py-3 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white"
            >
              Fundraising Email Prompts
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
