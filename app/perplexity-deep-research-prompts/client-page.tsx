"use client"

import { useState } from "react"
import Link from "next/link"

const ACCENT = "#20b2aa"

const CopyCard = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[#0a1a1a] border border-[#153535] rounded-lg p-5 hover:border-teal-500/40 transition-colors">
      <pre className="bg-[#060f0f] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-56">
        {text}
      </pre>
      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded transition-colors text-sm"
        style={{ backgroundColor: ACCENT }}
      >
        {copied ? "✓ Copied!" : "Copy Prompt"}
      </button>
    </div>
  )
}

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 bg-[#111] hover:bg-[#1a1a1a] transition-colors text-left"
      >
        <span className="text-gray-200 font-semibold text-sm pr-4">{q}</span>
        <span className="text-teal-400 text-lg flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="bg-[#0d0d0d] border-t border-gray-800 p-5">
          <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

const sections = [
  {
    id: "market-intelligence",
    title: "Market Research & Industry Intelligence",
    description: "Prompts for competitive landscape mapping, market sizing, and trend analysis.",
    prompts: [
      `Give me a comprehensive overview of the [industry] market in [year].

Include:
1. Current market size (global and key regional markets) with sources
2. Growth rate (CAGR) over the past 3-5 years and projected growth
3. The 5-6 major players and their approximate market share
4. The 3 most important trends reshaping this industry right now
5. The biggest threats or disruptions on the horizon
6. Key regulatory developments affecting this market

Cite your sources for key data points.`,
      `Research the competitive landscape for [company name] in [market/category].

I need to understand:
- Who are their top 5 competitors and how do they differentiate?
- What do customers typically say about each option? (reviews, forums, social)
- Where is [company name] strong vs. where do competitors have an edge?
- Are there any emerging challengers I should be aware of?
- What are the recent strategic moves (funding, acquisitions, product launches) in this space?

Format as a structured comparison with sources.`,
      `Find the latest data on [specific metric or trend] in [industry].

I need:
- The most recent statistics available with publication dates
- How this metric has changed over the past 2-3 years
- Differences by geography, segment, or demographic if available
- Expert forecasts or projections where available
- Credibility assessment: are these figures from primary research or secondary aggregation?`,
      `Research the funding and investment landscape for [sector] startups in the past 12 months.

Cover:
- Total VC/PE funding volume and deal count vs. prior year
- The 10 largest funding rounds and what stage/type
- Which investors are most active in this space
- Key themes investors are backing (what problems are getting funded)
- Any notable exits, IPOs, or acquisitions
- Sentiment: is investment increasing, declining, or stable?`,
    ],
  },
  {
    id: "fact-checking",
    title: "Fact-Checking & Source Verification",
    description: "Use Perplexity's web access to verify claims and find authoritative sources.",
    prompts: [
      `I need to fact-check this claim: "[paste claim]"

Please:
1. Determine if this claim is accurate, partially accurate, misleading, or false
2. Cite the primary sources that support or contradict it
3. Note any important context or nuance that the original claim omits
4. If the claim has changed over time (e.g., a statistic that has been updated), note the current figure
5. Rate confidence: how certain are you about this verdict and why?`,
      `Find the most credible, up-to-date statistics on [topic].

I want:
- The most widely cited figures from primary or government sources
- Publication dates for each statistic
- Any significant variation in figures between sources and why they might differ
- Whether any of these figures are contested or disputed by researchers
- The most reputable organisations tracking this data that I should bookmark`,
      `Verify these three claims about [topic] and give me a confidence score for each:

Claim 1: [paste]
Claim 2: [paste]
Claim 3: [paste]

For each claim: True / Partially True / Misleading / False / Unverifiable — with evidence and sources.`,
      `What is the current consensus among experts and researchers on [controversial or evolving topic]?

Find:
- The mainstream view backed by the strongest evidence
- Significant minority views held by credible researchers
- Recent papers, studies, or reports that have shifted thinking in this area
- Key open questions still being debated
- Red flags: claims that sound credible but are widely disputed in the field`,
    ],
  },
  {
    id: "business-research",
    title: "Business & Company Research",
    description: "Deep dives on companies, executives, products, and business models.",
    prompts: [
      `Research [company name] thoroughly for me.

I need:
1. Business model: how exactly do they make money?
2. Recent financial performance (revenue, growth rate, profitability if public)
3. Key leadership team and their backgrounds
4. Recent news: major announcements, product launches, controversies in the past 6 months
5. Customer sentiment: what do customers and employees say about them?
6. Strategic direction: what problems are they solving and where are they investing?

Cite sources with dates.`,
      `Find everything publicly available about [executive name] at [company].

Include:
- Professional background and career history
- Recent public statements, interviews, or conference appearances
- Any published writing, essays, or thought leadership
- What their leadership approach or management philosophy is known to be
- Their track record: key decisions or results associated with their tenure

Only use publicly available information.`,
      `Compare [Company A] and [Company B] across these dimensions:

1. Business model and revenue streams
2. Target customer and market positioning
3. Product strengths and weaknesses (based on customer reviews and expert analysis)
4. Financial health (funding, revenue, profitability where available)
5. Team and culture (Glassdoor, press coverage, LinkedIn signals)
6. Recent strategic moves

Conclude with: which company is better positioned for the next 2-3 years and why?`,
      `Research [product/service] to help me make a purchase or adoption decision.

I need:
- What it actually does vs. what the marketing claims
- Independent reviews and real user feedback (not manufacturer testimonials)
- Common complaints and deal-breakers users report
- How it compares to the top 2 alternatives on price, features, and reliability
- Any red flags: known issues, lawsuits, or controversies
- Best use case: who is this genuinely best for?`,
    ],
  },
  {
    id: "academic-scientific",
    title: "Academic & Scientific Research",
    description: "Literature reviews, research summaries, and scientific fact-checking.",
    prompts: [
      `Summarise the current state of research on [scientific or academic topic].

I need:
1. The consensus view based on the strongest available evidence
2. Key landmark studies that established this consensus (with authors and years)
3. Recent developments or emerging research that may be shifting understanding
4. Open questions or methodological debates among researchers
5. Practical implications: what does this mean for practitioners or the public?
6. Credibility level: is this a well-established field or are findings preliminary?`,
      `Find peer-reviewed research on [specific hypothesis or claim].

I want:
- The most rigorous studies addressing this question (meta-analyses preferred)
- Sample sizes, methodologies, and key limitations of top studies
- Effect sizes where available, not just statistical significance
- Any replication failures or contradictory findings
- What the overall evidence level is (strong / moderate / weak / conflicting)`,
      `What are the leading academic institutions and researchers working on [research area]?

Find:
- The top 5-10 research groups or labs globally
- Key researchers and their most cited recent work
- Major journals publishing in this area
- Conferences where cutting-edge work in this field is presented
- Any preprints or working papers suggesting where the field is heading next`,
      `I'm writing a [paper / report / article] on [topic]. Help me identify the most important recent sources.

Find:
- Highly cited papers from the past 3 years on this topic
- Key books or reports from established authorities
- Important datasets or government reports
- Any significant controversies in the literature I should address
- Gaps in existing research that my work could address`,
    ],
  },
  {
    id: "news-current-events",
    title: "News & Current Events Research",
    description: "In-depth coverage of ongoing stories, policy changes, and breaking developments.",
    prompts: [
      `Give me a comprehensive briefing on [news topic or ongoing situation].

I need:
1. What happened — the core facts in chronological order
2. The key stakeholders and their positions/interests
3. What is disputed vs. what is established fact
4. Historical context: why did this happen and what led to it?
5. Current status: where does this stand right now?
6. What to watch: likely developments or decision points in the coming weeks

Use multiple sources, especially primary sources. Note the date of information.`,
      `Track the legislative or regulatory developments around [policy area] in [country/region].

Cover:
- Current law or regulation status
- Proposed changes and their current stage in the legislative process
- Key arguments for and against
- Who are the main advocates and opponents?
- Timeline: when are key decisions or votes expected?
- Business impact: what would change for companies operating in this space?`,
      `Research public opinion and sentiment around [topic] based on available polling and social data.

Find:
- Recent polls with sample sizes and methodology
- How opinion has shifted over time
- Differences by demographic (age, geography, political affiliation where relevant)
- What factors researchers identify as driving opinion
- Social media sentiment if available from credible analysis

Flag the quality of sources — distinguish between rigorous polling and vague 'surveys'.`,
      `I need a timeline of major developments in [ongoing situation or story] over the past [X months].

For each major event:
- Date
- What happened
- Why it mattered
- Source

End with a current status summary and what the most important unresolved questions are.`,
    ],
  },
]

const faqItems = [
  {
    q: "What is Perplexity Deep Research and how does it work?",
    a: "Perplexity Deep Research is a feature in Perplexity Pro that performs multi-step web research autonomously. Instead of returning a single search, it breaks your question into sub-queries, searches across dozens of sources, reads and synthesises the content, and generates a detailed cited report. It is designed for complex research tasks that would normally take hours of manual searching and reading.",
  },
  {
    q: "How is Perplexity different from ChatGPT for research?",
    a: "The key difference is that Perplexity always searches the live web and cites every source inline, whereas ChatGPT relies on training data by default (web browsing is an optional add-on). This makes Perplexity significantly better for anything requiring current information, recent statistics, news, or source verification. For deep analysis and long-form writing, ChatGPT's language model capabilities often produce more polished outputs.",
  },
  {
    q: "Do I need Perplexity Pro for Deep Research?",
    a: "Deep Research mode requires a Perplexity Pro subscription. The free version of Perplexity provides web-sourced answers with citations but does not perform the multi-step autonomous research process. Pro also provides higher daily query limits, access to different underlying AI models, and the ability to upload files for analysis.",
  },
  {
    q: "How should I structure prompts for Perplexity Deep Research?",
    a: "Perplexity Deep Research responds best to specific, scoped research questions with clear dimensions. Rather than asking 'tell me about electric vehicles', ask for specific aspects: market size, recent policy changes, competitive landscape, or consumer sentiment. The more specific your question and the more clearly you specify what kind of output you need (comparison table, timeline, summary with sources), the better the research report will be.",
  },
  {
    q: "Can Perplexity access paywalled content?",
    a: "Perplexity can access content indexed by search engines, including some paywalled summaries and meta-descriptions. However, it generally cannot read the full text of paywalled articles from publications like the Financial Times, Wall Street Journal, or academic journals. For academic research, Perplexity works best with open-access publications, preprints on arXiv, or government/NGO reports.",
  },
  {
    q: "How do I verify that Perplexity's sources are reliable?",
    a: "Always check the inline citations Perplexity provides. Look for: primary sources (government data, published research, official company reports) rather than secondary aggregations; publication dates (is this information current?); the reputation of the source domain; and whether multiple independent sources confirm the same claim. Do not accept statistics or claims from Perplexity without verifying the underlying source.",
  },
  {
    q: "What are Perplexity Spaces and how do they help with research?",
    a: "Perplexity Spaces (a Pro feature) allow you to create a dedicated research environment with custom instructions and uploaded documents. You can add your own files as context and ask Perplexity to search the web in addition to that context. This is useful for combining proprietary data (your internal reports, meeting notes) with live web research in a single conversational interface.",
  },
  {
    q: "Can I use Perplexity for academic citation?",
    a: "Perplexity should not be cited directly as a source in academic work. It is a research discovery tool, not a primary source. Use Perplexity to find and identify relevant papers, reports, and data sources, then read and cite those original sources directly. Perplexity occasionally misattributes or summarises sources inaccurately, so always verify claims against the linked primary source before including them in academic writing.",
  },
  {
    q: "How accurate is Perplexity compared to traditional search?",
    a: "Perplexity is generally accurate for well-documented topics with strong web coverage. It is less reliable for highly specialised academic topics, very recent events (within days), local or regional news, non-English sources, or topics where misinformation is prevalent online. For high-stakes research, always cross-reference Perplexity's outputs with direct searches in Google Scholar, government databases, or domain-specific sources.",
  },
  {
    q: "What is the best way to follow up on a Perplexity research report?",
    a: "After receiving a Deep Research report, follow up with clarifying or drilling questions: 'What is the original source for the [specific statistic]?', 'Find more recent data on [aspect]', 'Which of these claims is most contested and why?', or 'Summarise the strongest counter-argument to the conclusion above'. Treat Perplexity as a research assistant you can interrogate, not a definitive authority.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Perplexity Deep Research Prompts 2026: 60+ Copy-Paste Templates for AI Research",
  description:
    "Get 60+ copy-paste Perplexity AI prompts for deep research, competitive analysis, fact-checking, and market intelligence.",
  author: { "@type": "Organization", name: "GPTPrompts.AI" },
  datePublished: "2025-03-01",
  dateModified: "2026-03-01",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

export default function PerplexityDeepResearchPage() {
  return (
    <div className="min-h-screen bg-[#060d0d] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-teal-900/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-4">AI Research Tools</p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">
            Perplexity Deep Research Prompts: 60+ Templates for Serious AI Research
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Get more out of Perplexity AI and Perplexity Deep Research with structured prompts for market intelligence,
            fact-checking, company research, academic literature, and current events. Each template is copy-paste ready.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-6" style={{ color: ACCENT }}>
          How to Get the Most from Perplexity Deep Research
        </h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          Perplexity's Deep Research mode performs multi-step autonomous research: it breaks your question into
          sub-queries, searches across dozens of sources, reads the content, and synthesises a detailed cited report.
          Unlike standard AI chat, every claim is linked to a source you can verify.
        </p>
        <div className="bg-[#0a1a1a] border border-teal-900/40 rounded-xl p-6 mb-6">
          <p className="text-teal-300 font-semibold mb-3 text-sm uppercase tracking-wider">
            Perplexity prompt best practices
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <span className="text-teal-400 font-semibold">Be specific:</span> Name the industry, company, time
              period, or geography. Vague questions produce vague research.
            </li>
            <li>
              <span className="text-teal-400 font-semibold">Specify dimensions:</span> Tell Perplexity exactly what
              aspects to cover. Use numbered lists in your prompt.
            </li>
            <li>
              <span className="text-teal-400 font-semibold">Request sources:</span> Ask it to cite data points. Use
              "with sources" or "cite each statistic" in your prompt.
            </li>
            <li>
              <span className="text-teal-400 font-semibold">Follow up:</span> After a report, ask drill-down questions:
              "What is the source for [claim]?" or "Find more recent data on [aspect]."
            </li>
          </ul>
        </div>
        <p className="text-gray-400 leading-relaxed">
          The prompts below are optimised for Perplexity Pro's Deep Research mode but work equally well with standard
          Perplexity queries, ChatGPT with browsing enabled, or other AI tools with web access.
        </p>
      </div>

      {/* Prompt sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {sections.map((section) => (
          <div key={section.id} className="mb-16">
            <h2 className="text-3xl font-bold mb-2" style={{ color: ACCENT }}>
              {section.title}
            </h2>
            <p className="text-gray-500 mb-8 text-sm">{section.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.prompts.map((prompt, idx) => (
                <CopyCard key={idx} text={prompt} />
              ))}
            </div>
          </div>
        ))}

        {/* FAQ */}
        <div className="mt-20 mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ color: ACCENT }}>
            Perplexity Deep Research FAQ
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <FaqItem key={idx} q={item.q} a={item.a} />
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8" style={{ color: ACCENT }}>
            More AI Research &amp; Productivity Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ChatGPT Prompts", href: "/chatgpt-prompts", color: "#10a37f" },
              { title: "GPT-4.5 Prompts", href: "/gpt-4-5-prompts", color: "#10a37f" },
              { title: "ChatGPT o3 Prompts", href: "/chatgpt-o3-prompts", color: "#10a37f" },
              { title: "Gemini Advanced Prompts", href: "/gemini-advanced-prompts", color: "#4285f4" },
              { title: "Claude Prompts", href: "/claude-prompts", color: "#ff4500" },
              { title: "AI Prompts for Researchers", href: "/ai-prompts-for-researchers", color: "#20b2aa" },
              { title: "AI Search Engine Prompts", href: "/ai-search-engine-prompts", color: "#8b5cf6" },
              { title: "Prompt Engineering Fundamentals", href: "/prompt-engineering-fundamentals", color: "#20b2aa" },
              { title: "All Prompt Guides", href: "/website-links", color: "#20b2aa" },
            ].map((page, idx) => (
              <Link
                key={idx}
                href={page.href}
                className="p-4 rounded-lg border transition-all duration-200 hover:opacity-80"
                style={{ borderColor: page.color + "40", backgroundColor: page.color + "08" }}
              >
                <span className="font-semibold text-sm" style={{ color: page.color }}>
                  {page.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
