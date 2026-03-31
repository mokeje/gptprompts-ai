import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { allPromptPages, getPromptPagesByTool } from "@/data/prompt-pages"

interface Props {
  params: Promise<{ tool: string }>
}

// Unique tools in the data
const uniqueTools = Array.from(
  new Map(allPromptPages.map((p) => [p.toolSlug, p.tool])).entries()
)

export async function generateStaticParams() {
  return uniqueTools.map(([slug]) => ({ tool: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tool } = await params
  const pages = getPromptPagesByTool(tool)
  if (!pages.length) return { title: "Not Found" }
  const toolMeta = pages[0].tool
  return {
    title: `${toolMeta.name} Prompts — ${pages.length} Use Cases | GPTPrompts.AI`,
    description: `${pages.length} expert ${toolMeta.name} prompt guides across every use case — resume, marketing, coding, email, and more. Copy-paste ready.`,
  }
}

export default async function ToolHubPage({ params }: Props) {
  const { tool } = await params
  const pages = getPromptPagesByTool(tool)
  if (!pages.length) notFound()

  const toolMeta = pages[0].tool
  const accent = toolMeta.color
  const bgPage = "#07070f"

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${toolMeta.name} Prompt Guides`,
    description: `${pages.length} ${toolMeta.name} prompt guides covering every use case.`,
    url: `https://gptprompts.net/prompts/${tool}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main style={{ background: bgPage, minHeight: "100vh" }}>

        {/* Hero */}
        <div
          className="border-b px-4 py-14"
          style={{
            borderColor: "#1a1a28",
            background: `linear-gradient(135deg, ${accent}12 0%, transparent 60%)`,
          }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <span>/</span>
              <Link href="/prompts" className="hover:text-gray-300">Prompts</Link>
              <span>/</span>
              <span style={{ color: accent }}>{toolMeta.name}</span>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shrink-0"
                style={{ background: `${accent}20`, border: `1px solid ${accent}30` }}
              >
                {toolMeta.emoji}
              </div>
              <div>
                <h1 className="text-white font-black text-3xl md:text-4xl mb-2">
                  {toolMeta.name} Prompt Guides
                </h1>
                <p className="text-gray-400 text-base max-w-2xl">
                  {pages.length} expert prompt guides for {toolMeta.name} — covering every use case from resume writing to coding, marketing, and more. All prompts are copy-paste ready.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="text-xs px-3 py-1.5 rounded-full border font-medium" style={{ borderColor: "#2a2a3a", color: "#888", background: "#0d0d14" }}>
                {pages.length} guides
              </span>
              <span className="text-xs px-3 py-1.5 rounded-full border font-medium" style={{ borderColor: "#2a2a3a", color: "#888", background: "#0d0d14" }}>
                {pages.reduce((s, p) => s + p.sections.reduce((ss, sec) => ss + sec.prompts.length, 0), 0)} total prompts
              </span>
              <a
                href={toolMeta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full border font-medium transition-colors hover:text-white flex items-center gap-1"
                style={{ borderColor: `${accent}40`, color: accent, background: "#0d0d14" }}
              >
                Open {toolMeta.name} ↗
              </a>
            </div>
          </div>
        </div>

        {/* Grid of use cases */}
        <div className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-white font-bold text-lg mb-5">
            Browse {toolMeta.name} Prompt Guides
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pages.map((p) => {
              const totalPrompts = p.sections.reduce((s, sec) => s + sec.prompts.length, 0)
              return (
                <Link
                  key={p.usecaseSlug}
                  href={`/prompts/${p.toolSlug}/${p.usecaseSlug}`}
                  className="flex flex-col justify-between rounded-xl border p-5 transition-all group hover:shadow-lg"
                  style={{ borderColor: "#2a2a3a", background: "#0d0d14" }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = `${accent}50`
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = "#2a2a3a"
                  }}
                >
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-white">
                      {p.hero.headline}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                      {p.meta.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-2 flex-wrap">
                      {p.sections.slice(0, 3).map((sec) => (
                        <span
                          key={sec.tag}
                          className="text-xs px-2 py-0.5 rounded-full border"
                          style={{ borderColor: `${accent}30`, color: accent }}
                        >
                          {sec.tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 shrink-0">
                      {totalPrompts} prompts
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Other tools */}
          {uniqueTools.filter(([slug]) => slug !== tool).length > 0 && (
            <div className="mt-14">
              <h2 className="text-white font-bold text-lg mb-4">Browse Other AI Tools</h2>
              <div className="flex flex-wrap gap-3">
                {uniqueTools
                  .filter(([slug]) => slug !== tool)
                  .map(([slug, t]) => (
                    <Link
                      key={slug}
                      href={`/prompts/${slug}`}
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl border transition-colors"
                      style={{ borderColor: "#2a2a3a", color: "#888", background: "#0d0d14" }}
                    >
                      <span>{t.emoji}</span>
                      {t.name}
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
