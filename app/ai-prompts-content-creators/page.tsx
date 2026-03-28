'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

const ACCENT_COLOR = '#EC4899';

const PROMPTS = {
  'Content Strategy & Planning': [
    {
      title: 'Content Calendar & Strategy Generator',
      prompt: 'Create a comprehensive 3-month content calendar for [platform] targeting [audience]. Include content themes, posting frequency, key dates, and content pillars. Provide specific content ideas with engagement hooks for each week.',
      tags: ['Planning', 'Strategy']
    },
    {
      title: 'Audience Persona Builder',
      prompt: 'Develop detailed audience personas for my [content type] content. Include demographics, interests, pain points, and content preferences. Create 3 distinct personas with actionable insights for content creation.',
      tags: ['Research', 'Audience']
    },
    {
      title: 'Content Performance Analysis Prompt',
      prompt: 'Analyze my [platform] analytics for the past [timeframe]. Identify top-performing content types, posting times, and engagement patterns. Provide recommendations for content optimization and growth opportunities.',
      tags: ['Analytics', 'Growth']
    },
    {
      title: 'Niche & Positioning Strategist',
      prompt: 'Help me define my unique positioning in the [industry] niche. Analyze competitor content strategies, identify gaps in the market, and recommend a differentiated content angle that showcases my unique value.',
      tags: ['Positioning', 'Strategy']
    }
  ],
  'Video & Script Creation': [
    {
      title: 'YouTube Script Generator',
      prompt: 'Write a compelling [video length]-minute YouTube script on [topic]. Include hook, main points, storytelling elements, and call-to-action. Format for natural delivery with pacing notes.',
      tags: ['Video', 'Scripts']
    },
    {
      title: 'Video Title & Thumbnail Optimizer',
      prompt: 'Generate 10 compelling YouTube video titles for [topic] that improve click-through rate. Include recommended thumbnail concepts and text overlays that grab attention without clickbait.',
      tags: ['Video', 'Optimization']
    },
    {
      title: 'TikTok & Shorts Script Creator',
      prompt: 'Create 5 viral-worthy TikTok/Shorts scripts for [topic] with [length]-second format. Include trending hooks, pacing, trending sounds/music suggestions, and hashtag strategies.',
      tags: ['Shorts', 'Viral']
    },
    {
      title: 'Podcast Episode Outline Generator',
      prompt: 'Develop a structured outline for a [duration]-minute podcast episode on [topic]. Include introduction hook, main segments, guest questions (if applicable), and call-to-action.',
      tags: ['Podcast', 'Audio']
    },
    {
      title: 'Webinar Script & Presentation Builder',
      prompt: 'Write a [duration]-minute webinar script on [topic]. Include opening hook, key learning objectives, visual descriptions for slides, speaker notes, and interactive elements.',
      tags: ['Webinar', 'Educational']
    }
  ],
  'Social Media & Community': [
    {
      title: 'Social Media Caption Writer',
      prompt: 'Write engaging [platform] captions for [content type] posts. Include emojis, hashtag strategies, call-to-action, and platform-specific formatting. Create 5 variations with different tones.',
      tags: ['Social Media', 'Engagement']
    },
    {
      title: 'Instagram Carousel Content Generator',
      prompt: 'Create a 10-slide Instagram carousel script on [topic]. Each slide should have short, punchy text with visual descriptions. Include educational value and engagement hooks.',
      tags: ['Instagram', 'Educational']
    },
    {
      title: 'Community Engagement Prompt',
      prompt: 'Develop a 30-day community engagement strategy for my [platform] audience. Include conversation starters, response frameworks for comments, collaboration opportunities, and community building tactics.',
      tags: ['Community', 'Engagement']
    },
    {
      title: 'Trending Topic Response Generator',
      prompt: 'Help me create timely, on-brand content responses to [current trend/topic]. Generate 3 content angles that align with my brand while capitalizing on trending conversations.',
      tags: ['Trends', 'Timing']
    }
  ],
  'Monetization & Growth': [
    {
      title: 'YouTube Monetization Strategy Planner',
      prompt: 'Create a detailed plan to reach YouTube Partner Program requirements: 1,000 subscribers and 4,000 watch hours. Include content strategies, optimization tactics, and milestone timelines.',
      tags: ['Monetization', 'Growth']
    },
    {
      title: 'Affiliate Marketing Content Developer',
      prompt: 'Generate [number] affiliate marketing content ideas for [product/service]. Include product comparison content, use case scenarios, and how-to guides that naturally recommend solutions.',
      tags: ['Affiliate', 'Monetization']
    },
    {
      title: 'Sponsorship Pitch Generator',
      prompt: 'Create a compelling sponsorship pitch for brands in [industry]. Include my audience demographics, engagement rates, content calendar, and potential partnership opportunities.',
      tags: ['Sponsorship', 'Growth']
    },
    {
      title: 'Email List Building Strategy',
      prompt: 'Develop an email list building strategy for my [platform] audience. Include lead magnet ideas, landing page copy, email sequences, and integration tactics with my content.',
      tags: ['Email', 'Growth']
    },
    {
      title: 'Course & Digital Product Outline',
      prompt: 'Create a course outline for teaching [skill/topic] to my audience. Include module structure, lesson topics, pricing strategy, and launch marketing plan.',
      tags: ['Products', 'Monetization']
    }
  ]
};

