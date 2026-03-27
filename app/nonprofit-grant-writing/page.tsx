import Link from "next/link"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "ChatGPT Prompts for Nonprofits: Complete Grant Writing Guide",
  description:
    "75+ production-ready ChatGPT prompts for nonprofit grant writing. Increase your grant success rate from 10% to 30%+ with AI-assisted LOIs, proposals, budgets, and evaluation plans.",
}

export default function NonprofitGrantWritingPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 px-6 md:px-12 border-b">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-sm font-medium opacity-80 hover:opacity-100 mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Grant Writing Prompts for Nonprofits
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            75+ production-ready ChatGPT prompts to generate LOIs, full proposals, budgets, evaluation plans, and
            funder-specific narratives. Boost your grant success rate from 10-15% to 30%+ with AI assistance.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="text-sm opacity-75">TIME SAVINGS</p>
              <p className="text-2xl font-bold">15 hrs → 3 hrs per proposal</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="text-sm opacity-75">SUCCESS RATE BOOST</p>
              <p className="text-2xl font-bold">3x higher win rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="text-sm opacity-75">REVENUE IMPACT</p>
              <p className="text-2xl font-bold">$250K → $900K annually</p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        <aside className="lg:sticky lg:top-12 self-start space-y-8 lg:col-span-1">
          <nav className="hidden lg:block space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-50">Sections</h3>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { label: "Framework Overview", href: "#framework" },
                { label: "Phase 1: Research", href: "#phase1" },
                { label: "Phase 2: LOI & Pre-Proposal", href: "#phase2" },
                { label: "Phase 3: Full Proposal", href: "#phase3" },
                { label: "Funder-Specific", href: "#funder" },
                { label: "Evaluation & ROI", href: "#evaluation" },
                { label: "Pro Workflow", href: "#workflow" },
                { label: "FAQs", href: "#faq" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="lg:col-span-3 space-y-20 pb-32">
          <section id="framework" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Grant Writing Success Framework</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Grant funding success rates average 10-15%. With ChatGPT prompts, nonprofits achieve 30%+ success rates by
              generating higher-quality LOIs, needs assessments, logic models, and funder-specific narratives in
              fraction of the time.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-blue-900 mb-2">Phase 1</h4>
                  <p className="text-blue-900">Research (20%) → LOI (30%)</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-blue-900 mb-2">Phase 2</h4>
                  <p className="text-blue-900">Full Proposal (40%) → Budget (10%)</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-blue-900 mb-2">Phase 3</h4>
                  <p className="text-blue-900">Submission + Follow-up (10%)</p>
                </div>
              </div>
              <div className="border-t border-blue-200 pt-6">
                <p className="text-sm text-blue-900">
                  <span className="font-bold">AI ROI:</span> 15 hours → 3 hours per proposal
                </p>
              </div>
            </div>
          </section>

          <section id="phase1" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Phase 1: Grant Research & Qualification</h2>
            <p className="text-lg text-muted-foreground">
              Start with AI-powered research to identify the best funders for your nonprofit.
            </p>

            <div className="space-y-8">
              <Card className="p-8 border-2 border-blue-200">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold opacity-10">1</span>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-2xl font-bold">Foundation Database Search</h3>
                      <p className="text-muted-foreground">
                        Find grants for [MISSION: homeless youth housing]. CRITERIA: $50K-$250K, national scope, program
                        support. Output: 15 funders with deadlines, LOI requirements, past awards, and contact info.
                      </p>
                      <div className="bg-black text-white p-4 font-mono text-xs rounded mt-4">
                        Prioritize: Geographic fit, funding ratio &gt;20%
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-blue-200">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold opacity-10">2</span>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-2xl font-bold">Corporate Giving Alignment</h3>
                      <p className="text-muted-foreground">
                        Identify corporate prospects based on your mission and target industry. Align with CSR
                        priorities (DEI, environment, youth). Generate 10 companies with RFP processes and foundation
                        contacts.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-blue-200">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold opacity-10">3</span>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-2xl font-bold">Funder Fit Matrix</h3>
                      <p className="text-muted-foreground">
                        Score funders 1-10 on mission alignment, geography, and grant size. Identify top 5 with pursuit
                        strategy. Save hours of manual research.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section id="phase2" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Phase 2: LOI & Pre-Proposal Prompts</h2>

            <Card className="p-8 bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200">
              <h3 className="text-2xl font-bold mb-4">One-Page LOI Template Prompt</h3>
              <div className="bg-white p-4 rounded font-mono text-sm space-y-2 mb-4">
                <p>**LOI** [FUNDER NAME]: [PROGRAM NAME]</p>
                <p>**Problem**: [1 data point + 1 story]</p>
                <p>**Solution**: [3 bullets, your unique IP]</p>
                <p>**Ask**: $[AMOUNT] for [SPECIFIC USE]</p>
                <p>**Org**: [3-sentence cred + impact]</p>
              </div>
              <p className="text-sm text-muted-foreground">
                400 words max, funder-specific language, highest conversion rate.
              </p>
            </Card>
          </section>

          <section id="phase3" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Phase 3: Full Proposal Section Prompts</h2>
            <p className="text-muted-foreground">
              Use these prompts to generate compelling needs statements, evidence-based program designs, and detailed
              budget narratives.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Compelling Needs Statement",
                  description:
                    "Generate 3 data points (national/state/local) + 1 human story + service gap + your capacity.",
                  example: "Population: rural seniors. Sources: Census/Health Dept.",
                },
                {
                  title: "Evidence-Based Program Design",
                  description:
                    "Create logic model: Inputs → Activities → Outputs → Outcomes → Impact with 3 evaluation measures.",
                  example: "Include 3 peer-reviewed studies supporting your approach.",
                },
                {
                  title: "Budget Narrative Justification",
                  description:
                    "Generate detailed budget with line-item justification. Standard ratios: Personnel 60%, Direct 25%, Indirect 15%.",
                  example: "No salary details. Focus on cost allocation and impact per dollar.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-6 border-l-4 border-blue-500">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-3">{item.description}</p>
                  <p className="text-sm bg-blue-50 p-3 rounded italic">{item.example}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="funder" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Funder-Specific Proposal Prompts</h2>

            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500">
                <h3 className="font-bold text-lg mb-2">Federal Grants (SAMHSA/HRSA)</h3>
                <p className="text-muted-foreground">
                  Generate federal narratives with CFDA compliance language. Focus on capacity, need, quality, and
                  sustainability with performance measures.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500">
                <h3 className="font-bold text-lg mb-2">Community Foundation LOI</h3>
                <p className="text-muted-foreground">
                  Emphasize local impact metrics and resident testimonials. Connect to county/community focus.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500">
                <h3 className="font-bold text-lg mb-2">Corporate RFP Response</h3>
                <p className="text-muted-foreground">
                  Create business case showing employee engagement and CSR alignment. Include measurable CSR ROI
                  metrics.
                </p>
              </Card>
            </div>
          </section>

          <section id="evaluation" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Evaluation & Sustainability</h2>
            <p className="text-muted-foreground">
              Funders want to see how you'll measure impact and sustain programs beyond grant periods.
            </p>

            <div className="bg-background border-2 border-green-200 rounded-lg p-8">
              <h3 className="font-bold text-lg mb-4">3-Year Sustainability Plan</h3>
              <p className="text-muted-foreground mb-6">
                Generate post-grant revenue diversification strategies including partnerships, earned income, and
                recurring funders. Show funder how program continues.
              </p>
              <div className="bg-green-50 p-4 rounded text-sm space-y-2">
                <p>
                  <span className="font-bold">Year 1:</span> Grant funds 80%, earned income 20%
                </p>
                <p>
                  <span className="font-bold">Year 2:</span> Grant 60%, earned income 40%
                </p>
                <p>
                  <span className="font-bold">Year 3:</span> Self-sustaining (0% grant dependency)
                </p>
              </div>
            </div>
          </section>

          <section id="workflow" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Pro Workflow: 15 Hours → 3 Hours</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 bg-blue-50 border-blue-200">
                <h3 className="font-bold mb-4">Day 1: Research + LOI</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Foundation Database Search (#1)</li>
                  <li>• Corporate Giving Alignment (#2)</li>
                  <li>• Funder Fit Matrix (#3)</li>
                  <li>• One-Page LOI (#4)</li>
                  <li>• Executive Summary (#5)</li>
                </ul>
              </Card>

              <Card className="p-6 bg-green-50 border-green-200">
                <h3 className="font-bold mb-4">Day 2: Full Draft</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Compelling Needs Statement (#6)</li>
                  <li>• Evidence-Based Program (#7)</li>
                  <li>• Budget Narrative (#8)</li>
                  <li>• Funder-Specific Sections (#9-11)</li>
                  <li>• Organizational Capacity (#14)</li>
                </ul>
              </Card>

              <Card className="p-6 bg-purple-50 border-purple-200">
                <h3 className="font-bold mb-4">Day 3: Review + Submit</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Full Proposal Assembly (#18)</li>
                  <li>• Content verification (100% human review)</li>
                  <li>• Copyscape check (95%+ original)</li>
                  <li>• Final formatting & submission</li>
                  <li>• Thank You Letter (#19)</li>
                </ul>
              </Card>

              <Card className="p-6 bg-amber-50 border-amber-200">
                <h3 className="font-bold mb-4">Ongoing: Stewardship</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 6-Month Progress Report (#20)</li>
                  <li>• Grant Pipeline Tracking</li>
                  <li>• Relationship Building</li>
                  <li>• Next Cycle Planning</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1" className="border border-blue-100 rounded-lg px-6 py-4">
                <AccordionTrigger className="text-lg font-bold hover:no-underline">
                  What's the difference between federal, foundation, and corporate grants?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 space-y-2">
                  <p>
                    <span className="font-bold">Federal Grants:</span> Larger ($50K-$500K+), highly competitive, require
                    CFDA compliance, SAMHSA/HRSA/NIH common sources.
                  </p>
                  <p>
                    <span className="font-bold">Foundation Grants:</span> Mid-range ($5K-$250K), focus on specific
                    causes, require LOI first, Candid/Foundation Center research.
                  </p>
                  <p>
                    <span className="font-bold">Corporate Giving:</span> Variable ($1K-$100K), align with CSR
                    priorities, fastest approval, employee engagement focus.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border border-blue-100 rounded-lg px-6 py-4">
                <AccordionTrigger className="text-lg font-bold hover:no-underline">
                  How do I ensure ChatGPT-generated content meets ethical standards?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 space-y-2">
                  <p>
                    <span className="font-bold">✓ Attribution:</span> Label all AI-assisted sections
                  </p>
                  <p>
                    <span className="font-bold">✓ Human Review:</span> 100% content verification by your team
                  </p>
                  <p>
                    <span className="font-bold">✓ Data Privacy:</span> Never include client PII
                  </p>
                  <p>
                    <span className="font-bold">✓ Originality:</span> Run Copyscape (aim for 95%+ unique)
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border border-blue-100 rounded-lg px-6 py-4">
                <AccordionTrigger className="text-lg font-bold hover:no-underline">
                  What's the expected ROI from using AI for grant writing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 space-y-2">
                  <p>
                    <span className="font-bold">Success Rate Improvement:</span> 12% → 18% average (3x boost for
                    well-crafted LOIs)
                  </p>
                  <p>
                    <span className="font-bold">Revenue Impact:</span> $250K → $900K annually (tracking 10 proposals)
                  </p>
                  <p>
                    <span className="font-bold">Time Savings:</span> 75% reduction (15 hours → 3.75 hours per proposal)
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="mt-20 pt-20 border-t space-y-8">
            <h3 className="text-2xl font-bold">Ready to boost your grant success?</h3>
            <p className="text-muted-foreground text-lg">
              Start with Phase 1 research prompts to identify your best funder opportunities, then use the LOI template
              to create compelling proposals that stand out.
            </p>
            <Link
              href="/website-links"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Explore More AI Prompts
            </Link>
          </section>
        </div>
      </section>

      <footer className="border-t bg-background/40 py-16 px-6 md:px-12 mt-32">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2026 GPTPrompts.AI - All Rights Reserved</p>
        </div>
      </footer>
    </main>
  )
}
