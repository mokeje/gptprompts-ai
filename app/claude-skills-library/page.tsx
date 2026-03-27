"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Search } from "lucide-react"

const accent = "#D97706"

const skills = [
  {
    category: "Productivity & Office",
    icon: "📊",
    items: [
      { name: "Excel & Spreadsheets", desc: "Reads, writes, and edits .xlsx files. Builds formulas, creates pivot tables, formats data, and generates charts.", tags: ["Data", "Business"] },
      { name: "Word Documents (DOCX)", desc: "Creates and edits Word documents with proper formatting, headings, tables, and styles — outputs real .docx files.", tags: ["Writing", "Business"] },
      { name: "PowerPoint Presentations", desc: "Builds full slide decks with speaker notes, images, and consistent design. Outputs real .pptx files.", tags: ["Presentations", "Business"] },
      { name: "PDF Creation & Extraction", desc: "Creates PDFs, fills PDF forms, extracts tables and text, and merges multiple documents.", tags: ["Documents"] },
      { name: "Task Management", desc: "Tracks your to-dos in a shared TASKS.md file. Adds, completes, and prioritizes tasks across sessions.", tags: ["Productivity"] },
      { name: "Calendar & Scheduling", desc: "Books meetings, checks availability, and manages your Google Calendar events.", tags: ["Calendar", "Integration"] },
    ]
  },
  {
    category: "Data & Analytics",
    icon: "📈",
    items: [
      { name: "Data Exploration", desc: "Profiles datasets, detects quality issues, finds patterns, and produces distribution summaries automatically.", tags: ["Data", "Analysis"] },
      { name: "Interactive Dashboard Builder", desc: "Builds self-contained HTML dashboards with charts, filters, and tables — no server required.", tags: ["Data", "Visualization"] },
      { name: "SQL Queries", desc: "Writes optimized SQL for Snowflake, BigQuery, PostgreSQL, and other warehouses with best practices.", tags: ["Data", "Engineering"] },
      { name: "Statistical Analysis", desc: "Runs hypothesis tests, correlation analysis, outlier detection, and regression — with interpretation.", tags: ["Data", "Research"] },
      { name: "Data Visualization", desc: "Creates publication-quality charts with matplotlib, seaborn, and plotly in Python.", tags: ["Data", "Visual"] },
      { name: "Subscription Analytics", desc: "Calculates ARPU, CLTV, churn rate, and LTV:CAC ratio from daily subscriber data.", tags: ["Business", "SaaS"] },
    ]
  },
  {
    category: "Sales & Marketing",
    icon: "📣",
    items: [
      { name: "Account Research", desc: "Researches companies and contacts to build actionable sales intel — industry, news, people, and pain points.", tags: ["Sales", "Research"] },
      { name: "Competitive Intelligence", desc: "Builds battlecards comparing your product vs. competitors with an interactive HTML output.", tags: ["Marketing", "Strategy"] },
      { name: "Campaign Planning", desc: "Plans full marketing campaigns with audience segmentation, channel strategy, content calendars, and KPIs.", tags: ["Marketing"] },
      { name: "Content Creation", desc: "Drafts blog posts, emails, social media posts, landing pages, and press releases in your brand voice.", tags: ["Marketing", "Writing"] },
      { name: "SEO Audit", desc: "Runs keyword research, on-page analysis, content gap identification, and competitor comparison.", tags: ["SEO", "Marketing"] },
      { name: "Email Sequences", desc: "Designs multi-email drip campaigns, nurture flows, and onboarding sequences.", tags: ["Email", "Marketing"] },
    ]
  },
  {
    category: "Legal & Finance",
    icon: "⚖️",
    items: [
      { name: "Contract Review", desc: "Reviews contracts against your playbook, flags deviations, and generates redline suggestions.", tags: ["Legal"] },
      { name: "NDA Triage", desc: "Screens incoming NDAs and classifies them as standard, needs review, or high risk.", tags: ["Legal"] },
      { name: "Journal Entry Prep", desc: "Prepares journal entries with proper debits, credits, and supporting detail for month-end close.", tags: ["Finance", "Accounting"] },
      { name: "Financial Statements", desc: "Generates income statements, balance sheets, and cash flow statements with GAAP presentation.", tags: ["Finance"] },
      { name: "Variance Analysis", desc: "Decomposes budget vs. actual variances with narrative explanations and waterfall analysis.", tags: ["Finance"] },
      { name: "SOX Testing", desc: "Generates control testing workpapers, sample selections, and deficiency assessments.", tags: ["Finance", "Compliance"] },
    ]
  },
  {
    category: "Customer Support",
    icon: "🎧",
    items: [
      { name: "Ticket Triage", desc: "Categorizes support tickets by issue type, assigns priority (P1-P4), and recommends routing.", tags: ["Support"] },
      { name: "Response Drafting", desc: "Drafts professional, empathetic customer responses calibrated to urgency and channel.", tags: ["Support", "Writing"] },
      { name: "Knowledge Base Articles", desc: "Writes KB articles from resolved tickets so solutions are documented for next time.", tags: ["Support", "Documentation"] },
      { name: "Customer Research", desc: "Researches customer questions across your documentation and knowledge bases.", tags: ["Support", "Research"] },
    ]
  },
]

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-[#1a1a1a] transition-colors">
        <span className="font-medium text-white pr-4">{q}</span>
        {open ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#2a2a2a] pt-4">{a}</div>}
    </div>
  )
}

export default function ClaudeSkillsLibraryPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#D97706]/30 text-[#D97706]">Skills Library</span>
            <span className="text-xs text-gray-500">Claude · Cowork mode · 2025</span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#D97706]/10 text-[#D97706]">30+ Skills</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Claude Skills Library:<br />Every Skill, Explained
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Claude Skills are specialized capability bundles that supercharge Claude for specific tasks — from building Excel files and PowerPoint decks to running SQL queries and reviewing contracts. Here's a complete guide to every available skill and what each one can do.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Office docs", "Data & analytics", "Sales & marketing", "Legal & finance", "Customer support"].map(b => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* What are Skills */}
      <section className="py-12 px-4 border-b border-[#1a1a1a] bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">What Are Claude Skills?</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {[
              { n: "🧠", t: "Domain expertise built-in", d: "Each skill contains specialized knowledge, best practices, and workflows for a specific domain — condensed from extensive experimentation." },
              { n: "🔧", t: "Tool access extended", d: "Skills unlock specific tools — like reading/writing real Excel files, or browsing competitor sites for research — that standard Claude can't do." },
              { n: "🔄", t: "Triggered automatically", d: "Claude recognizes when a skill is relevant and loads it automatically. You don't need to remember to activate a skill — just describe what you want." },
            ].map(s => (
              <div key={s.n} className="flex gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                <div className="text-2xl shrink-0">{s.n}</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{s.t}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills by category */}
      {skills.map(cat => (
        <section key={cat.category} className="py-14 px-4 border-b border-[#1a1a1a]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="text-2xl font-bold">{cat.category}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {cat.items.map(skill => (
                <div key={skill.name} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#D97706]/30 transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-white">{skill.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{skill.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[#D97706]/10 text-[#D97706]">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* How to use */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">How to Use Claude Skills</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Open Claude in Cowork or Claude Code mode", desc: "Skills are available in Claude's Cowork desktop app and Claude Code CLI. They're not currently available in the standard claude.ai chat interface." },
              { step: "2", title: "Just describe what you want", desc: "Claude automatically recognizes which skill is relevant. Say \"create an Excel report\" and Claude loads the Excel skill. Say \"draft a response to this support ticket\" and Claude loads the response-drafting skill." },
              { step: "3", title: "Provide your data or context", desc: "Upload the files or paste the information Claude needs. Skills work with your actual data — spreadsheets, contracts, tickets, CSVs — not just hypothetical examples." },
              { step: "4", title: "Get a real output file", desc: "Skills output real files — .xlsx, .docx, .pptx, .pdf — not just text that you'd have to manually format. You can open and edit them directly." },
            ].map(s => (
              <div key={s.step} className="flex gap-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold" style={{ backgroundColor: `${accent}20`, color: accent }}>{s.step}</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Claude Skills FAQ</h2>
          <div className="space-y-3">
            <FAQ q="What are Claude Skills?" a="Claude Skills are specialized capability packages that give Claude domain-specific knowledge, tools, and workflows. They're bundled into plugins that can be installed in Claude's Cowork mode or Claude Code. Each skill is optimized for a specific use case — like building Excel files, reviewing contracts, or analyzing subscriber data." />
            <FAQ q="How are Skills different from ChatGPT GPTs?" a="Both extend AI with specialized capabilities, but Skills are more deeply integrated with Claude's reasoning and tool use. Skills can output real files (.xlsx, .docx, .pptx), access external systems via MCP connectors, and run multi-step workflows autonomously. ChatGPT GPTs are primarily focused on customized conversation and knowledge — fewer can produce real file outputs." />
            <FAQ q="Do I need to install Skills separately?" a="Skills come bundled in plugins. If you're using Claude's Cowork mode, many skills are pre-installed. If you're using Claude Code, plugins (which contain skills) can be installed by your organization or individually. You don't activate individual skills manually — Claude loads them automatically based on what you ask." />
            <FAQ q="Can I build my own Claude Skills?" a="Yes. Claude Skills are SKILL.md files that contain specialized instructions and best practices. Developers and organizations can create custom skills using the skill-creator framework. This is useful for encoding your organization's specific workflows, terminology, or domain knowledge into Claude." />
            <FAQ q="Which Skills are most useful for business?" a="The most impactful skills for business use are: Excel/DOCX/PPTX for document creation, Data Exploration and Dashboard Builder for analytics, Contract Review and NDA Triage for legal, Campaign Planning and Content Creation for marketing, and Account Research and Competitive Intelligence for sales." />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Explore More Claude Guides</h2>
          <p className="text-gray-400 mb-6">Prompts, guides, and deep dives for Claude, ChatGPT, Gemini, and every major AI tool.</p>
          <Link href="/website-links" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-black transition-all hover:opacity-90" style={{ backgroundColor: accent }}>
            Browse All Guides →
          </Link>
        </div>
      </section>
    </div>
  )
}
