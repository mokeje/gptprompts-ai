"use client"
import Link from "next/link"
import { useState } from "react"
import { Copy, Check, ChevronDown, ChevronUp, Lightbulb, MessageSquare, Target, Zap, Users } from "lucide-react"

function CopyCard({ title, prompt, tag }: { title: string; prompt: string; tag?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#EAB308]/40 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          {tag && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#EAB308]/10 text-[#EAB308] mb-2 inline-block">{tag}</span>}
          <h3 className="font-semibold text-white text-sm">{title}</h3>
        </div>
        <button onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000) }} className="shrink-0 p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#EAB308]/20 transition-colors" aria-label="Copy prompt">
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-400" />}
        </button>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed font-mono whitespace-pre-wrap">{prompt}</p>
    </div>
  )
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-[#1a1a1a] transition-colors">
        <span className="font-medium text-white pr-4">{q}</span>
        {open ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#2a2a2a] pt-4">{a}</div>}
    </div>
  )
}

export default function BrainstormingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Article", "FAQPage"],
    headline: "AI Prompts for Brainstorming — Generate Ideas Fast",
    description: "Expert AI prompts to supercharge your brainstorming sessions. Generate innovative ideas, overcome creative blocks, and explore multiple perspectives with proven brainstorming techniques.",
    datePublished: "2026-03-28",
    dateModified: "2026-03-28",
    author: {
      "@type": "Organization",
      name: "GPT Prompts"
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are AI brainstorming prompts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI brainstorming prompts are carefully crafted instructions you give to AI models like ChatGPT to help generate creative ideas, explore multiple perspectives, and overcome creative blocks in your projects."
          }
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb size={32} className="text-[#EAB308]" />
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#EAB308]/10 text-[#EAB308]">Productivity</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Prompts for Brainstorming</h1>
        <p className="text-lg text-gray-400 mb-8">Generate innovative ideas, overcome creative blocks, and explore multiple perspectives with proven brainstorming techniques powered by AI.</p>
        
        <div className="grid gap-8">
          {/* Section 1: Idea Generation */}
          <section>
            <h2 className="text-2xl font-bold text-[#EAB308] mb-6 flex items-center gap-2">
              <Target size={24} />
              Idea Generation & Concept Development
            </h2>
            <div className="grid gap-4">
              <CopyCard 
                title="Mind Map Generator" 
                tag="Productivity"
                prompt={`Create a detailed mind map for [topic]. Start with the central theme and branch out into at least 5 main categories, then 3-4 subcategories under each. Format as a clear text hierarchy. For each subcategory, add 2-3 specific, actionable points.`} 
              />
              <CopyCard 
                title="Problem Reframing Technique" 
                tag="Creative"
                prompt={`I'm facing this challenge: [problem statement]. Help me reframe this problem in 5 different ways by looking at it from different perspectives (customer view, competitor view, investor view, operational view, future view). For each reframe, suggest 2 potential solutions.`} 
              />
              <CopyCard 
                title="Random Word Association" 
                tag="Creative"
                prompt={`Help me use random word association to generate ideas for [project/goal]. Pick 5 random objects or concepts that have nothing to do with my goal, then show me how each one could inspire a creative idea or unique approach to my project.`} 
              />
              <CopyCard 
                title="SCAMPER Framework" 
                tag="Analysis"
                prompt={`Using the SCAMPER technique (Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse), help me brainstorm improvements to [product/service]. Apply each principle systematically and list 2-3 ideas per principle.`} 
              />
              <CopyCard 
                title="Concept Mashup Generator" 
                tag="Creative"
                prompt={`Generate 10 creative mashup ideas by combining [concept 1] with [concept 2]. Think about unexpected combinations that could create something novel. For each mashup, describe what it is and why someone would want it.`} 
              />
            </div>
          </section>

          {/* Section 2: Creative Blocks & Breakthrough */}
          <section>
            <h2 className="text-2xl font-bold text-[#EAB308] mb-6 flex items-center gap-2">
              <Zap size={24} />
              Breaking Through Creative Blocks
            </h2>
            <div className="grid gap-4">
              <CopyCard 
                title="Constraint-Based Thinking" 
                tag="Strategy"
                prompt={`I need ideas for [goal], but I have these constraints: [list constraints]. Help me brainstorm solutions that work within these limits. First, identify how each constraint could be an advantage, then suggest 5-7 creative approaches that turn constraints into opportunities.`} 
              />
              <CopyCard 
                title="Reverse Brainstorming" 
                tag="Creative"
                prompt={`Help me brainstorm by using reverse thinking. Instead of "How do I [goal]?", let's ask "How would I prevent this from happening?" or "How would I create the opposite?". Generate 8-10 reverse ideas, then flip each one back to reveal potential solutions.`} 
              />
              <CopyCard 
                title="Six Thinking Hats" 
                tag="Analysis"
                prompt={`Apply Edward de Bono's Six Thinking Hats method to [decision/problem]. For each hat color (White=facts, Red=emotions, Black=critical, Yellow=positive, Green=creative, Blue=process), provide a perspective on the issue. Use this to generate new ideas.`} 
              />
              <CopyCard 
                title="Future-Casting Brainstorm" 
                tag="Strategy"
                prompt={`Imagine it's [year in future] and [goal] has become incredibly successful. Work backwards from that future state. What milestones did you achieve? What did you try that didn't work? What surprised you? Use these insights to generate ideas for action today.`} 
              />
            </div>
          </section>

          {/* Section 3: Team & Collaborative Brainstorming */}
          <section>
            <h2 className="text-2xl font-bold text-[#EAB308] mb-6 flex items-center gap-2">
              <Users size={24} />
              Team Collaboration & Facilitation
            </h2>
            <div className="grid gap-4">
              <CopyCard 
                title="Brainwriting Setup" 
                tag="Collaboration"
                prompt={`Help me organize a brainwriting session (silent, parallel brainstorming) for my team on the topic of [challenge]. Design a 45-minute session structure including: warm-up, individual ideation prompts, round-robin refinement, and clustering. Provide exact timing and instructions.`} 
              />
              <CopyCard 
                title="Divergence & Convergence Prompt" 
                tag="Process"
                prompt={`Create a structured brainstorming session plan for [topic] that includes both divergent (generate wild ideas) and convergent (evaluate and refine) phases. For each phase, give me specific prompts and facilitation tips to guide the team.`} 
              />
              <CopyCard 
                title="Cross-Functional Perspective Prompt" 
                tag="Strategy"
                prompt={`Help me facilitate a brainstorming session where team members from different departments (marketing, product, ops, engineering) brainstorm [goal] from their unique perspectives. Create role-based prompts for each function.`} 
              />
              <CopyCard 
                title="Idea Evaluation Matrix" 
                tag="Analysis"
                prompt={`I have these brainstormed ideas: [list ideas]. Help me create a weighted evaluation matrix with criteria like impact, feasibility, cost, timeline, and strategic fit. Score each idea and explain which ones bubble to the top.`} 
              />
            </div>
          </section>

          {/* Section 4: Industry-Specific Brainstorming */}
          <section>
            <h2 className="text-2xl font-bold text-[#EAB308] mb-6 flex items-center gap-2">
              <MessageSquare size={24} />
              Industry-Specific Techniques
            </h2>
            <div className="grid gap-4">
              <CopyCard 
                title="Product Feature Brainstorm" 
                tag="Product"
                prompt={`Help me brainstorm new features for [product/service]. Consider user pain points, competitive advantages, and tech trends. For each feature idea, explain: the user problem it solves, how it differentiates us, and rough complexity/effort estimate.`} 
              />
              <CopyCard 
                title="Marketing Campaign Concepts" 
                tag="Marketing"
                prompt={`Generate 8-10 creative campaign concepts for [product/service] targeting [audience]. For each concept: campaign name, core message, key channels, creative hook, and why it appeals to this audience. Focus on novelty and memorability.`} 
              />
              <CopyCard 
                title="Business Model Innovation" 
                tag="Strategy"
                prompt={`Help me brainstorm alternative business models for [current business]. Explore: subscription vs. freemium, marketplace vs. direct sales, B2B vs. B2C, licensing vs. product, etc. For each model, outline pros, cons, and implementation steps.`} 
              />
              <CopyCard 
                title="Content & Format Ideas" 
                tag="Content"
                prompt={`Generate 15-20 content ideas for [goal/audience]. Include diverse formats: blogs, videos, podcasts, infographics, webinars, case studies, guides, tools, templates, etc. For each, describe the topic and why your audience would find it valuable.`} 
              />
            </div>
          </section>

          {/* Section 5: Quick Brainstorming Frameworks */}
          <section>
            <h2 className="text-2xl font-bold text-[#EAB308] mb-6 flex items-center gap-2">
              <Lightbulb size={24} />
              Quick-Fire Techniques
            </h2>
            <div className="grid gap-4">
              <CopyCard 
                title="Rapid-Fire Ideas Generator" 
                tag="Brainstorm"
                prompt={`Generate 20 quick ideas for [goal] in stream-of-consciousness style. Don't filter or judge—just list them rapidly. I'll use this as raw material to refine later. Format as a numbered list with brief, punchy descriptions.`} 
              />
              <CopyCard 
                title="Attribution Brainstorm" 
                tag="Creative"
                prompt={`How would [famous person/character/brand] approach [your challenge]? Generate ideas by thinking like: a tech entrepreneur, an artist, a comedian, a military strategist, and a child. What would each perspective suggest?`} 
              />
              <CopyCard 
                title="Analogical Thinking Prompt" 
                tag="Analysis"
                prompt={`Help me solve [problem] using analogies from other fields. Think about how [unrelated industry/domain] solves similar problems. What can I learn from their approaches? Generate 5-7 analogies with potential applications.`} 
              />
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="grid gap-4">
              <FAQ 
                q="What's the difference between brainstorming and ideation?"
                a="Brainstorming is a group activity focused on generating many ideas quickly without judgment, while ideation is the broader process of forming and developing ideas. Brainstorming is one technique within ideation that emphasizes quantity over quality initially."
              />
              <FAQ 
                q="How do I use these AI prompts most effectively?"
                a="Provide specific context about your challenge, desired outcomes, and constraints. The more detailed your input, the more tailored the AI's suggestions will be. Treat the output as a starting point—refine and combine ideas rather than using them as-is."
              />
              <FAQ 
                q="Can AI really help with creative brainstorming?"
                a="Yes, AI excels at generating diverse perspectives, combining ideas in unexpected ways, and providing structured frameworks. It's best used as a brainstorming partner to spark ideas and overcome blocks, not as a replacement for human creativity."
              />
              <FAQ 
                q="How many ideas should I generate before evaluating?"
                a="Aim for quantity first—generate 20-50 ideas before filtering. This follows the principle of divergent thinking: expand possibilities widely before converging on the best options. Premature evaluation kills creativity."
              />
              <FAQ 
                q="What's the best AI model for brainstorming?"
                a="GPT-4, Claude 3, and other advanced models work well. Choose based on what you have access to. More powerful models tend to generate more diverse and nuanced ideas, but even simpler models can facilitate good brainstorming with well-crafted prompts."
              />
              <FAQ 
                q="How do I avoid groupthink when brainstorming with my team?"
                a="Use silent brainstorming (brainwriting), encourage devil&apos;s advocate perspectives, involve diverse teams, use structured frameworks like Six Thinking Hats, and explicitly invite contrarian ideas. Set psychological safety as a ground rule."
              />
              <FAQ 
                q="Can I use these prompts for solo brainstorming?"
                a="Absolutely. These prompts work just as well for individual ideation. You might even find solo brainstorming more productive because you can explore ideas at your own pace without social dynamics affecting your creativity."
              />
              <FAQ 
                q="How do I know which ideas to pursue?"
                a="Use an evaluation matrix with criteria like feasibility, impact, alignment with goals, time-to-market, and resource requirements. Score each idea, then prototype or pilot your top 3-5 candidates before full commitment."
              />
              <FAQ 
                q="What if the AI generates ideas I&apos;ve already considered?"
                a="That&apos;s normal—it validates those ideas were good starting points. Push further by asking the AI to build on them, combine them with other ideas, or explore why they&apos;re worth reconsidering alongside new options."
              />
              <FAQ 
                q="How often should I brainstorm to maintain innovation?"
                a="Ideally, schedule regular brainstorming sessions—weekly for ongoing challenges, monthly for strategic planning, or quarterly for major initiatives. The frequency depends on your industry pace and competitive pressure."
              />
              <FAQ 
                q="Can I use these prompts for problem-solving?"
                a="Yes, many of these techniques (reverse thinking, constraint-based thinking, reframing) are excellent for problem-solving. The key is treating your problem as an opportunity and exploring multiple solution angles."
              />
              <FAQ 
                q="How do I document and share brainstorm results?"
                a="Capture ideas in a shared document or tool (Notion, Miro, Google Docs) during the session. Organize by category, tag promising ideas, and assign owners for follow-up. This creates accountability and makes it easy to reference ideas later."
              />
            </div>
          </section>

          {/* Related Pages */}
          <section className="mt-12 pt-8 border-t border-[#2a2a2a]">
            <h3 className="text-lg font-semibold text-white mb-4">Related Prompts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/ai-prompts-meeting-notes" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#6366F1]/40 transition-colors">
                <p className="font-semibold text-white mb-2">Meeting Notes</p>
                <p className="text-sm text-gray-400">Summarize and structure meetings efficiently</p>
              </Link>
              <Link href="/ai-prompts-personal-finance" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#059669]/40 transition-colors">
                <p className="font-semibold text-white mb-2">Personal Finance</p>
                <p className="text-sm text-gray-400">Master budgeting and financial planning</p>
              </Link>
              <Link href="/chatgpt-prompts-meal-planning" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#F97316]/40 transition-colors">
                <p className="font-semibold text-white mb-2">Meal Planning</p>
                <p className="text-sm text-gray-400">Plan nutritious meals with AI assistance</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
