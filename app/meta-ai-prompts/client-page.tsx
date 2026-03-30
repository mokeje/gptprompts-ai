'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Copy, Check, ChevronDown, ChevronUp, MessageSquare, Sparkles, TrendingUp, Briefcase, BookOpen } from 'lucide-react'

export default function MetaAIPromptsPage() {
  const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    return (
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
        <h4 className="font-bold text-white mb-4">{title}</h4>
        <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
          {prompt}
        </pre>
        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 bg-[#10A937] hover:bg-[#0d8829] text-white font-medium py-2 px-4 rounded transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy Prompt
            </>
          )}
        </button>
      </div>
    )
  }

  const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false)

    return (
      <div className="border border-[#2a2a2a] rounded-lg">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-4 hover:bg-[#1a1a1a] transition-colors text-left"
        >
          <span className="font-medium text-white">{q}</span>
          {open ? (
            <ChevronUp className="w-5 h-5 text-[#10A937] flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
          )}
        </button>
        {open && (
          <div className="border-t border-[#2a2a2a] p-4 bg-[#0f0f0f] text-gray-300 leading-relaxed">
            {a}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <header className="bg-gradient-to-b from-[#10A937] to-[#0d7a29] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block hover:text-[#a8e6a1] transition-colors">
            GPTPrompts.AI
          </Link>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-6xl md:text-8xl font-bold">Meta AI</h1>
              <p className="text-2xl md:text-4xl text-[#a8e6a1] font-light">Facebook, Instagram &amp; WhatsApp</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            60+ copy-paste prompts for Meta AI across all platforms. From everyday tasks to social media captions, creative writing, and business productivity — get more out of Meta&apos;s AI assistant.
          </p>
          <div className="mt-8 inline-block bg-white/20 text-white px-6 py-2 rounded-lg font-semibold">
            Category: AI Chatbots &amp; Assistants
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24">

        {/* Everyday Tasks Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Everyday Tasks &amp; Quick Help</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Quick Recipe Planner"
              prompt={`I have these ingredients in my fridge: [list them]. Suggest 3 simple dinner recipes I can make tonight using mainly what I have. For each recipe, give me:
- Cook time
- Difficulty level
- Key steps (under 100 words)
- What else I might need to buy`}
            />
            <CopyCard
              title="Explain It Simply"
              prompt={`Explain [topic or concept] in the simplest way possible. Assume I have no background knowledge. Use an everyday analogy to make it click. Keep the explanation under 150 words, then tell me the one thing most people get wrong about it.`}
            />
            <CopyCard
              title="Smart Reply Drafter"
              prompt={`Help me write a reply to this message: "[paste message here]"

My relationship to this person: [friend / colleague / family / stranger]
The tone I want: [casual / professional / warm / brief]

Write 2 versions: one short (under 30 words) and one detailed (under 100 words).`}
            />
          </div>
        </section>

        {/* Social Media Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Social Media Captions &amp; Content</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Instagram Caption Generator"
              prompt={`Write 5 Instagram captions for a photo of [describe photo/scene]. My account is about [niche/topic]. I want captions that:
- Are 1-3 sentences max
- Include 1 question or CTA
- Feel authentic, not overly polished
- Mix one emotional and one informational option
Also suggest 10 relevant hashtags.`}
            />
            <CopyCard
              title="Facebook Post Writer"
              prompt={`Write a Facebook post for my [business / personal page] about [topic]. The post should:
- Open with a hook that stops the scroll
- Be 100-150 words
- Feel personal and conversational
- End with a question to drive comments
- Include a subtle call-to-action

My audience: [describe your audience]`}
            />
            <CopyCard
              title="WhatsApp Group Announcement"
              prompt={`Write a clear, friendly announcement for a WhatsApp group about [topic/event]. Keep it under 100 words. Use emoji sparingly (max 3). Make sure it answers: What, When, Where, and What people need to do next. Write it so even someone who hasn&apos;t been following the conversation understands it.`}
            />
            <CopyCard
              title="Story Ideas for the Week"
              prompt={`Generate 7 Instagram or Facebook Story ideas for a [type of account — e.g. fitness coach, small bakery, travel blogger] for this week. For each idea, give me:
- The hook (first text frame)
- The core content type (poll / tip / behind the scenes / question)
- A CTA for the last frame
Make them varied in format.`}
            />
            <CopyCard
              title="Comment Reply Batch"
              prompt={`I received these comments on my social media post. Write a friendly, genuine reply to each one. Keep replies under 20 words each. Match the energy of each commenter (enthusiastic to enthusiastic, brief to brief).

Comments:
1. [paste comment 1]
2. [paste comment 2]
3. [paste comment 3]`}
            />
            <CopyCard
              title="Viral Hook Generator"
              prompt={`Write 10 attention-grabbing opening lines (hooks) for social media posts about [topic]. Make them varied:
- 2 that start with a surprising fact
- 2 that use a bold opinion
- 2 that ask a question
- 2 that start with a relatable scenario
- 2 that tease a reveal

I&apos;ll pick the best one to use.`}
            />
          </div>
        </section>

        {/* Creative Writing Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Creative Writing &amp; Storytelling</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Short Story Starter"
              prompt={`Write the opening 200 words of a short story with this setup:
- Genre: [e.g. thriller, romance, sci-fi]
- Setting: [time and place]
- Main character: [brief description]
- The inciting moment: [what happens to kick things off]

End on a cliffhanger or question that makes me want to keep reading.`}
            />
            <CopyCard
              title="Birthday / Celebration Message"
              prompt={`Write a heartfelt [birthday / anniversary / graduation] message for [name], who is [relationship — e.g. my best friend of 10 years / my colleague / my mum].

Include:
- A specific memory or quality you admire
- A genuine wish for the next chapter
- A touch of humour if appropriate

Tone: [warm and sentimental / funny and light / short and sincere]
Length: around 80 words.`}
            />
            <CopyCard
              title="Children&apos;s Story Creator"
              prompt={`Write a short children&apos;s story (about 200 words) for a [age] year old. Theme: [e.g. sharing, bravery, being different]. Main character: a [animal or child] named [name].

Make it:
- Simple sentences
- A clear lesson at the end (but not preachy)
- Lots of sensory detail and fun action
- Dialogue between at least 2 characters`}
            />
          </div>
        </section>

        {/* Business Productivity Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#10A937] rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Business &amp; Productivity</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CopyCard
              title="Business Idea Validator"
              prompt={`I have this business idea: [describe your idea]. Play devil&apos;s advocate. Give me:
1. The 3 biggest risks or weaknesses in this idea
2. Who my real competition is (including indirect competition)
3. The one assumption I&apos;m probably making that needs testing first
4. A quick gut-check: does this have legs?

Be honest, not encouraging.`}
            />
            <CopyCard
              title="Email Subject Line Tester"
              prompt={`Write 8 email subject lines for an email about [email topic/offer]. My audience: [describe them].

Write variations across these styles:
- Curiosity gap (2 options)
- Direct benefit (2 options)
- Urgency or scarcity (2 options)
- Personal / question-based (2 options)

Mark which 2 you think will get the highest open rate and why.`}
            />
            <CopyCard
              title="Meeting Agenda Builder"
              prompt={`Create a 45-minute meeting agenda for a [type of meeting — e.g. team check-in, client presentation, project kickoff].

Purpose of the meeting: [state it clearly]
Number of attendees: [number]
Key outcomes needed: [list 2-3 decisions or outputs]

Format each agenda item with: time allocation, owner, and goal. End with a 5-minute action items review.`}
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              q="What is Meta AI and where can I use it?"
              a="Meta AI is an AI assistant built by Meta (the company behind Facebook, Instagram, and WhatsApp). You can access it directly inside Facebook, Instagram, WhatsApp, and Messenger, as well as through the standalone Meta AI app and website at meta.ai. It&apos;s powered by Meta&apos;s Llama models and is free to use across all platforms."
            />
            <FAQItem
              q="How does Meta AI compare to ChatGPT?"
              a="Meta AI is integrated directly into social platforms you already use, making it convenient for quick social media tasks like writing captions or replying to comments. ChatGPT tends to offer more depth for complex reasoning, coding, and document analysis. Meta AI is stronger for social-native use cases; ChatGPT is more versatile for professional and technical work."
            />
            <FAQItem
              q="Can Meta AI generate images?"
              a="Yes. Meta AI includes an image generation feature powered by Meta&apos;s Imagine tool. You can generate images directly inside Instagram, Facebook, and WhatsApp by asking Meta AI to create or reimagine images. The feature is available in supported regions."
            />
            <FAQItem
              q="How do I use Meta AI on WhatsApp?"
              a="On WhatsApp, you can chat with Meta AI by opening the Meta AI chat (found in the Chats tab) or by mentioning @MetaAI in a group chat. It can answer questions, help draft messages, summarise threads, and suggest replies. It does not read your private messages by default."
            />
            <FAQItem
              q="Is Meta AI free to use?"
              a="Yes, Meta AI is currently free to use across Facebook, Instagram, WhatsApp, and Messenger. There is no subscription or per-message fee. Meta has not announced a paid tier as of 2026, though premium features may be introduced in the future."
            />
            <FAQItem
              q="What are the best use cases for Meta AI on Instagram?"
              a="Meta AI on Instagram is particularly useful for writing captions, generating hashtag suggestions, brainstorming reel ideas, drafting DM replies, and editing bio copy. You can also use it to search for content inspiration and get post formatting suggestions directly in the app."
            />
            <FAQItem
              q="Can Meta AI help me grow my Facebook page?"
              a="Yes. Meta AI can help you brainstorm post ideas, write engaging copy, create polls, draft event descriptions, and reply to comments. For growth strategy, it can suggest content types that perform well with your audience and help you maintain consistent posting frequency."
            />
            <FAQItem
              q="Does Meta AI remember previous conversations?"
              a="Meta AI has some memory capabilities that allow it to remember information you share during a conversation. Across sessions, memory is limited depending on the platform and region. You can ask it to remember specific details, but do not share sensitive personal information in these conversations."
            />
            <FAQItem
              q="What language does Meta AI work best in?"
              a="Meta AI performs best in English but supports a growing number of languages. Spanish, Portuguese, French, and Hindi support has improved significantly. For best results in non-English languages, keep prompts clear and straightforward. Complex reasoning prompts work better in English currently."
            />
            <FAQItem
              q="How do I get better results from Meta AI prompts?"
              a="Be specific about context, audience, and format. Instead of &apos;write a post&apos;, say &apos;write a 100-word Facebook post for my bakery, targeting local families, promoting our new weekend brunch box.&apos; The more context you provide, the more useful the output will be. Ask for variations if the first result isn&apos;t quite right."
            />
          </div>
        </section>

        {/* Related Links */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Explore Related Prompts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/chatgpt-alternatives" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">ChatGPT Alternatives</h3>
              <p className="text-gray-400 mt-2">Compare all major AI assistants</p>
            </Link>
            <Link href="/grok-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Grok Prompts</h3>
              <p className="text-gray-400 mt-2">xAI&apos;s real-time reasoning assistant</p>
            </Link>
            <Link href="/gemini-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Gemini Prompts</h3>
              <p className="text-gray-400 mt-2">Google&apos;s multimodal AI assistant</p>
            </Link>
            <Link href="/social-media-marketing-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Social Media Marketing</h3>
              <p className="text-gray-400 mt-2">Content strategy &amp; engagement</p>
            </Link>
            <Link href="/ai-prompts-influencers" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Influencer Prompts</h3>
              <p className="text-gray-400 mt-2">Content creation for creators</p>
            </Link>
            <Link href="/claude-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Claude Prompts</h3>
              <p className="text-gray-400 mt-2">Anthropic&apos;s writing-focused AI</p>
            </Link>
            <Link href="/deepseek-ai-prompts" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">DeepSeek Prompts</h3>
              <p className="text-gray-400 mt-2">China&apos;s powerful open-source AI</p>
            </Link>
            <Link href="/ai-prompts-content-creators" className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#10A937] transition-colors group">
              <h3 className="font-bold text-white group-hover:text-[#10A937] transition-colors">Content Creator Prompts</h3>
              <p className="text-gray-400 mt-2">AI prompts for digital creators</p>
            </Link>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Meta AI Prompts 2026: 60+ Copy-Paste Prompts for Facebook, Instagram & WhatsApp',
        description: '60+ copy-paste Meta AI prompts for everyday tasks, social media, creative writing, and business. Works across Facebook, Instagram, WhatsApp, and Meta AI app.',
        datePublished: '2026-03-30',
        dateModified: '2026-03-30',
        author: { '@type': 'Organization', name: 'GPTPrompts.AI' }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is Meta AI and where can I use it?', acceptedAnswer: { '@type': 'Answer', text: 'Meta AI is an AI assistant built by Meta, accessible inside Facebook, Instagram, WhatsApp, Messenger, and at meta.ai. It is free to use and powered by Meta\'s Llama models.' } },
          { '@type': 'Question', name: 'How does Meta AI compare to ChatGPT?', acceptedAnswer: { '@type': 'Answer', text: 'Meta AI is integrated into social platforms and excels at social-native tasks like captions and replies. ChatGPT offers more depth for complex reasoning and professional work.' } },
          { '@type': 'Question', name: 'Is Meta AI free to use?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Meta AI is currently free across Facebook, Instagram, WhatsApp, and Messenger with no subscription fee.' } }
        ]
      })}} />
    </div>
  )
}
