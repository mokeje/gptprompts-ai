'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Shuffle, BookOpen, User, Map, Dice6, Sparkles } from 'lucide-react';

const accent = '#22C55E';
const borderCol = '#001a0a';
const bgDark = '#020806';

const CopyCard = ({ title, prompt, tag }: { title: string; prompt: string; tag: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-lg border p-5 transition-colors" style={{ borderColor: borderCol, background: bgDark }} onMouseEnter={e => (e.currentTarget.style.borderColor = `${accent}60`)} onMouseLeave={e => (e.currentTarget.style.borderColor = borderCol)}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full border" style={{ borderColor: `${accent}40`, color: accent }}>{tag}</span>
          <h3 className="text-white font-semibold mt-1">{title}</h3>
        </div>
        <button onClick={handleCopy} className="shrink-0 text-gray-400 transition-colors">
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="whitespace-pre-wrap font-sans text-sm text-gray-300 leading-relaxed">{prompt}</pre>
    </div>
  );
};

const FAQ = ({ item }: { item: { question: string; answer: string } }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg overflow-hidden border" style={{ borderColor: borderCol }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left" style={{ background: bgDark }}>
        <span className="font-medium text-white pr-4">{item.question}</span>
        {open ? <ChevronUp size={18} style={{ color: accent }} /> : <ChevronDown size={18} className="text-gray-400" />}
      </button>
      {open && <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed" style={{ background: bgDark }}>{item.answer}</div>}
    </div>
  );
};

