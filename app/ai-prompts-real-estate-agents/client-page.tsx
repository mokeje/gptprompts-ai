'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Copy, CheckCircle, Home, Target, MessageSquare, TrendingUp, Users, Calendar } from 'lucide-react';

const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-teal-500/50 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-teal-400 transition-colors p-2"
          aria-label="Copy prompt"
        >
          {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
        </button>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">{prompt}</p>
    </div>
  );
};

const FAQCollapse = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-slate-800 hover:bg-slate-750 px-6 py-4 text-left flex items-center justify-between transition-colors"
      >
        <span className="font-semibold text-white">{question}</span>
        <span className={`text-teal-400 transition-transform ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {open && (
        <div className="bg-slate-900 px-6 py-4 border-t border-slate-700">
          <p className="text-slate-300 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function RealEstateAgentsPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Real Estate Agents',
            description: 'ChatGPT prompts to boost productivity for real estate professionals',
            author: { '@type': 'Organization', name: 'GPTPrompts.AI' },
            datePublished: '2024-01-15',
            image: 'https://gptprompts.ai/og-real-estate.jpg',
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Home className="text-teal-400" size={32} />
            <span className="text-teal-400 font-semibold text-sm uppercase tracking-wide">Real Estate Automation</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI Prompts for Real Estate Agents
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Transform your real estate business with AI-powered prompts designed to streamline property descriptions, automate client communications, analyze market trends, and scale your social media presence. Save hours every week and focus on closing deals.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-teal-900/20 border border-teal-700/30 rounded-full px-4 py-2">
              <Target size={18} className="text-teal-400" />
              <span className="text-sm text-teal-300">Lead Generation</span>
            </div>
            <div className="flex items-center gap-2 bg-teal-900/20 border border-teal-700/30 rounded-full px-4 py-2">
              <MessageSquare size={18} className="text-teal-400" />
              <span className="text-sm text-teal-300">Client Communication</span>
            </div>
            <div className="flex items-center gap-2 bg-teal-900/20 border border-teal-700/30 rounded-full px-4 py-2">
              <TrendingUp size={18} className="text-teal-400" />
              <span className="text-sm text-teal-300">Market Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listing Descriptions Section */}
      <section className="py-20 px-6 md:px-12 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Home size={28} className="text-teal-400" />
            <h2 className="text-3xl font-bold">Property Listing Descriptions</h2>
          </div>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Generate compelling, SEO-optimized property descriptions that attract qualified buyers and stand out on listing platforms.
          </p>
          <div className="space-y-6">
            <CopyCard
              title="Premium Property Description Generator"
              prompt="I'm a real estate agent listing a [PROPERTY_TYPE] property in [LOCATION]. Create a compelling 150-word listing description that highlights: - Key features ([LIST_FEATURES]) - Location benefits ([NEIGHBORHOOD_PERKS]) - Investment potential - Target buyer ([BUYER_TYPE]). Make it engaging, use power words, and include a compelling call-to-action. Format for web listing platforms."
            />
            <CopyCard
              title="Luxury Home Listing Copywriter"
              prompt="Write an elegant, high-end property description for a [BEDROOM]-bedroom [STYLE] home in [AREA]. Price point: $[PRICE]. Emphasize: luxury finishes, smart home features, outdoor living spaces, and lifestyle appeal. Use sophisticated language that appeals to affluent buyers. Include 3 unique selling points."
            />
            <CopyCard
              title="Quick Turnaround Property Listing"
              prompt="Create a concise but comprehensive property listing for [PROPERTY_DETAILS]. Key info: - Price: $[PRICE] - Built: [YEAR] - Square footage: [SIZE] - Notable features: [FEATURES]. Write 100 words maximum, highlight the top 3 reasons to buy, and add a sense of urgency if it's a competitive market."
            />
            <CopyCard
              title="Virtual Tour Description Generator"
              prompt="I'm creating a virtual tour for a [PROPERTY_TYPE] at [ADDRESS]. Write engaging descriptions for 5 key areas: 1) Entry/foyer 2) Living spaces 3) Kitchen 4) Master bedroom 5) Outdoor spaces. Each description should be 30-50 words, highlight special features, and guide the buyer through the property flow."
            />
          </div>
        </div>
      </section>

      {/* Client Follow-Up Section */}
      <section className="py-20 px-6 md:px-12 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare size={28} className="text-teal-400" />
            <h2 className="text-3xl font-bold">Client Follow-Up Automation</h2>
          </div>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Automate personalized follow-up emails and messages that nurture leads, move prospects through the sales pipeline, and close deals faster.
          </p>
          <div className="space-y-6">
            <CopyCard
              title="Lead Nurture Email Sequence"
              prompt="Create a 4-email follow-up sequence for a buyer interested in [PROPERTY]. Email 1 (Day 1): Thank you + property highlights. Email 2 (Day 3): Answer common questions about [NEIGHBORHOOD]. Email 3 (Day 5): Success story of similar buyer. Email 4 (Day 7): Limited showing availability. Each email: 100 words, personalize with [BUYER_NAME], include soft CTA."
            />
            <CopyCard
              title="Mortgage Pre-Approval Follow-Up"
              prompt="Write a follow-up message for [PROSPECT_NAME] who viewed [PROPERTY] but hasn't gotten pre-approved. Emphasize benefits of pre-approval: certainty, negotiating power, faster closing. Include a referral to a trusted lender. Keep it friendly, non-pushy, and add a specific call time for a 10-minute conversation."
            />
            <CopyCard
              title="Post-Showing Feedback Request"
              prompt="Create a personalized text/email for [CLIENT_NAME] after showing them [PROPERTY_ADDRESS]. Ask: What did you like? Any concerns? Timeline for decision? Offer to answer questions or show similar properties. Keep it conversational, not too formal. Include option to schedule a callback within 24 hours."
            />
            <CopyCard
              title="Contingency Period Check-In"
              prompt="Write a check-in message for [BUYER_NAME] during their [NUMBER]-day inspection/contingency period for [PROPERTY]. Offer support with: inspection results questions, appraisal concerns, final walkthrough scheduling. Reassure them you're managing details. Set a clear date for final walkthrough and closing prep."
            />
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section className="py-20 px-6 md:px-12 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp size={28} className="text-teal-400" />
            <h2 className="text-3xl font-bold">Market Analysis & Competitive Intelligence</h2>
          </div>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Generate market reports, competitive analyses, and pricing strategies to position your listings and win client trust.
          </p>
          <div className="space-y-6">
            <CopyCard
              title="Comparative Market Analysis (CMA)"
              prompt="Create a CMA for a [BEDROOM]-bed, [BATHROOM]-bath home in [NEIGHBORHOOD]. Recent comparable sales (last 6 months): [LIST_COMPARABLE_SALES]. Analyze: price per square foot, days on market, market absorption rate. Recommended listing price range with justification. Format as professional client report with 3 key market insights."
            />
            <CopyCard
              title="Market Report Generator"
              prompt="Generate a one-page market report for [CITY/COUNTY] covering: Q[QUARTER] 2024 trends, median price, inventory levels, average days on market, price changes vs. last year, predictions for next 90 days. Include: Why now is good time to buy/sell, best neighborhoods to invest in, upcoming developments. Tone: Professional, data-backed, optimistic."
            />
            <CopyCard
              title="Investment Property Analysis"
              prompt="Analyze this investment property for [INVESTOR_NAME]: Purchase price $[PRICE], Annual rental income $[INCOME], Location [AREA], Property type [TYPE]. Calculate: cash-on-cash return, cap rate, ROI over 5/10 years. Compare to local market averages. Identify risks and opportunities. Recommend whether to pursue based on investment goals."
            />
            <CopyCard
              title="Seller Consultation Report"
              prompt="Create a 'Why You Should List Now' report for [SELLER_NAME] with property at [ADDRESS]. Include: Market conditions favoring sellers, comparison to homes sold nearby, recommended asking price range with 3-year trend analysis, seasonal timing benefits, potential buyer pool [BUYER_PROFILE]. Add: Estimated net proceeds after costs and taxes."
            />
          </div>
        </div>
      </section>

      {/* Social Media Content Section */}
      <section className="py-20 px-6 md:px-12 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Users size={28} className="text-teal-400" />
            <h2 className="text-3xl font-bold">Social Media Marketing</h2>
          </div>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Create engaging social media content for Instagram, Facebook, and LinkedIn to build your personal brand and attract buyers and sellers.
          </p>
          <div className="space-y-6">
            <CopyCard
              title="Property Showcase Post Generator"
              prompt="Create 3 Instagram caption variations for a beautiful new listing at [ADDRESS]. Include: Hook that stops scrolling, 2-3 key features ([FEATURES]), lifestyle appeal, call-to-action (DM for showing, link in bio). Variations: 1) Casual/playful 2) Professional/premium 3) Urgency/FOMO. Add 5 relevant hashtags for each."
            />
            <CopyCard
              title="Real Estate Tips Content Series"
              prompt="Generate 7 daily social media tips for [REAL_ESTATE_NICHE: first-time buyers/sellers/investors]. Format: Short, actionable, visual-friendly. Examples: 'Tip 1: Get pre-approved before house hunting' 'Tip 2: Save 20% down payment to avoid PMI'. Each tip with emoji, explanation (1-2 sentences), and engagement question. Make it shareable."
            />
            <CopyCard
              title="LinkedIn Agent Thought Leadership"
              prompt="Write a LinkedIn post establishing [AGENT_NAME] as a market expert. Topic: [MARKET_TREND: e.g., Remote work impact on housing demand]. Share personal insight from [NUMBER] years in real estate, reference recent [CITY] market data, predict how this affects buyers/sellers. End with question to spark discussion. 200-250 words."
            />
            <CopyCard
              title="Client Testimonial Post"
              prompt="Transform this client testimonial into an engaging social post: '[CLIENT_TESTIMONIAL]' Create variations for: 1) Instagram Story (short, snappy) 2) Facebook feed (longer version) 3) LinkedIn (professional tone). Add relevant context: sold in [DAYS] days, resulted in [OUTCOME], client type [TYPE]. Include CTA to contact for consultation."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQCollapse
              question="How do I use these prompts with ChatGPT?"
              answer="Simply copy a prompt from any card above, paste it into ChatGPT, and customize the bracketed sections with your specific details like property address, client name, or market data. Hit send and ChatGPT will generate the content in seconds. You can then refine, edit, or use it as-is."
            />
            <FAQCollapse
              question="Can I modify these prompts for my specific needs?"
              answer="Absolutely. These prompts are templates designed to be customized. Modify the tone, add your branding language, adjust the length, or combine multiple prompts to create something perfectly tailored to your business. The more specific you are with your inputs, the better the output."
            />
            <FAQCollapse
              question="Will ChatGPT generate unique content each time I use the same prompt?"
              answer="Yes, ChatGPT generates fresh, unique variations each time you submit a prompt. This is perfect for creating multiple listing descriptions, social media variations, or follow-up emails. You can run the same prompt 5 times and get 5 different quality outputs."
            />
            <FAQCollapse
              question="How much time can AI really save me as a real estate agent?"
              answer="Most agents report saving 5-10 hours per week on content creation, emails, and administrative tasks. Property descriptions that normally take 30 minutes now take 2 minutes. Follow-up emails batch down from 2 hours to 20 minutes. Over a year, that's 300+ hours freed up to focus on client relationships and deals."
            />
            <FAQCollapse
              question="Is using AI-generated content ethical in real estate?"
              answer="Yes, when used responsibly. AI is a tool to accelerate your work, not replace your expertise. Use AI to draft content, then add your personal touch, market knowledge, and client relationships. Your clients care about your judgment and service, not who typed the first draft. Always be transparent if asked."
            />
            <FAQCollapse
              question="What if ChatGPT generates inaccurate market data or figures?"
              answer="Always verify AI-generated data with current market sources. ChatGPT doesn't have real-time data and can occasionally hallucinate numbers. Use it for drafting structure and messaging, then insert verified facts. Use market databases like MLS, Zillow, or Redfin for accurate pricing and trends."
            />
            <FAQCollapse
              question="Can I use these prompts to train other agents on my team?"
              answer="Completely. These prompts are designed to be team resources. Share them with your agents, show them how to customize inputs, and create a standard process for using AI to boost team productivity. A team multiplier is one of the biggest ROI drivers for real estate brokers."
            />
            <FAQCollapse
              question="Which prompts should I prioritize first?"
              answer="Start with the 'Premium Property Description Generator' to create more listings faster, then move to 'Lead Nurture Email Sequence' to automate your follow-ups. These two alone will free up your schedule dramatically. Once they're habit, layer in the market analysis and social media prompts."
            />
            <FAQCollapse
              question="How do I measure the impact of using these AI prompts?"
              answer="Track: Time saved on content creation, listings published per week, email response rates, social media engagement, and conversion rates from AI-drafted follow-ups. Most agents see a 2-3x improvement in output within the first month, with measurable increases in leads and sales within 90 days."
            />
            <FAQCollapse
              question="Can I use these prompts with other AI tools like Claude or Gemini?"
              answer="Yes. These prompts work with ChatGPT, Claude, Google Gemini, and most large language models. Some prompts may need slight adjustments based on the AI tool's style, but the structure and methodology transfer across platforms. Experiment to find what works best for your workflow."
            />
          </div>
        </div>
      </section>

      {/* Related Prompts Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Explore More Prompts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/chatgpt-social-media-manager-prompts"
              className="group bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-violet-500/50 hover:bg-slate-750 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📱</span>
                <h3 className="text-lg font-semibold group-hover:text-violet-400 transition-colors">ChatGPT Social Media Manager Prompts</h3>
              </div>
              <p className="text-slate-400 text-sm">Automate content calendars, captions, analytics, and community engagement.</p>
            </Link>

            <Link
              href="/notebooklm-prompts"
              className="group bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 hover:bg-slate-750 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📚</span>
                <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">NotebookLM Prompts</h3>
              </div>
              <p className="text-slate-400 text-sm">Transform documents into interactive study guides, summaries, and audio overviews.</p>
            </Link>

            <Link
              href="/ai-prompts-teachers-educators"
              className="group bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500/50 hover:bg-slate-750 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎓</span>
                <h3 className="text-lg font-semibold group-hover:text-purple-400 transition-colors">AI Prompts for Teachers & Educators</h3>
              </div>
              <p className="text-slate-400 text-sm">Create lesson plans, assessments, and personalized learning experiences at scale.</p>
            </Link>

            <Link
              href="/ai-prompts-coaches"
              className="group bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-amber-500/50 hover:bg-slate-750 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏆</span>
                <h3 className="text-lg font-semibold group-hover:text-amber-400 transition-colors">AI Prompts for Coaches</h3>
              </div>
              <p className="text-slate-400 text-sm">Build training programs, engage clients, and scale your coaching business with AI.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 px-6 md:px-12 bg-teal-900/10 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to transform your real estate business?</h3>
          <p className="text-slate-300 mb-8">Copy these prompts, customize them for your clients, and start saving hours every week. No credit card required.</p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
}
