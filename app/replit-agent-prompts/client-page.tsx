'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Copy, Check, ChevronDown } from 'lucide-react';

const accentColor = '#F97316';

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#F97316]/50 transition">
      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-[#F97316] hover:text-[#F97316]/80 transition text-sm"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What is Replit Agent and how does it differ from other coding assistants?',
      a: 'Replit Agent is an advanced AI coding assistant integrated directly into the Replit IDE that helps developers write, debug, and refactor code in real-time. Unlike standalone coding assistants, Replit Agent understands your entire project context, environment, and dependencies, allowing it to generate code that works immediately within your Replit workspace. It excels at understanding multi-file projects, suggesting architectural improvements, and handling complex debugging scenarios across different programming languages and frameworks.'
    },
    {
      q: 'Can I use Replit Agent for production code and commercial projects?',
      a: 'Yes, code generated with Replit Agent can be used for commercial and production projects. However, you should review Replit\'s terms of service and any licensing agreements associated with your subscription tier. Generally, code you write and generate within Replit remains yours to use commercially, but it\'s important to understand the terms specific to your Replit plan, especially regarding code ownership and intellectual property rights.'
    },
    {
      q: 'What programming languages and frameworks does Replit Agent support?',
      a: 'Replit Agent supports virtually all major programming languages including Python, JavaScript, TypeScript, Java, C++, Go, Rust, PHP, Ruby, and many others. It\'s particularly strong with modern frameworks like React, Next.js, Express, Django, FastAPI, Spring Boot, and Vue. The agent understands ecosystem-specific tools like npm, pip, Maven, and Cargo, making it effective at scaffolding projects, managing dependencies, and following language-specific best practices and conventions.'
    },
    {
      q: 'How does Replit Agent understand my project structure and dependencies?',
      a: 'Replit Agent has access to your entire project files, package manifests (package.json, requirements.txt, etc.), and the Replit environment configuration. It analyzes your project structure, existing code patterns, installed libraries, and development setup to generate contextually appropriate code suggestions. This deep project awareness allows it to propose changes that integrate seamlessly with your existing codebase rather than generating generic solutions that require modification.'
    },
    {
      q: 'Can Replit Agent help with debugging complex issues across multiple files?',
      a: 'Yes, Replit Agent excels at debugging multi-file projects. You can describe a bug or unexpected behavior, and the agent can examine related files, trace execution paths, and suggest fixes that account for interactions between different parts of your codebase. It can identify issues in database queries, API endpoints, frontend components, and business logic that span multiple files, making it particularly valuable for debugging architectural problems rather than simple syntax errors.'
    },
    {
      q: 'How does Replit Agent handle architectural decisions and code structure suggestions?',
      a: 'Replit Agent can suggest improvements to project architecture, recommend design patterns appropriate for your tech stack, and propose structural refactoring to improve scalability and maintainability. It understands architectural concerns like separation of concerns, dependency injection, middleware patterns, and database schema design. You can ask it to evaluate your current structure and suggest improvements, making it useful for both greenfield projects and legacy code modernization.'
    },
    {
      q: 'Can Replit Agent generate tests and help with test-driven development?',
      a: 'Yes, Replit Agent can generate unit tests, integration tests, and end-to-end tests across multiple testing frameworks like Jest, Pytest, Mocha, and others. It understands test-driven development practices and can help you write tests before implementation or generate comprehensive test suites for existing code. The agent recognizes your testing setup and generates tests that integrate with your existing test configuration and CI/CD pipeline.'
    },
    {
      q: 'What are the best practices for writing effective prompts for Replit Agent?',
      a: 'Effective Replit Agent prompts should be specific about the problem, context, and expected outcome. Instead of "fix this code," try "I have a race condition in my concurrent queue implementation that causes occasional data loss. The queue processes items across three workers. How do I ensure thread-safe operations?" Include relevant code context, error messages if applicable, and your constraints (performance requirements, compatibility needs, etc.). The agent performs best when you explain the "why" behind your request, not just the "what."'
    },
    {
      q: 'Can Replit Agent help me learn programming concepts while it generates code?',
      a: 'Yes, Replit Agent can explain code as it generates it, breaking down complex logic into understandable concepts. You can ask it to implement a solution and explain each step, making it effective for learning. It can teach you design patterns, best practices, and language-specific idioms while solving your immediate coding problems. Many developers use Replit Agent as both a productivity tool and a continuous learning resource.'
    },
    {
      q: 'How does Replit Agent handle security, API keys, and sensitive data in code?',
      a: 'Replit Agent is aware of security best practices and will suggest proper secret management approaches. However, you should never include actual API keys, passwords, or sensitive credentials in prompts or code that you share. Use environment variables, .env files, and Replit\'s secrets management features. The agent can help you implement secure patterns like OAuth flows, encryption, input validation, and secure API design, but the responsibility for keeping secrets secure ultimately lies with you.'
    },
    {
      q: 'What subscription tier or plan do I need to access Replit Agent?',
      a: 'Replit Agent is available as an integrated feature within Replit\'s paid plans. Access and usage may vary depending on your subscription tier, with higher tiers typically offering more agent interactions and advanced features. Check your current Replit subscription settings or upgrade path to ensure you have access. If you\'re on a free tier, you may have limited access or need to upgrade to unlock full agent capabilities and usage quotas.'
    }
  ];

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <button
          key={idx}
          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#F97316]/50 transition text-left"
        >
          <div className="flex justify-between items-start gap-4">
            <h3 className="font-semibold text-white pr-4">{faq.q}</h3>
            <ChevronDown
              size={20}
              className={`text-[#F97316] flex-shrink-0 transition ${openIndex === idx ? 'rotate-180' : ''}`}
            />
          </div>
          {openIndex === idx && (
            <p className="text-gray-300 text-sm mt-3 leading-relaxed">{faq.a}</p>
          )}
        </button>
      ))}
    </div>
  );
};

