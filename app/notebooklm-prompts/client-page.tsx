'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, BookOpen, Search, Headphones, GraduationCap, Briefcase } from 'lucide-react';
import Link from 'next/link';

const ACCENT = '#4285F4';

function CopyCard({ title, prompt, tag }: { title: string; prompt: string; tag: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="bg-[#111827] border border-[#1f2937] rounded-lg p-6 hover:border-[#4285F4] transition-colors">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-white font-semibold text-lg flex-1">{title}</h3>
        <span className="text-xs bg-[#4285F4]/10 text-[#4285F4] px-2 py-1 rounded whitespace-nowrap">{tag}</span>
      </div>
      <pre className="text-gray-400 text-sm mb-4 leading-relaxed whitespace-pre-wrap font-sans">{prompt}</pre>
      <button
        onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
        className="flex items-center gap-2 text-[#4285F4] hover:text-[#4285F4]/80 text-sm transition-colors"
      >
        {copied ? <><Check size={16} /><span>Copied!</span></> : <><Copy size={16} /><span>Copy prompt</span></>}
      </button>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#1f2937] py-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left hover:text-[#4285F4] transition-colors">
        <span className="text-white font-medium pr-4">{question}</span>
        {open ? <ChevronUp size={20} className="text-[#4285F4] shrink-0" /> : <ChevronDown size={20} className="shrink-0" />}
      </button>
      {open && <p className="text-gray-400 mt-3 text-sm leading-relaxed">{answer}</p>}
    </div>
  );
}

const sections = [
  {
    icon: Search,
    title: 'Document Analysis & Extraction',
    prompts: [
      {
        title: 'Deep Document Breakdown',
        tag: 'Analysis',
        prompt: `Upload [DOCUMENT TYPE: research paper / report / article / book chapter] and give me a full breakdown.

Include:
1. The main thesis or central argument in one sentence
2. Key supporting evidence and how strong each piece is
3. Underlying assumptions the author makes
4. Logical gaps or unsupported claims
5. The strongest and weakest sections of the document

Rate the overall argument quality on a scale of 1-10 and explain why.`,
      },
      {
        title: 'Multi-Document Comparison Table',
        tag: 'Comparison',
        prompt: `I am uploading [NUMBER] documents on [TOPIC].

Create a structured comparison table showing how each document approaches [SPECIFIC ASPECT].

For each document:
- Main argument or position
- Key evidence or data used
- Methodology (if applicable)
- Conclusions reached
- Unique angle not covered by other documents

Then write a 3-sentence synthesis: where do these documents agree, where do they diverge, and what does the disagreement reveal?`,
      },
      {
        title: 'Data & Evidence Extractor',
        tag: 'Extraction',
        prompt: `Analyse this [DOCUMENT] and extract all [TYPE: statistics / quotes / definitions / case studies / data tables].

For each item extracted:
- Exact text or figure
- Section or page where it appears
- Context (what argument it supports)
- Reliability flag (primary source / secondary source / unverified claim)

Format as a structured list I can export to a spreadsheet. Sort by type and relevance.`,
      },
      {
        title: 'Methodology & Credibility Audit',
        tag: 'Critical Reading',
        prompt: `Upload this [ACADEMIC DOCUMENT / STUDY / REPORT] and audit it for methodological rigour.

Assess:
1. Research methodology and whether it is appropriate for the research question
2. Sample size and whether it supports the conclusions
3. Potential sources of bias in data collection or interpretation
4. Limitations the authors acknowledge vs limitations they miss
5. Whether the conclusions are justified by the evidence presented

Flag any statements that could be misinterpreted or overgeneralised. Rate the study's overall credibility.`,
      },
    ],
  },
  {
    icon: BookOpen,
    title: 'Research Synthesis & Literature Review',
    prompts: [
      {
        title: 'Multi-Source Research Synthesiser',
        tag: 'Synthesis',
        prompt: `I am uploading [NUMBER] sources about [RESEARCH QUESTION].

Synthesise all sources to answer: [SPECIFIC QUESTION]

Structure your answer as:
1. Consensus view — what most sources agree on
2. Minority perspectives — positions held by fewer sources with reasoning
3. Contradictions — where sources directly disagree and why
4. Research gaps — what is not yet answered
5. Recommended next steps — the 3 most valuable areas to explore further

Cite which documents support each point using [Document 1], [Document 2] etc.`,
      },
      {
        title: 'Chronological Research Narrative',
        tag: 'Literature Review',
        prompt: `Create a chronological narrative from these [NUMBER] documents that tells the story of how thinking on [TOPIC] has evolved.

For each key development:
- What the dominant view was before this source
- What changed and why
- Which document represents the turning point
- How subsequent documents responded

End with a paragraph explaining: where is the field today and what is the most significant open question?`,
      },
      {
        title: 'Strategic Framework Analysis',
        tag: 'Frameworks',
        prompt: `Analyse these [RESEARCH DOCUMENTS] through the lens of [FRAMEWORK: SWOT / PESTEL / Porter's Five Forces / Jobs-to-Be-Done / another framework].

Use the documents to populate each section of the framework with evidence.

For each section:
- Summarise what the documents reveal
- Identify the strongest and most surprising insights
- Note any framework sections where the documents provide insufficient evidence

Conclude with: what does this framework analysis reveal that is not obvious from reading the documents individually?`,
      },
      {
        title: 'Research Journey Map',
        tag: 'Synthesis',
        prompt: `Using all uploaded documents, create a "research journey" map for [TOPIC].

Stage 1 — Foundation: What was known or assumed before this body of research?
Stage 2 — Challenge: Which documents disrupted or questioned the established view?
Stage 3 — Development: How did the conversation evolve across documents?
Stage 4 — Current state: What do we confidently know now?
Stage 5 — Open frontiers: What remains genuinely uncertain or contested?

Cite specific documents at each stage. Flag the single most important document in this collection and explain why.`,
      },
    ],
  },
  {
    icon: GraduationCap,
    title: 'Study Guides & Learning Materials',
    prompts: [
      {
        title: 'Comprehensive Study Guide Builder',
        tag: 'Study Guide',
        prompt: `Convert [COURSE MATERIAL / TEXTBOOK CHAPTER / LECTURE NOTES] into a structured study guide.

The guide must include:
1. Learning objectives (what the student should know after studying this)
2. Key concepts with plain-English definitions
3. 5 practice questions per major section (with answers)
4. Common misconceptions and corrections
5. A self-assessment checklist: "I can explain X" / "I can apply X to Y"
6. Real-world examples for abstract concepts

Format for a [LEVEL: high school / undergraduate / postgraduate / professional] learner.`,
      },
      {
        title: 'Spaced Repetition Flashcard Deck',
        tag: 'Flashcards',
        prompt: `Turn these [NUMBER] documents into a spaced repetition flashcard deck on [TOPIC].

For each flashcard:
- Question (front): clear, unambiguous, one concept at a time
- Answer (back): concise (1-3 sentences), accurate
- Difficulty rating: Easy / Medium / Hard
- Prerequisite concepts: what the learner needs to know first

Group cards into: Foundational / Core / Advanced / Application.
Flag the 5 cards most students get wrong and explain the common mistake.`,
      },
      {
        title: 'Multi-Level Content Adapter',
        tag: 'Learning',
        prompt: `Upload [DENSE ACADEMIC / TECHNICAL MATERIAL] and create four versions of the same content:

Version 1 — 10-minute overview for a complete newcomer (no jargon)
Version 2 — A glossary of the 20 most important terms with definitions
Version 3 — A concept map describing how ideas connect to each other
Version 4 — 5 common misconceptions people have about this topic, corrected

Then add: 3 real-world examples that make the core concept click for someone without a background in this field.`,
      },
      {
        title: 'Socratic Learning Guide',
        tag: 'Critical Thinking',
        prompt: `Design a Socratic study guide from [EDUCATIONAL MATERIAL].

Instead of providing answers directly, create a sequence of guided questions that lead the student to discover the key insights themselves.

Structure:
- Opening question: challenges assumptions
- Probing questions: deepen understanding of each major concept
- Connection questions: link ideas across the material
- Application questions: test whether they can use the knowledge
- Extension questions: for advanced learners ready for the next level

Include one "struggling student hint" per question for those who get stuck.`,
      },
    ],
  },
  {
    icon: Headphones,
    title: 'Audio Overviews & Podcast Scripts',
    prompts: [
      {
        title: 'Audio Summary Script',
        tag: 'Audio Script',
        prompt: `Prepare a conversational audio summary script of [DOCUMENT] for NotebookLM's audio overview feature.

The script should be:
- [DURATION: 10-minute / 20-minute] when read at a natural pace
- Engaging and conversational — not a robotic recitation
- Structured: hook, main sections (3-5), key takeaways, call to reflection
- Include transition phrases between sections
- Use format markers: [PAUSE], [EMPHASIS], [SLOW DOWN], [EXAMPLE FOLLOWS]

Write for a listener who is hearing this content for the first time with no background reading.`,
      },
      {
        title: 'Two-Expert Interview Script',
        tag: 'Podcast Format',
        prompt: `Create a dialogue script between two experts discussing [DOCUMENT / TOPIC].

Expert A explains the content and key findings.
Expert B asks probing follow-up questions, plays devil's advocate, and seeks clarification on complex points.

Format:
- Natural conversational flow (not Q&A blocks)
- 8-10 exchanges minimum
- Include one moment of genuine disagreement or debate
- End with both experts agreeing on the 3 most important takeaways

Target audience: [AUDIENCE TYPE: general public / business professionals / students / specialists]
Target length when read aloud: [X minutes]`,
      },
      {
        title: 'Podcast Episode Builder',
        tag: 'Podcast',
        prompt: `Turn this [DOCUMENT / RESEARCH / REPORT] into a podcast episode structure.

Deliver:
1. Episode title (3 catchy options)
2. Intro hook (first 30 seconds — must grab attention immediately)
3. Main segment outline (3-5 segments with sub-topics for each)
4. Key soundbites — 5 quotable moments from the content
5. Listener takeaway (what they can do differently after listening)
6. Discussion question for the episode community
7. Suggested episode description (under 150 words, optimised for podcast directories)

Tone: [TONE: educational / entertaining / investigative / inspiring]`,
      },
      {
        title: 'Audiobook Chapter Narrator',
        tag: 'Narration',
        prompt: `Convert [MATERIAL] into an engaging audiobook chapter using storytelling techniques.

Transform the content by:
1. Opening with a real-world scenario or story that draws the listener in
2. Weaving in historical background and human context
3. Using analogies to explain complex concepts
4. Including a character or case study perspective where relevant
5. Closing with "what this means for you" — a personal reflection prompt

Do not just narrate the text — transform it. The listener should feel like they are being told a story, not read a document.
Target chapter length when narrated: [X minutes]`,
      },
    ],
  },
  {
    icon: Briefcase,
    title: 'Business Research & Professional Use',
    prompts: [
      {
        title: 'Executive Research Briefing',
        tag: 'Business',
        prompt: `Analyse these [NUMBER] business documents / reports / industry papers and produce an executive briefing.

Format:
- Situation summary (2-3 sentences): what is happening in this space
- Key findings (5 bullet points): the most important insights for a decision-maker
- Implications (3 points): what this means for our business / strategy
- Risks and uncertainties: what we don't yet know and should monitor
- Recommended actions (3 priorities): what to do based on this research

Write for a C-level audience with no time to read the underlying documents.`,
      },
      {
        title: 'Competitive Intelligence Extractor',
        tag: 'Competitive Analysis',
        prompt: `Upload [COMPETITOR REPORTS / INDUSTRY ANALYSES / PUBLIC FILINGS] and extract competitive intelligence.

Identify:
1. Competitor positioning and messaging strategy
2. Product or service strengths they highlight
3. Weaknesses or gaps implied by what they do not mention
4. Customer segments they target and how
5. Strategic direction based on recent announcements

Produce a one-page competitive summary with a "watch list" — three signals that would indicate a significant competitive shift I should respond to.`,
      },
      {
        title: 'Meeting Notes to Action Plan',
        tag: 'Productivity',
        prompt: `Upload these [MEETING NOTES / TRANSCRIPT / CALL SUMMARY] and convert them into a structured action plan.

Extract:
1. Decisions made (with who made them)
2. Action items (owner, deadline, dependencies)
3. Open questions that need resolution before next meeting
4. Risks or blockers mentioned
5. Key commitments made to external parties

Format the action items as a table: Task | Owner | Deadline | Status | Notes.
Then write a 3-sentence email summary I can send to all attendees to confirm alignment.`,
      },
      {
        title: 'Policy & Compliance Document Decoder',
        tag: 'Legal / Compliance',
        prompt: `Upload this [POLICY / REGULATION / LEGAL DOCUMENT / CONTRACT] and decode it for a non-specialist audience.

Provide:
1. Plain-English summary (under 200 words): what this document requires
2. Who is affected and what they must do differently
3. Key deadlines, thresholds, or triggers to be aware of
4. Most common compliance mistakes organisations make with this type of document
5. Questions I should ask a specialist before taking action

Flag any clauses that require immediate attention or carry significant penalties for non-compliance.`,
      },
    ],
  },
];

const faqs = [
  { q: 'What is NotebookLM and how is it different from ChatGPT?', a: 'NotebookLM is Google\'s AI research tool designed specifically for document analysis. Unlike ChatGPT, NotebookLM grounds all its answers in the documents you upload — it will not hallucinate information from outside your sources. It excels at synthesising information across multiple documents, maintaining context across long files, and generating study materials and audio overviews from uploaded content.' },
  { q: 'What types of documents can I upload to NotebookLM?', a: 'NotebookLM accepts PDFs, Google Docs, text files, and audio files. It handles research papers, books, lecture notes, reports, meeting transcripts, and business documents well. You can upload up to 50 sources per notebook, with each source up to 500,000 words. The quality of analysis improves significantly with well-structured, text-based documents.' },
  { q: 'How do I get more accurate analysis from NotebookLM?', a: 'Be specific in your prompts. Specify the document type, your goal, and the exact angle you want explored. Use the copy-paste prompts above and fill in the bracketed variables carefully. Ask follow-up questions if the first answer is too general. The more context you give, the more targeted the output.' },
  { q: 'How does NotebookLM\'s Audio Overview feature work?', a: 'NotebookLM can automatically generate a two-host podcast-style conversation about your uploaded documents. You can also use the prompts in this guide to create custom audio scripts that NotebookLM can narrate, giving you more control over format, tone, and length. The audio feature makes research portable — you can listen during commutes or exercise.' },
  { q: 'Can I use NotebookLM for academic research and literature reviews?', a: 'Yes, and it is exceptionally good at this. Upload your research papers, then use the synthesis and comparison prompts to identify consensus views, contradictions, research gaps, and key findings across all sources. It can build a literature review narrative, assess methodology quality, and extract statistics and quotes — significantly faster than manual review.' },
  { q: 'How do I use NotebookLM for exam preparation?', a: 'Upload your lecture notes, textbooks, and past papers. Use the study guide prompts to generate learning objectives, concept definitions, practice questions, and flashcard decks. The Socratic guide prompt is especially powerful for deep understanding — it helps you think through material rather than just memorise it.' },
  { q: 'What are NotebookLM\'s limitations?', a: 'NotebookLM works only with content you upload — it cannot browse the internet. It performs best with clear, structured text documents and may struggle with image-heavy PDFs or scanned documents with poor OCR. It is also best used for analysis and synthesis, not for generating new research or creative content from scratch.' },
  { q: 'How does NotebookLM handle multiple documents?', a: 'NotebookLM analyses all documents in a notebook simultaneously, allowing it to identify patterns, contradictions, and connections across sources. Use prompts that explicitly ask for cross-document synthesis. Organise your notebooks thematically — one notebook per research project or topic — for the clearest analysis.' },
  { q: 'Can I use NotebookLM for business and professional research?', a: 'Absolutely. Upload industry reports, competitor filings, policy documents, meeting notes, and market research. Use the business prompts in this guide to produce executive briefings, competitive intelligence summaries, action plans, and plain-English policy decoders. Many knowledge workers are replacing hours of manual summarisation with NotebookLM.' },
  { q: 'Is NotebookLM free to use?', a: 'NotebookLM has a free tier with generous document limits. NotebookLM Plus (part of Google One AI Premium) offers higher usage limits, more customisation, and faster processing. For most researchers and professionals, the free tier is sufficient to start. The prompts in this guide work across both tiers.' },
];

export default function NotebookLMPromptsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'NotebookLM Prompts 2026: 60+ Copy-Paste Templates for Research, Study & Business',
    description: 'Get 60+ copy-paste NotebookLM prompts for document analysis, research synthesis, study guides, audio overviews, and professional research. Expert templates for Google NotebookLM.',
    datePublished: '2026-03-30',
    image: 'https://gptprompts.ai/og-image.png',
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main className="min-h-screen bg-[#030712] text-white py-16 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-[#4285F4]/10 text-[#4285F4] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          NotebookLM Prompts 2026
        </div>
        <h1 className="text-5xl font-bold mb-6 text-[#4285F4]">NotebookLM Prompts</h1>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
          60+ copy-paste prompts to unlock Google NotebookLM's full potential. Expert templates for document analysis, research synthesis, study guides, audio overviews, and professional business research.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[['60+', 'Copy-Paste Prompts'], ['5', 'Research Categories'], ['10', 'FAQ Answers']].map(([num, label]) => (
            <div key={label} className="bg-[#111827] border border-[#4285F4]/30 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-[#4285F4]">{num}</p>
              <p className="text-sm text-gray-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sections */}
      {sections.map((sec, i) => {
        const Icon = sec.icon;
        return (
          <section key={i} className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Icon size={32} style={{ color: ACCENT }} />
              <h2 className="text-3xl font-bold text-white">{sec.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {sec.prompts.map((p, j) => (
                <CopyCard key={j} title={p.title} prompt={p.prompt} tag={p.tag} />
              ))}
            </div>
          </section>
        );
      })}

      {/* FAQ */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="bg-[#111827] border border-[#1f2937] rounded-lg p-8">
          {faqs.map((f, i) => (
            <FaqItem key={i} question={f.q} answer={f.a} />
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">More AI Research & Productivity Prompts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/perplexity-deep-research-prompts', label: 'Perplexity Deep Research', desc: 'Research prompts with live web citations' },
            { href: '/ai-prompts-for-researchers', label: 'AI Prompts for Researchers', desc: 'Academic and scientific research templates' },
            { href: '/gemini-prompts', label: 'Gemini Prompts', desc: 'Expert prompts for Google Gemini AI' },
            { href: '/ai-prompts-for-teachers-educators', label: 'AI for Educators', desc: 'Study guides, lesson plans, and assessments' },
          ].map((r) => (
            <Link key={r.href} href={r.href} className="group bg-[#111827] border border-[#1f2937] rounded-lg p-5 hover:border-[#4285F4] transition-colors">
              <h3 className="text-white font-semibold mb-2 group-hover:text-[#4285F4] transition-colors">{r.label}</h3>
              <p className="text-gray-400 text-sm">{r.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
