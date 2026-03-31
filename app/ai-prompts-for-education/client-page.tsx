'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, BookOpen, GraduationCap, Lightbulb, Brain, Users, Target } from 'lucide-react';

const accent = '#F59E0B';
const borderCol = '#2a1f00';
const bgDark = '#060401';

const CopyCard = ({ title, prompt, tag }: { title: string; prompt: string; tag: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-lg border p-5 transition-colors" style={{ borderColor: borderCol, background: bgDark }} onMouseEnter={e => (e.currentTarget.style.borderColor = `${accent}60`)} onMouseLeave={e => (e.currentTarget.style.borderColor = borderCol)}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full border" style={{ borderColor: `${accent}40`, color: accent }}>{tag}</span>
          <h3 className="text-white font-semibold mt-1">{title}</h3>
        </div>
        <button onClick={handleCopy} className="shrink-0 text-gray-400 transition-colors hover:text-amber-400">
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="whitespace-pre-wrap font-sans text-sm text-gray-300 leading-relaxed">{prompt}</pre>
    </div>
  );
};

const FAQ = ({ item }: { item: { question: string; answer: string } }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg overflow-hidden border" style={{ borderColor: borderCol }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors" style={{ background: bgDark }}>
        <span className="font-medium text-white pr-4">{item.question}</span>
        {open ? <ChevronUp size={18} className="shrink-0" style={{ color: accent }} /> : <ChevronDown size={18} className="shrink-0 text-gray-400" />}
      </button>
      {open && <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed" style={{ background: bgDark }}>{item.answer}</div>}
    </div>
  );
};

