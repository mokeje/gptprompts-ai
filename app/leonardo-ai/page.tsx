import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Leonardo AI - Complete Guide to AI Image Generation and Creative Tools",
  description:
    "Master Leonardo AI with our comprehensive guide covering image generation, prompting techniques, character design, texture creation, and best practices for content creators.",
  keywords:
    "Leonardo AI, AI image generation, creative design tools, character generation, texture creation, prompting techniques",
  openGraph: {
    title: "Leonardo AI - Complete Guide to AI Image Generation and Creative Tools",
    description:
      "Master Leonardo AI with our comprehensive guide covering image generation, prompting techniques, character design, texture creation, and best practices for content creators.",
  },
}

export default function LeonardoAIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header with homepage link */}
      <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-6 px-4">
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
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Leonardo AI</h1>
          <p className="text-xl text-amber-100 mb-6">Complete Guide to AI Image Generation and Creative Tools</p>
          <p className="text-lg text-amber-50">
            Master production-ready image generation, character consistency, texture creation, and advanced prompting
            techniques to bring your creative vision to life with professional-quality results.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <nav className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-amber-900 mb-4">Guide Sections</h3>
              <ol className="space-y-2 text-sm">
                <li className="text-amber-700 font-semibold">1. What is Leonardo AI?</li>
                <li className="text-amber-600">2. Key Features</li>
                <li className="text-amber-600">3. Getting Started</li>
                <li className="text-amber-600">4. Understanding Models</li>
                <li className="text-amber-600">5. Prompting Techniques</li>
                <li className="text-amber-600">6. Advanced Features</li>
                <li className="text-amber-600">7. Practical Applications</li>
                <li className="text-amber-600">8. Image Quality</li>
                <li className="text-amber-600">9. Pricing & Tokens</li>
                <li className="text-amber-600">10. FAQ</li>
              </ol>
            </div>
          </nav>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
              {/* Section 1 */}
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">What is Leonardo AI?</h2>
                <p className="text-gray-700 mb-4">
                  Leonardo AI is a powerful artificial intelligence platform specializing in image generation, visual
                  asset creation, and creative design tools. Built specifically for creators, game developers,
                  designers, and digital artists, Leonardo AI combines advanced AI image generation with practical tools
                  for content creation workflows.
                </p>
                <p className="text-gray-700 mb-4">
                  Unlike general-purpose AI image generators, Leonardo focuses on providing production-ready assets with
                  consistent quality and style control. The platform operates through an intuitive web-based interface
                  accessible from any browser, requiring no software installation or technical expertise.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Key Features of Leonardo AI</h2>
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                    <h3 className="font-bold text-amber-900 mb-2">AI Image Generation Engine</h3>
                    <p className="text-gray-700">
                      Produces high-resolution images from text descriptions with impressive quality and detail across
                      photorealistic renders, stylized artwork, character designs, and environments.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                    <h3 className="font-bold text-amber-900 mb-2">Consistent Character Generation</h3>
                    <p className="text-gray-700">
                      Maintains character appearance across multiple images—invaluable for storytelling, game
                      development, comic creation, and any project requiring recurring characters with consistent visual
                      identity.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                    <h3 className="font-bold text-amber-900 mb-2">AI Canvas for Editing</h3>
                    <p className="text-gray-700">
                      Intelligent editing workspace with inpainting, outpainting, masking tools, and layer-based editing
                      for precise control and complex compositions.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                    <h3 className="font-bold text-amber-900 mb-2">Texture Generation</h3>
                    <p className="text-gray-700">
                      Creates seamless, tileable textures for 3D modeling and game development with realistic materials
                      and PBR compatibility.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Getting Started with Leonardo AI</h2>
                <ol className="space-y-3 text-gray-700">
                  <li>
                    <strong>1. Create an Account:</strong> Visit the official website and register with email
                    verification to immediately begin exploring the platform.
                  </li>
                  <li>
                    <strong>2. Explore the Dashboard:</strong> The organized interface presents image generation tools,
                    creation history, community galleries, and model selection options.
                  </li>
                  <li>
                    <strong>3. Create Your First Image:</strong> Select an AI model, write a descriptive prompt, adjust
                    generation settings, and click generate to produce your image within seconds.
                  </li>
                  <li>
                    <strong>4. Understand Tokens:</strong> Each image generation consumes tokens based on resolution and
                    model complexity. Free accounts receive daily allocations.
                  </li>
                </ol>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Understanding Leonardo AI Models</h2>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Leonardo Diffusion XL:</strong> Flagship general-purpose model excelling at diverse subjects
                    with high-quality outputs and strong prompt adherence.
                  </p>
                  <p className="text-gray-700">
                    <strong>Leonardo Phoenix:</strong> Specializes in photorealistic image generation with exceptional
                    detail, realistic human figures, and cinematic quality renders.
                  </p>
                  <p className="text-gray-700">
                    <strong>Leonardo Anime XL:</strong> Delivers authentic anime and manga aesthetics with proper
                    proportions and vibrant colors.
                  </p>
                  <p className="text-gray-700">
                    <strong>Leonardo Vision XL:</strong> Optimizes for creative and artistic interpretations, producing
                    painterly and illustrative styles.
                  </p>
                  <p className="text-gray-700">
                    <strong>3D Texture Models:</strong> Create production-ready textures with material properties and
                    tileable patterns.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Mastering Leonardo AI Prompting</h2>
                <div className="bg-amber-50 p-6 rounded-lg mb-4">
                  <p className="text-gray-700 font-semibold mb-3">Example Structure:</p>
                  <p className="text-gray-700 italic">
                    "A determined female warrior | fantasy art style, detailed armor with Celtic patterns | standing on
                    a misty mountain peak at sunrise | highly detailed, 8k quality, dramatic lighting."
                  </p>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>• Structure Clearly:</strong> Subject first, then style, environment, and technical
                    specifications.
                  </p>
                  <p>
                    <strong>• Use Specific Language:</strong> Replace generic terms with detailed descriptions.
                  </p>
                  <p>
                    <strong>• Incorporate Style Modifiers:</strong> Use artistic movements, medium specifications,
                    quality indicators, and lighting descriptions.
                  </p>
                  <p>
                    <strong>• Define Composition:</strong> Include camera angles and framing like "close-up portrait" or
                    "wide angle shot."
                  </p>
                  <p>
                    <strong>• Leverage Negative Prompts:</strong> Exclude unwanted elements like "blurry," "low
                    quality," or "distorted."
                  </p>
                  <p>
                    <strong>• Use Weighted Keywords:</strong> Emphasize important elements with syntax like "(dramatic
                    lighting:1.5)"
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Advanced Features and Workflows</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2">AI Canvas Editing</h3>
                    <p className="text-gray-700">
                      Generate base images, then refine using inpainting, outpainting, and layer-based editing for
                      complex compositions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2">Image Guidance and ControlNet</h3>
                    <p className="text-gray-700">
                      Upload reference images to guide composition, define specific poses, maintain consistent layouts,
                      and control spatial relationships.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2">Batch Generation</h3>
                    <p className="text-gray-700">
                      Accelerate asset creation by generating multiple variations simultaneously and testing different
                      prompts efficiently.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2">Fine-tuning Custom Models</h3>
                    <p className="text-gray-700">
                      Train models on specific styles or subjects to create consistent aesthetics and develop
                      proprietary visual identities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Practical Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-bold text-amber-900 mb-2">Game Development</h3>
                    <p className="text-gray-700">
                      Concept art, character design, environments, texture creation, and UI elements.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-bold text-amber-900 mb-2">Marketing & Advertising</h3>
                    <p className="text-gray-700">
                      Social media content, advertisements, product mockups, and campaign concepts.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-bold text-amber-900 mb-2">Content Creation</h3>
                    <p className="text-gray-700">
                      YouTube thumbnails, blog images, social graphics, and educational illustrations.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-bold text-amber-900 mb-2">Filmmaking & Storyboarding</h3>
                    <p className="text-gray-700">
                      Pre-visualization, shot planning, character design, and pitch deck visuals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Image Quality Optimization</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Resolution:</strong> Balances quality with token consumption. Start with medium resolutions
                    for iteration, high for finals.
                  </p>
                  <p>
                    <strong>Guidance Scale (7-12 optimal):</strong> Lower values (3-7) allow creative interpretation.
                    Higher values (10-20) enforce strict prompt adherence.
                  </p>
                  <p>
                    <strong>Step Count:</strong> 30-50 steps generally optimal with diminishing returns beyond that
                    point.
                  </p>
                  <p>
                    <strong>Seed Values:</strong> Specify seed numbers to enable reproducibility and explore variations
                    of successful compositions.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Pricing and Token Management</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Free Tier:</strong> 150 tokens per day, ideal for hobbyists exploring the platform.
                  </p>
                  <p>
                    <strong>Paid Subscriptions:</strong> Significantly increased monthly allocations, faster queues,
                    premium models, and commercial use rights.
                  </p>
                  <p>
                    <strong>Token Strategies:</strong> Generate at lower resolutions during iteration, save
                    high-resolution for finals, use community models when appropriate, and batch similar generations.
                  </p>
                </div>
              </div>

              {/* Section 10 - FAQ */}
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-bold text-amber-900 mb-2">Q: Can I use Leonardo AI images commercially?</p>
                    <p className="text-gray-700">
                      A: Commercial use rights depend on your subscription tier. Free tier users have more restrictions;
                      paid subscribers typically have full commercial rights.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-bold text-amber-900 mb-2">
                      Q: How do I maintain character consistency across images?
                    </p>
                    <p className="text-gray-700">
                      A: Use Leonardo's character consistency tools, maintain specific feature descriptions in prompts,
                      use the same seed with variations, and leverage consistent style modifiers.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-bold text-amber-900 mb-2">Q: What's the best way to learn Leonardo AI?</p>
                    <p className="text-gray-700">
                      A: Explore the community gallery for inspiration, analyze successful prompts, experiment with
                      different models and settings, and join community forums for support.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-bold text-amber-900 mb-2">Q: How do I improve generation quality?</p>
                    <p className="text-gray-700">
                      A: Use specific, descriptive language in prompts, leverage negative prompts to exclude unwanted
                      elements, adjust guidance scale and step count, and match models to content types.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-bold text-amber-900 mb-2">
                      Q: What's the difference between Leonardo and other AI image generators?
                    </p>
                    <p className="text-gray-700">
                      A: Leonardo emphasizes asset generation and production-oriented features. While Midjourney focuses
                      on artistic concepts, Stable Diffusion requires technical setup, Leonardo balances accessibility
                      with professional capabilities.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-bold text-amber-900 mb-2">Q: Can I edit images after generation?</p>
                    <p className="text-gray-700">
                      A: Yes, Leonardo's AI Canvas provides inpainting, outpainting, masking, and layer-based editing
                      tools for refining and modifying generated images.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-bold text-amber-900 mb-2">Q: How many tokens does an image cost?</p>
                    <p className="text-gray-700">
                      A: Token consumption depends on resolution, model complexity, and batch size. Higher resolutions
                      and more complex models consume more tokens.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-bold text-amber-900 mb-2">Q: Can I create custom models?</p>
                    <p className="text-gray-700">
                      A: Yes, advanced users can fine-tune custom models trained on specific styles or subjects for
                      consistent aesthetic across projects.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-bold text-amber-900 mb-2">Q: What's the best model for photorealistic images?</p>
                    <p className="text-gray-700">
                      A: Leonardo Phoenix specializes in photorealistic generation with exceptional detail, lighting,
                      and cinematic quality—ideal when photographic realism is paramount.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-bold text-amber-900 mb-2">Q: How do I optimize tokens for maximum value?</p>
                    <p className="text-gray-700">
                      A: Generate at lower resolutions during iteration and brainstorming, reserve high-resolution
                      generation for final selections, use community models when appropriate, and batch similar
                      generations.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-bold text-amber-900 mb-2">Q: Is there a learning curve for Leonardo AI?</p>
                    <p className="text-gray-700">
                      A: The interface is intuitive and accessible for beginners. Mastering advanced techniques and
                      effective prompting improves with practice and learning from community examples.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
