"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Heart, Layers, Rocket, Code2, Palette, Sparkles } from "lucide-react"

const accent = "#E11D48"

function CopyCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#E11D48]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#E11D48]/10 text-[#E11D48] mb-2 inline-block">{tag}</span>}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }} className="shrink-0 p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#E11D48]/20 transition-colors" aria-label="Copy prompt">
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

const faqItems = [
  {
    q: "What is Lovable AI and how does it differ from Bolt.new?",
    a: "Lovable (formerly GPT Engineer) is an AI-powered full-stack app builder that generates production-ready code from natural language descriptions. Unlike Bolt.new, which focuses on quick prototyping in the browser, Lovable emphasizes building complete, deployable applications with features like Supabase database integration, authentication flows, and Stripe payments built in. Lovable also generates cleaner, more maintainable code structures suited for long-term projects."
  },
  {
    q: "How detailed should my Lovable prompts be?",
    a: "Lovable works best with moderately detailed prompts. Describe the end-user experience, specify your tech preferences (React, Tailwind, shadcn/ui), mention integrations (Supabase, Stripe), and outline the core user flows. Avoid over-specifying implementation details since Lovable handles architecture decisions well. A prompt of 100 to 300 words typically produces the best results."
  },
  {
    q: "Can Lovable connect to a real database?",
    a: "Yes. Lovable has native Supabase integration. You can ask it to set up database tables, row-level security policies, authentication, and real-time subscriptions. Mention 'use Supabase' in your prompt and describe the data model you need. Lovable will generate the schema, API calls, and frontend components that connect to your Supabase project."
  },
  {
    q: "What frameworks does Lovable support?",
    a: "Lovable primarily generates React applications using Vite, Tailwind CSS, and shadcn/ui components. It supports TypeScript by default and can integrate with Supabase for backend services, Stripe for payments, and various npm packages. For styling, it defaults to Tailwind utility classes with shadcn/ui for consistent, accessible component design."
  },
  {
    q: "How do I add authentication to a Lovable app?",
    a: "Include authentication requirements in your initial prompt or ask Lovable to add auth to an existing project. Specify 'Add Supabase authentication with email/password signup, Google OAuth, and a protected dashboard.' Lovable will generate the auth context, login/signup forms, route protection, and session management automatically."
  },
  {
    q: "Can I iterate on Lovable projects after the initial build?",
    a: "Absolutely. Lovable is designed for iterative development. After the initial generation, you can ask it to add features, fix bugs, change designs, or refactor code. Each follow-up prompt builds on the existing codebase. Use specific requests like 'Add a dark mode toggle to the header' or 'Change the pricing page to show annual/monthly toggle.'"
  },
  {
    q: "What are the best practices for Lovable prompts?",
    a: "Start with the user story (who uses this and what they need), specify the tech stack explicitly, describe the visual design direction, list must-have integrations upfront, and break complex apps into phases. Use follow-up prompts for refinement rather than trying to describe everything in one massive prompt."
  },
  {
    q: "How does Lovable handle responsive design?",
    a: "Lovable generates responsive layouts by default using Tailwind CSS responsive prefixes. If you want specific mobile behavior, mention it: 'Mobile-first design with a hamburger menu on small screens and a sidebar navigation on desktop.' You can also request specific breakpoint behavior for tablets and large displays."
  },
  {
    q: "Can I deploy Lovable apps to production?",
    a: "Yes. Lovable apps can be deployed directly from the platform or exported as a standard Vite/React project and deployed to Vercel, Netlify, or any static hosting service. The generated code is clean, standard React with no proprietary dependencies, so it runs anywhere that supports modern JavaScript."
  },
  {
    q: "Is Lovable good for building SaaS products?",
    a: "Lovable excels at SaaS MVPs and internal tools. Its Supabase integration handles user management, data storage, and real-time features, while Stripe integration covers subscription billing. Many founders use Lovable to build and launch SaaS products in days rather than months, then iterate based on user feedback."
  },
]

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lovable AI Prompts: Build Full-Stack Apps with AI in 2026",
  description: "Master Lovable AI (formerly GPT Engineer) with expert prompts for building production-ready full-stack applications. SaaS, dashboards, e-commerce, and more.",
  image: "https://gptprompts.ai/lovable-ai-prompts.jpg",
  author: { "@type": "Organization", name: "GPTPrompts.AI" },
  publisher: { "@type": "Organization", name: "GPTPrompts.AI" },
  datePublished: "2026-03-28",
  dateModified: "2026-03-28",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(item => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

export default function LovableAIPromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="border-b border-[#1a1a1a] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-[#E11D48]/30 text-[#E11D48]">AI App Builder</span>
            <span className="text-xs text-gray-500">formerly GPT Engineer</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Lovable AI Prompts:<br />Build Full-Stack Apps with AI</h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            Lovable turns natural language into production-ready React applications with Supabase backends, Stripe payments, and responsive UI. Describe your app, watch it get built, and deploy it. These prompts are designed to get the best results from Lovable's AI engine.
          </p>
          <div className="flex flex-wrap gap-3">
            {["React + Vite", "Supabase Integration", "Stripe Payments", "shadcn/ui", "One-Click Deploy"].map(b => (
              <span key={b} className="text-sm px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How Lovable Works */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">How to Write Great Lovable Prompts</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">Lovable reads your prompt and generates an entire application. The quality of your prompt directly determines the quality of the output. Follow these principles to get production-ready code on the first try.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { n: "1", icon: <Layers size={16} />, t: "Describe the product, not the code", d: "Tell Lovable what the user sees and does. 'A dashboard where admins can manage users, view analytics, and export reports' works better than listing React components." },
              { n: "2", icon: <Code2 size={16} />, t: "Name your stack and integrations", d: "Specify React, Tailwind, shadcn/ui, Supabase, and Stripe upfront. Lovable makes better architecture decisions when it knows your full tech landscape." },
              { n: "3", icon: <Palette size={16} />, t: "Set the visual direction", d: "Mention the aesthetic: 'clean SaaS style like Linear', 'dark mode with violet accents', or 'warm, friendly design with rounded corners and soft shadows.'" },
              { n: "4", icon: <Rocket size={16} />, t: "Define the user flows", d: "Walk through what happens step by step: 'User signs up, lands on onboarding wizard, creates first project, sees dashboard with live data.' This gives Lovable routing and state context." },
              { n: "5", icon: <Sparkles size={16} />, t: "Iterate in follow-ups", d: "Build in phases. Start with the core experience, then add features: 'Now add a settings page with profile editing and subscription management.'" },
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

      {/* SaaS Prompts */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">SaaS Application Prompts</h2>
          <p className="text-gray-400 mb-6">Production-ready prompts for building SaaS products with Lovable. Each generates a complete, functional application.</p>
          <div className="grid gap-4">
            <CopyCard tag="SaaS MVP" title="Project Management Tool" prompt={`Build a project management SaaS app using React, Tailwind CSS, and shadcn/ui. Use Supabase for authentication and database.

Core features:
- Email/password signup and login with protected routes
- Dashboard showing all projects as cards with status badges (Active, On Hold, Completed)
- Project detail page with a Kanban board (columns: To Do, In Progress, Review, Done)
- Drag-and-drop task cards between columns
- Task detail modal with title, description, assignee, due date, and priority
- Team members sidebar showing online status
- Settings page with profile editing

Design: Clean, modern SaaS aesthetic similar to Linear. Dark mode default with subtle gray borders. Use violet (#7C3AED) as the primary accent color. Smooth transitions and hover states throughout.`} />

            <CopyCard tag="Analytics" title="Customer Analytics Dashboard" prompt={`Create an analytics dashboard using React, Tailwind, shadcn/ui, and Recharts for charts. Connect to Supabase for data.

Pages:
- Overview dashboard with KPI cards (MRR, active users, churn rate, NPS score) and line/bar charts showing 30-day trends
- Customers page with a searchable, sortable data table showing name, plan, MRR, last active date, and health score
- Customer detail page with activity timeline, subscription history, and usage charts
- Segments page where users can create dynamic customer segments with filters (plan type, activity level, region)
- Export functionality for CSV download of any data view

Design: Professional analytics style. White background with subtle gray-50 cards. Blue (#2563EB) as primary color. Charts should use a consistent 4-color palette. Responsive layout with collapsible sidebar navigation.`} />

            <CopyCard tag="Marketplace" title="Freelancer Marketplace" prompt={`Build a two-sided freelancer marketplace using React, Tailwind, shadcn/ui, and Supabase.

User flows:
- Client signup: create account, post a project (title, description, budget range, skills needed, deadline)
- Freelancer signup: create profile with portfolio, skills tags, hourly rate, and availability
- Browse projects page with filters (category, budget, skills, deadline)
- Browse freelancers page with filters (skills, rate, rating, availability)
- Project detail page where freelancers can submit proposals (cover letter, proposed rate, timeline)
- Client can review proposals, view freelancer profiles, and accept/reject
- Simple messaging between client and freelancer after proposal acceptance
- Review system: both sides can leave ratings and written reviews after project completion

Auth: Supabase email auth with role selection (Client or Freelancer) during signup.
Design: Clean, trustworthy marketplace design. White background, green (#059669) accents for CTAs. Card-based layouts throughout.`} />
          </div>
        </div>
      </section>

      {/* Dashboard & Internal Tools */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Dashboard and Internal Tool Prompts</h2>
          <p className="text-gray-400 mb-6">Internal tools and admin panels are where Lovable shines. These prompts generate functional back-office applications.</p>
          <div className="grid gap-4">
            <CopyCard tag="Admin" title="User Management Admin Panel" prompt={`Build an admin panel for managing users with React, Tailwind, shadcn/ui, and Supabase.

Features:
- Sidebar navigation with icons: Dashboard, Users, Roles, Activity Log, Settings
- Users page: data table with search, pagination, and bulk actions (suspend, delete, change role)
- User detail page: profile info, subscription status, activity history timeline, and action buttons
- Roles page: create and manage roles with granular permissions (checkboxes for each feature area)
- Activity log: filterable list of all admin actions with timestamps, actor, and description
- Dashboard: cards showing total users, new signups this week, active sessions, and support tickets

Auth: Supabase auth with admin role check. Non-admin users see "Access Denied" page.
Design: Clean admin panel. Gray-50 background, slate sidebar, blue accents. Dense but readable data tables.`} />

            <CopyCard tag="CRM" title="Sales CRM with Pipeline View" prompt={`Create a lightweight sales CRM using React, Tailwind, shadcn/ui, and Supabase.

Core features:
- Pipeline view: Kanban board with stages (Lead, Qualified, Proposal, Negotiation, Closed Won, Closed Lost)
- Drag-and-drop deals between stages with automatic timestamp logging
- Deal card showing company name, value, probability, owner, and next action date
- Deal detail page: full info, contact details, notes timeline, and file attachments
- Contacts page: searchable directory with company, role, email, phone, and linked deals
- Reports page: monthly revenue chart, win rate by stage, average deal size, and sales velocity metrics
- Quick-add button that opens a modal to create deals or contacts from anywhere in the app

Design: Professional CRM aesthetic. Light theme with indigo (#4F46E5) accent. Cards with subtle shadows. Compact data density for power users.`} />
          </div>
        </div>
      </section>

      {/* E-commerce Prompts */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">E-commerce and Landing Page Prompts</h2>
          <p className="text-gray-400 mb-6">From storefronts to conversion-optimized landing pages, these prompts produce polished commercial interfaces.</p>
          <div className="grid gap-4">
            <CopyCard tag="E-commerce" title="Digital Product Store with Stripe" prompt={`Build a digital product store using React, Tailwind, shadcn/ui, Supabase, and Stripe.

Features:
- Homepage with featured products hero, category grid, and trending items carousel
- Product catalog page with grid/list toggle, category filters, price range slider, and search
- Product detail page: images, description, pricing, reviews, and "Buy Now" button
- Stripe Checkout integration for one-time purchases
- After purchase: redirect to download page with secure, time-limited download links
- User account page showing purchase history and re-download options
- Admin area: add/edit products with title, description, price, images, and downloadable file upload

Auth: Supabase email auth. Guest checkout option for purchases.
Design: Modern e-commerce. White background, warm accents (#F59E0B for CTAs), generous whitespace. Product images as the visual focus.`} />

            <CopyCard tag="Landing" title="SaaS Landing Page with Waitlist" prompt={`Create a high-converting SaaS landing page using React and Tailwind CSS.

Sections:
- Hero: bold headline, subheadline explaining the value prop, email waitlist form, and a product screenshot mockup
- Social proof bar: "Trusted by 500+ teams" with grayscale logo placeholders
- Features grid: 6 features with icons, titles, and 2-sentence descriptions
- How It Works: 3-step visual flow with numbered steps and illustrations
- Pricing: 3-tier pricing table (Free, Pro, Enterprise) with feature comparison and highlighted "Most Popular" tier
- Testimonials: 3 testimonial cards with photo, name, role, company, and quote
- Final CTA: repeating the waitlist signup form with urgency copy
- Footer: links, social icons, legal pages

Design: Premium SaaS style. Dark hero section transitioning to white content sections. Primary color: rose (#E11D48). Smooth scroll behavior. Fully responsive. Subtle entrance animations on scroll.`} />
          </div>
        </div>
      </section>

      {/* Lovable vs Bolt.new vs v0 */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Lovable vs Bolt.new vs v0: When to Use Each</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">Each AI builder has a sweet spot. Choosing the right tool for your project matters more than the prompt itself.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#1a1a1a] border border-[#E11D48]/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Heart size={18} className="text-[#E11D48]" />
                <h3 className="font-bold text-white">Lovable</h3>
              </div>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">Best for full-stack apps with databases, auth, and payments. Choose Lovable when you need a deployable product, not just a prototype.</p>
              <div className="space-y-1.5">
                {["SaaS products", "Internal tools", "Marketplaces", "Apps with Supabase/Stripe"].map(s => (
                  <div key={s} className="text-xs text-gray-500 flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#E11D48]" />{s}</div>
                ))}
              </div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={18} className="text-[#7C3AED]" />
                <h3 className="font-bold text-white">Bolt.new</h3>
              </div>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">Best for rapid prototypes and browser-based experiments. Choose Bolt when speed matters more than production readiness.</p>
              <div className="space-y-1.5">
                {["Quick prototypes", "Browser-based apps", "Hackathon projects", "Simple utilities"].map(s => (
                  <div key={s} className="text-xs text-gray-500 flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-[#7C3AED]" />{s}</div>
                ))}
              </div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Code2 size={18} className="text-white" />
                <h3 className="font-bold text-white">v0 by Vercel</h3>
              </div>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">Best for individual UI components and design iterations. Choose v0 when you need a specific component, not a full app.</p>
              <div className="space-y-1.5">
                {["UI components", "Design exploration", "React/Next.js pieces", "Tailwind layouts"].map(s => (
                  <div key={s} className="text-xs text-gray-500 flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-white/50" />{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Techniques */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Advanced Lovable Prompting Techniques</h2>
          <p className="text-gray-400 mb-6">Level up your results with these expert patterns used by power users building production apps.</p>
          <div className="grid gap-4">
            <CopyCard tag="Technique" title="Phased Build Strategy" prompt={`Phase 1 - Core Shell:
Build the app layout with React, Tailwind, shadcn/ui. Create the sidebar navigation, header with user menu, and routing for: Dashboard, [Feature A], [Feature B], Settings. Use placeholder content on each page. Supabase auth with email/password.

Phase 2 - Data Layer:
Now add Supabase tables for [your data model]. Create CRUD operations for [main entity]. Show data in a table on the [Feature A] page with search and pagination.

Phase 3 - Rich Features:
Add [specific feature] to [Feature B] page. Include [charts/exports/notifications]. Connect the dashboard KPIs to real Supabase data.

Phase 4 - Polish:
Add loading states, error boundaries, empty states with illustrations, and toast notifications for all actions. Ensure full mobile responsiveness.`} />

            <CopyCard tag="Technique" title="Design System First Approach" prompt={`Before building any features, set up a consistent design system:

Colors: Primary (#E11D48), Secondary (#1E293B), Success (#059669), Warning (#D97706), Error (#DC2626). Background (#FAFAFA), Cards (#FFFFFF with 1px #E2E8F0 border).

Typography: Inter font. Headings bold, body regular. H1: 2.25rem, H2: 1.5rem, H3: 1.25rem, Body: 0.875rem.

Components: All buttons have rounded-lg, 2px border, and 150ms transitions. Cards have rounded-xl, subtle shadow-sm, and 8px padding. Form inputs have rounded-lg borders with focus ring in primary color.

Spacing: Section padding 3rem. Card gap 1rem. Content max-width 1200px centered.

Apply this design system consistently across every page and component you build.`} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <FAQ key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Related Prompt Guides</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Bolt.new Prompts", href: "/bolt-new-prompts" },
              { label: "v0 Prompts", href: "/v0-prompts" },
              { label: "Cursor AI Prompts", href: "/cursor-ai-prompts" },
              { label: "Windsurf AI Prompts", href: "/windsurf-ai-prompts" },
              { label: "Vibe Coding Prompts", href: "/vibe-coding-prompts" },
              { label: "Claude Code Prompts", href: "/claude-code-prompts" },
              { label: "ChatGPT Code Generation", href: "/chatgpt-code-generation" },
              { label: "AI Coding Prompts", href: "/ai-prompts-coding" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="text-sm px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-gray-300 hover:border-[#E11D48]/40 hover:text-white transition-all text-center">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
