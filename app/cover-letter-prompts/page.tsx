import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How to Use AI for Cover Letters: Complete Prompting Guide | GPTPrompts.AI",
  description:
    "Master cover letters with AI. Learn comprehensive prompting strategies for tailored, personalized letters that win interviews and address career-specific situations.",
}

export default function CoverLetterPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#059669] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Mail className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Cover Letter <br />
            <span className="italic opacity-90 text-emerald-200">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Kill the template, land the interview. Our comprehensive guide reveals advanced cover letter prompts that
            generate hyper-personalized letters recruiters actually read.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#059669] mb-6">Complete Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "fundamentals", label: "Cover Letter Fundamentals", num: "01" },
                  { id: "gathering", label: "Gathering Information", num: "02" },
                  { id: "effective", label: "Effective Prompts", num: "03" },
                  { id: "structure", label: "Letter Structure", num: "04" },
                  { id: "career", label: "Career Situations", num: "05" },
                  { id: "industry", label: "Industry-Specific", num: "06" },
                  { id: "research", label: "Company Research", num: "07" },
                  { id: "personality", label: "Personality & Tone", num: "08" },
                  { id: "faq", label: "Cover Letter FAQ", num: "09" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#059669] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight">Understanding Cover Letter Fundamentals</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Effective cover letters demonstrate genuine interest in the specific position and company, highlight
              relevant qualifications aligned with job requirements, show your personality and communication style,
              explain why you're a great fit beyond what's on your resume, and persuade hiring managers to interview
              you. Generic, template-based cover letters rarely succeed. Specificity and personalization are essential.
            </p>
          </article>

          <article id="gathering" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Gathering Information Before Prompting AI</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Strong cover letter prompts require comprehensive context: the complete job description and requirements,
              detailed information about the company (mission, values, recent news, culture), your relevant experience,
              skills, and accomplishments, specific examples of your qualifications matching job requirements, and why
              you're genuinely interested in this role and company.
            </p>
          </article>

          <article id="effective" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Creating Effective Cover Letter Prompts</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Basic prompts produce generic letters. Start with detailed context including your background, years of
              experience, key qualifications, what you admire about the company, and job requirements. This creates the
              foundation for compelling, personalized cover letters.
            </p>
            <p className="text-sm bg-muted p-4 rounded italic">
              Example: "I'm applying for Senior Marketing Manager at TechStart Solutions. I have 7 years B2B SaaS
              experience with proven success in demand generation. Grew MQL volume 200%, launched successful campaigns,
              built high-performing teams. I'm excited about TechStart because you're disrupting supply chain tech."
            </p>
          </article>

          <article id="structure" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Structuring Your Cover Letter</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Strong cover letters follow clear structures. The opening captures attention, states the position, shows
              genuine enthusiasm, and hints at why you're qualified. Body paragraphs connect your experience to job
              requirements with specific examples and quantifiable achievements using the STAR method. The closing
              reiterates enthusiasm, summarizes fit, and suggests next steps.
            </p>
          </article>

          <article id="career" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Tailoring for Different Career Situations</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Entry-level applicants should emphasize potential, eagerness to learn, and relevant projects. Career
              changers should frame transitions positively, emphasize transferable skills, and demonstrate genuine
              passion. Senior-level candidates should show strategic thinking and proven leadership. Internal applicants
              should reference institutional knowledge while bringing fresh thinking. Career gaps should be addressed
              briefly and positively.
            </p>
          </article>

          <article id="industry" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Industry-Specific Cover Letters</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Tech companies appreciate slightly less formal tone matching startup culture while remaining professional.
              Corporate roles require formal, polished language. Creative fields should demonstrate your unique voice.
              Nonprofit organizations value authentic commitment to the mission backed by competence.
            </p>
          </article>

          <article id="research" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Demonstrating Company Research</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Show you've researched the company thoroughly. Incorporate specific details about recent news, product
              launches, company values, or culture naturally. Connect these details to why you're excited and how you
              can contribute. Avoid generic mission-speak or regurgitating their website.
            </p>
          </article>

          <article id="personality" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Showing Personality While Staying Professional</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Your cover letter should sound like you, not a template. Remove generic phrases like "team player,"
              "detail-oriented," or "think outside the box." Replace with specific examples that demonstrate these
              qualities. Strike a balance between confident and humble, enthusiastic but professional.
            </p>
          </article>

          <article id="faq" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Cover Letter FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Do I really need a cover letter in 2026?",
                  a: "Yes. While some companies say optional, a well-crafted letter often decides between equally qualified candidates. It shows effort and specific intent.",
                },
                {
                  q: "How long should my cover letter be?",
                  a: "Aim for 250-400 words, never exceeding one page. Recruiters appreciate brevity and clarity over long-winded stories.",
                },
                {
                  q: "Can I use the same cover letter for multiple jobs?",
                  a: "Never. Recruiters spot generic letters instantly. Customize at least 50% of content for every application.",
                },
                {
                  q: "Should I address a specific person?",
                  a: "Yes, if possible. Research to find the hiring manager's name. 'Dear Hiring Team' is acceptable if you can't find a specific name.",
                },
                {
                  q: "What if I'm applying after a long gap?",
                  a: "Address it briefly and positively. Focus on skills developed during gap, forward momentum, and enthusiasm for new opportunities.",
                },
                {
                  q: "How do I handle relocation in cover letter?",
                  a: "Address it briefly to show commitment. Clarify timeline for availability and establish local connections if possible.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-xl font-bold hover:text-[#059669] transition-colors text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg leading-relaxed pt-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </article>
        </div>
      </section>

      <footer className="bg-foreground text-background py-32 px-6 md:px-12 mt-32 border-t border-background/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              GPTPrompts.AI
            </Link>
            <p className="opacity-60 text-pretty leading-relaxed max-w-sm text-lg">
              The world's most comprehensive prompt engineering library. Master the machines, unleash your potential.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">AI Models</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                { label: "Claude Prompts", href: "/claude-prompts" },
                { label: "Gemini Prompts", href: "/gemini-prompts" },
                { label: "Perplexity Prompts", href: "/perplexity-prompts" },
                { label: "Midjourney Prompts", href: "/midjourney-prompts" },
                { label: "Stable Diffusion Prompts", href: "/stable-diffusion-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Career & Specialized</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Career Prompts", href: "/careers" },
                { label: "Writing Prompts", href: "/writing-prompts" },
                { label: "Image Prompts", href: "/image-prompts" },
                { label: "SQL Prompts", href: "/sql-prompts" },
                { label: "500+ Writing Prompts", href: "/500-writing-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Test Prep</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "SAT Prompts", href: "/sat-prompts" },
                { label: "GRE Prompts", href: "/gre-prompts" },
                { label: "GMAT Prompts", href: "/gmat-prompts" },
                { label: "IELTS Prompts", href: "/ielts-prompts" },
                { label: "TOEFL Prompts", href: "/toefl-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Resources & Guides</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "Virtual Assistant Prompts", href: "/virtual-assistant-prompts" },
                { label: "Creative Writing for Beginners", href: "/creative-writing-prompts-beginners" },
                { label: "Photo Editing Prompts", href: "/photo-editing-prompts" },
                { label: "Social Media Marketing", href: "/social-media-marketing-prompts" },
                { label: "Free Prompts Library", href: "/free-ai-prompts" },
                { label: "Coolest ChatGPT Prompts", href: "/coolest-chatgpt-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-8 mt-8 border-t border-background/10">
                <p className="text-[10px] opacity-30 uppercase tracking-widest leading-loose">
                  © 2026 GPTPrompts.AI <br />
                  All Rights Reserved.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}
