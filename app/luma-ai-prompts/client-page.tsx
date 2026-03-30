'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Film, User, ShoppingBag, Sparkles, Megaphone, Leaf } from 'lucide-react';

const accent = '#14B8A6';
const borderCol = '#0f2a28';
const bgDark = '#030908';

const CopyCard = ({ title, prompt, tag }: { title: string; prompt: string; tag: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-lg border p-5 transition-colors" style={{ borderColor: borderCol, background: bgDark }} onMouseEnter={e => (e.currentTarget.style.borderColor = `${accent}60`)} onMouseLeave={e => (e.currentTarget.style.borderColor = borderCol)}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full border" style={{ borderColor: `${accent}40`, color: accent }}>{tag}</span>
          <h3 className="text-white font-semibold mt-1">{title}</h3>
        </div>
        <button onClick={handleCopy} className="shrink-0 text-gray-400 transition-colors hover:text-teal-400">
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="whitespace-pre-wrap font-sans text-sm text-gray-300 leading-relaxed">{prompt}</pre>
    </div>
  );
};

const FAQ = ({ item }: { item: { question: string; answer: string } }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg overflow-hidden border" style={{ borderColor: borderCol }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors" style={{ background: bgDark }}>
        <span className="font-medium text-white pr-4">{item.question}</span>
        {open ? <ChevronUp size={18} className="shrink-0" style={{ color: accent }} /> : <ChevronDown size={18} className="shrink-0 text-gray-400" />}
      </button>
      {open && <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed" style={{ background: bgDark }}>{item.answer}</div>}
    </div>
  );
};

