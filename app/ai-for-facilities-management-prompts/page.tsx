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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#14B8A6] transition-colors">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono mb-4 max-h-64">{prompt}</pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#14B8A6] hover:bg-[#0d9488] text-white font-medium py-2 px-4 rounded">
        {copied ? (<><Check className="w-4 h-4" />Copied</>) : (<><Copy className="w-4 h-4" />Copy Prompt</>)}
      </button>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-lg">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 hover:bg-[#1a1a1a] transition-colors">
        <h4 className="font-bold text-white text-left">{question}</h4>
        {open ? <ChevronUp className="w-5 h-5 text-[#14B8A6]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>
      {open && <div className="px-6 pb-6 text-gray-300 border-t border-[#2a2a2a]">{answer}</div>}
    </div>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "AI Prompts for Facilities Management",
        datePublished: "2026-03-29",
        dateModified: "2026-03-29"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How can AI improve building security?", acceptedAnswer: { "@type": "Answer", text: "AI can enhance security through real-time monitoring, anomaly detection, and predictive threat analysis." } },
          { "@type": "Question", name: "What is predictive maintenance in facilities?", acceptedAnswer: { "@type": "Answer", text: "Predictive maintenance uses AI to forecast equipment failures before they happen, reducing downtime and costs." } }
        ]
      }) }} />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">AI Prompts for Facilities Management</h1>
          <p className="text-xl text-gray-400">Optimize building operations, maintenance, and safety with AI-powered prompts.</p>
        </div>

        <div className="space-y-12">
          {/* Section 1: Building Operations & Space Optimization */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-[#14B8A6]">Building Operations & Space Optimization</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard title="Space Utilization Analysis" prompt="Analyze our building's space utilization data and identify underutilized areas. Create a report showing which spaces are used least, and provide recommendations for repurposing or consolidating them to improve efficiency." />
              <CopyCard title="Energy Consumption Optimization" prompt="Review our monthly energy consumption patterns by floor, zone, and department. Identify peak usage times and suggest AI-driven optimization strategies to reduce consumption during off-peak hours." />
              <CopyCard title="Occupancy Planning" prompt="Based on historical occupancy data, create an AI-driven occupancy forecast for the next quarter. Recommend optimal desk allocation, meeting room scheduling, and space planning strategies." />
              <CopyCard title="Building Layout Optimization" prompt="Analyze foot traffic patterns in our facility and suggest layout improvements to reduce congestion, improve workflow, and enhance employee experience." />
              <CopyCard title="Parking & Traffic Management" prompt="Review parking and traffic data for our facility. Recommend AI-powered solutions for parking assignment, congestion reduction, and vehicle flow optimization." />
              <CopyCard title="Climate Control Optimization" prompt="Assess our HVAC energy usage across different zones and times. Suggest AI-based strategies for dynamic temperature adjustment based on occupancy and weather patterns." />
            </div>
          </section>

          {/* Section 2: Predictive Maintenance & Asset Management */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-[#14B8A6]">Predictive Maintenance & Asset Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard title="Equipment Failure Prediction" prompt="Using our maintenance history and sensor data, identify which critical equipment is most likely to fail in the next 90 days. Recommend preventive maintenance actions." />
              <CopyCard title="Maintenance Schedule Optimization" prompt="Create an AI-optimized maintenance schedule that balances equipment health, operational disruption, and maintenance costs. Prioritize critical assets." />
              <CopyCard title="Asset Lifecycle Management" prompt="Analyze the lifecycle of all major building assets (HVAC, elevators, lighting, roofing). Predict end-of-life and recommend replacement timing to minimize downtime." />
              <CopyCard title="Preventive Maintenance ROI" prompt="Calculate the ROI of implementing predictive maintenance across our facility. Compare costs of preventive vs. reactive maintenance strategies." />
              <CopyCard title="Vendor Performance Analysis" prompt="Review performance data from our maintenance vendors. Identify which vendors deliver best quality and cost efficiency, and recommend vendor optimization strategies." />
              <CopyCard title="Spare Parts Inventory Optimization" prompt="Analyze equipment failure patterns and maintenance timelines to recommend optimal spare parts inventory levels. Reduce storage costs while ensuring availability." />
            </div>
          </section>

          {/* Section 3: Safety, Compliance & Risk Management */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-[#14B8A6]">Safety, Compliance & Risk Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard title="Safety Incident Pattern Analysis" prompt="Review our safety incident history and identify patterns, hotspots, and root causes. Recommend preventive measures and safety training priorities." />
              <CopyCard title="Fire Safety & Emergency Preparedness" prompt="Assess our building's fire safety systems, emergency exit routes, and evacuation procedures. Recommend AI-powered improvements and compliance updates." />
              <CopyCard title="Workplace Accident Prevention" prompt="Analyze workplace accident data by location, time, and type. Suggest targeted interventions and early warning indicators." />
              <CopyCard title="Security Risk Assessment" prompt="Conduct a comprehensive security risk assessment of our facility. Recommend AI-powered security solutions (cameras, sensors, access control) and monitoring strategies." />
              <CopyCard title="Regulatory Compliance Audit" prompt="Review our facility management practices against local building codes, health and safety regulations, and industry standards. Create a compliance roadmap." />
              <CopyCard title="Environmental Health Monitoring" prompt="Analyze air quality, water safety, and environmental health data. Recommend improvements to meet health standards and certifications." />
            </div>
          </section>

          {/* Section 4: Vendor & Contractor Management */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-[#14B8A6]">Vendor & Contractor Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard title="Contractor Performance Scoring" prompt="Create an AI-powered scoring system for our facility contractors based on quality, timeliness, cost efficiency, and safety. Recommend vendor improvements." />
              <CopyCard title="Service Level Agreement Optimization" prompt="Review our SLAs with facility service providers. Use AI to identify gaps, recommend improvements, and benchmark against industry standards." />
              <CopyCard title="Cost Reduction Opportunities" prompt="Analyze spending across facility vendors and contractors. Identify cost reduction opportunities, negotiate better terms, and recommend alternative vendors." />
              <CopyCard title="Vendor Risk Assessment" prompt="Evaluate the financial stability, insurance coverage, and operational reliability of our key facility vendors. Assess and mitigate vendor risk." />
              <CopyCard title="Procurement Optimization" prompt="Review our facility procurement processes and vendor selection criteria. Recommend AI-driven procurement improvements for better value." />
              <CopyCard title="Scheduling Conflict Resolution" prompt="Analyze our contractor schedules and identify conflicts, overlaps, or inefficiencies. Recommend optimal scheduling to reduce disruptions." />
            </div>
          </section>

          {/* Section 5: Sustainability & Green Building */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-[#14B8A6]">Sustainability & Green Building</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard title="Carbon Footprint Analysis" prompt="Calculate our facility's carbon footprint across operations, energy, water, and waste. Recommend AI-powered sustainability initiatives." />
              <CopyCard title="Water Conservation Strategies" prompt="Analyze our water consumption patterns and identify conservation opportunities. Recommend AI-powered water efficiency solutions." />
              <CopyCard title="Waste Reduction & Recycling" prompt="Review our waste and recycling data. Recommend strategies for waste reduction, composting, and improved recycling compliance." />
              <CopyCard title="Green Building Certification Roadmap" prompt="Assess our facility against LEED, BREEAM, or other green building standards. Create a roadmap to certification with cost-benefit analysis." />
              <CopyCard title="Renewable Energy Integration" prompt="Evaluate solar, wind, and other renewable energy options for our facility. Recommend integration strategies and ROI analysis." />
              <CopyCard title="Sustainable Procurement" prompt="Review our facility purchases for sustainability. Recommend vendors and products that align with environmental and ESG goals." />
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="How can AI improve our energy efficiency?" answer="AI can optimize HVAC systems, lighting, and equipment operation based on occupancy patterns, weather, and historical data. Predictive models can adjust settings in real-time to minimize waste while maintaining comfort." />
            <FAQItem question="What is the ROI of predictive maintenance?" answer="Predictive maintenance typically reduces maintenance costs by 25-30% and equipment downtime by 35-45% compared to reactive maintenance. ROI depends on equipment criticality and failure costs." />
            <FAQItem question="How can we improve building security with AI?" answer="AI-powered systems can monitor cameras, detect anomalies, predict security risks, optimize access control, and alert security teams to threats in real-time." />
            <FAQItem question="What data do we need for space optimization?" answer="You need occupancy sensors, booking system data, foot traffic analytics, floor plans, and usage patterns. AI can then recommend space repurposing and allocation strategies." />
            <FAQItem question="How do we reduce vendor costs?" answer="Analyze spending patterns, benchmark against market rates, consolidate vendors, and negotiate based on performance data. AI can identify cost reduction opportunities automatically." />
            <FAQItem question="Can AI predict equipment failures?" answer="Yes, using historical maintenance data, sensor readings, and operational patterns, AI can predict equipment failures 30-90 days in advance with high accuracy." />
            <FAQItem question="What's the timeline for implementing facilities AI?" answer="Quick wins (dashboards, analytics) take 4-8 weeks. Predictive maintenance implementation takes 12-16 weeks. Full facility AI transformation takes 6-12 months." />
            <FAQItem question="How do we measure facilities AI success?" answer="Track energy cost reduction, maintenance cost savings, equipment uptime, safety incident reduction, occupancy optimization, and employee satisfaction metrics." />
            <FAQItem question="What certifications should our green building pursue?" answer="LEED (Leadership in Energy and Environmental Design) is most common globally. BREEAM is popular in Europe. ISO 50001 for energy management. WELL Building Standard for occupant health." />
            <FAQItem question="How can we involve facility staff in AI adoption?" answer="Provide training on AI tools, clearly explain benefits, involve them in implementation planning, and emphasize that AI augments their work rather than replaces it." />
          </div>
        </section>

        {/* Related Pages */}
        <section className="mt-16 pt-12 border-t border-[#2a2a2a]">
          <h2 className="text-2xl font-bold mb-6">Related Prompt Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/ai-for-workforce-management-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#14B8A6] transition-colors">
              <h3 className="font-bold text-[#14B8A6]">Workforce Management</h3>
            </Link>
            <Link href="/ai-for-operations-management-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#14B8A6] transition-colors">
              <h3 className="font-bold text-[#14B8A6]">Operations Management</h3>
            </Link>
            <Link href="/ai-for-document-management-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#14B8A6] transition-colors">
              <h3 className="font-bold text-[#14B8A6]">Document Management</h3>
            </Link>
            <Link href="/ai-for-news-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#14B8A6] transition-colors">
              <h3 className="font-bold text-[#14B8A6]">News & Journalism</h3>
            </Link>
            <Link href="/ai-question-answering-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#14B8A6] transition-colors">
              <h3 className="font-bold text-[#14B8A6]">Question Answering</h3>
            </Link>
            <Link href="/squibler-ai-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#14B8A6] transition-colors">
              <h3 className="font-bold text-[#14B8A6]">Writing & Content</h3>
            </Link>
            <Link href="/ai-summarizer-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#14B8A6] transition-colors">
              <h3 className="font-bold text-[#14B8A6]">Summarization</h3>
            </Link>
            <Link href="/ai-for-management-consulting-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#14B8A6] transition-colors">
              <h3 className="font-bold text-[#14B8A6]">Management Consulting</h3>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
