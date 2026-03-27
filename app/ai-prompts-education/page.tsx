import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Prompts for Education & E-Learning: Lesson Plans, Quizzes & Course Outlines (2026 Guide)",
  description:
    "Master AI-powered education with 100+ prompts for lesson plans, quizzes, course outlines, and differentiation. Learn frameworks for teachers and course creators using ChatGPT and Claude.",
  keywords: "education prompts, lesson plans, quiz generation, course design, e-learning, teacher prompts",
}

export default function EducationPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-16 px-6 md:px-12 border-b">
        <div className="max-w-4xl mx-auto">
          <Link href="/website-links" className="text-sm opacity-70 hover:opacity-100 mb-6 inline-block">
            ← Back to Prompts Library
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            AI Prompts for Education & E-Learning: Lesson Plans, Quizzes & Course Outlines (2026 Guide)
          </h1>
          <p className="text-xl text-gray-200">
            Create engaging lessons, assessments, and courses with AI-powered prompt frameworks
          </p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto py-16 px-6 md:px-12 prose prose-invert max-w-none">
        <h2>Prompt Framework for Teachers & Course Creators</h2>
        <p>
          Most education prompt libraries suggest including grade/level, subject, topic, objectives, and time in every
          request. A simple reusable pattern:
        </p>

        <pre className="bg-slate-900 p-6 rounded-lg overflow-x-auto">
          {`"You are an experienced [subject] teacher.
Grade/level: [X].
Topic: [topic].
Class type: [in-person/online/hybrid].
Time: [duration].
Learning objectives: [bullets].
Constraints: [standards, differentiation, assessment, tech].
Create [lesson/quiz/outline] in a clear structure."`}
        </pre>

        <p>For course creators, add audience, prerequisites, and format (self-paced, cohort, microlearning).</p>

        <h2>AI Prompts for Lesson Plans</h2>
        <p>These mirror structures from teacher prompt libraries and lesson-planning guides.</p>

        <h3>Full single-lesson plan (K–12 or higher ed)</h3>
        <p>
          "Create a detailed [length, e.g., 45-minute] lesson plan for [subject] for [grade/level] on the topic of
          [topic]. Include:
        </p>
        <ul>
          <li>Learning objectives in student-friendly 'I can' statements</li>
          <li>Required materials</li>
          <li>Step-by-step procedure (warm-up, direct instruction, guided practice, independent work, closure)</li>
          <li>At least one formative assessment/check for understanding</li>
          <li>One extension or enrichment activity and one support/scaffold idea for struggling learners."</li>
        </ul>

        <h3>Differentiated lesson ideas</h3>
        <p>"Given this lesson objective: [objective], suggest differentiated activities for three groups:</p>
        <ul>
          <li>Students who need extra support</li>
          <li>On-level students</li>
          <li>Students who need extension/challenge</li>
        </ul>
        <p>Make each activity concrete, using the same core topic but different scaffolds or complexity."</p>

        <h3>Lesson from standards or outcomes</h3>
        <p>
          "Using these standards/learning outcomes: [paste], design a lesson plan for [grade/level, subject]. Output:
        </p>
        <ul>
          <li>Brief overview</li>
          <li>Mapped learning objectives to each standard</li>
          <li>Key vocabulary</li>
          <li>Core activity that authentically assesses the standard."</li>
        </ul>

        <h2>AI Prompts for Quizzes & Assessments</h2>
        <p>Prompt libraries show AI can draft MCQs, short answers, rubrics, and alternative assessments in minutes.</p>

        <h3>Multiple-choice quiz from content</h3>
        <p>
          "Create [number] multiple-choice questions for [subject/topic] at [grade/level] using this text or lesson
          summary: [paste]. Each question should have 1 correct answer and 3 plausible distractors, and include a brief
          explanation for why the correct answer is correct and what misconception each distractor represents."
        </p>

        <h3>Formative "quick check" questions</h3>
        <p>
          "Generate 5 quick formative assessment questions (mix of multiple-choice and short answer) to check whether
          students understood [specific concept]. Keep them short and suitable for an exit ticket."
        </p>

        <h3>Higher-order questions (Bloom's)</h3>
        <p>
          "Given this topic: [topic], create: 2 understanding questions, 2 application questions, 2 analysis/evaluation
          questions aligned with Bloom's Taxonomy, appropriate for [grade/level]."
        </p>

        <h3>Rubric for a project/assignment</h3>
        <p>
          "Design a rubric for a [type of assignment: essay, project, presentation] on [topic] for [grade/level].
          Include 3–5 criteria (e.g., content understanding, organization, creativity, mechanics, use of sources), each
          with 4 performance levels and clear descriptors in student-friendly language."
        </p>

        <h2>AI Prompts for Course Outlines & E-Learning Design</h2>
        <p>Instructional design prompts emphasize learning goals, modules, and assessment alignment.</p>

        <h3>Full course outline from idea</h3>
        <p>
          "Act as an instructional designer. Outline a [length, e.g., 4-week] online course on [course topic] for
          [target learners: age/role/experience]. Provide:
        </p>
        <ul>
          <li>Course description and learning outcomes</li>
          <li>Module/week breakdown with titles</li>
          <li>3–5 key concepts or lessons per module</li>
          <li>Suggested primary activity or assignment per module</li>
          <li>One main assessment that aligns with the outcomes."</li>
        </ul>

        <h3>Microlearning sequence</h3>
        <p>
          "Design a microlearning series of 10 short lessons (5–10 minutes each) on [topic] for busy adult learners. For
          each lesson, provide: A title, One specific micro-objective, A brief activity (e.g., scenario, question,
          reflection), A 1–2 question self-check."
        </p>

        <h3>Storyboard for a video lesson</h3>
        <p>"Create a storyboard for a 10-minute instructional video on [topic] for [audience]. Include:</p>
        <ul>
          <li>Scene-by-scene outline (screen visuals + narration summary)</li>
          <li>Where to include examples, diagrams, or on-screen text</li>
          <li>2 points where the instructor should pause and ask a question."</li>
        </ul>

        <h2>Prompts for Differentiation & Personalization</h2>
        <p>Guides highlight adapting materials for different reading levels, backgrounds, and needs.</p>

        <h3>Adapt text to reading levels</h3>
        <p>
          "Rewrite this explanation of [concept] for three reading levels: Level 1: early middle school, Level 2:
          typical high school, Level 3: advanced or AP/college. Keep the key ideas but adjust vocabulary and sentence
          complexity."
        </p>

        <h3>Scaffolds for struggling learners</h3>
        <p>
          "For this task: [describe], suggest scaffolds for students who are struggling, such as graphic organizers,
          sentence starters, partially completed examples, or vocabulary supports."
        </p>

        <h3>Extension for advanced learners</h3>
        <p>
          "Design 3 extension activities for students who quickly master [concept]. Each should deepen understanding
          through application, analysis, or creation (e.g., designing a problem, teaching a mini-lesson, or connecting
          to real-world issues)."
        </p>

        <h2>Best Practices for AI in Education Prompts</h2>
        <ul>
          <li>
            <strong>Always specify level and context.</strong> Grade, subject, prior knowledge, and class duration
            dramatically change the output.
          </li>
          <li>
            <strong>Treat outputs as drafts.</strong> Guides emphasize that teachers remain the professional, using AI
            as a starting point to adjust for students and standards.
          </li>
          <li>
            <strong>Include objectives, not just topics.</strong> "Teach photosynthesis" is weaker than "Students will
            be able to explain X and compare Y."
          </li>
          <li>
            <strong>Ask for structure and formats.</strong> Request sections, question types, or rubrics so results are
            ready to plug into LMSs or slides.
          </li>
          <li>
            <strong>Iterate and refine.</strong> Follow-ups like "simplify language for ESL students," "make it more
            inquiry-based," or "align with Bloom's higher levels" help tailor results quickly.
          </li>
        </ul>

        <h2>FAQ: AI Prompts for Education</h2>
        <div className="space-y-6 mt-8">
          <div className="bg-slate-900 p-6 rounded-lg">
            <h4 className="font-bold mb-3">Can AI-generated lessons replace my lesson planning?</h4>
            <p>
              No. AI is a drafting tool. It generates first-pass lesson plans, quizzes, and course outlines. You review,
              customize, align with standards, and make the final call on pedagogy and pacing.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg">
            <h4 className="font-bold mb-3">How do I ensure AI content matches my learning standards?</h4>
            <p>
              Always specify standards, grade level, and learning objectives in your prompt. Ask AI to "map learning
              objectives to [specific standards]" so alignment is explicit and reviewable.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-lg">
            <h4 className="font-bold mb-3">Can I use AI to create assessments?</h4>
            <p>
              Yes, for quick-check quizzes and rubric drafts. However, high-stakes assessments (standardized tests,
              final exams) should involve human review to ensure validity and fairness.
            </p>
          </div>
        </div>
      </article>

      <footer className="bg-slate-900 text-white py-12 px-6 md:px-12 mt-16 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/website-links" className="hover:opacity-70 transition-opacity">
            ← Back to Prompts Library
          </Link>
          <p className="mt-6 text-sm opacity-60">© 2026 GPTPrompts.AI - All Rights Reserved</p>
        </div>
      </footer>
    </main>
  )
}
