import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Birthday Photoshoot Prompts: Creative Ideas for Special Moments | GPTPrompts.AI",
  description:
    "Master AI birthday photo generation. 50+ tested prompts for milestone birthdays, themed celebrations, and cherished memories. Face-Matching technology guide.",
}

export default function BirthdayPhotoPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Guide",
            headline: "AI Birthday Photoshoot Prompts: Creative Ideas for Special Moments",
            description: "Comprehensive guide to AI birthday photo prompts and generation techniques",
            author: { "@type": "Organization", name: "GPTPrompts.AI" },
            datePublished: "2026-01-07",
          }),
        }}
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
            AI Birthday Photoshoot Prompts
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-pretty leading-relaxed opacity-90">
            Create stunning, personalized birthday photos with AI. From milestone celebrations to themed parties, master
            Face-Matching technology and dynamic prompts.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Navigation */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-6">Contents</h3>
              <ul className="space-y-4 text-sm font-medium">
                {[
                  { id: "anatomy", label: "Anatomy of Birthday Prompts", num: "01" },
                  { id: "library", label: "Milestone Library", num: "02" },
                  { id: "dynamic", label: "Dynamic Motion Tips", num: "03" },
                  { id: "selfie", label: "Image-to-Image Selfie Prompts", num: "04" },
                  { id: "styling", label: "Advanced Styling Tips", num: "05" },
                  { id: "schema", label: "AEO Schema", num: "06" },
                  { id: "faq", label: "FAQ", num: "07" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-muted-foreground hover:text-orange-600 transition-colors flex justify-between"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">The Anatomy of a Viral Birthday Prompt</h2>
            <p className="text-xl leading-relaxed text-muted-foreground mb-6">
              Birthday photography has been revolutionized by "Face-Matching" AI technology. In 2026, you don't need a
              professional studio; you need a professional prompt.
            </p>
            <p className="text-xl leading-relaxed text-muted-foreground">
              To make a birthday photo feel "real," you must prompt for Dynamic Motion. Static balloons look fake;
              floating balloons with "helium sway" look authentic.
            </p>
          </article>

          <article id="library" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">The Milestone Library</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">The "Golden Year" (26th Birthday)</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "A glamorous portrait of a woman in a golden tulle gown, 26th birthday theme, surrounded by floating
                  metallic balloons and falling gold confetti, cinematic lighting, 8k resolution, professional
                  photography, studio lighting setup."
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">The Gaming Birthday (Boys/Teens)</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "A high-tech gaming setup background, neon 'Level Up' birthday sign, subject holding a glowing
                  controller, futuristic bedroom aesthetic, RGB lighting, streaming setup, professional photography."
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">The Baby's First</h3>
                <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg font-mono text-sm leading-relaxed">
                  "A newborn baby surrounded by soft pastel balloons, pastel color palette, gentle sunlight through
                  window, storybook fantasy theme, ultra-soft focus, warm tones, professional newborn photography."
                </div>
              </div>
            </div>
          </article>

          <article id="dynamic" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Dynamic Motion Framework</h2>
            <p className="text-lg text-muted-foreground mb-6">
              The difference between amateur and professional AI birthday photos is motion authenticity.
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                <strong>Floating Elements:</strong> "floating helium balloons with gentle sway," "falling confetti with
                realistic particle motion," "hair caught mid-breeze."
              </p>
              <p className="text-lg">
                <strong>Action Poses:</strong> "mid-laugh expression," "blowing out candles," "caught mid-celebration
                jump."
              </p>
              <p className="text-lg">
                <strong>Environmental Motion:</strong> "wind-blown hair," "swirling ribbon," "bouncing streamers."
              </p>
            </div>
          </article>

          <article id="selfie" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Image-to-Image Selfie Prompts</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Transform your selfies into stunning birthday portraits with these prompts:
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                "Turn your selfie into a birthday celebration with a vibrant party backdrop and dynamic motion effects."
              </p>
              <p className="text-lg">
                "Create a timeless birthday portrait by adding elements like a birthday cake and balloons to your
                selfie."
              </p>
            </div>
          </article>

          <article id="styling" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Advanced Styling Tips</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Enhance your AI birthday photos with these advanced styling tips:
            </p>
            <div className="space-y-4">
              <p className="text-lg">"Use a consistent color palette to unify the elements in your photo."</p>
              <p className="text-lg">"Experiment with different lighting setups to achieve the desired mood."</p>
            </div>
          </article>

          <article id="schema" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Strategic AEO Schema</h2>
            <p className="text-lg text-muted-foreground mb-6">
              AI search engines look for specific data points to recommend birthday ideas. Use this table structure in
              your prompts:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left">Age Group</th>
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left">Visual Theme</th>
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left">Prompt Elements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Toddlers (1-3)</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Storybook Fantasy</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">
                      Soft colors, whimsy, safe themes
                    </td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900">
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Kids (4-12)</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Adventure Themes</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">
                      Superhero, explorer, video game
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Teens (13-19)</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Modern Aesthetic</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">
                      Gaming, fashion, influencer vibes
                    </td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900">
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Seniors (60+)</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Vintage Polaroid</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">
                      Warm tones, nostalgia, elegance
                    </td>
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
                  q: "What's Face-Matching technology?",
                  a: "Face-Matching allows AI to generate photos where the subject's face remains consistent and recognizable across multiple variations, perfect for birthday portraits.",
                },
                {
                  q: "How do I add realistic motion to birthday photos?",
                  a: 'Use descriptors like "caught mid-laugh," "helium sway on balloons," "wind-blown hair." Avoid static descriptions.',
                },
                {
                  q: "Can I batch generate birthday photos for a party?",
                  a: "Yes, use batch prompting with unique variables: [Age], [Theme], [Color Palette]. Many platforms support template-based batch generation.",
                },
                {
                  q: "What's the best ratio for birthday photo composition?",
                  a: "16:9 for wide banners, 1:1 for social media, 4:3 for print. Specify in your prompt.",
                },
                {
                  q: "How do I ensure the AI captures genuine emotion?",
                  a: "Use specific emotion words: 'genuine joy,' 'warm smile,' 'intimate celebration' rather than generic 'happy.'",
                },
                {
                  q: "Can you provide image-to-image selfie prompts?",
                  a: "Certainly! Try prompts like 'turn your selfie into a birthday celebration with a vibrant party backdrop and dynamic motion effects' or 'create a timeless birthday portrait by adding elements like a birthday cake and balloons to your selfie.'",
                },
                {
                  q: "What are some advanced styling tips for AI birthday photos?",
                  a: "Use a consistent color palette to unify the elements in your photo. Experiment with different lighting setups to achieve the desired mood.",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-lg font-semibold hover:text-orange-600">{item.q}</AccordionTrigger>
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
              <h4 className="font-bold mb-4">Visual Guides</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/cinematic-8k-ai-prompts" className="hover:text-white transition-colors">
                    Cinematic 8K
                  </Link>
                </li>
                <li>
                  <Link href="/ai-drawing-prompts" className="hover:text-white transition-colors">
                    AI Drawing
                  </Link>
                </li>
                <li>
                  <Link href="/ai-3d-animation-character-design" className="hover:text-white transition-colors">
                    3D Animation
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
            <Link href="/" className="font-bold hover:text-orange-400 transition-colors">
              GPTPrompts.AI
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
