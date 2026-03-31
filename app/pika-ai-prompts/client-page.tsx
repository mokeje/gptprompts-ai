'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Video, Sparkles, Film, Share2, ShoppingBag, Wand2 } from 'lucide-react';

const accent = '#FF6B6B';
const borderCol = '#2a0a0a';
const bgDark = '#060101';

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
    title: 'Short-Form Social Videos',
    icon: Share2,
    description: 'Create scroll-stopping short videos optimised for TikTok, Instagram Reels, and YouTube Shorts with punchy pacing and strong visual hooks.',
    prompts: [
      {
        tag: 'TikTok',
        title: 'Viral Dance Background Loop',
        prompt: `Generate a 3-second looping video clip of:
A neon-lit urban street at night, rain-slicked pavement reflecting pink and purple lights
Camera slowly drifts forward at eye level
No people — empty street with atmosphere
Cinematic colour grading, shallow depth of field
Style: moody music video B-roll, 9:16 vertical format
Perfect for TikTok dance video background overlay`,
      },
      {
        tag: 'Reels',
        title: 'Product Reveal Transition',
        prompt: `Create a 4-second product reveal video:
Start with a close-up of a wrapped gift box, soft warm bokeh background
Dramatic slow-motion ribbon pull — box lid opens with burst of golden particles
Product rises from within surrounded by sparkles
End on a clean white background with product centred
Style: luxury unboxing, high contrast, 9:16 vertical
Smooth camera pull-back to reveal full product`,
      },
      {
        tag: 'YouTube Shorts',
        title: 'Before & After Transformation',
        prompt: `Generate a split-screen transformation video:
Left side: messy cluttered desk, dim lighting, papers everywhere
Right side: same desk, clean minimalist setup, warm lamp, organised
Simultaneous reveal with a vertical wipe from top to bottom
Duration: 3 seconds, smooth transition
Style: satisfying before/after, soft colour correction
9:16 vertical format, clean aesthetic`,
      },
    ],
  },
  {
    title: 'Text & Typography in Video',
    icon: Sparkles,
    description: "Leverage Pika's text-in-video capabilities to create kinetic typography, animated titles, and text-driven storytelling sequences.",
    prompts: [
      {
        tag: 'Typography',
        title: 'Kinetic Text Intro',
        prompt: `Create a 4-second kinetic typography animation:
Large bold white sans-serif text reading "YOUR STORY STARTS HERE"
Text assembles letter by letter from scattered particles
Background: deep black with faint star field
Each letter glows briefly as it locks into place
Final frame: full text with subtle pulse glow
Style: cinematic intro title card, high contrast
No other elements — pure typographic impact`,
      },
      {
        tag: 'Branding',
        title: 'Logo Sting Animation',
        prompt: `Animate a brand logo reveal in 3 seconds:
Start with an abstract light streak moving across screen
Streak resolves into text logo materialising from light particles
Letterforms solidify with a metallic sheen
Tagline fades in below in smaller text after 2 seconds
Background: gradient from near-black to deep navy
Style: premium corporate brand sting, 16:9`,
      },
      {
        tag: 'Social',
        title: 'Quote Card Animation',
        prompt: `Generate an animated quote card video:
Minimalist design — cream/off-white background
Handwritten-style font quote text types itself on screen
Words appear one by one with a subtle ink-bleed effect
Decorative botanical line art fades in at corners
Duration: 5 seconds, peaceful pacing
Style: inspirational social media post, aesthetic journaling
9:16 vertical format for Instagram Stories`,
      },
    ],
  },
  {
    title: 'Character & Person Animation',
    icon: Video,
    description: 'Bring static portraits to life, animate illustrated characters, and create expressive character-driven video content.',
    prompts: [
      {
        tag: 'Portrait',
        title: 'Talking Head Animation',
        prompt: `Animate a portrait photograph to appear speaking:
Subtle natural head movement — slight nods and micro-expressions
Eyes blink naturally every 3-4 seconds
Lips move as if explaining something enthusiastically
Hair moves gently as if in a light breeze
Background remains static (shallow DOF portrait setting)
Duration: 5 seconds, loopable
Style: natural, realistic, not exaggerated — broadcast quality`,
      },
      {
        tag: 'Illustration',
        title: 'Animated Character Walk Cycle',
        prompt: `Create a side-scrolling character walk cycle animation:
Cartoon-style character in colourful flat design aesthetic
Clean smooth walk cycle — 8 frames looped
Character moves across screen left to right against simple background
Background parallax scrolling: foreground faster than background clouds
Duration: 4 seconds seamless loop
Style: 2D animation, Saturday morning cartoon feel
Vibrant colours, bold outlines`,
      },
      {
        tag: 'Fantasy',
        title: 'Warrior Hero Cinematic Shot',
        prompt: `Generate a cinematic hero character reveal:
A battle-worn warrior stands on a cliff edge at sunset
Long cloak and cape billowing dramatically in the wind
Camera slowly circles from behind to a 3/4 front view
Epic volumetric lighting — orange and gold from setting sun
Atmospheric particle effects: dust and embers
Duration: 5 seconds, sweeping orchestral feel
Style: AAA game cinematic, dark fantasy`,
      },
    ],
  },
  {
    title: 'Product & Brand Videos',
    icon: ShoppingBag,
    description: 'Generate professional product showcases, commercial-quality brand content, and e-commerce video assets at scale.',
    prompts: [
      {
        tag: 'E-commerce',
        title: '360 Product Turntable',
        prompt: `Create a product turntable showcase video:
Sleek luxury product rotating 360 degrees
Placed on a glossy white surface with soft shadow underneath
Studio lighting: three-point setup with subtle rim light
Reflections shimmer naturally as product rotates
Background: clean pure white or very light grey
Duration: 6 seconds, one full rotation
Style: luxury e-commerce product photography in motion
No text overlays — pure product focus`,
      },
      {
        tag: 'Brand',
        title: 'Fashion Brand Hero Video',
        prompt: `Generate a fashion brand hero video clip:
Model in slow motion on a minimalist white studio set
Wearing a structured tailored blazer in neutral tones
Hair and fabric move in slow motion as model turns toward camera
Cut to extreme close-up: fabric texture, button detail, collar
Colour grade: high-key clean whites, slightly desaturated
Duration: 5 seconds
Style: premium fashion editorial, Vogue-quality production values`,
      },
      {
        tag: 'Food & Bev',
        title: 'Food Reveal Cinematic',
        prompt: `Create a cinematic food reveal video:
A perfectly plated gourmet dish on a dark slate surface
Slow camera push-in starting from above, tilting to 45-degree angle
Steam rises naturally from the hot dish
Moody restaurant lighting: warm spotlight from above
Droplets of sauce glisten under the light
Duration: 4 seconds, slow and indulgent pacing
Style: Michelin-star restaurant menu video, dark and dramatic`,
      },
    ],
  },
  {
    title: 'Creative Effects & Transitions',
    icon: Wand2,
    description: "Use Pika's modify and effects features to create stunning visual transformations, morphs, and camera motion sequences.",
    prompts: [
      {
        tag: 'Effects',
        title: 'Morphing Nature Timelapse',
        prompt: `Generate a morphing nature transformation video:
Start: bare winter tree, grey sky, frost on branches
Morph seamlessly through spring (pink blossoms appear)
Continue through summer (full green canopy)
End: autumn (fiery orange and red leaves)
Each season lasts roughly 1 second
Smooth fluid morph transition between each state
Duration: 4 seconds total
Style: BBC Planet Earth timelapse, photorealistic, wide shot`,
      },
      {
        tag: 'Cinematic',
        title: 'Bullet-Time Camera Orbit',
        prompt: `Create a bullet-time style camera orbit effect:
Subject: a coffee cup on a cafe table, steam rising
Camera rapidly orbits 180 degrees around the cup in 2 seconds
Background blurs into bokeh streaks during orbit
Freeze frame at the front view for 1 second at end
Dramatic speed ramp: starts fast, slows to stop
Style: Matrix-inspired, cinematic slow-motion product shot`,
      },
      {
        tag: 'Transition',
        title: 'Water Drop Ink Reveal',
        prompt: `Generate a creative ink-in-water transition:
Close-up: a single drop of dark blue ink falls into clear water
Ink blooms outward in slow motion — fractal cloud shapes
The ink cloud morphs to reveal a landscape or image within it
Duration: 4 seconds — 1 second drop, 3 seconds reveal morph
Background: pure white, lit from behind
Style: high-speed macro photography, painterly and poetic
Smooth seamless transition effect`,
      },
    ],
  },
  {
    title: 'Viral & Trending Formats',
    icon: Film,
    description: 'Stay ahead of trends with prompts designed for viral video formats — satisfying content, POV videos, and immersive first-person experiences.',
    prompts: [
      {
        tag: 'Satisfying',
        title: 'Satisfying ASMR-Style Clip',
        prompt: `Create a satisfying looping video clip:
A perfectly smooth knife slices through an extremely ripe watermelon
The two halves fall apart in slow motion revealing bright red interior
Seeds scatter in slow motion, juice droplets catch the light
Extreme close-up, macro lens style
Duration: 4 seconds, seamless loop at the end
Style: ASMR satisfying video aesthetic, hyper-real`,
      },
      {
        tag: 'POV',
        title: 'First-Person City Walk',
        prompt: `Generate a first-person POV walking video:
Perspective: walking through a busy Tokyo street at dusk
Neon signs in Japanese light the scene in pink, blue, and red
Crowds of people pass by on either side
Camera has natural human walking motion (subtle up-down sway)
Rain-wet pavement reflects neon lights
Duration: 5 seconds
Style: immersive first-person, cinematic city documentary
Street-level view, 16:9 widescreen`,
      },
      {
        tag: 'Trending',
        title: 'AI Art Style Reveal',
        prompt: `Create an AI art style reveal video trending format:
Start: a simple pencil sketch on white paper
Sketch begins to fill with colour and detail progressively
Style transforms from sketch to watercolour to oil painting to photorealism
Each style holds for 1 second before morphing to next
Duration: 5 seconds total
Style: satisfying art transformation, smooth morphing
9:16 vertical, perfect for TikTok art reveal trend`,
      },
    ],
  },
];

