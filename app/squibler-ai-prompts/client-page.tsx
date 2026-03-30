'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Copy, ChevronDown, ChevronUp } from 'lucide-react'

export default function SquiblerPrompts() {
  const [copied, setCopied] = useState<string | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
    const handleCopy = async () => {
      await navigator.clipboard.writeText(prompt)
      setCopied(title)
      setTimeout(() => setCopied(null), 2000)
    }

    return (
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10B981] transition-colors">
        <h4 className="font-bold text-white mb-4">{title}</h4>
        <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono mb-4 max-h-64">
          {prompt}
        </pre>
        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-medium py-2 px-4 rounded transition-colors"
        >
          {copied === title ? (
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

  const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button
        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
        className="w-full flex items-center justify-between p-4 hover:bg-[#1a1a1a] transition-colors"
      >
        <h4 className="font-semibold text-white text-left">{question}</h4>
        {expandedFaq === index ? (
          <ChevronUp className="w-5 h-5 text-[#10B981] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#10B981] flex-shrink-0" />
        )}
      </button>
      {expandedFaq === index && (
        <div className="p-4 bg-[#0a0a0a] border-t border-[#2a2a2a]">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  )

  const prompts = {
    'Blog Post Generation': [
      {
        title: 'Blog Post from Outline',
        prompt: 'I have the following outline for a blog post:\n\n[OUTLINE]\n\nPlease expand this into a full, engaging blog post of approximately 2000 words. Use a conversational tone, include relevant examples, and add a compelling introduction and conclusion. Format with clear headings and subheadings.'
      },
      {
        title: 'SEO-Optimized Blog Post',
        prompt: 'Write an SEO-optimized blog post about [TOPIC] targeting the keyword "[KEYWORD]". The post should be 1500-2000 words, include the keyword naturally in the title, introduction, and throughout the content. Structure with an engaging intro, 4-5 main sections with subheadings, and a strong conclusion that encourages action.'
      },
      {
        title: 'Long-Form Article',
        prompt: 'Create a comprehensive, long-form article on [TOPIC] that would work well for a magazine or publication. The article should be 3000+ words, include multiple perspectives, cite relevant data or statistics, and provide deep insights that establish thought leadership on the subject.'
      },
      {
        title: 'Blog Post with Call-to-Action',
        prompt: 'Write a blog post about [TOPIC] that naturally incorporates a call-to-action encouraging readers to [DESIRED_ACTION]. The post should be 1500-2000 words, include relevant examples, and end with a compelling CTA that feels organic to the content.'
      },
      {
        title: 'Historical or Case Study Post',
        prompt: 'Write a blog post that explores the history or evolution of [TOPIC]. Include key milestones, turning points, and lessons learned. Structure it as a narrative journey from [START_POINT] to [END_POINT], making it engaging and educational for readers.'
      },
      {
        title: 'How-to or Tutorial Post',
        prompt: 'Create a detailed how-to blog post teaching readers how to [TASK]. Break down the process into clear, numbered steps. Include tips, common mistakes to avoid, and best practices. Target approximately 1500 words with helpful examples.'
      }
    ],
    'Content Expansion': [
      {
        title: 'Expand Short Content',
        prompt: 'I have the following short piece of content:\n\n[SHORT_CONTENT]\n\nPlease expand this into a detailed, well-structured article of approximately [DESIRED_LENGTH] words. Maintain the original voice and message while adding relevant examples, explanations, and supporting details.'
      },
      {
        title: 'Add More Depth to Sections',
        prompt: 'Here is an article:\n\n[ARTICLE]\n\nPlease expand the following sections with more detail, examples, and insights while maintaining overall readability: [SECTIONS_TO_EXPAND]. Aim to add approximately [NUMBER] words.'
      },
      {
        title: 'Transform Bullet Points to Prose',
        prompt: 'I have the following bullet-point outline:\n\n[BULLET_POINTS]\n\nPlease transform this into flowing, well-written prose organized into clear sections. Use a professional but conversational tone, and aim for approximately [WORD_COUNT] words.'
      },
      {
        title: 'Develop Content from Notes',
        prompt: 'I have raw notes on [TOPIC]:\n\n[NOTES]\n\nPlease develop these notes into a polished, complete article of approximately [WORD_COUNT] words. Organize logically, connect ideas smoothly, and ensure the final piece is publication-ready.'
      },
      {
        title: 'Add Examples and Stories',
        prompt: 'Here is an article about [TOPIC]:\n\n[ARTICLE]\n\nPlease enhance this content by adding real-world examples, case studies, and relevant anecdotes that illustrate the main points. Integrate these naturally throughout the text to increase engagement and clarity.'
      },
      {
        title: 'Expand with Research',
        prompt: 'I have this draft about [TOPIC]:\n\n[DRAFT]\n\nPlease expand it with relevant research findings, statistics, expert quotes, and supporting data. Maintain the original structure while deepening the content with credible sources and insights.'
      }
    ],
    'Content Rewriting': [
      {
        title: 'Change Tone or Style',
        prompt: 'Rewrite the following content in a [DESIRED_TONE] tone:\n\n[ORIGINAL_CONTENT]\n\nMaintain the core message and information while adjusting the style to be more [DESIRED_TONE]. Ensure it still sounds authentic and appropriate for [TARGET_AUDIENCE].'
      },
      {
        title: 'Simplify Complex Content',
        prompt: 'The following content is too complex for our audience:\n\n[COMPLEX_CONTENT]\n\nPlease simplify this while retaining accuracy and key information. Use shorter sentences, clearer language, and simpler explanations suitable for [TARGET_AUDIENCE].'
      },
      {
        title: 'Formalize Casual Content',
        prompt: 'Please rewrite the following casual content in a more formal, professional tone:\n\n[CASUAL_CONTENT]\n\nMaintain all key information and details while making it suitable for [PROFESSIONAL_CONTEXT].'
      },
      {
        title: 'Make Content More Engaging',
        prompt: 'Here is content that feels somewhat dry:\n\n[ORIGINAL_CONTENT]\n\nPlease rewrite it to be more engaging, compelling, and interesting for [TARGET_AUDIENCE]. Add more vivid language, stronger hooks, and better pacing while maintaining accuracy.'
      },
      {
        title: 'Adapt for Different Format',
        prompt: 'I have this [ORIGINAL_FORMAT] content:\n\n[CONTENT]\n\nPlease adapt it for [NEW_FORMAT] format while preserving the core message. Adjust structure, length, and style as appropriate for the new medium.'
      },
      {
        title: 'Make Content More Concise',
        prompt: 'Please condense the following content to approximately [TARGET_LENGTH]:\n\n[ORIGINAL_CONTENT]\n\nRemove unnecessary details while keeping the most important information and key messages intact.'
      }
    ],
    'Content Optimization': [
      {
        title: 'Optimize for Readability',
        prompt: 'Here is content that needs better readability:\n\n[CONTENT]\n\nPlease improve the formatting and structure. Break up long paragraphs, add subheadings, use bullet points where appropriate, and ensure good flow between sections.'
      },
      {
        title: 'Add Metadata and Headlines',
        prompt: 'Here is a blog post:\n\n[BLOG_POST]\n\nPlease create: a compelling meta description (155-160 characters), 3-5 alternative headlines, and a strong opening hook that encourages readers to continue.'
      },
      {
        title: 'Create Excerpt or Summary',
        prompt: 'Here is the full article:\n\n[FULL_ARTICLE]\n\nPlease create a compelling excerpt or summary of approximately [LENGTH] words that captures the essence of the piece and encourages readers to read the full version.'
      },
      {
        title: 'Improve Paragraph Flow',
        prompt: 'Here is content with weak transitions between paragraphs:\n\n[CONTENT]\n\nPlease improve the flow by adding better transitions, connecting sentences, and ensuring each paragraph follows logically from the previous one.'
      },
      {
        title: 'Add Visual Cues and Formatting',
        prompt: 'Here is raw content:\n\n[CONTENT]\n\nPlease format it with appropriate headings, subheadings, bullet points, bold text for key concepts, and other visual elements to improve scannability and engagement.'
      },
      {
        title: 'Enhance Opening and Closing',
        prompt: 'Here is content with a weak introduction and conclusion:\n\n[CONTENT]\n\nPlease rewrite the opening to be more compelling and hook the reader immediately. Also strengthen the conclusion with a clear takeaway and call-to-action.'
      }
    ],
    'Content Strategy': [
      {
        title: 'Content Calendar Planning',
        prompt: 'I need to plan a content calendar for [TIME_PERIOD] for [TARGET_AUDIENCE]. Please suggest [NUMBER] blog post topics with titles and brief descriptions that would resonate with this audience, considering seasonal trends and industry relevance.'
      },
      {
        title: 'Content Repurposing Strategy',
        prompt: 'I have a popular blog post about [TOPIC]. Please suggest at least [NUMBER] ways to repurpose this content into different formats (videos, infographics, social posts, podcasts, etc.) to maximize its reach and engagement.'
      },
      {
        title: 'Audience-Focused Topic Ideas',
        prompt: 'My audience is [AUDIENCE_DESCRIPTION] interested in [INTERESTS]. Please suggest [NUMBER] blog post topics that would be valuable and engaging for them. Include a brief description of why each topic would resonate with this specific audience.'
      },
      {
        title: 'Content Gap Analysis',
        prompt: 'Here are the blog topics I\'ve covered:\n\n[COVERED_TOPICS]\n\nFor my audience interested in [MAIN_TOPIC], what content gaps exist? Please suggest [NUMBER] new topics that would fill these gaps and provide value to my readers.'
      },
      {
        title: 'Seasonal Content Ideas',
        prompt: 'I want to plan seasonal content for [INDUSTRY/NICHE]. Please suggest blog post topics for each season/quarter that would be timely and relevant. Include ideas for [UPCOMING_SEASON].'
      },
      {
        title: 'Content Performance Analysis',
        prompt: 'My most successful blog posts have been about [SUCCESSFUL_TOPICS]. Based on this, please suggest [NUMBER] new blog post ideas that would likely perform well with my audience. What patterns do you see in what resonates?'
      }
    ]
  }

  const faqs = [
    {
      question: 'How can I ensure the generated content matches my brand voice?',
      answer: 'Provide specific examples of your brand voice in your prompts. Include phrases, tone descriptors, or previous content samples that represent your style. You can also use rewriting prompts to adjust any generated content to better match your brand.'
    },
    {
      question: 'What should I do if the generated content is too long or too short?',
      answer: 'Specify word counts or length targets in your prompts (e.g., "approximately 1500 words" or "under 500 words"). If the output needs adjustment, use a rewriting prompt to condense or expand the content to your exact specifications.'
    },
    {
      question: 'How can I add more specific details to generated content?',
      answer: 'Use the "Expand Content" or "Add Examples and Stories" prompts to build on initial drafts. You can also provide additional context, data, or specific examples in your original prompt to guide more detailed output.'
    },
    {
      question: 'Can generated content be used directly for publication?',
      answer: 'Generated content is a strong starting point but should always be reviewed, edited, and verified before publication. Check for accuracy, add your personal insights, ensure proper attribution, and maintain editorial standards specific to your publication.'
    },
    {
      question: 'How do I create SEO-optimized content effectively?',
      answer: 'Use the SEO-optimized prompt template and include your target keyword clearly. Naturally incorporate the keyword in your title, introduction, subheadings, and throughout the content. Use the optimization prompts to refine meta descriptions and headlines.'
    },
    {
      question: 'What is the best way to generate content for different audience levels?',
      answer: 'Specify your target audience in your prompt (e.g., "beginners," "technical professionals," "executive audience"). This helps generate appropriate complexity levels, terminology, and depth. Use the simplify prompt if you need to adjust for different audience sophistication.'
    },
    {
      question: 'How can I repurpose existing content efficiently?',
      answer: 'Use the "Content Repurposing Strategy" prompt to identify multiple format options. Then use specific generation prompts to adapt the content. For example, expand a social post into a blog post, or transform a blog post into bullet-point talking points.'
    },
    {
      question: 'How do I improve the flow between paragraphs and sections?',
      answer: 'Use the "Improve Paragraph Flow" prompt and paste your content. Additionally, the content expansion and rewriting prompts naturally improve transitions. You can also manually add transitional phrases that connect ideas from one section to the next.'
    },
    {
      question: 'What should I include in content strategy prompts for best results?',
      answer: 'Be specific about your target audience, industry, existing content performance, business goals, and any constraints (length, tone, format). The more context you provide about what has worked before and what your audience wants, the better your suggestions will be.'
    },
    {
      question: 'Can I use generated content for multiple purposes simultaneously?',
      answer: 'Yes. Use content expansion and repurposing prompts to create one strong version of content, then adapt it for different channels. For example, write one comprehensive blog post, then repurpose it into social posts, newsletters, videos, or presentations.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Squibler AI Prompts for Content Generation',
            description: 'Expert prompts for blog post generation, content expansion, rewriting, optimization, and strategic planning using AI.',
            datePublished: '2026-03-29',
            dateModified: '2026-03-29'
          })
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Squibler AI Prompts</h1>
          <p className="text-xl text-gray-400">
            Master content generation, expansion, and optimization with expert prompts for every writing challenge.
          </p>
        </div>

        {Object.entries(prompts).map((section, idx) => (
          <div key={idx} className="mb-12">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#10B981]">
              <div className="w-1 h-8 bg-[#10B981]"></div>
              <h2 className="text-2xl font-bold">{section[0]}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section[1].map((prompt, pidx) => (
                <CopyCard key={pidx} title={prompt.title} prompt={prompt.prompt} />
              ))}
            </div>
          </div>
        ))}

        <div className="my-12">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#10B981]">
            <div className="w-1 h-8 bg-[#10B981]"></div>
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} index={idx} />
            ))}
          </div>
        </div>

        <div className="my-12">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#10B981]">
            <div className="w-1 h-8 bg-[#10B981]"></div>
            <h2 className="text-2xl font-bold">Related Pages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/ai-for-workforce-management-prompts" className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-white hover:text-[#10B981]">AI for Workforce Management</h3>
            </Link>
            <Link href="/ai-for-operations-management-prompts" className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-white hover:text-[#10B981]">AI for Operations Management</h3>
            </Link>
            <Link href="/ai-for-facilities-management-prompts" className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-white hover:text-[#10B981]">AI for Facilities Management</h3>
            </Link>
            <Link href="/ai-for-document-management-prompts" className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-white hover:text-[#10B981]">AI for Document Management</h3>
            </Link>
            <Link href="/ai-for-news-prompts" className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-white hover:text-[#10B981]">AI for News</h3>
            </Link>
            <Link href="/ai-question-answering-prompts" className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-white hover:text-[#10B981]">AI Question Answering</h3>
            </Link>
            <Link href="/ai-summarizer-prompts" className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-white hover:text-[#10B981]">AI Summarizer</h3>
            </Link>
            <Link href="/ai-for-management-consulting-prompts" className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-white hover:text-[#10B981]">AI for Management Consulting</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
