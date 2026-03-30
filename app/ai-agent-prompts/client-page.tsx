'use client';

import Link from 'next/link';
import { useState } from 'react';

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-[#8B5CF6] transition-colors">
      <p className="text-gray-300 text-sm mb-3 line-clamp-3">{prompt}</p>
      <button
        onClick={handleCopy}
        className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold py-2 px-3 rounded transition-colors text-sm"
      >
        {copied ? '✓ Copied' : 'Copy Prompt'}
      </button>
    </div>
  );
};

const Accordion = ({ items }: { items: Array<{ q: string; a: string }> }) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={idx} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full flex justify-between items-center p-4 hover:bg-gray-800 transition-colors text-left"
          >
            <span className="text-gray-200 font-semibold text-sm">{item.q}</span>
            <span className={`text-[#8B5CF6] transition-transform ${open === idx ? 'rotate-180' : ''}`}>▼</span>
          </button>
          {open === idx && (
            <div className="bg-gray-800 p-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function AIAgentPromptsPage() {
  const faqItems = [
    {
      q: 'What is an AI Agent?',
      a: 'An AI Agent is an autonomous system powered by language models that can understand goals, break them into subtasks, execute actions, and iterate based on feedback. Agents can use multiple tools, access APIs, and make decisions without constant human intervention.'
    },
    {
      q: 'How do agents differ from chatbots?',
      a: 'Chatbots respond to user input reactively, while agents act autonomously. Agents can plan multi-step workflows, use tools, remember context across conversations, and achieve goals without waiting for user prompts at each step.'
    },
    {
      q: 'What tools can AI agents use?',
      a: 'AI agents can integrate with APIs, databases, file systems, email, calendar systems, web browsers, data analytics tools, and custom integrations. The tools available depend on your agent architecture and the integrations you set up.'
    },
    {
      q: 'How do I measure agent performance?',
      a: 'Track metrics like task completion rate, speed of execution, accuracy of outputs, cost per operation, and error rates. Monitor conversations to identify where agents get stuck or misunderstand goals, and refine prompts based on failure patterns.'
    },
    {
      q: 'Can agents handle multi-step complex workflows?',
      a: 'Yes. Agents excel at multi-step workflows. They can break down complex goals into subtasks, execute them in sequence, handle dependencies, recover from failures, and adjust their approach based on intermediate results.'
    },
    {
      q: 'How do I prevent agents from making mistakes?',
      a: 'Use detailed system prompts with clear constraints, implement approval workflows for critical actions, add guardrails that limit what agents can do, test extensively with edge cases, and monitor outputs before they affect users.'
    },
    {
      q: 'What programming languages work with AI agents?',
      a: 'Python (with LangChain, LlamaIndex, AutoGen) and JavaScript/TypeScript are most common. You can also use tools like n8n, Make, and Zapier for visual agent building without coding.'
    },
    {
      q: 'How much do AI agents cost to run?',
      a: 'Costs depend on API usage, tool integrations, frequency of execution, and model size. A well-designed agent that makes fewer API calls costs less. Track token usage and optimize prompts to reduce unnecessary processing.'
    },
    {
      q: 'Can agents work in real-time applications?',
      a: 'Yes, but latency matters. For customer-facing applications, you may need to optimize response times, use faster models, cache results, and plan for high throughput. Background agents can run without time constraints.'
    },
    {
      q: 'How do I ensure agents stay on task?',
      a: 'Use goal-oriented prompts that clearly state objectives and success criteria. Implement feedback loops where agents check their progress, allow them to ask clarifying questions, and set limits on the number of iterations they can attempt.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '100+ AI Agent Prompts for Autonomous Systems',
            description: 'Comprehensive collection of AI agent prompts for workflow automation, task execution, customer service, data analysis, and research. Build intelligent autonomous systems.',
            author: { '@type': 'Organization', name: 'GPT Prompts' },
            datePublished: '2025-01-15',
            image: 'https://gptprompts.ai/og-image.jpg'
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a }
            }))
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-white">100+ AI Agent Prompts</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Build autonomous AI agents that can plan, execute, and learn. Curated prompts for workflow automation, customer service, research, content generation, and data analysis.
          </p>
        </div>

        {/* Workflow Automation & Task Execution */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#8B5CF6]">Workflow Automation & Task Execution</h2>
          <p className="text-gray-400 mb-8">Create agents that automate repetitive tasks and orchestrate complex workflows</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Design an AI agent that monitors email, extracts meeting requests, checks calendar availability, and auto-schedules meetings with confirmation responses." />
            <CopyCard prompt="Create an agent that processes customer support tickets, categorizes them by urgency, drafts responses, routes to specialists, and tracks resolution status." />
            <CopyCard prompt="Build an agent that tracks project deadlines, identifies at-risk tasks, escalates blockers to managers, and generates weekly project status reports." />
            <CopyCard prompt="Design an agent that crawls competitor websites, extracts pricing data, compares it to your offerings, flags changes, and updates pricing strategy recommendations." />
            <CopyCard prompt="Create an agent that monitors social media mentions, classifies sentiment, routes urgent customer complaints to support, and suggests response strategies." />
            <CopyCard prompt="Build an agent that processes expense reports, validates receipts, checks policy compliance, approves valid submissions, and flags suspicious claims for review." />
          </div>
        </div>

        {/* Customer Service & Support */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#8B5CF6]">Customer Service & Support Agents</h2>
          <p className="text-gray-400 mb-8">Deploy intelligent agents that handle customer interactions and support requests</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Create a customer support agent that handles multi-turn conversations, retrieves relevant product information, generates personalized solutions, and escalates complex issues to humans." />
            <CopyCard prompt="Design an agent that answers FAQs, troubleshoots technical issues, provides step-by-step guidance, offers alternative solutions, and collects feedback on response quality." />
            <CopyCard prompt="Build an agent that handles refund and returns requests, verifies eligibility, processes approvals, generates shipping labels, and sends status updates." />
            <CopyCard prompt="Create an agent that onboards new customers, explains features, customizes settings, provides training resources, and schedules follow-up check-ins." />
            <CopyCard prompt="Design an agent that proactively reaches out to inactive users, identifies churn reasons, offers retention incentives, and tracks re-engagement success." />
            <CopyCard prompt="Build an agent that handles billing inquiries, explains charges, processes payments, issues invoices, and manages subscription changes." />
          </div>
        </div>

        {/* Research & Data Analysis */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#8B5CF6]">Research & Data Analysis Agents</h2>
          <p className="text-gray-400 mb-8">Design agents that perform research, analyze data, and generate insights</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Create an agent that researches market trends, collects competitor intelligence, analyzes industry reports, and generates strategic recommendations for leadership." />
            <CopyCard prompt="Design an agent that queries databases, aggregates data from multiple sources, detects anomalies, generates visualizations, and alerts when thresholds are exceeded." />
            <CopyCard prompt="Build an agent that analyzes customer feedback across channels, identifies themes, prioritizes feature requests, and summarizes insights for product teams." />
            <CopyCard prompt="Create an agent that monitors scientific publications, summarizes recent research, identifies breakthrough findings, and flags implications for your industry." />
            <CopyCard prompt="Design an agent that performs financial analysis on quarterly reports, calculates key metrics, compares YoY performance, and flags concerns for CFO review." />
            <CopyCard prompt="Build an agent that tracks industry job listings, identifies skill gaps in your team, recommends hiring priorities, and sources candidate profiles." />
          </div>
        </div>

        {/* Content Creation & Generation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#8B5CF6]">Content Creation & Generation Agents</h2>
          <p className="text-gray-400 mb-8">Deploy agents that generate, edit, and optimize content at scale</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Create an agent that generates blog posts from topic briefs, includes research, optimizes for SEO, creates social media summaries, and schedules publication." />
            <CopyCard prompt="Design an agent that drafts marketing copy for products, A/B tests variations, generates email campaigns, and analyzes performance metrics." />
            <CopyCard prompt="Build an agent that generates video scripts, storyboards, creates shot lists, suggests music, and provides production timing guidance." />
            <CopyCard prompt="Create an agent that writes social media captions for images, suggests hashtags, schedules posts to optimal times, and tracks engagement." />
            <CopyCard prompt="Design an agent that creates product descriptions from specifications, optimizes for different platforms, generates FAQs, and manages translations." />
            <CopyCard prompt="Build an agent that generates meeting summaries, extracts action items, assigns ownership, creates follow-up agendas, and sends distributed notes." />
          </div>
        </div>

        {/* Decision-Making & Strategy */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#8B5CF6]">Decision-Making & Strategy Agents</h2>
          <p className="text-gray-400 mb-8">Create agents that help teams make data-driven decisions and execute strategies</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Design an agent that recommends marketing channel allocation based on ROI data, suggests budget shifts, and predicts impact of changes." />
            <CopyCard prompt="Create an agent that evaluates vendor proposals, scores them against criteria, identifies best options, and highlights trade-offs for procurement teams." />
            <CopyCard prompt="Build an agent that forecasts sales pipelines, identifies at-risk deals, suggests intervention strategies, and flags high-probability opportunities." />
            <CopyCard prompt="Design an agent that evaluates new product ideas against market data, competitive landscape, and internal capabilities, provides go/no-go recommendations." />
            <CopyCard prompt="Create an agent that analyzes customer segmentation, identifies high-value groups, recommends targeting strategies, and optimizes resource allocation." />
            <CopyCard prompt="Build an agent that conducts risk assessment on initiatives, identifies potential failure points, recommends mitigation strategies, and flags dependencies." />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-16 border border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-[#8B5CF6]">Frequently Asked Questions</h2>
          <Accordion items={faqItems} />
        </div>

        {/* Related Pages */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-white">Explore More Prompt Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/sora-prompts" className="group bg-gray-800 p-6 rounded-lg hover:border-[#FF4500] border border-gray-700 transition-all">
              <h3 className="text-lg font-bold text-white group-hover:text-[#FF4500] transition-colors mb-2">Sora Prompts</h3>
              <p className="text-gray-400 text-sm">Video generation prompts for cinematic and creative content</p>
            </Link>
            <Link href="/openai-codex-prompts" className="group bg-gray-800 p-6 rounded-lg hover:border-[#10A37F] border border-gray-700 transition-all">
              <h3 className="text-lg font-bold text-white group-hover:text-[#10A37F] transition-colors mb-2">OpenAI Codex</h3>
              <p className="text-gray-400 text-sm">Code generation prompts for Python, JavaScript, SQL, and APIs</p>
            </Link>
            <Link href="/gemini-advanced-prompts" className="group bg-gray-800 p-6 rounded-lg hover:border-[#4285F4] border border-gray-700 transition-all">
              <h3 className="text-lg font-bold text-white group-hover:text-[#4285F4] transition-colors mb-2">Gemini Advanced</h3>
              <p className="text-gray-400 text-sm">Advanced prompts for Google&apos;s Gemini model</p>
            </Link>
            <Link href="/ai-prompts-email-writing" className="group bg-gray-800 p-6 rounded-lg hover:border-[#EA4335] border border-gray-700 transition-all">
              <h3 className="text-lg font-bold text-white group-hover:text-[#EA4335] transition-colors mb-2">Email Writing</h3>
              <p className="text-gray-400 text-sm">Prompts for crafting professional and engaging emails</p>
            </Link>
            <Link href="/gpt-4-5-prompts" className="group bg-gray-800 p-6 rounded-lg hover:border-[#10A37F] border border-gray-700 transition-all">
              <h3 className="text-lg font-bold text-white group-hover:text-[#10A37F] transition-colors mb-2">GPT-4.5 Prompts</h3>
              <p className="text-gray-400 text-sm">Expert prompts for OpenAI&apos;s most advanced model</p>
            </Link>
            <Link href="/perplexity-deep-research-prompts" className="group bg-gray-800 p-6 rounded-lg hover:border-[#20b2aa] border border-gray-700 transition-all">
              <h3 className="text-lg font-bold text-white group-hover:text-[#20b2aa] transition-colors mb-2">Perplexity Deep Research</h3>
              <p className="text-gray-400 text-sm">AI research prompts with live web sources</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
