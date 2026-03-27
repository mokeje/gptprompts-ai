import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How to Write Effective AI Prompts: Complete Guide (2026)",
  description:
    "Learn how to write effective AI prompts with the C-R-I-S-P-E framework. Master role assignment, task clarity, context setting, and output formatting for ChatGPT, Claude, and Gemini.",
  keywords:
    "how to write AI prompts, effective prompts, prompt engineering, ChatGPT prompts, AI prompt guide, CRISPE framework",
  openGraph: {
    title: "How to Write Effective AI Prompts: Complete Guide (2026)",
    description:
      "Learn how to write effective AI prompts with the C-R-I-S-P-E framework. Master role assignment, task clarity, context setting, and output formatting.",
    type: "article",
  },
}

export default function HowToWriteEffectiveAIPromptsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/website-links" className="hover:text-foreground">
              Prompts Library
            </Link>
            <span>/</span>
            <span>How to Write Effective AI Prompts</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            How to Write Effective AI Prompts
          </h1>
          <p className="text-xl text-muted-foreground">
            Master the art of prompt engineering with the C-R-I-S-P-E framework. Get accurate, relevant, and usable
            outputs from ChatGPT, Claude, Gemini, and any LLM.
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-12 rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold">In This Guide</h2>
          <ol className="grid gap-2 text-sm sm:grid-cols-2">
            <li>
              <a href="#what-makes-effective" className="text-primary hover:underline">
                1. What Makes an AI Prompt Effective
              </a>
            </li>
            <li>
              <a href="#core-building-blocks" className="text-primary hover:underline">
                2. Core Building Blocks of Strong Prompts
              </a>
            </li>
            <li>
              <a href="#crispe-framework" className="text-primary hover:underline">
                3. The C-R-I-S-P-E Framework
              </a>
            </li>
            <li>
              <a href="#step-by-step" className="text-primary hover:underline">
                4. Step-by-Step Guide
              </a>
            </li>
            <li>
              <a href="#good-vs-bad" className="text-primary hover:underline">
                5. Good vs Bad Prompts: Examples
              </a>
            </li>
            <li>
              <a href="#prompt-chains" className="text-primary hover:underline">
                6. Breaking Complex Tasks into Chains
              </a>
            </li>
            <li>
              <a href="#few-shot" className="text-primary hover:underline">
                7. Using Examples (Few-Shot Prompting)
              </a>
            </li>
            <li>
              <a href="#patterns" className="text-primary hover:underline">
                8. Prompt Patterns by Use Case
              </a>
            </li>
            <li>
              <a href="#safety-ethics" className="text-primary hover:underline">
                9. Safety, Ethics & Data Sensitivity
              </a>
            </li>
            <li>
              <a href="#faq" className="text-primary hover:underline">
                10. FAQ
              </a>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <article className="prose prose-gray dark:prose-invert max-w-none">
          {/* Section 1 */}
          <section id="what-makes-effective" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-600">What Makes an AI Prompt "Effective"?</h2>
            <p>
              An effective AI prompt is a set of instructions that leads the model to produce accurate, relevant, and
              usable outputs with minimal back-and-forth. Good prompts consistently share these characteristics:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Specify who is involved</strong> – you, your audience, or a role for the AI
              </li>
              <li>
                <strong>Define what task you want done</strong> – in concrete, specific terms
              </li>
              <li>
                <strong>Provide enough context and constraints</strong> – so the model can narrow its answer
              </li>
              <li>
                <strong>Indicate how the result should look</strong> – format, length, tone, examples
              </li>
            </ul>
            <p>
              Guides from universities, vendors, and AI tooling companies converge on these same elements as the core of
              effective prompting. Whether you're using{" "}
              <Link href="/chatgpt-prompts" className="text-primary hover:underline">
                ChatGPT
              </Link>
              ,{" "}
              <Link href="/claude-prompts" className="text-primary hover:underline">
                Claude
              </Link>
              , or{" "}
              <Link href="/gemini-prompts" className="text-primary hover:underline">
                Gemini
              </Link>
              , these principles apply universally.
            </p>
          </section>

          {/* Section 2 */}
          <section id="core-building-blocks" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-600">Core Building Blocks of a Strong Prompt</h2>
            <p>
              You can think of good prompts as combining four essential building blocks: persona/role, task, context,
              and format.
            </p>

            <h3 className="text-xl font-semibold mt-6">1. Role or Persona</h3>
            <p>Assigning a role helps the model adopt the right perspective and style:</p>
            <div className="rounded-lg bg-muted p-4 my-4">
              <code className="text-sm">"Act as a senior marketing strategist for SaaS startups."</code>
            </div>
            <div className="rounded-lg bg-muted p-4 my-4">
              <code className="text-sm">"You are a Nigerian tax consultant helping small businesses."</code>
            </div>
            <p>
              Adding a persona often improves relevance and tone because it nudges the model to activate domain-specific
              patterns. Learn more in our{" "}
              <Link href="/chatgpt-role-based-prompting" className="text-primary hover:underline">
                Role-Based Prompting Guide
              </Link>
              .
            </p>

            <h3 className="text-xl font-semibold mt-6">2. Clear Task</h3>
            <p>Vague prompts like "Make this better" are a common failure mode. Instead, specify:</p>
            <ul>
              <li>
                <strong>The action:</strong> summarize, rewrite, draft, outline, critique, generate ideas
              </li>
              <li>
                <strong>The scope:</strong> one paragraph, 10 ideas, a 1-page outline, a 1,500-word article
              </li>
            </ul>
            <p>Concrete, action-oriented instructions are the single biggest lever for quality.</p>

            <h3 className="text-xl font-semibold mt-6">3. Context and Constraints</h3>
            <p>Context gives the model boundaries and background:</p>
            <ul>
              <li>
                <strong>Audience:</strong> "for first-time founders in Africa", "for high-school students"
              </li>
              <li>
                <strong>Use case:</strong> "LinkedIn post", "email to my boss", "YouTube script"
              </li>
              <li>
                <strong>Known facts:</strong> "we sell digital courses about AI tools"
              </li>
            </ul>
            <p>
              <strong>Constraints</strong> narrow the output:
            </p>
            <ul>
              <li>"Under 200 words."</li>
              <li>"Use bullet points only."</li>
              <li>"Avoid technical jargon."</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">4. Output Format</h3>
            <p>Specifying format helps both humans and machines:</p>
            <div className="rounded-lg bg-muted p-4 my-4 space-y-2">
              <p>
                <code>"Return as a table with columns: step, description, tools."</code>
              </p>
              <p>
                <code>"Use numbered steps with short explanations."</code>
              </p>
              <p>
                <code>"Write in markdown with H2 and H3 headings."</code>
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="crispe-framework" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-600">The C-R-I-S-P-E Framework</h2>
            <p>
              Several guides describe structured prompting methods that mirror what expert users do intuitively. The
              C-R-I-S-P-E framework is one of the most effective:
            </p>
            <div className="rounded-lg border bg-card p-6 my-6">
              <ul className="space-y-3">
                <li>
                  <strong className="text-emerald-600">C - Context:</strong> Who you are, what you're trying to do, who
                  it's for
                </li>
                <li>
                  <strong className="text-emerald-600">R - Role:</strong> What role the AI should play
                </li>
                <li>
                  <strong className="text-emerald-600">I - Instruction:</strong> The main task and success criteria
                </li>
                <li>
                  <strong className="text-emerald-600">S - Specification:</strong> Format, length, tone, must-include
                  elements
                </li>
                <li>
                  <strong className="text-emerald-600">P - Performance:</strong> Quality bar, constraints, what to avoid
                </li>
                <li>
                  <strong className="text-emerald-600">E - Example:</strong> A sample of "good" output to mimic
                  (optional but powerful)
                </li>
              </ul>
            </div>
            <p>
              CRISPE-style frameworks are popular because they are easy to memorize and consistently improve outputs
              across tasks.
            </p>
          </section>

          {/* Section 4 */}
          <section id="step-by-step" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-600">Step-by-Step: How to Write an Effective AI Prompt</h2>
            <p>Follow this sequence to craft prompts that get results:</p>

            <div className="space-y-6 mt-6">
              <div className="rounded-lg border-l-4 border-emerald-500 bg-card p-4">
                <h3 className="font-semibold">Step 1: Start with the goal in one sentence</h3>
                <code className="text-sm block mt-2">
                  "I want to generate 10 YouTube title ideas about budgeting for Nigerian freelancers."
                </code>
              </div>

              <div className="rounded-lg border-l-4 border-emerald-500 bg-card p-4">
                <h3 className="font-semibold">Step 2: Add role and audience</h3>
                <code className="text-sm block mt-2">
                  "You are a YouTube content strategist who understands personal finance for African freelancers."
                </code>
              </div>

              <div className="rounded-lg border-l-4 border-emerald-500 bg-card p-4">
                <h3 className="font-semibold">Step 3: Describe the task clearly</h3>
                <code className="text-sm block mt-2">
                  "Generate 10 title ideas that are under 55 characters and include 'budgeting' or 'money' naturally."
                </code>
              </div>

              <div className="rounded-lg border-l-4 border-emerald-500 bg-card p-4">
                <h3 className="font-semibold">Step 4: Provide context and examples</h3>
                <code className="text-sm block mt-2">
                  "My audience is Nigerian freelancers struggling with irregular income. Here are 2 past titles that
                  performed well: [examples]."
                </code>
              </div>

              <div className="rounded-lg border-l-4 border-emerald-500 bg-card p-4">
                <h3 className="font-semibold">Step 5: Specify format and constraints</h3>
                <code className="text-sm block mt-2">
                  "Return the ideas as a numbered list only. Avoid clickbait and avoid mentioning '2026'."
                </code>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="good-vs-bad" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-600">Good vs Bad Prompts: Concrete Examples</h2>

            <h3 className="text-xl font-semibold mt-6">Example 1: Editing Text</h3>
            <div className="grid gap-4 md:grid-cols-2 my-4">
              <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/20 p-4">
                <p className="font-semibold text-red-600 mb-2">Weak Prompt:</p>
                <code>"Make this sound better."</code>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 p-4">
                <p className="font-semibold text-green-600 mb-2">Strong Prompt:</p>
                <code>
                  "Revise this paragraph to be more concise and engaging for a non-technical audience of NGO managers.
                  Keep all key data points, remove jargon, and keep it under 120 words."
                </code>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-6">Example 2: Idea Generation</h3>
            <div className="grid gap-4 md:grid-cols-2 my-4">
              <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/20 p-4">
                <p className="font-semibold text-red-600 mb-2">Weak Prompt:</p>
                <code>"Give me blog post ideas about AI."</code>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 p-4">
                <p className="font-semibold text-green-600 mb-2">Strong Prompt:</p>
                <code>
                  "Generate 20 blog post ideas about practical AI use cases for small businesses in Nigeria with less
                  than 10 employees. Focus on tasks they can implement in under a week with low or no-code tools."
                </code>
              </div>
            </div>
            <p>
              The improved prompts add audience, tone, constraints, and task clarity. For more examples, see our{" "}
              <Link href="/common-ai-prompt-mistakes" className="text-primary hover:underline">
                Common AI Prompt Mistakes
              </Link>{" "}
              guide.
            </p>
          </section>

          {/* Section 6 */}
          <section id="prompt-chains" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-600">Breaking Complex Tasks into Prompt Chains</h2>
            <p>
              Advanced guides emphasize breaking complex workflows into smaller steps instead of one giant prompt. A
              typical chain:
            </p>
            <ol className="space-y-4 mt-4">
              <li>
                <strong>1. Clarify and gather requirements:</strong>
                <div className="rounded-lg bg-muted p-3 mt-2">
                  <code>"Ask me up to 10 questions to understand what kind of [article/script/workflow] I want."</code>
                </div>
              </li>
              <li>
                <strong>2. Generate an outline or plan:</strong>
                <div className="rounded-lg bg-muted p-3 mt-2">
                  <code>"Based on my answers, draft a detailed outline with headings and bullet points."</code>
                </div>
              </li>
              <li>
                <strong>3. Fill in sections incrementally:</strong>
                <div className="rounded-lg bg-muted p-3 mt-2">
                  <code>
                    "Write the section 'X' from the outline in 300–400 words, following this tone and level of detail."
                  </code>
                </div>
              </li>
              <li>
                <strong>4. Review and refine:</strong>
                <div className="rounded-lg bg-muted p-3 mt-2">
                  <code>
                    "Critique this section for clarity and suggest specific ways to improve structure and examples."
                  </code>
                </div>
              </li>
            </ol>
            <p className="mt-4">
              Production-grade prompt-engineering best practices explicitly recommend this decomposition for reliability
              and better reasoning. See our{" "}
              <Link href="/prompting-data-analysis" className="text-primary hover:underline">
                Data Analysis Prompting Guide
              </Link>{" "}
              for complex workflow examples.
            </p>
          </section>

          {/* Section 7 */}
          <section id="few-shot" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-600">Using Examples and Few-Shot Prompting</h2>
            <p>
              Providing examples of what you want—known as{" "}
              <Link href="/few-shot-prompting" className="text-primary hover:underline">
                few-shot prompting
              </Link>
              —often improves results significantly.
            </p>
            <h3 className="text-xl font-semibold mt-6">Patterns That Work Well:</h3>
            <div className="space-y-4 mt-4">
              <div className="rounded-lg bg-muted p-4">
                <code>
                  "Here is an example of the style I like: [short sample]. Analyze it, then generate 5 new outputs that
                  match this style but for [new topic]."
                </code>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <code>
                  "Here are 2 bad answers and 2 good answers to similar questions. Explain what makes the good ones
                  better, then answer this new question using that standard."
                </code>
              </div>
            </div>
            <p className="mt-4">
              Example-driven prompting is one of the most reliable methods, especially for style and structure.
            </p>
          </section>

          {/* Section 8 */}
          <section id="patterns" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-600">Prompt Patterns for Different Use Cases</h2>

            <div className="space-y-6 mt-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold text-emerald-600">1. Information & Explanation</h3>
                <p className="mt-2">
                  <strong>Pattern:</strong> "Explain like I'm [audience]" + scope + constraints
                </p>
                <div className="rounded-lg bg-muted p-3 mt-2">
                  <code>
                    "Explain vector databases like I'm a web developer who knows SQL but nothing about machine learning.
                    Use 3 short sections and avoid equations."
                  </code>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold text-emerald-600">2. Writing & Editing</h3>
                <p className="mt-2">
                  <strong>Pattern:</strong> "Rewrite this for [audience] with [tone], preserving [constraints]"
                </p>
                <div className="rounded-lg bg-muted p-3 mt-2">
                  <code>
                    "Rewrite this LinkedIn post to sound more conversational and less salesy while keeping all key
                    points and under 200 words."
                  </code>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold text-emerald-600">3. Ideation & Brainstorming</h3>
                <p className="mt-2">
                  <strong>Pattern:</strong> "Generate N ideas for [goal] for [audience] under [constraints]. Rank or
                  group them."
                </p>
                <div className="rounded-lg bg-muted p-3 mt-2">
                  <code>
                    "Generate 25 YouTube video ideas about AI tools for Nigerian students that can be recorded without
                    showing my face."
                  </code>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold text-emerald-600">4. Planning & Structuring</h3>
                <p className="mt-2">
                  <strong>Pattern:</strong> "Create a plan/outline/checklist with clear steps and substeps"
                </p>
                <div className="rounded-lg bg-muted p-3 mt-2">
                  <code>
                    "Create a 7-day plan for launching a digital product about AI prompts, with daily tasks and
                    approximate time required."
                  </code>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold text-emerald-600">5. Analysis & Critique</h3>
                <p className="mt-2">
                  <strong>Pattern:</strong> "Evaluate this against criteria and suggest improvements"
                </p>
                <div className="rounded-lg bg-muted p-3 mt-2">
                  <code>
                    "Evaluate this landing page copy for clarity, trust, and urgency. Give scores out of 10 and detailed
                    suggestions."
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="safety-ethics" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-600">Safety, Ethics, and Data Sensitivity</h2>
            <p>Reliable sources warn strongly against putting sensitive data into public AI tools.</p>
            <h3 className="text-xl font-semibold mt-6">Best Practices:</h3>
            <ul className="space-y-2 mt-4">
              <li>
                <strong>Avoid personal identifiers:</strong> names, phone numbers, emails, IDs, private financial
                details
              </li>
              <li>
                <strong>Anonymize data:</strong> "Client A (SaaS startup), revenue range, region" instead of full legal
                details
              </li>
              <li>
                <strong>Respect policies and law:</strong> many organizations provide internal policies on what can and
                can't be shared with external AI systems
              </li>
              <li>
                <strong>Be transparent:</strong> when AI plays a major role in outputs that affect people (grading,
                hiring, legal advice, etc.)
              </li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-600">FAQ: Writing Effective AI Prompts</h2>
            <div className="space-y-6 mt-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold">What is the most important element of an effective AI prompt?</h3>
                <p className="mt-2 text-muted-foreground">
                  Clear task definition is the single biggest lever for quality. Specify exactly what action you want
                  (summarize, rewrite, generate) and the scope (word count, number of items, format).
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold">Do I need to use a framework like CRISPE for every prompt?</h3>
                <p className="mt-2 text-muted-foreground">
                  No. For simple questions, a clear task is enough. Frameworks like CRISPE are most valuable for complex
                  tasks where you need consistent, high-quality outputs.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold">How long should my prompts be?</h3>
                <p className="mt-2 text-muted-foreground">
                  Long enough to include all necessary context and constraints, but concise enough to avoid conflicting
                  instructions. Use bullet points for clarity. Most effective prompts are 50-200 words.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold">Can I use the same prompts across ChatGPT, Claude, and Gemini?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes. The principles of clear tasks, roles, context, and format work across all major LLMs. Minor
                  adjustments may improve results for specific models.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold">How do I know if my prompt is effective?</h3>
                <p className="mt-2 text-muted-foreground">
                  An effective prompt produces accurate, relevant, and usable output with minimal back-and-forth. If you
                  need multiple iterations to get what you want, refine your prompt to include missing context or
                  constraints.
                </p>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-600">Related Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2 mt-6">
              <Link
                href="/common-ai-prompt-mistakes"
                className="rounded-lg border bg-card p-4 hover:border-primary transition-colors"
              >
                <h3 className="font-semibold">Common AI Prompt Mistakes</h3>
                <p className="text-sm text-muted-foreground mt-1">Learn what to avoid for better results</p>
              </Link>
              <Link
                href="/few-shot-prompting"
                className="rounded-lg border bg-card p-4 hover:border-primary transition-colors"
              >
                <h3 className="font-semibold">Few-Shot Prompting Guide</h3>
                <p className="text-sm text-muted-foreground mt-1">Master example-based prompting techniques</p>
              </Link>
              <Link
                href="/chatgpt-role-based-prompting"
                className="rounded-lg border bg-card p-4 hover:border-primary transition-colors"
              >
                <h3 className="font-semibold">Role-Based Prompting</h3>
                <p className="text-sm text-muted-foreground mt-1">Expert personas for better responses</p>
              </Link>
              <Link
                href="/prompt-engineering-seo"
                className="rounded-lg border bg-card p-4 hover:border-primary transition-colors"
              >
                <h3 className="font-semibold">Prompt Engineering for SEO</h3>
                <p className="text-sm text-muted-foreground mt-1">Optimize content for search engines</p>
              </Link>
            </div>
          </section>
        </article>

        {/* Footer */}
        <footer className="mt-16 border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} GPTPrompts.AI. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/website-links" className="text-sm text-muted-foreground hover:text-foreground">
                Prompts Library
              </Link>
              <Link href="/chatgpt-prompts" className="text-sm text-muted-foreground hover:text-foreground">
                ChatGPT Prompts
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
