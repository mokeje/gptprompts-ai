"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Mail, PenLine, Users, RefreshCw, BarChart2 } from "lucide-react"

const accent = "#EA4335"
const bg = "#0a0a0a"

function CopyCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#111] border border-[#222] rounded-xl p-5 hover:border-[#EA4335]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#EA4335]/10 text-[#EA4335] mb-2 inline-block">
              {tag}
            </span>
          )}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button
          onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
          className="shrink-0 p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#EA4335]/20 transition-colors"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-400" />}
        </button>
      </div>
      <pre className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap font-sans">{prompt}</pre>
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#222] rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-[#111] transition-colors">
        <span className="font-medium text-white pr-4">{q}</span>
        {open ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#222] pt-4">{a}</div>}
    </div>
  )
}

const sections = [
  {
    id: "cold-outreach",
    icon: <Mail size={20} />,
    title: "Cold Email & Sales Outreach",
    subtitle: "Prompts for writing cold emails that actually get replies — personalised, direct, and built around value.",
    tag: "Cold Email",
    prompts: [
      {
        title: "Personalised Cold Outreach from LinkedIn",
        prompt: `Write a cold email to [Name] at [Company]. I found them on LinkedIn — they're [job title] and recently [posted about / announced / shared something]. My company [Your Company] helps [ICP description] to [outcome]. Keep the email under 100 words, lead with a reference to something specific about them or their company, and end with a soft yes/no CTA (not a calendar link). Tone: conversational, confident, not salesy.`,
      },
      {
        title: "Problem-First Cold Email",
        prompt: `Write a cold email using this structure:
1. Open with a problem statement that [Prospect's company type] typically faces
2. Briefly introduce how [Your Company] solves it (1-2 sentences max)
3. Add one proof point (customer result, metric, or case study)
4. End with a low-friction CTA: "Worth a quick conversation?"

Prospect: [Name], [Title] at [Company]
Product/Service: [Description]
Key result to mention: [Result]
Keep it under 120 words. No subject line needed.`,
      },
      {
        title: "Follow-Up Email After No Reply",
        prompt: `Write a follow-up email to [Name] who hasn't replied to my first email sent [X days ago]. The original email was about [brief topic]. This follow-up should:
- Acknowledge they're busy without being apologetic
- Add one new piece of value (insight, relevant stat, or case study) not in the first email
- Be even shorter than the first (under 80 words)
- End with a different CTA from the original

Tone: light, no pressure, no guilt-tripping.`,
      },
      {
        title: "Cold Email A/B Test Variants",
        prompt: `Write 3 different cold email subject line + opening line combinations for this outreach:

Target: [Job title] at [Company type]
Offer: [What you're selling/offering]
Key benefit: [Main outcome for them]

Variant A: Curiosity-driven (asks a question)
Variant B: Direct value statement
Variant C: Social proof / name drop

For each: write the subject line, then the first 2 sentences of the email body.`,
      },
    ],
  },
  {
    id: "professional",
    icon: <PenLine size={20} />,
    title: "Professional & Internal Emails",
    subtitle: "Clear, confident emails for workplace communication — from difficult messages to executive updates.",
    tag: "Professional",
    prompts: [
      {
        title: "Declining a Request Professionally",
        prompt: `Help me write a professional email declining [request/invitation/project] from [Name/Team/Client]. I need to:
- Be clear that I'm declining without being vague
- Give a brief, honest reason without over-explaining
- Keep the relationship positive
- Offer an alternative or next step if appropriate

Context: [Describe the situation and why I'm declining]
Relationship: [Colleague / Client / External partner / Manager]
Tone: [Warm but firm / Formal / Casual]`,
      },
      {
        title: "Executive Status Update Email",
        prompt: `Write a concise executive email update on [project/initiative name] for [CEO / board / senior leadership].

Include:
- Status (on track / at risk / delayed) in the first sentence
- 2-3 key highlights since last update
- 1-2 risks or blockers with proposed mitigation
- Clear next steps and timeline

Current status: [Describe]
Key wins: [List]
Risks/blockers: [List]
Next milestones: [List]

Keep it under 200 words. Short paragraphs, no bullet points in the body.`,
      },
      {
        title: "Escalation Email to Management",
        prompt: `Write an escalation email to [Manager/Director] about [issue]. The situation is: [describe the problem]. I've already tried: [steps you've taken]. I need [specific decision / resource / action] to unblock this by [deadline].

Requirements:
- Start with what's blocked and what's at stake
- Be factual, not emotional — present impact not frustration
- Make the ask specific and easy to action
- Keep it under 150 words`,
      },
      {
        title: "Apology Email — Recovering from a Mistake",
        prompt: `Write a professional apology email to [Client / Colleague / Team] for [mistake — e.g. missed deadline, wrong data in report, communication breakdown].

The email should:
- Acknowledge specifically what went wrong (no vague "sorry for any inconvenience")
- Take clear ownership without excessive self-flagellation
- Explain briefly what happened without making excuses
- State exactly what you're doing to fix it
- End with a confidence-building forward-looking statement

Tone: Honest, accountable, forward-looking. Under 180 words.`,
      },
    ],
  },
  {
    id: "marketing",
    icon: <Users size={20} />,
    title: "Marketing & Newsletter Emails",
    subtitle: "Prompts for email campaigns, newsletters, product announcements, and nurture sequences that people actually read.",
    tag: "Marketing",
    prompts: [
      {
        title: "Product Launch Announcement Email",
        prompt: `Write a product launch email announcing [Product/Feature Name] to [existing customers / email list / free users].

Key details:
- What it is: [Brief description]
- Main benefit: [What problem does it solve?]
- Who it's for: [Target user]
- Launch date / availability: [When]
- CTA: [Sign up / Watch demo / Upgrade]

Format:
- 3 subject line options
- Preview text
- Email body (under 200 words)
- CTA button text

Brand voice: [Describe — excited / professional / casual]`,
      },
      {
        title: "Weekly Newsletter — Value-First Format",
        prompt: `Write a weekly email newsletter for [audience] about [topic/industry]. This week's theme: [Theme].

Format:
- Subject line that creates curiosity without clickbait
- Opening hook (2-3 sentences that pull them in)
- Main section: [Insight / Story / Tutorial / Curated links with commentary]
- One actionable takeaway for this week
- Brief sign-off in brand voice

Content to include:
- [Point 1]
- [Point 2]
- [Point 3 or link]

Tone: [Conversational / Authoritative / Friendly expert]. Under 300 words.`,
      },
      {
        title: "Re-engagement Email for Inactive Subscribers",
        prompt: `Write a re-engagement email for subscribers who haven't opened our emails in [90 / 180] days.

Company: [Name] — [Brief description]
Main value we offer: [Describe]

The email should:
- Acknowledge the silence without being passive-aggressive
- Remind them of the value they signed up for
- Give them a reason to re-engage now (new content / feature / offer)
- Include a CTA: [Stay subscribed / New content to check out]
- Option to unsubscribe gracefully

3 subject line variants: direct, playful, and FOMO-based. Body under 120 words.`,
      },
      {
        title: "Abandoned Cart Recovery Email",
        prompt: `Write an abandoned cart / drop-off recovery email for [Product/Service].

Situation: A user [started checkout / signed up but didn't complete setup / began a trial but didn't activate a key feature].

Email requirements:
- Subject line with gentle urgency, not pushy
- Acknowledge where they left off
- Remove a likely objection: [Price / Complexity / Time / Trust]
- Include a relevant proof point (review, stat, or customer name)
- Single CTA back to [checkout / setup / feature]

Under 150 words. Tone: helpful, not desperate.
Include a discount or incentive? [Yes: X% off / No]`,
      },
    ],
  },
  {
    id: "reply-polish",
    icon: <RefreshCw size={20} />,
    title: "Rewriting & Polishing Emails",
    subtitle: "Turn drafts into polished, clear emails — improve tone, trim length, and make every word earn its place.",
    tag: "Polish",
    prompts: [
      {
        title: "Shorten and Sharpen Any Email",
        prompt: `Rewrite this email to be 50% shorter without losing any important information. Cut filler words, passive voice, and redundant explanations. Keep the tone [professional / friendly / formal]. Flag anything you removed that I should consider keeping.

[Paste your email here]

After rewriting: tell me the original word count vs the new word count, and list the 3 biggest cuts you made.`,
      },
      {
        title: "Fix the Tone",
        prompt: `Rewrite this email to sound more [confident / warm / direct / empathetic / formal / casual].

Current issue with tone: [e.g. "sounds too apologetic", "comes across as aggressive", "too formal for this relationship"]

[Paste email here]

After rewriting: summarise in one sentence what you changed about the tone and why.`,
      },
      {
        title: "Make It More Persuasive",
        prompt: `Rewrite this email to be more persuasive. Goal: get [recipient] to [desired action].

Apply these principles:
1. Lead with the benefit to THEM, not what I want
2. Add one specific proof point or social proof element
3. Make the CTA clearer and lower friction
4. Remove any language that creates doubt or hesitation

[Paste email here]

After rewriting: explain the 3 most important changes you made and why each makes it more persuasive.`,
      },
      {
        title: "Subject Line Optimiser — 10 Variants",
        prompt: `Generate 10 subject line options for this email. The email is about [brief description] and is being sent to [audience].

Create one variant of each style:
1. Direct (states what it is)
2. Curiosity gap
3. Personalised (uses "you")
4. Urgency or scarcity
5. Question
6. Number-based
7. Benefit-first
8. Story / intrigue
9. Contrarian or unexpected
10. Social proof

For each: rate it 1-10 for likely open rate and explain in one sentence why it works.`,
      },
    ],
  },
  {
    id: "sequences",
    icon: <BarChart2 size={20} />,
    title: "Email Sequences & Automations",
    subtitle: "Multi-email flows for onboarding, nurturing, sales, and retention — with timing, structure, and logic.",
    tag: "Sequence",
    prompts: [
      {
        title: "Welcome Email Sequence — 3 Emails",
        prompt: `Write a 3-email welcome sequence for new [subscribers / customers / trial users] of [Product/Service].

Email 1 (Day 0 — immediately):
- Warm welcome, confirm what they signed up for
- Set expectations for what's coming
- One quick win they can do right now

Email 2 (Day 2):
- Teach one key concept or feature
- Real example or case study

Email 3 (Day 5):
- Address the #1 reason new users churn / don't convert
- CTA toward a key activation moment

Brand voice: [Describe]
Product: [Name and what it does]
Target user: [Describe]`,
      },
      {
        title: "B2B Lead Nurture Sequence — 5 Emails",
        prompt: `Design a 5-email lead nurture sequence for [Company] targeting [Buyer persona].

The prospect has [downloaded a guide / attended a webinar / filled a form] but hasn't booked a call.

Email 1: Value add — share something useful related to their interest
Email 2: Educational — address a common misconception
Email 3: Social proof — relevant customer story or stat
Email 4: Direct ask — invite them to book a call, reframe the value
Email 5: Breakup email — polite last attempt with easy opt-out

For each: subject line, preview text, body (under 150 words), CTA.`,
      },
      {
        title: "Feature Activation Nudge Email",
        prompt: `Write an email to nudge users who signed up [X] days ago but haven't completed [specific action — e.g. connected their first integration / invited a teammate / published their first post].

Include:
- Subject line with mild urgency
- Acknowledge where they are
- Explain why [action] is the most important first step (benefit-first)
- Remove one likely barrier: [too technical / takes too long / don't know where to start]
- CTA that goes directly to [that feature/page]

Under 180 words. Tone: helpful guide, not a nag.`,
      },
      {
        title: "Churn Prevention — Save the Account",
        prompt: `Write a retention email to a [customer / subscriber] who just [cancelled / downgraded / hasn't logged in for 30 days].

The email should:
- NOT be a generic "we miss you"
- Acknowledge what they did or didn't do specifically
- Ask one direct question: "What's not working?" or "What would make this more useful?"
- Offer a concrete reason to stay: [feature update / extended trial / personal onboarding call / discount]
- Make replying feel easy — should feel like a human wrote it

Tone: Genuine, direct, human. Under 150 words.`,
      },
    ],
  },
]

const faqs = [
  { q: "What's the best way to use AI for writing emails?", a: "Use AI as a drafting assistant, not a replacement. Give it specific context — the recipient, your goal, the key points, and the tone. The more specific your prompt, the less editing you'll need. Always review and personalise before sending." },
  { q: "How do I make AI-written emails sound like me?", a: "Paste 2-3 examples of your own emails and ask the AI to match that style. You can also add tone instructions ('avoid corporate jargon', 'use short sentences', 'casual but professional') and adjust until it sounds right." },
  { q: "What should I always include in an email writing prompt?", a: "At minimum: who you're writing to, what you want them to do, the key points to include, and the tone. Adding context about the relationship (new prospect vs long-term client) and constraints (under 100 words, no jargon) produces much better results." },
  { q: "Can AI write cold emails that don't get ignored?", a: "Yes, but the prompt matters. Great cold email prompts include: the specific person and company, something personalised about them, your value proposition in one clear sentence, and the CTA. Ask for multiple subject line options and test them." },
  { q: "How do I use AI to improve emails I've already written?", a: "Paste your draft and tell the AI specifically what's wrong: 'too long', 'too passive', 'doesn't clearly state the ask', 'sounds too formal'. Give it a target word count and the tone you want. Compare the two versions before sending." },
  { q: "What's the best AI tool for email writing?", a: "ChatGPT, Claude, and Gemini all work well. Claude tends to produce more natural-sounding prose, ChatGPT is great for structured outputs like sequences, and Gemini integrates with Gmail. Most people use whichever they're already subscribed to." },
  { q: "Can AI write entire email sequences?", a: "Yes. Give it full context: who the sequence is for, what you're offering, the goal (welcome / nurture / sales / re-engagement), and how many emails you want. Ask for subject lines, preview text, and body copy for each email." },
  { q: "How do I generate better subject lines with AI?", a: "Ask for 10 subject line variants across different styles: direct, curiosity-driven, personalised, urgency-based, question-format. Always ask the AI to explain why each one works. Then test the top 2-3 against your actual audience." },
  { q: "Is it ethical to use AI to write emails?", a: "Yes, using AI to draft emails is widely accepted professionally. The key is that you review, edit, and take ownership of what you send. AI drafts sent without review can sound robotic and harm your reputation — always add your voice before hitting send." },
  { q: "How do I use AI for email A/B testing?", a: "Ask AI to generate multiple variants with different subject lines, opening lines, or CTAs. Frame each around a specific hypothesis ('Variant A tests curiosity vs Variant B tests direct value'). Then run them against a real audience to see what performs." },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "AI Prompts for Email Writing 2026: 60+ Copy-Paste Templates",
      description: "60+ copy-paste AI prompts for email writing — cold outreach, professional emails, marketing campaigns, sequences, and rewriting tools.",
      author: { "@type": "Organization", name: "GPTPrompts" },
      dateModified: "2026-01-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
}

