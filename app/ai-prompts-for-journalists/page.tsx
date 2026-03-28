'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, FileText, Search, Mic, Globe, PenTool } from 'lucide-react';
import Link from 'next/link';

const CopyCard = ({ title, prompt, tag }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#0EA5E9] transition-colors">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-white font-semibold text-lg flex-1">{title}</h3>
        <span className="text-xs bg-[#0EA5E9]/10 text-[#0EA5E9] px-2 py-1 rounded whitespace-nowrap">{tag}</span>
      </div>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-[#0EA5E9] hover:text-[#0EA5E9]/80 text-sm transition-colors"
      >
        {copied ? (
          <>
            <Check size={16} />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy size={16} />
            <span>Copy prompt</span>
          </>
        )}
      </button>
    </div>
  );
};

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#333] py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left hover:text-[#0EA5E9] transition-colors"
      >
        <span className="text-white font-medium">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-[#0EA5E9]" /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <p className="text-gray-400 mt-3 text-sm leading-relaxed">{answer}</p>}
    </div>
  );
};

export default function JournalistsPage() {
  const faqs = [
    {
      question: 'How can AI help me find story angles faster?',
      answer: 'AI can analyze data, trends, and social media conversations to identify emerging stories, suggest new angles on existing topics, and help you prioritize which stories to pursue based on audience interest and newsworthiness.',
    },
    {
      question: 'Can I use AI-generated content directly in my articles?',
      answer: 'AI-generated content should be used as a starting point, research aid, or outline only. Always verify facts, add your own reporting, expertise, and voice. Transparency about AI use in your writing is increasingly important for reader trust.',
    },
    {
      question: 'How do I prepare better interview questions using AI?',
      answer: 'Use AI to research your subject, analyze their public statements, identify contradictions or interesting angles, and generate initial questions. Refine these with your own judgment and critical thinking to craft questions that dig deeper.',
    },
    {
      question: 'What&apos;s the best way to fact-check claims using AI?',
      answer: 'Use AI to quickly gather background information and cross-reference claims, but always verify final facts using original sources, official records, and expert quotes. AI is a research accelerator, not a fact-checker replacement.',
    },
    {
      question: 'How can AI help with SEO optimization for articles?',
      answer: 'AI can suggest relevant keywords, analyze headline effectiveness, help structure content for readability, and identify gaps in coverage. Use these suggestions to optimize without compromising editorial quality or clarity.',
    },
    {
      question: 'Can AI help me write headlines that get clicks?',
      answer: 'Yes. AI can generate multiple headline variations, test them against your target audience&apos;s interests, and suggest emotional triggers or keywords that drive engagement. Always ensure headlines accurately reflect your story.',
    },
    {
      question: 'How do I maintain journalistic integrity when using AI?',
      answer: 'Maintain your editorial standards: verify all facts, cite sources, disclose AI use where relevant, and use AI as a tool to enhance—not replace—your reporting. Your credibility depends on accuracy and transparency.',
    },
    {
      question: 'What&apos;s a good workflow for using AI in article writing?',
      answer: 'Research with AI → conduct interviews and reporting → use AI to organize notes and create outlines → write with your voice and expertise → fact-check manually → optimize for SEO with AI suggestions → publish.',
    },
    {
      question: 'How can AI help me cover breaking news faster?',
      answer: 'Use AI to rapidly gather context, pull relevant background information, identify key stakeholders to contact, and create initial drafts. You focus on getting original reporting and verification while AI handles information synthesis.',
    },
    {
      question: 'Can I use AI to research competitor coverage?',
      answer: 'Yes. AI can scan competitor articles, summarize their angles, identify gaps in coverage, and suggest unique story opportunities. Use this to ensure your reporting adds something new and valuable.',
    },
    {
      question: 'How do I know if an AI-generated prompt or angle is good?',
      answer: 'Apply your editorial judgment: Does it serve your readers? Is it newsworthy? Can you report it honestly? Does it fit your publication&apos;s mission? AI generates ideas; you decide what&apos;s worth publishing.',
    },
    {
      question: 'What are the ethical concerns with AI in journalism?',
      answer: 'Key concerns include: accuracy (verify everything), bias (AI can reflect historical biases), transparency (disclose AI use), job impact (AI is a tool, not a replacement), and maintaining human oversight in editorial decisions.',
    },
  ];

  const sections = [
    {
      title: 'Story Research & Investigation',
      icon: FileText,
      description: 'Find angles, identify trends, and uncover story opportunities faster',
      prompts: [
        {
          title: 'Trend Analysis for Story Ideas',
          prompt: 'Analyze the following topic and identify 5 emerging trends or story angles journalists should cover: [TOPIC]. For each trend, explain why it&apos;s newsworthy and who might be affected.',
          tag: 'Research',
        },
        {
          title: 'Background Research Summary',
          prompt: 'Create a comprehensive background briefing on [PERSON/ORGANIZATION/EVENT] including: timeline of key events, major controversies, public statements, and potential story angles. Format for quick scanning.',
          tag: 'Investigation',
        },
        {
          title: 'Data Story Discovery',
          prompt: 'Examine this dataset and identify 5 potential data-driven story angles: [DATASET]. For each story, explain the news value and what additional reporting would be needed.',
          tag: 'Data',
        },
      ],
    },
    {
      title: 'Interview Preparation',
      icon: Search,
      description: 'Research subjects and prepare tough, insightful questions',
      prompts: [
        {
          title: 'Interview Question Generator',
          prompt: 'Create 10 tough, insightful interview questions for [PERSON] about [TOPIC]. Include: background questions, contradiction points, future-focused questions, and audience-interest questions.',
          tag: 'Interviews',
        },
        {
          title: 'Subject Research Brief',
          prompt: 'Research [PERSON/ORGANIZATION] and create a brief covering: biography, past statements, controversies, contradictions, and connections. Highlight angles a journalist should explore.',
          tag: 'Research',
        },
        {
          title: 'Red Flag Identifier',
          prompt: 'I&apos;m interviewing [PERSON] about [TOPIC]. Based on their public record, what claims should I be skeptical of? What contradictions or inconsistencies should I probe?',
          tag: 'Investigation',
        },
      ],
    },
    {
      title: 'Writing & Editing',
      icon: Mic,
      description: 'Streamline drafting, editing, and refinement',
      prompts: [
        {
          title: 'Article Outline Creator',
          prompt: 'Create a 5-section article outline for a story about [TOPIC]. Include: hook, context, key developments, impact, and forward-looking angle. Make it compelling for readers.',
          tag: 'Writing',
        },
        {
          title: 'Tone & Style Adjuster',
          prompt: 'Edit this paragraph for [PUBLICATION STYLE/TONE]: [PARAGRAPH]. Make it: clearer, more engaging, appropriate for the audience, and more concise.',
          tag: 'Editing',
        },
        {
          title: 'Clarity & Impact Check',
          prompt: 'Review this draft article and identify: jargon that needs simplifying, weak transitions, unclear claims, and opportunities to strengthen impact. Suggest specific rewrites.',
          tag: 'Feedback',
        },
      ],
    },
    {
      title: 'Headlines & SEO',
      icon: Globe,
      description: 'Write headlines that inform, engage, and rank',
      prompts: [
        {
          title: 'Headline Variation Generator',
          prompt: 'Create 8 alternative headlines for an article about [TOPIC]: 3 emotional/curiosity-driven, 3 keyword-optimized for SEO, 2 straightforward/news-focused. Include a brief note on the intent of each.',
          tag: 'Headlines',
        },
        {
          title: 'SEO Optimization Guide',
          prompt: 'This article is about [TOPIC] and targets the keyword [KEYWORD]. Suggest: better keywords to target, meta description options, subheading structure, and internal linking opportunities.',
          tag: 'SEO',
        },
        {
          title: 'Engagement Hook Creator',
          prompt: 'Write 5 opening paragraphs (ledes) for a story about [TOPIC]. Each should hook the reader differently: emotional appeal, surprise/contradiction, news peg, data/statistic, or personal story. Label each approach.',
          tag: 'Writing',
        },
      ],
    },
    {
      title: 'Fact-Checking & Verification',
      icon: PenTool,
      description: 'Verify claims and strengthen reporting',
      prompts: [
        {
          title: 'Claim Verification Checklist',
          prompt: 'I need to verify this claim: [CLAIM]. Create a verification checklist including: sources to contact, documents to request, contradictory claims to investigate, and red flags to watch for.',
          tag: 'Fact-Check',
        },
        {
          title: 'Source Credibility Analyzer',
          prompt: 'Evaluate the credibility of [PERSON/ORGANIZATION] as a source for [TOPIC]. Consider: expertise, potential bias, track record, and conflicts of interest. How should I use them in my reporting?',
          tag: 'Reporting',
        },
        {
          title: 'Contradiction Investigator',
          prompt: 'I found a contradiction: [STATEMENT A] vs [STATEMENT B]. What reporting could resolve this? Who should I interview? What documents or data should I request?',
          tag: 'Investigation',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="flex items-start gap-4 mb-6">
          <FileText size={40} className="text-[#0EA5E9] flex-shrink-0" />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Prompts for Journalists
            </h1>
            <p className="text-xl text-gray-400">
              Research faster, report smarter, publish better. Use AI to accelerate your reporting while maintaining journalistic integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-6 py-12 max-w-6xl mx-auto space-y-20">
        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-2">
                <Icon size={28} className="text-[#0EA5E9]" />
                <h2 className="text-3xl font-bold">{section.title}</h2>
              </div>
              <p className="text-gray-400 mb-8">{section.description}</p>
              <div className="grid md:grid-cols-3 gap-6">
                {section.prompts.map((prompt, pidx) => (
                  <CopyCard key={pidx} title={prompt.title} prompt={prompt.prompt} tag={prompt.tag} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="border border-[#333] rounded-lg p-6 bg-[#111]">
          {faqs.map((faq, idx) => (
            <FAQ key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* Related Pages */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Explore More Prompts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/ai-prompts-for-ux-designers"
            className="group p-6 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#8B5CF6] transition-colors"
          >
            <h3 className="text-lg font-semibold mb-2 group-hover:text-[#8B5CF6] transition-colors">
              UX Designers
            </h3>
            <p className="text-sm text-gray-400">
              Design research, prototyping, and usability testing prompts.
            </p>
          </Link>
          <Link
            href="/ai-prompts-for-consultants"
            className="group p-6 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#0D9488] transition-colors"
          >
            <h3 className="text-lg font-semibold mb-2 group-hover:text-[#0D9488] transition-colors">
              Consultants
            </h3>
            <p className="text-sm text-gray-400">
              Strategy, analysis, and business development prompts.
            </p>
          </Link>
          <Link
            href="/ai-prompts-for-photographers"
            className="group p-6 bg-[#1a1a1a] border border-[#333] rounded-lg hover:border-[#D946EF] transition-colors"
          >
            <h3 className="text-lg font-semibold mb-2 group-hover:text-[#D946EF] transition-colors">
              Photographers
            </h3>
            <p className="text-sm text-gray-400">
              Editing, portfolio, and business operation prompts.
            </p>
          </Link>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Journalists',
            description: 'Research faster, report smarter, publish better. AI prompts for story research, interviews, writing, headlines, and fact-checking.',
            datePublished: '2026-03-28',
            dateModified: '2026-03-28',
            author: {
              '@type': 'Organization',
              name: 'GPT Prompts',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
