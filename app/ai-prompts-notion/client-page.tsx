'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, Database, Zap, Layout, Code2, Link, Users } from 'lucide-react';

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
    <div
      className="rounded-lg border p-5 transition-colors"
      style={{ borderColor: borderCol, background: bgDark }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = `${accent}60`)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = borderCol)}
    >
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
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors"
        style={{ background: bgDark }}
      >
        <span className="font-medium text-white pr-4">{item.question}</span>
        {open ? <ChevronUp size={18} className="shrink-0" style={{ color: accent }} /> : <ChevronDown size={18} className="shrink-0 text-gray-400" />}
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed" style={{ background: bgDark }}>
          {item.answer}
        </div>
      )}
    </div>
  );
};

const sections = [
  {
    title: 'Database Design & Structure',
    icon: Database,
    description: 'Architect powerful Notion databases that scale with your team — from simple trackers to relational data systems.',
    prompts: [
      {
        tag: 'Database Design',
        title: 'Design a Relational Project Management Database',
        prompt: `You are a Notion workspace architect. Design a complete relational database system for project management.

I need a database structure that includes:
- Projects database (status, owner, timeline, priority fields)
- Tasks database (linked to Projects via relation)
- Team Members database (linked to Tasks and Projects)
- Milestones database (linked to Projects)

For each database, specify:
1. All property types and their exact names
2. Relation and rollup configurations
3. Formula properties with exact syntax
4. Recommended default views (Board, Calendar, Table, Gallery)

Also provide:
- A naming convention guide for properties
- Which properties should be required vs optional
- How to set up automations between databases

Make the system work for a team of 5-20 people managing 10-50 concurrent projects.`,
      },
      {
        tag: 'Schema Planning',
        title: 'Audit and Improve an Existing Database Schema',
        prompt: `Act as a Notion database consultant reviewing my existing workspace structure.

I will describe my current setup and you will:
1. Identify structural weaknesses — redundancy, missing relations, poor property types
2. Suggest a refactored schema with specific property changes
3. Explain how to migrate data without losing information
4. Recommend which views to create for different use cases
5. Propose rollup and formula improvements

My current setup:
[Describe your databases, properties, and pain points here]

Please provide:
- A before/after comparison table
- Step-by-step migration instructions
- Any caveats or limitations to be aware of
- Priority order for making changes (quick wins first)`,
      },
      {
        tag: 'Data Modeling',
        title: 'Build a Content Calendar Database System',
        prompt: `Design a comprehensive Notion content calendar database system for a marketing team.

The system should handle:
- Blog posts, social media, newsletters, and video content
- Multiple authors and reviewers
- Publishing status workflow: Idea, Draft, Review, Scheduled, Published
- SEO metadata tracking: target keyword, meta description, search volume
- Performance metrics after publishing: views, shares, conversions

Please provide:
1. Complete database schema with all property names and types
2. Relations between content items and team members
3. Formula for automatically calculating days until publish date
4. Filter views for each team role (writer, editor, manager)
5. Rollup properties for tracking monthly content volume
6. A linked database setup for the editorial calendar view

Include example entries to illustrate how the system works in practice.`,
      },
      {
        tag: 'Advanced Schema',
        title: 'Design a CRM Database in Notion',
        prompt: `You are a Notion CRM specialist. Build a complete CRM system inside Notion for a B2B sales team.

Required databases:
- Contacts (people at companies)
- Companies (accounts)
- Deals / Opportunities (linked to contacts and companies)
- Activities (calls, emails, meetings — linked to deals)
- Products / Services (linked to deals)

For the full system:
1. Define all properties with exact types (text, select, relation, rollup, formula, date)
2. Set up the relation web between all 5 databases
3. Create rollup properties that show deal value per company
4. Write formulas for: days since last activity, deal stage duration, weighted pipeline value
5. Recommend views: pipeline board, activity log, company overview
6. Explain how to use Notion automations to trigger status changes

Support a team of 3-8 sales reps managing up to 200 active deals.`,
      },
    ],
  },
  {
    title: 'Workflow Automation',
    icon: Zap,
    description: 'Eliminate manual work with Notion automations, button actions, and integrations that keep your workspace running itself.',
    prompts: [
      {
        tag: 'Automation',
        title: 'Set Up a Full Project Intake Workflow',
        prompt: `Help me build an automated project intake workflow in Notion.

The workflow should:
1. Trigger when a new project is added to the Projects database
2. Automatically create a linked project brief page from a template
3. Notify the assigned project manager via a status change
4. Auto-populate a kickoff checklist in the project page
5. Set default due dates based on project type (via formula)

Please provide:
- Step-by-step automation configuration in the Notion automation panel
- The template page structure I should create first
- Button actions to add for manual triggers
- How to handle edge cases (no owner assigned, missing deadline)
- Which automations require Notion Plus vs Business tier

Also explain how I can extend this with Make or Zapier for more complex triggers.`,
      },
      {
        tag: 'Button Actions',
        title: 'Create a One-Click Status Update Button System',
        prompt: `Design a button-based status management system for a Notion project database.

I want buttons that perform multi-step actions:

Button 1 — Start Sprint:
- Changes project status to In Progress
- Sets start date to today
- Creates a new sprint page from template
- Adds a log entry to an activity database

Button 2 — Mark Complete:
- Changes status to Complete
- Sets completion date to today
- Triggers a rollup update in the team database
- Adds a completion note prompt

Button 3 — Escalate Issue:
- Changes priority to Critical
- Sends a notification to the assigned manager
- Creates a linked issue page with pre-filled context

For each button:
1. Write the exact Notion button configuration steps
2. List any prerequisite database properties needed
3. Explain which Notion tier is required
4. Describe any known limitations`,
      },
      {
        tag: 'Recurring Tasks',
        title: 'Build a Weekly Review Automation System',
        prompt: `Create a recurring weekly review system in Notion using automations and templates.

The system should:
1. Auto-generate a new Weekly Review page every Monday at 9am
2. Pull in all tasks completed in the previous week via filter
3. Show all tasks due this week with current status
4. Include a structured reflection template with prompts
5. Link to the previous week's review for continuity
6. Archive old reviews after 90 days automatically

Technical requirements:
- Properties to add to the Tasks database to support this
- Template structure for the weekly review page
- Configure the recurring automation trigger
- Set up a filtered linked database block for this week's tasks
- Create a rollup showing percentage of tasks completed last week

Bonus: how to set this up to work across time zones for a distributed team.`,
      },
      {
        tag: 'Integration',
        title: 'Connect Notion to External Tools with Make',
        prompt: `You are a no-code automation expert. Help me connect Notion to external tools using Make (formerly Integromat).

Automation 1 — GitHub to Notion:
- When a new GitHub issue is created, add it to my Notion bug tracker
- Include: title, description, assignee, label, URL, created date
- Map GitHub status labels to Notion select options

Automation 2 — Notion to Slack:
- When a project status changes to Needs Review, post a Slack message
- Include project name, owner, deadline, and a direct Notion link
- Route to the correct channel based on project type

Automation 3 — Google Forms to Notion:
- When a client fills in an intake form, create a new project in Notion
- Map form fields to database properties
- Trigger a welcome email via Gmail

For each automation:
1. Module-by-module Make scenario configuration
2. Required API connections and permissions
3. Error handling recommendations
4. How to test before going live`,
      },
    ],
  },
  {
    title: 'Template Systems',
    icon: Layout,
    description: 'Build reusable, scalable template libraries that give your team consistent starting points for every type of work.',
    prompts: [
      {
        tag: 'Templates',
        title: 'Design a Complete Meeting Notes Template System',
        prompt: `Create a comprehensive meeting notes template system for Notion.

Templates needed for these meeting types:
1. Weekly team standup (15 min)
2. Project kickoff meeting (60 min)
3. Client discovery call (45 min)
4. Quarterly business review (90 min)
5. One-on-one performance check-in (30 min)

For each template, provide:
- Page title format with date auto-filled
- Pre-meeting prep section: agenda, attendees, pre-read
- During-meeting sections: discussion, decisions, action items
- Post-meeting follow-up: next steps, owner, deadline
- A Parking Lot section for off-topic items
- Tags and properties for filtering in the meetings database

Also design:
- The parent Meetings database with all required properties
- A Notion formula that flags meetings with no action items assigned
- How to link meeting notes to Projects and Contacts databases`,
      },
      {
        tag: 'SOPs',
        title: 'Build a Standard Operating Procedure Template Library',
        prompt: `Design a Notion SOP template library for an operations team.

Master SOP Template:
- Process name, owner, last updated, version number
- Purpose and scope section
- Prerequisites and required tools
- Step-by-step instructions with numbered callouts
- Decision tree for common variations
- Troubleshooting guide
- Related SOPs via linked database
- Review schedule and sign-off log

SOP Database properties:
- Department, Process Type, Complexity (Simple / Medium / Complex)
- Status, Last Review Date, Next Review Date
- Views: By Department, Due for Review, Recently Updated

Governance system:
1. How to version-control SOPs in Notion
2. Review reminder automation — 30 days before Next Review Date
3. Approval workflow using status changes and notifications
4. How to track which team members have acknowledged each SOP`,
      },
      {
        tag: 'Onboarding',
        title: 'Create a New Employee Onboarding Template System',
        prompt: `Build a complete new employee onboarding system in Notion.

1. Onboarding Hub (master navigation):
   - Welcome message with company values
   - 30/60/90 day goal framework
   - Quick links to key tools and resources
   - Team org chart via linked database view

2. New Hire Template Page:
   - Personal profile section (role, start date, manager, team)
   - Week 1 checklist auto-populated from template
   - First 30 days task list with owners
   - Learning resources by department
   - Meeting schedule for first week

3. Manager Checklist Template:
   - Pre-arrival tasks: equipment, access, workspace
   - Day 1 agenda builder
   - Introduction meeting schedule
   - 30/60/90 check-in reminders

4. Onboarding Database:
   - Track all current and past new hires
   - Properties: Name, Role, Department, Start Date, Status, Manager
   - Progress rollup showing percentage of checklist complete
   - Automated welcome message trigger on entry creation`,
      },
      {
        tag: 'Project Templates',
        title: 'Design a Project Brief and Kickoff Template',
        prompt: `Create a comprehensive project brief and kickoff template system in Notion.

Project Brief Template:
- Project name, code, owner, sponsors, start/end dates
- Problem statement: what problem are we solving and for whom?
- Goals and success metrics in SMART format
- Scope definition: in scope vs out of scope table
- Stakeholder matrix: name, role, influence, communication preference
- Budget and resource allocation table
- Risk register: risk, likelihood, impact, mitigation action
- Assumptions and dependencies list
- Approval sign-off section with date

Kickoff Meeting Companion:
- Pre-read summary of the brief
- Agenda with time allocations
- Team roles and responsibilities as RACI table
- Communication plan: cadence, channels, escalation path
- Decision log for the kickoff meeting
- Agreed next steps with owners and deadlines

Database integration:
- How to link this template to the Projects database
- Properties to auto-populate from the brief into the project
- Formula to calculate project health score from key input fields`,
      },
    ],
  },
  {
    title: 'Advanced Features & Formulas',
    icon: Code2,
    description: 'Unlock the full power of Notion formulas, rollups, and advanced configurations to build intelligent, data-driven workspaces.',
    prompts: [
      {
        tag: 'Formulas',
        title: 'Write Advanced Notion Formulas for Project Tracking',
        prompt: `You are a Notion formula expert. Write production-ready formulas for a project management database.

Formula 1 — Project Health Score:
- Inputs: completion percentage, days until deadline, number of open blockers
- Output: score from 0 to 100 with Red, Yellow, or Green status
- Weights: completion 40%, timeline 40%, blockers 20%

Formula 2 — Dynamic Due Date Status:
- Show Overdue if past deadline and not complete
- Show Due Today if deadline is today
- Show Due in X days for upcoming items
- Show On Track if more than 7 days away
- Show Complete if status is Done

Formula 3 — Workload Calculator:
- Count tasks assigned to each team member this week
- Flag overloaded if over 10 tasks, underutilized if under 3
- Output a text label with emoji indicator

Formula 4 — Sprint Velocity:
- Calculate average tasks completed per sprint over last 4 sprints
- Estimate capacity for next sprint based on velocity
- Show comparison vs target velocity

For each formula:
1. Write the exact Notion formula 2.0 syntax
2. Explain the logic step by step
3. List required input properties and types
4. Note edge cases to handle`,
      },
      {
        tag: 'Rollups',
        title: 'Configure Complex Rollup Properties',
        prompt: `Guide me through setting up advanced rollup configurations in Notion for a multi-database workspace.

Rollup 1 — Total Revenue per Client (Companies to Deals):
- Sum of all deal values where status is Won
- Show as currency with proper formatting
- Include a count of won deals alongside the total value

Rollup 2 — Team Workload Overview (Team Members to Tasks):
- Count of open tasks per person
- Count of overdue tasks per person
- Average task priority using a numeric formula on the priority field
- Earliest due date among their open tasks

Rollup 3 — Project Completion Metrics (Projects to Tasks):
- Percentage of tasks complete using a formula approach
- Count of blocked tasks currently
- Date of most recently completed task
- Total estimated hours vs actual hours tracked

Rollup 4 — Content Performance (Content Calendar to Analytics):
- Sum of pageviews per content piece
- Average engagement rate across pieces
- Count of articles above target traffic threshold

For each rollup:
1. Step-by-step configuration in Notion UI
2. Any helper formulas needed on the source database
3. How to display rollup data in filtered views
4. Performance considerations for large databases`,
      },
      {
        tag: 'Views & Filters',
        title: 'Build a Master Dashboard with Filtered Views',
        prompt: `Design a Notion master dashboard for an operations team using advanced views and filters.

Section 1 — My Work Today:
- Tasks: assigned to me, due today or overdue
- Sorted by priority descending
- Visible properties: Task name, Project, Status, Due date

Section 2 — Team Workload Matrix:
- Gallery view of team members
- Card preview: task count, active projects, next deadline
- Grouped by department

Section 3 — Project Pipeline Board:
- Kanban grouped by project phase
- Filter: active projects only, exclude archived
- Card properties: owner, deadline, completion %, budget status

Section 4 — Upcoming Deadlines:
- Calendar view of projects and milestones
- Color-coded by project type
- Click-through to individual project pages

Section 5 — Performance Metrics Table:
- Linked KPI tracker database
- Filter: current month only
- Inline editing enabled for quick updates

For each section:
1. Exact filter and sort configuration
2. Property visibility settings per view
3. How to lock views to prevent accidental changes
4. Synced block vs linked database trade-offs`,
      },
      {
        tag: 'Formulas Advanced',
        title: 'Build a Formula-Powered Priority Scoring System',
        prompt: `Create a sophisticated priority scoring system using Notion formulas 2.0.

Score tasks automatically based on:
- Business impact (1-5 scale, manually set)
- Urgency (calculated from due date proximity)
- Effort required (1-5 scale, inverted — lower effort = higher score)
- Strategic alignment (linked to company OKRs, boolean)
- Stakeholder visibility (select: Low, Medium, High, Executive)

Formula 1 — Urgency Score (0-25 points):
- Due today or overdue: 25 points
- Due within 3 days: 20 points
- Due within 7 days: 15 points
- Due within 14 days: 10 points
- Due within 30 days: 5 points
- No due date: 0 points

Formula 2 — Total Priority Score (0-100):
- Combine all factors with weights:
  Impact 30%, Urgency 25%, Effort 20%, Strategic 15%, Visibility 10%

Formula 3 — Priority Label:
- 80 to 100: P0 — Critical
- 60 to 79: P1 — High
- 40 to 59: P2 — Medium
- 20 to 39: P3 — Low
- 0 to 19: P4 — Backlog

Write the exact Notion formula 2.0 syntax for all three with full explanations.`,
      },
    ],
  },
  {
    title: 'Integrations & External Connections',
    icon: Link,
    description: 'Connect Notion to your entire tech stack — from project tools and communication platforms to data sources and APIs.',
    prompts: [
      {
        tag: 'API Integration',
        title: 'Use the Notion API to Sync External Data',
        prompt: `Guide me through using the Notion API to sync data between Notion and external systems.

Use case: Sync customer support tickets from Zendesk into a Notion tracking database.

Step 1 — Notion API Setup:
- How to create and configure a Notion integration
- Required permissions and access levels
- Getting the database ID and page IDs
- Authentication setup with Bearer token

Step 2 — Data Mapping:
- Map helpdesk ticket fields to Notion database properties
- Handle property type conversions (e.g., tags to multi-select)
- Handle user and assignee mapping between systems

Step 3 — Sync Script in Python:
- Fetch new tickets from the Zendesk API
- Check for existing Notion entries to avoid duplicates
- Create or update Notion database entries via API
- Handle rate limiting (Notion API: 3 requests per second)
- Log sync results to file for monitoring

Step 4 — Scheduling and Maintenance:
- Run the script on a schedule via cron or GitHub Actions
- Error handling and alerting on failure
- How to monitor sync health over time

Provide complete, working code examples with inline comments.`,
      },
      {
        tag: 'Embedding',
        title: 'Embed External Tools Inside Notion Pages',
        prompt: `Help me set up powerful embeds and integrations inside Notion pages for a product team.

Integration 1 — Loom Video Embeds:
- How to embed Loom videos in meeting notes and project briefs
- Auto-generate a video index database from embedded Looms
- Best practices for keeping the video library organised

Integration 2 — Figma Designs:
- Embed Figma frames and prototypes in project pages
- Set up a design assets database with live Figma previews
- Keep designs current when Figma files are updated

Integration 3 — GitHub and Linear:
- Embed issue lists and PR status in project pages
- Use Notion API to pull issue data into Notion database
- Create a dev status view visible to non-technical stakeholders

Integration 4 — Looker Studio Dashboards:
- Embed live dashboards in Notion pages
- How to refresh data and handle authentication
- Best layout practices for embedded iframes in Notion

Integration 5 — Typeform and Tally Forms:
- Embed forms inside Notion pages for feedback collection
- Route form responses to a Notion database automatically
- Build an end-to-end feedback collection and review system

For each integration: setup steps, known limitations, and workarounds.`,
      },
      {
        tag: 'Slack Integration',
        title: 'Build a Notion-Slack Workflow System',
        prompt: `Design a comprehensive Notion-Slack integration system using Notion automations and Make.

Workflow 1 — Instant Notion Updates from Slack:
- Slack slash command to create Notion tasks from messages
- Format: /notion-task [title] | [project] | [due date] | [priority]
- Auto-assign to the Slack user's Notion counterpart
- Confirmation message back to Slack with the Notion link

Workflow 2 — Notion Status Changes to Slack Notifications:
- Project moves to Blocked: alert in #project-status channel
- Task overdue by 24+ hours: DM to task owner
- New high-priority task created: post in team channel
- Monday 9am weekly digest: all open items summary

Workflow 3 — Slack Message to Notion Notes:
- React to any Slack message with a notepad emoji
- This saves the message as a note in the relevant project page
- Creates a Slack thread with the Notion link

Configuration guide:
1. Make scenario setup for each workflow
2. Notion automation trigger configurations
3. Slack app permissions required
4. How to map Slack users to Notion team member database`,
      },
      {
        tag: 'Data Sources',
        title: 'Connect Google Analytics to Notion Content Tracking',
        prompt: `Help me build a Notion content performance tracking system connected to Google Analytics 4.

Goal: automatically pull GA4 metrics into a Notion content database so the team sees performance without leaving Notion.

Step 1 — GA4 Data Export Setup:
- Configure GA4 BigQuery export or use GA4 API directly
- Define metrics to track: sessions, users, avg. engagement time, conversions
- Set up a daily or weekly export schedule

Step 2 — Notion Database Schema:
- Properties to add to Content Calendar: Sessions, Users, Avg Engagement Time, Conversions, Last Updated
- Separate Performance Log database for historical data trending

Step 3 — Sync Automation using Make or Python:
- Query GA4 API for page-level performance data
- Match URLs to Notion content entries
- Update Notion properties with latest metrics
- Add a historical record to the Performance Log database

Step 4 — Notion Dashboard Views:
- Top Performers: sorted by sessions descending
- Underperforming: sessions below target threshold
- Recently Updated: updated in the last 7 days

Provide Make scenario structure and the GA4 API query syntax needed.`,
      },
    ],
  },
  {
    title: 'Team Enablement & Governance',
    icon: Users,
    description: 'Build a workspace that scales with your team — with clear governance, training systems, and access control that keeps everyone aligned.',
    prompts: [
      {
        tag: 'Governance',
        title: 'Design a Notion Workspace Governance Framework',
        prompt: `Create a comprehensive Notion workspace governance framework for a company of 50 to 200 employees.

1. Workspace Structure and Architecture:
   - Recommended top-level page hierarchy
   - Naming conventions for pages, databases, and properties
   - Organisation by department vs by function
   - What belongs in Teamspaces vs shared pages

2. Access Control Policy:
   - Default permission levels by role (Admin, Member, Guest)
   - Database-level permission guidelines
   - When to use public-sharing links and when not to
   - Guest access rules for clients and contractors

3. Content Lifecycle Management:
   - Archiving policy: when and how to archive pages
   - Deletion policy: who can delete what and when
   - Version history usage and retention guidelines
   - Template ownership and update responsibilities

4. Quality Standards:
   - Required properties for all database entries
   - Page naming conventions and templates to use
   - Tagging and categorisation standards
   - Minimum acceptable documentation level per team

5. Maintenance Cadence:
   - Weekly: personal workspace cleanup
   - Monthly: database audit and broken link check
   - Quarterly: full workspace structure review
   - Annual: archive old projects, update templates and governance doc

Provide a ready-to-use governance document template in Notion page format.`,
      },
      {
        tag: 'Training',
        title: 'Build a Notion Training Programme for Teams',
        prompt: `Design a structured Notion training programme for a team of 20 non-technical employees.

Module 1 — Foundations (1 hour):
- Navigation and page structure
- Creating pages and databases
- Basic text formatting and block types
- How to use the shared team workspace

Module 2 — Working with Databases (1.5 hours):
- What databases are and when to use them
- Adding, editing, and filtering entries
- Switching views: table, board, calendar, gallery
- Using filters and sorts for personal views

Module 3 — Collaboration (1 hour):
- Comments, mentions, and notifications
- Real-time editing and conflict resolution
- Sharing pages with correct permissions
- Using templates for consistent output

Module 4 — Productivity Workflows (1 hour):
- Using the sidebar and favourites efficiently
- Linking pages and databases together
- Building your personal dashboard
- Keyboard shortcuts and quick-add features

For each module:
1. Clear learning objectives
2. Hands-on exercise with step-by-step instructions
3. A 5-question quiz to check understanding
4. Common mistakes to avoid
5. One power tip to delight attendees

Provide a 30-day reinforcement plan to sustain adoption after training.`,
      },
      {
        tag: 'Team Adoption',
        title: 'Create a Notion Adoption and Change Management Plan',
        prompt: `Develop a change management plan for rolling out Notion as the primary workspace for a 50-person organisation currently using email, Google Drive, and Confluence.

Phase 1 — Discovery and Planning (Weeks 1-2):
- Audit current tools and identify key use cases to migrate
- Identify champions in each department
- Map existing documents and databases to Notion equivalents
- Define success metrics: adoption rate, active users, time saved

Phase 2 — Foundation Setup (Weeks 3-4):
- Set up workspace structure and governance framework
- Build core templates for each department
- Configure permissions and Teamspaces
- Import key documents from Google Drive and Confluence

Phase 3 — Pilot Rollout (Weeks 5-8):
- Start with 2 champion teams of 10-15 people
- Weekly check-ins and feedback collection sessions
- Iterate on templates and structure based on feedback
- Document wins and build case studies for broader rollout

Phase 4 — Full Rollout (Weeks 9-16):
- Phased rollout by department in batches
- Training sessions for each cohort
- Weekly tips and Slack support channel
- Support process for common questions and issues

Phase 5 — Optimise and Sustain:
- 90-day review of adoption metrics
- Identify power users for advanced training
- Regular template and governance reviews
- Celebrate wins and share success stories broadly

Provide a project timeline, RACI matrix, and communication email templates.`,
      },
      {
        tag: 'Analytics',
        title: 'Measure and Improve Notion Workspace Usage',
        prompt: `Help me build a Notion workspace analytics and improvement tracking system.

Step 1 — Define Usage Metrics:
- Daily and weekly active users via Notion admin panel
- Database entry creation rate by team
- Template usage frequency
- Pages created vs pages archived ratio
- Most and least visited pages via analytics

Step 2 — Build a Usage Tracking Database:
- Create a Workspace Health database in Notion
- Weekly manual log: active users, new pages, issues reported
- Formula to calculate week-over-week growth
- Status field tracking: is each team actively using their space?

Step 3 — Qualitative Feedback System:
- Monthly 5-question survey to all workspace users
- Questions: satisfaction 1-5, most useful feature, biggest frustration, missing feature, NPS
- Store results in a Notion survey database
- Auto-generate a monthly insights report from responses

Step 4 — Improvement Workflow:
- Create a Workspace Improvement Backlog database
- Properties: Request, Submitter, Department, Priority, Status, Effort
- Monthly triage meeting to prioritise top requests
- Track resolution and close the feedback loop with each submitter

Step 5 — Leadership Reporting:
- Monthly one-page workspace health report
- Metrics: adoption %, productivity wins, cost vs alternatives
- Quarterly strategic review of workspace direction and roadmap`,
      },
    ],
  },
];

