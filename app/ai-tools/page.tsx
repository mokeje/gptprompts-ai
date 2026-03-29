import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Zap } from "lucide-react"
import { allTools, toolCategories, getFeaturedTools, getToolsByCategory } from "@/data/tools"

export const metadata: Metadata = {
  title: "Best AI Tools Directory 2026 — Top AI Apps by Category | GPTPrompts.AI",
  description:
    "Discover the best AI tools of 2026. Compare ChatGPT, Claude, Midjourney, Cursor, Suno, and 30+ more top AI apps by category — with pricing, use cases, and prompt guides.",
  keywords: [
    "best AI tools",
    "AI tools directory",
    "AI apps 2026",
    "ChatGPT alternatives",
    "AI image generators",
    "AI coding tools",
    "AI writing tools",
    "top AI tools",
  ],
}

const pricingBadge: Record<string, { label: string; color: string; bg: string }> = {
  free: { label: "Free", color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
  freemium: { label: "Freemium", color: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
  paid: { label: "Paid", color: "text-gray-700", bg: "bg-gray-50 border-gray-200" },
}

export default function AIToolsPage() {
  const featured = getFeaturedTools()

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-3 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>AI Tools</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
            AI Tools<br />
            <span className="text-gray-400">Directory 2026</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            The best AI tools ranked and reviewed by category. Find the right tool for your task, compare pricing, and get prompt guides to get the most out of each one.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-yellow-400" />{allTools.length} tools reviewed</span>
            <span>{toolCategories.length} categories</span>
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Featured Tools */}
      <div className="border-b border-gray-100 py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black mb-2">Editor Picks</h2>
          <p className="text-gray-500 mb-8">The tools we recommend starting with in each major category.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {featured.map((tool) => {
              const badge = pricingBadge[tool.pricing]
              return (
                <Link
                  key={tool.slug}
                  href={`/ai-tools/${tool.slug}`}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-400 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{tool.emoji}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${badge.color} ${badge.bg}`}>
                      {badge.label}
                    </span>
                  </div>
                  <h3 className="font-black text-black mb-1 group-hover:underline">{tool.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">{tool.tagline}</p>
                  <span className="text-xs font-medium text-gray-400">{tool.company}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Jump links */}
        <div className="flex flex-wrap gap-2 mb-12">
          {toolCategories.map((cat) => {
            const count = getToolsByCategory(cat.id).length
            if (count === 0) return null
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium border border-gray-200 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                <span>{cat.icon}</span>
                {cat.label}
                <span className="text-gray-400 text-xs">({count})</span>
              </a>
            )
          })}
        </div>

        {/* Tool sections by category */}
        <div className="space-y-20">
          {toolCategories.map((cat) => {
            const tools = getToolsByCategory(cat.id)
            if (tools.length === 0) return null
            return (
              <section key={cat.id} id={cat.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{cat.icon}</span>
                  <h2 className="text-3xl font-black">{cat.label}</h2>
                </div>
                <p className="text-gray-500 mb-8 ml-10">{tools.length} tools</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {tools.map((tool) => {
                    const badge = pricingBadge[tool.pricing]
                    return (
                      <Link
                        key={tool.slug}
                        href={`/ai-tools/${tool.slug}`}
                        className="border border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:shadow-lg transition-all group flex flex-col"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                              style={{ backgroundColor: `${tool.color}15`, border: `1px solid ${tool.color}30` }}
                            >
                              {tool.emoji}
                            </div>
                            <div>
                              <h3 className="font-black text-black group-hover:underline">{tool.name}</h3>
                              <span className="text-xs text-gray-400">{tool.company}</span>
                            </div>
                          </div>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border flex-shrink-0 ${badge.color} ${badge.bg}`}>
                            {badge.label}
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-1">{tool.tagline}</p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {tool.bestFor.slice(0, 2).map((use) => (
                            <span key={use} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                              {use}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <span className="text-xs text-gray-400">{tool.pricingDetail.split("|")[0].trim()}</span>
                          <span className="text-xs font-semibold text-black flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn more <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-black mb-3">Get the most out of every tool</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Every tool is only as good as the prompts you use. Browse our prompt guides to unlock each tool at its full potential.
          </p>
          <Link
            href="/library"
            className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Browse Prompt Guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
