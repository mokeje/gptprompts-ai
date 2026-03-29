'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

const CopyCard = ({ content }: { content: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-3">
      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{content}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-xs font-medium transition"
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy
          </>
        )}
      </button>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-700 flex justify-between items-center text-left transition"
      >
        <span className="font-medium text-gray-100">{question}</span>
        {open ? (
          <ChevronUp size={20} className="text-blue-500" />
        ) : (
          <ChevronDown size={20} className="text-gray-400" />
        )}
      </button>
      {open && (
        <div className="px-4 py-3 bg-gray-900 border-t border-gray-700">
          <p className="text-gray-300 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function ExecutivesPromptsPage() {
  const faqs = [
    {
      question: 'How can AI help me make better strategic decisions?',
      answer: 'AI can analyze vast amounts of market data, competitive intelligence, and internal metrics to identify patterns and trends that inform strategic choices. Use AI to model scenarios, forecast outcomes, and stress-test strategies before implementation. This reduces decision-making time while improving confidence in outcomes.',
    },
    {
      question: 'What is the best way to use AI for financial forecasting?',
      answer: 'AI-powered financial forecasting combines historical data, market indicators, and business variables to generate more accurate projections than traditional methods. Use AI to create rolling forecasts, sensitivity analyses, and what-if scenarios that help you understand financial risks and opportunities across different market conditions.',
    },
    {
      question: 'How should I approach AI-driven organizational transformation?',
      answer: 'Start with a clear vision of outcomes, not technology. Identify 2-3 high-impact areas where AI can create competitive advantage. Build cross-functional teams, invest in capability development, and measure progress against business metrics. Ensure leadership alignment and communicate the strategic rationale to all stakeholders.',
    },
    {
      question: 'What metrics should executives track for AI implementation success?',
      answer: 'Track business outcomes (revenue impact, cost savings, time-to-market), operational metrics (process efficiency, error rates, automation coverage), and capability metrics (team AI literacy, tool adoption rates). Avoid tracking technology metrics in isolation. Ensure all metrics directly connect to strategic objectives.',
    },
    {
      question: 'How can I build a competitive advantage through AI and data?',
      answer: 'Competitive advantage comes from using AI and data better than competitors in areas that matter to customers. Focus on proprietary data, unique business processes, and talent. Build organizational capabilities for rapid experimentation. Create feedback loops between customer insights, product development, and strategic planning.',
    },
    {
      question: 'What governance structure works best for AI at scale?',
      answer: 'Establish clear accountability: appoint an AI sponsor (usually COO or CTO), create a cross-functional steering committee, define decision-making authorities, and set investment guidelines. Balance governance with agility. Use portfolio management to allocate resources across strategic, tactical, and exploratory AI initiatives.',
    },
    {
      question: 'How should executives approach risk management in AI adoption?',
      answer: 'Identify risks at three levels: technology risks (accuracy, bias, system reliability), operational risks (change management, skill gaps), and strategic risks (market disruption, brand impact). Develop mitigation plans for each. Establish clear guardrails, monitor performance, and adjust strategy based on real-world outcomes.',
    },
    {
      question: 'What is the ROI timeline for AI investments?',
      answer: 'ROI timelines vary: quick wins (process automation, content generation) show results in 3-6 months; capability building (upskilling teams, building platforms) takes 6-12 months; strategic initiatives (market entry, new products) require 12-24 months. Set realistic expectations and use early wins to fund longer-term investments.',
    },
    {
      question: 'How do I ensure AI investments align with business strategy?',
      answer: 'Start with strategic priorities, not technology capabilities. For each priority, ask: "What does AI enable that creates customer value?" Build a portfolio of initiatives that ladder up to strategic goals. Review quarterly. Kill projects that drift from strategy, regardless of technical progress.',
    },
    {
      question: 'What should executives know about responsible AI and compliance?',
      answer: 'Understand that responsible AI drives business value: it reduces risk of bias, improves customer trust, and ensures compliance with regulations like the EU AI Act. Build responsibility into AI governance from the start. Assign clear accountability for outcomes, transparency, and fairness. Treat it as a strategic imperative, not a compliance checkbox.',
    },
  ];

  const prompts = [
    {
      category: 'Strategic Decision-Making and Planning',
      items: [
        'You are an executive strategic advisor. Analyze [describe market conditions, competitive landscape, and internal capabilities]. What are the top 3 strategic options for the next 18 months? For each option, provide: the strategic rationale, required investments, expected revenue impact, key risks, and timeline to execution. Format your response as a decision framework.',
        'You are a scenario planning expert. Given [describe company, market, and key uncertainties], develop 3 contrasting future scenarios for the next 3 years. For each scenario: describe the business environment, how customer needs shift, which competitive advantages matter most, and how we should adapt our strategy. Make scenarios distinct and plausible.',
        'You are a business transformation advisor. I need to transform [describe business area or function] to improve [describe goal: speed, cost, quality]. Analyze our current approach and recommend a phased transformation roadmap covering: quick wins (first 90 days), capability building (6-12 months), and strategic shifts (12+ months). Include investment requirements and risk mitigation.',
        'You are a portfolio strategy advisor. We have the following growth initiatives: [list 5-7 initiatives with budget and expected ROI]. We have limited capital and must prioritize. Analyze each initiative against: strategic fit, financial return, execution risk, and timing. Recommend a portfolio allocation that balances near-term returns with long-term optionality.',
        'You are a competitive strategy advisor. Our main competitor is [describe competitor and their strategy]. Given our strengths [list], weaknesses [list], and market trends [describe], what is our most defensible competitive position? Recommend specific moves that exploit our advantages while limiting their counter-moves.',
        'You are a business model advisor. We want to explore entering [describe new market or customer segment]. Analyze: market size and growth, customer needs, competitive dynamics, required capabilities, financial model, and execution risks. Recommend whether to build, buy, or partner to enter this market. Include a 3-year financial projection.',
      ],
    },
    {
      category: 'Leadership Vision and Organizational Strategy',
      items: [
        'You are an organizational development advisor. Help me craft a compelling vision for [describe organization/team] that is: bold (moves beyond incremental change), grounded (achievable with focus), and inspiring (connects to purpose). The vision should address: customer impact, organizational capabilities we will build, and our position in the market in 3 years.',
        'You are a culture strategy advisor. We want to build a culture of [describe desired culture: innovation, accountability, customer obsession]. Currently, our culture is [describe current state]. Design a culture transformation program including: leadership behaviors to model, organizational systems to reinforce, communication strategy, and metrics to track progress. Timeline: 12-18 months.',
        'You are a talent strategy advisor. Analyze our talent needs for [describe strategic direction]. Identify: critical roles we need to fill, talent gaps in our current team, build vs. buy vs. partner options for each gap, and a 24-month talent roadmap. Include succession planning for key executive roles.',
        'You are a organizational structure advisor. We are restructuring to [describe strategic goal]. Current structure: [describe]. Design a new organizational model that: aligns accountability to strategy, reduces decision-making friction, enables cross-functional collaboration, and clarifies reporting lines. Explain the transition approach.',
        'You are an innovation strategy advisor. Design an innovation portfolio for [describe company/industry]. Include: core innovation (improving existing products), adjacent innovation (new products for existing customers), and transformational innovation (new markets). Allocate resources across each category and explain how you will balance short-term growth with long-term optionality.',
        'You are a stakeholder engagement advisor. I need to build alignment on [describe strategic decision] across stakeholders with different interests: [list stakeholders]. Design a stakeholder engagement strategy that includes: communication approach, how you will address key concerns, decision-making process, and timeline. Make it realistic and practical.',
      ],
    },
    {
      category: 'Financial Planning and Performance Management',
      items: [
        'You are a financial planning advisor. Help me develop a 3-year financial plan for [describe business]. Include: revenue assumptions (bottom-up by customer segment/product), cost structure and efficiency targets, capital requirements, and operating leverage. Present as: year 1-3 P&L, cash flow statement, and key metrics. Highlight financial risks and sensitivities.',
        'You are a pricing strategy advisor. We want to optimize pricing for [describe product/service]. Analyze: customer willingness to pay, competitive pricing, value delivered, and current revenue gaps. Recommend a new pricing strategy with: price points, packaging, and go-to-market approach. Model revenue impact and discuss customer communication.',
        'You are a cost optimization advisor. We need to reduce costs by [describe percentage] without compromising [describe non-negotiables]. Analyze our cost structure across: [list departments/functions]. Identify 10 concrete cost reduction opportunities with: savings amount, implementation difficulty, and impact on operations. Prioritize by ROI.',
        'You are a working capital optimization advisor. Analyze our current working capital: cash conversion cycle is [describe], accounts receivable days are [describe], inventory turnover is [describe]. Recommend specific actions to improve each component. Model the cash impact and timeline for implementation.',
        'You are a capital allocation advisor. We have [describe amount] to allocate across: maintenance capex, growth capex, M&A, shareholder returns, and debt reduction. Current strategy is [describe]. Recommend a new allocation that optimizes: long-term value creation, risk management, and stakeholder expectations. Justify your recommendation.',
        'You are a profitability analytics advisor. Analyze profitability by [describe dimension: customer segment, product, channel, geography]. Identify the top 20% that generates [describe %] of profit. Recommend how to: scale the most profitable segments, improve profitability of underperforming segments, or exit unprofitable ones. Model 2-year financial impact.',
      ],
    },
    {
      category: 'Risk Management and Business Continuity',
      items: [
        'You are a enterprise risk advisor. Identify top 10 risks facing [describe business]. For each risk: describe the scenario, financial/operational impact if it occurs, likelihood, and early warning signals. Recommend mitigation actions prioritized by risk-return. Create a risk dashboard with monitoring cadence.',
        'You are a crisis management advisor. Prepare [describe company] for [describe potential crisis: cyber attack, data breach, supply chain disruption, market downturn]. Develop: crisis scenarios and impacts, response playbooks for each scenario, decision frameworks for leadership, internal/external communication strategies, and testing plan. Timeline: 12 months to full readiness.',
        'You are a regulatory risk advisor. Our business operates in [describe jurisdictions]. Upcoming regulations include [describe]. Analyze impact on: business model, operations, compliance costs, and competitive position. Recommend proactive strategy to address regulatory shifts while positioning for competitive advantage.',
        'You are a business continuity advisor. Assess readiness of [describe function or business unit] for disruption. Identify: single points of failure, recovery time objectives, backup systems and processes. Develop a business continuity plan covering: prevention, detection, response, and recovery. Include testing and update cadence.',
        'You are a cybersecurity strategy advisor. Our current security posture is [describe]. Recommend security improvements prioritized by: business impact, ease of implementation, and cost. Develop a 24-month security roadmap including: technology upgrades, process improvements, and team capability building. Model risk reduction and cost.',
        'You are a supply chain resilience advisor. We depend on [describe key suppliers/inputs]. Recent disruptions have [describe impact]. Develop a supply chain resilience strategy covering: supplier diversification, inventory policies, nearshoring options, and contracts. Quantify cost of resilience vs. risk of disruption.',
      ],
    },
    {
      category: 'Performance Optimization and Execution Excellence',
      items: [
        'You are an operational excellence advisor. Analyze [describe function/process] for improvement. Current performance: [describe metrics]. Identify top 5 improvement opportunities covering: process efficiency, quality, speed, and cost. For each: develop a specific improvement plan, estimate impact, timeline, and required investment. Prioritize by ROI.',
        'You are a KPI and measurement advisor. Design a comprehensive KPI framework for [describe organization/function]. For each strategic objective, develop: leading and lagging indicators, targets, measurement approach, and review cadence. Ensure KPIs drive the right behaviors and enable course correction. Format as: measurement strategy document.',
        'You are an execution advisor. We have a strategic plan but struggle with execution. Current challenges include: [describe]. Design an execution management system covering: governance (how decisions are made), accountability (ownership and consequences), cadence (when we review progress), and tools (how we track and communicate). Include a 90-day pilot.',
        'You are a quality and continuous improvement advisor. Develop a quality improvement program for [describe area]. Establish: quality standards and acceptance criteria, measurement approach, root cause analysis process, improvement methodology (lean, six sigma, etc.), and team training plan. Measure: defect reduction, cost of quality, and customer satisfaction impact.',
        'You are a digital transformation advisor. We are transforming [describe area] through digital and automation. Current state: [describe]. Design transformation roadmap covering: technology implementation, process redesign, organization change, capability building, and quick wins. Timeline: 18-24 months. Model productivity gains and cost savings.',
        'You are a customer experience advisor. Analyze [describe customer experience or journey]. Current NPS is [describe], key complaints are [describe]. Develop: customer experience strategy (what do we want to be known for), experience map (ideal journey), improvement roadmap (quick wins and longer-term investments), and metrics. Estimate revenue impact of improvement.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 text-blue-400">
            AI Prompts for Executives
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Strategic decision-making, financial planning, and organizational transformation prompts designed for C-level executives and senior leaders. These prompts help you leverage AI to improve strategic analysis, accelerate planning cycles, and drive execution excellence.
          </p>
        </div>

        <div className="space-y-12">
          {prompts.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-blue-500 pb-3">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.items.map((prompt, promptIndex) => (
                  <CopyCard
                    key={`${sectionIndex}-${promptIndex}`}
                    content={prompt}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">
            Related Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/ai-chat-prompts" className="text-blue-400 hover:text-blue-300 underline">
              AI Chat Prompts
            </Link>
            <Link href="/ai-character-chat-prompts" className="text-blue-400 hover:text-blue-300 underline">
              AI Character Chat Prompts
            </Link>
            <Link href="/ai-personal-assistant-prompts" className="text-blue-400 hover:text-blue-300 underline">
              AI Personal Assistant Prompts
            </Link>
            <Link href="/ai-generative-ai-prompts" className="text-blue-400 hover:text-blue-300 underline">
              AI Generative AI Prompts
            </Link>
            <Link href="/ai-resume-builder-prompts" className="text-blue-400 hover:text-blue-300 underline">
              AI Resume Builder Prompts
            </Link>
            <Link href="/ai-for-leadership-prompts" className="text-blue-400 hover:text-blue-300 underline">
              AI for Leadership Prompts
            </Link>
            <Link href="/ai-for-risk-management-prompts" className="text-blue-400 hover:text-blue-300 underline">
              AI for Risk Management Prompts
            </Link>
            <Link href="/ai-for-quality-management-prompts" className="text-blue-400 hover:text-blue-300 underline">
              AI for Quality Management Prompts
            </Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Executives',
            description: 'Strategic decision-making, financial planning, and organizational transformation prompts for C-level executives.',
            author: {
              '@type': 'Person',
              name: 'Michael Okeje',
            },
            datePublished: '2026-03-29',
            dateModified: '2026-03-29',
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
