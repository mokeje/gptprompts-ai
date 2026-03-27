import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fundraising Email Prompts | ChatGPT Templates for Nonprofits",
  description:
    "45+ ChatGPT prompts for nonprofit fundraising emails including appeal letters, donor sequences, matching gift campaigns, and peer-to-peer fundraising templates.",
  keywords: "fundraising email, nonprofit email, donation appeal, ChatGPT fundraising, peer fundraising",
}

export default function FundraisingEmailPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Fundraising Email Prompts: 45+ ChatGPT Templates</h1>
          <p className="text-xl opacity-90">
            Annual appeals, donor sequences, matching gift campaigns, and peer-to-peer fundraising email templates to
            maximize nonprofit revenue.
          </p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 space-y-12">
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">1. Annual Appeal & Year-End Campaigns (15+ prompts)</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Year-End Appeal:</strong> "Write a compelling year-end giving appeal for [NONPROFIT]. Tell your
                story, show impact, ask for $[GOAL]."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Giving Tuesday Email:</strong> "Create a Giving Tuesday email for [NONPROFIT] with: urgency,
                impact story, donation matching incentive, and clear CTA."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>30/60/90 Day Follow-up:</strong> "Write three follow-up emails (sent at 30, 60, 90 days) for
                donors who received but didn't respond to [APPEAL]."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">2. Donor Engagement Sequences (12+ prompts)</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Welcome Series:</strong> "Create a 4-email welcome sequence for first-time donors to
                [NONPROFIT]. Include story, mission, impact, and upgrade opportunity."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Lapsed Donor Reactivation:</strong> "Write a reactivation email for donors who haven't given in
                [TIME PERIOD]. Thank them, show new impact, invite them back."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Upgrade Campaign:</strong> "Create a sequence to upgrade $[AMOUNT] donors to $[HIGHER AMOUNT].
                Focus on expanded impact of larger gift."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">3. Matching Gift & Challenge Campaigns (8+ prompts)</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Matching Gift Announcement:</strong> "We have a $[AMOUNT] match! Write an exciting email that
                explains the match and encourages donations."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Challenge Campaign:</strong> "Create a challenge campaign email: 'Help us reach $[GOAL] by
                [DATE]!' Show progress, urgency, and impact."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Countdown Emails:</strong> "Write 3 countdown emails as matching campaign deadline approaches (7
                days, 3 days, final day)."
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded space-y-4">
          <h3 className="text-2xl font-bold">Email ROI: Average Performance Metrics</h3>
          <div className="space-y-3 text-lg">
            <p>
              <strong>Typical Nonprofit Email Performance:</strong>
            </p>
            <ul className="ml-6 space-y-2">
              <li>✓ Open rate: 25-35% (industry avg)</li>
              <li>✓ Click-through rate: 2-4%</li>
              <li>✓ Donation conversion: 0.5-1.5%</li>
              <li>✓ Average gift: $50-200</li>
            </ul>
            <p className="mt-4">
              <strong>With AI-Optimized Copy:</strong>
            </p>
            <ul className="ml-6 space-y-2">
              <li>✓ Open rate: 35-45% (+40% improvement)</li>
              <li>✓ Click-through rate: 4-6% (+60% improvement)</li>
              <li>✓ Donation conversion: 1-2% (+50% improvement)</li>
              <li>✓ Average gift: $75-250 (+25% higher)</li>
            </ul>
            <p className="text-lg font-bold text-amber-900 mt-4">
              Email + AI = 40-60% revenue lift from same list size
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">4. Peer-to-Peer & Peer Fundraising (5+ prompts)</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Peer Fundraiser Recruitment:</strong> "Recruit peer fundraisers for [NONPROFIT EVENT]. Explain
                how they can start fundraising and reach personal goals."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Fundraiser Thank You:</strong> "Thank peer fundraisers who raised $[AMOUNT]. Celebrate impact
                and offer incentives for next event."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Donor Solicitation for Fundraisers:</strong> "Email supporters asking them to donate to
                [FUNDRAISER'S] campaign for [NONPROFIT]. Personal connection angle."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">5. Subject Lines & Optimization (5+ prompts)</h2>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>High-Performing Subject Lines:</strong> "Write 15 subject lines for [NONPROFIT] email that
                drives donations. Mix urgency, curiosity, and emotion."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>A/B Test Variations:</strong> "For this fundraising email, create A/B test variations: emotional
                vs. rational, urgent vs. informative, short vs. long."
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">•</span>{" "}
              <span>
                <strong>Personalization Prompts:</strong> "Suggest personalization variables for [NONPROFIT] emails:
                name, giving history, interests, past engagement."
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">Does AI make emails feel impersonal?</h3>
              <p className="text-lg leading-relaxed">
                No. AI excels at personalization. Use variables like donor name, giving history, and interests. Combine
                AI copy with email platform merge fields for authentic personalization.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">Can we legally use AI for fundraising emails?</h3>
              <p className="text-lg leading-relaxed">
                Yes, as long as you're honest about content source. You don't need to disclose AI use, but always ensure
                accuracy and authenticity of impact claims.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">What's the best email frequency for fundraising?</h3>
              <p className="text-lg leading-relaxed">
                Test 1-4 emails/month depending on list size and donor preference. Use segmentation to send more
                relevant emails to warm audiences, fewer to cold audiences. Monitor unsubscribe rates.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t-2 pt-12 mt-12 space-y-6">
          <h2 className="text-3xl font-bold">Unlock Email Revenue with AI</h2>
          <p className="text-lg">
            Email remains the highest ROI channel for nonprofits. AI-optimized copy, strategic sequences, and
            personalization can increase revenue 40-60% from your existing donor base.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/nonprofit-grant-writing" className="px-6 py-3 bg-primary text-white rounded hover:opacity-90">
              Grant Writing Prompts
            </Link>
            <Link
              href="/nonprofit-marketing-prompts"
              className="px-6 py-3 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white"
            >
              Nonprofit Marketing Prompts
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