const sections = [
  {
    title: 'Cinematic & Film-Style Videos',
    icon: Film,
    description: 'Create Hollywood-quality cinematic sequences with dramatic lighting, professional camera movements, and immersive atmosphere.',
    prompts: [
      { tag: 'Cinematic', title: 'Epic establishing shot', prompt: `Cinematic establishing shot: a futuristic city skyline at golden hour, camera starts at street level and slowly pulls back and upward to reveal the full cityscape, hovering vehicles visible in the distance with motion blur, neon signs reflecting on rain-slicked streets below, warm amber light contrasting with cool blue shadows in the upper atmosphere, smooth crane-like camera movement, 12 seconds, anamorphic lens flare, film grain, professional color grading, Blade Runner aesthetic` },
      { tag: 'Cinematic', title: 'Dramatic nature establishing shot', prompt: `Sweeping cinematic sequence of an ancient forest at dawn, ethereal mist drifting between towering trees, shafts of golden sunlight breaking through the canopy and creating volumetric god rays, camera moves slowly forward at eye level then tilts upward to reveal the full height of the trees, birds taking flight in the foreground, dew drops on leaves in extreme close-up as camera passes, 10 seconds, no fast cuts, slow motion, documentary film aesthetic with desaturated greens and warm highlights, deep atmospheric perspective` },
      { tag: 'Cinematic', title: 'Action sequence with physics', prompt: `Dynamic action sequence: a luxury sports car navigating a tight mountain road at speed, camera following from the side and rear with slight motion blur on the tires, dust kicking up on gravel curves, dramatic late afternoon lighting with long shadows stretching across the road, the car's body panels catching and reflecting the sun as it rounds each corner, realistic physics — weight transfer visible on suspension, brake light glow on the road surface, 10 seconds, premium automotive commercial cinematography, shallow depth of field` },
      { tag: 'Cinematic', title: 'Intimate character moment', prompt: `A slow cinematic close-up sequence: a person's hands holding a warm cup of coffee near a rain-streaked window, steam curling upward in the soft morning light, the glass beaded with condensation, camera drifts from the hands to the reflection of rain in the glass and then to the blurred cityscape beyond, the whole sequence feels quiet and contemplative, warm interior light against cold grey exterior, 8 seconds, film grain, rack focus from close to infinity and back, emotional and meditative mood` },
    ],
  },
  {
    title: 'Character Animation',
    icon: User,
    description: 'Generate fluid, physically accurate character movements with natural body mechanics, realistic cloth physics, and expressive motion.',
    prompts: [
      { tag: 'Character', title: 'Athletic running sequence', prompt: `A human character running at full sprint across an open urban environment, realistic gait and arm pump, foot strike and push-off with accurate weight transfer, clothing and hair responding to wind and motion, slight camera shake suggesting handheld filming, 8 seconds, athletic build, dynamic angle — camera at low level tracking from the side, motivational high-energy feel, detailed shoe and clothing physics, motion blur on fast-moving limbs, sunrise lighting creating dramatic long shadow ahead of the runner` },
      { tag: 'Character', title: 'Dance performance', prompt: `A contemporary dancer performing a fluid solo routine on an empty studio floor, full body visible, fluid arm extensions and torso isolations, weight shifting from foot to foot with controlled momentum, flowing fabric skirt responding to spins and movements with accurate cloth physics, spotlights from above creating dramatic shadows that follow the dancer, 12 seconds, slow motion at key moments then real-time for the fast sequences, camera orbits slowly around the dancer, professional motion capture quality with human imperfection preserved` },
      { tag: 'Character', title: 'Walk cycle through an environment', prompt: `A character walking through a rain-soaked city street at night, realistic heel-to-toe gait with natural arm swing, water splashing slightly at each footfall, coat moving with the walking rhythm, character pauses at an intersection to look up at blinking neon signs reflecting in puddles, then continues walking, 10 seconds, camera follows from behind at street level then sweeps around to a front-facing angle, atmospheric and slightly melancholic mood, wet surface reflections, steam from a grate in the pavement` },
      { tag: 'Character', title: 'Technical skills demonstration', prompt: `A craftsperson's hands at work: close-up sequence of skilled hands [describe the craft — e.g., throwing clay on a pottery wheel / sketching with a pen / assembling a mechanical watch], accurate fine motor movements with realistic hand and finger physics, materials responding correctly to touch and pressure, soft natural light from a window illuminating the workspace, occasional look down at the work from a slightly overhead angle, 10 seconds, shallow depth of field keeping hands sharp and background soft, satisfying craft and skill demonstration, no face visible — hands are the hero` },
    ],
  },
  {
    title: 'Product Showcase Videos',
    icon: ShoppingBag,
    description: 'Create compelling product demonstrations that highlight craftsmanship, functionality, and quality with physics-accurate material behavior.',
    prompts: [
      { tag: 'Product', title: '360-degree product rotation', prompt: `A premium [product type — e.g., smartwatch, perfume bottle, running shoe] rotating slowly on a clean white or dark studio surface, 360-degree rotation over 8 seconds, studio lighting with soft key light from upper left and subtle rim light highlighting the edges, realistic material reflections — [glass / metal / leather / fabric] surface properties accurate, micro-shadows tracking the rotation, camera slightly elevated at 15-20 degrees above product level, clean and minimal — no background distractions, product photography aesthetic, hero shot framing` },
      { tag: 'Product', title: 'Product in use demonstration', prompt: `Demonstrate [product] being used naturally by a person: [describe the usage scenario — e.g., pouring coffee from a French press / applying skincare serum / using wireless earbuds]

- Show the product interaction clearly and from a flattering angle
- Realistic physics: liquid pours, material flexes, buttons click
- Hands and product in focus; background soft and lifestyle-appropriate
- 10 seconds, 1-2 key interaction moments highlighted with slight slow-motion
- Lighting: [natural window light / warm kitchen / outdoor sunlight]
- Mood: [effortless and aspirational / clinical and precise / warm and domestic]` },
      { tag: 'Product', title: 'Luxury unboxing reveal', prompt: `A luxury product unboxing sequence for [product — e.g., designer watch, premium skincare set, tech device]:

- Hands place a premium box on a marble or dark wood surface
- Ribbon is pulled slowly — fabric physics accurate
- Box opens to reveal product nestled in [tissue paper / custom foam / velvet]
- Camera push-in as the product is revealed
- Product is lifted out and rotated slightly to catch the light
- 10 seconds, measured pacing — no fast cuts
- Lighting: soft, warm, directional — highlights the premium materials
- Sound design suggestion: satisfying paper sounds, then silence as product is revealed` },
      { tag: 'Product', title: 'Ingredient or material story', prompt: `A visual story showing the origin and quality of [ingredient or material — e.g., coffee beans, organic cotton, handcrafted leather]:

Sequence:
1. The raw source: [field / farm / workshop] in golden hour light
2. Close-up of the material's natural texture and color
3. Hands working with or processing the material
4. The finished product featuring this material

12 seconds total, flowing from one scene to the next without hard cuts
Narrative feel: this is where quality comes from
Lighting consistent across all scenes — warm, natural, documentary style
Camera: slow macro shots with gentle push-ins` },
    ],
  },
  {
    title: 'Abstract & Experimental',
    icon: Sparkles,
    description: 'Push creative boundaries with physics-based abstract visuals, generative art, and experimental animations for music videos, art projects, and creative campaigns.',
    prompts: [
      { tag: 'Abstract', title: 'Fluid dynamics simulation', prompt: `Abstract fluid dynamics visualization: ink or paint dispersing in water, colors [describe: deep indigo bleeding into teal / magenta and gold swirling / black and white with dramatic contrast] mixing with accurate fluid physics — turbulent at the injection point, then graceful diffusion, the camera stays close and slowly rotates through the fluid medium as if submerged, 12 seconds, macro lens effect, occasional slow-motion droplet moments, meditative and hypnotic mood, no text, no characters — pure color and motion, suitable as a contemplative ambient visual or music visualizer` },
      { tag: 'Abstract', title: 'Particle system animation', prompt: `Generative particle system animation: thousands of glowing particles in [teal and cyan / gold and amber / violet and magenta] forming and dissolving shapes — starting as scattered chaos, organizing into [a geometric pattern / a recognizable shape / flowing rivers of light], then dissolving back to chaos, continuous loop-friendly, 12 seconds, camera slowly zooms out during the organization phase and then back in during dissolution, particles leave light trails showing their paths, deep dark background, suitable as a screen saver, stage backdrop, or brand ambient video` },
      { tag: 'Abstract', title: 'Geometric morphing shapes', prompt: `Abstract geometric animation: three-dimensional shapes [cubes / dodecahedra / interlocking rings] morphing fluidly into each other, surfaces smooth and slightly reflective, colors shifting through a palette of [deep navy / bright cyan / white] with subtle iridescence, shapes rotating and passing through each other with no collision, camera orbiting slowly, 10 seconds, minimalist and architectural aesthetic, no music needed — designed for silent autoplay, feels precise and intelligent, suitable for tech brand backgrounds or digital art installations` },
      { tag: 'Abstract', title: 'Nature-inspired abstract', prompt: `Abstract video inspired by natural phenomena: a time-lapse-like sequence of [crystal formation growing / frost patterns spreading across a glass surface / bioluminescent waves pulsing on a dark ocean], following the rules of natural physics but slightly dreamlike in pacing, camera moves slowly and intimately — close enough to see fine detail, color palette: [cold blues and whites / warm ambers and oranges / deep bioluminescent teals and greens], 12 seconds, hypnotic and meditative tempo, no artificial elements — pure nature process, beautiful and slightly alien` },
    ],
  },
  {
    title: 'Marketing & Commercial Video',
    icon: Megaphone,
    description: 'Generate professional commercial-quality video content for brands, campaigns, and social media that drives engagement and conversion.',
    prompts: [
      { tag: 'Commercial', title: 'Brand anthem video', prompt: `A brand anthem video for [brand/product in industry]:

Visual narrative: [describe the story arc — e.g., people waking up and starting their day, athletes in training, craftspeople at work]
Brand values to convey: [list 2-3 — e.g., determination, quality, human connection]
Moments: 4-5 vignettes cutting between different people or settings, each 2-3 seconds
Total length: 12-15 seconds
Color grading: [warm and optimistic / cool and precise / gritty and real]
Camera style: [documentary handheld / polished commercial / intimate close-ups]
Ending: final moment holds on [describe a resonant closing image]

Feel: this should make viewers feel proud or inspired, not sold to` },
      { tag: 'Commercial', title: 'Social media product launch clip', prompt: `A 10-second social media product launch video for [product name]:

Opening hook (0-2s): [dramatic reveal / intriguing close-up / kinetic text animation]
Product hero moment (2-7s): product shown at its best — [describe key visual — e.g., the product in use, 360 view, key feature highlighted]
Brand close (7-10s): product name and tagline "visible" — room for text overlay in post-production

Format: 9:16 vertical (TikTok/Reels) or 1:1 square (Instagram feed)
Lighting: [bright studio / lifestyle natural / dramatic product photography]
Color: [brand palette described]
Pacing: fast and energetic at the start, slower and confident at the hero moment` },
      { tag: 'Commercial', title: 'Testimonial-style lifestyle video', prompt: `A lifestyle testimonial video for [product/service]:

Scene: a real-looking moment in someone's life where the product creates value
Subject: [describe the person — role, setting, activity]
Activity: [describe what they are doing and how the product is involved]
Emotion: [content / focused / energised / relieved]

8-10 seconds, single continuous shot or 2-3 cuts maximum
Lighting: natural and realistic — window light, outdoor sun, kitchen warmth
No text on screen, no voiceover — pure visual storytelling
Camera: close to the subject, slight motion, feels intimate and authentic not staged
End with a quiet moment that lets the viewer reflect` },
      { tag: 'Commercial', title: 'Product comparison or feature demo', prompt: `A product feature demonstration video:

Feature to demonstrate: [describe the specific capability or benefit]
Before state (0-4s): show the problem or the less-good alternative
Transition (4-5s): introduce the product
After/solution state (5-10s): show the feature working — clear, satisfying, undeniable

10 seconds total, 1:1 or 16:9 format
Camera: practical, clear angles that make the feature easy to understand
Lighting: clean and product-flattering
No narrative tricks — the demonstration should speak for itself
Pacing: slow enough to follow but not padded — respect the viewer's time` },
    ],
  },
  {
    title: 'Nature & Environment',
    icon: Leaf,
    description: 'Render breathtaking natural environments, weather phenomena, and ecological scenes with accurate physics and cinematic beauty.',
    prompts: [
      { tag: 'Nature', title: 'Ocean and water scenes', prompt: `Cinematic ocean scene: waves rolling into a rocky coastline at sunset, white foam surging over dark basalt rocks with accurate fluid dynamics, spray catching the golden light, camera positioned at water level so waves rise above the lens before crashing, horizon line slightly curved from the wide angle, 10 seconds, the rhythm of two full wave cycles, no people or artificial elements, sound design opportunity: deep rumble of water, dramatic and sublime mood, Patagonia-documentary aesthetic with teal ocean and warm sky` },
      { tag: 'Nature', title: 'Weather and atmospheric phenomena', prompt: `Time-lapse-style cinematic sequence of an approaching thunderstorm over an open plain: clouds building and darkening dramatically, lightning bolt illuminating the cloudscape from within (2-3 flashes), rain curtain sweeping across the landscape from left to right with accurate fluid and particle physics, wind bending tall grass in the foreground, 12 seconds, wide landscape ratio (16:9 or wider), colors: steel grey and purple sky, warm green grass before the storm, then monochrome as rain arrives, awe-inspiring and slightly threatening scale` },
      { tag: 'Nature', title: 'Forest and foliage scene', prompt: `A slow meditative walk through an old-growth forest in autumn: camera moves forward at human walking pace along a path, shafts of golden light penetrating the orange and red canopy, leaves drifting down with realistic physics — tumbling, spinning, floating, a leaf lands on the camera lens and slides off, the floor is thick with fallen leaves that rustle as the camera passes, 12 seconds, no wind except from walking motion, exceptionally quiet and peaceful mood, colours: deep amber, burnt orange, forest green and dappled gold, feels like a painting in motion` },
      { tag: 'Nature', title: 'Desert and arid landscape', prompt: `Cinematic sequence of a vast desert at the magic hour just before sunrise: the dunes cast deep purple shadows that are slowly retreating as the first light crests the horizon, sand surface texture visible in extreme detail with micro-ripples from overnight wind, a lone rock formation in the mid-distance anchoring the composition, camera pans very slowly from right to left at ground level, heat distortion beginning to shimmer at the horizon, 10 seconds, no sound-design music implied — designed for silence and contemplation, vastness and solitude, the colour palette moves from deep indigo to warm rose gold` },
    ],
  },
];

