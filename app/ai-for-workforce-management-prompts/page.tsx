"use client"

import { useState } from "react"
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#0EA5E9] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0096d1] text-white font-medium py-2 px-4 rounded transition-colors">
        {copied ? (<><Check className="w-4 h-4" />Copied</>) : (<><Copy className="w-4 h-4" />Copy Prompt</>)}
      </button>
    </div>
  )
}

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-lg">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 hover:bg-[#1a1a1a] transition-colors text-left">
        <span className="font-medium text-white">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
      </button>
      {open && <div className="border-t border-[#2a2a2a] p-4 bg-[#0f0f0f] text-gray-300 leading-relaxed">{a}</div>}
    </div>
  )
}

export default function Page() {
  const relatedPages = [
    { title: 'ChatGPT Prompts', href: '/chatgpt-prompts', color: '#10A37F' },
    { title: 'Claude Prompts', href: '/claude-prompts', color: '#D97706' },
    { title: 'AI for Small Business', href: '/ai-prompts-small-business', color: '#8B5CF6' },
    { title: 'AI for Consultants', href: '/ai-prompts-for-consultants', color: '#10B981' },
    { title: 'AI for Journalists', href: '/ai-prompts-for-journalists', color: '#EF4444' },
    { title: 'AI Meeting Notes', href: '/ai-prompts-meeting-notes', color: '#6366F1' },
    { title: 'AI for Writers', href: '/ai-prompts-for-writers', color: '#EC4899' },
    { title: 'AI for Data Analysts', href: '/ai-prompts-for-data-analysts', color: '#F59E0B' },
  ]

  const prompts = [
    {
      section: "Recruitment & Hiring",
      items: [
        { title: "Job Description Generator", prompt: "You are an expert HR professional. Create a detailed, engaging job description for a [ROLE] position at a [COMPANY TYPE] company. Include responsibilities, required skills, preferred qualifications, and benefits. Make it compelling to attract top talent." },
        { title: "Interview Question Creator", prompt: "Generate 10 behavioral and technical interview questions for a [ROLE] position. For each question, provide the competency being assessed and what qualities you&apos;re looking for in the answer." },
        { title: "Candidate Evaluation Framework", prompt: "Create an evaluation rubric for assessing [ROLE] candidates. Include 5-7 key competencies, scoring criteria (1-5), and behavioral indicators for each score level." },
        { title: "Onboarding Plan Creator", prompt: "Design a comprehensive 30-60-90 day onboarding plan for a new [ROLE] hire. Include learning objectives, key tasks, stakeholder meetings, and success metrics for each phase." },
        { title: "Skills Assessment Tool", prompt: "Create a practical skills assessment for evaluating [SKILL] proficiency. Include 5-7 scenarios or questions that test both theoretical knowledge and practical application." },
        { title: "Retention Strategy Planner", prompt: "Develop a personalized retention strategy for high-potential employees in [DEPARTMENT]. Include career development paths, engagement initiatives, and compensation considerations." }
      ]
    },
    {
      section: "Performance Management",
      items: [
        { title: "Performance Review Template", prompt: "Create a structured performance review template for [ROLE] that covers goal achievement, competency development, strengths, areas for growth, and development priorities." },
        { title: "Goal Setting Framework", prompt: "Design a SMART goal-setting framework for [DEPARTMENT] employees. Include examples of well-defined goals, success metrics, and how to align individual goals with company objectives." },
        { title: "360 Feedback Questionnaire", prompt: "Create a comprehensive 360-degree feedback questionnaire for evaluating [ROLE] performance. Include questions assessing leadership, collaboration, communication, and technical competence." },
        { title: "Performance Improvement Plan", prompt: "Generate a structured Performance Improvement Plan (PIP) template for addressing [PERFORMANCE ISSUE]. Include clear expectations, support mechanisms, timeline, and success criteria." },
        { title: "Competency Assessment", prompt: "Create a competency assessment framework for [ROLE]. Define 6-8 core competencies with proficiency levels (beginner to expert) and behavioral examples for each." },
        { title: "Feedback Delivery Guide", prompt: "Write a guide for managers on delivering constructive feedback about [PERFORMANCE AREA]. Include communication tips, handling defensive reactions, and follow-up strategies." }
      ]
    },
    {
      section: "Training & Development",
      items: [
        { title: "Learning Path Designer", prompt: "Create a structured learning path for developing [SKILL] in [ROLE] professionals. Include resources, timelines, milestones, and assessment methods." },
        { title: "Training Needs Assessment", prompt: "Develop a training needs assessment template for [DEPARTMENT]. Include questions to identify skill gaps, learning preferences, and priority development areas." },
        { title: "Knowledge Transfer Plan", prompt: "Design a knowledge transfer plan for [CRITICAL ROLE/PROCESS]. Include documentation requirements, mentoring schedule, and competency validation steps." },
        { title: "Mentorship Program Framework", prompt: "Create a mentorship program framework for developing [ROLE] talent. Include mentor selection criteria, relationship structure, meeting cadence, and success metrics." },
        { title: "Leadership Development Curriculum", prompt: "Design a comprehensive leadership development curriculum for high-potential [LEVEL] employees. Include modules, delivery methods, and executive coaching components." },
        { title: "Compliance Training Creator", prompt: "Develop an engaging compliance training module for [COMPLIANCE TOPIC]. Include key concepts, real-world scenarios, interactive elements, and assessment questions." }
      ]
    },
    {
      section: "Engagement & Culture",
      items: [
        { title: "Employee Engagement Survey", prompt: "Create a comprehensive employee engagement survey with 20-25 questions covering satisfaction, culture, management, career growth, and workplace environment." },
        { title: "Workplace Culture Audit", prompt: "Design a workplace culture assessment tool to evaluate [SPECIFIC CULTURE ASPECT]. Include diagnostic questions, analysis framework, and improvement recommendations." },
        { title: "Recognition Program Designer", prompt: "Create an employee recognition program framework that celebrates achievements in [DEPARTMENT]. Include recognition categories, frequency, and implementation guidelines." },
        { title: "Team Building Activity Guide", prompt: "Design 5-7 engaging team-building activities for a [TEAM SIZE] person team focused on [TEAM GOAL/CHALLENGE]. Include objectives, instructions, and debrief questions." },
        { title: "Exit Interview Template", prompt: "Create a structured exit interview questionnaire to understand why employees leave [COMPANY]. Include questions about experience, management, culture, and improvement suggestions." },
        { title: "Diversity & Inclusion Assessment", prompt: "Develop a D&I assessment framework for [ORGANIZATION/DEPARTMENT]. Include evaluation criteria, metrics, and recommendations for building inclusive culture." }
      ]
    },
    {
      section: "Workforce Planning",
      items: [
        { title: "Succession Planning Framework", prompt: "Create a succession planning template for critical [ROLE/DEPARTMENT] positions. Include talent assessment, development plans, and transition procedures." },
        { title: "Organizational Design Tool", prompt: "Design a framework for evaluating organizational structure effectiveness in [DEPARTMENT]. Include assessment criteria and recommendations for optimization." },
        { title: "Headcount Forecasting Model", prompt: "Develop a headcount forecasting model for [DEPARTMENT] for the next [TIMEFRAME]. Include growth assumptions, role requirements, and budget implications." },
        { title: "Skills Inventory Manager", prompt: "Create a skills inventory assessment for [DEPARTMENT] to map current capabilities against future needs. Include skill categories, proficiency levels, and gap analysis." },
        { title: "Workforce Analytics Dashboard", prompt: "Design a workforce analytics dashboard for [COMPANY/DEPARTMENT]. Include key metrics, visualizations, and how to use insights for decision-making." },
        { title: "Talent Pipeline Builder", prompt: "Develop a talent pipeline strategy for [ROLE/DEPARTMENT]. Include sourcing channels, candidate nurturing, and conversion metrics." }
      ]
    }
  ]

  const faqs = [
    { q: "How can I use these prompts to improve recruitment?", a: "Use the job description and interview question prompts to create more effective job postings and standardized interview processes. Customize them with your specific role requirements and company culture." },
    { q: "What&apos;s the best way to implement a performance management system?", a: "Start with clear goal-setting frameworks, regular feedback mechanisms, and documented performance reviews. Use the templates provided to ensure consistency and fairness across your organization." },
    { q: "How do I measure the effectiveness of training programs?", a: "Track competency improvements before and after training, measure knowledge retention through assessments, monitor on-the-job application, and gather participant feedback on relevance and quality." },
    { q: "What should I include in an onboarding program?", a: "Cover company culture and values, role-specific training, key stakeholder introductions, system access and tools, clear expectations, and regular check-ins during the first 90 days." },
    { q: "How can I improve employee engagement?", a: "Conduct regular engagement surveys to understand current sentiment, create recognition programs for achievements, foster open communication, provide growth opportunities, and address feedback promptly." },
    { q: "What are effective strategies for retention?", a: "Develop clear career paths, offer competitive compensation, provide skill development opportunities, ensure good manager-employee relationships, recognize contributions, and create a positive workplace culture." },
    { q: "How should I handle underperforming employees?", a: "Have clear expectations upfront, provide regular feedback, offer support and resources, use performance improvement plans when necessary, and document conversations for accountability." },
    { q: "What makes a good mentorship program?", a: "Clear program objectives, careful mentor-mentee matching based on goals and styles, structured meeting agendas, defined success metrics, and organizational support and resources." },
    { q: "How do I assess organizational culture effectively?", a: "Use surveys, focus groups, exit interviews, and observation of behaviors and interactions. Look at metrics like retention, engagement, and psychological safety indicators." },
    { q: "What are key metrics to track in workforce planning?", a: "Monitor headcount growth, turnover rates, time-to-fill, skills gaps, succession readiness, employee development progress, and alignment between staffing plans and business goals." }
  ]

  const schema = {
    "@context": "https://schema.org",
    "@type": ["Article", "FAQPage"],
    headline: "AI Prompts for Workforce Management",
    description: "Comprehensive collection of AI prompts for recruitment, performance management, training, engagement, and workforce planning.",
    datePublished: "2026-03-29",
    dateModified: "2026-03-29",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-[#0EA5E9]">AI Prompts for Workforce Management</h1>
          <p className="text-xl text-gray-300 mb-6">
            Unlock the power of AI to transform recruitment, performance management, training, and employee engagement. Our curated prompts help you build a more effective and engaged workforce.
          </p>
        </div>

        {prompts.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#0EA5E9] border-b border-[#2a2a2a] pb-4">{section.section}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, itemIdx) => (
                <CopyCard key={itemIdx} title={item.title} prompt={item.prompt} />
              ))}
            </div>
          </div>
        ))}

        <div className="my-16 border-t border-[#2a2a2a] pt-16">
          <h2 className="text-3xl font-bold mb-8 text-[#0EA5E9]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>

        <div className="my-16 border-t border-[#2a2a2a] pt-16">
          <h2 className="text-3xl font-bold mb-8 text-[#0EA5E9]">Related Pages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedPages.map((page, idx) => (
              <Link key={idx} href={page.href} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-[#0EA5E9] transition-colors text-center">
                <span className="font-medium text-white hover:text-[#0EA5E9] transition-colors">{page.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
