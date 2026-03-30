'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Copy, Check, ChevronDown, ChevronUp, Brain, Code, FlaskConical, BarChart3, Search } from 'lucide-react'

export default function ChatGPTO3PromptsPage() {
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
          <Link href="/" className="text-xl font-bold mb-12 inline-block hover:text-[#a8e6a1] transition-colors">
            GPTPrompts.AI
          </Link>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-6xl md:text-8xl font-bold">ChatGPT o3</h1>
              <p className="text-2xl md:text-4xl text-[#a8e6a1] font-light">Advanced Reasoning &amp; Deep Analysis</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            60+ prompts engineered to unlock o3&apos;s extended thinking capabilities. From complex multi-step reasoning to scientific analysis, legal research, and hard coding challenges — get results that standard models can&apos;t match.
          </p>
          <div className="mt-8 inline-block bg-white/20 text-white px-6 py-2 rounded-lg font-semibold">
            Category: Advanced AI Reasoning Models
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24">

        {/* Complex Reasoning Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Complex Multi-Step Reasoning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Strategic Problem Decomposer"
              prompt={`I need to solve this complex problem: [describe problem]

Before giving solutions, think through it step by step:
1. Break the problem into its core components
2. Identify all hidden assumptions
3. Map the dependencies between components
4. Identify where the most uncertainty lies
5. Now propose 3 distinct solution approaches with trade-offs
6. Recommend the best approach and explain why

Show your full reasoning chain, not just the conclusion.`}
            />
            <CopyCard
              title="Competing Hypotheses Analyzer"
              prompt={`I have these competing explanations for [phenomenon or situation]:
A) [hypothesis 1]
B) [hypothesis 2]
C) [hypothesis 3]

For each hypothesis:
1. What evidence would strongly support it?
2. What evidence would decisively rule it out?
3. Assign a rough probability (with reasoning)

Then tell me: what single piece of evidence would most efficiently distinguish between them? What should I go look for?`}
            />
            <CopyCard
              title="Root Cause Investigator"
              prompt={`This problem keeps occurring: [describe problem]
Observed symptoms: [list what you see]
What you&apos;ve already tried: [list any fixes attempted]

Use the 5-Why method and Fishbone analysis to:
1. Trace the root cause chain (go at least 5 levels deep)
2. Identify whether this is a systems problem or a local problem
3. Distinguish root causes from contributing factors
4. Recommend a fix that addresses the actual root cause, not just symptoms`}
            />
          </div>
        </section>

        {/* Math & Science Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <FlaskConical className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Mathematics &amp; Scientific Reasoning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Proof Walkthrough Builder"
              prompt={`Walk me through a complete proof of [mathematical theorem or result].

Structure it as:
1. State clearly what we are proving and why it matters
2. State all assumptions and definitions needed
3. Lay out the proof strategy before beginning
4. Execute each step with explicit justification
5. Highlight the key insight that makes the proof work
6. Note any common mistakes people make when attempting this proof`}
            />
            <CopyCard
              title="Scientific Paper Critique"
              prompt={`Critically analyse this scientific claim or study finding: [paste claim or abstract]

Evaluate:
1. Is the methodology appropriate for the claim being made?
2. What are the main confounds or alternative explanations not addressed?
3. What is the effect size and is it practically significant?
4. How well does the sample represent the population?
5. What follow-up studies would strengthen or refute this?
6. On a scale of 1-10, how much should I update my beliefs based on this?`}
            />
            <CopyCard
              title="Estimation Framework Builder"
              prompt={`Use Fermi estimation to answer: [question requiring quantitative estimation]

Show your full reasoning:
1. Break this into estimable sub-components
2. State your assumptions for each component
3. Calculate a rough estimate with error bounds
4. Sanity-check the answer from a different angle
5. Identify which assumption, if wrong, would most change the answer
6. Give a final range: plausible low, best estimate, plausible high`}
            />
          </div>
        </section>

        {/* Research & Analysis Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Deep Research &amp; Analysis</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Literature Synthesis Engine"
              prompt={`Synthesise the current state of knowledge on: [topic or question]

Provide:
1. The mainstream consensus view (with confidence level)
2. The main dissenting or minority positions
3. Key open questions the field has not resolved
4. The strongest evidence on each side
5. Your assessment of where the evidence actually points
6. What a careful non-expert should conclude from this

Distinguish clearly between what is well-established vs. still debated.`}
            />
            <CopyCard
              title="Devil&apos;s Advocate Stress Test"
              prompt={`I believe: [state your position or plan]

Play the most rigorous devil&apos;s advocate possible:
1. Build the strongest case against my position (steelman it)
2. Identify the 3 assumptions my position most depends on
3. Find real-world examples where similar reasoning failed
4. List what I would need to be true for my position to be wrong
5. Then tell me: what should I think about this position after this analysis?

Be genuinely critical, not just contrarian.`}
            />
            <CopyCard
              title="Policy Impact Analyzer"
              prompt={`Analyse the likely impact of this policy or decision: [describe policy]

Consider:
1. First-order effects (immediate, direct consequences)
2. Second-order effects (likely responses and adaptations)
3. Third-order effects (systemic changes over time)
4. Who benefits and who is harmed (be specific)
5. Historical parallels — similar policies and their outcomes
6. What conditions would make this policy succeed or fail
7. Your overall assessment: good idea, bad idea, or context-dependent?`}
            />
          </div>
        </section>

        {/* Advanced Coding Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Hard Coding &amp; Systems Design</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Algorithm Design Challenger"
              prompt={`Design the most efficient algorithm for this problem: [describe the problem]

I want you to:
1. State the problem formally (input, output, constraints)
2. Analyse the naive brute-force solution and its complexity
3. Identify the key insight that enables a better approach
4. Design an optimised solution step by step
5. Prove (or argue) its correctness
6. Analyse its time and space complexity
7. Identify edge cases and how the algorithm handles them
8. Write clean pseudocode or code in [language]`}
            />
            <CopyCard
              title="System Design Deep Dive"
              prompt={`Design a scalable system for: [system description, e.g. a ride-sharing backend]

Scale: [expected users / requests per second / data volume]

Cover:
1. High-level architecture and component breakdown
2. Data models and database choices (with justification)
3. API design for core operations
4. How you handle scale (caching, sharding, queues)
5. Failure modes and how the system degrades gracefully
6. The 3 hardest engineering problems in this design
7. What I would do differently at 10x the scale`}
            />
            <CopyCard
              title="Bug Reasoning Tracer"
              prompt={`I have a bug I cannot explain. Here is the code and observed behaviour:

Code: [paste code]
Expected behaviour: [describe]
Actual behaviour: [describe]
Steps to reproduce: [list steps]
Environment: [language, version, OS, dependencies]

Reason through this systematically:
1. What are all possible explanations for this behaviour?
2. What does each explanation predict we would see?
3. Which explanation best fits the evidence?
4. What is the most likely fix?
5. What test would confirm the fix worked?`}
            />
          </div>
        </section>

        {/* Data Analysis Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Data &amp; Statistical Analysis</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Statistical Interpretation Guide"
              prompt={`I have these statistical results: [paste results or describe them]

Help me interpret them correctly:
1. What do these numbers actually mean in plain language?
2. Is the result statistically significant? Is it practically significant?
3. What are the main threats to the validity of this analysis?
4. What conclusions am I justified in drawing — and what would be overreaching?
5. What would I need to run a more rigorous analysis?
6. How should I communicate this finding to a non-technical audience?`}
            />
            <CopyCard
              title="Data Anomaly Investigator"
              prompt={`I&apos;ve noticed this anomaly in my data: [describe what you see]
Dataset context: [what the data is, how it was collected]
Normal pattern: [what you usually see]
Anomalous pattern: [what changed]

Reason through potential explanations:
1. Data quality or collection issues (list specific possibilities)
2. Real-world events that could cause this change
3. Statistical noise vs. genuine signal — how to tell the difference
4. What additional data would help diagnose this
5. Recommended next steps`}
            />
            <CopyCard
              title="Causal vs Correlation Auditor"
              prompt={`I want to make this causal claim: [state your claim]
Evidence I have: [describe your data or observations]

Challenge my causal reasoning:
1. Is this correlation or causation? How strong is the evidence?
2. List 5 plausible confounders I might not have considered
3. What does reverse causality look like in this case?
4. What would a proper causal study look like to test this?
5. What is the most defensible claim I can make given this evidence?`}
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              q="What is ChatGPT o3 and how is it different from GPT-4o?"
              a="ChatGPT o3 is OpenAI&apos;s advanced reasoning model designed for complex, multi-step problems. Unlike GPT-4o which responds quickly for general tasks, o3 uses extended &apos;thinking time&apos; before answering — working through problems more carefully. It significantly outperforms GPT-4o on math, science, coding, and tasks requiring careful logical analysis. The trade-off is slower response times and higher cost."
            />
            <FAQItem
              q="When should I use o3 instead of GPT-4o?"
              a="Use o3 for problems where getting the right answer matters more than speed: complex coding bugs, mathematical proofs, multi-step reasoning tasks, scientific analysis, legal interpretation, or any situation where a careful, thorough answer is worth waiting for. For quick writing, summaries, or simple Q&A, GPT-4o is faster and cheaper."
            />
            <FAQItem
              q="How do I write prompts that get the most out of o3&apos;s reasoning?"
              a="Give o3 hard problems — it performs best under challenge. Be explicit that you want it to think through the problem step by step. Provide full context including constraints, edge cases, and what you&apos;ve already tried. Ask it to show its reasoning chain, not just the answer. Avoid vague or ambiguous prompts; o3 benefits from precision."
            />
            <FAQItem
              q="Does o3 make mistakes?"
              a="Yes. Despite its advanced capabilities, o3 can still make errors, particularly in very long reasoning chains where an early mistake compounds, or in domains requiring real-world knowledge beyond its training cutoff. Always verify critical outputs, especially for legal, medical, financial, or safety-critical applications."
            />
            <FAQItem
              q="How do I access ChatGPT o3?"
              a="ChatGPT o3 is available on ChatGPT Plus, Team, and Enterprise plans. You can select it from the model dropdown in ChatGPT. The o3-mini variant is available on the free tier for limited use. OpenAI also offers o3 access through the API for developers."
            />
            <FAQItem
              q="What is o3-mini and when should I use it?"
              a="o3-mini is a smaller, faster, and cheaper version of o3 that still delivers strong reasoning capabilities. It&apos;s well-suited for coding tasks and math where full o3 might be overkill. Use o3-mini when you need better-than-GPT-4o reasoning but don&apos;t need the full depth of o3, or when cost and latency matter."
            />
            <FAQItem
              q="Can I use o3 for creative writing?"
              a="You can, but it&apos;s not the optimal choice. o3&apos;s strengths are in structured reasoning and analysis. For creative writing, GPT-4o or Claude tend to produce more fluid, nuanced prose. However, o3 can be valuable for structuring complex narratives, building logically consistent world-building, or writing precise technical documentation."
            />
            <FAQItem
              q="How does o3 compare to Claude and Gemini for reasoning?"
              a="As of early 2026, o3 is broadly competitive with Claude&apos;s Sonnet and Opus models for complex reasoning tasks, with each model having different strengths. o3 tends to excel on math and formal logic, while Claude can be stronger for nuanced, long-context analysis. Gemini 2.0 Ultra is a strong competitor, particularly for multimodal reasoning tasks."
            />
            <FAQItem
              q="What are the most impressive things o3 can do?"
              a="o3 has achieved near-expert performance on competitive programming (Codeforces), mathematics olympiad problems (AIME), and science benchmarks. It can work through PhD-level physics and mathematics, build complex multi-component software systems, and analyse intricate legal or financial documents with a level of rigour that was not previously achievable from AI."
            />
            <FAQItem
              q="Is o3 worth the cost over GPT-4o?"
              a="For the right tasks, yes. If you are solving a hard coding problem, debugging a subtle system issue, or need a genuinely rigorous analysis that you would otherwise pay an expert for, o3&apos;s output quality can more than justify the higher cost. For everyday tasks, GPT-4o remains more cost-effective."
            />
          </div>
        </section>

        {/* Related Links */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Explore Related Prompts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/gpt-4o-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">GPT-4o Prompts</h3>
              <p className="text-gray-400 mt-2">Multimodal vision &amp; fast reasoning</p>
            </Link>
            <Link href="/gpt-o1-guide" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">GPT-o1 Guide</h3>
              <p className="text-gray-400 mt-2">The predecessor to o3 reasoning</p>
            </Link>
            <Link href="/claude-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Claude Prompts</h3>
              <p className="text-gray-400 mt-2">Long-context analysis &amp; reasoning</p>
            </Link>
            <Link href="/deepseek-ai-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">DeepSeek Prompts</h3>
              <p className="text-gray-400 mt-2">Open-source reasoning alternative</p>
            </Link>
            <Link href="/prompt-engineering-fundamentals" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Prompt Engineering</h3>
              <p className="text-gray-400 mt-2">Master the fundamentals</p>
            </Link>
            <Link href="/ai-prompts-for-researchers" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Research Prompts</h3>
              <p className="text-gray-400 mt-2">Academic &amp; scientific research AI</p>
            </Link>
            <Link href="/ai-prompts-coding" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Coding Prompts</h3>
              <p className="text-gray-400 mt-2">Software development &amp; debugging</p>
            </Link>
            <Link href="/gemini-advanced-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Gemini Advanced</h3>
              <p className="text-gray-400 mt-2">Google&apos;s top-tier reasoning model</p>
            </Link>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'ChatGPT o3 Prompts 2026: 60+ Copy-Paste Prompts for Advanced Reasoning',
        description: 'Expert prompts engineered for ChatGPT o3\'s extended reasoning. Templates for complex problem-solving, math, science, coding, and deep analysis.',
        datePublished: '2026-03-30',
        dateModified: '2026-03-30',
        author: { '@type': 'Organization', name: 'GPTPrompts.AI' }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is ChatGPT o3 and how is it different from GPT-4o?', acceptedAnswer: { '@type': 'Answer', text: 'o3 is OpenAI\'s advanced reasoning model that uses extended thinking time for complex problems. It outperforms GPT-4o on math, science, and coding but is slower and more expensive.' } },
          { '@type': 'Question', name: 'When should I use o3 instead of GPT-4o?', acceptedAnswer: { '@type': 'Answer', text: 'Use o3 for complex coding, mathematical proofs, multi-step reasoning, and tasks where getting the right answer is more important than speed.' } },
          { '@type': 'Question', name: 'How do I access ChatGPT o3?', acceptedAnswer: { '@type': 'Answer', text: 'o3 is available on ChatGPT Plus, Team, and Enterprise plans via the model dropdown. o3-mini is available on the free tier with limits.' } }
        ]
      })}} />
    </div>
  )
}
