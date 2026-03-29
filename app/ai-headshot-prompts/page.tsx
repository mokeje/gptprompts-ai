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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#3B82F6] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#1D4ED8] text-white font-medium py-2 px-4 rounded transition-colors">
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
        {open ? <ChevronUp className="w-5 h-5 text-[#3B82F6]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {open && <div className="bg-[#0a0a0a] p-6 border-t border-[#2a2a2a] text-gray-300">{answer}</div>}
    </div>
  )
}

export default function AIHeadshotPrompts() {
  const prompts = {
    "Professional Headshot Fundamentals": [
      "Generate a professional LinkedIn headshot of a [PROFESSION] with a [SKIN TONE] complexion, [FACIAL FEATURES], wearing [PROFESSIONAL ATTIRE]. Studio background, natural lighting, neutral expression, business-appropriate. High resolution, suitable for corporate profiles. Ensure realistic facial proportions and professional appearance.",
      "Create a corporate headshot featuring someone who appears to be [AGE RANGE] with [HAIR STYLE/COLOR], [SKIN TONE]. Professional clothing appropriate for [INDUSTRY]. Warm, approachable expression. Soft studio lighting. Plain neutral background. Medium shot from shoulders up. Professional and trustworthy appearance.",
      "Generate a headshot of a [PROFESSION] in professional attire, [FACIAL FEATURES], [SKIN TONE]. Natural, confident expression. Professional studio setting with subtle background. Lighting emphasizes facial features. Corporate-appropriate styling. Head and shoulders composition. Suitable for professional directories and business cards.",
      "Create a business headshot with [SPECIFIC STYLE REQUIREMENTS] for a [ROLE/INDUSTRY]. [PERSON DESCRIPTION]. Professional makeup and grooming. Well-lit studio environment. Neutral or subtle background. Direct eye contact with the camera. Professional confidence and approachability evident.",
      "Generate a professional portrait of [DESCRIPTION] suitable for [PROFESSIONAL CONTEXT]. Clear facial features. Professional clothing appropriate for the industry. Studio lighting that's flattering. Neutral background that doesn't distract. Composition from shoulders up. Realistic and professional appearance.",
      "Create a headshot for [PROFESSION] featuring [SPECIFIC ATTRIBUTES]. Professional styling and grooming. Well-executed studio lighting. Subtle background color or white/gray. Natural, confident expression. No unusual styling or distracting elements. Suitable for professional use."
    ],
    "Styling & Fashion Guidance": [
      "Generate a headshot of [PERSON DESCRIPTION] wearing a [SPECIFIC COLOR] [GARMENT TYPE] that's professional and flattering. Neckline style: [NECKLINE TYPE]. Jewelry: [JEWELRY DESCRIPTION]. Hair styling: [HAIR STYLE]. Professional appearance appropriate for [CONTEXT]. Studio lighting, neutral background.",
      "Create a headshot featuring professional attire in [COLOR PALETTE]. The outfit should convey [DESIRED IMPRESSION] while remaining business-appropriate. Styling elements: [SPECIFIC DETAILS]. Grooming and makeup: [DESCRIPTION]. Overall appearance should suggest [PROFESSIONAL QUALITIES].",
      "Generate a headshot with coordinated professional styling. Color scheme: [COLORS]. Garment fit: [FIT DESCRIPTION]. Accessories: [ACCESSORY TYPES]. Hair and makeup: [STYLING]. The overall look should be [ADJECTIVES] while maintaining corporate professionalism.",
      "Create a headshot with [DRESS CODE LEVEL] professional attire. Specific garment: [GARMENT]. Color: [COLOR]. Styling approach: [APPROACH]. The outfit should complement [PHYSICAL CHARACTERISTICS] and suggest [PROFESSIONAL ATTRIBUTES].",
      "Generate a headshot featuring fashion-forward professional styling. Garment selection: [SPECIFIC ITEMS]. Color coordination: [COLORS]. Style personality: [PERSONALITY]. Professional credibility: maintained. Studio presentation with appropriate lighting.",
      "Create a headshot with industry-specific professional attire. Field: [INDUSTRY]. Appropriate clothing: [GARMENTS]. Color scheme that suggests: [IMPRESSIONS]. Styling that conveys: [ATTRIBUTES]. Professional quality and trustworthiness evident."
    ],
    "Background & Lighting Techniques": [
      "Generate a headshot with a [BACKGROUND COLOR] background. Lighting setup: [LIGHTING DESCRIPTION]. Key light positioning: [POSITION]. Fill light: [FILL DESCRIPTION]. Background light: [BACKGROUND LIGHTING]. Overall effect: [DESIRED EFFECT]. Subject: [PERSON DESCRIPTION]. Professional studio quality.",
      "Create a headshot with [BACKGROUND STYLE] background. Depth of field: [DOF DESCRIPTION]. Lighting: [LIGHTING TYPE]. Key features: clear facial features, professional appearance, appropriate shadow detail. Ensure background complements without distracting.",
      "Generate a professional headshot with [SPECIFIC BACKGROUND] behind the subject. Lighting approach: [LIGHTING METHOD]. Shadows: [SHADOW QUALITY]. Highlights: [HIGHLIGHT QUALITY]. Overall: [PROFESSIONAL QUALITY DESCRIPTOR]. Subject: [PERSON DESCRIPTION].",
      "Create a headshot with optimal lighting for [SKIN TONE]. Background: [BACKGROUND DESCRIPTION]. Lighting angles: [ANGLES]. Falloff: [FALLOFF DESCRIPTION]. This lighting should enhance [FACIAL FEATURES] while maintaining professional appearance.",
      "Generate a headshot with [BACKGROUND SETUP]. Lighting quality: [QUALITY DESCRIPTION]. Catchlights in eyes: [DESCRIPTION]. Skin tone: [TONE]. Overall brightness: [BRIGHTNESS LEVEL]. Professional studio standards maintained.",
      "Create a professional headshot with [BACKGROUND COLOR/STYLE]. Lighting positioned to: [GOALS]. Facial planes: [DESCRIPTION]. Overall contrast: [CONTRAST LEVEL]. Professional, flattering, corporate-appropriate result."
    ],
    "Expression & Posture Coaching": [
      "Generate a headshot of [PERSON DESCRIPTION] with a [EXPRESSION TYPE] expression. Head tilt: [TILT DESCRIPTION]. Shoulder position: [POSITION]. Eyes: [EYE DIRECTION AND EXPRESSION]. Mouth: [MOUTH EXPRESSION]. Overall feeling: [EMOTION/IMPRESSION]. Professional and appropriate for [CONTEXT].",
      "Create a headshot featuring a [CONFIDENCE LEVEL] expression. Head angle: [ANGLE]. Gaze: [GAZE DIRECTION]. Mouth: slightly [MOUTH STATE]. Overall energy: [ENERGY LEVEL]. Posture suggests: [ATTRIBUTES]. Professional appearance maintained.",
      "Generate a headshot with [SPECIFIC EXPRESSION] that conveys [INTENDED IMPRESSION]. Head position: [POSITION]. Facial muscles: [DESCRIPTION]. Eyes engaged: [YES/NO]. Smile: [SMILE TYPE]. Approachability: [LEVEL]. Professional context: [CONTEXT].",
      "Create a headshot of [PERSON] with an expression that balances [ATTRIBUTES]. Natural smile: [SMILE DESCRIPTION]. Eye contact: [CONTACT TYPE]. Head angle: [ANGLE]. Overall: [PROFESSIONAL QUALITY]. Suitable for [USE CASE].",
      "Generate a professional headshot with [POSTURAL DESCRIPTION]. Expression: [EXPRESSION]. Eye engagement: [ENGAGEMENT]. Chin position: [POSITION]. Shoulders: [POSITION]. Face: [FACE QUALITY]. Overall confidence: [LEVEL]. Corporate-appropriate.",
      "Create a headshot featuring [SPECIFIC POSE]. Expression suggesting: [ATTRIBUTES]. Head angle: [ANGLE]. Facial tension: [LEVEL]. Authenticity: high. Professional credibility: evident. Suitable for: [PROFESSIONAL CONTEXT]."
    ],
    "Diversity & Representation": [
      "Generate a professional headshot of someone with [ETHNICITY] heritage, [SKIN TONE], [FACIAL FEATURES], [HAIR TEXTURE/STYLE]. Professional attire: [CLOTHING]. Cultural authenticity: respected. Representation: authentic and respectful. Studio lighting optimized for [SKIN TONE]. Professional quality.",
      "Create a headshot representing [SPECIFIC IDENTITY]. Appearance: [DESCRIPTION]. Styling: culturally appropriate and respectful. Lighting and makeup: optimized for [CHARACTERISTICS]. Professional context: [CONTEXT]. Inclusivity: evident. Professional standards: maintained.",
      "Generate a diverse professional headshot. Individual characteristics: [DESCRIPTION]. Professional presentation: [DESCRIPTION]. Background: [BACKGROUND]. Lighting approach: inclusive and flattering. Overall: respectful representation and professional credibility.",
      "Create a headshot of [PERSON DESCRIPTION]. Professional appearance: [APPEARANCE TYPE]. Age representation: authentic. Gender presentation: [PRESENTATION]. Professional context: [CONTEXT]. Authenticity: evident. Quality: corporate-standard.",
      "Generate a headshot celebrating [CHARACTERISTICS]. Professional styling appropriate for [CONTEXT]. Authenticity in features: maintained. Lighting and technique: professional. Representation: positive and respectful. Suitability: [PROFESSIONAL USE CASES].",
      "Create an inclusive professional headshot. Individual presentation: [DESCRIPTION]. Cultural respect: evident. Professional standards: maintained. Lighting and composition: professional quality. Context: [PROFESSIONAL SETTING]. Representation: authentic and dignified."
    ]
  }

  const faqs = [
    {
      question: "What makes an effective AI-generated headshot?",
      answer: "An effective AI-generated headshot combines several elements: clear, well-lit facial features with realistic proportions, professional attire appropriate for the industry, a neutral or subtle background that doesn't distract, natural and confident expression, and proper composition (typically shoulders up). The image should look polished and trustworthy—suitable for LinkedIn, corporate websites, and professional directories. Avoid over-processed or overly filtered appearances."
    },
    {
      question: "How do I ensure my headshot looks authentic and realistic?",
      answer: "Prompt for specific details about facial features, natural expressions, professional studio lighting, and realistic skin tones. Avoid asking for heavily filtered, overly smoothed, or obviously artificial-looking results. Use reference descriptions that match real professional standards. Specify that you want realistic proportions and natural appearance. Request that distracting elements or obviously AI-generated artifacts be avoided. Review and regenerate if something feels 'off' about the proportions or expression."
    },
    {
      question: "What lighting setups work best for AI-generated headshots?",
      answer: "Professional headshot lighting typically uses a key light (main light source) positioned at 45 degrees to the subject, a fill light to soften shadows, and subtle background lighting for separation. This classic setup flatters most faces. Specify soft, diffused light rather than harsh direct light. Mention studio lighting or professional photography setup. Ensure facial features are clearly visible and shadows create dimension without obscuring details. Avoid flat, shadowless lighting which looks unnatural."
    },
    {
      question: "How do I choose appropriate professional attire in the prompt?",
      answer: "Consider your industry: tech and creative fields often prefer smart casual or creative professional wear, corporate finance prefers traditional suits, medical and legal fields prefer formal business attire. Specify garment type (blazer, button-up, dress), color (which should complement your skin tone), and neckline style. Ensure the clothing is wrinkle-free and well-fitted. Specify neutral or complementary colors unless your brand requires otherwise. Professional grooming and minimal, tasteful jewelry complete the look."
    },
    {
      question: "Can I use AI headshots for LinkedIn and professional profiles?",
      answer: "Yes, AI-generated headshots are increasingly used on professional platforms. Ensure the image meets the platform's image quality standards. Many professionals prefer AI headshots that look like high-quality professional photography. However, be aware of platform policies and industry norms—some traditional industries may have expectations about authenticity. Disclose AI generation if required by your platform. Quality, professionalism, and authenticity in appearance are more important than the source."
    },
    {
      question: "What should I do if the AI-generated facial proportions look off?",
      answer: "If proportions seem unrealistic, regenerate with more specific prompts about facial features you want. Describe eye spacing, nose shape, chin shape, or other features more precisely. Reference that you want realistic, balanced proportions. Specify 'no exaggerations' or 'realistic human proportions.' Compare to professional headshots and note what looks different. Adjust your prompt to emphasize the specific elements that need adjustment. Sometimes simplifying the prompt and removing overly detailed descriptions helps."
    },
    {
      question: "How do I ensure diversity and authentic representation in headshots?",
      answer: "Specify ethnicity, skin tone, hair texture, and facial features clearly and respectfully in your prompt. Research proper terminology for the characteristics you're describing. Request culturally appropriate styling and grooming. Specify that representation should be respectful and authentic. Ensure lighting and makeup techniques are optimized for the specific skin tone and features. Review the result for authenticity—avoid stereotypical or caricatured representations. Authentic diversity looks more professional and trustworthy."
    },
    {
      question: "Should I smile or maintain a serious expression in professional headshots?",
      answer: "This depends on your industry and personal brand. Tech and creative industries often prefer warm, approachable smiles or neutral expressions. Corporate and finance often prefer more reserved, serious expressions. Legal and medical fields typically use professional, confident expressions with minimal smiling. Specify in your prompt whether you want a 'warm smile,' 'slight smile,' 'neutral expression,' or 'confident serious expression.' Ensure whatever expression you choose looks natural and authentic, not forced or uncomfortable."
    },
    {
      question: "What background works best for professional headshots?",
      answer: "Neutral backgrounds work best: white, light gray, soft blue, or subtle gradients. The background should not distract from your face or compete for attention. Avoid busy patterns, bright colors, or blurred detailed backgrounds that might look gimmicky. For corporate contexts, simple and understated is best. Some creative industries allow for more personality in backgrounds, but professionalism should always remain the priority. Specify 'studio background,' 'neutral,' or 'plain' to ensure the focus stays on you."
    },
    {
      question: "How often should I update my professional headshot?",
      answer: "Professional headshots should be updated every 2-3 years or whenever your appearance significantly changes (new hair color, major styling change, significant aging, etc.). Your headshot should look like you do now, not how you looked years ago. If you're actively job searching or using the image frequently for professional purposes, ensure it's current. AI-generated headshots make it easier to update regularly without expensive photography sessions. Keep multiple versions for different contexts (LinkedIn, corporate website, etc.)."
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
            headline: "AI Headshot Prompts - Professional Portrait Techniques for Authentic Results",
            description: "Advanced prompts for generating professional headshots using AI, including styling guidance, lighting techniques, expression coaching, and diversity-conscious representation strategies.",
            image: "https://gptprompts.ai/og-ai-headshot.jpg",
            datePublished: "2026-03-29",
            dateModified: "2026-03-29",
            author: { "@type": "Organization", name: "GPT Prompts AI" }
          })
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-lg mb-6">
            <span className="text-[#3B82F6] font-semibold text-sm">Professional Portraits & Styling</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">AI Headshot Prompts</h1>
          <p className="text-xl text-gray-400 max-w-3xl">Master professional headshot generation with expert prompts covering studio lighting, professional styling, authentic expressions, and inclusive representation. Create polished, trustworthy portraits suitable for LinkedIn, corporate profiles, and professional directories.</p>
        </div>

        <div className="grid gap-6 mb-16">
          {Object.entries(prompts).map(([category, categoryPrompts]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"></div>
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
              <Link key={idx} href={page.href} className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#3B82F6] transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white group-hover:text-[#3B82F6] transition-colors">{page.title}</h3>
                  <div className="w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: page.color }}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 text-center">
          <p className="text-gray-400 mb-4">Need custom AI headshot prompts for your specific professional context?</p>
          <Link href="/contact" className="inline-block bg-[#3B82F6] hover:bg-[#1D4ED8] text-white font-bold py-3 px-8 rounded transition-colors">Get Custom Prompts</Link>
        </div>
      </div>
    </div>
  )
}