const faqs = [
  {
    question: 'What is the difference between a Notion page and a Notion database?',
    answer: 'A Notion page is a freeform document — like a Word file or Google Doc — that can contain text, images, embeds, and blocks of any kind. A Notion database is a structured collection of pages, each with consistent properties such as status, date, and assignee, that let you filter, sort, and view the data in multiple ways. Databases are the backbone of powerful Notion workspaces because they enable relational data, rollups, and automations. Most advanced setups use databases for structured work and regular pages for freeform content like meeting notes, project briefs, and documentation.',
  },
  {
    question: 'How do Notion relations and rollups work together?',
    answer: 'Relations link two databases so entries can reference each other — for example, connecting a Tasks database to a Projects database so each task belongs to a project. Rollups then aggregate data across that relation: you can count how many tasks a project has, sum the estimated hours, or find the earliest due date. Together, relations and rollups turn Notion into a lightweight relational database. The key is to create the relation property first, then configure the rollup by choosing which property to aggregate and which calculation to apply (count, sum, average, earliest, latest).',
  },
  {
    question: 'Can Notion replace project management tools like Asana or Jira?',
    answer: 'Notion can replace basic to intermediate project management tools for many teams, especially those who value flexibility and documentation alongside task tracking. It handles kanban boards, task assignments, status workflows, due dates, and project overviews well. However, it lacks some features that dedicated PM tools have: automated dependency management, Gantt charts with hard dependencies, detailed time tracking, and advanced reporting. For teams managing complex engineering sprints, Linear or Jira may still be more appropriate. Many teams use a hybrid approach — Notion for documentation and strategy, a dedicated PM tool for day-to-day execution tracking.',
  },
  {
    question: 'What are Notion formulas 2.0 and how are they different?',
    answer: 'Notion formulas 2.0 (introduced in 2023) replaced the older function-based syntax with a more modern, JavaScript-like style. They support dot notation for property access, built-in date and string functions, and multiline readability. The most important new feature is let() and lets() for variable assignment within formulas, making complex calculations far more readable and maintainable. If your workspace predates 2023, check which formula version you are using before writing new formulas, as mixing syntax between versions will cause errors.',
  },
  {
    question: 'How do I prevent my Notion workspace from becoming cluttered?',
    answer: 'Workspace clutter is the most common Notion pain point and the solution requires both structure and habits. Structurally, maintain a clear page hierarchy with no more than 3-4 levels of nesting, use a central Home or Dashboard as the entry point, and archive completed projects rather than deleting them. For habits, agree on naming conventions, always use templates so pages follow consistent formats, and run a monthly audit where every team reviews and archives anything untouched in 60 days. Quick Find (Cmd+K) helps once the workspace grows large, but a clean hierarchy means you can navigate by intuition rather than search.',
  },
  {
    question: 'Is Notion good for solo use or primarily for teams?',
    answer: 'Notion is excellent for solo use. Many individuals use it as a complete personal operating system — combining task management, notes, project tracking, reading lists, habit trackers, and goal setting in one flexible workspace. For personal use, the free plan is generous and handles thousands of pages. The real power of solo Notion comes from a well-designed personal dashboard that links all your databases: a Today view for tasks due today, a reading log, a learning journal, and a goal tracker. The learning curve is steeper than simpler tools, but the investment pays off for people who want one system for everything.',
  },
  {
    question: 'How secure is storing sensitive business data in Notion?',
    answer: 'Notion is SOC 2 Type 2 certified and uses AES-256 encryption at rest and TLS in transit. For most business use cases this level of security is adequate. However, Notion is a US-headquartered SaaS product, which matters for GDPR compliance when storing EU personal data. Notion provides a Data Processing Addendum for Business and Enterprise plan customers. For highly regulated data such as medical records, legally privileged documents, or financial data under strict regulatory frameworks, consider whether a dedicated, more controlled system is more appropriate for that specific data category.',
  },
  {
    question: 'What Notion AI features are available and how useful are they?',
    answer: 'Notion AI is an add-on subscription that offers several in-workspace capabilities: auto-summarisation of long pages, action item extraction from meeting notes, Q&A across your entire workspace, writing assistance including drafts and edits, and translation into other languages. The workspace Q&A feature is particularly valuable for large teams — instead of searching for a document, you can ask a plain-language question and get an answer with a direct source link. The AI is best used for summarising dense content and extracting next steps, and its unique advantage is that it operates directly on your actual workspace data rather than on a separate document.',
  },
  {
    question: 'How do I handle database performance issues with large amounts of data?',
    answer: 'Notion databases begin to slow noticeably above 5,000 to 10,000 entries, and complex formulas or many rollups amplify the issue. To maintain acceptable performance: apply filters aggressively so views only load the records they need, archive old entries to a separate Archive database rather than leaving them in the active one, split large databases by year or quarter, and reduce formula complexity where possible. For use cases exceeding 10,000 active entries, seriously evaluate whether a purpose-built database like Airtable or Supabase with a Notion front-end is a better architectural fit.',
  },
  {
    question: 'What Notion plan is best for a small business team?',
    answer: 'For most small business teams of 5 to 25 people, the Notion Plus plan provides everything needed for a professional workspace: unlimited blocks and file uploads, 90-day version history, Teamspaces, advanced page analytics, and granular permission controls. The Business plan adds SAML SSO, private Teamspaces, bulk PDF export, and 365-day version history — features that matter most for companies with compliance requirements or teams larger than 25 people. The free plan suits solo users and very small teams with limited needs. Start with Plus and upgrade to Business only when you encounter its specific limitations.',
  },
];