const faqs = [
  {
    question: 'What is Pika AI and what can it generate?',
    answer: 'Pika AI is a generative AI video platform that creates short video clips from text prompts, images, or existing video. It specialises in 3-second to 10-second clips and offers features like Pikaffects for dramatic transformations, text-to-video, image-to-video, and video modification. It is particularly popular for social media content, creative effects, and product visualisation.',
  },
  {
    question: 'How long can Pika AI videos be?',
    answer: 'Pika generates videos typically ranging from 3 to 10 seconds in length. For longer content, creators stitch multiple clips together in video editing software. The short format is intentional — it keeps generation times fast and quality high. Some versions allow extending clips using the "Extend" feature to add more seconds to existing generations.',
  },
  {
    question: 'What aspect ratios does Pika support?',
    answer: 'Pika supports multiple aspect ratios including 16:9 widescreen (YouTube, landscape), 9:16 vertical (TikTok, Reels, Shorts), 1:1 square (Instagram), and 4:3. Choosing the right ratio in your prompt — and specifying it explicitly — helps ensure the composition is optimised for your intended platform.',
  },
  {
    question: 'How do I write better Pika AI prompts?',
    answer: 'Effective Pika prompts describe: (1) the main subject and action, (2) camera movement (pan, zoom, orbit, dolly), (3) lighting conditions, (4) visual style or cinematic reference, (5) mood or atmosphere, and (6) duration and format. Being specific about camera angles and motion dramatically improves results. Reference film styles like "Wes Anderson", "Michael Bay action shot", or "BBC Planet Earth" to guide aesthetic.',
  },
  {
    question: 'Can Pika animate my own images or photos?',
    answer: "Yes — Pika's image-to-video feature lets you upload a static image and animate it. You describe what motion should occur in the scene. This works well for product photos (adding subtle rotation or motion blur), portrait photos (adding natural head movement and blinking), and illustrated artwork (bringing characters or environments to life with movement).",
  },
  {
    question: 'What is Pikaffects and how do I use it?',
    answer: "Pikaffects is Pika's suite of creative transformation effects — including Explosion, Melt, Crush, Cake-ify, and Dissolve — that apply dramatic visual transformations to your subject. To use them effectively, describe your starting image clearly, specify which Pikaffect you want, and describe how you want the transformed result to look. These work best on clean, well-lit subjects with simple backgrounds.",
  },
  {
    question: 'How does Pika compare to Runway and Sora?',
    answer: 'Pika excels at creative effects, accessibility, and social media formats — it is generally faster and more affordable. Runway Gen-3 Alpha offers longer, more cinematic clips with better motion consistency for professional productions. Sora (OpenAI) produces the highest quality and longest videos but has limited availability. Pika is the best choice for regular social content creation and experimental creative work.',
  },
  {
    question: 'Can I use Pika videos for commercial purposes?',
    answer: 'Commercial usage rights depend on your Pika subscription tier. Free tier generations are typically for personal use only. Paid plans (Pika Standard and Pro) include commercial licensing for the videos you generate. Always check the current terms of service for your plan, as policies update regularly. For brand campaigns or client work, ensure you are on an appropriate paid tier.',
  },
  {
    question: 'What are the best use cases for Pika in marketing?',
    answer: 'Pika is excellent for: social media video ads (especially short-form), product reveal animations, brand intro stings, event promo teasers, background loops for presentations, and animated banner/hero content for websites. Marketers use it to rapidly test video creative concepts before investing in full production shoots, reducing creative iteration costs significantly.',
  },
  {
    question: 'How do I avoid common Pika generation failures?',
    answer: 'Common issues and fixes: (1) Blurry results — add "sharp focus, high detail, 4K" to your prompt; (2) Wrong aspect ratio — specify ratio explicitly; (3) Inconsistent motion — describe motion direction precisely such as "camera slowly pushes forward"; (4) Unwanted elements — use negative prompting or describe what you do NOT want; (5) Poor lighting — specify lighting setup explicitly such as "studio three-point lighting".',
  },
];

