'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Type, Layout, Share2, BarChart3, BookOpen, Palette } from 'lucide-react';

const accent = '#A855F7';
const borderCol = '#1e0f2e';
const bgDark = '#050308';

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
        <button onClick={handleCopy} className="shrink-0 text-gray-400 transition-colors hover:text-purple-400">
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
    title: 'Logo & Brand Identity',
    icon: Palette,
    description: 'Create distinctive logos and brand identity assets where typography and mark work together as a cohesive visual system.',
    prompts: [
      { tag: 'Logo', title: 'Wordmark logo design', prompt: `Create a professional wordmark logo for a company called "[Company Name]" in the [industry] space.

Style: [minimalist / bold / elegant / playful]
Font style: [geometric sans-serif / classic serif / modern rounded / script]
Color: primary [color], secondary [color], on [background color]
Aspect ratio: square (1:1) for icon use

The logo should convey [brand values — e.g., trust, innovation, warmth]
Include: company name as the focal element, tagline "[Your tagline]" in smaller text below
Avoid: overly complex shapes, gradients that print poorly, thin strokes under 2pt` },
      { tag: 'Logo', title: 'Icon + wordmark combination', prompt: `Design a combination logo (icon + text) for "[Brand Name]":

Icon concept: [abstract shape / letter mark / symbol representing your industry]
Icon style: flat, geometric, 2-3 colors maximum
Wordmark: company name "[Brand Name]" in [font style], positioned to the right of the icon
Color palette: [primary color hex] and [secondary color hex] on white background
Mood: [describe — e.g., professional, energetic, trustworthy, premium]

The design should work at small sizes (favicon, 32px) and large formats (signage, billboard)
Also show a single-color version (all black or all white) for versatility` },
      { tag: 'Logo', title: 'Minimalist lettermark', prompt: `Create a minimalist lettermark logo using the letters "[initials — 1-3 letters]" for a [industry] brand.

Design approach: the letters should overlap, interlock, or combine to form a distinctive monogram
Font style: [geometric / humanist / condensed sans-serif]
Color: [single color] on white, and white on [color] background
Shape: contained within a [circle / square / hexagon / no container]
Aesthetic: clean, modern, suitable for digital and print use

The mark should be recognisable even when the letters are not immediately obvious — allow for a subtle cleverness in the letterform combination` },
      { tag: 'Logo', title: 'Brand badge with text', prompt: `Design a brand badge/seal for "[Organisation Name]" that combines text and graphic elements:

Style: [vintage / modern / athletic / institutional / artisan]
Circular badge with: organisation name around the outer ring, "[year established or tagline]" at the bottom arc, central emblem [describe the icon: e.g., a mountain, a flame, a compass]
Font: [describe style — e.g., condensed uppercase, classic serif]
Colors: [2-3 colors maximum]
Use case: merchandise (t-shirts, caps), website header, document footer

The badge should feel timeless, not trendy — designed to still look good in 20 years` },
    ],
  },
  {
    title: 'Poster & Event Design',
    icon: Layout,
    description: 'Generate striking posters for events, films, products, and campaigns with precise typography placement at print quality.',
    prompts: [
      { tag: 'Poster', title: 'Music festival poster', prompt: `Create a vibrant music festival poster:

Event: "[Festival Name]"
Date: "[Date]" | Venue: "[Location]"
Headliners: "[Artist 1]", "[Artist 2]", "[Artist 3]"

Design:
- Festival name in large, bold display font at top — most dominant element
- Artists listed in size hierarchy (headliners largest)
- Date and venue in clean, readable sans-serif at bottom
- Color scheme: [describe — e.g., electric blue and neon yellow, deep burgundy and gold]
- Visual style: [psychedelic / geometric / dark and moody / retro / futuristic]
- Aspect ratio: 27x40 inches (standard poster)

All text must be clearly readable — avoid placing text over complex background areas` },
      { tag: 'Poster', title: 'Film and movie poster', prompt: `Design a movie poster for "[Film Title]" — [genre: thriller / romance / sci-fi / horror / drama]:

Visual concept: [describe the central image — e.g., lone figure silhouette against stormy sky, two characters facing each other]
Title treatment: "[Film Title]" in [font style — e.g., bold condensed, elegant serif, fragmented letters] — positioned [top / center / bottom]
Tagline: "[Your tagline]" in smaller italic text
Credits block: standard film poster credit strip at the bottom
Color palette: [describe the mood — e.g., desaturated blues, warm golden tones, black and red]
Aspect ratio: 2:3 (standard cinema poster)

The title must be the most legible element — do not let it compete with the illustration` },
      { tag: 'Poster', title: 'Corporate event poster', prompt: `Create a professional poster for a corporate event:

Event: "[Conference/Summit/Workshop Name]"
Date: "[Date]" | Time: "[Time]"
Venue: "[Location]"
Key speakers or sponsors: "[Names]"

Design style: clean, modern, professional — not corporate-boring
Color scheme: [your brand colors or describe the palette]
Hierarchy: event name largest → date/venue medium → details small
Visual element: [abstract geometric / photography background / minimal line art]
Aspect ratio: A1 portrait (23.4 x 33.1 inches)

Include a subtle call-to-action text: "[Register at URL / Scan QR / RSVP by date]"` },
      { tag: 'Poster', title: 'Motivational quote poster', prompt: `Design a motivational/inspirational print poster:

Quote: "[Your quote text]"
Attribution: "— [Author name]"

Typography style: [large bold statement quote / elegant script / clean modern sans / mixed typefaces]
Layout: [quote centered with wide margins / quote left-aligned / oversized single word as hero]
Color: [monochrome / two-tone / warm neutrals / deep navy and gold]
Background: [solid color / subtle texture / minimal geometric shapes]
Print size: 18x24 inches, suitable for framing

The quote should be the entire focus — no competing visuals, just typography as design
Include attribution in a distinct, smaller type style` },
    ],
  },
  {
    title: 'Social Media Graphics',
    icon: Share2,
    description: 'Create platform-specific social media visuals optimised for Instagram, LinkedIn, Twitter/X, and TikTok with mobile-first legibility.',
    prompts: [
      { tag: 'Social', title: 'Instagram promotional post', prompt: `Create an Instagram square post (1080x1080) for [brand/business]:

Content: [what you are promoting — product launch, sale, announcement]
Headline: "[Main text — keep under 8 words for impact]"
Subtext: "[Supporting text — price, date, or short description]"
Call to action: "Shop now" / "Link in bio" / "Register today"

Design:
- Brand color: [hex]
- Font style: [modern sans / bold display / elegant]
- Central visual: [product photo area / abstract shapes / pattern]
- Logo placement: bottom right corner, subtle
- High contrast between text and background — must be readable on mobile without zooming` },
      { tag: 'Social', title: 'LinkedIn announcement graphic', prompt: `Design a LinkedIn post graphic (1200x628) for a professional announcement:

Announcement type: [new product / company milestone / job opening / event / partnership]
Headline: "[Your announcement — e.g., 'We just raised Series A']"
Supporting text: "[1-2 short facts or context points]"
Company name: "[Name]"

Style: clean, professional, modern — not generic stock-photo corporate
Color: [primary brand color] and white/dark
Typography: bold headline, clean body text, no more than 3 font sizes
Mood: confident and credible without being boastful

No more than 40 words of total text — LinkedIn audiences scan fast` },
      { tag: 'Social', title: 'Twitter/X card with stat or quote', prompt: `Create a shareable Twitter/X card (1600x900) featuring a key statistic or insight:

Stat or quote: "[Your key data point or insight — e.g., '73% of consumers trust reviews more than brand claims']"
Context: "[Brief framing text — 1 short sentence]"
Source/attribution: "[Source name if data]"

Design:
- Bold, oversized number or key phrase as the hero
- High contrast for feed visibility (dark bg or vibrant color)
- Brand name or logo, small and bottom-right
- No clutter — stat is everything
- Optimised for screenshot sharing, not just embedded viewing` },
      { tag: 'Social', title: 'Story and Reel cover', prompt: `Design an Instagram/TikTok Story cover (1080x1920) for [content type — tutorial, announcement, product reveal]:

Text overlay:
- Main hook: "[Attention-grabbing text — e.g., 'Wait for the end' / '5 things you didn't know']"
- Subtext: "[Topic or context — 1 short line]"

Visual:
- [Bold color background / blurred photo background / gradient]
- Large, high-contrast text centered in the safe zone (middle 70% of height)
- Brand color: [hex]

Text must be readable with captions visible and without sound — design for silent autoplay viewing` },
    ],
  },
  {
    title: 'Infographic & Data Visualisation',
    icon: BarChart3,
    description: 'Turn data and processes into clear, engaging visual stories. Ideogram\'s text accuracy makes stat callouts and labeled diagrams reliable.',
    prompts: [
      { tag: 'Infographic', title: 'Statistical data infographic', prompt: `Create an infographic presenting these key statistics:

Topic: "[Infographic title]"
Stats to feature:
1. [Statistic 1 — e.g., "87% of users prefer X"]
2. [Statistic 2]
3. [Statistic 3]
4. [Statistic 4]
5. [Statistic 5]

Design:
- Each stat in its own visual "card" with the number large and prominent
- Label text clearly associated with each stat
- Color scheme: [your palette or describe — e.g., teal and white on dark background]
- Icon or visual element for each stat (chart icon, person icon, etc.)
- Source attribution at bottom: "Source: [your source]"
- Aspect ratio: 4:5 (1080x1350) for Instagram feed` },
      { tag: 'Infographic', title: 'Step-by-step process infographic', prompt: `Design a process infographic showing [process name] in [N] steps:

Steps:
1. [Step title]: [brief description]
2. [Step title]: [brief description]
3. [Step title]: [brief description]
4. [Step title]: [brief description]
5. [Step title]: [brief description]

Layout: vertical flow with connecting arrows (top to bottom)
Each step: numbered badge, step title in bold, description in smaller text
Icon per step: [describe icon style — flat, line art, emoji-style]
Color: step numbers in [accent color], background [light / dark]
Aspect ratio: A4 portrait (for PDF export and printing)` },
      { tag: 'Infographic', title: 'Comparison infographic', prompt: `Create a comparison infographic: "[Option A]" vs "[Option B]"

Compare these dimensions:
1. [Dimension]: [A value] vs [B value]
2. [Dimension]: [A value] vs [B value]
3. [Dimension]: [A value] vs [B value]
4. [Dimension]: [A value] vs [B value]
5. [Dimension]: [A value] vs [B value]

Layout: two-column split with a clear divider
Option A color: [hex] | Option B color: [hex]
Each row: dimension label centered, values in respective columns
Conclusion callout: "[Which to choose when]"
Aspect ratio: 1:1 square or 16:9 landscape` },
      { tag: 'Infographic', title: 'Timeline infographic', prompt: `Design a timeline infographic for "[subject — company history / product evolution / historical events]":

Events:
- [Year/Date]: [Event title and 1-sentence description]
- [Year/Date]: [Event]
- [Year/Date]: [Event]
- [Year/Date]: [Event]
- [Year/Date]: [Event]

Layout: horizontal timeline with events alternating above and below the line
Year labels: large and bold on the timeline axis
Event cards: [color-coded by era / uniform / alternating colors]
Visual style: [modern flat / vintage illustrated / minimal geometric]
Aspect ratio: 16:9 (landscape for presentations and website headers)` },
    ],
  },
  {
    title: 'Book Covers & Editorial',
    icon: BookOpen,
    description: 'Design professional book covers, magazine layouts, and editorial graphics where typography and imagery work as one unified composition.',
    prompts: [
      { tag: 'Editorial', title: 'Non-fiction book cover', prompt: `Design a non-fiction book cover for:

Title: "[Book Title]"
Subtitle: "[Subtitle]"
Author: "[Author Name]"
Genre: [business / self-help / history / science / memoir]

Design approach:
- Title is the dominant visual element (large, bold, designed — not just placed)
- Subtitle in smaller but readable type below title
- Author name at bottom, clean and professional
- Central image/illustration: [describe concept — e.g., abstract data visualization, minimalist icon, conceptual photography]
- Color palette: [describe — e.g., deep navy and gold, bold red and white, muted earth tones]
- Standard book size: 6x9 inches

Style references: [describe the aesthetic — Penguin modern classics / Malcolm Gladwell style / academic press / popular science]` },
      { tag: 'Editorial', title: 'Novel / fiction book cover', prompt: `Create a fiction book cover for:

Title: "[Title]"
Author: "[Author Name]"
Genre: [thriller / romance / fantasy / literary fiction / sci-fi / horror]

Mood: [describe the feel — dark and atmospheric / warm and intimate / otherworldly / gritty urban]
Central image: [key visual concept — a figure, a place, a symbolic object, an abstract texture]
Typography style: [describe — e.g., distressed serif, clean modern, elegant calligraphy, fragmented letters]
Color palette: [describe]

Hierarchy: title → author name → (optional) review quote or series name
Standard paperback size: 5.5x8.5 inches

The cover should make readers feel the genre immediately — design for the bookstore shelf test (would someone pick this up?)` },
      { tag: 'Editorial', title: 'Magazine cover', prompt: `Design a magazine cover for "[Magazine Name]" — [publication type: business / fashion / tech / culture / food]:

Issue theme: "[Issue topic]"
Cover headline: "[Main story headline]"
Supporting cover lines: "[Story 2 teaser]", "[Story 3 teaser]"
Date/issue: "[Month Year] | Issue [N]"

Design:
- Masthead (magazine name) at top in recognisable logo treatment
- Cover hero: [main visual — portrait photo area / illustration / typographic treatment]
- Cover lines in [left / right] side margin in hierarchy of size
- Barcode and price at bottom corner
- Color story: [describe palette]

Standard size: 8.5x11 inches. Masthead must be visible even when partially overlapped by other magazines on a newsstand.` },
      { tag: 'Editorial', title: 'Newsletter or email header', prompt: `Design an email newsletter header banner for "[Newsletter Name]":

Newsletter topic: [what it covers — e.g., weekly AI news, marketing tips, startup funding]
Audience: [describe]

Design:
- Newsletter name "[Name]" as the primary typographic element
- Tagline: "[One-line description of what subscribers get]"
- Issue number/date area: "[Issue #XX | Month DD, YYYY]"
- Color: [primary brand color] + white
- Width: 600px (standard email width) × 200-300px height
- Font: [clean sans-serif / editorial serif]
- Feel: [professional / editorial / warm / bold]

The header should be immediately recognisable in any inbox and communicate the newsletter's personality at a glance.` },
    ],
  },
  {
    title: 'Marketing & Advertising Graphics',
    icon: Type,
    description: 'Create conversion-focused marketing visuals with compelling offer presentation, clear hierarchy, and platform-specific formatting.',
    prompts: [
      { tag: 'Marketing', title: 'Promotional sale banner', prompt: `Design a promotional sale banner for [business/brand]:

Offer: "[Offer — e.g., '50% Off', 'Free Shipping', 'Buy 2 Get 1']"
Product/category: "[What is on sale]"
Dates: "Sale ends [date]" or "Limited time offer"
CTA: "[Shop Now / Claim Offer / Get Deal]"

Size: [web banner 728x90 / social square 1080x1080 / email header 600x200]
Color: [brand primary] + high-contrast accent for the discount figure
Hierarchy: discount % or offer = biggest → product name → dates → CTA button

The offer percentage or hook must be the thing a viewer reads first — even at a glance
Design the CTA to look like a clickable button` },
      { tag: 'Marketing', title: 'Product feature highlight card', prompt: `Create a product feature highlight card for [product name]:

Feature: "[Feature name]"
Benefit headline: "[What this feature does for the user — max 8 words]"
Supporting text: "[1-2 sentences expanding on the benefit]"
Visual: [icon, product screenshot area, or abstract illustration representing the feature]

Design:
- Feature name: small label/eyebrow text above the headline
- Headline: large and bold
- Supporting text: body size, readable
- Icon/visual: [left of text / above text / background element]
- Color: [brand colors]
- Size: 1:1 square for social or 16:9 for web/presentation

Style: clean, modern SaaS product marketing aesthetic` },
      { tag: 'Marketing', title: 'Event or webinar promotional card', prompt: `Design a promotional card for [event type: webinar / workshop / conference / panel]:

Event: "[Event name]"
Date: "[Day, Month Date, Year]"
Time: "[Time and timezone]"
Speaker(s): "[Name, Title, Company]"
Topic headline: "[What attendees will learn — 1 compelling sentence]"
Registration CTA: "Register Free / Save Your Spot / Join Live"

Design:
- Speaker name(s) prominently featured (builds credibility)
- Date/time must be immediately obvious
- CTA styled as a button
- Color: [brand or event colors]
- Size: 1200x628 for LinkedIn/Twitter event cover

Tone: professional but inviting — this should make people want to attend` },
      { tag: 'Marketing', title: 'Testimonial or review graphic', prompt: `Create a customer testimonial graphic for social proof:

Quote: "[Customer's exact quote — keep to 20-40 words for readability]"
Customer: "[Name]"
Role/company: "[Title, Company Name]"
Rating: [5 stars / 4.8 stars / numeric score]

Design:
- Quote in large quotation-mark-styled typography — primary focal element
- Customer name in bold, role in lighter text below
- Star rating visually prominent
- Brand logo or product name, small, bottom corner
- Color: [brand palette] or neutral with accent
- Size: 1:1 square (1080x1080) for Instagram

The quote should feel authentic and personal — not like a press release. Choose a font style that feels human.` },
    ],
  },
];

