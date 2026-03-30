'use client';
import { useState } from 'react';
import { Check, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI Prompts for Teachers & Educational Tools',
  description: '50+ ChatGPT prompts designed specifically for educators. Streamline lesson planning, create assessments, personalize learning, manage classrooms, and enhance student engagement with AI.',
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  faqs: [
    {
      '@type': 'Question',
      name: 'What subjects can AI help me teach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can assist with virtually any subject—from mathematics and sciences to languages, history, and the arts. The key is crafting specific prompts that reflect your curriculum and learning objectives. AI works best when you provide clear context about your grade level, student needs, and teaching goals.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I use AI to save time on lesson planning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use AI to generate lesson outlines, discussion questions, activity ideas, assessment questions, and learning objectives based on your curriculum standards. You can then review, adapt, and customize these suggestions to match your teaching style and student needs. This reduces planning time significantly while maintaining educational quality.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can AI help me create differentiated learning materials?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI can generate multiple versions of the same content at different complexity levels, reading levels, and learning modalities. You can ask for simplified explanations for struggling learners, advanced extensions for gifted students, and alternative formats (visual, kinesthetic, auditory) to support diverse learning styles.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I create fair and effective assessments with AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask AI to generate question banks aligned to learning objectives, rubrics for grading projects, and varied assessment formats (multiple choice, short answer, essay prompts). Always review and customize AI-generated assessments to ensure they accurately measure student learning and align with your standards.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can AI help manage classroom behavior and student engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can help you draft classroom management strategies, create positive reinforcement systems, suggest engagement activities, and develop restorative practices. However, real classroom management relies on relationships and your professional judgment—use AI as a brainstorming tool, not a replacement for your expertise.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I personalize learning for individual students using AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use AI to create individualized learning paths, adaptive practice questions, personalized feedback templates, and tailored extension activities based on each student&apos;s learning profile. Combine AI suggestions with your knowledge of each student&apos;s needs, pace, and interests.'
      }
    },
    {
      '@type': 'Question',
      name: 'What&apos;s the best way to communicate AI use to parents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Be transparent. Explain how you&apos;re using AI as a teaching tool—to enhance, not replace, your instruction. Share specific examples (e.g., &quot;I used AI to generate discussion prompts,&quot; not &quot;I let AI grade assignments&quot;). Clarify that you remain the decision-maker and quality controller.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I teach students about AI literacy and critical thinking with AI tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Invite students to evaluate AI-generated content for accuracy, bias, and limitations. Ask them to compare AI output with human-created alternatives. Discuss how AI works, its potential, and its risks. This develops critical thinking skills and prepares them for an AI-integrated world.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use AI to provide personalized feedback to students?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI can generate feedback templates, suggest specific praise and growth areas, and help you structure constructive comments. However, personalize the output with your own observations and make sure feedback is genuinely helpful and aligned with your teaching goals.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I ensure AI doesn&apos;t introduce bias into my teaching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Review all AI-generated content for bias in representation, language, and examples. Ensure diverse perspectives are included in case studies and scenarios. Add your own culturally responsive materials and examples. AI is a tool—your professional judgment and commitment to equity are essential safeguards.'
      }
    }
  ]
};

