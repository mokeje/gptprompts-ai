"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search, X, Menu, ChevronDown } from "lucide-react"
import { allPages, categories, searchPages } from "@/data/pages"

const navCategories = [
  {
    label: "AI Models",
    categoryId: "ai-models",
    href: "/library#ai-models",
  },
  {
    label: "Prompt Engineering",
    categoryId: "prompt-engineering",
    href: "/library#prompt-engineering",
  },
  {
    label: "Image & Video",
    categoryId: "image-video",
    href: "/library#image-video",
  },
  {
    label: "Industry Guides",
    categoryId: "industry",
    href: "/library#industry",
  },
  {
    label: "Academic",
    categoryId: "academic",
    href: "/library#academic",
  },
]

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const results = searchQuery.length > 1 ? searchPages(searchQuery).slice(0, 8) : []

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }, [searchOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === "Escape") {
        setSearchOpen(false)
        setSearchQuery("")
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xl font-black tracking-tighter text-black">
                GPTPrompts<span className="text-gray-300">.AI</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navCategories.map((cat) => {
                const pages = allPages.filter((p) => p.category === cat.categoryId).slice(0, 6)
                return (
                  <div
                    key={cat.categoryId}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(cat.categoryId)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={cat.href}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-black rounded-md hover:bg-gray-50 transition-colors"
                    >
                      {cat.label}
                      <ChevronDown className="w-3 h-3 opacity-50" />
                    </Link>
                    {activeDropdown === cat.categoryId && (
                      <div className="absolute top-full left-0 pt-1 z-50 w-64">
                        <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                          {pages.map((p) => (
                            <Link
                              key={p.href}
                              href={p.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors border-b border-gray-50 last:border-0"
                            >
                              {p.label}
                            </Link>
                          ))}
                          <Link
                            href={cat.href}
                            className="block px-4 py-2.5 text-sm font-semibold text-black bg-gray-50 hover:bg-gray-100 transition-colors"
                          >
                            View all →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
              <Link
                href="/website-links"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-black rounded-md hover:bg-gray-50 transition-colors"
              >
                All Prompts
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search</span>
                <span className="hidden sm:inline text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">⌘K</span>
              </button>
              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <nav className="px-4 py-4 space-y-1">
              {navCategories.map((cat) => (
                <Link
                  key={cat.categoryId}
                  href={cat.href}
                  className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {cat.label}
                </Link>
              ))}
              <Link
                href="/website-links"
                className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                All Prompts (188+)
              </Link>
              <Link
                href="/ai-tools-list"
                className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                AI Tools Directory
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSearchOpen(false)
              setSearchQuery("")
            }
          }}
        >
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search 188+ prompt guides..."
                className="flex-1 text-base outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={() => {
                  setSearchOpen(false)
                  setSearchQuery("")
                }}
                className="p-1 rounded hover:bg-gray-100"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {searchQuery.length > 1 ? (
              <div className="py-2 max-h-80 overflow-y-auto">
                {results.length > 0 ? (
                  results.map((p) => {
                    const cat = categories.find((c) => c.id === p.category)
                    return (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => {
                          setSearchOpen(false)
                          setSearchQuery("")
                        }}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                      >
                        <span className="text-lg">{cat?.icon || "📄"}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 truncate">{p.label}</div>
                          {p.description && (
                            <div className="text-xs text-gray-500 truncate">{p.description}</div>
                          )}
                        </div>
                        <span className="text-xs text-gray-400 hidden group-hover:block">↵</span>
                      </Link>
                    )
                  })
                ) : (
                  <div className="px-4 py-8 text-center text-sm text-gray-500">
                    No results for &ldquo;{searchQuery}&rdquo;
                  </div>
                )}
              </div>
            ) : (
              <div className="py-4">
                <div className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Popular guides
                </div>
                {allPages
                  .filter((p) => p.featured)
                  .slice(0, 6)
                  .map((p) => {
                    const cat = categories.find((c) => c.id === p.category)
                    return (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => {
                          setSearchOpen(false)
                          setSearchQuery("")
                        }}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-base">{cat?.icon || "📄"}</span>
                        <span className="text-sm text-gray-700">{p.label}</span>
                      </Link>
                    )
                  })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
