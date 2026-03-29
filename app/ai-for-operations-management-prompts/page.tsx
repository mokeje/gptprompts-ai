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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#F97316] transition-colors">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono mb-4 max-h-64">{prompt}</pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#ea580c] text-white font-medium py-2 px-4 rounded">
        {copied ? (<><Check className="w-4 h-4" />Copied</>) : (<><Copy className="w-4 h-4" />Copy Prompt</>)}
      </button>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 hover:bg-[#1a1a1a] transition-colors">
        <h3 className="font-semibold text-white text-left">{question}</h3>
        {open ? <ChevronUp className="w-5 h-5 text-[#F97316]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>
      {open && <div className="px-6 pb-6 text-gray-300 border-t border-[#2a2a2a]">{answer}</div>}
    </div>
  )
}

export default function OperationsManagementPromptsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI Prompts for Operations Management",
    "description": "30 expert-crafted AI prompts for optimizing business operations, supply chain management, process automation, quality control, and operational excellence.",
    "datePublished": "2026-03-29",
    "dateModified": "2026-03-29",
    "author": { "@type": "Person", "name": "Michael Okeje" }
  }

  const faqs = [
    {
      question: "How can AI improve supply chain visibility?",
      answer: "AI enhances supply chain visibility through real-time tracking, predictive analytics for demand forecasting, automated inventory management, and intelligent route optimization. These capabilities help reduce stockouts, minimize excess inventory, and improve delivery times."
    },
    {
      question: "What's the best way to automate operational workflows?",
      answer: "Start by mapping your current workflows, identifying bottlenecks and repetitive tasks. Use AI for data entry, document processing, and decision-making. Implement RPA (Robotic Process Automation) for high-volume tasks, and integrate AI tools like Make or n8n for cross-system automation."
    },
    {
      question: "How does AI help with quality control?",
      answer: "AI-powered quality control uses computer vision for defect detection, predictive analytics to identify quality risks before they occur, and automated testing protocols. This reduces defects, improves consistency, and lowers inspection costs."
    },
    {
      question: "Can AI predict operational bottlenecks?",
      answer: "Yes. AI analyzes historical operational data to identify patterns that lead to delays, resource constraints, and process inefficiencies. Predictive models can forecast bottlenecks before they occur, allowing proactive resource reallocation."
    },
    {
      question: "How do I measure operational efficiency improvements?",
      answer: "Key metrics include cycle time reduction, cost per unit, resource utilization rates, error rates, on-time delivery percentage, and customer satisfaction scores. AI dashboards can track these in real-time, providing insights into where improvements are working."
    },
    {
      question: "What's the role of AI in inventory management?",
      answer: "AI optimizes inventory by predicting demand, automating reorder points, identifying slow-moving stock, and recommending optimal safety stock levels. This reduces carrying costs while improving availability."
    },
    {
      question: "How can AI improve vendor management?",
      answer: "AI analyzes vendor performance data, predicts supply risks, recommends optimal suppliers based on cost and reliability, and automates contract management. This leads to better negotiating power and stronger relationships."
    },
    {
      question: "Can AI help with compliance and auditing?",
      answer: "Absolutely. AI automates audit log reviews, detects compliance violations, generates compliance reports, and monitors regulatory changes. This reduces audit time and improves compliance accuracy."
    },
    {
      question: "How do I start with AI in operations without major disruption?",
      answer: "Begin with a pilot project in one non-critical process. Use AI tools to automate data collection and reporting first. Build internal capabilities gradually, train teams, and scale successful pilots across other processes."
    },
    {
      question: "What's the ROI timeline for operational AI projects?",
      answer: "Quick wins (automation, reporting) show ROI in 3-6 months. Process optimization typically shows results in 6-12 months. Strategic initiatives like predictive supply chain management may take 12-18 months but deliver larger long-term returns."
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">AI Prompts for Operations Management</h1>
          <p className="text-xl text-gray-400">30 expert-crafted AI prompts to optimize supply chains, automate workflows, improve quality control, and drive operational excellence across your organization.</p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><span className="w-1 h-8 bg-[#F97316]"></span>Supply Chain & Logistics Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard title="Supply Chain Risk Assessment" prompt="Analyze the following supply chain data and identify potential risks, vulnerabilities, and single points of failure. Recommend mitigation strategies and alternative sourcing options.\n\nData: [Insert supply chain network details]\n\nProvide a prioritized risk assessment with specific recommendations." />
              <CopyCard title="Demand Forecasting Optimization" prompt="Using historical sales data, seasonality patterns, and market trends, create an optimized demand forecast for the next 12 months. Include confidence intervals and identify high-impact demand drivers.\n\nData: [Insert historical sales and market data]\n\nFormat as a monthly forecast with key insights." />
              <CopyCard title="Inventory Optimization" prompt="Analyze current inventory levels, turnover rates, and holding costs. Calculate optimal reorder points, safety stock levels, and economic order quantities for each product.\n\nData: [Insert inventory and sales data]\n\nProvide specific recommendations to reduce carrying costs while improving availability." />
              <CopyCard title="Supplier Performance Analysis" prompt="Evaluate supplier performance across quality, delivery, cost, and responsiveness metrics. Identify top performers and at-risk suppliers. Recommend consolidation or diversification strategies.\n\nData: [Insert supplier performance data]\n\nCreate a vendor scorecard and strategic recommendations." />
              <CopyCard title="Logistics Network Optimization" prompt="Design an optimized distribution network for our operations. Analyze current routes, warehouse locations, transportation modes, and costs. Recommend network improvements.\n\nData: [Insert current logistics data and customer locations]\n\nProvide cost-benefit analysis for recommended changes." />
              <CopyCard title="Procurement Process Automation" prompt="Map our current procurement process and identify automation opportunities using AI and RPA. Create a phased implementation plan for automating purchase orders, approvals, and vendor communications.\n\nCurrent process: [Insert procurement workflow]\n\nProvide tool recommendations and timeline." />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><span className="w-1 h-8 bg-[#F97316]"></span>Process Automation & Workflow Optimization</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard title="Workflow Bottleneck Analysis" prompt="Identify bottlenecks and inefficiencies in our [specific workflow]. Analyze cycle times, resource utilization, handoff delays, and error rates. Recommend process improvements and automation opportunities.\n\nWorkflow description: [Insert details]\n\nProvide specific metrics and improvement recommendations." />
              <CopyCard title="RPA Use Case Assessment" prompt="Evaluate our business processes for Robotic Process Automation (RPA) opportunities. Identify high-volume, rule-based tasks suitable for automation. Score each by ROI and implementation complexity.\n\nProcesses to evaluate: [Insert list]\n\nCreate a prioritized RPA roadmap." />
              <CopyCard title="Workflow Redesign for AI Integration" prompt="Redesign our [specific process] to incorporate AI capabilities. Identify where AI can add value (prediction, decision-making, optimization). Create a detailed implementation plan.\n\nCurrent process: [Insert details]\n\nProvide redesigned workflow with AI integration points." />
              <CopyCard title="Data-Driven Decision Framework" prompt="Create a framework for embedding AI-driven decision-making into our [specific operational area]. Define data sources, decision rules, risk parameters, and monitoring requirements.\n\nOperational area: [Insert details]\n\nProvide implementation guide with templates." />
              <CopyCard title="Exception Handling Automation" prompt="Design an automated exception-handling system for our [process]. Identify common exceptions, set alert thresholds, and recommend automated vs. escalation paths.\n\nProcess: [Insert details]\nCurrent exceptions: [Insert list]\n\nProvide decision tree and implementation guide." />
              <CopyCard title="Compliance Automation" prompt="Automate compliance checks and audit trails for our [specific process]. Map regulatory requirements, design automated controls, and create compliance monitoring dashboards.\n\nProcess: [Insert details]\nRegulations: [Insert applicable regulations]\n\nProvide compliance automation architecture." />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><span className="w-1 h-8 bg-[#F97316]"></span>Quality Control & Process Improvement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard title="Quality Metrics Dashboard" prompt="Design a real-time quality metrics dashboard for our operations. Define key quality indicators, acceptable ranges, alert thresholds, and trend analysis capabilities.\n\nCurrent quality metrics: [Insert list]\n\nProvide dashboard specification and metrics framework." />
              <CopyCard title="Defect Root Cause Analysis" prompt="Analyze recent quality failures in our [product/process]. Identify root causes using historical data, process parameters, and environmental factors. Recommend corrective actions.\n\nDefect data: [Insert details]\n\nProvide root cause analysis report with recommendations." />
              <CopyCard title="Continuous Improvement Program Design" prompt="Design a data-driven continuous improvement program for our operations. Define improvement methodologies (Lean, Six Sigma), establish metrics, create feedback loops, and set improvement targets.\n\nCurrent state: [Insert details]\n\nProvide comprehensive CI program roadmap." />
              <CopyCard title="Quality Prediction Model" prompt="Build a predictive model to forecast quality issues before they occur. Identify leading indicators, historical patterns, and risk factors. Recommend preventive measures.\n\nHistorical quality data: [Insert details]\n\nProvide predictive model with early warning system." />
              <CopyCard title="Testing Automation Strategy" prompt="Create a comprehensive testing automation strategy for our [product/process]. Identify testable elements, design automated test protocols, and implement continuous testing.\n\nProcess: [Insert details]\n\nProvide testing automation roadmap." />
              <CopyCard title="Supplier Quality Management" prompt="Implement a quality management system for our suppliers. Define quality standards, establish testing protocols, create supplier scorecards, and implement corrective action procedures.\n\nSuppliers: [Insert list]\n\nProvide supplier quality management framework." />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><span className="w-1 h-8 bg-[#F97316]"></span>Cost Optimization & Resource Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard title="Operational Cost Analysis" prompt="Conduct a comprehensive operational cost analysis. Break down costs by category, identify cost drivers, benchmark against industry standards, and recommend optimization opportunities.\n\nFinancial data: [Insert details]\n\nProvide detailed cost analysis with recommendations." />
              <CopyCard title="Resource Utilization Optimization" prompt="Analyze resource utilization across our operations. Identify underutilized assets, excess capacity, and resource allocation inefficiencies. Recommend rebalancing strategies.\n\nResource data: [Insert details]\n\nProvide utilization analysis with optimization recommendations." />
              <CopyCard title="Energy Consumption Optimization" prompt="Analyze energy consumption patterns in our [facility/operation]. Identify waste, inefficiencies, and optimization opportunities. Recommend investments in efficiency improvements.\n\nEnergy data: [Insert consumption details]\n\nProvide energy optimization plan with ROI analysis." />
              <CopyCard title="Labor Productivity Improvement" prompt="Analyze labor productivity metrics across our operations. Identify productivity bottlenecks, skill gaps, and workflow inefficiencies. Recommend process changes and training needs.\n\nProductivity data: [Insert metrics]\n\nProvide labor productivity improvement plan." />
              <CopyCard title="Make vs. Buy Analysis" prompt="Conduct a make vs. buy analysis for [specific components/services]. Compare internal production costs with external sourcing. Include quality, capacity, and risk considerations.\n\nData: [Insert cost and capacity information]\n\nProvide detailed analysis with recommendation." />
              <CopyCard title="Budget Forecasting Model" prompt="Build an AI-powered budget forecasting model for our operations. Account for historical spending, seasonal patterns, growth projections, and market factors.\n\nHistorical data: [Insert budget history]\n\nProvide monthly budget forecast with confidence intervals." />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><span className="w-1 h-8 bg-[#F97316]"></span>Predictive Analytics & Strategic Planning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard title="Capacity Planning Model" prompt="Build a predictive capacity planning model for our [operation]. Forecast demand, analyze capacity constraints, identify expansion needs, and recommend investment timing.\n\nData: [Insert capacity and demand data]\n\nProvide capacity forecast with expansion recommendations." />
              <CopyCard title="Equipment Maintenance Scheduling" prompt="Implement predictive maintenance scheduling for our equipment. Analyze failure patterns, predict maintenance needs, and create an optimized maintenance schedule.\n\nEquipment data: [Insert maintenance history]\n\nProvide predictive maintenance plan with cost savings estimate." />
              <CopyCard title="Seasonal Operations Planning" prompt="Analyze seasonal patterns in our operations and create optimization strategies for high and low seasons. Recommend staffing, inventory, and resource adjustments.\n\nHistorical seasonal data: [Insert details]\n\nProvide seasonal planning strategy." />
              <CopyCard title="Market Scenario Analysis" prompt="Model the impact of various market scenarios on our operations. Analyze best case, worst case, and base case scenarios. Recommend contingency plans.\n\nScenarios: [Insert details]\n\nProvide scenario analysis with strategic recommendations." />
              <CopyCard title="Growth Impact Modeling" prompt="Model the operational impact of [growth strategy]. Analyze resource requirements, capacity implications, bottlenecks, and process changes needed to support growth.\n\nGrowth strategy: [Insert details]\n\nProvide impact analysis with implementation requirements." />
              <CopyCard title="Risk Assessment & Mitigation" prompt="Conduct a comprehensive operational risk assessment. Identify critical risks, probability and impact analysis, and mitigation strategies for each significant risk.\n\nOperational context: [Insert details]\n\nProvide risk matrix with mitigation plans." />
            </div>
          </section>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-8">Related AI Prompt Pages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/ai-for-workforce-management-prompts" className="p-4 bg-[#1a1a1a] rounded-lg hover:border-[#F97316] border border-[#2a2a2a] transition-colors text-white hover:text-[#F97316]">Workforce Management</Link>
            <Link href="/ai-for-event-management-prompts" className="p-4 bg-[#1a1a1a] rounded-lg hover:border-[#F97316] border border-[#2a2a2a] transition-colors text-white hover:text-[#F97316]">Event Management</Link>
            <Link href="/ai-for-facilities-management-prompts" className="p-4 bg-[#1a1a1a] rounded-lg hover:border-[#F97316] border border-[#2a2a2a] transition-colors text-white hover:text-[#F97316]">Facilities Management</Link>
            <Link href="/ai-for-document-management-prompts" className="p-4 bg-[#1a1a1a] rounded-lg hover:border-[#F97316] border border-[#2a2a2a] transition-colors text-white hover:text-[#F97316]">Document Management</Link>
            <Link href="/ai-for-news-prompts" className="p-4 bg-[#1a1a1a] rounded-lg hover:border-[#F97316] border border-[#2a2a2a] transition-colors text-white hover:text-[#F97316]">News & Journalism</Link>
            <Link href="/ai-question-answering-prompts" className="p-4 bg-[#1a1a1a] rounded-lg hover:border-[#F97316] border border-[#2a2a2a] transition-colors text-white hover:text-[#F97316]">Q&A Systems</Link>
            <Link href="/squibler-ai-prompts" className="p-4 bg-[#1a1a1a] rounded-lg hover:border-[#F97316] border border-[#2a2a2a] transition-colors text-white hover:text-[#F97316]">Squibler Writing</Link>
            <Link href="/ai-summarizer-prompts" className="p-4 bg-[#1a1a1a] rounded-lg hover:border-[#F97316] border border-[#2a2a2a] transition-colors text-white hover:text-[#F97316]">Content Summarization</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
