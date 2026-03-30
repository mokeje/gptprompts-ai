"use client"

import { useState } from "react"
import Link from "next/link"

const ACCENT = "#cc785c"

const CopyCard = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="bg-[#130e0a] border border-[#2a1a0e] rounded-lg p-5 hover:border-orange-400/40 transition-colors">
      <pre className="bg-[#0a0705] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-56">{text}</pre>
      <button onClick={handleCopy} className="w-full text-white font-semibold py-2 px-4 rounded transition-colors text-sm" style={{ backgroundColor: ACCENT }}>
        {copied ? "✓ Copied!" : "Copy Prompt"}
      </button>
    </div>
  )
}

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center p-5 bg-[#111] hover:bg-[#1a1a1a] transition-colors text-left">
        <span className="text-gray-200 font-semibold text-sm pr-4">{q}</span>
        <span className="text-orange-400 text-lg flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="bg-[#0d0d0d] border-t border-gray-800 p-5"><p className="text-gray-400 text-sm leading-relaxed">{a}</p></div>}
    </div>
  )
}

const sections = [
  {
    id: "project-instructions",
    title: "Project Instructions Templates",
    description: "Write Claude Project instructions that make every conversation consistent and high-quality.",
    prompts: [
      `You are [role/persona name] helping [target user] with [main purpose].

CONTEXT AND ROLE:
[2-3 sentences describing what this project is for, who uses it, and what success looks like in each conversation]

YOUR APPROACH:
- Always [key behaviour 1]
- Always [key behaviour 2]
- When the user asks about [topic A], prioritise [approach A]
- When the user asks about [topic B], prioritise [approach B]

RESPONSE FORMAT:
For [type of request], structure your response as:
1. [Section 1 — e.g., Direct answer]
2. [Section 2 — e.g., Key considerations]
3. [Section 3 — e.g., Recommended next step]

For shorter requests, keep responses under [X] words unless asked for detail.

WHAT YOU KNOW:
[Key context Claude should always have — e.g., about the user's business, their preferences, their constraints]

WHAT TO AVOID:
- [Thing 1 to never do or say]
- [Thing 2 to never do or say]
- If asked about [sensitive or out-of-scope topic], [what to do]`,
      `Write Claude Project instructions for a [professional domain] assistant.

I need Claude to act as a [specific role — e.g., senior marketing strategist, technical writing partner, business analyst, legal summariser].

Key facts about my work:
- My industry / company: [describe]
- My role: [your job title and main responsibilities]
- My most common tasks in Claude: [list 3-5]
- My preferred communication style: [e.g., concise bullets, full paragraphs, frameworks with examples]
- Things I've found Claude gets wrong without explicit guidance: [describe]

Write complete Project instructions that make Claude behave like an expert assistant tuned exactly to my needs, not a generic helper.`,
      `Write Project instructions that make Claude maintain a consistent persona across all conversations.

Persona name: [e.g., "Aria" — my editorial assistant]
Persona background: [describe their expertise, experience, and approach as if they were a real person]
Tone and voice: [be specific — e.g., direct and data-focused / warm but efficient / thinks in frameworks]
Signature behaviours: [things this persona always does — e.g., always gives three options, always asks one clarifying question, always ends with a concrete recommendation]

The persona should feel consistent and distinctive across all conversation types — technical tasks, creative tasks, analysis, and quick Q&A. Write the full instructions in first person as the persona.`,
      `Create Project instructions for a team-shared Claude Project.

Team type: [e.g., marketing team, product team, customer support team, research team]
Number of users: [approximate]
Shared knowledge the whole team needs Claude to have: [key company/product/process context]
Most common team tasks in Claude: [list 5-6]
Style and format standards the whole team should get: [describe]

Write Project instructions that:
- Give Claude the shared context all team members need
- Define consistent output formats for each task type
- Handle the different roles on the team (e.g., manager vs. individual contributor requests)
- Include instructions for when Claude should flag that more context is needed`,
    ],
  },
  {
    id: "knowledge-upload",
    title: "Knowledge Upload & Context Prompts",
    description: "Get more from uploaded documents and make Claude use your files intelligently.",
    prompts: [
      `I've uploaded the following documents to this Claude Project. Write instructions for how Claude should use them.

Documents uploaded:
1. [Document name and description — e.g., "Company Style Guide.pdf — our brand voice rules and editorial standards"]
2. [Document name and description]
3. [Document name and description]

Write Project instructions that tell Claude:
- When to reference each document (not every response needs to check every file)
- How to cite or reference information from the documents
- What to do when two documents have conflicting information
- What to do when the answer isn't in any document
- How to blend document knowledge with Claude's general training`,
      `I want Claude to act as an expert in a specific topic using documents I've uploaded.

Documents: [describe what you've uploaded — e.g., a 50-page technical manual, 20 research papers, a product specification document]
Primary task: [what you want Claude to do with this knowledge]

Write a Project instruction that tells Claude to:
1. Always search the uploaded materials first before using general knowledge
2. Quote directly from the documents when precision matters
3. Flag when it's drawing on general knowledge rather than your documents
4. Ask clarifying questions when the right document section is unclear
5. Synthesise across multiple documents when the question spans topics`,
      `Help me write a prompt to extract structured information from documents I'll paste into Claude Projects conversations.

Document type: [e.g., contracts, meeting transcripts, research reports, customer feedback, financial reports]
Information I always need to extract: [list 5-8 specific fields or data points]
Output format I want: [table / structured list / summary with sections / JSON]

Write:
1. A standard extraction prompt I can save as a starting message in each Project conversation
2. Project instructions that prime Claude to recognise this document type and extract automatically
3. A quality check instruction: how Claude should flag uncertainty or missing information in the extraction`,
      `I want Claude to remember context across all my Project conversations without me re-explaining every time.

Context I need Claude to always have:
- About me: [your role, background, working style]
- About my work: [your company, product, industry, key constraints]
- My preferences: [format preferences, things you like/dislike in Claude responses]
- Ongoing projects: [any context about current work that's relevant to most conversations]

Write Project instructions that front-load this context so Claude uses it without being asked. Also include an instruction for how Claude should confirm it's using the right context when it matters.`,
    ],
  },
  {
    id: "professional-workflows",
    title: "Professional Workflow Prompts",
    description: "Project-specific prompts for writing, analysis, research, and strategy work.",
    prompts: [
      `Set up a Claude Project for strategic writing and editing.

I use Claude primarily for: [list your writing use cases — e.g., reports, emails, presentations, proposals, thought leadership]
My target audience(s): [describe]
My voice and style: [describe your writing style and what makes it distinctive]
Quality standards I care about: [e.g., no jargon, always action-oriented, evidence-based, concise]
Common formats I use: [e.g., executive briefings, 5-paragraph emails, slide decks, blog posts]

Write Project instructions that:
1. Define my voice so Claude can write in it
2. Set format defaults for each content type I listed
3. Tell Claude when to write a full draft vs. outline first
4. Include a standard editing checklist Claude applies before showing me any draft`,
      `Set up a Claude Project for research and competitive intelligence.

Research domain: [e.g., market trends, competitor analysis, technology landscape, academic topics]
Sources I trust most: [types of sources — primary research, specific publications, official data, etc.]
What I do with the research: [how it feeds into decisions or outputs]
Common research tasks: [list 4-6]

Write Project instructions that:
1. Define how Claude should structure research outputs for me
2. Set standards for source quality and uncertainty flagging
3. Tell Claude how to handle information that may be out of date
4. Create a consistent format for competitive analysis (e.g., a comparison matrix structure)
5. Include instructions for producing executive-level summaries from detailed research`,
      `I want to use Claude Projects for ongoing strategic planning and decision-making support.

My role: [describe your position and the types of decisions you make]
Decision domains I need help with: [e.g., go-to-market strategy, product prioritisation, hiring, budget allocation]
My decision-making style: [e.g., I like frameworks / I prefer devil's advocate / I want options not recommendations]
Key constraints in my work: [e.g., budget limits, team size, market conditions]

Write Project instructions that:
1. Give Claude the context to understand my strategic environment
2. Define a standard decision-support framework Claude uses (e.g., options, trade-offs, recommendation)
3. Tell Claude when to push back on my assumptions vs. accept them
4. Set up a 'second opinion' mode where Claude stress-tests my thinking`,
      `Create a Claude Project setup for customer-facing work.

My role involves: [e.g., sales, customer success, account management, consulting]
My clients/customers: [describe the type of organisations or people]
Common tasks where I use Claude for client work: [list 5-6 — e.g., writing proposals, preparing for calls, drafting follow-up emails]
Confidentiality requirements: [e.g., don't use client names in examples, treat all context as confidential]

Write Project instructions that:
1. Help Claude help me prepare for and follow up on client interactions
2. Set a professional tone appropriate for external communications
3. Give Claude the context to understand my client relationships without me re-explaining each time
4. Include templates for the most common client-facing documents I produce`,
    ],
  },
  {
    id: "advanced-techniques",
    title: "Advanced Project Techniques",
    description: "Power-user prompts for getting more from Claude Projects with structured workflows.",
    prompts: [
      `Set up a 'thinking partner' mode in my Claude Project.

I want Claude to challenge my thinking, not just help me execute it. My work domain: [describe]

Write Project instructions that create a thinking-partner mode where Claude:
1. Asks 'what assumptions am I making?' before answering strategic questions
2. Steelmans the opposing view when I've clearly decided on a direction
3. Identifies second and third-order consequences I may have missed
4. Flags when I'm solving the wrong problem (the presented problem vs. the root problem)
5. Tells me when my plan has a critical gap or risk I haven't addressed

Also include an 'execution mode' instruction I can trigger when I've finished thinking and just need help producing something.`,
      `Help me design a structured prompt for recurring tasks I do every week in Claude Projects.

Recurring task: [describe in detail — e.g., weekly performance review, Monday planning session, Friday retrospective]
Inputs I bring each time: [what context or data you provide]
Outputs I need: [what Claude produces for you]
Format that works for me: [describe your preferred output structure]

Write:
1. A template prompt I paste at the start of each session
2. Project instructions that prime Claude to understand this is a recurring structured workflow
3. A 'carry-forward' instruction so Claude references relevant context from the previous session if I've uploaded it`,
      `I want Claude to help me build and maintain a second brain in Claude Projects.

What I want to store and recall: [e.g., meeting notes, decisions made, lessons learned, project status, research findings]
How I add new information: [e.g., paste notes, upload documents, tell Claude directly]
How I retrieve information: [e.g., ask specific questions, ask for summaries, ask for relevant context before a meeting]

Write Project instructions that:
1. Tell Claude how to acknowledge and store new information I add
2. Define how Claude should surface relevant stored context when I ask questions
3. Create a standard format for Claude to summarise what it knows about [a topic] when asked
4. Handle gaps and uncertainty gracefully (flag when Claude isn't sure vs. when it's confident in recalled context)`,
      `Help me design a feedback loop system within Claude Projects that improves over time.

My goal: Make Claude's outputs for [specific task type] better with each iteration.
What 'better' means for me: [define quality for your use case]
How I currently give feedback: [describe — e.g., I edit outputs directly, I tell Claude what I changed and why]

Write Project instructions that:
1. Prompt Claude to ask for feedback at the end of key outputs
2. Tell Claude how to incorporate feedback in the current conversation
3. Create a 'lessons learned' instruction where I can tell Claude to remember a new preference
4. Set up a way to review what preferences Claude has learned and correct any misunderstandings`,
    ],
  },
  {
    id: "common-use-cases",
    title: "Ready-to-Use Project Setups",
    description: "Complete Project configurations for the most popular professional use cases.",
    prompts: [
      `COMPLETE PROJECT SETUP: Marketing & Content Creation

Project instructions to paste directly:

You are my senior marketing and content partner. My company is [company name], a [brief description]. My audience is [describe]. My brand voice is [describe tone].

CONTENT TASKS:
For blog posts: Always write an outline first. Include a recommended title (with and without a question format), a meta description under 155 characters, and 5 header options.
For emails: Ask for audience segment, goal, and CTA before writing. Provide subject line + preview text + body.
For social media: Write 3 variations (short/medium/long) for [primary platform]. Always include a CTA.
For ad copy: Write 3 headline variations and 2 body copy variations. Flag the strongest option.

QUALITY STANDARDS:
Active voice. No buzzwords. Every sentence earns its place. One core idea per section.

WHAT TO AVOID:
No generic openers ("In today's digital landscape…"). No "Let's dive in." No padding.`,
      `COMPLETE PROJECT SETUP: Software Engineering & Technical Work

Project instructions to paste directly:

You are my senior engineering partner. I work in [language/stack]. My experience level: [junior/mid/senior]. My coding style preferences: [describe].

CODE TASKS:
When I ask you to write code: Show the implementation first, then explain non-obvious decisions in inline comments. Add unit tests unless I say otherwise.
When I ask you to review code: Identify bugs first, then performance issues, then style. Provide a corrected version.
When I ask you to debug: Ask for the error message, relevant code, and what I've already tried before suggesting fixes.

OUTPUT FORMAT:
Always use code blocks with language specified. For multi-file changes, label each file clearly.

WHAT TO ASSUME:
Assume I can read code and skip basic explanations. Explain the 'why', not the 'what'.`,
      `COMPLETE PROJECT SETUP: Executive & Leadership Work

Project instructions to paste directly:

You are my chief of staff and thought partner. I am [your role] at [company type]. My priorities are [top 3 focus areas]. My working style: [describe how you think and communicate].

COMMUNICATION TASKS:
For emails I'm drafting: Match my direct, [tone] style. Keep to 5 sentences max unless complexity requires more. Always end with one clear next step.
For presentations: Structure as: situation → complication → question → answer → key points. Executive audiences only.
For difficult conversations: Give me talking points, not scripts. Flag the emotional dynamic I should be aware of.

THINKING TASKS:
For decisions: Give me a one-page decision brief: options, trade-offs, recommendation, and the one thing that would change my recommendation.
For problem-solving: Start with root cause analysis before jumping to solutions.

CONFIDENTIALITY:
All context I share is confidential. Do not reference specific names or details in examples you generate.`,
      `COMPLETE PROJECT SETUP: Academic Research & Writing

Project instructions to paste directly:

You are my research partner and academic writing coach. My field: [discipline]. My level: [undergraduate / postgraduate / faculty]. My current project: [brief description].

RESEARCH TASKS:
When I ask you to summarise literature: Give a structured summary with: main argument, methodology, key findings, limitations, and citation details.
When I ask for a literature review structure: Use [citation style — APA/MLA/Chicago]. Flag where I need to find sources independently.
When I ask for writing help: Ask for my argument/thesis first. Write to support my argument, not introduce your own.

WRITING STANDARDS:
Academic register, not conversational. Evidence-based claims only. Flag where I've made an assertion without support.

WHAT TO AVOID:
No AI-sounding phrases. No overuse of transitional summaries. Vary sentence structure. Never fabricate citations.`,
    ],
  },
]

