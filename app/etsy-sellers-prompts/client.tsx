"use client"

import Link from "next/link"

export function EtsySellersPromptsClient() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ChatGPT Prompts for Etsy Sellers: Product Descriptions, SEO & Customer Replies",
    description:
      "Master ChatGPT prompts for Etsy sellers covering SEO-optimized product descriptions, titles, tags, FAQs, and customer communication templates.",
    author: { "@type": "Organization", name: "GPTPrompts.AI" },
    datePublished: new Date().toISOString(),
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          ChatGPT Prompts for Etsy Sellers: Product Descriptions, SEO & Customer Replies
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Master ChatGPT prompts to write high-converting product descriptions, SEO-friendly titles, tags, FAQs, and
          professional customer messages for your Etsy shop.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Etsy Sellers Should Use ChatGPT Prompts</h2>
          <p className="text-slate-700 mb-4">
            Etsy SEO has become more competitive, and shoppers now use Etsy search, Google, and AI assistants to find
            products. Sellers who win in 2026 use keyword-rich, benefit-driven product descriptions and optimize titles,
            tags, and attributes for both Etsy search and Google.
          </p>
          <p className="text-slate-700">
            ChatGPT prompts help busy Etsy shop owners by turning rough bullet points into high-converting descriptions,
            generating SEO-friendly titles and tags for each listing, and drafting FAQ answers and message templates you
            can customize and reuse.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Prompt 1: Etsy Product Description (High-Converting)
          </h2>
          <div className="bg-slate-50 p-6 rounded border-l-4 border-blue-500 mb-4">
            <p className="text-slate-800 font-mono text-sm whitespace-pre-wrap">{`"You are an Etsy SEO copywriter.

Product: [what it is]
Details: [materials, size, color, style, options, processing time]
Target buyer: [who it's for + occasion]
Main keyword: [e.g., 'personalized bridesmaid jewelry']
Secondary keywords: [3–8 related phrases]

Write a compelling Etsy product description that:
– Starts with a 2–3 sentence overview highlighting the main benefit
– Includes a bullet section for 'Details'
– Includes a bullet section for 'Why you'll love it'
– Includes a short 'Perfect for' section
– Naturally uses keywords without stuffing
– Written in clear, friendly, scannable language

Output in markdown with headings."`}</p>
          </div>
          <p className="text-slate-700">
            This balances Etsy SEO keywords with benefit-driven copy. It creates a structure you can reuse across
            listings.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Prompt 2: SEO-Friendly Etsy Title (10 Options)</h2>
          <div className="bg-slate-50 p-6 rounded border-l-4 border-blue-500 mb-4">
            <p className="text-slate-800 font-mono text-sm whitespace-pre-wrap">{`"Write 10 Etsy product title options for this product:
– Product: [what it is]
– Key details: [style, material, size, occasion]
– Main keyword: [primary phrase you want to rank for]
– Other important keywords: [3–6 related phrases]

Requirements:
– Max 140 characters per title
– Put the most important keyword near the start
– Use natural, readable phrasing (no keyword soup)
– Mix angles: gift-focused, style-focused, occasion-focused, niche-focused
Return as a numbered list."`}</p>
          </div>
          <p className="text-slate-700">
            Etsy and search engines recommend clear, readable titles with priority keywords at the front. Multiple
            options make A/B testing easier.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Prompt 3: Etsy Tags & Keywords (13 Best Tags)</h2>
          <div className="bg-slate-50 p-6 rounded border-l-4 border-blue-500 mb-4">
            <p className="text-slate-800 font-mono text-sm whitespace-pre-wrap">{`"You are an Etsy SEO specialist.
Product: [what it is]
Details: [style, material, recipient, occasion]

Suggest 30 long-tail keyword ideas buyers might search on Etsy and Google for this product.

From those, select the best 13 Etsy tags (max 20 characters each when possible).

Make sure tags cover:
– main keywords
– style/occasion keywords
– audience keywords ('for mom', 'for teacher', etc.)
Output as: full list of ideas → final 13 tags."`}</p>
          </div>
          <p className="text-slate-700">
            Etsy limits tags and values long-tail phrases. This prompt uses ChatGPT for ideation and selection.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Prompt 4: Etsy FAQ & Policy (LLM-Friendly)</h2>
          <div className="bg-slate-50 p-6 rounded border-l-4 border-blue-500 mb-4">
            <p className="text-slate-800 font-mono text-sm">{`Generate 10–15 FAQ questions and answers addressing shipping, processing time, returns/exchanges, customization, and gift options. Use natural language questions and answer each in 2–3 sentences with the direct answer first. Output as Q: / A: pairs.`}</p>
          </div>
          <p className="text-slate-700">
            FAQs help your Etsy shop look professional and give LLMs and Google clear Q&A blocks to surface.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Prompt 5: Customer Message Templates</h2>
          <div className="bg-slate-50 p-6 rounded border-l-4 border-blue-500 mb-4">
            <p className="text-slate-800 font-mono text-sm">{`Write a pre-purchase response template acknowledging their question, clarifying details, and encouraging them to order. Keep under 120 words.

Write a post-purchase thank-you message confirming processing and shipping time, asking them to reach out if there's any issue, and gently mentioning reviews.`}</p>
          </div>
          <p className="text-slate-700">
            Good communication boosts reviews and reduces disputes. ChatGPT can draft templates you can customize.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Additional Prompts & Workflows</h2>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>
                <strong>Batch Listing Prompt:</strong> Generate optimized titles, descriptions, and tags for multiple
                Etsy listings at once
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>
                <strong>Review Request Prompt:</strong> Write friendly review-request messages for orders delivered 5–7
                days ago
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>
                <strong>Seasonal Prompt:</strong> Generate timely listing ideas and copy for holidays, graduations, and
                trends
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold">•</span>
              <span>
                <strong>Listing Audit Prompt:</strong> Critique and improve existing listings for clarity, keywords, and
                benefits
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">FAQ: ChatGPT for Etsy Sellers</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">
                Q: Is it allowed to use ChatGPT for Etsy product descriptions?
              </h3>
              <p className="text-slate-700">
                Yes—Etsy doesn't forbid using AI tools as long as your listings are accurate, non-misleading, and follow
                all Etsy policies.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Q: Will AI-written descriptions hurt my Etsy SEO?</h3>
              <p className="text-slate-700">
                No. Search systems look for relevance and quality, not whether a human or AI typed the text. Always edit
                AI drafts so they sound like you.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Q: How many keywords should I give ChatGPT per product?</h3>
              <p className="text-slate-700">
                1–2 main Etsy SEO keywords and 3–8 related phrases are enough for AI to weave them naturally without
                stuffing.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Q: Can I reuse the same prompts across all my listings?</h3>
              <p className="text-slate-700">
                Yes. Treat the prompts as templates: reuse the structure, but change product details, audience, and
                keywords for each listing.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">
                Q: How do I avoid sounding like every other AI-written listing?
              </h3>
              <p className="text-slate-700">
                Add your own stories, details, and tone. Use ChatGPT for structure and drafts, then customize intros and
                brand voice manually.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Simple Workflow: Using These Prompts in Your Etsy Shop
          </h2>
          <ol className="space-y-3 text-slate-700">
            <li>
              <strong>1. Research & Keywords:</strong> Use Etsy search suggestions + a keyword tool to find your primary
              and secondary phrases.
            </li>
            <li>
              <strong>2. Draft Titles & Tags:</strong> Use the Etsy Title Prompt and Etsy Tags Prompt for each listing.
            </li>
            <li>
              <strong>3. Write or Refresh Descriptions:</strong> Use the Etsy Product Description Prompt and audit old
              descriptions with the Listing Audit Prompt.
            </li>
            <li>
              <strong>4. Add FAQs & Policies:</strong> Use the Etsy FAQ Prompt for shop and listing FAQs.
            </li>
            <li>
              <strong>5. Systematize Customer Messages:</strong> Save message templates from the customer, review, and
              thank-you prompts.
            </li>
            <li>
              <strong>6. Update Seasonally:</strong> Use the Seasonal Etsy Prompt before big shopping periods.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/social-media-captions-seo" className="text-blue-600 hover:underline">
              → Social Media Captions & SEO Optimization
            </Link>
            <Link href="/chatgpt-for-content-marketing" className="text-blue-600 hover:underline">
              → ChatGPT for Content Marketing
            </Link>
            <Link href="/prompt-engineering-seo" className="text-blue-600 hover:underline">
              → Prompt Engineering for SEO
            </Link>
            <Link href="/real-estate-social-media" className="text-blue-600 hover:underline">
              → Real Estate Social Media Prompts
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
