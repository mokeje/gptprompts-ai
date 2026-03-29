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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#8B5CF6] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium py-2 px-4 rounded transition-colors">
        {copied ? (<><Check className="w-4 h-4" />Copied</>) : (<><Copy className="w-4 h-4" />Copy Prompt</>)}
      </button>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 bg-[#1a1a1a] hover:bg-[#222] transition-colors">
        <h4 className="font-semibold text-white text-left">{question}</h4>
        {open ? <ChevronUp className="w-5 h-5 text-[#8B5CF6]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>
      {open && <div className="p-4 bg-[#0a0a0a] border-t border-[#2a2a2a] text-gray-300 text-sm leading-relaxed">{answer}</div>}
    </div>
  )
}

export default function AIWritingAssistantPromptsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"AI Writing Assistant Prompts — 30+ ChatGPT Prompts for Content Creation","description":"30+ ChatGPT prompts to master AI-powered writing. Generate engaging copy, refine tone, create long-form content, improve grammar, and develop consistent brand voice.","datePublished":"2026-03-29","dateModified":"2026-03-29","author":{"@type":"Organization","name":"GPT Prompts"}})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How can AI writing assistants improve my content creation workflow?","acceptedAnswer":{"@type":"Answer","text":"AI writing assistants can streamline your process by generating first drafts, improving tone and clarity, expanding short ideas into full pieces, and maintaining consistent voice across all your content. They handle repetitive writing tasks so you can focus on strategy and creative direction."}},{"@type":"Question","name":"What types of writing can AI assist with?","acceptedAnswer":{"@type":"Answer","text":"AI can assist with blog posts, email campaigns, social media content, product descriptions, technical documentation, creative writing, marketing copy, newsletters, press releases, and much more. The prompts in this guide cover everything from short-form to long-form content."}},{"@type":"Question","name":"How do I maintain my unique voice when using AI writing tools?","acceptedAnswer":{"@type":"Answer","text":"Provide detailed instructions about your tone, style, and audience in your prompts. Share examples of your preferred writing style, specify vocabulary to avoid or emphasize, and always edit and personalize AI-generated content to match your voice."}},{"@type":"Question","name":"Can AI replace human writers?","acceptedAnswer":{"@type":"Answer","text":"No—AI is a tool that amplifies human writers. It handles repetitive drafting and editing tasks, but human judgment, creativity, and strategic thinking remain essential. The best results come from using AI as a collaborator, not a replacement."}},{"@type":"Question","name":"How do I avoid generic, AI-sounding output?","acceptedAnswer":{"@type":"Answer","text":"Be specific in your prompts: provide context, examples, target audience details, and desired tone. Ask for multiple versions and refine. Edit ruthlessly to inject personality and remove clichés. The more specific your prompt, the better the output."}},{"@type":"Question","name":"What&apos;s the difference between a good and bad AI writing prompt?","acceptedAnswer":{"@type":"Answer","text":"Good prompts are specific, include context, define tone and audience, and often request multiple options. Bad prompts are vague ('write something good') and lack guidance. This guide teaches you the framework for writing prompts that deliver strong results."}},{"@type":"Question","name":"How can I use AI to improve existing content?","acceptedAnswer":{"@type":"Answer","text":"Use AI to rewrite for different tones, expand key sections, create multiple versions for A/B testing, generate headlines and summaries, improve readability, and adapt content for different platforms. The editing prompts in this guide cover all these use cases."}},{"@type":"Question","name":"Can I use AI-generated content commercially?","acceptedAnswer":{"@type":"Answer","text":"Yes, but verify your AI tool's terms. Always edit substantially to ensure originality and quality. Consider disclosure in some contexts. Treat AI-generated content as a draft—your final work should be meaningfully shaped by human judgment."}},{"@type":"Question","name":"How do I create a consistent brand voice with multiple AI tools?","acceptedAnswer":{"@type":"Answer","text":"Create a brand voice guide and include key elements in every prompt: tone descriptors, vocabulary preferences, target audience, and style examples. This ensures consistency even when using multiple tools or team members prompting on your behalf."}},{"@type":"Question","name":"What&apos;s the best way to organize my AI writing workflow?","acceptedAnswer":{"@type":"Answer","text":"Start with a clear brief (audience, goal, tone, format). Use AI to generate multiple drafts. Review and select the strongest version. Edit and personalize substantially. Final review and publish. This guide provides prompts for each stage of this workflow."}}]}) }} />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">AI Writing Assistant Prompts</h1>
          <p className="text-xl text-gray-400">30+ ChatGPT prompts to master AI-powered writing. Generate engaging copy, refine tone, create long-form content, improve grammar, and develop consistent brand voice.</p>
        </div>

        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#8B5CF6]">Content Generation & First Drafts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard title="Blog Post Outline Generator" prompt="Create a detailed outline for a blog post titled &quot;[Your Topic]&quot; for [Target Audience]. Include:\n- Compelling introduction hook\n- 5-7 main sections with subsections\n- Key points to cover in each section\n- Conclusion and call-to-action suggestions\n\nTone: [Specify tone]\nWord count target: [X] words\nInclude data points and statistics where relevant." />
              <CopyCard title="Email Campaign Draft" prompt="Write an email campaign for [Product/Service]:\n\nEmail 1 - Subject: [Topic]\nGoal: [Goal]\nTarget audience: [Audience]\nTone: [Tone]\nKey message: [Message]\n\nInclude:\n- Compelling subject line\n- Hook (first 2 sentences)\n- Body with 3 key benefits\n- Call-to-action\n- Length: [X] words" />
              <CopyCard title="Social Media Content Creator" prompt="Generate 10 LinkedIn post ideas for [Industry/Topic]:\n- Focus on [Specific theme]\n- Target audience: [Audience]\n- Mix of: tips, insights, questions, stories\n- Tone: [Specify tone]\n- Include relevant hashtags\n- Engagement hooks for each post" />
              <CopyCard title="Product Description Writer" prompt="Write a product description for [Product]:\n- Target audience: [Audience]\n- Key features: [List features]\n- Main benefits: [List benefits]\n- Brand voice: [Describe voice]\n- Include:\n  - Hook (first sentence)\n  - 2-3 paragraph description\n  - 3-5 bullet points\n  - Call-to-action" />
              <CopyCard title="Newsletter Content Brainstorm" prompt="Generate 8 newsletter topics and brief outlines for [Industry/Subject]:\n- Target readers: [Audience]\n- Newsletter tone: [Tone]\n- Content mix: [e.g., tips, news, insights]\n- For each topic include:\n  - Headline\n  - 2-sentence summary\n  - 3 key points to cover" />
              <CopyCard title="Video Script Outline" prompt="Create a script outline for a [Length]-minute [Type] video about [Topic]:\n- Target audience: [Audience]\n- Main goal: [Goal]\n- Tone: [Tone]\n- Include:\n  - Hook (first 10 seconds)\n  - 4-5 main sections with talking points\n  - Transitions between sections\n  - Strong closing and call-to-action" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#8B5CF6]">Editing & Refinement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard title="Tone Adjustment Specialist" prompt="Rewrite the following text in a [Desired tone] tone:\n\n[Paste your text]\n\nKeep:\n- Same core message\n- Key facts and data\n- Approximate length\n\nChange:\n- Word choice and phrasing\n- Sentence structure\n- Emotional resonance\n- Personality and voice" />
              <CopyCard title="Grammar & Clarity Editor" prompt="Edit and improve this text for clarity, grammar, and flow:\n\n[Paste your text]\n\nFocus on:\n- Correcting grammar and punctuation\n- Simplifying complex sentences\n- Removing redundancy\n- Improving readability and flow\n- Strengthening word choices\n- Maintaining original meaning" />
              <CopyCard title="Headline Generator" prompt="Generate 10 alternative headlines for this content:\n\n[Paste excerpt or context]\n\nRequirements:\n- Mix of styles: curiosity, benefit-driven, question-based\n- Length: 60 characters max\n- Compelling and clear\n- Optimized for [Platform - web/social/email]\n- Include variations with and without numbers" />
              <CopyCard title="Paragraph Expander" prompt="Expand this paragraph into a 3-4 paragraph section:\n\n[Paste your paragraph]\n\nExpansion guidelines:\n- Add supporting examples or case studies\n- Include relevant data or statistics\n- Deepen explanation of key concepts\n- Maintain consistent tone and voice\n- Add practical applications or takeaways" />
              <CopyCard title="Sentence Shortener" prompt="Make this text more concise while maintaining meaning:\n\n[Paste your text]\n\nGoals:\n- Reduce word count by 30-40%\n- Keep key messages intact\n- Improve readability\n- Remove filler words and phrases\n- Maintain professional tone" />
              <CopyCard title="Jargon Simplifier" prompt="Simplify this text for a [Target audience] audience:\n\n[Paste your text]\n\nInstructions:\n- Replace industry jargon with plain language\n- Use concrete examples instead of abstractions\n- Break down complex concepts\n- Keep technical accuracy\n- Make it accessible but not condescending" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#8B5CF6]">Brand Voice & Consistency</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard title="Brand Voice Guide Creator" prompt="Create a brand voice guide for [Company/Brand]:\n\nInclude:\n1. Brand personality (3-5 adjectives)\n2. Tone descriptors with examples\n3. Words to use and avoid\n4. Grammar and style preferences\n5. Common phrases and expressions\n6. Sample writing in your voice\n7. Do&apos;s and don&apos;ts\n\nContext:\n- Industry: [Industry]\n- Target audience: [Audience]\n- Company values: [Values]" />
              <CopyCard title="Style Consistency Checker" prompt="Analyze these pieces of content and identify inconsistencies in voice and style:\n\n[Paste multiple content samples]\n\nAnalyze:\n- Tone variations\n- Vocabulary inconsistencies\n- Structural differences\n- Formatting patterns\n- Voice authenticity\n- Recommendations for standardizing" />
              <CopyCard title="Multi-Platform Adaptation" prompt="Adapt this content for multiple platforms while maintaining brand voice:\n\nOriginal content: [Paste]\n\nAdapt for:\n1. LinkedIn (professional, in-depth)\n2. Twitter (concise, punchy)\n3. Email (personal, conversational)\n4. Blog (comprehensive, SEO-friendly)\n5. Instagram caption (engaging, visual-focused)\n\nKeep core message and brand voice consistent." />
              <CopyCard title="Voice Template Creator" prompt="Create content templates that maintain [Company] voice:\n\n1. Blog post template (with placeholders)\n2. Email template\n3. Social media template\n4. Product description template\n5. Customer testimonial template\n\nEach template should include:\n- Structure and format\n- Key sections\n- Brand voice guidelines\n- Example copy\n- Variation suggestions" />
              <CopyCard title="Competitor Voice Analysis" prompt="Analyze the writing voice of [Competitors] in your industry:\n\nFor each competitor:\n- Brand personality and tone\n- Key phrases and vocabulary\n- Content structure and format\n- Strengths and weaknesses\n- Opportunities to differentiate\n\nThen suggest how [Your Brand] can stand out while staying authentic." />
              <CopyCard title="Brand Voice Trainer" prompt="Create a training document to teach team members to write in [Company] voice:\n\nInclude:\n- 1-page voice summary\n- 5 common writing scenarios with examples\n- Before/after rewrites showing proper voice\n- Quick reference checklists\n- FAQs about voice questions\n- Resources and templates" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#8B5CF6]">Long-Form Content & Deep Dives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard title="Long-Form Article Structure" prompt="Create a detailed outline for a comprehensive article:\n\nTopic: [Topic]\nWord count: [X] words\nTarget audience: [Audience]\nGoal: [Goal]\n\nInclude:\n- Hook and introduction (150 words)\n- 5-7 main sections with subsections\n- Key points and supporting details for each section\n- Data points and statistics to include\n- Real-world examples or case studies\n- Strong conclusion with takeaways\n- Call-to-action" />
              <CopyCard title="Research-Based Article Writer" prompt="Write a research-backed article on [Topic]:\n\nRequirements:\n- Length: [X] words\n- Target audience: [Audience]\n- Include 5-7 credible sources\n- Structure: Introduction, 4-5 main sections, conclusion\n- Tone: [Specify tone]\n- Include:\n  - Key statistics and data\n  - Expert quotes where relevant\n  - Real-world examples\n  - Actionable insights" />
              <CopyCard title="eBook Chapter Writer" prompt="Write a chapter for an eBook about [Topic]:\n\nChapter title: [Title]\nChapter length: [X] words\nTarget reader: [Description]\nKey learning objectives: [List 3-5]\n\nStructure:\n- Chapter introduction\n- 4-5 key sections with subheadings\n- Practical examples\n- Actionable takeaways\n- Chapter summary\n- Discussion questions or exercises" />
              <CopyCard title="Whitepaper Generator" prompt="Create an outline for a whitepaper on [Topic]:\n\nTarget audience: [Audience]\nLength: [X] pages\nGoal: [Goal]\n\nInclude sections for:\n- Executive summary\n- Problem statement\n- Current state analysis\n- Solution framework\n- Implementation roadmap\n- Case studies or examples\n- ROI/Benefits\n- Call-to-action" />
              <CopyCard title="Case Study Outliner" prompt="Create a detailed case study outline:\n\nCompany/Client: [Name]\nChallenge: [Challenge]\nSolution: [Solution]\nResults: [Quantified results]\n\nStructure:\n- Overview and context\n- The challenge (data-backed)\n- Approach and solution\n- Implementation timeline\n- Results and metrics\n- Key learnings\n- Conclusion and next steps" />
              <CopyCard title="Series Content Planner" prompt="Plan a multi-part content series on [Topic]:\n\nSeries title: [Title]\nTarget audience: [Audience]\nNumber of parts: [X]\n\nFor each part, provide:\n- Title\n- Main focus and key takeaways\n- 3-4 main sections\n- Length and format\n- How it connects to other parts\n- Call-to-action" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#8B5CF6]">Specialized Writing Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyCard title="Persuasive Copy Writer" prompt="Write persuasive copy for [Product/Service]:\n\nAudience: [Describe audience]\nPain point: [Main problem]\nSolution: [Your offering]\nDesired action: [What you want them to do]\n\nInclude:\n- Compelling headline\n- Pain point acknowledgment\n- Solution benefits (not features)\n- Social proof or credibility\n- Clear call-to-action\n- Scarcity or urgency element (if applicable)" />
              <CopyCard title="Technical Documentation Translator" prompt="Translate this technical content for [Target audience]:\n\n[Paste technical content]\n\nRequirements:\n- Remove or explain jargon\n- Use analogies and examples\n- Break down complex concepts\n- Add visuals suggestions\n- Include step-by-step instructions\n- Maintain accuracy" />
              <CopyCard title="FAQ Content Creator" prompt="Generate a comprehensive FAQ for [Product/Service]:\n\nCreate 15-20 frequently asked questions and answers:\n- Group by category\n- Address common objections\n- Include pain points\n- Provide clear, concise answers\n- Link related questions\n- Optimize for search intent" />
              <CopyCard title="Customer Testimonial Prompter" prompt="Create interview questions to gather customer testimonials:\n\nProduct/Service: [What you offer]\nTarget testimonial length: [Short/Medium/Long]\nKey points to cover: [List]\n\nQuestions should:\n- Be open-ended\n- Dig into specific results\n- Ask for quantifiable outcomes\n- Explore emotional impact\n- Encourage storytelling\n- Be conversational" />
              <CopyCard title="Press Release Writer" prompt="Write a press release for [Announcement]:\n\nAnnouncement: [What&apos;s new]\nTarget media: [Publication types]\nDate: [Date]\n\nInclude:\n- Compelling headline\n- Dateline and opening paragraph\n- Supporting quotes (create 2-3)\n- Key details and context\n- Impact or significance\n- Boilerplate about company\n- Contact information" />
              <CopyCard title="Internal Communication Writer" prompt="Write internal communication for [Topic/Announcement]:\n\nAudience: [Employee group]\nGoal: [What you want to communicate]\nTone: [Professional/Casual/Motivational]\n\nInclude:\n- Clear subject or headline\n- Why this matters\n- Key information\n- Next steps or actions\n- FAQ section if needed\n- Encouraging closing" />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-[#2a2a2a]">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="How can AI writing assistants improve my content creation workflow?" answer="AI writing assistants can streamline your process by generating first drafts, improving tone and clarity, expanding short ideas into full pieces, and maintaining consistent voice across all your content. They handle repetitive writing tasks so you can focus on strategy and creative direction." />
            <FAQItem question="What types of writing can AI assist with?" answer="AI can assist with blog posts, email campaigns, social media content, product descriptions, technical documentation, creative writing, marketing copy, newsletters, press releases, and much more. The prompts in this guide cover everything from short-form to long-form content." />
            <FAQItem question="How do I maintain my unique voice when using AI writing tools?" answer="Provide detailed instructions about your tone, style, and audience in your prompts. Share examples of your preferred writing style, specify vocabulary to avoid or emphasize, and always edit and personalize AI-generated content to match your voice." />
            <FAQItem question="Can AI replace human writers?" answer="No—AI is a tool that amplifies human writers. It handles repetitive drafting and editing tasks, but human judgment, creativity, and strategic thinking remain essential. The best results come from using AI as a collaborator, not a replacement." />
            <FAQItem question="How do I avoid generic, AI-sounding output?" answer="Be specific in your prompts: provide context, examples, target audience details, and desired tone. Ask for multiple versions and refine. Edit ruthlessly to inject personality and remove clichés. The more specific your prompt, the better the output." />
            <FAQItem question="What&apos;s the difference between a good and bad AI writing prompt?" answer="Good prompts are specific, include context, define tone and audience, and often request multiple options. Bad prompts are vague ('write something good') and lack guidance. This guide teaches you the framework for writing prompts that deliver strong results." />
            <FAQItem question="How can I use AI to improve existing content?" answer="Use AI to rewrite for different tones, expand key sections, create multiple versions for A/B testing, generate headlines and summaries, improve readability, and adapt content for different platforms. The editing prompts in this guide cover all these use cases." />
            <FAQItem question="Can I use AI-generated content commercially?" answer="Yes, but verify your AI tool's terms. Always edit substantially to ensure originality and quality. Consider disclosure in some contexts. Treat AI-generated content as a draft—your final work should be meaningfully shaped by human judgment." />
            <FAQItem question="How do I create a consistent brand voice with multiple AI tools?" answer="Create a brand voice guide and include key elements in every prompt: tone descriptors, vocabulary preferences, target audience, and style examples. This ensures consistency even when using multiple tools or team members prompting on your behalf." />
            <FAQItem question="What&apos;s the best way to organize my AI writing workflow?" answer="Start with a clear brief (audience, goal, tone, format). Use AI to generate multiple drafts. Review and select the strongest version. Edit and personalize substantially. Final review and publish. This guide provides prompts for each stage of this workflow." />
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-[#2a2a2a]">
          <h2 className="text-3xl font-bold mb-8">Related AI Prompt Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link href="/ai-translation-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#8B5CF6] transition-colors"><h3 className="font-semibold text-white">Translation Prompts</h3></Link>
            <Link href="/ai-web-builder-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#8B5CF6] transition-colors"><h3 className="font-semibold text-white">Web Builder Prompts</h3></Link>
            <Link href="/ai-for-musicians-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#8B5CF6] transition-colors"><h3 className="font-semibold text-white">Music Prompts</h3></Link>
            <Link href="/ai-for-gaming-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#8B5CF6] transition-colors"><h3 className="font-semibold text-white">Gaming Prompts</h3></Link>
            <Link href="/ai-research-assistant-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#8B5CF6] transition-colors"><h3 className="font-semibold text-white">Research Prompts</h3></Link>
            <Link href="/ai-study-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#8B5CF6] transition-colors"><h3 className="font-semibold text-white">Study Prompts</h3></Link>
            <Link href="/ai-poem-generator-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#8B5CF6] transition-colors"><h3 className="font-semibold text-white">Poetry Prompts</h3></Link>
            <Link href="/ai-free-art-prompts" className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#8B5CF6] transition-colors"><h3 className="font-semibold text-white">Art Prompts</h3></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
