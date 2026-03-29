import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowRight, ExternalLink, Check, Star, Trophy } from "lucide-react"
import { useCasesData, getUseCaseBySlug } from "@/data/usecases"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return useCasesData.map((u) => ({ slug: u.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const uc = getUseCaseBySlug(slug)
  if (!uc) return { title: "Not Found" }

  return {
    title: `${uc.title} | GPTPrompts.AI`,
    description: `${uc.description.slice(0, 155)}`,
    keywords: [
      `best AI tools for ${slug.replace(/-/g, " ")}`,
      `AI for ${slug.replace(/-/g, " ")}`,
      `best AI ${slug.replace(/-/g, " ")} tool`,
      `top AI tools 2026`,
      uc.title.toLowerCase(),
    ],
  }
}

export default async function BestAIForPage({ params }: Props) {
  const { slug } = await params
  const uc = getUseCaseBySlug(slug)
  if (!uc) notFound()

  const { resolvedTools } = uc
  const verdictTool = resolvedTools.find((t) => t.slug === uc.verdictSlug)

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: uc.title,
    description: uc.description,
    author: { "@type": "Organization", name: "GPTPrompts.AI" },
    dateModified: "2026-03-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gptprompts.ai/best-ai-for/${slug}`,
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: uc.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: uc.title,
    description: uc.description,
    numberOfItems: resolvedTools.length,
    itemListElement: resolvedTools.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.tool.name,
      url: `https://gptprompts.ai/ai-tools/${t.slug}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <div className="text-white py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: uc.color }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-4 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/best-ai-for" className="hover:text-white transition-colors">Best AI For</Link>
              <span className="mx-2">/</span>
              <span>{uc.headline}</span>
            </div>

            <div className="flex items-start gap-5">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
              >
                {uc.emoji}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-3">
                  {uc.title}
                </h1>
                <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {uc.description}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div
                className="px-4 py-2 rounded-xl text-sm font-medium"
                style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "rgba(255,255,255,0.9)" }}
              >
                {resolvedTools.length} tools ranked
              </div>
              <div
                className="px-4 py-2 rounded-xl text-sm font-medium"
                style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "rgba(255,255,255,0.9)" }}
              >
                {uc.faqs.length} FAQs answered
              </div>
              <div
                className="px-4 py-2 rounded-xl text-sm font-medium"
                style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "rgba(255,255,255,0.9)" }}
              >
                Updated March 2026
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Left: ranked list */}
            <div className="lg:col-span-2">

              {/* Verdict callout */}
              {verdictTool && (
                <div
                  className="border-2 rounded-2xl p-6 mb-10"
                  style={{ borderColor: uc.color, backgroundColor: `${uc.color}08` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="w-5 h-5" style={{ color: uc.color }} />
                    <span className="text-sm font-bold uppercase tracking-wider" style={{ color: uc.color }}>
                      Our Verdict
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ backgroundColor: `${verdictTool.tool.color}18` }}
                    >
                      {verdictTool.tool.emoji}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-black text-xl text-black mb-1">{verdictTool.tool.name}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{uc.verdict}</p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <Link
                          href={`/ai-tools/${verdictTool.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-bold text-white px-4 py-2 rounded-full transition-colors"
                          style={{ backgroundColor: uc.color }}
                        >
                          View {verdictTool.tool.name} <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <a
                          href={verdictTool.tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium border border-gray-200 px-4 py-2 rounded-full hover:border-gray-400 transition-colors"
                        >
                          Try it free <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Full ranked list */}
              <h2 className="text-2xl font-black mb-6">
                All {resolvedTools.length} Best AI Tools for {uc.headline.replace("Best AI for ", "").replace("Best AI ", "")}
              </h2>

              <div className="space-y-5">
                {resolvedTools.map((t, i) => (
                  <div
                    key={t.slug}
                    className={`border rounded-2xl p-6 transition-all hover:shadow-sm ${
                      t.highlight ? "border-2" : "border-gray-200 hover:border-gray-300"
                    }`}
                    style={t.highlight ? { borderColor: uc.color } : {}}
                  >
                    <div className="flex items-start gap-4">
                      {/* Rank */}
                      <div
                        className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-black text-sm ${
                          i === 0 ? "text-white" : "bg-gray-100 text-gray-500"
                        }`}
                        style={i === 0 ? { backgroundColor: uc.color } : {}}
                      >
                        {i === 0 ? <Star className="w-4 h-4" /> : i + 1}
                      </div>

                      {/* Tool icon */}
                      <span
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ backgroundColor: `${t.tool.color}18` }}
                      >
                        {t.tool.emoji}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div>
                            <h3 className="font-black text-lg text-black">{t.tool.name}</h3>
                            <div className="text-sm text-gray-500">{t.tool.company} · {t.tool.pricingDetail}</div>
                          </div>
                          {t.highlight && (
                            <span
                              className="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                              style={{ backgroundColor: uc.color }}
                            >
                              Top Pick
                            </span>
                          )}
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{t.reason}</p>

                        <div className="flex items-start gap-2 text-xs text-gray-500 mb-4">
                          <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-gray-700">Best for:</strong> {t.bestFor}</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Link
                            href={`/ai-tools/${t.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold border border-gray-200 px-3 py-1.5 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors"
                          >
                            Full review <ArrowRight className="w-3 h-3" />
                          </Link>
                          <a
                            href={t.tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold border border-gray-200 px-3 py-1.5 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors"
                          >
                            Visit site <ExternalLink className="w-3 h-3" />
                          </a>
                          {t.tool.promptPage && (
                            <Link
                              href={t.tool.promptPage}
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 border border-gray-100 px-3 py-1.5 rounded-full hover:border-gray-300 transition-colors"
                            >
                              Prompt guide
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              {uc.faqs.length > 0 && (
                <div className="mt-14">
                  <h2 className="text-2xl font-black mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-5">
                    {uc.faqs.map((faq, i) => (
                      <div key={i} className="border border-gray-200 rounded-2xl p-6">
                        <h3 className="font-bold text-black mb-2">{faq.question}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 mt-12 lg:mt-0">
              {/* Quick rankings */}
              <div className="border border-gray-200 rounded-2xl p-6 mb-6 sticky top-24">
                <h3 className="font-black text-sm uppercase tracking-wider text-gray-400 mb-4">
                  Quick Rankings
                </h3>
                <div className="space-y-3">
                  {resolvedTools.map((t, i) => (
                    <Link
                      key={t.slug}
                      href={`/ai-tools/${t.slug}`}
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                          i === 0 ? "text-white" : "bg-gray-100 text-gray-500"
                        }`}
                        style={i === 0 ? { backgroundColor: uc.color } : {}}
                      >
                        {i + 1}
                      </div>
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                        style={{ backgroundColor: `${t.tool.color}18` }}
                      >
                        {t.tool.emoji}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-800 group-hover:text-black truncate">
                          {t.tool.name}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">{t.tool.pricing}</div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100 space-y-2">
                  <Link
                    href="/compare"
                    className="flex items-center justify-center gap-2 text-sm font-bold border border-gray-200 px-4 py-2.5 rounded-xl hover:border-gray-400 transition-colors"
                  >
                    Compare these tools <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/alternatives/${uc.verdictSlug}`}
                    className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500 border border-gray-100 px-4 py-2.5 rounded-xl hover:border-gray-300 transition-colors"
                  >
                    {verdictTool?.tool.name} alternatives
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Browse more use cases */}
          <div className="mt-16 border-t border-gray-100 pt-12">
            <h2 className="text-xl font-black mb-6">Browse more use cases</h2>
            <div className="flex flex-wrap gap-3">
              {useCasesData
                .filter((u) => u.slug !== slug)
                .map((u) => (
                  <Link
                    key={u.slug}
                    href={`/best-ai-for/${u.slug}`}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
                  >
                    <span>{u.emoji}</span>
                    {u.headline}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
