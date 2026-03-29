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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#FBBF24] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#FBBF24] hover:bg-[#DBBF00] text-white font-medium py-2 px-4 rounded transition-colors">
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
        {open ? <ChevronUp className="w-5 h-5 text-[#FBBF24]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {open && <div className="bg-[#0a0a0a] p-6 border-t border-[#2a2a2a] text-gray-300">{answer}</div>}
    </div>
  )
}

export default function CrayonAIPrompts() {
  const prompts = {
    "Concept Development & Ideation": [
      "Design a character concept for [DESCRIPTION]. Include: distinctive visual traits, clothing/accessories style, color palette, personality expressed through pose and expression, and 3-5 visual variations showing different moods or contexts. Specify art style preference (realistic, anime, cartoon, abstract, etc.).",
      "Create a mood board concept for [PROJECT/BRAND]. Generate 5-8 visual scenes that capture the essence of: [KEY ATTRIBUTES]. Include lighting style, color schemes, composition patterns, and thematic elements. Ensure visual coherence across all variations.",
      "Develop a landscape or environment concept for [SETTING]. Include: terrain features, vegetation/flora, architectural elements if applicable, time of day/lighting conditions, atmospheric effects (weather, mist, etc.), and color palette. Show 3-4 variations with different perspectives.",
      "Design a product or object concept for [PURPOSE]. Specify: form factor, materials/textures suggested by appearance, functional details, scale context, color and material options, and styling. Include lifestyle context showing how it would be used.",
      "Create a fashion/costume design for [CHARACTER/CONTEXT]. Include: silhouette and fit, fabric textures and patterns, color combinations, accessories and details, footwear, and 2-3 pose variations showing movement and practicality.",
      "Develop a world-building visual for [FICTIONAL UNIVERSE]. Generate: architecture style, technology level, cultural aesthetic, environmental conditions, flora/fauna, color palette, and 3-4 different location types within that world."\n    ],
    "Style Refinement & Iteration": [
      "Take this concept: [DESCRIPTION]. Refine it in the style of [SPECIFIC ARTIST/MOVEMENT/GENRE]. Adjust: composition, color grading, detail level, rendering technique, atmosphere, and emotional impact. Specify whether to maintain original elements or reimagine completely.",
      "Enhance [DESCRIPTION] with professional illustration techniques. Include: improved anatomy/proportions, sophisticated lighting and shading, atmospheric perspective, dynamic composition, and rendering quality matching [REFERENCE STYLE]. Specify target medium (digital painting, gouache, watercolor, etc.).",
      "Create [DESCRIPTION] in multiple art styles simultaneously: (1) [STYLE 1], (2) [STYLE 2], (3) [STYLE 3], (4) [STYLE 4]. Ensure each maintains core concept while expressing distinct aesthetic. Show how style choice affects mood and appeal.",
      "Refine [CHARACTER/OBJECT] for [TARGET AUDIENCE]. Adjust: visual appeal to demographic, complexity/simplicity balance, color psychology for target preference, detail level for age/interest, and overall polish. Specify the specific audience demographic.",
      "Create a premium/luxury version of [DESCRIPTION]. Enhance: materials and finishes, detail and craftsmanship implied, color sophistication, compositional elegance, lighting complexity, and overall prestige signaling.",
      "Simplify [COMPLEX DESCRIPTION] into a clean, minimal design. Reduce to essential visual elements, streamline forms, limit color palette to 3-4 key colors, improve negative space usage, and enhance clarity. Specify style: modern, geometric, flat design, etc."\n    ],
    "Photorealism & Technical Rendering": [
      "Generate a photorealistic image of [SUBJECT]. Specify: camera angle and lens type (wide, macro, telephoto), lighting setup (natural, studio, mixed), time of day/weather conditions, environment/background context, and depth of field (sharp focus areas). Include material realism for textures.",
      "Create a hyperrealistic render of [PRODUCT/OBJECT]. Include: material authenticity (metal finish, fabric weave, glass transparency, etc.), accurate proportions and mechanical detail, professional product photography lighting, neutral or branded background, and style suggestion (minimalist, lifestyle, artistic).",
      "Generate a cinematic scene of [SCENARIO]. Specify: camera movement/angle, lighting design (key light, fill, backlighting), atmospheric conditions (fog, particles, weather), color grading (warm, cool, cinematic), depth, and composition style. Include mood descriptor.",
      "Create a portrait of [PERSON/CHARACTER] with photorealistic detail. Specify: pose and angle, lighting (studio, natural, dramatic), expression and emotion, background context or blur level, skin tone accuracy, eye detail, and hair texture realism.",
      "Generate an architectural visualization of [BUILDING/SPACE]. Include: exterior/interior perspective choice, materials and finishes, lighting conditions and time, landscaping/surroundings, weather/sky conditions, and interior detail level. Specify whether to show day, night, or both.",
      "Create a still life or product arrangement of [ITEMS]. Specify: composition style (symmetrical, rule of thirds, etc.), lighting (soft key light, harsh, overhead, etc.), background (plain, textured, thematic), shadow detail, reflection/specularity, and overall mood."\n    ],
    "Creative Prompt Engineering for Unique Results": [
      "Generate [SUBJECT] from an unusual perspective: [SPECIFIC ANGLE/VIEWPOINT]. Include: unconventional composition, exaggerated proportions or scale, unexpected context or juxtaposition, dramatic lighting to enhance the unusual view, and surreal or fantastical elements if desired.",
      "Combine [CONCEPT 1] + [CONCEPT 2] + [CONCEPT 3] into a cohesive image. Specify: how elements relate (merged, side-by-side, layered), visual hierarchy (what's dominant), color unity strategy, style consistency, and the mood or story this combination creates.",
      "Create a [TIME PERIOD/GENRE] interpretation of [MODERN SUBJECT]. Specify: historical accuracy level to reference, style cues to include (clothing, design, materials), anachronistic elements to keep or remove, and mood/tone of the era.",
      "Generate [DESCRIPTION] with exaggerated [SPECIFIC QUALITY]. Amplify: color saturation/vibrancy, size contrast, emotional expression, texture/detail level, or lighting drama. Specify the degree of exaggeration (subtle, moderate, extreme) and maintain recognizability.",
      "Create a [DESCRIPTION] that tells a story or suggests narrative. Include: compositional elements that imply action/movement, character interaction or emotion, environmental clues about context, lighting that emphasizes focal point, and visual tension or resolution.",
      "Generate [SUBJECT] in a deliberately unconventional color palette. Specify: which colors to use (e.g., monochromatic, limited palette, inverted, etc.), how to maintain recognition despite color change, mood created by palette choice, and any color-symbolic meaning to emphasize."\n    ],
    "Quality Control & Iteration Refinement": [
      "Evaluate this generated image: [DESCRIPTION OF RESULT]. Identify: anatomical or proportional issues, lighting inconsistencies, composition problems, color harmony issues, and technical artifacts (oversaturation, blurriness, weird details). Suggest specific prompt improvements for next iteration.",
      "Refine this prompt for better results: [ORIGINAL PROMPT]. Improve specificity in: visual elements, style references, technical parameters (camera, lighting), composition guidance, and emotional tone. Provide 3 alternative prompt variations with increasing specificity.",
      "Generate [DESCRIPTION] and compare to reference image [REFERENCE]. Identify: what matches well, what doesn't align, proportion differences, color/lighting variations, style inconsistencies, and texture differences. Suggest prompt modifications to improve accuracy.",
      "Create variations of [CONCEPT] focusing on quality improvements: (1) Higher detail/complexity version, (2) Cleaner/more polished version, (3) More stylized/artistic version, (4) More realistic/technical version. Specify which version best achieves [DESIRED OUTCOME].",
      "Generate [SUBJECT] and optimize through iteration: (1) Initial version, (2) With improved [SPECIFIC ELEMENT], (3) With refined [DIFFERENT ELEMENT], (4) Final polish with all improvements. Document what prompt adjustments drove each improvement.",
      "Troubleshoot common Craiyon issues with [DESCRIPTION]: Handle: hands/fingers complexity, text accuracy, anatomical proportions, background/foreground separation, material realism, and detail consistency. Provide prompt strategies that reduce known AI weaknesses."\n    ]
  }

  const faqs = [
    {
      question: "What makes Craiyon different from other AI image generators?",
      answer: "Craiyon is accessible, free to use, and requires no API keys or account setup for basic generation. It excels at creative, stylized images and handles artistic directions well. Compared to DALL-E or Midjourney, Craiyon may have less photorealism precision but offers more creative experimentation with fewer restrictions. It's ideal for rapid ideation, concept exploration, and artistic projects where style matters more than pixel-perfect accuracy."
    },
    {
      question: "How do I craft Craiyon prompts for consistent results?",
      answer: "Be specific about: (1) What you want (subject, composition), (2) How it should look (art style, media type), (3) Technical details (lighting, camera angle, perspective), (4) Mood/atmosphere (color palette, emotional tone). Use reference style names (anime, oil painting, 3D render, etc.) and avoid vague adjectives. Iterate: if a result doesn't match your vision, modify one element at a time (style first, then composition, then details) to identify what drives the output."
    },
    {
      question: "Can Craiyon handle text and logos?",
      answer: "Craiyon struggles with text accuracy and logo precision. AI image generators generally produce illegible or distorted text. If you need text-heavy designs, use: vector design tools (Figma, Adobe Illustrator) for the text layer, and Craiyon for visual elements/backgrounds. For logos, use Craiyon for concept exploration and style inspiration, but refine final designs in proper design software for accuracy and scalability."
    },
    {
      question: "What are the best practices for handling anatomical challenges?",
      answer: "Craiyon (like most AI generators) struggles with hands, feet, and complex anatomy. Strategies: (1) Frame subjects to hide problem areas (portraits without visible hands, full-body shots at distance), (2) Use specific pose language (hands in pockets, hands together, hands behind back), (3) Reference realistic proportions in prompts, (4) Generate multiple variations and cherry-pick, (5) Use post-processing tools to fix anatomical details, or (6) Commission humans for anatomically critical work."
    },
    {
      question: "How does Craiyon handle batch generation and replication?",
      answer: "Craiyon's free tier generates 9 variations per prompt with no seed control, meaning exact replication is difficult. To get similar results: (1) Use identical prompts with slight wording variation, (2) Keep successful prompt versions for future reference, (3) Describe style and composition precisely so variations stay coherent, (4) Generate multiple batches and aggregate the best results. The paid tier (Craiyon Plus) offers more control and faster generation but still has inherent variation."
    },
    {
      question: "What's the best Craiyon workflow for professional design projects?",
      answer: "Use Craiyon for ideation and concept exploration, not final assets: (1) Generate multiple concept variations quickly, (2) Use successful results as reference/inspiration for professional designers, (3) Export chosen concepts and refine in design software (Figma, Adobe), (4) Adjust color, composition, and technical accuracy in the professional tool, (5) Use Craiyon output as mood board/direction for human-created work. This hybrid approach combines AI creativity with professional precision."
    },
    {
      question: "How can I improve Craiyon's handling of specific art styles?",
      answer: "Specify art movements or artists by name: instead of 'painterly,' say 'oil painting in the style of Van Gogh' or 'impressionist landscape.' Include technical style parameters: 'watercolor with visible brushstrokes,' 'digital painting with soft lighting,' '3D rendered with ray tracing.' Reference multiple influences: 'anime meets Art Deco' or 'cyberpunk noir with Japanese design.' Test style combinations iteratively to find which prompt language produces your desired aesthetic with Craiyon's engine."
    },
    {
      question: "Can Craiyon generate consistent character designs across multiple images?",
      answer: "Craiyon has no seed/consistency controls like some competitors, so exact character replication is challenging. Workarounds: (1) Describe character traits exhaustively (specific hair color, outfit details, distinguishing features) in every prompt, (2) Generate multiple variations in one batch and select matching ones, (3) Use consistent art style language across prompts, (4) Describe pose and context precisely to improve consistency, (5) For critical consistency, use Midjourney or DALL-E 3 with seed/style control, or commission character design work."
    },
    {
      question: "How should I approach photorealism with Craiyon?",
      answer: "Craiyon handles photorealism adequately but not at professional photograph quality compared to DALL-E 3 or Midjourney's photorealism modes. Best practices: (1) Use 'photorealistic,' 'cinematic,' or 'hyper-realistic' descriptors, (2) Specify lighting setup (key light, studio lighting, natural light) to improve realism, (3) Include detailed material descriptions (metal, fabric, glass properties), (4) Use professional photography terminology (depth of field, focal length, composition style), (5) Accept that some technical precision will be lost compared to actual photography, (6) Use for mood/direction, not final product."
    },
    {
      question: "What's the optimal prompt length and structure for Craiyon?",
      answer: "Craiyon works well with detailed but focused prompts (50-150 words). Structure: (1) Main subject/concept, (2) Art style/media type, (3) Composition and perspective, (4) Lighting and atmosphere, (5) Color palette or mood. Avoid: overstuffing with contradictions, using too many parentheses, including negative descriptions (AI can misinterpret). Test shorter prompts (subject + style) vs. detailed ones to find Craiyon's sweet spot for your use case. Shorter often works for established styles; detailed works better for unique combinations."
    }
  ]

  const relatedPages = [
    { title: "AI Detection Prompts", href: "/ai-detection-prompts", color: "#EF4444" },
    { title: "AI Content Detection Prompts", href: "/ai-content-detection-prompts", color: "#F97316" },
    { title: "Turnitin AI Prompts", href: "/turnitin-ai-prompts", color: "#DC2626" },
    { title: "AI Video Generator Prompts", href: "/ai-video-generator-prompts", color: "#7C3AED" },
    { title: "AI Face Swap Prompts", href: "/ai-face-swap-prompts", color: "#EC4899" },
    { title: "AI Image Upscaler Prompts", href: "/ai-image-upscaler-prompts", color: "#06B6D4" },
    { title: "AI Headshot Prompts", href: "/ai-headshot-prompts", color: "#3B82F6" },
    { title: "AI Logo Generator Prompts", href: "/ai-logo-generator-prompts", color: "#8B5CF6" }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Craiyon AI Prompts - Advanced Techniques for Creative Image Generation",
            description: "Expert prompts for generating creative, stylized images with Craiyon AI, including concept development, style refinement, photorealism techniques, and quality control strategies.",
            image: "https://gptprompts.ai/og-craiyon-ai.jpg",
            datePublished: "2026-03-29",
            dateModified: "2026-03-29",
            author: { "@type": "Organization", name: "GPT Prompts AI" }
          })
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-[#FBBF24]/10 border border-[#FBBF24]/30 rounded-lg mb-6">
            <span className="text-[#FBBF24] font-semibold text-sm">Creative Image Generation</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">Craiyon AI Prompts</h1>
          <p className="text-xl text-gray-400 max-w-3xl">Master the art of prompt engineering for Craiyon with expert techniques for concept development, style refinement, and creative image generation. Learn to achieve consistent, professional results through strategic prompt design and iteration strategies.</p>
        </div>

        <div className="grid gap-6 mb-16">
          {Object.entries(prompts).map(([category, categoryPrompts]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#FBBF24] rounded-full"></div>
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
              <Link key={idx} href={page.href} className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#FBBF24] transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white group-hover:text-[#FBBF24] transition-colors">{page.title}</h3>
                  <div className="w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: page.color }}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 text-center">
          <p className="text-gray-400 mb-4">Need custom Craiyon prompts for your creative project?</p>
          <Link href="/contact" className="inline-block bg-[#FBBF24] hover:bg-[#DBBF00] text-white font-bold py-3 px-8 rounded transition-colors">Get Custom Prompts</Link>
        </div>
      </div>
    </div>
  )
}
