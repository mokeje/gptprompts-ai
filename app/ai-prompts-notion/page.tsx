'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Link from 'next/link';

export default function NotionPromptsPage() {
  const CopyCard = ({ prompt }: { prompt: string }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4">
        <p className="text-gray-200 text-sm mb-3 leading-relaxed">{prompt}</p>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors text-sm"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    );
  };

  const FAQAccordion = ({ items }: { items: Array<{ q: string; a: string }> }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-4 py-3 bg-gray-900 text-left text-gray-100 font-medium flex justify-between items-center hover:bg-gray-800 transition-colors"
            >
              <span>{item.q}</span>
              <span className="text-gray-500">{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className="px-4 py-3 bg-gray-950 text-gray-300 text-sm border-t border-gray-700">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const databaseManagement = [
    "I'm managing [X] projects in Notion with team members scattered across time zones. Design a workspace structure that enables async collaboration, prevents duplicate work, and keeps everyone aligned on status without daily sync meetings.",
    "Build a product roadmap database in Notion with linked epic, feature, and task records. Include status tracking, priority scoring, timeline views, and automated dependency checks. How do we visualize progress across quarters?",
    "Create a client project database with linked deliverables, timelines, and budget tracking. Show how to automate status rollups, flag overdue items, and generate monthly client reports directly from the database.",
    "Design an HR and people ops workspace: org chart, performance reviews, hiring pipeline, and team skills inventory. How do we make it queryable so managers can find expertise across the organization?",
    "Build a content calendar database with linked assets, SEO keywords, and publishing workflow. Include views for editorial calendar, content gaps, and audience performance metrics."
  ];

  const workflowAutomation = [
    "I have data scattered across Google Sheets, Slack, and Airtable. Build a Notion automation strategy: which integrations (Zapier, Make, API) pull everything into a single source of truth? What's the setup for real-time syncing?",
    "Create an automation workflow that: (1) captures form submissions, (2) creates database records, (3) assigns to team members, (4) sends Slack notifications, and (5) tracks completion. What's the step-by-step setup?",
    "Design a meeting notes system that auto-creates action items, assigns owners, sets deadlines, and sends reminders. How do we track completion and prevent action items from slipping through the cracks?",
    "Build a document approval workflow: document submitted → assigned to reviewer → reviewer comments → requestor updates → approved → archived. How do we automate notifications and track version history?",
    "Create a customer feedback loop: feedback collected → categorized → assigned to product team → updated in roadmap → communicated back to customer. How do we prevent bottlenecks?"
  ];

  const templateDesign = [
    "Design a reusable project template with all standard databases (tasks, timeline, budget, risks, stakeholders). What properties and relations prevent teams from starting from scratch each time?",
    "Build a meeting template: agenda, participants, notes area with auto-created action items, decision log, and follow-up tracking. How do we make it quick to use and hard to forget items?",
    "Create a weekly planning template that syncs with your calendar, pulls overdue tasks, sets weekly priorities, and tracks completed goals. Include daily standup format for teams.",
    "Design a personal knowledge base template: incoming ideas → capture → tag → link → review. How do we prevent it from becoming a black hole of notes?",
    "Build a vendor/supplier management template with contact info, pricing, contract details, performance metrics, and renewal dates. Include automated renewal alerts and comparison views."
  ];

  const advancedFeatures = [
    "Explain how to use Notion's relation, rollup, and formula features together to build: (1) sum totals across linked items, (2) conditional formatting based on multiple conditions, (3) rollups that show only specific subsets of data.",
    "Design a dashboard that pulls KPIs from multiple databases: team capacity, project status, budget spend, customer satisfaction. Include filters for team, time period, and project type. How do we automate the data refresh?",
    "Build a forecasting model in Notion: input historical data → system calculates trends → generates projections. What formulas and rollups do we need? Is this better in Notion or should we export to Excel?",
    "Create a complex permission system: some team members see all projects, some see only their own, some are read-only. How do we structure databases and use Notion's sharing settings to enforce this?",
    "Design a time-tracking system integrated with projects: log hours → auto-calculate project costs → compare actuals vs estimates. Include views for billing, resource utilization, and profitability by project."
  ];

  const integrationConnections = [
    "Build a Slack-Notion bridge: Notion reminders send to Slack → team responds in Slack → response logs back to Notion. Step-by-step setup using Zapier or Make?",
    "Create a Google Forms → Notion pipeline: form submissions auto-create database records, categorize by type, assign to owners, send confirmations. What's the full automation flow?",
    "Sync Notion with Google Calendar: events in Notion automatically create calendar invites, and calendar events pull into Notion timeline views. How do we prevent duplicates?",
    "Build a Salesforce ↔ Notion sync: opportunities in Salesforce populate a Notion tracking database, and deal updates in Notion push back to Salesforce. What's the integration approach?",
    "Connect Notion to AI tools: use ChatGPT to auto-generate descriptions, summaries, or outlines from Notion database entries. Use Make or Zapier to trigger AI processing on new records."
  ];

  const faqItems = [
    {
      q: "What's the difference between a database and a page in Notion?",
      a: "A page is a standalone document. A database is a structured collection of records with properties (like a spreadsheet), where each record is itself a page. Databases enable filtering, sorting, and complex relations; pages don't. For most organized work, use databases."
    },
    {
      q: "When should I use relations, rollups, and formulas?",
      a: "Relations link records across databases (e.g., projects linked to tasks). Rollups aggregate data from related records (e.g., sum of hours across all tasks in a project). Formulas calculate values within a single record (e.g., project cost = budget - spent). Use all three together for complex tracking."
    },
    {
      q: "How do I prevent my Notion workspace from becoming a mess?",
      a: "Establish naming conventions, use consistent property types, create templates for recurring items, and regularly archive completed projects. Assign one person to maintain workspace governance. Review structure quarterly and clean up unused databases or archived items."
    },
    {
      q: "Can Notion sync in real-time with external tools?",
      a: "Not natively. Use Zapier or Make to trigger syncs when events happen (e.g., Slack message → Notion record). For true real-time, consider APIs or custom integrations. Be aware: frequent syncs can hit API limits on both sides."
    },
    {
      q: "What are the limitations of Notion's automation capabilities?",
      a: "Notion's native buttons and automations are limited to simple actions. For complex workflows, you need Zapier, Make, or custom APIs. Notion can't natively handle conditional logic across multiple fields or multi-step approval flows without external tools."
    },
    {
      q: "How should I structure my workspace for a large team?",
      a: "Organize by business unit or function first (e.g., Marketing workspace, Engineering workspace), then by project or process within each. Use shared databases for cross-functional work. Establish clear access permissions. Create a space directory so people know where to find things."
    },
    {
      q: "Is Notion suitable for critical business data or should I use a database tool instead?",
      a: "Notion is excellent for collaborative, semi-structured work. For mission-critical, high-volume transactional data, consider a proper database (PostgreSQL, MongoDB) or a dedicated tool (Salesforce, HubSpot). Notion is great for tracking, but not for real-time operational systems."
    },
    {
      q: "How do I backup my Notion workspace?",
      a: "Notion allows full export to CSV and PDF, but it's manual and not real-time. For automated backups, use third-party tools (e.g., Save, Notion Backup). Consider exporting critical databases monthly as a safety measure."
    },
    {
      q: "What's the cost-benefit of a complex Notion setup vs. using separate tools?",
      a: "Notion is cost-effective for small to mid-size teams (one shared workspace). As complexity grows (50+ databases, heavy integrations), managing Notion becomes a job itself. At that scale, dedicated tools (Airtable, Salesforce) or custom solutions may be more maintainable."
    },
    {
      q: "How do I train my team to use Notion effectively?",
      a: "Start with templates, not blank databases. Create video walkthroughs for key workflows. Hold weekly office hours to answer questions. Assign a 'Notion champion' to maintain databases and share best practices. Keep documentation updated as the workspace evolves."
    }
  ];

  const relatedPages = [
    { title: "ChatGPT Prompts for Coding Interviews", path: "/chatgpt-prompts-coding-interviews" },
    { title: "AI Prompts for Supply Chain & Logistics", path: "/ai-prompts-supply-chain" },
    { title: "Manus AI Prompts for Automation", path: "/manus-ai-prompts" },
    { title: "ChatGPT Prompts for PowerPoint", path: "/chatgpt-prompts-powerpoint" },
    { title: "AI Prompts for Marketing Strategy", path: "/ai-prompts-marketing-strategy" },
    { title: "AI Prompts for Data Analysis", path: "/ai-prompts-data-analysis" },
    { title: "AI Prompts for Business Planning", path: "/ai-prompts-business-planning" },
    { title: "ChatGPT Prompts for Content Writing", path: "/chatgpt-prompts-content-writing" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI Prompts for Notion Workspace Optimization",
    "description": "Comprehensive collection of AI prompts for designing databases, automating workflows, building templates, integrating tools, and mastering Notion at scale.",
    "image": "https://gptprompts.ai/og-notion.jpg",
    "author": {
      "@type": "Organization",
      "name": "GPT Prompts"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GPT Prompts",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gptprompts.ai/logo.png"
      }
    },
    "datePublished": "2024-02-10"
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">AI Prompts for Notion Workspace Optimization</h1>
          <p className="text-gray-400 text-lg">
            Build scalable, automated Notion workspaces with targeted AI prompts for database design, workflow automation, template building, and team enablement.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              Database Management & Structure Design
            </h2>
            <div className="space-y-4">
              {databaseManagement.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              Workflow Automation & Integration
            </h2>
            <div className="space-y-4">
              {workflowAutomation.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              Template Design & Reusable Systems
            </h2>
            <div className="space-y-4">
              {templateDesign.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              Advanced Features & Data Modeling
            </h2>
            <div className="space-y-4">
              {advancedFeatures.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
              Integration & External Connections
            </h2>
            <div className="space-y-4">
              {integrationConnections.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedPages.map((page, idx) => (
                <Link
                  key={idx}
                  href={page.path}
                  className="block bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-gray-500 hover:bg-gray-800 transition-colors"
                >
                  <span className="text-gray-400 font-medium hover:text-gray-300">{page.title}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
