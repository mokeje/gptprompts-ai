"use client"

import { useState } from "react"
import Link from "next/link"

const ACCENT = "#10a37f"

const CopyCard = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[#0d1a15] border border-[#1a3328] rounded-lg p-5 hover:border-emerald-500/40 transition-colors">
      <pre className="bg-[#070f0b] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-56">
        {text}
      </pre>
      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded transition-colors text-sm"
        style={{ backgroundColor: ACCENT }}
      >
        {copied ? "✓ Copied!" : "Copy Prompt"}
      </button>
    </div>
  )
}

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 bg-[#111] hover:bg-[#1a1a1a] transition-colors text-left"
      >
        <span className="text-gray-200 font-semibold text-sm pr-4">{q}</span>
        <span className="text-emerald-400 text-lg flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="bg-[#0d0d0d] border-t border-gray-800 p-5">
          <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

const sections = [
  {
    id: "complex-reasoning",
    title: "Complex Multi-Step Reasoning",
    description: "Prompts that leverage GPT-4.5's enhanced logical depth for multi-step problems.",
    prompts: [
      `I need you to think through this problem carefully before answering.

Problem: [describe a complex decision or situation with multiple variables]

Step 1: Identify all the key variables and stakeholders involved.
Step 2: Map out second and third-order consequences for each possible approach.
Step 3: Identify the assumptions underlying each approach and rate their reliability.
Step 4: Recommend the optimal approach with clear reasoning.

Show your work at each step.`,
      `Analyse this argument for logical validity and soundness:

Argument: [paste the argument]

For each premise:
1. Is it factually accurate? What evidence supports or refutes it?
2. Does it rely on any logical fallacies? Name them.
3. Are there unstated assumptions? What happens to the conclusion if they are false?

Final verdict: Is the overall argument valid and sound? What would strengthen or weaken it?`,
      `I want to make a major decision about [topic]. Help me think through it rigorously.

Context: [provide relevant background]

Please:
1. Steelman the case FOR this decision (best possible arguments in favour)
2. Steelman the case AGAINST (best possible arguments against)
3. Identify information I would need to resolve the key uncertainties
4. Give a framework for deciding, not just a recommendation`,
      `Solve this problem using first-principles thinking:

Problem: [describe the problem]

Start by questioning all assumptions. Identify the fundamental truths or constraints that must hold. Build up from those foundations to a solution without relying on conventional approaches or what others have done before. Explain your reasoning at each step.`,
    ],
  },
  {
    id: "writing-editing",
    title: "Advanced Writing & Editing",
    description: "High-quality writing, editing, and content refinement prompts.",
    prompts: [
      `Act as a senior editor at a top-tier publication. Review this draft and provide:

Draft: [paste text]

1. An overall assessment (what's working, what isn't)
2. Specific line-level edits with explanations for why each change improves the piece
3. Structural suggestions — is the argument or narrative ordered optimally?
4. Tone and voice feedback — who is the ideal reader and does the writing connect with them?
5. One transformative suggestion that could elevate this from good to exceptional`,
      `I need to write a [type of document] for [audience]. Here is my rough draft:

[paste draft]

Rewrite this to be significantly stronger. Prioritise:
- A compelling opening that immediately establishes stakes
- Clear progression of ideas with smooth transitions
- Concrete specifics over vague generalities
- Active voice and varied sentence length
- A memorable conclusion that gives the reader something to act on or think about

Provide the rewrite, then explain the 3 most important changes you made and why.`,
      `Write a [word count] word [format: essay / report / letter / article] on [topic].

Target audience: [describe reader]
Tone: [formal / conversational / persuasive / neutral]
Key argument or message: [state it]
Supporting points to include: [list 3-5]
What to avoid: [any constraints]

Use specific examples, data, or anecdotes where relevant. Do not pad — every sentence should earn its place.`,
      `Transform this bullet-point outline into a polished, publication-ready piece:

Outline:
[paste bullet points]

Requirements:
- Minimum [X] words
- Tone: [describe tone]
- Include a strong hook in the opening paragraph
- Use subheadings to aid navigation
- End with a clear call to action or takeaway`,
    ],
  },
  {
    id: "research-analysis",
    title: "Research & Deep Analysis",
    description: "Structured research synthesis, competitive analysis, and strategic insight prompts.",
    prompts: [
      `I am researching [topic]. Based on your training knowledge up to your knowledge cutoff:

1. What are the most important recent developments in this area?
2. Who are the key researchers, companies, or thinkers shaping this field?
3. What are the major unresolved debates or open questions?
4. What sources or types of publications should I prioritise for current information?
5. What are the common misconceptions about this topic even among knowledgeable people?

Be specific and flag where your knowledge may be out of date.`,
      `Conduct a thorough competitive analysis of [company/product/idea] against its main competitors.

For each competitor, cover:
- Core value proposition
- Target customer and positioning
- Key strengths and weaknesses
- Business model and pricing
- Defensible moat (if any)

Then provide:
- Where [subject] is clearly differentiated
- Where it is at a disadvantage
- The two or three strategic moves that would most improve its competitive position`,
      `I need to understand the economics of [industry/business model].

Explain:
1. The unit economics (key costs and revenue drivers per unit/customer)
2. The main structural advantages large players have over small ones
3. Typical margin profiles and what drives high vs. low margins
4. The most common ways businesses in this space fail
5. What metrics professional investors or analysts use to evaluate these businesses`,
      `Synthesise the key insights from these sources on [topic]:

Sources: [paste excerpts or summaries]

Your synthesis should:
1. Identify where sources agree (the consensus view)
2. Identify meaningful disagreements and explain why they might exist
3. Draw a conclusion that goes beyond simply summarising each source
4. Note any important gaps — what is not addressed across all sources?`,
    ],
  },
  {
    id: "coding-technical",
    title: "Coding & Technical Problem-Solving",
    description: "Software development, architecture, debugging, and code review prompts.",
    prompts: [
      `Review this code for quality, correctness, and performance:

Language: [language]
Context: [what this code does]

Code:
\`\`\`
[paste code]
\`\`\`

Identify:
1. Bugs or logical errors (if any)
2. Performance bottlenecks
3. Security vulnerabilities
4. Readability and maintainability issues
5. Missing edge case handling

Provide a corrected version with inline comments explaining significant changes.`,
      `I need to architect a system for [describe the problem].

Scale requirements: [users, data volume, requests per second]
Technology constraints: [existing stack, cloud provider, team skills]
Key non-functional requirements: [latency targets, uptime SLA, etc.]

Design a system architecture that:
1. Handles the stated scale requirements
2. Identifies the two or three most critical technical risks and how to mitigate them
3. Can be built incrementally — what is the MVP vs. full version?
4. Includes a data model for the core entities

Provide a written description and, if helpful, a textual diagram.`,
      `Help me debug this issue:

Environment: [language, framework, versions]
Expected behaviour: [what should happen]
Actual behaviour: [what actually happens]
Error message (if any): [paste error]
Relevant code: [paste code]
What I have already tried: [list attempts]

Diagnose the root cause, explain why this bug occurs, and provide a fix. If multiple possible causes exist, list them in order of likelihood.`,
      `Write [language] code to [describe the task].

Requirements:
- [list specific requirements]
- Handle edge cases: [list edge cases to handle]
- Constraints: [performance, memory, dependencies]

Include:
1. The implementation
2. Inline comments explaining non-obvious logic
3. Unit tests covering the main cases and edge cases
4. A brief explanation of the approach and any design decisions`,
    ],
  },
  {
    id: "strategy-business",
    title: "Strategy & Business Planning",
    description: "Business strategy, planning, and operational decision-making prompts.",
    prompts: [
      `Help me build a go-to-market strategy for [product/service].

Target customer: [describe ideal customer]
Problem being solved: [describe the pain point]
Key differentiator: [what makes this different]
Stage: [pre-launch / early traction / scaling]
Resources available: [team size, budget range, timeline]

Provide:
1. Recommended acquisition channels (prioritised by likely ROI)
2. Messaging framework — the core narrative for each channel
3. First 90-day action plan
4. The single biggest risk and how to mitigate it`,
      `I need to make a build vs. buy vs. partner decision for [capability/tool/technology].

Context: [describe the business and what is needed]

Analyse each option across:
- Total cost of ownership (time, money, opportunity cost)
- Time to value
- Strategic importance: is this core to competitive advantage or a commodity?
- Risk profile
- Long-term flexibility

Provide a clear recommendation with reasoning and the key assumptions driving it.`,
      `Write an investor update email for [company name] covering the past quarter.

Key metrics:
- Revenue: [X]
- Growth rate: [X%]
- Key wins this quarter: [list]
- Key challenges: [list]
- Burn rate / runway: [X months]

Make it:
- Direct and honest (no spin)
- Forward-looking (what are the priorities for next quarter)
- Under 400 words
- Ending with a specific ask or update request for investors`,
      `I am planning to expand [business/product] into [new market/geography].

Current base: [describe existing business]
Target market: [describe target]

Help me build a market entry framework covering:
1. Market sizing and addressability
2. Key differences from our current market (cultural, regulatory, competitive)
3. Entry modes to consider and their trade-offs
4. Metrics that would indicate early product-market fit in the new market
5. Biggest risks and early warning signals`,
    ],
  },
]

const faqItems = [
  {
    q: "What is GPT-4.5 and how is it different from GPT-4o?",
    a: "GPT-4.5 is OpenAI's latest large language model, positioned above GPT-4o in capability. It features improved reasoning, better instruction-following, stronger performance on complex multi-step tasks, and more nuanced writing. GPT-4.5 is particularly notable for its expanded context window and enhanced ability to handle subtle, ambiguous prompts without defaulting to generic outputs.",
  },
  {
    q: "When should I use GPT-4.5 vs GPT-4o?",
    a: "Use GPT-4.5 for tasks requiring deep reasoning, nuanced writing, complex multi-step analysis, or where output quality is critical. Use GPT-4o when speed and cost matter more than maximum quality — for quick tasks, real-time applications, and high-volume requests. GPT-4.5 is slower and more expensive per token, so reserve it for tasks where the quality upgrade is worth it.",
  },
  {
    q: "How do I access GPT-4.5?",
    a: "GPT-4.5 is available through ChatGPT Plus and Pro subscriptions on chat.openai.com, and via the OpenAI API for developers. API access uses a per-token pricing model. If you don't see GPT-4.5 in the model dropdown, ensure your subscription is active and the model has been rolled out to your account.",
  },
  {
    q: "What are the best types of prompts for GPT-4.5?",
    a: "GPT-4.5 performs best on complex, well-structured prompts that specify the context, role, desired output format, and any constraints upfront. It handles multi-step tasks particularly well when each step is clearly delineated. Unlike earlier models, GPT-4.5 rarely needs 'chain of thought' instructions — it reasons through problems internally. Focus on being precise about what you need rather than how to think about it.",
  },
  {
    q: "Does GPT-4.5 browse the internet?",
    a: "GPT-4.5 can use web search when enabled through ChatGPT (the browsing tool). When the browsing tool is turned on, it can retrieve current information beyond its training cutoff. Without browsing enabled, it relies on training data. When using it via the API, web browsing must be implemented as a tool/function call.",
  },
  {
    q: "How long can my GPT-4.5 prompts be?",
    a: "GPT-4.5 supports a large context window, enabling long conversations and the processing of extensive documents. For most users on ChatGPT, you can comfortably paste several thousand words of context. API users have access to the model's maximum context window, which can accommodate very large inputs. For best results with long inputs, place the most important instructions at both the beginning and end of your prompt.",
  },
  {
    q: "Can GPT-4.5 write code better than GPT-4o?",
    a: "Yes, GPT-4.5 generally produces higher-quality code, especially for complex tasks involving architecture decisions, multi-file implementations, and debugging novel or obscure issues. For standard CRUD operations and common algorithms, GPT-4o is often sufficient. For nuanced architecture questions, security-sensitive code, or solving challenging algorithmic problems, GPT-4.5's additional capability is typically worth the additional cost.",
  },
  {
    q: "What is the best way to give GPT-4.5 a role or persona?",
    a: "GPT-4.5 responds well to role framing at the start of a conversation. Be specific: instead of 'act as a marketer', say 'act as a VP of Marketing at a B2B SaaS company with 10 years of experience in enterprise sales cycles'. The more specific the expertise and context you assign, the more tailored and useful the outputs will be. You can also set the role in the system prompt when using the API.",
  },
  {
    q: "How do I get GPT-4.5 to give shorter, more direct answers?",
    a: "Add explicit length and format constraints to your prompt. For example: 'Answer in under 150 words', 'Bullet points only, no explanation', or 'Give me just the answer — no preamble'. GPT-4.5 tends toward thoroughness by default, so being explicit about wanting concise outputs works well. You can also ask it to answer and then provide a 'TL;DR' version at the end.",
  },
  {
    q: "Is GPT-4.5 available through the API for commercial use?",
    a: "Yes, GPT-4.5 is available via the OpenAI API and outputs are available for commercial use under OpenAI's usage policies. Check OpenAI's current terms of service for specific restrictions. Developers building products on GPT-4.5 should review the API usage tier requirements, rate limits, and per-token pricing for their use case.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GPT-4.5 Prompts 2026: 60+ Copy-Paste Prompts for OpenAI's Smartest Model",
  description:
    "Get 60+ copy-paste GPT-4.5 prompts for complex reasoning, writing, coding, research, and analysis. Expert templates that unlock the full capability of OpenAI's most advanced model.",
  author: { "@type": "Organization", name: "GPTPrompts.AI" },
  datePublished: "2025-03-01",
  dateModified: "2026-03-01",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

export default function GPT45PromptsPage() {
  return (
    <div className="min-h-screen bg-[#07100c] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">OpenAI Models</p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">
            GPT-4.5 Prompts: 60+ Copy-Paste Templates for OpenAI's Most Advanced Model
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Unlock the full power of GPT-4.5 with expert prompts for complex reasoning, research, writing, coding, and
            business strategy. Each template is ready to copy and use in ChatGPT or the OpenAI API.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-6" style={{ color: ACCENT }}>
          What Makes GPT-4.5 Different
        </h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          GPT-4.5 is OpenAI's most capable language model for complex tasks requiring deep reasoning, nuanced writing,
          and multi-step analysis. Unlike GPT-4o which optimises for speed and breadth, GPT-4.5 allocates more compute
          to each response, resulting in qualitatively better outputs on demanding tasks.
        </p>
        <div className="bg-[#0d1a15] border border-emerald-900/40 rounded-xl p-6 mb-6">
          <p className="text-emerald-300 font-semibold mb-3 text-sm uppercase tracking-wider">
            When to use GPT-4.5 vs GPT-4o
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400">
            <div>
              <p className="font-semibold text-emerald-400 mb-2">Use GPT-4.5 for:</p>
              <ul className="space-y-1">
                <li>Complex reasoning and analysis</li>
                <li>Long-form writing requiring nuance</li>
                <li>Hard debugging and architecture</li>
                <li>Strategic planning and decisions</li>
                <li>Research synthesis and critique</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-400 mb-2">Use GPT-4o for:</p>
              <ul className="space-y-1">
                <li>Quick Q&amp;A and lookups</li>
                <li>High-volume, cost-sensitive tasks</li>
                <li>Real-time applications</li>
                <li>Standard content generation</li>
                <li>Conversational chat</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed">
          The prompts below are structured to give GPT-4.5 the context and constraints it needs to deliver high-quality
          outputs. Each prompt includes placeholders in [brackets] for you to fill in with your specifics.
        </p>
      </div>

      {/* Prompt sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {sections.map((section) => (
          <div key={section.id} className="mb-16">
            <h2 className="text-3xl font-bold mb-2" style={{ color: ACCENT }}>
              {section.title}
            </h2>
            <p className="text-gray-500 mb-8 text-sm">{section.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.prompts.map((prompt, idx) => (
                <CopyCard key={idx} text={prompt} />
              ))}
            </div>
          </div>
        ))}

        {/* FAQ */}
        <div className="mt-20 mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ color: ACCENT }}>
            GPT-4.5 FAQ
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <FaqItem key={idx} q={item.q} a={item.a} />
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8" style={{ color: ACCENT }}>
            Explore More Prompt Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ChatGPT Prompts", href: "/chatgpt-prompts", color: "#10a37f" },
              { title: "ChatGPT o3 Prompts", href: "/chatgpt-o3-prompts", color: "#10a37f" },
              { title: "GPT-o1 Guide", href: "/gpt-o1-guide", color: "#8b5cf6" },
              { title: "Claude Prompts", href: "/claude-prompts", color: "#ff4500" },
              { title: "Gemini Advanced Prompts", href: "/gemini-advanced-prompts", color: "#4285f4" },
              { title: "AI Agent Prompts", href: "/ai-agent-prompts", color: "#8b5cf6" },
              { title: "Prompt Engineering Fundamentals", href: "/prompt-engineering-fundamentals", color: "#10a37f" },
              { title: "ChatGPT Alternatives", href: "/chatgpt-alternatives", color: "#6366f1" },
              { title: "All Prompt Guides", href: "/website-links", color: "#10a37f" },
            ].map((page, idx) => (
              <Link
                key={idx}
                href={page.href}
                className="p-4 rounded-lg border transition-all duration-200 hover:opacity-80"
                style={{ borderColor: page.color + "40", backgroundColor: page.color + "08" }}
              >
                <span className="font-semibold text-sm" style={{ color: page.color }}>
                  {page.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