const sections = [
  {
    title: 'Character & Person Generators',
    icon: User,
    description: 'Build Perchance generators that create fully-detailed random characters — from fantasy heroes to modern professionals — with consistent, interlocking traits.',
    prompts: [
      {
        tag: 'Fantasy',
        title: 'Fantasy Character Generator',
        prompt: `Build a Perchance generator that creates complete fantasy RPG characters.

The generator should randomly produce:
- Name (first + surname from fantasy-appropriate name lists)
- Race (human, elf, dwarf, halfling, tiefling, dragonborn, orc, gnome)
- Class (warrior, mage, rogue, healer, paladin, ranger, necromancer, bard)
- Background origin (village farmer, noble's bastard, street orphan, wandering merchant, disgraced knight, temple acolyte)
- Core personality trait (stoic, boisterous, cunning, idealistic, world-weary, impulsive)
- Fatal flaw (prideful, cowardly, greedy, wrathful, reckless, overly trusting)
- A secret they hide from their companions
- Their signature item or possession
- Their motivation for adventuring

Format: output as a readable character card, each element on its own line with label
Include: a one-sentence backstory that weaves together 2-3 of the random elements`,
      },
      {
        tag: 'Modern',
        title: 'Modern Character Generator',
        prompt: `Create a Perchance generator for contemporary fiction character creation:

Generate random modern characters with:
- Full name (culturally diverse first + last name combinations)
- Age (range: 22-65, weighted toward 25-45)
- Occupation (from a list of 30+ varied real-world jobs)
- City they live in (from major global cities)
- Personality type descriptor (introvert/extrovert + one adjective)
- A defining hobby or passion
- Their relationship status and family context
- A professional or personal crisis they are currently navigating
- One thing they are secretly proud of
- One thing they lie about in casual conversation
- Their social media personality vs. their private self

Output: a "person profile" paragraph that reads like a novel character introduction
Tone: grounded, specific, human — not stereotyped`,
      },
      {
        tag: 'NPC',
        title: 'D&D NPC Quick Generator',
        prompt: `Design a Perchance generator for D&D Dungeon Masters to quickly generate NPCs:

Each NPC should have:
- Name (appropriate to a medieval/fantasy setting)
- Role in a town or location (innkeeper, blacksmith, guard, merchant, scholar, beggar, noble, priest, criminal)
- Distinguishing physical feature (one memorable detail — a scar, unusual eye colour, distinctive mannerism)
- Personality in one word (gruff, jovial, suspicious, melancholy, enthusiastic, cunning, nervous, serene)
- What they want from the player characters (information, help, money, protection, a favour)
- What they are hiding (a secret that a sharp player might notice)
- A verbal tic or speech pattern ("always ends sentences with 'ay?'", "speaks in third person", "whispers everything")
- Their opinion of magic (distrustful, fascinated, indifferent, uses it quietly)

Format: one-line summary suitable for reading aloud at the table`,
      },
    ],
  },
  {
    title: 'Fantasy World Building',
    icon: Map,
    description: 'Generate rich fantasy world elements — kingdoms, locations, deities, factions, and history — with randomised depth and internal consistency.',
    prompts: [
      {
        tag: 'Location',
        title: 'Fantasy Location Generator',
        prompt: `Build a Perchance generator for creating unique fantasy locations:

Each generated location should include:
- Location type (tavern, dungeon, forest clearing, market town, ruined temple, wizard's tower, port city, underground city, mountain fortress, haunted manor)
- Name (2-3 word evocative name appropriate to type)
- Primary atmosphere (welcoming, foreboding, chaotic, serene, corrupt, mysterious, sacred, decayed)
- Notable feature (the one thing that makes this place memorable)
- The danger or complication (what threat, problem, or tension exists here)
- Who controls or inhabits this place
- A rumour about this location (true or false — DM decides)
- What the party can find here: treasure, information, ally, enemy, quest

Format: structured location card readable as a GM note
Length: brief enough to use at the table, detailed enough to be useful`,
      },
      {
        tag: 'Kingdom',
        title: 'Fantasy Kingdom Generator',
        prompt: `Create a Perchance generator for building fantasy kingdoms and nations:

Each kingdom should randomly generate:
- Kingdom name + adjective (e.g., "The Amber Dominion", "The Free Cities of...")
- Government type (monarchy, oligarchy, theocracy, republic, empire, tribal confederation, magocracy)
- Current ruler type (wise and just, corrupt, young and inexperienced, puppet ruler with hidden power, feared tyrant, beloved reformer)
- Primary terrain and geography (coastal empire, mountain kingdom, forest nation, desert sultanate, island chain, tundra tribes)
- Primary economy (agriculture, trade, magic, mining, seafaring, mercenary armies)
- Current conflict or challenge facing the nation
- Cultural trait that defines this people
- Their relationship with magic (common, forbidden, revered, monopolised, feared)
- A famous legend or myth from this culture
- Neighbouring faction and the current relationship (ally, enemy, tense peace, trade partner)`,
      },
      {
        tag: 'Deity',
        title: 'Pantheon Deity Generator',
        prompt: `Design a Perchance generator for creating original fantasy deities and pantheons:

Each deity should include:
- Name (ancient-sounding, evocative)
- Domain (war, death, love, nature, knowledge, trickery, sea, sky, forge, harvest, shadow, time, chaos)
- Alignment (lawful good / neutral / chaotic evil, etc.)
- Symbol (a visual symbol associated with this deity)
- Holy animal or creature
- Favoured offering or sacrifice
- Sacred day or ritual
- Clergy personality type (zealous, philosophical, pragmatic, secretive, militant, scholarly)
- Relationship with other deities (rival, ally, forgotten, ascendant, dying, newly ascended)
- A prayer or invocation fragment (2-3 lines of flavour text)
- What their followers believe happens after death

Format: deity profile card suitable for worldbuilding documents or campaign prep`,
      },
    ],
  },
  {
    title: 'Story & Plot Elements',
    icon: BookOpen,
    description: 'Generate plot hooks, story complications, quest seeds, and narrative elements to fuel creative writing and tabletop RPG campaigns.',
    prompts: [
      {
        tag: 'Plot Hook',
        title: 'Adventure Plot Hook Generator',
        prompt: `Build a Perchance generator for creating RPG adventure plot hooks:

Each plot hook should include:
- The inciting event (what happens that requires the party's involvement)
- Who is asking for help (NPC patron type)
- The stated problem (what the patron believes is happening)
- The hidden twist (what is actually happening — the secret layer)
- The moral complexity (is there a choice without a clean answer?)
- Potential rewards (gold, information, political favour, a rare item, a map, gratitude)
- The time pressure (urgent / this week / open-ended)
- Genre feel (mystery, combat, exploration, diplomacy, horror, heist, rescue)

Output format: a 3-paragraph plot hook that a DM could read directly as a quest-giver's speech, followed by GM-only notes revealing the hidden layer
Tone: evocative, specific, not generic`,
      },
      {
        tag: 'Complication',
        title: 'Story Complication Generator',
        prompt: `Create a Perchance generator for adding complications to stories and campaigns:

Types of complications to include:
- Character complication (a party member or protagonist has a secret revealed)
- External complication (a new faction or power appears with conflicting goals)
- Moral complication (the "right" choice has terrible consequences)
- Resource complication (something essential is lost, stolen, or revealed to be false)
- Relationship complication (an ally becomes unreliable or an enemy becomes sympathetic)
- Timing complication (something is revealed too late or too early)
- Mistaken identity complication (someone is not who they claimed to be)
- Prophecy or fate complication (the heroes are told something about their future)

For each complication, generate:
1. The trigger (what sets it off)
2. The immediate effect
3. The long-term implication for the story
4. How it changes the protagonist's goals or beliefs`,
      },
      {
        tag: 'Quest',
        title: 'Side Quest Generator',
        prompt: `Design a Perchance generator for D&D and TTRPG side quests:

Generate a complete side quest with:
- Quest name (evocative, 3-4 words)
- Quest giver and their motivation
- The apparent goal (what the quest seems to be about on the surface)
- The actual situation (the more complex truth the party discovers)
- Three key encounters (one social, one exploration, one combat or challenge)
- The complication that arises midway through
- Two possible resolutions (each with different moral or practical trade-offs)
- Rewards (mechanical: gold/items; narrative: reputation/information/ally)
- Connection to larger plot (how this side quest could hook into the main campaign)
- Estimated session length (1 session / 2-3 sessions / extended arc)

Format: complete session prep card, DM-ready`,
      },
    ],
  },
  {
    title: 'Game & RPG Content',
    icon: Dice6,
    description: 'Generate tabletop RPG content including loot tables, encounter tables, random events, and game mechanics.',
    prompts: [
      {
        tag: 'Loot',
        title: 'Treasure & Loot Table Generator',
        prompt: `Build a Perchance treasure and loot generator for D&D 5e:

The generator should produce contextual loot appropriate to location type:
Dungeon loot: coins (CP/SP/GP/PP in era-appropriate amounts), gems (named with value), art objects, mundane magic items, rare spell components
Wilderness loot: herbs, animal parts, survival supplies, traveler's abandoned gear, natural curiosities
Urban loot: stolen goods, personal valuables, merchant samples, official documents, contraband
Villain's loot: personal items revealing character backstory, plot-relevant documents, unique weapons, cursed items

Each loot result should include:
- Item name and brief description
- Approximate gold value
- Whether it has additional plot significance (25% chance — roll separately)
- Whether it is cursed, magical, or sentient (rare — 10% chance for significant finds)

Format: tables appropriate for different CR ranges (low/mid/high)`,
      },
      {
        tag: 'Encounter',
        title: 'Random Encounter Table',
        prompt: `Create a Perchance generator for D&D random encounter tables:

Generate encounters appropriate to these environment types:
Forest encounters: wildlife (passive/aggressive), travellers, fey creatures, druids, smugglers, a crashed meteor
Mountain encounters: dwarven prospectors, giant eagles, avalanche risk, ancient ruins, a dragon's shadow, mountain goat herders
City encounters: pickpockets, city watch patrol, street performer, merchant dispute, runaway cart, secret society recruitment
Dungeon encounters: wandering monsters (level-appropriate), trap triggers, rival adventurers, undead remnants, a trapped creature that could be ally or enemy

Each encounter entry includes:
1. The encounter description (2-3 sentences)
2. Is this hostile, neutral, or friendly? (weighted — not everything attacks)
3. The opportunity here (what could clever players gain from this encounter?)
4. Escalation option (if players make it worse)

Format: d20 tables with 20 entries per environment`,
      },
      {
        tag: 'Dungeon',
        title: 'Dungeon Room Generator',
        prompt: `Design a Perchance generator for dungeon rooms and chambers:

Each room should randomly generate:
- Room type (entry hall, guard room, storage, shrine, torture chamber, library, throne room, laboratory, prison, kitchen, armoury, throne room, secret chamber)
- Size (small, medium, large, vast)
- Condition (pristine, abandoned, looted, partially collapsed, flooded, scorched, frozen)
- Primary feature (the dominant thing you notice first)
- Secondary detail (something a careful search reveals)
- Hazard or trap (if any — 40% chance)
- Monster presence (if any — type and number, 50% chance)
- Treasure location and type (if any — 60% chance)
- An environmental detail that tells a story about who used to be here
- An exit description (how many doors, their condition, and where they might lead)

Format: concise room description suitable for on-the-fly use at the table`,
      },
    ],
  },
  {
    title: 'Random Tables & Lists',
    icon: Shuffle,
    description: 'Generate diverse random tables for creative prompts, world-building details, name lists, and inspiration engines across any domain.',
    prompts: [
      {
        tag: 'Names',
        title: 'Name Generator by Culture',
        prompt: `Build a Perchance name generator with culturally distinct naming traditions:

Create separate name lists for:
Northern/Viking style: harsh consonants, short names, patronymics (e.g., "Bjorn", "Astrid", "Valdis")
Mediterranean/Classical: flowing vowels, dignity, historical gravitas (e.g., "Caius", "Lyra", "Theron")
East Asian inspired: meaningful syllable combinations, family name first option
Middle Eastern inspired: classical Arabic-influenced sounds, dignified
Celtic inspired: complex spellings, musical quality, nature references
African-inspired: varied by region, powerful sounds, name meaning integration
Fantasy original: invented names that feel real and pronounceable, not random letters

For each name:
- First name
- Optional surname or clan name
- A meaning or translation hint (optional, adds depth)

Output: pairs of names formatted as "[First] [Last] — [brief meaning or note]"`,
      },
      {
        tag: 'Details',
        title: 'World Detail Microgenerator',
        prompt: `Create a Perchance generator for small, specific world-building details that make fictional worlds feel real:

Categories of micro-details to generate:
Overheard conversations: 2-sentence snippets of dialogue between unnamed background characters
Street signs and notices: proclamations, wanted posters, shop names, graffiti, church announcements
Fashion details: what people are wearing in this era/culture (fabrics, colours, status markers)
Food stall offerings: what street food vendors are selling, with prices in-world currency
Local superstitions: folk beliefs, lucky or unlucky omens, local customs
News and rumours: what the town gossip is currently talking about
Weather notes: specific atmospheric descriptions tied to location and season
Sounds and smells: what an arriving visitor experiences sensory-first

Output: a "scene texture pack" — 8-10 micro-details that a writer or DM can drop into any scene to make it feel lived-in and authentic`,
      },
      {
        tag: 'Prompts',
        title: 'Creative Writing Prompt Generator',
        prompt: `Design a Perchance generator for creative writing prompts across genres:

Prompt types to include:
Opening line prompts: a first sentence that demands continuation
Character + situation prompts: "[CHARACTER TYPE] discovers [THING] in [PLACE]"
Conflict prompts: two opposing forces that cannot both win
Setting prompts: a vivid place described in one sentence
Theme prompts: an abstract concept to explore through story
Dialogue prompts: a line of dialogue with no context — who is saying it and why?
Genre mashup prompts: [GENRE A] story but with [GENRE B] element
Constraint prompts: write a story in which [UNUSUAL RULE APPLIES]

For each prompt:
- The prompt itself (1-2 sentences maximum)
- A genre suggestion (optional — leave blank for open interpretation)
- One unexpected direction this prompt could go

Output: 5 diverse prompts per generation, covering different genres and styles`,
      },
    ],
  },
  {
    title: 'Creative Writing Prompts',
    icon: Sparkles,
    description: 'Use Perchance to power randomised creative writing inspiration, story starters, and imaginative content generators.',
    prompts: [
      {
        tag: 'Story Starter',
        title: 'Random Story Starter Generator',
        prompt: `Build a Perchance generator that creates complete story starters by combining random elements:

The generator should randomly assemble:
Opening setting (5 options per type):
- Time period: (medieval / Victorian / near future / present day / post-apocalyptic)
- Location: (a train / a lighthouse / an abandoned school / a spaceship / a royal court)
- Atmosphere: (storm-dark / golden afternoon / deep winter night / scorching noon / eerie fog)

Character element:
- Protagonist type: (a grieving widow / a disgraced detective / a young apprentice / a retired soldier / a street kid)
- Their unusual skill or gift: (can hear lies / never forgets a face / talks to animals / sees 10 minutes into the future)

Inciting element:
- What arrives or is discovered: (a locked box / a stranger / a letter / a body / a message from the past)

Opening line formula: "[ATMOSPHERE] [LOCATION], [PROTAGONIST] [DISCOVERS/ENCOUNTERS] [INCITING ELEMENT]."

Output: complete 2-paragraph story starter that flows naturally from the combined random elements
Ensure the opening is specific and immediate — no vague scene-setting`,
      },
      {
        tag: 'Dialogue',
        title: 'Random Dialogue Generator',
        prompt: `Create a Perchance generator for random dialogue exchanges between two characters:

Each generated dialogue scene should include:
- Two character archetypes (from a list of 20+ archetypes: mentor, trickster, skeptic, believer, authority figure, rebel, etc.)
- Their relationship (strangers, old friends, enemies, employer/employee, parent/child, rivals, secret allies)
- The surface topic they are discussing (something mundane or professional)
- The real topic underneath (what they are really trying to say or avoid saying)
- An emotion one character is hiding
- A line one character should NOT say but almost does

Output: a 200-word dialogue scene demonstrating subtext — what they say is different from what they mean
Format: screenplay-style dialogue with character names and minimal stage directions
The scene should end without resolving the underlying tension`,
      },
      {
        tag: 'Scene Setting',
        title: 'Random Scene & Setting Generator',
        prompt: `Design a Perchance generator for atmospheric scene settings:

The generator creates scene settings by combining:
Environment type (20 options): forest, city rooftop, underground cave, train carriage, hospital waiting room, medieval tavern, space station, beach at dusk, library, crowded market, empty church, submarine, arctic research station
Time of day (weighted: dawn and dusk more atmospheric)
Weather or atmosphere (clear / stormy / foggy / oppressive heat / blizzard / unnaturally still)
Sound detail (specific ambient sound — rain on glass / distant bells / indistinct voices / total silence / machinery hum)
Light quality (harsh fluorescent / warm candlelight / grey overcast / golden hour / moonlight / bioluminescent glow)
One unexpected detail (something slightly wrong or unusual about this scene)
One point of potential danger or tension

Output: a 150-word scene-setting description that could open a chapter or scene
Written in present tense, second person ("You step into...")
Include sensory details beyond just visual — make the reader feel present`,
      },
    ],
  },
];

