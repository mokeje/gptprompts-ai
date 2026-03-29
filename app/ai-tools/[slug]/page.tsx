import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowRight, ExternalLink, Check, ChevronLeft } from "lucide-react"
import { allTools, getToolBySlug, getToolsByCategory, toolCategories } from "@/data/tools"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allTools.map((tool) => ({ slug: tool.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = getToolBySlug(slug)
  if (!tool) return { title: "Tool Not Found" }

  return {
    title: `${tool.name} Review 2026 — Pricing, Features & Prompt Guide | GPTPrompts.AI`,
    description: `${tool.tagline}. Full review of ${tool.name}: pricing (${tool.pricingDetail.split("|")[0].trim()}), best use cases, pros, and the best prompts to get the most out of it.`,
    keywords: [
      tool.name.toLowerCase(),
      `${tool.name.toLowerCase()} review`,
      `${tool.name.toLowerCase()} pricing`,
      `${tool.name.toLowerCase()} tutorial`,
      `best ${tool.name.toLowerCase()} prompts`,
      "AI tools",
      ...tool.tags,
    ],
  }
}

const pricingBadge: Record<string, { label: string; color: string; bg: string; border: string }> = {
  free: {
    label: "Free",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  freemium: {
    label: "Freemium",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  paid: {
    label: "Paid",
    color: "text-gray-700",
    bg: "bg-gray-50",
    border: "border-gray-200",
  },
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params
  const tool = getToolBySlug(slug)
  if (!tool) notFound()

  const category = toolCategories.find((c) => c.id === tool.category)
  const relatedTools = getToolsByCategory(tool.category)
    .filter((t) => t.slug !== tool.slug)
    .slice(0, 4)
  const badge = pricingBadge[tool.pricing]
  const pricingTiers = tool.pricingDetail.split("|").map((s) => s.trim())

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    url: tool.url,
    applicationCategory: "Artificial Intelligence",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: tool.pricing === "free" ? "0" : undefined,
      priceCurrency: "USD",
      description: tool.pricingDetail,
    },
    provider: {
      "@type": "Organization",
      name: tool.company,
    },
  }

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <div className="text-white py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: tool.color }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-4 text-sm opacity-70">
            <Link href="/" className="hover:opacity-100 transition-opacity">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/ai-tools" className="hover:opacity-100 transition-opacity">AI Tools</Link>
            <span className="mx-2">/</span>
            <span>{tool.name}</span>
          </div>

          <div className="flex items-start gap-5 mb-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl bg-white/20 flex-shrink-0">
              {tool.emoji}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${badge.color} ${badge.bg} ${badge.border}`}>
                  {badge.label}
                </span>
                {category && (
                  <span className="text-xs font-semibold opacity-80 uppercase tracking-wider">
                    {category.icon} {category.label}
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">{tool.name}</h1>
              <p className="text-lg opacity-90 max-w-xl">{tool.tagline}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors text-sm"
            >
              Visit {tool.name} <ExternalLink className="w-3.5 h-3.5" />
            </a>
            {tool.promptPage && (
              <Link
                href={tool.promptPage}
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-2.5 rounded-full transition-colors text-sm border border-white/30"
              >
                Prompt Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* What is it */}
            <section>
              <h2 className="text-2xl font-black mb-4">What is {tool.name}?</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{tool.description}</p>
            </section>

            {/* Best for */}
            <section>
              <h2 className="text-2xl font-black mb-4">Best For</h2>
              <ul className="space-y-2">
                {tool.bestFor.map((use) => (
                  <li key={use} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{use}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Why it stands out */}
            <section>
              <h2 className="text-2xl font-black mb-4">Why {tool.name} Stands Out</h2>
              <ul className="space-y-2">
                {tool.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: tool.color }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{pro}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Prompt guide CTA */}
            {tool.promptPage && (
              <section
                className="rounded-2xl p-8"
                style={{ backgroundColor: `${tool.color}10`, border: `1px solid ${tool.color}30` }}
              >
                <h2 className="text-xl font-black mb-2">Get More from {tool.name}</h2>
                <p className="text-gray-600 mb-5">
                  The right prompts unlock {tool.name} at its full potential. Our dedicated prompt guide covers the best techniques, frameworks, and ready-to-use examples.
                </p>
                <Link
                  href={tool.promptPage}
                  className="inline-flex items-center gap-2 text-white font-bold px-6 py-2.5 rounded-full transition-colors text-sm"
                  style={{ backgroundColor: tool.color }}
                >
                  View {tool.name} Prompt Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick facts */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-black mb-4">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-400 font-medium uppercase tracking-wider text-xs mb-0.5">Company</dt>
                  <dd className="font-semibold text-gray-800">{tool.company}</dd>
                </div>
                <div>
                  <dt className="text-gray-400 font-medium uppercase tracking-wider text-xs mb-0.5">Category</dt>
                  <dd className="font-semibold text-gray-800">{category?.label}</dd>
                </div>
                <div>
                  <dt className="text-gray-400 font-medium uppercase tracking-wider text-xs mb-0.5">Pricing Model</dt>
                  <dd>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${badge.color} ${badge.bg} ${badge.border}`}>
                      {badge.label}
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-400 font-medium uppercase tracking-wider text-xs mb-1.5">Tags</dt>
                  <dd className="flex flex-wrap gap-1">
                    {tool.tags.slice(0, 5).map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-white font-bold px-4 py-2.5 rounded-xl transition-colors text-sm"
                  style={{ backgroundColor: tool.color }}
                >
                  Visit {tool.name} <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Pricing */}
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-black mb-4">Pricing</h3>
              <ul className="space-y-2.5">
                {pricingTiers.map((tier, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tier}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Related tools */}
        {relatedTools.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-100">
            <h2 className="text-2xl font-black mb-6">
              More {category?.label} Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedTools.map((t) => {
                const b = pricingBadge[t.pricing]
                return (
                  <Link
                    key={t.slug}
                    href={`/ai-tools/${t.slug}`}
                    className="border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{t.emoji}</span>
                      <div>
                        <div className="font-black text-sm group-hover:underline">{t.name}</div>
                        <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-full border ${b.color} ${b.bg} ${b.border}`}>
                          {b.label}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-2">{t.tagline}</p>
                  </Link>
                )
              })}
            </div>
            <div className="mt-6">
              <Link
                href="/ai-tools"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Back to all AI Tools
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
