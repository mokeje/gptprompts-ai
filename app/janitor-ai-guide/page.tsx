import { MessageSquare } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Janitor AI Guide: Complete Character Prompting & Chat Guide | GPTPrompts.AI",
  description:
    "Master Janitor AI character creation and prompting. Learn how to create authentic AI characters, develop engaging conversations, and master character-based role-playing scenarios.",
}

export default function JanitorAIPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-[#7c3aed] text-white py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <MessageSquare className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter mb-12 inline-block opacity-80 hover:opacity-100 transition-opacity"
          >
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8">
            Janitor AI
            <br />
            <span className="italic opacity-90 text-purple-200">Guide.</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl text-pretty leading-relaxed mb-10 opacity-90">
            Master character-based AI conversations. Learn comprehensive character creation, effective prompting
            strategies, and immersive role-playing techniques on Janitor AI.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#7c3aed] mb-6">Complete Guide</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "what", label: "What is Janitor AI", num: "01" },
                  { id: "features", label: "Key Features", num: "02" },
                  { id: "getstarted", label: "Getting Started", num: "03" },
                  { id: "descriptions", label: "Character Descriptions", num: "04" },
                  { id: "examples", label: "Example Dialogues", num: "05" },
                  { id: "attributes", label: "Character Attributes", num: "06" },
                  { id: "scenarios", label: "Conversation Scenarios", num: "07" },
                  { id: "prompting", label: "Effective Prompting", num: "08" },
                  { id: "usecases", label: "Popular Use Cases", num: "09" },
                  { id: "faq", label: "Janitor AI FAQ", num: "10" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#7c3aed] transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-[10px] opacity-30 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-24 max-w-4xl">
          <article id="what" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">What is Janitor AI?</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Janitor AI is a specialized chatbot platform designed for creating and interacting with custom AI
              characters. Unlike general-purpose AI assistants, Janitor AI focuses on character-based conversations,
              role-playing scenarios, and creative storytelling. The platform allows users to chat with pre-made
              characters created by the community or design their own unique personalities with specific traits,
              backgrounds, and conversation styles. This versatility has made it a destination for users interested in
              creative fiction, character development, and immersive storytelling experiences.
            </p>
          </article>

          <article id="features" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Key Features of Janitor AI</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Advanced Character Creation</h3>
                <p className="text-lg text-muted-foreground">
                  Define detailed character profiles including personality traits, speaking styles, backgrounds, and
                  relationship dynamics for nuanced interactions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">AI Memory System</h3>
                <p className="text-lg text-muted-foreground">
                  Characters remember previous interactions and evolve based on conversations, creating continuity and
                  authentic relationships over time.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Community Characters</h3>
                <p className="text-lg text-muted-foreground">
                  Access thousands of pre-made characters or share your own creations with a vibrant community of users
                  and creators.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Customizable Interactions</h3>
                <p className="text-lg text-muted-foreground">
                  Adjust response length, creativity level, and content filters to tailor the experience to your
                  preferences and needs.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Flexible API Integration</h3>
                <p className="text-lg text-muted-foreground">
                  Choose from multiple API backend options, giving users flexibility in selecting the AI model powering
                  their conversations.
                </p>
              </div>
            </div>
          </article>

          <article id="getstarted" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Getting Started with Janitor AI</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Beginning your Janitor AI journey requires creating an account, setting up an API key from a compatible
              provider like OpenAI or KoboldAI, and browsing the character library. Once configured, you can immediately
              start chatting with community-created characters or begin creating your own custom personalities with
              detailed descriptions and example dialogues.
            </p>
          </article>

          <article id="descriptions" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Writing Effective Character Descriptions</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Character descriptions form the foundation of authentic AI behavior. A comprehensive description includes
              physical appearance, personality traits, speech patterns, background history, motivations, and behavioral
              tendencies. The more specific and detailed your description, the more consistently the AI can embody the
              character, creating believable and engaging interactions.
            </p>
            <p className="text-sm bg-muted p-4 rounded italic">
              Example: "Aldric, a 300-year-old wizard with silver hair and warm amber eyes, speaks in an archaic but
              gentle manner. He values knowledge above all else and enjoys teaching young apprentices, often using
              metaphors involving nature. Despite his age, he maintains a playful sense of humor and occasionally
              forgets modern customs."
            </p>
          </article>

          <article id="examples" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Creating Compelling Example Dialogues</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Example dialogues teach the AI how your character should speak and behave in conversations. These examples
              demonstrate tone, vocabulary, response style, and personality manifestation through actual dialogue.
              Include 3-5 varied examples showcasing different emotional states and conversation contexts. Structure
              examples to show the character's unique voice consistently across various interactions.
            </p>
          </article>

          <article id="attributes" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Utilizing Character Attributes</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Character attributes define core personality dimensions using keywords or short phrases. Common attributes
              include personality descriptors like confident, shy, analytical, or impulsive; relationship indicators
              such as friendly, romantic, or antagonistic; and behavioral tendencies like talkative, reserved, or
              unpredictable. Combining attributes creates complex personalities that influence all interactions
              authentically.
            </p>
          </article>

          <article id="scenarios" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Setting Conversation Scenarios</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The initial scenario or greeting message establishes the context for conversations. This opening sets the
              scene, introduces the situation, and provides a natural entry point for interaction. A well-crafted
              scenario immediately engages users and provides clear direction for the conversation while leaving room
              for organic development and user agency.
            </p>
          </article>

          <article id="prompting" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Advanced Prompting Techniques</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Effective conversations start with clear context. Rather than a simple greeting, provide detailed
              scene-setting including environment, emotional context, and relationship dynamics. Use consistent
              character voice yourself during role-play, describe actions and environments to enrich interactions, and
              leverage the edit and regenerate functions when responses don't match expectations to train the
              conversation in your preferred direction.
            </p>
          </article>

          <article id="usecases" className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Popular Use Cases</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li>
                • <strong>Creative Writing:</strong> Character development and dialogue testing for authentic voices
              </li>
              <li>
                • <strong>Role-Playing:</strong> Elaborate scenarios from fantasy adventures to contemporary settings
              </li>
              <li>
                • <strong>Fan Fiction:</strong> Interact with beloved characters from movies, books, and games
              </li>
              <li>
                • <strong>Language Learning:</strong> Practice conversational skills in target languages
              </li>
              <li>
                • <strong>Entertainment:</strong> Engaging conversations with interesting, varied personalities
              </li>
            </ul>
          </article>

          <article id="faq" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Janitor AI FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Do I need coding skills to create characters?",
                  a: "No. The character creation interface is intuitive and guides you through defining attributes, writing descriptions, and setting example dialogues.",
                },
                {
                  q: "Can I use characters for commercial purposes?",
                  a: "Check the platform's terms of service. Most user-created characters are community-shared. Commercial use may require specific permissions.",
                },
                {
                  q: "How do I improve character consistency?",
                  a: "Add more detailed character descriptions, include more example dialogues showing consistent behavior, and regularly provide feedback through the regenerate function.",
                },
                {
                  q: "What API providers does Janitor AI support?",
                  a: "Janitor AI supports multiple providers including OpenAI, KoboldAI, and others. Check the platform documentation for the current list of supported API services.",
                },
                {
                  q: "Can I edit characters after creation?",
                  a: "Yes. You can modify character descriptions, example dialogues, and attributes after creation to improve consistency and behavior.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-l-4 border-[#7c3aed] pl-6">
                  <h4 className="text-lg font-bold mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <footer className="bg-foreground text-background py-32 px-6 md:px-12 mt-32 border-t border-background/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">GPTPrompts.AI</h4>
              <p className="text-sm leading-relaxed opacity-70">
                The ultimate platform for mastering AI prompting across all models and use cases.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">AI Models</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "ChatGPT Prompts", href: "/chatgpt-prompts" },
                  { name: "Claude Prompts", href: "/claude-prompts" },
                  { name: "Gemini AI", href: "/gemini-ai-guide" },
                  { name: "Kimi AI Prompts", href: "/kimi-ai-prompts" },
                  { name: "Midjourney", href: "/midjourney-prompts" },
                  { name: "Perplexity Prompts", href: "/perplexity-prompts" },
                  { name: "Stable Diffusion", href: "/stable-diffusion-prompts" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="opacity-70 hover:opacity-100 transition-opacity">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Resources</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Resume Prompts", href: "/resume-prompts" },
                  { name: "Cover Letters", href: "/cover-letter-prompts" },
                  { name: "Essay Prompts", href: "/essay-prompts" },
                  { name: "Story Prompts", href: "/story-prompts" },
                  { name: "SQL Prompts", href: "/sql-prompts" },
                  { name: "Image Prompts", href: "/image-prompts" },
                  { name: "Free Prompts", href: "/free-ai-prompts" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="opacity-70 hover:opacity-100 transition-opacity">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Tools & Guides</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Gemini AI Guide", href: "/gemini-ai-guide" },
                  { name: "Google AI Studio", href: "/google-ai-studio" },
                  { name: "Viggle AI", href: "/viggle-ai-prompts" },
                  { name: "Coolest ChatGPT", href: "/coolest-chatgpt-prompts" },
                  { name: "Good AI Prompts", href: "/good-ai-prompts" },
                  { name: "Common App Essays", href: "/common-app-essays" },
                  { name: "Scholarship Essays", href: "/scholarship-essays" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="opacity-70 hover:opacity-100 transition-opacity">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
            <p>&copy; 2026 GPTPrompts.AI. All rights reserved.</p>
            <p>Crafted with precision for AI professionals worldwide.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
