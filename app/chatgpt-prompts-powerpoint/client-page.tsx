'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Layout, BarChart3, Palette, Layers, Zap } from 'lucide-react';

const accent = '#FF6D00';

interface CopyCardProps { title: string; prompt: string; tag: string; }

function CopyCard({ title, prompt, tag }: CopyCardProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="mb-4 p-4 border rounded-lg border-[#2a1500] hover:border-[#FF6D00] transition-colors bg-[#0a0500]">
      <div className="mb-2"><span className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>{tag}</span></div>
      <p className="text-white text-sm font-medium mb-2">{title}</p>
      <pre className="text-gray-400 text-sm mb-3 leading-relaxed whitespace-pre-wrap font-sans">{prompt}</pre>
      <button onClick={handleCopy} className="inline-flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors border" style={{ color: copied ? accent : '#888', borderColor: copied ? accent : '#333' }}>
        {copied ? <><Check size={14} />Copied!</> : <><Copy size={14} />Copy</>}
      </button>
    </div>
  );
}

function FAQ({ item }: { item: { question: string; answer: string } }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-3 border border-[#2a1500] rounded-lg overflow-hidden hover:border-[#FF6D00] transition-colors">
      <button onClick={() => setExpanded(!expanded)} className="w-full p-4 flex items-center justify-between bg-[#0a0500] hover:bg-[#110800] transition-colors">
        <h3 className="font-semibold text-white text-left text-sm">{item.question}</h3>
        {expanded ? <ChevronUp size={18} style={{ color: accent }} className="flex-shrink-0" /> : <ChevronDown size={18} className="flex-shrink-0 text-gray-500" />}
      </button>
      {expanded && <div className="p-4 bg-[#060300] border-t border-[#2a1500] text-gray-300 text-sm leading-relaxed">{item.answer}</div>}
    </div>
  );
}

const faqs = [
  { question: 'Can ChatGPT create PowerPoint files directly?', answer: 'ChatGPT cannot directly export a .pptx file from the chat interface. However, it can generate fully structured slide content, speaker notes, and VBA macros you can paste into PowerPoint. For direct file creation, use the ChatGPT Data Analysis tool (code interpreter) which can generate .pptx files via the python-pptx library, or use tools like Gamma, Beautiful.ai, or Canva that integrate AI with direct export.' },
  { question: 'What\'s the best way to use ChatGPT to structure a presentation?', answer: 'Start with your goal and audience: "Create a 10-slide outline for a [audience] presentation on [topic] with the goal of [desired action]." ChatGPT will generate slide titles, bullet points, and logical flow. Then iterate: ask for a stronger opening hook, clearer data slides, or a more compelling closing. Use ChatGPT to generate speaker notes separately — these force it to think about the argument behind each slide rather than just summarising text.' },
  { question: 'How do I make PowerPoint presentations less text-heavy with AI?', answer: 'Ask ChatGPT: "Rewrite these bullet points as 5-word headline statements where each headline captures the key insight, not just the topic." Or: "Convert these 5 bullets into a single compelling statistic or visual concept that makes the same point." The rule: each slide should make one point. Use AI to identify the core insight, then cut everything else. Ask for the "so what" — the audience takeaway — not the "what".' },
  { question: 'How do I use ChatGPT to create executive presentations?', answer: 'Executive decks need to be conclusion-first. Ask ChatGPT: "Rewrite this presentation in Minto Pyramid structure — lead with the recommendation, then the supporting rationale, then the evidence." Also ask: "What is the single decision this audience needs to make after seeing this deck?" Every slide should either inform that decision or be cut. Ask ChatGPT to write an executive summary slide that a C-suite could forward to a board without reading the full deck.' },
  { question: 'What are the most common PowerPoint mistakes and how does AI help fix them?', answer: 'Top mistakes: too much text per slide (fix: ask ChatGPT to reduce each slide to one headline + three bullets max), no clear narrative arc (fix: ask for a "problem → solution → proof → call to action" restructure), weak data slides (fix: ask ChatGPT to write a headline that states the insight, not just the chart type), and no clear ask at the end (fix: ask ChatGPT to write a specific, action-oriented closing slide with next steps and owners).' },
  { question: 'How do I use ChatGPT to write compelling speaker notes?', answer: 'Ask ChatGPT to write speaker notes for each slide that: explain what the audience should take away (not just repeat the slide content), include a transition sentence to the next slide, and flag where to pause for questions or engagement. Speaker notes should sound like natural speech — ask ChatGPT to write them "as if explaining this to a smart colleague who hasn\'t seen the deck before." 100-150 words per slide is a good target.' },
  { question: 'Can ChatGPT help create a pitch deck for investors?', answer: 'Yes — it\'s one of the best use cases. Use ChatGPT to: generate a narrative arc (problem → solution → market → traction → team → ask), write each slide\'s key message as a headline, craft the "why now" narrative, write the competitive positioning, and anticipate and pre-answer investor objections. Paste your current draft and ask ChatGPT to critique it as a skeptical investor would. The deck structure matters less than the story — focus AI on making the narrative compelling and believable.' },
  { question: 'How do I convert a long report or document into a presentation using ChatGPT?', answer: 'Paste the document (or key sections) and ask: "Convert this into a 12-slide presentation. For each slide: write a headline that states the insight (not just the topic), 3 bullet points maximum, and one question the slide answers for the audience." Then ask for speaker notes. The key is asking ChatGPT to identify the most important insights rather than trying to include everything — presentations that try to cover everything communicate nothing.' },
  { question: 'What slide templates work best for different types of presentations?', answer: 'Use ChatGPT to match slide type to content: for comparisons → two-column or table; for processes → numbered steps or timeline; for data → chart with insight headline; for quotes → full-bleed pull quote; for case studies → situation/action/result structure; for recommendations → three-option trade-off slide; for closing → single clear call-to-action. Ask ChatGPT: "What\'s the best slide format for communicating [specific content] to [audience]?"' },
  { question: 'How do I use ChatGPT to prepare for Q&A after a presentation?', answer: 'After drafting the deck, ask ChatGPT: "You are a skeptical [audience type — investor / executive / client]. What are the 10 hardest questions you would ask after seeing this presentation?" Then: "Help me draft concise, confident answers to each question." Practice answering out loud. This exercise also identifies gaps in your argument — if you can\'t answer a question well, the slide content likely needs strengthening.' },
];

