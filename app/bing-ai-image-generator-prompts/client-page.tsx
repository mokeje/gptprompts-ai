'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Image, Palette, Camera, Layers, Sparkles, Globe } from 'lucide-react';

const accent = '#0078D4';
const borderCol = '#00111f';
const bgDark = '#020408';

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
        <button onClick={handleCopy} className="shrink-0 text-gray-400 transition-colors">
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
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left" style={{ background: bgDark }}>
        <span className="font-medium text-white pr-4">{item.question}</span>
        {open ? <ChevronUp size={18} style={{ color: accent }} /> : <ChevronDown size={18} className="text-gray-400" />}
      </button>
      {open && <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed" style={{ background: bgDark }}>{item.answer}</div>}
    </div>
  );
};

const sections = [
  {
    title: 'Photorealistic & Portrait Images',
    icon: Camera,
    description: 'Generate hyper-realistic portrait photography, editorial shots, and professional-quality human subjects using Bing Image Creator powered by DALL-E 3.',
    prompts: [
      {
        tag: 'Portrait',
        title: 'Professional Portrait Photography',
        prompt: `Photorealistic portrait photograph of a professional in their 40s:
Natural, confident expression — slight smile, direct eye contact with camera
Wardrobe: tailored navy blazer, white shirt, no tie — approachable executive look
Lighting: Rembrandt lighting setup, warm key light from left, subtle fill from right
Background: shallow depth of field — blurred modern office environment, warm tones
Camera: 85mm portrait lens, f/1.8 aperture, shallow depth of field
Skin: natural texture, realistic pores — no over-smoothing or plastic appearance
Colour grade: warm and slightly desaturated — editorial magazine quality
Style: LinkedIn professional headshot, editorial, high-end corporate photography`,
      },
      {
        tag: 'Editorial',
        title: 'Fashion Editorial Portrait',
        prompt: `High-fashion editorial portrait photograph:
Subject: a woman in her late 20s, striking bone structure, direct gaze
Outfit: structural avant-garde jacket in deep burgundy, architectural silhouette
Setting: abandoned industrial warehouse — concrete walls, dramatic natural light from tall windows
Lighting: harsh directional natural light creating strong shadows and highlights
Mood: powerful, defiant, artistic — not commercial
Camera: medium format aesthetic, 80mm, f/2.8
Colour grade: high contrast, slightly desaturated with pushed shadows
Style: Vogue Italia editorial, Helmut Newton influence, black and white optional`,
      },
      {
        tag: 'Lifestyle',
        title: 'Authentic Lifestyle Portrait',
        prompt: `Authentic lifestyle photography portrait, candid feel:
Subject: a person in their 30s in a warm, sunlit kitchen
Activity: holding a coffee mug, looking out a large window — caught in a moment of quiet reflection
Lighting: golden hour morning light streaming through the window — warm, natural, soft
Style: not posed — documentary feel, authentic moment
Wardrobe: casual, comfortable — weekend morning aesthetic
Camera: 35mm lens, slight grain, film photography aesthetic
Colour grade: warm tones, lifted shadows, slightly faded highlights
Style: Kinfolk magazine, everyday beautiful, accessible authenticity`,
      },
    ],
  },
  {
    title: 'Artistic Styles & Painting',
    icon: Palette,
    description: 'Generate images in the styles of famous art movements, master painters, and distinctive artistic traditions.',
    prompts: [
      {
        tag: 'Oil Painting',
        title: 'Classical Oil Painting Style',
        prompt: `Oil painting in the style of the Dutch Golden Age masters:
Subject: a woman reading a letter by a window, soft daylight falling across her face
Setting: 17th century interior — wooden furniture, oriental rug, earthenware jug
Lighting: single window light source creating chiaroscuro — Vermeer-style illumination
Palette: warm ochres, deep umbers, soft blues, cream whites
Brushwork: smooth and precise in highlights, loose and gestural in shadows
Texture: visible canvas texture, impasto in light areas
Detail: meticulous fabric rendering, realistic skin tones
Style: Jan Vermeer, Pieter de Hooch — domestic interior, intimate and contemplative`,
      },
      {
        tag: 'Impressionism',
        title: 'Impressionist Landscape',
        prompt: `Oil painting in the style of French Impressionism:
Scene: a summer afternoon in a Parisian garden — dappled light through trees, flower beds in bloom
Figures: two women in period dress (1880s) seated on a bench, loosely rendered
Lighting: bright afternoon sun creating vibrant colour and broken shadow patterns
Brushwork: visible, energetic — short broken strokes capturing light not outline
Palette: brilliant violets, yellows, greens, blues — Monet colour sensibility
Composition: garden recedes into background, tree canopy frames top
Style: Claude Monet, Renoir garden scenes — capturing the feeling of light and warmth`,
      },
      {
        tag: 'Watercolour',
        title: 'Botanical Watercolour Illustration',
        prompt: `Detailed botanical watercolour illustration in the tradition of Victorian natural history:
Subject: a single rose in full bloom — Rosa centifolia, deep crimson petals
Detail: botanically accurate — individual petals, sepals, thorns, leaf structure
Technique: traditional watercolour — wet-on-wet backgrounds, wet-on-dry detail work
Palette: rich crimsons and pinks for petals, various greens for foliage, white paper showing through highlights
Background: clean white — specimen illustration style
Labelling: faint pencil botanical notes (optional)
Style: Maria Sibylla Merian, RHS botanical illustration tradition
Quality: museum-quality scientific illustration with artistic sensibility`,
      },
    ],
  },
  {
    title: 'Product & Commercial Visualization',
    icon: Image,
    description: 'Create professional product imagery, commercial visualisations, and marketing-ready assets with photorealistic quality.',
    prompts: [
      {
        tag: 'Product',
        title: 'Luxury Product Still Life',
        prompt: `Photorealistic luxury product photography — perfume bottle:
Product: elegant perfume bottle — tall, faceted crystal glass with gold cap
Surface: placed on polished black marble with soft reflection visible beneath
Background: deep black with subtle gradient — studio professional
Lighting: dramatic three-point studio lighting — edge lighting creates sparkle on facets
Accent lights: two subtle coloured rim lights (soft amber and ice blue)
Depth of field: sharp focus on bottle, background falls to smooth black
Colour: warm amber liquid visible through crystal glass
Quality: luxury brand campaign photography — Chanel, Dior, Tom Ford level production value
No text overlays`,
      },
      {
        tag: 'Tech',
        title: 'Tech Product Showcase',
        prompt: `Professional tech product photography — smartphone:
Device: premium smartphone, edge-to-edge display, thin bezels
Placement: floating at a 45-degree angle against a clean background
Background: gradient from near-white to soft light grey
Lighting: studio soft box lighting — even, clean, no harsh shadows
Screen: showing a beautiful app UI or wallpaper (not blank)
Reflection: soft product reflection below the device on glossy white surface
Additional element: one earbud placed elegantly beside the device
Quality: Apple product photography aesthetic — clean, aspirational, precise
Perspective: hero shot angle`,
      },
      {
        tag: 'Food',
        title: 'Food Photography Hero Shot',
        prompt: `Professional food photography for restaurant menu or advertising:
Subject: a gourmet burger — brioche bun, thick patty, melted cheese, fresh toppings
Presentation: perfectly stacked, cross-section visible showing layers
Surface: dark rustic wooden board, small side of fries in a copper cup
Lighting: warm overhead studio light — dramatic shadows, highlights on bun
Steam: subtle steam rising from patty suggesting freshness and heat
Colour: vibrant reds, golds, greens — food colouring perfectly saturated
Depth of field: hero dish sharp, background soft blur
Style: high-end food editorial, Bon Appétit magazine quality`,
      },
    ],
  },
  {
    title: 'Landscape & Environment',
    icon: Globe,
    description: 'Generate stunning landscape photography, environmental vistas, and atmospheric nature scenes with cinematic quality.',
    prompts: [
      {
        tag: 'Nature',
        title: 'Epic Mountain Landscape',
        prompt: `Cinematic landscape photograph of a dramatic mountain scene:
Setting: Dolomites, Italy — jagged limestone peaks, late afternoon light
Time: golden hour — sun low, casting long warm shadows across rock faces
Foreground: wildflower meadow in full bloom — yellow and purple alpine flowers
Midground: dark pine forest creating depth and framing
Background: three dramatic peaks glowing amber and pink in the sunset light
Sky: deep blue above, warm orange and pink near horizon, few wispy clouds
Atmosphere: crystal clear mountain air, slight atmospheric haze in distance
Camera: wide angle 24mm, extreme dynamic range, tripod shot
Style: National Geographic, landscape photography competition quality`,
      },
      {
        tag: 'Urban',
        title: 'Atmospheric City Nightscape',
        prompt: `Cinematic city nightscape photography:
Setting: Tokyo, Shinjuku district — looking down a busy intersection at night
Perspective: elevated viewpoint from above street level, wide angle
Lighting: neon signs in Japanese — pinks, blues, greens and reds reflecting on wet pavement
Weather: light rain — pavement wet and reflective, slight mist in air
People: motion-blurred pedestrians crossing the street (long exposure effect)
Sky: deep blue-black, no stars — urban sky glow
Mood: alive, electric, slightly overwhelming — the energy of a great city at night
Technical: long exposure aesthetic, light trails from vehicles
Style: Liam Wong cyberpunk aesthetic, cinematic neon city photography`,
      },
      {
        tag: 'Abstract Nature',
        title: 'Macro Nature Detail',
        prompt: `Extreme macro photography of natural forms and textures:
Subject: the surface of a peacock feather — iridescent eye pattern
Magnification: extreme close-up — individual barbs visible, structural colour
Lighting: backlit to show iridescence — colours shift from teal to gold to purple
Background: pure black, achieved through macro depth of field
Focus: critical sharp focus on the central eye, radiating structure
Colour: metallic iridescent blues, greens, golds — jewel-like
Texture: visible microstructure creating the colour (not pigment — structural colour)
Style: National Geographic macro photography, science illustration quality`,
      },
    ],
  },
  {
    title: 'Character & Fantasy Design',
    icon: Sparkles,
    description: 'Create detailed fantasy characters, concept art, creature designs, and imaginative figure compositions.',
    prompts: [
      {
        tag: 'Fantasy Character',
        title: 'Epic Fantasy Warrior',
        prompt: `Concept art of an epic fantasy warrior character:
Character: female warrior, tall and powerful, battle-hardened but noble bearing
Armour: ornate plate armour — deep midnight blue with gold filigree detailing
Weapon: longsword held at rest, blade engraved with glowing runes
Setting: standing on a cliff edge at dawn — orange and gold sunrise behind her
Hair: silver-white, braided loosely, strands moving in the wind
Expression: determined, world-weary, ready — not aggressive
Lighting: dramatic back-lighting from sunrise, soft fill light on face
Art style: high-quality digital painting, concept art level — Artstation featured quality
Detail: extreme detail in armour, realistic fabric, atmospheric depth`,
      },
      {
        tag: 'Creature',
        title: 'Fantastical Creature Design',
        prompt: `Creature design concept art for a fantastical creature:
Creature type: a forest guardian — ancient, gentle but immense
Physical description: part deer, part ancient tree — antlers grown into living branches with leaves, bark-textured skin, moss growing on shoulders
Size: enormous — trees in background provide scale (creature is 30 feet tall)
Expression: ancient wisdom, protective gaze downward — not threatening
Setting: deep misty forest — shafts of light through canopy, forest floor below
Mood: magical, awe-inspiring, sacred — encountering something divine in nature
Art style: Studio Ghibli concept art influence — My Neighbor Totoro spirit guardian aesthetic
Colour palette: deep forest greens, warm amber, grey-brown bark tones`,
      },
      {
        tag: 'Sci-Fi Character',
        title: 'Cyberpunk Character Portrait',
        prompt: `Cyberpunk character portrait — detailed concept art:
Character: a hacker in her late 20s, sharp intelligent eyes, augmented
Augmentations: subtle blue neural implant visible at temple, one cybernetic eye (iris glows soft blue)
Clothing: layered tactical jacket — black with hood, worn and lived-in aesthetic
Environment: neon-lit night market alley — crowded, atmospheric, rain-wet
Lighting: dramatic neon uplighting — magenta and cyan mix casting complex shadows
Expression: focused, calculating, slightly dangerous
Art style: detailed digital painting — concept art quality, Blade Runner 2049 aesthetic
Background: busy but blurred — character sharply lit against busy backdrop`,
      },
    ],
  },
  {
    title: 'Abstract & Conceptual Art',
    icon: Layers,
    description: 'Generate striking abstract art, conceptual compositions, geometric designs, and experimental visual art.',
    prompts: [
      {
        tag: 'Abstract',
        title: 'Dynamic Abstract Composition',
        prompt: `Dynamic abstract digital artwork — large format canvas piece:
Style: lyrical abstraction — emotional and energetic, not purely geometric
Composition: flowing organic forms intersecting with sharp geometric elements
Colour palette: deep midnight navy, electric cobalt, bursts of warm amber and gold
Technique feel: gestural marks suggesting movement — like Franz Kline meets Mark Rothko
Texture: rich surface texture — thick impasto oil paint feel in digital medium
Mood: tension between order and chaos — controlled energy
Scale feel: monumental — imagine this 8 feet tall in a gallery
Quality: museum-quality fine art, suitable for gallery print reproduction
Format: square, landscape orientation`,
      },
      {
        tag: 'Geometric',
        title: 'Sacred Geometry Composition',
        prompt: `Intricate sacred geometry digital artwork:
Design: overlapping geometric forms — Flower of Life, Metatron's Cube, nested Platonic solids
Line work: precise, razor-thin gold lines on deep black background
Depth: multiple layers of transparency creating depth and luminosity
Colour: deep black background, glowing gold and white geometric forms, subtle gradient fills
Style: precision vector aesthetic with organic energy — not cold or robotic
Details: micro-detail at every scale — zoom in and find more complexity
Symmetry: perfect radial symmetry throughout
Mood: meditative, mathematical, cosmic — the geometry of reality
Format: square, high-resolution, suitable for large print`,
      },
      {
        tag: 'Surreal',
        title: 'Surrealist Dreamscape',
        prompt: `Surrealist painting in the style of Salvador Dali or René Magritte:
Concept: a businessman in a suit standing in a desert landscape — but his briefcase is a beehive, and bees form a cloud around his head in the shape of his thoughts
Sky: melting clocks draped over distant rocks — soft afternoon light
Ground: impossibly flat desert extending to horizon with single impossible tree
Colour palette: warm desert ochres and sand, deep sky blue, small pops of incongruous bright colour
Mood: dreamlike, slightly unsettling, intellectually provocative
Technique: hyper-realistic painting of impossible things — the key to surrealism
Style: European surrealism, photorealistic technique applied to impossible imagery`,
      },
    ],
  },
];

