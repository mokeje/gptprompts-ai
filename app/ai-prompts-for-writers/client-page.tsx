"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, PenLine, BookOpen, Lightbulb, RefreshCw, Layers } from "lucide-react"

const accent = "#c084fc"
const bg = "#07050f"

function CopyCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#110d1e] border border-[#2a1f40] rounded-xl p-5 hover:border-[#c084fc]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#c084fc]/10 text-[#c084fc] mb-2 inline-block">
              {tag}
            </span>
          )}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button
          onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
          className="shrink-0 p-2 rounded-lg bg-[#1a1230] hover:bg-[#c084fc]/20 transition-colors"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-400" />}
        </button>
      </div>
      <pre className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap font-sans">{prompt}</pre>
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a1f40] rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-[#110d1e] transition-colors">
        <span className="font-medium text-white pr-4">{q}</span>
        {open ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#2a1f40] pt-4">{a}</div>}
    </div>
  )
}

const sections = [
  {
    id: "ideation",
    icon: <Lightbulb size={20} />,
    title: "Ideation & Story Development",
    subtitle: "Overcome blank page paralysis — prompts for generating story ideas, characters, plots, and creative concepts.",
    tag: "Ideation",
    prompts: [
      {
        title: "Generate Story Ideas on a Theme",
        prompt: `Generate 10 original story ideas based on this theme or premise:
[Describe the theme, setting, or seed idea]

For each idea, give me:
- A one-sentence logline (what happens and why it matters)
- The genre (literary fiction / thriller / sci-fi / etc.)
- The central conflict (internal, external, or both)
- One unexpected or subversive element that makes it stand out

I write [genre] for [audience]. Make the ideas feel fresh — avoid the most obvious directions.`,
      },
      {
        title: "Develop a Character from Scratch",
        prompt: `Help me develop a fully realised character for my story. I want to avoid clichés and create someone complex and specific.

Starting point: [Give me any starting details — name, role in story, a vague idea, or just a feeling]

Develop:
- Physical presence (not just description — how they carry themselves, what people notice first)
- Voice and speech patterns
- Core wound or formative experience that shaped who they are
- What they want (external goal) vs what they need (internal truth)
- Their fatal flaw and their hidden strength
- 3 contradictions that make them real (e.g. generous but controlling, brave but afraid of intimacy)
- How they would react to [scenario relevant to your story]`,
      },
      {
        title: "Unstick a Plot — Find the Next Move",
        prompt: `I'm stuck on my story and need help figuring out what happens next. Here's where I am:

Story so far: [Summarise the plot up to this point — key characters, what's happened, what's at stake]
Where I'm stuck: [Describe the specific moment or scene where I've stalled]
What I've tried: [What directions have you already considered and rejected?]
What the story needs emotionally at this point: [e.g. tension, relief, revelation, turning point]

Give me 5 different directions the story could go from here, with pros and cons of each. Include at least one unexpected or risky option I probably haven't considered.`,
      },
      {
        title: "Build a Story World / Setting",
        prompt: `Help me develop the world/setting for my story. I want it to feel specific and alive, not generic.

Genre / type of story: [Describe]
Basic setting: [Time period, location, type of world — real / speculative / fantasy / etc.]
What I already know: [Any details you've already decided]

Develop:
- The rules of this world (physical, social, cultural)
- What's different here from our world or expectations?
- What do people here fear / value / celebrate?
- The sensory details that will make it feel real (sounds, smells, textures)
- 3 specific details that would only exist in THIS world (not generic "medieval village" details)
- How does the setting create or compound the central conflict?`,
      },
    ],
  },
  {
    id: "craft",
    icon: <PenLine size={20} />,
    title: "Writing Craft & Technique",
    subtitle: "Prompts for improving your prose, mastering dialogue, writing better scenes, and strengthening your style.",
    tag: "Craft",
    prompts: [
      {
        title: "Improve This Passage — Line Edit",
        prompt: `Edit this passage to improve the prose. Diagnose the problems first, then provide an edited version.

[Paste your passage here]

Look for:
- Passive voice that weakens the action
- Telling instead of showing
- Redundant or filler words
- Weak verb choices (especially overuse of "was", "had", "got")
- Adverbs that could be replaced by stronger verbs
- Sentences that are too similar in length and structure

Show me: (1) what's wrong and why, (2) your edited version, (3) 3 specific choices you made and why they improve the writing.`,
      },
      {
        title: "Write a Scene with Subtext",
        prompt: `Help me write a scene where the real meaning is beneath the surface. The characters should want one thing but say or do something else.

Scene context: [Describe what's happening on the surface — two characters having coffee, a job interview, a family dinner, etc.]
What's really going on: [The emotional or relational undercurrent — unspoken love, simmering resentment, hidden guilt, fear of being left, etc.]
Characters: [Brief description of each]
What each character actually wants from this scene: [Character A wants X, Character B wants Y]

Write the scene with the subtext fully alive. None of the real feelings should be stated directly — they should be visible only in actions, word choices, silences, and what's deliberately not said.`,
      },
      {
        title: "Write Authentic Dialogue",
        prompt: `Write a dialogue scene between [number] characters with distinct, authentic voices.

Characters:
- [Character 1]: [Age, background, personality, speech patterns, emotional state in this scene]
- [Character 2]: [Same]
- [Character 3 if applicable]: [Same]

Scene context: [What's happening? What are they talking about? What does each person want from this conversation?]
Emotional arc of the scene: [How should it start vs. how should it end emotionally?]

Requirements:
- Each character should sound completely different — you should be able to tell who's speaking without dialogue tags
- Use interruptions, incomplete sentences, deflections, and subtext
- Avoid "on-the-nose" dialogue where characters say exactly what they mean`,
      },
      {
        title: "Write an Opening Hook",
        prompt: `Write 5 different opening lines / paragraphs for my story. Each should work as a standalone hook that makes someone want to keep reading.

Story context: [Brief description of what the story is about — genre, tone, central character, what's at stake]

Write one opening in each style:
1. In medias res — drop us into action already happening
2. Voice-driven — hook through a distinctive narrator's perspective
3. Mystery or question — something that demands to be resolved
4. Image or atmosphere — a specific sensory detail that establishes world and tone
5. Statement that subverts expectations — a line that surprises or provokes

After each opening, explain in one sentence why it works as a hook.`,
      },
    ],
  },
  {
    id: "blog-nonfiction",
    icon: <BookOpen size={20} />,
    title: "Blog & Non-Fiction Writing",
    subtitle: "Prompts for writing compelling essays, articles, blog posts, and non-fiction content that engages and persuades.",
    tag: "Non-Fiction",
    prompts: [
      {
        title: "Write a Blog Post Outline — Deep Structure",
        prompt: `Create a detailed blog post outline for this topic: [Topic]

Target audience: [Describe — who is this for and what do they already know?]
Angle / unique POV: [What's the specific take or argument — not just "a post about X" but "the counterintuitive thing about X that most people miss"]
Desired length: [Word count]
Goal: [Inform / persuade / entertain / rank in search / grow email list]

Outline format:
- Headline options (3 variants)
- Introduction structure (hook + problem + promise)
- H2 sections with H3 sub-points under each
- Key examples, stories, or data points to include in each section
- Conclusion structure
- CTA

Make the outline specific enough that someone could write the post from it without needing to do additional research planning.`,
      },
      {
        title: "Write a Personal Essay — First Draft",
        prompt: `Help me write a personal essay about [topic / experience]. I want it to go beyond what happened to explore what it means.

The experience: [Describe it — be as specific as possible with details, people, places, dates]
What I think the essay is about (the surface): [What you'd tell someone it's about]
What it's really about (the deeper theme): [The universal truth or question underneath — if you're not sure, that's okay]

Essay structure I want:
- Start in a specific scene or moment (not "I was born" or broad background)
- Move between past and present or multiple time periods
- Build toward a revelation or shift in understanding
- End with resonance, not a tidy conclusion

Write a first draft of [500 / 800 / 1200] words. I'll edit it to add my voice.`,
      },
      {
        title: "Explain a Complex Idea Simply",
        prompt: `Help me explain this complex idea in plain, engaging language for [audience: general readers / beginners / non-experts in this field]:

Concept: [What is the idea, theory, system, or phenomenon you want to explain?]

Requirements:
- Use an analogy or metaphor that makes it click
- Break it into 3-4 stages or components
- Anticipate the most common points of confusion and address them
- Use a concrete real-world example
- Avoid jargon — if a technical term is necessary, define it immediately

Target length: [200-400 words]
Tone: [Conversational / Authoritative / Educational / Enthusiastic]`,
      },
      {
        title: "Write with a Stronger Point of View",
        prompt: `Rewrite this passage to have a stronger, clearer point of view. It currently reads as too neutral or hedged.

[Paste your draft here]

The argument I'm actually trying to make: [State your thesis clearly — what do you believe and why?]
Why I've been hedging: [e.g. "I'm worried about being wrong" / "I don't want to alienate readers" / "I'm not sure I believe it fully"]

Rewrite it to:
- State the position clearly and early
- Use confident language (remove "perhaps", "might", "some would argue")
- Back the claim with one strong piece of evidence or example
- Acknowledge a valid counter-argument briefly, then dismiss it
- End the passage with a sentence that lands

Maintain my writing voice — don't make it aggressive, just decisive.`,
      },
    ],
  },
  {
    id: "editing",
    icon: <RefreshCw size={20} />,
    title: "Editing, Feedback & Revision",
    subtitle: "Use AI as your developmental editor — get honest, specific feedback on structure, pacing, character, and prose.",
    tag: "Editing",
    prompts: [
      {
        title: "Structural Feedback — Developmental Edit",
        prompt: `Act as a developmental editor and give me honest, specific feedback on this piece of writing.

[Paste your draft — or a detailed summary if it's a full manuscript]

Genre: [Fiction / Essay / Long-form article / Memoir / Other]
What I think is working: [What you're proud of]
What I'm worried about: [Where you suspect it's not working]
What kind of feedback I want: [Be specific — structure, pacing, character, argument, voice, opening, ending]

Please:
- Be direct — I need honest feedback, not reassurance
- Identify the 3 biggest structural issues
- For each issue, explain why it's a problem and suggest how to fix it
- Tell me what IS working so I know what to protect in revision`,
      },
      {
        title: "Pacing Analysis — Is This Moving Too Fast or Too Slow?",
        prompt: `Analyse the pacing of this [story / chapter / article] and tell me where it's too fast, too slow, or unbalanced.

[Paste the piece or section]

Specifically:
- Which scenes or sections feel rushed? (What's missing that I've compressed too quickly)
- Which sections drag? (What could be cut or condensed)
- Where is the tension / reader engagement at its highest? (What's making this work)
- Where does the reader's attention most likely drop off?
- Does the pacing serve the emotional arc? (Is the climax given enough weight? Does the ending feel earned?)

Give me a section-by-section pacing map and your top 3 revision priorities.`,
      },
      {
        title: "Cut 20% — What Goes First?",
        prompt: `This piece is too long. I need to cut approximately 20% of the word count. Help me identify what to cut without losing what matters.

[Paste the piece here]

Please:
1. Identify the sections or passages that add the least value (weak arguments, redundant scenes, over-explained ideas)
2. Flag any sentences that could be cut or condensed without loss
3. Identify any digressions that could be removed entirely
4. Show me one example paragraph fully cut/condensed to demonstrate the approach

After identifying cuts, confirm: does the piece still make its argument / tell its story effectively at 80% length?`,
      },
      {
        title: "Sensitivity Read — Is This Portrayal Respectful?",
        prompt: `I've written a character / scene that deals with [sensitive topic — e.g. a character from a different culture, a mental health experience, a trauma, a marginalised identity]. I want to make sure I'm handling it respectfully and authentically.

[Paste the passage or describe the portrayal in detail]

The character / situation is: [Describe]
My relationship to this topic: [Are you writing from inside or outside this experience?]
My intentions: [What are you trying to achieve with this portrayal?]

Please flag:
- Any details that feel inaccurate, stereotyping, or reductive
- Anything that could be read as exploitative or voyeuristic
- Places where I've oversimplified a complex experience
- Suggestions for how to deepen or complicate the portrayal
- Questions I should research further before publishing`,
      },
    ],
  },
  {
    id: "productivity",
    icon: <Layers size={20} />,
    title: "Writer Productivity & Process",
    subtitle: "Use AI to manage your writing practice — overcome blocks, set goals, build habits, and sustain a long-term creative life.",
    tag: "Process",
    prompts: [
      {
        title: "Overcome Writer's Block — Right Now",
        prompt: `I have writer's block right now and need to get unstuck immediately. Help me.

What I'm working on: [Project name and brief description]
Where I'm stuck: [The specific moment, scene, or passage I can't get past]
How long I've been stuck: [Hours / days / weeks]
What I think is stopping me: [Fear, perfectionism, unclear direction, energy, life stuff — be honest]

Give me:
1. A 10-minute low-stakes writing exercise to get the words flowing again (not related to the stuck piece)
2. One permission to write badly — a specific reframe for why bad first drafts are fine
3. The simplest possible next sentence I could write to move forward
4. One question to ask myself that might unlock the block`,
      },
      {
        title: "Build a Writing Habit System",
        prompt: `Help me build a sustainable writing habit that fits my real life.

My situation:
- Available writing time: [When and how long — e.g. "mornings before work, 45 mins" / "weekends only" / "sporadic evenings"]
- Current project: [What are you working on?]
- My biggest obstacle: [What always gets in the way — energy, time, motivation, perfectionism, life]
- What I've tried before: [Habits that didn't stick and why]

Design a writing habit system that includes:
1. A non-negotiable minimum (small enough to feel easy on hard days)
2. A specific trigger that starts the writing session
3. How to handle the days I miss (no guilt spiral)
4. One way to track progress that actually motivates me
5. A quarterly milestone to work toward`,
      },
      {
        title: "Query Letter or Pitch — First Draft",
        prompt: `Help me write a query letter / book pitch for my project.

Project details:
- Title: [Title]
- Genre and word count: [e.g. Literary fiction, 82,000 words]
- Comparable titles (comp titles): [2 books published in the last 5 years that are similar in feel or audience]
- One-sentence logline: [What happens and why it matters — protagonist + conflict + stakes]
- Brief synopsis: [3-5 sentences: setup, conflict, what's at stake, a hint of the ending tone]
- Why I'm the person to write this: [Author bio — relevant credentials, personal connection to material, platform]

Write a query letter following standard agent submission format. Keep it professional and specific.`,
      },
      {
        title: "Create a Project Roadmap for Your Book",
        prompt: `Help me create a realistic writing and revision roadmap for my book project.

Project:
- Type: [Novel / Memoir / Essay collection / Non-fiction]
- Current status: [Idea stage / First draft in progress / X% complete / First draft done]
- Word count target: [Target]
- Deadline or goal: [If you have one — publication, writing group deadline, contest, personal goal]
- Writing pace: [Current realistic words per session / per week]

Create a roadmap with:
1. Phase 1: First draft — timeline and milestones
2. Phase 2: Structural revision — what to focus on and when
3. Phase 3: Line editing — timeline
4. Phase 4: Beta readers / sensitivity readers — timeline
5. Phase 5: Query / submission prep (if applicable)

Build in buffer time for life. Make it ambitious but realistic.`,
      },
    ],
  },
]

