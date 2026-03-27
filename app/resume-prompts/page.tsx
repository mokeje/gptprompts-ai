// Keep existing header and hero, add detailed content sections in main body

import { FileText } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How to Use AI for Resumes: Complete Prompting Guide | GPTPrompts.AI",
  description:
    "Master resume creation with AI. Learn comprehensive prompting strategies for resume fundamentals, ATS optimization, tailoring, skills sections, and industry-specific approaches.",
}

export default function ResumePromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#2563eb] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <FileText className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Resume <br />
            <span className="italic opacity-90 text-blue-200">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Land your dream job with AI precision. Our comprehensive guide reveals advanced resume prompts used by
            career coaches to beat ATS systems and impress hiring managers.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#2563eb] mb-6">Complete Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "fundamentals", label: "Resume Fundamentals", num: "01" },
                  { id: "gathering", label: "Gathering Information", num: "02" },
                  { id: "formats", label: "Resume Formats", num: "03" },
                  { id: "summaries", label: "Professional Summaries", num: "04" },
                  { id: "experience", label: "Optimizing Experience", num: "05" },
                  { id: "tailoring", label: "Tailoring for Positions", num: "06" },
                  { id: "skills", label: "Skills Section Strategy", num: "07" },
                  { id: "education", label: "Education Sections", num: "08" },
                  { id: "challenges", label: "Addressing Challenges", num: "09" },
                  { id: "industry", label: "Industry-Specific Tips", num: "10" },
                  { id: "faq", label: "Resume FAQ", num: "11" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#2563eb] transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-[10px] opacity-30 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-24 max-w-4xl">
          <article id="fundamentals" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Understanding Resume Fundamentals</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Your resume is your professional summary document. Effective resumes are tailored to specific positions
              and industries, highlight accomplishments with quantifiable results, use action verbs and concise
              language, pass ATS (Applicant Tracking Systems) with appropriate keywords, are visually clean and easy to
              scan, and demonstrate clear value proposition to employers.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Generic, one-size-fits-all resumes rarely succeed in competitive job markets. Each application should
              demonstrate how your specific experience aligns with the role's requirements.
            </p>
          </article>

          <article id="gathering" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Gathering Information Before Prompting AI</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Before using AI for resume development, collect your complete work history with dates, specific
              accomplishments and responsibilities for each role, quantifiable metrics and results (numbers,
              percentages, revenue), skills (technical, soft, languages, certifications), education details, relevant
              projects or volunteer work, and target job descriptions for positions you're pursuing.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The more specific information you provide, the more tailored and effective AI's assistance will be. Vague
              inputs produce generic outputs.
            </p>
          </article>

          <article id="formats" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Choosing the Right Resume Format</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Chronological Resume</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Most common format, listing work experience in reverse chronological order. Best for: consistent work
                  history, staying in same field, showing career progression, and traditional industries.
                </p>
                <p className="text-sm bg-muted p-4 rounded italic">
                  Prompt: "Help me structure a chronological resume for [your field/level]. I have [X years] experience
                  in [industry]. My roles include: [list positions with dates]. Suggest section order and how to format
                  employment history."
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Functional Resume</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Emphasizes skills over chronological work history. Best for: career changers, employment gaps, diverse
                  experience, and entry-level candidates.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Combination Resume</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Blends skills emphasis with chronological work history. Best for: experienced professionals with
                  diverse skills, senior-level positions, and technical roles.
                </p>
              </div>
            </div>
          </article>

          <article id="summaries" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Crafting Compelling Professional Summaries</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Your summary or objective statement is prime real estate at the top of your resume. For experienced
              professionals, create a 3-4 sentence professional summary that immediately communicates value proposition
              and key qualifications using active language and avoiding generic phrases.
            </p>
            <p className="text-sm bg-muted p-4 rounded italic">
              Example prompt: "Write a professional summary for a Senior Software Engineer with 8 years experience in
              full-stack development, specializing in React and Node.js. I've led development of 3 major products
              serving 500K+ users. Targeting technical lead roles at mid-size tech companies."
            </p>
          </article>

          <article id="experience" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Optimizing Work Experience Sections</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Transform job descriptions into accomplishments. For each role, use strong action verbs, emphasize
              accomplishments over duties, include quantifiable results, and demonstrate impact. Avoid overused words
              like "responsible for," "helped," or "worked on."
            </p>
            <p className="text-sm bg-muted p-4 rounded italic">
              Effective prompt: "Write resume bullets for Marketing Manager role showing: grew Instagram following from
              10K to 25K in 8 months; increased engagement rate from 2.1% to 4.3%; generated 40% more
              marketing-qualified leads. Use strong action verbs and emphasize business impact."
            </p>
          </article>

          <article id="tailoring" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Tailoring Resumes for Specific Positions</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Generic resumes get overlooked. Customization is essential. Incorporate keywords from job descriptions
              naturally, reorder experience to emphasize relevant roles, and show where your experience aligns with
              requirements without just stuffing keywords.
            </p>
            <p className="text-sm bg-muted p-4 rounded italic">
              For ATS optimization: "Analyze this job description: [paste]. Identify important keywords and required
              qualifications. Review my resume and suggest how to incorporate keywords naturally where they genuinely
              apply. Don't just stuff keywords—show alignment."
            </p>
          </article>

          <article id="skills" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Skills Section Optimization</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Skills sections need strategic organization. Categorize skills logically (Programming Languages,
              Frameworks, Tools, Databases), prioritize based on what target companies require, and balance technical
              abilities with soft skills to show comprehensive professional capabilities.
            </p>
          </article>

          <article id="education" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Education Section Strategy</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              For recent graduates, include relevant coursework, honors, and activities. For experienced professionals,
              basic degree information is usually sufficient since work experience takes priority. Include
              certifications and continuing education in a separate section to highlight ongoing professional
              development.
            </p>
          </article>

          <article id="challenges" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Addressing Common Resume Challenges</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Employment gaps: Use years only instead of months, include relevant activities during gap, or provide
              brief explanation. Frequent job changes: Group similar roles, explain contract/temporary positions,
              emphasize stability and growth trajectory. Limited experience: Feature internships, projects, volunteer
              work. Career transitions: Reframe experience, emphasize transferable skills.
            </p>
          </article>

          <article id="industry" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Industry-Specific Resume Optimization</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Technology roles should emphasize specific technologies, quantifiable impact, problem-solving abilities,
              and links to portfolio/GitHub. Creative fields should demonstrate design sensibility while maintaining
              professionalism. Healthcare roles should emphasize clinical skills, patient outcomes, and certifications.
              Finance roles should highlight quantifiable business impact and technical financial skills.
            </p>
          </article>

          <article id="faq" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Resume FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How long should my resume be?",
                  a: "1 page for <5 years experience, 1-2 pages for 5-15 years, 2 pages for 15+ years or senior positions.",
                },
                {
                  q: "Should I include my GPA?",
                  a: "Include GPA only if it's 3.5 or above, you're a recent graduate, or applying to competitive positions.",
                },
                {
                  q: "What file format should I use?",
                  a: "PDF to preserve formatting. Use standard fonts and simple formatting for ATS compatibility.",
                },
                {
                  q: "How do I handle employment gaps?",
                  a: "Be honest. Use years only, include relevant activities during gaps, or provide brief explanation.",
                },
                {
                  q: "Should I include references on my resume?",
                  a: "No. Save space and provide references separately when requested.",
                },
                {
                  q: "How often should I update my resume?",
                  a: "Update whenever you gain significant new skills or accomplish noteworthy projects.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-l-4 border-[#2563eb] pl-6">
                  <h4 className="text-lg font-bold mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <footer className="bg-foreground text-background py-32 px-6 md:px-12 mt-32 border-t border-background/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity inline-block mb-6"
              >
                GPTPrompts.AI
              </Link>
              <p className="text-sm leading-relaxed opacity-70">
                The ultimate platform for mastering AI prompting across all models and use cases.
              </p>
            </div>

            {/* AI Models */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-6">AI Models</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                  { name: "Claude Prompts", href: "/claude-prompts" },
                  { name: "Gemini AI", href: "/gemini-prompts" },
                  { name: "Perplexity Prompts", href: "/perplexity-prompts" },
                  { name: "Midjourney", href: "/midjourney-prompts" },
                  { name: "Stable Diffusion", href: "/stable-diffusion-prompts" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="opacity-70 hover:opacity-100 transition-opacity">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* University Essays */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-6">University Essays</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Common App Essays", href: "/common-app-essays" },
                  { name: "NYU Essays", href: "/nyu-essay-prompts" },
                  { name: "Stanford Essays", href: "/stanford-essay-prompts" },
                  { name: "UC Essays", href: "/uc-essay-prompts" },
                  { name: "UMich Essays", href: "/umich-essay-prompts" },
                  { name: "Scholarship Essays", href: "/scholarship-essays" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="opacity-70 hover:opacity-100 transition-opacity">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career & Specialized */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-6">Career & Test Prep</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Cover Letters", href: "/cover-letter-prompts" },
                  { name: "Career Paths", href: "/careers" },
                  { name: "SAT Prompts", href: "/sat-prompts" },
                  { name: "GRE Prompts", href: "/gre-prompts" },
                  { name: "GMAT Prompts", href: "/gmat-prompts" },
                  { name: "SQL Prompts", href: "/sql-prompts" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="opacity-70 hover:opacity-100 transition-opacity">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Guides */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-6">Resources & Guides</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Virtual Assistant Prompts", href: "/virtual-assistant-prompts" },
                  { name: "Creative Writing for Beginners", href: "/creative-writing-prompts-beginners" },
                  { name: "Photo Editing Prompts", href: "/photo-editing-prompts" },
                  { name: "Social Media Marketing", href: "/social-media-marketing-prompts" },
                  { name: "Free Prompts Library", href: "/free-ai-prompts" },
                  { name: "Coolest ChatGPT Prompts", href: "/coolest-chatgpt-prompts" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="opacity-70 hover:opacity-100 transition-opacity">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
            <p>&copy; 2026 GPTPrompts.AI. All rights reserved.</p>
            <p>Crafted with precision for AI professionals worldwide.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
