import Link from "next/link"
import type { Metadata } from "next"
import { allPromptPages } from "@/data/prompt-pages"

export const metadata: Metadata = {
  title: "AI Prompt Guides — ChatGPT, Claude, Gemini & More | GPTPrompts.AI",
  description:
    "Expert prompt guides for every AI tool and use case. Copy-paste ready prompts for ChatGPT, Claude, Gemini, Midjourney and more — covering resume, marketing, coding, email, and hundreds of other use cases.",
}

export default function PromptsIndexPage() {
  const bgPage = "#07070f"
  const accent = "#7c6af7"

  // Group pages by tool
  const byTool = new Map<string, typeof allPromptPages>()
  for (const p of allPromptPages) {
    if (!byTool.has(p.toolSlug)) byTool.set(p.toolSlug, [])
    byTool.get(p.toolSlug)!.push(p)
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Prompt Guides",
    description: "Expert prompt guides for every AI tool and use case.",
    url: "https://gptprompts.net/prompts",
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
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <span>/</span>
              <span style={{ color: accent }}>Prompts</span>
            </div>
            <h1 className="text-white font-black text-3xl md:text-5xl mb-4 leading-tight">
              AI Prompt Guides
            </h1>
            <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
              Copy-paste ready prompts for every AI tool and use case. From resume writing to coding, marketing to creative writing — every guide is packed with real, working prompts.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="text-xs px-3 py-1.5 rounded-full border font-medium" style={{ borderColor: "#2a2a3a", color: "#888", background: "#0d0d14" }}>
                {allPromptPages.length} guides
              </span>
              <span className="text-xs px-3 py-1.5 rounded-full border font-medium" style={{ borderColor: "#2a2a3a", color: "#888", background: "#0d0d14" }}>
                {allPromptPages.reduce((s, p) => s + p.sections.reduce((ss, sec) => ss + sec.prompts.length, 0), 0)} prompts
              </span>
              <span className="text-xs px-3 py-1.5 rounded-full border font-medium" style={{ borderColor: "#2a2a3a", color: "#888", background: "#0d0d14" }}>
                {byTool.size} AI tools
              </span>
            </div>
          </div>
        </div>

        {/* Tools grid */}
        <div className="max-w-5xl mx-auto px-4 py-10">
          {Array.from(byTool.entries()).map(([toolSlug, pages]) => {
            const toolMeta = pages[0].tool
            const toolAccent = toolMeta.color
            const totalPrompts = pages.reduce(
              (s, p) => s + p.sections.reduce((ss, sec) => ss + sec.prompts.length, 0),
              0
            )

            return (
              <div key={toolSlug} className="mb-12">
                {/* Tool header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: `${toolAccent}20`, border: `1px solid ${toolAccent}30` }}
                    >
                      {toolMeta.emoji}
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-lg">{toolMeta.name} Prompts</h2>
                      <p className="text-gray-500 text-xs">{pages.length} guides · {totalPrompts} prompts</p>
                    </div>
                  </div>
                  <Link
                    href={`/prompts/${toolSlug}`}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors"
                    style={{ borderColor: `${toolAccent}40`, color: toolAccent, background: "#0d0d14" }}
                  >
                    View all →
                  </Link>
                </div>

                {/* Use case cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {pages.map((p) => {
                    const pCount = p.sections.reduce((s, sec) => s + sec.prompts.length, 0)
                    return (
                      <Link
                        key={p.usecaseSlug}
                        href={`/prompts/${p.toolSlug}/${p.usecaseSlug}`}
                        className="rounded-xl border p-4 transition-colors group flex flex-col"
                        style={{ borderColor: "#2a2a3a", background: "#0d0d14" }}
                      >
                        <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-white">
                          {p.hero.headline}
                        </h3>
                        <p className="text-gray-600 text-xs flex-1 line-clamp-2">
                          {p.meta.description.slice(0, 80)}...
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex gap-1 flex-wrap">
                            {p.sections.slice(0, 2).map((sec) => (
                              <span
                                key={sec.tag}
                                className="text-xs px-1.5 py-0.5 rounded border"
                                style={{ borderColor: `${toolAccent}30`, color: toolAccent }}
                              >
                                {sec.tag}
                              </span>
                            ))}
                          </div>
                          <span className="text-xs text-gray-600">{pCount} prompts</span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}
