'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

const ACCENT_COLOR = '#7C3AED';

const PROMPTS = {
  'Campaign Strategy': [
    {
      title: 'Email Campaign Brief Generator',
      description: 'Generate comprehensive email campaign briefs with objectives, audience segmentation, and success metrics.',
      prompt: 'Create a detailed email campaign brief for [PRODUCT/SERVICE] targeting [AUDIENCE]. Include campaign objectives, key messages, audience segments, email sequence structure, success metrics, timeline, and recommended CTAs. Format as a structured brief document.'
    },
    {
      title: 'Audience Persona Creator',
      description: 'Develop detailed buyer personas for email segmentation and personalization strategies.',
      prompt: 'Create 3 detailed email marketing buyer personas for a [INDUSTRY] business selling [PRODUCT]. For each persona include: name, age, role, challenges, goals, email preferences, purchase triggers, and recommended email messaging. Use realistic details and format as a table.'
    },
    {
      title: 'Re-engagement Campaign Planner',
      description: 'Plan strategic re-engagement sequences for dormant subscribers and lapsed customers.',
      prompt: 'Design a 5-email re-engagement sequence for inactive subscribers on a [PRODUCT] email list. Include subject lines, email hooks, value propositions, offer strategies, and final sunset message. Target subscribers inactive for [X MONTHS].'
    }
  ],
  'Email Copy & Subject Lines': [
    {
      title: 'Subject Line A/B Test Generator',
      description: 'Generate multiple subject line variations optimized for open rates and click-through performance.',
      prompt: 'Generate 8 subject line variations for an email promoting [OFFER/PRODUCT] to [AUDIENCE]. Create 4 high-curiosity lines and 4 benefit-driven lines. Include estimated open rate impact for each. Format with the line, category, and reasoning.'
    },
    {
      title: 'Email Copy Framework Builder',
      description: 'Build persuasive email copy structures using proven copywriting formulas and frameworks.',
      prompt: 'Write a [LENGTH: SHORT/MEDIUM/LONG] email promoting [OFFER] to [AUDIENCE] using the [FRAMEWORK: AIDA/PAS/BAB] framework. Include compelling hook, clear value proposition, social proof, objection handling, and strong CTA. Target audience pain point: [PAIN POINT].'
    },
    {
      title: 'Newsletter Content Generator',
      description: 'Generate engaging newsletter content with curated topics, stories, and CTAs.',
      prompt: 'Create a weekly newsletter email for [AUDIENCE] in the [INDUSTRY] space. Include: attention-grabbing headline, 3 curated content pieces with 2-sentence summaries, one featured article with 1-paragraph breakdown, reader tip, and 1-2 CTAs. Focus on value over selling.'
    },
    {
      title: 'Promotional Email Copywriter',
      description: 'Write high-converting promotional emails with urgency, social proof, and benefit-focused messaging.',
      prompt: 'Write a promotional email for [PRODUCT/SERVICE] offering [DISCOUNT/OFFER] valid until [DATE]. Target [AUDIENCE]. Include: urgency-driven subject line, compelling opening, 3 key benefits with social proof, scarcity/exclusivity angle, prominent CTA, and P.S. line.'
    }
  ],
  'Personalization & Segmentation': [
    {
      title: 'Dynamic Content Personalization Map',
      description: 'Map dynamic content blocks and personalization tokens across email sequences.',
      prompt: 'Create a personalization strategy for a [X]-email nurture sequence for [PRODUCT]. Identify 4 key dynamic content variables (company size, industry, use case, experience level). Show how each variable changes email copy, offers, and CTAs across the sequence. Format as a matrix.'
    },
    {
      title: 'Segmentation Strategy Designer',
      description: 'Design email list segmentation strategies based on behavior, demographics, and engagement.',
      prompt: 'Design a segmentation strategy for an email list of [AUDIENCE TYPE] ranging from complete beginners to advanced users. Create 5 segments with behavioral triggers, messaging themes, recommended email frequency, and success metrics. Include segment sizing estimates.'
    },
    {
      title: 'Behavioral Trigger Email Builder',
      description: 'Build event-triggered and behavior-based email sequences with conditional logic.',
      prompt: 'Design a 4-email behavioral trigger sequence for [TRIGGER EVENT: e.g., cart abandonment, webinar signup, trial signup]. For each email include: timing, subject line, primary copy focus, personalization tokens, CTA, and conditional logic for next steps based on subscriber action.'
    }
  ],
  'Metrics & Optimization': [
    {
      title: 'Email Performance Report Template',
      description: 'Create comprehensive email campaign performance reports with insights and recommendations.',
      prompt: 'Create an email performance report template for analyzing campaign results. Include sections for: open rate, click rate, conversion rate, unsubscribe rate, bounce rate, revenue metrics, performance vs. benchmarks, winning elements, improvement areas, and actionable recommendations. Format for stakeholder presentation.'
    },
    {
      title: 'Testing Plan Generator',
      description: 'Generate structured A/B testing plans for email optimization across multiple variables.',
      prompt: 'Create a 12-week email testing plan for optimizing campaigns. Include: Week-by-week test variables (subject lines, send times, copy length, CTA placement, imagery, personalization), sample sizes, success metrics, and hypothesis for each test. Prioritize tests by expected impact.'
    },
    {
      title: 'List Health Audit Checklist',
      description: 'Develop comprehensive email list health audits and remediation strategies.',
      prompt: 'Create an email list health audit checklist. Include sections on: list growth sources, engagement metrics, deliverability indicators, segment quality, automation health, compliance status, and subscriber lifecycle. Add red flags, remediation steps, and best practices for each category.'
    }
  ]
};

