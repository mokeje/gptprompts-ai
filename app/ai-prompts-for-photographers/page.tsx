'use client';

import { useState } from 'react';
import { Copy, Check, Camera, Image, Aperture, Sun, Users, ChevronDown, ChevronUp } from 'lucide-react';

export default function PhotographersPage() {
  const accentColor = '#D946EF';

  const CopyCard = ({ title, prompt, tag }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
      navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    return (
      <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#D946EF] transition-colors">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-white font-semibold text-lg flex-1">{title}</h3>
          <span className="text-xs bg-[#D946EF]/10 text-[#D946EF] px-2 py-1 rounded whitespace-nowrap">{tag}</span>
        </div>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{prompt}</p>
        <button onClick={handleCopy} className="flex items-center gap-2 text-[#D946EF] hover:text-[#D946EF]/80 text-sm transition-colors">
          {copied ? (
            <>
              <Check size={16} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copy prompt</span>
            </>
          )}
        </button>
      </div>
    );
  };

  const FAQ = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b border-[#333] py-4">
        <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between text-left hover:text-[#D946EF] transition-colors">
          <span className="text-white font-medium">{question}</span>
          {isOpen ? <ChevronUp size={20} className="text-[#D946EF]" /> : <ChevronDown size={20} />}
        </button>
        {isOpen && <p className="text-gray-400 mt-3 text-sm leading-relaxed">{answer}</p>}
      </div>
    );
  };

  const sections = [
    {
      title: 'Photo Editing & Post-Processing',
      icon: Image,
      prompts: [
        { title: 'AI-Assisted Color Grading', prompt: 'Create a color grading guide for portrait photography. Include specific color temperature adjustments, saturation levels, and HSL slider settings to achieve a warm, professional look. Explain the reasoning behind each adjustment.', tag: 'Editing' },
        { title: 'Batch Editing Workflow', prompt: 'Design an efficient batch editing workflow for 500 wedding photos using Adobe Lightroom. Include presets, exposure corrections, white balance adjustments, and local adjustments for skin tones. Provide step-by-step instructions.', tag: 'Workflow' },
        { title: 'Retouching Prompts', prompt: 'Generate detailed retouching instructions for portrait photography, including: skin smoothing techniques, blemish removal, eye enhancement, teeth whitening, and hair detail preservation. Use specific tool recommendations for Photoshop.', tag: 'Retouching' },
      ],
    },
    {
      title: 'Client Communication & Management',
      icon: Users,
      prompts: [
        { title: 'Client Onboarding Email', prompt: 'Write a comprehensive client onboarding email for a photography session. Include: session overview, preparation tips, what to wear, timing details, parking information, and post-session timeline. Keep it warm but professional.', tag: 'Communication' },
        { title: 'Photo Selection Guidance', prompt: 'Create a guide for helping clients select the best photos from a shoot. Include: tips for evaluating technical quality, emotional impact, composition, and diversity of poses. Suggest a process for narrowing down 300 photos to 50 favorites.', tag: 'Client Management' },
        { title: 'Pricing & Package Explanation', prompt: 'Develop clear, compelling descriptions for three photography packages (Basic, Standard, Premium). For each, explain: what&apos;s included, image count, turnaround time, and print options. Make the value proposition obvious.', tag: 'Sales' },
      ],
    },
    {
      title: 'Portfolio & Website',
      icon: Camera,
      prompts: [
        { title: 'Portfolio Curation Strategy', prompt: 'Create a strategy for curating a photography portfolio that attracts ideal clients. Include: how many photos to showcase, how to organize by category, how to tell a story with your best work, and how to highlight your unique style and specialties.', tag: 'Portfolio' },
        { title: 'Website Copy for Services', prompt: 'Write engaging website copy for a portrait photography service page. Include: a compelling headline, service description, benefits of professional portraits, client testimonial hooks, and a clear call-to-action. Aim for 200-300 words.', tag: 'Website' },
        { title: 'About Page Narrative', prompt: 'Draft an authentic About page for a photographer&apos;s website. Include: your journey into photography, what makes your style unique, your approach to client relationships, key accomplishments, and an invitation to work together. Aim for 300-400 words.', tag: 'About' },
      ],
    },
    {
      title: 'Marketing & Social Media',
      icon: Sun,
      prompts: [
        { title: 'Instagram Caption Strategy', prompt: 'Create 10 engaging Instagram caption templates for photography content. Include: behind-the-scenes posts, before/after edits, client stories, photography tips, and work-in-progress updates. Use relevant hashtags and include a call-to-action for each.', tag: 'Social Media' },
        { title: 'Content Calendar Planning', prompt: 'Design a 4-week social media content calendar for a photographer. Include: daily post themes, content types (photos, reels, stories, carousels), hashtag strategy, engagement tactics, and promotional opportunities. Specify which platforms to focus on.', tag: 'Marketing' },
        { title: 'Email Newsletter Series', prompt: 'Plan a 6-email newsletter series for photographers to nurture leads. Include: email topics, key messages, calls-to-action, and a schedule. Examples: photography tips, seasonal promotions, client success stories, behind-the-scenes, and booking reminders.', tag: 'Email' },
      ],
    },
    {
      title: 'Business Operations',
      icon: Aperture,
      prompts: [
        { title: 'Pricing Calculator', prompt: 'Design a pricing structure for portrait photography based on: session type (individual, family, headshots), turnaround time (standard or rush), print options, and additional services (drone photography, album design). Provide calculation examples for different packages.', tag: 'Pricing' },
        { title: 'Delivery Process Template', prompt: 'Create a step-by-step delivery process for professional photos: editing timeline, file preparation, download link setup, format options, and post-delivery follow-up. Include timing for each step and quality assurance checkpoints.', tag: 'Operations' },
        { title: 'Client Contract Essentials', prompt: 'List the 10 most critical elements that should be included in a photography contract. For each, explain why it&apos;s important and provide example language. Cover: payment terms, cancellation policy, usage rights, and deliverables.', tag: 'Legal' },
      ],
    },
  ];

  const faqs = [
    { question: 'How can AI help me improve my photo editing workflow?', answer: 'AI can assist with batch editing, color grading suggestions, automated retouching, and preset recommendations. Tools like AI upscalers can enhance image quality, and AI-powered software can analyze compositions to suggest improvements. This saves hours of manual editing while maintaining quality.' },
    { question: 'Can AI generate photography ideas or shot lists?', answer: 'Yes, AI can create comprehensive shot lists for different photography types (weddings, portraits, events). It can suggest creative angles, lighting setups, poses, and themes tailored to your client and location. Use these as inspiration to develop your unique vision.' },
    { question: 'What&apos;s the best way to use AI for client communication?', answer: 'AI can help draft client onboarding emails, proposal letters, package descriptions, and follow-up messages. It ensures professional communication that saves time while maintaining your brand voice. Always personalize AI-generated content before sending.' },
    { question: 'How can AI help me grow my photography business?', answer: 'AI can assist with content planning, social media captions, website copy, and email marketing. It can help analyze which content performs best, suggest pricing strategies, and identify target audiences. Use AI insights to refine your marketing approach.' },
    { question: 'Can AI replace human editing skills or creative decisions?', answer: 'No. AI is a tool to enhance efficiency, not replace creativity. Your artistic vision, eye for composition, and understanding of client needs are irreplaceable. Use AI for repetitive tasks so you can focus on the creative and strategic aspects of your work.' },
    { question: 'How do I maintain my unique style when using AI tools?', answer: 'AI works best as an assistant to your established style. Use it for technical optimization, inspiration, and workflow efficiency—not for defining your aesthetic. Your editing presets, color preferences, and composition choices should remain distinctly yours.' },
    { question: 'What are the ethical considerations of using AI in photography?', answer: 'Key considerations include: transparency with clients about AI-assisted editing, respecting copyright for inspiration images, and not using AI to misrepresent your work. Be honest about your process, maintain authenticity, and always prioritize your client&apos;s vision over AI suggestions.' },
    { question: 'How can AI help me manage my photography business finances?', answer: 'AI can help create pricing structures, invoice templates, and financial forecasts. It can suggest pricing based on market rates and your experience level. For detailed financial advice, combine AI insights with professional accounting guidance.' },
    { question: 'Can AI tools help me build a stronger portfolio?', answer: 'Yes, AI can help curate your portfolio by identifying your best-performing photos, analyzing what resonates with viewers, and suggesting organization strategies. It can also help write compelling portfolio descriptions and website copy to attract your ideal clients.' },
    { question: 'What&apos;s the learning curve for using AI tools in photography?', answer: 'Most modern AI photography tools are designed to be user-friendly with minimal learning curve. Start with one tool, practice with a few photos, and gradually expand. Many platforms offer tutorials and community support to help you get started quickly.' },
    { question: 'How do I choose which AI tools to invest in?', answer: 'Evaluate tools based on: your specific workflow needs, ease of use, integration with existing software (Lightroom, Photoshop), cost, and community reviews. Start with free trials, test with real projects, and scale up only if they deliver real time savings.' },
    { question: 'Can AI help me stay competitive in a crowded photography market?', answer: 'Yes. AI can help you work faster, deliver more consistent quality, and focus on strategic growth. By automating repetitive tasks, you can take on more clients, offer better service, and spend time on business development and creative improvement.' },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4">
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'AI Prompts for Photographers',
        description: 'Expertly crafted AI prompts to help photographers streamline editing, manage clients, grow their business, and boost productivity.',
        datePublished: '2026-03-28',
        image: 'https://gptprompts.ai/og-image.png',
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      })}} />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-6" style={{color: accentColor}}>AI Prompts for Photographers</h1>
        <p className="text-xl text-gray-400 mb-8 leading-relaxed">Streamline your workflow, delight your clients, and scale your photography business. Expertly crafted AI prompts for every stage of your creative process—from editing and client communication to portfolio building and business growth.</p>
        <div className="flex gap-4">
          <div className="bg-[#1a1a1a] border" style={{borderColor: accentColor}} className="bg-[#1a1a1a] rounded-lg p-4 flex-1">
            <p className="text-sm text-gray-400">Total Prompts</p>
            <p className="text-3xl font-bold" style={{color: accentColor}}>15</p>
          </div>
          <div className="bg-[#1a1a1a] border" style={{borderColor: accentColor}} className="bg-[#1a1a1a] rounded-lg p-4 flex-1">
            <p className="text-sm text-gray-400">Categories</p>
            <p className="text-3xl font-bold" style={{color: accentColor}}>5</p>
          </div>
          <div className="bg-[#1a1a1a] border" style={{borderColor: accentColor}} className="bg-[#1a1a1a] rounded-lg p-4 flex-1">
            <p className="text-sm text-gray-400">FAQ Items</p>
            <p className="text-3xl font-bold" style={{color: accentColor}}>12</p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, idx) => {
        const Icon = section.icon;
        return (
          <section key={idx} className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Icon size={32} style={{color: accentColor}} />
              <h2 className="text-3xl font-bold text-white">{section.title}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {section.prompts.map((prompt, pidx) => (
                <CopyCard key={pidx} title={prompt.title} prompt={prompt.prompt} tag={prompt.tag} />
              ))}
            </div>
          </section>
        );
      })}

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Sun size={32} style={{color: accentColor}} />
          Frequently Asked Questions
        </h2>
        <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-8">
          {faqs.map((faq, idx) => (
            <FAQ key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* Related Pages */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Explore Other Prompt Collections</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/ai-prompts-for-ux-designers" className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#8B5CF6] transition-colors">
            <h3 className="text-lg font-semibold text-white mb-2">UX Designers</h3>
            <p className="text-gray-400 text-sm mb-4">15 prompts for research, wireframing, testing, and design systems.</p>
            <span className="inline-block px-3 py-1 rounded text-xs font-medium" style={{backgroundColor: '#8B5CF6/10', color: '#8B5CF6'}}>15 Prompts</span>
          </a>
          <a href="/ai-prompts-for-journalists" className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#0EA5E9] transition-colors">
            <h3 className="text-lg font-semibold text-white mb-2">Journalists</h3>
            <p className="text-gray-400 text-sm mb-4">15 prompts for research, interviews, writing, and fact-checking.</p>
            <span className="inline-block px-3 py-1 rounded text-xs font-medium" style={{backgroundColor: '#0EA5E9/10', color: '#0EA5E9'}}>15 Prompts</span>
          </a>
          <a href="/ai-prompts-for-consultants" className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 hover:border-[#0D9488] transition-colors">
            <h3 className="text-lg font-semibold text-white mb-2">Consultants</h3>
            <p className="text-gray-400 text-sm mb-4">15 prompts for discovery, strategy, analysis, and business development.</p>
            <span className="inline-block px-3 py-1 rounded text-xs font-medium" style={{backgroundColor: '#0D9488/10', color: '#0D9488'}}>15 Prompts</span>
          </a>
        </div>
      </section>
    </main>
  );
}