const FAQ_ITEMS = [
  {
    question: 'How can AI help me create more content faster?',
    answer: 'AI tools like ChatGPT help you generate content outlines, script structures, and captions in minutes instead of hours. You can use prompts to brainstorm ideas, structure arguments, and create first drafts. The key is treating AI as a collaborator: you provide creative direction, approval, and your unique voice. This frees you from blank-page syndrome and speeds up your entire production pipeline, allowing you to maintain consistent posting schedules without burnout.'
  },
  {
    question: 'Will AI-generated content feel generic or impersonal?',
    answer: 'AI-generated content can feel generic if you don\'t customize it. The difference is in the prompts. Instead of asking "write a YouTube script," ask "write a YouTube script in [your style] that tells a personal story about [your experience] for my audience of [description]." Include specific examples, your perspective, and your unique voice in the prompt. AI produces better results when you give it guardrails: tone of voice, audience details, and specific angles. Your authentic perspective always needs to be there, but AI handles the heavy lifting of structure and drafting.'
  },
  {
    question: 'How do I maintain consistent quality across all my content?',
    answer: 'Create a "content brand guide" prompt that defines your voice, style, audience, and key messages. Reference this prompt in all your AI requests. Use the same prompts repeatedly and refine them based on performance. Build templates for recurring content types. The more specific you are in your prompts, the more consistent your output becomes. Always do a final review pass to ensure content aligns with your brand, adds your personal insights, and reflects current audience interests.'
  },
  {
    question: 'Can I use AI to help with SEO and discoverability?',
    answer: 'Yes. AI can help optimize titles, metadata, hashtag strategies, and keyword integration. Use prompts to generate multiple title variations, analyze search intent, and suggest related keywords. AI can also help structure content to answer common questions in your niche (improving SEO value). However, always verify that AI-suggested keywords are accurate and relevant to your audience. Combine AI suggestions with actual audience research and competitor analysis for best results.'
  },
  {
    question: 'How do I avoid burnout when managing multiple content platforms?',
    answer: 'Use AI to batch-create content. Generate multiple weeks of captions, script outlines, or ideas in one session, then adapt them for different platforms. AI excels at repurposing: a YouTube script can become a blog post, podcast outline, and social media carousel. This "create once, distribute everywhere" approach saves significant time. Set realistic posting schedules and use content calendars to stay organized. Let AI handle the admin and repetitive tasks while you focus on the creative, relationship-building parts of content creation.'
  },
  {
    question: 'What\'s the best way to use AI for audience research?',
    answer: 'Ask AI to analyze audience demographics, common questions, pain points, and content preferences based on your niche. Use prompts like "What questions do [audience] ask about [topic]?" or "What are common objections to [solution]?" AI can synthesize publicly available knowledge about your niche. Combine this with direct audience feedback from comments, DMs, and surveys. AI accelerates research by synthesizing information, but your direct audience interactions are irreplaceable for authentic insights.'
  },
  {
    question: 'How do I ensure my AI-generated content is original and doesn\'t violate copyright?',
    answer: 'AI generates original text based on patterns in its training data, but it doesn\'t copy from specific sources. However, always review generated content to ensure it\'s genuinely original and adds new value. Never publish verbatim AI output. Add personal examples, data, and insights. Cite sources if you reference existing research or ideas. The more specific your prompts and the more you customize the output, the more original it becomes. When in doubt, use plagiarism checkers before publishing.'
  },
  {
    question: 'Can AI help me monetize my content faster?',
    answer: 'AI can accelerate monetization by helping you identify affiliate opportunities, create sponsorship pitches, develop lead magnets, and plan product launches. Use prompts to analyze your audience, brainstorm product ideas, and outline sales strategies. AI can help you test ideas faster with multiple variations and content angles. However, monetization ultimately depends on audience trust and engagement, which requires authentic content and genuine relationships. AI is a tool to amplify your reach and efficiency, but not a shortcut to audience loyalty.'
  },
  {
    question: 'How do I use AI for content repurposing across platforms?',
    answer: 'Start with a core piece of content (long-form article, video, podcast). Use AI to adapt it: turn the video script into blog posts, social media clips, email newsletter content, and quote graphics. AI excels at format conversion. Use specific repurposing prompts: "Turn this YouTube script into 5 Instagram carousel slides" or "Create TikTok hooks from these key points." This multiplies your content\'s reach and ROI without creating entirely new content. Many creators find that 1 core idea can generate 10+ pieces of platform-specific content.'
  },
  {
    question: 'What data should I avoid feeding into AI tools?',
    answer: 'Avoid sharing sensitive personal information, financial details, passwords, or proprietary business information in public AI tools. Be cautious with audience data or customer information. Use privacy-conscious AI tools or on-premise solutions if you handle sensitive information. For most content creation (scripts, captions, ideas), standard AI tools are fine as long as you don\'t include confidential details. Always review the AI tool\'s privacy policy and use it appropriately for your content type and audience.'
  },
  {
    question: 'How do I measure the impact of AI on my content performance?',
    answer: 'Track metrics before and after implementing AI: publishing frequency, audience engagement (comments, shares, saves), click-through rates, and conversion metrics. Compare AI-assisted content performance to non-AI content. Analyze which types of AI assistance (outlining, copywriting, optimization) have the biggest impact on your metrics. A/B test different prompt approaches. Over time, you\'ll identify which AI tactics work best for your specific audience and platform. Use this data to refine your AI workflows.'
  },
  {
    question: 'Is AI content creation a sustainable long-term strategy?',
    answer: 'Yes, when paired with authentic voice and strategic thinking. AI is best used as a production tool, not a replacement for creative thinking and audience connection. The most successful creators use AI to handle the mechanical parts (outlining, first drafts, optimization) while they focus on unique perspective, storytelling, and relationship-building. As AI becomes more common, authenticity and unique perspective become MORE valuable, not less. The creators who win long-term are those who use AI to scale their impact while maintaining genuine connection with their audience.'
  }
];

