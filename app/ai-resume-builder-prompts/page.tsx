'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const CopyCard = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#F59E0B] transition-colors">
      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-[#F59E0B] hover:text-[#FBBF24] transition-colors text-sm font-medium"
      >
        {copied ? (
          <>
            <Check size={16} />
            <span>Copied</span>
          </>
        ) : (
          <>
            <Copy size={16} />
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#333] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 bg-[#1a1a1a] hover:bg-[#222] transition-colors text-left"
      >
        <span className="text-gray-100 font-medium">{question}</span>
        {open ? (
          <ChevronUp size={20} className="text-[#F59E0B]" />
        ) : (
          <ChevronDown size={20} className="text-gray-500" />
        )}
      </button>
      {open && (
        <div className="bg-[#0f0f0f] p-4 border-t border-[#333]">
          <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function ResumeBuilderPromptsPage() {
  const resumePrompts = [
    "Create a professional executive summary for a resume that highlights 15 years of experience in project management, with focus on leading cross-functional teams and delivering projects 20% under budget. Include measurable outcomes and leadership impact.",
    "Write a compelling cover letter for a senior marketing manager position at a tech startup. Emphasize experience scaling digital campaigns, growing email lists by 300%, and knowledge of growth marketing frameworks like AARRR and pirate metrics.",
    "Develop a tailored resume for a UX/UI designer transitioning from agency work to in-house at a fintech company. Highlight design system creation, usability testing methodologies, and experience with accessibility compliance (WCAG 2.1).",
    "Create a skills section for a data scientist resume that prioritizes Python, SQL, machine learning, statistical analysis, and cloud platforms. Order by relevance to a role in healthcare AI and include proficiency levels.",
    "Write a professional summary for a resume that showcases 8 years of HR management experience, including talent acquisition, compensation strategy, and organizational development. Target a Head of People role at a Series B startup.",
    "Generate a detailed accomplishments section for a sales professional who grew their territory from £500k to £2.5M annual revenue over 5 years. Focus on consultative selling, relationship building, and negotiation outcomes."
  ];

  const careerDocumentsPrompts = [
    "Draft a compelling LinkedIn headline for a product manager with experience at both FAANG companies and startups. Include keywords for personal branding and highlight career transition to AI/ML product space.",
    "Create a professional biography (300 words) for a thought leader in digital transformation, suitable for speaking engagements, conference websites, and LinkedIn. Include credentials, key achievements, and areas of expertise.",
    "Write an elevator pitch for a career changer moving from finance to product management. Emphasize transferable skills in data analysis, stakeholder management, and business strategy that apply to product roles.",
    "Generate a portfolio introduction statement for a UX designer's portfolio website. Explain design philosophy, approach to problem-solving, and highlight specific projects that demonstrate impact on business metrics and user satisfaction.",
    "Develop a personal mission statement for a personal brand or career portfolio that reflects values of innovation, mentorship, and ethical leadership. Make it authentic, memorable, and relevant across industries.",
    "Create a professional testimonial request template for professionals to send to former managers and colleagues. Provide guidance on what to ask for and how to position the testimonials on LinkedIn or portfolio."
  ];

  const jobSearchStrategyPrompts = [
    "Analyze my resume and identify 5 key gaps that might prevent me from landing interviews for senior manager roles. Suggest specific experiences, skills, or accomplishments I should highlight or develop.",
    "Create a 90-day job search action plan for someone transitioning from corporate to consulting. Include networking strategies, resume optimization checkpoints, interview preparation milestones, and monthly targets for applications and conversations.",
    "Write a personalized outreach message template for reaching out to recruiters in the SaaS industry. Include how to position my background, what value I bring, and a clear call to action that gets responses.",
    "Generate interview talking points based on my current resume for a role as Head of Growth at a Series A startup. Connect past achievements to future-focused outcomes and demonstrate understanding of startup metrics (CAC, LTV, NRR).",
    "Develop a salary negotiation script for discussing compensation during a job offer conversation. Include tactics for researching market rates, anchoring appropriately, and negotiating non-salary benefits like equity, flexibility, and professional development.",
    "Create a career transition narrative that positions my 10 years in operations management as directly relevant to a product manager role. Highlight process optimization, cross-functional leadership, and data-driven decision-making."
  ];

  const interviewPreparationPrompts = [
    "Prepare detailed STAR method responses to 5 common behavioral interview questions: Tell me about a time you failed, managed conflict, overcame a challenge, improved a process, and led a team. Use examples from my actual experience.",
    "Develop thoughtful questions to ask hiring managers during an interview that demonstrate knowledge of the company, understanding of the role, and strategic thinking. Include questions about team dynamics, company culture, and growth challenges.",
    "Create a 2-minute pitch about myself for a product manager interview. Include my background, why I'm interested in the role, key accomplishments that prove capability, and what I'm looking for in my next opportunity.",
    "Generate case study interview responses for a strategy consultant role. Include framework for tackling ambiguous problems, breaking down market sizing questions, and demonstrating analytical and creative thinking.",
    "Write interview preparation notes covering the company's business model, recent news, competitive landscape, and strategic priorities. Develop 3-5 thoughtful observations I could bring up to demonstrate genuine interest and business acumen.",
    "Develop responses to common difficult interview questions about gaps in employment, frequent job changes, or reasons for leaving previous roles. Frame narrative positively while being honest and demonstrating growth."
  ];

  const careerAcceleratorPrompts = [
    "Create a personal development plan for the next 2 years that outlines specific skills to develop, certifications to pursue, and projects to undertake to advance toward a director-level role. Include quarterly milestones and success metrics.",
    "Design a thought leadership content calendar that positions me as an expert in my field. Suggest 12 monthly topics, content formats (blog, LinkedIn posts, podcast appearances), and distribution strategy.",
    "Develop a mentorship framework for seeking and leveraging mentors at different stages of my career. Include what to ask for, how to provide value in return, and how to evolve mentorship relationships as I progress.",
    "Create a skills audit comparing my current capabilities to requirements for my target role 3 years from now. Identify priority skills to develop, learning resources, and practical experience needed to make the leap.",
    "Write a professional networking strategy that includes identifying key industry contacts, ways to provide value, follow-up cadence, and how to leverage relationships for career opportunities without being transactional.",
    "Generate a career progression roadmap from my current role to C-level leadership. Include typical titles, responsibilities, skills required at each level, and timeline expectations in my industry."
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Resume Builder AI Prompts: Career Documents and Interview Preparation',
            description: 'Comprehensive collection of AI prompts for creating resumes, cover letters, LinkedIn profiles, career documents, job search strategies, interview preparation, and career acceleration.',
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
                name: 'How can I use AI to improve my resume?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can help you refine your resume by analyzing job descriptions to highlight relevant keywords, rewriting achievements using strong action verbs, quantifying results with metrics, tailoring content to specific roles, and ensuring clarity and impact. Use prompts to transform your experiences into compelling, achievement-focused language that resonates with both hiring managers and applicant tracking systems (ATS).'
                }
              },
              {
                '@type': 'Question',
                name: 'What is the STAR method and how do I use it in interviews?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The STAR method (Situation, Task, Action, Result) is a structured way to answer behavioral interview questions. First describe the Situation and Task you faced, explain the specific Actions you took to address it, and finish by highlighting the Results achieved (with metrics when possible). This demonstrates capability through concrete examples rather than abstract claims.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do I tailor my resume for different job types?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Tailor your resume by analyzing each job description for key skills, keywords, and responsibilities, then reorder and reword your experience to emphasize relevant accomplishments. Adjust your summary and skills section to mirror the language used in the posting. Use AI to identify which of your achievements most directly address the role requirements and lead with those.'
                }
              },
              {
                '@type': 'Question',
                name: 'How should I negotiate salary during a job offer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Before negotiation, research market rates using tools like Glassdoor, Levels.fyi, and Blind. During discussion, anchor high but reasonably (15-20% above their initial offer), focus on your value and market data rather than personal needs, stay silent after making your counter-proposal to let them respond, and be prepared to negotiate non-salary benefits like equity, flexibility, professional development, and titles if cash compensation has limits.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do I explain employment gaps or frequent job changes?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Frame gaps positively by discussing what you learned, whether you developed new skills, took time for personal growth, or recovered from challenges. For frequent moves, explain your career trajectory narrative rather than job-hopping, focusing on the progression, strategic decisions, and learning at each stage. Employers value honesty paired with demonstrated growth from each experience.'
                }
              },
              {
                '@type': 'Question',
                name: 'What questions should I ask during interviews?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ask questions that demonstrate your research and strategic thinking: inquire about team dynamics, the biggest challenge the team faces, company strategy for the next year, how success is measured in the role, and what the previous person in the role did well. Avoid questions you could answer with 5 minutes of research, and focus on learning about fit and opportunity for impact.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do I position myself as a thought leader in my industry?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Create and share valuable content regularly through LinkedIn posts, blog articles, podcast appearances, or conference speaking. Focus on sharing learnings from your experience, frameworks you have developed, perspectives on industry trends, and insights that help others solve real problems. Consistency, authenticity, and genuine value matter more than frequency.'
                }
              },
              {
                '@type': 'Question',
                name: 'How can I use mentorship to accelerate my career?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Seek mentors who have achieved what you aspire to, provide specific asks rather than vague requests for advice, show up prepared for meetings, implement their guidance and report back, and always provide value in return (whether insights, connections, or recognition). Mentorship relationships evolve; as you progress, you may shift from mentee to mentor.'
                }
              },
              {
                '@type': 'Question',
                name: 'What skills should I prioritize developing for my next role?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Identify the skills required in your target role and compare them to your current capabilities. Prioritize technical skills required for core job functions, soft skills that differentiate you (communication, leadership, strategic thinking), and domain knowledge specific to your industry. Create a learning plan with concrete milestones, resources, and opportunities to apply skills in real projects.'
                }
              },
              {
                '@type': 'Question',
                name: 'How should I build my professional network strategically?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Identify key people in your industry and decision-makers at target companies, find genuine ways to provide value to them (through connections, insights, or help), follow up consistently but not aggressively, and nurture relationships before you need something. Effective networking is about building genuine relationships and mutual benefit, not transactional asking.'
                }
              }
            ]
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white">Resume Builder AI Prompts</h1>
          <p className="text-xl text-gray-400 mb-6">
            Comprehensive AI prompts for crafting winning resumes, cover letters, career documents, and mastering interview preparation. Build a compelling professional narrative and accelerate your career with AI-powered guidance.
          </p>
          <div className="inline-block px-4 py-2 bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-lg">
            <span className="text-[#F59E0B] font-semibold">30+ Detailed Prompts</span>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#F59E0B]">Resume and Cover Letter Writing</h2>
            <div className="grid grid-cols-1 gap-4">
              {resumePrompts.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#F59E0B]">Career Documents and LinkedIn Optimization</h2>
            <div className="grid grid-cols-1 gap-4">
              {careerDocumentsPrompts.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#F59E0B]">Job Search Strategy and Networking</h2>
            <div className="grid grid-cols-1 gap-4">
              {jobSearchStrategyPrompts.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#F59E0B]">Interview Preparation and Communication</h2>
            <div className="grid grid-cols-1 gap-4">
              {interviewPreparationPrompts.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#F59E0B]">Career Acceleration and Leadership Development</h2>
            <div className="grid grid-cols-1 gap-4">
              {careerAcceleratorPrompts.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 text-[#F59E0B]">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <FAQItem
                question="How can I use AI to improve my resume?"
                answer="AI can help you refine your resume by analyzing job descriptions to highlight relevant keywords, rewriting achievements using strong action verbs, quantifying results with metrics, tailoring content to specific roles, and ensuring clarity and impact. Use prompts to transform your experiences into compelling, achievement-focused language that resonates with both hiring managers and applicant tracking systems (ATS)."
              />
              <FAQItem
                question="What is the STAR method and how do I use it in interviews?"
                answer="The STAR method (Situation, Task, Action, Result) is a structured way to answer behavioral interview questions. First describe the Situation and Task you faced, explain the specific Actions you took to address it, and finish by highlighting the Results achieved (with metrics when possible). This demonstrates capability through concrete examples rather than abstract claims."
              />
              <FAQItem
                question="How do I tailor my resume for different job types?"
                answer="Tailor your resume by analyzing each job description for key skills, keywords, and responsibilities, then reorder and reword your experience to emphasize relevant accomplishments. Adjust your summary and skills section to mirror the language used in the posting. Use AI to identify which of your achievements most directly address the role requirements and lead with those."
              />
              <FAQItem
                question="How should I negotiate salary during a job offer?"
                answer="Before negotiation, research market rates using tools like Glassdoor, Levels.fyi, and Blind. During discussion, anchor high but reasonably (15-20% above their initial offer), focus on your value and market data rather than personal needs, stay silent after making your counter-proposal to let them respond, and be prepared to negotiate non-salary benefits like equity, flexibility, professional development, and titles if cash compensation has limits."
              />
              <FAQItem
                question="How do I explain employment gaps or frequent job changes?"
                answer="Frame gaps positively by discussing what you learned, whether you developed new skills, took time for personal growth, or recovered from challenges. For frequent moves, explain your career trajectory narrative rather than job-hopping, focusing on the progression, strategic decisions, and learning at each stage. Employers value honesty paired with demonstrated growth from each experience."
              />
              <FAQItem
                question="What questions should I ask during interviews?"
                answer="Ask questions that demonstrate your research and strategic thinking: inquire about team dynamics, the biggest challenge the team faces, company strategy for the next year, how success is measured in the role, and what the previous person in the role did well. Avoid questions you could answer with 5 minutes of research, and focus on learning about fit and opportunity for impact."
              />
              <FAQItem
                question="How do I position myself as a thought leader in my industry?"
                answer="Create and share valuable content regularly through LinkedIn posts, blog articles, podcast appearances, or conference speaking. Focus on sharing learnings from your experience, frameworks you have developed, perspectives on industry trends, and insights that help others solve real problems. Consistency, authenticity, and genuine value matter more than frequency."
              />
              <FAQItem
                question="How can I use mentorship to accelerate my career?"
                answer="Seek mentors who have achieved what you aspire to, provide specific asks rather than vague requests for advice, show up prepared for meetings, implement their guidance and report back, and always provide value in return (whether insights, connections, or recognition). Mentorship relationships evolve; as you progress, you may shift from mentee to mentor."
              />
              <FAQItem
                question="What skills should I prioritize developing for my next role?"
                answer="Identify the skills required in your target role and compare them to your current capabilities. Prioritize technical skills required for core job functions, soft skills that differentiate you (communication, leadership, strategic thinking), and domain knowledge specific to your industry. Create a learning plan with concrete milestones, resources, and opportunities to apply skills in real projects."
              />
              <FAQItem
                question="How should I build my professional network strategically?"
                answer="Identify key people in your industry and decision-makers at target companies, find genuine ways to provide value to them (through connections, insights, or help), follow up consistently but not aggressively, and nurture relationships before you need something. Effective networking is about building genuine relationships and mutual benefit, not transactional asking."
              />
            </div>
          </section>

          <section className="border-t border-[#333] pt-12">
            <h2 className="text-2xl font-bold mb-6 text-[#F59E0B]">Related Prompt Collections</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/ai-chat-prompts" className="text-[#F59E0B] hover:text-[#FBBF24] underline">
                AI Chat Prompts
              </Link>
              <Link href="/ai-character-chat-prompts" className="text-[#F59E0B] hover:text-[#FBBF24] underline">
                Character Chat Prompts
              </Link>
              <Link href="/ai-personal-assistant-prompts" className="text-[#F59E0B] hover:text-[#FBBF24] underline">
                Personal Assistant Prompts
              </Link>
              <Link href="/ai-generative-ai-prompts" className="text-[#F59E0B] hover:text-[#FBBF24] underline">
                Generative AI Prompts
              </Link>
              <Link href="/ai-for-risk-management-prompts" className="text-[#F59E0B] hover:text-[#FBBF24] underline">
                Risk Management Prompts
              </Link>
              <Link href="/ai-for-executives-prompts" className="text-[#F59E0B] hover:text-[#FBBF24] underline">
                Executive AI Prompts
              </Link>
              <Link href="/ai-for-leadership-prompts" className="text-[#F59E0B] hover:text-[#FBBF24] underline">
                Leadership AI Prompts
              </Link>
              <Link href="/ai-for-quality-management-prompts" className="text-[#F59E0B] hover:text-[#FBBF24] underline">
                Quality Management Prompts
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
