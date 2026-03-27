import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Book } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How to Use AI for Story Writing: Complete Prompting Guide | GPTPrompts.AI",
  description:
    "Master story development with AI. Learn comprehensive prompting strategies for plot creation, character development, dialogue, worldbuilding, and overcoming writer's block.",
}

export default function StoryPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#f59e0b] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Book className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Story <br />
            <span className="italic opacity-90 text-amber-200">Prompts.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Unleash your imagination. Our comprehensive guide features story development frameworks, character creation
            strategies, plotting techniques, and dialogue crafting for writers and AI collaborators.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#f59e0b] mb-6">Complete Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "understanding", label: "AI as Story Partner", num: "01" },
                  { id: "concepts", label: "Generating Concepts", num: "02" },
                  { id: "characters", label: "Developing Characters", num: "03" },
                  { id: "plotting", label: "Plotting Your Story", num: "04" },
                  { id: "scenes", label: "Writing Scenes", num: "05" },
                  { id: "dialogue", label: "Crafting Dialogue", num: "06" },
                  { id: "worldbuilding", label: "Worldbuilding", num: "07" },
                  { id: "genre", label: "Genre-Specific Tips", num: "08" },
                  { id: "revision", label: "Revision & Editing", num: "09" },
                  { id: "faq", label: "Story FAQ", num: "10" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#f59e0b] transition-colors"
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
            <h2 className="text-4xl font-bold tracking-tight">AI as Your Story Development Partner</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              AI serves as brainstorming partner, story architect, character developer, dialogue coach, plot
              troubleshooter, and creative catalyst. However, your creative vision, emotional intelligence, and
              storytelling instincts should always guide the process. The best stories emerge from collaboration between
              AI's pattern recognition and your human creativity, life experience, and artistic sensibility.
            </p>
          </article>

          <article id="concepts" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Generating Original Story Concepts</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Strong stories begin with compelling premises. When brainstorming, specify your genre, themes you want to
              explore, target audience and format, tone and style preferences, and any specific elements you want to
              include. Ask AI to generate high-concept premises, "what if" scenarios, or combinations of unexpected
              elements that push toward genuinely original territory.
            </p>
            <p className="text-sm bg-muted p-4 rounded italic">
              Example: "Generate 10 science fiction concepts exploring themes of artificial intelligence and humanity.
              Each should include unique premise, central conflict, moral dilemma. Avoid clichés like robot uprising or
              Skynet scenarios."
            </p>
          </article>

          <article id="characters" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Developing Compelling Characters</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Characters drive great stories. When developing main characters, provide their role in your story, the
              story type and genre, core conflict or character arc you envision, specific traits or backgrounds you've
              imagined, and what makes them compelling. For antagonists, emphasize they should have understandable
              motivations, their own moral code, and force protagonists to question their righteousness.
            </p>
            <p className="text-sm bg-muted p-4 rounded italic">
              For secondary characters: "Create 5 supporting characters each with their own personality, function in
              story, and relationship to protagonist. Avoid stereotypes—make each distinctive and purposeful."
            </p>
          </article>

          <article id="plotting" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Plotting Your Story</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Structure gives your story shape and direction. When creating outlines, provide your premise and main
              characters, intended story length, structure preference (three-act, hero's journey, save the cat, etc.),
              key scenes you know you want, and where you need structural help. Ask for approximately 8-15 major plot
              points with setup, inciting incident, complications, midpoint reversal, and climax.
            </p>
          </article>

          <article id="scenes" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Writing and Developing Individual Scenes</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Strong scenes have clear purposes, vivid details, and move the story forward. When writing scenes, provide
              the scene's purpose in overall story, characters present and their emotional states, setting and
              atmosphere, what needs to happen, what needs to be revealed, tone and pacing, and POV and narrative style.
            </p>
          </article>

          <article id="dialogue" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Crafting Authentic Dialogue</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Dialogue reveals character, advances plot, and brings scenes to life. When developing dialogue, provide
              each character's background and personality, their relationship and power dynamics, what each wants from
              the conversation, subtext or hidden agendas, and the scene's emotional temperature. Real conversation
              includes fillers and interruptions, but written dialogue needs focus.
            </p>
          </article>

          <article id="worldbuilding" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Worldbuilding and Setting</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Setting grounds your story. For speculative fiction, worldbuilding creates immersive alternate realities.
              Include the type and location of setting, time period, how setting affects plot or characters, mood or
              atmosphere you want, and level of detail needed. For complex worlds, create comprehensive documents
              covering government structure, daily life, technology, social issues, and how elements logically fit
              together.
            </p>
          </article>

          <article id="genre" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Genre-Specific Story Techniques</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Different genres have distinct conventions and reader expectations. For mystery, strategically place clues
              and create believable red herrings while ensuring the solution is fair but surprising. For romance,
              develop organic conflicts stemming from characters rather than miscommunication. For science
              fiction/fantasy, introduce complex systems naturally through character experience and plot rather than
              info-dumping. For horror, build atmosphere and dread through subtle wrongness and escalating tension.
            </p>
          </article>

          <article id="revision" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Revision and Editing</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              AI can identify and fix story problems during revision. For big-picture issues, provide a synopsis and ask
              for feedback on plot holes, pacing issues, character inconsistencies, underdeveloped subplots, or
              unsatisfying resolutions. For individual scenes, diagnose what's not working and suggest specific
              revisions.
            </p>
          </article>

          <article id="faq" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Story Mastery FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What if I get stuck in the middle?",
                  a: "Ask: 'What's the worst thing that could happen to my character right now?' Then make it happen. Conflict is the engine of story.",
                },
                {
                  q: "How can AI help with world-building?",
                  a: "AI is great for consistency. Give it your world's rules and ask it to identify consequences. This helps find details you might have missed.",
                },
                {
                  q: "Can I use prompts for short stories or novels?",
                  a: "Both. A prompt that sparks flash fiction could easily be the inciting incident for an epic. The prompt is just the seed.",
                },
                {
                  q: "How do I maintain my unique voice?",
                  a: "Always revise AI-generated content in your own voice. Use AI for specific problems, not every sentence. Write without AI regularly to stay connected to your natural voice.",
                },
                {
                  q: "Should I disclose AI use when publishing?",
                  a: "Consider disclosing depending on context and how extensively AI was used. Your work should be substantially your own creative vision.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-4">
                  <AccordionTrigger className="text-xl font-bold hover:text-[#f59e0b] transition-colors text-left">
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
    </main>
  )
}
