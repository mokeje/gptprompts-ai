import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { GraduationCap, Building2 } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "NYU Essay Prompts 2025: How to Use AI for NYU Supplemental Essays | GPTPrompts.AI",
  description:
    "Master NYU essay prompts with our comprehensive guide. Get expert strategies, example approaches, and proven frameworks for NYU supplemental essays 2025.",
}

export default function NYUEssayPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#57068c] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <GraduationCap className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            NYU Essay <br />
            <span className="italic opacity-90">Prompts 2025.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Crack the code to NYU admissions with our definitive guide to the NYU supplemental essays. Strategic
            insights, proven frameworks, and admission officer perspectives.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-[0.2em] opacity-70">
            <span>Updated Dec 2025</span>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#57068c] mb-6">NYU Essay Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "NYU's Identity & Values", num: "01" },
                  { id: "strategic-prompts", label: "Strategic AI Prompts", num: "02" },
                  { id: "why-nyu", label: "Why NYU Essay", num: "03" },
                  { id: "short-answers", label: "Short Answer Essays", num: "04" },
                  { id: "diversity", label: "Diversity Question", num: "05" },
                  { id: "new-york", label: "NYC Integration", num: "06" },
                  { id: "refining", label: "Refining Content", num: "07" },
                  { id: "faq", label: "NYU Essay FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#57068c] transition-colors"
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

        <div className="lg:col-span-9 space-y-32 max-w-4xl">
          <article id="intro" className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Understanding NYU's Institutional Identity</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              New York University stands as a global university with unmatched urban integration, academic innovation,
              and cultural diversity. Writing compelling essays for NYU requires demonstrating intellectual curiosity,
              independence, appreciation for diversity, and genuine understanding of what makes NYU unique among
              universities.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              NYU seeks intellectually adventurous students who thrive in urban environments, embrace diversity,
              demonstrate independence, and want to be part of a global academic community. Unlike traditional
              campus-bound universities, NYU is woven into the fabric of New York City and maintains global campuses,
              creating a distinctive educational philosophy.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The essays provide crucial opportunities to demonstrate you've thought deeply about what makes NYU
              different and why those differences matter to you specifically. Understanding NYU's distinctive features
              including the lack of traditional campus boundaries, integration with New York City, global network of
              campuses, specific schools and programs, and emphasis on experiential learning will help you craft essays
              that demonstrate genuine knowledge and enthusiasm.
            </p>
          </article>

          <section id="strategic-prompts" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#57068c]/10 rounded-xl">
                <Building2 className="w-8 h-8 text-[#57068c]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Building Strategic AI Prompts for NYU Essays</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Effective AI-assisted essay writing requires providing detailed context and specific information. Generic
              prompts yield generic content. Rich, personalized prompts that incorporate your experiences, values, and
              knowledge of NYU will generate meaningful starting points for authentic essays.
            </p>

            <div className="p-8 bg-secondary/30 rounded-2xl border border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-[#57068c]">Establishing Your Personal Foundation</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Before requesting essay help, create comprehensive context by sharing:
              </p>
              <ul className="space-y-3 text-lg leading-relaxed list-disc list-inside">
                <li>Your intended school within NYU and specific major</li>
                <li>Particular programs, professors, or opportunities that interest you</li>
                <li>Relevant experiences that shaped your academic interests</li>
                <li>Personal qualities that align with NYU's values</li>
                <li>Specific aspects of New York City that appeal to you</li>
                <li>Why NYU's urban integration model appeals to you</li>
              </ul>
            </div>
          </section>

          <section id="why-nyu" className="space-y-12 bg-secondary/20 p-12 md:p-20 rounded-[3rem]">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Mastering the "Why NYU" Essay</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              NYU's signature supplemental essay asks why you want to attend the university. This essay requires
              demonstrating specific knowledge of NYU's unique features and clear articulation of why those features
              align with your goals and learning style.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#57068c]">What Admissions Officers Look For</h3>
                <ul className="space-y-3 text-lg leading-relaxed list-disc list-inside">
                  <li>Specific references to NYU programs and opportunities (not generic reasons)</li>
                  <li>Understanding of your particular school within NYU</li>
                  <li>Knowledge of how NYC enhances your education</li>
                  <li>Clear connection between your interests and NYU's offerings</li>
                  <li>Authentic voice and genuine enthusiasm</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#57068c]">Example AI Prompt</h3>
                <div className="p-6 bg-slate-900 text-slate-100 rounded-2xl font-mono text-sm overflow-auto">
                  <p>
                    "Help me write a 'Why NYU' essay for Stern School of Business. I'm interested in the Business and
                    Political Economy major, Professor Scott Galloway's Brand Strategy course, and the opportunity to
                    intern at startups and established companies in Manhattan. I thrive in fast-paced environments and
                    love that NYU doesn't have walls separating it from the city. I want to show I understand Stern's
                    unique culture and New York's role in my education without just listing programs."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="short-answers" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Approaching NYU's Supplemental Short Answers</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              NYU often includes short answer questions about what you would contribute to campus diversity, an artifact
              that represents you, or other creative prompts. These brief responses require creativity, specificity, and
              authentic voice.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#57068c]">The Artifact or Song Essay</h3>
                <p className="text-lg leading-relaxed mb-4">
                  If asked to describe an artifact, song, or other item that represents you, prompt AI with the specific
                  item you've chosen and why it's meaningful, what it reveals about your values or personality, a
                  specific memory or story connected to this item, and how this connects to your potential contributions
                  at NYU.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#57068c]">The Diversity Contribution Question</h3>
                <p className="text-lg leading-relaxed">
                  For questions about what you'll contribute to NYU's diverse community, include the specific
                  perspective or background you bring, experiences that shaped this perspective, how you've already
                  demonstrated similar contributions, and concrete ways you'd engage with NYU's diverse community.
                </p>
              </div>
            </div>
          </section>

          <section id="diversity" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Highlighting Your Fit with New York City</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              NYU's New York City location isn't just a setting but an integral part of the educational experience.
              Strong NYU essays demonstrate understanding of how the city enhances learning and how you'll engage with
              urban opportunities.
            </p>

            <div className="p-8 bg-secondary/30 rounded-2xl border border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-[#57068c]">When Prompting About NYC, Include</h3>
              <ul className="space-y-3 text-lg leading-relaxed list-disc list-inside">
                <li>Specific NYC neighborhoods, cultural institutions, or resources</li>
                <li>How NYC's industries or organizations connect to your goals</li>
                <li>Ways you'd engage with the broader NYC community</li>
                <li>How Manhattan's fast-paced culture resonates with you</li>
                <li>Specific internship or job opportunities in your field</li>
              </ul>
            </div>
          </section>

          <section id="refining" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Refining AI-Generated Content</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              After receiving AI suggestions, personalize the content by replacing general statements with specific
              anecdotes from your life, adjusting language to match your natural voice and style, adding vivid details
              and concrete examples, removing clichés and replacing them with concrete details, and ensuring every
              sentence adds value to your narrative.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Read your essay aloud to check if it sounds like you. If it doesn't, revise accordingly. Admissions
              officers can often detect when essays lack authentic voice.
            </p>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">NYU Essay FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How competitive are the NYU essay prompts in admissions decisions?",
                  a: "Very competitive. NYU receives 80,000+ applications annually. Your essays must show genuine engagement with NYU's unique offerings, not generic reasons like 'it's in New York' or 'it's prestigious.'",
                },
                {
                  q: "Should I address a specific NYU school or program in my Why NYU essay?",
                  a: "Yes, absolutely. Mention your intended school (Stern, Tisch, GSM, CAS, etc.) and specific resources, professors, or programs that align with your goals. This shows serious research and intent.",
                },
                {
                  q: "Can I mention that NYU is my safety or reach school in the essays?",
                  a: "Never. Always write as if NYU is your top choice. Admissions officers read thousands of essays; they can detect insincere or generic submissions.",
                },
                {
                  q: "How do I make my identity essay stand out?",
                  a: "Focus on something unique to your identity that has shaped your values and goals. Avoid overused topics. Show, don't tell: use specific anecdotes and moments rather than broad generalizations.",
                },
                {
                  q: "What if my achievement doesn't seem 'big' enough?",
                  a: "NYU values impact over scale. A meaningful project within your community is more compelling than a generic achievement. Focus on what you learned and how it changed your perspective.",
                },
                {
                  q: "Is there a recommended word count for responses?",
                  a: "Follow the prompt limits strictly. Use the space wisely. Aim for depth over length—a concise, powerful answer beats a rambling one.",
                },
                {
                  q: "How do I balance being authentic while being strategic?",
                  a: "Strategy is about choosing which authentic parts of yourself to highlight, not fabricating stories. Answer the prompt directly, use specific examples, and let your genuine interests shine through.",
                },
                {
                  q: "Should my essays sound formal or conversational?",
                  a: "Professional but personable. Avoid overly academic jargon, but maintain clarity and sophistication. Let your voice come through while being respectful to the reader.",
                },
                {
                  q: "Can I mention how NYC's location impacts your decision?",
                  a: "Yes, but only if it's genuine and specific. Vague references to 'New York's energy' are clichéd. Instead, discuss actual opportunities: specific internships, cultural institutions, or research centers.",
                },
                {
                  q: "What tone should I use when discussing challenges?",
                  a: "Reflective and growth-oriented. Don't dwell on victimhood; focus on resilience, lessons learned, and how the challenge shaped your character and goals.",
                },
                {
                  q: "How many NYU-specific details should I include?",
                  a: "At least 3-5 specific references (programs, professors, student organizations, resources). Shows genuine research without being excessive.",
                },
                {
                  q: "Is it okay to discuss multiple NYU schools in one essay?",
                  a: "Only if the prompt allows it. If you're applying to multiple schools, write separate essays tailored to each. Many applicants make the mistake of writing one generic 'Why NYU' for all schools.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#57068c] transition-colors text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xl leading-relaxed pt-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      {/* Footer */}
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
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">University Essays</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { label: "NYU Essays", href: "/nyu-essay-prompts" },
                { label: "Stanford Essays", href: "/stanford-essay-prompts" },
                { label: "UC PIQ Essays", href: "/uc-essay-prompts" },
                { label: "UMich Essays", href: "/umich-essay-prompts" },
                { label: "UT Austin Essays", href: "/ut-essay-prompts" },
                { label: "UW Essays", href: "/uw-essay-prompts" },
                { label: "Virginia Tech Essays", href: "/virginia-tech-essays" },
                { label: "Wisconsin Essays", href: "/wisconsin-essays" },
                { label: "Princeton Essays", href: "/princeton-essays" },
                { label: "UGA Essays", href: "/uga-essays" },
                { label: "Common App Essays", href: "/common-app-essays" },
                { label: "Scholarship Essays", href: "/scholarship-essays" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/nyu-essay-prompts" ? "text-[#57068c] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
                  >
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
                { label: "Career Prompts", href: "/careers" },
                { label: "Resume Prompts", href: "/resume-prompts" },
                { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
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
