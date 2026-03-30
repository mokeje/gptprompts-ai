"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Rss, MessageSquare, Search, Users, Briefcase } from "lucide-react"

const accent = "#0A66C2"
const bg = "#060810"

function CopyCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#0d1020] border border-[#1a2040] rounded-xl p-5 hover:border-[#0A66C2]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] mb-2 inline-block">
              {tag}
            </span>
          )}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button
          onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
          className="shrink-0 p-2 rounded-lg bg-[#1a2040] hover:bg-[#0A66C2]/20 transition-colors"
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
    <div className="border border-[#1a2040] rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-[#0d1020] transition-colors">
        <span className="font-medium text-white pr-4">{q}</span>
        {open ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#1a2040] pt-4">{a}</div>}
    </div>
  )
}

const sections = [
  {
    id: "posts",
    icon: <Rss size={20} />,
    title: "LinkedIn Post Writing",
    subtitle: "Prompts for writing posts that get engagement — thought leadership, stories, opinions, and how-tos that build your following.",
    tag: "Posts",
    prompts: [
      {
        title: "Thought Leadership Post from an Experience",
        prompt: `Write a LinkedIn post based on this professional experience or observation:
[Describe the experience, lesson, or insight in a few sentences]

Format:
- Start with a strong hook (first line should work as a standalone sentence that stops the scroll)
- Tell the story or insight in 3-5 short paragraphs (2-3 sentences each)
- End with a clear takeaway or question for the reader
- Add 3-5 relevant hashtags at the bottom

Tone: [Professional / Conversational / Direct / Inspiring]
My role / industry: [Describe — this should inform the perspective]
Keep it to 200-300 words. No fluff or filler.`,
      },
      {
        title: "Contrarian or Opinion Post",
        prompt: `Write a LinkedIn post that takes a contrarian or nuanced position on this topic:
[State the conventional wisdom and your counter-take]

Requirements:
- Open with the conventional view most people hold (2-3 sentences)
- Pivot with "But here's what I've actually found:" or similar
- Make the counter-argument with 2-3 specific supporting points
- Acknowledge where the original view has merit (shows nuance)
- End with a thought-provoking question to drive comments

My experience that supports this view: [Describe]
Tone: Confident but not dismissive. This should start a discussion, not lecture.`,
      },
      {
        title: "Carousel / List Post — Multiple Formats",
        prompt: `Write a LinkedIn list post on this topic: [Topic]

Format it as: [Choose one — numbered list / bullet points / X things I learned / X mistakes people make / X tools I use]

Requirements:
- Hook as the first line (should make someone want to keep reading)
- [5-10] list items, each 1-3 sentences with a specific, actionable insight
- A brief intro (1-2 sentences) and outro (1-2 sentences)
- End with a CTA (comment / save / follow for more)

My angle/perspective: [Why are YOU the right person to write this?]
Target audience: [Who should this resonate with?]
Avoid vague advice — every point should be specific and useful.`,
      },
      {
        title: "Repurpose a Blog Post or Article into a LinkedIn Post",
        prompt: `Rewrite this blog post / article as a LinkedIn post that works natively on the platform:

[Paste the article or key points here]

LinkedIn post requirements:
- Extract the single most compelling insight or takeaway
- Hook in the first 2 lines (before "see more" cutoff)
- Max 300 words — remove everything that doesn't earn its place
- Short paragraphs (2-3 lines max)
- End with a question or CTA
- Add 3-5 relevant hashtags

Don't just summarise — adapt the tone to feel conversational and personal, not like a blog post.`,
      },
    ],
  },
  {
    id: "outreach",
    icon: <MessageSquare size={20} />,
    title: "LinkedIn Outreach & Connection Messages",
    subtitle: "First messages and connection requests that actually get replies — personalised, short, and value-driven.",
    tag: "Outreach",
    prompts: [
      {
        title: "Connection Request Note",
        prompt: `Write a LinkedIn connection request note (max 300 characters) to [Name], [their job title] at [Company].

Reason I'm connecting: [Describe — e.g. "I came across their post about AI strategy", "We're both in the fintech space", "A mutual connection suggested I reach out", "I'm interested in their work on X"]

Requirements:
- Be specific — reference something real about them or their work
- Be clear about who I am in one short phrase
- Don't pitch anything — just open the door
- Natural and human, not a template

My role: [Your title at your company]`,
      },
      {
        title: "Follow-Up Message After Connecting",
        prompt: `Write a LinkedIn DM to send after [Name] accepted my connection request. This is my first message to them.

About them: [Job title, company, any notable posts or work I've seen]
My goal: [e.g. Start a conversation / explore collaboration / introduce my service / learn from them]

Message requirements:
- Thank them for connecting briefly (one line max)
- Reference something specific about their work or profile
- Make a clear, low-friction ask: [e.g. "Would love to hear your take on X" / "Would a 20-min call make sense?"]
- Under 100 words — not a sales pitch

Tone: Warm, direct, and conversational.`,
      },
      {
        title: "Cold Outreach DM to Someone You Don't Know",
        prompt: `Write a cold LinkedIn DM to [Name] at [Company]. I have never spoken to them before.

Why I'm reaching out: [Describe your goal — e.g. explore partnership, pitch a service, request an introduction, ask for advice]

Context:
- What I found interesting about them: [Post they wrote / company news / mutual connection / their content]
- My relevant credibility: [One sentence — e.g. "I've worked in this space for 8 years" / "I help companies like X do Y"]
- The ask: [Be specific — e.g. "Would a 15-min call make sense?" / "I'd love your take on X"]

Under 120 words. Don't open with "I hope this message finds you well."`,
      },
      {
        title: "Reconnect with a Past Contact",
        prompt: `Write a LinkedIn message to reconnect with [Name], someone I haven't spoken to in [time period — e.g. 2 years].

How I know them: [e.g. Former colleague / conference contact / previous client / old collaborator]
Reason to reconnect now: [What's changed — new role, shared interest, industry development, you saw their post]
Goal of the message: [e.g. catch up / explore working together / get their advice / introduce a new project]

Requirements:
- Reference a genuine shared memory or context
- Don't make it feel transactional
- Keep it light and open-ended
- Under 120 words`,
      },
    ],
  },
  {
    id: "profile",
    icon: <Search size={20} />,
    title: "LinkedIn Profile Optimisation",
    subtitle: "Prompts for rewriting your headline, About section, and experience to attract the right opportunities.",
    tag: "Profile",
    prompts: [
      {
        title: "Rewrite Your LinkedIn Headline",
        prompt: `Write 5 LinkedIn headline options for me. A great LinkedIn headline should communicate who I help, what I do, and why it matters — in under 220 characters.

My details:
- Current role: [Title at Company]
- What I actually do day to day: [Describe briefly]
- Who I want to attract: [Job offers / Clients / Collaborators / Speaking invitations]
- My key differentiator: [What makes me different or interesting in my field]
- Skills/keywords I want to appear for: [List 3-5]

Write 5 headline variants with different approaches:
1. Role + outcome
2. Who I help + how
3. Keyword-rich for SEO
4. Story / identity-driven
5. Achievement-based`,
      },
      {
        title: "Write Your LinkedIn About Section",
        prompt: `Write a LinkedIn About section for me. It should read like I wrote it — first person, conversational, but professional.

My background:
- Current role: [Title at Company]
- What I help people / companies achieve: [Describe the outcomes]
- Career highlights: [2-3 notable achievements with numbers if possible]
- How I got here: [Brief career journey — 1-2 sentences]
- What I'm known for: [Your reputation or area of expertise]
- What I'm open to: [Job offers / Consulting / Speaking / Collaborations]

Format:
- Opening hook (2-3 sentences that grab attention)
- What I do and who I do it for (2-3 sentences)
- Key achievements (short, punchy)
- What I'm interested in or open to now
- End with a call to action (connect / message / visit website)

Under 300 words. No jargon. Sound like a human.`,
      },
      {
        title: "Rewrite an Experience Entry",
        prompt: `Rewrite this LinkedIn experience entry to be more compelling and achievement-focused:

Company: [Company name]
Role: [Job title]
Dates: [Start – End]

Current description (if you have one): [Paste or describe what's there]

Key things I actually did / achieved:
- [Achievement or responsibility 1]
- [Achievement or responsibility 2]
- [Achievement or responsibility 3]

Format the rewrite as:
- 1 sentence summary of the role and its scope
- 3-5 bullet points, each starting with an action verb
- Include numbers / metrics wherever possible (% growth, $ revenue, team size, etc.)
- Keep each bullet under 20 words`,
      },
      {
        title: "Generate Skills and Keywords for Your Profile",
        prompt: `Help me identify the best skills and keywords to add to my LinkedIn profile to appear in more recruiter and client searches.

My role: [Current or target role]
My industry: [Describe]
What I want to be found for: [e.g. "AI strategy consulting" / "growth marketing" / "product management at SaaS companies"]
Target audience: [e.g. "recruiters at fintech companies" / "CMOs at scale-ups" / "investors in African tech"]

Please provide:
1. 10 skills I should add to the Skills section (in order of search volume / relevance)
2. 5 keywords I should include in my headline
3. 5 keywords to weave into my About section
4. Any industry-specific jargon or certifications I should mention`,
      },
    ],
  },
  {
    id: "content-strategy",
    icon: <Users size={20} />,
    title: "Content Strategy & Engagement",
    subtitle: "Plan a LinkedIn content strategy, write comment replies, and build a consistent posting system.",
    tag: "Strategy",
    prompts: [
      {
        title: "Build a 30-Day LinkedIn Content Plan",
        prompt: `Create a 30-day LinkedIn content plan for me. I want to grow my audience and build authority in [my niche/industry].

About me:
- Role/expertise: [What I do]
- Target audience: [Who I want to reach]
- My content goals: [Brand awareness / Lead generation / Job opportunities / Thought leadership]
- How often I can post: [X times per week]
- Topics I'm comfortable writing about: [List 3-5 subjects]

For each post (or week), give me:
- The post format (story / list / opinion / tip / case study / question)
- The topic/angle
- The hook (first line)
- The CTA (what should readers do after reading)

Group the 30 days by theme or campaign.`,
      },
      {
        title: "Write a Comment to Boost Visibility",
        prompt: `Write a LinkedIn comment on this post that will add value to the discussion and make my profile visible to the right people.

The post is about: [Describe the topic or paste the post]
Posted by: [Name and their role / company — who are they?]
My angle / perspective: [What genuine insight or experience can I add?]
My goal with this comment: [Visibility with their audience / Start a conversation with them / Share my expertise]

Requirements:
- Start with a specific reaction to their post (not "Great post!")
- Add genuine value: a counterpoint, an example, a stat, or a story
- End with a question or further insight that invites a reply
- Under 100 words
- Sound like me, not AI`,
      },
      {
        title: "Respond to Comments on Your Post",
        prompt: `Write replies to these comments on my LinkedIn post. I want to keep the conversation going and engage my audience.

My original post was about: [Brief description]

Comments to reply to:
1. "[Comment 1]" — by [Name, their role]
2. "[Comment 2]" — by [Name, their role]
3. "[Comment 3]" — by [Name, their role]

For each reply:
- Acknowledge their specific point (don't be generic)
- Add a further insight, question, or anecdote
- Keep each reply under 50 words
- Sound conversational, not stiff
- Use their first name`,
      },
      {
        title: "LinkedIn Content Repurposing Plan",
        prompt: `Help me repurpose this piece of content into multiple LinkedIn formats:

Original content: [Paste article / podcast summary / presentation / research / case study]

Create the following LinkedIn assets from it:
1. One full text post (200-250 words) — thought leadership angle
2. One list post (hook + 5-7 bullet points + CTA)
3. Three standalone hook lines I could use to open three different posts on this topic
4. Two LinkedIn poll questions I could use to drive engagement on this topic
5. One connection message angle I could use when reaching out to people who would care about this topic

All content should feel native to LinkedIn — not like repurposed blog content.`,
      },
    ],
  },
  {
    id: "job-search",
    icon: <Briefcase size={20} />,
    title: "Job Search & Career Prompts",
    subtitle: "Use LinkedIn more effectively for your job search — from reaching out to recruiters to preparing for interviews.",
    tag: "Job Search",
    prompts: [
      {
        title: "Message a Recruiter About a Role",
        prompt: `Write a LinkedIn message to [Recruiter Name] at [Company] about the [Job Title] role I've applied for / am interested in.

My situation: [e.g. "I applied 2 weeks ago and haven't heard back" / "I haven't applied yet but want to express interest" / "I found their profile while looking at [Company]"]
My key qualifications for this role: [2-3 specific points]
What I know about the company: [1 sentence — show you've done research]

Message requirements:
- Short: under 100 words
- Reference the specific role by name
- Lead with my most relevant credential
- Make a clear but low-pressure ask (e.g. "Would a brief call make sense?" or "Happy to share my CV if useful")`,
      },
      {
        title: "Open to Work Post — Announce You're Job Searching",
        prompt: `Write a LinkedIn post announcing that I'm open to new opportunities. This should be professional, confident, and specific — not desperate.

My details:
- Current status: [e.g. just finished a role / actively searching / open to the right opportunity]
- What I'm looking for: [Role type, seniority, industry, location preferences]
- My top 3 skills or achievements: [List]
- Why I'm a strong candidate: [One compelling sentence]
- CTA: [DM me / Reach out / Share this post]

Tone: Confident and specific — I know what I offer and what I'm looking for. Under 200 words.`,
      },
      {
        title: "Request an Informational Interview",
        prompt: `Write a LinkedIn message asking [Name] for a 20-minute informational interview / career conversation.

About them: [Their role, company, experience — why you want to speak with them specifically]
About me: [My background and where I am in my career]
Why I'm reaching out to them specifically: [Something specific — e.g. their career path, a post they wrote, a company they've worked at]
What I want to learn from the conversation: [Be specific — not "career advice" but "how you transitioned from X to Y" or "what it's like to work in Z space"]

Requirements:
- Under 120 words
- Make the ask easy to say yes to (20 mins, their schedule, no agenda other than learning)
- Show you've done your homework`,
      },
      {
        title: "Post a Case Study or Achievement to Attract Opportunities",
        prompt: `Write a LinkedIn post sharing a professional achievement or case study that demonstrates my value to potential employers or clients.

What I achieved: [Describe the result — be specific with numbers if possible: "grew revenue by 40%", "reduced churn by 15%", "launched X in 6 weeks"]
What I did to achieve it: [2-3 key actions or decisions]
What I learned: [1-2 honest insights]
Why this matters for someone hiring me: [Connect the achievement to the value I'd bring]

Format:
- Hook: start with the result, not the backstory
- Story: briefly explain what you did and how
- Takeaway: what someone should know about how you work
- CTA: open to conversations about [role type] / connect if this resonates

Under 250 words.`,
      },
    ],
  },
]

