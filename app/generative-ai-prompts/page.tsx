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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#6366F1] transition-colors">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono mb-4 max-h-64">{prompt}</pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#6366F1] hover:bg-[#4f46e5] text-white font-medium py-2 px-4 rounded">
        {copied ? (<><Check className="w-4 h-4" />Copied</>) : (<><Copy className="w-4 h-4" />Copy Prompt</>)}
      </button>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 bg-[#1a1a1a] hover:bg-[#242424] transition-colors">
        <span className="font-semibold text-white text-left">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#6366F1] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="p-4 bg-[#0a0a0a] border-t border-[#2a2a2a] text-gray-300">{answer}</div>}
    </div>
  )
}

export default function GenerativeAIPromptsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "100+ Best Generative AI Prompts for Every Use Case",
    description: "Comprehensive generative AI prompts for text generation, image creation, code generation, data synthesis, and creative content across all major AI platforms.",
    datePublished: "2026-03-29",
    dateModified: "2026-03-29",
    image: "https://gptprompts.ai/og.png",
    author: { "@type": "Organization", name: "GPTPrompts.AI" }
  }
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is generative AI?", acceptedAnswer: { "@type": "Answer", text: "Generative AI refers to artificial intelligence systems that can create new content including text, images, code, music, and video. These systems learn patterns from training data and generate original outputs based on user prompts." } },
      { "@type": "Question", name: "What are the best generative AI tools?", acceptedAnswer: { "@type": "Answer", text: "Top generative AI tools include ChatGPT and Claude for text, Midjourney and DALL-E for images, GitHub Copilot for code, Suno for music, and Sora for video. The best tool depends on your specific use case." } },
      { "@type": "Question", name: "How do I write effective generative AI prompts?", acceptedAnswer: { "@type": "Answer", text: "Effective prompts are specific, provide context, define the desired output format, include examples when helpful, and specify constraints like tone, length, and audience. Iterating on prompts improves results significantly." } },
      { "@type": "Question", name: "Can generative AI replace human creativity?", acceptedAnswer: { "@type": "Answer", text: "Generative AI augments human creativity rather than replacing it. AI excels at generating drafts, variations, and ideas quickly, but human judgment, taste, and strategic thinking remain essential for high-quality creative work." } },
      { "@type": "Question", name: "What are the limitations of generative AI?", acceptedAnswer: { "@type": "Answer", text: "Generative AI can produce inaccurate information (hallucinations), may reflect biases from training data, struggles with very recent events, and cannot truly understand context the way humans do. Always verify important outputs." } },
      { "@type": "Question", name: "Is generative AI content detectable?", acceptedAnswer: { "@type": "Answer", text: "AI detection tools exist but are not perfectly reliable. Well-prompted and human-edited AI content is harder to detect. The best approach is to use AI as a starting point and add your own voice and expertise." } },
      { "@type": "Question", name: "How is generative AI used in business?", acceptedAnswer: { "@type": "Answer", text: "Businesses use generative AI for content creation, customer service chatbots, code generation, data analysis, marketing copy, product design, document summarization, and workflow automation across every department." } },
      { "@type": "Question", name: "What is prompt engineering?", acceptedAnswer: { "@type": "Answer", text: "Prompt engineering is the practice of crafting effective instructions for AI models to produce desired outputs. It involves techniques like chain-of-thought reasoning, few-shot examples, role-playing, and structured output formatting." } },
      { "@type": "Question", name: "Are generative AI outputs copyrighted?", acceptedAnswer: { "@type": "Answer", text: "Copyright law around AI-generated content is evolving. In many jurisdictions, purely AI-generated content may not be copyrightable, but content with substantial human creative input may qualify. Consult legal advice for specific cases." } },
      { "@type": "Question", name: "How do I get started with generative AI?", acceptedAnswer: { "@type": "Answer", text: "Start with free tools like ChatGPT or Claude for text tasks. Experiment with different prompt styles, learn basic prompt engineering techniques, and gradually explore specialized tools for images, code, and other content types." } }
    ]
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#6366F1]/10 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1 bg-[#6366F1]/10 border border-[#6366F1]/30 rounded-full text-sm text-[#6366F1] mb-6">100+ Generative AI Prompts</div>
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Best Generative AI Prompts for Every Use Case</h1>
          <p className="text-xl text-gray-400 mb-8">Master generative AI with expertly crafted prompts for text, images, code, data, and creative content. Works across ChatGPT, Claude, Gemini, Midjourney, and more.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#6366F1]">Text Generation &amp; Content Creation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="Long-Form Article Generation" prompt="Write a comprehensive 2,000-word article about [topic]. Structure it with: an engaging hook introduction that presents a surprising statistic, 5 main sections with descriptive H2 headers, practical examples in each section, a data-backed conclusion with actionable takeaways. Target audience: [audience]. Tone: authoritative but conversational. Include transition sentences between sections." />
            <CopyCard title="Multi-Format Content Repurposing" prompt="I have this original content: [paste content]. Repurpose it into 5 different formats: 1) A LinkedIn post (under 1,300 characters) with a hook and CTA, 2) A Twitter/X thread (8-10 tweets), 3) An email newsletter section (200 words), 4) Instagram carousel text (10 slides), 5) A YouTube video script outline (5-7 minutes). Maintain the core message across all formats." />
            <CopyCard title="Persuasive Copy Framework" prompt="Using the PAS (Problem-Agitate-Solution) framework, write sales copy for [product/service]. Start by identifying the core problem my target audience ([audience]) faces. Agitate by describing the emotional and practical consequences of not solving it. Present my solution with 3 specific benefits backed by proof points. End with a compelling CTA. Keep it under 500 words." />
            <CopyCard title="Brand Voice Content Generation" prompt="Generate 5 pieces of social media content that match this brand voice profile: Tone: [describe tone]. Key values: [list values]. Words we use: [list preferred terms]. Words we avoid: [list terms to avoid]. Target audience: [describe]. Each piece should be for a different platform (LinkedIn, Twitter, Instagram, Facebook, TikTok) and address the topic of [topic]." />
            <CopyCard title="SEO-Optimized Blog Outline" prompt="Create a detailed blog outline targeting the keyword '[primary keyword]'. Include: a title with the keyword naturally placed, meta description (155 characters), 7 H2 sections with 2-3 H3 subsections each, LSI keywords to include in each section, a featured snippet-optimized FAQ section with 5 questions, internal linking opportunities, and suggested word count per section." />
            <CopyCard title="Technical Documentation Writer" prompt="Write clear technical documentation for [feature/API/process]. Structure: Overview (what it does and why it matters), Prerequisites (what users need), Step-by-step guide with code examples, Common use cases with sample implementations, Troubleshooting section (5 common issues and solutions), FAQ. Use a professional but approachable tone. Include code blocks formatted for [language]." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#6366F1]">Image &amp; Visual Generation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="Photorealistic Product Shot" prompt="Create a photorealistic product photograph of [product description] on a clean white marble surface. Natural window lighting from the left creates soft shadows. Shallow depth of field focuses on the product with a subtly blurred background. Style: high-end commercial photography, 4K resolution, color-accurate, magazine-quality lighting." />
            <CopyCard title="Brand Visual Identity Set" prompt="Design a cohesive visual identity set for a [industry] brand called [name]. Create: 1) A minimalist logo mark using geometric shapes, 2) A color palette with primary, secondary, and accent colors with hex codes, 3) A business card layout, 4) A social media profile image. Style: modern, clean, professional. Primary colors: [colors]." />
            <CopyCard title="Architectural Visualization" prompt="Generate a photorealistic architectural visualization of a modern [building type] with floor-to-ceiling windows, clean concrete surfaces, and integrated greenery. Golden hour lighting, 35mm lens perspective from street level looking up slightly. Include human figures for scale, mature trees, and a reflecting pool in the foreground." />
            <CopyCard title="Infographic Visual Layout" prompt="Create an infographic visual layout about [topic]. Use a vertical format (1080x1920). Include: a bold header section, 5 data points represented with icons and numbers, a timeline or flow showing progression, a color scheme of [colors]. Style: flat design, modern, data-focused. Text should be placeholder markers showing layout positioning." />
            <CopyCard title="Character Design Sheet" prompt="Design a character sheet for a [character description] in [art style]. Include: front view, 3/4 view, and back view. Show 3 expression variations (neutral, happy, determined). Include a color palette swatch and height reference. The character should have [specific features]. Background: clean white with subtle grid lines." />
            <CopyCard title="Abstract Art for Corporate Spaces" prompt="Create an abstract art piece suitable for a modern corporate office lobby. Use flowing organic shapes that suggest growth and innovation. Color palette: deep navy, white, and touches of gold. The composition should feel balanced and calming, with a subtle sense of movement from left to right. Large format, high resolution." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#6366F1]">Code Generation &amp; Development</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="Full-Stack Feature Implementation" prompt="Build a complete [feature name] feature for a [framework] application. Include: 1) Database schema/model with migrations, 2) Backend API endpoints with input validation and error handling, 3) Frontend component with form handling and loading states, 4) Unit tests for the backend logic, 5) Integration test for the API endpoint. Follow [coding convention] patterns and include comments explaining key decisions." />
            <CopyCard title="API Integration Wrapper" prompt="Create a well-structured API wrapper class for the [service name] API in [language]. Include: authentication handling (API key and OAuth), rate limiting with exponential backoff, request/response type definitions, error handling with custom exception classes, retry logic for transient failures, logging of requests and responses, and usage examples for the 5 most common endpoints." />
            <CopyCard title="Database Query Optimization" prompt="Analyze this SQL query and optimize it for performance:\n\n[paste query]\n\nProvide: 1) Explanation of current performance bottlenecks, 2) Optimized query with proper indexing suggestions, 3) Estimated performance improvement, 4) Alternative approaches (CTEs, window functions, materialized views), 5) Index creation statements needed, 6) Execution plan analysis tips." />
            <CopyCard title="CI/CD Pipeline Configuration" prompt="Create a complete CI/CD pipeline configuration for a [language/framework] project using [CI platform]. Include: 1) Linting and formatting checks, 2) Unit and integration test stages with parallel execution, 3) Security vulnerability scanning, 4) Docker image build and push, 5) Staging deployment with smoke tests, 6) Production deployment with rollback capability, 7) Slack notification for failures." />
            <CopyCard title="Refactoring Legacy Code" prompt="Refactor this legacy code following SOLID principles and modern best practices:\n\n[paste code]\n\nProvide: 1) Analysis of current code smells and issues, 2) Refactored version with clear separation of concerns, 3) Explanation of each change and why it improves the code, 4) New unit tests that cover the refactored logic, 5) Migration guide for updating dependent code." />
            <CopyCard title="Design Pattern Implementation" prompt="Implement the [design pattern name] pattern in [language] for a [use case]. Include: 1) UML-style diagram description of the pattern structure, 2) Interface/abstract class definitions, 3) Concrete implementations with realistic business logic, 4) Client code showing how to use the pattern, 5) Unit tests, 6) When to use vs. when to avoid this pattern. Add comments explaining each component." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#6366F1]">Data Analysis &amp; Synthesis</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="Dataset Analysis Framework" prompt="Analyze this dataset and provide a comprehensive report:\n\n[describe or paste data]\n\nInclude: 1) Data quality assessment (missing values, outliers, inconsistencies), 2) Descriptive statistics for all numerical columns, 3) Distribution analysis with skewness and kurtosis, 4) Correlation matrix highlighting significant relationships, 5) Top 5 actionable insights with business implications, 6) Recommended next steps for deeper analysis." />
            <CopyCard title="Market Research Synthesis" prompt="Synthesize market research findings from these sources into an executive briefing:\n\n[list sources and key data points]\n\nStructure: Market size and growth rate, key trends (ranked by impact), competitive landscape overview, customer segment analysis, opportunity assessment with TAM/SAM/SOM estimates, risk factors, and 3 strategic recommendations with supporting evidence." />
            <CopyCard title="Survey Data Interpreter" prompt="Analyze these survey results and generate insights:\n\nSample size: [n]. Survey topic: [topic]. Key questions and response distributions: [paste data]\n\nProvide: 1) Statistical significance assessment, 2) Cross-tabulation analysis of key demographic segments, 3) Sentiment trends and notable patterns, 4) Comparison with industry benchmarks, 5) Data visualization recommendations, 6) Executive summary with top 3 findings and recommended actions." />
            <CopyCard title="Financial Data Narrative" prompt="Transform this financial data into a narrative analysis for [audience]:\n\n[paste financial metrics]\n\nInclude: Revenue trend analysis with YoY and QoQ comparisons, margin analysis highlighting changes and drivers, key ratio calculations (P/E, debt-to-equity, current ratio), cash flow commentary, peer comparison if applicable, forward-looking statements based on trends, and risk factors to monitor." />
            <CopyCard title="A/B Test Results Analysis" prompt="Analyze these A/B test results and provide recommendations:\n\nTest: [description]. Duration: [days]. Control: [metrics]. Variant: [metrics]. Sample sizes: [numbers].\n\nCalculate: statistical significance (p-value), confidence interval, effect size, minimum detectable effect, and required sample size validation. Provide a clear recommendation (ship, iterate, or discard) with reasoning and next experiment suggestions." />
            <CopyCard title="Competitive Intelligence Report" prompt="Create a competitive intelligence report for [company] in the [industry] space. Analyze these competitors: [list 3-5 competitors]. For each: product positioning, pricing strategy, target market, key differentiators, recent moves (last 6 months), strengths and weaknesses. Then provide: competitive matrix, gap analysis, strategic opportunities for [company], and recommended counter-strategies." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#6366F1]">Creative &amp; Multimedia Content</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="Video Script with Shot List" prompt="Write a 3-minute video script for [topic/product] targeting [audience]. Include: Opening hook (first 5 seconds that stops the scroll), problem statement, solution presentation with 3 key benefits, social proof element, and CTA. Format each section with: narration text, shot description (camera angle, on-screen graphics), timing, and B-roll suggestions. Tone: [describe tone]." />
            <CopyCard title="Podcast Episode Planning" prompt="Plan a complete podcast episode about [topic]. Include: 1) Episode title options (3 variations), 2) 50-word episode description, 3) Detailed outline with timestamps (for 30-minute episode), 4) 10 interview questions if featuring a guest, 5) Key talking points with supporting data, 6) Listener engagement prompts, 7) Show notes template with links, 8) Social media teasers (3 quote graphics text)." />
            <CopyCard title="Music Composition Prompt" prompt="Compose a [genre] track with these specifications: Tempo: [BPM]. Key: [key]. Mood: [describe mood]. Instruments: [list instruments]. Structure: 8-bar intro, 16-bar verse, 8-bar pre-chorus building tension, 16-bar chorus with full instrumentation, 16-bar verse 2 with variations, repeat chorus, 8-bar bridge with stripped-back arrangement, final chorus with added layers, 8-bar outro fading. Include chord progression suggestions for each section." />
            <CopyCard title="Interactive Story Builder" prompt="Create a branching interactive story about [premise]. Write the opening scene (300 words) that establishes the setting, introduces the protagonist, and presents the central conflict. At the end, provide 3 meaningful choices that lead to genuinely different story paths. For each choice, write a brief description of where it leads and what themes it explores. The story should have [tone] and appeal to [audience]." />
            <CopyCard title="Presentation Narrative Arc" prompt="Structure a 20-slide presentation about [topic] using a narrative arc. Slide 1-3: Hook and context setting (the world as it is). Slides 4-6: The problem/opportunity (what needs to change). Slides 7-12: The solution/approach (your proposal with evidence). Slides 13-16: Implementation and timeline. Slides 17-19: Expected outcomes with metrics. Slide 20: Call to action. For each slide, provide: headline, 3 bullet points, speaker notes, and visual suggestion." />
            <CopyCard title="Social Media Campaign Creative" prompt="Design a 7-day social media campaign for [product/event launch]. For each day, create: 1) Platform-specific post copy (Instagram, LinkedIn, Twitter), 2) Visual concept description for each post, 3) Hashtag strategy (5 branded + 5 trending), 4) Posting time recommendation, 5) Engagement prompt or CTA. Include a mix of content types: carousel, video, story, poll, and static image. Build anticipation from Day 1 to launch on Day 7." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="What is generative AI?" answer="Generative AI refers to artificial intelligence systems that can create new content including text, images, code, music, and video. These systems learn patterns from training data and generate original outputs based on user prompts." />
            <FAQItem question="What are the best generative AI tools?" answer="Top generative AI tools include ChatGPT and Claude for text, Midjourney and DALL-E for images, GitHub Copilot for code, Suno for music, and Sora for video. The best tool depends on your specific use case." />
            <FAQItem question="How do I write effective generative AI prompts?" answer="Effective prompts are specific, provide context, define the desired output format, include examples when helpful, and specify constraints like tone, length, and audience. Iterating on prompts improves results significantly." />
            <FAQItem question="Can generative AI replace human creativity?" answer="Generative AI augments human creativity rather than replacing it. AI excels at generating drafts, variations, and ideas quickly, but human judgment, taste, and strategic thinking remain essential for high-quality creative work." />
            <FAQItem question="What are the limitations of generative AI?" answer="Generative AI can produce inaccurate information (hallucinations), may reflect biases from training data, struggles with very recent events, and cannot truly understand context the way humans do. Always verify important outputs." />
            <FAQItem question="Is generative AI content detectable?" answer="AI detection tools exist but are not perfectly reliable. Well-prompted and human-edited AI content is harder to detect. The best approach is to use AI as a starting point and add your own voice and expertise." />
            <FAQItem question="How is generative AI used in business?" answer="Businesses use generative AI for content creation, customer service chatbots, code generation, data analysis, marketing copy, product design, document summarization, and workflow automation across every department." />
            <FAQItem question="What is prompt engineering?" answer="Prompt engineering is the practice of crafting effective instructions for AI models to produce desired outputs. It involves techniques like chain-of-thought reasoning, few-shot examples, role-playing, and structured output formatting." />
            <FAQItem question="Are generative AI outputs copyrighted?" answer="Copyright law around AI-generated content is evolving. In many jurisdictions, purely AI-generated content may not be copyrightable, but content with substantial human creative input may qualify. Consult legal advice for specific cases." />
            <FAQItem question="How do I get started with generative AI?" answer="Start with free tools like ChatGPT or Claude for text tasks. Experiment with different prompt styles, learn basic prompt engineering techniques, and gradually explore specialized tools for images, code, and other content types." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Explore More Prompts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "ChatGPT Prompts", href: "/chatgpt-prompts", color: "#10A37F" },
              { title: "Claude Prompts", href: "/claude-prompts", color: "#D97706" },
              { title: "Gemini Prompts", href: "/gemini-prompts", color: "#4285F4" },
              { title: "Midjourney Prompts", href: "/midjourney-prompts", color: "#8B5CF6" },
              { title: "DALL-E 3 Prompts", href: "/dalle-3-prompts", color: "#10A37F" },
              { title: "AI Writing Prompts", href: "/ai-writing-prompts", color: "#EC4899" },
              { title: "AI for Developers", href: "/ai-prompts-for-developers", color: "#6366F1" },
              { title: "Prompt Engineering", href: "/prompt-engineering-fundamentals", color: "#F59E0B" },
            ].map((page) => (
              <Link key={page.href} href={page.href} className="block p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-opacity-60 transition-colors text-center" style={{ borderColor: page.color + "40" }}>
                <span className="font-medium text-white text-sm">{page.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}