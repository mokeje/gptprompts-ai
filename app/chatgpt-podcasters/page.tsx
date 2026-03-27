import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ChatGPT for Podcasters: Scripts, Show Notes, Marketing & Guest Prep",
  description:
    "Podcast faster with ChatGPT. Episode ideas, full scripts, guest research, show notes, and promotion assets—save 2+ hours per episode.",
}

export default function PodcastersPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-purple-600 text-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-sm opacity-80 hover:opacity-100 mb-6 inline-block">
            Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">ChatGPT for Podcasters</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Plan faster, write faster, promote smarter. ChatGPT handles episode ideas, scripts, guest prep, and
            marketing—so you focus on recording great conversations.
          </p>
        </div>
      </header>

      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-6">What ChatGPT Can Do For Podcasters</h2>
          <p>
            ChatGPT works best as a creative partner and content assistant that plugs into your existing workflow. It
            brainstorms podcast names, season themes, and niche angles. Generates episode ideas, outlines, and full
            scripts tailored to your topic and audience. Drafts intros, outros, show notes, titles, social posts, and
            email promos for each episode. Helps with guest outreach, interview questions, and sponsor pitches.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Episode & Season Brainstorming</h2>
          <p>Use ChatGPT to escape the "what should I record next?" loop.</p>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Episode Ideas Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "I host a podcast called [name] about [niche + angle]. My audience is [target audience]. Give me 15
              episode ideas that address their biggest problems and misconceptions, and briefly explain why each would
              hook them."
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Season Themes Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "Suggest 5 possible themes for my next 10-episode season for a podcast about [topic], including a working
              title and 3 sample episodes for each theme."
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Script Outlines and Full Scripts</h2>
          <p>You can generate anything from bullet-point outlines to near-final scripts.</p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Outline Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "Outline a 30-minute solo podcast episode on [topic] for [audience]. Include hook, key segments, example
              stories, and a clear CTA at the end."
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Script Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "Write a conversational podcast script for a 20-minute episode on [topic]. Include host narration,
              transitions, and listener engagement moments (questions, pauses, calls to action)."
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Guest Outreach & Interview Questions</h2>
          <p>ChatGPT is very effective at prepping guest-related content.</p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Guest List Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "Create a list of 10 potential podcast guests who are experts in [topic], including their name, short bio,
              and why they'd fit my show about [your niche]."
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Interview Questions Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "Given this guest bio: [paste], write 15 open-ended interview questions that go beyond their usual talking
              points and surface personal stories and actionable advice."
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Titles, Show Notes, and Promotion</h2>
          <p>AI really shines in the post-production content stack.</p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Episode Titles Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "Here is an episode summary: [paste]. Suggest 10 clickable, non-clickbait titles optimized for YouTube and
              podcast apps."
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Show Notes Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "Write SEO-friendly show notes for this episode transcript: [paste]. Include a 2-paragraph summary, 5
              bullet key takeaways, and resource links placeholders."
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Repurposing Episodes into Other Formats</h2>
          <p>
            Repurposing is crucial for growth, and AI makes it much faster. Turn transcripts into blog posts,
            newsletters, and carousels. Extract short clips ideas and key quotes for shorts/Reels.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Blog Post Prompt:</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <p className="font-mono text-sm">
              "Turn this podcast transcript into a 1,500-word blog post in my voice, with headings, subheadings, and a
              clear introduction and conclusion: [paste transcript]."
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Best Practices When Using ChatGPT</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Always add your personal stories and perspectives—AI can't invent your life.</li>
            <li>Use prompts that specify niche, audience, length, tone, and objective for better results.</li>
            <li>Treat AI scripts as first drafts, not final versions; edit for accuracy and flow.</li>
            <li>Keep an eye on factual claims if you cover news, health, money, or legal topics.</li>
          </ul>
        </div>
      </section>

      <footer className="bg-gray-100 py-12 px-6 md:px-12 mt-20">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 GPTPrompts.AI. All rights reserved.</p>
          <div className="mt-6 flex justify-center gap-6">
            <Link href="/website-links" className="hover:text-foreground">
              View All Pages
            </Link>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