export default function EmailWritingPromptsClient() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: bg }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border" style={{ borderColor: `${accent}30`, color: accent }}>Email Writing</span>
            <span className="text-xs text-gray-500">60+ prompts</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            AI Prompts for Email Writing 2026:<br />60+ Copy-Paste Templates
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Copy-paste prompts for every type of email — cold outreach, professional messages, marketing campaigns, nurture sequences, and rewriting tools. Works with ChatGPT, Claude, and Gemini.
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            {[{ label: "60+", desc: "Email prompts" }, { label: "5", desc: "Categories" }, { label: "10", desc: "FAQ answers" }].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold" style={{ color: accent }}>{s.label}</div>
                <div className="text-sm text-gray-400">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {["Cold outreach", "Professional emails", "Marketing campaigns", "Email sequences", "Rewriting & polishing"].map((b) => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#111] border border-[#222] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.id} className="py-14 px-4 border-b border-[#1a1a1a]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span style={{ color: accent }}>{section.icon}</span>
              <h2 className="text-2xl font-bold">{section.title}</h2>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{section.subtitle}</p>
            <div className="grid gap-4">
              {section.prompts.map((p) => (
                <CopyCard key={p.title} title={p.title} prompt={p.prompt} tag={section.tag} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Email Writing with AI — FAQ</h2>
          <p className="text-gray-400 mb-6 text-sm">Common questions about using AI for email writing.</p>
          <div className="space-y-3">{faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}</div>
        </div>
      </section>

      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related Prompt Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/chatgpt-email-marketing-prompts", label: "ChatGPT Email Marketing Prompts", desc: "Campaigns, sequences, and newsletters for email marketers" },
              { href: "/ai-prompts-linkedin", label: "LinkedIn AI Prompts", desc: "Posts, messages, and outreach for LinkedIn growth" },
              { href: "/social-media-marketing-prompts", label: "Social Media Marketing Prompts", desc: "Copy for every social platform" },
              { href: "/ai-prompts-for-marketers", label: "AI Prompts for Marketers", desc: "Strategy, content, campaigns, and analytics prompts" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group bg-[#111] p-6 rounded-lg hover:border-[#EA4335]/40 border border-[#222] transition-all">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#EA4335] transition-colors">{link.label}</h3>
                <p className="text-gray-400 text-sm">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-white mb-3">Writing & Communication</h3>
            <ul className="space-y-2">
              {[{ href: "/writing-prompts", label: "Writing Prompts" }, { href: "/cover-letter-prompts", label: "Cover Letter Prompts" }, { href: "/resume-prompts", label: "Resume Prompts" }, { href: "/ai-prompts-for-writers", label: "AI Prompts for Writers" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Marketing</h3>
            <ul className="space-y-2">
              {[{ href: "/chatgpt-email-marketing-prompts", label: "Email Marketing Prompts" }, { href: "/social-media-marketing-prompts", label: "Social Media Prompts" }, { href: "/ai-prompts-linkedin", label: "LinkedIn Prompts" }, { href: "/ai-prompts-for-marketers", label: "AI for Marketers" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">AI Models</h3>
            <ul className="space-y-2">
              {[{ href: "/chatgpt-prompts", label: "ChatGPT Prompts" }, { href: "/claude-prompts", label: "Claude Prompts" }, { href: "/gemini-prompts", label: "Gemini Prompts" }, { href: "/ai-prompts-brainstorming", label: "AI Brainstorming Prompts" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
