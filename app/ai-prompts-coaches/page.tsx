"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Award, Users, BookOpen, TrendingUp, Lightbulb } from "lucide-react"

const accent = "#F59E0B"

function CopyCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#F59E0B]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] mb-2 inline-block">{tag}</span>}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }} className="shrink-0 p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#F59E0B]/20 transition-colors" aria-label="Copy prompt">
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-400" />}
        </button>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed font-mono whitespace-pre-wrap">{prompt}</p>
    </div>
  )
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-[#1a1a1a] transition-colors">
        <span className="font-medium text-white pr-4">{q}</span>
        {open ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#2a2a2a] pt-4">{a}</div>}
    </div>
  )
}

const faqItems = [
  {
    q: "How can AI help me as a coach without replacing the personal connection?",
    a: "AI handles the operational side of your coaching business: program design, resource creation, client communication templates, and business development. The transformation and human connection still come from you. Think of AI as your back-office assistant that frees you to spend more time on high-impact coaching work rather than administrative tasks."
  },
  {
    q: "Can I use these prompts for executive coaching, life coaching, and business coaching?",
    a: "Yes. Every prompt includes placeholders like [COACHING_TYPE] and [TARGET_AUDIENCE] so you can customize them for any niche. The structures work universally because they focus on coaching fundamentals: client discovery, program design, resource creation, and business growth. Just specify your niche and audience in the prompt."
  },
  {
    q: "How do I price coaching programs that use AI-created resources?",
    a: "Price based on the transformation and outcomes you deliver, not the tools you use. Clients pay for results, not your production process. Using AI to create better resources actually justifies premium pricing because you are delivering more polished, comprehensive programs. Better resources plus expert coaching equals higher value."
  },
  {
    q: "Will clients know I used AI to create my coaching materials?",
    a: "Only if you use AI output without customization. These prompts generate strong starting points that you personalize with your voice, examples, frameworks, and expertise. The final product should be unmistakably yours. Many premium coaches use AI openly as part of their efficiency-focused brand."
  },
  {
    q: "How do I build a group coaching program with AI?",
    a: "Use the program design prompts to structure your group experience: cohort size, session cadence, group vs. individual time, peer accountability systems, and progression milestones. AI helps you design the architecture while you bring the facilitation skills. Group programs are highly profitable and create natural community around your coaching."
  },
  {
    q: "What types of coaching resources can AI help me create?",
    a: "Worksheets, reflection journals, assessment tools, intake questionnaires, progress trackers, action plan templates, email sequences, session prep guides, and transformation blueprints. AI is particularly strong at creating structured frameworks that organize your coaching methodology into reusable, client-facing assets."
  },
  {
    q: "How do I scale my coaching practice without burning out?",
    a: "Use AI to automate the repeatable parts: intake processes, resource creation, email sequences, and program design. Keep the irreplaceable parts for yourself: live coaching sessions, deep listening, and personalized guidance. This lets you serve more clients at a higher level without doubling your hours."
  },
  {
    q: "Can AI help me attract new coaching clients?",
    a: "Yes. Use the business development prompts to create client acquisition funnels, referral strategies, launch plans, and pricing structures. AI can also help you write thought leadership content, social media posts, and email campaigns that demonstrate your expertise and attract your ideal clients."
  },
  {
    q: "How do I measure whether my coaching program is working?",
    a: "Use the assessment and tracking prompts to establish baselines at the start of each engagement, set measurable milestones, and track progress over time. Define success metrics that matter to your clients: confidence levels, revenue growth, relationship quality, career advancement, or whatever transformation you promise."
  },
  {
    q: "Should I create a signature framework for my coaching?",
    a: "Absolutely. A signature framework differentiates you from every other coach in your niche. Use the content creation prompts to develop a named methodology with clear stages, tools, and outcomes. This becomes your intellectual property and the backbone of your programs, marketing, and eventually your book or course."
  },
  {
    q: "How do I handle clients who are not making progress?",
    a: "Use AI to design accountability structures, mid-program check-ins, and progress assessments that catch stalls early. Create conversation frameworks for addressing resistance, adjusting goals, and reigniting motivation. Prevention is better than intervention, so build regular reflection points into your program structure."
  },
  {
    q: "Can I use AI during live coaching sessions?",
    a: "Some coaches use AI for real-time note-taking and session summaries. However, the coaching session itself should be fully human. Use AI before sessions (to prepare questions and review client history) and after sessions (to create summaries, action items, and follow-up resources). Keep the session space sacred."
  },
]

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Prompts for Coaches and Consultants: Scale Your Practice in 2026",
  description: "Expert AI prompts for coaches and consultants. Client onboarding, program design, resource creation, and business development prompts to scale your coaching practice.",
  image: "https://gptprompts.ai/ai-prompts-coaches.jpg",
  author: { "@type": "Organization", name: "GPTPrompts.AI" },
  publisher: { "@type": "Organization", name: "GPTPrompts.AI" },
  datePublished: "2026-03-28",
  dateModified: "2026-03-28",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(item => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

export default function CoachesPromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#F59E0B]/30 text-[#F59E0B]">Coaching & Consulting</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">AI Prompts for Coaches<br />and Consultants: Scale Your Practice</h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Build transformational coaching programs, create premium client resources, and grow your practice with AI. These prompts help you work smarter so you can focus on what matters most: the coaching relationship.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Client Onboarding", "Program Design", "Resource Creation", "Business Growth", "Group Coaching"].map(b => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Client Onboarding & Discovery */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Users size={20} className="text-[#F59E0B]" />
            <h2 className="text-2xl font-bold">Client Onboarding and Discovery Prompts</h2>
          </div>
          <p className="text-gray-400 mb-6">Design intake processes and assessments that surface what is really holding clients back and set the foundation for transformation.</p>
          <div className="grid gap-4">
            <CopyCard tag="Intake" title="Comprehensive Client Intake Process" prompt={`Design a complete client intake process for a [COACHING_TYPE] coaching practice. I work with [TARGET_AUDIENCE] who typically come to me because [COMMON_CHALLENGES].

Create the following:

1. Pre-session intake questionnaire (15 to 20 questions) that uncovers their current situation, goals, past attempts, biggest obstacles, and what success looks like for them. Include both practical questions and deeper reflection questions.

2. Discovery call outline (45 minutes) with opening, exploration, and closing phases. Include the 5 most powerful questions to ask during discovery that reveal their true motivation and readiness.

3. Client assessment report template that summarizes their starting point, identifies their top 3 growth areas, and recommends a coaching pathway.

4. Onboarding email sequence (3 emails) that welcomes them, sets expectations, and prepares them for their first session.

Make everything feel warm and professional, not clinical. The intake process should itself feel like the beginning of transformation.`} />

            <CopyCard tag="Assessment" title="Coaching Readiness Assessment Tool" prompt={`Create a self-assessment tool for potential [COACHING_NICHE] coaching clients. This tool should help both me and the client determine their readiness and starting point.

Include:
- 20 assessment questions across 4 dimensions: Awareness (do they understand their current situation), Motivation (are they ready to invest effort), Capacity (do they have the time and energy), and Support (do they have the environment to succeed)
- Scoring rubric with clear definitions for each level (1 to 5)
- Results interpretation guide with 3 tiers: Ready to Start, Needs Preparation, and Not Yet Ready
- Personalized recommendations for each tier
- A follow-up conversation framework based on their score

The assessment should feel empowering regardless of score. Even "Not Yet Ready" should include actionable next steps.`} />

            <CopyCard tag="Progress" title="Client Progress Tracking System" prompt={`Design a progress tracking system for my [COACHING_TYPE] coaching clients who are working toward [TYPICAL_GOALS].

Create:
- Baseline measurement template: what to assess at the start (quantitative and qualitative metrics)
- Monthly check-in questionnaire (10 questions) that captures progress, challenges, wins, and shifts in perspective
- Visual progress dashboard layout showing key metrics over time
- 90-day transformation summary template that compares where they started to where they are now
- Celebration milestones: define 5 to 7 meaningful progress markers worth acknowledging

The system should make invisible progress visible. Clients often do not realize how far they have come until they see the data side by side.`} />
          </div>
        </div>
      </section>

      {/* Program & Workshop Design */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={20} className="text-[#F59E0B]" />
            <h2 className="text-2xl font-bold">Program and Workshop Design Prompts</h2>
          </div>
          <p className="text-gray-400 mb-6">Structure coaching programs that deliver measurable results and keep clients engaged from start to finish.</p>
          <div className="grid gap-4">
            <CopyCard tag="Program" title="Signature Coaching Program Structure" prompt={`Design a [DURATION: 12-week] signature coaching program for [TARGET_AUDIENCE] who want to [PRIMARY_OUTCOME].

Program structure:
- Program name and positioning statement (why this program exists and who it is for)
- Week-by-week breakdown with: theme, learning objectives, session agenda (60 minutes), homework assignment, and recommended resource
- 3 clear phases: Foundation (weeks 1 to 4), Acceleration (weeks 5 to 8), Integration (weeks 9 to 12)
- Graduation criteria: what does "done" look like
- Success metrics: 3 measurable outcomes clients can expect

Between-session elements:
- Weekly reflection prompts
- Accountability check-in format (text, voice note, or form)
- Resource library contents for each phase

Make it feel like a journey with clear progression, not just 12 disconnected sessions.`} />

            <CopyCard tag="Group" title="Group Coaching Program Blueprint" prompt={`Design a group coaching program for [NUMBER: 8 to 12] participants in [COACHING_NICHE].

Structure:
- Optimal cohort size and why
- Program duration and session cadence (weekly group calls + individual check-ins)
- Group session format: 90-minute call with teaching segment (20 min), hot seat coaching (40 min), peer discussion (20 min), action planning (10 min)
- How to pair accountability partners within the group
- Private community guidelines and engagement prompts
- How to handle different experience levels and paces within the group
- Individual touchpoints: 2 to 3 private sessions during the program

Pricing model:
- Group program price relative to 1-on-1 pricing
- Early bird and payment plan options
- Minimum enrollment threshold

Include a sample marketing description for the program landing page.`} />

            <CopyCard tag="Workshop" title="Half-Day Workshop Framework" prompt={`Design a half-day (3-hour) workshop on [TOPIC] for [AUDIENCE].

Workshop flow:
- Pre-workshop: what to send participants beforehand (pre-work, expectations, logistics)
- Opening (20 min): icebreaker that connects to the topic, agenda overview, ground rules
- Module 1 (40 min): Core teaching with interactive exercise
- Module 2 (40 min): Applied practice with real scenarios from participants
- Break (15 min)
- Module 3 (40 min): Deep dive with peer coaching pairs
- Integration (20 min): Personal action plan creation
- Closing (15 min): Key takeaways, commitments, next steps

For each module provide: learning objective, facilitation notes, specific exercises, timing, and materials needed.

Post-workshop: follow-up email with resources, action plan reminder, and invitation to continued coaching.`} />
          </div>
        </div>
      </section>

      {/* Content & Thought Leadership */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Lightbulb size={20} className="text-[#F59E0B]" />
            <h2 className="text-2xl font-bold">Content and Thought Leadership Prompts</h2>
          </div>
          <p className="text-gray-400 mb-6">Create frameworks, resources, and content that establish you as the go-to expert in your coaching niche.</p>
          <div className="grid gap-4">
            <CopyCard tag="Framework" title="Signature Coaching Framework" prompt={`Help me develop a signature coaching framework for [COACHING_NICHE] that I can name, teach, and build my brand around.

The framework should:
- Have a memorable name (suggest 3 options)
- Include 4 to 6 clear stages or pillars
- Each stage has: a name, description, key activities, common obstacles at this stage, and how to know when you are ready for the next stage
- Be visual (describe how to diagram it: linear path, cycle, pyramid, etc.)
- Work for both 1-on-1 and group coaching contexts

Also create:
- A one-paragraph elevator pitch explaining the framework
- A social media post introducing the framework
- 5 content ideas that teach individual parts of the framework

This framework becomes my intellectual property and the backbone of my entire coaching practice.`} />

            <CopyCard tag="Resources" title="Client Resource Toolkit" prompt={`Create a resource toolkit for my [COACHING_TYPE] coaching clients. Design 8 to 10 practical tools they can use between sessions.

For each resource include:
- Resource name and format (worksheet, template, checklist, journal prompt, etc.)
- When to use it (which phase of coaching, which situations)
- Client-facing description (why this tool matters)
- Complete content outline with all fields, questions, or sections
- How I introduce this resource in a coaching session

Resource categories to cover:
- Self-reflection and awareness tools
- Goal setting and action planning
- Obstacle and mindset management
- Progress tracking and celebration
- Integration and habit building

Make everything feel professional and premium. These resources should justify the investment in coaching and be something clients keep using long after our work together ends.`} />

            <CopyCard tag="Content" title="Thought Leadership Content Calendar" prompt={`Create a 4-week content calendar for my [COACHING_NICHE] coaching business. I want to attract [TARGET_AUDIENCE] who are dealing with [COMMON_CHALLENGES].

For each week, create:
- 2 LinkedIn posts (one teaching post, one story/personal insight post)
- 1 long-form article or newsletter topic with outline
- 3 social media caption ideas for Instagram or other platforms
- 1 email to my subscriber list

Content pillars to rotate:
1. Teaching my methodology (educational)
2. Client transformation stories (social proof, anonymized)
3. Behind-the-scenes of coaching (humanizing)
4. Industry insights and trends (authority)

Tone: warm, confident, and direct. Not salesy. Not preachy. Like a trusted advisor sharing what they have learned. Include specific hooks and opening lines for each piece.`} />
          </div>
        </div>
      </section>

      {/* Business Development */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp size={20} className="text-[#F59E0B]" />
            <h2 className="text-2xl font-bold">Business Development Prompts</h2>
          </div>
          <p className="text-gray-400 mb-6">Attract ideal clients, price with confidence, and build sustainable systems that grow your coaching practice.</p>
          <div className="grid gap-4">
            <CopyCard tag="Acquisition" title="Client Acquisition Funnel" prompt={`Create a complete client acquisition funnel for my [COACHING_NICHE] coaching business. My ideal client is [IDEAL_CLIENT_DESCRIPTION] and my signature program costs [PRICE_RANGE].

Design each funnel stage:

Awareness: Where do my ideal clients spend time online? What content attracts them? Create 3 lead magnet ideas that demonstrate my expertise and attract qualified prospects.

Interest: Design a free workshop or challenge that builds trust and demonstrates my coaching approach. Include: title, description, format, and follow-up sequence.

Decision: Create a discovery call framework that converts interested prospects into clients. Include: pre-call questionnaire, call script outline, objection handling for the top 5 objections, and enrollment process.

Onboarding: Design the experience from "yes" to first session. Welcome email, payment processing, intake form, scheduling, and preparation materials.

Include conversion rate benchmarks for each stage so I know what good looks like.`} />

            <CopyCard tag="Pricing" title="Premium Pricing Strategy" prompt={`Help me develop a pricing strategy for my [COACHING_TYPE] coaching practice. I want to position as premium but accessible.

Create:
- 3-tier pricing structure: an entry point (group or digital), a core offering (signature program), and a premium tier (VIP or ongoing retainer)
- For each tier: name, description, what is included, ideal client profile, price point rationale, and payment options
- Value justification framework: how to communicate ROI to potential clients
- Objection handling scripts for the top 5 pricing objections ("It's too expensive," "I need to think about it," "Can I get a discount," "I can't afford it right now," "What if it doesn't work")
- Annual revenue projections based on realistic enrollment targets for each tier
- When and how to raise prices as demand increases

Price based on the transformation delivered, not the hours spent.`} />

            <CopyCard tag="Referral" title="Referral and Partnership Growth System" prompt={`Design a referral and partnership strategy to grow my [COACHING_NICHE] coaching business without paid advertising.

Referral program:
- How to ask for referrals without being awkward (exact scripts)
- Referral incentive structure (discount, gift, or recognition)
- When in the client journey to make the referral ask
- Automated referral tracking system

Strategic partnerships:
- 5 types of professionals who serve the same audience and could refer clients to me
- Partnership outreach template (email or DM)
- Co-marketing ideas: joint workshops, podcast swaps, bundle offers
- How to nurture partner relationships over time

Community building:
- Alumni community design for past clients
- Monthly touchpoints to stay top of mind
- How past clients become ambassadors and case studies

Include a 90-day implementation timeline for launching this system.`} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <FAQ key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Related Prompt Guides</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Therapist Prompts", href: "/therapist-counselor-prompts" },
              { label: "Health & Wellness Coaches", href: "/ai-prompts-health-wellness-coaches" },
              { label: "Business Productivity", href: "/chatgpt-business-productivity" },
              { label: "Freelance Client Acquisition", href: "/freelance-client-acquisition" },
              { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
              { label: "Claude Prompts", href: "/claude-prompts" },
              { label: "AI Writing Prompts", href: "/ai-writing-prompts" },
              { label: "Content Creators", href: "/ai-prompts-content-creators" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="text-sm px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-gray-300 hover:border-[#F59E0B]/40 hover:text-white transition-all text-center">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
