import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Search, Target } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Prompt Engineering for SEO: AI-Powered Content Optimization | GPTPrompts.AI",
  description:
    "Master prompt engineering for SEO with our comprehensive guide. Learn to create search-optimized content using AI, including keyword strategies, E-E-A-T signals, and LLMO techniques.",
  keywords:
    "prompt engineering SEO, AI content optimization, search engine prompts, keyword prompting, featured snippets, E-E-A-T signals",
}

export default function PromptEngineeringSEO() {
  // Static navigation items - no dynamic state needed
  const navigationItems = [
    { id: "fundamentals", label: "SEO Fundamentals", num: "01" },
    { id: "keyword-research", label: "Keyword Prompting", num: "02" },
    { id: "content-creation", label: "Content Creation", num: "03" },
    { id: "on-page", label: "On-Page Optimization", num: "04" },
    { id: "e-e-a-t", label: "E-E-A-T Signals", num: "05" },
    { id: "llmo", label: "LLMO Techniques", num: "06" },
    { id: "faq", label: "SEO FAQ", num: "07" },
  ]

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-br from-[#1f2937] to-[#111827] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Search className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-70 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
            Prompt Engineering <br />
            <span className="italic opacity-90">for SEO.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Craft AI prompts that generate search-optimized content, rank on Google, and win AI overviews with E-E-A-T
            signals and strategic keyword integration.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1f2937] mb-6">Navigation</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {navigationItems.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#1f2937] transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs font-mono opacity-50 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-24">
          {/* Section 1: Fundamentals */}
          <section id="fundamentals" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">SEO Prompt Fundamentals</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Prompt engineering for SEO combines traditional search optimization with AI-powered content generation,
              targeting both human readers and search algorithms. Optimize for keywords, user intent, E-E-A-T signals,
              and LLMO (LLM Optimization) for conversational AI search visibility.
            </p>

            <div className="bg-accent/10 rounded-lg p-8 mb-8 border border-accent/30">
              <h3 className="text-2xl font-bold mb-6">Core SEO Prompting Template</h3>
              <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                {`Create SEO content for "[PRIMARY KW]" targeting [INTENT].
Audience: [PERSONA]
Word count: [1500-3000]
Structure: H1 → Intro → H2s (questions) → FAQ → CTA
Keywords: Primary [KW], Secondary [LIST], LSI [NATURAL]
Include: Internal links, sources, schema hints, E-E-A-T signals`}
              </pre>
              <p className="text-sm text-muted-foreground">
                This template ensures your AI-generated content balances keyword optimization with readability and
                authority signals.
              </p>
            </div>

            <Card className="bg-card/50 border-border p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#1f2937]" />
                Key Optimization Areas
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-[#1f2937]">•</span>
                  <span>
                    <strong>Traditional SEO:</strong> Keywords, intent alignment, structural hierarchy
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#1f2937]">•</span>
                  <span>
                    <strong>LLMO/AI Search:</strong> Conversational queries, featured snippet optimization, citations
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#1f2937]">•</span>
                  <span>
                    <strong>E-E-A-T:</strong> Author expertise, editorial authority, experience signals, trustworthiness
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[#1f2937]">•</span>
                  <span>
                    <strong>Content Quality:</strong> Original insights, data-backed claims, comprehensive coverage
                  </span>
                </li>
              </ul>
            </Card>
          </section>

          {/* Section 2: Keyword Research Prompts */}
          <section id="keyword-research" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Keyword Research Prompts</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Use AI to identify topical clusters, map search intent, and discover low-competition opportunities that
              drive qualified traffic.
            </p>

            <div className="space-y-6">
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Cluster Development Prompt</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Generate topical cluster for pillar "[SEED KW]":
- Pillar: H1 title, 2500+ words, URL structure
- 10 Clusters: Keyword, intent, content type (guide/listicle)
- Interlinking map (table format)
- Volume/competition estimates
- Low-hanging fruit prioritized`}
                </pre>
                <p className="text-sm text-muted-foreground">
                  Creates a comprehensive SEO strategy with pillar pages and cluster content for ranking across related
                  keywords.
                </p>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Intent Mapping Prompt</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Search intent analysis for "[KW]":
1. Top results type (listicles/guides)?
2. Featured snippet opportunity?
3. Question variations (People Also Ask)
4. Commercial elements (CTAs/pricing)?
5. Optimized title/meta (under limits)
6. Visual opportunities (charts/diagrams)`}
                </pre>
                <p className="text-sm text-muted-foreground">
                  Analyzes SERP to align content strategy with what already ranks and identifies white-space
                  opportunities.
                </p>
              </Card>
            </div>
          </section>

          {/* Section 3: Content Creation */}
          <section id="content-creation" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Content Creation Prompts</h2>

            <Card className="p-8 border-border mb-6">
              <h3 className="text-xl font-bold mb-4">Featured Snippet Targeting</h3>
              <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                {`Position 0 content for "[QUESTION KW]":
Format: [PARAGRAPH + LIST/TABLE]
Length: 45-65 words paragraph + 5-7 items
Primary keyword: Front-loaded
Sources: Cited inline
Direct answer: No filler
Structure: Question → Answer → Why it matters`}
              </pre>
              <p className="text-sm text-muted-foreground">
                Target Google's featured snippet carousel with concise, well-structured answers that directly address
                common search queries.
              </p>
            </Card>

            <Card className="p-8 border-border">
              <h3 className="text-xl font-bold mb-4">E-E-A-T Article Generator</h3>
              <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                {`2500-word guide: "[H1 KW]"
E-E-A-T Signals:
- Author bio (expertise, credentials)
- Expert quotes (3+)
- Data tables with sources
- Case studies (real examples)
- Original research/insights
Structure: Problem → Framework → Examples → Templates → Results`}
              </pre>
              <p className="text-sm text-muted-foreground">
                Builds authority with comprehensive content that signals expertise, experience, and trustworthiness to
                search engines.
              </p>
            </Card>
          </section>

          {/* Section 4: On-Page Optimization */}
          <section id="on-page" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">On-Page Optimization Prompts</h2>

            <div className="space-y-6">
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Meta Elements Generator</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Meta package for "[TITLE]":
Title: 50-60 chars, KW front
Description: 150-160 chars, hook+CTA
Slug: KW-optimized-format
Schema: Article/FAQPage JSON-LD
Image alt: Descriptive KW`}
                </pre>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Header Hierarchy Auditor</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Optimize headers for SEO:
H1: [KW exact] - One per page
H2s: Question/secondary KW (8-10)
H3s: Supporting details
Keyword density: Natural (1-2%)
Readability: Scannability optimized`}
                </pre>
              </Card>
            </div>
          </section>

          {/* Section 5: E-E-A-T Signals */}
          <section id="e-e-a-t" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Building E-E-A-T Authority Signals</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Google's emphasis on Experience, Expertise, Authoritativeness, and Trustworthiness means content must
              demonstrate real authority.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 border-border">
                <h3 className="text-lg font-bold mb-4">Expertise Signals</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Author credentials and biography</li>
                  <li>• Professional certifications displayed</li>
                  <li>• Years of experience documented</li>
                  <li>• Published research citations</li>
                  <li>• Speaking engagements/media mentions</li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-bold mb-4">Authority Signals</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Backlinks from authoritative sites</li>
                  <li>• Brand mentions across web</li>
                  <li>• Industry recognition/awards</li>
                  <li>• News mentions and press</li>
                  <li>• Structured data markup</li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-bold mb-4">Trustworthiness Signals</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• About page authenticity</li>
                  <li>• Contact information prominence</li>
                  <li>• Privacy/security transparency</li>
                  <li>• Customer reviews/testimonials</li>
                  <li>• Consistent brand messaging</li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-bold mb-4">Experience Signals</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• First-hand case studies</li>
                  <li>• Before/after examples</li>
                  <li>• Personal anecdotes (YMYL)</li>
                  <li>• Hands-on demonstrations</li>
                  <li>• Real-world data/results</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Section 6: LLMO Techniques */}
          <section id="llmo" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">LLMO: LLM Optimization Techniques</h2>
            <p className="text-lg text-muted-foreground mb-8">
              As AI-powered search (Google Generative Search, Perplexity, Claude) grows, optimize for LLM consumption
              with conversational queries and citable structures.
            </p>

            <Card className="p-8 border-border mb-6">
              <h3 className="text-xl font-bold mb-4">Conversational Query Coverage</h3>
              <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                {`Voice/conversational variants for "[KW]":
- "Who/what/when/where/how [KW]?"
- Long-tail phrases (15 variations)
- FAQ schema content
- Featured snippet variants
- Natural language phrasing`}
              </pre>
            </Card>

            <Card className="p-8 border-border">
              <h3 className="text-xl font-bold mb-4">Citation-Friendly Structure</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>LLMs cite information when structured clearly:</p>
                <ul className="space-y-2 ml-4">
                  <li>
                    • <strong>Clear claims</strong> with sources inline
                  </li>
                  <li>
                    • <strong>Statistics</strong> with attribution links
                  </li>
                  <li>
                    • <strong>Expert backing</strong> with quote blocks
                  </li>
                  <li>
                    • <strong>Structured data</strong> (tables, lists)
                  </li>
                  <li>
                    • <strong>Authoritative tone</strong> without filler
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">SEO Prompting FAQ</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  What's the difference between SEO and LLMO prompting?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  SEO targets traditional Google search (keywords, links, on-page signals). LLMO targets AI-generated
                  search (clarity, citations, structured data). Modern prompts optimize for both simultaneously using
                  conversational language, clear structures, and authoritative sources.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  How do I incorporate E-E-A-T signals into AI-generated content?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Prompt the AI to include author bios, expert quotes (3+), data sources, case studies, and original
                  research. Use the E-E-A-T Article Generator prompt template to systematically build all four signals
                  into your content. Review and fact-check all claims before publishing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  Should I optimize for featured snippets?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. Featured snippets drive 7-20% of organic traffic depending on keywords. Use the Featured Snippet
                  Targeting prompt to craft concise, direct answers (45-65 words) with supporting lists or tables.
                  Position these early in your content.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  What keyword density should I target?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Keyword density of 1-2% is ideal. Focus on natural language placement rather than forced inclusion.
                  Use primary keywords in H1, H2s, and first 100 words. Let secondary and LSI keywords flow naturally
                  throughout the content.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  How many internal links should I include?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Include 5-10 relevant internal links per 2000 words. Link to related pillar pages, cluster content,
                  and resource pages. Use descriptive anchor text containing keywords. Prioritize linking to high-value
                  pages and building topical clusters.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  What's the ideal content length for SEO?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  For competitive keywords, 2000-3000+ words ranks better. For long-tail/low-competition keywords,
                  1000-1500 words suffices. Always prioritize depth and relevance over word count. Better a 1500-word
                  masterpiece than a 3000-word fluff piece.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16 px-6 md:px-12 mt-24 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-bold text-foreground mb-4">Prompt Engineering</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/prompt-engineering-fundamentals" className="hover:text-foreground transition-colors">
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/prompt-best-practices" className="hover:text-foreground transition-colors">
                  Best Practices
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Content & Marketing</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/ai-writing-prompts" className="hover:text-foreground transition-colors">
                  Writing Prompts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-foreground transition-colors">
                  ChatGPT Prompts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">AI Models</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/claude-prompts" className="hover:text-foreground transition-colors">
                  Claude Prompts
                </Link>
              </li>
              <li>
                <Link href="/gemini-prompts" className="hover:text-foreground transition-colors">
                  Gemini Prompts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-foreground transition-colors">
                  View All Pages
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2026 GPTPrompts.AI. Master prompt engineering with our comprehensive guides for ChatGPT, Claude, Gemini,
            and more.
          </p>
        </div>
      </footer>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Prompt Engineering for SEO: AI-Powered Content Optimization",
            description:
              "Master prompt engineering for SEO with our comprehensive guide. Learn to create search-optimized content using AI, including keyword strategies, E-E-A-T signals, and LLMO techniques.",
            image: "https://gptprompts.ai/og-image.jpg",
            author: { "@type": "Organization", name: "GPTPrompts.AI" },
            publisher: { "@type": "Organization", name: "GPTPrompts.AI" },
            datePublished: "2024-01-01",
            dateModified: new Date().toISOString(),
          }),
        }}
      />
    </main>
  )
}
