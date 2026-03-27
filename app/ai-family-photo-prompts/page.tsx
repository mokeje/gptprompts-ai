import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Prompts for Family Photos: Generating Cherished Memories | GPTPrompts.AI",
  description:
    "Master AI family photo generation with 50+ tested prompts. From cozy indoor moments to outdoor adventures, create authentic multi-generational family portraits.",
}

export default function FamilyPhotoPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Guide",
            headline: "AI Prompts for Family Photos: Generating Cherished Memories",
            description: "Comprehensive guide to AI family photo prompts and generation techniques",
            author: { "@type": "Organization", name: "GPTPrompts.AI" },
            datePublished: "2026-01-07",
          }),
        }}
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
            AI Prompts for Family Photos
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-pretty leading-relaxed opacity-90">
            Create authentic, multi-generational family portraits with emotion and motion. From cozy moments to outdoor
            adventures, master AI family photo generation.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Navigation */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-6">Contents</h3>
              <ul className="space-y-4 text-sm font-medium">
                {[
                  { id: "anatomy", label: "Anatomy of Family Prompts", num: "01" },
                  { id: "cozy", label: "Cozy Indoor Moments", num: "02" },
                  { id: "outdoor", label: "Outdoor Adventures", num: "03" },
                  { id: "holiday", label: "Holiday Celebrations", num: "04" },
                  { id: "motion", label: "Dynamic Motion", num: "05" },
                  { id: "table", label: "Scenario Guide", num: "06" },
                  { id: "faq", label: "FAQ", num: "07" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-muted-foreground hover:text-teal-600 transition-colors flex justify-between"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs opacity-50">{item.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        {/* Content */}
        <div className="lg:col-span-9 space-y-24 max-w-4xl">
          <article id="anatomy" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">The Anatomy of Family Photo Prompts</h2>
            <p className="text-xl leading-relaxed text-muted-foreground mb-6">
              Family photos now prioritize natural emotion over stiff posing. Modern AI prompts capture laughter, hugs,
              and candid connection using dynamic motion, realistic lighting, and lived-in environments.
            </p>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Strong family prompts balance multiple people, natural interactions, and believable settings. Include
              group composition, emotional connection, environment, ages and diversity, motion elements, and lighting
              style.
            </p>
          </article>

          <article id="cozy" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Cozy Indoor Family Moments</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Christmas Living Room</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "A happy family of four in a cozy living room at Christmas, mom and dad sitting on couch hugging two
                  young children, warm lamp light, Christmas tree softly glowing in background, everyone smiling
                  naturally, soft focus on faces, 35mm film aesthetic, high-resolution."
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Three-Generation Dinner Table</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "Three-generation family photo around dinner table, grandmother serving food, parents laughing,
                  teenager taking photo, candlelight and warm overhead lamps, steam rising from plates, candid family
                  moment, lifestyle photography style."
                </div>
              </div>
            </div>
          </article>

          <article id="outdoor" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Outdoor Family Adventure Shots</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Family Hiking at Golden Hour</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "Family of five hiking together at golden hour, parents walking hand-in-hand with toddler in backpack
                  carrier, older kids running ahead laughing, mountain path with wildflowers, natural joy, adventure
                  photography aesthetic, cinematic wide shot."
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Beach Family at Sunset</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "Beach family portrait at sunset, mom carrying youngest on hip, dad building sandcastle with middle
                  child, teenager taking selfie, ocean waves softly crashing, golden light on everyone's faces, relaxed
                  vacation vibe, high-resolution."
                </div>
              </div>
            </div>
          </article>

          <article id="holiday" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Holiday & Celebration Family Photos</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Thanksgiving Kitchen Gathering</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "Thanksgiving family gathering in modern kitchen, everyone crowded around island counter, parents
                  carving turkey, kids sneaking pie, autumn light through windows, joyful chaos, food photography style
                  with shallow depth of field."
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Easter Garden Portrait</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "Extended family Easter portrait in garden, three generations posing naturally among spring flowers,
                  kids hunting eggs in background blur, soft pastel morning light, elegant family gathering, editorial
                  magazine aesthetic."
                </div>
              </div>
            </div>
          </article>

          <article id="motion" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Advanced Techniques: Motion & Realism</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Dynamic action makes family photos feel authentic and alive.
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                <strong>Family Motion Boosters:</strong> "kids running toward camera laughing," "parents swinging
                toddler between them," "everyone clapping and cheering together," "mid-jump celebration pose."
              </p>
              <p className="text-lg">
                <strong>Realism Enhancers:</strong> "natural skin texture, visible pores," "subtle baby hairs, realistic
                hair movement," "gentle shadows under chin and nose," "slight lens flare, soft film grain," "real-world
                physics, believable cloth folds."
              </p>
            </div>
          </article>

          <article id="table" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Quick-Reference Scenario Guide</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300 dark:border-slate-600 text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left">Scenario</th>
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left">Key Elements</th>
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left">Lighting Style</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Cozy Home</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Couch, blankets, warm lamps</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Soft indoor tungsten</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900">
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Outdoor Adventure</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Park, beach, forest path</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Golden hour natural</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Holiday Gathering</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Table, food, decorations</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Mixed candle + ambient</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900">
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Formal Portrait</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">
                      Neutral backdrop, coordinated outfits
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Studio softbox</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article id="faq" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Can I use my real family photos as reference?",
                  a: "Yes! Upload selfies and add 'keep our faces and features, change outfits and background to [description].' Most tools preserve facial structure while transforming everything else.",
                },
                {
                  q: "How do I avoid stiff, posed-looking AI family photos?",
                  a: "Use action verbs: 'laughing together,' 'hugging,' 'running toward camera,' 'high-fiving.' Motion creates natural body language.",
                },
                {
                  q: "Best aspect ratio for social media family photos?",
                  a: "Portrait orientation (9:16) for Stories/Reels. Square (1:1) for feeds. Wide (16:9) for website headers.",
                },
                {
                  q: "How specific should I be about ethnicity/skin tone?",
                  a: "Describe naturally: 'warm brown skin,' 'olive complexion,' 'fair with freckles,' or skip entirely for AI to interpret based on other descriptors.",
                },
                {
                  q: "Can I generate family photos for different seasons?",
                  a: "Absolutely. Specify seasonal elements: 'spring flowers,' 'summer beach,' 'autumn leaves,' 'winter snow' in your prompts.",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-lg font-semibold hover:text-teal-600">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6 md:px-12 mt-32">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Photo Guides</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/ai-birthday-photoshoot-prompts" className="hover:text-white transition-colors">
                    Birthday Photos
                  </Link>
                </li>
                <li>
                  <Link href="/ai-couple-photo-prompts" className="hover:text-white transition-colors">
                    Couple Photos
                  </Link>
                </li>
                <li>
                  <Link href="/trending-ai-photo-prompts-2026" className="hover:text-white transition-colors">
                    Trending 2026
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">More Resources</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/ai-boy-prompts" className="hover:text-white transition-colors">
                    Boy Prompts
                  </Link>
                </li>
                <li>
                  <Link href="/cinematic-8k-ai-prompts" className="hover:text-white transition-colors">
                    Cinematic 8K
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Guides</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/prompt-best-practices" className="hover:text-white transition-colors">
                    Best Practices
                  </Link>
                </li>
                <li>
                  <Link href="/website-links" className="hover:text-white transition-colors">
                    All Pages
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 flex justify-between items-center">
            <p className="text-sm text-slate-400">© 2026 GPTPrompts.AI - All Rights Reserved</p>
            <Link href="/" className="font-bold hover:text-teal-400 transition-colors">
              GPTPrompts.AI
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
