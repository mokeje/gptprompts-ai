'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp, Image, Palette, Sparkles, Zap, Users } from 'lucide-react';

const BingAIImageGeneratorPage = () => {
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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-cyan-500/50 transition-colors">
      <p className="text-gray-200 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={() => handleCopyPrompt(id, prompt)}
        className="inline-flex items-center gap-2 px-3 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded text-sm transition-colors"
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
          <ChevronUp size={18} className="text-cyan-400 flex-shrink-0" />
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
      title: 'Photorealistic & Portrait Generation',
      icon: Image,
      prompts: [
        'A professional headshot of a 35-year-old woman with warm brown eyes, soft natural lighting, professional attire, studio background with neutral tones, ultra high resolution, shot on Canon EOS R5',
        'A hyperrealistic photograph of an elderly man in traditional cultural clothing, candid expression showing wisdom and character, warm golden hour lighting, shallow depth of field, award-winning portrait photography',
        'A cinematic full-body photograph of a young professional man in business casual attire standing in a modern office with floor-to-ceiling windows, natural sunlight streaming in, premium fashion photography style',
        'A detailed close-up portrait of a woman with intricate jewelry and makeup, studio lighting with catch lights in the eyes, fashion editorial quality, 85mm lens simulation',
        'A full-length photograph of a fit young woman in athletic wear in a bright gym environment, natural posing, professional sports photography lighting, vibrant and energetic mood',
        'An authentic candid family portrait of five people of diverse backgrounds laughing together outdoors, golden hour lighting, natural and genuine emotions, magazine cover quality'
      ]
    },
    {
      title: 'Artistic & Creative Styles',
      icon: Palette,
      prompts: [
        'An oil painting in the style of Van Gogh depicting a starry night over a modern city skyline, thick impasto brushstrokes, swirling patterns, vibrant blues and yellows, expressive and dynamic composition',
        'A digital illustration in the style of Studio Ghibli featuring a young woman in a magical forest with bioluminescent creatures, soft pastel colors, whimsical and dreamy atmosphere, detailed background',
        'An abstract watercolor artwork combining geometric shapes with fluid organic forms, cool blues and warm oranges, contemporary art gallery style, high artistic quality',
        'A pencil sketch in realistic graphite style depicting an urban street scene with detailed architecture, strong shadows and highlights, intricate line work, professional illustration quality',
        'A pop art styled image of a woman\'s face with bold contrasting colors, Andy Warhol inspired, vibrant primary colors, high contrast silkscreen effect, modern and eye-catching',
        'A 3D rendered concept art of a fantastical steampunk airship with intricate mechanical details, dramatic lighting, sci-fi illustration style, richly detailed environment'
      ]
    },
    {
      title: 'Product & Commercial Photography',
      icon: Sparkles,
      prompts: [
        'A professional product photograph of a luxury smartwatch displayed on an elegant surface with minimalist styling, soft directional lighting, clean white background, premium commercial photography',
        'A flat-lay composition of beauty products including skincare bottles, brushes, and cosmetics artfully arranged with flowers and natural elements, bright and airy natural lighting, lifestyle photography style',
        'A high-end fashion product shot of a designer handbag photographed from multiple angles with professional studio lighting, dramatic shadows, luxury brand photography aesthetic',
        'A detailed product photograph of a premium coffee maker surrounded by coffee beans and fresh coffee cup, warm moody lighting, food and beverage commercial photography quality',
        'An overhead shot of packaged gourmet food items arranged aesthetically with fresh ingredients, natural soft lighting, professional food packaging photography',
        'A lifestyle product photograph showing a smartwatch being worn by a professional during work, contextual setting in a modern office, natural daylight, commercial brand photography'
      ]
    },
    {
      title: 'Landscapes & Environmental Scenes',
      icon: Zap,
      prompts: [
        'A breathtaking landscape photograph of snow-capped mountain peaks at sunrise with dramatic clouds, golden light illuminating the peaks, pristine wilderness, National Geographic quality photography',
        'A serene coastal scene at golden hour with golden sand beach, turquoise water, distant cliffs, soft warm lighting, travel photography style, cinematic composition',
        'A dense enchanted forest with tall ancient trees, dappled sunlight filtering through the canopy, misty atmospheric ground level perspective, moody and mysterious woodland environment',
        'A vibrant urban cityscape at night with neon lights, busy streets, taxi cabs, rain reflections on pavement, cinematic street photography, noir aesthetic',
        'A panoramic view of rolling hills covered in wildflower fields during spring bloom, soft natural lighting, peaceful pastoral landscape, high resolution scenic photography',
        'An aerial drone photograph of a winding river through autumn forest, golden and orange foliage, dramatic landscape composition, natural environmental beauty'
      ]
    },
    {
      title: 'Character & Concept Design',
      icon: Users,
      prompts: [
        'A detailed character concept art of a fantasy warrior woman with intricate armor design, flowing cape, confident powerful stance, rich color palette, professional game character design quality',
        'A character design illustration of a futuristic cyberpunk protagonist with neon accents, detailed outfit design with armor elements, moody atmospheric lighting, concept art style',
        'A cute and expressive anime-style character design of a young mage with detailed clothing, magical aura effects, vibrant colors, character sheet quality illustration',
        'A creature design concept featuring a dragon hybrid character with detailed scales, wings, and expressive features, fantasy art style, professional creature concept art',
        'A minimalist character design of a tech-forward humanoid figure with glowing elements, sleek futuristic styling, simple elegant design, modern illustration',
        'A detailed villain character concept with dramatic features, menacing expression, elaborate costume design, dark color scheme, professional fantasy character artwork'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What image resolutions and dimensions does Bing Image Creator support?',
      answer: 'Bing Image Creator generates images at 1024x1024 pixels by default, which is optimal for various uses. You can request variations by asking for portrait (vertical) or landscape (horizontal) orientations in your prompt. The platform automatically optimizes output for different aspect ratios when specified.'
    },
    {
      question: 'How detailed and specific should my prompts be for best results?',
      answer: 'The most effective prompts include specific details about style, lighting, composition, and intended use. Include information like camera type, lighting conditions, artistic style, mood, and composition. More descriptive prompts typically yield better quality results than generic descriptions.'
    },
    {
      question: 'Can I generate images of real people or celebrities?',
      answer: 'Bing Image Creator restricts generating images of real, identifiable people including celebrities and public figures. You can generate fictional characters, original portraits, or generic people descriptions, but not specific real individuals.'
    },
    {
      question: 'What are the copyright and usage rights for generated images?',
      answer: 'Images generated through Bing Image Creator are generally yours to use, though you should review Microsoft\'s terms of service for specific commercial use restrictions. You cannot use generated images to create competing image generation products or for large-scale commercial products without verification.'
    },
    {
      question: 'How can I improve image quality and consistency across multiple generations?',
      answer: 'Use consistent descriptive elements across prompts, be specific about artistic style and technical specifications, reference known artists or styles you want emulated, and specify lighting and mood clearly. Regenerate images multiple times to get variations and select the best results.'
    },
    {
      question: 'Are there any subjects or content I should avoid in my prompts?',
      answer: 'Avoid prompts requesting violent or graphic content, sexual material, illegal activities, or hate speech. Also avoid specific real people, copyrighted characters in detail, and content that violates platform policies. Focus on creative and constructive image generation requests.'
    },
    {
      question: 'How do I describe lighting and atmosphere effectively?',
      answer: 'Use specific lighting terminology like golden hour, studio lighting, soft diffused light, dramatic backlighting, or neon glow. Describe time of day, weather conditions, and atmospheric effects. Specify color temperature (warm, cool, neutral) and shadow intensity for precise atmospheric control.'
    },
    {
      question: 'What\'s the best way to specify artistic style and medium?',
      answer: 'Name specific artists (Van Gogh, Pixar), art movements (Art Deco, Impressionism), or mediums (oil painting, watercolor, digital illustration). You can combine styles like "oil painting in the style of Renaissance with modern color palette" for unique creative directions.'
    },
    {
      question: 'Can I use generated images for commercial projects and products?',
      answer: 'Yes, but review Microsoft\'s licensing terms carefully. You can use generated images for most commercial purposes including websites, marketing materials, and products. However, certain enterprise and large-scale applications may require clarification or different licensing arrangements.'
    },
    {
      question: 'How do I get consistent character designs across multiple image generations?',
      answer: 'Provide detailed character descriptions including distinctive features, clothing, color scheme, and pose in each prompt. Use consistent terminology and add phrases like "same character as before" to maintain visual consistency. Generate multiple variations and select the most consistent results.'
    }
  ];

  const relatedPages = [
    { title: 'AI Chatbot Prompts', href: '/ai-chatbot-prompts' },
    { title: 'AI Productivity Prompts', href: '/ai-productivity-prompts' },
    { title: 'AI Search Engine Prompts', href: '/ai-search-engine-prompts' },
    { title: 'AI Text Generator Prompts', href: '/ai-text-generator-prompts' },
    { title: 'AI Story Generator Prompts', href: '/ai-story-generator-prompts' },
    { title: 'AI Music Generator Prompts', href: '/ai-music-generator-prompts' },
    { title: 'AI Prompts for Education', href: '/ai-prompts-for-education' },
    { title: 'Perchance AI Prompts', href: '/perchance-ai-prompts' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Bing AI Image Generator Prompts',
            description: 'A comprehensive collection of detailed prompts to generate stunning images with Bing Image Creator, covering photorealism, artistic styles, product photography, landscapes, and character design.',
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
            <Image size={32} className="text-cyan-400" />
            <h1 className="text-4xl font-bold text-gray-100">Bing AI Image Generator Prompts</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Unlock the full creative potential of Bing Image Creator with our carefully crafted prompts. From photorealistic portraits to artistic masterpieces, these detailed prompts help you generate stunning images with precision and control.
          </p>
        </div>

        {sections.map((section, sectionIdx) => {
          const Icon = section.icon;
          return (
            <div key={sectionIdx} className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Icon size={24} className="text-cyan-400" />
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
                className="block px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-cyan-500/50 hover:bg-[#1a1a1a] transition-colors text-cyan-400"
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

export default BingAIImageGeneratorPage;
