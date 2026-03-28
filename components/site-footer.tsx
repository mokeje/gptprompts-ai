import Link from "next/link"

const footerLinks = {
  "AI Models": [
    { label: "ChatGPT Prompts", href: "/chatgpt-prompts" },
    { label: "Claude Prompts", href: "/claude-prompts" },
    { label: "Gemini Prompts", href: "/gemini-prompts" },
    { label: "Grok Prompts", href: "/grok-prompts" },
    { label: "Perplexity Prompts", href: "/perplexity-prompts" },
    { label: "DeepSeek Prompts", href: "/deepseek-ai-prompts" },
    { label: "Midjourney Prompts", href: "/midjourney-prompts" },
  ],
  "AI Tools & Coding": [
    { label: "Cursor AI Prompts", href: "/cursor-ai-prompts" },
    { label: "GitHub Copilot", href: "/github-copilot-prompts" },
    { label: "Napkin AI Prompts", href: "/napkin-ai-prompts" },
    { label: "Lovable AI Prompts", href: "/lovable-ai-prompts" },
    { label: "ChatGPT Image Generation", href: "/chatgpt-image-generation-prompts" },
    { label: "Stable Diffusion", href: "/stable-diffusion-guide" },
    { label: "DALL-E 3 Prompts", href: "/dalle-3-prompts" },
  ],
  "By Profession": [
    { label: "AI for Marketers", href: "/ai-prompts-for-marketers" },
    { label: "AI for Developers", href: "/ai-prompts-for-developers" },
    { label: "AI for Data Analysts", href: "/ai-prompts-for-data-analysts" },
    { label: "AI for UX Designers", href: "/ai-prompts-for-ux-designers" },
    { label: "AI for Journalists", href: "/ai-prompts-for-journalists" },
    { label: "AI for Consultants", href: "/ai-prompts-for-consultants" },
    { label: "AI for Photographers", href: "/ai-prompts-for-photographers" },
  ],
  "Productivity & Career": [
    { label: "ChatGPT for Excel", href: "/chatgpt-prompts-excel" },
    { label: "AI for Presentations", href: "/ai-prompts-presentations" },
    { label: "AI for Brainstorming", href: "/ai-prompts-brainstorming" },
    { label: "AI for Meeting Notes", href: "/ai-prompts-meeting-notes" },
    { label: "Resume Prompts", href: "/resume-prompts" },
    { label: "Cover Letter Prompts", href: "/cover-letter-prompts" },
    { label: "Free AI Prompts", href: "/free-ai-prompts" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black tracking-tighter text-white">
              GPTPrompts<span className="text-gray-600">.AI</span>
            </span>
            <span className="text-xs text-gray-600">•</span>
            <span className="text-sm text-gray-500">230+ prompt guides</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/website-links" className="hover:text-white transition-colors">
              Prompts Library
            </Link>
            <Link href="/ai-tools-list" className="hover:text-white transition-colors">
              AI Tools
            </Link>
            <Link href="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
          </div>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} GPTPrompts.AI · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
