'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Copy, Check, ChevronDown } from 'lucide-react';

const accentColor = '#F43F5E';

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#F43F5E]/50 transition">
      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-[#F43F5E] hover:text-[#F43F5E]/80 transition text-sm"
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
      q: 'What is Pika AI and how does it differ from other video generation tools?',
      a: 'Pika AI is an advanced AI video generation platform that specializes in creating high-quality videos from text descriptions and images. It stands out for its ability to handle complex motion, character consistency, and cinematic quality. Unlike some competitors, Pika offers excellent control over pacing, camera movements, and visual effects, making it ideal for both creators and professionals who need precise video output with minimal manual editing afterward.'
    },
    {
      q: 'Can I use Pika AI videos for commercial purposes?',
      a: 'Yes, Pika AI generated videos can be used commercially, but you should review Pika\'s current terms of service to understand any licensing requirements or restrictions. Generally, videos created with Pika can be monetized on platforms like YouTube and used in commercial projects, though some premium features or paid tiers may have different restrictions. Always check their documentation for the most up-to-date commercial usage guidelines.'
    },
    {
      q: 'What file formats and resolutions does Pika AI support?',
      a: 'Pika AI generates videos in MP4 format at various resolutions including 1080p (Full HD) and higher quality options depending on your subscription level. The platform automatically optimizes videos for different platforms like YouTube, TikTok, and Instagram. You can download your videos in the resolution that best fits your project needs, and many users export at 1080p for maximum flexibility in post-production editing.'
    },
    {
      q: 'How long does it take to generate a video with Pika AI?',
      a: 'Video generation time depends on the length and complexity of your request. Simple text-to-video prompts typically take 2-5 minutes, while longer or more complex videos may take up to 15 minutes. During peak hours, processing times can be longer. Most users find the wait time reasonable compared to the manual production time saved, especially for iterative creative work where you can generate multiple variations quickly.'
    },
    {
      q: 'Is there a limit to how long videos can be?',
      a: 'Yes, Pika AI has length limitations that vary by subscription tier. Free tier users can generate shorter videos (typically 4-8 seconds), while paid subscribers can create longer sequences up to 1 minute or more depending on their plan. For longer videos, you can generate multiple segments and combine them in a video editor, which many professionals do for feature-length content or extended commercials.'
    },
    {
      q: 'How do I write effective prompts for Pika AI?',
      a: 'Effective Pika prompts should be descriptive and include specific details about what you want to see: camera movement, lighting, colors, emotions, and actions. Be specific about style (cinematic, documentary, animated) and include sensory details. For example, instead of "a person dancing," try "a professional dancer in a spotlight performing a contemporary routine with fluid movements and dramatic shadows." Include duration, aspect ratio, and any specific effects you need for better results.'
    },
    {
      q: 'Can Pika AI maintain character consistency across multiple videos?',
      a: 'Pika AI has improved character consistency features, though perfect consistency across multiple independent generations is challenging. To maintain consistency, you can use the same base image or detailed character description across prompts. For professional projects requiring perfect consistency, you may need to generate videos in sequence using the same input image and build upon previous segments, or use custom character references if available in your subscription tier.'
    },
    {
      q: 'What are the best use cases for Pika AI in marketing?',
      a: 'Pika excels at creating product demos, animated explainers, social media content, email marketing videos, and promotional clips. It\'s particularly effective for B2B marketing where quick turnarounds and iteration are crucial. Many marketers use Pika to create multiple versions of ads for A/B testing, generate hero videos for websites, or produce short social clips without expensive production crews. The speed and cost efficiency make it ideal for scaling video content creation.'
    },
    {
      q: 'How does Pika AI handle complex animations and transitions?',
      a: 'Pika AI can generate smooth transitions and complex animations when you provide detailed prompts specifying the motion you want. The platform understands directional language like "zoom in," "pan across," "spin," "fade in," and "swoop from left to right." For highly complex multi-element animations, breaking your vision into sequential segments and layering them in post-production often yields better results than trying to execute everything in one generation.'
    },
    {
      q: 'What subscription tier should I choose for professional use?',
      a: 'For professional work, consider Pika\'s higher-tier subscriptions that offer longer video lengths, faster processing, higher resolution output, and more monthly generations. The investment typically pays off quickly if you\'re generating multiple videos weekly. Start with understanding your monthly needs: how many videos, how long, and what resolution. Many professionals find mid-tier plans offer the best balance of cost and capability for regular production workflows.'
    },
    {
      q: 'Can I edit Pika AI videos after generation?',
      a: 'Absolutely. Pika AI videos are standard MP4 files that work with any video editor including Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, or free options like CapCut. Most users enhance Pika outputs with color grading, sound design, additional effects, music, and text overlays. Many creators treat Pika videos as a production foundation rather than final output, using professional editing tools to add the finishing touches that make content stand out.'
    }
  ];

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <button
          key={idx}
          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#F43F5E]/50 transition text-left"
        >
          <div className="flex justify-between items-start gap-4">
            <h3 className="font-semibold text-white pr-4">{faq.q}</h3>
            <ChevronDown
              size={20}
              className={`text-[#F43F5E] flex-shrink-0 transition ${openIndex === idx ? 'rotate-180' : ''}`}
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

