import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Prompts for E-commerce: 15 Templates for Product Pages, Emails & Ads",
  description:
    "Master AI prompts for e-commerce with 15 production-ready templates for product descriptions, SEO titles, abandoned cart emails, Meta ads, and LLM SEO optimization.",
  keywords:
    "AI prompts e-commerce, ChatGPT product descriptions, e-commerce prompts, product page prompts, abandoned cart prompts, e-commerce SEO",
  openGraph: {
    title: "AI Prompts for E-commerce: 15 Templates for Product Pages, Emails & Ads",
    description:
      "Master AI prompts for e-commerce with 15 production-ready templates for product descriptions, SEO titles, abandoned cart emails, Meta ads, and LLM SEO.",
    type: "article",
  },
}

export default function AIPromptsEcommercePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/website-links" className="hover:text-foreground">
              Prompts Library
            </Link>
            <span>/</span>
            <span>AI Prompts for E-commerce</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            AI Prompts for E-commerce
          </h1>
          <p className="text-xl text-muted-foreground">
            15 production-ready prompt templates for product descriptions, SEO titles, abandoned cart emails, Meta ads,
            and LLM-SEO optimization. Launch products faster and convert more shoppers.
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-12 rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold">15 E-commerce Prompt Templates</h2>
          <ol className="grid gap-2 text-sm sm:grid-cols-2">
            <li>
              <a href="#principles" className="text-primary hover:underline">
                Core Principles for E-commerce Prompts
              </a>
            </li>
            <li>
              <a href="#product-pages" className="text-primary hover:underline">
                Product Page Prompts (1-3)
              </a>
            </li>
            <li>
              <a href="#category-pages" className="text-primary hover:underline">
                Category & Landing Pages (4-5)
              </a>
            </li>
            <li>
              <a href="#email-prompts" className="text-primary hover:underline">
                Email & Lifecycle Marketing (6-8)
              </a>
            </li>
            <li>
              <a href="#ads-social" className="text-primary hover:underline">
                Ads & Social Media (9-10)
              </a>
            </li>
            <li>
              <a href="#support-personalization" className="text-primary hover:underline">
                Customer Support (11-12)
              </a>
            </li>
            <li>
              <a href="#analytics-seo" className="text-primary hover:underline">
                Analytics, CRO & LLM-SEO (13-15)
              </a>
            </li>
            <li>
              <a href="#workflow" className="text-primary hover:underline">
                Simple Workflow
              </a>
            </li>
            <li>
              <a href="#faq" className="text-primary hover:underline">
                FAQ
              </a>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <article className="prose prose-gray dark:prose-invert max-w-none">
          {/* Core Principles */}
          <section id="principles" className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600">Core Principles for E-commerce AI Prompts</h2>
            <p>Before copying templates, understand what makes e-commerce-specific prompts effective:</p>
            <ul className="space-y-2">
              <li>
                <strong>Be product-specific:</strong> Include category, materials, size, price range, and use cases
              </li>
              <li>
                <strong>Describe your shopper:</strong> Demographics, style, budget, and main buying motivation
              </li>
              <li>
                <strong>Add your brand voice:</strong> Minimalist, playful, luxury, Gen Z, etc.
              </li>
              <li>
                <strong>Define the channel:</strong> Product page, category page, email, ad, or social caption
              </li>
              <li>
                <strong>Include SEO hints:</strong> Primary and secondary keywords, plus any long-tail phrases
              </li>
            </ul>
            <p>
              Prompts aligned with these elements consistently outperform generic "write me a description" requests. For
              more on effective prompting, see our{" "}
              <Link href="/how-to-write-effective-ai-prompts" className="text-primary hover:underline">
                How to Write Effective AI Prompts
              </Link>{" "}
              guide.
            </p>
          </section>

          {/* Product Page Prompts */}
          <section id="product-pages" className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600">Product Page Prompts: Descriptions, Titles & Tags</h2>

            <div className="rounded-lg border bg-card p-6 my-6">
              <h3 className="text-lg font-semibold text-purple-600">1. High-Converting Product Description Prompt</h3>
              <div className="rounded-lg bg-muted p-4 mt-4">
                <pre className="text-sm whitespace-pre-wrap">{`"You are an e-commerce copywriter and SEO specialist.

Product: [what it is]
Details: [materials, size, color, variants, key features]
Brand voice: [e.g., playful, minimalist, premium]
Target customer: [who they are + main use case]
Primary keyword: [e.g., 'wireless noise cancelling headphones']
Secondary keywords: [3–8 related phrases]

Write a product description that:
– Starts with a 2–3 sentence benefit-focused overview (not just specs)
– Includes a 'Features' bullet list (5–7 bullets)
– Includes a 'Why you'll love it' bullet list focused on outcomes
– Adds a short 'Perfect for' section (use cases or gift ideas)
– Naturally uses the primary keyword and some secondary phrases without stuffing
– Stays under 250–300 words and is easy to scan on mobile"`}</pre>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 my-6">
              <h3 className="text-lg font-semibold text-purple-600">2. SEO-Friendly Product Title Prompt</h3>
              <div className="rounded-lg bg-muted p-4 mt-4">
                <pre className="text-sm whitespace-pre-wrap">{`"Write 10 SEO-friendly e-commerce product titles for this product:
– Product: [product]
– Key attributes: [brand, size, material, color, main feature]
– Primary keyword: [phrase you want to rank for]

Requirements:
– 60–70 characters or less where possible
– Put the primary keyword near the beginning
– Keep titles clear and human-readable (no keyword soup)
– Mix angles: feature-led, benefit-led, target-audience-led, occasion-led
Return as a numbered list."`}</pre>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 my-6">
              <h3 className="text-lg font-semibold text-purple-600">3. Product Tag & Keyword Prompt</h3>
              <div className="rounded-lg bg-muted p-4 mt-4">
                <pre className="text-sm whitespace-pre-wrap">{`"You are doing SEO for an online store.
Product: [short description]
Category: [e.g., 'women's running shoes']

Generate 30 long-tail keyword ideas shoppers might search for this product.

From those, pick the best 15 as product tags (2–4 words each).

Group them into: primary intent (purchase), style/occasion, audience (e.g., 'for nurses', 'for wide feet').
Present as a table: tag | type | brief rationale."`}</pre>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                For more keyword strategies, see our{" "}
                <Link href="/long-tail-keyword-clusters" className="text-primary hover:underline">
                  Long-Tail Keyword Clusters Guide
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Category & Landing Pages */}
          <section id="category-pages" className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600">Category, Collection & Landing Page Prompts</h2>

            <div className="rounded-lg border bg-card p-6 my-6">
              <h3 className="text-lg font-semibold text-purple-600">4. Category Page Copy Prompt</h3>
              <div className="rounded-lg bg-muted p-4 mt-4">
                <pre className="text-sm whitespace-pre-wrap">{`"Write conversion-focused SEO copy for a category page selling [category, e.g., 'minimalist home office desks'].

Audience: [who they are + style preferences]
Primary and related keywords: [list 5–10 phrases]

Include:
– 2–3 sentence intro summarizing the category and main benefit
– A short section 'How to choose the right [category]' with 3–5 bullets
– A short section 'Why shop [brand]' with 3–5 bullets (USP, shipping, returns, quality)
– Total length 200–350 words
Write in our brand voice: [describe voice]."`}</pre>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 my-6">
              <h3 className="text-lg font-semibold text-purple-600">5. Campaign Landing Page Prompt</h3>
              <div className="rounded-lg bg-muted p-4 mt-4">
                <pre className="text-sm whitespace-pre-wrap">{`"Create copy for a campaign landing page promoting [product line or offer].

Offer: [e.g., '30% off back-to-school backpacks']
Audience: [target segment]

Sections:
– Hero: headline + subheadline + 1 CTA line
– 'Why you'll love these [products]' (3–5 bullets)
– 'Top picks' section (3 featured product blurbs, 40–60 words each)
– Short FAQ (5 questions) about shipping, returns, sizing, and materials

Tone: energetic but trustworthy. Keep total copy under 600–800 words."`}</pre>
              </div>
            </div>
          </section>

          {/* Email & Lifecycle Marketing */}
          <section id="email-prompts" className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600">Email & Lifecycle Marketing Prompts</h2>

            <div className="rounded-lg border bg-card p-6 my-6">
              <h3 className="text-lg font-semibold text-purple-600">6. Abandoned Cart Email Prompt</h3>
              <div className="rounded-lg bg-muted p-4 mt-4">
                <pre className="text-sm whitespace-pre-wrap">{`"Write an abandoned cart email for [brand].

Customer segment: [new customer / returning customer / VIP]
Products in cart: [describe 1–3 items or category]
Brand voice: [tone description]

Email should include:
– Short subject line (max 45 characters) with 3 variations
– Friendly, non-pushy body copy (120–180 words)
– Reminder of what they left behind and 2–3 key benefits
– Optional incentive (e.g., free shipping) with clear time limit
– One clear CTA button phrase
Avoid guilt-tripping or overly aggressive language."`}</pre>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                For more email strategies, see our{" "}
                <Link href="/fundraising-email-prompts" className="text-primary hover:underline">
                  Email Prompting Guide
                </Link>
                .
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 my-6">
              <h3 className="text-lg font-semibold text-purple-600">7. Post-Purchase Thank-You & Upsell Prompt</h3>
              <div className="rounded-lg bg-muted p-4 mt-4">
                <pre className="text-sm whitespace-pre-wrap">{`"Create a post-purchase email for customers who just bought [product or category].

Include:
– Warm thank-you message and brand story note
– Simple tips on how to use or care for the product (3–5 bullets)
– 2–3 recommended add-on or complementary products with one-line benefits each
– Soft CTA to browse these recommendations or join our newsletter/loyalty program

Keep the body under 200–250 words and avoid hard selling."`}</pre>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 my-6">
              <h3 className="text-lg font-semibold text-purple-600">8. Product Launch Email Sequence Prompt</h3>
              <div className="rounded-lg bg-muted p-4 mt-4">
                <pre className="text-sm whitespace-pre-wrap">{`"Design a 3-email product launch sequence for [new product or collection].

Audience: [segment: whole list / engaged only / VIPs]

Email 1 (teaser): curiosity about the problem and upcoming solution
Email 2 (launch): features, benefits, social proof, clear CTA to shop
Email 3 (last chance): urgency about limited stock or time-bound offer, recap

For each email, provide:
– 3 subject line options
– 1 preview line
– 150–250 word body copy
Maintain brand voice: [describe]."`}</pre>
              </div>
            </div>
          </section>

          {/* Ads & Social Media */}
          <section id="ads-social" className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600">Ads & Social Media Prompts</h2>

            <div className="rounded-lg border bg-card p-6 my-6">
              <h3 className="text-lg font-semibold text-purple-600">9. Meta / Instagram Ad Prompt</h3>
              <div className="rounded-lg bg-muted p-4 mt-4">
                <pre className="text-sm whitespace-pre-wrap">{`"You are a performance marketer for an e-commerce brand.

Product: [description]
Audience: [who they are + interests]
Objective: [traffic / conversions / add-to-cart]

Generate 5 Meta ad copy variations that:
– Have a hook in the first line (max 20–25 words)
– Highlight 1–2 key benefits and 1 differentiator
– Include a soft CTA (e.g., 'Shop now', 'Discover yours')
Also suggest 5 headline options (max 30 characters)."`}</pre>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                For social media strategies, see our{" "}
                <Link href="/social-media-captions-seo" className="text-primary hover:underline">
                  Social Media Captions Guide
                </Link>{" "}
                and{" "}
                <Link href="/instagram-reels-hooks" className="text-primary hover:underline">
                  Instagram Reels Hooks
                </Link>
                .
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 my-6">
              <h3 className="text-lg font-semibold text-purple-600">10. Product-Launch Social Caption Prompt</h3>
              <div className="rounded-lg bg-muted p-4 mt-4">
                <pre className="text-sm whitespace-pre-wrap">{`"Write 10 social media captions for launching [product or collection] on [platform: Instagram, TikTok, X].

Each caption should:
– Start with a scroll-stopping first line (max 10–12 words)
– Mention 1–2 key benefits or features
– Include a CTA (e.g., 'tap to shop', 'link in bio')
– Suggest 3–8 relevant hashtags (mix of branded, category, and long-tail)

Keep tone and style aligned with: [brand voice description]."`}</pre>
              </div>
            </div>
          </section>

          {/* Customer Support & Personalization */}
          <section id="support-personalization" className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600">Customer Support & Personalization Prompts</h2>

            <div className="rounded-lg border bg-card p-6 my-6">
              <h3 className="text-lg font-semibold text-purple-600">11. FAQ & Help Center Prompt</h3>
              <div className="rounded-lg bg-muted p-4 mt-4">
                <pre className="text-sm whitespace-pre-wrap">{`"Generate FAQs for an e-commerce store that sells [product type].

Context:
– Shipping: [regions, timeline, costs]
– Returns: [policy summary]
– Sizing/fit: [details if apparel]
– Materials/sourcing: [brief info]

Create 15–20 FAQ questions and answers that:
– Use natural language ('How do I…?', 'Can I…?')
– Answer each question in 2–3 sentences, direct answer first
– Are suitable for a help center and chatbot training"`}</pre>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 my-6">
              <h3 className="text-lg font-semibold text-purple-600">12. Personalized Recommendation Prompt</h3>
              <div className="rounded-lg bg-muted p-4 mt-4">
                <pre className="text-sm whitespace-pre-wrap">{`"You are a personal shopper for an online store.

Customer profile:
– Past purchases: [list]
– Stated preferences: [style, budget, colors, constraints]
– Occasion: [gift, self, event]

Recommend 3–5 products from this catalog:
[short catalog or categories]

For each recommended product, include:
– Name and category
– 1–2 sentence explanation of why it's a good fit
– One key benefit that matches their preferences"`}</pre>
              </div>
            </div>
          </section>

          {/* Analytics, CRO & LLM-SEO */}
          <section id="analytics-seo" className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600">Analytics, CRO & LLM-SEO Prompts</h2>

            <div className="rounded-lg border bg-card p-6 my-6">
              <h3 className="text-lg font-semibold text-purple-600">13. CRO Insight Prompt</h3>
              <div className="rounded-lg bg-muted p-4 mt-4">
                <pre className="text-sm whitespace-pre-wrap">{`"Act as a CRO strategist for an online store.

Data snapshot:
– Product: [name]
– Page views: [number]
– Add-to-cart rate: [percent]
– Checkout completion rate: [percent]
– Main traffic sources: [list]

Suggest 5–10 hypotheses for why conversion might be lower than expected.

Propose 5 specific A/B tests (copy, images, layout, social proof, pricing display).

For each test, list what metric to track and what success looks like."`}</pre>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 my-6">
              <h3 className="text-lg font-semibold text-purple-600">14. LLM SEO Prompt for E-commerce Content</h3>
              <div className="rounded-lg bg-muted p-4 mt-4">
                <pre className="text-sm whitespace-pre-wrap">{`"You are an LLM-SEO specialist for e-commerce.

Product or category: [describe]
Target keywords: [list 5–10 phrases]

Generate 10–15 natural-language questions potential buyers might ask in AI search about this product/category.

For each question, write a 2–3 sentence answer that could work as an AI Overview or featured snippet (40–60 words, direct answer first).

Present as Q: / A: pairs."`}</pre>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                For more LLM SEO strategies, see our{" "}
                <Link href="/llm-seo-prompt-library" className="text-primary hover:underline">
                  LLM SEO Prompt Library
                </Link>
                .
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 my-6">
              <h3 className="text-lg font-semibold text-purple-600">15. Competitor Page Comparison Prompt</h3>
              <div className="rounded-lg bg-muted p-4 mt-4">
                <pre className="text-sm whitespace-pre-wrap">{`"Compare my product page copy to competitors.

My page content:
[paste copy]

Competitor page summaries:
[paste summaries or bullet notes]

Identify 5–10 ways competitor pages communicate value better.

Identify gaps where my page could add information (benefits, FAQs, social proof, trust signals).

Draft an improved version of my hero section and main description that closes these gaps."`}</pre>
              </div>
            </div>
          </section>

          {/* Simple Workflow */}
          <section id="workflow" className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600">Simple Workflow: Plugging This into Your Store</h2>
            <div className="rounded-lg border bg-card p-6 mt-6">
              <ol className="space-y-4">
                <li>
                  <strong>1. List & Keywords:</strong> For each product, define primary/secondary keywords and buyer
                  persona
                </li>
                <li>
                  <strong>2. Product Pages:</strong> Use product description, title, and tag prompts to build or refresh
                  listings
                </li>
                <li>
                  <strong>3. Collections & Campaigns:</strong> Use category and landing page prompts for key categories
                  and seasonal offers
                </li>
                <li>
                  <strong>4. Lifecycle:</strong> Use abandoned cart, post-purchase, and launch email prompts to automate
                  key flows
                </li>
                <li>
                  <strong>5. Growth & Optimization:</strong> Use CRO and LLM-SEO prompts to improve conversion rates and
                  visibility in both Google and AI search
                </li>
              </ol>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600">FAQ: Using AI Prompts for E-commerce</h2>
            <div className="space-y-6 mt-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold">Are AI-generated product descriptions safe for SEO?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, as long as descriptions are accurate, unique, and genuinely helpful. Search engines care more
                  about quality and relevance than the tool used to draft the copy.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold">Will using AI prompts make my store sound generic?</h3>
                <p className="mt-2 text-muted-foreground">
                  It can if you don't add brand voice and specifics. Use prompts as a starting point, then add unique
                  details, stories, and tone of voice to differentiate.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold">Where do AI prompts have the biggest impact in e-commerce?</h3>
                <p className="mt-2 text-muted-foreground">
                  The highest-ROI areas are usually product descriptions, email flows (abandoned cart, post-purchase),
                  ads, and category copy, followed by FAQ/chat and LLM-SEO content.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold">Can the same prompts work across ChatGPT, Claude, Gemini, etc.?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes. Prompts that include product details, audience, channel, and SEO keywords work reliably across
                  modern LLMs. You may tweak a few details per tool for optimal results.
                </p>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600">Related Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2 mt-6">
              <Link
                href="/etsy-sellers-prompts"
                className="rounded-lg border bg-card p-4 hover:border-primary transition-colors"
              >
                <h3 className="font-semibold">Etsy Sellers Prompts</h3>
                <p className="text-sm text-muted-foreground mt-1">Product descriptions, SEO & customer replies</p>
              </Link>
              <Link
                href="/llm-seo-prompt-library"
                className="rounded-lg border bg-card p-4 hover:border-primary transition-colors"
              >
                <h3 className="font-semibold">LLM SEO Prompt Library</h3>
                <p className="text-sm text-muted-foreground mt-1">AI Overview-optimized content</p>
              </Link>
              <Link
                href="/social-media-captions-seo"
                className="rounded-lg border bg-card p-4 hover:border-primary transition-colors"
              >
                <h3 className="font-semibold">Social Media Captions</h3>
                <p className="text-sm text-muted-foreground mt-1">SEO-optimized social content</p>
              </Link>
              <Link
                href="/how-to-write-effective-ai-prompts"
                className="rounded-lg border bg-card p-4 hover:border-primary transition-colors"
              >
                <h3 className="font-semibold">How to Write Effective Prompts</h3>
                <p className="text-sm text-muted-foreground mt-1">Master the CRISPE framework</p>
              </Link>
            </div>
          </section>
        </article>

        {/* Footer */}
        <footer className="mt-16 border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GPTPrompts.AI. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/website-links" className="text-sm text-muted-foreground hover:text-foreground">
                Prompts Library
              </Link>
              <Link href="/chatgpt-prompts" className="text-sm text-muted-foreground hover:text-foreground">
                ChatGPT Prompts
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
