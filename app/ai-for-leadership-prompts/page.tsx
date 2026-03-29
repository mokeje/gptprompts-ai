'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

export default function LeadershipPromptsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const CopyCard = ({ prompt, id }: { prompt: string; id: string }) => (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-violet-500/50 transition-colors">
      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={() => copyToClipboard(prompt, id)}
        className="inline-flex items-center gap-2 px-3 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded text-sm transition-colors"
      >
        {copiedId === id ? (
          <>
            <Check size={16} />
            Copied
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy
          </>
        )}
      </button>
    </div>
  );

  const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
        className="w-full flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-750 transition-colors text-left"
      >
        <span className="text-gray-100 font-medium">{question}</span>
        {expandedFaq === index ? (
          <ChevronUp size={20} className="text-violet-500" />
        ) : (
          <ChevronDown size={20} className="text-gray-400" />
        )}
      </button>
      {expandedFaq === index && (
        <div className="p-4 bg-gray-750 border-t border-gray-700">
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );

  const prompts = {
    'Leadership Development': [
      "Analyze my leadership style based on the following feedback I\'ve received: [insert feedback]. Identify three key strengths and three areas for growth. Suggest specific actions to develop each growth area.",
      "Create a 90-day leadership development plan for a new manager transitioning from an individual contributor role. Include priority focus areas, learning resources, and monthly milestones.",
      "I\'m struggling with delegation. Help me identify which tasks I should delegate, how to prepare my team for those responsibilities, and how to build accountability without micromanaging.",
      "Design a coaching conversation framework I can use with each team member monthly. Include opening questions, active listening techniques, and how to set clear growth goals.",
      "Evaluate my current leadership behaviors against these core values: [insert values]. Where am I aligned, and where do I need to make changes in how I show up as a leader?",
      "Create a leadership assessment comparing my perceived strengths and weaknesses with 360-degree feedback. What patterns emerge, and what\'s my personal leadership priority?"
    ],
    'Team Management': [
      "I\'m managing a team with diverse working styles and motivations. Help me create a personalized approach for each team member based on their strengths and preferences.",
      "Design a performance management system that feels fair and motivating rather than punitive. Include how I\'ll set expectations, provide feedback, and recognize high performers.",
      "My team is experiencing conflict between two key members. Guide me through a structured approach to addressing this, including one-on-one conversations and team dynamics work.",
      "Create a framework for having difficult conversations with underperforming team members. Include how to gather data, prepare, have the conversation, and follow up.",
      "How can I foster psychological safety in my team so people feel safe to take risks, admit mistakes, and share ideas? Create an action plan with specific behaviors.",
      "Develop a talent retention strategy for my team. Analyze flight risks, design personalized retention conversations, and identify career growth opportunities for key people."
    ],
    'Change Management and Organizational Growth': [
      "I need to lead a major organizational change. Design a comprehensive change management strategy including stakeholder analysis, communication plan, and resistance management.",
      "Create a vision communication plan that makes a strategic shift feel compelling and achievable to my team. Include the narrative, key messages, and how to answer tough questions.",
      "My team is struggling with a recent change. Help me diagnose the root causes of resistance and design interventions that address both emotional and practical concerns.",
      "Design a process for building buy-in to a new strategic direction. Include how to involve key stakeholders, incorporate their input, and create ownership across the organization.",
      "Create a 12-month roadmap for scaling the team and introducing new processes. Include hiring strategy, training plans, and how to maintain culture during growth.",
      "I\'m implementing a new organizational structure. Help me design transition conversations, role clarification sessions, and how to address anxiety and uncertainty."
    ],
    'Decision-Making and Problem-Solving': [
      "Help me structure a critical business decision I\'m facing. Use a framework that includes gathering diverse perspectives, analyzing tradeoffs, and ensuring buy-in.",
      "I have a complex problem with no obvious solution. Guide me through a rigorous problem-solving process including root cause analysis and generating multiple options.",
      "Create a decision-making framework that balances speed with inclusiveness. When should I decide alone vs. involve the team? How do I communicate decisions effectively?",
      "Help me evaluate a strategic opportunity by defining success criteria, assessing risks, analyzing resource requirements, and determining go/no-go decision points.",
      "I\'m facing a crisis that requires fast decision-making under uncertainty. Design a decision protocol that ensures safety while moving quickly and learning as we go.",
      "Create a lessons-learned process for decisions that didn\'t work out. How do I extract insights without blame and apply them to future decision-making?"
    ],
    'Self-Leadership and Impact': [
      "Conduct a 360-degree leadership analysis based on feedback I can provide: [insert examples]. What\'s my blind spot, and what changes would increase my leadership impact?",
      "Create a personal leadership brand statement that reflects who I am, what I stand for, and the impact I want to have. How do I embody this brand consistently?",
      "I\'m managing up to a more senior leader. Design a strategy for building influence, credibility, and trust with my boss and stakeholders above me.",
      "Help me identify my leadership gaps relative to my career goals. What skills, experiences, and mindsets do I need to develop to reach my next level?",
      "Design a sustainability plan for managing stress and preventing burnout while maintaining high performance. Include daily practices, boundaries, and when to ask for help.",
      "Create a reflective practice I can do weekly or monthly to assess my leadership effectiveness, growth, and alignment with my values."
    ]
  };

  const faqs = [
    {
      q: "How can I develop as a leader without formal training programs?",
      a: "Leadership development happens through deliberate practice, reflection, and feedback. Use AI to create personalized learning experiences: get feedback from your team and mentor relationships, analyze your decision-making patterns, and create daily practices that build new habits. The key is consistent reflection and intentional application of what you learn."
    },
    {
      q: "How do I balance being directive and collaborative as a leader?",
      a: "The best leaders match their style to the situation. Directive leadership works when decisions are urgent or clarity is critical. Collaborative leadership works when buy-in and ownership matter more than speed. Use AI to analyze past decisions and identify patterns about when each approach served you best."
    },
    {
      q: "What\'s the difference between managing and leading?",
      a: "Managing is about executing the plan: setting tasks, monitoring progress, and ensuring accountability. Leading is about creating direction, building capability, and inspiring commitment to something bigger. Great leaders do both, but AI can help you clarify which mode each situation requires."
    },
    {
      q: "How do I handle a team member who isn\'t performing?",
      a: "Start with curiosity, not judgment. Use AI to help you diagnose the root cause: is it capability (they don\'t know how), motivation (they don\'t want to), clarity (they don\'t understand what success looks like), or resources (they don\'t have what they need). Your intervention depends on the root cause."
    },
    {
      q: "How do I create psychological safety on my team?",
      a: "Psychological safety grows when people see that it\'s safe to be vulnerable, admit mistakes, and ask questions. Model this yourself: admit what you don\'t know, acknowledge mistakes, ask for help, and respond to vulnerability without judgment. Use AI to audit your behaviors and team norms."
    },
    {
      q: "What metrics should I track as a leader?",
      a: "Track outcomes (business results), process metrics (how work gets done), and people metrics (engagement, retention, development). Use AI to help you design a balanced scorecard that tells the story of what you\'re trying to achieve as a leader."
    },
    {
      q: "How do I handle conflict between team members?",
      a: "The most effective approach is to help people solve it themselves rather than solving it for them. Use AI to design a mediation conversation: meet separately first to understand each perspective, then facilitate a conversation focused on shared goals and solutions."
    },
    {
      q: "How do I know if I\'m a good leader?",
      a: "Ask people who matter most: your team, your peers, and your boss. Use AI to design a feedback process that goes deeper than satisfaction surveys. Look for: do people grow under your leadership, do they trust you, do they deliver results, and do they stay?"
    },
    {
      q: "How do I delegate without losing control or quality?",
      a: "Delegation is about transferring both the task and the ownership. Use AI to design clear expectations (what success looks like), regular check-ins (to catch problems early), and progressive autonomy (as people prove competence). Trust is built through proven capability, not blind faith."
    },
    {
      q: "What should I do if I realize I\'m not cut out for this leadership role?",
      a: "That\'s a honest question worthy of real reflection. Use AI to assess what specifically feels misaligned: the authority, the pressure, the people aspect, the strategy work. Sometimes a different role is the answer. Sometimes developing a specific skill transforms how you feel. Get objective feedback before you decide."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'AI Prompts for Leadership Development',
              description: 'Comprehensive collection of AI prompts for developing leadership skills, managing teams, driving change, and increasing impact.',
              author: {
                '@type': 'Person',
                name: 'Michael Okeje'
              },
              datePublished: '2026-03-29',
              dateModified: '2026-03-29'
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a
                }
              }))
            })
          }}
        />

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Prompts for Leadership Development
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            36 practical prompts to develop your leadership skills, manage your team effectively, drive organizational change, and increase your impact as a leader.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-violet-900/40 text-violet-300 rounded-full text-sm">Leadership Development</span>
            <span className="px-3 py-1 bg-violet-900/40 text-violet-300 rounded-full text-sm">Team Management</span>
            <span className="px-3 py-1 bg-violet-900/40 text-violet-300 rounded-full text-sm">Change Management</span>
            <span className="px-3 py-1 bg-violet-900/40 text-violet-300 rounded-full text-sm">Decision-Making</span>
          </div>
        </div>

        <div className="space-y-12">
          {Object.entries(prompts).map(([section, sectionPrompts]) => (
            <div key={section}>
              <h2 className="text-2xl font-bold text-violet-400 mb-6 border-b border-gray-700 pb-3">
                {section}
              </h2>
              <div className="grid gap-4">
                {sectionPrompts.map((prompt, idx) => (
                  <CopyCard
                    key={`${section}-${idx}`}
                    prompt={prompt}
                    id={`${section}-${idx}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.q}
                answer={faq.a}
                index={idx}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-8">Related Prompt Collections</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/ai-for-executives-prompts"
              className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-violet-500/50 transition-colors"
            >
              <h3 className="text-violet-400 font-semibold mb-2">AI for Executives</h3>
              <p className="text-gray-400 text-sm">Strategic decision-making and financial planning prompts.</p>
            </Link>
            <Link
              href="/ai-for-risk-management-prompts"
              className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-violet-500/50 transition-colors"
            >
              <h3 className="text-violet-400 font-semibold mb-2">AI for Risk Management</h3>
              <p className="text-gray-400 text-sm">Risk assessment, compliance, and governance prompts.</p>
            </Link>
            <Link
              href="/ai-for-quality-management-prompts"
              className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-violet-500/50 transition-colors"
            >
              <h3 className="text-violet-400 font-semibold mb-2">AI for Quality Management</h3>
              <p className="text-gray-400 text-sm">Quality assurance and process improvement prompts.</p>
            </Link>
            <Link
              href="/ai-chat-prompts"
              className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-violet-500/50 transition-colors"
            >
              <h3 className="text-violet-400 font-semibold mb-2">AI Chat Prompts</h3>
              <p className="text-gray-400 text-sm">General conversation and communication prompts.</p>
            </Link>
            <Link
              href="/ai-character-chat-prompts"
              className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-violet-500/50 transition-colors"
            >
              <h3 className="text-violet-400 font-semibold mb-2">AI Character Chat Prompts</h3>
              <p className="text-gray-400 text-sm">Character roleplay and storytelling prompts.</p>
            </Link>
            <Link
              href="/ai-personal-assistant-prompts"
              className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-violet-500/50 transition-colors"
            >
              <h3 className="text-violet-400 font-semibold mb-2">AI Personal Assistant Prompts</h3>
              <p className="text-gray-400 text-sm">Productivity and task management prompts.</p>
            </Link>
            <Link
              href="/ai-generative-ai-prompts"
              className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-violet-500/50 transition-colors"
            >
              <h3 className="text-violet-400 font-semibold mb-2">AI Generative AI Prompts</h3>
              <p className="text-gray-400 text-sm">Content creation and generative AI prompts.</p>
            </Link>
            <Link
              href="/ai-resume-builder-prompts"
              className="p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-violet-500/50 transition-colors"
            >
              <h3 className="text-violet-400 font-semibold mb-2">AI Resume Builder Prompts</h3>
              <p className="text-gray-400 text-sm">Career development and resume prompts.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
