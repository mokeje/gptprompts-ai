import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowRight, ExternalLink, ChevronLeft, Star, Check } from "lucide-react"
import { alternativesData, getAlternativesBySlug } from "@/data/alternatives"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return alternativesData.map((a) => ({ slug: a.toolSlug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const alt = getAlternativesBySlug(slug)
  if (!alt) return { title: "Not Found" }

  const topAlt = alt.resolvedAlternatives[0]

  return {
    title: `Best ${alt.tool.name} Alternatives 2026 — Top ${alt.resolvedAlternatives.length} Picks | GPTPrompts.AI`,
    description: `The best ${alt.tool.name} alternatives in 2026. ${alt.summary.slice(0, 120)}... Honest picks with clear verdicts.`,
    keywords: [
      `${alt.tool.name.toLowerCase()} alternatives`,
      `best ${alt.tool.name.toLowerCase()} alternatives`,
      `${alt.tool.name.toLowerCase()} alternative`,
      `tools like ${alt.tool.name.toLowerCase()}`,
      `${alt.tool.name.toLowerCase()} replacement`,
      `AI tools 2026`,
    ],
  }
}

export default async function AlternativesPage({ params }: Props) {
  const { slug } = await params
  const alt = getAlternativesBySlug(slug)
  if (!alt) notFound()

  const { tool, resolvedAlternatives } = alt

  const ratingColor = (rating: string) => {
    if (rating === "excellent") return { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", label: "Excellent" }
    if (rating === "great") return { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", label: "Great" }
    return { bg: "bg-gray-50", text: "text-gray-600", border: "border-gray-200", label: "Good" }
  }

  const verdictTool = resolvedAlternatives.find((a) => a.slug === alt.verdictSlug)

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best ${tool.name} Alternatives in 2026`,
    description: alt.summary,
    author: { "@type": "Organization", name: "GPTPrompts.AI" },
    dateModified: "2026-03-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gptprompts.ai/alternatives/${slug}`,
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: alt.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <div className="text-white py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: tool.color }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-4 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/alternatives" className="hover:text-white transition-colors">Alternatives</Link>
              <span className="mx-2">/</span>
              <span>{tool.name} Alternatives</span>
            </div>

            <div className="flex items-start gap-5">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
              >
                {tool.emoji}
              </div>
              <div>
                <div className="text-sm font-medium mb-1" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {tool.company}
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-3">
                  Best {tool.name} Alternatives
                  <span className="block text-2xl md:text-3xl mt-1" style={{ color: "rgba(255,255,255,0.8)" }}>
                    in 2026
                  </span>
                </h1>
                <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {alt.summary}
                </p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div
                className="px-4 py-2 rounded-xl text-sm font-medium"
                style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "rgba(255,255,255,0.9)" }}
              >
                {resolvedAlternatives.length} alternatives ranked
              </div>
              <div
                className="px-4 py-2 rounded-xl text-sm font-medium"
                style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "rgba(255,255,255,0.9)" }}
              >
                {resolvedAlternatives.filter((a) => a.rating === "excellent").length} rated Excellent
              </div>
              <div
                className="px-4 py-2 rounded-xl text-sm font-medium"
                style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "rgba(255,255,255,0.9)" }}
              >
                {alt.faqs.length} FAQs answered
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Left: alternatives list */}
            <div className="lg:col-span-2">
              {/* Verdict callout */}
              {verdictTool && (
                <div
                  className="border-2 rounded-2xl p-6 mb-10"
                  style={{ borderColor: tool.color, backgroundColor: `${tool.color}08` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5" style={{ color: tool.color }} />
                    <span className="text-sm font-bold uppercase tracking-wider" style={{ color: tool.color }}>
                      Top Pick
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ backgroundColor: `${verdictTool.tool.color}18` }}
                    >
                      {verdictTool.tool.emoji}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-black text-xl text-black mb-1">{verdictTool.tool.name}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{alt.verdict}</p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <Link
                          href={`/ai-tools/${verdictTool.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-bold text-white px-4 py-2 rounded-full transition-colors"
                          style={{ backgroundColor: tool.color }}
                        >
                          View {verdictTool.tool.name} <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        {verdictTool.tool.promptPage && (
                          <Link
                            href={verdictTool.tool.promptPage}
                            className="inline-flex items-center gap-2 text-sm font-medium border border-gray-200 px-4 py-2 rounded-full hover:border-gray-400 transition-colors"
                          >
                            Prompt guide
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* All alternatives */}
              <h2 className="text-2xl font-black mb-6">
                All {tool.name} Alternatives, Ranked
              </h2>

              <div className="space-y-6">
                {resolvedAlternatives.map((a, i) => {
                  const rc = ratingColor(a.rating)
                  return (
                    <div
                      key={a.slug}
                      className="border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all"
                    >
                      <div className="flex items-start gap-4">
                        {/* Rank */}
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-black text-sm text-gray-500">
                          {i + 1}
                        </div>

                        {/* Icon */}
                        <span
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                          style={{ backgroundColor: `${a.tool.color}18` }}
                        >
                          {a.tool.emoji}
                        </span>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div>
                              <h3 className="font-black text-lg text-black">{a.tool.name}</h3>
                              <div className="text-sm text-gray-500">{a.tool.company} · {a.tool.pricingDetail}</div>
                            </div>
                            <span className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border ${rc.bg} ${rc.text} ${rc.border}`}>
                              {rc.label}
                            </span>
                          </div>

                          <p className="text-gray-600 text-sm leading-relaxed mb-3">{a.reason}</p>

                          <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                            <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            <span><strong className="text-gray-700">Best for:</strong> {a.bestFor}</span>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Link
                              href={`/ai-tools/${a.slug}`}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold border border-gray-200 px-3 py-1.5 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors"
                            >
                              View {a.tool.name} <ArrowRight className="w-3 h-3" />
                            </Link>
                            <a
                              href={a.tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold border border-gray-200 px-3 py-1.5 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors"
                            >
                              Visit site <ExternalLink className="w-3 h-3" />
                            </a>
                            {a.tool.promptPage && (
                              <Link
                                href={a.tool.promptPage}
                                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 border border-gray-100 px-3 py-1.5 rounded-full hover:border-gray-300 transition-colors"
                              >
                                Prompt guide
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* FAQ section */}
              {alt.faqs.length > 0 && (
                <div className="mt-14">
                  <h2 className="text-2xl font-black mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-5">
                    {alt.faqs.map((faq, i) => (
                      <div key={i} className="border border-gray-200 rounded-2xl p-6">
                        <h3 className="font-bold text-black mb-2">{faq.question}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-1 mt-12 lg:mt-0">
              {/* About the tool */}
              <div className="border border-gray-200 rounded-2xl p-6 mb-6">
                <h3 className="font-black text-sm uppercase tracking-wider text-gray-400 mb-4">
                  About {tool.name}
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ backgroundColor: `${tool.color}18` }}
                  >
                    {tool.emoji}
                  </span>
                  <div>
                    <div className="font-bold text-black">{tool.name}</div>
                    <div className="text-xs text-gray-500">{tool.company}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{tool.tagline}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Pricing</span>
                    <span className="font-medium text-gray-800 capitalize">{tool.pricing}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Category</span>
                    <span className="font-medium text-gray-800 capitalize">{tool.category}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href={`/ai-tools/${tool.slug}`}
                    className="flex items-center justify-center gap-2 text-sm font-bold text-white px-4 py-2.5 rounded-xl transition-colors"
                    style={{ backgroundColor: tool.color }}
                  >
                    {tool.name} full review <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm font-medium border border-gray-200 px-4 py-2.5 rounded-xl hover:border-gray-400 transition-colors"
                  >
                    Visit {tool.name} <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Quick comparison table */}
              <div className="border border-gray-200 rounded-2xl p-6 mb-6">
                <h3 className="font-black text-sm uppercase tracking-wider text-gray-400 mb-4">
                  Quick Comparison
                </h3>
                <div className="space-y-3">
                  {resolvedAlternatives.slice(0, 5).map((a) => (
                    <Link
                      key={a.slug}
                      href={`/ai-tools/${a.slug}`}
                      className="flex items-center gap-3 group"
                    >
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                        style={{ backgroundColor: `${a.tool.color}18` }}
                      >
                        {a.tool.emoji}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-800 group-hover:text-black truncate">
                          {a.tool.name}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">{a.tool.pricing}</div>
                      </div>
                      <span
                        className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${ratingColor(a.rating).bg} ${ratingColor(a.rating).text}`}
                      >
                        {ratingColor(a.rating).label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Compare CTA */}
              <div className="bg-black text-white rounded-2xl p-6">
                <h3 className="font-black text-base mb-2">Compare head to head</h3>
                <p className="text-gray-400 text-sm mb-4">
                  See a side-by-side feature comparison between {tool.name} and any alternative.
                </p>
                <Link
                  href="/compare"
                  className="flex items-center justify-center gap-2 text-sm font-bold bg-white text-black px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  View comparisons <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* All alternatives footer nav */}
          <div className="mt-16 border-t border-gray-100 pt-12">
            <h2 className="text-xl font-black mb-6">Browse more alternatives</h2>
            <div className="flex flex-wrap gap-3">
              {alternativesData
                .filter((a) => a.toolSlug !== slug)
                .map((a) => {
                  const t = getAlternativesBySlug(a.toolSlug)
                  if (!t) return null
                  return (
                    <Link
                      key={a.toolSlug}
                      href={`/alternatives/${a.toolSlug}`}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
                    >
                      <span>{t.tool.emoji}</span>
                      {t.tool.name} alternatives
                    </Link>
                  )
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
