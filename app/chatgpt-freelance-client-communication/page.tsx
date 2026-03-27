import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ChatGPT for Freelance Client Communication: Proposals, Scope, Follow-ups",
  description:
    "Master client communication with ChatGPT. Cold outreach, proposals, scope management, and follow-ups—close more deals with less friction.",
}

export default function FreelanceClientCommunicationPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-indigo-600 text-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-sm opacity-80 hover:opacity-100 mb-6 inline-block">
            Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            ChatGPT for Freelance Client Communication
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Your personal assistant for email and proposals. Write clearer messages, set boundaries, and close more
            deals with less friction.
          </p>
        </div>
      </header>

      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-6">Where ChatGPT Helps Most</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Cold outreach & pitches:</strong> Tailored emails and DMs that feel specific, not spammy.
            </li>
            <li>
              <strong>Proposals & contracts:</strong> Structured offers that spell out scope, timelines, and payment
              terms.
            </li>
            <li>
              <strong>Day-to-day communication:</strong> Updates, questions, reminders, and pushing back on scope creep
              without sounding rude.
            </li>
            <li>
              <strong>Follow-ups & testimonials:</strong> Polite nudges and review requests that keep your pipeline
              moving.
            </li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <p>
              <strong>Results:</strong> Freelancers using AI report big time savings on proposals and emails, and higher
              response and win rates when they use structured prompts.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Polished Cold Outreach</h2>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "You are a freelance [your role] writing to [client type] in [industry]. Draft a short, specific cold
              email to [achieve goal], referencing [their company/website/offer]. Include one clear outcome, one
              credibility proof, and a simple call to action to book a 15-minute call."
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Clear, Professional Proposal Email</h2>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "Act as a senior freelancer. Turn these notes into a client-ready proposal email: [paste notes]. Briefly
              restate their goals, outline deliverables, timeline, and price, then add 2-3 bullet points on what's
              included vs out of scope. Keep it confident but friendly."
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Scope Creep / Extra Revisions Response</h2>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "My client is asking for more revisions that are outside the agreed scope. Here's what they wrote:
              [paste]. Write a polite but firm reply that: 1) acknowledges their request, 2) reminds them of the current
              scope, and 3) offers options (paid extra revision, mini add-on, or moving to a new phase). Keep it calm
              and solution-focused."
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Project Update Email</h2>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "Write a friendly progress update for a client project: [describe project + status]. Include: what's done,
              what's in progress, what I'm waiting on from them, and next milestones with dates. Keep it concise and
              reassuring."
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Follow-Up When a Client Goes Quiet</h2>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "You are a professional freelancer following up after sending a proposal 7 days ago. Draft a concise,
              low-pressure follow-up email that: references the proposal, checks if they have questions, and invites
              them to reply or book a call. No guilt-tripping."
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">6. Requesting Testimonials / Case Studies</h2>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "Draft an email asking a happy client for a short testimonial about our recent project: [describe project
              & result]. Make it easy by suggesting 3-4 guiding questions they can answer, and mention where I'll
              feature their feedback (portfolio, website, LinkedIn)."
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Best Practices So You Don't Sound Like a Bot</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Always add specific project details and your tone to the prompt, then lightly edit the output.</li>
            <li>
              Paste the client's exact message and ask for a draft reply, not generic advice, so it matches the
              situation.
            </li>
            <li>Keep canned prompts in a notes doc or template system, then customize per client.</li>
            <li>
              Avoid sending anything without a quick personal tweak—one sentence or detail can make it feel human.
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
