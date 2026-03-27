import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Prompting for Creative Projects: Ideation and Brainstorming | GPTPrompts.AI",
  description:
    "Master creative AI prompting for ideation and brainstorming. Learn techniques to generate unique ideas, storylines, concepts, and creative directions using structured prompts.",
  keywords:
    "creative prompts, brainstorming AI, ideation prompts, content creation, storytelling, creative writing, design thinking",
}

export default function CreativeProjectsPrompts() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-br from-[#a855f7] to-[#d946ef] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Sparkles className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-70 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
            Creative <br />
            <span className="italic opacity-90">Ideation.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Unlock creative potential. Use structured prompts to brainstorm concepts, develop storylines, generate
            design directions, and explore ideas from multiple angles.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-6">Navigation</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "ideation", label: "Ideation Basics", num: "01" },
                  { id: "brainstorming", label: "Brainstorming", num: "02" },
                  { id: "storytelling", label: "Storytelling", num: "03" },
                  { id: "design", label: "Design Direction", num: "04" },
                  { id: "divergent", label: "Divergent Thinking", num: "05" },
                  { id: "refinement", label: "Concept Refinement", num: "06" },
                  { id: "faq", label: "Creative FAQ", num: "07" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-purple-600 transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs font-mono opacity-50 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-24">
          {/* Section 1 */}
          <section id="ideation" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Creative Ideation Fundamentals</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Prompting for creative projects leverages AI as a brainstorming partner, generating diverse ideas,
              exploring conceptual directions, and accelerating creative workflows. Designers, writers, marketers, and
              creative directors use these prompts to ideate faster while maintaining unique vision.
            </p>

            <Card className="p-8 bg-card/50 border-border">
              <h3 className="text-2xl font-bold mb-6">Creative Ideation Framework</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>The Divergent-Convergent Loop:</strong>
                </p>
                <ol className="ml-4 space-y-2 list-decimal">
                  <li>
                    <strong>Divergent Phase:</strong> Generate 20+ ideas without judgment (quantity over quality)
                  </li>
                  <li>
                    <strong>Convergent Phase:</strong> Evaluate, combine, and refine top 3-5 directions
                  </li>
                  <li>
                    <strong>Development:</strong> Deep-dive into chosen concepts with research and prototyping
                  </li>
                  <li>
                    <strong>Refinement:</strong> Iterate based on feedback and constraints
                  </li>
                </ol>
              </div>
            </Card>
          </section>

          {/* Section 2 */}
          <section id="brainstorming" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Brainstorming Prompts</h2>

            <div className="space-y-6">
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Rapid Ideation (20 Ideas)</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Generate 20 ideas for [PROJECT: e.g., "marketing campaign for eco-friendly fashion"]:

Constraints:
- Target audience: [AUDIENCE]
- Budget: [BUDGET LEVEL]
- Timeline: [TIMEFRAME]
- Key message: [MESSAGE]
- Forbidden: [AVOID IF POSSIBLE]

Format: Numbered list with 1-line pitch each. No filtering—go wild.`}
                </pre>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Concept Mashup Generator</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Mix unexpected elements for "[PROJECT]":

Element A: [THING/STYLE/GENRE]
Element B: [CONTRASTING THING]

Generate 10 mashup concepts combining A+B. Why they work. Examples.`}
                </pre>
              </Card>
            </div>
          </section>

          {/* Section 3 */}
          <section id="storytelling" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Storytelling and Narrative Prompts</h2>

            <div className="space-y-6">
              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Hero's Journey Framework</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Create story using Hero's Journey for "[CONCEPT]":

Protagonist: [CHARACTER DETAILS]
Inciting incident: [CHALLENGE]
Stakes: [WHAT'S AT RISK]
Emotional core: [THEME]
Resolution: [DESIRED OUTCOME]

Map:
1. Ordinary world → 2. Call to adventure → 3. Refusal
4. Meeting mentor → 5. Crossing threshold → 6. Tests/allies/enemies
7. Approach → 8. Ordeal → 9. Reward → 10. Road back
11. Resurrection → 12. Return with elixir`}
                </pre>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="text-xl font-bold mb-4">Multiple Narrative Angles</h3>
                <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                  {`Tell story of "[PREMISE]" from 3 perspectives:
1. [CHARACTER A] POV
2. [CHARACTER B] POV
3. [NEUTRAL/OMNISCIENT] POV

Same events, different emotional truths. Highlight contradictions.`}
                </pre>
              </Card>
            </div>
          </section>

          {/* Section 4 */}
          <section id="design" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Design Direction Prompts</h2>

            <Card className="p-8 border-border">
              <h3 className="text-xl font-bold mb-4">Visual Direction Board Prompt</h3>
              <pre className="bg-background rounded p-6 overflow-x-auto text-sm mb-4 border border-border">
                {`Create design direction for "[PROJECT]":

Brand adjectives: [3-5]
Color mood: [EMOTIONAL INTENTION]
Typography personality: [STYLE DESCRIPTORS]
Imagery style: [AESTHETIC: minimalist/maximalist/surreal etc.]
Reference inspiration: [ARTISTS/BRANDS/ERAS]

Describe:
- Overall visual aesthetic (paragraph)
- 3 color palettes (HEX + psychology)
- 2 typography pairings (font combos)
- 5 mood reference images (descriptions or artists)`}
              </pre>
            </Card>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Creative Prompting FAQ</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  How do I generate truly original ideas?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Use the Concept Mashup or "forbidden elements" prompts to combine unexpected things. AI excels at
                  finding intersections. You filter through garbage to find gold—expect 80% bad ideas, 20% viable
                  directions. Divergent thinking beats filtering.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  Should I share my brand guidelines with AI?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, but give guardrails, not prescriptions. Example: "Don't use serif fonts" is helpful; "only use
                  Helvetica" limits creativity. Share values, not tactics. AI works best when constrained by purpose
                  (mission, audience, problem) rather than predetermined solutions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">Can AI replace creative thinking?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No. AI generates options fast; humans evaluate, refine, and make creative judgments. Think of AI as a
                  brainstorming partner who's always on, never tired, but lacks taste. Your job is curation, critique,
                  and taste-making.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  How many prompts should I iterate?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Try 3-5 prompt variations exploring different angles (mashups, constraints, frameworks). If results
                  plateau, move to refinement phase. Spending hours on prompt tweaking yields diminishing returns—
                  better to evaluate 50 ideas than perfect one prompt.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">
                  How do I ensure ideas aren't derivative?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Research what's already been done in your space, then prompt: "Ideas that are NOT like [existing
                  campaigns]." Provide reference to what you're trying to avoid. Also use "contrarian" or "subvert
                  expectations" prompts to push against conventions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6" className="border-border">
                <AccordionTrigger className="text-lg font-semibold">What if AI ideas feel generic?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Add specificity to prompts. Instead of "modern design," say "Y2K revival meets dark academia." Instead
                  of "funny," say "absurdist humor + British wit." The more specific your constraints, the less generic
                  the output. AI responds to texture.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16 px-6 md:px-12 mt-24 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-bold text-foreground mb-4">Creative</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/chatgpt-creative-writing" className="hover:text-foreground transition-colors">
                  Creative Writing
                </Link>
              </li>
              <li>
                <Link href="/story-prompts-creative" className="hover:text-foreground transition-colors">
                  Story Prompts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Tools</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/midjourney-prompts" className="hover:text-foreground transition-colors">
                  Midjourney
                </Link>
              </li>
              <li>
                <Link href="/dalle-3-guide" className="hover:text-foreground transition-colors">
                  DALL-E 3
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-foreground transition-colors">
                  All Pages
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 GPTPrompts.AI. Unlock creative potential with AI-powered ideation and brainstorming.</p>
        </div>
      </footer>
    </main>
  )
}
