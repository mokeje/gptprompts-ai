"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useEffect } from "react"

export default function RoleBasedPromptingPage() {
  useEffect(() => {
    // Schema markup for SEO
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Role-Based Prompting with ChatGPT: Expert Personas for Better Results",
      description:
        "Master role-based prompting to transform ChatGPT into specialized experts with expert personas, professional templates, and advanced techniques.",
      author: { "@type": "Organization", name: "GPTPrompts.AI" },
      datePublished: "2026-01-12",
    }
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }, [])

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">Role-Based Prompting</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Master expert personas to transform ChatGPT into specialized consultants, teachers, and advisors. Unlock
            3-4x better alignment with professional expertise.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Navigation */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-6">Guide Sections</h3>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { id: "why-role-based", label: "Why Role-Based Prompts", num: "01" },
                { id: "core-principles", label: "Core Principles", num: "02" },
                { id: "business-roles", label: "Business Roles", num: "03" },
                { id: "creative-roles", label: "Creative Roles", num: "04" },
                { id: "technical-roles", label: "Technical Roles", num: "05" },
                { id: "education-roles", label: "Education Roles", num: "06" },
                { id: "advanced-techniques", label: "Advanced Techniques", num: "07" },
                { id: "implementation", label: "Implementation", num: "08" },
                { id: "faq", label: "FAQ", num: "09" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-center justify-between hover:text-purple-600 transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-bold text-muted-foreground">{item.num}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <div className="lg:col-span-9 space-y-16">
          {/* Section 1 */}
          <section id="why-role-based" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-purple-600 uppercase">01</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">Why Role-Based Prompts Deliver Superior Results</h2>
            </div>
            <div className="prose prose-lg max-w-none space-y-4">
              <p className="text-lg">
                Generic prompts get generic answers. Role-based prompts activate specialized knowledge patterns by
                assigning clear personas, roles, and contexts that produce more targeted, authoritative responses.
              </p>
              <Card className="p-8 bg-purple-50 border-purple-200">
                <p className="font-medium mb-4">
                  <strong>Generic:</strong> "Explain marketing" → Basic overview
                </p>
                <p className="font-medium">
                  <strong>Role-Based:</strong> "Act as a CMO with 15 years at Fortune 500 companies. Explain B2B SaaS
                  marketing strategy for 2026." → Detailed, actionable framework
                </p>
              </Card>
              <p>
                Results show 3-4x better alignment with professional expectations. Personas constrain responses to
                relevant expertise while expanding depth within that domain.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="core-principles" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-purple-600 uppercase">02</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Core Principles of Expert Persona Design</h2>
            </div>
            <div className="grid gap-6">
              <Card className="p-6 border-l-4 border-l-purple-600">
                <h3 className="font-bold mb-3">1. Specificity + Authority</h3>
                <p className="text-sm mb-3">
                  <strong>Weak:</strong> "You are a teacher"
                </p>
                <p className="text-sm">
                  <strong>Strong:</strong> "You are a high school physics teacher with 20 years experience teaching AP
                  Physics C. You've trained students who scored 5s on the exam."
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-blue-600">
                <h3 className="font-bold mb-3">2. Context + Constraints</h3>
                <p className="text-sm">
                  Add industry, company size, challenges, tools used, success metrics. "You are a Shopify Plus agency
                  owner helping DTC brands scale from $1M to $10M ARR using Klaviyo + Google Ads."
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-indigo-600">
                <h3 className="font-bold mb-3">3. Output Format + Audience</h3>
                <p className="text-sm">
                  "You are a McKinsey consultant presenting to C-suite executives. Use MECE framework, 3-bullet
                  summaries, and strategic recommendations only."
                </p>
              </Card>
            </div>
          </section>

          {/* Section 3 - Business Roles */}
          <section id="business-roles" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-purple-600 uppercase">03</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Professional Role Templates</h2>
            </div>

            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Fractional CMO</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm mb-4">
                  {`You are a fractional CMO with 12 years leading growth at Series B SaaS companies ($10-50M ARR). Specialties: Product-led growth, B2B SaaS pricing, go-to-market strategy.

Context: My company is [STAGE] with [ARR], targeting [ICP]. Current challenge: [SPECIFIC PROBLEM].

Respond with:
1. Executive summary (3 bullets)
2. Framework/analysis (table or MECE)
3. 3 prioritized recommendations
4. Implementation timeline + KPIs`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Technical Founder Advisor</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm mb-4">
                  {`You are a Y Combinator partner who mentored 40+ technical founders to $100M+ exits. Expertise: MVP validation, hiring first 10 engineers, Series A fundraising.

My tech stack: [LIST]. Current stage: [STAGE]. Biggest blocker: [PROBLEM].

Structure responses as:
- Key assumption check (2 questions)
- 90-day action plan (weekly priorities)
- Leading indicators to track
- When to hire vs. outsource`}
                </pre>
              </Card>
            </div>
          </section>

          {/* Section 4 - Creative Roles */}
          <section id="creative-roles" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-purple-600 uppercase">04</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Creative & Content Roles</h2>
            </div>

            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Award-Winning Copywriter</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`You are David Ogilvy reincarnated as a 2026 conversion copywriter. Wrote landing pages generating $500M+ revenue for SaaS. Master of customer psychology + clarity.

For every project:
1. Customer avatar psychographics
2. One core promise (headline tested)
3. Conversion funnel copy framework
4. A/B test variations (3 headlines, 2 CTAs)`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Viral Content Strategist</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`You are MrBeast's content director with 500M+ cross-platform views. Master of hook psychology, retention curves, algorithm hacking.

Analyze/generates content for:
Platform: [TikTok/YouTube/LinkedIn]
Audience: [DEMOGRAPHIC]
Goal: [VIEWS/LEADS/SALES]

Output: 0-3 second hook → 30s retention → Pattern interrupt → CTA`}
                </pre>
              </Card>
            </div>
          </section>

          {/* Section 5 - Technical Roles */}
          <section id="technical-roles" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-purple-600 uppercase">05</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Technical & Development Roles</h2>
            </div>

            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Senior Staff Engineer</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`You are a Distinguished Engineer at Google with 18 years experience. Led 3 teams building 100M+ user systems. Specialize in: distributed systems, performance at scale, hiring.

Current system: [ARCHITECTURE]. Problem: [SPECIFIC ISSUE].

Respond with:
1. Root cause analysis (3 probable causes)
2. Solution ranked by: reliability, implementation time, cost
3. Code architecture diagram (text)
4. Monitoring + alerting recommendations`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">ML Research Engineer</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`You are an ex-OpenAI researcher who shipped GPT-3 fine-tuning APIs. Now consulting for $100M+ AI startups. Expert in: RAG systems, evaluation frameworks, production ML.

Project: [DESCRIPTION]. Tech stack: [TOOLS].

Output format:
Problem formulation → Evaluation metrics → Architecture → Edge cases → Cost analysis`}
                </pre>
              </Card>
            </div>
          </section>

          {/* Section 6 - Education Roles */}
          <section id="education-roles" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-purple-600 uppercase">06</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Training & Education Roles</h2>
            </div>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Corporate Trainer</h3>
              <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                {`You are a Gallup-certified leadership trainer who upskilled 10,000+ managers at Fortune 100 companies. Master of adult learning + Kirkpatrick evaluation.

Training goal: [SKILL]. Audience: [ROLES]. Time: [DURATION].

Deliver:
1. 3 learning objectives (measurable)
2. 5.7.3 activity sequence (5 min hook → 7 min content → 3 min practice)
3. Assessment questions
4. Manager coaching guide`}
              </pre>
            </Card>
          </section>

          {/* Section 7 - Advanced Techniques */}
          <section id="advanced-techniques" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-purple-600 uppercase">07</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Advanced Persona Layering Techniques</h2>
            </div>

            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-lg font-bold mb-4">1. Dual-Persona Debate</h3>
                <p className="text-sm mb-4">
                  Have two experts debate before concluding to capture balanced perspectives.
                </p>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-xs">
                  {`You contain two experts who will debate before concluding:

Expert A: [Optimistic/aggressive/growth-focused persona]
Expert B: [Conservative/risk-focused/execution-oriented persona]

Debate my question for 3 exchanges each, then provide unified recommendation with tradeoffs explicit.`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-lg font-bold mb-4">2. Historical Figure + Modern Context</h3>
                <p className="text-sm mb-4">Combine historical expertise with contemporary awareness.</p>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-xs">
                  {`You are [Historical expert like Edward Deming, Peter Drucker] transported to 2026 with full modern context awareness.

Apply [their methodology/philosophy] to solve [modern business problem] for [specific company type].`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-lg font-bold mb-4">3. Persona Evolution</h3>
                <p className="text-sm mb-4">Gradually escalate expertise levels as you ask for promotions.</p>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-xs">
                  {`Begin as [Junior role]. After I say "promote", upgrade to [Senior role]. After "partner", become [Executive role].

Each level increases: strategic thinking, constraint awareness, risk evaluation.`}
                </pre>
              </Card>
            </div>
          </section>

          {/* Section 8 - Implementation */}
          <section id="implementation" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-purple-600 uppercase">08</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Implementation Framework for Teams</h2>
            </div>

            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-lg font-bold mb-4">Persona Library System</h3>
                <p className="text-sm mb-4">Create a shared document containing:</p>
                <ul className="text-sm space-y-2 list-disc list-inside">
                  <li>Persona name + qualifications</li>
                  <li>Context variables to fill</li>
                  <li>Output template</li>
                  <li>Success metrics (consistency, actionability)</li>
                  <li>Review cadence</li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-lg font-bold mb-4">Quality Control Checklist</h3>
                <p className="text-sm mb-4">Every role prompt must include:</p>
                <ul className="text-sm space-y-2">
                  <li>✅ Specific years of experience</li>
                  <li>✅ Industry/company context</li>
                  <li>✅ Measurable achievements</li>
                  <li>✅ Output structure</li>
                  <li>✅ Constraints/boundaries</li>
                  <li>✅ Success criteria</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-purple-600 uppercase">09</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "How specific should a persona be?",
                  a: "The more specific, the better. Include years of experience, companies, achievements, and domain expertise.",
                },
                {
                  q: "Can I combine multiple roles?",
                  a: "Yes. Dual-persona debates or role combinations create richer perspectives.",
                },
                {
                  q: "How do I measure if a role prompt is working?",
                  a: "Compare outputs to real expert guidance. Track consistency, actionability, and relevance scores.",
                },
                {
                  q: "What if ChatGPT breaks character?",
                  a: "Reinforce the persona in follow-ups or restate context explicitly.",
                },
                {
                  q: "Are there industry-specific templates?",
                  a: "Yes, build a library of proven personas and share across your organization.",
                },
                {
                  q: "How long should a persona prompt be?",
                  a: "Aim for 3-5 sentences defining role, experience, specialties, and context. Add output format separately.",
                },
                {
                  q: "Can I use role-based prompting for creative projects?",
                  a: "Absolutely. Creative directors, storytellers, and designers benefit from expert personas.",
                },
                {
                  q: "What's the difference between role-based and system prompts?",
                  a: "Role-based emphasizes specific expertise and context. System prompts define broader behavior.",
                },
                {
                  q: "How often should I update personas?",
                  a: "Review quarterly. Update achievements, context, and specialties as industries evolve.",
                },
                {
                  q: "Can I combine role-based prompting with other techniques?",
                  a: "Yes. Pair with chain-of-thought prompting, few-shot examples, or iterative refinement for best results.",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded px-4">
                  <AccordionTrigger className="hover:text-purple-600">{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-24 py-12 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">ChatGPT Guides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-purple-600">
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-business-productivity" className="hover:text-purple-600">
                  Business Productivity
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-custom-instructions" className="hover:text-purple-600">
                  Custom Instructions
                </Link>
              </li>
              <li>
                <Link href="/avoiding-hallucinations" className="hover:text-purple-600">
                  Avoiding Hallucinations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">AI Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/claude-artifacts-guide" className="hover:text-purple-600">
                  Claude Artifacts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-api-prompting" className="hover:text-purple-600">
                  API Prompting
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-code-generation" className="hover:text-purple-600">
                  Code Generation
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-data-analysis" className="hover:text-purple-600">
                  Data Analysis
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-engineering-fundamentals" className="hover:text-purple-600">
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/few-shot-prompting" className="hover:text-purple-600">
                  Few-Shot Prompting
                </Link>
              </li>
              <li>
                <Link href="/gpt-o1-guide" className="hover:text-purple-600">
                  GPT-o1 Guide
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-purple-600">
                  View All Pages
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-purple-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-purple-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/journal-guide" className="hover:text-purple-600">
                  Journal Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t text-sm text-center text-muted-foreground">
          <p>© 2026 GPTPrompts.AI. Master prompt engineering with expert guides and advanced techniques.</p>
        </div>
      </footer>
    </main>
  )
}
