'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Code2, BookOpen, Zap, Bug, Lightbulb, Rocket } from 'lucide-react';

const accent = '#238636';

interface CopyCardProps {
  prompt: string;
}

function CopyCard({ prompt }: CopyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-4 p-4 border rounded-lg border-[#2a2a2a] hover:border-[#238636] transition-colors bg-[#1a1a1a]">
      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors"
        style={{
          color: copied ? '#238636' : '#888',
          borderColor: copied ? '#238636' : '#444',
          border: '1px solid',
        }}
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied!
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy
          </>
        )}
      </button>
    </div>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  item: FAQItem;
}

function FAQ({ item }: FAQProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-4 border border-[#2a2a2a] rounded-lg overflow-hidden hover:border-[#238636] transition-colors">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between bg-[#1a1a1a] hover:bg-[#252525] transition-colors"
      >
        <h3 className="font-semibold text-white text-left">{item.question}</h3>
        {expanded ? (
          <ChevronUp size={20} style={{ color: '#238636' }} className="flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="flex-shrink-0 text-gray-400" />
        )}
      </button>
      {expanded && (
        <div className="p-4 bg-[#0a0a0a] border-t border-[#2a2a2a] text-gray-300 text-sm leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

const faqItems: FAQItem[] = [
  {
    question: 'What is GitHub Copilot and how does it differ from other AI coding assistants?',
    answer: 'GitHub Copilot is an AI pair programmer developed by GitHub in collaboration with OpenAI. It integrates directly into your IDE (VS Code, JetBrains, etc.) and provides real-time code suggestions as you type. Unlike some alternatives, Copilot learns from your codebase context and can understand your coding patterns and conventions. It&apos;s trained on publicly available code, so it excels at generating conventional patterns and APIs you&apos;re already using.',
  },
  {
    question: 'How does GitHub Copilot understand my project context?',
    answer: 'Copilot analyzes your open files, recent edits, and cursor position to understand context. It can reference function definitions, imports, and surrounding code to generate relevant suggestions. For more complex understanding, you can use comments to guide the AI—a well-written comment describing what you want often results in better suggestions than relying on context alone.',
  },
  {
    question: 'When should I use Copilot&apos;s inline suggestions versus Copilot Chat?',
    answer: 'Use inline suggestions for quick code generation as you type—perfect for boilerplate, function implementations, and quick fixes. Use Copilot Chat for higher-level discussions: explaining code, refactoring strategies, debugging complex issues, or asking how to implement a feature. Chat is more conversational and better for iterative problem-solving, while inline suggestions are faster for tactical coding tasks.',
  },
  {
    question: 'How can I improve the quality of Copilot&apos;s suggestions?',
    answer: 'Write clear, descriptive comments before the code you want generated. Include function names, parameter names, and type hints—these all provide context. Keep your codebase consistent in style and naming conventions; Copilot learns from patterns it sees. Review suggestions carefully; they&apos;re starting points, not always perfect solutions. Using TypeScript instead of JavaScript also improves suggestion quality due to type information.',
  },
  {
    question: 'Can Copilot handle multi-file context and dependencies?',
    answer: 'Copilot can understand imports and references across your open files, making it better at handling multi-file dependencies than some alternatives. However, it has limits—for very large codebases or complex architectural changes, explicit comments and clear naming conventions help. Close unused files to reduce noise and improve focus on relevant context.',
  },
  {
    question: 'What are the keyboard shortcuts for maximum Copilot productivity?',
    answer: 'In VS Code: Tab to accept a full suggestion, Ctrl+Enter (Cmd+Enter on Mac) to open Copilot Chat, Alt+] to see next suggestion, Alt+[ for previous suggestion, and Ctrl+Shift+A for accessibility mode. Learning these shortcuts dramatically improves workflow speed. You can also configure custom keybindings to match your preferences.',
  },
  {
    question: 'How good is Copilot at refactoring legacy code?',
    answer: 'Copilot is excellent at refactoring when given clear instructions. Use comments like "Refactor this to use async/await" or "Convert this class component to functional React." It can handle pattern conversions, modernization, and style improvements. For large refactors, break them into smaller chunks—refactoring an entire 500-line file at once is less reliable than refactoring 50 lines multiple times.',
  },
  {
    question: 'Can Copilot help me debug and find bugs in my code?',
    answer: 'Yes—paste an error message and surrounding code into Copilot Chat with "What&apos;s wrong with this code?" or "How do I fix this error?" Copilot excels at analyzing error messages and suggesting fixes. It can also help spot logical errors and suggest edge cases you might have missed. Use inline suggestions to quickly add defensive checks or error handling.',
  },
  {
    question: 'How does Copilot integrate with Git workflows?',
    answer: 'Copilot can generate commit messages, help write clear PR descriptions, and assist with merge conflict resolution. Some IDE extensions add Git-aware features. You can also use Copilot Chat to help explain changes, review diffs, or understand why certain code exists—useful when navigating legacy repositories.',
  },
  {
    question: 'Is Copilot good at learning new frameworks and languages?',
    answer: 'Copilot excels here—when learning a new framework or language, write comments describing what you want to achieve. Copilot will generate idiomatic code following that framework&apos;s conventions. Its suggestions improve as it sees your project patterns. Use Copilot Chat to ask "How do I do X in Y framework?" for structured explanations.',
  },
  {
    question: 'How can I use Copilot for test generation and quality assurance?',
    answer: 'Write a test function signature and describe what you&apos;re testing in a comment—Copilot generates test cases. It&apos;s particularly strong at unit tests and integration tests. For more complex test scenarios, use Copilot Chat to discuss test strategy. Always review generated tests; they&apos;re starting points that may need adjustment for your specific assertions and edge cases.',
  },
  {
    question: 'What should I know about Copilot&apos;s performance, costs, and limitations?',
    answer: 'Copilot is available as a free tier (limited suggestions) and a paid subscription. Performance is excellent—suggestions appear in real-time. Limitations: it can suggest outdated patterns, doesn&apos;t always understand very recent APIs, and may struggle with highly domain-specific code. It&apos;s not suitable for security-critical code without review. Always verify suggestions, especially for production systems.',
  },
];

export default function GitHubCopilotPromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'GitHub Copilot Prompts & Best Practices',
            description: 'Master GitHub Copilot with expert prompts, techniques, and best practices for code generation, debugging, testing, and pair programming.',
            image: 'https://gptprompts.ai/github-copilot-og.jpg',
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
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="border-b border-[#2a2a2a] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Code2 size={32} style={{ color: '#238636' }} />
            <h1 className="text-4xl font-bold text-white">GitHub Copilot Prompts</h1>
          </div>
          <p className="text-gray-400 text-lg mb-4">
            Expert prompts and techniques for pair programming with GitHub&apos;s AI coding assistant. Learn to generate code faster, debug smarter, and build better with Copilot.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-sm font-medium border" style={{ borderColor: '#238636', color: '#238636' }}>
              Code Generation
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium border" style={{ borderColor: '#238636', color: '#238636' }}>
              Pair Programming
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium border" style={{ borderColor: '#238636', color: '#238636' }}>
              AI Coding Assistant
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Code Generation & Completion */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Code2 size={28} style={{ color: '#238636' }} />
            <h2 className="text-2xl font-bold text-white">Code Generation & Completion</h2>
          </div>
          <CopyCard prompt="Generate a React component that displays a list of users with filtering and sorting capabilities. Include TypeScript types and proper error handling." />
          <CopyCard prompt="Write a utility function that converts a JavaScript object to query parameters. Handle nested objects, arrays, and special characters. Include unit tests." />
          <CopyCard prompt="Create a custom React hook for managing form state with validation, error tracking, and submit handling. Include TypeScript interfaces." />
        </section>

        {/* Code Explanation & Documentation */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={28} style={{ color: '#238636' }} />
            <h2 className="text-2xl font-bold text-white">Code Explanation & Documentation</h2>
          </div>
          <CopyCard prompt="Explain this algorithm step-by-step, including time and space complexity analysis. Suggest optimizations and edge cases." />
          <CopyCard prompt="Generate comprehensive JSDoc comments for this function, including parameter descriptions, return types, and usage examples." />
          <CopyCard prompt="Write detailed API documentation for this endpoint, including request/response examples, error codes, and authentication requirements." />
        </section>

        {/* Refactoring & Optimization */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Zap size={28} style={{ color: '#238636' }} />
            <h2 className="text-2xl font-bold text-white">Refactoring & Optimization</h2>
          </div>
          <CopyCard prompt="Refactor this code to use async/await instead of promise chains. Improve error handling with try-catch blocks." />
          <CopyCard prompt="Optimize this database query. Look for N+1 problems, missing indexes, and inefficient joins. Suggest index strategies." />
          <CopyCard prompt="Convert this class component to a functional React component using hooks. Migrate lifecycle methods to useEffect and extract custom hooks." />
        </section>

        {/* Debugging & Problem-Solving */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Bug size={28} style={{ color: '#238636' }} />
            <h2 className="text-2xl font-bold text-white">Debugging & Problem-Solving</h2>
          </div>
          <CopyCard prompt="I&apos;m getting this error: [paste error]. Here&apos;s the relevant code: [paste code]. What&apos;s wrong and how do I fix it?" />
          <CopyCard prompt="This function is returning unexpected values in these scenarios: [describe scenarios]. Debug it and suggest edge cases I should handle." />
          <CopyCard prompt="This test is failing with: [paste test output]. Help me understand why and write the correct assertion or fix the code." />
        </section>

        {/* Architecture & Design Patterns */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb size={28} style={{ color: '#238636' }} />
            <h2 className="text-2xl font-bold text-white">Architecture & Design Patterns</h2>
          </div>
          <CopyCard prompt="Design the architecture for a [feature description]. What components, services, and data flows would you use? Suggest design patterns." />
          <CopyCard prompt="How should I apply the [design pattern name] to solve this problem: [describe problem]. Show code examples and explain the benefits." />
          <CopyCard prompt="Review this component structure for [specific purpose]. Suggest improvements for maintainability, testability, and performance." />
        </section>

        {/* Testing & Quality Assurance */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Rocket size={28} style={{ color: '#238636' }} />
            <h2 className="text-2xl font-bold text-white">Testing & Quality Assurance</h2>
          </div>
          <CopyCard prompt="Generate unit tests for this function. Cover happy path, edge cases, error scenarios, and boundary conditions using Jest/Vitest." />
          <CopyCard prompt="Write integration tests for this API endpoint. Test success, error handling, authentication, and data validation scenarios." />
          <CopyCard prompt="Create end-to-end tests for this user flow: [describe flow]. Use Cypress or Playwright to test across different browsers and viewport sizes." />
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <FAQ key={index} item={item} />
            ))}
          </div>
        </section>

        {/* Related Pages */}
        <section className="border-t border-[#2a2a2a] pt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Related Prompts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'ChatGPT Prompts', href: '/chatgpt-prompts' },
              { name: 'Cursor AI Prompts', href: '/cursor-ai-prompts' },
              { name: 'Claude Prompts', href: '/claude-prompts' },
              { name: 'Grok AI Prompts', href: '/grok-ai-prompts' },
              { name: 'Google Gemini Prompts', href: '/google-gemini-prompts' },
              { name: 'Perplexity AI Prompts', href: '/perplexity-ai-prompts' },
              { name: 'ChatGPT Image Generation', href: '/chatgpt-image-generation' },
              { name: 'Midjourney Prompts', href: '/midjourney-prompts' },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-3 rounded border border-[#2a2a2a] text-gray-300 hover:border-[#238636] hover:text-[#238636] transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
