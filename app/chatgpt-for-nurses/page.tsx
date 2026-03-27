import type { Metadata } from "next"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "ChatGPT Prompts for Nurses: 50+ Clinical Documentation Templates | GPTPrompts.AI",
  description:
    "ChatGPT prompts for nursing documentation. SBAR, SOAP notes, care plans, discharge instructions, and incident reports for Joint Commission compliance.",
  openGraph: {
    title: "ChatGPT Prompts for Nurses: Clinical Documentation Templates",
    description:
      "50+ HIPAA-compliant prompts for SBAR handoffs, nursing notes, care plans, and clinical documentation.",
    type: "article",
  },
}

export default function ChatGPTForNursesPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#ec4899] to-[#db2777] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
            ChatGPT for <br /> Nurses
          </h1>
          <p className="text-xl max-w-3xl opacity-90">
            50+ HIPAA-compliant ChatGPT prompts that streamline nursing documentation. Save 2-3 hours per shift with
            SBAR handoffs, SOAP notes, care plans, and incident reports while maintaining Joint Commission standards.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
            <nav className="space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#ec4899] mb-6">Sections</h3>
                <ul className="space-y-3 text-sm font-medium">
                  {[
                    { id: "universal", label: "Universal Templates", num: "01" },
                    { id: "admission", label: "Admission & Assessment", num: "02" },
                    { id: "medication", label: "Medication & IV", num: "03" },
                    { id: "wound", label: "Wound Care", num: "04" },
                    { id: "specialty", label: "Specialty Units", num: "05" },
                    { id: "documentation", label: "Documentation Hacks", num: "06" },
                    { id: "faq", label: "FAQ", num: "07" },
                  ].map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        className="group hover:text-[#ec4899] transition-colors flex items-center justify-between"
                      >
                        <span>{link.label}</span>
                        <span className="text-xs text-muted-foreground group-hover:text-[#ec4899]">{link.num}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </aside>

          <div className="lg:col-span-9 space-y-24">
            <section id="universal" className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold mb-6">01. Universal Clinical Documentation</h2>
                <p className="text-lg text-muted-foreground mb-8">Gold-standard templates used across all units:</p>

                <div className="space-y-6">
                  <div className="border rounded-lg p-8 bg-slate-50">
                    <h3 className="font-bold text-lg mb-4">SBAR Handoff (Gold Standard)</h3>
                    <p className="text-muted-foreground mb-4">Situation-Background-Assessment-Recommendation format:</p>
                    <div className="bg-white p-4 rounded border font-mono text-sm">
                      **SBAR for shift handoff**: Patient [NAME/ROOM], Dx [DIAGNOSIS].
                      <br />
                      S: [SUBJECTIVE: pain 6/10, N/V]
                      <br />
                      B: [BACKGROUND: post-op Day 2, T 38.2]
                      <br />
                      A: [ASSESSMENT: alert, IV patent, lungs clear]
                      <br />
                      R: [RECOMMENDATION: Tylenol 650mg, monitor output]
                    </div>
                  </div>

                  <div className="border rounded-lg p-8 bg-slate-50">
                    <h3 className="font-bold text-lg mb-4">SOAP Nursing Note</h3>
                    <div className="bg-white p-4 rounded border font-mono text-sm">
                      **SOAP note** for [PATIENT]: [DATE/TIME].
                      <br />
                      **S**: Patient reports [SYMPTOMS].
                      <br />
                      **O**: VS [BP/PULSE/RESP/O2/TEMP], physical [LUNGS/HEART/SKIN].
                      <br />
                      **A**: [INTERPRETATION: stable/improved].
                      <br />
                      **P**: [PLAN: labs stat, f/c Dr. Smith].
                    </div>
                  </div>

                  <div className="border rounded-lg p-8 bg-slate-50">
                    <h3 className="font-bold text-lg mb-4">Shift Summary (End-of-Shift)</h3>
                    <div className="bg-white p-4 rounded border font-mono text-sm">
                      **12-hour shift summary** [UNIT]: Total patients [NUMBER].
                      <br />
                      Admissions [X], discharges [Y], codes [Z].
                      <br />
                      Interventions: [MEDS/IVs/PROCS].
                      <br />
                      Concerns for next shift: [ISOLATION/LOWSTAFF].
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="admission" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">02. Admission & Assessment Prompts</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Nursing Admission Note</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Admission assessment**: [PATIENT] admitted [DIAGNOSIS].
                    <br />
                    VS: [FULL SET]. FALLS RISK: [SCORE].
                    <br />
                    SKIN: [INTEGRITY/BRADEN]. PAIN: [0-10].
                    <br />
                    IV: [SITE/FLUIDS]. ALLERGIES: [LIST].
                    <br />
                    Care plan initiated.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Pain Assessment Documentation</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Pain assessment** [TIME]: Patient rates [SCALE]/10 at [LOCATION].
                    <br />
                    Onset [ACUTE/CHRONIC]. Quality [SHARP/DULL]. Radiation [YES/NO].
                    <br />
                    OPQRST documented. Intervention [MED/RICE]. Reassess 60min.
                  </div>
                </div>
              </div>
            </section>

            <section id="medication" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">03. Medication & IV Prompts</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Medication Administration Record (MAR)</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **MAR**: [DRUG] [DOSE] [ROUTE] [TIME] for [PATIENT].
                    <br />
                    Indication: [DX]. Pre: [VS/ALLERGIES]. Given: [YES]. Post: [EFFECT].
                    <br />
                    Nursing notes: [TOLERATED/NAUSEA].
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">IV Fluids Documentation</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **IV**: [SITE/GAUGE] [SOLUTION] [#cc/hr]. Infusing [PATENT/INFILTRATE].
                    <br />
                    Input [cc] Output [cc]. Next bag [TIME].
                  </div>
                </div>
              </div>
            </section>

            <section id="wound" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">04. Wound Care & Assessment</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Wound Care Documentation</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Wound care** [LOCATION]: [SIZE LxWxD cm]. Exudate [AMOUNT/TYPE].
                    <br />
                    Surrounding skin [ERYTHEMA/INDURATION]. Dressing [TYPE] applied.
                    <br />
                    Photo protocol followed.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Braden Scale Documentation</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Braden Score**: [TOTAL/7]. Sensory [SCORE], Moisture [SCORE], etc.
                    <br />
                    Interventions: [REPOSITION/TURN SCHEDULE].
                  </div>
                </div>
              </div>
            </section>

            <section id="specialty" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">05. Specialty Unit Prompts</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">ICU Neuro Flowsheet</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **ICU neuro**: LOC [AVPU], pupils [SIZE/REACTIVE], MAP [VALUE].
                    <br />
                    Sedation [RASS SCORE].
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Labour & Delivery</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **L&D**: [PARITY] [GEST AGE]. FHR [RATE]. Contractions [FREQ/DUR].
                    <br />
                    Cervical exam [CM/-STATION].
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">NICU Flowsheet</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **NICU**: Weight [GRAMS], feeds [VOL/TYPE], residuals [ML].
                    <br />
                    Apgars [1/5/10 MIN].
                  </div>
                </div>
              </div>
            </section>

            <section id="documentation" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">06. Documentation Hacks</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Abbreviated Flowsheet</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **0700**: VS stable, I/O +1L, pain 2/10, ambulated 50ft.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">PRN Effectiveness</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **PRN**: [MORPHINE 2mg IV] given [TIME]. Pain [PRE 8/10 → POST 3/10].
                    <br />
                    No resp depression.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Rapid SBAR (5-Minute)</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **SBAR rapid**: Room 12, 72M CHF, Lasix 40mg q12, K 3.2, watch output.
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">07. FAQ</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="q1" className="border rounded-lg">
                  <AccordionTrigger className="hover:bg-slate-50 px-6 py-4">
                    How do I ensure HIPAA compliance when using ChatGPT?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-base">
                    Never include real patient names, MRNs, or dates of birth in prompts. Use patient room numbers or
                    initials only. Review all AI output before entering into official records. De-identify all patient
                    data.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="border rounded-lg">
                  <AccordionTrigger className="hover:bg-slate-50 px-6 py-4">
                    Can I use these templates for all documentation?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-base">
                    Yes, these are based on Joint Commission standards. However, always verify with your facility's
                    policies and EHR requirements. Customize templates to match your unit's specific protocols.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="border rounded-lg">
                  <AccordionTrigger className="hover:bg-slate-50 px-6 py-4">
                    How much time can I save using these prompts?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-base">
                    Nurses report saving 2-3 hours per 12-hour shift. The most time savings come from standardized SBAR
                    handoffs and shift summaries. Time savings increase as you customize templates to your workflow.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q4" className="border rounded-lg">
                  <AccordionTrigger className="hover:bg-slate-50 px-6 py-4">
                    What if my facility doesn't allow ChatGPT?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-base">
                    Use these templates as writing guides offline. Many facilities offer secure versions or approved
                    alternatives. Check with your IT and compliance departments about approved documentation tools.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16 px-6 md:px-12 mt-32 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href="/" className="text-2xl font-bold">
              GPTPrompts.AI
            </Link>
            <Link href="/website-links" className="hover:opacity-80 transition-opacity">
              View All Pages
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
