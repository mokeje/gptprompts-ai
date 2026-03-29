"use client"

import { useState } from "react"
import Link from "next/link"
import { Copy, Check, ChevronDown, ChevronUp, Zap, Brain, TrendingUp, MessageSquare, Search, Lightbulb } from "lucide-react"

const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#1E40AF] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-center gap-2 bg-[#1E40AF] hover:bg-[#3b5bdb] text-white font-medium py-2 px-4 rounded transition-colors"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy Prompt
          </>
        )}
      </button>
    </div>
  )
}

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-[#2a2a2a] rounded-lg">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 hover:bg-[#1a1a1a] transition-colors text-left"
      >
        <span className="font-medium text-white">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#1E40AF] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="border-t border-[#2a2a2a] p-4 bg-[#0f0f0f] text-gray-300 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function MicrosoftCopilotPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <header className="bg-gradient-to-b from-[#1E40AF] to-[#1a2f5a] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block hover:text-[#1E40AF] transition-colors">
            GPTPrompts.AI
          </Link>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-[#1E40AF] rounded-lg flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-6xl md:text-8xl font-bold">Microsoft</h1>
              <p className="text-2xl md:text-4xl text-[#a5c8ff] font-light">Copilot Enterprise</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            Master M365 workflows. Expert prompts for Teams, Excel, Power BI, Outlook, and Graph grounding. Enterprise-grade automation at your fingertips.
          </p>
          <div className="mt-8 inline-block bg-[#1E40AF] text-white px-6 py-2 rounded-lg font-semibold">
            Category: Productivity &amp; Enterprise AI
          </div>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Section 1: Teams &amp; Communication Prompts */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#1E40AF] rounded-lg flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">Teams &amp; Communication</h2>
          </div>
          <p className="text-gray-400 mb-12 text-lg">Enhance collaboration and communication across your organization with AI-powered Teams prompts.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <CopyCard
              title="Meeting Summary Generator"
              prompt="Analyze the following Teams meeting transcript and provide a concise executive summary including: key decisions made, action items with owners, risks identified, and next steps. Format the output as a structured document with clear sections.\n\nMeeting Transcript:\n[PASTE TRANSCRIPT HERE]\n\nProvide a professional summary suitable for distribution to stakeholders who missed the meeting."
            />
            <CopyCard
              title="Team Announcement Composer"
              prompt="Create a professional, engaging announcement for our Microsoft Teams channel about the following update:\n\nUpdate Details: [PROVIDE DETAILS]\n\nTone: [PROFESSIONAL/CASUAL/URGENT]\n\nInclude:\n- A compelling headline\n- Context about why this matters\n- Key details and timeline\n- Call to action\n- Links to relevant resources\n\nFormat for Teams channel posting with appropriate emojis and formatting."
            />
            <CopyCard
              title="Conflict Resolution Protocol"
              prompt="I need to address a team conflict situation. Generate a structured communication plan for resolving this using Copilot for Teams:\n\nSituation: [DESCRIBE CONFLICT]\nParties Involved: [LIST TEAM MEMBERS]\nObjective: [DESIRED OUTCOME]\n\nProvide:\n- Initial one-on-one conversation frameworks\n- Group discussion agenda\n- Documentation template\n- Follow-up check-in schedule\n\nEnsure the approach maintains psychological safety and team cohesion."
            />
          </div>
        </div>

        {/* Section 2: Excel &amp; Data Analysis */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#1E40AF] rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">Excel &amp; Data Analysis</h2>
          </div>
          <p className="text-gray-400 mb-12 text-lg">Transform raw data into actionable insights with AI-powered Excel analysis and reporting.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <CopyCard
              title="Sales Performance Analysis"
              prompt="I have sales data in Excel with columns for: Date, Sales Rep, Product, Revenue, Region, and Deal Stage.\n\nUsing Copilot in Excel, create:\n1. A pivot table analyzing revenue by rep and region\n2. A trend analysis showing Q1-Q3 performance\n3. Identify top 5 performing reps and their key products\n4. Flag underperforming regions with percentage variance from target\n5. Generate recommendations for performance improvement\n\nProvide formulas I can use and explain the insights clearly."
            />
            <CopyCard
              title="Budget Variance Report"
              prompt="Generate an automated budget variance analysis for our department expenses. I have:\n\n- Budget by Category (columns: Category, Budgeted Amount, Actual Spent, Variance %)\n- Monthly breakdown data\n\nCreate:\n1. Variance analysis with conditional formatting (red for over-budget)\n2. Month-over-month spending trends\n3. Department comparison analysis\n4. Forecast for remaining budget\n5. Executive summary with recommendations\n\nStructure this for presentation to finance leadership."
            />
            <CopyCard
              title="Customer Cohort Analysis"
              prompt="Analyze our customer data to understand behavior patterns:\n\nData includes: Customer ID, Signup Date, Purchase Amount, Purchase Frequency, Last Purchase Date, Churn Status\n\nUsing Copilot:\n1. Segment customers into cohorts by signup month\n2. Calculate retention rates by cohort\n3. Analyze spending patterns and lifetime value\n4. Identify high-risk churn cohorts\n5. Generate actionable retention recommendations\n\nFormat results for presentation to marketing and product teams."
            />
          </div>
        </div>

        {/* Section 3: Power BI &amp; Dashboarding */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#1E40AF] rounded-lg flex items-center justify-center flex-shrink-0">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">Power BI &amp; Dashboarding</h2>
          </div>
          <p className="text-gray-400 mb-12 text-lg">Build intelligent dashboards with AI assistance to drive data-driven decision making.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <CopyCard
              title="KPI Dashboard Design"
              prompt="I need to build a Power BI dashboard for tracking our key business metrics. Our KPIs are:\n\n- Monthly Recurring Revenue (MRR)\n- Customer Acquisition Cost (CAC)\n- Churn Rate\n- Net Revenue Retention\n- Support Ticket Resolution Time\n\nUsing Copilot in Power BI, help me:\n1. Design the dashboard layout\n2. Create visualizations for each KPI\n3. Add drill-down capabilities by region/team\n4. Set up alerts for metrics below threshold\n5. Create a narrative summary using AI insights\n\nTarget audience: Executive leadership."
            />
            <CopyCard
              title="Predictive Analytics Setup"
              prompt="Set up predictive analytics in Power BI using our historical data:\n\nData: Monthly revenue, seasonality patterns, marketing spend, customer acquisition, product launches\n\nImplement:\n1. Revenue forecasting model for next 12 months\n2. Confidence intervals and error margins\n3. Driver analysis showing what impacts revenue most\n4. Scenario planning (best case/worst case/realistic)\n5. Automated anomaly detection\n\nExplain model assumptions and limitations for stakeholders."
            />
            <CopyCard
              title="Customer Health Scorecard"
              prompt="Create a Power BI customer health dashboard that tracks account health metrics:\n\nMetrics: Usage frequency, feature adoption rate, support ticket volume, NPS score, renewal risk\n\nDesign:\n1. Heat map showing all accounts with health status\n2. Drill-down by customer segment and size\n3. Early warning system for at-risk accounts\n4. Recommended actions by Copilot AI\n5. Comparative benchmarking against similar accounts\n\nIntegrate with our CRM system for real-time updates."
            />
          </div>
        </div>

        {/* Section 4: Outlook &amp; Email Productivity */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#1E40AF] rounded-lg flex items-center justify-center flex-shrink-0">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">Outlook &amp; Email Productivity</h2>
          </div>
          <p className="text-gray-400 mb-12 text-lg">Master email productivity and communication with AI-powered Outlook prompts.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <CopyCard
              title="Executive Briefing Email"
              prompt="Draft a professional executive briefing email on behalf of our department:\n\nSubject Matter: [TOPIC]\nKey Points to Convey: [LIST 3-5 POINTS]\nTarget Recipient: [TITLE/ROLE]\nActionable Items: [WHAT YOU NEED FROM THEM]\nTimeline: [URGENCY]\n\nRequirements:\n- Concise (2-3 paragraphs max)\n- Professional but approachable tone\n- Clear call to action\n- Formatted for easy scanning\n- Include relevant data points\n\nGenerate 3 versions and choose the best fit."
            />
            <CopyCard
              title="Complex Email Summarizer"
              prompt="I received a lengthy email thread with multiple participants and context switches. Using Copilot:\n\n1. Extract the main topic and sub-topics\n2. Identify who said what and their positions\n3. List agreed-upon decisions\n4. Highlight unresolved items\n5. Create an action items list with owners\n6. Generate a brief response acknowledging key points\n\n[PASTE EMAIL THREAD]\n\nFormat the summary for quick scanning and provide a template response."
            />
            <CopyCard
              title="Client Relationship Email"
              prompt="Craft a strategic client relationship email with multiple objectives:\n\nClient Name: [NAME]\nObjectives: [LIST GOALS - e.g., upsell, strengthen relationship, gather feedback]\nCurrent Status: [CONTEXT]\nProposed Value: [WHAT YOU&apos;RE OFFERING]\n\nGenerate:\n1. Personalized opening that references shared history\n2. Business value proposition tailored to their situation\n3. Specific proposal or request\n4. Social proof or success stories\n5. Clear next steps\n\nTone should be warm, professional, and value-focused."
            />
          </div>
        </div>

        {/* Section 5: Microsoft Graph &amp; Advanced Integration */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#1E40AF] rounded-lg flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">Graph &amp; Advanced Integration</h2>
          </div>
          <p className="text-gray-400 mb-12 text-lg">Leverage Microsoft Graph API and advanced automation for enterprise-wide intelligence.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <CopyCard
              title="Cross-Platform Data Integration"
              prompt="Design a Microsoft Graph integration that connects:\n\nData Sources: Teams chat, Calendar events, SharePoint documents, OneDrive activity\nObjective: Build a unified team productivity view\n\nUsing Copilot, create:\n1. API calls needed to fetch relevant data\n2. Data transformation and aggregation logic\n3. Insights to extract (collaboration patterns, content creation, communication volume)\n4. Privacy and compliance safeguards\n5. Dashboard/report design for insights\n6. Automation schedule and refresh strategy\n\nTarget: Enable managers to understand team dynamics and bottlenecks."
            />
            <CopyCard
              title="Compliance &amp; Retention Policy"
              prompt="Set up a comprehensive compliance framework using Microsoft 365 capabilities:\n\nRequirements: Data retention, eDiscovery, audit logging, regulatory standards (GDPR/CCPA)\n\nImplement:\n1. Retention policies by content type (email, Teams, SharePoint)\n2. Retention labels and auto-apply rules\n3. eDiscovery workflow documentation\n4. Audit log configuration and monitoring\n5. Compliance reports and automated alerts\n6. Training content for team members\n\nEnsure documented alignment with legal and privacy teams."
            />
            <CopyCard
              title="Automated Workflow Engine"
              prompt="Build an automation suite using Power Automate and Microsoft Graph:\n\nWorkflows Needed:\n1. New employee onboarding (provision accounts, teams, access)\n2. Document approval routing (multi-level, parallel, conditional)\n3. Escalation management for high-priority items\n4. Data sync between systems (CRM, ERP, SharePoint)\n5. Scheduled reporting (daily, weekly, monthly)\n\nFor each workflow, provide:\n- Trigger conditions\n- Decision logic and conditions\n- Integration points\n- Error handling and retry logic\n- Monitoring and logging strategy"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem
            q="How do I enable Microsoft Copilot in my M365 environment?"
            a="Microsoft Copilot is available in several M365 products. Enable it by: 1) Check your tenant settings and licensing (Copilot Pro or enterprise licenses required), 2) Visit admin.microsoft.com and enable Copilot in relevant services (Teams, Excel, etc.), 3) Assign appropriate licenses to users, 4) Provide team training on Copilot features. Note that availability varies by product and region. Some features require specific subscription tiers."
          />
          <FAQItem
            q="What data privacy and security considerations should I know about?"
            a="Microsoft Copilot follows these key security practices: 1) Data is processed within your tenant and not used to train public models, 2) Sensitive information is protected by Microsoft&apos;s security infrastructure, 3) Audit logs track Copilot usage for compliance, 4) You maintain control over what data Copilot accesses through permissions, 5) GDPR and SOC 2 compliance standards apply. Always review your data handling policies with your legal team."
          />
          <FAQItem
            q="Can I customize Copilot behavior for my organization?"
            a="Yes, you can customize Copilot through: 1) Graph connectors to add custom data sources, 2) Power Automate to create custom workflows integrated with Copilot, 3) Custom prompts and guidelines for your teams, 4) Admin policies to control which features are available, 5) Fine-tuning through usage patterns and feedback. Work with your IT team to define organization-specific governance."
          />
          <FAQItem
            q="How do I measure the ROI of Microsoft Copilot adoption?"
            a="Track these metrics: 1) Time savings (hours saved per task), 2) Productivity increase (output per employee per day), 3) Error reduction (quality improvements), 4) Adoption rates (% of users actively using), 5) Cost per task before/after implementation, 6) Employee satisfaction and engagement scores. Use Power BI dashboards to visualize trends and report to leadership monthly."
          />
          <FAQItem
            q="What training should my team receive?"
            a="Comprehensive Copilot training includes: 1) Product-specific training (Teams, Excel, Power BI, etc.), 2) Effective prompt engineering techniques, 3) Security and data privacy best practices, 4) Use case deep dives for different roles, 5) Hands-on workshops and practice sessions, 6) Ongoing tips and feature updates. Allocate 2-4 hours initial training plus monthly refreshers for new features."
          />
          <FAQItem
            q="How do I handle prompts that produce inaccurate or inappropriate outputs?"
            a="Follow this process: 1) Provide clear, specific prompts with context (prompts are critical to quality), 2) Validate outputs before using them (Copilot is an assistant, not an authority), 3) Report issues through Microsoft feedback channels, 4) Document problematic patterns to refine prompts, 5) Use human review processes especially for sensitive decisions, 6) Establish governance policies on output verification by role."
          />
          <FAQItem
            q="Can Copilot integrate with third-party applications?"
            a="Yes, through several methods: 1) Power Automate connectors (500+ pre-built connectors available), 2) Custom API integrations for specialized systems, 3) Microsoft Graph API for deep M365 integration, 4) Webhooks for event-driven automation, 5) Power Apps for custom applications with Copilot built-in. Your developer team can extend Copilot&apos;s capabilities to work with existing enterprise systems."
          />
          <FAQItem
            q="What&apos;s the difference between Copilot Pro and Enterprise Copilot?"
            a="Key differences: Copilot Pro is for individuals with personal productivity focus and optional advanced features, while Enterprise Copilot is designed for organizations with: 1) Advanced security and compliance controls, 2) Admin oversight and governance capabilities, 3) Organization-wide training and support, 4) Integration with enterprise data sources, 5) Priority support and SLAs, 6) Custom deployment options. Choose based on your organizational needs and scale."
          />
          <FAQItem
            q="How do I ensure responsible AI use across my organization?"
            a="Implement responsible AI practices: 1) Establish clear usage guidelines and acceptable use policy, 2) Train teams on bias awareness and ethical prompt usage, 3) Create review processes for high-impact decisions, 4) Monitor for misuse or inappropriate outputs, 5) Document AI-assisted decisions for audit trails, 6) Align with your organization&apos;s AI ethics framework, 7) Regularly audit and adjust policies based on learnings."
          />
          <FAQItem
            q="What should I include in a Copilot prompt for best results?"
            a="Effective prompts include: 1) Clear objective statement, 2) Relevant context and background, 3) Specific format or structure requirements, 4) Target audience or tone, 5) Any constraints or limitations, 6) Examples if available, 7) Validation criteria (how to know if output is good). Longer, detailed prompts generally produce better outputs than vague requests. Treat prompt engineering as a key skill."
          />
          <FAQItem
            q="How do I troubleshoot when Copilot isn&apos;t available or isn&apos;t working?"
            a="Troubleshooting steps: 1) Verify your license includes Copilot features, 2) Check admin settings to confirm Copilot is enabled for your tenant and role, 3) Clear browser cache and try a different browser, 4) Verify you have sufficient permissions in the specific app, 5) Check Microsoft status pages for service incidents, 6) Contact your IT support team with specific error messages, 7) Review system requirements for your device."
          />
          <FAQItem
            q="What&apos;s the best way to scale Copilot adoption across a large organization?"
            a="Scale adoption through: 1) Start with pilot programs in early-adopter teams, 2) Build business cases with specific ROI metrics, 3) Create center of excellence with Copilot champions, 4) Develop standardized training curriculum, 5) Share success stories and use cases across teams, 6) Establish governance and best practices framework, 7) Integrate Copilot into standard workflows and tools, 8) Gather feedback and iterate continuously on approach."
          />
        </div>
      </section>

      {/* Related Links Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Explore More Prompts</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Link
            href="/gpt-4o-prompts"
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#1E40AF] transition-colors group"
          >
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#1E40AF] transition-colors">GPT-4o Prompts</h3>
            <p className="text-gray-400 text-sm">Advanced AI model prompts for complex reasoning</p>
          </Link>
          <Link
            href="/claude-prompts"
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#1E40AF] transition-colors group"
          >
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#1E40AF] transition-colors">Claude Prompts</h3>
            <p className="text-gray-400 text-sm">In-depth prompts for nuanced tasks and analysis</p>
          </Link>
          <Link
            href="/gemini-prompt-optimization"
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#1E40AF] transition-colors group"
          >
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#1E40AF] transition-colors">Gemini Prompts</h3>
            <p className="text-gray-400 text-sm">Optimized prompts for Google&apos;s advanced AI model</p>
          </Link>
          <Link
            href="/midjourney-prompts"
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#1E40AF] transition-colors group"
          >
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#1E40AF] transition-colors">Midjourney Prompts</h3>
            <p className="text-gray-400 text-sm">Visual creation prompts for image generation</p>
          </Link>
          <Link
            href="/grok-prompts"
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#1E40AF] transition-colors group"
          >
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#1E40AF] transition-colors">Grok Prompts</h3>
            <p className="text-gray-400 text-sm">Expert prompts for X&apos;s AI reasoning engine</p>
          </Link>
          <Link
            href="/social-media-marketing-prompts"
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#1E40AF] transition-colors group"
          >
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#1E40AF] transition-colors">Social Media Prompts</h3>
            <p className="text-gray-400 text-sm">Content and strategy prompts for social platforms</p>
          </Link>
          <Link
            href="/essay-prompts"
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#1E40AF] transition-colors group"
          >
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#1E40AF] transition-colors">Essay Prompts</h3>
            <p className="text-gray-400 text-sm">Writing and analysis prompts for academic work</p>
          </Link>
          <Link
            href="/ai-prompts-presentations"
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#1E40AF] transition-colors group"
          >
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#1E40AF] transition-colors">Presentation Prompts</h3>
            <p className="text-gray-400 text-sm">Effective presentation and pitch prompts</p>
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#2a2a2a] py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p>© 2026 GPTPrompts.AI. All rights reserved. Last updated: March 28, 2026</p>
        </div>
      </footer>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best Microsoft Copilot Prompts: Enterprise M365 Workflows 2026",
            description:
              "Enterprise-grade Microsoft Copilot prompts for Teams, Excel, Power BI, Graph grounding, and M365 productivity. Boost efficiency with AI-powered workflows.",
            datePublished: "2026-03-28",
            dateModified: "2026-03-28",
            author: {
              "@type": "Organization",
              name: "GPTPrompts.AI",
            },
            publisher: {
              "@type": "Organization",
              name: "GPTPrompts.AI",
              logo: {
                "@type": "ImageObject",
                url: "https://gptprompts.ai/logo.png",
              },
            },
            mainEntity: {
              "@type": "CreativeWork",
              name: "Microsoft Copilot Prompt Collection",
              description: "Comprehensive collection of enterprise prompts for Microsoft Copilot",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I enable Microsoft Copilot in my M365 environment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Check your licensing, visit admin.microsoft.com to enable services, assign licenses, and provide team training.",
                },
              },
              {
                "@type": "Question",
                name: "What data privacy and security considerations should I know about?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Microsoft Copilot processes data within your tenant, maintains GDPR and SOC 2 compliance, and provides audit logging.",
                },
              },
              {
                "@type": "Question",
                name: "Can I customize Copilot behavior for my organization?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Customize through Graph connectors, Power Automate workflows, custom prompts, and admin policies.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
