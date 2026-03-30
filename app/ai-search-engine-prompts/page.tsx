'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp, Search, Target, Zap, TrendingUp, BarChart3 } from 'lucide-react';

const AISearchEnginePromptsPage = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const handleCopyPrompt = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const CopyCard = ({ id, prompt }: { id: string; prompt: string }) => (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-rose-500/50 transition-colors">
      <p className="text-gray-200 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={() => handleCopyPrompt(id, prompt)}
        className="inline-flex items-center gap-2 px-3 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded text-sm transition-colors"
      >
        {copiedId === id ? (
          <>
            <Check size={16} />
            Copied
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy
          </>
        )}
      </button>
    </div>
  );

  const FAQItem = ({ id, question, answer }: { id: number; question: string; answer: string }) => (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpenFaqId(openFaqId === id ? null : id)}
        className="w-full px-4 py-4 flex items-center justify-between bg-[#1a1a1a] hover:bg-[#242424] transition-colors"
      >
        <h3 className="text-sm font-semibold text-gray-100">{question}</h3>
        {openFaqId === id ? (
          <ChevronUp size={18} className="text-rose-400 flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      {openFaqId === id && (
        <div className="px-4 py-4 bg-[#0a0a0a] border-t border-[#2a2a2a] text-sm text-gray-300 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );

  const sections = [
    {
      title: 'Keyword Research & Analysis',
      icon: Search,
      prompts: [
        'Analyze the search intent and keyword difficulty for a comprehensive list of long-tail keywords related to sustainable fashion and eco-friendly clothing, including monthly search volume estimates, CPC data, competitor analysis, and seasonal trend patterns to identify high-opportunity keywords for a new e-commerce brand',
        'Research and compare keyword variations for a SaaS project management tool including branded, competitor, and generic keyword clusters, assess search volume trends across geographic regions, identify emerging keywords with growing search interest, and recommend keyword prioritization strategy based on search intent and conversion potential',
        'Conduct a keyword gap analysis comparing search visibility between a fitness brand and its top five competitors, identify keywords competitors rank for that the brand does not, uncover underserved keyword opportunities in the fitness niche, and provide recommendations for content creation and optimization priorities',
        'Develop a comprehensive keyword strategy for a B2B enterprise software company including industry-specific technical terminology, problem-aware keywords prospects search for before considering solutions, comparison keywords where prospects evaluate alternatives, and buying-intent keywords indicating decision-making stage',
        'Analyze search query data to identify common questions and pain points customers have in the home improvement industry, map these queries to relevant product categories, discover gaps between what customers search for and current website content, and recommend new content topics to address unmet search demand',
        'Research and categorize thousands of potential keywords for an international e-commerce store across multiple languages and geographic markets, identify localized search variations, assess keyword volume and difficulty by market, and prioritize keywords based on market opportunity and content feasibility'
      ]
    },
    {
      title: 'SEO Strategy & Content Planning',
      icon: Target,
      prompts: [
        'Develop a comprehensive SEO strategy for a new fintech startup including competitive landscape analysis, target keyword clusters organized by search intent and customer journey stage, content pillar strategy connecting related topics, internal linking architecture plans, and quarterly execution roadmap with specific KPIs and success metrics',
        'Create a detailed content calendar for an online education platform including blog post ideas optimized for high-intent keywords, comprehensive guides addressing top customer questions, video content optimized for YouTube and featured snippets, and supporting content pieces for internal linking strategy across six months',
        'Design an SEO-first content strategy for a healthcare informational website including compliance with YMYL guidelines, authoritative content creation focused on medical accuracy and citations, fact-checking processes for health claims, featured snippet optimization strategies, and strategies for building topical authority in specific medical areas',
        'Develop a technical SEO audit framework for a large e-commerce website including site architecture assessment, crawlability analysis, indexation validation, mobile usability evaluation, Core Web Vitals optimization priorities, structured data implementation requirements, and prioritized remediation roadmap',
        'Create a link building and off-page SEO strategy for a B2B consulting firm including high-quality resource opportunities, industry directory and listing optimization, strategic partnerships and co-marketing opportunities, thought leadership content for brand building, and ethical outreach strategies for earning backlinks',
        'Plan an SEO strategy for international expansion including country-level domain structure decisions, hreflang implementation for multilingual content, language-specific keyword research and localization, geotargeting setup and regional ranking strategies, and cultural adaptation of content for different markets'
      ]
    },
    {
      title: 'Technical SEO & Performance',
      icon: Zap,
      prompts: [
        'Conduct a comprehensive technical SEO analysis including site speed optimization analysis with specific recommendations for improving Core Web Vitals (LCP, FID, CLS), mobile-first indexing compatibility assessment, XML sitemap and robots.txt audit, canonicalization strategy review, and crawl efficiency improvement recommendations',
        'Develop a structured data implementation strategy for a news publication including Article schema for news content, NewsArticle metadata optimization, Breadcrumb navigation schema, Organization schema setup, and strategies for increasing eligible snippets and rich results in search results',
        'Create a site migration strategy for moving an established website to a new domain while preserving SEO value, including 301 redirect mapping across thousands of URLs, crawl verification before and after migration, rank tracking and monitoring plans, and contingency strategies for handling any ranking fluctuations',
        'Design an AMP implementation strategy for a mobile news website including conversion considerations between AMP and non-AMP versions, canonical relationship configuration, structured data compatibility with AMP pages, performance monitoring, and strategies for maintaining SEO value across both formats',
        'Develop a site speed optimization plan addressing technical factors including server response time improvements, caching strategies for static and dynamic content, image optimization and lazy loading implementation, JavaScript and CSS optimization, and monitoring systems to track performance improvements over time',
        'Create a crawl budget optimization strategy for a massive website with millions of pages including internal link structure improvements to guide crawler crawl patterns, removal of low-value pages blocking crawl from important content, duplicate content consolidation, update frequency signals for critical pages, and monitoring of crawl patterns through Search Console data'
      ]
    },
    {
      title: 'Local & Voice Search Optimization',
      icon: TrendingUp,
      prompts: [
        'Develop a local SEO strategy for a multi-location business including Google Business Profile optimization for each location, local keyword research for each geographic area, location-specific content creation strategy, local link building and citation building across directories, and reputation management across review platforms',
        'Create a voice search optimization strategy including conversational keyword research reflecting how people speak searches, FAQ schema optimization for voice result eligibility, featured snippet targeting for voice responses, mobile optimization for voice search users, and strategies for capturing "near me" type queries',
        'Design a local content strategy for a regional service business including location landing page optimization, local keyword integration into existing content, community involvement and local event coverage, local structured data implementation, and strategies for building local authority and trust signals',
        'Develop a strategy for optimizing business listings across search engines and directories including Google Business Profile, Apple Maps, Bing Places, industry-specific directories, and local review platforms, including citation consistency, category optimization, and managing review responses',
        'Create a voice assistant optimization strategy for smart home devices and voice-activated search including Alexa, Google Assistant, and Siri integration considerations, featured snippet and position zero targeting, natural language and conversational query optimization, and measuring voice search performance',
        'Plan a local link building strategy including local business association involvement, community event sponsorship opportunities, local press coverage and media relations, partnerships with complementary local businesses, and earning location-specific backlinks from authoritative local sources'
      ]
    },
    {
      title: 'Conversion Optimization & Analytics',
      icon: BarChart3,
      prompts: [
        'Develop a comprehensive conversion rate optimization strategy for an e-commerce website including user behavior analysis through heat mapping and session recording, landing page optimization for high-value keywords, checkout flow analysis and abandonment reduction, A/B testing roadmap for key conversion points, and tracking setup for attributing revenue to specific keywords',
        'Create a metrics and analytics strategy including setup of conversion tracking for multiple goals, revenue attribution modeling across keywords and channels, customer lifetime value calculations by traffic source, cohort analysis for understanding user behavior patterns, and custom dashboards for tracking SEO-driven business impact',
        'Design a competitive intelligence program including competitor keyword ranking tracking, competitor content strategy analysis, backlink profile comparison, paid and organic traffic estimation, market share analysis, and identifying competitor weaknesses to exploit with content creation',
        'Develop a return on investment tracking framework for SEO activities including attribution modeling to connect organic traffic to business outcomes, customer journey analysis showing touchpoints before conversion, keyword-level ROI calculation, seasonal and trend analysis affecting performance, and forecasting future revenue from SEO efforts',
        'Create a brand monitoring and sentiment analysis strategy including tracking brand mentions across the web, monitoring competitor mentions and sentiment, analyzing customer feedback and reviews for insights, tracking competitor brand mentions and sentiment, and using insights to inform content and messaging strategy',
        'Design a user behavior research program including analyzing search query patterns and user intent, studying competitor content and user response, using surveys and user interviews to understand search behavior, analyzing click-through patterns to understand appeal of titles and descriptions, and using insights to optimize content strategy'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I identify high-opportunity keywords for my niche?',
      answer: 'Look for keywords with meaningful search volume and achievable competition level. Analyze search intent to ensure alignment with your business goals. Use long-tail variations with lower competition but high intent. Study competitor rankings to understand what it takes to rank. Look for question-based queries indicating informational content needs. Use keyword research tools to find related terms you might have missed. Prioritize keywords where you can provide better content than current top results.'
    },
    {
      question: 'What is the difference between search intent and keyword difficulty?',
      answer: 'Search intent refers to why someone is searching a keyword (informational, navigational, transactional, commercial). Keyword difficulty measures how hard it is to rank for a keyword based on backlink profiles and domain authority of current top results. You need both metrics. A keyword with low difficulty but misaligned intent wastes effort. A keyword with high intent but prohibitive difficulty requires unrealistic resource investment. Find keywords where intent aligns with your business AND difficulty is achievable for your domain authority.'
    },
    {
      question: 'How often should I update my keyword strategy?',
      answer: 'Review keyword performance quarterly to identify trends and adjust priorities. Update keyword research annually to capture new search patterns and opportunities. Monitor search volume trends and seasonal patterns to time content creation. Watch for new competitor activity indicating shifting search landscape. Track your own ranking changes and traffic patterns. Use emerging search queries to identify new content opportunities. Maintain strategic flexibility rather than rigid adherence to initial keyword list.'
    },
    {
      question: 'What role does Core Web Vitals play in SEO rankings?',
      answer: 'Google has indicated page experience, including Core Web Vitals (LCP, FID, CLS), as a ranking factor. Pages with poor Core Web Vitals may rank lower than otherwise identical pages with better metrics. However, Core Web Vitals is one of many ranking factors. Excellent content and backlinks can outweigh poor Core Web Vitals. Optimize Core Web Vitals to remove this as a competitive disadvantage, then focus on content quality and authority as primary ranking drivers.'
    },
    {
      question: 'How do I optimize for featured snippets and position zero?',
      answer: 'Target question-based keywords and queries. Structure content to answer questions clearly in first 50-60 words. Use lists, tables, and definitions matching common snippet formats. Create FAQ sections addressing user questions. Optimize heading tags to align with featured snippet opportunities. Monitor current featured snippet results to understand what Google shows. Include snippet-worthy content even if you already rank on page one. Featured snippets often appear above the organic listing.'
    },
    {
      question: 'What is a keyword cluster and how do I use it?',
      answer: 'A keyword cluster groups related keywords addressing the same search intent or topic. Clustering helps plan pillar content and supporting pages for topical authority. One pillar page addresses the main topic with internal links to cluster pages addressing subtopics. This structure helps search engines understand your topical expertise. Cluster pages internally link back to the pillar page. Clustering improves crawl efficiency and user experience by organizing content logically. Use clusters to guide content creation roadmap.'
    },
    {
      question: 'How do I handle keyword cannibalization?',
      answer: 'Keyword cannibalization occurs when multiple pages target the same keyword, splitting ranking potential. Consolidate similar content into one authoritative page. Redirect duplicate or near-duplicate pages to the primary version. Update internal links to point to the primary page. Adjust secondary pages to target different keywords. Use canonical tags if consolidation is impossible. Monitor Search Console to identify keywords where you have multiple indexed pages. Prevent cannibalization during content planning by mapping keywords to specific pages.'
    },
    {
      question: 'What is the connection between topical authority and rankings?',
      answer: 'Topical authority refers to demonstrating deep expertise on a specific subject. Google gives higher ranking preference to pages from sites with topical authority. Create comprehensive content clusters covering all angles of your topic. Build substantial backling profiles within your niche. Use consistent terminology and related keywords naturally throughout content. Link extensively between related content on your site. Establish thought leadership through original research and unique insights. Topical authority builds gradually with consistent, high-quality content production.'
    },
    {
      question: 'How do I measure SEO success beyond rankings and traffic?',
      answer: 'Track revenue and conversions driven by organic traffic as the ultimate success metric. Monitor cost per acquisition comparing organic to paid channels. Measure customer lifetime value for organic users. Track engagement metrics including time on site, pages per session, and return visit rate. Monitor brand search volume and branded traffic growth. Analyze inquiry and lead quality from organic channels. Track qualified traffic by audience segment. These business metrics show true ROI beyond vanity metrics like rankings.'
    },
    {
      question: 'How do I adapt my SEO strategy for different business models?',
      answer: 'E-commerce sites prioritize transactional keywords and product optimization. B2B companies focus on educational content and problem-aware keywords. SaaS companies need content addressing pain points and comparison queries. Local businesses optimize for geographic keywords and Google Business Profiles. Publishers prioritize topical authority and freshness signals. Nonprofits focus on informational queries and resource value. Adapt keyword research, content strategy, and technical implementation to your specific business goals and audience behavior. One-size-fits-all SEO strategies rarely work effectively.'
    }
  ];

    const relatedPages = [
    { title: 'AI Research Assistant Prompts', href: '/ai-research-assistant-prompts' },
    { title: 'AI Chatbot Prompts', href: '/ai-chatbot-prompts' },
    { title: 'AI Question Answering Prompts', href: '/ai-question-answering-prompts' },
    { title: 'AI Summarizer Prompts', href: '/ai-summarizer-prompts' },
    { title: 'AI Text Generator Prompts', href: '/ai-text-generator-prompts' },
    { title: 'Generative AI Prompts', href: '/generative-ai-prompts' },
    { title: 'AI Personal Assistant Prompts', href: '/ai-personal-assistant-prompts' },
    { title: 'ChatGPT Prompts', href: '/chatgpt-prompts' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Search Engine Prompts',
            description: 'A comprehensive collection of detailed AI prompts designed to help with SEO strategy, keyword research, technical optimization, and search engine marketing for improved online visibility.',
            datePublished: '2026-03-29',
            dateModified: '2026-03-29'
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

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Search size={32} className="text-rose-400" />
            <h1 className="text-4xl font-bold text-gray-100">AI Search Engine Prompts</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Unlock your search engine optimization potential with our carefully crafted prompts. From comprehensive keyword research and technical SEO to conversion optimization and local search strategy, these detailed prompts help you develop winning SEO strategies that drive organic visibility and measurable business results.
          </p>
        </div>

        {sections.map((section, sectionIdx) => {
          const Icon = section.icon;
          return (
            <div key={sectionIdx} className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Icon size={24} className="text-rose-400" />
                <h2 className="text-2xl font-semibold text-gray-100">{section.title}</h2>
              </div>
              <div className="grid gap-4">
                {section.prompts.map((prompt, promptIdx) => (
                  <CopyCard
                    key={`${sectionIdx}-${promptIdx}`}
                    id={`prompt-${sectionIdx}-${promptIdx}`}
                    prompt={prompt}
                  />
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} id={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-100 mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {relatedPages.map((page, idx) => (
              <Link
                key={idx}
                href={page.href}
                className="block px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-rose-500/50 hover:bg-[#1a1a1a] transition-colors text-rose-400"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISearchEnginePromptsPage;
