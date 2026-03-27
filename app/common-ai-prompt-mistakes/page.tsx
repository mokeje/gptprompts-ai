import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Common AI Prompt Mistakes: 14 Errors to Avoid (2026 Guide)",
  description:
    "Avoid the 14 most common AI prompt mistakes that ruin output quality. Learn fixes for vague prompts, missing roles, prompt bloat, and more for ChatGPT, Claude, and Gemini.",
  keywords:
    "common prompt mistakes, AI prompt errors, prompt engineering mistakes, ChatGPT mistakes, how to fix prompts",
  openGraph: {
    title: "Common AI Prompt Mistakes: 14 Errors to Avoid (2026 Guide)",
    description:
      "Avoid the 14 most common AI prompt mistakes that ruin output quality. Learn fixes for vague prompts, missing roles, prompt bloat, and more.",
    type: "article",
  },
}

export default function CommonAIPromptMistakesPage() {
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
            <span>Common AI Prompt Mistakes</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Common AI Prompt Mistakes
          </h1>
          <p className="text-xl text-muted-foreground">
            14 errors that quietly ruin output quality—and how to fix them. Stop getting vague, generic, or wrong
            answers from ChatGPT, Claude, and Gemini.
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-12 rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold">14 Mistakes Covered</h2>
          <ol className="grid gap-2 text-sm sm:grid-cols-2">
            <li>
              <a href="#mistake-1" className="text-primary hover:underline">
                1. Being Too Vague
              </a>
            </li>
            <li>
              <a href="#mistake-2" className="text-primary hover:underline">
                2. No Role or Persona
              </a>
            </li>
            <li>
              <a href="#mistake-3" className="text-primary hover:underline">
                3. Missing Output Format
              </a>
            </li>
            <li>
              <a href="#mistake-4" className="text-primary hover:underline">
                4. Overloading One Prompt
              </a>
            </li>
            <li>
              <a href="#mistake-5" className="text-primary hover:underline">
                5. Ignoring Context
              </a>
            </li>
            <li>
              <a href="#mistake-6" className="text-primary hover:underline">
                6. Prompt Bloat
              </a>
            </li>
            <li>
              <a href="#mistake-7" className="text-primary hover:underline">
                7. No Negative Constraints
              </a>
            </li>
            <li>
              <a href="#mistake-8" className="text-primary hover:underline">
                8. Ignoring Length/Detail
              </a>
            </li>
            <li>
              <a href="#mistake-9" className="text-primary hover:underline">
                9. Ignoring Model Limitations
              </a>
            </li>
            <li>
              <a href="#mistake-10" className="text-primary hover:underline">
                10. No Delimiters
              </a>
            </li>
            <li>
              <a href="#mistake-11" className="text-primary hover:underline">
                11. "Prompt and Pray"
              </a>
            </li>
            <li>
              <a href="#mistake-12" className="text-primary hover:underline">
                12. No Examples (Few-Shot)
              </a>
            </li>
            <li>
              <a href="#mistake-13" className="text-primary hover:underline">
                13. Mixed Instruction Layers
              </a>
            </li>
            <li>
              <a href="#mistake-14" className="text-primary hover:underline">
                14. Skipping Validation
              </a>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <article className="prose prose-gray dark:prose-invert max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-red-600">Why Common AI Prompt Mistakes Matter</h2>
            <p>When prompts are poorly designed, LLMs:</p>
            <ul>
              <li>Produce generic, surface-level answers instead of tailored insights</li>
              <li>"Hallucinate" or confidently state incorrect information due to lack of context</li>
              <li>Waste your time as you fix or rewrite outputs that could have been right the first time</li>
            </ul>
            <p>
              The same core problems appear repeatedly: vagueness, missing roles, unclear format, overloaded tasks, and
              no iteration. This guide covers each mistake with concrete fixes. For the positive side, see our{" "}
              <Link href="/how-to-write-effective-ai-prompts" className="text-primary hover:underline">
                How to Write Effective AI Prompts
              </Link>{" "}
              guide.
            </p>
          </section>

          {/* Mistake 1 */}
          <section id="mistake-1" className="mb-10">
            <h2 className="text-2xl font-bold text-red-600">1. Being Too Vague or Ambiguous</h2>
            <p>
              This is the number one mistake: prompts like "Help me with marketing" or "Improve this" give the model
              almost no target.
            </p>
            <div className="grid gap-4 md:grid-cols-2 my-4">
              <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/20 p-4">
                <p className="font-semibold text-red-600 mb-2">Bad:</p>
                <code>"How can I improve my business?"</code>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 p-4">
                <p className="font-semibold text-green-600 mb-2">Better:</p>
                <code>
                  "What are three specific strategies to increase customer retention for a small e-commerce business
                  selling handmade jewelry?"
                </code>
              </div>
            </div>
            <p>
              <strong>How to fix:</strong> Specify who you are, what you sell, which problem, and what kind of answer
              you want.
            </p>
          </section>

          {/* Mistake 2 */}
          <section id="mistake-2" className="mb-10">
            <h2 className="text-2xl font-bold text-red-600">2. Forgetting to Assign a Role or Persona</h2>
            <p>
              Many people just ask questions without telling the AI who to be, which often produces bland,
              middle-of-the-road responses.
            </p>
            <div className="grid gap-4 md:grid-cols-2 my-4">
              <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/20 p-4">
                <p className="font-semibold text-red-600 mb-2">Bad:</p>
                <code>"Write a contract clause about late payment."</code>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 p-4">
                <p className="font-semibold text-green-600 mb-2">Better:</p>
                <code>
                  "Act as a commercial lawyer familiar with Nigerian small-business law. Draft a late-payment clause for
                  a service agreement between a freelancer and a local client, in clear, plain English."
                </code>
              </div>
            </div>
            <p>
              <strong>How to fix:</strong> Start with "You are a [role] who helps [audience] with [problem]." Learn more
              in our{" "}
              <Link href="/chatgpt-role-based-prompting" className="text-primary hover:underline">
                Role-Based Prompting Guide
              </Link>
              .
            </p>
          </section>

          {/* Mistake 3 */}
          <section id="mistake-3" className="mb-10">
            <h2 className="text-2xl font-bold text-red-600">3. Not Defining the Output Format</h2>
            <p>Another frequent error is failing to say how the answer should be structured.</p>
            <p>
              <strong>Symptoms:</strong>
            </p>
            <ul>
              <li>Long walls of text when you needed a checklist</li>
              <li>Missing fields when you needed a table or JSON</li>
            </ul>
            <div className="grid gap-4 md:grid-cols-2 my-4">
              <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/20 p-4">
                <p className="font-semibold text-red-600 mb-2">Bad:</p>
                <code>"Analyze this survey."</code>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 p-4">
                <p className="font-semibold text-green-600 mb-2">Better:</p>
                <code>
                  "Analyze this survey and return: 5 key themes, a bullet list of common complaints, a table with
                  columns: theme, example quote, suggested action."
                </code>
              </div>
            </div>
            <p>
              <strong>How to fix:</strong> Explicitly request bullets, tables, headings, JSON, word count, or section
              structure.
            </p>
          </section>

          {/* Mistake 4 */}
          <section id="mistake-4" className="mb-10">
            <h2 className="text-2xl font-bold text-red-600">
              4. Overloading a Single Prompt ("Do Everything at Once")
            </h2>
            <p>
              Trying to make one prompt research, outline, draft, edit, and format is a classic failure mode that leads
              to confused, unfocused answers.
            </p>
            <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/20 p-4 my-4">
              <p className="font-semibold text-red-600 mb-2">Example of Overload:</p>
              <code>
                "Research the Nigerian tech market, write a detailed report, create marketing copy, and generate 10
                social media posts."
              </code>
            </div>
            <p>
              <strong>How to fix:</strong> Break work into prompt chains: 1) Research/notes → 2) Outline → 3) Draft → 4)
              Edit → 5) Repurpose. See our{" "}
              <Link href="/prompting-data-analysis" className="text-primary hover:underline">
                Data Analysis Prompting Guide
              </Link>{" "}
              for examples.
            </p>
          </section>

          {/* Mistake 5 */}
          <section id="mistake-5" className="mb-10">
            <h2 className="text-2xl font-bold text-red-600">5. Ignoring Context and Assumed Knowledge</h2>
            <p>
              People often assume the model "remembers" past details or knows their niche without being told. Models
              don't have your private context and won't track it across separate sessions.
            </p>
            <p>
              <strong>Mistakes:</strong>
            </p>
            <ul>
              <li>Referencing "the product" when you never described it</li>
              <li>Asking "improve this" without specifying the audience or use case</li>
            </ul>
            <p>
              <strong>How to fix:</strong> Include who, what, where, and why in each important prompt. When in doubt,
              paste a short context block: "Context: [3–6 bullets]."
            </p>
          </section>

          {/* Mistake 6 */}
          <section id="mistake-6" className="mb-10">
            <h2 className="text-2xl font-bold text-red-600">6. Prompt Bloat: Overly Long, Rambling Instructions</h2>
            <p>
              The opposite of being vague is stuffing prompts with long, messy paragraphs of semi-relevant information.
            </p>
            <p>
              <strong>Problems:</strong>
            </p>
            <ul>
              <li>Mixed or conflicting instructions</li>
              <li>Important constraints buried inside polite filler or story-time</li>
            </ul>
            <p>
              <strong>How to fix:</strong> Use short, numbered or bulleted instructions. Separate constraints clearly
              (e.g., "Requirements:" followed by bullets).
            </p>
          </section>

          {/* Mistake 7 */}
          <section id="mistake-7" className="mb-10">
            <h2 className="text-2xl font-bold text-red-600">
              7. Not Setting Negative Constraints (What You Don't Want)
            </h2>
            <p>Most users only say what they want, but not what to avoid.</p>
            <p>
              <strong>Symptoms:</strong>
            </p>
            <ul>
              <li>Overly salesy or clickbait outputs</li>
              <li>Jargon-heavy or too formal text when you wanted conversational tone</li>
            </ul>
            <p>
              <strong>How to fix:</strong> Add lines like:
            </p>
            <div className="rounded-lg bg-muted p-4 my-4 space-y-1">
              <code className="block">"Avoid clickbait or unrealistic promises."</code>
              <code className="block">"Do not invent statistics."</code>
              <code className="block">"Avoid jargon and acronyms."</code>
            </div>
          </section>

          {/* Mistake 8 */}
          <section id="mistake-8" className="mb-10">
            <h2 className="text-2xl font-bold text-red-600">8. Ignoring Length and Level of Detail</h2>
            <p>Without guidance, models may ramble for paragraphs or be too brief.</p>
            <p>
              <strong>How to fix:</strong> Specify rough length: "Under 150 words," "2–3 sentences," "10 bullet points,"
              or "about 1,500 words."
            </p>
          </section>

          {/* Mistake 9 */}
          <section id="mistake-9" className="mb-10">
            <h2 className="text-2xl font-bold text-red-600">
              9. Ignoring Model Limitations (Hallucinations & Capabilities)
            </h2>
            <p>Another mistake is treating the AI like an all-knowing oracle:</p>
            <ul>
              <li>Asking it for real-time data it cannot access</li>
              <li>Asking for legal, medical, financial decisions as if it were a certified professional</li>
              <li>Assuming it can perfectly remember a 50-page document without chunking</li>
            </ul>
            <p>
              <strong>How to fix:</strong> Avoid or clearly flag high-risk use cases; double-check facts. Use tools or
              plugins for math, retrieval, or live data. Break large documents into smaller chunks. See our{" "}
              <Link href="/avoiding-hallucinations" className="text-primary hover:underline">
                Avoiding Hallucinations Guide
              </Link>
              .
            </p>
          </section>

          {/* Mistake 10 */}
          <section id="mistake-10" className="mb-10">
            <h2 className="text-2xl font-bold text-red-600">10. Not Using Delimiters or Clear Boundaries</h2>
            <p>
              When you paste long text (articles, transcripts, code) without clear boundaries, models can misinterpret
              where your instructions stop and content begins.
            </p>
            <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 p-4 my-4">
              <p className="font-semibold text-green-600 mb-2">Better:</p>
              <code>{`"Summarize the following article in 5 bullets:\n\n\`\`\`\n[article text here]\n\`\`\`"`}</code>
            </div>
            <p>
              <strong>How to fix:</strong> Wrap data in clear markers (``` or "TEXT START/TEXT END"). Label different
              sections (e.g., CONTEXT, TASK, EXAMPLE).
            </p>
          </section>

          {/* Mistake 11 */}
          <section id="mistake-11" className="mb-10">
            <h2 className="text-2xl font-bold text-red-600">11. No Iteration: "Prompt and Pray"</h2>
            <p>
              Many users send one prompt, accept the first answer, or start from scratch if it's wrong. Expert users
              treat prompting as iterative debugging.
            </p>
            <p>
              <strong>How to fix:</strong> Build a simple loop: prompt → review → refine with specific feedback →
              repeat. Use follow-ups like "Make it shorter," "Add more examples," "Change tone," "Generate three
              alternatives."
            </p>
          </section>

          {/* Mistake 12 */}
          <section id="mistake-12" className="mb-10">
            <h2 className="text-2xl font-bold text-red-600">
              12. Not Providing Examples ("Few-Shot" Missed Opportunity)
            </h2>
            <p>Skipping examples means the model has to guess your style and expectations.</p>
            <div className="grid gap-4 md:grid-cols-2 my-4">
              <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/20 p-4">
                <p className="font-semibold text-red-600 mb-2">Mistake:</p>
                <code>"Write a landing page for my AI tool" with no samples.</code>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 p-4">
                <p className="font-semibold text-green-600 mb-2">Fix:</p>
                <code>
                  "Here's a landing page I like. Match its style and structure for my AI tool, but change the content to
                  fit this description: [brief]."
                </code>
              </div>
            </div>
            <p>
              Few-shot prompting (giving 1–3 examples) often dramatically improves style, structure, and accuracy. Learn
              more in our{" "}
              <Link href="/few-shot-prompting" className="text-primary hover:underline">
                Few-Shot Prompting Guide
              </Link>
              .
            </p>
          </section>

          {/* Mistake 13 */}
          <section id="mistake-13" className="mb-10">
            <h2 className="text-2xl font-bold text-red-600">13. Mixing Instruction Layers in One Sentence</h2>
            <p>
              If you pack tone, format, content, and constraints into a single long sentence, the model may prioritize
              the wrong part.
            </p>
            <p>
              <strong>How to fix:</strong> Separate instructions into lines or bullet points:
            </p>
            <div className="rounded-lg bg-muted p-4 my-4 space-y-1">
              <code className="block">"Task: …"</code>
              <code className="block">"Tone: …"</code>
              <code className="block">"Format: …"</code>
              <code className="block">"Length: …"</code>
              <code className="block">"Constraints: …"</code>
            </div>
          </section>

          {/* Mistake 14 */}
          <section id="mistake-14" className="mb-10">
            <h2 className="text-2xl font-bold text-red-600">14. Skipping Output Validation and Human Review</h2>
            <p>Finally, a major mistake is trusting outputs without checking.</p>
            <p>
              <strong>Problems:</strong>
            </p>
            <ul>
              <li>Confident but wrong facts</li>
              <li>Subtle bias or inappropriate phrasing</li>
              <li>Legal/compliance issues</li>
            </ul>
            <p>
              <strong>How to fix:</strong> For high-stakes tasks, verify with trusted sources, domain experts, or
              additional tools. Ask the model to list assumptions or possible failure modes, then inspect them.
            </p>
          </section>

          {/* Checklist */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-600">Quick Checklist: Turn Mistakes into Better Prompts</h2>
            <div className="rounded-lg border bg-card p-6 mt-6">
              <p className="font-semibold mb-4">Before sending a prompt, ask:</p>
              <ul className="space-y-2">
                <li>☐ Is the task clear and narrow? If not, split it into steps.</li>
                <li>☐ Did I specify a role and audience? "Act as [role] for [audience]."</li>
                <li>☐ Did I include essential context? Who, what, where, constraints, and goal.</li>
                <li>☐ Did I define the format and length? Bullets, table, sections, word count.</li>
                <li>☐ Did I set any "don'ts"? No clickbait, no made-up stats, avoid jargon.</li>
                <li>☐ Can I add one example? A short sample of the output style you want.</li>
                <li>☐ Am I ready to iterate? Plan at least one refine-and-improve round.</li>
              </ul>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-600">Related Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2 mt-6">
              <Link
                href="/how-to-write-effective-ai-prompts"
                className="rounded-lg border bg-card p-4 hover:border-primary transition-colors"
              >
                <h3 className="font-semibold">How to Write Effective AI Prompts</h3>
                <p className="text-sm text-muted-foreground mt-1">Complete guide with the CRISPE framework</p>
              </Link>
              <Link
                href="/few-shot-prompting"
                className="rounded-lg border bg-card p-4 hover:border-primary transition-colors"
              >
                <h3 className="font-semibold">Few-Shot Prompting Guide</h3>
                <p className="text-sm text-muted-foreground mt-1">Master example-based prompting</p>
              </Link>
              <Link
                href="/avoiding-hallucinations"
                className="rounded-lg border bg-card p-4 hover:border-primary transition-colors"
              >
                <h3 className="font-semibold">Avoiding Hallucinations</h3>
                <p className="text-sm text-muted-foreground mt-1">Strategies for factual AI outputs</p>
              </Link>
              <Link
                href="/chatgpt-role-based-prompting"
                className="rounded-lg border bg-card p-4 hover:border-primary transition-colors"
              >
                <h3 className="font-semibold">Role-Based Prompting</h3>
                <p className="text-sm text-muted-foreground mt-1">Expert personas for better responses</p>
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
