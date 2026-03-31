'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, FileText, PenTool, Megaphone, Mail, Code2, Layers } from 'lucide-react';

const accent = '#06B6D4';
const borderCol = '#001a20';
const bgDark = '#030608';

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
    title: 'Content & Blog Writing',
    icon: FileText,
    description: 'Generate SEO-optimised blog posts, long-form articles, listicles, and thought leadership content that ranks and resonates.',
    prompts: [
      {
        tag: 'Blog Post',
        title: 'Long-Form SEO Blog Post',
        prompt: `Write a comprehensive, SEO-optimised blog post on [TOPIC]:

Target keyword: [PRIMARY KEYWORD]
Secondary keywords: [2-3 RELATED KEYWORDS]
Target audience: [WHO IS READING THIS — expertise level, role, goals]
Word count: [1500 / 2000 / 2500 words]
Tone: [AUTHORITATIVE / CONVERSATIONAL / INSPIRATIONAL / TECHNICAL]
CTA at the end: [WHAT ACTION DO YOU WANT READERS TO TAKE]

Structure the post as:
- Compelling headline (include primary keyword, promise a specific benefit)
- Hook introduction (open with a surprising statistic, story, or provocative question)
- Problem context (why this topic matters right now)
- Main body with H2 and H3 subheadings (each section addresses a specific sub-question)
- Actionable advice throughout (specific steps, not vague guidance)
- Real examples or case studies
- Conclusion with summary and clear CTA

Avoid: generic advice that could apply to any topic, passive voice, filler phrases`,
      },
      {
        tag: 'Listicle',
        title: 'Authority Listicle Generator',
        prompt: `Write a high-value listicle on [TOPIC]:
Format: [NUMBER] [TITLE — e.g., "10 Ways to Improve Your Team's AI Literacy"]
Audience: [WHO WILL READ THIS]
Each point should:
1. Have a specific, action-oriented heading (not "Be More Organised" — try "Block deep work time using the 90-minute focus method")
2. Open with a 1-2 sentence explanation of why this matters
3. Provide a specific, actionable technique or example (not just "you should do X")
4. Include a stat, study reference, or real-world example where possible
5. Close with a quick implementation tip ("Start tomorrow by...")

Overall tone: [TONE]
Estimated reading time target: [5 / 7 / 10 minutes]
Include intro and conclusion paragraphs around the list.`,
      },
      {
        tag: 'Thought Leadership',
        title: 'Thought Leadership Article',
        prompt: `Write a thought leadership article for [TOPIC/INDUSTRY]:
Author perspective: [YOUR ROLE/EXPERTISE AND UNIQUE ANGLE]
Core argument or thesis: [WHAT COUNTER-INTUITIVE OR FORWARD-LOOKING POINT DO YOU WANT TO MAKE]
Supporting evidence: [3 KEY DATA POINTS, OBSERVATIONS, OR EXAMPLES]
Target publication: [LINKEDIN ARTICLE / INDUSTRY BLOG / NEWSLETTER / COMPANY BLOG]
Word count: [800-1200 words]

Structure:
1. Bold opening thesis (the most provocative version of your argument)
2. Why the conventional wisdom is wrong or incomplete (challenge the status quo)
3. Three evidence-based reasons your argument is correct
4. A concrete example or case study that proves the point
5. The practical implication (what should readers do differently?)
6. A memorable close that reinforces the core message

Tone: confident, specific, evidence-driven — not hedged or vague`,
      },
    ],
  },
  {
    title: 'Marketing & Ad Copy',
    icon: Megaphone,
    description: 'Generate high-converting ad copy, landing page text, product descriptions, and campaign messaging across channels.',
    prompts: [
      {
        tag: 'Ad Copy',
        title: 'Facebook/Meta Ad Copy Set',
        prompt: `Write a complete Facebook/Meta ad copy set for [PRODUCT/SERVICE]:
Product: [DESCRIBE WHAT YOU ARE ADVERTISING]
Target audience: [WHO ARE YOU REACHING — demographics, interests, pain points]
Campaign objective: [AWARENESS / TRAFFIC / CONVERSIONS / LEADS]
Key benefit: [SINGLE MOST IMPORTANT BENEFIT — choose one]
Offer or CTA: [WHAT DO YOU WANT THEM TO DO]

Write three ad variations:
Ad 1 — PAIN POINT: Opens by agitating the problem this product solves
Ad 2 — SOCIAL PROOF: Leads with a result or testimonial
Ad 3 — CURIOSITY/HOOK: Opens with a surprising question or bold statement

For each ad provide:
- Primary text (125 characters for mobile preview)
- Headline (40 characters)
- Description (30 characters)
- Full expanded text (for desktop — up to 250 words)
- Suggested image or video concept`,
      },
      {
        tag: 'Landing Page',
        title: 'Landing Page Copy Framework',
        prompt: `Write a complete landing page copy framework for [PRODUCT/SERVICE]:
Product/service: [DESCRIBE IT]
Target customer: [WHO AND WHAT PAIN DO THEY HAVE]
Main offer: [WHAT ARE THEY GETTING]
Price point: [COST OR FREE]
Key benefits: [LIST 3-5]
Social proof available: [TESTIMONIALS / NUMBERS / LOGOS / CASE STUDIES]
Primary CTA: [SIGN UP / BUY / BOOK DEMO / DOWNLOAD]

Write all copy sections in order:
1. Hero headline + subheadline (solve the problem in 10 words)
2. Problem statement section (empathise with the pain)
3. Solution introduction (how your product solves it)
4. Benefits section (3-5 benefit headlines with short descriptions)
5. Social proof block (testimonial quotes + numbers)
6. Features breakdown (what they actually get — be specific)
7. FAQ section (address the top 4 objections)
8. Final CTA section (urgency-based close)`,
      },
      {
        tag: 'Product',
        title: 'E-commerce Product Description',
        prompt: `Write an e-commerce product description for [PRODUCT NAME]:
Product category: [CATEGORY]
Key features: [LIST 5-7 FEATURES]
Materials or ingredients: [IF RELEVANT]
Primary buyer: [WHO BUYS THIS AND WHY]
Emotional benefit: [HOW IT MAKES THEM FEEL]
Practical benefit: [WHAT PROBLEM IT SOLVES]
Price positioning: [BUDGET / MID / PREMIUM]

Deliver:
1. Short description (50-75 words — for product card/preview)
2. Full description (200-300 words — for product page)
3. Bullet point features list (5-7 bullets, benefit-led not feature-led)
4. SEO title tag (under 60 characters, includes keyword)
5. Meta description (150-160 characters)
6. Customer review-style testimonial (1 paragraph, specific and authentic-sounding)`,
      },
    ],
  },
  {
    title: 'Professional & Business Writing',
    icon: PenTool,
    description: 'Draft professional reports, executive communications, proposals, and business documents with appropriate tone and structure.',
    prompts: [
      {
        tag: 'Executive',
        title: 'Executive Report Summary',
        prompt: `Write an executive summary for a business report on [TOPIC]:
Full report context: [BRIEFLY DESCRIBE WHAT THE FULL REPORT COVERS]
Key findings: [LIST 3-5 KEY FINDINGS OR DATA POINTS]
Recommendations: [LIST 2-4 RECOMMENDED ACTIONS]
Audience: [C-SUITE / BOARD / SENIOR MANAGEMENT]
Decisions required: [WHAT DO YOU NEED THE READER TO DECIDE?]

Write a 300-word executive summary that:
- Opens with the single most important insight from the report
- Covers findings in order of business impact (most important first)
- Frames each finding in terms of opportunity or risk
- Presents recommendations with clear next steps and owners
- Ends with the specific decision or approval required
- Uses plain business language — no jargon or passive voice

Tone: direct, confident, decision-oriented`,
      },
      {
        tag: 'Proposal',
        title: 'Business Proposal Generator',
        prompt: `Write a business proposal for [WHAT YOU ARE PROPOSING]:
Client/recipient: [WHO WILL RECEIVE THIS]
Problem to solve: [THEIR CHALLENGE OR NEED]
Your proposed solution: [WHAT YOU ARE OFFERING]
Timeline: [DURATION OF ENGAGEMENT]
Investment: [BUDGET RANGE OR "TO BE DISCUSSED"]
Your credentials: [WHY YOU / YOUR COMPANY IS QUALIFIED]

Structure the proposal as:
1. Executive overview (problem + solution in 2 sentences)
2. Understanding of the challenge (show you understand their situation)
3. Proposed approach (methodology, stages, deliverables)
4. Timeline and milestones (specific dates and outputs)
5. Team and credentials (relevant experience, case studies)
6. Investment (pricing structure and what it includes)
7. Terms and next steps (how to proceed)

Tone: professional, confident, client-focused — "you" more than "we"`,
      },
      {
        tag: 'Email',
        title: 'Professional Email Drafter',
        prompt: `Write a professional email for the following situation:
Sender: [YOUR NAME/ROLE]
Recipient: [WHO YOU ARE EMAILING — THEIR ROLE AND RELATIONSHIP TO YOU]
Purpose: [WHAT THIS EMAIL NEEDS TO ACHIEVE]
Key information to convey: [LIST THE KEY POINTS]
Tone needed: [FORMAL / WARM PROFESSIONAL / ASSERTIVE / DIPLOMATIC]
Desired outcome: [WHAT ACTION OR RESPONSE DO YOU WANT]

Write an email with:
- Subject line (specific and action-oriented — avoid vague subjects)
- Appropriate greeting
- Clear opening line that states purpose immediately
- Body paragraphs organised logically (context → substance → ask)
- Specific, frictionless call to action
- Professional close
- Avoid: long paragraphs, buried ask, passive-aggressive phrasing, excessive softening`,
      },
    ],
  },
  {
    title: 'Creative & Fiction Writing',
    icon: Layers,
    description: 'Generate creative fiction, poetry, scripts, and imaginative writing across genres and forms.',
    prompts: [
      {
        tag: 'Fiction',
        title: 'Short Story Scene Generator',
        prompt: `Write a short fiction scene with the following parameters:
Genre: [GENRE]
POV character: [BRIEF DESCRIPTION — personality, emotional state in this scene]
Setting: [SPECIFIC PLACE + ATMOSPHERE]
What happens in this scene: [THE KEY EVENT OR ENCOUNTER]
Emotional stakes: [WHAT DOES THIS SCENE COST OR MEAN TO THE CHARACTER]
Tone: [DARK / HOPEFUL / TENSE / WISTFUL / COMEDIC]
Word count: [500 / 800 / 1200 words]

Requirements:
- Open with a sentence that immediately puts us in the scene (no setup preamble)
- Use specific sensory detail throughout (what the character sees, hears, smells)
- Include internal thought or emotional awareness without stating emotions flatly
- Include at least one line of dialogue that reveals character
- End in a way that creates forward momentum or leaves a resonant feeling

Avoid: clichés, over-explaining, passive voice, on-the-nose emotional statements`,
      },
      {
        tag: 'Poetry',
        title: 'Poetry Generator',
        prompt: `Write a poem about [SUBJECT/THEME]:
Form: [FREE VERSE / SONNET / HAIKU SEQUENCE / VILLANELLE / PROSE POEM / ODE]
Tone: [ELEGIAC / CELEBRATORY / SARDONIC / TENDER / URGENT / MEDITATIVE]
Central image or metaphor: [OPTIONAL — a specific image to build around]
What the poem should make the reader feel: [EMOTION OR REALISATION]
Length: [SHORT — 12 lines / MEDIUM — 24 lines / LONG — 40+ lines]

Craft requirements:
- Avoid clichéd imagery (hearts, flowers as defaults — find unexpected angles)
- Use concrete, specific nouns rather than abstract ones
- Let the form serve the content — if writing a sonnet, the volta should land emotionally
- The ending should feel earned, not telegraphed
- Sound matters: read it aloud — rhythm, assonance, and consonance should work

Provide: the poem + a brief note on craft choices made`,
      },
      {
        tag: 'Script',
        title: 'Screenplay Scene',
        prompt: `Write a screenplay scene formatted to industry standard:
Scene location: [INT./EXT. LOCATION — DAY/NIGHT]
Characters in scene: [LIST CHARACTERS WITH BRIEF DESCRIPTION]
Purpose of scene: [WHAT THIS SCENE ACCOMPLISHES IN THE STORY]
Subtext: [WHAT IS REALLY HAPPENING UNDERNEATH THE SURFACE DIALOGUE]
Scene length: [1 PAGE / 2 PAGES / 3 PAGES (roughly 1 minute per page)]

Write the scene with:
- Proper screenplay formatting (scene heading, action lines, dialogue, parentheticals sparingly)
- Action lines that are visual and present-tense ("MARA stands at the window" not "Mara was standing")
- Dialogue that is subtext-rich (characters rarely say what they mean)
- Business (physical activity) that grounds characters during dialogue
- A clear scene turn — the situation should be different at the end than at the start`,
      },
    ],
  },
  {
    title: 'Technical Writing & Documentation',
    icon: Code2,
    description: 'Generate clear, well-structured technical documentation, how-to guides, API docs, and instructional content.',
    prompts: [
      {
        tag: 'Documentation',
        title: 'Technical Documentation Template',
        prompt: `Write technical documentation for [FEATURE/PRODUCT/API]:
Audience: [DEVELOPERS / END USERS / ADMINS / NON-TECHNICAL USERS]
Documentation type: [GETTING STARTED GUIDE / API REFERENCE / HOW-TO / TROUBLESHOOTING]
Technical context: [DESCRIBE WHAT THE FEATURE/PRODUCT DOES]
Key tasks users need to accomplish: [LIST 3-5]

Structure the documentation with:
1. Overview section (what this does in 2-3 sentences)
2. Prerequisites (what users need before starting)
3. Step-by-step instructions (numbered, specific, one action per step)
4. Code examples (formatted as code blocks where relevant)
5. Expected outcomes (what success looks like at each stage)
6. Common errors and troubleshooting (the top 3 things that go wrong)
7. Next steps or related documentation

Writing principles: active voice, imperative mood ("Click the button" not "The button should be clicked"), concrete examples`,
      },
      {
        tag: 'How-To',
        title: 'How-To Guide Writer',
        prompt: `Write a comprehensive how-to guide for [TASK]:
Audience knowledge level: [BEGINNER / INTERMEDIATE / ADVANCED]
Platform or context: [WHERE THIS TASK IS PERFORMED]
Time required: [ESTIMATED COMPLETION TIME]
Tools or resources needed: [LIST]

Write the guide with:
1. Introduction: what the reader will achieve and why it matters (2-3 sentences)
2. What you need: tools, access, prerequisites (bullet list)
3. Step-by-step instructions:
   - Number each step clearly
   - One action per step (break complex steps into sub-steps)
   - Include screenshots guidance or visual cues where helpful
   - Explain WHY for non-obvious steps
4. Verification: how to confirm it worked
5. Troubleshooting: 3 common problems and their solutions
6. Tips and best practices (optional pro-level advice)

Avoid: assuming knowledge without stating it, multiple actions in one step, vague instructions ("configure the settings")`,
      },
      {
        tag: 'SOP',
        title: 'Standard Operating Procedure',
        prompt: `Write a Standard Operating Procedure (SOP) for [PROCESS]:
Department/team: [WHO USES THIS SOP]
Process name: [OFFICIAL NAME OF THE PROCESS]
Frequency: [HOW OFTEN THIS IS PERFORMED]
Owner: [WHO IS RESPONSIBLE]
Time to complete: [ESTIMATED DURATION]

SOP structure:
1. Purpose (why this process exists — 2 sentences)
2. Scope (who this applies to and what it covers)
3. Definitions (any terms that need clarifying)
4. Responsibilities (who does what — use role names not person names)
5. Procedure (numbered steps with sub-steps where needed)
6. Quality checks (what to verify at key stages)
7. Exception handling (what to do if something goes wrong)
8. Document control (version, last updated, reviewed by)

Format: formal, passive-free, consistent verb tense throughout`,
      },
    ],
  },
  {
    title: 'Social Media & Short-Form Content',
    icon: Mail,
    description: 'Generate platform-optimised social media content, captions, threads, and short-form copy for maximum engagement.',
    prompts: [
      {
        tag: 'LinkedIn',
        title: 'LinkedIn Post Generator',
        prompt: `Write a high-performing LinkedIn post about [TOPIC]:
Your perspective or unique angle: [WHAT IS YOUR TAKE — contrarian, personal story, data-driven]
Target audience: [WHO YOU WANT TO REACH]
Core message: [THE ONE THING YOU WANT PEOPLE TO REMEMBER]
CTA: [WHAT SHOULD PEOPLE DO — comment, share, visit link, reflect]
Tone: [PROFESSIONAL / CONVERSATIONAL / INSPIRING / EDUCATIONAL]

Write the post with:
- Hook line (first line must stop the scroll — do not start with "I" or "Excited to share")
- Hook formats that work: provocative question, bold claim, surprising statistic, "X years ago..."
- Body: 4-8 short paragraphs (2-3 lines each for mobile readability)
- Use white space liberally — no long blocks of text
- Personal insight or lesson (not just information — your interpretation)
- CTA that invites engagement without being desperate ("What's your experience?")
- 3-5 relevant hashtags at the end

Word count: 150-250 words`,
      },
      {
        tag: 'Twitter/X',
        title: 'Twitter Thread Creator',
        prompt: `Write a Twitter/X thread about [TOPIC]:
Core idea: [THE MAIN POINT OF THE THREAD]
Thread length: [5 / 8 / 12 tweets]
Audience: [WHO YOU ARE WRITING FOR]
Tone: [EDUCATIONAL / ENTERTAINING / PROVOCATIVE / PERSONAL]

Structure the thread:
Tweet 1 (Hook): The most compelling version of your argument — must make people want to read on
Tweets 2-[N-1] (Body): Each tweet = one idea, example, or insight. Short paragraphs, white space, specific data when possible
Tweet [N] (Close): Actionable summary, strong takeaway, or CTA

Rules for each tweet:
- Maximum 280 characters each
- Standalone readable but better in sequence
- No jargon unless your audience specifically knows it
- Numbers, specifics, and examples over vague claims
- End hook tweet with a cliffhanger or number ("Here's what I learned: (thread)")`,
      },
      {
        tag: 'Newsletter',
        title: 'Email Newsletter Section',
        prompt: `Write an email newsletter section/edition on [TOPIC]:
Newsletter name/brand: [NAME AND BRIEF DESCRIPTION OF THE NEWSLETTER]
Subscriber audience: [WHO SUBSCRIBES]
This edition's central theme: [FOCUS FOR THIS ISSUE]
Sections to include: [INTRO / MAIN STORY / 3 LINKS / QUICK TIPS / CLOSING]

Write each section:
1. Subject line (40-50 characters — open-worthy, specific, honest)
2. Preview text (90 characters — complements subject line)
3. Greeting/intro (2-3 sentences — this week's context, what's inside)
4. Main article section (400-500 words — the core piece of value)
5. Curated links section (3 links with 2-sentence commentary on each)
6. Quick tip or insight (100 words — fast actionable value)
7. Closing personal note (3-4 sentences — human, warm, builds relationship)

Tone: [NEWSLETTER VOICE — match established newsletter brands readers would know]`,
      },
    ],
  },
];

