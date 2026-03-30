'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, Headphones, MessageSquare, Users, Lightbulb, Shield, TrendingUp } from 'lucide-react';

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
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#2563EB]/50 transition-colors">
      <p className="text-sm text-gray-300 mb-3 line-clamp-3">{prompt}</p>
      <button
        onClick={handleCopy}
        className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors"
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

function FAQComponent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "How can I use AI to improve customer response time?",
      answer: "AI can help by using chatbots for instant first-response, automating ticket routing based on keywords and urgency, and creating smart response templates that agents customize. This reduces average response time from hours to minutes."
    },
    {
      question: "What types of customer service tasks can AI handle independently?",
      answer: "AI excels at: answering FAQs, password resets, order tracking, basic troubleshooting, appointment scheduling, and initial complaint categorization. Complex issues requiring empathy or judgment should still involve humans."
    },
    {
      question: "How do I maintain a human touch while using AI automation?",
      answer: "Use AI for efficiency (routing, first response, documentation), but keep humans in control. Always offer easy escalation to a real agent, personalize AI responses with customer context, and train agents to use AI as a tool, not a replacement."
    },
    {
      question: "How can I train my team to work effectively with AI tools?",
      answer: "Focus on: understanding what AI can and can't do, prompt engineering for better outputs, using AI to augment (not replace) their work, and building confidence through hands-on practice. Regular feedback loops help teams improve their AI usage."
    },
    {
      question: "What metrics should I track to measure AI customer service improvements?",
      answer: "Track: response time (before/after), resolution rate (first-contact resolution), customer satisfaction scores, cost per interaction, agent productivity (tickets handled per hour), and escalation rate. Focus on both efficiency and quality."
    },
    {
      question: "How do I handle sensitive customer information with AI?",
      answer: "Ensure your AI tools are GDPR and privacy-compliant, mask sensitive data before processing, use on-premise or encrypted cloud solutions, and maintain human oversight for sensitive issues. Never store raw customer data in untrained AI systems."
    },
    {
      question: "Can AI help with customer retention and upselling?",
      answer: "Yes. AI can analyze purchase history to recommend relevant products, predict churn risk to trigger retention campaigns, personalize offers based on customer behavior, and identify cross-sell opportunities. Always verify AI recommendations before customer contact."
    },
    {
      question: "How do I integrate AI into my existing customer service tools?",
      answer: "Use APIs and integration platforms (Make, Zapier, n8n) to connect AI models to your CRM, ticketing system, or messaging platform. Start with one workflow, test it, and scale. Most modern customer service platforms have built-in AI options."
    },
    {
      question: "What's the best way to handle customer complaints with AI?",
      answer: "Use AI to categorize and route complaints to the right team, draft empathetic responses for agent review, flag urgent issues for immediate escalation, and analyze complaint patterns to identify systemic issues. Always have a human make the final decision."
    },
    {
      question: "How can I use AI to reduce customer service costs?",
      answer: "Automate routine inquiries (saving $10-15 per ticket), reduce average handling time with AI-assisted responses, predict high-value customers to prioritize support, and use AI analytics to identify process improvements. ROI typically appears within 3-6 months."
    },
    {
      question: "What are common mistakes when implementing AI in customer service?",
      answer: "Avoid: over-automating without testing, ignoring customer feedback on AI interactions, using AI without proper training data, failing to escalate to humans when needed, and not monitoring for AI failures. Start small, measure impact, and scale."
    },
    {
      question: "How do I measure customer satisfaction with AI-assisted support?",
      answer: "Use CSAT surveys after interactions, track NPS specifically for AI vs. human support, monitor sentiment in feedback comments, and compare customer effort scores. Always include an option to escalate to human support and track those requests."
    }
  ];

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => (
        <div key={index} className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden">
          <button
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#2a2a2a] transition-colors text-left"
          >
            <span className="text-sm font-medium text-gray-200">{item.question}</span>
            <ChevronDown
              size={18}
              className={`text-[#2563EB] flex-shrink-0 transition-transform ${
                expandedIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {expandedIndex === index && (
            <div className="px-4 py-3 bg-[#0f0f0f] border-t border-[#333] text-sm text-gray-300">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function CustomerServicePromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Article', 'FAQPage'],
            headline: 'AI Prompts for Customer Service',
            description: 'Comprehensive prompt library and FAQs for implementing AI in customer service workflows.',
            author: {
              '@type': 'Organization',
              name: 'GPT Prompts',
            },
            datePublished: '2026-03-28',
            mainEntity: {
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How can I use AI to improve customer response time?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'AI can help by using chatbots for instant first-response, automating ticket routing based on keywords and urgency, and creating smart response templates that agents customize. This reduces average response time from hours to minutes.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What types of customer service tasks can AI handle independently?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'AI excels at: answering FAQs, password resets, order tracking, basic troubleshooting, appointment scheduling, and initial complaint categorization. Complex issues requiring empathy or judgment should still involve humans.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I maintain a human touch while using AI automation?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Use AI for efficiency (routing, first response, documentation), but keep humans in control. Always offer easy escalation to a real agent, personalize AI responses with customer context, and train agents to use AI as a tool, not a replacement.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How can I train my team to work effectively with AI tools?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Focus on: understanding what AI can and can\'t do, prompt engineering for better outputs, using AI to augment (not replace) their work, and building confidence through hands-on practice. Regular feedback loops help teams improve their AI usage.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What metrics should I track to measure AI customer service improvements?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Track: response time (before/after), resolution rate (first-contact resolution), customer satisfaction scores, cost per interaction, agent productivity (tickets handled per hour), and escalation rate. Focus on both efficiency and quality.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I handle sensitive customer information with AI?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ensure your AI tools are GDPR and privacy-compliant, mask sensitive data before processing, use on-premise or encrypted cloud solutions, and maintain human oversight for sensitive issues. Never store raw customer data in untrained AI systems.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can AI help with customer retention and upselling?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. AI can analyze purchase history to recommend relevant products, predict churn risk to trigger retention campaigns, personalize offers based on customer behavior, and identify cross-sell opportunities. Always verify AI recommendations before customer contact.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I integrate AI into my existing customer service tools?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Use APIs and integration platforms (Make, Zapier, n8n) to connect AI models to your CRM, ticketing system, or messaging platform. Start with one workflow, test it, and scale. Most modern customer service platforms have built-in AI options.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What\'s the best way to handle customer complaints with AI?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Use AI to categorize and route complaints to the right team, draft empathetic responses for agent review, flag urgent issues for immediate escalation, and analyze complaint patterns to identify systemic issues. Always have a human make the final decision.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How can I use AI to reduce customer service costs?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Automate routine inquiries (saving $10-15 per ticket), reduce average handling time with AI-assisted responses, predict high-value customers to prioritize support, and use AI analytics to identify process improvements. ROI typically appears within 3-6 months.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are common mistakes when implementing AI in customer service?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Avoid: over-automating without testing, ignoring customer feedback on AI interactions, using AI without proper training data, failing to escalate to humans when needed, and not monitoring for AI failures. Start small, measure impact, and scale.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I measure customer satisfaction with AI-assisted support?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Use CSAT surveys after interactions, track NPS specifically for AI vs. human support, monitor sentiment in feedback comments, and compare customer effort scores. Always include an option to escalate to human support and track those requests.',
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-4">
          <Headphones size={32} className="text-[#2563EB]" />
          <h1 className="text-4xl font-bold">AI Prompts for Customer Service</h1>
        </div>
        <p className="text-lg text-gray-400">
          Elevate your customer support with AI-powered prompts. Faster response times, happier customers, smarter teams.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        {/* First Aid Response Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare size={24} className="text-[#2563EB]" />
            <h2 className="text-2xl font-bold">First Aid Response</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <CopyCard prompt="Analyze this customer complaint and provide a concise, empathetic first response that acknowledges their issue and sets clear next steps for resolution. Use a warm, professional tone." />
            <CopyCard prompt="Draft a response to a negative review that turns it into a positive customer relationship opportunity. Include specific steps we'll take to make it right, without being defensive." />
            <CopyCard prompt="Create a follow-up message for a customer who hasn't responded in 3 days. Be friendly and helpful, not pushy. Include a clear reason to respond and make it easy for them." />
          </div>
        </section>

        {/* Ticket Automation & Routing Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Users size={24} className="text-[#2563EB]" />
            <h2 className="text-2xl font-bold">Ticket Automation & Routing</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <CopyCard prompt="Categorize this customer support ticket by: urgency level (critical/high/medium/low), issue type, required department, and suggested priority queue. Provide reasoning for each classification." />
            <CopyCard prompt="Extract key information from this support ticket and format it as a structured summary: customer pain point, context, previous interactions, and what specific help they need." />
            <CopyCard prompt="Suggest the best support channel (chat, email, phone, video call) for this customer issue based on complexity, urgency, and customer preference. Explain your reasoning." />
          </div>
        </section>

        {/* Troubleshooting & Problem Solving Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb size={24} className="text-[#2563EB]" />
            <h2 className="text-2xl font-bold">Troubleshooting & Problem Solving</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <CopyCard prompt="Create a step-by-step troubleshooting guide for this customer issue. Use simple language, assume no technical knowledge, and include common mistakes to avoid." />
            <CopyCard prompt="Analyze this recurring customer problem across our recent tickets and suggest root causes. What systemic issue might we need to fix to prevent this from happening again?" />
            <CopyCard prompt="Draft a knowledge base article for our most common customer question. Structure it with: problem statement, why it happens, solution, and preventive tips." />
          </div>
        </section>

        {/* Quality & Compliance Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Shield size={24} className="text-[#2563EB]" />
            <h2 className="text-2xl font-bold">Quality & Compliance</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <CopyCard prompt="Review this customer service interaction for tone, helpfulness, accuracy, and compliance. Provide feedback on what was done well and what could improve." />
            <CopyCard prompt="Create guidelines for handling this type of sensitive customer situation (e.g., complaints, refunds, escalations) while maintaining brand voice and legal compliance." />
            <CopyCard prompt="Draft a template response for common complaints that maintains empathy, takes responsibility where appropriate, and offers clear solutions. Make it flexible enough to customize." />
          </div>
        </section>

        {/* Customer Insights & Retention Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={24} className="text-[#2563EB]" />
            <h2 className="text-2xl font-bold">Customer Insights & Retention</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <CopyCard prompt="Analyze this customer's interaction history and identify: their primary pain points, churn risk level, upsell opportunities, and recommended next steps for our team." />
            <CopyCard prompt="Create a personalized outreach message to re-engage a customer who hasn't purchased in 6+ months. Reference their past preferences and offer something relevant to them." />
            <CopyCard prompt="Based on this customer issue, suggest preventive measures and proactive communication that could improve satisfaction and reduce future support tickets." />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <FAQComponent />
        </section>

        {/* Related Pages */}
        <section className="border-t border-[#333] pt-12">
          <h2 className="text-2xl font-bold mb-6">Related Prompt Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/chatgpt-prompts-excel"
              className="block bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#217346]/50 transition-colors"
            >
              <h3 className="font-bold text-[#217346] mb-2">Excel Prompts</h3>
              <p className="text-sm text-gray-400">Master formulas, automation, and data analysis</p>
            </a>
            <a
              href="/chatgpt-prompts-business-plans"
              className="block bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#1E40AF]/50 transition-colors"
            >
              <h3 className="font-bold text-[#1E40AF] mb-2">Business Plans</h3>
              <p className="text-sm text-gray-400">Build winning strategies and investor decks</p>
            </a>
            <a
              href="/ai-prompts-presentations"
              className="block bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#F59E0B]/50 transition-colors"
            >
              <h3 className="font-bold text-[#F59E0B] mb-2">Presentations</h3>
              <p className="text-sm text-gray-400">Create compelling slides and narratives</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
