import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Prompt Engineering for Researchers: Academic Writing & Analysis | GPTPrompts.AI",
  description:
    "Master AI-powered research with prompts for literature reviews, research questions, data analysis, academic writing, citations, and methodology. Copy-paste templates for PhD students, academics, and researchers.",
  keywords:
    "prompt engineering researchers, academic writing prompts, literature review AI, research prompts, academic analysis, ChatGPT research, Claude academic writing, thesis prompts",
  openGraph: {
    title: "Prompt Engineering for Researchers: Academic Writing & Analysis",
    description:
      "Master AI-powered research with prompts for literature reviews, methodology, data analysis, and academic writing.",
    type: "article",
  },
}

export default function PromptEngineeringResearchersPage() {
  const sections = [
    { id: "why-prompt-engineering", title: "Why Prompt Engineering Matters" },
    { id: "core-principles", title: "Core Principles" },
    { id: "literature-reviews", title: "Literature Reviews" },
    { id: "research-design", title: "Research Design" },
    { id: "data-analysis", title: "Data Analysis" },
    { id: "academic-writing", title: "Academic Writing" },
    { id: "citations", title: "Citations & References" },
    { id: "advanced-techniques", title: "Advanced Techniques" },
    { id: "faq", title: "FAQ" },
  ]

  const faqItems = [
    {
      question: "Can AI help write my thesis or dissertation?",
      answer:
        "AI can assist with brainstorming, outlining, drafting sections, editing, and synthesizing literature. However, always validate AI outputs against primary sources and ensure your work meets academic integrity standards.",
    },
    {
      question: "How do I avoid AI hallucinating citations?",
      answer:
        "Never trust AI-generated citations without verification. Use AI to suggest search terms and summarize papers you've already read. Always cross-reference with Google Scholar, Scopus, or your library database.",
    },
    {
      question: "What's the best AI model for academic writing?",
      answer:
        "Claude excels at nuanced, long-form academic writing. ChatGPT-4 is versatile for research questions and methodology. Gemini is strong for literature synthesis. Use the model that best fits your specific task.",
    },
    {
      question: "How do I prompt AI for qualitative data analysis?",
      answer:
        "Provide interview excerpts or field notes, specify your methodology (e.g., thematic analysis, grounded theory), and ask for initial codes, theme suggestions, and trustworthiness considerations.",
    },
    {
      question: "Can AI help with statistical analysis interpretation?",
      answer:
        "Yes. Provide your results (coefficients, p-values, confidence intervals) and ask for plain-language interpretation, comparison to literature, and discussion of limitations and alternative explanations.",
    },
    {
      question: "How do I use AI for literature review synthesis?",
      answer:
        "Create comparative tables of studies by methodology, findings, and limitations. Ask AI to identify patterns, contradictions, and gaps. Use prompt chaining: summarize → compare → identify gaps → suggest questions.",
    },
    {
      question: "Is it ethical to use AI in academic research?",
      answer:
        "Check your institution's policy. Generally, using AI as a research assistant (brainstorming, editing, synthesis) is acceptable. Always disclose AI use as required and ensure outputs are original and verified.",
    },
    {
      question: "How do I improve the academic tone of AI outputs?",
      answer:
        "Specify discipline, level (PhD, master's), and audience (peer reviewers, journal editors). Ask for formal, precise language while maintaining accessibility. Request revisions to remove redundancy and passive voice.",
    },
    {
      question: "Can AI help design research methodology?",
      answer:
        "Yes. Describe your research question, population, and constraints. Ask for methodology recommendations with pros/cons, sampling strategies, data collection instruments, and validity considerations.",
    },
    {
      question: "How do I use AI for citation formatting?",
      answer:
        "Provide incomplete references and ask for conversion to your style (APA, MLA, Chicago). Always verify the output against style guides. AI can also generate annotated bibliography entries.",
    },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-white">
        <div className="bg-gradient-to-b from-purple-50 to-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
            <div className="flex items-center gap-2 text-purple-600 mb-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <Link href="/website-links" className="hover:underline">
                Prompts Library
              </Link>
              <span>/</span>
              <span>Researchers</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Prompt Engineering for Researchers: Academic Writing & Analysis
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Master AI-powered research with prompts for literature reviews, research questions, data analysis,
              academic writing, citations, and methodology.
            </p>
          </div>
        </div>

        {/* Content with sidebar */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">On This Page</h3>
                <nav className="space-y-2">
                  {sections.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-medium">
                        {index + 1}
                      </span>
                      {section.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    href="/website-links"
                    className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 font-medium"
                  >
                    <span>Browse All Prompts</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 prose prose-lg max-w-none">
              {/* Hero Section */}
              <header className="space-y-4">
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Academic & Research
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Prompt Engineering for Researchers: Academic Writing & Analysis
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  AI is now a powerful research partner: it can help you brainstorm topics, structure literature
                  reviews, draft sections, interpret data, and polish academic writing. Master prompt engineering to get
                  publication-ready results.
                </p>
              </header>

              {/* Section 1: Why Prompt Engineering Matters */}
              <section id="why-prompt-engineering" className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-600">
                  1. Why Prompt Engineering Matters for Academic Work
                </h2>
                <p className="text-lg leading-relaxed">
                  AI tools like ChatGPT, Claude, and Gemini can generate ideas and narrow broad topics into researchable
                  questions, summarize and synthesize dozens of papers in minutes, help structure outlines, arguments,
                  and methodology sections, interpret statistical results and suggest discussion points, and improve
                  clarity, tone, and flow in drafts.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Generic Prompts Fail in Academia</h3>
                  <p className="text-red-700">If your prompts are too generic, you'll get:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-red-700">
                    <li>Superficial, generic summaries</li>
                    <li>Poorly structured arguments</li>
                    <li>Inaccurate or hallucinated citations</li>
                    <li>Overly flowery or "AI-sounding" prose</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Prompt Engineering Fixes This</h3>
                  <p className="text-green-700">Give the AI:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-green-700">
                    <li>
                      <strong>Clear context:</strong> discipline, level, audience
                    </li>
                    <li>
                      <strong>Specific instructions:</strong> what to do, how to do it
                    </li>
                    <li>
                      <strong>Constraints:</strong> format, tone, citation style, safety rules
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 2: Core Principles */}
              <section id="core-principles" className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-600">2. Core Principles of Academic Prompting</h2>

                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Principle 1: Be Specific, Not Vague</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-red-800 mb-2">❌ Weak Prompt</p>
                        <p className="text-sm italic text-red-700">"Write about AI in education."</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-green-800 mb-2">✅ Strong Prompt</p>
                        <p className="text-sm text-green-700">
                          "I am writing a literature review on AI-powered tutoring systems in secondary education (ages
                          11–18). Summarize the key findings, methodologies, and limitations of 5–7 recent empirical
                          studies (2020–2025) on this topic. Organize the summary by theme (e.g., effectiveness, student
                          engagement, equity issues)."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Principle 2: Provide Context and Goals</h3>
                    <p className="mb-4">Always include:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Discipline and level:</strong> e.g., "social sciences PhD," "engineering master's,"
                        "undergraduate biology"
                      </li>
                      <li>
                        <strong>Purpose:</strong> e.g., "literature review for a journal article," "research proposal
                        for a grant," "dissertation chapter"
                      </li>
                      <li>
                        <strong>Audience:</strong> e.g., "peer reviewers," "supervisor," "general academic audience"
                      </li>
                      <li>
                        <strong>Constraints:</strong> e.g., word limit, citation style (APA, MLA, Chicago), ethical
                        considerations
                      </li>
                    </ul>
                    <div className="mt-4 bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Example:</p>
                      <p className="text-sm italic">
                        "I am a PhD student in public health writing a systematic literature review on the impact of air
                        pollution on child respiratory health in low-income urban areas. Goal: Identify key risk
                        factors, study designs, and gaps in the literature. Audience: Peer reviewers and journal
                        editors. Constraints: APA 7th edition, ~3,000 words, focus on studies from 2015–2025."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Principle 3: Use Special Characters for Clarity</h3>
                    <ul className="space-y-3">
                      <li>
                        <strong>Double quotes " "</strong> for exact phrasing: "Explain why this study's conclusion
                        about 'no significant effect' might be misleading."
                      </li>
                      <li>
                        <strong>Backticks `</strong> for variables, terms, and citations: "Interpret the regression
                        coefficient for `age` in this model."
                      </li>
                      <li>
                        <strong>Triple backticks \`\`\`</strong> for code, equations, or long excerpts
                      </li>
                      <li>
                        <strong>Triple quotes """</strong> for multi-line text (abstracts, feedback, long quotes)
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3: Literature Reviews */}
              <section id="literature-reviews" className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-600">
                  3. Prompting for Literature Reviews and Synthesis
                </h2>

                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">3.1 Topic Refinement and Research Questions</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "Act as an academic mentor in [discipline, e.g., psychology]. Suggest 5 clear, researchable
                        subtopics on [broad topic, e.g., social media and mental health] with explanations for why each
                        is significant and timely. For each subtopic, suggest 2–3 strong, open-ended research questions
                        suitable for a [level, e.g., master's thesis]."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">3.2 Literature Review Mapping</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "I have 5–7 recent studies on [topic]. Create a table comparing them by: Research question,
                        Methodology (qualitative/quantitative/mixed), Sample size and characteristics, Key findings,
                        Limitations, Citation (author, year). Use this to identify patterns, contradictions, and gaps in
                        the literature."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">3.3 Identifying Gaps and Originality</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "Based on the literature on [topic], identify 3–5 under-researched areas or contradictions in
                        the findings. For each gap: Explain why it is important, Suggest a specific research question
                        that could address it, Recommend a suitable methodology and population."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Research Design */}
              <section id="research-design" className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-600">4. Prompting for Research Design and Methodology</h2>

                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">4.1 Research Questions and Hypotheses</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "I am studying [topic] in [population]. Suggest 3–5 strong, open-ended research questions that
                        align with [level, e.g., graduate-level academic standards]. For each question: Explain why it
                        is researchable and significant, Suggest a suitable methodology
                        (qualitative/quantitative/mixed), Recommend a target population and sampling strategy."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">4.2 Methodology Justification</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "Explain the pros and cons of using [specific methodology, e.g., case study, RCT, grounded
                        theory] in a research paper on [topic]. Include: Typical applications and strengths, Common
                        limitations and threats to validity, Examples from published studies in [discipline], How to
                        address key limitations in my study."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">4.3 Data Collection and Instruments</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Survey Design Prompt:</p>
                      <p className="text-sm italic">
                        "I am conducting a survey on [topic] with [population]. Suggest 10–15 well-worded, non-leading
                        questions that cover: Demographics, Key constructs (e.g., attitudes, behaviors, perceptions),
                        Potential moderating/mediating variables. Use Likert scales where appropriate and avoid
                        double-barreled questions."
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg mt-4">
                      <p className="text-sm font-medium mb-2">Interview Guide Prompt:</p>
                      <p className="text-sm italic">
                        "Create a semi-structured interview guide for [topic] with [population]. Include: Opening
                        questions to build rapport, Core questions on key themes, Probing questions to explore depth,
                        Closing questions to invite additional comments."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Data Analysis */}
              <section id="data-analysis" className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-600">
                  5. Prompting for Data Analysis and Interpretation
                </h2>
                <p className="text-lg">
                  For more data analysis techniques, see our{" "}
                  <Link href="/prompt-engineering-data-analysis" className="text-primary hover:underline">
                    complete data analysis prompting guide
                  </Link>
                  .
                </p>

                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">5.1 Descriptive and Inferential Statistics</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "I have a dataset with variables: [list key variables, e.g., age, income, satisfaction_score,
                        region]. Suggest appropriate descriptive statistics (e.g., means, medians, standard deviations,
                        frequencies) and visualizations (e.g., histograms, box plots, bar charts) for each variable.
                        Then, suggest 2–3 inferential tests (e.g., t-test, ANOVA, regression) to answer the research
                        question: [insert question]."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">5.2 Qualitative Data Analysis</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Thematic Analysis Prompt:</p>
                      <p className="text-sm italic">
                        "I have interview transcripts on [topic]. Suggest a step-by-step process for thematic analysis,
                        including: How to code the data, How to identify and refine themes, How to ensure
                        trustworthiness (credibility, transferability, etc.), How to present themes in the results
                        section."
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg mt-4">
                      <p className="text-sm font-medium mb-2">Coding Prompt:</p>
                      <p className="text-sm italic">
                        "Here is an excerpt from an interview: [insert text]. Suggest 2–3 initial codes for this excerpt
                        and explain the reasoning behind each code. Then, suggest how these codes might be grouped into
                        broader themes."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">5.3 Interpreting Results and Writing Discussion</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "I am writing the discussion section for a paper on [topic]. Help me structure it to: Summarize
                        key findings, Compare them to previous studies, Explain unexpected results, Discuss theoretical
                        and practical implications, Acknowledge limitations, Suggest directions for future research."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Academic Writing */}
              <section id="academic-writing" className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-600">6. Prompting for Academic Writing</h2>
                <p className="text-lg">
                  See also our{" "}
                  <Link href="/essay-prompts" className="text-primary hover:underline">
                    essay prompts guide
                  </Link>{" "}
                  and{" "}
                  <Link href="/chatgpt-creative-writing" className="text-primary hover:underline">
                    creative writing prompts
                  </Link>
                  .
                </p>

                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">6.1 Abstracts and Titles</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Abstract Prompt:</p>
                      <p className="text-sm italic">
                        "Write a 200-word abstract for a paper on [topic], summarizing: Problem/rationale,
                        Objectives/research questions, Methods (design, sample, analysis), Key results,
                        Significance/implications. Use a formal academic style and avoid jargon where possible."
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg mt-4">
                      <p className="text-sm font-medium mb-2">Title Prompt:</p>
                      <p className="text-sm italic">
                        "Suggest 5–7 concise, informative titles for a paper on [topic]. Each title should: Include key
                        variables or concepts, Indicate the study design or population if relevant, Be suitable for a
                        [journal type, e.g., high-impact international journal]."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">6.2 Introductions and Literature Reviews</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Introduction Prompt:</p>
                      <p className="text-sm italic">
                        "Write an engaging opening paragraph for the introduction of a paper on [topic]. Then, outline
                        the key points to cover in the rest of the introduction: Background and context, Problem
                        statement, Objectives/research questions, Significance of the study."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">6.3 Arguments and Thesis Statements</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "Evaluate this thesis statement: [insert thesis]. Suggest revisions that make it more precise,
                        arguable, and academically rigorous. Explain why each revision improves the statement."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">6.4 Editing and Polishing</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "Rewrite the following paragraph in a clear, concise, and formal academic style while improving
                        readability: [insert text]. Avoid passive voice where possible, remove redundancy, and ensure
                        logical flow."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Citations */}
              <section id="citations" className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-600">7. Prompting for Citations and References</h2>

                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">7.1 Annotated Bibliographies</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "Create an annotated bibliography entry for [insert source] in APA format, including: Full
                        citation, A 2-sentence summary of the main argument and findings, A 1-sentence note on how it
                        relates to my topic: [your topic]."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">7.2 Citation and Formatting Help</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "Convert this reference into [citation style, e.g., APA 7th edition]: [insert incomplete or
                        messy reference]. Ensure all elements (author, year, title, journal, volume, issue, pages, DOI)
                        are correctly formatted."
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg mt-4">
                      <p className="text-sm font-medium mb-2">In-Text Citations Prompt:</p>
                      <p className="text-sm italic">
                        "Show me how to cite [author, year] in [citation style, e.g., APA] for: A direct quote, A
                        paraphrase, A source with multiple authors."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Advanced Techniques */}
              <section id="advanced-techniques" className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-600">8. Advanced Prompting Techniques for Researchers</h2>

                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">8.1 Chain of Thought for Complex Analysis</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "I need to analyze the methodology of a study on [topic]. Before providing recommendations:
                        First, clarify what key elements of methodology are most relevant for this type of study. Then,
                        confirm which aspects (e.g., sampling, measurement, analysis) deserve the most attention.
                        Finally, provide a structured critique of the study's methodology, including strengths and
                        limitations. Walk through your reasoning at each step."
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">8.2 Clarify → Confirm → Complete</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Prompt:</p>
                      <p className="text-sm italic">
                        "I want to write a discussion section comparing my results to three key studies: [Study A],
                        [Study B], and [Study C]. Do you have any clarifying questions about my results or the studies
                        before suggesting a structure?"
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">8.3 Prompt Chaining for Multi-Step Workflows</h3>
                    <p className="mb-4">Treat your research as a pipeline:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong>Literature review:</strong> "Summarize recent research on [topic] and identify 3–5 key
                        gaps."
                      </li>
                      <li>
                        <strong>Research questions:</strong> "Based on these gaps, suggest 3–5 strong, open-ended
                        research questions."
                      </li>
                      <li>
                        <strong>Methodology:</strong> "For the question '[insert question]', suggest a suitable
                        methodology and justify it."
                      </li>
                      <li>
                        <strong>Data analysis:</strong> "Interpret these results and suggest 2–3 possible conclusions."
                      </li>
                      <li>
                        <strong>Writing:</strong> "Write a 200-word abstract summarizing the problem, methods, results,
                        and significance."
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Section 9: FAQ */}
              <section id="faq" className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-600">9. Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="bg-card border rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Resources */}
              <section className="bg-muted/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    href="/chatgpt-creative-writing"
                    className="block p-4 bg-card rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-primary">Creative Writing Prompts</h3>
                    <p className="text-sm text-muted-foreground">Storytelling and character development</p>
                  </Link>
                  <Link
                    href="/claude-artifacts-guide"
                    className="block p-4 bg-card rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-primary">Claude Artifacts Guide</h3>
                    <p className="text-sm text-muted-foreground">Interactive documents and code</p>
                  </Link>
                  <Link
                    href="/essay-prompts"
                    className="block p-4 bg-card rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-primary">Essay Prompts</h3>
                    <p className="text-sm text-muted-foreground">Academic and persuasive writing</p>
                  </Link>
                  <Link
                    href="/prompt-engineering-data-analysis"
                    className="block p-4 bg-card rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-primary">Data Analysis Prompts</h3>
                    <p className="text-sm text-muted-foreground">SQL, Python, and analytics</p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-border mt-16">
          <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Academic & Research</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/essay-prompts" className="hover:text-primary">
                      Essay Prompts
                    </Link>
                  </li>
                  <li>
                    <Link href="/chatgpt-creative-writing" className="hover:text-primary">
                      Creative Writing
                    </Link>
                  </li>
                  <li>
                    <Link href="/prompt-engineering-data-analysis" className="hover:text-primary">
                      Data Analysis
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">AI Models</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/chatgpt-prompts" className="hover:text-primary">
                      ChatGPT Prompts
                    </Link>
                  </li>
                  <li>
                    <Link href="/claude-prompts" className="hover:text-primary">
                      Claude Prompts
                    </Link>
                  </li>
                  <li>
                    <Link href="/gemini-prompts" className="hover:text-primary">
                      Gemini Prompts
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Techniques</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/few-shot-prompting" className="hover:text-primary">
                      Few-Shot Prompting
                    </Link>
                  </li>
                  <li>
                    <Link href="/chatgpt-role-based-prompting" className="hover:text-primary">
                      Role-Based Prompting
                    </Link>
                  </li>
                  <li>
                    <Link href="/avoiding-hallucinations" className="hover:text-primary">
                      Avoiding Hallucinations
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/website-links" className="hover:text-primary">
                      Prompts Library
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-write-effective-ai-prompts" className="hover:text-primary">
                      Effective AI Prompts
                    </Link>
                  </li>
                  <li>
                    <Link href="/common-ai-prompt-mistakes" className="hover:text-primary">
                      Common Mistakes
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} GPTPrompts.AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