export default function PowerPointPromptsPage() {
  return (
    <div className="min-h-screen bg-[#060300]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'ChatGPT Prompts for PowerPoint: Build Better Presentations Faster', description: 'Expert ChatGPT prompts for PowerPoint — slide structure, executive decks, pitch decks, data visualisation, speaker notes, and presentation storytelling.', image: 'https://gptprompts.ai/powerpoint-og.jpg', datePublished: '2026-03-29', dateModified: '2026-03-29', author: { '@type': 'Organization', name: 'GPT Prompts AI' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />

      <section className="border-b border-[#2a1500] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Layout size={32} style={{ color: accent }} />
            <h1 className="text-4xl font-bold text-white">ChatGPT Prompts for PowerPoint</h1>
          </div>
          <p className="text-gray-400 text-lg mb-4">Build compelling presentations faster with expert ChatGPT prompts for slide structure, executive decks, pitch decks, data slides, speaker notes, and storytelling.</p>
          <div className="flex flex-wrap gap-2">
            {['Slide Structure', 'Pitch Decks', 'Executive Decks', 'Speaker Notes'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium border" style={{ borderColor: accent, color: accent }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Layout size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Slide Structure & Storytelling</h2></div>
          <CopyCard tag="Structure" title="Full presentation outline"
            prompt={`Create a [X]-slide presentation outline for [audience] on [topic].
Goal: [what decision or action should the audience take after this presentation?]
Context: [any background they'll already have]

For each slide:
- Slide title (5-8 words, states the insight not just the topic)
- 3 bullet points maximum (what the audience needs to know, not what you want to say)
- One question this slide answers for the audience
- Transition sentence to the next slide

End with a "So what / next steps" slide that has a single clear ask.`} />
          <CopyCard tag="Storytelling" title="Narrative arc — problem to resolution"
            prompt={`Restructure this presentation into a compelling narrative arc:
Current content: [paste your slide titles or outline]
Audience: [who will see this]
Desired outcome: [what you want them to do or think after]

Restructure using: Problem (make them feel the pain) → Stakes (why it matters now) → Current attempts (what's been tried) → Solution (your answer) → Proof (evidence it works) → Call to action (clear next step)

Rewrite each slide title to be a complete sentence stating the insight, not a topic heading.`} />
          <CopyCard tag="Opening" title="Strong opening hook"
            prompt={`Write 3 alternative openings for a presentation on [topic] for [audience]. Each opening should:
- Hook the audience in the first 30 seconds
- Create relevance: why does this matter to THIS audience right now?
- Set up the central question or tension the presentation will resolve

Opening types to try:
1. A surprising statistic or counterintuitive fact
2. A brief story or scenario they can picture themselves in
3. A direct challenge to a common assumption they hold

After each opening, show the transition into the first main slide.`} />
          <CopyCard tag="Closing" title="Compelling closing and call to action"
            prompt={`Write a strong closing for my presentation on [topic].
The audience: [describe them]
The decision I want them to make: [specific action]
Key objection they might have: [main hesitation]

The closing should:
1. Summarise the key argument in 2-3 sentences (not a list of everything covered)
2. Address the main objection directly
3. Make the ask specific: who should do what, by when
4. End with a memorable line that reinforces the central message
5. Provide 1-2 follow-up resources or contact information

Then write a slide title for the closing slide (not "Thank You" — something that reinforces the message).`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><BarChart3 size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Data & Evidence Slides</h2></div>
          <CopyCard tag="Data Slides" title="Data slide with insight headline"
            prompt={`I have this data to present: [describe or paste your data/chart]
The point I want to make: [what conclusion should the audience draw?]
Audience: [technical / non-technical / executive]

Write:
1. The slide headline (a complete sentence stating the insight — not "Sales by Region" but "APAC grew 3x faster than all other regions in Q4")
2. Three supporting bullets that explain or contextualise the data
3. One "so what" sentence: what does this mean for the decisions this audience needs to make?
4. Suggested chart type and what to emphasise on the chart (the key data point to call out visually)`} />
          <CopyCard tag="Comparison" title="Comparison table or matrix slide"
            prompt={`Create content for a comparison slide that helps [audience] understand [decision they need to make].
Options to compare: [list 2-4 options]
Key criteria: [list 4-6 dimensions to compare them on]

Produce:
1. A table showing each option rated or described on each criterion
2. A headline that states which option you recommend and why (if applicable)
3. A brief rationale for the recommended option (or how to choose if no single winner)
4. The one criterion that matters most for this particular audience
5. Any important caveat or condition that would change the recommendation`} />
          <CopyCard tag="Case Study" title="Case study or proof slide"
            prompt={`Write content for a case study / proof slide featuring [company/example].
Goal: demonstrate that [your solution / approach / claim] works in practice.

Structure the slide as:
- Challenge: one sentence describing the situation before
- Approach: one sentence describing what was done
- Result: one sentence with a specific, quantified outcome
- Quote: a 1-2 sentence testimonial (if available) or suggested placeholder

Then write a headline for the slide that leads with the result, not the company name.
Add a brief note on what makes this case study most credible for [target audience].`} />
          <CopyCard tag="Statistics" title="Make statistics compelling"
            prompt={`I have these statistics to include in my presentation: [paste your stats]
Audience: [describe them]
Point I'm trying to make: [what argument do these stats support?]

For each statistic:
1. Reframe it to be more visceral and memorable (e.g., "$1M lost annually" → "That's 3 engineers' salaries walking out the door every year")
2. Add the comparative context that makes it meaningful (vs industry average, vs last year, vs the cost of the alternative)
3. Suggest the best visual format (big number callout, bar chart, progress bar, before/after)

Then prioritise: which 2-3 statistics are most compelling for this specific audience? Cut the rest.`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Layers size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Pitch Decks & Executive Presentations</h2></div>
          <CopyCard tag="Pitch Deck" title="Investor pitch deck slide content"
            prompt={`Write the content for a [seed / Series A] investor pitch deck for [startup name].
Company: [one sentence description]
Traction: [key metrics]
Ask: [$amount] for [what milestones]

Write the headline and 3 bullets for each slide:
1. Problem (make the pain tangible)
2. Solution (clear, differentiated)
3. Market Size (credible TAM → SAM → SOM)
4. Traction (most impressive numbers first)
5. Business Model (how you make money)
6. Go-to-Market (how you acquire customers)
7. Team (why you)
8. The Ask (amount, use of funds, key milestones)

For each slide headline: make it a statement that makes an investor lean forward, not a topic label.`} />
          <CopyCard tag="Executive" title="Executive decision brief"
            prompt={`Create an executive decision presentation for [decision that needs to be made] for [company/team context].
Options under consideration: [list 2-3]
Recommendation: [if you have one]
Audience: [C-suite / board / leadership team]

Structure (Minto Pyramid — conclusion first):
Slide 1: Recommendation (state it directly)
Slide 2: Why now (the urgency or consequence of delay)
Slide 3: Options evaluated (brief comparison)
Slide 4: Evidence for recommendation (top 3 supporting data points)
Slide 5: Risks and mitigation
Slide 6: Required decisions and owners (who must decide what, by when)

Each slide should have one headline sentence. No bullet should be longer than 8 words.`} />
          <CopyCard tag="Board Update" title="Board or investor update deck"
            prompt={`Write the content for a [quarterly / annual] board presentation for [company].
Key metrics this period: [paste your KPIs with actuals vs targets]
Wins: [top 2-3]
Challenges: [top 2-3]
Key decisions needed from the board: [list them]

For each section:
1. Lead with the headline: the single most important thing the board needs to know
2. Show actuals vs plan with brief narrative on variance
3. Be specific about challenges — boards respect honesty more than spin
4. For decisions needed: frame as options with your recommendation, not open questions
5. Close with the 3 priorities for next quarter and what success looks like`} />
          <CopyCard tag="Sales Deck" title="Sales presentation for prospects"
            prompt={`Write a sales presentation for [product/service] targeting [prospect type — e.g., "VP of Marketing at mid-market SaaS companies"].
Their pain: [the problem they experience]
Our solution: [brief description]
Key differentiators vs alternatives: [2-3 points]
Proof: [customer name, metric, or case study]

Slide-by-slide content:
1. Opening: acknowledge their situation, not product pitch
2. The problem they're living with (make it specific and painful)
3. What most people try (and why it falls short)
4. Our approach (how we're different — show, don't tell)
5. Proof (specific results from a similar customer)
6. Why now (urgency without being pushy)
7. Next steps (specific and low-friction)

Tone: consultative, not salesy.`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Palette size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Speaker Notes & Delivery</h2></div>
          <CopyCard tag="Speaker Notes" title="Write speaker notes for a full deck"
            prompt={`Write speaker notes for each slide in this presentation:
[paste slide titles and bullet points]

For each slide, write 100-150 words that:
1. Explain the insight behind the slide (don't just repeat the bullets)
2. Include a story, example, or analogy that makes the point memorable
3. Address the most likely question or objection at this point in the presentation
4. Include a transition sentence that sets up the next slide ("This brings us to...")
5. Note any emphasis cues: which word or number to stress, where to pause

Write in a natural, conversational tone — these should sound like someone talking, not reading.`} />
          <CopyCard tag="Q&A Prep" title="Anticipate and prepare for tough questions"
            prompt={`I'm presenting [topic] to [audience] and want to prepare for Q&A.
My key claims or recommendations: [list 3-5]
Potential objections or sensitive areas: [list what you're worried about]

Generate the 12 hardest questions this specific audience would ask, including:
- Challenges to your methodology or data sources
- "Have you considered..." alternatives you didn't recommend
- Budget or resource objections
- Questions about what could go wrong
- Questions that expose what you don't know

For each question: a concise, confident answer (3-5 sentences), acknowledging legitimate concerns rather than deflecting.`} />
          <CopyCard tag="Slide Editing" title="Cut and tighten existing slides"
            prompt={`Edit these slides to be more concise and impactful:
[paste your current slide content]

Rules to apply:
1. Each slide should have maximum 1 headline + 3 bullets
2. Each bullet should be maximum 8 words
3. Cut any bullet that's a "nice to have" rather than essential
4. Rewrite headlines to state the insight (conclusion) not just the topic
5. Remove any jargon that the audience might not immediately understand
6. If a slide is trying to make two points, split it into two slides
7. Add a "so what" if the implications aren't explicit

Show the before and after for each slide.`} />
          <CopyCard tag="VBA Automation" title="PowerPoint VBA macro for automation"
            prompt={`Write a PowerPoint VBA macro that:
[describe the automation — e.g., "applies consistent formatting to all slides: sets all body text to 18pt Calibri, makes all headings bold and 28pt, applies the company blue (#0A3D91) to all heading text, and adds slide numbers to all slides except the title slide"]

Include:
- Comments explaining each section
- Error handling for slides that don't have the expected layout
- A message box confirmation when complete
- How to run the macro (Alt+F11 instructions)

Macro should work with PowerPoint 2016 and later.`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Zap size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Content Conversion & Repurposing</h2></div>
          <CopyCard tag="Document to Deck" title="Convert report to presentation"
            prompt={`Convert this document into a [X]-slide presentation:
[paste document or key sections]
Audience: [who will see the presentation]
Goal: [what they should do or think after]

Instructions:
1. Identify the [X] most important insights — not all content will make it in
2. For each insight, write a headline slide (complete sentence, not a topic label)
3. Reduce supporting detail to 3 bullets max per slide
4. Flag which sections should be cut entirely (not every detail belongs in a deck)
5. Suggest where a chart, diagram, or image would be stronger than text
6. Write the executive summary slide last (after you've chosen the key insights)`} />
          <CopyCard tag="Data to Story" title="Turn raw data into a narrative presentation"
            prompt={`I have this data/research: [paste data or describe findings]
The story I want to tell: [what conclusion or recommendation should the audience reach?]
Audience: [describe them — what do they care about?]

Help me build a data-driven narrative:
1. Identify the 3-5 data points that most strongly support the conclusion
2. Determine the logical sequence: which data point should come first to build the argument?
3. Write a headline for each data slide that states the insight (not just "Revenue Chart")
4. Connect the data points with bridging narrative: why does finding A lead to conclusion B?
5. Write the closing recommendation that the data supports

What data should be cut because it's interesting but doesn't support the main argument?`} />
          <CopyCard tag="Training" title="Training or educational presentation"
            prompt={`Create a [X]-slide training presentation on [topic] for [audience / skill level].
Learning objectives (participants should be able to):
1. [Objective 1]
2. [Objective 2]
3. [Objective 3]

For each slide include:
- Slide title and content
- Facilitator note: what to say / explain about this slide
- Engagement suggestion: question to ask the group or activity for this section
- Common misconception: the wrong understanding people often have about this topic

Structure: opening hook → concepts (one at a time) → worked example → practice opportunity → summary + next steps.`} />
          <CopyCard tag="Template" title="Reusable slide template prompts"
            prompt={`I need to create a reusable presentation template for [type of presentation — e.g., "monthly team update" / "project status review" / "client proposal"].
Regular sections this presentation always includes: [list 4-6 recurring sections]

For each section, create:
1. The slide title format (with placeholder text in [brackets])
2. The 3-4 bullets that should always appear in this section
3. Instructions for what to customise each time (what the presenter fills in)
4. The "minimum viable" version of this slide if time is short
5. Optional "deep dive" content for when the audience wants more detail

Goal: a template someone can fill in 30 minutes and deliver confidently.`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Zap size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Editing, Feedback & Refinement</h2></div>
          <CopyCard tag="Critique" title="Critical feedback on an existing deck"
            prompt={`Review this presentation for [audience]: [paste slide titles and key bullets]
Give specific, actionable feedback on:
1. Opening: does slide 1 hook the audience and set up the central question?
2. Narrative: is there a clear logical flow, or does it feel like a collection of slides?
3. The three weakest slides and specifically why they don't work
4. Slides that are trying to make more than one point (split these)
5. The closing: is the ask or takeaway clear and specific?
6. Overall: what is the single change that would most improve this deck?
Be direct — I need honest critique, not encouragement.`} />
          <CopyCard tag="Simplify" title="Simplify complex content for a general audience"
            prompt={`This presentation contains complex [technical / financial / legal] content that needs to be simplified for [describe audience — e.g., "senior executives who are not domain experts"].
Content to simplify: [paste slide content]
For each complex element:
1. Replace jargon with plain language equivalents
2. Convert statistics into relatable analogies or comparisons
3. Replace process descriptions with outcome statements
4. Suggest whether to cut, simplify, or move to an appendix
5. Identify the one concept the audience absolutely must understand vs. "nice to know"
Rule: if you can't explain it simply, the slide shouldn't be in the main deck.`} />
          <CopyCard tag="Persuasion" title="Make the argument more persuasive"
            prompt={`This presentation needs to be more persuasive for [audience]. Current content: [paste key slides]
My recommendation: [state it clearly]
Apply these persuasion techniques where appropriate:
1. Anchoring: what comparison or reference point makes our position look strongest?
2. Loss framing: reframe the recommendation in terms of what they lose by NOT acting
3. Social proof: where can I add credible examples of similar decisions working?
4. Scarcity/urgency: what creates a genuine reason to act now?
5. Reciprocity: what do I give the audience in this deck (insight, framework, clarity) before asking?
Show me the before/after for the 3 slides most in need of strengthening.`} />
          <CopyCard tag="Appendix" title="Build a supporting appendix"
            prompt={`Build an appendix for my presentation on [topic] that supports the main deck without cluttering it.
Main deck is [X] slides covering: [list main topics]
Likely questions or challenges: [list anticipated objections or requests for detail]

For each appendix slide:
1. What question or challenge does it answer?
2. Title and content (data, methodology, detailed analysis)
3. When in the presentation to reference it ("full methodology on slide A-3")

Include: methodology detail, full data tables, competitive analysis detail, financial model assumptions, and relevant case studies that didn't fit the main narrative. Aim for 5-8 appendix slides.`} />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          {faqs.map((item, i) => <FAQ key={i} item={{ question: item.question, answer: item.answer }} />)}
        </section>

        <section className="mb-12 p-6 rounded-lg border border-[#2a1500] bg-[#0a0500]">
          <h3 className="text-lg font-semibold text-white mb-3">Presentation Slide Types: When to Use Each</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-400">
            {[
              { type: 'Title Slide', use: 'Opening and section breaks. Keep it minimal — company, topic, date, your name.' },
              { type: 'Assertion-Evidence', use: 'Your most important slides. Headline states the conclusion; body shows the proof. Works for data, recommendations, findings.' },
              { type: 'Two-Column Comparison', use: 'Comparing two options, before/after, old approach vs new. Clear winner should be visually obvious.' },
              { type: 'Timeline', use: 'Showing a process, roadmap, or history. Use sparingly — too many timeline slides feel like a Gantt chart presentation.' },
              { type: 'Data / Chart Slide', use: 'Lead with the insight in the headline, not the chart type. One chart per slide. Highlight the key data point.' },
              { type: 'Quote / Pull Quote', use: 'Customer testimonials, expert validation, memorable statistics. Full-bleed with large text. One per section maximum.' },
              { type: 'Summary / Takeaway', use: 'End of each section and final slide. Restate the 2-3 things you need the audience to remember.' },
              { type: 'Next Steps / CTA', use: 'Closing slide. Specific actions, owners, and dates. Never end with "Questions?" as your last substantive slide.' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded border border-[#2a1500]">
                <p className="font-semibold text-white mb-1">{item.type}</p>
                <p>{item.use}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 p-6 rounded-lg border border-[#2a1500] bg-[#060300]">
          <h3 className="text-lg font-semibold text-white mb-3">Presentation Length Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            {[
              { type: 'Elevator Pitch', slides: '3 to 5 slides', include: 'Problem, Solution, Ask. One idea per slide, no bullet walls.' },
              { type: 'Investor Deck', slides: '10 to 15 slides', include: 'Problem, Solution, Market, Traction, Team, Financials, Ask.' },
              { type: 'Board Update', slides: '8 to 12 slides', include: 'KPIs, Progress vs Plan, Risks, Decisions Needed.' },
              { type: 'All-Hands', slides: '10 to 20 slides', include: 'Company performance, team wins, priorities, Q&A.' },
              { type: 'Workshop or Training', slides: '20 to 40 slides', include: 'Heavy visuals, exercises, frequent knowledge checks.' },
              { type: 'Conference Talk', slides: '20 to 30 slides', include: 'One idea per slide, strong opening and closing hooks.' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded border border-[#2a1500]">
                <p className="font-semibold text-white mb-1">{item.type}</p>
                <p className="text-[#FF6D00] text-xs mb-1">{item.slides}</p>
                <p className="text-gray-400 text-xs">{item.include}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#2a1500] pt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Related Prompts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'ChatGPT Prompts for Excel', href: '/chatgpt-prompts-excel' },
              { name: 'ChatGPT Prompts for Google Sheets', href: '/chatgpt-prompts-google-sheets' },
              { name: 'AI Prompts for Startups', href: '/ai-prompts-for-startups' },
              { name: 'AI Prompts Email Writing', href: '/ai-prompts-email-writing' },
              { name: 'ChatGPT Prompts for Business', href: '/chatgpt-prompts-for-business' },
              { name: 'AI Prompts for Marketers', href: '/ai-prompts-for-marketers' },
              { name: 'AI Prompts for Writers', href: '/ai-prompts-for-writers' },
              { name: 'Gemini Advanced Prompts', href: '/gemini-advanced-prompts' },
            ].map((link, i) => (
              <a key={i} href={link.href} className="px-4 py-3 rounded border border-[#2a1500] text-gray-300 hover:border-[#FF6D00] hover:text-[#FF6D00] transition-colors text-sm font-medium">{link.name}</a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
