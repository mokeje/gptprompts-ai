'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Zap, Brain, GitMerge, Database, Layers, Search } from 'lucide-react';

const accent = '#6366F1';
const borderCol = '#1a1a2e';
const bgDark = '#040408';

const CopyCard = ({ title, prompt, tag }: { title: string; prompt: string; tag: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-lg border p-5 transition-colors" style={{ borderColor: borderCol, background: bgDark }} onMouseEnter={e => (e.currentTarget.style.borderColor = `${accent}60`)} onMouseLeave={e => (e.currentTarget.style.borderColor = borderCol)}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full border" style={{ borderColor: `${accent}40`, color: accent }}>{tag}</span>
          <h3 className="text-white font-semibold mt-1">{title}</h3>
        </div>
        <button onClick={handleCopy} className="shrink-0 text-gray-400 transition-colors hover:text-indigo-400">
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="whitespace-pre-wrap font-sans text-sm text-gray-300 leading-relaxed">{prompt}</pre>
    </div>
  );
};

const FAQ = ({ item }: { item: { question: string; answer: string } }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg overflow-hidden border" style={{ borderColor: borderCol }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors" style={{ background: bgDark }}>
        <span className="font-medium text-white pr-4">{item.question}</span>
        {open ? <ChevronUp size={18} className="shrink-0" style={{ color: accent }} /> : <ChevronDown size={18} className="shrink-0 text-gray-400" />}
      </button>
      {open && <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed" style={{ background: bgDark }}>{item.answer}</div>}
    </div>
  );
};

