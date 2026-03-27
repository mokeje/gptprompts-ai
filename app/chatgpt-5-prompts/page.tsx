"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Sparkles } from "lucide-react"

const accent = "#10a37f"

function PromptCard({ title, prompt, tag, badge }: { title: string; prompt: string; tag?: string; badge?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#10a37f]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {tag && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#10a37f]/10 text-[#10a37f] inline-block">{tag}</span>}
            {badge && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 inline-block">✨ GPT-5</span>}
          </div>
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }} className="shrink-0 p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#10a37f]/20 transition-colors">
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

const capabilities = [
  { icon: "🧠", title: "Deeper reasoning", desc: "GPT-5 can hold multi-step chains of thought across very long contexts — ideal for complex analysis, strategy, and research synthesis." },
  { icon: "🖼️", title: "Unified multimodal", desc: "Text, images, code, and data in a single conversation. Describe a chart, analyze a photo, generate and run code — no mode switching." },
  { icon: "🔧", title: "Agentic tool use", desc: "GPT-5 can browse the web, run code, call APIs, and chain tools together to complete multi-step tasks autonomously." },
  { icon: "💬", title: "Voice-native", desc: "GPT-5's advanced voice mode understands nuance, interruptions, and emotion — useful for interview prep, language learning, and ideation." },
]

export default function GPT5PromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#10a37f]/30 text-[#10a37f]">GPT-5</span>
            <span className="text-xs text-gray-500">by OpenAI · 2025</span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400">New</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            GPT-5 Prompts:<br />Get the Most Out of the Smartest AI Yet
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            GPT-5 is OpenAI's most capable model — with deeper reasoning, unified multimodal abilities, and agentic tool use. The prompts that worked for GPT-4 still work, but GPT-5 rewards more ambitious, multi-step prompts. Here's how to use it.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Deeper reasoning", "Multimodal", "Agentic tasks", "Voice-native", "Long context"].map(b => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* What's new in GPT-5 */}
      <section className="py-14 px-4 border-b border-[#1a1a1a] bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What's New in GPT-5</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {capabilities.map(c => (
              <div key={c.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                <div className="text-2xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Reasoning Prompts */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Deep Reasoning Prompts</h2>
          <p className="text-gray-400 mb-6">GPT-5's extended thinking shines on problems that require weighing multiple factors, spotting contradictions, or building long logical chains.</p>
          <div className="grid gap-4">
            <PromptCard badge tag="Analysis" title="Multi-angle Decision Analysis" prompt={`I need to make a decision about [decision]. Before giving me a recommendation, I want you to:

1. Identify the 3-5 most important factors to consider
2. For each factor, argue BOTH why it favors each option
3. Identify what assumptions I might be making that could be wrong
4. Point out what information I don't have that would change the decision
5. Then give me your actual recommendation with reasoning

Don't give me a balanced "it depends" answer — commit to a recommendation while acknowledging the uncertainty.`} />
            <PromptCard badge tag="Research" title="Synthesize Conflicting Perspectives" prompt={`I'm researching [topic] and I've encountered conflicting views. Help me build a clear mental model by:

1. Mapping out the main schools of thought (not just "two sides")
2. Identifying what each group ACTUALLY disagrees about (often it's about values or empirical facts, not the same thing)
3. Finding where there IS consensus that people don't realize
4. Pointing out which claims are empirically testable vs. value judgments
5. Giving me a synthesis that integrates the strongest points from each view

Be willing to say when one side has stronger evidence.`} />
            <PromptCard badge tag="Strategy" title="Pre-Mortem Analysis" prompt={`I'm planning to [project/decision/launch]. Before I commit, run a pre-mortem:

Assume it's 12 months from now and this has failed. What are the top 5 most likely reasons it failed? For each failure mode:
- How likely is it (1-10)?
- What early warning signs would show up first?
- What could I do now to prevent it or reduce impact?

Then tell me which 2 failure modes I should be most worried about and why. End with the one thing that would most increase my odds of success.`} />
          </div>
        </div>
      </section>

      {/* Multimodal Prompts */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Multimodal Prompts</h2>
          <p className="text-gray-400 mb-6">GPT-5 can analyze images, charts, documents, and code together in one conversation. These prompts take advantage of that.</p>
          <div className="grid gap-4">
            <PromptCard badge tag="Image Analysis" title="Analyze a Chart or Graph" prompt={`[Upload the chart/graph image]

Analyze this chart. Tell me:
1. What is the main story this data is telling?
2. What trends or patterns stand out?
3. What's the most surprising or counterintuitive thing in this data?
4. What questions does this raise that the chart doesn't answer?
5. If I were presenting this to an executive, what 2-3 bullet points would I lead with?

Then help me write a clear 2-sentence takeaway I could put in a report.`} />
            <PromptCard badge tag="Document" title="Extract Insights from a Document" prompt={`[Upload the document/PDF/screenshot]

Read this document and give me:
1. The 3 most important things I need to know (the things I'd regret missing)
2. Any claims or numbers that seem off or worth verifying
3. Action items that are implicit but not explicitly called out
4. What's NOT in this document that you'd expect to be there
5. A one-paragraph executive summary I could send to someone who won't read it

Flag anything that seems ambiguous or contradictory.`} />
            <PromptCard badge tag="Code + Vision" title="Debug from a Screenshot" prompt={`[Upload a screenshot of the error or broken UI]

I'm seeing this issue. Please:
1. Identify what's going wrong from the screenshot
2. List the most likely causes in order of probability
3. Suggest the debugging steps I should take to confirm the cause
4. Give me the fix for the most likely cause
5. Tell me how to prevent this class of issue in the future

If you can't determine the cause from the screenshot alone, tell me exactly what additional information would help.`} />
          </div>
        </div>
      </section>

      {/* Agentic Task Prompts */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Agentic Task Prompts</h2>
          <p className="text-gray-400 mb-6">GPT-5 with tools enabled can browse, run code, and chain actions. These prompts work best with tools turned on in ChatGPT.</p>
          <div className="grid gap-4">
            <PromptCard badge tag="Research" title="Deep Research on a Topic" prompt={`Research [topic] thoroughly. I need a comprehensive briefing that covers:

1. The current state of the field (key facts, numbers, major players)
2. Recent developments in the last 6-12 months
3. The main debates or unresolved questions
4. What the experts say vs. what the popular narrative is
5. The 5 most useful sources I should read if I want to go deeper

Cite your sources for any specific claims. Flag anything where sources disagree. Give me your own synthesis at the end.`} />
            <PromptCard badge tag="Data" title="Analyze and Visualize Data" prompt={`[Upload your data file or paste your data]

Analyze this dataset. Please:
1. Give me a summary of what's in the data (shape, key variables, any obvious quality issues)
2. Identify the 3 most interesting patterns or trends
3. Create a visualization that best shows the key insight
4. Run the relevant statistical tests to confirm whether the patterns are significant
5. Write a 3-sentence interpretation a non-technical stakeholder could understand

Tell me if there's anything in the data that looks like it might be an error or outlier I should check.`} />
          </div>
        </div>
      </section>

      {/* Creative & Writing Prompts */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Writing & Creative Prompts</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { t: "Write like a specific author", p: "Write a [type of piece] about [topic] in the style of [author]. Before writing, briefly describe the key stylistic elements you'll use — sentence length, vocabulary level, POV, narrative voice, and any signature techniques. Then write the piece, staying true to those elements throughout." },
              { t: "Edit with specific feedback", p: "Here's a piece I wrote: [paste text]. Edit it for: (1) clarity — cut anything that doesn't earn its place, (2) flow — fix any spots where the rhythm breaks, (3) impact — identify the weakest sentence and rewrite it to be the strongest. Show me your edits with brief notes on why you changed each thing." },
              { t: "Generate ideas with constraints", p: "I need 10 ideas for [topic/project]. But I want ideas that: (1) haven't been done to death, (2) work within [constraint 1] and [constraint 2], and (3) could realistically be executed in [timeframe/budget]. After listing them, tell me which 2 you'd pursue first and why." },
              { t: "Turn notes into a draft", p: "Here are my rough notes on [topic]: [paste notes]. Turn these into a polished [blog post/email/report/etc.] that: flows naturally, fills in any obvious gaps, and keeps my voice. Flag any places where my notes were unclear and tell me what assumption you made." },
            ].map(p => <PromptCard key={p.t} title={p.t} prompt={p.p} />)}
          </div>
        </div>
      </section>

      {/* GPT-5 vs GPT-4 */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">GPT-5 vs GPT-4o: When to Use Each</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  <th className="text-left py-3 pr-6 text-gray-400 font-medium">Task</th>
                  <th className="text-left py-3 pr-6 font-semibold" style={{ color: accent }}>GPT-5</th>
                  <th className="text-left py-3 text-gray-400 font-medium">GPT-4o</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a1a1a]">
                {[
                  ["Complex reasoning", "✅ Much better", "⚠️ Good"],
                  ["Quick Q&A", "⚠️ Overkill, slower", "✅ Fast & sufficient"],
                  ["Long document analysis", "✅ Excellent", "✅ Good"],
                  ["Code generation", "✅ Better at complex code", "✅ Great for most tasks"],
                  ["Creative writing", "✅ More nuanced", "✅ Very good"],
                  ["Multimodal (images)", "✅ Unified, better", "✅ Good"],
                  ["Speed", "⚠️ Slower", "✅ Faster"],
                  ["Cost", "⚠️ More expensive", "✅ Cheaper"],
                  ["Agentic tasks", "✅ Significantly better", "⚠️ Limited"],
                ].map(([task, g5, g4]) => (
                  <tr key={task}>
                    <td className="py-3 pr-6 text-gray-300">{task}</td>
                    <td className="py-3 pr-6 text-white font-medium">{g5}</td>
                    <td className="py-3 text-gray-400">{g4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">GPT-5 FAQ</h2>
          <div className="space-y-3">
            <FAQ q="What is GPT-5?" a="GPT-5 is OpenAI's latest and most capable large language model. It builds on GPT-4 with significantly improved reasoning, unified multimodal capabilities (text, images, code, data in one conversation), and native agentic tool use — meaning it can browse the web, run code, and complete multi-step tasks autonomously." />
            <FAQ q="How is GPT-5 different from GPT-4o?" a="GPT-5 offers substantially stronger reasoning for complex tasks, better multimodal understanding, and more capable agentic behavior. GPT-4o remains faster and cheaper, making it the better choice for quick, simpler tasks. For anything requiring deep analysis, strategy, or multi-step execution, GPT-5 is noticeably better." />
            <FAQ q="How do I access GPT-5?" a="GPT-5 is available through ChatGPT Plus, Pro, and Team subscriptions. It's also available via OpenAI's API for developers. You can select GPT-5 from the model dropdown in ChatGPT." />
            <FAQ q="Do I need different prompts for GPT-5?" a="Your existing prompts will still work well with GPT-5. But GPT-5 rewards more ambitious, multi-step prompts — you can ask it to do more in a single prompt and trust it to handle complexity better. The prompts on this page are designed specifically to take advantage of GPT-5's capabilities." />
            <FAQ q="Is GPT-5 better than Claude?" a="GPT-5 and Claude 3.7 (Anthropic's latest) are both exceptional models with different strengths. GPT-5 edges ahead on agentic tasks and has the advantage of deep integration with ChatGPT's tools ecosystem. Claude is widely considered better for long-form writing, nuanced conversation, and following complex instructions precisely. Many power users use both." />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">More AI Prompt Guides</h2>
          <p className="text-gray-400 mb-6">Explore guides for Claude, Gemini, Cursor, Bolt.new, and every major AI tool.</p>
          <Link href="/website-links" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: accent }}>
            Browse All Guides →
          </Link>
        </div>
      </section>
    </div>
  )
}
