'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Copy, BookMarked, ChevronDown } from 'lucide-react';

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-colors">
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors"
      >
        {copied ? (
          <>
            <Check size={16} className="text-green-400" />
            Copied
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

const FAQCollapse = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-900/50 transition-colors text-left"
      >
        <span className="font-medium text-gray-100">{question}</span>
        <ChevronDown
          size={20}
          className={`text-purple-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-900/30 border-t border-gray-800">
          <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function TeachersEducatorsPromptsPage() {
  const prompts = {
    lessonPlanning: [
      "Create a detailed lesson plan for teaching [TOPIC] to [GRADE_LEVEL] students. Include: learning objectives aligned to [CURRICULUM_STANDARD], a 45-minute timeline with activities, materials needed, formative assessment checkpoints, and differentiation strategies for struggling and advanced learners. Add discussion questions and real-world connections.",
      "Generate [NUMBER] creative assignment ideas for [SUBJECT] that teach [CONCEPT]. Each assignment should: require critical thinking, offer multiple pathways to completion, include a rubric, provide scaffolding for different ability levels, and connect to student interests in [STUDENT_INTERESTS]. Rank by engagement potential.",
      "I'm teaching [TOPIC] to students who struggle with [LEARNING_CHALLENGE]. Design a 3-week unit that builds understanding progressively. Include: pre-assessment questions, chunked daily lessons (10-15 minutes each), hands-on activities, visual supports, and guided practice. How do I know when they're ready to move on?",
      "Create an interdisciplinary unit connecting [SUBJECT_1] and [SUBJECT_2] around the essential question: [QUESTION]. Include: lesson outlines for both subjects, collaborative activities, cross-curricular connections, student-facing learning outcomes, and how to assess understanding across both disciplines."
    ],
    assessmentCreation: [
      "Design a [TYPE: formative/summative] assessment for [TOPIC] that measures [LEARNING_OBJECTIVE]. Include: [NUMBER] questions that progress from recall to application/analysis, clear success criteria, a scoring rubric with descriptors, accommodations for students with [SPECIFIC_NEEDS], and a key with explanations for answer choices.",
      "Create [NUMBER] open-ended discussion prompts for assessing student understanding of [CONCEPT]. Each prompt should: encourage higher-order thinking (analysis, synthesis, evaluation), reveal common misconceptions, be culturally responsive, work for both in-class and remote settings, and include follow-up probes to deepen thinking.",
      "Design a performance-based assessment where students demonstrate mastery of [SKILL] through [PROJECT_TYPE]. Include: clear task description, step-by-step instructions, expectations for each grade level ([GRADES]), a detailed rubric with weighted criteria, checkpoints for progress monitoring, and examples of exemplary work.",
      "Build a diagnostic assessment to identify student misconceptions about [TOPIC]. Include: multiple-choice questions targeting common errors, short-answer items, visual representations, and follow-up interview questions. How should I analyze results to inform my instruction?"
    ],
    studentFeedback: [
      "Create a system for providing meaningful, actionable feedback on [ASSIGNMENT_TYPE] that takes no more than [TIME] per student. Include: a feedback template, sentence stems for different scenarios, strategies for balancing praise with growth areas, how to make feedback specific and timely, and how to involve students in peer feedback.",
      "Design a self-assessment and reflection tool for [GRADE_LEVEL] students to use after [ACTIVITY/PROJECT]. Include: guiding questions aligned to learning objectives, a scale or rubric they can use to evaluate themselves, prompts for identifying strengths and areas for improvement, goal-setting opportunities, and how to use this for future learning.",
      "Develop a student-led conference structure where [GRADE_LEVEL] students present their learning, progress, and goals to parents. Include: what students should prepare, guiding questions for self-reflection, a portfolio organization system, conversation starters for parents, and how to make it inclusive for students with varying confidence levels.",
      "Create a feedback loop system that shows students how their work improves over time. Include: how to collect and organize evidence of growth, how to help students recognize their own progress, ways to celebrate improvements, how to adjust instruction based on feedback data, and strategies for students who aren't seeing growth."
    ],
    differentiatedLearning: [
      "Design a [TOPIC] lesson with three tiered learning pathways for students at [LOW/MIDDLE/HIGH] readiness levels. For each tier, include: specific learning objectives, appropriate complexity of tasks, scaffolds or extensions needed, assessment strategies, and how students move between tiers. How do I keep the core concept the same?",
      "Create a station rotation or choice board activity for [TOPIC] that allows students to engage at their own level and learning style. Include: [NUMBER] stations/choices, what students do at each, required vs. optional activities, how to differentiate for [SPECIFIC_NEEDS], tracking system, and how to debrief the learning afterwards.",
      "Develop flexible grouping strategies for teaching [TOPIC] to a class with [SPECIFIC_CONTEXT: wide ability range, multiple languages, significant gaps in prior knowledge]. Include: how to assess readiness quickly, group formation criteria, different instruction for each group, transitions between groups, and how to keep all students engaged with the core content.",
      "Design a personalized learning path for [NUMBER] students working on [SKILL]. Include: how to assess starting points, branching lessons based on progress, resources at different complexity levels, ways for students to demonstrate mastery, and how to monitor individual progress without being overwhelming."
    ]
  };

  const allPrompts = [
    ...prompts.lessonPlanning,
    ...prompts.assessmentCreation,
    ...prompts.studentFeedback,
    ...prompts.differentiatedLearning
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero Section */}
      <div className="border-b border-gray-800 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-6">
            <BookMarked size={40} className="text-purple-400" />
            <h1 className="text-4xl font-bold">AI Prompts for Teachers and Educators</h1>
          </div>
          <p className="text-xl text-gray-400 mb-8">
            16 powerful prompts to design lessons, create assessments, give feedback, and personalize learning using AI.
          </p>
          <p className="text-gray-500">
            These prompts help educators save time on planning and design, while focusing on what matters most: understanding your students and creating conditions for them to thrive.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Lesson Planning Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-purple-500"></div>
            <h2 className="text-2xl font-bold">Lesson Planning and Curriculum Design</h2>
          </div>
          <p className="text-gray-400 mb-8">
            Design coherent, engaging lessons aligned to standards with built-in differentiation and assessment.
          </p>
          <div className="grid gap-6">
            {prompts.lessonPlanning.map((prompt, index) => (
              <CopyCard key={index} prompt={prompt} />
            ))}
          </div>
        </section>

        {/* Assessment Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-purple-500"></div>
            <h2 className="text-2xl font-bold">Assessment Creation and Student Evaluation</h2>
          </div>
          <p className="text-gray-400 mb-8">
            Build formative and summative assessments that accurately measure learning and reveal misconceptions.
          </p>
          <div className="grid gap-6">
            {prompts.assessmentCreation.map((prompt, index) => (
              <CopyCard key={index} prompt={prompt} />
            ))}
          </div>
        </section>

        {/* Student Feedback Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-purple-500"></div>
            <h2 className="text-2xl font-bold">Student Feedback and Progress Tracking</h2>
          </div>
          <p className="text-gray-400 mb-8">
            Provide timely, actionable feedback and help students see their own growth and progress.
          </p>
          <div className="grid gap-6">
            {prompts.studentFeedback.map((prompt, index) => (
              <CopyCard key={index} prompt={prompt} />
            ))}
          </div>
        </section>

        {/* Differentiated Learning Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-purple-500"></div>
            <h2 className="text-2xl font-bold">Differentiated Learning and Personalization</h2>
          </div>
          <p className="text-gray-400 mb-8">
            Meet students where they are with personalized pathways, flexible grouping, and responsive teaching.
          </p>
          <div className="grid gap-6">
            {prompts.differentiatedLearning.map((prompt, index) => (
              <CopyCard key={index} prompt={prompt} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid gap-4">
            <FAQCollapse
              question="Can AI help me plan lessons without losing my teaching voice?"
              answer="AI is a planning tool, not a replacement for your expertise. Use these prompts to generate a starting draft, then adapt, personalize, and refine based on your students, classroom culture, and teaching philosophy. The result should always reflect your judgment and values."
            />
            <FAQCollapse
              question="How do I ensure AI-generated assessments actually measure what I want?"
              answer="Always review AI-generated assessment items against your learning objectives. Check for clarity, appropriate difficulty, alignment to standards, and potential bias. Pilot the assessment or use it as a foundation to create your own items. Use follow-up prompts to refine questions that don't quite work."
            />
            <FAQCollapse
              question="Will using these prompts create more work for me instead of less?"
              answer="These prompts are designed to save time on the drafting and brainstorming phase. Expect to spend 5-10 minutes refining what AI generates rather than 30-45 minutes creating from scratch. The real time savings come when you reuse and remix generated content across years and units."
            />
            <FAQCollapse
              question="How can I differentiate instruction without creating three different lessons?"
              answer="Use the differentiation prompts to design one coherent unit with multiple entry and exit points. The core concept stays the same; what changes is the complexity, pace, and supports. AI can help you design these pathways quickly without designing separate lessons."
            />
            <FAQCollapse
              question="Can I use these prompts for remote, hybrid, and in-person teaching?"
              answer="Yes. These prompts are designed to work across all teaching contexts. Specify your delivery model in the prompt (e.g., synchronous, asynchronous, in-person) and AI will adapt the lesson, assessment, or activity accordingly."
            />
            <FAQCollapse
              question="How do I give meaningful feedback at scale without burning out?"
              answer="Use the feedback prompts to create templates and sentence stems that make feedback faster and more consistent. Implement peer feedback and self-assessment systems to share the feedback load. Use AI to draft feedback, then personalize it based on specific student work."
            />
            <FAQCollapse
              question="What if my curriculum is very prescriptive and leaves little room for AI customization?"
              answer="Even with a prescribed curriculum, these prompts can help you: create better formative assessments aligned to pacing, generate discussion questions and examples, design differentiation within the required content, create student-facing materials that explain concepts, and develop feedback systems that work within your constraints."
            />
            <FAQCollapse
              question="How do I know if my students are actually learning if I use AI-assisted instruction?"
              answer="Assessment is separate from instruction. Use the assessment creation prompts to build formative and summative assessments that measure the same learning outcomes whether instruction came from you, AI, or a combination. The assessment quality determines what you know about learning."
            />
            <FAQCollapse
              question="Can these prompts work for my special education or ELL students?"
              answer="Yes. Specify the student population and their needs in the prompt. AI can generate differentiated materials, scaffolded instruction, modified assessments, and multilingual supports. Always review for accuracy and cultural responsiveness, and supplement with your specialized knowledge."
            />
            <FAQCollapse
              question="How do I balance using AI with helping students develop their own thinking skills?"
              answer="AI is a tool for creating better learning conditions, not for replacing student thinking. Use these prompts to design more discussion, more meaningful practice, better feedback, and more personalized learning pathways. The goal is to free up time from planning so you can focus on deeper instruction and relationships."
            />
          </div>
        </section>

        {/* Related Prompts Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Explore Related Prompts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/ai-prompts-real-estate-agents"
              className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-colors group"
            >
              <p className="font-medium text-gray-100 group-hover:text-purple-400 transition-colors">AI Prompts for Real Estate Agents</p>
              <p className="text-sm text-gray-500 mt-2">16 prompts for property listings, client follow-up, and market analysis</p>
            </Link>
            <Link
              href="/chatgpt-social-media-manager-prompts"
              className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-colors group"
            >
              <p className="font-medium text-gray-100 group-hover:text-purple-400 transition-colors">ChatGPT Social Media Manager Prompts</p>
              <p className="text-sm text-gray-500 mt-2">16 prompts for content calendars, captions, analytics, and community management</p>
            </Link>
            <Link
              href="/notebooklm-prompts"
              className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-colors group"
            >
              <p className="font-medium text-gray-100 group-hover:text-purple-400 transition-colors">NotebookLM Prompts</p>
              <p className="text-sm text-gray-500 mt-2">16 prompts for document analysis, research synthesis, and learning materials</p>
            </Link>
            <Link
              href="/ai-prompts-coaches"
              className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-colors group"
            >
              <p className="font-medium text-gray-100 group-hover:text-purple-400 transition-colors">AI Prompts for Coaches</p>
              <p className="text-sm text-gray-500 mt-2">16 prompts for coaching businesses, client programs, and marketing</p>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-900/20 to-purple-800/10 border border-purple-500/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Custom AI Prompts for Your Field?</h2>
          <p className="text-gray-400 mb-6">
            I help organisations design and deliver custom AI training, build internal AI tools, and create prompt libraries tailored to your team's work.
          </p>
          <a
            href="mailto:okejemichael@gmail.com"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Let's Talk
          </a>
        </section>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Teachers and Educators: 16 Prompts for Lesson Planning, Assessment, and Differentiated Learning',
            description: 'A collection of 16 powerful AI prompts designed to help teachers and educators design engaging lessons, create effective assessments, provide meaningful feedback, and personalize learning for all students.',
            author: {
              '@type': 'Person',
              name: 'Michael Okeje',
              url: 'https://michaelokeje.com'
            },
            datePublished: '2025-03-28'
          })
        }}
      />
    </div>
  );
}
