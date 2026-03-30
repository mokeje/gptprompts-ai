'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Copy, Check, ChevronDown } from 'lucide-react';

const accentColor = '#6366F1';

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#6366F1]/50 transition">
      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-[#6366F1] hover:text-[#6366F1]/80 transition text-sm"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What is Ideogram AI and how does it specialize in text generation?',
      a: 'Ideogram AI is an advanced AI image generation platform that specializes in creating images with accurate, readable text integrated seamlessly into visual designs. Unlike most image generation tools that struggle with text rendering, Ideogram excels at placing typography exactly where you want it, making it ideal for creating posters, social media graphics, book covers, and marketing materials. The platform understands typography, font styles, and text placement with remarkable precision, allowing designers to generate professional-quality designs without extensive post-production editing.'
    },
    {
      q: 'Can I use Ideogram images commercially?',
      a: 'Yes, images created with Ideogram AI can be used for commercial purposes, including marketing materials, merchandise, social media content, and client work. However, you should review Ideogram\'s current terms of service and licensing agreements to understand any specific restrictions or requirements. Generally, generated images are available for commercial use, though premium features or certain subscription tiers may have different commercial licensing terms. Always consult their documentation for the most current commercial usage guidelines.'
    },
    {
      q: 'What makes Ideogram different from other text-to-image generators?',
      a: 'Ideogram\'s primary differentiator is its exceptional ability to render readable, stylized text within images. While tools like DALL-E and Midjourney struggle with text generation, Ideogram handles typography with precision, making it the go-to choice for designers creating text-heavy visuals. It also offers strong control over design aesthetics, composition, and visual hierarchy. The platform understands design principles intuitively, making it particularly effective for professional design work where text placement and readability are non-negotiable.'
    },
    {
      q: 'What file formats and resolutions does Ideogram support?',
      a: 'Ideogram generates high-quality images in PNG format with transparent backgrounds or JPG with solid backgrounds, depending on your selection. The platform supports various aspect ratios and resolutions suitable for different use cases: square (1:1) for social media posts and profiles, rectangular (16:9) for website headers, and tall (9:16) for story formats and pins. You can download images at high resolution, typically suitable for both web and print applications up to standard poster and merchandise sizes.'
    },
    {
      q: 'How long does it take to generate an image with Ideogram?',
      a: 'Ideogram typically generates images within 30 seconds to 2 minutes depending on complexity and current server load. Simple prompts with clear design direction usually process faster, while complex multi-element designs with specific text requirements may take slightly longer. During peak hours, processing times can extend to 3-4 minutes. Most users find the generation speed reasonable for iterative design work, as you can quickly generate multiple variations and compare them side by side.'
    },
    {
      q: 'How do I write effective prompts for Ideogram to get the best text results?',
      a: 'Effective Ideogram prompts should include specific details about text content, font style, size, placement, and color. Be explicit about what words or phrases should appear and their positioning within the composition. Include design style descriptors like "minimalist," "bold," "elegant," or "playful." For example, instead of "create a poster," try "modern poster with large bold white text reading \'Summer Sale\' at top, product image centered, rose gold accent color, clean sans-serif font." Specify background elements, color palette, overall mood, and desired design trend to maximize results quality.'
    },
    {
      q: 'Can Ideogram handle multiple languages and special characters?',
      a: 'Ideogram can generate text in multiple languages including English, Spanish, French, German, Chinese, Japanese, Arabic, and many others. However, quality and consistency may vary depending on language complexity and special character requirements. For optimal results with non-Latin scripts or complex character sets, provide clear style specifications and consider testing with simpler prompts first. For multilingual projects, you may need to generate multiple versions if text rendering isn\'t perfect on the first attempt.'
    },
    {
      q: 'What are the best use cases for Ideogram in professional design?',
      a: 'Ideogram excels at creating book covers, social media graphics with promotional text, poster designs, website headers, email marketing graphics, packaging mockups, infographic layouts, presentation slides, and branded merchandise designs. It\'s particularly valuable for rapid design iteration where clients request multiple variations with different copy or messaging. Ideogram dramatically reduces the time spent on typography positioning and text rendering, allowing designers to focus on creative direction and layout composition while the AI handles the technical execution of readable, beautiful text.'
    },
    {
      q: 'How does Ideogram handle complex design compositions?',
      a: 'Ideogram handles complex compositions well when you provide detailed, structured prompts. Break down visual hierarchy clearly: specify what elements should be prominent, background elements, color relationships, and focal points. Use design terminology like "rule of thirds," "centered composition," "left-aligned layout," or "split-screen design" to guide the output. For highly complex multi-layer designs, consider generating components separately and composing them in post-production, or use Ideogram\'s variation feature to iterate toward your ideal composition.'
    },
    {
      q: 'Which subscription tier should I choose for professional design work?',
      a: 'For professional design work, consider Ideogram\'s paid subscription tiers that offer higher monthly generation limits, faster processing, and access to advanced features. The investment typically pays off quickly if you\'re generating multiple designs weekly for clients or campaigns. Evaluate your monthly needs: how many designs, what resolution requirements, and whether you need priority processing during peak hours. Many professional designers find mid-tier or premium plans offer the best balance of affordability and capability for regular commercial design workflows.'
    },
    {
      q: 'Can I edit Ideogram images after generation?',
      a: 'Absolutely. Ideogram images are standard PNG or JPG files that work seamlessly with any design software including Adobe Creative Suite, Figma, Canva, and open-source alternatives like GIMP. Most professional designers use Ideogram outputs as design foundations, then enhance them with additional elements, color grading, effects, shadow refinement, or integration with other design components. The AI-generated text and core composition serve as your starting point, allowing you to add the finishing touches that make designs truly unique and production-ready.'
    }
  ];

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <button
          key={idx}
          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#6366F1]/50 transition text-left"
        >
          <div className="flex justify-between items-start gap-4">
            <h3 className="font-semibold text-white pr-4">{faq.q}</h3>
            <ChevronDown
              size={20}
              className={`text-[#6366F1] flex-shrink-0 transition ${openIndex === idx ? 'rotate-180' : ''}`}
            />
          </div>
          {openIndex === idx && (
            <p className="text-gray-300 text-sm mt-3 leading-relaxed">{faq.a}</p>
          )}
        </button>
      ))}
    </div>
  );
};

