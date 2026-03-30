'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Copy, Check, ChevronDown, ChevronUp, Film, Camera, Sparkles, Globe, TrendingUp } from 'lucide-react'

export default function Veo3PromptsPage() {
  const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    return (
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
        <h4 className="font-bold text-white mb-4">{title}</h4>
        <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
          {prompt}
        </pre>
        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 bg-[#10A937] hover:bg-[#0d8829] text-white font-medium py-2 px-4 rounded transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy Prompt
            </>
          )}
        </button>
      </div>
    )
  }

  const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false)

    return (
      <div className="border border-[#2a2a2a] rounded-lg">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-4 hover:bg-[#1a1a1a] transition-colors text-left"
        >
          <span className="font-medium text-white">{q}</span>
          {open ? (
            <ChevronUp className="w-5 h-5 text-[#10A937] flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
          )}
        </button>
        {open && (
          <div className="border-t border-[#2a2a2a] p-4 bg-[#0f0f0f] text-gray-300 leading-relaxed">
            {a}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <header className="bg-gradient-to-b from-[#10A937] to-[#0d7a29] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block hover:text-[#a8e6a1] transition-colors">
            GPTPrompts.AI
          </Link>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
              <Film className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-6xl md:text-8xl font-bold">Veo 3</h1>
              <p className="text-2xl md:text-4xl text-[#a8e6a1] font-light">Google&apos;s AI Video Generation</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            60+ copy-paste prompts for Google Veo 3 — the most realistic AI video generator available. Cinematic scenes, product showcases, nature footage, social content, and creative concepts, all ready to generate.
          </p>
          <div className="mt-8 inline-block bg-white/20 text-white px-6 py-2 rounded-lg font-semibold">
            Category: AI Video Generation
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24">

        {/* Cinematic Scenes Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Cinematic &amp; Film-Style Scenes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Golden Hour Landscape"
              prompt={`A sweeping drone shot over rolling hills covered in wildflowers during golden hour. The warm amber light casts long shadows. A lone dirt road winds through the valley. Slow cinematic pan from left to right. Photorealistic, 4K, shallow depth of field. Soft wind movement in the grass. No people. Film grain texture.`}
            />
            <CopyCard
              title="Urban Night Timelapse"
              prompt={`A cinematic timelapse of a busy city intersection at night. Neon signs reflect on wet pavement after rain. Car headlights and taillights streak across the frame. Camera mounted low, slightly tilted upward toward glowing skyscrapers. 8-second clip. Hyper-realistic lighting. Blue and orange colour grade. Subtle lens flare.`}
            />
            <CopyCard
              title="Character Walking Through Forest"
              prompt={`A solitary figure in a long dark coat walks slowly through a misty autumn forest. Camera tracks alongside them at mid-distance. Morning fog drifts between ancient oak trees. Dappled sunlight breaks through the canopy. Sound: crunching leaves, distant birds. Slow, meditative pace. Cinematic 2.39:1 aspect ratio. Desaturated green and warm amber tones.`}
            />
            <CopyCard
              title="Ocean Waves Close-Up"
              prompt={`Extreme close-up slow-motion shot of a wave cresting and breaking on a rocky shoreline. Crystal-clear turquoise water. The foam dissolves over dark stone. Camera positioned just above water level. 240fps slow motion effect. Photorealistic water physics. Natural overcast lighting. Ambient ocean sound. 8-second loop.`}
            />
            <CopyCard
              title="Rainy Window Interior"
              prompt={`Interior shot looking out through a large rain-streaked window at a grey city street below. A steaming cup of coffee sits on the windowsill in soft focus foreground. City lights blur through the wet glass. Moody, introspective atmosphere. Soft warm interior light contrasts with cold blue exterior. Gentle rain sound. Static camera with subtle breathing movement.`}
            />
            <CopyCard
              title="Sunrise Mountain Peak"
              prompt={`A time-lapse of the sun rising over a jagged mountain peak. Clouds below the summit are lit in pink and gold. Stars fade as the sky brightens from deep blue to warm orange. Camera positioned on a rocky ledge. Wind sound increases as daylight grows. Epic scale. Photorealistic clouds with realistic movement. 10 seconds. No people.`}
            />
          </div>
        </section>

        {/* Product & Brand Videos Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Product &amp; Brand Videos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Luxury Product Reveal"
              prompt={`A sleek [product type — e.g. perfume bottle / watch / sneaker] rotates slowly on a black glass surface. Studio lighting with a single dramatic key light creates sharp reflections. Particles of light dust float around the product. 360-degree rotation over 8 seconds. Extreme macro lens detail. Deep black background. Premium, cinematic feel. No text or branding.`}
            />
            <CopyCard
              title="Food & Drink Close-Up"
              prompt={`Extreme close-up of a [food/drink — e.g. espresso being poured / chocolate melting / fresh fruit being sliced]. Shot in slow motion. Rich, saturated colours. Steam or bubbles visible. Soft studio lighting from above and slightly behind. 4K. ASMR-style — emphasise texture and sound. Shallow depth of field. Clean white or marble surface. 6-second clip.`}
            />
            <CopyCard
              title="Tech Product Hero Shot"
              prompt={`A [tech product — e.g. smartphone / laptop / wireless headphones] floats in a dark environment surrounded by subtle glowing particles. Blue and white holographic design elements orbit the device. Camera slowly circles the product. Futuristic, premium feel. Render quality: photorealistic. Subtle reflection surface below. No text. 8 seconds.`}
            />
          </div>
        </section>

        {/* Nature & Environment Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Nature &amp; Environment Footage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Underwater Ocean Scene"
              prompt={`Underwater shot of a tropical coral reef teeming with colourful fish. Light rays filter down from the surface above. A sea turtle glides slowly into frame from the left. Camera gently drifts forward. Photorealistic water caustics and light refraction. Vivid blues and greens. Ambient underwater sound. 10-second clip. National Geographic quality.`}
            />
            <CopyCard
              title="Thunderstorm Time-Lapse"
              prompt={`A dramatic time-lapse of a thunderstorm approaching across a flat desert landscape. Dark cumulonimbus clouds build and roll across the frame. Lightning flashes illuminate the clouds from within. Dust devils form in the foreground. Wide angle shot. Highly saturated sky. Natural desert browns and storm purple-grey. No people. 8-second clip.`}
            />
            <CopyCard
              title="Cherry Blossom Wind"
              prompt={`Close-up of cherry blossom branches in full bloom. A gentle breeze sends petals floating through the air in slow motion. Soft diffused daylight. Pink and white petals against a softly blurred background of more blossoms. Camera is static. Petals fall across the entire frame. Peaceful, meditative mood. Japanese aesthetic. 8-second loop.`}
            />
          </div>
        </section>

        {/* Social & Short-Form Content Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Social Media &amp; Short-Form Content</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Aesthetic Morning Routine"
              prompt={`A serene aesthetic morning routine montage. Steam rising from a white ceramic mug. Sunlight through sheer curtains. A hand writing in an open journal. Fresh flowers in a vase. Close-up of a book opening. Slow cuts between each scene. Warm, creamy colour grade. Soft background music implied in the pacing. 9:16 vertical format for Reels/TikTok. 15 seconds.`}
            />
            <CopyCard
              title="Motivational Abstract Opener"
              prompt={`An abstract motivational video opener. Dynamic particles of light form and disperse against a deep black background. Golden light streaks move diagonally across the frame. The energy builds over 5 seconds, culminating in a bright central flash before fading. Suitable as a background loop behind text overlays. Loopable. Energetic, aspirational feel.`}
            />
            <CopyCard
              title="Travel Destination Teaser"
              prompt={`A fast-paced travel teaser for [destination — e.g. Tokyo / Santorini / Marrakech]. Quick cuts: aerial drone shot of the city, close-up of local food on a market stall, narrow alleyway with locals walking, sunset over a famous landmark, smiling faces in a crowd. 8-second clip. Vibrant, saturated colour grade. Energy builds from slow to fast cuts. Wanderlust-inducing mood.`}
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              q="What is Google Veo 3 and how does it work?"
              a="Veo 3 is Google DeepMind&apos;s most advanced AI video generation model, released in 2025-2026. It generates high-definition, photorealistic video clips from text descriptions (and optionally image inputs). Veo 3 is notable for generating videos with natural audio — ambient sounds, music, and even dialogue — alongside the visuals. It is available through Google&apos;s AI Ultra subscription and through VideoFX on Google Labs."
            />
            <FAQItem
              q="How do I access Veo 3?"
              a="Veo 3 is accessible through Google&apos;s AI Ultra subscription plan (the most premium tier of Google One AI Premium), through Google&apos;s VideoFX tool on Google Labs, and via the Gemini Ultra interface for eligible users. API access is available for developers through Google Cloud Vertex AI. Access is currently limited to select regions."
            />
            <FAQItem
              q="What makes Veo 3 different from Runway and Sora?"
              a="Veo 3&apos;s key differentiator is native audio generation — it produces ambient sound, music, and dialogue that match the video content, which Runway and Sora do not natively. Veo 3 also produces highly realistic physics, consistent motion, and photorealistic output. Sora excels at creative and stylised content; Runway Gen-4 is strong for professional editing workflows. Veo 3 currently leads for realism and audio-visual synchronisation."
            />
            <FAQItem
              q="What makes a good Veo 3 prompt?"
              a="Effective Veo 3 prompts are specific and visual. Include: the subject, the action or motion, the setting, lighting conditions, camera movement, colour grade or mood, audio cues if relevant, and duration or pacing. Avoid abstract concepts — describe what the camera literally sees. The more precisely you describe the visual and audio elements, the more controlled your output will be."
            />
            <FAQItem
              q="What resolution and length does Veo 3 output?"
              a="Veo 3 generates videos at up to 4K resolution and can produce clips of up to 60 seconds, though most standard generations are in the 5-10 second range. It supports multiple aspect ratios including 16:9 (landscape), 9:16 (vertical for Reels/TikTok), and 1:1 (square). Longer generations require more compute and are typically available on higher-tier plans."
            />
            <FAQItem
              q="Can Veo 3 generate videos with people in them?"
              a="Yes, Veo 3 can generate videos featuring human characters. Like other AI video tools, it has safety guardrails around depicting specific real individuals. For fictional characters or generic human figures, it works well. Results with close-up faces and fine hand movements are improving but may still show occasional artefacts."
            />
            <FAQItem
              q="What are the content restrictions for Veo 3?"
              a="Google Veo 3 prohibits generating videos that depict violence, explicit sexual content, dangerous activities, content that spreads misinformation, or impersonation of real individuals without consent. Political content and deepfakes are also restricted. All generated content includes SynthID watermarking to indicate AI-generated origins."
            />
            <FAQItem
              q="How does Veo 3&apos;s audio generation work?"
              a="Veo 3 analyses the visual scene description and generates contextually appropriate audio — footsteps, wind, water, crowd ambience, music matching the mood, and dialogue if specified. This makes Veo 3-generated content more immediately usable for social media and presentations without needing to add audio separately. Audio quality and synchronisation are major improvements over Veo 2."
            />
            <FAQItem
              q="Can I use Veo 3 output commercially?"
              a="Google&apos;s current terms allow commercial use of Veo 3 outputs for subscribers. However, terms evolve, so always check the current Google Terms of Service and the specific plan&apos;s commercial use provisions before using generated content in advertising, paid media, or commercial projects. SynthID watermarks are embedded but may not be visible."
            />
            <FAQItem
              q="How does Veo 3 compare to Kling AI and Hailuo?"
              a="Veo 3, Kling AI (by Kuaishou), and Hailuo (by MiniMax) are currently the top three AI video generators for realism. Veo 3 leads in audio-visual integration and natural physics. Kling AI is widely praised for human motion quality and accessibility. Hailuo produces high-quality, fast outputs. All three are evolving rapidly — results often vary by prompt type, so testing across platforms is worthwhile."
            />
          </div>
        </section>

        {/* Related Links */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Explore Related Prompts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/sora-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Sora Prompts</h3>
              <p className="text-gray-400 mt-2">OpenAI&apos;s text-to-video model</p>
            </Link>
            <Link href="/runway-ml-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Runway ML Prompts</h3>
              <p className="text-gray-400 mt-2">Gen-3 &amp; Gen-4 video generation</p>
            </Link>
            <Link href="/kling-ai-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Kling AI Prompts</h3>
              <p className="text-gray-400 mt-2">Kuaishou&apos;s AI video generator</p>
            </Link>
            <Link href="/hailuo-ai" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Hailuo AI Prompts</h3>
              <p className="text-gray-400 mt-2">MiniMax AI video generation</p>
            </Link>
            <Link href="/luma-ai-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Luma AI Prompts</h3>
              <p className="text-gray-400 mt-2">Dream Machine video generation</p>
            </Link>
            <Link href="/pika-ai-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Pika AI Prompts</h3>
              <p className="text-gray-400 mt-2">Animate images and create clips</p>
            </Link>
            <Link href="/gemini-ai-guide" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Gemini AI Guide</h3>
              <p className="text-gray-400 mt-2">Google&apos;s AI ecosystem guide</p>
            </Link>
            <Link href="/ai-video-generator-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">AI Video Generator Prompts</h3>
              <p className="text-gray-400 mt-2">All AI video tools compared</p>
            </Link>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Veo 3 Prompts 2026: 60+ Copy-Paste Google AI Video Generation Prompts',
        description: '60+ copy-paste Veo 3 prompts for cinematic scenes, product videos, social content, and creative concepts. Expert templates for Google\'s most advanced AI video model.',
        datePublished: '2026-03-30',
        dateModified: '2026-03-30',
        author: { '@type': 'Organization', name: 'GPTPrompts.AI' }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is Google Veo 3 and how does it work?', acceptedAnswer: { '@type': 'Answer', text: 'Veo 3 is Google DeepMind\'s advanced AI video generation model that produces high-definition video from text descriptions, uniquely including native audio generation alongside the visuals.' } },
          { '@type': 'Question', name: 'How do I access Veo 3?', acceptedAnswer: { '@type': 'Answer', text: 'Veo 3 is accessible through Google\'s AI Ultra subscription, VideoFX on Google Labs, and Gemini Ultra for eligible users. API access is available via Google Cloud Vertex AI.' } },
          { '@type': 'Question', name: 'What makes Veo 3 different from Runway and Sora?', acceptedAnswer: { '@type': 'Answer', text: 'Veo 3\'s key differentiator is native audio generation — it produces ambient sound, music, and dialogue that match the video content. It also leads on photorealism and natural physics.' } }
        ]
      })}} />
    </div>
  )
}
