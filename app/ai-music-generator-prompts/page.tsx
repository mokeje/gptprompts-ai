'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp, Music, Radio, Headphones, Zap, Users } from 'lucide-react';

const AIMusicGeneratorPromptsPage = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const handleCopyPrompt = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const CopyCard = ({ id, prompt }: { id: string; prompt: string }) => (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-pink-500/50 transition-colors">
      <p className="text-gray-200 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={() => handleCopyPrompt(id, prompt)}
        className="inline-flex items-center gap-2 px-3 py-2 bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 rounded text-sm transition-colors"
      >
        {copiedId === id ? (
          <>
            <Check size={16} />
            Copied
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy
          </>
        )}
      </button>
    </div>
  );

  const FAQItem = ({ id, question, answer }: { id: number; question: string; answer: string }) => (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpenFaqId(openFaqId === id ? null : id)}
        className="w-full px-4 py-4 flex items-center justify-between bg-[#1a1a1a] hover:bg-[#242424] transition-colors"
      >
        <h3 className="text-sm font-semibold text-gray-100">{question}</h3>
        {openFaqId === id ? (
          <ChevronUp size={18} className="text-pink-400 flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      {openFaqId === id && (
        <div className="px-4 py-4 bg-[#0a0a0a] border-t border-[#2a2a2a] text-sm text-gray-300 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );

  const sections = [
    {
      title: 'Original Composition & Songwriting',
      icon: Music,
      prompts: [
        'Create an upbeat pop song about overcoming personal challenges and finding inner strength, with catchy chorus hooks, verses that tell a narrative arc, bridge that shifts perspective, modern production style with synth elements, and lyrics emphasizing resilience and hope',
        'Write a melancholic indie-folk ballad about lost love and nostalgia featuring acoustic guitar, subtle string arrangements, introspective lyrics that paint vivid memories, fingerpicking patterns, sparse instrumentation that builds gradually, and an emotional climax in the final chorus',
        'Compose an energetic hip-hop track with strong beats, clever wordplay, multi-syllabic rhyme schemes, motivational themes about hustle and ambition, dynamic flow patterns with internal rhymes, 808 beats, and authentic street narrative elements',
        'Create a sultry R&B love song with smooth vocals, sophisticated chord progressions, sensual lyrics, groovy bass lines, layered harmonies, modern production with vintage soul influences, and an extended bridge with ad-libs',
        'Write an epic rock anthem featuring powerful guitar riffs, soaring vocals, anthemic chorus that invites crowd participation, dynamic verse-chorus-bridge structure, building instrumental sections, and themes of triumph or revolution',
        'Compose an atmospheric electronic ambient track with evolving textures, ethereal synth pads, minimal melodic elements, spatial effects and reverb, hypnotic rhythmic patterns, meditative qualities, and a total duration of 5-8 minutes'
      ]
    },
    {
      title: 'Genre-Specific Production & Arrangement',
      icon: Radio,
      prompts: [
        'Produce a jazz fusion instrumental featuring complex chord changes, improvisation sections with solos, syncopated rhythms, layered instrumentation with piano, bass, and saxophone, sophisticated harmonic progressions, and dynamic tempo variations',
        'Create a reggae track with authentic riddim patterns, lyrical content about social consciousness and unity, emphasis on the offbeat guitar strumming, dub-influenced production techniques, warm bassline, and rhythmic vocal delivery',
        'Develop a classical orchestral composition featuring string arrangements, woodwind sections, dramatic dynamic shifts, movement structure (Allegro-Andante-Presto), thematic development and variation, and an emotional narrative arc',
        'Produce a country-pop crossover song with storytelling lyrics about small-town life, acoustic guitar foundation, steel guitar accents, contemporary pop production polish, sing-along chorus, and authentic country vocal delivery',
        'Create a metal track with distorted guitar riffs, aggressive drum patterns, powerful vocals with varying intensity, heavy bass lines, dynamic song structure with breakdown sections, solos, and high-energy instrumental passages',
        'Compose a lo-fi hip-hop beat with nostalgic vinyl qualities, vintage samples, laid-back tempo around 85-95 BPM, jazzy chord progressions, relaxed vibes perfect for studying or background listening, and subtle atmospheric textures'
      ]
    },
    {
      title: 'Vocal Production & Lyrics',
      icon: Headphones,
      prompts: [
        'Develop vocal arrangement strategies for a song featuring lead vocals, harmonies, backing vocals, ad-libs, layered vocal textures, doubling and octave effects, pitch arrangement for emotional impact, and vocal production techniques for cohesion',
        'Write lyrics for a conscious hip-hop track addressing social issues like inequality and justice while maintaining poetic language, metaphorical depth, relatable storytelling, authentic voice, and messages that inspire action',
        'Create a multilingual song incorporating English, Spanish, and Portuguese lyrics that blend seamlessly, cultural fusion elements in production, universal themes that transcend language, and natural flow across different languages',
        'Develop a concept album narrative spanning 10-12 songs that tells a complete story arc, character development across tracks, thematic consistency, emotional journey progression, interconnected melodies and motifs, and varying musical styles',
        'Produce a collaboration featuring three distinct vocal styles in different sections, complementary vocal ranges and timbres, strategic placement and layering, trading verses that build tension, harmonized choruses for unity, and seamless transitions',
        'Write a humorous novelty song with witty lyrics, clever wordplay and puns, unexpected rhyme schemes, comedic storytelling, exaggerated characters or situations, production that supports the comedic timing, and infectious hooks'
      ]
    },
    {
      title: 'Music Technology & Sound Design',
      icon: Zap,
      prompts: [
        'Design a futuristic synth sound palette featuring evolving digital textures, granular synthesis techniques, modulation effects, alien and otherworldly qualities, layered synth voices creating depth, and glitchy elements for contemporary appeal',
        'Create a cinematic orchestral soundtrack cue lasting 2-3 minutes that builds tension, uses leitmotifs for emotional resonance, dynamic instrumentation that responds to narrative, strategic silence and space, and a clear dramatic arc',
        'Produce a complete drum sound design package including kick drum with multiple layers for impact and clarity, snare with crisp attack and sustain, hi-hat patterns with swing and groove, percussion textures, and cohesive drum mixing',
        'Develop a bass production guide covering fundamental frequencies for power, upper harmonic richness for definition, dynamic processing for punch, spatial effects for width, sidechain techniques for energy, and compatibility with other instruments',
        'Create a music video concept with specific scenes, camera movements, color grading, narrative elements, mood establishment, performance footage, visual metaphors aligned with lyrics, and production techniques that enhance the song',
        'Design a podcast intro and background music package including branded sonic identity, 30-second intro bumper, background ambience for segments, transition effects, podcast outro music, and cohesive audio branding across all elements'
      ]
    },
    {
      title: 'Collaboration & Remix Direction',
      icon: Users,
      prompts: [
        'Create a remix brief for an uptempo dance version of a melancholic ballad, specifying increased BPM from 80 to 125, electronic production elements, drops and builds, vocal chopping and re-arrangement, extended instrumental sections, and dancefloor energy',
        'Develop collaboration guidelines for a cross-genre partnership between a classical composer and electronic producer, suggesting fusion points, instrumentation blend, production approach, creative compromise areas, and expected sonic outcome',
        'Write a remix concept transforming a rap song into an orchestral version, detailing string arrangement substitutions, percussion translation to acoustic drums, vocal delivery adjustments, emotional tone shifts, and maintaining original messaging',
        'Create a mashup concept combining three songs from different genres and eras, identifying compatible elements, transition strategies, harmonic alignment considerations, timing adjustments, and creating cohesive flow between original tracks',
        'Develop a feature artist brief for a collaboration song specifying vocal role, desired artistic style, target audience, content themes, production direction, creative freedom boundaries, and technical recording requirements',
        'Design an acoustic unplugged arrangement for an electronic dance track, translating synthetic sounds to acoustic instruments, maintaining energy with percussion and dynamics, restructuring for smaller ensemble, and capturing original essence in acoustic format'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What is the best way to use these music prompts with AI music generators?',
      answer: 'Start by copying a prompt directly and pasting it into your AI music generator. If the output needs refinement, try adjusting specific elements: request different tempos, instrumentation variations, mood adjustments, or structural changes. Most AI generators improve with detailed, specific instructions. Experiment with variations of successful prompts to discover what works best for your style.'
    },
    {
      question: 'How can I adapt these prompts for my specific musical style or genre?',
      answer: 'Read through each prompt and identify the core elements that appeal to you. Modify genre references, instrumentation, and mood descriptors to match your style. Add specific artist influences you admire, particular production techniques you want to experiment with, or unique thematic elements. The prompts are templates that should be personalized to your creative vision.'
    },
    {
      question: 'Can I use AI-generated music for commercial purposes?',
      answer: 'This depends entirely on the AI music generator\'s terms of service. Some platforms allow commercial use with a paid license, while others restrict it. Always check the specific generator\'s licensing terms before using generated music for commercial projects, monetized content, or professional releases. Some platforms require attribution, others may have different restrictions.'
    },
    {
      question: 'How do I ensure generated music is original and not plagiarizing existing songs?',
      answer: 'While AI generators aim to create original compositions, it\'s wise to compare generated output against existing songs using services like Shazam or checking melody databases. If you\'re concerned, request significant variations from the AI generator or blend multiple generated outputs into something uniquely yours. Always add your own creative elements to ensure originality.'
    },
    {
      question: 'What production techniques should I use to polish AI-generated music?',
      answer: 'Import generated audio into a digital audio workstation (DAW) and apply professional mixing: EQ to shape frequencies, compression for dynamic control, reverb and delay for space, volume balancing, automation for movement, and mastering to optimize loudness and clarity. Adding live instruments, additional vocal layers, or re-arranging elements also enhances polished results.'
    },
    {
      question: 'How can I give better prompts to get higher quality music generation results?',
      answer: 'Be specific about tempo, key, instrumentation, mood, and style. Reference existing songs or artists you admire. Include technical details like BPM, time signature, or production style. Describe the emotional arc and dynamics. Specify intended use (background music, dance track, cinematic piece). Test variations and refine based on results. Detailed prompts consistently generate better output than generic ones.'
    },
    {
      question: 'Can I layer multiple AI-generated tracks to create a full production?',
      answer: 'Yes, this is a powerful technique. Generate separate elements like drums, bass, melody, and harmony as individual tracks or prompts. Import them into a DAW and adjust timing, levels, and effects to blend them cohesively. This approach gives you more creative control than single-track generation and allows layering of different AI generators for variety and texture.'
    },
    {
      question: 'What should I do if the AI generator produces something partially useful but not quite right?',
      answer: 'Extract the useful elements and request a new generation with clearer specifications addressing what didn\'t work. You might also export the usable portion and layer it with new generations. Describe specifically what you liked and what to improve in your next prompt. Iteration is key to finding the perfect output.'
    },
    {
      question: 'How do I handle copyright and licensing for AI-generated music in my projects?',
      answer: 'Understand your AI platform\'s licensing: some grant full ownership, others retain rights or require attribution. For commercial use, purchase proper licenses if required by the platform. When using AI music in videos, podcasts, or publications, follow platform guidelines for attribution. Keep documentation of what platform generated the music and when. Review terms regularly as AI licensing continues to evolve.'
    },
    {
      question: 'What are common mistakes people make when using AI music generators?',
      answer: 'Common mistakes include: using overly vague prompts, expecting perfect output on first try, not adjusting generated music in post-production, ignoring licensing restrictions, using identical prompts repeatedly without variation, not layering or combining generations for depth, and treating AI output as finished rather than a starting point. Treat AI generation as the beginning of your creative process, not the end.'
    }
  ];

  const relatedPages = [
    { title: 'AI Chatbot Prompts', href: '/ai-chatbot-prompts' },
    { title: 'AI Productivity Prompts', href: '/ai-productivity-prompts' },
    { title: 'AI Search Engine Prompts', href: '/ai-search-engine-prompts' },
    { title: 'AI Text Generator Prompts', href: '/ai-text-generator-prompts' },
    { title: 'AI Story Generator Prompts', href: '/ai-story-generator-prompts' },
    { title: 'Bing AI Image Generator Prompts', href: '/bing-ai-image-generator-prompts' },
    { title: 'AI Prompts for Education', href: '/ai-prompts-for-education' },
    { title: 'Perchance AI Prompts', href: '/perchance-ai-prompts' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Music Generator Prompts',
            description: 'A comprehensive collection of detailed AI prompts designed to help musicians and producers create original compositions, arrangements, and productions across all genres.',
            datePublished: '2026-03-29',
            dateModified: '2026-03-29'
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
          <div className="flex items-center gap-3 mb-4">
            <Music size={32} className="text-pink-400" />
            <h1 className="text-4xl font-bold text-gray-100">AI Music Generator Prompts</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Unlock your creative potential with AI music generation. Our carefully crafted prompts help you compose original songs, design sounds, arrange productions, and explore genres with precision and artistic control.
          </p>
        </div>

        {sections.map((section, sectionIdx) => {
          const Icon = section.icon;
          return (
            <div key={sectionIdx} className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Icon size={24} className="text-pink-400" />
                <h2 className="text-2xl font-semibold text-gray-100">{section.title}</h2>
              </div>
              <div className="grid gap-4">
                {section.prompts.map((prompt, promptIdx) => (
                  <CopyCard
                    key={`${sectionIdx}-${promptIdx}`}
                    id={`prompt-${sectionIdx}-${promptIdx}`}
                    prompt={prompt}
                  />
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} id={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {relatedPages.map((page, idx) => (
              <Link
                key={idx}
                href={page.href}
                className="block px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-pink-500/50 hover:bg-[#1a1a1a] transition-colors text-pink-400"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMusicGeneratorPromptsPage;
