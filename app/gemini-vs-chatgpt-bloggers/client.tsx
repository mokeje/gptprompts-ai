"use client"

import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Search, PenTool, BarChart2, RefreshCw, Layers } from "lucide-react"
import Link from "next/link"

const ACCENT = "#4285F4"

function CopyCard({ title, prompt, tag }: { title: string; prompt: string; tag: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#4285F4] transition-colors">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-white font-semibold text-lg flex-1">{title}</h3>
        <span className="text-xs bg-[#4285F4]/10 text-[#4285F4] px-2 py-1 rounded whitespace-nowrap">{tag}</span>
      </div>
      <pre className="text-gray-400 text-sm mb-4 leading-relaxed whitespace-pre-wrap font-sans">{prompt}</pre>
      <button
        onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
        className="flex items-center gap-2 text-[#4285F4] hover:text-[#4285F4]/80 text-sm transition-colors"
      >
        {copied ? <><Check size={16} /><span>Copied!</span></> : <><Copy size={16} /><span>Copy prompt</span></>}
      </button>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#333] py-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left hover:text-[#4285F4] transition-colors">
        <span className="text-white font-medium pr-4">{question}</span>
        {open ? <ChevronUp size={20} className="text-[#4285F4] shrink-0" /> : <ChevronDown size={20} className="shrink-0" />}
      </button>
      {open && <p className="text-gray-400 mt-3 text-sm leading-relaxed">{answer}</p>}
    </div>
  )
}

