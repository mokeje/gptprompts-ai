import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Property Description ChatGPT Prompts: Sell Homes 3x Faster | GPTPrompts.AI",
  description:
    "ChatGPT prompts for real estate listing descriptions. SEO-optimized MLS listings, Zillow descriptions, and social media teasers. Increase showings 47% with killer property copy.",
}

export default function PropertyDescriptionPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
            Property <br /> Descriptions
          </h1>
          <p className="text-xl max-w-3xl opacity-90">
            ChatGPT prompts that convert 73% more showings. Generate killer property descriptions for MLS, Zillow,
            Realtor.ca, and social media that trigger buyer action and FOMO.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#8b5cf6] mb-6">Sections</h3>
              <ul className="space-y-3 text-sm font-medium">
                {[
                  { id: "universal", label: "Universal Templates", num: "01" },
                  { id: "hooks", label: "Hook & Style", num: "02" },
                  { id: "room", label: "Room-by-Room", num: "03" },
                  { id: "neighborhood", label: "Neighborhood", num: "04" },
                  { id: "seo", label: "SEO & Platforms", num: "05" },
                  { id: "social", label: "Social & Video", num: "06" },
                  { id: "faq", label: "FAQ", num: "07" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group hover:text-[#8b5cf6] transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-muted-foreground group-hover:text-[#8b5cf6]">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-24">
            <section id="universal" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">01. Universal Property Description Templates</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Single-Family Home Master Template</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **MLS description** [ADDRESS]: [BEDS/BA/FT] "[HOOK: Entertainer's dream/pool paradise]".
                    <br />
                    **Location**: Walk to [SCHOOLS/SHOPS/LAKE].
                    <br />
                    **Kitchen**: [GRANITE/SS/WATERFALL ISLAND].
                    <br />
                    **Living**: [OPEN CONCEPT/FIREPLACE].
                    <br />
                    **Master**: [SPA-LIKE/WALK-IN].
                    <br />
                    **Bonus**: [FIN BMNT/ADU/POOL].
                    <br />
                    Price: $[LIST]. Open Sun 2-4.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Condo/Townhome Formula</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Condo** [UNIT #]: [FT/VIEWS]. Resort living downtown.
                    <br />
                    **Kitchen**: [QUARTZ/BACKSPLASH].
                    <br />
                    **Master**: [BALCONY/ENSUITE].
                    <br />
                    **Building**: [POOL/GYM/24HR CONCIERGE].
                    <br />
                    HOA $[MO]. Parking incl.
                  </div>
                </div>
              </div>
            </section>

            <section id="hooks" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">02. Hook & Style Variations</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Luxury Estate Opener</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Luxury** [ADDRESS]: "Private estate on 2 acres."
                    <br />
                    **Interior**: [GRAND ENTRY/MARBLE/CHEF'S KITCHEN].
                    <br />
                    **Exterior**: [POOL/SPA/GUEST HOUSE].
                    <br />
                    Privacy + prestige. Private tours.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Investor Special (Distressed)</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Investor alert** [ADDRESS]: $50K under market.
                    <br />
                    **ARV**: $[CALC]. Repairs $[EST].
                    <br />
                    **Rent**: $[MO] or flip $[PROFIT].
                    <br />
                    Cash only. Quick close.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">First-Time Buyer Welcome</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Starter home** $[PRICE]: Move-in ready!
                    <br />
                    **Kitchen**: Brand new appliances.
                    <br />
                    **Yard**: Fenced play area.
                    <br />
                    **Location**: Top schools/walkable.
                    <br />
                    FHA approved.
                  </div>
                </div>
              </div>
            </section>

            <section id="room" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">03. Room-by-Room Breakdown</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Kitchen Feature Extractor</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Kitchen highlights** from features [GRANITE/DSH/6-BURNER]:
                    <br />3 compelling sentences.
                    <br />
                    Buyer psychology triggers.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Master Suite Luxury</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Master retreat**: [WIC/SPA BA/SITTING AREA].
                    <br />
                    Sensory description (steam shower, soaking tub).
                  </div>
                </div>
              </div>
            </section>

            <section id="neighborhood" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">04. Neighborhood & Lifestyle Prompts</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Location Selling Points</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Why buyers love [NEIGHBORHOOD]**: Schools A+, walkscore 85.
                    <br />3 lifestyle benefits + 1 stat.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Commuter Appeal</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Commute calculator**: [ADDRESS] → [WORKPLACE].
                    <br />
                    Drive/walk/transit times.
                    <br />
                    Proximity to amenities.
                  </div>
                </div>
              </div>
            </section>

            <section id="seo" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">05. SEO & Platform-Specific</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Zillow Premier Agent Optimized</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Zillow description** [400 chars]: Front-load keywords [KW1/KW2].
                    <br />
                    Features → Lifestyle → CTA.
                    <br />
                    Virtual tour link ready.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Realtor.ca Bilingual</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Realtor.ca** [ENGLISH] + French translation.
                    <br />
                    Canadian market keywords.
                  </div>
                </div>
              </div>
            </section>

            <section id="social" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">06. Social Media & Video Descriptions</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Instagram Reel Caption</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **IG reel** [TOUR VIDEO]: 3 emojis → Hook → Key features → DM CTA.
                    <br />
                    #RealEstate #JustListed.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Facebook Marketplace</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **FB Marketplace**: Casual buyer tone.
                    <br />
                    "Perfect for [FAMILY/COUPLE/INVESTOR]".
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">07. FAQ</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-6 bg-slate-50">
                  <h3 className="font-bold mb-2">How much do good descriptions matter?</h3>
                  <p className="text-muted-foreground">
                    Killer descriptions convert 73% more showings. The first 50 words are critical—use emotional
                    triggers and lifestyle benefits.
                  </p>
                </div>
                <div className="border rounded-lg p-6 bg-slate-50">
                  <h3 className="font-bold mb-2">Should I use different descriptions for each platform?</h3>
                  <p className="text-muted-foreground">
                    Yes. Zillow, Realtor.ca, MLS, and Instagram each have different audiences and character limits.
                    Tailor copy to each platform.
                  </p>
                </div>
                <div className="border rounded-lg p-6 bg-slate-50">
                  <h3 className="font-bold mb-2">Can I use the same description for luxury and standard properties?</h3>
                  <p className="text-muted-foreground">
                    No. Luxury buyers respond to exclusivity and heritage; first-time buyers respond to walkability and
                    move-in ready. Always customize.
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
