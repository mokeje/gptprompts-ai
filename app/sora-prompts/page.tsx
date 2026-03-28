'use client';

import React, { useState } from 'react';
import { CopyCard } from '@/components/ui/copy-card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

const SoraPromptsPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | undefined>(undefined);

  const accentColor = '#FF4500';

  const soraPrompts = [
    {
      id: 1,
      section: 'Cinematic & Film Production',
      prompts: [
        'A sweeping aerial shot gliding over a misty mountain valley at golden hour, warm sunlight breaking through the clouds, cinematic depth of field, professional color grading, 4K resolution',
        'A tense action sequence: a masked figure parkours across rooftops at night, neon city lights below, dynamic camera angles, slow-motion transitions, ultra-sharp focus on the protagonist',
        'An intimate dialogue scene between two characters in a dimly lit café, warm overhead lighting, shallow depth of field, cinematic framing at 24fps, emotional facial expressions in sharp focus',
        'A surreal dreamscape: floating crystalline structures morphing and rotating in an ethereal void, bioluminescent colors shifting from purple to blue, smooth camera movements, otherworldly atmosphere',
        'A montage of a sunrise: time-lapse of colors shifting from dark blue to golden orange, clouds moving rapidly across frame, cinematic pan across horizon, professional color grading',
        'A dramatic storm sequence: dark clouds rolling across landscape, lightning flashing, rain falling at an angle, strong wind effects on vegetation, moody atmospheric lighting'
      ]
    },
    {
      id: 2,
      section: 'Product & Commercial Videos',
      prompts: [
        'A sleek tech product being rotated slowly on a white surface, studio lighting, sharp shadows, minimal background, product photography style, luxury brand aesthetic, 60fps for smoothness',
        'Unboxing sequence: hands opening premium packaging, revealing luxury product inside, warm lighting, close-ups of details, satisfying reveal motion, high production value',
        'Lifestyle product demonstration: a person using a smartwatch in everyday activities (walking, exercising, checking time), natural sunlight, candid movements, authentic engagement',
        'Fashion product showcase: rotating camera around a jacket on a mannequin, soft warm lighting, fabric textures visible, boutique display aesthetic, professional fashion photography style',
        'Coffee shop ambiance video: steam rising from freshly poured coffee, latte art in focus, warm café lighting, blurred customers in background, cozy atmosphere, aroma implied through visuals',
        'Travel gear product montage: backpack being packed with items, close-ups of zippers and pockets, outdoor adventure aesthetic, natural lighting, functional product demonstration'
      ]
    },
    {
      id: 3,
      section: 'Nature & Wildlife Documentaries',
      prompts: [
        'A snow leopard stalking prey across rocky mountain terrain, realistic fur details, natural wildlife behavior, documentary cinematography, cool color palette, high altitude setting',
        'Underwater coral reef ecosystem: colorful fish schools moving through coral formations, sunlight filtering from above, realistic water effects, marine life authenticity, vibrant colors',
        'A hummingbird in flight captured at high speed, iridescent feathers catching light, hovering near flowers, shallow depth of field, macro photography style, intricate wing detail',
        'Desert landscape at dusk: golden sand dunes with long shadows, occasional wind gusts affecting sand, warm sunset colors, minimal wildlife, vast empty landscape, contemplative mood',
        'Forest canopy view: sunlight filtering through dense leaves, birds flying through branches, realistic tree movement, dappled lighting, lush green ecosystem, peaceful natural sounds implied',
        'Seasonal migration: birds flying in V-formation across sky at sunset, thousands of birds moving together, dramatic sky colors, natural light and weather patterns, epic scale'
      ]
    },
    {
      id: 4,
      section: 'Abstract & Artistic Visuals',
      prompts: [
        'Liquid paint pouring in slow motion: vibrant reds and blues mixing in water, swirling patterns forming organically, dark background for contrast, hypnotic movement, artistic composition',
        'Sand art creation: hands sculpting intricate sand formations, grains visible in detail, warm beach lighting, artistic process captured, tactile visual experience, meditative pace',
        'Geometric shapes morphing: cubes, spheres, and pyramids transforming into each other, smooth transitions, neon outlines, dark void background, mathematical precision, hypnotic rhythm',
        'Smoke and light interaction: colored smoke flowing through beams of light, particles visible and detailed, dark background, ethereal quality, artistic movement, photorealistic smoke physics',
        'Kaleidoscopic pattern animation: symmetrical designs rotating and expanding, fractals repeating infinitely, vibrant color schemes, mathematical precision, mesmerizing visual effect',
        'Rain on glass: macro shot of water droplets hitting and sliding down glass, reflections of city lights, cool color palette, intimate perspective, meditative atmosphere'
      ]
    },
    {
      id: 5,
      section: 'Storytelling & Emotional Narratives',
      prompts: [
        'A child discovering snow for the first time: wonder in their eyes, playing joyfully, pristine white landscape, warm clothing, golden afternoon light, emotional and heartwarming moment',
        'An elderly couple dancing in their living room, soft warm lighting, genuine connection and affection, candid natural movement, sentimental atmosphere, lifetime of love implied',
        'A young athlete overcoming an obstacle: determined expression, physical effort visible, moment of triumph, energetic music-video style editing, inspirational narrative arc',
        'Urban solitude: a person sitting alone in a crowded train station, introspective moment, surrounded by movement, cool color palette, melancholic mood, human vulnerability',
        'A community coming together: neighbors helping build a structure, teamwork in action, diverse group, warm natural lighting, hopeful tone, human connection and solidarity',
        'Generational moment: grandparent teaching grandchild a skill, patient hands-on instruction, warm intimate lighting, knowledge transfer, emotional depth, legacy being passed down'
      ]
    }
  ];

  const faqItems = [
    {
      id: 'faq-1',
      question: 'What are the technical specifications for Sora videos?',
      answer: 'Sora can generate videos up to 60 seconds long in 1920x1080 (landscape) or 1080x1920 (portrait) formats. The AI can understand complex scenes, maintain character consistency, and render realistic physics. Videos are generated with high-quality visuals suitable for professional use.'
    },
    {
      id: 'faq-2',
      question: 'How do I write effective Sora prompts for consistent results?',
      answer: 'Include specific details about camera angles, lighting conditions, color palettes, emotional tone, and movement. Reference film techniques (e.g., "shallow depth of field," "cinematic framing"). Be descriptive about time of day, weather, and environment. The more specific your prompt, the closer the output matches your vision.'
    },
    {
      id: 'faq-3',
      question: 'Can Sora maintain character consistency across multiple scenes?',
      answer: 'Yes, Sora can maintain character consistency when given detailed descriptions of appearance and context in your prompts. Providing character details upfront (clothing, distinctive features, behavior) helps ensure consistency across generated scenes. Multiple generations may be required to achieve desired consistency.'
    },
    {
      id: 'faq-4',
      question: 'What types of videos is Sora best suited for?',
      answer: 'Sora excels at cinematic shots, product demonstrations, nature footage, lifestyle content, and creative storytelling. It&apos;s ideal for marketing videos, social media content, visual effects reference, storyboarding, and artistic projects. Professional films and complex narrative work typically require post-production refinement.'
    },
    {
      id: 'faq-5',
      question: 'How should I structure prompts for action sequences?',
      answer: 'Describe the camera movement, character actions, environment, lighting, and pacing separately. Use action-oriented verbs ("parkours," "explodes," "sweeps"). Specify speed effects like slow motion or time-lapse. Reference the overall tone (dynamic, intense, fluid) to guide the AI&apos;s interpretation.'
    },
    {
      id: 'faq-6',
      question: 'Can I use Sora-generated videos commercially?',
      answer: 'Yes, content generated through Sora&apos;s official API or platform can be used commercially depending on your subscription tier and usage rights. Always review OpenAI&apos;s current terms of service for commercial use, licensing requirements, and any attribution requirements.'
    },
    {
      id: 'faq-7',
      question: 'What should I avoid in Sora prompts?',
      answer: 'Avoid vague descriptions, conflicting details, overly complex instructions, and unrealistic physics expectations. Don&apos;t request explicit violence, misinformation, or copyrighted material recreation. Avoid prompts that contradict visual logic. Keep requests within technical capabilities (under 60 seconds, realistic physics).'
    },
    {
      id: 'faq-8',
      question: 'How do I iterate and refine Sora video outputs?',
      answer: 'Generate multiple variations of the same prompt with slight adjustments. Isolate variables (change only lighting, camera angle, or pacing). Analyze which elements worked best and build on successful patterns. Use detailed feedback in follow-up prompts to guide refinements toward your target.'
    },
    {
      id: 'faq-9',
      question: 'Can Sora create realistic water, fire, or particle effects?',
      answer: 'Yes, Sora can simulate realistic physics for water, fire, smoke, particles, and other dynamic elements. Results are strongest when you describe these elements clearly (e.g., "water droplets hitting glass," "smoke swirling through light beams"). Complex physics-heavy scenes may need iteration for optimal results.'
    },
    {
      id: 'faq-10',
      question: 'What are best practices for lighting descriptions in Sora prompts?',
      answer: 'Specify light direction (backlighting, side lighting, overhead), quality (soft diffused, harsh shadows), color temperature (warm golden, cool blue), and intensity. Reference time of day and lighting conditions (golden hour, neon, candlelight, overcast). Good lighting descriptions dramatically improve visual quality.'
    }
  ];

  const relatedPages = [
    { title: 'OpenAI Codex Prompts', href: '/openai-codex-prompts', color: '#10A37F' },
    { title: 'AI Agent Prompts', href: '/ai-agent-prompts', color: '#8B5CF6' },
    { title: 'Gemini Advanced Prompts', href: '/gemini-advanced-prompts', color: '#4285F4' },
    { title: 'Email Writing Prompts', href: '/ai-prompts-email-writing', color: '#EA4335' },
    { title: 'ChatGPT Prompts', href: '/chatgpt-prompts', color: '#10A37F' },
    { title: 'Midjourney Prompts', href: '/midjourney-prompts', color: '#8B5CF6' },
    { title: 'Claude Prompts', href: '/claude-prompts', color: '#FF4500' },
    { title: 'GPT-4 Vision Prompts', href: '/gpt-4-vision-prompts', color: '#4285F4' }
  ];

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '100+ Best Sora Video Prompts for Cinematic AI Video Generation',
    description: 'Comprehensive collection of 100+ expert Sora prompts covering cinematic shots, product videos, nature documentaries, abstract visuals, and storytelling. Learn techniques for consistent results.',
    author: {
      '@type': 'Organization',
      name: 'GPT Prompts'
    },
    datePublished: '2024-01-15',
    dateModified: '2025-03-29',
    image: 'https://gptprompts.ai/sora-og-image.jpg'
  };

  const faqSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            100+ Best Sora Video Prompts
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Master the art of AI video generation with curated Sora prompts for cinematic shots, product demos, nature footage, and storytelling
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {soraPrompts.map((section) => (
          <div key={section.id} className="mb-16">
            <h2
              className="text-3xl font-bold mb-8"
              style={{ color: accentColor }}
            >
              {section.section}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {section.prompts.map((prompt, idx) => (
                <CopyCard
                  key={idx}
                  text={prompt}
                  accentColor={accentColor}
                />
              ))}
            </div>
          </div>
        ))}

        {/* FAQ Section */}
        <div className="mt-20 mb-16">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: accentColor }}
          >
            Frequently Asked Questions
          </h2>
          <Accordion
            value={expandedFaq}
            onValueChange={setExpandedFaq}
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-gray-700 mb-4"
              >
                <AccordionTrigger
                  className="text-lg font-semibold hover:text-gray-300"
                  style={{ color: accentColor }}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 mt-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Related Pages */}
        <div className="mt-20">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: accentColor }}
          >
            Explore More Prompt Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPages.map((page, idx) => (
              <Link
                key={idx}
                href={page.href}
                className="p-4 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-200 group"
                style={{
                  borderColor: page.color + '30',
                  backgroundColor: page.color + '05'
                }}
              >
                <span
                  className="font-semibold group-hover:translate-x-1 transition-transform"
                  style={{ color: page.color }}
                >
                  {page.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoraPromptsPage;