const sections = [
  {
    icon: Search,
    title: "SEO Research & Keyword Discovery (Gemini)",
    prompts: [
      {
        title: "SERP Intent Scanner",
        tag: "Gemini / Research",
        prompt: `Search the web for this keyword: "[target keyword]"

Summarise the top 5 ranking pages with:
1. Their main angle and content type (listicle, guide, comparison, etc.)
2. Approximate depth and word count estimate
3. The dominant search intent (informational / transactional / navigational)
4. What they do well that I should match or beat
5. What gap or angle none of them are covering

Based on this, recommend the best content angle for me to rank.`,
      },
      {
        title: "Long-Tail Keyword Cluster Builder",
        tag: "Gemini / SEO",
        prompt: `Using live Google search data, find 40 long-tail keyword phrases and semantic entities related to: "[main topic]"

Group them into 5-6 subtopic clusters.

For each cluster:
1. Name the cluster and its search intent
2. List 6-8 long-tail phrases (include question-format phrases)
3. Suggest 1 pillar post title and 2 supporting post titles
4. Identify 3-5 key entities (people, tools, brands) that should appear in any post on this topic

Return as a structured table.`,
      },
      {
        title: "Content Gap Finder",
        tag: "Gemini / Competitor",
        prompt: `Analyse the top 5-10 ranking pages for this keyword: "[keyword]"

For each page, identify:
- What topics and questions they answer well
- What they leave unanswered or treat too briefly
- Common reader complaints or unresolved questions from comments

Then create a gap-filling outline that:
1. Covers everything the top pages cover (table stakes)
2. Goes deeper on the 3 most underserved subtopics
3. Answers 5 questions none of the current top pages answer clearly`,
      },
      {
        title: "AI Overview Optimisation",
        tag: "Gemini / AI SEO",
        prompt: `Search for this topic and analyse what appears in Google's AI Overview: "[topic or question]"

Tell me:
1. What sources are cited in the AI Overview (if visible)
2. What format the answer takes (definition, step list, comparison)
3. What specific phrases or structures helped those pages get cited

Then generate 10 natural-language questions a user might search about this topic, each followed by a clear 40-60 word answer designed to appear in an AI Overview block or featured snippet.`,
      },
    ],
  },
  {
    icon: PenTool,
    title: "Content Planning & Ideation (ChatGPT)",
    prompts: [
      {
        title: "Blog Topic Ideation Engine",
        tag: "ChatGPT / Ideation",
        prompt: `You are a blog strategist for a [niche] blog targeting [target audience].

Generate 30 blog post ideas that solve real, specific problems my audience faces.

For each idea include:
- Working title (SEO-friendly, under 65 characters)
- Target reader and their primary pain point
- Primary search intent (informational / comparison / how-to)
- Whether it is a long-tail opportunity or competitive keyword

Group ideas by: Quick Wins (low competition) / Authority Builders / Traffic Drivers.`,
      },
      {
        title: "SEO Content Outline Generator",
        tag: "ChatGPT / Outline",
        prompt: `Create a detailed SEO content outline for a 2,000-word blog post on: "[topic]"

The outline must include:
- H1 that matches search intent and is under 65 characters
- Introduction structure (hook + problem + what they'll learn)
- H2 sections that reflect real search queries people type
- H3 subsections for each H2 (3-4 per section)
- A dedicated FAQ section with 8 questions
- A conclusion with a clear next step or call to action

Flag 3 places to add a table, list, or visual for richer SERP snippets.`,
      },
      {
        title: "Brand Voice & Style Guide",
        tag: "ChatGPT / Branding",
        prompt: `Analyse this writing sample from my blog: "[paste 200-300 words of your best post]"

Create a brief brand voice guide I can paste into future ChatGPT prompts so all my content stays consistent. Include:
1. Tone descriptors (e.g. direct, warm, conversational, data-led)
2. Sentence length and structure preferences
3. Words and phrases I use often (and ones to avoid)
4. How I handle jargon and technical terms
5. One example of how an AI should NOT write for my blog, and one that it should

Return as a reusable voice prompt I can include in future writing requests.`,
      },
      {
        title: "Content Calendar Planner",
        tag: "ChatGPT / Planning",
        prompt: `Build a 4-week blog content calendar for my [niche] blog.

My goals: [increase organic traffic / build email list / promote [product/service]]
My upload frequency: [X posts per week]
Key dates or events in my niche in the next 4 weeks: [list any]

For each week, plan:
1. 1 pillar post (2,000+ words, high-traffic keyword)
2. 1-2 supporting posts (1,000 words, long-tail keywords)
3. 1 repurposing opportunity (turn a post into email, social, or video)
4. The internal linking opportunity between posts

Return as a week-by-week table with titles, keywords, and goals.`,
      },
    ],
  },
  {
    icon: Layers,
    title: "Article Writing & Drafting (ChatGPT)",
    prompts: [
      {
        title: "First Draft Writer",
        tag: "ChatGPT / Writing",
        prompt: `Write the first draft of a 2,000-word blog post using this outline: [paste your outline]

Writing rules:
- Speak directly to the reader using "you"
- Use short paragraphs (2-3 sentences max) and bullet lists where helpful
- Answer the main question clearly within the first 300 words
- Do not use jargon without explaining it
- Do not invent statistics — write [STAT NEEDED] as a placeholder
- Include transition sentences between sections
- End each H2 section with one key takeaway sentence

My target audience: [describe them]
Brand voice: [direct / conversational / expert / friendly]`,
      },
      {
        title: "Introduction Hook Writer",
        tag: "ChatGPT / Copywriting",
        prompt: `Write 10 alternative introductions (first 80-100 words each) for a blog post with this title: "[title]"

Each introduction should use a different hook type:
1. Bold claim that challenges conventional wisdom
2. Surprising statistic (write [STAT] as placeholder)
3. Relatable pain point scenario
4. Common mistake the reader might be making
5. A short story or case study opening
6. A clear promise of transformation
7. A question that creates curiosity
8. A "what if" scenario
9. Contrast: before vs after
10. Counter-intuitive statement

Mark your top 3 and explain why.`,
      },
      {
        title: "Human-Sounding Rewrite",
        tag: "ChatGPT / Editing",
        prompt: `Rewrite this AI-generated section to sound more human, authoritative, and engaging: "[paste section]"

Make it:
- More conversational — replace formal phrases with natural language
- More specific — replace vague generalisations with concrete examples or numbers
- Shorter — cut 20% of the word count without losing substance
- More direct — start paragraphs with the main point, not a preamble
- More interesting — vary sentence length and add one unexpected detail or analogy

Keep the core information intact. Return the revised version only.`,
      },
      {
        title: "Post-to-Email-Newsletter Adapter",
        tag: "ChatGPT / Repurposing",
        prompt: `Adapt this blog post into a weekly email newsletter for my [niche] audience: [paste post or key points]

The email should:
- Have a subject line that gets opens (suggest 5 options)
- Open with a personal 2-3 sentence hook (not a formal intro)
- Summarise the 3 most valuable insights from the post in plain language
- Include a clear link to the full post at least twice
- Close with one question or prompt to encourage replies
- Be 300-400 words total

My email tone: [conversational / direct / expert]
List size: [small and personal / large and broadcast]`,
      },
    ],
  },
  {
    icon: BarChart2,
    title: "SERP Analysis & Fact-Checking (Gemini)",
    prompts: [
      {
        title: "Fact-Check & Source Suggester",
        tag: "Gemini / Accuracy",
        prompt: `Review this draft blog post section for factual accuracy: "[paste section]"

For each factual claim:
1. Confirm whether it is accurate based on current information
2. Flag any claims that may be outdated (written as if pre-2024)
3. Suggest 2-3 authoritative sources I could cite
4. Summarise any major updates since 2023 that should be reflected

Return a fact-check table: Claim | Status (Accurate / Outdated / Unverifiable) | Suggested Source`,
      },
      {
        title: "Competitor Freshness Check",
        tag: "Gemini / Research",
        prompt: `Search the web for the latest news, research, or updates related to: "[blog topic]"

I am writing a post on this topic and want to ensure I include the freshest information.

Tell me:
1. The 3-5 most recent and relevant developments (last 6-12 months)
2. Any major studies, tools, or events that should be mentioned
3. Whether any of the current top-ranking posts are now outdated on this topic
4. One statistic or data point published in 2025-2026 I should include and cite

Provide source names and publication dates for everything.`,
      },
      {
        title: "Featured Snippet Targeting",
        tag: "Gemini / SEO",
        prompt: `Search for this query: "[your target question or keyword]"

Analyse what currently appears in the featured snippet position:
1. Is there currently a featured snippet? What format is it (paragraph, list, table)?
2. What is the approximate word count of the snippet?
3. Which domain is winning it?
4. What specific phrasing triggered it?

Then write 3 alternative snippet-ready answers (40-60 words each) I can use in my post to compete for this snippet. Use the same format (paragraph or list) as the current winner.`,
      },
      {
        title: "E-E-A-T Signal Booster",
        tag: "Gemini / Authority",
        prompt: `I want to improve the E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness) in my blog post on: "[topic]"

My background: [describe your relevant experience or expertise]

Search for and suggest:
1. 5 authoritative external sources I should link to (academic, government, or industry leaders)
2. 3 statistics or studies published in 2024-2026 that I can cite
3. Examples of how top-ranking posts demonstrate first-hand experience in this niche
4. 3 specific sections I should add to my post to signal genuine expertise (e.g., personal experience, real examples, named tools)`,
      },
    ],
  },
  {
    icon: RefreshCw,
    title: "Content Repurposing & Distribution",
    prompts: [
      {
        title: "Blog-to-Social Content System",
        tag: "Repurposing",
        prompt: `Turn this blog post into 5 pieces of social media content: [paste post title and main points]

Create:
1. LinkedIn post (300 words, professional insights + CTA to full post)
2. Twitter/X thread (8-10 tweets, each a standalone insight)
3. Instagram carousel outline (7 slides: hook, 5 tips, CTA)
4. Facebook post (conversational, community-focused, 150 words)
5. Pinterest pin title and description (keyword-optimised)

For each platform, adapt the tone to suit the audience. Include relevant hashtag suggestions.`,
      },
      {
        title: "Post Update & Refresh Prompt",
        tag: "ChatGPT / Maintenance",
        prompt: `I want to refresh an underperforming blog post to improve its ranking and traffic.

Post title: "[title]"
Current position: [position] for "[keyword]"
Published: [date]
Word count: [current count]

Using this post content: [paste post or key sections]

Suggest:
1. New sections to add based on what competitors now cover that I don't
2. Outdated information that should be updated or removed
3. 3 new H2 or H3 headings that target related long-tail keywords
4. A revised title and meta description optimised for 2026
5. 2 internal linking opportunities from other posts on my site`,
      },
      {
        title: "Email Nurture Sequence from Blog",
        tag: "ChatGPT / Email",
        prompt: `Create a 5-email nurture sequence for new subscribers based on my best blog content.

Blog niche: [niche]
Target audience: [describe them]
My 3 best-performing posts: [titles and URLs]
What I want readers to do eventually: [book a call / buy a product / join a community]

Design the sequence:
Email 1: Welcome + instant value (Day 0)
Email 2: Deeper insight from post 1 (Day 2)
Email 3: Story + lesson from post 2 (Day 4)
Email 4: Practical how-to from post 3 (Day 7)
Email 5: Soft CTA to next step (Day 10)

For each email: subject line (3 options), hook, body summary, and CTA.`,
      },
      {
        title: "Pillar + Cluster Internal Link Map",
        tag: "SEO / Architecture",
        prompt: `Help me build a pillar-and-cluster content architecture for my blog on: "[main topic]"

I currently have these posts: [list post titles and URLs]

Design a content map that:
1. Identifies 2-3 pillar posts (broad, high-traffic, comprehensive guides)
2. Groups my existing posts as cluster content under each pillar
3. Specifies exactly which internal links to add and where (post title → target post, anchor text suggestion)
4. Identifies 5 cluster posts I should create to fill gaps
5. Explains how this structure improves both SEO and reader experience

Return as a visual hierarchy (pillar → clusters) and a link-addition checklist.`,
      },
    ],
  },
]

