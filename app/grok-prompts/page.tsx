"use client"

import { useState } from "react"
import { Check, Copy, Search, Brain, MessageSquare, Zap, TrendingUp, ChevronDown, ChevronUp } from "lucide-react"

const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#FF6B00] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#ff8533] text-white font-medium py-2 px-4 rounded transition-colors"
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
          <ChevronUp className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
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

export default function GrokPromptsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Grok Prompts: Master xAI&apos;s Grok 3 AI | GPTPrompts.AI",
    description: "Complete guide to Grok AI prompts. 50+ expert prompts for real-time research, analysis, creative work, coding, and X/Twitter integration.",
    image: "https://gptprompts.ai/og-grok.png",
    datePublished: "2026-03-28",
    dateModified: "2026-03-28",
    author: {
      "@type": "Organization",
      name: "GPTPrompts.AI"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Grok 3 better than ChatGPT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "On most benchmarks, Grok 3 performs comparably to GPT-4o and Claude 3.7. It&apos;s particularly competitive on coding, mathematics, and real-world reasoning. Grok&apos;s unique advantage is always-on real-time web access and X/Twitter integration. ChatGPT has a larger ecosystem of custom GPTs and plugins."
        }
      },
      {
        "@type": "Question",
        name: "How do I access Grok?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Grok is available through X (formerly Twitter) with an X Premium or Premium+ subscription. You can also access it at grok.com. Grok 3 with extended thinking (Think mode) is available to X Premium+ subscribers."
        }
      },
      {
        "@type": "Question",
        name: "What is Grok&apos;s &apos;Think mode&apos;?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Think mode is Grok&apos;s extended reasoning feature — similar to OpenAI&apos;s o1 chain-of-thought. When enabled, Grok thinks through a problem step-by-step before answering. It&apos;s slower but significantly better on math, coding, logic problems, and deep research tasks."
        }
      },
      {
        "@type": "Question",
        name: "Does Grok have an API?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — xAI released the Grok API in 2024. It&apos;s OpenAI API-compatible, so you can swap the base URL and use Grok in applications built for ChatGPT. The API includes Grok 3, Grok 3 mini, and vision capabilities."
        }
      },
      {
        "@type": "Question",
        name: "Is Grok good for coding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Grok 3 performs competitively on coding benchmarks and has real-time access to documentation, Stack Overflow, and GitHub discussions. For complex multi-file projects, use Grok via API in Cursor AI for better IDE integration than Grok&apos;s chat interface alone."
        }
      },
      {
        "@type": "Question",
        name: "How is Grok different from Claude and Gemini?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Grok stands out for always-on real-time web access, native X/Twitter integration, and a distinctive personality designed for wit and directness. Claude excels at nuance and document analysis. Gemini is best integrated with Google services. Grok is the clear winner for current-events research."
        }
      },
      {
        "@type": "Question",
        name: "Can I use Grok offline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No — Grok requires an internet connection and live web access to function. Its real-time web search capability is fundamental to its design, not an optional feature."
        }
      },
      {
        "@type": "Question",
        name: "What are Grok&apos;s limitations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Grok cannot process image uploads (no vision capability yet in chat), has limited file handling compared to Claude, and knowledge cutoff is early 2024. However, real-time web access largely compensates for the knowledge cutoff."
        }
      },
      {
        "@type": "Question",
        name: "Is Grok good for long-form writing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Grok is excellent for researching and writing about current topics, trends, and breaking news. For evergreen long-form content, Claude or ChatGPT may be slightly better at nuance and consistency. For articles that need real-time data and sources, Grok is unbeatable."
        }
      },
      {
        "@type": "Question",
        name: "How does Grok handle controversial topics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Grok was designed with a more direct and opinionated approach than other LLMs. It will engage with politically charged and controversial topics more openly, though it still applies ethical boundaries. Use Grok when you want nuanced takes on complex issues."
        }
      },
      {
        "@type": "Question",
        name: "Can I use Grok for business research?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Grok excels at competitive intelligence, market research, trend analysis, and real-time business news monitoring. Use it for understanding competitor moves, customer sentiment on X, industry shifts, and real-time data that matters for decision-making."
        }
      },
      {
        "@type": "Question",
        name: "What is the best use case for Grok right now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Real-time research and current-events analysis. Need to understand what&apos;s trending on X, how markets are reacting to news, or what people are saying about your brand right now? Grok is faster and more current than any other LLM. For timeless work, Claude or ChatGPT are still strong choices."
        }
      }
    ]
  }

  const sections = [
    {
      id: "realtime",
      title: "Real-Time Information & News Research",
      description: "Grok&apos;s primary strength: always-on web access. Use these prompts for current events, breaking news, market intelligence, and live trending data.",
      icon: <Search className="w-6 h-6" />,
      prompts: [
        {
          title: "Breaking News Analysis",
          prompt: `What is happening with [topic/company/situation] right now? I need real-time context.

Provide:
1. What happened (factual, current, sourced)
2. Timeline of events (what led to this)
3. Key players involved and their positions
4. Market/public reaction (if relevant)
5. What to watch for next
6. Your assessment of significance

Use only information from the last 48 hours. Flag any uncertainty or conflicting reports.`
        },
        {
          title: "Market Intelligence Brief",
          prompt: `Give me a real-time market intelligence brief on [company/sector/market].

Include:
- Latest news and announcements (last 30 days)
- Stock performance and market reaction (if public)
- Competitor moves and positioning
- Customer/user sentiment on X/social media
- Industry trends affecting this space
- Key metrics and growth signals

Format: Executive summary (3 bullet points) + detailed breakdown. Use current data only.`
        },
        {
          title: "X/Twitter Trend Deep Dive",
          prompt: `What&apos;s trending right now on X about [topic]? Give me the full story.

Tell me:
- The top 5 posts/conversations driving the narrative
- The core narrative (what&apos;s the story?)
- Sentiment breakdown (positive/negative/neutral percentages)
- Key influencers and thought leaders involved
- How this connects to broader trends
- What this tells us about public opinion or market direction

I want to understand the trend, not just see a list of posts.`
        }
      ]
    },
    {
      id: "analysis",
      title: "Analysis & Deep Reasoning",
      description: "Use Grok&apos;s reasoning and Think mode for complex problems, strategy questions, and nuanced analysis requiring current data.",
      icon: <Brain className="w-6 h-6" />,
      prompts: [
        {
          title: "Strategic Business Analysis",
          prompt: `Analyze [company/situation/decision] from a strategic perspective.

Think through:
1. What is the underlying business problem?
2. What are the constraints and opportunities?
3. What are 3-5 strategic options (with pros/cons for each)?
4. Which option is most likely to succeed and why?
5. What are the key risks and how to mitigate them?
6. What metrics would indicate success?

Use real-time data if available. Think deeply about second and third-order effects.`
        },
        {
          title: "Competitive Intelligence Analysis",
          prompt: `Conduct a competitive analysis: How is [competitor] positioning against [our business/market]?

Research and analyze:
- Their recent product/strategy moves
- How they&apos;re messaging to customers (tone, positioning)
- Strengths and weaknesses vs. alternatives
- Market perception (what are people saying on X?)
- Pricing strategy and go-to-market approach
- Where they&apos;re winning and losing
- Recommendations: How should we respond?

Use current data. Be specific about sources and evidence.`
        },
        {
          title: "Problem Diagnosis & Solutions",
          prompt: `I&apos;m facing this problem: [problem statement]

Help me think through:
1. What&apos;s really causing this? (Not just symptoms)
2. What similar problems have been solved by others? (Examples)
3. What are all the possible solutions? (Brainstorm at least 5)
4. Pros and cons of each approach
5. Which would you recommend and why?
6. What&apos;s the implementation path?
7. What could go wrong?

Think deeply. Use examples from real businesses facing similar challenges.`
        }
      ]
    },
    {
      id: "creative",
      title: "Creative & Conversational Work",
      description: "Grok&apos;s personality and directness shine here. Use for witty content, opinionated takes, and creative projects.",
      icon: <MessageSquare className="w-6 h-6" />,
      prompts: [
        {
          title: "Sharp Editorial/Opinion Writing",
          prompt: `Write a [content format] about [topic] with a sharp, insightful edge.

Requirements:
- Tone: Witty, incisive, opinionated (not generic corporate)
- Angle: [specific angle/perspective]
- Target: [who is this for?]
- Length: [X words/paragraphs]
- Style: Punchy opening, strong POV, unexpected insights

Avoid: Clichés, both-sides-ism, focus-group language. Go for the real, interesting take.`
        },
        {
          title: "X/Twitter Content Strategy",
          prompt: `Help me create a Twitter/X content strategy about [topic/niche].

Plan:
1. What&apos;s the core POV? (What do I want to be known for?)
2. What are 10 tweet themes I should explore?
3. For each theme, give me 2 tweet examples (500 chars max)
4. What tone/style should I use?
5. What hashtags/communities should I engage with?
6. How often should I post?
7. How to grow following in this niche?

Make it specific, actionable, and authentic to my voice.`
        },
        {
          title: "Brainstorm & Creative Ideation",
          prompt: `I need creative ideas for [project/challenge].

Brainstorm with me:
1. What are 10 unconventional approaches? (Not the obvious ones)
2. For each idea, what would execution look like?
3. Which has the highest impact potential?
4. Which is most feasible given [constraints]?
5. How would you test/validate the best ideas?
6. What could make this idea go viral or remarkable?

Challenge my assumptions. Push for originality.`
        }
      ]
    },
    {
      id: "coding",
      title: "Technical & Coding Assistance",
      description: "Grok has real-time access to documentation, Stack Overflow, and GitHub. Excellent for current libraries, debugging, and architecture.",
      icon: <Zap className="w-6 h-6" />,
      prompts: [
        {
          title: "Debug & Problem Solving",
          prompt: `I&apos;m getting this error: [error message/code snippet]

Help me:
1. What&apos;s causing this error?
2. What are the most common reasons this happens?
3. How do I fix it? (Step-by-step)
4. How can I prevent this in the future?
5. Are there recent Stack Overflow or GitHub solutions for this?
6. What should I test to make sure the fix works?

Provide code examples if relevant. Be specific to my tech stack: [tech stack].`
        },
        {
          title: "Architecture & Technical Design",
          prompt: `I need to build [system/feature]. How should I architect this?

Think through:
1. What are the core requirements and constraints?
2. What are 3 possible architecture approaches?
3. Pros/cons of each (performance, scalability, maintainability)
4. Which would you recommend and why?
5. What tech stack best fits this problem?
6. What are the key components/services?
7. What are potential bottlenecks?
8. How would you test this?

Use current best practices. Link to recent relevant articles/patterns if they exist.`
        },
        {
          title: "Code Review & Optimization",
          prompt: `Review this code and help me improve it:

[code snippet or system description]

Analyze:
1. Does this work? Any obvious bugs?
2. Performance: Is this efficient? Room to optimize?
3. Readability: Is this understandable and maintainable?
4. Security: Are there vulnerabilities?
5. What&apos;s missing? (Error handling, edge cases, testing)
6. How would senior engineers approach this differently?
7. Refactored version with explanations

Tech stack: [language/framework]. Be pragmatic about real-world constraints.`
        }
      ]
    },
    {
      id: "twitter",
      title: "X/Twitter Integration & Social Monitoring",
      description: "Grok has native X integration and real-time access to trending topics, conversations, and user sentiment.",
      icon: <TrendingUp className="w-6 h-6" />,
      prompts: [
        {
          title: "Brand Sentiment & Reputation Monitoring",
          prompt: `What is the current sentiment about [brand/company/person] on X right now?

Tell me:
1. Overall sentiment score (positive/negative/neutral breakdown)
2. Top 10 most-engaged posts about [brand]
3. Key narratives (what are people saying?)
4. Sentiment drivers (what&apos;s causing positive/negative reactions?)
5. Key influencers driving the conversation
6. Any emerging crises or opportunities?
7. Recommendations: How should [brand] respond?

Use real-time X data. Flag any rapid sentiment shifts.`
        },
        {
          title: "Influencer & Audience Research",
          prompt: `Who are the top voices talking about [topic/industry] on X right now?

Research:
1. Top 15 accounts by influence/reach in this space
2. Their audience size and engagement rates
3. Their main talking points and content themes
4. Who they engage with most
5. Which accounts are rising (growing influence)?
6. Which partnerships/collaborations make sense?
7. How could we engage this community authentically?

Provide recent post examples and account links.`
        },
        {
          title: "Viral Content Strategy & Trends",
          prompt: `What are the hottest trends on X right now that relate to [topic/niche]?

Analysis:
1. Top 5 viral conversations in this space (this week)
2. What&apos;s the common thread? (Why are they resonating?)
3. Which trends have real staying power vs. flash trends?
4. How can I create content that taps into these trends authentically?
5. What tone/format is resonating most?
6. 5 content ideas I could create that fit these trends
7. When/how should I post for maximum reach?

Link to specific trending posts and accounts.`
        }
      ]
    }
  ]

  const relatedLinks = [
    { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
    { label: "Claude Prompts", href: "/claude-prompts" },
    { label: "Gemini Prompts", href: "/gemini-prompts" },
    { label: "Perplexity Prompts", href: "/perplexity-prompts" },
    { label: "DeepSeek AI", href: "/deepseek-ai-prompts" },
    { label: "GPT-4o Guide", href: "/gpt-4o-prompts" },
    { label: "o1 Reasoning", href: "/gpt-o1-guide" },
    { label: "All AI Models", href: "/website-links#ai-models" }
  ]

  const faqs = [
    {
      q: "Is Grok 3 better than ChatGPT?",
      a: "On most benchmarks, Grok 3 performs comparably to GPT-4o and Claude 3.7. It&apos;s particularly competitive on coding, mathematics, and real-world reasoning. Grok&apos;s unique advantage is always-on real-time web access and X/Twitter integration. ChatGPT has a larger ecosystem of custom GPTs and plugins."
    },
    {
      q: "How do I access Grok?",
      a: "Grok is available through X (formerly Twitter) with an X Premium or Premium+ subscription. You can also access it at grok.com. Grok 3 with extended thinking (Think mode) is available to X Premium+ subscribers."
    },
    {
      q: "What is Grok&apos;s &apos;Think mode&apos;?",
      a: "Think mode is Grok&apos;s extended reasoning feature — similar to OpenAI&apos;s o1 chain-of-thought. When enabled, Grok thinks through a problem step-by-step before answering. It&apos;s slower but significantly better on math, coding, logic problems, and deep research tasks."
    },
    {
      q: "Does Grok have an API?",
      a: "Yes — xAI released the Grok API in 2024. It&apos;s OpenAI API-compatible, so you can swap the base URL and use Grok in applications built for ChatGPT. The API includes Grok 3, Grok 3 mini, and vision capabilities."
    },
    {
      q: "Is Grok good for coding?",
      a: "Grok 3 performs competitively on coding benchmarks and has real-time access to documentation, Stack Overflow, and GitHub discussions. For complex multi-file projects, use Grok via API in Cursor AI for better IDE integration than Grok&apos;s chat interface alone."
    },
    {
      q: "How is Grok different from Claude and Gemini?",
      a: "Grok stands out for always-on real-time web access, native X/Twitter integration, and a distinctive personality designed for wit and directness. Claude excels at nuance and document analysis. Gemini is best integrated with Google services. Grok is the clear winner for current-events research."
    },
    {
      q: "Can I use Grok offline?",
      a: "No — Grok requires an internet connection and live web access to function. Its real-time web search capability is fundamental to its design, not an optional feature."
    },
    {
      q: "What are Grok&apos;s limitations?",
      a: "Grok cannot process image uploads (no vision capability yet in chat), has limited file handling compared to Claude, and knowledge cutoff is early 2024. However, real-time web access largely compensates for the knowledge cutoff."
    },
    {
      q: "Is Grok good for long-form writing?",
      a: "Grok is excellent for researching and writing about current topics, trends, and breaking news. For evergreen long-form content, Claude or ChatGPT may be slightly better at nuance and consistency. For articles that need real-time data and sources, Grok is unbeatable."
    },
    {
      q: "How does Grok handle controversial topics?",
      a: "Grok was designed with a more direct and opinionated approach than other LLMs. It will engage with politically charged and controversial topics more openly, though it still applies ethical boundaries. Use Grok when you want nuanced takes on complex issues."
    },
    {
      q: "Can I use Grok for business research?",
      a: "Absolutely. Grok excels at competitive intelligence, market research, trend analysis, and real-time business news monitoring. Use it for understanding competitor moves, customer sentiment on X, industry shifts, and real-time data that matters for decision-making."
    },
    {
      q: "What is the best use case for Grok right now?",
      a: "Real-time research and current-events analysis. Need to understand what&apos;s trending on X, how markets are reacting to news, or what people are saying about your brand right now? Grok is faster and more current than any other LLM. For timeless work, Claude or ChatGPT are still strong choices."
    }
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="bg-black border-b border-[#2a2a2a] py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <a href="/" className="text-2xl font-bold tracking-tight hover:text-[#FF6B00] transition-colors inline-block mb-8">
            GPTPrompts.AI
          </a>
          <div className="flex items-center gap-2 text-xs font-mono bg-[#1a1a1a] border border-[#FF6B00] rounded-full px-4 py-2 w-fit mb-8">
            <span className="w-2 h-2 bg-[#FF6B00] rounded-full"></span>
            xAI · Real-time Web Access · Grok 3
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Grok<br />
            <span className="text-[#FF6B00]">Prompts.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
            50+ expert prompts for real-time research, deep analysis, creative work, coding, and X/Twitter mastery. Master Grok 3&apos;s unique capabilities.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            <span>50+ Expert Prompts</span>
            <span>·</span>
            <span>Real-Time Data</span>
            <span>·</span>
            <span>Updated 2026</span>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="mb-32 scroll-mt-20">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-[#FF6B00] flex-shrink-0">{section.icon}</div>
                <div className="flex-grow">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{section.title}</h2>
                  <p className="text-gray-400">{section.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.prompts.map((prompt) => (
                  <CopyCard key={prompt.title} title={prompt.title} prompt={prompt.prompt} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-t border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-t border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Compare AI Models</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-center text-sm font-medium p-4 rounded-lg border border-[#2a2a2a] hover:border-[#FF6B00] hover:bg-[#1a1a1a] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