const faqs = [
  { question: 'What makes Ideogram AI different from DALL-E and Midjourney?', answer: 'Ideogram\'s key differentiator is accurate, readable text inside generated images. DALL-E 3 has improved text generation but still makes frequent spelling errors. Midjourney handles text poorly by default. Ideogram was designed from the ground up with typography accuracy as a core feature, making it the preferred tool for designers creating posters, social media graphics, book covers, and any visual where specific readable text must appear inside the image.' },
  { question: 'Can I use Ideogram images for commercial projects?', answer: 'Yes. Images generated on Ideogram\'s paid plans can generally be used for commercial purposes including client work, marketing materials, merchandise, and publishing. Free plan users may have more restricted commercial use rights. Always check Ideogram\'s current terms of service as licensing policies evolve, especially regarding commercial use, AI disclosure requirements in your jurisdiction, and any industry-specific regulations around AI-generated imagery.' },
  { question: 'How do I get specific text to appear correctly in Ideogram?', answer: 'Put the exact text you want in quotation marks within your prompt — for example: text reading "Summer Sale 50% Off" in bold sans-serif. Be explicit about where the text should appear (top, center, bottom), what size relative to other elements, and what font style. Ideogram is much more reliable with short phrases (1-7 words) than long sentences. For longer text, consider generating sections separately or using Ideogram\'s remix feature to iterate toward the correct output.' },
  { question: 'What aspect ratios does Ideogram support?', answer: 'Ideogram supports multiple aspect ratios including 1:1 square (social posts), 4:5 (Instagram portrait), 16:9 landscape (presentations, YouTube), 9:16 vertical (stories, TikTok), 3:2 (photography standard), and A4 portrait. You specify the ratio in your prompt or using the format selector. For print work, generate at the largest available resolution and specify the intended print dimensions in your prompt for best composition.' },
  { question: 'How do I write prompts for typography-focused designs?', answer: 'Be specific about: the exact words you want (in quotes), the font style (geometric sans-serif, elegant serif, condensed display, script), the text\'s role in the composition (headline, body, label), color, size relative to other elements, and background contrast. Include composition cues like "left-aligned layout", "centered hierarchy", or "text in the top third". Fewer design elements in one image generally produces better text accuracy than complex multi-element compositions.' },
  { question: 'Can Ideogram handle non-English text?', answer: 'Ideogram can generate text in many languages including Spanish, French, German, Portuguese, Japanese, Korean, Chinese, and Arabic, though accuracy varies. Latin-script languages generally perform better than ideographic or right-to-left scripts. For critical non-English text, generate multiple variations and select the most accurate, or use Ideogram to create the visual design framework and add precise translated text in post-production using a design tool like Canva, Figma, or Photoshop.' },
  { question: 'What is the best workflow for professional design with Ideogram?', answer: 'Most professional designers use Ideogram for rapid concept generation and iteration: generate 4-8 variations of a concept, select the strongest direction, then refine in Figma, Photoshop, or Illustrator. Ideogram excels at creating the overall composition, color palette, and typography style — treat the output as a high-quality starting point, not a final deliverable. Add fine-tuning, brand assets, and production-ready files in your standard design tool.' },
  { question: 'How do I generate consistent brand visuals across multiple images?', answer: 'Consistency comes from detailed, consistent prompts. Create a prompt template that always includes: your brand colors (hex codes), font style descriptions, design aesthetic keywords, and composition preferences. Save this template and apply it to each new image. For character or product consistency, use Ideogram\'s "remix" feature with a reference image. Write down your style guide in prompt form — this is your brand prompt standard.' },
  { question: 'What are the main limitations of Ideogram compared to professional design software?', answer: 'Ideogram cannot place vector text (output is raster/pixels), cannot guarantee exact font reproduction, does not integrate with brand asset libraries, has limited control over precise element positioning, and cannot produce multi-page documents. For production design work, use Ideogram for concept generation and general layout direction, then export to Figma, Adobe Illustrator, or InDesign for finalisation, exact typography control, and print-ready file production.' },
  { question: 'Which subscription plan should I choose for regular design work?', answer: 'For occasional personal projects, the free plan may be sufficient. For regular professional use — multiple designs per week, commercial projects, or client work — a paid plan provides priority generation, higher resolution output, more monthly credits, and commercial licensing clarity. Evaluate your monthly generation volume: if you are creating 20+ designs per month, a mid-tier paid plan typically pays for itself in time saved compared to manual design alternatives.' },
];

