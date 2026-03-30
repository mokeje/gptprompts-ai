'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, BookMarked, Brain, FlaskConical, BookOpen, GraduationCap } from 'lucide-react';

const accent = '#84cc16';

interface CopyCardProps {
  title: string;
  prompt: string;
  tag: string;
}

function CopyCard({ title, prompt, tag }: CopyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-4 p-4 border rounded-lg border-[#1e2a0f] hover:border-[#84cc16] transition-colors bg-[#070a04]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>{tag}</span>
      </div>
      <p className="text-white text-sm font-medium mb-2">{title}</p>
      <pre className="text-gray-400 text-sm mb-3 leading-relaxed whitespace-pre-wrap font-sans">{prompt}</pre>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors border"
        style={{
          color: copied ? accent : '#888',
          borderColor: copied ? accent : '#333',
        }}
      >
        {copied ? <><Check size={14} />Copied!</> : <><Copy size={14} />Copy</>}
      </button>
    </div>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

function FAQ({ item }: { item: FAQItem }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-3 border border-[#1e2a0f] rounded-lg overflow-hidden hover:border-[#84cc16] transition-colors">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between bg-[#070a04] hover:bg-[#0c0f07] transition-colors"
      >
        <h3 className="font-semibold text-white text-left text-sm">{item.question}</h3>
        {expanded
          ? <ChevronUp size={18} style={{ color: accent }} className="flex-shrink-0" />
          : <ChevronDown size={18} className="flex-shrink-0 text-gray-500" />}
      </button>
      {expanded && (
        <div className="p-4 bg-[#040603] border-t border-[#1e2a0f] text-gray-300 text-sm leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

const faqItems: FAQItem[] = [
  {
    question: 'How can I use AI for homework without just getting the answer handed to me?',
    answer: 'Use AI as a tutor, not an answer machine. Instead of "What is the answer to problem 5?", ask "Explain the concept behind this type of problem" or "Check my working and tell me where I went wrong." Ask for hints rather than solutions, and always try the problem yourself first. The goal is building understanding — AI is most useful when you engage with its explanations critically rather than copying outputs.',
  },
  {
    question: 'Is using AI for homework considered cheating?',
    answer: 'It depends on how you use it and your school\'s policies. Using AI to understand concepts, check your reasoning, get feedback on drafts, or explore ideas is generally appropriate learning support — similar to using a textbook or asking a teacher. Submitting AI-generated work as your own without disclosure is academic dishonesty. Always check your school\'s AI use policy. When in doubt, disclose: "I used AI to help me understand this concept, then wrote this myself."',
  },
  {
    question: 'What subjects is AI most helpful for when studying?',
    answer: 'AI is strong across most subjects but particularly valuable for: mathematics (step-by-step problem walkthroughs), essay writing (structure and feedback on drafts), science (explaining concepts and lab report guidance), coding (debugging and explanation), and language learning (grammar, translation help, and practice). AI is less reliable for very recent events, highly specialised academic fields, or anything requiring original primary research — always verify against authoritative sources.',
  },
  {
    question: 'How do I get AI to explain something I don\'t understand in a way that clicks?',
    answer: 'Be specific about what you don\'t understand: "I understand X but I\'m confused about why Y leads to Z." Ask for multiple explanations: "Explain this using an analogy", "Explain it like I\'m 12", "Explain it with a real-world example." Ask it to break a concept into smaller steps. If an explanation doesn\'t click, say "That didn\'t help — try a different approach." Most concepts can be explained in multiple ways — keep asking until one resonates.',
  },
  {
    question: 'Can AI help me improve my essay writing grades?',
    answer: 'Yes, used well. Write your draft first, then use AI to critique it: "What are the three weakest parts of this argument?" or "Does my thesis statement clearly reflect what the essay argues?" Ask for feedback on structure, argument strength, and evidence use — not just grammar. Apply the feedback to your own revision rather than asking AI to rewrite sections. Over time, this process builds the skills to write stronger essays independently.',
  },
  {
    question: 'How should I use AI to prepare for exams?',
    answer: 'AI makes an excellent study partner. Ask it to quiz you on a topic: "Ask me 10 questions on the causes of World War 1, wait for my answer, then tell me what I got right and wrong." Ask it to create practice problems with increasing difficulty. Use it to explain topics you\'ve marked as weak in your notes. Ask it to create a condensed study guide from your notes. Explain concepts back to AI and ask if your explanation is correct — this is active recall, which research shows improves retention significantly more than passive re-reading.',
  },
  {
    question: 'What if my teacher finds out I used AI for homework?',
    answer: 'If you used AI appropriately as a learning aid (understanding concepts, getting feedback on your own work), be honest about it if asked. Most teachers distinguish between using AI to learn and using AI to cheat. If you used AI to generate work you submitted as your own, that\'s a more serious situation that requires an honest conversation with your teacher. Schools are still developing AI policies — being proactive and transparent is always better than concealment.',
  },
  {
    question: 'How do I fact-check AI when doing research for schoolwork?',
    answer: 'AI can make confident-sounding mistakes, especially on specific facts, statistics, dates, and recent events. For any factual claim in a school assignment, verify against primary sources: textbooks, peer-reviewed articles, official government or organisational websites, library databases. Use AI to help you understand context and structure your thinking, then verify specific claims independently. Cite your primary sources in your work, not AI. Never cite AI as a source in academic work.',
  },
  {
    question: 'Can AI help me understand and write better code for computer science assignments?',
    answer: 'Yes — but with the same principle: understand, don\'t copy. Ask AI to explain what a specific piece of code does line by line. Ask it to explain why an error occurs and the concept behind the fix, not just the fix itself. Use it to understand data structures, algorithms, and language syntax. Ask "what does this type of function do and when would I use it?" before asking for code examples. If you copy code from AI without understanding it, you\'ll struggle in exams and future assignments.',
  },
  {
    question: 'How do I balance AI help with developing independent thinking skills?',
    answer: 'Set a rule: always attempt a problem or write a draft yourself before asking AI for help. When you do use AI, engage actively — challenge its explanations, ask for evidence, compare its answers to your textbook. Gradually reduce how much you lean on AI as topics become familiar. Test yourself regularly without AI to measure real understanding. The goal is to use AI to accelerate learning curves, not to avoid the learning curve entirely. Your independent thinking is what gets tested in exams.',
  },
];

export default function AIHomeworkPromptsPage() {
  return (
    <div className="min-h-screen bg-[#040603]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Homework Prompts: Learn Smarter Across Every Subject',
            description: 'Expert AI homework prompts for students covering essay writing, mathematics, science, coding, literature, and exam preparation. Learn more effectively with AI as your study partner.',
            image: 'https://gptprompts.ai/homework-og.jpg',
            datePublished: '2026-03-28',
            dateModified: '2026-03-28',
            author: { '@type': 'Organization', name: 'GPT Prompts AI' },
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
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="border-b border-[#1e2a0f] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <BookMarked size={32} style={{ color: accent }} />
            <h1 className="text-4xl font-bold text-white">AI Homework Prompts</h1>
          </div>
          <p className="text-gray-400 text-lg mb-4">
            Study smarter with AI. Expert prompts for essay writing, maths, science, coding, literature, and exam prep — designed to help you genuinely learn, not just copy answers.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Essays', 'Maths', 'Science', 'Exam Prep'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium border" style={{ borderColor: accent, color: accent }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Section 1: Essays */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookMarked size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Essay & Academic Writing</h2>
          </div>
          <CopyCard
            tag="Essay Writing"
            title="Build a strong thesis and essay structure"
            prompt={`I'm writing an essay on [topic] for [subject/class level]. My assignment is: [paste assignment brief].
Help me:
1. Draft 3 possible thesis statements (strong, arguable, specific)
2. For the thesis I choose, outline the main body paragraphs — what argument each should make
3. Identify the counterargument I should address and where it fits in the essay
4. Suggest 2-3 types of evidence I should look for to support each argument
I'll write the essay myself — I just need help with the structure and direction.`}
          />
          <CopyCard
            tag="Essay Feedback"
            title="Get critical feedback on a draft essay"
            prompt={`Here is a draft of my essay on [topic]: [paste draft]
Please give me specific feedback on:
1. Thesis strength — is my argument clear and arguable?
2. Paragraph structure — does each paragraph have a clear topic sentence, evidence, and analysis?
3. Argument logic — are there any weak links or unsupported claims?
4. Evidence use — am I explaining how the evidence supports my argument (not just quoting)?
5. Conclusion — does it synthesise my argument rather than just repeating it?
Point to specific sentences or paragraphs. Be honest — I need to improve this before submission.`}
          />
          <CopyCard
            tag="Research"
            title="Research question and source strategy"
            prompt={`I need to research [topic] for a [length]-word assignment for [subject].
Help me:
1. Break the topic into 3-4 sub-questions I need to answer
2. Identify what types of sources would be most credible for each sub-question (academic journals, government reports, primary sources, etc.)
3. Suggest 4-5 search terms I can use in library databases or Google Scholar
4. Explain what makes a source credible vs. unreliable for academic use
5. Flag any common misconceptions about this topic I should be careful not to repeat`}
          />
          <CopyCard
            tag="Citations"
            title="Citation and referencing guidance"
            prompt={`I need to cite the following source in [Harvard / APA / MLA / Chicago] format:
Source details: [Title, Author, Year, Publisher/Journal, URL if online, Date accessed if online]
Please:
1. Give me the correctly formatted in-text citation
2. Give me the correctly formatted bibliography/reference list entry
3. Explain what information I need if any of the above is missing
4. Tell me the most common mistakes students make with this citation style and how to avoid them`}
          />
        </section>

        {/* Section 2: Mathematics */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Brain size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Mathematics & Problem Solving</h2>
          </div>
          <CopyCard
            tag="Maths Help"
            title="Step-by-step concept explanation"
            prompt={`I'm stuck on [maths concept — e.g., "solving simultaneous equations" / "integration by parts" / "probability with Bayes' theorem"].
Please:
1. Explain the concept in plain English before any formulas
2. Walk through one worked example step by step, explaining the reason for each step
3. Point out the most common mistakes students make with this concept
4. Give me a slightly harder practice problem I can try myself (don't solve it — I'll attempt it first)
Level: [GCSE / A-Level / University first year]`}
          />
          <CopyCard
            tag="Maths Checking"
            title="Check my working and explain my mistake"
            prompt={`I attempted this maths problem but I think my answer is wrong. Can you check my working?
Problem: [paste the problem]
My working: [paste your attempt step by step]
My answer: [your answer]
Please:
1. Tell me which step I went wrong on (don't just give me the answer)
2. Explain why that step was wrong conceptually
3. Guide me to correct it rather than doing it for me
4. If my method was right but I made an arithmetic error, confirm that`}
          />
          <CopyCard
            tag="Word Problems"
            title="Break down a complex word problem"
            prompt={`I'm struggling to know how to start this word problem: [paste the problem]
Help me by:
1. Identifying what the problem is actually asking me to find
2. Listing the information given and what variables to assign
3. Suggesting which mathematical concept or formula applies here
4. Outlining the approach without solving it — I want to attempt it myself first
5. Asking me a question that will help me think through the first step`}
          />
          <CopyCard
            tag="Exam Practice"
            title="Generate practice problems by difficulty"
            prompt={`I'm revising [maths topic] for an upcoming [exam name/level] exam.
Please create 5 practice problems on this topic:
- 2 at a basic/straightforward level
- 2 at a medium difficulty (applying the concept in a slightly different context)
- 1 at a challenging level (multi-step or requires combining concepts)
Don't give me the answers yet — I'll attempt them and then ask you to mark my work.
After I've tried them, give me the mark scheme with worked solutions.`}
          />
        </section>

        {/* Section 3: Science */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Science & Lab Reports</h2>
          </div>
          <CopyCard
            tag="Lab Report"
            title="Structure a science lab report"
            prompt={`I need to write a lab report for the following experiment: [describe experiment briefly].
My results: [paste or describe your data/observations]
Help me structure this report with guidance for each section:
1. Title: what makes a good lab report title?
2. Hypothesis: how do I write a testable hypothesis in "if...then...because" format?
3. Method: what level of detail do I need for reproducibility?
4. Results: how should I present this type of data (table, graph, both)?
5. Analysis: how do I connect my results to my hypothesis?
6. Evaluation: how do I discuss sources of error and limitations?
7. Conclusion: what's the difference between conclusion and analysis?`}
          />
          <CopyCard
            tag="Science Concepts"
            title="Explain a difficult science concept"
            prompt={`I'm struggling to understand [science concept] in [Biology / Chemistry / Physics].
Can you:
1. Explain it in plain English without jargon first
2. Use an analogy that makes it intuitive (comparing it to something familiar in everyday life)
3. Explain why this concept matters — what does it help us understand or do?
4. Describe what's happening at the molecular/atomic/particle level (if relevant)
5. Give me 2 exam-style questions on this topic so I can test my understanding
Level: [GCSE / A-Level / Year 9-10]`}
          />
          <CopyCard
            tag="Data Analysis"
            title="Analyse science experiment data"
            prompt={`I ran an experiment and collected the following data: [paste your data table]
Please help me:
1. Identify the trend or pattern in the data
2. Suggest the most appropriate graph type and explain what goes on each axis
3. Point out any anomalous results and explain possible causes
4. Calculate [specific value — e.g., mean, percentage change, rate of reaction] and show the working
5. Suggest what this data tells us in relation to the original hypothesis
6. Identify the main sources of error that could have affected my results`}
          />
          <CopyCard
            tag="Exam Prep"
            title="Science exam question technique"
            prompt={`Here is an exam question from [subject] at [level]: [paste question]
Here is my answer: [paste your answer]
Please mark it against what a model answer would include:
1. What did I get right?
2. What key points did I miss?
3. Are there command words in the question (describe, explain, evaluate, compare) I didn't respond to correctly?
4. How would a top-grade answer differ from mine?
5. Write the first 2 sentences of a model answer to show me the opening structure`}
          />
        </section>

        {/* Section 4: Literature & Language */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Literature & Language Learning</h2>
          </div>
          <CopyCard
            tag="Literary Analysis"
            title="Analyse a text for literary devices"
            prompt={`Here is a passage from [book/poem/play] by [author]: [paste passage]
Please help me analyse it by identifying:
1. Literary devices used (metaphor, simile, imagery, foreshadowing, irony, etc.) — give specific examples
2. What effect each device creates on the reader
3. How the language connects to the theme of [theme you're studying]
4. What the author's likely purpose is in this passage
5. How this passage relates to the character development or plot at this point
I'll write the analysis myself — I need help spotting the devices and understanding their significance.`}
          />
          <CopyCard
            tag="Language Learning"
            title="Grammar explanation and practice"
            prompt={`I'm learning [French / Spanish / German / other language] and I'm confused about [grammar concept — e.g., "the subjunctive tense" / "reflexive verbs" / "adjectival agreement"].
Please:
1. Explain the rule in plain English
2. Show me 5 simple example sentences with the grammar highlighted
3. Explain the most common mistake English speakers make with this grammar point
4. Give me 5 sentences where I have to fill in the correct form (give them to me as a quiz)
5. Tell me the key trigger phrases or situations that signal I need to use this grammar`}
          />
          <CopyCard
            tag="Poetry"
            title="Poetry analysis framework"
            prompt={`I need to analyse this poem for a [GCSE / A-Level / class] assignment: [paste poem or title/author]
Walk me through analysis using the SMILE / SOAPSTONE framework (or the one my school uses):
- Structure: form, stanzas, line length, enjambment
- Meaning: what the poem is about on the surface and deeper levels
- Imagery: key images and their effect
- Language: word choice, tone, patterns
- Effect on reader: emotional impact

For each element, ask me what I notice first so I can try before you explain. Don't just give me the full analysis — guide me through it.`}
          />
          <CopyCard
            tag="Reading Comprehension"
            title="Close reading question technique"
            prompt={`Here is a reading comprehension question for the following text: [paste text excerpt]
Question: [paste the question]
My answer: [paste your attempt]
Feedback I need:
1. Did I answer what the question actually asked?
2. Did I use evidence from the text (direct quotes or references)?
3. Did I explain the effect of the evidence, or just quote it?
4. What additional point could I make to get a higher mark?
5. For inference questions — am I reading between the lines enough, or too much?`}
          />
        </section>

        {/* Section 5: Study Skills & Exam Prep */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Study Strategies & Exam Preparation</h2>
          </div>
          <CopyCard
            tag="Study Planning"
            title="Personalised revision schedule"
            prompt={`I have the following exams coming up: [list subjects and dates]
My weakest areas are: [list topics you find hardest]
Available study time: [hours per day / week]
Time until first exam: [number of days/weeks]

Create a revision schedule that:
1. Prioritises weak topics without ignoring strong ones
2. Builds in spaced repetition (revisiting topics multiple times over time)
3. Alternates subjects to avoid fatigue
4. Includes past paper practice in the final week
5. Leaves time for rest (overloading doesn't help retention)
Format it as a weekly plan I can follow.`}
          />
          <CopyCard
            tag="Active Recall"
            title="Convert notes into active recall practice"
            prompt={`Here are my notes on [topic]: [paste your notes]
Convert them into active recall study materials:
1. 10 flashcard-style questions (question on front, answer on back) covering the key facts
2. 3 open-ended questions that require me to explain a concept in my own words
3. A concept map outline showing how the main ideas connect
4. 2 exam-style questions that test application of the concepts
5. A "5-minute summary" of the topic I can read to quickly refresh my memory before the exam
I'll use these to test myself rather than just re-reading the notes.`}
          />
          <CopyCard
            tag="Exam Technique"
            title="General exam technique guidance"
            prompt={`I'm preparing for [subject] at [level — GCSE/A-Level/University]. Help me with exam technique:
1. Time management: how should I allocate time across questions?
2. Long-answer questions: what structure should I use? (PEEL, PEA, etc.)
3. Multiple-choice: what strategies help when I'm not sure of an answer?
4. Calculation questions: how do I show working to maximise marks even if my final answer is wrong?
5. The 3 most common mistakes students make in this subject's exams, and how to avoid them
6. How to use reading time (if applicable) effectively`}
          />
          <CopyCard
            tag="Weak Areas"
            title="Diagnose and address a knowledge gap"
            prompt={`I keep getting [specific topic] wrong in practice papers. My understanding is: [describe what you think you know].
Please:
1. Ask me 5 diagnostic questions to pinpoint exactly where my misunderstanding is
2. After I answer them, identify the specific gap in my knowledge
3. Re-explain the concept focusing on the part I'm getting wrong
4. Give me a different analogy or approach than the one in my textbook
5. Create 3 very targeted practice questions on just the part I find hardest

The goal is to turn this weak spot into something I'm confident about.`}
          />
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div>
            {faqItems.map((item, i) => (
              <FAQ key={i} item={item} />
            ))}
          </div>
        </section>

        {/* Related Pages */}
        <section className="border-t border-[#1e2a0f] pt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Related Prompts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'AI Prompts for Education', href: '/ai-prompts-for-education' },
              { name: 'AI Study Prompts', href: '/ai-study-prompts' },
              { name: 'AI Prompts for Teachers', href: '/ai-prompts-for-teachers-tools' },
              { name: 'AI Prompts for Researchers', href: '/ai-prompts-for-researchers' },
              { name: 'ChatGPT for Students', href: '/chatgpt-for-students' },
              { name: 'Essay Prompts', href: '/essay-prompts' },
              { name: 'AI Writing Prompts', href: '/ai-writing-prompts' },
              { name: 'AI Summarizer Prompts', href: '/ai-summarizer-prompts' },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="px-4 py-3 rounded border border-[#1e2a0f] text-gray-300 hover:border-[#84cc16] hover:text-[#84cc16] transition-colors text-sm font-medium"
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
