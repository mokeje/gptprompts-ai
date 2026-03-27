import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Volunteer Recruitment Prompts: ChatGPT for Nonprofit Growth",
  description:
    "Master volunteer recruitment with ChatGPT. 40+ production-ready prompts for recruitment ads, targeted outreach, onboarding, retention, and strategic volunteer management to grow your nonprofit.",
  keywords: "volunteer recruitment, ChatGPT prompts, nonprofit growth, volunteer management, AI prompts",
  openGraph: {
    title: "Volunteer Recruitment Prompts: ChatGPT for Nonprofit Growth",
    description:
      "Master volunteer recruitment with ChatGPT. 40+ production-ready prompts for recruitment ads, targeted outreach, onboarding, retention, and strategic volunteer management.",
    type: "article",
  },
}

export default function VolunteerRecruitmentPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-black text-white py-24 px-6 md:px-12 border-b">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-white mb-8 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Volunteer Recruitment Prompts: ChatGPT for Nonprofit Growth
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Master volunteer recruitment with 40+ production-ready ChatGPT prompts for recruitment ads, targeted
            outreach campaigns, onboarding flows, retention messaging, and strategic volunteer management to scale your
            nonprofit's impact.
          </p>
        </div>
      </header>

      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto space-y-24">
        {/* Introduction */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold border-b pb-4">Why Volunteer Recruitment Needs AI Now</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nonprofits report that finding and keeping volunteers is harder than ever due to time pressure, competition
            for attention, and changing expectations about flexibility and impact. AI supports growth by drafting
            targeted recruitment messages, turning your existing processes into clear role descriptions and onboarding
            checklists, and helping volunteer managers analyze engagement trends to recruit smarter and retain more
            people.
          </p>
          <div className="bg-secondary p-8 border-l-4 border-black space-y-4">
            <h3 className="font-bold text-lg">How ChatGPT Accelerates Volunteer Recruitment:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Drafts targeted recruitment messages instead of generic posts</li>
              <li>• Turns existing processes into clear role descriptions and onboarding checklists</li>
              <li>• Analyzes engagement trends to recruit smarter and retain more people</li>
              <li>• Customizes messaging by audience segment (students, professionals, retirees)</li>
              <li>• Creates 20+ recruitment posts in 2 hours instead of 20 hours</li>
            </ul>
          </div>
        </section>

        {/* Core Principles */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold border-b pb-4">Core Prompt Principles for Volunteer Recruitment</h2>
          <p className="text-lg text-muted-foreground">
            Before copying prompts, structure them properly using these four fundamentals:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Define the Role Clearly",
                desc: "Tasks, time commitment, skills, location (in-person vs remote)",
              },
              {
                title: "Name the Audience",
                desc: "Students, retirees, professionals, corporate teams, families, faith communities",
              },
              { title: "Highlight Impact", desc: "Who benefits and how volunteers make a difference" },
              { title: "Specify the Channel", desc: "Website, email, LinkedIn, Instagram, volunteer platform, flyer" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-secondary border border-black/10">
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* High-Impact Recruitment Ad Prompts */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold border-b pb-4">1. High-Impact Volunteer Recruitment Ad Prompts</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">A. General Volunteer Recruitment Post</h3>
              <div className="bg-black text-white p-6 font-mono text-sm space-y-4 overflow-x-auto">
                <p>"Act as a volunteer recruiter for a nonprofit.</p>
                <p>Organization: [name] – Mission: [one-sentence mission].</p>
                <p>Role: [role title] supporting [program name].</p>
                <p>
                  Write a compelling volunteer recruitment post for [channel: website / Instagram / Facebook / LinkedIn
                  / volunteer portal] that:
                </p>
                <p>– Hooks people in the first 2 lines.</p>
                <p>– Explains what volunteers actually do in simple, concrete terms.</p>
                <p>– States time commitment and any skills needed (or 'no experience required, we train you').</p>
                <p>– Highlights the impact on [beneficiary group] with 1 short example.</p>
                <p>– Ends with a clear call-to-action and how to apply (link, form, email).</p>
                <p>Tone: [friendly / professional / community-driven / youth-oriented]."</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">B. Role-Specific Recruitment Prompt (Multiple Versions)</h3>
              <div className="bg-black text-white p-6 font-mono text-sm space-y-4 overflow-x-auto">
                <p>
                  "Create 3 different volunteer recruitment messages for the role [role name] at [organization], to be
                  posted on [platform].
                </p>
                <p>Version 1: focus on impact for the community.</p>
                <p>Version 2: focus on skills volunteers gain (resume, leadership, networking).</p>
                <p>Version 3: focus on flexibility, community, and fun.</p>
                <p>Each version should:</p>
                <p>– Be 120–180 words.</p>
                <p>– Have a short, catchy headline.</p>
                <p>– Include a one-sentence 'why this matters' statement.</p>
                <p>– End with a clear next step to sign up."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Targeted Outreach */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold border-b pb-4">
            2. Targeted Outreach Prompts for Different Volunteer Segments
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Students & Young Adults",
                prompt:
                  "Write a short volunteer recruitment post aimed at students / young adults (ages [range]) for the role [role name]. Emphasize: Real-world experience, Skills for resumes and college applications, Community impact and social connection. Keep it under 140 words, with informal but respectful language. End with an invitation to bring friends.",
              },
              {
                title: "Working Professionals & Corporate Teams",
                prompt:
                  "Draft a volunteer recruitment message tailored to working professionals / corporate teams in [industry or city] for a [one-day event / ongoing skills-based role]. Highlight: Team-building and CSR impact, How their existing skills (e.g., marketing, finance, IT) directly help [beneficiary group], Flexible scheduling and group opportunities. Suggest 2–3 email subject lines and a LinkedIn caption.",
              },
              {
                title: "Retirees & Empty Nesters",
                prompt:
                  "Create a warm, inviting recruitment message for retirees or older adults who may have extra time and life experience. Role: [role name]. Emphasize: Meaningful use of time, Connection and community, The value of their experience. Use a calm, respectful tone and avoid slang.",
              },
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="bg-secondary p-4 text-sm border-l-4 border-black italic">"{item.prompt}"</div>
              </div>
            ))}
          </div>
        </section>

        {/* Campaign & Funnel Prompts */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold border-b pb-4">3. Volunteer Recruitment Campaign & Funnel Prompts</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">A. Campaign Plan Prompt</h3>
              <div className="bg-black text-white p-6 font-mono text-sm space-y-4 overflow-x-auto">
                <p>
                  "Act as a volunteer campaign strategist. Design a 4-week volunteer recruitment campaign to fill
                  [number] positions for [role/program] at [organization].
                </p>
                <p>Include:</p>
                <p>– Primary audience(s) and key messages for each.</p>
                <p>– Weekly focus (e.g., storytelling week, behind-the-scenes week, impact week).</p>
                <p>– Recommended channels: email, social media, website, community partners.</p>
                <p>– 3–5 content ideas per week (posts, emails, stories, short videos).</p>
                <p>– Metrics to track (sign-ups, show-up rates, applications completed).</p>
                <p>Present this as a simple calendar with bullet points."</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">B. Volunteer Landing Page Prompt</h3>
              <div className="bg-black text-white p-6 font-mono text-sm space-y-4 overflow-x-auto">
                <p>"Write copy for a volunteer landing page for [organization] focused on recruiting [role types].</p>
                <p>Sections should include:</p>
                <p>– Headline + subheadline that clearly state who we're looking for and why</p>
                <p>– Short 'Why volunteer with us?' section (3–5 bullets)</p>
                <p>– 'What you'll do' section with concrete tasks</p>
                <p>– 'Time commitment & requirements'</p>
                <p>– 2–3 short quotes or story snippets (leave placeholders)</p>
                <p>– Simple FAQ (availability, training, age limits, groups)</p>
                <p>– Strong call-to-action button text."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Onboarding & Retention */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold border-b pb-4">4. Onboarding, Training, and Retention Prompts</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">A. Onboarding Checklist & Welcome Series</h3>
              <div className="bg-black text-white p-6 font-mono text-sm space-y-4 overflow-x-auto">
                <p>"Create a detailed volunteer onboarding checklist for [organization] for the [program/role] team.</p>
                <p>Include:</p>
                <p>– Pre-arrival steps (applications, background checks, forms)</p>
                <p>– First-day actions (introductions, tour, basic training)</p>
                <p>– First-week follow-up (check-ins, FAQs, extra support)</p>
                <p>– Tech setup (logins, apps) if relevant</p>
                <p>– Who is responsible for each step.</p>
                <p>
                  Make sure the checklist reflects our mission to [mission] and the expectations for volunteers in
                  [service environment]."
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">B. Check-In & Appreciation Prompts</h3>
              <div className="bg-secondary p-6 space-y-4">
                <p className="font-bold">Post-Shift Message:</p>
                <div className="bg-black text-white p-4 font-mono text-sm italic">
                  "Write a short message to send to volunteers after their first shift. Thank them, highlight something
                  specific they contributed (use placeholders), ask 2 quick feedback questions, remind them of the next
                  opportunity or how to sign up again."
                </div>
                <p className="font-bold mt-4">Volunteer of the Month Spotlight:</p>
                <div className="bg-black text-white p-4 font-mono text-sm italic">
                  "Draft 3 versions of a 'Volunteer of the Month' spotlight post for [platform] featuring [volunteer
                  first name]. Each version should share 1–2 details about what they do, connect their work to your
                  mission, and invite others to join as volunteers."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy & Analysis */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold border-b pb-4">5. Strategy & Analysis Prompts for Nonprofit Growth</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">A. Volunteer Recruitment Strategy Prompt</h3>
              <div className="bg-black text-white p-6 font-mono text-sm space-y-4 overflow-x-auto">
                <p>
                  "Act as a volunteer program strategist. Our organization: [mission, size, location]. Current volunteer
                  situation: [how many, main roles, key challenges].
                </p>
                <p>Develop a 12-month volunteer recruitment and engagement strategy that includes:</p>
                <p>– Priority roles and how many people we need in each</p>
                <p>– Target audiences and key messages for each segment</p>
                <p>– Recommended recruitment channels and partnerships</p>
                <p>– Ideas for seasonal campaigns (e.g., back-to-school, holidays, MLK Day of Service)</p>
                <p>
                  – High-level KPIs (applications, active volunteers, retention rates, conversion from volunteer to
                  donor)."
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">B. Data & Feedback Analysis Prompt</h3>
              <div className="bg-secondary p-6 space-y-4">
                <div className="bg-black text-white p-4 font-mono text-sm space-y-4">
                  <p>"Analyze this volunteer data/feedback and identify:</p>
                  <p>– Top reasons people sign up</p>
                  <p>– Top reasons they don't show or drop off</p>
                  <p>– Which roles and shifts are hardest to fill</p>
                  <p>– Opportunities to improve communication, training, or recognition.</p>
                  <p>[paste survey results, notes, or summary stats]</p>
                  <p>Suggest 5 practical changes we can test over the next 3 months."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold border-b pb-4">6. Best Practices & Safeguards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Protect Volunteer Data",
                desc: "Don't paste sensitive personal information into public models; anonymize details or use secure/enterprise tools.",
              },
              {
                title: "Keep Human Oversight",
                desc: "Treat AI as a drafting partner; staff should review for accuracy, tone, cultural competence, and accessibility.",
              },
              {
                title: "Stay Mission-Aligned",
                desc: "Make sure messaging reflects your actual capacity—don't overpromise experiences or flexibility AI suggests.",
              },
              {
                title: "Be Inclusive",
                desc: "Edit AI copy to avoid jargon, ableist language, or assumptions about income, background, or time availability.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-secondary border border-black/10">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Putting It All Together */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold border-b pb-4">7. Putting It All Together for Nonprofit Growth</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Used strategically, volunteer recruitment prompts become more than a catchy phrase—they're a repeatable
            system for growing your nonprofit's impact without burning out your team.
          </p>
          <div className="space-y-4">
            <div className="p-6 bg-secondary border-l-4 border-black">
              <h3 className="font-bold mb-2">Top of Funnel</h3>
              <p className="text-muted-foreground">
                Role-specific posts and campaigns that speak directly to students, professionals, families, or retirees.
              </p>
            </div>
            <div className="p-6 bg-secondary border-l-4 border-black">
              <h3 className="font-bold mb-2">Middle of Funnel</h3>
              <p className="text-muted-foreground">
                Clear landing pages, easy forms, onboarding checklists, and helpful info sessions.
              </p>
            </div>
            <div className="p-6 bg-secondary border-l-4 border-black">
              <h3 className="font-bold mb-2">Bottom of Funnel & Beyond</h3>
              <p className="text-muted-foreground">
                Orientation scripts, check-ins, appreciation posts, and data-driven tweaks that turn first-time helpers
                into long-term volunteers—and often, donors.
              </p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mt-6">
            Save your best prompts in a shared doc or your CRM and reuse them every time you launch a new program or
            event—compounding your results with far less effort.
          </p>
        </section>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-6 md:px-12 mt-32 border-t">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm opacity-60">© 2026 GPTPrompts.AI - All Rights Reserved</p>
        </div>
      </footer>
    </main>
  )
}
