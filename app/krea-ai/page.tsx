import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Krea AI - Complete Guide to AI Video Generation and Animation",
  description:
    "Master Krea AI with our comprehensive guide covering AI video generation, animation creation, visual effects, prompting techniques, and best practices for content creators.",
  keywords: "Krea AI, AI video generation, animation creation, video prompts, creative video effects, motion graphics",
  openGraph: {
    title: "Krea AI - Complete Guide to AI Video Generation and Animation",
    description:
      "Master Krea AI with our comprehensive guide covering AI video generation, animation, visual effects, and best practices for professional content creators.",
  },
}

export default function KreaAIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter opacity-90 hover:opacity-100 transition-opacity">
            GPTPrompts.AI
          </Link>
          <nav>
            <Link href="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Krea AI</h1>
          <p className="text-xl text-purple-100 mb-6">Complete Guide to AI Video Generation and Animation</p>
          <p className="text-lg text-purple-50">
            Create stunning animated videos, motion graphics, and visual effects using AI. Master prompting techniques,
            animation controls, and professional production workflows for engaging video content.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <nav className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-purple-900 mb-4">Guide Sections</h3>
              <ol className="space-y-2 text-sm">
                <li className="text-purple-700 font-semibold">1. What is Krea AI?</li>
                <li className="text-purple-600">2. Key Features</li>
                <li className="text-purple-600">3. Getting Started</li>
                <li className="text-purple-600">4. Video Types</li>
                <li className="text-purple-600">5. Prompting Techniques</li>
                <li className="text-purple-600">6. Animation Controls</li>
                <li className="text-purple-600">7. Use Cases</li>
                <li className="text-purple-600">8. Optimization</li>
                <li className="text-purple-600">9. Pricing & Plans</li>
                <li className="text-purple-600">10. FAQ</li>
              </ol>
            </div>
          </nav>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
              {/* Section 1 */}
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-4">What is Krea AI?</h2>
                <p className="text-gray-700 mb-4">
                  Krea AI is an advanced artificial intelligence platform specializing in AI-generated video content,
                  animation, and motion graphics. Designed for content creators, marketers, animators, and production
                  professionals, Krea transforms text descriptions into dynamic, engaging videos with
                  professional-quality animation and visual effects.
                </p>
                <p className="text-gray-700 mb-4">
                  Unlike traditional video creation requiring extensive technical skills and expensive software, Krea AI
                  democratizes video production by enabling anyone to generate high-quality animated videos from simple
                  prompts. The platform combines generative AI with animation controls, offering flexibility for both
                  quick social media content and complex production workflows.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-4">Key Features of Krea AI</h2>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <h3 className="font-bold text-purple-900 mb-2">AI Video Generation</h3>
                    <p className="text-gray-700">
                      Create animated videos from text descriptions with sophisticated AI understanding context,
                      composition, and motion sequences.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <h3 className="font-bold text-purple-900 mb-2">Motion and Animation Control</h3>
                    <p className="text-gray-700">
                      Define animation styles, camera movements, character motion, and dynamic effects with precise
                      control over visual presentation.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <h3 className="font-bold text-purple-900 mb-2">Multiple Video Formats</h3>
                    <p className="text-gray-700">
                      Generate videos optimized for various platforms: Instagram Reels, TikTok, YouTube Shorts,
                      full-length videos, and custom dimensions.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <h3 className="font-bold text-purple-900 mb-2">Visual Effects Integration</h3>
                    <p className="text-gray-700">
                      Incorporate particle effects, transitions, color grading, and advanced visual effects to enhance
                      production quality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-4">Getting Started with Krea AI</h2>
                <ol className="space-y-3 text-gray-700">
                  <li>
                    <strong>1. Register and Access:</strong> Create an account to access Krea's web platform with
                    immediate availability for video generation.
                  </li>
                  <li>
                    <strong>2. Choose Video Type:</strong> Select from animation, live-action with AI effects, hybrid
                    formats, or custom templates suited to your needs.
                  </li>
                  <li>
                    <strong>3. Write Your Prompt:</strong> Describe your desired video scene, characters, actions,
                    camera movements, and visual style in detail.
                  </li>
                  <li>
                    <strong>4. Configure Settings:</strong> Specify video length, aspect ratio, frame rate, animation
                    style, and any special effects.
                  </li>
                  <li>
                    <strong>5. Generate and Refine:</strong> Krea generates your video, which you can then refine, edit,
                    and enhance with additional effects.
                  </li>
                </ol>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-4">Video Types and Formats</h2>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>2D Animation:</strong> Stylized, cartoon, or illustrative animation perfect for educational
                    content and storytelling.
                  </p>
                  <p className="text-gray-700">
                    <strong>3D Animation:</strong> Three-dimensional generated environments and character animation with
                    sophisticated rendering.
                  </p>
                  <p className="text-gray-700">
                    <strong>Motion Graphics:</strong> Dynamic text, data visualization, and abstract visual sequences
                    for presentations and promotional content.
                  </p>
                  <p className="text-gray-700">
                    <strong>Live Action with Effects:</strong> Realistic footage enhanced with AI-generated visual
                    effects, color grading, and compositing.
                  </p>
                  <p className="text-gray-700">
                    <strong>Cinematic Sequences:</strong> High-quality filmed sequences with AI-enhanced cinematography
                    and post-production effects.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-4">Mastering Krea AI Prompting</h2>
                <div className="bg-purple-50 p-6 rounded-lg mb-4">
                  <p className="text-gray-700 font-semibold mb-3">Example Prompt Structure:</p>
                  <p className="text-gray-700 italic">
                    "A futuristic cityscape at night | neon lights reflecting on wet streets | camera slowly panning
                    left | sleek silver flying vehicles passing | cyberpunk aesthetic | 4K quality | 10 seconds"
                  </p>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>• Scene Description:</strong> Begin with clear scene details and setting establishment.
                  </p>
                  <p>
                    <strong>• Character/Subject Details:</strong> Describe appearance, clothing, positioning, and
                    expression if applicable.
                  </p>
                  <p>
                    <strong>• Camera Movement:</strong> Specify camera directions: pan, zoom, tilt, dolly, or static
                    positioning.
                  </p>
                  <p>
                    <strong>• Animation Style:</strong> Define aesthetic: realistic, cartoon, anime, stylized, or
                    abstract.
                  </p>
                  <p>
                    <strong>• Lighting and Mood:</strong> Describe lighting conditions, color palette, and emotional
                    tone.
                  </p>
                  <p>
                    <strong>• Motion Details:</strong> Specify character movements, object interactions, and dynamic
                    elements.
                  </p>
                  <p>
                    <strong>• Video Specifications:</strong> Include desired length, quality level, and format.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-4">Animation and Motion Controls</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-purple-900 mb-2">Frame Rate and Smoothness</h3>
                    <p className="text-gray-700">
                      Configure 24fps for cinematic feel, 30fps for standard video, or 60fps for smooth motion. Higher
                      frame rates provide smoother motion but increase rendering time.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-900 mb-2">Camera Motion Control</h3>
                    <p className="text-gray-700">
                      Define complex camera movements including tracking shots, crane movements, focus transitions, and
                      dynamic perspective changes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-900 mb-2">Character Animation</h3>
                    <p className="text-gray-700">
                      Control character motion, gestures, facial expressions, and interaction with environment for
                      naturalistic or stylized performance.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-900 mb-2">Transition Effects</h3>
                    <p className="text-gray-700">
                      Incorporate smooth transitions between scenes, color transitions, and visual wipes for
                      professional video flow.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-4">Practical Use Cases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-bold text-purple-900 mb-2">Social Media</h3>
                    <p className="text-gray-700">
                      TikTok, Instagram Reels, YouTube Shorts with engaging animation and effects.
                    </p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-bold text-purple-900 mb-2">Marketing</h3>
                    <p className="text-gray-700">
                      Promotional videos, product demos, brand storytelling, and advertisement content.
                    </p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-bold text-purple-900 mb-2">Education</h3>
                    <p className="text-gray-700">
                      Animated explainer videos, tutorial content, and educational storytelling.
                    </p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-bold text-purple-900 mb-2">Entertainment</h3>
                    <p className="text-gray-700">
                      Animation content, music videos, cinematic sequences, and creative storytelling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-4">Video Optimization</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Resolution Selection:</strong> Choose 720p for social media, 1080p for standard video, or 4K
                    for premium content depending on platform requirements.
                  </p>
                  <p>
                    <strong>Aspect Ratio Optimization:</strong> 16:9 for YouTube, 9:16 for mobile, 1:1 for square
                    content, optimizing for target platform.
                  </p>
                  <p>
                    <strong>Color Grading:</strong> Apply color corrections, color grading styles, and mood enhancement
                    for polished professional appearance.
                  </p>
                  <p>
                    <strong>Audio Integration:</strong> Sync with music tracks, add sound effects, ensure audio quality
                    matches video production value.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-4">Pricing and Plans</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Free Tier:</strong> Limited video generation minutes, standard quality, and basic features
                    suitable for experimentation.
                  </p>
                  <p>
                    <strong>Starter Plan:</strong> Increased monthly minutes, 1080p quality, standard animation
                    controls, and basic effects library.
                  </p>
                  <p>
                    <strong>Professional Plan:</strong> Unlimited generation, 4K quality, advanced animation controls,
                    premium effects, team collaboration, and commercial license.
                  </p>
                </div>
              </div>

              {/* Section 10 - FAQ */}
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-bold text-purple-900 mb-2">Q: How long does video generation take?</p>
                    <p className="text-gray-700">
                      A: Generation time typically ranges from 30 seconds to several minutes depending on video length,
                      quality setting, and complexity of effects requested.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-bold text-purple-900 mb-2">Q: Can I edit generated videos?</p>
                    <p className="text-gray-700">
                      A: Yes, generated videos can be edited, refined, have effects added, and be combined with other
                      content in post-production.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-bold text-purple-900 mb-2">Q: What video lengths are supported?</p>
                    <p className="text-gray-700">
                      A: Krea supports various lengths from short 15-30 second clips for social media to longer 2-5
                      minute videos for full storytelling.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-bold text-purple-900 mb-2">Q: Can I use Krea videos commercially?</p>
                    <p className="text-gray-700">
                      A: Yes, professional and higher-tier plans include commercial licensing rights for generated video
                      content.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-bold text-purple-900 mb-2">Q: What animation styles are available?</p>
                    <p className="text-gray-700">
                      A: Realistic, cartoon, anime, 3D, motion graphics, stop-motion, and stylized animations with
                      extensive customization options.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-bold text-purple-900 mb-2">Q: How do I write effective Krea prompts?</p>
                    <p className="text-gray-700">
                      A: Provide detailed scene descriptions, camera movements, animation style, lighting/mood,
                      character details, and video specifications.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-bold text-purple-900 mb-2">
                      Q: Can I control character consistency across videos?
                    </p>
                    <p className="text-gray-700">
                      A: Yes, reference previous character designs and describe specific appearance details to maintain
                      consistency across multiple videos.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-bold text-purple-900 mb-2">Q: What are the quality limitations?</p>
                    <p className="text-gray-700">
                      A: Krea generates excellent quality for most purposes. Professional plans support 4K resolution
                      for premium content requirements.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-bold text-purple-900 mb-2">Q: Can I integrate with other tools?</p>
                    <p className="text-gray-700">
                      A: Generated videos are compatible with standard editing software, motion graphics platforms, and
                      video production workflows.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-bold text-purple-900 mb-2">Q: How many videos can I generate monthly?</p>
                    <p className="text-gray-700">
                      A: Free tier has limited monthly generation. Paid plans offer increased minutes with starter plans
                      having defined monthly allocations and professional plans offering unlimited generation.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-bold text-purple-900 mb-2">Q: What file formats are supported?</p>
                    <p className="text-gray-700">
                      A: Krea exports in MP4, WebM, and other standard video formats compatible with all major platforms
                      and editing software.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-bold text-purple-900 mb-2">Q: Is there a learning curve?</p>
                    <p className="text-gray-700">
                      A: The interface is intuitive for beginners. Mastering advanced prompting and animation controls
                      improves through practice and community learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 mt-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-purple-300">About GPTPrompts.AI</h3>
            <p className="text-slate-400">
              Your comprehensive resource for mastering AI tools and creating professional-quality content.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-purple-300">AI Video Tools</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/krea-ai" className="hover:text-purple-300">
                  Krea AI
                </a>
              </li>
              <li>
                <a href="/pixverse-ai" className="hover:text-purple-300">
                  Pixverse AI
                </a>
              </li>
              <li>
                <a href="/suno-ai" className="hover:text-purple-300">
                  Suno AI
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-purple-300">Resources</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/free-ai-prompts" className="hover:text-purple-300">
                  Prompt Library
                </a>
              </li>
              <li>
                <a href="/good-ai-prompts" className="hover:text-purple-300">
                  Beginner Guide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-purple-300">More Tools</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/leonardo-ai" className="hover:text-purple-300">
                  Leonardo AI
                </a>
              </li>
              <li>
                <a href="/gamma-ai" className="hover:text-purple-300">
                  Gamma AI
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2026 GPTPrompts.AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
