import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star, Users } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "University of Michigan Essay Prompts 2025: How to Use AI for UMich Essays | GPTPrompts.AI",
  description:
    "Comprehensive guide to UMich supplemental essays. Strategies for the community essay, Why Michigan prompt, and advanced AI prompting techniques.",
}

export default function UMichEssayPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#00274c] text-white py-32 px-6 md:px-12 relative overflow-hidden border-b-8 border-[#ffcb05]">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Star className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            UMich <br />
            <span className="italic opacity-90 text-[#ffcb05]">Prompts 2025.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Go Blue! Our roadmap to the University of Michigan supplemental essays: Decoding the Community essay, the
            Why Michigan prompt, and AI-powered strategies for competitive programs.
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
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#00274c] mb-6">UMich Essay Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "intro", label: "Michigan's Philosophy", num: "01" },
                  { id: "prompting", label: "Strategic AI Prompts", num: "02" },
                  { id: "community", label: "Community Essay", num: "03" },
                  { id: "why-michigan", label: "Why Michigan", num: "04" },
                  { id: "academic", label: "Academic Passion", num: "05" },
                  { id: "leadership", label: "Leadership & Impact", num: "06" },
                  { id: "refining", label: "Refining Content", num: "07" },
                  { id: "faq", label: "UMich FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#00274c] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight mb-8">Understanding Michigan's Application Philosophy</h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              The University of Michigan stands among the world's premier public research universities, known for its
              academic excellence, vibrant campus culture, and commitment to leadership and service. Writing successful
              essays for UMich requires demonstrating intellectual curiosity, authentic passion, and clear understanding
              of what makes Michigan unique.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Michigan takes a holistic approach to admissions, seeking students who will thrive academically while
              contributing meaningfully to the campus community. The university values intellectual vitality, diverse
              perspectives, leadership potential, and genuine enthusiasm for Michigan's collaborative learning
              environment. Your supplemental essays serve as opportunities to showcase dimensions of yourself that
              transcend grades and test scores.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              UMich receives over 80,000 applications each year. The supplemental essays typically include the "Why
              Michigan" essay and several shorter responses addressing community, academic interests, and personal
              experiences. Each requires thoughtful, specific responses rather than generic college application
              rhetoric.
            </p>
          </article>

          <section id="prompting" className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00274c]/10 rounded-xl">
                <Users className="w-8 h-8 text-[#00274c]" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Crafting Strategic AI Prompts for Michigan Essays</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Successful AI-assisted essay writing begins with providing rich context and specific details. Generic
              prompts generate generic content. Detailed prompts that incorporate your unique experiences, values, and
              knowledge of Michigan will produce personalized starting points for authentic essays.
            </p>

            <div className="p-8 bg-secondary/30 rounded-2xl border border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-[#00274c]">Establishing Comprehensive Context</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Before requesting essay assistance, create a detailed foundation by sharing:
              </p>
              <ul className="space-y-3 text-lg leading-relaxed list-disc list-inside">
                <li>Your intended school or college within Michigan</li>
                <li>Specific programs or opportunities that interest you</li>
                <li>Relevant academic and extracurricular experiences</li>
                <li>Personal values and what drives you</li>
                <li>Concrete reasons why Michigan appeals to you specifically</li>
                <li>How your background aligns with Michigan's community</li>
              </ul>
            </div>
          </section>

          <section id="community" className="space-y-12 bg-secondary/20 p-12 md:p-20 rounded-[3rem]">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Mastering the Community Essay</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Michigan often asks students to describe communities they belong to and how these communities have shaped
              them. This essay reveals your identity, values, and capacity to contribute to Michigan's diverse
              community.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#00274c]">AI Prompting Strategy</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Effective AI prompts should describe the specific community you want to discuss, your role within this
                  community and what it means to you, how this community influenced your perspective or values, and how
                  your community experience prepares you to contribute at Michigan.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#00274c]">What Admissions Officers Look For</h3>
                <ul className="space-y-2 text-lg leading-relaxed list-disc list-inside">
                  <li>Genuine reflection on community experiences</li>
                  <li>Specific examples rather than generalizations</li>
                  <li>Evidence of personal growth and change</li>
                  <li>Connection to Michigan's values and opportunities</li>
                  <li>Authentic voice and real personality</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="why-michigan" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">The "Why Michigan" Essay</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Michigan's signature supplemental essay asks why you want to attend the university and how you'll
              contribute to the community. This essay requires specific knowledge of Michigan's offerings and clear
              articulation of your fit with the university's values and culture.
            </p>

            <div className="p-8 bg-secondary/30 rounded-2xl border border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-[#00274c]">Key Elements to Include</h3>
              <ul className="space-y-3 text-lg leading-relaxed list-disc list-inside">
                <li>Your specific school or college within Michigan</li>
                <li>Particular courses, professors, or research areas</li>
                <li>Student organizations or activities you'd pursue</li>
                <li>Aspects of Michigan's culture or values that resonate</li>
                <li>How your background and experiences align with Michigan</li>
                <li>Concrete ways you'll contribute to campus</li>
              </ul>
            </div>
          </section>

          <section id="academic" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Writing About Academic Passions and Intellectual Curiosity
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Michigan values students who demonstrate genuine intellectual curiosity and passion for learning. Your
              essays should convey authentic enthusiasm for your intended field of study and desire to engage deeply
              with academic challenges.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#00274c]">AI Prompting Framework</h3>
                <p className="text-lg leading-relaxed">
                  When prompting AI about academic interests, include the specific field or major you're passionate
                  about, experiences that sparked or developed this interest, questions or problems that fascinate you,
                  how Michigan's resources would enable you to pursue these interests, and how your academic goals
                  connect to broader aspirations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#00274c]">Avoiding Common Mistakes</h3>
                <ul className="space-y-2 text-lg leading-relaxed list-disc list-inside">
                  <li>Don't simply state career goals—show genuine curiosity</li>
                  <li>Avoid generic references to "excellent programs"</li>
                  <li>Connect specific Michigan resources to your interests</li>
                  <li>Demonstrate depth of thinking, not just achievements</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="leadership" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Showcasing Leadership and Impact</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Michigan seeks students who demonstrate leadership potential and commitment to positive impact. Your
              essays should highlight these qualities through specific examples and reflection on your growth as a
              leader.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#00274c]">When Prompting AI About Leadership</h3>
                <p className="text-lg leading-relaxed">
                  Describe your specific role and responsibilities, challenges you faced and how you addressed them, the
                  measurable impact of your leadership, what you learned about leadership and yourself, and how you'll
                  apply these lessons at Michigan. Focus on how you motivated others and adapted your approach when
                  initial strategies failed.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#00274c]">Balancing Confidence with Humility</h3>
                <p className="text-lg leading-relaxed">
                  Emphasize growth and learning rather than just accomplishments. Show how you've learned from failures
                  and adapted. Demonstrate that leadership is about empowering others rather than being in charge. Let
                  your authentic experiences shine through without exaggeration.
                </p>
              </div>
            </div>
          </section>

          <section id="refining" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">Refining AI-Generated Content for Authenticity</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              After receiving AI suggestions, your critical work begins. Transform generic content into authentic
              personal essays by replacing vague statements with specific details from your life, adjusting language to
              match your natural speaking voice, adding concrete examples and sensory details, removing clichéd phrases
              and overused expressions, and ensuring every sentence advances your narrative.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Read your essay aloud to yourself or someone who knows you well. If the writing doesn't sound like you,
              continue revising until your authentic voice emerges clearly. The best essays sound like the applicant
              talking to an intelligent friend, not reading from a textbook.
            </p>
          </section>

          <section id="faq" className="space-y-12">
            <h2 className="text-4xl font-bold tracking-tight">University of Michigan Essay FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How important are the supplemental essays in Michigan admissions decisions?",
                  a: "Very important, especially for competitive programs. With Michigan's holistic review, essays can be the distinguishing factor between qualified candidates. They help admissions officers understand who you are beyond your resume.",
                },
                {
                  q: "Should I mention specific Michigan programs in my essays?",
                  a: "Absolutely. Research and mention specific courses, professors, research labs, student organizations, or campus traditions. This demonstrates genuine interest and serious research.",
                },
                {
                  q: "What if I'm applying to a competitive program like Ross Business School?",
                  a: "Essays carry even more weight. These programs have additional requirements and higher expectations. Show exceptional self-awareness, advanced understanding of the program's unique features, and specific examples of academic excellence.",
                },
                {
                  q: "Can I discuss multiple communities in the community essay?",
                  a: "Yes, but show how they connect and shape your identity. Avoid listing unrelated communities. Instead, weave them into a cohesive narrative about who you are.",
                },
                {
                  q: "How do I balance vulnerability with strength in my essays?",
                  a: "Show growth through challenges. Don't present yourself as perfect, but don't dwell on victimhood. Focus on what you learned and how you moved forward.",
                },
                {
                  q: "Should I mention Michigan's location or prestige?",
                  a: "Avoid generic statements about Ann Arbor or Michigan's reputation. Instead, discuss specific resources, research opportunities, or how the location enhances your goals.",
                },
                {
                  q: "How many Michigan-specific details should I include?",
                  a: "At least 4-6 specific references across all essays (professors, research centers, student organizations, courses). Shows genuine research without being excessive.",
                },
                {
                  q: "What tone should I use in Michigan essays?",
                  a: "Professional but personable. Avoid academic jargon and overly formal language. Write as if you're talking to an intelligent peer. Let your personality come through.",
                },
                {
                  q: "Can I use humor in my Michigan essays?",
                  a: "Yes, if it's natural and appropriate. Forced humor is awkward. If you're naturally funny, let that personality shine through while maintaining professionalism.",
                },
                {
                  q: "How specific should I be with examples?",
                  a: "Very specific. Generic examples weaken your essay. Use concrete details: names, dates, dialogue, sensory descriptions, and specific outcomes.",
                },
                {
                  q: "Is there flexibility in how I interpret the prompts?",
                  a: "Yes. The prompts are intentionally open-ended. You have creative freedom in how you interpret and respond, as long as you address the core question authentically.",
                },
                {
                  q: "What if my achievement doesn't seem 'big' enough?",
                  a: "Michigan values impact and growth over scale. A meaningful project within your community is more compelling than a generic achievement. Focus on what you learned and how it changed your perspective.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-2xl font-bold hover:text-[#00274c] transition-colors text-left">
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
                { label: "UC Essays", href: "/uc-essay-prompts" },
                { label: "UMich Essays", href: "/umich-essay-prompts" },
                { label: "USC Essays", href: "/usc-essay-prompts" },
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
                    className={`transition-colors ${link.href === "/umich-essay-prompts" ? "text-[#00274c] font-bold" : "hover:text-primary opacity-80 hover:opacity-100"}`}
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
