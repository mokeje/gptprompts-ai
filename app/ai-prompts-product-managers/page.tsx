'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ChevronDown,
  Copy,
  Check,
  Sparkles,
  Zap,
  Users,
  Target,
  BarChart3,
  FileText,
  MessageSquare,
  Lightbulb,
} from 'lucide-react';

const accentColor = '#2563EB';

interface CopyCardProps {
  title: string;
  prompt: string;
  category: string;
}

function CopyCard({ title, prompt, category }: CopyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#2563EB] transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h4 className="text-white font-semibold mb-1">{title}</h4>
          <p className="text-xs text-[#999]">{category}</p>
        </div>
      </div>
      <p className="text-[#ccc] text-sm leading-relaxed mb-4">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-4 py-2 rounded bg-[#2563EB] text-white text-sm font-medium hover:bg-[#1d4ed8] transition-colors"
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
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#333] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-[#1a1a1a] transition-colors"
      >
        <h4 className="text-white font-semibold text-left">{question}</h4>
        <ChevronDown
          size={20}
          className={`text-[#2563EB] flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-[#1a1a1a] border-t border-[#333]">
          <p className="text-[#ccc] text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductManagersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Product Managers: Ship Better Products with AI',
            description:
              'Curated AI prompts for product managers. Streamline roadmapping, user research, PRD writing, and stakeholder communication with ChatGPT, Claude, and Gemini.',
            image: 'https://gptprompts.ai/og-product-managers.png',
            datePublished: '2025-01-15',
            dateModified: new Date().toISOString().split('T')[0],
            author: {
              '@type': 'Organization',
              name: 'GPTPrompts.AI',
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
                name: 'What is the best AI tool for product managers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Popular choices include ChatGPT for general productivity, Claude for in-depth analysis, Gemini for Google Workspace integration, and specialized tools like Pendo or Fullstory for analytics. The best tool depends on your workflow, but most product managers benefit from having access to multiple AI tools.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can AI help with product roadmapping?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can accelerate roadmap creation by analyzing user feedback, prioritizing features based on impact, generating timeline estimates, and identifying market trends. Use AI prompts to synthesize data, challenge assumptions, and create multiple roadmap scenarios for stakeholder review.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI help write better PRDs?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. AI can help structure PRDs, fill in missing sections, improve clarity, add success metrics, and ensure consistency. Give AI your raw notes or existing documents, and it can expand them into comprehensive, well-formatted specifications.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I use AI for user research?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use AI to analyze interview transcripts, categorize user feedback, identify patterns and themes, synthesize insights, generate interview questions, and create research reports. AI accelerates the synthesis phase of research, freeing you to focus on deeper analysis.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are the best prompts for competitive analysis?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ask AI to compare features across competitors, analyze pricing strategies, identify market gaps, summarize competitor positioning, and suggest differentiation opportunities. Provide AI with competitor websites, feature lists, or documentation for deeper analysis.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can AI improve stakeholder communication?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use AI to draft executive summaries, create presentation outlines, translate technical details into business language, anticipate questions, and generate tailored messaging for different audiences. AI helps you communicate product vision more clearly and persuasively.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI help with product metrics and OKRs?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Use AI to define key metrics, structure OKRs, analyze metric relationships, forecast impact, and create dashboards. AI can also help you sanity-check metrics and suggest leading indicators for your product goals.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I structure a good product prompt?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Effective product prompts include context (market, users, problem), clear instructions, specific format requests, examples of good output, and constraints or requirements. The more detail you provide, the better and more useful AI responses will be.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should I do with AI output for PRDs?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Always review, refine, and validate AI-generated PRD content. Use it as a starting point, not the final version. Add specific numbers, timelines, user data, and domain expertise. Have engineering and design review the final PRD before sharing with stakeholders.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI replace a product manager?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. AI is a tool for product managers, not a replacement. You bring judgment, strategy, user empathy, and business acumen that AI cannot replicate. Use AI to accelerate analysis and writing, freeing you to focus on decision-making, user research, and leadership.',
                },
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="mb-8 flex items-center gap-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: `${accentColor}20`,
                color: accentColor,
                border: `1px solid ${accentColor}40`,
              }}
            >
              Product Management
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI Prompts for Product Managers: Ship Better Products with AI
          </h1>

          <p className="text-xl text-[#ccc] mb-8 max-w-3xl">
            Supercharge your product work with AI. From roadmapping and user research to PRD writing
            and stakeholder communication, use these prompts with ChatGPT, Claude, Gemini, and other
            AI tools to work smarter and faster.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4">
              <Target size={24} className="text-[#2563EB] mb-2" />
              <p className="text-sm text-[#ccc]">Strategy & Roadmapping</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4">
              <Users size={24} className="text-[#2563EB] mb-2" />
              <p className="text-sm text-[#ccc]">User Research</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4">
              <FileText size={24} className="text-[#2563EB] mb-2" />
              <p className="text-sm text-[#ccc]">PRD Writing</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4">
              <MessageSquare size={24} className="text-[#2563EB] mb-2" />
              <p className="text-sm text-[#ccc]">Stakeholder Comms</p>
            </div>
          </div>

          <div className="space-y-16">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Sparkles size={28} className="text-[#2563EB]" />
                <h2 className="text-3xl font-bold">Strategy & Roadmapping</h2>
              </div>

              <div className="grid gap-6">
                <CopyCard
                  title="Product Roadmap Framework Generator"
                  category="Strategic Planning"
                  prompt="Create a 12-month product roadmap for [product]. Current market position: [position]. Key competitors: [competitors]. User feedback themes: [feedback]. Format as a table with quarter, initiative, rationale, success metrics, and dependencies. Include at least 3-4 initiatives per quarter balancing quick wins with strategic bets. Flag any high-risk dependencies or overlaps."
                />

                <CopyCard
                  title="Feature Prioritization Matrix"
                  category="Prioritization"
                  prompt="I have these feature requests for my [product type]: [list 8-10 features]. My key metrics are [metrics]. Our constraints are [team size, timeline, technical debt]. Create a prioritization matrix using RICE (Reach, Impact, Confidence, Effort). For each feature, assign scores 1-10, calculate priority score, and provide brief rationale. Highlight the top 3 features to build first."
                />

                <CopyCard
                  title="Market Opportunity Analysis"
                  category="Strategy"
                  prompt="Analyze the market opportunity for [product/feature] in [market/segment]. What are the TAM, SAM, and SOM? Who are the main competitors? What unmet needs exist? What is the pricing landscape? Provide a 300-word summary structured as: Market Size | Competition | Unmet Needs | Pricing Opportunity | Recommendation."
                />

                <CopyCard
                  title="Strategic Pivot Evaluation"
                  category="Strategy"
                  prompt="We are considering pivoting our product from [current focus] to [new focus]. Current traction: [metrics]. Proposed pivot rationale: [reason]. Evaluate this pivot across: Market Opportunity (TAM, growth), Competitive Landscape, Technical Feasibility, Team Capability, and Financial Impact. Highlight risks and mitigating strategies. Recommendation: go/no-go with reasoning."
                />
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-8">
                <Users size={28} className="text-[#2563EB]" />
                <h2 className="text-3xl font-bold">User Research & Discovery</h2>
              </div>

              <div className="grid gap-6">
                <CopyCard
                  title="User Interview Question Generator"
                  category="Research"
                  prompt="Generate 15-20 interview questions to understand [user segment]'s experience with [problem area]. I want to explore: [key themes]. Current assumptions: [assumptions]. Format as: Introduction Question | Problem Area Questions (5-7) | Current Solution Questions (3-4) | Needs & Desires Questions (3-4) | Closing Questions (2-3). Include follow-up probes for each."
                />

                <CopyCard
                  title="Feedback Synthesis & Themes"
                  category="Research"
                  prompt="Here are excerpts from 8 user interviews about [topic]: [paste quotes]. Analyze these quotes and: Identify 5-7 common themes. For each theme, find 2-3 supporting quotes. Rate each theme by frequency and intensity (high/medium/low). Suggest 3-5 product implications. Present as a structured report with theme title, description, quote examples, frequency/intensity, and implications."
                />

                <CopyCard
                  title="Persona Development Template"
                  category="Research"
                  prompt="Create detailed personas for [product] based on: [research data/user segments]. For each persona (3-5 personas), include: Name & Title | Demographics | Goals & Motivations | Pain Points | Current Solutions | Barriers to Adoption | Success Metrics | Key Behaviors. Use data from interviews, surveys, and analytics. Make personas vivid and specific."
                />

                <CopyCard
                  title="User Journey Mapping"
                  category="Research"
                  prompt="Map the user journey for [user segment] solving [problem] with [product]. Include stages: Awareness | Consideration | Decision | Onboarding | Active Use | Retention | Advocacy. For each stage, detail: Jobs to be done | Pain points | Emotions | Touchpoints | Key moments of truth. Identify 3-5 areas for improvement with specific recommendations."
                />
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-8">
                <FileText size={28} className="text-[#2563EB]" />
                <h2 className="text-3xl font-bold">PRD & Specification Writing</h2>
              </div>

              <div className="grid gap-6">
                <CopyCard
                  title="Comprehensive PRD Template"
                  category="Documentation"
                  prompt="Write a complete PRD for [feature/product]. Include: Overview (1-2 paragraphs) | Goals & Success Metrics (3-5 metrics) | User Problems & Jobs to Be Done | Use Cases (2-3) | Requirements (functional & non-functional) | Design Principles | Timeline & Dependencies | Go-to-Market Plan | Success Criteria. Base this on: [user research findings]. Keep it concise but thorough (1500-2000 words max)."
                />

                <CopyCard
                  title="Success Metrics Definition"
                  category="Measurement"
                  prompt="Define success metrics for [feature]. Goal: [product goal]. User impact: [expected user benefit]. Business impact: [expected business outcome]. For each metric, provide: Name & Definition | Why it matters | How to measure | Target value | Baseline | Leading vs Lagging indicator. Include 5-7 metrics covering user behavior, business, and quality. Format as a table with these columns."
                />

                <CopyCard
                  title="Use Case & Edge Case Documentation"
                  category="Documentation"
                  prompt="Document 5-7 detailed use cases for [feature]. For each use case: Title | Actor | Preconditions | Main Success Scenario (step-by-step) | Alternative Flows | Edge Cases | Error States. Also list 3-5 edge cases that might break the feature and how to handle them gracefully. Format for engineering clarity."
                />

                <CopyCard
                  title="Technical Constraints & Feasibility"
                  category="Requirements"
                  prompt="Evaluate the technical feasibility of [feature]. Technical constraints: [constraints]. Current architecture: [tech stack]. Estimate: Effort (eng time) | Complexity (1-5) | Technical Risk (1-5) | Dependencies | Potential blockers. Propose 2 technical approaches with pros/cons. Recommend which approach based on tradeoffs. Flag any architectural changes needed."
                />
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare size={28} className="text-[#2563EB]" />
                <h2 className="text-3xl font-bold">Stakeholder Communication</h2>
              </div>

              <div className="grid gap-6">
                <CopyCard
                  title="Executive Summary Generator"
                  category="Communication"
                  prompt="Create a 1-page executive summary for [initiative/product]. Audience: [stakeholders]. Must include: Problem & Opportunity | Proposed Solution | Expected Impact | Investment Required | Timeline | Key Risks & Mitigations | Recommendation. Use data and specifics. Write for clarity, not length. Format for a one-page slide."
                />

                <CopyCard
                  title="Stakeholder Messaging Strategy"
                  category="Communication"
                  prompt="Create tailored messaging for [decision/announcement] for these stakeholders: [list]. For each stakeholder, create: Key Message (1 sentence) | Context & Why It Matters | Impact on Them | Call to Action. Anticipate 2-3 questions or concerns each stakeholder might raise and draft thoughtful responses. Keep tone professional but personable."
                />

                <CopyCard
                  title="Product Update Communication"
                  category="Communication"
                  prompt="Draft a product update announcement for [feature release]. Audience: [users/customers]. Must include: What's New | Why We Built It | How It Works (simple explanation) | How Users Benefit | Timeline for Rollout. Write 2 versions: technical (for power users) and non-technical (for general users). Use concrete examples."
                />

                <CopyCard
                  title="Difficult Conversation Framework"
                  category="Communication"
                  prompt="Prepare for a conversation about [difficult topic: delayed feature, deprioritized request, resource constraint] with [stakeholder]. Help me: Anticipate their concerns | Draft my opening statement | Prepare 3-4 responses to likely objections | Propose solutions or alternatives | Plan follow-up actions. Make it constructive, empathetic, and solution-focused."
                />
              </div>
            </section>
          </div>

          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <FAQItem
                question="What is the best AI tool for product managers?"
                answer="Popular choices include ChatGPT for general productivity, Claude for in-depth analysis, Gemini for Google Workspace integration, and specialized tools like Pendo or Fullstory for analytics. The best tool depends on your workflow, but most product managers benefit from having access to multiple AI tools."
              />

              <FAQItem
                question="How can AI help with product roadmapping?"
                answer="AI can accelerate roadmap creation by analyzing user feedback, prioritizing features based on impact, generating timeline estimates, and identifying market trends. Use AI prompts to synthesize data, challenge assumptions, and create multiple roadmap scenarios for stakeholder review."
              />

              <FAQItem
                question="Can AI help write better PRDs?"
                answer="Absolutely. AI can help structure PRDs, fill in missing sections, improve clarity, add success metrics, and ensure consistency. Give AI your raw notes or existing documents, and it can expand them into comprehensive, well-formatted specifications."
              />

              <FAQItem
                question="How do I use AI for user research?"
                answer="Use AI to analyze interview transcripts, categorize user feedback, identify patterns and themes, synthesize insights, generate interview questions, and create research reports. AI accelerates the synthesis phase of research, freeing you to focus on deeper analysis."
              />

              <FAQItem
                question="What are the best prompts for competitive analysis?"
                answer="Ask AI to compare features across competitors, analyze pricing strategies, identify market gaps, summarize competitor positioning, and suggest differentiation opportunities. Provide AI with competitor websites, feature lists, or documentation for deeper analysis."
              />

              <FAQItem
                question="How can AI improve stakeholder communication?"
                answer="Use AI to draft executive summaries, create presentation outlines, translate technical details into business language, anticipate questions, and generate tailored messaging for different audiences. AI helps you communicate product vision more clearly and persuasively."
              />

              <FAQItem
                question="Can AI help with product metrics and OKRs?"
                answer="Yes. Use AI to define key metrics, structure OKRs, analyze metric relationships, forecast impact, and create dashboards. AI can also help you sanity-check metrics and suggest leading indicators for your product goals."
              />

              <FAQItem
                question="How do I structure a good product prompt?"
                answer="Effective product prompts include context (market, users, problem), clear instructions, specific format requests, examples of good output, and constraints or requirements. The more detail you provide, the better and more useful AI responses will be."
              />

              <FAQItem
                question="What should I do with AI output for PRDs?"
                answer="Always review, refine, and validate AI-generated PRD content. Use it as a starting point, not the final version. Add specific numbers, timelines, user data, and domain expertise. Have engineering and design review the final PRD before sharing with stakeholders."
              />

              <FAQItem
                question="Can AI replace a product manager?"
                answer="No. AI is a tool for product managers, not a replacement. You bring judgment, strategy, user empathy, and business acumen that AI cannot replicate. Use AI to accelerate analysis and writing, freeing you to focus on decision-making, user research, and leadership."
              />
            </div>
          </section>

          <section className="mt-20 bg-[#1a1a1a] border border-[#333] rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">More AI Prompts for Your Role</h2>
            <p className="text-[#ccc] mb-6">
              Explore other prompt collections designed for professionals in your field and related
              areas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/chatgpt-business-productivity"
                className="p-4 rounded bg-[#0a0a0a] border border-[#333] hover:border-[#2563EB] transition-colors"
              >
                <p className="text-white font-semibold">ChatGPT for Business Productivity</p>
                <p className="text-xs text-[#999] mt-2">Boost efficiency across functions</p>
              </Link>

              <Link
                href="/ai-prompts-project-management"
                className="p-4 rounded bg-[#0a0a0a] border border-[#333] hover:border-[#2563EB] transition-colors"
              >
                <p className="text-white font-semibold">AI Prompts for Project Managers</p>
                <p className="text-xs text-[#999] mt-2">Streamline timelines and deliverables</p>
              </Link>

              <Link
                href="/chatgpt-data-analysis"
                className="p-4 rounded bg-[#0a0a0a] border border-[#333] hover:border-[#2563EB] transition-colors"
              >
                <p className="text-white font-semibold">ChatGPT for Data Analysis</p>
                <p className="text-xs text-[#999] mt-2">Uncover insights from data</p>
              </Link>

              <Link
                href="/prompt-data-analysis"
                className="p-4 rounded bg-[#0a0a0a] border border-[#333] hover:border-[#2563EB] transition-colors"
              >
                <p className="text-white font-semibold">Prompts for Data Analysis</p>
                <p className="text-xs text-[#999] mt-2">Query, analyze, visualize</p>
              </Link>

              <Link
                href="/chatgpt-prompts"
                className="p-4 rounded bg-[#0a0a0a] border border-[#333] hover:border-[#2563EB] transition-colors"
              >
                <p className="text-white font-semibold">ChatGPT Prompts</p>
                <p className="text-xs text-[#999] mt-2">1000s of prompts for every use case</p>
              </Link>

              <Link
                href="/claude-prompts"
                className="p-4 rounded bg-[#0a0a0a] border border-[#333] hover:border-[#2563EB] transition-colors"
              >
                <p className="text-white font-semibold">Claude Prompts</p>
                <p className="text-xs text-[#999] mt-2">Prompts optimized for Claude AI</p>
              </Link>

              <Link
                href="/gemini-prompts"
                className="p-4 rounded bg-[#0a0a0a] border border-[#333] hover:border-[#2563EB] transition-colors"
              >
                <p className="text-white font-semibold">Gemini Prompts</p>
                <p className="text-xs text-[#999] mt-2">Master Google's newest AI</p>
              </Link>

              <Link
                href="/ai-prompts-sales-partnerships"
                className="p-4 rounded bg-[#0a0a0a] border border-[#333] hover:border-[#2563EB] transition-colors"
              >
                <p className="text-white font-semibold">AI Prompts for Sales</p>
                <p className="text-xs text-[#999] mt-2">Close deals and grow revenue</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
