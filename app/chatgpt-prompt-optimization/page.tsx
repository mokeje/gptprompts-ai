import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ChatGPT Prompt Optimization: Advanced Techniques for Better Results",
  description:
    "Master ChatGPT prompt optimization with role blueprints, prompt chaining, few-shot examples, self-critique patterns, and recursive refinement. Get 50-80% better results.",
  keywords:
    "ChatGPT prompt optimization, advanced prompting techniques, prompt engineering, role blueprints, prompt chaining, few-shot prompting",
}

export default function ChatGPTPromptOptimizationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-emerald-50 to-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
          <div className="flex items-center gap-2 text-emerald-600 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/website-links" className="hover:underline">
              Prompts Library
            </Link>
            <span>/</span>
            <span>ChatGPT Optimization</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ChatGPT Prompt Optimization: Advanced Techniques for Better Results
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Move from "type and hope" to systematic techniques that consistently produce more accurate, useful, and
            controllable results. These advanced methods can boost output quality by 50-80%.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What "Optimized" Prompts Actually Do</h2>
            <p className="text-gray-700 mb-4">
              Optimized prompts are context-rich, task-specific, structured, and iterated. They include who you are, who
              the output is for, and why it matters. Each prompt is tailored to a concrete job, not a vague "help me."
            </p>
            <p className="text-gray-700 mb-4">
              Case studies show that structured, optimized prompts can improve perceived quality by 50-80% compared to
              naive "single sentence" requests. For more foundational techniques, see our{" "}
              <Link href="/how-to-write-effective-ai-prompts" className="text-emerald-600 hover:underline">
                guide to writing effective AI prompts
              </Link>
              .
            </p>
          </section>

          {/* Technique 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Technique 1: Role Blueprints Instead of One-Off Personas
            </h2>
            <p className="text-gray-700 mb-4">
              Most people know "act as an expert X," but role blueprints go further by encoding experience level,
              constraints, and responsibilities.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-semibold text-gray-900 mb-2">Basic persona (beginner):</p>
              <p className="text-gray-700 italic">"Act as a marketing expert. Help me write a campaign."</p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg mb-4">
              <p className="font-semibold text-emerald-800 mb-2">Optimized role blueprint:</p>
              <p className="text-gray-700">
                "You are a senior performance marketer with 10+ years working with DTC e-commerce brands. You are
                responsible for creative testing, funnel strategy, and reporting. Your job is to give actionable,
                metric-driven advice, and avoid vague generalities."
              </p>
            </div>
            <p className="text-gray-700">
              This encodes domain, seniority, scope, and quality bar—influencing depth and tone. Learn more about this
              in our{" "}
              <Link href="/chatgpt-role-based-prompting" className="text-emerald-600 hover:underline">
                role-based prompting guide
              </Link>
              .
            </p>
          </section>

          {/* Technique 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Technique 2: Prompt Chaining With an Overarching Plan
            </h2>
            <p className="text-gray-700 mb-4">
              Instead of one giant prompt, break work into linked stages with a clear blueprint so context is preserved.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-3">A typical optimization chain:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Clarify requirements:</strong> "Ask me up to 10 questions to fully understand the
                  article/tool/email I want."
                </li>
                <li>
                  <strong>Design the plan:</strong> "Summarize my answers, then propose a detailed plan to achieve the
                  goal."
                </li>
                <li>
                  <strong>Execute step-by-step:</strong> "Write only Section 1 of the plan in 400-500 words."
                </li>
                <li>
                  <strong>Review and refine:</strong> "Critique Section 1 against our goal and suggest improvements."
                </li>
              </ol>
            </div>
          </section>

          {/* Technique 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Technique 3: Few-Shot & "Show, Don't Tell" Patterns
            </h2>
            <p className="text-gray-700 mb-4">
              Examples beat adjectives. Instead of describing what you want, show it.
            </p>
            <div className="bg-emerald-50 p-6 rounded-lg mb-4">
              <p className="font-semibold text-emerald-800 mb-2">Better approach:</p>
              <p className="text-gray-700">
                "Here is an example of the tone and structure I like: [short sample]. Analyze its style (tone, sentence
                length, structure), then write a new piece on [topic] that matches this style."
              </p>
            </div>
            <p className="text-gray-700">
              The model learns concrete patterns: sentence rhythm, paragraph structure, level of detail. For detailed
              techniques, see our{" "}
              <Link href="/few-shot-prompting" className="text-emerald-600 hover:underline">
                few-shot prompting guide
              </Link>
              .
            </p>
          </section>

          {/* Technique 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Technique 4: Chain-of-Thought (CoT) & "Think Step by Step"
            </h2>
            <p className="text-gray-700 mb-4">
              For complex reasoning, use explicit reasoning prompts rather than asking for only the final answer.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">Example:</p>
              <p className="text-gray-700">
                "Before you answer, think step by step. List the relevant factors to consider. Analyze each factor
                briefly. Only then propose your final recommendation, with a short justification."
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              CoT prompts improve accuracy on multi-step reasoning tasks like planning, trade-off decisions, and
              debugging. Use for strategy, diagnostics, architecture, and troubleshooting.
            </p>
          </section>

          {/* Technique 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Technique 5: Self-Critique and "Cognitive Verifier" Prompts
            </h2>
            <p className="text-gray-700 mb-4">
              Instead of manually spotting weaknesses, ask ChatGPT to critique its own work.
            </p>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <p className="font-semibold text-emerald-800 mb-2">Pattern:</p>
              <p className="text-gray-700">
                "Review your previous answer as a critical expert. Identify 5 weaknesses, gaps, or vague areas. For
                each, propose a concrete improvement. Then rewrite the answer, incorporating these improvements."
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              This "cognitive verifier" pattern reports significant quality gains for important emails, long-form
              content, and plans that need rigor. To learn about preventing errors, see our{" "}
              <Link href="/avoiding-hallucinations" className="text-emerald-600 hover:underline">
                guide to avoiding hallucinations
              </Link>
              .
            </p>
          </section>

          {/* Technique 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Technique 6: Recursive Prompt Optimization ("You are a prompt optimizer")
            </h2>
            <p className="text-gray-700 mb-4">
              A powerful meta-pattern is asking ChatGPT to rewrite your prompt to be better before using it.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">Meta-prompt example:</p>
              <p className="text-gray-700">
                "You are a prompt optimization assistant for ChatGPT. Here is my draft prompt: [paste]. Critique it for
                clarity, specificity, and structure. Ask me up to 5 clarifying questions. Propose an improved version
                that incorporates your suggestions and my answers."
              </p>
            </div>
          </section>

          {/* Technique 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Technique 7: Output-Spec Refinement (JSON, Tables, Sections)
            </h2>
            <p className="text-gray-700 mb-4">
              Optimizing prompts for downstream use—automation, analytics, or{" "}
              <Link href="/llm-seo-prompt-library" className="text-emerald-600 hover:underline">
                LLM SEO
              </Link>
              —means being precise about structure.
            </p>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <p className="font-semibold text-emerald-800 mb-2">Structured output example:</p>
              <pre className="bg-white p-4 rounded text-sm overflow-x-auto">
                {`"Evaluate this landing page and return a JSON object:
{
  "clarity_score": 0-10,
  "trust_score": 0-10,
  "urgency_score": 0-10,
  "top_3_issues": [string],
  "suggested_headline": string
}"`}
              </pre>
            </div>
          </section>

          {/* Advanced Blueprint */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Advanced ChatGPT Prompt Blueprint (Reusable Template)
            </h2>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
              <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
                {`ADVANCED CHATGPT PROMPT BLUEPRINT

"You are [role blueprint: e.g., senior SEO strategist for SaaS].

Goal: [one-sentence outcome, e.g., draft an article outline that can rank in Google and be used by LLMs].

Context:
- Audience: [who]
- Constraints: [budget/time/level]
- Existing assets or examples: [links or short samples]

Instructions:
1. Ask up to 5 clarifying questions if needed.
2. Think step by step and outline your reasoning briefly.
3. Produce the output in this structure: [sections, headings, JSON/table spec].
4. Then act as your own reviewer: list 5 weaknesses and improve the output accordingly.

Constraints:
- Avoid: [jargon, clickbait, hallucinated stats, etc.]
- Length: [e.g., ~1,500 words / 10 bullet points]
- Tone: [tone description].

Return only the final improved output, formatted in markdown."`}
              </pre>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ: Optimizing ChatGPT Prompts</h2>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What's the single biggest lever for better ChatGPT results?
                </h3>
                <p className="text-gray-700">
                  Specific, structured prompts with clear roles and output specs, rather than short, vague instructions.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Is "chain-of-thought" always necessary?</h3>
                <p className="text-gray-700">
                  No. CoT is most useful for multi-step reasoning and planning; for simple tasks, it adds noise without
                  value.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">How do I know if a prompt is "optimized"?</h3>
                <p className="text-gray-700">
                  You should see consistent, high-quality outputs across runs, fewer misunderstandings, and less need
                  for manual rewriting.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Can I reuse optimized prompts across models (Gemini, Claude)?
                </h3>
                <p className="text-gray-700">
                  Generally yes, but you may need light tuning for each model's quirks. Core patterns transfer well. See
                  our{" "}
                  <Link href="/gemini-prompt-optimization" className="text-emerald-600 hover:underline">
                    Gemini optimization guide
                  </Link>{" "}
                  and{" "}
                  <Link href="/claude-prompting-guide" className="text-emerald-600 hover:underline">
                    Claude prompting guide
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/gemini-prompt-optimization"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-gray-900">Gemini Prompt Optimization</h3>
                <p className="text-sm text-gray-600">Advanced techniques for Google's Gemini models</p>
              </Link>
              <Link
                href="/claude-prompting-guide"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-gray-900">Claude Prompting Guide</h3>
                <p className="text-sm text-gray-600">Techniques that actually work with Claude</p>
              </Link>
              <Link
                href="/advanced-prompt-frameworks"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-gray-900">Advanced Prompt Frameworks</h3>
                <p className="text-sm text-gray-600">RACE, COSTAR, SPEC & more</p>
              </Link>
              <Link href="/few-shot-prompting" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <h3 className="font-semibold text-gray-900">Few-Shot Prompting</h3>
                <p className="text-sm text-gray-600">Examples and best practices</p>
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} GPTPrompts.AI - Your guide to AI prompt engineering
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/" className="text-emerald-600 hover:underline">
              Home
            </Link>
            <Link href="/website-links" className="text-emerald-600 hover:underline">
              Prompts Library
            </Link>
            <Link href="/chatgpt-prompts" className="text-emerald-600 hover:underline">
              ChatGPT Prompts
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
