"use client";

import { useState } from "react";
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-indigo-500/50 transition-colors">
      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-indigo-500 hover:text-indigo-400 transition-colors text-sm font-medium"
      >
        {copied ? (
          <>
            <Check size={16} /> Copied!
          </>
        ) : (
          <>
            <Copy size={16} /> Copy
          </>
        )}
      </button>
    </div>
  );
};

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden hover:border-indigo-500/50 transition-colors">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 bg-gray-900 hover:bg-gray-850 transition-colors"
      >
        <span className="font-medium text-gray-100 text-left">{question}</span>
        {expanded ? (
          <ChevronUp size={20} className="text-indigo-500 flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      {expanded && (
        <div className="p-4 bg-gray-800/50 border-t border-gray-800">
          <p className="text-gray-300 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function AIResearchAssistantPromptsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero Section */}
      <section className="border-b border-gray-800 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-4">
            <span className="text-indigo-500 text-sm font-medium">AI PROMPT LIBRARY</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Research Assistant Prompts
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            30+ ChatGPT prompts to master literature reviews, data analysis, research methodology, academic writing, and knowledge synthesis.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Literature Review & Research Design */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
            Literature Review & Research Design
          </h2>
          <p className="text-gray-400 mb-6">
            Prompts for conducting systematic literature reviews, designing research frameworks, and organizing academic sources.
          </p>
          <div className="space-y-4">
            <CopyCard prompt="I'm starting a literature review on [topic]. Help me create a search strategy including: relevant databases to use, key search terms and Boolean operators, inclusion/exclusion criteria for papers, and a timeline for completing the review. Also suggest how to organize findings in a spreadsheet." />
            <CopyCard prompt="Analyze these research papers [paste titles/abstracts] and identify: the main research gaps they address, common methodologies used, disagreements between authors, and emerging trends. Then suggest 3 unexplored areas where new research is needed." />
            <CopyCard prompt="Help me design a research framework for studying [topic]. Include: research questions to investigate, theoretical frameworks that apply, appropriate methodologies (quantitative/qualitative/mixed), data sources to collect from, and potential limitations to address." />
            <CopyCard prompt="I have 50+ research papers on [topic]. Help me create a systematic categorization system that groups papers by: methodology, publication year, geographic focus, and key findings. Then help me identify which categories have the most research." />
            <CopyCard prompt="Create a critical appraisal checklist for evaluating [type of study, e.g., RCT, qualitative study]. Include questions I should ask about: study design quality, bias risk, sample size adequacy, validity of conclusions, and practical applicability." />
            <CopyCard prompt="Help me map the 'research landscape' for [topic]. Create a matrix showing major research themes across different disciplines, identify which areas are over-researched vs. under-researched, and highlight interdisciplinary opportunities." />
          </div>
        </section>

        {/* Data Analysis & Statistical Methods */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
            Data Analysis & Statistical Methods
          </h2>
          <p className="text-gray-400 mb-6">
            Prompts for data cleaning, statistical analysis, choosing appropriate methods, and interpreting results.
          </p>
          <div className="space-y-4">
            <CopyCard prompt="I have a dataset with [describe: number of variables, sample size, data types]. Help me choose the right statistical test by: explaining what assumptions I need to check, which tests are appropriate for my research question, how to interpret results, and common pitfalls to avoid." />
            <CopyCard prompt="Explain how to conduct [specific statistical analysis: correlation, ANOVA, regression, t-test] using [tool: Excel, Python, R, SPSS]. Break it down into steps, explain assumptions to check, show how to interpret output, and give an example." />
            <CopyCard prompt="I'm working with [type of data: time-series, categorical, spatial, longitudinal]. What are the unique analytical challenges with this data? What methods are best suited for it? What preprocessing should I do first? Walk me through a workflow." />
            <CopyCard prompt="Help me identify outliers in my dataset. Explain: what counts as an outlier, statistical methods to detect them (Z-score, IQR, Mahalanobis distance), how to decide whether to remove or keep them, and how to report this decision in my paper." />
            <CopyCard prompt="I need to analyze qualitative data from [interviews/focus groups/open survey responses]. Walk me through: how to code the data, what coding frameworks are available, software tools that help, how to ensure coding consistency, and how to draw themes from coded data." />
            <CopyCard prompt="Create a guide for reporting statistics in academic writing. Include: how to write results with proper notation, how to interpret p-values correctly, effect sizes and why they matter, confidence intervals, and common statistical reporting mistakes to avoid." />
          </div>
        </section>

        {/* Academic Writing & Structure */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
            Academic Writing & Structure
          </h2>
          <p className="text-gray-400 mb-6">
            Prompts for organizing research papers, writing clear abstracts, crafting arguments, and improving academic clarity.
          </p>
          <div className="space-y-4">
            <CopyCard prompt="Help me write an abstract for my research paper on [topic]. The abstract should: clearly state the research question, explain the methodology in 1-2 sentences, summarize key findings, and end with implications. Keep it under 250 words and use academic tone." />
            <CopyCard prompt="I'm struggling to organize my [type: thesis chapter, research paper section]. I have these main points: [list]. Help me: arrange them logically, create strong topic sentences for each paragraph, identify any gaps, and improve the flow between sections." />
            <CopyCard prompt="Review this introduction paragraph [paste text]. Does it: establish context, review relevant literature, state the research gap, and present my research question clearly? Rewrite it to be more compelling while maintaining academic tone." />
            <CopyCard prompt="Help me write a strong discussion section for my research paper. It should: interpret my findings in context of existing literature, explain limitations honestly, address unexpected results, discuss practical implications, and suggest future research directions." />
            <CopyCard prompt="I'm using these sources in my paper [list 3-4 sources]. Help me synthesize them into a coherent paragraph that: identifies points of agreement and disagreement, shows how they build on each other, and explains their relevance to my research question." />
            <CopyCard prompt="Create a checklist for editing my [thesis chapter/research paper] for academic writing standards. Include: clarity, jargon usage, sentence structure, citation formatting, paragraph organization, and tone consistency. Then help me revise a problematic section." />
          </div>
        </section>

        {/* Citation Management & Academic Standards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
            Citation Management & Academic Standards
          </h2>
          <p className="text-gray-400 mb-6">
            Prompts for managing citations, understanding plagiarism, formatting references, and maintaining academic integrity.
          </p>
          <div className="space-y-4">
            <CopyCard prompt="Explain [citation style: APA, MLA, Chicago, Harvard] formatting rules for: books, journal articles, websites, dissertations, and reports. Show examples for each. Then help me convert my reference list to this style." />
            <CopyCard prompt="I'm using ideas from [source]. Help me understand: when I need direct quotes vs. paraphrasing, how to paraphrase without plagiarizing, how many sources I should cite per paragraph, and how to integrate citations smoothly into my writing." />
            <CopyCard prompt="Review these citations [paste 5-6 citations in your preferred style]. Check for: consistency in formatting, correct information (author, date, page numbers), and completeness. Correct any errors and explain the rules." />
            <CopyCard prompt="I want to use [specific source: quote, data, image]. Help me understand: if this requires permission, what credit is needed, how to cite it correctly in [citation style], and how to follow fair use guidelines properly." />
            <CopyCard prompt="Help me set up a citation management system for my research project. Compare: Zotero, Mendeley, EndNote, and BibTeX in terms of ease of use, citation style support, collaboration features, and cost. Recommend which is best for [my situation]." />
            <CopyCard prompt="I'm writing an annotated bibliography on [topic]. For each source I list, help me write annotations that: summarize the source's main argument, assess its credibility, explain its relevance to my research, and describe how I'll use it." />
          </div>
        </section>

        {/* Knowledge Synthesis & Conceptual Mapping */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
            Knowledge Synthesis & Conceptual Mapping
          </h2>
          <p className="text-gray-400 mb-6">
            Prompts for integrating knowledge across sources, creating concept maps, and building comprehensive understanding.
          </p>
          <div className="space-y-4">
            <CopyCard prompt="I've read these sources on [topic] [list sources]. Help me create a concept map that shows: how ideas connect and build on each other, contradictions and tensions, common themes, gaps in knowledge, and how this knowledge relates to my research question." />
            <CopyCard prompt="Help me write a 'state of the field' summary for [topic] that: explains major historical developments, identifies current debates and disagreements, highlights cutting-edge research, describes practical applications, and predicts future directions." />
            <CopyCard prompt="I'm seeing conflicting findings across research on [topic]. Help me understand: why researchers disagree, what methodological differences explain the conflicts, which findings are most credible and why, and what questions remain unanswered." />
            <CopyCard prompt="Create a visual framework for understanding [complex topic]. Organize it by: core concepts and definitions, relationships between ideas, how it applies in different contexts, key debates, and remaining questions. Then explain each component clearly." />
            <CopyCard prompt="Help me identify interdisciplinary perspectives on [topic]. Show how researchers from different fields (e.g., psychology, sociology, biology) approach it differently, what insights each discipline adds, and how integrating these perspectives strengthens understanding." />
            <CopyCard prompt="I need to teach others about [research topic] without assuming prior knowledge. Create: a clear definition, 3 key concepts explained simply, real-world examples, common misconceptions, and how to deepen understanding further." />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <FAQItem
              question="How do I know which research methodology is right for my question?"
              answer="Choose based on your research question type: quantitative methods (surveys, experiments) answer 'how many/much' questions; qualitative methods (interviews, observations) answer 'how/why' questions; mixed methods combine both. Your research question should directly determine your methodology. The prompt about research frameworks above helps with this decision."
            />
            <FAQItem
              question="Can AI help me analyze my actual research data?"
              answer="Yes. You can describe your data (sample size, variables, questions) and AI can help you choose statistical tests, explain how to conduct them, interpret results, and even help with code if using Python or R. However, you must understand the assumptions and validity of your choices—AI helps, but you remain responsible for methodological integrity."
            />
            <FAQItem
              question="How do I avoid plagiarism when synthesizing multiple sources?"
              answer="Paraphrase in your own words (don't just rearrange sentences), always cite the original source even when paraphrasing, use quotation marks for direct quotes, and distinguish between what authors say vs. your own analysis. The prompts above on paraphrasing and citations address this in detail."
            />
            <FAQItem
              question="What's the difference between a literature review and a systematic review?"
              answer="A literature review surveys and synthesizes existing research to provide an overview. A systematic review follows a strict protocol with predefined search criteria, inclusion/exclusion standards, quality assessment, and often meta-analysis. Systematic reviews are more rigorous and reproducible. Choose based on your research needs and resources."
            />
            <FAQItem
              question="How can I make sure my research findings are reliable and reproducible?"
              answer="Document every decision in your methodology (even small ones), check assumptions for statistical tests, report confidence intervals and effect sizes (not just p-values), acknowledge limitations honestly, and consider pre-registering your study. Transparency about methods and limitations strengthens credibility."
            />
            <FAQItem
              question="How do I handle conflicting information across my sources?"
              answer="Don't ignore disagreement—explain it. Compare the methodologies, sample sizes, and contexts of conflicting studies to understand why they differ. Assess which studies are most credible based on design quality. Present the spectrum of findings and explain your interpretation. This honesty strengthens your research credibility."
            />
            <FAQItem
              question="Can I use AI to draft my research paper, or does that count as plagiarism?"
              answer="Using AI to draft full paragraphs or sections without significant revision is academic misconduct. However, using AI to brainstorm ideas, organize arguments, get feedback on clarity, or refine your own writing is legitimate. The rule: you must be the primary author and thinker. Always disclose if your institution requires it."
            />
            <FAQItem
              question="How do I know if I've done enough literature review?"
              answer="You've read enough when: you understand the major theories and debates, can identify research gaps, see patterns and contradictions, and encounter fewer genuinely new ideas in new sources. For a thesis, this typically means 100-200+ sources; for a paper, 30-50. Depth matters more than quantity."
            />
            <FAQItem
              question="What's the best way to stay organized as my research project grows?"
              answer="Use a citation manager (Zotero, Mendeley) to organize sources with tags and notes. Create a spreadsheet to track: source details, key findings, relevance to your questions, and quotes you might use. Use a concept mapping tool (MindMeister, Lucidchart) for visual organization. Regular review (weekly) prevents disorganization."
            />
            <FAQItem
              question="How do I know if my research findings are significant, even if the statistics show p < 0.05?"
              answer="Statistical significance (p-value) only means results likely didn't occur by chance—it doesn't mean they're meaningful. Check effect size (is the real-world difference important?), confidence intervals (is the range narrow?), and practical implications (does this matter in practice?). Small effects can be statistically significant in large samples."
            />
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Explore Other Prompt Libraries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/ai-translation-prompts"
              className="border border-gray-800 rounded-lg p-4 hover:border-indigo-500/50 transition-colors hover:bg-gray-900"
            >
              <h3 className="font-semibold mb-2">Translation Prompts</h3>
              <p className="text-sm text-gray-400">Master multilingual content and localization</p>
            </Link>
            <Link
              href="/ai-web-builder-prompts"
              className="border border-gray-800 rounded-lg p-4 hover:border-indigo-500/50 transition-colors hover:bg-gray-900"
            >
              <h3 className="font-semibold mb-2">Web Builder Prompts</h3>
              <p className="text-sm text-gray-400">Generate websites and React components</p>
            </Link>
            <Link
              href="/ai-writing-assistant-prompts"
              className="border border-gray-800 rounded-lg p-4 hover:border-indigo-500/50 transition-colors hover:bg-gray-900"
            >
              <h3 className="font-semibold mb-2">Writing Assistant Prompts</h3>
              <p className="text-sm text-gray-400">Improve content, editing, and brand voice</p>
            </Link>
            <Link
              href="/ai-for-musicians-prompts"
              className="border border-gray-800 rounded-lg p-4 hover:border-indigo-500/50 transition-colors hover:bg-gray-900"
            >
              <h3 className="font-semibold mb-2">Music Prompts</h3>
              <p className="text-sm text-gray-400">Composition, production, and performance</p>
            </Link>
            <Link
              href="/ai-for-gaming-prompts"
              className="border border-gray-800 rounded-lg p-4 hover:border-indigo-500/50 transition-colors hover:bg-gray-900"
            >
              <h3 className="font-semibold mb-2">Gaming Prompts</h3>
              <p className="text-sm text-gray-400">Strategy, character building, game design</p>
            </Link>
            <Link
              href="/ai-study-prompts"
              className="border border-gray-800 rounded-lg p-4 hover:border-indigo-500/50 transition-colors hover:bg-gray-900"
            >
              <h3 className="font-semibold mb-2">Study Prompts</h3>
              <p className="text-sm text-gray-400">Learning, retention, and exam preparation</p>
            </Link>
            <Link
              href="/ai-poem-generator-prompts"
              className="border border-gray-800 rounded-lg p-4 hover:border-indigo-500/50 transition-colors hover:bg-gray-900"
            >
              <h3 className="font-semibold mb-2">Poetry Prompts</h3>
              <p className="text-sm text-gray-400">Creative writing and verse techniques</p>
            </Link>
            <Link
              href="/ai-free-art-prompts"
              className="border border-gray-800 rounded-lg p-4 hover:border-indigo-500/50 transition-colors hover:bg-gray-900"
            >
              <h3 className="font-semibold mb-2">Art Prompts</h3>
              <p className="text-sm text-gray-400">Visual design and creative direction</p>
            </Link>
          </div>
        </section>
      </main>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "FAQPage"],
            headline: "AI Research Assistant Prompts",
            description:
              "30+ ChatGPT prompts to master literature reviews, data analysis, research methodology, academic writing, and knowledge synthesis.",
            datePublished: "2026-03-29",
            dateModified: "2026-03-29",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I know which research methodology is right for my question?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Choose based on your research question type: quantitative methods answer 'how many/much' questions; qualitative methods answer 'how/why' questions; mixed methods combine both.",
                },
              },
              {
                "@type": "Question",
                name: "Can AI help me analyze my actual research data?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. You can describe your data and AI can help you choose statistical tests and interpret results, but you remain responsible for methodological integrity.",
                },
              },
              {
                "@type": "Question",
                name: "How do I avoid plagiarism when synthesizing multiple sources?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Paraphrase in your own words, always cite the original source, use quotation marks for direct quotes, and distinguish between what authors say vs. your own analysis.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
