import { Anchor, Globe } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "University of Washington Essay Prompts 2025: How to Use AI for UW Essays | GPTPrompts.AI",
  description:
    "Master the University of Washington supplemental essays. Complete guide to UW prompts, strategic frameworks, and proven AI prompting techniques.",
}

export default function UWEssayPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#4b2e83] text-white py-32 px-6 md:px-12 relative overflow-hidden border-b-8 border-[#b7a57a]">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Anchor className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            UWashington <br />
            <span className="italic opacity-90 text-[#b7a57a]">Prompts 2025.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Boundless storytelling. A deep-dive into the University of Washington supplemental essays, the Seattle tech
            ecosystem, and the 'Husky' values.
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
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#4b2e83] mb-6">UW Essay Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "UW's Values & Requirements", num: "01" },
                  { id: "building-prompts", label: "Building Effective AI Prompts", num: "02" },
                  { id: "personal-context", label: "Creating Personal Context", num: "03" },
                  { id: "diversity", label: "Diversity Essay Strategies", num: "04" },
                  { id: "supplemental", label: "Supplemental Essays", num: "05" },
                  { id: "refining", label: "Refining AI Content", num: "06" },
                  { id: "advanced", label: "Advanced Prompting", num: "07" },
                  { id: "faq", label: "UW Essay FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#4b2e83] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">
              Understanding UW's Institutional Identity and Values
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              The University of Washington stands as one of the nation's top public research universities, renowned for
              innovation, academic excellence, and commitment to serving the greater good. Crafting compelling essays
              for UW requires demonstrating intellectual curiosity, alignment with the university's values, and
              authentic connection to the Pacific Northwest spirit.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              UW seeks students who demonstrate academic achievement, intellectual curiosity, leadership potential,
              commitment to diversity and inclusion, and desire to make positive contributions to society. The
              university values the whole person, looking beyond grades to understand your character, experiences, and
              potential to thrive in their collaborative learning environment.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              UW's application includes personal insight questions that allow admissions officers to understand your
              motivations, challenges you've overcome, leadership experiences, and contributions to your community.
              These essays provide crucial context for your application and help distinguish you from other academically
              qualified candidates.
            </p>
          </article>

          <section id="building-prompts" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#4b2e83]/10 rounded-xl">
                <Globe className="w-8 h-8 text-[#4b2e83]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Building Effective AI Prompts for UW Essays</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The foundation of successful AI-assisted writing lies in providing detailed, personalized prompts. Generic
              questions produce generic responses. Rich prompts that include your specific experiences, values, and
              knowledge of UW will generate meaningful starting points for authentic essays.
            </p>
            <div className="p-8 bg-secondary/30 rounded-2xl border border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-[#4b2e83]">Creating Your Personal Context Foundation</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Before requesting essay assistance, establish comprehensive context by sharing:
              </p>
              <ul className="space-y-3 text-lg leading-relaxed list-disc list-inside">
                <li>Your intended major and why you chose it</li>
                <li>Specific UW programs or research areas that interest you</li>
                <li>Relevant high school experiences and accomplishments</li>
                <li>Personal challenges or unique perspectives</li>
                <li>Community service or leadership experiences</li>
                <li>What specifically attracts you to UW and Seattle</li>
              </ul>
            </div>
          </section>

          <section id="personal-context" className="space-y-12">
            <h2 className="text-3xl font-bold tracking-tight">Example AI Prompt Structure</h2>
            <div className="p-6 bg-slate-900 text-slate-100 rounded-2xl font-mono text-sm overflow-auto">
              <p>
                I'm applying to the University of Washington to study Computer Science with an interest in accessibility
                technology. I have a younger sibling with cerebral palsy, which inspired me to develop adaptive gaming
                controllers. I'm interested in the Allen School's Make4All research group and Seattle's thriving tech
                community. Help me develop essay ideas that showcase my technical skills and commitment to inclusive
                design.
              </p>
            </div>
          </section>

          <section id="diversity" className="space-y-12 bg-secondary/20 p-12 md:p-20 rounded-[3rem]">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Approaching UW's Personal Insight Questions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              UW uses personal insight questions similar to the UC system, asking about leadership, creativity,
              educational barriers, and community contributions. Each question requires specific examples and meaningful
              reflection rather than general statements about your qualities.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#4b2e83]">Leadership Question Strategy</h3>
                <p className="text-lg leading-relaxed mb-4">
                  When writing about leadership experiences, provide AI with: the specific role and context of your
                  leadership, challenges you faced and how you addressed them, the impact of your actions on others,
                  what you learned about yourself and leadership, and how you'll apply these lessons at UW.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#4b2e83]">Addressing Creative Problem-Solving</h3>
                <p className="text-lg leading-relaxed">
                  For questions about creativity and innovation, prompt AI with the specific problem you identified,
                  your creative solution and thinking process behind it, obstacles you encountered and how you overcame
                  them, the outcome and what you learned, and how this experience demonstrates your problem-solving
                  approach.
                </p>
              </div>
            </div>
          </section>

          <section id="supplemental" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Crafting Your UW-Specific Supplemental Essays</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              If UW requires additional supplemental essays, these typically focus on why you're interested in your
              chosen major, what you'll contribute to the university, or how UW's resources align with your goals. These
              essays require specific knowledge of UW's offerings and clear articulation of your fit.
            </p>

            <div className="p-8 bg-secondary/30 rounded-2xl border border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-[#4b2e83]">Key Elements to Include</h3>
              <ul className="space-y-4 text-lg leading-relaxed">
                <li>• Your specific school or program within UW</li>
                <li>• Particular professors, labs, or research areas that interest you</li>
                <li>• Courses or academic opportunities you're excited about</li>
                <li>• Student organizations or activities you'd pursue</li>
                <li>• How UW's location in Seattle enhances your goals</li>
              </ul>
            </div>
          </section>

          <section id="refining" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Refining AI-Generated Content</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              After receiving AI suggestions, personalize the content by replacing general statements with specific
              anecdotes from your life, adjusting language to match your natural voice and style, adding vivid details
              and concrete examples, removing clichés and overused phrases, verifying all facts about UW programs and
              offerings, and ensuring every sentence contributes to your overall narrative.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Read your essay aloud. If it doesn't sound like something you would naturally say, continue revising until
              your authentic voice emerges clearly.
            </p>
          </section>

          <section id="advanced" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Advanced AI Prompting Strategies</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Enhance your AI collaboration through sophisticated follow-up prompts like:
            </p>
            <ul className="space-y-4 text-lg leading-relaxed">
              <li>
                <strong>For weak openings:</strong> "This introduction doesn't capture attention. Suggest three
                alternative openings that immediately show my personality and connect to the prompt."
              </li>
              <li>
                <strong>For abstract sections:</strong> "I'm being too abstract in this section. Help me create a
                specific scene or example that illustrates this point."
              </li>
              <li>
                <strong>For forced connections:</strong> "The connection between my experience and UW feels forced. Help
                me create a more organic transition that shows why UW specifically is right for me."
              </li>
              <li>
                <strong>For critical review:</strong> "Review this essay from a UW admissions officer's perspective.
                Identify any sections that feel generic, inauthentic, or could be strengthened with more specific UW
                references or personal details."
              </li>
            </ul>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">University of Washington Essay FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How competitive are UW's essay prompts in admissions decisions?",
                  a: "Very competitive. UW receives 50,000+ applications annually. Your essays must show genuine engagement with the university's values, not generic reasons for applying.",
                },
                {
                  q: "Should I mention specific UW programs in my essays?",
                  a: "Yes, absolutely. Mention specific schools, research areas, or opportunities that align with your goals. This shows serious research and genuine interest.",
                },
                {
                  q: "How do I address Seattle's importance to my application?",
                  a: "Focus on specific aspects beyond weather. Discuss Seattle's tech industry, environmental initiatives, nonprofit sector, or cultural institutions that connect to your interests.",
                },
                {
                  q: "What if my achievements don't seem 'big' enough?",
                  a: "UW values impact over scale. A meaningful project within your community is more compelling than a generic achievement. Focus on what you learned and how it changed your perspective.",
                },
                {
                  q: "How do I balance being authentic while being strategic?",
                  a: "Strategy is about choosing which authentic parts of yourself to highlight, not fabricating stories. Answer the prompt directly and let your genuine interests shine through.",
                },
                {
                  q: "Can I discuss multiple interests in one essay?",
                  a: "Yes, but ensure they're cohesive. Show how different experiences connect to your overall narrative and goals at UW.",
                },
                {
                  q: "Should I mention UW's diversity and inclusion values?",
                  a: "Yes, if it's genuine and specific to your experiences. Discuss concrete ways you've engaged with or contributed to diverse communities.",
                },
                {
                  q: "How many UW-specific details should I include?",
                  a: "At least 3-5 specific references (programs, professors, research centers, student organizations). Shows genuine research without being excessive.",
                },
                {
                  q: "Is it okay to discuss challenges in my essays?",
                  a: "Yes, but frame them as opportunities for growth. Focus on resilience, lessons learned, and how challenges shaped your character and goals.",
                },
                {
                  q: "What tone should I use in UW essays?",
                  a: "Professional but personable. Avoid overly academic jargon, but maintain clarity and sophistication. Let your voice come through while being respectful.",
                },
                {
                  q: "Can I use humor in my UW essays?",
                  a: "Yes, if it's natural and appropriate. Humor can show personality, but ensure it doesn't undermine the seriousness of your application.",
                },
                {
                  q: "How do I verify facts about UW programs?",
                  a: "Visit UW's official website, contact department advisors, and review current course catalogs. Never cite programs or opportunities that don't exist.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#4b2e83] transition-colors text-left">
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

      {/* ... existing footer ... */}
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
                    className={`transition-colors ${link.href === "/uw-essay-prompts" ? "text-[#4b2e83] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
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
