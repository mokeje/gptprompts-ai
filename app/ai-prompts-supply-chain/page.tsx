'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Link from 'next/link';

export default function SupplyChainPromptsPage() {
  const CopyCard = ({ prompt }: { prompt: string }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4">
        <p className="text-gray-200 text-sm mb-3 leading-relaxed">{prompt}</p>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors text-sm"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    );
  };

  const FAQAccordion = ({ items }: { items: Array<{ q: string; a: string }> }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-4 py-3 bg-gray-900 text-left text-gray-100 font-medium flex justify-between items-center hover:bg-gray-800 transition-colors"
            >
              <span>{item.q}</span>
              <span className="text-cyan-500">{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className="px-4 py-3 bg-gray-950 text-gray-300 text-sm border-t border-gray-700">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const demandForecasting = [
    "Analyze this historical demand data for our top 5 SKUs: [paste data]. Create a demand forecast for the next 12 months accounting for seasonality, trends, and anomalies. What factors are most influential?",
    "We're experiencing volatile demand for [product category]. What machine learning techniques would you recommend for demand sensing in real-time? How can we reduce forecast error?",
    "Given our safety stock levels are currently [X units], analyze if we're overstock or understock. Calculate optimal safety stock using service level targets of [Y%].",
    "Create a demand planning framework for a multi-channel retailer selling through retail, e-commerce, and B2B. How should we allocate inventory across channels?",
    "Our promotional calendar drives [X%] of annual demand. Build a process to incorporate promotional uplift factors into baseline demand forecasts.",
    "What's the impact of including external variables like weather, competitor pricing, and economic indicators in our demand models? How do we source this data?"
  ];

  const inventoryOptimization = [
    "Calculate optimal reorder points and economic order quantities (EOQ) for our inventory. We have [N] SKUs with carrying costs of [X%] and ordering costs of [Y]. How do we prioritize?",
    "Design an ABC inventory classification system for our [N] SKUs based on annual value. What management strategies should we apply to each category?",
    "We have [X days] of safety stock and [Y%] of products are slow-moving. What's an optimal strategy to reduce obsolescence while maintaining service levels?",
    "Build a just-in-time (JIT) inventory model for our operations given supplier lead times of [X days] and demand variability of [Y%]. What are the risks and mitigations?",
    "Analyze our inventory turns by category: [paste data]. Which categories are underperforming and what inventory optimization initiatives would help?",
    "What's the trade-off between inventory carrying costs and stockout risk? How do we balance these for different product categories and customer segments?"
  ];

  const logisticsOptimization = [
    "Optimize delivery routes for our fleet given [N] delivery stops, [M] vehicles, and constraints: [specify constraints]. What routing algorithm should we use and what's the cost savings potential?",
    "We're currently spending [X%] of revenue on logistics. Break down our costs and identify the top 3 areas for optimization. What should our target be?",
    "Design a last-mile delivery strategy for urban vs. rural markets. What are the cost structures, carrier options, and technology enablers for each?",
    "Analyze our warehouse network: [specify number of warehouses, locations, throughput]. Should we consolidate, expand, or optimize current footprint? What's the ROI?",
    "Build a cross-docking strategy for our [product category] to reduce inventory holding and expedite delivery. What infrastructure and processes are needed?",
    "Our transportation costs vary significantly by lane. Create a lane analysis framework and recommend where to optimize carriers, consolidate shipments, or renegotiate contracts."
  ];

  const supplierManagement = [
    "We have [N] suppliers for critical components. Assess our supplier concentration risk and create a diversification strategy. What's our ideal supplier base size?",
    "Build a supplier scorecard with weighted metrics for quality, delivery, cost, and innovation. How do we use this to drive continuous improvement?",
    "Our supplier lead times are [X days]. How do we manage supply disruptions? What's a robust contingency planning process?",
    "Evaluate our current procurement strategy: [describe]. Should we shift toward single sourcing, multiple sourcing, or strategic partnerships? What are the trade-offs?",
    "Design a supplier development program for our top 20 suppliers. What initiatives drive quality improvements and cost reductions?",
    "Create a category strategy for [product category] including make vs. buy analysis, supplier selection criteria, and contract negotiation priorities."
  ];

  const supplyChainResilience = [
    "Map our end-to-end supply chain for our top 10 SKUs. Identify single points of failure and design mitigation strategies for each.",
    "Build a supply chain risk assessment framework considering geopolitical, natural, operational, and demand risks. How do we prioritize and monitor these?",
    "Create a scenario planning model for our supply chain: What if [supplier goes down / natural disaster / demand spike / trade disruption]? What's our playbook?",
    "Design a supply chain visibility system to track shipments in real-time. What technology stack and data integrations do we need?",
    "Our supply chain sustainability goals are [X]. How do we balance sustainability with cost and resilience? What circular economy principles apply?",
    "Build a supply chain recovery strategy after disruption. How quickly can we return to [X%] capacity? What early warning signals should we monitor?"
  ];

  const faqItems = [
    {
      q: "How can AI improve demand forecasting accuracy?",
      a: "AI enhances demand forecasting through machine learning models that identify patterns in historical data, account for seasonality and trends, and incorporate external variables like weather or competitor actions. Techniques like neural networks and ensemble methods typically improve forecast accuracy by 15-30% compared to traditional methods."
    },
    {
      q: "What's the difference between safety stock and buffer inventory?",
      a: "Safety stock is inventory held to protect against demand variability or supply delays, calculated based on service level targets. Buffer inventory is a broader concept that includes safety stock plus any additional inventory held for operational reasons like batch sizes or minimum order quantities."
    },
    {
      q: "How do we balance inventory costs with service level requirements?",
      a: "Use service level targets (typically 95-99%) to determine required safety stock, then optimize reorder quantities to minimize total costs (carrying + ordering). Higher service levels require more inventory; the key is aligning targets with customer expectations and profitability by segment."
    },
    {
      q: "What's the ROI of supply chain visibility technology?",
      a: "Supply chain visibility typically delivers 10-20% reduction in excess inventory, 5-15% improvement in on-time delivery, and 8-12% cost savings through better planning. Implementation costs range from $100K-$5M depending on complexity; payback is typically 18-36 months."
    },
    {
      q: "How do we identify and mitigate supplier risk?",
      a: "Conduct supplier audits covering financial health, quality systems, and operational capacity. Diversify critical suppliers, establish supplier scorecards, maintain backup suppliers, and build collaborative relationships for early warning signals of potential disruptions."
    },
    {
      q: "What's the optimal inventory turn rate for our business?",
      a: "Optimal inventory turns vary by industry: retail (5-8x), manufacturing (4-6x), fast-moving goods (8-12x). Calculate by dividing COGS by average inventory. Higher turns reduce carrying costs but increase stockout risk; benchmark against competitors and adjust based on service level requirements."
    },
    {
      q: "How do we implement vendor-managed inventory (VMI) successfully?",
      a: "VMI shifts inventory responsibility to suppliers. Success requires: clear consumption data sharing, agreed-upon stock levels and replenishment triggers, aligned incentives, regular performance reviews, and technology systems for real-time visibility and automated ordering."
    },
    {
      q: "What's the impact of supply chain consolidation on costs and resilience?",
      a: "Consolidation reduces administrative costs and improves scale leverage, but increases concentration risk. Best practice is selective consolidation: standardize with fewer suppliers for commodity items, but maintain multiple sources for critical or high-value categories."
    },
    {
      q: "How do we measure and improve supply chain efficiency?",
      a: "Key metrics include: days sales of inventory (DSI), inventory turnover, cash-to-cash cycle time, transportation cost per unit, order accuracy, and on-time delivery rate. Benchmark against industry standards and competitors; set targets and track monthly."
    },
    {
      q: "What role does AI play in supply chain optimization?",
      a: "AI enables demand forecasting, route optimization, inventory allocation, predictive maintenance, quality control via computer vision, and real-time risk monitoring. These applications typically improve efficiency by 10-20% and costs by 8-15%."
    }
  ];

  const relatedPages = [
    { title: "ChatGPT Prompts for Coding Interviews", path: "/chatgpt-prompts-coding-interviews" },
    { title: "AI Prompts for Marketing Strategy", path: "/ai-prompts-marketing-strategy" },
    { title: "AI Prompts for Data Analysis", path: "/ai-prompts-data-analysis" },
    { title: "ChatGPT Prompts for PowerPoint", path: "/chatgpt-prompts-powerpoint" },
    { title: "AI Prompts for Notion Workspace", path: "/ai-prompts-notion" },
    { title: "Manus AI Prompts", path: "/manus-ai-prompts" },
    { title: "AI Prompts for Business Planning", path: "/ai-prompts-business-planning" },
    { title: "ChatGPT Prompts for Content Writing", path: "/chatgpt-prompts-content-writing" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI Prompts for Supply Chain & Logistics Optimization",
    "description": "Comprehensive collection of AI prompts for demand forecasting, inventory optimization, logistics planning, supplier management, and supply chain resilience.",
    "image": "https://gptprompts.ai/og-supply-chain.jpg",
    "author": {
      "@type": "Organization",
      "name": "GPT Prompts"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GPT Prompts",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gptprompts.ai/logo.png"
      }
    },
    "datePublished": "2024-01-15"
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">AI Prompts for Supply Chain & Logistics Optimization</h1>
          <p className="text-gray-400 text-lg">
            Master demand forecasting, inventory optimization, logistics planning, and supply chain resilience with targeted AI prompts.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              Demand Forecasting & Planning
            </h2>
            <div className="space-y-4">
              {demandForecasting.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              Inventory Optimization & Management
            </h2>
            <div className="space-y-4">
              {inventoryOptimization.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              Logistics Optimization & Route Planning
            </h2>
            <div className="space-y-4">
              {logisticsOptimization.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              Supplier Management & Procurement
            </h2>
            <div className="space-y-4">
              {supplierManagement.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              Supply Chain Resilience & Risk Management
            </h2>
            <div className="space-y-4">
              {supplyChainResilience.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedPages.map((page, idx) => (
                <Link
                  key={idx}
                  href={page.path}
                  className="block bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-cyan-500 hover:bg-gray-800 transition-colors"
                >
                  <span className="text-cyan-500 font-medium">{page.title}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
