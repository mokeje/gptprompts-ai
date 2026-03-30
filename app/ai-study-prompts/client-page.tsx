'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Copy, ChevronDown, ChevronUp } from 'lucide-react';
const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-5 hover:border-teal-500/50 transition-colors">
      <p className="text-slate-300 text-sm leading-relaxed mb-4">{prompt}</p>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-400 text-sm font-medium transition-colors"
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied
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
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-slate-700 py-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full text-left hover:text-teal-400 transition-colors"
      >
        <h3 className="font-semibold text-slate-100">{question}</h3>
        {expanded ? (
          <ChevronUp size={20} className="text-teal-500" />
        ) : (
          <ChevronDown size={20} className="text-teal-500" />
        )}
      </button>
      {expanded && (
        <p className="text-slate-400 text-sm mt-3 leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

export default function StudyPromptsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
      {/* Hero Section */}
      <section className="border-b border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-teal-500/20 border border-teal-500/50 rounded-full px-3 py-1 text-sm font-medium text-teal-300 mb-4">
            Study & Learning
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-50">
            AI Study Prompts
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            30+ ChatGPT prompts to master exam preparation, note-taking, active recall, comprehension techniques, and study planning. Improve learning outcomes with AI.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section 1: Exam Preparation & Revision */}
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-6">
              Exam Preparation & Revision
            </h2>
            <div className="grid gap-4">
              <CopyCard prompt="Create a comprehensive study guide for [subject] covering the main concepts, definitions, and key formulas. Format it for rapid revision with memory anchors." />
              <CopyCard prompt="Generate 20 practice exam questions for [topic] with answer explanations. Include both multiple choice and short-answer formats." />
              <CopyCard prompt="Create a revision checklist for [subject] by topic, marking which areas I need to focus on most. Prioritize by exam difficulty." />
              <CopyCard prompt="Design a last-minute cramming schedule for [subject] covering the most important 20% of content. Allocate time by topic difficulty." />
              <CopyCard prompt="Analyze past exam papers for [subject] and identify recurring question patterns. Predict likely questions for the upcoming exam." />
              <CopyCard prompt="Create a mind map for [topic] showing how concepts connect. Include real-world examples and memory hooks." />
            </div>
          </div>

          {/* Section 2: Note-Taking & Organization */}
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-6">
              Note-Taking & Organization
            </h2>
            <div className="grid gap-4">
              <CopyCard prompt="Convert my lecture notes on [topic] into Cornell Notes format with summary and review questions." />
              <CopyCard prompt="Create a digital note template for [subject] that captures key concepts, examples, and connections between topics." />
              <CopyCard prompt="Organize scattered notes on [topic] into a logical structure. Identify gaps and suggest what&apos;s missing." />
              <CopyCard prompt="Transform my raw notes into flashcard questions for active recall practice on [subject]." />
              <CopyCard prompt="Create a visual summary of [topic] using text-based formatting. Include hierarchies, relationships, and key takeaways." />
              <CopyCard prompt="Design a note-taking system for [subject] that balances comprehensiveness with speed. Include templates I can use daily." />
            </div>
          </div>

          {/* Section 3: Active Recall & Spaced Repetition */}
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-6">
              Active Recall & Spaced Repetition
            </h2>
            <div className="grid gap-4">
              <CopyCard prompt="Generate difficult retrieval practice questions on [topic] to test my understanding. Include Bloom&apos;s higher-order thinking levels." />
              <CopyCard prompt="Create a 30-day spaced repetition schedule for [subject]. Tell me what to review each day to optimize retention." />
              <CopyCard prompt="Design a self-testing system for [topic] using the Leitner method. Provide sample questions for each difficulty level." />
              <CopyCard prompt="Generate elaboration prompts for [concept] to help me explain it in my own words and connect it to other ideas." />
              <CopyCard prompt="Create a quiz on [topic] that progressively increases in difficulty. Include hints and explanations for each answer." />
              <CopyCard prompt="Design a weekly review routine for [subject]. Tell me what techniques to use each day for maximum retention." />
            </div>
          </div>

          {/* Section 4: Comprehension & Learning Strategies */}
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-6">
              Comprehension & Learning Strategies
            </h2>
            <div className="grid gap-4">
              <CopyCard prompt="Explain [complex concept] using analogies, real-world examples, and simple language. Build up complexity gradually." />
              <CopyCard prompt="Break down [topic] into bite-sized learning chunks. Create a learning pathway from foundational to advanced concepts." />
              <CopyCard prompt="Identify common misconceptions about [subject] and explain the correct understanding. Include examples that highlight the differences." />
              <CopyCard prompt="Create a tutorial on [skill] using the Feynman Technique. Assume I have zero prior knowledge." />
              <CopyCard prompt="Design a multimodal learning plan for [topic] combining reading, visual learning, hands-on practice, and teaching others." />
              <CopyCard prompt="Generate discussion questions for [concept] that deepen understanding and encourage critical thinking." />
            </div>
          </div>

          {/* Section 5: Study Planning & Time Management */}
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-6">
              Study Planning & Time Management
            </h2>
            <div className="grid gap-4">
              <CopyCard prompt="Create a 12-week study schedule for [subject] that prepares me for the exam. Include milestones and progress checkpoints." />
              <CopyCard prompt="Design a daily study routine for [subject] that fits into my schedule. Allocate time for learning, review, and practice." />
              <CopyCard prompt="Analyze my current study habits and suggest improvements for [subject]. Identify time-wasting patterns and solutions." />
              <CopyCard prompt="Create a study group agenda for [topic]. Include discussion questions, practice problems, and teaching activities." />
              <CopyCard prompt="Design a balanced study plan for [subjects] that prevents burnout. Include breaks, variety, and motivation tactics." />
              <CopyCard prompt="Generate accountability checkpoints for my [subject] study plan. Tell me how to measure progress and adjust as needed." />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-100 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            <FAQItem
              question="How should I balance active recall with reviewing my notes?"
              answer="Use the 80/20 rule: spend 80% of study time on active recall (testing yourself, flashcards, practice problems) and 20% on reviewing notes. This maximizes retention and prevents passive reading."
            />
            <FAQItem
              question="Can AI really help me study more effectively?"
              answer="Yes. AI can generate personalized practice questions, create multiple explanations of concepts, organize notes, design study schedules, and provide instant feedback—all tailored to your learning style and pace."
            />
            <FAQItem
              question="How long before an exam should I start studying?"
              answer="Ideally, start 4-8 weeks before the exam, depending on complexity. This allows for spaced repetition and prevents cramming. Use the first weeks for learning, middle weeks for practice, and final weeks for review."
            />
            <FAQItem
              question="What's the best way to tackle subjects I find difficult?"
              answer="Break them into smaller concepts, start with foundational ideas, use analogies and real-world examples, and teach the material to someone else. Combine multiple learning modalities (visual, written, verbal) for better retention."
            />
            <FAQItem
              question="How can I avoid procrastination on studying?"
              answer="Use the Pomodoro Technique (25-minute focused sessions), set specific daily study goals, create a dedicated study space, and use AI-generated accountability checkpoints to track progress."
            />
            <FAQItem
              question="Should I study alone or in a group?"
              answer="Mix both. Study alone for focused learning and retrieval practice. Study in groups for explaining concepts, discussing misconceptions, and staying motivated. Alternate based on your learning goals."
            />
            <FAQItem
              question="How do I review effectively without wasting time?"
              answer="Use spaced repetition (review at increasing intervals), focus on weak areas first, use active recall instead of passive re-reading, and spend 80% of time on testing yourself rather than reviewing."
            />
            <FAQItem
              question="Can AI generate exam-style practice questions?"
              answer="Absolutely. AI can create questions matching your exam format, difficulty level, and syllabus. It can also provide detailed explanations and identify knowledge gaps based on your performance."
            />
            <FAQItem
              question="How should I organize my study materials for maximum retention?"
              answer="Use a hierarchical structure: subject > topics > subtopics > concepts. Link related ideas, use color coding or tags, include memory hooks, and maintain a central index for quick navigation."
            />
            <FAQItem
              question="What's the ideal study session length to maintain focus?"
              answer="Most people focus best for 25-45 minute sessions with 5-10 minute breaks. After 2-3 sessions, take a longer 15-30 minute break. Adjust based on your attention span and the difficulty of material."
            />
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-100 mb-8">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/ai-translation-prompts"
              className="p-4 border border-slate-700 rounded-lg hover:border-teal-500/50 transition-colors"
            >
              <p className="font-semibold text-slate-100">Translation Prompts</p>
              <p className="text-sm text-slate-400">Master language translation with AI</p>
            </Link>
            <Link
              href="/ai-web-builder-prompts"
              className="p-4 border border-slate-700 rounded-lg hover:border-teal-500/50 transition-colors"
            >
              <p className="font-semibold text-slate-100">Web Builder Prompts</p>
              <p className="text-sm text-slate-400">Create websites with AI guidance</p>
            </Link>
            <Link
              href="/ai-writing-assistant-prompts"
              className="p-4 border border-slate-700 rounded-lg hover:border-teal-500/50 transition-colors"
            >
              <p className="font-semibold text-slate-100">Writing Assistant Prompts</p>
              <p className="text-sm text-slate-400">Improve your writing with AI</p>
            </Link>
            <Link
              href="/ai-music-prompts"
              className="p-4 border border-slate-700 rounded-lg hover:border-teal-500/50 transition-colors"
            >
              <p className="font-semibold text-slate-100">Music Prompts</p>
              <p className="text-sm text-slate-400">Create music with AI tools</p>
            </Link>
            <Link
              href="/ai-gaming-prompts"
              className="p-4 border border-slate-700 rounded-lg hover:border-teal-500/50 transition-colors"
            >
              <p className="font-semibold text-slate-100">Gaming Prompts</p>
              <p className="text-sm text-slate-400">Level up gaming with AI</p>
            </Link>
            <Link
              href="/ai-research-assistant-prompts"
              className="p-4 border border-slate-700 rounded-lg hover:border-teal-500/50 transition-colors"
            >
              <p className="font-semibold text-slate-100">Research Assistant Prompts</p>
              <p className="text-sm text-slate-400">Master research with AI</p>
            </Link>
            <Link
              href="/ai-poem-generator-prompts"
              className="p-4 border border-slate-700 rounded-lg hover:border-teal-500/50 transition-colors"
            >
              <p className="font-semibold text-slate-100">Poem Generator Prompts</p>
              <p className="text-sm text-slate-400">Write poetry with AI</p>
            </Link>
            <Link
              href="/ai-free-art-prompts"
              className="p-4 border border-slate-700 rounded-lg hover:border-teal-500/50 transition-colors"
            >
              <p className="font-semibold text-slate-100">Free Art Prompts</p>
              <p className="text-sm text-slate-400">Create art with AI</p>
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Study Prompts',
            description: '30+ ChatGPT prompts to master exam preparation, note-taking, active recall, comprehension techniques, and study planning.',
            datePublished: '2026-03-29',
            dateModified: '2026-03-29',
            author: {
              '@type': 'Organization',
              name: 'GPT Prompts',
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
                name: 'How should I balance active recall with reviewing my notes?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use the 80/20 rule: spend 80% of study time on active recall (testing yourself, flashcards, practice problems) and 20% on reviewing notes.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI really help me study more effectively?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. AI can generate personalized practice questions, create multiple explanations of concepts, organize notes, design study schedules, and provide instant feedback.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long before an exam should I start studying?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ideally, start 4-8 weeks before the exam, depending on complexity. This allows for spaced repetition and prevents cramming.',
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