const sections = [
  {
    title: 'Task Automation & Workflow Design',
    icon: Zap,
    description: 'Design and build automated workflows that eliminate repetitive manual work, reduce errors, and free your team to focus on higher-value tasks.',
    prompts: [
      { tag: 'Automation', title: 'End-to-end workflow automation blueprint', prompt: `I need to automate this process: [describe current manual steps]

Current state:
- Steps involved: [list them]
- Time spent per week: [hours]
- Tools currently used: [list]
- Failure points: [where it breaks manually]

Design an automation blueprint:
1. Which steps can be automated vs. require human judgment
2. Recommended tools (Make, n8n, Zapier, custom) with rationale
3. Trigger conditions and data flow between steps
4. Error handling and fallback logic
5. Approval workflows where human sign-off is needed
6. Monitoring and alerting setup
7. Expected time savings and ROI estimate` },
      { tag: 'Automation', title: 'Document processing pipeline', prompt: `Build an AI-powered document processing workflow for [document type — e.g., invoices, contracts, support tickets].

The workflow should:
1. Receive documents via [email/upload/API]
2. Extract key data fields: [list the fields you need]
3. Validate extracted data against [criteria]
4. Route to the correct team or system based on [conditions]
5. Flag exceptions for human review
6. Log every processed document with outcome
7. Send confirmation to the sender

Provide the workflow design, tool recommendations, and error handling strategy.` },
      { tag: 'Automation', title: 'Multi-step approval workflow', prompt: `Design an automated approval workflow for [process — e.g., purchase orders, content publishing, leave requests].

Requirements:
- Triggers when [condition — e.g., amount > $500, new article submitted]
- Step 1: notify [approver 1] with [context summary]
- Step 2: if approved, escalate to [approver 2]
- Timeout: if no response in [X hours], auto-escalate
- Rejection: notify requester with reason and resubmit option
- Audit trail: log every action with timestamp and actor
- Integration with: [Slack/email/Teams]

Provide: workflow diagram, tool setup, and notification templates.` },
      { tag: 'Automation', title: 'Recurring report automation', prompt: `Automate this recurring report that currently takes [N hours/week] to compile manually:

Report: [describe what it shows]
Data sources: [list sources — e.g., Google Analytics, Salesforce, spreadsheet]
Recipients: [who receives it]
Frequency: [daily/weekly/monthly]
Format: [email body / PDF / Google Slides / Slack message]

Design:
1. How to pull data from each source (API, export, scrape)
2. Data aggregation and calculation logic
3. Template for the formatted output
4. Scheduling and delivery setup
5. What to do when a data source fails or is delayed` },
    ],
  },
  {
    title: 'AI Integration & Autonomous Systems',
    icon: Brain,
    description: 'Integrate LLMs and AI capabilities into your workflows and build semi-autonomous systems that learn and improve over time.',
    prompts: [
      { tag: 'AI Integration', title: 'LLM integration architecture', prompt: `I want to integrate an LLM (OpenAI GPT-4 / Claude / Gemini) into my workflow for [use case — e.g., summarising support tickets, classifying emails, generating reports].

Design the integration:
1. Input: what data gets sent to the LLM and how it's prepared
2. Prompt strategy: system prompt, user prompt, and any few-shot examples
3. Output: how to parse and validate the LLM's response
4. Fallback: what happens when the LLM returns an unexpected format
5. Rate limiting and cost control (max tokens, caching repeated queries)
6. Logging: how to track inputs, outputs, latency, and cost
7. Quality monitoring: how to catch when output quality degrades` },
      { tag: 'AI Integration', title: 'AI-powered routing and triage', prompt: `Build an intelligent routing system that classifies and routes incoming [requests/tickets/emails/leads] automatically.

Requirements:
- Input: [describe what arrives — e.g., support email, web form submission]
- Categories to classify into: [list categories]
- Priority levels: [critical / high / medium / low] with criteria
- Routing rules: category X goes to team Y, priority critical goes to person Z
- For ambiguous inputs: route to [default team] and flag for review
- Track classification accuracy over time
- Allow humans to correct misclassifications (feedback loop)

Provide: architecture, prompt design, routing logic, and accuracy tracking.` },
      { tag: 'AI Integration', title: 'Automated content generation pipeline', prompt: `Design a production content generation pipeline:

Use case: generate [type of content — e.g., product descriptions, meeting summaries, weekly reports]
Volume: [N items per day/week]
Input data: [what information is available as input]
Quality bar: [describe what good output looks like]
Approval: [auto-publish or human review before publishing]

Architecture:
1. Input preparation and prompt construction
2. LLM call with retry logic (handle rate limits, timeouts)
3. Output validation (format check, length check, prohibited phrases)
4. Human review queue for flagged outputs
5. Publishing/delivery to [destination]
6. Feedback collection and prompt improvement cycle` },
      { tag: 'AI Integration', title: 'Feedback loop and model improvement', prompt: `Design a feedback loop system to improve an AI workflow over time.

Current workflow: [describe what the AI does]
Current problems: [where the output is wrong or low quality]

Feedback system:
1. How to collect human corrections (UI, annotation tool, Slack reaction)
2. How to log inputs, AI outputs, and human corrections
3. When to use corrections to update the system prompt (manual review vs. automated)
4. How to A/B test prompt changes and measure improvement
5. Metrics to track: accuracy rate, correction rate, human time spent
6. When output quality is "good enough" to reduce human review
7. How to handle drift (model output changes over time without prompt changes)` },
    ],
  },
  {
    title: 'Workflow Optimization',
    icon: GitMerge,
    description: 'Audit, redesign, and streamline business processes to eliminate bottlenecks, reduce handoffs, and scale without proportional headcount increases.',
    prompts: [
      { tag: 'Optimization', title: 'Process audit and bottleneck analysis', prompt: `Audit this business process for automation and optimisation opportunities:

Process: [describe step by step]
Team: [who is involved]
Volume: [how many times this runs per week/month]
Current pain points: [what frustrates the team]

Provide:
1. Process map showing each step, who does it, and how long it takes
2. Bottlenecks ranked by impact on cycle time
3. Steps that could be automated vs. steps requiring human judgment
4. Quick wins (implement in under a week)
5. Larger optimisations (1-4 weeks each)
6. Estimated time saved per month after full optimisation
7. Implementation priority order` },
      { tag: 'Optimization', title: 'Handoff reduction strategy', prompt: `My team has too many handoffs in [process name]. Each handoff adds delay and creates communication gaps.

Current handoffs: [list each one — who hands to whom, why]
Current cycle time: [how long the full process takes]
Target: reduce cycle time by [X%] or to [target duration]

Design a reduced-handoff workflow:
1. Which handoffs can be eliminated (consolidate tasks to one owner)
2. Which handoffs can be automated (no human involvement)
3. Which handoffs are necessary and how to make them faster
4. New RACI matrix: who is Responsible, Accountable, Consulted, Informed
5. SLAs for each remaining handoff
6. Monitoring: how to track if handoffs are being completed on time` },
      { tag: 'Optimization', title: 'Intelligent workload distribution', prompt: `Design a smart workload distribution system for [type of work — e.g., support tickets, sales leads, content reviews].

Team: [N] team members with [describe skills/specialisations]
Volume: [N items per day]
Priority factors: [urgency, complexity, customer tier, skill match]

Build a distribution system:
1. Routing rules: how to assign items based on priority factors
2. Load balancing: ensure no team member is overloaded
3. Escalation: what triggers escalation to senior or specialist
4. Visibility: dashboard showing queue depth per person
5. SLA tracking: alert when items are approaching breach
6. Metrics: track throughput, time-to-first-response, resolution time per person` },
      { tag: 'Optimization', title: 'ROI calculation for automation investment', prompt: `Help me calculate the ROI for automating [process name].

Current state:
- [N] people involved for [X hours/week]
- Hourly cost: [average hourly rate or salary cost]
- Error rate: [% of tasks that have errors, and cost per error]
- Current cycle time: [hours from start to completion]

Automation option:
- Tool: [Make / n8n / Zapier / custom]
- Implementation cost: [estimate or ask me to estimate]
- Monthly running cost: [subscription + maintenance]

Calculate:
1. Annual cost of current manual process
2. Annual cost after automation
3. Break-even point (months)
4. 3-year ROI
5. Non-financial benefits (speed, accuracy, scalability)
6. Risks and assumptions in this calculation` },
    ],
  },
  {
    title: 'Data Pipelines & Integration',
    icon: Database,
    description: 'Connect systems, move and transform data reliably, and build pipelines that maintain data quality and integrity across your organisation.',
    prompts: [
      { tag: 'Data', title: 'Multi-source data pipeline', prompt: `Design a data pipeline that integrates [N] systems:

Sources:
- [Source 1]: [type — API / database / spreadsheet / file export]
- [Source 2]: [type]
- [Source 3]: [type]

Destination: [where merged data should land — e.g., data warehouse, CRM, dashboard]

Requirements:
- Sync frequency: [real-time / hourly / daily]
- Business logic: [transformation rules]
- Data quality: [validation rules, what to do with bad records]
- Error handling: [retry strategy, alert if pipeline fails]
- Lineage: track where each record came from

Provide: architecture diagram, tool recommendation, and implementation steps.` },
      { tag: 'Data', title: 'Webhook-based real-time integration', prompt: `Build a webhook integration between [source system] and [destination system].

Triggers: [which events should fire the webhook — e.g., new order, status change, form submission]
Payload: [describe the data the webhook sends]
Destination actions: [what should happen when each event is received]

Implementation:
1. Webhook receiver endpoint (validate signature, parse payload)
2. Idempotency: handle duplicate deliveries safely
3. Transform payload to destination format
4. Error handling: retry failed deliveries with exponential backoff
5. Dead letter queue for repeatedly failing events
6. Logging: record every event with status (received, processed, failed)
7. Dashboard to monitor event volume and failure rate` },
      { tag: 'Data', title: 'ETL pipeline with quality checks', prompt: `Build an ETL pipeline for [use case — e.g., daily sales report, customer sync]:

Extract:
- Source: [database query / API call / file]
- Schedule: [cron expression or trigger]
- How to handle source being unavailable

Transform:
- Business rules: [list transformations]
- Data types and formats to enforce
- How to handle null values, duplicates, invalid records

Load:
- Destination: [target system]
- Load strategy: full replace / upsert / append
- How to verify load was complete and correct

Monitoring: row count checks, freshness alerts, anomaly detection` },
      { tag: 'Data', title: 'Master data management strategy', prompt: `Design a master data management (MDM) strategy for [entity — e.g., customer, product, supplier] across [N] systems.

Problem: the same entity exists in multiple systems with conflicting data.

Systems involved: [list with what data each holds]

MDM design:
1. Golden record: how to determine which system is the authoritative source per field
2. Deduplication: how to match records across systems (name, email, ID)
3. Merge rules: what happens when two records are identified as the same entity
4. Distribution: how updates propagate to downstream systems
5. Governance: who can update the golden record and when
6. Conflict resolution: what to do when systems have conflicting updates` },
    ],
  },
  {
    title: 'No-Code & Low-Code Solutions',
    icon: Layers,
    description: 'Build powerful automations and internal tools without writing code, using Make, Zapier, n8n, Airtable, and similar platforms.',
    prompts: [
      { tag: 'No-Code', title: 'Platform selection guide', prompt: `I need to choose a no-code/low-code platform for [use case description].

My requirements:
- Team technical level: [non-technical / some tech / developer-friendly]
- Budget: [monthly budget or range]
- Must-have integrations: [list]
- Nice-to-have: [list]
- Data volume: [approx. records/transactions per month]
- Hosting: [cloud only / self-hosted option needed]

Compare the top 3-4 options across:
- Functionality fit for my use case
- Learning curve
- Pricing at my scale
- Integration ecosystem
- Limitations I will hit
- Recommended starting point

Give me a recommendation with reasoning.` },
      { tag: 'No-Code', title: 'Make (Integromat) scenario design', prompt: `Design a Make scenario for this workflow: [describe what should happen]

Trigger: [what starts the automation — e.g., new row in Google Sheets, form submission, scheduled time]

Steps:
1. [First action]
2. [Transform or filter data]
3. [Conditional branch: if X then Y, else Z]
4. [Final action — e.g., send email, update CRM, post to Slack]

Provide:
- Module-by-module setup instructions
- How to configure each filter and router
- How to map data fields between steps
- Error handling (what happens if step 3 fails)
- How to test the scenario before activating` },
      { tag: 'No-Code', title: 'Airtable database and automation', prompt: `Build an Airtable base for [use case — e.g., content calendar, project tracker, CRM].

Tables needed: [list the entities]
Relationships between tables: [describe how they link]
Key views: [what different team members need to see]
Automations to add:
- When [trigger], do [action]
- When [trigger], send [notification to who]
Formulas needed: [describe any calculated fields]

Provide:
1. Table structure (fields, types, options)
2. Relationship setup
3. View configurations
4. Automation setup step by step
5. Permission setup (who can see/edit what)` },
      { tag: 'No-Code', title: 'Citizen developer governance framework', prompt: `I want to enable my non-technical team to build their own automations without creating security or maintenance problems.

Team: [N] people across [departments]
Tools they will use: [Make / Zapier / Power Automate / Airtable]

Design a governance framework:
1. What team members can build without IT approval
2. What requires IT review (data sensitivity, external APIs, financial data)
3. Naming conventions for workflows and data fields
4. Documentation requirements for each automation built
5. Review process: who signs off on new automations
6. Maintenance: who is responsible when an automation breaks
7. Training plan: how to onboard team members safely` },
    ],
  },
  {
    title: 'Research & Analysis Automation',
    icon: Search,
    description: 'Automate research, competitive intelligence, and data analysis workflows so your team gets insights faster with less manual effort.',
    prompts: [
      { tag: 'Research', title: 'Competitor monitoring workflow', prompt: `Build an automated competitive monitoring system for [your industry/product].

Competitors to track: [list 3-5]
What to monitor:
- Website changes (pricing, feature pages, job postings)
- Social media activity
- News and press mentions
- Review platforms (G2, Capterra, Trustpilot)
- SEO rankings for shared keywords

Workflow design:
1. Data collection: tools and schedule for each source
2. Change detection: how to identify significant changes
3. Summarisation: use AI to extract key insights from raw data
4. Digest format: how to present findings to the team
5. Delivery: Slack weekly digest / email / dashboard
6. Alert triggers: what warrants an immediate notification` },
      { tag: 'Research', title: 'Lead research automation', prompt: `Automate the research process for new sales leads before outreach.

When a new lead is added to [CRM/spreadsheet], automatically:
1. Enrich company data: size, industry, funding, tech stack
2. Research the contact: role, recent LinkedIn activity, company news
3. Score the lead based on ICP criteria: [list your ICP signals]
4. Identify the best angle for outreach (recent news, job posting, trigger event)
5. Draft a personalised first-line for the outreach email
6. Update the CRM record with all research findings
7. Notify the sales rep via Slack with a summary

Provide: tool stack, workflow design, and prompt for the AI summarisation step.` },
      { tag: 'Research', title: 'Market trend monitoring pipeline', prompt: `Design an automated market intelligence pipeline for [your market/topic].

Sources to monitor:
- Industry news sites: [list]
- RSS feeds or newsletters: [list]
- Reddit communities or forums: [list]
- Twitter/X accounts or hashtags: [list]

Processing:
1. Collect new content on [daily/weekly] schedule
2. Filter for relevance using keywords: [list keywords]
3. Use AI to categorise and summarise each item
4. Identify trends across multiple items
5. Flag high-priority items for immediate attention

Delivery:
- Weekly digest email with top 10 insights
- Real-time alert for [high-priority keywords]
- Archive: searchable database of all collected items` },
      { tag: 'Research', title: 'Survey analysis and insight extraction', prompt: `Automate the analysis of survey responses for [survey type — e.g., customer satisfaction, employee feedback, NPS].

Setup:
- Survey tool: [Typeform / Google Forms / SurveyMonkey]
- Volume: [N responses per month]
- Question types: [rating scales, open text, multiple choice]

Automation pipeline:
1. Collect new responses automatically
2. Categorise open-text responses using AI: [your categories]
3. Sentiment analysis on open-text fields
4. Calculate scores: NPS, CSAT, theme frequency
5. Identify trends week-over-week
6. Generate a monthly insights report automatically
7. Alert when NPS drops by [threshold] or a critical theme spikes` },
    ],
  },
];

