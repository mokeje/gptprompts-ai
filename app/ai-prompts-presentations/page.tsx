'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, Presentation, Sparkles, Users, BarChart3, Zap, Target } from 'lucide-react';

interface CopyCardProps {
  prompt: string;
}

interface FAQItem {
  question: string;
  answer: string;
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
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#F59E0B]/50 transition-colors">
      <p className="text-sm text-gray-300 mb-3 line-clamp-3">{prompt}</p>
      <button
        onClick={handleCopy}
        className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors"
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

interface FAQComponentProps {
  items: FAQItem[];
}

function FAQComponent({ items }: FAQComponentProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border border-[#333] rounded-lg overflow-hidden">
          <button
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#2a2a2a] transition-colors text-left"
          >
            <span className="text-sm font-medium text-gray-200">{item.question}</span>
            <ChevronDown
              size={18}
              className={`text-[#F59E0B] flex-shrink-0 transition-transform ${
                expandedIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {expandedIndex === index && (
            <div className="px-4 py-3 bg-[#1a1a1a] border-t border-[#333] text-sm text-gray-400">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function PresentationsPage() {
  const faqItems: FAQItem[] = [
    {
      question: 'How can I use AI to improve my presentation storytelling?',
      answer:
        'AI can help you structure compelling narratives by suggesting story arcs, data-driven insights, and transitions between sections. Use AI prompts to brainstorm opening hooks, analogies, and closing statements that resonate with your audience.',
    },
    {
      question: 'What role does AI play in designing presentation visuals?',
      answer:
        'AI can suggest visual layouts, color palettes, and icon placements that enhance clarity and engagement. Use AI to brainstorm metaphors and visual concepts that represent your key messages.',
    },
    {
      question: 'How do I create data-driven presentations with AI assistance?',
      answer:
        'AI helps you structure data narratives by suggesting which metrics matter most, how to visualize trends, and how to contextualize numbers for your audience. It can also recommend chart types and comparative frameworks.',
    },
    {
      question: 'Can AI help me tailor presentations for different audiences?',
      answer:
        'Yes. AI can help you adapt tone, technical depth, and emphasis based on your audience profile. Use AI to generate audience-specific language, examples, and value propositions.',
    },
    {
      question: 'How do I use AI to overcome presentation anxiety?',
      answer:
        'AI can help you prepare by generating anticipated questions, suggesting talking points, and helping you practice transitions. It can also assist in creating speaker notes and backup slides.',
    },
    {
      question: 'What are best practices for AI-generated presentation content?',
      answer:
        'Always review AI suggestions for accuracy and relevance. Add your own stories and expertise. Use AI as a starting point, not the finished product. Ensure your voice and perspective shine through.',
    },
    {
      question: 'How can I use AI to create more engaging slide titles?',
      answer:
        'AI can suggest power-driven titles that are specific and benefit-focused rather than generic. It can help you transform boring titles into compelling statements that make the audience want to listen.',
    },
    {
      question: 'How do I structure a presentation using AI assistance?',
      answer:
        'AI can help you create a logical flow by suggesting section breaks, key transitions, and narrative arcs. It can also recommend pacing and recommend where to place your strongest points.',
    },
    {
      question: 'Can AI help me create presentation summaries and takeaways?',
      answer:
        'Absolutely. AI can help you synthesize key points into memorable takeaways, suggest call-to-action statements, and create one-page summaries of your presentation content.',
    },
    {
      question: 'How do I incorporate audience interaction into my presentations with AI help?',
      answer:
        'AI can suggest interactive elements like thought-provoking questions, polling questions, and discussion prompts. It can also help you brainstorm Q&A strategies and ways to make your presentation conversational.',
    },
    {
      question: 'What techniques work best for AI-assisted presentation design?',
      answer:
        'Use AI for ideation and brainstorming, structure and flow, content refinement, and audience adaptation. Combine AI suggestions with your subject matter expertise and unique perspective.',
    },
    {
      question: 'How can I measure the effectiveness of an AI-assisted presentation?',
      answer:
        'Track audience engagement metrics, gather feedback through surveys, monitor questions asked, and assess whether your key messages were understood. Use this feedback to refine future presentations.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI Prompts for Presentations',
    description: 'Master the art of compelling presentations with AI-generated prompts and strategies.',
    image: 'https://gptprompts.ai/presentations.png',
    datePublished: '2025-03-28',
  };

  const faqJsonLd = {
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
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Presentation size={36} className="text-[#F59E0B]" />
          <h1 className="text-4xl md:text-5xl font-bold">
            AI Prompts for <span className="text-[#F59E0B]">Presentations</span>
          </h1>
        </div>
        <p className="text-lg text-gray-400 mb-6 max-w-2xl">
          Create compelling, memorable presentations that captivate audiences and drive action. Use AI
          to craft stories, design slides, and deliver with confidence.
        </p>
      </section>

      {/* Section 1: Opening & Hook Prompts */}
      <section className="px-4 md:px-8 py-12 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles size={24} className="text-[#F59E0B]" />
          <h2 className="text-2xl font-bold">Opening & Hook Prompts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CopyCard prompt="Create a 30-second opening hook for a presentation about [topic]. The opening should start with a surprising statistic or question that makes the audience lean in." />
          <CopyCard prompt="Write an engaging introduction for a presentation on [topic]. Include a relatable story or anecdote that connects the audience to the main message." />
          <CopyCard prompt="Generate 5 different opening statements for a presentation about [topic]. Each opening should appeal to a different emotion: curiosity, urgency, inspiration, empathy, or challenge." />
        </div>
      </section>

      {/* Section 2: Slide Content & Messaging */}
      <section className="px-4 md:px-8 py-12 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Target size={24} className="text-[#F59E0B]" />
          <h2 className="text-2xl font-bold">Slide Content & Messaging</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CopyCard prompt="Create compelling slide titles for a presentation about [topic]. Each title should be benefit-focused and use power words instead of generic headings." />
          <CopyCard prompt="Write concise slide bullet points for [topic]. Each point should be one powerful idea, not multiple ideas crammed together. Make them memorable." />
          <CopyCard prompt="Generate 5 different ways to present the statistic '[statistic]' on a slide. Include narrative framing, comparison, visual metaphors, and context-setting approaches." />
        </div>
      </section>

      {/* Section 3: Audience Engagement & Interaction */}
      <section className="px-4 md:px-8 py-12 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Users size={24} className="text-[#F59E0B]" />
          <h2 className="text-2xl font-bold">Audience Engagement & Interaction</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CopyCard prompt="Create 5 thought-provoking questions to ask [audience type] during a presentation about [topic]. Questions should encourage reflection and discussion." />
          <CopyCard prompt="Generate interactive elements for a presentation on [topic]. Suggest 3 audience participation activities that take 2-3 minutes each and reinforce key messages." />
          <CopyCard prompt="Write an engaging Q&A transition for a presentation. Include a statement that invites questions, sets expectations for interaction, and keeps energy high." />
        </div>
      </section>

      {/* Section 4: Data Storytelling & Visualization */}
      <section className="px-4 md:px-8 py-12 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 size={24} className="text-[#F59E0B]" />
          <h2 className="text-2xl font-bold">Data Storytelling & Visualization</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CopyCard prompt="Create a data narrative for [dataset]. Structure it to answer: What is the change? Why did it happen? What does it mean for [audience]?" />
          <CopyCard prompt="Suggest the best chart type to visualize [data description]. Explain why it works, what story it tells, and what insights it highlights." />
          <CopyCard prompt="Write a compelling data summary sentence for [statistic or trend]. Frame it in a way that's meaningful to [audience type], not just technically accurate." />
        </div>
      </section>

      {/* Section 5: Closing & Call-to-Action */}
      <section className="px-4 md:px-8 py-12 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Zap size={24} className="text-[#F59E0B]" />
          <h2 className="text-2xl font-bold">Closing & Call-to-Action</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CopyCard prompt="Write a powerful closing statement for a presentation about [topic]. It should summarize the main message in one sentence and inspire action." />
          <CopyCard prompt="Create 3 different call-to-action statements for [audience type] at the end of a presentation about [topic]. Each should be clear, specific, and achievable." />
          <CopyCard prompt="Generate a memorable takeaway for a presentation on [topic]. Include a visual metaphor or phrase that the audience will remember and repeat." />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 md:px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
        <FAQComponent items={faqItems} />
      </section>

      {/* Related Pages */}
      <section className="px-4 md:px-8 py-16 max-w-6xl mx-auto border-t border-[#333]">
        <h2 className="text-2xl font-bold mb-8">Related Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/ai-prompts-excel"
            className="p-6 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#217346]/50 transition-colors group"
          >
            <h3 className="text-lg font-semibold mb-2 group-hover:text-[#217346] transition-colors">
              Excel Prompts
            </h3>
            <p className="text-sm text-gray-400">
              Master spreadsheets and data analysis with AI-generated Excel prompts and formulas.
            </p>
          </a>
          <a
            href="/ai-prompts-business-plans"
            className="p-6 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#1E40AF]/50 transition-colors group"
          >
            <h3 className="text-lg font-semibold mb-2 group-hover:text-[#1E40AF] transition-colors">
              Business Plans
            </h3>
            <p className="text-sm text-gray-400">
              Create comprehensive business plans and strategic documents with AI guidance.
            </p>
          </a>
          <a
            href="/ai-prompts-customer-service"
            className="p-6 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#2563EB]/50 transition-colors group"
          >
            <h3 className="text-lg font-semibold mb-2 group-hover:text-[#2563EB] transition-colors">
              Customer Service Prompts
            </h3>
            <p className="text-sm text-gray-400">
              Enhance customer interactions and support workflows with AI-powered responses.
            </p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <section className="px-4 md:px-8 py-8 max-w-6xl mx-auto text-center text-sm text-gray-500 border-t border-[#333]">
        <p>
          These prompts are designed to enhance your presentation skills. Always add your own expertise, data, and perspective for the best results.
        </p>
      </section>
    </div>
  );
}
