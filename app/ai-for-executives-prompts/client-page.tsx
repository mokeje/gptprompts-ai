'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Target, Users, TrendingUp, Shield, Brain, MessageSquare } from 'lucide-react';

const accent = '#3B82F6';
const borderCol = '#0a1628';
const bgDark = '#030509';

const CopyCard = ({ title, prompt, tag }: { title: string; prompt: string; tag: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div
      className="rounded-lg border p-5 transition-colors"
      style={{ borderColor: borderCol, background: bgDark }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = `${accent}60`)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = borderCol)}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full border" style={{ borderColor: `${accent}40`, color: accent }}>{tag}</span>
          <h3 className="text-white font-semibold mt-1">{title}</h3>
        </div>
        <button onClick={handleCopy} className="shrink-0 text-gray-400 transition-colors hover:text-blue-400">
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
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors"
        style={{ background: bgDark }}
      >
        <span className="font-medium text-white pr-4">{item.question}</span>
        {open ? <ChevronUp size={18} className="shrink-0" style={{ color: accent }} /> : <ChevronDown size={18} className="shrink-0 text-gray-400" />}
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed" style={{ background: bgDark }}>
          {item.answer}
        </div>
      )}
    </div>
  );
};

const sections = [
  {
    title: 'Strategic Decision-Making',
    icon: Target,
    description: 'Make better, faster strategic decisions with structured frameworks, scenario analysis, and AI-assisted strategic thinking.',
    prompts: [
      {
        tag: 'Strategy',
        title: 'Conduct a Strategic Situation Analysis',
        prompt: `Act as a senior strategy advisor to a C-suite executive. Help me conduct a comprehensive strategic situation analysis for my organisation.

My context:
- Industry: [describe your industry and competitive landscape]
- Company stage: [early growth / scale-up / mature / turnaround]
- Key strategic challenge: [describe the core strategic question you are facing]
- Relevant facts: [share any key financial, competitive, or market data]

Please structure your analysis as follows:

1. External Environment Analysis (PESTLE):
   - Political and regulatory forces affecting our industry
   - Economic conditions and their implications for our business model
   - Social and demographic trends shaping customer behaviour
   - Technology disruptions creating opportunities or threats
   - Legal and regulatory shifts requiring adaptation
   - Environmental and sustainability pressures

2. Competitive Landscape:
   - Who are the 3-5 most relevant competitors and their strategic positions?
   - What are the current bases of competition in this industry?
   - Where are there underserved customer segments or white spaces?
   - What competitive threats are emerging in the next 2-3 years?

3. Internal Capability Assessment:
   - Where do we have genuine competitive advantages?
   - What are our most significant capability gaps?
   - What assets, relationships, or positions are truly hard to replicate?

4. Strategic Options:
   - Given the above, what are the 3-4 viable strategic directions?
   - What are the key assumptions underlying each option?
   - What are the risks and resource requirements of each?

5. Recommended Direction:
   - Which option best fits our strengths and market opportunity?
   - What are the critical success factors for executing it?
   - What would cause this strategy to fail?`,
      },
      {
        tag: 'Decision Framework',
        title: 'Structure a High-Stakes Strategic Decision',
        prompt: `You are acting as my executive decision-making coach. Help me structure and work through a high-stakes strategic decision using a rigorous framework.

The decision I face:
[Describe the specific decision you need to make]

Decision context:
- Timeline: [when must this decision be made?]
- Key stakeholders: [who is affected or must approve?]
- Resources at stake: [capital, headcount, strategic position]
- Reversibility: [is this decision reversible or a one-way door?]

Please guide me through:

1. Decision Framing:
   - Is this the right question? How might I reframe it for better options?
   - What are the explicit and implicit constraints?
   - What does success look like 1, 3, and 5 years from this decision?

2. Option Generation:
   - What are all the viable options including the status quo?
   - Are there hybrid or phased approaches not yet considered?
   - What would a bold, unconventional choice look like?

3. Evaluation Criteria:
   - What are the 4-6 most important criteria for evaluating options?
   - How should each criterion be weighted relative to others?
   - What data would significantly change the evaluation?

4. Risk Assessment:
   - What are the worst-case outcomes for each option?
   - What are the key assumptions that must hold for each option to succeed?
   - How reversible is each option if new information emerges?

5. Decision and Commitment:
   - Which option do you recommend and why?
   - What are the first three actions to take after the decision?
   - How will you know if the decision was right — and by when?`,
      },
      {
        tag: 'Scenario Planning',
        title: 'Build Executive Scenario Plans for Uncertainty',
        prompt: `Help me build a scenario planning framework for executive strategy sessions when facing high uncertainty.

Planning context:
- Strategic horizon: [1 year / 3 years / 5 years]
- Key uncertainties we face: [describe 3-5 major uncertainties]
- Industries or trends driving uncertainty: [describe]
- Purpose of this scenario exercise: [annual strategy / board offsite / M&A planning / etc.]

Please build:

1. Identifying Critical Uncertainties:
   - Distinguish between trends (predictable) and genuine uncertainties (unpredictable)
   - Select the 2 most critical, independent uncertainties to build scenarios around
   - Explain why these two drive the most strategic divergence

2. Four Scenario Narratives:
   - Scenario A (optimistic): both uncertainties resolve favourably
   - Scenario B (mixed positive): one uncertainty resolves well, one adversely
   - Scenario C (mixed challenging): one resolves adversely, one well
   - Scenario D (adverse): both uncertainties resolve unfavourably
   - For each: vivid narrative, key assumptions, headline implications

3. Strategic Implications by Scenario:
   - What are the strategic priorities and resource requirements in each?
   - Which of our current strategic bets pay off across all scenarios?
   - Which bets are highly scenario-dependent (only work in 1-2 scenarios)?
   - What strategic options should we keep open regardless of which scenario unfolds?

4. Robust Strategy Identification:
   - Strategies that work reasonably well across all scenarios (robust core)
   - Contingent strategies to activate when a scenario becomes clear
   - Early indicators (triggers) that a specific scenario is materialising

5. Board and Executive Communication:
   - How to present scenarios without alarming the board
   - Recommended decision-making rhythm tied to scenario triggers
   - How to embed scenario thinking into annual planning cycle`,
      },
      {
        tag: 'M&A Strategy',
        title: 'Evaluate a Strategic Acquisition Opportunity',
        prompt: `Act as an experienced M&A advisor. Help me evaluate a potential strategic acquisition for my company.

Deal context:
- Acquisition target: [brief description of target company]
- Deal rationale: [why is this acquisition being considered?]
- Preliminary valuation range: [if known]
- Our strategic priorities: [what strategic goals should this serve?]

Please structure a rigorous evaluation across:

1. Strategic Fit Assessment:
   - Does this target accelerate our core strategy or represent a detour?
   - What capabilities, markets, customers, or technologies does it add?
   - What synergies are realistic — revenue synergies vs cost synergies?
   - How does this affect our competitive position vs key rivals?

2. Financial Assessment Framework:
   - What financial metrics should we examine (revenue, EBITDA, growth rate, churn, gross margin)?
   - How do we value this business: DCF, comparable transactions, revenue multiples?
   - What is a sensible EBITDA multiple range for this type of business?
   - What are the key value drivers and destruction risks?

3. Due Diligence Priorities:
   - Top 10 questions to answer in commercial due diligence
   - Financial due diligence red flags to watch for
   - People and culture risk assessment
   - Technology, IP, and data asset evaluation

4. Integration Planning:
   - What is the integration thesis (standalone vs full integration)?
   - What are the highest-risk integration workstreams?
   - How do we retain key talent through the transition?
   - 100-day integration plan framework

5. Decision Recommendation:
   - Walk me through the key questions whose answers determine whether to proceed
   - What price discipline should we apply?
   - What are the no-go criteria that would kill the deal?`,
      },
    ],
  },
  {
    title: 'Organizational Leadership & Culture',
    icon: Users,
    description: 'Lead high-performance organisations, shape culture intentionally, build talent pipelines, and create the conditions for execution excellence.',
    prompts: [
      {
        tag: 'Culture',
        title: 'Diagnose and Shape Organisational Culture',
        prompt: `Act as an organisational effectiveness consultant. Help me diagnose the current state of our organisational culture and design a plan to evolve it.

Our context:
- Organisation size: [number of employees]
- Industry and company stage: [describe]
- Culture challenge: [describe what is not working about the current culture]
- Desired future state: [what kind of culture do you aspire to?]

Please provide:

1. Culture Diagnostic Framework:
   - Key indicators of culture health: employee engagement, attrition, decision speed, innovation rate, trust levels
   - How to assess current culture: surveys, interviews, observation, artefact analysis
   - The difference between espoused values and values-in-action
   - How to identify culture carriers (positive models) and culture blockers

2. Culture Assessment Findings Structure:
   - Current strengths to protect and amplify
   - Identified dysfunction patterns and their root causes
   - Gaps between aspired culture and current reality
   - How culture varies across the organisation (geography, function, seniority)

3. Culture Change Design:
   - The four levers of culture change: symbols, systems, behaviours, and stories
   - How to define 3-5 specific, observable behavioural expectations
   - What leaders must personally model differently (the most powerful signal)
   - How to update people systems (hiring, performance, promotion) to reinforce new culture

4. Implementation Roadmap:
   - Phase 1 (months 1-3): diagnostic, leadership alignment, initial symbolic actions
   - Phase 2 (months 4-12): system changes, behaviour embedding, stories and recognition
   - Phase 3 (months 13-24): culture reinforcement, measurement, course correction

5. Measurement and Accountability:
   - Culture KPIs to track quarterly
   - How to hold leaders accountable for culture, not just results
   - Annual culture assessment and reporting to the board`,
      },
      {
        tag: 'Executive Team',
        title: 'Build and Optimise the Executive Leadership Team',
        prompt: `Help me build and optimise an executive leadership team (ELT) that is capable of leading the organisation through its next growth phase.

Our situation:
- Organisation size and stage: [describe]
- Current ELT composition: [describe roles and any known gaps]
- Strategic challenges ahead: [what does the next 3 years require?]
- Leadership culture: [collaborative / siloed / high-performing / dysfunctional]

Please cover:

1. ELT Design Principles:
   - What size and composition does the ELT need at our stage?
   - Which functional roles should be at the table and which should report below ELT level?
   - How to balance functional expertise vs enterprise leadership capability
   - The role of the CEO vs the ELT in governance and decisions

2. ELT Assessment Framework:
   - How to assess each executive on: strategic thinking, execution, team leadership, cross-functional collaboration, external stakeholder management
   - Performance vs potential matrix for the team
   - How to assess team dynamics (trust, conflict, accountability, results)
   - Identifying capability gaps for the strategic agenda ahead

3. ELT Effectiveness Improvement:
   - How to design effective ELT meetings (strategic vs operational vs governance)
   - Building a shared strategic agenda the full team owns
   - Eliminating silos and improving cross-functional decision-making
   - How to have difficult conversations about individual and team performance

4. Talent Decisions:
   - Framework for when to develop, move, or exit an executive
   - How to handle the transition of a long-serving executive who has outgrown their role
   - External hire vs internal promotion trade-offs at senior levels
   - Onboarding a new C-suite executive for speed to impact

5. Succession Planning:
   - How to identify and develop internal successors for every ELT role
   - Emergency succession vs planned succession planning
   - How to present succession plans to the board with credibility`,
      },
      {
        tag: 'Talent Strategy',
        title: 'Design an Executive Talent and Succession Strategy',
        prompt: `Help me design a comprehensive talent and succession strategy for a senior leadership team.

Our talent context:
- Organisation size: [employees]
- Industry and growth ambitions: [describe]
- Critical roles to succession plan: [list top roles]
- Current talent management maturity: [ad hoc / basic / structured / sophisticated]

Please design:

1. Critical Role Identification:
   - Framework for identifying the 20 most critical roles in the organisation
   - How to assess a role's criticality: impact, scarcity, succession depth
   - Ensuring the list reflects future strategic needs, not just current org chart

2. Succession Readiness Assessment:
   - How to assess internal candidates: performance, potential, readiness timing
   - The 9-box grid: how to use it and its limitations
   - Emergency succession plan (who leads tomorrow if the incumbent leaves today?)
   - Planned succession (12-24 month development pipeline for each critical role)

3. Executive Development:
   - Individual development plan design for high-potential leaders
   - Stretch assignments and rotational roles as development tools
   - Executive coaching programme design and ROI measurement
   - How to use external education, board exposure, and peer networks

4. Talent Acquisition for Senior Roles:
   - Build vs buy decision framework for critical capabilities
   - Executive search process: brief design, candidate assessment, selection
   - How to assess cultural fit at the senior level without creating homogeneity
   - Onboarding programme that accelerates time-to-impact for external hires

5. Board Reporting on Talent:
   - What talent and succession metrics to report to the board
   - How to present talent risks and mitigation plans
   - Connecting talent strategy to business strategy in board narrative`,
      },
      {
        tag: 'OKRs',
        title: 'Design and Implement a Company OKR System',
        prompt: `Help me design and implement an Objectives and Key Results (OKR) system for a company of 100-500 employees.

Our context:
- Company stage and industry: [describe]
- Previous goal-setting experience: [none / MBO / balanced scorecard / early OKR attempt]
- Main motivation for OKRs: [describe what you are trying to solve]
- Available time for implementation: [quarterly / semi-annual / annual cycle]

Please design:

1. OKR System Architecture:
   - Company-level OKRs (top 3-5 objectives for the year)
   - Department-level OKRs (aligned to company objectives)
   - Team and individual-level OKRs (where appropriate)
   - The right level of autonomy vs alignment at each tier

2. OKR Writing Principles:
   - What makes a great Objective (inspirational, qualitative, time-bound)
   - What makes great Key Results (quantitative, leading or lagging, 3-5 per objective)
   - Common OKR mistakes: tasks disguised as KRs, easily achievable KRs, too many OKRs
   - The difference between committed OKRs and aspirational OKRs

3. OKR Cadence and Rhythm:
   - Annual company OKR setting process and timeline
   - Quarterly OKR refresh: what changes and what stays
   - Weekly check-in format: confidence score updates, not status reporting
   - Mid-quarter review: early intervention when OKRs are off-track

4. Common OKR Pitfalls and How to Avoid Them:
   - Sandbagging: setting easy targets to guarantee achievement
   - Disconnection: OKRs that do not connect to strategy
   - Overload: too many OKRs at every level
   - Compliance culture: OKRs as a bureaucratic exercise vs a strategic tool

5. Technology and Tooling:
   - When to use a dedicated OKR tool vs a simple spreadsheet or Notion
   - Integration with performance management systems
   - How to make OKR progress visible without creating overhead

Provide a company-level OKR template for a growth-stage company.`,
      },
    ],
  },
  {
    title: 'Financial Planning & Performance',
    icon: TrendingUp,
    description: 'Drive financial performance with rigorous planning, sharp analysis, and clear communication of financial results to boards and investors.',
    prompts: [
      {
        tag: 'Financial Planning',
        title: 'Build an Annual Financial Planning Process',
        prompt: `Act as a CFO advisor. Help me design a rigorous annual financial planning and budgeting process for a company of 100-1000 employees.

Our planning context:
- Business model: [SaaS / product / services / marketplace / etc.]
- Revenue range: [current annual revenue]
- Planning maturity: [spreadsheet-based / basic FP&A / structured / sophisticated]
- Key planning challenges: [describe what is not working]

Please design:

1. Planning Calendar and Governance:
   - 12-week planning timeline from kick-off to board approval
   - Who owns which parts of the plan (CEO, CFO, functional leaders)
   - Governance: steering committee meetings, review sessions, sign-off process
   - How to balance top-down targets with bottom-up build

2. Strategic Framework Before the Numbers:
   - How to set the strategic context before anyone builds a spreadsheet
   - Revenue growth assumptions and their basis
   - Investment thesis: where are we investing and why?
   - Key trade-offs to make explicit before the model is built

3. Financial Model Structure:
   - Revenue model: by product, channel, geography, and customer segment
   - Operating expense model: headcount plan, OPEX categories, CAPEX
   - Unit economics model: CAC, LTV, payback period, gross margin
   - Cash flow and working capital forecast
   - Sensitivity analysis: what if the top 3 assumptions are wrong?

4. Functional Planning:
   - How to run headcount planning effectively and avoid over-hiring
   - How to evaluate and prioritise investment requests
   - How to set department budgets that are challenging but achievable
   - How to handle scope changes during the year (budget amendments)

5. Board Budget Presentation:
   - Structure of the board budget pack
   - How to present scenarios (base, upside, downside) clearly
   - KPIs the board expects to see alongside financials
   - How to handle board challenges and questions confidently`,
      },
      {
        tag: 'Performance Management',
        title: 'Design an Executive Performance Management Dashboard',
        prompt: `Help me build an executive performance management framework with a dashboard that gives the CEO and board clear visibility into business performance.

Our business context:
- Business model: [describe]
- Revenue: [range]
- Key business drivers: [what drives growth and profitability in your model?]
- Current reporting quality: [describe what is missing or broken]

Please design:

1. Performance Framework Structure:
   - Four perspectives: financial performance, customer performance, operational performance, organisational performance
   - Recommended KPIs per perspective (4-6 per category)
   - Leading vs lagging indicators: which to prioritise for early warning
   - How to connect operational KPIs to financial outcomes

2. CEO Dashboard (Weekly):
   - Revenue: bookings, revenue, churn, NRR / net revenue retention
   - Operations: key throughput metrics, quality, delivery
   - Finance: cash position, burn rate, runway, key cost drivers
   - People: headcount vs plan, open roles, attrition rate

3. Board Reporting (Monthly / Quarterly):
   - Executive summary: headline performance in 1 paragraph
   - Financials: P&L vs budget, cash flow, balance sheet highlights
   - Commercial: sales pipeline, customer metrics, win/loss
   - Operational: key ops metrics and capacity
   - Strategic: progress against annual priorities and milestones
   - Risks: top 5 risks and mitigation status

4. Performance Review Rhythm:
   - Daily: CEO pulse check (2-3 critical metrics)
   - Weekly: operating review with ELT (financial + operational)
   - Monthly: full performance review with board pack
   - Quarterly: strategy vs actual review and reforecast

5. Accountability and Action:
   - How to move from dashboard review to action
   - Escalation protocol when a KPI crosses a red threshold
   - How to avoid dashboard fatigue and maintain focus on what matters`,
      },
      {
        tag: 'Investor Relations',
        title: 'Prepare for Investor or Board Financial Reviews',
        prompt: `Help me prepare for a high-stakes financial review with our board of directors or investors.

Review context:
- Type of review: [quarterly board meeting / investor update / fundraising pitch / audit committee]
- Audience: [board composition — financial expertise, industry expertise]
- Current performance vs plan: [describe how you are tracking]
- Key issues or concerns to address: [what difficult questions do you expect?]

Please help me:

1. Narrative Construction:
   - How to tell a coherent story from the financial results
   - How to explain performance variance without sounding defensive
   - Turning challenges into "here is what we learned and here is our response"
   - Connecting financial performance to strategic progress

2. Key Messages Preparation:
   - Draft the 3 headline messages for this review
   - Supporting data points for each headline
   - The "so what" for each message: what does it mean for the future?

3. Anticipating Difficult Questions:
   - What are the 10 hardest questions a board member could ask?
   - How to answer each with confidence, honesty, and forward focus
   - How to handle questions you do not have an answer to in the moment
   - Body language and framing for delivering difficult news

4. Slide Structure:
   - Opening: executive summary and key messages (1 slide)
   - Financial highlights: revenue, gross margin, EBITDA, cash (2-3 slides)
   - Business performance: key operational KPIs (2 slides)
   - Outlook: full-year forecast and confidence level (1 slide)
   - Risks and issues: top risks with mitigation plans (1 slide)
   - Appendix: detailed financials, team updates, strategic progress

5. Pre-Meeting Preparation:
   - Questions to ask your team before the board meeting
   - How to align the executive team on the key messages
   - Logistics: pre-read distribution timing, format, length`,
      },
      {
        tag: 'Capital Allocation',
        title: 'Design a Capital Allocation Framework for Executives',
        prompt: `Help me build a rigorous capital allocation framework for prioritising strategic investments across a company with competing funding demands.

Capital allocation context:
- Annual discretionary budget: [available capital for investment decisions]
- Competing investment demands: [describe the types of investments being considered]
- Current allocation process: [ad hoc / committee / bottoms-up / CEO-led]
- Business stage and priorities: [growth / profitability / both]

Please design:

1. Capital Allocation Philosophy:
   - How to define the company's capital allocation hierarchy (organic growth, M&A, return to shareholders)
   - Return threshold setting: minimum IRR or payback period to approve investments
   - Portfolio approach: balance between core investments, growth bets, and options
   - How to think about opportunity cost in capital allocation decisions

2. Investment Evaluation Framework:
   - Tier 1 investments: strategic necessities (run the business)
   - Tier 2 investments: growth investments with clear ROI (grow the business)
   - Tier 3 investments: strategic options with uncertain but high-upside returns
   - How to score and rank investments across tiers when capital is constrained

3. Business Case Requirements by Investment Size:
   - Under threshold: department head approval with standard form
   - Mid-tier: CFO approval with business case including NPV / IRR / payback
   - Major investments: board approval with strategic rationale, financial model, risk assessment
   - Templates and minimum standards for each tier

4. Portfolio Review Process:
   - Quarterly review of in-flight investments: are they delivering expected returns?
   - How to kill underperforming investments without destroying morale
   - Annual portfolio retrospective: what did we learn from last year's capital allocation?
   - How to create a learning loop that improves future allocation decisions

5. Communicating Capital Allocation to the Board:
   - How to present capital priorities with strategic rationale
   - Trade-off framing: "If we fund X we cannot fund Y — here is why X wins"
   - How to handle board members who champion specific investments`,
      },
    ],
  },
  {
    title: 'Risk Management & Resilience',
    icon: Shield,
    description: 'Identify, quantify, and manage enterprise risks — from strategic threats to operational vulnerabilities — with frameworks that drive board confidence.',
    prompts: [
      {
        tag: 'Enterprise Risk',
        title: 'Build an Enterprise Risk Management Framework',
        prompt: `Act as a chief risk officer advisor. Help me build a comprehensive enterprise risk management (ERM) framework for a mid-to-large organisation.

Our risk context:
- Industry and regulatory environment: [describe]
- Organisation size: [revenue and employees]
- Current risk management maturity: [none / basic / structured / advanced]
- Recent or emerging risk events: [describe any recent risk incidents]

Please design:

1. Risk Taxonomy (Risk Universe):
   - Strategic risks: competitive disruption, M&A integration, strategy execution
   - Financial risks: credit risk, liquidity risk, currency, commodity prices
   - Operational risks: process failure, technology failure, fraud, supply chain
   - Compliance risks: regulatory change, legal exposure, data privacy, sanctions
   - Reputational risks: brand, ESG, leadership conduct
   - External risks: macroeconomic, geopolitical, natural disaster, cyber

2. Risk Assessment Methodology:
   - Inherent risk scoring: probability (1-5) × impact (1-5) = inherent risk score
   - Control effectiveness assessment (strong / adequate / weak / absent)
   - Residual risk calculation after controls
   - Risk appetite definition: which risks are we willing to accept and at what level?

3. Risk Register Design:
   - Fields: risk ID, category, description, owner, inherent rating, controls, residual rating, trend, actions
   - How to maintain a living risk register vs a static annual exercise
   - Risk ownership allocation: which function owns each risk category
   - Escalation criteria: when does a risk go to executive vs board level?

4. Risk Governance Structure:
   - Three lines of defence model (business, risk function, internal audit)
   - Risk committee structure: management risk committee, board risk committee
   - Risk reporting cadence: monthly to management, quarterly to board
   - How to integrate risk management into strategic planning and investment decisions

5. Board Risk Reporting:
   - Top risk heat map structure and narrative
   - Emerging risk identification and escalation process
   - How to present risk without creating board panic
   - Connecting risk management to strategic resilience`,
      },
      {
        tag: 'Crisis Management',
        title: 'Build an Executive Crisis Management Playbook',
        prompt: `Help me build an executive crisis management playbook for handling major organisational crises.

Crisis types to plan for:
1. Reputational crisis (media attack, executive misconduct, product failure)
2. Cybersecurity breach affecting customer data
3. Financial crisis (liquidity event, fraud discovery, major loss)
4. Operational crisis (major service outage, safety incident, product recall)
5. Leadership crisis (sudden CEO departure, regulatory investigation of a leader)

For each crisis type, please provide:

1. Crisis Classification System:
   - Severity levels: Level 1 (minor, manageable), Level 2 (significant, limited scope), Level 3 (major, existential risk)
   - Criteria for each level with examples
   - Escalation triggers: who activates which level?

2. Crisis Response Structure:
   - Crisis Management Team composition for each level
   - Decision authority matrix during a crisis
   - Crisis command centre setup and operation
   - Communication cadence: internal and external

3. First 24 Hours Protocol:
   - Immediate assessment steps (what do we know and not know?)
   - Who to notify and in what sequence (board, regulators, customers, employees, media)
   - Initial public statement principles (what to say and what not to say)
   - Operational containment actions

4. Stakeholder Communication During a Crisis:
   - Board communication: frequency, format, tone
   - Employee communication: how to maintain trust and reduce panic
   - Customer communication: transparency, remediation, timeline
   - Media handling: spokesperson preparation, key messages, no-go statements

5. Recovery and Learning:
   - How to manage the transition from crisis response to recovery
   - After-action review structure
   - How to communicate resolution without overpromising
   - Playbook update and resilience investment decisions post-crisis`,
      },
      {
        tag: 'Regulatory Risk',
        title: 'Navigate Regulatory Risk and Compliance Strategy',
        prompt: `Help me build an executive-level regulatory risk management and compliance strategy.

Regulatory context:
- Industry: [describe — financial services, healthcare, tech, food, energy, etc.]
- Jurisdictions of operation: [countries and regions]
- Current compliance maturity: [describe compliance function size and sophistication]
- Recent or upcoming regulatory changes: [describe]

Please cover:

1. Regulatory Risk Landscape:
   - How to map all applicable regulations by jurisdiction and business activity
   - Prioritising regulations by probability of change and business impact
   - Monitoring process for regulatory horizon scanning
   - How to assess cumulative regulatory burden across the business

2. Compliance Programme Design:
   - Essential compliance programme components: policy, training, monitoring, testing, investigation, reporting
   - How to structure a proportionate compliance function (in-house vs outsourced)
   - Compliance culture: making compliance part of the business rather than a police function
   - Board and executive accountability for compliance outcomes

3. Regulatory Relationship Management:
   - How to build constructive relationships with key regulators
   - Proactive engagement strategy: when and how to approach regulators
   - How to handle regulatory inquiries and investigations professionally
   - Trade association involvement as a regulatory influence channel

4. Preparing for Regulatory Change:
   - How to assess the strategic and financial impact of proposed regulation
   - Build a business case for compliance investment before regulation takes effect
   - Competitive analysis: how will this regulation affect us vs our competitors?
   - Lobbying and advocacy strategy for material regulatory proposals

5. Board and Audit Committee Reporting:
   - Compliance programme health metrics to report quarterly
   - How to present regulatory risk without creating unnecessary board alarm
   - Whistleblower programme status and significant issues
   - Annual compliance programme effectiveness assessment`,
      },
      {
        tag: 'Business Continuity',
        title: 'Build an Executive Business Continuity Programme',
        prompt: `Design a comprehensive business continuity programme for a CEO or COO to present to the board.

Our organisation:
- Industry and operational profile: [describe]
- Critical business processes: [list 5-7 most critical processes]
- Current BCP maturity: [none / basic / structured / robust]
- Most likely disruption scenarios: [describe]

Please provide:

1. Business Impact Analysis (BIA):
   - How to identify and rank critical business processes
   - Maximum tolerable downtime (MTD) for each critical process
   - Recovery time objective (RTO) and recovery point objective (RPO) for each process
   - Interdependency mapping: which processes depend on which systems and teams

2. Continuity Strategy Design:
   - Technology resilience: backup systems, cloud failover, DR strategy
   - People resilience: cross-training, remote work capability, succession for key roles
   - Facility resilience: alternative work locations, split-team operations
   - Supplier continuity: backup suppliers, safety stock, dual sourcing

3. Crisis Communication Plan:
   - Employee communication tree and emergency contact system
   - Customer notification protocols by disruption type
   - Regulator and investor communication requirements
   - Social media and public communication protocols

4. BCP Testing and Exercises:
   - Tabletop exercise design for executive team (what decisions are needed under each scenario?)
   - Full DR test methodology and frequency
   - BCP audit and third-party review programme
   - How to fix gaps identified in testing without crying wolf to the board

5. Programme Governance:
   - BCP ownership: CEO accountability, COO operational ownership, functional BCP owners
   - Annual BCP review and update requirements
   - Board reporting on BCP readiness and test results
   - Integration with enterprise risk management framework`,
      },
    ],
  },
  {
    title: 'AI Transformation Leadership',
    icon: Brain,
    description: 'Lead your organisation into the AI era with a clear strategy, responsible governance, and a culture that embraces AI-augmented work.',
    prompts: [
      {
        tag: 'AI Strategy',
        title: 'Develop an Enterprise AI Strategy',
        prompt: `Act as an AI strategy advisor to a CEO or COO. Help me develop a comprehensive enterprise AI adoption strategy.

Our context:
- Industry and business model: [describe]
- Company size: [revenue and employees]
- Current AI maturity: [none / experimental / early adoption / scaling]
- Strategic goals: [describe the 2-3 most important business outcomes you want AI to support]
- Key concerns: [cost, risk, talent, change management, ethics]

Please build a full AI strategy:

1. AI Opportunity Assessment:
   - Where in our value chain does AI create the most value?
   - Use case inventory by function: product, operations, marketing, sales, finance, HR, legal
   - Prioritisation framework: value potential × feasibility × risk × time to value
   - Top 5 priority use cases with business case summary for each

2. Build vs Buy vs Partner:
   - When to build proprietary AI (custom models, fine-tuned models)
   - When to buy AI products and platforms (e.g., Copilot, Salesforce AI, industry tools)
   - When to partner with AI specialists for implementation
   - Decision framework for each use case category

3. Data and Infrastructure:
   - Data readiness assessment: quality, governance, accessibility
   - AI infrastructure requirements: compute, APIs, data platforms
   - Make-or-buy for data infrastructure
   - Data governance and privacy requirements for AI

4. Governance and Responsible AI:
   - AI governance structure: who approves AI deployments?
   - Responsible AI principles for our organisation
   - Risk assessment framework for AI systems
   - EU AI Act compliance considerations if operating in Europe

5. Organisation and Culture:
   - AI capability building: upskilling current employees vs hiring AI talent
   - Change management: how to bring the organisation along on the AI journey
   - AI adoption metrics: how to measure progress and value realisation
   - Leadership behaviours that accelerate AI adoption`,
      },
      {
        tag: 'AI Governance',
        title: 'Build an AI Governance Framework for the Board',
        prompt: `Help me build a board-level AI governance framework to oversee responsible AI deployment across the organisation.

Our AI context:
- Current AI deployment scope: [describe what AI systems are in use or planned]
- Industry regulatory context: [EU AI Act, GDPR, financial regulation, healthcare regulation, etc.]
- Board sophistication on AI: [none / basic / moderate / sophisticated]
- Key governance concerns: [risk, ethics, legal, reputational, competitive]

Please design:

1. Board Oversight Structure:
   - Which board committee should oversee AI (audit, risk, or dedicated AI committee)?
   - Minimum frequency and depth of AI reporting to the board
   - Board AI literacy programme: what do board members need to understand?
   - Independence and expertise requirements for AI oversight

2. AI Risk Categories for Board Oversight:
   - High-risk AI systems (EU AI Act definition) and their governance requirements
   - AI model risk: bias, accuracy degradation, data drift
   - AI operational risk: reliance on AI systems, failure modes
   - AI reputational risk: unintended outputs, explainability requirements
   - Competitive risk: falling behind peers in AI adoption

3. AI Governance Policies:
   - AI use policy: what can employees use AI for and what is prohibited?
   - AI development standards: testing, validation, documentation requirements before deployment
   - Third-party AI vendor assessment framework
   - AI incident response and escalation procedure

4. Responsible AI Principles:
   - Fairness: how to detect and mitigate bias in AI systems
   - Transparency and explainability requirements by system type
   - Human oversight: which decisions must always have a human in the loop?
   - Privacy and data minimisation in AI systems

5. Board Reporting on AI:
   - Quarterly AI programme dashboard: deployments, risks, value, issues
   - Annual AI strategy review: alignment with business strategy, competitive position
   - Material AI incident reporting standards
   - How to present AI to investors and the market`,
      },
      {
        tag: 'Change Management',
        title: 'Lead Organisational AI Transformation',
        prompt: `Help me design a comprehensive change management plan for leading an organisation through AI transformation.

Our transformation context:
- Organisation size: [employees]
- Industry: [describe]
- AI transformation ambition: [describe what you want the organisation to look like in 3 years]
- Current change readiness: [high / medium / low — describe key barriers]
- Change history: [how have past major transformations gone?]

Please design:

1. Transformation Vision and Case for Change:
   - How to articulate a compelling AI transformation vision at the leadership level
   - Building urgency: what happens if we do not transform?
   - Framing AI as augmentation not replacement (critical for employee buy-in)
   - Key messages by audience: board, executives, managers, frontline employees

2. Transformation Roadmap:
   - Phase 1 — Foundation (months 1-6): governance, literacy, quick wins
   - Phase 2 — Acceleration (months 7-18): scaling pilots, capability building
   - Phase 3 — Embed and Optimise (months 19-36): AI as a normal part of work
   - Governance structure and investment requirements per phase

3. Capability Building Programme:
   - AI literacy training for all employees (what AI is and is not, how to use it)
   - Role-specific AI training by function (marketing, finance, operations, HR, sales)
   - Advanced AI skills development for power users and AI champions
   - How to identify, develop, and leverage AI champions across the organisation

4. Workforce and Culture:
   - Addressing job security concerns honestly and constructively
   - How to redesign roles that are significantly augmented by AI
   - Recognition and reward for AI adoption and innovation
   - Psychological safety to experiment, fail, and learn with AI

5. Measuring Transformation Progress:
   - AI adoption metrics: active users, use case coverage, value delivered
   - Productivity and quality improvements attributable to AI
   - Employee sentiment on AI: pulse survey questions
   - Board-level AI transformation scorecard`,
      },
      {
        tag: 'AI ROI',
        title: 'Build the Business Case for AI Investment',
        prompt: `Help me build a rigorous business case for major AI investment to present to the board and secure funding.

Investment context:
- AI initiative: [describe the specific AI programme or platform you are seeking to fund]
- Investment required: [total cost including software, implementation, training, ongoing]
- Expected benefits: [describe anticipated value creation]
- Time horizon: [3 or 5 year analysis period]

Please help me build:

1. Cost Baseline (Status Quo):
   - Current cost of the process or function AI will transform
   - Cost components: labour, technology, error and rework, opportunity cost
   - How to calculate the fully-loaded cost per unit or transaction
   - Baseline that the AI investment will be compared against

2. AI Implementation Cost Model:
   - One-time costs: software licensing, implementation, integration, data preparation, training
   - Ongoing costs: annual SaaS fees, maintenance, model updates, support
   - Internal resource costs: project team, change management, ongoing operations
   - Contingency and risk buffer recommendations

3. Benefit Quantification:
   - Productivity improvements: time savings × headcount × fully-loaded cost per hour
   - Quality improvements: error reduction × cost per error or rework
   - Revenue enablement: faster cycle times, better conversion, improved customer retention
   - Strategic value: competitive positioning, capabilities unlocked, future optionality

4. Financial Analysis:
   - NPV calculation at 3 and 5 years
   - IRR and payback period
   - Sensitivity analysis: base, upside, and downside cases
   - Break-even analysis: when does the investment start generating positive returns?

5. Risk and Non-Financial Benefits:
   - Execution risks and mitigation strategies
   - Non-financial benefits: employee experience, compliance, resilience
   - Competitive risk of NOT investing (cost of inaction)
   - How to stage the investment to manage risk (phase-gated approach)`,
      },
    ],
  },
  {
    title: 'Stakeholder Communication',
    icon: MessageSquare,
    description: 'Communicate with confidence and clarity to boards, investors, employees, customers, and the media — in any situation.',
    prompts: [
      {
        tag: 'Board Communication',
        title: 'Design a World-Class Board Communication System',
        prompt: `Help me build a board communication system that ensures our board is well-informed, engaged, and adding maximum strategic value.

Our board context:
- Board size and composition: [number of directors, mix of skills]
- Meeting frequency: [quarterly / six-weekly / monthly]
- Current board pack quality: [describe what works and what does not]
- Key improvement areas: [too much information / not enough context / late delivery / etc.]

Please design:

1. Board Pack Structure and Design Principles:
   - Maximum length: why shorter is better and how to achieve it
   - The executive summary: one page that tells the whole story
   - How to separate information (for noting) from decisions (for approval)
   - Pre-read materials vs meeting time: what to send vs discuss
   - How to handle sensitive information that cannot be in a written pack

2. Board Meeting Architecture:
   - Agenda design: time allocation by topic, strategic vs governance balance
   - Consent agenda for routine approvals
   - How to create space for strategic discussion rather than status reporting
   - Managing the board meeting: role of the Chair and CEO
   - Executive sessions: when and how to use them

3. Between-Meeting Communication:
   - Monthly CEO letter: purpose, format, and tone
   - When to contact individual board members between meetings
   - How to handle a board member who over-communicates or micromanages
   - Board portal best practices for document management

4. Presenting to the Board as an Executive:
   - How to structure a board presentation for maximum impact
   - The difference between presenting to the board vs managing the board
   - Handling board questions without getting defensive
   - How to deliver bad news to the board (early, clearly, with a plan)

5. New Board Member Onboarding:
   - What every new board member needs to understand about the business
   - Induction programme structure (first 90 days)
   - How to build a productive relationship between CEO and new board member`,
      },
      {
        tag: 'All-Hands',
        title: 'Design High-Impact All-Hands and Town Hall Meetings',
        prompt: `Help me design a series of high-impact all-hands and town hall meetings for a company of 200-2000 employees.

Our communication context:
- Company size and locations: [describe]
- Current all-hands format: [describe what you do today]
- Employee sentiment: [how engaged and informed do employees feel?]
- Key communication challenges: [too much noise / not enough transparency / remote disconnect / etc.]

Please design:

1. All-Hands Meeting Architecture:
   - Quarterly all-hands: strategic update, financial performance, key initiatives
   - Monthly town hall: operational update, Q&A, recognition
   - Annual kick-off meeting: annual strategy, culture, celebration
   - Structure and time allocation for each format

2. Content Framework for Each Meeting:
   - The three things every employee needs to understand after each meeting
   - How to connect business performance to every employee's work
   - Making data accessible: how to present financial and strategic data to all employees
   - Stories and recognition: the most underused element of town halls

3. Q&A Excellence:
   - How to create a genuine Q&A culture (not a staged performance)
   - Handling hard questions live: what to say and what not to say
   - Anonymous question submission and how to handle sensitive questions
   - How to follow up on questions you could not answer live

4. Remote and Hybrid Considerations:
   - How to run all-hands that are equally engaging for remote and in-person employees
   - Production quality requirements for virtual all-hands
   - Breakout discussion formats for larger all-hands meetings
   - How to reach employees who could not attend live

5. Measurement and Improvement:
   - Post all-hands pulse survey: 3 questions to ask every time
   - Metrics to track: attendance, engagement score, message recall
   - How to use feedback to continuously improve the format
   - How the CEO should receive and act on feedback from all-hands`,
      },
      {
        tag: 'Investor Relations',
        title: 'Build an Investor Relations Strategy and Narrative',
        prompt: `Help me build an investor relations strategy and company narrative for a growth company preparing for fundraising or a public market.

Our context:
- Company stage: [Series B/C / pre-IPO / public]
- Revenue range: [current ARR or revenue]
- Growth rate: [YoY growth]
- Key investor concerns: [what are the most common questions or objections?]
- Fundraising timeline: [when are you planning to raise?]

Please build:

1. Investment Thesis Development:
   - How to articulate a compelling investment thesis in one paragraph
   - The five elements every investment thesis must address: market, product, team, traction, business model
   - How to quantify the total addressable market credibly
   - Differentiation: why will this company win rather than a competitor?

2. Financial Narrative:
   - How to tell a compelling story from your financial metrics
   - Key metrics investors expect to see by stage: ARR, growth rate, NRR, CAC, LTV, gross margin, burn rate, runway
   - How to explain and contextualise unit economics
   - Bridging from current performance to future potential credibly

3. Pitch Deck Structure for Executive Audiences:
   - Slide 1: the hook — what is the problem and why now?
   - Slides 2-3: market size and dynamics
   - Slides 4-5: product and differentiation
   - Slides 6-7: business model and economics
   - Slides 8-9: traction and momentum
   - Slides 10-11: team and execution capability
   - Slides 12-13: financial projections and ask

4. Investor Q&A Preparation:
   - The 20 hardest investor questions and how to answer each confidently
   - How to handle the "why will you win?" and "what keeps you up at night?" questions
   - Navigating questions about competitors without undermining them or yourself
   - How to follow up after a meeting to maintain momentum

5. Ongoing Investor Communication:
   - Quarterly investor update format and content
   - How to maintain investor relationships between fundraising rounds
   - Handling underperformance with existing investors
   - Managing information rights and board observer dynamics`,
      },
      {
        tag: 'External Communications',
        title: 'Manage Media and Public Communications as a CEO',
        prompt: `Help me build a media and external communications strategy for a CEO of a growth company.

Our communications context:
- Company profile: [stage, industry, public vs private]
- Current communications activity: [describe media presence, thought leadership, PR]
- Communications goals: [brand building / talent attraction / customer trust / investor profile]
- Key risks: [what are the most sensitive topics or potential crises?]

Please design:

1. CEO Communications Strategy:
   - Defining your communication goals: who are you trying to reach and why?
   - Key messages: the 3-5 things you want every audience to know about you and your company
   - Voice and positioning: authentic thought leadership vs corporate PR
   - Channel strategy: LinkedIn, earned media, speaking, podcasts, industry events

2. Media Relations:
   - How to build relationships with key journalists in your sector
   - When to pursue proactive media coverage vs reactive PR
   - How to prepare for a media interview: key messages, bridging techniques, what to avoid
   - How to handle an investigative journalist or hostile interview

3. LinkedIn and Thought Leadership:
   - CEO LinkedIn strategy: posting frequency, content mix, engagement approach
   - The three types of content that build executive authority: perspectives, stories, evidence
   - How to ghostwrite effectively with an authentic voice
   - Measuring thought leadership impact: reach, engagement, inbound opportunities

4. Crisis Communications:
   - First 24 hours of a public crisis: what to say, when, and on which channels
   - How to communicate transparently without creating legal liability
   - How to rebuild trust after a reputational incident
   - The difference between a crisis apology and a non-apology

5. Speaking and Events:
   - How to select which conferences and panels to participate in
   - Preparing a signature talk that builds your thought leadership platform
   - How to use speaking engagements to support business development
   - Managing speaking requests when you are time-constrained`,
      },
    ],
  },
];