const faqs = [
  { question: 'What is Luma AI and how does it generate videos?', answer: 'Luma AI is an AI video generation platform that creates videos from text descriptions, images, or motion references. It uses neural rendering and physics simulation to generate physically accurate motion — objects fall, liquids flow, and characters move with realistic body mechanics. The result is video content that looks genuinely shot, rather than the morphed or interpolated look of earlier AI video tools. It is particularly strong for product visualization, cinematic sequences, and physics-heavy abstract content.' },
  { question: 'How long can generated videos be?', answer: 'Luma AI supports video generation up to approximately 120 seconds depending on subscription tier. Free users are typically limited to 5-10 second clips. Paid plans unlock longer generations and faster processing. For projects requiring more than the generation limit, professional creators generate multiple clips and assemble them in video editing software like Premiere Pro, Final Cut Pro, or DaVinci Resolve.' },
  { question: 'What makes a good Luma AI prompt?', answer: 'Effective Luma prompts are specific about four things: (1) what is in the scene and where, (2) what motion or action happens and its physics properties, (3) camera movement and angle, and (4) lighting, atmosphere, and aesthetic style. Include duration (e.g., "8 seconds"), camera direction (e.g., "slow pan left", "pull back to reveal"), and physical properties ("realistic cloth physics", "water with accurate fluid dynamics"). Shorter, more specific prompts often outperform long ones.' },
  { question: 'Can Luma AI generate videos with realistic physics?', answer: 'Yes — physics simulation is one of Luma\'s strongest capabilities. It can accurately render gravity, fluid dynamics, cloth and hair movement, collision and impact, material deformation, and particle effects like smoke and sparks. When your prompt describes physical interactions, Luma interprets and simulates them rather than just morphing between frames. This makes it uniquely effective for product demonstrations, nature scenes, and abstract physics-based animations.' },
  { question: 'How do I generate consistent characters across multiple videos?', answer: 'For character consistency, use the same reference image input and identical descriptive parameters in your prompt. Describe the character\'s appearance, clothing, and movement style in the same words each time. Luma\'s image-to-video feature (where you provide a starting frame) produces more character-consistent results than pure text-to-video. For a branded character or mascot, establish your character\'s visual design in a static image first, then use that as the seed for each video.' },
  { question: 'What are the typical generation times for Luma AI videos?', answer: 'Short videos (5-8 seconds) typically process in 3-7 minutes. Longer or more complex generations with detailed physics simulations may take 10-20 minutes. Generation speed depends on server load and your subscription tier — higher-tier plans often include priority processing. Most creators run multiple generations in parallel, reviewing earlier results while newer ones process.' },
  { question: 'What video formats does Luma AI output?', answer: 'Luma outputs MP4 files compatible with all major video editing platforms and social media. Resolution varies by subscription — paid plans generally offer 1080p or higher output. The files are standard, clean MP4s that accept color grading, speed ramping, sound design, and compositing in post-production without quality issues.' },
  { question: 'Can I edit Luma AI videos after generation?', answer: 'Yes. Luma videos are standard MP4 files that work with any editing software — Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, CapCut, or any other tool. Most professional creators use Luma as a strong visual foundation, then enhance with: color grading, sound design, music, speed changes (slow motion), text overlays, composited elements, and cutting between multiple Luma clips. The AI generates the expensive-to-produce visual material; you add the final professional polish.' },
  { question: 'How does Luma AI compare to other AI video tools like Runway and Pika?', answer: 'Luma AI (Dream Machine) is strongest for physics-accurate motion and product/nature cinematics. Runway Gen-3 is strong for human-to-video style transfer and has a broader set of editing tools. Pika is popular for shorter social media clips and has strong text-in-video features. Sora (OpenAI) produces extremely high-quality results but has limited availability. The best approach is to test the same prompt across tools and select the output that best matches your creative intent.' },
  { question: 'What subscription tier should I choose for professional video work?', answer: 'For casual experimentation, the free tier provides enough credits to explore the tool. For regular commercial use — client videos, brand content, or weekly social media production — a paid plan is essential. Evaluate based on: how many videos you need per month, the required length, and whether you need priority processing for deadlines. Many professionals also purchase extra credits for high-volume production months rather than upgrading permanently.' },
];

