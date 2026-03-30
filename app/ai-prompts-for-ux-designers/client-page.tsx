'use client';

import React, { useState } from 'react';
import { Layout, Users, MousePointer, Layers, Palette, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const CopyCard = ({ title, prompt, tag }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#8B5CF6] transition-colors">
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-white font-semibold text-lg flex-1">{title}</h4>
        {tag && <span className="text-xs bg-[#8B5CF6]/20 text-[#8B5CF6] px-2 py-1 rounded">{tag}</span>}
      </div>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-[#8B5CF6] hover:text-[#8B5CF6]/80 transition-colors text-sm"
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied!
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy prompt
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
        className="w-full flex items-center justify-between text-left hover:text-[#8B5CF6] transition-colors"
      >
        <h4 className="text-white font-semibold">{question}</h4>
        {isOpen ? (
          <ChevronUp size={20} className="text-[#8B5CF6]" />
        ) : (
          <ChevronDown size={20} className="text-gray-500" />
        )}
      </button>
      {isOpen && <p className="text-gray-400 mt-3 text-sm leading-relaxed">{answer}</p>}
    </div>
  );
};

export default function UXDesignersPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-6">
          <Layout size={32} className="text-[#8B5CF6]" />
          <h1 className="text-5xl font-bold">AI Prompts for UX Designers</h1>
        </div>
        <p className="text-xl text-gray-300 mb-8">
          Accelerate your design process with AI-powered prompts for research, prototyping, testing, and documentation. Get instant insights, frameworks, and solutions.
        </p>
      </section>

      {/* User Research & Personas Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[#333]">
        <div className="flex items-center gap-3 mb-8">
          <Users size={28} className="text-[#8B5CF6]" />
          <h2 className="text-3xl font-bold">User Research & Personas</h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <CopyCard
            title="User Interview Analysis"
            prompt="I have conducted user interviews about [product/feature]. Here are the key insights: [transcript or notes]. Create a comprehensive user research summary identifying pain points, needs, and opportunities."
            tag="Research"
          />
          <CopyCard
            title="Persona Development"
            prompt="Based on these user research findings: [research data], create detailed user personas including: demographics, goals, pain points, behaviors, and motivations. Include at least 3 distinct personas."
            tag="Personas"
          />
          <CopyCard
            title="User Journey Mapping"
            prompt="Map the user journey for [use case]. Include: touchpoints, emotions at each stage, pain points, and opportunities for improvement. Format as a detailed narrative with stage breakdowns."
            tag="Journey"
          />
        </div>
      </section>

      {/* Wireframing & Prototyping Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[#333]">
        <div className="flex items-center gap-3 mb-8">
          <MousePointer size={28} className="text-[#8B5CF6]" />
          <h2 className="text-3xl font-bold">Wireframing & Prototyping</h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <CopyCard
            title="Wireframe Generation"
            prompt="Create detailed wireframes for [page/feature]. Include: layout structure, key elements, user interactions, and annotations. Consider [specific requirements]."
            tag="Wireframes"
          />
          <CopyCard
            title="Prototype Specifications"
            prompt="Specify the interactive prototype requirements for [feature]. Include: user flows, interaction patterns, state changes, and microinteractions needed."
            tag="Prototyping"
          />
          <CopyCard
            title="Component Architecture"
            prompt="Design the component structure for [interface]. Define: components needed, props, states, and relationships. Create a visual hierarchy."
            tag="Components"
          />
        </div>
      </section>

      {/* Usability Testing Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[#333]">
        <div className="flex items-center gap-3 mb-8">
          <MousePointer size={28} className="text-[#8B5CF6]" />
          <h2 className="text-3xl font-bold">Usability Testing</h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <CopyCard
            title="Test Plan Development"
            prompt="Create a usability test plan for [product/feature]. Include: objectives, participant profiles, tasks, success metrics, and evaluation criteria."
            tag="Testing"
          />
          <CopyCard
            title="Test Scenario Creation"
            prompt="Design realistic test scenarios for [use case]. Create 5-7 tasks that evaluate: navigation, comprehension, task completion, and user satisfaction."
            tag="Scenarios"
          />
          <CopyCard
            title="Findings Summary"
            prompt="I conducted usability testing with these results: [test data]. Synthesize the findings into: key issues, severity levels, affected users, and recommended improvements."
            tag="Analysis"
          />
        </div>
      </section>

      {/* Design Systems & Components Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[#333]">
        <div className="flex items-center gap-3 mb-8">
          <Layers size={28} className="text-[#8B5CF6]" />
          <h2 className="text-3xl font-bold">Design Systems & Components</h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <CopyCard
            title="Design System Documentation"
            prompt="Document our design system including: color palette, typography, spacing, components, and usage guidelines for [specific area]."
            tag="Documentation"
          />
          <CopyCard
            title="Component Specification"
            prompt="Create detailed specifications for [component name]. Include: states, variations, accessibility requirements, usage examples, and code samples."
            tag="Components"
          />
          <CopyCard
            title="Design Token Definition"
            prompt="Define design tokens for [design system]. Include: colors, spacing, typography, shadows, and animation timing with semantic naming."
            tag="Tokens"
          />
        </div>
      </section>

      {/* UX Writing & Microcopy Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[#333]">
        <div className="flex items-center gap-3 mb-8">
          <Palette size={28} className="text-[#8B5CF6]" />
          <h2 className="text-3xl font-bold">UX Writing & Microcopy</h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <CopyCard
            title="Microcopy Refinement"
            prompt="Review and improve these UI texts: [current copy]. Make them: clearer, more concise, action-oriented, and user-friendly while maintaining brand voice."
            tag="Writing"
          />
          <CopyCard
            title="Error Message Design"
            prompt="Create error messages for [scenario]. Make them: helpful, non-blaming, actionable, and consistent with brand tone. Include examples for common errors."
            tag="Messages"
          />
          <CopyCard
            title="Call-to-Action Optimization"
            prompt="Write compelling CTAs for [feature/page]. Provide 5 variations that are: action-oriented, benefit-focused, and clear about next steps."
            tag="CTAs"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[#333]">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="bg-[#1a1a1a] rounded-lg p-8 border border-[#333]">
          <FAQ
            question="How can AI help with UX research?"
            answer="AI can analyze research data, identify patterns, generate personas, synthesize findings from interviews, and suggest insights you might miss. It accelerates analysis while you focus on strategic decisions and validation."
          />
          <FAQ
            question="Can AI design replace human designers?"
            answer="No. AI generates ideas and handles repetitive tasks, but human judgment is essential for strategy, empathy, creativity, and complex problem-solving. AI is a tool to amplify designer capabilities."
          />
          <FAQ
            question="How do I ensure AI-generated prompts are accurate?"
            answer="Validate AI outputs against real user feedback, iterate on suggestions, and use AI as a starting point rather than final solution. Combine AI insights with human research and testing."
          />
          <FAQ
            question="What metrics should I track for design effectiveness?"
            answer="Track: task success rates, time-on-task, error rates, user satisfaction scores, conversion rates, and qualitative feedback. Use these to validate design decisions and iterate."
          />
          <FAQ
            question="How do I create accessible designs with AI help?"
            answer="Use AI to audit designs for WCAG compliance, generate accessible alt text, suggest color combinations for contrast, and identify accessibility issues. Always test with real users."
          />
          <FAQ
            question="Can AI help with design system maintenance?"
            answer="Yes. AI can help document components, generate specifications, identify inconsistencies, suggest updates, and maintain documentation as the system evolves."
          />
          <FAQ
            question="How do I communicate design decisions to stakeholders?"
            answer="Use AI to create clear documentation, generate comparison matrices, summarize research findings, and create compelling presentations backed by data."
          />
          <FAQ
            question="What&apos;s the best workflow for AI-assisted design?"
            answer="Research with AI assistance → Generate concepts → Validate with users → Refine with AI insights → Prototype → Test with real users → Document with AI help."
          />
          <FAQ
            question="How can AI improve my design speed?"
            answer="Use AI for research analysis, persona generation, documentation, copywriting, and finding design precedents. Focus your time on strategic decisions and user validation."
          />
          <FAQ
            question="Should I share sensitive user data with AI tools?"
            answer="No. Anonymize user data before using AI tools. Remove PII, don&apos;t share confidential business information, and review privacy policies of AI platforms."
          />
          <FAQ
            question="How do I evaluate AI design suggestions?"
            answer="Test suggestions with real users, compare against design principles, consider context and constraints, and trust human judgment over AI recommendations."
          />
          <FAQ
            question="Can AI help with design critique and feedback?"
            answer="Yes. AI can provide structured feedback, identify potential issues, suggest improvements, and highlight areas for user testing. Supplement with human perspectives."
          />
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[#333]">
        <h2 className="text-3xl font-bold mb-8">Related Prompt Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/ai-prompts-for-journalists" className="group bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#0EA5E9] transition-colors">
            <h3 className="text-white font-semibold group-hover:text-[#0EA5E9] transition-colors mb-2">AI Prompts for Journalists</h3>
            <p className="text-gray-400 text-sm">Research, writing, and fact-checking prompts for modern journalism.</p>
          </Link>
          <Link href="/ai-prompts-for-consultants" className="group bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#0D9488] transition-colors">
            <h3 className="text-white font-semibold group-hover:text-[#0D9488] transition-colors mb-2">AI Prompts for Consultants</h3>
            <p className="text-gray-400 text-sm">Strategy, analysis, and client delivery prompts for consulting professionals.</p>
          </Link>
          <Link href="/ai-prompts-for-photographers" className="group bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#D946EF] transition-colors">
            <h3 className="text-white font-semibold group-hover:text-[#D946EF] transition-colors mb-2">AI Prompts for Photographers</h3>
            <p className="text-gray-400 text-sm">Editing, business, and marketing prompts for photography professionals.</p>
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
            headline: 'AI Prompts for UX Designers',
            description: 'Accelerate your design process with AI-powered prompts for research, prototyping, testing, and documentation.',
            author: { '@type': 'Organization', name: 'gptprompts.ai' },
            datePublished: '2025-03-28',
            image: 'https://gptprompts.ai/og-image.png',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How can AI help with UX research?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can analyze research data, identify patterns, generate personas, synthesize findings from interviews, and suggest insights you might miss.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI design replace human designers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. AI generates ideas and handles repetitive tasks, but human judgment is essential for strategy, empathy, creativity, and complex problem-solving.',
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
