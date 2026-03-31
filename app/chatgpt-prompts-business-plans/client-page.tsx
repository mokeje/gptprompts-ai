'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Target, BarChart3, DollarSign, TrendingUp, Users, Lightbulb } from 'lucide-react';

const accent = '#10A37F';
const borderCol = '#001a14';
const bgDark = '#030907';

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
    title: 'Executive Summary & Vision',
    icon: Target,
    description: 'Craft compelling executive summaries that communicate mission, vision, and value proposition to investors, banks, and partners.',
    prompts: [
      {
        tag: 'Startup',
        title: 'Investor-Ready Executive Summary',
        prompt: `Write an executive summary for my business plan with these details:
Business name: [NAME]
Industry: [INDUSTRY]
Problem being solved: [PROBLEM]
Our solution: [SOLUTION]
Target market: [TARGET MARKET]
Revenue model: [HOW WE MAKE MONEY]
Traction to date: [USERS/REVENUE/PARTNERSHIPS]
Funding ask: [AMOUNT]

Format as a compelling 300-word narrative that:
- Opens with the problem (1 sentence hook)
- Introduces the solution and why it is different
- States total addressable market with a number
- Explains the business model in plain language
- Highlights traction with specific data points
- Introduces the team's relevant credentials
- Ends with a clear, specific funding ask
Tone: confident, data-driven, investor-facing`,
      },
      {
        tag: 'Mission',
        title: 'Mission & Vision Statement Generator',
        prompt: `Create a mission statement and vision statement for my company:
Company: [COMPANY NAME]
What we do: [CORE PRODUCT/SERVICE]
Who we serve: [TARGET CUSTOMER]
Core values: [LIST 3-5 VALUES]
Long-term aspiration: [WHERE WE WANT TO BE IN 10 YEARS]

Deliver:
1. Mission statement (1-2 sentences, present tense, what we do and for whom)
2. Vision statement (1 sentence, future-focused, aspirational but credible)
3. Three alternative variations of each for comparison
4. Brief explanation of word choice for the recommended versions
5. Common mistakes to avoid in mission/vision writing`,
      },
      {
        tag: 'Pitch',
        title: 'One-Page Business Overview',
        prompt: `Create a one-page business overview document for [COMPANY NAME]:
Structure it with these sections:
- The Problem (2-3 sentences)
- Our Solution (2-3 sentences with key differentiators)
- Market Opportunity (TAM/SAM/SOM with sources if available)
- Business Model (how we generate revenue)
- Competitive Advantage (3 key points)
- Team (key names and relevant experience)
- Traction & Milestones (current status and near-term goals)
- Ask (investment, partnerships, or clients we seek)

Tone: persuasive but factual, suitable for cold outreach
Use bold headers, keep each section to 2-4 sentences maximum
Avoid jargon — any reader should understand it in 60 seconds`,
      },
    ],
  },
  {
    title: 'Market Analysis & Opportunity',
    icon: BarChart3,
    description: 'Build credible, data-backed market analysis sections including TAM/SAM/SOM, competitor landscapes, and customer segmentation.',
    prompts: [
      {
        tag: 'Market Size',
        title: 'TAM/SAM/SOM Framework',
        prompt: `Help me calculate and write the market size section for my business plan:
Business: [DESCRIBE YOUR BUSINESS]
Geography: [WHERE YOU OPERATE]
Industry: [YOUR INDUSTRY]

Using a top-down and bottom-up approach, help me:
1. Define and estimate the Total Addressable Market (TAM) with methodology
2. Define and estimate the Serviceable Addressable Market (SAM)
3. Define and estimate the Serviceable Obtainable Market (SOM) for year 1-3
4. Explain the assumptions behind each estimate clearly
5. Identify 2-3 credible third-party sources I should cite
6. Write the narrative paragraph explaining the market opportunity

Present numbers in a clear table with supporting narrative.`,
      },
      {
        tag: 'Competition',
        title: 'Competitive Landscape Analysis',
        prompt: `Write the competitive analysis section for my business plan:
My company: [COMPANY NAME AND DESCRIPTION]
Main competitors: [LIST 4-6 COMPETITORS]
Our key differentiators: [LIST YOUR ADVANTAGES]

Structure the section as follows:
1. Competitive landscape overview (2-3 sentences)
2. Competitor comparison table (columns: Company, Strengths, Weaknesses, Price Point, Target Customer)
3. Our competitive positioning (where we sit in the market)
4. Sustainable competitive advantages — analyse moat: network effects, IP, switching costs, cost structure
5. Barriers to entry we face and how we overcome them
6. Why we win long-term (honest, specific, evidence-based)

Be objective — acknowledge competitor strengths while clearly making the case for our differentiation.`,
      },
      {
        tag: 'Customer',
        title: 'Customer Segmentation & ICP',
        prompt: `Define our target customer segments for the market analysis section:
Product/service: [WHAT YOU SELL]
Industry: [YOUR INDUSTRY]
Current customers (if any): [DESCRIBE EXISTING CUSTOMERS]

Deliver:
1. Primary customer segment — demographics, psychographics, behaviours, pain points, and buying triggers
2. Secondary customer segment — same format
3. Ideal Customer Profile (ICP) for B2B — company size, industry, role, budget, buying process
4. Customer persona for B2C — name, age, job, goals, frustrations, preferred channels
5. How to reach each segment — top 3 acquisition channels per segment
6. Customer quotes or language that resonates (examples to use in messaging)`,
      },
    ],
  },
  {
    title: 'Business Model & Revenue',
    icon: DollarSign,
    description: 'Articulate revenue streams, pricing strategy, unit economics, and business model canvas elements for investors and lenders.',
    prompts: [
      {
        tag: 'Revenue Model',
        title: 'Revenue Stream Analysis',
        prompt: `Help me write the business model and revenue section for my plan:
Product/service: [DESCRIBE WHAT YOU SELL]
Current revenue streams: [LIST ALL WAYS YOU MAKE MONEY]
Pricing model: [SUBSCRIPTION/TRANSACTIONAL/FREEMIUM/etc.]
Average transaction value: [AMOUNT]
Target customer volume: [HOW MANY CUSTOMERS YEAR 1/2/3]

Write:
1. Business model description (how we create, deliver, and capture value)
2. Revenue stream breakdown with percentages of total revenue
3. Pricing strategy rationale (why this pricing vs. competitors)
4. Unit economics: Customer Acquisition Cost (CAC), Lifetime Value (LTV), LTV:CAC ratio
5. Path to profitability narrative (when and how we break even)
6. Revenue model risks and how we mitigate them`,
      },
      {
        tag: 'Unit Economics',
        title: 'Unit Economics Deep Dive',
        prompt: `Calculate and explain unit economics for my business:
Business type: [SaaS / E-commerce / Marketplace / Service / Other]
Average selling price: [PRICE]
Cost of goods sold per unit: [COGS]
Sales & marketing spend: [MONTHLY AMOUNT]
New customers per month: [NUMBER]
Average customer lifespan: [MONTHS]
Monthly churn rate: [PERCENTAGE]

Calculate and explain:
1. Gross Margin per unit with formula
2. Customer Acquisition Cost (CAC) with calculation shown
3. Customer Lifetime Value (LTV) with formula
4. LTV:CAC ratio and what it means for business health
5. Payback period for customer acquisition spend
6. Recommendations to improve each metric
7. Industry benchmarks for comparison`,
      },
      {
        tag: 'Pricing',
        title: 'Pricing Strategy Section',
        prompt: `Write the pricing strategy section of the business plan:
Product: [PRODUCT OR SERVICE]
Competitor pricing: [WHAT COMPETITORS CHARGE]
Our cost structure: [ROUGH UNIT COSTS]
Target customer willingness to pay: [RESEARCH OR ESTIMATE]
Our positioning: [PREMIUM / MID-MARKET / BUDGET]

Include:
1. Pricing philosophy and rationale (value-based, cost-plus, competitive)
2. Pricing tiers or packages with feature breakdown (if applicable)
3. How pricing compares to competitors (price-value matrix positioning)
4. Discounting and promotion strategy
5. Planned pricing evolution as we scale (expansion revenue strategy)
6. Psychological pricing considerations`,
      },
    ],
  },
  {
    title: 'Financial Projections & Funding',
    icon: TrendingUp,
    description: 'Build credible 3-5 year financial projections, funding round narratives, and use-of-funds breakdowns for investor decks.',
    prompts: [
      {
        tag: 'Projections',
        title: '3-Year Financial Projection Framework',
        prompt: `Help me structure 3-year financial projections for my business plan:
Business type: [TYPE]
Current monthly revenue: [AMOUNT]
Current monthly costs: [AMOUNT]
Expected monthly growth rate: [PERCENTAGE]
Key cost drivers: [HEADCOUNT, MARKETING, INFRASTRUCTURE, etc.]
Planned funding: [AMOUNT AND TIMING]

Create a framework for:
1. Revenue projections by stream (Year 1 monthly, Year 2-3 quarterly)
2. Cost structure: COGS, Salaries, Marketing, G&A, R&D
3. EBITDA and net income trajectory
4. Key assumptions table with every driver stated explicitly
5. Three scenarios: Conservative, Base Case, Optimistic
6. Key financial milestones: break-even, first $1M ARR, profitability`,
      },
      {
        tag: 'Fundraising',
        title: 'Funding Round Narrative',
        prompt: `Write the funding section of our business plan:
Funding stage: [Pre-seed / Seed / Series A]
Amount raising: [AMOUNT]
Pre-money valuation: [VALUATION OR "TBD"]
Use of funds: [BRIEF OVERVIEW]
Previous funding: [ANY PRIOR INVESTMENT]
Target close date: [DATE]

Write:
1. Funding ask overview (1 clear paragraph)
2. Use of funds breakdown — allocate across: Product & Engineering, Sales & Marketing, Operations, Hiring, Working Capital
3. Milestones this funding enables (3-5 specific, measurable outcomes)
4. Why now — market timing argument (2-3 sentences)
5. Return potential narrative for investors (exit scenarios in 5-7 years)
6. Terms overview if relevant`,
      },
      {
        tag: 'Cash Flow',
        title: 'Cash Flow & Runway Analysis',
        prompt: `Help me write the cash flow and runway section:
Current monthly burn rate: [AMOUNT]
Current cash in bank: [AMOUNT]
Expected monthly revenue next 12 months: [MONTH-BY-MONTH or AVERAGE]
Major planned expenses: [LIST]
Funding received or expected: [AMOUNT AND TIMING]

Provide:
1. Current runway calculation (months at current burn)
2. Post-funding runway (if fundraising)
3. Monthly cash flow narrative for next 12 months
4. Break-even analysis — when does revenue cover burn?
5. Key financial risk factors and mitigation strategies
6. Sensitivity analysis — impact if revenue is 20% below projection`,
      },
    ],
  },
  {
    title: 'Operations & Go-to-Market',
    icon: Users,
    description: 'Define your operational structure, team, go-to-market strategy, and execution roadmap for the business plan.',
    prompts: [
      {
        tag: 'GTM',
        title: 'Go-to-Market Strategy Section',
        prompt: `Write the go-to-market strategy for our business plan:
Product: [WHAT YOU ARE LAUNCHING]
Target customer: [WHO YOU ARE SELLING TO]
Geography: [MARKETS YOU ARE ENTERING]
Sales model: [DIRECT / CHANNEL / SELF-SERVE / HYBRID]
Marketing budget: [MONTHLY BUDGET]
Sales team: [SIZE AND STRUCTURE]

Structure:
1. GTM strategy overview (channels, segments, sequence)
2. Acquisition strategy by channel (SEO, paid, sales, partnerships, events)
3. Conversion funnel: Awareness → Interest → Decision → Purchase
4. Sales process for B2B (stages, timelines, key stakeholders)
5. Customer success and retention strategy
6. Launch timeline: Month 1-3 tactical plan with actions and owners`,
      },
      {
        tag: 'Team',
        title: 'Management Team Section',
        prompt: `Write the management team section for our business plan:
Team members to include:
- [NAME 1], [ROLE], background: [KEY EXPERIENCE]
- [NAME 2], [ROLE], background: [KEY EXPERIENCE]
- [NAME 3], [ROLE], background: [KEY EXPERIENCE]
Advisors: [LIST ANY ADVISORS AND THEIR RELEVANCE]
Key hiring needs: [ROLES TO FILL IN NEXT 12 MONTHS]

Write:
1. Team overview paragraph (why this team is uniquely positioned to win)
2. Individual bios (3-4 sentences each, focusing on relevant wins and skills)
3. Advisor section (why each advisor adds value to this business specifically)
4. Hiring plan (roles, timing, and why each hire is critical to growth)
5. Organisational structure (who reports to whom as you scale)`,
      },
      {
        tag: 'Operations',
        title: 'Operations Plan Section',
        prompt: `Write the operations plan section of the business plan:
Business type: [PRODUCT / SERVICE / MARKETPLACE / SaaS]
Current team size: [NUMBER]
Key operational processes: [LIST YOUR MAIN BUSINESS PROCESSES]
Technology stack: [KEY TOOLS AND PLATFORMS]
Location: [OFFICE / REMOTE / HYBRID]
Key suppliers or partners: [LIST]

Cover:
1. Day-to-day operations overview
2. Key business processes and how they scale with growth
3. Technology infrastructure and tools
4. Supply chain or delivery mechanism (if physical product)
5. Quality control and customer experience standards
6. Key operational risks and contingency plans`,
      },
    ],
  },
  {
    title: 'Growth Strategy & Scaling',
    icon: Lightbulb,
    description: 'Articulate your long-term growth strategy, expansion plans, product roadmap, and scaling milestones.',
    prompts: [
      {
        tag: 'Growth',
        title: 'Growth Strategy & Scaling Roadmap',
        prompt: `Write the growth strategy section of the business plan:
Current stage: [DESCRIBE WHERE YOU ARE NOW]
Year 1 goal: [REVENUE / USER / MARKET SHARE TARGET]
Year 3 goal: [BIGGER TARGET]
Growth levers: [PRODUCT, SALES, MARKETING, PARTNERSHIPS]
Geographic expansion plan: [MARKETS IN ORDER OF ENTRY]
Product expansion plan: [NEW FEATURES OR PRODUCTS PLANNED]

Write:
1. Growth strategy narrative (how we get from here to there)
2. Short-term growth drivers (Year 1: quick wins and primary focus areas)
3. Medium-term scaling (Year 2-3: systems and teams that enable scale)
4. Long-term vision (Year 4-5: market leadership, expansion, exit potential)
5. Key metrics that prove strategy is working (leading and lagging indicators)`,
      },
      {
        tag: 'Expansion',
        title: 'Market Expansion Strategy',
        prompt: `Help me write the market expansion section:
Current market: [WHERE YOU CURRENTLY OPERATE]
Target new markets: [GEOGRAPHIES OR SEGMENTS TO EXPAND INTO]
Expansion timeline: [WHEN AND IN WHAT ORDER]
Localisation requirements: [LANGUAGE, REGULATION, PRODUCT ADAPTATION]
Required investment per market: [ESTIMATE]

Cover:
1. Expansion rationale — why these markets and why now
2. Market entry strategy for each new market (prioritised list)
3. Localisation and adaptation requirements per market
4. Regulatory and compliance considerations
5. Resource requirements: team, budget, partnerships needed
6. Success metrics and decision gates for each market`,
      },
      {
        tag: 'Exit',
        title: 'Exit Strategy & Return on Investment',
        prompt: `Write the exit strategy section for investor-facing business plan:
Business type: [YOUR BUSINESS]
Projected Year 5 revenue: [AMOUNT]
Projected Year 5 EBITDA: [AMOUNT]
Industry comparable multiples: [REVENUE OR EBITDA MULTIPLES]
Likely exit paths: [IPO / STRATEGIC ACQUISITION / PE BUYOUT / SECONDARY]

Write:
1. Exit strategy overview (why investors will get returns)
2. Three exit scenarios with estimated valuations (conservative/base/optimistic)
3. Potential strategic acquirers (name 5 companies who might acquire us and why)
4. IPO pathway (if applicable — revenue thresholds, timeline)
5. Expected return on investment for current round investors
6. Key value creation milestones that maximise exit valuation`,
      },
    ],
  },
];