export default function IdeogramAIPromptsPage() {
  const prompts = {
    typography: [
      'Modern minimalist logo design with company name "TechFlow" in sleek, geometric sans-serif font, white text on deep navy background, subtle gradient accent in indigo, centered composition, clean professional branding, 2024 design trend',
      'Elegant serif typography poster featuring quote "Create Without Limits" in flowing, sophisticated cursive font, warm gold text on cream background, delicate floral decorative elements, ornate frame border, 3:2 aspect ratio, luxury aesthetic',
      'Bold street-style typography design with word "UPRISING" in massive, distressed geometric font, multi-colored gradient effect from violet to indigo, urban graffiti style background, modern youth culture vibe, dramatic composition'
    ],
    posterDesign: [
      'Vibrant concert poster for electronic music festival: bold event title at top in metallic font, artist names positioned prominently, neon color scheme with purples and magentas, dynamic geometric shapes in background, date and venue information clearly visible, modern festival aesthetic, 27x40 inch poster format',
      'Minimalist movie poster design: protagonist silhouette as focal point, movie title in elegant typography centered below, release date and critical quotes integrated into design, deep teal and gold color palette, empty space used effectively, professional cinema aesthetic, square format',
      'Sport event promotional poster: dynamic athlete action image in center, event name in bold sans-serif at top, registration details and date in smaller but readable text, energetic color scheme with blues and oranges, motivational messaging, competitive spirit emphasized'
    ],
    socialMediaGraphics: [
      'Instagram story graphic for coffee shop: steaming coffee cup in center, promotional text "New Seasonal Blend" in modern sans-serif, discount percentage displayed prominently, warm brown and cream color palette, rounded corners, call-to-action button style at bottom, 1080x1920 vertical format',
      'LinkedIn post design announcing company milestone: bold "5 Years Strong" headline, achievement timeline graphics, company logo integrated, professional navy and gold color scheme, team photo background subtle, inspirational message, 1200x627 rectangle format',
      'TikTok thumbnail: vibrant contrasting colors (hot pink background), eye-catching emoji text overlay "WAIT FOR END", bold sans-serif title at top, high contrast for small-screen visibility, trending design elements, 1280x720 format'
    ],
    infographicDesign: [
      'Data visualization infographic showing market growth: vertical bar chart with annual data labeled clearly, percentage increases highlighted in bold typography, gradient color scheme from teal to indigo, icons accompanying each data point, descriptive labels for each segment, professional analytical appearance',
      'Process flow infographic: 5-step workflow illustrated with clear numbered steps, icons representing each phase, connecting arrows and lines, explanatory text beside each step in readable font, color-coded sections, left-to-right directional flow, modern flat design style',
      'Educational infographic about sustainability: circular economy diagram with text labels, environmental statistics integrated throughout, color scheme using greens and teals, icons for solar energy, recycling, water conservation, hierarchical information organization, engaging visual narrative'
    ]
  };

  const allPrompts = [
    ...prompts.typography,
    ...prompts.posterDesign,
    ...prompts.socialMediaGraphics,
    ...prompts.infographicDesign
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ideogram AI Prompts: Text-in-Image Design Excellence',
    description: 'Master text-in-image AI design with expertly crafted Ideogram prompts. Learn techniques for typography, posters, social media graphics, and infographics with readable, professional text.',
    author: {
      '@type': 'Organization',
      name: 'GPTPrompts.AI'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Ideogram AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ideogram AI is an advanced AI image generation platform that specializes in creating images with accurate, readable text integrated seamlessly into visual designs.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use Ideogram images commercially?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, images created with Ideogram can be used commercially, including marketing materials, merchandise, and client work, subject to their terms of service.'
        }
      }
    ]
  };

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-b border-[#333] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block bg-[#6366F1]/10 border border-[#6366F1]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#6366F1] text-sm font-medium">Text-in-Image AI</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">Ideogram AI Prompts</h1>
          <p className="text-xl text-gray-300 mb-6">Master text-in-image AI design with expertly crafted Ideogram prompts. Create stunning graphics with perfectly rendered typography, professional posters, social media content, and data visualizations.</p>
          <div className="flex flex-wrap gap-3">
            {['Typography', 'Poster Design', 'Social Media', 'Infographics'].map((tag) => (
              <span key={tag} className="bg-[#333] text-gray-300 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#6366F1] rounded"></span>
            Typography Design Prompts
          </h2>
          <p className="text-gray-300 mb-8">Create stunning typography designs where text is the focal point. These prompts leverage Ideogram\'s exceptional text rendering capabilities to produce logos, title designs, and text-focused graphics with precise font control and visual hierarchy.</p>
          <div className="space-y-4">
            {prompts.typography.map((prompt, idx) => (
              <CopyCard key={idx} prompt={prompt} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#6366F1] rounded"></span>
            Poster Design
          </h2>
          <p className="text-gray-300 mb-8">Generate professional, eye-catching posters for events, movies, products, and campaigns. These prompts include specific aspect ratios, typography placement, color schemes, and design elements that work perfectly at poster scale with readable, impactful text.</p>
          <div className="space-y-4">
            {prompts.posterDesign.map((prompt, idx) => (
              <CopyCard key={idx} prompt={prompt} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#6366F1] rounded"></span>
            Social Media Graphics
          </h2>
          <p className="text-gray-300 mb-8">Create platform-specific social media graphics optimized for Instagram, LinkedIn, TikTok, and other platforms. These prompts include proper aspect ratios, text sizing for mobile visibility, and design trends that perform well on social channels while maintaining readable typography.</p>
          <div className="space-y-4">
            {prompts.socialMediaGraphics.map((prompt, idx) => (
              <CopyCard key={idx} prompt={prompt} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#6366F1] rounded"></span>
            Infographic Design
          </h2>
          <p className="text-gray-300 mb-8">Generate data-rich infographics that combine visual information hierarchy with clear, readable typography. These prompts create educational, analytical, and process-oriented graphics where text labels and statistics integrate seamlessly with illustrative elements.</p>
          <div className="space-y-4">
            {prompts.infographicDesign.map((prompt, idx) => (
              <CopyCard key={idx} prompt={prompt} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] border-y border-[#333] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <FAQ />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Related AI Design Tools</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { href: '/canva-prompts', label: 'Canva Prompts' },
            { href: '/adobe-firefly-prompts', label: 'Adobe Firefly Prompts' },
            { href: '/dalle-3-prompts', label: 'DALL-E 3 Prompts' },
            { href: '/midjourney-prompts', label: 'Midjourney Prompts' },
            { href: '/image-prompts', label: 'Image Prompts' },
            { href: '/font-design-prompts', label: 'Font Design Prompts' },
            { href: '/design-tools-prompts', label: 'Design Tools Prompts' },
            { href: '/poster-prompts', label: 'Poster Prompts' }
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#6366F1]/50 transition"
            >
              <span className="text-[#6366F1] hover:text-[#6366F1]/80 transition">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
