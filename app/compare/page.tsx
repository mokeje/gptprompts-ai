import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Scale } from "lucide-react"
import { getAllResolvedComparisons } from "@/data/comparisons"
import { toolCategories } from "@/data/tools"

export const metadata: Metadata = {
  title: "AI Tool Comparisons 2026 — ChatGPT vs Claude, Midjourney vs DALL-E & More | GPTPrompts.AI",
  description:
    "Side-by-side comparisons of the best AI tools in 2026. ChatGPT vs Claude, Midjourney vs DALL-E 3, Cursor vs Copilot, Suno vs Udio — find out which AI tool wins for your use case.",
  keywords: [
    "AI tool comparison",
    "ChatGPT vs Claude",
    "Midjourney vs DALL-E",
    "best AI tools 2026",
    "AI tools compared",
    "Cursor vs Copilot",
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

export default function ComparePage() {
  const comparisons = getAllResolvedComparisons()

  // Group by the category of toolA
  const grouped: Record<string, typeof comparisons> = {}
  for (const comp of comparisons) {
    const cat = comp.toolA.category
    if (!grouped[cat]) grouped[cat] = []
    grouped[cat].push(comp)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-3 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Compare AI Tools</span>
          </div>
          <div className="flex items-start gap-4 mb-6">
            <Scale className="w-12 h-12 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-3">
                AI Tool<br />
                <span className="text-gray-400">Comparisons</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Honest, side-by-side breakdowns of the best AI tools. Find out exactly which tool wins for your use case — no fluff, just clear verdicts.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span>{comparisons.length} comparisons</span>
            <span>Updated March 2026</span>
            <span>Optimised for Google and AI search</span>
          </div>
        </div>
      </div>

      {/* Comparisons by category */}
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
                {categoryLabels[cat] || cat}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((comp) => (
                  <Link
                    key={comp.slug}
                    href={`/compare/${comp.slug}`}
                    className="group border border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:shadow-lg transition-all"
                  >
                    {/* vs badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{comp.toolA.emoji}</span>
                        <span className="font-black text-black">{comp.toolA.name}</span>
                      </div>
                      <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">VS</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{comp.toolB.emoji}</span>
                        <span className="font-black text-black">{comp.toolB.name}</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 line-clamp-2 mb-4">{comp.summary}</p>

                    {/* Category scores */}
                    <div className="space-y-1.5 mb-4">
                      {comp.categories.slice(0, 3).map((c) => (
                        <div key={c.name} className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">{c.name}</span>
                          <span className={`font-semibold ${
                            c.winner === "a" ? "text-blue-600" :
                            c.winner === "b" ? "text-purple-600" :
                            "text-gray-500"
                          }`}>
                            {c.winner === "a" ? comp.toolA.name :
                             c.winner === "b" ? comp.toolB.name :
                             "Tie"}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-400">{comp.categories.length} categories compared</span>
                      <span className="text-xs font-semibold text-black flex items-center gap-1 group-hover:gap-2 transition-all">
                        Full comparison <ArrowRight className="w-3 h-3" />
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
          <h2 className="text-3xl font-black mb-3">Once you have chosen your tool</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Get the most out of it with our dedicated prompt guides — practical techniques, frameworks, and ready-to-use prompts for every major AI tool.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/ai-tools"
              className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Browse AI Tools <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/library"
              className="inline-flex items-center gap-2 bg-transparent border border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Prompt Guides
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
