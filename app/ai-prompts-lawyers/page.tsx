'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

const ACCENT_COLOR = '#1E40AF';

const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors"
        style={{
          backgroundColor: ACCENT_COLOR,
          color: 'white'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied
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

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-[#1a1a1a] transition-colors"
      >
        <h3 className="text-left font-semibold text-white">{question}</h3>
        {expanded ? (
          <ChevronUp size={20} className="text-gray-400" />
        ) : (
          <ChevronDown size={20} className="text-gray-400" />
        )}
      </button>
      {expanded && (
        <div className="px-6 py-4 bg-[#0f0f0f] border-t border-gray-700">
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function LawyerPromptsPage() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Lawyers: Leverage ChatGPT for Legal Work',
            description: 'Discover powerful ChatGPT prompts designed for legal professionals. Automate contract analysis, case research, and legal writing with AI.',
            datePublished: '2025-01-15',
            author: {
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
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How can ChatGPT help with legal document review?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ChatGPT can rapidly analyze contracts, identify key clauses, extract obligations, and highlight potential risk areas. Use specialized prompts to focus on specific legal concerns like liability, termination, or payment terms.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I use AI for legal research?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can assist with preliminary legal research by synthesizing information about statutes, case law summaries, and legal precedents. However, always verify findings with official legal databases and consult primary sources.'
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#1a1a1a] border border-gray-700">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: ACCENT_COLOR }}
            ></span>
            <span className="text-sm font-medium text-gray-300">Legal Professionals</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            AI Prompts for Lawyers
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Unlock the power of ChatGPT to streamline legal work. From contract analysis and case research to legal memoranda and client communication, discover battle-tested prompts that save time and improve quality. Perfect for solo practitioners, law firms, and in-house counsel.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: ACCENT_COLOR, color: 'white' }}>Contract Analysis</span>
            <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: ACCENT_COLOR, color: 'white' }}>Legal Research</span>
            <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: ACCENT_COLOR, color: 'white' }}>Document Drafting</span>
            <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: ACCENT_COLOR, color: 'white' }}>Workflow Automation</span>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Contract Analysis Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Contract Analysis & Review</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Accelerate contract review with AI-powered analysis. These prompts help identify critical clauses, extract key terms, flag potential issues, and create summaries for faster decision-making.
          </p>
          <div className="grid gap-6">
            <CopyCard
              title="Contract Clause Extractor"
              prompt="Review the following contract and extract all liability limitations, indemnification clauses, termination provisions, and payment terms. Format the output as a structured list with clause name, location (section/article), full text, and potential implications for our position. Contract: [INSERT CONTRACT TEXT]"
            />
            <CopyCard
              title="Risk Assessment Prompt"
              prompt="Analyze this [TYPE] agreement and identify the top 5 legal risks for [PARTY]. For each risk, provide: (1) the problematic clause, (2) the specific danger it poses, (3) industry standard language that would be safer, and (4) a recommended negotiation approach. Agreement: [INSERT AGREEMENT]"
            />
            <CopyCard
              title="Contract Gap Analysis"
              prompt="Review this contract between [PARTY A] and [PARTY B] and identify any missing or inadequate provisions. Specifically check for: dispute resolution, insurance requirements, confidentiality, liability caps, force majeure, and termination rights. Flag gaps and suggest standard language. Contract: [INSERT TEXT]"
            />
            <CopyCard
              title="Comparative Clause Review"
              prompt="Compare these two versions of a [CLAUSE TYPE] clause from related agreements. For each version, analyze: clarity, enforceability, fairness, and market standard alignment. Recommend which language is stronger and what hybrid approach would be optimal. Version 1: [TEXT]. Version 2: [TEXT]"
            />
          </div>
        </section>

        {/* Legal Research & Writing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Legal Research & Memoranda</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Generate initial research summaries, case analysis, and memoranda structure using AI. Perfect for building outlines and identifying key authorities before deep legal research.
          </p>
          <div className="grid gap-6">
            <CopyCard
              title="Legal Memo Outline Generator"
              prompt="Generate a structured legal memorandum outline for the following issue: [LEGAL QUESTION]. Include: Issue, Brief Answer, Facts, Discussion (with key authorities section), Conclusion, and Recommendations. The client is a [CLIENT TYPE] and the jurisdiction is [JURISDICTION]. Focus on [SPECIFIC AREA OF LAW]."
            />
            <CopyCard
              title="Case Law Summarizer"
              prompt="Summarize the holdings and key reasoning from this case and explain its relevance to [SPECIFIC LEGAL ISSUE]. Include: case name and citation, parties, key facts, procedural posture, court's holding, reasoning, and applicability to [CLIENT SCENARIO]. Keep the summary to 200 words. Case: [CASE TEXT OR SUMMARY]"
            />
            <CopyCard
              title="Statutory Analysis Tool"
              prompt="Analyze [STATUTE/REGULATION] in the context of [SPECIFIC FACT PATTERN]. Break down: the statutory text, key definitions, relevant subsections, penalties/remedies, and how it applies to our client's situation. Note any ambiguities or areas requiring further research. Statute: [INSERT TEXT]"
            />
          </div>
        </section>

        {/* Client Communication Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Client Communication & Strategy</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Craft clear client letters, risk assessments, and strategic advice with AI assistance. Ensure communication is professional, understandable, and actionable.
          </p>
          <div className="grid gap-6">
            <CopyCard
              title="Risk Letter Generator"
              prompt="Draft a client engagement letter for a [TYPE OF MATTER] involving [BRIEF DESCRIPTION]. The letter should cover: scope of representation, fee structure, confidentiality, responsibilities of parties, potential risks, timeline, and next steps. Client type: [CLIENT DESCRIPTION]. Jurisdiction: [JURISDICTION]."
            />
            <CopyCard
              title="Strategic Advice Synthesis"
              prompt="Based on the following facts and legal analysis, prepare strategic recommendations for our client. Facts: [INSERT FACTS]. Current legal position: [INSERT ANALYSIS]. Prepare a client advisory with: risk assessment, available options (pros/cons for each), recommended course of action, timeline, and cost considerations."
            />
          </div>
        </section>

        {/* Workflow & Documentation Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Workflow Automation & Documentation</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Standardize document templates, intake procedures, and administrative tasks to reduce manual work and improve consistency across matters.
          </p>
          <div className="grid gap-6">
            <CopyCard
              title="Client Intake Interview Prompt"
              prompt="Generate a comprehensive client intake questionnaire for a [TYPE OF MATTER]. Include questions covering: background, key dates, relevant documents, relationships (opposing party, other parties), goals, constraints, budget, and timeline. Format for ease of client completion. Matter type: [DESCRIBE]."
            />
            <CopyCard
              title="Document Assembly Template"
              prompt="Create a template for a [DOCUMENT TYPE] for a [TYPE OF MATTER] in [JURISDICTION]. Include standard sections with placeholder text marked [BRACKET INSTRUCTIONS]. Add optional provisions commonly used in [SPECIFIC CONTEXT]. Ensure compliance with [JURISDICTION] rules and best practices."
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              question="Can I rely on ChatGPT prompts for actual legal advice?"
              answer="ChatGPT is a tool to accelerate your work, not a substitute for your legal judgment. Use these prompts to generate initial analysis, identify issues, and structure your thinking. You must review all output for accuracy, verify citations, and apply your expertise. For any client-facing advice, apply your professional judgment and verify all AI-generated information against primary sources."
            />
            <FAQItem
              question="How do I ensure client confidentiality when using AI tools?"
              answer="Never paste full contracts or sensitive client information directly into standard ChatGPT. Redact names, specific numbers, and identifying details. Use anonymized versions for analysis. Consider using enterprise AI tools with data privacy agreements, or consult your bar association's ethics guidance. Some jurisdictions have specific rules about AI use and confidentiality."
            />
            <FAQItem
              question="What are the ethical considerations around using AI for legal work?"
              answer="Key ethical considerations include: competence (understanding AI limitations), confidentiality (protecting client information), communication (disclosing AI use if required), and accuracy (verifying all output). Most bar associations require lawyers to understand tools they use. Always apply your own legal judgment to AI-generated content. Check your jurisdiction's ethics opinions on AI use."
            />
            <FAQItem
              question="Can these prompts replace legal research databases like Westlaw?"
              answer="No. ChatGPT is helpful for initial analysis, summarization, and outlining, but it cannot replace legal research databases. AI may miss recent cases, misstate law, or hallucinate citations. Always verify AI-generated legal analysis against official sources like Westlaw, LexisNexis, or free resources like Google Scholar."
            />
            <FAQItem
              question="How accurate is ChatGPT for contract analysis?"
              answer="ChatGPT is useful for identifying clauses, extracting key terms, and suggesting questions to ask. However, it can miss subtle risks and may not understand your specific context or jurisdiction's requirements. Use AI-generated analysis as a starting point, then apply your expertise and review the contract carefully yourself."
            />
            <FAQItem
              question="What types of matters are best suited for AI-assisted work?"
              answer="AI works well for: contract analysis and review, research synthesis and outlining, document drafting and templates, case summarization, client communication templates, and administrative workflow creation. AI is less suitable for: novel legal arguments, highly specialized areas, strategy in contested matters, and anything requiring deep jurisdiction-specific knowledge."
            />
            <FAQItem
              question="How do I customize these prompts for my practice?"
              answer="These prompts are templates. Customize by: specifying your jurisdiction and client type, adding specific practice areas or concerns, including your firm's preferences or style, mentioning relevant statutes or regulations, and adjusting the detail level based on your needs. Test prompts with non-sensitive matter first."
            />
            <FAQItem
              question="Can I use AI-generated content in documents I send to clients?"
              answer="You can use AI-assisted content in client work, but you must review and verify everything. Never send AI output directly to clients without applying your judgment and editing. Be prepared to stand behind all content you send. Consider whether you need to disclose that AI tools were used in the work."
            />
            <FAQItem
              question="What's the best way to give AI prompts to ChatGPT?"
              answer="For best results: be specific and clear, include context (jurisdiction, client type, matter type), break complex tasks into steps, provide examples of desired format, and iterate. For sensitive matters, use anonymized versions. Test prompts on non-confidential matters first to refine them."
            />
            <FAQItem
              question="How do I handle AI hallucinations in legal analysis?"
              answer="AI can generate false citations or misstate law. Always verify: case citations with official databases, statute citations with current law, and quoted text against original sources. If you're unsure about accuracy, treat it as a hypothesis to verify rather than established fact. Never rely on AI citations without checking."
            />
            <FAQItem
              question="Are there specific ChatGPT features designed for legal work?"
              answer="ChatGPT has a Code Interpreter feature for data analysis and document processing, which can help organize large contract sets or extract key terms at scale. Some firms use API integration to automate workflows. For legal-specific features, consider specialized legal AI tools, though general ChatGPT with the right prompts is powerful."
            />
            <FAQItem
              question="How much time can these prompts save in my practice?"
              answer="Time savings depend on your use case. Contract analysis can be 30-50% faster with good prompts. Research outlining can save initial structuring time. Administrative workflows can eliminate hours of manual work. The key is using prompts for the right tasks and your own review for accuracy. Realistic estimate: 5-15 hours saved per week for average practice."
            />
          </div>
        </section>

        {/* Related Pages Section */}
        <section className="mb-16 bg-[#1a1a1a] rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6">Explore More Prompts</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/ai-prompts-small-business"
              className="p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <div className="font-semibold text-white mb-2">AI Prompts for Small Business</div>
              <p className="text-sm text-gray-400">Automate operations, contracts, and client communication for small businesses.</p>
            </Link>
            <Link
              href="/ai-prompts-content-creators"
              className="p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <div className="font-semibold text-white mb-2">AI Prompts for Content Creators</div>
              <p className="text-sm text-gray-400">Generate ideas, create outlines, edit drafts, and optimize content for growth.</p>
            </Link>
            <Link
              href="/chatgpt-email-marketing-prompts"
              className="p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <div className="font-semibold text-white mb-2">ChatGPT Email Marketing Prompts</div>
              <p className="text-sm text-gray-400">Craft compelling email campaigns that drive opens, clicks, and conversions.</p>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <section className="bg-[#1a1a1a] border-t border-gray-700 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Supercharge Your Legal Practice?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Start using these AI prompts today to save time, reduce costs, and improve the quality of your legal work.
          </p>
          <button
            className="px-8 py-3 rounded-lg font-semibold text-white transition-opacity"
            style={{ backgroundColor: ACCENT_COLOR }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Copy All Prompts
          </button>
        </div>
      </section>
    </main>
  );
}