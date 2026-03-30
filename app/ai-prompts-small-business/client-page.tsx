'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

const ACCENT_COLOR = '#059669';

const PROMPTS = {
  'Marketing & Customer Acquisition': [
    {
      title: 'Social Media Content Calendar Generator',
      description: 'Generate a month-long content calendar for your social media channels with posting times and engagement strategies.',
      template: 'Create a 30-day social media content calendar for a [business type] business. Include 3 posts per week across [platforms]. Each post should include caption ideas, hashtags, and best posting times. Focus on [business goals].',
    },
    {
      title: 'Email Newsletter Template Creator',
      description: 'Design professional email newsletters that drive engagement and conversions for your audience.',
      template: 'Write a [type of business] email newsletter template with sections for: welcome/greeting, featured product/service, customer story, promotion/offer, and call-to-action. Make it warm, personal, and conversion-focused.',
    },
    {
      title: 'Customer Persona Builder',
      description: 'Develop detailed customer personas to guide your marketing strategy and product decisions.',
      template: 'Create 3 detailed customer personas for a [business type] targeting [industry/market]. For each persona include: name, age, income, pain points, goals, shopping habits, and what marketing messages resonate most.',
    },
    {
      title: 'Website Copy Optimizer',
      description: 'Improve your website copy to increase conversions and better communicate your value proposition.',
      template: 'Rewrite the homepage copy for a [business type] focused on [value proposition]. Include: attention-grabbing headline, problem statement, solution description, key features with benefits, social proof section, and clear CTA. Make it persuasive and concise.',
    },
  ],
  'Operations & Workflow Automation': [
    {
      title: 'Business Process Documentation',
      description: 'Document critical business processes to improve consistency, training, and scaling.',
      template: 'Create a detailed step-by-step process document for [specific business process] at a [business type]. Include: prerequisites, main steps (numbered), decision points, tools/resources needed, and troubleshooting tips. Format for easy training.',
    },
    {
      title: 'Project Management Template',
      description: 'Build structured project templates to keep teams organized and projects on track.',
      template: 'Create a project management template for [type of project] at a small [business type]. Include sections for: project goals, timeline, team roles, deliverables, milestones, risk assessment, and progress tracking. Make it simple but comprehensive.',
    },
    {
      title: 'Inventory Management Assistant',
      description: 'Optimize inventory tracking and reduce waste or stockouts.',
      template: 'Design an inventory management system for a small [business type] selling [product type]. Include: tracking methods, reorder points, seasonal adjustments, supplier management, and cost reduction strategies.',
    },
    {
      title: 'Meeting Agenda & Notes Template',
      description: 'Structure meetings to be more productive and ensure action items are tracked.',
      template: 'Create a meeting template for [type of meeting] at a small business. Include: agenda items with time allocations, decision-making framework, action item tracking (who/what/when), and follow-up email template.',
    },
  ],
  'Customer Service & Retention': [
    {
      title: 'Customer Service Response Framework',
      description: 'Build consistent, empathetic customer service responses across all channels.',
      template: 'Create a customer service response guide for a [business type] handling [types of inquiries]. Include templates for: order inquiries, complaints, returns, general questions, and follow-ups. Each should be professional, warm, and solution-focused.',
    },
    {
      title: 'FAQ Page Builder',
      description: 'Develop a comprehensive FAQ page that reduces support tickets and improves customer experience.',
      template: 'Write a FAQ page for a [business type] covering: common product/service questions, pricing/payment inquiries, shipping/delivery, returns/refunds, technical support, and account management. Make answers clear, concise, and helpful.',
    },
    {
      title: 'Customer Feedback Survey Designer',
      description: 'Gather actionable customer feedback to improve your products and services.',
      template: 'Design a brief customer feedback survey for a [business type]. Include 8-10 questions covering: product/service satisfaction, value for money, customer service quality, likelihood to recommend, and improvement suggestions.',
    },
    {
      title: 'Loyalty Program Strategy',
      description: 'Create a customer loyalty program that increases repeat purchases and lifetime value.',
      template: 'Develop a customer loyalty program for a [business type]. Include: program structure (points/tiers), rewards options, enrollment process, communication strategy, and expected ROI. Keep it simple to implement.',
    },
  ],
  'Financial Management & Growth': [
    {
      title: 'Monthly Financial Report Template',
      description: 'Track business finances with a clear, actionable monthly reporting structure.',
      template: 'Create a monthly financial report template for a small [business type]. Include sections for: revenue summary, expense breakdown, profit/loss analysis, cash flow status, key metrics, and insights/recommendations.',
    },
    {
      title: 'Business Budget Planner',
      description: 'Plan your annual budget strategically to maximize profitability and growth.',
      template: 'Create a 12-month budget plan for a [business type] with [annual revenue]. Include: revenue projections, fixed costs, variable costs, marketing budget, salaries, contingency reserves, and quarterly reviews.',
    },
    {
      title: 'Pricing Strategy Analyzer',
      description: 'Determine optimal pricing for your products or services based on market and costs.',
      template: 'Analyze pricing strategy for a [business type] offering [product/service]. Calculate: production/service costs, competitor pricing, value perception, margin targets, and test different price points.',
    },
    {
      title: 'Business Growth Roadmap',
      description: 'Plan your business growth with clear milestones, metrics, and timelines.',
      template: 'Create a 12-month growth roadmap for a [business type] with [current revenue]. Include: growth goals (revenue/customers), action items by quarter, resource requirements, success metrics, and risk mitigation.',
    },
  ],
};

