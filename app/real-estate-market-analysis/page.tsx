import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Real Estate Market Analysis Prompts: ChatGPT CMA Reports & Investment Models | GPTPrompts.AI",
  description:
    "ChatGPT prompts for real estate professionals. Generate CMA reports, market analysis, investment models, and client presentations. Save 5-8 hours per report.",
}

export default function RealEstateMarketAnalysisPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
            Real Estate <br /> Market Analysis
          </h1>
          <p className="text-xl max-w-3xl opacity-90">
            ChatGPT prompts for agents and investors. Generate CMA reports, market forecasts, investment models, and
            client presentations. Save 5-8 hours per report with data-driven analysis.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#f59e0b] mb-6">Sections</h3>
              <ul className="space-y-3 text-sm font-medium">
                {[
                  { id: "market-overview", label: "Market Overview", num: "01" },
                  { id: "pricing", label: "Pricing & Valuation", num: "02" },
                  { id: "investment", label: "Investment Analysis", num: "03" },
                  { id: "buyer-research", label: "Buyer Research", num: "04" },
                  { id: "lead-gen", label: "Lead Generation", num: "05" },
                  { id: "faq", label: "FAQ", num: "06" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group hover:text-[#f59e0b] transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-muted-foreground group-hover:text-[#f59e0b]">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-24">
            <section id="market-overview" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">01. Market Overview & Trends</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Comprehensive CMA Report</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Market analysis report** [NEIGHBORHOOD/ZIP: 90210], [PROPERTY TYPE: single-family].
                    <br />
                    Last 12 months:
                    <br />- Median sale price/trend
                    <br />- DOM (days on market)
                    <br />- Inventory levels
                    <br />- Price per sqft
                    <br />- Buyer/seller ratio
                    <br />
                    Comps: 6 active/pending/sold (table)
                    <br />
                    Pricing recommendation range.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Micro-Market Deep Dive</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Neighborhood report** [AREA: Beverly Hills 90210].
                    <br />
                    6-month trends:
                    <br />
                    Sales volume | Median price | Inventory | Absorption rate
                    <br />
                    Macro factors: Jobs, schools, crime
                    <br />
                    Micro: New construction, foreclosures
                    <br />
                    Future 90-day forecast.
                  </div>
                </div>
              </div>
            </section>

            <section id="pricing" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">02. Pricing & Valuation Prompts</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Automated CMA (6 Comps)</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **CMA 6 comps** [SUBJECT PROPERTY: 4br/3ba, 2800sqft]:
                    <br />3 sold (90 days), 2 pending, 1 active.
                    <br />
                    Adjustments table: Size/location/condition.
                    <br />
                    Final value range + confidence.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Price Per Square Foot Analysis</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **PSF breakdown** [NEIGHBORHOOD]: Recent sales data.
                    <br />
                    PSF range by condition/age.
                    <br />
                    Subject property PSF target.
                    <br />
                    Over/under market pricing signals.
                  </div>
                </div>
              </div>
            </section>

            <section id="investment" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">03. Investment Analysis Prompts</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Rental Yield Calculator</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Investment analysis** [PROPERTY $450K, projected rent $2800/mo].
                    <br />
                    Cap rate | Cash flow | IRR 5yr | Break-even occupancy
                    <br />
                    Sensitivity: Rent ±10%, vacancy ±2%
                    <br />
                    Tax benefits assumptions.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Commercial NOI Model</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Triple net** 5000sqft office $25psf NNN.
                    <br />
                    NOI calculation → Cap rate comps → Value range.
                    <br />
                    Lease rollover risk analysis.
                  </div>
                </div>
              </div>
            </section>

            <section id="buyer-research" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">04. Buyer Research Prompts</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">First-Time Buyer Neighborhood Guide</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Buyer's guide** [BUDGET $500K, 3br]: Top 3 neighborhoods.
                    <br />
                    Schools | Commute | Appreciation | Inventory
                    <br />
                    Investment potential ranked.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Relocation Market Report</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Corporate relocation** [EXECUTIVE, Vancouver to Toronto].
                    <br />
                    Commute analysis | Schools (private/public) | Lifestyle fit
                    <br />
                    Top 3 neighborhoods + comps.
                  </div>
                </div>
              </div>
            </section>

            <section id="lead-gen" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">05. Lead Generation Content Prompts</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Market Update Newsletter</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Monthly market email** [CITY]: Subject line + 300w body.
                    <br />
                    Key stat headline → 3 trends → 1 prediction → CTA
                    <br />3 chart descriptions.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Expired Listing Market Analysis</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Expired analysis** [ADDRESS]: 45 DOM, $50K price cut.
                    <br />
                    Market shift since listing.
                    <br />
                    Repricing recommendation.
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">06. FAQ</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-6 bg-slate-50">
                  <h3 className="font-bold mb-2">How accurate are ChatGPT CMAs?</h3>
                  <p className="text-muted-foreground">
                    ChatGPT provides excellent frameworks, but always verify with live MLS data. Use ChatGPT to generate
                    structure and analysis; feed it your own data.
                  </p>
                </div>
                <div className="border rounded-lg p-6 bg-slate-50">
                  <h3 className="font-bold mb-2">Can I use these for legal documents?</h3>
                  <p className="text-muted-foreground">
                    Use as templates only. All market reports should be reviewed by you and signed personally. ChatGPT
                    output is support, not the final analysis.
                  </p>
                </div>
                <div className="border rounded-lg p-6 bg-slate-50">
                  <h3 className="font-bold mb-2">What data sources should I use?</h3>
                  <p className="text-muted-foreground">
                    MLS, Zillow, Redfin APIs + public data feed into ChatGPT. ChatGPT + MLS = unbeatable combo for rapid
                    analysis.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16 px-6 md:px-12 mt-32 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href="/" className="text-2xl font-bold">
              GPTPrompts.AI
            </Link>
            <Link href="/website-links" className="hover:opacity-80 transition-opacity">
              View All Pages
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
