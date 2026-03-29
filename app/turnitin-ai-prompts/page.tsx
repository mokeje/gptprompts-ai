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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#DC2626] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#991B1B] text-white font-medium py-2 px-4 rounded transition-colors">
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
        {open ? <ChevronUp className="w-5 h-5 text-[#DC2626]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {open && <div className="bg-[#0a0a0a] p-6 border-t border-[#2a2a2a] text-gray-300">{answer}</div>}
    </div>
  )
}

export default function TurnitinAIPrompts() {
  const prompts = {
    "Turnitin Detection Fundamentals": [
      "You are a Turnitin AI detection specialist. Analyze the following submission and explain how Turnitin\'s AI detection algorithm would evaluate it. Look for: token patterns consistent with GPT models, sentence structure variations typical of AI systems, vocabulary consistency, and overall semantic coherence. Submission: [INSERT TEXT]\\n\\nProvide a predicted AI score (0-100%) based on Turnitin\'s detection methodology.",
      "Compare this student submission to the student\'s previous work samples. Identify stylistic differences, vocabulary shifts, complexity changes, or structural variations that might indicate AI involvement. Previous samples: [TEXT 1, TEXT 2]\\n\\nCurrent submission: [TEXT]\\n\\nAssess likelihood of AI use.",
      "Analyze the metadata and submission patterns of this assignment. Consider: submission time (late night, unusual timing), file properties, editing history if available, and comparison to class averages. What do these contextual factors suggest? Submission details: [INSERT DETAILS]",
      "Evaluate the match between assignment requirements and submission quality. Does the submission demonstrate understanding of the assignment brief? Are there misalignments between what was asked and what was delivered that might indicate copy-paste AI output? Assignment: [INSERT]\\n\\nSubmission: [INSERT]",
      "Perform a Turnitin-specific plagiarism cross-reference. Even if original AI generation, does the content match high-frequency patterns in AI training data? Analyze for: over-citation of common sources, generic examples, templated structures. Submission: [INSERT TEXT]",
      "Assess the submission for signs of prompt engineering or fine-tuning. Look for: sudden quality shifts, section-by-section consistency issues, repetitive explanatory patterns, or evidence of multiple prompt iterations. Submission: [INSERT TEXT]"
    ],
    "Writing Pattern Analysis for Turnitin": [
      "Perform a Turnitin-compatible linguistic analysis. Calculate: average sentence length, vocabulary richness (type-token ratio), passive voice frequency, connector word usage. Compare to benchmarks for the assignment type. What patterns suggest AI authorship? Text: [INSERT TEXT]",
      "Analyze hedging language frequency specific to AI patterns. Turnitin flags excessive use of: 'might', 'may', 'arguably', 'it could be said', 'some believe'. What percentage of sentences contain hedging? Text: [INSERT TEXT]",
      "Evaluate paragraph structure consistency. Turnitin systems often flag: identical paragraph length patterns, formulaic opening/closing sentences, monotonous transition words. Analyze this submission. Text: [INSERT TEXT]",
      "Examine the use of citations within the text. AI-generated academic work often has: misplaced citations, citations that don\'t match quoted material, or patterns of citation placement. Document issues. Text: [INSERT TEXT]",
      "Analyze the presence of self-correction and natural editing. Humans revise as they write; AI does not. Look for: backtracking, clarifications, false starts, or evidence of genuine thinking process. Text: [INSERT TEXT]",
      "Evaluate vocabulary appropriateness for the student\'s level. Does word choice match their previous work? Are technical terms used correctly or in generic ways? Does complexity match the expected skill level? Text: [INSERT TEXT]"
    ],
    "Academic Context Analysis": [
      "Assess whether the submission demonstrates mastery of course concepts. Compare to: lecture notes, assigned readings, classroom discussions, and the student\'s participation level. Does the work suggest deep engagement with material or surface-level synthesis? Text: [INSERT TEXT]",
      "Analyze the originality of the student\'s argument or analysis. Does the submission present a novel interpretation, original application of concepts, or unique perspective? Or does it follow predictable academic formulas? Text: [INSERT TEXT]",
      "Evaluate the quality of evidence and examples used. Are they: specific and sourced, generic illustrations, clichéd examples, or contextually misaligned? AI often defaults to standard examples. Text: [INSERT TEXT]",
      "Assess critical thinking markers. Look for: acknowledgment of counterarguments, nuanced analysis, recognition of limitations, interrogation of sources. Does the work show intellectual grappling with the topic? Text: [INSERT TEXT]",
      "Examine the student\'s voice and perspective consistency. Does the work reflect their personality, opinions, and intellectual development shown in class? Or does it feel impersonal and generic? Text: [INSERT TEXT]",
      "Analyze engagement with primary sources vs. secondary commentary. Turnitin users in academic settings should demonstrate source literacy. Is the submission engaging original materials or just paraphrasing summaries? Text: [INSERT TEXT]"
    ],
    "Assignment-Type Specific Detection": [
      "For essays: Evaluate the thesis clarity, argument structure, supporting evidence quality, and conclusion strength. Does the essay follow a human-like exploration of ideas or an AI-templated argument formula? Essay: [INSERT TEXT]",
      "For research papers: Verify source quality and relevance, assess methodology rigor, check results interpretation, evaluate discussion of limitations. Does the work show research understanding or AI synthesis without depth? Paper: [INSERT TEXT]",
      "For lab reports: Analyze whether observations are student-generated, methodology is properly explained, results show actual data patterns (not AI-generated realistic data), and discussion shows critical analysis. Report: [INSERT TEXT]",
      "For creative writing assignments: Assess originality of narrative, character development authenticity, dialogue naturalness, thematic coherence, and emotional resonance. Does the work show creative thinking? Text: [INSERT TEXT]",
      "For reflective/personal essays: Evaluate specificity of personal details, authenticity of voice, genuine self-examination, and learning articulation. AI struggles with authentic reflection. Text: [INSERT TEXT]",
      "For technical/coding submissions: Check code efficiency, commenting quality, problem-solving approach, and debugging evidence. Does the code show learning process or AI-generated correctness? Code: [INSERT TEXT]"
    ],
    "Turnitin Integration & Workflow": [
      "Document Turnitin flagged sections and analyze why they triggered detection. Review: similarity percentages, AI writing detection score, specific flagged phrases. Does the pattern suggest AI authorship across multiple sections? Report: [INSERT REPORT]",
      "Compare Turnitin\'s plagiarism report to AI detection findings. Is content matching sources directly (plagiarism) or paraphrasing patterns (possible AI generation)? What\'s the distinction? Report: [INSERT REPORT]",
      "Analyze the assignment submission timeline using Turnitin data. Were multiple drafts submitted? Do version histories show genuine revision or minimal changes? Does timing align with class schedule? Timeline: [INSERT DETAILS]",
      "Evaluate the student\'s use of Turnitin\'s feedback tools. Have they engaged with previous feedback, revised based on suggestions, or submitted similar quality work after comments? History: [INSERT DETAILS]",
      "Create a Turnitin-compatible decision rubric. Combine: AI detection score, plagiarism findings, writing pattern analysis, academic context, and instructor judgment. Provide overall assessment. Data: [INSERT DATA]",
      "Document evidence for instructor conversation. If AI use is suspected, prepare: specific text examples, comparative analysis, AI detection metrics, and potential explanations to discuss with the student. Evidence: [INSERT EVIDENCE]"
    ]
  }

  const faqs = [
    {
      question: "How does Turnitin\'s AI detection work compared to other tools?",
      answer: "Turnitin\'s AI writing detection uses large language models to identify patterns consistent with AI generation. It analyzes token patterns, burstiness (variation in word choice), and semantic consistency. Unlike some competitors, Turnitin integrates AI detection with plagiarism detection in a single report. However, Turnitin scores are not definitive proof of AI use—they\'re one data point requiring human judgment."
    },
    {
      question: "What are the limitations of Turnitin\'s AI detection?",
      answer: "Turnitin\'s AI detection can produce false positives (flagging human work as AI), especially for technical writing, ESL students, or highly structured genres. Fine-tuned models, paraphrased AI text, and hybrid human-AI work are harder to detect. The tool is most reliable with obvious, unedited AI outputs. Always combine Turnitin scores with other evidence and human review."
    },
    {
      question: "How can students legitimately use AI while working with Turnitin?",
      answer: "Many institutions now permit AI use if disclosed. Best practices include: clearly marking AI-generated sections, using AI for brainstorming or outlining (not final work), editing AI output substantially to reflect personal voice, citing AI tool use in methodology sections, and following institutional AI use policies. Transparency is key—discuss AI use with instructors."
    },
    {
      question: "What\'s the difference between Turnitin AI detection and similarity scores?",
      answer: "Similarity scores show how much text matches existing sources (plagiarism). AI detection scores show patterns consistent with AI generation (not necessarily copied). High similarity doesn\'t prove AI use; high AI scores don\'t prove plagiarism. A submission can have low similarity but high AI scores, or vice versa. Use both metrics together."
    },
    {
      question: "Can students appeal Turnitin AI detection results?",
      answer: "Yes. If a student believes they\'ve been incorrectly flagged, they can work with their instructor to: provide evidence of their writing process, explain contextual factors (ESL status, learning differences, subject matter complexity), submit similar work for comparison, or use other writing samples to demonstrate consistency. Appeals require supporting evidence, not just denial."
    },
    {
      question: "How should instructors interpret Turnitin\'s AI percentages?",
      answer: "Turnitin provides a percentage likelihood of AI generation—not binary proof. 50% doesn\'t mean half the work is AI. Interpret scores as a risk indicator: <25% = likely human, 25-75% = requires investigation, >75% = likely AI. Always investigate flagged work using contextual evidence (student history, assignment difficulty, writing samples) before conclusions."
    },
    {
      question: "What\'s the difference between detecting AI and plagiarism?",
      answer: "Plagiarism detection identifies copied content from existing sources. AI detection identifies content generated by language models. Content can be: original human work, plagiarized human work, original AI work, or plagiarized AI work. Turnitin detects both, but they\'re distinct concerns. Original AI work isn\'t plagiarism but may violate academic integrity policies depending on institutional rules."
    },
    {
      question: "How does Turnitin handle multilingual or translated submissions?",
      answer: "Turnitin\'s AI detection works best with English. Performance degrades for non-English submissions due to training data limitations. Translated AI content is harder to detect than native AI writing. If a submission is translated, consider: Is the quality unusually high for the student\'s language proficiency? Does it match their native language writing patterns? These factors warrant additional investigation."
    },
    {
      question: "Can instructors see what Turnitin\'s AI detection is flagging?",
      answer: "Turnitin provides an overall AI writing detection score, but details on specific flagged patterns aren\'t transparently displayed to instructors in all versions. Instructors see the percentage score and can review submitted text. For detailed analysis, instructors often combine Turnitin data with their own linguistic analysis or use complementary tools to identify specific AI patterns."
    },
    {
      question: "What should institutions do about AI detection policy?",
      answer: "Institutions should: develop clear AI use policies (prohibit, disclose, or permit with transparency), train instructors on AI detection and Turnitin interpretation, communicate policies clearly to students, provide AI literacy education, and use Turnitin as one tool (not the only evidence). Successful AI integrity requires policy clarity, instructor training, and student education—not detection alone."
    }
  ]

  const relatedPages = [
    { title: "AI Detection Prompts", href: "/ai-detection-prompts", color: "#EF4444" },
    { title: "AI Content Detection Prompts", href: "/ai-content-detection-prompts", color: "#F97316" },
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
            headline: "Turnitin AI Detection Prompts - Expert Techniques for Academic Integrity",
            description: "Advanced prompts for detecting AI-generated student work using Turnitin, including writing analysis, plagiarism differentiation, academic context evaluation, and institutional workflow integration.",
            image: "https://gptprompts.ai/og-turnitin-ai.jpg",
            datePublished: "2026-03-29",
            dateModified: "2026-03-29",
            author: { "@type": "Organization", name: "GPT Prompts AI" }
          })
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-[#DC2626]/10 border border-[#DC2626]/30 rounded-lg mb-6">
            <span className="text-[#DC2626] font-semibold text-sm">Academic Integrity & Detection</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">Turnitin AI Detection Prompts</h1>
          <p className="text-xl text-gray-400 max-w-3xl">Master Turnitin\'s AI detection capabilities with expert prompts designed for educators, academic integrity officers, and institutions. Learn to distinguish AI-generated work from plagiarism, interpret detection scores accurately, and integrate AI detection into your academic workflow.</p>
        </div>

        <div className="grid gap-6 mb-16">
          {Object.entries(prompts).map(([category, categoryPrompts]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#DC2626] rounded-full"></div>
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
              <Link key={idx} href={page.href} className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#DC2626] transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white group-hover:text-[#DC2626] transition-colors">{page.title}</h3>
                  <div className="w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: page.color }}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 text-center">
          <p className="text-gray-400 mb-4">Need custom Turnitin AI detection prompts for your institution?</p>
          <Link href="/contact" className="inline-block bg-[#DC2626] hover:bg-[#991B1B] text-white font-bold py-3 px-8 rounded transition-colors">Get Custom Prompts</Link>
        </div>
      </div>
    </div>
  )
}
