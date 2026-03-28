'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown } from 'lucide-react';

const CopyCard = ({ prompt, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-[#EC4899] transition-colors">
      <p className="text-gray-300 text-sm mb-3">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-xs font-medium text-[#EC4899] hover:text-[#F472B6] transition-colors"
      >
        {copied ? (
          <>
            <Check size={16} />
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

const FAQ = ({ faqs }) => {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenId(openId === idx ? null : idx)}
            className="w-full flex justify-between items-center p-4 hover:bg-gray-800 transition-colors"
          >
            <h4 className="text-sm font-medium text-gray-100 text-left">{faq.q}</h4>
            <ChevronDown
              size={18}
              className={`text-[#EC4899] flex-shrink-0 transition-transform ${
                openId === idx ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openId === idx && (
            <div className="px-4 pb-4 text-sm text-gray-400 border-t border-gray-800">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function AIPromptsForMarketers() {
  const faqs = [
    {
      q: 'How can AI help with marketing strategy and planning?',
      a: 'AI can analyze market trends, competitor activity, and audience behavior to inform strategic decisions. It helps with audience segmentation, campaign forecasting, budget allocation, and identifying emerging opportunities faster than traditional methods.'
    },
    {
      q: 'What types of content can AI help me create?',
      a: 'AI can help write social media posts, email copy, blog headlines, product descriptions, ad copy, landing page content, webinar scripts, case studies, and more. It can adapt content for different channels and audiences while maintaining brand voice.'
    },
    {
      q: 'Can AI improve my SEO performance?',
      a: 'Yes. AI can analyze search trends, identify keyword opportunities, optimize meta descriptions, suggest content gaps, analyze competitor rankings, and help structure content for better search visibility. It speeds up keyword research and content optimization significantly.'
    },
    {
      q: 'How does AI assist with email marketing?',
      a: 'AI can segment audiences, personalize subject lines and content, predict optimal send times, generate email copy, create automated workflows, analyze performance, and recommend improvements to increase open rates and conversions.'
    },
    {
      q: 'Can AI help with social media strategy?',
      a: 'Absolutely. AI can analyze which content performs best, suggest posting times, generate captions, identify trending topics, analyze audience sentiment, monitor competitor activity, and automate routine content distribution tasks.'
    },
    {
      q: 'What about using AI for ad copy and paid campaigns?',
      a: 'AI excels at writing compelling ad copy variations, analyzing ad performance, optimizing targeting parameters, predicting audience behavior, suggesting bid adjustments, and identifying high-performing creatives. It helps maximize ROI on advertising spend.'
    },
    {
      q: 'How can AI assist with customer research and insights?',
      a: 'AI can analyze customer feedback, survey responses, review data, and behavioral patterns to uncover insights. It identifies customer pain points, preferences, sentiment, and emerging needs, helping inform product and marketing decisions.'
    },
    {
      q: 'Can AI help with competitive analysis?',
      a: 'Yes, AI can monitor competitor websites, pricing, campaigns, messaging, and performance metrics. It identifies gaps in their strategy, highlights emerging competitors, and suggests ways to differentiate your offering.'
    },
    {
      q: 'How does AI assist with marketing analytics and reporting?',
      a: 'AI automates data collection, calculates key metrics, creates visualizations, identifies trends, predicts future performance, and generates insights. It reduces manual reporting time and surfaces actionable recommendations automatically.'
    },
    {
      q: 'Can AI help optimize conversion rates?',
      a: 'AI analyzes user behavior, identifies friction points in the customer journey, suggests landing page improvements, optimizes form fields, personalizes user experiences, and recommends changes to increase conversion rates.'
    },
    {
      q: 'What AI tools are best for marketers?',
      a: 'Popular tools include ChatGPT and Claude for content creation, SEMrush and Ahrefs for SEO, Jasper for long-form content, Copy.ai for ad copy, HubSpot with AI features for automation, and various analytics tools with AI capabilities.'
    },
    {
      q: 'How do I integrate AI into my existing marketing workflow?',
      a: 'Start small with one tool or use case (like content generation or email subject lines). Measure results, train your team, gradually expand to other tasks. Use automation tools to integrate AI with your existing marketing stack.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">AI Prompts for Marketers</h1>
          <p className="text-gray-400">
            Supercharge your marketing with AI-powered campaign strategy, content creation, and analytics. Get expert prompts for social media, email, SEO, ads, and audience insights.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* Section 1: Campaign Strategy & Planning */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#EC4899]">Campaign Strategy & Planning</h2>
            <p className="text-gray-400">
              Develop data-driven marketing strategies and campaigns with AI assistance.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Marketing Strategy Brief"
              prompt="Create a comprehensive marketing strategy for a B2B SaaS company targeting mid-market finance teams. Include target audience segments, key messaging pillars, primary and secondary channels, content themes for Q1-Q4, budget allocation recommendations, and success metrics."
            />
            <CopyCard
              title="Campaign Planning Template"
              prompt="Design a 3-month product launch campaign plan for a new mobile app. Include pre-launch phase (awareness building), launch phase (conversion focus), and post-launch phase (retention). Specify tactics for each phase, timeline, budget estimates, and expected outcomes."
            />
            <CopyCard
              title="Audience Persona Development"
              prompt="Create detailed buyer personas for an e-commerce fashion brand targeting Gen Z and millennial shoppers. Include demographics, psychographics, pain points, goals, shopping behavior, social media preferences, and content that resonates with each persona."
            />
          </div>
        </section>

        {/* Section 2: Content Creation & Copywriting */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#EC4899]">Content Creation & Copywriting</h2>
            <p className="text-gray-400">
              Generate compelling marketing copy and content across all channels.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Social Media Content Calendar"
              prompt="Generate 30 days of social media post ideas for a fitness brand&apos;s Instagram and LinkedIn. Include captions, call-to-actions, hashtag suggestions, best posting times, content themes (education, inspiration, user-generated content, promotions), and engagement tactics."
            />
            <CopyCard
              title="Product Launch Copy"
              prompt="Write compelling marketing copy for a B2B software product launch. Include a punchy headline, subheading, value proposition, feature benefits, customer pain points addressed, call-to-action, and variations for LinkedIn, website, and email campaigns."
            />
            <CopyCard
              title="Blog Post Outline"
              prompt="Create a detailed outline for a blog post targeting &apos;how to improve email open rates.&apos; Include SEO keywords, engaging H2 and H3 headers, key points for each section, data/statistics to include, practical tips, examples, and a strong CTA."
            />
          </div>
        </section>

        {/* Section 3: SEO & Search Marketing */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#EC4899]">SEO & Search Marketing</h2>
            <p className="text-gray-400">
              Optimize your search visibility and drive organic traffic.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Keyword Strategy & Targeting"
              prompt="Develop a comprehensive SEO keyword strategy for a digital marketing agency. Identify primary keywords (high intent, commercial), long-tail keywords (content targets), informational keywords (blog topics), and seasonal keywords. Include search volume estimates and competition levels."
            />
            <CopyCard
              title="Meta Descriptions & Title Tags"
              prompt="Generate optimized meta titles and descriptions for an e-commerce site&apos;s product category pages. Each should be under 160 characters, include primary keywords naturally, include a value proposition, and encourage clicks from search results."
            />
            <CopyCard
              title="Content Gap Analysis"
              prompt="Analyze content gaps for a B2B SaaS company in the project management software space. Identify topics competitors rank for but this company doesn&apos;t cover. Suggest 20 blog post ideas that fill these gaps and target high-intent keywords."
            />
          </div>
        </section>

        {/* Section 4: Email Marketing & Automation */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#EC4899]">Email Marketing & Automation</h2>
            <p className="text-gray-400">
              Create effective email campaigns and automation sequences.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Email Sequence for New Subscribers"
              prompt="Design a 7-email onboarding sequence for new SaaS tool subscribers. Email 1: Welcome + value proposition. Email 2: Getting started guide. Email 3: Feature highlight. Email 4: Success story. Email 5: Common use case. Email 6: Advanced tip. Email 7: Upgrade offer. Include subject lines, personalization, and clear CTAs."
            />
            <CopyCard
              title="Re-engagement Campaign"
              prompt="Create a 3-email re-engagement campaign targeting inactive users on an e-commerce platform. Email 1: &apos;We miss you&apos; with exclusive offer. Email 2: New products added since they last visited. Email 3: Final chance offer before removal. Include subject lines, copy, incentives, and expected outcomes."
            />
            <CopyCard
              title="Promotional Email"
              prompt="Write a Black Friday promotional email for a fashion retail brand. Include an attention-grabbing subject line, sense of urgency, clear discount details, highlighted best-seller products, free shipping offer, and a prominent CTA button. Create both short and long versions."
            />
          </div>
        </section>

        {/* Section 5: Analytics & Performance Optimization */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#EC4899]">Analytics & Performance Optimization</h2>
            <p className="text-gray-400">
              Measure, analyze, and optimize marketing performance.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Marketing Dashboard Metrics"
              prompt="Create a comprehensive marketing dashboard for a B2B company. Include metrics for lead generation (traffic, form submissions, lead quality), email performance (open rate, click rate, conversion), social media (engagement, reach, follower growth), and ROI by channel."
            />
            <CopyCard
              title="Campaign Performance Analysis"
              prompt="Design a framework for analyzing a completed email marketing campaign. Include metrics: open rate, click-through rate, conversion rate, cost per lead, return on ad spend. Create comparisons to benchmarks, identify winners/losers, and recommend optimizations for next campaign."
            />
            <CopyCard
              title="A/B Testing Strategy"
              prompt="Outline an A/B testing plan for a SaaS landing page. Specify elements to test (headlines, CTAs, form fields, images, layout), sample size calculations, test duration, success metrics, and how to statistically validate results before implementing changes."
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-[#EC4899]">Frequently Asked Questions</h2>
          <FAQ faqs={faqs} />
        </section>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'AI Prompts for Marketers',
              description: 'Supercharge your marketing with AI-powered campaign strategy, content creation, and analytics. Get expert prompts for social media, email, SEO, ads, and audience insights.',
              image: 'https://gptprompts.ai/marketing-prompts.png',
              author: {
                '@type': 'Organization',
                name: 'GPT Prompts'
              },
              datePublished: '2026-01-15'
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a
                }
              }))
            })
          }}
        />

        {/* Related Pages */}
        <section className="border-t border-gray-800 pt-12">
          <h3 className="text-lg font-bold mb-6 text-gray-100">Related Pages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/ai-prompts-for-developers" className="text-[#EC4899] hover:text-[#F472B6] text-sm font-medium">
              Developer Prompts
            </a>
            <a href="/ai-prompts-for-data-analysts" className="text-[#EC4899] hover:text-[#F472B6] text-sm font-medium">
              Data Analyst Prompts
            </a>
            <a href="/napkin-ai-prompts" className="text-[#EC4899] hover:text-[#F472B6] text-sm font-medium">
              Napkin AI Prompts
            </a>
            <a href="/" className="text-[#EC4899] hover:text-[#F472B6] text-sm font-medium">
              All Prompts
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