const faqs = [
  {
    question: 'How can C-suite executives use AI prompts most effectively in their day-to-day work?',
    answer: 'Executives can use AI most effectively by deploying it in three ways: as a thinking partner for structuring complex decisions and stress-testing assumptions, as a drafter for communications, presentations, and reports that would otherwise take hours, and as an analyst to quickly synthesise large amounts of information before strategic discussions. The key is to provide rich context — the more background you give an AI assistant, the more useful and specific the output. Senior leaders should not hesitate to share the full complexity of their situation, as AI tools work best when treated as a well-briefed but junior thought partner rather than an oracle. Time saved on drafting and analysis can be reinvested in judgment-intensive work where human experience is irreplaceable.',
  },
  {
    question: 'What is the most valuable way for a CEO to use AI personally?',
    answer: 'The highest-value use of AI for a CEO is as a preparation and thinking tool. Using AI before major decisions — to pressure-test your logic, identify blind spots, and stress-test key assumptions — can meaningfully improve decision quality. CEOs also consistently find value in using AI to prepare for difficult conversations and important presentations, drafting multiple versions of messages and selecting the best elements of each. A third high-value area is accelerating the synthesis of large volumes of information: board packs, analyst reports, management information, and competitive intelligence can all be quickly summarised, freeing executive attention for the nuances that truly require human judgment. The executives who get the most from AI are those who treat it as a thought partner, not a replacement for strategic thinking.',
  },
  {
    question: 'How should boards be thinking about AI governance and oversight?',
    answer: 'Boards need to move from passive awareness of AI to active governance. This means establishing clear oversight of where AI is being used in the business and what risks it creates, ensuring executive management has appropriate AI governance policies and risk frameworks in place, and reviewing material AI deployments before they go live in customer-facing or high-risk applications. The EU AI Act (applicable to any company doing business in Europe) creates specific legal obligations for boards to understand. At a minimum, boards should be receiving quarterly AI programme updates including use case inventory, risk assessments for high-risk AI systems, and governance policy compliance status. Some boards are creating dedicated AI sub-committees, though for most companies integrating AI oversight into the existing risk or audit committee is more practical in the near term.',
  },
  {
    question: 'What are the most common strategic planning mistakes executives make?',
    answer: 'The most common strategic planning mistake is confusing strategy with goal-setting. A true strategy makes explicit trade-off choices about where to compete and where to not compete, what capabilities to build, and what to say no to. Simply setting aspirational targets without making those choices is not a strategy. A second common mistake is over-planning at the expense of adaptive execution — in fast-moving environments, a rigid 5-year strategic plan can become a liability. The best executives combine a clear strategic direction (relatively stable) with highly adaptive annual plans and a robust strategic review cadence. A third mistake is insufficient attention to implementation: McKinsey research consistently finds that strategy execution failure, not strategy design failure, is the primary cause of strategic underperformance.',
  },
  {
    question: 'How do you build a high-performing executive leadership team?',
    answer: 'Building a high-performing executive team requires getting three things right simultaneously: the right people in the right roles, a shared strategic agenda everyone genuinely owns, and a culture of trust and productive conflict within the team. Research by Google and Lencioni consistently shows that psychological safety — the belief that you can speak up without being penalised — is the foundation of team effectiveness, but at the executive level this must be paired with accountability and a commitment to collective results over functional fiefdoms. CEOs who build great executive teams invest heavily in team process (how we make decisions, how we handle disagreement, how we hold each other accountable) not just team composition. The composition matters, but even a talented team can underperform without the right operating norms and mutual trust.',
  },
  {
    question: 'What financial metrics does every CEO need to track closely?',
    answer: 'Every CEO should maintain a short list of metrics that collectively tell the story of business health across four dimensions. Financial health: revenue growth rate, gross margin, EBITDA or operating cash flow, and cash runway. Customer health: net revenue retention or net dollar retention, churn rate, customer acquisition cost versus lifetime value, and net promoter score. Operational health: the two or three operational metrics most predictive of revenue in your specific business model (varies by industry). People health: voluntary attrition, employee engagement score, and pipeline coverage for critical open roles. The specific metrics vary significantly by business model — a SaaS company tracks ARR and NRR, a consumer business tracks DAU and conversion — but the four-dimensional framework is universal.',
  },
  {
    question: 'How should a CEO communicate a major strategic change to the organisation?',
    answer: 'Research on large-scale organisational change consistently shows that communication is the most frequently under-invested element of transformation — leaders typically communicate change seven to ten times less than employees need to feel genuinely informed and engaged. Effective communication of major strategic change follows a sequence: start with the why (create genuine urgency and understanding of why the status quo is not an option), then move to the what (be specific about what is changing and what is not), then address the impact on individuals (employees process change through the personal lens first), and finally sustain communication throughout the journey not just at the announcement. CEOs who are most effective at major change communication appear personally committed and visible, acknowledge uncertainty honestly rather than projecting false confidence, and listen as much as they broadcast.',
  },
  {
    question: 'What is the right role of AI in strategic decision-making?',
    answer: 'AI is most valuable in strategic decision-making as a tool to accelerate analysis, surface alternatives, and stress-test reasoning — but the judgment, values, and accountability for strategic decisions must remain with the humans making them. Specific high-value AI applications in strategy include: synthesising large amounts of market data and competitive intelligence quickly, modelling and comparing multiple strategic scenarios, identifying logical inconsistencies or blind spots in a proposed strategy, drafting communications and presentations to multiple stakeholder audiences, and facilitating structured decision-making processes. AI is not yet reliable for strategic decisions that require deep contextual understanding of company culture, stakeholder relationships, or ethical trade-offs — areas where human judgment, experience, and accountability remain essential and irreplaceable.',
  },
  {
    question: 'How can executives build resilience against major business disruptions?',
    answer: 'Executive-level resilience building requires action on three time horizons simultaneously. In the near term, every senior leader should ensure their business has basic continuity capabilities: documented critical processes, cross-trained teams for key functions, and tested backup systems for the most critical technology. In the medium term, executives should be running scenario planning exercises at least annually that force the leadership team to think through how they would respond to major disruptions — pandemic recurrence, cyber attack, key supplier failure, geopolitical disruption to a key market. In the long term, the most resilient companies are those with diversified revenue streams, strong balance sheets that provide a liquidity buffer, and cultures of adaptability that mean teams respond to unexpected disruption with creativity rather than paralysis.',
  },
  {
    question: 'What should executives know about the EU AI Act?',
    answer: 'The EU AI Act (effective from 2024-2026 in phases) creates a risk-based regulatory framework for AI systems used in or affecting people in the European Union. Executives with any EU market exposure need to understand four things: first, the Act classifies AI systems into risk tiers — prohibited (e.g., social scoring), high-risk (healthcare, employment, critical infrastructure, financial services), limited risk, and minimal risk — with compliance obligations that increase with risk level. Second, high-risk AI systems require extensive documentation, human oversight mechanisms, and conformity assessments before deployment. Third, companies using third-party AI products are also subject to the Act as deployers — this includes off-the-shelf AI tools used in hiring, credit scoring, or customer service. Fourth, non-compliance carries fines of up to 3-7% of global annual turnover, making this a board-level issue not just a legal or compliance matter.',
  },
];

