'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Bot, Workflow, Search, Settings, Shield } from 'lucide-react';

const accent = '#8B5CF6';

interface CopyCardProps { title: string; prompt: string; tag: string; }

function CopyCard({ title, prompt, tag }: CopyCardProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="mb-4 p-4 border rounded-lg border-[#1a0f2e] hover:border-[#8B5CF6] transition-colors bg-[#08060f]">
      <div className="mb-2"><span className="text-xs font-semibold uppercase tracking-wide" style={{ color: accent }}>{tag}</span></div>
      <p className="text-white text-sm font-medium mb-2">{title}</p>
      <pre className="text-gray-400 text-sm mb-3 leading-relaxed whitespace-pre-wrap font-sans">{prompt}</pre>
      <button onClick={handleCopy} className="inline-flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors border" style={{ color: copied ? accent : '#888', borderColor: copied ? accent : '#333' }}>
        {copied ? <><Check size={14} />Copied!</> : <><Copy size={14} />Copy</>}
      </button>
    </div>
  );
}

function FAQ({ item }: { item: { question: string; answer: string } }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-3 border border-[#1a0f2e] rounded-lg overflow-hidden hover:border-[#8B5CF6] transition-colors">
      <button onClick={() => setExpanded(!expanded)} className="w-full p-4 flex items-center justify-between bg-[#08060f] hover:bg-[#0d0a16] transition-colors">
        <h3 className="font-semibold text-white text-left text-sm">{item.question}</h3>
        {expanded ? <ChevronUp size={18} style={{ color: accent }} className="flex-shrink-0" /> : <ChevronDown size={18} className="flex-shrink-0 text-gray-500" />}
      </button>
      {expanded && <div className="p-4 bg-[#050408] border-t border-[#1a0f2e] text-gray-300 text-sm leading-relaxed">{item.answer}</div>}
    </div>
  );
}

