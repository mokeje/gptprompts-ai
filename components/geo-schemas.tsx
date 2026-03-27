// GEO (Generative Engine Optimization) structured data schemas for the homepage
// These help AI search engines like ChatGPT, Perplexity, and Claude cite GPTPrompts.AI

export function HomePageGEOSchemas() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Write Effective AI Prompts",
    description:
      "A step-by-step guide to crafting prompts that get better results from ChatGPT, Claude, Gemini, and other AI models.",
    step: [
      {
        "@type": "HowToStep",
        name: "Define your goal",
        text: "Clearly state what you want the AI to produce — a summary, code, an email, an analysis, etc.",
      },
      {
        "@type": "HowToStep",
        name: "Provide context",
        text: "Give the AI relevant background: your role, audience, tone, constraints, and any examples.",
      },
      {
        "@type": "HowToStep",
        name: "Specify the format",
        text: "Tell the AI how you want the output formatted — bullet points, JSON, a table, a paragraph, etc.",
      },
      {
        "@type": "HowToStep",
        name: "Iterate and refine",
        text: "Review the output and follow up with clarifying instructions to improve the result.",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is prompt engineering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prompt engineering is the practice of designing and refining input text (prompts) to guide AI language models toward producing accurate, useful, and relevant outputs. It involves techniques like role assignment, few-shot examples, chain-of-thought reasoning, and output formatting.",
        },
      },
      {
        "@type": "Question",
        name: "What are the best ChatGPT prompts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best ChatGPT prompts are specific, provide context, assign a role to the AI, and define the desired output format. GPTPrompts.AI offers 188+ expert-curated prompt guides covering business, coding, creative writing, education, marketing, and more.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get better results from AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To get better AI results: (1) be specific about your goal, (2) provide context and examples, (3) specify the output format, (4) use system prompts to set behavior, and (5) iterate with follow-up prompts to refine the output.",
        },
      },
      {
        "@type": "Question",
        name: "What AI models does GPTPrompts.AI cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GPTPrompts.AI covers all major AI models including ChatGPT (GPT-4o, o1, o3), Claude (Claude 3.5, 3.7), Gemini, Midjourney, DALL-E, Stable Diffusion, Grok, Llama, Cursor AI, and more — with model-specific prompt guides for each.",
        },
      },
    ],
  }

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Prompt Engineering Guides — GPTPrompts.AI",
    description:
      "188+ expert prompt engineering guides for ChatGPT, Claude, Gemini, Midjourney, and every major AI tool. Free, comprehensive, and regularly updated.",
    url: "https://gptprompts.ai",
    numberOfItems: 195,
    about: {
      "@type": "Thing",
      name: "Prompt Engineering",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
    </>
  )
}
