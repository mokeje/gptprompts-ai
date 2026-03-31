'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Search, BookOpen, Globe, FileText, Microscope, TrendingUp } from 'lucide-react';

const accent = '#F97316';
const borderCol = '#2a1000';
const bgDark = '#060300';

const CopyCard = ({ title, prompt, tag }: { title: string; prompt: string; tag: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-lg border p-5 transition-colors" style={{ borderColor: borderCol, background: bgDark }} onMouseEnter={e => (e.currentTarget.style.borderColor = `${accent}60`)} onMouseLeave={e => (e.currentTarget.style.borderColor = borderCol)}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full border" style={{ borderColor: `${accent}40`, color: accent }}>{tag}</span>
          <h3 className="text-white font-semibold mt-1">{title}</h3>
        </div>
        <button onClick={handleCopy} className="shrink-0 text-gray-400 transition-colors">
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="whitespace-pre-wrap font-sans text-sm text-gray-300 leading-relaxed">{prompt}</pre>
    </div>
  );
};

const FAQ = ({ item }: { item: { question: string; answer: string } }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg overflow-hidden border" style={{ borderColor: borderCol }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left" style={{ background: bgDark }}>
        <span className="font-medium text-white pr-4">{item.question}</span>
        {open ? <ChevronUp size={18} style={{ color: accent }} /> : <ChevronDown size={18} className="text-gray-400" />}
      </button>
      {open && <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed" style={{ background: bgDark }}>{item.answer}</div>}
    </div>
  );
};

