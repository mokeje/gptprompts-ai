import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Prompt Engineering for Data Analysis: SQL, Python & Analytics | GPTPrompts.AI",
  description:
    "Master AI-powered data analysis with production-ready prompts for SQL queries, Python code generation, pandas, NumPy, visualization, EDA, and stakeholder reporting. Copy-paste templates for data professionals.",
  keywords:
    "prompt engineering data analysis, SQL prompts, Python data analysis prompts, pandas prompts, data visualization AI, EDA prompts, ChatGPT data analysis, AI analytics",
  openGraph: {
    title: "Prompt Engineering for Data Analysis: SQL, Python & Analytics",
    description:
      "Master AI-powered data analysis with production-ready prompts for SQL, Python, pandas, visualization, and reporting.",
    type: "article",
  },
}

export default function PromptEngineeringDataAnalysisPage() {
  const sections = [
    { id: "why-prompt-engineering", title: "Why Prompt Engineering Matters" },
    { id: "core-principles", title: "Core Principles" },
    { id: "sql-prompts", title: "SQL Prompts" },
    { id: "python-prompts", title: "Python & Pandas Prompts" },
    { id: "analytics-prompts", title: "Analytics & Reporting" },
    { id: "advanced-techniques", title: "Advanced Techniques" },
    { id: "templates", title: "Ready-to-Use Templates" },
    { id: "faq", title: "FAQ" },
  ]

  const faqItems = [
    {
      question: "What makes a good data analysis prompt?",
      answer:
        "A good data analysis prompt includes dataset structure (columns, types, size), business goal, specific questions to answer, desired output format, and any constraints (database type, libraries, compliance rules).",
    },
    {
      question: "How do I prompt AI to write optimized SQL queries?",
      answer:
        "Specify the database type (PostgreSQL, Snowflake, etc.), table structures, relationships, expected data volume, and performance requirements. Ask for explanations of design decisions and optimization strategies.",
    },
    {
      question: "Can AI generate production-ready Python data analysis code?",
      answer:
        "Yes, but always validate the output. Provide clear context about libraries (pandas, numpy, seaborn), data types, edge cases (nulls, duplicates), and coding standards. Request comments explaining each step.",
    },
    {
      question: "How do I get AI to explain statistical results for non-technical stakeholders?",
      answer:
        "Use role-based prompting: 'Act as a data analyst explaining results to executives with no technical background.' Ask for plain language summaries, business implications, and actionable recommendations.",
    },
    {
      question: "What's the best way to prompt for EDA (Exploratory Data Analysis)?",
      answer:
        "Provide dataset description, key variables, and business questions. Ask for specific analytical approaches, appropriate visualizations, relevant summary statistics, and potential pitfalls to watch for.",
    },
    {
      question: "How do I avoid AI hallucinating incorrect SQL or Python code?",
      answer:
        "Be specific about table schemas, column names, and data types. Use backticks for code elements. Ask the AI to explain its reasoning and flag any assumptions it's making.",
    },
    {
      question: "Can AI help with A/B test design and analysis?",
      answer:
        "Yes. Provide test parameters (groups, duration, metrics), ask for statistical power calculations, bias identification, and suggest improvements. Request interpretation of results with confidence intervals.",
    },
    {
      question: "What's prompt chaining for data workflows?",
      answer:
        "Break complex analysis into sequential prompts: (1) data cleaning, (2) feature engineering, (3) analysis, (4) visualization, (5) reporting. Each prompt builds on the previous output.",
    },
    {
      question: "How do I prompt for data visualization code?",
      answer:
        "Specify library (matplotlib, seaborn, plotly), chart type, data structure, color palette, figure size, labels, and any interactivity requirements. Include accessibility considerations.",
    },
    {
      question: "Can AI help create data dictionaries and documentation?",
      answer:
        "Yes. Provide variable names, types, and sample values. Ask for business definitions, valid ranges, calculation methods, and usage notes in a structured format.",
    },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-white">
        <div className="bg-gradient-to-b from-cyan-50 to-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
            <div className="flex items-center gap-2 text-cyan-600 mb-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <Link href="/website-links" className="hover:underline">
                Prompts Library
              </Link>
              <span>/</span>
              <span>Data Analysis</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Prompt Engineering for Data Analysis: SQL, Python & Analytics
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Master AI-powered data analysis with production-ready prompts for SQL queries, Python code generation,
              pandas, NumPy, visualization, EDA, and stakeholder reporting.
            </p>
          </div>
        </div>

        {/* Content with sidebar */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">On This Page</h3>
                <nav className="space-y-2">
                  {sections.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-cyan-600 transition-colors"
                    >
                      <span className="w-5 h-5 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center text-xs font-medium">
                        {index + 1}
                      </span>
                      {section.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    href="/website-links"
                    className="flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700 font-medium"
                  >
                    <span>Browse All Prompts</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 prose prose-lg max-w-none">
              {/* Hero Section */}
              <header className="space-y-4">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Data & Analytics
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Prompt Engineering for Data Analysis: SQL, Python & Analytics
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  AI is now a full-fledged data partner that can write SQL, generate Python analytics code, and explain
                  complex insights in plain language. Master prompt engineering to get reliable, production-ready
                  results.
                </p>
              </header>

              {/* Section 1: Why Prompt Engineering Matters */}
              <section id="why-prompt-engineering" className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-600">1. Why Prompt Engineering Matters for Data Work</h2>
                <p className="text-lg leading-relaxed">
                  As a data professional, you already know how to write SQL and Python. But AI can generate boilerplate
                  code in seconds, suggest better query structures, help you explore data faster with EDA prompts, and
                  turn complex analysis into stakeholder-friendly summaries.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-red-800 mb-2">The Catch: Vague Prompts Fail</h3>
                  <p className="text-red-700">If your prompts are too vague, you'll get:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-red-700">
                    <li>Generic, non-actionable advice</li>
                    <li>Incorrect or unsafe SQL/Python code</li>
                    <li>Misleading statistical interpretations</li>
                    <li>Outputs that don't match your format or brand</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Prompt Engineering Fixes This</h3>
                  <p className="text-green-700">Give the AI:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-green-700">
                    <li>
                      <strong>Clear context:</strong> dataset, columns, business goal
                    </li>
                    <li>
                      <strong>Specific instructions:</strong> what to do, how to do it
                    </li>
                    <li>
                      <strong>Constraints:</strong> tools, format, tone, safety rules
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 2: Core Principles */}
              <section id="core-principles" className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-600">2. Core Principles of Data Analysis Prompting</h2>

                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Principle 1: Be Specific, Not Vague</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-red-800 mb-2">❌ Weak Prompt</p>
                        <p className="text-sm italic text-red-700">
                          "Analyze this dataset and tell me what's interesting."
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-green-800 mb-2">✅ Strong Prompt</p>
                        <p className="text-sm text-green-700">
                          "I have a sales dataset with columns: order_id, customer_id, order_date, product_category,
                          quantity, revenue. Identify: Top 5 product categories by revenue, Monthly revenue trends over
                          the last 12 months, Customer segments with the highest average order value. Present insights
                          in a structured format with numbers."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Principle 2: Provide Context and Goals</h3>
                    <p className="mb-4">Always include:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Dataset description:</strong> size, columns, time range
                      </li>
                      <li>
                        <strong>Business goal:</strong> predict sales, explain churn, optimize marketing
                      </li>
                      <li>
                        <strong>Constraints:</strong> class imbalance, missing values, compute limits, compliance rules
                      </li>
                    </ul>
                    <div className="mt-4 bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Example:</p>
                      <p className="text-sm italic">
                        "I'm analyzing a housing price dataset with 50,000 records (2015–2024). Columns: price,
                        square_footage, num_bedrooms, num_bathrooms, year_built, neighborhood, property_type. Goal:
                        Build a predictive model for property values to help real estate investors identify undervalued
                        properties. The model must be interpretable for non-technical stakeholders."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Principle 3: Use Special Characters for Clarity</h3>
                    <ul className="space-y-3">
                      <li>
                        <strong>Double quotes " "</strong> for exact phrasing: "Explain why this SQL query causes the
                        error 'column reference is ambiguous.'"
                      </li>
                      <li>
                        <strong>Backticks `</strong> for code elements: "Create a function calculating correlation
                        between `price` and `square_footage` columns."
                      </li>
                      <li>
                        <strong>Triple backticks \`\`\`</strong> for code blocks
                      </li>
                      <li>
                        <strong>Triple quotes """</strong> for multi-line text (error messages, feedback)
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3: SQL Prompts */}
              <section id="sql-prompts" className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-600">
                  3. Prompting for SQL: Queries, Joins & Optimization
                </h2>
                <p className="text-lg">
                  SQL is one of the most powerful use cases for AI in data work. See our{" "}
                  <Link href="/sql-prompts" className="text-primary hover:underline">
                    complete SQL prompts guide
                  </Link>{" "}
                  for more templates.
                </p>

                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">3.1 Basic Data Retrieval</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "Write an SQL query to retrieve the names and email addresses of all customers who made a
                        purchase in the last month. Tables: customers (customer_id, name, email) and orders (order_id,
                        customer_id, order_date, amount)."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">3.2 Joins and Aggregations</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "I need to join three tables: customers, orders, and products. Customers have multiple orders.
                        Orders contain multiple products. I must calculate average spend per customer per product
                        category. Help me write optimized SQL that avoids duplicate counting and handles NULL values
                        correctly. Explain your reasoning for each design decision."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">3.3 Query Optimization</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "Optimize this Snowflake query for a fact table with 100M+ rows. Table is clustered by date and
                        region. Query filters by date range and aggregates by product_id. Use QUALIFY clauses and
                        result-set caching where appropriate. Rewrite the query to minimize compute cost and
                        micro-partition scans."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">3.4 Handling Edge Cases</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "My SQL query is returning duplicate rows when joining orders and order_items. Each order can
                        have multiple items. I only want one row per order with total quantity and total amount. How
                        should I structure the query to avoid duplicates? Show the corrected SQL and explain why the
                        original was duplicating."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Python Prompts */}
              <section id="python-prompts" className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-600">
                  4. Prompting for Python: Pandas, NumPy & Visualization
                </h2>
                <p className="text-lg">
                  Python is where AI generates the most value for data cleaning, analysis, and visualization. Learn more
                  in our{" "}
                  <Link href="/chatgpt-code-generation" className="text-primary hover:underline">
                    code generation guide
                  </Link>
                  .
                </p>

                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">4.1 Data Cleaning and Preprocessing</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "I have a customer DataFrame with these issues: Missing values in income and age columns (15%
                        and 8% respectively), Duplicate customer records based on email, Inconsistent formatting in city
                        names (mixed case, abbreviations), Outlier ages above 120 that are data entry errors. Generate
                        pandas code to: Remove duplicate records keeping the most recent entry, Impute missing age with
                        median and missing income with mean by customer_segment, Standardize city names to title case
                        and expand common abbreviations, Cap age outliers at 100, Create a data quality report showing
                        before/after statistics. Include explanatory comments for each step."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">4.2 Exploratory Data Analysis (EDA)</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "I have an e-commerce dataset with columns: customer_id, order_date, product_category,
                        order_value, payment_method, shipping_region. I want to investigate: Seasonal purchasing
                        patterns across product categories, Products frequently purchased together, Customer segments
                        based on purchasing behavior and value, Regional differences in product preferences. For each
                        investigation: Suggest specific analytical approaches, Recommend appropriate visualizations,
                        Identify relevant summary statistics, Highlight potential pitfalls or considerations. Prioritize
                        insights with clear business implications."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">4.3 Feature Engineering</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "Given a customer dataset with columns: age, signup_date, last_purchase_date, region,
                        total_spent, order_count, average_order_value, suggest 5 new features that could improve
                        purchase prediction accuracy. For each feature: Provide the feature name and description,
                        Explain the intuition for why it helps prediction, Write pandas code to create it, Note any
                        assumptions or limitations."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">4.4 Data Visualization</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "Create a bar chart for monthly sales data with: Month on the x-axis, revenue on the y-axis,
                        Different colors for each product category, A secondary axis showing order count as a line, A
                        title and clear legend. Output the code in a clean, well-commented format using seaborn or
                        matplotlib."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Analytics Prompts */}
              <section id="analytics-prompts" className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-600">
                  5. Analytics: Insights, Reports & Stakeholder Communication
                </h2>

                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">5.1 Executive Summaries</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "Summarize these model results for executives with no technical background: Model: Random Forest
                        for customer churn prediction, Accuracy: 84%, Most important features: (1)
                        days_since_last_order, (2) customer_tenure, (3) support_tickets_count, Business impact:
                        Identifying high-risk customers 2 weeks earlier enables targeted retention campaigns. Create a
                        3–4 sentence summary highlighting business value and key findings. Avoid statistical jargon."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">5.2 Documentation and Data Dictionaries</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "Generate clear descriptions for these variables in a data dictionary: cust_ltv (numeric, range
                        0–50,000), churn_risk_score (numeric, range 0–1), engagement_level (categorical: low, medium,
                        high), pref_channel (categorical: email, phone, chat, none). Follow this format: Variable name
                        and type, Business definition in plain language, Valid values or range, Calculation method or
                        source, Usage notes or caveats."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">5.3 A/B Test and Experiment Design</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "I'm designing an A/B test for a SaaS product where we're testing a new checkout flow. Control
                        group: 5,000 users, current checkout flow. Treatment group: 5,000 users, new checkout flow.
                        Duration: 2 weeks. Primary metric: Conversion rate. Secondary metrics: Average order value, time
                        to purchase. Review this experimental design and identify potential issues (e.g., statistical
                        power, bias sources, business context). Suggest improvements to the design."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Advanced Techniques */}
              <section id="advanced-techniques" className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-600">6. Advanced Prompting Techniques for Data Work</h2>

                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">6.1 Chain of Thought for Complex Analysis</h3>
                    <p className="mb-4">Break complex tasks into logical steps:</p>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "I need to analyze customer churn patterns in subscription data. Before providing
                        recommendations: First, clarify what key metrics and variables would be most relevant for churn
                        analysis. Then, confirm which analytical approaches would be appropriate given these variables.
                        Finally, provide a structured analysis plan including data preparation, modeling approach, and
                        evaluation criteria. Walk through your reasoning at each step."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">6.2 Clarify → Confirm → Complete</h3>
                    <p className="mb-4">
                      Align the AI's understanding before executing. Learn more in our{" "}
                      <Link href="/few-shot-prompting" className="text-primary hover:underline">
                        few-shot prompting guide
                      </Link>
                      .
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "I want to build a function detecting outliers in financial transaction data. Before writing
                        code: Clarify what outlier detection methods suit financial data. Confirm the advantages and
                        disadvantages of each approach and recommend one. Complete by writing a Python function
                        implementing the recommended method. Address each step before moving to the next."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">6.3 Prompt Chaining for Multi-Step Workflows</h3>
                    <p className="mb-4">Treat your analysis as a pipeline:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong>Data cleaning:</strong> "Clean this raw sales data by handling missing values, removing
                        duplicates, and standardizing formats. Return the cleaned dataset."
                      </li>
                      <li>
                        <strong>Feature creation:</strong> "Using the cleaned sales data, create these features:
                        monthly_trend, customer_segment, product_affinity_score. Show the enhanced dataset."
                      </li>
                      <li>
                        <strong>Analysis:</strong> "With the feature-enhanced dataset, identify the top 3 factors
                        driving sales differences across customer segments. Provide statistical support for each
                        finding."
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Section 7: Templates */}
              <section id="templates" className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-600">7. Ready-to-Use Prompt Templates</h2>

                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">SQL Query Template</h3>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm whitespace-pre-wrap">{`<Role>
You are a senior data analyst specializing in SQL.
</Role>

<Action>
Write an SQL query to [specific task, e.g., "retrieve customers who made a purchase in the last month"].
</Action>

<Context>
- Tables: [table names and key columns]  
- Business goal: [e.g., "identify high-value customers for a retention campaign"]  
- Constraints: [e.g., "avoid duplicate counting, handle NULLs correctly"]  
</Context>

<Expectations>
- Use [database type, e.g., PostgreSQL, Snowflake] syntax  
- Include comments explaining key parts of the query  
- Avoid overly complex subqueries unless necessary  
</Expectations>`}</pre>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Python Data Analysis Template</h3>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm whitespace-pre-wrap">{`<Role>
You are a data scientist with expertise in pandas and visualization.
</Role>

<Action>
Generate Python code to [specific task, e.g., "clean a sales dataset and create a monthly revenue trend chart"].
</Action>

<Context>
- Dataset: [description, columns, size, time range]  
- Goal: [e.g., "identify seasonal patterns and top-performing products"]  
- Tools: [e.g., pandas, seaborn, matplotlib]  
</Context>

<Expectations>
- Use clear, well-commented code  
- Handle missing values, duplicates, and outliers appropriately  
- Create a visualization with appropriate labels and styling  
- Output only the code, no explanations  
</Expectations>`}</pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: FAQ */}
              <section id="faq" className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-600">8. Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="bg-card border rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Resources */}
              <section className="bg-muted/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    href="/chatgpt-data-analysis"
                    className="block p-4 bg-card rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-primary">ChatGPT for Data Analysis</h3>
                    <p className="text-sm text-muted-foreground">Complete guide to using ChatGPT for data work</p>
                  </Link>
                  <Link href="/sql-prompts" className="block p-4 bg-card rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-primary">SQL Prompts Guide</h3>
                    <p className="text-sm text-muted-foreground">Production-ready SQL prompt templates</p>
                  </Link>
                  <Link
                    href="/chatgpt-code-generation"
                    className="block p-4 bg-card rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-primary">Code Generation Prompts</h3>
                    <p className="text-sm text-muted-foreground">AI prompts for developers</p>
                  </Link>
                  <Link
                    href="/prompt-engineering-business-roi"
                    className="block p-4 bg-card rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-primary">Business ROI Strategies</h3>
                    <p className="text-sm text-muted-foreground">Quantified prompt engineering for business</p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Data & Analytics</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/sql-prompts" className="hover:text-primary">
                    SQL Prompts
                  </Link>
                </li>
                <li>
                  <Link href="/chatgpt-data-analysis" className="hover:text-primary">
                    ChatGPT Data Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/chatgpt-code-generation" className="hover:text-primary">
                    Code Generation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">AI Models</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/chatgpt-prompts" className="hover:text-primary">
                    ChatGPT Prompts
                  </Link>
                </li>
                <li>
                  <Link href="/claude-prompts" className="hover:text-primary">
                    Claude Prompts
                  </Link>
                </li>
                <li>
                  <Link href="/gemini-prompts" className="hover:text-primary">
                    Gemini Prompts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Techniques</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/few-shot-prompting" className="hover:text-primary">
                    Few-Shot Prompting
                  </Link>
                </li>
                <li>
                  <Link href="/chatgpt-role-based-prompting" className="hover:text-primary">
                    Role-Based Prompting
                  </Link>
                </li>
                <li>
                  <Link href="/avoiding-hallucinations" className="hover:text-primary">
                    Avoiding Hallucinations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/website-links" className="hover:text-primary">
                    Prompts Library
                  </Link>
                </li>
                <li>
                  <Link href="/how-to-write-effective-ai-prompts" className="hover:text-primary">
                    Effective AI Prompts
                  </Link>
                </li>
                <li>
                  <Link href="/common-ai-prompt-mistakes" className="hover:text-primary">
                    Common Mistakes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} GPTPrompts.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
