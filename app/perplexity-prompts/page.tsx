import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Search, ListChecks, BookOpen, TrendingUp } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Perplexity Prompts: The Search-AI Masterclass | GPTPrompts.AI",
  description:
    "Master Perplexity AI with our authoritative guide. Learn how to use Perplexity prompts for deep research, real-time data analysis, and cited content creation.",
}

export default function PerplexityPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#212121] text-[#f3f3ee] py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Search className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Perplexity <br />
            <span className="italic opacity-90">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Real-time intelligence, cited. Our guide reveals how to prompt Perplexity to bypass SEO clutter and generate
            high-fidelity, research-backed insights in seconds.
          </p>
          {/* Removed word count and reading time spans */}
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#49c5b6] mb-6">Research Hub</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "Search vs. Chat", num: "01" },
                  { id: "pro-search", label: "Pro Search Workflows", num: "02" },
                  { id: "focus-modes", label: "Mastering Focus Modes", num: "03" },
                  { id: "pages", label: "Perplexity Pages", num: "04" },
                  { id: "deep-research", label: "Deep Research Prompting", num: "05" },
                  { id: "academic", label: "Academic Integrity", num: "06" },
                  { id: "sources", label: "Source Verification", num: "07" },
                  { id: "faq", label: "Perplexity FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#49c5b6] transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-[10px] opacity-30 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        {/* Content Body */}
        <div className="lg:col-span-9 space-y-32 max-w-4xl">
          <article id="intro" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">The End of Traditional Search</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Traditional search engines return links; Perplexity returns answers. This fundamental shift requires a new
              approach to <strong>Perplexity prompts</strong>. Unlike ChatGPT, which relies on its training data,
              Perplexity is an "answer engine" that browses the live web in real-time to synthesize responses with
              verifiable citations.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              To master Perplexity, you must learn to guide its browsing behavior. You aren't just asking for
              information; you are defining the search parameters, the source quality, and the synthesis style. Our
              guide explores how to use "Pro Search" to navigate complex queries that would take hours of manual
              research.
            </p>
          </article>

          <section id="pro-search" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#49c5b6]/10 rounded-xl">
                <ListChecks className="w-8 h-8 text-[#49c5b6]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Pro Search Multi-Step Logic</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pro Search is Perplexity's interactive reasoning engine. It asks clarifying questions to narrow down its
              search intent.
            </p>
            <Card className="p-8 border-none shadow-xl bg-secondary/30">
              <h3 className="text-xl font-bold mb-4">The "Iterative Research" Prompt</h3>
              <p className="mb-4 opacity-80 italic">
                "I am researching the impact of [TOPIC] on [INDUSTRY]. First, provide a high-level overview. Then,
                identify the top 5 controversies in this space. For each controversy, find at least two opposing
                academic views published in the last 24 months."
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p># Why this works:</p>
                <ul className="list-disc pl-6">
                  <li>It forces multi-stage browsing.</li>
                  <li>It specifies time-sensitivity (24 months).</li>
                  <li>It demands diverse perspectives.</li>
                </ul>
              </div>
            </Card>
          </section>

          <section
            id="pages"
            className="space-y-12 bg-[#49c5b6]/5 p-12 md:p-20 rounded-[3rem] border border-[#49c5b6]/10"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#49c5b6] font-bold uppercase tracking-widest text-sm mb-6">
                <BookOpen className="w-5 h-5" />
                <span>Perplexity Pages</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Authoritative Content Generation</h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Pages allow you to transform a search session into a beautifully formatted, shareable article. The key
                is the "Structural Prompt."
              </p>
              <div className="space-y-8">
                <div className="p-8 bg-white rounded-2xl border border-[#49c5b6]/10">
                  <h4 className="font-bold mb-4">The "Page Architect" Prompt:</h4>
                  <p className="text-sm text-muted-foreground italic">
                    "Create a Page about the history of [TOPIC]. Include sections for: [SECTION A], [SECTION B], and
                    [SECTION C]. For each section, find at least 3 unique citations. Use a professional, journalistic
                    tone."
                  </p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-[#49c5b6]/10">
                  <h4 className="font-bold mb-4">Competitive Analysis Workflow:</h4>
                  <p className="text-sm text-muted-foreground italic">
                    "Research the top 3 competitors in [NICHE]. Create a Page that compares their pricing models,
                    customer reviews from the last quarter, and stated mission. Include a summary table at the end."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="academic" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#212121] rounded-xl">
                <TrendingUp className="w-8 h-8 text-[#49c5b6]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Academic Research Mastery</h2>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              <p>
                For students and researchers, Perplexity is a force multiplier. By using the **Academic Focus Mode**,
                you can restrict the AI to peer-reviewed journals and academic repositories like arXiv and PubMed.
              </p>
              <Card className="p-8 bg-secondary/30 border-none my-8">
                <h4 className="font-bold mb-4 text-[#49c5b6]">The "Systematic Review" Prompt:</h4>
                <p className="italic text-muted-foreground mb-4">
                  "Perform a systematic review of the literature on [TOPIC]. Identify the consensus view, the primary
                  methodological critiques, and the most cited paper in the last 5 years. Provide DOI links for all
                  references."
                </p>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Perplexity Research FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How do I avoid hallucination in Perplexity?",
                  a: "Switch to 'Pro Search' and use the 'Academic' focus mode. Because Perplexity cites its sources, you can instantly verify any claim by clicking the citation link. Hallucinations are significantly lower than in standard LLMs.",
                },
                {
                  q: "Can Perplexity generate code like ChatGPT?",
                  a: "Yes, and often better for new libraries because it can read the latest documentation from the live web. Use the 'Writing' focus mode for pure code generation without search, or 'All' to find the latest API changes.",
                },
                {
                  q: "What is the best prompt for deep market research?",
                  a: "Use the 'Chain of Thought' approach: 'Start by identifying the top 3 competitors. For each, find their most recent quarterly earnings report. Summarize their stated risks for the upcoming year.'",
                },
                {
                  q: "What are Perplexity 'Collections'?",
                  a: "Collections allow you to group related threads and apply a shared 'System Prompt' to all of them. This is excellent for long-term projects like writing a book or conducting a month-long research study.",
                },
                {
                  q: "How does Perplexity handle file uploads?",
                  a: "You can upload PDFs, CSVs, and images. Perplexity can search the web to augment the data in your file. Prompt: 'Analyze this data sheet. Compare these specs to the top 3 competitors currently on the market.'",
                },
                {
                  q: "Can I use Perplexity as a daily news engine?",
                  a: "Yes. Use the prompt: 'Summarize the top 5 news stories in [INDUSTRY] from the last 12 hours. Prioritize first-hand reporting from Reuters and Bloomberg.'",
                },
                {
                  q: "What is the difference between 'Standard' and 'Pro' search?",
                  a: "Standard is a single-shot search. Pro is an agentic, multi-step reasoning engine that can browse dozens of sites, ask clarifying questions, and synthesize much deeper answers.",
                },
                {
                  q: "Does Perplexity have a mobile app?",
                  a: "Yes, and its voice-to-search functionality is industry-leading. You can speak complex research queries on the go, and it will synthesize cited answers in real-time.",
                },
                {
                  q: "How do I prompt for 'Cited Writing'?",
                  a: "Use the 'Writing' focus mode but start with a search. 'Research [TOPIC]. Then, write a 500-word blog post based on that research, including citations for every factual claim.'",
                },
                {
                  q: "Can I choose which LLM Perplexity uses?",
                  a: "With a Pro subscription, you can choose between Claude 3.5, GPT-4o, and Perplexity's own internal models. Each has strengths in different research domains.",
                },
                {
                  q: "How do I verify the quality of a source in Perplexity?",
                  a: "Click the citation number. Perplexity provides a preview of the source. You can also prompt: 'Evaluate the reliability of the sources used in this answer. Are there any potential biases?'",
                },
                {
                  q: "What is 'Discover' in Perplexity?",
                  a: "Discover is a curated feed of high-quality research 'Pages' created by the community. It's a great place to find inspiration for your own research prompts.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#49c5b6] transition-colors text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xl leading-relaxed pt-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-32 px-6 md:px-12 mt-32 border-t border-background/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm text-lg">
              The world's most comprehensive prompt engineering library. Master the machines, unleash your potential.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">AI Models</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Perplexity Prompts", href: "/perplexity-prompts" },
                { label: "Midjourney Prompts", href: "/midjourney-prompts" },
                { label: "Stable Diffusion Prompts", href: "/stable-diffusion-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/perplexity-prompts" ? "text-[#49c5b6] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Career & Writing</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Personal Statement Prompts", href: "/essay-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Story Prompts", href: "/story-prompts" },
                { label: "500+ Writing Prompts", href: "/500-writing-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Specialized</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Image Prompts", href: "/image-prompts" },
                { label: "SQL Prompts", href: "/sql-prompts" },
                { label: "Journaling Guide", href: "/journal-guide" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Resources & Guides</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Virtual Assistant Prompts", href: "/virtual-assistant-prompts" },
                { label: "Creative Writing for Beginners", href: "/creative-writing-prompts-beginners" },
                { label: "Photo Editing Prompts", href: "/photo-editing-prompts" },
                { label: "Social Media Marketing", href: "/social-media-marketing-prompts" },
                { label: "Free Prompts Library", href: "/free-ai-prompts" },
                { label: "Coolest ChatGPT Prompts", href: "/coolest-chatgpt-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-8 mt-8 border-t border-background/10">
                <p className="text-[10px] opacity-30 uppercase tracking-widest leading-loose">
                  © 2026 GPTPrompts.AI <br />
                  All Rights Reserved.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}
