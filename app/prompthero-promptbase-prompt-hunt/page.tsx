import { Card } from "@/components/ui/card"
import { Star, Zap, Globe } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PromptHero vs PromptBase vs Prompt Hunt 2026: The Ultimate Platform Review | GPTPrompts.AI",
  description:
    "Compare the three titans of prompt marketplaces in 2026. PromptHero for creators, PromptBase for professionals, Prompt Hunt for agencies. Full review and ratings.",
}

export default function PromptPlatformsPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ComparisonTable",
    headline: "PromptHero vs PromptBase vs Prompt Hunt 2026",
    description: "Comprehensive comparison of the three leading AI prompt marketplaces",
    datePublished: "2026-01-07",
    itemReviewed: [
      {
        "@type": "SoftwareApplication",
        name: "PromptHero",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.7",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "5000",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "PromptBase",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.6",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "3200",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "Prompt Hunt",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "2800",
        },
      },
    ],
  }

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <header className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8">
            The 2026 Prompt <br />
            Marketplace War
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-pretty leading-relaxed opacity-90">
            PromptHero vs PromptBase vs Prompt Hunt: Breaking down the titans of the prompt economy with insider
            analysis.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "PromptHero",
              subtitle: "The Pinterest of AI",
              icon: Globe,
              color: "from-purple-600 to-pink-600",
              rating: "4.7/5",
              best: "Designers & Hobbyists",
              price: "Free with Premium",
            },
            {
              title: "PromptBase",
              subtitle: "The Professional Marketplace",
              icon: Star,
              color: "from-blue-600 to-cyan-600",
              rating: "4.6/5",
              best: "Developers & Businesses",
              price: "$5-500 per prompt",
            },
            {
              title: "Prompt Hunt",
              subtitle: "The Integrated Suite",
              icon: Zap,
              color: "from-orange-600 to-red-600",
              rating: "4.8/5",
              best: "Agencies & Teams",
              price: "$29-299/month",
            },
          ].map((platform, i) => {
            const IconComponent = platform.icon
            return (
              <Card key={i} className="p-8 border-2 hover:shadow-lg transition-shadow">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-1">{platform.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{platform.subtitle}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold opacity-60">RATING</p>
                    <p className="text-lg font-bold text-yellow-500">{platform.rating}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold opacity-60">BEST FOR</p>
                    <p className="text-sm font-medium">{platform.best}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold opacity-60">PRICING</p>
                    <p className="text-sm font-medium">{platform.price}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="space-y-12">
          <h2 className="text-4xl font-bold tracking-tight">Detailed Platform Analysis</h2>
          <div className="space-y-8">
            {[
              {
                platform: "PromptHero",
                desc: "The open-source library for visual creators with millions of free prompts for Midjourney and DALL-E 3.",
                pros: ["Massive community", "Free access", "Visual inspiration", "Style-hacking"],
                cons: ["Quality varies", "Limited monetization", "Discovery challenges"],
              },
              {
                platform: "PromptBase",
                desc: "Professional marketplace for GPT-5 and Claude 4 agents with verified sellers and quality-tested outputs.",
                pros: ["Quality assurance", "Revenue sharing", "Specialized prompts", "Enterprise features"],
                cons: ["Marketplace fees", "Smaller catalog", "Steeper learning curve"],
              },
              {
                platform: "Prompt Hunt",
                desc: "Integrated generation suite with multi-model sandbox testing across Gemini, ChatGPT, and Flux.",
                pros: ["Multi-model testing", "Instant results", "Theme-based prompting", "Agency-friendly"],
                cons: ["Subscription required", "Newer platform", "Smaller community"],
              },
            ].map((item, i) => (
              <Card key={i} className="p-8 bg-secondary/20 border-none">
                <h3 className="text-2xl font-bold mb-4">{item.platform}</h3>
                <p className="text-muted-foreground mb-6">{item.desc}</p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Advantages</h4>
                    <ul className="space-y-2 text-sm">
                      {item.pros.map((pro, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">Limitations</h4>
                    <ul className="space-y-2 text-sm">
                      {item.cons.map((con, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">✕</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-24 p-12 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200">
          <h2 className="text-3xl font-bold mb-6">The 2026 Verdict</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <strong>For Creators:</strong> Use PromptHero for inspiration and community-driven discovery.
            </li>
            <li>
              <strong>For Developers:</strong> PromptBase offers reliable ROI and verified quality.
            </li>
            <li>
              <strong>For Agencies:</strong> Prompt Hunt's multi-model sandbox wins for scaling visual content.
            </li>
          </ul>
        </Card>
      </section>
    </main>
  )
}
