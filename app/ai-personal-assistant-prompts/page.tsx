'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#10B981] rounded-lg p-4 hover:border-[#10B981] transition-colors">
      <p className="text-gray-100 text-sm leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="mt-3 flex items-center gap-2 px-3 py-1 rounded bg-[#10B981] text-black text-xs font-semibold hover:bg-[#0d9d6f] transition-colors"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#333]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-4 flex justify-between items-center hover:text-[#10B981] transition-colors text-left"
      >
        <span className="font-semibold text-gray-100">{question}</span>
        {open ? <ChevronUp size={20} className="text-[#10B981]" /> : <ChevronDown size={20} />}
      </button>
      {open && <p className="pb-4 text-gray-300 text-sm leading-relaxed">{answer}</p>}
    </div>
  );
};

export default function PersonalAssistantPromptsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent">
            AI Personal Assistant Prompts
          </h1>
          <p className="text-gray-400 text-lg">
            Master the art of delegating tasks to your AI personal assistant. These prompts help you optimize productivity, manage communications, plan your development, and maintain work-life balance.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#10B981]">Productivity and Task Management</h2>
            <div className="grid gap-4">
              <CopyCard prompt="You are my daily productivity assistant. Help me break down my top 3 priorities for today into specific, actionable tasks with estimated time blocks. Then create a realistic schedule that accounts for deep work, meetings, and breaks. At the end, ask what unexpected tasks came up and help me reprioritize." />
              <CopyCard prompt="Analyze my project list and help me identify which projects are at risk of missing deadlines. For each at-risk project, suggest specific actions I can take today, this week, and next week to get back on track. Prioritize actions by impact-to-effort ratio." />
              <CopyCard prompt="Act as my weekly review facilitator. Guide me through a structured review of last week: what went well, what didn\'t, key learnings, and blockers I faced. Then help me set clearer goals for next week based on what I learned. Use the format: Wins, Challenges, Learnings, Next Week Focus." />
              <CopyCard prompt="You are my deadline tracker. I\'ll give you a list of upcoming deadlines across projects. For each deadline in the next 30 days, break it into milestones with specific dates and deliverables. Flag any deadlines that are at risk based on current progress. Suggest which tasks need to start immediately." />
              <CopyCard prompt="Help me design my ideal daily time-blocking schedule. I work best during [morning/afternoon/evening]. I have [X hours] of focused work available daily, plus [Y hours] for meetings. Create a template that optimizes for deep work, administrative tasks, and breaks. Include specific time blocks and the type of work best suited for each." />
              <CopyCard prompt="You are my habit and accountability partner. I want to build the following habits: [list habits]. For each habit, create a specific, measurable definition of success (not vague goals). Then help me design a system to track progress daily and adjust when I fall off. Include trigger-habit-reward chains for each." />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#10B981]">Communications and Collaboration</h2>
            <div className="grid gap-4">
              <CopyCard prompt="I have a meeting scheduled with [person/team] to discuss [topic]. Help me prepare by: (1) Clarifying the goal of the meeting, (2) Anticipating their perspective and potential objections, (3) Drafting a clear agenda, (4) Preparing 2-3 talking points with supporting data, (5) Identifying decisions that need to be made and who needs to make them." />
              <CopyCard prompt="Review my email draft: [paste email]. Provide specific feedback on: clarity (is the ask obvious?), tone (does it match the relationship?), structure (is it easy to scan?), and action items (is it clear what I\'m asking for?). Suggest a revised version that\'s more concise and compelling." />
              <CopyCard prompt="I need to recap a meeting I just had. I\'ll give you key discussion points, decisions made, and action items. Help me structure this into a concise recap email that: lists decisions clearly, assigns action items with owners and deadlines, flags blockers, and confirms next steps. Keep it to 200 words max." />
              <CopyCard prompt="You are my stakeholder relationship manager. I work with [list stakeholders]. For each stakeholder, help me identify: what they care about most, how often I should update them, what format they prefer (email, calls, dashboards), and potential friction points. Then create a simple communication plan for each." />
              <CopyCard prompt="I need to have a difficult conversation with [person] about [topic]. Help me prepare by: (1) Clarifying what outcome I want, (2) Understanding their likely perspective, (3) Identifying areas of agreement first, (4) Drafting how to raise the concern respectfully, (5) Preparing responses to likely reactions." />
              <CopyCard prompt="I\'m drowning in messages across email, Slack, Teams, etc. Help me design a communication triage system: What types of messages need immediate response (within 1 hour)? What can wait? How should I batch-check different channels to minimize context switching? Create a specific protocol I can follow." />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#10B981]">Personal Development and Strategic Planning</h2>
            <div className="grid gap-4">
              <CopyCard prompt="I want to develop the following skills for my career: [list 3 skills]. For each skill, help me: (1) Define what competence looks like (what will I be able to do?), (2) Identify the best learning resources (courses, books, projects, mentors), (3) Create a 90-day learning plan with milestones, (4) Suggest projects where I can apply what I learn immediately." />
              <CopyCard prompt="Help me clarify my 5-year career goal. I currently [describe role and context]. I\'m considering [potential directions]. For each direction, help me evaluate: growth potential, alignment with my values, market demand, required skills, and realistic timeline. Then help me choose and create a roadmap to get there." />
              <CopyCard prompt="I\'m facing a major career decision: [describe the decision]. Help me structure this decision by: (1) Clarifying what success looks like in each option, (2) Identifying the key factors that matter most to me, (3) Stress-testing each option against those factors, (4) Imagining myself in each scenario 3 years from now, (5) Recommending the option that aligns best with my values." />
              <CopyCard prompt="Review my career goals for this year: [list goals]. For each goal, help me: (1) Define measurable success criteria, (2) Identify the skills or capabilities I need to develop, (3) Break the goal into quarterly milestones, (4) Flag dependencies and potential blockers, (5) Create a tracking system." />
              <CopyCard prompt="I want to build my personal brand in [industry/field]. Help me create a strategy that includes: (1) Clear positioning statement (what I\'m known for), (2) Where my target audience spends time, (3) Content themes I should focus on, (4) A 12-month content plan with specific topics and formats, (5) Metrics to track progress." />
              <CopyCard prompt="You are my strategic advisor. I\'m entering a [new role/phase of my career]. Help me understand: (1) What are the critical success factors in this new context? (2) What are common pitfalls people make? (3) What relationships and skills are most valuable? (4) What should my first 30/60/90 days look like to establish credibility?" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#10B981]">Wellness and Work-Life Balance</h2>
            <div className="grid gap-4">
              <CopyCard prompt="I\'m feeling overwhelmed and burnt out. Help me diagnose the root causes by asking about: workload, boundaries, support, meaning, and recovery. Then help me create a realistic plan to address each cause. What can I change immediately? What requires longer-term shifts? What help do I need?" />
              <CopyCard prompt="Design my ideal break schedule. I work [X hours per week]. I have [Y vacation days per year]. Help me create a plan that includes: daily breaks (type and duration), weekly recovery time, strategic long breaks or sabbaticals, and boundary-setting with work. Include specific practices for each break type." />
              <CopyCard prompt="I want to improve my sleep and recovery. I typically sleep [X hours] and feel [quality description]. Help me audit my sleep: sleep schedule, environment, pre-sleep habits, stress levels, and caffeine/exercise timing. Then create a specific 30-day improvement plan with realistic changes." />
              <CopyCard prompt="Help me balance my career ambitions with my personal values: [list key values like family, health, creativity, etc.]. For each value, help me: (1) Define what honoring that value looks like in practice, (2) Identify where my current life is misaligned, (3) Create specific actions to realign, (4) Build these into my weekly routine non-negotiably." />
              <CopyCard prompt="I\'m struggling with [specific stress: perfectionism, imposter syndrome, comparison, etc.]. Help me understand: (1) Where does this pattern come from? (2) What triggers it? (3) How does it show up in my work and life? (4) What would the opposite look like? (5) Create a specific intervention I can use when I notice this pattern." />
              <CopyCard prompt="Design a weekly wellness routine that takes [X hours total] and addresses: physical health, mental health, relationships, creativity, and rest. Make it realistic for my schedule. Include specific activities, ideal timing, and non-negotiable elements. Help me identify what I\'ll stop doing to make room for this." />
            </div>
          </section>
        </div>

        <section className="mt-16 border-t border-[#333] pt-12">
          <h2 className="text-2xl font-bold mb-8 text-[#10B981]">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <FAQItem
              question="How do I get my AI assistant to understand my specific work context?"
              answer="Be explicit about your context upfront: your role, industry, team size, key objectives, and constraints. Share examples of past decisions or how you typically work. The more context you provide, the more personalized and relevant the advice will be. Consider starting with a 'context-setting' conversation where you share background information."
            />
            <FAQItem
              question="How can I use these prompts for delegation and task batching?"
              answer="These prompts work best when batched: run your productivity review once weekly, handle all communications triage at set times daily, and do strategic planning quarterly. This prevents constant context switching. You can also delegate specific prompts to team members (e.g., ask your assistant to run the meeting prep prompt for all your upcoming meetings)."
            />
            <FAQItem
              question="What should I track to know if these prompts are actually helping?"
              answer="Track outcomes that matter to you: time spent in deep work, task completion rates, communication effectiveness (fewer follow-up emails needed?), and subjective measures like stress levels and work-life balance satisfaction. Review quarterly to see if these prompts are genuinely improving your productivity and wellbeing or if adjustments are needed."
            />
            <FAQItem
              question="Can I customize these prompts for my specific role or industry?"
              answer="Absolutely. These are templates. Adapt them by adding your specific context, constraints, and terminology. For example, if you\'re in healthcare, replace generic 'projects' with 'patient cases' or specific workflows. The structure and thinking model remain valuable; only the context changes."
            />
            <FAQItem
              question="How do I avoid over-relying on AI for decision-making?"
              answer="These prompts are designed to structure your thinking and surface options, not replace your judgment. Always: review the AI\'s suggestions critically, consult trusted people for major decisions, test recommendations on a small scale first, and regularly reflect on whether the suggestions align with your values and experience."
            />
            <FAQItem
              question="How often should I revisit my productivity and wellness plans?"
              answer="Weekly for tactical planning (time-blocking, weekly reviews), monthly for mid-course corrections, quarterly for strategic planning (career goals, skill development), and annually for major life/career reviews. Your circumstances and priorities change; your plans should evolve with them."
            />
            <FAQItem
              question="What if I disagree with the AI\'s prioritization or recommendations?"
              answer="Trust your instincts. The AI doesn\'t know your full context, intuition, or constraints. Use the prompts to clarify your thinking, not to outsource your judgment. If a recommendation doesn\'t feel right, ask the AI 'why' and explore the reasoning. Often you\'ll discover what the AI missed, which helps you make a better decision."
            />
            <FAQItem
              question="Can I use these prompts with a team, or are they just for individual use?"
              answer="Both. Use them individually to prepare, then bring the structured output to team discussions. For example, run the meeting prep prompt alone, then use that to guide the actual meeting. You can also share prompts with team members to help them prepare for collaboration with you, creating alignment and saving meeting time."
            />
            <FAQItem
              question="How do I balance structure (these prompts) with flexibility and spontaneity?"
              answer="Use these prompts to establish your baseline and guardrails: your non-negotiables, your key priorities, and your boundaries. Then stay flexible within those boundaries. The structure creates space for spontaneity by reducing decision fatigue on routine matters. You\'ll have more mental energy for creative, unexpected opportunities."
            />
            <FAQItem
              question="What if I\'m new to using AI as a personal assistant? Where should I start?"
              answer="Start with the 'Weekly Review Assistant' prompt to understand your current baseline. Then try the 'Daily Task Prioritizer' for 2-3 weeks to experience the impact on your daily productivity. Once comfortable, expand to communications and wellness prompts. Build gradually rather than trying all prompts at once, which can feel overwhelming."
            />
          </div>
        </section>

        <section className="mt-16 border-t border-[#333] pt-12">
          <h2 className="text-2xl font-bold mb-8 text-[#10B981]">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/ai-chat-prompts" className="p-4 border border-[#333] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-[#10B981] mb-2">AI Chat Prompts</h3>
              <p className="text-gray-400 text-sm">Explore conversational prompts for brainstorming, roleplay, and dialogue.</p>
            </Link>
            <Link href="/ai-character-chat-prompts" className="p-4 border border-[#333] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-[#10B981] mb-2">AI Character Chat Prompts</h3>
              <p className="text-gray-400 text-sm">Interact with AI characters from literature, history, and fantasy.</p>
            </Link>
            <Link href="/generative-ai-prompts" className="p-4 border border-[#333] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-[#10B981] mb-2">Generative AI Prompts</h3>
              <p className="text-gray-400 text-sm">Create content with AI for writing, design, and creative projects.</p>
            </Link>
            <Link href="/ai-resume-builder-prompts" className="p-4 border border-[#333] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-[#10B981] mb-2">AI Resume Builder Prompts</h3>
              <p className="text-gray-400 text-sm">Craft compelling resumes and cover letters with AI guidance.</p>
            </Link>
            <Link href="/ai-for-risk-management-prompts" className="p-4 border border-[#333] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-[#10B981] mb-2">AI for Risk Management Prompts</h3>
              <p className="text-gray-400 text-sm">Identify, assess, and mitigate risks across your organization.</p>
            </Link>
            <Link href="/ai-for-executives-prompts" className="p-4 border border-[#333] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-[#10B981] mb-2">AI for Executives Prompts</h3>
              <p className="text-gray-400 text-sm">Strategic decision-making and leadership guidance with AI.</p>
            </Link>
            <Link href="/ai-for-leadership-prompts" className="p-4 border border-[#333] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-[#10B981] mb-2">AI for Leadership Prompts</h3>
              <p className="text-gray-400 text-sm">Develop leadership skills and team performance with AI coaching.</p>
            </Link>
            <Link href="/ai-for-quality-management-prompts" className="p-4 border border-[#333] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-semibold text-[#10B981] mb-2">AI for Quality Management Prompts</h3>
              <p className="text-gray-400 text-sm">Improve processes and ensure quality standards with AI analysis.</p>
            </Link>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Personal Assistant Prompts',
            description: 'Master the art of delegating tasks to your AI personal assistant. These prompts help you optimize productivity, manage communications, plan your development, and maintain work-life balance.',
            datePublished: '2026-03-29',
            dateModified: '2026-03-29',
            author: {
              '@type': 'Person',
              name: 'Michael Okeje'
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I get my AI assistant to understand my specific work context?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Be explicit about your context upfront: your role, industry, team size, key objectives, and constraints. Share examples of past decisions or how you typically work. The more context you provide, the more personalized and relevant the advice will be.'
                }
              },
              {
                '@type': 'Question',
                name: 'How can I use these prompts for delegation and task batching?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'These prompts work best when batched: run your productivity review once weekly, handle all communications triage at set times daily, and do strategic planning quarterly. This prevents constant context switching.'
                }
              },
              {
                '@type': 'Question',
                name: 'What should I track to know if these prompts are actually helping?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Track outcomes that matter to you: time spent in deep work, task completion rates, communication effectiveness, and subjective measures like stress levels and work-life balance satisfaction.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I customize these prompts for my specific role or industry?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. These are templates. Adapt them by adding your specific context, constraints, and terminology. The structure and thinking model remain valuable; only the context changes.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do I avoid over-relying on AI for decision-making?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'These prompts are designed to structure your thinking and surface options, not replace your judgment. Always review the suggestions critically, consult trusted people for major decisions, and test recommendations on a small scale first.'
                }
              },
              {
                '@type': 'Question',
                name: 'How often should I revisit my productivity and wellness plans?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Weekly for tactical planning, monthly for mid-course corrections, quarterly for strategic planning, and annually for major life reviews. Your circumstances and priorities change; your plans should evolve with them.'
                }
              },
              {
                '@type': 'Question',
                name: 'What if I disagree with the AI recommendations?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Trust your instincts. The AI doesn\'t know your full context or intuition. Use the prompts to clarify your thinking, not to outsource your judgment. If a recommendation doesn\'t feel right, ask the AI why and explore the reasoning.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I use these prompts with a team, or are they just for individual use?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Both. Use them individually to prepare, then bring the structured output to team discussions. You can also share prompts with team members to help them prepare for collaboration with you.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do I balance structure with flexibility and spontaneity?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use these prompts to establish your baseline and guardrails: your non-negotiables, key priorities, and boundaries. Then stay flexible within those boundaries. The structure creates space for spontaneity by reducing decision fatigue.'
                }
              },
              {
                '@type': 'Question',
                name: 'Where should I start if I\'m new to using AI as a personal assistant?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Start with the Weekly Review Assistant prompt to understand your current baseline. Then try the Daily Task Prioritizer for 2-3 weeks to experience the impact on your daily productivity. Build gradually rather than trying all prompts at once.'
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