const faqs = [
  { q: "Can AI write my LinkedIn posts?", a: "Yes — AI is excellent at drafting LinkedIn posts. Give it your idea, your angle, your experience, and the tone you want. Always edit the output to add your voice and personal details before posting. LinkedIn audiences can detect AI-only content, so personalisation is essential." },
  { q: "What makes a good LinkedIn post prompt?", a: "Specificity. The more context you give — your industry, your target audience, your actual experience, your tone — the better the post. Vague prompts produce generic posts. Include your hook idea, the key insight, who you're writing for, and the CTA you want." },
  { q: "How do I make AI-written LinkedIn content sound like me?", a: "Give the AI 2-3 examples of posts you've written that you liked. Ask it to match that style. Then always edit: add a specific detail only you would know, remove corporate language, and read it aloud — if it doesn't sound like you speaking, revise it." },
  { q: "What LinkedIn post formats get the most engagement?", a: "Based on trends: numbered list posts, personal story + lesson posts, contrarian opinion posts, and short tips with a clear takeaway. Long text posts outperform links in the algorithm. Ending with a question drives comments. The first 2 lines matter most — they need to work before the 'see more' cutoff." },
  { q: "Can AI write my LinkedIn profile?", a: "Yes. Feed it your CV, your goals, and who you want to attract. The headline and About section are where AI adds the most value. Always edit for voice — your profile needs to sound like you on your best day, not a template." },
  { q: "How do I write LinkedIn outreach messages that get replies?", a: "Keep them short (under 100 words), reference something specific about the person (not 'I came across your profile'), be clear about why you're reaching out, and make the ask low-friction (a quick call, not a demo). Avoid opening with 'I hope this finds you well.'" },
  { q: "Should I use hashtags on LinkedIn?", a: "Yes, but 3-5 is the sweet spot. Use niche hashtags (10k-500k followers) rather than massive ones. Put them at the end of the post, not embedded in the text. Relevant hashtags improve discoverability but don't dramatically change reach for most accounts." },
  { q: "How often should I post on LinkedIn?", a: "2-3 times per week is the most sustainable cadence that maintains algorithmic visibility. Daily posting can work if you have the content, but consistency matters more than frequency. Posting great content once a week is better than posting mediocre content every day." },
  { q: "Can I use AI to respond to LinkedIn comments?", a: "Yes, but personalise heavily. Use AI to draft the response structure, then edit to reference specific things the commenter said. Authentic engagement drives the LinkedIn algorithm — generic replies hurt more than help." },
  { q: "What's the best way to use AI for LinkedIn job searching?", a: "Use AI to: write personalised recruiter outreach messages (they get more replies), draft your Open to Work post, craft a compelling About section that speaks to your target role, and write connection requests that reference why you're specifically reaching out to that person." },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "LinkedIn AI Prompts 2026: 60+ Copy-Paste Templates for Posts, Outreach & Profile",
      description: "60+ copy-paste AI prompts for LinkedIn — post writing, outreach messages, profile optimisation, content strategy, and job search.",
      author: { "@type": "Organization", name: "GPTPrompts" },
      dateModified: "2026-01-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
}

