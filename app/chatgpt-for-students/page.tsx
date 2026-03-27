"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react"

const accent = "#2563EB"

function PromptCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#2563EB]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] mb-2 inline-block">{tag}</span>}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }} className="shrink-0 p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#2563EB]/20 transition-colors">
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-400" />}
        </button>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed font-mono whitespace-pre-wrap">{prompt}</p>
    </div>
  )
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-[#1a1a1a] transition-colors">
        <span className="font-medium text-white pr-4">{q}</span>
        {open ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#2a2a2a] pt-4">{a}</div>}
    </div>
  )
}

export default function ChatGPTForStudentsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#2563EB]/30 text-[#2563EB]">Students Guide</span>
            <span className="text-xs text-gray-500">High School · College · Grad School</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">ChatGPT for Students:<br />The Complete Guide</h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            ChatGPT can cut your study time in half, help you understand complex topics instantly, and make you a better writer — without doing your homework for you. Here's exactly how to use it right.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Study smarter", "Understand anything faster", "Write better essays", "Ace exams"].map(b => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Study & Understanding */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Study & Understanding Prompts</h2>
          <p className="text-gray-400 mb-6">Use ChatGPT as your personal tutor — available 24/7, infinitely patient, and able to explain anything at your level.</p>
          <div className="grid gap-4">
            <PromptCard tag="Explain It" title="Explain Like I'm a Beginner" prompt={`I'm a [grade/year] student studying [subject]. I don't understand [concept]. Please explain it to me like I'm a complete beginner. Use a simple analogy first, then give me a clear explanation, then give me one concrete real-world example. After your explanation, give me 3 questions I can ask myself to check if I understood it.`} />
            <PromptCard tag="Deep Study" title="Break Down a Complex Topic" prompt={`I need to fully understand [topic] for my [subject] class. Please: (1) Give me the core idea in 2 sentences, (2) explain the 3-5 most important sub-concepts I need to know, (3) explain how they connect to each other, (4) tell me what most students get wrong about this topic, (5) give me a study roadmap — what should I learn first, second, third.`} />
            <PromptCard tag="Memorization" title="Create a Memory Aid" prompt={`Help me memorize [list of things / concept / formula] for my exam. Create: (1) a memorable acronym or mnemonic device, (2) a short story or vivid image that links all the concepts, (3) 5 practice questions that test if I really know it (not just recognize it). Include the answers at the end.`} />
            <PromptCard tag="Socratic" title="Quiz Me Until I Get It Right" prompt={`I'm studying [topic]. Quiz me with increasingly difficult questions. Start easy, get harder based on my answers. If I get something wrong, don't just tell me the answer — ask a follow-up question that helps me figure out why I was wrong. Keep going until I've answered 10 questions correctly. Start with the first question now.`} />
          </div>
        </div>
      </section>

      {/* Essay Writing */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Essay Writing Prompts</h2>
          <p className="text-gray-400 mb-6">Use ChatGPT to improve your writing — not to write it for you. These prompts help you think, outline, and refine your own ideas.</p>
          <div className="grid gap-4">
            <PromptCard tag="Brainstorm" title="Generate Thesis Ideas" prompt={`I'm writing an essay about [topic] for my [class]. The essay is [length] and aimed at [audience]. I need a strong thesis statement. Please give me 5 different possible thesis angles — ranging from conventional to more original and surprising. For each one, briefly explain what arguments I'd need to support it. I'll pick the one that excites me most.`} />
            <PromptCard tag="Outline" title="Build a Strong Essay Outline" prompt={`I'm writing a [length] essay on this thesis: "[your thesis]". Help me build a strong outline. For each body paragraph, give me: the main claim, 2-3 supporting points or evidence types I should find, a potential counterargument I should address, and a transition idea to the next paragraph. Make the structure logical and the argument build progressively.`} />
            <PromptCard tag="Feedback" title="Get Detailed Writing Feedback" prompt={`Please review this essay paragraph and give me specific, actionable feedback: [paste paragraph]. Focus on: (1) Is the argument clear and logical? (2) Is there a topic sentence? (3) Does the evidence actually support the claim? (4) Is the writing clear or are there confusing sentences? (5) What's the single most important thing I should fix? Don't rewrite it — help me understand how to improve it myself.`} />
            <PromptCard tag="Citations" title="Understand a Source for Your Paper" prompt={`Here is a quote/passage from a source I'm using: "[paste quote]". Help me understand it better so I can use it in my essay about [topic]. Explain: what the author is arguing, what assumptions underlie this claim, potential weaknesses in this argument, and how I might connect it to my thesis: "[your thesis]". Don't write my paragraph — help me understand the source deeply.`} />
          </div>
        </div>
      </section>

      {/* Exam Prep */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Exam Prep Prompts</h2>
          <p className="text-gray-400 mb-6">Turn ChatGPT into your personal exam coach. These prompts are designed for the days and hours before a test.</p>
          <div className="grid gap-4">
            <PromptCard tag="Exam Prep" title="Create a Study Guide from Notes" prompt={`Here are my notes from [class/chapter]: [paste notes]. Turn these into a structured study guide. Include: key terms and definitions, the most important concepts (summarized clearly), connections between ideas, and 10 practice exam questions with answers. Format it so I can use it to review in 30 minutes.`} />
            <PromptCard tag="Exam Prep" title="Predict Likely Exam Questions" prompt={`I have an exam in [subject] covering [topics]. Based on these topics, predict the 10 most likely exam questions my professor would ask. Include a mix of: factual recall questions, conceptual understanding questions, and application/analysis questions. For each question, give me a brief explanation of what a strong answer would include.`} />
            <PromptCard tag="Exam Prep" title="Speed Review — 30 Minutes Before" prompt={`I have [subject] exam in 30 minutes and need to quickly review [topic]. Give me: the 5 most critical things I absolutely must know, the most common mistakes students make, 3 quick memory tricks for the hardest parts, and any formulas or key terms I need to have memorized. Keep it fast and scannable.`} />
          </div>
        </div>
      </section>

      {/* Math & STEM */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Math & STEM Prompts</h2>
          <p className="text-gray-400 mb-6">ChatGPT can walk through problems step by step and help you understand the method, not just the answer.</p>
          <div className="grid gap-4">
            <PromptCard tag="Math" title="Walk Through a Problem Step by Step" prompt={`I'm stuck on this [math/physics/chemistry] problem: [paste problem]. Don't just give me the answer. Walk me through it step by step, explaining WHY we do each step (not just what to do). If there are multiple approaches, show me the most intuitive one first. At the end, tell me what concept or formula this problem is really testing so I can recognize similar problems on my exam.`} />
            <PromptCard tag="STEM" title="Explain a Formula Intuitively" prompt={`I need to really understand [formula/equation], not just memorize it. Please: (1) explain in plain English what this formula is saying, (2) explain where it comes from / why it works, (3) give me 2 concrete examples with numbers, (4) tell me when to use it and when NOT to use it, (5) give me 2 practice problems to test myself.`} />
          </div>
        </div>
      </section>

      {/* Academic Integrity */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Using ChatGPT Responsibly</h2>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
            <p className="text-gray-300 leading-relaxed mb-4">Using AI ethically in school is about using it to <strong className="text-white">learn faster and think better</strong>, not to skip thinking altogether. Here's the line:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-950/30 border border-green-800/30 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold text-sm mb-2">✅ Smart & Ethical</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Using it to understand concepts</li>
                  <li>• Getting feedback on your own writing</li>
                  <li>• Generating practice questions</li>
                  <li>• Brainstorming ideas you then develop</li>
                  <li>• Breaking down complex readings</li>
                </ul>
              </div>
              <div className="bg-red-950/30 border border-red-800/30 rounded-lg p-4">
                <h4 className="text-red-400 font-semibold text-sm mb-2">❌ Avoid</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Submitting AI-written essays as your own</li>
                  <li>• Using AI on exams (unless allowed)</li>
                  <li>• Copying answers without understanding</li>
                  <li>• Violating your school's AI policy</li>
                  <li>• Using AI to deceive your professor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">ChatGPT for Students FAQ</h2>
          <div className="space-y-3">
            <FAQ q="Is using ChatGPT cheating?" a="It depends on how you use it and your school's policy. Using ChatGPT to understand concepts, get feedback on your writing, or generate practice questions is generally considered a legitimate study aid. Submitting AI-generated text as your own work without disclosure is academic dishonesty. Always check your institution's specific AI policy." />
            <FAQ q="Can professors tell if I used ChatGPT?" a="AI detection tools exist (like Turnitin's AI detector, GPTZero, etc.) but they're imperfect and produce false positives. More importantly, professors who know your writing can often sense when it doesn't sound like you. The safest approach: use ChatGPT to help you think and learn, then write in your own voice." />
            <FAQ q="Which is better for students — ChatGPT or Claude?" a="Both are excellent study tools. ChatGPT (especially GPT-4o) is great for math, coding, and broad knowledge. Claude is often preferred for nuanced writing feedback, longer document analysis, and more careful reasoning. Many students use both depending on the task." />
            <FAQ q="Is ChatGPT always accurate for studying?" a="No — ChatGPT can confidently give wrong answers, especially for specific facts, recent events, or highly technical topics. Always verify important information against your textbook, lecture notes, or reliable sources. Use it to understand concepts, not as your sole source of truth." />
            <FAQ q="How can ChatGPT help with college applications?" a="ChatGPT can help you brainstorm essay topics, give feedback on your drafts, help you articulate your experiences, and improve clarity. It should NOT write your essays for you — admissions officers read thousands of essays and are getting better at spotting AI-generated content. Your authentic voice is your biggest asset." />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">More AI Study Guides</h2>
          <p className="text-gray-400 mb-6">Explore 188+ free prompt guides for every subject and AI tool.</p>
          <Link href="/website-links" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: accent }}>
            Browse All Guides →
          </Link>
        </div>
      </section>
    </div>
  )
}
