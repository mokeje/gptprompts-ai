import type { Metadata } from "next"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Therapist & Counselor Prompts: Ethical AI Use in Mental Health | GPTPrompts.AI",
  description:
    "ChatGPT prompts for mental health professionals. HIPAA-compliant templates for session planning, documentation, SOAP notes, and clinical practice.",
  openGraph: {
    title: "Therapist & Counselor Prompts: Ethical AI for Mental Health",
    description: "15+ ethical ChatGPT prompts for therapists, counselors, and mental health professionals.",
    type: "article",
  },
}

export default function TherapistCounselorPromptsPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
            Therapist & Counselor <br /> AI Prompts
          </h1>
          <p className="text-xl max-w-3xl opacity-90">
            Ethical ChatGPT prompts for mental health professionals. HIPAA-compliant templates for session planning,
            documentation, case conceptualization, and clinical practice while maintaining the highest ethical
            standards.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
            <nav className="space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#6366f1] mb-6">Sections</h3>
                <ul className="space-y-3 text-sm font-medium">
                  {[
                    { id: "ethical-guidelines", label: "Ethical Guidelines", num: "01" },
                    { id: "session-planning", label: "Session Planning", num: "02" },
                    { id: "clinical-templates", label: "Clinical Documentation", num: "03" },
                    { id: "role-play", label: "Role-Play & Practice", num: "04" },
                    { id: "group-therapy", label: "Group Therapy", num: "05" },
                    { id: "supervision", label: "Supervision & Self-Care", num: "06" },
                    { id: "faq", label: "FAQ", num: "07" },
                  ].map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        className="group hover:text-[#6366f1] transition-colors flex items-center justify-between"
                      >
                        <span>{link.label}</span>
                        <span className="text-xs text-muted-foreground group-hover:text-[#6366f1]">{link.num}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </aside>

          <div className="lg:col-span-9 space-y-24">
            <section id="ethical-guidelines" className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold mb-6">01. Ethical Guidelines for AI Use</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  ChatGPT is NOT a licensed therapist. These prompts support human clinicians for administrative tasks,
                  practice, and preparation. Always comply with APA, BPS, and BACP ethical guidelines.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-8 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-900 mb-4">✅ ALLOWED (with supervision)</h3>
                    <ul className="space-y-3 text-green-800">
                      <li>• Session planning/preparation</li>
                      <li>• Role-play practice (non-emergency)</li>
                      <li>• Psychoeducation handouts</li>
                      <li>• Progress note templates</li>
                      <li>• Resource lists</li>
                      <li>• Documentation support</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-8 rounded-lg border border-red-200">
                    <h3 className="font-bold text-red-900 mb-4">❌ PROHIBITED</h3>
                    <ul className="space-y-3 text-red-800">
                      <li>• Real-time crisis counseling</li>
                      <li>• Diagnosis/treatment planning</li>
                      <li>• Boundary violations</li>
                      <li>• Confidentiality breaches</li>
                      <li>• Direct client therapy</li>
                      <li>• PHI exposure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="session-planning" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">02. Session Planning Prompts</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">CBT Treatment Plan Template</h3>
                  <p className="text-muted-foreground mb-4">
                    Generate structured treatment plans for CBT interventions:
                  </p>
                  <div className="bg-white p-4 rounded border font-mono text-sm mb-4">
                    **CBT Treatment Plan**: Client [INITIALS], Dx [DSM-5 CODE].
                    <br />
                    Presenting: [SYMPTOMS]. Goals: [SMART TARGETS].
                    <br />
                    Sessions 1-6: [TECHNIQUES: thought records, behavioral experiments].
                    <br />
                    Progress measures: [PHQ-9/GAD-7].
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Case Conceptualization</h3>
                  <p className="text-muted-foreground mb-4">Develop comprehensive case formulations:</p>
                  <div className="bg-white p-4 rounded border font-mono text-sm mb-4">
                    **Case formulation**: [CLIENT PRESENTATION 3-5 sentences].
                    <br />
                    CBT: Automatic thoughts → Core beliefs → Behaviors.
                    <br />
                    Strengths/resources: [LIST].
                    <br />
                    Tailored interventions ranked.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Session Agenda Generator</h3>
                  <p className="text-muted-foreground mb-4">Create time-blocked session agendas:</p>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Session 4 agenda** [MODALITY]: Client [PROGRESS].
                    <br />
                    1. Check-in [5min]
                    <br />
                    2. Homework review [10min]
                    <br />
                    3. New material [25min]
                    <br />
                    4. Action items [10min]
                  </div>
                </div>
              </div>
            </section>

            <section id="clinical-templates" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">03. Clinical Documentation Templates</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">SOAP Progress Note</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **SOAP**: [DATE/TIME] Session [NUMBER].
                    <br />
                    **S**: Client reports [MOOD/SYMPTOMS].
                    <br />
                    **O**: Affect [CONGRUENT/FLAT], speech [RATE/VOLUME].
                    <br />
                    **A**: Progress toward [GOAL]. Risk [LOW/MODERATE].
                    <br />
                    **P**: Next session [FOCUS]. HW: [TASK].
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Risk Assessment Note</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Risk assessment**: Ideation [PASSIVE/ACTIVE/PLAN]? Intent [LOW]? Means [NO]?
                    <br />
                    Safety plan reviewed. Collateral [FAMILY NAME] contacted.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Client Handout Generator</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Psychoeducation**: [CONCEPT: Cognitive Distortions].
                    <br />
                    1-page handout: Definition/examples → Challenge methods → Worksheet.
                    <br />
                    Client-friendly language.
                  </div>
                </div>
              </div>
            </section>

            <section id="role-play" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">04. Role-Play & Practice Prompts</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Practice therapeutic techniques in a safe environment:
              </p>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">CBT Role-Play (Practice Only)</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **CBT role-play**: You = client with social anxiety.
                    <br />
                    Session 3: Present automatic thoughts about party.
                    <br />
                    My response [PASTE] → Therapist feedback.
                    <br />
                    Pause/resume format.
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Motivational Interviewing Practice</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **MI OARS practice**: Client ambivalent about [CHANGE].
                    <br />
                    My opening [PASTE] → Client response → MI adherent feedback.
                  </div>
                </div>
              </div>
            </section>

            <section id="group-therapy" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">05. Group Therapy Prompts</h2>
              <div className="border rounded-lg p-8 bg-slate-50">
                <h3 className="font-bold text-lg mb-4">DBT Skills Group Plan</h3>
                <div className="bg-white p-4 rounded border font-mono text-sm">
                  **DBT Skills Group** [THEME: Distress Tolerance].
                  <br />
                  Icebreaker → Teaching → Practice → HW.
                  <br />8 participants, 90min.
                </div>
              </div>
            </section>

            <section id="supervision" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">06. Supervision & Self-Reflection</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Case Presentation for Supervision</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Supervision case**: [ANONYMIZED CLIENT].
                    <br />
                    Stuck points: [THERAPEUTIC ISSUES].
                    <br />
                    Alternative interventions? Countertransference?
                  </div>
                </div>

                <div className="border rounded-lg p-8 bg-slate-50">
                  <h3 className="font-bold text-lg mb-4">Burnout Self-Check</h3>
                  <div className="bg-white p-4 rounded border font-mono text-sm">
                    **Vicarious trauma audit**: Last month symptoms [LIST].
                    <br />
                    Self-care plan + supervision consult recs.
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="space-y-8">
              <h2 className="text-5xl font-bold mb-6">07. FAQ</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="q1" className="border rounded-lg">
                  <AccordionTrigger className="hover:bg-slate-50 px-6 py-4">
                    Can I use ChatGPT for real client sessions?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-base">
                    No. ChatGPT is not a licensed therapist and cannot provide direct clinical care. Use it only for
                    preparation, documentation, and practice under professional supervision.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="border rounded-lg">
                  <AccordionTrigger className="hover:bg-slate-50 px-6 py-4">
                    How do I ensure HIPAA compliance?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-base">
                    Never include real client names, dates of birth, or other PHI in prompts. Use initials or anonymized
                    descriptions only. Review all AI output before using in client records.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="border rounded-lg">
                  <AccordionTrigger className="hover:bg-slate-50 px-6 py-4">
                    What should I disclose to clients?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-base">
                    If using AI to assist with note-taking or documentation, inform clients: "I may use AI tools to
                    organize session notes while maintaining confidentiality."
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q4" className="border rounded-lg">
                  <AccordionTrigger className="hover:bg-slate-50 px-6 py-4">
                    Can AI help with crisis management?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-base">
                    Only for developing safety plans with human oversight. During active crises, use human judgment and
                    emergency protocols exclusively. Never rely on AI for crisis intervention.
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
