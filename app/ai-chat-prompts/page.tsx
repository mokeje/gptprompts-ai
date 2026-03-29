"use client"

import { useState } from "react"
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#0EA5E9] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-medium py-2 px-4 rounded transition-colors">
        {copied ? (<><Check className="w-4 h-4" />Copied</>) : (<><Copy className="w-4 h-4" />Copy Prompt</>)}
      </button>
    </div>
  )
}

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-lg">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 hover:bg-[#1a1a1a] transition-colors text-left">
        <span className="font-medium text-white">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
      </button>
      {open && <div className="border-t border-[#2a2a2a] p-4 bg-[#0f0f0f] text-gray-300 leading-relaxed">{a}</div>}
    </div>
  )
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "100+ Best AI Chat Prompts",
    description: "Explore 100+ expertly crafted AI chat prompts for roleplay, brainstorming, debate, interviews, and creative conversations.",
    datePublished: "2026-03-29",
    dateModified: "2026-03-29",
    author: { "@type": "Organization", name: "GPT Prompts" }
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What are AI chat prompts?", acceptedAnswer: { "@type": "Answer", text: "AI chat prompts are structured instructions or questions you provide to an AI language model to guide it toward generating specific, useful responses. They help shape the tone, style, and content direction of the conversation." } },
      { "@type": "Question", name: "How do I use these prompts effectively?", acceptedAnswer: { "@type": "Answer", text: "Copy a prompt and paste it into your AI chat interface (ChatGPT, Claude, etc.). You can customize the prompt with your specific details, ask follow-up questions, or use it as a starting point for deeper conversations." } },
      { "@type": "Question", name: "Can I modify these prompts?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. These prompts are templates. Modify them to fit your specific needs, context, and goals. The more tailored the prompt, the better the response." } },
      { "@type": "Question", name: "What AI models work best with these prompts?", acceptedAnswer: { "@type": "Answer", text: "These prompts work with GPT-4, Claude 3, Gemini, and other modern language models. The quality improves with more capable models, but they're effective across most LLMs." } },
      { "@type": "Question", name: "How can I get better responses?", acceptedAnswer: { "@type": "Answer", text: "Be specific about your context and requirements. Include examples of the style you want, define success criteria, and ask clarifying questions if the first response isn\'t quite right." } },
      { "@type": "Question", name: "Are these prompts free to use?", acceptedAnswer: { "@type": "Answer", text: "Yes. All prompts on this site are free to use for personal and commercial projects. Feel free to adapt them however you need." } },
      { "@type": "Question", name: "What if the AI response doesn\'t match my needs?", acceptedAnswer: { "@type": "Answer", text: "Refine your prompt by adding more detail, examples, or constraints. Ask the AI to rewrite in a different style. Iterate until you get the result you want." } },
      { "@type": "Question", name: "Can these prompts be used for business applications?", acceptedAnswer: { "@type": "Answer", text: "Yes. These prompts are designed for both personal and professional use. Many are specifically tailored for business scenarios like client communication and strategy development." } },
      { "@type": "Question", name: "How often are new prompts added?", acceptedAnswer: { "@type": "Answer", text: "We regularly expand our prompt library based on user feedback and emerging use cases. Check back frequently for new additions." } },
      { "@type": "Question", name: "Do you offer custom prompt development?", acceptedAnswer: { "@type": "Answer", text: "Our focus is on providing a comprehensive free library. For custom enterprise solutions, consider working with an AI strategy consultant." } }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      
      <div className="min-h-screen bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">100+ Best AI Chat Prompts</h1>
            <p className="text-xl text-gray-400">Master the art of conversation with expertly crafted prompts for roleplay, brainstorming, debate practice, interview simulation, creative discussions, and more.</p>
          </div>

          <div className="space-y-16">
            {/* Roleplay Scenarios */}
            <section>
              <h2 className="text-3xl font-bold text-[#0EA5E9] mb-8">Roleplay Scenarios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CopyCard title="Historical Figure Interview" prompt="You are interviewing [historical figure] in [year/context]. Ask thoughtful, detailed questions about their decisions, motivations, and perspectives on key events. The responses should be historically accurate while showing personality and human emotion. Maintain character consistency throughout." />
                <CopyCard title="Customer Service Scenario" prompt="You are a patient customer service representative helping a customer who is frustrated about [specific issue]. Handle their concern with empathy, provide clear solutions, and work toward resolution while maintaining professionalism and understanding their emotional state. Document the interaction thoroughly." />
                <CopyCard title="Expert Consultant Role" prompt="Act as a world-class [specific field] consultant with 20+ years of experience. A client approaches you with [problem/question]. Provide strategic, nuanced advice that draws on industry best practices, emerging trends, and real-world experience. Challenge assumptions where appropriate." />
                <CopyCard title="Debate Opponent" prompt="Take the position that [statement]. Argue this perspective convincingly using logic, evidence, and rhetorical skill. Anticipate counterarguments and address them. Maintain intellectual honesty while defending your position effectively throughout the discussion." />
                <CopyCard title="Mentor Character" prompt="You are a wise mentor/teacher character with [specific expertise]. A mentee approaches you asking about [topic]. Provide guidance that balances direct answers with thought-provoking questions. Help them develop their own critical thinking while sharing your experience." />
                <CopyCard title="Product Manager Pitch" prompt="You are pitching a new product/feature to [stakeholder type]. Present the value proposition, market opportunity, user benefits, competitive advantage, and implementation roadmap. Be convincing but realistic about challenges and timelines." />
              </div>
            </section>

            {/* Brainstorming Sessions */}
            <section>
              <h2 className="text-3xl font-bold text-[#0EA5E9] mb-8">Brainstorming Sessions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CopyCard title="Creative Name Generation" prompt="Generate 20+ creative, memorable, and [tone] name options for [product/business/feature]. For each, explain the thinking behind the name, what feeling or association it evokes, and why it works for this specific context. Include wordplay, metaphors, and unexpected combinations." />
                <CopyCard title="Content Ideas Storm" prompt="I need [number] content ideas for [audience/platform]. Each idea should be specific, include the format (video/article/podcast/etc), target audience, key message, and why this audience would care. Think beyond obvious topics and suggest angles that haven\'t been overexposed." />
                <CopyCard title="Problem-Solving Workshop" prompt="We\'re facing [specific problem] that\'s impacting [area]. Brainstorm 15+ potential solutions ranging from quick fixes to long-term strategic approaches. For each solution, assess feasibility, timeline, resource requirements, and potential impact. Include unconventional ideas alongside practical ones." />
                <CopyCard title="Marketing Campaign Concepts" prompt="Create 10+ campaign concepts for [product/service] targeting [specific audience]. Each concept should include: headline, core message, visual/creative direction, media channels, call-to-action, and why it resonates with this audience. Make them distinct in approach and tone." />
                <CopyCard title="Feature Ideation" prompt="Generate 15+ feature ideas that would improve [product] for [user segment]. Each feature should solve a real problem or create new value. Include: user pain point it addresses, how it works, implementation complexity, and impact on user retention or satisfaction." />
                <CopyCard title="Business Model Variations" prompt="Explore 10+ alternative business model approaches for [company/product] currently using [existing model]. Include: revenue streams, customer acquisition method, pricing strategy, unit economics implications, and when/why this model might outperform the current approach." />
              </div>
            </section>

            {/* Debate Practice */}
            <section>
              <h2 className="text-3xl font-bold text-[#0EA5E9] mb-8">Debate Practice</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CopyCard title="For/Against Analysis" prompt="Present strong arguments both FOR and AGAINST the statement: [statement]. For each side, provide 3-4 substantive arguments with supporting evidence, address potential counterarguments, and explain why reasonable people might hold this view. Be intellectually fair to both positions." />
                <CopyCard title="Policy Debate" prompt="You argue FOR the policy: [specific policy proposal]. Build a case using evidence, logical reasoning, and real-world examples. Address the strongest counterarguments. Structure your argument clearly with an opening position, key evidence points, and closing statement that ties it together." />
                <CopyCard title="Value-Based Disagreement" prompt="People disagree on [topic] because they prioritize different values. Explain: what values each side prioritizes, why those values matter to them, where the values conflict, and whether compromise is possible. Show understanding of both perspectives." />
                <CopyCard title="Interrogation Strategy" prompt="I want to understand the strength of the position that [statement]. Ask me 10 probing questions that would test the logic, evidence, assumptions, and real-world applicability of this view. Push back on weak points while remaining intellectually honest." />
                <CopyCard title="Devil\'s Advocate Challenge" prompt="My position is [statement]. Argue against me as persuasively as possible. Find the weaknesses in my logic, challenge my assumptions, present counterevidence, and highlight unintended consequences I might be overlooking. Don\'t hold back." />
                <CopyCard title="Historical Parallels Analysis" prompt="Compare and contrast [current situation/debate] with [historical precedent]. What can we learn from history? Where are the parallels instructive? Where do they break down? How should historical lessons inform current thinking without being deterministic?" />
              </div>
            </section>

            {/* Interview Simulation */}
            <section>
              <h2 className="text-3xl font-bold text-[#0EA5E9] mb-8">Interview Simulation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CopyCard title="Behavioral Interview Prep" prompt="Conduct a behavioral interview for a [role] position. Ask 5-6 questions about past experiences using the STAR method format. For my responses, provide coaching on whether my answer effectively demonstrates the required competency. Suggest how I could strengthen my response." />
                <CopyCard title="Technical Interview Simulation" prompt="You are conducting a [technology/domain] interview for [job level]. Present me with a realistic technical problem or scenario relevant to this role. After I propose a solution, evaluate it on correctness, efficiency, and approach. Ask follow-up questions a real interviewer would ask." />
                <CopyCard title="Case Interview Practice" prompt="Present me with a case: [specific business problem]. Walk me through it like a real case interview. Let me think, ask clarifying questions, make assumptions. As I work through it, provide hints if I\'m stuck. At the end, critique my approach and reasoning." />
                <CopyCard title="Difficult Question Preparation" prompt="I\'m preparing for interviews for [role/company]. Give me the 8 hardest questions I\'ll likely face. For each one, give me a strong framework for answering. Then let me practice my response, and give me feedback on confidence, clarity, and authenticity." />
                <CopyCard title="Storytelling Interview" prompt="Help me craft and practice [number] interview stories that illustrate [specific competencies]. Walk me through structuring each story for impact. Then interview me using these stories naturally. Tell me if they\'re compelling and where they could be strengthened." />
                <CopyCard title="Culture Fit Assessment Interview" prompt="Ask me questions to assess whether I\'d thrive in a [specific culture type/company] environment. Explore my values, work style, team preferences, and how I handle [specific cultural challenges]. Be candid about what this company is actually like." />
              </div>
            </section>

            {/* Creative Conversations */}
            <section>
              <h2 className="text-3xl font-bold text-[#0EA5E9] mb-8">Creative Conversations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CopyCard title="Storytelling Collaboration" prompt="Let\'s co-create a story. I\'ll provide the opening: [opening]. You continue with 2-3 paragraphs that develop plot, character, and atmosphere. Then I\'ll take the next turn. Keep the story engaging, build tension, and stay true to the tone I establish." />
                <CopyCard title="Philosophical Exploration" prompt="Explore the philosophical question: [question]. Start with your initial thinking, then take me on a journey through different perspectives, thought experiments, and implications. Challenge me to think deeper. What does this question reveal about human nature or ethics?" />
                <CopyCard title="Creative Writing Feedback" prompt="I\'ve written: [text]. Give me honest, detailed feedback on: voice and tone, pacing, word choice effectiveness, emotional impact, clarity, and areas for improvement. Identify what\'s working well specifically. Suggest revisions that strengthen the piece without changing my voice." />
                <CopyCard title="Idea Development Partner" prompt="I have a rough idea: [idea]. Help me develop it. Ask me probing questions about what I\'m trying to achieve, who it\'s for, what makes it unique. Help me refine the concept, spot potential problems early, and build out the supporting details." />
                <CopyCard title="Genre Exploration" prompt="I want to write in the [genre] style. Explain the conventions, tropes, and reader expectations of this genre. Give me examples of how master writers use these conventions effectively. Then let me write a sample and give me feedback on how well I\'m working within the genre." />
                <CopyCard title="Character Development Deep Dive" prompt="Help me develop a complex character. I\'m starting with: [basic description]. Through conversation, we\'ll explore their background, motivations, contradictions, growth arc, and how they\'d respond in different scenarios. Make them feel real and multidimensional." />
              </div>
            </section>

            {/* Advanced Applications */}
            <section>
              <h2 className="text-3xl font-bold text-[#0EA5E9] mb-8">Advanced Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CopyCard title="Learning Through Dialogue" prompt="I want to deeply understand [complex topic]. Let\'s use the Socratic method. Start by assessing what I know, then ask questions that progressively build my understanding. Avoid just telling me answers. Help me discover insights through guided questioning." />
                <CopyCard title="Decision-Making Workshop" prompt="I\'m facing a decision: [specific decision]. Help me think through it systematically. Identify my options, hidden assumptions, and unknowns. For each path, walk through likely consequences. Help me clarify my values and priorities so I can make a decision aligned with what matters most." />
                <CopyCard title="Criticism and Growth" prompt="I want to improve at [specific skill/area]. Give me constructive criticism on [specific work/performance]. Be honest about gaps and weaknesses, but frame it as actionable feedback. Help me understand the root cause and create a development plan to improve." />
                <CopyCard title="Perspective Shifting" prompt="Help me understand [issue/conflict] from a perspective different from my own. Present the other side\'s logic, values, and concerns in a way that\'s fair and compelling. Challenge my assumptions gently but directly. Help me find common ground." />
                <CopyCard title="Research Direction" prompt="I\'m researching [topic]. Help me develop a research strategy. What are the key questions to explore? What sources should I prioritize? What are the major schools of thought? Guide me toward a comprehensive understanding while avoiding common misconceptions." />
                <CopyCard title="Reflection and Insight" prompt="I\'ve been thinking about [experience/challenge]. Help me extract deeper insights from it. Ask me questions that help me see patterns, understand what I\'ve learned, and consider how this shapes future decisions. Turn experience into wisdom." />
              </div>
            </section>
          </div>

          {/* FAQ Section */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <FAQItem q="What are AI chat prompts?" a="AI chat prompts are structured instructions or questions you provide to an AI language model to guide it toward generating specific, useful responses. They help shape the tone, style, and content direction of the conversation." />
              <FAQItem q="How do I use these prompts effectively?" a="Copy a prompt and paste it into your AI chat interface (ChatGPT, Claude, etc.). You can customize the prompt with your specific details, ask follow-up questions, or use it as a starting point for deeper conversations." />
              <FAQItem q="Can I modify these prompts?" a="Absolutely. These prompts are templates. Modify them to fit your specific needs, context, and goals. The more tailored the prompt, the better the response." />
              <FAQItem q="What AI models work best with these prompts?" a="These prompts work with GPT-4, Claude 3, Gemini, and other modern language models. The quality improves with more capable models, but they\'re effective across most LLMs." />
              <FAQItem q="How can I get better responses?" a="Be specific about your context and requirements. Include examples of the style you want, define success criteria, and ask clarifying questions if the first response isn\'t quite right." />
              <FAQItem q="Are these prompts free to use?" a="Yes. All prompts on this site are free to use for personal and commercial projects. Feel free to adapt them however you need." />
              <FAQItem q="What if the AI response doesn\'t match my needs?" a="Refine your prompt by adding more detail, examples, or constraints. Ask the AI to rewrite in a different style. Iterate until you get the result you want." />
              <FAQItem q="Can these prompts be used for business applications?" a="Yes. These prompts are designed for both personal and professional use. Many are specifically tailored for business scenarios like client communication and strategy development." />
              <FAQItem q="How often are new prompts added?" a="We regularly expand our prompt library based on user feedback and emerging use cases. Check back frequently for new additions." />
              <FAQItem q="Do you offer custom prompt development?" a="Our focus is on providing a comprehensive free library. For custom enterprise solutions, consider working with an AI strategy consultant." />
            </div>
          </section>

          {/* Related Pages */}
          <section className="mt-20 pt-20 border-t border-[#2a2a2a]">
            <h2 className="text-3xl font-bold text-white mb-8">Related Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/ai-character-chat-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#0EA5E9] transition-colors">
                <h3 className="font-bold text-white mb-2">AI Character Chat</h3>
                <p className="text-sm text-gray-400">Create and interact with detailed characters</p>
              </Link>
              <Link href="/ai-personal-assistant-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#0EA5E9] transition-colors">
                <h3 className="font-bold text-white mb-2">Personal Assistant</h3>
                <p className="text-sm text-gray-400">Delegate tasks and automate workflows</p>
              </Link>
              <Link href="/generative-ai-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#0EA5E9] transition-colors">
                <h3 className="font-bold text-white mb-2">Generative AI</h3>
                <p className="text-sm text-gray-400">Create content, images, and media</p>
              </Link>
              <Link href="/ai-resume-builder-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#0EA5E9] transition-colors">
                <h3 className="font-bold text-white mb-2">Resume Builder</h3>
                <p className="text-sm text-gray-400">Craft compelling resumes</p>
              </Link>
              <Link href="/ai-for-risk-management-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#0EA5E9] transition-colors">
                <h3 className="font-bold text-white mb-2">Risk Management</h3>
                <p className="text-sm text-gray-400">Identify and mitigate risks</p>
              </Link>
              <Link href="/ai-for-executives-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#0EA5E9] transition-colors">
                <h3 className="font-bold text-white mb-2">For Executives</h3>
                <p className="text-sm text-gray-400">Strategic decision-making prompts</p>
              </Link>
              <Link href="/ai-for-leadership-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#0EA5E9] transition-colors">
                <h3 className="font-bold text-white mb-2">Leadership Development</h3>
                <p className="text-sm text-gray-400">Build leadership capabilities</p>
              </Link>
              <Link href="/ai-for-quality-management-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#0EA5E9] transition-colors">
                <h3 className="font-bold text-white mb-2">Quality Management</h3>
                <p className="text-sm text-gray-400">Maintain and improve quality standards</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
