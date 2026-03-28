'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FileText, CheckSquare, Users, Clock, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';

interface CopyCardProps {
  icon: React.ReactNode;
  title: string;
  prompt: string;
  tags: string[];
}

function CopyCard({ icon, title, prompt, tags }: CopyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-5 hover:border-[#6366F1]/50 transition-colors">
      <div className="flex items-start gap-3 mb-3">
        <div className="text-[#6366F1] flex-shrink-0">{icon}</div>
        <h4 className="text-white font-semibold text-lg flex-1">{title}</h4>
      </div>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{prompt}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span key={tag} className="text-xs bg-[#6366F1]/10 text-[#6366F1] px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <button
        onClick={handleCopy}
        className="w-full bg-[#6366F1] hover:bg-[#6366F1]/90 text-white py-2 px-3 rounded text-sm font-medium transition-colors"
      >
        {copied ? '✓ Copied!' : 'Copy Prompt'}
      </button>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-[#252525] transition-colors"
      >
        <h4 className="text-white font-medium text-left">{question}</h4>
        {isOpen ? (
          <ChevronUp className="text-[#6366F1] flex-shrink-0" />
        ) : (
          <ChevronDown className="text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 border-t border-[#2a2a2a]">
          <p className="text-gray-300 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function MeetingNotesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI Prompts for Meeting Notes & Documentation',
    description: 'Master meeting documentation with AI-powered prompts for capturing, organizing, and acting on meeting insights.',
    datePublished: '2026-03-28',
    dateModified: '2026-03-28',
    author: {
      '@type': 'Organization',
      name: 'gptprompts.ai',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] border-b border-[#2a2a2a] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#6366F1] w-8 h-8" />
              <span className="text-[#6366F1] text-sm font-semibold uppercase tracking-wide">Meeting Documentation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              AI Prompts for Meeting Notes &amp; Documentation
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Transform how you capture, organize, and action meeting insights. These AI prompts help you create clear, actionable meeting documentation that drives accountability and progress.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#6366F1]/10 text-[#6366F1] px-3 py-1 rounded-full text-sm font-medium">Meetings</span>
              <span className="bg-[#6366F1]/10 text-[#6366F1] px-3 py-1 rounded-full text-sm font-medium">Documentation</span>
              <span className="bg-[#6366F1]/10 text-[#6366F1] px-3 py-1 rounded-full text-sm font-medium">Productivity</span>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section 1: Meeting Summaries */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-[#6366F1]" />
                <h2 className="text-2xl font-bold">Meeting Summaries &amp; Recaps</h2>
              </div>
              <p className="text-gray-300 mb-6">Turn raw meeting notes into concise, professional summaries that everyone can understand and act on.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CopyCard
                  icon={<FileText className="w-5 h-5" />}
                  title="Executive Meeting Summary"
                  prompt="Summarize this meeting discussion into an executive summary with: 1) Key decisions made, 2) Outcomes and next steps, 3) Budget or resource implications, 4) Timeline for implementation. Format as bullet points for quick scanning."
                  tags={['Summary', 'Executive', 'Decisions']}
                />
                <CopyCard
                  icon={<FileText className="w-5 h-5" />}
                  title="Team Meeting Recap"
                  prompt="Create a quick recap of this team meeting that includes: 1) What we discussed, 2) Who owns what (action items with names), 3) When it&apos;s due, 4) Any blockers or risks. Keep it under 150 words."
                  tags={['Recap', 'Team', 'Actions']}
                />
                <CopyCard
                  icon={<FileText className="w-5 h-5" />}
                  title="Client Meeting Notes"
                  prompt="Format these client meeting notes professionally with: 1) Client name and attendees, 2) Topics discussed, 3) Client feedback and concerns, 4) Follow-up items and deadlines, 5) Next meeting date. Add a professional tone suitable for sharing with stakeholders."
                  tags={['Client', 'Professional', 'Follow-up']}
                />
                <CopyCard
                  icon={<FileText className="w-5 h-5" />}
                  title="Stand-up Meeting Notes"
                  prompt="Turn these daily stand-up notes into a structured format: 1) What team members completed yesterday, 2) What they&apos;re working on today, 3) Blockers or help needed. Format for clarity and quick reference."
                  tags={['Standup', 'Daily', 'Progress']}
                />
              </div>
            </div>

            {/* Section 2: Action Items & Follow-ups */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <CheckSquare className="text-[#6366F1]" />
                <h2 className="text-2xl font-bold">Action Items &amp; Follow-ups</h2>
              </div>
              <p className="text-gray-300 mb-6">Extract and organize action items so nothing falls through the cracks and accountability is clear.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CopyCard
                  icon={<CheckSquare className="w-5 h-5" />}
                  title="Extract Action Items"
                  prompt="From this meeting transcript, extract all action items in this format: [Owner Name] will [action description] by [specific date]. Include any dependencies or blockers mentioned. Prioritize by urgency."
                  tags={['Actions', 'Ownership', 'Deadlines']}
                />
                <CopyCard
                  icon={<CheckSquare className="w-5 h-5" />}
                  title="Risk & Blocker Log"
                  prompt="Identify all risks, blockers, and dependencies mentioned in this meeting. Format as: 1) Risk/Blocker description, 2) Impact if not addressed, 3) Owner responsible for resolving, 4) Target resolution date. Highlight high-priority items."
                  tags={['Risks', 'Blockers', 'Tracking']}
                />
                <CopyCard
                  icon={<CheckSquare className="w-5 h-5" />}
                  title="Decision Log"
                  prompt="Create a decision log from this meeting with: 1) Decision made, 2) Owner who will execute it, 3) Deadline for implementation, 4) Why this decision was made (rationale), 5) Who needs to be informed. Format for stakeholder communication."
                  tags={['Decisions', 'Record', 'Accountability']}
                />
                <CopyCard
                  icon={<CheckSquare className="w-5 h-5" />}
                  title="Follow-up Email Draft"
                  prompt="Draft a professional follow-up email summarizing this meeting with: 1) Key takeaways, 2) Action items and owners, 3) Next steps, 4) Next meeting date. Make it suitable for sending to all attendees and stakeholders."
                  tags={['Email', 'Follow-up', 'Communication']}
                />
              </div>
            </div>

            {/* Section 3: Stakeholder Communication */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-[#6366F1]" />
                <h2 className="text-2xl font-bold">Stakeholder Communication</h2>
              </div>
              <p className="text-gray-300 mb-6">Translate meeting outcomes into clear communications for different stakeholder groups.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CopyCard
                  icon={<Users className="w-5 h-5" />}
                  title="Executive Briefing"
                  prompt="Create a one-page executive briefing from this meeting covering: 1) Business impact, 2) Financial implications, 3) Strategic alignment, 4) Key decisions and approvals needed, 5) Timeline. Keep it concise and metrics-focused."
                  tags={['Executive', 'Strategic', 'Briefing']}
                />
                <CopyCard
                  icon={<Users className="w-5 h-5" />}
                  title="Team Communication"
                  prompt="Turn this meeting into a team announcement that explains: 1) What was decided and why it matters to them, 2) How it affects their work, 3) What they need to do differently, 4) Timeline for changes. Keep tone positive and clear."
                  tags={['Team', 'Announcement', 'Change']}
                />
                <CopyCard
                  icon={<Users className="w-5 h-5" />}
                  title="Cross-functional Update"
                  prompt="Create a cross-functional update email summarizing this meeting for teams who weren&apos;t present. Include: 1) What was discussed, 2) Decisions that affect other teams, 3) How to coordinate or collaborate going forward, 4) Who to contact with questions."
                  tags={['Cross-team', 'Update', 'Coordination']}
                />
                <CopyCard
                  icon={<Users className="w-5 h-5" />}
                  title="Client Debrief"
                  prompt="Prepare a client debrief summarizing what we discussed and committed to, including: 1) What we understood about their needs, 2) Our proposed solution or next steps, 3) Timeline and deliverables, 4) How we&apos;ll stay in touch. Professional and reassuring tone."
                  tags={['Client', 'Debrief', 'Commitment']}
                />
              </div>
            </div>

            {/* Section 4: Data Organization & Tracking */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="text-[#6366F1]" />
                <h2 className="text-2xl font-bold">Data Organization &amp; Tracking</h2>
              </div>
              <p className="text-gray-300 mb-6">Organize meeting data so you can track progress, identify patterns, and maintain organizational memory.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CopyCard
                  icon={<BarChart3 className="w-5 h-5" />}
                  title="Metrics & KPI Review"
                  prompt="Extract key metrics, KPIs, and performance data mentioned in this meeting. Format as: 1) Metric name, 2) Current value, 3) Target value, 4) Owner responsible for tracking, 5) Next review date. Flag metrics trending in the wrong direction."
                  tags={['Metrics', 'KPIs', 'Performance']}
                />
                <CopyCard
                  icon={<BarChart3 className="w-5 h-5" />}
                  title="Project Status Tracker"
                  prompt="Create a project status update from this meeting with: 1) Project name and owner, 2) Overall status (on track/at risk/delayed), 3) % completion, 4) Key milestones completed, 5) Upcoming milestones, 6) Risks that could impact timeline."
                  tags={['Project', 'Status', 'Timeline']}
                />
                <CopyCard
                  icon={<BarChart3 className="w-5 h-5" />}
                  title="Budget & Resource Impact"
                  prompt="Summarize budget and resource implications from this meeting: 1) Budget approved or requested, 2) Resource allocation or changes, 3) Cost implications of decisions made, 4) Timeline for spend, 5) Owner responsible for budget. Flag any concerning items."
                  tags={['Budget', 'Resources', 'Finance']}
                />
                <CopyCard
                  icon={<BarChart3 className="w-5 h-5" />}
                  title="Meeting Archive Summary"
                  prompt="Create a meeting archive record with: 1) Meeting title, date, attendees, 2) Purpose of meeting, 3) Decisions made, 4) Action items, 5) Key discussion points, 6) Files or resources referenced. Format for searchability and future reference."
                  tags={['Archive', 'Record', 'Reference']}
                />
              </div>
            </div>

            {/* Section 5: Meeting Preparation & Follow-through */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-[#6366F1]" />
                <h2 className="text-2xl font-bold">Meeting Preparation &amp; Follow-through</h2>
              </div>
              <p className="text-gray-300 mb-6">Use AI to prepare for meetings and ensure follow-through on commitments made.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CopyCard
                  icon={<Clock className="w-5 h-5" />}
                  title="Agenda Builder"
                  prompt="Create a structured meeting agenda from these topics: [list topics]. For each agenda item, include: 1) Topic, 2) Owner/facilitator, 3) Time allocated, 4) Desired outcome, 5) Pre-reads or prep required. Keep total time realistic."
                  tags={['Planning', 'Agenda', 'Preparation']}
                />
                <CopyCard
                  icon={<Clock className="w-5 h-5" />}
                  title="Pre-meeting Brief"
                  prompt="Prepare a pre-meeting brief for attendees to read before our meeting covering: 1) Meeting purpose, 2) Decisions or approvals we need, 3) Background or context, 4) Key questions to consider, 5) Any pre-reads they should review. Format as a quick read."
                  tags={['Preparation', 'Brief', 'Context']}
                />
                <CopyCard
                  icon={<Clock className="w-5 h-5" />}
                  title="Action Item Follow-up"
                  prompt="Generate follow-up messages for action item owners 5 days before their deadline saying: 1) Action item they committed to, 2) Deadline date, 3) Why it matters, 4) Request for status update, 5) Offer to help or unblock. Keep tone supportive, not nagging."
                  tags={['Follow-up', 'Accountability', 'Support']}
                />
                <CopyCard
                  icon={<Clock className="w-5 h-5" />}
                  title="Meeting Reflection"
                  prompt="Create a meeting reflection template asking: 1) Did we achieve the meeting purpose?, 2) What went well?, 3) What could we improve next time?, 4) Are we actually following through on action items?, 5) Should we have had this meeting?. Use for continuous improvement."
                  tags={['Reflection', 'Improvement', 'Feedback']}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#1a1a1a] border-t border-[#2a2a2a] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 gap-3">
              <FAQItem
                question="How can AI help me take better meeting notes?"
                answer="AI can help organize messy notes into clear summaries, extract action items automatically, identify key decisions, and format information for different audiences. It turns raw conversation into structured, actionable documentation."
              />
              <FAQItem
                question="Should I record and transcribe meetings, or use AI to improve written notes?"
                answer="Both approaches work. Recording + transcription captures everything word-for-word, while AI on written notes helps you be more selective and intentional about what you capture. Many people use AI to clean up rough transcripts, which is fastest."
              />
              <FAQItem
                question="How do I make sure action items actually get completed?"
                answer="Use AI to extract action items with clear owners and deadlines, then send structured follow-ups. Track them in a centralized tool, and review progress in team meetings. The key is visibility and gentle accountability."
              />
              <FAQItem
                question="What&apos;s the best way to share meeting notes with people who weren&apos;t there?"
                answer="Use AI to create tailored summaries for different audiences (executives need different info than individual contributors). Put action items for each person at the top, and make optional sections for people to drill into details if interested."
              />
              <FAQItem
                question="How can I use meeting notes to improve how our team works together?"
                answer="Use AI to analyze patterns across meetings: Which decisions stick? Which actions actually happen? Which meetings could have been emails? Use these insights to improve your meeting cadence and formats over time."
              />
              <FAQItem
                question="Can AI help with meeting preparation, not just documentation?"
                answer="Yes. AI can help you build agendas, create pre-reads, identify discussion questions, and prep briefing materials. Good prep leads to better meetings and faster documentation afterward."
              />
              <FAQItem
                question="How do I organize meeting notes so I can find them later?"
                answer="Use consistent naming conventions (date + topic), file them by project or team, and use AI to create searchable summaries or tags. Store them in one central location everyone can access, and create an archive record for historical reference."
              />
              <FAQItem
                question="What should I include in a meeting decision log?"
                answer="Include the decision, who made it, why it was made (rationale), who it affects, deadline for implementation, and owner responsible. Decision logs become important historical records and prevent the same decisions being relitigated."
              />
              <FAQItem
                question="How can I reduce time spent in meetings?"
                answer="Use AI to help you decide which meetings are actually necessary. Track which attendees contribute, whether notes actually drive action, and whether decisions actually get made. Use this data to cut or reshape low-value meetings."
              />
              <FAQItem
                question="Should meeting notes be formal or casual?"
                answer="It depends on audience and purpose. Internal team notes can be casual and conversational. Notes shared with executives or external stakeholders should be more polished. Use AI to adjust tone and formality as needed for different audiences."
              />
              <FAQItem
                question="How do I make meeting follow-ups feel supportive rather than nagging?"
                answer="Focus on offering help rather than demanding updates. Frame follow-ups as &apos;how can I help you complete this?&apos; rather than &apos;where is this?&apos; Acknowledge when people complete items and give them space if blockers emerged."
              />
              <FAQItem
                question="Can I use these prompts for 1-on-1 meetings?"
                answer="Absolutely. Many of these prompts work well for 1-on-1s. Create a summary of feedback given, development areas discussed, and action items for growth. Track these over time to see career progress and identify coaching needs."
              />
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-6">Explore Related Prompt Collections</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/ai-prompts-brainstorming"
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-5 hover:border-[#EAB308]/50 transition-colors group"
              >
                <div className="text-[#EAB308] mb-2 group-hover:scale-110 transition-transform inline-block">
                  <span className="text-sm font-semibold uppercase">Brainstorming</span>
                </div>
                <p className="text-gray-300 text-sm">AI prompts for idea generation and creative thinking</p>
              </Link>
              <Link
                href="/ai-prompts-personal-finance"
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-5 hover:border-[#059669]/50 transition-colors group"
              >
                <div className="text-[#059669] mb-2 group-hover:scale-110 transition-transform inline-block">
                  <span className="text-sm font-semibold uppercase">Personal Finance</span>
                </div>
                <p className="text-gray-300 text-sm">AI prompts for budgeting, planning, and financial advice</p>
              </Link>
              <Link
                href="/chatgpt-prompts-meal-planning"
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-5 hover:border-[#F97316]/50 transition-colors group"
              >
                <div className="text-[#F97316] mb-2 group-hover:scale-110 transition-transform inline-block">
                  <span className="text-sm font-semibold uppercase">Meal Planning</span>
                </div>
                <p className="text-gray-300 text-sm">ChatGPT prompts for meal planning and nutrition</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
