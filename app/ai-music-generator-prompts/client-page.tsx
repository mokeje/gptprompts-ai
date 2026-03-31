'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Music, Mic2, Headphones, Radio, Waves, Star } from 'lucide-react';

const accent = '#A855F7';
const borderCol = '#1a0a28';
const bgDark = '#050308';

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
    title: 'Genre & Style Direction',
    icon: Music,
    description: 'Guide AI music generators toward specific genres, sub-genres, and stylistic influences to create music that fits your exact creative vision.',
    prompts: [
      {
        tag: 'Electronic',
        title: 'Dark Synthwave Track',
        prompt: `Generate a dark synthwave track with the following characteristics:
Genre: Synthwave / Darksynth
Tempo: 120-128 BPM
Key: D minor
Duration: 2-3 minutes, no fade — clean ending
Instrumentation: analog synthesiser bass, arpeggiated lead synth, gated reverb snare, TR-808 kick
Influences: Perturbator, Carpenter Brut, John Carpenter film scores
Mood: dystopian, cinematic, driving tension
Structure: 8-bar intro, verse, chorus, breakdown, final chorus, outro
No vocals — pure instrumental`,
      },
      {
        tag: 'Pop',
        title: 'Upbeat Summer Pop Song',
        prompt: `Create an upbeat summer pop track with these specifications:
Genre: Pop / Tropical Pop
Tempo: 118 BPM
Key: G major
Mood: euphoric, carefree, nostalgic
Instrumentation: acoustic guitar, ukulele, electric piano, pop drums, bass, synth pads
Vocal style: female lead, harmonies on chorus, conversational verse delivery
Structure: intro, verse 1, pre-chorus, chorus, verse 2, pre-chorus, chorus, bridge, final chorus
Lyrical themes: summer romance, freedom, living in the moment
Reference: Dua Lipa meets Katy Perry energy`,
      },
      {
        tag: 'Hip-Hop',
        title: 'Boom Bap Hip-Hop Beat',
        prompt: `Produce a classic boom bap hip-hop instrumental:
Genre: Boom Bap / East Coast Hip-Hop
Tempo: 90 BPM
Key: A minor
Era feel: 1990s New York underground
Elements: vinyl-sampled piano loop, dusty drums with heavy snare crack, bass line groove, record scratch accents
Drum pattern: hard-hitting kick on 1 and 3, snare on 2 and 4, hi-hat variations
Atmosphere: gritty, soulful, head-nodding
Duration: 3 minutes with 16-bar sections for verses and 8-bar chorus
Reference sound: early Nas, Gang Starr, Pete Rock production`,
      },
    ],
  },
  {
    title: 'Mood & Emotional Atmosphere',
    icon: Waves,
    description: 'Dial in the emotional character of your generated music — from serene and meditative to intense and cinematic.',
    prompts: [
      {
        tag: 'Meditation',
        title: 'Peaceful Meditation Soundscape',
        prompt: `Generate a peaceful meditation and focus music track:
Purpose: deep meditation, yoga, mindfulness practice
Duration: 10 minutes, seamlessly loopable
Tempo: very slow, 60 BPM or slower
Key: C major or A major
Elements: Tibetan singing bowls, soft piano notes, gentle nature sounds (rain, water stream), drone pad, breathy flute
Dynamics: extremely gentle — no sudden loud moments or jarring transitions
Structure: slow fade in over 30 seconds, sustained ambient middle section, gentle fade out over 1 minute
No percussion, no bass drops, no melodies — pure calm atmosphere`,
      },
      {
        tag: 'Epic',
        title: 'Cinematic Epic Trailer Music',
        prompt: `Compose an epic cinematic trailer music piece:
Style: Hollywood blockbuster trailer, orchestral hybrid
Duration: 90 seconds (standard trailer music format)
Structure: quiet mysterious opening (0-15s), building tension (15-45s), epic drop and full orchestral swell (45-75s), triumphant final bars (75-90s)
Instrumentation: full orchestra, epic choir (AAAAHHH vocals), low brass, taiko drums, cinematic percussion hits, trailer bass (BWAAAM)
Mood arc: mysterious → tense → triumphant
Reference: Hans Zimmer, Two Steps From Hell, Audiomachine
No lyrics — pure cinematic power`,
      },
      {
        tag: 'Romantic',
        title: 'Intimate Romantic Ballad',
        prompt: `Create an intimate romantic ballad:
Genre: Adult Contemporary / Romantic Pop
Tempo: slow, 68 BPM
Key: E major
Mood: tender, vulnerable, deeply intimate
Instrumentation: acoustic piano as lead, soft acoustic guitar strumming, orchestral strings (subtle), light brushed drums entering at chorus
Vocal style: male vocalist, breathy and emotive, slightly raspy on high notes
Lyrical themes: falling in love, vulnerability, wanting to be known
Structure: piano intro, quiet verse, building pre-chorus, full emotional chorus, stripped verse 2, final soaring chorus
Reference: Ed Sheeran ballads, John Legend`,
      },
    ],
  },
  {
    title: 'Instrumental & Composition',
    icon: Radio,
    description: 'Generate rich instrumental compositions across classical, jazz, ambient, and world music traditions.',
    prompts: [
      {
        tag: 'Jazz',
        title: 'Late Night Jazz Club Track',
        prompt: `Compose a late-night jazz club instrumental track:
Genre: Modal Jazz / Blue Note style
Tempo: medium swing, 130 BPM
Key: F minor
Duration: 5 minutes with room for improvisation feel
Instrumentation: upright bass walking, brushed snare jazz drums, Steinway grand piano, tenor saxophone lead, muted trumpet counter-melody
Mood: smoky, sophisticated, contemplative — 1am jazz club energy
Structure: head (melody played twice), piano solo, saxophone solo, return to head, outro
Reference sound: Miles Davis Kind of Blue era, John Coltrane, Bill Evans`,
      },
      {
        tag: 'Classical',
        title: 'Neoclassical Piano Piece',
        prompt: `Compose a neoclassical piano piece in the style of modern composers:
Genre: Neoclassical / Contemporary Classical
Instrument: solo grand piano (Steinway)
Duration: 3-4 minutes
Tempo: Andante, 72 BPM — rubato allowed
Key: B minor, resolving to D major
Emotional arc: begins melancholic and introspective, progresses through tension, resolves in peaceful acceptance
Technique: minimalist motif development, sparse left hand, lyrical right hand melody, occasional pedal sustain for atmosphere
Reference: Nils Frahm, Ludovico Einaudi, Max Richter`,
      },
      {
        tag: 'World',
        title: 'Afrobeat Instrumental Groove',
        prompt: `Create an Afrobeat instrumental groove track:
Genre: Afrobeat / Afrofusion
Tempo: 95 BPM
Key: E major
Duration: 4 minutes
Instrumentation: talking drum, djembe, electric bass, rhythm guitar (percussive chops), lead guitar (melodic lines), keyboard stabs, percussion shakers
Feel: polyrhythmic, joyful, danceable, communal
Arrangement: interlocking rhythmic parts in the style of Fela Kuti's Africa 70
Build: starts with percussion alone, instruments enter one by one over first 60 seconds
Reference: Fela Kuti, Burna Boy instrumental style, Tony Allen drums`,
      },
    ],
  },
  {
    title: 'Lyrics & Song Structure',
    icon: Mic2,
    description: 'Get AI help writing complete song lyrics, verse structures, hooks, bridges, and full songs across any genre.',
    prompts: [
      {
        tag: 'Songwriting',
        title: 'Complete Song Lyrics Generator',
        prompt: `Write complete song lyrics for a [GENRE] song with the following brief:
Theme/story: [DESCRIBE WHAT THE SONG IS ABOUT]
Emotion: [HOW SHOULD LISTENERS FEEL]
Perspective: [FIRST PERSON / SECOND PERSON / THIRD PERSON]
Target audience: [WHO IS THIS FOR]

Deliver a complete song with:
- Verse 1 (4 stanzas, ABAB or AABB rhyme scheme)
- Pre-chorus (2 stanzas, building energy)
- Chorus (4 stanzas, most memorable part — repeat-worthy hook)
- Verse 2 (4 stanzas, develops the story)
- Bridge (2-3 stanzas, emotional peak or twist)
- Final chorus (with optional variation)
Include notes on delivery style for each section`,
      },
      {
        tag: 'Hook',
        title: 'Chorus Hook Writer',
        prompt: `Write 5 variations of a chorus hook for a song about [TOPIC]:
Genre: [GENRE]
Mood: [MOOD]
Key words or phrases to include: [OPTIONAL KEY WORDS]
Things to avoid: [ANY CLICHÉS OR OFF-LIMITS THEMES]

For each hook variation provide:
1. The hook lyrics (4-8 lines)
2. Suggested delivery tempo and feel
3. What makes this hook memorable and why it would resonate
4. A suggested title for the song based on this hook

Rank the 5 options from most commercially accessible to most artistically adventurous.`,
      },
      {
        tag: 'Bridge',
        title: 'Bridge & Spoken Word Section',
        prompt: `Write a bridge section and optional spoken word interlude for a song:
Song context: [DESCRIBE THE SONG — THEME, STORY, TONE]
Genre: [GENRE]
What the bridge needs to do: [EMOTIONAL PEAK / PLOT TWIST / RESOLUTION / CHANGE OF PERSPECTIVE]
Tone shift: should the bridge feel different from the verses? [YES/NO AND HOW]

Write:
1. A 4-8 line bridge that creates contrast with the verse/chorus
2. An optional 2-4 line spoken word or rap interlude
3. A final build line to transition back into the last chorus
4. Delivery notes (tempo, intensity, vocal style)`,
      },
    ],
  },
  {
    title: 'Sound Design & Production',
    icon: Headphones,
    description: 'Craft detailed production briefs for mixing engineers, sound designers, and AI music tools to get exactly the sonic texture you want.',
    prompts: [
      {
        tag: 'Mixing',
        title: 'Mixing & Mastering Brief',
        prompt: `Create a mixing and mastering brief for an AI music tool or engineer:
Genre: [GENRE]
Reference tracks: [LIST 2-3 SONGS WITH THE SOUND YOU WANT]
Key sonic characteristics desired:
- Bass: [DEEP AND PUNCHY / TIGHT AND TIGHT / WARM AND ROUND]
- Midrange: [SCOOPED / FORWARD / CLEAR]
- High end: [BRIGHT AND AIRY / WARM / CONTROLLED]
Spatial feel: [DRY AND INTIMATE / WIDE AND SPACIOUS / CAVERNOUS]
Dynamics: [HEAVILY COMPRESSED / NATURAL DYNAMICS / IN BETWEEN]
Loudness target: [STREAMING / BROADCAST / FILM]
Specific requests: [ANY SPECIAL EFFECTS OR TECHNIQUES]`,
      },
      {
        tag: 'Sound Design',
        title: 'Custom Synth Patch Description',
        prompt: `Describe a custom synthesiser patch for AI music generation:
Instrument type: [LEAD / BASS / PAD / PLUCK / TEXTURE / FX]
Character: [DESCRIBE THE SOUND IN WORDS — e.g., "warm and fuzzy", "cold and metallic", "soft and breathy"]
Oscillator character: [ANALOG WARMTH / DIGITAL PRECISION / WAVETABLE MORPHING]
Filter movement: [STATIC / SLOWLY OPENING / RHYTHMICALLY PULSING]
Modulation: [SLOW VIBRATO / PITCH WOBBLE / SUBTLE CHORUS]
Effects: [REVERB AMOUNT] [DELAY TYPE] [DISTORTION LEVEL]
Reference sound: [NAME A SONG OR ARTIST WITH A SIMILAR PATCH]
Use case: [WHAT THIS PATCH WILL DO IN THE MIX]`,
      },
      {
        tag: 'Production',
        title: 'Full Production Specification',
        prompt: `Write a complete production specification for an AI music generator:
Track title: [NAME]
Artist reference: [ARTIST NAME AND SPECIFIC ERA/ALBUM]
Genre and sub-genre: [BE SPECIFIC]
BPM: [EXACT TEMPO]
Key and scale: [KEY + MAJOR/MINOR/MODAL]
Time signature: [4/4 / 3/4 / 6/8 / etc.]
Arrangement structure: [LIST SECTIONS WITH BAR COUNTS]
Instrumentation list: [EVERY INSTRUMENT, REAL OR VIRTUAL]
Drum programme: [DESCRIBE GROOVE AND FILL APPROACH]
Mix aesthetic: [DESCRIBE THE OVERALL SONIC WORLD]
What NOT to include: [ELEMENTS TO AVOID]`,
      },
    ],
  },
  {
    title: 'Sync & Commercial Music',
    icon: Star,
    description: 'Create briefs and prompts for sync licensing, advertising music, background music libraries, and brand audio identity.',
    prompts: [
      {
        tag: 'Advertising',
        title: 'TV Commercial Music Brief',
        prompt: `Create music for a TV commercial with the following brief:
Brand: [BRAND NAME AND CATEGORY — e.g., "luxury car brand"]
Commercial theme: [DESCRIBE THE AD — e.g., "father and daughter road trip at dawn"]
Desired emotional response: [WHAT SHOULD VIEWERS FEEL]
Duration: [15s / 30s / 60s]
Tone: [ASPIRATIONAL / HEARTWARMING / EXCITING / TRUSTWORTHY / PLAYFUL]
Musical style: [GENRE AND REFERENCES]
Instrumentation: [PREFERRED INSTRUMENTS OR STYLE]
Lyrical content: [YES — DESCRIBE / NO — INSTRUMENTAL ONLY]
TV network/platform: [WHERE IT WILL AIR — affects loudness standards]
Budget tier: [BESPOKE SCORE / LIBRARY MUSIC / AI-GENERATED]`,
      },
      {
        tag: 'Sync',
        title: 'Film Scene Music Sync Brief',
        prompt: `Write a music sync brief for a film or TV scene:
Scene description: [DESCRIBE WHAT IS HAPPENING VISUALLY]
Scene duration: [MINUTES AND SECONDS]
Genre of film/show: [E.g., "psychological thriller", "romantic comedy"]
Emotional arc: [HOW DOES THE SCENE PROGRESS EMOTIONALLY]
Character's internal state: [WHAT IS THE MAIN CHARACTER FEELING]
Music function: [UNDERSCORE / COMMENTARY / CONTRAST / SOURCE MUSIC]
Desired sonic palette: [DESCRIBE INSTRUMENTS AND TEXTURES]
Energy level: [VERY QUIET / BUILDING / INTENSE / RELEASES]
Reference film scores: [LIST 2-3 COMPOSERS OR FILMS]
Tempo guidance: [BPM RANGE OR "FREE TEMPO"]`,
      },
      {
        tag: 'Brand',
        title: 'Brand Audio Identity Brief',
        prompt: `Create a brand audio identity brief for AI music generation:
Brand name: [BRAND]
Brand personality: [3-5 ADJECTIVES — e.g., "bold, innovative, trustworthy, human, forward-thinking"]
Target demographic: [AGE, VALUES, LIFESTYLE]
Current brand voice reference (visual): [DESCRIBE YOUR VISUAL BRAND]
Competitor audio references (what to avoid): [LIST COMPETITORS]
Required audio assets:
1. Brand anthem (60-second full piece)
2. Logo sonic (3-5 second brand sting)
3. Hold music (2-minute loop)
4. Notification sound (under 1 second)
5. App background music (ambient loop, 5 minutes)
Musical genres to embrace: [LIST]
Musical genres to avoid: [LIST]`,
      },
    ],
  },
];

