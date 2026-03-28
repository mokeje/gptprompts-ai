"use client";

import { useState } from "react";
import { Copy, Check, ChevronDown, ChevronUp, Palette, Sparkles, Zap, BookOpen, Settings } from "lucide-react";

const accent = "#10A37F";

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="p-4 rounded-lg border transition-all duration-300 hover:border-opacity-100 bg-[#1a1a1a] border-[#2a2a2a] hover:border-[#10A37F]"
      style={{
        borderColor: copied ? accent : undefined,
      }}
    >
      <p className="text-sm text-gray-300 mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-xs font-medium transition-all duration-200"
        style={{
          color: copied ? accent : "#10A37F",
        }}
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied!
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
};

const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#2a2a2a] rounded-lg p-4 hover:border-[#10A37F] transition-colors duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <h3 className="font-medium text-gray-100">{question}</h3>
        {isOpen ? (
          <ChevronUp size={20} style={{ color: accent }} />
        ) : (
          <ChevronDown size={20} className="text-gray-500" />
        )}
      </button>
      {isOpen && (
        <p className="text-sm text-gray-400 mt-3 leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

const faqItems = [
  {
    question: "What&apos;s the difference between DALL-E 3 and DALL-E 2 in ChatGPT?",
    answer:
      "DALL-E 3 offers significantly improved image quality, better understanding of nuanced prompts, and stronger text rendering within images. It also has better alignment with user intent and generates images with more natural proportions and realistic details.",
  },
  {
    question: "Can I use ChatGPT image generation for commercial purposes?",
    answer:
      "Yes, with ChatGPT Plus or Team subscriptions, you own the images you generate and can use them commercially. However, free-tier users have more limited rights. Always check your subscription terms for the most current commercial usage rights.",
  },
  {
    question: "How do I get better results from image generation prompts?",
    answer:
      "Be specific about style, composition, lighting, and mood. Include details about camera angles, artistic medium (e.g., oil painting, photography), color palette, and any specific influences or references. More detailed prompts generally produce better results.",
  },
  {
    question: "What prompts work best for generating product mockups and renders?",
    answer:
      "Include specific details: product placement, background context, lighting conditions, materials (matte, glossy, metallic), and viewing angle. Reference professional product photography styles and specify if you want 3D rendering, lifestyle shot, or flat-lay style.",
  },
  {
    question: "Can ChatGPT generate images with specific text or logos?",
    answer:
      "ChatGPT has improved text rendering in images, but it&apos;s still not perfect for complex text or custom logos. For text-heavy designs, it&apos;s more reliable with short, simple text. For logos, consider providing detailed descriptions rather than expecting exact reproductions.",
  },
  {
    question: "How do I describe art styles effectively in prompts?",
    answer:
      "Reference specific artists, art movements (impressionism, surrealism), mediums (watercolor, acrylic, digital art), and art periods. You can also use descriptive terms like &apos;hyper-realistic,&apos; &apos;minimalist,&apos; or &apos;art deco.&apos; Combining multiple style references often produces interesting blends.",
  },
  {
    question: "What&apos;s the best way to generate consistent character designs?",
    answer:
      "Describe the character in detail: age, appearance, clothing style, distinctive features, and pose. Use consistent terminology across prompts (same name, role, physical descriptors). DALL-E 3 is improving at consistency, but results may still vary between generations.",
  },
  {
    question: "Can I generate images in specific aspect ratios or dimensions?",
    answer:
      "ChatGPT supports different aspect ratios (square, landscape, portrait). You can request specific ratios in your prompt, and the system will generate images accordingly. Check the platform for current supported dimensions and format options.",
  },
  {
    question: "How do I generate images with a specific color palette?",
    answer:
      "Mention color names or hex codes in your prompt (e.g., &apos;dominated by teals and warm oranges&apos; or &apos;in shades of blue and gold&apos;). You can also reference color schemes from art movements or design styles to guide the generation.",
  },
  {
    question: "What are the best prompts for generating backgrounds and textures?",
    answer:
      "Describe the atmosphere, lighting, weather conditions, and environment in detail. Use adjectives like &apos;moody,&apos; &apos;serene,&apos; &apos;dramatic,&apos; and reference specific locations or natural phenomena. Texture words like &apos;rough,&apos; &apos;weathered,&apos; and &apos;pristine&apos; help too.",
  },
  {
    question: "How can I generate professional headshots or portraits?",
    answer:
      "Specify portrait type (headshot, half-body, full-body), pose, expression, lighting style (soft studio light, dramatic side lighting), background, and clothing. Reference photography styles like &apos;corporate headshot,&apos; &apos;editorial portrait,&apos; or &apos;candid lifestyle photography.&apos;",
  },
  {
    question: "Can I iterate on generated images to improve them?",
    answer:
      "Yes, you can use ChatGPT&apos;s conversation history to refine prompts based on previous generations. Describe what you liked or didn&apos;t like about the previous image and adjust your next prompt accordingly. DALL-E 3 handles iterative refinement well.",
  },
];

export default function ChatGPTImageGenerationPromptsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "ChatGPT Image Generation Prompts",
            description:
              "Master ChatGPT&apos;s DALL-E 3 image generation with expertly crafted prompts for product design, character creation, and visual content.",
            image: "https://gptprompts.ai/og-chatgpt-image-generation.jpg",
            datePublished: "2026-03-28",
            dateModified: "2026-03-28",
            author: {
              "@type": "Organization",
              name: "GPT Prompts AI",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      {/* Hero Section */}
      <div className="border-b border-[#2a2a2a] bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex items-center gap-3 mb-4">
            <Palette size={32} style={{ color: accent }} />
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold border"
              style={{
                borderColor: accent,
                color: accent,
                backgroundColor: `${accent}15`,
              }}
            >
              Image Generation
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            ChatGPT Image Generation Prompts
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-6">
            Create stunning visuals with DALL-E 3. Master the art of visual prompting with expertly crafted examples for product design, character creation, artwork, and professional photography.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="px-6 py-3 rounded-lg font-medium transition-all duration-200 border"
              style={{
                borderColor: accent,
                color: accent,
                backgroundColor: `${accent}15`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = accent;
                e.currentTarget.style.color = "#0a0a0a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = `${accent}15`;
                e.currentTarget.style.color = accent;
              }}
            >
              Start Generating
            </button>
            <button
              className="px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-[#2a2a2a] text-gray-300 hover:border-[#10A37F] hover:text-[#10A37F]"
            >
              View Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* Product & Design */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Zap size={24} style={{ color: accent }} />
            <h2 className="text-2xl font-bold">Product & Design Visualization</h2>
          </div>
          <div className="grid gap-4">
            <CopyCard
              prompt="Professional product render of [product name]. Isometric 3D view, clean white background, soft studio lighting, materials look [material description], highly detailed, photorealistic, product photography style, 8K quality"
            />
            <CopyCard
              prompt="Lifestyle product mockup showing [product] being used in [context]. Natural lighting, realistic environment, warm color grading, professional photography, shallow depth of field, lifestyle brand aesthetic"
            />
            <CopyCard
              prompt="Detailed close-up of [product] texture and craftsmanship. Macro photography style, dramatic side lighting highlighting materials and details, shallow focus, professional product photography, premium look"
            />
          </div>
        </section>

        {/* Character & Illustration */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Sparkles size={24} style={{ color: accent }} />
            <h2 className="text-2xl font-bold">Character & Illustration Design</h2>
          </div>
          <div className="grid gap-4">
            <CopyCard
              prompt="Character design of [character description]. Full body illustration, [art style], intricate clothing and accessories, [color palette], professional character design, detailed facial features, dynamic pose, RPG art style"
            />
            <CopyCard
              prompt="Concept art of [character concept]. Multiple style references: [artist 1], [artist 2], [artist 3]. Digital painting, fantasy or sci-fi art, atmospheric lighting, professional game asset quality, detailed environment"
            />
            <CopyCard
              prompt="Cute [character type] mascot design. Kawaii style, soft colors, friendly expression, rounded shapes, design suitable for branding, professional illustration, vector art inspired, scalable design aesthetic"
            />
          </div>
        </section>

        {/* Artistic & Creative */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={24} style={{ color: accent }} />
            <h2 className="text-2xl font-bold">Artistic & Creative Works</h2>
          </div>
          <div className="grid gap-4">
            <CopyCard
              prompt="Surreal digital art piece: [description of surreal concept]. Inspired by [artist names], impossible geometry, dreamlike atmosphere, vibrant color palette, detailed and intricate, 8K resolution, fine art print quality"
            />
            <CopyCard
              prompt="Abstract artwork titled &apos;[title]&apos; expressing [emotion/concept]. Color palette: [colors], medium: [watercolor/acrylic/digital], gestural brushstrokes, modern art gallery quality, contemporary fine art style"
            />
            <CopyCard
              prompt="Landscape painting of [location/scene]. [Art movement or style], golden hour lighting, atmospheric perspective, [specific artistic influences], oil painting texture, museum quality, serene mood"
            />
          </div>
        </section>

        {/* Photography & Portraits */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Settings size={24} style={{ color: accent }} />
            <h2 className="text-2xl font-bold">Photography & Portraits</h2>
          </div>
          <div className="grid gap-4">
            <CopyCard
              prompt="Professional corporate headshot of [person description]. Studio lighting, neutral background, crisp focus, flattering angles, professional business attire, confident expression, high-quality photography, editorial style"
            />
            <CopyCard
              prompt="Editorial fashion photograph. Model wearing [clothing description], [location/setting], [lighting style], fashion magazine aesthetic, professional photography, color grading, fashion editorial quality, movement and pose"
            />
            <CopyCard
              prompt="Environmental portrait of [character]. Shot in [environment], natural window lighting, documentary photography style, candid moment, warm color grading, shallow depth of field, storytelling composition"
            />
          </div>
        </section>

        {/* UI & Design Elements */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Palette size={24} style={{ color: accent }} />
            <h2 className="text-2xl font-bold">UI & Design Elements</h2>
          </div>
          <div className="grid gap-4">
            <CopyCard
              prompt="Website hero section mockup for [type of business]. Modern design, [color scheme], clean layout, professional typography, hero image showing [concept], premium brand aesthetic, responsive design concept"
            />
            <CopyCard
              prompt="App interface design mockup. [App type] featuring [key features], minimalist design, [color palette], clear hierarchy, iOS/Android style guidelines, dark mode aesthetic, high-fidelity design concept"
            />
            <CopyCard
              prompt="Icon set design showing [functionality]. Flat design style, [color], consistent line weight, scalable SVG aesthetic, professional icon pack quality, modern design language, suitable for [use case]"
            />
          </div>
        </section>

        {/* Marketing & Social */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Zap size={24} style={{ color: accent }} />
            <h2 className="text-2xl font-bold">Marketing & Social Content</h2>
          </div>
          <div className="grid gap-4">
            <CopyCard
              prompt="Social media post design for [platform]. [Color scheme], typography-forward design, engaging visuals, brand consistency, [specific messaging], modern design trend, eye-catching composition, shareable quality"
            />
            <CopyCard
              prompt="Email header design for [campaign type]. [Brand aesthetic], professional layout, compelling hero image, hierarchy-focused design, [color palette], email template quality, conversion-optimized composition"
            />
            <CopyCard
              prompt="Promotional poster for [event/product]. Bold typography, [visual concept], attention-grabbing design, hierarchy and flow, [color scheme], professional print quality, memorable composition, call-to-action focus"
            />
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t border-[#2a2a2a]">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQ key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>

      {/* Related Pages */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t border-[#2a2a2a]">
        <h2 className="text-2xl font-bold mb-8">Related Prompt Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "ChatGPT Prompts", href: "/chatgpt-prompts" },
            { title: "Grok AI Prompts", href: "/grok-prompts" },
            { title: "Claude Prompts", href: "/claude-prompts" },
            { title: "Cursor AI Prompts", href: "/cursor-ai-prompts" },
            { title: "GitHub Copilot Prompts", href: "/github-copilot-prompts" },
            { title: "Google Gemini Prompts", href: "/gemini-prompts" },
            { title: "Perplexity AI Prompts", href: "/perplexity-prompts" },
            { title: "Midjourney Prompts", href: "/midjourney-prompts" },
          ].map((page) => (
            <a
              key={page.href}
              href={page.href}
              className="p-4 rounded-lg border border-[#2a2a2a] text-gray-300 hover:text-white transition-all duration-200"
              style={{
                borderColor: "#2a2a2a",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2a2a2a";
              }}
            >
              <span className="font-medium text-sm">{page.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="border-t border-[#2a2a2a] bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Create?</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Use these prompts as starting points and customize them for your unique vision. The best results come from iteration and refinement.
          </p>
          <button
            className="px-6 py-3 rounded-lg font-medium transition-all duration-200 border"
            style={{
              borderColor: accent,
              color: "#0a0a0a",
              backgroundColor: accent,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Open ChatGPT
          </button>
        </div>
      </div>
    </div>
  );
}
