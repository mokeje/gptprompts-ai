"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Triangle, Layout, Paintbrush, Blocks, Layers, Monitor } from "lucide-react"

const accent = "#000000"
const accentAlt = "#171717"

function CopyCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-400 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 mb-2 inline-block">{tag}</span>}
          <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
        </div>
        <button onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }} className="shrink-0 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" aria-label="Copy prompt">
          {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} className="text-gray-500" />}
        </button>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed font-mono whitespace-pre-wrap">{prompt}</p>
    </div>
  )
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
        <span className="font-medium text-gray-900 pr-4">{q}</span>
        {open ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{a}</div>}
    </div>
  )
}

const faqItems = [
  {
    q: "What is v0 by Vercel and how does it work?",
    a: "v0 is an AI-powered UI generation tool by Vercel that creates React components from text descriptions. You describe a component or page layout in natural language, and v0 generates working code using React, Tailwind CSS, and shadcn/ui. It produces multiple design variants you can iterate on, then export the code directly into your Next.js or React project."
  },
  {
    q: "What tech stack does v0 generate code for?",
    a: "v0 generates React components using TypeScript, Tailwind CSS for styling, and shadcn/ui for accessible, pre-built components. The output is designed to drop directly into Next.js projects but works with any React setup. All generated code uses modern React patterns including hooks, composition, and proper TypeScript types."
  },
  {
    q: "How is v0 different from Lovable or Bolt.new?",
    a: "v0 specializes in UI component generation, not full applications. It excels at creating individual components, page layouts, and design iterations. Lovable and Bolt.new build complete full-stack apps with databases and authentication. Use v0 when you need a specific component or want to explore design variations quickly, and use Lovable/Bolt for complete application builds."
  },
  {
    q: "Can v0 create responsive designs?",
    a: "Yes. v0 generates responsive Tailwind CSS code by default. Specify breakpoint requirements in your prompt for more control: 'mobile-first with 2-column grid on tablet and 3-column on desktop.' The generated code uses standard Tailwind responsive prefixes (sm:, md:, lg:) for reliable cross-device layouts."
  },
  {
    q: "How do I get the best results from v0 prompts?",
    a: "Be specific about visual design (colors, spacing, typography), component behavior (hover states, animations, interactions), and data shape (what content the component displays). Reference well-known design patterns: 'like the Stripe pricing page' or 'similar to Linear's sidebar.' Mention accessibility needs like focus states and screen reader labels."
  },
  {
    q: "Can I iterate on v0 components?",
    a: "Yes. After v0 generates initial variants, you can refine with follow-up prompts: 'Make the cards more compact,' 'Add a dark mode version,' or 'Replace the icons with Lucide icons.' Each iteration builds on the previous design while incorporating your feedback."
  },
  {
    q: "Does v0 support dark mode components?",
    a: "Yes. Request dark mode explicitly in your prompt: 'Create a dark mode version with slate backgrounds and subtle borders.' v0 will use Tailwind's dark: prefix classes or generate a standalone dark theme. You can also ask for a component that supports both light and dark modes with a toggle."
  },
  {
    q: "How do I export v0 components into my project?",
    a: "v0 provides a 'Copy Code' button for each generated component. The code is self-contained and ready to paste into your project. For shadcn/ui components, make sure you have the required shadcn/ui packages installed. v0 also offers CLI integration with 'npx v0 add' for direct project imports."
  },
  {
    q: "Can v0 create complex interactive components?",
    a: "v0 handles moderately complex interactions well: sortable tables, filterable lists, multi-step forms, drag-and-drop interfaces, and animated transitions. For highly complex state management or real-time features, you may need to extend the generated code. v0 is best for UI structure and design, not application logic."
  },
  {
    q: "Is v0 free to use?",
    a: "v0 offers a free tier with limited generations per month. Paid plans unlock more generations, longer prompts, and priority access. For most individual developers experimenting with UI design, the free tier provides enough to evaluate components and iterate on designs before committing to a paid plan."
  },
]

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "v0 Prompts: Generate React UI Components with AI in 2026",
  description: "Master v0 by Vercel with expert prompts for generating React components, dashboards, landing pages, and complex UI layouts. Copy-paste ready prompts for designers and developers.",
  image: "https://gptprompts.ai/v0-prompts.jpg",
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

