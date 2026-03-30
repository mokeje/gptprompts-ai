"use client"

import { useState } from "react"
import Link from "next/link"

const ACCENT = "#f97316"

const CopyCard = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="bg-[#12100a] border border-[#2a200e] rounded-lg p-5 hover:border-orange-500/40 transition-colors">
      <pre className="bg-[#0a0806] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-56">{text}</pre>
      <button onClick={handleCopy} className="w-full text-white font-semibold py-2 px-4 rounded transition-colors text-sm" style={{ backgroundColor: ACCENT }}>
        {copied ? "✓ Copied!" : "Copy Prompt"}
      </button>
    </div>
  )
}

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center p-5 bg-[#111] hover:bg-[#1a1a1a] transition-colors text-left">
        <span className="text-gray-200 font-semibold text-sm pr-4">{q}</span>
        <span className="text-orange-400 text-lg flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="bg-[#0d0d0d] border-t border-gray-800 p-5"><p className="text-gray-400 text-sm leading-relaxed">{a}</p></div>}
    </div>
  )
}

const sections = [
  {
    id: "course-idea",
    title: "Course Idea & Validation Prompts",
    description: "Validate demand and sharpen your course concept before building anything.",
    prompts: [
      `You are a course strategist helping me validate a course idea.

My area of expertise: [your topic]
My target audience: [describe who they are, their experience level, and their main goal]

Please:
1. List the 8 most common frustrations and problems this audience has related to my topic
2. For each problem, rate how urgent and painful it is (1-5)
3. Suggest 3 course angles that address the highest-urgency problems
4. For the best angle, write a one-sentence course promise: "After this course, you will [specific outcome] even if [common objection]"
5. Identify the #1 competitor course on this topic and where there's a gap I can own`,
      `Help me define my course's ideal student and validate the demand.

Course idea: [describe your course]

Generate:
1. A detailed ideal student profile (demographics, current situation, goals, fears, and what has already failed for them)
2. 5 things this student would type into Google when looking for a solution
3. The most common objections they'd have to buying a course like this
4. A counter-argument to each objection
5. Three ways to test demand before building the course (e.g., waitlist page, live workshop, pre-sale)`,
      `I want to position my course against free alternatives (YouTube, blogs, communities).

My course topic: [topic]
My unique advantage: [what you bring that free content can't: accountability, structure, community, expert curation, etc.]

Write:
1. A clear value proposition that explains why a paid course beats free content for my audience
2. 5 bullet points for a sales page that address the "why not just Google it?" objection
3. A pricing rationale: what transformation justifies the price I plan to charge?`,
      `Help me choose between these two course ideas and decide which to build first:

Idea A: [describe first course idea]
Idea B: [describe second course idea]
My audience: [describe]
My capacity: [hours per week you can dedicate]

Analyse each idea on:
- Audience demand (urgency and size of the problem)
- My competitive advantage (what I uniquely bring)
- Time to create
- Revenue potential
- Long-term leverage (which builds a better asset or audience)

Recommend which to build first with clear reasoning.`,
    ],
  },
  {
    id: "curriculum",
    title: "Curriculum & Outline Prompts",
    description: "Build a clear, logical learning path that takes students from problem to transformation.",
    prompts: [
      `Create a detailed course curriculum for the following:

Course title: [title]
Target student: [who they are and their starting point]
Course promise (the outcome): [what they'll achieve]
Delivery format: [self-paced video / cohort / membership / live workshop]
Approximate length: [hours of content or number of weeks]

Build:
- 5-8 modules with clear names that show a progression
- 3-5 lessons per module
- One learning outcome per lesson (what the student will be able to do after this lesson)
- One practical exercise or assignment per module
- A 'minimum viable action' for students who can only implement 20% of the course`,
      `I have a rough outline for my course. Help me improve it.

Current outline:
[paste your draft outline]

Please:
1. Identify any logical gaps where a student would get stuck
2. Flag any lessons that could be combined or cut without losing value
3. Suggest a better lesson order if needed
4. Add one 'quick win' in the first module so students feel immediate progress
5. Identify where to add real-world examples, case studies, or student stories`,
      `Design the first module of my course to maximise student completion.

Course: [title and promise]
Student's starting point: [what they know / don't know when they arrive]

Module 1 should:
- Start with a strong 'welcome' lesson that reframes their mindset and builds motivation
- Deliver one quick win within the first 20 minutes
- Set clear expectations for what they'll achieve in this module
- End with a simple assignment they can complete in under 30 minutes

Write out the full module structure with lesson titles, objectives, and the welcome lesson script outline.`,
      `Generate a comprehensive FAQ document for my course.

Course: [title and what it covers]
Target student: [describe]
Price: [price point]
Format: [self-paced / cohort / etc.]

Create:
1. 10 pre-purchase FAQ answers (covering results, time commitment, who it's for, refund policy, prerequisites)
2. 5 during-course FAQs (how to implement, common mistakes, when to move to next module)
3. 5 after-course FAQs (how to continue learning, advanced next steps, community support)`,
    ],
  },
  {
    id: "lesson-scripts",
    title: "Lesson Script & Content Prompts",
    description: "Turn your expertise into engaging lesson scripts and teaching materials.",
    prompts: [
      `Write a complete lesson script for the following:

Course: [course title]
Module: [module name]
Lesson title: [lesson title]
Learning objective: [what students will be able to do after this lesson]
Lesson length: [target: 8 / 12 / 15 minutes]
My teaching style: [conversational / step-by-step / story-led / example-heavy]

Structure:
- Hook (first 30 seconds): a surprising fact, question, or bold claim
- Why it matters: connect this lesson to the student's desired outcome
- Core content: teach the main concept or skill step by step
- Real example: a concrete example from your experience or a case study
- Common mistake: the #1 error students make with this topic
- Summary: recap the key takeaway in 2–3 sentences
- Transition: set up what comes next`,
      `Create a worksheet for the following lesson:

Lesson: [title and what it covers]
Learning objective: [what students should do after this lesson]

Include:
1. A 2-sentence lesson summary (for quick reference)
2. 3 reflection questions to help students connect this to their situation
3. A step-by-step action exercise with clear instructions
4. A 'did you get it?' self-check checklist (5-8 items they can tick off)
5. Space for notes and their biggest takeaway`,
      `Write 12 assessment questions for this module:

Module: [module name and content covered]
Course level: [beginner / intermediate / advanced]

Create:
- 5 multiple choice questions (with 4 options each and the correct answer marked)
- 3 true/false questions with a brief explanation of why the answer is correct
- 2 short answer questions that ask students to apply the concept
- 2 scenario-based questions where students must diagnose a problem or make a decision

Each question should test genuine understanding, not just memory.`,
      `I need to explain a complex concept from my course in simple terms.

Concept: [describe the concept you need to explain]
My audience's background: [what they already know]
Common point of confusion: [where students typically get lost]

Please:
1. Explain this concept using an everyday analogy
2. Break it into a 3-step simplified explanation
3. Write a 'avoid this mistake' warning about how students commonly misunderstand it
4. Give one concrete example showing the concept in action
5. Write a one-sentence definition I could use in a glossary`,
    ],
  },
  {
    id: "marketing-launch",
    title: "Sales Page & Launch Email Prompts",
    description: "Write compelling sales copy and launch sequences that convert without feeling pushy.",
    prompts: [
      `Write a complete sales page outline for my course.

Course: [title]
Price: [price point]
Target student: [describe in detail — who they are, what's not working, what they want]
The transformation: [from X to Y in Z timeframe]

Sales page structure:
1. Headline: a bold promise targeting the outcome
2. "Who this is for" section: 5 bullet points (each starting with "You're in the right place if…")
3. "What you'll learn" section: 6-8 outcome bullets (start with action verbs)
4. My story / credibility: a 3-paragraph origin story showing I've been where they are
5. What's included: module-by-module breakdown
6. "This is NOT for you if…": 3 honest disqualifiers (builds trust)
7. FAQ: 6 most common objections with answers
8. Price and CTA: framing the investment as ROI
9. Guarantee / risk reversal: reduce the fear of buying`,
      `Write a 5-email launch sequence for my course.

Course: [title and promise]
Launch window: [dates or number of days]
Price before/after: [early bird / regular price]
Target student: [describe]

Email 1 (Launch Day): Tell the origin story of why I created this course. Focus on the problem, not the solution. End with a soft CTA.
Email 2 (Day 2): Teach one valuable insight for free. Position the course as the complete system. Include a student result or testimonial.
Email 3 (Day 3): Address the top objection ("I don't have time / I've tried before / it's too expensive"). Tell a transformation story.
Email 4 (Day 4): Urgency without hype. Explain why the price increases or doors close. Include social proof.
Email 5 (Last Day): Two emails — morning (final reminder with bonuses) and evening (cart closes tonight).

Write subject lines and full body copy for each email.`,
      `Create a 7-email evergreen email nurture sequence for my course.

Course: [title]
Email cadence: one per week
Student type: [subscriber who opted in for a lead magnet related to your course topic]

Each email should:
- Teach one practical concept related to my course topic
- Include a short personal story or example
- Build desire for the full course naturally (no hard selling)
- End with a soft mention of the course in emails 4 and 7

Write subject lines and full body copy for all 7 emails. The final email (email 7) should include a direct invitation to join the course.`,
      `Write the promotional content I need to launch my course on social media.

Course: [title and promise]
Platforms: [e.g. Instagram, LinkedIn, YouTube community, newsletter]
Launch window: [days]

Create:
1. 3 Instagram/LinkedIn posts announcing the launch (different angles: story, results, behind-the-scenes)
2. 5 short hooks for Stories/Reels/TikToks promoting the course
3. A YouTube community post teasing the launch
4. A 280-character tweet/X post for announcement day
5. A launch day email subject line (write 5 options, A/B test style)`,
    ],
  },
  {
    id: "student-experience",
    title: "Student Experience & Retention Prompts",
    description: "Onboard students well, keep them engaged, and collect feedback that improves future cohorts.",
    prompts: [
      `Write a 3-email welcome and onboarding sequence for new students.

Course: [title]
Platform: [Teachable / Kajabi / Thinkific / Podia / etc.]
Community: [if applicable — Slack / Circle / private Facebook group]

Email 1 (Immediately after purchase): Welcome, access instructions, what to do in the first 24 hours, and one motivational reframe about why they made the right call.
Email 2 (Day 3): A 'getting started' guide — the #1 mistake new students make, a quick win to complete today, and an intro to the community.
Email 3 (Day 7): Check-in. Ask how they're doing. Point them to the right module based on their starting point. Include a story of a past student at day 7.

Write full email copy for all three.`,
      `Design a re-engagement sequence for students who have gone quiet.

Course: [title]
How long since last login: [2 weeks / 1 month]
Stage they were at: [e.g., completed Module 2 but haven't returned]

Create:
- Email 1: A 'we miss you' email that isn't guilt-tripping — remind them of their original goal
- Email 2: Remove a barrier — offer a live Q&A, a shortcut path through the course, or a 1:1 check-in
- Email 3: Final re-engagement — give permission to adjust their expectations and a 'minimum viable completion' path`,
      `Help me analyse student feedback and identify what to improve.

Feedback received: [paste testimonials, survey responses, or support messages]
Current student completion rate: [%]
Most common drop-off point: [which lesson / module students quit at]

Please:
1. Identify the top 3 recurring themes in the feedback
2. For each theme, suggest a specific content or structural improvement
3. Identify lessons that may be causing confusion or overwhelm
4. Suggest 5 FAQ additions to the course based on common questions
5. Write 2 updated lesson objectives for the module with the highest drop-off`,
      `Create a course completion celebration and upsell sequence.

Course: [completed course title]
Next step offer: [your next course, membership, coaching programme, or community]

Sequence:
1. Completion email: Congratulate them genuinely. Ask for a testimonial. Make them feel the transformation.
2. Case study request: A short survey to capture their before/after story for your sales page.
3. Next step offer: Frame your next product as the natural continuation of what they just achieved. Include a graduation discount.

Write full copy for all three messages.`,
    ],
  },
]

