'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp, BookMarked, Brain, CheckCircle, Lightbulb, Users } from 'lucide-react';

const AIHomeworkPromptsPage = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const handleCopyPrompt = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const CopyCard = ({ id, prompt }: { id: string; prompt: string }) => (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-lime-500/50 transition-colors">
      <p className="text-gray-200 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={() => handleCopyPrompt(id, prompt)}
        className="inline-flex items-center gap-2 px-3 py-2 bg-lime-500/10 hover:bg-lime-500/20 text-lime-400 rounded text-sm transition-colors"
      >
        {copiedId === id ? (
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

  const FAQItem = ({ id, question, answer }: { id: number; question: string; answer: string }) => (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpenFaqId(openFaqId === id ? null : id)}
        className="w-full px-4 py-4 flex items-center justify-between bg-[#1a1a1a] hover:bg-[#242424] transition-colors"
      >
        <h3 className="text-sm font-semibold text-gray-100">{question}</h3>
        {openFaqId === id ? (
          <ChevronUp size={18} className="text-lime-400 flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      {openFaqId === id && (
        <div className="px-4 py-4 bg-[#0a0a0a] border-t border-[#2a2a2a] text-sm text-gray-300 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );

  const sections = [
    {
      title: 'Essay & Academic Writing',
      icon: BookMarked,
      prompts: [
        'Help me write a 1500-word essay analyzing the impact of the Industrial Revolution on 19th-century society, including thesis statement, three main arguments with supporting evidence, counterarguments and rebuttals, proper citations in MLA format, and a strong conclusion that synthesizes the main points',
        'Create an outline for a research paper on climate change policy solutions, including introduction with thesis, five main body sections covering renewable energy, carbon pricing, industrial regulation, reforestation, and policy implementation barriers, counterarguments, and conclusion with recommendations',
        'Guide me through writing a literary analysis essay comparing symbolism in two Shakespeare plays, including textual evidence, thematic connections, historical context, analytical arguments about authorial intent, and proper academic essay structure with introduction, body, and conclusion',
        'Help structure a comparative history essay examining the causes and consequences of the French and Russian revolutions, including thesis development, side-by-side comparison of political contexts, key differences and similarities, primary source integration, and analytical conclusions',
        'Develop an argument for a persuasive essay on a complex social issue of my choice, including a clear thesis statement, counterargument analysis, evidence selection strategies, logical fallacy avoidance, rhetorical techniques, and a compelling conclusion',
        'Create a scaffolded guide for writing a five-paragraph analytical essay on a scientific topic, including introduction strategies, topic sentence development for body paragraphs, evidence integration techniques, transitional phrases, and conclusion writing strategies'
      ]
    },
    {
      title: 'Mathematics & Problem Solving',
      icon: Brain,
      prompts: [
        'Explain algebra word problems step-by-step, breaking down complex scenarios into equations, showing solution methods, verifying answers, identifying common mistakes, providing similar practice problems, and explaining the mathematical concepts behind the solution process',
        'Guide me through calculus problem-solving including concept explanation, derivative and integral rule application, step-by-step calculations with reasoning, verification methods, common errors to avoid, real-world applications of the concepts, and practice problems with increasing difficulty',
        'Help solve geometry proofs by identifying given information, stating what needs to be proven, listing relevant theorems and properties, developing proof strategies, writing formal two-column or paragraph proofs, identifying logical gaps, and explaining why each step follows',
        'Teach statistical analysis problem-solving covering data interpretation, appropriate statistical test selection, hypothesis development, calculation methods with explanations, result interpretation, drawing valid conclusions, avoiding statistical fallacies, and real-world application',
        'Guide trigonometry problem-solving including right triangle relationships, unit circle concepts, trigonometric identities, equation-solving techniques, graphing approaches, angle conversions, and application to real-world scenarios like navigation and engineering',
        'Explain complex multi-step word problems by identifying given and needed information, selecting solution strategies, breaking into manageable steps, showing all calculations, checking reasonableness of answers, identifying alternative solution methods, and preventing future mistakes'
      ]
    },
    {
      title: 'Science & Lab Reports',
      icon: CheckCircle,
      prompts: [
        'Help structure a comprehensive lab report including hypothesis development, materials and methods description with sufficient detail for replication, organized results presentation with data tables and graphs, analysis of findings relative to hypothesis, discussion of sources of error, and conclusions connecting results to broader scientific principles',
        'Guide writing a biology research summary covering organism or concept selection, anatomical or physiological information, evolutionary significance, ecological role, practical applications, supporting evidence from credible sources, and synthesis of information into coherent narrative',
        'Help develop a chemistry lab report emphasizing chemical equations, reaction mechanisms, stoichiometric calculations, safety considerations, detailed procedural documentation, quantitative and qualitative observations, percent yield or efficiency calculations, and discussion of theoretical versus experimental results',
        'Create a physics experiment analysis guide covering force and motion concepts, vector diagrams and calculations, experimental apparatus description, measurement techniques and uncertainty analysis, graphical data representation, energy calculations, and comparison to theoretical predictions',
        'Guide environmental science project development including ecosystem selection, abiotic and biotic factor identification, food web mapping, biodiversity assessment, human impact analysis, sustainability solutions, field observation documentation, and data-driven recommendations',
        'Help structure an earth science report on geological processes, covering plate tectonics, mineral and rock identification, erosion and weathering concepts, fossil analysis, climate patterns, natural hazard analysis, evidence interpretation, and implications for human geography'
      ]
    },
    {
      title: 'Language Learning & Literature',
      icon: Lightbulb,
      prompts: [
        'Help analyze a literary text by identifying literary devices (metaphor, symbolism, imagery, foreshadowing), examining character development and motivation, discussing theme and message, analyzing author\'s tone and style, connecting historical context, comparing to other works, and developing interpretive arguments supported by textual evidence',
        'Guide language learning homework by breaking down grammar concepts, providing conjugation or declension explanations, offering translation strategies maintaining meaning and nuance, discussing idioms and cultural context, providing pronunciation guidance, suggesting memory techniques, and creating practice exercises',
        'Help with poetry analysis covering meter and rhythm, rhyme scheme identification, stanza structure and form, poetic devices and their effects, speaker and audience analysis, emotional tone interpretation, historical and cultural context, and personal response development supported by evidence',
        'Guide reading comprehension by asking clarifying questions about plot, characters, conflicts and resolutions, themes and messages, narrative techniques, author\'s purpose, textual connections, personal reactions justified by evidence, and predictions about future developments',
        'Help develop a book report or book talk covering plot summary, character analysis, thematic elements, literary merit assessment, author\'s writing style and techniques, personal engagement and emotional response, connections to other works or real-world contexts, and final recommendations',
        'Guide vocabulary and language development through context clues, word relationships and etymology, usage in authentic contexts, synonym and antonym exploration, register and tone variation, literary and academic word application, spaced retrieval practice, and memorable learning techniques'
      ]
    },
    {
      title: 'Study Strategies & Exam Preparation',
      icon: Users,
      prompts: [
        'Create a personalized study plan for a major exam covering material review in manageable chunks, active recall practice with progressively harder questions, spaced retrieval scheduling over weeks, concept mapping and connection identification, practice test completion with timed conditions, error analysis and targeted review, and anxiety management strategies',
        'Help develop effective note-taking strategies for different subjects including Cornell method application, concept mapping for complex topics, digital versus handwritten note pros and cons, note organization systems, review and consolidation techniques, color-coding and highlighting best practices, and converting notes into study guides',
        'Guide test-taking strategy development covering time management within exams, question analysis and prioritization, multiple choice answer elimination, essay question planning and drafting, mathematical problem verification, reading comprehension techniques, managing test anxiety, and post-exam reflection for improvement',
        'Help create study guides for comprehensive exams by synthesizing course material, identifying key concepts and relationships, organizing information hierarchically, creating summaries and checklists, developing review questions with answers, suggesting practice resources, and designing concept review sessions',
        'Develop a homework management system covering assignment tracking, deadline organization, time estimation and scheduling, task prioritization using importance and urgency, distraction management techniques, productive study environment creation, motivation strategies, and progress monitoring',
        'Guide group study optimization including effective collaboration structures, individual accountability within groups, shared resource creation, peer teaching and explanation, question development and discussion protocols, managing group dynamics, ensuring equal participation, and maximizing learning outcomes'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How can I use these homework prompts without just getting answers handed to me?',
      answer: 'Use these prompts to request explanations, step-by-step guidance, verification of your work, and learning strategies rather than final answers. Ask for clarification of concepts you don\'t understand, request help structuring your approach, and have AI check your reasoning and calculations. The goal is developing understanding and skills, not bypassing learning. Engage critically with explanations provided and apply feedback to future work.'
    },
    {
      question: 'How do I know when I\'m using AI for homework appropriately versus cheating?',
      answer: 'Appropriate use: using AI to understand concepts, getting feedback on your work, clarifying assignment requirements, learning problem-solving approaches, reviewing and learning from explanations, getting study strategies, and developing critical thinking. Inappropriate use: submitting AI-generated work as your own without attribution, using AI to complete assignments you haven\'t attempted yourself, avoiding learning by relying on AI for all answers. Always check your school\'s policies on AI use and disclose AI assistance when required.'
    },
    {
      question: 'Can these prompts help me improve my writing and grades?',
      answer: 'Yes, but effectiveness depends on how you use them. Use prompts to request feedback on drafts you\'ve written, ask for revision suggestions with explanations, request structural guidance before writing, ask for clarification of assignment requirements, and request explanations of writing principles. Consistent practice responding to feedback and applying writing strategies will improve both skills and grades over time. Track which types of feedback help most and focus improvement efforts there.'
    },
    {
      question: 'How should I approach studying a subject I find really difficult?',
      answer: 'Break material into smaller chunks and master concepts sequentially. Use prompts to get concept explanations in multiple ways until something clicks. Practice problems with AI feedback to identify specific confusion areas. Ask for alternative explanations and real-world examples. Create concept maps showing relationships between ideas. Review previous success to build confidence. Take regular breaks to avoid overwhelm. Consider whether you need tutoring or additional support beyond AI assistance. Celebrate small improvements.'
    },
    {
      question: 'What should I do if I don\'t understand the AI\'s explanation?',
      answer: 'Ask for clarification immediately. Request the explanation using different wording, analogies, or examples. Ask the AI to break concepts into smaller pieces. Request visual representations, diagrams, or step-by-step processes. Ask about real-world applications to understand why concepts matter. Try explaining what you DO understand and ask where the confusion begins. If you remain stuck, consult textbooks, class notes, classmates, or your teacher for additional help.'
    },
    {
      question: 'How can I use AI to study more efficiently without studying less effectively?',
      answer: 'Use AI to create study materials (flashcards, practice questions, concept summaries) based on your notes. Request practice problems with increasing difficulty levels. Ask for quiz creation to test understanding. Request explanation of concepts before reviewing textbook material. Use AI to identify knowledge gaps through targeted questions. Create study schedules based on spaced retrieval principles. Review AI explanations actively and test yourself frequently. Efficiency without effectiveness is counterproductive, so prioritize deep understanding over speed.'
    },
    {
      question: 'What if my teacher doesn\'t allow AI use for homework?',
      answer: 'Respect your teacher\'s policies completely. If you\'ve used AI for homework and your teacher doesn\'t allow it, disclose this proactively. If you\'re unsure about policies, ask your teacher directly. Some teachers allow AI for brainstorming or planning but not final submissions, some restrict it entirely, and others encourage it. Understanding expectations prevents academic integrity issues. If you disagree with a policy, discuss respectfully with your teacher rather than bypassing the policy.'
    },
    {
      question: 'How do I maintain honest academic practices while using AI?',
      answer: 'Use AI as a learning tool, not a shortcut. Do your own thinking and work first, then use AI for feedback and explanation. Disclose AI use when required by your school. Submit only work that represents your own understanding and effort. Don\'t submit AI-generated content without modification and your own analysis. Ask yourself: could I explain this concept and complete similar problems without AI? If not, you\'re not truly learning. Use AI to enhance your education, not replace your education.'
    },
    {
      question: 'Can AI help me with different learning styles?',
      answer: 'Yes. AI can explain concepts in text form, create visual diagrams and concept maps, provide step-by-step processes for visual learners, generate practice problems for kinesthetic learners, discuss topics for auditory learning, create analogies and real-world examples, provide detailed explanations for reflective learners, and offer rapid feedback for active learners. Request explanations in formats matching your learning style and ask for different approaches if the first doesn\'t resonate. Identify your learning strengths and request AI help accordingly.'
    },
    {
      question: 'How should I balance AI assistance with developing independent problem-solving skills?',
      answer: 'Always attempt problems and assignments yourself first before requesting AI help. When you get stuck, ask for guidance toward the solution rather than the solution itself. Request hints, clarification, or concept review rather than answers. Once you understand, solve similar problems independently before asking for more help. Gradually reduce AI dependence as your skills improve. The goal is using AI to accelerate learning, not to avoid developing skills. You\'ll know you\'re succeeding when you can solve increasingly complex problems independently.'
    }
  ];

      const relatedPages = [
    { title: 'AI Study Prompts', href: '/ai-study-prompts' },
    { title: 'AI Prompts for Education', href: '/ai-prompts-for-education' },
    { title: 'AI Prompts for Teachers', href: '/ai-prompts-for-teachers-tools' },
    { title: 'Turnitin AI Prompts', href: '/turnitin-ai-prompts' },
    { title: 'AI Question Answering Prompts', href: '/ai-question-answering-prompts' },
    { title: 'AI Summarizer Prompts', href: '/ai-summarizer-prompts' },
    { title: 'ChatGPT for Students', href: '/chatgpt-for-students' },
    { title: 'AI Homework Helper', href: '/ai-homework-helper' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Homework Prompts',
            description: 'A comprehensive collection of detailed AI prompts designed to help students learn effectively, understand complex concepts, and improve academic performance across all subjects.',
            datePublished: '2026-03-29',
            dateModified: '2026-03-29'
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookMarked size={32} className="text-lime-400" />
            <h1 className="text-4xl font-bold text-gray-100">AI Homework Prompts</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Master any subject with AI-powered learning assistance. These carefully crafted prompts help you understand complex concepts, improve your writing, solve challenging problems, and develop stronger academic skills across all disciplines.
          </p>
        </div>

        {sections.map((section, sectionIdx) => {
          const Icon = section.icon;
          return (
            <div key={sectionIdx} className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Icon size={24} className="text-lime-400" />
                <h2 className="text-2xl font-semibold text-gray-100">{section.title}</h2>
              </div>
              <div className="grid gap-4">
                {section.prompts.map((prompt, promptIdx) => (
                  <CopyCard
                    key={`${sectionIdx}-${promptIdx}`}
                    id={`prompt-${sectionIdx}-${promptIdx}`}
                    prompt={prompt}
                  />
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} id={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {relatedPages.map((page, idx) => (
              <Link
                key={idx}
                href={page.href}
                className="block px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-lime-500/50 hover:bg-[#1a1a1a] transition-colors text-lime-400"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIHomeworkPromptsPage;
