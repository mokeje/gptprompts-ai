import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Prompts for Dentists: Patient Communication & Practice Management",
  description:
    "Complete guide to ChatGPT and AI prompts for dental practices. Generate patient education, appointment reminders, marketing content, and clinical documentation prompts.",
  keywords: "dentist prompts, dental practice, patient communication, dental marketing, clinical documentation",
}

export default function DentistsPromptsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/website-links" className="text-blue-600 hover:underline">
            Prompts Library
          </Link>
          <span>/</span>
          <span className="text-gray-700">Dentists</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Prompts for Dentists: Patient Communication & Practice Management
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Dentists and dental teams can use AI prompts to streamline admin work, improve patient communication,
            support marketing, and organize clinical documentation, while still keeping clinical judgment firmly in
            human hands. With the right prompts, AI becomes a versatile assistant for front desk, dentists, hygienists,
            and practice owners worldwide.
          </p>
        </header>

        {/* Foundations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Foundations: How Dentists Should Structure AI Prompts
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <p className="text-gray-700 mb-4">
              Dentistry‑specific prompting works best when you clearly define the WWWAC method:
            </p>
            <ul className="space-y-3 text-gray-700 ml-4">
              <li>
                <strong>Who:</strong> Role the AI should play (dentist, receptionist, marketer)
              </li>
              <li>
                <strong>What:</strong> Exact task (write post-op instructions, draft email, script receptionist
                dialogue)
              </li>
              <li>
                <strong>Why:</strong> Goal (reduce no-shows, calm anxiety, improve case acceptance)
              </li>
              <li>
                <strong>Audience:</strong> New vs existing patients, adults vs parents, global English vs local wording
              </li>
              <li>
                <strong>Constraints:</strong> Tone (warm, reassuring), length limits, reading level
              </li>
            </ul>
            <p className="text-gray-700 mt-4 pt-4 border-t border-blue-200">
              ⚠️ <strong>Important:</strong> AI should help with communication, documentation, and marketing. Dentists
              remain responsible for accuracy, clinical decisions, and regulatory compliance (HIPAA, GDPR, etc.)
            </p>
          </div>
        </section>

        {/* Patient Communication */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Communication and Education Prompts</h2>
          <p className="text-gray-700 mb-6">
            AI is highly effective for explaining procedures, answering common questions, and calming anxious patients
            in clear, non‑technical language.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Explaining Procedures and Conditions</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "You are a gentle, trusted dentist. Explain [procedure, e.g., root canal / implant / deep cleaning] to a
                nervous adult patient in simple language. Cover: what it is, why it's needed, what to expect during the
                appointment, pain control, and recovery tips. Keep it under 400 words."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Create a one‑page explainer for a patient recently diagnosed with early‑stage periodontal disease.
                Include: what it is, consequences of not treating, treatment options, and daily home‑care habits. Avoid
                medical jargon where possible."
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Post‑Treatment Instructions</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Act as a dentist providing post‑treatment instructions after a [procedure]. Draft clear written
                instructions that cover: pain management, bleeding, swelling, eating and drinking, oral hygiene, warning
                signs, and when to contact the clinic. Use short sentences and bullet points."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Rewrite these standard post‑op instructions into a version suitable for parents of a child who just had
                dental fillings. Include reassurance and practical tips for school, eating, and brushing for the next
                24–48 hours."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Anxiety and Pre‑Visit Support</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Write a reassuring email template for patients who are anxious about coming in for treatment. Tone:
                calm and empathetic. Explain what the visit will be like, how we manage pain and anxiety, and invite
                them to share concerns beforehand."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Create a short script front‑desk staff can use on the phone when a patient expresses fear of the
                dentist. Include validating phrases and simple explanations of comfort options."
              </p>
            </div>
          </div>
        </section>

        {/* Scheduling & Front Desk */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Scheduling, Reminders, and Front‑Desk Prompts</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Appointment Reminders and No‑Show Reduction</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Write 5 SMS reminder templates for dental appointments: one for new patients, one for routine
                check‑ups, one for treatment visits, one for pediatric visits, and one for recall/overdue appointments.
                Keep each under 160 characters, friendly, and include date/time placeholders."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Draft 3 email reminder templates for upcoming appointments. Each should: confirm date/time, explain
                what to bring or prepare, offer easy rescheduling options, and gently emphasize cancellation policy."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Receptionist and Triage Scripts</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "You are an AI receptionist for a general dental practice. Create a step‑by‑step script to handle calls
                from: New patients, Existing patients booking a check‑up, Patients in pain needing urgent care. For each
                scenario, list the questions to ask, how to show empathy, and when to escalate to clinical staff."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Prepare a decision tree for front‑desk staff to triage dental emergency calls. Outline questions that
                help determine urgency while avoiding diagnosis. End each path with clear guidance: same‑day visit,
                next‑day, or advice to seek immediate medical help."
              </p>
            </div>
          </div>
        </section>

        {/* Marketing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dental Marketing and Social Media Prompts</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Website, Blog, and SEO Content</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Act as a dental content writer for a family practice serving an international audience. Generate 20
                blog post ideas that answer common patient questions about preventive care, cosmetic dentistry, and
                dental anxiety. Include tentative titles and a one-line description for each."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Create a detailed content brief for a blog article titled 'How Often Should You Really Visit the
                Dentist?' Include: target keywords, H2/H3 outline, FAQs, and suggestions for images."
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Social Media and Engagement</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Write 15 Instagram post ideas for a dental clinic focused on: oral hygiene tips, myth‑busting,
                behind‑the‑scenes, team introductions, and patient success stories (no identifying details). Provide a
                suggested caption and simple visual for each."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Give me 10 fun and engaging dental questions to ask followers on Instagram Stories to boost comments
                and replies. Aim for easy, light questions that still teach something."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Campaigns and Offers</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Create a 4‑week social media campaign plan to promote preventative check‑ups before year‑end insurance
                benefits expire. Include weekly themes, example posts for Facebook/Instagram, and email subject line
                ideas."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Draft 3 different landing page copy versions for a 'Teeth Whitening Special Offer' targeting adult
                patients. Tone: professional but friendly, emphasize safety and results, avoid unrealistic promises."
              </p>
            </div>
          </div>
        </section>

        {/* Clinical Documentation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Clinical Documentation and Admin Support Prompts</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Charting and Clinical Notes</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "You are a dental scribe. Using this bullet‑point chairside note [paste structured notes], draft a
                complete clinical note including: medical history summary, findings, diagnosis, treatment performed,
                anesthesia, materials, and patient instructions. Follow a SOAP‑style or standard dental note format used
                in our practice."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Turn these rough clinical notes into a clear, well‑organized entry suitable for an electronic health
                record. Make sure findings, diagnosis, treatment, and follow‑up are easy to scan."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Insurance Narratives and Letters</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Write an insurance narrative for [procedure] that clearly explains: diagnosis, symptoms, previous
                treatment, why this procedure is medically necessary, and consequences of delaying treatment. Keep it
                factual and professional."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Draft a letter to an insurance company appealing a denied claim for a periodontal treatment. Summarize
                patient condition, treatment history, clinical rationale, and supporting evidence in clear,
                non‑emotional language."
              </p>
            </div>
          </div>
        </section>

        {/* Practice Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Management, Strategy, and Training Prompts</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Patient Journey and Experience</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Map the ideal patient journey for a modern dental practice, from first website visit to long‑term
                recall. Identify key touchpoints (online, phone, in‑office) and suggest where we can use AI (chatbots,
                reminders, educational content) to improve convenience and satisfaction."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "List 20 ideas to make our clinic more welcoming for anxious patients: environment, communication style,
                scheduling, pre‑visit materials, and follow‑up."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Team Training and SOPs</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Create a training outline for new front‑desk staff in a dental clinic. Topics: phone etiquette,
                appointment scheduling, dealing with upset patients, basic insurance understanding, and
                privacy/confidentiality essentials."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Draft a standard operating procedure for handling new patient intake, including online forms,
                verification, consent, and first‑visit check‑in. Present as a clear step‑by‑step list."
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices and Limitations</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-3">Best Practices</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Review AI-generated text for clinical accuracy and legal compliance</li>
                <li>✓ Avoid inputting identifiable health information into general AI tools</li>
                <li>✓ Keep a shared prompt library for consistent team tone</li>
                <li>✓ Use AI to augment—never replace—professional judgment</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-3">Limitations</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>⚠️ AI may give generic or region‑agnostic answers</li>
                <li>⚠️ Clinical prompts must not be treated as diagnosis without verification</li>
                <li>⚠️ Over‑automated messages can feel impersonal</li>
                <li>⚠️ Dentistry is regulated; standards vary globally</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Prompting Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/chatgpt-for-nurses" className="text-blue-600 hover:underline">
              → ChatGPT for Healthcare Professionals
            </Link>
            <Link href="/how-to-write-effective-ai-prompts" className="text-blue-600 hover:underline">
              → How to Write Effective AI Prompts
            </Link>
            <Link href="/social-media-captions-seo" className="text-blue-600 hover:underline">
              → Social Media & SEO
            </Link>
            <Link href="/website-links" className="text-blue-600 hover:underline">
              → Back to Prompts Library
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8 text-center text-gray-600 text-sm">
          <p>
            Used wisely, AI prompts help dentists worldwide communicate more clearly, run smoother operations, and
            educate patients better—freeing up time and energy for what matters most: delivering safe, high‑quality
            clinical care and building long‑term patient trust.
          </p>
          <Link href="/website-links" className="text-blue-600 hover:underline mt-4 block">
            ← Back to Prompts Library
          </Link>
        </footer>
      </div>
    </main>
  )
}
