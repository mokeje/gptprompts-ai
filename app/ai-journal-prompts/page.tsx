"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react"

const accent = "#8B5CF6"

function PromptCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#8B5CF6]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] mb-2 inline-block">{tag}</span>}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }} className="shrink-0 p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#8B5CF6]/20 transition-colors">
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

const categories = [
  {
    title: "Daily Reflection Prompts",
    tag: "Daily",
    prompts: [
      { title: "End-of-Day Review", prompt: "I want to do a meaningful end-of-day journal entry. Ask me 5 questions about my day — covering what went well, what challenged me, what I learned, how I showed up for others, and what I'm grateful for. Ask one question at a time and wait for my answer before asking the next." },
      { title: "Morning Intention Setting", prompt: "Help me set a clear intention for today. First, ask me: what's most important today, what I'm feeling anxious about, and one thing I want to do differently than yesterday. Then help me craft a single clear intention sentence for the day based on my answers." },
      { title: "Weekly Retrospective", prompt: "Guide me through a weekly retrospective journal entry. I want to reflect on: my biggest win this week, my biggest regret or missed opportunity, one relationship I want to invest in more, how aligned my actions were with my goals, and what I want to focus on next week. Ask me about each one and help me think more deeply." },
    ],
  },
  {
    title: "Self-Discovery & Growth",
    tag: "Growth",
    prompts: [
      { title: "Explore a Limiting Belief", prompt: "I want to journal about a belief that might be holding me back. The belief is: [describe it]. Act as a thoughtful coach. Ask me where this belief might have come from, ask for evidence both for and against it, help me explore what I'm protecting myself from by holding this belief, and suggest an alternative belief I could try on. Go slowly and ask one question at a time." },
      { title: "Values Clarification", prompt: "Help me clarify what I actually value most in life — not what I think I should value, but what genuinely matters to me. Ask me questions about: times when I felt most alive, decisions I'm proud of, things that make me angry (often signals something we value), and what I'd do if money wasn't a factor. Help me identify my top 5 core values from my answers." },
      { title: "Future Self Visualization", prompt: "I want to write a journal entry as if I'm my future self 5 years from now, looking back on today. Ask me: what my life looks like in that future (relationships, work, health, where I live), what I'm proud I did starting today, what I wish I had started sooner, and what advice my future self would give present-me. Help me make it vivid and specific." },
    ],
  },
  {
    title: "Emotional Processing",
    tag: "Emotional",
    prompts: [
      { title: "Process a Difficult Emotion", prompt: "I'm experiencing [emotion] about [situation] and I want to journal through it. Please help me: first just feel heard (reflect back what I share without trying to fix it), then gently ask questions to help me understand what's underneath the emotion, then explore what this emotion might be telling me I need, and finally help me think about one small action I could take. Go slowly." },
      { title: "Work Through a Conflict", prompt: "I had a conflict with [person] about [what happened] and I want to process it in my journal. Help me see multiple perspectives. Ask me: what happened from my point of view, what the other person might have been experiencing, what I contributed to the situation, what I actually need here, and what I want the outcome to be. Don't take my side automatically — help me see clearly." },
      { title: "Anxiety Journaling", prompt: "I'm feeling anxious about [situation] and want to journal through it. Walk me through: writing out my worst-case scenario in detail, then asking how likely it actually is, then exploring what I would do if it happened, then identifying what's actually in my control right now, and finally writing one concrete action I can take today. Help me move from anxiety to agency." },
    ],
  },
  {
    title: "Gratitude & Positivity",
    tag: "Gratitude",
    prompts: [
      { title: "Deep Gratitude Practice", prompt: "I want to do a gratitude journal entry that goes beyond listing things. Pick one thing I'm grateful for and help me explore it deeply — where it came from, what it would be like without it, the people involved in making it possible, and what it says about my life. Then help me think about how I can express this gratitude actively." },
      { title: "Reframe a Difficult Day", prompt: "Today was hard and I'm struggling to find the good in it. Help me journal through a reframe. Ask me: what actually happened (without judgment), what small moments of goodness existed even in the difficulty, what I learned or how I grew, what I handled better than I might have in the past, and what tomorrow could look like. Don't dismiss the difficulty — help me find meaning in it." },
    ],
  },
  {
    title: "Goals & Planning",
    tag: "Goals",
    prompts: [
      { title: "Goal Clarity Session", prompt: "I have a goal that feels fuzzy: [describe your goal]. Help me get clear on it through journaling. Ask me: what specifically I want to achieve and by when, why this goal matters deeply to me, what achieving it would change, what's stopped me before, what resources or support I need, and what the very first step is. Help me turn a vague aspiration into a clear goal with a next action." },
      { title: "Monthly Review & Planning", prompt: "Guide me through a monthly review and planning journal session. For the past month: what were my top 3 wins, what fell short and why, what drained my energy, and what themes kept showing up. For the coming month: what's my #1 priority, what do I need to say no to, what habit do I want to build, and what would make this month feel successful? Ask one section at a time." },
    ],
  },
]

