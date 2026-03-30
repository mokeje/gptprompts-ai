'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Search, Pen, Code2, BarChart3, Zap } from 'lucide-react';

const accent = '#4285F4';

interface CopyCardProps {
  title: string;
  prompt: string;
  tag: string;
}

function CopyCard({ title, prompt, tag }: CopyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-4 p-4 border rounded-lg border-[#1e2a3a] hover:border-[#4285F4] transition-colors bg-[#0d1117]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>{tag}</span>
      </div>
      <p className="text-white text-sm font-medium mb-2">{title}</p>
      <pre className="text-gray-400 text-sm mb-3 leading-relaxed whitespace-pre-wrap font-sans">{prompt}</pre>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors border"
        style={{
          color: copied ? accent : '#888',
          borderColor: copied ? accent : '#333',
        }}
      >
        {copied ? <><Check size={14} />Copied!</> : <><Copy size={14} />Copy</>}
      </button>
    </div>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

function FAQ({ item }: { item: FAQItem }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-3 border border-[#1e2a3a] rounded-lg overflow-hidden hover:border-[#4285F4] transition-colors">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between bg-[#0d1117] hover:bg-[#111827] transition-colors"
      >
        <h3 className="font-semibold text-white text-left text-sm">{item.question}</h3>
        {expanded
          ? <ChevronUp size={18} style={{ color: accent }} className="flex-shrink-0" />
          : <ChevronDown size={18} className="flex-shrink-0 text-gray-500" />}
      </button>
      {expanded && (
        <div className="p-4 bg-[#060810] border-t border-[#1e2a3a] text-gray-300 text-sm leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

const faqItems: FAQItem[] = [
  {
    question: 'What is Google Gemini Advanced and what makes it different from the free tier?',
    answer: 'Gemini Advanced provides access to Google\'s most capable models (currently Gemini 1.5 Pro and Ultra tier), with an extended 1 million token context window, deeper reasoning, multimodal analysis of images and video, and priority access to new features. The free tier uses lighter models and has shorter context limits. Advanced also integrates with Google Workspace (Docs, Sheets, Gmail) for AI-assisted workflows.',
  },
  {
    question: 'How do I get better outputs from Gemini with prompting?',
    answer: 'Be explicit about your goal, audience, and format upfront. Provide relevant context — paste in the document, data, or code you want analyzed. Use role framing ("As a senior data analyst...") to shape the response style. For long tasks, break them into steps and iterate. Ask Gemini to reason step by step for complex problems, and specify output length and structure explicitly.',
  },
  {
    question: 'Can Gemini analyze images, PDFs, and long documents?',
    answer: 'Yes. Gemini Advanced can process images (charts, screenshots, diagrams), PDFs, and long text documents up to approximately 1 million tokens — roughly 700,000 words. You can paste or upload a research paper, financial report, or long code file and ask questions about it directly. This makes it powerful for document Q&A, data extraction, and comparative analysis.',
  },
  {
    question: 'How does Gemini compare to ChatGPT and Claude for research tasks?',
    answer: 'Gemini excels at multimodal tasks (image + text), integrates natively with Google Search for grounding, and handles very long documents well due to its large context window. ChatGPT (GPT-4o) has a strong ecosystem of plugins and custom GPTs. Claude tends to excel at nuanced writing and long-form synthesis. For research involving Google Search grounding or combining image data with text, Gemini is often the strongest choice.',
  },
  {
    question: 'Does Gemini have access to the internet and current information?',
    answer: 'Gemini has Google Search integration that can pull current information when enabled. In the Gemini app, you can turn on Google Search grounding to get up-to-date information beyond the training cutoff. This gives it an advantage for questions requiring recent data, news, or current events compared to models without search access.',
  },
  {
    question: 'What is Gemini\'s context window and why does it matter?',
    answer: 'Gemini 1.5 Pro has a context window of up to 1 million tokens (with 2 million available for some use cases). This means you can paste an entire book, full codebase, or hours of transcript and Gemini can reason across all of it. For most users, this eliminates the chunking problem — you don\'t need to split long documents into pieces and summarize separately.',
  },
  {
    question: 'How do I use Gemini for coding tasks?',
    answer: 'Gemini is strong at code generation, explanation, debugging, and refactoring. For best results, share the full code file or relevant functions with context about what you\'re trying to achieve. Ask Gemini to explain its reasoning, especially for complex algorithms. It also supports multi-file context, so you can share architecture diagrams or schema files alongside code to get more accurate suggestions.',
  },
  {
    question: 'Can Gemini Gems replace custom instructions or system prompts?',
    answer: 'Gemini Gems (available to Advanced subscribers) are custom AI assistants you configure with specific instructions, personas, and behaviors — similar to ChatGPT\'s Custom GPTs. You can create a Gem for a specific role (e.g., "SEO analyst" or "contract reviewer") that maintains context and follows your preferred workflow across multiple sessions. Gems are saved to your account and reusable.',
  },
  {
    question: 'Is Gemini good for creative writing and content generation?',
    answer: 'Yes. Gemini handles creative writing well, particularly long-form content, narrative structure, and style variation. It can generate multiple tonal variations of the same content, adapt writing to different audiences, and maintain consistency across long documents. For brand voice or specific style guides, including examples in your prompt significantly improves output quality.',
  },
  {
    question: 'How does Gemini handle privacy and data security?',
    answer: 'In the standard Gemini app, conversations may be reviewed by Google to improve the product. Gemini for Google Workspace (business/enterprise) offers enhanced privacy protections — data is not used for training models by default. For sensitive business or personal data, use the enterprise tier or review Google\'s current data policy. Avoid sharing genuinely confidential information in consumer AI tools.',
  },
];

export default function GeminiAdvancedPromptsPage() {
  return (
    <div className="min-h-screen bg-[#060810]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Gemini Advanced Prompts: Expert Templates for Research, Coding & Analysis',
            description: 'Master Google Gemini Advanced with expert prompts for research, document analysis, coding, creative writing, strategic planning, and multimodal AI tasks.',
            image: 'https://gptprompts.ai/gemini-advanced-og.jpg',
            datePublished: '2026-03-28',
            dateModified: '2026-03-28',
            author: { '@type': 'Organization', name: 'GPT Prompts AI' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="border-b border-[#1e2a3a] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #4285F4 0%, #34A853 50%, #EA4335 100%)' }}>
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <h1 className="text-4xl font-bold text-white">Gemini Advanced Prompts</h1>
          </div>
          <p className="text-gray-400 text-lg mb-4">
            Expert prompts for Google Gemini Advanced — research and document analysis, multimodal tasks, coding, creative writing, and strategic decision-making with the 1M token context window.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Multimodal', 'Long Context', 'Research', 'Coding'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium border" style={{ borderColor: accent, color: accent }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Section 1: Research & Document Analysis */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Search size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Research & Document Analysis</h2>
          </div>
          <CopyCard
            tag="Research"
            title="Long-document research synthesis"
            prompt={`I'm sharing [document/research paper/report]. Please:
1. Summarise the core argument or findings in 3–5 sentences
2. Extract the top 5 most important insights with supporting evidence
3. Identify methodological limitations or gaps in the analysis
4. Flag any claims that require external verification
5. Suggest 3 follow-up questions this document raises`}
          />
          <CopyCard
            tag="Document Q&A"
            title="Targeted extraction from long documents"
            prompt={`Using the document I've attached, answer the following questions with direct quotes and page/section references where possible:
[Question 1]
[Question 2]
[Question 3]
If any question cannot be answered from the document, say so explicitly rather than inferring.`}
          />
          <CopyCard
            tag="Competitive Analysis"
            title="Multi-document competitive landscape"
            prompt={`I'm sharing [3–5 competitor reports/articles/websites]. Analyse them together and produce:
- A comparison table of positioning, pricing, and key features
- Where each competitor is strongest and weakest
- White space opportunities none of them are addressing
- The messaging angles that appear most frequently across all of them`}
          />
          <CopyCard
            tag="Data Extraction"
            title="Structured data extraction from unstructured text"
            prompt={`Extract the following data fields from the document I've shared and output as a structured table:
Fields: [Field 1], [Field 2], [Field 3], [Field 4]
Where a field is missing or ambiguous, mark it as "N/A" and note why.
After the table, summarise any patterns or anomalies you notice in the data.`}
          />
        </section>

        {/* Section 2: Creative Writing & Content */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Pen size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Creative Writing & Content Generation</h2>
          </div>
          <CopyCard
            tag="Brand Storytelling"
            title="Emotionally resonant brand narrative"
            prompt={`Write a brand origin story for [company name] that:
- Opens with the specific problem the founder experienced (not "we noticed a gap in the market")
- Shows the moment of insight that led to the solution
- Explains why this team is uniquely qualified to solve it
- Ends with a forward-looking statement about the impact they're building toward
Tone: [warm/bold/authoritative]. Length: 250–300 words.`}
          />
          <CopyCard
            tag="Content Strategy"
            title="Multi-angle content brief for one topic"
            prompt={`Generate 5 distinct content angles for the topic "[topic]" — each targeting a different audience segment or emotional need:
1. [Angle name]: Hook + 3 key talking points + best format
2. (repeat for all 5)
For each angle, specify: target audience, primary emotion/motivation, and whether it's better as short-form, long-form, or video.`}
          />
          <CopyCard
            tag="Copywriting"
            title="High-converting landing page copy"
            prompt={`Write landing page copy for [product/service] targeting [audience]. Structure:
- Headline (problem-aware, benefit-led)
- Subheadline (one sentence expanding on the headline)
- 3 feature/benefit pairs (feature → what it means for the user)
- Social proof section (placeholder for real testimonials with suggested format)
- FAQ (3 objections + answers)
- CTA section (two variations: high-intent and low-intent)
Match the tone to: [conversational/professional/urgent]`}
          />
          <CopyCard
            tag="Email Sequence"
            title="5-email nurture sequence"
            prompt={`Create a 5-email nurture sequence for [product/service] for leads who signed up for [lead magnet].
For each email include: subject line, preview text, opening hook, main body (150–200 words), CTA, and send timing.
Email 1: Deliver value from lead magnet + set expectations
Email 2: Address the #1 objection
Email 3: Social proof / case study
Email 4: Product education — one key feature
Email 5: Direct offer with urgency`}
          />
        </section>

        {/* Section 3: Coding & Technical */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Code2 size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Coding & Technical Analysis</h2>
          </div>
          <CopyCard
            tag="Code Review"
            title="Senior engineer code review"
            prompt={`Review the code I've shared as a senior software engineer would. Assess:
1. Correctness — will this work as intended? Are there edge cases it misses?
2. Performance — any inefficiencies, N+1 queries, or unnecessary computations?
3. Security — injection risks, improper validation, or exposed credentials?
4. Readability — naming conventions, comment quality, structure
5. Testability — can this be unit tested cleanly?
Prioritise issues as Critical, Moderate, or Minor. Suggest specific fixes for Critical and Moderate items.`}
          />
          <CopyCard
            tag="Architecture"
            title="System design for scalability"
            prompt={`Design a system architecture for [use case — e.g. "a real-time notification system handling 1M daily active users"].
Include:
- Core components and their responsibilities
- Data flow diagram (described in text)
- Database design choices and trade-offs
- Scaling strategy (horizontal vs vertical)
- Failure modes and mitigation
- Technology stack recommendations with justification`}
          />
          <CopyCard
            tag="Debugging"
            title="Root cause analysis from error logs"
            prompt={`I'm seeing this error: [paste error message and stack trace]
Relevant code context: [paste code]
Environment: [language/framework/version]

Please:
1. Identify the most likely root cause
2. Explain why this error occurs at a conceptual level
3. Provide a specific fix with code
4. Suggest a test case that would catch this in future
5. Note if there are related issues I should check`}
          />
          <CopyCard
            tag="Documentation"
            title="Technical documentation from code"
            prompt={`Generate comprehensive developer documentation for the code I've shared. Include:
- Overview: what this module/function does in plain English
- Parameters: name, type, description, whether required
- Return value: type and description
- Example usage (2–3 examples covering common cases)
- Error handling: what errors can be thrown and when
- Dependencies: external libraries or internal modules required
Format as Markdown suitable for a README or wiki.`}
          />
        </section>

        {/* Section 4: Strategic Analysis */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Strategic Analysis & Decision-Making</h2>
          </div>
          <CopyCard
            tag="Strategy"
            title="SWOT to strategic initiatives"
            prompt={`Conduct a SWOT analysis for [company/product] in [market context].
Then — this is the important part — synthesise the SWOT into:
- 3 SO strategies (leverage strengths to capture opportunities)
- 2 ST strategies (use strengths to counter threats)
- 2 WO strategies (address weaknesses using opportunities)
- 1 WT defensive move (minimise weaknesses, avoid threats)
For each strategy, specify a concrete initiative, timeline, and the metric that would indicate success.`}
          />
          <CopyCard
            tag="Decision Framework"
            title="Structured decision analysis"
            prompt={`I need to decide between [Option A] and [Option B] for [context/goal].
Analyse this decision using:
1. Criteria matrix: score each option on [Cost, Risk, Time-to-value, Strategic fit, Reversibility] out of 10
2. Second-order effects: what are the non-obvious consequences of each option 6–12 months out?
3. What assumptions does each option depend on being true?
4. What would have to happen for the lower-scoring option to actually be the better choice?
5. Your recommendation and the one piece of evidence that would change your mind`}
          />
          <CopyCard
            tag="Market Research"
            title="Market sizing and opportunity analysis"
            prompt={`Help me size the market for [product/service] using both approaches:
Top-down: Start from [total addressable market] → narrow by [geography/segment/adoption rate]
Bottom-up: Start from [ICP characteristics] × [# of qualifying companies/people] × [price point]

Then assess:
- Market growth rate and key tailwinds
- Realistic market share capture in year 1, year 3, year 5
- The 2–3 factors that most influence whether this market is as large as it appears`}
          />
          <CopyCard
            tag="Risk Assessment"
            title="Pre-mortem risk analysis"
            prompt={`Run a pre-mortem on [initiative/project/decision]. Assume it's 18 months from now and this has failed badly.
Working backwards:
1. The 5 most likely failure modes (ranked by probability)
2. For each failure mode: the early warning signs we should have caught
3. Mitigation we can put in place now to reduce likelihood
4. Mitigation we can put in place now to reduce impact if it does fail
5. The one risk that is most underestimated by the team`}
          />
        </section>

        {/* Section 5: Data Analysis & Multimodal */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Zap size={26} style={{ color: accent }} />
            <h2 className="text-2xl font-bold text-white">Data Analysis & Multimodal Tasks</h2>
          </div>
          <CopyCard
            tag="Data Storytelling"
            title="Insights narrative from raw data"
            prompt={`I'm sharing [dataset/dashboard screenshot/chart]. Analyse it and produce:
1. The single most important finding in one sentence
2. Top 5 insights in priority order, each with supporting numbers
3. Anomalies or outliers that warrant investigation
4. What this data does NOT tell us (important gaps)
5. The 2–3 decisions this data should inform, and what additional data would make those decisions clearer`}
          />
          <CopyCard
            tag="Image Analysis"
            title="Chart and diagram interpretation"
            prompt={`Analyse the chart/diagram I've shared. Provide:
- What type of chart this is and what it's measuring
- The key trend or pattern (with specific numbers from the chart)
- Whether the visualisation is presenting data fairly or could be misleading
- What the most important takeaway is for someone making a business decision
- One thing the chart creator should have included but didn't`}
          />
          <CopyCard
            tag="Forecasting"
            title="Trend analysis and projection"
            prompt={`Based on the historical data I've shared (or described below), build a forecast for the next [6/12] months.
Include:
- Base case, optimistic case, and pessimistic case projections
- The key assumptions driving each scenario
- Seasonal patterns or cyclicality to account for
- Leading indicators I should watch that would signal which scenario is unfolding
- Confidence level in the forecast and the main source of uncertainty

Historical data: [paste data or describe it]`}
          />
          <CopyCard
            tag="Segmentation"
            title="Customer segmentation analysis"
            prompt={`Analyse the customer data I've shared and identify distinct segments. For each segment, describe:
- Defining characteristics (demographics, behaviour, purchase patterns)
- Size and revenue contribution
- Core need or job-to-be-done
- Churn risk and growth potential
- Recommended messaging and product strategy
Then: which segment should we prioritise and why?`}
          />
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div>
            {faqItems.map((item, i) => (
              <FAQ key={i} item={item} />
            ))}
          </div>
        </section>

        {/* Related Pages */}
        <section className="border-t border-[#1e2a3a] pt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Related Prompts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'Google Gemini Prompts', href: '/google-gemini-prompts' },
              { name: 'Gemini Gems Prompts', href: '/gemini-gems-prompts' },
              { name: 'ChatGPT Prompts', href: '/chatgpt-prompts' },
              { name: 'Claude Prompts', href: '/claude-prompts' },
              { name: 'AI Prompts for Data Analysts', href: '/ai-prompts-for-data-analysts' },
              { name: 'AI Prompts for Researchers', href: '/ai-prompts-for-researchers' },
              { name: 'ChatGPT Data Analysis Prompts', href: '/chatgpt-data-analysis' },
              { name: 'Perplexity AI Prompts', href: '/perplexity-ai-prompts' },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="px-4 py-3 rounded border border-[#1e2a3a] text-gray-300 hover:border-[#4285F4] hover:text-[#4285F4] transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