const faqs = [
  {
    question: 'What is an AI text generator?',
    answer: 'An AI text generator is a tool powered by large language models (LLMs) that generates written content from a text prompt or brief. Modern AI text generators — including ChatGPT, Claude, Gemini, Jasper, and Copy.ai — can produce blog posts, ad copy, emails, social media content, creative fiction, technical documentation, and more. The quality and style of output depends heavily on how specific and well-structured your prompt is.',
  },
  {
    question: 'Which AI text generator produces the best content?',
    answer: 'The best AI text generator depends on your use case. ChatGPT (GPT-4o) is the most versatile for general writing tasks and has the broadest capability range. Claude is particularly strong for nuanced, long-form content and following complex instructions. Gemini 1.5 Pro integrates well with Google Workspace and handles very long context windows. Jasper and Copy.ai are optimised specifically for marketing copy with built-in brand voice features. For most users, ChatGPT or Claude will handle 80-90% of writing tasks excellently.',
  },
  {
    question: 'How do I write better prompts for AI text generators?',
    answer: 'The most effective text generation prompts specify: (1) the output format (blog post, email, ad copy); (2) the target audience and their knowledge level; (3) the tone and voice (formal, conversational, humorous); (4) the core message or argument; (5) the desired length; (6) the call to action or purpose; and (7) any style references (write like X, in the style of Y). Adding these eight elements transforms mediocre AI output into content you can actually use with minimal editing.',
  },
  {
    question: 'Can AI-generated text be detected?',
    answer: 'Yes — AI detection tools like GPTZero, Turnitin AI, Originality.ai, and others can flag AI-generated content with varying accuracy. Detection is based on patterns like predictability, certain phrase structures, and statistical signatures of LLM output. Human editing of AI content — adding specific examples, personal voice, varied sentence structure, and genuine opinions — makes it significantly harder to detect. For academic or journalistic contexts where AI use is prohibited, human rewriting is essential.',
  },
  {
    question: 'Is AI-generated text good for SEO?',
    answer: 'AI-generated text can be effective for SEO when it is: genuinely helpful and informative (matching search intent), well-structured with appropriate headings, edited to add original insight and specific examples, and not simply keyword-stuffed content farms. Google has stated its ranking systems target low-quality, unhelpful content — not AI content specifically. Well-edited, high-quality AI-assisted content can rank well. Thin, generic AI content with no human value-add typically performs poorly.',
  },
  {
    question: 'How long can AI text generators write?',
    answer: 'Modern AI text generators can produce very long documents in a single generation. ChatGPT with GPT-4o can output thousands of words. Claude has an extremely large context window, handling documents of 100,000+ tokens. However, quality can decrease over very long generations — it is often better to generate content in structured sections (intro, each main section, conclusion separately) and then combine them, which allows you to review and refine each part before moving to the next.',
  },
  {
    question: 'Can AI write in my specific brand voice?',
    answer: 'Yes — AI text generators can be trained on your brand voice by providing examples of your existing content, a brand voice guide, tone adjectives, things to avoid, and persona descriptions. The more examples and explicit guidance you provide in your prompt, the closer the output will match your voice. For consistent brand voice across an organisation, dedicated tools like Jasper with brand voice features, or custom system prompts in ChatGPT/Claude API, are more reliable than one-off prompting.',
  },
  {
    question: 'What types of content should I NOT use AI to write?',
    answer: 'AI text generators are not appropriate for: original investigative journalism requiring primary research and source interviews; medical, legal, or financial advice where accuracy is safety-critical; academic work where AI use is prohibited; highly personal communications where authenticity is essential; content requiring genuine lived experience (personal memoirs, first-hand testimony); and situations where the human expert\'s unique judgment and insight are the core value proposition. Always disclose AI assistance in contexts where transparency is expected.',
  },
  {
    question: 'How do I avoid common AI writing clichés?',
    answer: 'Common AI writing clichés to avoid include: "In today\'s fast-paced world", "It\'s worth noting", "Dive into", "Delve into", "Game-changer", "Leveraging", excessive use of "Furthermore" and "Moreover", formulaic three-part lists, and overly balanced arguments that hedge everything. To avoid these: give the AI explicit instructions to avoid clichés, provide strong style references, review for these patterns specifically during editing, and ask the AI to "rewrite this section in a more direct and specific voice".',
  },
  {
    question: 'How much should I edit AI-generated text?',
    answer: 'For professional use, plan to edit AI-generated text significantly — typically 30-60% rewrite effort to make it genuinely good. AI provides an excellent starting structure and draft velocity, but human editing adds: specific examples from your actual experience, accurate brand voice, verified facts and statistics, genuine opinions and original perspectives, and the natural rhythm and variation of real human writing. Think of AI text as a very good first draft that needs your expertise, not finished copy.',
  },
];

