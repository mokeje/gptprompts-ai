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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#EF4444] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#EF4444] hover:bg-[#DC2626] text-white font-medium py-2 px-4 rounded transition-colors">
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
        {open ? <ChevronUp className="w-5 h-5 text-[#EF4444]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {open && <div className="bg-[#0a0a0a] p-6 border-t border-[#2a2a2a] text-gray-300">{answer}</div>}
    </div>
  )
}

export default function AIDetectionPrompts() {
  const prompts = {
    "Detection Fundamentals": [
      "You are an AI detection expert. Analyze the following text and identify patterns that suggest AI generation. Look for: repetitive phrasing, unnatural transitions, generic examples, mathematical precision, lack of personal voice, and systematic structure. Text: [INSERT TEXT]\n\nProvide a confidence score (0-100%) and explain your reasoning.",
      "Compare these two writing samples side by side. Identify differences in vocabulary diversity, sentence structure complexity, emotional authenticity, and idiomatic language use. Determine which is more likely AI-generated and why. Sample 1: [TEXT]\n\nSample 2: [TEXT]",
      "Extract the following from this text: (1) Unique personal experiences mentioned, (2) Contradictions or inconsistencies, (3) Contextual knowledge that seems out of place, (4) Stylistic patterns. Use these to assess likelihood of AI generation. Text: [INSERT TEXT]",
      "Analyze writing for signs of temperature/creativity settings. Look for: high creativity (unexpected metaphors, unusual word choices), medium (balanced style), low creativity (formulaic, repetitive). What does this suggest about the source? Text: [INSERT TEXT]",
      "Identify whether this text shows signs of prompt engineering or fine-tuning. Look for: sudden tone shifts, template-like structures, repeated section headers, artificial transitions. Rate the likelihood: High/Medium/Low. Text: [INSERT TEXT]",
      "Create a detection checklist for evaluating [SPECIFIC CONTENT TYPE]. Include linguistic markers, structural patterns, contextual anomalies, and stylistic red flags specific to this format."
    ],
    "Writing Analysis": [
      "Perform a readability analysis on this text. Calculate Flesch Reading Ease, identify clause complexity, assess vocabulary level. Compare to human writing benchmarks. Does the pattern suggest AI authorship? Text: [INSERT TEXT]",
      "Evaluate this text for passive voice usage, adverb density, and connector word frequency. AI writing often has predictable patterns in these metrics. Analyze and rate likelihood of AI generation. Text: [INSERT TEXT]",
      "Identify all instances of hedging language (perhaps, might, may, arguably). What's the density? AI models tend toward specific hedging patterns. Does this text match those patterns? Text: [INSERT TEXT]",
      "Extract sentences with perfect grammar but awkward phrasing. These often indicate AI generation attempting to follow rules too rigidly. List examples and explain why they feel unnatural. Text: [INSERT TEXT]",
      "Analyze the coherence chains in this text. Do pronouns clearly reference antecedents? Are topic shifts explicit or jarring? AI detection often relies on these linguistic patterns. Text: [INSERT TEXT]",
      "Perform a sentiment analysis on each paragraph. AI writing often shows unnatural sentiment consistency. Map sentiment trajectory and identify anomalies. Text: [INSERT TEXT]"
    ],
    "Content Verification": [
      "Fact-check specific claims in this text: [LIST 5 CLAIMS]. For each: (1) Search for evidence, (2) Check reliability of sources, (3) Identify if the claim could be AI hallucination, (4) Provide verification status.",
      "Examine citations and references in this text. Are they: (1) Real and correctly attributed, (2) Partially real but misquoted, (3) Fabricated (hallucinated). List findings. Text: [INSERT TEXT]",
      "Analyze this text for temporal inconsistencies, outdated information, or anachronistic references. Would a human expert in this field make these errors? What does this suggest? Text: [INSERT TEXT]",
      "Verify specific statistics, percentages, and data points mentioned in this text. Are they accurate? Are sources cited? Do numbers match official records? Text: [INSERT TEXT]",
      "Check for self-contradictions within this text. Does the author support position X in paragraph 1 but contradict it in paragraph 5? Humans usually avoid this; AI sometimes exhibits inconsistency. Text: [INSERT TEXT]",
      "Investigate any expert or authority quotes in this text. Are they: (1) Accurately quoted, (2) Real people/publications, (3) Contextually appropriate. Document your findings. Text: [INSERT TEXT]"
    ],
    "Stylistic Patterns": [
      "Analyze the use of examples in this text. Are they: (1) Concrete and specific, (2) Generic/illustrative, (3) Diverse or repetitive. AI often uses templated examples. Assessment? Text: [INSERT TEXT]",
      "Evaluate metaphor and analogy use. Are they: (1) Original and creative, (2) Common/clichéd, (3) Mixed in appropriateness. What does this suggest about authorship? Text: [INSERT TEXT]",
      "Analyze humor usage, if present. Is it: (1) Contextual and natural, (2) Forced or out of place, (3) Reliant on obvious joke structures. Assessment? Text: [INSERT TEXT]",
      "Examine the opening and closing of this text. Do they: (1) Hook the reader naturally, (2) Feel formulaic (we'll explore, in conclusion), (3) Show personality. What does this indicate? Text: [INSERT TEXT]",
      "Rate the vocabulary range. Does the author use: (1) Varied vocabulary with appropriate complexity, (2) Limited repetitive vocabulary, (3) Overly complex but generic words. What does this suggest? Text: [INSERT TEXT]",
      "Analyze narrative voice consistency. Does the author maintain the same perspective, tone, and personality throughout? Shifts might indicate: (1) Multiple authors, (2) AI generation with temperature changes, (3) Human inconsistency. Assessment? Text: [INSERT TEXT]"
    ],
    "Advanced Detection": [
      "Perform a token prediction analysis. In human writing, which words would a native speaker find predictable vs. surprising? If the text matches predictable token patterns consistently, it might be AI. Text: [INSERT TEXT]",
      "Analyze the text's semantic coherence using word embeddings mentally. Do concepts logically progress or feel randomly associated? AI sometimes shows subtle incoherence. Text: [INSERT TEXT]",
      "Evaluate complexity curves: Do ideas build progressively or restart at each paragraph? AI often resets complexity. Map this pattern. Text: [INSERT TEXT]",
      "Assess persona consistency. If the author claims expertise/experience, does language reflect that? Mismatches often indicate: (1) AI claiming false expertise, (2) Content scraping, (3) Ghostwriting. Text: [INSERT TEXT]",
      "Analyze information density per sentence. Is it: (1) Varied (human), (2) Consistently high/low (AI default), (3) Strategic. Pattern suggests? Text: [INSERT TEXT]",
      "Perform background knowledge inference. What would a human with the claimed expertise know that this text ignores? Gaps can indicate: (1) Insufficient human knowledge, (2) AI training data limitations, (3) Intentional simplification. Text: [INSERT TEXT]"
    ]
  }

  const faqs = [
    {
      question: "What are the most reliable indicators of AI-generated text?",
      answer: "The most reliable indicators include: (1) Repetitive phrasing and templated structures, (2) Over-reliance on hedging language, (3) Lack of personal voice or specific examples, (4) Unnatural paragraph transitions, (5) Perfect grammar paired with awkward phrasing, (6) Consistent sentiment throughout long texts. However, advanced AI models are becoming harder to detect, and good writers can sometimes mimic AI patterns."
    },
    {
      question: "Can AI detection tools be fooled?",
      answer: "Yes. Advanced AI models (especially fine-tuned versions) can produce text that bypasses many detection tools. Techniques like paraphrasing, adding personal anecdotes, varying sentence structure, and introducing deliberate imperfections all help AI-generated content evade detection. This is why human review remains important for high-stakes contexts."
    },
    {
      question: "Is human writing ever flagged as AI by mistake?",
      answer: "Absolutely. Technical writers, non-native speakers, highly structured academic writing, and certain professional genres often trigger false positives. Writers with limited vocabulary, repetitive speaking patterns, or formula-driven styles (like legal documents) are frequently misidentified as AI. Context matters significantly."
    },
    {
      question: "How does AI detection differ across languages?",
      answer: "Detection is significantly harder in languages where training data is less abundant or where grammar rules are stricter (making AI outputs more plausible). Non-English content is generally more difficult to verify accurately. Multilingual models have varying detection accuracy by language."
    },
    {
      question: "What's the difference between AI detection and plagiarism detection?",
      answer: "AI detection assesses whether text was written by an AI system, while plagiarism detection identifies whether text is copied from existing sources. A text can be original AI writing (not plagiarism) but still AI-generated. These are distinct concerns requiring different tools and methodologies."
    },
    {
      question: "Can I detect AI use in images, code, or other formats?",
      answer: "Yes, but the methods differ. For images: analyze compression artifacts, metadata, unnatural patterns in backgrounds, or use reverse image tools. For code: check for inefficiency, commented explanations, and structure. For audio: look for artifacts, unnatural prosody, or voice synthesis markers. Each format requires specialized analysis."
    },
    {
      question: "How accurate are commercial AI detection tools?",
      answer: "Most commercial tools (Turnitin, GPTZero, Copyleaks) have accuracy rates of 60-85% depending on the model tested and content type. False positive/negative rates are significant. They work best on obvious AI-generated content but struggle with subtle or fine-tuned outputs. Always use them as one data point, not definitive proof."
    },
    {
      question: "What legal implications does AI detection have?",
      answer: "In academic and professional contexts, using undetected AI can constitute plagiarism or fraud depending on institutional policies. Some jurisdictions are developing regulations around AI disclosure requirements. Employers and institutions increasingly require transparency about AI use. Implications vary by context and jurisdiction."
    },
    {
      question: "How is AI detection used in academic integrity?",
      answer: "Schools and universities use AI detection to identify student work written entirely or significantly by AI models. Policies vary: some ban AI use entirely, others require disclosure, some permit it for research. Detection failures can result in academic integrity violations. Clear institutional policies and student education are critical."
    },
    {
      question: "What's the future of AI detection as models improve?",
      answer: "As AI models become more sophisticated, detection becomes harder. Future approaches will likely include: (1) AI watermarking during generation, (2) Blockchain-verified authorship, (3) Integration with model APIs for transparent use tracking, (4) Behavioral analysis rather than text analysis. An arms race between generation and detection is likely."
    }
  ]

  const relatedPages = [
    { title: "AI Content Detection Prompts", href: "/ai-content-detection-prompts", color: "#F97316" },
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
            headline: "AI Detection Prompts - Advanced Techniques for Identifying AI-Generated Content",
            description: "Expert prompts for detecting AI-generated text using linguistic analysis, content verification, and stylistic pattern recognition techniques.",
            image: "https://gptprompts.ai/og-ai-detection.jpg",
            datePublished: "2026-03-29",
            dateModified: "2026-03-29",
            author: { "@type": "Organization", name: "GPT Prompts AI" }
          })
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-[#EF4444]/10 border border-[#EF4444]/30 rounded-lg mb-6">
            <span className="text-[#EF4444] font-semibold text-sm">AI Detection & Verification</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">AI Detection Prompts</h1>
          <p className="text-xl text-gray-400 max-w-3xl">Master the techniques for identifying AI-generated content across writing, images, and multimedia. These prompts guide you through linguistic analysis, fact-checking methodologies, and advanced detection patterns used by professionals and educators.</p>
        </div>

        <div className="grid gap-6 mb-16">
          {Object.entries(prompts).map(([category, categoryPrompts]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#EF4444] rounded-full"></div>
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
              <Link key={idx} href={page.href} className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#EF4444] transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white group-hover:text-[#EF4444] transition-colors">{page.title}</h3>
                  <div className="w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: page.color }}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 text-center">
          <p className="text-gray-400 mb-4">Need custom AI detection prompts for your specific use case?</p>
          <Link href="/contact" className="inline-block bg-[#EF4444] hover:bg-[#DC2626] text-white font-bold py-3 px-8 rounded transition-colors">Get Custom Prompts</Link>
        </div>
      </div>
    </div>
  )
}