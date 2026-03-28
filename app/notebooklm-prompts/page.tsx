'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Copy, BookOpen, ChevronDown } from 'lucide-react';

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
      >
        {copied ? (
          <>
            <Check size={16} className="text-green-400" />
            Copied
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy Prompt
          </>
        )}
      </button>
    </div>
  );
};

const FAQCollapse = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-900/50 transition-colors text-left"
      >
        <span className="font-medium text-gray-100">{question}</span>
        <ChevronDown
          size={20}
          className={`text-blue-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-900/30 border-t border-gray-800">
          <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function NotebookLMPromptsPage() {
  const prompts = {
    documentAnalysis: [
      "Upload [DOCUMENT_TYPE: research paper, article, book chapter, report] and analyze it. Break down the main arguments, key evidence, and underlying assumptions. Identify logical fallacies or unsupported claims. Summarize the document's strongest and weakest points in under 200 words.",
      "I'm uploading [NUMBER] documents on [TOPIC]. Create a side-by-side comparison table that shows how each document approaches [SPECIFIC_ASPECT]. Highlight agreements, disagreements, and unique perspectives across all documents.",
      "Analyze this [DOCUMENT] and extract all [TYPE: statistics, quotes, definitions, case studies]. Organize them by relevance and indicate the page or section where each appears. Format as a spreadsheet-ready list.",
      "Upload [ACADEMIC_DOCUMENT] and identify the methodology, sample size, and limitations of the study. Assess the strength of the evidence and explain how the findings could be misinterpreted or overgeneralized."
    ],
    researchSynthesis: [
      "I'm uploading [NUMBER] sources about [RESEARCH_QUESTION]. Synthesize the information to answer [SPECIFIC_QUESTION]. Show me: 1) the consensus view, 2) minority perspectives, 3) gaps in current research, 4) recommended next steps for exploration.",
      "Create a narrative summary of these [NUMBER] documents that tells a coherent story about [TOPIC]. Connect the documents chronologically or thematically, showing how ideas build on or contradict each other. Highlight turning points and major developments.",
      "Analyze these [RESEARCH_DOCUMENTS] for [SPECIFIC_FRAMEWORK: SWOT, PESTEL, Porter's Five Forces]. Use the documents to populate each section of the framework. What insights emerge that aren't obvious from any single document?",
      "Upload [NUMBER] sources and create a 'research journey' that shows: 1) what we knew, 2) what changed the conversation, 3) what we know now, 4) what remains uncertain. Cite specific documents at each stage."
    ],
    studyGuides: [
      "Create a comprehensive study guide from [COURSE_MATERIAL, TEXTBOOK_CHAPTER, LECTURE_NOTES]. Include: learning objectives, key concepts with definitions, practice questions (3-5 per section), and a self-assessment checklist. Format for a [STUDENT_LEVEL: high school, university, professional] learner.",
      "Turn these [NUMBER] documents into a spaced repetition study deck. Create: flashcard questions, one-sentence answers, and connections between concepts. Organize by difficulty level and flag which concepts depend on understanding others.",
      "Upload [DENSE_ACADEMIC_MATERIAL] and create: 1) a 10-minute overview for newcomers, 2) a glossary of key terms, 3) a concept map showing relationships, 4) common misconceptions and clarifications, 5) real-world examples.",
      "Design a Socratic study guide from [EDUCATIONAL_MATERIAL]. Instead of providing answers, create probing questions that guide the student to understand the material. Include hints for struggling students and extension questions for advanced learners."
    ],
    audioOverview: [
      "Prepare a script for an audio summary of [DOCUMENT]. The script should be: engaging, conversational, [DURATION: 10-minute, 20-minute] long, include relevant examples, and have clear transitions. Format with [BRACKETS] for tone cues (e.g., [EMPHASIS], [PAUSE]).",
      "Create an interview script between two experts discussing [DOCUMENT/TOPIC]. One expert explains the content, the other asks insightful follow-up questions. Make it sound natural and accessible to a [AUDIENCE_TYPE: general audience, business professionals, academics].",
      "Turn this [COMPLEX_DOCUMENT] into a podcast episode outline with: intro hook, main segments (3-5), key takeaways, listener action items, and a discussion question for the podcast community. Suggest a catchy episode title.",
      "Create a narrative audiobook chapter from [MATERIAL]. Use storytelling techniques to make the content engaging, add context and historical background, include character perspectives where relevant, and conclude with 'what this means for you' messaging."
    ]
  };

  const allPrompts = [
    ...prompts.documentAnalysis,
    ...prompts.researchSynthesis,
    ...prompts.studyGuides,
    ...prompts.audioOverview
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero Section */}
      <div className="border-b border-gray-800 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={40} className="text-blue-400" />
            <h1 className="text-4xl font-bold">NotebookLM Prompts</h1>
          </div>
          <p className="text-xl text-gray-400 mb-8">
            16 powerful prompts to transform documents into insights, study guides, and audio summaries using Google's NotebookLM.
          </p>
          <p className="text-gray-500">
            NotebookLM is Google's AI research tool that helps you process, analyze, and extract insights from any document. These prompts unlock its full potential.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Document Analysis Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-blue-500"></div>
            <h2 className="text-2xl font-bold">Document Analysis</h2>
          </div>
          <p className="text-gray-400 mb-8">
            Break down complex documents, extract key information, and assess credibility and quality.
          </p>
          <div className="grid gap-6">
            {prompts.documentAnalysis.map((prompt, index) => (
              <CopyCard key={index} prompt={prompt} />
            ))}
          </div>
        </section>

        {/* Research Synthesis Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-blue-500"></div>
            <h2 className="text-2xl font-bold">Research Synthesis</h2>
          </div>
          <p className="text-gray-400 mb-8">
            Combine multiple sources, identify patterns, and synthesize findings into coherent narratives.
          </p>
          <div className="grid gap-6">
            {prompts.researchSynthesis.map((prompt, index) => (
              <CopyCard key={index} prompt={prompt} />
            ))}
          </div>
        </section>

        {/* Study Guides Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-blue-500"></div>
            <h2 className="text-2xl font-bold">Study Guides and Learning</h2>
          </div>
          <p className="text-gray-400 mb-8">
            Convert any material into structured study guides, flashcards, and personalized learning experiences.
          </p>
          <div className="grid gap-6">
            {prompts.studyGuides.map((prompt, index) => (
              <CopyCard key={index} prompt={prompt} />
            ))}
          </div>
        </section>

        {/* Audio Overview Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-blue-500"></div>
            <h2 className="text-2xl font-bold">Audio Overview and Narration</h2>
          </div>
          <p className="text-gray-400 mb-8">
            Create engaging audio scripts, podcasts, and audiobook narration from any document.
          </p>
          <div className="grid gap-6">
            {prompts.audioOverview.map((prompt, index) => (
              <CopyCard key={index} prompt={prompt} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid gap-4">
            <FAQCollapse
              question="What is NotebookLM and how is it different from ChatGPT?"
              answer="NotebookLM is Google's AI research tool designed specifically for document analysis. Unlike ChatGPT, NotebookLM is built to process, understand, and extract insights from uploaded documents. It excels at synthesizing information across multiple sources, maintaining context from long documents, and creating learning materials from them. It's optimized for research, not general conversation."
            />
            <FAQCollapse
              question="Can I upload any type of document to NotebookLM?"
              answer="NotebookLM accepts PDFs, text files, Google Docs, and other document formats. It can handle research papers, books, lecture notes, reports, articles, and transcripts. The quality of analysis depends on the document's clarity and structure, but NotebookLM can work with handwritten notes, scanned PDFs, and even poorly OCR'd documents."
            />
            <FAQCollapse
              question="How do I make NotebookLM give me more accurate analysis?"
              answer="Provide clear context in your prompt by specifying the document type, your goal, and any particular angle you want analyzed. Use the [BRACKETED] variables to be specific about what you're uploading. Ask follow-up questions if the first response is too general. The more specific your prompt, the more tailored the response."
            />
            <FAQCollapse
              question="Can NotebookLM create audio summaries automatically?"
              answer="NotebookLM has an audio feature that can narrate notes and summaries you create. These prompts guide you to generate scripts that NotebookLM can then narrate, or content you can use with a separate audio tool. The audio feature makes your research and learning materials more accessible for learning on-the-go."
            />
            <FAQCollapse
              question="How do I use NotebookLM for academic research?"
              answer="Upload your research papers, textbooks, and articles. Use prompts to synthesize findings across sources, identify research gaps, assess methodology, and create study guides. NotebookLM is especially useful for literature reviews, understanding conflicting findings, and extracting key statistics and quotes across multiple papers."
            />
            <FAQCollapse
              question="Can NotebookLM help me prepare for exams?"
              answer="Yes. Use NotebookLM to convert lecture notes and textbooks into study guides, practice questions, flashcard decks, and self-assessment checklists. It can also create concept maps showing how ideas connect, explain common misconceptions, and provide real-world examples that make complex material stick."
            />
            <FAQCollapse
              question="What are the limitations of NotebookLM?"
              answer="NotebookLM works best with clear, well-structured documents. It may struggle with very large documents (though it handles them better than most tools), highly specialized jargon without context, or images without descriptions. It's also best used for analysis and synthesis, not for generating entirely new research or creative writing from scratch."
            />
            <FAQCollapse
              question="How do I combine insights from multiple documents in NotebookLM?"
              answer="Upload multiple documents in a single notebook. Use prompts that ask for comparison, synthesis, or narrative connections across all documents. NotebookLM will analyze patterns and contradictions across all sources, identify consensus views, and highlight unique perspectives from each document."
            />
            <FAQCollapse
              question="Can I use NotebookLM for professional research and business analysis?"
              answer="Absolutely. Use it to analyze industry reports, competitor research, market trends, policy documents, and business case studies. NotebookLM can synthesize findings into executive summaries, identify business implications, assess competitive positioning, and extract actionable insights from large volumes of information."
            />
            <FAQCollapse
              question="How do I share NotebookLM insights with others?"
              answer="You can export your study guides, summaries, and analysis as documents. Use the audio feature to create shareable audio summaries and podcast-style content. Export your notes and create presentations. These prompts help you generate content in multiple formats (written, audio, visual) so you can share in whatever format works for your audience."
            />
          </div>
        </section>

        {/* Related Prompts Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Explore Related Prompts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/ai-prompts-real-estate-agents"
              className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-blue-500/50 transition-colors group"
            >
              <p className="font-medium text-gray-100 group-hover:text-blue-400 transition-colors">AI Prompts for Real Estate Agents</p>
              <p className="text-sm text-gray-500 mt-2">16 prompts for property listings, client follow-up, and market analysis</p>
            </Link>
            <Link
              href="/chatgpt-social-media-manager-prompts"
              className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-blue-500/50 transition-colors group"
            >
              <p className="font-medium text-gray-100 group-hover:text-blue-400 transition-colors">ChatGPT Social Media Manager Prompts</p>
              <p className="text-sm text-gray-500 mt-2">16 prompts for content calendars, captions, analytics, and community management</p>
            </Link>
            <Link
              href="/ai-prompts-teachers-educators"
              className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-blue-500/50 transition-colors group"
            >
              <p className="font-medium text-gray-100 group-hover:text-blue-400 transition-colors">AI Prompts for Teachers and Educators</p>
              <p className="text-sm text-gray-500 mt-2">16 prompts for lesson planning, assessments, and differentiated instruction</p>
            </Link>
            <Link
              href="/ai-prompts-coaches"
              className="p-4 bg-gray-900 border border-gray-800 rounded-lg hover:border-blue-500/50 transition-colors group"
            >
              <p className="font-medium text-gray-100 group-hover:text-blue-400 transition-colors">AI Prompts for Coaches</p>
              <p className="text-sm text-gray-500 mt-2">16 prompts for coaching businesses, client programs, and marketing</p>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 border border-blue-500/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Custom AI Prompts for Your Field?</h2>
          <p className="text-gray-400 mb-6">
            I help organisations design and deliver custom AI training, build internal AI tools, and create prompt libraries tailored to your team's work.
          </p>
          <a
            href="mailto:okejemichael@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Let's Talk
          </a>
        </section>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'NotebookLM Prompts: 16 AI Prompts for Document Analysis, Research, and Learning',
            description: 'A collection of 16 powerful NotebookLM prompts designed to help researchers, students, and professionals analyze documents, synthesize research, create study guides, and generate audio summaries.',
            author: {
              '@type': 'Person',
              name: 'Michael Okeje',
              url: 'https://michaelokeje.com'
            },
            datePublished: '2025-03-28'
          })
        }}
      />
    </div>
  );
}
