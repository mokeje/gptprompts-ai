'use client';

import { useState } from 'react';
import { Copy, Check, Camera, Image, Aperture, Sun, Users, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const ACCENT = '#D946EF';

function CopyCard({ title, prompt, tag }: { title: string; prompt: string; tag: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#D946EF] transition-colors">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-white font-semibold text-lg flex-1">{title}</h3>
        <span className="text-xs bg-[#D946EF]/10 text-[#D946EF] px-2 py-1 rounded whitespace-nowrap">{tag}</span>
      </div>
      <pre className="text-gray-400 text-sm mb-4 leading-relaxed whitespace-pre-wrap font-sans">{prompt}</pre>
      <button
        onClick={() => { navigator.clipboard.writeText(prompt); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
        className="flex items-center gap-2 text-[#D946EF] hover:text-[#D946EF]/80 text-sm transition-colors"
      >
        {copied ? <><Check size={16} /><span>Copied!</span></> : <><Copy size={16} /><span>Copy prompt</span></>}
      </button>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#333] py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between text-left hover:text-[#D946EF] transition-colors">
        <span className="text-white font-medium pr-4">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-[#D946EF] shrink-0" /> : <ChevronDown size={20} className="shrink-0" />}
      </button>
      {isOpen && <p className="text-gray-400 mt-3 text-sm leading-relaxed">{answer}</p>}
    </div>
  );
}

const sections = [
  {
    title: 'Photo Editing & Post-Processing',
    icon: Image,
    prompts: [
      {
        title: 'AI-Assisted Color Grading Guide',
        tag: 'Editing',
        prompt: `Create a detailed color grading guide for portrait photography.

Include:
- Specific color temperature adjustments (warm vs cool looks)
- Saturation and vibrance levels for skin tones
- HSL slider settings for a warm, professional portrait look
- How to handle mixed lighting situations
- Lightroom vs Capture One approach comparison

Explain the reasoning behind each adjustment so I can adapt it to different conditions.`,
      },
      {
        title: 'Batch Editing Workflow',
        tag: 'Workflow',
        prompt: `Design an efficient batch editing workflow for [500 / wedding / event] photos using Adobe Lightroom.

Include:
- Preset application strategy (global vs selective)
- Exposure and white balance correction approach
- Local adjustment priorities (sky, skin, shadows)
- How to handle outlier shots that need manual attention
- A time estimate per 100 photos for each stage

Provide step-by-step instructions I can follow as a checklist.`,
      },
      {
        title: 'Portrait Retouching Instructions',
        tag: 'Retouching',
        prompt: `Generate detailed retouching instructions for portrait photography covering:

1. Skin smoothing — frequency separation technique, recommended settings
2. Blemish and spot removal — clone stamp vs healing brush guidance
3. Eye enhancement — whites brightening, iris detail, catch light placement
4. Teeth whitening — natural vs overcooked results, H&S mask approach
5. Hair detail preservation — avoiding halo artifacts
6. Final sharpening and export settings

Give specific tool names and settings for Photoshop and Lightroom.`,
      },
      {
        title: 'Editing Style Consistency Prompt',
        tag: 'Style',
        prompt: `I want to develop a consistent, signature editing style for my [portrait / wedding / lifestyle] photography.

Help me create a style guide that includes:
1. 3 reference photographer styles I can study and blend from
2. Core tonal decisions: bright & airy, dark & moody, film-inspired, or documentary
3. Which Lightroom/Capture One sliders define my chosen look
4. How to translate my style into a preset I can apply consistently
5. How to adapt my base preset for: outdoor daylight, indoor artificial light, overcast, golden hour

Return as a style guide document I can save and reference.`,
      },
    ],
  },
  {
    title: 'Client Communication & Management',
    icon: Users,
    prompts: [
      {
        title: 'Client Onboarding Email',
        tag: 'Communication',
        prompt: `Write a warm, professional client onboarding email for an upcoming [portrait / wedding / headshot] photography session.

Include:
- Session overview and what to expect
- What to wear (colours to avoid, outfit options)
- Timing, location, and parking details
- What happens after the shoot (editing timeline, gallery delivery)
- How to get in touch if they have questions

Tone: friendly and reassuring — clients should feel excited, not anxious.`,
      },
      {
        title: 'Photo Selection Guidance',
        tag: 'Client Management',
        prompt: `Create a step-by-step guide for helping clients select their favourite photos from a shoot.

The guide should cover:
1. How to evaluate technical quality vs emotional impact
2. How to choose a balanced mix of poses and expressions
3. How to narrow 300 photos down to 50 favourites without overwhelm
4. Common mistakes clients make when selecting (choosing technically perfect but emotionally flat shots)
5. How to explain print vs digital priorities to clients who are unsure

Write it so I can share this directly with clients as a PDF one-pager.`,
      },
      {
        title: 'Package & Pricing Descriptions',
        tag: 'Sales',
        prompt: `Write clear, compelling descriptions for three photography packages: Basic, Standard, and Premium.

For each package, explain:
- Exactly what is included (session length, number of edited images, file formats)
- Turnaround time (standard and rush options)
- Print and album options
- What type of client each package is best suited for
- The core value proposition in one sentence

Make the upgrade from Basic to Standard feel obvious and worthwhile. Avoid photography jargon.`,
      },
      {
        title: 'Client Testimonial Request Email',
        tag: 'Reviews',
        prompt: `Write a short, warm email asking a happy photography client for a review or testimonial.

The email should:
- Be sent 1-2 weeks after gallery delivery
- Thank them genuinely without being over the top
- Make it easy by suggesting 3-4 questions they can answer
- Offer a choice of where to leave the review (Google / website / social)
- Be under 150 words total

Questions to suggest:
1. What made you choose to book a session?
2. What was the experience like on the day?
3. How did you feel when you saw your photos?
4. Who would you recommend this to?`,
      },
    ],
  },
  {
    title: 'Portfolio & Website',
    icon: Camera,
    prompts: [
      {
        title: 'Portfolio Curation Strategy',
        tag: 'Portfolio',
        prompt: `Help me build a photography portfolio curation strategy that attracts my ideal clients.

My specialty: [portrait / wedding / commercial / headshot / newborn]
My target client: [describe who you want to attract]
Current portfolio size: [number of photos across categories]

Tell me:
1. How many photos to include total and per category
2. How to sequence photos to tell a story (emotion, variety, technical range)
3. How to highlight my unique style in the first 5 images
4. Which types of shots to remove even if technically strong
5. How to refresh the portfolio every 6 months without starting from scratch`,
      },
      {
        title: 'Services Page Website Copy',
        tag: 'Website',
        prompt: `Write engaging website copy for my [photography type] services page.

My target client: [describe them]
My unique approach or style: [describe briefly]
Location I serve: [city / region]

Write:
1. A compelling headline (benefit-led, not "Welcome to my photography")
2. A 3-sentence description that captures what makes my work different
3. Descriptions for each of my 3 service types (2-3 sentences each)
4. A clear call-to-action at the bottom (book a call / enquire / see gallery)
5. One client quote placeholder in the right style

Tone: warm, confident, and clear. No corporate fluff.`,
      },
      {
        title: 'About Page Story Draft',
        tag: 'About',
        prompt: `Draft an authentic About page for my photography website that connects with potential clients.

My background: [how you got into photography]
What I specialise in: [type of photography]
My approach: [what's different about how you work with clients]
A key achievement or memorable shoot: [describe briefly]

Write:
1. An opening line that is specific and personal (not "I have always loved photography")
2. 2-3 paragraphs covering journey, approach, and values
3. A line about what clients say or feel after working with me
4. A closing invitation to connect
5. Target length: 300-400 words

Tone: genuine, personal, and approachable.`,
      },
      {
        title: 'SEO Meta Description & Title Tags',
        tag: 'SEO',
        prompt: `Write SEO-optimised title tags and meta descriptions for these photography website pages:

1. Homepage
2. Portrait photography services page
3. Wedding photography page
4. Headshots / professional portraits page
5. About page
6. Contact / booking page

For each page:
- Title tag (under 60 characters, include primary keyword + location)
- Meta description (under 155 characters, include a benefit and a CTA)
- One suggested alt text format for my hero image

My location: [city or region]
My primary keyword focus: [e.g. "portrait photographer in [city]"]`,
      },
    ],
  },
  {
    title: 'Marketing & Social Media',
    icon: Sun,
    prompts: [
      {
        title: 'Instagram Caption Templates',
        tag: 'Social Media',
        prompt: `Create 10 engaging Instagram caption templates for different types of photography posts.

For each template, write a fill-in-the-blank version and a complete example. Cover:
1. Behind-the-scenes on location
2. Before/after editing reveal
3. Client story and reaction
4. Photography tip or creative insight
5. Work-in-progress sneak peek
6. Seasonal or themed shoot
7. Equipment or tool recommendation
8. Personal reflection on why you shoot
9. Engagement question for the audience
10. New booking availability announcement

Include 10-15 relevant hashtags at the end of each template.`,
      },
      {
        title: '4-Week Content Calendar',
        tag: 'Marketing',
        prompt: `Design a 4-week social media content calendar for my photography business.

My platforms: [Instagram / Facebook / TikTok / Pinterest — choose]
My niche: [portrait / wedding / commercial / etc.]
My business goal for this month: [bookings / brand awareness / growing following]

For each week, plan:
- 3 feed posts (type, theme, caption angle)
- 2 Stories ideas
- 1 Reel or short-form video concept
- 1 engagement tactic (question, poll, challenge)

Include hashtag strategy and the best posting times for my niche.`,
      },
      {
        title: 'Email Newsletter Series',
        tag: 'Email',
        prompt: `Plan a 6-email newsletter series for my photography business to stay top of mind with past and potential clients.

My audience: [past clients, local businesses, parents of young children — choose]
My goal: [drive repeat bookings / seasonal promotion / referrals]

Design 6 emails:
Email 1: Year in review or seasonal opening (relationship building)
Email 2: Photography tip that helps clients get the most from their photos
Email 3: Behind-the-scenes story from a recent session
Email 4: Client spotlight or before/after reveal
Email 5: Limited availability announcement or seasonal offer
Email 6: Ask for referrals or a review

For each: subject line (3 options), main hook, and CTA.`,
      },
      {
        title: 'Referral & Word-of-Mouth Programme',
        tag: 'Growth',
        prompt: `Design a referral programme for my photography business that encourages happy clients to recommend me.

My average booking value: [£/$ amount]
My main service: [portrait sessions / weddings / headshots]
How many bookings I need per month: [number]

Create a referral programme including:
1. A simple incentive structure (what I offer the referrer and the new client)
2. The exact email or message I send to past clients to launch it
3. A social post they can share if they want to promote me
4. A follow-up sequence: when to remind clients they can refer
5. How to track referrals without complex software

Keep it easy to manage as a solo photographer.`,
      },
    ],
  },
  {
    title: 'Business Operations',
    icon: Aperture,
    prompts: [
      {
        title: 'Pricing Structure Design',
        tag: 'Pricing',
        prompt: `Help me design a sustainable pricing structure for my photography business.

My specialty: [type of photography]
My experience level: [beginner / established / veteran]
My target market: [consumer / professional / commercial]
My local market: [city / region and typical local rates if known]
My costs per session (rough): [editing time, travel, software, gear depreciation]

Design a pricing structure that:
1. Covers costs and generates a target hourly rate of £/$ [amount]
2. Includes 3 tiered packages with clear upgrade value
3. Prices print products and albums as add-ons
4. Includes a rush fee policy
5. Allows me to raise prices without losing existing clients`,
      },
      {
        title: 'Gallery Delivery Process',
        tag: 'Operations',
        prompt: `Create a step-by-step delivery process for professional photos from session to client download.

Include:
1. Initial cull and selection (timeframe + tool recommendation)
2. Editing workflow and quality control checkpoint
3. Gallery preparation and upload (Pic-Time / Shootproof / other)
4. Client notification email template
5. Download instructions for non-technical clients
6. Follow-up after delivery (review request, print upsell, referral ask)
7. File archiving and backup policy

Format as a numbered checklist I can follow for every session.`,
      },
      {
        title: 'Photography Contract Essentials',
        tag: 'Legal',
        prompt: `List the 12 most important clauses to include in a photography client contract.

For each clause:
1. Explain why it protects me as the photographer
2. Explain why it benefits the client (transparency and trust)
3. Provide a plain-English example of the clause wording

Cover: payment schedule and deposits, cancellation policy, rescheduling, usage rights and licensing, model release, delivery timeline, force majeure, liability limits, complaint resolution, and social media usage.

Flag the 3 clauses photographers most often leave out and why they cause problems.`,
      },
      {
        title: 'Client Experience Audit',
        tag: 'Quality',
        prompt: `Help me audit and improve my client experience from first enquiry to gallery delivery.

My current process:
1. Enquiry stage: [describe how you handle new leads]
2. Booking stage: [contract, deposit, confirmation process]
3. Pre-session: [what communication clients receive]
4. Session day: [how you manage the shoot itself]
5. Post-session: [editing, gallery, delivery]

Identify the 3 most likely friction points where clients feel uncertain or under-informed.

For each friction point:
- Describe the client's likely feeling at that stage
- Suggest one communication improvement (email, video, PDF guide)
- Provide a template or script to implement the improvement immediately`,
      },
    ],
  },
];

const faqs = [
  { question: 'How can AI help me improve my photo editing workflow?', answer: 'AI can assist with batch editing suggestions, color grading guidance, automated retouching instructions, and preset recommendations. It saves hours of manual decision-making while helping you maintain a consistent quality standard. The key is using AI for the systematic parts of editing so you can focus your creative energy on the shots that need individual attention.' },
  { question: 'Can AI generate photography ideas or shot lists?', answer: 'Yes, AI can create comprehensive shot lists for different photography types — weddings, portraits, events, commercial. It can suggest creative angles, lighting setups, poses, and themes tailored to your client and location. Use these as a structured starting point, then adapt them to your creative vision and the specific client in front of you.' },
  { question: 'What is the best way to use AI for client communication?', answer: 'AI excels at drafting client onboarding emails, package descriptions, follow-up messages, and review requests. It ensures professional, thorough communication while saving significant time. The most effective approach is to generate a solid draft with AI, then personalise it with specific details about the client, session, or location before sending.' },
  { question: 'How can AI help me grow my photography business?', answer: 'AI can help with content planning, Instagram captions, website copy, email newsletters, and referral programme design. It can also assist with pricing strategy, client experience audits, and identifying what marketing is working. Use AI for the planning and writing layer so you can spend more time shooting and building client relationships.' },
  { question: 'Can AI replace human editing skills or creative decisions?', answer: 'No. AI is a tool to enhance efficiency and structure your thinking — not to replace your creative eye. Your understanding of light, composition, emotion, and client relationships is irreplaceable. Use AI for the repetitive parts of your workflow (batch edit instructions, email templates, caption drafts) so you can invest your creative energy where it matters most.' },
  { question: 'How do I maintain my unique editing style when using AI tools?', answer: 'Describe your signature style clearly in your prompts — reference photographers you admire, specific Lightroom settings you use, and the emotional tone you aim for. The more specific you are, the more useful the AI output. Your presets, colour preferences, and composition instincts define your style; AI just helps you articulate and systematise them.' },
  { question: 'What are the ethical considerations of using AI in photography?', answer: 'Key considerations include transparency with clients about AI-assisted editing, ensuring any AI-generated concept images are clearly labelled, and not using AI to misrepresent your work or portfolio. Be honest about your process, respect copyright on any reference images used in prompts, and always prioritise your client\'s vision over what AI suggests.' },
  { question: 'How can AI help me manage my photography business finances?', answer: 'AI can help you build pricing structures, design package tiers, write invoice templates, and think through profitability per session type. It can suggest pricing based on your market and experience level and help you model what raising prices would mean for your bookings. For actual tax and accounting, combine AI insights with professional guidance.' },
  { question: 'Can AI tools help me build a stronger portfolio?', answer: 'Yes. AI can help you create a curation strategy — identifying the right number of photos, the best mix of styles and subjects, and how to sequence your portfolio to tell a story. It can also write compelling portfolio descriptions and services page copy that speaks directly to your ideal client\'s needs and emotions.' },
  { question: 'How do I choose which AI tools to invest in for photography?', answer: 'Evaluate tools based on your specific workflow bottlenecks. For editing guidance, ChatGPT and Claude are useful for instruction and strategy. For actual AI editing, Lightroom AI Masking, Luminar Neo, or Topaz tools add real value. Start with one tool, test it on real projects for 30 days, and only add more if you identify a clear gap it fills.' },
];

export default function PhotographersPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI Prompts for Photographers 2026: 60+ Copy-Paste Templates',
    description: 'Get 60+ copy-paste AI prompts for photographers. Expert templates for photo editing, client communication, portfolio building, social media marketing, and business operations.',
    datePublished: '2026-03-30',
    image: 'https://gptprompts.ai/og-image.png',
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />

      {/* Hero */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-[#D946EF]/10 text-[#D946EF] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Photographer Prompts 2026
        </div>
        <h1 className="text-5xl font-bold mb-6 text-[#D946EF]">AI Prompts for Photographers</h1>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
          60+ copy-paste AI prompts to streamline your workflow, delight your clients, and scale your photography business. Expert templates for editing, client communication, portfolio building, marketing, and operations.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[['60+', 'Copy-Paste Prompts'], ['5', 'Workflow Categories'], ['10', 'FAQ Answers']].map(([num, label]) => (
            <div key={label} className="bg-[#1a1a1a] border border-[#D946EF]/30 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-[#D946EF]">{num}</p>
              <p className="text-sm text-gray-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, idx) => {
        const Icon = section.icon;
        return (
          <section key={idx} className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Icon size={32} style={{color: ACCENT}} />
              <h2 className="text-3xl font-bold text-white">{section.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {section.prompts.map((prompt, pidx) => (
                <CopyCard key={pidx} title={prompt.title} prompt={prompt.prompt} tag={prompt.tag} />
              ))}
            </div>
          </section>
        );
      })}

      {/* FAQ */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
        <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-8">
          {faqs.map((faq, idx) => (
            <FAQ key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">More Prompt Collections for Creatives</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/dalle-3-guide', label: 'DALL-E 3 Prompts', color: '#6366f1', desc: 'AI image generation prompts for every style' },
            { href: '/midjourney-prompts', label: 'Midjourney Prompts', color: '#a855f7', desc: 'Expert prompts for stunning Midjourney images' },
            { href: '/ai-prompts-for-ux-designers', label: 'UX Designer Prompts', color: '#8B5CF6', desc: 'Research, wireframing, and design system prompts' },
            { href: '/social-media-marketing-prompts', label: 'Social Media Marketing', color: '#ec4899', desc: 'Content calendars, captions, and growth strategy' },
          ].map((r) => (
            <Link key={r.href} href={r.href} className="group bg-[#1a1a1a] border border-[#333] rounded-lg p-5 hover:border-[#D946EF] transition-colors">
              <h3 className="text-white font-semibold mb-2 group-hover:text-[#D946EF] transition-colors">{r.label}</h3>
              <p className="text-gray-400 text-sm">{r.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
