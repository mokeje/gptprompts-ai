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
      <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap">{prompt}</p>
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

export default function AIHomeworkHelperPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#2563EB]/30 text-[#2563EB]">AI Study Tool</span>
            <span className="text-xs text-gray-500">ChatGPT · Claude · Gemini</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            AI Homework Helper:<br />Learn Smarter, Not Just Faster
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            The best AI homework helpers don't just give you answers — they help you actually understand the material. These prompts are designed to get explanations, work through problems step-by-step, and build real understanding so you can ace your tests, not just your assignments.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Step-by-step explanations", "Math & STEM", "Essays & writing", "Test prep", "Study guides"].map(b => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How to use AI for homework */}
      <section className="py-12 px-4 border-b border-[#1a1a1a] bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">The Right Way to Use AI for Homework</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {[
              { n: "✅", t: "Ask for explanations", d: "Instead of just getting the answer, ask the AI to explain the concept or walk through the steps. This is what makes the difference on tests." },
              { n: "✅", t: "Check your work", d: "Do the problem yourself first, then use AI to verify your answer and explain any mistakes. This builds actual understanding." },
              { n: "⚠️", t: "Don't just copy answers", d: "Submitting AI-generated work as your own is academic dishonesty. Use AI as a tutor, not a ghostwriter. You learn nothing and risk serious consequences." },
            ].map(s => (
              <div key={s.n} className="flex gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                <div className="text-lg shrink-0">{s.n}</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{s.t}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Math & Science */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Math & Science Prompts</h2>
          <p className="text-gray-400 mb-6">Get step-by-step breakdowns that teach you the method, not just the answer.</p>
          <div className="grid gap-4">
            <PromptCard tag="Math" title="Walk Me Through a Problem" prompt={`I need help with this math problem: [paste problem here]

Please:
1. First, tell me what TYPE of problem this is and what concept it's testing
2. Walk me through the solution step by step — show every step, don't skip anything
3. Explain WHY each step is done, not just what to do
4. At the end, give me a quick summary of the method so I can use it on similar problems
5. Give me one similar practice problem I can try on my own

I want to understand this, not just get the answer.`} />
            <PromptCard tag="Science" title="Explain a Concept I'm Stuck On" prompt={`I'm studying [topic] for [class/grade level] and I'm confused about [specific concept].

Please explain it to me:
1. Start with the simplest possible explanation (like I'm hearing it for the first time)
2. Give me a real-world example or analogy that makes it click
3. Then go deeper — explain the actual mechanism/math/process
4. Tell me what mistakes students commonly make with this concept
5. Give me 2-3 practice questions that test whether I really understand it

Check my understanding by asking me a question at the end.`} />
            <PromptCard tag="Check Work" title="Check My Answer and Explain Mistakes" prompt={`Here's a problem: [paste problem]

Here's my work and answer: [paste your solution]

Please:
1. Tell me if my final answer is correct
2. If wrong, find EXACTLY where I made the mistake — show me the specific step
3. Explain why my approach was wrong (the conceptual misunderstanding, not just the arithmetic)
4. Show me the correct solution
5. Tell me what I should review to avoid this mistake in the future`} />
          </div>
        </div>
      </section>

      {/* Reading & Writing */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Reading & Writing Prompts</h2>
          <p className="text-gray-400 mb-6">Get help analyzing texts and improving your writing — without writing it for you.</p>
          <div className="grid gap-4">
            <PromptCard tag="Literature" title="Analyze a Text or Book Chapter" prompt={`I need to analyze [book/chapter/passage] for [class]. Here's the passage/section: [paste text or describe it]

Help me analyze it by:
1. Identifying the main themes and what the author is saying about them
2. Pointing out key literary devices (metaphor, symbolism, foreshadowing, etc.) and what they mean
3. Explaining how this passage connects to the larger work's themes
4. Identifying what the author's purpose or argument is

Don't write my essay for me — give me the analysis points and evidence I can build my own argument from.`} />
            <PromptCard tag="Essay" title="Give Feedback on My Draft" prompt={`Here's my draft essay: [paste your essay]

My assignment is: [describe the prompt/requirements]

Please give me feedback on:
1. Thesis — is it clear and arguable? How could it be stronger?
2. Structure — does the essay flow logically? Are there awkward transitions?
3. Evidence — is each point backed up? Are there any unsupported claims?
4. Analysis — am I explaining HOW the evidence proves my point, or just describing?
5. The 2 things I should prioritize fixing before I submit

Don't rewrite my essay — help me improve my own draft.`} />
            <PromptCard tag="Research" title="Find Evidence for My Argument" prompt={`I'm writing an essay arguing that [your thesis/argument] for [class/assignment].

Help me:
1. Identify the 3-4 strongest types of evidence that would support this argument
2. Suggest specific things to look for in primary/secondary sources
3. Explain what counterarguments I'll need to address (and how to handle them)
4. Tell me what would make this argument FAIL — what evidence would disprove it?

I'll find the actual sources myself — I just need to know what to look for.`} />
          </div>
        </div>
      </section>

      {/* Test Prep */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Test & Exam Prep Prompts</h2>
          <p className="text-gray-400 mb-6">Use AI to quiz yourself, find your weak spots, and build a study plan.</p>
          <div className="grid gap-4">
            <PromptCard tag="Quiz Me" title="Active Recall Practice" prompt={`I'm studying [subject] and I have a test on [topics] coming up.

Quiz me using active recall:
1. Ask me a question about one of the topics
2. Wait for my answer (I'll type it)
3. Tell me if I was right or wrong and explain what I missed
4. Ask the next question

Keep going until I've covered all the main concepts. Track which topics I'm struggling with and give me extra questions on those at the end. Give me a score and a study priority list when we're done.`} />
            <PromptCard tag="Study Guide" title="Build Me a Study Guide" prompt={`I have a [test/exam] on [topics] in [timeframe]. My class is [subject] at [grade/level].

Build me a study guide that includes:
1. A list of all the key concepts I need to know (organized by topic)
2. For each concept: a 1-2 sentence explanation and why it matters
3. The formulas, vocabulary, or facts I need to memorize
4. The 5 most likely question types or themes that will appear
5. A suggested study schedule for the time I have left

Then ask me which section I want to start reviewing first.`} />
          </div>
        </div>
      </section>

      {/* Subject Quick Prompts */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Quick Prompts by Subject</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { t: "History — understand causes & effects", p: "Explain [historical event] to me. What caused it, what happened, what were the short-term and long-term consequences, and why does it matter today? Help me understand how it connects to [other event or period I'm studying]." },
              { t: "Foreign language — grammar help", p: "I'm learning [language] and I don't understand [grammar rule/tense/structure]. Explain it clearly, give me 3 example sentences with translations, and tell me the most common mistakes students make with this rule. Then give me 3 practice sentences to try." },
              { t: "Chemistry — balance equations", p: "Help me balance this chemical equation: [equation]. Walk me through the steps — don't just give me the balanced version. Explain the rules I'm using at each step. Then give me a similar equation to practice on my own." },
              { t: "Physics — word problems", p: "Physics word problem: [paste problem]. Before solving it: (1) identify what we're solving for, (2) list what information we're given, (3) identify the relevant formula/law, (4) solve step by step. Show all units throughout so I can see how they cancel." },
            ].map(p => <PromptCard key={p.t} title={p.t} prompt={p.p} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">AI Homework Helper FAQ</h2>
          <div className="space-y-3">
            <FAQ q="Is using AI for homework cheating?" a="It depends on how you use it. Using AI as a tutor — to explain concepts, check your understanding, and get feedback on your own work — is the same as using Khan Academy or asking a teacher for help. Submitting AI-generated answers as your own work is academic dishonesty. The difference: are you using AI to learn, or to avoid learning?" />
            <FAQ q="Which AI is best for homework help?" a="Claude (claude.ai) and ChatGPT are both excellent. Claude is particularly good for reading comprehension, essay feedback, and nuanced explanations. ChatGPT with Code Interpreter is better for math and data problems because it can actually run calculations. Both are dramatically better than searching Google for specific homework explanations." />
            <FAQ q="Can AI make mistakes on homework?" a="Yes — AI can make errors, especially in complex math, niche science topics, and anything requiring very recent information. Always verify important answers, especially for STEM subjects. The prompts on this page ask the AI to show its work so you can catch mistakes more easily." />
            <FAQ q="How do I use AI for math without just getting the answer?" a="Ask it to explain the method, not just solve the problem. Tell it 'don't give me the final answer yet — just tell me what type of problem this is and what approach I should use.' Then work through it yourself and ask AI to check your steps. This is the most effective way to actually learn the material." />
            <FAQ q="What subjects is AI best at helping with?" a="AI is excellent at: math explanations (especially algebra through calculus), science concept explanations, literature analysis, essay feedback, history synthesis, and foreign language grammar. It's less reliable for very advanced or cutting-edge research topics, and anything requiring real-world data it wasn't trained on." />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">More AI Study Guides</h2>
          <p className="text-gray-400 mb-6">Explore prompts for ChatGPT, Claude, and every major AI — for students at every level.</p>
          <Link href="/website-links" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: accent }}>
            Browse All Guides →
          </Link>
        </div>
      </section>
    </div>
  )
}