export default function PikaAIPromptsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Pika AI Prompts for Viral Videos & Creative Content',
    description: 'Copy-ready Pika AI prompts for social media videos, product showcases, character animation, cinematic effects, and trending video formats.',
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
    <div className="min-h-screen text-white" style={{ background: '#0a0101' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-4" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
            <Video size={12} /> AI Video Generation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Pika AI Prompts</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Copy-ready prompts for creating viral social videos, product showcases, cinematic effects, and trending video formats with Pika AI.
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

        {/* Reference: Pika vs Other Tools */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-2">Pika vs Other AI Video Tools</h2>
          <p className="text-gray-400 text-sm mb-5">How Pika compares to other leading AI video generation platforms in 2025.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Pika', strength: 'Creative effects, accessibility, social formats', best: 'Social media & creative experimentation' },
              { name: 'Runway Gen-3', strength: 'Cinematic quality, longer clips, motion consistency', best: 'Professional video production' },
              { name: 'Luma Dream Machine', strength: 'Realistic physics, smooth motion', best: 'Realistic scenes & product demos' },
              { name: 'Sora (OpenAI)', strength: 'Highest quality, longest duration, complex scenes', best: 'Studio-grade cinematic content' },
              { name: 'Kling AI', strength: 'Long video generation, lip sync, face swap', best: 'Long-form and character-driven content' },
              { name: 'Stable Video', strength: 'Open source, customisable, self-hosted option', best: 'Developers & custom pipelines' },
            ].map(tool => (
              <div key={tool.name} className="rounded-lg border p-4" style={{ borderColor: borderCol, background: bgDark }}>
                <div className="font-semibold text-white mb-1">{tool.name}</div>
                <div className="text-xs text-gray-400 mb-2">{tool.strength}</div>
                <div className="text-xs font-medium" style={{ color: accent }}>Best for: {tool.best}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Prompt Formula */}
        <div className="mb-12 rounded-lg border p-6" style={{ borderColor: borderCol, background: bgDark }}>
          <h2 className="text-lg font-bold text-white mb-1">Pika Prompt Formula</h2>
          <p className="text-gray-400 text-sm mb-4">Use this template structure for consistent, high-quality Pika generations.</p>
          <pre className="text-sm leading-relaxed font-mono p-4 rounded-lg overflow-x-auto" style={{ background: '#0f0202', color: '#FF6B6B' }}>{`[SUBJECT] + [ACTION/MOTION]
[CAMERA MOVEMENT] (pan left, zoom in, orbit, dolly forward)
[LIGHTING] (golden hour, studio 3-point, neon rim light)
[VISUAL STYLE] (cinematic, editorial, ASMR, documentary)
[MOOD/ATMOSPHERE] (dramatic, peaceful, tense, luxurious)
[FORMAT] (9:16 vertical / 16:9 widescreen / 1:1 square)
[DURATION] (3s / 5s / 8s)

Example:
"A lone lighthouse on a rocky coast at night, waves crashing.
Camera slowly pushes forward from distance to mid-shot.
Moonlight illuminates spray, warm light pulses from lighthouse beam.
Style: BBC Planet Earth, cinematic documentary.
16:9 widescreen, 5 seconds."`}</pre>
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
              { label: 'Luma AI Prompts', href: '/luma-ai-prompts' },
              { label: 'Ideogram AI Prompts', href: '/ideogram-ai-prompts' },
              { label: 'AI Prompts for Marketers', href: '/ai-prompts-for-marketers' },
              { label: 'ChatGPT Prompts PowerPoint', href: '/chatgpt-prompts-powerpoint' },
              { label: 'Bing AI Image Generator Prompts', href: '/bing-ai-image-generator-prompts' },
              { label: 'Midjourney Prompts', href: '/midjourney-prompts' },
              { label: 'AI Story Generator Prompts', href: '/ai-story-generator-prompts' },
              { label: 'AI Music Generator Prompts', href: '/ai-music-generator-prompts' },
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
