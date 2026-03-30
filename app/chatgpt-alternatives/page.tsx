"use client"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

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

const tools = [
  {
    name: "Claude",
    maker: "Anthropic",
    accent: "#D97706",
    tagline: "Best for writing, analysis & nuanced reasoning",
    free: true,
    bestFor: ["Long documents", "Writing & editing", "Careful reasoning", "Code review", "Privacy-conscious users"],
    weaknesses: ["Fewer integrations than ChatGPT", "No image generation", "Smaller plugin ecosystem"],
    pricing: "Free tier + Pro $20/mo",
    verdict: "The strongest ChatGPT alternative for pure reasoning and writing quality. Many professionals prefer Claude for anything requiring careful thought or nuance. Claude 3.7 Sonnet is widely considered best-in-class for writing tasks.",
    promptGuide: "/claude-prompts",
  },
  {
    name: "Gemini",
    maker: "Google",
    accent: "#1A73E8",
    tagline: "Best for Google Workspace users",
    free: true,
    bestFor: ["Google Docs/Sheets integration", "Real-time web search", "Multimodal tasks", "Students with Google accounts", "Long context (1M tokens)"],
    weaknesses: ["Less consistent reasoning than Claude/GPT-4o", "Privacy concerns (Google data use)", "Can feel corporate"],
    pricing: "Free tier + Advanced $19.99/mo",
    verdict: "The go-to alternative if you live in Google's ecosystem. Gemini is deeply integrated with Gmail, Docs, Sheets, and Drive. Gemini 2.5 Pro has genuinely impressive reasoning and the longest context window of any major model.",
    promptGuide: "/gemini-ai-prompts",
  },
  {
    name: "Grok",
    maker: "xAI",
    accent: "#000000",
    tagline: "Best for real-time news & X/Twitter context",
    free: false,
    bestFor: ["Real-time web & X data", "Current events research", "Witty, less filtered responses", "Grok Think mode for reasoning", "X/Twitter power users"],
    weaknesses: ["Requires X Premium subscription", "Smaller context window", "Less polished than GPT/Claude for writing"],
    pricing: "Requires X Premium ($8-16/mo)",
    verdict: "Grok's real competitive advantage is live access to X/Twitter and the web — no cutoff date. If you need to know what's happening right now or want unfiltered takes, Grok is unique. Think mode brings it closer to o1-level reasoning.",
    promptGuide: "/grok-prompts",
  },
  {
    name: "Perplexity",
    maker: "Perplexity AI",
    accent: "#20B2AA",
    tagline: "Best for research with citations",
    free: true,
    bestFor: ["Research with source citations", "Replacing Google search", "Quick factual questions", "Academic research", "News with links"],
    weaknesses: ["Not a full AI assistant", "Less creative writing ability", "Not ideal for long-form generation"],
    pricing: "Free tier + Pro $20/mo",
    verdict: "Perplexity isn't really a ChatGPT replacement — it's a search engine replacement. Every answer comes with citations and sources. For research-heavy work where you need to verify facts, it's unbeatable. Not ideal for creative tasks.",
    promptGuide: null,
  },
  {
    name: "Llama (Meta AI)",
    maker: "Meta",
    accent: "#0866FF",
    tagline: "Best open-source & free option",
    free: true,
    bestFor: ["Privacy (run locally)", "No usage limits", "Developers & researchers", "Custom fine-tuning", "Offline use"],
    weaknesses: ["Requires technical setup for local use", "Slightly behind frontier models", "No official consumer product (yet)"],
    pricing: "Free (open source) or via Meta AI app",
    verdict: "Llama 3.3 70B competes seriously with GPT-4-level models. If you're a developer who wants to run AI locally with no data sent to any company, Llama is the only real option. Meta AI (on Instagram/WhatsApp) makes it accessible to non-developers.",
    promptGuide: "/meta-ai-prompts",
  },
  {
    name: "Microsoft Copilot",
    maker: "Microsoft",
    accent: "#0078D4",
    tagline: "Best for Microsoft 365 users",
    free: true,
    bestFor: ["Word, Excel, PowerPoint integration", "Enterprise compliance features", "Teams meeting summaries", "Windows users", "Bing search integration"],
    weaknesses: ["Expensive for full Copilot 365 ($30/user/mo)", "Less impressive than GPT-4o in direct tests", "Bland personality"],
    pricing: "Free (basic) + Copilot 365 $30/user/mo",
    verdict: "If your company uses Microsoft 365, Copilot is the most integrated AI you can get — it works inside Word, Excel, Outlook, and Teams natively. The free version via Bing is solid. The $30/mo 365 version is expensive but transforms productivity for heavy Office users.",
    promptGuide: null,
  },
]

export default function ChatGPTAlternativesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-white/20 text-gray-300">2026 Guide</span>
            <span className="text-xs text-gray-500">Updated March 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Best ChatGPT Alternatives in 2026
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            ChatGPT is great — but it's not always the best tool for the job. Here's an honest breakdown of the top alternatives: Claude, Gemini, Grok, Perplexity, Llama, and Copilot — with real comparisons and prompt guides for each.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Tools compared", val: "6" },
              { label: "All free options", val: "5/6" },
              { label: "With prompt guides", val: "4" },
              { label: "Updated", val: "2026" },
            ].map(s => (
              <div key={s.label} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">{s.val}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Recommendation */}
      <section className="py-10 px-4 border-b border-[#1a1a1a] bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold mb-4 text-gray-300">Quick Recommendation: Which Should You Use?</h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            {[
              { use: "Best overall writing & analysis", pick: "Claude" },
              { use: "Best for Google Workspace users", pick: "Gemini" },
              { use: "Best for real-time news & research", pick: "Grok or Perplexity" },
              { use: "Best for Microsoft 365 users", pick: "Copilot" },
              { use: "Best free & open source", pick: "Llama 3 (Meta AI)" },
              { use: "Best for coding", pick: "Claude or GPT-4o" },
            ].map(r => (
              <div key={r.use} className="flex justify-between items-center bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3">
                <span className="text-gray-400">{r.use}</span>
                <span className="font-semibold text-white ml-4">{r.pick}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Cards */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto space-y-8">
          {tools.map((tool, i) => (
            <div key={tool.name} className="border border-[#2a2a2a] rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-[#2a2a2a]" style={{ borderLeft: `4px solid ${tool.accent === "#000000" ? "#555" : tool.accent}` }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs bg-[#2a2a2a] px-2 py-0.5 rounded text-gray-400">#{i + 1}</span>
                      <h2 className="text-xl font-bold text-white">{tool.name}</h2>
                      <span className="text-xs text-gray-500">by {tool.maker}</span>
                      {tool.free && <span className="text-xs px-2 py-0.5 bg-green-950/40 text-green-400 border border-green-800/30 rounded-full">Free tier</span>}
                    </div>
                    <p className="text-gray-400 font-medium">{tool.tagline}</p>
                  </div>
                  <span className="text-xs text-gray-500 shrink-0 hidden md:block">{tool.pricing}</span>
                </div>
              </div>
              <div className="p-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-3">Best for</h3>
                  <ul className="space-y-1.5">
                    {tool.bestFor.map(b => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-green-500 mt-0.5">✓</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-3">Limitations</h3>
                  <ul className="space-y-1.5">
                    {tool.weaknesses.map(w => (
                      <li key={w} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-red-500 mt-0.5">✗</span>{w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="bg-[#1a1a1a] rounded-xl p-4">
                  <p className="text-sm text-gray-300 leading-relaxed mb-3"><strong className="text-white">Verdict:</strong> {tool.verdict}</p>
                  {tool.promptGuide && (
                    <Link href={tool.promptGuide} className="inline-flex items-center gap-1.5 text-xs font-medium hover:opacity-80 transition-opacity" style={{ color: tool.accent === "#000000" ? "#888" : tool.accent }}>
                      View {tool.name} Prompt Guide <ExternalLink size={11} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Head to Head */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">ChatGPT vs Claude vs Gemini — Head to Head</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  <th className="text-left py-3 pr-4 text-gray-400 font-medium">Task</th>
                  <th className="text-left py-3 pr-4 text-white font-semibold">ChatGPT</th>
                  <th className="text-left py-3 pr-4 font-semibold text-[#D97706]">Claude</th>
                  <th className="text-left py-3 font-semibold text-[#1A73E8]">Gemini</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a1a1a]">
                {[
                  ["Long-form writing", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐"],
                  ["Coding", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐"],
                  ["Math & reasoning", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                  ["Web search", "⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                  ["Image generation", "⭐⭐⭐⭐⭐", "❌", "⭐⭐⭐"],
                  ["Document analysis", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                  ["Plugin/tool ecosystem", "⭐⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐"],
                  ["Privacy & data use", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐"],
                  ["Free tier generosity", "⭐⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐"],
                ].map(([task, gpt, claude, gem]) => (
                  <tr key={task}>
                    <td className="py-3 pr-4 text-gray-300 font-medium">{task}</td>
                    <td className="py-3 pr-4">{gpt}</td>
                    <td className="py-3 pr-4">{claude}</td>
                    <td className="py-3">{gem}</td>
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
          <h2 className="text-2xl font-bold mb-6">ChatGPT Alternatives FAQ</h2>
          <div className="space-y-3">
            <FAQ q="What is the best free ChatGPT alternative?" a="Claude by Anthropic has the strongest free tier for writing and analysis. Gemini (Google) offers the most generous free access with the longest context window. Perplexity is best for research. All three are genuinely good alternatives without paying." />
            <FAQ q="Is Claude better than ChatGPT?" a="For long-form writing, document analysis, and nuanced reasoning, many professionals prefer Claude over ChatGPT. ChatGPT (GPT-4o) is stronger for image generation, the plugin ecosystem, and some coding tasks. The honest answer is: both are excellent and worth trying for your specific use case." />
            <FAQ q="Which ChatGPT alternative is best for coding?" a="GPT-4o (ChatGPT) and Claude 3.7 Sonnet are both excellent for coding. For agentic coding with an IDE, Cursor (uses Claude/GPT) and Windsurf are specifically built for coding workflows and often outperform the base chat interfaces." />
            <FAQ q="Is there a completely free ChatGPT alternative?" a="Yes — Meta AI (powered by Llama 3) is completely free with no usage limits and works through the Meta AI website and WhatsApp. Gemini and Claude also offer solid free tiers. Perplexity's free tier handles most research needs." />
            <FAQ q="Which AI is best for writing?" a="Claude consistently ranks highest for writing quality — it produces more natural, less formulaic prose than ChatGPT. For creative writing, Claude's output tends to feel less 'AI-generated.' For business writing, Claude or ChatGPT are roughly equivalent with good prompts." />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Get the Most from Every AI Tool</h2>
          <p className="text-gray-400 mb-6">Explore 195+ free prompt guides for ChatGPT, Claude, Gemini, and every major AI tool.</p>
          <Link href="/website-links" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white text-black transition-all hover:bg-gray-100">
            Browse All Guides →
          </Link>
        </div>
      </section>
    </div>
  )
}