const faqs = [
  { question: 'What is an AI agent and how does it differ from a regular AI chatbot?', answer: 'A chatbot responds to a single prompt — input in, output out. An AI agent plans and executes multi-step tasks: it can use tools (search, code execution, APIs, file access), observe results, adjust its plan, and loop until a goal is achieved. Agents have memory, tool access, and decision-making between steps. Examples: AutoGPT, Claude with tools, OpenAI Assistants API with function calling, and frameworks like LangChain agents or CrewAI.' },
  { question: 'What AI agent frameworks are most used in 2026?', answer: 'Leading frameworks: LangChain (most widely used, Python/JS), LangGraph (stateful multi-agent graphs, from LangChain team), CrewAI (role-based multi-agent collaboration), AutoGen (Microsoft, multi-agent conversation), and Semantic Kernel (Microsoft, .NET/Python). OpenAI\'s Assistants API and Anthropic\'s Claude tool use provide native agent capabilities. Choice depends on your use case: LangGraph for stateful workflows, CrewAI for role-based teams, Assistants API for quick deployment.' },
  { question: 'How do I prevent AI agents from taking harmful or unintended actions?', answer: 'Core safeguards: implement human-in-the-loop checkpoints for irreversible actions (deletion, payments, emails), limit tool permissions to least-privilege (read-only database access unless write is explicitly needed), log all agent actions for audit, use sandboxed environments for code execution, set explicit action budgets (max X API calls), and add a final confirmation step before consequential actions. Never give an agent write access to production systems without review gates.' },
  { question: 'What are the most useful tools to give an AI agent?', answer: 'Depends on the use case, but commonly: web search (Tavily, Serper, Brave), code execution (sandboxed Python), file read/write, database query (read-only), email/calendar integration, HTTP requests to APIs, and memory tools (vector search for long-term memory). Start with the minimum tools needed for the task — every additional tool increases complexity and potential for misuse. Add tools incrementally as you validate agent behaviour.' },
  { question: 'How do I build a reliable AI agent for business automation?', answer: 'Reliability principles: break complex goals into smaller verifiable sub-tasks, add validation checkpoints between steps, implement structured output parsing (JSON schemas), build retry logic with exponential backoff for tool failures, log every step with inputs and outputs, add a fallback path for when the agent gets stuck, and test exhaustively with edge cases before production. Start with narrow, well-defined tasks before expanding scope.' },
  { question: 'What is a multi-agent system and when should I use one?', answer: 'A multi-agent system has multiple specialised agents collaborating — each with a specific role (researcher, writer, reviewer, coder). Use multi-agent when: a task genuinely benefits from parallelism, different sub-tasks require different specialisations, you want one agent to critique another\'s output, or a task is too long for a single context window. Overhead is real — single agents are simpler and sufficient for most tasks. Add agents when you have a clear bottleneck that a specialist would solve.' },
  { question: 'How do I give AI agents persistent memory?', answer: 'Options: vector database (Pinecone, Weaviate, Chroma) for semantic search over past interactions; key-value store (Redis) for structured facts; database (PostgreSQL) for structured history; summary memory (periodically summarise long context into a short memory); and episodic memory (store important events with timestamps). Most production agents use a combination: vector memory for relevant context retrieval and a structured store for facts and state.' },
  { question: 'How do I debug an AI agent that\'s getting stuck or producing wrong results?', answer: 'Debug steps: enable full logging (every tool call, input, output, reasoning step), add verbose mode to see the chain of thought, inspect where the agent diverges from the expected path, test individual tools in isolation to rule out tool failures, check if the system prompt is too ambiguous, verify the agent has sufficient context at each step. For stuck agents: add a maximum iteration limit, inspect the last N steps for loops, and add a "I\'m stuck, ask for help" tool as a fallback.' },
  { question: 'What\'s the difference between an AI agent and an AI workflow (like n8n or Make)?', answer: 'Workflows are deterministic: you define every step, branch, and condition explicitly. Agents are dynamic: the AI decides what steps to take based on the goal and intermediate results. Workflows are more predictable, auditable, and reliable for well-defined processes. Agents handle ambiguous, variable tasks that require judgment. Best practice: use workflows for repeatable, structured automation; use agents when the task requires reasoning, adaptation, or handling unpredictable inputs.' },
  { question: 'How do I evaluate whether my AI agent is working correctly?', answer: 'Build an evaluation set: collect 20-50 real tasks with expected outputs. Metrics: task completion rate (did it finish?), accuracy (was the output correct?), efficiency (how many steps/tokens did it use?), tool error rate, and hallucination rate. Run eval after every major prompt or tool change. For complex agents, use a separate evaluator agent or human review. Track metrics over time — agent performance can degrade as prompts change or external tools evolve.' },
];