const faqs = [
  { q: "Which is better for blogging — ChatGPT or Gemini?", a: "Neither is universally better. They excel at different tasks. Gemini's live web access makes it stronger for SERP research, competitor analysis, fact-checking, and finding trending data. ChatGPT is better for structured drafting, iterative editing, repurposing, and multi-step content workflows." },
  { q: "Can I use the same prompts in both ChatGPT and Gemini?", a: "Yes, but you'll get better results by leaning into each tool's strengths. Prompts that require live web search and current data work best in Gemini. Prompts for outlining, drafting, rewriting, and repurposing work best in ChatGPT due to its stronger instruction-following for creative tasks." },
  { q: "Will using AI to write blog posts hurt my Google rankings?", a: "Not if done thoughtfully. Google's helpful content guidance rewards content that demonstrates genuine expertise and serves readers well — regardless of how it was produced. Use AI to improve efficiency, then add your own experience, original insights, and accurate citations to meet E-E-A-T standards." },
  { q: "How do I stop AI blog content from sounding generic?", a: "Always specify your niche, audience, tone, and goal in the prompt. Include examples of your writing style. Ask AI to add specific examples, data, and concrete scenarios rather than vague generalisations. Then edit the output to add your personal experience and voice." },
  { q: "Does Gemini have better SEO capabilities than ChatGPT?", a: "Gemini has the advantage of live Google search integration, which makes it useful for SERP analysis, keyword research, and fact-checking with current data. ChatGPT with web search enabled is also capable, but Gemini's tighter Google integration gives it an edge for live SERP tasks specifically." },
  { q: "How many AI tools do I actually need for blogging?", a: "For most bloggers, two tools cover the essentials: Gemini for research and SERP analysis, and ChatGPT for writing, editing, and repurposing. Adding Perplexity AI for deep research with citations is a strong third option. You don't need more than three." },
  { q: "How do I keep AI writing consistent with my blog's tone of voice?", a: "Create a brand voice prompt that describes your style (tone, sentence length, words to use and avoid, example passages) and include it at the start of every writing prompt. ChatGPT's Custom Instructions feature or Claude Projects are useful for storing this so it applies automatically." },
  { q: "Will AI content help me rank in Google AI Overviews?", a: "Structure helps. Content with clear question-and-answer formatting, short definitive paragraphs, and authoritative source citations is more likely to be pulled into AI Overviews. Gemini can help you analyse what the current AI Overview for your topic says and which format triggered it." },
  { q: "How much should I edit AI-generated blog drafts?", a: "Plan to edit AI drafts significantly — typically 30-50% of the content should be rewritten or personalised. Add your own examples and first-hand experience, verify all facts, remove generic filler phrases, and make sure the post genuinely adds value beyond what's already ranking." },
  { q: "What is the best workflow for combining Gemini and ChatGPT for a blog post?", a: "A proven workflow: use Gemini to analyse SERPs and identify gaps, then use ChatGPT to build an outline that fills those gaps. Draft the article in ChatGPT, return to Gemini for fact-checking and source finding, then use ChatGPT for final editing, meta description, and repurposing." },
]

