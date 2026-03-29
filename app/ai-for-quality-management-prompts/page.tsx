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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#059669] transition-colors">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono mb-4 max-h-64">{prompt}</pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] text-white font-medium py-2 px-4 rounded">
        {copied ? (<><Check className="w-4 h-4" />Copied</>) : (<><Copy className="w-4 h-4" />Copy Prompt</>)}
      </button>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 bg-[#1a1a1a] hover:bg-[#242424] transition-colors">
        <span className="font-semibold text-white text-left">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#059669] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="p-4 bg-[#0a0a0a] border-t border-[#2a2a2a] text-gray-300">{answer}</div>}
    </div>
  )
}

export default function QualityManagementPromptsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "100+ Best AI Prompts for Quality Management",
    description: "Expert AI prompts for quality management including process improvement, Six Sigma, audit preparation, SOP creation, defect analysis, and continuous improvement.",
    datePublished: "2026-03-29",
    dateModified: "2026-03-29",
    image: "https://gptprompts.ai/og.png",
    author: { "@type": "Organization", name: "GPTPrompts.AI" }
  }
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How can AI help with quality management?", acceptedAnswer: { "@type": "Answer", text: "AI can assist with defect pattern analysis, automated inspection documentation, SOP generation, root cause analysis, statistical process control, audit preparation, corrective action planning, and predictive quality analytics." } },
      { "@type": "Question", name: "What is Six Sigma and how does AI support it?", acceptedAnswer: { "@type": "Answer", text: "Six Sigma is a methodology for eliminating defects and reducing variation. AI supports it by analyzing large datasets to identify defect patterns, automating statistical calculations, and generating DMAIC documentation." } },
      { "@type": "Question", name: "Can AI write standard operating procedures?", acceptedAnswer: { "@type": "Answer", text: "AI can draft comprehensive SOPs based on process descriptions you provide, including step-by-step instructions, safety precautions, quality checkpoints, and compliance requirements. Human review and validation is always needed." } },
      { "@type": "Question", name: "What quality management frameworks work with AI?", acceptedAnswer: { "@type": "Answer", text: "AI can support ISO 9001, Six Sigma, Lean, Total Quality Management (TQM), Kaizen, and CMMI frameworks by generating documentation, analyzing data, and creating improvement plans aligned with each methodology." } },
      { "@type": "Question", name: "How does AI help with root cause analysis?", acceptedAnswer: { "@type": "Answer", text: "AI can guide you through structured root cause analysis methods like 5 Whys, Ishikawa (fishbone) diagrams, and fault tree analysis, helping identify contributing factors and suggesting corrective actions based on the patterns found." } },
      { "@type": "Question", name: "Can AI predict quality issues before they happen?", acceptedAnswer: { "@type": "Answer", text: "With the right data, AI can identify trends and patterns that precede quality failures, enabling predictive quality management. This includes monitoring process parameters, environmental conditions, and supplier quality metrics." } },
      { "@type": "Question", name: "How do I use AI for quality audits?", acceptedAnswer: { "@type": "Answer", text: "AI can help prepare audit checklists based on relevant standards, generate pre-audit documentation, analyze previous audit findings, draft corrective action plans, and create audit reports with findings categorized by severity." } },
      { "@type": "Question", name: "What is CAPA and how can AI assist?", acceptedAnswer: { "@type": "Answer", text: "CAPA (Corrective and Preventive Action) is a systematic approach to investigating and addressing quality issues. AI can help document non-conformances, analyze trends, draft corrective actions, and track effectiveness of implemented solutions." } },
      { "@type": "Question", name: "Can AI help with supplier quality management?", acceptedAnswer: { "@type": "Answer", text: "AI can analyze supplier performance data, generate scorecards, identify at-risk suppliers, draft quality agreements, create incoming inspection procedures, and recommend supplier development actions." } },
      { "@type": "Question", name: "Is AI useful for quality management in regulated industries?", acceptedAnswer: { "@type": "Answer", text: "Yes, AI is particularly valuable in regulated industries (pharma, medical devices, aerospace, food) for generating compliant documentation, tracking regulatory changes, and ensuring processes meet GMP, FDA, or other regulatory requirements." } }
    ]
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#059669]/10 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1 bg-[#059669]/10 border border-[#059669]/30 rounded-full text-sm text-[#059669] mb-6">100+ Quality Management Prompts</div>
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Best AI Prompts for Quality Management</h1>
          <p className="text-xl text-gray-400 mb-8">Streamline quality processes with AI prompts for Six Sigma, SOP creation, audit preparation, defect analysis, CAPA management, and continuous improvement.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#059669]">Process Improvement &amp; Six Sigma</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="DMAIC Project Charter" prompt="Create a Six Sigma DMAIC project charter for reducing [specific defect/issue] in our [process name]. Include: project title, business case with financial impact estimate, problem statement using measurable terms, goal statement with target metrics, project scope (in-scope and out-of-scope), timeline with phase milestones, team roles (Champion, Black Belt, Green Belt, team members), and preliminary risk assessment." />
            <CopyCard title="Process Capability Analysis" prompt="Guide me through a process capability analysis for our [process name]. Current specifications: USL = [value], LSL = [value], Target = [value]. Recent measurement data: [paste data or describe]. Calculate Cp, Cpk, Pp, and Ppk indices. Interpret the results, identify whether the process is capable and centered, and recommend specific improvements if capability indices are below 1.33." />
            <CopyCard title="Value Stream Map Documentation" prompt="Help me document a value stream map for our [product/service] from [start point] to [end point]. For each process step, I need to capture: cycle time, changeover time, uptime percentage, batch size, number of operators, inventory levels between steps, and information flow. Identify the 3 biggest wastes (muda) and suggest kaizen improvement opportunities with estimated impact." />
            <CopyCard title="Statistical Process Control Plan" prompt="Develop an SPC (Statistical Process Control) plan for monitoring [critical quality parameter] in our [process]. Include: which control chart type to use (X-bar/R, X-bar/S, p-chart, etc.) and why, sampling frequency and size, control limit calculation methodology, reaction plan for out-of-control signals (Western Electric rules), escalation procedures, and data recording requirements." />
            <CopyCard title="Lean Waste Identification Audit" prompt="Create a comprehensive Lean waste identification checklist for our [department/process area]. For each of the 8 wastes (TIMWOODS: Transportation, Inventory, Motion, Waiting, Overproduction, Over-processing, Defects, Skills underutilization), provide: 5 specific questions to ask during the gemba walk, observable indicators to look for, measurement methods, and quick-win improvement suggestions." />
            <CopyCard title="Kaizen Event Planning" prompt="Plan a 5-day Kaizen event to improve [specific process/metric]. Day 1: Current state mapping and problem definition. Day 2: Root cause analysis and solution brainstorming. Day 3: Solution design and pilot planning. Day 4: Implementation and testing. Day 5: Standardization and sustainability plan. For each day, list: activities, deliverables, materials needed, and team assignments." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#059669]">Audit Preparation &amp; Compliance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="ISO 9001 Internal Audit Checklist" prompt="Create a comprehensive internal audit checklist for ISO 9001:2015 compliance covering clauses 4 through 10. For each clause, include: 3-5 specific audit questions, evidence to look for, common non-conformities found in [our industry], and guidance on classifying findings as major non-conformity, minor non-conformity, or observation. Format as a table with columns for clause, question, evidence required, finding, and notes." />
            <CopyCard title="Corrective Action Plan (CAPA)" prompt="Draft a corrective action plan for this quality issue: [describe the non-conformance]. Structure: 1) Non-conformance description with date, location, and impact, 2) Immediate containment actions taken, 3) Root cause analysis using 5 Whys method, 4) Corrective actions with responsible persons and due dates, 5) Preventive actions to avoid recurrence, 6) Effectiveness verification criteria and timeline, 7) Documentation and closure requirements." />
            <CopyCard title="Management Review Meeting Agenda" prompt="Prepare a comprehensive management review meeting agenda aligned with ISO 9001:2015 clause 9.3. Include these required inputs: internal/external audit results, customer feedback analysis, process performance metrics, non-conformity and corrective action status, previous management review actions, changes affecting the QMS, resource adequacy assessment, and improvement opportunities. For each item, suggest the data to present and key questions for leadership discussion." />
            <CopyCard title="Supplier Audit Protocol" prompt="Develop a supplier quality audit protocol for evaluating [supplier type] against our quality requirements. Include: pre-audit questionnaire (20 questions covering QMS, processes, training, testing), on-site audit checklist organized by area (receiving, production, testing, storage, shipping), scoring criteria (1-5 scale with descriptions), critical vs. major vs. minor finding definitions, and post-audit report template with supplier improvement requirements." />
            <CopyCard title="Document Control Procedure" prompt="Write a document control procedure that meets ISO 9001:2015 clause 7.5 requirements for our [company type]. Cover: document creation and approval workflow, version control methodology, distribution and access control, revision and change management process, obsolete document handling, retention schedule by document type, electronic vs. physical document requirements, and roles and responsibilities for document control." />
            <CopyCard title="Regulatory Compliance Gap Analysis" prompt="Conduct a gap analysis between our current quality system and [specific regulation/standard] requirements. For each requirement section, provide: the requirement summary, our current state (compliant/partial/non-compliant), specific gaps identified, recommended remediation actions with priority (high/medium/low), estimated effort to close each gap, and suggested timeline. Focus on the most critical gaps that pose the highest risk." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#059669]">SOP &amp; Documentation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="Standard Operating Procedure Template" prompt="Write a detailed SOP for [process name] following our documentation standards. Include: document header (title, SOP number, revision, effective date, author, approver), purpose and scope, definitions and abbreviations, safety precautions and PPE requirements, required materials and equipment, step-by-step procedure with decision points and quality checkpoints, acceptance criteria, troubleshooting guide for common issues, and reference documents." />
            <CopyCard title="Work Instruction with Visual Aids" prompt="Create a work instruction for [specific task] that a new operator could follow independently. Write each step as a clear action verb instruction (e.g., 'Position the component...'). Include: prerequisite checks before starting, step sequence with critical parameters highlighted, visual aid descriptions (photos/diagrams needed at each step), quality verification points with accept/reject criteria, and common mistakes to avoid." />
            <CopyCard title="Inspection Procedure Development" prompt="Develop an incoming/in-process/final inspection procedure for [product]. Include: inspection type and frequency, sampling plan (AQL-based or 100% inspection with justification), measurement methods and equipment required (with calibration requirements), dimensional and visual acceptance criteria with tolerances, defect classification (critical/major/minor), recording and reporting requirements, and disposition procedures for non-conforming material." />
            <CopyCard title="Training Matrix and Competency Assessment" prompt="Create a training matrix for the [department] quality team. List all required competencies organized by: technical skills (testing methods, equipment operation, data analysis), system knowledge (QMS procedures, regulatory requirements), and soft skills (problem-solving, communication). For each competency, define: proficiency levels (1-4), assessment methods, training resources, requalification frequency, and the minimum competency level required for each role." />
            <CopyCard title="Quality Manual Section" prompt="Draft the [specific section] of our quality manual for a [industry type] company. This section should cover: policy statement aligned with company vision, scope of application, process description with inputs/outputs/controls, key performance indicators with targets, roles and responsibilities, interaction with other QMS processes, and applicable documents and records. Align with ISO 9001:2015 structure." />
            <CopyCard title="Change Control Procedure" prompt="Write a change control procedure for managing changes to [products/processes/documents] in our quality system. Include: change request initiation form fields, impact assessment criteria (quality, regulatory, customer, cost, timeline), risk evaluation using FMEA approach, approval authority matrix based on change classification (minor/major/critical), implementation planning requirements, verification and validation steps, and post-implementation review process." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#059669]">Defect Analysis &amp; Root Cause</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="5 Whys Root Cause Analysis" prompt="Guide me through a structured 5 Whys analysis for this quality problem: [describe the defect/failure]. For each 'Why' level: state the question clearly, provide the answer based on evidence (not assumption), identify whether verification data exists, and flag if the answer is a guess that needs investigation. Continue until we reach the true root cause (something we can directly act on). Then recommend 3 corrective actions addressing the root cause." />
            <CopyCard title="Fishbone Diagram Analysis" prompt="Create a comprehensive Ishikawa (fishbone) diagram analysis for the problem: [describe quality issue]. Analyze all 6M categories: Man (people/skills), Machine (equipment), Method (process), Material (inputs), Measurement (inspection), and Mother Nature (environment). For each category, identify 3-5 potential causes. Then prioritize the top 5 most likely root causes based on frequency, detectability, and severity. Suggest data collection plans to verify each." />
            <CopyCard title="Failure Mode and Effects Analysis" prompt="Conduct a Process FMEA for [process/product name]. For each process step, identify: potential failure modes, potential effects of each failure (local, next-level, end-effect), severity rating (1-10), potential causes, occurrence rating (1-10), current detection controls, detection rating (1-10), and calculate RPN (Risk Priority Number). For all items with RPN above 100, recommend specific actions to reduce risk. Format as a standard FMEA table." />
            <CopyCard title="Pareto Analysis for Defect Prioritization" prompt="Analyze this defect data and create a Pareto analysis:\n\n[List defect types and their frequencies]\n\nProvide: sorted defect list by frequency (descending), cumulative percentage for each defect type, identification of the vital few (80/20 rule), recommended investigation priority, estimated cost impact for each defect category if possible, and an action plan focusing on the top 3 defect types that represent 80% of all issues." />
            <CopyCard title="8D Problem Solving Report" prompt="Complete an 8D problem-solving report for this quality issue: [describe the problem]. D1: Team formation (suggest roles needed). D2: Problem description using IS/IS NOT analysis. D3: Interim containment actions. D4: Root cause analysis with verification. D5: Permanent corrective actions. D6: Implementation and validation plan. D7: Preventive actions and systemic improvements. D8: Congratulate the team and document lessons learned." />
            <CopyCard title="Trend Analysis for Recurring Defects" prompt="Analyze this quality data for trends and patterns:\n\n[Paste defect data with dates, types, locations, shifts, operators, etc.]\n\nIdentify: temporal patterns (time of day, day of week, seasonal), correlation with specific variables (operator, machine, material lot, environmental conditions), any deteriorating trends that suggest impending failures, and statistical significance of observed patterns. Provide control chart interpretation and recommend monitoring thresholds." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#059669]">Continuous Improvement &amp; Metrics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="Quality KPI Dashboard Design" prompt="Design a quality management KPI dashboard for our [industry type] organization. Include these categories: Customer Quality (complaint rate, returns, CSAT), Internal Quality (first pass yield, scrap rate, rework hours), Supplier Quality (incoming reject rate, on-time delivery, supplier scores), Process Quality (Cpk indices, SPC alerts, OEE), and System Quality (audit findings, CAPA closure rate, training compliance). For each KPI, define: calculation formula, data source, target, frequency, and visual display type." />
            <CopyCard title="Cost of Quality Analysis" prompt="Help me calculate and analyze the Cost of Quality (CoQ) for our [business/product line]. Categorize costs into: Prevention costs (training, quality planning, process validation, supplier evaluation), Appraisal costs (inspection, testing, calibration, audits), Internal failure costs (scrap, rework, re-inspection, downtime), and External failure costs (warranty, returns, complaints, recalls). Estimate each cost category, calculate CoQ as percentage of revenue, and identify the optimal balance between prevention/appraisal investment and failure cost reduction." />
            <CopyCard title="Monthly Quality Review Report" prompt="Generate a monthly quality review report template for [month/department]. Include sections: Executive summary (3 key highlights and 2 areas of concern), KPI performance vs. targets (with trend arrows), customer complaint analysis (new, resolved, aging), internal non-conformance summary by category, CAPA status (open, overdue, closed this month, effectiveness verified), supplier quality performance, upcoming audit schedule, and recommended management actions with owners and due dates." />
            <CopyCard title="Continuous Improvement Project Tracker" prompt="Create a continuous improvement project tracking system for our quality department. For each project, track: project name and ID, improvement methodology (DMAIC, PDCA, A3, Kaizen), current phase, problem statement, target metric and current baseline, projected savings/benefit, team lead and members, start date, target completion date, percent complete, current status (on-track/at-risk/delayed), next milestone, and blockers. Include a summary view showing total projects by phase and projected annual savings." />
            <CopyCard title="Quality Culture Assessment Survey" prompt="Design a 25-question quality culture assessment survey for our organization. Cover these dimensions: Leadership commitment to quality (5 questions), Employee engagement in quality (5 questions), Communication and transparency about quality issues (5 questions), Problem-solving and learning from failures (5 questions), and Customer focus and quality ownership (5 questions). Use a 5-point Likert scale. Include 3 open-ended questions. Provide scoring methodology and benchmark interpretation guide." />
            <CopyCard title="Annual Quality Objectives Planning" prompt="Help me develop annual quality objectives for [year] aligned with our strategic goals. For each objective: write a SMART goal statement, define 2-3 supporting KPIs with targets, identify required resources and budget, list key initiatives/projects to achieve the objective, assign an owner, set quarterly milestones, and define how success will be measured. Include objectives across all quality dimensions: product quality, process efficiency, customer satisfaction, regulatory compliance, and team development." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="How can AI help with quality management?" answer="AI can assist with defect pattern analysis, automated inspection documentation, SOP generation, root cause analysis, statistical process control, audit preparation, corrective action planning, and predictive quality analytics." />
            <FAQItem question="What is Six Sigma and how does AI support it?" answer="Six Sigma is a methodology for eliminating defects and reducing variation. AI supports it by analyzing large datasets to identify defect patterns, automating statistical calculations, and generating DMAIC documentation." />
            <FAQItem question="Can AI write standard operating procedures?" answer="AI can draft comprehensive SOPs based on process descriptions you provide, including step-by-step instructions, safety precautions, quality checkpoints, and compliance requirements. Human review and validation is always needed." />
            <FAQItem question="What quality management frameworks work with AI?" answer="AI can support ISO 9001, Six Sigma, Lean, Total Quality Management (TQM), Kaizen, and CMMI frameworks by generating documentation, analyzing data, and creating improvement plans aligned with each methodology." />
            <FAQItem question="How does AI help with root cause analysis?" answer="AI can guide you through structured root cause analysis methods like 5 Whys, Ishikawa (fishbone) diagrams, and fault tree analysis, helping identify contributing factors and suggesting corrective actions based on the patterns found." />
            <FAQItem question="Can AI predict quality issues before they happen?" answer="With the right data, AI can identify trends and patterns that precede quality failures, enabling predictive quality management. This includes monitoring process parameters, environmental conditions, and supplier quality metrics." />
            <FAQItem question="How do I use AI for quality audits?" answer="AI can help prepare audit checklists based on relevant standards, generate pre-audit documentation, analyze previous audit findings, draft corrective action plans, and create audit reports with findings categorized by severity." />
            <FAQItem question="What is CAPA and how can AI assist?" answer="CAPA (Corrective and Preventive Action) is a systematic approach to investigating and addressing quality issues. AI can help document non-conformances, analyze trends, draft corrective actions, and track effectiveness of implemented solutions." />
            <FAQItem question="Can AI help with supplier quality management?" answer="AI can analyze supplier performance data, generate scorecards, identify at-risk suppliers, draft quality agreements, create incoming inspection procedures, and recommend supplier development actions." />
            <FAQItem question="Is AI useful for quality management in regulated industries?" answer="Yes, AI is particularly valuable in regulated industries (pharma, medical devices, aerospace, food) for generating compliant documentation, tracking regulatory changes, and ensuring processes meet GMP, FDA, or other regulatory requirements." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Explore More Prompts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "ChatGPT Prompts", href: "/chatgpt-prompts", color: "#10A37F" },
              { title: "Claude Prompts", href: "/claude-prompts", color: "#D97706" },
              { title: "AI for Small Business", href: "/ai-prompts-small-business", color: "#8B5CF6" },
              { title: "AI for Finance", href: "/ai-prompts-finance", color: "#10B981" },
              { title: "AI for Product Managers", href: "/ai-prompts-product-managers", color: "#6366F1" },
              { title: "AI for Sales", href: "/ai-prompts-sales-partnerships", color: "#F59E0B" },
              { title: "AI for Operations", href: "/ai-for-operations-management-prompts", color: "#F97316" },
              { title: "AI for Risk Management", href: "/ai-for-risk-management-prompts", color: "#DC2626" },
            ].map((page) => (
              <Link key={page.href} href={page.href} className="block p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-opacity-60 transition-colors text-center" style={{ borderColor: page.color + "40" }}>
                <span className="font-medium text-white text-sm">{page.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}