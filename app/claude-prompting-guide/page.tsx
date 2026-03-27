import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Claude Prompting Guide: Techniques That Actually Work",
  description:
    "Master Claude prompting with XML tags, prefill techniques, chain-of-thought, few-shot examples, and prompt chaining. Get 30-40% better accuracy on complex tasks.",
  keywords:
    "Claude prompting guide, Claude prompts, XML tags prompting, Anthropic Claude, Claude 3, Claude best practices",
}

export default function ClaudePromptingGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-orange-50 to-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
          <div className="flex items-center gap-2 text-orange-600 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/website-links" className="hover:underline">
              Prompts Library
            </Link>
            <span>/</span>
            <span>Claude Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Claude Prompting Guide: Techniques That Actually Work
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Claude by Anthropic responds best to a structured, explicit style of prompting. These proven methods can
            improve accuracy by 30-40% on complex tasks.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Why Different */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Claude Needs a Different Prompting Style</h2>
            <p className="text-gray-700 mb-4">
              Claude is trained differently from OpenAI's models. If you use the same prompts that work with GPT-4,
              you'll often get overly chatty answers, ignored formatting instructions, and inconsistent behavior.
            </p>
            <p className="text-gray-700 mb-4">When you use the right techniques, Claude excels at:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Long-context reasoning (up to 200K tokens)</li>
              <li>Precise instruction following</li>
              <li>Research, analysis, and document processing</li>
              <li>Enterprise workflows (legal, finance, support)</li>
            </ul>
          </section>

          {/* Technique 1: XML Tags */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Use XML Tags to Structure Your Prompt</h2>
            <p className="text-gray-700 mb-4">
              Claude pays special attention to XML-style tags like {"<instructions>"}, {"<context>"}, {"<examples>"} and
              largely ignores random symbols like ### or ---.
            </p>
            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="font-semibold text-orange-800 mb-2">Do this:</p>
              <pre className="bg-white p-4 rounded text-sm overflow-x-auto">
                {`<context>
You are a senior content strategist for a global SaaS company.
</context>

<instructions>
Write a 1,200-word SEO article titled "AI Prompts for Customer Service."
- Target keyword: "AI prompts for customer service"
- Include an FAQ section with 8-10 questions
- Use clear, professional but approachable language
</instructions>

<examples>
[Include 1-2 short examples of the desired tone]
</examples>`}
              </pre>
            </div>
            <p className="text-gray-700 mt-4">
              Using XML tags makes your prompt more predictable and easier to reuse. For structured frameworks, see our{" "}
              <Link href="/advanced-prompt-frameworks" className="text-orange-600 hover:underline">
                advanced prompt frameworks guide
              </Link>
              .
            </p>
          </section>

          {/* Technique 2: Be Direct */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Be Direct, Concise, and Specific</h2>
            <p className="text-gray-700 mb-4">
              Claude works best when you clearly state what it should do, rather than what it should avoid.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">Good (positive instructions):</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Write in clear, professional English</li>
                  <li>• Use short paragraphs and subheadings</li>
                  <li>• Keep the tone helpful and practical</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-semibold text-red-800 mb-2">Weak (vague/negative):</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Don't be too casual</li>
                  <li>• Don't use too many bullet points</li>
                  <li>• Try to be professional</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technique 3: Prefill */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Prefill the Assistant's Message</h2>
            <p className="text-gray-700 mb-4">
              Claude tends to add introductory sentences like "Here is a detailed guide..." To fix this, prefill the
              first token so Claude starts exactly where you want.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                {`<instructions>
Write a 300-word product description for a solar lantern.
- Focus on durability, battery life, and safety
- Use simple, persuasive language
</instructions>`}
              </pre>
            </div>
            <p className="text-gray-700 mt-4">
              Prefilling the assistant's message ensures that Claude's response aligns perfectly with your expectations.
            </p>
          </section>

          {/* Technique 4: Chain-of-Thought */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Use Chain-of-Thought Prompts</h2>
            <p className="text-gray-700 mb-4">
              Guide Claude through a step-by-step process to ensure it understands the task thoroughly.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                {`<instructions>
Step 1: Identify the key features of the solar lantern.
Step 2: Highlight the benefits of these features.
Step 3: Write a compelling introduction.
Step 4: Create the main body with subheadings.
Step 5: Include an FAQ section addressing common queries.
</instructions>`}
              </pre>
            </div>
            <p className="text-gray-700 mt-4">
              Chain-of-thought prompts help Claude break down the task and produce a more coherent response.
            </p>
          </section>

          {/* Technique 5: Few-Shot Examples */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Provide Few-Shot Examples</h2>
            <p className="text-gray-700 mb-4">Show Claude how you want the output to look by providing 1-2 examples.</p>
            <div className="bg-purple-50 p-6 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                {`<examples>
Example 1: 
The Solar Lantern is a durable and reliable product designed for outdoor use. With a long battery life, it ensures consistent lighting even in remote areas. Safety features include overcharge protection and flame-retardant materials.

Example 2: 
This solar lantern offers superior durability and longevity, making it ideal for camping and emergency situations. Its advanced battery technology provides hours of light, and safety features ensure peace of mind.
</examples>`}
              </pre>
            </div>
            <p className="text-gray-700 mt-4">
              Few-shot examples help Claude understand the desired tone and structure of your output.
            </p>
          </section>

          {/* Technique 6: Prompt Chaining */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Use Prompt Chaining</h2>
            <p className="text-gray-700 mb-4">
              Break down complex tasks into smaller, manageable prompts to ensure accuracy and completeness.
            </p>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                {`<prompt1>
Identify the key features of the solar lantern.
</prompt1>
<prompt2>
Highlight the benefits of these features.
</prompt2>
<prompt3>
Write a compelling introduction.
</prompt3>
<prompt4>
Create the main body with subheadings.
</prompt4>
<prompt5>
Include an FAQ section addressing common queries.
</prompt5>`}
              </pre>
            </div>
            <p className="text-gray-700 mt-4">
              Prompt chaining allows you to build a comprehensive response by addressing each part of the task
              separately.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
