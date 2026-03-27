import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ChatGPT for Medical Education: USMLE/NCLEX Study Prompts | GPTPrompts.AI",
  description:
    "ChatGPT prompts for medical students and residents. USMLE Step 1/2, NCLEX, OSCE prep, anatomy, pathophysiology, clinical vignettes. Anki + UWorld + Amboss in one interface.",
}

export default function MedicalEducationPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#06b6d4] to-[#0891b2] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
            ChatGPT for <br /> Medical Education
          </h1>
          <p className="text-xl max-w-3xl opacity-90">
            50+ ChatGPT prompts for medical students and residents. Master USMLE Step 1/2, NCLEX, OSCEs, anatomy,
            pathophysiology, and clinical reasoning with Anki flashcards, vignettes, and shelf exam prep.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#06b6d4] mb-6">Sections</h3>
              <ul className="space-y-3 text-sm font-medium">
                {[
                  { id: "foundational", label: "Foundational Science", num: "01" },
                  { id: "vignettes", label: "Clinical Vignettes", num: "02" },
                  { id: "osce", label: "OSCE & Communication", num: "03" },
                  { id: "anatomy", label: "Anatomy & Physiology", num: "04" },
                  { id: "board", label: "Board Review", num: "05" },
                  { id: "study", label: "Study Planning", num: "06" },
                  { id: "faq", label: "FAQ", num: "07" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group hover:text-[#06b6d4] transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-muted-foreground group-hover:text-[#06b6d4]">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-24">
            <section id="foundational" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">01. Foundational Science Prompts</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">First Aid-Style Flashcards (Step 1)</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Anki cards** for [TOPIC: Renal Physiology]:
                    <br />
                    Front: Question/Case. Back: Answer + High-Yield Facts + First Aid page ref.
                    <br />
                    20 cards, spaced repetition ready.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Pathophysiology Flowcharts</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Pathoma-style** [DISEASE: Acute Pancreatitis]:
                    <br />
                    Etiology → Pathophys → Histology → Clinical → Management.
                    <br />
                    Visual flowchart (text-based).
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Pharmacology Mechanism Mnemonics</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Sketchy-style** [DRUG CLASS: Beta Blockers]:
                    <br />
                    MOA → Adverse → Clinical use → Mnemonics.
                    <br />
                    USMLE Step 1 facts only.
                  </div>
                </div>
              </div>
            </section>

            <section id="vignettes" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">02. Clinical Vignettes & DDx</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Step 2 CK Vignette Generator</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Step 2 CK Q**: 45M presents with [SYMPTOMS]. VS [VITALS]. Labs [VALUES].
                    <br />
                    A) Dx1 B) Dx2 C) Dx3 D) Dx4 E) Dx5
                    <br />
                    Explanation: Next best step + Why others wrong.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Differential Diagnosis Trainer</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **DDx** for [PRESENTATION: RUQ pain]. Prioritize life-threatening.
                    <br />
                    Top 5 → Probability → Key tests → Management.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">NBME-Style Case (Shelf Exams)</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **IM shelf**: 62F DMII presents [VIGNETTE]. Most appropriate INITIAL management?
                    <br />
                    Step-by-step reasoning.
                  </div>
                </div>
              </div>
            </section>

            <section id="osce" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">03. OSCE & Communication Prompts</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">OSCE Station Simulator</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **OSCE: Chest pain** 8min station.
                    <br />
                    Patient script → History checklist → Physical findings → Management plan.
                    <br />
                    Score my performance [PASTE SCRIPT].
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Breaking Bad News (SPIKES)</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **SPIKES protocol**: Deliver [DX: Stage IV Lung CA].
                    <br />
                    Patient responses → My replies [PASTE] → Feedback.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Consent Station Practice</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Surgical consent**: Explain [PROCEDURE: Appendectomy].
                    <br />
                    Risks/benefits/alternatives. Patient questions answered.
                  </div>
                </div>
              </div>
            </section>

            <section id="anatomy" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">04. Anatomy & Physiology Review</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Netter's-Style Anatomy Quiz</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Anatomy**: Brachial plexus lesions x10.
                    <br />
                    Images described → Function lost → Clinical correlation.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Gray's Anatomy Explanations</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Physio**: Starling forces in edema. Diagram + equation.
                    <br />
                    Clinical: CHF vs Cirrhosis.
                  </div>
                </div>
              </div>
            </section>

            <section id="board" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">05. Board Review & High-Yield</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">UWorld-Style Qbank</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Step 1 qbank**: Generate 20 NBME questions [SUBJECT].
                    <br />
                    Mixed difficulty. Explanations with HY bullets.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Amboss Library Summaries</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Amboss article**: [TOPIC: Atrial Fibrillation].
                    <br />
                    Epidemiology → Pathophys → EKG → Management → Guidelines (AHA/ESC).
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">First Aid Rapid Review</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **FA shelf review**: IM Cardiology high-yield.
                    <br />
                    10 must-know diseases → Presentation → Management.
                  </div>
                </div>
              </div>
            </section>

            <section id="study" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">06. Study Planning & Retention</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Anki Deck Generator</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Anki deck**: [SUBJECT] 100 cards.
                    <br />
                    Cloze deletions + image occlusion.
                    <br />
                    First/second-order questions.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">24-Hour Cram Session</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **24hr Step 1 crammer**: Highest yield topics.
                    <br />
                    30min blocks × 48.
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">07. FAQ</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-6 bg-slate-50">
                  <h3 className="font-bold mb-2">Will ChatGPT replace my study resources?</h3>
                  <p className="text-muted-foreground">
                    No. Use ChatGPT + UWorld + Amboss + Anki together. ChatGPT excels at generating unlimited practice
                    questions and explanations to supplement premium resources.
                  </p>
                </div>
                <div className="border rounded-lg p-6 bg-slate-50">
                  <h3 className="font-bold mb-2">How accurate are ChatGPT vignettes?</h3>
                  <p className="text-muted-foreground">
                    Very accurate for teaching concepts, but verify answers with your resources. Use ChatGPT for volume
                    practice; use UWorld for official question accuracy.
                  </p>
                </div>
                <div className="border rounded-lg p-6 bg-slate-50">
                  <h3 className="font-bold mb-2">Can I use ChatGPT to generate test questions?</h3>
                  <p className="text-muted-foreground">
                    Yes. Generate unlimited practice questions for weak topics. ChatGPT's unlimited question generation
                    is one of its greatest advantages for board prep.
                  </p>
                </div>
              </div>
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
