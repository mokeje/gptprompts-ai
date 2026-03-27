import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { categories, getPagesByCategory, allPages } from "@/data/pages"

export const metadata: Metadata = {
  title: "AI Prompt Library — Browse by Category | GPTPrompts.AI",
  description:
    "Browse 188+ AI prompt guides by category. Find prompts for ChatGPT, Claude, Gemini, image generation, career writing, university essays, industry use cases, and more.",
}

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-100 py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span className="mx-2">/ </span>
            <span>Library</span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter mb-3">Browse by Category</h1>
          <p className="text-xl text-gray-500">{allPages.length}+ prompt guides, {categories.length} categories</p>
        </div>
      </div>

      {/* Category Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => {
            const pages = getPagesByCategory(cat.id)
            if (pages.length === 0) return null
            const featured = pages.filter((p) => p.featured).slice(0, 3)
            const rest = pages.filter((p) => !p.featured).slice(0, 5)
            const preview = featured.length > 0 ? featured : pages.slice(0, 4)

            return (
              <div
                key={cat.id}
                id={cat.id}
                className="border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-md transition-all scroll-mt-32"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <div>
                      <h2 className="text-lg font-black text-black">{cat.label}</h2>
                      <span className="text-sm text-gray-400">{pages.length} guides</span>
                    </div>
                  </div>
                  <Link
                    href={`/website-links#${cat.id}`}
                    className="text-sm font-medium text-gray-500 hover:text-black flex items-center gap-1 transition-colors"
                  >
                    View all <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="space-y-2">
                  {preview.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-medium text-gray-800 group-hover:text-black transition-colors">
                          {p.label}
                        </span>
                        {p.description && (
                          <p className="text-xs text-gray-400 truncate mt-0.5">{p.description}</p>
                        )}
                      </div>
                      {p.featured && (
                        <span className="ml-2 text-xs bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded font-medium flex-shrink-0">
                          Featured
                        </span>
                      )}
                    </Link>
                  ))}
                </div>

                {pages.length > preview.length && (
                  <Link
                    href={`/website-links#${cat.id}`}
                    className="mt-3 block text-center text-sm text-gray-400 hover:text-black py-2 border border-dashed border-gray-200 rounded-lg hover:border-gray-400 transition-colors"
                  >
                    +{pages.length - preview.length} more guides →
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