export default function V0PromptsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="border-b border-gray-200 py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Triangle size={16} className="text-black fill-black" />
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-gray-300 text-gray-700">by Vercel</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-950">v0 Prompts:<br />AI-Generated React Components</h1>
          <p className="text-xl text-gray-500 mb-6 leading-relaxed">
            v0 by Vercel generates production-ready React components from text descriptions. Describe a UI, get multiple design variants in seconds, and export clean code using Tailwind CSS and shadcn/ui. These prompts are optimized for the best v0 results.
          </p>
          <div className="flex flex-wrap gap-3">
            {["React + TypeScript", "Tailwind CSS", "shadcn/ui", "Multiple Variants", "One-Click Export"].map(b => (
              <span key={b} className="text-sm px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-gray-600">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Prompting Tips */}
      <section className="py-14 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-950">Writing Effective v0 Prompts</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">v0 generates UI components, not full applications. The more precise your visual and behavioral description, the closer the output matches your vision.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { n: "1", icon: <Paintbrush size={16} />, t: "Describe the visual design", d: "Colors, spacing, typography, shadows, and border radius. Reference designs you like: 'Stripe-style pricing cards' or 'minimal like Linear.'" },
              { n: "2", icon: <Blocks size={16} />, t: "Specify component behavior", d: "Hover states, click interactions, animations, and responsive breakpoints. 'Cards scale up on hover with a shadow transition.'" },
              { n: "3", icon: <Layers size={16} />, t: "Define the data shape", d: "What content does this component display? List the fields: 'Each card shows title, description, price, image, and a CTA button.'" },
              { n: "4", icon: <Monitor size={16} />, t: "Set responsive requirements", d: "Specify mobile, tablet, and desktop layouts. 'Single column on mobile, 2 columns on tablet, 3 columns with sidebar on desktop.'" },
              { n: "5", icon: <Layout size={16} />, t: "Reference component libraries", d: "Mention shadcn/ui components by name: 'Use shadcn Dialog for the modal, Command for search, and DataTable for the list.'" },
            ].map(p => (
              <div key={p.n} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm font-bold bg-gray-900 text-white">{p.n}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{p.t}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Components */}
      <section className="py-14 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-gray-950">Dashboard Component Prompts</h2>
          <p className="text-gray-500 mb-6">Generate individual dashboard elements that you can compose into complete admin interfaces.</p>
          <div className="grid gap-4">
            <CopyCard tag="KPI Cards" title="Analytics KPI Card Row" prompt={`Create a row of 4 KPI metric cards for a SaaS analytics dashboard.

Each card displays:
- Metric label (e.g., "Monthly Revenue", "Active Users", "Churn Rate", "NPS Score")
- Large metric value with appropriate formatting (currency, number, percentage)
- Trend indicator: green up arrow or red down arrow with percentage change
- Sparkline chart showing the last 7 data points

Design: White cards with subtle border and shadow-sm. Rounded-xl. Metric value in 2xl bold. Trend text in xs with green-600 or red-600 coloring. Sparkline as a tiny SVG line chart in the bottom right corner.

Layout: 4 columns on desktop, 2 on tablet, 1 on mobile. Gap-4 between cards.`} />

            <CopyCard tag="Data Table" title="Advanced Sortable Data Table" prompt={`Build a data table component for displaying customer records.

Features:
- Columns: Name (with avatar), Email, Plan (badge: Free/Pro/Enterprise), MRR (currency), Status (Active/Churned dot indicator), Last Active (relative time)
- Sortable columns with ascending/descending indicators
- Search input that filters across all text columns
- Pagination with page size selector (10, 25, 50)
- Row checkbox selection with bulk action dropdown (Export, Delete, Change Plan)
- Row click navigates to detail (render as a hover highlight)

Design: Clean minimal table. Header row with gray-50 background and uppercase xs text. Alternating row colors on hover. Compact row height for data density. Use shadcn/ui Table, Input, Select, DropdownMenu components.`} />

            <CopyCard tag="Sidebar" title="Collapsible App Sidebar Navigation" prompt={`Create a collapsible sidebar navigation component.

Expanded state:
- Logo area at the top (company name + icon)
- Navigation sections with labels: "Main" (Dashboard, Analytics, Reports), "Manage" (Users, Teams, Settings), "Support" (Help Center, Changelog)
- Each nav item has a Lucide icon, label text, and optional notification badge
- Active item has a subtle background highlight and left border accent
- User profile section at bottom with avatar, name, role, and dropdown menu

Collapsed state:
- Shows only icons (tooltips on hover showing the label)
- Logo collapses to just the icon
- Toggle button at the bottom to expand/collapse

Design: Slate-900 background sidebar on dark, white background on light. Smooth 200ms transition between expanded and collapsed states. Width: 260px expanded, 68px collapsed. Sticky, full viewport height.`} />
          </div>
        </div>
      </section>

      {/* Marketing Components */}
      <section className="py-14 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-gray-950">Marketing and Landing Page Prompts</h2>
          <p className="text-gray-500 mb-6">Generate conversion-optimized sections for landing pages and marketing sites.</p>
          <div className="grid gap-4">
            <CopyCard tag="Pricing" title="Tiered Pricing Table" prompt={`Create a 3-tier pricing section for a SaaS product.

Tiers: Starter ($9/mo), Professional ($29/mo, most popular), Enterprise (Custom pricing).

Each tier card shows:
- Tier name and price (monthly/annual toggle at the top)
- Short description of who the tier is for
- Feature list with checkmarks (8-12 features per tier)
- Features not included shown with gray text and x icon
- CTA button: "Get Started" for Starter/Pro, "Contact Sales" for Enterprise
- Most popular tier highlighted with a colored border and "Most Popular" badge

Design: Clean white cards on gray-50 background. Middle card slightly elevated with shadow-lg and a blue (#2563EB) border. CTA buttons: outlined for Starter, solid blue for Professional, solid black for Enterprise. Annual pricing shows crossed-out monthly price with "Save 20%" badge.`} />

            <CopyCard tag="Hero" title="SaaS Hero Section with App Preview" prompt={`Build a hero section for a developer tool landing page.

Content:
- Eyebrow text: "Now in public beta" with a sparkle icon
- Headline: large, bold, 2 lines maximum. Example: "Ship faster with AI-powered code review"
- Subheadline: 1-2 sentences explaining the value proposition
- Two CTA buttons: "Start Free" (solid black) and "Watch Demo" (outlined with play icon)
- Trust badges below CTAs: "No credit card required" and "14-day free trial"
- Below the fold: a browser mockup frame containing a screenshot placeholder (gray gradient with subtle UI wireframe shapes)

Design: Generous vertical padding (py-24). Centered text alignment. Headline in 5xl/6xl tracking-tight. Subheadline in xl text-gray-500. Background: subtle dot grid pattern at 10% opacity. Smooth fade-in animation for the browser mockup.`} />

            <CopyCard tag="Testimonials" title="Testimonial Grid with Logos" prompt={`Create a testimonial section with company logos and quotes.

Layout: 3 testimonial cards in a masonry-style grid (varying heights based on quote length).

Each card contains:
- Company logo (grayscale placeholder, 120x40px)
- Quote text in serif/italic styling (2-4 sentences)
- Author photo (circular, 48px), name in bold, role + company in gray text
- Star rating (5 stars, filled in amber-400)

Above the grid: section heading "Trusted by teams at" with a row of 6 grayscale company logo placeholders.

Design: White cards with gray-100 border and rounded-2xl. Quote marks as a large decorative element in the top-left of each card (text-gray-200, text-6xl). Cards have different heights for visual interest. Responsive: single column on mobile, masonry on desktop.`} />
          </div>
        </div>
      </section>

      {/* Form & Interactive Components */}
      <section className="py-14 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-gray-950">Form and Interactive Component Prompts</h2>
          <p className="text-gray-500 mb-6">Complex form patterns and interactive elements that go beyond basic inputs.</p>
          <div className="grid gap-4">
            <CopyCard tag="Form" title="Multi-Step Onboarding Wizard" prompt={`Create a multi-step onboarding form with 4 steps.

Step 1 - Account: Name, email, password fields with validation
Step 2 - Profile: Company name, role dropdown, team size radio buttons (1-5, 6-20, 21-100, 100+)
Step 3 - Preferences: Toggle switches for email notifications, usage analytics, and weekly digest. Timezone selector dropdown.
Step 4 - Confirmation: Summary of all entered data with an edit button for each section

Navigation: Step indicator at the top showing progress (numbered circles with connecting lines). "Back" and "Continue" buttons at the bottom. "Skip" option on steps 2 and 3.

Design: Centered card layout (max-w-lg). Step indicator uses blue for completed steps, black for current, gray for upcoming. Smooth slide transition between steps. Form fields use shadcn/ui Input, Select, RadioGroup, Switch components.`} />

            <CopyCard tag="Search" title="Command Palette / Spotlight Search" prompt={`Build a command palette component (like Cmd+K in VS Code or Linear).

Trigger: Keyboard shortcut Cmd+K (show as a floating modal with backdrop blur).

Features:
- Search input with magnifying glass icon and keyboard shortcut hint
- Recent searches section (3-5 items with clock icon)
- Results grouped by category: "Pages" (Dashboard, Settings, Billing), "Actions" (Create Project, Invite Member, Export Data), "Help" (Documentation, Changelog, Support)
- Each result shows icon, label, and optional keyboard shortcut on the right
- Arrow key navigation with highlighted active item
- Escape to close, Enter to select

Design: Centered modal, max-w-xl, rounded-2xl with shadow-2xl. Backdrop blur-sm with black/50 overlay. Search input with no border, large text. Category headers in uppercase xs gray-400. Results have py-2 px-3 with rounded-lg hover background.`} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-950">Frequently Asked Questions</h2>
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
          <h2 className="text-xl font-bold mb-6 text-gray-950">Related Prompt Guides</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Lovable AI Prompts", href: "/lovable-ai-prompts" },
              { label: "Bolt.new Prompts", href: "/bolt-new-prompts" },
              { label: "Cursor AI Prompts", href: "/cursor-ai-prompts" },
              { label: "Windsurf AI Prompts", href: "/windsurf-ai-prompts" },
              { label: "ChatGPT Code Generation", href: "/chatgpt-code-generation" },
              { label: "Claude Code Prompts", href: "/claude-code-prompts" },
              { label: "Vibe Coding Prompts", href: "/vibe-coding-prompts" },
              { label: "AI Coding Prompts", href: "/ai-prompts-coding" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="text-sm px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-all text-center">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
