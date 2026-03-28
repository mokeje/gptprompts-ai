'use client';

import Link from 'next/link';
import { useState } from 'react';

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-[#10A37F] transition-colors">
      <p className="text-gray-300 text-sm mb-3 line-clamp-3">{prompt}</p>
      <button
        onClick={handleCopy}
        className="w-full bg-[#10A37F] hover:bg-[#0D8A6F] text-white font-semibold py-2 px-3 rounded transition-colors text-sm"
      >
        {copied ? '✓ Copied' : 'Copy Prompt'}
      </button>
    </div>
  );
};

const Accordion = ({ items }: { items: Array<{ q: string; a: string }> }) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={idx} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full flex justify-between items-center p-4 hover:bg-gray-800 transition-colors text-left"
          >
            <span className="text-gray-200 font-semibold text-sm">{item.q}</span>
            <span className={`text-[#10A37F] transition-transform ${open === idx ? 'rotate-180' : ''}`}>▼</span>
          </button>
          {open === idx && (
            <div className="bg-gray-800 p-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function OpenAICodexPromptsPage() {
  const faqItems = [
    {
      q: 'What is OpenAI Codex?',
      a: 'OpenAI Codex is a specialized AI model trained on code from the internet and available through the OpenAI API. It powers GitHub Copilot and can understand and generate code in dozens of programming languages with strong performance.'
    },
    {
      q: 'How do I use these prompts with Codex?',
      a: 'You can use these prompts directly with the OpenAI API by sending them as requests to Codex. Copy a prompt and include it in your API call to get code completions, function generation, or query optimization.'
    },
    {
      q: 'What programming languages does Codex support?',
      a: 'Codex supports Python, JavaScript, TypeScript, Go, Ruby, SQL, Rust, PHP, C++, C#, and many more languages. It performs exceptionally well on Python and JavaScript-based tasks.'
    },
    {
      q: 'Can I use Codex for production code generation?',
      a: 'While Codex is powerful, generated code should always be reviewed and tested before production use. Use it to accelerate development, but apply proper testing, security audits, and code reviews.'
    },
    {
      q: 'How do I optimize prompts for better code output?',
      a: 'Include context like language, framework, and requirements. Be specific about function signatures, parameters, and expected behavior. Provide examples if possible. Clearer prompts yield better code suggestions.'
    },
    {
      q: 'Does Codex understand comments in code?',
      a: 'Yes, Codex uses comments as context to understand intent. Well-written comments explaining what you want to accomplish significantly improve code generation quality.'
    },
    {
      q: 'What are the API rate limits for Codex?',
      a: 'Rate limits depend on your OpenAI plan. Free tier users have lower limits, while paid accounts get higher throughput. Check your OpenAI dashboard for your specific limits.'
    },
    {
      q: 'Can Codex refactor or optimize existing code?',
      a: 'Yes. You can provide existing code with prompts asking for optimization, refactoring, or conversion to other languages. Codex excels at understanding and transforming code.'
    },
    {
      q: 'Is Codex suitable for debugging?',
      a: 'Codex can help identify issues and suggest fixes, but it&apos;s not a replacement for proper debugging. Use it alongside debuggers and testing frameworks for best results.'
    },
    {
      q: 'How often are Codex models updated?',
      a: 'OpenAI regularly updates Codex models with improvements to accuracy and capability. Check the OpenAI blog and documentation for the latest model versions and improvements.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '100+ OpenAI Codex Prompts for Code Generation',
            description: 'Comprehensive collection of OpenAI Codex prompts for Python, JavaScript, SQL, and API development. Boost your coding productivity.',
            author: { '@type': 'Organization', name: 'GPT Prompts' },
            datePublished: '2025-01-15',
            image: 'https://gptprompts.ai/og-image.jpg'
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a }
            }))
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-white">100+ OpenAI Codex Prompts</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Master code generation with curated prompts for Python functions, JavaScript completion, SQL queries, API development, and testing.
          </p>
        </div>

        {/* Python Function Generation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#10A37F]">Python Function Generation</h2>
          <p className="text-gray-400 mb-8">Generate complete Python functions with proper error handling and documentation</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Generate a Python function that validates email addresses using regex and returns True/False. Include docstring and error handling." />
            <CopyCard prompt="Write a Python function that recursively calculates factorial with memoization. Include input validation and unit tests." />
            <CopyCard prompt="Create a Python async function that fetches data from multiple URLs concurrently and aggregates results. Include timeout handling." />
            <CopyCard prompt="Generate a Python function that parses JSON data, flattens nested structures, and returns a flat dictionary with dot notation keys." />
            <CopyCard prompt="Write a Python function for pagination that takes a list and page size, returns paginated results with total pages and current page info." />
            <CopyCard prompt="Create a Python function that implements binary search on a sorted list and returns both the index and the number of comparisons made." />
          </div>
        </div>

        {/* JavaScript/TypeScript Code Completion */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#10A37F]">JavaScript/TypeScript Code Completion</h2>
          <p className="text-gray-400 mb-8">Complete and generate JavaScript and TypeScript code snippets</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Generate a TypeScript React hook for managing form state with validation. Include error messages and reset functionality." />
            <CopyCard prompt="Write a JavaScript debounce function with optional options parameter for max wait time and leading/trailing execution." />
            <CopyCard prompt="Create a TypeScript class for managing API requests with retry logic, timeout handling, and request/response logging." />
            <CopyCard prompt="Generate a JavaScript function that converts Markdown text to HTML with support for headers, bold, italic, links, and code blocks." />
            <CopyCard prompt="Write a TypeScript utility for managing local storage with encryption, type safety, and automatic serialization/deserialization." />
            <CopyCard prompt="Generate a JavaScript function that groups array items by a property value and returns an object with counts for each group." />
          </div>
        </div>

        {/* SQL Query Optimization */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#10A37F]">SQL Query Optimization</h2>
          <p className="text-gray-400 mb-8">Optimize and generate efficient SQL queries</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Write an optimized SQL query that finds users with the highest average purchase amount using window functions and CTEs." />
            <CopyCard prompt="Generate a SQL query that calculates monthly revenue with year-over-year comparison using CASE statements and window functions." />
            <CopyCard prompt="Create a SQL query that identifies duplicate records across multiple columns with their count and frequency ranking." />
            <CopyCard prompt="Write a SQL query that implements pagination with proper sorting, handles NULL values, and includes total count without subqueries." />
            <CopyCard prompt="Generate a SQL query that finds customers who haven&apos;t purchased in 90 days with their last purchase date and total spent." />
            <CopyCard prompt="Create an optimized SQL query that performs a complex join across 4 tables with proper indexing hints and execution plan." />
          </div>
        </div>

        {/* API Endpoint Development */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#10A37F]">API Endpoint Development</h2>
          <p className="text-gray-400 mb-8">Generate complete API endpoints with validation and error handling</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Generate a Node.js Express endpoint for user registration with email validation, password hashing, and database insertion." />
            <CopyCard prompt="Write a FastAPI endpoint for file upload with file type validation, size limits, and virus scanning integration." />
            <CopyCard prompt="Create a Flask API endpoint that implements JWT authentication, role-based access control, and request rate limiting." />
            <CopyCard prompt="Generate a Node.js endpoint that implements pagination, filtering, sorting, and search functionality for a product list." />
            <CopyCard prompt="Write a REST API endpoint that processes webhook data, validates signatures, stores events, and retries failed processing." />
            <CopyCard prompt="Create a GraphQL resolver for fetching user data with nested relationships, caching, and N+1 query prevention." />
          </div>
        </div>

        {/* Testing & Quality Assurance */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-[#10A37F]">Testing & Quality Assurance</h2>
          <p className="text-gray-400 mb-8">Generate comprehensive tests and QA code</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CopyCard prompt="Generate comprehensive Jest test cases for a user authentication module covering success, failure, and edge cases." />
            <CopyCard prompt="Write pytest test cases for a function that processes CSV files, including file validation and error handling scenarios." />
            <CopyCard prompt="Create Cypress end-to-end tests for a multi-step checkout flow including form validation, payment, and confirmation." />
            <CopyCard prompt="Generate unit tests using Mocha and Chai for an API client that handles retries, timeouts, and various response codes." />
            <CopyCard prompt="Write integration tests for a database migration system that verifies schema changes, rollback capability, and data integrity." />
            <CopyCard prompt="Create performance tests using k6 that simulate load on an API endpoint and measure response times under different concurrency levels." />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-16 border border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-[#10A37F]">Frequently Asked Questions</h2>
          <Accordion items={faqItems} />
        </div>

        {/* Related Pages */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-white">Explore More Prompt Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/sora-prompts" className="group bg-gray-800 p-6 rounded-lg hover:border-[#FF4500] border border-gray-700 transition-all">
              <h3 className="text-lg font-bold text-white group-hover:text-[#FF4500] transition-colors mb-2">Sora Prompts</h3>
              <p className="text-gray-400 text-sm">Video generation prompts for cinematic and creative content</p>
            </Link>
            <Link href="/ai-agent-prompts" className="group bg-gray-800 p-6 rounded-lg hover:border-[#8B5CF6] border border-gray-700 transition-all">
              <h3 className="text-lg font-bold text-white group-hover:text-[#8B5CF6] transition-colors mb-2">AI Agent Prompts</h3>
              <p className="text-gray-400 text-sm">Prompts for autonomous AI agents and intelligent systems</p>
            </Link>
            <Link href="/gemini-advanced-prompts" className="group bg-gray-800 p-6 rounded-lg hover:border-[#4285F4] border border-gray-700 transition-all">
              <h3 className="text-lg font-bold text-white group-hover:text-[#4285F4] transition-colors mb-2">Gemini Advanced</h3>
              <p className="text-gray-400 text-sm">Advanced prompts for Google&apos;s Gemini model</p>
            </Link>
            <Link href="/ai-prompts-email-writing" className="group bg-gray-800 p-6 rounded-lg hover:border-[#EA4335] border border-gray-700 transition-all">
              <h3 className="text-lg font-bold text-white group-hover:text-[#EA4335] transition-colors mb-2">Email Writing</h3>
              <p className="text-gray-400 text-sm">Prompts for crafting professional and engaging emails</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