const CopyCard = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition-colors">
      <p className="text-slate-300 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors text-sm font-medium"
      >
        {copied ? (
          <>
            <Check size={16} />
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

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500/50 transition-colors">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 flex items-center justify-between bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
      >
        <h3 className="text-slate-200 font-medium text-left text-sm">{question}</h3>
        {expanded ? (
          <ChevronUp size={18} className="text-blue-500 flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-blue-500 flex-shrink-0" />
        )}
      </button>
      {expanded && (
        <div className="px-4 py-3 bg-slate-900/50 border-t border-slate-700">
          <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 border-b border-slate-700/50">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-blue-500 text-xs font-semibold tracking-widest uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Education & Teaching
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              AI Prompts for Teachers & Educational Tools
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              50+ ChatGPT prompts designed specifically for educators. Streamline lesson planning, create assessments, personalize learning, manage classrooms, and enhance student engagement with AI.
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-4xl mx-auto">
          {/* Section 1: Lesson Planning & Curriculum Design */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
              Lesson Planning & Curriculum Design
            </h2>
            <div className="grid gap-4">
              <CopyCard prompt="Create a 5-day lesson plan for [topic] suitable for [grade level] students. Include learning objectives, daily activities, formative assessments, and differentiation strategies for advanced and struggling learners." />
              <CopyCard prompt="Generate a detailed lesson outline for teaching [subject] that aligns with [curriculum standard]. Include hook, direct instruction, guided practice, independent practice, and closure activities." />
              <CopyCard prompt="Develop unit learning objectives for a [duration]-week unit on [topic]. Create SMART goals, essential questions, key vocabulary, and a pacing guide for [grade level]." />
              <CopyCard prompt="Create a scope and sequence for teaching [skill/concept] across [grade range]. Show progression from basic to advanced understanding with key milestones." />
              <CopyCard prompt="Design a thematic unit that integrates [multiple subjects] around [theme]. Include learning objectives, activities, resources, and assessment strategies for [grade level]." />
              <CopyCard prompt="Generate discussion questions at multiple cognitive levels (Bloom&apos;s Taxonomy) for teaching [topic] to [grade level] students." />
            </div>
          </div>

          {/* Section 2: Assessment & Grading */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
              Assessment & Grading
            </h2>
            <div className="grid gap-4">
              <CopyCard prompt="Create a question bank of [number] questions covering [topic] for [grade level]. Include a mix of multiple choice, short answer, and essay questions aligned to [learning objective]." />
              <CopyCard prompt="Develop a detailed rubric for grading [assignment type] with [number] criteria. Include performance levels (exceptional, proficient, developing, beginning) with specific descriptors." />
              <CopyCard prompt="Generate [number] formative assessment questions to check for understanding during a lesson on [topic] for [grade level] students." />
              <CopyCard prompt="Create a study guide for [topic] that includes key vocabulary, main concepts, practice questions, and tips for success for [grade level]." />
              <CopyCard prompt="Design a performance task that assesses [learning objective] in a real-world context. Include task description, materials needed, and evaluation criteria." />
              <CopyCard prompt="Generate exit ticket questions to assess student understanding of [topic] at the end of a lesson. Include 3-5 questions suitable for [grade level]." />
            </div>
          </div>

          {/* Section 3: Differentiation & Personalized Learning */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
              Differentiation & Personalized Learning
            </h2>
            <div className="grid gap-4">
              <CopyCard prompt="Create simplified, grade-level, and advanced versions of an explanation for [topic] to differentiate for mixed-ability [grade level] classrooms." />
              <CopyCard prompt="Generate learning activities for [topic] tailored to different learning styles: visual learners, auditory learners, kinesthetic learners, and reading/writing learners." />
              <CopyCard prompt="Design extension activities for advanced learners who have mastered [topic]. Include challenge problems and enrichment opportunities." />
              <CopyCard prompt="Create support strategies and scaffolded materials for struggling learners working on [topic]. Include step-by-step instructions and visual aids." />
              <CopyCard prompt="Develop a personalized learning plan for a student working [pace] based on [specific learning needs]. Include goals, strategies, and monitoring methods." />
              <CopyCard prompt="Generate alternative assessment options for [topic] that allow students to demonstrate learning in different ways: written, visual, performance-based, or project-based." />
            </div>
          </div>

          {/* Section 4: Student Engagement & Classroom Management */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
              Student Engagement & Classroom Management
            </h2>
            <div className="grid gap-4">
              <CopyCard prompt="Suggest [number] interactive activities to teach [topic] that will engage [grade level] students and promote active learning." />
              <CopyCard prompt="Create classroom management strategies and positive reinforcement systems suitable for a [grade level] classroom focused on [specific behavior goal]." />
              <CopyCard prompt="Generate icebreaker and team-building activities for the beginning of the year to help [grade level] students build community and trust." />
              <CopyCard prompt="Develop restorative practices and conflict resolution strategies for managing common behavior challenges in a [grade level] classroom." />
              <CopyCard prompt="Create a list of engaging review games and activities for [grade level] students to practice and reinforce learning of [topic]." />
              <CopyCard prompt="Design a classroom reward system and motivation strategies that are age-appropriate and effective for [grade level] students." />
            </div>
          </div>

          {/* Section 5: Teacher Support & Professional Development */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
              Teacher Support & Professional Development
            </h2>
            <div className="grid gap-4">
              <CopyCard prompt="Create professional development session agenda on [topic] for [audience of teachers]. Include learning objectives, key content, activities, and resources." />
              <CopyCard prompt="Generate feedback templates and specific praise statements I can use when commenting on student work in [subject] at [grade level]." />
              <CopyCard prompt="Develop a communication template for reaching out to parents about [topic], such as behavior, progress, or upcoming events. Make it professional yet warm." />
              <CopyCard prompt="Create a self-reflection guide for evaluating my teaching effectiveness in [area]. Include questions to consider and action steps for improvement." />
              <CopyCard prompt="Suggest resources, websites, and tools that would support teaching [topic] to [grade level] students, including free and paid options." />
              <CopyCard prompt="Generate a checklist for preparing my [grade level] classroom at the beginning of the year, including organization, routines, and materials needed." />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-slate-800/30 border-t border-slate-700/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <FAQItem
                question="What subjects can AI help me teach?"
                answer="AI can assist with virtually any subject—from mathematics and sciences to languages, history, and the arts. The key is crafting specific prompts that reflect your curriculum and learning objectives. AI works best when you provide clear context about your grade level, student needs, and teaching goals."
              />
              <FAQItem
                question="How can I use AI to save time on lesson planning?"
                answer="Use AI to generate lesson outlines, discussion questions, activity ideas, assessment questions, and learning objectives based on your curriculum standards. You can then review, adapt, and customize these suggestions to match your teaching style and student needs. This reduces planning time significantly while maintaining educational quality."
              />
              <FAQItem
                question="Can AI help me create differentiated learning materials?"
                answer="Yes. AI can generate multiple versions of the same content at different complexity levels, reading levels, and learning modalities. You can ask for simplified explanations for struggling learners, advanced extensions for gifted students, and alternative formats (visual, kinesthetic, auditory) to support diverse learning styles."
              />
              <FAQItem
                question="How do I create fair and effective assessments with AI?"
                answer="Ask AI to generate question banks aligned to learning objectives, rubrics for grading projects, and varied assessment formats (multiple choice, short answer, essay prompts). Always review and customize AI-generated assessments to ensure they accurately measure student learning and align with your standards."
              />
              <FAQItem
                question="Can AI help manage classroom behavior and student engagement?"
                answer="AI can help you draft classroom management strategies, create positive reinforcement systems, suggest engagement activities, and develop restorative practices. However, real classroom management relies on relationships and your professional judgment—use AI as a brainstorming tool, not a replacement for your expertise."
              />
              <FAQItem
                question="How can I personalize learning for individual students using AI?"
                answer="Use AI to create individualized learning paths, adaptive practice questions, personalized feedback templates, and tailored extension activities based on each student&apos;s learning profile. Combine AI suggestions with your knowledge of each student&apos;s needs, pace, and interests."
              />
              <FAQItem
                question="What&apos;s the best way to communicate AI use to parents?"
                answer="Be transparent. Explain how you&apos;re using AI as a teaching tool—to enhance, not replace, your instruction. Share specific examples (e.g., &quot;I used AI to generate discussion prompts,&quot; not &quot;I let AI grade assignments&quot;). Clarify that you remain the decision-maker and quality controller."
              />
              <FAQItem
                question="How do I teach students about AI literacy and critical thinking with AI tools?"
                answer="Invite students to evaluate AI-generated content for accuracy, bias, and limitations. Ask them to compare AI output with human-created alternatives. Discuss how AI works, its potential, and its risks. This develops critical thinking skills and prepares them for an AI-integrated world."
              />
              <FAQItem
                question="Can I use AI to provide personalized feedback to students?"
                answer="Yes. AI can generate feedback templates, suggest specific praise and growth areas, and help you structure constructive comments. However, personalize the output with your own observations and make sure feedback is genuinely helpful and aligned with your teaching goals."
              />
              <FAQItem
                question="How do I ensure AI doesn&apos;t introduce bias into my teaching?"
                answer="Review all AI-generated content for bias in representation, language, and examples. Ensure diverse perspectives are included in case studies and scenarios. Add your own culturally responsive materials and examples. AI is a tool—your professional judgment and commitment to equity are essential safeguards."
              />
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-slate-700/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Explore More Prompt Collections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/ai-translator-tools" className="group">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all">
                  <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">Translation Tools</h3>
                  <p className="text-slate-400 text-sm mt-1">AI prompts for translators and language professionals.</p>
                </div>
              </Link>
              <Link href="/ai-web-builder-prompts" className="group">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all">
                  <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">Web Builder Prompts</h3>
                  <p className="text-slate-400 text-sm mt-1">AI prompts for creating websites and web design.</p>
                </div>
              </Link>
              <Link href="/ai-writing-assistant-prompts" className="group">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all">
                  <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">Writing Assistant</h3>
                  <p className="text-slate-400 text-sm mt-1">AI prompts for writers and content creators.</p>
                </div>
              </Link>
              <Link href="/ai-music-prompts" className="group">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all">
                  <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">Music Prompts</h3>
                  <p className="text-slate-400 text-sm mt-1">AI prompts for musicians and music producers.</p>
                </div>
              </Link>
              <Link href="/ai-gaming-prompts" className="group">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all">
                  <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">Gaming Prompts</h3>
                  <p className="text-slate-400 text-sm mt-1">AI prompts for game developers and gamers.</p>
                </div>
              </Link>
              <Link href="/ai-research-assistant-prompts" className="group">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all">
                  <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">Research Assistant</h3>
                  <p className="text-slate-400 text-sm mt-1">AI prompts for researchers and academics.</p>
                </div>
              </Link>
              <Link href="/ai-study-guide-generator" className="group">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all">
                  <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">Study Guide Generator</h3>
                  <p className="text-slate-400 text-sm mt-1">AI prompts for students preparing for exams.</p>
                </div>
              </Link>
              <Link href="/ai-poem-generator" className="group">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all">
                  <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">Poem Generator</h3>
                  <p className="text-slate-400 text-sm mt-1">AI prompts for creating poetry and verse.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