const faqs = [
  { question: 'What is Manus AI and what makes it different from other AI tools?', answer: 'Manus AI is an autonomous AI agent designed to complete complex, multi-step tasks with minimal human input — going beyond simple chat responses to actually execute workflows, interact with tools, browse the web, write and run code, and manage files. Unlike ChatGPT or Claude (which respond conversationally), Manus acts on tasks autonomously across many steps. It is particularly useful for research, data analysis, automation design, and content production workflows.' },
  { question: 'What is the difference between RPA and workflow automation?', answer: 'Robotic Process Automation (RPA) automates tasks by mimicking user actions on a UI — clicking buttons, reading screens, filling forms. It works well for legacy systems without APIs. Workflow automation connects modern systems via APIs and webhooks, is more reliable, scales better, and is easier to maintain. Choose RPA for legacy systems where there is no API; choose workflow automation (Make, n8n, Zapier) for modern connected systems.' },
  { question: 'How do I calculate ROI on an automation project?', answer: 'ROI = (Annual Savings - Annual Cost) / One-time Investment Cost. Annual Savings = (hours saved per week × 52 × hourly cost) + (error reduction × cost per error). Annual Cost = tool subscription + maintenance time. Most well-designed automation projects break even in 3-9 months. Always establish a baseline before automating — without measuring the current state, you cannot prove the value after.' },
  { question: 'What are the most common mistakes in workflow automation projects?', answer: 'The top mistakes are: automating a broken process (fix the process first), poor data quality entering the automation (garbage in, garbage out), ignoring edge cases in the design phase (they always appear in production), no monitoring or alerting, failing to train the team on the new workflow, and underestimating ongoing maintenance. Automation is not a one-time project — it requires care as upstream systems and business rules change.' },
  { question: 'Should I start with a big-bang automation or a phased approach?', answer: 'Always start phased. Pick one high-impact, low-risk process for your pilot. Build it, test it, measure the results, and learn what you got wrong before expanding. A phased approach builds confidence, delivers early ROI, reduces change management friction, and lets you refine your approach before you scale. Big-bang implementations frequently fail due to underestimated complexity and resistance from the people whose jobs change.' },
  { question: 'How do I handle exceptions and errors in automated workflows?', answer: 'Design for failure from the start. For every step, ask: what happens if this fails? Define retry rules (how many times, with what delay), escalation paths (who gets notified after N failures), and fallback actions (what the system does when it cannot recover automatically). Log every exception with enough context to debug it. Review your exception log weekly — recurring exceptions point to systematic problems that should be fixed in the workflow design.' },
  { question: 'How do I choose between Make, Zapier, and n8n?', answer: 'Zapier is the easiest to start with, has the largest app library, but gets expensive at scale. Make (formerly Integromat) is more powerful for complex multi-step workflows and better value at higher volumes. n8n is open-source and self-hostable — no per-operation cost — but requires more technical setup. Start with Zapier for quick wins and simple integrations; move to Make for complex workflows; consider n8n if you need self-hosting or want to avoid per-task pricing at scale.' },
  { question: 'What compliance and security considerations apply to automation?', answer: 'Key areas: data minimisation (only process data you need), encryption in transit and at rest, access control (who can trigger or modify automations), audit trails (log who triggered what and when), GDPR/data protection compliance when processing personal data, and regular access reviews. Avoid storing sensitive credentials in automation tools — use their secret management features. Treat your automation workflows as production software: they need security reviews too.' },
  { question: 'How do I measure the success of an automation initiative?', answer: 'Define your metrics before you build: time saved per week, error rate before vs. after, cycle time reduction, cost per transaction, team satisfaction score. Measure the baseline manually before automating. After deployment, track metrics monthly and share results with stakeholders. Non-financial wins matter too: reduced stress for the team, faster response to customers, and the ability to scale volume without hiring.' },
  { question: 'When should I use an AI agent vs. a traditional automation tool?', answer: 'Use traditional automation (Make, Zapier, n8n) for structured, predictable workflows where inputs and outputs are well-defined — things like "when form is submitted, send email and update CRM." Use AI agents when the task requires judgment, understanding of unstructured content (emails, documents, conversations), or variable decision-making. AI agents are better for: triaging support tickets, summarising research, classifying intent, or handling tasks where the path varies based on content.' },
];

export default function ManusAIPromptsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Manus AI Prompts: Workflow Automation, AI Integration & Task Completion',
    description: 'Comprehensive prompts for Manus AI and workflow automation covering task automation, AI integration, process optimisation, data pipelines, no-code solutions, and research automation.',
    author: { '@type': 'Organization', name: 'GPTPrompts.AI' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };

  return (
    <div className="min-h-screen text-white" style={{ background: '#06060f' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 text-sm font-medium" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
            AI Automation Agent
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Manus AI Prompts</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Master workflow automation, AI integration, and autonomous task execution. These prompts cover end-to-end automation design, data pipeline architecture, and building systems that work while you sleep.</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['Task Automation', 'AI Integration', 'Workflow Design', 'Data Pipelines', 'No-Code', 'Research'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs border text-gray-400" style={{ borderColor: borderCol }}>{tag}</span>
            ))}
          </div>
        </div>

        {sections.map((sec, si) => (
          <section key={si} className="mb-14">
            <div className="flex items-center gap-3 mb-2">
              <sec.icon size={22} style={{ color: accent }} />
              <h2 className="text-2xl font-bold text-white">{sec.title}</h2>
            </div>
            <p className="text-gray-400 mb-6 ml-9">{sec.description}</p>
            <div className="space-y-4">
              {sec.prompts.map((p, pi) => <CopyCard key={pi} {...p} />)}
            </div>
          </section>
        ))}

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((item, i) => <FAQ key={i} item={{ question: item.question, answer: item.answer }} />)}
          </div>
        </section>

        <section className="mb-12 p-6 rounded-lg border" style={{ borderColor: borderCol, background: bgDark }}>
          <h3 className="text-lg font-semibold text-white mb-3">Automation Tool Quick Reference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              { tool: 'Make (Integromat)', best: 'Complex multi-step workflows, visual scenario builder, better pricing at volume than Zapier.' },
              { tool: 'Zapier', best: 'Quick simple integrations, largest app library, easiest for non-technical users to start.' },
              { tool: 'n8n', best: 'Self-hosted, open-source, no per-operation cost, good for technical teams needing control.' },
              { tool: 'Power Automate', best: 'Microsoft ecosystem (Teams, Outlook, SharePoint). Best when you are already in Office 365.' },
              { tool: 'Airtable', best: 'Database-first automation with built-in views, forms, and workflows for structured data.' },
              { tool: 'Custom code (Python)', best: 'Full control, complex logic, when no-code tools hit their limits or costs become prohibitive.' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded border" style={{ borderColor: borderCol }}>
                <p className="font-semibold mb-1" style={{ color: accent }}>{item.tool}</p>
                <p className="text-gray-400">{item.best}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t pt-8" style={{ borderColor: borderCol }}>
          <h3 className="text-lg font-semibold text-white mb-4">Related Prompts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: 'AI Agent Prompts', href: '/ai-agent-prompts' },
              { name: 'AI Prompts for Supply Chain', href: '/ai-prompts-supply-chain' },
              { name: 'AI Prompts for Notion', href: '/ai-prompts-notion' },
              { name: 'AI for Executives Prompts', href: '/ai-for-executives-prompts' },
              { name: 'ChatGPT Prompts for Business', href: '/chatgpt-prompts-for-business' },
              { name: 'AI Prompts for Startups', href: '/ai-prompts-for-startups' },
              { name: 'Replit Agent Prompts', href: '/replit-agent-prompts' },
              { name: 'OpenAI Codex Prompts', href: '/openai-codex-prompts' },
            ].map((link, i) => (
              <a key={i} href={link.href} className="px-4 py-3 rounded border text-gray-300 transition-colors text-sm font-medium" style={{ borderColor: borderCol }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = accent; (e.currentTarget as HTMLAnchorElement).style.color = accent; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = borderCol; (e.currentTarget as HTMLAnchorElement).style.color = '#d1d5db'; }}>{link.name}</a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
