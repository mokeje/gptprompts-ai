'use client'

import { useState } from 'react'
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#1E40AF] transition-colors">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono mb-4 max-h-64">
        {prompt}
      </pre>
      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-center gap-2 bg-[#1E40AF] hover:bg-[#1e3a8a] text-white font-medium py-2 px-4 rounded"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy Prompt
          </>
        )}
      </button>
    </div>
  )
}

const FAQItem = ({
  question,
  answer,
  isExpanded,
  onToggle,
}: {
  question: string
  answer: string
  isExpanded: boolean
  onToggle: () => void
}) => {
  return (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-[#1a1a1a] hover:bg-[#252525] transition-colors"
      >
        <span className="font-semibold text-white">{question}</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-[#1E40AF]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#1E40AF]" />
        )}
      </button>
      {isExpanded && (
        <div className="p-4 bg-[#0a0a0a] border-t border-[#2a2a2a] text-gray-300">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function ManagementConsultingPromptsPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How can AI help with business diagnosis and problem identification?',
      answer:
        'AI can quickly analyze large datasets, market trends, and historical performance to identify root causes of problems. It can cross-reference internal data with industry benchmarks, competitive intelligence, and external factors to provide rapid diagnostic frameworks that would typically take weeks of manual analysis.',
    },
    {
      question: 'What role does AI play in strategy development and scenario planning?',
      answer:
        'AI can generate multiple strategic scenarios based on different market conditions, organizational capabilities, and resource constraints. It can model outcomes of different strategies, analyze historical precedents from similar situations, and provide quantitative backing for strategic recommendations that consultants present to clients.',
    },
    {
      question: 'How can AI improve financial analysis and business case development?',
      answer:
        'AI can rapidly build financial models, perform sensitivity analyses across hundreds of variables, and generate detailed business cases with NPV, ROI, and payback period calculations. It can also incorporate Monte Carlo simulations and scenario-based forecasting to stress-test assumptions and identify key value drivers.',
    },
    {
      question: 'Can AI help with organizational structure and operating model design?',
      answer:
        'AI can analyze current organizational structures, benchmark against industry best practices, map process flows, and suggest optimized structures based on span of control, span of knowledge, and critical dependencies. It can also model the impact of proposed changes on key metrics like communication overhead and decision speed.',
    },
    {
      question: 'How should I use AI for market analysis and competitive intelligence?',
      answer:
        'AI can monitor competitor activities, analyze industry trends, track regulatory changes, and identify market opportunities through real-time data collection and analysis. It can synthesize information from multiple sources, identify emerging patterns, and provide structured competitive intelligence reports that inform strategic recommendations.',
    },
    {
      question: 'What ethical considerations should I keep in mind when using AI as a consultant?',
      answer:
        'Maintain transparency about AI role in your analysis, validate AI-generated insights with human expertise, avoid over-relying on AI recommendations without critical review, ensure data privacy and compliance in analysis, and clearly attribute sources of information. AI should augment consultant judgment, not replace it.',
    },
    {
      question: 'How can AI accelerate due diligence processes?',
      answer:
        'AI can rapidly document review, identify key risks, extract financial metrics, assess cultural compatibility, and flag potential deal-breakers. It can also analyze comparable transactions, model valuation scenarios, and provide comprehensive due diligence summaries in a fraction of traditional timelines.',
    },
    {
      question: 'Can AI help with change management and implementation planning?',
      answer:
        'AI can identify implementation risks, map stakeholder impact, create detailed change roadmaps, predict resistance areas, and suggest communication strategies. It can also monitor implementation progress against milestones and highlight deviations early, enabling proactive course corrections.',
    },
    {
      question: 'How should I approach using AI for client presentations and storytelling?',
      answer:
        'Use AI to generate data visualizations, create executive summaries, develop supporting narratives, and simulate different presentation scenarios. However, maintain human judgment in selecting the most compelling story and ensuring recommendations are grounded in client context and realistic constraints.',
    },
    {
      question: 'What are the limitations of AI in management consulting?',
      answer:
        'AI excels at data analysis and pattern recognition but cannot replicate human judgment, stakeholder relationship-building, or nuanced understanding of organizational culture and politics. AI also requires high-quality input data and may miss context-specific factors unique to each engagement. Use AI as a tool to enhance consultant expertise, not replace it.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Management Consulting',
            description:
              'Expert AI prompts designed for management consultants to enhance strategy, analysis, and client recommendations',
            datePublished: '2026-03-29',
            dateModified: '2026-03-29',
            author: {
              '@type': 'Person',
              name: 'Michael Okeje',
            },
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            AI Prompts for{' '}
            <span className="text-[#1E40AF]">Management Consulting</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Strategic prompts designed to accelerate business analysis, strategy
            development, and client recommendations. Use these to enhance
            diagnostic frameworks, financial modeling, competitive intelligence,
            and implementation planning.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#1E40AF] pl-4">
              Business Diagnosis and Problem Identification
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard
                title="Root Cause Analysis Framework"
                prompt="I need to conduct a root cause analysis for [specific business problem]. Please help me structure this analysis by:
1. Identifying the primary symptoms and their financial/operational impact
2. Mapping potential root causes across organizational, market, and operational dimensions
3. Developing diagnostic questions to test each hypothesis
4. Suggesting data sources and metrics to validate or eliminate causes
5. Creating a prioritized list of likely root causes based on available evidence

Context: [relevant company information, industry, timeframe]"
              />
              <CopyCard
                title="Business Problem Decomposition"
                prompt="Help me break down this business challenge: [describe problem]. Please:
1. Decompose the problem into its component parts
2. Identify which elements are symptoms vs. root causes
3. Map interdependencies between problem components
4. Suggest where to focus first for maximum impact
5. Outline what metrics would indicate we're moving in the right direction

Business context: [company details, constraints, priorities]"
              />
              <CopyCard
                title="Benchmark Analysis for Diagnosis"
                prompt="Compare [company/function] performance to industry benchmarks. Please:
1. Identify the most relevant peer companies or industry benchmarks
2. Highlight performance gaps in key metrics: [specify metrics]
3. Rank which gaps represent the biggest opportunity or risk
4. Suggest potential explanations for each major variance
5. Recommend which gaps to address first based on financial impact

Industry: [specify] | Company type: [specify] | Geography: [specify]"
              />
              <CopyCard
                title="Process Performance Diagnostic"
                prompt="Help me diagnose performance issues in [process name]. Please:
1. Map the current process steps and identify bottlenecks
2. Analyze cycle time, quality, and cost metrics against best practice
3. Identify which process steps are causing delays or errors
4. Suggest how process variations impact outcomes
5. Recommend the top 3 process improvements with estimated impact

Process context: [describe current process, volumes, stakeholders]"
              />
              <CopyCard
                title="Financial Performance Deep Dive"
                prompt="I need to understand why [financial metric] declined by [%]. Please:
1. Decompose the change into volume, price, and mix components
2. Analyze trends over [timeframe] to identify when change accelerated
3. Compare against relevant benchmarks and competitors
4. Map financial drivers to operational metrics
5. Suggest which factors are structural vs. cyclical

Financial data: [relevant P&L or KPI details] | Context: [market conditions, company changes]"
              />
              <CopyCard
                title="Customer and Market Diagnostic"
                prompt="I need to understand our market position for [product/service]. Please:
1. Analyze our market share, customer acquisition, and retention trends
2. Identify customer segments where we're strongest and weakest
3. Compare our value proposition against competitors
4. Highlight unmet customer needs or emerging market trends
5. Recommend which segments or needs to prioritize

Market context: [industry, geography, customer types] | Available data: [specify what data exists]"
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#1E40AF] pl-4">
              Strategy Development and Scenario Planning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard
                title="Growth Strategy Framework"
                prompt="Help me develop a growth strategy for [company/business unit]. Please:
1. Outline growth options: organic growth, market expansion, M&A, new products
2. For each option, assess market attractiveness and competitive position
3. Estimate addressable market size and growth potential
4. Identify capabilities and resources required
5. Recommend a prioritized growth roadmap with 1-3 year milestones

Company context: [current business, capabilities, constraints] | Target growth: [desired CAGR]"
              />
              <CopyCard
                title="Scenario Planning and Outcomes Modeling"
                prompt="Create scenario plans for [business/function] under different conditions. Please:
1. Define 3-4 scenarios: base case, upside, downside, and [specify any scenario]
2. For each scenario, outline key assumptions about [market/operational/financial drivers]
3. Model financial outcomes (revenue, profitability, cash flow) for each scenario
4. Identify leading indicators that would signal which scenario is occurring
5. Recommend strategic hedges or contingency plans for each scenario

Business: [describe] | Key uncertainties: [list major variables]"
              />
              <CopyCard
                title="Competitive Positioning Strategy"
                prompt="Help me develop a competitive positioning strategy. Please:
1. Map our competitive position relative to key competitors on cost, quality, innovation, service
2. Identify sustainable competitive advantages and vulnerabilities
3. Analyze competitor likely responses to different strategic moves
4. Recommend positioning that leverages our strengths and exploits competitor weaknesses
5. Outline how to defend against competitor moves

Our company: [describe capabilities, market position] | Key competitors: [list]"
              />
              <CopyCard
                title="Digital Transformation Strategy"
                prompt="Develop a digital transformation strategy for [company/function]. Please:
1. Assess current digital maturity across [operations, customer experience, data, culture]
2. Identify opportunities to improve efficiency, customer experience, and innovation
3. Recommend priority transformation initiatives and their sequencing
4. Estimate investment requirements and expected ROI for each initiative
5. Create a multi-year transformation roadmap with milestones

Current state: [describe capabilities and gaps] | Investment available: [specify budget]"
              />
              <CopyCard
                title="Sustainability and ESG Strategy"
                prompt="Help me develop a sustainability and ESG strategy. Please:
1. Assess material ESG issues for our industry and company
2. Identify ESG risks that could impact business performance
3. Uncover ESG-related opportunities for cost savings or growth
4. Benchmark our ESG performance against peers
5. Recommend priority ESG initiatives with business and impact justification

Company: [describe industry, size, current ESG activities] | Stakeholder priorities: [specify concerns]"
              />
              <CopyCard
                title="Go-to-Market Strategy"
                prompt="Develop a go-to-market strategy for [new product/service]. Please:
1. Assess market opportunity, target customer segments, and competitive landscape
2. Define value proposition and key differentiators
3. Recommend channel strategy (direct sales, partners, online, etc.)
4. Outline customer acquisition strategy and pricing approach
5. Create launch timeline and success metrics

Product: [describe] | Target market: [describe customers] | Resources available: [specify]"
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#1E40AF] pl-4">
              Financial Analysis and Business Case Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard
                title="Investment Business Case Builder"
                prompt="Help me build a business case for [investment/initiative]. Please:
1. Define the investment scope, timeline, and capital requirements
2. Identify all expected benefits (cost savings, revenue growth, other)
3. Build a financial model showing NPV, IRR, payback period, ROI
4. Conduct sensitivity analysis on key assumptions
5. Highlight risks and recommended mitigation strategies

Investment: [describe what we're investing in] | Time horizon: [years] | Key assumptions: [list]"
              />
              <CopyCard
                title="Cost Structure Analysis and Reduction"
                prompt="Help me analyze and optimize our cost structure. Please:
1. Decompose total costs by category (fixed, variable, direct, indirect)
2. Benchmark our cost structure against industry peers
3. Identify cost drivers and opportunities for reduction
4. Quantify savings potential for top cost reduction opportunities
5. Recommend implementation approach and sequencing

Current costs: [provide cost breakdown] | Industry: [specify] | Constraints: [list]"
              />
              <CopyCard
                title="Valuation Model and Deal Economics"
                prompt="Build a valuation model for [target company/business]. Please:
1. Assess standalone valuation using multiple methods (DCF, comparables, precedent transactions)
2. Model synergy opportunities (cost, revenue, financial engineering)
3. Determine valuation range and recommended offer price
4. Analyze deal economics under different scenarios
5. Highlight key value drivers and risks

Target business: [describe] | Available data: [specify financial info] | Strategic rationale: [explain]"
              />
              <CopyCard
                title="Working Capital Optimization"
                prompt="Help me optimize working capital management. Please:
1. Analyze current cash conversion cycle (days inventory, days receivables, days payables)
2. Benchmark against peer companies
3. Identify opportunities to accelerate receivables or reduce inventory
4. Quantify cash release potential from each initiative
5. Recommend implementation priorities

Current metrics: [provide DIO, DSO, DPO data] | Industry: [specify] | Cash constraints: [describe]"
              />
              <CopyCard
                title="Price Optimization and Revenue Modeling"
                prompt="Help me optimize pricing strategy. Please:
1. Analyze price elasticity and customer willingness to pay
2. Segment customers and recommend differentiated pricing
3. Model revenue impact of different price scenarios
4. Assess competitive positioning of recommended pricing
5. Create implementation roadmap (phasing, customer communication)

Current pricing: [describe] | Products/segments: [list] | Market data: [specify available info]"
              />
              <CopyCard
                title="Capital Allocation and Portfolio Optimization"
                prompt="Help me optimize capital allocation across [business units/projects]. Please:
1. Assess expected returns and risks for each option
2. Analyze interdependencies and synergies between options
3. Model different allocation scenarios
4. Recommend optimal allocation to maximize value
5. Suggest performance management approach for accountability

Available capital: [specify amount] | Options/projects: [list with available data] | Constraints: [specify]"
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#1E40AF] pl-4">
              Organizational and Operating Model Design
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard
                title="Organizational Structure Optimization"
                prompt="Help me redesign organizational structure. Please:
1. Assess current structure against strategy and best practices
2. Analyze span of control, span of knowledge, and decision rights
3. Recommend optimized structure to improve alignment and agility
4. Model communication overhead and decision speed improvements
5. Create detailed transition plan with role mapping

Current organization: [describe structure, size, functions] | Strategic priorities: [list] | Constraints: [specify]"
              />
              <CopyCard
                title="Operating Model Design"
                prompt="Help me design an operating model for [function/business]. Please:
1. Define purpose, key processes, and critical capabilities
2. Determine the right operating model archetype (shared service, center of excellence, embedded, etc.)
3. Design process flows and governance model
4. Specify required roles, skills, and organizational structure
5. Identify transition requirements and success metrics

Function: [describe current state] | Strategic objectives: [list] | Scale: [specify volumes/scope]"
              />
              <CopyCard
                title="Role and Accountability Mapping"
                prompt="Help me create a RACI matrix and accountability framework. Please:
1. Define key decisions and processes that need clarity
2. Map roles and accountability for each decision/process
3. Identify overlaps, gaps, or conflicts in current accountability
4. Recommend clear role definitions and accountability structure
5. Suggest governance approach to maintain clarity as organization evolves

Organization: [describe structure] | Key processes/decisions: [list] | Current issues: [describe]"
              />
              <CopyCard
                title="Skill Requirements and Capability Planning"
                prompt="Help me assess and plan capability requirements. Please:
1. Define required capabilities for [function/strategy] over 3-5 years
2. Assess current capability maturity for each requirement
3. Identify skill gaps and capacity constraints
4. Recommend build vs. buy vs. partner decisions for each capability
5. Create a capability development and hiring roadmap

Function/strategy: [describe] | Current team: [specify size, composition] | Budget for development: [specify]"
              />
              <CopyCard
                title="Center of Excellence Implementation"
                prompt="Help me design and implement a center of excellence for [function]. Please:
1. Define COE mission, scope, and governance model
2. Determine reporting structure and decision rights
3. Outline key processes for knowledge sharing and capability development
4. Specify metrics to measure COE effectiveness
5. Create implementation roadmap with quick wins and long-term building

Function: [describe] | Current state: [specify fragmentation/needs] | Target scope: [list areas]"
              />
              <CopyCard
                title="Hybrid and Remote Work Operating Model"
                prompt="Help me design a hybrid/remote operating model. Please:
1. Assess which roles and functions can effectively work remotely
2. Define hybrid working policies (days in office, location requirements)
3. Design collaboration practices and tools for distributed teams
4. Outline how to maintain culture and employee development
5. Recommend metrics to assess effectiveness and engagement

Organization: [describe structure, roles] | Current setup: [describe] | Strategic goals: [specify]"
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#1E40AF] pl-4">
              Market Analysis and Competitive Intelligence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard
                title="Market Opportunity Assessment"
                prompt="Help me assess market opportunity for [product/market]. Please:
1. Define and size the total addressable market (TAM)
2. Segment the market and estimate serviceable addressable market (SAM)
3. Analyze market growth trends and drivers
4. Identify emerging sub-segments with high growth potential
5. Estimate realistic market penetration and revenue opportunity

Market/product: [describe] | Geography: [specify] | Time horizon: [specify years]"
              />
              <CopyCard
                title="Competitive Landscape Mapping"
                prompt="Help me map and analyze the competitive landscape. Please:
1. Identify direct and indirect competitors
2. Create competitive positioning map (cost, quality, innovation, service)
3. Assess each competitor's strengths, weaknesses, and likely strategy
4. Analyze barriers to entry and market consolidation trends
5. Recommend how to differentiate and compete effectively

Our business: [describe] | Market: [specify industry, geography] | Key success factors: [list]"
              />
              <CopyCard
                title="Customer Segmentation and Targeting"
                prompt="Help me develop customer segmentation strategy. Please:
1. Identify and analyze major customer segments
2. For each segment, assess size, growth, profitability, and strategic value
3. Analyze segment needs, buying behavior, and decision criteria
4. Recommend which segments to target and why
5. Outline how to tailor value proposition and GTM for priority segments

Business: [describe offerings] | Current customers: [describe] | Available data: [specify]"
              />
              <CopyCard
                title="Disruptive Threat Assessment"
                prompt="Help me assess disruptive threats to our business. Please:
1. Identify potential technological, business model, or market disruptions
2. Assess probability and potential impact of each disruption
3. Analyze how quickly disruption might occur
4. Determine what we need to do differently to stay competitive
5. Recommend early warning indicators and strategic responses

Industry: [specify] | Our business: [describe] | Technology/market trends: [list key changes]"
              />
              <CopyCard
                title="Customer Voice and Needs Analysis"
                prompt="Help me synthesize customer feedback and needs. Please:
1. Summarize key themes from customer interviews, surveys, feedback
2. Identify stated needs vs. implied needs vs. unmet needs
3. Prioritize needs by importance, frequency, and market size
4. Recommend product/service enhancements to address top needs
5. Outline how to continuously gather and act on customer feedback

Customer base: [describe] | Feedback collected: [summarize] | Decision needed: [specify]"
              />
              <CopyCard
                title="Regulatory and Macro Trend Analysis"
                prompt="Help me assess regulatory and macro trends. Please:
1. Identify relevant regulatory changes and their timeline
2. Analyze potential impact of each regulation on our business
3. Assess geopolitical and macroeconomic risks
4. Recommend proactive compliance and adaptation strategies
5. Outline monitoring approach for emerging risks

Industry: [specify] | Geographies: [list] | Key concerns: [describe]"
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#1E40AF] pl-4">
              Implementation and Change Management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard
                title="Implementation Roadmap Development"
                prompt="Help me create a detailed implementation roadmap. Please:
1. Break down the initiative into phases and work streams
2. Sequence initiatives to build momentum and show quick wins
3. Identify dependencies between workstreams
4. Create a timeline with milestones and success metrics
5. Highlight risks and recommend mitigation approaches

Initiative: [describe] | Timeframe: [specify] | Constraints: [list budget, people, other limits]"
              />
              <CopyCard
                title="Change Management and Stakeholder Strategy"
                prompt="Help me develop a change management strategy. Please:
1. Identify key stakeholders and analyze their interests and influence
2. Assess readiness for change across the organization
3. Identify likely resistance areas and root causes
4. Recommend communication, training, and engagement strategies
5. Create a stakeholder management plan with specific actions

Change: [describe] | Organization: [describe size, culture] | Key stakeholders: [list]"
              />
              <CopyCard
                title="Risk Assessment and Mitigation Planning"
                prompt="Help me assess risks and create mitigation plans. Please:
1. Identify potential implementation risks (organizational, technical, market, financial)
2. Assess probability and impact of each risk
3. Prioritize risks by severity and likelihood
4. Recommend mitigation strategies for top risks
5. Create a risk monitoring and escalation approach

Initiative: [describe] | Organization: [describe] | Key concerns: [list]"
              />
              <CopyCard
                title="Performance Metrics and Monitoring Framework"
                prompt="Help me design a performance monitoring framework. Please:
1. Define success metrics aligned with initiative objectives
2. Specify data sources, collection frequency, and owners
3. Create dashboards to track progress against milestones
4. Recommend early warning indicators that signal problems
5. Outline governance process for monitoring and course correction

Initiative: [describe] | Objectives: [list] | Stakeholder reporting needs: [specify]"
              />
              <CopyCard
                title="Capability Building and Training Plan"
                prompt="Help me develop a capability building and training plan. Please:
1. Identify key capabilities needed for success
2. Assess current capability levels across the organization
3. Design training and capability building approach
4. Create curriculum, delivery approach, and success metrics
5. Outline how to sustain capability development over time

Initiative: [describe] | Target population: [describe] | Training budget: [specify]"
              />
              <CopyCard
                title="Post-Implementation Review and Optimization"
                prompt="Help me plan a post-implementation review. Please:
1. Define what success looks like and how to measure it
2. Create a review framework covering financial, operational, and organizational metrics
3. Recommend timing for reviews (1 month, 3 months, 6 months, 1 year)
4. Identify what we'll do based on review findings
5. Outline how to sustain improvements and prevent backsliding

Initiative: [describe] | Key success factors: [list] | Time to full benefit realization: [specify]"
              />
            </div>
          </section>
        </div>

        <section className="mt-20 pt-12 border-t border-[#2a2a2a]">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 gap-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isExpanded={expandedFaq === index}
                onToggle={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
              />
            ))}
          </div>
        </section>

        <section className="mt-20 pt-12 border-t border-[#2a2a2a]">
          <h2 className="text-3xl font-bold mb-8">Related Prompt Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/ai-for-workforce-management-prompts"
              className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#1E40AF] transition-colors"
            >
              <h3 className="font-semibold text-white">Workforce Management</h3>
              <p className="text-sm text-gray-400 mt-2">
                Optimize talent, performance, and engagement
              </p>
            </Link>
            <Link
              href="/ai-for-operations-management-prompts"
              className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#1E40AF] transition-colors"
            >
              <h3 className="font-semibold text-white">Operations Management</h3>
              <p className="text-sm text-gray-400 mt-2">
                Streamline processes and improve efficiency
              </p>
            </Link>
            <Link
              href="/ai-for-facilities-management-prompts"
              className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#1E40AF] transition-colors"
            >
              <h3 className="font-semibold text-white">Facilities Management</h3>
              <p className="text-sm text-gray-400 mt-2">
                Optimize spaces and maintain infrastructure
              </p>
            </Link>
            <Link
              href="/ai-for-document-management-prompts"
              className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#1E40AF] transition-colors"
            >
              <h3 className="font-semibold text-white">Document Management</h3>
              <p className="text-sm text-gray-400 mt-2">
                Organize, extract, and leverage information
              </p>
            </Link>
            <Link
              href="/ai-for-news-prompts"
              className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#1E40AF] transition-colors"
            >
              <h3 className="font-semibold text-white">News and Journalism</h3>
              <p className="text-sm text-gray-400 mt-2">
                Research, write, and engage audiences
              </p>
            </Link>
            <Link
              href="/ai-question-answering-prompts"
              className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#1E40AF] transition-colors"
            >
              <h3 className="font-semibold text-white">Question Answering</h3>
              <p className="text-sm text-gray-400 mt-2">
                Build knowledge systems and retrieval
              </p>
            </Link>
            <Link
              href="/ai-summarizer-prompts"
              className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#1E40AF] transition-colors"
            >
              <h3 className="font-semibold text-white">Summarization</h3>
              <p className="text-sm text-gray-400 mt-2">
                Extract key insights from complex content
              </p>
            </Link>
            <Link
              href="/squibler-ai-prompts"
              className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#1E40AF] transition-colors"
            >
              <h3 className="font-semibold text-white">Content Generation</h3>
              <p className="text-sm text-gray-400 mt-2">
                Create and repurpose high-quality content
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
