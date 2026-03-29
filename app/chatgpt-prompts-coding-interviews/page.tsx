'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

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
        className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors text-sm"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How can I use ChatGPT prompts to improve my coding interview performance?',
      answer: 'ChatGPT prompts work best for practice, explanation, and pattern learning. Use them to generate coding problems, understand algorithms, debug solutions, and learn from multiple approaches. However, always aim to understand the solutions rather than memorize them.',
    },
    {
      question: 'Should I use AI-generated code during live coding interviews?',
      answer: 'No. AI-generated code should only be used for learning and practice before interviews. During actual interviews, companies expect to see your own thinking process. Use AI tools to prepare, not to cheat.',
    },
    {
      question: 'What types of coding problems should I practice with ChatGPT prompts?',
      answer: 'Focus on arrays, strings, linked lists, binary trees, graphs, dynamic programming, and sorting algorithms. These are the most common in technical interviews. Start with easy problems, then progress to medium and hard.',
    },
    {
      question: 'How many prompts should I work through before an interview?',
      answer: 'Quality over quantity. Work through 10-15 different problem types thoroughly, understanding each solution fully. This is better than rushing through 50+ problems without deep understanding.',
    },
    {
      question: 'Can ChatGPT help me prepare for system design interviews?',
      answer: 'Yes, but with limitations. ChatGPT is excellent for learning system design concepts, explaining trade-offs, and discussing architecture patterns. However, practice with human feedback is essential for real interview readiness.',
    },
    {
      question: 'What should I do if I can\'t understand a ChatGPT-generated solution?',
      answer: 'Ask follow-up questions: "Explain step-by-step", "What is the time complexity?", "Can you optimize this?". Break the solution into smaller parts. If still unclear, search for alternative explanations or video tutorials on the same topic.',
    },
    {
      question: 'Are there coding languages that ChatGPT handles better than others?',
      answer: 'ChatGPT performs well across Python, JavaScript, Java, C++, and Go. Python tends to produce cleaner, more readable solutions. Choose based on what your target companies use or what you\'re most comfortable with.',
    },
    {
      question: 'How should I structure my interview prep using these prompts?',
      answer: 'Week 1: Easy problems in fundamentals. Week 2: Medium problems in data structures. Week 3: Hard problems and optimization. Week 4: Behavioral prep and mock interviews. Adjust based on interview date.',
    },
    {
      question: 'Can I use these prompts to prepare for both behavioral and technical interviews?',
      answer: 'Yes. While these prompts focus on technical coding, you can ask ChatGPT for help with behavioral questions, resume feedback, and interview strategy. Combine technical and behavioral prep for best results.',
    },
    {
      question: 'What\'s the best way to track my progress through these prompts?',
      answer: 'Keep a problem log: date, problem type, first attempt status, final status, and key learnings. Review your logs weekly to identify weak areas. This helps you focus study time effectively.',
    },
  ];

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full bg-gray-900 px-4 py-3 text-left hover:bg-gray-800 transition-colors flex items-center justify-between"
          >
            <span className="font-semibold text-gray-100">{faq.question}</span>
            <span className="text-amber-500 text-xl">{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="bg-gray-950 px-4 py-3 border-t border-gray-700">
              <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function CodingInterviewPromptsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '60+ Best ChatGPT Prompts for Coding Interview Prep (2026)',
    description: 'The complete collection of ChatGPT prompts to master coding interviews. Practice algorithms, data structures, and problem-solving with AI-generated problems.',
    datePublished: '2026-03-29',
    image: 'https://gptprompts.ai/og-coding-interviews.jpg',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can I use ChatGPT prompts to improve my coding interview performance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ChatGPT prompts work best for practice, explanation, and pattern learning. Use them to generate coding problems, understand algorithms, debug solutions, and learn from multiple approaches.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I use AI-generated code during live coding interviews?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. AI-generated code should only be used for learning and practice before interviews. During actual interviews, companies expect to see your own thinking process.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of coding problems should I practice with ChatGPT prompts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Focus on arrays, strings, linked lists, binary trees, graphs, dynamic programming, and sorting algorithms. These are the most common in technical interviews.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many prompts should I work through before an interview?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Quality over quantity. Work through 10-15 different problem types thoroughly, understanding each solution fully.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can ChatGPT help me prepare for system design interviews?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, but with limitations. ChatGPT is excellent for learning system design concepts, explaining trade-offs, and discussing architecture patterns.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-50">60+ Best ChatGPT Prompts for Coding Interview Prep (2026)</h1>
          <p className="text-xl text-gray-400 mb-6">Master algorithms, data structures, and problem-solving with the most effective ChatGPT prompts for technical interview preparation.</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>Published: March 29, 2026</span>
            <span>Updated: March 29, 2026</span>
            <span>Read time: 12 minutes</span>
          </div>
        </div>

        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-50 border-b border-amber-500 pb-3">
              1. Algorithm Complexity & Optimization
            </h2>
            <div className="space-y-4">
              <CopyCard prompt="Explain Big O notation with real-world examples. Then analyze the time and space complexity of this solution: [paste your code]. How would you optimize it?" />
              <CopyCard prompt="Generate 3 different approaches to solve the Two Sum problem. Explain the trade-offs between each approach in terms of time complexity, space complexity, and readability." />
              <CopyCard prompt="I have a solution with O(n^2) time complexity. Help me optimize it to O(n log n). Walk me through the thought process step-by-step." />
              <CopyCard prompt="Write a detailed explanation of dynamic programming using the Fibonacci sequence. Then create a more complex DP problem similar in difficulty to LeetCode medium problems." />
              <CopyCard prompt="Compare recursive and iterative approaches to solving tree problems. When should I use each approach in a coding interview?" />
              <CopyCard prompt="Create a challenging algorithm problem that combines arrays, sorting, and two pointers. Provide the optimal solution with full explanation." />
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-50 border-b border-amber-500 pb-3">
              2. Data Structures Deep Dive
            </h2>
            <div className="space-y-4">
              <CopyCard prompt="Explain binary search trees, AVL trees, and red-black trees. When would I choose each in a production system? Create an interview question about tree balancing." />
              <CopyCard prompt="Design a LRU (Least Recently Used) cache from scratch. Explain the data structures needed and write the implementation with full walkthrough." />
              <CopyCard prompt="Compare hash tables, arrays, and linked lists. Create an interview question that tests understanding of which data structure to use in different scenarios." />
              <CopyCard prompt="Explain graph representations: adjacency list vs adjacency matrix. When should I use each? Create a medium-difficulty graph problem." />
              <CopyCard prompt="Walk me through implementing a trie data structure. Then create 5 problems that use tries and explain how a trie makes each one efficient." />
              <CopyCard prompt="Design a system that uses heaps, queues, and stacks together. Provide a real-world scenario and explain why each data structure is necessary." />
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-50 border-b border-amber-500 pb-3">
              3. Coding Patterns & Problem-Solving
            </h2>
            <div className="space-y-4">
              <CopyCard prompt="Explain sliding window technique with 3 progressively harder problems. Show how to identify when sliding window applies." />
              <CopyCard prompt="Create 4 different two-pointer problems with solutions. Explain the pattern and when it applies to interview questions." />
              <CopyCard prompt="Teach me backtracking with 5 problems ranging from easy to hard. Include permutations, combinations, and constraint-based problems." />
              <CopyCard prompt="Explain the divide-and-conquer approach with merge sort and quicksort. When should I use each? Create an original divide-and-conquer problem." />
              <CopyCard prompt="Give me 6 graph problems that test DFS and BFS. Explain when to use each and how to implement both recursively and iteratively." />
              <CopyCard prompt="Create a matrix interview problem that requires finding connected components. Provide the solution with explanation of the algorithm." />
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-50 border-b border-amber-500 pb-3">
              4. Mock Interview & Practice
            </h2>
            <div className="space-y-4">
              <CopyCard prompt="Create a full mock coding interview with 3 progressively harder problems. Include time limits and constraints for each problem." />
              <CopyCard prompt="Give me a hard LeetCode-style problem on dynamic programming. Don't just give the solution - guide me through how to approach it step-by-step." />
              <CopyCard prompt="I solved this problem incorrectly. Help me debug it: [paste code]. Explain what went wrong and how to think about it differently." />
              <CopyCard prompt="Create a system design problem suitable for a coding interview. Ask clarifying questions, then discuss trade-offs of different architectures." />
              <CopyCard prompt="Test me on data structures and algorithms. Give me 5 quick questions with increasing difficulty. After I answer, provide detailed explanations." />
              <CopyCard prompt="I have 45 minutes to solve a problem I haven't seen before. Coach me on the approach before you give the solution." />
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-50 border-b border-amber-500 pb-3">
              5. Interview Strategy & Communication
            </h2>
            <div className="space-y-4">
              <CopyCard prompt="How should I structure my approach when I see a new coding interview problem? Walk me through the exact steps and what I should communicate to the interviewer." />
              <CopyCard prompt="What should I do if I get stuck on a coding interview problem? Give me strategies for asking for help effectively without appearing unprepared." />
              <CopyCard prompt="How do I explain my thought process while coding? Give me a framework and an example of excellent communication during a coding interview." />
              <CopyCard prompt="Create 5 follow-up questions that show I'm thinking deeply about problems: edge cases, optimizations, variations, real-world applications." />
              <CopyCard prompt="What should I do after I finish a coding interview problem? What follow-ups should I suggest to the interviewer?" />
              <CopyCard prompt="I solved the problem correctly but the interviewer asked 'Can you optimize this?' How do I approach optimization discussions in real interviews?" />
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mt-16 pt-12 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-gray-50">Frequently Asked Questions</h2>
          <FAQAccordion />
        </section>

        {/* Related Pages */}
        <section className="mt-16 pt-12 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-gray-50">Related Prompt Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/ai-prompts-notion/" className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-amber-500 transition-colors">
              <h3 className="font-semibold text-amber-500 mb-2">AI Prompts for Notion Workspace Optimization</h3>
              <p className="text-gray-400 text-sm">Organize your workspace and automate tasks with AI.</p>
            </a>
            <a href="/chatgpt-prompts-powerpoint/" className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-amber-500 transition-colors">
              <h3 className="font-semibold text-amber-500 mb-2">ChatGPT Prompts for PowerPoint Presentations</h3>
              <p className="text-gray-400 text-sm">Create professional presentations faster with AI guidance.</p>
            </a>
            <a href="/ai-prompts-supply-chain/" className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-amber-500 transition-colors">
              <h3 className="font-semibold text-amber-500 mb-2">AI Prompts for Supply Chain Management</h3>
              <p className="text-gray-400 text-sm">Optimize logistics and supply chain operations with AI.</p>
            </a>
            <a href="/manus-ai-prompts/" className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-amber-500 transition-colors">
              <h3 className="font-semibold text-amber-500 mb-2">Manus AI Prompts for Autonomous Tasks</h3>
              <p className="text-gray-400 text-sm">Complete complex tasks autonomously using AI agents.</p>
            </a>
            <a href="/prompts/machine-learning" className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-amber-500 transition-colors">
              <h3 className="font-semibold text-amber-500 mb-2">Machine Learning Interview Prompts</h3>
              <p className="text-gray-400 text-sm">Prepare for ML engineer interviews with targeted prompts.</p>
            </a>
            <a href="/prompts/system-design" className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-amber-500 transition-colors">
              <h3 className="font-semibold text-amber-500 mb-2">System Design Interview Prompts</h3>
              <p className="text-gray-400 text-sm">Master system design with real-world interview scenarios.</p>
            </a>
            <a href="/prompts/behavioral-interviews" className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-amber-500 transition-colors">
              <h3 className="font-semibold text-amber-500 mb-2">Behavioral Interview Prompts</h3>
              <p className="text-gray-400 text-sm">Prepare for behavioral rounds with STAR method guidance.</p>
            </a>
            <a href="/prompts/technical-writing" className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-amber-500 transition-colors">
              <h3 className="font-semibold text-amber-500 mb-2">Technical Writing Prompts</h3>
              <p className="text-gray-400 text-sm">Communicate technical concepts clearly and effectively.</p>
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 pt-12 border-t border-gray-800">
          <div className="bg-gray-900 border border-amber-500 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-50">Ready to Master Coding Interviews?</h3>
            <p className="text-gray-300 mb-6">Start with these prompts today and combine them with consistent practice for interview success.</p>
            <button className="bg-amber-500 text-gray-950 font-semibold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors">
              Browse All Prompt Collections
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