const faqItems = [
  { q: "What is Claude Projects and how do I access it?", a: "Claude Projects is a feature in Claude.ai that lets you create persistent workspaces with custom instructions, uploaded knowledge files, and conversation history. You access it via claude.ai — look for 'Projects' in the sidebar. Creating and using Projects requires a Claude Pro or Team subscription from Anthropic." },
  { q: "How is Claude Projects different from Custom GPTs?", a: "Both serve similar purposes (persistent, customised AI assistants) but have key differences. Claude Projects store conversation history by default and are designed for ongoing work. Claude is generally better at long-context tasks, nuanced instructions, and following complex multi-step workflows. Custom GPTs have access to OpenAI's plugin ecosystem and GPT store. The right choice depends on your preferred model and workflow." },
  { q: "How long can Claude Project instructions be?", a: "Claude supports much longer context than GPT-4, so Project instructions can be detailed. In practice, 500-1,500 words of instructions is a good range — specific enough to cover your key use cases and edge cases, without being so long that critical instructions get buried. Test that Claude follows your most important rules before assuming longer instructions work correctly." },
  { q: "Can multiple team members use the same Claude Project?", a: "Yes. With a Claude Team or Enterprise plan, you can create shared Projects that multiple users access. Each user has their own conversation history within the project. The shared Project instructions apply to everyone. Enterprise plans provide additional admin controls, data privacy guarantees, and audit capabilities." },
  { q: "What types of files can I upload to Claude Projects?", a: "Claude Projects supports PDFs, text files, Word documents, code files, and several other formats. Claude can read and reference uploaded documents throughout your conversations. For best results, ensure documents are text-readable (not scanned images without OCR). The total storage per project depends on your plan." },
  { q: "Does Claude remember everything across all Project conversations?", a: "Project instructions and uploaded files persist across all conversations in the project. Conversation history is also saved and accessible. However, each new conversation starts fresh from the Project instructions — Claude doesn't automatically reference all previous conversations unless you share that context. For long-running projects, consider uploading key decisions or context as documents rather than expecting Claude to recall conversational details." },
  { q: "How do I get Claude to follow my Project instructions reliably?", a: "The same rules as any system prompt: specificity over vagueness, numbered rules over paragraphs, examples of ideal responses where possible. Test edge cases. Claude is generally very good at following detailed instructions, but will default to helpful behaviour when instructions are ambiguous. If a specific behaviour is critical, state it explicitly and test it before relying on it." },
  { q: "Can I use Claude Projects for client work?", a: "Yes, but review Anthropic's data privacy policies and your client's confidentiality requirements first. Claude Team and Enterprise plans offer stronger data privacy commitments. For sensitive client data, Enterprise is recommended. Some professional contexts (legal, healthcare, finance) may have specific compliance requirements around AI tool usage." },
  { q: "What's the most effective way to use the knowledge upload feature?", a: "Upload your most frequently referenced documents: style guides, company context, product documentation, SOPs, or research materials. Write Project instructions that tell Claude when to reference which documents. The key is being specific: 'when I ask you to write external communications, follow the style guide in [filename]' is more reliable than generic 'use the uploaded documents'." },
  { q: "How do Claude Projects compare to fine-tuning or RAG systems?", a: "Projects are a no-code, immediate solution for personalised Claude behaviour. Fine-tuning (training the model on your data) is a technical, expensive option for specialised domains. RAG (retrieval-augmented generation) is a developer approach for connecting Claude to large, frequently updated knowledge bases. For most professionals and teams, Projects offer 80-90% of the value with none of the technical complexity." },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Claude Projects Prompts 2026: 60+ System Prompts & Templates for Claude.ai Projects",
  description: "Get 60+ copy-paste prompts and system prompt templates for Claude Projects. Expert guides for project instructions, knowledge upload, custom personas, and team workflows.",
  author: { "@type": "Organization", name: "GPTPrompts.AI" },
  datePublished: "2025-06-01",
  dateModified: "2026-03-01",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
}

