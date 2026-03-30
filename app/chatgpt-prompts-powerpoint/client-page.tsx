'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Link from 'next/link';

export default function PowerPointPromptsPage() {
  const CopyCard = ({ prompt }: { prompt: string }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4">
        <p className="text-gray-200 text-sm mb-3 leading-relaxed">{prompt}</p>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-orange-600 hover:text-orange-500 transition-colors text-sm"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    );
  };

  const FAQAccordion = ({ items }: { items: Array<{ q: string; a: string }> }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-4 py-3 bg-gray-900 text-left text-gray-100 font-medium flex justify-between items-center hover:bg-gray-800 transition-colors"
            >
              <span>{item.q}</span>
              <span className="text-orange-600">{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className="px-4 py-3 bg-gray-950 text-gray-300 text-sm border-t border-gray-700">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const structureAndOutline = [
    "Create a compelling presentation outline for [topic] targeting [audience]. I need: an executive summary, 3-5 main sections with key talking points, supporting data or examples, and a strong closing call-to-action. Format as a slide-by-slide breakdown.",
    "I have [X slides] to present [topic]. Help me create a narrative arc that engages the audience, builds tension, and delivers a memorable conclusion. What's the optimal flow, and how should I structure transitions between sections?",
    "Design a presentation for [decision/approval scenario]. I need to persuade [specific audience] to [specific outcome]. What's the best structure, what objections should I anticipate, and how should I sequence my evidence?",
    "Create a 10-minute pitch deck for [business idea/product]. I need: problem statement, solution, market opportunity, business model, traction/milestones, ask, and team. What data points matter most for this audience?",
    "I'm presenting quarterly results to [board/investors/leadership]. Help me structure the narrative: which metrics matter most, how should I frame challenges vs opportunities, and what's the ideal slide sequence?",
    "Build a training or educational presentation on [topic] for [skill level]. I need: learning objectives, key concepts broken into digestible chunks, real-world examples, practice exercises, and a summary. How should I space content across [N] slides?"
  ];

  const designAndVisuals = [
    "My presentation has [description of current design]. Help me redesign it for maximum impact. What visual hierarchy, color scheme, typography, and imagery would work best? Create a specific style guide I can follow.",
    "Create a visual metaphor for [concept] that I can use consistently throughout my presentation. I want something that's memorable, intuitive, and works across [N] slides. What elements should I include?",
    "I need [N] data visualizations for: [list of data points]. For each, recommend the best chart type (bar, line, pie, etc.), explain why, and describe how to design it for clarity and impact. Include specific labeling guidance.",
    "Design an infographic explaining [process/workflow/concept] for [audience type]. What's the best layout, what icons or illustrations would clarify it, and how should I break down the information sequentially?",
    "My slides feel cluttered and text-heavy. Help me redesign them using the 'rule of thirds' and visual-first approach. What should stay as visuals, what should become spoken narrative, and how should I structure the slide deck?",
    "Create a cohesive visual identity for my presentation: color palette (with hex codes), typography guidelines, icon style, and template structure. I want consistency across [N] slides while keeping it modern and professional."
  ];

  const storytellingAndNarrative = [
    "Help me craft the opening 60 seconds of my presentation. I need a hook that captures attention for [audience], establishes relevance, and sets up the problem I'm solving. What's the most compelling way to start?",
    "I'm presenting [topic] to a skeptical audience. Help me build a narrative that addresses their concerns head-on. What's the best sequence: acknowledge objections first, or present evidence then address concerns?",
    "Design a presentation narrative that moves the audience from [current state] to [desired belief/action]. What's the emotional arc, what evidence should I lead with, and how should I close to drive commitment?",
    "Create a 'story spine' for my presentation on [topic]. I need: the situation, complication, resolution, and call-to-action structured as a compelling narrative. How should I distribute this across [N] slides?",
    "Help me weave [multiple data points/case studies] into a cohesive narrative rather than a list. What's the unifying theme, how should I sequence them for maximum impact, and how do I tie them to my call-to-action?",
    "I'm presenting alongside [number] speakers on [topic]. Help me create a narrative that positions my segment strategically within the broader flow. How should my opening reference previous speakers? How should I close to set up the next person?"
  ];

  const deliveryAndInteraction = [
    "I'm presenting to [audience type] for [duration]. Help me build in interaction: where should I pause for questions, what discussion prompts should I use, and how do I keep energy high without losing control?",
    "Design a Q&A strategy for my presentation. What are the likely tough questions about [topic]? How should I structure my answers? What's my fallback if I don't know something?",
    "I'm nervous about presenting [topic] to [audience]. Help me prepare: what's my core message in one sentence, what are my top 3 talking points, what are the most likely questions, and how do I handle silence or tough feedback?",
    "Create a live demo / walkthrough component for my presentation. I'm showing [product/process]. What's the narrative setup, how do I handle failures gracefully, and how do I tie the demo back to my main message?",
    "I have [X minutes] to present to [high-stakes audience]. Help me craft a delivery strategy: pacing, where to pause for impact, how to read the room, and how to adapt on the fly if I'm running short or long.",
    "Design a presentation 'notes page' for my speaker support. For each major section, I need: key talking points (bullet format), timing, audience cues (when to pause, ask questions, advance), and contingency talking points if I need to fill time."
  ];

  const advancedTechniquesAndTools = [
    "I'm using [specific tool: PowerPoint/Keynote/Google Slides] and want to maximize interactivity. Help me build in: animations that enhance (not distract), transitions that feel natural, and interactive elements that engage the audience. What should I avoid?",
    "Create a presentation with embedded video, audio, or interactive elements. I need to: [specific goal]. Help me structure it so the media supports the narrative and doesn't overshadow my message.",
    "I want to use data storytelling techniques (like those from Cole Nussbaumer Knaflic). Help me take [dataset] and design a presentation that reveals insights progressively, building understanding from slide to slide.",
    "Design a 'branching narrative' presentation where I can adapt based on audience response. I have [core message] and [different paths] depending on audience interests. How do I structure this without seeming disorganized?",
    "I'm creating a presentation that will be [live vs pre-recorded vs self-paced]. Help me optimize for that format: what works differently for each, what should I change about my structure/pacing/interactivity?",
    "Help me analyze competitor/industry presentations on [topic]. What makes them effective? What's the structure, visual style, pacing, and narrative arc? How can I create something that stands out?"
  ];

  const faqItems = [
    {
      q: "How many slides should my presentation have?",
      a: "There's no magic number, but aim for 1 slide per minute of presentation. A 20-minute presentation typically works best with 15-25 slides (accounting for pauses, questions, and complex explanations). Focus on clarity and pacing rather than slide count — a 10-slide deck can be more powerful than 50 if each slide serves a purpose."
    },
    {
      q: "What's the ideal font size and style for presentations?",
      a: "Use fonts that are sans-serif (Arial, Helvetica, or modern alternatives like Inter or Montserrat) for on-screen readability. Minimum font size should be 24pt for body text and 40pt+ for headers, so people in the back can read comfortably. Avoid more than 2-3 font families per presentation — consistency matters."
    },
    {
      q: "How do I handle notes and speaker support during a presentation?",
      a: "Use speaker notes or notes pages to guide yourself, not to script every word. Include: key talking points (not full sentences), timing cues, transitions, and reminders for emphasis. Practice enough that you're comfortable with the content — reading verbatim from notes kills engagement."
    },
    {
      q: "What's the best way to present data and statistics?",
      a: "Lead with insight, not data. Show the visualization first, explain the story it tells, then cite the numbers. Use contrasting colors to highlight the key data point. Avoid cluttering slides with excessive tables — if you need to show detailed data, include it in notes or handouts."
    },
    {
      q: "How do I keep an audience engaged during a long presentation?",
      a: "Vary your format: mix slides with stories, data with visuals, explanation with questions. Build in interaction every 5-10 minutes — ask a question, invite discussion, include a poll, or shift to a demo. Change your physical position, modulate your voice, and use pauses for effect."
    },
    {
      q: "Should I use animations and transitions?",
      a: "Use animations sparingly and only if they serve the narrative. A simple slide transition (fade or wipe) can feel polished; bouncing text or spinning graphics feel unprofessional. Animations work well for revealing data progressively (bar chart grows, numbers appear one by one) — this helps control pacing and understanding."
    },
    {
      q: "How do I present to a remote/virtual audience?",
      a: "Adjust for smaller screens: larger fonts, simpler visuals, fewer words per slide. Use the camera positioning so people see you and your slides together. Engage more frequently with remote audiences (polls, Q&A, chat interaction) since they're more likely to disengage. Test audio, lighting, and screen sharing beforehand."
    },
    {
      q: "What's the difference between slides for live delivery vs. slides meant to be read on their own?",
      a: "Live delivery slides should be visual-heavy with fewer words — you'll provide the narrative. Standalone slides (sent via email or published) need more text and context because there's no speaker. You can create both from the same deck by including detailed notes pages for the latter."
    },
    {
      q: "How do I structure a presentation that needs to persuade or influence a decision?",
      a: "Open with the problem or opportunity (not your solution). Build credibility and trust by showing evidence, data, or case studies. Present your solution as the logical answer, not as self-promotion. Close with a clear ask and specific next steps. End with 'What questions do you have?' to invite engagement."
    },
    {
      q: "What should I do if I make a mistake during the presentation?",
      a: "Don't apologize or draw attention to it. Correct it naturally and move forward. Most audiences won't notice small errors. For significant mistakes (wrong data, misstatement), acknowledge briefly, correct it, and move on. Confidence and poise matter more than perfection — your composure sets the tone."
    }
  ];

  const relatedPages = [
    { title: "ChatGPT Prompts for Coding Interviews", path: "/chatgpt-prompts-coding-interviews" },
    { title: "AI Prompts for Supply Chain & Logistics", path: "/ai-prompts-supply-chain" },
    { title: "AI Prompts for Data Analysis", path: "/ai-prompts-data-analysis" },
    { title: "Manus AI Prompts", path: "/manus-ai-prompts" },
    { title: "AI Prompts for Marketing Strategy", path: "/ai-prompts-marketing-strategy" },
    { title: "AI Prompts for Notion Workspace", path: "/ai-prompts-notion" },
    { title: "AI Prompts for Business Planning", path: "/ai-prompts-business-planning" },
    { title: "ChatGPT Prompts for Content Writing", path: "/chatgpt-prompts-content-writing" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ChatGPT Prompts for PowerPoint Presentations",
    "description": "Master presentation design, storytelling, and delivery with targeted ChatGPT prompts. Create compelling decks for pitches, training, and persuasion.",
    "image": "https://gptprompts.ai/og-powerpoint.jpg",
    "author": {
      "@type": "Organization",
      "name": "GPT Prompts"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GPT Prompts",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gptprompts.ai/logo.png"
      }
    },
    "datePublished": "2024-01-15"
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">ChatGPT Prompts for PowerPoint Presentations</h1>
          <p className="text-gray-400 text-lg">
            Create compelling decks, master visual design, and deliver with impact using targeted AI prompts for structure, storytelling, and delivery.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
              Presentation Structure & Outline
            </h2>
            <div className="space-y-4">
              {structureAndOutline.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
              Design & Visual Strategy
            </h2>
            <div className="space-y-4">
              {designAndVisuals.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
              Storytelling & Narrative Arc
            </h2>
            <div className="space-y-4">
              {storytellingAndNarrative.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
              Delivery & Audience Interaction
            </h2>
            <div className="space-y-4">
              {deliveryAndInteraction.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
              Advanced Techniques & Tools
            </h2>
            <div className="space-y-4">
              {advancedTechniquesAndTools.map((prompt, idx) => (
                <CopyCard key={idx} prompt={prompt} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedPages.map((page, idx) => (
                <Link
                  key={idx}
                  href={page.path}
                  className="block bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-orange-600 hover:bg-gray-800 transition-colors"
                >
                  <span className="text-orange-600 font-medium">{page.title}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