const sections = [
  {
    title: 'Deep Research Queries',
    icon: Search,
    description: 'Structure complex, multi-layered research questions to get comprehensive, well-sourced answers from AI search engines like Perplexity and SearchGPT.',
    prompts: [
      {
        tag: 'Perplexity',
        title: 'Comprehensive Topic Deep Dive',
        prompt: `I need a comprehensive deep-dive research report on [TOPIC].

Please structure your response as follows:
1. Executive Summary (3-4 sentences — the most important things to know)
2. Background & Context (history, why this matters, key developments)
3. Current State (what is happening right now in [YEAR])
4. Key Players (organisations, researchers, companies, individuals who matter)
5. Main Debates or Controversies (where experts disagree and why)
6. Data & Statistics (key numbers, studies, survey results)
7. Future Outlook (trends, predictions, expert forecasts)
8. Key Sources to Read Further (name specific publications, papers, books)

For each section, cite specific sources with publication names and dates.
Flag any claims that are contested or where evidence is limited.`,
      },
      {
        tag: 'Research',
        title: 'Comparative Research Query',
        prompt: `Compare and contrast [OPTION A] vs [OPTION B] across these dimensions:

Research criteria:
- Definition and core characteristics of each
- Historical development and origin
- How they work (mechanism, process, or approach)
- Strengths and advantages
- Weaknesses and limitations
- Best use cases for each
- Cost or resource comparison (if applicable)
- Expert consensus: which is preferred and in what contexts
- Emerging trends affecting each option
- Key sources and studies on this comparison

Present findings in a structured format suitable for informing a decision.
Cite specific studies or expert sources for each key claim.
Conclude with a recommendation framework: when to choose A vs. B.`,
      },
      {
        tag: 'Intelligence',
        title: 'Industry Landscape Research Brief',
        prompt: `Conduct a comprehensive industry landscape analysis for [INDUSTRY]:

Cover the following:
1. Market size and growth rate (current year, 5-year forecast)
2. Key market segments and their relative sizes
3. Top 10 companies by market share with brief description of each
4. Recent major developments (last 12 months: mergers, launches, regulation)
5. Technology trends reshaping the industry
6. Regulatory environment (key regulations, compliance requirements, upcoming changes)
7. Key investment flows (VC funding, M&A activity, IPOs)
8. Geographic breakdown (which regions are growing fastest and why)
9. Disruption risks (startups or adjacent technologies threatening incumbents)
10. Three expert opinions on where this industry is heading

Include specific data points, cite sources, and flag where data is limited or contested.`,
      },
    ],
  },
  {
    title: 'Fact-Checking & Verification',
    icon: FileText,
    description: 'Use AI search engines to verify claims, check statistics, trace the origin of viral information, and identify misinformation.',
    prompts: [
      {
        tag: 'Fact Check',
        title: 'Claim Verification Query',
        prompt: `Please verify the following claim and provide a detailed fact-check:

Claim to verify: "[PASTE THE CLAIM HERE]"

In your response:
1. Is this claim TRUE, FALSE, PARTIALLY TRUE, or UNVERIFIABLE? State this clearly upfront.
2. Provide the best available evidence supporting or refuting the claim
3. Identify the original source of this claim if possible
4. Note any important context that changes the meaning of the claim
5. Explain how the claim may have been distorted or misrepresented if applicable
6. Cite at least 3 credible sources (academic, government, established journalism)
7. Note where evidence is limited or where experts disagree
8. Provide a plain-language summary a non-expert would understand

Be rigorous — distinguish between what the evidence shows and what is interpretation.`,
      },
      {
        tag: 'Statistics',
        title: 'Statistical Source Verification',
        prompt: `I have seen this statistic cited frequently: "[PASTE STATISTIC]"

Please help me:
1. Trace this statistic to its original primary source
2. Verify whether the original study or survey supports this specific claim
3. Identify whether the statistic has been misquoted, misattributed, or taken out of context
4. Provide the full context of the original research (methodology, sample size, date, geography)
5. Find more recent data that may have updated or superseded this statistic
6. Note any limitations or caveats from the original researchers
7. List 2-3 alternative sources with different estimates and explain why they differ

Flag if this statistic appears to have been altered from its original form.`,
      },
      {
        tag: 'Misinformation',
        title: 'Viral Claim Debunk Research',
        prompt: `Help me research and debunk (or verify) this viral claim:

Viral claim: "[PASTE THE VIRAL CLAIM, HEADLINE, OR SCREENSHOT TEXT]"
Where I saw it: [PLATFORM / SOURCE]
Date first noticed: [APPROXIMATE DATE]

Please:
1. Search for fact-checks from established organisations (Snopes, Reuters, PolitiFact, BBC Verify, etc.)
2. Find the original source or context this may have been taken from
3. Identify who is spreading this claim and whether there is a pattern
4. Provide the accurate, evidence-based account of events
5. Explain why this claim is misleading (framing, missing context, misquotation, fabrication)
6. Suggest how I could share a correction effectively on social media`,
      },
    ],
  },
  {
    title: 'Competitive & Market Intelligence',
    icon: TrendingUp,
    description: 'Use AI search to build competitive intelligence reports, analyse market positioning, and track competitor activity.',
    prompts: [
      {
        tag: 'Competitor',
        title: 'Competitor Deep Research',
        prompt: `Research [COMPETITOR COMPANY NAME] comprehensively for competitive intelligence:

Cover:
1. Company overview: founding, mission, business model, current size
2. Products and services portfolio — what they offer and at what price points
3. Recent news, announcements, and product launches (last 12 months)
4. Revenue and financial performance (if publicly available)
5. Key executives and leadership changes
6. Customer base: who they serve, key clients or case studies they publicise
7. Strengths: what they are doing well (from customer reviews, press, analyst coverage)
8. Weaknesses: complaints, product gaps, negative press, churn signals
9. Funding and investment history
10. Strategic direction: where they appear to be investing and heading

Sources: company website, press releases, LinkedIn, Crunchbase, G2/Capterra reviews, news coverage.
Cite each source with publication and date.`,
      },
      {
        tag: 'Market',
        title: 'Market Entry Research Brief',
        prompt: `I am considering entering [MARKET/GEOGRAPHY]. Research the viability:

Provide:
1. Market size and growth trajectory in [GEOGRAPHY] for [INDUSTRY]
2. Key existing players and their market share (local and international)
3. Customer behaviour and preferences in this market
4. Regulatory and legal requirements for entry (licensing, compliance, local laws)
5. Cultural considerations that affect product or marketing approach
6. Distribution and sales channels available
7. Pricing expectations and willingness to pay compared to [HOME MARKET]
8. Successful case studies of companies that have entered this market
9. Failed attempts and lessons from companies that struggled
10. Recommended entry strategy based on the above findings

Cite specific studies, government reports, and industry analyses for each point.`,
      },
      {
        tag: 'Pricing',
        title: 'Pricing Intelligence Research',
        prompt: `Research pricing strategies and price points across [INDUSTRY/PRODUCT CATEGORY]:

Find:
1. Current pricing models used across the industry (subscription, usage-based, tiered, flat fee)
2. Price ranges for comparable products/services at each tier (budget, mid-market, premium)
3. How leading players structure their pricing pages and what features they include at each tier
4. Recent pricing changes by major players and the market reaction
5. Customer sensitivity to pricing in this category (what research says about willingness to pay)
6. Discounting norms (what discounts are common and in what contexts)
7. Freemium conversion rates benchmarks for this industry if available
8. Pricing psychology tactics commonly used in this category
9. Regulatory considerations on pricing (any price controls or transparency requirements)

Include specific examples with actual numbers where available. Cite sources.`,
      },
    ],
  },
  {
    title: 'Technical & Developer Research',
    icon: Microscope,
    description: 'Use AI search engines for technical documentation lookup, API comparisons, architecture decisions, and developer ecosystem research.',
    prompts: [
      {
        tag: 'Technical',
        title: 'Technology Comparison Research',
        prompt: `Compare [TECHNOLOGY A] vs [TECHNOLOGY B] for [USE CASE]:

Research and compare across these dimensions:
1. Performance benchmarks — speed, throughput, latency at scale
2. Developer experience: setup complexity, documentation quality, community support
3. Ecosystem maturity: third-party integrations, libraries, hosted services
4. Scalability: how each handles growth from prototype to enterprise scale
5. Security considerations and known vulnerabilities
6. Licensing and cost at different usage levels
7. Company backing and long-term sustainability
8. Recent changelog and development activity (GitHub stars, commit frequency)
9. Community size: Stack Overflow activity, Discord/Slack community, conference presence
10. Expert recommendations: what do senior engineers say about choosing between them?

Cite official documentation, developer surveys (Stack Overflow Developer Survey, etc.), and tech journalism.`,
      },
      {
        tag: 'API',
        title: 'API & Integration Research',
        prompt: `Research the best APIs for [FUNCTIONALITY/PURPOSE]:

Find and compare the top 5 API options that provide [WHAT YOU NEED]:
For each API:
1. Provider name and API product name
2. What it does and what data/functionality it provides
3. Pricing model and cost estimate for [EXPECTED USAGE VOLUME]
4. Rate limits and usage restrictions
5. Authentication method (API key, OAuth, etc.)
6. Documentation quality and available SDKs
7. Reliability and uptime track record
8. Community and developer support quality
9. Notable companies that use this API in production
10. Any recent changes, deprecations, or reliability issues

Conclude with a recommendation ranked by: (a) developer experience, (b) cost, (c) reliability.`,
      },
      {
        tag: 'Architecture',
        title: 'Architecture Decision Research',
        prompt: `Research best practices and tradeoffs for [ARCHITECTURE DECISION]:

I need to decide: [DESCRIBE YOUR ARCHITECTURAL DECISION — e.g., "microservices vs. monolith for a B2B SaaS app at 50k users"]

Please research:
1. Industry consensus: what approach do experienced engineers recommend and why?
2. When each approach excels (size of team, traffic level, domain complexity, etc.)
3. Real-world case studies — companies that chose each approach and their outcomes
4. Migration paths: if I start with one, how hard is it to switch later?
5. Tooling ecosystem: what tools best support each approach?
6. Operational overhead: what does each approach require to run in production?
7. Recent thinking: has the consensus shifted in the past 2-3 years?
8. Expert opinions: links to influential blog posts, conference talks, or books on this decision

Cite specific engineers, companies, and publications.`,
      },
    ],
  },
  {
    title: 'Academic & Scientific Research',
    icon: BookOpen,
    description: 'Formulate research queries for academic literature, scientific studies, and evidence-based analysis using AI search engines.',
    prompts: [
      {
        tag: 'Academic',
        title: 'Literature Review Query',
        prompt: `Help me conduct a literature review on [RESEARCH TOPIC]:

Please find and summarise:
1. Seminal papers that established the foundational understanding of this topic
2. Major meta-analyses or systematic reviews that synthesise the evidence
3. Most-cited recent studies (last 5 years) and their key findings
4. Areas of scientific consensus vs. active debate among researchers
5. Methodological approaches commonly used in this field
6. Key journals and conferences where this research appears
7. Leading researchers and institutions in this area
8. Gaps in the literature: what questions remain unanswered?
9. Practical applications of the research findings

For each study or paper: provide title, authors, year, journal, and key finding.
Flag the quality of evidence (randomised controlled trial, observational study, expert opinion, etc.).`,
      },
      {
        tag: 'Evidence',
        title: 'Evidence Quality Assessment',
        prompt: `I need to assess the quality and reliability of evidence on [TOPIC/CLAIM]:

Research and evaluate:
1. What types of studies exist on this topic (RCTs, observational, case studies, reviews)?
2. What is the overall direction of the evidence (consensus, mixed, inconclusive)?
3. What are the strongest studies and what do they show?
4. What are the methodological limitations in the existing research?
5. Are there industry or funder conflicts of interest in major studies?
6. What do Cochrane Reviews or equivalent systematic reviews conclude?
7. What do major health, government, or scientific bodies say officially?
8. What does the dissenting evidence show (if any)?
9. What would we need to know to be more confident in the evidence?

Rate overall evidence quality: Strong / Moderate / Weak / Insufficient`,
      },
      {
        tag: 'Citation',
        title: 'Academic Citation Finder',
        prompt: `I need to find the most credible citations for arguments about [TOPIC]:

Specifically, I need citations for these claims:
1. [CLAIM 1 — e.g., "X is associated with Y"]
2. [CLAIM 2]
3. [CLAIM 3]

For each claim, find:
- The strongest peer-reviewed study or meta-analysis that supports it
- The full citation (Author, Year, Title, Journal, DOI if possible)
- A one-sentence summary of what the study found
- Any important caveats or limitations
- An opposing study if significant contradictory evidence exists

Prioritise: peer-reviewed journals > government reports > established institutions > journalism
Avoid: blog posts, Wikipedia, non-peer-reviewed sources`,
      },
    ],
  },
  {
    title: 'News & Current Events Analysis',
    icon: Globe,
    description: 'Get structured, multi-perspective analysis of current events, policy changes, and breaking news using AI search engines.',
    prompts: [
      {
        tag: 'News Analysis',
        title: 'Breaking News Context & Background',
        prompt: `Help me understand [CURRENT NEWS EVENT OR TOPIC] with full context:

Provide:
1. What happened — a clear, factual summary of the event
2. When and where it happened and who is involved
3. Historical background — what led to this? (key events from past 5-10 years)
4. Why it matters — significance for [COUNTRY / INDUSTRY / GLOBAL CONTEXT]
5. Different perspectives on this event:
   - How is it being reported by mainstream media (left-leaning, right-leaning, international)
   - What are the main areas of disagreement or contested interpretation?
6. Expert analysis — what are credible commentators saying?
7. What happens next — likely outcomes and scenarios
8. What we do not know yet (unanswered questions)

Cite specific publications and distinguish between verified facts and analysis/opinion.`,
      },
      {
        tag: 'Policy',
        title: 'Policy Change Analysis Query',
        prompt: `Research and analyse [POLICY CHANGE / NEW REGULATION / GOVERNMENT DECISION]:

Structure your response as:
1. Policy summary: what exactly is changing, who announced it, when it takes effect
2. What the policy replaces or amends (the before/after comparison)
3. Official stated rationale (what the government/regulator says it is for)
4. Evidence base: is there research supporting this approach?
5. Supporters: who backs this policy and why
6. Critics: who opposes it, what are their arguments, and are they credible?
7. Impact assessment: who is affected and how (by sector, demographic, geography)
8. International comparison: how does this compare to equivalent policies elsewhere?
9. Implementation timeline and monitoring plan
10. Unanswered questions and things to watch

Cite official government sources, academic analysis, and credible journalism.`,
      },
      {
        tag: 'Trend',
        title: 'Emerging Trend Research Brief',
        prompt: `Research the emerging trend of [TREND NAME] comprehensively:

Cover:
1. Definition and origin: what is this trend, where did it start, and when?
2. Scale: how widespread is it? (data, surveys, growth metrics)
3. Driving forces: what is causing this trend to emerge or accelerate?
4. Key examples: companies, products, people, or events that exemplify it
5. Industries most affected: who is most impacted (positively and negatively)?
6. Expert opinions: are analysts optimistic, sceptical, or mixed?
7. Counter-trends: is there pushback or an opposing trend?
8. Timeline prediction: is this a short-term fad or long-term structural shift?
9. Opportunities this trend creates (for businesses, investors, individuals)
10. Risks this trend poses

Cite recent reports, surveys, news coverage, and expert commentary with dates.`,
      },
    ],
  },
];