export default function ClaudeProjectsPromptsPage() {
  return (
    <div className="min-h-screen bg-[#0d0906] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-orange-900/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">Claude.ai Projects</p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">Claude Projects Prompts: 60+ Instructions & Templates for Powerful Project Setups</h1>
          <p className="text-xl text-gray-400 leading-relaxed">Expert system prompts, project instructions, and complete setup templates for Claude Projects. Covers professional personas, knowledge file strategies, team workflows, and advanced techniques for getting consistent results.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-6" style={{ color: ACCENT }}>Why Claude Projects Changes How You Work With AI</h2>
        <p className="text-gray-400 leading-relaxed mb-6">Without Projects, you start every Claude conversation from scratch. With well-designed Project instructions, Claude knows your role, your style, your preferences, and your context from the first message. You stop re-explaining yourself and start getting expert-level output immediately.</p>
        <div className="bg-[#130e0a] border border-orange-900/40 rounded-xl p-6 mb-6">
          <p className="text-orange-300 font-semibold mb-3 text-sm uppercase tracking-wider">What a well-configured Claude Project gives you</p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><span className="text-orange-400 font-semibold">Consistent output formats:</span> Every response structured the way you need it, without asking</li>
            <li><span className="text-orange-400 font-semibold">Persistent context:</span> Your role, company, and preferences loaded in every conversation</li>
            <li><span className="text-orange-400 font-semibold">Expert persona:</span> Claude behaves as a domain expert, not a generic assistant</li>
            <li><span className="text-orange-400 font-semibold">Knowledge integration:</span> Your documents, guides, and SOPs referenced automatically</li>
            <li><span className="text-orange-400 font-semibold">Team standards:</span> Everyone on your team gets the same high-quality, consistent outputs</li>
          </ul>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {sections.map((section) => (
          <div key={section.id} className="mb-16">
            <h2 className="text-3xl font-bold mb-2" style={{ color: ACCENT }}>{section.title}</h2>
            <p className="text-gray-500 mb-8 text-sm">{section.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.prompts.map((prompt, idx) => <CopyCard key={idx} text={prompt} />)}
            </div>
          </div>
        ))}

        <div className="mt-20 mb-16">
          <h2 className="text-3xl font-bold mb-8" style={{ color: ACCENT }}>Claude Projects FAQ</h2>
          <div className="space-y-3">{faqItems.map((item, idx) => <FaqItem key={idx} q={item.q} a={item.a} />)}</div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8" style={{ color: ACCENT }}>More Claude & Advanced AI Prompt Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Claude Prompts", href: "/claude-prompts", color: "#cc785c" },
              { title: "Custom GPTs Prompts", href: "/custom-gpts-prompts", color: "#ab68ff" },
              { title: "GPT-4.5 Prompts", href: "/gpt-4-5-prompts", color: "#10a37f" },
              { title: "Perplexity Deep Research", href: "/perplexity-deep-research-prompts", color: "#20b2aa" },
              { title: "Prompt Engineering Fundamentals", href: "/prompt-engineering-fundamentals", color: "#cc785c" },
              { title: "AI Agent Prompts", href: "/ai-agent-prompts", color: "#8b5cf6" },
              { title: "ChatGPT Prompts", href: "/chatgpt-prompts", color: "#10a37f" },
              { title: "Gemini Advanced Prompts", href: "/gemini-advanced-prompts", color: "#4285f4" },
              { title: "All Prompt Guides", href: "/website-links", color: "#cc785c" },
            ].map((page, idx) => (
              <Link key={idx} href={page.href} className="p-4 rounded-lg border transition-all duration-200 hover:opacity-80" style={{ borderColor: page.color + "40", backgroundColor: page.color + "08" }}>
                <span className="font-semibold text-sm" style={{ color: page.color }}>{page.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
