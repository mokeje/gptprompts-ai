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
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-[#4285F4] transition-colors">
      <p className="text-gray-300 text-sm mb-3 line-clamp-3">{prompt}</p>
      <button
        onClick={handleCopy}
        className="w-full bg-[#4285F4] hover:bg-[#3367D6] text-white font-semibold py-2 px-3 rounded transition-colors text-sm"
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
            <span className={`text-[#4285F4] transition-transform ${open === idx ? 'rotate-180' : ''}`}>▼</span>
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

export default function GeminiAdvancedPromptsPage() {
  const faqItems = [
    {
      q: 'What is Google Gemini?',
      a: 'Google Gemini is a family of large language models developed by Google DeepMind, designed to be efficient, safe, and capable across text, image, audio, and video understanding. Gemini Advanced includes enhanced reasoning, multimodal analysis, and improved performance on complex tasks.'
    },
    {
      q: 'How does Gemini compare to other LLMs?',
      a: 'Gemini excels in multimodal reasoning (combining text, images, audio), long-context processing, and mathematical problem-solving. It offers competitive performance on coding, creative writing, and analysis tasks while prioritizing safety and responsible AI principles.'
    },
    {
      q: 'What can I do with Gemini Advanced?',
      a: 'Gemini Advanced enables complex reasoning, document analysis with images, video understanding, code generation and debugging, creative content creation, research summarization, and strategic planning. It supports longer conversations and more nuanced problem-solving than base models.'
    },
    {
      q: 'Does Gemini support image and video input?',
      a: 'Yes, Gemini Advanced supports image, video, and audio input alongside text. You can analyze charts, diagrams, screenshots, video content, and audio files, making it powerful for multimodal research, document analysis, and content creation tasks.'
    },
    {
      q: 'How do I optimize prompts for Gemini?',
      a: 'Be specific about context, expected output format, and constraints. Provide examples when possible. Use clear role definitions (e.g., "Act as a business analyst"). Break complex tasks into steps. Leverage Gemini&apos;s multimodal capabilities by including relevant images or documents.'
    },
    {
      q: 'Can Gemini handle long documents and transcripts?',
      a: 'Yes, Gemini Advanced has an extended context window that allows it to analyze long documents, full transcripts, research papers, and extensive code files without significant performance degradation, making it ideal for comprehensive document analysis.'
    },
    {
      q: 'What are Gemini&apos;s limitations?',
      a: 'Gemini has a knowledge cutoff date, cannot browse the real-time internet (without extensions), and has limitations on processing extremely large files. For time-sensitive information or live data, you may need to supplement with external tools.'
    },
    {
      q: 'Is Gemini suitable for professional and business use?',
      a: 'Yes, Gemini is designed for professional applications including business analysis, strategic planning, technical documentation, customer research, and data analysis. Always review outputs for accuracy and compliance with your specific requirements.'
    },
    {
      q: 'How does Gemini handle creative tasks?',
      a: 'Gemini excels at creative writing, storytelling, content generation, and ideation. It can generate multiple variations, understand nuance and tone, and adapt content for different audiences and styles.'
    },
    {
      q: 'Can I use Gemini for research and learning?',
      a: 'Absolutely. Gemini is effective for summarizing research, explaining complex topics, generating study guides, analyzing data, and supporting learning across multiple subjects. Always verify critical information through primary sources.'
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
            headline: '100+ Advanced Gemini Prompts for Multimodal AI Tasks',
            description: 'Comprehensive collection of advanced prompts for Google Gemini covering research, analysis, creative writing, coding, document analysis, and strategic thinking.',
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
          <h1 className="text-5xl font-bold mb-4 text-white">100+ Advanced Gemini Prompts</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Harness the power of multimodal AI with curated prompts for research, analysis, creative writing, coding, and strategic decision-making.
          </p>
        </div>

        {/* Research & Document Analysis */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#4285F4]">Research & Document Analysis</h2>
          <p className="text-gray-400 mb-8">Analyze documents, research papers, and complex information with multimodal understanding</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Analyze this research paper abstract and identify the key methodological innovations, potential limitations, and implications for future research in this field." />
            <CopyCard prompt="Review this financial statement and provide a detailed analysis including key metrics trends, financial health assessment, and risk factors I should be aware of." />
            <CopyCard prompt="Examine this organizational chart diagram and suggest optimal team structures, identify potential gaps, and recommend reporting line improvements." />
            <CopyCard prompt="Analyze this competitive landscape chart and provide strategic insights on market positioning, competitor strengths/weaknesses, and differentiation opportunities." />
            <CopyCard prompt="Review this survey data and summarize key findings, identify patterns and correlations, flag unexpected results, and recommend follow-up questions." />
            <CopyCard prompt="Examine this technical documentation and provide a simplified explanation for non-technical stakeholders, highlight critical points, and identify any unclear sections." />
          </div>
        </div>

        {/* Creative Writing & Content Generation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#4285F4]">Creative Writing & Content Generation</h2>
          <p className="text-gray-400 mb-8">Generate sophisticated creative content with nuanced storytelling and style</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Write a compelling brand story for [company] that connects emotional values, mission impact, and customer benefits in narrative form suitable for the homepage." />
            <CopyCard prompt="Create three distinct marketing narratives for the same product, each targeting a different audience persona (enterprise, SMB, individual). Include brand voice variations." />
            <CopyCard prompt="Generate a thought leadership article outline on [topic] that positions [company] as an industry expert, including key arguments, supporting evidence, and conclusion." />
            <CopyCard prompt="Write dialogue for a customer success story case study, including challenge faced, solution implemented, measurable results, and customer testimonial quotes." />
            <CopyCard prompt="Create an engaging email campaign sequence (5 emails) for a product launch, including subject lines, hooks, value propositions, and clear CTAs for each stage." />
            <CopyCard prompt="Generate a screenplay outline for a short promotional video (60 seconds) that tells a compelling story about [product/service], including scenes, dialogue, and visual descriptions." />
          </div>
        </div>

        {/* Advanced Coding & Technical Analysis */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#4285F4]">Advanced Coding & Technical Analysis</h2>
          <p className="text-gray-400 mb-8">Solve complex technical problems and optimize code architecture</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Review this code architecture diagram and identify potential bottlenecks, scalability issues, and suggest improvements for handling 10x traffic increase." />
            <CopyCard prompt="Analyze this error log screenshot and provide root cause analysis, explain why the error occurred, and recommend permanent fixes and monitoring strategies." />
            <CopyCard prompt="Design a system architecture for [use case], including component interactions, data flow, scalability considerations, and technology recommendations." />
            <CopyCard prompt="Review this database schema and suggest optimizations for query performance, indexing strategy, normalization improvements, and potential caching layers." />
            <CopyCard prompt="Examine this code snippet for security vulnerabilities, including authentication/authorization issues, injection risks, and provide secure alternatives." />
            <CopyCard prompt="Create a migration plan to upgrade from [current technology] to [new technology], including phasing strategy, risk assessment, rollback procedures, and testing approach." />
          </div>
        </div>

        {/* Strategic Analysis & Decision-Making */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#4285F4]">Strategic Analysis & Decision-Making</h2>
          <p className="text-gray-400 mb-8">Develop comprehensive strategic insights and business recommendations</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Conduct a SWOT analysis for [company] in [market], then synthesize into strategic recommendations for the next 18 months including specific initiatives." />
            <CopyCard prompt="Analyze this market trend report and identify top 3 opportunities for [industry], assess resource requirements, timeline, and competitive advantages for each." />
            <CopyCard prompt="Review this organizational challenge description and develop a change management strategy including stakeholder analysis, communication plan, and success metrics." />
            <CopyCard prompt="Examine this business model canvas and suggest pivots or enhancements based on current market conditions, customer feedback, and competitive landscape." />
            <CopyCard prompt="Create a risk assessment framework for [initiative], identifying top 10 risks, likelihood/impact ratings, mitigation strategies, and monitoring approach." />
            <CopyCard prompt="Develop a customer retention strategy based on [churn analysis data], including segmentation, targeted interventions, success metrics, and expected impact." />
          </div>
        </div>

        {/* Data Analysis & Visualization */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#4285F4]">Data Analysis & Visualization</h2>
          <p className="text-gray-400 mb-8">Extract insights from data and create compelling visual narratives</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Analyze this dashboard screenshot and identify the top 5 actionable insights, explain what&apos;s working well, what needs attention, and recommend next steps." />
            <CopyCard prompt="Review this spreadsheet data and suggest the most effective visualization types to present findings to [audience], explain why each visualization works." />
            <CopyCard prompt="Examine this sales funnel data and conduct cohort analysis to identify conversion bottlenecks, compare performance across segments, and recommend optimizations." />
            <CopyCard prompt="Create a data storytelling framework for [dataset], including narrative arc, key insights to highlight, supporting visualizations, and compelling conclusions." />
            <CopyCard prompt="Analyze this time-series data and forecast the next 6 months including confidence intervals, identify seasonal patterns, and flag anomalies or inflection points." />
            <CopyCard prompt="Review this customer segmentation analysis and develop targeted strategies for each segment, including messaging, offers, and expected ROI for each." />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-16 border border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-[#4285F4]">Frequently Asked Questions</h2>
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
            <Link href="/ai-prompts-email-writing" className="group bg-gray-800 p-6 rounded-lg hover:border-[#EA4335] border border-gray-700 transition-all">
              <h3 className="text-lg font-bold text-white group-hover:text-[#EA4335] transition-colors mb-2">Email Writing</h3>
              <p className="text-gray-400 text-sm">Prompts for crafting professional and engaging emails</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