const FAQ_ITEMS = [
  {
    question: 'Can ChatGPT write entire email campaigns for me?',
    answer: 'Yes, ChatGPT can draft complete email campaigns from strategy through copy. However, the best results come from providing it with specific context: your audience details, brand voice, business objectives, and competitive positioning. You should review generated content for brand alignment, fact-check claims, and personalize where needed. The more detailed your prompt, the stronger the output.'
  },
  {
    question: 'How do I ensure ChatGPT-generated emails comply with email marketing laws?',
    answer: 'ChatGPT can help draft compliant emails if you include legal requirements in your prompts. Always request inclusion of: proper unsubscribe links, physical mailing address, clear identification of promotional content, and compliance with CAN-SPAM, GDPR, or other applicable laws. However, always review generated content with your legal or compliance team, as laws vary by jurisdiction and use case.'
  },
  {
    question: 'Will using ChatGPT emails make my campaigns feel generic or robotic?',
    answer: 'ChatGPT-generated content can feel generic if you use generic prompts. To maintain authenticity, feed ChatGPT specific details: your unique value proposition, brand personality, customer pain points, and real examples from your business. The more context and specificity you provide, the more personalized and compelling the output becomes. Always edit to inject your brand voice.'
  },
  {
    question: 'How accurate are ChatGPT-generated statistics or industry benchmarks in emails?',
    answer: 'ChatGPT can hallucinate or cite outdated statistics. Never publish statistics or benchmarks without independent verification. Use ChatGPT to suggest metrics and ideas, then validate them against primary sources, recent studies, or your own data before including them in live emails. Always fact-check claims about industry averages, conversion rates, or market sizes.'
  },
  {
    question: 'Can ChatGPT help with email segmentation strategy?',
    answer: 'ChatGPT excels at segmentation strategy. You can ask it to design segment definitions, identify behavioral triggers, map personalization rules, and outline segment-specific messaging. Ask specific questions like "How should I segment a list of [AUDIENCE]?" or "Create 5 email segments based on [DATA POINTS]." Combine AI-generated suggestions with your actual data for best results.'
  },
  {
    question: 'How do I know if a ChatGPT-generated subject line will perform well?',
    answer: 'ChatGPT can generate multiple subject line variations following proven formulas (curiosity, benefit-driven, urgency, social proof). However, performance depends on your specific audience and context. Always A/B test subject lines with real subscribers. Use ChatGPT to generate variations quickly, then test with a segment of your list to identify what resonates before sending broadly.'
  },
  {
    question: 'Can ChatGPT write personalized emails at scale?',
    answer: 'ChatGPT can write the templates and personalization frameworks, but your email platform applies personalization at scale. Create dynamic email templates with merge tags (first name, company, purchase history, etc.), then use your ESP (Mailchimp, HubSpot, Klaviyo) to populate personalized fields. ChatGPT is excellent for designing the structure and copy variations.'
  },
  {
    question: 'How do I avoid overclaiming or misleading readers in AI-generated promotional emails?',
    answer: 'Always review ChatGPT output for overstated claims, guarantees, or misleading language. Provide clear guardrails in your prompt: "Write an email promoting [PRODUCT] with claims I can support: [LIST ACTUAL BENEFITS]." Fact-check every claim before sending. Include disclaimers for any conditional benefits, and prioritize honesty over conversion—this builds long-term trust and protects from regulatory issues.'
  },
  {
    question: 'Can ChatGPT help me understand why my emails underperform?',
    answer: 'ChatGPT can analyze your campaign metrics and suggest improvements. Share your open rate, click rate, unsubscribe rate, and describe your audience and send frequency. ChatGPT can identify patterns (e.g., "Your unsubscribe rate suggests too-frequent sends") and recommend optimizations. Combine AI insights with your own email analytics data for the most accurate diagnosis.'
  },
  {
    question: 'How should I use ChatGPT for email list re-engagement campaigns?',
    answer: 'ChatGPT can design entire re-engagement sequences with subject lines, messaging, and offers. Describe your inactive subscriber segment (dormant since [X MONTHS], original source, etc.) and ask ChatGPT to create a 3-5 email win-back sequence. It can suggest messaging angles (highlighting what is new, offering exclusive re-entry incentives, etc.) and timing strategies.'
  },
  {
    question: 'Does using ChatGPT emails affect my sender reputation or deliverability?',
    answer: 'ChatGPT-generated content does not inherently harm deliverability. What matters is subscriber engagement and compliance. If ChatGPT-generated emails are low-quality, irrelevant, or misleading, engagement suffers, which can hurt reputation. Always focus on relevance, personalization, and genuine value. Monitor deliverability metrics like bounce rate, complaint rate, and unsubscribe rate after deploying new content.'
  }
];

