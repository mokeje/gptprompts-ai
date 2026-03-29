'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp, FileText, Sparkles, BookMarked, Zap, Users } from 'lucide-react';

const AITextGeneratorPromptsPage = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const handleCopyPrompt = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const CopyCard = ({ id, prompt }: { id: string; prompt: string }) => (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-orange-500/50 transition-colors">
      <p className="text-gray-200 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={() => handleCopyPrompt(id, prompt)}
        className="inline-flex items-center gap-2 px-3 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 rounded text-sm transition-colors"
      >
        {copiedId === id ? (
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

  const FAQItem = ({ id, question, answer }: { id: number; question: string; answer: string }) => (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpenFaqId(openFaqId === id ? null : id)}
        className="w-full px-4 py-4 flex items-center justify-between bg-[#1a1a1a] hover:bg-[#242424] transition-colors"
      >
        <h3 className="text-sm font-semibold text-gray-100">{question}</h3>
        {openFaqId === id ? (
          <ChevronUp size={18} className="text-orange-400 flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      {openFaqId === id && (
        <div className="px-4 py-4 bg-[#0a0a0a] border-t border-[#2a2a2a] text-sm text-gray-300 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );

  const sections = [
    {
      title: 'Blog Posts & Articles',
      icon: FileText,
      prompts: [
        'Write a comprehensive 2000-word blog post about the benefits of remote work for employees and companies, including statistics on productivity, cost savings, employee satisfaction, challenges to address, and best practices for successful remote work implementation',
        'Create an in-depth article exploring the impact of artificial intelligence on job markets, discussing displaced roles, emerging opportunities, reskilling requirements, industry-specific trends, and strategies for workforce adaptation in the AI era',
        'Develop a practical guide to sustainable living at home including energy efficiency improvements, waste reduction strategies, sustainable product alternatives, cost-benefit analysis, and step-by-step implementation timeline for homeowners',
        'Write an investigative journalism piece examining the growth of influencer marketing, including platform trends, audience demographics, advertising effectiveness data, ethical considerations, and case studies of successful campaigns',
        'Create a thoughtful essay on the psychology of procrastination, exploring root causes, cognitive biases involved, health impacts, evidence-based strategies for overcoming procrastination, and daily habit changes that improve productivity',
        'Write a detailed product review for a premium software tool or SaaS platform, including feature breakdown, user experience assessment, pricing analysis, competitor comparison, ideal use cases, and honest pros and cons'
      ]
    },
    {
      title: 'Social Media & Marketing Copy',
      icon: Sparkles,
      prompts: [
        'Create ten engaging LinkedIn posts about professional development, including posts on skill-building, career transitions, leadership lessons, industry trends, and personal growth that encourage engagement and position the author as a thought leader',
        'Write five compelling email newsletter subject lines and preview text for a productivity-focused newsletter, designed to achieve open rates above 40% while accurately representing email content without clickbait',
        'Develop a series of six Instagram captions for a lifestyle brand, each including relevant hashtags, clear call-to-action, storytelling elements, and authentic voice that aligns with brand values and encourages community engagement',
        'Create punchy social media copy for a product launch campaign across Twitter, Instagram, TikTok, and LinkedIn, with platform-specific tone and format, building anticipation, and driving traffic to launch page',
        'Write ten Google search ad copy variations for an e-commerce business, including headline options, description variations, urgency elements, and benefit-focused messaging with clear CTAs within character limits',
        'Develop a month-long content calendar with daily tweet ideas for a B2B SaaS company, including thought leadership content, industry news commentary, product updates, engagement hooks, and customer spotlights'
      ]
    },
    {
      title: 'Creative Writing & Storytelling',
      icon: BookMarked,
      prompts: [
        'Write a 1500-word short story set in a dystopian future with a compelling protagonist facing a moral dilemma, vivid worldbuilding, sensory details, plot twists, and an emotionally resonant ending that explores themes of choice and consequence',
        'Create a detailed character profile for a complex antagonist including background story, motivations, flaws, relationships with other characters, internal conflicts, and a psychological exploration of how they became the person they are',
        'Develop the opening chapter of a science fiction novel including compelling world-building, character introduction, conflict setup, descriptive prose, dialogue that reveals character voice, and hooks to compel readers to continue',
        'Write a series of interconnected flash fiction stories (under 1000 words each) exploring different perspectives on a single event, revealing new information and viewpoints with each story that challenge initial understanding',
        'Create a detailed plot outline for a mystery novel including inciting incident, clues planted throughout, red herrings, character motivations, plot twists, and satisfying conclusion that was logically foreshadowed',
        'Write dialogue-heavy scene from a contemporary drama showing relationship conflict between two characters, including subtext, interruptions, realistic speech patterns, emotional escalation, and character growth through conversation'
      ]
    },
    {
      title: 'Professional Documents & Reports',
      icon: Zap,
      prompts: [
        'Create a comprehensive project proposal document for a software development initiative including executive summary, project objectives, scope definition, timeline with milestones, resource allocation, risk assessment, budget breakdown, and success metrics',
        'Write a detailed quarterly business report covering financial performance, departmental achievements, market analysis, competitive landscape, key metrics, challenges encountered, and strategic recommendations for next quarter',
        'Develop a white paper on emerging technology trends in a specific industry, including current state analysis, technical deep dives, case studies, challenges and barriers to adoption, and future implications for business strategy',
        'Create a comprehensive employee handbook section covering company policies, conduct expectations, benefits overview, professional development opportunities, conflict resolution procedures, and compliance requirements in clear, accessible language',
        'Write a detailed case study documenting a successful business transformation or implementation, including background context, challenges faced, solutions implemented, measurable results, lessons learned, and recommendations for similar organizations',
        'Develop a strategic communication plan for organizational change, including stakeholder analysis, messaging frameworks, communication timeline, channel selection, addressing resistance, and metrics for measuring communication effectiveness'
      ]
    },
    {
      title: 'Educational & Explanatory Content',
      icon: Users,
      prompts: [
        'Write a comprehensive explainer article breaking down a complex scientific concept like quantum mechanics into understandable sections for general audiences, using analogies, visual descriptions, historical context, and avoiding jargon',
        'Create a detailed how-to guide for a practical skill including materials needed, step-by-step instructions with estimated time per step, common mistakes to avoid, troubleshooting tips, variations for different skill levels, and expected outcomes',
        'Develop an educational email course outline with five lessons on a professional or personal development topic, including lesson objectives, key concepts, actionable takeaways, engaging activities, and progression that builds knowledge cumulatively',
        'Write a comparison essay analyzing two different approaches, philosophies, or products, including strengths and weaknesses of each, appropriate use cases, cost-benefit analysis, and recommendations based on specific scenarios and user needs',
        'Create a detailed FAQ document addressing common questions about a product, service, or topic, organized by user journey stage or topic category, with clear concise answers, links to additional resources, and escalation paths for unsolved issues',
        'Write an educational thread on Twitter or LinkedIn explaining a complex business concept, framework, or historical event through ten connected posts that build understanding progressively with examples and visual descriptions'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How can I ensure AI-generated text sounds authentic and not robotic?',
      answer: 'Use prompts that include tone and voice specifications, ask for conversational language, and request emotional resonance or personality. After generation, review for natural flow and edit sections that feel overly formal or repetitive. Request revisions asking the AI to sound more casual, authoritative, or passionate depending on your target audience. The key is iterating with specific feedback about voice.'
    },
    {
      question: 'What should I do if the generated text is too long or too short?',
      answer: 'Specify word count or length requirements in your initial prompt. If the output needs adjustment, request a revised version with explicit length parameters. For content that is too wordy, ask for condensed versions focusing on key points. For short content, request expansion with specific areas to develop further. Word count specifications significantly improve first-attempt accuracy.'
    },
    {
      question: 'How do I customize AI-generated text to match my brand voice?',
      answer: 'Describe your brand voice in detail: Is it professional, playful, authoritative, conversational? Include examples of existing content that embodies your voice. Reference comparable brands or publications. Provide specific words or phrases you want included or avoided. Test initial outputs and provide feedback like "more concise" or "add more humor" for subsequent iterations.'
    },
    {
      question: 'Can I use AI-generated text directly without editing?',
      answer: 'While AI text can be high-quality, you should always review it for accuracy, appropriateness, brand alignment, and specific context. Fact-check claims, verify data, ensure it addresses your specific audience and situation. Use AI as a starting point that accelerates your writing process, not a replacement for editorial judgment. The best results come from AI generation plus human refinement.'
    },
    {
      question: 'How do I maintain originality when using AI text generation?',
      answer: 'Use prompts that request original research, unique angles, and specific perspectives. Avoid generic prompts that might produce similar outputs to competitors. Review generated text to ensure it adds new value and isn\'t derivative. Combine AI generation with your own expertise, data, and unique insights. Fact-check and expand with original research before publishing.'
    },
    {
      question: 'What formatting should I specify in my prompts?',
      answer: 'Include structural requirements like headings, bullet points, numbered lists, or short paragraphs. Specify if you want introductions, conclusions, or specific sections. Request tone markers for different sections if needed. For social media, specify character limits or platform-specific requirements. Clear formatting requests produce better organized output that requires less editing.'
    },
    {
      question: 'How can I improve SEO in AI-generated content?',
      answer: 'Include target keywords naturally in your prompt, request keyword distribution guidance, and ask for meta descriptions and heading optimization. Generate content around specific topics rather than general ones. Request natural keyword integration rather than keyword stuffing. Use AI to expand content on topics where you rank but don\'t have comprehensive coverage. Supplement with technical SEO and quality backlinks.'
    },
    {
      question: 'Should I disclose when content is AI-generated?',
      answer: 'Policies vary by platform and industry. Check guidelines for your specific use case. For marketing and social content, transparency is increasingly important. For internal documents or first drafts, disclosure may be less critical. Always ensure content is edited and fact-checked regardless of disclosure. Consider audience expectations: professionals often appreciate transparency about AI involvement.'
    },
    {
      question: 'How do I handle fact-checking in AI-generated text?',
      answer: 'Always verify statistics, quotes, dates, and specific claims in AI-generated content. Use reliable sources to confirm information. Check for hallucinations or plausible-sounding but incorrect details. Request that the AI cite sources or provide context for claims. Cross-reference multiple sources for important information. Be especially careful with recent events or specialized knowledge where training data may be incomplete.'
    },
    {
      question: 'What iterative approaches work best for refining AI text?',
      answer: 'Start with a detailed initial prompt, review the output, and identify specific areas for improvement. Request targeted revisions rather than complete rewrites. Provide examples of what you want ("more like this" or "less like that"). Save successful prompts and use them as templates for similar content. Track which prompt types and specifications produce the best results for your needs.'
    }
  ];

  const relatedPages = [
    { title: 'AI Chatbot Prompts', href: '/ai-chatbot-prompts' },
    { title: 'AI Productivity Prompts', href: '/ai-productivity-prompts' },
    { title: 'AI Search Engine Prompts', href: '/ai-search-engine-prompts' },
    { title: 'AI Story Generator Prompts', href: '/ai-story-generator-prompts' },
    { title: 'AI Music Generator Prompts', href: '/ai-music-generator-prompts' },
    { title: 'AI Prompts for Education', href: '/ai-prompts-for-education' },
    { title: 'Bing AI Image Generator Prompts', href: '/bing-ai-image-generator-prompts' },
    { title: 'Perchance AI Prompts', href: '/perchance-ai-prompts' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Text Generator Prompts',
            description: 'A comprehensive collection of detailed prompts to generate high-quality written content across all formats, from blog posts and social media copy to creative writing and professional documents.',
            datePublished: '2026-03-29',
            dateModified: '2026-03-29'
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText size={32} className="text-orange-400" />
            <h1 className="text-4xl font-bold text-gray-100">AI Text Generator Prompts</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Master the art of AI-assisted writing with our meticulously crafted prompts. From compelling blog posts and social media content to creative fiction and professional documents, these detailed prompts help you generate high-quality written content that resonates with your audience.
          </p>
        </div>

        {sections.map((section, sectionIdx) => {
          const Icon = section.icon;
          return (
            <div key={sectionIdx} className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Icon size={24} className="text-orange-400" />
                <h2 className="text-2xl font-semibold text-gray-100">{section.title}</h2>
              </div>
              <div className="grid gap-4">
                {section.prompts.map((prompt, promptIdx) => (
                  <CopyCard
                    key={`${sectionIdx}-${promptIdx}`}
                    id={`prompt-${sectionIdx}-${promptIdx}`}
                    prompt={prompt}
                  />
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} id={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {relatedPages.map((page, idx) => (
              <Link
                key={idx}
                href={page.href}
                className="block px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-orange-500/50 hover:bg-[#1a1a1a] transition-colors text-orange-400"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITextGeneratorPromptsPage;
