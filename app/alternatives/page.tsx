import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Shuffle } from "lucide-react"
import { getAllAlternatives } from "@/data/alternatives"
import { toolCategories } from "@/data/tools"

export const metadata: Metadata = {
  title: "Best AI Tool Alternatives 2026 — ChatGPT, Midjourney, Cursor and More | GPTPrompts.AI",
  description:
    "Find the best alternatives to the top AI tools in 2026. ChatGPT alternatives, Midjourney alternatives, Cursor alternatives and more — honest picks with clear verdicts.",
  keywords: [
    "AI tool alternatives",
    "ChatGPT alternatives",
    "Midjourney alternatives",
    "Cursor alternatives",
    "best AI alternatives 2026",
    "Claude alternatives",
    "Gemini alternatives",
  ],
}

const categoryLabels: Record<string, string> = {
  chatbots: "AI Chatbots",
  image: "AI Image Generation",
  video: "AI Video",
  coding: "AI Coding",
  music: "AI Music",
  search: "AI Search",
  writing: "AI Writing",
  productivity: "AI Productivity",
}

export default function AlternativesPage() {
  const alternatives = getAllAlternatives()

  // Group by category
  const grouped: Record<string, typeof alternatives> = {}
  for (const alt of alternatives) {
    const cat = alt.tool.category
    if (!grouped[cat]) grouped[cat] = []
    grouped[cat].push(alt)
  }

  const totalAlts = alternatives.reduce((sum, a) => sum + a.resolvedAlternatives.length, 0)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-3 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>AI Tool Alternatives</span>
          </div>
          <div className="flex items-start gap-4 mb-6">
            <Shuffle className="w-12 h-12 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-3">
                AI Tool<br />
                <span className="text-gray-400">Alternatives</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Looking to switch? Find the best alternatives to the most popular AI tools in 2026. Honest picks, clear verdicts, and no affiliate fluff.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span>{alternatives.length} tools covered</span>
            <span>{totalAlts} alternatives ranked</span>
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Alternatives by category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Jump nav */}
        <div className="flex flex-wrap gap-2 mb-12">
          {Object.keys(grouped).map((cat) => (
            <a
              key={cat}
              href={`#${cat}`}
              className="px-3 py-1.5 text-sm font-medium border border-gray-200 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              {categoryLabels[cat] || cat} ({grouped[cat].length})
            </a>
          ))}
        </div>

        <div className="space-y-16">
          {Object.entries(grouped).map(([cat, items]) => (
            <section key={cat} id={cat} className="scroll-mt-24">
              <h2 className="text-2xl font-black mb-6 pb-3 border-b border-gray-100">
                {categoryLabels[cat] || cat} Alternatives
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((alt) => (
                  <Link
                    key={alt.toolSlug}
                    href={`/alternatives/${alt.toolSlug}`}
                    className="group border border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:shadow-lg transition-all"
                  >
                    {/* Tool header */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ backgroundColor: `${alt.tool.color}18` }}
                      >
                        {alt.tool.emoji}
                      </span>
                      <div>
                        <div className="font-black text-black text-sm">
                          Best {alt.tool.name} Alternatives
                        </div>
                        <div className="text-xs text-gray-400">{alt.resolvedAlternatives.length} alternatives ranked</div>
                      </div>
                    </div>

                    {/* Top alternatives preview */}
                    <div className="space-y-2 mb-4">
                      {alt.resolvedAlternatives.slice(0, 3).map((a, i) => (
                        <div key={a.slug} className="flex items-center gap-2 text-sm">
                          <span className="text-gray-400 text-xs font-mono w-4">{i + 1}.</span>
                          <span className="text-base">{a.tool.emoji}</span>
                          <span className="font-medium text-gray-800">{a.tool.name}</span>
                          <span
                            className={`ml-auto text-xs font-semibold px-1.5 py-0.5 rounded-full ${
                              a.rating === "excellent"
                                ? "bg-emerald-50 text-emerald-700"
                                : a.rating === "great"
                                ? "bg-blue-50 text-blue-700"
                                : "bg-gray-50 text-gray-500"
                            }`}
                          >
                            {a.rating === "excellent" ? "Excellent" : a.rating === "great" ? "Great" : "Good"}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Verdict preview */}
                    <div className="bg-gray-50 rounded-xl px-3 py-2 mb-4">
                      <div className="text-xs text-gray-500 mb-0.5">Top pick</div>
                      <div className="text-sm font-semibold text-black flex items-center gap-1.5">
                        <span>{alt.resolvedAlternatives.find(a => a.slug === alt.verdictSlug)?.tool.emoji || "🏆"}</span>
                        {alt.resolvedAlternatives.find(a => a.slug === alt.verdictSlug)?.tool.name || ""}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-400">{alt.faqs.length} FAQs answered</span>
                      <span className="text-xs font-semibold text-black flex items-center gap-1 group-hover:gap-2 transition-all">
                        See all <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-black mb-3">Compare two tools head to head</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Use our side-by-side comparison pages to see exactly how any two AI tools stack up on pricing, features, and use cases.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Compare AI Tools <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/ai-tools"
              className="inline-flex items-center gap-2 bg-transparent border border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Browse All Tools
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
