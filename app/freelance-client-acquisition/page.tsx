import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Client Acquisition Prompts: ChatGPT for Freelance Outreach Emails",
  description:
    "Master freelance client acquisition with ChatGPT. Discover prompts for cold emails, follow-ups, proposals, scope management, and LinkedIn DMs that turn prospects into paying clients.",
  keywords:
    "freelance client acquisition, cold email prompts, ChatGPT outreach, freelancer prompts, client prospecting",
  openGraph: {
    title: "Client Acquisition Prompts: ChatGPT for Freelance Outreach Emails",
    description:
      "40+ ChatGPT prompts for freelance cold emails, proposals, follow-ups, and boundary-setting that land deals without sounding robotic.",
    type: "article",
  },
}

export default function FreelanceClientAcquisitionPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-orange-500 to-amber-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Client Acquisition Prompts</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-3xl leading-relaxed">
            ChatGPT for Freelance Outreach Emails. Turn cold outreach into a repeatable system.
          </p>
          <nav className="flex flex-wrap gap-4 text-sm font-medium">
            <Link
              href="/chatgpt-freelance-client-communication"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded transition"
            >
              Freelance Communication →
            </Link>
            <Link href="/chatgpt-prompts" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded transition">
              All ChatGPT Prompts →
            </Link>
          </nav>
        </div>
      </header>

      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-6">Why ChatGPT for Freelance Client Acquisition?</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Client acquisition is the hardest part of freelancing. Most freelancers hate writing cold emails,
            follow-ups, and proposals from scratch. ChatGPT transforms this into a repeatable system—you send more
            personalized outreach in less time and close more deals without sounding robotic.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-8">
            <h3 className="font-bold mb-3">What ChatGPT Client Acquisition Prompts Do:</h3>
            <ul className="space-y-2 text-sm">
              <li>• Draft specific, relevant cold outreach emails faster</li>
              <li>• Turn messy notes into clear proposals and scopes</li>
              <li>• Write polite follow-ups and boundary-setting messages without emotional overload</li>
              <li>• Keep your voice while letting AI handle structure and phrasing</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Core Framework for Client Acquisition Prompts</h2>
          <p className="mb-6">
            Before using specific templates, use this framework whenever you talk to ChatGPT about outreach:
          </p>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <ul className="space-y-3 text-sm">
              <li>
                <strong>Who you are:</strong> Your freelance role, niche, and typical outcomes
              </li>
              <li>
                <strong>Who the client is:</strong> Industry, size, and what they sell
              </li>
              <li>
                <strong>Why you're reaching out:</strong> Cold pitch, warm intro, reply to job post, follow-up, or
                proposal
              </li>
              <li>
                <strong>What result you want:</strong> Quick call, reply, permission to send ideas, or proposal review
              </li>
              <li>
                <strong>Tone & constraints:</strong> Friendly/professional, short/long, no hype, no hard sell
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Master Prompt: Personalised Freelance Cold Email</h2>

          <div className="bg-gray-100 p-6 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <pre className="whitespace-pre-wrap text-xs">
              {`"You are a senior freelance [your role: e.g., copywriter, designer, developer]
who specializes in helping [type of clients] achieve [main outcome: more leads, 
better conversion, better UX, etc.].

I want to write a concise cold email to [ideal client type + company name if known].

Here is what I know about them:
– Website / offer: [short description or URL summary]
– What they seem to be struggling with: [your observations]
– How I can help: [your specific service and outcome]

Write a cold email that:
– Is under 150–180 words
– Opens with something specific about them, not about me
– Clearly articulates a problem they care about
– Offers 1–2 concrete ideas or outcomes
– Ends with a low-pressure call-to-action (e.g., 'worth a quick 15-minute chat?')
– Uses simple, human language, no buzzwords or hype.
Provide 2 subject line options as well."`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Niche Examples: Outreach Prompts by Freelance Type</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Freelance Writer / Copywriter</h3>
          <p className="text-sm text-muted-foreground mb-4">
            "You are a freelance SaaS copywriter. Client: B2B SaaS startup helping small businesses automate invoices.
            They publish a blog but posts are inconsistent and not optimized. I help similar companies turn their blog
            into a lead engine with SEO + email integration. Using the Master Cold Email Prompt, write a cold email to
            the founder."
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Freelance Designer / Branding</h3>
          <p className="text-sm text-muted-foreground mb-4">
            "You are a freelance brand and web designer. Client: local boutique gym with outdated branding and a
            confusing website. You help gyms increase memberships with clearer visual identity and simple, mobile-first
            websites. Using the Master Cold Email Prompt, write a cold outreach email to the gym owner, focusing on how
            improved design can increase trial sign-ups and class bookings."
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Freelance Developer / No-Code Builder</h3>
          <p className="text-sm text-muted-foreground mb-6">
            "You are a freelance no-code developer. Client: small e-commerce brand still managing inventory and orders
            in spreadsheets. You build simple internal tools and dashboards that save time and reduce errors. Using the
            Master Cold Email Prompt, write a cold email to the founder, showing you understand their pain and offering
            a simple 'quick win' audit call."
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Job Post Reply Prompt (Upwork, Job Boards, Inbound Leads)</h2>

          <div className="bg-gray-100 p-6 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <pre className="whitespace-pre-wrap text-xs">
              {`"You are a freelancer applying to this job:
[paste job description]

My experience:
– Role: [your role]
– 2–3 relevant projects: [short bullets]
– Key outcomes I've achieved: [metrics or transformations]

Write a tailored application message that:
– Mirrors the client's language and priorities from the job post
– Briefly shows I understand their problem
– Highlights 2–3 relevant results, not my full CV
– Suggests 1–2 specific ideas for their project
– Ends with a simple CTA (e.g., 'If this sounds helpful, I'd be happy to...')
Keep it under 200 words."`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Follow-Up Prompts (When Clients Go Quiet)</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">First Follow-Up (Soft Nudge)</h3>
          <div className="bg-gray-100 p-6 rounded-lg font-mono text-sm mb-6 overflow-x-auto">
            <pre className="whitespace-pre-wrap text-xs">
              {`"Write a friendly follow-up email to a prospective client I emailed 7 days ago 
about [service/offer].
– Acknowledge they're busy
– Briefly restate the main benefit I can provide
– Ask if they have any questions or if the timing is off
– Keep it under 80–100 words
– No guilt-tripping, just a light nudge."`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Second Follow-Up (Last Touch for Now)</h3>
          <div className="bg-gray-100 p-6 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <pre className="whitespace-pre-wrap text-xs">
              {`"Write a second follow-up email to the same prospect if there's no reply 
after another week.
– Keep it kind and professional
– Offer to close the file unless they want to revisit later
– Mention they can always reach out in the future
– Under 80–100 words."`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Scope & Proposal Emails</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Scope-Summary Email Prompt</h3>
          <div className="bg-gray-100 p-6 rounded-lg font-mono text-sm mb-6 overflow-x-auto">
            <pre className="whitespace-pre-wrap text-xs">
              {`"Turn these notes into a clear, client-ready scope summary email.
Client: [brief description]
Project: [high-level overview]

My notes:
[paste messy bullets]

The email should:
– Confirm what they said they want
– List deliverables in bullets
– Mention timeline and any assumptions (e.g., number of revisions)
– Invite them to confirm or correct anything before I send a formal proposal.
Tone: professional but friendly."`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Proposal Cover Email Prompt</h3>
          <div className="bg-gray-100 p-6 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <pre className="whitespace-pre-wrap text-xs">
              {`"Write a short proposal cover email for [client name].
– Thank them for their time / interest
– Mention the attached proposal or link
– Highlight 2–3 key outcomes or benefits
– Explain next steps (e.g., sign, pay deposit, schedule kickoff call)
– Under 150 words, clear and direct."`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Handling Scope Creep & Boundaries</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Scope Creep Response Prompt</h3>
          <div className="bg-gray-100 p-6 rounded-lg font-mono text-sm mb-6 overflow-x-auto">
            <pre className="whitespace-pre-wrap text-xs">
              {`"My client is requesting work outside the original scope.
Here is what they asked:
[paste client message]

Original scope and agreement:
[paste your summary]

Write a polite but firm response that:
– Acknowledges their request
– Clarifies what was included in the original scope
– Explains that this new work would require an additional fee
– Offers 2–3 concrete options (add-on price, trade-off, future phase).
Tone: calm, professional, non-defensive."`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Rate-Increase Prompt</h3>
          <div className="bg-gray-100 p-6 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <pre className="whitespace-pre-wrap text-xs">
              {`"Draft an email to a long-term client informing them of a [percentage or amount] 
rate increase starting [date].
– Thank them for the relationship so far
– Briefly mention how your services and value have evolved
– Clearly state the new rate and when it takes effect
– Offer to discuss options if needed
– Keep it respectful and confident."`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Short-Form Prompts for DMs and LinkedIn</h2>

          <div className="bg-gray-100 p-6 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <pre className="whitespace-pre-wrap text-xs">
              {`"Write a short LinkedIn DM to [role, e.g., SaaS founder] who posted about 
[problem, e.g., low trial conversions].
– Start with a reference to their post
– Add one sentence showing you understand the problem
– Share one quick idea or perspective
– Ask if they'd like a short loom/video audit or a 10–15 minute chat.
Keep it under 60–70 words, no hard selling."`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">
            Simple Workflow: Turning Prompts into a Client Acquisition System
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-base mb-8">
            <li>
              <strong>Define your positioning:</strong> 1–2 sentences: who you help, what you do, what outcomes you
              create
            </li>
            <li>
              <strong>Create a "client research" doc:</strong> For each lead, notes about their business, offer, and
              struggles
            </li>
            <li>
              <strong>Use the Master Cold Email Prompt:</strong> Paste in your notes and generate 2–3 email variations
            </li>
            <li>
              <strong>Set up follow-up prompts:</strong> Use the follow-up templates (7 days later, 14 days later) so
              you don't forget
            </li>
            <li>
              <strong>Reuse prompts across channels:</strong> Adjust for LinkedIn DMs, Upwork replies, and proposal
              cover letters
            </li>
            <li>
              <strong>Refine based on responses:</strong> Save the messages that get replies and use them as examples
              inside your prompts
            </li>
          </ol>

          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-12">
            <h3 className="font-bold mb-3">Related Resources:</h3>
            <ul className="space-y-2 text-sm">
              <li>
                •{" "}
                <Link href="/chatgpt-freelance-client-communication" className="text-orange-600 hover:underline">
                  ChatGPT Prompts for Freelance Client Communication
                </Link>
              </li>
              <li>
                •{" "}
                <Link href="/chatgpt-prompts" className="text-orange-600 hover:underline">
                  ChatGPT Prompts: The Definitive Guide
                </Link>
              </li>
              <li>
                •{" "}
                <Link href="/prompt-engineering-business-roi" className="text-orange-600 hover:underline">
                  Prompt Engineering for Business: ROI-Focused Strategies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t mt-16 py-12 px-6 md:px-12 text-center text-sm text-muted-foreground">
        <p>© 2026 GPTPrompts.AI. All rights reserved.</p>
        <p className="mt-2">
          <Link href="/website-links" className="hover:text-foreground">
            View all prompts →
          </Link>
        </p>
      </footer>
    </main>
  )
}