const faqs = [
  {
    question: 'Can ChatGPT write a complete business plan for me?',
    answer: 'ChatGPT can generate strong drafts for every section of a business plan — executive summary, market analysis, financial projections, operations, and growth strategy. However, for investor-grade plans, you will need to verify market data, plug in your actual financial numbers, and review it with domain expertise. Use ChatGPT to dramatically accelerate the writing process, then refine with real data.',
  },
  {
    question: 'What is the standard structure of a business plan?',
    answer: 'A standard business plan includes: Executive Summary, Company Overview, Market Analysis (TAM/SAM/SOM, competitors, customer segments), Products and Services, Marketing and Sales Strategy, Operations Plan, Management Team, Financial Projections (P&L, cash flow, balance sheet), and Funding Requirements. The order and emphasis vary depending on the audience — investors, banks, or internal strategy documents.',
  },
  {
    question: 'How do I write financial projections with ChatGPT?',
    answer: 'Use ChatGPT to build the structure and narrative of your financial projections. Provide your current revenue, growth rate assumptions, cost structure, and business model. Ask it to create a framework with revenue by stream, COGS, operating expenses, EBITDA, and cash flow. Then populate the numbers in a spreadsheet. ChatGPT is excellent at explaining assumptions, writing the financial narrative, and identifying which metrics matter most for your business type.',
  },
  {
    question: 'What makes a business plan compelling to investors?',
    answer: 'Investors look for: (1) a clear, massive market opportunity; (2) a compelling problem and differentiated solution; (3) evidence of traction or early validation; (4) a strong, credible team; (5) realistic but ambitious financial projections with clear assumptions; (6) a defensible competitive moat; and (7) a clear path to return on investment. ChatGPT can help you structure and sharpen each of these elements.',
  },
  {
    question: 'How is a business plan for a bank different from one for investors?',
    answer: 'Bank business plans focus on loan repayment capacity, collateral, cash flow stability, and credit risk — banks want to know you can reliably service debt. Investor business plans focus on growth potential, market size, and exit returns — investors want to see 10x+ return potential. Your ChatGPT prompts should specify the audience so the tone, risk framing, and financial emphasis are calibrated appropriately.',
  },
  {
    question: 'How long should a business plan be?',
    answer: 'Length depends on purpose: investor-facing plans are typically 15-25 pages (excluding appendices), bank loan plans can be 20-40 pages with detailed financials, accelerator applications are often 5-10 pages or pitch deck format, and internal strategy documents vary widely. An executive summary standalone should be 1-2 pages. Always prioritise quality and clarity over length — a sharp, focused 15-page plan beats a padded 40-page document.',
  },
  {
    question: 'Can I use ChatGPT for the market research section?',
    answer: "ChatGPT can help structure your market research section and provide general industry context, but its training data has a knowledge cutoff. For current market size statistics, growth rates, and industry reports, supplement ChatGPT with sources like Statista, IBISWorld, Gartner, McKinsey, or government databases. Use ChatGPT to write the narrative and synthesise data you provide, rather than as a primary source for specific statistics.",
  },
  {
    question: 'What financial projections should a startup include?',
    answer: 'Startups should include: (1) Revenue projections by stream (monthly Year 1, quarterly Year 2-3); (2) Cost structure (COGS, headcount, marketing, G&A); (3) P&L income statement; (4) Cash flow statement; (5) Balance sheet (simplified); (6) Key unit economics (CAC, LTV, gross margin); (7) Funding and use of proceeds; (8) Break-even analysis; and (9) Key assumptions underlying all projections. Three scenarios (base/bull/bear) add credibility.',
  },
  {
    question: 'How do I make the competitive analysis section stand out?',
    answer: 'Go beyond a simple feature comparison table. Structure it as: (1) market landscape overview with clear category definition; (2) direct vs. indirect competitors; (3) honest assessment of competitor strengths; (4) your differentiated positioning on 2-3 key axes customers care about; (5) sustainable competitive advantages (moat analysis); and (6) why incumbents cannot easily replicate your approach. Use frameworks like the competitive positioning matrix to visualise your differentiation.',
  },
  {
    question: 'Should I include an exit strategy in my business plan?',
    answer: 'For investor-facing business plans, yes — including an exit strategy demonstrates you understand the investment thesis and have thought about how investors will get returns. Common exits include strategic acquisition, private equity buyout, IPO, or management buyout. Name realistic potential acquirers in your space, reference comparable exit multiples, and outline the value creation milestones that will maximise valuation. For bank loans or internal plans, an exit strategy is less critical.',
  },
];