const FAQ_ITEMS = [
  {
    question: 'Can ChatGPT really help my small business?',
    answer: 'Yes. Small businesses benefit significantly from AI automation. ChatGPT can help with content creation, customer service, marketing strategy, financial planning, and workflow documentation. The key is using it as a tool to save time on routine tasks so you can focus on strategy and growth. Many small business owners report 5-10 hours per week saved.',
  },
  {
    question: 'Will using ChatGPT make my business less personal?',
    answer: 'Not at all. Use ChatGPT to handle the repetitive, time-consuming work. Then add your personal touch, company voice, and local knowledge. For example, use AI to draft customer emails, then personalize them. Use it to outline social media posts, then add your personality. The human element remains essential.',
  },
  {
    question: 'How do I ensure ChatGPT outputs are accurate for my business?',
    answer: 'Always review and fact-check ChatGPT outputs before using them. It is excellent for drafts, frameworks, and ideas, but you should verify financial numbers, product specifications, industry facts, and claims. Think of it as a starting point that you refine with your expertise.',
  },
  {
    question: 'Is it safe to share customer data with ChatGPT?',
    answer: 'Never paste sensitive customer data (names, emails, addresses, payment info) directly into ChatGPT. Use anonymized or sample data instead. If you need to analyze customer patterns, describe trends in general terms rather than sharing raw customer lists.',
  },
  {
    question: 'Can I use ChatGPT to handle all my customer service?',
    answer: 'ChatGPT can handle routine inquiries, FAQs, and first-line support, which frees your time for complex issues. However, customers often want human interaction for complaints, returns, and sensitive matters. Use AI for tier-1 support and escalate appropriately.',
  },
  {
    question: 'How do I measure if ChatGPT is actually saving me money?',
    answer: 'Track time saved on specific tasks (content creation, email writing, report generation). Calculate your hourly rate and multiply by hours saved per week. Factor in productivity gains, faster customer response times, and reduced errors. Most small business owners see ROI within 1-2 months.',
  },
  {
    question: 'What if ChatGPT generates content that sounds too generic?',
    answer: 'This is common. Always prompt ChatGPT with specific details about your business, target customer, tone of voice, and unique selling points. Example: instead of "Write a product description," try "Write a product description for our eco-friendly water bottle, emphasizing durability for outdoor adventurers, with a casual, friendly tone." More specificity = better outputs.',
  },
  {
    question: 'Can I use ChatGPT to understand my financial data?',
    answer: 'Yes. Share your revenue trends, expense breakdowns, or financial questions with ChatGPT, and it can help you identify patterns and suggest areas to investigate. However, consult a real accountant for tax, legal, or complex financial decisions.',
  },
  {
    question: 'Is it ethical to use ChatGPT for marketing if customers don&apos;t know?',
    answer: 'Yes, as long as your marketing is honest. Using ChatGPT to draft emails, social media posts, or FAQs is fine. You are responsible for ensuring all claims are true, offers are clear, and customer data is protected. Transparency about AI use is increasingly expected in content creation.',
  },
  {
    question: 'How can I use ChatGPT without spending hours learning how to prompt?',
    answer: 'Start simple. Describe what you need as if talking to an assistant: "Write an email to a late customer about unpaid invoice," or "Create a simple 3-month budget for my coffee shop." As you use it more, you will naturally refine your prompts. Many templates and prompt libraries exist online to jumpstart your use.',
  },
  {
    question: 'What if my competitors are using ChatGPT and I am not?',
    answer: 'You are falling behind on efficiency. ChatGPT is now standard for many business tasks. You do not need to use it for everything, but using it strategically for time-consuming tasks (content, customer service, planning) is essential to stay competitive.',
  },
  {
    question: 'Can ChatGPT help me grow my small business faster?',
    answer: 'Yes, but it is not magic. ChatGPT works best when you have a clear business strategy. It can accelerate execution by automating repetitive work, improving marketing content, optimizing workflows, and providing strategic frameworks. You still need the strategy and hustle.',
  },
];

