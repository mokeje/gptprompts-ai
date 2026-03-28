'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown } from 'lucide-react';

const CopyCard = ({ prompt, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-[#4F46E5] transition-colors">
      <p className="text-gray-300 text-sm mb-3">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-xs font-medium text-[#4F46E5] hover:text-[#6366F1] transition-colors"
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied!
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

const FAQ = ({ faqs }) => {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenId(openId === idx ? null : idx)}
            className="w-full flex justify-between items-center p-4 hover:bg-gray-800 transition-colors"
          >
            <h4 className="text-sm font-medium text-gray-100 text-left">{faq.q}</h4>
            <ChevronDown
              size={18}
              className={`text-[#4F46E5] flex-shrink-0 transition-transform ${
                openId === idx ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openId === idx && (
            <div className="px-4 pb-4 text-sm text-gray-400 border-t border-gray-800">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function NapkinAIPrompts() {
  const faqs = [
    {
      q: 'What is Napkin AI and how does it work?',
      a: 'Napkin AI is a visual diagramming and flowchart tool that uses AI to help you create professional diagrams quickly. You describe what you want, and AI generates the visual structure for you.'
    },
    {
      q: 'Can I use Napkin AI for business process mapping?',
      a: 'Yes, Napkin AI is excellent for business process mapping. You can create workflows, swimlane diagrams, and process flows with AI assistance, making it faster than traditional diagramming tools.'
    },
    {
      q: 'What types of diagrams can Napkin AI create?',
      a: 'Napkin AI can create flowcharts, system architecture diagrams, user journeys, data flow diagrams, organizational charts, mind maps, wireframes, and many other visual formats.'
    },
    {
      q: 'Is Napkin AI suitable for technical documentation?',
      a: 'Absolutely. Napkin AI is perfect for creating system architecture diagrams, API flow diagrams, database schemas, and other technical visuals needed for documentation.'
    },
    {
      q: 'Can I customize diagrams after AI generation?',
      a: 'Yes, Napkin AI provides an editor where you can adjust colors, layout, shapes, and text after the AI generates the initial diagram structure.'
    },
    {
      q: 'How accurate are AI-generated diagrams?',
      a: 'The accuracy depends on how well you describe what you need. Clear, detailed prompts result in accurate diagrams that require minimal adjustment.'
    },
    {
      q: 'Can teams collaborate on Napkin AI diagrams?',
      a: 'Most Napkin AI versions support sharing and collaboration features, allowing teams to work on diagrams together in real-time.'
    },
    {
      q: 'What file formats can I export from Napkin AI?',
      a: 'Napkin AI typically supports exporting to PNG, SVG, PDF, and other common formats, making it easy to integrate diagrams into presentations and documents.'
    },
    {
      q: 'Is Napkin AI free or paid?',
      a: 'Napkin AI offers both free and paid tiers. The free version provides basic functionality, while paid plans unlock advanced features and higher usage limits.'
    },
    {
      q: 'How does Napkin AI compare to traditional diagramming tools?',
      a: 'Napkin AI is faster for initial diagram creation due to AI assistance, but traditional tools like Visio or Lucidchart may offer more granular control for complex diagrams.'
    },
    {
      q: 'Can I create interactive diagrams with Napkin AI?',
      a: 'While Napkin AI excels at creating static diagrams, some advanced features may support interactive elements depending on your plan and export options.'
    },
    {
      q: 'How do I get the best results from Napkin AI prompts?',
      a: 'Be specific and descriptive. Include details about diagram type, elements, relationships, and layout preferences. Iterate based on results and refine your prompts.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">Napkin AI Prompts</h1>
          <p className="text-gray-400">
            Master visual diagramming and flowchart generation with AI-powered Napkin. Get prompts for architecture diagrams, data visualizations, presentations, and more.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* Section 1: Diagram & Flowchart Generation */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#4F46E5]">Diagram & Flowchart Generation</h2>
            <p className="text-gray-400">
              Create professional flowcharts and diagrams in seconds with AI-assisted generation.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Decision Tree Flowchart"
              prompt="Create a decision tree flowchart showing a customer support routing system with branches for billing issues, technical support, and general inquiries. Include decision nodes, outcomes, and escalation paths."
            />
            <CopyCard
              title="Process Flow Diagram"
              prompt="Generate a swimlane process flow diagram for an e-commerce checkout process. Show customer, payment system, and inventory management lanes with all steps, decision points, and parallel processes."
            />
            <CopyCard
              title="System Architecture Diagram"
              prompt="Design a cloud architecture diagram showing a microservices-based application with API gateway, authentication service, user service, order service, and database layers. Include connections and data flow."
            />
          </div>
        </section>

        {/* Section 2: Data Visualization */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#4F46E5]">Data Visualization</h2>
            <p className="text-gray-400">
              Transform complex data into clear, visual representations with AI assistance.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Sankey Diagram"
              prompt="Create a Sankey diagram showing how website traffic flows from different sources (organic, direct, referral, paid) through pages (landing, product, checkout) to outcomes (purchase, bounce, signup)."
            />
            <CopyCard
              title="Mind Map"
              prompt="Generate a mind map for digital marketing strategy with central node &apos;Digital Marketing&apos; and branches for SEO, social media, email marketing, content marketing, and paid advertising with sub-branches."
            />
            <CopyCard
              title="Venn Diagram"
              prompt="Create a Venn diagram showing the intersection of AI capabilities (automation, data analysis, prediction), business needs (efficiency, insights, growth), and current tools (spreadsheets, dashboards, analytics)."
            />
          </div>
        </section>

        {/* Section 3: Presentation Visuals */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#4F46E5]">Presentation Visuals</h2>
            <p className="text-gray-400">
              Design impactful visuals to enhance your presentations and pitches.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Roadmap Timeline"
              prompt="Design a product roadmap showing Q1-Q4 deliverables with phases (planning, development, testing, launch), dependencies, and milestones. Use clear visual hierarchy and status indicators."
            />
            <CopyCard
              title="Comparison Matrix"
              prompt="Create a comparison matrix showing 5 AI tools (ChatGPT, Claude, Gemini, Copilot, Midjourney) across dimensions (cost, speed, accuracy, integrations, ease of use) with visual ratings."
            />
            <CopyCard
              title="Organizational Chart"
              prompt="Generate an organizational chart for a tech startup with CEO at top, reporting lines to CTO, CFO, and CMO, with their direct reports and team members shown in hierarchy."
            />
          </div>
        </section>

        {/* Section 4: Business Process Mapping */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#4F46E5]">Business Process Mapping</h2>
            <p className="text-gray-400">
              Map and optimize business processes with clear visual representations.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Recruitment Workflow"
              prompt="Map the complete recruitment process from job posting to onboarding, including stages: job posting, screening, interviews, background check, offer, and onboarding with responsible parties."
            />
            <CopyCard
              title="Incident Management Process"
              prompt="Create a detailed incident management flow showing detection, triage, assignment, resolution, verification, and closure with escalation paths and SLA indicators."
            />
            <CopyCard
              title="Financial Approval Chain"
              prompt="Design a financial approval workflow for purchase requests showing authorization levels, amount thresholds, approval paths, and exception handling for different spending categories."
            />
          </div>
        </section>

        {/* Section 5: Educational & Training Visuals */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#4F46E5]">Educational & Training Visuals</h2>
            <p className="text-gray-400">
              Create clear educational diagrams to explain concepts and procedures.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Machine Learning Pipeline"
              prompt="Illustrate a complete machine learning workflow showing data collection, preprocessing, feature engineering, model training, evaluation, and deployment with feedback loops."
            />
            <CopyCard
              title="Software Development Lifecycle"
              prompt="Create a visual representation of SDLC phases: requirements, design, development, testing, deployment, and maintenance with iterations and feedback loops between stages."
            />
            <CopyCard
              title="User Journey Map"
              prompt="Design a comprehensive user journey for a SaaS onboarding process showing awareness, consideration, sign-up, activation, usage, and retention stages with touchpoints and emotions."
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-[#4F46E5]">Frequently Asked Questions</h2>
          <FAQ faqs={faqs} />
        </section>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Napkin AI Prompts',
              description: 'Master visual diagramming and flowchart generation with AI-powered Napkin. Get prompts for architecture diagrams, data visualizations, presentations, and more.',
              image: 'https://gptprompts.ai/napkin-ai.png',
              author: {
                '@type': 'Organization',
                name: 'GPT Prompts'
              },
              datePublished: '2026-01-15'
            })
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
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a
                }
              }))
            })
          }}
        />

        {/* Related Pages */}
        <section className="border-t border-gray-800 pt-12">
          <h3 className="text-lg font-bold mb-6 text-gray-100">Related Pages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/ai-prompts-for-developers" className="text-[#4F46E5] hover:text-[#6366F1] text-sm font-medium">
              Developer Prompts
            </a>
            <a href="/ai-prompts-for-marketers" className="text-[#4F46E5] hover:text-[#6366F1] text-sm font-medium">
              Marketer Prompts
            </a>
            <a href="/ai-prompts-for-data-analysts" className="text-[#4F46E5] hover:text-[#6366F1] text-sm font-medium">
              Data Analyst Prompts
            </a>
            <a href="/" className="text-[#4F46E5] hover:text-[#6366F1] text-sm font-medium">
              All Prompts
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