const faqs = [
  {
    question: 'What is Perchance AI and how does it work?',
    answer: 'Perchance is a free online platform for building text-based random generators using a simple syntax. Users create generators by defining lists of items and combining them with nested structures, conditionals, and weighted probability. The platform also has an AI-powered mode where you can use natural language prompts to have an AI help create or enhance generators. Perchance is widely used by tabletop RPG players, writers, game designers, and creative hobbyists.',
  },
  {
    question: 'What is Perchance AI Image Generator?',
    answer: 'Perchance AI Image Generator is a free AI image generation tool available on Perchance.org that allows users to generate images using a simple interface, with no account required for basic use. It uses diffusion-based AI models and is popular because of its accessibility, no-cost option, and the ability to customise prompts. It is particularly popular among hobbyists, writers creating character visualisations, and users who want free image generation without the complexity of tools like Midjourney.',
  },
  {
    question: 'How do I create a Perchance generator?',
    answer: 'To create a Perchance generator: go to Perchance.org and click "Create Generator". Define lists using the simple syntax: list name on one line followed by items indented below it. Reference lists using {listName} in your output template. For example, a simple character generator might have a "names" list and a "traits" list, combined in an output template like "{names} is {traits}". The AI Generator Assistant on Perchance can help you build more complex generators from natural language descriptions.',
  },
  {
    question: 'What are Perchance generators used for?',
    answer: 'Perchance generators are used for: tabletop RPG content (character generators, dungeon rooms, plot hooks, NPC generators, loot tables), creative writing inspiration (story starters, character concepts, random prompts), game development (procedural content, game world elements), world-building (names, cultures, geography), teaching and education (random scenario generators for activities), and entertainment (fun randomisers for any topic). The platform has thousands of community-created generators you can use directly.',
  },
  {
    question: 'What is the Perchance syntax for nested generators?',
    answer: 'Perchance uses a simple indented list format. Lists are defined by a name followed by items on new indented lines. To reference another list within a list item, use {listName} syntax. For weighted probability, you can add a number followed by a colon before an item (e.g., "3: common item" appears 3x as often as "rare item"). Nested generators allow one list to reference another, creating complex combinations. The [[rare:1]] syntax can create very rare results.',
  },
  {
    question: 'Is Perchance AI Image Generator free?',
    answer: 'Perchance AI Image Generator is free to use with some limitations on generation speed and queue priority. Free users can generate images without an account but may experience slower generation times during peak usage. The platform has optional premium features or credits for faster generation. Unlike many AI image generators, it does not require a credit card for basic use, making it one of the most accessible free AI image tools available.',
  },
  {
    question: 'How do I make better Perchance AI image prompts?',
    answer: 'For Perchance AI Image Generator, effective prompts follow the same principles as other diffusion model prompts: describe subject, style, lighting, and mood specifically. Include art style references (digital art, anime, oil painting, photorealistic), describe lighting conditions, specify the composition, and add quality modifiers like "highly detailed", "8K resolution", or "trending on ArtStation". Negative prompts (specifying what NOT to include) are particularly important — use them to avoid common issues like blurry faces, extra limbs, or unwanted watermarks.',
  },
  {
    question: 'What makes Perchance different from ChatGPT for random content?',
    answer: 'Perchance and ChatGPT serve different use cases. Perchance is designed for repeatable random generation from predefined lists — you build the generator once and use it forever, getting instant random results with a click. ChatGPT generates text freshly each time using probabilistic language modelling. Perchance is better for: consistent random tables, quick one-click generation, shared community generators, and RPG table tools. ChatGPT is better for: generating entirely original content, complex narrative text, and tasks requiring language understanding.',
  },
  {
    question: 'Can Perchance generators be shared publicly?',
    answer: 'Yes — one of the best features of Perchance is that generators can be published publicly and shared via URL. The platform has a large library of community-created generators covering almost every creative domain. You can also fork (copy and modify) public generators. This community aspect makes it valuable beyond just building your own — you can find and use thousands of generators others have already built for RPGs, writing, naming, character creation, and more.',
  },
  {
    question: 'How do I add weighted probability to a Perchance generator?',
    answer: 'In Perchance, you add weighted probability by putting a number followed by a colon before a list item. For example, in a treasure list, "10: copper coins" would appear ten times more often than "1: magic sword". This is useful for creating realistic rarity distributions — common results appear frequently, rare results appear occasionally. You can also use the [[rare:N]] syntax within text to make specific phrases appear only once in every N generations, creating very rare outcomes.',
  },
];

