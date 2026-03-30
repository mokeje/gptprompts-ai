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
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-[#F97316] transition-colors">
      <p className="text-gray-300 text-sm mb-3">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-xs font-medium text-[#F97316] hover:text-[#FB923C] transition-colors"
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
              className={`text-[#F97316] flex-shrink-0 transition-transform ${
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

export default function AIPromptsForDevelopers() {
  const faqs = [
    {
      q: 'What types of code can AI generate?',
      a: 'AI can generate code across most programming languages including JavaScript, Python, Go, Rust, Java, C++, and more. It can create functions, classes, complete applications, tests, documentation, and even help refactor existing code.'
    },
    {
      q: 'How can AI help with debugging?',
      a: 'AI can analyze error messages, review code logic, identify potential bugs, suggest fixes, and explain why issues occur. It&apos;s particularly effective at finding common mistakes and edge cases developers might miss.'
    },
    {
      q: 'Can AI assist with API development?',
      a: 'Yes, AI can help design REST and GraphQL APIs, generate endpoint documentation, create request/response schemas, build API client libraries, and implement authentication and rate limiting strategies.'
    },
    {
      q: 'Is AI useful for writing tests?',
      a: 'Absolutely. AI can generate unit tests, integration tests, and end-to-end tests; create test fixtures and mock data; suggest test cases based on code analysis; and help improve test coverage.'
    },
    {
      q: 'How can AI improve code quality?',
      a: 'AI can review code for best practices, suggest performance optimizations, identify security vulnerabilities, enforce naming conventions, recommend design patterns, and help reduce technical debt.'
    },
    {
      q: 'Can AI help with system design and architecture?',
      a: 'Yes, AI can help design system architecture, create database schemas, suggest scalable patterns, design microservices structures, and provide deployment strategies for different application types.'
    },
    {
      q: 'What about documentation and comments?',
      a: 'AI excels at generating code documentation, writing clear comments, creating README files, building API documentation, and producing architecture diagrams and explanation documents.'
    },
    {
      q: 'Can AI assist with database development?',
      a: 'AI can help design database schemas, generate complex SQL queries, optimize database performance, create data migration scripts, and suggest indexing strategies for improved query efficiency.'
    },
    {
      q: 'How useful is AI for DevOps and deployment?',
      a: 'AI can help create CI/CD pipelines, write Infrastructure-as-Code (Terraform, CloudFormation), generate Docker configurations, create deployment scripts, and suggest cloud architecture patterns.'
    },
    {
      q: 'Can AI help learn new programming languages?',
      a: 'Yes, AI can teach syntax, explain concepts, provide code examples, help with language-specific patterns, and speed up the learning curve when transitioning to new languages.'
    },
    {
      q: 'Is AI effective for code refactoring?',
      a: 'Absolutely. AI can identify refactoring opportunities, suggest cleaner code patterns, help eliminate code duplication, improve readability, and modernize legacy codebases.'
    },
    {
      q: 'How does AI handle security in code?',
      a: 'AI can identify common security vulnerabilities, suggest secure coding practices, help implement authentication/authorization, review security implications of code changes, and provide compliance guidance.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">AI Prompts for Developers</h1>
          <p className="text-gray-400">
            Accelerate your development workflow with AI-powered code generation, debugging, and architecture assistance. Get prompts for full-stack development, system design, testing, deployment, and optimization.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* Section 1: Code Generation & Refactoring */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#F97316]">Code Generation & Refactoring</h2>
            <p className="text-gray-400">
              Generate, optimize, and refactor code across any programming language with AI assistance.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Full-Stack CRUD Application"
              prompt="Generate a complete CRUD application using Next.js for the frontend and Express.js with MongoDB for the backend. Include user authentication with JWT, input validation, error handling, and a responsive UI with Tailwind CSS. Provide the complete code structure with all necessary files."
            />
            <CopyCard
              title="Code Refactoring Review"
              prompt="Review this React component code for performance issues, accessibility problems, and best practices. Suggest specific refactoring steps including hooks optimization, component splitting, and state management improvements. Explain why each change improves the code."
            />
            <CopyCard
              title="API Endpoint Implementation"
              prompt="Generate RESTful API endpoints for a user management system using Python FastAPI. Include POST for user creation, GET for retrieval, PUT for updates, and DELETE for removal. Add input validation using Pydantic, proper error handling, and request/response documentation."
            />
          </div>
        </section>

        {/* Section 2: Debugging & Problem Solving */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#F97316]">Debugging & Problem Solving</h2>
            <p className="text-gray-400">
              Identify and fix bugs faster with AI-powered debugging assistance.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Error Analysis"
              prompt="I&apos;m getting this error: [INSERT ERROR MESSAGE]. The code attempts to [DESCRIBE WHAT YOU&apos;RE TRYING TO DO]. Analyze the error message, explain what caused it, provide a corrected code snippet, and explain how to prevent this error in the future."
            />
            <CopyCard
              title="Performance Bottleneck Investigation"
              prompt="My application is running slowly. The main operation processes [DESCRIBE OPERATION]. Here&apos;s the relevant code: [PASTE CODE]. Identify performance bottlenecks, suggest optimization strategies, provide optimized code, and explain the performance improvements expected."
            />
            <CopyCard
              title="Memory Leak Detection"
              prompt="I suspect a memory leak in my [FRAMEWORK/LANGUAGE] application. The memory usage increases over time when [DESCRIBE BEHAVIOR]. Analyze this code for potential memory leaks, suggest debugging approaches, recommend fixes, and provide best practices to prevent leaks."
            />
          </div>
        </section>

        {/* Section 3: Testing & Quality Assurance */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#F97316]">Testing & Quality Assurance</h2>
            <p className="text-gray-400">
              Write comprehensive tests and improve code quality with AI-driven testing strategies.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Unit Test Generation"
              prompt="Generate comprehensive unit tests using Jest for this function: [PASTE FUNCTION]. Cover all code paths, edge cases, error conditions, and normal scenarios. Include test setup/teardown, mocking where necessary, and assertion explanations."
            />
            <CopyCard
              title="Integration Test Design"
              prompt="Design integration tests for this API endpoint using [TEST FRAMEWORK]. The endpoint: [DESCRIBE ENDPOINT]. Include tests for successful requests, validation errors, authentication failures, database operations, and external API calls. Provide test code and test data."
            />
            <CopyCard
              title="E2E Test Automation"
              prompt="Create end-to-end tests using Cypress for this user workflow: [DESCRIBE WORKFLOW]. Include page navigation, form filling, validation, error handling, and success verification. Provide Page Object Model setup and organized test structure."
            />
          </div>
        </section>

        {/* Section 4: System Design & Architecture */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#F97316]">System Design & Architecture</h2>
            <p className="text-gray-400">
              Design scalable systems and make architectural decisions with confidence.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Microservices Architecture Design"
              prompt="Design a microservices architecture for an e-commerce platform handling: [LIST FEATURES]. Define service boundaries, communication patterns (sync/async), database strategy, API gateway design, authentication approach, and deployment considerations. Include a system diagram description."
            />
            <CopyCard
              title="Database Schema Design"
              prompt="Design a database schema for [DESCRIBE APPLICATION]. Include: entity definitions, relationships, indexing strategy, normalization decisions, and performance considerations. Provide SQL DDL statements and explain your design choices including scalability implications."
            />
            <CopyCard
              title="Infrastructure as Code Setup"
              prompt="Create Terraform infrastructure code for deploying a [DESCRIBE APPLICATION] on AWS. Include VPC configuration, load balancer, RDS database, S3 buckets, IAM roles, and auto-scaling groups. Organize code with modules and include variables and outputs."
            />
          </div>
        </section>

        {/* Section 5: Documentation & Knowledge Transfer */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#F97316]">Documentation & Knowledge Transfer</h2>
            <p className="text-gray-400">
              Generate comprehensive documentation and accelerate team knowledge sharing.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="API Documentation Generation"
              prompt="Generate OpenAPI/Swagger documentation for this API: [DESCRIBE API ENDPOINTS]. For each endpoint, include method, path, description, parameters, request/response schemas, error codes, and authentication requirements. Format as valid OpenAPI 3.0 specification."
            />
            <CopyCard
              title="Architecture Decision Record"
              prompt="Write an Architecture Decision Record (ADR) for this decision: [DESCRIBE DECISION]. Include status, context, decision, consequences (positive and negative), alternatives considered, and lessons learned. Format for team documentation."
            />
            <CopyCard
              title="Code Documentation & Comments"
              prompt="Generate comprehensive documentation and inline comments for this function/class: [PASTE CODE]. Include JSDoc/docstring format, parameter descriptions, return value documentation, usage examples, and inline comments explaining complex logic."
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-[#F97316]">Frequently Asked Questions</h2>
          <FAQ faqs={faqs} />
        </section>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'AI Prompts for Developers',
              description: 'Accelerate your development workflow with AI-powered code generation, debugging, and architecture assistance. Get prompts for full-stack development, system design, testing, deployment, and optimization.',
              image: 'https://gptprompts.ai/developer-prompts.png',
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
            <a href="/ai-prompts-for-marketers" className="text-[#F97316] hover:text-[#FB923C] text-sm font-medium">
              Marketer Prompts
            </a>
            <a href="/ai-prompts-for-data-analysts" className="text-[#F97316] hover:text-[#FB923C] text-sm font-medium">
              Data Analyst Prompts
            </a>
            <a href="/napkin-ai-prompts" className="text-[#F97316] hover:text-[#FB923C] text-sm font-medium">
              Napkin AI Prompts
            </a>
            <a href="/" className="text-[#F97316] hover:text-[#FB923C] text-sm font-medium">
              All Prompts
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
