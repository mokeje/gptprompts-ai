'use client';

import { useState } from 'react';
import { Copy, Check, Briefcase, Target, FileText, BarChart3, Users, ChevronUp, ChevronDown } from 'lucide-react';

const CopyCard = ({ title, prompt, tag }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#0D9488] transition-colors">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-white font-semibold text-lg flex-1">{title}</h3>
        <span className="text-xs bg-[#0D9488]/10 text-[#0D9488] px-2 py-1 rounded whitespace-nowrap">{tag}</span>
      </div>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-[#0D9488] hover:text-[#0D9488]/80 text-sm transition-colors"
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
        className="w-full flex items-center justify-between text-left hover:text-[#0D9488] transition-colors"
      >
        <span className="text-white font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp size={20} className="text-[#0D9488]" />
        ) : (
          <ChevronDown size={20} />
        )}
      </button>
      {isOpen && (
        <p className="text-gray-400 mt-3 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

export default function ConsultantsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Consultants: Drive Strategic Impact',
            description: 'Curated AI prompts for business consultants to enhance client discovery, strategy development, research, deliverables, and business growth.',
            image: 'https://gptprompts.ai/og-consultants.jpg',
            datePublished: '2026-03-28',
            dateModified: '2026-03-28',
            author: {
              '@type': 'Organization',
              name: 'GPT Prompts AI',
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
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How can AI help me streamline client discovery?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can analyze client data, identify decision-maker profiles, generate discovery questionnaires, and summarize client research to save time and ensure comprehensive understanding of client needs.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI help me develop stronger consulting frameworks?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. AI can help you structure methodologies, test frameworks against client scenarios, identify gaps in your approach, and generate supporting documentation for your frameworks.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are the best ways to use AI for competitive analysis?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can analyze market data, identify competitor strategies, synthesize industry trends, and generate insights about competitive positioning for your clients.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can AI improve my research and analysis processes?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can accelerate literature reviews, analyze datasets, identify patterns and anomalies, synthesize findings, and generate preliminary insights—freeing you to focus on validation and strategic interpretation.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI help me create better deliverables and reports?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. AI can structure findings, generate executive summaries, create visualizations, write recommendations, and ensure consistency and clarity across your deliverables.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I use AI for business development without losing the personal touch?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use AI to handle repetitive tasks like research and email drafting, but keep relationship-building, pitching, and negotiation personal. AI should amplify your time, not replace your presence.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is it ethical to use AI in consulting?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, when used responsibly. Be transparent with clients about where AI is used, verify AI outputs against your expertise, protect client confidentiality, and maintain your professional judgment.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can I use AI to improve proposal quality?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can analyze client briefs, generate proposal structures tailored to client needs, draft sections based on past successful proposals, and ensure messaging aligns with client pain points.',
                },
              },
              {
                '@type': 'Question',
                name: 'What&apos;s the best way to use AI for financial modeling?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can help structure financial models, test assumptions across scenarios, identify sensitivities, and generate scenario analyses—but you should validate outputs and ensure accuracy.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI help me manage multiple client engagements?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. AI can help you organize engagement data, track deliverables, manage timelines, generate status updates, and ensure consistency across multiple concurrent client projects.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I ensure AI-generated content aligns with my consulting brand?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use AI as a starting point, then heavily customize outputs to reflect your consulting methodology, brand voice, and unique perspective. AI amplifies your expertise—it doesn&apos;t replace it.',
                },
              },
              {
                '@type': 'Question',
                name: 'What skills do I need to use AI effectively as a consultant?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Critical thinking, domain expertise, prompt engineering basics, and the ability to evaluate and refine AI outputs. Your consulting judgment is more important than AI proficiency.',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="border-b border-[#333] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            AI Prompts for Consultants
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Strategic prompts to enhance client discovery, develop frameworks, accelerate research, create compelling deliverables, and grow your consulting business. Drive impact faster with AI.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#0D9488] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0D9488]/90 transition-colors">
              Get Started
            </button>
            <button className="border border-[#0D9488] text-[#0D9488] px-8 py-3 rounded-lg font-semibold hover:bg-[#0D9488]/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Client Discovery & Proposals Section */}
      <section className="border-b border-[#333] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-[#0D9488]" size={32} />
            <h2 className="text-3xl font-bold text-white">Client Discovery & Proposals</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <CopyCard
              title="Deep Dive Discovery Questionnaire"
              prompt="Create a comprehensive discovery questionnaire for a [industry] client focused on [business challenge]. Include questions about business model, stakeholders, decision-making process, current solutions, budget, timeline, and success metrics. Structure for a 90-minute call."
              tag="Discovery"
            />
            <CopyCard
              title="Client Persona & Stakeholder Mapping"
              prompt="Based on the following client profile [client details], map the key stakeholders, their roles, priorities, and potential objections. For each stakeholder, identify what success looks like and potential resistance points."
              tag="Strategy"
            />
            <CopyCard
              title="Proposal Value Proposition"
              prompt="Draft a compelling value proposition section for a proposal to a [industry] client with [specific challenge]. Focus on their top 3 pain points and how our approach directly addresses them with quantified outcomes."
              tag="Proposal"
            />
          </div>
        </div>
      </section>

      {/* Strategy & Framework Development Section */}
      <section className="border-b border-[#333] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Target className="text-[#0D9488]" size={32} />
            <h2 className="text-3xl font-bold text-white">Strategy & Framework Development</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <CopyCard
              title="Strategic Framework Template"
              prompt="Design a consulting framework for [business challenge] that includes: 1) Diagnosis phase, 2) Strategy phase, 3) Implementation phase. For each phase, outline key activities, outputs, and success criteria that create clear structure and client confidence."
              tag="Framework"
            />
            <CopyCard
              title="Scenario Testing & Stress Testing"
              prompt="I&apos;ve developed a strategy for [client challenge]. Generate 5 alternative scenarios and test my approach against each. Identify weaknesses, assumptions, and second-order effects I may have missed."
              tag="Analysis"
            />
            <CopyCard
              title="Executive Strategy Summary"
              prompt="Summarize the following strategy [paste strategy] into a 2-page executive summary suitable for a board presentation. Highlight the rationale, expected outcomes, key risks, and implementation timeline."
              tag="Executive"
            />
          </div>
        </div>
      </section>

      {/* Research & Analysis Section */}
      <section className="border-b border-[#333] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <FileText className="text-[#0D9488]" size={32} />
            <h2 className="text-3xl font-bold text-white">Research & Analysis</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <CopyCard
              title="Competitive Landscape Analysis"
              prompt="Analyze the competitive landscape for [industry/market]. Identify key competitors, their positioning, strengths, weaknesses, market share, and differentiation. Generate insights about market gaps and opportunities."
              tag="Research"
            />
            <CopyCard
              title="Trend & Industry Research Synthesis"
              prompt="Summarize the top 10 trends in [industry] for [year]. For each trend, explain the implication for [client type], opportunities they create, and how a business should respond. Format for a client briefing."
              tag="Insights"
            />
            <CopyCard
              title="Data Pattern & Anomaly Detection"
              prompt="Analyze the following dataset [provide data]. Identify patterns, anomalies, correlations, and outliers. Generate hypotheses about what&apos;s driving these patterns and recommend further analysis or investigation areas."
              tag="Analysis"
            />
          </div>
        </div>
      </section>

      {/* Deliverable Creation Section */}
      <section className="border-b border-[#333] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <BarChart3 className="text-[#0D9488]" size={32} />
            <h2 className="text-3xl font-bold text-white">Deliverable Creation</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <CopyCard
              title="Executive Summary Writing"
              prompt="Create a compelling 1-page executive summary for a consulting deliverable on [topic]. Include situation, findings, key recommendations, and expected impact. Use clear, client-friendly language without jargon."
              tag="Writing"
            />
            <CopyCard
              title="Recommendation Articulation"
              prompt="I have findings on [topic]. Help me structure 4-5 specific, actionable recommendations for [client]. For each recommendation, include: rationale, expected outcomes, implementation considerations, and success metrics."
              tag="Recommendations"
            />
            <CopyCard
              title="Implementation Roadmap"
              prompt="Create a detailed implementation roadmap for the following recommendations [paste recommendations]. Break into phases, identify key milestones, resource requirements, risk mitigation strategies, and success metrics for each phase."
              tag="Roadmap"
            />
          </div>
        </div>
      </section>

      {/* Business Development Section */}
      <section className="border-b border-[#333] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Users className="text-[#0D9488]" size={32} />
            <h2 className="text-3xl font-bold text-white">Business Development</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <CopyCard
              title="Personalized Outreach Campaign"
              prompt="Create a 5-email outreach sequence for [target client/title] in [industry]. Each email should be personalized to their specific challenges, build value progressively, and create a reason for them to respond."
              tag="BD"
            />
            <CopyCard
              title="Case Study Framework"
              prompt="Help me develop a case study structure for [client project]. Include: situation, challenge, our approach, results, key learnings, and how this applies to [target audience]. Format for your website and pitch materials."
              tag="Case Study"
            />
            <CopyCard
              title="Thought Leadership Content"
              prompt="Generate 5 thought leadership topics I could write about based on my consulting expertise in [area]. For each topic, suggest a headline, main arguments, and target audience. Rank by relevance to my ideal clients."
              tag="Content"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-b border-[#333] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Frequently Asked Questions</h2>
          <div className="space-y-0">
            <FAQ
              question="How can AI help me streamline client discovery?"
              answer="AI can analyze client data, identify decision-maker profiles, generate discovery questionnaires, and summarize client research to save time and ensure comprehensive understanding of client needs."
            />
            <FAQ
              question="Can AI help me develop stronger consulting frameworks?"
              answer="Yes. AI can help you structure methodologies, test frameworks against client scenarios, identify gaps in your approach, and generate supporting documentation for your frameworks."
            />
            <FAQ
              question="What are the best ways to use AI for competitive analysis?"
              answer="AI can analyze market data, identify competitor strategies, synthesize industry trends, and generate insights about competitive positioning for your clients."
            />
            <FAQ
              question="How can AI improve my research and analysis processes?"
              answer="AI can accelerate literature reviews, analyze datasets, identify patterns and anomalies, synthesize findings, and generate preliminary insights—freeing you to focus on validation and strategic interpretation."
            />
            <FAQ
              question="Can AI help me create better deliverables and reports?"
              answer="Absolutely. AI can structure findings, generate executive summaries, create visualizations, write recommendations, and ensure consistency and clarity across your deliverables."
            />
            <FAQ
              question="How do I use AI for business development without losing the personal touch?"
              answer="Use AI to handle repetitive tasks like research and email drafting, but keep relationship-building, pitching, and negotiation personal. AI should amplify your time, not replace your presence."
            />
            <FAQ
              question="Is it ethical to use AI in consulting?"
              answer="Yes, when used responsibly. Be transparent with clients about where AI is used, verify AI outputs against your expertise, protect client confidentiality, and maintain your professional judgment."
            />
            <FAQ
              question="How can I use AI to improve proposal quality?"
              answer="AI can analyze client briefs, generate proposal structures tailored to client needs, draft sections based on past successful proposals, and ensure messaging aligns with client pain points."
            />
            <FAQ
              question="What's the best way to use AI for financial modeling?"
              answer="AI can help structure financial models, test assumptions across scenarios, identify sensitivities, and generate scenario analyses—but you should validate outputs and ensure accuracy."
            />
            <FAQ
              question="Can AI help me manage multiple client engagements?"
              answer="Yes. AI can help you organize engagement data, track deliverables, manage timelines, generate status updates, and ensure consistency across multiple concurrent client projects."
            />
            <FAQ
              question="How do I ensure AI-generated content aligns with my consulting brand?"
              answer="Use AI as a starting point, then heavily customize outputs to reflect your consulting methodology, brand voice, and unique perspective. AI amplifies your expertise—it doesn't replace it."
            />
            <FAQ
              question="What skills do I need to use AI effectively as a consultant?"
              answer="Critical thinking, domain expertise, prompt engineering basics, and the ability to evaluate and refine AI outputs. Your consulting judgment is more important than AI proficiency."
            />
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="border-b border-[#333] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Explore Other AI Prompts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/ai-prompts-for-ux-designers"
              className="bg-[#1a1a1a] border border-[#333] rounded-lg p-8 hover:border-[#8B5CF6] transition-colors group"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#8B5CF6] transition-colors">
                AI Prompts for UX Designers
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Research, wireframing, usability testing, design systems, and UX writing prompts.
              </p>
              <div className="inline-flex items-center gap-2 text-[#8B5CF6] font-semibold text-sm">
                Explore →
              </div>
            </a>

            <a
              href="/ai-prompts-for-journalists"
              className="bg-[#1a1a1a] border border-[#333] rounded-lg p-8 hover:border-[#0EA5E9] transition-colors group"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0EA5E9] transition-colors">
                AI Prompts for Journalists
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Story research, interviews, writing, headlines, and fact-checking prompts.
              </p>
              <div className="inline-flex items-center gap-2 text-[#0EA5E9] font-semibold text-sm">
                Explore →
              </div>
            </a>

            <a
              href="/ai-prompts-for-photographers"
              className="bg-[#1a1a1a] border border-[#333] rounded-lg p-8 hover:border-[#D946EF] transition-colors group"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D946EF] transition-colors">
                AI Prompts for Photographers
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Post-processing, client communication, portfolio, marketing, and business operations.
              </p>
              <div className="inline-flex items-center gap-2 text-[#D946EF] font-semibold text-sm">
                Explore →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-8">
            These prompts are designed to enhance your work with AI. Always verify outputs, protect client confidentiality, and maintain your professional judgment.
          </p>
          <button className="bg-[#0D9488] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0D9488]/90 transition-colors">
            Get More Prompts
          </button>
        </div>
      </section>
    </div>
  );
}
