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
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-[#06B6D4] transition-colors">
      <p className="text-gray-300 text-sm mb-3">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-xs font-medium text-[#06B6D4] hover:text-[#0891B2] transition-colors"
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
              className={`text-[#06B6D4] flex-shrink-0 transition-transform ${
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

export default function AIPromptsForDataAnalysts() {
  const faqs = [
    {
      q: 'What types of data analysis can AI help with?',
      a: 'AI can assist with exploratory data analysis, statistical modeling, data visualization, trend identification, anomaly detection, forecasting, segmentation analysis, and hypothesis testing. AI excels at processing large datasets quickly and suggesting patterns humans might miss.'
    },
    {
      q: 'How can I use AI to improve data quality and cleaning?',
      a: 'AI tools can help identify and handle missing values, detect outliers, standardize data formats, remove duplicates, and suggest data transformation strategies. AI can also automate repetitive cleaning tasks and document data quality issues.'
    },
    {
      q: 'Can AI help with data visualization and storytelling?',
      a: 'Absolutely. AI can suggest appropriate visualization types for your data, help design compelling dashboards, write data-driven narratives, and generate insights that make your findings more impactful and easier to communicate to stakeholders.'
    },
    {
      q: 'How do I use AI for predictive modeling and forecasting?',
      a: 'AI can help you build predictive models by suggesting algorithms, feature engineering approaches, and validation strategies. It can also assist with time series forecasting for revenue, demand, and trends without requiring deep machine learning expertise.'
    },
    {
      q: 'What SQL and Python tasks can AI streamline?',
      a: 'AI can write complex SQL queries, help debug code, suggest efficient query optimization, generate Python data manipulation scripts, and explain complex code logic. This speeds up analysis and reduces time spent on coding syntax.'
    },
    {
      q: 'How can I leverage AI for business intelligence and reporting?',
      a: 'AI can help design data models, create interactive dashboards, automate report generation, identify key performance indicators (KPIs), and suggest drill-down analyses. It can also help you document metrics and create self-service analytics.'
    },
    {
      q: 'Can AI assist with statistical analysis and hypothesis testing?',
      a: 'Yes, AI can help design statistical tests, interpret p-values and confidence intervals, suggest appropriate statistical methods for your data, and help validate assumptions before conducting tests.'
    },
    {
      q: 'How do I use AI for market research and customer analytics?',
      a: 'AI can help analyze customer surveys, segment customer populations, identify purchasing patterns, analyze competitor data, and generate insights about market trends and customer behavior.'
    },
    {
      q: 'What tools integrate AI with Excel, Tableau, and other platforms?',
      a: 'Many BI and analytics platforms now have built-in AI features (ChatGPT plugins for Excel, AI-assisted insights in Tableau). You can also use AI to generate formulas, suggest visualizations, and explain dashboard metrics.'
    },
    {
      q: 'How can I present data insights to non-technical stakeholders?',
      a: 'AI can help translate technical findings into business language, suggest key talking points, create executive summaries, and generate recommendations that stakeholders can act on immediately.'
    },
    {
      q: 'Can AI help with data privacy and compliance in analysis?',
      a: 'AI can help identify potentially sensitive data, suggest anonymization strategies, ensure GDPR compliance, and help document data lineage and governance practices for audit purposes.'
    },
    {
      q: 'How do I validate and document my analysis with AI assistance?',
      a: 'AI can help document methodologies, suggest validation approaches, identify potential biases in analysis, peer-review findings, and create comprehensive analysis documentation for reproducibility and audit trails.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">AI Prompts for Data Analysts</h1>
          <p className="text-gray-400">
            Accelerate your data analysis with AI-assisted data exploration, visualization, and insight generation. Get prompts for SQL queries, Python analysis, dashboards, and stakeholder reporting.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* Section 1: Data Exploration & Cleaning */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#06B6D4]">Data Exploration & Cleaning</h2>
            <p className="text-gray-400">
              Prepare and understand your data with AI-assisted exploration and quality assurance.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Data Quality Assessment"
              prompt="Analyze this dataset for quality issues: identify missing values, outliers, data type inconsistencies, and duplicate records. Provide a summary of data quality issues and prioritized recommendations for cleaning. [Insert data sample or describe dataset structure]"
            />
            <CopyCard
              title="Exploratory Data Analysis (EDA)"
              prompt="Perform exploratory data analysis on this dataset. Identify key statistics, distributions, correlations between variables, and potential patterns. Suggest which variables are most important for further analysis. [Insert data or dataset description]"
            />
            <CopyCard
              title="Data Transformation Strategy"
              prompt="I have raw data that needs transformation before analysis. Help me plan the transformation steps: normalization, feature engineering, aggregation, and encoding. Explain how each transformation will improve the data for analysis."
            />
          </div>
        </section>

        {/* Section 2: SQL & Database Analysis */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#06B6D4]">SQL & Database Analysis</h2>
            <p className="text-gray-400">
              Write efficient SQL queries and optimize database performance with AI assistance.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Complex SQL Query Generation"
              prompt="Write a SQL query that: [describe your analysis requirement]. The query should handle [specify edge cases]. Include comments explaining the logic and return [specify desired output format]."
            />
            <CopyCard
              title="Query Optimization & Debugging"
              prompt="Help me optimize this SQL query for performance: [paste your query]. It currently takes [timeframe] to execute. What indexing strategies, JOIN optimizations, or query restructuring would improve speed? Provide the optimized query with explanations."
            />
            <CopyCard
              title="Database Schema Analysis"
              prompt="I need to extract insights from this database schema: [describe tables, columns, relationships]. Help me identify the best way to query this for [specify analysis goal]. Suggest joins, aggregations, and filtering strategies."
            />
          </div>
        </section>

        {/* Section 3: Python Data Analysis */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#06B6D4]">Python Data Analysis</h2>
            <p className="text-gray-400">
              Generate and optimize Python code for data manipulation, analysis, and visualization.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Pandas Data Manipulation"
              prompt="Write a Python script using pandas to: [describe your data manipulation task]. The input is [describe data format]. I need the output to be [specify desired output]. Include error handling and comments."
            />
            <CopyCard
              title="Statistical Analysis in Python"
              prompt="Help me perform [specify statistical analysis: regression, correlation, hypothesis testing, ANOVA, etc.] on my dataset. [Describe your data and variables]. Provide the Python code using scipy and statsmodels, including interpretation of results."
            />
            <CopyCard
              title="Python Code Review & Optimization"
              prompt="Review this Python data analysis code for efficiency, readability, and correctness: [paste your code]. Identify potential bugs, suggest optimizations, and recommend better approaches or libraries. Provide refactored code with explanations."
            />
          </div>
        </section>

        {/* Section 4: Visualization & Dashboarding */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#06B6D4]">Visualization & Dashboarding</h2>
            <p className="text-gray-400">
              Design effective visualizations and dashboards that communicate insights clearly.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Visualization Type Selection"
              prompt="I have [describe your data: sales by region and time, customer segments, etc.]. I need to show [describe your analytical goal]. What visualization types would be most effective? Suggest 2-3 options with pros/cons of each."
            />
            <CopyCard
              title="Dashboard Design & Layout"
              prompt="Help me design a dashboard for [describe audience and purpose: executive dashboard, operational KPIs, customer analytics, etc.]. Key metrics include [list metrics]. Suggest layout, visualization types, drill-down capabilities, and refresh frequency."
            />
            <CopyCard
              title="Data Storytelling & Narrative"
              prompt="I have these key findings from my analysis: [describe findings]. Help me craft a compelling data story with: talking points, recommended visuals, key statistics, and recommendations. Make it suitable for [describe audience: executive, team, investors]."
            />
          </div>
        </section>

        {/* Section 5: Modeling & Forecasting */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-[#06B6D4]">Modeling & Forecasting</h2>
            <p className="text-gray-400">
              Build predictive models and forecasts to drive data-driven decisions.
            </p>
          </div>
          <div className="grid gap-4">
            <CopyCard
              title="Predictive Model Development"
              prompt="Help me build a predictive model to [describe your prediction goal: forecast revenue, predict churn, identify high-value customers]. I have [describe data available]. Recommend an algorithm, suggest features, and outline model validation approach."
            />
            <CopyCard
              title="Time Series Forecasting"
              prompt="I need to forecast [describe what: monthly revenue, website traffic, demand, etc.] for the next [time period]. I have [describe historical data]. Suggest appropriate forecasting methods, explain seasonality/trends, and provide confidence intervals."
            />
            <CopyCard
              title="Feature Engineering & Selection"
              prompt="Help me engineer features for my predictive model. I have raw data including [describe available fields]. For predicting [describe target], what new features should I create? How should I handle categorical variables, missing values, and scaling?"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-[#06B6D4]">Frequently Asked Questions</h2>
          <FAQ faqs={faqs} />
        </section>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'AI Prompts for Data Analysts',
              description: 'Accelerate your data analysis with AI-assisted data exploration, visualization, and insight generation. Get prompts for SQL queries, Python analysis, dashboards, and stakeholder reporting.',
              image: 'https://gptprompts.ai/data-analyst-prompts.png',
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
            <a href="/ai-prompts-for-developers" className="text-[#06B6D4] hover:text-[#0891B2] text-sm font-medium">
              Developer Prompts
            </a>
            <a href="/ai-prompts-for-marketers" className="text-[#06B6D4] hover:text-[#0891B2] text-sm font-medium">
              Marketer Prompts
            </a>
            <a href="/napkin-ai-prompts" className="text-[#06B6D4] hover:text-[#0891B2] text-sm font-medium">
              Napkin AI Prompts
            </a>
            <a href="/" className="text-[#06B6D4] hover:text-[#0891B2] text-sm font-medium">
              All Prompts
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