const faqs = [
  {
    question: 'What are the best AI music generators in 2025?',
    answer: 'The leading AI music generators include Suno AI (best for full songs with vocals across many genres), Udio (strong vocal quality and style range), MusicLM by Google (high-quality instrumental generation), Stable Audio (good for longer compositions and sound design), Soundraw (ideal for royalty-free background music production), and Mubert (API-driven generative music for apps and content). Each tool has different strengths depending on whether you need vocals, instrumentals, or specific genres.',
  },
  {
    question: 'How do I write effective prompts for Suno AI?',
    answer: 'Effective Suno prompts include: genre and sub-genre (be specific), mood and energy level, tempo (BPM), instrumentation, vocal style and gender, lyrical themes or actual lyrics in brackets, and reference artists. For example: "upbeat indie pop, female vocal, 115 BPM, acoustic guitar, energetic and hopeful, verse about new beginnings, chorus about taking a leap of faith, references Taylor Swift folklore era". The more specific you are, the more predictable and on-target your results.',
  },
  {
    question: 'Can I use AI-generated music commercially?',
    answer: 'Commercial rights vary by platform and subscription tier. Suno AI and Udio offer commercial licenses on paid plans. Soundraw and Mubert are specifically designed for royalty-free commercial use. Always read the current terms of service for the platform you use, as policies evolve. For high-stakes commercial use (film, major advertising), consider using platforms that explicitly grant full commercial licenses and consult a music lawyer if the stakes are high.',
  },
  {
    question: 'What musical elements should I include in my prompts?',
    answer: 'For best results, include: (1) Genre and sub-genre with specific references; (2) Tempo in BPM; (3) Key or scale (major, minor, modal); (4) Instrumentation list; (5) Mood and emotional tone with descriptive adjectives; (6) Song structure (intro, verse, chorus, bridge); (7) Vocal style, gender, and delivery if applicable; (8) Reference artists or songs; (9) Duration; (10) What to exclude. More detail generally produces better results, especially for Suno and Udio.',
  },
  {
    question: 'How do AI music generators handle different genres?',
    answer: 'AI music generators vary significantly by genre capability. Pop, hip-hop, electronic, and rock genres tend to be most reliable. Jazz, classical, and world music require more detailed prompting and sometimes produce less consistent results. Highly niche sub-genres (like specific regional folk traditions) may produce approximations rather than authentic sounds. Providing reference artists who exemplify the genre is one of the most effective ways to guide the AI toward a specific sound.',
  },
  {
    question: 'Can AI generate lyrics as well as music?',
    answer: 'Yes — platforms like Suno and Udio can generate both music and lyrics simultaneously. You can either provide your own lyrics in brackets in the prompt, or describe the lyrical themes and let the AI write lyrics. For more control over lyrical content, write the lyrics separately using a language model like ChatGPT or Claude, then provide them to the music generator as part of your prompt. This two-step approach gives you more creative control over both the musical and lyrical output.',
  },
  {
    question: 'What is the difference between Suno and Udio?',
    answer: 'Suno AI is generally considered stronger for a wider genre range and more consistent song structures, with a strong focus on making complete, radio-ready songs accessible to non-musicians. Udio has been praised for higher vocal quality and more nuanced production textures, particularly for electronic and pop genres. Both offer free tiers with limited generations and paid plans for commercial use. The best way to choose is to test both with the same prompt and compare the results for your specific use case.',
  },
  {
    question: 'How do I create background music for videos with AI?',
    answer: 'For video background music, specify: duration to match your video length, whether the track should be loopable, energy level that complements your video pacing, whether you want a build and drop or consistent energy, and the emotional tone that matches your content. For YouTube or social media content, also specify "no vocals" or "instrumental only" if you do not want singing to compete with narration. Tools like Soundraw and Mubert are specifically optimised for content creator background music.',
  },
  {
    question: 'Can AI music generators create music in a specific key?',
    answer: 'Most advanced AI music generators accept key as part of the prompt, but results can be inconsistent — the model may approximate rather than strictly adhere to the specified key. For critical sync work requiring a specific key (e.g., to match pre-existing audio), it is worth generating multiple versions and checking with a tuner or DAW. Specifying the emotional quality associated with the key (e.g., "D minor — dark and dramatic") often works as well as stating the key itself.',
  },
  {
    question: 'How long can AI-generated music tracks be?',
    answer: 'Track length limits vary by platform. Suno typically generates 2-4 minute tracks and offers an "extend" feature for longer pieces. Stable Audio can generate tracks up to 3-5 minutes. Mubert generates continuous generative streams ideal for long-form background music. For longer compositions (10+ minutes), the most common workflow is to generate multiple segments and stitch them together in a DAW like Ableton or GarageBand, using AI-generated transitions or fades.',
  },
];

export default function AIMusicGeneratorPromptsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best AI Music Generator Prompts — Suno, Udio & More',
    description: 'Copy-ready prompts for AI music generators. Genre direction, mood, lyrics, sound design, and commercial music briefs for Suno, Udio, and more.',
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
    <div className="min-h-screen text-white" style={{ background: '#040207' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-4" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
            <Music size={12} /> AI Music Generation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">AI Music Generator Prompts</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Copy-ready prompts for Suno, Udio, and other AI music generators. Genre direction, mood, lyrics, sound design, and commercial music briefs.
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

        {/* Reference: Tool Comparison */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-2">AI Music Generator Comparison</h2>
          <p className="text-gray-400 text-sm mb-5">Which tool to use for your specific music generation needs.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Suno AI', strength: 'Wide genre range, complete songs, accessible to non-musicians', best: 'Full songs with vocals across genres' },
              { name: 'Udio', strength: 'High vocal quality, nuanced production, strong pop & electronic', best: 'High-quality vocal tracks and electronic music' },
              { name: 'MusicLM (Google)', strength: 'Research-grade quality, strong instrumental generation', best: 'Instrumental compositions, experimental use' },
              { name: 'Stable Audio', strength: 'Longer compositions, sound design, open source option', best: 'Long-form music and sound design work' },
              { name: 'Soundraw', strength: 'Royalty-free, content creator optimised, customisable segments', best: 'YouTube, social media, and video background music' },
              { name: 'Mubert', strength: 'API-driven, generative streams, developer-friendly', best: 'Apps, games, and continuous generative music' },
            ].map(tool => (
              <div key={tool.name} className="rounded-lg border p-4" style={{ borderColor: borderCol, background: bgDark }}>
                <div className="font-semibold text-white mb-1">{tool.name}</div>
                <div className="text-xs text-gray-400 mb-2">{tool.strength}</div>
                <div className="text-xs font-medium" style={{ color: accent }}>Best for: {tool.best}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Prompt Formula */}
        <div className="mb-12 rounded-lg border p-6" style={{ borderColor: borderCol, background: bgDark }}>
          <h2 className="text-lg font-bold text-white mb-1">Prompt Elements for Music Generation</h2>
          <p className="text-gray-400 text-sm mb-4">Include these elements in every AI music prompt for best results.</p>
          <pre className="text-sm leading-relaxed font-mono p-4 rounded-lg overflow-x-auto" style={{ background: '#0a0312', color: '#A855F7' }}>{`[GENRE] + [SUB-GENRE] (e.g., "dark synthwave", "tropical pop")
[TEMPO] in BPM (e.g., "120 BPM", "slow 68 BPM")
[KEY] and scale (e.g., "D minor", "G major", "A Dorian")
[INSTRUMENTATION] list (be specific: "upright bass, brushed snare, tenor sax")
[MOOD/EMOTION] with descriptive adjectives
[VOCAL STYLE] or "instrumental only"
[SONG STRUCTURE] (intro / verse / chorus / bridge / outro)
[REFERENCE ARTISTS] (e.g., "Hans Zimmer meets Burial")
[DURATION] (e.g., "3 minutes", "90-second trailer format")
[WHAT TO AVOID] (negative guidance helps a lot)

Example:
"Melancholic indie folk, 72 BPM, E minor, acoustic guitar, piano,
cello, male vocal — breathy and tender, themes of leaving home,
verse-chorus structure, 3 minutes, references Bon Iver and Iron & Wine,
no drums, no distortion, sparse arrangement"`}</pre>
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
              { label: 'Luma AI Prompts', href: '/luma-ai-prompts' },
              { label: 'Pika AI Prompts', href: '/pika-ai-prompts' },
              { label: 'Ideogram AI Prompts', href: '/ideogram-ai-prompts' },
              { label: 'AI Prompts for Education', href: '/ai-prompts-for-education' },
              { label: 'Perchance AI Prompts', href: '/perchance-ai-prompts' },
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