export default function PikaAIPromptsPage() {
  const prompts = {
    textToVideo: [
      'A cinematic shot of a sleek sports car driving through a neon-lit city at night, rain-slicked streets reflecting vibrant purple and blue lights, camera following smoothly from the side, dramatic motion blur, 4K quality, professional commercial style',
      'An aerial drone shot slowly descending over a misty mountain landscape at sunrise, golden light breaking through clouds, revealing a hidden valley with a pristine lake below, peaceful atmospheric mood, 10 seconds, cinematic color grading',
      'A close-up of hands crafting a ceramic bowl on a pottery wheel, clay spinning smoothly, water droplets catching light, earthy natural lighting, soft focus background, artisanal aesthetic, 8 seconds, warm color palette'
    ],
    imageToVideo: [
      'Take a static portrait image and animate it with the subject turning their head slowly from left to right while smiling, eyes blinking naturally, soft lighting, duration 5 seconds, subtle realistic movement, maintain original background',
      'Transform a landscape photo into a video where the camera gradually zooms in toward distant mountains, subtle parallax effect as clouds drift slowly across the sky, maintaining all original landscape details, 8 seconds, peaceful mood',
      'Animate a product image: a modern smartwatch on a white surface rotates 360 degrees smoothly with subtle shadow movement, subtle lighting shift suggesting time passing, professional e-commerce style, 6 seconds'
    ],
    videoEditing: [
      'Create a fast-paced promotional video montage: quick cuts between 5 different scenes (office, gym, cafe, street, home) with energetic transitions, upbeat vibe, each scene 2-3 seconds, quick fades between cuts, modern dynamic style, total 15 seconds',
      'A smooth product showcase: pan across a minimalist desk setup with a laptop, phone, coffee cup, notebook from left to right, soft lighting, shallow depth of field, elegant transitions between elements, 10 seconds, luxury lifestyle aesthetic',
      'Create a split-screen before/after effect: left side shows messy room, right side shows the same room organized and clean, transition in the middle reveals the transformation, dramatic reveal moment, 8 seconds, satisfying transformation video'
    ],
    commercialMarketing: [
      'A 15-second commercial for a fitness app: montage of diverse people exercising (running, yoga, weight lifting) with motivational quick cuts, uplifting music sync points, text overlays emphasizing "Transform Your Body," bright energetic color grade, call-to-action ending',
      'A luxury brand commercial: showcase of elegant jewelry pieces against dark backgrounds with dramatic lighting, slow rotations revealing intricate details, subtle sparkle effects, luxurious mood, accompanied by soft piano music cues, 20 seconds',
      'A tech startup commercial: young professional using innovative app on phone, face lighting up with realization, quick transition to showing app features on screen, ending with product on desk in office environment, modern clean aesthetic, 12 seconds, professional tone'
    ]
  };

  const allPrompts = [
    ...prompts.textToVideo,
    ...prompts.imageToVideo,
    ...prompts.videoEditing,
    ...prompts.commercialMarketing
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pika AI Prompts: Text-to-Video and Image Animation',
    description: 'Discover effective prompts for Pika AI video generation. Learn techniques for text-to-video, image animation, video editing, and commercial video creation.',
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
        name: 'What is Pika AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pika AI is an advanced AI video generation platform specializing in high-quality video creation from text and images.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use Pika AI videos commercially?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, videos generated with Pika AI can be used for commercial purposes subject to their terms of service.'
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
          <div className="inline-block bg-[#F43F5E]/10 border border-[#F43F5E]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#F43F5E] text-sm font-medium">AI Video Generation</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">Pika AI Prompts</h1>
          <p className="text-xl text-gray-300 mb-6">Master text-to-video, image animation, and commercial video creation with expertly crafted Pika AI prompts. Generate cinematic, professional-quality videos in seconds.</p>
          <div className="flex flex-wrap gap-3">
            {['Text-to-Video', 'Image Animation', 'Video Effects', 'Commercial'].map((tag) => (
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
            <span className="w-1 h-8 bg-[#F43F5E] rounded"></span>
            Text-to-Video Prompts
          </h2>
          <p className="text-gray-300 mb-8">Create stunning videos from detailed text descriptions. These prompts emphasize cinematic qualities, camera movement, and visual style for professional results.</p>
          <div className="space-y-4">
            {prompts.textToVideo.map((prompt, idx) => (
              <CopyCard key={idx} prompt={prompt} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#F43F5E] rounded"></span>
            Image-to-Video Animation
          </h2>
          <p className="text-gray-300 mb-8">Bring static images to life with smooth animations and subtle motion. Perfect for product showcases, portraits, and landscape panoramas that add movement without losing the original composition.</p>
          <div className="space-y-4">
            {prompts.imageToVideo.map((prompt, idx) => (
              <CopyCard key={idx} prompt={prompt} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#F43F5E] rounded"></span>
            Video Editing and Effects
          </h2>
          <p className="text-gray-300 mb-8">Generate dynamic montages and professionally edited sequences with smooth transitions. These prompts create polished videos ready for social media or promotional use with minimal post-production needed.</p>
          <div className="space-y-4">
            {prompts.videoEditing.map((prompt, idx) => (
              <CopyCard key={idx} prompt={prompt} />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#F43F5E] rounded"></span>
            Commercial and Marketing Video
          </h2>
          <p className="text-gray-300 mb-8">Create compelling commercials and promotional content that captures attention and drives action. These prompts are designed for brands, products, and services with professional production quality and marketing appeal.</p>
          <div className="space-y-4">
            {prompts.commercialMarketing.map((prompt, idx) => (
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
            { href: '/ai-prompts-invideo', label: 'InVideo Prompts' },
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
              className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 hover:border-[#F43F5E]/50 transition"
            >
              <span className="text-[#F43F5E] hover:text-[#F43F5E]/80 transition">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