const faqs = [
  { q: "Should writers use AI?", a: "Many working writers use AI as a tool — for brainstorming, outlining, editing feedback, overcoming blocks, and handling research. The key distinction: AI works best as a collaborator and assistant, not as the author. Use it to generate options, identify problems, and explore ideas. The voice, decisions, and final words should be yours." },
  { q: "How can AI help with writer's block?", a: "AI excels at low-stakes brainstorming exercises, generating alternative directions when you're stuck, asking generative questions, and helping you identify why you're blocked. Sometimes just describing the problem to an AI — the way you would to a writing partner — helps you find the answer yourself." },
  { q: "Can AI help me develop my writing style?", a: "AI can help you analyse what's working in your prose, identify weaknesses like passive voice or word repetition, and show you how the same passage could be written differently. What it can't do is give you your voice — that comes from reading widely and writing persistently. Use AI to diagnose problems, but solve them yourself." },
  { q: "Is it cheating to use AI for creative writing?", a: "That depends entirely on context. For a paid client deliverable, using AI without disclosure may be problematic. For your own creative development, brainstorming, or first drafts you'll heavily revise, AI is just another tool — like a dictionary, a writing group, or a developmental editor. Be honest with yourself about whether you're using it to grow or to avoid growing." },
  { q: "Can AI write my novel for me?", a: "AI can generate text that looks like a novel, but it will lack your specific experience, perspective, voice, and emotional truth. For AI-generated prose to be published under your name as your creative work, it requires extensive human revision and genuine creative input at every stage. Most writers find AI more useful for planning, feedback, and stuck moments than for generating finished prose." },
  { q: "What are the best AI tools for writers?", a: "ChatGPT and Claude are both strong for writing assistance — Claude tends to produce more nuanced feedback and handles longer documents better, while ChatGPT is strong for quick generation and structured tasks. Sudowrite is designed specifically for fiction writers. Grammarly handles mechanical editing. Most writers use a combination depending on the task." },
  { q: "How do I use AI to improve my writing without losing my voice?", a: "Always use AI to generate options or identify problems — never accept its output as final. When AI rewrites a passage, use it to diagnose what went wrong in your original, then rewrite it yourself. The goal is to understand the craft principle, not to copy the AI's version." },
  { q: "Can AI give me useful feedback on my writing?", a: "Yes, especially for structural and mechanical issues: pacing, passive voice, clarity, argument structure, redundancy. It's less reliable for nuanced taste and voice questions. Give it your draft with specific questions: 'Where does the pacing drag?' 'Is the argument clear in the third section?' 'Which character feels underdeveloped?' Specific questions produce more useful feedback." },
  { q: "How do I use AI to brainstorm story ideas without them feeling generic?", a: "Specificity is the key. Instead of 'give me 10 story ideas', try: 'Give me 10 story ideas set in [specific place] that explore [specific theme], written for [specific audience], with an unexpected or subversive element in each.' The more constraints you give, the more interesting the output." },
  { q: "Can I use AI to help write a query letter or book pitch?", a: "Yes, and this is one of the best uses of AI for writers. Query letters are a specific, learnable format, and AI is good at following formats. Give it your premise, comp titles, author bio, and a synopsis. Then edit the output heavily — agents can often tell when a query is AI-generated, and your voice needs to come through." },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "AI Prompts for Writers 2026: 60+ Copy-Paste Creative Writing Templates",
      description: "60+ AI prompts for writers — story ideation, craft improvement, editing feedback, non-fiction writing, and writer productivity.",
      author: { "@type": "Organization", name: "GPTPrompts" },
      dateModified: "2026-01-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
}

