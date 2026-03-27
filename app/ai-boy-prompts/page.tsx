import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Prompts for Boys: Fun, Creative, and Heroic Image Ideas | GPTPrompts.AI",
  description:
    "Master AI boy portrait prompts with age-specific techniques. From toddlers to young men, create authentic masculine portraits with attitude and personality.",
}

export default function BoyPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Guide",
            headline: "AI Prompts for Boys: Fun, Creative, and Heroic Image Ideas",
            description: "Comprehensive guide to AI boy portrait prompts across age groups",
            author: { "@type": "Organization", name: "GPTPrompts.AI" },
            datePublished: "2026-01-07",
          }),
        }}
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-8">AI Prompts for Boys</h1>
          <p className="text-xl md:text-2xl max-w-3xl text-pretty leading-relaxed opacity-90">
            Create authentic boy portraits across all ages. From playful toddlers to confident young men, master AI
            prompts that capture personality, attitude, and adventure.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Navigation */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">Contents</h3>
              <ul className="space-y-4 text-sm font-medium">
                {[
                  { id: "core", label: "Core Elements", num: "01" },
                  { id: "toddlers", label: "Little Boys (2-8)", num: "02" },
                  { id: "preteen", label: "Pre-Teens (9-12)", num: "03" },
                  { id: "teens", label: "Teens (13-17)", num: "04" },
                  { id: "young-men", label: "Young Men (18-25)", num: "05" },
                  { id: "motion", label: "Motion & Realism", num: "06" },
                  { id: "table", label: "Age Guide Table", num: "07" },
                  { id: "faq", label: "FAQ", num: "08" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-muted-foreground hover:text-blue-600 transition-colors flex justify-between"
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
          <article id="core" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Core Elements of Boy Portrait Prompts</h2>
            <p className="text-xl leading-relaxed text-muted-foreground mb-6">
              Boy portrait prompts exploded because they capture personality through styling, attitude, and environment.
              2026 trends favor authentic masculinity over posed perfection.
            </p>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Include subject descriptors, attitude, outfits, props/environments, and photo style. Skip "perfect model"
              descriptors. Use real-world details: grass stains, sweat, messy hair, dirt smudges, worn sneakers.
              Attitude beats appearance.
            </p>
          </article>

          <article id="toddlers" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Little Boys (Toddlers to Age 8)</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Forest Explorer</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "Adorable 4-year-old boy sitting on tree stump in forest, wearing cozy knit sweater and rain boots,
                  holding stick like sword, mischievous grin, dappled sunlight through leaves, storybook illustration
                  style, warm earthy tones."
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Soccer Player Action</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "Energetic 6-year-old soccer player mid-kick on grassy field at golden hour, sweaty determined face,
                  grass stains on knees, action shot with motion blur on leg, sports photography aesthetic,
                  high-contrast."
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Beach Explorer</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "Curious 3-year-old exploring tide pools at beach, rolled up pants, oversized bucket hat, pointing at
                  crab with wonder, salty ocean air vibe, candid beach kid photography, natural light."
                </div>
              </div>
            </div>
          </article>

          <article id="preteen" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Pre-Teens & Teens (9-17)</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Skateboarder at Dusk</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "14-year-old skateboarder leaning against graffiti wall at dusk, wearing oversized hoodie and beanie,
                  skateboard under arm, quiet confidence, neon streetlights reflecting on concrete, urban portrait
                  style."
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Gamer Portrait</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "16-year-old gamer in bedroom setup at night, RGB lights glowing, holding controller with focused
                  intensity, posters and collectibles in background, cyberpunk gaming aesthetic, high-tech portrait."
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Artist in Studio</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "12-year-old artist in messy studio, paint on hands and cheek, holding brush dramatically, canvas and
                  supplies scattered, creative energy, bohemian artist boy portrait, warm workshop lighting."
                </div>
              </div>
            </div>
          </article>

          <article id="young-men" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Young Men (18-25)</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Musician Portrait</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "22-year-old musician on rooftop at city sunset, acoustic guitar across chest, thoughtful gaze into
                  distance, leather jacket and rolled sleeves, cinematic musician portrait, golden hour rim lighting."
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Barista Portrait</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "19-year-old barista behind coffee counter early morning, apron tied properly, steaming espresso
                  machine, focused craftsmanship, warm cafe lighting, lifestyle profession portrait, rich brown tones."
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Entrepreneur Portrait</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "25-year-old entrepreneur in modern office, suit jacket over t-shirt, city skyline through huge
                  windows, confident lean against desk, executive portrait style, cool blue corporate lighting."
                </div>
              </div>
            </div>
          </article>

          <article id="motion" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Advanced Techniques: Motion & Realism</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Dynamic Action for Boys</h3>
                <div className="space-y-2">
                  <p className="text-lg text-muted-foreground">
                    <strong>Action Boosters:</strong> "mid-trick ollie on skateboard," "dribbling basketball with
                    intensity," "wiping brow after workout," "tossing baseball glove in air."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Realism Enhancers</h3>
                <div className="space-y-2">
                  <p className="text-lg text-muted-foreground">Add these to any prompt for photorealistic results:</p>
                  <ul className="text-lg text-muted-foreground space-y-1 ml-4">
                    <li>• "natural skin texture, visible pores"</li>
                    <li>• "subtle baby hairs, realistic hair movement"</li>
                    <li>• "gentle shadows under chin and nose"</li>
                    <li>• "slight lens flare, soft film grain"</li>
                    <li>• "real-world physics, believable cloth folds"</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article id="table" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Boy Portrait Age Guide Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300 dark:border-slate-600 text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left">Age Group</th>
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left">Style Keywords</th>
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left">Environment Ideas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Toddlers (2-6)</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Playful, curious, cozy</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Park, home, nature</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900">
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Pre-teen (7-12)</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Energetic, mischievous</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Sports field, urban</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Teen (13-17)</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Edgy, confident</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Skatepark, city, gaming</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900">
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Young Adult</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Professional, thoughtful</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Office, rooftop, studio</td>
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
                  q: "What makes boy portraits look authentically masculine?",
                  a: "Skip 'perfect model' descriptors. Use real-world details: grass stains, sweat, messy hair, dirt smudges, worn sneakers. Attitude outperforms appearance.",
                },
                {
                  q: "How do I create age-appropriate boy portraits?",
                  a: "Use age-specific descriptors and environments. Toddlers thrive in playful settings; teens need attitude; young men need professional context.",
                },
                {
                  q: "Can I add sports and hobbies to boy prompts?",
                  a: "Absolutely. Mention specific activities: 'skateboarding,' 'gaming,' 'soccer,' 'music' to create contextual, authentic portraits.",
                },
                {
                  q: "Best way to capture confidence in boy portraits?",
                  a: "Use attitude descriptors: 'quiet confidence,' 'focused intensity,' 'mischievous grin,' 'determined expression' instead of just 'happy.'",
                },
                {
                  q: "How do I avoid cliched or stereotypical boy prompts?",
                  a: "Focus on individual personality and real-world scenarios rather than generic boy aesthetics. Add hobbies, interests, and unique environmental details.",
                },
                {
                  q: "Can I use reference photos with face-matching?",
                  a: "Yes, upload a selfie and specify 'keep my face, change outfit/environment to [description]' for consistent facial features across variations.",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-lg font-semibold hover:text-blue-600">{item.q}</AccordionTrigger>
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
                  <Link href="/ai-family-photo-prompts" className="hover:text-white transition-colors">
                    Family Photos
                  </Link>
                </li>
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
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Visual Guides</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/cinematic-8k-ai-prompts" className="hover:text-white transition-colors">
                    Cinematic 8K
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
              <h4 className="font-bold mb-4">Resources</h4>
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
            <Link href="/" className="font-bold hover:text-blue-400 transition-colors">
              GPTPrompts.AI
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