const faqItems = [
  { q: "Can ChatGPT design my entire course for me?", a: "ChatGPT can help with structure, outlines, scripts, and marketing copy — but the expertise, examples, and teaching style must come from you. Think of it as a fast, tireless assistant that needs your direction and domain knowledge. The prompts here are designed to extract your thinking and shape it into polished assets, not replace the thinking itself." },
  { q: "How do I stop my AI-generated content from sounding generic?", a: "Specificity is the fix. Feed ChatGPT rich context: your audience's exact language, your own experiences, specific examples from your work, and your unique framework or methodology. Then edit the output heavily to swap generic phrases with your voice and real-world details. Treat AI-generated copy as a first draft that always needs your expertise layered in." },
  { q: "Is it ethical to use AI to write my course content?", a: "Yes, as long as you review, edit, and stand behind what you publish. You're responsible for accuracy and quality. AI accelerates drafting; your expertise provides the substance. Platforms like Teachable and Kajabi have no policies against AI-assisted creation. What matters to your students is whether the course helps them get results — not which tools you used to build it." },
  { q: "How long does it take to build a course using these prompts?", a: "With solid prompts and your existing expertise, many creators complete a first course in 4-8 weeks. The biggest time savings are in outlining (hours become minutes), scripting (rough talk tracks in under 30 minutes per lesson), and marketing copy (sales page drafts in a single session). You still need to record, edit, and set up the platform." },
  { q: "Which platform should I use to host my course?", a: "For beginners: Teachable (simple setup, good free tier) or Podia (all-in-one with email and community). For more control: Kajabi (premium features but higher cost) or Thinkific. If you have an existing audience and want maximum flexibility, some creators use Notion or Gumroad for simpler products. The best platform is the one you'll actually launch on." },
  { q: "How do I price my course?", a: "Price based on the value of the outcome, not the hours of content. A course that helps someone earn an extra £10k should cost more than a 20-hour course on a hobby. Common price points: £27-£97 for mini-courses, £197-£497 for mid-tier courses, £497-£2,000+ for flagship or transformation courses. Always test higher — most first-time creators underprice significantly." },
  { q: "What's the best way to get my first testimonials?", a: "Beta cohort: recruit 10-20 students at a steep discount in exchange for completing the course and giving detailed feedback. Run it live (even via Zoom) so you can iterate quickly. Collect testimonials during and immediately after — especially specific before/after stories. These become the social proof that justifies charging full price for future cohorts." },
  { q: "Should I launch live or sell evergreen?", a: "Start live. A live cohort (even just 10-15 students on Zoom) lets you validate the content, get real feedback, and earn your first testimonials without building an automated funnel. Once you've run 2-3 cohorts and refined the content, convert to an evergreen or hybrid model. Many successful course creators run 2-4 live cohorts per year even at scale." },
  { q: "How do I increase course completion rates?", a: "Completion rates are notoriously low industry-wide (often 10-30%). The biggest improvements come from: a strong first lesson quick-win, weekly accountability emails, a community where students share progress, breaking content into shorter lessons (under 10 minutes each), and action-oriented exercises rather than passive watching. Cohort-based courses consistently outperform self-paced on completion." },
  { q: "Can I use these prompts for membership sites or coaching programmes too?", a: "Absolutely. The curriculum and lesson prompts work directly for memberships with a content library. The onboarding and re-engagement prompts apply to any paid programme. The sales and launch prompts adapt well to coaching programmes — swap 'module' for 'session' and 'lesson' for 'call'. The frameworks are designed to be niche-agnostic." },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ChatGPT Prompts for Course Creators 2026: 60+ Copy-Paste Templates",
  description: "60+ copy-paste ChatGPT prompts for online course creators. Expert templates for course validation, curriculum design, lesson scripting, launch emails, and student onboarding.",
  author: { "@type": "Organization", name: "GPTPrompts.AI" },
  datePublished: "2025-01-01",
  dateModified: "2026-03-01",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
}

