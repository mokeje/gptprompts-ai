'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, BookOpen, Search, FileText, BarChart3, Pen } from 'lucide-react';

const accent = '#7C3AED';

interface CopyCardProps { title: string; prompt: string; tag: string; }

function CopyCard({ title, prompt, tag }: CopyCardProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="mb-4 p-4 border rounded-lg border-[#1e0f2e] hover:border-[#7C3AED] transition-colors bg-[#07050f]">
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
    <div className="mb-3 border border-[#1e0f2e] rounded-lg overflow-hidden hover:border-[#7C3AED] transition-colors">
      <button onClick={() => setExpanded(!expanded)} className="w-full p-4 flex items-center justify-between bg-[#07050f] hover:bg-[#0d0916] transition-colors">
        <h3 className="font-semibold text-white text-left text-sm">{item.question}</h3>
        {expanded ? <ChevronUp size={18} style={{ color: accent }} className="flex-shrink-0" /> : <ChevronDown size={18} className="flex-shrink-0 text-gray-500" />}
      </button>
      {expanded && <div className="p-4 bg-[#040308] border-t border-[#1e0f2e] text-gray-300 text-sm leading-relaxed">{item.answer}</div>}
    </div>
  );
}

const faqs = [
  { question: 'Can AI reliably summarise academic papers?', answer: 'AI can produce useful summaries of academic papers, but accuracy varies. It performs well on main findings, methodology overview, and stated conclusions. It can miss nuance, misrepresent statistical claims, or overlook important caveats. Always verify AI summaries against the actual paper, especially for methods, effect sizes, and limitations. Use AI summaries as a starting point for reading, not a replacement for it — particularly for papers central to your research.' },
  { question: 'How do I use AI for a literature review without plagiarism risks?', answer: 'AI is useful for organising and synthesising ideas from papers you have already read — not for generating the review itself. Use AI to: help you identify themes across papers you\'ve summarised yourself, check the logical structure of your argument, improve the clarity of your own writing, and identify gaps you may have missed. The literature review must reflect your own analysis and citations. Never present AI-generated summaries as your own reading of a source.' },
  { question: 'Which AI tools are most useful for academic researchers?', answer: 'For literature discovery: Semantic Scholar, Elicit, Research Rabbit, and Connected Papers (visual citation maps). For paper summarisation: Claude and GPT-4o handle long PDFs well. For writing assistance: Claude for drafting and revision, Grammarly for grammar, Writefull for academic style. For data analysis: ChatGPT code interpreter and Jupyter AI for Python. For reference management: Zotero integrates with AI tools. Choose based on your specific bottleneck — literature finding vs writing vs analysis.' },
  { question: 'How do I use AI to improve my academic writing without losing my voice?', answer: 'Use AI for structural feedback rather than rewrites: "Does this argument flow logically?" "Is this paragraph\'s contribution clear?" "What does this section fail to explain?" When you do ask for rewritten sentences, treat them as options to adapt rather than accept wholesale. Your disciplinary voice, hedging conventions, and citation practices should come from you. AI is particularly helpful for: tightening verbose sentences, improving transitions, and identifying where you\'ve buried the key claim.' },
  { question: 'Can AI help with research design and methodology?', answer: 'AI can help you think through methodology, but treat it as a knowledgeable conversation partner, not an authority. Useful uses: explaining the differences between methodological approaches, helping you articulate your research design choices, identifying potential validity threats you may not have considered, and drafting methodology sections for feedback. Always verify AI claims about specific methods against primary methodology texts. AI may suggest methods that sound plausible but are inappropriate for your specific research context.' },
  { question: 'How do I fact-check AI outputs when researching?', answer: 'Never cite a claim you got from AI without verifying it against a primary source. AI can hallucinate citations, statistics, and findings that sound authoritative. For any specific fact, date, statistic, or citation: verify in the original source. Use AI to help you understand what to look for, then find it yourself. The rule: AI helps you ask better questions and organise what you find — the finding and verification must be yours.' },
  { question: 'How should I disclose AI use in academic research?', answer: 'Disclosure norms are evolving rapidly by institution, journal, and discipline. Most institutions require disclosure of AI use in writing or data analysis. Common acceptable uses: grammar and clarity editing (usually needs disclosure), code debugging (may need disclosure), literature search assistance (usually acceptable). Generally unacceptable without heavy disclosure: using AI to generate literature review content, data interpretation, or conclusions. Check your institution\'s policy and target journal\'s AI policy before submission — these change frequently.' },
  { question: 'Can AI help identify research gaps for a paper or grant proposal?', answer: 'Yes, effectively. Paste your literature review summary and ask: "Based on this overview, what questions remain unanswered? What methodological limitations do the existing studies share? What populations, contexts, or variables are consistently absent?" AI can identify patterns across what you\'ve described. It\'s most effective when you give it rich context about what\'s been done. Always verify identified gaps against your actual reading — AI may miss domain-specific context about why certain gaps exist intentionally.' },
  { question: 'How do I use AI to prepare for conference presentations and peer review?', answer: 'For conference prep: use AI to generate likely questions from your specific audience, practice concise answers, and identify the weakest part of your argument. For peer review preparation: ask AI to review your paper as a critical reviewer in your field — what methodological weaknesses would it flag, what literature might reviewers expect you to cite, where is the argument underdeveloped? This adversarial preparation often surfaces improvements worth making before submission.' },
  { question: 'What are the best AI prompts for qualitative data analysis?', answer: 'AI is useful for qualitative analysis in limited ways: helping you develop a coding framework from your initial readings, suggesting thematic categories to consider, and checking whether your codes are mutually exclusive and exhaustive. It should not code your data for you — qualitative analysis requires interpretive judgement grounded in your theoretical framework and your proximity to the data. Use AI to support your analytical process, not replace it. Document any AI use in your methodology.' },
];

export default function AIPromptsForResearchersPage() {
  return (
    <div className="min-h-screen bg-[#040308]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'AI Prompts for Researchers: Literature Review, Writing, Analysis & More', description: 'Expert AI prompts for academic researchers — literature review synthesis, paper summarisation, research writing, data analysis, methodology design, and grant writing.', image: 'https://gptprompts.ai/researchers-og.jpg', datePublished: '2026-03-29', dateModified: '2026-03-29', author: { '@type': 'Organization', name: 'GPT Prompts AI' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />

      <section className="border-b border-[#1e0f2e] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={32} style={{ color: accent }} />
            <h1 className="text-4xl font-bold text-white">AI Prompts for Researchers</h1>
          </div>
          <p className="text-gray-400 text-lg mb-4">Expert prompts for academic researchers — literature review, paper synthesis, research writing, data analysis, methodology, and grant applications.</p>
          <div className="flex flex-wrap gap-2">
            {['Literature Review', 'Writing', 'Data Analysis', 'Grant Writing'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium border" style={{ borderColor: accent, color: accent }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Search size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Literature Review & Research Synthesis</h2></div>
          <CopyCard tag="Literature Review" title="Synthesise findings across multiple papers"
            prompt={`I've read the following papers on [topic]: [paste summaries or abstracts]
Help me synthesise them by:
1. Identifying the major themes or findings that appear across multiple papers
2. Noting where papers agree and where they conflict, with specific details
3. Identifying methodological patterns (what approaches dominate? what's rarely used?)
4. Mapping the chronological development of ideas in this area
5. Identifying what questions remain unanswered across all these studies
Present this as a synthesis, not a list of individual paper summaries.`} />
          <CopyCard tag="Research Gaps" title="Identify research gaps for a proposal"
            prompt={`Based on this overview of the literature on [topic]: [paste your summary]
Help me identify research gaps suitable for a new study:
1. Empirical gaps: what phenomena or populations haven't been studied?
2. Methodological gaps: what methods have been underused or not applied to this context?
3. Theoretical gaps: what theoretical questions remain untested?
4. Contextual gaps: what settings, cultures, or time periods are missing?
5. Practical gaps: what knowledge would most benefit practitioners in this field?

For each gap: explain why it matters and what filling it would contribute.`} />
          <CopyCard tag="Thematic Analysis" title="Thematic organisation of literature"
            prompt={`I have read [X] papers on [topic]. Here are brief summaries of each:
[paste your summaries]

Help me organise them into a thematic structure for my literature review:
1. Suggest 4-6 overarching themes that cut across the papers
2. Map each paper to its primary theme(s)
3. For each theme, suggest a 2-3 sentence summary of what the literature shows
4. Suggest the logical order to present these themes (which builds on which?)
5. Identify which themes are most contested and would benefit from deeper treatment`} />
          <CopyCard tag="Annotation" title="Critical annotation of a paper"
            prompt={`I'm annotating this paper for my literature review: [paste abstract and key sections or describe the paper]
Help me critically assess:
1. Research question clarity: is it well-defined and answerable?
2. Methodology appropriateness: does the method match the question? Key limitations?
3. Evidence quality: how strong is the evidence for the conclusions?
4. Claims vs evidence: does the paper overstate or understate its findings?
5. Contribution: what does this paper add that wasn't known before?
6. Relevance to my research: [describe your research focus] — how and how closely does this relate?`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Pen size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Academic Writing & Editing</h2></div>
          <CopyCard tag="Writing" title="Improve clarity and argument flow"
            prompt={`Review this section of my academic paper for clarity and argument strength:
[paste section]
Field: [discipline]
Target journal: [journal name or type]
Feedback I need:
1. Is the central argument clear in the first paragraph?
2. Does each paragraph have a clear topic sentence?
3. Where is the argument weakest or least supported?
4. Are there places where I make claims without sufficient evidence or citation?
5. Where is the writing needlessly complex — jargon that could be clearer?
Please provide specific suggestions, not general comments.`} />
          <CopyCard tag="Abstract" title="Write or refine a paper abstract"
            prompt={`Write a structured abstract for my paper on [topic].
Key information:
- Research question / objective: [state it]
- Methods: [brief description of approach]
- Key findings: [2-3 main results]
- Conclusions / implications: [what this means for the field]
- Keywords: [5-7 terms]

Structure the abstract as: Background (1-2 sentences) → Objective (1 sentence) → Methods (2-3 sentences) → Results (2-3 sentences) → Conclusions (1-2 sentences).
Target length: [150-250 words]. Field conventions: [any specific requirements].`} />
          <CopyCard tag="Introduction" title="Structure a research introduction"
            prompt={`Help me structure the introduction for my paper on [topic].
My research fills this gap: [describe the gap]
My argument or hypothesis: [state it]

Write an introduction outline that follows the "funnel" structure:
1. Opening hook: a compelling framing of why this research area matters
2. Current state of knowledge: what do we know (2-3 key points)
3. The gap: what we don't yet know or understand
4. Why this gap matters: theoretical or practical significance
5. This paper's contribution: what I do and why it helps
6. Roadmap: one sentence describing the paper structure

Then write the first paragraph in full, applying your outline.`} />
          <CopyCard tag="Discussion" title="Draft a research discussion section"
            prompt={`Help me draft the discussion section for my paper.
My findings: [describe your key results]
Research question: [state it]
Prior literature I should engage with: [list key papers/theories]

The discussion should:
1. Restate the key findings in relation to the research question (not just list results again)
2. Interpret what the findings mean — why did this happen?
3. Compare to prior literature: where do findings confirm, challenge, or extend existing work?
4. Address limitations honestly (not defensively)
5. Explain theoretical and practical implications
6. Suggest specific future research directions (not generic "more research needed")

Avoid starting every sentence with "The findings show..." — vary the sentence structure.`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><BarChart3 size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Data Analysis & Interpretation</h2></div>
          <CopyCard tag="Statistical Analysis" title="Interpret statistical results"
            prompt={`Help me interpret these statistical results from my study:
Analysis type: [e.g., regression, ANOVA, chi-square]
Results: [paste your output table or describe results: F/t/χ² value, p-value, effect size, confidence intervals]
Research question: [what were you testing?]

Help me:
1. Explain what these results mean in plain language
2. Assess statistical significance and practical significance separately
3. Identify whether the effect size is meaningful for this type of research
4. Note any assumptions I should check given these results
5. Suggest how to report these results in the appropriate format for my field
6. Flag any interpretive claims I should avoid making with this data`} />
          <CopyCard tag="Qualitative" title="Qualitative coding framework development"
            prompt={`I'm developing a coding framework for qualitative analysis of [data type — interviews / documents / observations] on [topic].
My research question: [state it]
Theoretical framework: [e.g., grounded theory / thematic analysis / discourse analysis]

Here are excerpts from my data: [paste 3-5 illustrative quotes or descriptions]
Help me:
1. Develop initial codes that describe what's happening in the data
2. Suggest higher-order themes that might group related codes
3. Check whether the codes are mutually exclusive and collectively exhaustive
4. Identify tensions or contradictions in the data that resist neat coding
5. Note what my theoretical framework would predict vs what I'm actually seeing`} />
          <CopyCard tag="Visualisation" title="Plan data visualisation for a paper"
            prompt={`I need to present this data visually in an academic paper:
Data type: [quantitative / qualitative / mixed]
Key findings to visualise: [describe 3-4 results]
Journal requirements: [colour / black-and-white / figure limit]

For each finding, recommend:
1. The most appropriate chart/figure type and why
2. What to put on each axis (for quantitative) or how to structure it (for qualitative)
3. What to emphasise visually to make the finding clear
4. Whether one combined figure or multiple separate figures is clearer
5. The figure caption text (should describe what to see, not just what the figure is)
6. Common mistakes to avoid for this type of visualisation in academic journals`} />
          <CopyCard tag="Methods" title="Write a rigorous methods section"
            prompt={`Help me write the methods section for my study on [topic].
Study design: [e.g., RCT / case study / survey / experiment]
Participants/sample: [how selected, n=, inclusion/exclusion criteria]
Procedure: [what you did, in order]
Measures/instruments: [what you measured and how]
Analysis approach: [how data was analysed]

The methods section should:
1. Be detailed enough to be replicated by another researcher
2. Justify key methodological choices (why this design, why this sample size)
3. Address potential validity threats and how you mitigated them
4. Note ethical approval and consent procedures
5. Follow conventions for [your discipline/journal style]

Flag any gaps in the information I've given you that a reviewer would question.`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><FileText size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Grant Writing & Research Proposals</h2></div>
          <CopyCard tag="Grant Writing" title="Research proposal narrative"
            prompt={`Help me write a compelling research proposal narrative for [grant type / funder].
My research: [brief description]
Research question: [state it]
Why it matters: [significance — theoretical and practical]
My approach: [brief methodology]
My qualifications: [why I'm the right person to do this]

Write the narrative sections:
1. Significance (why does this matter to this funder specifically?)
2. Innovation (what's genuinely new about this?)
3. Approach (concise, credible, addresses likely reviewer concerns)
4. Impact (specific outcomes, not vague claims)

Funder priorities: [what this grant scheme values — check the funding call]
Word limit per section: [if specified]`} />
          <CopyCard tag="Aims" title="Research aims and objectives"
            prompt={`Help me write specific, measurable research aims and objectives for my study on [topic].
Overall purpose: [broad goal]
My research question(s): [list 1-3]
My approach: [brief description of methods]

Write:
1. One overarching aim (broad statement of purpose)
2. 3-4 specific objectives (concrete, measurable, achievable steps that together achieve the aim)
3. For each objective: the action verb, what you'll do, and what you'll produce
4. Check: do the objectives collectively address the research question? Any gaps?
5. Identify any objective that might be too ambitious for the scope and timeline`} />
          <CopyCard tag="Impact Statement" title="Craft a research impact statement"
            prompt={`Write a research impact statement for my work on [topic].
Research summary: [brief description of what you're doing]
Primary audience for impact: [academic / policy / practice / public]
Potential beneficiaries: [who benefits from this knowledge?]
Timeframe: [when might impacts be realised?]

The impact statement should:
1. Describe academic impact: how does this advance the field?
2. Describe practical/societal impact: who benefits and how?
3. Be specific about mechanisms: how does knowledge get used? By whom?
4. Avoid generic claims ("will benefit society") — name specific actors and decisions
5. Be honest about uncertainty: what has to happen for the impact to be realised?

Format for: [REF impact case study / grant application / public engagement / all three]`} />
          <CopyCard tag="Reviewer Response" title="Respond to peer review comments"
            prompt={`Help me respond to these peer review comments on my paper:
[paste reviewer comments]
My paper is about: [brief description]
For each comment, help me:
1. Categorise it: major revision, minor revision, or clarification needed
2. Assess validity: is the reviewer correct, partially correct, or missing something important?
3. Draft a response: acknowledge the point, state what change I'll make (or why not), and explain how the paper is now better
4. Write the revision text for comments that require new content
Key principle: reviewers are rarely wrong that something is confusing — even if you disagree with their solution, address the underlying confusion.`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><BookOpen size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Research Communication & Dissemination</h2></div>
          <CopyCard tag="Plain Language" title="Plain language summary of research"
            prompt={`Write a plain language summary of my research for a non-specialist audience.
My research: [paste abstract or key findings]
Target audience: [general public / policy makers / practitioners / journalists]
Key message I want to convey: [the main takeaway]

The summary should:
1. Open with why someone who doesn't work in this field should care
2. Explain the research question in one sentence without jargon
3. Describe the approach in terms of what you did, not methodological categories
4. State the findings in plain English — no statistics unless essential
5. Explain what this means in practice (what should people do differently?)
Maximum: 300 words. No passive voice. No disciplinary jargon without explanation.`} />
          <CopyCard tag="Conference Abstract" title="Conference abstract submission"
            prompt={`Write a conference abstract for [conference name / type] on my research about [topic].
Paper title (working): [title]
Research question: [state it]
Method: [brief]
Key findings: [2-3 results]
Contribution: [what this adds]
Word limit: [X words]
Format required: [structured with headings / unstructured paragraph]

The abstract should:
1. Hook the programme committee in the first sentence
2. Clearly state what you did and found (not just what you aimed to do)
3. Articulate the contribution specifically — why does this conference need to hear this?
4. Use the keywords that will attract the right audience
5. End with a clear statement of theoretical or practical implications`} />
          <CopyCard tag="Blog Post" title="Research blog post for broader audience"
            prompt={`Write a research blog post based on my paper on [topic].
Core finding: [your main result in plain language]
Why it matters: [practical or theoretical significance]
Target readers: [academics in adjacent fields / practitioners / policy audience]
Length: 600-800 words. Tone: accessible but substantive.

Structure:
1. Opening hook: a concrete scenario, surprising fact, or question that draws them in
2. The puzzle: what question does the research address and why is it hard to answer?
3. What we did: brief, jargon-free methods
4. What we found: the key result with one illustrative example
5. Why it matters: who should change what because of this?
6. Limitations and next steps: honest and brief
7. Closing: memorable takeaway, not generic summary`} />
          <CopyCard tag="Social Media" title="Academic social media posts"
            prompt={`Write social media posts about my research on [topic] for these platforms:

1. Twitter/X thread (3-5 tweets): Hook tweet → key finding → implication → where to read more
2. LinkedIn post (200-250 words): Professional narrative with context, finding, and call to action
3. Bluesky post (280 characters): Most surprising or counterintuitive finding
4. Research summary for ResearchGate / Academia.edu (100 words): Clear summary for academic peers

For each platform, match the tone to the audience. Use hashtags where appropriate.
Key finding: [state your main result]
Link to paper: [URL if available]`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Search size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Research Productivity & Workflows</h2></div>
          <CopyCard tag="Reading Strategy" title="Efficient paper reading strategy"
            prompt={`I have [X] papers to read on [topic] in [timeframe]. Help me read them efficiently.
Papers: [list titles/authors or paste abstracts]
My goal: [what do you need from this reading — background, specific methods, evidence for argument?]
Create a reading strategy:
1. Categorise: which papers are essential vs useful vs background?
2. Reading depth: which to read fully vs skim vs read abstract only?
3. Reading order: which to read first to build the right foundation?
4. What to extract from each: create a note-taking template tailored to my goal
5. Time estimate: how long each depth level takes and whether [timeframe] is realistic`} />
          <CopyCard tag="Note Taking" title="Structured research note template"
            prompt={`Create a research note template for papers I'm reading on [topic].
My research question: [state it]
Fields to capture for each paper:
- Full citation (formatted for [citation style])
- Research question and context
- Methodology (in 2-3 sentences)
- Key findings (3-5 bullet points)
- Methodological limitations
- Relevance to my research: [how does this connect?]
- Quotable passages (with page numbers)
- Questions raised / follow-up reading suggested
- My critical assessment (in 2-3 sentences)
Format this as a Markdown template I can use for every paper.`} />
          <CopyCard tag="Writing Schedule" title="Academic writing schedule and accountability"
            prompt={`Help me build a realistic writing schedule for [academic project — paper / thesis / book chapter].
Deadline: [date]
Current state: [draft stage / outline / notes only]
Available writing time: [hours per week, on which days]
My biggest writing obstacle: [e.g., procrastination, perfectionism, unclear argument]

Create:
1. A milestone plan working backwards from the deadline (first draft, revisions, final)
2. Weekly writing targets that are specific (e.g., "draft methods section, 800 words")
3. Strategies for my specific obstacle
4. A daily writing routine recommendation (when, for how long, in what conditions)
5. What to do when I miss a scheduled session — how to recover without derailing`} />
          <CopyCard tag="Supervision" title="Prepare for a supervision or advisor meeting"
            prompt={`Help me prepare for my [PhD supervision / advisor meeting / thesis committee meeting].
Meeting date: [date]
Current work status: [brief description of where I am]
Progress since last meeting: [what I've done]
Current roadblocks: [what I'm stuck on]
Questions I need answered: [list them]

Prepare:
1. A one-page progress summary my supervisor can read in 3 minutes
2. A clear agenda for the meeting (what decisions or feedback I need)
3. How to frame the roadblocks constructively (not as complaints — as specific questions)
4. What I should have ready to show or demonstrate
5. The single most important thing I need from this meeting`} />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          {faqs.map((item, i) => <FAQ key={i} item={{ question: item.question, answer: item.answer }} />)}
        </section>

        <section className="mb-12 p-6 rounded-lg border border-[#1e0f2e] bg-[#060308]">
          <h3 className="text-lg font-semibold text-white mb-3">Research Disclosure Best Practices</h3>
          <p className="text-gray-400 text-sm mb-3">Most journals and institutions now require disclosure of AI tool use. Use this as a starting template and adapt to your publisher's requirements.</p>
          <div className="font-mono text-xs text-gray-400 p-3 rounded border border-[#1e0f2e] leading-relaxed">
            "The authors used [AI tool name, e.g. ChatGPT-4 by OpenAI] to [specific use, e.g. assist with drafting and editing the introduction section / perform initial literature screening / check grammar and clarity of the manuscript]. The final content was reviewed, edited, and approved by the authors, who take full responsibility for the integrity and accuracy of the work."
          </div>
          <p className="text-gray-500 text-xs mt-3">Always check the specific AI policy of your target journal, conference, or institution before submission. Policies vary widely and are evolving rapidly.</p>
        </section>

        <section className="mb-12 p-6 rounded-lg border border-[#1e0f2e] bg-[#060308]">
          <h3 className="text-lg font-semibold text-white mb-3">AI Tools for Research by Task</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              { task: 'Literature search and summarisation', tools: 'Elicit, Consensus, Perplexity, ChatGPT with web browsing' },
              { task: 'Writing and editing manuscripts', tools: 'Claude, ChatGPT, Grammarly, Writefull for academic style' },
              { task: 'Statistical analysis and coding', tools: 'ChatGPT Code Interpreter, Claude, GitHub Copilot for R/Python' },
              { task: 'Grant writing and funding', tools: 'Claude, ChatGPT for drafting sections, Grantable for grant-specific language' },
              { task: 'Citation management', tools: 'Zotero with AI plugins, Connected Papers for visual citation mapping' },
              { task: 'Research communication and outreach', tools: 'Claude for plain-language summaries, Canva AI for research posters' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded border border-[#1e0f2e]">
                <p className="font-semibold text-white mb-1">{item.task}</p>
                <p className="text-gray-400">{item.tools}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#1e0f2e] pt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Related Prompts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'AI Homework Prompts', href: '/ai-homework-prompts' },
              { name: 'AI Prompts for Education', href: '/ai-prompts-for-education' },
              { name: 'Essay Prompts', href: '/essay-prompts' },
              { name: 'AI Writing Prompts', href: '/ai-writing-prompts' },
              { name: 'ChatGPT Data Analysis Prompts', href: '/chatgpt-data-analysis' },
              { name: 'Perplexity AI Prompts', href: '/perplexity-ai-prompts' },
              { name: 'Gemini Advanced Prompts', href: '/gemini-advanced-prompts' },
              { name: 'AI Prompts for Writers', href: '/ai-prompts-for-writers' },
            ].map((link, i) => (
              <a key={i} href={link.href} className="px-4 py-3 rounded border border-[#1e0f2e] text-gray-300 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors text-sm font-medium">{link.name}</a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
