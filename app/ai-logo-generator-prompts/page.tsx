"use client"
import { useState } from "react"
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#8B5CF6] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium py-2 px-4 rounded transition-colors">
        {copied ? (<><Check className="w-4 h-4" />Copied</>) : (<><Copy className="w-4 h-4" />Copy Prompt</>)}
      </button>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center p-6 bg-[#1a1a1a] hover:bg-[#252525] transition-colors">
        <h4 className="font-bold text-white text-left">{question}</h4>
        {open ? <ChevronUp className="w-5 h-5 text-[#8B5CF6]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {open && <div className="bg-[#0a0a0a] p-6 border-t border-[#2a2a2a] text-gray-300">{answer}</div>}
    </div>
  )
}

export default function AILogoGeneratorPrompts() {
  const prompts = {
    "Logo Design Fundamentals": [
      "You are a professional logo designer. Create a logo for [COMPANY/BRAND NAME] that conveys: [KEY BRAND VALUES]. The logo should be: simple and memorable, scalable from favicon to billboard size, work in both color and black/white, and appeal to [TARGET AUDIENCE]. Provide a detailed brief explaining design choices, symbolism, and brand alignment.",
      "Design a minimalist logo for [BRAND]. Requirements: single mark or wordmark, geometric or organic style, limited color palette (2-3 colors max), contemporary yet timeless, memorable at small sizes. Explain the design concept and why it works for this brand\'s market position.",
      "Create a logo that conveys [BRAND PERSONALITY] (e.g., trustworthy, innovative, playful, luxurious). Consider: industry context, target audience, competitive landscape, and longevity. Provide a mood board description and explain how visual elements reinforce brand perception.",
      "Design a flexible logo system for [BRAND] that includes: primary mark, secondary variations, icon version, and wordmark option. Explain how each variation functions across different applications (digital, print, merchandise, social). Ensure visual consistency across the system.",
      "Create a logo concept for [PRODUCT/SERVICE] in the [INDUSTRY] space. The design should: differentiate from competitors, communicate core value proposition, be adaptable across platforms, and age well over time. Include color psychology rationale and typography recommendations.",
      "Design a logo that balances [TWO CONTRASTING ELEMENTS, e.g., modern + traditional, tech + human]. Explain the design tension you\'re creating and why it appeals to [TARGET DEMOGRAPHIC]. Provide variations showing how it adapts to different contexts."
    ],
    "Visual Style & Aesthetics": [
      "Generate logo design directions for [BRAND] in these styles: (1) Geometric minimalism, (2) Organic/illustrative, (3) Abstract/symbolic, (4) Typographic emphasis. For each direction, explain the mood it conveys, what type of brand it suits best, and why [SPECIFIC BRAND] might choose this style.",
      "Create a logo mood board description for [BRAND]. Include: color palette with rationale, typography style, visual metaphors, geometric vs. organic balance, line weight treatment, and emotional tone. Explain how these aesthetic choices align with brand positioning.",
      "Design a logo using [SPECIFIC DESIGN TREND, e.g., gradient, negative space, hand-drawn, 3D effect]. Explain how this trend serves the design (beyond aesthetics), whether it\'s timeless or trendy, and how it functions across digital and print media. What are the risks?",
      "Create logo concepts exploring [CULTURAL ELEMENT] authentically within [BRAND CONTEXT]. Ensure respectful representation, avoid stereotypes, integrate cultural symbolism meaningfully. Explain how the cultural element strengthens brand story without feeling appropriative.",
      "Design a logo with [SPECIFIC CONSTRAINT, e.g., single color, monochrome gradient, 2-3 shapes only, circular format]. Explain how limitations enhance creativity and force smart design decisions. What does this constraint teach us about effective logo design?",
      "Generate logo options in [SPECIFIC VISUAL LANGUAGE, e.g., Art Deco, Brutalism, Swiss Style, Memphis Design]. For each, explain the design principles of this movement and how they function for [BRAND]. Which could age well? Which is trend-dependent?"
    ],
    "Brand Strategy & Messaging": [
      "Design a logo for [BRAND] that visually represents: [MISSION STATEMENT]. The mark should communicate brand promise at a glance, differentiate from [MAIN COMPETITORS], and appeal to [SPECIFIC CUSTOMER SEGMENT]. Explain the strategic thinking behind visual metaphors and design choices.",
      "Create a logo system for a brand in transition from [CURRENT POSITIONING] to [NEW POSITIONING]. The logo should: honor brand heritage, signal evolution, appeal to both existing and new audiences, and work across traditional and emerging platforms. Explain the strategic bridge.",
      "Design a logo for [COMPANY] that reflects: core values [LIST], unique market position [DESCRIBE], competitive advantage [EXPLAIN]. Ensure the logo tells the brand story visually. Include a brand brief explaining what the visual metaphor represents and why.",
      "Generate a logo concept for [STARTUP/BRAND] in [INDUSTRY] targeting [DEMOGRAPHIC]. The design should communicate: credibility and innovation (if B2B), approachability (if consumer), and differentiator from incumbents. Explain market positioning through visual language.",
      "Create a logo redesign strategy for [ESTABLISHED BRAND] that: modernizes without losing equity, maintains recognition, appeals to [NEW TARGET SEGMENT], signals evolution. Show how the redesign respects brand heritage while showing growth and relevance.",
      "Design a co-branded or partnership logo for [BRAND A] + [BRAND B]. The mark should: balance both identities equally, communicate synergy/collaboration, work standalone for each brand, and create something distinctly new. Explain the visual metaphor for the partnership."
    ],
    "Technical & Implementation": [
      "Create a logo with specific technical requirements: must render clearly at [SMALLEST SIZE], work in [SPECIFIC COLOR SPACE, e.g., Pantone, CMYK], be reproducible across [APPLICATIONS: print, digital, embroidery, metal]. Provide specifications: file formats, color codes, clear space, minimum sizes.",
      "Design a logo system with detailed specifications: primary logo, secondary marks, icon/app version, favicon version, animated variant. For each, provide: dimensions, file formats (SVG, PNG, PDF), color variants (full color, black, white, inverted), clear space, and usage guidelines.",
      "Generate a logo optimized for [SPECIFIC APPLICATION: app icon, social media favicon, merchandise embroidery, vehicle wrap]. The design must: function at the required size, work with technical constraints, remain recognizable, maintain brand consistency. Explain adaptations made.",
      "Create a logo with a scalability strategy. Show: full-size version, 1:1 ratio thumbnail, minimal favicon form, simple line version for black/white printing, pattern/tile variation. Explain how the design simplifies without losing recognition at each scale.",
      "Design a logo that works across these media: digital screens (RGB), print materials (CMYK), physical merchandise (embroidery/engraving), video backgrounds. Provide technical specifications, color adaptations, and application guidelines for each medium.",
      "Generate a responsive logo strategy for [BRAND]: horizontal lockup for desktop, stacked version for mobile, icon-only version for small spaces, animated version for video/web. Specify dimensions, safe areas, and responsive behavior rules for each format."
    ],
    "Industry-Specific Approaches": [
      "Design a logo for a [SPECIFIC INDUSTRY: fintech, healthcare, education, sustainability, luxury] brand named [COMPANY]. The logo must communicate: industry credibility, regulatory compliance (if applicable), target audience values, and competitive differentiation. Explain industry-specific visual language choices.",
      "Create a logo for [NONPROFIT/SOCIAL IMPACT ORGANIZATION]. The design should: communicate mission [DESCRIBE], inspire trust and support, work well in black/white (for donors), convey professionalism and impact. Explain how visual language builds donor confidence and stakeholder alignment.",
      "Generate a logo for [LUXURY/PREMIUM BRAND]. The design should communicate: exclusivity, craftsmanship, heritage (if applicable), quality perception. Requirements: sophistication without complexity, timelessness, premium material/finish considerations, elevated aesthetics.",
      "Design a logo for a [TECH/STARTUP BRAND] in [SPECIFIC SECTOR: AI, blockchain, biotech, climate]. The mark should: signal innovation and forward-thinking, convey technical credibility, appeal to investors and users, differentiate from both traditional and tech competitors.",
      "Create a logo for a [SUSTAINABILITY/ECO-FRIENDLY BRAND]. The design should: authentically communicate environmental values, avoid greenwashing clichés, appeal to conscious consumers, work across sustainable materials and packaging. Explain the sustainability angle.",
      "Design a logo for [CULTURAL/CREATIVE BRAND: music, art, film, publishing]. The mark should: reflect creative identity, appeal to cultural audiences, be distinctive in crowded creative spaces, work across digital and physical cultural touchpoints. Explain the cultural positioning."
    ]
  }

  const faqs = [
    {
      question: "What makes a logo design effective and timeless?",
      answer: "Effective logos balance simplicity with distinctiveness. They are: memorable at all sizes, work in color and monochrome, convey brand personality or values, differentiate from competitors, and avoid trendy design elements that quickly date. Timeless logos often have strong conceptual foundations that age well—think Apple, Nike, or WWF. They prioritize clarity and meaning over decoration."
    },
    {
      question: "Should I use a mark, wordmark, or combination logo?",
      answer: "It depends on brand strategy. Marks (symbols) work well for established brands or when brand recognition is high. Wordmarks suit newer brands that benefit from visibility. Combination marks offer flexibility—the mark stands alone for apps/favicons, while the wordmark works for headers. Consider industry norms: tech favors minimal marks, professional services often use wordmarks, consumer brands use combinations."
    },
    {
      question: "How do I ensure my logo works across all applications?",
      answer: "Design with scalability in mind from the start. Create your primary logo at large size with sufficient detail. Then systematically reduce and simplify: 1) Full-size version with all detail, 2) Medium size (300x300px) with slightly simplified detail, 3) Favicon size (64x64px) showing only the strongest forms, 4) Line-only monochrome version. Test each at actual sizes. Provide clear space guidelines and minimum size specifications."
    },
    {
      question: "What color palette should I use for a logo?",
      answer: "Limit primary palettes to 2-3 colors maximum for recognition and versatility. Choose colors with psychological alignment to brand values: blue for trust/stability, green for growth/sustainability, red for energy/passion, purple for creativity/luxury. Ensure colors work in CMYK (print), RGB (digital), and black/white. Test color combinations for contrast and accessibility. Consider that colors may reproduce differently across media."
    },
    {
      question: "How do I avoid logo design clichés in my industry?",
      answer: "Research competitor logos deeply to identify visual patterns and clichés. In tech, gradient and geometric forms dominate; in luxury, minimalism and elegant serif typography; in healthcare, wellness symbols and blues are overused. Find the genuine differentiator—what makes your brand unique?—and design visually for that. Original concepts grounded in brand strategy always stand out more than copying trendy styles."
    },
    {
      question: "Should I redesign my existing logo or keep it?",
      answer: "Redesign if: the logo feels dated and hurts brand perception, your brand position has shifted significantly, or competitors have moved ahead. Keep it if: it has strong equity and recognition, it still accurately represents your brand, and it functions well across modern applications. Often the best approach is subtle refinement—clean up proportions, update typography, simplify detail—rather than complete redesign."
    },
    {
      question: "How important is the logo concept or story behind it?",
      answer: "The concept is crucial—it\'s the difference between a decorative mark and a meaningful symbol. The best logos have clear conceptual foundations: they visualize the brand mission, represent a core value, or communicate key differentiators. When you can explain your logo in one sentence—why it looks the way it does—you\'ve found the concept. This clarity makes the logo more memorable and meaningful."
    },
    {
      question: "What file formats do I need for my final logo?",
      answer: "Essential formats: SVG (vector, scalable), PDF (print-ready), PNG (transparent background), and high-resolution JPG. Provide multiple versions: full color, black/white, monochrome, inverted. Include specifications: dimensions, safe area/clear space, color codes (RGB, CMYK, Pantone if applicable), and minimum size recommendations. Organize in a brand guidelines document for consistency across applications."
    },
    {
      question: "How do I choose between trendy and timeless design?",
      answer: "Trendy elements age quickly (specific gradient styles, exaggerated effects, dated typography). Timeless design focuses on strong fundamentals: clear concept, excellent proportions, meaningful form. Use trendy elements sparingly, if at all, in secondary materials—not the core logo. A logo should feel contemporary without relying on ephemeral trends. When in doubt, choose timeless foundations with subtle contemporary touches."
    },
    {
      question: "How do I test if my logo design is working?",
      answer: "Test across: (1) Size—from favicon to billboard, (2) Media—digital screens, printed materials, physical applications, (3) Color—full color, black/white, single color, (4) Context—on website, business cards, merchandise, social, (5) Recognition—show to target audience without explanation; can they identify the brand? (6) Longevity—does it feel like it will age well? (7) Differentiation—does it stand out from competitors? Iterate based on feedback."
    }
  ]

  const relatedPages = [
    { title: "AI Detection Prompts", href: "/ai-detection-prompts", color: "#EF4444" },
    { title: "AI Content Detection Prompts", href: "/ai-content-detection-prompts", color: "#F97316" },
    { title: "Turnitin AI Prompts", href: "/turnitin-ai-prompts", color: "#DC2626" },
    { title: "AI Video Generator Prompts", href: "/ai-video-generator-prompts", color: "#7C3AED" },
    { title: "AI Face Swap Prompts", href: "/ai-face-swap-prompts", color: "#EC4899" },
    { title: "AI Image Upscaler Prompts", href: "/ai-image-upscaler-prompts", color: "#06B6D4" },
    { title: "Craiyon AI Prompts", href: "/craiyon-ai-prompts", color: "#FBBF24" },
    { title: "AI Headshot Prompts", href: "/ai-headshot-prompts", color: "#3B82F6" }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AI Logo Generator Prompts - Professional Design Techniques for Brand Identity",
            description: "Advanced prompts for generating AI-designed logos using professional design principles, brand strategy, visual aesthetics, and technical specifications for modern logo creation.",
            image: "https://gptprompts.ai/og-ai-logo-generator.jpg",
            datePublished: "2026-03-29",
            dateModified: "2026-03-29",
            author: { "@type": "Organization", name: "GPT Prompts AI" }
          })
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-lg mb-6">
            <span className="text-[#8B5CF6] font-semibold text-sm">Design & Branding</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">AI Logo Generator Prompts</h1>
          <p className="text-xl text-gray-400 max-w-3xl">Master the art of AI-assisted logo design with expert prompts for brand identity, visual strategy, and technical implementation. Learn professional design principles, aesthetic approaches, and practical specifications for creating memorable logos.</p>
        </div>

        <div className="grid gap-6 mb-16">
          {Object.entries(prompts).map(([category, categoryPrompts]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full"></div>
                {category}
              </h2>
              <div className="grid gap-4">
                {categoryPrompts.map((prompt, idx) => (
                  <CopyCard key={idx} title={`${category} - Prompt ${idx + 1}`} prompt={prompt} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Related Prompt Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedPages.map((page, idx) => (
              <Link key={idx} href={page.href} className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#8B5CF6] transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white group-hover:text-[#8B5CF6] transition-colors">{page.title}</h3>
                  <div className="w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: page.color }}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 text-center">
          <p className="text-gray-400 mb-4">Need custom AI logo generation prompts for your specific brand or design style?</p>
          <Link href="/contact" className="inline-block bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold py-3 px-8 rounded transition-colors">Get Custom Prompts</Link>
        </div>
      </div>
    </div>
  )
}
