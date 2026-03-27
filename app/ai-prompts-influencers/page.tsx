import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Prompts for Influencers: Content Creation, Growth & Monetization",
  description:
    "Complete guide to ChatGPT and AI prompts for influencers and content creators. Generate hooks, scripts, captions, brand collaborations, and growth strategies across all platforms.",
  keywords: "influencer prompts, content creator prompts, social media scripts, viral hooks, brand collaboration",
}

export default function InfluencersPromptsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/website-links" className="text-blue-600 hover:underline">
            Prompts Library
          </Link>
          <span>/</span>
          <span className="text-gray-700">Influencers</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Prompts for Influencers: Content Creation, Growth & Monetization
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            AI prompts can help streamline content creation, boost engagement, and grow audiences across platforms like
            Instagram, TikTok, YouTube, and LinkedIn. These prompts act as reusable instructions to get high-quality
            ideas, scripts, captions, and brand collab assets quickly.
          </p>
        </header>

        {/* What AI Prompts Do */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What AI Prompts Do for Influencers</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <p className="text-gray-700 mb-4">
              AI prompts are structured instructions you give an AI assistant to generate content ideas, scripts,
              captions, hooks, and outreach emails tailored to your niche and audience. They work best when they
              include:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Your niche, platform, and target audience</li>
              <li>• Your tone and style (funny, bold, educational, luxury, etc.)</li>
              <li>• The desired output format (caption, script, content calendar, email)</li>
              <li>• Clear constraints (word count, number of ideas, CTA, etc.)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Well-crafted prompts become "templates" you can reuse daily, saving time and keeping your brand
              consistent.
            </p>
          </div>
        </section>

        {/* Content Idea Prompts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Content Idea Prompts</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">General Idea Generation</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Act as a content strategist for a [fitness/beauty/tech/finance/travel] influencer. Generate 30 content
                ideas for short vertical videos tailored to [TikTok/Instagram Reels/YouTube Shorts] that are optimized
                for virality and saves. Include one-line hooks for each idea."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Generate 20 content ideas for a [niche] creator who wants to be known for [keyword]. Organize them
                into: educational, relatable, aspirational, and challenge content."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Create a 4-week content plan for a [niche] influencer posting 5 times per week on [platform]. Include:
                topic, format (reel, carousel, static, live), primary hook, and CTA for each post."
              </p>
            </div>
          </div>
        </section>

        {/* Hook and Caption Prompts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Hook and Caption Prompts</h2>
          <p className="text-gray-700 mb-6">
            Hooks and captions determine whether people stop scrolling and engage. These prompts help you create
            scroll-stopping content.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Scroll-Stopping Hooks</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Write 30 short, scroll-stopping hooks for a [niche] influencer on [platform]. Each hook should be 6–10
                words and create curiosity, emotion, or FOMO. Avoid clickbait but make them bold."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "I post [educational/relatable] content about [topic]. Generate 25 hooks that start with 'Stop scrolling
                if…', 'No one is telling you…', or 'Everyone does this wrong…' tailored to my niche."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">High-Engagement Captions</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Write 10 Instagram captions for a [niche] influencer about [topic], each 80–150 words. Structure: 1)
                hook line, 2) story or insight, 3) value/lesson, 4) strong CTA. Tone:
                [friendly/controversial/expert/soft]."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Turn this bullet-point value content into a carousel caption. Start with a strong hook, weave in a
                short story, then break down the tips in simple language, and end with a clear CTA to save and share."
              </p>
            </div>
          </div>
        </section>

        {/* Script Prompts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Script Prompts for Reels, TikTok, and YouTube</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Short-Form Video Scripts</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Write a 30–45 second TikTok/Reel script for a [niche] influencer. Structure: 1) hook in the first 3
                seconds, 2) 3–5 quick points, 3) concise CTA. Tone: [bold and direct]. Target audience: [define
                clearly]. Output in a script format with on-screen text suggestions."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "I help [audience] achieve [result] without [pain]. Write 10 short-form video script ideas with full
                scripts, including hook, body, and CTA. Each should be under 150 words."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Long-Form YouTube Scripts</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Create a detailed YouTube video outline (10–15 minutes) for a [niche] creator on the topic: [title].
                Include: intro hook, personal story angle, 3–5 main sections with talking points, examples, and a
                closing CTA."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Turn this live stream or podcast transcript into a structured YouTube video script. Clean up filler
                words, improve flow, and add stronger hooks and segues, while keeping my voice conversational."
              </p>
            </div>
          </div>
        </section>

        {/* Brand Collaboration Prompts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Brand Collaboration and Outreach Prompts</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Crafting Outreach Emails and DMs</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Write 3 versions of a professional yet friendly outreach email to a brand I genuinely like, proposing a
                collaboration. Include my value proposition: [follower count, audience, niche, engagement rate, past
                collabs]. Keep each email under 200 words."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Draft 5 short DM templates I can send to brands after posting organic content featuring their product.
                Tone: appreciative, not needy. Mention specific performance metrics from the post and propose a
                conversation about future collabs."
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Media Kit and Pitch Assets</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Help me outline a one-page media kit as an influencer. Sections should include: about me, audience
                demographics, engagement metrics, platforms, example campaigns, and contact info."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Turn these stats and screenshots into a short brand pitch deck outline (5–7 slides) I can use for
                high-value collaborations. Emphasize results and audience fit, not just follower count."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Negotiation and Pricing</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Write 5 email templates to respond to brands asking for gifted-only collaborations when my rate is
                [amount]. Tone: respectful and professional, explaining my value and offering alternatives."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Help me calculate and explain my rates to a brand based on: platform, audience size, engagement,
                content complexity, exclusivity, and usage rights. Write a concise explanation I can copy into emails."
              </p>
            </div>
          </div>
        </section>

        {/* Repurposing Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Repurposing and Scaling Content</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Turning One Idea Into Many Formats</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Take this single piece of content [paste caption/script] and repurpose it into: 1) an Instagram
                carousel outline, 2) a TikTok script, 3) a LinkedIn post (if relevant), and 4) 3 short tweet/X ideas."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Create a 2-week repurposing plan from my last YouTube video. I want: 5 short clips, 3 carousels, 2
                single-image posts with quotes, and 1 email newsletter outline."
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Batch Content Creation</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-700 italic">
                "Act as my content operations manager. Design a weekly workflow that lets me batch create 20–30 pieces
                of content in 1–2 days. Include: brainstorming prompts, script-writing prompts, filming blocks, and
                repurposing steps."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Create a checklist-style SOP for my content team to turn all my long-form content into short-form clips
                and posts. Include where AI can help and a template for each format."
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices for Using AI as an Influencer</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-3">Do This</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Customize AI output to sound like you</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Use AI as a co-creator, not a replacement</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Keep final judgment and originality in your hands</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Build a personal prompt library</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-3">Key Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Feed samples of your previous captions for style consistency</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Add personal stories, opinions, and experiences AI cannot invent</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Avoid sounding like every other creator</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">→</span>
                  <span>Track which prompts work best for you</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Prompting Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/instagram-reels-hooks" className="text-blue-600 hover:underline">
              → Instagram Reels Hooks
            </Link>
            <Link href="/tiktok-prompts-creators" className="text-blue-600 hover:underline">
              → TikTok Creator Prompts
            </Link>
            <Link href="/social-media-captions-seo" className="text-blue-600 hover:underline">
              → Social Media & SEO
            </Link>
            <Link href="/website-links" className="text-blue-600 hover:underline">
              → Back to Prompts Library
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8 text-center text-gray-600 text-sm">
          <p>
            Used wisely, AI prompts help influencers work smarter, scale faster, and maintain authentic engagement with
            their audience—freeing up time for what matters most: creating compelling content and building genuine
            community.
          </p>
          <Link href="/website-links" className="text-blue-600 hover:underline mt-4 block">
            ← Back to Prompts Library
          </Link>
        </footer>
      </div>
    </main>
  )
}
