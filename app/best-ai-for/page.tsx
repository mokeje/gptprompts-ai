import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Zap } from "lucide-react"
import { getAllUseCases } from "@/data/usecases"

export const metadata: Metadata = {
  title: "Best AI Tools by Use Case 2026 — Writing, Coding, Marketing and More | GPTPrompts.AI",
  description:
    "Find the best AI tool for your specific use case in 2026. Writing, coding, research, marketing, students, content creators and more — honest picks with clear verdicts.",
  keywords: [
    "best AI tools 2026",
    "best AI for writing",
    "best AI for coding",
    "best AI for students",
    "best AI for marketing",
    "AI tools by use case",
    "best AI tool for research",
  ],
}

export default function BestAIForPage() {
  const useCases = getAllUseCases()

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-3 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Best AI For...</span>
          </div>
          <div className="flex items-start gap-4 mb-6">
            <Zap className="w-12 h-12 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-3">
                Best AI Tools<br />
                <span className="text-gray-400">by Use Case</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Not all AI tools are built the same. Find the best AI tool for exactly what you need — honest picks, ranked by actual performance, with clear verdicts.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span>{useCases.length} use cases covered</span>
            <span>Updated March 2026</span>
            <span>Optimised for Google and AI search</span>
          </div>
        </div>
      </div>

      {/* Use case grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => {
            const topTool = uc.resolvedTools[0]
            const verdictTool = uc.resolvedTools.find((t) => t.slug === uc.verdictSlug)
            return (
              <Link
                key={uc.slug}
                href={`/best-ai-for/${uc.slug}`}
                className="group border border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:shadow-lg transition-all"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: `${uc.color}18` }}
                  >
                    {uc.emoji}
                  </span>
                  <div>
                    <div className="font-black text-black text-base leading-tight">{uc.headline}</div>
                    <div className="text-xs text-gray-400">{uc.resolvedTools.length} tools ranked</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">{uc.description}</p>

                {/* Top 3 tools */}
                <div className="space-y-2 mb-4">
                  {uc.resolvedTools.slice(0, 3).map((t, i) => (
                    <div key={t.slug} className="flex items-center gap-2 text-sm">
                      <span className="text-gray-400 text-xs font-mono w-4 flex-shrink-0">{i + 1}.</span>
                      <span className="text-base flex-shrink-0">{t.tool.emoji}</span>
                      <span className="font-medium text-gray-800 truncate">{t.tool.name}</span>
                      {i === 0 && (
                        <span
                          className="ml-auto text-xs font-semibold px-1.5 py-0.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: `${uc.color}18`, color: uc.color }}
                        >
                          Top pick
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Verdict preview */}
                {verdictTool && (
                  <div className="bg-gray-50 rounded-xl px-3 py-2 mb-4">
                    <div className="text-xs text-gray-500 mb-0.5">Our verdict</div>
                    <div className="text-sm font-semibold text-black flex items-center gap-1.5 truncate">
                      <span className="flex-shrink-0">{verdictTool.tool.emoji}</span>
                      <span className="truncate">{verdictTool.tool.name} is the best for this</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{uc.faqs.length} FAQs answered</span>
                  <span className="text-xs font-semibold text-black flex items-center gap-1 group-hover:gap-2 transition-all">
                    See full guide <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-black mb-3">Compare any two AI tools</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Once you have shortlisted your options, see exactly how they compare side by side on pricing, features, and use cases.
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
