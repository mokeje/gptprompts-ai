"use client"

import { useState } from "react"
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#0EA5E9] transition-colors group">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed mb-4 max-h-64">
        {prompt}
      </pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-medium py-2 px-4 rounded transition-colors">
        {copied ? (<><Check className="w-4 h-4" />Copied</>) : (<><Copy className="w-4 h-4" />Copy Prompt</>)}
      </button>
    </div>
  )
}

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-lg">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 hover:bg-[#1a1a1a] transition-colors text-left">
        <span className="font-medium text-white">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
      </button>
      {open && <div className="border-t border-[#2a2a2a] p-4 bg-[#0f0f0f] text-gray-300 leading-relaxed">{a}</div>}
    </div>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context": "https://schema.org", "@type": ["Article", "FAQPage"], "headline": "AI Translation Prompts | ChatGPT & Claude Templates", "description": "30+ advanced AI translation prompts for business documents, technical translation, localization, cultural adaptation, and multilingual content. Copy & use instantly.", "datePublished": "2026-03-29", "dateModified": "2026-03-29", "author": {"@type": "Organization", "name": "GPT Prompts"}, "mainEntity": [{"@type": "Question", "name": "How can I use AI for professional document translation?", "acceptedAnswer": {"@type": "Answer", "text": "AI translation tools work best when you provide context about the target audience, formal or casual tone requirements, and any domain-specific terminology. Specify the source and target languages clearly, and include examples of preferred phrasing when available."}}, {"@type": "Question", "name": "What makes technical translation different from general translation?", "acceptedAnswer": {"@type": "Answer", "text": "Technical translation requires preserving technical accuracy, maintaining consistent terminology across documents, and understanding domain-specific concepts. AI performs better when you provide glossaries of technical terms and examples of previous translations."}}, {"@type": "Question", "name": "How do I ensure AI translations maintain cultural context?", "acceptedAnswer": {"@type": "Answer", "text": "Provide AI with cultural background information, explain idioms or culturally-specific references, and ask it to adapt content while maintaining the original intent. Always review translations in cultural context rather than purely literal meaning."}}, {"@type": "Question", "name": "Can AI handle multilingual translation workflows?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, but it&apos;s most effective when you break multilingual projects into single language pairs, provide consistent terminology across all language versions, and use separate prompts for each language pair to ensure quality."}}, {"@type": "Question", "name": "What are the best practices for localizing content with AI?", "acceptedAnswer": {"@type": "Answer", "text": "Localization goes beyond translation—adapt measurements, currency, date formats, colors, and cultural references. Ask AI to adapt rather than directly translate, and provide local market context and examples."}}, {"@type": "Question", "name": "How can I ensure consistency in AI translations across documents?", "acceptedAnswer": {"@type": "Answer", "text": "Create a terminology glossary upfront, use the same AI prompt across all documents, and periodically review translations for consistency. Reuse approved translations for repeated phrases."}}, {"@type": "Question", "name": "What&apos;s the best way to handle AI translation of marketing content?", "acceptedAnswer": {"@type": "Answer", "text": "Marketing content requires not just accurate translation but culturally resonant adaptation. Brief AI on the brand voice, target market preferences, and campaign goals. Always have a native speaker review final translations."}}, {"@type": "Question", "name": "How do I translate content with code or technical syntax?", "acceptedAnswer": {"@type": "Answer", "text": "Clearly mark code blocks and ask AI to preserve them unchanged. Translate only the comments and documentation. Test translations thoroughly if they affect functionality or documentation rendering."}}, {"@type": "Question", "name": "Can AI translate real-time conversation or live content?", "acceptedAnswer": {"@type": "Answer", "text": "AI can translate prepared content quickly, but real-time translation requires specialized tools. For prepared content, provide context and let AI translate efficiently; for live content, expect some latency."}}, {"@type": "Question", "name": "How do I handle AI translation of slang or informal language?", "acceptedAnswer": {"@type": "Answer", "text": "Explain the context and tone you want to preserve, provide examples of acceptable informal language in the target language, and ask AI to prioritize meaning and tone over literal translation."}}]})}} />

      <header className="border-b border-[#2a2a2a] bg-gradient-to-r from-[#0a0a0a] to-[#0f1419] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#0EA5E9]"></div>
            <p className="text-sm font-medium text-[#0EA5E9] uppercase tracking-wide">AI Translation</p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">AI Translation Prompts</h1>
          <p className="text-lg text-gray-400 max-w-2xl">30+ advanced prompts for professional document translation, technical translation, localization, cultural adaptation, and multilingual content. Perfect for businesses, translators, and content creators.</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Section 1: Business Document Translation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
            <div className="w-1 h-8 bg-[#0EA5E9] rounded"></div>
            Business Document Translation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard
              title="Contract Translation with Legal Accuracy"
              prompt={`Translate the following legal contract from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE]. Maintain strict legal terminology, preserve all clause structure and numbering, and ensure every legal term is accurately translated to its legal equivalent in [TARGET_LANGUAGE]. Flag any ambiguous terms that might have multiple legal meanings.

Contract:
[INSERT_CONTRACT_TEXT]

Provide:
1. Complete translation
2. List of key legal terms and their exact translations
3. Any cultural or legal differences that affected the translation
4. Recommended review by a [TARGET_LANGUAGE] legal expert`}
            />
            <CopyCard
              title="Business Email and Correspondence"
              prompt={`Translate the following business email from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE]. Maintain professional tone, preserve the original intent and politeness level, and adapt cultural communication norms appropriately. The email is to [RECIPIENT_CONTEXT].

Email:
[INSERT_EMAIL_TEXT]

Requirements:
- Keep the email length and structure similar
- Preserve all key business information
- Adapt greetings and closing to [TARGET_LANGUAGE] business conventions
- Note any tone adjustments made for cultural appropriateness`}
            />
            <CopyCard
              title="Technical Specification Documents"
              prompt={`Translate this technical specification document from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE]. Preserve all technical accuracy, maintain consistent terminology throughout, and ensure engineers in [TARGET_LANGUAGE] markets understand the specifications identically.

Document:
[INSERT_SPECIFICATION_TEXT]

For each section, provide:
- Accurate technical translation
- Technical term glossary used
- Any clarifications needed for technical accuracy
- Verification points for technical review`}
            />
            <CopyCard
              title="Proposal and Bid Translation"
              prompt={`Translate this business proposal/bid from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE]. Maintain persuasive tone, preserve competitive positioning, and ensure the proposal remains compelling in the target market. Context: [BID_CONTEXT]

Proposal:
[INSERT_PROPOSAL_TEXT]

Include:
- Full translation with maintained persuasiveness
- Key value propositions highlighted
- Culturally adapted benefits and positioning
- Tone consistency check`}
            />
            <CopyCard
              title="Annual Report and Financial Document"
              prompt={`Translate this annual report/financial document from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE]. Ensure financial terminology is precise, maintain regulatory compliance language, and preserve the professional corporate voice.

Document Section:
[INSERT_REPORT_SECTION]

Provide:
- Complete translation
- Financial terms glossary
- Regulatory language verification
- Currency and metric conversions where needed`}
            />
            <CopyCard
              title="Training Manual and Internal Documentation"
              prompt={`Translate this internal training manual from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE]. Make it clear and easy to follow for new employees, maintain consistent terminology throughout the entire document, and preserve all procedural accuracy.

Manual Section:
[INSERT_MANUAL_TEXT]

Include:
- Clear, step-by-step translation
- Terminology consistency report
- Visual reference translations (if applicable)
- Review checklist for accuracy`}
            />
          </div>
        </section>

        {/* Section 2: Technical and Specialized Translation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
            <div className="w-1 h-8 bg-[#0EA5E9] rounded"></div>
            Technical and Specialized Translation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard
              title="Software and Code Documentation"
              prompt={`Translate this software documentation from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE]. Preserve all code syntax unchanged, translate only comments and explanatory text, and ensure developers can follow the documentation.

Documentation:
[INSERT_DOCUMENTATION_TEXT]

Requirements:
- Keep all code blocks exactly as-is
- Translate comments and descriptions
- Maintain technical accuracy for developers
- Flag any code-specific terms that need explanation`}
            />
            <CopyCard
              title="Medical and Pharmaceutical Translation"
              prompt={`Translate this medical/pharmaceutical document from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE]. Use precise medical terminology, ensure clinical accuracy, and comply with [TARGET_REGION] medical regulations and terminology standards.

Document:
[INSERT_MEDICAL_TEXT]

Include:
- Medically accurate translation
- Medical terminology verification
- Regulatory compliance notes
- Recommended review by medical professional`}
            />
            <CopyCard
              title="Scientific Research Paper Abstract"
              prompt={`Translate this scientific paper abstract from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE]. Maintain scientific precision, preserve the research findings accuracy, and use standard scientific terminology in [TARGET_LANGUAGE].

Abstract:
[INSERT_ABSTRACT_TEXT]

Provide:
- Complete scientific translation
- Key scientific terms glossary
- Accuracy verification
- Formatting preservation`}
            />
            <CopyCard
              title="Engineering and Architecture Specifications"
              prompt={`Translate these engineering specifications from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE]. Preserve all technical accuracy, maintain consistent terminology, and ensure engineers can build/construct from these specifications.

Specifications:
[INSERT_ENGINEERING_TEXT]

Include:
- Precise technical translation
- Engineering terms in both languages
- Measurement and unit consistency
- Critical accuracy points verification`}
            />
            <CopyCard
              title="Patent and Intellectual Property Documents"
              prompt={`Translate this patent document from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE]. Maintain legal-technical precision, preserve all claim language, and ensure IP protection is equivalent in both languages.

Patent Section:
[INSERT_PATENT_TEXT]

Provide:
- Precise legal-technical translation
- Technical and legal terms glossary
- Claim language verification
- Recommended IP attorney review`}
            />
            <CopyCard
              title="Environmental and Compliance Documentation"
              prompt={`Translate this environmental/compliance document from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE]. Ensure regulatory terms are accurate for [TARGET_REGION], maintain compliance language, and preserve all critical safety information.

Document:
[INSERT_COMPLIANCE_TEXT]

Include:
- Accurate regulatory translation
- Compliance terminology mapping
- Regional regulation notes
- Safety information verification`}
            />
          </div>
        </section>

        {/* Section 3: Localization and Cultural Adaptation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
            <div className="w-1 h-8 bg-[#0EA5E9] rounded"></div>
            Localization and Cultural Adaptation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard
              title="Website and Web Content Localization"
              prompt={`Localize this website content from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE] for [TARGET_MARKET]. Beyond translation, adapt for local preferences, currencies, date formats, and cultural expectations. Target audience: [AUDIENCE_DESCRIPTION]

Content:
[INSERT_WEB_CONTENT]

Adapt:
- Currency to local currency
- Dates to local format
- Measurements to local standards
- Cultural references to local equivalents
- Color meanings and imagery if culturally significant
- Call-to-action language for local market`}
            />
            <CopyCard
              title="Mobile App Localization"
              prompt={`Localize this mobile app content from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE] for [TARGET_REGION]. Adapt for local UI/UX preferences, text length constraints, and cultural norms. App type: [APP_TYPE]

Content Strings:
[INSERT_APP_STRINGS]

Ensure:
- Text fits mobile screen constraints
- Cultural appropriateness for target region
- Local payment and currency information
- Date/time format compliance
- Local app store requirements met`}
            />
            <CopyCard
              title="Marketing Campaign Localization"
              prompt={`Localize this marketing campaign from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE] for [TARGET_COUNTRY]. Not just translate—adapt messaging, offers, and positioning to resonate with local audiences. Campaign goal: [CAMPAIGN_GOAL]

Campaign Materials:
[INSERT_CAMPAIGN_TEXT]

Adapt for:
- Local market preferences and needs
- Culturally resonant messaging
- Local holidays and celebrations
- Regional purchasing power
- Competitive landscape in [TARGET_COUNTRY]
- Local media and platform preferences`}
            />
            <CopyCard
              title="Video and Multimedia Subtitles"
              prompt={`Localize subtitles from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE]. Adapt for viewing preferences, maintain character limits, preserve timing synchronization, and localize cultural references. Video context: [VIDEO_CONTEXT]

Original Subtitles:
[INSERT_SUBTITLES]

Include:
- Localized translation
- Character count per line (max [CHARACTER_LIMIT])
- Timing code preservation
- Cultural reference adaptations
- Phonetic pronunciation if needed`}
            />
            <CopyCard
              title="User Interface Text and Labels"
              prompt={`Localize UI text from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE]. Ensure brevity for UI constraints, maintain consistency across the interface, and adapt for local conventions. Platform: [PLATFORM_TYPE]

UI Text/Labels:
[INSERT_UI_TEXT]

Optimize for:
- Character limits and space constraints
- UI consistency and terminology
- Local conventions and abbreviations
- Accessibility and clarity
- Platform-specific guidelines`}
            />
            <CopyCard
              title="Social Media and Community Content"
              prompt={`Localize social media content from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE] for [TARGET_PLATFORM]. Adapt hashtags, cultural references, tone, and formatting for local social media culture. Platform: [PLATFORM]

Content:
[INSERT_SOCIAL_MEDIA_POST]

Adapt:
- Hashtags to local trending topics
- Tone to social media conventions
- Emojis and visual language
- Cultural humor or references
- Posting time recommendations
- Local engagement strategies`}
            />
          </div>
        </section>

        {/* Section 4: Multilingual Content and Workflows */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
            <div className="w-1 h-8 bg-[#0EA5E9] rounded"></div>
            Multilingual Content and Workflows
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard
              title="Multilingual Documentation Translation Matrix"
              prompt={`Create a multilingual translation matrix for this content. Translate from [SOURCE_LANGUAGE] to [LANGUAGE_LIST]. Ensure consistent terminology across all language versions. Use this glossary: [GLOSSARY_IF_AVAILABLE]

Source Content:
[INSERT_CONTENT]

Deliverable:
- Translation in each target language
- Consistent terminology across all versions
- Glossary of key terms in all languages
- Quality assurance checklist per language
- Notes on any language-specific challenges`}
            />
            <CopyCard
              title="Multilingual Glossary and Terminology Database"
              prompt={`Build a multilingual terminology database for [DOMAIN/INDUSTRY]. Include entries for: [KEY_TERMS]. Translate from [SOURCE_LANGUAGE] to [TARGET_LANGUAGES]. Include definitions, context, and usage notes.

Key Terms:
[INSERT_TERMS_LIST]

For each term, provide:
- Definition in [SOURCE_LANGUAGE]
- Translation in each target language
- Context and usage examples
- Related terms or synonyms
- Notes on regional variations
- Recommended usage`}
            />
            <CopyCard
              title="Content Management System Translation Workflow"
              prompt={`Design a translation workflow for content in a [CMS_PLATFORM] from [SOURCE_LANGUAGE] to [TARGET_LANGUAGES]. Include quality control steps, terminology consistency, and approval process.

Content Type: [CONTENT_TYPE]
Workflow Requirements:
[INSERT_REQUIREMENTS]

Provide:
- Step-by-step workflow process
- Terminology management approach
- Quality assurance checkpoints
- Timeline and resource allocation
- Tools and integrations needed
- Approval and sign-off process`}
            />
            <CopyCard
              title="Website Internationalization (i18n) Strategy"
              prompt={`Develop an i18n strategy for a website in [SOURCE_LANGUAGE] expanding to [TARGET_LANGUAGES]. Include localization beyond translation, technical implementation, and maintenance.

Website Type: [WEBSITE_TYPE]
Target Markets: [MARKETS]

Strategy should cover:
- Content localization approach
- URL and domain strategy
- Language detection and switching
- SEO for each language
- Payment and currency handling
- Customer support localization
- Maintenance and updates process`}
            />
            <CopyCard
              title="Multi-Market Product Launch Translation"
              prompt={`Translate and localize product launch materials for simultaneous release in [TARGET_MARKETS]. Coordinate messaging across markets, ensure launch timing alignment, and maintain brand consistency.

Product: [PRODUCT_NAME]
Markets: [LIST_OF_MARKETS]
Launch Materials: [MATERIALS_LIST]

Include:
- Translated materials for each market
- Localized marketing positioning
- Regional launch timeline coordination
- Market-specific adaptations
- Press release versions per market
- Customer communication templates`}
            />
            <CopyCard
              title="Real-Time Translation for Global Teams"
              prompt={`Set up real-time translation processes for ongoing communication across [NUMBER_OF_TEAMS] teams in [LANGUAGES]. Include meeting translation, async communication, and documentation.

Team Structure: [DESCRIBE_TEAMS]
Communication Channels: [LIST_CHANNELS]

Provide:
- Real-time meeting translation approach
- Asynchronous communication translation
- Document translation workflow
- Tool recommendations
- Terminology consistency maintenance
- Cost and resource optimization`}
            />
          </div>
        </section>

        {/* Section 5: Quality Assurance and Advanced Translation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
            <div className="w-1 h-8 bg-[#0EA5E9] rounded"></div>
            Quality Assurance and Advanced Translation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard
              title="Translation Quality Assurance and Review"
              prompt={`Review and quality assure this translation from [SOURCE_LANGUAGE] to [TARGET_LANGUAGE]. Check for accuracy, consistency, terminology compliance, and cultural appropriateness.

Source Text:
[INSERT_SOURCE_TEXT]

Target Translation:
[INSERT_TARGET_TRANSLATION]

Provide:
- List of any errors or inconsistencies found
- Terminology compliance check
- Cultural appropriateness assessment
- Suggested improvements with reasoning
- Quality score and sign-off readiness
- Recommended revisions`}
            />
            <CopyCard
              title="Translation Consistency and Style Guide Review"
              prompt={`Review this translation set for consistency against our style guide and terminology database. Ensure all documents use the same terms, style, and voice. Style guide: [REFERENCE_GUIDE]

Translations to Review:
[INSERT_TRANSLATIONS]

Analysis:
- Terminology consistency across documents
- Style guide compliance issues
- Tone and voice consistency
- Formatting consistency
- Recommended corrections
- Updated style guide additions`}
            />
            <CopyCard
              title="Back-Translation Verification"
              prompt={`Perform back-translation verification: translate the [TARGET_LANGUAGE] translation back to [SOURCE_LANGUAGE] and compare with the original. Identify any meaning loss or drift.

Original [SOURCE_LANGUAGE] Text:
[INSERT_ORIGINAL]

Current [TARGET_LANGUAGE] Translation:
[INSERT_TRANSLATION]

Back-Translation Process:
1. Translate target back to source
2. Compare with original for meaning preservation
3. Identify any drift or loss of nuance
4. Flag areas needing retranslation

Provide:
- Back-translation in [SOURCE_LANGUAGE]
- Detailed comparison analysis
- Areas of concern identified
- Recommended adjustments`}
            />
            <CopyCard
              title="Contextual and Tone Adaptation Review"
              prompt={`Review this translation for appropriate tone, context adaptation, and cultural sensitivity. Verify it matches the intended tone and audience for [TARGET_LANGUAGE] [TARGET_MARKET].

Original Context: [CONTEXT]
Target Audience: [AUDIENCE]
Intended Tone: [TONE]

Translation:
[INSERT_TRANSLATION]

Review:
- Tone appropriateness for audience
- Cultural sensitivity assessment
- Context adaptation adequacy
- Idiomatic language usage
- Improvements for better resonance
- Final readiness assessment`}
            />
            <CopyCard
              title="Specialized Terminology Consistency Audit"
              prompt={`Audit this [DOMAIN]-specific translation for consistent use of specialized terminology. Compare against the domain terminology database and identify inconsistencies.

Domain: [DOMAIN]
Terminology Database: [DATABASE_REFERENCE]

Document to Audit:
[INSERT_DOCUMENT]

Audit Report:
- Specialized terms used
- Consistency check against database
- Inconsistencies identified
- Recommended standardization
- Additions to terminology database
- Sign-off for domain expert review`}
            />
            <CopyCard
              title="Cultural Adaptation and Localization Validation"
              prompt={`Validate that this localization appropriately adapts content for [TARGET_CULTURE] and [TARGET_MARKET]. Check for cultural fit, local relevance, and market appropriateness.

Source Content: [SOURCE_CONTENT]
Target Market: [MARKET]
Target Culture: [CULTURE]

Localization to Validate:
[INSERT_LOCALIZED_CONTENT]

Validation:
- Cultural appropriateness assessment
- Local relevance and resonance
- Market-specific adaptations adequacy
- Potential cultural missteps identified
- Recommendations for stronger localization
- Final approval readiness`}
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              q="How can I use AI for professional document translation?"
              a="AI translation tools work best when you provide context about the target audience, formal or casual tone requirements, and any domain-specific terminology. Specify the source and target languages clearly, and include examples of preferred phrasing when available."
            />
            <FAQItem
              q="What makes technical translation different from general translation?"
              a="Technical translation requires preserving technical accuracy, maintaining consistent terminology across documents, and understanding domain-specific concepts. AI performs better when you provide glossaries of technical terms and examples of previous translations."
            />
            <FAQItem
              q="How do I ensure AI translations maintain cultural context?"
              a="Provide AI with cultural background information, explain idioms or culturally-specific references, and ask it to adapt content while maintaining the original intent. Always review translations in cultural context rather than purely literal meaning."
            />
            <FAQItem
              q="Can AI handle multilingual translation workflows?"
              a="Yes, but it&apos;s most effective when you break multilingual projects into single language pairs, provide consistent terminology across all language versions, and use separate prompts for each language pair to ensure quality."
            />
            <FAQItem
              q="What are the best practices for localizing content with AI?"
              a="Localization goes beyond translation—adapt measurements, currency, date formats, colors, and cultural references. Ask AI to adapt rather than directly translate, and provide local market context and examples."
            />
            <FAQItem
              q="How can I ensure consistency in AI translations across documents?"
              a="Create a terminology glossary upfront, use the same AI prompt across all documents, and periodically review translations for consistency. Reuse approved translations for repeated phrases."
            />
            <FAQItem
              q="What&apos;s the best way to handle AI translation of marketing content?"
              a="Marketing content requires not just accurate translation but culturally resonant adaptation. Brief AI on the brand voice, target market preferences, and campaign goals. Always have a native speaker review final translations."
            />
            <FAQItem
              q="How do I translate content with code or technical syntax?"
              a="Clearly mark code blocks and ask AI to preserve them unchanged. Translate only the comments and documentation. Test translations thoroughly if they affect functionality or documentation rendering."
            />
            <FAQItem
              q="Can AI translate real-time conversation or live content?"
              a="AI can translate prepared content quickly, but real-time translation requires specialized tools. For prepared content, provide context and let AI translate efficiently; for live content, expect some latency."
            />
            <FAQItem
              q="How do I handle AI translation of slang or informal language?"
              a="Explain the context and tone you want to preserve, provide examples of acceptable informal language in the target language, and ask AI to prioritize meaning and tone over literal translation."
            />
          </div>
        </section>

        {/* Related Pages Section */}
        <section className="pt-12 border-t border-[#2a2a2a]">
          <h2 className="text-2xl font-bold mb-8 text-white">Related Pages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/chatgpt-prompts" className="group p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#10A37F] transition-colors">
              <div className="font-semibold text-white group-hover:text-[#10A37F] transition-colors">ChatGPT Prompts</div>
              <p className="text-sm text-gray-400 mt-1">1000+ prompts for ChatGPT</p>
            </Link>
            <Link href="/claude-prompts" className="group p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#D97706] transition-colors">
              <div className="font-semibold text-white group-hover:text-[#D97706] transition-colors">Claude Prompts</div>
              <p className="text-sm text-gray-400 mt-1">1000+ prompts for Claude</p>
            </Link>
            <Link href="/gemini-prompts" className="group p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#4285F4] transition-colors">
              <div className="font-semibold text-white group-hover:text-[#4285F4] transition-colors">Gemini Prompts</div>
              <p className="text-sm text-gray-400 mt-1">1000+ prompts for Gemini</p>
            </Link>
            <Link href="/ai-writing-prompts" className="group p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#EC4899] transition-colors">
              <div className="font-semibold text-white group-hover:text-[#EC4899] transition-colors">AI Writing Prompts</div>
              <p className="text-sm text-gray-400 mt-1">Advanced writing prompts</p>
            </Link>
            <Link href="/chatgpt-for-students" className="group p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#10A37F] transition-colors">
              <div className="font-semibold text-white group-hover:text-[#10A37F] transition-colors">ChatGPT for Students</div>
              <p className="text-sm text-gray-400 mt-1">Study and research prompts</p>
            </Link>
            <Link href="/ai-prompts-for-writers" className="group p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#8B5CF6] transition-colors">
              <div className="font-semibold text-white group-hover:text-[#8B5CF6] transition-colors">AI for Writers</div>
              <p className="text-sm text-gray-400 mt-1">Content creation prompts</p>
            </Link>
            <Link href="/ai-prompts-for-researchers" className="group p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#6366F1] transition-colors">
              <div className="font-semibold text-white group-hover:text-[#6366F1] transition-colors">AI for Researchers</div>
              <p className="text-sm text-gray-400 mt-1">Research prompts</p>
            </Link>
            <Link href="/creative-writing-prompts-beginners" className="group p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-[#F59E0B] transition-colors">
              <div className="font-semibold text-white group-hover:text-[#F59E0B] transition-colors">Creative Writing Prompts</div>
              <p className="text-sm text-gray-400 mt-1">Fiction and storytelling</p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
