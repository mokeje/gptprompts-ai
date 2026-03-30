'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Copy, ChevronDown, ChevronUp } from 'lucide-react'

export default function MusiciansPromptsPage() {
  const [copied, setCopied] = useState<string | null>(null)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
    const handleCopy = async () => {
      await navigator.clipboard.writeText(prompt)
      setCopied(title)
      setTimeout(() => setCopied(null), 2000)
    }

    return (
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#F97316] transition-colors group">
        <h4 className="font-bold text-white mb-4">{title}</h4>
        <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
          {prompt}
        </pre>
        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium py-2 px-4 rounded transition-colors"
        >
          {copied === title ? (
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

  const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
    const isExpanded = expandedFAQ === index

    return (
      <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
        <button
          onClick={() => setExpandedFAQ(isExpanded ? null : index)}
          className="w-full flex items-center justify-between bg-[#1a1a1a] hover:bg-[#222] p-4 transition-colors"
        >
          <span className="font-semibold text-white text-left">{question}</span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-[#F97316] flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
          )}
        </button>
        {isExpanded && (
          <div className="bg-[#0a0a0a] p-4 border-t border-[#2a2a2a]">
            <p className="text-gray-300 leading-relaxed">{answer}</p>
          </div>
        )}
      </div>
    )
  }

  const sections = [
    {
      title: 'Composition & Songwriting',
      prompts: [
        {
          title: 'Melody Generator',
          prompt: 'Create a memorable melody in [key/genre]. The melody should be [length] bars, use [scale], and have [mood]. Provide the melody in both notation and description format.'
        },
        {
          title: 'Chord Progression Builder',
          prompt: 'Generate a chord progression in [key] for [genre/mood]. I want [number] chords that create [emotional quality]. Explain why each chord works and suggest variations.'
        },
        {
          title: 'Lyric Writing Assistant',
          prompt: 'Help me write lyrics about [topic/emotion] in [genre style]. The song should have [verse/chorus/bridge structure], use [rhyme scheme], and convey [main message]. Include chorus hook ideas.'
        },
        {
          title: 'Song Structure Designer',
          prompt: 'Design a song structure for [genre] that includes intro, verses, chorus, and bridge. Make it [tempo/energy level] and suggest what instruments should play during each section.'
        },
        {
          title: 'Hook & Chorus Creator',
          prompt: 'Generate 5 catchy, memorable hooks for a [genre] song about [topic]. Each hook should be [word count], singable, and have strong recall value.'
        },
        {
          title: 'Bridge Section Generator',
          prompt: 'Create a powerful bridge section that transitions from [verse emotion] to [chorus emotion]. Include melodic ideas, lyrical themes, and dynamic suggestions.'
        }
      ]
    },
    {
      title: 'Production & Arrangement',
      prompts: [
        {
          title: 'Arrangement Guide',
          prompt: 'Create an arrangement breakdown for [song title/genre]. Specify which instruments play in each section, dynamics, and instrumentation changes to keep the song engaging.'
        },
        {
          title: 'Sound Design Brief',
          prompt: 'Design unique sounds for a [genre] track. Describe synth settings, drum kit selections, bass textures, and effects that create [specific mood/aesthetic].'
        },
        {
          title: 'Mixing Checklist Creator',
          prompt: 'Generate a detailed mixing checklist for a [genre] song with [instruments/tracks]. Include EQ targets, compression settings, panning, effects, and automation ideas.'
        },
        {
          title: 'Drum Pattern Generator',
          prompt: 'Create [number] variations of a [tempo] BPM drum pattern in [genre]. Variations should range from minimal to busy, all designed for [song context].'
        },
        {
          title: 'Bass Line Creator',
          prompt: 'Write bass line ideas for a [genre] song with the chord progression [chords]. Suggest [number] variations from minimal to active, with commentary on feel.'
        },
        {
          title: 'Effects & Processing Guide',
          prompt: 'Recommend effects and processing chains for [instruments]. Suggest reverb, delay, saturation, compression ratios, and automation for [desired result].'
        }
      ]
    },
    {
      title: 'Performance & Technical Skills',
      prompts: [
        {
          title: 'Practice Routine Builder',
          prompt: 'Create a [duration] practice routine for improving [skill: scales/technique/speed/dynamics]. Include warm-ups, focused exercises, and application to real music.'
        },
        {
          title: 'Technique Exercise Designer',
          prompt: 'Generate finger exercises for [instrument] to develop [specific technique]. Each exercise should take [duration] and progressively increase in difficulty.'
        },
        {
          title: 'Scale & Arpeggio Guide',
          prompt: 'Create a learning guide for [scale type] on [instrument]. Include fingering patterns, practice speeds, and how to apply it to [genre/musical context].'
        },
        {
          title: 'Improvisation Framework',
          prompt: 'Design an improvisation structure for [genre] over a [chord progression]. Include target notes, phrasing ideas, rhythmic patterns, and dynamics to explore.'
        },
        {
          title: 'Ear Training Exercises',
          prompt: 'Create ear training exercises for recognizing [intervals/chords/rhythms]. Provide [number] examples with increasing difficulty and real music applications.'
        },
        {
          title: 'Performance Tips Generator',
          prompt: 'Give me [number] performance tips for playing [song/genre] live. Cover stage presence, technical confidence, connecting with audience, and handling pressure.'
        }
      ]
    },
    {
      title: 'Music Learning & Theory',
      prompts: [
        {
          title: 'Music Theory Explainer',
          prompt: 'Explain [music theory concept] in simple terms. Use [genre] examples, provide real-world applications, and suggest practice exercises.'
        },
        {
          title: 'Chord Substitution Guide',
          prompt: 'Show me creative chord substitutions for [chord progression]. Explain why each substitute works and how it changes the emotional quality.'
        },
        {
          title: 'Genre Analysis Template',
          prompt: 'Analyze [genre] by breaking down: typical chord progressions, instrumentation, production techniques, lyrical themes, and how to capture its essence in original work.'
        },
        {
          title: 'Music History Connector',
          prompt: 'Explain the history of [musical era/genre/technique] and show how it influences modern [genre]. Include influential artists and signature sounds.'
        },
        {
          title: 'Vocal Training Guide',
          prompt: 'Create a [duration] vocal training plan for improving [vocal skill: range/tone/control]. Include warm-ups, exercises, and songs to practice.'
        },
        {
          title: 'Music Listening Journal Prompt',
          prompt: 'Give me a structured framework for deeply analyzing [song/album]. What should I listen for in terms of arrangement, production, emotion, and songwriting?'
        }
      ]
    },
    {
      title: 'Collaboration & Music Business',
      prompts: [
        {
          title: 'Collaboration Brief Creator',
          prompt: 'Create a collaboration brief for working with [collaborator type]. Include musical direction, creative goals, timeline, and how to clearly communicate my vision.'
        },
        {
          title: 'Feedback Framework',
          prompt: 'Design a constructive feedback framework for giving notes to musicians and producers. Include how to critique without discouraging, and how to receive feedback.'
        },
        {
          title: 'Release Strategy Planner',
          prompt: 'Create a release strategy for my [song/EP/album] including: pre-release timeline, playlist pitching, social media rollout, and promotional tactics.'
        },
        {
          title: 'Artist Bio & Press Kit Generator',
          prompt: 'Help me write an artist bio, music description, and press kit summary that captures my [genre/style] and appeals to [target audience/playlist curators].'
        },
        {
          title: 'Collaboration Agreement Template',
          prompt: 'Outline key points for a collaboration/production agreement with a [bandmate/producer/engineer]. What should we clarify upfront?'
        },
        {
          title: 'Networking & Opportunity Guide',
          prompt: 'Give me actionable steps for networking in the [genre] music community. Where to find collaborators, how to pitch, and how to build meaningful relationships.'
        }
      ]
    }
  ]

  const faqs = [
    {
      question: 'How do I use these prompts to improve my songwriting?',
      answer: 'Use the composition prompts iteratively. Start with melody and chord progression generators to establish your song&apos;s foundation, then refine with lyric writing and structure designers. Experiment with variations to find what resonates.'
    },
    {
      question: 'Can AI prompts replace music lessons or a music teacher?',
      answer: 'AI prompts are excellent supplements to traditional learning—they provide instant feedback, unlimited variations, and creative inspiration. However, a qualified teacher offers personalized guidance, live feedback, and tailored learning paths. Use both together for best results.'
    },
    {
      question: 'How do I avoid my music sounding generic when using AI?',
      answer: 'Use AI prompts to establish a foundation, then layer your unique perspective, taste, and emotion. AI works best as a starting point—your job is to critique, refine, and inject personality. Set specific constraints and style preferences in your prompts.'
    },
    {
      question: 'What production software pairs well with these prompts?',
      answer: 'Any DAW (Ableton, Logic, FL Studio, Reaper) works well. Use prompts to plan arrangements before opening your DAW, or generate mixing/production ideas to try in real-time. The prompts are software-agnostic.'
    },
    {
      question: 'How do I credit AI when I use these prompts in my music?',
      answer: 'Currently, crediting AI in liner notes is optional but becoming standard practice. Consider: "Production assisted by AI tools" or listing specific AI tools used. Check your music platform&apos;s guidelines and be transparent with collaborators.'
    },
    {
      question: 'Can I use these prompts for music in different genres than I normally write?',
      answer: 'Absolutely. These prompts are highly flexible. Specify your desired genre, mood, and instrumentation, and the prompts will adapt. This is a great way to explore new genres and expand your musical palette.'
    },
    {
      question: 'How often should I practice with these prompts to see improvement?',
      answer: 'Consistency matters more than frequency. Aim for 3-5 focused sessions per week, each 30-60 minutes. Track your progress by revisiting earlier exercises, comparing your output over time, and measuring improvements in specific skills.'
    },
    {
      question: 'Do these prompts work for all instruments?',
      answer: 'Yes, but you need to specify your instrument. Prompts for scales, techniques, and fingerings should be tailored to your instrument (guitar, piano, drums, vocals, etc.) for maximum relevance.'
    },
    {
      question: 'Can I use AI-generated chord progressions and melodies commercially?',
      answer: 'Yes, you can use AI-generated material in your commercial music. However, ensure you&apos;re using it as a starting point and adding substantial original work. Always check your AI tool&apos;s terms of service for commercial use rights.'
    },
    {
      question: 'How do I know if my music needs arrangement improvements vs. composition improvements?',
      answer: 'If your core melody and chords feel strong but the song sounds flat, focus on arrangement. If the song feels uninspiring at its foundation, focus on composition. Use separate prompts for each—composition first, then arrangement.'
    }
  ]

  const relatedPages = [
    { href: '/ai-translation-prompts', label: 'Translation Prompts' },
    { href: '/ai-web-builder-prompts', label: 'Web Builder Prompts' },
    { href: '/ai-writing-assistant-prompts', label: 'Writing Assistant Prompts' },
    { href: '/ai-for-gaming-prompts', label: 'Gaming Prompts' },
    { href: '/ai-research-assistant-prompts', label: 'Research Assistant Prompts' },
    { href: '/ai-study-prompts', label: 'Study Prompts' },
    { href: '/ai-poem-generator-prompts', label: 'Poetry Generator Prompts' },
    { href: '/ai-free-art-prompts', label: 'Art Prompts' }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Musicians & Producers',
            description: '30+ ChatGPT prompts for music composition, production, performance, theory, and collaboration. Generate melodies, chord progressions, arrangements, and master musical skills.',
            datePublished: '2026-03-29',
            dateModified: '2026-03-29',
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

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">AI Prompts for Musicians & Producers</h1>
          <p className="text-xl text-gray-400 mb-8">
            30+ ChatGPT prompts to master music composition, production, performance, theory, and collaboration. Generate melodies, chord progressions, arrangements, and unlock your musical potential.
          </p>
          <div className="flex gap-4 flex-wrap">
            <div className="bg-[#1a1a1a] border border-[#F97316] rounded-lg px-6 py-3">
              <p className="text-sm text-gray-400">Composition</p>
              <p className="font-bold text-[#F97316]">6 Prompts</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#F97316] rounded-lg px-6 py-3">
              <p className="text-sm text-gray-400">Production</p>
              <p className="font-bold text-[#F97316]">6 Prompts</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#F97316] rounded-lg px-6 py-3">
              <p className="text-sm text-gray-400">Performance</p>
              <p className="font-bold text-[#F97316]">6 Prompts</p>
            </div>
          </div>
        </div>

        {sections.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#F97316]">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.prompts.map((prompt, promptIndex) => (
                <CopyCard key={promptIndex} title={prompt.title} prompt={prompt.prompt} />
              ))}
            </div>
          </div>
        ))}

        <div className="my-16 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </div>

        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Explore More Prompt Collections</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#F97316] text-gray-300 hover:text-[#F97316] px-4 py-3 rounded transition-colors text-center text-sm font-medium"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