interface CopyCardProps {
  title: string;
  description: string;
  template: string;
}

function CopyCard({ title, description, template }: CopyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <button
        onClick={handleCopy}
        className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors"
      >
        {copied ? (
          <>
            <Check size={18} />
            Copied!
          </>
        ) : (
          <>
            <Copy size={18} />
            Copy Prompt
          </>
        )}
      </button>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex justify-between items-start gap-4 text-left"
      >
        <h3 className="font-semibold text-white pr-4">{question}</h3>
        {expanded ? (
          <ChevronUp size={20} className="text-gray-400 flex-shrink-0 mt-1" />
        ) : (
          <ChevronDown size={20} className="text-gray-400 flex-shrink-0 mt-1" />
        )}
      </button>
      {expanded && <p className="text-gray-400 mt-4 text-sm leading-relaxed">{answer}</p>}
    </div>
  );
}

export default function SmallBusinessPromptsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Small Business',
            description: 'Proven ChatGPT prompts to automate marketing, operations, customer service, and financial management for small businesses.',
            author: { '@type': 'Organization', name: 'GPTPrompts.AI' },
            datePublished: '2024-01-01',
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="border-b border-gray-700 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: ACCENT_COLOR + '20', color: ACCENT_COLOR }}
          >
            Small Business
          </div>
          <h1 className="text-5xl font-bold mb-4">AI Prompts for Small Business</h1>
          <p className="text-xl text-gray-400 mb-6">
            Proven ChatGPT prompts to automate marketing, operations, customer service, and financial management. Save 5-10 hours per week and scale your business without scaling your team.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300">Marketing</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300">Operations</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300">Customer Service</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300">Finance</span>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {Object.entries(PROMPTS).map(([sectionTitle, prompts]) => (
            <div key={sectionTitle}>
              <h2 className="text-3xl font-bold mb-8" style={{ color: ACCENT_COLOR }}>
                {sectionTitle}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {prompts.map((prompt) => (
                  <CopyCard
                    key={prompt.title}
                    title={prompt.title}
                    description={prompt.description}
                    template={prompt.template}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-gray-700 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="border-t border-gray-700 py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Explore Other Topics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/ai-prompts-lawyers"
              className="p-6 bg-gray-800 rounded-lg hover:border-blue-500 border border-gray-700 transition-colors"
            >
              <h3 className="font-semibold text-lg mb-2">AI Prompts for Lawyers</h3>
              <p className="text-gray-400 text-sm">Contract analysis, legal research, client communication, and workflow automation.</p>
            </Link>
            <Link
              href="/chatgpt-email-marketing-prompts"
              className="p-6 bg-gray-800 rounded-lg hover:border-purple-500 border border-gray-700 transition-colors"
            >
              <h3 className="font-semibold text-lg mb-2">ChatGPT Email Marketing Prompts</h3>
              <p className="text-gray-400 text-sm">Campaign strategy, email copy, personalization, and performance optimization.</p>
            </Link>
            <Link
              href="/ai-prompts-content-creators"
              className="p-6 bg-gray-800 rounded-lg hover:border-pink-500 border border-gray-700 transition-colors"
            >
              <h3 className="font-semibold text-lg mb-2">AI Prompts for Content Creators</h3>
              <p className="text-gray-400 text-sm">Content strategy, video scripts, social media, and audience growth ideas.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-gray-700 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Save Time with AI?</h2>
          <p className="text-xl text-gray-400 mb-8">Start using these prompts today and automate your most time-consuming business tasks.</p>
          <button
            className="px-8 py-3 rounded-lg font-semibold text-white transition-colors"
            style={{ backgroundColor: ACCENT_COLOR }}
          >
            Browse More Prompts
          </button>
        </div>
      </section>
    </main>
  );
}