export default function GeminiVsChatGPTBloggersClient() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Gemini vs ChatGPT Prompts for Bloggers 2026: 60+ Copy-Paste Templates",
    description: "60+ copy-paste prompts for bloggers using Gemini and ChatGPT. Includes SERP research, content planning, article writing, fact-checking, and repurposing templates.",
    author: { "@type": "Organization", name: "GPTPrompts.AI" },
    datePublished: new Date().toISOString(),
  }
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <main className="min-h-screen bg-[#060a0f] text-white py-16 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-[#4285F4]/10 text-[#4285F4] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Blogger Prompts 2026
        </div>
        <h1 className="text-5xl font-bold mb-6 text-[#4285F4]">Gemini vs ChatGPT Prompts for Bloggers</h1>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
          60+ copy-paste prompts for bloggers who want to use both AI tools strategically. Learn when to use Gemini for live research and SERP analysis and when to use ChatGPT for drafting, editing, and repurposing.
        </p>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[["60+", "Copy-Paste Prompts"], ["5", "Strategy Sections"], ["10", "FAQ Answers"]].map(([num, label]) => (
            <div key={label} className="bg-[#1a1a1a] border border-[#4285F4]/30 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-[#4285F4]">{num}</p>
              <p className="text-sm text-gray-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
        {/* Quick comparison */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#1a1a1a] border border-[#4285F4]/30 rounded-lg p-5">
            <h3 className="text-[#4285F4] font-bold mb-3">Use Gemini for:</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Live SERP and competitor analysis</li>
              <li>• Fact-checking with current sources</li>
              <li>• Long-tail keyword discovery</li>
              <li>• Featured snippet and AI Overview research</li>
              <li>• Finding fresh data and statistics</li>
            </ul>
          </div>
          <div className="bg-[#1a1a1a] border border-[#10a37f]/30 rounded-lg p-5">
            <h3 className="text-[#10a37f] font-bold mb-3">Use ChatGPT for:</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Outlines and structured first drafts</li>
              <li>• Editing, rewriting, and tone refinement</li>
              <li>• Content repurposing (email, social, video)</li>
              <li>• Ideation and content calendars</li>
              <li>• Multi-step workflows and iteration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((sec, i) => {
        const Icon = sec.icon
        return (
          <section key={i} className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Icon size={32} style={{ color: ACCENT }} />
              <h2 className="text-3xl font-bold text-white">{sec.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {sec.prompts.map((p, j) => (
                <CopyCard key={j} title={p.title} prompt={p.prompt} tag={p.tag} />
              ))}
            </div>
          </section>
        )
      })}

      {/* FAQ */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-8">
          {faqs.map((f, i) => (
            <FaqItem key={i} question={f.q} answer={f.a} />
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">More Prompts for Content Creators</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: "/chatgpt-prompts", label: "ChatGPT Prompts", color: "#10a37f", desc: "Comprehensive library for all writing tasks" },
            { href: "/gemini-prompts", label: "Gemini Prompts", color: "#4285F4", desc: "Expert prompts for Google's Gemini AI" },
            { href: "/perplexity-deep-research-prompts", label: "Perplexity Deep Research", color: "#20b2aa", desc: "Research prompts with live citations" },
            { href: "/llm-seo-prompt-library", label: "LLM SEO Prompts", color: "#f59e0b", desc: "SEO-focused prompt library for AI tools" },
          ].map((r) => (
            <Link key={r.href} href={r.href} className="group bg-[#1a1a1a] border border-[#333] rounded-lg p-5 hover:border-[#4285F4] transition-colors">
              <h3 className="text-white font-semibold mb-2 group-hover:text-[#4285F4] transition-colors">{r.label}</h3>
              <p className="text-gray-400 text-sm">{r.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