const sections = [
  {
    title: 'Lesson Planning & Curriculum Design',
    icon: BookOpen,
    description: 'Build structured, standards-aligned lesson plans and curriculum units that engage students at every level with clear objectives and differentiated activities.',
    prompts: [
      {
        tag: 'Lesson Plan',
        title: 'Backward design unit plan',
        prompt: `Design a 3-week unit plan using backward design for [subject + grade level]:

Learning goals:
- What should students know, understand, and be able to do by the end?
- Which standards does this address?

Assessment evidence:
- Performance task: what will students create or demonstrate?
- Other evidence: quizzes, exit tickets, observations

Learning plan (week by week):
- Week 1: hook and foundational knowledge
- Week 2: skill development and guided practice
- Week 3: independent application and assessment

Include differentiation strategies for advanced, grade-level, and struggling learners.
Specify materials, technology tools, and prerequisite knowledge needed.`,
      },
      {
        tag: 'Curriculum',
        title: 'Project-based learning unit',
        prompt: `Design a project-based learning (PBL) unit for [grade level + subject] around the driving question: "[your question here]"

Project structure:
- Entry event to launch the project and create need-to-know questions
- Sustained inquiry: 4-5 research and learning activities
- Voice and choice options for how students demonstrate learning
- Critique and revision cycles before final presentation

Deliverables:
- Individual component: [describe]
- Team component: [describe]
- Final public presentation format

Assessment: rubric covering content knowledge, collaboration, communication, and critical thinking
Timeline: [X weeks], with milestone checkpoints
Connection to real-world stakeholders or community partner`,
      },
      {
        tag: 'Lesson Plan',
        title: 'Socratic seminar lesson',
        prompt: `Create a complete Socratic seminar lesson plan for [text or topic] at [grade level]:

Pre-seminar (1 class period):
- Close reading activity and annotation guide
- Background knowledge builder
- Preparation questions at literal, interpretive, and evaluative levels

Seminar structure:
- Opening question (10 min)
- Core questions to deepen discussion (25 min)
- Closing reflection (10 min)
- Inner/outer circle or fishbowl structure as needed

Post-seminar (next class):
- Written reflection prompt connecting discussion to broader themes
- Individual accountability task to assess engagement and comprehension

Discussion norms, assessment rubric for participation, and sentence starters for English learners.`,
      },
      {
        tag: 'Curriculum',
        title: 'Cross-curricular integration unit',
        prompt: `Design an integrated curriculum unit connecting [subject 1] and [subject 2] for [grade level]:

Unifying theme: [describe the overarching concept that bridges both subjects]

Content objectives from each discipline:
- [Subject 1]: [2-3 specific learning targets]
- [Subject 2]: [2-3 specific learning targets]

Integration strategies:
- Shared vocabulary and concepts across both subjects
- Activities where both skill sets are genuinely needed
- Assessment that requires students to draw on both disciplines

Schedule suggestion: how to coordinate teachers or block scheduling
Student artifact: a final product that is authentically integrated, not just parallel
Reflection: how you will assess whether integration added value vs. teaching separately`,
      },
    ],
  },
  {
    title: 'Student Assessment & Feedback',
    icon: Target,
    description: 'Design rigorous, equitable assessment systems — from formative checks to performance tasks — with feedback frameworks that accelerate student growth.',
    prompts: [
      {
        tag: 'Assessment',
        title: 'Standards-based rubric builder',
        prompt: `Create a standards-based rubric for assessing [assignment type] in [subject + grade level]:

Standards addressed: [list 2-3 specific standards]

Rubric dimensions (choose 4-5):
- Content knowledge and accuracy
- Critical thinking and analysis
- Communication (written/oral/visual)
- Evidence use and citation
- Revision and improvement process

For each dimension, write descriptors at 4 levels:
- Exceeds standard: what mastery + extension looks like
- Meets standard: what proficiency looks like
- Approaching standard: what partial understanding looks like
- Below standard: what needs significant support

Include: co-construction notes (how to involve students in rubric design)
Student-friendly version for self-assessment and peer review`,
      },
      {
        tag: 'Formative',
        title: 'Formative assessment battery',
        prompt: `Design a 4-week formative assessment sequence for [unit/topic] at [grade level]:

Daily checks (5 minutes):
- 3 exit ticket templates testing different levels of understanding
- 2 warm-up question sets that surface prior knowledge and misconceptions

Weekly formative tasks:
- Quick skill check with immediate self-scoring
- Peer teaching or explanation task
- Application problem with annotated thinking

Data use protocol:
- How to sort and analyze results in under 20 minutes
- Grouping strategy for targeted small-group instruction
- Criteria for deciding when to reteach vs. move forward

Include: common misconceptions to watch for in [topic] and diagnostic questions that reveal them`,
      },
      {
        tag: 'Assessment',
        title: 'Performance task design',
        prompt: `Create a performance-based assessment task for [subject + grade level]:

Task overview:
- Authentic scenario or real-world context that frames the task
- Role the student plays and audience they are addressing
- Product, performance, or presentation expected

Task requirements:
- Must-have elements and optional enrichment
- Resources students may (and may not) use
- Timeline and milestone checkpoints

Evaluation criteria:
- Content: [specific knowledge and skills assessed]
- Process: how students document their thinking and decision-making
- Communication: how they present findings

Accommodations and modifications for diverse learners
Anchor papers or sample work descriptions at each performance level`,
      },
      {
        tag: 'Feedback',
        title: 'Growth-oriented feedback system',
        prompt: `Design a feedback framework for student writing (or [subject-specific task]) that builds revision skills:

Feedback structure (use for any draft):
1. Glow: one specific strength with evidence from the work
2. Grow: one prioritized area for improvement with concrete suggestion
3. Question: one inquiry that pushes thinking further

Feedback stems for teachers:
- "I notice that you..." (observation, not judgment)
- "One thing that would strengthen this is..."
- "What would happen if you..."

Student revision protocol:
- How students respond to feedback in writing
- Revision log tracking changes made
- Self-assessment before submitting final draft

Peer feedback training sequence:
- Modeled examples of helpful vs. unhelpful feedback
- Sentence starters for constructive criticism
- How to receive feedback productively`,
      },
    ],
  },
  {
    title: 'Differentiation & Inclusive Teaching',
    icon: Lightbulb,
    description: 'Create equitable learning experiences with multiple entry points, Universal Design for Learning principles, and targeted support for every learner.',
    prompts: [
      {
        tag: 'Differentiation',
        title: 'Three-tier tiered lesson',
        prompt: `Create a tiered lesson on [topic] for a mixed-ability [grade level] class:

All students (core): [what every student will learn and do]

Tier 1 — support level:
- Simplified reading or visual scaffold
- Step-by-step task breakdown
- Concrete manipulatives or graphic organizer
- Partner or small-group structure

Tier 2 — grade level:
- Standard task with scaffolded support available if needed
- Collaborative activity with structured roles
- Guided notes or partially completed organizer

Tier 3 — extension:
- Open-ended inquiry question
- Application to a novel context or problem
- Research component or peer teaching opportunity

Formative check-in: how you will monitor each group and know when to intervene
Flexible grouping strategy: criteria for how groups will be formed (not by fixed ability)`,
      },
      {
        tag: 'Inclusion',
        title: 'UDL lesson redesign',
        prompt: `Apply Universal Design for Learning (UDL) principles to redesign this lesson: [describe current lesson]

UDL framework — provide multiple means of:

Representation (the WHAT of learning):
- Present the same content through text, audio, visual, and hands-on formats
- Build vocabulary and background knowledge proactively
- Highlight patterns, big ideas, and connections explicitly

Action & expression (the HOW of learning):
- Offer choice in how students respond: written, verbal, visual, kinesthetic
- Provide assistive technology options
- Allow varied pacing with check-in points

Engagement (the WHY of learning):
- Connect to student interests and real-world relevance
- Offer choice in challenge level and topic angle
- Build self-monitoring and metacognitive skills

Specific accommodations for: [list any student groups you're designing for]
Technology tools that support access across all three UDL pillars`,
      },
      {
        tag: 'ELL Support',
        title: 'English language learner scaffolding',
        prompt: `Design scaffolding for English language learners (ELLs) at [proficiency level: Beginning/Intermediate/Advanced] in a [subject + grade level] class:

Language objectives (alongside content objectives):
- Vocabulary: [5-8 key terms with visual supports]
- Language function: [describe, explain, argue, compare — specific to the task]
- Language structure: [sentence frames or grammar patterns to practice]

Scaffolding strategies by task:
- Reading: pre-teach vocabulary, bilingual glossary, annotated text, audio support
- Writing: sentence frames, paragraph frames, native language brainstorming
- Discussion: think-pair-share, structured academic conversation stems, visual prompts

Assessment adaptations:
- Extended time, visual supports, native language allowed for brainstorming
- How to assess content knowledge separate from language proficiency

Resources: recommended digital tools for vocabulary building and language support`,
      },
      {
        tag: 'Enrichment',
        title: 'Gifted learner extension tasks',
        prompt: `Design a differentiated enrichment track for advanced learners in a [subject + grade level] unit on [topic]:

Extension activities (after demonstrating mastery):
- Depth: explore the topic at greater complexity, nuance, or abstraction
- Breadth: connect to related fields, historical context, or interdisciplinary applications
- Acceleration: move into next grade-level content with appropriate support

Independent research project option:
- Self-selected question within the topic area
- Research process scaffold (question → sources → analysis → product)
- Presentation format options

Higher-order thinking tasks aligned to Bloom's Taxonomy levels 4-6:
- Analyze: [specific task]
- Evaluate: [specific task]
- Create: [specific task]

Compacting guide: how to pre-assess and determine what advanced learners can skip
Mentorship connections: how to link to community experts or online communities`,
      },
    ],
  },
  {
    title: 'Online & Hybrid Learning Design',
    icon: Brain,
    description: 'Build engaging asynchronous and synchronous learning experiences that maintain academic rigour and community regardless of physical distance.',
    prompts: [
      {
        tag: 'Asynchronous',
        title: 'Asynchronous learning module',
        prompt: `Design a self-paced asynchronous learning module for [topic] at [grade level or course]:

Module structure (estimated [X] hours to complete):

1. Hook (5-10 min): video, image, or question that creates curiosity
2. Core content delivery:
   - Pre-recorded mini-lecture (max 10 minutes)
   - Interactive reading with embedded questions
   - Worked examples with narrated explanations

3. Practice and application:
   - Low-stakes knowledge check with immediate feedback
   - Application activity: [describe]
   - Reflection prompt before moving forward

4. Discussion or collaboration:
   - Asynchronous discussion prompt (post + respond to 2 peers)
   - Collaborative document or shared artifact

5. Self-assessment: checklist of module objectives the student rates themselves on

Accessibility: captions, transcripts, screen-reader compatible
Instructor touchpoints: how you will monitor progress and reach out to struggling students`,
      },
      {
        tag: 'Synchronous',
        title: 'Engaging live online lesson',
        prompt: `Design a 60-minute synchronous online lesson on [topic] for [grade level] that maximizes engagement:

First 5 minutes — connection ritual:
- Warm-up question in chat or poll
- Brief social check-in before academic content

Minutes 5-20 — direct instruction (chunked):
- Mini-lecture segment (max 10 minutes before a break)
- Embedded check for understanding (poll, chat response, quick sketch)
- Think-pair-share in breakout rooms (5 minutes)

Minutes 20-45 — collaborative practice:
- Breakout room activity with clear task and timer
- Shared document, Jamboard, or Padlet for group output
- Gallery walk of group work via screen share

Minutes 45-55 — synthesis and closure:
- Whole class debrief: what patterns did you see across groups?
- Exit ticket via chat, poll, or brief form

Final 5 minutes — preview and energy close:
- What's coming next and why it matters
- Optional: shoutout or celebration of great thinking observed

Tech backup plan: what happens if a student loses connection`,
      },
      {
        tag: 'Hybrid',
        title: 'Hybrid classroom design',
        prompt: `Design a hybrid learning structure for [course] where some students are in person and others are remote simultaneously:

Classroom setup:
- Camera placement so remote students can see the board and discussion
- Audio solution so remote students can hear peer discussion clearly
- Participation bridge: how remote students contribute during in-person activities

Lesson design principles for hybrid:
- Lead with text and visuals, not just voice
- Use shared digital tools that work identically for both groups (not separate workflows)
- Assign an "in-room ambassador" for remote students each class

Activity adaptations:
- Discussion: simultaneous chat + verbal, with facilitation for both
- Group work: intentionally mixed in-person + remote groups
- Labs or hands-on: virtual equivalent available in real time

Assessment: same tasks for both groups, accessible formats for both
Known pitfalls to avoid: [list the 3 most common hybrid mistakes and how to prevent them]`,
      },
      {
        tag: 'Online',
        title: 'Digital community building',
        prompt: `Design a community-building strategy for an online class of [N] students at [level]:

Weeks 1-2 — foundation:
- Introductory activity: student introduction video or "about me" page
- Team formation: criteria for creating diverse groups of 4-5
- Community norms: collaborative process for students to set norms together

Ongoing structures:
- Weekly check-in ritual (Monday: 1 word/emoji; Friday: shoutout to a classmate)
- Discussion forums with real questions worth debating, not summary prompts
- Peer feedback partnerships that rotate monthly

Student-to-student connection:
- Study buddy system for students to use between sessions
- Optional social hours or interest-based channels
- Peer teaching or "I know this" helping structure

Instructor presence:
- Personalized feedback that references individual student contributions
- Office hours format that feels low-stakes and accessible
- How to identify isolated students early and reach out proactively`,
      },
    ],
  },
  {
    title: 'AI Integration in the Classroom',
    icon: GraduationCap,
    description: 'Teach students to use AI tools critically and responsibly while maintaining academic integrity and building skills that matter for the future.',
    prompts: [
      {
        tag: 'AI Literacy',
        title: 'AI literacy unit plan',
        prompt: `Design a 2-week AI literacy unit for [grade level]:

Week 1 — Understanding AI:
- Day 1: What is AI and how does it learn? (bias and training data)
- Day 2: AI in our daily lives — mapping AI tools we already use
- Day 3: How does a language model work? (non-technical explanation with demonstration)
- Day 4: AI limitations — hallucinations, bias, outdated information
- Day 5: Ethical implications — who benefits, who is harmed, who decides

Week 2 — Using AI critically:
- Day 1: Prompt engineering basics and how specificity changes output
- Day 2: Fact-checking AI — students verify 5 AI claims across 3 sources
- Day 3: AI for learning vs. AI for bypassing learning — case studies
- Day 4: Class AI use policy creation (student-led)
- Day 5: Reflection and portfolio piece on AI in their field of interest

Assessment: AI audit of a real tool they use, with written evaluation of limitations and risks`,
      },
      {
        tag: 'AI Tools',
        title: 'AI-assisted writing workshop',
        prompt: `Design a writing workshop that teaches students to use AI as a thinking partner rather than a replacement for writing:

Phase 1 — Generating ideas (AI as brainstorm partner):
- Students prompt AI for 10 different angles on their topic
- Students evaluate, critique, and select the angle that resonates with them
- Reflection: what did AI miss? What surprised you?

Phase 2 — Drafting (student writes, AI gives targeted feedback):
- Student writes first draft independently (no AI)
- Student prompts AI to identify logical gaps in their argument
- Student revises — must document what they accepted and rejected from AI feedback

Phase 3 — Revision (AI as specific tool, not editor):
- Use AI only to check clarity of a specific paragraph
- Not: "make this better." Instead: "what is unclear in this paragraph?"
- Final draft must be demonstrably different from AI's version

Assessment rubric includes: originality of argument, quality of revision choices, reflection on AI use
Academic integrity: all AI prompts and outputs submitted alongside final draft`,
      },
      {
        tag: 'Policy',
        title: 'Classroom AI use policy',
        prompt: `Create a practical, student-centered AI use policy for [course + grade level]:

Policy philosophy:
- Our goal is [describe learning objectives that AI might affect]
- We believe AI is [your stance: a tool, a collaboration partner, a potential shortcut to avoid]

Tier system for assignments:
- AI-free: assessments where your unassisted thinking is what we are measuring
- AI-supported: AI allowed as a tool; you must document how you used it
- AI-collaborative: AI is explicitly part of the learning task

Student responsibilities:
- Disclosure: how and when to declare AI use
- Attribution: how to credit AI assistance in submitted work
- Verification: fact-checking any AI-generated content before submission

Consequences for policy violation:
- First instance: learning conversation and redo opportunity
- Repeated instances: [describe escalation]

Policy revision process: how students can propose changes based on new tools and learning
Review date: policy will be revisited [X] and updated collaboratively`,
      },
      {
        tag: 'AI Tools',
        title: 'AI-enhanced research project',
        prompt: `Design a research project that deliberately develops AI-critical research skills for [grade level + subject]:

Project: research [topic or student-selected question in domain]

Stage 1 — Traditional research first:
- Students find 3 credible sources without AI (library, databases)
- Read, annotate, and summarize key arguments
- Form an initial thesis based only on human-authored sources

Stage 2 — AI-augmented research:
- Use AI to identify counterarguments they may have missed
- Ask AI to suggest additional search terms and source types
- Critically evaluate AI's suggestions: are these credible? Are these new?

Stage 3 — Synthesis and AI audit:
- Write the final paper or create the final product
- Submit an AI audit: list every AI tool used, prompt entered, and output evaluated
- Reflect: did AI improve your research? Where was it wrong or misleading?

Assessment equally weights:
- Quality of research and argument (50%)
- AI use audit and critical reflection (25%)
- Final product communication (25%)`,
      },
    ],
  },
  {
    title: 'Professional Development & Teacher Growth',
    icon: Users,
    description: 'Design meaningful professional development experiences that build teacher capacity, foster collaborative learning, and translate directly to classroom practice.',
    prompts: [
      {
        tag: 'PD Design',
        title: 'Professional learning community structure',
        prompt: `Design a monthly professional learning community (PLC) structure for [department or grade-level team]:

Session structure (90 minutes):

Opening (10 min):
- Review norms and focus on protocols
- Quick personal check-in (what's energising you? what's challenging you?)

Data review (25 min):
- Present student work or assessment data from the past month
- Use a structured protocol: what do we notice? what do we wonder?
- Identify 1-2 patterns that require instructional response

Collaborative planning (35 min):
- Design one instructional response to the identified pattern
- Assign: who will pilot the strategy, when, with what class
- Peer observation scheduling for the next month

Reflection and next steps (20 min):
- What did we decide? Who is responsible?
- Resource sharing: each person shares one tool or strategy
- Preview of next meeting's focus

Between sessions: observation and documentation protocol
Annual arc: how the PLC focus shifts across the year to cover all priority areas`,
      },
      {
        tag: 'Coaching',
        title: 'Instructional coaching cycle',
        prompt: `Design a 6-week instructional coaching cycle for a teacher working on [specific area: student engagement / formative assessment / questioning techniques]:

Week 1 — Establish baseline:
- Pre-conference: goals, current practice, evidence of impact
- Baseline classroom observation with specific look-fors
- Post-observation conversation using non-evaluative language

Weeks 2-4 — Practice and support:
- Teacher implements agreed strategy in two lessons
- Coach provides resources, models, or co-plans as needed
- Mid-point check-in: what's working, what needs adjustment

Week 5 — Peer observation:
- Teacher observes a colleague using the target strategy
- Debrief: what will you borrow, adapt, or leave behind?

Week 6 — Evidence and reflection:
- Final observation with student work or data as evidence
- Post-conference: growth documented, next learning goal identified
- Summary written together: what changed in student experience?

Coaching conversation protocols: specific questions for each stage
Documentation: observation notes format, teacher goal tracking sheet`,
      },
      {
        tag: 'Onboarding',
        title: 'New teacher onboarding program',
        prompt: `Design a first-year teacher onboarding program for [school type + subject/grade context]:

Pre-arrival (2 weeks before school starts):
- Welcome packet: school culture, key contacts, non-negotiables
- Classroom setup guidance and materials checklist
- Introduction to mentor teacher and first meeting agenda

Month 1 — Foundations:
- Week 1: school systems, policies, and student support resources
- Week 2: curriculum familiarisation and first unit planning session
- Week 3: classroom management philosophy and system design
- Week 4: first observation with mentor and structured debrief

Months 2-4 — Growth:
- Biweekly check-ins with mentor (not evaluative)
- Monthly new teacher cohort meeting to share challenges and strategies
- One supported observation in a colleague's classroom each month
- Help accessing department resources and curriculum materials

Support structures:
- Emergency contacts: who to call about what
- Common first-year challenges and how the school supports each
- Self-care and boundary-setting resources for new teachers

Year-end: portfolio reflection and goal-setting for year two`,
      },
      {
        tag: 'PD Design',
        title: 'AI skills training for educators',
        prompt: `Design a professional development workshop series on AI for educators at [school/institution]:

Workshop 1 — Foundations (3 hours):
- What AI tools are your colleagues already using (survey first)
- Live demonstration of 3-4 tools most relevant to your context
- Hands-on prompt writing practice with real lesson planning tasks
- Discussion: opportunities, concerns, and ethical considerations

Workshop 2 — Classroom applications (3 hours):
- Lesson planning with AI: compare before and after
- Assessment design: using AI to generate question banks and rubrics
- Differentiation: AI-generated tiered texts and modified tasks
- Academic integrity: how to set clear AI policies with students

Workshop 3 — Critical use and policy (2 hours):
- When AI output is wrong: fact-checking and verification practice
- Drafting a school-level AI use framework together
- Student-facing policy workshop: how to involve students in the conversation
- Ongoing learning community: tools, channels, and peer support structure

Between sessions: try one AI application in your classroom and report back
Resources: curated list of educator-focused AI tools, updated termly`,
      },
    ],
  },
];

