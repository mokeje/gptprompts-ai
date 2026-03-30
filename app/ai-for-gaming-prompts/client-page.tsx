'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Copy, ChevronDown, ChevronUp } from 'lucide-react';

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-red-500/50 transition-colors">
      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors text-sm font-medium"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Copied!' : 'Copy Prompt'}
      </button>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden hover:border-red-500/50 transition-colors">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 bg-gray-900 hover:bg-gray-850 transition-colors"
      >
        <span className="font-medium text-white text-left">{question}</span>
        {expanded ? (
          <ChevronUp size={20} className="text-red-500 flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
        )}
      </button>
      {expanded && (
        <div className="p-4 bg-gray-950 border-t border-gray-800">
          <p className="text-gray-300 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function GamingPromptsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            AI Prompts for Gamers & Game Developers
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            30+ ChatGPT prompts to master game strategy, character building, level design, storytelling, competitive play, and game development workflows.
          </p>
        </div>

        {/* Prompt Sections */}
        <div className="space-y-12 mb-16">
          {/* Section 1: Game Strategy & Tactics */}
          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-sm font-bold">1</span>
              Game Strategy & Tactics
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <CopyCard prompt="Analyze this [game name] strategy guide and identify the top 5 counter-strategies I should learn to improve my ranked rating. Explain each counter in practical terms with specific unit compositions or build orders." />
              <CopyCard prompt="I&apos;m stuck on [boss/level name] in [game]. Here&apos;s what I&apos;ve tried: [describe attempts]. Generate 3 alternative strategies with different approaches, difficulty levels, and resource requirements." />
              <CopyCard prompt="Create a decision-making framework for [game name] that helps me choose between aggressive, defensive, and macro-focused strategies based on in-game situations. Include triggers and win conditions for each." />
              <CopyCard prompt="Break down the top 10 pro player strategies in [esport] and explain how each one exploits game mechanics or opponent psychology. Which ones translate best to my current skill level?" />
              <CopyCard prompt="Design a 4-week ranked ladder climbing plan for [game]. Each week should focus on one specific skill (positioning, decision-making, etc.) with daily practice goals and milestone checkpoints." />
              <CopyCard prompt="Analyze my recent loss in [game]: [describe what happened]. What mental game mistakes did I make? What decisions could I have made differently? How do I avoid this pattern in future matches?" />
            </div>
          </section>

          {/* Section 2: Character & Build Optimization */}
          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-sm font-bold">2</span>
              Character & Build Optimization
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <CopyCard prompt="I&apos;m playing [character] in [game] and want to optimize my build for [playstyle]. Compare these 3 build variations: [describe builds]. Which is strongest for my skill level and what&apos;s the build progression path?" />
              <CopyCard prompt="Create a character comparison guide for [game] that helps me choose between [character A], [character B], and [character C] based on my preferred playstyle, game phase strength, and team synergy." />
              <CopyCard prompt="Design a gear progression roadmap for my [character class] in [game]. From early game to endgame, what items should I prioritize? Include stat priorities, synergies, and upgrade paths." />
              <CopyCard prompt="Break down the mechanical differences between [character A] and [character B] in [game]. For each, list the hardest matchups, easiest wins, and key techniques a beginner should practice first." />
              <CopyCard prompt="I&apos;m a [skill level] player learning [character] for the first time. Create a 2-week practice schedule that teaches me basic combos, intermediate techs, and one advanced strategy I can use immediately." />
              <CopyCard prompt="Analyze the current [game] meta. Which character archetypes are overpowered right now? Which are underrated? Give me a tier list with reasoning for each placement." />
            </div>
          </section>

          {/* Section 3: Level Design & World Building */}
          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-sm font-bold">3</span>
              Level Design & World Building
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <CopyCard prompt="I&apos;m designing a [game genre] level with these constraints: [describe layout, theme, mechanics]. Generate 5 unique level layouts with different difficulty curves and player progression paths." />
              <CopyCard prompt="Create a world-building questionnaire for my [game type] world. Help me develop consistent lore, geography, NPC relationships, and side quest structures that feel interconnected and meaningful." />
              <CopyCard prompt="Design a difficulty scaling system for my indie game level that adapts to player skill. Include parameters for enemy count, AI behavior, resource availability, and tutorial triggers." />
              <CopyCard prompt="I&apos;m building a [game genre] world with [core theme]. Generate 10 unique location ideas that support the story, offer distinct gameplay challenges, and each have 3 secret areas players can discover." />
              <CopyCard prompt="Create an environmental storytelling guide for my game level. How can I communicate narrative through level design, hidden areas, enemy placement, and NPC interactions without breaking immersion?" />
              <CopyCard prompt="Design a fast travel and shortcuts system for my open-world game. How should I structure the map to encourage exploration while still offering convenience? Include 5 specific shortcut examples." />
            </div>
          </section>

          {/* Section 4: Storytelling & Narrative Design */}
          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-sm font-bold">4</span>
              Storytelling & Narrative Design
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <CopyCard prompt="I&apos;m writing a game narrative with this premise: [describe setting, protagonist, conflict]. Generate 3 distinct story paths with different themes, character arcs, and multiple endings for each." />
              <CopyCard prompt="Create a branching dialogue system for my game character [character name]. Include 8 conversation branches that reveal personality, advance plot, and offer player agency without breaking narrative logic." />
              <CopyCard prompt="Design a companion relationship arc for my RPG. Create milestones where the companion grows closer to the protagonist, including dialogue beats, personal quests, and emotional payoffs at key story moments." />
              <CopyCard prompt="I&apos;m developing lore for my [game genre]. Help me create a mythology system with: origin story, pantheon of deities or forces, key historical events, and how this lore influences current game events." />
              <CopyCard prompt="Create a questline structure for my open-world game main story. Design 5 major quests with clear narrative progression, character development, plot twists, and preparation for the final confrontation." />
              <CopyCard prompt="Design a dialogue writing system that captures [character type]&apos;s voice consistently. Include speech patterns, vocabulary preferences, emotional cues, and how dialogue changes based on relationship levels." />
            </div>
          </section>

          {/* Section 5: Game Development & Mechanics */}
          <section>
            <h2 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-sm font-bold">5</span>
              Game Development & Mechanics
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <CopyCard prompt="I&apos;m developing a [game genre] game in [engine]. Design a core gameplay loop that: takes [duration] to complete, teaches players mechanics gradually, and includes 3 progression systems." />
              <CopyCard prompt="Create a progression system for my game that: rewards different playstyles, prevents grinding from being mandatory, and keeps players engaged for [desired playtime]. Include XP, loot, and cosmetic reward layers." />
              <CopyCard prompt="Help me design a tutorial that teaches [core mechanics] without feeling like a tutorial. Structure it as a guided story segment with environmental learning, tooltips, and natural skill progression." />
              <CopyCard prompt="Create a balance framework for my [game type] game. How do I balance [element A] vs [element B] vs [element C]? Include metrics for measuring balance, testing strategies, and adjustment formulas." />
              <CopyCard prompt="Design an economy system for my game with these constraints: [describe currency types, earning rates, sinks]. Ensure no exploits, fair progression pacing, and cosmetic monetization that doesn&apos;t affect balance." />
              <CopyCard prompt="I&apos;m struggling with game feel in my [game type]. Help me audit [specific system] by listing: what works well, what feels sluggish, what&apos;s missing. Then suggest 5 polish improvements I can implement this sprint." />
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <FAQItem
              question="How do I use these prompts to improve my gameplay?"
              answer="Use these prompts to analyse your games, receive strategy guidance, and get specific improvement plans. Copy a prompt, paste it into ChatGPT with your game details, and follow the structured advice. The key is applying what you learn in actual ranked matches or practice sessions, not just reading the responses."
            />
            <FAQItem
              question="Can I use these prompts for different games than mentioned?"
              answer="Absolutely. These prompts are templates. Simply replace [game name], [character], [playstyle] with your specific game, character, or situation. The framework works across most competitive and narrative-driven games—adjust the terminology to match your game."
            />
            <FAQItem
              question="What&apos;s the best prompt to use when I&apos;m stuck on a boss or level?"
              answer="Use the &quot;Game Strategy & Tactics&quot; prompt that asks you to describe what you&apos;ve tried. Include specific details about boss mechanics, what your attempts revealed, and your current loadout. This gives AI enough context to suggest novel approaches you might not have considered."
            />
            <FAQItem
              question="Can AI really help me climb ranked ladders faster?"
              answer="AI can accelerate learning by helping you understand meta trends, identifying your decision-making gaps, and structuring practice routines. However, climbing still requires consistent practice and applying the advice. AI is a coach, not a replacement for grinding."
            />
            <FAQItem
              question="How do I create balanced characters or game mechanics using these prompts?"
              answer="Use the balance framework prompt and include specific numbers: damage values, cooldowns, stat ranges, etc. Ask AI to identify power spikes, matchup imbalances, and suggest adjustment formulas. Then test in controlled environments before live deployment."
            />
            <FAQItem
              question="Are these prompts suitable for indie game developers?"
              answer="Yes. These are specifically useful for indie developers designing levels, balancing mechanics, writing narrative, and structuring progression systems. They help you think through design decisions systematically without needing a large team."
            />
            <FAQItem
              question="Can I use AI prompts for competitive esports preparation?"
              answer="Definitely. Use strategy analysis prompts to study opponent tactics, create personalized training plans, and prepare for specific matchups. Many esports professionals use AI to supplement coaching and identify blind spots."
            />
            <FAQItem
              question="How detailed should my context be when using these prompts?"
              answer="More detail always helps. Include specifics: your skill rank, the exact mechanic you&apos;re struggling with, previous attempts, your preferred playstyle, and any constraints (limited time, specific champions, etc.). Vague prompts get vague answers."
            />
            <FAQItem
              question="Should I trust AI&apos;s game balance suggestions over community consensus?"
              answer="Use both. AI is great for systematic analysis and identifying mathematical imbalances. Community consensus reveals what actually feels broken in practice. Compare the two perspectives, then test with real players before implementing changes."
            />
            <FAQItem
              question="Can these prompts help me design my own indie game from scratch?"
              answer="Yes. Start with the world-building and narrative prompts to establish your setting and story. Then use the mechanics and level design prompts to build out gameplay systems. Use the progression and balance prompts to ensure your game stays engaging through completion."
            />
          </div>
        </section>

        {/* Related Pages */}
        <section className="bg-gray-950 rounded-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-white">Explore Other Prompt Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/ai-translation-prompts"
              className="p-4 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-red-500/50 transition-all text-white font-medium"
            >
              Translation Prompts
            </Link>
            <Link
              href="/ai-web-builder-prompts"
              className="p-4 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-red-500/50 transition-all text-white font-medium"
            >
              Web Builder Prompts
            </Link>
            <Link
              href="/ai-writing-assistant-prompts"
              className="p-4 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-red-500/50 transition-all text-white font-medium"
            >
              Writing Assistant Prompts
            </Link>
            <Link
              href="/ai-for-musicians-prompts"
              className="p-4 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-red-500/50 transition-all text-white font-medium"
            >
              Music Prompts
            </Link>
            <Link
              href="/ai-research-assistant-prompts"
              className="p-4 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-red-500/50 transition-all text-white font-medium"
            >
              Research Assistant Prompts
            </Link>
            <Link
              href="/ai-study-prompts"
              className="p-4 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-red-500/50 transition-all text-white font-medium"
            >
              Study Prompts
            </Link>
            <Link
              href="/ai-poem-generator-prompts"
              className="p-4 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-red-500/50 transition-all text-white font-medium"
            >
              Poetry Prompts
            </Link>
            <Link
              href="/ai-free-art-prompts"
              className="p-4 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-red-500/50 transition-all text-white font-medium"
            >
              Art Prompts
            </Link>
          </div>
        </section>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Gamers & Game Developers',
            description: '30+ ChatGPT prompts to master game strategy, character building, level design, storytelling, competitive play, and game development workflows.',
            datePublished: '2026-03-29',
            dateModified: '2026-03-29',
            author: {
              '@type': 'Organization',
              name: 'GPT Prompts',
            },
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
                name: 'How do I use these prompts to improve my gameplay?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use these prompts to analyse your games, receive strategy guidance, and get specific improvement plans. Copy a prompt, paste it into ChatGPT with your game details, and follow the structured advice. The key is applying what you learn in actual ranked matches or practice sessions, not just reading the responses.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use these prompts for different games than mentioned?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. These prompts are templates. Simply replace [game name], [character], [playstyle] with your specific game, character, or situation. The framework works across most competitive and narrative-driven games—adjust the terminology to match your game.',
                },
              },
              {
                '@type': 'Question',
                name: 'What&apos;s the best prompt to use when I&apos;m stuck on a boss or level?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use the "Game Strategy & Tactics" prompt that asks you to describe what you&apos;ve tried. Include specific details about boss mechanics, what your attempts revealed, and your current loadout. This gives AI enough context to suggest novel approaches you might not have considered.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI really help me climb ranked ladders faster?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can accelerate learning by helping you understand meta trends, identifying your decision-making gaps, and structuring practice routines. However, climbing still requires consistent practice and applying the advice. AI is a coach, not a replacement for grinding.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I create balanced characters or game mechanics using these prompts?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use the balance framework prompt and include specific numbers: damage values, cooldowns, stat ranges, etc. Ask AI to identify power spikes, matchup imbalances, and suggest adjustment formulas. Then test in controlled environments before live deployment.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are these prompts suitable for indie game developers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. These are specifically useful for indie developers designing levels, balancing mechanics, writing narrative, and structuring progression systems. They help you think through design decisions systematically without needing a large team.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use AI prompts for competitive esports preparation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Definitely. Use strategy analysis prompts to study opponent tactics, create personalized training plans, and prepare for specific matchups. Many esports professionals use AI to supplement coaching and identify blind spots.',
                },
              },
              {
                '@type': 'Question',
                name: 'How detailed should my context be when using these prompts?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'More detail always helps. Include specifics: your skill rank, the exact mechanic you&apos;re struggling with, previous attempts, your preferred playstyle, and any constraints (limited time, specific champions, etc.). Vague prompts get vague answers.',
                },
              },
              {
                '@type': 'Question',
                name: 'Should I trust AI&apos;s game balance suggestions over community consensus?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use both. AI is great for systematic analysis and identifying mathematical imbalances. Community consensus reveals what actually feels broken in practice. Compare the two perspectives, then test with real players before implementing changes.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can these prompts help me design my own indie game from scratch?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Start with the world-building and narrative prompts to establish your setting and story. Then use the mechanics and level design prompts to build out gameplay systems. Use the progression and balance prompts to ensure your game stays engaging through completion.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
