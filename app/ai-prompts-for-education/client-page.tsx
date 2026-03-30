'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp, BookOpen, GraduationCap, Lightbulb, Brain, Users } from 'lucide-react';

const AIPromptsForEducationPage = () => {
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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-amber-500/50 transition-colors">
      <p className="text-gray-200 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={() => handleCopyPrompt(id, prompt)}
        className="inline-flex items-center gap-2 px-3 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded text-sm transition-colors"
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
          <ChevronUp size={18} className="text-amber-400 flex-shrink-0" />
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
      title: 'Lesson Planning & Curriculum Design',
      icon: BookOpen,
      prompts: [
        'Create a comprehensive 12-week lesson plan for teaching photosynthesis to high school biology students aged 15-17, including daily objectives, interactive activities, assessment methods, real-world applications to sustainable agriculture, and differentiation strategies for varying ability levels',
        'Design a complete unit on World War II for 14-year-old history students covering political causes, key military campaigns, Holocaust history, home front experiences, and critical thinking questions that encourage analysis of primary sources and personal accounts',
        'Develop a semester-long curriculum for teaching creative writing to middle school students that includes weekly writing prompts, peer review rubrics, genre exploration exercises, author study units, and scaffolded assignments that build writing confidence and voice',
        'Create a 4-week intensive English language program for international students learning to write academic essays, including grammar foundations, research skills, citation methods, essay structure templates, and common error correction with explanations',
        'Design an integrated STEM curriculum unit connecting mathematics, physics, and engineering by having students calculate trajectories, build catapults, test designs, analyze data, and present findings about projectile motion principles',
        'Develop a culturally responsive literature curriculum for a diverse high school class that centers diverse voices, includes non-Western perspectives, incorporates student backgrounds, provides context for challenging texts, and creates space for critical discussion about representation and identity'
      ]
    },
    {
      title: 'Student Assessment & Feedback',
      icon: GraduationCap,
      prompts: [
        'Create a detailed rubric for assessing group project work in a collaborative science investigation, including individual contribution tracking, teamwork skills, scientific reasoning, communication quality, and differentiated scoring criteria for various ability levels',
        'Design a comprehensive feedback framework for evaluating student writing that provides specific, actionable comments on structure, voice, evidence use, grammar, and revision suggestions that guide improvement without simply correcting mistakes',
        'Develop a formative assessment strategy for a mathematics class including daily quick checks, exit tickets, interactive quizzes, error analysis activities, and questioning techniques that identify misconceptions and guide instructional adjustments',
        'Create a performance-based assessment task for demonstrating historical thinking skills, including specific criteria for analyzing primary sources, making evidence-based arguments, considering multiple perspectives, and creating historically informed conclusions',
        'Design a portfolio assessment system for tracking student progress in reading comprehension throughout a school year, including selection criteria for portfolio artifacts, reflection prompts, growth metrics, and student goal-setting processes',
        'Develop a peer assessment and self-assessment framework for student presentations that teaches students to evaluate delivery, content knowledge, visual design, and engagement while building metacognitive awareness of their own strengths and growth areas'
      ]
    },
    {
      title: 'Differentiation & Inclusive Teaching',
      icon: Lightbulb,
      prompts: [
        'Create a differentiation strategy for teaching the solar system to a mixed-ability 5th grade class including advanced tasks for enrichment, foundational activities for struggling learners, multiple learning modalities, and technology integration for diverse learners including those with visual or hearing impairments',
        'Design an inclusive mathematics intervention program for students with dyscalculia including multi-sensory strategies, concrete manipulatives, visual representations, adapted worksheets, technology tools like talking calculators, and confidence-building activities that reduce math anxiety',
        'Develop accommodations and modifications for a student with ADHD in a high school English class including movement breaks, shortened assignments, alternative seating, extended time options, noise-reducing tools, and assignment structure modifications that maintain academic rigor',
        'Create a differentiated science lesson on ecosystems that provides three entry points: advanced students investigating ecosystem complexity and food web modeling, grade-level students learning basic producer-consumer relationships, and support students focusing on identifying organisms and habitats',
        'Design a literacy intervention program for English language learners including pre-teaching vocabulary, visual supports, simplified texts, native language connections, peer partnerships, and progress monitoring that accelerates language development without lowering academic expectations',
        'Develop an enrichment track for advanced students in a regular mathematics classroom including higher-order thinking problems, real-world applications requiring complex modeling, peer teaching opportunities, competitions, and research projects that extend learning beyond grade-level standards'
      ]
    },
    {
      title: 'Online & Hybrid Learning Design',
      icon: Brain,
      prompts: [
        'Design a complete online module for teaching chemistry equilibrium to high school students including pre-recorded video explanations, interactive simulations, discussion forum prompts, graded practice problems with immediate feedback, asynchronous office hours, and synchronous lab demonstrations',
        'Create a blended learning structure for a literature class combining in-person discussion seminars with online reading modules, annotation assignments, recorded mini-lectures for background context, threaded discussion boards for textual analysis, and peer feedback on written responses',
        'Develop a comprehensive guide for delivering engaging synchronous online lessons including techniques for checking for understanding, managing participation, reducing screen fatigue, facilitating small group breakout discussions, interactive polling, and maintaining student engagement across time zones',
        'Design an asynchronous learning pathway for adult professional development training including microlearning modules, spaced retrieval practice, real-world scenario simulations, progress tracking dashboards, peer discussion forums, and practical application assignments connecting learning to job performance',
        'Create a hybrid assessment strategy that combines online formative checks, in-person performance tasks, project-based learning with both individual and collaborative components, and meaningful feedback loops that inform both student learning and instruction',
        'Develop a virtual classroom management and community-building strategy including icebreaker activities, synchronous connection rituals, asynchronous community spaces, peer collaboration structures, virtual office hours, and strategies for supporting isolated students and building belonging'
      ]
    },
    {
      title: 'Professional Development & Teacher Training',
      icon: Users,
      prompts: [
        'Create a professional development workshop agenda for training teachers on culturally responsive pedagogy including interactive case studies of student experiences, examination of implicit bias in curriculum, classroom observation protocols, action planning for implementation, and ongoing coaching support structures',
        'Design a comprehensive onboarding program for new teachers including subject-specific curriculum guidance, classroom management frameworks, technology tools training, mentorship pairings with experienced teachers, observation and feedback cycles, and networks with grade-level or department colleagues',
        'Develop a teacher learning community model focusing on data-driven instruction including session structures for analyzing student assessment data, identifying instructional shifts, planning targeted interventions, sharing best practices, collaborative lesson planning, and accountability for implementation',
        'Create a specialized training program on supporting students with trauma and adverse childhood experiences including neurobiology of stress impacts, trauma-informed classroom strategies, de-escalation techniques, building safety and trust, connecting to school counseling services, and self-care for teachers',
        'Design a master class series on advanced differentiation techniques for experienced teachers including case studies of complex learners, strategies for heterogeneous grouping, technology tools for personalized learning paths, assessment adaptations, and practical troubleshooting of common implementation challenges',
        'Develop a coaching framework for instructional leaders supporting teachers in implementing a new literacy curriculum including walkthrough protocols, feedback conversations using evidence, collaborative planning cycles, addressing resistance and implementation dips, celebrating wins, and tracking school-wide adoption metrics'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How can I adapt these education prompts for different grade levels?',
      answer: 'Most education prompts can be modified by adjusting complexity, vocabulary level, and content depth. When using a prompt, specify your target grade level, student characteristics, and learning objectives. For younger grades, simplify vocabulary and concepts, break into smaller steps, and include more scaffolding. For advanced grades, increase complexity, add research components, and connect to abstract thinking. Always consider your specific student population, prior knowledge, and available resources.'
    },
    {
      question: 'What learning management systems work best with AI-generated lesson plans?',
      answer: 'Most learning management systems like Canvas, Blackboard, Google Classroom, and Schoology can accommodate AI-generated content. These systems work well with structured lesson plans, assessments, and assignment sequences. When importing AI-generated content, verify it aligns with your LMS features, check formatting compatibility, ensure accessibility standards are met, and customize to match your institution\'s branding and protocols.'
    },
    {
      question: 'How do I ensure AI-generated assessments maintain academic rigor?',
      answer: 'Use AI to generate assessment frameworks and questions, but review and refine them against learning objectives using Bloom\'s Taxonomy or similar frameworks. Include higher-order thinking questions, require evidence-based reasoning, incorporate authentic tasks relevant to students\' lives, and ensure multiple question types assess different dimensions of understanding. Always pilot test assessments with students and refine based on results.'
    },
    {
      question: 'Can I use AI prompts to create culturally responsive content?',
      answer: 'Yes, but require specificity. When requesting culturally responsive content, specify the cultures, perspectives, and communities you want represented. Request inclusion of diverse authors, historical figures, and viewpoints from the start. However, always verify AI-generated content for accuracy, stereotypes, and appropriateness before using with students. Supplement with primary sources and community input to ensure authenticity.'
    },
    {
      question: 'How should I handle assessment and grading with AI-assisted learning?',
      answer: 'Use AI to streamline grading processes, generate feedback frameworks, and identify patterns in student work. However, maintain human judgment for final grades, individual progress assessments, and personalized feedback. Use AI analytics to identify struggling students for targeted interventions, but verify recommendations with direct student observation. Always maintain transparency with students and families about how AI tools are used in assessment.'
    },
    {
      question: 'What accessibility considerations should I keep in mind?',
      answer: 'When implementing AI-generated educational content, verify it meets accessibility standards including WCAG 2.1 guidelines. Check that videos have captions, images have alt text, documents are screen-reader compatible, and color isn\'t the only way to convey information. Test materials with assistive technology, provide multiple formats of content, include transcripts with audio, and get feedback from students with disabilities.'
    },
    {
      question: 'How can I integrate AI tools while maintaining student privacy?',
      answer: 'Use only educational technology tools with strong privacy protections and compliance with FERPA and GDPR. Avoid tools that monetize student data or allow unrestricted AI training on student information. Read privacy policies carefully, understand data retention practices, and get appropriate permissions from parents and administration. Use tools that allow data deletion and provide transparency reports.'
    },
    {
      question: 'How do I help students develop skills working alongside AI?',
      answer: 'Explicitly teach critical evaluation of AI output, responsible use practices, understanding of AI limitations, and how to use AI as a learning tool rather than replacement for thinking. Include activities where students prompt AI, evaluate responses, identify errors, improve prompts, and reflect on what AI can and cannot do. Help students understand both capabilities and ethical considerations of AI in education.'
    },
    {
      question: 'Can these prompts help with special education and IEP planning?',
      answer: 'Yes, AI can assist with generating accommodation strategies, differentiation ideas, and progress monitoring frameworks. However, IEP development requires human expertise from special educators, related service providers, families, and the student. Use AI to generate initial ideas and documentation templates, but ensure all accommodations are evidence-based, individualized for each student, and developed collaboratively with the IEP team.'
    },
    {
      question: 'How often should I update AI-generated lesson plans and materials?',
      answer: 'Review and update curriculum materials annually or whenever student needs change, new research emerges, or feedback indicates changes are needed. Use classroom data to identify what worked well and what needs revision. Stay current with your field\'s developments and refresh content to reflect contemporary examples and emerging issues. Encourage teacher collaboration and feedback loops for continuous improvement.'
    }
  ];

  const relatedPages = [
    { title: 'AI Chatbot Prompts', href: '/ai-chatbot-prompts' },
    { title: 'AI Productivity Prompts', href: '/ai-productivity-prompts' },
    { title: 'AI Search Engine Prompts', href: '/ai-search-engine-prompts' },
    { title: 'AI Text Generator Prompts', href: '/ai-text-generator-prompts' },
    { title: 'AI Story Generator Prompts', href: '/ai-story-generator-prompts' },
    { title: 'AI Music Generator Prompts', href: '/ai-music-generator-prompts' },
    { title: 'Bing AI Image Generator Prompts', href: '/bing-ai-image-generator-prompts' },
    { title: 'Perchance AI Prompts', href: '/perchance-ai-prompts' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Education',
            description: 'A comprehensive collection of detailed AI prompts designed to help educators create lesson plans, assessments, differentiated instruction, and professional development materials.',
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
            <BookOpen size={32} className="text-amber-400" />
            <h1 className="text-4xl font-bold text-gray-100">AI Prompts for Education</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Unlock the full potential of AI in education with our carefully crafted prompts designed for educators. From lesson planning and curriculum design to assessment strategies and inclusive teaching practices, these detailed prompts help you create engaging, effective learning experiences for all students.
          </p>
        </div>

        {sections.map((section, sectionIdx) => {
          const Icon = section.icon;
          return (
            <div key={sectionIdx} className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Icon size={24} className="text-amber-400" />
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
                className="block px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-amber-500/50 hover:bg-[#1a1a1a] transition-colors text-amber-400"
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

export default AIPromptsForEducationPage;
