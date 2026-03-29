'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Copy, Check, ChevronDown, ChevronUp, Zap, Brain, TrendingUp, MessageSquare, Search, Lightbulb } from 'lucide-react'

export default function GPT4OPromptsPage() {
  const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    return (
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
        <h4 className="font-bold text-white mb-4">{title}</h4>
        <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
          {prompt}
        </pre>
        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 bg-[#10A937] hover:bg-[#0d8829] text-white font-medium py-2 px-4 rounded transition-colors"
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
            <ChevronUp className="w-5 h-5 text-[#10A937] flex-shrink-0" />
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

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <header className="bg-gradient-to-b from-[#10A937] to-[#0d7a29] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block hover:text-[#10A937] transition-colors">
            GPTPrompts.AI
          </Link>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-[#10A937] rounded-lg flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-6xl md:text-8xl font-bold">GPT-4O</h1>
              <p className="text-2xl md:text-4xl text-[#a8e6a1] font-light">Advanced Vision &amp; Reasoning</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            Leverage multimodal intelligence. Expert prompts for vision analysis, complex reasoning, code generation, and creative applications. Maximize GPT-4O&apos;s capabilities.
          </p>
          <div className="mt-8 inline-block bg-[#10A937] text-white px-6 py-2 rounded-lg font-semibold">
            Category: Advanced AI &amp; Multimodal
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Vision Analysis Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Vision Analysis &amp; Image Understanding</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Document Structure Analyzer"
              prompt={`Analyze this document image and provide:
1. Overall structure and layout (headers, sections, columns)
2. Key information hierarchy
3. Any visual elements (tables, charts, logos)
4. Document type classification
5. Recommended OCR or extraction approach

Focus on structural accuracy and logical flow.`}
            />
            <CopyCard
              title="Chart Data Extractor"
              prompt={`Examine this chart/graph image and extract:
1. Chart type and title
2. Axis labels and scale ranges
3. All data points or series values
4. Trends or patterns visible
5. Any annotations or notes
6. Data format suggestions (CSV, JSON)

Prioritize accuracy in numerical values.`}
            />
            <CopyCard
              title="Scene Composition Analyzer"
              prompt={`Analyze this image for composition and visual design:
1. Main subject and focal points
2. Color palette analysis
3. Lighting and shadows
4. Depth and perspective techniques
5. Visual hierarchy and emphasis
6. Design principles applied

Provide actionable insights for reproduction or improvement.`}
            />
          </div>
        </section>

        {/* Complex Reasoning Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Complex Reasoning &amp; Problem Solving</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Multi-Step Logic Chain"
              prompt={`Break down this complex problem systematically:
1. Identify all given information and constraints
2. Define the core problem statement
3. Map dependencies between variables
4. Outline step-by-step solution approach
5. Identify potential obstacles or edge cases
6. Provide final solution with verification

Show all reasoning stages clearly.`}
            />
            <CopyCard
              title="Hypothesis Validation Framework"
              prompt={`Evaluate this hypothesis rigorously:
1. State the hypothesis clearly
2. Identify assumptions being made
3. Suggest ways to test or validate
4. Outline potential counterarguments
5. Assess confidence level (with reasoning)
6. Recommend next investigation steps

Be critical and evidence-focused.`}
            />
            <CopyCard
              title="Decision Matrix Builder"
              prompt={`Help structure this decision problem:
1. List all viable options
2. Identify key decision criteria
3. Weight each criterion by importance
4. Score each option against criteria
5. Calculate weighted totals
6. Recommend best option with trade-off analysis

Include risk assessment for top choices.`}
            />
          </div>
        </section>

        {/* Code Generation & Debugging Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Code Generation &amp; Technical Architecture</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Architecture Design Assistant"
              prompt={`Design the architecture for this system:
1. Identify core components and services
2. Define data flow and interactions
3. Suggest appropriate tech stack
4. Outline scalability approach
5. Identify potential bottlenecks
6. Provide deployment strategy

Include diagrams in text format (ASCII or Mermaid).`}
            />
            <CopyCard
              title="Code Review & Optimization"
              prompt={`Review this code for quality:
1. Identify bugs or logical errors
2. Assess code readability and maintainability
3. Flag performance issues
4. Suggest refactoring opportunities
5. Check for security vulnerabilities
6. Provide optimized version

Explain each change and its impact.`}
            />
            <CopyCard
              title="API Endpoint Designer"
              prompt={`Design REST API endpoints for this use case:
1. Define resource models and entities
2. List required endpoints with methods
3. Specify request/response schemas
4. Outline authentication approach
5. Include error handling strategy
6. Provide OpenAPI/Swagger specification

Focus on RESTful principles and usability.`}
            />
          </div>
        </section>

        {/* Creative &amp; Content Generation Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Creative Applications &amp; Multimodal Tasks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Brand Visual Strategy"
              prompt={`Develop a visual brand strategy:
1. Analyze current brand assets (if provided)
2. Define visual identity principles
3. Create color palette rationale
4. Suggest typography approach
5. Design logo mark variations
6. Outline application guidelines

Ensure consistency and professional appeal.`}
            />
            <CopyCard
              title="Narrative Scene Builder"
              prompt={`Create a detailed scene for this story:
1. Set the time, location, and atmosphere
2. Describe visual details vividly
3. Introduce characters and their positions
4. Include sensory elements
5. Build tension or emotional tone
6. Suggest imagery references

Make it cinematically compelling.`}
            />
            <CopyCard
              title="Data Visualization Designer"
              prompt={`Design a visualization for this dataset:
1. Analyze the data structure
2. Suggest optimal chart type(s)
3. Outline color and styling approach
4. Design legend and annotations
5. Plan interactive elements
6. Provide implementation guidance

Prioritize clarity and insight discovery.`}
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              q="What are the key differences between GPT-4 and GPT-4O?"
              a="GPT-4O introduces native multimodal capabilities, accepting images directly without conversion. It offers improved reasoning speed, better performance on complex tasks, and enhanced vision understanding. It&apos;s also more affordable and faster in response times compared to GPT-4 Turbo."
            />
            <FAQItem
              q="How do I effectively use GPT-4O's vision capabilities?"
              a="Provide clear, well-lit images with visible details. Specify exactly what you want analyzed (document structure, data extraction, visual design). Include context about the image&apos;s purpose. For best results, ask specific questions rather than open-ended requests. GPT-4O handles screenshots, diagrams, charts, and photographs effectively."
            />
            <FAQItem
              q="What are some advanced reasoning use cases for GPT-4O?"
              a="GPT-4O excels at multi-step logic problems, scientific hypothesis evaluation, system design, market analysis, legal document interpretation, and complex mathematical reasoning. It can handle ambiguity well and generate structured approaches to unstructured problems."
            />
            <FAQItem
              q="Can GPT-4O generate code from visual designs?"
              a="Yes, GPT-4O can analyze screenshots of designs and generate corresponding code (HTML/CSS/JavaScript, React components, etc.). Provide clear screenshots of the desired interface and specify the technology stack you prefer. The accuracy improves with detailed specifications."
            />
            <FAQItem
              q="How does GPT-4O handle image resolution and file formats?"
              a="GPT-4O accepts JPEG, PNG, GIF, and WebP formats. It processes images of various resolutions effectively. For document analysis, higher resolution images yield better OCR accuracy. For scene analysis, standard web resolution (1080p+) is typically sufficient."
            />
            <FAQItem
              q="What are the token costs for multimodal requests with GPT-4O?"
              a="Images are metered in tokens based on resolution and detail level. A standard image (1024x768) costs approximately 170 tokens. High-detail images cost more. Always factor image tokens into your budget when using vision features. Refer to OpenAI&apos;s pricing page for exact calculations."
            />
            <FAQItem
              q="How can I improve accuracy in GPT-4O's data extraction tasks?"
              a="Provide high-contrast, well-scanned documents. Include context about expected data format. Ask for structured output (JSON, CSV, tables). Request verification steps. For sensitive data extraction, ask for confidence levels. Always validate results, especially for financial or legal documents."
            />
            <FAQItem
              q="Does GPT-4O understand complex technical diagrams?"
              a="Yes, GPT-4O can interpret architecture diagrams, flowcharts, wireframes, ER diagrams, and circuit diagrams. It can extract information, suggest improvements, and convert diagrams to code or documentation. Clarity of the diagram is important for accuracy."
            />
            <FAQItem
              q="Can GPT-4O analyze screenshots of applications or websites?"
              a="Absolutely. GPT-4O can review UI/UX designs, identify accessibility issues, suggest improvements, generate component code, and provide redesign recommendations. It&apos;s useful for code generation from Figma/design tool screenshots."
            />
            <FAQItem
              q="How do I use GPT-4O for creative projects?"
              a="Provide reference images, mood boards, or current work. Ask for specific creative feedback, design suggestions, or generated variations. Use it for color palette development, composition analysis, and narrative visualization. Combine text prompts with image references for best results."
            />
            <FAQItem
              q="What&apos;s the best way to chain GPT-4O tasks together?"
              a="Start with image analysis to extract information, then use that extracted data in follow-up prompts. Reference previous results in new requests. This approach creates sophisticated multi-step workflows. Keep context in your conversation for coherent results across requests."
            />
            <FAQItem
              q="Are there privacy considerations for uploading images to GPT-4O?"
              a="OpenAI states that images are not used for training after March 1, 2024. However, be cautious with sensitive documents containing personal information. Redact confidential details when possible. Review OpenAI&apos;s privacy policy for your jurisdiction&apos;s regulations."
            />
          </div>
        </section>

        {/* Related Links Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Explore Related Prompts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/grok-prompts"
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group"
            >
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Grok Prompts</h3>
              <p className="text-gray-400 mt-2">Real-time reasoning and current events analysis</p>
            </Link>
            <Link
              href="/microsoft-copilot-prompts"
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group"
            >
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Microsoft Copilot</h3>
              <p className="text-gray-400 mt-2">Enterprise productivity and M365 workflows</p>
            </Link>
            <Link
              href="/claude-prompts"
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group"
            >
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Claude Prompts</h3>
              <p className="text-gray-400 mt-2">Long-context reasoning and analysis</p>
            </Link>
            <Link
              href="/gemini-prompt-optimization"
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group"
            >
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Gemini Optimization</h3>
              <p className="text-gray-400 mt-2">Google&apos;s advanced model techniques</p>
            </Link>
            <Link
              href="/midjourney-prompts"
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group"
            >
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Midjourney Prompts</h3>
              <p className="text-gray-400 mt-2">AI image generation and visual creativity</p>
            </Link>
            <Link
              href="/social-media-marketing-prompts"
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group"
            >
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Social Media Marketing</h3>
              <p className="text-gray-400 mt-2">Content strategy and audience engagement</p>
            </Link>
            <Link
              href="/essay-prompts"
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group"
            >
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Essay Prompts</h3>
              <p className="text-gray-400 mt-2">Academic and creative writing guidance</p>
            </Link>
            <Link
              href="/ai-prompts-presentations"
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group"
            >
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">AI Presentations</h3>
              <p className="text-gray-400 mt-2">Presentation design and delivery</p>
            </Link>
          </div>
        </section>
      </main>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'GPT-4O Advanced Vision & Reasoning Prompts',
        description: 'Expert prompts for leveraging GPT-4O multimodal capabilities including vision analysis, complex reasoning, code generation, and creative applications.',
        image: 'https://gptprompts.ai/gpt-4o-prompts.jpg',
        datePublished: '2026-03-28',
        dateModified: '2026-03-28',
        author: {
          '@type': 'Organization',
          name: 'GPTPrompts.AI'
        }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What are the key differences between GPT-4 and GPT-4O?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GPT-4O introduces native multimodal capabilities, accepting images directly without conversion. It offers improved reasoning speed, better performance on complex tasks, and enhanced vision understanding. It&apos;s also more affordable and faster in response times compared to GPT-4 Turbo.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do I effectively use GPT-4O&apos;s vision capabilities?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Provide clear, well-lit images with visible details. Specify exactly what you want analyzed. Include context about the image&apos;s purpose. For best results, ask specific questions rather than open-ended requests. GPT-4O handles screenshots, diagrams, charts, and photographs effectively.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are some advanced reasoning use cases for GPT-4O?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GPT-4O excels at multi-step logic problems, scientific hypothesis evaluation, system design, market analysis, legal document interpretation, and complex mathematical reasoning.'
            }
          }
        ]
      })}} />
    </div>
  )
}
