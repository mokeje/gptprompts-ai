// ────────────────────────────────────────────────────────────────────────────
// data/prompt-pages.ts
// Data layer for dynamic /prompts/[tool]/[usecase] pages.
// Add new entries to allPromptPages to create new programmatic pages.
// ────────────────────────────────────────────────────────────────────────────

export interface PromptItem {
  title: string
  prompt: string
}

export interface PromptSection {
  title: string
  tag: string
  prompts: PromptItem[]
}

export interface PromptPageData {
  toolSlug: string
  usecaseSlug: string
  tool: {
    name: string
    company: string
    emoji: string
    color: string
    url: string
    tagline: string
  }
  meta: {
    title: string
    description: string
  }
  hero: {
    headline: string
    subtitle: string
  }
  sections: PromptSection[]
  faqs: { question: string; answer: string }[]
}

// ── Data ─────────────────────────────────────────────────────────────────────
export const allPromptPages: PromptPageData[] = [
  {
    toolSlug: "chatgpt",
    usecaseSlug: "resume",
    tool: {
      name: "ChatGPT",
      company: "OpenAI",
      emoji: "🤖",
      color: "#10a37f",
      url: "https://chat.openai.com",
      tagline: "The world's most widely used AI assistant",
    },
    meta: {
      title: "ChatGPT Prompts for Resume Writing",
      description: "Use these ChatGPT prompts to craft a compelling, ATS-friendly resume that lands interviews. From tailoring your summary to quantifying your achievements, every prompt is ready to copy and use.",
    },
    hero: {
      headline: "ChatGPT Prompts for Resume Writing",
      subtitle: "45 copy-paste ready ChatGPT prompts to write, rewrite, and optimise every section of your resume — from summary to skills.",
    },
    sections: [
      {
        title: "Resume Summary & Objective",
        tag: "Summary",
        prompts: [
          {
            title: "Write a professional summary",
            prompt: `Act as an expert resume writer with 15 years of experience.

Write a 3-sentence professional summary for my resume based on the following details:
- Job title: [your current/target job title]
- Years of experience: [X years]
- Key skills: [list 3-5 top skills]
- Target role: [job title you're applying for]
- Industry: [your industry]

The summary should:
- Start with a strong opening that names my role and experience level
- Highlight my top 2 differentiators
- End with what value I bring to the employer
- Be written in third person
- Be under 75 words

Avoid: generic phrases like 'results-driven', 'dynamic', or 'passionate'.`,
          },
          {
            title: "Tailor summary to a job description",
            prompt: `I'm applying for this job:

[PASTE JOB DESCRIPTION HERE]

Here is my current resume summary:

[PASTE YOUR CURRENT SUMMARY]

Rewrite my summary to:
1. Mirror keywords from the job description naturally
2. Lead with the specific experience they're asking for
3. Quantify any achievements if possible
4. Stay under 75 words
5. Be ATS-friendly (no graphics, no tables)

Also tell me which 3 keywords from the JD I should prioritise throughout my resume.`,
          },
          {
            title: "Entry-level resume summary",
            prompt: `I'm a recent graduate with no full-time work experience.

Degree: [degree name and field]
University: [university name]
Graduation year: [year]
Relevant skills: [list skills]
Internships or projects: [brief description]
Target role: [job title]

Write a 2-3 sentence resume objective that:
- Highlights my academic background and relevant skills
- Shows enthusiasm and specific value I bring
- Doesn't apologise for lack of experience
- Sounds confident and professional`,
          },
          {
            title: "Career change summary",
            prompt: `I'm changing careers from [current industry/role] to [target industry/role].

My transferable skills include: [list 4-5 skills]
My biggest achievement in my old career: [describe it]
Why I'm making this change: [brief reason]
Target job title: [role name]

Write a resume summary that:
- Frames my background as an asset, not a liability
- Highlights transferable skills relevant to my new field
- Addresses the career change confidently without over-explaining
- Is 3 sentences, under 70 words`,
          },
        ],
      },
      {
        title: "Work Experience Bullet Points",
        tag: "Experience",
        prompts: [
          {
            title: "Rewrite weak bullet points with impact",
            prompt: `I need help making my resume bullet points stronger.

Here are my current bullet points for my role as [job title] at [company]:

[PASTE YOUR BULLET POINTS HERE]

For each bullet point:
1. Rewrite it using the CAR method: Context → Action → Result
2. Add specific metrics where I've left vague language (e.g. 'improved sales' → 'increased sales by X%')
3. Start each bullet with a strong action verb
4. Keep each bullet under 2 lines

If I haven't provided metrics, flag where I should add them and suggest what kind of data to look up.`,
          },
          {
            title: "Generate achievement bullets from job duties",
            prompt: `I have a list of my job duties, but they sound like a job description, not achievements. Help me rewrite them as accomplishment-focused bullet points.

Job title: [your job title]
Company: [company name]
Time period: [dates]

My current duties:
[PASTE YOUR DUTIES/RESPONSIBILITIES HERE]

For each duty:
1. Transform it into an achievement using action verb + task + result format
2. Add context about scale or impact where you can infer it
3. Flag which ones need real numbers from me and what to look up

Make them punchy, specific, and recruiter-friendly.`,
          },
          {
            title: "Quantify vague achievements",
            prompt: `I need to add numbers to my resume bullet points but I'm not sure what metrics to use.

Here are my vague bullet points:
[PASTE BULLET POINTS]

For each bullet:
1. Suggest what type of metric would strengthen it (%, £/$, hours saved, customers, team size, etc.)
2. Give me questions I should ask myself or my manager to find the actual number
3. Rewrite each bullet in two ways: one with a placeholder metric [X%] and one that works without a number if I truly can't find one

Prioritise making bullet points for the most recent role strongest.`,
          },
          {
            title: "Create bullets for a specific industry",
            prompt: `I work in [industry — e.g. healthcare / finance / tech / retail].

Here are my responsibilities in my role as [job title]:
[LIST YOUR RESPONSIBILITIES]

Rewrite these as strong resume bullet points that:
- Use industry-specific language and keywords for [industry]
- Reflect the metrics that matter in [industry] (e.g. patient outcomes, AUM, ARR, NPS)
- Would pass an ATS scan for [target job title] roles
- Are ordered from most impactful to least

Also suggest 5 additional bullet points I might be forgetting based on common responsibilities for [job title] in [industry].`,
          },
        ],
      },
      {
        title: "Skills Section",
        tag: "Skills",
        prompts: [
          {
            title: "Build an ATS-optimised skills section",
            prompt: `I need to create a skills section for my resume that will pass ATS (Applicant Tracking System) filters.

Job description I'm targeting:
[PASTE JOB DESCRIPTION]

My actual skills (honest list):
[LIST YOUR SKILLS]

Please:
1. Identify the 10 most important skills from the JD that I should include
2. Match them against my list and highlight any gaps
3. Suggest how to group my skills (e.g. Technical Skills, Soft Skills, Tools)
4. Format the final skills section exactly as it should appear on my resume
5. Warn me about any skills I should NOT include (outdated tools, obvious skills)`,
          },
          {
            title: "Add technical skills for a specific role",
            prompt: `I'm applying for a [job title] role at a [company type — e.g. tech startup / FTSE100 company / agency].

Based on the current job market in 2026, what are the top 20 technical skills I should consider adding to my resume for this role?

For each skill:
- Explain why it's important for this role
- Rate how commonly it appears in job descriptions (High / Medium / Low)
- Note if it's a 'must have' or 'nice to have'

Then help me format these into a clean skills section I can copy directly into my resume.`,
          },
          {
            title: "Rewrite skills section for career change",
            prompt: `I'm moving from [current role/industry] to [target role/industry].

My current skills section reads:
[PASTE YOUR CURRENT SKILLS]

For my new target role, I need to:
1. Identify which of my existing skills are transferable and should stay
2. Remove any skills that are irrelevant or might signal I'm wrong for the new role
3. Suggest new skills I should list (even if entry-level) that align with [target industry]
4. Reframe any skills using language common in [target industry]

Give me the final revised skills section formatted and ready to paste.`,
          },
          {
            title: "Soft skills section with evidence",
            prompt: `I want to add soft skills to my resume but make them credible — not just a list of buzzwords.

Target role: [job title]
Top soft skills I genuinely have: [list 5 soft skills]

For each soft skill:
1. Rewrite it as a concrete, evidence-backed statement (e.g. instead of 'leadership', write 'Led cross-functional team of 8 across 3 time zones')
2. Suggest how I could work it into my experience bullets instead of listing it separately
3. Tell me if this soft skill is commonly listed in [target role] job descriptions

Then give me a recommended format for a skills section for [target role] that balances technical and soft skills.`,
          },
        ],
      },
      {
        title: "Resume Formatting & Structure",
        tag: "Structure",
        prompts: [
          {
            title: "Choose the right resume format",
            prompt: `Help me decide which resume format is best for my situation.

My situation:
- Years of experience: [X years]
- Career history: [brief description — linear / multiple jobs / gaps / career change]
- Industry: [your industry]
- Target role seniority: [junior / mid / senior / executive]
- Employment gaps: [yes/no — if yes, briefly describe]

Compare the three main formats (Chronological, Functional, Combination) for my specific situation and:
1. Tell me which format I should use and exactly why
2. Show me an outline/structure I should follow
3. Flag any red flags in my background and how to handle them with formatting
4. Tell me what NOT to include in 2026 (references, photos, DOB, etc.)`,
          },
          {
            title: "Fix a resume that's too long",
            prompt: `My resume is [X pages] long and I need to get it down to [target length — usually 1 or 2 pages].

Here is my full resume:
[PASTE YOUR RESUME]

Help me cut it down by:
1. Identifying content that adds the least value
2. Suggesting which roles or bullet points to trim or remove entirely
3. Condensing long descriptions into shorter, punchier versions
4. Flagging any formatting habits that are wasting space

Don't remove anything that's genuinely differentiated or impressive. Prioritise keeping the last [X years] of experience.`,
          },
          {
            title: "Structure a resume with no degree",
            prompt: `I don't have a university degree but I have solid work experience and skills.

My background:
- Years of experience: [X]
- Key roles: [list jobs]
- Certifications or courses: [list any]
- Self-taught skills: [list skills]
- Target role: [job title]

Help me structure a resume that:
1. De-emphasises the lack of a degree without hiding it
2. Puts my strongest sections first
3. Highlights certifications, bootcamps, and self-learning credibly
4. Addresses how to handle the Education section without it being a red flag
5. Gives me a full section-by-section outline to follow`,
          },
          {
            title: "Write a resume header and contact section",
            prompt: `Write a professional resume header for me.

My details:
- Full name: [your name]
- Job title / professional identity: [e.g. Senior Product Manager]
- Location: [city, country — do NOT include full address]
- Email: [your email]
- LinkedIn URL: [your LinkedIn]
- Portfolio / GitHub / website: [if applicable]
- Phone: [optional]

Format it exactly as it should appear at the top of a resume, including spacing and layout guidance.

Also tell me:
- What I should and shouldn't include in 2026
- Whether to include a photo (and why)
- How to make my name section stand out to recruiters`,
          },
        ],
      },
      {
        title: "ATS Optimisation & Keywords",
        tag: "ATS",
        prompts: [
          {
            title: "ATS keyword analysis for a job posting",
            prompt: `Analyse this job description and help me optimise my resume for ATS (Applicant Tracking System) filters.

Job description:
[PASTE FULL JOB DESCRIPTION]

Please:
1. Extract the top 15 keywords and phrases I MUST include on my resume to pass ATS
2. Categorise them by: Hard Skills / Soft Skills / Tools & Technologies / Qualifications
3. Flag which keywords appear multiple times (highest priority)
4. Tell me which of these keywords I should put in my headline, summary, experience, and skills sections
5. Give me 3 example bullet points that naturally incorporate these keywords`,
          },
          {
            title: "Check resume against job description",
            prompt: `Compare my resume against this job description and score how well I match.

Job description:
[PASTE JOB DESCRIPTION]

My resume:
[PASTE YOUR RESUME]

Provide:
1. A match score out of 100 with explanation
2. A list of required keywords I'm missing
3. Specific suggestions to improve each section of my resume for this role
4. A rewritten version of my professional summary tailored to this JD
5. The top 3 things a recruiter will notice first — and whether they're positive or negative`,
          },
          {
            title: "Make resume ATS-safe",
            prompt: `My resume may have formatting issues that prevent it from being read by ATS software. Review it and fix it.

My resume text:
[PASTE RESUME]

Check for and fix:
1. Non-standard fonts or formatting that ATS can't parse
2. Tables, columns, text boxes, or graphics (suggest plain text alternatives)
3. Headers or footers that ATS might skip
4. Non-standard section headings (e.g. 'Where I've Worked' instead of 'Work Experience')
5. File format recommendations
6. Any other ATS red flags

Give me a clean, ATS-safe version I can copy and paste.`,
          },
          {
            title: "Generate a keyword-rich resume for a specific role",
            prompt: `I'm applying for a [job title] role at a [type of company].

Target job description:
[PASTE JOB DESCRIPTION]

My background summary:
[2-3 sentences about your experience, skills, and achievements]

Create a complete ATS-optimised resume outline for me including:
1. Professional summary (75 words, keyword-rich)
2. Skills section with 12-15 role-specific keywords
3. 4 sample bullet points for my most recent role showing how to incorporate keywords naturally
4. Education section format
5. Any additional sections recommended for this type of role (certifications, projects, publications)

Base everything on what a recruiter hiring for this specific role would want to see.`,
          },
        ],
      },
    ],
    faqs: [
      { question: "Can ChatGPT write my entire resume?", answer: "ChatGPT can write most of your resume, but you should provide accurate details about your experience, achievements, and skills — it can't invent facts for you. Use it to structure, rephrase, and strengthen what you already have. Think of it as a very skilled editor who works with your raw material." },
      { question: "Will using ChatGPT for my resume be obvious to recruiters?", answer: "Not if you personalise the output. Generic AI-written resumes often sound polished but vague. The key is to feed ChatGPT specific details about your experience and then edit the output to sound like you. Add your specific numbers, company names, and industry language." },
      { question: "How do I make my ChatGPT-written resume ATS-friendly?", answer: "Ask ChatGPT to remove all formatting (no tables, no columns, no graphics), use standard section headings like 'Work Experience' and 'Education', and incorporate keywords directly from the job description. Plain text formatted resumes consistently perform best with ATS systems." },
      { question: "What's the best way to use ChatGPT to tailor my resume?", answer: "Paste the full job description and your current resume into ChatGPT and ask it to identify keyword gaps, rewrite your summary for the specific role, and suggest stronger bullet points. Do this for every job application — tailored resumes consistently outperform generic ones." },
      { question: "How many bullet points should I have per role?", answer: "Aim for 3-5 bullet points for recent roles and 2-3 for older roles. ChatGPT can help you prioritise which achievements deserve bullet points. Focus on impact over responsibility — what you achieved, not just what you were responsible for." },
      { question: "Can ChatGPT help me with a resume if I have employment gaps?", answer: "Yes. Ask ChatGPT to help you frame gaps positively — freelance work, caregiving, upskilling, or personal projects. It can also suggest whether to use a functional resume format that de-emphasises timeline, and how to address gaps in a cover letter if needed." },
      { question: "How do I use ChatGPT to write resume bullet points for a job I hated?", answer: "Focus on what you accomplished and learned, not how you felt. Ask ChatGPT: 'I worked as [role] at [company] and my responsibilities included [list]. Help me write 4 strong bullet points focusing only on measurable outcomes.' It will help you find the value in any role." },
      { question: "What information should I give ChatGPT to get the best resume help?", answer: "The more context the better. Provide: the job title you're targeting, the job description, your actual achievements with numbers, your years of experience, and any specific concerns (career gap, career change, no degree). The more specific you are, the more tailored and useful the output." },
    ],
  },
  {
    toolSlug: "chatgpt",
    usecaseSlug: "cover-letter",
    tool: {
      name: "ChatGPT",
      company: "OpenAI",
      emoji: "🤖",
      color: "#10a37f",
      url: "https://chat.openai.com",
      tagline: "The world's most widely used AI assistant",
    },
    meta: {
      title: "ChatGPT Prompts for Cover Letter Writing",
      description: "Stop writing generic cover letters. Use these ChatGPT prompts to craft personalised, persuasive cover letters tailored to specific roles and companies — in minutes.",
    },
    hero: {
      headline: "ChatGPT Prompts for Cover Letters",
      subtitle: "40 copy-paste ready ChatGPT prompts to write compelling, personalised cover letters that get past ATS and impress hiring managers.",
    },
    sections: [
      {
        title: "Cover Letter Openers",
        tag: "Opening",
        prompts: [
          {
            title: "Write a compelling first paragraph",
            prompt: `Write a compelling opening paragraph for a cover letter.

Role I'm applying for: [job title]
Company: [company name]
Why I want this specific role at this specific company: [1-2 genuine reasons]
My most relevant achievement: [brief description]

The opening paragraph should:
- Hook the reader in the first sentence (not start with 'I am writing to apply for...')
- Reference something specific about the company or role that shows genuine research
- Signal immediately that I have relevant experience
- Be 3-4 sentences maximum

Write 3 different opening options so I can choose the best one.`,
          },
          {
            title: "Attention-grabbing opening with achievement",
            prompt: `I want my cover letter to open with a specific achievement that's directly relevant to the role.

Role: [job title]
Company: [company name]
My most impressive relevant achievement: [describe achievement with numbers if possible]

Write an opening paragraph that:
- Leads with the achievement in the first sentence
- Connects it directly to what the company needs
- Transitions naturally to why I'm applying
- Does not feel like bragging — feels confident and purposeful
- Is under 80 words`,
          },
          {
            title: "Opening that references company news or values",
            prompt: `Help me write a cover letter opening that shows I've done my research on [company name].

What I know about this company:
- Recent news or announcement: [describe]
- Their stated values or mission: [describe]
- Something I genuinely admire about them: [describe]

Role I'm applying for: [job title]

Write an opening that:
- References something specific about the company that shows real research
- Connects their work to my background naturally
- Doesn't sound like flattery — sounds like genuine alignment
- Transitions into why I'm the right person for the role`,
          },
          {
            title: "Career change cover letter opening",
            prompt: `I'm making a career change and need a cover letter opening that doesn't apologise for my background.

Previous career: [describe briefly]
Target career/role: [describe]
Key transferable skill or experience: [describe]
Why I'm making this change: [genuine reason in 1 sentence]

Write 3 opening paragraphs that:
- Lead with transferable value, not with explaining the change
- Acknowledge the transition confidently and briefly
- Hook the reader with relevance, not apology
- Set up the rest of the letter to expand on fit`,
          },
        ],
      },
      {
        title: "Core Body Paragraphs",
        tag: "Body",
        prompts: [
          {
            title: "Match experience to job requirements",
            prompt: `Write the main body of my cover letter by matching my experience to the job requirements.

Job description (paste key requirements):
[PASTE JOB REQUIREMENTS]

My relevant experience:
[LIST YOUR EXPERIENCE, ACHIEVEMENTS, SKILLS]

Write 2 body paragraphs that:
- Each focus on one or two specific requirements from the JD
- Provide concrete examples of my experience meeting those requirements
- Use the CAR method (Context, Action, Result) for at least one example
- Use natural language — not a laundry list of skills
- Include at least one metric or specific outcome`,
          },
          {
            title: "Paragraph about company culture fit",
            prompt: `Write a paragraph about why I'm a strong cultural and values fit for [company name].

Company's values/culture (from their website or JD):
[DESCRIBE COMPANY VALUES]

How I personally align with these:
[YOUR GENUINE EXAMPLES OR BELIEFS]

My working style:
[DESCRIBE IN 2-3 SENTENCES]

Write a 3-4 sentence paragraph that:
- Connects my values to theirs with a specific example
- Sounds genuine and personal, not copy-pasted from their website
- Avoids buzzwords like 'passionate', 'collaborative', 'innovative'
- Strengthens the 'why this company' part of my letter`,
          },
          {
            title: "Address a potential weakness in the body",
            prompt: `I have a potential weakness in my application that I want to address proactively in my cover letter.

The weakness: [e.g. less experience than required / career gap / overqualified / different industry]
The role: [job title]
Company: [company name]

Write a 2-3 sentence passage I can include in the body of my cover letter that:
- Acknowledges the gap or concern briefly and confidently
- Immediately pivots to why I'm still the right choice
- Does not apologise or over-explain
- Turns the potential weakness into a differentiator where possible`,
          },
          {
            title: "Write a second body paragraph with specific achievements",
            prompt: `Write a second body paragraph for my cover letter focused on specific achievements.

Role I'm applying for: [job title]
Company: [company name]

My top 3 achievements relevant to this role:
1. [Achievement 1 with numbers if possible]
2. [Achievement 2 with numbers if possible]
3. [Achievement 3 with numbers if possible]

Write a paragraph that:
- Weaves these achievements into a narrative (not a bullet list)
- Connects each achievement to a challenge the company likely faces
- Ends with a bridge sentence leading to why I want the role specifically`,
          },
        ],
      },
      {
        title: "Closing Paragraphs & CTAs",
        tag: "Closing",
        prompts: [
          {
            title: "Write a confident closing paragraph",
            prompt: `Write a strong closing paragraph for my cover letter.

Role: [job title]
Company: [company name]
Key point I want to leave them with: [your strongest argument for hiring you]

The closing should:
- Summarise my fit in one confident sentence
- Include a clear call to action (request for interview)
- Avoid weak phrases like 'I hope to hear from you' or 'Thank you for your consideration'
- Sound confident without being arrogant
- Be 2-3 sentences

Give me 3 closing options with different tones: confident, enthusiastic, and straightforward.`,
          },
          {
            title: "Closing that expresses genuine excitement",
            prompt: `Write an enthusiastic but professional closing paragraph for my cover letter.

I genuinely want this role because: [your real reason — be specific]
Role: [job title]
Company: [company name]

Write a closing that:
- Conveys authentic excitement without sounding desperate
- References what excites me specifically about the role or company
- Includes a confident CTA for next steps
- Ends with a professional sign-off
- Is under 60 words`,
          },
          {
            title: "Add a P.S. line that gets read",
            prompt: `Many hiring managers and recruiters read the P.S. line of a cover letter before the body. Write a P.S. for my cover letter that:

Role: [job title]
Company: [company name]
One thing I most want them to know: [key point]

The P.S. should:
- Be one sentence only
- Reinforce my most compelling selling point
- Include a specific detail that shows I know this company
- Create curiosity or urgency
- Not repeat what I already said in the main letter

Write 3 P.S. options I can choose from.`,
          },
          {
            title: "Sign-off and formatting guidance",
            prompt: `I need help with the professional closing and formatting of my cover letter.

My name: [name]
Contact details: [email, LinkedIn, phone]

Provide:
1. The correct sign-off phrase for a formal cover letter in 2026
2. Whether to include my contact details again at the end (and how)
3. A properly formatted signature block I can copy
4. Any formatting rules for cover letters (font size, margins, length)
5. Whether to include a date and how to format it`,
          },
        ],
      },
      {
        title: "Tailoring & Customisation",
        tag: "Tailoring",
        prompts: [
          {
            title: "Tailor a generic cover letter to a specific job",
            prompt: `I have a generic cover letter that I want to customise for a specific application.

My generic cover letter:
[PASTE YOUR GENERIC COVER LETTER]

Job description I'm applying to:
[PASTE JOB DESCRIPTION]

Company name: [company]

Rewrite my cover letter to:
1. Mirror language and keywords from this specific JD
2. Reference the company by name (not 'your company')
3. Replace generic statements with specific examples that match this role
4. Adjust the tone to match the company's brand voice
5. Ensure no line could apply to any other company or role

Mark in [brackets] where you've made changes and explain why.`,
          },
          {
            title: "Cover letter for internal job application",
            prompt: `I'm applying for an internal position at my current company.

Current role: [your role]
Role I'm applying for: [target role]
How long I've been at the company: [time]
Key achievements in my current role: [list]
Why I want this internal move: [genuine reason]
Do I know the hiring manager? [yes/no]

Write a cover letter that:
- Acknowledges my existing relationship with the company as an asset
- Highlights internal achievements and company-specific context only I would know
- Explains why I'm the stronger choice over external candidates
- Doesn't assume the role is mine because I'm internal
- Is appropriately confident without being entitled`,
          },
          {
            title: "Cover letter for a referral application",
            prompt: `I was referred to this job by [referral's name and relationship to the company].

Role: [job title]
Company: [company]
Referral: [name] — [their role / relationship to me]

Write a cover letter that:
- Mentions the referral prominently in the first sentence
- Explains why [referral name] thought I'd be a strong fit (based on what I've told you)
- Doesn't rely on the referral to carry the whole letter
- Still demonstrates my qualifications clearly
- Feels personal and specific, not like a template`,
          },
          {
            title: "Rewrite cover letter to match company tone",
            prompt: `I need to match my cover letter's tone to [company name]'s brand voice.

Description of their tone (based on their website / careers page / social media):
[E.g. formal and corporate / casual and friendly / data-driven and precise / creative and bold]

My current cover letter:
[PASTE YOUR COVER LETTER]

Rewrite it to match their tone while:
- Keeping all the factual content and achievements
- Adjusting vocabulary, sentence length, and formality level
- Removing any language that clashes with their culture
- Not making it sound artificially 'on brand' — it should still sound like me

Explain the 3 biggest changes you made and why.`,
          },
        ],
      },
      {
        title: "Specific Situations",
        tag: "Scenarios",
        prompts: [
          {
            title: "Cover letter with no experience",
            prompt: `I'm applying for [job title] but I have very little direct experience.

My situation:
- Current stage: [student / recent grad / career changer / re-entering workforce]
- Relevant skills or knowledge I do have: [list]
- Relevant projects, volunteer work, or coursework: [describe]
- Why I want this specific role: [genuine reason]

Write a cover letter that:
- Leads with enthusiasm and potential, not apology
- Uses transferable skills and relevant projects to demonstrate capability
- Shows I understand the role and have done research
- Is honest about my experience level while remaining confident
- Is 3 paragraphs maximum`,
          },
          {
            title: "Cover letter after a job gap",
            prompt: `I have a gap in my employment history and need to address it in my cover letter.

Gap period: [dates]
Reason for gap: [e.g. caregiving / health / redundancy / travel / personal reasons]
What I did during the gap (if anything relevant): [upskilling, freelance, volunteering, etc.]
Current target role: [job title]
Company: [company]

Write a cover letter that:
- Addresses the gap briefly and confidently in one sentence
- Doesn't over-explain or apologise
- Pivots immediately to my qualifications and enthusiasm for the role
- Shows the gap didn't diminish my value or skills
- Is professional and complete`,
          },
          {
            title: "Cover letter for a startup",
            prompt: `I'm applying to an early-stage startup as [job title].

Company: [company name]
Company stage: [seed / Series A / B / growing startup]
What they do: [brief description]
Role: [job title]
My background: [brief summary]

Write a cover letter that:
- Speaks the language of startup culture (moves fast, wears many hats, high impact)
- Shows I understand the risks and excitement of early-stage companies
- Demonstrates I can operate with ambiguity and limited resources
- References their specific mission or product
- Is shorter and punchier than a corporate cover letter — under 300 words`,
          },
          {
            title: "Executive-level cover letter",
            prompt: `I'm applying for an executive or senior leadership role.

Target role: [e.g. VP of Marketing / COO / Director of Engineering]
Company: [company name]
Years of experience: [X years]
My most significant leadership achievement: [describe with scale and impact]
What strategic value I'd bring: [your vision for the role]

Write an executive cover letter that:
- Opens with strategic vision, not job history
- Demonstrates board-level thinking and business impact
- Is concise (executives are busy — 3 paragraphs max)
- Uses data and scale to show the size of impact I've delivered
- Positions me as a peer, not a candidate`,
          },
        ],
      },
    ],
    faqs: [
      { question: "How long should a cover letter be in 2026?", answer: "One page maximum — ideally 250-350 words across 3-4 paragraphs. Hiring managers spend about 30 seconds on the first read. Use ChatGPT to cut anything that doesn't directly support your case for the role." },
      { question: "Should every cover letter be different?", answer: "Yes. Generic cover letters are immediately obvious and rarely lead to interviews. Use ChatGPT to tailor each letter to the specific role and company in under 5 minutes by feeding it the job description and your core letter." },
      { question: "What should I never say in a cover letter?", answer: "Avoid: 'I am writing to apply for...', 'I am a passionate team player', 'To whom it may concern', restating your entire resume, or anything that could apply to any company. ChatGPT can help you replace these with specific, compelling content." },
      { question: "Do cover letters even matter anymore?", answer: "For competitive roles, yes. Many hiring managers use the cover letter as a tie-breaker when candidates have similar qualifications. A well-written, tailored cover letter shows effort and genuine interest that a resume alone cannot convey." },
      { question: "Can ChatGPT make my cover letter sound like me?", answer: "Yes, with the right prompting. Tell ChatGPT your preferred tone ('professional but warm', 'direct and confident', 'enthusiastic but not over the top') and give it examples of how you naturally write. Always edit the output to add your personal voice." },
      { question: "How do I write a cover letter for a job I'm underqualified for?", answer: "Focus on transferable skills, potential, and specific enthusiasm for this company and role. Use ChatGPT to help you frame your background as an asset and address the qualification gap directly and confidently, rather than hoping the reader doesn't notice." },
      { question: "Should I mention salary expectations in my cover letter?", answer: "Only if the job posting explicitly requests it. If you must include it, state a range based on market research. ChatGPT can help you phrase this professionally and confidently without anchoring too low." },
      { question: "What's the best format for a cover letter?", answer: "Plain text in a standard document format. No graphics, no tables, no sidebars. Use the same font as your resume. Standard order: salutation, opening paragraph, 2 body paragraphs, closing, sign-off. ChatGPT can format this exactly as it should appear." },
    ],
  },
  {
    toolSlug: "chatgpt",
    usecaseSlug: "email-writing",
    tool: {
      name: "ChatGPT",
      company: "OpenAI",
      emoji: "🤖",
      color: "#10a37f",
      url: "https://chat.openai.com",
      tagline: "The world's most widely used AI assistant",
    },
    meta: {
      title: "ChatGPT Prompts for Email Writing",
      description: "Write better emails faster with these ChatGPT prompts. Every prompt is designed for real workplace situations: follow-ups, client emails, internal communications, and more.",
    },
    hero: {
      headline: "ChatGPT Prompts for Email Writing",
      subtitle: "50 copy-paste ready ChatGPT prompts for professional emails — from cold outreach to difficult conversations to executive communications.",
    },
    sections: [
      {
        title: "Professional & Business Emails",
        tag: "Business",
        prompts: [
          {
            title: "Write a professional email from rough notes",
            prompt: `Turn my rough notes into a well-written professional email.

Context: I need to email [recipient name/role] at [company]
Our relationship: [colleague / client / manager / prospect / vendor]
Main point I need to communicate: [your main message]
My rough notes / key points:
[PASTE YOUR ROUGH NOTES]
Desired outcome: [what you want them to do after reading]
Tone: [formal / semi-formal / friendly professional]

Write an email that:
- Has a clear, action-oriented subject line
- Gets to the point in the first sentence
- Is professionally written but sounds like a real person
- Ends with a clear next step
- Is appropriately concise`,
          },
          {
            title: "Reply to a difficult email professionally",
            prompt: `I need to respond to this difficult email professionally.

The email I received:
[PASTE THE EMAIL]

My actual response / position:
[WHAT YOU WANT TO SAY — be honest]

How I want to come across: [firm but professional / diplomatic / direct / conciliatory]

Write a reply that:
- Acknowledges their email without being sycophantic
- States my position clearly and firmly
- Avoids defensive or emotional language
- Keeps the relationship intact (if that's important)
- Is appropriately brief — no rambling

Also flag any sentences in my response that might come across badly and suggest better alternatives.`,
          },
          {
            title: "Email to senior stakeholder or executive",
            prompt: `I need to email a senior stakeholder or executive I don't communicate with regularly.

Recipient: [name / title / relationship]
Purpose of the email: [what you need from them]
Context they need: [any background they'll need to understand]
Why this matters to them: [the business case / what's at stake for them]
What I need them to do: [specific ask]

Write an email that:
- Is brief — executives don't read long emails
- Leads with the key point or ask in the first line
- Provides only the context they need — nothing more
- Makes the action they need to take completely clear
- Uses a subject line they'll actually open
- Respects their seniority without being deferential`,
          },
          {
            title: "Request a meeting by email",
            prompt: `Write an email requesting a meeting.

Recipient: [name / role]
Purpose of meeting: [what you want to discuss]
Why it's valuable for them: [what's in it for them]
Proposed length: [30 / 45 / 60 minutes]
Proposed times (optional): [or say you're flexible]
Urgency: [urgent / standard / whenever suits]

Write an email that:
- Has a subject line that makes the purpose clear
- States the reason for the meeting upfront
- Makes a specific ask (confirms a time, asks them to share availability)
- Is under 100 words
- Doesn't waste their time explaining things that can wait for the meeting`,
          },
        ],
      },
      {
        title: "Follow-Up Emails",
        tag: "Follow-Up",
        prompts: [
          {
            title: "Follow up after no response",
            prompt: `I sent an email [X days/weeks] ago and haven't heard back. Write a follow-up email.

Original email topic: [briefly describe]
Recipient: [name / role]
Our relationship: [describe]
How urgent is this: [urgent / standard / low priority]

Write a follow-up email that:
- References my previous email without being passive-aggressive
- Adds value or new context (not just 'just checking in')
- Makes it easy for them to respond
- Is shorter than my original email
- Is friendly but clear that I need a response

Also write a subject line using 'Re:' to increase open rates.`,
          },
          {
            title: "Follow up after a job interview",
            prompt: `Write a follow-up email after a job interview.

Company: [company name]
Role: [job title]
Interviewer name(s): [names]
Date of interview: [date]
Something specific we discussed: [a topic or moment from the interview]
Key point I want to reinforce: [your strongest qualification or fit]

Write an email that:
- Is sent within 24 hours of the interview
- Thanks them specifically (not generically)
- References the specific conversation point to show I was engaged
- Reaffirms my interest and fit in 1-2 sentences
- Is under 150 words — brief and memorable
- Ends with the right level of call to action (not pushy, not passive)`,
          },
          {
            title: "Follow up on a proposal or quote",
            prompt: `Write a follow-up email after sending a proposal or quote that hasn't been responded to.

Proposal sent: [X days ago]
Client/prospect: [name / company]
Proposal value: [approx value or project type]
What I know about their situation: [any context on their decision timeline or concerns]

Write a follow-up that:
- Doesn't feel desperate or pushy
- Adds value — a new piece of information, a question, or a relevant insight
- Moves the conversation forward naturally
- Has a subject line that gets opened
- Is under 100 words`,
          },
          {
            title: "Follow up on an overdue payment",
            prompt: `Write a professional but firm email chasing an overdue payment.

Client: [company name]
Invoice reference: [invoice number]
Amount: [amount]
Original due date: [date]
Days overdue: [X days]
Previous reminders sent: [yes/no — how many]

Write an email appropriate to this stage:
- First reminder: polite, assume it's an oversight
- Second reminder: firmer, reference previous contact
- Third reminder: formal, reference next steps

The email should be professional throughout — firm without being aggressive. Include the key invoice details and a clear payment request.`,
          },
        ],
      },
      {
        title: "Difficult & Sensitive Emails",
        tag: "Sensitive",
        prompts: [
          {
            title: "Deliver bad news professionally",
            prompt: `I need to email someone with disappointing or bad news.

The bad news: [describe what happened]
Recipient: [name / role / relationship]
What they were expecting: [what was promised or expected]
What I can offer instead (if anything): [alternatives / solutions]
How I want to maintain the relationship: [is this important?]

Write an email that:
- Leads with empathy but is clear about the bad news early (don't bury it)
- Takes appropriate responsibility without over-apologising
- Explains what happened briefly — without making excuses
- Offers a clear path forward or solution where possible
- Maintains professionalism and relationship quality throughout`,
          },
          {
            title: "Politely decline a request",
            prompt: `I need to politely but clearly decline a request.

The request: [what someone asked me to do]
Requester: [relationship — colleague / client / manager / external contact]
Reason I'm declining: [real reason — you can tell me if it's sensitive]
Can I offer an alternative? [yes/no — if yes, what]
Relationship I want to maintain: [important to keep / neutral / doesn't matter]

Write an email that:
- Declines clearly — no ambiguity
- Is warm and professional
- Gives a brief reason without over-explaining
- Offers an alternative if I have one
- Closes positively and keeps the door open where appropriate`,
          },
          {
            title: "Address a conflict or complaint",
            prompt: `I need to write an email addressing a conflict or complaint.

Situation: [describe the conflict or complaint briefly]
My position: [my perspective on what happened]
What I want the outcome to be: [resolution, apology, action, etc.]
Recipient: [relationship]
How important is this relationship: [very / somewhat / not very]

Write an email that:
- Addresses the issue directly without aggression
- Acknowledges the other person's perspective where appropriate
- States my position clearly and factually
- Proposes a concrete resolution
- Avoids emotional language, accusation, or passive aggression

Also flag any phrases I should avoid in this type of email.`,
          },
          {
            title: "Apologise professionally for a mistake",
            prompt: `I need to send a professional apology email for a mistake I made.

What happened: [describe the mistake]
Who was affected: [recipient / relationship]
Impact of the mistake: [what consequences it caused]
What I've done or plan to do to fix it: [corrective action]

Write an apology email that:
- Takes clear responsibility — no passive voice, no excuses
- Is specific about what went wrong
- States concretely what I'm doing to fix it
- Doesn't over-apologise or grovel — once is enough
- Closes with confidence that this won't happen again
- Is appropriately brief — apologies don't need to be long`,
          },
        ],
      },
      {
        title: "Client & Customer Emails",
        tag: "Client",
        prompts: [
          {
            title: "Welcome a new client",
            prompt: `Write a warm welcome email for a new client.

Client name: [name / company]
What they've signed up for / purchased: [service or product]
Key next steps for them: [onboarding steps or what happens next]
My role: [your name and role]
Company name: [your company]
Tone: [warm professional / friendly / premium / corporate]

Write an email that:
- Makes them feel confident they made the right choice
- Sets clear expectations for next steps
- Includes the key information they need right now
- Has a warm, personalised opening
- Ends with a clear invitation to reach out with questions`,
          },
          {
            title: "Handle a client complaint",
            prompt: `Write a professional email responding to a client complaint.

Client: [name / company]
Complaint: [what they complained about]
Was the complaint valid? [yes / partly / no]
What we're doing about it: [your resolution or action]
Compensation offered (if any): [describe]

Write an email that:
- Acknowledges their experience without being defensive
- Takes appropriate responsibility
- Explains what happened briefly (without making excuses)
- States clearly what we're doing to fix it and by when
- Offers any compensation in a natural, confident way
- Closes with genuine commitment to their satisfaction`,
          },
          {
            title: "Check in with a quiet client",
            prompt: `Write a check-in email to a client who has gone quiet.

Client: [name / company]
Last contact: [when]
What we discussed or sold them: [describe]
Why they might be quiet: [any context]
What I want to achieve: [re-engage / get feedback / offer help]

Write a brief, non-pushy check-in email that:
- Doesn't make them feel guilty for not responding
- Adds value or asks a useful question rather than just 'checking in'
- Is under 80 words
- Feels personal and genuine
- Gives them an easy reason to reply`,
          },
          {
            title: "Upsell or offer additional services to a client",
            prompt: `Write an email offering additional services or an upsell to an existing client.

Client: [name / company]
Existing service they use: [describe]
New offering: [what you want to offer them]
Why it's relevant to them specifically: [tailored reason]
Approximate price or value: [optional]

Write an email that:
- Leads with their success or satisfaction, not the product
- Frames the offer as solving a specific need they have
- Is not salesy or pushy — feels like a natural recommendation
- Makes it easy to say yes (or schedule a call)
- Is under 150 words`,
          },
        ],
      },
      {
        title: "Internal & Team Emails",
        tag: "Internal",
        prompts: [
          {
            title: "Announce a change or decision to your team",
            prompt: `Write an email announcing a change or important decision to my team.

The change: [describe what's changing]
Why it's happening: [the reason / rationale]
What it means for the team: [specific impact]
Timeline: [when it takes effect]
What I need from the team: [actions, acknowledgement, etc.]
Tone: [authoritative / transparent / collaborative]

Write an email that:
- States the change clearly in the first line
- Explains the 'why' briefly but honestly
- Addresses likely concerns proactively
- Sets clear expectations and next steps
- Invites questions in a way that feels genuine
- Doesn't oversell or spin the change`,
          },
          {
            title: "Give feedback by email",
            prompt: `I need to give feedback to a colleague or direct report by email.

Recipient: [relationship — direct report / peer / contractor]
Situation: [what happened that prompted the feedback]
Feedback type: [constructive / positive / mixed]
Specific behaviour I want to address: [describe]
Desired change or outcome: [what I want to see going forward]

Write an email that:
- Is specific and behaviour-focused (not personality-focused)
- Uses the SBI model where possible: Situation, Behaviour, Impact
- Is direct without being harsh
- For constructive feedback: includes clear guidance on what to change
- Closes with support and confidence in them
- Is appropriately private (flags if this should be a conversation instead)`,
          },
          {
            title: "Write a project update email",
            prompt: `Write a project status update email for internal stakeholders.

Project: [project name]
Audience: [team / management / mixed]
Current status: [on track / at risk / delayed]
Key progress since last update: [what's been done]
Current blockers or risks: [any issues]
Next milestones: [upcoming steps and dates]
What I need from recipients: [decisions / resources / awareness only]

Format this as a scannable update email with:
- A one-line status summary at the top (RAG status if relevant)
- Progress section
- Blockers/risks section
- Next steps section
- Clear ask at the bottom

Keep it under 200 words.`,
          },
          {
            title: "Email to decline or push back on a request from a manager",
            prompt: `I need to push back on a request from my manager, diplomatically and professionally.

The request: [what my manager asked me to do]
Why I want to push back: [your honest reasons — workload / timeline / resources / disagreement]
What I want as an alternative: [what I'm proposing instead, if anything]
My relationship with this manager: [good / neutral / complicated]

Write an email that:
- Acknowledges and respects the request
- Raises my concerns clearly without being insubordinate
- Proposes a specific alternative or compromise
- Invites a conversation rather than forcing a confrontation
- Is professional throughout

Also advise whether this is better as an email or a conversation first.`,
          },
        ],
      },
    ],
    faqs: [
      { question: "How do I make ChatGPT emails sound like me, not like AI?", answer: "Give ChatGPT examples of your writing style and tell it your tone preference explicitly. Then edit the output — swap in your words, add specific details only you know, and cut anything that sounds generic. The structure from ChatGPT, the voice from you." },
      { question: "What's the ideal length for a professional email?", answer: "Most professional emails should be 50-150 words. The longer the email, the less likely it is to be read in full. Use ChatGPT to help you cut ruthlessly — if a sentence doesn't add information or move the reader to action, cut it." },
      { question: "Can ChatGPT help me write emails in a different language?", answer: "Yes. Specify the language in your prompt and tell ChatGPT the formality level expected in that culture. For high-stakes communications, always have a native speaker review the output before sending." },
      { question: "How should I format a subject line for higher open rates?", answer: "Keep it under 50 characters, be specific (not vague like 'Following up'), include the key topic, and use action words where appropriate. Ask ChatGPT to generate 5 subject line options for any email and choose the most compelling one." },
      { question: "Is it okay to use ChatGPT for sensitive emails like complaints or apologies?", answer: "Yes, with care. ChatGPT is excellent at helping you find the right professional language for difficult situations. Always review and personalise the output carefully — sensitive emails need to feel authentic, not templated." },
      { question: "How do I use ChatGPT to reply quickly to lots of emails?", answer: "Create a system: keep a prompt template per email type (follow-up, decline, update, etc.) and paste the relevant email plus your key points. ChatGPT can draft a reply in seconds that you review and send. This works particularly well for repetitive email types." },
      { question: "Should I disclose that I used AI to write my emails?", answer: "For professional emails, no — AI is now a standard writing tool like Grammarly or spell-check. The responsibility for content and accuracy remains with you. The exception would be highly personal communications where authenticity is the entire point." },
      { question: "Can ChatGPT help me write emails in a more formal or executive style?", answer: "Yes. Specify 'executive level', 'board communication', or 'C-suite audience' in your prompt. Ask for shorter sentences, fewer pleasantries, and a direct first line. Executive writing leads with the key point and never buries the ask." },
    ],
  },
]

// ── Helpers ──────────────────────────────────────────────────────────────────
export function getPromptPage(toolSlug: string, usecaseSlug: string): PromptPageData | undefined {
  return allPromptPages.find(
    (p) => p.toolSlug === toolSlug && p.usecaseSlug === usecaseSlug
  )
}

export function getPromptPagesByTool(toolSlug: string): PromptPageData[] {
  return allPromptPages.filter((p) => p.toolSlug === toolSlug)
}

export function getPromptPagesByUsecase(usecaseSlug: string): PromptPageData[] {
  return allPromptPages.filter((p) => p.usecaseSlug === usecaseSlug)
}

export function getAllPromptPageParams(): { tool: string; usecase: string }[] {
  return allPromptPages.map((p) => ({ tool: p.toolSlug, usecase: p.usecaseSlug }))
}
