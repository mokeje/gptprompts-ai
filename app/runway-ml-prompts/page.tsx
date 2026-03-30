import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Runway ML Prompts 2026: 80+ Copy-Paste Text-to-Video Prompts (Gen-3 & Gen-4)",
  description:
    "Get 80+ copy-paste Runway ML prompts for Gen-3 and Gen-4 video. Covers camera movements, lighting, and cinematic techniques for professional-looking AI video creation.",
  keywords: "Runway ML prompts, text-to-video prompts, Gen-3 prompts, cinematic AI video",
}

export default function RunwayMLPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Breadcrumb Navigation */}
      <nav className="bg-background/40 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/website-links" className="hover:text-foreground transition-colors">
              Prompts Library
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Runway ML Prompts</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            AI Prompts for Runway ML: 80+ Text‑to‑Video & Image Ideas (Gen‑3/Gen‑4 Guide 2026)
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Master Runway ML's Gen-3 and Gen-4 models with 80+ production-ready prompts for cinematic videos, product
            shots, social content, and experimental visuals.
          </p>
        </header>

        {/* Content Sections */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">How Runway ML Prompts Work</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Runway ML's Gen-series models (Gen-2, Gen-3 Alpha, Gen-3 Alpha Turbo, and Gen-4) generate short, cinematic
              videos and high-end images from text, images, or video clips. Runway's own and third-party guides suggest
              splitting your prompt into camera, scene, and subject so the model knows how to frame and move the shot.
            </p>
            <div className="bg-secondary/30 border border-secondary p-6 rounded-lg my-6 font-mono text-sm">
              <p className="text-foreground">
                [Camera / movement]: [Establishing scene]. [Subject + action]. [Lighting + mood + extra details].
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Examples of camera/movement keywords include "static close-up shot", "slow dolly-in", "wide aerial shot",
              "handheld walk-through", "FPV drone shot", and "slow pan across". Runway also encourages descriptive,
              non-conversational prompts of 15–50 words and positive phrasing rather than "don't do X".
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Text‑to‑Video Prompt Formula & Tips</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">For text-to-video, Runway resources suggest:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Start with a simple subject + setting, then add motion, lighting, and mood as you iterate.</li>
              <li>Use verbs to describe movement: walking, running, drifting, zooming, panning, tilting.</li>
              <li>Place camera instructions first, then describe the scene and action.</li>
              <li>
                Use style modifiers like "cinematic", "documentary", "stylized animation", "stop-motion", "90s
                camcorder", "anime", etc.
              </li>
            </ul>
            <div className="bg-secondary/30 border border-secondary p-6 rounded-lg my-6">
              <p className="text-foreground font-semibold mb-2">Baseline template:</p>
              <p className="font-mono text-sm text-muted-foreground">
                "Static wide shot: [location] at [time of day]. [Subject] [action] through the scene. [Lighting and
                mood], [style keywords], smooth motion, highly detailed."
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              30+ Cinematic & Storytelling Prompts (Text‑to‑Video)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These are ideal for short cinematic clips, B-roll, and concept sequences:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Slow dolly-in shot:</strong> a lone figure standing on a cliff above
                a futuristic city at sunset. Neon signs flicker below, clouds glowing orange, cinematic, moody
                atmosphere, high detail.
              </li>
              <li>
                <strong className="text-foreground">Static wide shot:</strong> quiet street in Paris at dawn. A cyclist
                rides past cafés, warm window lights, gentle morning fog, soft pastel color grade, filmic look.
              </li>
              <li>
                <strong className="text-foreground">Handheld medium shot:</strong> a young woman walking through a Tokyo
                alleyway at night, surrounded by neon signs and light rain, reflections on wet pavement, cinematic
                cyberpunk style.
              </li>
              <li>
                <strong className="text-foreground">Wide aerial shot:</strong> waves crashing against dramatic cliffs on
                a stormy coastline, dark clouds overhead, occasional lightning flashes, high-contrast, documentary
                style.
              </li>
              <li>
                <strong className="text-foreground">Slow pan across:</strong> a bustling open-plan startup office,
                people collaborating at desks, screens glowing, warm practical lighting, subtle camera shake, realistic.
              </li>
              <li>
                <strong className="text-foreground">Low-angle static shot:</strong> skyscrapers towering overhead in New
                York, clouds moving fast between buildings, time-lapse feeling, cool blue tone.
              </li>
              <li>
                <strong className="text-foreground">FPV drone shot:</strong> flying through a dense forest in autumn,
                orange and red leaves, sunlight flickering through branches, immersive, slightly shaky.
              </li>
              <li>
                <strong className="text-foreground">Close-up shot:</strong> coffee being poured into a ceramic mug,
                steam rising, shallow depth of field, cozy kitchen background, warm and inviting lighting.
              </li>
              <li>
                <strong className="text-foreground">Tracking shot:</strong> a runner jogging along a riverside path at
                sunrise, golden light, city skyline in the distance, motivational mood.
              </li>
              <li>
                <strong className="text-foreground">Static medium shot:</strong> a person typing on a laptop at a wooden
                desk, light from the screen reflecting on their face, background softly out of focus, late-night work
                vibe.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">20+ Product, Brand & Social Video Prompts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These prompts suit product teasers, ads, and social B-roll:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Static product shot:</strong> a premium smartwatch rotating slowly
                on a reflective black surface, soft studio lighting, subtle reflections, clean background, cinematic
                product style.
              </li>
              <li>
                <strong className="text-foreground">Slow dolly-in:</strong> a pair of running shoes on a gym floor, dust
                motes in the air, spotlight from above, epic sports vibe.
              </li>
              <li>
                <strong className="text-foreground">Static overhead shot:</strong> a flat-lay of a laptop, notebook,
                phone, and coffee cup on a wooden desk, camera slowly drifting slightly, cozy productivity scene.
              </li>
              <li>
                <strong className="text-foreground">Slow pan:</strong> a row of skincare products on a marble shelf,
                sunlight streaming through a bathroom window, soft lens flares, fresh and clean.
              </li>
              <li>
                <strong className="text-foreground">Static medium shot:</strong> a barista pouring latte art in a café,
                focus on the cup, background bokeh, warm golden lighting.
              </li>
              <li>
                <strong className="text-foreground">Tracking shot:</strong> a person unboxing a product on a table,
                tearing packaging, lifting the item, natural home light, vlog style.
              </li>
              <li>
                <strong className="text-foreground">Vertical tracking shot:</strong> a person scrolling on their phone
                in a café, focus on hands and screen, social media feed visible, cozy environment.
              </li>
              <li>
                <strong className="text-foreground">Static wide shot:</strong> yoga class in a studio, people moving
                through poses in sync, sunbeams from windows, calm and peaceful.
              </li>
              <li>
                <strong className="text-foreground">Handheld shot:</strong> behind-the-scenes in a kitchen, chef plating
                dishes, steam rising, energetic documentary style.
              </li>
              <li>
                <strong className="text-foreground">Horizontal pan:</strong> city skyline time-lapse, clouds moving
                fast, day turning to dusk, cinematic tone.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">20+ Stylized & Experimental Video Prompts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These prompts let Runway lean into artistic and experimental looks:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Static wide shot:</strong> a city street gradually transforming from
                realistic to low-poly 3D, colors becoming flat and simplified, surreal art direction.
              </li>
              <li>
                <strong className="text-foreground">Slow dolly-in:</strong> a person standing in a room where gravity is
                flipped, furniture on the ceiling, dreamlike pastel color palette.
              </li>
              <li>
                <strong className="text-foreground">Static shot:</strong> a forest where trees are made of glass, light
                refracting through branches, slow camera push, ethereal mood.
              </li>
              <li>
                <strong className="text-foreground">Top-down shot:</strong> labyrinth made of neon lines, glowing
                pathways, camera slowly drifting above, cyberpunk aesthetic.
              </li>
              <li>
                <strong className="text-foreground">Slow zoom out:</strong> a cup of coffee that reveals an entire
                galaxy swirling inside, stars and nebulae moving, vibrant cosmic colors.
              </li>
              <li>
                <strong className="text-foreground">Static wide shot:</strong> an endless hallway of doors floating in
                space, each door slightly opening as camera moves, mysterious tone.
              </li>
              <li>
                <strong className="text-foreground">Static shot:</strong> an urban street where all cars are replaced by
                floating glowing cubes, night scene, neon reflections.
              </li>
              <li>
                <strong className="text-foreground">Wide shot:</strong> a desert made of folded paper dunes, origami
                cactus, soft shadows, stop-motion inspired look.
              </li>
              <li>
                <strong className="text-foreground">Slow pan:</strong> collage wall of vintage photos and newspaper
                clippings, some elements gently animating, nostalgic atmosphere.
              </li>
              <li>
                <strong className="text-foreground">Static shot:</strong> a person dissolving into a cloud of
                butterflies that fly away, magical realism, warm lighting.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Best Practices for Runway ML Prompts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Across Runway docs and expert guides, a few patterns show up repeatedly:
            </p>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Lead with camera:</strong> Start prompts with camera type and
                movement for video—"low-angle static shot", "slow dolly-in", "wide aerial shot".
              </li>
              <li>
                <strong className="text-foreground">Separate sentences:</strong> Use one sentence for camera shot, one
                for scene, one for subject's action, and one for mood/details to reduce confusion.
              </li>
              <li>
                <strong className="text-foreground">Use action verbs:</strong> Describe movement clearly ("walking",
                "panning across", "waves crashing") rather than just static scenes.
              </li>
              <li>
                <strong className="text-foreground">Keep length moderate:</strong> Prompts of roughly 15–25 words often
                balance detail and clarity best for relevance.
              </li>
              <li>
                <strong className="text-foreground">Iterate with previews:</strong> Generate short previews, then refine
                prompts by adding or removing details, and test style presets before committing credits.
              </li>
            </ul>
          </section>

          <section className="mt-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/website-links"
                className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <p className="font-semibold text-foreground mb-1">Prompts Library</p>
                <p className="text-sm text-muted-foreground">Browse all AI video and image prompting guides</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
