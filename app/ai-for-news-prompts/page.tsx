'use client'

import { useState } from 'react'
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#EF4444] transition-colors">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono mb-4 max-h-64">
        {prompt}
      </pre>
      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-center gap-2 bg-[#EF4444] hover:bg-[#DC2626] text-white font-medium py-2 px-4 rounded"
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
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-[#1a1a1a] hover:bg-[#242424] transition-colors text-left"
      >
        <h4 className="font-bold text-white pr-4">{question}</h4>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#EF4444] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="bg-[#0a0a0a] p-6 border-t border-[#2a2a2a]">
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function NewsPromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Journalism and News Production',
            description: 'Expert-crafted prompts for journalists, editors, and news organizations using AI for reporting, research, content creation, and editorial operations.',
            datePublished: '2026-03-29',
            dateModified: '2026-03-29',
            author: { '@type': 'Organization', name: 'GPT Prompts' },
            publisher: { '@type': 'Organization', name: 'GPT Prompts' },
            mainEntity: {
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How can AI help with news research and fact-checking?',
                  acceptedAnswer: { '@type': 'Answer', text: 'AI can assist by scanning multiple sources simultaneously, verifying claims across databases, identifying inconsistencies, and flagging potential misinformation patterns. Use AI to cross-reference data, check historical records, and validate quotes from public sources quickly.' }
                },
                {
                  '@type': 'Question',
                  name: 'What are best practices for AI-assisted story ideation?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Provide AI with trending topics, reader engagement data, and your publication\'s editorial focus. Ask it to identify underreported angles, emerging story patterns, and audience interest gaps. Verify all AI-suggested story angles through human editorial judgment before assignment.' }
                },
                {
                  '@type': 'Question',
                  name: 'How can journalists use AI for interview preparation?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Use AI to research interview subjects by analyzing their public statements, past interviews, and notable achievements. AI can suggest relevant questions, identify potential contradictions in their public record, and prepare background briefings on complex topics.' }
                },
                {
                  '@type': 'Question',
                  name: 'What safeguards should news organizations implement for AI content?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Require human bylines on all published content, maintain editorial review processes, implement fact-checking protocols, disclose AI use transparently to readers, and preserve human judgment on sensitive stories. Never auto-publish AI-generated content without editorial oversight.' }
                },
                {
                  '@type': 'Question',
                  name: 'How can AI improve news distribution and personalization?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Use AI to analyze reader behavior and preferences to recommend relevant stories, optimize headline variations for different audience segments, and time content distribution for maximum engagement. Maintain editorial integrity while personalizing reader experiences.' }
                },
                {
                  '@type': 'Question',
                  name: 'What editorial standards should govern AI-assisted headlines?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Have journalists review all AI-generated headlines for accuracy, tone consistency, and compliance with editorial standards. AI can assist with headline variations and optimization, but human editors must approve all published versions to ensure journalistic integrity.' }
                },
                {
                  '@type': 'Question',
                  name: 'How can journalists use AI for breaking news analysis?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Use AI to quickly synthesize background information, identify historical parallels, extract key facts from complex stories, and organize information for rapid publication. Journalists retain responsibility for verification and analysis of all information presented.' }
                },
                {
                  '@type': 'Question',
                  name: 'What training do journalists need for AI tool adoption?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Journalists should understand AI capabilities and limitations, know how to write effective prompts, learn fact-checking protocols for AI outputs, and understand ethical implications. Training should emphasize that AI is a research and drafting assistant, not a replacement for journalistic judgment.' }
                },
                {
                  '@type': 'Question',
                  name: 'How can news organizations measure success with AI?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Track metrics like time saved on research tasks, accuracy rates of AI-assisted fact-checking, reader engagement on AI-assisted stories, and journalist productivity gains. Measure impact on quality, not just speed, and maintain editorial oversight.' }
                },
                {
                  '@type': 'Question',
                  name: 'How should news organizations handle disclosure of AI use?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Be transparent with readers about AI involvement in reporting and content creation. Consider labeling stories that used AI for research, interviews, or initial drafts. Building reader trust requires honesty about how AI was used in the journalistic process.' }
                }
              ]
            }
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">AI Prompts for Journalism and News Production</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Expert-crafted prompts for journalists, editors, and news organizations using AI for reporting, research, content creation, editorial operations, and audience engagement.
          </p>
        </div>

        {/* Prompts Sections */}
        <div className="space-y-16 mb-20">
          {/* Section 1: Research & Fact-Checking */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-[#EF4444] pl-4">Research and Fact-Checking</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard
                title="Multi-source Verification"
                prompt="I'm researching a claim that [specific claim]. Help me identify the most reliable sources to verify this, suggest credible databases or public records I should check, and outline potential counterarguments I should investigate."
              />
              <CopyCard
                title="Misinformation Pattern Detection"
                prompt="Analyze this narrative: [statement or news story]. Identify any narrative patterns commonly associated with misinformation, flag potential logical fallacies, and suggest how I could verify the core claims with primary sources."
              />
              <CopyCard
                title="Background Research Synthesis"
                prompt="Create a comprehensive background brief on [topic/person/organization]. Include: historical context, key events, major players, controversies, and relevant statistics. Structure it with the most newsworthy elements first."
              />
              <CopyCard
                title="Quote Verification"
                prompt="I have this quote attributed to [person]: '[quote]'. Help me identify where this quote originally appeared, whether it's been misattributed, if it's been taken out of context, and suggest how to responsibly report on it."
              />
              <CopyCard
                title="Data Visualization Planning"
                prompt="I'm reporting on [dataset/trend]. Suggest the most effective ways to visualize this data for a news audience, identify what data points would be most impactful, and flag any potential ways the data could be misrepresented."
              />
              <CopyCard
                title="Expert Source Identification"
                prompt="For a story about [topic], suggest 5-7 types of experts I should interview, specify what unique perspectives each could provide, and indicate any potential biases I should account for in their responses."
              />
            </div>
          </section>

          {/* Section 2: Story Development & Ideation */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-[#EF4444] pl-4">Story Development and Ideation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard
                title="Trend Analysis for Story Angles"
                prompt="Based on these trends: [list trends/data points], identify 5-6 underreported story angles that would resonate with our audience. For each angle, suggest the type of reporting (investigative, profile, explainer) that would work best."
              />
              <CopyCard
                title="Breaking News Context Builder"
                prompt="I'm covering this breaking news: [news event]. Provide: immediate historical context, key previous events, likely questions audiences will have, and credible sources to contact quickly for comment."
              />
              <CopyCard
                title="Evergreen Story Pitch Development"
                prompt="Help me develop an evergreen story pitch about [topic]. Structure it with: why it matters now, audience interest potential, key reporting required, estimated timeline, and 3-4 different angles we could pursue."
              />
              <CopyCard
                title="Local Impact Angle Discovery"
                prompt="National news headline: [headline]. Help me identify 5-6 ways this story affects our local audience in [location], suggest specific local figures to interview, and recommend local data sources that would strengthen this coverage."
              />
              <CopyCard
                title="Investigation Roadmap"
                prompt="I want to investigate [topic]. Create a detailed roadmap including: key questions to answer, documents to request via FOIA, expert interviews needed, potential obstacles, ethical considerations, and timeline estimates."
              />
              <CopyCard
                title="Series Development Framework"
                prompt="Create a multi-part series structure for covering [topic]. Suggest individual episode/article focuses, how each piece builds on the previous one, key reporting needed for each part, and how to maintain reader engagement across the series."
              />
            </div>
          </section>

          {/* Section 3: Interview Preparation */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-[#EF4444] pl-4">Interview Preparation and Execution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard
                title="Subject Research Brief"
                prompt="Create a research brief for my interview with [person]. Include: professional background, notable statements/positions, past controversies, relevant achievements, potential conflicts of interest, and gaps in their public record I should ask about."
              />
              <CopyCard
                title="Challenging Question Framework"
                prompt="I'm interviewing [person/official] about [topic]. Create 5-7 substantive follow-up questions designed to get beyond prepared talking points, including clarifying questions about contradictions in their previous statements."
              />
              <CopyCard
                title="Source Protection Protocols"
                prompt="I'm planning to report on [sensitive topic] with anonymous sources. Outline: how to securely communicate with sources, what documentation to collect safely, how to verify information from anonymous sources, and legal considerations I should understand."
              />
              <CopyCard
                title="Interview Angle Preparation"
                prompt="For an interview with [person about topic], suggest 8-10 different angles I could pursue depending on how the conversation develops. Include follow-up questions for each angle and potential gotcha questions."
              />
              <CopyCard
                title="Press Conference Strategy"
                prompt="I'm covering a press conference on [topic]. Prepare: key questions to ask, follow-up questions for likely responses, background context to understand responses, and questions to ask officials afterward in hallway conversations."
              />
              <CopyCard
                title="Fact-Check During Interview"
                prompt="During an interview about [topic], the subject claimed [statement]. Help me identify what I should verify immediately after the interview, what official records I should check, and how to responsibly report on this claim."
              />
            </div>
          </section>

          {/* Section 4: Content Creation & Headlines */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-[#EF4444] pl-4">Content Creation and Headline Optimization</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard
                title="Headline Variation Testing"
                prompt="Create 5-6 compelling headline variations for a story about [topic]. For each, include: audience appeal, SEO optimization potential, clarity, accuracy, and which audience segment it would most resonate with."
              />
              <CopyCard
                title="Story Structure Planning"
                prompt="I have these reporting elements for a story on [topic]: [list key points]. Suggest the most compelling narrative structure, which elements should be in the lede, what should be held for later, and how to maintain reader engagement throughout."
              />
              <CopyCard
                title="Explainer Article Framework"
                prompt="Create a structure for explaining [complex topic] to a general audience. Include: key concepts to introduce first, analogies that would help clarity, visual elements that could enhance understanding, and common misconceptions to address."
              />
              <CopyCard
                title="Social Media Angle Development"
                prompt="I'm publishing a story about [topic]. Create 6-8 different social media snippets optimized for: Twitter/X, TikTok, Instagram, LinkedIn, and Facebook. Each should highlight different angles or quote the story in different ways."
              />
              <CopyCard
                title="Breaking News Update Framework"
                prompt="A story broke at [time] about [topic]. Help me structure how to update our story throughout the day as new information emerges. What should be in the initial report, what information should wait for confirmation, and how to manage updates without creating confusion?"
              />
              <CopyCard
                title="Feature Article Opening"
                prompt="I'm writing a feature about [subject/story]. Create 3-4 compelling opening approaches (anecdote, scene-setting, surprising statistic, question). For each, explain why it would hook readers and which approach best serves the overall story."
              />
            </div>
          </section>

          {/* Section 5: Editorial Operations & Audience Engagement */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-[#EF4444] pl-4">Editorial Operations and Audience Engagement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard
                title="Editorial Calendar Optimization"
                prompt="Our newsroom covers [topics/beats]. Based on our audience engagement data showing [patterns], suggest how to structure our editorial calendar to maximize impact, balance daily coverage with investigation, and maintain consistent topical coverage."
              />
              <CopyCard
                title="Audience Engagement Strategy"
                prompt="We published a story about [topic] that received [engagement metrics]. Analyze what elements resonated, suggest follow-up content ideas, identify audience questions we should address, and recommend distribution channels."
              />
              <CopyCard
                title="Corrections and Updates Management"
                prompt="We need to issue a correction on [story detail]. Help me: draft a transparent correction statement, determine the appropriate prominence for it, suggest what we should add as a correction note, and how to prevent similar errors."
              />
              <CopyCard
                title="Newsroom Efficiency Workflow"
                prompt="Our newsroom faces [workflow challenge]. Suggest streamlined processes for [task], identify where AI tools could assist reporters (while maintaining editorial standards), and recommend tools that could improve our workflow without compromising quality."
              />
              <CopyCard
                title="Reader Comment Moderation Framework"
                prompt="We're implementing comment moderation for stories about [sensitive topics]. Create guidelines for: what types of comments to remove, how to handle misinformation in comments, how to promote constructive discussion, and how to maintain community standards."
              />
              <CopyCard
                title="Post-Publication Analysis"
                prompt="Our story about [topic] received [engagement metrics]. Analyze: which elements performed best, what we could improve for similar stories, which audience segments engaged most, and what follow-up content would serve those audiences."
              />
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-[#EF4444] pl-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              question="How can AI help with news research and fact-checking?"
              answer="AI can assist by scanning multiple sources simultaneously, verifying claims across databases, identifying inconsistencies, and flagging potential misinformation patterns. Use AI to cross-reference data, check historical records, and validate quotes from public sources quickly. However, journalists must verify AI findings independently and maintain editorial responsibility for all published information."
            />
            <FAQItem
              question="What are best practices for AI-assisted story ideation?"
              answer="Provide AI with trending topics, reader engagement data, and your publication's editorial focus. Ask it to identify underreported angles, emerging story patterns, and audience interest gaps. Always verify all AI-suggested story angles through human editorial judgment before assignment. AI excels at pattern recognition but lacks newsroom context and editorial values."
            />
            <FAQItem
              question="How can journalists use AI for interview preparation?"
              answer="Use AI to research interview subjects by analyzing their public statements, past interviews, and notable achievements. AI can suggest relevant questions, identify potential contradictions in their public record, and prepare background briefings on complex topics. This preparation saves time but doesn't replace original reporting and independent verification."
            />
            <FAQItem
              question="What safeguards should news organizations implement for AI content?"
              answer="Require human bylines on all published content, maintain editorial review processes, implement fact-checking protocols, and disclose AI use transparently to readers. Never auto-publish AI-generated content without editorial oversight. Preserve human judgment on sensitive stories and maintain clear separation between AI assistance and journalistic authority."
            />
            <FAQItem
              question="How can AI improve news distribution and personalization?"
              answer="Use AI to analyze reader behavior and preferences to recommend relevant stories, optimize headline variations for different audience segments, and time content distribution for maximum engagement. Maintain editorial integrity while personalizing reader experiences, and be transparent about how algorithms influence what readers see."
            />
            <FAQItem
              question="What editorial standards should govern AI-assisted headlines?"
              answer="Have journalists review all AI-generated headlines for accuracy, tone consistency, and compliance with editorial standards. AI can assist with headline variations and optimization, but human editors must approve all published versions. Ensure headlines remain accurate, non-sensational, and aligned with journalistic principles."
            />
            <FAQItem
              question="How can journalists use AI for breaking news analysis?"
              answer="Use AI to quickly synthesize background information, identify historical parallels, extract key facts from complex stories, and organize information for rapid publication. Journalists retain responsibility for verification and analysis of all information presented. Speed advantages are valuable only if accuracy is maintained."
            />
            <FAQItem
              question="What training do journalists need for AI tool adoption?"
              answer="Journalists should understand AI capabilities and limitations, know how to write effective prompts, learn fact-checking protocols for AI outputs, and understand ethical implications. Training should emphasize that AI is a research and drafting assistant, not a replacement for journalistic judgment, source development, or editorial oversight."
            />
            <FAQItem
              question="How can news organizations measure success with AI?"
              answer="Track metrics like time saved on research tasks, accuracy rates of AI-assisted fact-checking, reader engagement on AI-assisted stories, and journalist productivity gains. Measure impact on quality, not just speed, and maintain editorial oversight throughout. Success means journalists can focus on higher-value reporting work."
            />
            <FAQItem
              question="How should news organizations handle disclosure of AI use?"
              answer="Be transparent with readers about AI involvement in reporting and content creation. Consider labeling stories that used AI for research, interviews, or initial drafts. Building reader trust requires honesty about how AI was used in the journalistic process. Transparency strengthens credibility rather than undermining it."
            />
          </div>
        </div>

        {/* Related Pages */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-[#EF4444] pl-4">Related Prompt Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/ai-for-workforce-management-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#EF4444] transition-colors">
              <h3 className="font-bold text-white">Workforce Management</h3>
              <p className="text-gray-400 text-sm mt-2">AI prompts for HR and team leadership</p>
            </Link>
            <Link href="/ai-for-operations-management-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#EF4444] transition-colors">
              <h3 className="font-bold text-white">Operations Management</h3>
              <p className="text-gray-400 text-sm mt-2">AI prompts for process optimization</p>
            </Link>
            <Link href="/ai-for-facilities-management-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#EF4444] transition-colors">
              <h3 className="font-bold text-white">Facilities Management</h3>
              <p className="text-gray-400 text-sm mt-2">AI prompts for building operations</p>
            </Link>
            <Link href="/ai-for-document-management-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#EF4444] transition-colors">
              <h3 className="font-bold text-white">Document Management</h3>
              <p className="text-gray-400 text-sm mt-2">AI prompts for content organization</p>
            </Link>
            <Link href="/ai-question-answering-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#EF4444] transition-colors">
              <h3 className="font-bold text-white">Question Answering</h3>
              <p className="text-gray-400 text-sm mt-2">AI prompts for information retrieval</p>
            </Link>
            <Link href="/squibler-ai-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#EF4444] transition-colors">
              <h3 className="font-bold text-white">Squibler AI</h3>
              <p className="text-gray-400 text-sm mt-2">AI prompts for content writing</p>
            </Link>
            <Link href="/ai-summarizer-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#EF4444] transition-colors">
              <h3 className="font-bold text-white">AI Summarizer</h3>
              <p className="text-gray-400 text-sm mt-2">AI prompts for content summarization</p>
            </Link>
            <Link href="/ai-for-management-consulting-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#EF4444] transition-colors">
              <h3 className="font-bold text-white">Management Consulting</h3>
              <p className="text-gray-400 text-sm mt-2">AI prompts for business strategy</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
