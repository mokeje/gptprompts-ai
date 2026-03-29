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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#F97316] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium py-2 px-4 rounded transition-colors">
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
        {open ? <ChevronUp className="w-5 h-5 text-[#F97316]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {open && <div className="bg-[#0a0a0a] p-6 border-t border-[#2a2a2a] text-gray-300">{answer}</div>}
    </div>
  )
}

export default function AIContentDetectionPrompts() {
  const prompts = {
    "Detection Fundamentals": [
      "Analyze this content for signs of AI generation. Check for: unnatural phrasing patterns, overly polished language, generic transitional phrases, lack of idiomatic expressions, and missing personal touch. Content: [INSERT CONTENT]\\n\\nProvide a confidence score (0-100%) and highlight specific red flags.",
      "Compare the voice and tone consistency across this entire piece of content. Identify any sudden shifts in perspective, vocabulary level changes, or tonal inconsistencies that might indicate multiple authors or AI involvement. Content: [INSERT CONTENT]",
      "Extract and analyze all hedging language, disclaimers, and cautionary phrases. AI systems often overuse protective language. What percentage of sentences contain hedging? Content: [INSERT CONTENT]",
      "Evaluate the specificity and depth of claims made in this content. Does the author provide concrete examples, data, or detailed explanations? Or are claims made at a high, general level? Content: [INSERT CONTENT]",
      "Analyze the narrative arc and argumentation structure. Does it follow a predictable formula (introduction, three points, conclusion)? Or does it meander naturally? Content: [INSERT CONTENT]",
      "Assess the cultural and contextual awareness demonstrated in this content. Are references appropriate and accurate? Are cultural nuances understood? Content: [INSERT CONTENT]"
    ],
    "Writing Pattern Analysis": [
      "Measure sentence length variation in this content. Calculate average sentence length and identify the distribution. High variation suggests human authorship; monotony suggests AI. Content: [INSERT CONTENT]",
      "Identify all instances of self-correction, backtracking, or clarification within the content. Humans edit themselves; AI rarely does. Document these instances. Content: [INSERT CONTENT]",
      "Analyze the use of questions within the content. Are they rhetorical, conversational, or structural? What's the frequency and type? Content: [INSERT CONTENT]",
      "Evaluate the frequency and appropriateness of exclamation marks, ellipses, and punctuation variations. AI tends to normalize punctuation. Content: [INSERT CONTENT]",
      "Assess paragraph length consistency. Do paragraphs vary naturally or maintain similar lengths throughout? Content: [INSERT CONTENT]",
      "Analyze the presence of digressions, tangents, or seemingly random anecdotes. AI stays on message; humans often wander. Content: [INSERT CONTENT]"
    ],
    "Content-Specific Indicators": [
      "For blog/article content: Does the piece demonstrate original research, personal investigation, or interviews? Or does it synthesize existing public information? Content: [INSERT CONTENT]",
      "For social media content: Analyze the authenticity of emotion and engagement. Does it feel genuinely responsive to comments/trends, or formulaic? Content: [INSERT CONTENT]",
      "For technical content: Evaluate whether explanations assume appropriate level of reader knowledge. Over-explanation or under-explanation can indicate AI. Content: [INSERT CONTENT]",
      "For creative content: Assess originality of metaphors, analogies, and descriptive language. Are comparisons fresh or clichéd? Content: [INSERT CONTENT]",
      "For news/journalistic content: Verify that attributed quotes are accurate, sources are cited properly, and reporting standards are met. Content: [INSERT CONTENT]",
      "For marketing/promotional content: Evaluate whether claims are verifiable, testimonials feel authentic, and CTAs feel natural or pushy. Content: [INSERT CONTENT]"
    ],
    "Cross-Platform Detection": [
      "Analyze this content as it appears across multiple platforms (website, LinkedIn, Twitter, email). Does the tone and voice remain consistent? Inconsistencies can indicate AI repurposing. Content: [INSERT CONTENT]",
      "Compare this content to other pieces from the same author. Do voice, vocabulary, concerns, and style match across pieces? Or do they diverge? Content: [INSERT CONTENT]",
      "Evaluate how well this content engages with its platform-specific audience expectations. Does it demonstrate understanding of platform culture? Content: [INSERT CONTENT]",
      "Assess the metadata and SEO optimization of this content. Over-optimization or keyword stuffing suggests AI generation or automated creation. Content: [INSERT CONTENT]",
      "Analyze the temporal consistency of this content. Does it reference current events accurately and with appropriate context? Content: [INSERT CONTENT]",
      "Evaluate responsiveness to feedback. If this content has received comments or responses, does any follow-up show genuine engagement or formulaic replies? Content: [INSERT CONTENT]"
    ],
    "Advanced Content Verification": [
      "Perform a claim audit on this content. For each factual claim: verify against authoritative sources, check attribution accuracy, and assess whether conclusions logically follow. Content: [INSERT CONTENT]",
      "Analyze the presence of original data, proprietary research, or first-hand observations. AI cannot generate truly novel data. What evidence of originality exists? Content: [INSERT CONTENT]",
      "Evaluate the handling of nuance and counterarguments. Does the author acknowledge complexity and opposing views? Or does it present overly simplified arguments? Content: [INSERT CONTENT]",
      "Assess whether this content demonstrates understanding of context and history. Does it show awareness of how current topics connect to broader conversations? Content: [INSERT CONTENT]",
      "Analyze the level of accountability demonstrated. Does the author take a position, sign their name, or provide contact information? Or remain anonymous? Content: [INSERT CONTENT]",
      "Evaluate emotional intelligence and empathy demonstrated in this content. Can you sense understanding of reader feelings, challenges, or concerns? Or is it detached? Content: [INSERT CONTENT]"
    ]
  }

  const faqs = [
    {
      question: "How is AI content detection different from plagiarism detection?",
      answer: "AI content detection identifies whether content was generated by an AI system, while plagiarism detection identifies whether content is copied from existing sources. Content can be original AI-generated writing (not plagiarism) or plagiarized from human sources. These are distinct concerns. Some tools now combine both detection methods for comprehensive analysis."
    },
    {
      question: "What content types are easiest to detect as AI-generated?",
      answer: "Technical documentation, formulaic business writing, instructional content, and SEO-optimized articles are typically easier to detect because they're more predictable. Creative writing, opinion pieces, and content with strong personal voice are harder to detect, especially if generated by advanced models. The more structured the expected format, the easier detection becomes."
    },
    {
      question: "Can small amounts of AI-generated content go undetected?",
      answer: "Yes. If only a portion of a longer piece is AI-generated (perhaps edited or inserted by an AI tool for efficiency), detection becomes difficult. This 'hybrid' content—partially human, partially AI—is increasingly common and harder to catch. Context and surrounding human-written content can mask AI sections."
    },
    {
      question: "How do I detect AI content in specialized fields like law or medicine?",
      answer: "Specialized fields require domain expertise to detect subtle errors or oversimplifications that general tools would miss. Look for: inaccurate citations, misapplication of standards, missing critical nuance, or claims that don't align with current expert consensus. AI often lacks the deep contextual knowledge of specialists."
    },
    {
      question: "What about content generated by fine-tuned AI models?",
      answer: "Fine-tuned models trained on specific content (a person's writing style, company documentation, etc.) are significantly harder to detect. They can replicate unique voice patterns and specific knowledge. Detection requires understanding the training data and model parameters, which isn't publicly available. Human review becomes even more critical."
    },
    {
      question: "Can translation or paraphrasing bypass AI content detection?",
      answer: "Yes. Translating AI-generated content to another language and back, or paraphrasing with intentional modifications, can evade detection tools. However, these processes often introduce inconsistencies or errors that astute human reviewers can catch. The more heavily modified, the harder detection becomes."
    },
    {
      question: "How do detection tools handle multilingual content?",
      answer: "Most detection tools work best with English-language content. Performance degrades for non-English languages due to less abundant training data for detection models. Detecting AI-generated content in languages with less digital representation (smaller African languages, for example) is significantly more challenging and less reliable."
    },
    {
      question: "What role does context play in AI content detection?",
      answer: "Context is crucial. The same writing patterns mean different things in different contexts. Formal technical writing naturally sounds more 'AI-like' than casual social media posts. A non-native speaker's writing might trigger false positives. Always evaluate content within its intended context and audience expectations."
    },
    {
      question: "How can organizations detect AI use by their employees?",
      answer: "Organizations can implement AI use policies, provide detection tool access, conduct spot checks on suspicious content, and train teams on transparency. Some companies now require disclosure of AI use in employee outputs. Technical approaches include API monitoring (if AI tools are cloud-based) and examining system logs for tool usage."
    },
    {
      question: "What's the future of AI content detection as generation improves?",
      answer: "As AI models improve, detection becomes an arms race. Future solutions will likely include: API-level verification (direct confirmation from AI providers), watermarking of AI-generated content, blockchain-verified authorship, behavioral analysis of content creation, and regulatory requirements for disclosure. Human expertise will remain irreplaceable."
    }
  ]

  const relatedPages = [
    { title: "AI Detection Prompts", href: "/ai-detection-prompts", color: "#EF4444" },
    { title: "Turnitin AI Prompts", href: "/turnitin-ai-prompts", color: "#DC2626" },
    { title: "AI Video Generator Prompts", href: "/ai-video-generator-prompts", color: "#7C3AED" },
    { title: "AI Face Swap Prompts", href: "/ai-face-swap-prompts", color: "#EC4899" },
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
            headline: "AI Content Detection Prompts - Expert Techniques for Identifying Generated Content",
            description: "Advanced prompts for detecting AI-generated content across platforms, formats, and contexts using linguistic analysis, pattern recognition, and verification techniques.",
            image: "https://gptprompts.ai/og-ai-content-detection.jpg",
            datePublished: "2026-03-29",
            dateModified: "2026-03-29",
            author: { "@type": "Organization", name: "GPT Prompts AI" }
          })
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-[#F97316]/10 border border-[#F97316]/30 rounded-lg mb-6">
            <span className="text-[#F97316] font-semibold text-sm">AI Detection & Verification</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">AI Content Detection Prompts</h1>
          <p className="text-xl text-gray-400 max-w-3xl">Discover comprehensive prompts for detecting AI-generated content across blogs, social media, technical documentation, and marketing materials. Master the techniques used by professionals to identify AI involvement and maintain content authenticity.</p>
        </div>

        <div className="grid gap-6 mb-16">
          {Object.entries(prompts).map(([category, categoryPrompts]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#F97316] rounded-full"></div>
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
              <Link key={idx} href={page.href} className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#F97316] transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white group-hover:text-[#F97316] transition-colors">{page.title}</h3>
                  <div className="w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: page.color }}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 text-center">
          <p className="text-gray-400 mb-4">Need custom AI content detection prompts for your specific use case?</p>
          <Link href="/contact" className="inline-block bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-3 px-8 rounded transition-colors">Get Custom Prompts</Link>
        </div>
      </div>
    </div>
  )
}
