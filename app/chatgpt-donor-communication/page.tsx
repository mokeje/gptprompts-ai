import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ChatGPT for Donor Communication: Email Templates & Stewardship Prompts",
  description:
    "Master donor communication with ChatGPT. Thank-you emails, campaign messages, newsletters, and lapsed donor re-engagement strategies for nonprofits.",
}

export default function DonorCommunicationPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-blue-600 text-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-sm opacity-80 hover:opacity-100 mb-6 inline-block">
            Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">ChatGPT for Donor Communication</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Master personalized, timely donor emails without burning out your team. Thank-yous, campaigns, newsletters,
            and stewardship—all powered by AI.
          </p>
        </div>
      </header>

      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-6">What ChatGPT Can Do For Donor Communication</h2>
          <p>
            ChatGPT fits best as a writing assistant and idea generator that sits alongside your CRM and email tools. It
            drafts donor emails, letters, texts, and social posts tailored to specific segments. Summarizes donor
            histories so you walk into meetings prepared in minutes instead of hours. Suggests next-best actions,
            follow-up sequences, and re-engagement messages for lapsed donors. AI does not replace genuine
            relationships, but it reduces the admin load so staff can invest more time in calls, visits, and
            personalized outreach.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Donor Thank-You Emails and Letters</h2>
          <p>
            Timely, specific thanks is one of the strongest drivers of donor retention. ChatGPT can quickly generate
            first-time donor thank-you emails that reference the exact campaign and impact. Larger-gift acknowledgment
            letters you can print, sign, or hand-write.
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Example Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "Write a warm, 200-word thank-you email to a first-time donor who gave $75 to our back-to-school campaign,
              explaining how their gift helps 3 students receive supplies. Use a friendly, personal tone, one short
              story, and a clear but soft invitation to stay involved."
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Fundraising and Campaign Emails</h2>
          <p>
            For appeals, ChatGPT is useful for first drafts and message variations. Campaign launch emails tailored to
            different donor segments. Reminder and "last-chance" messages with urgency that still feel respectful. Event
            invitations and follow-up emails before and after a fundraiser.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Donor Newsletters and Impact Updates</h2>
          <p>
            Regular, high-quality updates can be time-consuming to write; AI can reduce the friction. Turn program notes
            and stats into a readable donor newsletter. Draft short "impact stories" and progress updates for email or
            social media. Rephrase technical reports into plain language for non-expert readers.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Lapsed Donor Re-Engagement</h2>
          <p>
            Lapsed donor communication often gets delayed because it is emotionally and cognitively heavy for staff; AI
            can help draft empathetic messages. Emails that acknowledge time away without guilt and share what has
            changed. Sequences of 2-3 touchpoints: gentle re-engagement, impact story, specific invitation.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Best Practices and Ethical Guardrails</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Always review and edit AI-generated text to match your voice, values, and factual reality.</li>
            <li>
              Avoid pasting sensitive personal information into public tools; prefer secure or embedded AI in your CRM.
            </li>
            <li>
              Be transparent internally about where AI is used, and train staff so content does not feel robotic or
              misleading.
            </li>
            <li>Use AI to augment, not replace, personal calls, handwritten notes, and in-person meetings.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Quick Wins to Try First</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Generating thank-you email templates for first-time, recurring, and major donors.</li>
            <li>Using AI to summarize donor histories before meetings or calls.</li>
            <li>Drafting monthly impact blurbs for your e-newsletter or social channels.</li>
            <li>
              Creating a 3-email welcome series for new donors that explains your mission and invites deeper engagement.
            </li>
          </ul>
        </div>
      </section>

      <footer className="bg-gray-100 py-12 px-6 md:px-12 mt-20">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 GPTPrompts.AI. All rights reserved.</p>
          <div className="mt-6 flex justify-center gap-6">
            <Link href="/website-links" className="hover:text-foreground">
              View All Pages
            </Link>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
