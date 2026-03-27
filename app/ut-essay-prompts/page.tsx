import { MapPin, Target } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "UT Austin Essay Prompts 2025: How to Use AI for Longhorn Essays | GPTPrompts.AI",
  description:
    "Master the UT Austin essay prompts with our expert guide. Strategies for Topic A, B, C short answers, and the expanded Longhorn profile.",
}

export default function UTEssayPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#bf5700] text-white py-32 px-6 md:px-12 relative overflow-hidden border-b-8 border-[#333f48]">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <MapPin className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            UT Austin <br />
            <span className="italic opacity-90 text-[#333f48]">Prompts 2025.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Hook 'em with your story. A deep-dive into the UT Austin supplemental essays, the 'Core Purpose' philosophy,
            and AI-powered essay strategies.
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
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#bf5700] mb-6">UT Austin Essay Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "UT Austin Values", num: "01" },
                  { id: "prompting", label: "Crafting AI Prompts", num: "02" },
                  { id: "topic-a", label: "Topic A: Goals", num: "03" },
                  { id: "topic-b", label: "Topic B: Growth", num: "04" },
                  { id: "topic-c", label: "Topic C: Contributions", num: "05" },
                  { id: "refining", label: "Refining Content", num: "06" },
                  { id: "advanced", label: "Advanced Techniques", num: "07" },
                  { id: "faq", label: "UT Austin FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#bf5700] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">Understanding UT Austin's Essay Requirements</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              The University of Texas at Austin stands as one of the nation's premier public universities, attracting
              thousands of ambitious students each year. The university values intellectual curiosity, leadership
              potential, diverse perspectives, and genuine passion for learning. Your essays should reflect these
              qualities while showcasing your individual story and fit with the university's collaborative culture.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              UT Austin typically requires students to complete the ApplyTexas application, which includes three short
              answer questions (Topics A, B, and C). Each component serves a distinct purpose in helping admissions
              officers understand who you are beyond grades and test scores. The university's 'Core Purpose'—to
              transform lives for the benefit of society—should resonate throughout your essays.
            </p>
          </article>

          <section id="prompting" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#bf5700]/10 rounded-xl">
                <Target className="w-8 h-8 text-[#bf5700]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Crafting Effective AI Prompts for UT Essays</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              When using AI to assist with your University of Texas essays, the quality of your output depends entirely
              on the quality of your input. Generic prompts produce generic essays. Specific, detailed prompts that
              include your personal experiences, values, and goals will generate content that serves as a meaningful
              starting point for your authentic essay.
            </p>

            <div className="p-8 bg-secondary/30 rounded-2xl border border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-[#bf5700]">Starting Your AI Conversation</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Begin by providing context about yourself and your relationship with UT Austin. An effective initial
                prompt should include:
              </p>
              <ul className="space-y-3 text-lg leading-relaxed list-disc list-inside">
                <li>Your intended major</li>
                <li>Specific programs you're interested in</li>
                <li>Your academic interests</li>
                <li>Relevant extracurricular activities</li>
                <li>Career aspirations</li>
                <li>What UT Austin means to you specifically</li>
              </ul>
            </div>
          </section>

          <section id="topic-a" className="space-y-12 bg-secondary/20 p-12 md:p-20 rounded-[3rem]">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Topic A: Your Educational and Career Goals</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Topic A asks students to describe their educational and career goals and how their selected major will
              help achieve these objectives. This essay requires concrete details about your aspirations and clear
              connections to UT Austin's specific offerings.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#bf5700]">What to Include</h3>
                <ul className="space-y-2 text-lg leading-relaxed list-disc list-inside">
                  <li>Your chosen major</li>
                  <li>Specific courses or faculty you're interested in at UT</li>
                  <li>Relevant experiences that shaped your goals</li>
                  <li>How your background informs your future plans</li>
                  <li>Specific UT resources that enable your goals</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#bf5700]">Example AI Prompt</h3>
                <div className="p-6 bg-slate-900 text-slate-100 rounded-2xl font-mono text-sm overflow-auto">
                  <p>
                    "Help me outline an essay about my goal to become a sustainable architecture specialist. I'm
                    applying to UT Austin's School of Architecture. I became interested in sustainable design after
                    helping my uncle renovate a historic building using eco-friendly materials. I want to highlight UT's
                    Center for Sustainable Development and Professor Sarah Chen's research on climate-responsive
                    design."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="topic-b" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Topic B: Personal Qualities and Accomplishments</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Topic B invites students to choose an achievement, event, or realization that sparked personal growth and
              led to new understanding of yourself or others. This is your opportunity to showcase self-awareness,
              resilience, and capacity for reflection.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#bf5700]">AI Prompting Strategy</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Effective AI prompts for Topic B should include the specific experience you want to write about, what
                  you learned from this experience, how it changed your perspective or behavior, and why this matters to
                  your future at UT Austin.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#bf5700]">Common Mistakes to Avoid</h3>
                <ul className="space-y-2 text-lg leading-relaxed list-disc list-inside">
                  <li>Focusing too much on the event itself rather than your reflection</li>
                  <li>Ending with overly general life lessons</li>
                  <li>Claiming growth without specific evidence</li>
                  <li>Ignoring how this shapes your future plans</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="topic-c" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Topic C: Contributions to UT Austin</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Topic C asks how you'll contribute to UT Austin's diverse community. This essay should demonstrate your
              awareness of what makes UT special and how your unique background, perspectives, or experiences will
              enhance campus life.
            </p>

            <div className="p-8 bg-secondary/30 rounded-2xl border border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-[#bf5700]">When Crafting Your Prompt</h3>
              <p className="text-lg mb-6 leading-relaxed">Be specific about:</p>
              <ul className="space-y-3 text-lg leading-relaxed list-disc list-inside">
                <li>Your background or perspective you'll contribute</li>
                <li>UT Austin communities or programs you'd engage with</li>
                <li>How your contributions align with UT's values</li>
                <li>Concrete ways you've already demonstrated similar contributions</li>
              </ul>
            </div>
          </section>

          <section id="refining" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Refining Your AI-Generated Content</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Remember that AI outputs should serve as a foundation, not a final product. After receiving AI-generated
              content, personalize the language to match your voice, add specific anecdotes only you can share, verify
              all facts about UT Austin programs and offerings, remove clichés and replace them with concrete details,
              and ensure every sentence adds value to your narrative.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Read your essay aloud to check if it sounds like you. If it doesn't, revise accordingly. Admissions
              officers can often detect when essays lack authentic voice.
            </p>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">UT Austin Essay FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How important are the UT Austin essays in admissions decisions?",
                  a: "Very important, especially for competitive majors like Computer Science, Business, and Engineering. With UT's holistic review, essays can be the distinguishing factor between qualified candidates.",
                },
                {
                  q: "What should I do if I'm applying to multiple UT schools?",
                  a: "Write separate, tailored essays for each school. Generic essays that could apply to multiple programs signal lack of genuine interest. Show specific knowledge of each school's unique offerings.",
                },
                {
                  q: "How long should my Topic A, B, and C responses be?",
                  a: "Follow UT's specific word limits for each prompt. Typically, these are shorter essays (100-250 words each). Be concise and impactful—quality over quantity.",
                },
                {
                  q: "Can I discuss challenges or struggles in my essays?",
                  a: "Yes, but frame them as opportunities for growth. Focus on resilience, lessons learned, and how challenges shaped your character and goals rather than on victimhood.",
                },
                {
                  q: "Should I mention my intended major if I'm undecided?",
                  a: "If you're undecided, focus on the skills and interests you want to develop rather than a specific major. Show intellectual curiosity and openness to exploration.",
                },
                {
                  q: "How do I make my essay stand out if I'm applying to a competitive major?",
                  a: "Go beyond the resume. Show specific projects, research interests, or leadership experiences. Connect these to UT's resources. Be genuine and avoid clichés about why you chose your field.",
                },
                {
                  q: "Is it okay to discuss my family's influence on my goals?",
                  a: "Yes, if it's specific and meaningful. Avoid generic statements about family values. Instead, share specific conversations, decisions, or events that shaped your perspective.",
                },
                {
                  q: "What if I don't have significant extracurricular activities?",
                  a: "Quality over quantity. Focus on one or two meaningful involvements where you made an impact. Or discuss how you've contributed within your family, school, or community.",
                },
                {
                  q: "Should I mention UT's location in Austin, Texas?",
                  a: "Only if it's genuinely relevant to your goals. Vague mentions of Austin's culture are clichéd. Instead, discuss specific resources, industries, or opportunities in Austin that align with your interests.",
                },
                {
                  q: "Can I use humor in my UT Austin essays?",
                  a: "Yes, if it's natural and appropriate. Humor can show personality and make your essay memorable, but ensure it doesn't undermine the seriousness of your application.",
                },
                {
                  q: "How do I verify facts about UT programs before submitting?",
                  a: "Visit UT's official website, check current program descriptions, and review recent course catalogs. Never cite programs or professors that don't exist or have retired.",
                },
                {
                  q: "What if my academic interests have changed recently?",
                  a: "Explain the evolution of your interests honestly. Show how new experiences or insights led you to your current goals. This demonstrates intellectual growth and self-awareness.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#bf5700] transition-colors text-left">
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
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
                { label: "UC Essays", href: "/uc-essay-prompts" },
                { label: "UMich Essays", href: "/umich-essay-prompts" },
                { label: "USC Essays", href: "/usc-essay-prompts" },
                { label: "UT Austin Essays", href: "/ut-essay-prompts" },
                { label: "UW Essays", href: "/uw-essay-prompts" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${link.href === "/ut-essay-prompts" ? "text-[#bf5700] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
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
              <li className="pt-8 mt-8 border-t border-background/10">
                <p className="text-[10px] opacity-30 uppercase tracking-widest leading-loose">
                  © 2025 GPTPrompts.AI <br />
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
