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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#EC4899] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#EC4899] hover:bg-[#DB2777] text-white font-medium py-2 px-4 rounded transition-colors">
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
        {open ? <ChevronUp className="w-5 h-5 text-[#EC4899]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {open && <div className="bg-[#0a0a0a] p-6 border-t border-[#2a2a2a] text-gray-300">{answer}</div>}
    </div>
  )
}

export default function AIFaceSwapPrompts() {
  const prompts = {
    "Face Swap Fundamentals": [
      "You are an expert in AI face-swapping techniques. Analyze this face-swap request: [INSERT REQUEST]. Evaluate: (1) Source and target faces clarity and lighting compatibility, (2) Technical feasibility given available tools, (3) Potential quality issues (blur, artifacts, lighting mismatch), (4) Recommended tool selection. Provide guidance for optimal results.",
      "Design a face-swap project workflow. Specify: (1) Optimal image resolution and format, (2) Lighting and angle requirements, (3) Pre-processing steps (background removal, color correction), (4) Post-processing refinement, (5) Quality assurance checkpoints. Project goal: [INSERT GOAL]",
      "Evaluate face compatibility for swapping. Analyze these faces: [INSERT DESCRIPTIONS]. Consider: (1) Face size and proportions, (2) Lighting angle consistency, (3) Skin tone differences, (4) Facial hair/features that may not transfer well. Provide swap feasibility rating and recommendations.",
      "Create a face-swap technical specification. Define: (1) Input requirements (image count, resolution, format), (2) Processing settings (blend intensity, edge feathering), (3) Quality standards (acceptable blur, artifact thresholds), (4) Output specifications. Context: [INSERT CONTEXT]",
      "Analyze potential face-swap failures and mitigations. For this scenario: [INSERT SCENARIO], identify: (1) Common failure points, (2) Why they occur, (3) Prevention strategies, (4) Recovery techniques if something goes wrong.",
      "Design a face-swap quality checklist. Create criteria for: (1) Facial feature alignment, (2) Edge blending smoothness, (3) Lighting consistency, (4) Skin tone matching, (5) Expression naturalness, (6) Artifact absence. Include acceptance thresholds."
    ],
    "Image Preparation & Processing": [
      "Prepare these source images for face-swapping: [INSERT IMAGE DESCRIPTIONS]. Specify: (1) Required pre-processing (crop, alignment, lighting correction), (2) Optimal resolution and aspect ratio, (3) Color space adjustments needed, (4) Face detection and alignment steps. Provide step-by-step preparation guide.",
      "Optimize image lighting for face-swapping. Analyze this image pair: [INSERT DESCRIPTIONS]. Determine: (1) Lighting mismatch between source and target, (2) Correction needed (brightness, contrast, shadows), (3) Color temperature alignment, (4) Whether additional lighting simulation is necessary.",
      "Design a face-swap editing workflow for multiple images. You have [NUMBER] source images to swap into [NUMBER] target images. Create: (1) Optimal processing order, (2) Batch processing approach, (3) Quality consistency strategies, (4) Timeline and resource estimates.",
      "Analyze facial feature preservation in swapping. For this pair: [INSERT DESCRIPTIONS], evaluate: (1) Which features will transfer well, (2) Which may require manual blending (eyes, eyebrows, hairline), (3) Where artifacts are likely, (4) Manual refinement steps needed.",
      "Create pre-swap alignment specifications. For these faces: [INSERT DESCRIPTIONS], define: (1) Eye position alignment targets, (2) Nose and mouth alignment, (3) Face rotation/tilt tolerance, (4) Overall face positioning. Include visual anchors.",
      "Design a color matching protocol for face-swapping. Analyze source and target: [INSERT DESCRIPTIONS]. Specify: (1) Skin tone analysis, (2) Color profile adjustments, (3) Foundation/makeup blending, (4) Hue and saturation corrections, (5) Verification checkpoints."
    ],
    "Advanced Face-Swap Techniques": [
      "Perform deep facial analysis for complex swaps. Analyze: [INSERT FACES]. Evaluate: (1) Bone structure compatibility, (2) How dramatic features (scars, marks, distinctive elements) will transfer, (3) Expression range limitations, (4) Whether temporal consistency (video frame-to-frame) is achievable.",
      "Design a face-swap for video content. Specify requirements: (1) Frame-by-frame consistency approach, (2) Optical flow and temporal smoothing, (3) How to maintain natural motion and expression, (4) Audio-visual sync considerations. Duration: [INSERT DURATION]",
      "Create a hybrid face-swap approach combining multiple tools. For this project: [INSERT PROJECT], design: (1) Which tool for initial swap, (2) Which for refinement, (3) How to blend outputs, (4) Quality control at each stage.",
      "Develop a face-swap strategy for challenging scenarios. Challenge: [INSERT CHALLENGE]. Design: (1) Whether swapping is feasible, (2) Specialized techniques required, (3) Manual intervention points, (4) Expected quality limitations, (5) Workarounds.",
      "Design expression and emotion transfer in face-swapping. Goal: [INSERT GOAL]. Specify: (1) How to capture source expressions, (2) How to map to target face proportions, (3) Micro-expression handling, (4) Whether emotion transfer is realistic with this pair.",
      "Create a real-time face-swap workflow. Design specifications: (1) Latency requirements, (2) Quality vs. speed trade-offs, (3) Processing architecture, (4) Hardware requirements, (5) Streaming compatibility."
    ],
    "Ethical & Technical Considerations": [
      "Develop an ethical face-swap use case evaluation framework. For this project: [INSERT PROJECT], assess: (1) Legitimacy of the use case, (2) Consent implications, (3) Misuse risk (deepfake potential), (4) Regulatory compliance, (5) Disclosure requirements.",
      "Create responsible face-swap guidelines. Develop: (1) When face-swapping is ethical vs. problematic, (2) Disclosure requirements for different contexts, (3) Terms of service considerations, (4) Handling of sensitive content, (5) Platform compliance.",
      "Design a face-swap consent and attribution protocol. Specify: (1) How to document consent from all subjects, (2) Attribution format and placement, (3) Usage rights documentation, (4) How to handle future modifications, (5) Revocation procedures.",
      "Analyze deepfake risks for a face-swap project. Project: [INSERT PROJECT]. Evaluate: (1) Whether output could be misused, (2) How convincing the result appears, (3) Potential harm if used deceptively, (4) Protective measures, (5) Disclosure strategies.",
      "Create technical safeguards against face-swap misuse. Design: (1) How to watermark or authenticate results, (2) Metadata that proves AI origin, (3) Technical limitations to prevent perfect realism, (4) Detection and traceability measures.",
      "Develop a platform policy for user-generated face-swaps. Create: (1) Permitted use cases, (2) Prohibited content, (3) Verification and removal processes, (4) Creator disclosure requirements, (5) Appeal mechanisms for false positives."
    ],
    "Post-Processing & Quality Refinement": [
      "Design a face-swap touch-up workflow. Starting output: [INSERT DESCRIPTION]. Specify: (1) Areas needing manual refinement, (2) Which tools (healing, clone stamp, liquify) to use, (3) Blending techniques, (4) How to preserve natural appearance while fixing artifacts.",
      "Create a quality assurance process for face-swaps. Define: (1) Visual inspection checklist, (2) Technical quality metrics, (3) Realism assessment, (4) Common artifacts and how to detect them, (5) When to reject and redo vs. touch up.",
      "Analyze and fix edge blending issues. Problem: [INSERT DESCRIPTION]. Diagnose: (1) Why blending failed, (2) Which edges are problematic, (3) Feathering strategies, (4) Whether to re-process or manually blend, (5) Tools and technique.",
      "Design eye and facial detail refinement. Result: [INSERT DESCRIPTION]. Specify: (1) Eye alignment and clarity improvements, (2) Eyebrow blending, (3) Lip color and definition, (4) Skin texture matching, (5) Shadow and highlight adjustments.",
      "Create a hair and hairline blending guide. Issue: [INSERT DESCRIPTION]. Design: (1) How to blend hairline boundaries, (2) Hair texture and color matching, (3) Whether to use tools or manual blending, (4) When to accept imperfection vs. fix. (5) Mask refinement.",
      "Develop a natural expression coaching post-process. After swap: [INSERT RESULT], improve: (1) Facial muscle tension to look natural, (2) Eye gaze direction, (3) Micro-expressions, (4) Overall believability, (5) How to adjust without overcorrecting."
    ]
  }

  const faqs = [
    {
      question: "What makes a good face-swap candidate pair?",
      answer: "Ideal face-swap pairs share similar: face size, lighting angle, skin tone (or at least compatible), and head rotation/tilt. Faces with similar bone structure, forehead size, and jaw line swap more naturally. Different ethnicities, extreme age differences, or dramatic feature differences (small nose to large nose) can produce artifacts. Clear, well-lit photos with visible facial features swap better than low-light or partial-obscured faces."
    },
    {
      question: "What tools are best for different face-swap scenarios?",
      answer: "For static images: Deepfacelab, Faceswap, and commercial tools like Descript or Respeecher offer high quality. For speed and ease: web-based tools like Face Swap Online or mobile apps. For video: Deepfacelab with GPU acceleration is industry standard but requires technical skill. For real-time: Face2Face or similar deep learning models. Choice depends on: quality needs, technical skill, compute resources, and time available."
    },
    {
      question: "How long does a quality face-swap typically take?",
      answer: "Single static image: 15 minutes to an hour with quality tools if faces are well-prepared. Video face-swap: hours to days depending on duration, quality target, and compute power (GPU acceleration critical). High-quality results requiring post-processing refinement can add 30% to 100% to timeline. Batch processing multiple images reduces per-image time through optimization."
    },
    {
      question: "What's the difference between 'fast' and 'quality' face-swapping?",
      answer: "Fast approaches (web-based tools, real-time models) prioritize speed over perfection, often resulting in visible artifacts, imperfect edges, or unnatural blending. Quality approaches (Deepfacelab, professional tools) require more compute and time but produce less-visible artifacts, better edge blending, and more convincing results. The trade-off is often: fast and 70% quality vs. slow and 95% quality. Professional contexts demand quality; social media often tolerates fast results."
    },
    {
      question: "How do I prevent common face-swap artifacts?",
      answer: "Common artifacts and prevention: (1) Blurry swap edges — use careful mask feathering and high-quality source images. (2) Lighting mismatches — correct lighting before swapping. (3) Eyes looking unnatural — ensure eye alignment and verify expression. (4) Color discontinuity at boundaries — use color matching tools. (5) Missing skin texture — increase resolution and use high-quality source faces. (6) Visible seams — blend more carefully, adjust feathering, or use post-processing refinement."
    },
    {
      question: "Can face-swapping work with different skin tones?",
      answer: "Yes, but it requires careful color matching and adjustment. The challenge isn't the swap itself, but ensuring the swapped face's color palette matches the target skin tone and lighting. This requires: color correction before swapping, post-swap color grading, and sometimes adjusting saturation and hue. Results can look natural if done carefully, but poorly executed swaps across different skin tones are more obvious because of color mismatch."
    },
    {
      question: "Is face-swapping in video harder than in images?",
      answer: "Yes, significantly. Video requires: (1) Consistency across hundreds/thousands of frames, (2) Temporal smoothing to avoid flickering, (3) Preserving natural motion and head tracking, (4) Optical flow analysis, (5) Managing expression changes frame-to-frame, (6) Much higher compute power and time. A 10-second video can take 10-100x longer than a single high-quality image. Most beginners start with images before attempting video."
    },
    {
      question: "How do I ensure a face-swap looks realistic?",
      answer: "Realism checklist: (1) Face proportions match target reasonably well. (2) Lighting direction matches (shadows on same side). (3) Eye gaze and focus direction is natural. (4) Skin color and tone are consistent with target. (5) Expression is believable (not frozen or unnatural). (6) Hairline and edges blend smoothly. (7) No visible artifacts or double edges. (8) Ask: would someone be fooled in a quick glance? If yes, it's probably realistic enough for most uses."
    },
    {
      question: "What ethical disclosure is required for face-swaps?",
      answer: "Best practices vary by context: Social media (creative/entertainment) — disclose in caption or post that AI face-swapping was used. Professional/business contexts — transparent disclosure that content is manipulated. Legal/courtroom use — explicit authentication that it's AI-generated (may be legal requirement). Deepfakes intended to deceive — absolutely illegal and unethical in most jurisdictions. Always: get consent from people whose faces are being used, especially for realistic swaps. Some platforms require watermarking or metadata indicating AI origin."
    },
    {
      question: "How do I avoid detection as a face-swap or deepfake?",
      answer: "This is an ethical concern. Deliberately evading detection to deceive is considered deepfake creation and is illegal in many jurisdictions. If your goal is creative, entertainment, or legitimate use, you should disclose the use of face-swapping rather than hide it. If you're concerned about detection for legitimate reasons (understanding vulnerabilities), study published detection research. The ethical approach is transparency, not evasion."
    }
  ]

  const relatedPages = [
    { title: "AI Detection Prompts", href: "/ai-detection-prompts", color: "#EF4444" },
    { title: "AI Content Detection Prompts", href: "/ai-content-detection-prompts", color: "#F97316" },
    { title: "AI Video Generator Prompts", href: "/ai-video-generator-prompts", color: "#7C3AED" },
    { title: "Turnitin AI Prompts", href: "/turnitin-ai-prompts", color: "#DC2626" },
    { title: "AI Image Upscaler Prompts", href: "/ai-image-upscaler-prompts", color: "#06B6D4" },
    { title: "Craiyon AI Prompts", href: "/craiyon-ai-prompts", color: "#FBBF24" },
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
            headline: "AI Face Swap Prompts - Advanced Techniques for Professional Face-Swapping",
            description: "Expert prompts for creating realistic AI face-swaps, including image preparation, technical considerations, ethical guidelines, and quality refinement techniques.",
            image: "https://gptprompts.ai/og-ai-face-swap.jpg",
            datePublished: "2026-03-29",
            dateModified: "2026-03-29",
            author: { "@type": "Organization", name: "GPT Prompts AI" }
          })
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-[#EC4899]/10 border border-[#EC4899]/30 rounded-lg mb-6">
            <span className="text-[#EC4899] font-semibold text-sm">AI Face Swapping & Manipulation</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">AI Face Swap Prompts</h1>
          <p className="text-xl text-gray-400 max-w-3xl">Master advanced face-swapping techniques with expert prompts for image preparation, technical optimization, ethical considerations, and quality refinement. Create realistic face-swaps while maintaining ethical standards.</p>
        </div>

        <div className="grid gap-6 mb-16">
          {Object.entries(prompts).map(([category, categoryPrompts]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#EC4899] rounded-full"></div>
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
              <Link key={idx} href={page.href} className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#EC4899] transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white group-hover:text-[#EC4899] transition-colors">{page.title}</h3>
                  <div className="w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: page.color }}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 text-center">
          <p className="text-gray-400 mb-4">Need custom AI face-swap prompts for your specific project?</p>
          <Link href="/contact" className="inline-block bg-[#EC4899] hover:bg-[#DB2777] text-white font-bold py-3 px-8 rounded transition-colors">Get Custom Prompts</Link>
        </div>
      </div>
    </div>
  )
}