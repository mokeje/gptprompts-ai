import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { BookOpen, Users, GraduationCap } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ChatGPT for Teachers: 60+ Prompts for Lesson Plans, Assessments & More | GPTPrompts.AI",
  description:
    "Save hours every week with ChatGPT. 60+ teacher-tested prompts for lesson planning, differentiated instruction, grading rubrics, parent communication, and student engagement. Used by 50,000+ educators.",
  keywords: ["chatgpt for teachers", "ai prompts for teachers", "chatgpt lesson plans", "ai for education", "teacher ai prompts", "chatgpt classroom"],
  openGraph: {
    title: "ChatGPT for Teachers: 60+ Prompts for Educators",
    description: "Save hours every week with ChatGPT. Lesson plans, assessments, parent communication, and more.",
    type: "article",
  },
}

export default function ChatGPTForTeachersPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero */}
      <header className="bg-[#2563eb] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <GraduationCap className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            ChatGPT<br />
            <span className="italic opacity-90">for Teachers.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            60+ battle-tested prompts that save teachers 5-10 hours per week. Lesson plans, rubrics, differentiation, parent emails, and more — all in minutes, not hours.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70">
            <span>60+ Prompts</span>
            <span>·</span>
            <span>K-12 & Higher Ed</span>
            <span>·</span>
            <span>Updated 2026</span>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#2563eb] mb-6">Teacher's Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "Why AI Changes Teaching", num: "00" },
                  { id: "lesson-plans", label: "Lesson Planning", num: "01" },
                  { id: "differentiation", label: "Differentiated Learning", num: "02" },
                  { id: "assessments", label: "Quizzes & Rubrics", num: "03" },
                  { id: "feedback", label: "Student Feedback", num: "04" },
                  { id: "parents", label: "Parent Communication", num: "05" },
                  { id: "engagement", label: "Student Engagement", num: "06" },
                  { id: "admin", label: "Admin & Planning", num: "07" },
                  { id: "faq", label: "FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="group flex items-center justify-between hover:text-[#2563eb] transition-colors">
                      <span>{link.label}</span>
                      <span className="text-xs opacity-30 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-4 border-[#2563eb]/20 bg-[#2563eb]/5">
              <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#2563eb]" /> Time Saved
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Teachers using these prompts report saving 5-10 hours per week on planning and admin tasks.
              </p>
            </Card>
            <div className="space-y-2 text-sm">
              <p className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Related</p>
              <Link href="/ai-prompts-education" className="block hover:text-[#2563eb] transition-colors">AI for E-Learning →</Link>
              <Link href="/chatgpt-for-students" className="block hover:text-[#2563eb] transition-colors">ChatGPT for Students →</Link>
              <Link href="/medical-education-prompts" className="block hover:text-[#2563eb] transition-colors">Medical Education →</Link>
            </div>
          </nav>
        </aside>

        {/* Content */}
        <div className="lg:col-span-9 space-y-24 pb-32">

          <section id="intro" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Why AI Is a Game-Changer for Teachers</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              The average teacher spends 10+ hours per week on tasks that have nothing to do with actually teaching — writing lesson plans, creating rubrics, drafting parent emails, differentiating materials for different learning levels. ChatGPT can dramatically reduce that burden.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              But most teachers use ChatGPT ineffectively — asking vague questions and getting generic outputs. The prompts in this guide are specifically designed for teachers, with the level of detail and context that produces truly useful, classroom-ready materials.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: <BookOpen className="w-5 h-5" />, title: "Lesson Plans in 5 min", desc: "Fully structured lesson plans aligned to standards" },
                { icon: <Users className="w-5 h-5" />, title: "Differentiated instantly", desc: "Same lesson adapted for 3 different learning levels" },
                { icon: <GraduationCap className="w-5 h-5" />, title: "Rubrics on demand", desc: "Clear, consistent assessment criteria in minutes" },
              ].map((item) => (
                <Card key={item.title} className="p-4">
                  <div className="text-[#2563eb] mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Lesson Planning */}
          <section id="lesson-plans" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Lesson Planning Prompts</h2>
            <p className="text-muted-foreground mb-8">Save 2-3 hours per week by generating complete, standards-aligned lesson plans. Always specify grade level, subject, and duration.</p>
            <div className="space-y-4">
              {[
                {
                  title: "Complete Lesson Plan",
                  prompt: `Create a detailed lesson plan for Grade [X] [Subject].

Topic: [Topic]
Duration: [45/60/90] minutes
Standards: [list relevant standards, e.g., CCSS.ELA-LITERACY.RI.5.1]
Prior knowledge: Students already know [what they've covered]

Include:
- Learning objectives (measurable, using Bloom's taxonomy verbs)
- Warm-up activity (5-10 min)
- Direct instruction section with key vocabulary
- Guided practice activity
- Independent practice
- Closing/exit ticket
- Differentiation strategies for ELL students and students with IEPs
- Materials needed
- Assessment method`
                },
                {
                  title: "Week-Long Unit Plan",
                  prompt: `Create a 5-day unit plan for Grade [X] [Subject] on [Topic].

Learning goals: By end of unit, students will be able to [goals]
Class period length: [X] minutes
Student needs: [include any relevant context about your class]

For each day, provide:
- Day's specific objective
- Opening activity
- Main instructional activity
- Practice/application
- Assessment or exit activity

Also include: materials list, vocabulary list, and summative assessment idea`
                },
                {
                  title: "Discussion-Based Lesson",
                  prompt: `Design a Socratic seminar lesson for Grade [X] on [Topic/Text].

Text/Topic: [describe the text or topic]
Duration: [X] minutes
Class size: [X] students

Include:
- 5 essential questions that require evidence-based thinking (not yes/no)
- 10 discussion probes to deepen conversation
- How to set up the fishbowl or circle structure
- How to assess participation
- How to handle students who don't participate
- Reflection activity at the end`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-[#2563eb]">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          {/* Differentiation */}
          <section id="differentiation" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Differentiated Learning Prompts</h2>
            <p className="text-muted-foreground mb-8">Create multiple versions of materials for different learners without tripling your workload.</p>
            <div className="space-y-4">
              {[
                {
                  title: "Three-Level Differentiation",
                  prompt: `Take this passage/activity: [paste content]

Rewrite it for three levels:
1. BELOW GRADE LEVEL: Simplified language (3rd grade reading level), shorter sentences, key vocabulary defined inline, visual cues suggested
2. ON GRADE LEVEL: Original content with minor clarity improvements
3. ABOVE GRADE LEVEL: Extended vocabulary, added complexity, connections to broader concepts, critical thinking questions

For each level, also provide 2-3 comprehension questions appropriate to that level`
                },
                {
                  title: "ELL Scaffolding",
                  prompt: `Adapt this [assignment/text/activity] for English Language Learners:

Original content: [paste content]
ELL Proficiency levels in my class: [Entering/Emerging/Developing/Expanding]

Provide:
- Simplified version with accessible language
- Key vocabulary list with simple definitions and examples
- Sentence frames for writing responses
- Visual/graphic organizer to support comprehension
- Modified assessment questions
- Home language connection suggestions`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-[#2563eb]">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          {/* Assessments */}
          <section id="assessments" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Assessment & Rubric Prompts</h2>
            <p className="text-muted-foreground mb-8">Create fair, clear, and comprehensive assessments in minutes.</p>
            <div className="space-y-4">
              {[
                {
                  title: "Quiz Generator",
                  prompt: `Create a [10/15/20]-question quiz on [Topic] for Grade [X].

Include:
- 5 multiple choice questions (with 4 answer choices and one clearly correct answer)
- 3 short answer questions (requiring 2-3 sentence responses)
- 2 application questions (students must use knowledge to solve a problem)

Also provide:
- Answer key with explanations for each answer
- Point values (total 100 points)
- Estimated completion time`
                },
                {
                  title: "Rubric Creator",
                  prompt: `Create a detailed grading rubric for [assignment type] on [topic].

Assignment: [describe the assignment]
Grade level: [X]
Total points: [X]

Use a 4-column format:
- Exemplary (4) / Proficient (3) / Developing (2) / Beginning (1)

Include rows for:
[list 4-6 criteria, e.g., content accuracy, organization, evidence use, writing quality]

Make the language specific and observable — avoid vague words like "good" or "poor"`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-[#2563eb]">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          {/* Parent Communication */}
          <section id="parents" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Parent Communication Prompts</h2>
            <p className="text-muted-foreground mb-8">Write clear, professional parent communications that are empathetic and solution-focused.</p>
            <div className="space-y-4">
              {[
                {
                  title: "Behavior Concern Email",
                  prompt: `Write a professional email to a parent about their child's behavior.

Student name: [use "your child" — don't include real names]
Behavior concern: [describe the specific behavior]
When it happened: [context]
What we've tried: [any interventions]

Tone: Empathetic, collaborative, solution-focused (not accusatory)
Include: Specific behavior description, impact on learning, what I've tried, what I'm asking the parent to do, invitation to meet`
                },
                {
                  title: "Positive Progress Note",
                  prompt: `Write a brief positive update email to a parent celebrating their child's growth.

Growth area: [what the student improved in]
Specific example: [give a concrete example]
Next steps: [what we're working on next]

Keep it: Warm, specific (not generic), brief (under 150 words), and action-oriented`
                },
                {
                  title: "Conference Preparation",
                  prompt: `Help me prepare talking points for a parent-teacher conference.

Student strengths: [list 3 strengths]
Areas for growth: [list 2-3 areas]
Current grade: [X]
Behavior: [brief description]
Goal for this conference: [what outcome you want]

Format as:
- Opening (build rapport)
- 3 specific strengths with examples
- 2 growth areas with specific, measurable goals
- Action plan (what teacher will do, what parent can do at home)
- Closing and follow-up plan`
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-l-4 border-l-[#2563eb]">
                  <h4 className="font-bold mb-3">{item.title}</h4>
                  <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">{item.prompt}</pre>
                </Card>
              ))}
            </div>
          </section>

          {/* Student Engagement */}
          <section id="engagement" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">Student Engagement Prompts</h2>
            <p className="text-muted-foreground mb-6">Make your lessons more engaging with AI-generated activities, hooks, and discussion starters.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Lesson Hook", prompt: "Create 3 engaging 'hooks' to open a lesson on [topic] for Grade [X]. Each hook should create curiosity and connect to real life. Options: surprising statistic, provocative question, short story, or demonstration idea." },
                { title: "Exit Ticket Ideas", prompt: "Give me 5 exit ticket prompts for today's lesson on [topic]. Mix: 1 recall question, 1 application, 1 self-reflection, 1 connection, 1 question they still have." },
                { title: "Creative Project Ideas", prompt: "Generate 8 creative project options for students to demonstrate mastery of [topic]. Include a mix of: visual, written, digital, and performance-based options. Appropriate for Grade [X]." },
                { title: "Bell Ringer Activities", prompt: "Create a week of bell ringer activities (5 min each) reviewing [previous topic] for Grade [X]. Monday through Friday, each should be different format: question, problem, image analysis, quick write, vocabulary." },
                { title: "Debate Prompt", prompt: "Create a structured debate activity on [topic] for Grade [X]. Include: the two positions to argue, 5 pieces of evidence for each side, debate rules, roles (speaker, timekeeper, judges), and rubric for evaluation." },
                { title: "Real-World Connection", prompt: "Help me connect [academic topic] to real-world careers and situations that Grade [X] students would find relevant. Give me 5 specific examples and a brief discussion question for each." },
              ].map((item) => (
                <Card key={item.title} className="p-4">
                  <h4 className="font-bold text-sm text-[#2563eb] mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground font-mono bg-muted rounded p-2 leading-relaxed">{item.prompt}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Teacher FAQ: ChatGPT in the Classroom</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                { q: "Is it ethical for teachers to use ChatGPT?", a: "Yes — teachers using AI to reduce administrative burden and improve planning quality is entirely ethical. It's no different from using lesson plan templates, textbooks, or Canva. The key distinction is transparency with students when AI is used to generate instructional content, and ensuring all AI outputs are reviewed and adapted by the teacher before use." },
                { q: "Will students know I used AI for their materials?", a: "Unless you tell them, most students won't know. That said, many educators are now modeling AI literacy by being transparent — showing students how they prompt AI, then review and improve the output. This teaches critical thinking about AI-generated content." },
                { q: "How do I stop ChatGPT from generating generic lesson plans?", a: "Specificity is everything. Generic prompt = generic output. Always include: exact grade level, specific topic, your curriculum standards, what students already know, and any constraints (time, resources, student needs). The more context, the better the output." },
                { q: "Can I use ChatGPT to give students feedback on their writing?", a: "You can use it to help you structure feedback, but human judgment is essential for final feedback. Use ChatGPT to identify patterns across multiple papers, draft initial feedback frameworks, or suggest ways to phrase constructive criticism diplomatically." },
                { q: "What are the best ChatGPT models for teachers?", a: "GPT-4o is the best all-around choice — it handles long documents, generates creative content, and understands educational context well. Claude 3.7 Sonnet is excellent for analyzing student work and generating nuanced feedback. For quick tasks, any current ChatGPT model works fine." },
              ].map((item) => (
                <AccordionItem key={item.q} value={item.q} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Related */}
          <section className="border-t pt-16">
            <h2 className="text-2xl font-bold mb-6">More Educational Resources</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "AI for Students", href: "/chatgpt-for-students" },
                { label: "AI for E-Learning", href: "/ai-prompts-education" },
                { label: "Medical Education", href: "/medical-education-prompts" },
                { label: "GCSE Revision", href: "/gcse-revision" },
                { label: "A-Level Success", href: "/a-level-success" },
                { label: "AP Exam Prep", href: "/ap-exam-study-guides" },
                { label: "College Essays", href: "/college-application-essays" },
                { label: "Writing Prompts", href: "/writing-prompts" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-center p-3 rounded-lg border hover:border-[#2563eb] hover:text-[#2563eb] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
