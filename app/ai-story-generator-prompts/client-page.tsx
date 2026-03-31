'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, BookOpen, User, Map, Wand2, MessageSquare, Layers } from 'lucide-react';

const accent = '#8B5CF6';
const borderCol = '#1a0a2e';
const bgDark = '#040308';

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
    title: 'Story Concepts & Opening Hooks',
    icon: BookOpen,
    description: 'Generate compelling story concepts, high-concept premises, and opening lines that immediately pull readers into your narrative.',
    prompts: [
      {
        tag: 'Concept',
        title: 'High-Concept Story Premise Generator',
        prompt: `Generate 5 original high-concept story premises for [GENRE]:

For each premise provide:
1. The one-sentence logline (X meets Y in a world where Z)
2. The central conflict (what does the protagonist want vs. what stands in the way?)
3. The emotional core (what universal human experience does this story explore?)
4. The unique hook (what makes this story unlike anything readers have seen?)
5. Potential title (evocative and memorable)

Constraints:
- Each premise should be distinct in tone and setting
- At least one should have a twist on a familiar premise
- At least one should be set in an unexpected time period or location
- Avoid clichés unless subverting them deliberately

Genre: [FANTASY / SCI-FI / THRILLER / ROMANCE / LITERARY FICTION / HORROR / etc.]`,
      },
      {
        tag: 'Opening',
        title: 'Story Opening Hook Generator',
        prompt: `Write 5 different opening paragraphs for a story with this premise:
[DESCRIBE YOUR STORY PREMISE IN 2-3 SENTENCES]

Each opening should use a different technique:
1. In medias res — drop us into the middle of action
2. Character voice — establish a distinctive first-person narrator immediately
3. World-building hook — make the world so strange or compelling we must know more
4. Atmospheric — mood and setting before plot
5. Philosophical — an observation or question that frames the whole story

For each opening, write 100-150 words and note:
- What technique is used and why it works for this story
- What question it plants in the reader's mind
- The emotional tone it establishes`,
      },
      {
        tag: 'Concept',
        title: 'Genre Mashup Story Concept',
        prompt: `Create a story concept that combines these two genres in an unexpected way:
Genre 1: [GENRE A — e.g., "cosy mystery"]
Genre 2: [GENRE B — e.g., "solarpunk sci-fi"]

Generate a concept that:
1. Takes the core pleasures of Genre A seriously (what readers love about it)
2. Takes the core pleasures of Genre B seriously (what readers love about it)
3. Creates a setting or premise where both genres feel organic — not forced
4. Introduces a protagonist who belongs in both worlds
5. Identifies the central conflict that can only happen at this genre intersection

Deliver:
- Story title and 50-word pitch
- 3-paragraph synopsis covering beginning, middle, and end
- The tone/voice recommendation
- Comparable works (books or films) for readers to understand the feel`,
      },
    ],
  },
  {
    title: 'Character Development',
    icon: User,
    description: 'Create fully-realised characters with depth, contradictions, compelling backstories, and authentic motivations.',
    prompts: [
      {
        tag: 'Character',
        title: 'Deep Character Profile Generator',
        prompt: `Create a comprehensive character profile for my story:

Story context: [GENRE AND BRIEF PREMISE]
Character role: [PROTAGONIST / ANTAGONIST / SUPPORTING CHARACTER]
Gender, age, approximate appearance: [OPTIONAL — LEAVE BLANK FOR AI TO DECIDE]

Generate a complete character profile covering:
1. Name and its significance or backstory
2. Core desire (what they want more than anything)
3. Core fear (what they are most afraid of)
4. Fatal flaw (the weakness that will create the central conflict)
5. Backstory (the formative events that created this person — focus on wounds and turning points)
6. Contradictions (the tensions within this character that make them interesting)
7. Relationships (key people in their life and the dynamic with each)
8. Voice and speech patterns (how they talk, distinctive phrases, what they never say)
9. Arc potential (how should this character change by the story's end?)
10. Dark secret (something they have never told anyone)`,
      },
      {
        tag: 'Antagonist',
        title: 'Compelling Villain Creator',
        prompt: `Create a villain/antagonist for my story who is genuinely compelling:
Genre: [GENRE]
Story theme: [WHAT YOUR STORY IS ABOUT THEMATICALLY]
Protagonist: [BRIEF DESCRIPTION OF YOUR MAIN CHARACTER]

The villain should:
1. Have a coherent worldview — their actions make sense from their own perspective
2. Share something in common with the protagonist (a mirror or dark reflection)
3. Have understandable motivations even if their methods are wrong
4. Represent the thematic "argument" opposite to the protagonist's

Provide:
- Character name and role in the story
- Core belief that drives all their actions
- Origin story: what happened to make them this way?
- Their "lie" — the false belief at the heart of their villainy
- Why they believe they are the hero of their own story
- Three scenes that would show their full complexity to the reader`,
      },
      {
        tag: 'Arc',
        title: 'Character Arc Planner',
        prompt: `Plan a complete character arc for [CHARACTER NAME] across my story:
Genre and length: [GENRE] — [NOVEL / SHORT STORY / SERIES]
Current state at story start: [WHO IS THIS CHARACTER NOW — BELIEFS, FLAWS, WOUNDS]
Desired state at story end: [WHO SHOULD THEY BECOME]
Key theme: [WHAT DOES THIS ARC ILLUSTRATE THEMATICALLY]

Map the arc with these beats:
1. Opening state: who they are, what they believe, what they are hiding from
2. The inciting wound: what past trauma or wound drives current behaviour
3. First crack: the moment their worldview is first challenged
4. Midpoint shift: what forces them to confront their truth at the story's middle
5. Dark night of the soul: their lowest point and what it costs them
6. Breakthrough: the moment of genuine internal change
7. New state: who they are at the end — what has changed and what remains the same`,
      },
    ],
  },
  {
    title: 'Plot Structure & Conflict',
    icon: Layers,
    description: 'Map out compelling plot structures, escalating conflict sequences, and story arcs that keep readers turning pages.',
    prompts: [
      {
        tag: 'Plot',
        title: 'Three-Act Structure Outline',
        prompt: `Create a three-act story outline for:
Premise: [YOUR STORY CONCEPT]
Protagonist: [BRIEF CHARACTER DESCRIPTION]
Genre: [GENRE]
Theme: [WHAT THE STORY IS ABOUT AT ITS CORE]

Outline with story beats:
ACT ONE (Setup — 25% of story):
- Opening image and world establishment
- Protagonist introduction in their ordinary world
- Inciting incident (what disrupts the ordinary)
- Protagonist's refusal or hesitation
- First plot point: the point of no return

ACT TWO (Confrontation — 50% of story):
- New world/situation — protagonist is out of their element
- Rising complications and escalating stakes
- Midpoint reversal (something changes the game)
- All is lost moment — the worst thing happens
- Dark night of the soul

ACT THREE (Resolution — 25% of story):
- The breakthrough — protagonist finds their solution
- Climax — the final confrontation
- Resolution — aftermath and new equilibrium
- Closing image (mirror or contrast to opening)`,
      },
      {
        tag: 'Conflict',
        title: 'Conflict Escalation Sequence',
        prompt: `Design an escalating conflict sequence for my story:
Story premise: [DESCRIBE YOUR STORY]
Protagonist's goal: [WHAT THEY WANT]
Main obstacle: [WHO OR WHAT STANDS IN THEIR WAY]
Genre: [GENRE]

Create a 10-step conflict escalation:
Steps 1-3: LOW STAKES — early obstacles that introduce conflict but feel manageable
Steps 4-6: MEDIUM STAKES — obstacles that force real sacrifice and difficult choices
Steps 7-8: HIGH STAKES — the protagonist loses something they cannot get back
Step 9: CRISIS — the worst possible moment, everything seems lost
Step 10: RESOLUTION — how the conflict is finally resolved (victory, defeat, or bittersweet)

For each step: describe the specific obstacle, what it costs the protagonist, and how it raises the stakes for the next step.`,
      },
      {
        tag: 'Subplot',
        title: 'Subplot Weaver',
        prompt: `Design 2-3 subplots that weave with my main story:
Main plot: [DESCRIBE YOUR MAIN STORY IN 2-3 SENTENCES]
Main character: [BRIEF DESCRIPTION]
Theme: [STORY'S CENTRAL THEME]

For each subplot:
1. Introduce a subplot involving [secondary character, relationship, or parallel situation]
2. Explain how it connects to the main theme (should comment on or complicate the theme)
3. Map 4 key subplot beats that intersect with the main plot
4. Describe how the subplot resolves — ideally in a way that amplifies the main plot's climax
5. Explain what this subplot reveals about the protagonist that the main plot cannot show

Ensure subplots do not overshadow the main plot but enrich it meaningfully.`,
      },
    ],
  },
  {
    title: 'World Building & Setting',
    icon: Map,
    description: 'Construct rich, detailed fictional worlds with history, culture, geography, rules, and atmosphere.',
    prompts: [
      {
        tag: 'Fantasy World',
        title: 'Fantasy World Builder',
        prompt: `Build a detailed fantasy world for my story:
Story type: [EPIC FANTASY / DARK FANTASY / PORTAL FANTASY / LOW FANTASY]
Tone: [GRIMDARK / HOPEFUL / WHIMSICAL / MYTHIC]
Inspirations: [LIST ANY REAL-WORLD CULTURES, MYTHOLOGIES, OR WORLDS THAT INSPIRE YOU]

Design the world across these dimensions:
1. Geography: the physical landscape (continents, climate zones, notable landmarks)
2. History: 3-4 key historical events that shaped the current world
3. Power structures: who rules and how (political systems, factions, conflicts)
4. Magic system: how magic works, its rules, costs, and who can use it
5. Culture and society: how ordinary people live, social hierarchies, beliefs
6. Religion and mythology: what people believe and worship, creation myths
7. Economy: how trade works, what is scarce, what is valuable
8. The central conflict of this world: the tension that your story emerges from`,
      },
      {
        tag: 'Setting',
        title: 'Atmospheric Setting Description',
        prompt: `Write a vivid atmospheric description of [SETTING NAME]:
Setting type: [CITY / VILLAGE / FOREST / SPACE STATION / UNDERWATER KINGDOM / etc.]
Mood: [THREATENING / MYSTERIOUS / WELCOMING / DECAYING / ELECTRIC / SACRED]
Time of day: [DAWN / MIDDAY / DUSK / NIGHT]
Season or weather: [SPECIFY]
POV character's emotional state: [HOW ARE THEY FEELING AS THEY ENTER THIS SPACE]

Write a 200-300 word setting description that:
- Engages all 5 senses (sight, sound, smell, touch, taste where relevant)
- Reveals something about the world beyond just physical description
- Reflects the POV character's emotional state through selective detail
- Plants 1-2 intriguing details that could become plot-relevant later
- Uses specific nouns (not "a tree" — "a gnarled oak") and active, unusual verbs`,
      },
      {
        tag: 'Sci-Fi World',
        title: 'Science Fiction World Builder',
        prompt: `Design a science fiction world for my story:
Sub-genre: [SPACE OPERA / CYBERPUNK / SOLARPUNK / HARD SCI-FI / DYSTOPIA / BIOPUNK]
Time period: [NEAR FUTURE / FAR FUTURE / ALTERNATE HISTORY]
Central technology: [WHAT TECHNOLOGY DEFINES THIS WORLD]

Build the world across these elements:
1. The central technological development and its social consequences
2. Political landscape: what governments, corporations, or factions hold power?
3. Social stratification: who benefits from the technology and who is left behind?
4. Daily life for ordinary people (not the heroes — what is Tuesday like?)
5. The central crisis or tension threatening this world
6. The specific place(s) where the story takes place (with distinct atmosphere)
7. One element that makes this world feel lived-in and specific
8. The unique threat or wonder this world offers that no other setting provides`,
      },
    ],
  },
  {
    title: 'Dialogue & Voice',
    icon: MessageSquare,
    description: 'Write authentic, character-specific dialogue, develop distinct narrative voices, and craft meaningful conversations that advance story.',
    prompts: [
      {
        tag: 'Dialogue',
        title: 'Subtext-Rich Dialogue Scene',
        prompt: `Write a dialogue scene between two characters where what they say is not what they mean:

Characters:
Character A: [NAME, ROLE, EMOTIONAL STATE IN THIS SCENE]
Character B: [NAME, ROLE, EMOTIONAL STATE IN THIS SCENE]

What they really want from this conversation:
Character A really wants: [TRUE WANT]
Character B really wants: [TRUE WANT]

Topic they are ostensibly discussing: [SURFACE TOPIC — e.g., "planning a dinner party"]
The real tension: [WHAT THIS CONVERSATION IS ACTUALLY ABOUT]

Write a 300-400 word dialogue scene where:
- Neither character says what they really feel
- The subtext is readable but not stated
- At least one beat of near-confession that is deflected
- The scene ends without the real issue resolved
- Each character has a distinct voice (different vocabulary, sentence length, emotional register)`,
      },
      {
        tag: 'Voice',
        title: 'Narrative Voice Developer',
        prompt: `Develop a distinctive narrative voice for my story's protagonist:
Character: [BRIEF DESCRIPTION — age, background, personality, worldview]
Genre: [GENRE]
Tense: [PAST / PRESENT]
Person: [FIRST PERSON / THIRD PERSON LIMITED / THIRD OMNISCIENT]
Tone: [DARKLY HUMOROUS / LYRICAL / MATTER-OF-FACT / UNRELIABLE / EARNEST]

Write three 150-word sample passages of this voice:
1. Describing an ordinary, mundane moment (morning routine or commute)
2. Describing something beautiful or emotionally moving
3. Describing something frightening or confusing

For each: highlight specific word choices, sentence structures, and rhythms that define this voice
After the three passages, provide a "voice guide" — 5 rules for maintaining this voice consistently`,
      },
      {
        tag: 'Conflict',
        title: 'Argument Scene with Character Revelation',
        prompt: `Write an argument scene that reveals character:
Who is arguing: [CHARACTER A] vs. [CHARACTER B]
Relationship: [HOW THEY KNOW EACH OTHER]
Surface cause of argument: [WHAT THE ARGUMENT IS OSTENSIBLY ABOUT]
Deeper cause: [THE REAL ISSUE UNDERNEATH]
What each character reveals under pressure:
- Character A reveals: [A TRUTH OR FLAW OR FEAR]
- Character B reveals: [A TRUTH OR FLAW OR FEAR]
Stakes: [WHAT IS AT RISK IF THIS ARGUMENT GOES BADLY]

Write a 400-500 word argument scene where:
- The argument escalates in 3 stages (simmering, open conflict, breaking point)
- Each character says something they cannot take back
- The scene ends in a way that changes their relationship permanently
- Physical action and setting detail ground the emotional intensity`,
      },
    ],
  },
  {
    title: 'Genre-Specific Storytelling',
    icon: Wand2,
    description: 'Tailored story prompts for fantasy, thriller, romance, horror, literary fiction, and other specific genres with genre-appropriate techniques.',
    prompts: [
      {
        tag: 'Thriller',
        title: 'Thriller Scene with Rising Dread',
        prompt: `Write a thriller scene that builds dread and tension:
Setting: [WHERE THIS SCENE TAKES PLACE]
Protagonist: [WHO WE FOLLOW]
Threat: [WHAT THE PROTAGONIST FEARS IS HAPPENING]
What the protagonist knows: [LIMITED INFORMATION THEY HAVE]
What we (the reader) suspect: [THE BROADER THREATENING PICTURE]

Write a 400-word scene that:
- Starts in apparent safety that slowly feels wrong
- Uses physical sensations to build dread (cold, sounds, smells)
- Employs pacing — short urgent sentences as tension rises
- Includes one moment of false relief that makes things worse
- Ends on a cliffhanger or revelation that escalates the threat
- Uses what is NOT shown as much as what is shown

Avoid: gore for shock value, stating emotions outright ("she felt afraid") — show them instead.`,
      },
      {
        tag: 'Romance',
        title: 'Romance Tension Builder Scene',
        prompt: `Write a romantic tension scene between two characters who have not yet admitted their feelings:
Character 1: [NAME, BRIEF DESCRIPTION]
Character 2: [NAME, BRIEF DESCRIPTION]
Relationship status: [HOW THEY KNOW EACH OTHER — rivals, friends, strangers, exes]
Setting: [WHERE THIS SCENE TAKES PLACE]
The obstacle preventing them from acting on their feelings: [WHAT KEEPS THEM APART]

Write a 350-400 word scene with:
- Charged physical awareness (every small movement noticed)
- A moment of almost-confession that is interrupted or redirected
- Conflicting internal monologue (what they want vs. what they allow themselves to show)
- Environmental or incidental mirroring (setting reflects internal state)
- A closing image or beat that leaves both characters — and the reader — wanting more

Tone: [SLOW BURN / PLAYFUL BANTER / ANGSTY / SWEET]`,
      },
      {
        tag: 'Literary',
        title: 'Literary Fiction Quiet Moment',
        prompt: `Write a quiet, literary fiction scene focused on interiority and observation:
Character: [WHO WE FOLLOW]
Setting: [AN ORDINARY PLACE — kitchen, waiting room, garden, bus stop]
Surface activity: [WHAT THEY ARE PHYSICALLY DOING — mundane task]
Internal experience: [WHAT THEY ARE THINKING OR FEELING BENEATH THE SURFACE]
Theme the scene should quietly explore: [E.g., "the passage of time", "loneliness in family", "small freedoms"]

Write a 300-350 word scene where:
- Nothing dramatic happens externally
- The prose does the emotional heavy lifting
- Specific, sensory detail grounds abstract feeling
- One small, precise observation illuminates something universal
- The ending contains an unspoken realisation rather than a plot turn
Style: evocative, spare, precise — influences: Raymond Carver, Alice Munro, Kazuo Ishiguro`,
      },
    ],
  },
];