const faqs = [
  {
    question: 'What is Bing AI Image Creator and how does it work?',
    answer: 'Bing Image Creator is Microsoft\'s AI image generation tool, powered by OpenAI\'s DALL-E 3 model. It is available free through Bing.com/create and integrated into Microsoft Copilot. Users type a text description (prompt) and the model generates four image variations. It is one of the most accessible and capable free AI image generators available, particularly strong for photorealistic images, artistic styles, and diverse subject matter.',
  },
  {
    question: 'What makes a good Bing Image Creator prompt?',
    answer: 'Effective Bing Image Creator prompts include: (1) the main subject (who or what is in the image); (2) the setting or environment; (3) the lighting conditions; (4) the artistic style or photographic reference; (5) the mood or atmosphere; (6) the perspective or camera angle; and (7) any technical specifications (like camera lens, film stock, or painting medium). More specific prompts — using concrete nouns and vivid adjectives — consistently produce better results than vague descriptions.',
  },
  {
    question: 'Is Bing Image Creator free to use?',
    answer: 'Yes — Bing Image Creator is free through Bing.com/create. Free users receive a set number of "boosted" generations per day (faster priority), with slower generations available after the boost limit is reached. Microsoft Copilot Pro subscribers get more boosted generations and faster access. You do not need a Microsoft account to try it, but creating a free account gives you more generations and lets you save your creations.',
  },
  {
    question: 'How does Bing Image Creator compare to Midjourney?',
    answer: 'Bing Image Creator (DALL-E 3) is free, more accessible, and better at following complex text instructions and generating images with accurate text. Midjourney is a paid subscription service and generally produces more aesthetically stylised, "artistic" outputs with superior compositional quality and coherent complex scenes. For business, factual, or diverse representation needs, Bing often performs comparably or better. For pure artistic image generation with a distinctive aesthetic, Midjourney has an edge.',
  },
  {
    question: 'What types of images does Bing Image Creator generate best?',
    answer: 'Bing Image Creator powered by DALL-E 3 excels at: photorealistic portraits and scenes, objects and product visualisation, artistic styles (impressionism, oil painting, watercolour), fantasy and concept art, architectural and interior design, food photography, and images with text. It handles diverse human representation well. It is less strong than specialised tools for extremely detailed character consistency across multiple images or highly stylised anime/manga art.',
  },
  {
    question: 'Can Bing Image Creator generate images with text in them?',
    answer: 'Yes — DALL-E 3 (which powers Bing Image Creator) is significantly better at generating images with accurate text than previous AI image models. You can ask for signs, labels, logos, posters, book covers, and other text-in-image content with good results. However, for complex typography or brand-critical text accuracy, always review the output carefully as errors can still occur, particularly with longer text strings or unusual fonts.',
  },
  {
    question: 'What content is Bing Image Creator unable to generate?',
    answer: 'Bing Image Creator, like all DALL-E 3-based services, will not generate: realistic images of real named people (celebrities, public figures, politicians), graphic violence or gore, sexual content, hate symbols or propaganda, content that could be used for disinformation, and images that violate copyright. These restrictions exist in both the model itself and Microsoft\'s content policy. Prompts requesting such content will be declined or significantly altered.',
  },
  {
    question: 'Can I use Bing Image Creator images commercially?',
    answer: "Images generated through Bing Image Creator may be used for personal, non-commercial use. For commercial applications, Microsoft's terms allow commercial use of images generated through Bing Image Creator under certain conditions, but there are restrictions — particularly around images of real people and copyrighted styles. Review the current Microsoft Bing Image Creator terms of service before using generated images in commercial projects. For definitively clear commercial rights, consider paid platforms that explicitly grant commercial licensing.",
  },
  {
    question: 'How do I get consistent character design across multiple images?',
    answer: 'Consistent character design across multiple Bing Image Creator generations is challenging because the model generates independently without memory of previous outputs. Techniques that help: (1) Write extremely detailed character descriptions that you copy-paste into every prompt; (2) Include specific distinctive features that uniquely identify the character; (3) Use consistent style reference terms; (4) Generate many variations and select the most consistent; (5) Consider using Midjourney with reference images or DALL-E 3 via API for better consistency workflows.',
  },
  {
    question: 'What aspect ratios does Bing Image Creator support?',
    answer: 'Bing Image Creator generates images primarily in square (1:1) format by default. You can request landscape (wide, 16:9) or portrait (tall, 9:16) orientations in your prompt by specifying "landscape format", "portrait orientation", "wide panoramic", or "vertical portrait". Results may vary in how precisely the aspect ratio is honoured. For strict aspect ratio requirements, professional tools like Midjourney, Adobe Firefly, or the DALL-E 3 API offer more explicit controls.',
  },
];

export default function BingAIImageGeneratorPromptsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Bing AI Image Generator Prompts — Photorealistic, Art & Design',
    description: 'Copy-ready Bing Image Creator prompts for photorealistic portraits, artistic styles, product visualisation, landscapes, fantasy characters, and abstract art.',
    author: { '@type': 'Organization', name: 'GPTPrompts.AI' },
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen text-white" style={{ background: '#010307' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-4" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
            <Image size={12} /> AI Image Generation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Bing AI Image Generator Prompts</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Copy-ready prompts for Bing Image Creator (DALL-E 3). Photorealistic, artistic, commercial, and fantasy image generation.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.title} className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg" style={{ background: `${accent}15` }}>
                  <Icon size={18} style={{ color: accent }} />
                </div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              <p className="text-gray-400 text-sm mb-5 ml-11">{section.description}</p>
              <div className="grid gap-4">
                {section.prompts.map(p => <CopyCard key={p.title} {...p} />)}
              </div>
            </div>
          );
        })}

        {/* Reference: AI Image Generator Comparison */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-2">AI Image Generator Comparison</h2>
          <p className="text-gray-400 text-sm mb-5">How Bing Image Creator compares to other leading AI image generators.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Bing / DALL-E 3', strength: 'Free, text accuracy, photorealism, accessible', best: 'Free generations, portraits, images with text' },
              { name: 'Midjourney', strength: 'Artistic quality, aesthetic consistency, complex scenes', best: 'Art, concept design, aesthetic imagery' },
              { name: 'Stable Diffusion', strength: 'Open source, highly customisable, local generation', best: 'Custom workflows, developer use, no censorship' },
              { name: 'Ideogram', strength: 'Typography in images, graphic design, logos', best: 'Text-heavy images, posters, graphic design' },
              { name: 'Adobe Firefly', strength: 'Commercial safe, Adobe integration, stock-trained', best: 'Commercial use, Adobe Creative Cloud workflow' },
              { name: 'Leonardo AI', strength: 'Game assets, character consistency, fine-tuned models', best: 'Game design, consistent characters, stylised art' },
            ].map(tool => (
              <div key={tool.name} className="rounded-lg border p-4" style={{ borderColor: borderCol, background: bgDark }}>
                <div className="font-semibold text-white mb-1">{tool.name}</div>
                <div className="text-xs text-gray-400 mb-2">{tool.strength}</div>
                <div className="text-xs font-medium" style={{ color: accent }}>Best for: {tool.best}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bing Prompt Formula */}
        <div className="mb-12 rounded-lg border p-6" style={{ borderColor: borderCol, background: bgDark }}>
          <h2 className="text-lg font-bold text-white mb-1">Bing Prompt Formula</h2>
          <p className="text-gray-400 text-sm mb-4">The anatomy of a high-quality Bing Image Creator prompt.</p>
          <pre className="text-sm leading-relaxed font-mono p-4 rounded-lg overflow-x-auto" style={{ background: '#010207', color: '#0078D4' }}>{`[SUBJECT] + [ACTION OR STATE]
[SETTING] + [ENVIRONMENT DETAILS]
[LIGHTING] (golden hour / studio three-point / dramatic side light / diffused overcast)
[CAMERA/PERSPECTIVE] (eye level / bird's eye / macro / wide angle / 85mm portrait)
[ARTISTIC STYLE] (oil painting / photorealistic / concept art / watercolour / editorial)
[MOOD OR ATMOSPHERE] (moody / ethereal / energetic / serene / dramatic)
[QUALITY MODIFIERS] (high resolution / detailed / professional / award-winning)
[WHAT TO AVOID] (no watermarks / no text / no people / not blurry)

Example:
"A golden retriever puppy sitting in a field of sunflowers at golden hour,
looking up at camera with expressive eyes,
shallow depth of field, 85mm portrait lens,
warm afternoon backlight creating halo effect,
photorealistic, National Geographic photography quality,
natural and authentic — not stock photo feel"`}</pre>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3">
            {faqs.map(item => <FAQ key={item.question} item={item} />)}
          </div>
        </div>

        {/* Related Pages */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Related Prompt Guides</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Ideogram AI Prompts', href: '/ideogram-ai-prompts' },
              { label: 'Midjourney Prompts', href: '/midjourney-prompts' },
              { label: 'DALL-E 3 Prompts', href: '/dalle-3-prompts' },
              { label: 'Luma AI Prompts', href: '/luma-ai-prompts' },
              { label: 'Pika AI Prompts', href: '/pika-ai-prompts' },
              { label: 'AI Story Generator Prompts', href: '/ai-story-generator-prompts' },
              { label: 'AI Prompts for Marketers', href: '/ai-prompts-for-marketers' },
              { label: 'Perchance AI Prompts', href: '/perchance-ai-prompts' },
            ].map(link => (
              <a key={link.href} href={link.href} className="text-sm px-3 py-1.5 rounded-full border transition-colors" style={{ borderColor: borderCol, color: '#9ca3af' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${accent}50`; (e.currentTarget as HTMLAnchorElement).style.color = accent; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = borderCol; (e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af'; }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
