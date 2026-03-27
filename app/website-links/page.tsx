import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { allPages, categories, getPagesByCategory } from "@/data/pages"

export const metadata: Metadata = {
  title: "Complete Prompts Library — 188+ AI Prompt Guides | GPTPrompts.AI",
  description:
    "Browse all 188+ AI prompt guides on GPTPrompts.AI. Find expert resources for ChatGPT, Claude, Gemini, Midjourney, prompt engineering techniques, image generation, career writing, and more.",
  keywords: "prompts library, AI prompts, ChatGPT prompts, prompt engineering, Midjourney prompts",
}

const categoryOrder = [
  "ai-models",
  "prompt-engineering",
  "image-video",
  "career-writing",
  "academic",
  "university-essays",
  "industry",
  "social-media",
  "data-research",
  "ai-tools",
]

export default function PromptsLibraryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-sm text-gray-300">Prompts Library</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
            Prompts Library
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            {allPages.length}+ expert prompt guides, organized across {categories.length} categories.
            Find exactly what you need.
          </p>
        </div>
      </div>

      {/* Category Quick Jump */}
      <div className="border-b border-gray-100 bg-gray-50 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categoryOrder.map((catId) => {
              const cat = categories.find((c) => c.id === catId)
              if (!cat) return null
              const count = getPagesByCategory(catId).length
              return (
                <a
                  key={catId}
                  href={`#${catId}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-gray-400 hover:text-black transition-colors whitespace-nowrap"
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                  <span className="text-xs text-gray-400">({count})</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {categoryOrder.map((catId) => {
            const cat = categories.find((c) => c.id === catId)
            if (!cat) return null
            const pages = getPagesByCategory(catId)
            if (pages.length === 0) return null

            // Group by subcategory for industry
            const subcategories =
              catId === "industry"
                ? Array.from(new Set(pages.map((p) => p.subcategory).filter(Boolean)))
                : []

            return (
              <section key={catId} id={catId} className="scroll-mt-28">
                {/* Category header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cat.icon}</span>
                    <div>
                      <h2 className="text-2xl font-black text-black">{cat.label}</h2>
                      <p className="text-sm text-gray-400">{pages.length} guides</p>
                    </div>
                  </div>
                </div>

                {catId === "industry" && subcategories.length > 0 ? (
                  // Subcategory layout for industry
                  <div className="space-y-8">
                    {/* Pages without subcategory */}
                    {pages.filter((p) => !p.subcategory).length > 0 && (
                      <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                          {pages
                            .filter((p) => !p.subcategory)
                            .map((page) => (
                              <PageCard key={page.href} page={page} />
                            ))}
                        </div>
                      </div>
                    )}
                    {/* Subcategories */}
                    {subcategories.map((sub) => {
                      const subPages = pages.filter((p) => p.subcategory === sub)
                      const subLabel =
                        sub === "legal"
                          ? "⚖️ Legal"
                          : sub === "healthcare"
                            ? "🏥 Healthcare"
                            : sub === "real-estate"
                              ? "🏠 Real Estate"
                              : sub === "nonprofit"
                                ? "❤️ Nonprofits"
                                : sub === "finance"
                                  ? "💰 Finance"
                                  : sub || ""
                      return (
                        <div key={sub}>
                          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                            {subLabel}
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                            {subPages.map((page) => (
                              <PageCard key={page.href} page={page} />
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  // Standard grid layout
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {pages.map((page) => (
                      <PageCard key={page.href} page={page} />
                    ))}
                  </div>
                )}
              </section>
            )
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black tracking-tight mb-4">
            New to prompt engineering?
          </h2>
          <p className="text-gray-500 mb-6">
            Start with our free 8-step framework and build a solid foundation.
          </p>
          <Link
            href="/how-to-write-effective-ai-prompts"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
          >
            Read the guide
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}

function PageCard({ page }: { page: { label: string; href: string; description?: string; featured?: boolean } }) {
  return (
    <Link
      href={page.href}
      className="group flex flex-col gap-1.5 p-4 rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-md bg-white transition-all duration-150"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-black leading-tight group-hover:underline underline-offset-2 flex-1">
          {page.label}
        </h3>
        {page.featured && (
          <span className="flex-shrink-0 text-xs bg-amber-100 text-amber-700 font-medium px-1.5 py-0.5 rounded">
            ★
          </span>
        )}
      </div>
      {page.description && (
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{page.description}</p>
      )}
    </Link>
  )
}