const faqs = [
  {
    question: 'What is the best AI story generator?',
    answer: 'The best AI story generators in 2025 include ChatGPT (GPT-4o) for versatile long-form storytelling and plot development, Claude for nuanced literary fiction and character depth, Sudowrite for dedicated creative fiction tools (beat sheets, story bibles, prose improvement), NovelAI for genre fiction and anime-style narratives, and AI Dungeon for interactive collaborative storytelling. The best choice depends on your genre, how much control you want, and whether you prefer a tool built specifically for fiction.',
  },
  {
    question: 'How do I write good prompts for AI story generators?',
    answer: 'The most effective story generator prompts include: genre and tone, character description with core desire and flaw, setting with specific atmosphere, the central conflict, emotional core (what universal experience the story explores), and reference works for style. The more specific context you give — particularly around character psychology and emotional stakes — the more resonant and original the AI output will be. Avoid generic prompts like "write a fantasy story" and instead provide the specific premise.',
  },
  {
    question: 'Can AI write a complete novel?',
    answer: 'AI can generate substantial amounts of novel-length text, but a complete, coherent, emotionally resonant novel still requires significant human authorial involvement. AI is excellent for: generating drafts quickly, overcoming writer\'s block, developing plot structures and character arcs, writing specific scenes, and editing existing prose. Most AI-assisted novels use the author as the creative director — planning, prompting, editing, and revising — rather than simply accepting raw AI output as the final product.',
  },
  {
    question: 'What story structures work best with AI generators?',
    answer: 'AI story generators respond well to clearly defined story structures because they provide scaffolding for the output. The Three-Act Structure (Setup, Confrontation, Resolution), Save the Cat beat sheet, and the Hero\'s Journey are all effective frameworks to reference in your prompts. When you specify the structure explicitly — "this is the Act 2 midpoint scene where X happens" — AI generators produce more purposeful, structurally coherent output than open-ended generation.',
  },
  {
    question: 'How do I maintain consistency in AI-generated stories?',
    answer: 'Consistency is one of the main challenges with AI story generation. Best practices include: maintaining a "story bible" document with character profiles, world-building rules, and plot notes that you paste into each session; using the same AI session for related scenes where possible; explicitly referencing earlier events in your prompts ("continuing from where X happened in Chapter 3"); and doing a consistency editing pass as a dedicated revision stage. Some tools like Sudowrite have built-in consistency checking features.',
  },
  {
    question: 'Can AI help me overcome writer\'s block?',
    answer: 'Yes — this is one of the most practical applications of AI story generators. Techniques that work well: asking for 5 different ways a scene could go (then choosing one), generating character backstory you had not planned (which often unlocks new directions), asking the AI to identify what feels "stuck" about a scene and suggest alternatives, using AI to write a rough placeholder draft that you then rewrite in your own voice, and asking for "what would happen if X character did the opposite of what they normally would".',
  },
  {
    question: 'Are AI-generated stories copyright protected?',
    answer: 'The copyright status of AI-generated content is still being defined by courts and legislation worldwide. As of 2025, in most jurisdictions purely AI-generated text without sufficient human creative input is not copyrightable. However, stories where a human author provides substantial creative direction, editing, and original contributions may qualify for copyright protection covering those human-authored elements. If you plan to publish AI-assisted work commercially, consult a publishing lawyer and check the terms of service of the specific AI tool you are using.',
  },
  {
    question: 'What genres are AI story generators best at?',
    answer: 'AI story generators tend to perform best at: genre fiction with established conventions (fantasy, science fiction, romance, thriller), fan fiction, short-form stories, horror, and adventure. They can struggle more with highly literary, experimental, or minimalist fiction that relies on subtle stylistic nuance. They are also strong at generating plot mechanics, world-building details, and action sequences, but may produce flatter emotional resonance in quiet, character-driven literary scenes — which typically benefit most from human revision.',
  },
  {
    question: 'How long should my story prompts be?',
    answer: 'For AI story generators, longer and more specific prompts generally produce better output — up to a point. A good story prompt is typically 100-300 words for a scene, providing: the genre and tone, character descriptions with specific psychological detail, the setting, what happens in the scene and why it matters to the story, the emotional state of the POV character, and any specific stylistic notes. Ultra-short prompts ("write a fantasy story about a hero") produce generic results. Ultra-long prompts with contradictory instructions can confuse the output.',
  },
  {
    question: 'Should I use first-person or third-person for AI story generation?',
    answer: 'Both work well, with some differences: first-person narration tends to produce stronger, more distinctive voice and interiority — the AI commits to a persona. Third-person limited is versatile and often easier to maintain consistency with across a longer work. Third-person omniscient can feel old-fashioned in AI output if not carefully directed. Specify your choice explicitly in the prompt. If you are experimenting, generate the same scene in both perspectives and choose the one that resonates more with your story\'s needs.',
  },
];

export default function AIStoryGeneratorPromptsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best AI Story Generator Prompts — Characters, Plot & World Building',
    description: 'Copy-ready prompts for AI story generators. Character development, plot structure, world building, dialogue, and genre-specific storytelling techniques.',
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
    <div className="min-h-screen text-white" style={{ background: '#030207' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-4" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
            <BookOpen size={12} /> AI Story Generation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">AI Story Generator Prompts</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Copy-ready prompts for generating characters, plots, worlds, dialogue, and complete stories across every genre.
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

        {/* Reference: Story Structure Frameworks */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-2">Story Structure Frameworks</h2>
          <p className="text-gray-400 text-sm mb-5">Reference these frameworks in your AI story prompts for structurally coherent narratives.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Hero's Journey", structure: '12 stages from ordinary world to return with elixir', best: 'Epic fantasy, adventure, coming-of-age' },
              { name: '3-Act Structure', structure: 'Setup (25%), Confrontation (50%), Resolution (25%)', best: 'Most genres — universal and flexible' },
              { name: '5-Act Structure', structure: 'Exposition, Rising Action, Climax, Falling Action, Denouement', best: 'Drama, literary fiction, stage adaptations' },
              { name: "Freytag's Pyramid", structure: 'Introduction → Rising Action → Climax → Falling Action → Catastrophe', best: 'Tragedy and classical drama' },
              { name: 'Save the Cat', structure: '15 beats including Fun & Games, Dark Night of the Soul, Finale', best: 'Screenwriting, commercial fiction, thriller' },
              { name: "Virgin's Promise", structure: 'Heroine\'s inner journey: dependent world → secret world → cost of conformity → kingdom in chaos → wounding → rescue → return', best: 'Romance, coming-of-age, female-led stories' },
            ].map(fw => (
              <div key={fw.name} className="rounded-lg border p-4" style={{ borderColor: borderCol, background: bgDark }}>
                <div className="font-semibold text-white mb-1">{fw.name}</div>
                <div className="text-xs text-gray-400 mb-2">{fw.structure}</div>
                <div className="text-xs font-medium" style={{ color: accent }}>Best for: {fw.best}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Prompt Formula */}
        <div className="mb-12 rounded-lg border p-6" style={{ borderColor: borderCol, background: bgDark }}>
          <h2 className="text-lg font-bold text-white mb-1">Story Generator Prompt Formula</h2>
          <p className="text-gray-400 text-sm mb-4">Use this template for consistently strong AI story generation results.</p>
          <pre className="text-sm leading-relaxed font-mono p-4 rounded-lg overflow-x-auto" style={{ background: '#08030f', color: '#8B5CF6' }}>{`[GENRE] + [TONE/ATMOSPHERE]
[PROTAGONIST]: [NAME], wants [DESIRE], fears [FEAR], flaw: [FATAL FLAW]
[ANTAGONIST or OBSTACLE]: what blocks the protagonist and why
[SETTING]: [SPECIFIC PLACE + TIME + ATMOSPHERE]
[CENTRAL CONFLICT]: protagonist wants X but Y stands in the way
[EMOTIONAL CORE]: what universal human experience does this explore?
[STORY STRUCTURE]: which framework to follow (3-Act, Hero's Journey, etc.)
[STYLE REFERENCE]: write in the style of [AUTHOR] or with the feel of [FILM/BOOK]
[SPECIFIC SCENE]: if generating a scene, describe its exact position in the story
[WORD COUNT]: [SHORT — 500 words / MEDIUM — 1500 words / CHAPTER — 3000 words]

Example:
"Dark fantasy, Gothic tone. Protagonist: Mara, wants to resurrect her sister,
fears she has already become the monster she hunts. Setting: a fog-bound
harbour city in an industrial age. Conflict: the ritual requires a life.
Emotional core: grief and the refusal to let go. 3-Act structure.
Style: V.E. Schwab meets Sarah Waters. Opening scene, 800 words."`}</pre>
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
              { label: 'AI Text Generator Prompts', href: '/ai-text-generator-prompts' },
              { label: 'AI Music Generator Prompts', href: '/ai-music-generator-prompts' },
              { label: 'Perchance AI Prompts', href: '/perchance-ai-prompts' },
              { label: 'ChatGPT Prompts Content Writing', href: '/chatgpt-prompts-content-writing' },
              { label: 'AI Prompts for Education', href: '/ai-prompts-for-education' },
              { label: 'Luma AI Prompts', href: '/luma-ai-prompts' },
              { label: 'Ideogram AI Prompts', href: '/ideogram-ai-prompts' },
              { label: 'Bing AI Image Generator Prompts', href: '/bing-ai-image-generator-prompts' },
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