export default function NotionPromptsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI Prompts for Notion: Workspace Design, Automation & Advanced Features',
    description: 'Expert AI prompts for Notion power users — covering database design, workflow automation, template systems, formulas, integrations, and team governance.',
    author: { '@type': 'Organization', name: 'GPTPrompts' },
    datePublished: '2025-01-01',
    dateModified: '2025-06-01',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen" style={{ background: '#010104' }}>
        {/* Hero */}
        <div className="border-b" style={{ borderColor: borderCol }}>
          <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
            <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border mb-6" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
              <Database size={12} /> Notion Workspace Optimization
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              AI Prompts for <span style={{ color: accent }}>Notion</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mb-8">
              24 expert prompts across 6 categories — from relational database design and workflow automation to advanced formulas, integrations, and team governance.
            </p>
            <div className="flex flex-wrap gap-3">
              {['24 Prompts', '6 Categories', 'Copy in 1 Click', 'Free to Use'].map(label => (
                <span key={label} className="text-xs px-3 py-1 rounded-full border text-gray-400" style={{ borderColor: borderCol }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Prompt Sections */}
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="mb-16">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}>
                    <Icon size={18} style={{ color: accent }} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <p className="text-gray-400 mb-6 ml-12">{section.description}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  {section.prompts.map(p => (
                    <CopyCard key={p.title} {...p} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Reference Block 1 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-2">Notion Feature Quick Reference</h2>
            <p className="text-gray-400 mb-6">Six key Notion concepts every power user should understand deeply before building advanced workspaces.</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { feature: 'Pages vs Databases', detail: 'Pages are freeform documents. Databases are structured collections of pages with consistent properties. Use databases for anything you need to filter, sort, or view in multiple ways. Use pages for documents, briefs, and notes that do not need structured data.' },
                { feature: 'Relations', detail: 'Link two databases so entries can reference each other. A Task can belong to a Project. A Contact can belong to a Company. Relations are bidirectional — both sides of the link are visible, and you can navigate between related entries with a single click.' },
                { feature: 'Rollups', detail: 'Aggregate data across a relation. Count tasks per project, sum revenue per client, find the earliest deadline across linked items. Rollups are what transform Notion from a note-taking tool into a lightweight relational database that connects your workspace data.' },
                { feature: 'Formulas 2.0', detail: 'Calculate dynamic values from other properties using modern JavaScript-like syntax. Formulas support conditionals, date math, string manipulation, and variable assignment with let(). Use formulas to automate status labels, priority scores, and any derived metrics.' },
                { feature: 'Views', detail: 'The same database can be displayed as a table, kanban board, calendar, gallery, list, or timeline. Each view can have its own filters and sorts. Use views to give each team role a tailored perspective on shared data without duplicating any information.' },
                { feature: 'Automations', detail: 'Trigger actions when database properties change — create pages from templates, update properties, send notifications. Automations eliminate repetitive manual updates and keep your workspace in sync automatically without any human intervention required.' },
              ].map(item => (
                <div key={item.feature} className="rounded-lg border p-4" style={{ borderColor: borderCol, background: bgDark }}>
                  <h3 className="font-semibold mb-2" style={{ color: accent }}>{item.feature}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reference Block 2 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-2">When to Use Notion vs Other Tools</h2>
            <p className="text-gray-400 mb-6">Notion is powerful but not always the right choice. Use this reference to make informed decisions.</p>
            <div className="rounded-lg border overflow-hidden" style={{ borderColor: borderCol }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: `${accent}15` }}>
                    <th className="text-left px-4 py-3 text-white font-semibold">Use Case</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: accent }}>Use Notion When</th>
                    <th className="text-left px-4 py-3 text-gray-400 font-semibold">Consider Alternatives</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Documentation & wikis', 'Excellent for flexible, linkable, searchable pages', 'Confluence for very large organisations with strict compliance'],
                    ['Project management', 'Good for most teams needing flexibility', 'Jira or Linear for complex engineering sprints with dependencies'],
                    ['CRM and contact tracking', 'Works well with a good schema design', 'HubSpot or Salesforce for full sales automation and reporting'],
                    ['Data analysis and BI', 'Not suitable for heavy analytics', 'Tableau, Looker, or Google Sheets for data analysis and charting'],
                    ['Real-time collaborative docs', 'Limited for heavy simultaneous co-editing', 'Google Docs for documents with many simultaneous authors'],
                    ['Large dataset management', 'Slows noticeably above 10k entries', 'Airtable, Postgres, or Supabase for high-volume structured data'],
                    ['Personal productivity', 'Excellent all-in-one personal operating system', 'Todoist or similar if you need only simple task management'],
                    ['Customer-facing help centre', 'Possible but lacks customisation options', 'Gitbook, Zendesk, or Intercom for branded, searchable help centres'],
                  ].map(([useCase, notion, alternative]) => (
                    <tr key={useCase} className="border-t" style={{ borderColor: borderCol }}>
                      <td className="px-4 py-3 text-gray-300">{useCase}</td>
                      <td className="px-4 py-3 text-gray-300">{notion}</td>
                      <td className="px-4 py-3 text-gray-500">{alternative}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-400 mb-6">Everything you need to know about building powerful Notion workspaces with AI prompts.</p>
            <div className="space-y-2">
              {faqs.map(item => <FAQ key={item.question} item={item} />)}
            </div>
          </div>

          {/* Related Pages */}
          <div className="border-t pt-12" style={{ borderColor: borderCol }}>
            <h2 className="text-xl font-bold text-white mb-6">Related Prompt Collections</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Supply Chain Prompts', href: '/ai-prompts-supply-chain' },
                { label: 'Manus AI Prompts', href: '/manus-ai-prompts' },
                { label: 'PowerPoint Prompts', href: '/chatgpt-prompts-powerpoint' },
                { label: 'Marketing Strategy', href: '/ai-prompts-marketing-strategy' },
                { label: 'Data Analysis Prompts', href: '/ai-prompts-data-analysis' },
                { label: 'Executive AI Prompts', href: '/ai-for-executives-prompts' },
                { label: 'Replit Agent Prompts', href: '/replit-agent-prompts' },
                { label: 'Content Writing Prompts', href: '/chatgpt-prompts-content-writing' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border px-4 py-3 text-sm text-gray-400 transition-colors hover:text-white"
                  style={{ borderColor: borderCol, background: bgDark }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${accent}50`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = borderCol; }}
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