const faqs = [
  {
    question: 'What is an AI search engine and how is it different from Google?',
    answer: 'AI search engines like Perplexity AI, SearchGPT (ChatGPT Search), and Bing Copilot use large language models to synthesise information from multiple sources and provide direct, conversational answers with citations — rather than returning a list of links. Unlike Google, which ranks pages and lets you find answers yourself, AI search engines attempt to answer your question directly by reading and summarising the web in real time.',
  },
  {
    question: 'Which is the best AI search engine for research?',
    answer: 'Perplexity AI is currently considered the strongest AI search engine for research due to its real-time web search, strong citation practices, and focus on accuracy. SearchGPT (ChatGPT with web search enabled) is strong for conversational research workflows. Bing Copilot integrates well with Microsoft products. Google Gemini with Deep Research mode is excellent for longer, structured research reports. The best choice depends on your workflow and how much depth you need.',
  },
  {
    question: 'How do I structure queries for AI search engines?',
    answer: 'The best AI search queries are specific and context-rich. Instead of "what is climate change?" try "What does the current scientific consensus say about the rate of sea level rise by 2050, and which recent studies are driving that estimate?" For research tasks, specify: the topic, the angle you care about, the type of evidence you want (academic, journalistic, government), the recency requirement, and the format for the answer. The more context you give, the more targeted and useful the response.',
  },
  {
    question: 'Can AI search engines access real-time information?',
    answer: 'Yes — most major AI search engines (Perplexity, Bing Copilot, SearchGPT, Gemini) perform live web searches as part of generating their response. This means they can access news published today, recent product launches, current pricing, and live market data. However, the quality of real-time retrieval varies by platform. Perplexity is generally considered the most reliable for current information, as it is purpose-built around real-time search.',
  },
  {
    question: 'How do I know if the sources cited by AI search engines are reliable?',
    answer: 'Always check the citations provided by AI search engines. Click through to verify: (1) the source actually says what is claimed; (2) the source is credible (established publication, peer-reviewed journal, government body); (3) the publication date is recent enough for your needs; (4) the AI has not taken the quote out of context. AI search engines sometimes hallucinate citations or misrepresent source content, so direct verification is important for anything consequential.',
  },
  {
    question: 'What are AI search engines not good at?',
    answer: 'AI search engines can struggle with: highly specialised or technical topics where quality sources are paywalled or not well-indexed; very recent events from the last few hours; information from private databases or academic paywalls; complex quantitative analysis requiring custom data manipulation; and highly localised information (e.g., local business hours, regional legal specifics). For these cases, supplement with specialised databases, primary sources, or domain experts.',
  },
  {
    question: 'How does Perplexity AI differ from ChatGPT search?',
    answer: 'Perplexity AI is purpose-built as an AI search engine, with its core product focused on answering questions with cited, real-time web searches. Every response includes numbered citations you can click. ChatGPT with web search enabled adds search capability to a general-purpose AI assistant — it searches when needed but is not exclusively focused on search. Perplexity tends to be more consistent about citing sources, while ChatGPT search may be more flexible for complex multi-step tasks.',
  },
  {
    question: 'Can I use AI search engines for competitive intelligence?',
    answer: 'Yes — AI search engines are excellent for competitive intelligence at scale. You can ask for comprehensive competitor profiles, recent news about a company, pricing research across a category, and market landscape overviews. Perplexity Pro and similar paid tiers often allow deeper, more structured research queries. For more systematic competitive monitoring, combine AI search with dedicated tools like Crayon, Klue, or Semrush for ongoing tracking.',
  },
  {
    question: 'Are AI search engine results biased?',
    answer: 'AI search engines can reflect biases present in their training data and in the sources they retrieve. Results may over-represent English-language, Western, or mainstream perspectives. Some platforms may have commercial relationships that affect source prioritisation. To mitigate bias: cross-reference multiple AI search tools, explicitly ask for multiple perspectives or counterarguments, specify that you want international or diverse sources, and always follow citations back to primary sources.',
  },
  {
    question: 'How can I get more detailed research from AI search engines?',
    answer: 'To get more detailed research: (1) Be specific — ask narrow, precise questions rather than broad ones; (2) Ask for structured output — request numbered lists, tables, or specific sections; (3) Specify the depth you want — ask for "a comprehensive analysis" or "a brief overview" explicitly; (4) Ask follow-up questions — drill deeper into specific aspects of the initial response; (5) Use Perplexity Pro or similar premium tiers that allow for "Deep Research" mode with more intensive web scanning; (6) Specify source types you want prioritised.',
  },
];

