'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Rocket, Target, TrendingUp, Users, Search, Map } from 'lucide-react';

const accent = '#FF6B35';

interface CopyCardProps {
  title: string;
  prompt: string;
  tag: string;
}

function CopyCard({ title, prompt, tag }: CopyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-4 p-4 border rounded-lg border-[#2a1a0f] hover:border-[#FF6B35] transition-colors bg-[#0a0604]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>{tag}</span>
      </div>
      <p className="text-white text-sm font-medium mb-2">{title}</p>
      <pre className="text-gray-400 text-sm mb-3 leading-relaxed whitespace-pre-wrap font-sans">{prompt}</pre>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors border"
        style={{
          color: copied ? accent : '#888',
          borderColor: copied ? accent : '#333',
        }}
      >
        {copied ? <><Check size={14} />Copied!</> : <><Copy size={14} />Copy</>}
      </button>
    </div>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

function FAQ({ item }: { item: FAQItem }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-3 border border-[#2a1a0f] rounded-lg overflow-hidden hover:border-[#FF6B35] transition-colors">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between bg-[#0a0604] hover:bg-[#110906] transition-colors"
      >
        <h3 className="font-semibold text-white text-left text-sm">{item.question}</h3>
        {expanded
          ? <ChevronUp size={18} style={{ color: accent }} className="flex-shrink-0" />
          : <ChevronDown size={18} className="flex-shrink-0 text-gray-500" />}
      </button>
      {expanded && (
        <div className="p-4 bg-[#060402] border-t border-[#2a1a0f] text-gray-300 text-sm leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

const faqItems: FAQItem[] = [
  {
    question: 'How should a first-time founder use AI to validate their startup idea?',
    answer: 'Use AI to stress-test your assumptions before spending money. Ask it to steelman the strongest arguments against your idea, identify the 5 most likely reasons it fails, and generate a list of the assumptions you need to validate with real customers. Then use AI to help you design customer discovery interviews and analyse what you hear. AI is best as a sparring partner for thinking — not a substitute for talking to actual potential customers.',
  },
  {
    question: 'What startup metrics should I track to prove traction for investors?',
    answer: 'Focus on metrics that demonstrate product-market fit and unit economics. For SaaS: MRR growth rate, net revenue retention, CAC, and payback period. For marketplaces: GMV, take rate, and liquidity (fill rate). For consumer: DAU/MAU, D7/D30 retention, and viral coefficient. The universal metric is month-over-month growth rate — 15-20% MoM is typically what early-stage investors want to see. Choose 3-5 metrics that best reflect whether customers truly need your product.',
  },
  {
    question: 'How do I use AI to prepare for investor meetings?',
    answer: 'Use AI to anticipate and rehearse hard questions: paste your pitch deck outline and ask it to identify the 10 most challenging questions a skeptical investor would ask. Practice answering each one. Also ask AI to help you benchmark your metrics against comparable funded startups in your space, identify weaknesses in your financial model, and pressure-test your go-to-market assumptions. Going into an investor meeting having faced the hardest questions is more valuable than a polished deck.',
  },
  {
    question: 'What\'s the right time for a startup to start hiring?',
    answer: 'Hire when you have clear evidence of product-market fit and a repeatable process that needs more human capacity to scale — not before. Early hires should expand capacity on what\'s already working, not explore new directions. The most dangerous hire is a senior executive before PMF — they\'ll optimise the wrong things at high cost. The most valuable early hire is usually someone who can do things you can\'t, not duplicate what you can.',
  },
  {
    question: 'How do I build a realistic financial model without a finance background?',
    answer: 'Start with unit economics, not a revenue forecast. Build from the bottom up: how many customers do you need, what does it cost to acquire each one (CAC), how long do they stay (LTV), what\'s your gross margin? From there, build a monthly model for 24 months. Use AI to check your assumptions against benchmarks for your business model. The goal isn\'t precision — it\'s showing that you understand the levers and can achieve positive unit economics. Investors know early forecasts are fiction; they\'re evaluating your thinking.',
  },
  {
    question: 'What should a startup pitch deck include for a seed round?',
    answer: 'The essential slides: Problem (is it real and painful?), Solution (clear and differentiated), Market Size (credible TAM/SAM/SOM), Traction (evidence of PMF), Business Model (how you make money), Go-to-Market (how you acquire customers), Team (why you?), Ask (how much, for what milestones). Keep it to 10-12 slides. Lead with traction if you have it. Investors fund people and markets more than ideas — spend the most time on the team slide and making the problem viscerally real.',
  },
  {
    question: 'How do I figure out the right pricing for my product?',
    answer: 'Start by understanding willingness to pay — interview 20+ potential customers and ask them directly: "At what price would this be too expensive? At what price would you question the quality?" Use AI to model different pricing scenarios and their impact on margin, volume, and LTV/CAC ratio. For SaaS, price to value (what outcome do you deliver?) not cost-plus. Annual billing at a discount improves cashflow and reduces churn. Always test pricing iteratively — most founders undercharge at the start.',
  },
  {
    question: 'What are the most common go-to-market mistakes early-stage startups make?',
    answer: 'The biggest: trying to target everyone (no ICP), spreading acquisition budget across too many channels at once, building features instead of talking to customers, competing on price before establishing value, and ignoring churn while chasing new customers. The antidote is ruthless focus: pick one customer segment, one acquisition channel, one core use case — and go deep until you have proof before expanding. Depth beats breadth at the early stage.',
  },
  {
    question: 'How should a startup founder use AI in their day-to-day work?',
    answer: 'Most valuable use cases: first drafts of investor updates, sales emails, and job descriptions; market research and competitive analysis; stress-testing strategy and decisions; preparing for meetings by anticipating questions; financial model assumption checking; drafting board updates and OKRs. AI saves most time on structured writing tasks that require research. Don\'t use it to skip the thinking — use it to think faster and produce better outputs from your own thinking.',
  },
  {
    question: 'When should a startup raise its next funding round?',
    answer: 'Raise when you\'ve hit the milestones from your current round and have 6 months of runway left — not when you\'re desperate. For a seed-to-Series A raise, typical milestones: $1-2M ARR with strong growth, clear product-market fit (low churn, high NPS), repeatable customer acquisition, and unit economics trending toward profitability. Raise on strength, not necessity. The best time to raise is when you don\'t urgently need to — that\'s when you have the most leverage in negotiations.',
  },
];

export default function AIPromptsForStartupsPage() {
  return (
    <div className="min-h-screen bg-[#060402]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Startups & Founders: Fundraising, GTM, Growth & Strategy',
            description: 'Expert AI prompts for startup founders covering fundraising and pitch strategy, go-to-market planning, customer acquisition, team building, market research, and scaling.',
            image: 'https://gptprompts.ai/startups-og.jpg',
            datePublished: '2026-03-28',
            dateModified: '2026-03-28',
            author: { '@type': 'Organization', name: 'GPT Prompts AI' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="border-b border-[#2a1a0f] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Rocket size={32} style={{ color: accent }} />
            <h1 className="text-4xl font-bold text-white">AI Prompts for Startups</h1>
          </div>
          <p className="text-gray-400 text-lg mb-4">
            Expert prompts for founders at every stage — fundraising, go-to-market, customer acquisition, team building, and scaling from idea to Series A.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Fundraising', 'Go-to-Market', 'Growth', 'Strategy'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium border" style={{ borderColor: accent, color: accent }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Section 1: Fundraising */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Fundraising & Pitch Strategy</h2>
          </div>
          <CopyCard
            tag="Pitch Deck"
            title="Seed round pitch narrative"
            prompt={`Help me build a compelling narrative for my seed round pitch deck.
Company: [company name]
Problem: [problem you solve]
Solution: [your product/service]
Traction: [key metrics — users, revenue, growth rate]
Team: [2-3 sentences on why this team]
Ask: [$amount] to achieve [milestones]

Create a narrative arc that flows across 10 slides. For each slide, give me: the one thing it must communicate, the key supporting point, and what a skeptical investor would challenge.`}
          />
          <CopyCard
            tag="Investor Outreach"
            title="Cold investor outreach email"
            prompt={`Write a cold outreach email to a VC investor at [firm name] who has backed [relevant portfolio company].
Context:
- My startup: [description in one sentence]
- Why them: [specific reason this investor is relevant]
- Traction hook: [most impressive metric or milestone]
- Ask: 20-minute intro call

Keep it under 150 words. Lead with the traction hook. End with a clear, easy CTA. No buzzwords, no "disrupting", no "revolutionary".`}
          />
          <CopyCard
            tag="Due Diligence"
            title="Pre-empt investor due diligence questions"
            prompt={`I'm preparing for a Series A investor due diligence call. My startup is in [industry], with [ARR], [growth rate], and [team size].
Generate the 15 hardest questions a rigorous Series A investor would ask across:
- Unit economics (CAC, LTV, payback period, gross margin)
- Market size and competitive dynamics
- Product and technical risks
- Team gaps and key person dependency
- Scalability of the go-to-market motion

For each question, help me draft a strong, honest answer that acknowledges limitations while showing clear-eyed awareness.`}
          />
          <CopyCard
            tag="Investor Update"
            title="Monthly investor update template"
            prompt={`Write a monthly investor update email template for a [stage] startup that covers:
- KPIs this month (with MoM change): Revenue/MRR, Customer Count, Burn Rate, Runway
- Top 3 wins this month (specific and concrete)
- Top 2 challenges (honest — investors respect transparency)
- What we need from investors (specific ask or introduction)
- Focus for next month

Keep it to 350 words maximum. Tone: confident but honest. Use headers for easy scanning. This should take the founder 20 minutes to fill in each month.`}
          />
        </section>

        {/* Section 2: Go-to-Market */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Rocket size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Product Launch & Go-to-Market</h2>
          </div>
          <CopyCard
            tag="GTM Strategy"
            title="ICP definition and channel strategy"
            prompt={`Help me define my ideal customer profile (ICP) and match it to acquisition channels.
Product: [brief description]
Current customers (if any): [describe your best customers]
Problem solved: [core problem]

For each ICP candidate I describe, tell me:
1. Whether this is a strong ICP (decision-making power, budget, pain severity)
2. Which 2–3 acquisition channels match where this ICP hangs out
3. What the hook/angle should be for this segment
4. Red flags that this might not be the right primary ICP yet`}
          />
          <CopyCard
            tag="Pricing"
            title="Pricing model and packaging strategy"
            prompt={`Help me design a pricing strategy for [product/service].
Current situation: [free, freemium, or paid? any existing price points?]
Target customers: [SMB / mid-market / enterprise]
Core value delivered: [what outcome does your product create?]
Competitors' pricing: [if known]

Recommend:
1. Pricing model (flat rate / per seat / usage-based / tiered / hybrid) with rationale
2. 2-3 pricing tiers with names and what's included at each
3. The one metric to price on that best correlates with value
4. How to test and validate these price points before committing`}
          />
          <CopyCard
            tag="Launch"
            title="Product launch campaign plan"
            prompt={`Create a 6-week product launch plan for [product] targeting [audience].
Include for each week:
- Primary objective
- Key activities (content, outreach, paid, events)
- Expected outcomes / success metrics
- Owner (founder, marketing, sales)

Also include:
- Pre-launch: waitlist or beta strategy
- Launch day: announcement sequence (social, email, PR, community)
- Post-launch: early user feedback loop and iteration plan
Prioritise activities by impact-to-effort ratio.`}
          />
          <CopyCard
            tag="Positioning"
            title="Positioning statement and messaging hierarchy"
            prompt={`Write a positioning statement and messaging hierarchy for [product] targeting [audience].
Category: [what category does your product belong to?]
Target customer: [specific ICP]
Key differentiator: [what do you do that no close competitor does as well?]
Proof point: [one specific evidence point — metric, customer, case study]

Deliverables:
1. One-sentence positioning statement (for Geoffrey Moore's template: "For [customer] who [need], [product] is a [category] that [benefit], unlike [alternative] which [limitation]")
2. Three-level messaging: headline (8 words), subheadline (20 words), expanded (50 words)
3. The 3 objections this positioning might face and how to counter each`}
          />
        </section>

        {/* Section 3: Growth */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Customer Acquisition & Growth</h2>
          </div>
          <CopyCard
            tag="Growth Strategy"
            title="Multi-channel acquisition strategy"
            prompt={`Design a customer acquisition strategy for [startup] with a budget of [$X/month].
Business model: [SaaS / marketplace / consumer / B2B]
ICP: [describe ideal customer]
Stage: [pre-PMF / post-PMF / scaling]

For each of the following channels, assess: likelihood of success for this business, expected CAC range, time to first results, and effort to set up: Content/SEO, Paid Social, Paid Search, Outbound Sales, Partnerships, Community, Virality/Referral.

Then recommend a phased plan: what to do in months 1–3, 4–6, and 7–12, based on prioritising one channel deeply before expanding.`}
          />
          <CopyCard
            tag="Retention"
            title="Churn analysis and retention strategy"
            prompt={`Help me build a retention strategy for [product].
Current situation: [monthly churn rate, typical customer tenure, main reasons customers leave if known]
Product type: [SaaS / subscription / marketplace]

Provide:
1. A framework for segmenting churned customers to find patterns
2. The 3 most common root causes of churn for this business type and how to diagnose which applies to me
3. An early warning system — which in-product behaviours predict churn 30 days before it happens?
4. Intervention playbook: what to do for at-risk customers at 30/60/90 day marks
5. One structural change that would most reduce churn long-term`}
          />
          <CopyCard
            tag="Referral"
            title="Referral programme design"
            prompt={`Design a customer referral programme for [product] that drives [X% of new customers] within 3 months.
Current customer base: [size and engagement level]
Average deal value: [$ amount]
Product type: [B2B / B2C]

Include:
- Reward structure for referrer and referee (and why this combination works)
- The trigger moment — when to ask for a referral in the customer journey
- The ask copy (email + in-app message)
- How to make sharing frictionless
- How to track and attribute referrals
- One viral mechanic that could make this self-propagating`}
          />
          <CopyCard
            tag="PLG"
            title="Product-led growth motion design"
            prompt={`Help me design a product-led growth (PLG) motion for [product].
Current model: [sales-led / marketing-led / no current motion]
Product type: [collaboration tool / analytics / dev tool / other]
Potential free tier value: [what would make a free tier genuinely valuable?]

Design:
1. Free tier scope — what to include and crucially what to gate
2. The natural expansion trigger (what makes users want to upgrade?)
3. Viral/collaboration loop — how does using the product expose it to others?
4. The "aha moment" — what must a new user experience in session 1?
5. Onboarding sequence to get users to the aha moment in <10 minutes`}
          />
        </section>

        {/* Section 4: Team Building */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Team Building & Operations</h2>
          </div>
          <CopyCard
            tag="Hiring"
            title="First hires prioritisation framework"
            prompt={`Help me decide who to hire first as a [stage: pre-seed / seed / Series A] startup.
Current team: [founders and their skills]
Immediate bottleneck: [what is slowing growth most right now?]
6-month goal: [what milestone are you working toward?]

For each potential first hire (engineer, designer, salesperson, marketer, ops):
1. How much would this hire unlock growth given your specific bottleneck?
2. What evidence do you need before this hire is justified?
3. What's the risk of hiring this person too early?
4. Could this be covered by a contractor or part-time hire first?

Recommend my top 1-2 hires in priority order with rationale.`}
          />
          <CopyCard
            tag="Culture"
            title="Company values and culture document"
            prompt={`Help me write a company values document for [startup name].
Context: [what does your company do, what stage are you at, what's your mission?]
Team size: [current headcount]
The problem we want values to solve: [e.g., decision-making without founders in the room, hiring filter, handling disagreements]

For each value you recommend:
- Name (memorable, not generic)
- What it means in practice (2-3 specific examples of the value in action)
- What it explicitly does NOT mean (to prevent misinterpretation)
- How you would test for this in a hiring interview

Aim for 4-5 values max. Avoid "integrity", "excellence", and "customer-first" unless you can make them genuinely specific to your culture.`}
          />
          <CopyCard
            tag="OKRs"
            title="Quarterly OKR framework"
            prompt={`Help me set OKRs for [startup name] for Q[X] [year].
Stage: [pre-seed / seed / Series A]
Previous quarter's results: [key outcomes]
Company priority this quarter: [the one thing that matters most]

For each of these 3 focus areas — [Area 1, Area 2, Area 3] — write:
- One Objective (inspiring, qualitative, time-bound to the quarter)
- 3 Key Results (measurable, specific, binary or quantifiable)
- The one metric that, if achieved, would prove the objective was met

Then: identify the top 3 dependencies or risks that could prevent us from hitting these OKRs.`}
          />
          <CopyCard
            tag="Performance"
            title="Performance review framework for early-stage teams"
            prompt={`Design a lightweight performance review process for a startup with [X] employees at [stage].
Constraints: founders have limited time, process must take <2 hours per employee per quarter, must be honest about performance without bureaucracy.

Include:
- The 3-4 dimensions to evaluate (relevant for a startup context)
- A simple rating rubric that avoids grade inflation
- Questions to guide the review conversation
- How to handle the "this person is great but in the wrong role" scenario
- How to document decisions about raises or equity refreshes
- What NOT to include (to keep it lightweight)`}
          />
        </section>

        {/* Section 5: Market Research */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Search size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Market Research & Validation</h2>
          </div>
          <CopyCard
            tag="Customer Discovery"
            title="Customer discovery interview script"
            prompt={`Write a customer discovery interview script for [startup] targeting [customer type].
We are testing these assumptions:
1. [Assumption 1 — e.g., "This customer type loses >3 hours/week on this problem"]
2. [Assumption 2 — e.g., "They would pay $X/month to solve it"]
3. [Assumption 3 — e.g., "They currently use [workaround] and are unhappy with it"]

The script should:
- Open with rapport-building (not selling)
- Use open questions that expose truth rather than validate our assumptions
- Include follow-up probes for the richest answers
- End with a test of willingness to pay (without pitching)
- Take 30-40 minutes total
Include 5 things NOT to say during a customer discovery interview.`}
          />
          <CopyCard
            tag="Competitive Analysis"
            title="Deep competitive landscape analysis"
            prompt={`Conduct a competitive analysis for [startup] in the [market] space.
Competitors to analyse: [list 4-6 direct and indirect competitors]

For each competitor, cover:
- Positioning and target customer
- Pricing model and price points (if known)
- Key strengths (what they do genuinely well)
- Key weaknesses or gaps
- Recent moves (funding, product launches, partnerships)

Then synthesise:
- The positioning white space none of them own
- The segment that is most underserved
- The most defensible differentiator available to us
- The competitor most likely to move against us first and how`}
          />
          <CopyCard
            tag="Market Sizing"
            title="Bottom-up and top-down market sizing"
            prompt={`Help me size the market for [product/service] credibly for an investor deck.
Product description: [what it does, who buys it, at what price]
Geography: [target market — US, EU, global]

Provide both approaches:
Top-down: total market (cite source) → apply segment filters → realistic addressable market
Bottom-up: number of qualifying companies/consumers × penetration assumption × price point = SAM

For each approach:
- Walk through the calculation step by step
- Identify the assumptions that have the most impact on the result
- Suggest where to find data to validate each assumption
- Give me a range (conservative to optimistic) rather than a single number`}
          />
          <CopyCard
            tag="PMF Testing"
            title="Product-market fit measurement framework"
            prompt={`Help me design a framework to measure product-market fit for [product].
Stage: [beta / early customers / post-launch]
Current user base: [size and how they were acquired]

Include:
1. The Sean Ellis / Superhuman PMF survey (40% "very disappointed" benchmark) — adapted for my product
2. Retention metrics that indicate strong PMF for this business model
3. NPS interpretation: what score range indicates strong enough PMF to scale?
4. Qualitative signals — what would customers say that would prove PMF?
5. The single most honest test of whether we have PMF yet: [proposed question or metric]

Also: what would have to be true for us to be scaling prematurely?`}
          />
        </section>

        {/* Section 6: Scaling */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Map size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Scaling & Strategic Planning</h2>
          </div>
          <CopyCard
            tag="Roadmap"
            title="12-month product and growth roadmap"
            prompt={`Create a 12-month roadmap for [startup] that balances product development and customer growth.
Current state: [ARR/users, stage, key strengths]
Goal in 12 months: [target state — ARR, customers, team size]
Key constraints: [budget, team size, technical debt, other]

For each quarter, define:
- Primary theme (one-sentence focus)
- Top 2 product milestones
- Top 2 growth/commercial milestones
- Key hire or resource decision
- Success metric for the quarter
- Dependencies or risks

Then: identify the 3 assumptions this roadmap depends on being true.`}
          />
          <CopyCard
            tag="Expansion"
            title="Geographic or segment expansion strategy"
            prompt={`We're considering expanding [into a new geography / to a new customer segment]. Current market: [describe]. Proposed expansion: [describe].
Analyse:
1. Market attractiveness: size, growth rate, competitive intensity, regulatory complexity
2. Expansion readiness: do we have PMF strong enough to justify expansion?
3. Localisation requirements: what needs to change (product, pricing, team, partnerships)?
4. Entry strategy: direct, partnership, or acquisition?
5. Resource requirements and expected timeline to profitability in the new market
6. The biggest risk in this expansion and how to mitigate it

Recommend: go / no-go / wait 6 months, with the one piece of evidence that would change your recommendation.`}
          />
          <CopyCard
            tag="Strategy"
            title="Annual strategy and planning session facilitation"
            prompt={`Help me design an annual planning session for a [stage] startup with [team size] people.
Duration: [half-day / full day]
Goal: align the team on priorities for next year and set OKRs

Design an agenda that covers:
- Retrospective: what worked, what didn't, what surprised us this year
- Market review: how has the competitive landscape changed?
- Strategic choices: what are we committing to and what are we saying no to?
- OKR setting for the year and Q1
- Team and resource planning
- Communication: how we'll share the plan with the full team

Include facilitation questions and exercises for each section. Identify the most important decision the team must make during the session.`}
          />
          <CopyCard
            tag="M&A"
            title="Acquisition or partnership evaluation"
            prompt={`Help me evaluate whether to [acquire / partner with] [company/opportunity].
Context: [brief description of the target company and what they do]
Our rationale: [why are we considering this?]
Alternative: [what happens if we don't do this deal?]

Evaluate across:
1. Strategic fit: does this accelerate our core strategy or distract from it?
2. Financial terms: what's a reasonable valuation range and why?
3. Integration complexity: what would it actually take to integrate people, product, and customers?
4. Risk profile: what are the top 5 risks, and which is deal-breaking?
5. Timing: why now? What changes if we wait 6-12 months?

Recommendation: pursue / pass / negotiate harder on [specific term], with the one question we must answer before deciding.`}
          />
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div>
            {faqItems.map((item, i) => (
              <FAQ key={i} item={item} />
            ))}
          </div>
        </section>

        {/* Related Pages */}
        <section className="border-t border-[#2a1a0f] pt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Related Prompts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'AI Prompts for LinkedIn', href: '/ai-prompts-linkedin' },
              { name: 'AI Prompts for Email Writing', href: '/ai-prompts-email-writing' },
              { name: 'ChatGPT Prompts for Google Sheets', href: '/chatgpt-prompts-google-sheets' },
              { name: 'AI Prompts for Marketers', href: '/ai-prompts-for-marketers' },
              { name: 'AI Prompts for Data Analysts', href: '/ai-prompts-for-data-analysts' },
              { name: 'ChatGPT Prompts for Business', href: '/chatgpt-prompts-for-business' },
              { name: 'AI Agent Prompts', href: '/ai-agent-prompts' },
              { name: 'Perplexity AI Prompts', href: '/perplexity-ai-prompts' },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="px-4 py-3 rounded border border-[#2a1a0f] text-gray-300 hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
