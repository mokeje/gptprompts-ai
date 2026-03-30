'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

function CopyCard({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-white/20 hover:bg-white/[0.07] cursor-pointer"
      onClick={() => {
        navigator.clipboard.writeText(prompt)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
    >
      <p className="pr-10 text-[15px] leading-relaxed text-gray-300">{prompt}</p>
      <div className="absolute right-4 top-4 text-gray-500 group-hover:text-white transition-colors">
        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
      </div>
    </div>
  )
}

export default function ResearchersPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const promptCategories = [
    {
      title: 'Literature Review & Research Synthesis',
      prompts: [
        'Synthesize findings from 10+ academic papers on climate change adaptation strategies. Identify common themes, contradictions, and gaps in current research. Organize results by geographic region and policy approach.',
        'Create a comprehensive literature map for machine learning applications in healthcare. Organize papers by application area (diagnostics, drug discovery, patient monitoring), publication year, and effectiveness metrics.',
        'Summarize recent peer-reviewed research on renewable energy adoption barriers. Group findings by barrier type (economic, political, technical, social) and identify which barriers researchers prioritize across different studies.',
        'Analyze citation patterns in quantum computing papers from the last 5 years. Identify key researchers, foundational papers, emerging subtopics, and the conceptual evolution of the field.',
        'Create a systematic review outline for studies on remote work productivity. Identify inclusion/exclusion criteria, key variables to extract, quality assessment criteria, and synthesis approach.',
        'Synthesize findings from anthropological studies on digital privacy across cultures. Organize by cultural region, identify cultural differences in privacy perceptions, and note methodological approaches used.'
      ]
    },
    {
      title: 'Research Design & Methodology',
      prompts: [
        'Design a mixed-methods study investigating factors influencing student retention in STEM programs. Specify quantitative metrics, qualitative interview questions, sample size rationale, and integration approach.',
        'Develop a research protocol for a longitudinal study tracking health outcomes over 10 years. Include cohort definition, data collection points, variable operationalization, attrition mitigation strategies, and ethical considerations.',
        'Create a quasi-experimental design to evaluate the effectiveness of a new teaching intervention. Address threats to validity, control group selection, outcome measures, and analysis plan.',
        'Design a qualitative case study examining organizational change in a nonprofit during a crisis. Specify case selection criteria, data sources, interview approach, coding strategy, and trustworthiness procedures.',
        'Develop a randomized controlled trial protocol for testing a new cognitive behavioral therapy approach. Include randomization procedure, blinding strategy, primary/secondary outcomes, statistical power calculation, and stopping rules.',
        'Create a grounded theory study design exploring burnout in healthcare workers. Specify sampling strategy, theoretical sampling approach, data saturation criteria, and constant comparison method.'
      ]
    },
    {
      title: 'Data Analysis & Statistical Methods',
      prompts: [
        'Explain which statistical test is appropriate for my dataset: 150 participants, comparing depression scores across three intervention groups at pre/post timepoints. Account for potential violations of assumptions and suggest alternatives.',
        'Design an analysis plan for a multivariate study with 20 predictor variables and a continuous outcome. Address multicollinearity, variable selection, model validation, and interpretation challenges.',
        'Develop a qualitative coding strategy for interview transcripts about workplace discrimination. Specify initial codes vs. emergent codes, inter-rater reliability procedures, and how to handle conflicting interpretations.',
        'Create a structural equation modeling (SEM) framework to test a theoretical model of academic motivation. Specify measurement models, structural paths, fit indices to evaluate, and interpretation approach.',
        'Design a time-series analysis plan for analyzing environmental pollution trends over 30 years. Address seasonality, trend decomposition, anomaly detection, and forecasting.',
        'Develop a meta-analysis protocol for synthesizing effect sizes across 50 studies. Specify inclusion criteria, effect size extraction method, heterogeneity analysis, and publication bias assessment.'
      ]
    },
    {
      title: 'Hypothesis Generation & Theoretical Framework',
      prompts: [
        'Based on existing theory and empirical findings, develop three novel hypotheses about the relationship between social media use and mental health in adolescents. For each, specify theoretical mechanisms and measurable predictions.',
        'Create a conceptual model explaining how organizational culture influences employee innovation. Identify key variables, hypothesized relationships, moderators, and mediators.',
        'Develop a theoretical framework for understanding barriers to climate change action at the individual level. Integrate psychological, social, and structural factors; specify causal pathways.',
        'Generate research hypotheses about differential responses to a medical treatment based on genetic profiles. Specify the biological mechanisms, patient populations, and measurement approach.',
        'Create an integrated theoretical model explaining student success that combines socioeconomic, academic, and psychological factors. Specify direct and indirect effects.',
        'Develop hypotheses about how remote work affects team cohesion differently across industries. Specify industry characteristics that might explain differential effects and measurement approaches.'
      ]
    },
    {
      title: 'Academic Writing & Publication Strategy',
      prompts: [
        'Analyze the structure and conventions of high-impact research papers in my field (specify field). Provide a template for organizing methods, results, and discussion sections based on examples.',
        'Create an outline for an empirical research paper testing whether cognitive load affects learning retention. Structure should include motivation, theoretical predictions, methodology, anticipated findings, and implications.',
        'Develop a strategy for writing a compelling abstract for a conference submission. Specify elements that reviewers prioritize, common weaknesses, and revision checklist.',
        'Create a guide for responding to reviewer critiques on a manuscript revision. Include strategies for identifying valid vs. invalid critiques, crafting responses, and deciding when to disagree.',
        'Design an argument structure for a literature review paper that challenges prevailing assumptions in my field. Include how to acknowledge existing work while positioning your critique.',
        'Develop a publication timeline and journal selection strategy for multiple papers from a single dissertation. Specify which findings go to which journals and how to balance novelty vs. methodological rigor.'
      ]
    },
    {
      title: 'Research Communication & Dissemination',
      prompts: [
        'Create a strategy for communicating research findings to policymakers in the education sector. Specify which findings matter most, how to frame recommendations, and what evidence formats work best.',
        'Develop a plan to present complex statistical findings to a non-technical audience. Include visualization strategies, analogies, and how to communicate uncertainty.',
        'Design a social media content strategy for disseminating your research to practitioners. Specify key messages, content formats, engagement tactics, and how to balance accuracy with accessibility.',
        'Create a media training brief for preparing to discuss your research in journalism interviews. Specify key talking points, how to handle misunderstandings, and how to communicate limitations.',
        'Develop a strategy for building a research community around your work. Include conference presentations, workshops, collaborative publications, and engagement approaches.',
        'Create a plan for translating academic research into publicly accessible guides or toolkits. Specify target audience, content structure, review process, and distribution channels.'
      ]
    }
  ]

  const faqs = [
    {
      question: 'How do I identify the right research question for my study?',
      answer: 'Start by reviewing the literature systematically. Ask: What is not yet known? What contradicts existing findings? What new context or population needs study? Your question should be specific enough to guide research design, answerable with available methods and resources, and important to your field. Discuss with advisors or mentors to validate that your question has value.'
    },
    {
      question: 'What sample size do I need for my study?',
      answer: 'Sample size depends on: your statistical test, expected effect size, desired power (typically 80%), and significance level (typically p < .05). Use power analysis calculators (G*Power, online tools) specific to your test. For qualitative research, aim for saturation — continue collecting data until new themes stop emerging, typically 15-30 interviews depending on complexity.'
    },
    {
      question: 'How do I ensure my research is ethical?',
      answer: 'Obtain ethics approval from your institution\'s Institutional Review Board (IRB) or equivalent before starting. Ensure informed consent from participants, protect confidentiality, minimize harm, and respect autonomy. Document all ethical decisions. For literature reviews and meta-analyses, cite sources accurately and disclose any conflicts of interest. Follow discipline-specific guidelines (APA, ESOMAR, etc.)'
    },
    {
      question: 'What\'s the difference between correlation and causation in research?',
      answer: 'Correlation means two variables change together; causation means one causes changes in the other. Correlational studies cannot establish causation because confounding variables might explain the relationship. Randomized experiments with manipulation and control groups best establish causation. Use causal language carefully: avoid "causes" in correlational studies; instead say "is associated with" or "predicts."'
    },
    {
      question: 'How do I handle missing data in my analysis?',
      answer: 'First, understand why data is missing: completely at random (MCAR), missing at random (MAR), or missing not at random (MNAR). Options include: listwise deletion (loses information), pairwise deletion (reduces power), mean imputation (reduces variance), or modern methods like multiple imputation or maximum likelihood. The best approach depends on the amount and pattern of missingness. Sensitivity analysis tests robustness.'
    },
    {
      question: 'What makes a literature review systematic vs. narrative?',
      answer: 'Narrative reviews summarize research on a topic based on the author\'s judgment; useful for overviews but prone to bias. Systematic reviews use a pre-registered protocol, transparent inclusion/exclusion criteria, exhaustive search, and structured data extraction; more rigorous but labor-intensive. Meta-analyses statistically combine results across studies. Choose based on your question\'s novelty and importance.'
    },
    {
      question: 'How do I report effect sizes and what do they mean?',
      answer: 'Effect sizes quantify the magnitude of an effect (e.g., Cohen\'s d, correlation r, odds ratio). Report them alongside p-values because p-values only indicate statistical significance, not practical importance. Interpret effect sizes using field-specific guidelines: for Cohen\'s d, 0.2 is small, 0.5 is medium, 0.8 is large. Always include confidence intervals to convey precision.'
    },
    {
      question: 'What\'s the best way to prevent p-hacking and ensure reproducibility?',
      answer: 'Register your study protocol and analysis plan before analyzing data (Open Science Framework, AsPredicted). Specify hypotheses, primary outcomes, and analysis approach in advance. Report all results, including null findings. Avoid selective reporting, multiple comparisons without correction, and post-hoc hypothesis generation. Preregistration reduces bias and increases trust in your findings.'
    },
    {
      question: 'How do I decide between parametric and non-parametric tests?',
      answer: 'Check your assumptions: parametric tests (t-test, ANOVA) assume normality and homogeneity of variance; non-parametric tests (Mann-Whitney U, Kruskal-Wallis) make fewer assumptions. If assumptions are violated and sample size is small, use non-parametric tests. For large samples, parametric tests are robust to violations. When in doubt, run both and compare; large discrepancies suggest assumption violations.'
    },
    {
      question: 'How should I interpret confidence intervals?',
      answer: 'A 95% confidence interval means: if you repeated your study 100 times, approximately 95 of those intervals would contain the true population value. Wider intervals indicate more uncertainty; narrower intervals indicate more precision. If a CI includes zero or does not cross a null value, the result is not statistically significant at that level. Always report CIs alongside point estimates.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/5 px-6 py-20 sm:px-12 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/5 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/5">
            <span className="text-sm font-medium text-[#7C3AED]">Academic Research</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            ChatGPT Prompts for Researchers & Academics
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Accelerate your research with 36 expert prompts. Master literature reviews, research design, data analysis, hypothesis generation, academic writing, and research communication.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-lg bg-[#7C3AED] text-white font-semibold hover:bg-[#7C3AED]/90 transition-colors">
              Copy All Prompts
            </button>
            <button className="px-8 py-3 rounded-lg border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Prompt Categories */}
      <div className="px-6 py-16 sm:px-12">
        <div className="max-w-4xl">
          {promptCategories.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">{category.title}</h2>
              <div className="grid gap-4">
                {category.prompts.map((prompt, pIdx) => (
                  <CopyCard key={pIdx} prompt={prompt} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 py-16 sm:px-12 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-white">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <span className={`transform transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02] text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Pages Section */}
      <div className="px-6 py-16 sm:px-12 border-t border-white/5">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">Explore More Prompt Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a href="/ai-prompts-linkedin" className="group p-6 rounded-lg border border-white/10 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#0A66C2]">AI Prompts for LinkedIn</h3>
              <p className="text-sm text-gray-400">Posts, profiles, and outreach strategies</p>
            </a>
            <a href="/chatgpt-prompts-google-sheets" className="group p-6 rounded-lg border border-white/10 hover:border-[#0F9D58]/50 hover:bg-[#0F9D58]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#0F9D58]">AI Prompts for Google Sheets</h3>
              <p className="text-sm text-gray-400">Formulas, automation, and analytics</p>
            </a>
            <a href="/ai-prompts-for-startups" className="group p-6 rounded-lg border border-white/10 hover:border-[#FF6B35]/50 hover:bg-[#FF6B35]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FF6B35]">AI Prompts for Startups</h3>
              <p className="text-sm text-gray-400">Founder strategies and growth hacks</p>
            </a>
            <a href="/ai-prompts-for-writers" className="group p-6 rounded-lg border border-white/10 hover:border-[#D946EF]/50 hover:bg-[#D946EF]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#D946EF]">AI Prompts for Writers</h3>
              <p className="text-sm text-gray-400">Content creation and storytelling</p>
            </a>
            <a href="/perplexity-deep-research-prompts" className="group p-6 rounded-lg border border-white/10 hover:border-[#20b2aa]/50 hover:bg-[#20b2aa]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#20b2aa]">Perplexity Deep Research Prompts</h3>
              <p className="text-sm text-gray-400">AI-powered research with cited live sources</p>
            </a>
            <a href="/gpt-4-5-prompts" className="group p-6 rounded-lg border border-white/10 hover:border-[#10a37f]/50 hover:bg-[#10a37f]/5 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#10a37f]">GPT-4.5 Prompts</h3>
              <p className="text-sm text-gray-400">OpenAI's most advanced model for complex analysis</p>
            </a>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ChatGPT Prompts for Researchers & Academics',
            description: 'Master academic research with 36 expert-crafted ChatGPT prompts for literature reviews, research design, data analysis, hypothesis generation, academic writing, and research communication.',
            image: 'https://gptprompts.ai/og-image.png',
            datePublished: new Date().toISOString(),
            author: {
              '@type': 'Organization',
              name: 'GPT Prompts'
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />
    </div>
  )
}