export default function AISearchEnginePromptsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best AI Search Engine Prompts — Perplexity, SearchGPT & More',
    description: 'Copy-ready prompts for AI search engines. Deep research queries, fact-checking, competitive intelligence, academic research, and news analysis.',
    author: { '@type': 'Organization', name: 'GPTPrompts.AI' },
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen text-white" style={{ background: '#050200' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-4" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
            <Search size={12} /> AI Search Research
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">AI Search Engine Prompts</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Get more from Perplexity, SearchGPT, and Bing Copilot. Structured prompts for deep research, fact-checking, competitive intelligence, and analysis.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.title} className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg" style={{ background: `${accent}15` }}>
                  <Icon size={18} style={{ color: accent }} />
                </div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              <p className="text-gray-400 text-sm mb-5 ml-11">{section.description}</p>
              <div className="grid gap-4">
                {section.prompts.map(p => <CopyCard key={p.title} {...p} />)}
              </div>
            </div>
          );
        })}

        {/* Reference: Tool Comparison */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-2">AI Search Engine Comparison</h2>
          <p className="text-gray-400 text-sm mb-5">Which AI search engine to use for different research tasks.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Perplexity AI', strength: 'Real-time web search, strong citation, research-focused', best: 'Deep research with sourced citations' },
              { name: 'SearchGPT (ChatGPT)', strength: 'Conversational research, flexible multi-step queries', best: 'Complex, multi-part research workflows' },
              { name: 'Gemini (Google)', strength: 'Deep Research mode, Google index, multimodal', best: 'Long-form structured research reports' },
              { name: 'Claude (Anthropic)', strength: 'Long context, nuanced analysis, safety-focused', best: 'Document analysis and synthesis tasks' },
              { name: 'Bing Copilot', strength: 'Microsoft integration, real-time Bing search', best: 'Windows/Office ecosystem users' },
              { name: 'You.com', strength: 'Customisable search sources, developer-friendly', best: 'Technical research with source control' },
            ].map(tool => (
              <div key={tool.name} className="rounded-lg border p-4" style={{ borderColor: borderCol, background: bgDark }}>
                <div className="font-semibold text-white mb-1">{tool.name}</div>
                <div className="text-xs text-gray-400 mb-2">{tool.strength}</div>
                <div className="text-xs font-medium" style={{ color: accent }}>Best for: {tool.best}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Query Formatting Best Practices */}
        <div className="mb-12 rounded-lg border p-6" style={{ borderColor: borderCol, background: bgDark }}>
          <h2 className="text-lg font-bold text-white mb-1">Query Formatting Best Practices</h2>
          <p className="text-gray-400 text-sm mb-4">Six techniques that consistently improve AI search engine results.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { tip: 'Be specific about scope', detail: 'Include geography, time period, industry, and audience in your query to narrow the search space' },
              { tip: 'Request structured output', detail: 'Ask for numbered lists, tables, or specific sections to get organised, scannable responses' },
              { tip: 'Specify evidence type', detail: 'Say "peer-reviewed studies only" or "industry reports from the last 2 years" to guide source selection' },
              { tip: 'Ask for multiple perspectives', detail: 'Explicitly request "include both supporting and opposing viewpoints" for balanced research' },
              { tip: 'Cite requirements', detail: 'End every research query with "cite all sources with publication name and date" for verifiable output' },
              { tip: 'Use follow-up drilling', detail: 'After a broad overview, ask follow-up questions on specific points: "Tell me more about [SPECIFIC FINDING]"' },
            ].map(item => (
              <div key={item.tip} className="rounded-lg border p-3" style={{ borderColor: borderCol, background: '#0a0600' }}>
                <div className="font-medium text-white text-sm mb-0.5">{item.tip}</div>
                <div className="text-xs text-gray-400">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3">
            {faqs.map(item => <FAQ key={item.question} item={item} />)}
          </div>
        </div>

        {/* Related Pages */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Related Prompt Guides</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'AI Prompts for Researchers', href: '/ai-prompts-for-researchers' },
              { label: 'AI Text Generator Prompts', href: '/ai-text-generator-prompts' },
              { label: 'AI Prompts Data Analysis', href: '/ai-prompts-data-analysis' },
              { label: 'ChatGPT Prompts Content Writing', href: '/chatgpt-prompts-content-writing' },
              { label: 'AI for Executives Prompts', href: '/ai-for-executives-prompts' },
              { label: 'AI Prompts for Education', href: '/ai-prompts-for-education' },
              { label: 'Manus AI Prompts', href: '/manus-ai-prompts' },
              { label: 'AI Story Generator Prompts', href: '/ai-story-generator-prompts' },
            ].map(link => (
              <a key={link.href} href={link.href} className="text-sm px-3 py-1.5 rounded-full border transition-colors" style={{ borderColor: borderCol, color: '#9ca3af' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${accent}50`; (e.currentTarget as HTMLAnchorElement).style.color = accent; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = borderCol; (e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af'; }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