export default function WritersPromptsClient() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: bg }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-[#2a1f40] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border" style={{ borderColor: `${accent}30`, color: accent }}>Writers</span>
            <span className="text-xs text-gray-500">60+ prompts</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            AI Prompts for Writers 2026:<br />60+ Copy-Paste Templates
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Copy-paste AI prompts for every stage of the writing process — story ideation, craft improvement, editing feedback, non-fiction writing, and building a sustainable writing practice.
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            {[{ label: "60+", desc: "Writing prompts" }, { label: "5", desc: "Categories" }, { label: "10", desc: "FAQ answers" }].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold" style={{ color: accent }}>{s.label}</div>
                <div className="text-sm text-gray-400">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {["Story ideation", "Writing craft", "Blog & non-fiction", "Editing & feedback", "Writer productivity"].map((b) => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#110d1e] border border-[#2a1f40] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.id} className="py-14 px-4 border-b border-[#2a1f40]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span style={{ color: accent }}>{section.icon}</span>
              <h2 className="text-2xl font-bold">{section.title}</h2>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{section.subtitle}</p>
            <div className="grid gap-4">
              {section.prompts.map((p) => (
                <CopyCard key={p.title} title={p.title} prompt={p.prompt} tag={section.tag} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-14 px-4 border-b border-[#2a1f40]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">AI for Writers — FAQ</h2>
          <p className="text-gray-400 mb-6 text-sm">Honest answers about using AI as a writing tool.</p>
          <div className="space-y-3">{faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}</div>
        </div>
      </section>

      <section className="py-14 px-4 border-b border-[#2a1f40]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related Prompt Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/writing-prompts", label: "Creative Writing Prompts", desc: "Story starters, fiction prompts, and creative challenges" },
              { href: "/essay-prompts", label: "Essay Writing Prompts", desc: "Personal statements, academic essays, and argument prompts" },
              { href: "/ai-writing-prompts", label: "AI Writing Prompts", desc: "All-purpose writing prompts for every format and audience" },
              { href: "/creative-writing-prompts-beginners", label: "Creative Writing for Beginners", desc: "Start your writing practice with guided, accessible prompts" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group bg-[#110d1e] p-6 rounded-lg hover:border-[#c084fc]/40 border border-[#2a1f40] transition-all">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#c084fc] transition-colors">{link.label}</h3>
                <p className="text-gray-400 text-sm">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-white mb-3">Writing</h3>
            <ul className="space-y-2">
              {[{ href: "/writing-prompts", label: "Writing Prompts" }, { href: "/essay-prompts", label: "Essay Prompts" }, { href: "/story-prompts", label: "Story Prompts" }, { href: "/creative-writing-prompts-beginners", label: "Beginners' Writing" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Content Creation</h3>
            <ul className="space-y-2">
              {[{ href: "/ai-prompts-content-creators", label: "AI for Content Creators" }, { href: "/ai-prompts-linkedin", label: "LinkedIn Prompts" }, { href: "/ai-prompts-email-writing", label: "Email Writing Prompts" }, { href: "/youtube-thumbnails-titles", label: "YouTube Prompts" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">AI Models</h3>
            <ul className="space-y-2">
              {[{ href: "/chatgpt-prompts", label: "ChatGPT Prompts" }, { href: "/claude-prompts", label: "Claude Prompts" }, { href: "/gemini-prompts", label: "Gemini Prompts" }, { href: "/perplexity-prompts", label: "Perplexity Prompts" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
