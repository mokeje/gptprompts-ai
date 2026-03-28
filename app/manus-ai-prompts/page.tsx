'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Link from 'next/link';

export default function ManusAIPromptsPage() {
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
          className="flex items-center gap-2 text-indigo-500 hover:text-indigo-400 transition-colors text-sm"
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
              <span className="text-indigo-500">{openIndex === idx ? '−' : '+'}</span>
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

  const taskAutomation = [
    "I need to automate [specific task/workflow]. Here's the current process: [describe steps]. What tools and automation strategies would you recommend? Should I use Make, Zapier, n8n, or custom API integration?",
    "Design an end-to-end workflow automation using [tool choice]. I have [N] systems that need to talk to each other: [list systems]. Create a step-by-step implementation plan including error handling and monitoring.",
    "My team spends [X hours/week] on [repetitive task]. Build me a detailed automation blueprint including: trigger conditions, data transformation rules, conditional logic, and approval workflows. What's the expected time savings?",
    "I want to automate data flow from [source system] to [destination system]. The data includes [data types], needs [transformations], and must [specific requirements]. Create a complete workflow specification with validation rules.",
    "Build an AI-powered document processing workflow for [document type]. The workflow should: extract data, validate against [criteria], flag exceptions, and route to [destinations]. How do I handle errors and exceptions?",
    "Design a multi-step approval workflow that: [step 1], [step 2], [step 3], with notifications to [stakeholders]. How do I set up conditional routing, escalations, and audit trails?"
  ];

  const aiIntegration = [
    "I want to integrate ChatGPT/Claude into my workflow to [specific use case]. The workflow receives [input type] and needs to [required output]. Design the integration architecture, including prompt strategy, rate limiting, and cost optimization.",
    "Build a custom AI assistant for [business function] that can: [capability 1], [capability 2], [capability 3]. What's the best approach: API integration, embeddings with retrieval, fine-tuning, or agents? What's the cost-benefit analysis?",
    "Design an AI-powered [process name] system that learns from user feedback. Include: initial prompt strategy, feedback loop mechanisms, performance metrics, and continuous improvement cycles. How do I measure effectiveness?",
    "Create a system to use AI for [content generation/analysis/decision-making]. The system must handle [specific constraints], maintain [quality standards], and integrate with [existing tools]. What's the implementation roadmap?",
    "Build an intelligent routing system using AI that: categorises incoming [requests/tickets/data], determines priority, suggests appropriate action, and learns from outcomes. How do I implement feedback loops?",
    "Design a multi-model AI system combining [AI capability 1] and [AI capability 2]. When should I use each model? How do I architect this for reliability, cost, and performance?"
  ];

  const workflowOptimization = [
    "Audit my current workflow for [business process]. Identify bottlenecks, manual steps, and automation opportunities. Prioritise by impact and effort. What's the expected efficiency gain and ROI timeline?",
    "I have [N] manual handoffs between [teams/systems]. Design an automated workflow that reduces handoffs, improves speed, and maintains quality. Include SLAs, monitoring, and exception handling.",
    "Create a scalable workflow for [repetitive process] that handles [volume] per [time period]. The workflow must: [requirement 1], [requirement 2], [requirement 3]. How do I ensure it scales without human intervention?",
    "Design a workflow that intelligently distributes [tasks/work items] across [team members/systems] based on [criteria: skills, capacity, urgency]. Include load balancing, priority rules, and real-time monitoring.",
    "Build a feedback-driven workflow optimization system. The system should: collect performance data, identify improvement opportunities, test changes, measure impact, and iterate. What metrics matter most?",
    "I want to eliminate [specific pain point] in my workflow. Current process: [describe]. Design a new workflow that: improves speed by [X%], reduces errors by [Y%], and costs less. Include migration strategy."
  ];

  const dataPipelinesIntegration = [
    "Design a data pipeline that ingests data from [source 1], [source 2], [source 3], transforms it with [business logic], and outputs to [destination]. How do I ensure data quality, handle errors, and track lineage?",
    "Build a real-time data pipeline for [use case] with latency requirements of [X ms]. Include: data ingestion, transformation, validation, and delivery. How do I monitor quality and performance?",
    "Create a data integration strategy connecting [legacy system], [modern app], and [cloud platform]. The data must: [consistency requirement], [availability requirement], [security requirement]. What's the architecture?",
    "Design a webhook-based integration that captures [events/actions] from [source system], processes them with [logic], and triggers [downstream actions]. Include retry logic, deduplication, and monitoring.",
    "Build an ETL/ELT pipeline that: extracts [data type] from [systems], transforms with [business rules], loads into [data warehouse], and enables [analytics/insights]. How do I ensure data freshness and quality?",
    "Create a master data management strategy integrating data from [N] source systems. Include: data mapping, deduplication, validation rules, and governance. How do I maintain single source of truth?"
  ];

  const noCodeLowCodeSolutions = [
    "I want to build [application/system] without writing code. What no-code/low-code platform is best for [your use case]? Compare: cost, capabilities, integrations, and learning curve. What's your recommendation?",
    "Using [no-code platform], build [specific application] that: [requirement 1], [requirement 2], [requirement 3]. Create detailed setup instructions and customisation guide. What are the limitations?",
    "Design a citizen developer program for my team to build [applications/automations]. What tools, training, and governance do they need? How do I ensure quality without IT oversight?",
    "I have a business process that needs a custom solution but no development budget. Using [no-code platform], design a full solution including: data models, workflows, user interface, and integrations.",
    "Evaluate [platform A] vs [platform B] vs [platform C] for building [application type]. Compare: scalability, customisation, integration ecosystem, pricing, and total cost of ownership over 3 years.",
    "Design a knowledge base/content management system using a no-code platform. It must: store [content types], support [user types], enable [search/organisation], and integrate with [systems]."
  ];

  const faqItems = [
    {
      q: "What's the difference between robotic process automation (RPA) and workflow automation?",
      a: "RPA automates UI-based repetitive tasks by mimicking user actions (mouse clicks, keyboard input), useful for legacy systems. Workflow automation connects systems via APIs and integrations, offering better scalability and reliability. Choose RPA for UI-heavy tasks, workflow automation for modern systems and data integration."
    },
    {
      q: "How do I calculate ROI on automation projects?",
      a: "ROI = (Savings - Implementation Cost) / Implementation Cost. Savings include: time saved × hourly rate, error reduction value, and scalability gains. Implementation includes: tool costs, integration, training, and maintenance. Most projects break even in 6-18 months."
    },
    {
      q: "What are the common pitfalls in workflow automation projects?",
      a: "Top pitfalls: automating broken processes (fix first), poor data quality (clean data before automation), ignoring edge cases, inadequate monitoring, lack of team training, and underestimating complexity. Success requires process mapping, pilot testing, and ongoing optimisation."
    },
    {
      q: "How do I ensure data quality in automated workflows?",
      a: "Implement: data validation at source, transformation rules with error handling, data reconciliation checks, monitoring dashboards, and exception alerts. Run regular audits comparing automated vs. manual outputs. Build feedback loops to catch and fix quality issues quickly."
    },
    {
      q: "What's the best approach to start with automation: big bang or phased?",
      a: "Start phased: pilot with a high-impact, low-risk process to build confidence, iterate based on learnings, then expand. This approach de-risks implementation, provides wins early, builds team capability, and reduces change management challenges."
    },
    {
      q: "How do I handle exceptions and edge cases in automated workflows?",
      a: "Design with fallback paths: define exception conditions upfront, route exceptions to human review, log for analysis, escalate based on severity and SLA, and build feedback loops to automate recurring exceptions. Monitoring and alerts are critical."
    },
    {
      q: "What's the typical timeline for implementing an enterprise automation program?",
      a: "Initial pilot (4-8 weeks), followed by rollout across 3-6 months depending on scope. Full enterprise program with training and governance: 6-12 months. Quick wins emerge in weeks; major ROI materialises within 6-12 months of full deployment."
    },
    {
      q: "How do I choose between Make, Zapier, n8n, and custom development?",
      a: "Make/Zapier: best for simple integrations and quick wins (learning curve hours). n8n: good for complex workflows with self-hosting needs. Custom: for highly specialised requirements. Start with no-code for speed; migrate to custom only if no-code constraints become limiting."
    },
    {
      q: "What governance and compliance considerations matter for automation?",
      a: "Key areas: audit trails (log all actions), data security (encryption, access control), compliance (GDPR, industry standards), approval workflows, error handling and recovery, and documentation. Design governance from the start; it's harder to retrofit."
    },
    {
      q: "How do I measure the success of an automation initiative?",
      a: "Track: time saved (hours/week), cost reduction, error rates, process cycle time, employee satisfaction, and ROI. Establish baseline metrics before automation, measure regularly post-deployment, and share wins to build momentum for future projects."
    }
  ];

  const relatedPages = [
    { title: "ChatGPT Prompts for Coding Interviews", path: "/chatgpt-prompts-coding-interviews" },
    { title: "AI Prompts for Supply Chain & Logistics", path: "/ai-prompts-supply-chain" },
    { title: "AI Prompts for Data Analysis", path: "/ai-prompts-data-analysis" },
    { title: "ChatGPT Prompts for PowerPoint", path: "/chatgpt-prompts-powerpoint" },
    { title: "AI Prompts for Notion Workspace", path: "/ai-prompts-notion" },
    { title: "AI Prompts for Marketing Strategy", path: "/ai-prompts-marketing-strategy" },
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
    "headline": "Manus AI Prompts: Workflow Automation & Task Completion",
    "description": "Comprehensive collection of AI prompts for task automation, workflow optimisation, AI integration, data pipelines, and autonomous task completion using Make, Zapier, n8n, and custom APIs.",
    "image": "https://gptprompts.ai/og-manus.jpg",
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
    "datePublished": "2024-01-15"
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">Manus AI Prompts: Workflow Automation & Task Completion</h1>
          <p className="text-gray-400 text-lg">
            Master task automation, workflow integration, data pipelines, and autonomous task completion with targeted AI prompts.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Task Automation & Workflow Design
            </h2>
            <div className="space-y-4">
              {taskAutomation.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              AI Integration & Autonomous Systems
            </h2>
            <div className="space-y-4">
              {aiIntegration.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Workflow Optimization & Process Improvement
            </h2>
            <div className="space-y-4">
              {workflowOptimization.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Data Pipelines & System Integration
            </h2>
            <div className="space-y-4">
              {dataPipelinesIntegration.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              No-Code & Low-Code Solutions
            </h2>
            <div className="space-y-4">
              {noCodeLowCodeSolutions.map((prompt, idx) => (
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
                  className="block bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-indigo-500 hover:bg-gray-800 transition-colors"
                >
                  <span className="text-indigo-500 font-medium">{page.title}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
