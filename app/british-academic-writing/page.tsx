import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "British Academic Writing: Grammar, Tone, and Style Mastery | GPTPrompts.AI",
  description:
    "Master British academic writing conventions. Learn Oxford commas, British spelling, formal tone, and essay structures for UK universities with ChatGPT prompts.",
}

export default function BritishAcademicWritingPage() {
  const navigationItems = [
    { id: "conventions", label: "British Conventions", num: "01" },
    { id: "grammar", label: "Grammar Mastery", num: "02" },
    { id: "essay-types", label: "Essay Types", num: "03" },
    { id: "tone", label: "Academic Tone", num: "04" },
    { id: "style", label: "Style & Structure", num: "05" },
    { id: "formatting", label: "UK Formatting", num: "06" },
    { id: "subject-specific", label: "Subject-Specific", num: "07" },
    { id: "self-editing", label: "Self-Editing", num: "08" },
    { id: "faq", label: "FAQ", num: "09" },
  ]

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="bg-[#1e3a8a] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            British
            <br />
            <span className="italic opacity-90">Academic Writing.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Master British English conventions, formal tone, and analytical essay structures demanded by Oxford,
            Cambridge, and Russell Group universities.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sticky Nav */}
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1e3a8a] mb-6">Guide Sections</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {navigationItems.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#1e3a8a] transition-colors"
                    >
                      <span className="group-hover:translate-x-2 transition-transform">{link.label}</span>
                      <span className="text-xs font-bold text-[#1e3a8a]">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-24">
          {/* Section 1: British Conventions */}
          <section id="conventions" className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-6">01. British English Conventions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                British academic writing follows strict conventions that distinguish it from American English.
                Understanding these differences is essential for success at UK universities.
              </p>
            </div>
            <div className="grid gap-6">
              <Card className="p-8 border-l-4 border-[#1e3a8a]">
                <h3 className="text-2xl font-bold mb-4">Spelling Variations</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong>-ise/-isation endings:</strong> realise, organisation, emphasise
                  </li>
                  <li>
                    <strong>-our/-or endings:</strong> colour, behaviour, favour
                  </li>
                  <li>
                    <strong>-ogue/-og endings:</strong> catalogue, dialogue, analogue
                  </li>
                  <li>
                    <strong>Double 'l':</strong> travelled, labelled, cancelled
                  </li>
                </ul>
              </Card>
              <Card className="p-8 border-l-4 border-[#1e3a8a]">
                <h3 className="text-2xl font-bold mb-4">Punctuation Standards</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong>Oxford comma:</strong> Optional but be consistent throughout
                  </li>
                  <li>
                    <strong>Quote placement:</strong> Full stops outside quotes: "He said".
                  </li>
                  <li>
                    <strong>Contractions:</strong> Avoid in formal writing (do not, cannot)
                  </li>
                  <li>
                    <strong>Em-dashes:</strong> Use sparingly for emphasis
                  </li>
                </ul>
              </Card>
              <Card className="p-8 border-l-4 border-[#1e3a8a]">
                <h3 className="text-2xl font-bold mb-4">Academic Tone</h3>
                <p className="text-muted-foreground mb-4">
                  Maintain detached, analytical voice. Use passive voice for objectivity and avoid first-person unless
                  reflecting. Replace casual phrases with formal equivalents: "a lot" becomes "substantial," "things"
                  becomes "phenomena."
                </p>
              </Card>
            </div>
          </section>

          {/* Section 2: Grammar Mastery */}
          <section id="grammar" className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-6">02. Grammar Mastery Prompts</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Use these ChatGPT prompts to perfect your grammar and eliminate common errors in British academic
                writing.
              </p>
            </div>
            <div className="space-y-4">
              <Card className="p-6 bg-slate-50 dark:bg-slate-900/50">
                <h4 className="font-bold mb-3 text-[#1e3a8a]">Tense Consistency Checker</h4>
                <p className="text-sm text-muted-foreground mb-3 font-mono bg-white dark:bg-slate-800 p-4 rounded">
                  "Review my essay [PASTE 500 WORDS] for British academic grammar: 1. Verb tenses: Present for analysis,
                  past for historical facts? 2. Articles: a/an/the/zero correctly used? 3. Subject-verb agreement. 4.
                  Passive voice appropriate (impersonal analysis)? Flag errors with corrections (British spelling:
                  colour/centre)."
                </p>
              </Card>
              <Card className="p-6 bg-slate-50 dark:bg-slate-900/50">
                <h4 className="font-bold mb-3 text-[#1e3a8a]">Complex Sentence Auditor</h4>
                <p className="text-sm text-muted-foreground mb-3 font-mono bg-white dark:bg-slate-800 p-4 rounded">
                  "Improve sentence structure in [PASTE PARAGRAPHS]: - Avoid run-ons/comma splices. - Subordinate
                  clauses correct (although, whereas, despite). - Nominalisation for formality (arrive → arrival). -
                  Varied sentence length. British conventions throughout."
                </p>
              </Card>
            </div>
          </section>

          {/* Section 3: Essay Types */}
          <section id="essay-types" className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-6">03. Essay Type-Specific Structures</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Different essay types require specific structures and approaches in British academia.
              </p>
            </div>
            <div className="grid gap-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Analytical Essay (History/Politics)</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Structure:</strong>
                  </p>
                  <ol className="space-y-2 ml-6 list-decimal">
                    <li>Introduction: Thesis + 3-part roadmap (no rhetorical questions)</li>
                    <li>Body: PEE paragraphs (Point/Evidence/Explanation/Link)</li>
                    <li>Counterargument: Address opposing view directly</li>
                    <li>Conclusion: Synthesis without new material</li>
                  </ol>
                </div>
              </Card>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Argumentative Essay (Philosophy/Law)</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Structure:</strong>
                  </p>
                  <ol className="space-y-2 ml-6 list-decimal">
                    <li>AO1 Knowledge: Present arguments both sides</li>
                    <li>AO2 Evaluation: Critical analysis and judgement</li>
                    <li>Signposting: "However," "On the other hand," "This suggests"</li>
                    <li>Conclusion: Clear stance backed by evidence</li>
                  </ol>
                </div>
              </Card>
            </div>
          </section>

          {/* Section 4: Academic Tone */}
          <section id="tone" className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-6">04. British Academic Tone Mastery</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The tone of British academic writing is distinctly formal, impersonal, and evidence-driven. Eliminate
                casual language and maintain scholarly distance.
              </p>
            </div>
            <div className="grid gap-6">
              <Card className="p-6 bg-slate-50 dark:bg-slate-900/50">
                <h4 className="font-bold mb-3 text-[#1e3a8a]">Formality Transformer Prompt</h4>
                <p className="text-sm text-muted-foreground font-mono bg-white dark:bg-slate-800 p-4 rounded">
                  "Convert my draft [PASTE] to British academic tone: - Remove contractions (do not, cannot). -
                  Eliminate first-person unless reflective. - Precise vocabulary (big → substantial). - Tentative
                  language (suggests rather than proves). - No Americanisms (gotten → obtained)."
                </p>
              </Card>
              <Card className="p-8 border-l-4 border-[#1e3a8a]">
                <h3 className="text-2xl font-bold mb-4">Common Tone Mistakes</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-bold text-foreground">❌ Too Casual:</p>
                    <p>"This paper's gonna show how pollution wrecks ecosystems."</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">✓ Academic:</p>
                    <p>
                      "This essay examines the multifaceted impact of industrial pollution on ecosystem degradation."
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Section 5: Style & Structure */}
          <section id="style" className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-6">05. Style & Structure Prompts</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Master paragraph cohesion and logical flow with British academic signposting.
              </p>
            </div>
            <div className="space-y-4">
              <Card className="p-6 bg-slate-50 dark:bg-slate-900/50">
                <h4 className="font-bold mb-3 text-[#1e3a8a]">PEEL Paragraph Builder</h4>
                <p className="text-sm text-muted-foreground mb-3 font-mono bg-white dark:bg-slate-800 p-4 rounded">
                  "PEEL paragraph for '[POINT]' using evidence '[QUOTE/STAT]': Point (topic sentence) → Evidence →
                  Explanation → Link (next para). 150 words. Formal connectors: furthermore, consequently."
                </p>
              </Card>
              <Card className="p-6 bg-slate-50 dark:bg-slate-900/50">
                <h4 className="font-bold mb-3 text-[#1e3a8a]">Signposting & Cohesion</h4>
                <p className="text-sm text-muted-foreground mb-3 font-mono bg-white dark:bg-slate-800 p-4 rounded">
                  "Add British academic signposting to [PASTE ESSAY]: - 'This essay will examine...' - 'The following
                  section considers...' - 'In contrast...' - 'Having established X, Y will now be analysed'. Ensure
                  logical flow."
                </p>
              </Card>
            </div>
          </section>

          {/* Section 6: UK Formatting */}
          <section id="formatting" className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-6">06. UK-Specific Formatting Standards</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Follow British formatting conventions for titles, dates, references, and front matter.
              </p>
            </div>
            <div className="grid gap-6">
              <Card className="p-8 border-l-4 border-[#1e3a8a]">
                <h3 className="text-2xl font-bold mb-4">Reference Styles</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong>Harvard:</strong> Author (Year). Title. Publisher.
                  </li>
                  <li>
                    <strong>MHRA:</strong> Full note citations with shorter form.
                  </li>
                  <li>
                    <strong>Chicago:</strong> Humanities standard with dates.
                  </li>
                  <li>
                    <strong>Always:</strong> British spellings, date format (14 May 2025), DOIs.
                  </li>
                </ul>
              </Card>
              <Card className="p-6 bg-slate-50 dark:bg-slate-900/50">
                <h4 className="font-bold mb-3 text-[#1e3a8a]">Essay Front Matter</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Title Page requirements:</strong> Title centered, Word count (no name), Student ID only,
                  Module code, British date format (14 May 2025), Abstract (150-word summary)
                </p>
              </Card>
            </div>
          </section>

          {/* Section 7: Subject-Specific */}
          <section id="subject-specific" className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-6">07. Subject-Specific Writing</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Different disciplines have unique conventions and expectations in British academia.
              </p>
            </div>
            <div className="grid gap-6">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Sciences (Formal Lab Reports)</h3>
                <p className="text-muted-foreground mb-3">
                  IMRaD structure: Introduction → Methods → Results → Analysis → Discussion. Use SI units, British
                  spelling (analyse, colour), passive voice, statistical significance reporting, and precise
                  terminology.
                </p>
              </Card>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Humanities (Oxbridge Essays)</h3>
                <p className="text-muted-foreground mb-3">
                  Balance primary/secondary sources, integrate historiographical context, include counterfactual
                  analysis, and conclude with "Thus it can be concluded..." format.
                </p>
              </Card>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Law & Philosophy</h3>
                <p className="text-muted-foreground mb-3">
                  Address precedents systematically, construct logical arguments with formal language, evaluate multiple
                  positions fairly, and use legal/philosophical terminology precisely.
                </p>
              </Card>
            </div>
          </section>

          {/* Section 8: Self-Editing */}
          <section id="self-editing" className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-6">08. Self-Editing Prompts</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Final editing prompts to polish your essay to Oxbridge standard.
              </p>
            </div>
            <div className="space-y-4">
              <Card className="p-6 bg-slate-50 dark:bg-slate-900/50">
                <h4 className="font-bold mb-3 text-[#1e3a8a]">Academic Writing Auditor</h4>
                <p className="text-sm text-muted-foreground mb-3 font-mono bg-white dark:bg-slate-800 p-4 rounded">
                  "Score my essay [PASTE 1000 WORDS]: 1. Grammar: British spelling/punctuation (10pts). 2. Structure:
                  Clear thesis/signposting (10pts). 3. Analysis: Evidence-led (10pts). 4. Tone: Formal, objective
                  (10pts). 5. Cohesion: Transitions (10pts). Provide fixes table."
                </p>
              </Card>
              <Card className="p-6 bg-slate-50 dark:bg-slate-900/50">
                <h4 className="font-bold mb-3 text-[#1e3a8a]">Wordiness Reducer</h4>
                <p className="text-sm text-muted-foreground mb-3 font-mono bg-white dark:bg-slate-800 p-4 rounded">
                  "Reduce [PASTE] by 25% while maintaining meaning: Eliminate redundancies ('advance planning' →
                  'planning'). Use nominalisations where appropriate. Maintain British conventions and academic tone."
                </p>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-6">09. Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Common questions about British academic writing conventions and best practices.
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-bold text-foreground">
                  Should I use Oxford commas in British academic writing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  The Oxford comma is optional in British writing but recommended for clarity. The key is consistency:
                  choose one approach and maintain it throughout your essay.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-bold text-foreground">
                  Can I use contractions in formal essays?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  No. Contractions (don't, can't) should be avoided in British academic writing. Use full forms: do not,
                  cannot. This maintains the formal, detached tone expected at universities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-bold text-foreground">
                  How do I cite sources in Harvard British style?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Use: Author surname, Initial(s). (Year) 'Article title', Journal Name, volume(issue):pages. DOI [if
                  available]. Maintain alphabetical order in references and use British spellings throughout.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-bold text-foreground">
                  Should I use passive voice in academic essays?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, passive voice is preferred in British academic writing for objectivity. However, use it
                  strategically—not every sentence needs to be passive. Mix passive and active voice for varied,
                  readable prose.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-bold text-foreground">
                  What's the difference between PEEL and PEE paragraphs?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  PEEL adds a "Link" to the next paragraph (Point, Evidence, Explanation, Link), creating better
                  cohesion. PEE is simpler for shorter essays. PEEL is recommended for university-level work at Oxbridge
                  and Russell Group institutions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q6" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-bold text-foreground">
                  How do British and American academic writing differ most?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Key differences: British spelling (-ise, -our), date format (14 May), reference styles (Harvard/MHRA),
                  more formal tone, passive voice preference, and no contractions in formal work. American writing is
                  typically more direct and conversational.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q7" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-bold text-foreground">
                  What signposting language is most important?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Use: "This essay will examine," "Furthermore," "However," "In contrast," "Having established,"
                  "Consequently." These phrases guide readers through your argument and maintain the analytical,
                  structured approach expected in British academia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q8" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-bold text-foreground">
                  How long should academic essays be?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  A-Level essays typically 2,000-3,000 words. University essays range from 2,000-4,000 words depending
                  on assignment. Follow your institution's guidelines precisely and use signposting to maintain clarity
                  at any length.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q9" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-bold text-foreground">
                  Can I use first-person in British academic essays?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Avoid first-person unless required for reflective writing. Use impersonal constructions: "This essay
                  argues," "It can be shown," "The evidence suggests" instead of "I believe," "I found," "I think."
                  Maintains academic distance and authority.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Footer Links */}
          <section className="mt-24 pt-16 border-t border-border">
            <h3 className="text-2xl font-bold mb-8">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/ucas-personal-statement"
                className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                <h4 className="font-bold text-[#1e3a8a] mb-2">UCAS Personal Statements</h4>
                <p className="text-sm text-muted-foreground">
                  Craft compelling 4,000-character statements for UK universities
                </p>
              </Link>
              <Link
                href="/college-application-essays"
                className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                <h4 className="font-bold text-[#1e3a8a] mb-2">College Essays</h4>
                <p className="text-sm text-muted-foreground">
                  Master essay writing for international university applications
                </p>
              </Link>
              <Link
                href="/gcse-revision"
                className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                <h4 className="font-bold text-[#1e3a8a] mb-2">GCSE Revision</h4>
                <p className="text-sm text-muted-foreground">
                  ChatGPT prompts for GCSE exam success across all subjects
                </p>
              </Link>
              <Link
                href="/website-links"
                className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                <h4 className="font-bold text-[#1e3a8a] mb-2">All Resources</h4>
                <p className="text-sm text-muted-foreground">Browse complete directory of GPTPrompts.AI guides</p>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
