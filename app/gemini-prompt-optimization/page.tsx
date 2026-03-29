'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Copy, Check, ChevronDown, ChevronUp, Zap, Brain, TrendingUp, MessageSquare, Search, Lightbulb } from 'lucide-react'

const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#4F46E5] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium py-2 px-4 rounded transition-colors"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy Prompt
          </>
        )}
      </button>
    </div>
  )
}

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-[#2a2a2a] rounded-lg">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 hover:bg-[#1a1a1a] transition-colors text-left"
      >
        <span className="font-medium text-white">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#4F46E5] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="border-t border-[#2a2a2a] p-4 bg-[#0f0f0f] text-gray-300 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function GeminiPromptOptimizationPage() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Gemini Prompt Optimization: Expert Prompts for Google&apos;s Most Advanced AI',
    description: 'Master Gemini&apos;s capabilities with expert prompts for multimodal reasoning, image understanding, code generation, and advanced reasoning tasks. Unlock the full potential of Google&apos;s latest AI model.',
    image: 'https://gptprompts.ai/gemini-optimization.jpg',
    datePublished: '2026-03-28',
    dateModified: '2026-03-28',
    author: {
      '@type': 'Organization',
      name: 'GPTPrompts.AI',
    },
  }

  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes Gemini different from other large language models?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gemini is Google&apos;s multimodal AI model that excels at understanding and processing text, images, audio, and video. It&apos;s designed with native multimodal capabilities from the ground up, making it particularly strong at reasoning across different media types.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I optimize my prompts for Gemini&apos;s specific strengths?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Focus on clear context setting, specific output formatting requirements, and leveraging Gemini&apos;s strengths in multimodal reasoning. Use structured examples, be explicit about constraints, and take advantage of its ability to process and analyze images, documents, and data visualizations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the best use cases for Gemini?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gemini excels at multimodal tasks including document analysis, image understanding, complex reasoning, code review and generation, creative brainstorming, and data analysis. It&apos;s particularly effective for tasks requiring cross-modal understanding and reasoning.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Gemini handle image processing and analysis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gemini can process images alongside text, allowing you to ask questions about visual content, extract information from documents, analyze diagrams, read charts, and understand spatial relationships. You can include images directly in your prompts for native multimodal processing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Gemini generate code from descriptions and images?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Gemini can generate code from text descriptions and can also understand code shown in images or screenshots. This makes it valuable for code review, architecture discussion, and generating implementations from design mockups.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are token limits and input constraints for Gemini?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gemini has different context window sizes depending on the specific model version. Check Google&apos;s documentation for current specifications. Generally, it supports substantial context windows suitable for analyzing long documents, multiple images, and complex reasoning tasks.',
        },
      },
      {
        '@type': 'Question',
        name: 'How should I structure prompts for maximum accuracy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use a clear structure with: (1) role/context setting, (2) specific task definition, (3) output format requirements, (4) examples or examples of what you want, (5) any constraints or guidelines. Be explicit rather than implicit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Gemini support system prompts or role-based instructions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gemini supports detailed system-level instruction and role definition at the beginning of conversations. You can define personas, expertise areas, tone, and specific behavioral guidelines to shape how Gemini responds throughout the interaction.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use Gemini for multi-step reasoning tasks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Gemini is strong at multi-step reasoning. You can use techniques like step-by-step breakdown, think-aloud prompting, and chain-of-thought instructions to guide it through complex problems and ensure transparent reasoning.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Gemini handle creative versus analytical tasks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gemini performs well on both creative and analytical tasks. For creative work, use more open-ended prompts with style guidance. For analytical work, be precise and provide structure. Temperature and response format settings can be adjusted to match task needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the best practices for getting consistent outputs from Gemini?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use specific output formatting instructions, provide examples of desired output, set clear constraints, use structured prompt templates, and test variations. Consistency improves when expectations are explicit.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I leverage Gemini&apos;s reasoning abilities for business decisions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Provide Gemini with relevant data, context, and decision frameworks. Ask it to reason through options, identify trade-offs, and present structured analyses. Use it as a thinking partner to validate assumptions and explore scenarios before making decisions.',
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="bg-gradient-to-b from-[#4F46E5] to-[#3730A3] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block hover:text-[#4F46E5] transition-colors">
            GPTPrompts.AI
          </Link>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-[#4F46E5] rounded-lg flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-6xl md:text-8xl font-bold">Gemini</h1>
              <p className="text-2xl md:text-4xl text-[#a5b4fc] font-light">Prompt Optimization</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            Master Google&apos;s advanced multimodal AI. Expert prompts for image understanding, complex reasoning, code generation, and advanced analytics. Optimize every Gemini interaction.
          </p>
          <div className="mt-8 inline-block bg-[#4F46E5] text-white px-6 py-2 rounded-lg font-semibold">
            Category: Multimodal AI Optimization
          </div>
        </div>
      </header>

      {/* Multimodal Image Understanding Section */}
      <section className="max-w-7xl mx-auto py-24 px-6 md:px-12">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 bg-[#4F46E5] rounded-lg flex items-center justify-center flex-shrink-0">
            <Search className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-bold">Multimodal Image Understanding</h2>
        </div>
        <p className="text-gray-300 mb-12 text-lg">Leverage Gemini&apos;s native image processing and analysis capabilities for comprehensive visual understanding and insights.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CopyCard
            title="Document Structure & Content Analysis"
            prompt={`Analyze the structure and content of this document image. Provide:
1. Document type and purpose
2. Key sections and their hierarchy
3. Main content and data extracted
4. Visual formatting (headers, tables, lists)
5. Any embedded visualizations or diagrams
6. Recommendations for digitization or processing

Be thorough and precise in identifying all structural elements.`}
          />
          <CopyCard
            title="Chart and Data Visualization Interpreter"
            prompt={`Examine this chart or data visualization image. Extract and explain:
1. Chart type and purpose
2. Axes labels and scale
3. All data points, trends, and patterns
4. Key insights and anomalies
5. Relationships between variables
6. Recommended actions based on the data

Provide both raw data interpretation and strategic insights.`}
          />
          <CopyCard
            title="Scene Composition & Spatial Analysis"
            prompt={`Analyze the composition and spatial elements in this image:
1. Main subjects and their positions
2. Background and environmental context
3. Lighting, shadows, and visual hierarchy
4. Color palette and visual balance
5. Foreground, midground, and background layers
6. Suggested improvements or applications

Include both technical and aesthetic observations.`}
          />
        </div>
      </section>

      {/* Advanced Reasoning & Problem Solving Section */}
      <section className="max-w-7xl mx-auto py-24 px-6 md:px-12 border-t border-[#2a2a2a]">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 bg-[#4F46E5] rounded-lg flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-bold">Advanced Reasoning & Problem Solving</h2>
        </div>
        <p className="text-gray-300 mb-12 text-lg">Use Gemini&apos;s strong reasoning capabilities to tackle complex problems, validate hypotheses, and make data-driven decisions.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CopyCard
            title="Multi-Step Logic Chain Builder"
            prompt={`Help me work through this complex problem step by step:

[Problem statement]

Please:
1. Break down the problem into logical components
2. Identify key assumptions and constraints
3. Map dependencies between elements
4. Create a step-by-step solution path
5. Identify potential pitfalls at each step
6. Suggest validation methods for each phase

Present your reasoning clearly, showing your thinking process.`}
          />
          <CopyCard
            title="Hypothesis Validation Framework"
            prompt={`I have this hypothesis: [Your hypothesis]

Given this context: [Context/data]

Help me:
1. Clarify and refine the hypothesis
2. Identify assumptions underlying it
3. Determine what evidence would support or refute it
4. Suggest testing or validation approaches
5. Identify counterarguments and alternative explanations
6. Design a robust validation experiment

Be critical and thorough in your analysis.`}
          />
          <CopyCard
            title="Decision Matrix & Trade-off Analyzer"
            prompt={`I need to choose between these options: [List options]

Relevant factors: [List factors and priorities]

Please create a decision framework that:
1. Defines clear evaluation criteria
2. Weights each criterion by importance
3. Scores each option against criteria
4. Identifies trade-offs and implications
5. Highlights hidden assumptions
6. Provides a clear recommendation with rationale

Consider both quantitative and qualitative factors.`}
          />
        </div>
      </section>

      {/* Code Generation & Technical Architecture Section */}
      <section className="max-w-7xl mx-auto py-24 px-6 md:px-12 border-t border-[#2a2a2a]">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 bg-[#4F46E5] rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-bold">Code Generation & Technical Architecture</h2>
        </div>
        <p className="text-gray-300 mb-12 text-lg">Generate production-ready code and design scalable architectures with Gemini&apos;s technical understanding.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CopyCard
            title="Architecture Design Assistant"
            prompt={`Design a system architecture for: [Your requirement]

Please provide:
1. High-level architecture diagram (in text format)
2. Key components and their responsibilities
3. Data flow between components
4. Technology recommendations with justification
5. Scalability considerations
6. Potential bottlenecks and mitigation strategies
7. Security and reliability requirements

Consider production-grade requirements and best practices.`}
          />
          <CopyCard
            title="Code Review & Optimization Expert"
            prompt={`Review this code:

[Your code]

Analyze and suggest:
1. Performance improvements with estimated impact
2. Code quality and readability enhancements
3. Potential bugs or edge cases
4. Best practices violations
5. Testing gaps
6. Documentation improvements
7. Refactoring opportunities

Prioritize suggestions by impact and complexity.`}
          />
          <CopyCard
            title="API Endpoint & Integration Designer"
            prompt={`Design API endpoints for this use case: [Your use case]

Please specify:
1. Endpoint paths and HTTP methods
2. Request/response schema with examples
3. Authentication and authorization approach
4. Rate limiting and quota strategy
5. Error handling and status codes
6. Versioning strategy
7. Documentation structure

Follow RESTful principles and include edge cases.`}
          />
        </div>
      </section>

      {/* Creative Applications & Analytics Section */}
      <section className="max-w-7xl mx-auto py-24 px-6 md:px-12 border-t border-[#2a2a2a]">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 bg-[#4F46E5] rounded-lg flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-bold">Creative Applications & Data Analytics</h2>
        </div>
        <p className="text-gray-300 mb-12 text-lg">Unlock creative possibilities and extract actionable insights from data using Gemini&apos;s multimodal capabilities.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CopyCard
            title="Brand & Content Strategy Builder"
            prompt={`Develop a comprehensive content strategy for: [Your brand/product]

Target audience: [Describe your audience]

Please create:
1. Brand positioning statement
2. Content pillars and themes
3. Visual style guidelines
4. Tone and voice specifications
5. Content calendar framework
6. Engagement metrics to track
7. Competitor analysis and differentiation

Make it specific and actionable.`}
          />
          <CopyCard
            title="Data-Driven Insights Extractor"
            prompt={`Analyze this dataset: [Describe or share your data]

Key question: [What you want to understand]

Provide:
1. Data summary and structure overview
2. Key metrics and trends
3. Statistical insights and patterns
4. Anomalies and outliers
5. Correlations and relationships
6. Actionable recommendations
7. Limitations and caveats

Be specific with numbers and examples.`}
          />
          <CopyCard
            title="Narrative & Story Development"
            prompt={`Help me develop a compelling narrative for: [Your topic/brand]

Intended audience: [Describe audience]
Key messages: [List main points to convey]

Create:
1. Core story arc and structure
2. Opening hook to capture attention
3. Supporting story elements and examples
4. Character development (if applicable)
5. Emotional resonance points
6. Strong conclusion and call to action
7. Alternative narrative angles

Make it memorable and shareable.`}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-24 px-6 md:px-12 border-t border-[#2a2a2a]">
        <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem
            q="What makes Gemini different from other large language models?"
            a="Gemini is Google's multimodal AI model that excels at understanding and processing text, images, audio, and video natively. Unlike some models adapted to multimodal tasks, Gemini was designed from the ground up as multimodal. This native integration makes it particularly strong at reasoning across different media types and understanding complex visual information alongside text."
          />
          <FAQItem
            q="How can I optimize my prompts for Gemini's specific strengths?"
            a="Focus on clear context setting, specific output formatting requirements, and leveraging Gemini's multimodal strengths. Use structured examples, be explicit about constraints, use step-by-step instructions for complex reasoning, and take advantage of its ability to process and analyze images, documents, and data visualizations. Provide context about what you're trying to accomplish, not just what you want it to do."
          />
          <FAQItem
            q="What are the best use cases for Gemini?"
            a="Gemini excels at multimodal tasks including document analysis, image understanding, complex reasoning, code review and generation, creative brainstorming, and data analysis. It's particularly effective for tasks requiring cross-modal understanding (understanding text and images together), long document analysis, and scenarios where you need to provide visual context for your questions."
          />
          <FAQItem
            q="How does Gemini handle image processing and analysis?"
            a="Gemini can process images alongside text, allowing you to ask questions about visual content, extract information from documents, analyze diagrams, read charts, understand spatial relationships, and identify objects. You can include images directly in your prompts for native multimodal processing. The model understands context within images and can perform complex visual reasoning."
          />
          <FAQItem
            q="Can Gemini generate code from descriptions and images?"
            a="Yes, Gemini can generate code from text descriptions and can also understand code shown in images or screenshots. This makes it valuable for code review, architecture discussion, generating implementations from design mockups, and documenting existing code by analyzing screenshots or diagrams. You can show it UI designs and ask it to generate corresponding code."
          />
          <FAQItem
            q="What are token limits and input constraints for Gemini?"
            a="Gemini has different context window sizes depending on the specific model version. Check Google's documentation for current specifications. Generally, it supports substantial context windows suitable for analyzing long documents, processing multiple images simultaneously, and handling complex reasoning tasks. Context length has been expanded in recent versions to accommodate more comprehensive interactions."
          />
          <FAQItem
            q="How should I structure prompts for maximum accuracy?"
            a="Use a clear structure with: (1) role/context setting, (2) specific task definition, (3) output format requirements, (4) examples of what you want, (5) any constraints or guidelines, and (6) quality criteria. Be explicit rather than implicit about what constitutes a good response. The more structure you provide, the more consistent and accurate results you'll get."
          />
          <FAQItem
            q="Does Gemini support system prompts or role-based instructions?"
            a="Yes, Gemini supports detailed system-level instruction and role definition throughout your conversation. You can define personas, expertise areas, tone, communication style, and specific behavioral guidelines to shape how Gemini responds. This is particularly useful when you want consistent behavior across multiple interactions within the same conversation."
          />
          <FAQItem
            q="Can I use Gemini for multi-step reasoning tasks?"
            a="Yes, Gemini is strong at multi-step reasoning. You can use techniques like step-by-step breakdown, think-aloud prompting (asking it to show its reasoning), chain-of-thought instructions, and explicit constraint definition to guide it through complex problems. For best results, ask it to show its work and explain its reasoning at each step."
          />
          <FAQItem
            q="How does Gemini handle creative versus analytical tasks?"
            a="Gemini performs well on both creative and analytical tasks. For creative work, use more open-ended prompts with style guidance and examples of desired output. For analytical work, be precise, provide structure, and define success criteria. Different model configurations may emphasize different strengths, so test to find what works best for your specific use case."
          />
          <FAQItem
            q="What are the best practices for getting consistent outputs from Gemini?"
            a="Use specific output formatting instructions (e.g., JSON, markdown lists, numbered steps), provide concrete examples of desired output, set clear constraints and boundaries, use structured prompt templates, test variations to see what works best, and maintain consistent context across interactions. Consistency improves when expectations are explicit and examples demonstrate the desired quality."
          />
          <FAQItem
            q="How can I leverage Gemini's reasoning abilities for business decisions?"
            a="Provide Gemini with relevant data, context, and decision frameworks. Ask it to reason through options, identify trade-offs, present structured analyses, and validate assumptions. Use it as a thinking partner to explore scenarios and test hypotheses before making decisions. Be specific about constraints (budget, timeline, resources) to get more relevant recommendations."
          />
        </div>
      </section>

      {/* Related Links Section */}
      <section className="max-w-7xl mx-auto py-24 px-6 md:px-12 border-t border-[#2a2a2a]">
        <h2 className="text-4xl font-bold mb-12">Related Prompt Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/gpt-4o-prompts" className="group">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#4F46E5] transition-colors h-full">
              <h3 className="font-bold text-white mb-2 group-hover:text-[#4F46E5] transition-colors">GPT-4O Prompts</h3>
              <p className="text-gray-400 text-sm">Advanced vision and reasoning capabilities</p>
            </div>
          </Link>
          <Link href="/grok-prompts" className="group">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#4F46E5] transition-colors h-full">
              <h3 className="font-bold text-white mb-2 group-hover:text-[#4F46E5] transition-colors">Grok Prompts</h3>
              <p className="text-gray-400 text-sm">Real-time reasoning and current events</p>
            </div>
          </Link>
          <Link href="/claude-prompts" className="group">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#4F46E5] transition-colors h-full">
              <h3 className="font-bold text-white mb-2 group-hover:text-[#4F46E5] transition-colors">Claude Prompts</h3>
              <p className="text-gray-400 text-sm">In-depth analysis and long-form content</p>
            </div>
          </Link>
          <Link href="/microsoft-copilot-prompts" className="group">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#4F46E5] transition-colors h-full">
              <h3 className="font-bold text-white mb-2 group-hover:text-[#4F46E5] transition-colors">Microsoft Copilot</h3>
              <p className="text-gray-400 text-sm">Enterprise productivity and integration</p>
            </div>
          </Link>
          <Link href="/midjourney-prompts" className="group">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#4F46E5] transition-colors h-full">
              <h3 className="font-bold text-white mb-2 group-hover:text-[#4F46E5] transition-colors">Midjourney Prompts</h3>
              <p className="text-gray-400 text-sm">AI image generation and visual design</p>
            </div>
          </Link>
          <Link href="/essay-prompts" className="group">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#4F46E5] transition-colors h-full">
              <h3 className="font-bold text-white mb-2 group-hover:text-[#4F46E5] transition-colors">Essay Prompts</h3>
              <p className="text-gray-400 text-sm">Writing and academic content generation</p>
            </div>
          </Link>
          <Link href="/ai-prompts-presentations" className="group">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#4F46E5] transition-colors h-full">
              <h3 className="font-bold text-white mb-2 group-hover:text-[#4F46E5] transition-colors">Presentation Prompts</h3>
              <p className="text-gray-400 text-sm">Slide decks and visual presentations</p>
            </div>
          </Link>
          <Link href="/social-media-marketing-prompts" className="group">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#4F46E5] transition-colors h-full">
              <h3 className="font-bold text-white mb-2 group-hover:text-[#4F46E5] transition-colors">Social Media Marketing</h3>
              <p className="text-gray-400 text-sm">Content and campaign strategies</p>
            </div>
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
    </div>
  )
}
