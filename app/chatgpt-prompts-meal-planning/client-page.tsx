'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Utensils, ShoppingCart, Clock, Users, Leaf, ChevronDown, ChevronUp } from 'lucide-react';

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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#F97316]/50 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-[#F97316]">{icon}</div>
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      </div>
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{prompt}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-[#2a2a2a] text-[#F97316] text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <button
        onClick={handleCopy}
        className={`w-full py-2 px-3 rounded text-sm font-medium transition-colors ${
          copied
            ? 'bg-[#F97316]/20 text-[#F97316]'
            : 'bg-[#F97316] text-white hover:bg-[#F97316]/90'
        }`}
      >
        {copied ? 'Copied!' : 'Copy Prompt'}
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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <h4 className="text-white font-semibold">{question}</h4>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#F97316]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <p className="text-gray-300 text-sm mt-3">{answer}</p>
      )}
    </div>
  );
}

export default function MealPlanningPromptsPage() {
  const sections = [
    {
      title: 'Meal Planning & Prep',
      icon: <Utensils className="w-6 h-6" />,
      prompts: [
        {
          title: 'Weekly Meal Plan Generator',
          prompt: 'Create a weekly meal plan for 4 people with a budget of $150. Include breakfast, lunch, and dinner for each day. Focus on balanced nutrition and meals that use overlapping ingredients to minimize waste.',
          tags: ['planning', 'budget', 'weekly'],
        },
        {
          title: 'Meal Prep Strategy Builder',
          prompt: 'Design a meal prep strategy for someone who wants to prepare lunches for 5 days. Include recipes that reheat well, storage instructions, and a timeline for preparation. Make sure to include variety to avoid food fatigue.',
          tags: ['prep', 'storage', 'lunch'],
        },
        {
          title: 'Grocery Shopping Optimizer',
          prompt: 'Based on this weekly meal plan [insert meals], create a consolidated grocery list organized by store sections. Include quantities, estimated costs, and notes about what can be bought in bulk or frozen for later use.',
          tags: ['shopping', 'budget', 'ingredients'],
        },
        {
          title: 'Theme Night Menu Creator',
          prompt: 'Create a 4-week theme night rotation (Taco Tuesday, Pasta Night, etc.) with complete menus, recipes, and corresponding shopping lists. Include tips for quick preparation and family-friendly variations.',
          tags: ['themes', 'family', 'planning'],
        },
      ],
    },
    {
      title: 'Dietary Restrictions & Allergies',
      icon: <Leaf className="w-6 h-6" />,
      prompts: [
        {
          title: 'Allergen-Free Meal Plan Creator',
          prompt: 'Create a meal plan that avoids: [list allergies/intolerances]. Ensure nutritional balance and provide alternatives for common allergens. Include label-reading tips and restaurant ordering guidance.',
          tags: ['allergies', 'safety', 'nutrition'],
        },
        {
          title: 'Vegan/Vegetarian Protein Planner',
          prompt: 'Design a weekly meal plan for a [vegan/vegetarian] diet that ensures adequate protein intake. Include variety of plant-based proteins and calculate macro nutrients for each day.',
          tags: ['protein', 'vegan', 'nutrition'],
        },
        {
          title: 'Keto Diet Meal Builder',
          prompt: 'Create a 2-week keto meal plan with recipes that maintain macro ratios (75% fat, 20% protein, 5% carbs). Include grocery lists and tips for staying in ketosis while dining out.',
          tags: ['keto', 'macros', 'diet'],
        },
        {
          title: 'Low-FODMAP Meal Guide',
          prompt: 'Develop a 4-week low-FODMAP meal plan for digestive health. Include recipes, safe food lists, foods to avoid, and tips for managing this diet while eating socially.',
          tags: ['digestive', 'health', 'diet'],
        },
      ],
    },
    {
      title: 'Nutrition & Health Goals',
      icon: <ShoppingCart className="w-6 h-6" />,
      prompts: [
        {
          title: 'Macro Nutrient Calculator',
          prompt: 'Based on my goal [weight loss/muscle gain/maintenance] and activity level [sedentary/moderate/active], calculate my daily calorie and macro targets. Then suggest a 3-day sample meal plan that hits these targets.',
          tags: ['nutrition', 'macros', 'fitness'],
        },
        {
          title: 'Anti-Inflammatory Meal Plan Creator',
          prompt: 'Design a 2-week anti-inflammatory meal plan featuring foods rich in omega-3s and antioxidants. Include recipes that reduce bloating and support joint health.',
          tags: ['health', 'inflammation', 'wellness'],
        },
        {
          title: 'Meal Prep for Fitness Goals',
          prompt: 'Create a meal prep guide for someone training for [marathon/bodybuilding/general fitness]. Include pre-workout and post-workout meal ideas, hydration timing, and recovery nutrition.',
          tags: ['fitness', 'training', 'prep'],
        },
        {
          title: 'Energy Boost Breakfast Planner',
          prompt: 'Design 10 high-energy breakfast ideas that keep blood sugar stable and provide sustained energy. Include macros, preparation time, and tips for batch-cooking breakfast items.',
          tags: ['breakfast', 'energy', 'nutrition'],
        },
      ],
    },
    {
      title: 'Shopping & Recipe Ideas',
      icon: <ShoppingCart className="w-6 h-6" />,
      prompts: [
        {
          title: 'Pantry-Based Meal Suggester',
          prompt: 'I have [list ingredients in pantry/fridge/freezer]. Generate 5 complete meal ideas I can make with these ingredients. Include recipes, cooking times, and flavor profiles.',
          tags: ['recipes', 'ingredients', 'quick'],
        },
        {
          title: 'Seasonal Recipe Rotator',
          prompt: 'Create a seasonal meal guide for [spring/summer/fall/winter] featuring fresh, in-season ingredients. Include 20 recipes organized by meal type and storage tips for seasonal produce.',
          tags: ['seasonal', 'fresh', 'recipes'],
        },
        {
          title: 'One-Pot Meal Generator',
          prompt: 'Suggest 15 one-pot meals (soups, stews, curries, pasta) that are easy to cook, minimize cleanup, and reheat well. Include nutrition info and freezing instructions.',
          tags: ['oneпот', 'simple', 'cleanup'],
        },
        {
          title: 'International Cuisine Explorer',
          prompt: 'Create a 4-week world cuisine meal plan that explores [specific cuisines]. Include authentic recipes, key ingredients to stock, and tips for replicating restaurant-quality flavors at home.',
          tags: ['international', 'cuisines', 'recipes'],
        },
      ],
    },
    {
      title: 'Meal Timing & Family Coordination',
      icon: <Clock className="w-6 h-6" />,
      prompts: [
        {
          title: 'Busy Schedule Meal Planner',
          prompt: 'I have limited time on [specific days] and can dedicate [X hours] to cooking. Create a meal plan with quick recipes, slow-cooker meals, and freezer-friendly options that fits my schedule.',
          tags: ['busy', 'quick', 'timing'],
        },
        {
          title: 'Family-Friendly Menu Creator',
          prompt: 'Design a meal plan for a family with children ages [list ages]. Include picky-eater friendly options, nutrition-packed hidden veggie recipes, and kid-approved meals without sacrificing adult satisfaction.',
          tags: ['family', 'kids', 'variety'],
        },
        {
          title: 'Batch Cooking Scheduler',
          prompt: 'Create a Sunday batch-cooking schedule [or other day] that maximizes efficiency. Plan 10-12 recipes that share ingredients, outline prep workflow, and provide storage/reheating instructions for the week.',
          tags: ['batch', 'prep', 'efficiency'],
        },
        {
          title: 'Leftover Transformation Guide',
          prompt: 'I have [list leftovers] from last night. Generate creative recipes to repurpose these ingredients into completely different meals. Include flavor profiles and cooking instructions.',
          tags: ['leftovers', 'waste-reduction', 'creativity'],
        },
      ],
    },
  ];

  const faqs = [
    {
      question: 'How can I use AI to plan meals for dietary restrictions?',
      answer: 'Share your specific allergies, intolerances, or dietary preferences (vegan, keto, low-carb, etc.) with the AI. Ask it to create complete meal plans that account for these restrictions while ensuring nutritional balance. AI can cross-check ingredients against safe foods and generate shopping lists automatically.',
    },
    {
      question: "What is the best way to meal prep efficiently?",
      answer: 'Use AI to identify recipes that share overlapping ingredients and can be prepped in batches. Ask for a cooking timeline that groups similar tasks together (chopping, roasting, simmering). Focus on meals that store well and reheat properly to maximize your prep time.',
    },
    {
      question: 'Can AI help me stick to a budget while meal planning?',
      answer: 'Absolutely. Specify your budget to the AI and it will generate meal plans that prioritize cost-effective ingredients, suggest bulk-buying opportunities, and identify seasonal produce that\'s typically cheaper. It can also create shopping lists organized by price.',
    },
    {
      question: 'How do I plan meals when I have limited cooking time?',
      answer: 'Tell the AI how much time you have available each day. It can suggest quick recipes (under 30 minutes), slow-cooker meals, sheet-pan dinners, and freezer-prep options. Ask for meal plans that minimize daily cooking while maximizing nutrition.',
    },
    {
      question: "What is the best approach to cooking for a family with different preferences?",
      answer: 'Describe each family member\'s preferences, allergies, and dietary needs. Ask the AI to create "base meals" that everyone can eat with customizable components. For example, a taco bar where each person can build their own with preferred fillings.',
    },
    {
      question: 'How can I reduce food waste through meal planning?',
      answer: 'Ask the AI to create meal plans where ingredients are used across multiple meals throughout the week. Request recipes that use similar produce and proteins together. Use the AI to generate creative recipes for vegetables that are about to go bad.',
    },
    {
      question: 'Can AI help me discover new recipes and cuisines?',
      answer: 'Yes. Ask the AI to suggest recipes from cuisines you\'ve never tried, then request step-by-step instructions adapted for typical home kitchens. It can also identify key spices and ingredients to stock for authentic flavor.',
    },
    {
      question: 'What should I track when using AI for meal planning?',
      answer: 'Track macronutrients (protein, carbs, fat), calories, sodium, and fiber—especially if you have health goals. Ask the AI to include these details in your meal plans. Also note which recipes your family loved and which didn\'t work, so you can refine future suggestions.',
    },
    {
      question: 'How do I meal plan for athletes or fitness goals?',
      answer: 'Share your fitness goal (endurance, strength, weight loss) and training schedule. Ask the AI for meal plans that time carbs and protein around workouts, include recovery meals, and hit specific macro targets. It can also suggest hydration timing.',
    },
    {
      question: 'Can AI help me eat healthier without feeling deprived?',
      answer: 'Completely. Ask the AI to create meal plans that prioritize whole foods, healthy fats, and proteins, but still include foods you actually enjoy. It can suggest healthier versions of your favorite meals and help you find nutritious meals that feel indulgent.',
    },
    {
      question: "What is the best way to batch cook and store meals?",
      answer: 'Ask the AI for a batch-cooking schedule that groups recipes by cooking method (roasting, simmering, etc.). Request storage instructions for each meal, including how long items last in the fridge/freezer and the best reheating method to maintain quality.',
    },
    {
      question: 'How do I plan meals when grocery shopping on a tight schedule?',
      answer: 'Tell the AI you need a streamlined process. Ask for meal plans that use fewer ingredients, recipes that share most ingredients, and organized shopping lists that follow your store\'s layout. This minimizes decision-making and shopping time.',
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-[#2a2a2a] sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#F97316]">
            GPT Prompts
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/ai-prompts-brainstorming" className="text-gray-300 hover:text-[#EAB308] transition-colors">
              Brainstorming
            </Link>
            <Link href="/ai-prompts-meeting-notes" className="text-gray-300 hover:text-[#6366F1] transition-colors">
              Meeting Notes
            </Link>
            <Link href="/ai-prompts-personal-finance" className="text-gray-300 hover:text-[#059669] transition-colors">
              Finance
            </Link>
            <Link href="/chatgpt-prompts-meal-planning" className="text-[#F97316] font-semibold">
              Meal Planning
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-b border-[#2a2a2a] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <Utensils className="w-8 h-8 text-[#F97316]" />
            <span className="text-[#F97316] font-semibold text-sm">80+ Meal Planning Prompts</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Master Meal Planning with <span className="text-[#F97316]">AI</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Stop staring at your fridge wondering what to cook. Use these ChatGPT prompts to generate personalized meal plans, manage dietary restrictions, organize your shopping, and simplify your kitchen workflow.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-8">
                <div className="text-[#F97316]">{section.icon}</div>
                <h2 className="text-3xl font-bold">{section.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.prompts.map((prompt, pidx) => (
                  <CopyCard
                    key={pidx}
                    icon={section.icon}
                    title={prompt.title}
                    prompt={prompt.prompt}
                    tags={prompt.tags}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#1a1a1a] border-y border-[#2a2a2a] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Explore More Prompt Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/ai-prompts-brainstorming">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 hover:border-[#EAB308]/50 transition-colors cursor-pointer">
              <h3 className="text-xl font-bold text-[#EAB308] mb-2">Brainstorming Prompts</h3>
              <p className="text-gray-300">Generate ideas, overcome creative blocks, and brainstorm solutions with AI.</p>
            </div>
          </Link>
          <Link href="/ai-prompts-meeting-notes">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 hover:border-[#6366F1]/50 transition-colors cursor-pointer">
              <h3 className="text-xl font-bold text-[#6366F1] mb-2">Meeting Notes Prompts</h3>
              <p className="text-gray-300">Transcribe, summarize, and act on meeting notes with AI assistance.</p>
            </div>
          </Link>
          <Link href="/ai-prompts-personal-finance">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 hover:border-[#059669]/50 transition-colors cursor-pointer">
              <h3 className="text-xl font-bold text-[#059669] mb-2">Personal Finance Prompts</h3>
              <p className="text-gray-300">Plan budgets, investments, and financial goals with AI guidance.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a2a2a] bg-[#0a0a0a] py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400 text-sm">
          <p>© 2026 GPT Prompts. All prompts are customizable and designed to work with ChatGPT, Claude, and other LLMs.</p>
        </div>
      </footer>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ChatGPT Prompts for Meal Planning',
            description: '80+ AI prompts to help you master meal planning, manage dietary restrictions, organize shopping, and simplify your kitchen workflow.',
            datePublished: '2026-03-28',
            dateModified: '2026-03-28',
          }),
        }}
      />
    </div>
  );
}