const faqs = [
  { question: 'How can I adapt these prompts for different grade levels?', answer: 'Specify the grade level, reading level, and student characteristics when using any prompt. For younger grades, simplify vocabulary, break tasks into smaller steps, and add more scaffolding. For older or advanced students, increase complexity, add research components, and require abstract reasoning. Always tie the prompt output to your specific learning standards and student prior knowledge.' },
  { question: 'How do I maintain academic rigour when using AI-generated lesson plans?', answer: 'Always review AI-generated plans against your curriculum standards, assess whether activities genuinely develop targeted skills, and ensure assessments reflect what students need to know. Use AI to draft and iterate quickly, but treat the output as a first draft that you refine with your professional judgement and knowledge of your specific students.' },
  { question: 'What is the best way to use AI for formative assessment?', answer: 'AI is excellent for generating varied question stems, exit ticket templates, and misconception-diagnostic items. Provide AI with your learning objectives and ask for questions at different levels of Bloom\'s Taxonomy. Always review the generated questions for accuracy and appropriate difficulty before using them with students.' },
  { question: 'How can I ensure AI-generated content is culturally responsive?', answer: 'Be explicit in your prompts: specify the cultural backgrounds, communities, and perspectives you want represented. Ask AI to include diverse names, contexts, and viewpoints. Then critically review the output for stereotypes, inaccuracies, or missed nuance. Supplement with primary sources and community voices to ensure authenticity that AI alone cannot provide.' },
  { question: 'How should I handle student AI use and academic integrity?', answer: 'Establish a tiered policy that distinguishes between AI-free assessments (where independent thinking is the goal), AI-supported tasks (where disclosure and documentation is required), and AI-collaborative tasks (where AI is part of the learning design). Teach students how to use AI as a thinking partner rather than a shortcut, and require them to document and critically reflect on any AI they use.' },
  { question: 'Can I use these prompts to create IEP accommodation ideas?', answer: 'Yes, AI can generate accommodation and modification ideas as a starting point. However, IEP development must remain a collaborative process involving special educators, related service providers, families, and the student. Use AI to brainstorm options and create documentation templates, but ensure all accommodations are evidence-based and individually tailored.' },
  { question: 'What accessibility standards should AI-generated materials meet?', answer: 'Ensure all materials meet WCAG 2.1 Level AA standards: videos need captions and transcripts, images need alt text, documents must be screen-reader compatible, and information must not rely on colour alone. Test materials with assistive technology, provide content in multiple formats, and solicit feedback from students with disabilities.' },
  { question: 'How do I use AI effectively for professional development design?', answer: 'Use AI to generate session agendas, discussion protocols, and case studies tailored to your school\'s context. Provide AI with specific information about your staff\'s current practices, professional learning needs, and goals. Then refine the AI output based on your knowledge of your team\'s dynamics and culture.' },
  { question: 'How often should I update AI-generated curriculum materials?', answer: 'Review curriculum materials annually at minimum, and whenever student data reveals persistent misconceptions, standards change, or feedback indicates the content is not working. Use classroom evidence — student work, assessment results, and observation — to drive revisions rather than updating on a fixed calendar.' },
  { question: 'How do I integrate AI tools without increasing teacher workload?', answer: 'Start with one high-time-cost task where AI can help most, such as generating first drafts of rubrics or differentiated texts. Build AI into existing workflows rather than creating new ones. Share effective prompts across your team so everyone benefits from good prompt engineering. The goal is to save time on administrative tasks so you can invest more in high-impact human interactions with students.' },
];

