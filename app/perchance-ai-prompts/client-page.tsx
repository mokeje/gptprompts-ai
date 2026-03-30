'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp, Wand2, Layers, Dice6, BookOpen, Zap } from 'lucide-react';

const PerchanceAIPromptsPage = () => {
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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-purple-500/50 transition-colors">
      <p className="text-gray-200 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={() => handleCopyPrompt(id, prompt)}
        className="inline-flex items-center gap-2 px-3 py-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded text-sm transition-colors"
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
          <ChevronUp size={18} className="text-purple-400 flex-shrink-0" />
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
      title: 'Character & NPC Generation',
      icon: Layers,
      prompts: [
        'A medieval fantasy warrior character with detailed backstory including name, age, personality traits, combat skills, fears, motivations, moral alignment, and relationship dynamics with a party of adventurers. Include physical appearance, clothing style, weapon preference, and unique quirks that make the character memorable in roleplay scenarios.',
        'A space exploration commander NPC for a sci-fi campaign with military background, command experience, complex relationship with authority, hidden agenda, dialogue patterns, cultural background, technical skills, and specific motivations driving their actions in a futuristic setting.',
        'A mysterious tavern keeper with conflicting loyalties, shadowy past, connection to underworld networks, trading relationships with various factions, secrets they protect, reason for their location, and personality traits that make encounters with them unpredictable and intriguing.',
        'A scholarly mage character designed for long-term campaign interaction, including research focus, magical specialization, personality quirks, relationship to their tower or library, student interactions, philosophical beliefs about magic, and potential story arcs for character development.',
        'A roguish character with detailed crime background, underworld connections, moral code despite illegal activities, relationship with authority figures, skills and techniques, reasons for leaving criminal life, and complexity that makes them more than a simple troublemaker.',
        'A noble NPC with political intrigue, court connections, hidden business ventures, family responsibilities, personal ambitions beyond their title, personality beneath formal training, and motivations that create interesting scenarios for player interaction and diplomacy.'
      ]
    },
    {
      title: 'World & Setting Generation',
      icon: Wand2,
      prompts: [
        'A detailed fantasy kingdom including government structure, economic system, military strength, cultural values, major cities and their characteristics, dangerous wilderness regions, mythological history, current political tensions, foreign relations, and plot hooks that naturally integrate player characters into the world.',
        'A post-apocalyptic settlement with specific survival challenges, resource distribution systems, governance structure, faction relationships, notable locations within and around the settlement, daily life routines, technology level, and narrative tension points that create ongoing storytelling opportunities.',
        'A magical academy environment with specific magical disciplines taught, faculty members with distinct personalities and teaching styles, student body dynamics, competition or cooperation between houses, mysteries within the academy, dangerous areas, traditions and customs, and environmental features that create dynamic settings.',
        'A dense city quarter with distinct neighborhoods, merchant establishments with unique proprietors, underground networks and hidden locations, local politics and gang territories, cultural diversity and language variations, historical significance and hidden lore, and social dynamics affecting player navigation and interaction.',
        'A cursed dungeon with layered history explaining the curse, specific hazards and environmental challenges, treasure distribution following logic, monster populations and their motivations, previous adventurers\' remnants, hidden passages, puzzle mechanics, and atmosphere that creates tension and wonder throughout exploration.',
        'An isolated island with unique ecosystem, native inhabitants and their culture, natural disasters and seasonal challenges, shipwreck locations with history, mysterious ruins, resource scarcity and abundance areas, travel between locations, and integration of survival elements creating authentic adventure scenarios.'
      ]
    },
    {
      title: 'Plot & Story Generation',
      icon: BookOpen,
      prompts: [
        'A multi-act adventure arc beginning with a hook that naturally recruits player characters, escalating complications that raise stakes progressively, plot twists that recontextualize earlier information, character-specific storylines intersecting with main plot, moral dilemmas without clear right answers, climactic confrontation with meaningful consequences, and resolution options allowing player agency.',
        'A mystery investigation structure starting with crime scene discovery, collection of clues distributed across multiple locations, red herrings misdirecting investigation, character suspects with believable motivations, investigation techniques requiring player ingenuity, revelation of larger conspiracy, confrontation with perpetrator, and consequences affecting the broader world.',
        'A political intrigue scenario with multiple factions pursuing conflicting objectives, player characters entangled through prior relationships or debt, escalating pressure forcing commitment choices, information control and rumor networks, assassination attempts or coercion tactics, alliance possibilities with unexpected consequences, and climactic political maneuvering.',
        'A rescue or heist mission including target identification with justification for its difficulty, preparation phase allowing player planning, unexpected complications during execution, enemy reinforcements with logical arrival timing, environmental hazards interacting with heist mechanics, escape challenges matching entry complexity, and decision points affecting mission success conditions.',
        'A monster threat narrative featuring creature design with motivations beyond simple hunger, escalation of monster activity over time, clues revealing creature origin and weakness, collateral damage affecting local communities, investigation requiring research and experimentation, preparation for final confrontation, and thematic resonance with campaign tone.',
        'A revenge narrative with original victim establishing audience investment, gradual discovery of perpetrator identity through investigation, emotional confrontations between characters, collateral damage and moral questions about proportional revenge, climactic confrontation allowing multiple resolution approaches, and aftermath addressing consequences of revenge pursuit.'
      ]
    },
    {
      title: 'Encounter & Combat Generation',
      icon: Dice6,
      prompts: [
        'A tactical combat encounter designed with environmental features providing tactical options, enemy positioning reflecting their strategy and capabilities, mix of enemy types creating varied threat distribution, escape routes suggesting creatures have survival instinct, treasure or objectives justifying the combat encounter, difficulty scaling appropriately for party level, and concluding narrative significance beyond simple experience points.',
        'A social encounter designing NPC personalities creating natural roleplay opportunities, conversational stakes and what characters want from interaction, information revelation gates controlled by player conversation choices, deception mechanics detecting lies through behavioral clues, alliance or betrayal possibilities affecting future campaign, time pressure adding tension, and resolution opening new plot threads.',
        'A puzzle encounter featuring mechanical challenge requiring creativity over specific solution, environmental clues guiding problem-solving without explicit answers, multiple valid solutions rewarding different approaches, failure consequences creating tension without campaign derailment, time limits adding pressure, trap interactions if puzzle is failed or triggered, and reward justifying puzzle difficulty.',
        'A trap encounter design including trigger mechanism with clear warning signs, mechanical function that characters can comprehend and potentially disable, damage reflecting trap type with scaling severity, disarming techniques allowing skilled characters to bypass, consequences of failure creating tension, creative bypassing alternatives rewarding innovation, and narrative integration explaining trap placement.',
        'A chase encounter mechanics including terrain variety affecting chase dynamics, obstacles requiring agility or intelligence checks, multiple path options affecting escape difficulty, pursuers with logical motivations and capabilities, distance mechanics creating rising tension, consequence variation based on chase outcome, and escape routes suggesting survivors exist.',
        'A social negotiation encounter with NPC possessing conflicting priorities requiring difficult compromise, opening position and negotiation range allowing player influence, leverage points characters can discover to improve their position, betrayal options affecting future story, time pressure or external threat creating negotiation urgency, and multiple acceptable outcomes rewarding diplomacy.'
      ]
    },
    {
      title: 'Magic System & Items Generation',
      icon: Zap,
      prompts: [
        'A custom magical item with specific mechanical effects integrated into game rules, origin story explaining its creation and previous owners, limitations and risks accompanying its power preventing item overpowered-ness, activation methods requiring specific conditions or components, cursed elements creating interesting complications, cultural or historical significance affecting its value, and narrative hooks connecting items to broader campaign.',
        'A unique spell or ability mechanics with clear mechanical effects and action economy, learning requirements justifying its rarity, components or costs preventing casual casting, consequences or risks balancing its power, thematic flavor text describing magical theory, scaling options as character advances, and combat applications alongside utility uses.',
        'A magical artifact with legendary history including famous previous wielders, complex mechanics preventing straightforward item usage, quests required to unlock power progressively, drawbacks and temptations accompanying its ability, connection to previous campaign events or future plot, artifact sentience or will affecting character possession, and endgame significance justifying its legend.',
        'A custom magic system mechanic explaining mana or power source, training requirements for learning magic, casting limitations preventing excessive power, component requirements affecting spellcasting scenarios, magical theory creating internal consistency, cultural variations in magical practice, and integration mechanics with existing game systems.',
        'An enchantment system for character equipment allowing customization, magical enhancements with mechanical benefits, installation process and magical crafting mechanics, rarity tiers affecting power and availability, combination restrictions preventing overpowered builds, upgrading mechanics creating progression, and magical degradation or maintenance requirements.',
        'A potion or alchemy system with various effects and durations, ingredient gathering mechanics creating exploration opportunities, crafting process allowing character preparation, side effect risks adding decision-making tension, potency variations affecting reliability, market mechanics allowing potion trading, and experimentation consequences encouraging creative thinking.'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What is Perchance and how does it work with AI generation?',
      answer: 'Perchance is an interactive platform for creating random generators that can produce text, characters, stories, and other content. When combined with AI prompting techniques, it becomes a powerful tool for generating diverse content variations, character stats, world details, and narrative elements. AI prompts help you create more nuanced and detailed generators that produce coherent, contextually appropriate results.'
    },
    {
      question: 'How detailed should my generator prompts be?',
      answer: 'More detailed prompts generally produce better results. Include specifics about tone, style, format expectations, detail level, and any constraints. Describe the output structure you want, include examples of good output if possible, and specify what elements are essential versus optional. The more context you provide about your desired generator behavior, the more accurate and useful the generated content becomes.'
    },
    {
      question: 'Can I create generators that work for tabletop RPG campaigns?',
      answer: 'Absolutely. Perchance generators are ideal for RPG content creation. You can build character generators producing detailed NPCs with personality, encounter generators creating varied combat and social situations, plot generators suggesting adventure hooks, location generators developing unique settings, treasure generators distributing rewards logically, and name generators producing culturally appropriate character and place names.'
    },
    {
      question: 'How do I ensure generated content stays consistent within my world?',
      answer: 'Build generators with constraints reflecting your world rules and lore. Include options that reference existing factions, locations, and established facts. Create interconnected generators where one feeds into another, maintaining continuity. Document your world rules and include them in generator prompts. Test generators regularly to ensure output aligns with your vision, refining prompts to guide generators toward desired results.'
    },
    {
      question: 'What techniques improve the quality of AI-generated content?',
      answer: 'Use specific descriptive language rather than vague terms. Include examples of good output in your prompts. Specify structure and format explicitly. Add constraints limiting absurd or inappropriate results. Request reasoning or explanation alongside output. Break complex generation into multiple specialized generators rather than one overly complex one. Test extensively and refine prompts based on actual output.'
    },
    {
      question: 'Can I combine multiple generators for more complex creation?',
      answer: 'Yes, layered generators are powerful. Create a primary generator that produces broad categories, then link it to specialized sub-generators producing details. For example, a plot generator could reference character generators, which reference world generators. This creates intricate, interconnected content where elements naturally connect. Document how generators link to help maintain consistency across outputs.'
    },
    {
      question: 'How do I handle randomization without losing narrative quality?',
      answer: 'Balance random elements with curated choices. Use weighted randomization favoring higher-quality options. Create randomization pools containing only good options rather than fully random generation. Include decision points where you manually select between generated options. Build narrative frameworks that accommodate random elements, allowing them to enhance rather than disrupt your story.'
    },
    {
      question: 'What tools pair well with Perchance for content creation?',
      answer: 'Perchance works well alongside AI writing tools for refining generated content, mapping software for visualizing generated locations, character sheet generators for RPG integration, writing prompts for inspiration, note-taking tools for organizing generator outputs, and version control for saving generator iterations. Many creators combine Perchance generators with spreadsheets tracking campaign details.'
    },
    {
      question: 'How do I create generators that spark creativity rather than limit it?',
      answer: 'Design generators as inspiration sources, not rigid templates. Include unusual combinations forcing creative reinterpretation. Generate excess options, selecting best results. Add mysterious or contradictory elements requiring explanation. Create generators with gaps characters must fill in themselves. Include random tables for mixing elements unexpectedly. Frame generator output as suggestions rather than requirements.'
    },
    {
      question: 'Can I share my Perchance generators with others?',
      answer: 'Yes, Perchance allows sharing generators through public links, enabling collaboration. You can build community generators others expand and improve. Credit original creators when adapting their work. Document your generator design and intentions for users. Consider creating tutorial generators teaching others your techniques. Community sharing accelerates improvement and creates valuable resources for all users.'
    }
  ];

      const relatedPages = [
    { title: 'AI Story Generator Prompts', href: '/ai-story-generator-prompts' },
    { title: 'AI Character Chat Prompts', href: '/ai-character-chat-prompts' },
    { title: 'AI Chat Prompts', href: '/ai-chat-prompts' },
    { title: 'AI Writing Assistant Prompts', href: '/ai-writing-assistant-prompts' },
    { title: 'AI For Gaming Prompts', href: '/ai-for-gaming-prompts' },
    { title: 'AI Poem Generator Prompts', href: '/ai-poem-generator-prompts' },
    { title: 'Squibler AI Prompts', href: '/squibler-ai-prompts' },
    { title: 'AI Free Art Prompts', href: '/ai-free-art-prompts' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Perchance AI Prompts',
            description: 'A comprehensive collection of detailed prompts to create powerful Perchance generators, covering character generation, world building, plot creation, encounters, magic systems, and more for storytellers and game designers.',
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
            <Wand2 size={32} className="text-purple-400" />
            <h1 className="text-4xl font-bold text-gray-100">Perchance AI Prompts</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Unlock the creative power of Perchance generators with our expertly crafted prompts. From character creation to world building and story generation, these detailed prompts help you build generators that produce rich, varied, and meaningful content for your campaigns and stories.
          </p>
        </div>

        {sections.map((section, sectionIdx) => {
          const Icon = section.icon;
          return (
            <div key={sectionIdx} className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Icon size={24} className="text-purple-400" />
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
                className="block px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-purple-500/50 hover:bg-[#1a1a1a] transition-colors text-purple-400"
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

export default PerchanceAIPromptsPage;