export default function AITextGeneratorPromptsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best AI Text Generator Prompts — Blog, Marketing, Creative & More',
    description: 'Copy-ready AI text generator prompts for blog writing, marketing copy, professional documents, creative fiction, technical writing, and social media.',
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
    <div className="min-h-screen text-white" style={{ background: '#020507' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-4" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
            <FileText size={12} /> AI Writing Tools
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">AI Text Generator Prompts</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Copy-ready prompts for blog posts, marketing copy, professional documents, creative writing, technical docs, and social media content.
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
          <h2 className="text-xl font-bold text-white mb-2">AI Writing Tool Comparison</h2>
          <p className="text-gray-400 text-sm mb-5">Which AI text generator to use for your specific writing task.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'ChatGPT (GPT-4o)', strength: 'Most versatile, huge context, strong instruction following', best: 'General-purpose writing across all formats' },
              { name: 'Claude (Anthropic)', strength: 'Nuanced long-form, excellent instruction following, large context', best: 'Complex documents, nuanced writing, editing' },
              { name: 'Gemini 1.5 Pro', strength: 'Google integration, multimodal, very long context', best: 'Research-heavy writing, Google Workspace users' },
              { name: 'Jasper', strength: 'Marketing-specific, brand voice, templates, team collaboration', best: 'Brand-consistent marketing copy at scale' },
              { name: 'Copy.ai', strength: 'Marketing copy focus, workflows, team features', best: 'Sales emails, ad copy, product descriptions' },
              { name: 'Writesonic', strength: 'SEO-optimised content, brand voice, article writer', best: 'SEO blog content and brand-consistent copy' },
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
          <h2 className="text-lg font-bold text-white mb-1">Text Generation Prompt Formula</h2>
          <p className="text-gray-400 text-sm mb-4">Eight elements that consistently improve AI text generation output quality.</p>
          <pre className="text-sm leading-relaxed font-mono p-4 rounded-lg overflow-x-auto" style={{ background: '#020810', color: '#06B6D4' }}>{`1. TONE: [formal / conversational / humorous / authoritative / empathetic]
2. AUDIENCE: [who will read this — their role, knowledge level, goals]
3. FORMAT: [blog post / email / ad copy / report / social post / script]
4. LENGTH: [word count or approximate length]
5. GOAL: [what should the reader do, feel, or know after reading]
6. CONSTRAINTS: [what to avoid — clichés, jargon, passive voice, topics]
7. EXAMPLES: [paste 1-2 examples of writing you want to emulate]
8. PERSONA: [write as if you are a [role] with [years] experience in [field]]

Full example:
"Write a 300-word LinkedIn post [FORMAT] for startup founders [AUDIENCE]
about the mistake of hiring too fast [TOPIC].
Tone: conversational and direct — like a trusted mentor [TONE].
Goal: make them reconsider their current hiring plan [GOAL].
Avoid: generic advice, passive voice, bullet points [CONSTRAINTS].
Write from the perspective of a founder who made this mistake [PERSONA]."`}</pre>
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
              { label: 'AI Search Engine Prompts', href: '/ai-search-engine-prompts' },
              { label: 'ChatGPT Prompts Content Writing', href: '/chatgpt-prompts-content-writing' },
              { label: 'AI Prompts for Education', href: '/ai-prompts-for-education' },
              { label: 'AI Prompts for Researchers', href: '/ai-prompts-for-researchers' },
              { label: 'ChatGPT Prompts PowerPoint', href: '/chatgpt-prompts-powerpoint' },
              { label: 'Manus AI Prompts', href: '/manus-ai-prompts' },
              { label: 'Perchance AI Prompts', href: '/perchance-ai-prompts' },
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
