import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gemini Prompt Optimization: Advanced Techniques for Better Results",
  description:
    "Master Gemini prompt optimization with SI→RI→QI structure, long-context workflows, response schemas, and Draft→Critique→Revise loops. Cut factual errors by 30%+.",
  keywords:
    "Gemini prompt optimization, Google Gemini prompts, SI RI QI prompting, long context prompts, response schemas, Gemini API",
}

export default function GeminiPromptOptimizationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
          <div className="flex items-center gap-2 text-blue-600 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/website-links" className="hover:underline">
              Prompts Library
            </Link>
            <span>/</span>
            <span>Gemini Optimization</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Gemini Prompt Optimization: Advanced Techniques for Better Results
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Design structured, context-rich instructions that leverage Gemini's strengths: deep Google integration,
            long-context windows, structured outputs, and tool calling.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Foundations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Foundations: What "Optimized" Means for Gemini</h2>
            <p className="text-gray-700 mb-4">
              Google's latest Gemini docs highlight key pillars of effective prompting:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>
                <strong>Structured instructions:</strong> Consistent pattern for system, role, and query instructions
              </li>
              <li>
                <strong>Tight coupling to data:</strong> Use file references and URLs instead of vague summaries
              </li>
              <li>
                <strong>Explicit output control:</strong> Response schemas or clear format specs
              </li>
              <li>
                <strong>Iterative refinement:</strong> Draft → critique → revise workflows
              </li>
            </ul>
            <p className="text-gray-700">
              Tests on Gemini 2.5 and 3 show that structured, iterated prompts improve factual alignment more than
              ad-hoc chatting. For comparison, see our{" "}
              <Link href="/chatgpt-prompt-optimization" className="text-blue-600 hover:underline">
                ChatGPT optimization guide
              </Link>
              .
            </p>
          </section>

          {/* Technique 1: SI→RI→QI */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technique 1: Use SI → RI → QI Structure</h2>
            <p className="text-gray-700 mb-4">
              A core Gemini pattern is System Instruction → Role Instruction → Query Instruction.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-semibold text-blue-800 mb-3">Example template:</p>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>System instruction (SI):</strong> "You are assisting with competitive research for SaaS tools.
                  Follow all instructions precisely and prioritize factual accuracy over fluency."
                </p>
                <p>
                  <strong>Role instruction (RI):</strong> "Act as a B2B analyst who explains findings clearly for
                  [audience]."
                </p>
                <p>
                  <strong>Query instruction (QI):</strong> "Using these sources: [URLs], summarize [specific question]
                  in [format] under [length constraint]."
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              Separating global rules (system) from persona and task reduces ambiguity and prompt injection risk.
            </p>
          </section>

          {/* Technique 2: Long-Context */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Technique 2: Exploit Long-Context & File References
            </h2>
            <p className="text-gray-700 mb-4">
              Gemini supports very large context windows, but dumping everything in one prompt is inefficient.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-3">Best practices:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Use file references/URLs instead of pasting huge text blobs</li>
                <li>
                  For mixed content (PDFs, slides), use <strong>map-reduce</strong>:
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>First prompt: "Summarize each section/file separately."</li>
                    <li>Second prompt: "Synthesize across summaries to answer specific questions."</li>
                  </ul>
                </li>
                <li>Keep instructions short and clear even when context is huge</li>
              </ul>
            </div>
          </section>

          {/* Technique 3: Response Schemas */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technique 3: Response Schemas & Structured Output</h2>
            <p className="text-gray-700 mb-4">
              Gemini's API supports response schemas—a major optimization lever for consistent, parseable outputs.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-semibold text-blue-800 mb-2">Human-side equivalent:</p>
              <pre className="bg-white p-4 rounded text-sm overflow-x-auto">
                {`"Return your answer as a JSON object:
{
  "summary": "string",
  "key_points": ["string"],
  "risks": ["string"],
  "recommended_actions": ["string"]
}
Do not include any text outside of the JSON."`}
              </pre>
            </div>
            <p className="text-gray-700 mt-4">
              This cuts parsing time and mistakes, and makes chaining and automation easier.
            </p>
          </section>

          {/* Technique 4: Draft→Critique→Revise */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technique 4: Draft → Critique → Revise Loop</h2>
            <p className="text-gray-700 mb-4">
              Iterative prompting reliably improves accuracy and can cut factual inconsistencies by 30%+.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Draft:</strong> "Write an initial answer using the sources provided. Label this section
                  'DRAFT'."
                </li>
                <li>
                  <strong>Critique:</strong> "Now, critique your DRAFT as a domain expert: Identify factual
                  uncertainties, missing perspectives, or weak arguments."
                </li>
                <li>
                  <strong>Revise:</strong> "Rewrite the answer under 'FINAL', incorporating the CRITIQUE and noting any
                  assumptions."
                </li>
              </ol>
            </div>
            <p className="text-gray-700 mt-4">
              This technique pairs well with our{" "}
              <Link href="/avoiding-hallucinations" className="text-blue-600 hover:underline">
                hallucination prevention strategies
              </Link>
              .
            </p>
          </section>

          {/* Technique 5: Few-Shot for Gemini */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technique 5: Few-Shot Prompting for Gemini</h2>
            <p className="text-gray-700 mb-4">
              Few-shot works across LLMs, but with Gemini you can use search-like queries + answer pairs to align with
              Google's QA style.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
                {`SI: "You answer questions using concise, well-structured explanations."
RI: "You are a technical writer for cloud engineers."

Examples (few-shot):
Q: "What is a VPC?"
A: "[short, high-quality answer]."

Q: "What is a load balancer?"
A: "[answer]."

QI: "Now answer: [new question] in the same style and length."`}
              </pre>
            </div>
            <p className="text-gray-700 mt-4">
              For more details, see our comprehensive{" "}
              <Link href="/few-shot-prompting" className="text-blue-600 hover:underline">
                few-shot prompting guide
              </Link>
              .
            </p>
          </section>

          {/* Technique 6: CoT & Map-Reduce */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Technique 6: Chain-of-Thought & Map-Reduce Reasoning
            </h2>
            <p className="text-gray-700 mb-4">
              Gemini supports nuanced reasoning patterns, especially when you separate reasoning from final answers.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="font-semibold text-gray-900 mb-2">CoT pattern for Gemini:</p>
              <p className="text-gray-700">
                "Think step by step before answering. List the key factors or sub-questions. Analyze each factor
                briefly. Synthesize your reasoning into a concise final answer under 'FINAL ANSWER'. Keep reasoning
                under 'THOUGHTS'; users will only see 'FINAL ANSWER'."
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-semibold text-blue-800 mb-2">Map-Reduce for long-context tasks:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  <strong>Map:</strong> "For each document, summarize key points relevant to X."
                </li>
                <li>
                  <strong>Reduce:</strong> "Using the above summaries only, compare and synthesize to answer Y."
                </li>
              </ul>
            </div>
          </section>

          {/* Blueprint */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Gemini Prompt Blueprint</h2>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
              <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
                {`GEMINI ADVANCED PROMPT BLUEPRINT

System instruction (SI):
"You are assisting with [task type]. Prioritize factual accuracy, clarity, and concise answers. Follow all constraints exactly."

Role instruction (RI):
"Act as a [role] helping [audience]. Use language and examples appropriate for them."

Context:
– Data: [URLs, file references, pasted snippets]
– Constraints: [jurisdiction, time frame, policy, etc.]

Query instruction (QI):
"Using only the context above:
1. [subtask 1]
2. [subtask 2]
Return your answer in [format: JSON/table/sections], under [length limits].

Then, under a 'CRITIQUE' heading, briefly self-review your answer for completeness and potential uncertainties."`}
              </pre>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ: Gemini Prompt Optimization</h2>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How is Gemini prompt optimization different from ChatGPT's?
                </h3>
                <p className="text-gray-700">
                  The fundamentals are similar, but Gemini adds emphasis on SI→RI→QI structure, long-context workflows,
                  response schemas, and tool calling tuned to Google's ecosystem.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Do I always need few-shot examples with Gemini?</h3>
                <p className="text-gray-700">
                  No. For simple tasks, clear instructions are enough. For style, structured transformations, or nuanced
                  reasoning, few-shot + SI/RI often yields much better consistency.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">How do I reduce hallucinations with Gemini?</h3>
                <p className="text-gray-700">
                  Use explicit data sources (files/URLs), map-reduce patterns, the Draft→Critique→Revise loop, and
                  uncertainty instructions ("don't guess; say if you're unsure").
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Can these techniques be reused across other LLMs?</h3>
                <p className="text-gray-700">
                  Yes. SI/RI/QI, structured outputs, CoT, meta-prompting, and iterative refinement are broadly
                  applicable, though implementation details vary.
                </p>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/chatgpt-prompt-optimization"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-gray-900">ChatGPT Prompt Optimization</h3>
                <p className="text-sm text-gray-600">Advanced techniques for OpenAI models</p>
              </Link>
              <Link
                href="/claude-prompting-guide"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-gray-900">Claude Prompting Guide</h3>
                <p className="text-sm text-gray-600">XML tags and structured prompting for Claude</p>
              </Link>
              <Link
                href="/gemini-vs-chatgpt-bloggers"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-gray-900">Gemini vs ChatGPT for Bloggers</h3>
                <p className="text-sm text-gray-600">When to use each model</p>
              </Link>
              <Link
                href="/advanced-prompt-frameworks"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold text-gray-900">Advanced Prompt Frameworks</h3>
                <p className="text-sm text-gray-600">RACE, COSTAR, SPEC & more</p>
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
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <Link href="/website-links" className="text-blue-600 hover:underline">
              Prompts Library
            </Link>
            <Link href="/gemini-prompts" className="text-blue-600 hover:underline">
              Gemini Prompts
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
