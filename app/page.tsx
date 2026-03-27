import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Zap, Search, BookOpen, Layers } from "lucide-react"
import { allPages, categories, getFeaturedPages } from "@/data/pages"
import { HomePageGEOSchemas } from "@/components/geo-schemas"

export const metadata: Metadata = {
  title: "GPTPrompts.AI — Master AI Prompts & Prompt Engineering",
  description:
    "The internet's most comprehensive prompt engineering resource. 188+ expert guides for ChatGPT, Claude, Gemini, Midjourney, and more. Free, up-to-date, and AI-search optimized. Last updated 2026.",
  keywords: [
    "AI prompts",
    "prompt engineering",
    "ChatGPT prompts",
    "Claude prompts",
    "Gemini prompts",
    "Midjourney prompts",
    "prompt guide",
    "best AI prompts",
  ],
}

const stats = [
  { value: "188+", label: "Prompt Guides" },
  { value: "10", label: "Content Categories" },
  { value: "Free", label: "Always" },
  { value: "2026", label: "Up to Date" },
]

const categoryHighlights = [
  {
    id: "ai-models",
    title: "AI Model Guides",
    description: "Deep dives into ChatGPT, Claude, Gemini, and every major AI model",
    icon: "🤖",
    color: "bg-emerald-500",
    pages: [
      { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
      { label: "Claude Prompts", href: "/claude-prompts" },
      { label: "Gemini Prompts", href: "/gemini-prompts" },
      { label: "Midjourney Prompts", href: "/midjourney-prompts" },
    ],
    count: 10,
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    description: "Techniques, frameworks, and strategies to master AI communication",
    icon: "🔧",
    color: "bg-amber-500",
    pages: [
      { label: "8-Step Framework", href: "/how-to-write-effective-ai-prompts" },
      { label: "Few-Shot Prompting", href: "/few-shot-prompting" },
      { label: "Prompt Chaining", href: "/prompt-chaining-guide" },
      { label: "Avoid Hallucinations", href: "/avoiding-hallucinations" },
    ],
    count: 28,
  },
  {
    id: "image-video",
    title: "Image & Video AI",
    description: "Create stunning visuals with Midjourney, DALL-E 3, Stable Diffusion & more",
    icon: "🎨",
    color: "bg-pink-500",
    pages: [
      { label: "Midjourney Guide", href: "/midjourney-guide" },
      { label: "DALL-E 3 Prompts", href: "/dalle-3-prompts" },
      { label: "Stable Diffusion", href: "/stable-diffusion-guide" },
      { label: "Leonardo AI", href: "/leonardo-ai-prompts" },
    ],
    count: 24,
  },
  {
    id: "career-writing",
    title: "Career & Writing",
    description: "Resumes, cover letters, creative writing, and professional content",
    icon: "✍️",
    color: "bg-teal-500",
    pages: [
      { label: "Resume Prompts", href: "/resume-prompts" },
      { label: "Cover Letters", href: "/cover-letter-prompts" },
      { label: "Creative Writing", href: "/chatgpt-creative-writing" },
      { label: "Story Prompts", href: "/story-prompts" },
    ],
    count: 15,
  },
  {
    id: "academic",
    title: "Academic & Tests",
    description: "SAT, IELTS, GMAT, A-Levels — ace every exam with AI assistance",
    icon: "🎓",
    color: "bg-violet-500",
    pages: [
      { label: "SAT & ACT Prep", href: "/sat-act-prep" },
      { label: "IELTS Prompts", href: "/ielts-prompts" },
      { label: "GMAT Prompts", href: "/gmat-prompts" },
      { label: "College Essays", href: "/college-application-essays" },
    ],
    count: 18,
  },
  {
    id: "industry",
    title: "Industry Guides",
    description: "Specialized prompts for legal, medical, real estate, nonprofits & more",
    icon: "🏢",
    color: "bg-orange-500",
    pages: [
      { label: "Legal Prompts", href: "/legal-brief-prompts" },
      { label: "Medical Education", href: "/medical-education-prompts" },
      { label: "Real Estate AI", href: "/real-estate-market-analysis" },
      { label: "Nonprofit Writing", href: "/nonprofit-grant-writing" },
    ],
    count: 22,
  },
]

const featuredGuides = [
  {
    label: "How to Write Effective AI Prompts",
    href: "/how-to-write-effective-ai-prompts",
    description: "Master the 8-step framework for consistently great results",
    badge: "Start Here",
    badgeColor: "bg-black text-white",
  },
  {
    label: "ChatGPT Prompts: Complete Guide",
    href: "/chatgpt-prompts",
    description: "Advanced techniques, mega-prompts, and business applications",
    badge: "Most Popular",
    badgeColor: "bg-emerald-100 text-emerald-800",
  },
  {
    label: "Midjourney: Master Guide",
    href: "/midjourney-guide",
    description: "From beginner to expert — every parameter and technique explained",
    badge: "Image AI",
    badgeColor: "bg-pink-100 text-pink-800",
  },
  {
    label: "Claude Prompts: Expert Guide",
    href: "/claude-prompts",
    description: "XML tags, artifacts, and reasoning chains for Claude mastery",
    badge: "Advanced",
    badgeColor: "bg-amber-100 text-amber-800",
  },
  {
    label: "Few-Shot Prompting",
    href: "/few-shot-prompting",
    description: "Use examples to get 10x better AI responses every time",
    badge: "Technique",
    badgeColor: "bg-violet-100 text-violet-800",
  },
  {
    label: "College Application Essays",
    href: "/college-application-essays",
    description: "Win admissions at top schools with AI-crafted essays",
    badge: "Student",
    badgeColor: "bg-blue-100 text-blue-800",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HomePageGEOSchemas />

      {/* Hero */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              188+ guides · Updated 2026
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none mb-6">
              The world&apos;s best
              <br />
              <span className="text-gray-400">prompt library.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-10">
              Expert guides for ChatGPT, Claude, Gemini, Midjourney and 30+ more AI tools.
              Free. Comprehensive. Actually useful.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/website-links"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse all guides
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/how-to-write-effective-ai-prompts"
                className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Start with the basics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-3xl font-black text-black">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-black tracking-tight text-black mb-3">
            Browse by category
          </h2>
          <p className="text-lg text-gray-500">
            188+ prompt guides organized into 10 focused categories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryHighlights.map((cat) => (
            <div
              key={cat.id}
              className="group border border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:shadow-lg transition-all duration-200 bg-white"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <h3 className="font-bold text-black">{cat.title}</h3>
                    <span className="text-xs text-gray-400">{cat.count} guides</span>
                  </div>
                </div>
                <Link
                  href={`/library#${cat.id}`}
                  className="text-xs font-medium text-gray-400 group-hover:text-black transition-colors"
                >
                  View all →
                </Link>
              </div>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{cat.description}</p>
              <ul className="space-y-1.5">
                {cat.pages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="text-sm text-gray-700 hover:text-black hover:underline transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 bg-gray-300 rounded-full flex-shrink-0" />
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Guides */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-black tracking-tight text-black mb-3">
              Start here
            </h2>
            <p className="text-lg text-gray-500">
              Our most popular guides — the ones that actually move the needle
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-400 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${guide.badgeColor}`}>
                    {guide.badge}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="font-bold text-black mb-1.5 leading-tight">{guide.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{guide.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/website-links"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black underline underline-offset-4 hover:no-underline"
            >
              View all 188+ guides
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What is prompt engineering */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-6">
              What is prompt engineering?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Prompt engineering is the practice of designing precise inputs for AI systems to get better, more
              consistent outputs. It&apos;s the difference between an AI that gives vague answers and one that delivers
              expert-level responses.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you&apos;re a beginner asking ChatGPT for help or an engineer building AI-powered applications,
              GPTPrompts.AI gives you the frameworks, examples, and techniques you need.
            </p>
            <Link
              href="/prompt-engineering-fundamentals"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Learn the fundamentals
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Better results",
                desc: "Structured prompts consistently outperform vague instructions",
              },
              {
                icon: <Search className="w-5 h-5" />,
                title: "More accurate",
                desc: "Specific context and constraints reduce hallucinations",
              },
              {
                icon: <BookOpen className="w-5 h-5" />,
                title: "Save time",
                desc: "A well-crafted prompt gets the right answer first time",
              },
              {
                icon: <Layers className="w-5 h-5" />,
                title: "Any use case",
                desc: "From writing to code to research — prompts work everywhere",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="mb-3 text-black">{item.icon}</div>
                <h3 className="font-bold text-black mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular AI Tools */}
      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black tracking-tight text-black mb-8">
            Prompts for every AI tool
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "ChatGPT", href: "/chatgpt-prompts", color: "bg-emerald-50 text-emerald-800 border-emerald-200" },
              { label: "Claude", href: "/claude-prompts", color: "bg-orange-50 text-orange-800 border-orange-200" },
              { label: "Gemini", href: "/gemini-prompts", color: "bg-blue-50 text-blue-800 border-blue-200" },
              { label: "Midjourney", href: "/midjourney-prompts", color: "bg-purple-50 text-purple-800 border-purple-200" },
              { label: "DALL-E 3", href: "/dalle-3-prompts", color: "bg-gray-50 text-gray-800 border-gray-200" },
              { label: "Stable Diffusion", href: "/stable-diffusion-prompts", color: "bg-yellow-50 text-yellow-800 border-yellow-200" },
              { label: "Perplexity", href: "/perplexity-prompts", color: "bg-sky-50 text-sky-800 border-sky-200" },
              { label: "DeepSeek", href: "/deepseek-ai-prompts", color: "bg-indigo-50 text-indigo-800 border-indigo-200" },
              { label: "Microsoft Copilot", href: "/microsoft-copilot-prompts", color: "bg-blue-50 text-blue-800 border-blue-200" },
              { label: "Leonardo AI", href: "/leonardo-ai-prompts", color: "bg-rose-50 text-rose-800 border-rose-200" },
              { label: "Runway ML", href: "/runway-ml-prompts", color: "bg-teal-50 text-teal-800 border-teal-200" },
              { label: "Adobe Firefly", href: "/adobe-firefly-prompts", color: "bg-red-50 text-red-800 border-red-200" },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className={`inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium hover:shadow-sm transition-shadow ${tool.color}`}
              >
                {tool.label}
              </Link>
            ))}
            <Link
              href="/website-links"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-600 hover:border-gray-400 transition-colors"
            >
              +30 more <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-black text-white rounded-3xl px-8 py-16 text-center">
          <h2 className="text-4xl font-black tracking-tight mb-4">
            Ready to master AI prompts?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Start with our free 8-step framework and unlock better results from every AI tool you use.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/how-to-write-effective-ai-prompts"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start the free guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/website-links"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Browse 188+ guides
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