interface CopyCardProps {
  title: string;
  prompt: string;
  tags: string[];
}

function CopyCard({ title, prompt, tags }: CopyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="border border-gray-700 rounded-lg p-4 bg-gray-900 hover:border-gray-600 transition-all group"
      style={{
        borderColor: copied ? ACCENT_COLOR : undefined,
        backgroundColor: copied ? 'rgba(236, 72, 153, 0.05)' : undefined
      }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-white font-semibold text-sm flex-1 pr-2">{title}</h3>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 p-2 rounded hover:bg-gray-800 transition-colors"
          style={{
            color: copied ? ACCENT_COLOR : '#9CA3AF',
            backgroundColor: copied ? 'rgba(236, 72, 153, 0.1)' : undefined
          }}
          title={copied ? 'Copied!' : 'Copy prompt'}
        >
          {copied ? (
            <Check size={16} />
          ) : (
            <Copy size={16} />
          )}
        </button>
      </div>

      <p className="text-gray-400 text-xs mb-3 leading-relaxed">{prompt}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full"
            style={{
              backgroundColor: `${ACCENT_COLOR}15`,
              color: ACCENT_COLOR,
              border: `1px solid ${ACCENT_COLOR}40`
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {copied && (
        <div className="mt-2 text-xs flex items-center gap-1" style={{ color: ACCENT_COLOR }}>
          <Check size={14} /> Copied to clipboard
        </div>
      )}
    </div>
  );
}

interface FAQItemProps {
  item: {
    question: string;
    answer: string;
  };
}

function FAQItem({ item }: FAQItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex justify-between items-center p-4 hover:bg-gray-900 transition-colors text-left"
      >
        <h3 className="text-white font-semibold text-sm flex-1">{item.question}</h3>
        <div
          className="flex-shrink-0 p-1 rounded transition-colors"
          style={{
            color: ACCENT_COLOR,
            backgroundColor: 'rgba(236, 72, 153, 0.1)'
          }}
        >
          {expanded ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </div>
      </button>

      {expanded && (
        <div className="border-t border-gray-700 px-4 py-3 bg-gray-900">
          <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ContentCreatorsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Content Creators',
            description: 'Essential ChatGPT prompts and AI strategies for content creators, YouTubers, and social media creators to scale production, grow audiences, and monetize faster.',
            keywords: 'content creator prompts, YouTube prompts, TikTok prompts, content creation AI, video script generator, social media content ideas',
            author: { '@type': 'Organization', name: 'GPTPrompts.AI' },
            datePublished: new Date().toISOString().split('T')[0],
            image: 'https://gptprompts.ai/og-image.png'
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16">
          <div className="mb-6 flex items-center gap-2">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                backgroundColor: `${ACCENT_COLOR}20`,
                color: ACCENT_COLOR,
                border: `1px solid ${ACCENT_COLOR}40`
              }}
            >
              Content Creation
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            AI Prompts for Content Creators
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            Scale your content production, grow faster, and monetize smarter with battle-tested ChatGPT prompts designed specifically for creators, YouTubers, podcasters, and social media professionals.
          </p>

          <div className="flex flex-wrap gap-2">
            {['Scripts', 'Strategy', 'Growth', 'Monetization', 'Community'].map((tag) => (
              <span key={tag} className="text-xs text-gray-400 border border-gray-700 rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-16 py-12">
          {Object.entries(PROMPTS).map(([section, prompts]) => (
            <div key={section}>
              <h2 className="text-2xl font-bold mb-6">{section}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prompts.map((prompt, idx) => (
                  <CopyCard key={idx} {...prompt} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="py-12 border-t border-gray-800">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => (
              <FAQItem key={idx} item={item} />
            ))}
          </div>
        </div>

        <div className="py-12 border-t border-gray-800">
          <h3 className="text-xl font-bold mb-4">Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/ai-prompts-lawyers"
              className="border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white">AI Prompts for Lawyers</h4>
                <div className="text-gray-600 group-hover:text-gray-400 transition-colors">→</div>
              </div>
              <p className="text-gray-400 text-sm">Legal-specific prompts for contract analysis, research, and practice management</p>
            </Link>

            <Link
              href="/chatgpt-email-marketing-prompts"
              className="border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white">Email Marketing Prompts</h4>
                <div className="text-gray-600 group-hover:text-gray-400 transition-colors">→</div>
              </div>
              <p className="text-gray-400 text-sm">Campaign strategies, copywriting, and optimization prompts for email professionals</p>
            </Link>

            <Link
              href="/ai-prompts-small-business"
              className="border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white">AI Prompts for Small Business</h4>
                <div className="text-gray-600 group-hover:text-gray-400 transition-colors">→</div>
              </div>
              <p className="text-gray-400 text-sm">Marketing, operations, and growth prompts tailored for small business owners</p>
            </Link>
          </div>
        </div>

        <div className="py-12 border-t border-gray-800">
          <div
            className="rounded-lg p-8 text-center"
            style={{
              backgroundColor: `${ACCENT_COLOR}10`,
              border: `1px solid ${ACCENT_COLOR}30`
            }}
          >
            <h3 className="text-2xl font-bold mb-3">Ready to Scale Your Content?</h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Start using these prompts today to create more content faster, grow your audience, and build a sustainable content creation business.
            </p>
            <button
              className="px-8 py-3 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: ACCENT_COLOR,
                color: '#ffffff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              Copy All Prompts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
