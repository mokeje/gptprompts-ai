'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Copy, Check, ChevronDown } from 'lucide-react';

const accentColor = '#14B8A6';

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#14B8A6]/50 transition">
      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-[#14B8A6] hover:text-[#14B8A6]/80 transition text-sm"
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
      q: 'What is Luma AI and how does it work?',
      a: 'Luma AI is an advanced AI video generation platform that creates high-quality videos from text descriptions, images, and motion sequences. It uses physics-based simulation and neural networks to generate realistic movement, lighting, and cinematic effects. Unlike traditional video generators, Luma excels at creating physically accurate animations with natural motion, making it ideal for product showcases, character animations, and visual effects that maintain consistency and realism throughout the generated video.'
    },
    {
      q: 'Can I generate videos with realistic physics and motion?',
      a: 'Yes, Luma AI specializes in physics-based video generation. It can accurately simulate natural motion, gravity, fluid dynamics, and interaction between objects. When you describe actions like falling, rolling, bouncing, or flowing, Luma generates physically accurate movements rather than just morphing between frames. This makes it particularly effective for product demonstrations, character animations, and any content where realistic physical behavior is important for credibility and viewer engagement.'
    },
    {
      q: 'What are the video length limitations with Luma AI?',
      a: 'Luma AI supports video generation up to approximately 60-120 seconds depending on your subscription tier. Free users can generate shorter clips, typically 5-15 seconds, while premium subscribers access longer generation capabilities. For projects exceeding these limits, creators can generate multiple segments and seamlessly combine them in post-production. Many professionals use this approach for commercials, explainer videos, and longer-form content that requires multiple shots.'
    },
    {
      q: 'How does Luma AI handle character consistency across videos?',
      a: 'Luma AI maintains strong character consistency by learning from initial character descriptions and visual references. When generating character animations, provide detailed descriptions including appearance, clothing, and movement style. For best results across multiple videos, use the same character reference image and descriptive parameters in your prompts. Luma&apos;s consistency features have improved significantly, making it reliable for character-driven narratives and branded content where maintaining visual identity is essential.'
    },
    {
      q: 'What is the ideal prompt structure for Luma AI?',
      a: 'Effective Luma prompts should be specific about movement, physics, camera work, and visual outcomes. Start with scene description, then detail the action or motion sequence, specify camera framing and movement, describe lighting and atmosphere, mention any physics properties (speed, weight, friction), and conclude with style and quality preferences. For example: "A marble rolling down a white staircase, gaining momentum, with dramatic shadows following its path, cinematic lighting, 8 seconds." More detailed prompts yield better physics-accurate results.'
    },
    {
      q: 'Can Luma AI generate abstract and experimental videos?',
      a: 'Absolutely. While Luma excels at realistic scenarios, it also generates stunning abstract and experimental content including particle effects, generative art, color gradients, morphing shapes, and surreal transitions. Its physics engine can create beautiful abstract motion by interpreting poetic or conceptual prompts. Many artists use Luma for visual art, music video backgrounds, and experimental animation. Prompts describing movement, color interaction, and desired mood yield particularly striking abstract results.'
    },
    {
      q: 'How can I use Luma AI for product marketing and e-commerce?',
      a: 'Luma AI is exceptionally useful for product visualization. Create 360-degree product rotations, showcase product features in action, demonstrate how products work, or generate lifestyle videos with products. Its physics accuracy means you can show realistic product interactions like materials deforming, liquids pouring, or components assembling. Many e-commerce brands use Luma to generate hero videos for product pages, social media content, and promotional materials. The realism builds customer confidence in product quality and function.'
    },
    {
      q: 'What video formats and resolutions does Luma AI support?',
      a: 'Luma AI generates videos in MP4 format with support for 1080p Full HD and higher resolutions depending on subscription level. Videos are optimized for various platforms including YouTube, Instagram, TikTok, and website embedding. You can download videos at your preferred resolution and aspect ratio, giving flexibility for different use cases. Higher subscription tiers unlock additional resolution options and faster processing for professional productions requiring premium output quality.'
    },
    {
      q: 'How long does video generation typically take with Luma AI?',
      a: 'Generation time depends on video length and complexity. Simple 5-second videos typically process in 2-4 minutes, while longer or more complex physics simulations may take 10-20 minutes. Processing speed varies during peak usage times. Luma prioritizes quality, so more detailed physics calculations naturally take longer than simpler keyframe-based generation. Most users find the wait time worthwhile given the quality of physics accuracy and visual polish achieved, especially compared to manual 3D animation or video editing.'
    },
    {
      q: 'Can I edit Luma AI videos after generation?',
      a: 'Yes, Luma AI videos are standard MP4 files compatible with any video editor including Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, and free tools like CapCut. Most creators enhance Luma outputs with color grading, sound design, music, text overlays, and additional effects. Many treat Luma videos as a foundational layer, adding professional finishing touches in post-production. The high-quality output from Luma minimizes the post-production effort needed to achieve polished final results.'
    },
    {
      q: 'What subscription tier should I choose for professional use?',
      a: 'For professional projects, consider Luma AI premium tiers that offer longer video generation, higher resolution output, faster processing, and more monthly credits. If you generate 5 or more videos weekly, a premium subscription typically pays for itself through time savings and increased capability. Evaluate your needs around video length, resolution requirements, and processing speed. Many professionals combine smaller free-tier experiments with paid credits for final production videos, optimizing cost while maintaining quality.'
    }
  ];

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <button
          key={idx}
          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#14B8A6]/50 transition text-left"
        >
          <div className="flex justify-between items-start gap-4">
            <h3 className="font-semibold text-white pr-4">{faq.q}</h3>
            <ChevronDown
              size={20}
              className={`text-[#14B8A6] flex-shrink-0 transition ${openIndex === idx ? 'rotate-180' : ''}`}
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