export default function BusinessPlansPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best ChatGPT Prompts for Business Plans — Investor-Ready Templates',
    description: 'Copy-ready ChatGPT prompts for writing every section of a business plan: executive summary, market analysis, financial projections, and growth strategy.',
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
    <div className="min-h-screen text-white" style={{ background: '#020905' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-4" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
            <Target size={12} /> Business Planning
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">ChatGPT Prompts for Business Plans</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Write investor-ready business plans faster. Copy-ready prompts for every section — from executive summary to financial projections.
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

        {/* Reference: Business Plan Structure */}
        <div className="mb-12 rounded-lg border p-6" style={{ borderColor: borderCol, background: bgDark }}>
          <h2 className="text-lg font-bold text-white mb-1">Business Plan Structure at a Glance</h2>
          <p className="text-gray-400 text-sm mb-4">Essential sections for a complete, investor-grade business plan.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { section: '1. Executive Summary', note: 'Hook investors in 1-2 pages — most important section' },
              { section: '2. Company Overview', note: 'Mission, vision, legal structure, history' },
              { section: '3. Market Analysis', note: 'TAM/SAM/SOM, trends, customer segments, competition' },
              { section: '4. Products & Services', note: 'What you sell, differentiation, IP, roadmap' },
              { section: '5. Marketing & Sales', note: 'GTM strategy, channels, sales process, retention' },
              { section: '6. Operations Plan', note: 'Team, processes, technology, supply chain' },
              { section: '7. Management Team', note: 'Founders, key hires, advisors — why you win' },
              { section: '8. Financial Projections', note: 'P&L, cash flow, unit economics, scenarios' },
              { section: '9. Funding Requirements', note: 'Ask, use of funds, milestones unlocked' },
              { section: '10. Exit Strategy', note: 'Return pathway for investors (acquisition/IPO)' },
            ].map(item => (
              <div key={item.section} className="rounded-lg border p-3" style={{ borderColor: borderCol, background: '#050e0a' }}>
                <div className="font-medium text-white text-sm mb-0.5">{item.section}</div>
                <div className="text-xs text-gray-400">{item.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reference: Audience Comparison */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-2">Business Plan by Audience</h2>
          <p className="text-gray-400 text-sm mb-5">Tailor your emphasis based on who will read the plan.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { audience: 'Investor (VC/Angel)', focus: 'Market size, growth, team, exit potential, unit economics', tone: 'Ambitious, data-driven, returns-focused' },
              { audience: 'Bank / Lender', focus: 'Cash flow stability, collateral, debt service capacity, risk', tone: 'Conservative, credible, financially detailed' },
              { audience: 'Grant Body', focus: 'Social impact, innovation, alignment with grant criteria', tone: 'Mission-driven, outcomes-focused, evidence-based' },
              { audience: 'Internal Strategy', focus: 'Operational clarity, resource allocation, team alignment', tone: 'Practical, detailed, execution-focused' },
              { audience: 'Accelerator', focus: 'Problem clarity, traction, founder insight, scalability', tone: 'Concise, energetic, vision-forward' },
              { audience: 'Strategic Partner', focus: 'Synergies, market access, shared value creation', tone: 'Collaborative, complementary, mutually beneficial' },
            ].map(item => (
              <div key={item.audience} className="rounded-lg border p-4" style={{ borderColor: borderCol, background: bgDark }}>
                <div className="font-semibold text-white mb-1">{item.audience}</div>
                <div className="text-xs text-gray-400 mb-2">{item.focus}</div>
                <div className="text-xs font-medium" style={{ color: accent }}>Tone: {item.tone}</div>
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
              { label: 'AI for Executives Prompts', href: '/ai-for-executives-prompts' },
              { label: 'AI Prompts Supply Chain', href: '/ai-prompts-supply-chain' },
              { label: 'AI Prompts Notion', href: '/ai-prompts-notion' },
              { label: 'ChatGPT Prompts PowerPoint', href: '/chatgpt-prompts-powerpoint' },
              { label: 'AI Prompts Marketing Strategy', href: '/ai-prompts-marketing-strategy' },
              { label: 'AI Prompts Data Analysis', href: '/ai-prompts-data-analysis' },
              { label: 'Manus AI Prompts', href: '/manus-ai-prompts' },
              { label: 'ChatGPT Prompts Content Writing', href: '/chatgpt-prompts-content-writing' },
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
