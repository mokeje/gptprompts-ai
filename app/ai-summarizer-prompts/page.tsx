'use client'

import { useState } from 'react'
import { Check, Copy, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'


const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#F59E0B] transition-colors">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono mb-4 max-h-64">
        {prompt}
      </pre>
      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium py-2 px-4 rounded"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy Prompt
          </>
        )}
      </button>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-[#2a2a2a] rounded-lg p-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left font-bold text-white hover:text-[#F59E0B] transition-colors"
      >
        {question}
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#F59E0B]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#F59E0B]" />
        )}
      </button>
      {open && <p className="text-gray-300 mt-4 leading-relaxed">{answer}</p>}
    </div>
  )
}

export default function AISummarizerPromptsPage() {
  const prompts = {
    'Executive Summaries': [
      {
        title: 'Corporate Report Summarizer',
        prompt: `Summarize the following corporate report into a concise executive summary. Focus on:
- Key financial metrics and performance indicators
- Major strategic initiatives and decisions
- Risk factors and mitigation strategies
- Future outlook and projections

Keep the summary to 250-300 words and use bullet points for clarity.

Report: [INSERT REPORT TEXT]`
      },
      {
        title: 'Meeting Minutes Distiller',
        prompt: `Convert these meeting minutes into a brief action-oriented summary. Extract:
- Key decisions made
- Action items with assigned owners and deadlines
- Open questions or unresolved issues
- Next steps and timeline

Format as:
DECISIONS: [bulleted list]
ACTIONS: [owner - task - deadline]
OPEN ITEMS: [issues needing follow-up]

Minutes: [INSERT MEETING TEXT]`
      },
      {
        title: 'Financial Report Condensing',
        prompt: `Create a concise summary of this financial report highlighting:
- Revenue and profit changes (with % changes)
- Key cost drivers and efficiency metrics
- Cash flow position and working capital
- Capital allocation and investments
- Forward guidance and outlook

Keep to 200 words, emphasizing material changes and implications.

Report: [INSERT FINANCIAL TEXT]`
      },
      {
        title: 'Quarterly Performance Brief',
        prompt: `Summarize quarterly performance data into a stakeholder brief covering:
- Headline results vs. targets
- Performance by business segment or geography
- Key headwinds and tailwinds
- Strategic priorities progress
- Guidance and outlook

Use clear formatting with metrics highlighted. Target 300 words.

Data: [INSERT QUARTERLY REPORT]`
      },
      {
        title: 'Annual Report Overview',
        prompt: `Create an accessible summary of this annual report for non-financial stakeholders:
- Company mission and value delivery
- Competitive position and market dynamics
- Strategic achievements this year
- Challenges and how they were addressed
- Vision for the coming year

Keep conversational and avoid jargon. Target 400 words.

Report: [INSERT ANNUAL REPORT]`
      },
      {
        title: 'Board Memo Synthesizer',
        prompt: `Distill this board-level material into a one-page memo with:
- Issue/opportunity at stake
- Key facts and data points
- Risk analysis
- Recommended action
- Expected outcomes if approved

Format: Executive summary (100 words) + supporting sections.

Material: [INSERT BOARD DOCUMENT]`
      }
    ],
    'Content Summarization': [
      {
        title: 'News Article Summarizer',
        prompt: `Summarize this news article into a brief summary with:
- Main headline-worthy fact or development
- Key context and background
- Who is affected and why it matters
- Any next steps or implications

Keep to 150 words and write in neutral, journalistic tone.

Article: [INSERT ARTICLE TEXT]`
      },
      {
        title: 'Research Paper Abstract Generator',
        prompt: `Create a concise abstract for this research paper including:
- Research question or hypothesis
- Methodology overview
- Key findings and results
- Implications and limitations

Keep to 200 words in academic style.

Paper: [INSERT PAPER TEXT]`
      },
      {
        title: 'Blog Post Condenser',
        prompt: `Condense this blog post to a 100-word summary capturing:
- Main argument or thesis
- 2-3 supporting points
- Call to action or takeaway
- Tone and style of original

Maintain the author's voice while being concise.

Post: [INSERT BLOG TEXT]`
      },
      {
        title: 'Interview Transcript Summarizer',
        prompt: `Create a summary of this interview transcript highlighting:
- Interviewee's main expertise or viewpoint
- 3-4 most insightful quotes or points
- Key takeaways for the audience
- Topic areas covered

Format with quotes and context. Target 300 words.

Transcript: [INSERT INTERVIEW TEXT]`
      },
      {
        title: 'Document Abstract Creator',
        prompt: `Write a professional abstract for this document suitable for a library or database:
- What the document covers
- Target audience
- Key sections or arguments
- Primary value or unique insight

Keep to 150 words in formal style.

Document: [INSERT DOCUMENT TEXT]`
      },
      {
        title: 'Whitepaper Synopsis Generator',
        prompt: `Create a one-page synopsis of this whitepaper for busy executives:
- Problem being addressed
- Proposed solution or framework
- Evidence and validation
- Business impact or ROI
- Call to action

Use clear structure with headers and metrics highlighted.

Whitepaper: [INSERT WHITEPAPER TEXT]`
      }
    ],
    'Information Extraction': [
      {
        title: 'Key Facts Extractor',
        prompt: `Extract the most important facts from this text in a bulleted list. Focus on:
- Specific numbers, dates, and names
- Critical decisions or changes
- Cause-and-effect relationships
- What\'s new or surprising

Organize by topic and bold key terms.

Text: [INSERT CONTENT]`
      },
      {
        title: 'Data Point Collector',
        prompt: `Identify and compile all quantitative data points from this text:
- Percentages and ratios
- Revenue or cost figures
- Timeframes and deadlines
- Performance metrics
- Capacity or size measurements

Format as a data summary table or list with context.

Text: [INSERT CONTENT]`
      },
      {
        title: 'Entity and Relationship Mapper',
        prompt: `Map out all key entities and their relationships in this text:
- Companies, people, organizations
- Partnerships and connections
- Transactions or exchanges
- Dependencies and influences

Create a structured list or simple diagram description.

Text: [INSERT CONTENT]`
      },
      {
        title: 'Action Item Extractor',
        prompt: `Extract all action items, tasks, or to-dos from this text:
- Specific actions to take
- Responsible party (if mentioned)
- Deadline or timeframe
- Priority or importance level

Format as actionable checklist.

Text: [INSERT CONTENT]`
      },
      {
        title: 'Problem and Solution Identifier',
        prompt: `Identify all problems and solutions mentioned in this text:
- What issues or challenges are described?
- What solutions or approaches are proposed?
- How effective is each solution?
- What remains unresolved?

Format with clear problem-solution pairs.

Text: [INSERT CONTENT]`
      },
      {
        title: 'Definition and Concept Glossary',
        prompt: `Create a glossary of key terms and concepts from this text:
- Technical terms or jargon
- Concepts and frameworks
- Abbreviations and acronyms
- Industry-specific language

Format with term and clear 1-2 sentence definition.

Text: [INSERT CONTENT]`
      }
    ],
    'Length-Based Summarization': [
      {
        title: '1-Sentence Summary Generator',
        prompt: `Reduce this text to a single sentence that captures:
- The core idea or main point
- Who it affects or why it matters
- Any critical detail

The sentence should be clear to someone unfamiliar with the topic.

Text: [INSERT CONTENT]`
      },
      {
        title: 'Paragraph Summarizer',
        prompt: `Summarize this text into a single paragraph (150-200 words) that:
- Captures the main argument
- Includes supporting details
- Maintains key context
- Preserves the author's perspective

Use clear, flowing prose.

Text: [INSERT CONTENT]`
      },
      {
        title: 'Bullet-Point Condensing',
        prompt: `Condense this text into 5-7 bullet points covering:
- Primary theme or finding
- Key supporting evidence
- Important nuances or caveats
- Implications or next steps

Each bullet 1-2 lines maximum.

Text: [INSERT CONTENT]`
      },
      {
        title: 'Headline and Subheading Creator',
        prompt: `Create a headline and 3-4 subheadings that capture the structure and key points:
- Headline: Compelling, 10 words or fewer
- Subheadings: Describe each major section

Subheadings should make the content scannable.

Text: [INSERT CONTENT]`
      },
      {
        title: 'Two-Paragraph Summary',
        prompt: `Write a two-paragraph summary (300-350 words total):
- First paragraph: Main idea and context (150-175 words)
- Second paragraph: Key details and implications (150-175 words)

Target a general business audience.

Text: [INSERT CONTENT]`
      },
      {
        title: '10-Minute Read Reducer',
        prompt: `Create a summary that can be read in approximately 3 minutes (~500 words):
- Opening: What is this about and why it matters
- Middle: Key sections and main points
- Closing: Implications and takeaway

Use headers and white space for scannability.

Text: [INSERT CONTENT]`
      }
    ],
    'Specialized Summarization': [
      {
        title: 'Technical Documentation Summarizer',
        prompt: `Summarize this technical documentation for a non-technical stakeholder:
- What does this system/process do?
- Who uses it and why?
- Key features and limitations
- Common issues and how to address them

Avoid jargon; explain concepts simply.

Documentation: [INSERT TECHNICAL TEXT]`
      },
      {
        title: 'Legal Document Simplifier',
        prompt: `Create a plain-language summary of this legal document:
- What is the document about?
- What are the main obligations or rights?
- What are the key terms or conditions?
- What are the consequences?

Write for someone without legal training.

Document: [INSERT LEGAL TEXT]`
      },
      {
        title: 'Customer Feedback Synthesizer',
        prompt: `Synthesize this customer feedback into a summary:
- Overall sentiment (positive/negative/mixed)
- Top 3-5 themes or issues mentioned
- Specific quotes that illustrate themes
- Suggested actions or improvements

Format for sharing with the product team.

Feedback: [INSERT CUSTOMER FEEDBACK]`
      },
      {
        title: 'Email Thread Compressor',
        prompt: `Summarize this email conversation thread:
- Original issue or topic
- Key decisions made across emails
- Agreed next steps
- Any unresolved questions

Format chronologically with decision highlights.

Thread: [INSERT EMAIL THREAD]`
      },
      {
        title: 'Social Media Trend Summarizer',
        prompt: `Summarize the social media conversation around this topic:
- What\'s the main discussion or trend?
- Who are key voices or perspectives?
- Sentiment across platforms
- Emerging themes or concerns

Note specific platform differences if relevant.

Posts/Conversation: [INSERT SOCIAL CONTENT]`
      },
      {
        title: 'Medical or Scientific Text Translator',
        prompt: `Summarize this medical/scientific text for a general audience:
- What condition, treatment, or finding is discussed?
- Why should the average person care?
- What does the research or guidance recommend?
- What are the caveats or limitations?

Use clear language, avoid medical jargon.

Text: [INSERT MEDICAL/SCIENTIFIC TEXT]`
      }
    ]
  }

  const faqs = [
    {
      question: 'How do I ensure my summaries are accurate?',
      answer: 'To maintain accuracy, first understand the source material deeply. Use prompts that ask the AI to extract specific facts, dates, and metrics rather than paraphrase. Cross-reference the summary against the original to verify key points are represented correctly. For critical information, request citations or verification of data points.'
    },
    {
      question: 'What\'s the best way to handle very long documents?',
      answer: 'For lengthy documents (50+ pages), break the summarization into sections. Summarize each section individually, then create a summary of summaries. This approach maintains detail while remaining manageable. Alternatively, ask the AI to focus on specific chapters or sections relevant to your needs rather than attempting a complete summary.'
    },
    {
      question: 'How can I make summaries more actionable?',
      answer: 'Include action-focused prompts that ask the AI to extract decisions, next steps, and responsible parties. Use templates that separate strategic insight from tactical actions. Ask for timelines, owners, and success criteria. Format output as task lists with deadlines rather than paragraphs.'
    },
    {
      question: 'Should I summarize before or after reading the full source?',
      answer: 'Both approaches have value. Summarizing first gives you the key points to guide deeper reading. Summarizing after reading ensures accuracy and prevents biased summaries. For important decisions, do both: skim the summary first, read the full source, then create your own summary to verify understanding.'
    },
    {
      question: 'How do I handle summaries that need technical vs. non-technical audiences?',
      answer: 'Create separate summaries with tailored prompts for each audience. For technical audiences, keep jargon and specific metrics. For general audiences, explain concepts clearly and focus on implications over implementation details. Use the audience as an explicit constraint in your prompt.'
    },
    {
      question: 'What length should my summary be?',
      answer: 'The ideal length depends on source material and use case. A rule of thumb: aim for 10-15% of the original length. For decision-making, 300-500 words is often sufficient. For reference material, longer summaries (800+ words) may be needed. Always include a summary length guideline in your prompt.'
    },
    {
      question: 'How do I avoid losing important nuance in summaries?',
      answer: 'Ask the AI to include caveats, limitations, and counterarguments in summaries. Request that it flag areas of uncertainty or disagreement. For nuanced topics, use longer summary formats and ask for separate sections on "what\'s debated" or "different perspectives."'
    },
    {
      question: 'Can I use AI summaries for external communication?',
      answer: 'Yes, but verify accuracy first. For external or public communication, review the summary against the original and check for factual errors. Summaries work well for internal updates, stakeholder briefs, and team communication. Always attribute the original source to give credit and allow readers to dive deeper.'
    },
    {
      question: 'How do I structure a summary when the source is disorganized?',
      answer: 'Ask the AI to reorganize content logically while summarizing. Use prompts that impose structure: "Group by topic," "Organize chronologically," or "Separate strategic from tactical." This transforms chaotic source material into organized, usable summaries.'
    },
    {
      question: 'What\'s the best format for sharing summaries with teams?',
      answer: 'Format depends on use. Use bullet points for quick scanning, structured lists for action tracking, and narrative paragraphs for context-setting. For executive summaries, use a headline + one paragraph + bullet points format. Always make summaries scannable with clear headers and white space.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#F59E0B]" />
            <h1 className="text-5xl font-black">AI Summarizer Prompts</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Comprehensive collection of prompts for text summarization, content condensing, and intelligent information extraction. Perfect for creating executive summaries, condensing long documents, and extracting key insights.
          </p>
        </div>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'AI Summarizer Prompts',
              description: 'Comprehensive collection of AI prompts for text summarization, content condensing, and information extraction.',
              datePublished: '2026-03-29',
              dateModified: '2026-03-29',
              author: {
                '@type': 'Organization',
                name: 'GPT Prompts'
              }
            })
          }}
        />

        {/* Prompts Sections */}
        {Object.entries(prompts).map(([section, items]) => (
          <div key={section} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#F59E0B] pl-4">
              {section}
            </h2>
            <div className="grid gap-6">
              {items.map((item, idx) => (
                <CopyCard key={idx} title={item.title} prompt={item.prompt} />
              ))}
            </div>
          </div>
        ))}

        {/* FAQ Section */}
        <div className="mt-20 mb-20">
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#F59E0B] pl-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Related Pages */}
        <div className="mt-20 pt-12 border-t border-[#2a2a2a]">
          <h3 className="text-2xl font-bold mb-8">Explore Other Prompt Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/ai-for-workforce-management-prompts"
              className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#4F46E5] transition-colors"
            >
              <h4 className="font-bold text-[#4F46E5] mb-1">Workforce Management</h4>
              <p className="text-sm text-gray-400">Staffing and team optimization</p>
            </Link>
            <Link
              href="/ai-for-operations-management-prompts"
              className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#F97316] transition-colors"
            >
              <h4 className="font-bold text-[#F97316] mb-1">Operations Management</h4>
              <p className="text-sm text-gray-400">Process optimization and efficiency</p>
            </Link>
            <Link
              href="/ai-for-facilities-management-prompts"
              className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#14B8A6] transition-colors"
            >
              <h4 className="font-bold text-[#14B8A6] mb-1">Facilities Management</h4>
              <p className="text-sm text-gray-400">Building and asset management</p>
            </Link>
            <Link
              href="/ai-for-document-management-prompts"
              className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#6366F1] transition-colors"
            >
              <h4 className="font-bold text-[#6366F1] mb-1">Document Management</h4>
              <p className="text-sm text-gray-400">Content organization and retrieval</p>
            </Link>
            <Link
              href="/ai-for-news-prompts"
              className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#EF4444] transition-colors"
            >
              <h4 className="font-bold text-[#EF4444] mb-1">News & Journalism</h4>
              <p className="text-sm text-gray-400">Story development and publishing</p>
            </Link>
            <Link
              href="/ai-question-answering-prompts"
              className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#8B5CF6] transition-colors"
            >
              <h4 className="font-bold text-[#8B5CF6] mb-1">Question Answering</h4>
              <p className="text-sm text-gray-400">Q&A systems and knowledge bases</p>
            </Link>
            <Link
              href="/squibler-ai-prompts"
              className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#10B981] transition-colors"
            >
              <h4 className="font-bold text-[#10B981] mb-1">Squibler AI</h4>
              <p className="text-sm text-gray-400">Writing and content generation</p>
            </Link>
            <Link
              href="/ai-for-management-consulting-prompts"
              className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#1E40AF] transition-colors"
            >
              <h4 className="font-bold text-[#1E40AF] mb-1">Management Consulting</h4>
              <p className="text-sm text-gray-400">Strategic analysis and frameworks</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