const CopyCard = ({ title, description, prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all"
        style={{
          backgroundColor: copied ? '#10b981' : ACCENT_COLOR,
          color: 'white'
        }}
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied!
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy Prompt
          </>
        )}
      </button>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 bg-gray-900 hover:bg-gray-800 transition-colors"
      >
        <h3 className="text-left font-semibold text-white">{question}</h3>
        <div style={{ color: ACCENT_COLOR }}>
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      {expanded && (
        <div className="p-4 bg-gray-800 border-t border-gray-700">
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function EmailMarketingPromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ChatGPT Email Marketing Prompts: 25+ Templates to Scale Your Campaigns',
            description: 'Professional ChatGPT prompts for email marketers: campaign strategy, copy writing, personalization, and optimization.',
            image: 'https://gptprompts.ai/og-email-marketing.png',
            datePublished: '2025-01-15',
            author: {
              '@type': 'Organization',
              name: 'GPTPrompts.AI'
            },
            publisher: {
              '@type': 'Organization',
              name: 'GPTPrompts.AI'
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="border-b border-gray-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor: ACCENT_COLOR + '20',
                color: ACCENT_COLOR
              }}
            >
              Email Marketing
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            ChatGPT Email Marketing Prompts
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            25+ professional prompts to write compelling campaigns, optimize performance, and scale email revenue. From subject lines to segmentation strategy, get ChatGPT templates for every stage of your email marketing.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Campaign Strategy', 'Subject Lines', 'Copy Writing', 'Personalization', 'A/B Testing'].map(tag => (
              <span key={tag} className="px-3 py-1 text-sm border border-gray-600 rounded-full text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {Object.entries(PROMPTS).map(([category, items]) => (
        <section key={category} className="border-b border-gray-700 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl font-bold mb-8"
              style={{ color: ACCENT_COLOR }}
            >
              {category}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {items.map((prompt, idx) => (
                <CopyCard key={idx} {...prompt} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="border-b border-gray-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: ACCENT_COLOR }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <FAQItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="border-b border-gray-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Explore More Prompts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/ai-prompts-lawyers" className="group">
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-500 bg-opacity-20 flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition-all">
                  <span className="text-blue-400 font-bold">⚖️</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Prompts for Lawyers</h3>
                <p className="text-sm text-gray-400">Legal research, contract review, and case analysis</p>
              </div>
            </Link>

            <Link href="/ai-prompts-small-business" className="group">
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-green-500 transition-all">
                <div className="w-12 h-12 rounded-lg bg-green-500 bg-opacity-20 flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition-all">
                  <span className="text-green-400 font-bold">💼</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Prompts for Small Business</h3>
                <p className="text-sm text-gray-400">Marketing, operations, and customer service</p>
              </div>
            </Link>

            <Link href="/ai-prompts-content-creators" className="group">
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-pink-500 transition-all">
                <div className="w-12 h-12 rounded-lg bg-pink-500 bg-opacity-20 flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition-all">
                  <span className="text-pink-400 font-bold">✨</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Prompts for Content Creators</h3>
                <p className="text-sm text-gray-400">Social media, blogs, and multimedia content</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Email Campaigns?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start using these prompts with ChatGPT today to write better emails, faster.
          </p>
          <button
            style={{ backgroundColor: ACCENT_COLOR }}
            className="px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Get Started with ChatGPT
          </button>
        </div>
      </section>
    </div>
  );
}