export default function AIJournalPromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#8B5CF6]/30 text-[#8B5CF6]">Journal Prompts</span>
            <span className="text-xs text-gray-500">For ChatGPT · Claude · Gemini</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            AI Journal Prompts:<br />Your Personal Thinking Partner
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            AI makes journaling more powerful by asking follow-up questions, helping you see patterns, and pushing you to think more deeply than you would alone. These prompts turn ChatGPT, Claude, or Gemini into your personal journaling coach.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Daily reflection", "Self-discovery", "Emotional processing", "Goal planning", "Gratitude"].map(b => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use AI for Journaling */}
      <section className="py-12 px-4 border-b border-[#1a1a1a] bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">How to Use AI as a Journaling Partner</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {[
              { n: "1", t: "Set the context", d: "Tell the AI you want to journal and what you want to explore. The prompts below do this for you." },
              { n: "2", t: "Let it guide you", d: "Let the AI ask questions. Don't write an essay — answer each question conversationally, like talking to a thoughtful friend." },
              { n: "3", t: "Go deeper", d: "When something feels important, say 'let's explore that more' or 'ask me more about that one.'" },
            ].map(s => (
              <div key={s.n} className="flex gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold" style={{ backgroundColor: `${accent}20`, color: accent }}>{s.n}</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{s.t}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Categories */}
      {categories.map(cat => (
        <section key={cat.title} className="py-14 px-4 border-b border-[#1a1a1a]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold">{cat.title}</h2>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6]">{cat.tag}</span>
            </div>
            <div className="grid gap-4">
              {cat.prompts.map(p => <PromptCard key={p.title} title={p.title} prompt={p.prompt} />)}
            </div>
          </div>
        </section>
      ))}

      {/* Best AI for Journaling */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Which AI is Best for Journaling?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Claude", verdict: "Best overall", detail: "Claude excels at thoughtful, nuanced conversation. It doesn't rush to solutions and holds the thread of a long reflective conversation better than most. Best for emotional processing and self-discovery.", color: "#D97706" },
              { name: "ChatGPT", verdict: "Most versatile", detail: "ChatGPT is great if you want a mix of journaling and practical next steps. It's good at helping you move from reflection to action planning. Works well for goal-setting and weekly reviews.", color: "#10a37f" },
              { name: "Gemini", verdict: "Good free option", detail: "Gemini's free tier is generous. It handles journaling conversations well and integrates with Google Docs if you want to save your entries automatically.", color: "#1A73E8" },
            ].map(ai => (
              <div key={ai.name} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-white">{ai.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: `${ai.color}20`, color: ai.color }}>{ai.verdict}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{ai.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">AI Journaling FAQ</h2>
          <div className="space-y-3">
            <FAQ q="Is journaling with AI as effective as traditional journaling?" a="Research on AI-assisted journaling is still early, but many people find that AI journaling is more engaging than writing alone because the AI asks questions that push you further than you'd naturally go. The conversational format also makes it less intimidating than staring at a blank page." />
            <FAQ q="Is it safe to journal privately with ChatGPT or Claude?" a="Both ChatGPT and Claude may use conversations for model training unless you opt out. For sensitive journaling, you can turn off training in your account settings (both platforms offer this). Claude's privacy settings can be found at claude.ai/settings. If privacy is critical, consider running a local AI model like Ollama." />
            <FAQ q="How is AI journaling different from therapy?" a="AI journaling is a reflective tool, not therapy. It can help you process everyday experiences, clarify your thinking, and develop self-awareness. It's not equipped to diagnose or treat mental health conditions. If you're dealing with significant trauma, grief, or mental health issues, a licensed therapist is the right resource." />
            <FAQ q="Can I use these prompts in a journaling app?" a="Yes — most AI journaling apps (like Rosebud, Reflection, or Stoic) allow custom prompts. You can also paste these into the standard ChatGPT or Claude interface. Some people prefer to copy their AI conversation into a notes app like Notion, Obsidian, or Day One to save and review their entries." />
            <FAQ q="How often should I journal with AI?" a="Daily morning or evening journaling (even 10-15 minutes) builds the most momentum. Weekly reviews are powerful for seeing patterns over time. But any frequency is better than none — even occasional deep-dive sessions once or twice a month can produce real insights." />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">More AI Prompt Guides</h2>
          <p className="text-gray-400 mb-6">Explore 199+ free guides for ChatGPT, Claude, Gemini, and every major AI tool.</p>
          <Link href="/website-links" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: accent }}>
            Browse All Guides →
          </Link>
        </div>
      </section>
    </div>
  )
}
