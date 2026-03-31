'use client'

import { useState } from "react"
import Link from "next/link"
import { Copy, Check, ChevronDown, ChevronUp, ExternalLink, ArrowRight } from "lucide-react"
import { allPromptPages, getPromptPage } from "@/data/prompt-pages"
import { notFound } from "next/navigation"

// ── Types ─────────────────────────────────────────────────────────────────────
interface Props {
  params: { tool: string; usecase: string }
}

// ── CopyCard ─────────────────────────────────────────────────────────────────
function CopyCard({
  title,
  prompt,
  tag,
  accent,
}: {
  title: string
  prompt: string
  tag: string
  accent: string
}) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  const borderCol = "#2a2a3a"
  const bgDark = "#0d0d14"

  return (
    <div
      className="rounded-xl border p-5 transition-all duration-200 cursor-default"
      style={{ borderColor: borderCol, background: bgDark }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${accent}60`)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = borderCol)}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full border"
            style={{ borderColor: `${accent}40`, color: accent }}
          >
            {tag}
          </span>
          <h3 className="text-white font-semibold mt-2 text-sm leading-snug">{title}</h3>
        </div>
        <button
          onClick={handleCopy}
          className="shrink-0 p-1.5 rounded-lg transition-colors mt-0.5"
          style={{ color: copied ? accent : "#666" }}
          title="Copy prompt"
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
        </button>
      </div>
      <pre className="whitespace-pre-wrap font-sans text-sm text-gray-300 leading-relaxed">
        {prompt}
      </pre>
    </div>
  )
}

// ── FAQ Item ─────────────────────────────────────────────────────────────────
function FaqItem({ question, answer, accent }: { question: string; answer: string; accent: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border rounded-xl overflow-hidden" style={{ borderColor: "#2a2a3a" }}>
      <button
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
        style={{ background: "#0d0d14" }}
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-medium text-sm">{question}</span>
        {open ? (
          <ChevronUp size={16} className="shrink-0" style={{ color: accent }} />
        ) : (
          <ChevronDown size={16} className="shrink-0 text-gray-500" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4 pt-2" style={{ background: "#0d0d14" }}>
          <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PromptPage({ params }: Props) {
  const page = getPromptPage(params.tool, params.usecase)
  if (!page) notFound()

  const accent = page.tool.color
  const bgPage = "#07070f"

  // Related pages (same tool, different use case)
  const related = allPromptPages
    .filter((p) => p.toolSlug === page.toolSlug && p.usecaseSlug !== page.usecaseSlug)
    .slice(0, 6)

  // Also get pages for same use case, different tool
  const sameUsecase = allPromptPages
    .filter((p) => p.usecaseSlug === page.usecaseSlug && p.toolSlug !== page.toolSlug)
    .slice(0, 4)

  const totalPrompts = page.sections.reduce((sum, s) => sum + s.prompts.length, 0)

  return (
    <main style={{ background: bgPage, minHeight: "100vh" }}>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div
        className="border-b px-4 py-12"
        style={{
          borderColor: "#1a1a28",
          background: `linear-gradient(135deg, ${accent}12 0%, transparent 60%)`,
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/prompts" className="hover:text-gray-300 transition-colors">Prompts</Link>
            <span>/</span>
            <span style={{ color: accent }}>{page.tool.name}</span>
            <span>/</span>
            <span className="text-gray-400">{page.usecase}</span>
          </div>

          <div className="flex items-start gap-4">
            {/* Tool emoji badge */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
              style={{ background: `${accent}20`, border: `1px solid ${accent}30` }}
            >
              {page.tool.emoji}
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-white font-black text-2xl md:text-3xl lg:text-4xl leading-tight mb-3">
                {page.hero.headline}
              </h1>
              <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
                {page.hero.subtitle}
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              `${totalPrompts} prompts`,
              `${page.sections.length} categories`,
              `${page.faqs.length} FAQs`,
              "Copy-paste ready",
            ].map((label) => (
              <span
                key={label}
                className="text-xs px-3 py-1.5 rounded-full border font-medium"
                style={{ borderColor: "#2a2a3a", color: "#888", background: "#0d0d14" }}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Tool CTA */}
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <a
              href={page.tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-xl transition-opacity hover:opacity-80"
              style={{ background: accent }}
            >
              Open {page.tool.name} <ExternalLink size={14} />
            </a>
            <p className="text-xs text-gray-600">{page.tool.tagline}</p>
          </div>
        </div>
      </div>

      {/* ── Prompt Sections ────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Section nav */}
        <div className="flex gap-2 flex-wrap mb-8">
          {page.sections.map((sec) => (
            <a
              key={sec.title}
              href={`#${sec.tag.toLowerCase()}`}
              className="text-xs px-3 py-1.5 rounded-full border font-medium transition-colors hover:text-white"
              style={{ borderColor: "#2a2a3a", color: "#666", background: "#0d0d14" }}
            >
              {sec.title}
            </a>
          ))}
        </div>

        {page.sections.map((section) => (
          <div key={section.title} id={section.tag.toLowerCase()} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="w-2 h-6 rounded-full"
                style={{ background: accent }}
              />
              <h2 className="text-white font-bold text-lg">{section.title}</h2>
              <span
                className="text-xs px-2 py-0.5 rounded-full border ml-1"
                style={{ borderColor: `${accent}40`, color: accent }}
              >
                {section.prompts.length} prompts
              </span>
            </div>

            <div className="grid gap-4">
              {section.prompts.map((prompt) => (
                <CopyCard
                  key={prompt.title}
                  title={prompt.title}
                  prompt={prompt.prompt}
                  tag={section.tag}
                  accent={accent}
                />
              ))}
            </div>
          </div>
        ))}

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        {page.faqs.length > 0 && (
          <div className="mt-6 mb-12">
            <h2 className="text-white font-bold text-xl mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {page.faqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  accent={accent}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Related: Same tool, different use case ───────────────────────── */}
        {related.length > 0 && (
          <div className="mt-6 mb-12">
            <h2 className="text-white font-bold text-lg mb-4">
              More {page.tool.name} Prompt Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map((p) => (
                <Link
                  key={`${p.toolSlug}-${p.usecaseSlug}`}
                  href={`/prompts/${p.toolSlug}/${p.usecaseSlug}`}
                  className="flex items-center justify-between gap-3 rounded-xl border p-4 transition-colors group"
                  style={{ borderColor: "#2a2a3a", background: "#0d0d14" }}
                >
                  <div>
                    <div className="text-white text-sm font-semibold group-hover:text-white transition-colors">
                      {p.hero.headline}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">
                      {p.sections.reduce((s, sec) => s + sec.prompts.length, 0)} prompts
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-gray-600 group-hover:text-gray-400 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── Related: Same use case, different tool ──────────────────────── */}
        {sameUsecase.length > 0 && (
          <div className="mt-2 mb-12">
            <h2 className="text-white font-bold text-lg mb-4">
              {page.usecase.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())} Prompts for Other AI Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {sameUsecase.map((p) => (
                <Link
                  key={`${p.toolSlug}-${p.usecaseSlug}`}
                  href={`/prompts/${p.toolSlug}/${p.usecaseSlug}`}
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl border transition-colors"
                  style={{ borderColor: "#2a2a3a", color: "#888", background: "#0d0d14" }}
                >
                  <span>{p.tool.emoji}</span>
                  {p.tool.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── Browse all prompts CTA ───────────────────────────────────────── */}
        <div
          className="rounded-2xl border p-6 text-center"
          style={{
            borderColor: `${accent}30`,
            background: `${accent}08`,
          }}
        >
          <div className="text-2xl mb-2">{page.tool.emoji}</div>
          <h3 className="text-white font-bold text-lg mb-1">
            Want more {page.tool.name} prompts?
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Browse all {page.tool.name} prompt guides across every use case and industry.
          </p>
          <Link
            href={`/prompts/${page.toolSlug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-xl transition-opacity hover:opacity-80"
            style={{ background: accent }}
          >
            All {page.tool.name} Prompts <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </main>
  )
}
