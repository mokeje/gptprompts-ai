import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Claude for Research and Analysis: Academic & Professional Prompts | GPTPrompts.AI",
  description:
    "Master Claude AI for academic research, literature reviews, and professional analysis. Expert prompts for scholars, researchers, and consultants.",
}

export default function ClaudeResearchPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#6f42c1] to-[#5a32a3] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            Claude for <br />
            <span className="italic opacity-90">Research.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            Accelerate academic research and professional analysis with Claude's advanced reasoning. Comprehensive
            literature reviews, source evaluation, and insight synthesis.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#6f42c1] mb-6">Navigation</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "literature-review", label: "Literature Reviews", num: "01" },
                  { id: "source-evaluation", label: "Source Evaluation", num: "02" },
                  { id: "research-questions", label: "Research Questions", num: "03" },
                  { id: "academic-writing", label: "Academic Writing", num: "04" },
                  { id: "workflow", label: "Workflow Optimization", num: "05" },
                  { id: "best-practices", label: "Best Practices", num: "06" },
                  { id: "faq", label: "FAQ", num: "07" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#6f42c1] transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs opacity-50 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-16">
          <section id="literature-review" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Literature Review Mastery</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Claude's comprehensive literature review system streamlines the research process through structured
              analysis phases.
            </p>
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-[#6f42c1]">
                <h3 className="font-bold mb-3">Comprehensive Literature Scan</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Act as an academic research assistant specializing in [FIELD/DISCIPLINE]. Conduct literature review on
                  [RESEARCH TOPIC] with three phases:
                </p>
                <div className="bg-muted p-4 rounded font-mono text-sm overflow-auto">
                  <pre>{`Phase 1: Summarize current research landscape (500 words max)
Phase 2: Identify research gaps with table format
Phase 3: Suggest 5 focused research questions`}</pre>
                </div>
              </Card>
              <Card className="p-6 border-l-4 border-[#6f42c1]">
                <h3 className="font-bold mb-3">Paper-by-Paper Analysis Pipeline</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Systematically extract and compare research papers:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    • <strong>Core Claim:</strong> One-sentence thesis
                  </li>
                  <li>
                    • <strong>Methodology:</strong> Strengths and limitations
                  </li>
                  <li>
                    • <strong>Key Findings:</strong> Three bullets with effect sizes
                  </li>
                  <li>
                    • <strong>Theoretical Contribution:</strong> Field advancement
                  </li>
                  <li>
                    • <strong>Citation Value:</strong> Relevance scoring
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="source-evaluation" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Source Evaluation Framework</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Implement rigorous source credibility assessment with structured evaluation criteria.
            </p>
            <Card className="p-6 space-y-4">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-bold">Evaluation Criteria</th>
                    <th className="text-left p-3 font-bold">Assessment Method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Journal Impact Factor</td>
                    <td className="p-3">Research databases (Scopus, Web of Science)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Citation Count</td>
                    <td className="p-3">Google Scholar, field-specific databases</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Methodology Rigor</td>
                    <td className="p-3">Detailed peer review analysis</td>
                  </tr>
                  <tr>
                    <td className="p-3">Bias Risk Assessment</td>
                    <td className="p-3">Author background, funding sources</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </section>

          <section id="research-questions" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Research Question Development</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transform identified gaps into testable research questions and hypotheses.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Gap-to-Question Generator",
                  items: [
                    "Overarching RQ: Broad but focused",
                    "Sub-questions: Operationalized (4-6)",
                    "Hypotheses: Testable predictions (2-3)",
                    "Methodology Match: Quantitative/qualitative",
                  ],
                },
                {
                  title: "Feasibility Checker",
                  items: [
                    "Resource assessment (budget/time/access)",
                    "Methodological viability",
                    "Ethical considerations",
                    "Go/no-go recommendation",
                  ],
                },
              ].map((item, idx) => (
                <Card key={idx} className="p-6 border-l-4 border-[#6f42c1]">
                  <h3 className="font-bold mb-3">{item.title}</h3>
                  <ul className="space-y-2 text-sm">
                    {item.items.map((li, i) => (
                      <li key={i}>• {li}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          <section id="academic-writing" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Academic Writing Assistance</h2>
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-[#6f42c1]">
                <h3 className="font-bold mb-3">Argument Structure Builder</h3>
                <div className="space-y-3 text-sm">
                  <p>
                    <strong>Restructure approach:</strong>
                  </p>
                  <ol className="space-y-2 pl-4">
                    <li>I. Claim + 3-part evidence preview</li>
                    <li>II. Evidence Block 1 (counterarguments anticipated)</li>
                    <li>III. Evidence Block 2 (data triangulation)</li>
                    <li>IV. Synthesis + implications</li>
                    <li>V. Limitations + future work</li>
                  </ol>
                </div>
              </Card>
              <Card className="p-6 border-l-4 border-[#6f42c1]">
                <h3 className="font-bold mb-3">Peer Review Simulator</h3>
                <p className="text-sm mb-4">Receive constructive feedback across:</p>
                <ul className="space-y-2 text-sm">
                  <li>
                    • <strong>Clarity (1-5):</strong> Readability and precision
                  </li>
                  <li>
                    • <strong>Novelty:</strong> Contribution assessment
                  </li>
                  <li>
                    • <strong>Soundness:</strong> Methodological rigor
                  </li>
                  <li>
                    • <strong>Writing:</strong> Grammar and style
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="workflow" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Research Workflow Optimization</h2>
            <Card className="p-6 space-y-4">
              <div>
                <h3 className="font-bold mb-3">4-Week Literature Review Plan</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Week 1:</strong> Search strategy development + 20 papers identified
                  </div>
                  <div>
                    <strong>Week 2:</strong> Paper analysis + preliminary synthesis
                  </div>
                  <div>
                    <strong>Week 3:</strong> Gap identification + writing outlines
                  </div>
                  <div>
                    <strong>Week 4:</strong> Revision + complete bibliography
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-3">Integration Tools</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    • <strong>Zotero:</strong> Citation management
                  </li>
                  <li>
                    • <strong>Mendeley:</strong> PDF organization
                  </li>
                  <li>
                    • <strong>Claude:</strong> Analysis and synthesis
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          <section id="best-practices" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Best Practices and Academic Integrity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Verification Protocol",
                  items: [
                    "Cross-check all citations",
                    "Validate data interpretations",
                    "Verify claims against originals",
                  ],
                },
                {
                  title: "Usage Disclosure",
                  items: ["Note AI assistance in methods", "Acknowledge in acknowledgments", "Maintain transparency"],
                },
                {
                  title: "Quality Assurance",
                  items: ["Iterate prompts based on output", "Test multiple approaches", "Combine with research tools"],
                },
                {
                  title: "Human Oversight",
                  items: ["Evaluate original contributions", "Assess argument validity", "Validate novel insights"],
                },
              ].map((item, idx) => (
                <Card key={idx} className="p-4 border-l-4 border-[#6f42c1]">
                  <h3 className="font-bold mb-3 text-sm">{item.title}</h3>
                  <ul className="space-y-2 text-xs">
                    {item.items.map((li, i) => (
                      <li key={i}>• {li}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          <section id="faq" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "How many papers should I analyze for a literature review?",
                  a: "Start with 20-30 papers for foundation courses; 50-100 for graduate work; 100+ for dissertations or professional publications.",
                },
                {
                  q: "Can Claude identify research gaps automatically?",
                  a: "Claude excels at pattern detection across papers, but human judgment is essential for validating gap significance and novelty.",
                },
                {
                  q: "What's the best way to organize notes while reviewing?",
                  a: "Use structured extraction (core claim, methodology, findings, contribution) so Claude can later synthesize across papers efficiently.",
                },
                {
                  q: "How do I ensure my research questions are testable?",
                  a: "Use Claude's SMART criteria: Specific, Measurable, Achievable, Relevant, Time-bound. Test with feasibility prompts.",
                },
                {
                  q: "Should I disclose Claude usage in my paper?",
                  a: "Yes. Modern academic standards require disclosure of AI assistance in methods/acknowledgments to maintain transparency.",
                },
                {
                  q: "How does Claude compare to manual literature reviews?",
                  a: "Claude cuts review time by 50-70% through rapid synthesis and gap identification, but human expertise validates findings and ensures rigor.",
                },
                {
                  q: "Can Claude help with methodology critique?",
                  a: "Yes. Prompt Claude to evaluate study design, sample size, controls, and limitations. Cross-check assessments against methodological standards.",
                },
                {
                  q: "What's the best prompt format for analyzing multiple papers?",
                  a: "Use paper-by-paper analysis first, then thematic synthesis. Chain prompts to build comprehensive understanding systematically.",
                },
                {
                  q: "How do I avoid hallucinations in literature analysis?",
                  a: "Always provide actual paper text/abstracts, request specific citations, and verify AI-generated insights against primary sources.",
                },
                {
                  q: "Can Claude suggest novel research directions?",
                  a: "Claude identifies gaps and connections between fields effectively. Human researchers must validate feasibility and significance of suggestions.",
                },
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold hover:text-[#6f42c1]">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16 px-6 md:px-12 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-sm">AI Models</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/claude-prompts" className="hover:text-[#6f42c1]">
                  Claude Prompts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-[#6f42c1]">
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link href="/gemini-prompts" className="hover:text-[#6f42c1]">
                  Gemini Prompts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-sm">Advanced Topics</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/claude-image-analysis" className="hover:text-[#6f42c1]">
                  Claude Image Analysis
                </Link>
              </li>
              <li>
                <Link href="/prompt-engineering-framework" className="hover:text-[#6f42c1]">
                  8-Step Framework
                </Link>
              </li>
              <li>
                <Link href="/chain-of-thought-prompting" className="hover:text-[#6f42c1]">
                  Chain of Thought
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/website-links" className="hover:text-[#6f42c1]">
                  All Pages
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#6f42c1]">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-sm">Learning Paths</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-best-practices" className="hover:text-[#6f42c1]">
                  Best Practices
                </Link>
              </li>
              <li>
                <Link href="/common-prompt-mistakes" className="hover:text-[#6f42c1]">
                  Common Mistakes
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2026 GPTPrompts.AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
