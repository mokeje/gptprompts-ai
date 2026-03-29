"use client"
import { useState } from "react"
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#EC4899] transition-colors">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono mb-4 max-h-64">{prompt}</pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#EC4899] hover:bg-[#be123c] text-white font-medium py-2 px-4 rounded">
        {copied ? (<><Check className="w-4 h-4" />Copied</>) : (<><Copy className="w-4 h-4" />Copy Prompt</>)}
      </button>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 bg-[#1a1a1a] hover:bg-[#242424] transition-colors"
      >
        <span className="font-semibold text-white text-left">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#EC4899] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="p-4 bg-[#0a0a0a] border-t border-[#2a2a2a] text-gray-300">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function EventManagementPromptsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Article", "FAQPage"],
    headline: "30+ AI Prompts for Event Management",
    description: "Comprehensive collection of AI prompts designed to streamline event planning, coordination, and execution.",
    datePublished: "2026-03-29",
    dateModified: "2026-03-29",
    image: "/og-event-management.jpg",
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: []
    }
  }

  const prompts = {
    "Planning & Strategy": [
      { title: "Event Brief Generator", prompt: "Create a detailed event brief for a [type of event] with [number] attendees. Include objectives, target audience, timeline, budget considerations, and key success metrics." },
      { title: "Venue Selection Assistant", prompt: "Help me evaluate venues for a [type of event]. Compare [number] options based on capacity, location, amenities, accessibility, parking, and cost. Provide pros/cons for each." },
      { title: "Event Timeline Creator", prompt: "Generate a comprehensive timeline for planning a [type of event] happening on [date]. Break down all tasks by month, week, and critical deadlines." },
      { title: "Budget Allocation Optimizer", prompt: "Create a detailed budget breakdown for a [type of event] with a total budget of [amount]. Allocate funds across venue, catering, logistics, entertainment, and contingency." },
      { title: "Guest List Manager Prompt", prompt: "Help me organize and manage a guest list of [number] people for [type of event]. Include categorization, dietary requirements, plus-ones, and RSVP tracking." },
      { title: "Event Risk Assessment", prompt: "Identify potential risks for a [type of event] on [date]. Analyze contingencies for weather, no-shows, technical issues, and health concerns. Suggest mitigation strategies." }
    ],
    "Logistics & Operations": [
      { title: "Vendor Coordination Guide", prompt: "Create a vendor management checklist for [type of event]. Include all vendors needed, key contact details, contracts, deliverables, and communication timelines." },
      { title: "Transportation Logistics Planner", prompt: "Plan transportation and parking for [type of event] with [number] expected attendees at [venue]. Include arrival flow, shuttle schedules, accessibility, and parking allocation." },
      { title: "Catering Specification Builder", prompt: "Generate detailed catering specifications for a [type of event] with [number] guests. Include menu options, dietary restrictions, service style, timing, and contingency food quantities." },
      { title: "Equipment & Setup Coordinator", prompt: "Create an equipment checklist for [type of event]. List all AV, sound, lighting, furniture, and staging needs with technical specifications and setup instructions." },
      { title: "Seating Arrangement Assistant", prompt: "Help me design seating arrangements for a [type of event] with [number] guests. Consider dynamics, VIPs, accessibility, and table flow. Provide a seating chart template." },
      { title: "Event Day Timeline Scheduler", prompt: "Create a minute-by-minute timeline for event day operations on [date]. Include setup, check-in, main activities, breaks, breaks, and close-out procedures." }
    ],
    "Marketing & Communications": [
      { title: "Event Promotion Campaign", prompt: "Design a multi-channel promotion strategy for [type of event] on [date]. Include email, social media, website, and paid advertising timelines and messaging." },
      { title: "Invitation Copy Writer", prompt: "Write compelling invitation text for a [type of event] on [date] at [location]. Make it engaging, include all key details, and create urgency for RSVPs." },
      { title: "Social Media Content Calendar", prompt: "Create a 60-day social media content calendar for promoting [type of event]. Include post themes, graphics briefs, hashtag strategy, and engagement tactics." },
      { title: "Email Nurture Sequence", prompt: "Design an email sequence for [type of event] starting [number] days before the event. Include save-the-date, details, reminders, and post-event follow-up." },
      { title: "Press Release Generator", prompt: "Write a professional press release for [type of event] happening on [date]. Highlight key speakers, attractions, and impact. Include media contact details." },
      { title: "Event Description Optimizer", prompt: "Create compelling event descriptions for website, social media, and marketing materials. Focus on benefits, excitement, and clear calls-to-action." }
    ],
    "Attendee Experience": [
      { title: "Welcome Packet Designer", prompt: "Design a welcome packet for [type of event] attendees. Include agenda, venue map, speaker bios, WiFi info, emergency contacts, and local recommendations." },
      { title: "Attendee Engagement Activities", prompt: "Suggest 10 interactive activities for [type of event] to boost engagement and networking among [number] attendees. Include timing and resource requirements." },
      { title: "Name Badge & Registration System", prompt: "Design an efficient registration and name badge system for [type of event] expecting [number] attendees. Include check-in flow, badge format, and technology needs." },
      { title: "Accessibility Accommodation Planner", prompt: "Create an accessibility accommodation checklist for [type of event]. Address mobility, hearing, vision, dietary, and neurodivergent needs with specific solutions." },
      { title: "Post-Event Feedback Survey", prompt: "Design a comprehensive post-event survey for [type of event]. Include satisfaction metrics, open feedback, demographic questions, and future event preferences." },
      { title: "Networking Facilitation Guide", prompt: "Create strategies to facilitate networking at [type of event] with [number] attendees. Include ice-breaker activities, speed networking, and digital networking tools." }
    ],
    "Technology & Systems": [
      { title: "Event App Feature List", prompt: "Recommend essential features for an event app for [type of event]. Include agenda, speaker info, networking, polls, Q&A, and offline functionality." },
      { title: "AV Technical Specifications", prompt: "Create detailed AV technical specifications for [type of event] with [number] attendees. Include screen counts, audio zones, lighting design, and streaming requirements." },
      { title: "WiFi & Connectivity Planning", prompt: "Design WiFi and connectivity strategy for [type of event] expecting [number] concurrent users. Calculate bandwidth needs and backup connectivity options." },
      { title: "Live Streaming Setup Guide", prompt: "Create a live streaming setup guide for [type of event]. Include camera angles, audio mixing, graphics package, platform selection, and backup procedures." },
      { title: "Check-In System Selection", prompt: "Evaluate check-in systems for [type of event]. Compare badge printing, barcode scanning, QR codes, mobile check-in, and data capture capabilities." },
      { title: "Data Collection & Privacy Protocol", prompt: "Design a data collection and privacy protocol for [type of event]. Address GDPR compliance, consent forms, data storage, and attendee privacy." }
    ]
  }

  const faqs = [
    { question: "How far in advance should I start planning an event?", answer: "For most events, begin planning 3-6 months ahead. Larger conferences need 6-12 months. Start with venue booking and core vendor contracts, then work backwards from the event date." },
    { question: "What's the best way to manage event budgets?", answer: "Use a spreadsheet or budgeting software to track all expenses. Allocate 50% to venue/catering, 25% to logistics/staffing, and 25% to marketing/contingency. Review weekly and adjust as needed." },
    { question: "How do I handle last-minute event changes?", answer: "Build contingency into your timeline (15-20% buffer time). Create decision trees for common problems. Keep vendor contact lists accessible. Brief your team on flexibility and backup plans." },
    { question: "What's the ideal attendee-to-staff ratio?", answer: "Typically 10-15 attendees per staff member for conferences, 5-8 for galas, 3-5 for workshops. Adjust based on event complexity, venue layout, and required hands-on support." },
    { question: "How do I measure event success?", answer: "Track KPIs: attendance rate, attendee satisfaction scores, engagement metrics, sponsorship ROI, social media reach, and post-event conversions. Compare against objectives set during planning." },
    { question: "What's the best way to follow up after an event?", answer: "Send thank you emails within 48 hours, share event photos/videos within a week, and distribute survey links within 3 days. Analyze feedback and publish key takeaways within 2 weeks." },
    { question: "How do I negotiate better vendor contracts?", answer: "Get quotes from 3+ vendors, leverage group purchases, negotiate payment terms, clarify cancellation policies, and secure liability insurance. Always read contracts carefully." },
    { question: "What contingencies should I plan for outdoor events?", answer: "Have a weather contingency plan (tent rental, indoor backup), monitor forecasts 2 weeks ahead, brief attendees on potential changes, and ensure insurance covers cancellation." },
    { question: "How do I create an inclusive event environment?", answer: "Offer accessibility accommodations (wheelchair access, ASL interpreters, dietary options), use inclusive language in marketing, provide quiet spaces, and collect accessibility needs during registration." },
    { question: "What's the best strategy for virtual or hybrid events?", answer: "Use reliable streaming platforms, rehearse technical setup, provide quality audio/video, engage virtual attendees with interactive features, and have dedicated moderators for online participation." }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-[#EC4899]/10 border border-[#EC4899]/30 rounded-full mb-6">
            <span className="text-[#EC4899] text-sm font-semibold">Event Management Prompts</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">30+ AI Prompts for Event Management</h1>
          <p className="text-xl text-gray-400 mb-8">
            Streamline your event planning, coordination, and execution with AI-powered prompts designed for every stage of event management—from initial strategy to post-event analysis.
          </p>
        </div>

        {Object.entries(prompts).map((section, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 pb-4 border-b border-[#EC4899]/30">
              {section[0]}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {section[1].map((prompt, pidx) => (
                <CopyCard key={pidx} {...prompt} />
              ))}
            </div>
          </div>
        ))}

        <div className="my-16 py-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} {...faq} />
            ))}
          </div>
        </div>

        <div className="my-16 py-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related Pages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/ai-for-workforce-management-prompts" className="text-[#EC4899] hover:text-[#be123c] underline">Workforce Management</Link>
            <Link href="/ai-for-operations-management-prompts" className="text-[#EC4899] hover:text-[#be123c] underline">Operations Management</Link>
            <Link href="/ai-for-facilities-management-prompts" className="text-[#EC4899] hover:text-[#be123c] underline">Facilities Management</Link>
            <Link href="/ai-for-document-management-prompts" className="text-[#EC4899] hover:text-[#be123c] underline">Document Management</Link>
            <Link href="/ai-for-news-prompts" className="text-[#EC4899] hover:text-[#be123c] underline">News & Journalism</Link>
            <Link href="/ai-question-answering-prompts" className="text-[#EC4899] hover:text-[#be123c] underline">Question Answering</Link>
            <Link href="/squibler-ai-prompts" className="text-[#EC4899] hover:text-[#be123c] underline">Squibler Writing</Link>
            <Link href="/ai-summarizer-prompts" className="text-[#EC4899] hover:text-[#be123c] underline">Summarization</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
