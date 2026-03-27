import { Card } from "@/components/ui/card"
import { TrendingUp, GraduationCap, Brain } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Prompt Engineering Career Guide 2025: Salaries, Jobs & Learning Paths | GPTPrompts.AI",
  description:
    "Complete guide to prompt engineering careers. Discover average salaries ($75k-$175k+), where to learn, certifications, job opportunities, and how to become a prompt engineer in 2025.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen font-sans">
      <header className="bg-black text-white py-24 px-6 md:px-12 border-b">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter mb-8 inline-block hover:opacity-70 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Prompt Engineering<span className="text-muted-foreground/40 font-mono">_</span>Careers.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty leading-relaxed mb-6">
            Your Complete Guide to Building a Career in AI Prompt Engineering: Salaries, Learning Paths, and
            Professional Development.
          </p>
          <div className="flex gap-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
            <span>Last Updated: Dec 2025</span>
          </div>
        </div>
      </header>

      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* ... existing aside code ... */}
        <aside className="lg:sticky lg:top-12 self-start space-y-8 lg:col-span-1">
          <nav className="hidden lg:block">
            <ul className="space-y-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              <li>
                <a href="#overview" className="hover:text-black transition-colors flex items-center gap-2">
                  <span>00</span> Career Overview
                </a>
              </li>
              <li>
                <a href="#salary" className="hover:text-black transition-colors flex items-center gap-2">
                  <span>01</span> Salary & Compensation
                </a>
              </li>
              <li>
                <a href="#learning" className="hover:text-black transition-colors flex items-center gap-2">
                  <span>02</span> Where to Learn
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-black transition-colors flex items-center gap-2">
                  <span>03</span> Required Skills
                </a>
              </li>
              <li>
                <a href="#market" className="hover:text-black transition-colors flex items-center gap-2">
                  <span>04</span> Job Market Trends
                </a>
              </li>
              <li>
                <a href="#path" className="hover:text-black transition-colors flex items-center gap-2">
                  <span>05</span> Career Paths
                </a>
              </li>
              <li>
                <a href="#responsibilities" className="hover:text-black transition-colors flex items-center gap-2">
                  <span>06</span> Job Responsibilities
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-black transition-colors flex items-center gap-2">
                  <span>07</span> Tools & Technologies
                </a>
              </li>
              <li>
                <a href="#getting-started" className="hover:text-black transition-colors flex items-center gap-2">
                  <span>08</span> How to Get Started
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-black transition-colors flex items-center gap-2">
                  <span>09</span> Building a Portfolio
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-black transition-colors flex items-center gap-2">
                  <span>10</span> FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="p-6 bg-secondary border border-black/5">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Market Insight
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Prompt engineering roles grew 300% in 2024, with average salaries ranging from $75k to $175k+ depending on
              experience and location.
            </p>
          </div>
        </aside>

        <div className="lg:col-span-3 space-y-32 pb-32 max-w-4xl">
          {/* ... existing content sections ... */}
          {/* Overview Section */}
          <section id="overview" className="prose prose-neutral max-w-none">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">What is Prompt Engineering?</h2>
            <p className="text-xl leading-relaxed text-muted-foreground italic">
              Prompt engineering is one of the fastest-growing careers in artificial intelligence, combining technical
              expertise with creative communication skills to maximize AI model performance.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              As a prompt engineer, you design, test, and optimize the instructions given to large language models
              (LLMs) like ChatGPT, Claude, and GPT-4 to produce accurate, relevant, and valuable outputs. This role has
              emerged as critical as organizations integrate AI into their workflows, products, and services.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Unlike traditional software engineering, prompt engineering doesn't require extensive coding knowledge.
              Instead, it demands a deep understanding of how AI models interpret language, creative problem-solving
              abilities, and the capacity to translate business requirements into effective prompts. The field is highly
              accessible to career changers, writers, researchers, and those with domain expertise in various
              industries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              <Card className="p-6">
                <Brain className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Creative & Analytical</h3>
                <p className="text-sm text-muted-foreground">
                  Blend linguistic creativity with data-driven optimization
                </p>
              </Card>
              <Card className="p-6">
                <GraduationCap className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Low Barrier to Entry</h3>
                <p className="text-sm text-muted-foreground">No CS degree required; learn through practice</p>
              </Card>
              <Card className="p-6">
                <TrendingUp className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">High Demand</h3>
                <p className="text-sm text-muted-foreground">300% job growth year-over-year</p>
              </Card>
            </div>

            <h3 className="text-3xl font-bold mt-12">Why Prompt Engineering Matters</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The quality of AI outputs depends entirely on the quality of the prompts. Poor prompts generate vague or
              incorrect responses, while expertly crafted prompts unlock the full potential of AI systems. Companies
              invest heavily in prompt engineers to ensure their AI implementations deliver consistent, reliable, and
              valuable results. As AI adoption accelerates across industries, the demand for skilled prompt engineers
              continues to surge.
            </p>
          </section>

          {/* ... existing sections ... */}
          {/* Learning Section */}
          <section id="learning" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Where to Learn Prompt Engineering</h2>

            <div className="prose prose-neutral max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                The prompt engineering field is so new that formal education programs are still emerging. However, a
                wealth of resources exists to help you build expertise. Here's a comprehensive guide to learning prompt
                engineering, from free resources to professional certifications.
              </p>
            </div>
            {/* ... remaining content skipped for brevity ... */}
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
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Career & Specialized</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Career Prompts", href: "/careers" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Image Prompts", href: "/image-prompts" },
                { label: "SQL Prompts", href: "/sql-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Test Prep</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "SAT Prompts", href: "/sat-prompts" },
                { label: "GRE Prompts", href: "/gre-prompts" },
                { label: "GMAT Prompts", href: "/gmat-prompts" },
                { label: "IELTS Prompts", href: "/ielts-prompts" },
                { label: "TOEFL Prompts", href: "/toefl-prompts" },
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
