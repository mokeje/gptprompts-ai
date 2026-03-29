'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp, Zap } from 'lucide-react';

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 space-y-3">
      <p className="text-sm text-gray-300 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-[#10B981] transition-colors"
      >
        {copied ? (
          <>
            <Check size={14} />
            Copied!
          </>
        ) : (
          <>
            <Copy size={14} />
            Copy Prompt
          </>
        )}
      </button>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="font-semibold text-gray-100 text-sm">{question}</span>
        {open ? (
          <ChevronUp size={18} className="text-[#10B981]" />
        ) : (
          <ChevronDown size={18} className="text-gray-500" />
        )}
      </button>
      {open && <p className="mt-3 text-sm text-gray-400 leading-relaxed">{answer}</p>}
    </div>
  );
};

export default function AIProductivityPromptsPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI Productivity Prompts',
    description: 'Expert-curated AI prompts to boost your productivity, streamline workflows, and automate repetitive tasks. Get 30+ detailed prompts for task management, time optimization, and efficiency gains.',
    image: 'https://gptprompts.io/api/og?title=AI%20Productivity%20Prompts',
    datePublished: '2026-03-29',
    dateModified: '2026-03-29',
    author: {
      '@type': 'Organization',
      name: 'GPT Prompts',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can I use these productivity prompts with AI tools?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Copy any prompt from this page and paste it directly into your preferred AI assistant like ChatGPT, Claude, or Copilot. Each prompt is designed to work with most modern AI models for productivity and efficiency tasks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are these prompts suitable for all productivity challenges?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'These prompts cover a wide range of productivity scenarios including task prioritization, workflow optimization, meeting management, and burnout prevention. Review each section to find prompts matching your specific productivity needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I modify these prompts for my specific use case?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. These prompts are templates designed to be customized. Feel free to adjust roles, context, constraints, and desired outcomes to match your exact situation for better results.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get the best results from productivity prompts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For optimal results, provide specific details about your workflow, tools you use, and measurable goals. The more context and constraints you include, the more tailored and actionable the AI response will be.',
        },
      },
      {
        '@type': 'Question',
        name: 'What productivity tools integrate best with these prompts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'These prompts work seamlessly with automation tools like Make, Zapier, n8n, and workflow platforms like Notion, Asana, Monday.com, and ClickUp. You can also use them with spreadsheets and documentation platforms for task management.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I use productivity prompts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use these prompts whenever you face productivity challenges or want to optimize your workflow. They are especially valuable during planning cycles, when adopting new tools, or when looking to eliminate bottlenecks in your processes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can these prompts help with team productivity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, many of these prompts are designed for team contexts including meeting efficiency, delegation strategies, communication optimization, and cross-functional collaboration. Adapt them to your team size and structure.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I measure productivity improvements from using AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Track key metrics like time saved per task, number of tasks completed daily, meeting duration reduction, and task completion rate. Most of these prompts will help you establish baseline metrics and improvement tracking methods.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there industry-specific productivity prompts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'These prompts cover general productivity principles applicable across industries. The Task Management, Meeting Optimization, and Workflow sections are particularly adaptable to specific sectors like tech, marketing, operations, and sales.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best way to organize these prompts for my team?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Save frequently used prompts in a shared document, Notion database, or bookmark collection. Create categories matching your team workflow and include notes about which AI tool and which team member uses each prompt most often.',
        },
      },
    ],
  };

  const sections = [
    {
      id: 'task-management',
      title: 'Task Management & Prioritization',
      description: 'Organize, prioritize, and manage tasks effectively with AI assistance',
      icon: Zap,
      prompts: [
        'You are an expert project management assistant. Help me create a weekly priority matrix for these tasks: [list tasks]. Consider deadlines, impact, dependencies, and effort required. Provide a structured prioritization with reasoning and recommended time allocation.',
        'I need to break down this large project into manageable subtasks: [project description]. Create a detailed task breakdown with milestones, dependencies, and realistic time estimates. Include success criteria for each task and any potential blockers to anticipate.',
        'Act as my productivity coach. Analyze this task list and identify: (1) quick wins under 30 minutes, (2) high-impact tasks, (3) tasks that could be delegated or automated, (4) tasks that can be batched together. Provide a recommended daily schedule.',
        'Help me implement a task management system using [tool name]. I currently have [number] of tasks across [areas]. Design a system with categories, priority levels, status workflows, and review cadence that matches my team size and project complexity.',
        'Create a task backlog for my [role/team] covering the next quarter. Include: routine maintenance tasks, strategic initiatives, skill development activities, and buffer time for unexpected priorities. Organize by month and flag dependencies between tasks.',
        'I struggle with task overload. My current workload includes: [describe tasks]. Help me audit these tasks and recommend which to: delegate, defer, delete, or redesign. Include criteria for each category and implementation steps.',
      ],
    },
    {
      id: 'time-optimization',
      title: 'Time Optimization & Schedule Management',
      description: 'Maximize time effectiveness and reduce wasted hours',
      icon: Zap,
      prompts: [
        'Analyze my typical day: [describe schedule and activities]. Identify time wasters, context switches, and inefficiencies. Provide a redesigned schedule that blocks focus time, reduces interruptions, and builds in review and planning time.',
        'I have [number] of meetings scheduled this week. Help me evaluate which meetings are necessary, which could be async updates, and which should be consolidated. Provide agenda recommendations and decision-making criteria for each meeting.',
        'Create a deep work schedule for my team of [size]. We work on [type of work] and need sustained focus blocks. Design a system that: protects focus time, minimizes meetings, accommodates async collaboration, and includes review cycles.',
        'I spend too much time on email. My current process: [describe process]. Design an email management system with: time blocks, triage rules, response templates, and delegation guidelines. Include automation suggestions.',
        'Help me implement the Pomodoro technique for [specific work]. My typical tasks take [duration]. Design a customized interval system with: work blocks, break activities, weekly review structure, and productivity tracking.',
        'Audit my time allocation across: [list major work areas]. I currently spend [approximate hours] on each. What should my ideal allocation be to maximize impact? Provide a transition plan to shift from current to ideal state.',
      ],
    },
    {
      id: 'meeting-optimization',
      title: 'Meeting Efficiency & Communication',
      description: 'Run effective meetings and reduce communication overhead',
      icon: Zap,
      prompts: [
        'Design an efficient meeting system for my [team size] team. We need: daily sync-ups, weekly planning, one-on-ones, and client calls. Create agendas, time allocations, attendee lists, and decision-making frameworks for each meeting type.',
        'Create meeting agenda templates for these recurring meetings: [list meetings]. Include: time allocations, required decisions, participant roles, pre-work required, and follow-up actions to track.',
        'Help me implement async-first communication for my [distributed/co-located] team. We currently rely on: [describe current communication]. Propose: communication channels by use case, response time expectations, synchronous meeting criteria, and knowledge management systems.',
        'My meetings consistently run over time and lack clear decisions. Design a meeting excellence framework including: agenda structure, decision-making process, note-taking system, action item tracking, and accountability measures.',
        'Create a communication protocol for my team covering: [areas like standups, escalations, feedback, celebrations]. Include: preferred channels, response time expectations, escalation paths, and documentation requirements.',
        'I need to reduce meeting load. I currently have [number] of meetings weekly. Help me redesign this with: asynchronous alternatives, consolidated meetings, optional attendance criteria, and decision frameworks.',
      ],
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation & Process Improvement',
      description: 'Eliminate repetitive tasks and streamline processes',
      icon: Zap,
      prompts: [
        'Identify automation opportunities in my workflow. I currently handle: [describe processes and tools]. Recommend: (1) quick wins with no-code tools, (2) workflow integrations, (3) process redesigns, (4) implementation priority based on time savings and complexity.',
        'Design an automated workflow for [process]. I use these tools: [list tools]. Create: integration architecture, trigger points, conditional logic, error handling, and monitoring. Include implementation steps and success metrics.',
        'Create templates and standard operating procedures for these recurring tasks: [list tasks]. For each include: step-by-step instructions, decision trees, quality checks, estimated time, and automation potential.',
        'Help me audit and improve my [specific process]. Currently: [describe steps and pain points]. Redesign for: efficiency, consistency, quality, and scalability. Include technology recommendations and transition plan.',
        'I want to implement a content production pipeline. Current workflow: [describe process]. Design an optimized workflow including: content calendar, batch processing, approval workflows, distribution automation, and performance tracking.',
        'Create a customer-facing process automation system for [function]. I need to: [describe goals]. Design: user experience, backend workflows, integration points, error handling, and support escalation paths.',
      ],
    },
    {
      id: 'focus-and-wellbeing',
      title: 'Focus & Mental Wellbeing',
      description: 'Maintain focus, prevent burnout, and optimize work-life balance',
      icon: Zap,
      prompts: [
        'I struggle with focus and distractions. My main interruptions are: [list sources]. Design a personalized focus system including: environmental changes, technology setup, schedule adjustments, accountability measures, and recovery strategies.',
        'Create a burnout prevention plan for my [role]. I notice: [symptoms/warning signs]. Design: workload management, boundary setting, recovery time, support systems, and warning sign tracking to implement proactively.',
        'Help me design a sustainable work schedule. I currently work: [describe hours and pattern]. I want to: [goal]. Create a transition plan that improves [metric] while maintaining [constraints].',
        'My team shows signs of productivity decline. Current situation: [describe context]. Design an intervention including: workload assessment, work-life balance improvements, motivation strategies, and team wellbeing tracking.',
        'Create a personal operating system for maintaining energy throughout the day. I typically work [hours] with focus on: [work types]. Include: meal timing, movement, breaks, mental reset practices, and energy tracking.',
        'Design a weekly review and planning ritual for my team. This should: assess the past week, celebrate wins, identify learnings, plan next week, adjust priorities, and build in feedback. Include timing and facilitation guidelines.',
      ],
    },
  ];

  const faqs = [
    {
      question: 'How can I use these productivity prompts with AI tools?',
      answer: 'Copy any prompt from this page and paste it directly into your preferred AI assistant like ChatGPT, Claude, or Copilot. Each prompt is designed to work with most modern AI models for productivity and efficiency tasks.',
    },
    {
      question: 'Are these prompts suitable for all productivity challenges?',
      answer: 'These prompts cover a wide range of productivity scenarios including task prioritization, workflow optimization, meeting management, and burnout prevention. Review each section to find prompts matching your specific productivity needs.',
    },
    {
      question: 'Can I modify these prompts for my specific use case?',
      answer: 'Absolutely. These prompts are templates designed to be customized. Feel free to adjust roles, context, constraints, and desired outcomes to match your exact situation for better results.',
    },
    {
      question: 'How do I get the best results from productivity prompts?',
      answer: 'For optimal results, provide specific details about your workflow, tools you use, and measurable goals. The more context and constraints you include, the more tailored and actionable the AI response will be.',
    },
    {
      question: 'What productivity tools integrate best with these prompts?',
      answer: 'These prompts work seamlessly with automation tools like Make, Zapier, n8n, and workflow platforms like Notion, Asana, Monday.com, and ClickUp. You can also use them with spreadsheets and documentation platforms for task management.',
    },
    {
      question: 'How often should I use productivity prompts?',
      answer: 'Use these prompts whenever you face productivity challenges or want to optimize your workflow. They are especially valuable during planning cycles, when adopting new tools, or when looking to eliminate bottlenecks in your processes.',
    },
    {
      question: 'Can these prompts help with team productivity?',
      answer: 'Yes, many of these prompts are designed for team contexts including meeting efficiency, delegation strategies, communication optimization, and cross-functional collaboration. Adapt them to your team size and structure.',
    },
    {
      question: 'How do I measure productivity improvements from using AI?',
      answer: 'Track key metrics like time saved per task, number of tasks completed daily, meeting duration reduction, and task completion rate. Most of these prompts will help you establish baseline metrics and improvement tracking methods.',
    },
    {
      question: 'Are there industry-specific productivity prompts?',
      answer: 'These prompts cover general productivity principles applicable across industries. The Task Management, Meeting Optimization, and Workflow sections are particularly adaptable to specific sectors like tech, marketing, operations, and sales.',
    },
    {
      question: 'What is the best way to organize these prompts for my team?',
      answer: 'Save frequently used prompts in a shared document, Notion database, or bookmark collection. Create categories matching your team workflow and include notes about which AI tool and which team member uses each prompt most often.',
    },
  ];

  const relatedLinks = [
    { label: 'AI Chatbot Prompts', href: '/ai-chatbot-prompts' },
    { label: 'AI Search Engine Prompts', href: '/ai-search-engine-prompts' },
    { label: 'AI Text Generator Prompts', href: '/ai-text-generator-prompts' },
    { label: 'AI Prompts for Education', href: '/ai-prompts-for-education' },
    { label: 'AI Story Generator Prompts', href: '/ai-story-generator-prompts' },
    { label: 'AI Music Generator Prompts', href: '/ai-music-generator-prompts' },
    { label: 'Bing AI Image Generator Prompts', href: '/bing-ai-image-generator-prompts' },
    { label: 'Perchance AI Prompts', href: '/perchance-ai-prompts' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Zap className="text-[#10B981]" size={24} />
            <span className="inline-block bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-3 py-1 text-xs font-medium text-[#10B981]">
              30+ Prompts
            </span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight">
            AI Productivity <span className="text-[#10B981]">Prompts</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Expert-curated AI prompts to boost your productivity, streamline workflows, and automate repetitive tasks. Get detailed prompts for task management, time optimization, meeting efficiency, workflow automation, and sustainable work practices.
          </p>
          <div className="flex gap-4 flex-wrap pt-4">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-sm text-gray-400">
              5 Sections
            </div>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-sm text-gray-400">
              30 Detailed Prompts
            </div>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-sm text-gray-400">
              Copy to Clipboard
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {sections.map((section) => (
            <div key={section.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#10B981]/10 rounded-lg flex items-center justify-center">
                  <section.icon className="text-[#10B981]" size={20} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-100">{section.title}</h2>
                  <p className="text-sm text-gray-400">{section.description}</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {section.prompts.map((prompt, idx) => (
                  <CopyCard key={idx} prompt={prompt} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-100">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-100">Related Pages</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {relatedLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="group block bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-[#10B981] transition-colors"
              >
                <p className="text-sm font-medium text-gray-400 group-hover:text-[#10B981] transition-colors">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
