import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gptprompts.ai"
  const lastModified = new Date()

  // Core pages
  const corePages = ["", "/careers", "/journal-guide"]

  // AI Model Prompt Pages
  const aiModelPages = [
    "/chatgpt-prompts",
    "/claude-prompts",
    "/gemini-prompts",
    "/perplexity-prompts",
    "/midjourney-prompts",
    "/stable-diffusion-prompts",
    "/kimi-ai-prompts",
    "/meta-ai-prompts",
    "/chatgpt-o3-prompts",
    "/capcut-ai-prompts",
    "/veo-3-prompts",
    "/gpt-4-5-prompts",
    "/perplexity-deep-research-prompts",
    "/custom-gpts-prompts",
    "/claude-projects-prompts",
  ]

  const advancedAIPages = [
    "/viggle-ai-prompts",
    "/gemini-ai-guide",
    "/janitor-ai-guide",
    "/google-ai-studio",
    "/blackbox-ai",
    "/pixverse-ai",
    "/hailuo-ai",
    "/leonardo-ai",
    "/gamma-ai",
    "/krea-ai",
    "/welcome-ai",
    "/suno-ai",
  ]

  // Career & Writing Prompt Pages
  const careerWritingPages = [
    "/resume-prompts",
    "/essay-prompts",
    "/cover-letter-prompts",
    "/writing-prompts",
    "/story-prompts",
  ]

  // Specialized Prompt Pages
  const specializedPages = ["/image-prompts", "/sql-prompts"]

  // University Admission Pages
  const universityPages = [
    "/nyu-essay-prompts",
    "/uc-essay-prompts",
    "/stanford-essay-prompts",
    "/ut-essay-prompts",
    "/umich-essay-prompts",
    "/uw-essay-prompts",
    "/umd-essays",
    "/uchicago-essays",
    "/penn-state-essays",
    "/virginia-tech-essays",
    "/wisconsin-essays",
    "/princeton-essays",
    "/uga-essays",
    "/common-app-essays",
    "/scholarship-essays",
  ]

  // Standardized Test Pages
  const testPages = ["/ielts-prompts", "/toefl-prompts", "/gmat-prompts", "/gre-prompts", "/sat-prompts"]

  const resourcePages = ["/free-ai-prompts", "/coolest-chatgpt-prompts", "/good-ai-prompts"]

  const newResourcePages = [
    "/virtual-assistant-prompts",
    "/creative-writing-prompts-beginners",
    "/photo-editing-prompts",
    "/social-media-marketing-prompts",
    "/human-like-prompts",
    "/linkedin-professional-headshots",
    "/perfect-resume-ai",
    "/prompt-best-practices",
    "/prompt-engineering-fundamentals",
    "/ai-prompt-generators",
    "/chatgpt-prompts-library",
    "/midjourney-guide",
    "/write-ai-prompts-techniques",
  ]

  // SEO-optimized pages
  const newSEOPages = [
    "/human-sound-prompts",
    "/prompthero-promptbase-prompt-hunt",
    "/prompt-engineering-jobs-2026",
    "/stable-diffusion-guide",
    "/ai-writing-prompts",
    "/best-chatgpt-marketing-prompts",
    "/dalle-3-guide",
    "/story-prompts-creative",
    "/chatgpt-json-prompting",
    "/leonardo-ai-prompts",
    "/chatgpt-use-cases-2026",
  ]

  // Photo Guide Pages
  const photoGuidePages = ["/trending-ai-photo-prompts-2026", "/ai-birthday-photoshoot-prompts"]

  // ChatGPT Guide Pages
  const chatgptGuidePages = [
    "/chatgpt-business-productivity",
    "/chatgpt-custom-instructions",
    "/avoiding-hallucinations",
    "/few-shot-prompting",
    "/gpt-o1-guide",
  ]

  const chatgptAIGuidePages = [
    "/chatgpt-role-based-prompting",
    "/chatgpt-creative-writing",
    "/chatgpt-data-analysis",
    "/claude-artifacts-guide",
    "/chatgpt-api-prompting",
    "/chatgpt-code-generation",
  ]

  // Education and Test Prep Pages
  const educationTestPrepPages = [
    "/sat-act-prep",
    "/college-application-essays",
    "/ap-exam-study-guides",
    "/internship-job-preparation",
    "/gpa-optimization",
    "/gcse-revision",
    "/a-level-success",
    "/ucas-personal-statement",
  ]

  // Business and Creator Pages
  const businessCreatorPages = [
    "/etsy-sellers-prompts",
    "/youtube-thumbnails-titles",
    "/chatgpt-course-creators",
    "/agency-owners-prompts",
    "/gemini-vs-chatgpt-bloggers",
    "/tiktok-prompts-creators",
  ]

  // Professional and Healthcare Pages
  const professionalHealthcarePages = [
    "/therapist-counselor-prompts",
    "/chatgpt-for-nurses",
    "/real-estate-market-analysis",
    "/property-description-prompts",
    "/real-estate-lead-generation",
    "/medical-education-prompts",
  ]

  // Nonprofit and Real Estate Social Media Pages
  const nonprofitRealEstatePages = ["/nonprofit-grant-writing", "/real-estate-social-media"]

  // Professional Legal and Nonprofit Pages
  const legalNonprofitPages = [
    "/legal-brief-prompts",
    "/paralegal-prompts",
    "/legal-research-prompts",
    "/contract-review-prompts",
    "/nonprofit-marketing-prompts",
    "/fundraising-email-prompts",
    "/volunteer-recruitment-prompts",
    "/volunteer-recruitment-nonprofits",
  ]

  // SEO and LLM Pages
  const seoLLMPages = [
    "/llm-seo-prompt-library",
    "/instagram-reels-hooks",
    "/freelance-client-acquisition",
    "/long-tail-keyword-clusters",
  ]

  // Foundational Prompting Guide Pages
  const foundationalPromptingPages = [
    "/how-to-write-effective-ai-prompts",
    "/common-ai-prompt-mistakes",
    "/ai-prompts-ecommerce",
  ]

  // New Data Analysis and Research Pages
  const dataAnalysisResearchPages = ["/prompt-engineering-data-analysis", "/prompt-engineering-researchers"]

  const websiteLinks = ["/website-links"]

  const advancedPromptPages = [] // Declare the missing variable

  const aiToolsPages = ["/ai-tools-list"]

  // AI Tools Directory (added via tools.ts)
  const aiToolsDirectoryPages = [
    "/ai-tools",
    "/ai-tools/chatgpt",
    "/ai-tools/claude",
    "/ai-tools/gemini",
    "/ai-tools/grok",
    "/ai-tools/perplexity",
    "/ai-tools/microsoft-copilot",
    "/ai-tools/meta-ai",
    "/ai-tools/midjourney",
    "/ai-tools/dalle-3",
    "/ai-tools/stable-diffusion",
    "/ai-tools/flux-ai",
    "/ai-tools/adobe-firefly",
    "/ai-tools/craiyon",
    "/ai-tools/bing-image-creator",
    "/ai-tools/ideogram",
    "/ai-tools/sora",
    "/ai-tools/runway",
    "/ai-tools/kling-ai",
    "/ai-tools/kapwing",
    "/ai-tools/jasper",
    "/ai-tools/copy-ai",
    "/ai-tools/squibler",
    "/ai-tools/cursor",
    "/ai-tools/github-copilot",
    "/ai-tools/windsurf",
    "/ai-tools/v0",
    "/ai-tools/suno",
    "/ai-tools/udio",
    "/ai-tools/elevenlabs",
    "/ai-tools/notion-ai",
    "/ai-tools/grammarly",
    "/ai-tools/otter-ai",
  ]

  // AI Tool Comparison Pages
  const comparePages = [
    "/compare",
    "/compare/chatgpt-vs-claude",
    "/compare/chatgpt-vs-gemini",
    "/compare/claude-vs-gemini",
    "/compare/chatgpt-vs-perplexity",
    "/compare/chatgpt-vs-grok",
    "/compare/midjourney-vs-dalle-3",
    "/compare/midjourney-vs-stable-diffusion",
    "/compare/midjourney-vs-flux-ai",
    "/compare/dalle-3-vs-adobe-firefly",
    "/compare/cursor-vs-github-copilot",
    "/compare/cursor-vs-windsurf",
    "/compare/github-copilot-vs-windsurf",
    "/compare/sora-vs-runway",
    "/compare/sora-vs-kling-ai",
    "/compare/suno-vs-udio",
    "/compare/elevenlabs-vs-suno",
    "/compare/perplexity-vs-chatgpt",
    "/compare/midjourney-vs-ideogram",
  ]

  // Best AI For [Use Case] Pages
  const bestAIForPages = [
    "/best-ai-for",
    "/best-ai-for/writing",
    "/best-ai-for/coding",
    "/best-ai-for/students",
    "/best-ai-for/research",
    "/best-ai-for/image-generation",
    "/best-ai-for/video-creation",
    "/best-ai-for/marketing",
    "/best-ai-for/content-creators",
    "/best-ai-for/small-business",
    "/best-ai-for/music",
    "/best-ai-for/productivity",
    "/best-ai-for/social-media",
  ]

  // AI Tool Alternatives Pages
  const alternativesPages = [
    "/alternatives",
    "/alternatives/chatgpt",
    "/alternatives/claude",
    "/alternatives/gemini",
    "/alternatives/grok",
    "/alternatives/perplexity",
    "/alternatives/microsoft-copilot",
    "/alternatives/midjourney",
    "/alternatives/dalle-3",
    "/alternatives/stable-diffusion",
    "/alternatives/sora",
    "/alternatives/runway",
    "/alternatives/cursor",
    "/alternatives/github-copilot",
    "/alternatives/suno",
    "/alternatives/jasper",
    "/alternatives/elevenlabs",
  ]

  const aiToolPromptPages = [
    "/chatgpt-prompts-midjourney",
    "/runway-ml-prompts",
    "/dalle-3-prompts",
    "/playground-ai-prompts",
    "/adobe-firefly-prompts",
    "/leonardo-ai-prompts",
    "/canva-ai-prompts",
    "/midjourney-prompts-guide",
    "/stable-diffusion-advanced",
  ]

  // New AI tool prompting pages
  const aiToolVideoVoicePages = [
    "/ai-prompts-synthesia",
    "/ai-prompts-lovo",
    "/ai-prompts-invideo",
    "/ai-prompts-murf",
    "/ai-prompts-descript",
    "/ai-prompts-heygen",
    "/ai-prompts-elevenlabs",
  ]

  const aiToolProductivityPages = ["/ai-prompts-notion-ai", "/ai-prompts-clickup"]

  // Professional AI Prompting Guide Pages
  const professionalPromptingPages = [
    "/ai-prompts-coding",
    "/ai-prompts-education",
    "/ai-prompts-finance",
    "/ai-prompts-health-wellness-coaches",
  ]

  // New Pages (March 2026)
  const march2026Pages = [
    "/lovable-ai-prompts",
    "/v0-prompts",
    "/flux-ai-prompts",
    "/pika-ai-prompts",
    "/ideogram-ai-prompts",
    "/luma-ai-prompts",
    "/replit-agent-prompts",
    "/notebooklm-prompts",
    "/ai-prompts-product-managers",
    "/ai-prompts-hr-recruiting",
    "/ai-prompts-accountants",
    "/ai-prompts-interior-design",
    "/ai-prompts-lawyers",
    "/ai-prompts-small-business",
    "/ai-prompts-real-estate-agents",
    "/ai-prompts-teachers-educators",
    "/ai-prompts-coaches",
    "/ai-prompts-content-creators",
    "/chatgpt-email-marketing-prompts",
    "/chatgpt-social-media-manager-prompts",
  ]

  const march2026Batch2Pages = [
    "/grok-prompts",
    "/chatgpt-image-generation-prompts",
    "/cursor-ai-prompts",
    "/github-copilot-prompts",
    "/napkin-ai-prompts",
    "/ai-prompts-for-marketers",
    "/ai-prompts-for-data-analysts",
    "/ai-prompts-for-developers",
    "/ai-prompts-for-ux-designers",
    "/ai-prompts-for-journalists",
    "/ai-prompts-for-consultants",
    "/ai-prompts-for-photographers",
    "/chatgpt-prompts-excel",
    "/chatgpt-prompts-business-plans",
    "/ai-prompts-customer-service",
    "/ai-prompts-presentations",
    "/ai-prompts-brainstorming",
    "/ai-prompts-meeting-notes",
    "/ai-prompts-personal-finance",
    "/chatgpt-prompts-meal-planning",
  ]

  const allPages = [
    ...corePages,
    ...aiModelPages,
    ...advancedAIPages,
    ...careerWritingPages,
    ...specializedPages,
    ...universityPages,
    ...testPages,
    ...resourcePages,
    ...newResourcePages,
    ...newSEOPages,
    ...photoGuidePages,
    ...chatgptGuidePages,
    ...chatgptAIGuidePages,
    ...advancedPromptPages,
    ...educationTestPrepPages,
    ...professionalHealthcarePages,
    ...nonprofitRealEstatePages,
    ...legalNonprofitPages,
    ...seoLLMPages,
    ...businessCreatorPages,
    ...foundationalPromptingPages,
    ...dataAnalysisResearchPages,
    ...aiToolPromptPages,
    ...aiToolVideoVoicePages,
    ...aiToolProductivityPages,
    ...professionalPromptingPages,
    ...aiToolsPages,
    ...aiToolsDirectoryPages,
    ...comparePages,
    ...bestAIForPages,
    ...alternativesPages,
    ...websiteLinks,

    // New Pages (March 2026)
    ...march2026Pages,
    ...march2026Batch2Pages,

    // Batch 3 (March 2026)
    "/sora-prompts",
    "/openai-codex-prompts",
    "/ai-agent-prompts",
    "/gemini-advanced-prompts",
    "/ai-prompts-email-writing",
    "/ai-prompts-linkedin",
    "/chatgpt-prompts-google-sheets",
    "/ai-prompts-for-startups",
    "/ai-prompts-for-researchers",
    "/ai-prompts-for-writers",
    "/chatgpt-prompts-coding-interviews",
    "/ai-prompts-supply-chain",
    "/manus-ai-prompts",
    "/chatgpt-prompts-powerpoint",
    "/ai-prompts-notion",

    // Batch 4 - 50 New Keyword-Targeted Pages (March 2026)
    "/ai-chatbot-prompts",
    "/ai-productivity-prompts",
    "/bing-ai-image-generator-prompts",
    "/perchance-ai-prompts",
    "/ai-prompts-for-education",
    "/ai-search-engine-prompts",
    "/ai-story-generator-prompts",
    "/ai-music-generator-prompts",
    "/ai-homework-prompts",
    "/ai-text-generator-prompts",
    "/ai-detection-prompts",
    "/ai-content-detection-prompts",
    "/turnitin-ai-prompts",
    "/ai-video-generator-prompts",
    "/ai-face-swap-prompts",
    "/ai-image-upscaler-prompts",
    "/craiyon-ai-prompts",
    "/ai-headshot-prompts",
    "/ai-logo-generator-prompts",
    "/kapwing-ai-prompts",
    "/ai-translation-prompts",
    "/ai-web-builder-prompts",
    "/ai-writing-assistant-prompts",
    "/ai-for-musicians-prompts",
    "/ai-for-gaming-prompts",
    "/ai-research-assistant-prompts",
    "/ai-study-prompts",
    "/ai-poem-generator-prompts",
    "/ai-free-art-prompts",
    "/ai-prompts-for-teachers-tools",
    "/ai-chat-prompts",
    "/ai-character-chat-prompts",
    "/ai-personal-assistant-prompts",
    "/generative-ai-prompts",
    "/ai-resume-builder-prompts",
    "/ai-for-risk-management-prompts",
    "/ai-for-executives-prompts",
    "/ai-for-leadership-prompts",
    "/ai-for-quality-management-prompts",
    "/ai-for-warehouse-management-prompts",
    "/ai-for-workforce-management-prompts",
    "/ai-for-event-management-prompts",
    "/ai-for-operations-management-prompts",
    "/ai-for-facilities-management-prompts",
    "/ai-for-document-management-prompts",
    "/ai-for-news-prompts",
    "/ai-question-answering-prompts",
    "/squibler-ai-prompts",
    "/ai-summarizer-prompts",
    "/ai-for-management-consulting-prompts",
  ]

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}