export default function AIAgentPromptsPage() {
  return (
    <div className="min-h-screen bg-[#050408]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'AI Agent Prompts: Expert Templates for Autonomous AI Workflows', description: 'Master AI agent design with expert prompts for building, testing, and deploying autonomous agents using LangChain, CrewAI, AutoGen, and OpenAI Assistants.', image: 'https://gptprompts.ai/ai-agents-og.jpg', datePublished: '2026-03-29', dateModified: '2026-03-29', author: { '@type': 'Organization', name: 'GPT Prompts AI' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />

      <section className="border-b border-[#1a0f2e] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Bot size={32} style={{ color: accent }} />
            <h1 className="text-4xl font-bold text-white">AI Agent Prompts</h1>
          </div>
          <p className="text-gray-400 text-lg mb-4">Expert prompts for designing, building, and deploying autonomous AI agents — from single-agent task runners to multi-agent collaborative systems.</p>
          <div className="flex flex-wrap gap-2">
            {['LangChain', 'CrewAI', 'AutoGen', 'Multi-Agent'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium border" style={{ borderColor: accent, color: accent }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Bot size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Agent Design & Architecture</h2></div>
          <CopyCard tag="System Design" title="Single-agent task system design"
            prompt={`Design an AI agent to accomplish: [describe the goal — e.g., "research a company and produce an investment memo"].

For this agent, specify:
1. System prompt: role, constraints, output format, and what to do when stuck
2. Tool set: exactly which tools it needs and with what permissions (read-only vs write)
3. Memory strategy: what context it needs to retain across steps
4. Termination criteria: how does it know it's done?
5. Guard rails: what actions should require human approval before executing?
6. Failure modes: what are the top 3 ways this agent could go wrong, and how to mitigate each?`} />
          <CopyCard tag="System Prompt" title="Agent system prompt template"
            prompt={`Write a system prompt for an AI agent with this role: [describe role — e.g., "customer support escalation agent"].

The system prompt must include:
- Role definition and primary objective
- The step-by-step process the agent should follow
- What tools are available and when to use each
- Output format for each type of task
- What to do when the agent is uncertain or lacks information
- Explicit prohibitions (what the agent must never do)
- How to escalate or ask for clarification

Keep the system prompt under 500 words. Test it by asking: would a capable human follow these instructions and produce the right result?`} />
          <CopyCard tag="Tool Design" title="Custom tool specification"
            prompt={`I'm building a custom tool for an AI agent called [tool name].
What it does: [description]
Inputs available: [list data sources]
Output: [what the tool should return]

Write:
1. The tool function signature with typed parameters and return type
2. The tool description string (this is what the AI reads to decide when to use it — make it precise about when to call vs. not call this tool)
3. Input validation and error handling
4. A test case showing correct usage
5. Common misuse patterns and how the description prevents them

Framework: [LangChain / OpenAI function calling / Anthropic tool use]`} />
          <CopyCard tag="Evaluation" title="Agent evaluation framework"
            prompt={`Build an evaluation framework for an AI agent that [describe task].
The eval should test:
1. Task completion rate: define what "complete" means for this task
2. Output quality: what makes an output good vs acceptable vs failure?
3. Efficiency: what's the acceptable range of steps/tokens to complete the task?
4. Safety: what outputs or actions would constitute a safety failure?
5. Edge cases: list 5 inputs that would stress-test the agent

Write 10 evaluation test cases with: input, expected output behaviour, and pass/fail criteria.
Include a scoring rubric for human raters to assess borderline outputs.`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Workflow size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Multi-Agent Systems</h2></div>
          <CopyCard tag="CrewAI" title="Multi-agent crew for content production"
            prompt={`Design a CrewAI multi-agent system for [content production task — e.g., "weekly competitive intelligence report"].

Define each agent with:
- Role name and backstory (2-3 sentences)
- Goal (what this agent is responsible for)
- Tools available
- Expected output

Suggested crew: Researcher → Analyst → Writer → Editor
For each handoff, specify: what information passes between agents, and what the receiving agent does with it.
Include the crew goal, task definitions, and the process (sequential vs hierarchical).`} />
          <CopyCard tag="AutoGen" title="AutoGen conversation pattern"
            prompt={`Design an AutoGen multi-agent conversation for: [task — e.g., "review a pull request and write test cases for it"].

Define:
- Agent 1: [name, system message, model]
- Agent 2: [name, system message, model]
- (Additional agents if needed)
- The initiating message that starts the conversation
- Termination condition (what message or state ends the conversation)
- Human proxy: when should a human be able to intervene?
- Max conversation rounds

Show the Python code to configure and run this conversation.`} />
          <CopyCard tag="LangGraph" title="Stateful workflow graph"
            prompt={`Design a LangGraph workflow for [task — e.g., "customer complaint resolution"].

The graph should have these nodes: [list 3-5 nodes — e.g., classify_complaint, look_up_order, draft_response, escalate, send_response]
And these edges:
- Normal flow: [node] → [node]
- Conditional routing: after [node], route to [A] if [condition], else [B]
- Looping: [node] can return to [earlier node] when [condition]

For each node, specify:
- What it does
- Its inputs (from state)
- What it adds to state
- Possible next nodes

Include the Python code structure for the StateGraph.`} />
          <CopyCard tag="Orchestration" title="Agent orchestration and human oversight"
            prompt={`Design an orchestration system for agents running [process — e.g., "automated invoice processing pipeline"] that handles:
1. Task queue: how incoming tasks are queued, prioritised, and assigned
2. State tracking: how to track which agent is working on what, with what status
3. Human-in-the-loop gates: which steps require human approval and how that's signalled
4. Error recovery: if an agent fails partway through, how does the system resume?
5. Audit log: what events to log and in what format for compliance
6. Monitoring: what alerts should fire and when (stuck agent, high error rate, SLA breach)

Suggest the technology stack and sketch the data model.`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Search size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Research & Information Agents</h2></div>
          <CopyCard tag="Research Agent" title="Deep research agent prompt"
            prompt={`You are a research agent. Your task: produce a comprehensive research brief on [topic].
Process:
1. Identify 5-7 key sub-questions that together answer the main topic
2. For each sub-question: search for relevant sources, extract key information, note source credibility
3. Synthesise findings across sources, noting where sources agree or conflict
4. Identify what is well-established vs uncertain or contested
5. Produce a structured brief: executive summary, key findings by theme, evidence quality assessment, gaps in current knowledge, and recommended further reading
Cite your sources. Flag any claims you cannot verify. Aim for depth over breadth.`} />
          <CopyCard tag="Competitive Intel" title="Competitive intelligence agent"
            prompt={`Act as a competitive intelligence agent. Research [competitor company] and produce an intelligence brief.
Search for and synthesise:
1. Recent product launches, updates, or announcements (last 6 months)
2. Pricing changes or new pricing tiers
3. Key hires or leadership changes
4. Funding, revenue, or growth signals
5. Customer sentiment: reviews, support complaints, community mentions
6. Strategic direction: blog posts, conference talks, job postings that signal roadmap
Format: one-page brief with date-stamped findings. Note confidence level for each finding (confirmed / likely / rumour). Flag the 2-3 most strategically significant findings.`} />
          <CopyCard tag="Due Diligence" title="Company due diligence agent"
            prompt={`You are a due diligence research agent. Research [company name] for a potential [investment / partnership / acquisition].
Investigate:
1. Business model and revenue sources
2. Market position and competitive landscape
3. Leadership team background and track record
4. Financial signals (funding history, revenue estimates, burn rate if available)
5. Technology stack and IP (patents, open source contributions)
6. Customer base: key clients, concentration risk, churn signals
7. Red flags: legal issues, employee reviews, regulatory actions, negative press
Produce a structured report with confidence levels and source citations for each finding.`} />
          <CopyCard tag="News Monitor" title="Industry news monitoring agent"
            prompt={`Set up an industry monitoring agent for [industry/topic].
The agent should:
1. Track news about: [list 5-7 specific topics, companies, or trends to monitor]
2. For each item found: summarise in 2-3 sentences, assess significance (High/Medium/Low), tag by category
3. Filter out: [specify what to exclude — e.g., press releases, opinion pieces without data, duplicate coverage]
4. Output format: daily/weekly digest with items ranked by significance
5. Highlight: any item that represents a major competitive threat, market shift, or regulatory change

Run this as a scheduled workflow. What sources should it monitor and how should it handle conflicting reports?`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Settings size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Automation & Workflow Agents</h2></div>
          <CopyCard tag="Data Processing" title="Automated data processing agent"
            prompt={`Design an agent that processes [type of data — e.g., "incoming customer feedback from email and Typeform"] automatically.
The agent should:
1. Ingest data from [sources]
2. Classify each item by [categories — e.g., feature request, bug report, compliment, complaint]
3. Extract structured fields: sentiment, urgency, product area affected, customer tier
4. Route to the appropriate team or system based on classification
5. Generate a weekly summary with trends and volume by category

Specify: tool set needed, processing logic for each step, output format, and how errors or ambiguous cases are handled.`} />
          <CopyCard tag="Email Agent" title="Email triage and response agent"
            prompt={`Design an email triage agent for [use case — e.g., "sales inquiry inbox"].
The agent should:
1. Read and classify incoming emails by type: [list categories]
2. For standard enquiries: draft a personalised response using templates + context from CRM
3. For complex or high-value enquiries: flag for human review with a suggested response draft
4. For spam or irrelevant mail: archive without response
5. Log all actions to [CRM / spreadsheet / database]

Define: the classification rules, draft response quality bar, escalation criteria, and how the agent should handle ambiguous emails it's unsure how to classify.`} />
          <CopyCard tag="Report Generator" title="Automated reporting agent"
            prompt={`Build an agent that generates a [weekly / monthly] [report type — e.g., "sales performance report"] automatically.
Data sources: [list systems — CRM, analytics, spreadsheet, database]
Report structure: [list sections — e.g., "executive summary, KPIs vs target, top performers, risks, recommended actions"]
For each section, specify:
- What data to pull and from where
- How to calculate / aggregate it
- What narrative or interpretation the agent should add (not just numbers)
- What anomalies or thresholds should trigger a special callout
Output: [format — PDF, HTML email, Slack message, Google Doc]
Schedule: [timing and recipients]`} />
          <CopyCard tag="QA Agent" title="Quality assurance and review agent"
            prompt={`Design a QA agent that reviews [type of output — e.g., "blog posts before publication" / "code pull requests" / "customer proposals"].
The agent should check each item against:
1. [Quality criterion 1 — e.g., "factual accuracy: are all claims verifiable?"]
2. [Quality criterion 2 — e.g., "brand voice: does the tone match our guidelines?"]
3. [Quality criterion 3 — e.g., "completeness: are all required sections present?"]
4. [Quality criterion 4 — e.g., "formatting: does it follow the template?"]
Output: a structured review with: pass/fail per criterion, specific issues with location (paragraph, line, section), and suggested fixes for each issue.
Escalation: if [X criteria] fail, block publication and notify [person/channel].`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Shield size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Safety & Governance</h2></div>
          <CopyCard tag="Safety" title="Agent safety checklist"
            prompt={`Review my AI agent design for safety risks and suggest mitigations.
Agent purpose: [describe what the agent does]
Tools it has access to: [list all tools and their permissions]
Actions it can take autonomously: [list all actions without human approval]
Actions that require human approval: [list gated actions]

Please assess:
1. Worst-case failure mode: what's the most harmful thing this agent could do if it malfunctions?
2. Permission minimisation: are any tool permissions broader than strictly necessary?
3. Reversibility: which actions are irreversible and do they have appropriate gates?
4. Prompt injection risk: how could a malicious input manipulate the agent?
5. Audit trail: is there sufficient logging to reconstruct what happened if something goes wrong?`} />
          <CopyCard tag="Governance" title="Agent governance framework"
            prompt={`Design a governance framework for deploying AI agents in [organisation type — e.g., "a regulated financial services company"].
The framework should cover:
1. Agent inventory: how to document and register all deployed agents
2. Risk classification: how to categorise agents by risk level (Low / Medium / High) with criteria for each
3. Approval process: what review is required before deploying each risk class?
4. Ongoing monitoring: what metrics and alerts to maintain per agent
5. Incident response: what to do when an agent takes an unexpected or harmful action
6. Compliance: how to document agent behaviour for regulatory audit
Keep it practical — this should be implementable by a team of 5 people, not require a compliance army.`} />
          <CopyCard tag="Testing" title="Agent adversarial testing"
            prompt={`Generate adversarial test cases for an AI agent that [describe agent purpose].
The agent has these tools: [list tools]
And these constraints in its system prompt: [paste key constraints]

Create test inputs designed to:
1. Jailbreak the agent into ignoring its constraints
2. Prompt injection: embed instructions in tool outputs or external data that try to redirect the agent
3. Resource abuse: inputs that could cause the agent to loop, make excessive API calls, or use extreme amounts of tokens
4. Social engineering: inputs that claim special authority or permissions
5. Boundary testing: inputs at the edges of what the agent is designed to handle

For each test: input, expected safe response, and what a failure would look like.`} />
          <CopyCard tag="Audit" title="Agent decision audit trail design"
            prompt={`Design an audit logging system for an AI agent that [describe agent].
The audit log should capture:
1. For every agent run: start time, end time, initiating user/system, goal statement
2. For every tool call: tool name, inputs (sanitised — no credentials), outputs (truncated if large), timestamp, latency
3. For every decision point: the agent's reasoning, options considered, and path taken
4. For every action: what was done, what was changed, and whether human approval was obtained
5. Errors and retries: every failure with error details and recovery action
6. Final output: the agent's conclusion and confidence level

Storage format, retention policy, and how to query the audit trail for a specific run or date range.`} />
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6"><Bot size={26} style={{ color: accent }} /><h2 className="text-2xl font-bold text-white">Prompt Engineering for Agents</h2></div>
          <CopyCard tag="System Prompt" title="ReAct agent system prompt"
            prompt={`Write a ReAct (Reason + Act) system prompt for an agent that [describe task].
The prompt must instruct the agent to:
1. Think: reason out loud about what to do before taking an action
2. Act: call a specific tool with specific inputs
3. Observe: interpret the tool result before deciding next steps
4. Repeat: loop until the goal is achieved or it determines it cannot proceed

Available tools: [list tools]
Termination: [what signals the task is done]
Constraints: [list any "never do" rules]
Output format: [what the final answer should look like]

Include example reasoning traces showing the Thought → Action → Observation → Thought pattern.`} />
          <CopyCard tag="Memory" title="Long-term memory system prompt"
            prompt={`Write a system prompt for an agent that has access to a memory tool with these operations:
- memory.save(key, value, description) — save a fact for later
- memory.search(query) — retrieve relevant memories by semantic search
- memory.forget(key) — remove a specific memory

The prompt should instruct the agent to:
1. Proactively save information that will be useful in future interactions (user preferences, past decisions, important context)
2. Search memory at the start of each task to retrieve relevant prior context
3. Update memories when new information supersedes old
4. Use memory efficiently — save facts, not full conversation transcripts
Include examples of what to save and what not to save.`} />
          <CopyCard tag="Tool Calling" title="Robust tool calling instructions"
            prompt={`Write the tool-calling instructions section of a system prompt for an agent with these tools:
[list tools with one-line descriptions]

The instructions should cover:
1. When to call a tool vs reason from existing knowledge
2. How to handle tool errors (retry, try alternative tool, ask for help)
3. How to avoid unnecessary tool calls (don't call search for things you already know)
4. How to sequence tool calls when multiple are needed
5. What to do when a tool returns unexpected or empty results
6. How to cite tool results in the final response

Include a decision tree: "Before calling a tool, ask yourself: [questions]"  `} />
          <CopyCard tag="Structured Output" title="Force consistent JSON output"
            prompt={`Write a prompt addition that reliably makes an agent output structured JSON in this schema:
[paste your desired JSON schema]

The addition should:
1. Clearly specify the exact JSON structure expected
2. Include field descriptions and types for each key
3. Give an example of a correctly formatted output
4. Handle edge cases: what to put when a field is unknown or not applicable
5. Include an instruction to output ONLY the JSON object with no surrounding prose
6. Specify how to handle arrays: empty [] vs null vs omit entirely
Test it by showing a sample input and the expected JSON output.`} />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          {faqs.map((item, i) => <FAQ key={i} item={{ question: item.question, answer: item.answer }} />)}
        </section>

        <section className="mb-12 p-6 rounded-lg border border-[#1a0f2e] bg-[#08060f]">
          <h3 className="text-lg font-semibold text-white mb-3">AI Agent Maturity Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 rounded border border-[#1a0f2e]">
              <p className="font-semibold mb-2" style={{ color: accent }}>Level 1: Assisted</p>
              <p className="text-gray-400">AI helps a human complete a task. Human stays in the loop for every decision. Example: Copilot suggesting code, ChatGPT drafting an email.</p>
            </div>
            <div className="p-3 rounded border border-[#1a0f2e]">
              <p className="font-semibold mb-2" style={{ color: accent }}>Level 2: Semi-Autonomous</p>
              <p className="text-gray-400">AI completes multi-step tasks independently but with human checkpoints at key decisions. Example: Research agent that flags findings for review.</p>
            </div>
            <div className="p-3 rounded border border-[#1a0f2e]">
              <p className="font-semibold mb-2" style={{ color: accent }}>Level 3: Fully Autonomous</p>
              <p className="text-gray-400">AI executes entire workflows end-to-end, only escalating for explicit exceptions. Requires robust safety guardrails and extensive testing before deploying.</p>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-3">Start at Level 1 or 2 for any new agent. Move to Level 3 only after validating behaviour across hundreds of real tasks.</p>
          <div className="mt-4 p-3 rounded border border-[#1a0f2e] text-sm text-gray-400">
            <span className="font-semibold text-white">Pro tip: </span>Before deploying any agent at Level 2 or above, run it on at least 50 real or realistic test cases and review every output manually. Agents tend to fail at edge cases that humans consider obvious. Document the failure modes you find — they will inform your guardrails, fallback logic, and escalation triggers.
          </div>
        </section>

        <section className="mb-12 p-6 rounded-lg border border-[#1a0f2e] bg-[#08060f]">
          <h3 className="text-lg font-semibold text-white mb-3">Agent Evaluation Checklist</h3>
          <p className="text-gray-400 text-sm mb-3">Before going live with any AI agent, run through this checklist to catch the most common failure modes.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-400">
            {[
              'Does the agent handle empty or null inputs without crashing?',
              'Does it produce consistent output for the same input?',
              'Is the output format predictable enough for downstream parsing?',
              'Does it fail gracefully when an external tool is unavailable?',
              'Is there a hard limit on the number of steps or tool calls?',
              'Does it log enough context to debug failures in production?',
              'Are there guardrails preventing harmful or off-topic actions?',
              'Has it been tested on adversarial inputs (jailbreak attempts)?',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 py-1">
                <span style={{ color: accent }} className="mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 p-6 rounded-lg border border-[#1a0f2e] bg-[#08060f]">
          <h3 className="text-lg font-semibold text-white mb-4">Popular AI Agent Frameworks at a Glance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              { name: 'LangGraph', use: 'Graph-based orchestration with stateful cycles. Best for complex multi-step workflows with loops and conditional branching.' },
              { name: 'CrewAI', use: 'Role-based multi-agent framework. Each agent has a role, goal, and backstory. Best for collaborative agent teams with defined responsibilities.' },
              { name: 'AutoGen', use: 'Conversation-driven agents that collaborate via messages. Best for code generation tasks and human-in-the-loop workflows.' },
              { name: 'OpenAI Assistants API', use: 'Managed agent with persistent threads, file search, and code interpreter. Best for production use cases that need OpenAI-native tool access.' },
              { name: 'LangChain Agents', use: 'Flexible agent with a wide library of tools and integrations. Best for rapid prototyping and RAG-augmented agents.' },
              { name: 'Anthropic Tool Use', use: 'Structured tool calling via Claude API. Best for precise, controllable agents where output reliability is critical.' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded border border-[#1a0f2e]">
                <p className="font-semibold mb-1" style={{ color: accent }}>{item.name}</p>
                <p className="text-gray-400">{item.use}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#1a0f2e] pt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Related Prompts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'OpenAI Codex Prompts', href: '/openai-codex-prompts' },
              { name: 'Replit Agent Prompts', href: '/replit-agent-prompts' },
              { name: 'Manus AI Prompts', href: '/manus-ai-prompts' },
              { name: 'Windsurf AI Prompts', href: '/windsurf-ai-prompts' },
              { name: 'ChatGPT Prompts', href: '/chatgpt-prompts' },
              { name: 'Claude Prompts', href: '/claude-prompts' },
              { name: 'AI Prompts for Startups', href: '/ai-prompts-for-startups' },
              { name: 'Perplexity AI Prompts', href: '/perplexity-ai-prompts' },
            ].map((link, i) => (
              <a key={i} href={link.href} className="px-4 py-3 rounded border border-[#1a0f2e] text-gray-300 hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-colors text-sm font-medium">{link.name}</a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
