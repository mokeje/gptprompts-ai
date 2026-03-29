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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10B981] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-medium py-2 px-4 rounded transition-colors">
        {copied ? (<><Check className="w-4 h-4" />Copied</>) : (<><Copy className="w-4 h-4" />Copy Prompt</>)}
      </button>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center p-4 hover:bg-[#1a1a1a] transition-colors">
        <h4 className="text-white font-bold text-left">{question}</h4>
        {open ? <ChevronUp className="w-5 h-5 text-[#10B981]" /> : <ChevronDown className="w-5 h-5 text-[#10B981]" />}
      </button>
      {open && <div className="px-4 pb-4 border-t border-[#2a2a2a] text-gray-300">{answer}</div>}
    </div>
  )
}

export default function AIWebBuilderPromptsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"AI Web Builder Prompts: 30+ ChatGPT Prompts for Web Development","description":"Comprehensive collection of AI prompts for web builders, developers, and designers. Generate website layouts, code solutions, and design frameworks.","datePublished":"2026-03-29","dateModified":"2026-03-29"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is an AI web builder?","acceptedAnswer":{"@type":"Answer","text":"An AI web builder uses artificial intelligence to generate website layouts, code, and designs based on user requirements. These tools can accelerate development, reduce coding time, and help create responsive, professional websites with minimal manual effort."}},{"@type":"Question","name":"Can AI tools generate production-ready code?","acceptedAnswer":{"@type":"Answer","text":"Many AI tools can generate quality code, though it often requires review and refinement. For complex applications, combining AI-generated code with human expertise ensures security, performance, and maintainability."}},{"@type":"Question","name":"How do I optimize AI-generated websites for SEO?","acceptedAnswer":{"@type":"Answer","text":"Add proper meta tags, structured data, semantic HTML, mobile optimization, and fast loading times. Use AI to generate SEO-friendly content and meta descriptions, then validate with tools like Google Lighthouse."}},{"@type":"Question","name":"What frameworks work best with AI web builders?","acceptedAnswer":{"@type":"Answer","text":"Next.js, React, Vue, Svelte, and Astro all work well with AI tools. Choose based on your project requirements—Next.js for full-stack apps, Astro for static sites, and React for complex interactive applications."}},{"@type":"Question","name":"Can AI generate responsive designs automatically?","acceptedAnswer":{"@type":"Answer","text":"Yes, AI tools can generate responsive designs and layouts that adapt to different screen sizes. However, testing across devices and browsers is still essential to ensure optimal user experience."}},{"@type":"Question","name":"How do I ensure accessibility in AI-generated websites?","acceptedAnswer":{"@type":"Answer","text":"Prompt AI tools to follow WCAG guidelines, use semantic HTML, include alt text for images, and ensure proper color contrast. Always test with accessibility tools and screen readers to verify compliance."}},{"@type":"Question","name":"What's the best way to integrate databases with AI-built sites?","acceptedAnswer":{"@type":"Answer","text":"Use AI to generate database schemas and queries, but review them carefully for security. Implement proper authentication, input validation, and use ORMs to protect against SQL injection and other vulnerabilities."}},{"@type":"Question","name":"Can AI tools help with website performance optimization?","acceptedAnswer":{"@type":"Answer","text":"AI can suggest optimization strategies like image compression, lazy loading, caching, and code splitting. Use AI to analyze performance bottlenecks and generate optimized code, then test with tools like Lighthouse."}},{"@type":"Question","name":"How do I handle API integrations with AI-generated code?","acceptedAnswer":{"@type":"Answer","text":"Prompt AI tools to generate proper API calls with error handling and authentication. Test all integrations thoroughly, use environment variables for API keys, and implement retry logic for reliability."}},{"@type":"Question","name":"What security considerations apply to AI-built websites?","acceptedAnswer":{"@type":"Answer","text":"Review AI-generated code for vulnerabilities, implement HTTPS, sanitize user inputs, use strong authentication, and keep dependencies updated. Security should be a priority regardless of whether code is AI-generated or manually written."}}]})}} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            AI Web Builder Prompts
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            30+ ChatGPT prompts to accelerate web development. Generate responsive layouts, production-ready code, design systems, and complete website frameworks using AI.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#10B981] hover:bg-[#059669] text-white font-bold py-3 px-8 rounded transition-colors">
              Copy All Prompts
            </button>
            <button className="border border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white font-bold py-3 px-8 rounded transition-colors">
              Save as PDF
            </button>
          </div>
        </div>
      </section>

      {/* Prompts Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section 1: Website Layout & Design Generation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Website Layout & Design Generation</h2>
            <p className="text-gray-400 mb-8">AI prompts for creating modern website layouts, component systems, and design frameworks.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <CopyCard title="Hero Section Designer" prompt="Design a modern hero section for a SaaS product landing page. Include a compelling headline, subheading, CTA button, and hero image placeholder. Use Tailwind CSS and ensure mobile responsiveness. The hero should convey trust, innovation, and ease of use." />
              <CopyCard title="Navigation Bar Builder" prompt="Create a responsive navigation bar component that works on desktop and mobile. Include logo, navigation links, and mobile hamburger menu. Use React and Tailwind CSS. The navbar should be sticky, support dark mode, and have smooth animations." />
              <CopyCard title="Card Component Generator" prompt="Generate a flexible card component system with multiple variants (featured, compact, transparent). Each card should support image, title, description, and call-to-action. Include hover effects and animations. Make it fully customizable with Tailwind CSS." />
              <CopyCard title="Form Layout Designer" prompt="Design a multi-step form for user registration. Include progress indicator, form fields, validation messages, and submission handler. Use React hooks for state management. Ensure accessibility and mobile-friendly layout with Tailwind CSS." />
              <CopyCard title="Footer Component Creator" prompt="Create a comprehensive footer with company info, links, newsletter signup, social media icons, and legal links. Design it to be responsive, visually appealing, and conversion-focused. Use semantic HTML and Tailwind CSS." />
              <CopyCard title="Grid Layout Generator" prompt="Generate a responsive grid layout system for displaying products, articles, or portfolio items. Include filtering options, search functionality, and infinite scroll. Adapt layout based on screen size and ensure images load efficiently." />
            </div>
          </div>

          {/* Section 2: React & Next.js Code Generation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">React & Next.js Code Generation</h2>
            <p className="text-gray-400 mb-8">Prompts for generating production-ready React components and Next.js pages.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <CopyCard title="API Integration Component" prompt="Create a React component that fetches data from a REST API endpoint. Include loading state, error handling, and retry logic. Use React hooks (useState, useEffect) and fetch or axios. Display data in a formatted table with pagination." />
              <CopyCard title="Authentication Flow Setup" prompt="Generate a complete authentication flow for a Next.js app including login, signup, password reset, and protected routes. Use NextAuth.js or similar library. Include form validation, error handling, and session management." />
              <CopyCard title="State Management Solution" prompt="Create a custom hook for managing complex state using useContext and useReducer. Include example components that consume this state. Make it reusable across the application without requiring external libraries like Redux." />
              <CopyCard title="Real-time Data Component" prompt="Build a React component that displays real-time data using WebSockets or Server-Sent Events. Include connection status indicator, auto-reconnection logic, and data visualization. Optimize for performance with memoization." />
              <CopyCard title="E-commerce Product Page" prompt="Generate a complete product page component with image gallery, variant selection, reviews, related products, and add-to-cart functionality. Include state management for selected options and quantity. Use Next.js Image component for optimization." />
              <CopyCard title="Dashboard Layout Template" prompt="Create a dashboard layout with sidebar navigation, header, and main content area. Include responsive design that collapses sidebar on mobile. Add theme toggle and user profile dropdown. Use React and Tailwind CSS." />
            </div>
          </div>

          {/* Section 3: Responsive Design & Mobile Optimization */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Responsive Design & Mobile Optimization</h2>
            <p className="text-gray-400 mb-8">Prompts for creating mobile-first designs and responsive web experiences.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <CopyCard title="Mobile-First Layout" prompt="Design a mobile-first layout for an e-commerce site. Start with single column on mobile, expand to 2 columns on tablet, 4 columns on desktop. Include touch-friendly buttons and optimized images. Use CSS media queries or Tailwind breakpoints." />
              <CopyCard title="Responsive Typography System" prompt="Create a typography system that scales responsively from mobile to desktop. Define font sizes, line heights, and spacing for headings, body text, and small text. Use CSS variables or Tailwind config for easy maintenance." />
              <CopyCard title="Flexible Grid System" prompt="Build a custom CSS grid system that works across all devices. Include support for different column counts, gaps, and alignment options. Make it easy to use with CSS classes or React components. Ensure proper fallbacks for older browsers." />
              <CopyCard title="Touch-Optimized Components" prompt="Design UI components optimized for touch interaction with larger tap targets (minimum 48x48px). Include visual feedback for touch events. Make hover states work well on touch devices with fallbacks." />
              <CopyCard title="Image Optimization Strategy" prompt="Create a system for serving optimized images across different screen sizes. Use Next.js Image component or modern img elements with srcset and sizes attributes. Include WebP format support with fallbacks." />
              <CopyCard title="Mobile Navigation Patterns" prompt="Design different navigation patterns for mobile (hamburger menu, bottom nav, drawer). Include smooth transitions and touch-friendly sizes. Show when each pattern works best and provide implementation code." />
            </div>
          </div>

          {/* Section 4: Design Systems & Component Libraries */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Design Systems & Component Libraries</h2>
            <p className="text-gray-400 mb-8">Prompts for building scalable design systems and reusable component libraries.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <CopyCard title="Design System Setup" prompt="Create a complete design system documentation structure including color palette, typography, spacing scale, and component guidelines. Include Figma-ready specifications and code examples. Make it scalable and maintainable." />
              <CopyCard title="Component Library Framework" prompt="Set up a React component library with TypeScript, Storybook, and proper export structure. Create example components (Button, Input, Modal). Include setup for publishing to npm and versioning strategy." />
              <CopyCard title="Theming System" prompt="Build a flexible theming system that supports light and dark modes plus custom themes. Use CSS-in-JS or CSS variables. Make it easy to switch themes at runtime and persist user preference." />
              <CopyCard title="Icon System" prompt="Create a scalable icon system using SVG sprites or icon font. Include sizing options, color variations, and animation states. Show how to integrate with React components. Document naming conventions." />
              <CopyCard title="Accessibility Guidelines" prompt="Develop comprehensive accessibility guidelines for a design system including WCAG compliance checklist, color contrast requirements, keyboard navigation patterns, and screen reader testing procedures." />
              <CopyCard title="Component Documentation Template" prompt="Create a template for documenting components including usage examples, props documentation, accessibility notes, and related components. Include variant showcase and edge case examples." />
            </div>
          </div>

          {/* Section 5: Advanced Web Techniques & Performance */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Advanced Web Techniques & Performance</h2>
            <p className="text-gray-400 mb-8">Prompts for implementing advanced features and optimizing web performance.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <CopyCard title="SEO Optimization Setup" prompt="Configure Next.js for optimal SEO with meta tags, Open Graph data, structured data, and sitemaps. Generate SEO metadata for dynamic pages. Include canonical URLs and robots.txt configuration." />
              <CopyCard title="Performance Monitoring" prompt="Implement performance monitoring using Web Vitals API. Track Core Web Vitals metrics and send to analytics service. Create dashboard to visualize performance trends and identify issues." />
              <CopyCard title="Internationalization Setup" prompt="Set up i18n (internationalization) in a Next.js app with support for multiple languages and locales. Include language switching UI, locale detection, and translation file structure. Show best practices for managing translations." />
              <CopyCard title="Analytics Implementation" prompt="Integrate Google Analytics, Mixpanel, or similar platform into a web app. Track custom events, user journeys, and conversion funnels. Create reusable hooks for event tracking across components." />
              <CopyCard title="Progressive Web App Setup" prompt="Convert a web app to a PWA with service workers, manifest.json, and offline support. Include installation prompts and cache strategies. Test with Lighthouse PWA audit." />
              <CopyCard title="Error Handling & Logging" prompt="Implement comprehensive error handling with error boundaries, fallback UI, and error logging service. Include stack trace capture and user-friendly error messages. Set up alerts for critical errors in production." />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="What is an AI web builder?" answer="An AI web builder uses artificial intelligence to generate website layouts, code, and designs based on user requirements. These tools can accelerate development, reduce coding time, and help create responsive, professional websites with minimal manual effort." />
            <FAQItem question="Can AI tools generate production-ready code?" answer="Many AI tools can generate quality code, though it often requires review and refinement. For complex applications, combining AI-generated code with human expertise ensures security, performance, and maintainability." />
            <FAQItem question="How do I optimize AI-generated websites for SEO?" answer="Add proper meta tags, structured data, semantic HTML, mobile optimization, and fast loading times. Use AI to generate SEO-friendly content and meta descriptions, then validate with tools like Google Lighthouse." />
            <FAQItem question="What frameworks work best with AI web builders?" answer="Next.js, React, Vue, Svelte, and Astro all work well with AI tools. Choose based on your project requirements—Next.js for full-stack apps, Astro for static sites, and React for complex interactive applications." />
            <FAQItem question="Can AI generate responsive designs automatically?" answer="Yes, AI tools can generate responsive designs and layouts that adapt to different screen sizes. However, testing across devices and browsers is still essential to ensure optimal user experience." />
            <FAQItem question="How do I ensure accessibility in AI-generated websites?" answer="Prompt AI tools to follow WCAG guidelines, use semantic HTML, include alt text for images, and ensure proper color contrast. Always test with accessibility tools and screen readers to verify compliance." />
            <FAQItem question="What&apos;s the best way to integrate databases with AI-built sites?" answer="Use AI to generate database schemas and queries, but review them carefully for security. Implement proper authentication, input validation, and use ORMs to protect against SQL injection and other vulnerabilities." />
            <FAQItem question="Can AI tools help with website performance optimization?" answer="AI can suggest optimization strategies like image compression, lazy loading, caching, and code splitting. Use AI to analyze performance bottlenecks and generate optimized code, then test with tools like Lighthouse." />
            <FAQItem question="How do I handle API integrations with AI-generated code?" answer="Prompt AI tools to generate proper API calls with error handling and authentication. Test all integrations thoroughly, use environment variables for API keys, and implement retry logic for reliability." />
            <FAQItem question="What security considerations apply to AI-built websites?" answer="Review AI-generated code for vulnerabilities, implement HTTPS, sanitize user inputs, use strong authentication, and keep dependencies updated. Security should be a priority regardless of whether code is AI-generated or manually written." />
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Related Prompt Collections</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/ai-translation-prompts" className="block p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-bold text-white mb-2">AI Translation Prompts</h3>
              <p className="text-sm text-gray-400">30+ prompts for document translation and localization</p>
            </Link>
            <Link href="/ai-writing-assistant-prompts" className="block p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-bold text-white mb-2">AI Writing Assistant</h3>
              <p className="text-sm text-gray-400">30+ prompts for content creation and editing</p>
            </Link>
            <Link href="/ai-for-musicians-prompts" className="block p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-bold text-white mb-2">AI for Musicians</h3>
              <p className="text-sm text-gray-400">30+ prompts for music composition and production</p>
            </Link>
            <Link href="/ai-for-gaming-prompts" className="block p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-bold text-white mb-2">AI for Gaming</h3>
              <p className="text-sm text-gray-400">30+ prompts for game design and development</p>
            </Link>
            <Link href="/ai-research-assistant-prompts" className="block p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-bold text-white mb-2">AI Research Assistant</h3>
              <p className="text-sm text-gray-400">30+ prompts for research and analysis</p>
            </Link>
            <Link href="/ai-study-prompts" className="block p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-bold text-white mb-2">AI Study Prompts</h3>
              <p className="text-sm text-gray-400">30+ prompts for learning and education</p>
            </Link>
            <Link href="/ai-poem-generator-prompts" className="block p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-bold text-white mb-2">AI Poem Generator</h3>
              <p className="text-sm text-gray-400">30+ prompts for poetry and creative writing</p>
            </Link>
            <Link href="/ai-free-art-prompts" className="block p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#10B981] transition-colors">
              <h3 className="font-bold text-white mb-2">AI Free Art Prompts</h3>
              <p className="text-sm text-gray-400">30+ prompts for visual art generation</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