export default function ChatGPTCourseCreatorsClient() {
  return (
    <div className="min-h-screen bg-[#080806] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-orange-900/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">Online Course Creation</p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">ChatGPT Prompts for Course Creators: 60+ Copy-Paste Templates</h1>
          <p className="text-xl text-gray-400 leading-relaxed">Expert ChatGPT prompts for every stage of building an online course: validation, curriculum design, lesson scripting, sales pages, launch emails, and student retention. Each prompt is ready to copy and paste.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-6" style={{ color: ACCENT }}>How to Use These Course Creator Prompts</h2>
        <p className="text-gray-400 leading-relaxed mb-6">These prompts work best when you replace every [bracketed placeholder] with specific details from your course, audience, and expertise. The more context you give ChatGPT, the less generic the output. Each prompt is designed as a standalone — you can use them in any order based on where you are in the course-creation process.</p>
        <div className="bg-[#12100a] border border-orange-900/40 rounded-xl p-6 mb-6">
          <p className="text-orange-300 font-semibold mb-3 text-sm uppercase tracking-wider">Recommended workflow order</p>
          <p className="text-gray-400 text-sm leading-relaxed">Validate idea → Build curriculum outline → Script lessons → Create worksheets/quizzes → Write sales page → Launch email sequence → Onboard students → Collect feedback → Improve</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {sections.map((section) => (
          <div key={section.id} className="mb-16">
            <h2 className="text-3xl font-bold mb-2" style={{ color: ACCENT }}>{section.title}</h2>
            <p className="text-gray-500 mb-8 text-sm">{section.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.prompts.map((prompt, idx) => <CopyCard key={idx} text={prompt} />)}
            </div>
          </div>
        ))}

        <div className="mt-20 mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ color: ACCENT }}>Course Creator FAQ</h2>
          <div className="space-y-3">{faqItems.map((item, idx) => <FaqItem key={idx} q={item.q} a={item.a} />)}</div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8" style={{ color: ACCENT }}>More Content Creator Prompt Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "TikTok Creator Prompts", href: "/tiktok-prompts-creators", color: "#fe2c55" },
              { title: "YouTube Thumbnail & Title Prompts", href: "/youtube-thumbnails-titles", color: "#ff0000" },
              { title: "Email Writing Prompts", href: "/ai-prompts-email-writing", color: "#f97316" },
              { title: "Social Media Marketing Prompts", href: "/social-media-marketing-prompts", color: "#8b5cf6" },
              { title: "ChatGPT Prompts for Writers", href: "/ai-prompts-for-writers", color: "#10a37f" },
              { title: "AI Prompts for LinkedIn", href: "/ai-prompts-linkedin", color: "#0a66c2" },
              { title: "Prompt Engineering Fundamentals", href: "/prompt-engineering-fundamentals", color: "#f97316" },
              { title: "ChatGPT Prompts", href: "/chatgpt-prompts", color: "#10a37f" },
              { title: "All Prompt Guides", href: "/website-links", color: "#f97316" },
            ].map((page, idx) => (
              <Link key={idx} href={page.href} className="p-4 rounded-lg border transition-all duration-200 hover:opacity-80" style={{ borderColor: page.color + "40", backgroundColor: page.color + "08" }}>
                <span className="font-semibold text-sm" style={{ color: page.color }}>{page.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
