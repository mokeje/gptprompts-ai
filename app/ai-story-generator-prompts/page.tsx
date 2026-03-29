'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp, BookOpen, Sparkles, Users, Zap, Lightbulb } from 'lucide-react';

const AIStoryGeneratorPage = () => {
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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-indigo-500/50 transition-colors">
      <p className="text-gray-200 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={() => handleCopyPrompt(id, prompt)}
        className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded text-sm transition-colors"
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
          <ChevronUp size={18} className="text-indigo-400 flex-shrink-0" />
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
      title: 'Fantasy & Magical Worlds',
      icon: Sparkles,
      prompts: [
        'Write a 2000-word epic fantasy story about a young warrior who discovers they are the last surviving member of an ancient magical bloodline, set in a richly detailed world with multiple kingdoms, political intrigue, and a looming threat that only their hidden powers can defeat. Include detailed world-building with unique magic systems, compelling supporting characters, and a narrative arc that builds to a climactic confrontation.',
        'Create a dark fantasy tale spanning 1500 words following a morally grey anti-hero attempting to prevent the resurrection of an ancient evil that they accidentally awakened. Include internal conflict, complex motivations, detailed descriptions of magical artifacts, and a twist ending that challenges reader expectations about good and evil.',
        'Write a whimsical magical academy story set in a hidden world where students learn to master elemental magic. Develop colorful characters with distinct personalities, detailed classroom scenes and magical lessons, competitive magical trials, friendships and rivalries, and a subplot involving mysterious magical corruption threatening the academy.',
        'Compose a 1800-word tale of a reluctant mage bound by an ancient curse who must journey through enchanted forests, treacherous mountains, and magical cities to break the curse before it consumes them. Include rich sensory descriptions of magical locations, encounters with magical creatures and beings, and gradual character growth and realization.',
        'Create a story about a woman who discovers she is secretly a dragon in human form, living in a modern city unaware of her heritage and powers. Write internal awakening moments as she discovers her true nature, conflicts between human life and dragon instincts, connections to other hidden dragons, and exploration of identity and belonging.',
        'Write an intricate tale of interdimensional travelers visiting parallel magical worlds where different versions of themselves exist, each with alternate magical abilities and life choices. Explore philosophical themes about choice and destiny, feature richly imagined parallel worlds with unique magic systems, and create emotional moments of connection between alternate selves.'
      ]
    },
    {
      title: 'Science Fiction & Future Worlds',
      icon: Zap,
      prompts: [
        'Write a 2000-word science fiction story set 200 years in the future where Earth is governed by AI systems, featuring a protagonist discovering evidence that their reality is simulated. Include detailed near-future world-building, exploration of consciousness and reality, relationships with both humans and AI characters, and philosophical questions about the nature of existence.',
        'Create a tale about the first human to make contact with a sentient alien civilization, navigating the challenges of communication, cultural misunderstanding, and potential conflict between two species. Develop realistic dialogue showing gradual understanding, alien perspectives and motivations, political complications on Earth, and a resolution that expands human consciousness.',
        'Write a cyberpunk noir story set in a mega-city where a hacker discovers a conspiracy embedded in the global AI network that controls society. Include gritty urban descriptions, detailed hacking sequences and technical plot points, morally complex supporting characters, corporate intrigue, and a climax involving choices about truth versus comfortable lies.',
        'Compose a tale about a colony ship heading to a distant habitable planet where the generation that started the journey has died and current colonists have never known Earth. Explore identity and purpose, conflict between those who revere Earth and those who embrace their new world, technological challenges with failing ship systems, and discovery that changes their understanding of their mission.',
        'Create a story involving time travelers from the future attempting to prevent a catastrophic event in the past, discovering that changing history has unintended consequences that reshape reality. Include time travel paradoxes and logic, multiple timelines and realities, moral dilemmas about changing history, and complex explanations of causality.',
        'Write a tale of humanity learning that an asteroid impact will destroy Earth in ten years, focusing on how different people process this knowledge and choose to spend their remaining time. Explore diverse perspectives from different social classes, intimate character relationships deepening under existential threat, societal changes in response to impending doom, and finding meaning in limited time.'
      ]
    },
    {
      title: 'Mystery & Thriller',
      icon: BookOpen,
      prompts: [
        'Write a 2000-word mystery story where a detective must solve a decades-old cold case while uncovering a web of family secrets, corruption, and concealed identities that implicates powerful people. Include logical puzzle elements with fair clues for readers, complex character backstories that gradually emerge, atmospheric descriptions of investigation locations, and a satisfying resolution with unexpected twists.',
        'Create a psychological thriller about a person who discovers they have lost an entire year of memories with no explanation, and as they search for answers they realize people close to them may be hiding something sinister. Include unreliable narration where readers question what is real, tense interpersonal dynamics, gradually unfolding reveals about the missing time, and an ending that reframes earlier events.',
        'Write a heist-style story where a team must pull off an impossible theft while outwitting both competitors and authorities, with each character possessing unique skills and secrets. Develop detailed heist planning and execution sequences, complex character relationships and hidden agendas within the team, high stakes and mounting tension, and a clever twist involving the true objective of the heist.',
        'Compose a tale of a missing person investigation that leads the protagonist into a hidden society operating beneath their city, discovering that nothing about their previous understanding of the world is true. Include atmospheric descriptions of hidden locations, gradual revelations about a secret world, personal stakes that deepen the mystery, and a climax involving difficult choices about knowledge and truth.',
        'Create a murder mystery set during a single night in an isolated mansion where ten strangers are snowed in and one dies under impossible circumstances. Include detailed characterizations of each suspect, complex motivations and secrets, logical puzzle elements allowing readers to piece together clues, unreliable perspectives, and an ending with both the killer revealed and larger truth about why they were all gathered.',
        'Write a conspiracy thriller where a ordinary person stumbles upon evidence of a vast hidden network and must stay alive while uncovering the truth and deciding whether to expose it. Include escalating danger and narrow escapes, complex conspiracy with surprising scope and connections, an investigation that becomes increasingly personal, and a resolution about responsibility and the cost of truth.'
      ]
    },
    {
      title: 'Character-Driven & Literary Fiction',
      icon: Users,
      prompts: [
        'Write a 1800-word character study following a woman returning to her small hometown after 20 years to discover how her absence and return affects the lives of people who remember her, exploring themes of identity, regret, and second chances. Develop intricate characterizations of multiple people whose lives intersected with hers, show how memory and perception differ across characters, include emotional moments of recognition and revelation, and create a nuanced resolution without easy answers.',
        'Create a story about two estranged siblings reconnecting at a family funeral and being forced to spend a week together, uncovering the misunderstandings and hurts that divided them while discovering who they have become as adults. Include rich internal monologues showing how each sibling remembers shared history differently, tense and tender moments of connection, exploration of family patterns and inherited trauma, and gradual understanding and healing.',
        'Write a tale of an older person reflecting on pivotal decisions in their life, showing through interconnected scenes how small choices accumulated into the life they have lived, exploring regret, acceptance, and unexpected grace. Include vivid scenes from different life periods, internal reflection on why they made particular choices, recognition of roads not taken, and a poignant resolution about meaning and legacy.',
        'Compose a story exploring the friendship between two very different people whose connection deepens through shared vulnerability, including moments of profound understanding, conflicts rooted in their differences, and growth that comes from truly knowing another person. Develop authentic dialogue that reveals character and builds intimacy, show how friendship becomes a mirror for self-discovery, include both humor and emotional depth, and create a resolution that honors the complexity of human connection.',
        'Create a narrative about someone experiencing a life transition (empty nest, career change, loss, aging) and their journey toward understanding that their worth is not tied to external circumstances. Include realistic portrayal of grief or loss, moments of depression or searching, connections with unexpected people, gradual shifts in perspective, and a meaningful resolution about internal versus external definitions of identity.',
        'Write a story told through interconnected perspectives where each character reveals a different facet of a shared event, showing how individual experience creates different truths, and exploring themes of empathy and understanding. Include distinct narrative voices for each perspective, scenes that are retold from different viewpoints with new significance, gradual revelation of complete picture, and a resolution that acknowledges multiple truths can coexist.'
      ]
    },
    {
      title: 'Genre Blends & Experimental Stories',
      icon: Lightbulb,
      prompts: [
        'Write a paranormal romance where a living person falls in love with a ghost trapped between worlds, exploring themes of love transcending death, acceptance, and letting go. Include atmospheric haunted settings with detailed sensory descriptions, emotional vulnerability and intimacy between lovers separated by existence itself, exploration of why the ghost remains bound to the world, and a bittersweet resolution about sacrifice and love.',
        'Create a historical fantasy set during a real historical period where magic secretly shaped known events, featuring a protagonist discovering the hidden magical history behind documented occurrences. Include accurate historical details woven with magical elements, real historical figures as characters with secret magical involvement, alternate explanations for historical mysteries rooted in magic, and a personal story connected to larger historical events.',
        'Write a dystopian coming-of-age story where a teenager grows into consciousness within a controlled society, gradually understanding the truth about their world and choosing between safety and freedom. Include the protagonist's emotional journey from innocent acceptance to questioning, depictions of how control is maintained through subtle means, mentorship or guidance from those already aware, and a climactic moment where the protagonist must make an irreversible choice.',
        'Compose a story blending magical realism with contemporary life where unexplainable magical events occur in the modern world without formal acknowledgment, and the protagonist must navigate a world where nobody else seems to notice the magic. Include ordinary settings and routines disrupted by magical occurrences, isolation that comes from witnessing what others deny, gradual discovery of others who perceive the magic, and a unique perspective on coexistence of two worlds.',
        'Create a reverse-chronological story told backwards from climax to origin, revealing how a seemingly simple situation developed through accumulated small moments and decisions. Include the emotional impact of moving backward through time, gradual revelation of causality running opposite to normal understanding, repeated scenes shown from different emotional contexts, and a final scene that reframes everything that came before.',
        'Write a story exploring the subjective experience of time, where different sections are experienced at different temporal speeds, jumps, or loops, challenging linear narrative while maintaining emotional coherence. Include sections where time moves quickly through major events, sections dwelling on single moments in detail, repetition that reveals new meaning, temporal disorientation that mirrors the protagonist's experience, and a resolution that validates the non-linear journey.'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How can I use these prompts to develop my own creative writing?',
      answer: 'Use these prompts as starting points rather than rigid templates. Read a prompt fully, then set it aside and write from your own inspired direction. Consider the core elements (setting, character challenge, thematic question) and develop them in your unique voice and style. Combine elements from multiple prompts to create something entirely new. Use them to practice specific techniques like world-building, character development, or pacing.'
    },
    {
      question: 'How do I adapt these prompts for different story lengths?',
      answer: 'The prompts are designed for short stories (1500-2000 words). For longer works, expand the scope: add subplots, develop supporting characters more fully, explore themes more deeply, add multiple complications before resolution. For flash fiction (under 1000 words), narrow focus to a single moment or decision, remove subplots, concentrate on emotional core. For novels, use a prompt as the foundation and build entire character arcs, multiple intersecting plot lines, and complex world-building around it.'
    },
    {
      question: 'What should I do if I get stuck while writing a story?',
      answer: 'Try writing the scene from a different character\'s perspective, jump to a different part of the story, or write what happens immediately after the current scene. Sometimes stepping away and reading your draft fresh helps identify what is missing. Consider what your protagonist wants most in that moment and write toward satisfying or thwarting that desire. If structural issues emerge, outline the remaining story beats before continuing.'
    },
    {
      question: 'How do I ensure my story has a satisfying ending?',
      answer: 'Your ending should resolve the central conflict or question posed by the story while revealing something about the protagonist or world that was not apparent at the start. Avoid endings that feel unearned or disconnected from the story. Plant details and hints throughout that make the ending feel inevitable in retrospect. Consider what emotional note you want readers to experience and structure your final scenes to deliver that. Test your ending by asking: does this answer the story\'s central question?'
    },
    {
      question: 'How do I develop compelling characters from these prompts?',
      answer: 'Begin with the character\'s goal and the obstacle preventing them from achieving it. Give them a specific, vivid detail that makes them real (a mannerism, fear, memory, contradiction). Show their personality through how they make decisions and interact with others. Include flaws that create conflict rather than just obstacles. Develop characters by revealing them through action and dialogue rather than explanation. Most importantly, make readers care about their journey.'
    },
    {
      question: 'What is the difference between plot-driven and character-driven stories?',
      answer: 'Plot-driven stories prioritize external events and what happens next, keeping readers engaged through mystery and escalating stakes. Character-driven stories prioritize internal change and emotional truth, keeping readers engaged through understanding the protagonist\'s journey. Most compelling stories blend both. Use prompts with clear external conflicts for plot-driven practice, and character-study prompts for internal development. Many of these prompts work well when you emphasize character response to plot events.'
    },
    {
      question: 'How much world-building detail should I include?',
      answer: 'Include only world-building details that matter to your specific story and characters. Avoid lengthy exposition or detailed explanations of how a magical system works unless the story requires understanding. Reveal world details through the protagonist\'s perspective and discovery rather than authorial explanation. In fantasy and science fiction prompts, weave world-building into scenes and dialogue naturally. Readers care more about how the world affects your character than encyclopedic detail.'
    },
    {
      question: 'How do I choose between different prompts?',
      answer: 'Select prompts based on what excites you or what you want to practice. If you want to develop world-building skills, choose fantasy or science fiction prompts. If you want to deepen characterization, choose literary fiction or character-driven prompts. If you want to practice plot structure and pacing, choose mystery or thriller prompts. Your enthusiasm for a premise will fuel better writing than selecting what seems easy or impressive.'
    },
    {
      question: 'Should I always follow the prompt exactly as written?',
      answer: 'Think of prompts as inspiration rather than instruction manuals. If a prompt sparks a different idea or direction, follow that inspiration. Change character ages, genders, relationships, or backgrounds if it serves your vision. Modify time periods, settings, or stakes. The prompt\'s purpose is to launch your creativity, not constrain it. Your unique take on a premise is more valuable than faithful adherence to the original wording.'
    },
    {
      question: 'How do I balance showing versus telling in story writing?',
      answer: 'Show rather than tell emotions and character traits through specific actions, details, and dialogue. Instead of telling readers "she was nervous," show trembling hands or a missed beat in conversation. Include concrete sensory details that let readers experience scenes rather than summarize them. However, some telling is necessary for pacing and efficiency. Use telling for less important information and show for emotionally significant moments. Read your draft and identify moments where you summarized instead of dramatizing, then revise those scenes.'
    }
  ];

  const relatedPages = [
    { title: 'AI Chatbot Prompts', href: '/ai-chatbot-prompts' },
    { title: 'AI Productivity Prompts', href: '/ai-productivity-prompts' },
    { title: 'AI Search Engine Prompts', href: '/ai-search-engine-prompts' },
    { title: 'AI Text Generator Prompts', href: '/ai-text-generator-prompts' },
    { title: 'AI Music Generator Prompts', href: '/ai-music-generator-prompts' },
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
            headline: 'AI Story Generator Prompts',
            description: 'A comprehensive collection of detailed prompts designed to inspire creative storytelling across fantasy, science fiction, mystery, literary fiction, and experimental narrative forms.',
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
            <BookOpen size={32} className="text-indigo-400" />
            <h1 className="text-4xl font-bold text-gray-100">AI Story Generator Prompts</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Unlock your creativity with our carefully crafted story prompts designed for writers of all levels. From epic fantasy adventures to intimate character studies, these detailed prompts help you generate compelling narratives with depth, emotional resonance, and engaging plots.
          </p>
        </div>

        {sections.map((section, sectionIdx) => {
          const Icon = section.icon;
          return (
            <div key={sectionIdx} className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Icon size={24} className="text-indigo-400" />
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
                className="block px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-indigo-500/50 hover:bg-[#1a1a1a] transition-colors text-indigo-400"
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

export default AIStoryGeneratorPage;
