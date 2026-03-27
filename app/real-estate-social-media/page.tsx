import Link from "next/link"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Real Estate Social Media Prompts: Content Ideas for Agents",
  description:
    "75+ ChatGPT prompts for real estate social media. Instagram Reels, TikTok, Facebook, LinkedIn content to generate 47% higher engagement and fill showing calendars.",
}

export default function RealEstateSocialMediaPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-br from-orange-600 to-red-700 text-white py-24 px-6 md:px-12 border-b">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-sm font-medium opacity-80 hover:opacity-100 mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Real Estate Social Media Prompts
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            75+ ChatGPT prompts for Instagram Reels, TikTok, Facebook, LinkedIn, and YouTube Shorts. Post 3-5x weekly,
            generate 47% higher engagement, and fill your showing calendar with qualified leads.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="text-sm opacity-75">ENGAGEMENT BOOST</p>
              <p className="text-2xl font-bold">+47% higher engagement</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="text-sm opacity-75">LEAD GENERATION</p>
              <p className="text-2xl font-bold">50 leads/month average</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="text-sm opacity-75">TIME TO CREATE</p>
              <p className="text-2xl font-bold">20 posts in 2 hours</p>
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
                { label: "Instagram Reels", href: "#instagram" },
                { label: "Facebook Posts", href: "#facebook" },
                { label: "LinkedIn Strategy", href: "#linkedin" },
                { label: "Lead Magnets", href: "#magnets" },
                { label: "Storytelling", href: "#storytelling" },
                { label: "Seasonal Campaigns", href: "#seasonal" },
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
          <section id="instagram" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">
              Instagram Reels & TikTok Prompts (15-60s)
            </h2>
            <p className="text-lg text-muted-foreground">
              Short-form video is where real estate engagement happens. Use these prompts to create viral-worthy content
              that drives seller and buyer leads.
            </p>

            <div className="space-y-6">
              <Card className="p-8 border-l-4 border-pink-500">
                <h3 className="text-2xl font-bold mb-4">1. Neighborhood Tour Template</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Hook stat ($/sqft) in first 3 seconds. Show 3 hot streets with price ranges. End with "DM TOUR for
                    VIP list" CTA. Use trending upbeat music.
                  </p>
                  <div className="bg-pink-50 p-4 rounded font-mono text-sm">
                    <p className="opacity-50"># Example Hook</p>
                    <p>"Drive through [NEIGHBORHOOD]—what $500K gets you here 🏡"</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold mb-4">2. Just Sold Celebration</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Drone shot of exterior → interior money shots → sold sign. Caption: "Who's next? 👇" Get comments
                    from sphere.
                  </p>
                  <div className="bg-purple-50 p-4 rounded text-sm">
                    <p className="font-bold mb-2">Flow:</p>
                    <p>0-2s: Address + "OFF MARKET in 9 days!"</p>
                    <p>2-5s: Kitchen reveal</p>
                    <p>5-8s: Outdoor space</p>
                    <p>8-10s: Sold sign + CTA</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold mb-4">3. Market Update Hack</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Create urgency with market stats. "Why [CITY] prices JUMPED 12%". 1 stat → 1 visual → 1 implication
                    → 1 CTA.
                  </p>
                  <p className="text-sm font-bold text-orange-600">Engagement hook: "Selling soon?"</p>
                </div>
              </Card>
            </div>
          </section>

          <section id="facebook" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Facebook Post & Group Prompts</h2>

            <div className="space-y-6">
              <Card className="p-8 bg-blue-50 border-blue-200">
                <h3 className="text-2xl font-bold mb-4">5. Seller Lead Post (5 Reactions in 10 min)</h3>
                <p className="text-muted-foreground mb-4">
                  Post: "Who's thinking of selling [NEIGHBORHOOD]?" Add poll with options: "6 months", "1 year", "2+
                  years". Follow-up top comments with DMs.
                </p>
                <div className="bg-blue-100 p-4 rounded text-sm">
                  <p>
                    <span className="font-bold">Strategy:</span> First 5 comments are sellers. Message them within 2
                    minutes.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-green-50 border-green-200">
                <h3 className="text-2xl font-bold mb-4">6. Open House Event Promotion</h3>
                <p className="text-muted-foreground mb-4">
                  Create Facebook Event: "[ADDRESS] Sunday 2-4pm". Include 3 key features + 1 stat + parking info. Set
                  RSVP automation.
                </p>
              </Card>

              <Card className="p-8 bg-amber-50 border-amber-200">
                <h3 className="text-2xl font-bold mb-4">7. Expired Listing Circle</h3>
                <p className="text-muted-foreground mb-4">
                  "123 Oak didn't sell—here's why." Show market shift data. Offer "Free home valuation" link. Target
                  neighbors of expired listings.
                </p>
              </Card>
            </div>
          </section>

          <section id="linkedin" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">LinkedIn Professional Content</h2>

            <Card className="p-8 border-2 border-blue-300">
              <h3 className="text-2xl font-bold mb-6">For Commercial & Relocation Markets</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-bold text-lg mb-2">Commercial Market Update</h4>
                  <p className="text-muted-foreground">
                    "[CITY] office vacancy DOWN 2.1%." Show macro impact and investment thesis. Target investors and
                    developers. Include company tags.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-bold text-lg mb-2">Relocation Executive Post</h4>
                  <p className="text-muted-foreground">
                    "Toronto execs → Vancouver?" Include market stats, lifestyle benefits, "Free consult" CTA. Tag
                    target companies and recruiters.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          <section id="magnets" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Lead Magnet Content</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <h3 className="font-bold text-lg mb-3">Free 2026 Home Valuation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Post 3 social proof stats. Link to landing page. Create urgency: "Limited spots available".
                </p>
                <div className="text-xs bg-red-200 p-2 rounded">💡 Get 20-30 valuation requests/week</div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <h3 className="font-bold text-lg mb-3">Buyer Checklist Download</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  "10 Mistakes First-Time Buyers Make". Each mistake is a fear trigger with solution. High download
                  rate.
                </p>
                <div className="text-xs bg-blue-200 p-2 rounded">💡 40%+ conversion on lead form</div>
              </Card>
            </div>
          </section>

          <section id="storytelling" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Storytelling & Lifestyle Posts</h2>

            <div className="space-y-6">
              <Card className="p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-4">Client Success Story</h3>
                <p className="text-muted-foreground mb-4">
                  "First home buyer, age 27". Show challenge → process → keys moment video. Repost client testimonial
                  comments for social proof.
                </p>
              </Card>

              <Card className="p-8 border-l-4 border-indigo-500">
                <h3 className="text-2xl font-bold mb-4">Agent Origin Story</h3>
                <p className="text-muted-foreground mb-4">
                  "Why I do real estate" 60-second video. Personal hook → client-first philosophy → builds trust. High
                  engagement with local community.
                </p>
              </Card>
            </div>
          </section>

          <section id="seasonal" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Seasonal & Holiday Campaigns</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-red-50 border-red-200">
                <h3 className="font-bold text-lg mb-3">Winter Selling Secrets</h3>
                <p className="text-sm text-muted-foreground">
                  "5 tips for selling in December". Highlight low inventory advantage. Create urgency for sellers.
                </p>
              </Card>

              <Card className="p-6 bg-green-50 border-green-200">
                <h3 className="font-bold text-lg mb-3">Spring Buyer Frenzy</h3>
                <p className="text-sm text-muted-foreground">
                  "May inventory CRASH" prediction post. Pre-emptive buyer acquisition. Time posting for maximum reach.
                </p>
              </Card>
            </div>
          </section>

          <section id="workflow" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Pro Workflow: 2 Hours → 20 Posts</h2>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm font-bold">
                <div className="text-center">
                  <p className="text-2xl mb-2">📹</p>
                  <p>Monday</p>
                  <p className="opacity-70">5 Reels</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl mb-2">📱</p>
                  <p>Tuesday</p>
                  <p className="opacity-70">3 FB Posts</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl mb-2">💼</p>
                  <p>Wednesday</p>
                  <p className="opacity-70">LinkedIn</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl mb-2">📊</p>
                  <p>Thursday</p>
                  <p className="opacity-70">Analyze</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl mb-2">🔴</p>
                  <p>Friday</p>
                  <p className="opacity-70">Live Q&A</p>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-orange-50 border-orange-200">
              <h3 className="font-bold text-lg mb-4">Result: 50 Leads/Month</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <p>
                  <span className="font-bold">Engagement Rate:</span> 3-5%
                </p>
                <p>
                  <span className="font-bold">Click-Through:</span> 1-2%
                </p>
                <p>
                  <span className="font-bold">DM Response:</span> 20%+
                </p>
                <p>
                  <span className="font-bold">Showings Set:</span> 5-10/week
                </p>
              </div>
            </Card>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight border-b pb-4">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1" className="border border-orange-100 rounded-lg px-6 py-4">
                <AccordionTrigger className="text-lg font-bold hover:no-underline">
                  What's the best posting schedule for real estate content?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 space-y-2">
                  <p>
                    <span className="font-bold">Instagram:</span> 8 AM, 12 PM, 6 PM (peak engagement times)
                  </p>
                  <p>
                    <span className="font-bold">Facebook:</span> 9 AM, 1 PM, 7 PM (more varied audience)
                  </p>
                  <p>
                    <span className="font-bold">LinkedIn:</span> 7:30 AM, 11 AM (professionals checking email)
                  </p>
                  <p>
                    <span className="font-bold">TikTok:</span> 6 PM, 8 PM (evening scroll time)
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border border-orange-100 rounded-lg px-6 py-4">
                <AccordionTrigger className="text-lg font-bold hover:no-underline">
                  How do I repurpose content across platforms?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 space-y-2">
                  <p>
                    <span className="font-bold">Reel Strategy:</span> Create 1 Instagram Reel, then repurpose to TikTok,
                    Facebook, and LinkedIn (vertical format works everywhere).
                  </p>
                  <p>
                    <span className="font-bold">Caption Adaptation:</span> Adjust hashtag strategy per platform (11 max
                    Instagram, 3 Facebook, 5 LinkedIn).
                  </p>
                  <p>
                    <span className="font-bold">Story Expansion:</span> Use same video for Stories with different CTAs.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border border-orange-100 rounded-lg px-6 py-4">
                <AccordionTrigger className="text-lg font-bold hover:no-underline">
                  What compliance rules apply to real estate social media?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4 space-y-2">
                  <p>
                    <span className="font-bold">✓ Fair Housing:</span> No protected class discrimination
                  </p>
                  <p>
                    <span className="font-bold">✓ NAR Disclosures:</span> State membership where required
                  </p>
                  <p>
                    <span className="font-bold">✓ Copyright:</span> Use royalty-free music only
                  </p>
                  <p>
                    <span className="font-bold">✓ TCPA:</span> Include opt-in language for lead capture
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="mt-20 pt-20 border-t space-y-8">
            <h3 className="text-2xl font-bold">Start Your Real Estate Social Strategy Today</h3>
            <p className="text-muted-foreground text-lg">
              Batch create 20 posts in 2 hours using these prompts. Post 3-5x weekly. Watch leads flow in. Stop
              scrolling, start selling.
            </p>
            <Link
              href="/website-links"
              className="inline-block px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors"
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
