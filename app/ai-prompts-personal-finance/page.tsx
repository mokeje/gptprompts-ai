'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PiggyBank, TrendingUp, CreditCard, Target, Wallet, ChevronDown, ChevronUp } from 'lucide-react';

interface CopyCardProps {
  icon: React.ReactNode;
  title: string;
  prompt: string;
  tags: string[];
}

function CopyCard({ icon, title, prompt, tags }: CopyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#059669] transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-[#059669]">{icon}</div>
          <h3 className="font-semibold text-white">{title}</h3>
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{prompt}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-[#059669]/10 text-[#059669] text-xs px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <button
        onClick={handleCopy}
        className="w-full bg-[#059669] hover:bg-[#047857] text-white py-2 rounded text-sm font-medium transition-colors"
      >
        {copied ? '✓ Copied!' : 'Copy Prompt'}
      </button>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#1a1a1a] p-4 flex items-center justify-between hover:bg-[#252525] transition-colors"
      >
        <h3 className="font-semibold text-white text-left">{question}</h3>
        {isOpen ? (
          <ChevronUp className="text-[#059669] flex-shrink-0" />
        ) : (
          <ChevronDown className="text-[#059669] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="bg-[#0a0a0a] p-4 border-t border-[#2a2a2a]">
          <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function PersonalFinancePromptsPage() {
  const faqs = [
    {
      question: 'Can AI really help with personal finance decisions?',
      answer: 'AI excels at analyzing financial data, identifying patterns, and providing unbiased suggestions based on your goals. However, AI should complement, not replace, professional financial advice for major decisions. Use AI prompts to organize your finances, explore scenarios, and ask better questions of your advisor.',
    },
    {
      question: 'How do I know which budgeting approach is right for me?',
      answer: 'Different approaches work for different people. Use AI prompts to explore 50/30/20, zero-based budgeting, envelope method, and value-based budgeting. Then test each approach for a month and see which one feels sustainable and natural for your lifestyle.',
    },
    {
      question: 'Should I be using AI for investment decisions?',
      answer: 'AI is excellent for research, analyzing historical data, stress-testing portfolios, and understanding risk. It\'s less suitable for market timing or predicting short-term movements. Use AI to understand your options, not to replace your investment strategy or advisor.',
    },
    {
      question: 'How can AI help me reduce debt faster?',
      answer: 'AI can analyze your debt structure, calculate payoff timelines for different strategies (avalanche vs. snowball), identify refinancing opportunities, and help you create accountability plans. Use these prompts to model scenarios and stay motivated on your payoff journey.',
    },
    {
      question: 'What if my financial situation changes monthly?',
      answer: 'Use the financial review and scenario planning prompts monthly. AI can quickly adjust your plans based on new income, expenses, or goals. The key is consistency—set a monthly check-in date and adapt your strategies as needed.',
    },
    {
      question: 'Can I use these prompts for business finances?',
      answer: 'Many of these prompts work for small business accounting and planning. However, business finances often require specialized tools and professional guidance (accountants, bookkeepers). Use these as a starting point, then layer in proper business accounting practices.',
    },
    {
      question: 'How do I set realistic financial goals?',
      answer: 'Use the goal-setting prompts to define SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound). The key is balancing ambition with realism. Start with 1-2 goals you\'re excited about, then add others as you build momentum.',
    },
    {
      question: 'Should I share my financial data with AI?',
      answer: 'Be cautious about sharing sensitive data in public AI tools. Instead, describe your situation in general terms and let AI help you think through options. For detailed analysis, use private or encrypted tools, or work with a human financial advisor.',
    },
    {
      question: 'How often should I review my financial plan?',
      answer: 'Review quarterly at minimum, monthly is ideal. Major life changes (job loss, inheritance, marriage) warrant immediate review. Use the financial health check prompts to stay on top of your progress and adapt as your situation evolves.',
    },
    {
      question: 'What if I don\'t understand financial terminology?',
      answer: 'These prompts are designed for everyday language. If you encounter terms you don\'t understand, use a separate prompt to ask AI to explain them in simple terms. Building financial literacy takes time—be patient with yourself.',
    },
    {
      question: 'Can these prompts help me improve my credit score?',
      answer: 'Absolutely. Use the credit analysis and improvement prompts to understand your credit profile, identify issues, and create a strategy. Improved credit scores typically follow from responsible payment habits, lower debt, and consistent monitoring.',
    },
    {
      question: 'How do I stay motivated on my financial goals?',
      answer: 'Use the progress tracking and motivation prompts regularly. Celebrate small wins, remind yourself why each goal matters, and adjust your timeline if needed. Consider accountability partners or communities to stay engaged with your financial journey.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="border-b border-[#2a2a2a] bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-white hover:text-[#059669] transition-colors">
            GPTPrompts.ai
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/ai-prompts-brainstorming" className="text-sm text-gray-400 hover:text-white transition-colors">
              Brainstorming
            </Link>
            <Link href="/ai-prompts-meeting-notes" className="text-sm text-gray-400 hover:text-white transition-colors">
              Meeting Notes
            </Link>
            <Link href="/chatgpt-prompts-meal-planning" className="text-sm text-gray-400 hover:text-white transition-colors">
              Meal Planning
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-[#059669]/10 rounded-lg">
            <PiggyBank className="w-8 h-8 text-[#059669]" />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Personal Finance <span className="text-[#059669]">AI Prompts</span>
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              Master budgeting, investing, debt management, and financial planning with AI-powered insights tailored to your goals.
            </p>
            <p className="text-gray-500">
              From expense tracking to investment strategy, these prompts help you make smarter financial decisions and build lasting wealth.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}

      {/* Section 1: Budgeting & Expense Management */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#2a2a2a]">
        <div className="flex items-center gap-3 mb-8">
          <Wallet className="w-6 h-6 text-[#059669]" />
          <h2 className="text-2xl sm:text-3xl font-bold">Budgeting & Expense Management</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CopyCard
            icon={<Wallet className="w-5 h-5" />}
            title="Budget Creation Assistant"
            prompt="I earn [YOUR INCOME] per month and have these expenses: [LIST EXPENSES]. Create a realistic budget using the 50/30/20 rule (50% needs, 30% wants, 20% savings). Highlight areas where I can optimize spending without sacrificing quality of life."
            tags={['budgeting', 'expense-tracking']}
          />
          <CopyCard
            icon={<TrendingUp className="w-5 h-5" />}
            title="Expense Category Analyzer"
            prompt="Analyze my spending for the past 3 months: [PASTE TRANSACTIONS]. Categorize each expense, identify trends, and flag any unusual patterns. What categories are growing? Where could I cut back?"
            tags={['analysis', 'optimization']}
          />
          <CopyCard
            icon={<Target className="w-5 h-5" />}
            title="Savings Goal Planner"
            prompt="I want to save [AMOUNT] for [GOAL] within [TIMEFRAME]. My current monthly surplus is [AMOUNT]. Create a savings plan with milestones, identify ways to accelerate savings, and suggest high-yield savings accounts."
            tags={['savings', 'goal-setting']}
          />
          <CopyCard
            icon={<PiggyBank className="w-5 h-5" />}
            title="Discretionary Spending Review"
            prompt="Here are my discretionary spending categories: [COFFEE, DINING OUT, SUBSCRIPTIONS, ETC.]. I want to reduce this by [PERCENT]. Which cuts would have the biggest impact? What's a realistic reduction strategy?"
            tags={['lifestyle', 'optimization']}
          />
        </div>
      </section>

      {/* Section 2: Investment & Wealth Building */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#2a2a2a]">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-6 h-6 text-[#059669]" />
          <h2 className="text-2xl sm:text-3xl font-bold">Investment & Wealth Building</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CopyCard
            icon={<TrendingUp className="w-5 h-5" />}
            title="Investment Portfolio Builder"
            prompt="I have [AMOUNT] to invest, my age is [AGE], and my risk tolerance is [LOW/MEDIUM/HIGH]. I plan to retire at [AGE]. Suggest an asset allocation (stocks, bonds, real estate) and explain why this mix matches my timeline and goals."
            tags={['investing', 'allocation']}
          />
          <CopyCard
            icon={<Target className="w-5 h-5" />}
            title="Index Fund Comparison"
            prompt="Compare these index funds for me: [LIST FUNDS]. Consider expense ratios, historical returns, tax efficiency, and diversification. Which ones are best for a buy-and-hold strategy? Why?"
            tags={['investing', 'research']}
          />
          <CopyCard
            icon={<Wallet className="w-5 h-5" />}
            title="Retirement Calculator"
            prompt="I'm [AGE] with [RETIREMENT SAVINGS]. I save [AMOUNT] monthly and expect [RETURN RATE] annual returns. Will I have enough to retire at [AGE] with [YEARLY EXPENSE]? What adjustments do I need?"
            tags={['retirement', 'planning']}
          />
          <CopyCard
            icon={<PiggyBank className="w-5 h-5" />}
            title="Dividend Income Strategy"
            prompt="I want to build a dividend income stream of [AMOUNT] per year. My investment capital is [AMOUNT]. Suggest dividend-paying stocks, ETFs, or funds. How long until I reach my income goal?"
            tags={['income', 'dividend']}
          />
        </div>
      </section>

      {/* Section 3: Debt Management & Credit */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#2a2a2a]">
        <div className="flex items-center gap-3 mb-8">
          <CreditCard className="w-6 h-6 text-[#059669]" />
          <h2 className="text-2xl sm:text-3xl font-bold">Debt Management & Credit</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CopyCard
            icon={<CreditCard className="w-5 h-5" />}
            title="Debt Payoff Strategy"
            prompt="I have these debts: [LIST DEBTS WITH BALANCES AND RATES]. My monthly payment capacity is [AMOUNT]. Should I use the avalanche method (highest rate first) or snowball method (smallest balance first)? Show me payoff timeline for each."
            tags={['debt', 'payoff']}
          />
          <CopyCard
            icon={<TrendingUp className="w-5 h-5" />}
            title="Credit Score Improvement Plan"
            prompt="My credit score is [SCORE]. My report shows: [ISSUES: LATE PAYMENTS, HIGH UTILIZATION, ETC.]. What are the top 3 actions I should take to improve my score? What timeline should I expect?"
            tags={['credit', 'improvement']}
          />
          <CopyCard
            icon={<Target className="w-5 h-5" />}
            title="Refinancing Analysis"
            prompt="I have a [LOAN TYPE] with a [RATE]% rate, [REMAINING BALANCE] remaining, and [YEARS] years left. Current rates are [MARKET RATE]%. Should I refinance? Calculate the break-even point and total savings."
            tags={['refinancing', 'optimization']}
          />
          <CopyCard
            icon={<Wallet className="w-5 h-5" />}
            title="Credit Utilization Optimizer"
            prompt="My credit cards have limits: [LIST CARDS AND LIMITS]. I'm currently using [AMOUNT] total. My credit score is [SCORE]. How should I restructure my balances to optimize my credit utilization ratio?"
            tags={['credit', 'utilization']}
          />
        </div>
      </section>

      {/* Section 4: Financial Planning & Goals */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#2a2a2a]">
        <div className="flex items-center gap-3 mb-8">
          <Target className="w-6 h-6 text-[#059669]" />
          <h2 className="text-2xl sm:text-3xl font-bold">Financial Planning & Goals</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CopyCard
            icon={<Target className="w-5 h-5" />}
            title="Life Event Financial Planner"
            prompt="I'm planning to [BUY A HOME / GET MARRIED / START A BUSINESS / OTHER]. This will happen in [TIMEFRAME] and cost approximately [AMOUNT]. Help me create a financial plan with savings targets and potential funding sources."
            tags={['planning', 'goals']}
          />
          <CopyCard
            icon={<PiggyBank className="w-5 h-5" />}
            title="Net Worth Tracker"
            prompt="My assets are: [ASSETS AND VALUES]. My liabilities are: [DEBTS AND AMOUNTS]. Calculate my net worth and break down where I stand. What's a realistic net worth goal for [YEARS] from now?"
            tags={['net-worth', 'tracking']}
          />
          <CopyCard
            icon={<Wallet className="w-5 h-5" />}
            title="Insurance Needs Assessment"
            prompt="I'm [AGE], [DEPENDENTS], with [INCOME]. I have [ASSETS]. What types of insurance do I need? (health, life, disability, homeowners, etc.) How much coverage is right for my situation?"
            tags={['insurance', 'protection']}
          />
          <CopyCard
            icon={<TrendingUp className="w-5 h-5" />}
            title="Financial Health Checkup"
            prompt="Help me assess my overall financial health. Key metrics: income [AMOUNT], expenses [AMOUNT], savings rate [PERCENT], debt [AMOUNT], emergency fund [MONTHS]. What's my financial health score? What areas need attention?"
            tags={['assessment', 'health']}
          />
        </div>
      </section>

      {/* Section 5: Tax Optimization & Financial Efficiency */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#2a2a2a]">
        <div className="flex items-center gap-3 mb-8">
          <Target className="w-6 h-6 text-[#059669]" />
          <h2 className="text-2xl sm:text-3xl font-bold">Tax Optimization & Financial Efficiency</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CopyCard
            icon={<Target className="w-5 h-5" />}
            title="Tax Reduction Strategy"
            prompt="I earned [INCOME] last year. My deductions were [AMOUNT]. I expect similar income this year. What tax-advantaged strategies can I use? (401k, IRA, HSA, etc.) How much could I save in taxes?"
            tags={['tax', 'optimization']}
          />
          <CopyCard
            icon={<Wallet className="w-5 h-5" />}
            title="Retirement Account Optimizer"
            prompt="I'm eligible for: [LIST AVAILABLE ACCOUNTS - 401K, IRA, ROTH, ETC.]. I have [AMOUNT] to allocate annually. Create an optimal allocation strategy based on contribution limits and tax benefits."
            tags={['retirement', 'tax']}
          />
          <CopyCard
            icon={<PiggyBank className="w-5 h-5" />}
            title="Side Income Tax Planner"
            prompt="I earn [SIDE INCOME] from [SOURCE]. This is [FIRST YEAR / ONGOING]. What taxes do I owe? What deductions can I claim? Should I make quarterly estimated payments?"
            tags={['tax', 'side-income']}
          />
          <CopyCard
            icon={<TrendingUp className="w-5 h-5" />}
            title="Charitable Giving Strategy"
            prompt="I want to donate [AMOUNT] annually to causes I care about. What's the most tax-efficient way? Should I use donor-advised funds, bunching, or direct donations?"
            tags={['tax', 'giving']}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#2a2a2a]">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* Related Pages */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#2a2a2a]">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Explore Other Prompt Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/ai-prompts-brainstorming"
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#EAB308] transition-colors group"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-[#EAB308] transition-colors mb-2">
              Brainstorming Prompts
            </h3>
            <p className="text-gray-400 text-sm">Unlock creative ideas and breakthrough thinking with AI-powered prompts for ideation, problem-solving, and innovation.</p>
          </Link>
          <Link
            href="/ai-prompts-meeting-notes"
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#6366F1] transition-colors group"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-[#6366F1] transition-colors mb-2">
              Meeting Notes Prompts
            </h3>
            <p className="text-gray-400 text-sm">Streamline meeting documentation, action items, and follow-ups with AI assistance for better collaboration and accountability.</p>
          </Link>
          <Link
            href="/chatgpt-prompts-meal-planning"
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#F97316] transition-colors group"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-[#F97316] transition-colors mb-2">
              Meal Planning Prompts
            </h3>
            <p className="text-gray-400 text-sm">Plan nutritious meals, manage dietary preferences, and create shopping lists with AI-powered personalized recommendations.</p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a2a2a] mt-16 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p className="mb-2">
            &copy; 2026 GPTPrompts.ai. Prompts designed to unlock AI&apos;s potential in your daily work.
          </p>
          <p className="text-sm">
            Always verify financial information with professional advisors before making major decisions.
          </p>
        </div>
      </footer>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Personal Finance AI Prompts',
            description:
              'Master budgeting, investing, debt management, and financial planning with AI-powered insights tailored to your goals.',
            datePublished: '2026-03-28',
            dateModified: '2026-03-28',
          }),
        }}
      />
    </div>
  );
}
