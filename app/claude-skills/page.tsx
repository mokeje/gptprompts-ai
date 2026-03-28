"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, BookOpen, Zap, Terminal, Layers, ChevronDown, ChevronUp } from "lucide-react"

const accent = "#D97706" // amber — Claude's brand color

function PromptCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#D97706]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#D97706]/10 text-[#D97706] mb-2 inline-block">{tag}</span>}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button
          onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
          className="shrink-0 p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#D97706]/20 transition-colors"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-400" />}
        </button>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed font-mono whitespace-pre-wrap">{prompt}</p>
    </div>
  )
}

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

export default function ClaudeSkillsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#D97706]/30 text-[#D97706]">New in 2025</span>
            <span className="text-xs text-gray-500">Claude Desktop + Cowork</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Claude Skills: The Complete Guide
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Claude Skills are reusable AI workflows you install once and trigger with natural language. Think of them as custom superpowers for Claude — built for specific tasks like creating Excel spreadsheets, editing Word docs, analyzing data, or running automations.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Works in Claude Desktop", "No-code setup", "Growing library", "Build your own"].map(b => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* What are Claude Skills */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What Are Claude Skills?</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <Zap size={24} style={{ color: accent }} className="mb-3" />
              <h3 className="font-semibold text-white mb-2">Pre-built Workflows</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Skills are packaged instruction sets that tell Claude exactly how to perform a specific task — with the right tools, steps, and output format already baked in. Install once, use forever.</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <Terminal size={24} style={{ color: accent }} className="mb-3" />
              <h3 className="font-semibold text-white mb-2">Triggered by Natural Language</h3>
              <p className="text-gray-400 text-sm leading-relaxed">No commands to memorize. Just say "create a spreadsheet of my sales data" and if you have the Excel skill installed, Claude knows exactly how to produce a professional .xlsx file.</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <BookOpen size={24} style={{ color: accent }} className="mb-3" />
              <h3 className="font-semibold text-white mb-2">A Growing Library</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Anthropic and the community are building a library of skills covering documents, spreadsheets, PDFs, data analysis, presentations, scheduling, CRM, and more — all installable in seconds.</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <Layers size={24} style={{ color: accent }} className="mb-3" />
              <h3 className="font-semibold text-white mb-2">Build Your Own</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Advanced users can create custom skills for their specific workflows — company processes, internal tools, niche tasks — and share them with their team or the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Skills Library */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Popular Claude Skills (2025 Library)</h2>
          <p className="text-gray-400 mb-8">These are the most-used skills available in the Claude Skills library today.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Excel / XLSX", desc: "Create and edit spreadsheets with formulas, charts, and formatting", tag: "Productivity" },
              { name: "Word / DOCX", desc: "Generate professional Word documents with headings, tables, and styles", tag: "Documents" },
              { name: "PDF Tools", desc: "Extract, fill, merge, and analyze PDF documents", tag: "Documents" },
              { name: "PowerPoint / PPTX", desc: "Build slide decks with layouts, visuals, and speaker notes", tag: "Presentations" },
              { name: "Data Analysis", desc: "Explore datasets, run statistics, and visualize insights with Python", tag: "Analytics" },
              { name: "SQL Queries", desc: "Write optimized SQL for Snowflake, BigQuery, Postgres, and more", tag: "Analytics" },
              { name: "Schedule Tasks", desc: "Create automated tasks that run on a schedule or on demand", tag: "Automation" },
              { name: "Google Calendar", desc: "Create, update, and find events across your calendars", tag: "Productivity" },
              { name: "Gmail", desc: "Draft emails, search messages, and manage your inbox", tag: "Communication" },
              { name: "Subscription Analytics", desc: "Calculate ARPU, CLTV, churn rate from subscriber data", tag: "Analytics" },
              { name: "Legal Contract Review", desc: "Review contracts against playbooks and flag risky clauses", tag: "Legal" },
              { name: "Sales Intelligence", desc: "Research prospects, prep for calls, draft outreach", tag: "Sales" },
            ].map(s => (
              <div key={s.name} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 hover:border-[#D97706]/30 transition-all">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#D97706]/10 text-[#D97706] mb-2 inline-block">{s.tag}</span>
                <h3 className="font-semibold text-white text-sm mb-1">{s.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompts to use with Skills */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Best Prompts to Use with Claude Skills</h2>
          <p className="text-gray-400 mb-8">Once you have skills installed, these prompts get the most out of them. Skills trigger automatically when Claude detects the right context.</p>

          <h3 className="text-lg font-semibold mb-4" style={{ color: accent }}>📊 Excel & Data Skills</h3>
          <div className="grid gap-4 mb-8">
            <PromptCard tag="Excel Skill" title="Build a Monthly Budget Tracker" prompt="Create an Excel spreadsheet for my monthly budget. Include columns for category, budgeted amount, actual amount, and variance. Add conditional formatting to highlight overspending in red. Include a summary row with totals and a donut chart showing spending by category." />
            <PromptCard tag="Excel Skill" title="Sales Pipeline Dashboard" prompt="Build me a sales pipeline tracker in Excel. I need columns for: prospect name, company, deal value, stage (lead/qualified/proposal/closed), probability %, expected close date, and next action. Add a summary section at the top showing total pipeline value, weighted pipeline, and deals by stage. Use color coding for stages." />
            <PromptCard tag="Data Analysis" title="Analyze This CSV Dataset" prompt="Here is my CSV data [paste data]. Please: (1) give me a summary of what's in this dataset, (2) identify any data quality issues, (3) show the distribution of key columns, (4) find the top 3 most interesting patterns or insights, (5) suggest what analyses would be most valuable to run next." />
          </div>

          <h3 className="text-lg font-semibold mb-4" style={{ color: accent }}>📝 Document Skills</h3>
          <div className="grid gap-4 mb-8">
            <PromptCard tag="Word Skill" title="Write a Professional Report" prompt="Write a professional business report about [topic]. Format it as a Word document with: an executive summary, 4-5 main sections with headings, bullet points for key findings, a recommendations section, and a conclusion. Use a professional tone for a C-suite audience. The report should be 800-1000 words." />
            <PromptCard tag="PDF Skill" title="Extract and Summarize a PDF" prompt="I have a PDF document [attached]. Please: (1) extract all the key information, (2) identify the main topics covered, (3) pull out any tables or important data, (4) write a 200-word executive summary, and (5) list the 5 most important action items or takeaways." />
          </div>

          <h3 className="text-lg font-semibold mb-4" style={{ color: accent }}>🤖 Automation Skills</h3>
          <div className="grid gap-4 mb-8">
            <PromptCard tag="Schedule Skill" title="Set Up a Daily Briefing" prompt="Create a scheduled task that runs every weekday morning at 8am and gives me a daily briefing. Include: weather summary for [city], my calendar events for the day, any urgent emails from the last 12 hours, and 3 priorities I should focus on based on my tasks." />
            <PromptCard tag="Gmail Skill" title="Draft a Professional Email" prompt="Draft a professional email to [recipient] about [topic]. The email should: open with context about why I'm writing, clearly state the ask or update in the second paragraph, include any relevant details or attachments mentioned, and close with a clear next step. Keep it under 200 words and use a friendly-but-professional tone." />
          </div>
        </div>
      </section>

      {/* How to Install Skills */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">How to Install Claude Skills</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Open Claude Desktop", desc: "Skills require Claude Desktop (Mac or Windows). Make sure you have the latest version installed from claude.ai/download." },
              { step: "2", title: "Find Skills in the Marketplace", desc: "In Claude Desktop, look for the Skills or Plugins section. Browse the available skills library — you'll find official Anthropic skills and community-built skills." },
              { step: "3", title: "Install Your Skills", desc: "Click 'Install' on any skill. Some skills may ask for permissions (like access to your calendar or email) — review and approve what you're comfortable with." },
              { step: "4", title: "Trigger Skills Naturally", desc: "Once installed, just ask Claude to do the task. Say 'create a spreadsheet' or 'draft a Word doc' and Claude will automatically invoke the right skill." },
              { step: "5", title: "Build Custom Skills", desc: "Advanced users can build their own skills using the Skills SDK. A skill is essentially a folder with a SKILL.md instruction file and any supporting resources." },
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

      {/* Claude Skills vs ChatGPT Plugins vs GPTs */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Claude Skills vs ChatGPT GPTs vs Copilot Extensions</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  <th className="text-left py-3 pr-6 text-gray-400 font-medium">Feature</th>
                  <th className="text-left py-3 pr-6 font-semibold" style={{ color: accent }}>Claude Skills</th>
                  <th className="text-left py-3 pr-6 text-gray-400 font-medium">ChatGPT GPTs</th>
                  <th className="text-left py-3 text-gray-400 font-medium">Copilot Extensions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a1a1a]">
                {[
                  ["File output (docx, xlsx)", "✅ Native", "⚠️ Limited", "⚠️ Limited"],
                  ["Works offline/local", "✅ Desktop app", "❌ Cloud only", "❌ Cloud only"],
                  ["Build your own", "✅ SKILL.md format", "✅ GPT Builder", "✅ Dev required"],
                  ["Automation/scheduling", "✅ Built-in", "❌ No", "⚠️ Via Power Automate"],
                  ["No-code setup", "✅ Yes", "✅ Yes", "❌ Developer needed"],
                  ["Desktop integration", "✅ Full", "⚠️ Limited", "✅ Office apps"],
                  ["Data privacy", "✅ Local processing", "⚠️ Cloud processed", "⚠️ Cloud processed"],
                ].map(([feat, claude, gpt, copilot]) => (
                  <tr key={feat}>
                    <td className="py-3 pr-6 text-gray-300">{feat}</td>
                    <td className="py-3 pr-6 text-white font-medium">{claude}</td>
                    <td className="py-3 pr-6 text-gray-400">{gpt}</td>
                    <td className="py-3 text-gray-400">{copilot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Claude Skills FAQ</h2>
          <div className="space-y-3">
            <FAQ q="What are Claude Skills?" a="Claude Skills are reusable, installable AI workflows that extend what Claude can do. Each skill contains specialized instructions, tools, and best practices for a specific task — like creating Excel files, analyzing data, or automating workflows. Once installed, you trigger them with natural language." />
            <FAQ q="Are Claude Skills free?" a="Many Claude Skills are free to install. Some may require a Claude Pro or Team subscription to access the full Claude Desktop environment. Anthropic offers an official library of skills, and the community is building additional free skills." />
            <FAQ q="How are Claude Skills different from regular Claude prompts?" a="Regular prompts are one-off instructions you type each time. Skills are persistent, pre-configured workflows that Claude can invoke automatically when it detects the right context. Skills also have access to specialized tools (like file creation) that aren't available in standard chat." />
            <FAQ q="Can I build my own Claude Skill?" a="Yes. Claude Skills are built using a simple folder structure with a SKILL.md file containing instructions. Advanced users can create skills for company-specific workflows, internal tools, or niche use cases. Skills can be shared as .skill files or published to the community marketplace." />
            <FAQ q="What's the difference between Claude Skills and MCP servers?" a="MCP (Model Context Protocol) servers provide Claude with access to external tools and data sources. Skills use MCP under the hood but present as a higher-level, user-friendly interface. A skill might use an MCP server for Google Calendar access, but the skill wraps it in easy-to-use instructions and prompts." />
            <FAQ q="Are Claude Skills available on mobile?" a="Claude Skills are currently available in Claude Desktop (Mac and Windows) and through Claude's Cowork feature. Mobile support for advanced skills is limited, as many skills require desktop file system access." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Explore More AI Prompt Guides</h2>
          <p className="text-gray-400 mb-6">230+ free guides for ChatGPT, Claude, Gemini, Midjourney, and every major AI tool.</p>
          <Link href="/website-links" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-black transition-all hover:opacity-90" style={{ backgroundColor: accent }}>
            Browse All Guides →
          </Link>
        </div>
      </section>
    </div>
  )
}
