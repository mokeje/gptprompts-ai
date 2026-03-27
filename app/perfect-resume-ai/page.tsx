import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText, TrendingUp, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Crafting the Perfect Resume with AI Prompts: Stand Out from the Crowd | GPTPrompts.AI",
  description:
    "Master resume writing with AI. Learn the reverse-engineering prompt technique, ATS optimization, and quantifiable resume strategies to land interviews.",
}

export default function PerfectResumeAIPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <FileText className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[0.85] mb-8">
            Perfect <br />
            <span className="italic opacity-90">AI Resumes.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Master resume writing with AI. Use reverse-engineering prompts, ATS optimization, and quantifiable
            strategies to craft resumes that pass systems and impress recruiters.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-6">
                Master Resume Writing
              </h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "The Job Search Dual-Battle", num: "01" },
                  { id: "reverse-engineering", label: "Reverse-Engineering Prompts", num: "02" },
                  { id: "quantifiable", label: "The Power of Numbers", num: "03" },
                  { id: "ats-optimization", label: "ATS Optimization", num: "04" },
                  { id: "keyword-strategy", label: "Keyword Strategy", num: "05" },
                  { id: "formatting", label: "AI-Friendly Formatting", num: "06" },
                  { id: "tailoring", label: "Tailoring to Job Descriptions", num: "07" },
                  { id: "llm-recommendations", label: "LLM Recommendations", num: "08" },
                  { id: "faq", label: "Resume Writing FAQ", num: "09" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-emerald-600 transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">The Modern Resume: A Dual-Battle</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              The modern job search is a two-front war. First, you must pass the Applicant Tracking System
              (ATS)—software that scans resumes for keywords and filters out 99% of applicants before a human ever sees
              your work. Second, you must impress the human recruiter who spends 6 seconds reviewing your resume.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              AI prompts are your secret weapon. With the right techniques, you can craft resumes that pass both systems
              while saving hours on every application. The key is understanding how to reverse-engineer job
              descriptions, add quantifiable impact, and optimize for ATS systems.
            </p>
          </article>

          <section
            id="reverse-engineering"
            className="space-y-12 bg-slate-900 text-slate-100 p-12 md:p-20 rounded-[3rem]"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-emerald-400 font-bold uppercase tracking-widest text-sm mb-6">
                <TrendingUp className="w-5 h-5" />
                <span>Reverse-Engineering Strategy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">The Most Effective Resume Prompt</h2>
              <p className="text-xl opacity-80 mb-12 leading-relaxed">
                Analyze the job description first. This forces the AI to understand the employer's needs before you
                tailor your experience.
              </p>
              <div className="space-y-8">
                <div className="p-8 bg-slate-800 rounded-2xl border border-white/5">
                  <h4 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-xs">
                    The Two-Step Framework:
                  </h4>
                  <ul className="space-y-4 text-sm opacity-70">
                    <li>
                      <strong>Step 1:</strong> Paste the job description and ask: "Identify the top 5 most important
                      skills and the core 'problem' this company is trying to solve with this hire."
                    </li>
                    <li>
                      <strong>Step 2:</strong> Provide your experience and say: "Rewrite my bullet points for [Role] to
                      emphasize [Skill A] and [Skill B]. Use the 'Action Verb + Task + Quantifiable Result' formula."
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="quantifiable" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-emerald-600/10 rounded-xl">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">The Power of Quantifiable Bullets</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Recruiters scan resumes for numbers. A weak resume says "Managed a team." A strong one says "Led 10-person
              team to 25% YoY revenue increase through CRM workflow optimization." Here's how AI makes this automatic.
            </p>
            <div className="space-y-8">
              <div className="p-8 bg-emerald-600/5 border-l-4 border-emerald-600 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">The Quantifiable Bullet Prompt</h3>
                <p className="mb-4 text-muted-foreground">
                  Use this exact framework to transform weak bullets into strong ones:
                </p>
                <code className="block bg-foreground/10 p-4 rounded text-sm overflow-x-auto leading-relaxed">
                  "I managed a team and improved sales. Rewrite this as a strong resume bullet using the formula: Action
                  Verb + Task + Quantifiable Result. Make it 1-2 lines and optimized for a Senior Manager role in tech.
                  Use concrete numbers."
                </code>
                <p className="mt-4 text-sm opacity-80">
                  AI output: "Led a cross-functional team of 10 to achieve a 25% year-over-year increase in revenue
                  through the implementation of a new CRM workflow."
                </p>
              </div>
            </div>
          </section>

          <section id="ats-optimization" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">ATS Optimization Strategies</h2>
            <div className="space-y-8">
              <div className="p-8 bg-emerald-600/5 border-l-4 border-emerald-600 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">What ATS Systems Look For</h3>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li>
                    <strong>Keyword Density:</strong> ATS scans for job description keywords. More matches = higher
                    score.
                  </li>
                  <li>
                    <strong>Format Compatibility:</strong> ATS prefers simple formatting (no columns, tables, or fancy
                    fonts).
                  </li>
                  <li>
                    <strong>Specific Job Titles:</strong> "Senior Software Engineer" ranks higher than "Engineer" for
                    that role.
                  </li>
                  <li>
                    <strong>Industry-Specific Terminology:</strong> Use the exact language from the job posting.
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-emerald-600/5 border-l-4 border-emerald-600 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">The ATS Prompt</h3>
                <code className="block bg-foreground/10 p-4 rounded text-sm overflow-x-auto leading-relaxed">
                  "Optimize my resume for ATS systems. Include the top 10 keywords from this job description: [Paste
                  JD]. Rewrite my summary and bullet points to naturally incorporate these terms. Use industry-specific
                  terminology from 2026."
                </code>
              </div>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Resume Writing FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How long should my resume be?",
                  a: "For early career (0-3 years): 1 page. Mid-career (3-8 years): 1-2 pages. Senior (8+ years): 2-3 pages maximum. Recruiters spend 6 seconds on resumes, so brevity is critical.",
                },
                {
                  q: "Should I customize my resume for every application?",
                  a: "Yes, absolutely. Use the reverse-engineering prompt to analyze each job description and tailor your bullets. This dramatically increases ATS pass rates.",
                },
                {
                  q: "Can AI completely write my resume?",
                  a: "AI can draft sections, but you must provide accurate data and approve all claims. Never let AI fabricate experience or skills you don't have.",
                },
                {
                  q: "What's the best resume format for ATS?",
                  a: "Simple is best. Use a single column layout, standard fonts (Arial, Calibri), no color, no graphics, no tables. Save as PDF or .docx for maximum compatibility.",
                },
                {
                  q: "How do I handle resume gaps or job hopping?",
                  a: "Address gaps directly in your summary. For job hopping, frame it positively: 'Progressed through three strategic roles in high-growth environments.' AI can help reframe these narratives.",
                },
                {
                  q: "Should I include GPA on my resume?",
                  a: "Only if it's 3.7 or higher and you're entry-level. For experienced professionals, GPA is irrelevant and wastes space.",
                },
                {
                  q: "What's the best action verb to start bullet points?",
                  a: "Varies by role. Leadership: 'Led,' 'Managed.' Technical: 'Architected,' 'Optimized.' Sales: 'Generated,' 'Accelerated.' Use varied action verbs to avoid repetition.",
                },
                {
                  q: "Can I use AI-generated bullet points directly?",
                  a: "Use them as a starting point only. Verify all numbers and claims. Customize language to match your authentic voice and ensure accuracy.",
                },
                {
                  q: "How often should I update my resume?",
                  a: "Update continuously as you achieve new results. Before applying: customize for the role. Before interviews: prepare to discuss every bullet point.",
                },
                {
                  q: "What's the difference between a resume and a CV?",
                  a: "Resume: 1-2 pages, summary-focused, optimized for ATS. CV: 3+ pages, comprehensive academic/research focus, used primarily in academic/international contexts.",
                },
                {
                  q: "Should I include soft skills on my resume?",
                  a: "Yes, but back them up with specific examples. Instead of 'team player,' write 'Collaborated with cross-functional teams to deliver $2M project under budget.'",
                },
                {
                  q: "How do I explain being self-employed or freelance?",
                  a: "List specific clients (if allowed) or describe projects. Use the same quantifiable format: 'Grew freelance client base from 0 to 15 through referral marketing in 18 months.'",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-emerald-600 transition-colors text-left">
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm text-lg">
              Master prompt engineering and unlock the true potential of AI systems.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">AI Models</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Perplexity Prompts", href: "/perplexity-prompts" },
                { label: "Midjourney Prompts", href: "/midjourney-prompts" },
                { label: "Free AI Prompts", href: "/free-ai-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">University Essays</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Stanford Essays", href: "/stanford-essay-prompts" },
                { label: "MIT Essays", href: "/uc-essay-prompts" },
                { label: "Princeton Essays", href: "/princeton-essays" },
                { label: "NYU Essays", href: "/nyu-essay-prompts" },
                { label: "Common App Essays", href: "/common-app-essays" },
                { label: "View All Universities", href: "/essay-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Career & Writing</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Story Prompts", href: "/story-prompts" },
                { label: "Photo Editing", href: "/photo-editing-prompts" },
                { label: "Social Media", href: "/social-media-marketing-prompts" },
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Advanced Tools</h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Gemini AI Guide", href: "/gemini-ai-guide" },
                { label: "Google AI Studio", href: "/google-ai-studio" },
                { label: "BlackBox AI", href: "/blackbox-ai" },
                { label: "Leonardo AI", href: "/leonardo-ai" },
                { label: "Suno AI", href: "/suno-ai" },
                { label: "View All Tools", href: "/kimi-ai-prompts" },
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
            <ul className="space-y-4 text-sm font-medium">
              {[
                { label: "Human-Like Prompts", href: "/human-like-prompts", highlight: true },
                { label: "LinkedIn Professional Headshots", href: "/linkedin-professional-headshots", highlight: true },
                { label: "Perfect Resume with AI", href: "/perfect-resume-ai", highlight: true },
                { label: "Prompt Writing Best Practices", href: "/prompt-best-practices", highlight: true },
                { label: "Virtual Assistant Prompts", href: "/virtual-assistant-prompts" },
                { label: "Creative Writing for Beginners", href: "/creative-writing-prompts-beginners" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.highlight ? "text-emerald-600 font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
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
