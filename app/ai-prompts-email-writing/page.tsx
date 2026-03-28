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
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-[#EA4335] transition-colors">
      <p className="text-gray-300 text-sm mb-3 line-clamp-3">{prompt}</p>
      <button
        onClick={handleCopy}
        className="w-full bg-[#EA4335] hover:bg-[#D33425] text-white font-semibold py-2 px-3 rounded transition-colors text-sm"
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
            <span className={`text-[#EA4335] transition-transform ${open === idx ? 'rotate-180' : ''}`}>▼</span>
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

export default function EmailWritingPromptsPage() {
  const faqItems = [
    {
      q: 'What makes an effective professional email?',
      a: 'An effective professional email has a clear subject line, concise opening, specific purpose, professional tone, appropriate length, and a clear call-to-action. It respects the reader\'s time while conveying all necessary information without ambiguity.'
    },
    {
      q: 'How do I write emails that get responses?',
      a: 'Make your emails easy to read with short paragraphs, use a compelling subject line, address the recipient by name, provide context quickly, ask specific questions, and include a clear call-to-action. Follow up politely if you don\'t get a response within a week.'
    },
    {
      q: 'What\'s the ideal length for a professional email?',
      a: 'Keep it brief—aim for 3-5 short paragraphs maximum. Most people scan emails on mobile devices, so shorter is better. If you need to share extensive information, summarize in the email and attach detailed documents separately.'
    },
    {
      q: 'How do I write a follow-up email without seeming pushy?',
      a: 'Reference the original email, provide added value (new information or resources), assume they may have missed it rather than forgotten, keep a friendly tone, and give a new deadline if relevant. Space follow-ups 1-2 weeks apart and limit to 2-3 total attempts.'
    },
    {
      q: 'How should I handle sensitive or difficult topics in email?',
      a: 'For sensitive topics: use a respectful tone, acknowledge potential concerns, provide context, avoid accusatory language, offer a solution or next step, and consider scheduling a call instead of relying solely on email. Proofread carefully before sending.'
    },
    {
      q: 'What\'s the difference between formal and conversational email tone?',
      a: 'Formal email uses titles, full names, structured paragraphs, and professional language. Conversational email is friendlier, uses contractions, shorter lines, and feels more human. Choose based on relationship—clients may prefer formal, colleagues may prefer conversational.'
    },
    {
      q: 'How do I write subject lines that stand out?',
      a: 'Use specific words over vague ones. Include a benefit or clear purpose. Keep it under 50 characters. Avoid spam words like "urgent" or "guaranteed." Personalize when possible. Test variations to see what gets more opens and responses.'
    },
    {
      q: 'What email mistakes should I avoid?',
      a: 'Avoid typos and grammar errors, using all caps, vague subject lines, burying the main point, overusing exclamation marks, forgetting to attach promised files, replying-all accidentally, and sending when emotional. Proofread and wait before hitting send on important emails.'
    },
    {
      q: 'How do I craft an email that drives action?',
      a: 'Start with context or benefit, clearly state what you need, make it easy to say yes, provide options when appropriate, include a deadline, and use a specific call-to-action. Make the action as simple and low-friction as possible.'
    },
    {
      q: 'Can AI help me write better emails?',
      a: 'Yes. AI can help you draft initial email structures, improve tone, check grammar, generate subject line variations, adapt tone for different audiences, and brainstorm follow-up strategies. Use AI as a starting point, then personalize and review before sending.'
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
            headline: '100+ Email Writing Prompts for Professional Communication',
            description: 'Comprehensive collection of email writing prompts for sales, customer service, marketing, leadership, and professional communication. Master email writing for better results.',
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
          <h1 className="text-5xl font-bold mb-4 text-white">100+ Email Writing Prompts</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Master professional email communication with curated prompts for sales, customer service, leadership, negotiations, and everyday business correspondence.
          </p>
        </div>

        {/* Sales & Business Development */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#EA4335]">Sales & Business Development</h2>
          <p className="text-gray-400 mb-8">Craft compelling emails that open doors, build relationships, and close deals</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Write a cold outreach email to a prospective client in [industry] introducing [solution] and requesting a 15-minute discovery call. Include a clear value proposition and specific benefit." />
            <CopyCard prompt="Create a follow-up email sequence (3 emails over 2 weeks) for a lead who showed interest but didn't respond to initial contact. Each email should add new information or perspective." />
            <CopyCard prompt="Draft a proposal follow-up email after presenting a solution, addressing the prospect's potential concerns, reinforcing key benefits, and creating urgency for decision-making." />
            <CopyCard prompt="Write a win-back email to inactive customers highlighting improvements to your product/service and offering a special incentive to re-engage." />
            <CopyCard prompt="Create an email introducing yourself as a new sales representative to your predecessor's existing client base, establishing continuity and requesting a brief call." />
            <CopyCard prompt="Draft a partnership outreach email to a complementary business, highlighting mutual benefits, proposing specific collaboration ideas, and suggesting next steps." />
          </div>
        </div>

        {/* Customer Service & Support */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#EA4335]">Customer Service & Support</h2>
          <p className="text-gray-400 mb-8">Respond to customer issues with empathy, clarity, and solutions</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Write a response to a customer complaint acknowledging their frustration, taking responsibility, explaining the root cause, and offering specific compensation or solution." />
            <CopyCard prompt="Draft an email confirming receipt of a customer support ticket, providing a timeline for resolution, and setting expectations for next steps and communication frequency." />
            <CopyCard prompt="Create an email to a customer who experienced a service outage, apologizing for the disruption, explaining what happened, preventive measures, and compensatory offering." />
            <CopyCard prompt="Write a follow-up email to a resolved support case asking for feedback, inviting review, and offering additional resources or products that might help the customer." />
            <CopyCard prompt="Draft a proactive email to customers potentially affected by a product change, explaining the change, its benefits, transition support, and how to get help." />
            <CopyCard prompt="Create an email response to a feature request from a customer, acknowledging their suggestion, explaining your evaluation process, and keeping them informed of developments." />
          </div>
        </div>

        {/* Marketing & Engagement */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#EA4335]">Marketing & Engagement</h2>
          <p className="text-gray-400 mb-8">Drive engagement and conversions with strategic email campaigns</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Write a product launch announcement email highlighting key features, unique benefits, and a limited-time offer with clear CTA, optimized for urgency and excitement." />
            <CopyCard prompt="Create a welcome email sequence (first email to new subscribers) introducing your brand story, key value propositions, and setting expectations for future communications." />
            <CopyCard prompt="Draft an email campaign announcing a webinar or event with compelling subject line, agenda overview, speaker credentials, registration benefit, and deadline." />
            <CopyCard prompt="Write a re-engagement email to inactive subscribers offering fresh value, highlighting what they've missed, incentivizing re-engagement, or asking for preference updates." />
            <CopyCard prompt="Create a referral request email asking satisfied customers to recommend you, making it easy to share through a specific link and offering incentive for both parties." />
            <CopyCard prompt="Draft a seasonal or holiday email campaign creating emotional connection while promoting products/services, balancing promotional and value-driven messaging." />
          </div>
        </div>

        {/* Leadership & Internal Communications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#EA4335]">Leadership & Internal Communications</h2>
          <p className="text-gray-400 mb-8">Lead with clarity, build trust, and align teams through effective communication</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Write an email announcing organizational change (restructuring, policy shift, leadership change), providing context, impact assessment, and support resources available to team." />
            <CopyCard prompt="Draft a performance feedback email addressing a specific behavior or outcome, providing clear examples, explaining impact, offering support, and defining success criteria." />
            <CopyCard prompt="Create an email delegating an important project, clarifying objectives, deadlines, success metrics, available resources, and inviting questions or concerns." />
            <CopyCard prompt="Write a company announcement celebrating team achievement, connecting it to broader mission, recognizing key contributors, and framing next steps." />
            <CopyCard prompt="Draft a difficult email addressing team underperformance or policy violation, being direct about the issue, explaining consequences, and offering path to improvement." />
            <CopyCard prompt="Create an email inviting team feedback on a proposed initiative, explaining the rationale, asking specific questions, and defining how input will influence decisions." />
          </div>
        </div>

        {/* Negotiations & Relationship Building */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#EA4335]">Negotiations & Relationship Building</h2>
          <p className="text-gray-400 mb-8">Navigate complex conversations and strengthen business relationships</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Write a salary or contract negotiation email presenting your case with supporting data, respecting the other party's constraints, and proposing alternative solutions." />
            <CopyCard prompt="Draft an email declining an offer professionally while maintaining goodwill, expressing appreciation, offering alternative arrangements, and leaving door open for future collaboration." />
            <CopyCard prompt="Create an email requesting a meeting with a senior stakeholder, clearly stating your purpose, why their input is valuable, and offering flexible timing options." />
            <CopyCard prompt="Write a thank you email following a successful deal, acknowledging the collaboration, highlighting positive outcomes, and expressing commitment to ongoing partnership." />
            <CopyCard prompt="Draft a conflict resolution email addressing a business disagreement, presenting your perspective without blame, acknowledging their position, and proposing collaborative solution." />
            <CopyCard prompt="Create an email re-establishing connection with a valuable contact you haven't spoken to in months, adding genuine value (article, introduction, opportunity) before asking for anything." />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-16 border border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-[#EA4335]">Frequently Asked Questions</h2>
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
            <Link href="/ai-agent-prompts" className="group bg-gray-800 p-6 rounded-lg hover:border-[#8B5CF6] border border-gray-700 transition-all">
              <h3 className="text-lg font-bold text-white group-hover:text-[#8B5CF6] transition-colors mb-2">AI Agent Prompts</h3>
              <p className="text-gray-400 text-sm">Prompts for autonomous AI agents and intelligent systems</p>
            </Link>
            <Link href="/gemini-advanced-prompts" className="group bg-gray-800 p-6 rounded-lg hover:border-[#4285F4] border border-gray-700 transition-all">
              <h3 className="text-lg font-bold text-white group-hover:text-[#4285F4] transition-colors mb-2">Gemini Advanced</h3>
              <p className="text-gray-400 text-sm">Advanced prompts for Google's Gemini model</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