export default function LumaAIPromptsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Luma AI Prompts: Cinematic Video, Character Animation & Product Showcase',
    description: 'Master physics-based video generation with Luma AI. Prompts covering cinematic sequences, character animations, product showcases, abstract art, commercial video, and nature scenes.',
    author: { '@type': 'Organization', name: 'GPTPrompts.AI' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };

  return (
    <div className="min-h-screen text-white" style={{ background: '#030a09' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 text-sm font-medium" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
            AI Video Generation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Luma AI Prompts</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Generate physics-accurate, cinematic-quality video content with Luma AI. These prompts cover every use case from brand films to product showcases to abstract art — with specific guidance on motion, camera work, and lighting for professional results.</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['Cinematic', 'Character Animation', 'Product Video', 'Abstract', 'Commercial', 'Nature'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs border text-gray-400" style={{ borderColor: borderCol }}>{tag}</span>
            ))}
          </div>
        </div>

        {sections.map((sec, si) => (
          <section key={si} className="mb-14">
            <div className="flex items-center gap-3 mb-2">
              <sec.icon size={22} style={{ color: accent }} />
              <h2 className="text-2xl font-bold text-white">{sec.title}</h2>
            </div>
            <p className="text-gray-400 mb-6 ml-9">{sec.description}</p>
            <div className="space-y-4">
              {sec.prompts.map((p, pi) => <CopyCard key={pi} {...p} />)}
            </div>
          </section>
        ))}

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((item, i) => <FAQ key={i} item={{ question: item.question, answer: item.answer }} />)}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-2">Luma AI vs Other AI Video Generators</h2>
          <p className="text-gray-400 mb-6 text-sm">Each AI video platform has distinct strengths. Match your project type to the right tool before you start generating.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                tool: 'Luma AI (Dream Machine)',
                tag: 'Best for physics',
                best: 'Product demos, nature cinematics, fluid and particle simulations',
                note: 'Best-in-class physics simulation — gravity, cloth, fluids, and material behavior are all accurate. Output feels genuinely filmed rather than AI-generated.',
              },
              {
                tool: 'Runway Gen-3 Alpha',
                tag: 'Best for control',
                best: 'Stylised sequences, video-to-video transfer, complex creative workflows',
                note: 'Extensive editing tools including motion brush, in-painting, and director mode. Strong for creative directors who need precise output control.',
              },
              {
                tool: 'Pika Labs',
                tag: 'Best for speed',
                best: 'Short social media clips, fast iterations, text-in-video',
                note: 'Fastest generation times with strong community templates. Text rendering within video frames is particularly reliable for social content.',
              },
              {
                tool: 'Sora (OpenAI)',
                tag: 'Best for fidelity',
                best: 'Long-form cinematic sequences, complex scene continuity',
                note: 'Highest visual quality among publicly tested models. Limited availability. Best suited for flagship creative projects with adequate lead time.',
              },
              {
                tool: 'Kling AI',
                tag: 'Best for characters',
                best: 'Character-driven narratives, face and identity consistency across clips',
                note: 'Strong at maintaining character appearance across multiple clips. Good for story-driven branded content and serialized video production.',
              },
              {
                tool: 'Stable Video Diffusion',
                tag: 'Best for customisation',
                best: 'Developers, self-hosted deployment, domain-specific fine-tuning',
                note: 'Open-weights model deployable on your own infrastructure. Best for teams needing privacy, volume pricing, or domain-specific fine-tuning.',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border p-4" style={{ borderColor: borderCol, background: bgDark }}>
                <div className="flex items-start justify-between mb-2">
                  <div className="font-semibold text-white text-sm">{item.tool}</div>
                  <span className="text-xs px-2 py-0.5 rounded-full border shrink-0 ml-2" style={{ borderColor: `${accent}40`, color: accent }}>{item.tag}</span>
                </div>
                <div className="text-xs text-gray-400 mb-2"><span className="text-gray-300">Best for:</span> {item.best}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{item.note}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-2">Camera Movement Reference</h2>
          <p className="text-gray-400 mb-6 text-sm">These camera terms are reliably interpreted by Luma AI. Include them in your prompts to control how the scene moves and unfolds over time.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { move: 'Slow pan left / right', desc: 'Camera rotates horizontally on its axis to reveal a wider scene or follow a moving subject', tip: 'Add "gradually" or "very slowly" for deliberate, cinematic pacing' },
              { move: 'Pull back to reveal', desc: 'Camera retreats from the subject — classic technique for revealing surrounding context', tip: 'Describe what is revealed: "pull back to reveal the full cityscape"' },
              { move: 'Push in slowly', desc: 'Camera advances toward the subject — builds intimacy, focus, or tension', tip: 'Use "slowly" for contemplative mood; omit the qualifier for dynamic energy' },
              { move: 'Tilt up from ground', desc: 'Camera rotates vertically upward — scale reveal for buildings, trees, and figures', tip: 'Start position matters: "starting at ground level, tilt up to reveal"' },
              { move: 'Orbit around subject', desc: 'Camera arcs in a circle around a central subject — works for products, characters, objects', tip: 'Specify direction and speed: "slow clockwise orbit over 8 seconds"' },
              { move: 'Crane up / pedestal rise', desc: 'Camera moves vertically upward — adds grandeur and a dramatic perspective shift', tip: 'Pair with "starting at street level" to establish the beginning position' },
              { move: 'Handheld / natural movement', desc: 'Slight organic camera motion — feels authentic, human, and documentary in quality', tip: 'Use for lifestyle, testimonial, and real-world narrative content' },
              { move: 'Static / locked off camera', desc: 'Camera is completely still — subjects and environment provide all the motion', tip: 'Ideal for weather events, product turntables, and time-lapse style effects' },
              { move: 'Rack focus', desc: 'Focal plane shifts during the shot — one element blurs as another comes into sharp focus', tip: 'Describe both subjects: "rack focus from the flower to the mountain beyond"' },
              { move: 'Low angle looking up', desc: 'Camera positioned below subject level looking upward — conveys power, scale, and dominance', tip: 'Classic for architecture, character introduction, and product heroics' },
              { move: 'Aerial / bird\'s eye view', desc: 'Camera positioned above looking directly down — reveals geography, scale, and spatial pattern', tip: 'Best for landscapes, urban scenes, crowds, and abstract geometry sequences' },
              { move: 'Extreme close-up (macro)', desc: 'Camera very close to fine surface detail — reveals texture, droplets, material grain', tip: 'Specify the subject clearly: "extreme close-up of dew drops on a leaf"' },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border p-3" style={{ borderColor: borderCol, background: bgDark }}>
                <div className="font-mono text-sm mb-1" style={{ color: accent }}>{item.move}</div>
                <div className="text-xs text-gray-300 mb-1">{item.desc}</div>
                <div className="text-xs text-gray-500"><span className="font-medium">Tip:</span> {item.tip}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Lighting Conditions That Work Well in Luma</h2>
          <p className="text-gray-400 mb-6 text-sm">Specifying lighting conditions in your prompt significantly improves mood consistency. These descriptions produce reliable results.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { name: 'Golden Hour', desc: 'Warm amber light just after sunrise or before sunset. Long shadows, rich saturation, cinematic look with minimal effort.' },
              { name: 'Blue Hour', desc: 'Cool, even light just before sunrise or after sunset. Minimal shadows, soft gradients — excellent for urban and architectural scenes.' },
              { name: 'Overcast / Diffused', desc: 'Flat, even natural light from cloud cover. Reduces harsh contrast, reveals material texture and color with accuracy.' },
              { name: 'Hard Key Light', desc: '"Single key light from upper left, hard shadows." One strong directional source creates dramatic contrast and defined form.' },
              { name: 'Soft Studio Lighting', desc: '"Soft studio lighting, even fill, no harsh shadows." Clean and commercial — flattering for products and portraits.' },
              { name: 'Rim / Backlit', desc: 'Light source behind subject creates a glowing outline edge. Separates subject from background dramatically and elegantly.' },
              { name: 'Neon / Urban Practical', desc: 'Coloured neon signs, streetlights, and wet reflective surfaces. Strong for cyberpunk, noir, and nightlife aesthetics.' },
              { name: 'Volumetric / God Rays', desc: '"Shafts of light breaking through [trees/clouds/fog]." Requires atmospheric haze or particles to be visible in frame.' },
              { name: 'Candlelight / Fire Glow', desc: 'Warm, flickering low light. Intimate and dramatic. Specify: "warm amber flickering light, dancing shadows on surrounding surfaces".' },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border p-3" style={{ borderColor: borderCol, background: bgDark }}>
                <div className="font-semibold text-sm text-white mb-1">{item.name}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Professional Workflow Tips</h2>
          <p className="text-gray-400 mb-6 text-sm">How experienced creators use Luma AI efficiently in production pipelines.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                tip: 'Generate in parallel, not in sequence',
                detail: 'Queue 4-6 variations of the same prompt simultaneously while the first batch is processing. Review and select from the results rather than waiting iteratively — this cuts production time by 60-70%.',
              },
              {
                tip: 'Use a reference image as your seed',
                detail: 'Upload a still image (from a camera, Midjourney, or Ideogram) as the first frame, then describe the motion. This dramatically improves character consistency and scene composition accuracy.',
              },
              {
                tip: 'Treat Luma as a VFX layer, not the final cut',
                detail: 'The best professional outputs combine Luma for the base visual with DaVinci Resolve or Premiere for color grading, speed ramping, sound design, and compositing. AI generates the expensive-to-film element; you add the polish.',
              },
              {
                tip: 'Describe the end state, not just the action',
                detail: 'Instead of "water flows", write "water flows into a still pool and settles into a mirror-like surface". Describing where the motion ends helps Luma decide the pacing and arc of the sequence.',
              },
              {
                tip: 'Break long sequences into 8-10 second clips',
                detail: 'Shorter clips give you more creative control and higher success rates per generation. Edit them together in post-production using match-cuts, colour grading, or audio to create seamless longer sequences.',
              },
              {
                tip: 'Keep a prompt library of your winners',
                detail: 'When a prompt generates excellent output, save the exact wording in a document with the output link. Luma prompts that worked well can be adapted with small changes for new projects, dramatically reducing trial-and-error time.',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border p-4" style={{ borderColor: borderCol, background: bgDark }}>
                <div className="font-semibold text-sm text-white mb-2">{item.tip}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 p-6 rounded-lg border" style={{ borderColor: borderCol, background: bgDark }}>
          <h3 className="text-lg font-semibold text-white mb-3">Luma AI Prompt Structure</h3>
          <p className="text-gray-400 text-sm mb-4">This template covers the key elements that improve Luma video quality consistently.</p>
          <div className="font-mono text-sm p-4 rounded border space-y-2" style={{ borderColor: borderCol, background: '#03120f' }}>
            <div><span style={{ color: accent }}>[Scene content]</span><span className="text-gray-400"> — what is in the frame, where, and doing what</span></div>
            <div><span style={{ color: accent }}>[Motion/action]</span><span className="text-gray-400"> — describe movement with physical properties (speed, weight, fluid)</span></div>
            <div><span style={{ color: accent }}>[Camera]</span><span className="text-gray-400"> — movement type (pan/pull/orbit/static), angle, focal length feel</span></div>
            <div><span style={{ color: accent }}>[Lighting]</span><span className="text-gray-400"> — time of day, light source, shadows, atmosphere</span></div>
            <div><span style={{ color: accent }}>[Duration]</span><span className="text-gray-400"> — "8 seconds", "12 seconds" — helps pacing</span></div>
            <div><span style={{ color: accent }}>[Style/mood]</span><span className="text-gray-400"> — cinematic reference, color grade, emotional tone</span></div>
          </div>
          <p className="text-gray-500 text-xs mt-3">Physics keywords that improve Luma output: "realistic cloth physics", "accurate fluid dynamics", "natural weight transfer", "motion blur", "volumetric lighting", "depth of field".</p>
        </section>

        <section className="mb-12 p-6 rounded-lg border" style={{ borderColor: borderCol, background: bgDark }}>
          <h3 className="text-lg font-semibold text-white mb-3">Physics Simulation Keyword Reference</h3>
          <p className="text-gray-400 text-sm mb-4">Including these terms in your Luma prompts triggers the physics engine to model those specific behaviors accurately rather than interpolating motion generically.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              'Realistic cloth physics',
              'Accurate fluid dynamics',
              'Natural weight transfer',
              'Gravity and momentum',
              'Volumetric lighting',
              'Depth of field',
              'Motion blur',
              'Particle dispersion',
              'Smoke simulation',
              'Hair and fur dynamics',
              'Surface tension',
              'Rigid body collision',
              'Soft body deformation',
              'Atmospheric scattering',
              'Wet surface reflections',
              'Wind-driven foliage',
              'Caustics (light through water)',
              'Sub-surface scattering (skin/wax)',
            ].map((kw, i) => (
              <div key={i} className="px-3 py-2 rounded border text-xs font-mono" style={{ borderColor: borderCol, color: accent }}>
                {kw}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t pt-8" style={{ borderColor: borderCol }}>
          <h3 className="text-lg font-semibold text-white mb-4">Related Prompts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'Pika AI Prompts', href: '/pika-ai-prompts' },
              { name: 'Ideogram AI Prompts', href: '/ideogram-ai-prompts' },
              { name: 'Midjourney Prompts', href: '/midjourney-prompts' },
              { name: 'DALL-E 3 Prompts', href: '/dalle-3-prompts' },
              { name: 'AI Prompts for Marketers', href: '/ai-prompts-for-marketers' },
              { name: 'Bing AI Image Generator Prompts', href: '/bing-ai-image-generator-prompts' },
              { name: 'AI Story Generator Prompts', href: '/ai-story-generator-prompts' },
              { name: 'ChatGPT Prompts PowerPoint', href: '/chatgpt-prompts-powerpoint' },
            ].map((link, i) => (
              <a key={i} href={link.href} className="px-4 py-3 rounded border text-gray-300 transition-colors text-sm font-medium" style={{ borderColor: borderCol }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = accent; (e.currentTarget as HTMLAnchorElement).style.color = accent; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = borderCol; (e.currentTarget as HTMLAnchorElement).style.color = '#d1d5db'; }}>{link.name}</a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
