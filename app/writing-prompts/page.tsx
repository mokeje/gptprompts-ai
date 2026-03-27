import { PenTool } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How to Use AI for Creative Writing: Complete Prompting Guide | GPTPrompts.AI",
  description:
    "Master creative writing with AI. Learn comprehensive prompting strategies for brainstorming, character development, prose refinement, editing, and maintaining your unique writer's voice.",
}

export default function WritingPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-primary text-primary-foreground py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <PenTool className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Creative <br />
            <span className="italic font-serif opacity-90">Writing.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Cure writer's block forever. Our comprehensive guide covers brainstorming, character development, prose
            refinement, editing, and maintaining your authentic writer's voice when working with AI.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Complete Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "understanding", label: "AI's Role in Writing", num: "01" },
                  { id: "context", label: "Setting Up Your Environment", num: "02" },
                  { id: "ideas", label: "Generating Ideas", num: "03" },
                  { id: "characters", label: "Character Development", num: "04" },
                  { id: "plots", label: "Plot and Structure", num: "05" },
                  { id: "scenes", label: "Writing Scenes", num: "06" },
                  { id: "style", label: "Refining Your Style", num: "07" },
                  { id: "dialogue", label: "Dialogue Writing", num: "08" },
                  { id: "worldbuilding", label: "Worldbuilding", num: "09" },
                  { id: "editing", label: "Editing & Revision", num: "10" },
                  { id: "voice", label: "Maintaining Your Voice", num: "11" },
                  { id: "faq", label: "Creative Writing FAQ", num: "12" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-primary transition-colors"
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
          <article id="understanding" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Understanding AI's Role in Creative Writing</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              AI can serve as brainstorming partner generating ideas and possibilities, writing coach providing feedback
              on structure and style, collaborative tool helping develop characters and plots, editing assistant
              identifying weaknesses, and creative catalyst sparking inspiration when you're stuck. However, AI should
              never replace your creative vision, unique voice, or the authentic human experiences that make writing
              meaningful.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The best creative writing with AI assistance uses the technology to enhance rather than replace human
              creativity. Your imagination, emotional intelligence, life experiences, and artistic vision are
              irreplaceable.
            </p>
          </article>

          <article id="context" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Setting Up Your Creative Writing Environment</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Before prompting AI for creative assistance, establish clear context about your project. Include genre and
              subgenre specifics, tone and mood you're aiming for, target word count or length, intended audience, any
              stylistic preferences or influences, and what aspect you need help with specifically.
            </p>
            <p className="text-sm bg-muted p-4 rounded italic">
              Example: "I'm writing a psychological thriller novel for adult readers, aiming for 80,000 words. The tone
              should be dark and suspenseful with unreliable narrator elements. I'm developing my protagonist and need
              help creating a complex, morally ambiguous character with compelling psychological depth."
            </p>
          </article>

          <article id="ideas" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Generating Story Ideas and Concepts</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When you need fresh ideas, AI can generate numerous concepts to spark your imagination. Provide the genre
              or type of story, themes you want to explore, any specific elements you want to include, and how many
              ideas you'd like. Ask AI to provide variety and avoid predictable ideas, pushing beyond first-thought
              concepts to more original territory.
            </p>
          </article>

          <article id="characters" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Developing Compelling Characters</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Characters drive great stories. When developing characters, prompt with their role in your story,
              personality traits or contradictions you want to explore, their background or circumstances, the character
              arc you envision, and what makes them unique or compelling. For dialogue, provide character background,
              personality, their relationship with other characters, what each wants from conversations, and any subtext
              or unspoken tensions.
            </p>
          </article>

          <article id="plots" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Crafting Compelling Plots and Structure</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Story structure provides framework for your narrative. When working on plot structure, provide your
              premise and main characters, the type of structure you're considering, key plot points or scenes you know
              you want, and where you're struggling structurally. AI can help develop plots, identify pacing issues, and
              structure your story effectively.
            </p>
          </article>

          <article id="scenes" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Writing and Refining Scenes</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Strong scenes have clear purposes, vivid details, and emotional resonance. When drafting scenes, provide
              the scene's purpose in your story, the characters involved and their emotional states, the setting and
              atmosphere, what needs to happen, and the tone or mood. For sensory-rich scenes, focus on sight, sound,
              and smell to build atmosphere.
            </p>
          </article>

          <article id="style" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Refining Your Writing Style</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              AI can help you develop and refine your prose style, but your unique voice should remain. When analyzing
              prose, share a passage and ask for feedback on sentence variety, word choice, rhythm, and imagery. Ask AI
              to identify strengths and weaknesses, then suggest improvements that elevate language while maintaining
              clarity. AI can help eliminate common weaknesses like telling vs. showing, excessive adjectives, and
              overwriting.
            </p>
          </article>

          <article id="dialogue" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Writing Dialogue That Sounds Natural</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Authentic dialogue reveals character, advances plot, and feels realistic without being mundane. When
              crafting dialogue, provide character background and personality, the relationship between characters, what
              each character wants, any subtext or unspoken tensions, and the scene's purpose. Real conversation
              includes fillers and interruptions, but written dialogue needs focus and purpose.
            </p>
          </article>

          <article id="worldbuilding" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Developing Setting and Worldbuilding</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Setting grounds your story. For speculative fiction, worldbuilding creates immersive alternate realities.
              When developing settings, include the type and location of setting, the time period, how setting affects
              plot or characters, the mood or atmosphere you want, and level of detail needed. For complex worlds,
              create comprehensive documents ensuring all elements are logically consistent.
            </p>
          </article>

          <article id="editing" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Editing and Revising with AI</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              AI can be a valuable editing partner. For structural editing, ask AI to analyze overall structure—does
              pacing work, are there sagging middle sections, do subplots integrate well? For line editing, get help
              with concision, awkward phrasing, and sentence variety. For proofreading, flag grammar, punctuation,
              spelling, typos, and consistency issues.
            </p>
          </article>

          <article id="voice" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Maintaining Your Unique Voice</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Your voice is what makes your writing yours. AI should enhance, not replace it. When using AI-generated
              content, always revise in your own voice. Regularly write without AI assistance to stay connected to your
              natural voice. Use AI for specific problems, not every sentence. Your final work must reflect your
              authentic artistic vision, emotional depth, and unique perspective.
            </p>
          </article>

          <article id="faq" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Creative Writing FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I lose my voice by using AI too much?",
                  a: "Possibly. Regular writing without AI helps you stay connected to your natural voice. Use AI as a tool for specific problems, not a crutch for every sentence.",
                },
                {
                  q: "Should I disclose AI assistance when publishing?",
                  a: "Consider your context. If AI was extensively used, disclosure might be appropriate. Your work should always be substantially your own creative vision.",
                },
                {
                  q: "How do I know when AI suggestions are actually good?",
                  a: "Trust your instincts. If a suggestion doesn't feel right for your story or characters, ignore it. You're the final authority on your work.",
                },
                {
                  q: "What's the best way to overcome writer's block?",
                  a: "Use specific intervention prompts. Ask: 'What's the worst thing that could happen to my character?' Then make it happen. Conflict resets momentum.",
                },
                {
                  q: "How much should I edit AI-generated content?",
                  a: "Significantly. Revise all AI content to match your style, voice, and story needs. AI outputs are starting points, not finished work.",
                },
                {
                  q: "Can I use AI for poetry and experimental writing?",
                  a: "Yes. AI can help with metaphor generation, structure exploration, and editing. But poetry especially requires your authentic voice and emotion.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-l-4 border-primary pl-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            {/* Brand */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">GPTPrompts.AI</h4>
              <p className="text-sm leading-relaxed opacity-70">
                The ultimate platform for mastering AI prompting across all models and use cases.
              </p>
            </div>

            {/* AI Models */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">AI Models</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                  { name: "Claude Prompts", href: "/claude-prompts" },
                  { name: "Gemini AI", href: "/gemini-ai-prompts" },
                  { name: "Kimi AI Prompts", href: "/kimi-ai-prompts" },
                  { name: "Midjourney", href: "/midjourney-prompts" },
                  { name: "Perplexity Prompts", href: "/perplexity-prompts" },
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
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">University Essays</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Common App Essays", href: "/common-app-essays" },
                  { name: "NYU Essays", href: "/nyu-essay-prompts" },
                  { name: "Princeton Essays", href: "/princeton-essays" },
                  { name: "Stanford Essays", href: "/stanford-essay-prompts" },
                  { name: "UC Essays", href: "/uc-essay-prompts" },
                  { name: "UChicago Essays", href: "/uchicago-essays" },
                  { name: "UMich Essays", href: "/umich-essay-prompts" },
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
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Career & Resources</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Resume Prompts", href: "/resume-prompts" },
                  { name: "Cover Letters", href: "/cover-letter-prompts" },
                  { name: "Essay Prompts", href: "/essay-prompts" },
                  { name: "Story Prompts", href: "/story-prompts" },
                  { name: "SQL Prompts", href: "/sql-prompts" },
                  { name: "Image Prompts", href: "/image-prompts" },
                  { name: "Free Prompts Library", href: "/free-ai-prompts" },
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