export default function AIPromptsForEducationPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI Prompts for Education: Lesson Planning, Assessment & Differentiation',
    description: 'Comprehensive AI prompts for educators covering lesson planning, student assessment, differentiation, online learning design, AI classroom integration, and professional development.',
    author: { '@type': 'Organization', name: 'GPTPrompts.AI' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };

  return (
    <div className="min-h-screen text-white" style={{ background: '#060401' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 text-sm font-medium" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
            Education & Teaching
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Prompts for Education</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Unlock the full potential of AI in education. These structured prompts cover every stage of the teaching workflow — from lesson planning and assessment design to differentiation, online learning, and professional development.</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['Lesson Planning', 'Assessment', 'Differentiation', 'Online Learning', 'AI in Class', 'Prof Development'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs border text-gray-400" style={{ borderColor: borderCol }}>{tag}</span>
            ))}
          </div>
        </div>

        {sections.map((sec, si) => (
          <section key={si} className="mb-14">
            <div className="flex items-center gap-3 mb-2">
              <sec.icon size={22} style={{ color: accent }} />
              <h2 className="text-2xl font-bold text-white">{sec.title}</h2>
            </div>
            <p className="text-gray-400 mb-6 ml-9">{sec.description}</p>
            <div className="space-y-4">
              {sec.prompts.map((p, pi) => <CopyCard key={pi} {...p} />)}
            </div>
          </section>
        ))}

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((item, i) => <FAQ key={i} item={item} />)}
          </div>
        </section>

        <section className="mb-12 p-6 rounded-lg border" style={{ borderColor: borderCol, background: bgDark }}>
          <h3 className="text-lg font-semibold text-white mb-3">AI Tools for Educators — Quick Reference</h3>
          <p className="text-gray-400 text-sm mb-4">A curated overview of AI tools by teaching task, so you choose the right tool for each job.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { task: 'Lesson & unit planning', tools: 'ChatGPT, Claude, Gemini — strong at structured document generation with complex instructions' },
              { task: 'Differentiated text creation', tools: 'Diffit, Claude, ChatGPT — can rewrite texts at specified reading levels with vocabulary support' },
              { task: 'Quiz and assessment generation', tools: 'Quizizz AI, Kahoot AI, ChatGPT — generate question banks from any content you paste' },
              { task: 'Feedback on student writing', tools: 'Claude, ChatGPT — provide specific, rubric-aligned feedback when you share the rubric and student work' },
              { task: 'Image and diagram creation', tools: 'DALL-E, Midjourney, Canva AI — generate visuals for presentation slides and worksheets' },
              { task: 'Rubric design', tools: 'Claude, ChatGPT — generate rubrics from standards; specify Bloom\'s levels and number of performance tiers' },
              { task: 'Parent communication drafting', tools: 'ChatGPT, Claude — draft newsletters, progress notes, and meeting summaries; always personalise before sending' },
              { task: 'Professional development planning', tools: 'ChatGPT, Claude — generate workshop agendas, protocols, and case studies from your school context' },
            ].map((row, i) => (
              <div key={i} className="rounded border p-3" style={{ borderColor: borderCol }}>
                <div className="text-sm font-medium text-white mb-1">{row.task}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{row.tools}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t pt-8" style={{ borderColor: borderCol }}>
          <h3 className="text-lg font-semibold text-white mb-4">Related Prompts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'AI Prompts for Researchers', href: '/ai-prompts-for-researchers' },
              { name: 'AI Search Engine Prompts', href: '/ai-search-engine-prompts' },
              { name: 'AI Text Generator Prompts', href: '/ai-text-generator-prompts' },
              { name: 'AI Story Generator Prompts', href: '/ai-story-generator-prompts' },
              { name: 'AI Music Generator Prompts', href: '/ai-music-generator-prompts' },
              { name: 'ChatGPT Prompts PowerPoint', href: '/chatgpt-prompts-powerpoint' },
              { name: 'Manus AI Prompts', href: '/manus-ai-prompts' },
              { name: 'Perchance AI Prompts', href: '/perchance-ai-prompts' },
            ].map((link, i) => (
              <a key={i} href={link.href} className="px-4 py-3 rounded border text-gray-300 transition-colors text-sm font-medium" style={{ borderColor: borderCol }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = accent; (e.currentTarget as HTMLAnchorElement).style.color = accent; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = borderCol; (e.currentTarget as HTMLAnchorElement).style.color = '#d1d5db'; }}>{link.name}</a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