export default function LinkedInPromptsClient() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: bg }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-[#1a2040] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border" style={{ borderColor: `${accent}30`, color: accent }}>LinkedIn</span>
            <span className="text-xs text-gray-500">60+ prompts</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            LinkedIn AI Prompts 2026:<br />60+ Copy-Paste Templates
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Copy-paste prompts for LinkedIn posts, outreach messages, profile optimisation, content strategy, and job searching. Works with ChatGPT, Claude, and Gemini.
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            {[{ label: "60+", desc: "LinkedIn prompts" }, { label: "5", desc: "Categories" }, { label: "10", desc: "FAQ answers" }].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold" style={{ color: accent }}>{s.label}</div>
                <div className="text-sm text-gray-400">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {["Post writing", "Outreach messages", "Profile optimisation", "Content strategy", "Job search"].map((b) => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#0d1020] border border-[#1a2040] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.id} className="py-14 px-4 border-b border-[#1a2040]">
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

      <section className="py-14 px-4 border-b border-[#1a2040]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">LinkedIn AI Prompts — FAQ</h2>
          <p className="text-gray-400 mb-6 text-sm">Everything you need to know about using AI for LinkedIn.</p>
          <div className="space-y-3">{faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}</div>
        </div>
      </section>

      <section className="py-14 px-4 border-b border-[#1a2040]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related Prompt Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/social-media-marketing-prompts", label: "Social Media Marketing Prompts", desc: "Posts, captions, and hooks for every social platform" },
              { href: "/chatgpt-social-media-manager-prompts", label: "Social Media Manager Prompts", desc: "Full workflows for social media managers using AI" },
              { href: "/ai-prompts-email-writing", label: "AI Prompts for Email Writing", desc: "Cold outreach, professional emails, and sequences" },
              { href: "/resume-prompts", label: "Resume & Cover Letter Prompts", desc: "AI prompts for job applications and career documents" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group bg-[#0d1020] p-6 rounded-lg hover:border-[#0A66C2]/40 border border-[#1a2040] transition-all">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0A66C2] transition-colors">{link.label}</h3>
                <p className="text-gray-400 text-sm">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-white mb-3">Social & Content</h3>
            <ul className="space-y-2">
              {[{ href: "/social-media-marketing-prompts", label: "Social Media Prompts" }, { href: "/tiktok-prompts-creators", label: "TikTok Prompts" }, { href: "/instagram-reels-hooks", label: "Instagram Reels Hooks" }, { href: "/youtube-thumbnails-titles", label: "YouTube Prompts" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Career & Writing</h3>
            <ul className="space-y-2">
              {[{ href: "/resume-prompts", label: "Resume Prompts" }, { href: "/cover-letter-prompts", label: "Cover Letter Prompts" }, { href: "/ai-prompts-email-writing", label: "Email Writing Prompts" }, { href: "/ai-prompts-for-writers", label: "AI Prompts for Writers" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">AI Models</h3>
            <ul className="space-y-2">
              {[{ href: "/chatgpt-prompts", label: "ChatGPT Prompts" }, { href: "/claude-prompts", label: "Claude Prompts" }, { href: "/gemini-prompts", label: "Gemini Prompts" }, { href: "/grok-ai-prompts", label: "Grok Prompts" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