export default function ExecutivePromptsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI Prompts for Executives: Strategic Leadership, Finance & AI Transformation',
    description: 'Expert AI prompts for C-suite and senior leaders — strategic decision-making, organisational leadership, financial planning, risk management, AI transformation, and stakeholder communication.',
    author: { '@type': 'Organization', name: 'GPTPrompts' },
    datePublished: '2025-01-01',
    dateModified: '2025-06-01',
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen" style={{ background: '#010204' }}>
        {/* Hero */}
        <div className="border-b" style={{ borderColor: borderCol }}>
          <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
            <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border mb-6" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
              <Target size={12} /> C-Suite & Executive Leadership
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              AI Prompts for <span style={{ color: accent }}>Executives</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mb-8">
              24 expert prompts across 6 categories — from strategic decision-making and organisational leadership to financial planning, risk management, AI transformation, and stakeholder communication.
            </p>
            <div className="flex flex-wrap gap-3">
              {['24 Prompts', '6 Categories', 'Copy in 1 Click', 'Free to Use'].map(label => (
                <span key={label} className="text-xs px-3 py-1 rounded-full border text-gray-400" style={{ borderColor: borderCol }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Prompt Sections */}
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="mb-16">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}>
                    <Icon size={18} style={{ color: accent }} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <p className="text-gray-400 mb-6 ml-12">{section.description}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  {section.prompts.map(p => (
                    <CopyCard key={p.title} {...p} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Reference Block 1: Executive AI Use Case Matrix */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-2">Executive AI Use Case Matrix</h2>
            <p className="text-gray-400 mb-6">Where AI creates the most value for senior leaders across six key business functions.</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { function: 'Strategy', uses: 'Situation analysis, scenario planning, competitive intelligence synthesis, strategic option evaluation, board narrative drafting' },
                { function: 'Finance', uses: 'Financial model drafting, variance analysis narrative, board pack preparation, investor Q&A preparation, budget process management' },
                { function: 'Operations', uses: 'Process documentation, operational review preparation, KPI dashboard design, efficiency analysis, supplier evaluation frameworks' },
                { function: 'Human Resources', uses: 'Job description drafting, performance review preparation, OKR framework design, talent strategy development, culture assessment design' },
                { function: 'Sales & Marketing', uses: 'Pitch deck narrative, investor materials, customer communication drafting, win/loss analysis, go-to-market strategy frameworks' },
                { function: 'Risk & Compliance', uses: 'Risk register structure, crisis communication drafting, regulatory impact assessment, board risk narrative, BCP framework design' },
              ].map(item => (
                <div key={item.function} className="rounded-lg border p-4" style={{ borderColor: borderCol, background: bgDark }}>
                  <h3 className="font-semibold mb-2" style={{ color: accent }}>{item.function}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.uses}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reference Block 2: Executive Analysis Prompt Template */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-2">The Executive AI Prompt Format</h2>
            <p className="text-gray-400 mb-4">Use this structure when prompting AI for strategic analysis. The more context you provide, the more useful the output.</p>
            <div className="rounded-lg border p-5" style={{ borderColor: borderCol, background: bgDark }}>
              <pre className="text-sm leading-relaxed overflow-auto" style={{ color: accent, fontFamily: 'monospace' }}>{`Act as a [specific advisor role: strategy consultant / CFO advisor / risk expert / communications coach].

CONTEXT:
- My company: [industry, size, stage, business model]
- My role: [your title and decision-making authority]
- The situation: [describe what is happening and why it matters now]
- Relevant facts: [key data, financials, or competitive context]

MY SPECIFIC CHALLENGE:
[State the exact question or problem you need help with in 2-3 sentences]

CONSTRAINTS:
- Timeline: [when must this be done?]
- Stakeholders: [who else is involved or affected?]
- What I've already tried: [what approaches have you already considered?]

WHAT I NEED:
[Be specific: a framework / a draft communication / a decision recommendation /
a list of options / a structured analysis / a set of probing questions]

FORMAT:
[Specify length and format: bullet points / prose / table / slide outline /
numbered recommendations / executive summary followed by detail]`}</pre>
            </div>
            <p className="text-gray-500 text-sm mt-3">
              The role-play framing ("Act as a senior strategy advisor") consistently produces more rigorous, senior-calibre output than generic prompts. Providing constraints and specifying format prevents generic responses.
            </p>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-400 mb-6">Key questions from senior leaders about AI, strategy, and executive effectiveness.</p>
            <div className="space-y-2">
              {faqs.map(item => <FAQ key={item.question} item={item} />)}
            </div>
          </div>

          {/* Related Pages */}
          <div className="border-t pt-12" style={{ borderColor: borderCol }}>
            <h2 className="text-xl font-bold text-white mb-6">Related Prompt Collections</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Supply Chain Prompts', href: '/ai-prompts-supply-chain' },
                { label: 'Notion Workspace Prompts', href: '/ai-prompts-notion' },
                { label: 'Manus AI Prompts', href: '/manus-ai-prompts' },
                { label: 'Marketing Strategy', href: '/ai-prompts-marketing-strategy' },
                { label: 'Data Analysis Prompts', href: '/ai-prompts-data-analysis' },
                { label: 'PowerPoint Prompts', href: '/chatgpt-prompts-powerpoint' },
                { label: 'Leadership AI Prompts', href: '/ai-for-leadership-prompts' },
                { label: 'Risk Management Prompts', href: '/ai-for-risk-management-prompts' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border px-4 py-3 text-sm text-gray-400 transition-colors hover:text-white"
                  style={{ borderColor: borderCol, background: bgDark }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${accent}50`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = borderCol; }}
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
