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

export default function LinkedInPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const promptCategories = [
    {
      title: 'LinkedIn Content & Personal Branding',
      prompts: [
        'Write a compelling LinkedIn headline that communicates my unique value proposition as a [your role] with [X years] of experience in [industry]. Include a clear benefit statement and call-to-action.',
        'Create a professional LinkedIn about section that tells my career story, highlights key achievements with metrics, and positions me for [target role/opportunity].',
        'Generate 10 LinkedIn post ideas for next month that showcase my expertise in [topic], include data and storytelling, and encourage engagement without being overly promotional.',
        'Write a LinkedIn post celebrating a recent professional win: [describe achievement]. Make it authentic, humble, and focused on lessons learned that others can apply.',
        'Develop a LinkedIn personal brand statement (2-3 sentences) that differentiates me from competitors and clearly communicates the value I bring to [target audience].',
        'Create a series of 5 LinkedIn posts around the theme of [topic] that can be published weekly. Each post should include a hook, insight, and call-to-action for engagement.'
      ]
    },
    {
      title: 'Professional Networking & Relationship Building',
      prompts: [
        'Write personalized LinkedIn connection request messages to [number] professionals in [industry/role] that mention a specific commonality and propose a genuine value exchange.',
        'Create a LinkedIn DM template for reconnecting with dormant contacts after [time period] that adds value, mentions a specific reason for reconnecting, and suggests a brief call.',
        'Generate conversation starters for LinkedIn coffee chats with [type of professional]. Include thoughtful questions that go beyond surface-level networking.',
        'Write a thank-you LinkedIn message to [person/company] that acknowledges their support, quantifies the impact, and suggests future collaboration opportunities.',
        'Develop an outreach sequence for LinkedIn cold messaging to [target role] that spans 3 touches over 2 weeks, adds progressive value, and has a clear ask by the third message.',
        'Create a LinkedIn profile optimization strategy that highlights my network breadth in [industry], encourages inbound connection requests, and positions me as a connector in my field.'
      ]
    },
    {
      title: 'Job Search & Career Advancement',
      prompts: [
        'Write a LinkedIn headline and about section optimized for [target job title], including keywords that recruiters search for, my relevant experience, and a clear next career move.',
        'Create a job search strategy post for LinkedIn that discusses my transition from [current role] to [target role], the skills I\'m leveraging, and what I\'m learning in the process.',
        'Generate 5 talking points for a LinkedIn recruiter conversation about [role/company], including questions that demonstrate deep interest and help evaluate cultural fit.',
        'Write a LinkedIn recommendation request message to 3 past colleagues/managers that specifically asks them to highlight my impact in [key skill/achievement area].',
        'Develop a career pivot narrative post for LinkedIn that explains why I\'m transitioning to [new field], how my past experience transfers, and what I\'m excited about.',
        'Create a LinkedIn message template to send to hiring managers at target companies, mentioning a specific project/achievement of theirs and expressing genuine interest in their team.'
      ]
    },
    {
      title: 'Thought Leadership & Industry Authority',
      prompts: [
        'Write a LinkedIn article (1,000+ words) sharing my unique perspective on [industry trend/challenge], backed by data and personal experience, positioning myself as a trusted voice.',
        'Generate 15 LinkedIn post hooks on the theme of [topic] that create curiosity, challenge conventional thinking, and invite discussion from my target audience.',
        'Create a LinkedIn post series responding to [recent industry news/announcement] with my expert take, predictions for the future, and actionable insights for my audience.',
        'Write a LinkedIn post sharing a professional failure or challenge: [describe situation], the lessons learned, and how it shaped my approach to [relevant skill/topic].',
        'Develop a "monthly insights" post template for LinkedIn that aggregates 3-5 key lessons from the month on [topic] with actionable takeaways for [target audience].',
        'Generate a LinkedIn post that presents original research, survey results, or data analysis on [topic], shared with permission and context, that establishes credibility.'
      ]
    },
    {
      title: 'Company & Business Development',
      prompts: [
        'Write a LinkedIn company page about section that clearly communicates our mission, differentiates us from competitors, and calls viewers to action (apply, engage, follow).',
        'Create a LinkedIn employee advocacy program post that encourages team members to share [topic/announcement] on their profiles, with suggested messaging and talking points.',
        'Generate 10 LinkedIn post ideas for a company profile that drive [specific business goal: recruitment, B2B leads, brand awareness], including content pillars and posting frequency.',
        'Write a LinkedIn post announcing [company milestone/announcement] that celebrates the team, acknowledges stakeholders, and communicates impact to customers and partners.',
        'Develop a LinkedIn recruitment post for [open role] that tells a compelling story about the role, team culture, and impact—going beyond a standard job description.',
        'Create a LinkedIn case study or success story post featuring [client/partner], their challenge, your solution, and measurable results that demonstrates ROI for prospective clients.'
      ]
    },
    {
      title: 'LinkedIn Analytics & Growth Strategy',
      prompts: [
        'Analyze my LinkedIn profile performance over the last [time period] and create an optimization roadmap targeting [specific goal: engagement, followers, recruiter outreach] with weekly action items.',
        'Generate a LinkedIn content calendar for the next 3 months that balances thought leadership, personal updates, industry news commentary, and engagement tactics across [X] posts per week.',
        'Write a post analyzing [LinkedIn feature/trend: polls, articles, video, reels] and how I can leverage it to increase visibility, engagement, and reach with [target audience].',
        'Create a LinkedIn audience analysis: who are my ideal connection targets, what content do they engage with most, and what themes should dominate my posting strategy.',
        'Develop a LinkedIn engagement strategy that includes optimal posting times, hashtag strategy, reply-to-comments protocol, and monthly review metrics to track growth.',
        'Generate a LinkedIn growth experiment plan: test 3 different content formats/topics over 4 weeks, track metrics (engagement, followers, profile views, DMs), and double down on what works.'
      ]
    }
  ]

  const faqs = [
    {
      question: 'How do I write a LinkedIn headline that gets noticed by recruiters?',
      answer: 'Include your current role, key skills, and unique value proposition. Use keywords that recruiters search for in your industry (check LinkedIn\'s search feature). Example: "Product Manager | AI/ML | B2B SaaS Growth | Ex-Google" is better than just "Product Manager." Test different headlines and monitor profile views to see what resonates.'
    },
    {
      question: 'What\'s the best frequency for posting on LinkedIn?',
      answer: 'LinkedIn\'s algorithm rewards consistency over volume. 2-3 high-quality posts per week typically outperforms daily posting. Analyze your audience (Tools > Analytics > Visitors) to see when they\'re most active, and schedule posts then. Quality of engagement matters more than post frequency.'
    },
    {
      question: 'How do I grow my LinkedIn network strategically?',
      answer: 'Connect with people in your target role, industry, or geography who can provide mutual value. Personalize connection requests with a specific reason. Engage regularly with their content before and after connecting. Focus on depth over numbers—1,000 highly engaged connections beats 10,000 inactive ones.'
    },
    {
      question: 'Should I use LinkedIn for sales/business development?',
      answer: 'Yes, but authentically. Share valuable insights first, build trust through consistent content and engagement, then move to outreach. Use LinkedIn to research prospects, find warm introductions, and establish credibility. Direct pitches in DMs often get ignored—relationship-building precedes asks.'
    },
    {
      question: 'How do I write a LinkedIn post that encourages discussion?',
      answer: 'Ask genuine questions that require nuanced answers (avoid yes/no questions). Share contrarian takes or challenges to conventional wisdom. End with a specific question that invites your audience to share their perspective. Respond to early comments quickly to boost engagement signals.'
    },
    {
      question: 'What LinkedIn content generates the most engagement?',
      answer: 'Personal stories (wins and failures) outperform generic advice. Insights backed by data resonate. Controversial takes that spark debate perform well. Video gets 3x more engagement than static images. Authenticity and vulnerability beat polished corporate messaging.'
    },
    {
      question: 'How do I use LinkedIn for personal branding as a professional?',
      answer: 'Create a clear "positioning statement" at the top of your profile. Share content consistently in your area of expertise. Engage with others\' content genuinely. Write articles on deep expertise topics. Collect recommendations and endorsements. Build a reputation as someone who is generous, thoughtful, and expert in your field.'
    },
    {
      question: 'How do I craft a message to a recruiter on LinkedIn?',
      answer: 'Research the recruiter and the role first. Mention a specific reason you\'re interested (their company\'s recent news, a mutual connection). Keep it concise. Highlight 1-2 achievements that align with the role. Include your updated resume or LinkedIn profile link. Be respectful of their time—many receive dozens of messages daily.'
    },
    {
      question: 'Should I include my resume link in my LinkedIn profile?',
      answer: 'Yes, make it easy for recruiters. Add a resume link in the "Featured" section or in the "Media" section. Use a UTM-tracked link if possible to see traffic. Alternatively, ensure your LinkedIn About section is comprehensive enough that recruiters don\'t need a separate resume. Update it whenever you make major changes.'
    },
    {
      question: 'How do I measure my LinkedIn success?',
      answer: 'Track monthly profile views, follower growth rate, and engagement metrics (reactions, comments, shares per post). Monitor inbound recruiter messages and job inquiries. Use LinkedIn Analytics (available to all profiles) to see visitor demographics and which content drives engagement. Set specific quarterly goals (e.g., "increase followers by 20%").'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/5 px-6 py-20 sm:px-12 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A66C2]/5 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-[#0A66C2]/20 bg-[#0A66C2]/5">
            <span className="text-sm font-medium text-[#0A66C2]">LinkedIn Mastery</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            ChatGPT Prompts for LinkedIn Content & Career Growth
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Master LinkedIn with 36 expert-crafted ChatGPT prompts. Build your personal brand, grow your network, advance your career, and establish thought leadership with proven strategies.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-lg bg-[#0A66C2] text-white font-semibold hover:bg-[#0A66C2]/90 transition-colors">
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
            <a href="/chatgpt-prompts-google-sheets" className="group p-6 rounded-lg border border-white/10 hover:border-[#0F9D58]/50 hover:bg-[#0F9D58]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#0F9D58]">ChatGPT Prompts for Google Sheets</h3>
              <p className="text-sm text-gray-400">Formulas, automation, and analytics</p>
            </a>
            <a href="/ai-prompts-for-startups" className="group p-6 rounded-lg border border-white/10 hover:border-[#FF6B35]/50 hover:bg-[#FF6B35]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FF6B35]">AI Prompts for Startups</h3>
              <p className="text-sm text-gray-400">Founder strategies and growth hacks</p>
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
            headline: 'ChatGPT Prompts for LinkedIn Content & Career Growth',
            description: 'Master LinkedIn with 36 expert-crafted ChatGPT prompts for personal branding, networking, job search, thought leadership, and career advancement.',
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
