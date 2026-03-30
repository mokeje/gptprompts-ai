'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react'

const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#8B5CF6] transition-colors">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono mb-4 max-h-64">
        {prompt}
      </pre>
      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium py-2 px-4 rounded"
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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-[#151515] transition-colors"
      >
        <h4 className="font-bold text-white text-left">{question}</h4>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-300 border-t border-[#2a2a2a]">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function AIQuestionAnsweringPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12 px-4 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Question Answering Prompts',
            description: 'Comprehensive collection of AI prompts for question answering, retrieval-augmented generation, knowledge bases, and customer support systems',
            datePublished: '2026-03-29',
            dateModified: '2026-03-29',
            author: { '@type': 'Organization', name: 'GPT Prompts' },
            faqs: [
              {
                '@type': 'Question',
                name: 'How do I optimize prompts for factual accuracy in AI question answering?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Provide source documents, use retrieval-augmented generation (RAG), ask the AI to cite sources, set confidence thresholds, and validate answers against your knowledge base. Include explicit instructions to say "I do not know" rather than guessing.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is retrieval-augmented generation (RAG) and how does it improve Q&A systems?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'RAG combines document retrieval with language models to ground answers in actual source material. This reduces hallucinations, ensures answers are factual, enables citation of sources, and works well for domain-specific knowledge bases.'
                }
              },
              {
                '@type': 'Question',
                name: 'How can I handle complex multi-part questions in AI Q&A systems?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ask the AI to break down multi-part questions into sub-questions, answer each separately with citations, and then synthesize a comprehensive response. This improves clarity and accuracy for complex inquiries.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do I reduce hallucinations in AI question answering?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use retrieval-augmented generation with verified sources, provide strict instructions to cite sources or decline to answer, set confidence thresholds, include example questions with correct answers, and regularly audit responses for accuracy.'
                }
              },
              {
                '@type': 'Question',
                name: 'What are best practices for building customer support Q&A systems with AI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use internal documentation as context, implement RAG with FAQs and help articles, train the model on support ticket resolutions, set escalation rules for complex issues, monitor customer satisfaction, and maintain human fallback options.'
                }
              },
              {
                '@type': 'Question',
                name: 'How can I make AI Q&A systems more conversational and context-aware?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Maintain conversation history, ask the AI to acknowledge previous context, use natural language with personality guidelines, ask follow-up questions to clarify intent, and design for iterative dialogue rather than single-turn responses.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do I evaluate the quality of AI question answering systems?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use metrics like answer relevance, factual accuracy, citation precision, coverage of user questions, response latency, and user satisfaction scores. Conduct user testing and maintain a test set of gold-standard Q&A pairs.'
                }
              },
              {
                '@type': 'Question',
                name: 'What privacy and security considerations apply to Q&A systems?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ensure sensitive data in knowledge bases is properly protected, implement access controls, comply with data privacy regulations like GDPR, avoid storing personal information in conversation logs, and audit for information leakage.'
                }
              },
              {
                '@type': 'Question',
                name: 'How can I handle unanswerable or out-of-scope questions?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Train the model to decline gracefully with phrases like "I do not have information about that", set scope boundaries in system prompts, define escalation rules, and provide alternative resources or contact options for out-of-scope queries.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do I scale AI Q&A systems across multiple languages and regions?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use multilingual models, maintain separate knowledge bases for each region, localize domain terminology, test cultural nuances, implement language detection, and monitor performance per language/region independently.'
                }
              }
            ]
          })
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Question Answering Prompts</h1>
          <p className="text-gray-400 text-lg">
            30 expert prompts for building intelligent question answering systems, retrieval-augmented generation pipelines, and knowledge bases powered by AI.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#8B5CF6]">Knowledge Base and Retrieval</h2>
            <div className="grid gap-6">
              <CopyCard
                title="Build a Domain-Specific Knowledge Base"
                prompt="You are helping me build a knowledge base for [domain]. I will provide you with documents, FAQs, and reference materials. Your task is to: 1) Identify key concepts and relationships, 2) Organize content into logical categories, 3) Create cross-references between related topics, 4) Flag ambiguities or gaps. Start by asking me what domain I am working in and what types of documents I have."
              />
              <CopyCard
                title="Create a Retrieval-Augmented Generation (RAG) System"
                prompt="I want to build a question answering system that retrieves relevant documents before generating answers. Help me design a RAG pipeline that: 1) Indexes my knowledge base for fast retrieval, 2) Scores document relevance to user questions, 3) Passes relevant context to the language model, 4) Generates answers that cite sources. What are the key components and how should I structure the workflow?"
              />
              <CopyCard
                title="Extract and Structure FAQ Data"
                prompt="I have unstructured FAQ data from [source]. Help me extract and structure it into a machine-readable format. For each Q&A pair, identify: 1) the main question, 2) related variations, 3) key entities mentioned, 4) topic categories, 5) confidence level. Output as JSON with consistent schema suitable for indexing in a knowledge base."
              />
              <CopyCard
                title="Improve Document Ranking and Relevance"
                prompt="I am building a question answering system and my document retrieval is returning irrelevant results. For the question '[user question]', the top retrieved documents are: [list documents]. Help me: 1) analyze why irrelevant documents ranked high, 2) suggest ranking improvements, 3) recommend better chunking or indexing strategies, 4) propose relevance scoring adjustments."
              />
              <CopyCard
                title="Handle Document Context Windows"
                prompt="I have long documents that exceed my language model's context window. Help me design a strategy to: 1) chunk documents effectively without losing context, 2) create summaries of each chunk, 3) implement hierarchical retrieval (summary first, then detailed chunks), 4) preserve cross-references between chunks. What are best practices?"
              />
              <CopyCard
                title="Version and Update Knowledge Bases"
                prompt="I need a system to manage versions of my knowledge base and track changes over time. Help me design: 1) a versioning scheme for documents, 2) change tracking (what was updated and when), 3) rollback mechanisms, 4) approval workflows for updates, 5) testing procedures to ensure new knowledge doesn't break existing Q&A. How should I structure this?"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#8B5CF6]">Question Understanding and Intent</h2>
            <div className="grid gap-6">
              <CopyCard
                title="Classify Question Intent"
                prompt="Help me classify user questions by intent type. For each of these question categories, provide 5 example questions: 1) Factual questions (asking for specific information), 2) How-to questions (asking for instructions), 3) Explanatory questions (asking why something works), 4) Opinion questions (asking for perspective), 5) Clarification questions (asking for more details). How should I structure a classifier for these intents?"
              />
              <CopyCard
                title="Handle Ambiguous and Multi-Part Questions"
                prompt="When a user asks an ambiguous or multi-part question like '[example question]', how should I respond? Provide a framework for: 1) detecting ambiguity or multiple questions, 2) asking clarifying questions, 3) breaking multi-part questions into sub-questions, 4) answering each part separately, 5) synthesizing a comprehensive response."
              />
              <CopyCard
                title="Detect Question Reformulations"
                prompt="Users often ask the same question in different ways. Given this core question '[question]', generate 10 variations that mean the same thing but use different wording, phrasing, and terminology. How can I use these variations to train a system to recognize intent equivalence?"
              />
              <CopyCard
                title="Extract Question Entities and Context"
                prompt="Help me build an entity extraction system for question answering. For the question '[example question]', identify: 1) named entities (people, places, organizations), 2) domain-specific entities (products, features, concepts), 3) temporal references (dates, time periods), 4) scope modifiers (specific vs. general), 5) implicit context from conversation history."
              />
              <CopyCard
                title="Determine Answer Scope and Specificity"
                prompt="I want to generate answers at the right level of detail. For a question about '[topic]', help me determine: 1) is the user asking for a brief answer or detailed explanation?, 2) should I include background context or assume prior knowledge?, 3) what examples are appropriate?, 4) how technical should the language be? Provide a framework for inferring answer scope from question signals."
              />
              <CopyCard
                title="Handle Follow-Up Questions in Context"
                prompt="In a multi-turn conversation, users often ask follow-up questions that rely on previous context. Show me how to: 1) maintain conversation state, 2) resolve pronouns and references to previous responses, 3) infer what the user is following up on, 4) avoid repetition while answering new aspects, 5) gracefully handle topic shifts."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#8B5CF6]">Answer Generation and Quality</h2>
            <div className="grid gap-6">
              <CopyCard
                title="Generate Accurate Answers with Source Citations"
                prompt="I want my Q&A system to cite sources for every answer. Help me create a prompt template that: 1) retrieves relevant source documents, 2) generates an answer grounded in those sources, 3) includes inline citations (e.g., [Source: document name]), 4) provides a 'Further Reading' section with links, 5) flags any information that is not found in the sources."
              />
              <CopyCard
                title="Reduce Hallucinations and Increase Factuality"
                prompt="My AI Q&A system is sometimes generating incorrect information (hallucinating). Help me design safeguards: 1) strict instruction to cite sources or decline to answer, 2) confidence scoring for generated answers, 3) comparison against a fact-checking database, 4) human review for high-stakes questions, 5) feedback loops to identify and fix hallucinations."
              />
              <CopyCard
                title="Create Multi-Level Answer Structures"
                prompt="Help me design answer structures for different user needs: 1) Quick answer (one sentence), 2) Standard answer (2-3 paragraphs with examples), 3) Detailed answer (comprehensive with background, examples, edge cases), 4) Expert answer (technical depth). Provide templates for each level and guidance on when to use each."
              />
              <CopyCard
                title="Implement Graceful Degradation for Unanswerable Questions"
                prompt="When a question is outside my knowledge base or unanswerable, I should respond helpfully. Create a framework for: 1) detecting unanswerable questions, 2) explaining why the question cannot be answered, 3) suggesting related questions I can answer, 4) providing alternative resources or escalation paths, 5) asking the user to rephrase or provide more context."
              />
              <CopyCard
                title="Generate Contextual Follow-Up Questions"
                prompt="After answering a user question, I want to suggest relevant follow-up questions to deepen the conversation. For an answer about '[topic]', generate 5 thoughtful follow-up questions that: 1) explore related concepts, 2) address common misconceptions, 3) provide practical application, 4) offer alternative perspectives, 5) go deeper into specific aspects."
              />
              <CopyCard
                title="Ensure Consistency Across Answers"
                prompt="I want my Q&A system to provide consistent answers when asked similar questions. Help me: 1) identify variations in how the same concept is explained, 2) standardize terminology and definitions, 3) create answer templates for common topics, 4) detect contradictions between answers, 5) maintain an answer registry for consistency checks."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#8B5CF6]">Application-Specific Use Cases</h2>
            <div className="grid gap-6">
              <CopyCard
                title="Build a Customer Support Q&A Chatbot"
                prompt="I want to build a customer support chatbot powered by AI. Help me create a system that: 1) uses our internal documentation as the knowledge base, 2) answers common support questions, 3) collects customer context (account, issue type, history), 4) escalates complex issues to human agents, 5) learns from agent responses to improve future answers. What prompts and workflows should I use?"
              />
              <CopyCard
                title="Create an Internal Documentation Q&A System"
                prompt="My company has thousands of pages of internal documentation scattered across wikis, Google Docs, and databases. Help me build a unified Q&A system that: 1) indexes all documentation sources, 2) answers employee questions about policies, procedures, and systems, 3) cites authoritative sources, 4) keeps answers up-to-date with document changes, 5) tracks which questions are asked most frequently."
              />
              <CopyCard
                title="Design a Legal and Compliance Q&A System"
                prompt="I need a Q&A system for legal and compliance questions that: 1) retrieves from authoritative legal documents, 2) includes proper disclaimers (not legal advice), 3) cites specific clauses or regulations, 4) flags ambiguities or conflicting regulations, 5) escalates uncertain questions to compliance teams, 6) handles updates when laws change. How should I structure this?"
              />
              <CopyCard
                title="Build a Product Documentation Q&A Assistant"
                prompt="I want to embed a Q&A assistant in my product documentation. The system should: 1) answer questions about product features and usage, 2) provide contextual help based on the page user is viewing, 3) suggest relevant documentation sections, 4) offer quick tutorials and examples, 5) track questions users cannot find answers to. How should I integrate this?"
              />
              <CopyCard
                title="Create a Real-Time FAQ Generator for Events"
                prompt="For my live event (webinar/conference/workshop), I want to generate FAQs in real-time based on attendee questions. Help me: 1) monitor incoming questions, 2) cluster similar questions together, 3) generate concise answers, 4) organize answers by topic, 5) share the growing FAQ with all attendees. What tools and workflow would work best?"
              />
              <CopyCard
                title="Build a Multi-Language Customer Support System"
                prompt="I need to support customer questions in multiple languages [list languages]. Help me design: 1) a system that detects customer language, 2) retrieves documentation in the right language, 3) generates answers in the customer's language, 4) handles terminology translation across languages, 5) maintains consistency across language versions."
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#8B5CF6]">Evaluation and Improvement</h2>
            <div className="grid gap-6">
              <CopyCard
                title="Evaluate Q&A System Quality"
                prompt="I want to measure how well my Q&A system is performing. Help me define metrics for: 1) answer relevance (does it answer the question?), 2) factual accuracy (is the information correct?), 3) completeness (are all aspects covered?), 4) clarity (is it easy to understand?), 5) source quality (are citations valid?). Provide formulas or rubrics for scoring each metric."
              />
              <CopyCard
                title="Conduct User Testing for Q&A Systems"
                prompt="I want to conduct user testing to validate my Q&A system. Design a test plan that includes: 1) test questions representing different intents and difficulty levels, 2) success criteria for evaluating answers, 3) user feedback collection (rating, comments), 4) comparison against baseline (human answers), 5) statistical analysis of results. How should I structure this?"
              />
              <CopyCard
                title="Identify Knowledge Gaps and Blind Spots"
                prompt="My Q&A system is not answering some user questions well. Help me: 1) log and analyze unanswerable questions, 2) identify gaps in my knowledge base, 3) detect topics that are underrepresented, 4) find conflicting or outdated information, 5) prioritize what content to add or update. Provide a framework for continuous improvement."
              />
              <CopyCard
                title="Monitor and Debug Answer Quality"
                prompt="I want to proactively monitor answer quality and catch errors. Help me set up: 1) automated quality checks (length, grammar, citation presence), 2) anomaly detection (unusual answer patterns), 3) user feedback loops (rating answers, flagging errors), 4) regular audits (sampling answers for review), 5) alerts for critical failures. What metrics should I track?"
              />
              <CopyCard
                title="A/B Test Question Answering Approaches"
                prompt="I want to test different approaches to question answering (different prompts, retrieval methods, answer formats). Design an A/B testing framework that: 1) randomly assigns users to variants, 2) measures answer quality, user satisfaction, and engagement, 3) detects statistically significant differences, 4) safely rolls out winners, 5) maintains experiment isolation."
              />
              <CopyCard
                title="Create a Feedback Loop for Continuous Learning"
                prompt="I want my Q&A system to improve over time based on user feedback. Help me design: 1) feedback collection mechanisms (user ratings, corrections), 2) data pipelines to aggregate feedback, 3) retraining workflows using feedback data, 4) version control for model updates, 5) safety mechanisms to prevent bad feedback from degrading quality."
              />
            </div>
          </section>
        </div>

        <section className="mt-16 pt-12 border-t border-[#2a2a2a]">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              question="How do I optimize prompts for factual accuracy in AI question answering?"
              answer="Provide source documents, use retrieval-augmented generation (RAG), ask the AI to cite sources, set confidence thresholds, and validate answers against your knowledge base. Include explicit instructions to say 'I do not know' rather than guessing."
            />
            <FAQItem
              question="What is retrieval-augmented generation (RAG) and how does it improve Q&A systems?"
              answer="RAG combines document retrieval with language models to ground answers in actual source material. This reduces hallucinations, ensures answers are factual, enables citation of sources, and works well for domain-specific knowledge bases."
            />
            <FAQItem
              question="How can I handle complex multi-part questions in AI Q&A systems?"
              answer="Ask the AI to break down multi-part questions into sub-questions, answer each separately with citations, and then synthesize a comprehensive response. This improves clarity and accuracy for complex inquiries."
            />
            <FAQItem
              question="How do I reduce hallucinations in AI question answering?"
              answer="Use retrieval-augmented generation with verified sources, provide strict instructions to cite sources or decline to answer, set confidence thresholds, include example questions with correct answers, and regularly audit responses for accuracy."
            />
            <FAQItem
              question="What are best practices for building customer support Q&A systems with AI?"
              answer="Use internal documentation as context, implement RAG with FAQs and help articles, train the model on support ticket resolutions, set escalation rules for complex issues, monitor customer satisfaction, and maintain human fallback options."
            />
            <FAQItem
              question="How can I make AI Q&A systems more conversational and context-aware?"
              answer="Maintain conversation history, ask the AI to acknowledge previous context, use natural language with personality guidelines, ask follow-up questions to clarify intent, and design for iterative dialogue rather than single-turn responses."
            />
            <FAQItem
              question="How do I evaluate the quality of AI question answering systems?"
              answer="Use metrics like answer relevance, factual accuracy, citation precision, coverage of user questions, response latency, and user satisfaction scores. Conduct user testing and maintain a test set of gold-standard Q&A pairs."
            />
            <FAQItem
              question="What privacy and security considerations apply to Q&A systems?"
              answer="Ensure sensitive data in knowledge bases is properly protected, implement access controls, comply with data privacy regulations like GDPR, avoid storing personal information in conversation logs, and audit for information leakage."
            />
            <FAQItem
              question="How can I handle unanswerable or out-of-scope questions?"
              answer="Train the model to decline gracefully with phrases like 'I do not have information about that', set scope boundaries in system prompts, define escalation rules, and provide alternative resources or contact options for out-of-scope queries."
            />
            <FAQItem
              question="How do I scale AI Q&A systems across multiple languages and regions?"
              answer="Use multilingual models, maintain separate knowledge bases for each region, localize domain terminology, test cultural nuances, implement language detection, and monitor performance per language/region independently."
            />
          </div>
        </section>

        <section className="mt-16 pt-12 border-t border-[#2a2a2a]">
          <h2 className="text-2xl font-bold mb-8">Related Pages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/ai-for-news-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#8B5CF6] transition-colors">
              <h3 className="font-bold text-[#8B5CF6] mb-2">AI for News</h3>
              <p className="text-gray-400 text-sm">Prompts for journalism, reporting, and content creation</p>
            </Link>
            <Link href="/ai-for-operations-management-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#8B5CF6] transition-colors">
              <h3 className="font-bold text-[#8B5CF6] mb-2">AI for Operations</h3>
              <p className="text-gray-400 text-sm">Prompts for workflow optimization and process automation</p>
            </Link>
            <Link href="/ai-for-workforce-management-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#8B5CF6] transition-colors">
              <h3 className="font-bold text-[#8B5CF6] mb-2">AI for Workforce</h3>
              <p className="text-gray-400 text-sm">Prompts for HR, recruitment, and team management</p>
            </Link>
            <Link href="/ai-for-facilities-management-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#8B5CF6] transition-colors">
              <h3 className="font-bold text-[#8B5CF6] mb-2">AI for Facilities</h3>
              <p className="text-gray-400 text-sm">Prompts for building and space management</p>
            </Link>
            <Link href="/ai-for-document-management-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#8B5CF6] transition-colors">
              <h3 className="font-bold text-[#8B5CF6] mb-2">AI for Documents</h3>
              <p className="text-gray-400 text-sm">Prompts for document processing and management</p>
            </Link>
            <Link href="/ai-summarizer-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#8B5CF6] transition-colors">
              <h3 className="font-bold text-[#8B5CF6] mb-2">AI Summarizer</h3>
              <p className="text-gray-400 text-sm">Prompts for content summarization and synthesis</p>
            </Link>
            <Link href="/squibler-ai-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#8B5CF6] transition-colors">
              <h3 className="font-bold text-[#8B5CF6] mb-2">Squibler AI</h3>
              <p className="text-gray-400 text-sm">Prompts for creative writing and content generation</p>
            </Link>
            <Link href="/ai-for-management-consulting-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#8B5CF6] transition-colors">
              <h3 className="font-bold text-[#8B5CF6] mb-2">AI for Consulting</h3>
              <p className="text-gray-400 text-sm">Prompts for strategy, analysis, and business consulting</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
