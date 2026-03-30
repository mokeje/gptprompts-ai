'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

function CopyCard({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-white/20 hover:bg-white/[0.07] cursor-pointer"
      onClick={() => {
        navigator.clipboard.writeText(prompt)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
    >
      <p className="pr-10 text-[15px] leading-relaxed text-gray-300">{prompt}</p>
      <div className="absolute right-4 top-4 text-gray-500 group-hover:text-white transition-colors">
        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
      </div>
    </div>
  )
}

export default function StartupsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const promptCategories = [
    {
      title: 'Fundraising & Pitch Strategy',
      prompts: [
        'Create a compelling pitch deck narrative that positions our [startup type] as solving a massive pain point in [industry]. Structure the story to emphasize market size, competitive advantage, and unit economics in a way that resonates with Series A investors.',
        'Draft a detailed investor targeting strategy that identifies and prioritizes VCs who have previously backed similar startups in [industry]. Include warm introduction angles, differentiation messaging, and custom outreach email templates for each investor tier.',
        'Write a financial projection model for the next 5 years that demonstrates clear path to profitability. Include realistic assumptions for customer acquisition cost, lifetime value, and churn rates based on comparable startups in [market segment].',
        'Create a compelling "why now?" narrative that explains why your [product/service] is uniquely positioned to succeed in this market moment. Tie in market trends, technological maturity, and changing customer behavior.',
        'Develop a detailed cap table and equity allocation strategy for the next funding round that balances founder dilution, employee incentive pools, and investor control terms.',
        'Write investor update templates (monthly, quarterly) that communicate progress, challenges, and key metrics in a way that builds confidence and maintains momentum between funding rounds.'
      ]
    },
    {
      title: 'Product Launch & Go-to-Market',
      prompts: [
        'Create a comprehensive go-to-market plan for launching [product] that includes target customer persona, positioning strategy, pricing model, sales channels, and launch timeline with specific milestones.',
        'Design a product launch campaign that generates buzz among [target audience]. Include PR strategy, influencer outreach, content calendar, and paid media strategy with budget allocation.',
        'Develop a beta launch strategy that identifies and recruits 50-100 early adopters who can provide detailed feedback and become initial advocates. Include incentive structure and feedback collection mechanisms.',
        'Write a pricing strategy framework that balances market positioning, cost structure, and willingness to pay. Include recommendations for tiered pricing, annual vs. monthly billing, and expansion revenue opportunities.',
        'Create a landing page messaging strategy that compels visitors to sign up. Include headline variations, benefit statements, social proof elements, and call-to-action copy that emphasizes urgency.',
        'Design a customer onboarding flow that reduces time-to-value and ensures users understand core features within their first session. Include email sequences, in-app guidance, and support touchpoints.'
      ]
    },
    {
      title: 'Customer Acquisition & Growth',
      prompts: [
        'Create a multi-channel customer acquisition strategy for [startup] that identifies 4-5 high-potential channels (content marketing, paid ads, partnerships, community, virality). Include CAC targets, conversion rates, and payback period for each channel.',
        'Design a customer referral program that incentivizes existing users to invite their network. Include tiered rewards, viral mechanics, and clear communication strategy that drives 20-30% of new user acquisition.',
        'Develop a retention and expansion strategy that increases customer lifetime value by 50%. Include upsell triggers, cross-sell opportunities, success metrics, and touchpoints throughout the customer journey.',
        'Write a partnership and integration strategy that identifies 10+ potential partners who can distribute your product or increase switching costs. Include mutual value propositions and integration roadmap.',
        'Create a content marketing strategy that positions your company as thought leader in [industry] while driving organic traffic. Include topic clusters, content types, SEO strategy, and publishing cadence.',
        'Design a community-building strategy that turns customers into advocates. Include Discord/Slack channel management, user conference concept, user-generated content campaigns, and ambassador program.'
      ]
    },
    {
      title: 'Team Building & Operations',
      prompts: [
        'Create a hiring plan for the next 18 months that balances immediate skill gaps with long-term team composition. Include role descriptions, competencies, compensation ranges, and timeline for each hire.',
        'Design an organizational structure and decision-making framework that scales from 10 to 50 people. Include clear roles, responsibilities, reporting lines, and escalation processes.',
        'Develop a company culture and values framework that attracts and retains top talent. Include recruiting messaging, onboarding process, team rituals, and performance management approach.',
        'Write an equity and compensation strategy that balances cash constraints with talent acquisition. Include salary benchmarks, stock option vesting schedules, and incentive structures by role.',
        'Create a founder diligence and role-clarity document that defines each founder\'s responsibilities, decision rights, and conflict resolution mechanisms. Include exit, forced dilution, and vesting scenarios.',
        'Design an operations and financial management system for a pre-Series A startup. Include monthly budget planning, burn rate monitoring, cash runway projections, and financial forecasting.'
      ]
    },
    {
      title: 'Market Research & Validation',
      prompts: [
        'Create a customer research plan that validates your core assumptions about problem severity, willingness to pay, and product-market fit. Include interview scripts, sample sizes, and decision criteria.',
        'Design a competitive analysis framework that identifies direct and indirect competitors, their positioning, pricing, feature set, and go-to-market strategy. Identify white space opportunities.',
        'Develop a market sizing strategy (top-down and bottom-up) that demonstrates a $1B+ TAM. Include analysis of market trends, growth rates, and your realistic capture assumptions.',
        'Write a customer advisory board program that recruits 10-15 strategic customers to provide ongoing feedback on roadmap, pricing, and go-to-market decisions.',
        'Create a survey strategy that gathers quantitative validation from your target market on willingness to pay, feature prioritization, and competitive differentiation.',
        'Design a Jobs-to-be-Done analysis that uncovers the specific job your customer is trying to accomplish, their current alternatives, and where you can create unique value.'
      ]
    },
    {
      title: 'Scaling & Strategic Planning',
      prompts: [
        'Create a 12-month roadmap that balances product development, customer acquisition, and operational scaling. Include major milestones, resource allocation, and key results (OKRs) for each quarter.',
        'Design a Series B strategy that outlines when, where, and how to raise your next round. Include valuation expectations, use of proceeds, and strategic initiatives to achieve Series B milestones.',
        'Develop a geographic expansion strategy for [market]. Include market analysis, localization requirements, partner strategy, and phased rollout plan.',
        'Write a product strategy that moves from "solve the core problem" to "build an ecosystem." Include add-ons, integrations, platforms, and multi-product positioning.',
        'Create an M&A and partnership strategy that identifies 5-10 potential acquisition targets or strategic partners who can accelerate your growth or fill product gaps.',
        'Design a long-term vision and strategy (3-5 years) that articulates how your startup will become a category leader and sustain competitive advantage.'
      ]
    }
  ]

  const faqs = [
    {
      question: 'How do I use these prompts with ChatGPT for my startup?',
      answer: 'Copy a prompt directly and paste it into ChatGPT. Replace bracketed terms like [startup type], [industry], or [target audience] with your specific details. You can refine outputs by asking follow-up questions or requesting different perspectives. For complex tasks like financial modeling, ask ChatGPT to create templates or frameworks you can populate with your data.'
    },
    {
      question: 'Can I customize these prompts for my specific startup stage or industry?',
      answer: 'Absolutely. These prompts are frameworks. Modify them to fit your context — replace [startup type] with your actual product category, [industry] with your market, and [metrics] with your targets. The more specific you are, the better ChatGPT outputs will be. Most founders find it helpful to provide ChatGPT with context about their existing traction, team, and constraints.'
    },
    {
      question: 'Which prompts should I prioritize if I\'m raising a seed round?',
      answer: 'Focus on these categories in this order: Market Research & Validation (validate product-market fit), Fundraising & Pitch Strategy (create compelling narrative), Customer Acquisition (show traction), and Go-to-Market (demonstrate execution ability). Customer validation and early traction are far more valuable to seed investors than perfect financial projections.'
    },
    {
      question: 'How do I create a realistic financial projection without historical data?',
      answer: 'Use comparable startup benchmarks for your industry as anchors. Ask ChatGPT for typical CAC, LTV, churn, and unit economics for similar businesses. Build your projections backward: start with your target year-3 revenue, work backward through customer acquisition costs and volumes, then validate against your runway. Be conservative and show multiple scenarios.'
    },
    {
      question: 'What metrics should I track as an early-stage founder to demonstrate traction?',
      answer: 'Depends on your business model. For SaaS: MRR (monthly recurring revenue), churn, CAC payback period, and activation rate. For marketplaces: GMV, take rate, and retention. For consumer apps: DAU/MAU, retention cohorts, and viral coefficient. For any startup: month-over-month growth rate and unit economics (LTV > 3x CAC). Pick 3-5 metrics that best reflect your unit economics.'
    },
    {
      question: 'How do I know if my product-market fit is strong enough to raise a Series A?',
      answer: 'Signs of strong product-market fit: NPS > 50, retention cohorts show <5% monthly churn, customers asking for your product before you reach out, revenue growing 10%+ month-over-month, positive unit economics (LTV > 3x CAC), and waiting list or high free-to-paid conversion. Series A investors look for clear product-market fit, not explosive growth. If customers don\'t clearly need your product, no amount of marketing will fix it.'
    },
    {
      question: 'What should I include in a monthly investor update?',
      answer: 'Include: key metrics (MRR, revenue, customer count with % change), major milestone or shipping update, pipeline and forward momentum, key hire or team update, capital runway and burn rate, and one specific ask or decision needed from investors. Keep it to 1-2 pages. Be honest about challenges; investors expect them. Consistency and transparency build trust.'
    },
    {
      question: 'How do I avoid common startup mistakes when building my go-to-market strategy?',
      answer: 'Avoid: (1) building product before talking to customers, (2) targeting too broad an audience, (3) competing on price instead of value, (4) spreading resources across too many channels at once, (5) ignoring churn while chasing new customers, (6) hiring too aggressively before product-market fit. Focus on depth in one channel and one customer segment before expanding.'
    },
    {
      question: 'Should I focus on product development or customer acquisition first?',
      answer: 'Get initial customer validation and traction first. With 10-20 paying customers who genuinely love your product, you\'ll attract better talent, raise capital more easily, and make smarter product decisions. Early customers also provide ongoing feedback that shapes your roadmap. Build just enough product to validate core assumptions, then acquire and listen to customers, then build more.'
    },
    {
      question: 'How do I structure my equity and compensation to compete with big tech for talent?',
      answer: 'Offer a base salary slightly below market rate, competitive equity (0.1-1% depending on role and seniority), and a meaningful early-hire bonus. Be transparent about equity value, vesting schedules, and path to liquidity. Emphasize mission, impact, and growth opportunity. Early employees believe in the vision; late employees want proven traction. Hire people who thrive in ambiguity and want to build something meaningful.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/5 px-6 py-20 sm:px-12 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B35]/5 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/5">
            <span className="text-sm font-medium text-[#FF6B35]">Startup Prompts</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            ChatGPT Prompts for Startups & Founders
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Master fundraising, product launch, customer acquisition, and scaling. 36 expert prompts designed for founders navigating the startup journey from idea to Series A.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-lg bg-[#FF6B35] text-black font-semibold hover:bg-[#FF6B35]/90 transition-colors">
              Copy All Prompts
            </button>
            <button className="px-8 py-3 rounded-lg border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Prompt Categories */}
      <div className="px-6 py-16 sm:px-12">
        <div className="max-w-4xl">
          {promptCategories.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">{category.title}</h2>
              <div className="grid gap-4">
                {category.prompts.map((prompt, pIdx) => (
                  <CopyCard key={pIdx} prompt={prompt} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 py-16 sm:px-12 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-white">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <span className={`transform transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02] text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Pages Section */}
      <div className="px-6 py-16 sm:px-12 border-t border-white/5">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">Explore More Prompt Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a href="/ai-prompts-linkedin" className="group p-6 rounded-lg border border-white/10 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#0A66C2]">AI Prompts for LinkedIn</h3>
              <p className="text-sm text-gray-400">Posts, profiles, and outreach strategies</p>
            </a>
            <a href="/chatgpt-prompts-google-sheets" className="group p-6 rounded-lg border border-white/10 hover:border-[#0F9D58]/50 hover:bg-[#0F9D58]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#0F9D58]">ChatGPT Prompts for Google Sheets</h3>
              <p className="text-sm text-gray-400">Formulas, automation, and analytics</p>
            </a>
            <a href="/ai-prompts-for-researchers" className="group p-6 rounded-lg border border-white/10 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#7C3AED]">AI Prompts for Researchers</h3>
              <p className="text-sm text-gray-400">Academic research and literature reviews</p>
            </a>
            <a href="/ai-prompts-for-writers" className="group p-6 rounded-lg border border-white/10 hover:border-[#D946EF]/50 hover:bg-[#D946EF]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#D946EF]">AI Prompts for Writers</h3>
              <p className="text-sm text-gray-400">Content creation and storytelling</p>
            </a>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ChatGPT Prompts for Startups & Founders',
            description: 'Master startup success with 36 expert-crafted ChatGPT prompts for fundraising, product launch, customer acquisition, team building, and scaling.',
            image: 'https://gptprompts.ai/og-image.png',
            datePublished: new Date().toISOString(),
            author: {
              '@type': 'Organization',
              name: 'GPT Prompts'
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />
    </div>
  )
}
