import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Real Estate Lead Generation Prompts: ChatGPT for FSBO & Expired Listings | GPTPrompts.AI",
  description:
    "ChatGPT prompts for real estate lead generation. FSBO campaigns, expired listings, door-knocking scripts, and referral systems. Generate 10-20 qualified leads weekly.",
}

export default function RealEstateLGPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#ef4444] to-[#dc2626] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
            Real Estate <br /> Lead Generation
          </h1>
          <p className="text-xl max-w-3xl opacity-90">
            ChatGPT prompts that fill your pipeline. Generate personalized FSBO emails, expired listing campaigns,
            door-knock scripts, and referral funnels that deliver 10-20 qualified leads weekly.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#ef4444] mb-6">Sections</h3>
              <ul className="space-y-3 text-sm font-medium">
                {[
                  { id: "cold-outreach", label: "Cold Outreach", num: "01" },
                  { id: "social", label: "Social Media", num: "02" },
                  { id: "door-knock", label: "Door Knock Scripts", num: "03" },
                  { id: "referral", label: "Referral Systems", num: "04" },
                  { id: "fsbo", label: "FSBO & Expired", num: "05" },
                  { id: "digital", label: "Digital Funnels", num: "06" },
                  { id: "faq", label: "FAQ", num: "07" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group hover:text-[#ef4444] transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-muted-foreground group-hover:text-[#ef4444]">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-24">
            <section id="cold-outreach" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">01. Cold Outreach & Email Campaigns</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">FSBO Lead Email</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **FSBO email** [NEIGHBORHOOD]: "Just listed 3br/2ba $475K, 2 streets over."
                    <br />
                    Subject: "123 Main St just SOLD—your comps updated"
                    <br />
                    Body: Value delivered → Market update → Soft offer → Contact
                    <br />
                    Personalized, 120 words.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Expired Listing Sequence (Day 1)</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Expired day 1 email** [ADDRESS]: List $525K, 67 DOM.
                    <br />
                    Subject: "Why 123 Oak didn't sell—what's changed"
                    <br />
                    Market shift data → New pricing → CMA offer → Urgency.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Geographic Farming Drip Campaign</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Farm email #3** [ZIP 90210]: "Beverly Hills market update Q1."
                    <br />1 stat → 1 story → 1 insight → 1 CTA.
                    <br />
                    Neighborhood branding.
                  </div>
                </div>
              </div>
            </section>

            <section id="social" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">02. Social Media Lead Gen Prompts</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Facebook Lead Post</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **FB seller lead post**: "Who's thinking of selling in [NEIGHBORHOOD]?"
                    <br />
                    Poll: "Timing?" → Comments → DM funnel.
                    <br />
                    Visual description + urgency stat.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Instagram Stories Swipe-Up</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **IG Story seller lead**: "Free home valuation" sticker.
                    <br />
                    Background: Local market graph.
                    <br />
                    Swipe text + DM response script.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">LinkedIn Relocation Post</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **LinkedIn corporate relocation**: "Vancouver execs moving to Toronto?"
                    <br />
                    Market stats → Lifestyle → Free consult CTA.
                    <br />
                    Company targeting suggestions.
                  </div>
                </div>
              </div>
            </section>

            <section id="door-knock" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">03. Door Knocking & In-Person Scripts</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Circle Prospecting Script</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Door knock script** [JUST SOLD NEIGHBORHOOD]:
                    <br />
                    Rapport → Market update → Value delivered → Sphere of influence ask.
                    <br />3 objection handlers.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Open House Lead Capture</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Open house sign-in script**: "Who's moving to [AREA]?"
                    <br />
                    Qualify: Timeline/budget/motivation.
                    <br />
                    Follow-up email template.
                  </div>
                </div>
              </div>
            </section>

            <section id="referral" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">04. Referral System Prompts</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Past Client Referral Email</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Sphere email** [PAST CLIENT NAME]: "Happy [ANNIVERSARY] in your home!"
                    <br />
                    Referral ask + gift offer + market update.
                    <br />
                    Personalized details included.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Center of Influence Drip</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **COI monthly** [LAWYER/CPA]: "Q2 market mover for your clients."
                    <br />1 insight → 1 referral story → 1 ask.
                    <br />
                    Relationship nurturing.
                  </div>
                </div>
              </div>
            </section>

            <section id="fsbo" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">05. FSBO & Expired Specialization</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">FSBO Facebook Messenger</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **FSBO DM reply**: "Saw your [YARD SIGN]. Quick question..."
                    <br />
                    Curiosity → Pain points → Value prop → Phone number ask.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Expired Listing Phone Script</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Expired cold call**: "Saw your listing expired—what happened?"
                    <br />
                    Empathy → Market update → CMA offer → Next step.
                  </div>
                </div>
              </div>
            </section>

            <section id="digital" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">06. Digital Lead Funnels</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Landing Page Copy</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Seller landing page**: "Free home valuation [CITY]."
                    <br />
                    Headline → 3 stats → Form → Trust signals.
                    <br />
                    Conversion optimized.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Google PPC Ad Copy</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Seller Google ad**: "Sell house fast [CITY] $CASH OFFER."
                    <br />3 variations + keywords.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">YouTube Neighborhood Tour</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **YouTube script**: "[NEIGHBORHOOD] 2026 market tour."
                    <br />
                    Stats → Street shots → Price ranges → CTA.
                    <br />
                    5min runtime.
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">07. FAQ</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-6 bg-slate-50">
                  <h3 className="font-bold mb-2">How many leads can I expect?</h3>
                  <p className="text-muted-foreground">
                    With consistent execution: 10-20 leads/week across all channels. FSBO campaigns generate 10%
                    response rates; expired campaigns 15% callback rates.
                  </p>
                </div>
                <div className="border rounded-lg p-6 bg-slate-50">
                  <h3 className="font-bold mb-2">What's the best lead source?</h3>
                  <p className="text-muted-foreground">
                    FSBO and expired listings convert fastest. Geographic farming provides steady 2-3 sellers/month.
                    Referrals have 30% conversion rates.
                  </p>
                </div>
                <div className="border rounded-lg p-6 bg-slate-50">
                  <h3 className="font-bold mb-2">Should I personalize emails?</h3>
                  <p className="text-muted-foreground">
                    Yes. Personalize top 20% of leads manually; automate 80%. Personal touches increase response rates
                    3-5x on high-value prospects.
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
