"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useEffect } from "react"

export default function CreativeWritingPage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "ChatGPT for Creative Writing: Storytelling and Character Development Prompts",
      description:
        "Master ChatGPT for creative writing with storytelling prompts, character development frameworks, and narrative structure techniques.",
      author: { "@type": "Organization", name: "GPTPrompts.AI" },
    }
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }, [])

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            ChatGPT for Creative Writing
          </h1>
          <p className="text-xl max-w-3xl opacity-90">
            Transform your storytelling with AI-powered prompts for character development, narrative structure, and
            dialogue crafting.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-6">Guide Sections</h3>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { id: "why-creative", label: "Why ChatGPT for Writing", num: "01" },
                { id: "story-ideas", label: "Story Idea Generation", num: "02" },
                { id: "character-dev", label: "Character Development", num: "03" },
                { id: "dialogue", label: "Dialogue & Voice", num: "04" },
                { id: "narrative", label: "Narrative Structure", num: "05" },
                { id: "worldbuilding", label: "World-Building", num: "06" },
                { id: "productivity", label: "Productivity Prompts", num: "07" },
                { id: "advanced", label: "Advanced Chains", num: "08" },
                { id: "faq", label: "FAQ", num: "09" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-center justify-between hover:text-amber-600 transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-bold text-muted-foreground">{item.num}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-16">
          <section id="why-creative" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-amber-600 uppercase">01</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">Why ChatGPT Excels at Creative Writing</h2>
            </div>
            <div className="prose prose-lg max-w-none space-y-4">
              <p>
                ChatGPT transforms creative writing by generating vivid story ideas, fleshing out complex characters,
                and refining narrative flow through targeted prompts. Writers and authors use these storytelling prompts
                to overcome blocks, develop authentic dialogue, and structure compelling fiction without losing their
                unique voice.
              </p>
              <Card className="p-6 bg-amber-50 border-amber-200">
                <h4 className="font-bold mb-3">Key Benefits:</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Rapid Ideation:</strong> Story concepts in seconds
                  </li>
                  <li>
                    <strong>Character Depth:</strong> Backstories, motivations, arcs
                  </li>
                  <li>
                    <strong>Narrative Polish:</strong> Pacing fixes, dialogue tightening
                  </li>
                  <li>
                    <strong>Genre Adaptability:</strong> Customizable to any writing style
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="story-ideas" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-amber-600 uppercase">02</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Story Idea Generation Prompts</h2>
            </div>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Genre-Specific Plot Generators</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm mb-4">
                  {`Generate 5 story premises in [GENRE: fantasy/sci-fi/mystery] with these constraints:
- Protagonist: [AGE/OCCUPATION/FLAW]
- Setting: [WORLD/TIME PERIOD]  
- Core conflict: [PERSONAL/SOCIETAL/EXISTENTIAL]
- Twist ending potential

Format each as:
Title: [Catchy 5-7 words]
Logline: [30-word hook]
Key scenes: [3 pivotal moments]
Themes: [2-3 emotional truths]

Example Use: "Protagonist: 30yo barista with anxiety. Setting: 1920s Paris. Core conflict: personal. Genre: romance."`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">"What If?" Scenario Expander</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`Take this premise: "[YOUR IDEA]". Expand into full story treatment:

1. World-building details (5 sensory elements)
2. 3 supporting characters + their secrets
3. 5-act structure outline (inciting incident → climax)
4. Emotional arc for protagonist
5. 3 possible endings (hopeful/tragic/bittersweet)`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="character-dev" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-amber-600 uppercase">03</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Character Development Prompts</h2>
            </div>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Deep Character Profiles</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm mb-4">
                  {`Create a character profile for [NAME], [AGE], [ROLE IN STORY].

Include:
PSYCHOLOGICAL: Core desire, fatal flaw, moral grey area
BACKSTORY: 3 formative events (1 childhood, 1 teenage, 1 recent)
ARC POTENTIAL: What breaks them vs what redeems them
QUIRKS: 5 specific mannerisms, speech patterns, fears
RELATIONSHIPS: How they clash with [OTHER CHARACTER]

Make them complex, contradictory, impossible to reduce to stereotype.`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Character Interview Technique</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm mb-4">
                  {`You are [CHARACTER NAME], [DESCRIPTION]. Respond in first person to my interview questions as if we're building your backstory for a novel. Stay in character completely.

First question: What's the worst thing you've ever done, and do you think you were justified?`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Ensemble Cast Dynamics</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`Create relationship web for these 5 characters: [LIST NAMES/ROLES].

Output as table:
| Character | Ally | Rival | Secret Keeper | Betrays |
|-----------|------|-------|---------------|---------|
| [Name]    |      |       |               |         |

Include 3 major group conflicts + 1 secret that changes everything when revealed.`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="dialogue" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-amber-600 uppercase">04</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Dialogue and Voice Prompts</h2>
            </div>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Era/Character-Authentic Dialogue</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`Write dialogue exchange between [CHARACTER A] and [CHARACTER B] arguing about [TOPIC].

Voice requirements:
A: [speech patterns: formal/stutter/long sentences/etc.]
B: [contrasting style: slang/direct/short sentences/etc.] 
Setting: [LOCATION/TENSION LEVEL]
Stakes: [what's really at risk]

5 exchanges max. Subtext > stated conflict.`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Distinct Character Voices</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`Rewrite this generic dialogue with 4 distinct character voices:

[PASTE DIALOGUE]

Characters:
1. [NERDY PROFESSOR]: academic jargon, hedges
2. [STREET SMART COP]: clipped, cynical, idioms  
3. [TEEN GENIUS]: valley girl + physics references
4. [WEARY DETECTIVE]: 1940s noir, world-weary`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="narrative" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-amber-600 uppercase">05</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Narrative Structure and Plotting</h2>
            </div>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Three-Act Breakdown</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`Restructure this plot summary into tight 3-act structure: [PASTE SUMMARY]

Act 1 (25%): Normal world → Inciting incident → Doorway of no return
Act 2 (50%): Fun and games → Midpoint reversal → Dark night of soul
Act 3 (25%): Finale → Final image

Identify pacing problems and fix with specific scene additions.`}
                </pre>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Hero's Journey Customizer</h3>
                <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm">
                  {`Adapt Hero's Journey for modern [GENRE] story about [PROTAGONIST].

Replace traditional stages with contemporary equivalents:
Ordinary World → Algorithmic pink slip
Call to Adventure → Viral TikTok challenge
Etc.

Make stages specific to [PROTAGONIST'S WORLD].`}
                </pre>
              </Card>
            </div>
          </section>

          <section id="worldbuilding" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-amber-600 uppercase">06</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">World-Building Prompts</h2>
            </div>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Culture Generator</h3>
              <pre className="bg-slate-100 p-4 rounded overflow-x-auto text-sm mb-4">
                {`Build believable culture for [FANTASY/SCI-FI SETTING].

Include:
SOCIAL STRUCTURE: Power dynamics, class markers
MAGIC/TECH SYSTEM: Costs, limitations, social impact
ECONOMY: What people actually need/want
TABOOS: 3 things you Never say/do
HOLIDAYS: 2 with dark origins

Make internally consistent with clear tradeoffs.`}
              </pre>
            </Card>
          </section>

          <section id="faq" className="space-y-6">
            <div>
              <span className="text-sm font-bold text-amber-600 uppercase">09</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Will ChatGPT write my book for me?",
                  a: "No. ChatGPT generates raw material you refine. The best results combine AI assistance with your unique voice and editorial judgment.",
                },
                {
                  q: "How do I maintain my writing voice with AI?",
                  a: "Use ChatGPT for ideation, character work, and structure. Rewrite generated content in your own voice. Treat it as a brainstorming partner, not a ghostwriter.",
                },
                {
                  q: "Can I use ChatGPT for dialogue editing?",
                  a: "Absolutely. Paste sections and ask for specific improvements: tighten dialogue, add subtext, make voices distinct, or ensure pacing.",
                },
                {
                  q: "How detailed should my character prompts be?",
                  a: "The more specific, the better. Include age, background, flaws, desires, and relationships. Vague prompts get generic characters.",
                },
                {
                  q: "Can ChatGPT help with plot holes?",
                  a: "Yes. Paste your outline and ask it to identify logical inconsistencies, motivation gaps, or convenient coincidences.",
                },
                {
                  q: "How do I generate fresh story ideas?",
                  a: "Use the 'What If' Scenario Expander or combine genre + constraint prompts. Ask for multiple variations on themes you want to explore.",
                },
                {
                  q: "What's the best way to use 'Show, Don't Tell'?",
                  a: "Paste telling passages and ask ChatGPT to convert them to showing with sensory details, character actions, and subtext.",
                },
                {
                  q: "Can I use these prompts for screenwriting?",
                  a: "Yes, with adaptations. Screenplays need tighter dialogue and visual descriptions, but the character work translates perfectly.",
                },
                {
                  q: "How do I avoid ChatGPT output feeling generic?",
                  a: "Be extremely specific in prompts. Include constraints, tone, and examples of what you don't want. Iterate on outputs aggressively.",
                },
                {
                  q: "Should I credit ChatGPT in my book?",
                  a: "No legal requirement, but transparency about AI use in your creative process is increasingly expected by publishers and readers.",
                },
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded px-4">
                  <AccordionTrigger className="hover:text-amber-600">{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      <footer className="border-t mt-24 py-12 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">ChatGPT Guides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-amber-600">
                  ChatGPT Prompts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-role-based-prompting" className="hover:text-amber-600">
                  Role-Based Prompting
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-code-generation" className="hover:text-amber-600">
                  Code Generation
                </Link>
              </li>
              <li>
                <Link href="/few-shot-prompting" className="hover:text-amber-600">
                  Few-Shot Prompting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Writing Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/story-prompts" className="hover:text-amber-600">
                  Story Prompts
                </Link>
              </li>
              <li>
                <Link href="/creative-writing-prompts-beginners" className="hover:text-amber-600">
                  Writing for Beginners
                </Link>
              </li>
              <li>
                <Link href="/writing-prompts" className="hover:text-amber-600">
                  Writing Prompts
                </Link>
              </li>
              <li>
                <Link href="/essay-prompts" className="hover:text-amber-600">
                  Essay Prompts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-engineering-fundamentals" className="hover:text-amber-600">
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/claude-artifacts-guide" className="hover:text-amber-600">
                  Claude Artifacts
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-data-analysis" className="hover:text-amber-600">
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link href="/website-links" className="hover:text-amber-600">
                  View All Pages
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-amber-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/journal-guide" className="hover:text-amber-600">
                  Journal Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t text-sm text-center text-muted-foreground">
          <p>© 2026 GPTPrompts.AI. Master prompt engineering for creative writing and storytelling.</p>
        </div>
      </footer>
    </main>
  )
}
