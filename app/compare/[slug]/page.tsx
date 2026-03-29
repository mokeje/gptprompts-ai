import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowRight, Check, X, Minus, ExternalLink, ChevronLeft } from "lucide-react"
import { comparisonPairs, getComparisonBySlug, getRelatedComparisons } from "@/data/comparisons"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return comparisonPairs.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const comp = getComparisonBySlug(slug)
  if (!comp) return { title: "Comparison Not Found" }

  return {
    title: `${comp.toolA.name} vs ${comp.toolB.name} (2026): Which AI Tool is Better? | GPTPrompts.AI`,
    description: `${comp.toolA.name} vs ${comp.toolB.name} — honest comparison of pricing, features, and use cases. ${comp.summary}`,
    keywords: [
      `${comp.toolA.name.toLowerCase()} vs ${comp.toolB.name.toLowerCase()}`,
      `${comp.toolB.name.toLowerCase()} vs ${comp.toolA.name.toLowerCase()}`,
      `${comp.toolA.name.toLowerCase()} or ${comp.toolB.name.toLowerCase()}`,
      `best ${comp.toolA.name.toLowerCase()} alternative`,
      `${comp.toolA.name.toLowerCase()} comparison`,
      "AI tools comparison 2026",
    ],
  }
}

const winnerIcon = {
  a: <Check className="w-4 h-4 text-emerald-500" />,
  b: <Check className="w-4 h-4 text-emerald-500" />,
  tie: <Minus className="w-4 h-4 text-gray-400" />,
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params
  const comp = getComparisonBySlug(slug)
  if (!comp) notFound()

  const { toolA, toolB } = comp
  const related = getRelatedComparisons(slug)

  const aWins = comp.categories.filter((c) => c.winner === "a").length
  const bWins = comp.categories.filter((c) => c.winner === "b").length
  const ties = comp.categories.filter((c) => c.winner === "tie").length

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${toolA.name} vs ${toolB.name}: Which is Better in 2026?`,
    description: comp.summary,
    author: { "@type": "Organization", name: "GPTPrompts.AI" },
    dateModified: "2026-03-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gptprompts.ai/compare/${slug}`,
    },
    about: [
      { "@type": "SoftwareApplication", name: toolA.name, url: toolA.url },
      { "@type": "SoftwareApplication", name: toolB.name, url: toolB.url },
    ],
  }

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <div className="bg-black text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/compare" className="hover:text-white transition-colors">Compare</Link>
            <span className="mx-2">/</span>
            <span>{toolA.name} vs {toolB.name}</span>
          </div>

          {/* VS header */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-8">
            {/* Tool A */}
            <div className="flex-1 text-center sm:text-right">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto sm:ml-auto sm:mr-0 mb-3"
                style={{ backgroundColor: `${toolA.color}30` }}
              >
                {toolA.emoji}
              </div>
              <h2 className="text-3xl font-black" style={{ color: toolA.color }}>{toolA.name}</h2>
              <p className="text-sm text-gray-400 mt-1">{toolA.company}</p>
            </div>

            {/* VS */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-lg font-black text-gray-400">VS</span>
              </div>
            </div>

            {/* Tool B */}
            <div className="flex-1 text-center sm:text-left">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto sm:mr-auto sm:ml-0 mb-3"
                style={{ backgroundColor: `${toolB.color}30` }}
              >
                {toolB.emoji}
              </div>
              <h2 className="text-3xl font-black" style={{ color: toolB.color }}>{toolB.name}</h2>
              <p className="text-sm text-gray-400 mt-1">{toolB.company}</p>
            </div>
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-center text-gray-200 mb-4">
            {toolA.name} vs {toolB.name}: Which is Better in 2026?
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">{comp.summary}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Score summary */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="border border-gray-200 rounded-2xl p-5 text-center">
            <div className="text-3xl font-black mb-1" style={{ color: toolA.color }}>{aWins}</div>
            <div className="text-sm font-semibold text-gray-600">{toolA.name} wins</div>
          </div>
          <div className="border border-gray-200 rounded-2xl p-5 text-center">
            <div className="text-3xl font-black text-gray-400 mb-1">{ties}</div>
            <div className="text-sm font-semibold text-gray-500">Ties</div>
          </div>
          <div className="border border-gray-200 rounded-2xl p-5 text-center">
            <div className="text-3xl font-black mb-1" style={{ color: toolB.color }}>{bWins}</div>
            <div className="text-sm font-semibold text-gray-600">{toolB.name} wins</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Quick specs comparison */}
            <section>
              <h2 className="text-2xl font-black mb-5">Quick Comparison</h2>
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                  <div className="p-4 text-xs font-bold uppercase tracking-wider text-gray-400"></div>
                  <div className="p-4 text-sm font-black text-center border-l border-gray-200" style={{ color: toolA.color }}>
                    {toolA.emoji} {toolA.name}
                  </div>
                  <div className="p-4 text-sm font-black text-center border-l border-gray-200" style={{ color: toolB.color }}>
                    {toolB.emoji} {toolB.name}
                  </div>
                </div>
                {[
                  { label: "Pricing", a: toolA.pricingDetail.split("|")[0].trim(), b: toolB.pricingDetail.split("|")[0].trim() },
                  { label: "Category", a: toolA.category, b: toolB.category },
                  { label: "Company", a: toolA.company, b: toolB.company },
                  { label: "Pricing Model", a: toolA.pricing, b: toolB.pricing },
                ].map((row, i) => (
                  <div key={row.label} className={`grid grid-cols-3 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <div className="p-4 text-sm font-semibold text-gray-500">{row.label}</div>
                    <div className="p-4 text-sm text-center border-l border-gray-100 text-gray-700 capitalize">{row.a}</div>
                    <div className="p-4 text-sm text-center border-l border-gray-100 text-gray-700 capitalize">{row.b}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Category breakdown */}
            <section>
              <h2 className="text-2xl font-black mb-5">Head-to-Head Breakdown</h2>
              <div className="space-y-4">
                {comp.categories.map((cat) => (
                  <div key={cat.name} className="border border-gray-200 rounded-xl p-5">
                    <div className="flex items-start justify-between mb-2 gap-4">
                      <h3 className="font-black text-gray-900">{cat.name}</h3>
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: cat.winner === "a" ? `${toolA.color}15` : cat.winner === "b" ? `${toolB.color}15` : "#f3f4f6",
                          color: cat.winner === "a" ? toolA.color : cat.winner === "b" ? toolB.color : "#6b7280",
                        }}
                      >
                        {cat.winner === "a" ? toolA.name : cat.winner === "b" ? toolB.name : "Tie"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{cat.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Verdict */}
            <section className="bg-black text-white rounded-2xl p-8">
              <h2 className="text-2xl font-black mb-4">The Verdict</h2>
              <p className="text-gray-300 leading-relaxed">{comp.verdict}</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={toolA.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2 rounded-full transition-colors"
                  style={{ backgroundColor: toolA.color, color: "white" }}
                >
                  Try {toolA.name} <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={toolB.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2 rounded-full transition-colors"
                  style={{ backgroundColor: toolB.color, color: "white" }}
                >
                  Try {toolB.name} <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </section>

            {/* FAQ */}
            {comp.faq.length > 0 && (
              <section>
                <h2 className="text-2xl font-black mb-5">Frequently Asked Questions</h2>
                <div className="space-y-5">
                  {comp.faq.map((item) => (
                    <div key={item.q} className="border border-gray-200 rounded-xl p-5">
                      <h3 className="font-black text-gray-900 mb-2">{item.q}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Tool A card */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{toolA.emoji}</span>
                <div>
                  <div className="font-black" style={{ color: toolA.color }}>{toolA.name}</div>
                  <div className="text-xs text-gray-400">{toolA.company}</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{toolA.tagline}</p>
              <div className="space-y-1.5 mb-4">
                {toolA.pros.slice(0, 3).map((pro) => (
                  <div key={pro} className="flex items-start gap-2 text-xs text-gray-600">
                    <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {pro}
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <a
                  href={toolA.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-white text-sm font-bold py-2 rounded-lg"
                  style={{ backgroundColor: toolA.color }}
                >
                  Visit {toolA.name} <ExternalLink className="w-3.5 h-3.5" />
                </a>
                {toolA.promptPage && (
                  <Link
                    href={toolA.promptPage}
                    className="w-full flex items-center justify-center gap-2 text-sm font-bold py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    Prompt Guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>

            {/* Tool B card */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{toolB.emoji}</span>
                <div>
                  <div className="font-black" style={{ color: toolB.color }}>{toolB.name}</div>
                  <div className="text-xs text-gray-400">{toolB.company}</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{toolB.tagline}</p>
              <div className="space-y-1.5 mb-4">
                {toolB.pros.slice(0, 3).map((pro) => (
                  <div key={pro} className="flex items-start gap-2 text-xs text-gray-600">
                    <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {pro}
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <a
                  href={toolB.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-white text-sm font-bold py-2 rounded-lg"
                  style={{ backgroundColor: toolB.color }}
                >
                  Visit {toolB.name} <ExternalLink className="w-3.5 h-3.5" />
                </a>
                {toolB.promptPage && (
                  <Link
                    href={toolB.promptPage}
                    className="w-full flex items-center justify-center gap-2 text-sm font-bold py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    Prompt Guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* Related comparisons */}
        {related.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-100">
            <h2 className="text-2xl font-black mb-6">Related Comparisons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/compare/${r.slug}`}
                  className="border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-2 mb-2 text-sm">
                    <span>{r.toolA.emoji}</span>
                    <span className="font-bold text-xs text-gray-400">VS</span>
                    <span>{r.toolB.emoji}</span>
                  </div>
                  <div className="font-black text-sm group-hover:underline">
                    {r.toolA.name} vs {r.toolB.name}
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/compare"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> All comparisons
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
