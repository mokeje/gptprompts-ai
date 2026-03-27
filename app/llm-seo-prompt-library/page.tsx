import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "LLM SEO Prompt Library: ChatGPT & Claude for AI Overview-Optimized Content",
  description:
    "Master LLM SEO with our complete prompt library. Learn how to create content optimized for AI Overviews, Perplexity, and answer engines. 15+ advanced prompts for semantic content, FAQs, and snippet optimization.",
  keywords:
    "LLM SEO, AI Overview optimization, Perplexity prompts, answer engine optimization, ChatGPT SEO, content optimization",
  openGraph: {
    title: "LLM SEO Prompt Library: ChatGPT & Claude for AI Overview-Optimized Content",
    description:
      "15+ advanced prompts to create content that ranks in AI Overviews and answer engines. Complete guide to LLM-friendly content structure.",
    type: "article",
  },
}

export default function LLMSEOPromptLibraryPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">LLM SEO Prompt Library</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-3xl leading-relaxed">
            ChatGPT & Claude for AI Overview-Optimized Content. Learn how to create content that AI systems love to
            quote and Google loves to rank.
          </p>
          <nav className="flex flex-wrap gap-4 text-sm font-medium">
            <Link
              href="/social-media-captions-seo"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded transition"
            >
              Social SEO →
            </Link>
            <Link
              href="/long-tail-keyword-clusters"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded transition"
            >
              Keyword Clusters →
            </Link>
          </nav>
        </div>
      </header>

      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-6">What Is LLM SEO and Why It Matters in 2026</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            LLM SEO (also called AI SEO or answer-engine optimization) is the practice of structuring your content so
            large language models—like ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews—can easily
            understand, trust, and surface it in their answers.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="font-bold mb-3">Why This Matters Now:</h3>
            <ul className="space-y-2 text-sm">
              <li>
                • Google's AI Overviews are changing how users see answers, pushing more attention to answer blocks
                rather than just link lists
              </li>
              <li>
                • Tools like Perplexity and ChatGPT's Browse mode are becoming primary discovery channels for
                research-heavy users
              </li>
              <li>• Content that ranks in AI summaries gets more traffic, authority, and click-through potential</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Core Principles of LLM SEO-Optimized Content</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Intent-First, Not Keyword-First</h3>
          <p className="mb-6">
            LLMs care about search intent—what the user really wants to know. Your prompts should always specify who the
            content is for, what problem they're solving, and what format best solves it.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Structure and Scannability</h3>
          <p className="mb-6">
            Both Google and LLMs parse content better when it's structured with clear headings, short paragraphs, bullet
            lists, and occasional tables.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Semantic Richness and Topical Coverage</h3>
          <p className="mb-6">
            Modern SEO is about topic clusters, not just repeating a keyword. Include related subtopics, entities
            (tools, frameworks, brands, concepts), and FAQs.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Direct, Snippet-Friendly Answers</h3>
          <p className="mb-6">
            AI Overviews and Perplexity often lift short, direct answers. Use clear question → direct answer format in
            40–80 word chunks that can stand alone.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Master Prompt Framework for LLM SEO Content</h2>

          <div className="bg-gray-100 p-6 rounded-lg font-mono text-sm mb-8 overflow-x-auto">
            <pre className="whitespace-pre-wrap text-xs">
              {`"You are an expert writer and SEO strategist.
I need an article optimized for both:
– LLM SEO (AI Overviews, Perplexity, ChatGPT answers)
– Google SEO (organic search)

Topic: [insert topic or long-tail keyword]
Audience: [describe who they are, their level, what they want]

Requirements:
- Start with a 2–3 sentence overview that directly answers the core question
- Use clear, descriptive H2 and H3 headings that match real search queries
- Include at least 10 natural-language questions and concise answers
- Cover related subtopics and entities for topical depth
- Use short paragraphs, bullet lists, and at least one table where comparisons help
- Naturally incorporate these keyphrases: [list 5–10 related phrases]
- End with practical steps or a checklist the reader can follow
Output in markdown. Prioritize clarity and concrete examples."`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">15 Advanced LLM SEO Prompts</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Prompts 1–2: Research & Keyword Discovery</h3>
          <p className="font-bold mb-2">Prompt 1: LLM-Friendly Keyword & Question Discovery</p>
          <p className="text-sm text-muted-foreground mb-4">
            "Act as an SEO + LLM strategist. For the topic [core topic], list: 5 main user intents (label each), 30
            long-tail keyword phrases and natural-language questions, grouped into 5 topical clusters."
          </p>

          <p className="font-bold mb-2">Prompt 2: Topic Cluster & Content Map</p>
          <p className="text-sm text-muted-foreground mb-6">
            "Using these clusters, design a topic cluster that builds topical authority. For each cluster, suggest 1
            pillar article (2,000+ words) and 3–5 supporting posts with primary keyword, secondary phrases, and main
            question."
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Prompts 3–4: Outlining & Structure</h3>
          <p className="font-bold mb-2">Prompt 3: Answer-First Outline for AI Overviews</p>
          <p className="text-sm text-muted-foreground mb-4">
            "Draft an article outline optimized for AI Overviews. Start with a section answering 'What is [topic]?'
            Include sections for 'Why it matters', 'How it works', 'Pros and cons', and 'Common mistakes'. Under each
            H2, add 2–4 H3 subheadings phrased as full questions."
          </p>

          <p className="font-bold mb-2">Prompt 4: Semantic Entity Enrichment for Outlines</p>
          <p className="text-sm text-muted-foreground mb-6">
            "For this article outline, list relevant entities and related concepts that should be mentioned to show
            topical depth. Include tools, frameworks, metrics, people, and common synonyms."
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Prompts 5–6: Drafting Articles and Guides</h3>
          <p className="font-bold mb-2">Prompt 5: Full Article Draft with Built-In Q&A</p>
          <p className="text-sm text-muted-foreground mb-4">
            "Write a [word count]-word article based on this outline. First 2–3 sentences must answer the main question.
            Every H2 section must contain at least one question with a 2–3 sentence answer. Use short paragraphs,
            bullets, and include these phrases 1–2 times each: [list phrases]."
          </p>

          <p className="font-bold mb-2">Prompt 6: Pros/Cons + 'When to Use' Blocks</p>
          <p className="text-sm text-muted-foreground mb-6">
            "For the concept [technique/tool], write a section that starts with a one-sentence answer to 'Is [technique]
            worth it?' List 3–5 pros and cons as bullet points. End with 'When this is a good idea' and 'When it's
            not'."
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Prompts 7–8: Snippets, FAQs & Conversational Queries</h3>
          <p className="font-bold mb-2">Prompt 7: Snippet-Style Q&A Blocks</p>
          <p className="text-sm text-muted-foreground mb-4">
            "For the topic [topic], generate 15 natural-language questions users might ask in AI chat or Google. For
            each, write a 2–3 sentence answer that directly answers in the first sentence. Stay under 60 words. Output
            as Q: / A: pairs."
          </p>

          <p className="font-bold mb-2">Prompt 8: FAQ Extraction from Existing Drafts</p>
          <p className="text-sm text-muted-foreground mb-6">
            "From this article draft, extract 10–15 FAQs that a reader might still have. Write concise 2–3 sentence
            answers, ensuring the first sentence directly answers the question."
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Prompts 9–10: On-Page Optimization & Meta Data</h3>
          <p className="font-bold mb-2">Prompt 9: Title, Meta, and Social Snippets</p>
          <p className="text-sm text-muted-foreground mb-4">
            "Optimize on-page meta for this article on [topic]. Suggest 5 SEO-friendly title tags (~60 characters).
            Write 3 meta descriptions (~150 characters). Create 3 OG titles and descriptions for social sharing. Propose
            5 social media captions with different angles."
          </p>

          <p className="font-bold mb-2">Prompt 10: Readability & Clarity Refinement</p>
          <p className="text-sm text-muted-foreground mb-6">
            "Improve the clarity of this section while preserving meaning. Use shorter sentences and simpler words.
            Split long paragraphs. Add bullets where it helps scanning. Keep it sounding human, not robotic."
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Prompts 11–12: Perplexity & Answer-Engine Optimization</h3>
          <p className="font-bold mb-2">Prompt 11: Balanced Summary Prompt for Perplexity</p>
          <p className="text-sm text-muted-foreground mb-4">
            "Summarize the key ideas about [topic] in under 400 words. Divide into 3–4 sections with short headings.
            Each section should start with a one-sentence main point. Keep the tone neutral, evidence-based, and
            non-promotional."
          </p>

          <p className="font-bold mb-2">Prompt 12: 'Source-Ready' Rewrite Prompt</p>
          <p className="text-sm text-muted-foreground mb-6">
            "Rewrite this section so AI systems can easily summarize and quote it. Separate facts from opinions. Make
            claims clearly and explicitly. Keep paragraphs short and focused. Ensure each paragraph could be used as a
            standalone quote."
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Prompts 13–14: Geo & Local LLM SEO</h3>
          <p className="font-bold mb-2">Prompt 13: Local Expertise Content Prompt</p>
          <p className="text-sm text-muted-foreground mb-4">
            "For the keyword [service] in [city], write an outline for a locally-optimized article. Answer 'What is
            [service]?' in general. Explain what's unique about doing it in [city/region]. Include 5 local FAQs. Suggest
            5 internal links to other local articles."
          </p>

          <p className="font-bold mb-2">Prompt 14: 'Near Me' Conversational Prompts</p>
          <p className="text-sm text-muted-foreground mb-6">
            "List 20 natural-language queries related to [service] that include local intent or 'near me' phrasing. For
            each, suggest a short answer pattern and 1–2 supporting entities (neighborhood names, landmarks, local
            regulations)."
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Prompt 15: Article → Multi-Channel AI Pack</h3>
          <p className="text-sm text-muted-foreground mb-6">
            "From this article, generate: 10 social posts that each answer one specific question. 5 YouTube Shorts/Reels
            script ideas (45–60 seconds) framed as 'Question → Answer'. 10 internal link anchor text ideas."
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Simple Workflow: Using This Library</h2>
          <ol className="list-decimal list-inside space-y-3 text-base mb-8">
            <li>
              <strong>Research & cluster:</strong> Use Prompts 1–2 to find long-tails and clusters for your niche
            </li>
            <li>
              <strong>Outline & entities:</strong> Use Prompts 3–4 to outline and fill in semantic entities
            </li>
            <li>
              <strong>Draft & structure:</strong> Use Prompt 5 to generate a structured article with Q&A inside
            </li>
            <li>
              <strong>Snippets & FAQs:</strong> Use Prompts 7–8 to create snippet-ready answers and rich FAQ sections
            </li>
            <li>
              <strong>On-page & social:</strong> Use Prompts 9–10 for meta, titles, and readability
            </li>
            <li>
              <strong>Perplexity + AI Overviews refinement:</strong> Use Prompts 11–12 to ensure summaries are easy to
              quote
            </li>
            <li>
              <strong>Local / GEO (optional):</strong> Use Prompts 13–14 for local niches and "near me" queries
            </li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: LLM SEO & ChatGPT</h2>

          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-bold mb-2">Can ChatGPT replace proper keyword tools for long-tail research?</h3>
              <p className="text-sm text-muted-foreground">
                ChatGPT is great for ideation and clustering, but it doesn't replace real search-volume and competition
                data. Use it alongside tools like Google Keyword Planner, Semrush, or Ahrefs for validation.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold mb-2">Will using AI-generated content hurt my rankings?</h3>
              <p className="text-sm text-muted-foreground">
                Search engines say they care about helpfulness and originality, not the tool used. If you use ChatGPT to
                assist with structure and drafts—and you add your own expertise, data, and examples—you can rank well.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold mb-2">How do long-tail clusters help with AI Overviews and LLMs?</h3>
              <p className="text-sm text-muted-foreground">
                Clusters create topical authority and provide LLM-friendly Q&A and snippets, increasing your chances of
                being referenced in AI summaries.
              </p>
            </div>
            <div className="pb-4">
              <h3 className="font-bold mb-2">How often should I review my LLM SEO strategy?</h3>
              <p className="text-sm text-muted-foreground">
                Review your keyword clusters and content at least every 6–12 months or when major changes happen in your
                niche or in how search/AI tools behave.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-12">
            <h3 className="font-bold mb-3">Related Resources:</h3>
            <ul className="space-y-2 text-sm">
              <li>
                •{" "}
                <Link href="/long-tail-keyword-clusters" className="text-blue-600 hover:underline">
                  ChatGPT SEO Prompts for Long-Tail Keyword Clusters
                </Link>
              </li>
              <li>
                •{" "}
                <Link href="/social-media-captions-seo" className="text-blue-600 hover:underline">
                  Best ChatGPT Prompts for Social Media Captions and SEO
                </Link>
              </li>
              <li>
                •{" "}
                <Link href="/prompt-engineering-seo" className="text-blue-600 hover:underline">
                  Prompt Engineering for SEO: Optimizing Content for Search Engines
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t mt-16 py-12 px-6 md:px-12 text-center text-sm text-muted-foreground">
        <p>© 2026 GPTPrompts.AI. All rights reserved.</p>
        <p className="mt-2">
          <Link href="/website-links" className="hover:text-foreground">
            View all prompts →
          </Link>
        </p>
      </footer>
    </main>
  )
}