export default function IdeogramAIPromptsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ideogram AI Prompts: Typography, Posters, Social Media & Brand Design',
    description: 'Master text-in-image design with Ideogram AI. Prompts covering logo design, event posters, social media graphics, infographics, book covers, and marketing visuals with accurate readable typography.',
    author: { '@type': 'Organization', name: 'GPTPrompts.AI' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };

  return (
    <div className="min-h-screen text-white" style={{ background: '#070309' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 text-sm font-medium" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
            Text-in-Image AI Design
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ideogram AI Prompts</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Create stunning designs with accurately rendered typography using Ideogram AI. These prompts cover logos, posters, social media, infographics, book covers, and marketing graphics where readable text inside images is essential.</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['Logo Design', 'Poster Design', 'Social Media', 'Infographics', 'Book Covers', 'Marketing'].map(tag => (
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

        <section className="mb-12 p-6 rounded-lg border" style={{ borderColor: borderCol, background: bgDark }}>
          <h3 className="text-lg font-semibold text-white mb-3">Ideogram Prompt Formula</h3>
          <p className="text-gray-400 text-sm mb-4">Use this structure to get consistently good results from Ideogram AI.</p>
          <div className="font-mono text-sm p-4 rounded border space-y-2" style={{ borderColor: borderCol, background: '#0a050f' }}>
            <div><span style={{ color: accent }}>[Design type]</span><span className="text-gray-400"> — e.g., "minimalist poster", "social media graphic"</span></div>
            <div><span style={{ color: accent }}>[Text to include]</span><span className="text-gray-400"> — always use quotes: text reading "Your Exact Text Here"</span></div>
            <div><span style={{ color: accent }}>[Typography style]</span><span className="text-gray-400"> — e.g., "bold geometric sans-serif", "elegant serif headline"</span></div>
            <div><span style={{ color: accent }}>[Color palette]</span><span className="text-gray-400"> — e.g., "deep navy and gold", "#FF4444 on white"</span></div>
            <div><span style={{ color: accent }}>[Composition]</span><span className="text-gray-400"> — e.g., "centered layout", "text in top third", "left-aligned"</span></div>
            <div><span style={{ color: accent }}>[Mood/aesthetic]</span><span className="text-gray-400"> — e.g., "luxury", "playful", "corporate", "editorial"</span></div>
            <div><span style={{ color: accent }}>[Aspect ratio]</span><span className="text-gray-400"> — e.g., "1:1 square", "9:16 vertical", "16:9 landscape"</span></div>
          </div>
        </section>

        <section className="border-t pt-8" style={{ borderColor: borderCol }}>
          <h3 className="text-lg font-semibold text-white mb-4">Related Prompts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'Midjourney Prompts', href: '/midjourney-prompts' },
              { name: 'DALL-E 3 Prompts', href: '/dalle-3-prompts' },
              { name: 'Luma AI Prompts', href: '/luma-ai-prompts' },
              { name: 'Pika AI Prompts', href: '/pika-ai-prompts' },
              { name: 'AI Prompts for Marketers', href: '/ai-prompts-for-marketers' },
              { name: 'Bing Image Generator Prompts', href: '/bing-ai-image-generator-prompts' },
              { name: 'AI Prompts for Writers', href: '/ai-prompts-for-writers' },
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