export default function PerchanceAIPromptsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Perchance AI Prompts — Characters, World Building & Random Tables',
    description: 'Copy-ready prompts for Perchance AI generators. Character creation, fantasy world building, RPG content, random tables, and creative writing prompts.',
    author: { '@type': 'Organization', name: 'GPTPrompts.AI' },
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen text-white" style={{ background: '#010602' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-4" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
            <Shuffle size={12} /> Random Generator Platform
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Perchance AI Prompts</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Copy-ready prompts for Perchance generators. Character creation, fantasy world building, RPG tables, story starters, and creative content generation.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.title} className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg" style={{ background: `${accent}15` }}>
                  <Icon size={18} style={{ color: accent }} />
                </div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              <p className="text-gray-400 text-sm mb-5 ml-11">{section.description}</p>
              <div className="grid gap-4">
                {section.prompts.map(p => <CopyCard key={p.title} {...p} />)}
              </div>
            </div>
          );
        })}

        {/* Reference: Perchance vs Other Generators */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-2">Perchance vs Other AI Generators</h2>
          <p className="text-gray-400 text-sm mb-5">How Perchance compares to other tools for creative and random content generation.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Perchance', strength: 'Free, shareable generators, community library, instant random results', best: 'RPG tables, random generators, hobbyist use' },
              { name: 'ChatGPT', strength: 'Original language generation, complex instructions, versatile', best: 'Unique narrative content, complex writing tasks' },
              { name: 'Claude', strength: 'Nuanced writing, long context, excellent instruction following', best: 'Detailed character development, complex world-building' },
              { name: 'NovelAI', strength: 'Fiction-specific, story memory, anime image generation', best: 'Ongoing serialised fiction, anime-style content' },
              { name: 'Sudowrite', strength: 'Novel writing tools, beat sheets, story bibles', best: 'Serious fiction writers, novel drafting' },
              { name: 'AI Dungeon', strength: 'Interactive collaborative storytelling, multiplayer', best: 'Interactive fiction, co-op storytelling, game play' },
            ].map(tool => (
              <div key={tool.name} className="rounded-lg border p-4" style={{ borderColor: borderCol, background: bgDark }}>
                <div className="font-semibold text-white mb-1">{tool.name}</div>
                <div className="text-xs text-gray-400 mb-2">{tool.strength}</div>
                <div className="text-xs font-medium" style={{ color: accent }}>Best for: {tool.best}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Perchance Syntax Reference */}
        <div className="mb-12 rounded-lg border p-6" style={{ borderColor: borderCol, background: bgDark }}>
          <h2 className="text-lg font-bold text-white mb-1">Perchance Generator Syntax Reference</h2>
          <p className="text-gray-400 text-sm mb-4">Essential syntax for building Perchance generators.</p>
          <pre className="text-sm leading-relaxed font-mono p-4 rounded-lg overflow-x-auto" style={{ background: '#010502', color: '#22C55E' }}>{`// Basic list definition:
output
  {adjective} {noun} appeared in the {location}

adjective
  ancient
  mysterious
  glowing
  forgotten

noun
  sword
  tome
  crystal
  map

// Weighted probability (appears 3x more often):
treasure
  3: gold coins (common)
  2: silver cup (uncommon)
  1: magic ring (rare)

// Nested reference:
character
  A {class} named {name} who is {trait}

class
  warrior
  mage
  rogue

// Very rare result (appears 1 in 20 times):
special
  [[rare:20]] a legendary artefact of immense power
  an interesting item

// Conditional output:
weapon
  [name] carries a {weaponType} {if: class == 'mage'} staff {/if}
  {if: class == 'warrior'} sword {/if}`}</pre>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3">
            {faqs.map(item => <FAQ key={item.question} item={item} />)}
          </div>
        </div>

        {/* Related Pages */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Related Prompt Guides</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'AI Story Generator Prompts', href: '/ai-story-generator-prompts' },
              { label: 'AI Text Generator Prompts', href: '/ai-text-generator-prompts' },
              { label: 'Bing AI Image Generator Prompts', href: '/bing-ai-image-generator-prompts' },
              { label: 'Ideogram AI Prompts', href: '/ideogram-ai-prompts' },
              { label: 'AI Music Generator Prompts', href: '/ai-music-generator-prompts' },
              { label: 'Luma AI Prompts', href: '/luma-ai-prompts' },
              { label: 'Pika AI Prompts', href: '/pika-ai-prompts' },
              { label: 'AI Prompts for Education', href: '/ai-prompts-for-education' },
            ].map(link => (
              <a key={link.href} href={link.href} className="text-sm px-3 py-1.5 rounded-full border transition-colors" style={{ borderColor: borderCol, color: '#9ca3af' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${accent}50`; (e.currentTarget as HTMLAnchorElement).style.color = accent; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = borderCol; (e.currentTarget as HTMLAnchorElement).style.color = '#9ca3af'; }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