export default function ReplitAgentPromptsPage() {
  const prompts = {
    fullStackDevelopment: [
      'Build a complete task management application with a Node.js Express backend, React frontend with TypeScript, PostgreSQL database, and JWT authentication. Include user registration, task CRUD operations, task filtering by status, due dates, and priority levels. Implement real-time updates using WebSocket connections. Add error handling, input validation on both frontend and backend, password hashing, and CORS security. Structure the project with separate client and server folders, environment-based configuration, and database migrations.',
      'Create a full-stack e-commerce platform with Next.js for the frontend, a Node.js/Express API backend, MongoDB for product and user data, and Stripe integration for payments. Build product listing pages with filtering and search, user authentication with email verification, shopping cart functionality, order management, and admin dashboard for inventory. Include responsive Tailwind CSS styling, form validation, error boundaries in React, rate limiting on API endpoints, and comprehensive error handling throughout.',
      'Develop a collaborative note-taking application using React for the UI, Node.js/Express backend, PostgreSQL for data persistence, and Socket.io for real-time collaboration. Implement user authentication, notebook creation and sharing, rich text editing with formatting support, real-time synchronization across multiple users, permission levels (view, edit, admin), undo/redo functionality, and automatic conflict resolution for concurrent edits. Add markdown support and export to PDF feature.'
    ],
    apiDevelopment: [
      'Design and implement a RESTful API for a weather application using Node.js/Express that fetches real-time data from OpenWeatherMap API, caches responses using Redis for 30 minutes, implements rate limiting of 100 requests per hour per IP, includes comprehensive error handling with specific HTTP status codes, validates input parameters, and returns structured JSON responses. Add request logging, request ID tracking for debugging, pagination support for historical data, and API documentation using Swagger/OpenAPI specifications.',
      'Build a GraphQL API using Apollo Server that manages a social networking platform. Include queries for fetching user profiles, posts, comments, and followers. Implement mutations for creating posts, adding comments, following users, and updating profiles. Add authentication using JWT tokens, authorization checks for user-specific data, subscription support for real-time post updates, input validation and sanitization, error handling with meaningful messages, and performance optimization with DataLoader for batch loading related data.',
      'Create a microservices API architecture with three independent services: User Service (authentication and profile management), Product Service (catalog and inventory), and Order Service (order processing and tracking). Each service should have its own Express API, database, and environment configuration. Implement service-to-service communication using HTTP or message queues, API Gateway routing, centralized logging, distributed tracing for debugging, and comprehensive error handling across all services with appropriate fallback mechanisms.'
    ],
    databaseDesign: [
      'Design a database schema for a multi-tenant SaaS application using PostgreSQL. Create tables for organizations, users (with roles), projects, tasks with dependencies, time tracking, and audit logs. Implement proper relationships, foreign keys, and constraints. Use Row-Level Security (RLS) to ensure data isolation between tenants. Create indexes on frequently queried columns, partition large tables by date, and design for scalability. Include migration scripts for schema versioning and provide documentation of relationships, constraints, and performance considerations.',
      'Build a normalized database schema for an e-learning platform with students, instructors, courses, lessons, quizzes, and user progress tracking. Include enrollment management, grading systems, and reporting capabilities. Design for handling thousands of concurrent students accessing course materials. Implement efficient querying for progress dashboards, create views for common reports, optimize for read-heavy operations, use appropriate data types to minimize storage, and plan for backup and recovery strategies.',
      'Create a NoSQL MongoDB schema design for a real-time analytics dashboard platform. Structure collections for events, user sessions, metrics, and aggregated data. Implement TTL (time-to-live) indexes for automatic cleanup of old data, use denormalization strategically for fast queries, design for sharding across multiple servers, and optimize for high-volume inserts and complex aggregation pipeline queries. Include examples of batch processing jobs that transform raw events into insights and handle different data retention policies.'
    ],
    debuggingTroubleshooting: [
      'Debug a Node.js application that has memory leaks causing crashes after 24 hours of operation. The application handles WebSocket connections for real-time data. Help identify the source of memory growth, provide tools and techniques for profiling (heap snapshots, clinic.js), and implement proper cleanup of event listeners and connection timeouts. Include code to log memory usage, identify circular references, and add garbage collection hints. Provide monitoring setup to catch similar issues in production.',
      'Troubleshoot a React frontend that renders slowly and has janky animations despite no CPU-intensive operations. The component tree has deeply nested state updates and unnecessary re-renders. Provide debugging strategies using React DevTools Profiler, identify performance bottlenecks, suggest fixes like useMemo and useCallback, implement code splitting, and add performance monitoring. Explain render batching, concurrent features, and how to measure and optimize performance with Lighthouse.',
      'Diagnose a critical production issue where API requests randomly return 502 Gateway Errors under load. Help identify whether the issue is in the Node.js application (memory leaks, hanging connections, process crashes), the database (connection pool exhaustion, slow queries), or the infrastructure (load balancer, network issues). Provide diagnostic queries, logging setup to capture errors, stress testing commands, and step-by-step troubleshooting methodology to isolate the root cause and implement fixes.'
    ]
  };

  const allPrompts = [
    ...prompts.fullStackDevelopment,
    ...prompts.apiDevelopment,
    ...prompts.databaseDesign,
    ...prompts.debuggingTroubleshooting
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Replit Agent Prompts: Full-Stack Development, APIs, Databases, and Debugging',
    description: 'Discover effective prompts for Replit Agent. Learn techniques for full-stack development, API design, database architecture, and debugging complex issues across your entire codebase.',
    author: {
      '@type': 'Organization',
      name: 'GPTPrompts.AI'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Replit Agent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Replit Agent is an advanced AI coding assistant integrated into the Replit IDE that helps developers write, debug, and refactor code with full project context understanding.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use Replit Agent for production code?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, code generated with Replit Agent can be used for commercial and production projects subject to Replit\'s terms of service.'
        }
      }
    ]
  };

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-b border-[#333] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block bg-[#F97316]/10 border border-[#F97316]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#F97316] text-sm font-medium">AI Coding Agent</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">Replit Agent Prompts</h1>
          <p className="text-xl text-gray-300 mb-6">Master full-stack development, API design, database architecture, and debugging with expertly crafted Replit Agent prompts. Build production-ready applications with AI-assisted coding that understands your entire project context.</p>
          <div className="flex flex-wrap gap-3">
            {['Full-Stack Development', 'API Design', 'Database Architecture', 'Debugging'].map((tag) => (
              <span key={tag} className="bg-[#333] text-gray-300 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#F97316] rounded"></span>
            Full-Stack Development Prompts
          </h2>
          <p className="text-gray-300 mb-8">Build complete applications from database to frontend with AI assistance. These prompts guide Replit Agent through full-stack architecture decisions, framework selection, and implementation of complex multi-tier systems.</p>
          <div className="space-y-4">
            {prompts.fullStackDevelopment.map((prompt, idx) => (
              <CopyCard key={idx} prompt={prompt} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#F97316] rounded"></span>
            API Development Prompts
          </h2>
          <p className="text-gray-300 mb-8">Design and implement scalable APIs with proper authentication, validation, and error handling. These prompts help you create RESTful and GraphQL APIs that integrate seamlessly with your application ecosystem.</p>
          <div className="space-y-4">
            {prompts.apiDevelopment.map((prompt, idx) => (
              <CopyCard key={idx} prompt={prompt} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#F97316] rounded"></span>
            Database Design Prompts
          </h2>
          <p className="text-gray-300 mb-8">Plan and optimize database schemas for your application needs. These prompts guide Replit Agent through designing normalized schemas, planning for scale, and implementing performance optimizations.</p>
          <div className="space-y-4">
            {prompts.databaseDesign.map((prompt, idx) => (
              <CopyCard key={idx} prompt={prompt} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#F97316] rounded"></span>
            Debugging and Troubleshooting Prompts
          </h2>
          <p className="text-gray-300 mb-8">Diagnose and fix complex issues across your entire codebase. These prompts leverage Replit Agent\'s project context awareness to identify bottlenecks, memory leaks, and architectural problems with precision.</p>
          <div className="space-y-4">
            {prompts.debuggingTroubleshooting.map((prompt, idx) => (
              <CopyCard key={idx} prompt={prompt} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] border-y border-[#333] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <FAQ />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Related AI Coding Tools</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { href: '/claude-prompts', label: 'Claude Prompts' },
            { href: '/gpt-4-prompts', label: 'GPT-4 Prompts' },
            { href: '/github-copilot-prompts', label: 'GitHub Copilot Prompts' },
            { href: '/code-generator-prompts', label: 'Code Generator Prompts' },
            { href: '/javascript-prompts', label: 'JavaScript Prompts' },
            { href: '/python-prompts', label: 'Python Prompts' },
            { href: '/react-prompts', label: 'React Prompts' },
            { href: '/nextjs-prompts', label: 'Next.js Prompts' }
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#F97316]/50 transition"
            >
              <span className="text-[#F97316] hover:text-[#F97316]/80 transition">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
