'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ChevronDown,
  Copy,
  Check,
  Sparkles,
  Users,
  Zap,
  FileText,
  MessageSquare,
  Target,
  BarChart3,
  Lightbulb,
} from 'lucide-react';

interface CopyCardProps {
  title: string;
  prompt: string;
}

function CopyCard({ title, prompt }: CopyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#059669]/50 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-lg font-semibold text-white leading-tight">{title}</h3>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 p-2 hover:bg-[#059669]/10 rounded-lg transition-colors"
          title="Copy prompt"
        >
          {copied ? (
            <Check className="w-5 h-5 text-[#059669]" />
          ) : (
            <Copy className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{prompt}</p>
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
    <div className="border border-[#333] rounded-lg overflow-hidden hover:border-[#059669]/30 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#1a1a1a] transition-colors text-left"
      >
        <h3 className="font-semibold text-white text-base">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-[#1a1a1a] border-t border-[#333]">
          <p className="text-gray-300 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function AIPromptsHRRecruiting() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for HR & Recruiting: Hire Smarter, Faster',
            description:
              'Collection of AI prompts designed specifically for HR professionals and recruiters. Streamline job descriptions, candidate screening, interviews, and employee engagement with AI.',
            image: 'https://gptprompts.ai/og-hr-recruiting.jpg',
            datePublished: '2024-01-15',
            dateModified: '2024-03-28',
            author: {
              '@type': 'Organization',
              name: 'GPTPrompts.AI',
            },
          }),
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
                name: 'What AI tools can help with job description writing?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tools like ChatGPT, Claude, and Gemini excel at generating comprehensive job descriptions. They can help create clear role summaries, responsibilities, qualifications, and even competitive analysis of similar roles.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can AI assist in candidate screening?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can help analyze resumes, generate screening criteria, create initial assessment questions, and even score candidate profiles against job requirements. This saves hours of manual review.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI help prepare for interviews?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. AI can generate relevant interview questions, help prepare for behavioral scenarios, create scoring rubrics, suggest follow-up questions, and even help analyze candidate responses.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I use AI for employee engagement?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can help draft company policies, create onboarding materials, generate communication templates, suggest engagement initiatives, and develop training content.',
                },
              },
              {
                '@type': 'Question',
                name: 'What makes a good HR prompt?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Effective HR prompts include context (company size, industry, role level), specific requirements, desired tone and format, and any compliance or legal considerations.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI detect bias in job descriptions?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Many AI tools can review job descriptions for gendered language, age bias, or exclusionary terms, helping HR teams create more inclusive postings.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can AI improve the candidate experience?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can personalize communication, provide timely feedback, automate scheduling, answer candidate questions, and ensure consistent, professional interactions throughout the hiring process.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are the legal considerations for using AI in hiring?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'HR teams should ensure AI tools are transparent, fair, and compliant with employment laws. Use AI to augment human decision-making, not replace it. Document decisions and maintain human oversight.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI help with remote onboarding?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. AI can create comprehensive remote onboarding guides, virtual meeting agendas, training schedules, policy summaries, and welcome communications.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I measure the impact of AI-assisted hiring?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Track metrics like time-to-hire, cost-per-hire, offer acceptance rate, new hire retention, performance ratings, and hiring manager satisfaction to measure AI effectiveness.',
                },
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-[#0a0a0a]">
        {/* Hero Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#059669]/10 border border-[#059669]/30 rounded-full mb-6 sm:mb-8">
              <Sparkles className="w-4 h-4 text-[#059669]" />
              <span className="text-sm font-medium text-[#059669]">
                AI Prompts for HR Professionals
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              AI Prompts for HR & Recruiting:
              <span className="text-[#059669]"> Hire Smarter, Faster</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
              Streamline your entire hiring process—from job descriptions to candidate engagement—with AI-powered
              prompts designed for HR professionals and recruiters. Speed up screening, improve interviews, and build
              better teams with the right tools and techniques.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#059669] mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-400">HR Prompts</div>
              </div>
              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#059669] mb-1">10x</div>
                <div className="text-xs sm:text-sm text-gray-400">Faster Hiring</div>
              </div>
              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#059669] mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-400">Availability</div>
              </div>
              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#059669] mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-400">Free to Use</div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Description Writing Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#333]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-6 h-6 text-[#059669]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Job Description Writing</h2>
            </div>

            <div className="grid gap-6">
              <CopyCard
                title="Comprehensive Job Description Generator"
                prompt="Write a detailed job description for a [JOB_TITLE] position at a [COMPANY_TYPE] company. Include: 1) Clear role summary and reporting structure, 2) Key responsibilities (8-10 specific duties), 3) Required qualifications (education, years of experience, hard skills), 4) Preferred qualifications, 5) Salary range context for [INDUSTRY] and [LOCATION], 6) Company culture highlights, 7) Benefits and perks. Use inclusive language and ensure the description attracts diverse candidates. Format for [JOB_BOARD]."
              />
              <CopyCard
                title="Inclusive Language & Bias Check"
                prompt="Review this job description for potential bias and exclusionary language: [PASTE_JD]. Identify: 1) Gendered language or masculine-coded words, 2) Age-related bias, 3) Jargon that may exclude underrepresented groups, 4) Unrealistic requirement combinations. Suggest alternatives for each issue. Rewrite the description to be more inclusive while maintaining all key requirements."
              />
              <CopyCard
                title="Job Description Competitive Analysis"
                prompt="Analyze competitor job descriptions for [JOB_TITLE] in [INDUSTRY]. Compare: 1) Typical salary ranges and benefits, 2) Common required vs. preferred skills, 3) Unique differentiators each company emphasizes, 4) Company size and growth stage impact on role scope. Suggest how our JD should position this role to attract top talent while remaining realistic about [COMPANY_NAME] stage."
              />
              <CopyCard
                title="Remote/Hybrid Work Position JD Template"
                prompt="Create a job description for a [JOB_TITLE] role with [REMOTE/HYBRID] arrangement at [COMPANY_NAME]. Include: 1) Clear expectations for work location and meeting requirements, 2) Time zone flexibility or requirements, 3) Equipment and setup provisions, 4) Communication and collaboration tools used, 5) Company culture for distributed teams, 6) Specific remote-friendly responsibilities. Ensure clarity on expectations and avoid hidden remote work friction points."
              />
            </div>
          </div>
        </div>

        {/* Candidate Screening Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#333]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-[#059669]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Candidate Screening</h2>
            </div>

            <div className="grid gap-6">
              <CopyCard
                title="Resume Screening Criteria & Scoring"
                prompt="Create a resume screening rubric for [JOB_TITLE] at [COMPANY_NAME]. Define: 1) Must-have qualifications (deal-breakers if absent), 2) Nice-to-have qualifications, 3) Red flags that warrant rejection, 4) Scoring system (point values for each criterion), 5) Guidelines for evaluating career gaps, job transitions, or non-traditional backgrounds. Weight criteria by importance. Format as a scoring template with examples."
              />
              <CopyCard
                title="Initial Candidate Assessment Questions"
                prompt="Generate 8-10 screening questions for [JOB_TITLE] candidates to assess: 1) Experience level in [KEY_SKILL], 2) Motivation and career goals alignment, 3) Problem-solving approach, 4) [COMPANY_VALUES] fit, 5) Ability to work in [TEAM_ENVIRONMENT]. Each question should be concise, fair, and answerable in a brief written response or quick call. Include what a strong answer looks like."
              />
              <CopyCard
                title="Resume Analysis & Red Flag Detection"
                prompt="Analyze the following resume: [PASTE_RESUME]. Identify: 1) Relevant experience and skills match for [JOB_TITLE], 2) Career progression and growth trajectory, 3) Potential red flags (unexplained gaps, frequent job changes, misaligned experience), 4) Strengths to probe in an interview, 5) Fit risk assessment for [COMPANY_NAME] culture. Recommend: screen in, screen out, or phone screen conversation focus."
              />
              <CopyCard
                title="Candidate Pool Diversity & Inclusion Check"
                prompt="We have [NUMBER] candidates for [JOB_TITLE]. Analyze: 1) Representation across gender, race, age, background, 2) Experience diversity (career switchers, underrepresented groups), 3) Potential bias in our screening process (did we unfairly eliminate promising candidates?), 4) Candidates who bring fresh perspectives. Recommend which candidates to interview to build a more diverse final panel, even if they're non-traditional fits."
              />
            </div>
          </div>
        </div>

        {/* Interview Preparation Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#333]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-6 h-6 text-[#059669]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Interview Preparation</h2>
            </div>

            <div className="grid gap-6">
              <CopyCard
                title="Behavioral Interview Question Generator"
                prompt="Create 10 STAR-formatted behavioral interview questions for [JOB_TITLE] to assess: 1) Leadership and teamwork, 2) Problem-solving and decision-making, 3) Handling conflict or failure, 4) Learning agility, 5) [COMPANY_VALUES] alignment. For each question, provide: the question, what you're assessing, and examples of strong vs. weak answers. Include follow-up probes."
              />
              <CopyCard
                title="Technical Interview Scenarios & Rubric"
                prompt="Design a technical interview scenario for [JOB_TITLE]. Create: 1) A realistic [DOMAIN] problem or case study, 2) Specific evaluation criteria (technical skills, approach, communication), 3) Scoring rubric (exceeds/meets/below expectations), 4) Expected time to complete, 5) Follow-up questions based on answers, 6) What solutions you're looking for. Include tips for assessing both their solution and their problem-solving process."
              />
              <CopyCard
                title="Interview Panel Preparation & Calibration"
                prompt="We're interviewing [JOB_TITLE] candidates with [NUMBER] panelists. Create: 1) Clear role assignments (who assesses what competency), 2) Consistent interview flow and timing, 3) Unified scoring rubric to reduce individual bias, 4) Guidelines for evaluating candidates fairly across different interview styles, 5) Debrief structure for comparing notes. Ensure all panelists assess the same core criteria."
              />
              <CopyCard
                title="Candidate Experience & Reference Check Framework"
                prompt="Create a reference check framework for [JOB_TITLE]. Develop: 1) Questions for past managers (strengths, weaknesses, performance), 2) Questions for peers (collaboration, communication), 3) Red flags to listen for, 4) How to verify job titles and tenure, 5) Template to document reference feedback. Include what's legal to ask and how to interpret responses without bias."
              />
            </div>
          </div>
        </div>

        {/* Employee Engagement & Policy Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#333]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="w-6 h-6 text-[#059669]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Employee Engagement & Policy</h2>
            </div>

            <div className="grid gap-6">
              <CopyCard
                title="Comprehensive Onboarding Program Design"
                prompt="Create a 30-60-90 day onboarding plan for new [JOB_TITLE] hires at [COMPANY_NAME]. Include: 1) Week 1 priorities (paperwork, systems access, team introductions), 2) Week 2-4 milestones (training modules, buddy pairing, first projects), 3) Month 2 goals (independence metrics, feedback check-in), 4) Month 3 evaluation (productivity targets, culture fit assessment). Add templates for each milestone and success metrics."
              />
              <CopyCard
                title="Employee Engagement & Retention Strategy"
                prompt="Design an employee engagement strategy to improve retention for [COMPANY_NAME]. Analyze: 1) Common reasons people leave (use [INDUSTRY] data), 2) Engagement touchpoints (career development, manager relationship, culture), 3) Specific initiatives (mentorship, growth opportunities, flexibility), 4) Measurement and feedback loops. Tailor to [COMPANY_STAGE] and [TEAM_SIZE] constraints. Include quick wins and long-term investments."
              />
              <CopyCard
                title="Company Policy & Handbook Content Generator"
                prompt="Draft company policies for [COMPANY_NAME]: 1) [POLICY_TOPIC] (e.g., remote work, flexible hours, time off), 2) Clear expectations and procedures, 3) Edge cases and exceptions, 4) Compliance considerations for [STATE/COUNTRY], 5) Manager guidance on enforcing fairly. Make policies clear, inclusive, and legally defensible. Include examples of how to apply the policy consistently."
              />
              <CopyCard
                title="Manager 1-on-1 Framework & Talking Points"
                prompt="Create a manager 1-on-1 framework for [COMPANY_NAME]. Include: 1) Meeting cadence and duration recommendations, 2) Recurring 1-on-1 agenda template (performance, growth, feedback, listening), 3) Red flags to listen for (disengagement, burnout, retention risk), 4) Conversation starters for different scenarios, 5) Documentation and follow-up templates. Help managers have meaningful, consistent conversations with direct reports."
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#333]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <FAQItem
                question="What AI tools can help with job description writing?"
                answer="Tools like ChatGPT, Claude, and Gemini excel at generating comprehensive job descriptions. They can help create clear role summaries, responsibilities, qualifications, and even competitive analysis of similar roles. Start with a well-structured prompt that includes your company type, role level, industry, and location for best results."
              />
              <FAQItem
                question="How can AI assist in candidate screening?"
                answer="AI can analyze resumes, generate screening criteria, create initial assessment questions, and score candidate profiles against job requirements. This saves hours of manual review. However, always maintain human oversight to catch nuance and avoid algorithmic bias that could unfairly eliminate promising candidates."
              />
              <FAQItem
                question="Can AI help prepare for interviews?"
                answer="Yes. AI can generate relevant behavioral and technical interview questions, help prepare for realistic scenarios, create consistent scoring rubrics, suggest follow-up questions, and even help analyze candidate responses. Use AI to standardize your interview process and reduce bias in evaluation."
              />
              <FAQItem
                question="How can AI help with employee engagement and retention?"
                answer="AI can help design comprehensive onboarding programs, suggest engagement initiatives, draft company policies, create manager 1-on-1 frameworks, and identify retention risks. Use these prompts to build scalable HR processes that help employees feel valued and supported."
              />
              <FAQItem
                question="What makes a good HR prompt?"
                answer="Effective HR prompts include context (company size, industry, role level, location), specific requirements, desired tone and format, and any compliance or legal considerations. The more details you provide, the more tailored and useful the AI response will be."
              />
              <FAQItem
                question="Can AI detect bias in job descriptions and hiring?"
                answer="Yes. Many AI tools can review job descriptions for gendered language, age bias, jargon, and other exclusionary elements. They can also help analyze your candidate pool for diversity. However, AI itself can perpetuate bias, so always maintain human judgment as the final decision-maker."
              />
              <FAQItem
                question="How can AI improve the candidate experience?"
                answer="AI can personalize communication, provide timely feedback, automate scheduling, answer common questions, and ensure consistent professional interactions throughout the hiring process. This improves candidate perception of your company and increases offer acceptance rates."
              />
              <FAQItem
                question="What legal considerations should I keep in mind?"
                answer="HR teams should ensure AI tools are transparent and compliant with employment laws (EEOC, GDPR, etc.). Use AI to augment human decision-making, not replace it. Document hiring decisions and maintain human oversight. Avoid using AI to make final hiring decisions without human review."
              />
              <FAQItem
                question="Can AI help with remote onboarding?"
                answer="Absolutely. AI can create comprehensive remote onboarding guides, virtual meeting agendas, training schedules, policy summaries, and welcome communications. It's especially helpful for distributed teams to ensure consistent, high-quality experiences across time zones and locations."
              />
              <FAQItem
                question="How do I measure the impact of AI-assisted HR?"
                answer="Track metrics like time-to-hire, cost-per-hire, offer acceptance rate, new hire retention after 6 and 12 months, performance ratings of AI-screened hires, hiring manager satisfaction, and manager feedback on HR tools. Measure both efficiency gains and quality-of-hire improvements."
              />
            </div>
          </div>
        </div>

        {/* Related Pages Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#333]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Related AI Prompt Collections</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { href: '/resume-prompts', label: 'Resume & Cover Letter Prompts' },
                { href: '/cover-letter-prompts', label: 'Cover Letter Templates' },
                {
                  href: '/chatgpt-business-productivity',
                  label: 'Business Productivity Prompts',
                },
                { href: '/perfect-resume-ai', label: 'Perfect Resume AI' },
                { href: '/chatgpt-prompts', label: 'ChatGPT Prompts' },
                { href: '/claude-prompts', label: 'Claude Prompts' },
                { href: '/ai-writing-prompts', label: 'AI Writing Prompts' },
                { href: '/careers', label: 'Careers & Job Search' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#059669]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium group-hover:text-[#059669] transition-colors">
                      {link.label}
                    </span>
                    <Lightbulb className="w-5 h-5 text-gray-400 group-hover:text-[#059669] transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 border-t border-[#333]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 text-sm mb-4">
              All prompts are free to use and modify for your organization. Share feedback or suggest improvements
              anytime.
            </p>
            <p className="text-gray-500 text-xs">
              Last updated: March 28, 2024 | © 2024 GPTPrompts.AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