export default function LumaAIPromptsPage() {
  const prompts = {
    cinematicVideos: [
      'A cinematic establishing shot of a futuristic city at dusk, camera pulling back from street level to aerial perspective, neon lights reflecting on wet pavement, flying vehicles passing overhead with motion blur, dramatic color grading with teal and orange tones, 12 seconds, film noir aesthetic, professional camera movement with smooth easing',
      'A luxury car driving along a coastal mountain road at sunset, golden hour lighting, camera following from the side with parallax motion, ocean waves visible in background, vehicle handling curves with realistic physics and tire grip, 10 seconds, premium automotive commercial style, cinematic camera angles and depth of field',
      'An elegant ballroom scene with dancers in motion, camera swirling through the scene, chandeliers catching light, fabric and hair flowing with realistic physics, atmospheric fog and lighting effects, 8 seconds, romantic cinematic mood, dance choreography with natural human movement'
    ],
    characterAnimations: [
      'A digital humanoid character running through an urban environment, realistic body mechanics and limb movements, fabric and hair responding to wind and motion, parkour-style movement with momentum, camera following from behind and side angles, 10 seconds, athletic character animation, dynamic action sequence with natural physics',
      'A female character performing a complex dance routine, fluid arm and leg movements, torso rotation and weight shifting, long hair and flowing dress responding to motion physics, spotlight lighting from above, 12 seconds, professional dancer aesthetic, seamless motion capture quality animation',
      'A character walking across a landscape, realistic gait and posture, limbs responding naturally to terrain changes, clothing and accessories moving with inertia, camera pulling back to show environment, peaceful wandering mood, 8 seconds, character-driven storytelling, natural human movement physics'
    ],
    productShowcases: [
      'A luxury smartwatch rotating slowly on a white minimalist surface, 360-degree rotation revealing all angles, light reflections on glass and metal surfaces, subtle shadow movement suggesting time passing, realistic materials and finishing, 8 seconds, premium product photography style, high-end e-commerce aesthetic',
      'A smartphone being assembled in real-time, components appearing and clicking into place with realistic mechanical motion, internal mechanisms visible with technical accuracy, satisfying construction sequence, dramatic lighting highlighting precision engineering, 10 seconds, product demonstration style, tech commercial aesthetic',
      'A designer handbag being revealed from wrapped packaging, fabric unfolding with realistic material physics, gold hardware catching light, turntable rotation showing craftsmanship details, luxury brand aesthetic, dramatic reveal with music sync points, 8 seconds, high-end fashion product showcase'
    ],
    abstractExperimental: [
      'Geometric shapes morphing and flowing like liquid, fractals expanding and contracting, color gradients transitioning from deep teals to vibrant cyans, particles emitting from interaction points, ethereal floating motion, ambient glow and light trails, 12 seconds, abstract digital art aesthetic, hypnotic experimental visual',
      'Ink dispersing in water with accurate fluid dynamics, colors bleeding and mixing, camera zooming and rotating through the diffusion, organic flowing movements with realistic physics simulation, color palette transitioning through the spectrum, 10 seconds, scientific visualization meets art, meditative experimental mood',
      'Generative art animation with nodes connecting and disconnecting, network structures forming and dissolving, pulsing light flowing along connections, scale shifting from micro to macro perspective, teal and purple color scheme with glowing effects, 10 seconds, futuristic data visualization, abstract technological aesthetic'
    ]
  };

  const allPrompts = [
    ...prompts.cinematicVideos,
    ...prompts.characterAnimations,
    ...prompts.productShowcases,
    ...prompts.abstractExperimental
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Luma AI Prompts: Cinematic, Character, Product & Abstract Video Generation',
    description: 'Discover effective prompts for Luma AI video generation. Master techniques for cinematic videos, character animations, product showcases, and abstract experimental content with physics-accurate motion.',
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
        name: 'What is Luma AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Luma AI is an advanced AI video generation platform that creates high-quality videos from text descriptions with physics-based simulation for realistic movement and effects.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I generate videos with realistic physics?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Luma AI specializes in physics-based video generation with accurate simulation of motion, gravity, fluid dynamics, and object interactions.'
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
          <div className="inline-block bg-[#14B8A6]/10 border border-[#14B8A6]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#14B8A6] text-sm font-medium">AI Video Generation</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">Luma AI Prompts</h1>
          <p className="text-xl text-gray-300 mb-6">Master physics-based video generation with expertly crafted Luma AI prompts. Create cinematic videos, character animations, product showcases, and experimental content with realistic motion and precision.</p>
          <div className="flex flex-wrap gap-3">
            {['Cinematic', 'Character Animation', 'Product Showcase', 'Experimental'].map((tag) => (
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
            <span className="w-1 h-8 bg-[#14B8A6] rounded"></span>
            Cinematic Video Prompts
          </h2>
          <p className="text-gray-300 mb-8">Create stunning cinematic sequences with professional camera movement, dynamic lighting, and immersive environments. These prompts emphasize visual storytelling, atmosphere, and cinematic production quality for feature-film-level results.</p>
          <div className="space-y-4">
            {prompts.cinematicVideos.map((prompt, idx) => (
              <CopyCard key={idx} prompt={prompt} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#14B8A6] rounded"></span>
            Character Animation
          </h2>
          <p className="text-gray-300 mb-8">Generate realistic character movements with natural physics, fluid motion, and expressive animation. Perfect for humanoids, dancers, actors, and animated characters performing complex actions while maintaining physical accuracy and visual appeal.</p>
          <div className="space-y-4">
            {prompts.characterAnimations.map((prompt, idx) => (
              <CopyCard key={idx} prompt={prompt} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#14B8A6] rounded"></span>
            Product Showcase Videos
          </h2>
          <p className="text-gray-300 mb-8">Create compelling product demonstrations and e-commerce videos that highlight features, craftsmanship, and functionality. These prompts are designed for luxury brands, technology companies, and retailers who need professional product visualization with realistic material properties and interaction physics.</p>
          <div className="space-y-4">
            {prompts.productShowcases.map((prompt, idx) => (
              <CopyCard key={idx} prompt={prompt} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#14B8A6] rounded"></span>
            Abstract and Experimental
          </h2>
          <p className="text-gray-300 mb-8">Push creative boundaries with abstract visuals, generative art, and experimental animations. These prompts leverage Luma's physics engine to create artistic, unconventional content perfect for music videos, visual art projects, and cutting-edge creative work that defies traditional categorization.</p>
          <div className="space-y-4">
            {prompts.abstractExperimental.map((prompt, idx) => (
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
        <h2 className="text-3xl font-bold mb-8">Related AI Video Tools</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { href: '/pika-ai-prompts', label: 'Pika AI Prompts' },
            { href: '/kling-ai-prompts', label: 'Kling AI Prompts' },
            { href: '/runway-ml-prompts', label: 'Runway ML Prompts' },
            { href: '/ai-prompts-heygen', label: 'HeyGen Prompts' },
            { href: '/ai-prompts-synthesia', label: 'Synthesia Prompts' },
            { href: '/midjourney-prompts', label: 'Midjourney Prompts' },
            { href: '/dalle-3-prompts', label: 'DALL-E 3 Prompts' },
            { href: '/image-prompts', label: 'Image Prompts' }
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#14B8A6]/50 transition"
            >
              <span className="text-[#14B8A6] hover:text-[#14B8A6]/80 transition">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
