'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Copy, Check, Sparkles, Zap, Users, Target, BarChart3, FileText, MessageSquare, Lightbulb } from 'lucide-react';

interface CopyCardProps {
  prompt: string;
  title: string;
}

function CopyCard({ prompt, title }: CopyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#D97706] transition-colors">
      <h4 className="text-white font-semibold mb-3">{title}</h4>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-3 py-2 rounded bg-[#D97706] hover:bg-[#B85E04] text-white text-sm font-medium transition-colors"
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied!
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy Prompt
          </>
        )}
      </button>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#333] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-[#1a1a1a] transition-colors"
      >
        <span className="text-white font-semibold text-left">{question}</span>
        <ChevronDown
          size={20}
          className={`text-[#D97706] flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="bg-[#1a1a1a] px-6 py-4 border-t border-[#333]">
          <p className="text-gray-300 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function InteriorDesignPromptsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Interior Designers: Create Better Designs, Present with Confidence',
            description: 'A comprehensive collection of 50+ AI prompts designed specifically for interior designers. Streamline room concepts, client presentations, material selection, and project management with AI.',
            image: 'https://gptprompts.ai/og-interior-design.jpg',
            author: {
              '@type': 'Organization',
              name: 'GPTPrompts.AI'
            },
            publisher: {
              '@type': 'Organization',
              name: 'GPTPrompts.AI'
            },
            datePublished: '2025-01-15',
            dateModified: '2026-03-28'
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can AI help me generate interior design concepts faster?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. AI can rapidly generate design concepts, mood boards, material suggestions, and layout ideas based on your style parameters. It\'s particularly useful for ideation, exploring multiple directions quickly, and overcoming creative blocks.'
                }
              },
              {
                '@type': 'Question',
                name: 'How can I use AI to improve my client presentations?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can help you create compelling presentation narratives, write detailed design briefs, generate talking points for different client types, create mood board descriptions, and draft before/after comparisons. This strengthens your pitch and builds client confidence.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can AI assist with material and color selection?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. Use AI to explore color palettes, suggest complementary materials, analyze durability and maintenance for different spaces, create material specification sheets, and explain design rationale for specific choices to clients.'
                }
              },
              {
                '@type': 'Question',
                name: 'How does AI help with project planning and budgeting?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can assist with scope statements, timeline creation, budget breakdowns by category, risk assessment, vendor selection frameworks, and project milestone tracking. It helps you plan efficiently and communicate timelines clearly to clients.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I use AI-generated designs directly in my portfolio?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can accelerate your design process and help generate ideas, but your professional expertise in refining, implementing, and personalizing designs is what creates your unique portfolio. Use AI as a tool to enhance your work, not replace your creative vision.'
                }
              },
              {
                '@type': 'Question',
                name: 'What AI tools work best for interior designers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ChatGPT, Claude, and Gemini excel at generating design concepts, writing client communication, creating project plans, and developing design narratives. Pair these with visual tools like Midjourney or DALL-E 3 for mood boards and renderings.'
                }
              },
              {
                '@type': 'Question',
                name: 'How can AI help me work with difficult clients?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use AI to draft clear briefs, create detailed design rationale documents, anticipate client concerns, generate multiple presentation approaches, and write professional communication templates that address client needs and expectations.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can AI help me estimate project costs and timelines?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. AI can help you create detailed scope statements, develop realistic timelines, generate cost breakdowns, identify potential delays, and create contingency plans. This improves your project management and client communication.'
                }
              },
              {
                '@type': 'Question',
                name: 'How do I maintain design authenticity while using AI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use AI to explore ideas and streamline administrative tasks, but rely on your professional eye for final decisions. AI excels at ideation and efficiency—your expertise in implementation, personalization, and refinement is what defines your brand.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can these prompts work for both residential and commercial projects?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most prompts are adaptable to both residential and commercial contexts. You can customize them for specific project types by adjusting brief details like budget, space type, client profile, and design goals.'
                }
              }
            ]
          })
        }}
      />

      <div className="bg-[#0a0a0a] text-white min-h-screen">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#333]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles size={32} className="text-[#D97706] flex-shrink-0" />
              <h1 className="text-4xl sm:text-5xl font-bold">AI Prompts for Interior Designers</h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Streamline your design process with 50+ AI prompts. Generate concepts faster, create compelling client presentations, and confidently execute projects from concept to completion.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4">
                <div className="text-2xl font-bold text-[#D97706] mb-1">50+</div>
                <div className="text-sm text-gray-400">AI Prompts</div>
              </div>
              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4">
                <div className="text-2xl font-bold text-[#D97706] mb-1">4x</div>
                <div className="text-sm text-gray-400">Faster Concepts</div>
              </div>
              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4">
                <div className="text-2xl font-bold text-[#D97706] mb-1">15+ Hours</div>
                <div className="text-sm text-gray-400">Saved Weekly</div>
              </div>
              <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4">
                <div className="text-2xl font-bold text-[#D97706] mb-1">100%</div>
                <div className="text-sm text-gray-400">Free Access</div>
              </div>
            </div>
          </div>
        </section>

        {/* Room Design & Concept Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#333]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Target size={28} className="text-[#D97706]" />
              <h2 className="text-3xl font-bold">Room Design & Concept Development</h2>
            </div>
            <p className="text-gray-300 mb-8">Generate design concepts, mood boards, and spatial solutions with AI assistance.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CopyCard
                title="Concept Ideation Generator"
                prompt="I'm designing a [ROOM TYPE] for a client who [CLIENT DESCRIPTION]. The space is [DIMENSIONS/SQUARE FOOTAGE] and has [ARCHITECTURAL FEATURES]. They want the room to feel [DESIRED MOOD/STYLE]. Generate 5 distinct design concepts that address [SPECIFIC CLIENT NEEDS]. For each concept, describe the overall aesthetic, primary color palette, key furniture pieces, and material selections. Explain why each concept works for their needs."
              />
              <CopyCard
                title="Spatial Planning Assistant"
                prompt="I'm planning a [ROOM TYPE] that needs to accommodate [ACTIVITIES/FUNCTIONS]. The room is [DIMENSIONS] with [ARCHITECTURAL CONSTRAINTS]. The client has [BUDGET RANGE] and prioritizes [PRIORITIES]. Create a detailed spatial plan that includes: furniture layout options, traffic flow analysis, focal points, lighting zones, and storage solutions. For each layout option, explain the pros and cons for their specific needs."
              />
              <CopyCard
                title="Mood Board Description Writer"
                prompt="I've created a mood board for a [STYLE] [ROOM TYPE] project. The board includes [BRIEF DESCRIPTION OF IMAGES/INSPIRATION]. Write a compelling 300-word narrative that ties these elements together, explaining the design philosophy, color story, material palette, and how it will function as a space. Make it suitable for presenting to a [CLIENT TYPE] client."
              />
              <CopyCard
                title="Style Refinement Consultant"
                prompt="My client initially wanted a [ORIGINAL STYLE] [ROOM TYPE], but is now drawn to elements of [NEW STYLE]. They like [SPECIFIC ELEMENTS FROM EACH STYLE]. Help me synthesize these preferences into a cohesive design direction. What are the key characteristics I should emphasize? Which elements blend well, and which might create visual conflict? Provide specific furniture, material, and color suggestions that bridge both aesthetics."
              />
            </div>
          </div>
        </section>

        {/* Client Presentation Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#333]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Users size={28} className="text-[#D97706]" />
              <h2 className="text-3xl font-bold">Client Presentation & Communication</h2>
            </div>
            <p className="text-gray-300 mb-8">Create compelling narratives and presentations that win client approval.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CopyCard
                title="Design Brief Composer"
                prompt="Create a professional design brief for a [ROOM TYPE] project. Client details: [CLIENT PROFILE]. Space: [DIMENSIONS, FEATURES]. Budget: [BUDGET RANGE]. Timeline: [PROJECT TIMELINE]. Project goals: [SPECIFIC OBJECTIVES]. Write a comprehensive 400-word design brief that includes: project overview, design objectives, space analysis, color palette rationale, material selections, functional requirements, and expected outcomes. Format it for presentation to the client."
              />
              <CopyCard
                title="Before & After Narrative"
                prompt="I'm presenting a [ROOM TYPE] transformation to my client. The original space was [ORIGINAL CONDITIONS]. The new design features [NEW DESIGN ELEMENTS]. Write a before-and-after narrative (250 words) that highlights the transformation, emphasizes functional improvements, explains design decisions, and showcases how the new design addresses their specific needs. Make it emotionally resonant and inspiring."
              />
              <CopyCard
                title="Client Objection Handler"
                prompt="During my presentation, a client raised a concern: '[CLIENT CONCERN]'. The design decision was made because [REASONING]. How should I address this objection? Provide 3 different response approaches: one data-driven, one emotional/lifestyle-focused, and one that offers alternatives. Help me explain the design rationale in a way that builds confidence and addresses their underlying concern."
              />
              <CopyCard
                title="Project Timeline & Budget Explainer"
                prompt="I need to explain my project timeline and budget to a client. The project includes [SPECIFIC PHASES/TASKS]. Timeline: [OVERALL DURATION]. Budget: [TOTAL BUDGET]. Create a clear, professional explanation that breaks down: timeline by phase, key milestones, why each phase takes time, budget allocation by category, and contingencies. Make it transparent and help the client understand value."
              />
            </div>
          </div>
        </section>

        {/* Material & Color Selection Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#333]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 size={28} className="text-[#D97706]" />
              <h2 className="text-3xl font-bold">Material & Color Selection</h2>
            </div>
            <p className="text-gray-300 mb-8">Select materials and colors that balance aesthetics, durability, and budget.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CopyCard
                title="Color Palette Generator"
                prompt="Create a color palette for a [ROOM TYPE] with a [STYLE] aesthetic. The room will be used for [ACTIVITIES]. Desired mood: [DESIRED MOOD]. The client prefers [COLOR PREFERENCES]. Budget: [BUDGET LEVEL]. Generate a complete palette including: primary colors (percentage breakdown), secondary accents, neutral base, and one bold accent. For each color, suggest where it should be used (walls, fabrics, accents) and explain the psychological effect."
              />
              <CopyCard
                title="Material Specification Sheet"
                prompt="I need to specify materials for a [ROOM TYPE] project. The space is used for [ACTIVITIES] and experiences [WEAR/USAGE LEVEL]. Client priorities: [PRIORITIES]. Budget: [BUDGET]. Create a detailed material specification including: flooring (material, durability rating, maintenance), wall treatment, upholstery options, trim/hardware finishes. For each material, explain durability, maintenance requirements, aesthetic qualities, and cost positioning."
              />
              <CopyCard
                title="Lighting Design Guide"
                prompt="Design the lighting scheme for a [ROOM TYPE]. The space serves [FUNCTIONS]. Desired mood: [MOOD]. Natural light situation: [NATURAL LIGHT CONDITIONS]. Budget: [BUDGET]. Create a comprehensive lighting plan that includes: ambient lighting strategy, task lighting locations, accent/mood lighting, fixture styles that match [DESIGN STYLE], dimming/control options, and energy efficiency considerations. Explain how each layer contributes to the overall design."
              />
              <CopyCard
                title="Budget-Conscious Material Substitution"
                prompt="A client loves the design but is concerned about cost. Original specification includes [ORIGINAL MATERIALS/FINISHES]. Total cost: [ORIGINAL COST]. Reduced budget: [NEW BUDGET]. Suggest material and finish substitutions that: maintain the aesthetic intent, meet durability requirements, fit the reduced budget, and stay authentic to the design. Explain why each substitution works and what's gained or traded in the switch."
              />
            </div>
          </div>
        </section>

        {/* Project Planning & Budget Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#333]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText size={28} className="text-[#D97706]" />
              <h2 className="text-3xl font-bold">Project Planning & Budget Management</h2>
            </div>
            <p className="text-gray-300 mb-8">Plan projects efficiently and manage budgets with confidence.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CopyCard
                title="Project Scope & Timeline Creator"
                prompt="Create a project scope and timeline for a [ROOM TYPE] renovation. Project size: [SQUARE FOOTAGE]. Scope includes: [SPECIFIC WORK]. Budget: [TOTAL BUDGET]. Client availability: [CONSTRAINTS]. Create: 1) Detailed scope statement, 2) Project phases with deliverables, 3) Timeline with milestones, 4) Critical path items, 5) Contingency buffer. Make it clear enough for client approval and detailed enough for your team execution."
              />
              <CopyCard
                title="Budget Breakdown & Allocation"
                prompt="Create a detailed budget breakdown for a [ROOM TYPE] project with a total budget of [BUDGET]. The scope includes [SPECIFIC WORK]. Client priorities: [PRIORITIES]. Allocate budget across: design/planning, materials, labor, furnishings, lighting/fixtures, contingency. For each category, list specific items and costs. Show percentage allocation and explain where value is concentrated. Suggest where savings could be made if needed."
              />
              <CopyCard
                title="Vendor & Supplier Selection Framework"
                prompt="I need to select vendors for a [ROOM TYPE] project. Required services/materials: [LIST]. Budget range: [BUDGET]. Quality requirements: [REQUIREMENTS]. Create a vendor selection framework that includes: criteria for evaluation (quality, reliability, timeline, cost), questions to ask each vendor, comparison matrix template, and how to verify references. Help me make decisions that balance quality, cost, and reliability."
              />
              <CopyCard
                title="Risk Assessment & Contingency Planner"
                prompt="Plan contingencies for a [ROOM TYPE] project. Project details: [SCOPE, TIMELINE, BUDGET]. Potential risks in [SPECIFIC AREAS]: [CLIENT CONCERNS]. Create: 1) Likely risks specific to this project, 2) Impact assessment (high/medium/low), 3) Mitigation strategies for each, 4) Contingency budget allocation, 5) Communication plan if issues arise. Help me plan proactively for successful delivery."
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#333]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare size={28} className="text-[#D97706]" />
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              <FAQItem
                question="Can AI help me generate interior design concepts faster?"
                answer="Yes. AI can rapidly generate design concepts, mood boards, material suggestions, and layout ideas based on your style parameters. It's particularly useful for ideation, exploring multiple directions quickly, and overcoming creative blocks. Many designers use AI to expand their concept options before selecting the strongest directions to develop further."
              />
              <FAQItem
                question="How can I use AI to improve my client presentations?"
                answer="AI can help you create compelling presentation narratives, write detailed design briefs, generate talking points for different client types, create mood board descriptions, and draft before/after comparisons. This strengthens your pitch, builds client confidence, and ensures every presentation is professionally articulated and polished."
              />
              <FAQItem
                question="Can AI assist with material and color selection?"
                answer="Absolutely. Use AI to explore color palettes, suggest complementary materials, analyze durability and maintenance for different spaces, create material specification sheets, and explain design rationale for specific choices to clients. AI is excellent at synthesizing functional and aesthetic considerations when selecting materials."
              />
              <FAQItem
                question="How does AI help with project planning and budgeting?"
                answer="AI can assist with scope statements, timeline creation, budget breakdowns by category, risk assessment, vendor selection frameworks, and project milestone tracking. It helps you plan efficiently and communicate timelines and budgets clearly to clients, reducing confusion and scope creep."
              />
              <FAQItem
                question="Can I use AI-generated designs directly in my portfolio?"
                answer="AI can accelerate your design process and help generate ideas, but your professional expertise in refining, implementing, and personalizing designs is what creates your unique portfolio. Use AI as a tool to enhance your work, not replace your creative vision. Your signature as a designer comes from your selections and refinements."
              />
              <FAQItem
                question="What AI tools work best for interior designers?"
                answer="ChatGPT, Claude, and Gemini excel at generating design concepts, writing client communication, creating project plans, and developing design narratives. Pair these with visual tools like Midjourney or DALL-E 3 for mood boards and renderings. Each tool has strengths—text-based AI for strategy and communication, visual AI for inspiration."
              />
              <FAQItem
                question="How can AI help me work with difficult clients?"
                answer="Use AI to draft clear briefs, create detailed design rationale documents, anticipate client concerns, generate multiple presentation approaches, and write professional communication templates that address client needs and expectations. AI helps you articulate your thinking in ways that build confidence and trust."
              />
              <FAQItem
                question="Can AI help me estimate project costs and timelines?"
                answer="Yes. AI can help you create detailed scope statements, develop realistic timelines, generate cost breakdowns, identify potential delays, and create contingency plans. This improves your project management, reduces unexpected overruns, and helps you communicate realistic expectations to clients."
              />
              <FAQItem
                question="How do I maintain design authenticity while using AI?"
                answer="Use AI to explore ideas and streamline administrative tasks, but rely on your professional eye for final decisions. AI excels at ideation and efficiency—your expertise in implementation, personalization, and refinement is what defines your brand and sets you apart in the marketplace."
              />
              <FAQItem
                question="Can these prompts work for both residential and commercial projects?"
                answer="Most prompts are adaptable to both residential and commercial contexts. You can customize them for specific project types by adjusting brief details like budget, space type, client profile, and design goals. Commercial projects may require additional compliance considerations, but the core prompts remain valuable."
              />
            </div>
          </div>
        </section>

        {/* Related Pages Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb size={28} className="text-[#D97706]" />
              <h2 className="text-3xl font-bold">Explore Related Resources</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/midjourney-prompts" className="bg-[#1a1a1a] border border-[#333] hover:border-[#D97706] rounded-lg p-6 transition-colors">
                <h3 className="text-white font-semibold mb-2">Midjourney Prompts</h3>
                <p className="text-sm text-gray-400">Visual inspiration and renderings</p>
              </Link>
              <Link href="/dalle-3-prompts" className="bg-[#1a1a1a] border border-[#333] hover:border-[#D97706] rounded-lg p-6 transition-colors">
                <h3 className="text-white font-semibold mb-2">DALL-E 3 Prompts</h3>
                <p className="text-sm text-gray-400">AI image generation for design</p>
              </Link>
              <Link href="/stable-diffusion-prompts" className="bg-[#1a1a1a] border border-[#333] hover:border-[#D97706] rounded-lg p-6 transition-colors">
                <h3 className="text-white font-semibold mb-2">Stable Diffusion Prompts</h3>
                <p className="text-sm text-gray-400">Open-source image generation</p>
              </Link>
              <Link href="/image-prompts" className="bg-[#1a1a1a] border border-[#333] hover:border-[#D97706] rounded-lg p-6 transition-colors">
                <h3 className="text-white font-semibold mb-2">Image Prompts</h3>
                <p className="text-sm text-gray-400">Visual content generation guide</p>
              </Link>
              <Link href="/ai-drawing-prompts" className="bg-[#1a1a1a] border border-[#333] hover:border-[#D97706] rounded-lg p-6 transition-colors">
                <h3 className="text-white font-semibold mb-2">AI Drawing Prompts</h3>
                <p className="text-sm text-gray-400">Artistic and design sketches</p>
              </Link>
              <Link href="/chatgpt-prompts" className="bg-[#1a1a1a] border border-[#333] hover:border-[#D97706] rounded-lg p-6 transition-colors">
                <h3 className="text-white font-semibold mb-2">ChatGPT Prompts</h3>
                <p className="text-sm text-gray-400">General AI prompt library</p>
              </Link>
              <Link href="/claude-prompts" className="bg-[#1a1a1a] border border-[#333] hover:border-[#D97706] rounded-lg p-6 transition-colors">
                <h3 className="text-white font-semibold mb-2">Claude Prompts</h3>
                <p className="text-sm text-gray-400">Advanced reasoning prompts</p>
              </Link>
              <Link href="/chatgpt-business-productivity" className="bg-[#1a1a1a] border border-[#333] hover:border-[#D97706] rounded-lg p-6 transition-colors">
                <h3 className="text-white font-semibold mb-2">Business Productivity</h3>
                <p className="text-sm text-gray-400">General business automation</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
