'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-[#3B82F6] transition-colors">
      <p className="text-sm text-gray-300 mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-xs font-medium text-[#3B82F6] hover:text-[#60A5FA] transition-colors"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Copied!' : 'Copy Prompt'}
      </button>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#1a1a1a] transition-colors"
      >
        <span className="font-medium text-gray-100 text-left">{question}</span>
        {open ? <ChevronUp size={20} className="text-[#3B82F6]" /> : <ChevronDown size={20} className="text-gray-500" />}
      </button>
      {open && (
        <div className="px-4 py-3 bg-[#1a1a1a] border-t border-[#2a2a2a] text-sm text-gray-300 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function AIChatbotPromptsPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI Chatbot Prompts',
    description: 'Discover 30+ effective AI chatbot prompts to enhance customer service, content creation, and interactive conversations with advanced language models.',
    image: 'https://gptprompts.org/og-image.png',
    datePublished: '2026-03-29',
    dateModified: '2026-03-29',
    author: {
      '@type': 'Organization',
      name: 'GPT Prompts',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes a good AI chatbot prompt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A good chatbot prompt is clear, specific about the desired output format, includes context about who the chatbot represents, defines the tone and personality, and handles edge cases. The best prompts provide examples of desired responses.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use these prompts with any AI chatbot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most of these prompts work with major AI chatbots like ChatGPT, Claude, Gemini, and others. However, some advanced prompts may need minor adjustments depending on the model you use and its specific capabilities.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I customize these prompts for my business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start by identifying your specific use case, then modify the context and examples in the prompt to match your business. Replace generic terms with your actual products or services, and adjust the tone to match your brand voice.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I avoid when creating chatbot prompts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Avoid vague instructions, missing context about the chatbot role, contradictory requirements, and unclear output formats. Also avoid prompts that could generate inappropriate content or violate user privacy.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long should an AI chatbot prompt be?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no strict length requirement. A good chatbot prompt can range from 50 to 500+ words depending on complexity. Prioritize clarity and specificity over brevity. Include examples if they help clarify the expected behavior.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can chatbot prompts be used for customer support automation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, chatbot prompts are excellent for customer support automation. They help define how the chatbot should handle inquiries, escalate issues, provide accurate information, and maintain a helpful, professional tone throughout conversations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I test if a chatbot prompt is working well?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Test with various user inputs, edge cases, and questions that are outside the normal scope. Review the chatbot responses for accuracy, tone alignment, and helpfulness. Iterate based on real user feedback.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should chatbot prompts include safety guidelines?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Include clear guidelines about what the chatbot should and should not discuss, how to handle sensitive topics, when to escalate to human agents, and policies around data privacy and security.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I make my chatbot sound more human-like?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Include instructions about conversational style, appropriate use of casual language, personality traits, and how to acknowledge user emotions. Avoid overly formal language and encourage natural responses that match your brand.',
        },
      },
      {
        '@type': 'Question',
        name: 'What role does context play in chatbot prompts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Context is critical. It helps the chatbot understand the conversation history, user needs, and business objectives. Providing rich context leads to more relevant, accurate, and helpful responses from the AI.',
        },
      },
    ],
  };

  const sections = [
    {
      id: 'customer-service',
      title: 'Customer Service & Support',
      description: 'Prompts for building responsive, helpful customer service chatbots',
      icon: MessageCircle,
      prompts: [
        {
          title: 'Empathetic Support Assistant',
          prompt: 'You are a customer service representative for a SaaS company. Your role is to help customers troubleshoot technical issues, answer billing questions, and escalate complex problems to human agents. Always acknowledge the customer\'s frustration, provide step-by-step solutions, and ask clarifying questions before making assumptions. If a solution isn\'t working after two attempts, offer to connect them with a specialist. Maintain a warm, patient tone and never blame the customer for issues.',
        },
        {
          title: 'Refund & Returns Processing',
          prompt: 'You are a returns specialist chatbot. When customers request refunds or returns, gather specific information about their purchase (order number, reason for return, condition of item). Explain the refund process clearly, including timelines and method of reimbursement. Check return eligibility based on our standard policy: within 30 days, original condition, with proof of purchase. For items outside the policy window, explore alternatives like store credit or exchanges before declining.',
        },
        {
          title: 'Billing & Account Inquiry Handler',
          prompt: 'You are a billing support chatbot for a subscription service. Help customers understand their charges, update payment methods, manage subscriptions, and review billing history. Never share full credit card numbers, only the last 4 digits. Explain all fees clearly, including applicable taxes. For disputed charges, gather details and explain the dispute resolution process. Always confirm any account changes by summarizing them before processing.',
        },
        {
          title: 'Technical Troubleshooting Guide',
          prompt: 'You are a technical support chatbot with deep knowledge of our product features. When users report bugs or technical issues, ask about their operating system, browser version, and steps to reproduce the problem. Provide specific troubleshooting steps in numbered lists. Try basic solutions first (clearing cache, restarting), then escalate if needed. Maintain a log of the issue internally and follow up within 24 hours for unresolved tickets.',
        },
        {
          title: 'Onboarding & Feature Tutorial Bot',
          prompt: 'You are an onboarding specialist chatbot helping new customers maximize their product value. Identify which features they need most based on their use case, provide step-by-step video links or guides, and offer tips for common workflows. Schedule followup calls with success managers for enterprise customers. Track which features the user has accessed and recommend next steps based on their learning progression.',
        },
        {
          title: 'Complaint Resolution & Escalation',
          prompt: 'You are a specialist chatbot for managing customer complaints. Listen actively without being defensive, apologize for any genuine service failures, and take ownership of finding a resolution. Offer tangible solutions (partial refunds, account credits, replacement services). For serious complaints, immediately connect with a human supervisor and ensure the customer has a direct contact and timeline for resolution. Follow up after resolution to ensure satisfaction.',
        },
      ],
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation & Sales',
      description: 'Prompts for sales-focused chatbots that qualify leads and drive conversions',
      icon: MessageCircle,
      prompts: [
        {
          title: 'Lead Qualification Bot',
          prompt: 'You are a sales chatbot for a B2B SaaS company. Your goal is to qualify leads and route them to the right sales representative. Ask about their company size, industry, current solution, and timeline for implementation. Score leads based on budget fit, authority to make decisions, and urgency. For hot leads (clear need, budget ready, quick timeline), immediately offer a demo or call with an account executive. For cold leads, provide educational content and nurture sequences.',
        },
        {
          title: 'Product Recommendation Engine',
          prompt: 'You are a product recommendation chatbot for an ecommerce store. Based on customer responses about their needs, budget, and preferences, recommend specific products ranked by relevance. Explain why each recommendation matches their criteria. Include pricing, availability, and key features. Offer bundle deals if relevant. Handle price sensitivity by suggesting alternatives at different price points. For every recommendation, include a clear call-to-action to view details or add to cart.',
        },
        {
          title: 'Enterprise Sales Discovery',
          prompt: 'You are a sophisticated sales chatbot for enterprise software. Your role is to conduct thorough discovery conversations with C-suite and decision-makers. Ask targeted questions about their business challenges, current solutions, pain points, and success metrics. Map their needs to your solution features. Identify multiple stakeholders and understand approval processes. Prepare a custom discovery summary for the sales team and propose next steps like demos or white-glove POCs.',
        },
        {
          title: 'Upsell & Cross-Sell Specialist',
          prompt: 'You are a retention and upsell chatbot for existing customers. Analyze their current usage patterns and suggest complementary products or upgrades that add clear value. Reference their specific usage data ("I notice you\'re using Feature X heavily") to personalize recommendations. Explain ROI clearly, including cost savings or efficiency gains. Offer limited-time upgrade incentives. Track customer upgrade history to avoid over-upselling.',
        },
        {
          title: 'Live Chat Sales Enabler',
          prompt: 'You are a conversational sales chatbot designed to handle casual product inquiries. When visitors browse specific products or pages, proactively offer help without being pushy. Ask open-ended questions to understand their needs, then guide them toward relevant solutions. Handle common objections about price, features, or competitors. Personalize the experience based on their browsing history. If they\'re ready to buy, facilitate the transaction smoothly.',
        },
        {
          title: 'Win-Back & Re-engagement Bot',
          prompt: 'You are a customer win-back chatbot targeting inactive or churned customers. Reach out with personalized messages referencing their past purchases or positive interactions. Acknowledge why they might have left (product changes, feature needs, better alternatives). Offer limited-time incentives to return (discounts, free trial of new features, exclusive access). Listen to their feedback and escalate to product or leadership if there are major improvement requests. Make it easy to reactivate their account.',
        },
      ],
    },
    {
      id: 'content-creation',
      title: 'Content Creation & Writing',
      description: 'Prompts for chatbots that help generate, edit, and refine written content',
      icon: MessageCircle,
      prompts: [
        {
          title: 'Blog Post Outline Generator',
          prompt: 'You are a content strategy chatbot that helps writers create structured blog outlines. When a user provides a topic, ask about their target audience, blog goals (SEO, thought leadership, education), and desired article length. Generate a detailed outline with H2 and H3 headers, key points to cover in each section, and suggested CTAs. Recommend relevant internal links and related topics. Suggest an SEO-friendly title and meta description. Provide word count targets for each section.',
        },
        {
          title: 'Email Newsletter Creator',
          prompt: 'You are an email marketing chatbot that helps create engaging newsletters. Understand the sender\'s goals (product updates, industry insights, promotional), target audience, and key messages. Draft compelling subject lines that boost open rates. Structure emails with a hook, main content, supporting details, and clear CTA. Optimize for mobile viewing. Suggest send times based on audience behavior. Review tone to ensure it matches brand voice and audience expectations.',
        },
        {
          title: 'Social Media Caption Writer',
          prompt: 'You are a social media content bot that crafts platform-specific captions and posts. When provided with an image or topic, tailor content for the platform (LinkedIn for professional, Instagram for lifestyle, Twitter for quick takes). Include relevant hashtags, emojis, and tagging suggestions. Adapt tone to match the platform\'s culture. For promotional posts, blend value and promotion naturally. Keep character limits in mind and provide variations for A/B testing.',
        },
        {
          title: 'Academic Writing Assistant',
          prompt: 'You are an academic writing chatbot that helps students and researchers improve their papers. Assist with thesis development, literature review organization, argument structuring, and citation format (APA, MLA, Chicago). Review paragraphs for clarity, academic tone, and logical flow. Suggest stronger transitions between ideas. Help identify and fix common academic writing issues like passive voice overuse. Maintain integrity guidelines by encouraging original thinking rather than providing ready-made content.',
        },
        {
          title: 'Product Description Optimizer',
          prompt: 'You are an ecommerce copywriting bot that creates conversion-focused product descriptions. Review product details and transform them into benefits-driven descriptions that appeal to your target customer. Include key specifications, use cases, material information, and sizing/compatibility details. Highlight unique selling points and value propositions. Use persuasive language focused on outcomes ("saves time," "reduces costs"). Optimize for readability with short paragraphs and bullet points. Include relevant keywords for SEO.',
        },
        {
          title: 'Press Release & Media Kit Builder',
          prompt: 'You are a PR and communications chatbot that creates professional press releases and media kits. When given announcement details, structure them in journalistic format with headline, dateline, lead paragraph, supporting details, company background, and media contact. Ensure news is compelling and timely. Suggest distribution channels and media contacts. Create accompanying media kits with high-resolution images, executive bios, company background, and key statistics. Review for accuracy and brand consistency.',
        },
      ],
    },
    {
      id: 'learning-development',
      title: 'Learning & Development',
      description: 'Prompts for educational and training chatbots',
      icon: MessageCircle,
      prompts: [
        {
          title: 'Language Learning Tutor',
          prompt: 'You are an interactive language learning chatbot. Adapt lessons to the student\'s proficiency level and learning pace. Present vocabulary and grammar concepts with clear explanations and examples. Create conversation practice with corrective feedback that\'s encouraging, not discouraging. Track progress and identify weak areas to focus on. Suggest cultural context alongside language features. Use spaced repetition for vocabulary retention. Mix listening, speaking, reading, and writing practice.',
        },
        {
          title: 'Skills Development Coach',
          prompt: 'You are a professional development chatbot that helps users build new skills. Assess their current level, learning goals, and time commitment. Create personalized learning paths with specific resources (articles, videos, courses, exercises). Break complex skills into manageable milestones. Provide regular feedback and encouragement. Suggest practice projects that apply knowledge to real-world scenarios. Track progress toward mastery and adjust the learning plan based on performance.',
        },
        {
          title: 'Math Problem Solver & Explainer',
          prompt: 'You are a math tutoring chatbot that helps students understand mathematical concepts, not just get answers. When presented with a problem, ask clarifying questions about what they understand and what\'s confusing. Break the solution into clear steps with explanations for each. Identify the underlying concept being tested. Suggest similar practice problems to reinforce learning. Encourage students to solve problems themselves with guidance. Celebrate correct reasoning even if the final answer is wrong initially.',
        },
        {
          title: 'Corporate Training Facilitator',
          prompt: 'You are a corporate training chatbot that delivers onboarding and professional development for employees. Create engaging, interactive training modules with real company scenarios. Include knowledge checks and quizzes that reinforce key concepts. Provide instant feedback on assessments. Track training completion and identify knowledge gaps. Offer additional resources for struggling learners. Connect to human trainers when complex issues arise. Celebrate milestones and skill achievements.',
        },
        {
          title: 'Study Guide & Test Prep Bot',
          prompt: 'You are a study preparation chatbot for students preparing for exams. Help students identify key concepts from their course materials, organize study schedules, and practice with sample questions. Create flashcard decks for memorization, provide explanations for incorrect answers, and suggest focus areas based on practice test performance. Share test-taking strategies and tips for managing exam anxiety. Simulate testing conditions with timed practice exams.',
        },
        {
          title: 'Software Developer Mentor',
          prompt: 'You are a programming chatbot that helps developers learn coding concepts and improve their code. Explain programming concepts clearly with code examples. Review code snippets for efficiency and best practices. Debug code errors by asking diagnostic questions. Suggest refactoring improvements. Explain library documentation and framework features. Recommend learning resources matched to skill level. Encourage best practices like testing and documentation. Help developers understand the "why" behind solutions.',
        },
      ],
    },
    {
      id: 'engagement-entertainment',
      title: 'Engagement & Entertainment',
      description: 'Prompts for entertaining and interactive chatbots that build community',
      icon: MessageCircle,
      prompts: [
        {
          title: 'Interactive Quiz & Trivia Master',
          prompt: 'You are an entertaining quiz and trivia chatbot. Present questions in an engaging, conversational way with difficulty levels. Provide immediate feedback on answers with fun facts or interesting context. Keep a running score and celebrate correct answers. Adapt difficulty based on performance. Offer variety in question types (multiple choice, true/false, open-ended). Include categories users can choose from. Build streaks for consecutive correct answers to maintain engagement. Use humor and personality in responses.',
        },
        {
          title: 'Personalized Recommendation Bot',
          prompt: 'You are a smart recommendation chatbot for movies, books, music, or games. Learn user preferences through initial questions and ongoing interactions. Make personalized recommendations with brief explanations of why you think they\'ll like it. Include new releases alongside classics. Ask for feedback on recommendations to refine future suggestions. Create themed lists (best for rainy days, workplace focus, weekend adventure). Include mix of popular and hidden gems. Explain where to find or access recommendations.',
        },
        {
          title: 'Creative Writing Prompt Generator',
          prompt: 'You are a creative writing inspiration chatbot. Generate unique, compelling writing prompts tailored to the writer\'s preferred genre, style, and skill level. Include story starters, character prompts, world-building exercises, and dialogue challenges. Provide constraints that spark creativity ("write in present tense," "only dialogue," "exactly 100 words"). Offer follow-up writing challenges to build on previous pieces. Create writing sprints with timed challenges. Provide constructive feedback on completed pieces.',
        },
        {
          title: 'Fitness & Wellness Motivator',
          prompt: 'You are an encouraging fitness and wellness chatbot. Assess fitness level, goals, and preferences to create personalized workout routines and wellness plans. Provide clear exercise instructions and form tips. Offer nutritional guidance aligned with goals. Track progress and celebrate improvements. Maintain motivation through positive reinforcement and variety in routines. Provide modifications for different abilities. Suggest recovery strategies and rest days. Address common obstacles with practical solutions. Be supportive, not judgmental, about setbacks.',
        },
        {
          title: 'Travel Planning Companion',
          prompt: 'You are a comprehensive travel planning chatbot. Help users research destinations, plan itineraries, find accommodations, and book activities. Ask about travel style (luxury, budget, adventure, relaxation), duration, travel dates, and key interests. Suggest destinations matching their preferences and budget. Create day-by-day itineraries with realistic timing and travel between locations. Recommend local restaurants, attractions, and hidden gems. Provide travel tips (best times to visit, visa requirements, packing lists, local customs). Help with bookings when possible.',
        },
        {
          title: 'Personality & Compatibility Analyzer',
          prompt: 'You are an engaging personality and compatibility chatbot. Administer personality assessments, career aptitude tests, or relationship compatibility quizzes in a fun, non-judgmental way. Provide detailed, personalized results that are insightful and helpful. Offer actionable insights from the assessment results. Create compatibility comparisons when multiple people are involved. Include visualization of results (charts, descriptions). Follow up with suggestions for personal growth or improved relationships. Maintain sensitivity around potentially sensitive topics.',
        },
      ],
    },
  ];

  const relatedLinks = [
    { label: 'AI Productivity Prompts', href: '/ai-productivity-prompts' },
    { label: 'AI Search Engine Prompts', href: '/ai-search-engine-prompts' },
    { label: 'AI Story Generator Prompts', href: '/ai-story-generator-prompts' },
    { label: 'Bing AI Image Generator Prompts', href: '/bing-ai-image-generator-prompts' },
    { label: 'Perchance AI Prompts', href: '/perchance-ai-prompts' },
    { label: 'AI Prompts for Education', href: '/ai-prompts-for-education' },
    { label: 'AI Text Generator Prompts', href: '/ai-text-generator-prompts' },
    { label: 'AI Homework Prompts', href: '/ai-homework-prompts' },
  ];

  const faqs = [
    {
      question: 'What makes a good AI chatbot prompt?',
      answer: 'A good chatbot prompt is clear, specific about the desired output format, includes context about who the chatbot represents, defines the tone and personality, and handles edge cases. The best prompts provide examples of desired responses.',
    },
    {
      question: 'Can I use these prompts with any AI chatbot?',
      answer: 'Most of these prompts work with major AI chatbots like ChatGPT, Claude, Gemini, and others. However, some advanced prompts may need minor adjustments depending on the model you use and its specific capabilities.',
    },
    {
      question: 'How do I customize these prompts for my business?',
      answer: 'Start by identifying your specific use case, then modify the context and examples in the prompt to match your business. Replace generic terms with your actual products or services, and adjust the tone to match your brand voice.',
    },
    {
      question: 'What should I avoid when creating chatbot prompts?',
      answer: 'Avoid vague instructions, missing context about the chatbot role, contradictory requirements, and unclear output formats. Also avoid prompts that could generate inappropriate content or violate user privacy.',
    },
    {
      question: 'How long should an AI chatbot prompt be?',
      answer: 'There is no strict length requirement. A good chatbot prompt can range from 50 to 500+ words depending on complexity. Prioritize clarity and specificity over brevity. Include examples if they help clarify the expected behavior.',
    },
    {
      question: 'Can chatbot prompts be used for customer support automation?',
      answer: 'Yes, chatbot prompts are excellent for customer support automation. They help define how the chatbot should handle inquiries, escalate issues, provide accurate information, and maintain a helpful, professional tone throughout conversations.',
    },
    {
      question: 'How do I test if a chatbot prompt is working well?',
      answer: 'Test with various user inputs, edge cases, and questions that are outside the normal scope. Review the chatbot responses for accuracy, tone alignment, and helpfulness. Iterate based on real user feedback.',
    },
    {
      question: 'Should chatbot prompts include safety guidelines?',
      answer: 'Absolutely. Include clear guidelines about what the chatbot should and should not discuss, how to handle sensitive topics, when to escalate to human agents, and policies around data privacy and security.',
    },
    {
      question: 'How can I make my chatbot sound more human-like?',
      answer: 'Include instructions about conversational style, appropriate use of casual language, personality traits, and how to acknowledge user emotions. Avoid overly formal language and encourage natural responses that match your brand.',
    },
    {
      question: 'What role does context play in chatbot prompts?',
      answer: 'Context is critical. It helps the chatbot understand the conversation history, user needs, and business objectives. Providing rich context leads to more relevant, accurate, and helpful responses from the AI.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <MessageCircle className="text-[#3B82F6]" size={28} />
            <span className="text-xs font-semibold text-gray-500 uppercase">AI Chatbot Prompts</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            30+ AI Chatbot <span className="text-[#3B82F6]">Prompts</span>
          </h1>
          <p className="text-lg text-gray-400 mb-6 max-w-2xl">
            Discover high-quality prompts designed for customer service, lead generation, content creation, learning, and engagement. Build responsive, helpful, and intelligent chatbots with our proven prompt templates.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-gray-300">
              30+ Detailed Prompts
            </span>
            <span className="px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-gray-300">
              5 Categories
            </span>
            <span className="px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-gray-300">
              Ready to Use
            </span>
          </div>
        </div>

        {sections.map((section) => {
          const IconComponent = section.icon;
          return (
            <div key={section.id} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <IconComponent className="text-[#3B82F6]" size={28} />
                <div>
                  <h2 className="text-2xl font-bold text-gray-100">{section.title}</h2>
                  <p className="text-sm text-gray-400 mt-1">{section.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.prompts.map((prompt, idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-semibold text-[#3B82F6] mb-2">{prompt.title}</h3>
                    <CopyCard prompt={prompt.prompt} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="my-16 border-t border-[#2a2a2a] pt-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="my-16 border-t border-[#2a2a2a] pt-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-8">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#3B82F6] transition-colors"
              >
                <span className="text-sm font-medium text-gray-300 hover:text-[#3B82F6] transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}