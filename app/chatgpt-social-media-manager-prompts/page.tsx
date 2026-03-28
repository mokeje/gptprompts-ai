'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Copy, CheckCircle, ChevronDown, Share2, Calendar, MessageSquare, BarChart3, Users, Home } from 'lucide-react';

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-violet-500/50 transition-all">
      <p className="text-slate-300 text-sm leading-relaxed mb-4">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors text-sm font-medium"
      >
        {copied ? (
          <>
            <CheckCircle size={16} />
            Copied!
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy Prompt
          </>
        )}
      </button>
    </div>
  );
};

const FAQCollapse = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-slate-800 hover:bg-slate-700 transition-colors text-left"
      >
        <span className="font-medium text-slate-200">{question}</span>
        <ChevronDown
          size={20}
          className={`text-violet-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-slate-900 border-t border-slate-700">
          <p className="text-slate-300 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function ChatGPTSocialMediaManagerPrompts() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center gap-2 text-slate-300 hover:text-violet-400 transition-colors">
            <Home size={18} />
            <span className="text-sm">Back Home</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-slate-800 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-violet-900/30 rounded-lg">
              <Share2 className="text-violet-400" size={32} />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-2">
                ChatGPT Prompts for Social Media Managers
              </h1>
              <p className="text-slate-400 text-lg">
                Win with authentic content, data-driven strategies, and community engagement
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 bg-violet-900/20 border border-violet-700/50 rounded-full text-violet-300 text-sm font-medium">
              Content Planning
            </span>
            <span className="px-4 py-2 bg-violet-900/20 border border-violet-700/50 rounded-full text-violet-300 text-sm font-medium">
              Caption Writing
            </span>
            <span className="px-4 py-2 bg-violet-900/20 border border-violet-700/50 rounded-full text-violet-300 text-sm font-medium">
              Analytics
            </span>
            <span className="px-4 py-2 bg-violet-900/20 border border-violet-700/50 rounded-full text-violet-300 text-sm font-medium">
              Community Management
            </span>
          </div>
        </div>
      </section>

      {/* Content Calendar Planning Section */}
      <section className="border-b border-slate-800 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Calendar className="text-violet-400" size={28} />
            <h2 className="text-3xl font-bold text-slate-50">Content Calendar Planning</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <CopyCard prompt="Create a 30-day social media content calendar for [BRAND_NAME] targeting [AUDIENCE]. Include [NUMBER] posts per week across [PLATFORMS]. Focus on [CONTENT_TYPES]. Use a mix of promotional, educational, and entertaining content. Assign themes to each week and suggest optimal posting times. Format as a table with date, platform, content type, and caption outline." />
            <CopyCard prompt="Design a monthly content pillars strategy for [INDUSTRY] that rotates between: customer stories, industry insights, product updates, and behind-the-scenes content. For each pillar, create [NUMBER] content ideas that align with [BUSINESS_GOAL]. Include suggested hashtags and call-to-action variations for each pillar." />
            <CopyCard prompt="Generate a quarterly social media strategy for [COMPANY] including: content themes by month, campaign ideas tied to [INDUSTRY_EVENTS], seasonal opportunities, and growth milestones. For each quarter, suggest [NUMBER] key content initiatives that drive [DESIRED_METRIC]. Include launch dates and cross-platform distribution plans." />
            <CopyCard prompt="Create a content calendar template for managing [NUMBER] social media accounts across [PLATFORMS]. Include columns for: post date, platform, content type, caption, visuals, hashtags, target audience, and performance goal. Add space for scheduling notes and revision requests. Make it adaptable for [BRAND_VOICE]." />
          </div>
        </div>
      </section>

      {/* Caption Copywriting Section */}
      <section className="border-b border-slate-800 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <MessageSquare className="text-violet-400" size={28} />
            <h2 className="text-3xl font-bold text-slate-50">Caption Copywriting</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <CopyCard prompt="Write [NUMBER] Instagram captions for [BRAND_NAME] that tell a story and drive engagement. Each caption should: open with a hook, include [TONE] language, incorporate 1-2 questions to prompt comments, and end with a clear CTA. Make captions between [LENGTH] characters. Include variation in emoji use and formatting." />
            <CopyCard prompt="Generate LinkedIn post copies for [JOB_TITLE/INDUSTRY] that establish thought leadership. Write [NUMBER] variations around these themes: industry trends, career advice, company culture, and professional development. Each post should include a relatable opener, key insight, and professional CTA. Keep posts under [CHARACTER_LIMIT]." />
            <CopyCard prompt="Create TikTok/Reels captions for [BRAND_NAME] that leverage trending formats and sounds. Write [NUMBER] captions that: use platform-native language, include hook text for the first 3 seconds, prompt shares/saves, and incorporate relevant trends. Captions should feel authentic to [TARGET_AUDIENCE], not corporate." />
            <CopyCard prompt="Write email-style captions for [PRODUCT/SERVICE] that convert. Create [NUMBER] variations optimized for each stage of the customer journey: awareness, consideration, and decision. Each caption should: address a specific pain point, provide clear value, include specific social proof, and use urgency or scarcity where appropriate." />
          </div>
        </div>
      </section>

      {/* Analytics and Insights Section */}
      <section className="border-b border-slate-800 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <BarChart3 className="text-violet-400" size={28} />
            <h2 className="text-3xl font-bold text-slate-50">Analytics and Insights</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <CopyCard prompt="Analyze this social media performance data for [BRAND_NAME]: [PASTE_DATA]. Identify the top 3 performing content types by engagement rate, reach, and conversions. For each, explain why it performed well and recommend [NUMBER] similar content ideas. Suggest which platforms and posting times drive the best results for [AUDIENCE_TYPE]." />
            <CopyCard prompt="Create a monthly social media performance report template that includes: engagement metrics (likes, comments, shares), reach and impressions by platform, audience growth rate, top-performing posts with reasons, content gaps identified, and actionable recommendations for next month. Format as [FORMAT] for presentation to [STAKEHOLDER]." />
            <CopyCard prompt="Based on [PLATFORM] analytics for [BRAND_NAME], identify audience segments by: demographics, interests, posting time preferences, and content preferences. For each segment, recommend [NUMBER] tailored content ideas and optimal posting schedules. Include metrics that show each segment's value to the business (reach, conversions, lifetime value)." />
            <CopyCard prompt="Generate 5 key performance indicators (KPIs) for [BRAND_NAME]'s social media strategy focused on [BUSINESS_GOAL]. For each KPI, define: what it measures, why it matters, current benchmark, target for [TIMEFRAME], and how to track it across [PLATFORMS]. Include formulas for calculating each metric." />
          </div>
        </div>
      </section>

      {/* Community Management Section */}
      <section className="border-b border-slate-800 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Users className="text-violet-400" size={28} />
            <h2 className="text-3xl font-bold text-slate-50">Community Management</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <CopyCard prompt="Create a community management protocol for [BRAND_NAME] that outlines: response time targets for comments and DMs, tone guidelines for different scenarios, escalation procedures for negative feedback, and approaches for managing [SPECIFIC_CHALLENGES]. Include templates for common responses (product questions, complaints, praise) that maintain [BRAND_VOICE]." />
            <CopyCard prompt="Write response templates for [SOCIAL_PLATFORM] covering these scenarios: customer complaint about [ISSUE], product question, negative review, spam/inappropriate content, influencer/media inquiry, and positive feedback. Each template should be [LENGTH] words, empathetic, brand-aligned, and include next steps. Make them customizable for different situations." />
            <CopyCard prompt="Design a crisis communication plan for [BRAND_NAME] on social media. Address: initial response strategy (timing, tone, channels), who manages responses, escalation triggers, and recovery messaging. Provide specific response templates for scenarios like: product issues, employee conflicts, privacy concerns, and misinformation. Include post-crisis analysis steps." />
            <CopyCard prompt="Create a brand ambassador or community champion program for [BRAND_NAME]. Define: selection criteria for potential advocates, onboarding process, benefits offered, content guidelines, recognition/rewards system, and performance metrics. Include sample recruitment message and monthly engagement ideas to keep ambassadors active and motivated." />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-b border-slate-800 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-50 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQCollapse
              question="Can ChatGPT write engaging social media captions that match my brand voice?"
              answer="Yes, but with guidance. ChatGPT works best when you provide specific brand voice guidelines, tone examples, and content context. Use detailed prompts that specify audience, platform, and desired emotion. Always review outputs for authenticity and adjust as needed. The best results come from using ChatGPT as a drafting tool rather than final content."
            />
            <FAQCollapse
              question="How can I use ChatGPT to improve my content calendar efficiency?"
              answer="ChatGPT can generate content ideas, create calendar templates, suggest optimal posting times, and brainstorm content pillars. Use it to batch-create caption drafts, develop theme ideas for months or quarters, and analyze content gaps. Provide clear brief details about your audience and business goals to get more targeted suggestions."
            />
            <FAQCollapse
              question="Can ChatGPT help analyze social media metrics and suggest improvements?"
              answer="ChatGPT can help interpret metrics, identify patterns, and suggest content improvements, but it cannot access your actual analytics. Paste your data into ChatGPT, ask it to identify trends, and request recommendations. For deeper insights, also use native platform analytics tools. ChatGPT works best as a brainstorming partner for strategy rather than data analysis."
            />
            <FAQCollapse
              question="How do I use ChatGPT for community management at scale?"
              answer="ChatGPT can generate response templates for common scenarios, help draft crisis communication plans, and suggest community engagement ideas. Create templates for your most frequent comment types, then customize responses based on specifics. Use ChatGPT to brainstorm engagement strategies and build ambassador programs, but keep responses personalized to maintain authentic community relationships."
            />
            <FAQCollapse
              question="What are the limitations of using ChatGPT for social media management?"
              answer="ChatGPT has no real-time access to trending topics, cannot view competitor content, and may not understand your specific brand nuances. Outputs can sometimes feel generic if prompts lack detail. ChatGPT also cannot post directly to platforms or access analytics. Use it for drafting, brainstorming, and strategy, but always review content for relevance, tone fit, and accuracy."
            />
            <FAQCollapse
              question="How can I ensure ChatGPT-generated captions feel authentic and not AI-written?"
              answer="Provide detailed brand voice guidelines and examples of your best captions. Ask ChatGPT to write in specific tones (conversational, professional, humorous, etc.). Always edit outputs to remove generic phrases and add personal touches. Vary sentence structure, emoji use, and post formats. The more detailed your prompt, the more authentic the output will feel."
            />
            <FAQCollapse
              question="Can ChatGPT help me develop a social media strategy from scratch?"
              answer="Absolutely. ChatGPT can help define audience personas, content pillars, platform selection, and KPIs. Start with detailed prompts about your business, target audience, and goals. Ask it to recommend content types, frequency, and posting schedules. While ChatGPT provides excellent structure and ideas, validate strategy choices against your actual audience insights and business objectives."
            />
            <FAQCollapse
              question="How do I handle negative comments or feedback using ChatGPT-drafted responses?"
              answer="Use ChatGPT to generate response templates, but always personalize them for the specific situation. Negative feedback requires authentic acknowledgment and problem-solving, not templated responses. Review all responses for tone and sincerity before posting. For serious issues, escalate to a manager. ChatGPT is best for generating starting points, not final responses to sensitive situations."
            />
            <FAQCollapse
              question="Can ChatGPT help optimize hashtag strategies?"
              answer="ChatGPT can suggest relevant hashtags based on your niche and content type. It understands hashtag combinations, trending topics, and platform-specific practices. However, it may not know real-time trending hashtags or algorithm changes. Verify hashtag recommendations using platform-native tools and check current usage. Use ChatGPT for historical context and strategy, platform tools for real-time optimization."
            />
            <FAQCollapse
              question="How often should I use ChatGPT for content creation versus creating original content?"
              answer="Use ChatGPT as an acceleration tool, not a replacement for original thinking. Allocate 30-40% of content to ChatGPT-assisted drafts (edited heavily), and 60-70% to original, personal, or team-created content. The balance maintains authenticity and audience connection while improving efficiency. Your unique voice and community relationships should always be the foundation of your strategy."
            />
          </div>
        </div>
      </section>

      {/* Related Prompts Section */}
      <section className="border-b border-slate-800 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-50 mb-8">Explore More AI Prompts</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/ai-prompts-real-estate-agents"
              className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg hover:border-teal-500/50 transition-all group"
            >
              <h3 className="font-semibold text-slate-200 group-hover:text-teal-400 transition-colors mb-2">
                Real Estate Agents
              </h3>
              <p className="text-slate-400 text-sm">Property listings, client follow-ups, and market analysis</p>
            </Link>
            <Link
              href="/notebooklm-prompts"
              className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all group"
            >
              <h3 className="font-semibold text-slate-200 group-hover:text-blue-400 transition-colors mb-2">
                NotebookLM
              </h3>
              <p className="text-slate-400 text-sm">Document analysis, research synthesis, and study guides</p>
            </Link>
            <Link
              href="/ai-prompts-teachers-educators"
              className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg hover:border-purple-500/50 transition-all group"
            >
              <h3 className="font-semibold text-slate-200 group-hover:text-purple-400 transition-colors mb-2">
                Teachers & Educators
              </h3>
              <p className="text-slate-400 text-sm">Lesson planning, assessments, and differentiated learning</p>
            </Link>
            <Link
              href="/ai-prompts-coaches"
              className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg hover:border-amber-500/50 transition-all group"
            >
              <h3 className="font-semibold text-slate-200 group-hover:text-amber-400 transition-colors mb-2">
                Coaches & Consultants
              </h3>
              <p className="text-slate-400 text-sm">Client onboarding, programs, and business growth</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-50 mb-4">
            Ready to Scale Your Social Media Strategy?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            These prompts accelerate your workflow, but building a growth-focused strategy requires strategy design tailored to your business. Let us help.
          </p>
          <Link
            href="mailto:okejemichael@gmail.com?subject=Social%20Media%20Strategy%20Consulting"
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors"
          >
            <span>Schedule a Consulting Session</span>
          </Link>
          <p className="text-slate-500 text-sm mt-6">
            AI Strategy & Growth Consulting from Michael Okeje
          </p>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ChatGPT Prompts for Social Media Managers',
            description: 'Win with authentic content, data-driven strategies, and community engagement. 16 expert ChatGPT prompts for content planning, copywriting, analytics, and community management.',
            author: {
              '@type': 'Person',
              name: 'Michael Okeje',
              url: 'https://michaelokeje.com',
            },
            datePublished: new Date().toISOString().split('T')[0],
          }),
        }}
      />
    </div>
  );
}
