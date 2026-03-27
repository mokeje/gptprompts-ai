"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Zap } from "lucide-react"

const accent = "#7C3AED"

function PromptCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#7C3AED]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] mb-2 inline-block">{tag}</span>}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }} className="shrink-0 p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#7C3AED]/20 transition-colors">
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

export default function BoltNewPromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#7C3AED]/30 text-[#7C3AED]">AI App Builder</span>
            <span className="text-xs text-gray-500">by StackBlitz</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Bolt.new Prompts:<br />Build Full Apps with AI</h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Bolt.new lets you describe an app and watch it get built in real time — full-stack, live preview, instant deploy. No environment setup, no package installs. Just describe what you want and ship it.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Full-stack in browser", "Live preview", "React & Next.js", "Deploy to Netlify"].map(b => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How to Write Great Bolt Prompts */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">5 Rules for Great Bolt.new Prompts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { n: "1", t: "Name your tech stack", d: "Tell Bolt exactly what framework you want: React, Next.js, Astro, Vue. Don't leave it to guess — it will sometimes pick wrong." },
              { n: "2", t: "Describe the end result", d: "Say what the app does and what the user experience looks like. Bolt builds better when it understands the goal, not just the steps." },
              { n: "3", t: "Include design requirements", d: "Mention colors, style (minimal, glassmorphism, dark mode), and any UI library you want (Tailwind, shadcn, Radix)." },
              { n: "4", t: "List the integrations", d: "If you need Stripe, Supabase, a REST API, or auth — say so upfront. Adding these later is messier than specifying from the start." },
              { n: "5", t: "Say what to skip", d: "Tell Bolt what NOT to build. 'No backend needed', 'don't add auth yet', 'keep it simple' — this prevents Bolt from over-engineering." },
            ].map(p => (
              <div key={p.n} className="flex gap-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm font-bold" style={{ backgroundColor: `${accent}20`, color: accent }}>{p.n}</div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{p.t}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Starter App Prompts */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">App Starter Prompts</h2>
          <p className="text-gray-400 mb-6">Copy these into Bolt.new to build full working apps from scratch. Each prompt is designed to give Bolt enough detail to build something real.</p>
          <div className="grid gap-4">
            <PromptCard tag="SaaS" title="SaaS Landing Page with Waitlist" prompt={`Build a SaaS landing page using React and Tailwind CSS. The product is called "Flowly" — it's an AI-powered project management tool. Include: a hero section with headline, subheadline, and email waitlist signup form, a features section with 3 feature cards (icons + title + description), a social proof section with 3 fake testimonials, and a footer. Dark theme with purple accent (#7C3AED). Make the waitlist form functional (store submissions in local state and show a success message). No backend needed.`} />
            <PromptCard tag="Portfolio" title="Personal Portfolio with Dark Mode" prompt={`Create a personal portfolio website using Next.js and Tailwind. Include: a sticky header with nav links (About, Work, Contact), a hero section with name, title, and a short bio, a projects section showing 3 project cards with title, description, tech stack tags, and a "View" button, an about section, and a contact form. Dark/light mode toggle in the header. Minimal, modern design — think linear.app aesthetic. Smooth scroll animations on section entry. No backend needed.`} />
            <PromptCard tag="Productivity" title="Task Manager with Local Storage" prompt={`Build a task manager app using React and Tailwind. Features: add tasks with a title and optional due date, mark tasks complete (strikethrough + move to completed section), delete tasks, filter by All / Active / Completed, and a progress bar showing % complete. Persist all data in localStorage so it survives page refresh. Clean dark UI. No backend, no auth needed.`} />
            <PromptCard tag="Business" title="Invoice Generator with PDF Export" prompt={`Create an invoice generator app with React. The user should be able to: fill in their business name and info, add a client name and address, add line items (description, quantity, unit price — auto-calculate totals), set payment terms and due date, and preview the invoice in a clean professional layout. Add a "Download PDF" button that exports the invoice. Use Tailwind for styling. White/professional design.`} />
          </div>
        </div>
      </section>

      {/* Adding Features */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Adding Features to Existing Apps</h2>
          <p className="text-gray-400 mb-6">Once your base app is built, use these prompts to add functionality. Be specific about where to add it.</p>
          <div className="grid gap-4">
            <PromptCard tag="Payments" title="Add Stripe Payment Integration" prompt={`Add Stripe Checkout to this app. When the user clicks the "Upgrade" button, it should: create a Stripe Checkout session for the $19/month "Pro" plan (product ID: [your ID]), redirect the user to the Stripe-hosted checkout page, and after successful payment redirect back to /success with a confirmation message. Use Stripe's test mode keys. I'll replace with live keys before launch.`} />
            <PromptCard tag="Auth" title="Add User Authentication with Supabase" prompt={`Add user authentication to this app using Supabase Auth. Implement: a login page with email/password and Google OAuth, a sign-up page, protected routes that redirect to login if not authenticated, a user session stored in context, and a logout button in the header. Use the Supabase JS client. My Supabase project URL is [URL] and anon key is [key].`} />
            <PromptCard tag="Analytics" title="Add a Data Dashboard" prompt={`Add a data dashboard page to this app at /dashboard. Show the following charts using Recharts: a line chart showing daily signups for the last 30 days, a bar chart showing revenue by month, and a pie chart showing users by plan (Free / Pro / Enterprise). Use the following sample data: [paste data or describe structure]. Dark card design matching the existing app.`} />
          </div>
        </div>
      </section>

      {/* Debugging */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Debugging Prompts</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { t: "Fix a broken component", p: "This component isn't rendering correctly. Here's the code: [paste code]. The issue is [describe the problem]. Find the bug and fix it. Explain what was wrong in one sentence." },
              { t: "Fix mobile layout", p: "The mobile layout is broken on screens under 768px. The [section name] overlaps with the navbar and the cards stack incorrectly. Fix the responsive CSS/Tailwind classes. Don't change the desktop layout." },
              { t: "Add error handling", p: "Add proper error handling to all API calls in this file: [paste file]. Show a user-friendly error message in the UI (not just console.log) if an API call fails. Use a toast notification or inline error message." },
              { t: "Make it accessible", p: "Review this component for accessibility issues: [paste code]. Add: proper aria labels, keyboard navigation support, focus visible states, and ensure color contrast meets WCAG AA standards. List each change you made and why." },
            ].map(p => (
              <PromptCard key={p.t} title={p.t} prompt={p.p} />
            ))}
          </div>
        </div>
      </section>

      {/* Tool Comparison */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Bolt.new vs Cursor vs Lovable vs v0</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { tool: "Bolt.new", best: "Starting a new app from scratch in the browser. Fast prototyping with instant deploy. Best for non-developers who want working code quickly.", color: "#7C3AED" },
              { tool: "Cursor", best: "Developers who want AI assistance while coding in a full IDE. Best for complex codebases, refactoring, and production-grade work.", color: "#6c47ff" },
              { tool: "Lovable", best: "Non-technical founders building SaaS products with a UI. Similar to Bolt but with stronger product design focus and Supabase integration.", color: "#EC4899" },
              { tool: "v0 by Vercel", best: "Generating React/Next.js UI components and landing pages. Best for developers who want polished, production-ready component code.", color: "#000000" },
            ].map(t => (
              <div key={t.tool} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: t.color === "#000000" ? "#888" : t.color }} />
                  <h3 className="font-semibold text-white">{t.tool}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{t.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Bolt.new FAQ</h2>
          <div className="space-y-3">
            <FAQ q="What is Bolt.new?" a="Bolt.new is a browser-based AI app builder by StackBlitz. You describe what you want to build and Bolt generates a working full-stack web application with live preview — no local environment setup needed. You can edit the code, preview changes in real time, and deploy directly to Netlify." />
            <FAQ q="Is Bolt.new free?" a="Bolt.new offers a free tier with limited monthly AI tokens. Paid plans start around $20/month and give you more tokens, longer context for larger apps, and faster generation. Heavy users often find the paid plan necessary for building full applications." />
            <FAQ q="What can you build with Bolt.new?" a="Bolt.new works best for web apps: landing pages, SaaS tools, dashboards, portfolio sites, CRUD apps, and productivity tools. It supports React, Next.js, Astro, Vue, and Svelte. It's less suited for native mobile apps, complex backend systems, or apps requiring heavy database work." />
            <FAQ q="How do I deploy a Bolt.new app?" a="Bolt.new has a built-in 'Deploy' button that connects to Netlify. In a few clicks you get a live URL. You can also download the code and deploy to Vercel, GitHub Pages, or any other host. The exported code is standard and portable." />
            <FAQ q="What's the difference between Bolt.new and Lovable?" a="Both are AI app builders for non-developers. Bolt.new is powered by StackBlitz and Claude/GPT, and focuses on speed and flexibility. Lovable has deeper Supabase integration (database, auth) baked in and is more opinionated about product structure. Many founders try both and use whichever produces better results for their specific app." />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">More AI Builder Guides</h2>
          <p className="text-gray-400 mb-6">Explore our guides for Cursor, v0, Windsurf, Vibe Coding, and every major AI dev tool.</p>
          <Link href="/website-links" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: accent }}>
            Browse All Guides →
          </Link>
        </div>
      </section>
    </div>
  )
}
