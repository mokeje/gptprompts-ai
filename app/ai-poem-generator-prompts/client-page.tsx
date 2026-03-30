'use client';

import { useState } from 'react';
import { Check, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const CopyCard = ({ prompt, section }: { prompt: string; section: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-pink-500/50 dark:hover:border-pink-500/50 transition-colors">
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-pink-500 hover:text-pink-600 dark:hover:text-pink-400 text-sm font-medium transition-colors"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy prompt
          </>
        )}
      </button>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
      >
        <h3 className="font-semibold text-gray-900 dark:text-white text-left">{question}</h3>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-pink-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-pink-500 flex-shrink-0" />
        )}
      </button>
      {expanded && (
        <div className="border-t border-gray-200 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-900/50">
          <p className="text-gray-700 dark:text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function AIPoemGeneratorPromptsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Poem Generator Prompts',
            description:
              '30+ ChatGPT prompts to generate poetry across styles, create emotional narratives, master poetic devices, refine verse, and develop your unique voice. Unlock creative poetry writing with AI.',
            datePublished: '2026-03-29',
            dateModified: '2026-03-29',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What poetry styles can AI help me generate?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can generate across all major poetry styles including sonnet, haiku, free verse, ballad, villanelle, limerick, and contemporary styles. Use prompts that specify your desired form, meter, and tone.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can I improve an AI-generated poem?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use follow-up prompts to refine line breaks, adjust imagery, enhance rhythm, strengthen emotional impact, or rework specific stanzas. Treat AI-generated poems as first drafts to develop further.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use AI poems commercially or for publication?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most publishers require disclosure of AI use or don&apos;t accept purely AI-generated work. However, poems you significantly revise, rewrite, or use as inspiration are typically considered your original work.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I get AI to capture specific emotions in poetry?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Be explicit about the emotion you want to convey, use sensory language in your prompts, specify the target audience or context, and ask for specific poetic devices that evoke that feeling.',
                },
              },
              {
                '@type': 'Question',
                name: 'What&apos;s the best approach for writing poetry with AI collaboration?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Start with a clear concept or emotion, use AI to generate options, select lines or stanzas that resonate, then manually revise and add your personal voice. Treat AI as a brainstorming partner.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can I train AI to understand my poetic voice?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Share examples of poems you admire or have written, describe your preferred style and devices, specify your typical themes and imagery. The more detailed your context, the better AI can match your voice.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI help with meter and rhythm in poetry?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Ask AI to generate poems with specific meters (iambic, trochaic, etc.), syllable counts, or rhyme schemes. You can also ask it to analyze the rhythm of your own lines.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I use AI to brainstorm metaphors and imagery?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ask AI to generate metaphors for specific emotions or themes, suggest vivid imagery for particular scenes, or create extended metaphor chains. Use these as starting points for your own refinement.',
                },
              },
              {
                '@type': 'Question',
                name: 'What&apos;s the difference between AI-assisted and AI-generated poetry?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI-generated means the AI created the majority of the work; AI-assisted means you used AI as a tool alongside significant human creativity, editing, and voice. Most published poets use AI assistance.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can I overcome writer&apos;s block using AI poetry prompts?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use AI to generate opening lines, explore different angles on your theme, create variations on a single concept, or suggest new metaphors to spark inspiration. Use AI output as creative fuel, not the final product.',
                },
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-950">
        {/* Hero Section */}
        <div className="border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">
                Poetry
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AI Poem Generator Prompts
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              30+ ChatGPT prompts to generate poetry across styles, create emotional narratives, master poetic devices, refine verse, and develop your unique voice. Unlock creative poetry writing with AI.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Poetry Style Generation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Poetry Style Generation
            </h2>
            <div className="grid gap-4">
              <CopyCard
                prompt="Write a Shakespearean sonnet about [topic]. Follow the ABAB CDCD EFEF GG rhyme scheme with iambic pentameter throughout."
                section="Poetry Style Generation"
              />
              <CopyCard
                prompt="Create a haiku series (5 poems) about [subject], each capturing a different seasonal or emotional perspective with vivid imagery."
                section="Poetry Style Generation"
              />
              <CopyCard
                prompt="Generate a free verse poem (no rhyme, no meter) about [theme]. Focus on imagery, line breaks, and emotional impact over structure."
                section="Poetry Style Generation"
              />
              <CopyCard
                prompt="Write a villanelle about [emotion or memory]. Include the two refrains and follow the ABA rhyme pattern across five tercets and one quatrain."
                section="Poetry Style Generation"
              />
              <CopyCard
                prompt="Create a ballad (narrative poem) about [story]. Use 4-line stanzas with ABCB rhyme scheme and include dialogue and action."
                section="Poetry Style Generation"
              />
              <CopyCard
                prompt="Write a contemporary slam poem about [social issue]. Use repetition, rhythm, and accessible language. Make it performable and powerful."
                section="Poetry Style Generation"
              />
            </div>
          </section>

          {/* Emotional & Thematic Poetry */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Emotional & Thematic Poetry
            </h2>
            <div className="grid gap-4">
              <CopyCard
                prompt="Write a poem that captures the feeling of [emotion]. Use sensory language, metaphor, and specific imagery. Don&apos;t explicitly name the emotion."
                section="Emotional & Thematic Poetry"
              />
              <CopyCard
                prompt="Create a poem about loss that moves from despair to acceptance. Use nature imagery throughout and include a moment of unexpected beauty."
                section="Emotional & Thematic Poetry"
              />
              <CopyCard
                prompt="Write a love poem that avoids clichés. Use unexpected metaphors, specific details about the person, and emotional vulnerability."
                section="Emotional & Thematic Poetry"
              />
              <CopyCard
                prompt="Generate a poem about solitude that explores both loneliness and peaceful solitude. Show the contrast between isolation and independence."
                section="Emotional & Thematic Poetry"
              />
              <CopyCard
                prompt="Write a poem about change and transformation. Use imagery of seasons, growth, or metamorphosis. Build from uncertainty to clarity."
                section="Emotional & Thematic Poetry"
              />
              <CopyCard
                prompt="Create a poem about [personal memory]. Include sensory details, emotional reactions, and one surprising image that reveals deeper meaning."
                section="Emotional & Thematic Poetry"
              />
            </div>
          </section>

          {/* Poetic Devices & Techniques */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Poetic Devices & Techniques
            </h2>
            <div className="grid gap-4">
              <CopyCard
                prompt="Write a poem built entirely on extended metaphor, comparing [concept] to [another concept]. Develop the metaphor across all stanzas."
                section="Poetic Devices & Techniques"
              />
              <CopyCard
                prompt="Create a poem that uses alliteration and assonance throughout. Show how repeated sounds can enhance mood and rhythm."
                section="Poetic Devices & Techniques"
              />
              <CopyCard
                prompt="Write a poem using vivid personification. Give human qualities to [object or abstract concept] and use sensory language to bring it alive."
                section="Poetic Devices & Techniques"
              />
              <CopyCard
                prompt="Generate a poem that uses paradox or contradiction to explore [theme]. Create surprising juxtapositions that reveal unexpected truth."
                section="Poetic Devices & Techniques"
              />
              <CopyCard
                prompt="Write a poem using anaphora (repetition at the start of successive lines) to build emphasis and rhythm. Start with &apos;I remember&apos; or &apos;I see&apos; or &apos;I hear&apos;."
                section="Poetic Devices & Techniques"
              />
              <CopyCard
                prompt="Create a poem that incorporates synesthesia (mixing senses). Describe what [concept] sounds like, tastes like, or feels like in surprising ways."
                section="Poetic Devices & Techniques"
              />
            </div>
          </section>

          {/* Poem Refinement & Revision */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Poem Refinement & Revision
            </h2>
            <div className="grid gap-4">
              <CopyCard
                prompt="Improve this poem by strengthening weak verbs, removing clichés, and deepening the imagery: [paste poem]. Suggest at least 3 revisions."
                section="Poem Refinement & Revision"
              />
              <CopyCard
                prompt="Rewrite this stanza with stronger line breaks and more impactful word choices: [paste stanza]. Explain each change."
                section="Poem Refinement & Revision"
              />
              <CopyCard
                prompt="Analyze the rhythm and meter of this poem and suggest adjustments to improve flow: [paste poem]. Mark stressed and unstressed syllables."
                section="Poem Refinement & Revision"
              />
              <CopyCard
                prompt="This poem feels abstract. Suggest 5 specific, concrete images or details I could add to ground it in the physical world."
                section="Poem Refinement & Revision"
              />
              <CopyCard
                prompt="Does this poem tell a clear story or convey a specific emotion? Rewrite it to make [emotion/story] more evident without explaining it."
                section="Poem Refinement & Revision"
              />
              <CopyCard
                prompt="Suggest 3 different endings for this poem: [paste poem]. Each ending should shift or deepen the meaning in different ways."
                section="Poem Refinement & Revision"
              />
            </div>
          </section>

          {/* Voice & Style Development */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Voice & Style Development
            </h2>
            <div className="grid gap-4">
              <CopyCard
                prompt="Based on this example of my writing, generate a poem in my style: [paste example]. Describe the key characteristics of my voice."
                section="Voice & Style Development"
              />
              <CopyCard
                prompt="Generate a poem imitating the style of [poet name]. Show how they use [specific technique], and then adapt it for my own voice."
                section="Voice & Style Development"
              />
              <CopyCard
                prompt="Write two versions of a poem about [topic]: one minimalist (short lines, sparse language) and one lush (long lines, rich imagery)."
                section="Voice & Style Development"
              />
              <CopyCard
                prompt="Create a poem that blends [poetry style 1] and [poetry style 2]. Show how different traditions can merge into something new."
                section="Voice & Style Development"
              />
              <CopyCard
                prompt="Generate a poem exploring [personal theme]. Focus on what makes this theme uniquely important to me, based on this context: [describe your perspective]."
                section="Voice & Style Development"
              />
              <CopyCard
                prompt="Write a poem that experiments with structure. Use [unconventional format: fragmented lines, concrete poetry, dialogue]. Push my usual style."
                section="Voice & Style Development"
              />
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-4">
              <FAQItem
                question="What poetry styles can AI help me generate?"
                answer="AI can generate across all major poetry styles including sonnet, haiku, free verse, ballad, villanelle, limerick, and contemporary styles. Use prompts that specify your desired form, meter, and tone."
              />
              <FAQItem
                question="How can I improve an AI-generated poem?"
                answer="Use follow-up prompts to refine line breaks, adjust imagery, enhance rhythm, strengthen emotional impact, or rework specific stanzas. Treat AI-generated poems as first drafts to develop further."
              />
              <FAQItem
                question="Can I use AI poems commercially or for publication?"
                answer="Most publishers require disclosure of AI use or don't accept purely AI-generated work. However, poems you significantly revise, rewrite, or use as inspiration are typically considered your original work."
              />
              <FAQItem
                question="How do I get AI to capture specific emotions in poetry?"
                answer="Be explicit about the emotion you want to convey, use sensory language in your prompts, specify the target audience or context, and ask for specific poetic devices that evoke that feeling."
              />
              <FAQItem
                question="What's the best approach for writing poetry with AI collaboration?"
                answer="Start with a clear concept or emotion, use AI to generate options, select lines or stanzas that resonate, then manually revise and add your personal voice. Treat AI as a brainstorming partner."
              />
              <FAQItem
                question="How can I train AI to understand my poetic voice?"
                answer="Share examples of poems you admire or have written, describe your preferred style and devices, specify your typical themes and imagery. The more detailed your context, the better AI can match your voice."
              />
              <FAQItem
                question="Can AI help with meter and rhythm in poetry?"
                answer="Yes. Ask AI to generate poems with specific meters (iambic, trochaic, etc.), syllable counts, or rhyme schemes. You can also ask it to analyze the rhythm of your own lines."
              />
              <FAQItem
                question="How do I use AI to brainstorm metaphors and imagery?"
                answer="Ask AI to generate metaphors for specific emotions or themes, suggest vivid imagery for particular scenes, or create extended metaphor chains. Use these as starting points for your own refinement."
              />
              <FAQItem
                question="What's the difference between AI-assisted and AI-generated poetry?"
                answer="AI-generated means the AI created the majority of the work; AI-assisted means you used AI as a tool alongside significant human creativity, editing, and voice. Most published poets use AI assistance."
              />
              <FAQItem
                question="How can I overcome writer's block using AI poetry prompts?"
                answer="Use AI to generate opening lines, explore different angles on your theme, create variations on a single concept, or suggest new metaphors to spark inspiration. Use AI output as creative fuel, not the final product."
              />
            </div>
          </div>
        </div>

        {/* Related Pages */}
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Related Pages
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/ai-translation-prompts"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-pink-500/50 dark:hover:border-pink-500/50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">Translation</h3>
              </Link>
              <Link
                href="/ai-web-builder-prompts"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-pink-500/50 dark:hover:border-pink-500/50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">Web Builder</h3>
              </Link>
              <Link
                href="/ai-writing-assistant-prompts"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-pink-500/50 dark:hover:border-pink-500/50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">Writing Assistant</h3>
              </Link>
              <Link
                href="/ai-music-prompts"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-pink-500/50 dark:hover:border-pink-500/50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">Music</h3>
              </Link>
              <Link
                href="/ai-gaming-prompts"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-pink-500/50 dark:hover:border-pink-500/50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">Gaming</h3>
              </Link>
              <Link
                href="/ai-research-prompts"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-pink-500/50 dark:hover:border-pink-500/50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">Research</h3>
              </Link>
              <Link
                href="/ai-study-prompts"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-pink-500/50 dark:hover:border-pink-500/50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">Study</h3>
              </Link>
              <Link
                href="/ai-free-art-prompts"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-pink-500/50 dark:hover:border-pink-500/50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">Art</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
