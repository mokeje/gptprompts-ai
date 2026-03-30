'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

function CopyCard({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-white/20 hover:bg-white/[0.07] cursor-pointer"
      onClick={() => {
        navigator.clipboard.writeText(prompt)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
    >
      <p className="pr-10 text-[15px] leading-relaxed text-gray-300">{prompt}</p>
      <div className="absolute right-4 top-4 text-gray-500 group-hover:text-white transition-colors">
        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
      </div>
    </div>
  )
}

export default function WritersPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const promptCategories = [
    {
      title: 'Content Creation & Blog Writing',
      prompts: [
        'Write a comprehensive blog post outline on [topic] that targets [audience] with an engaging hook, 5-7 main sections with subheadings, and a strong call-to-action. Include keyword suggestions for SEO.',
        'Create a listicle format article titled "[title]" with 10 actionable points, each with a 2-3 sentence explanation. Make it scannable with bold keywords and include a memorable intro and conclusion.',
        'Draft an evergreen content piece about [subject] that will remain relevant for 2+ years. Structure it with problem-solution-results format and include real-world examples.',
        'Write a personal essay about [experience] in a conversational tone that connects with readers emotionally. Include specific sensory details and a meaningful takeaway.',
        'Create a how-to guide for [task] with step-by-step instructions, common mistakes to avoid, and tips for success. Format for both beginners and intermediate users.',
        'Write an in-depth case study analyzing [project/product/person] that examines what worked, what didn\'t, and the lessons learned. Include data, quotes, and actionable insights for readers.'
      ]
    },
    {
      title: 'Storytelling & Narrative Structure',
      prompts: [
        'Develop a story outline with a compelling protagonist facing [conflict]. Structure it with clear act breaks, rising action, climax, and resolution. Include character motivation at each turning point.',
        'Write a short story opening (500 words) that hooks the reader immediately using [technique: vivid sensory details, dialogue, mystery, etc.] and establishes the setting and stakes.',
        'Create a narrative arc for a character\'s journey from [starting point] to [ending point]. Map out internal conflicts, external obstacles, and moments of growth or revelation.',
        'Write a dialogue-heavy scene between two characters with conflicting goals. Use subtext, pauses, and actions to reveal character and advance the plot.',
        'Develop a plot twist for a story about [premise]. Ensure it\'s surprising but feels inevitable in hindsight, and doesn\'t contradict established facts.',
        'Create a flashback scene that reveals crucial backstory about [character/conflict]. Write it in a way that integrates seamlessly into the main narrative.'
      ]
    },
    {
      title: 'Editing, Revision & Refinement',
      prompts: [
        'Review this passage for clarity and flow: [paste text]. Identify unclear sentences, redundancies, and areas where more showing and less telling would strengthen the writing.',
        'Help me eliminate passive voice and weak verbs from this paragraph: [paste text]. Provide stronger alternatives and explain how they improve readability.',
        'Analyze the pacing in this scene: [paste text]. Does it move too fast, too slow, or is it well-balanced? Suggest specific revisions to improve it.',
        'Identify clichés and overused phrases in this excerpt: [paste text]. Suggest fresh, original alternatives that maintain the intended tone.',
        'Review the dialogue in this section: [paste text]. Does each character have a distinct voice? Are there info-dumps? How can it feel more natural?',
        'Help me tighten this piece by cutting [percentage]% without losing essential information: [paste text]. Show me where to trim and what to preserve.'
      ]
    },
    {
      title: 'Character Development & Dialogue',
      prompts: [
        'Create a detailed character profile for [character type] including physical appearance, background, motivations, fears, strengths, weaknesses, and how they speak differently in formal vs. casual settings.',
        'Write a character voice exercise where [character] responds to these scenarios: [list 3-4 situations]. Make sure their responses reveal personality, values, and speech patterns.',
        'Develop a complex character with a clear contradiction: [describe the contradiction]. Show how this internal conflict drives their decisions and growth.',
        'Write natural-sounding dialogue between two characters with conflicting communication styles. Show personality through word choice, speech patterns, and what they choose to say or not say.',
        'Create a character backstory for [character] that explains their current behavior, beliefs, and relationships. Include a pivotal moment that shaped who they are.',
        'Write a monologue from [character]\'s perspective revealing their inner thoughts about [situation]. Make it authentic to their voice and emotional state.'
      ]
    },
    {
      title: 'Writing for Different Formats & Audiences',
      prompts: [
        'Adapt this story concept for three different formats: a short story, a screenplay scene, and a tweet thread. Show how each format changes the approach and pacing.',
        'Write the same message about [topic] for three different audiences: [audience 1], [audience 2], and [audience 3]. Adjust tone, vocabulary, and examples for each.',
        'Create a sales copy version of this product description: [paste]. Make it benefit-focused, persuasive, and include a clear call-to-action.',
        'Write an email newsletter teaser about [topic] that entices readers to click through to the full article. Make it concise, compelling, and relevant.',
        'Convert this research paper abstract into accessible language for a general audience while maintaining accuracy and key information.',
        'Write a children\'s book page about [concept] that teaches without being preachy. Use age-appropriate language, rhythm, and illustrations suggestions.'
      ]
    },
    {
      title: 'Publishing, Promotion & Author Platform',
      prompts: [
        'Create a compelling author bio (150 words) that establishes credibility, shows personality, and includes a clear call-to-action for [platform].',
        'Write a book blurb for [book title/description] that hooks potential readers in 100-150 words, creates intrigue, and includes a subtle call-to-action.',
        'Develop a content calendar for promoting a new book across [platforms]. Include post ideas, posting frequency, key messages, and timing around launch.',
        'Write 5 different social media posts promoting the same piece of content, each optimized for a different platform: LinkedIn, Twitter, Instagram, TikTok, and email.',
        'Create an email sequence for new newsletter subscribers: [describe goal]. Write subject lines and body copy for 3-4 emails that deliver value and build relationship.',
        'Develop a speaking topic pitch for [conference/platform] that positions your expertise in [area]. Include a compelling title, description, and why it\'s valuable to that audience.'
      ]
    }
  ]

  const faqs = [
    {
      question: 'How do I find my unique voice as a writer?',
      answer: 'Your unique voice emerges when you write regularly, read widely in and outside your genre, and give yourself permission to write badly at first. Pay attention to how you naturally speak in conversation, the jokes you make, your perspective on life—these are clues to your voice. Read your work aloud; if it doesn\'t sound like you, revise. Over time, consistent writing practice reveals patterns that become your distinctive style.'
    },
    {
      question: 'What should I prioritize: perfect grammar or natural flow?',
      answer: 'Prioritize natural flow during drafting; perfect grammar during editing. Many great writers break grammar rules intentionally for rhythm, voice, or impact. The key is that your rule-breaking should be conscious and purposeful, not accidental. First draft: write naturally. Second draft: fix obvious grammar errors. Final draft: decide which rules to bend for effect.'
    },
    {
      question: 'How do I overcome writer\'s block?',
      answer: 'Writer\'s block often stems from perfectionism, unclear direction, or emotional resistance. Try: (1) Write badly on purpose—remove the pressure to be good. (2) Change your environment or write at a different time. (3) Free-write without planning—let ideas flow without judgment. (4) Identify what you\'re resisting (fear of failure, unclear purpose) and address the root issue. Sometimes the answer isn\'t to push harder but to step back, read something inspiring, or move to a different section.'
    },
    {
      question: 'Should I write every day to improve?',
      answer: 'Daily writing helps build momentum and consistency, but quality matters more than quantity. Even 20 minutes of focused writing beats sporadic 2-hour sessions. That said, some writers work best with longer, less frequent sessions. What matters is regularity and intention—whether that\'s daily, three times a week, or whatever rhythm allows you to maintain momentum and focus over weeks and months.'
    },
    {
      question: 'How do I know when a piece is ready to publish?',
      answer: 'A piece is ready when: (1) You\'ve revised at least twice and the changes are becoming minor. (2) You can\'t find obvious errors or unclear passages when reading it fresh. (3) You\'ve had feedback from trusted readers and addressed substantial concerns. (4) You\'re not changing it out of anxiety, but only out of genuine improvement. If you\'ve been tinkering for weeks, you\'re probably done—perfectionism is the enemy of publishing.'
    },
    {
      question: 'What\'s the difference between editing for content and line editing?',
      answer: 'Content editing (developmental) focuses on big-picture issues: structure, pacing, character arc, whether scenes serve the story. Line editing focuses on sentence-level clarity: word choice, rhythm, redundancy, tone consistency. Do content editing first—it\'s pointless to polish sentences that might be deleted. After structure is solid, line edit for precision and elegance.'
    },
    {
      question: 'How do I write authentic dialogue?',
      answer: 'Authentic dialogue sounds like real speech but is more refined. Record how people actually talk: interruptions, filler words, incomplete sentences. Then refine it: remove most filler words, keep some authentic hesitations, vary sentence length and structure. Each character should have a distinct speech pattern reflecting their background, education, personality, and emotional state. Read dialogue aloud—if it sounds stiff, revise.'
    },
    {
      question: 'Should I write an outline before starting?',
      answer: 'It depends on your process. Some writers need a detailed outline; others find it limiting. A middle approach: outline the major turning points and ending, then discover how to get there. This gives direction without killing spontaneity. For shorter pieces, a bullet-point outline usually suffices. For novels, many writers find at least a loose structure prevents getting stuck midway.'
    },
    {
      question: 'How do I make my writing more engaging?',
      answer: 'Engagement comes from: (1) Strong opening line that creates curiosity or stakes. (2) Specific, vivid details instead of generic descriptions. (3) Varying sentence length and structure—mix short punchy sentences with longer ones. (4) Active voice and strong verbs. (5) Showing emotions through action rather than telling. (6) Pacing that matches the content—faster for action, slower for reflection. (7) A clear sense of voice that feels human.'
    },
    {
      question: 'What\'s the best way to handle criticism of my writing?',
      answer: 'Separate emotional reaction from useful feedback. When you receive criticism: (1) Listen without defending immediately. (2) Ask clarifying questions. (3) Thank the person and sit with it for a day before responding. (4) Assess: is this feedback pointing to a real issue, or is it just a different preference? Not all feedback is valuable. Seek patterns—if multiple readers mention the same problem, it\'s likely real. Trust your instincts, but stay open to growth.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/5 px-6 py-20 sm:px-12 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D946EF]/5 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-[#D946EF]/20 bg-[#D946EF]/5">
            <span className="text-sm font-medium text-[#D946EF]">Creative Writing Tools</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            ChatGPT Prompts for Writers & Content Creators
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Master your craft with 36 expert-crafted ChatGPT prompts. Write better stories, edit smarter, develop compelling characters, and build your author platform with AI-powered guidance.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-lg bg-[#D946EF] text-white font-semibold hover:bg-[#D946EF]/90 transition-colors">
              Copy All Prompts
            </button>
            <button className="px-8 py-3 rounded-lg border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Prompt Categories */}
      <div className="px-6 py-16 sm:px-12">
        <div className="max-w-4xl">
          {promptCategories.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">{category.title}</h2>
              <div className="grid gap-4">
                {category.prompts.map((prompt, pIdx) => (
                  <CopyCard key={pIdx} prompt={prompt} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 py-16 sm:px-12 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-white">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <span className={`transform transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02] text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Pages Section */}
      <div className="px-6 py-16 sm:px-12 border-t border-white/5">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">Explore More Prompt Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a href="/chatgpt-prompts-google-sheets" className="group p-6 rounded-lg border border-white/10 hover:border-[#0F9D58]/50 hover:bg-[#0F9D58]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#0F9D58]">ChatGPT Prompts for Google Sheets</h3>
              <p className="text-sm text-gray-400">Formulas, automation, and analytics</p>
            </a>
            <a href="/ai-prompts-for-startups" className="group p-6 rounded-lg border border-white/10 hover:border-[#FF6B35]/50 hover:bg-[#FF6B35]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FF6B35]">AI Prompts for Startups</h3>
              <p className="text-sm text-gray-400">Founder strategies and growth hacks</p>
            </a>
            <a href="/ai-prompts-for-researchers" className="group p-6 rounded-lg border border-white/10 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#7C3AED]">AI Prompts for Researchers</h3>
              <p className="text-sm text-gray-400">Academic research and literature reviews</p>
            </a>
            <a href="/ai-prompts-linkedin" className="group p-6 rounded-lg border border-white/10 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#0A66C2]">AI Prompts for LinkedIn</h3>
              <p className="text-sm text-gray-400">Content creation and professional growth</p>
            </a>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ChatGPT Prompts for Writers & Content Creators',
            description: 'Master your craft with 36 expert-crafted ChatGPT prompts for writing, storytelling, editing, character development, and publishing.',
            image: 'https://gptprompts.ai/og-image.png',
            datePublished: new Date().toISOString(),
            author: {
              '@type': 'Organization',
              name: 'GPT Prompts'
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />
    </div>
  )
}
