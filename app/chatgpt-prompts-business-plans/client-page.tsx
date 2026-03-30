'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, Briefcase, BarChart3, Zap, PieChart, TrendingUp } from 'lucide-react';

interface CopyCardProps {
  prompt: string;
}

function CopyCard({ prompt }: CopyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy');
    }
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#1E40AF]/50 transition-colors">
      <p className="text-sm text-gray-300 mb-3 line-clamp-3">{prompt}</p>
      <button
        onClick={handleCopy}
        className="w-full bg-[#1E40AF] hover:bg-[#1e3a8a] text-white py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors"
      >
        {copied ? (
          <>
            <Check size={16} /> Copied!
          </>
        ) : (
          <>
            <Copy size={16} /> Copy Prompt
          </>
        )}
      </button>
    </div>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

function FAQComponent({ items }: { items: FAQItem[] }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={idx} className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === idx ? null : idx)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#222] transition-colors"
          >
            <span className="text-sm font-medium text-gray-100">{item.question}</span>
            <ChevronDown
              size={18}
              className={`text-[#1E40AF] transition-transform ${expanded === idx ? 'rotate-180' : ''}`}
            />
          </button>
          {expanded === idx && (
            <div className="px-4 py-3 bg-[#0f0f0f] border-t border-[#333] text-sm text-gray-400">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const faqItems: FAQItem[] = [
  {
    question: 'How can ChatGPT help me structure a business plan?',
    answer:
      'ChatGPT can help you outline key sections like executive summary, market analysis, financial projections, and operational strategy. It can generate comprehensive content for each section based on your business model and goals.',
  },
  {
    question: 'What should I include in the market analysis section?',
    answer:
      'Include target market size, customer demographics, competitive landscape, market trends, and your unique value proposition. ChatGPT can help research and articulate these elements clearly.',
  },
  {
    question: 'How do I create realistic financial projections?',
    answer:
      'Start with historical data or industry benchmarks. ChatGPT can help you create realistic revenue models, expense forecasts, and break-even analyses based on your assumptions.',
  },
  {
    question: 'Can ChatGPT help with the executive summary?',
    answer:
      'Yes, the executive summary should be concise and compelling. ChatGPT can help you craft a summary that highlights your business opportunity, competitive advantage, and financial potential.',
  },
  {
    question: 'How should I present my competitive advantage?',
    answer:
      'Clearly articulate what makes your business different. This could be unique technology, superior customer service, cost leadership, or market positioning. ChatGPT can help you develop and refine this narrative.',
  },
  {
    question: 'What financial metrics matter most in a business plan?',
    answer:
      'Key metrics include revenue projections, gross margin, customer acquisition cost (CAC), lifetime value (LTV), burn rate, and path to profitability. ChatGPT can help you understand and present these appropriately.',
  },
  {
    question: 'How do I write an effective operations plan?',
    answer:
      'Detail your organizational structure, key team members, processes, technology, and supply chain. ChatGPT can help you outline these systematically and identify potential challenges.',
  },
  {
    question: 'Should I include risk analysis in my business plan?',
    answer:
      'Yes, identifying potential risks and mitigation strategies shows you&apos;ve thought critically. ChatGPT can help you anticipate market, operational, and financial risks.',
  },
  {
    question: 'How long should a business plan be?',
    answer:
      'Most business plans are 15-40 pages, but this varies by audience. Investor decks are shorter, while internal plans can be more detailed. ChatGPT can help you adapt length to your specific needs.',
  },
  {
    question: 'What tone should I use in my business plan?',
    answer:
      'Be professional, realistic, and data-driven. Avoid over-optimism and jargon. ChatGPT can help you strike the right balance between confidence and credibility.',
  },
  {
    question: 'How often should I update my business plan?',
    answer:
      'Review and update quarterly or when significant business changes occur. ChatGPT can help you track KPIs and adjust your plan based on actual results.',
  },
  {
    question: 'Can I use ChatGPT to help raise funding?',
    answer:
      'ChatGPT can help craft compelling investor pitches, financial narratives, and responses to common investor questions. However, your underlying business fundamentals must be sound.',
  },
];

export default function BusinessPlansPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ChatGPT Prompts for Business Plans',
            description:
              'Expert ChatGPT prompts for creating comprehensive business plans, financial projections, market analysis, and investor-ready strategies.',
            keywords:
              'business plan prompts, ChatGPT prompts, startup planning, financial projections, business strategy',
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
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-[#1E40AF]/10 rounded-lg">
              <Briefcase size={32} className="text-[#1E40AF]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">ChatGPT Prompts for Business Plans</h1>
          </div>
          <p className="text-gray-400 text-lg mt-4">
            Create comprehensive, investor-ready business plans with expertly crafted ChatGPT prompts covering strategy,
            financials, and market analysis.
          </p>
        </div>

        {/* Executive Summary Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Zap size={24} className="text-[#1E40AF]" />
            <h2 className="text-2xl font-bold">Executive Summary & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Create a compelling executive summary for a [industry] company solving [problem]. Include market opportunity, competitive advantage, and 3-year financial outlook. Keep it to 150 words." />
            <CopyCard prompt="Write a vision and mission statement for a [business type] startup that is innovative, memorable, and aligned with current market trends." />
            <CopyCard prompt="Develop a unique value proposition statement for a [product/service]. Explain why customers should choose us over [main competitor]." />
          </div>
        </div>

        {/* Market Analysis Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 size={24} className="text-[#1E40AF]" />
            <h2 className="text-2xl font-bold">Market Analysis & Positioning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Analyze the [specific market/industry] including size, growth rate, key trends, and customer segments. Provide data-backed market sizing for a [specific product/service]." />
            <CopyCard prompt="Create a detailed competitive analysis matrix for [product type]. Compare us against [competitor 1], [competitor 2], and [competitor 3] on features, pricing, and customer satisfaction." />
            <CopyCard prompt="Develop a customer persona for our primary target market. Include demographics, pain points, buying behavior, and how our solution addresses their needs." />
          </div>
        </div>

        {/* Financial Projections Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <PieChart size={24} className="text-[#1E40AF]" />
            <h2 className="text-2xl font-bold">Financial Projections & Modeling</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Build a 5-year financial projection for a [business type] with [number] initial customers and [revenue model]. Include P&L, cash flow, and break-even analysis." />
            <CopyCard prompt="Create a pricing strategy analysis for [product/service]. Compare value-based, cost-plus, and competitive pricing. Recommend optimal pricing for different customer segments." />
            <CopyCard prompt="Develop a customer acquisition cost (CAC) and lifetime value (LTV) model. Calculate payback period and LTV:CAC ratio for sustainable growth scenarios." />
          </div>
        </div>

        {/* Operations & Strategy Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={24} className="text-[#1E40AF]" />
            <h2 className="text-2xl font-bold">Operations & Growth Strategy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Design an operational plan for a [business type] including key processes, team structure, technology needs, and scaling milestones for the next 3 years." />
            <CopyCard prompt="Create a go-to-market strategy for [product/service] targeting [customer segment]. Include channels, messaging, partnerships, and 12-month launch timeline." />
            <CopyCard prompt="Develop a risk assessment and mitigation plan covering market, operational, financial, and regulatory risks specific to [industry/business type]." />
          </div>
        </div>

        {/* Funding & Investor Readiness Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase size={24} className="text-[#1E40AF]" />
            <h2 className="text-2xl font-bold">Funding & Investor Readiness</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Write a compelling funding request for [amount] targeting [investor type]. Explain how funds will be allocated and expected ROI." />
            <CopyCard prompt="Prepare responses to common investor questions: Why now? Why you? Why this market? Why this amount? Make answers concise but compelling." />
            <CopyCard prompt="Create a key metrics dashboard showing monthly/quarterly KPIs investors care about: MRR growth, customer acquisition, burn rate, and path to profitability." />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <FAQComponent items={faqItems} />
        </div>

        {/* Related Pages */}
        <div className="border-t border-[#333] pt-12">
          <h3 className="text-xl font-bold mb-6">Related Prompts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/chatgpt-prompts-excel"
              className="p-4 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#217346]/50 transition-colors"
            >
              <div className="text-[#217346] font-semibold mb-2">Excel Prompts</div>
              <p className="text-sm text-gray-400">Data analysis, automation, and financial modeling</p>
            </a>
            <a
              href="/ai-prompts-customer-service"
              className="p-4 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#2563EB]/50 transition-colors"
            >
              <div className="text-[#2563EB] font-semibold mb-2">Customer Service Prompts</div>
              <p className="text-sm text-gray-400">Support strategies, training, and agent effectiveness</p>
            </a>
            <a
              href="/ai-prompts-presentations"
              className="p-4 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#F59E0B]/50 transition-colors"
            >
              <div className="text-[#F59E0B] font-semibold mb-2">Presentation Prompts</div>
              <p className="text-sm text-gray-400">Slides, storytelling, and audience engagement</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
