import { getToolBySlug, type ToolEntry } from "@/data/tools"

export interface AlternativeItem {
  slug: string
  reason: string
  bestFor: string
  rating: "excellent" | "great" | "good"
}

export interface AlternativesEntry {
  toolSlug: string
  summary: string
  verdict: string
  verdictSlug: string
  alternatives: AlternativeItem[]
  faqs: { question: string; answer: string }[]
}

export interface ResolvedAlternativesEntry extends AlternativesEntry {
  tool: ToolEntry
  resolvedAlternatives: (AlternativeItem & { tool: ToolEntry })[]
}

// ────────────────────────────────────────────────────────────────────────────
// ALTERNATIVES DATA
// ────────────────────────────────────────────────────────────────────────────

export const alternativesData: AlternativesEntry[] = [
  // ── ChatGPT ──────────────────────────────────────────────────────────────
  {
    toolSlug: "chatgpt",
    summary:
      "ChatGPT is the world's most popular AI assistant, but it is not perfect for every use case. Some users find the free tier limiting, want stronger document handling, need real-time search with citations, or prefer a more privacy-focused option. These are the best ChatGPT alternatives available in 2026.",
    verdict:
      "Claude is the best overall ChatGPT alternative. It matches or exceeds ChatGPT on writing, reasoning, and coding, offers a 200K context window, and is available free. For users who want real-time web results with sources, Perplexity is the top pick.",
    verdictSlug: "claude",
    alternatives: [
      {
        slug: "claude",
        reason:
          "Claude by Anthropic is the closest match to ChatGPT in terms of capability. It excels at long-form writing, nuanced reasoning, and following detailed instructions. The 200K context window means you can load entire documents, codebases, or research papers in a single conversation.",
        bestFor: "Writing, long documents, reasoning, and code generation",
        rating: "excellent",
      },
      {
        slug: "gemini",
        reason:
          "Google Gemini is natively multimodal and deeply integrated with Google Search, making it the best option for research-heavy tasks. Gemini 2.0 Flash offers some of the fastest inference available, and it is free with a generous usage limit.",
        bestFor: "Research, multimodal tasks, and Google Workspace users",
        rating: "excellent",
      },
      {
        slug: "perplexity",
        reason:
          "Perplexity is the best option for users who need answers grounded in real-time web data with full source citations. Unlike ChatGPT, every answer comes with verifiable links, making it invaluable for research and fact-checking.",
        bestFor: "Research with citations, fact-checking, and current events",
        rating: "excellent",
      },
      {
        slug: "grok",
        reason:
          "Grok by xAI offers real-time access to X (Twitter) data, a strong reasoning engine (Grok 3), and a free tier via X. It is a compelling alternative for users who want current social and news data alongside general AI assistance.",
        bestFor: "Real-time social data, current events, and X users",
        rating: "great",
      },
      {
        slug: "meta-ai",
        reason:
          "Meta AI is powered by Llama 4 and is completely free, with no account required on some platforms. It is built into WhatsApp, Instagram, and Facebook, making it the easiest ChatGPT alternative for users already in the Meta ecosystem.",
        bestFor: "Free access, WhatsApp and Instagram users, casual tasks",
        rating: "great",
      },
      {
        slug: "microsoft-copilot",
        reason:
          "Microsoft Copilot is the best alternative for users embedded in the Microsoft 365 ecosystem. It integrates directly into Word, Excel, Outlook, and Teams, powered by GPT-4, providing AI capabilities without leaving familiar tools.",
        bestFor: "Microsoft 365 users, business productivity, and enterprise",
        rating: "great",
      },
    ],
    faqs: [
      {
        question: "What is the best free ChatGPT alternative?",
        answer:
          "Claude, Gemini, and Meta AI all offer strong free tiers. Claude's free tier gives access to Claude 3.5 Sonnet, Gemini's free tier is powered by Gemini 2.0 Flash, and Meta AI is completely free via WhatsApp and other Meta platforms. All three are competitive with ChatGPT free in capability.",
      },
      {
        question: "Is Claude better than ChatGPT?",
        answer:
          "Claude and ChatGPT are closely matched in overall capability. Claude is generally considered better for long-form writing, nuanced instruction following, and handling large documents. ChatGPT is better for plugin integrations, image generation, and breadth of use cases via GPT-4o.",
      },
      {
        question: "What is the best ChatGPT alternative for research?",
        answer:
          "Perplexity AI is the best alternative for research tasks. It provides real-time web data with full citations for every claim, whereas ChatGPT's web browsing is inconsistent and citations are not always accurate.",
      },
      {
        question: "Can I use ChatGPT alternatives for coding?",
        answer:
          "Yes. Claude, Gemini, and Grok all perform strongly on coding tasks. For dedicated coding assistance, consider specialised tools like Cursor or GitHub Copilot, which are purpose-built for software development workflows.",
      },
    ],
  },

  // ── Claude ────────────────────────────────────────────────────────────────
  {
    toolSlug: "claude",
    summary:
      "Claude by Anthropic is one of the best AI assistants available, but users may want alternatives for broader tool integrations, real-time web access, a different interface, or specific capabilities Claude does not prioritise. These are the top Claude alternatives in 2026.",
    verdict:
      "ChatGPT is the best overall Claude alternative, offering broader tool integrations, built-in image generation, and the largest AI community. For real-time research, Perplexity is the top pick.",
    verdictSlug: "chatgpt",
    alternatives: [
      {
        slug: "chatgpt",
        reason:
          "ChatGPT remains the most versatile AI assistant. It has broader plugin support, built-in DALL-E 3 image generation, advanced voice mode, and the most developed ecosystem of integrations. For users who want one AI tool that does everything, ChatGPT has the edge.",
        bestFor: "General-purpose tasks, plugins, image generation, and voice",
        rating: "excellent",
      },
      {
        slug: "gemini",
        reason:
          "Gemini offers something Claude does not: native real-time Google Search integration and deep Google Workspace connectivity. For users who rely on Google Docs, Sheets, or Gmail, Gemini is the more seamlessly embedded option.",
        bestFor: "Google Workspace users, research, and multimodal tasks",
        rating: "excellent",
      },
      {
        slug: "perplexity",
        reason:
          "Perplexity fills a specific gap that Claude has: real-time web access with verifiable citations. For research, competitive intelligence, or anything requiring current information, Perplexity is a stronger choice.",
        bestFor: "Research with citations and current events",
        rating: "great",
      },
      {
        slug: "grok",
        reason:
          "Grok 3 offers competitive reasoning performance and real-time X/Twitter data. For users who want a capable AI with live social and news information, Grok provides unique data access that Claude lacks.",
        bestFor: "Real-time data, social trends, and math-heavy tasks",
        rating: "great",
      },
      {
        slug: "microsoft-copilot",
        reason:
          "For enterprise users in the Microsoft ecosystem, Copilot provides AI directly inside Office applications. It is the most practical Claude alternative for corporate environments with strict IT and compliance requirements.",
        bestFor: "Microsoft 365 enterprise environments",
        rating: "good",
      },
    ],
    faqs: [
      {
        question: "What is the best free Claude alternative?",
        answer:
          "ChatGPT and Gemini both offer strong free tiers. ChatGPT's free tier uses GPT-4o mini with limited GPT-4o access. Gemini's free tier uses Gemini 2.0 Flash, which is fast and capable. Both are solid Claude alternatives at no cost.",
      },
      {
        question: "Does any AI have a longer context window than Claude?",
        answer:
          "Claude currently offers one of the largest context windows at 200K tokens, which means it can handle roughly 150,000 words in a single conversation. Gemini 1.5 Pro offers up to 1 million tokens for API users, which is technically larger, though this capacity is not always available in consumer products.",
      },
      {
        question: "Is ChatGPT better than Claude for coding?",
        answer:
          "Both are strong coders. Claude is often preferred for longer coding tasks requiring careful reasoning and refactoring. ChatGPT's GPT-4o and o1 models can be stronger on competitive programming problems. For professional coding workflows, purpose-built tools like Cursor or GitHub Copilot are worth considering alongside either.",
      },
    ],
  },

  // ── Gemini ────────────────────────────────────────────────────────────────
  {
    toolSlug: "gemini",
    summary:
      "Google Gemini is powerful and free, but some users prefer alternatives with different strengths: better long-form writing, broader integrations, stronger privacy, or a more established AI community. These are the best Gemini alternatives in 2026.",
    verdict:
      "ChatGPT is the best overall Gemini alternative, offering the broadest tool ecosystem, most established community, and strong general-purpose performance across all tasks.",
    verdictSlug: "chatgpt",
    alternatives: [
      {
        slug: "chatgpt",
        reason:
          "ChatGPT is the most versatile alternative to Gemini. It has a larger ecosystem of plugins and integrations, a well-established prompt-sharing community, and GPT-4o covers the same general-purpose tasks Gemini handles while adding built-in image generation.",
        bestFor: "General-purpose tasks, plugins, and image generation",
        rating: "excellent",
      },
      {
        slug: "claude",
        reason:
          "Claude outperforms Gemini on long-form writing quality, nuanced instruction following, and handling complex documents. If writing quality and accuracy on detailed tasks is the priority, Claude is the better pick.",
        bestFor: "Writing, document analysis, and instruction following",
        rating: "excellent",
      },
      {
        slug: "perplexity",
        reason:
          "Like Gemini, Perplexity provides real-time web-connected answers. But Perplexity goes further by citing every source, making it more reliable for research and fact-checking than Gemini's built-in search integration.",
        bestFor: "Research, fact-checking, and academic tasks",
        rating: "great",
      },
      {
        slug: "grok",
        reason:
          "Grok provides real-time social media and news data that Gemini does not access in the same depth. For users who want current X/Twitter data, Grok is uniquely positioned.",
        bestFor: "Real-time social trends, current events, and X users",
        rating: "great",
      },
      {
        slug: "microsoft-copilot",
        reason:
          "For users in the Microsoft 365 ecosystem, Copilot is the natural Gemini alternative. It brings GPT-4 power inside Word, Excel, and Outlook, whereas Gemini integrates with Google Workspace.",
        bestFor: "Microsoft 365 users and business productivity",
        rating: "good",
      },
    ],
    faqs: [
      {
        question: "Is ChatGPT better than Gemini?",
        answer:
          "Both are excellent general-purpose AI assistants. ChatGPT is generally stronger on creative writing and has a broader plugin ecosystem. Gemini is faster, has stronger real-time Google Search integration, and is often better for research tasks requiring up-to-date facts.",
      },
      {
        question: "Is Claude better than Gemini for writing?",
        answer:
          "Most users find Claude to be stronger on long-form writing tasks, producing more nuanced and coherent text over thousands of words. Gemini is faster but can be more generic in style. For shorter content, both perform comparably.",
      },
      {
        question: "What is the best free Gemini alternative?",
        answer:
          "ChatGPT's free tier (powered by GPT-4o mini with some GPT-4o access) and Claude's free tier (powered by Claude 3.5 Sonnet) are both strong free alternatives. Meta AI is also completely free and uses the capable Llama 4 model.",
      },
    ],
  },

  // ── Midjourney ────────────────────────────────────────────────────────────
  {
    toolSlug: "midjourney",
    summary:
      "Midjourney produces some of the most beautiful AI-generated images available, but it requires a paid subscription and operates via Discord, which is not ideal for everyone. These are the best Midjourney alternatives for different needs and budgets.",
    verdict:
      "Flux AI is the best overall Midjourney alternative, offering comparable photorealism and prompt accuracy at lower cost with broader platform availability. For users needing a free option, Bing Image Creator provides DALL-E 3 quality at no cost.",
    verdictSlug: "flux-ai",
    alternatives: [
      {
        slug: "flux-ai",
        reason:
          "Flux.1 by Black Forest Labs rivals Midjourney on photorealism and is available across many platforms via API. It offers comparable quality to Midjourney V6 at a lower cost, with stronger open-source availability and commercial licensing.",
        bestFor: "Photorealistic images, API users, and commercial projects",
        rating: "excellent",
      },
      {
        slug: "dalle-3",
        reason:
          "DALL-E 3 is excellent for images that need accurate text rendering and precise prompt following. It is built into ChatGPT, making it the easiest option for users already in the OpenAI ecosystem. Quality is strong, though the aesthetic style is different from Midjourney.",
        bestFor: "Text in images, precise prompts, and ChatGPT users",
        rating: "great",
      },
      {
        slug: "stable-diffusion",
        reason:
          "Stable Diffusion is the most flexible and customisable alternative. Run it locally for free, fine-tune it on specific styles, and use thousands of community models via ComfyUI or Automatic1111. It requires technical setup but offers unmatched control.",
        bestFor: "Full creative control, custom fine-tuning, and free self-hosted generation",
        rating: "great",
      },
      {
        slug: "ideogram",
        reason:
          "Ideogram is the best alternative for creating images that include readable, stylised text. It is specifically optimised for typography-heavy images like posters, logos, and social media graphics with text overlays.",
        bestFor: "Text in images, logos, posters, and typography",
        rating: "great",
      },
      {
        slug: "adobe-firefly",
        reason:
          "Adobe Firefly is the safest choice for commercial creative work. Trained exclusively on licensed content, it is the only major AI image generator with a clear commercial licence by default. Deep integration with Photoshop and Illustrator makes it ideal for professional designers.",
        bestFor: "Commercial creative work and Adobe Creative Cloud users",
        rating: "good",
      },
      {
        slug: "bing-image-creator",
        reason:
          "Bing Image Creator provides free access to DALL-E 3 quality images via Microsoft. It is one of the best free Midjourney alternatives for users who do not need Midjourney's distinctive artistic style but want high-quality results at no cost.",
        bestFor: "Free high-quality image generation and Microsoft users",
        rating: "good",
      },
    ],
    faqs: [
      {
        question: "What is the best free Midjourney alternative?",
        answer:
          "Bing Image Creator is the best free option, providing DALL-E 3 quality at no cost with a Microsoft account. Craiyon is another completely free option. Ideogram and Flux AI also offer limited free tiers daily. Stable Diffusion is free if you are comfortable running it locally.",
      },
      {
        question: "Is Flux AI as good as Midjourney?",
        answer:
          "Flux.1 Pro and Schnell models are competitive with Midjourney V6 on photorealism and prompt accuracy. Midjourney still has an edge on painterly, artistic styles and community-driven aesthetic development. For photorealistic work, Flux AI is a genuine alternative.",
      },
      {
        question: "Can I use Midjourney alternatives for commercial projects?",
        answer:
          "Adobe Firefly is the safest for commercial use, trained entirely on licensed content. DALL-E 3 and Flux AI both offer commercial licensing. Midjourney itself allows commercial use on paid plans. Stable Diffusion licensing depends on the specific model used.",
      },
    ],
  },

  // ── DALL-E 3 ──────────────────────────────────────────────────────────────
  {
    toolSlug: "dalle-3",
    summary:
      "DALL-E 3 is excellent for precise, text-accurate image generation, but users may want alternatives with a different aesthetic, more artistic styles, better pricing, or the ability to run locally. These are the top DALL-E 3 alternatives in 2026.",
    verdict:
      "Midjourney is the best overall DALL-E 3 alternative for users who prioritise image quality and artistic style. For a free option with comparable technical quality, Bing Image Creator uses the same DALL-E 3 model at no cost.",
    verdictSlug: "midjourney",
    alternatives: [
      {
        slug: "midjourney",
        reason:
          "Midjourney V6 produces images with exceptional visual quality, lighting, and composition. For creative and artistic work, it outperforms DALL-E 3 on aesthetic quality, though it requires a paid subscription.",
        bestFor: "Artistic and creative visuals, professional design, and high-quality art",
        rating: "excellent",
      },
      {
        slug: "flux-ai",
        reason:
          "Flux AI offers photorealistic quality comparable to or exceeding DALL-E 3, with broader platform availability and competitive pricing via API. It is an excellent technical alternative for developers and commercial users.",
        bestFor: "Photorealism, API access, and commercial projects",
        rating: "excellent",
      },
      {
        slug: "stable-diffusion",
        reason:
          "Stable Diffusion is the most customisable alternative. Run it for free locally, fine-tune it on any style, and use thousands of community models. The trade-off is the technical setup required.",
        bestFor: "Free self-hosted generation, custom styles, and technical users",
        rating: "great",
      },
      {
        slug: "ideogram",
        reason:
          "Ideogram matches or exceeds DALL-E 3 specifically on images with text and typography. If the use case involves generating images with readable text overlays, logos, or posters, Ideogram is the better choice.",
        bestFor: "Text in images, logos, and typography-heavy designs",
        rating: "great",
      },
      {
        slug: "adobe-firefly",
        reason:
          "Adobe Firefly is the best alternative for commercial creative professionals. It integrates directly into Photoshop and Illustrator, uses commercially licensed training data, and produces consistent, professional results.",
        bestFor: "Adobe Creative Cloud users and commercial design",
        rating: "good",
      },
    ],
    faqs: [
      {
        question: "Is Midjourney better than DALL-E 3?",
        answer:
          "For artistic, painterly, and visually striking images, Midjourney is widely considered the best AI image generator. DALL-E 3 is stronger on precise prompt following and text rendering within images. The best choice depends on the creative goal.",
      },
      {
        question: "Is there a free DALL-E 3 alternative?",
        answer:
          "Yes. Bing Image Creator by Microsoft provides free access to DALL-E 3 quality image generation with a Microsoft account. Craiyon is another free option. Ideogram offers 10 free priority images per day.",
      },
      {
        question: "Which DALL-E 3 alternative is best for logos?",
        answer:
          "Ideogram is the best alternative specifically for logo design and images with typography. It has been optimised for generating accurate, stylised text in images, which has been a long-standing challenge for other AI image generators including DALL-E 3.",
      },
    ],
  },

  // ── Stable Diffusion ──────────────────────────────────────────────────────
  {
    toolSlug: "stable-diffusion",
    summary:
      "Stable Diffusion is the premier open-source AI image generator, offering free self-hosted generation and unlimited customisation. But not everyone wants the technical overhead. These are the best Stable Diffusion alternatives for different levels of technical expertise and budget.",
    verdict:
      "Flux AI is the best Stable Diffusion alternative for users who want high-quality generation without the technical setup. It is also open-source and available via multiple platforms.",
    verdictSlug: "flux-ai",
    alternatives: [
      {
        slug: "flux-ai",
        reason:
          "Flux by Black Forest Labs is the most capable open-source alternative to Stable Diffusion. Flux.1 models outperform many Stable Diffusion variants on photorealism and prompt accuracy, and are increasingly available via hosted platforms for users who do not want to run locally.",
        bestFor: "High-quality generation without local setup, open-source models",
        rating: "excellent",
      },
      {
        slug: "midjourney",
        reason:
          "Midjourney produces consistently beautiful images with minimal prompting effort. For users who want premium-quality output without any configuration, Midjourney is the best paid alternative to Stable Diffusion's flexibility.",
        bestFor: "High-quality artistic images with no technical setup",
        rating: "excellent",
      },
      {
        slug: "dalle-3",
        reason:
          "DALL-E 3 is the easiest Stable Diffusion alternative to access via ChatGPT. It produces high-quality images from detailed text prompts and handles text rendering better than most Stable Diffusion models.",
        bestFor: "Easy access, text in images, and ChatGPT users",
        rating: "great",
      },
      {
        slug: "ideogram",
        reason:
          "Ideogram is strong for text-heavy image generation and offers a generous free tier, making it a no-setup alternative for users who specifically need images with typography.",
        bestFor: "Text and typography in images, free tier",
        rating: "great",
      },
      {
        slug: "adobe-firefly",
        reason:
          "For users who need commercially safe image generation without technical setup, Adobe Firefly provides a professionally oriented, legally clear alternative with Creative Cloud integration.",
        bestFor: "Commercial use, Adobe users, and non-technical creatives",
        rating: "good",
      },
    ],
    faqs: [
      {
        question: "Is Flux AI better than Stable Diffusion?",
        answer:
          "Flux.1 Pro and Dev models produce sharper, more photorealistic images than most standard Stable Diffusion checkpoints. However, Stable Diffusion has a much larger ecosystem of fine-tuned models, LoRAs, and extensions for specialised use cases. Flux is better out of the box; Stable Diffusion is more flexible with customisation.",
      },
      {
        question: "What is the easiest alternative to Stable Diffusion?",
        answer:
          "Midjourney and Bing Image Creator are the easiest alternatives. Both require no technical setup and produce high-quality results from simple text prompts. Midjourney requires a subscription; Bing Image Creator is free.",
      },
    ],
  },

  // ── Perplexity ────────────────────────────────────────────────────────────
  {
    toolSlug: "perplexity",
    summary:
      "Perplexity AI is the best AI search engine with citations, but users may want alternatives for a different interface, a broader AI assistant, better general-purpose capabilities, or simple preference. These are the best Perplexity alternatives in 2026.",
    verdict:
      "Gemini with Google Search is the best overall Perplexity alternative, combining real-time web access with a powerful AI assistant and the scale of Google's search index.",
    verdictSlug: "gemini",
    alternatives: [
      {
        slug: "gemini",
        reason:
          "Gemini by Google has real-time web access built in via Google Search, the world's largest search index. For general research questions, Gemini matches Perplexity's real-time capabilities while also being a full-purpose AI assistant.",
        bestFor: "Research, general AI tasks, and Google ecosystem users",
        rating: "excellent",
      },
      {
        slug: "chatgpt",
        reason:
          "ChatGPT Plus users get web browsing capabilities via Bing, making it a capable Perplexity alternative. It also adds image generation, plugins, and voice mode that Perplexity does not offer.",
        bestFor: "General AI tasks plus research, plugin users",
        rating: "great",
      },
      {
        slug: "grok",
        reason:
          "Grok's DeepSearch feature provides detailed research results from the web and X/Twitter. For research that includes social media and real-time discussion, Grok's unique data access makes it a strong Perplexity alternative.",
        bestFor: "Real-time social data, current events research, and X users",
        rating: "great",
      },
      {
        slug: "claude",
        reason:
          "Claude does not have real-time web access by default, but it is the strongest alternative for processing and analysing documents, research papers, or large amounts of content that you paste directly into the chat.",
        bestFor: "Document analysis, research paper review, and long-form synthesis",
        rating: "good",
      },
    ],
    faqs: [
      {
        question: "Does Google have an alternative to Perplexity?",
        answer:
          "Yes. Google Gemini provides AI-powered answers with real-time Google Search integration. It is Google's most direct answer to Perplexity, offering web-connected AI responses. Google also has AI Overviews built into standard Google Search for quick AI-generated summaries.",
      },
      {
        question: "Is ChatGPT a good Perplexity alternative?",
        answer:
          "ChatGPT Plus has web browsing capabilities that make it a usable Perplexity alternative. However, Perplexity is generally more focused on research and cites all sources clearly. ChatGPT Plus adds broader capabilities like image generation and plugins that Perplexity lacks.",
      },
      {
        question: "Which is better for academic research, Perplexity or Gemini?",
        answer:
          "Perplexity is generally preferred for academic research because it consistently cites its sources, allowing readers to verify claims. Gemini with Google Search is strong but citations are not always as clearly presented. For academic work, Perplexity's source attribution is a significant advantage.",
      },
    ],
  },

  // ── Cursor ────────────────────────────────────────────────────────────────
  {
    toolSlug: "cursor",
    summary:
      "Cursor has become one of the most popular AI-powered code editors, but GitHub Copilot, Windsurf, and other tools offer strong alternatives with different pricing models, IDE compatibility, and AI model choices. These are the best Cursor alternatives in 2026.",
    verdict:
      "GitHub Copilot is the best Cursor alternative for most developers, with wider IDE support, a lower entry price, and strong integration with the broader GitHub and Microsoft ecosystem.",
    verdictSlug: "github-copilot",
    alternatives: [
      {
        slug: "github-copilot",
        reason:
          "GitHub Copilot works across VS Code, JetBrains IDEs, Visual Studio, Neovim, and more, making it the most broadly compatible coding AI. At $10/mo, it is more affordable than Cursor Pro, and the GitHub integration makes it natural for teams already using GitHub for version control.",
        bestFor: "Multi-IDE support, team environments, and GitHub users",
        rating: "excellent",
      },
      {
        slug: "windsurf",
        reason:
          "Windsurf by Codeium offers a compelling Cursor alternative with its own AI IDE, competitive pricing, and strong autocomplete. The Cascade agentic feature rivals Cursor's Composer for multi-file code generation tasks.",
        bestFor: "Agentic coding tasks, competitive pricing, and Cursor-like experience",
        rating: "excellent",
      },
      {
        slug: "chatgpt",
        reason:
          "ChatGPT with GPT-4o is a strong coding assistant for developers who prefer a chat-based workflow. While not an IDE, ChatGPT's code generation, debugging, and explanation capabilities are highly capable and available at $20/mo.",
        bestFor: "Chat-based coding help, code explanation, and one-off coding tasks",
        rating: "good",
      },
      {
        slug: "claude",
        reason:
          "Claude excels at understanding large codebases via its 200K context window, making it ideal for tasks requiring analysis of many files simultaneously. Many developers use it alongside their IDE rather than as a replacement.",
        bestFor: "Large codebase analysis, refactoring, and code review",
        rating: "good",
      },
    ],
    faqs: [
      {
        question: "Is GitHub Copilot better than Cursor?",
        answer:
          "GitHub Copilot has broader IDE compatibility and is more established in enterprise environments. Cursor is often preferred for its agentic Composer feature and more immersive AI-first IDE experience. Both are excellent; the best choice depends on whether you prefer staying in your current IDE or switching to Cursor's dedicated environment.",
      },
      {
        question: "Is Windsurf a good Cursor alternative?",
        answer:
          "Yes. Windsurf by Codeium is one of the strongest Cursor alternatives, offering an AI-native IDE with agentic code generation capabilities. Many developers find Windsurf's Cascade feature comparable to Cursor's Composer for multi-file coding tasks.",
      },
      {
        question: "What is the cheapest Cursor alternative?",
        answer:
          "GitHub Copilot starts at $10/mo (free for open-source contributors and students). Windsurf also has competitive pricing. Claude and ChatGPT can be used as chat-based coding assistants at $20/mo each, though they lack the IDE integration that Cursor provides.",
      },
    ],
  },

  // ── GitHub Copilot ────────────────────────────────────────────────────────
  {
    toolSlug: "github-copilot",
    summary:
      "GitHub Copilot is the most widely used AI coding assistant, but developers may want alternatives with better agentic capabilities, support for specific IDEs, stronger AI models, or different pricing. These are the best GitHub Copilot alternatives in 2026.",
    verdict:
      "Cursor is the best overall GitHub Copilot alternative for developers who want a more immersive, AI-first coding experience with strong agentic multi-file editing capabilities.",
    verdictSlug: "cursor",
    alternatives: [
      {
        slug: "cursor",
        reason:
          "Cursor is an AI-native IDE built on VS Code with Composer, an agentic feature that can plan and execute multi-file code changes. For developers who want AI more deeply embedded in their coding workflow, Cursor offers a more integrated experience than Copilot's autocomplete-first approach.",
        bestFor: "Agentic coding, multi-file editing, and VS Code users wanting more AI",
        rating: "excellent",
      },
      {
        slug: "windsurf",
        reason:
          "Windsurf by Codeium is an AI-native IDE that directly competes with both Cursor and Copilot. It offers strong autocomplete, agentic Cascade, and competitive pricing, making it a well-rounded Copilot alternative.",
        bestFor: "AI-native IDE experience, agentic coding, and competitive pricing",
        rating: "excellent",
      },
      {
        slug: "claude",
        reason:
          "Claude's 200K context window makes it uniquely capable for large-scale code review, refactoring, and codebase analysis. Used alongside an IDE, Claude handles tasks that require understanding many files at once, which is a weakness of standard Copilot autocomplete.",
        bestFor: "Large codebase analysis, code review, and refactoring",
        rating: "great",
      },
      {
        slug: "chatgpt",
        reason:
          "ChatGPT's GPT-4o is a highly capable coding assistant for chat-based development help. Its code interpreter feature can run code and fix errors iteratively. It is less IDE-integrated than Copilot but more flexible for exploratory coding tasks.",
        bestFor: "Chat-based coding assistance and code debugging",
        rating: "good",
      },
    ],
    faqs: [
      {
        question: "Is Cursor worth switching to from GitHub Copilot?",
        answer:
          "Many developers find Cursor's Composer feature transformative for complex, multi-file coding tasks that Copilot's autocomplete cannot handle as well. If you primarily want smarter autocomplete, Copilot is more than sufficient. If you want an AI that can execute larger refactoring tasks autonomously, Cursor is worth trying.",
      },
      {
        question: "Does Windsurf support the same languages as GitHub Copilot?",
        answer:
          "Yes. Windsurf supports all major programming languages and file types. Like Copilot, it works across a wide range of languages including Python, JavaScript, TypeScript, Go, Rust, Java, C++, and many more.",
      },
    ],
  },

  // ── Sora ──────────────────────────────────────────────────────────────────
  {
    toolSlug: "sora",
    summary:
      "Sora by OpenAI produces impressive cinematic video from text, but it is limited to ChatGPT subscribers and has usage caps. These are the best Sora alternatives for AI video generation in 2026.",
    verdict:
      "Runway is the best overall Sora alternative for professional video production, offering a full creative suite alongside strong AI video generation. Kling AI is the best value alternative for high-quality output at lower cost.",
    verdictSlug: "runway",
    alternatives: [
      {
        slug: "runway",
        reason:
          "Runway Gen-3 Alpha is a professional-grade AI video platform used in real film and TV production. It goes beyond Sora by offering a complete video editing suite alongside generation. For commercial and professional use, Runway is the most capable alternative.",
        bestFor: "Professional video production, commercial content, and film post-production",
        rating: "excellent",
      },
      {
        slug: "kling-ai",
        reason:
          "Kling AI from Kuaishou produces high-quality videos up to 2 minutes long with realistic human motion and strong scene physics. It is a compelling Sora alternative at competitive pricing, with image-to-video capabilities that rival the best in the market.",
        bestFor: "Long video clips, realistic motion, and value for money",
        rating: "excellent",
      },
      {
        slug: "kapwing",
        reason:
          "Kapwing is the best Sora alternative for content creators who need AI-assisted video editing rather than pure AI generation. Its auto-subtitle, background removal, and clip trimming tools make it ideal for social media content workflows.",
        bestFor: "Content creators, auto-subtitles, and social media video editing",
        rating: "good",
      },
    ],
    faqs: [
      {
        question: "Is Runway better than Sora?",
        answer:
          "Runway offers a more complete professional video toolset including editing, background removal, and collaboration features alongside generation. Sora focuses purely on generation and is more tightly integrated with OpenAI's ecosystem. For production workflows, Runway is the more powerful platform.",
      },
      {
        question: "What is the best free Sora alternative?",
        answer:
          "Kling AI offers a free tier with limited daily credits. Kapwing has a free tier with watermarked output. There are no fully free alternatives that match Sora's cinematic quality, but Kling AI's free tier is the strongest starting point.",
      },
    ],
  },

  // ── Runway ────────────────────────────────────────────────────────────────
  {
    toolSlug: "runway",
    summary:
      "Runway is the leading professional AI video platform, but its pricing can be steep for casual creators. These are the best Runway alternatives for AI video generation at different price points and use cases.",
    verdict:
      "Kling AI is the best Runway alternative for users who want high-quality video generation at a lower price. For users who need video editing tools rather than pure generation, Kapwing is the most practical option.",
    verdictSlug: "kling-ai",
    alternatives: [
      {
        slug: "kling-ai",
        reason:
          "Kling AI produces competitive video quality to Runway Gen-3 at significantly lower cost. It is particularly strong on realistic human motion and long clips up to 2 minutes. For users who primarily need quality AI video generation without Runway's full editing suite, Kling is the best value alternative.",
        bestFor: "AI video generation, realistic motion, and long clips",
        rating: "excellent",
      },
      {
        slug: "sora",
        reason:
          "Sora by OpenAI produces cinematic video with impressive scene consistency. For users already subscribed to ChatGPT Plus, it is included in the subscription price, making it effectively free if you already pay for ChatGPT.",
        bestFor: "Cinematic quality video included in ChatGPT Plus subscription",
        rating: "excellent",
      },
      {
        slug: "kapwing",
        reason:
          "Kapwing is the best alternative for content creators who need AI-assisted video editing. Its auto-subtitle, background removal, and smart trimming tools are strong, and its browser-based interface makes it accessible without downloads.",
        bestFor: "Content creators, video editing, and social media workflows",
        rating: "great",
      },
    ],
    faqs: [
      {
        question: "Is Kling AI as good as Runway?",
        answer:
          "Kling AI is competitive with Runway Gen-3 on pure video generation quality, particularly for realistic motion. Runway has a significant advantage in its full editing suite, background removal tools, and professional production workflow features. For simple generation tasks, Kling is a strong and cheaper alternative.",
      },
      {
        question: "What is the cheapest Runway alternative?",
        answer:
          "Kling AI has a free tier with daily credits and paid plans starting at $8/mo. Kapwing's free tier also includes basic AI video editing. Sora is included with ChatGPT Plus ($20/mo), which is cheaper than Runway's Standard plan at $15/mo if you already subscribe to ChatGPT.",
      },
    ],
  },

  // ── Suno ──────────────────────────────────────────────────────────────────
  {
    toolSlug: "suno",
    summary:
      "Suno produces impressive full songs with vocals from simple text prompts, but users may want alternatives with different styles, better stem separation, voice cloning, or lower pricing. These are the best Suno alternatives for AI music generation.",
    verdict:
      "Udio is the best overall Suno alternative, offering comparable music generation quality with a different creative interface and strong output quality across genres.",
    verdictSlug: "udio",
    alternatives: [
      {
        slug: "udio",
        reason:
          "Udio is the most direct Suno competitor, generating full songs with vocals from text prompts. It produces strong results across many genres and has a slightly different creative workflow that some users prefer. Both tools are excellent; choosing between them often comes down to personal preference for output style.",
        bestFor: "Full song generation, wide genre range, and Suno-like experience",
        rating: "excellent",
      },
      {
        slug: "elevenlabs",
        reason:
          "ElevenLabs is the best alternative for users who want AI-generated vocals specifically, rather than full music production. It offers industry-leading voice synthesis and voice cloning, making it ideal for voiceovers, podcasts, and adding AI voices to music or content.",
        bestFor: "AI voice generation, voiceovers, and voice cloning",
        rating: "great",
      },
    ],
    faqs: [
      {
        question: "Is Udio better than Suno?",
        answer:
          "Both Udio and Suno produce high-quality AI-generated music. Suno is often noted for more polished vocals and song structure. Udio is praised for a wider range of musical styles and a more flexible creative process. The best way to choose is to try both on the same prompt and compare the results.",
      },
      {
        question: "Can I generate royalty-free music with Suno alternatives?",
        answer:
          "Both Udio and Suno allow commercial use of generated music on paid plans, though users should review each platform's specific terms. ElevenLabs generated audio can also be used commercially. Always check the current terms of service on each platform before commercial use.",
      },
    ],
  },

  // ── Jasper ────────────────────────────────────────────────────────────────
  {
    toolSlug: "jasper",
    summary:
      "Jasper is a premium AI writing platform for marketing teams, but its starting price of $49/mo may not suit individual creators or small businesses. These are the best Jasper alternatives in 2026.",
    verdict:
      "Claude or ChatGPT with a custom prompt setup can replicate most of what Jasper does for individual users at a fraction of the cost. For teams that need dedicated marketing features, Copy.ai is the most affordable Jasper alternative.",
    verdictSlug: "copy-ai",
    alternatives: [
      {
        slug: "copy-ai",
        reason:
          "Copy.ai is the most direct Jasper competitor, focused on marketing and sales copy. It offers GTM AI workflows, email templates, ad copy generation, and a generous free tier. At $49/mo for Starter versus Jasper's same price, Copy.ai often provides better value for marketing-specific tasks.",
        bestFor: "Marketing copy, email campaigns, ad copy, and affordable team pricing",
        rating: "excellent",
      },
      {
        slug: "chatgpt",
        reason:
          "ChatGPT with GPT-4o and a well-crafted brand voice system prompt can replicate most of Jasper's content output at $20/mo for ChatGPT Plus. It lacks Jasper's dedicated templates and team features but is significantly cheaper for individual users.",
        bestFor: "Individual creators, general writing, and budget-conscious users",
        rating: "excellent",
      },
      {
        slug: "claude",
        reason:
          "Claude is excellent at maintaining consistent tone and style across long-form content, which is one of Jasper's key strengths. For users who need high-quality long-form blog posts, case studies, or white papers, Claude often produces output that matches or exceeds Jasper at lower cost.",
        bestFor: "Long-form content, brand voice consistency, and detailed writing tasks",
        rating: "great",
      },
    ],
    faqs: [
      {
        question: "Is Jasper worth it versus using ChatGPT directly?",
        answer:
          "For marketing teams that need brand voice management, collaboration features, and specialised marketing templates, Jasper provides workflow value beyond what ChatGPT alone offers. For individual users or small creators, ChatGPT or Claude at $20/mo produces comparable content quality at less than half the cost.",
      },
      {
        question: "What is the cheapest Jasper alternative?",
        answer:
          "Copy.ai has a free tier (2,000 words/mo). Claude and ChatGPT both have free tiers as well. For paid plans, Claude Pro and ChatGPT Plus are $20/mo each, compared to Jasper Creator starting at $49/mo.",
      },
    ],
  },

  // ── ElevenLabs ────────────────────────────────────────────────────────────
  {
    toolSlug: "elevenlabs",
    summary:
      "ElevenLabs is the leading AI voice generation and voice cloning platform, but there are strong alternatives depending on whether you need music generation, podcast-style voices, or different pricing. These are the best ElevenLabs alternatives.",
    verdict:
      "Suno is the best alternative specifically for music-focused users who want AI-generated songs with vocals. For voice-over and audio content, no current alternative fully matches ElevenLabs' voice quality, but Murf and Udio offer useful options.",
    verdictSlug: "suno",
    alternatives: [
      {
        slug: "suno",
        reason:
          "Suno generates full AI songs with vocals from text prompts. If the goal is music with AI vocals rather than standalone voice synthesis, Suno produces polished, ready-to-use tracks that would require significantly more effort to achieve via voice cloning alone.",
        bestFor: "Full AI music with vocals, song generation, and musical content",
        rating: "excellent",
      },
      {
        slug: "udio",
        reason:
          "Udio is another strong music generation alternative. Like Suno, it generates full songs from prompts. For users who want AI-generated musical content rather than standalone voice synthesis, both Udio and Suno are strong ElevenLabs alternatives.",
        bestFor: "AI music generation across genres",
        rating: "great",
      },
    ],
    faqs: [
      {
        question: "Is there a free ElevenLabs alternative?",
        answer:
          "ElevenLabs itself has a free tier with limited monthly character generation. Suno and Udio both have free tiers for music generation. For text-to-speech specifically, tools like Microsoft Azure TTS (via Edge browser) and Google Text-to-Speech offer free tiers with lower quality than ElevenLabs.",
      },
      {
        question: "What is the best ElevenLabs alternative for podcasting?",
        answer:
          "ElevenLabs remains the market leader for podcast-quality voice synthesis. For podcast creation with AI voices, there is no current free tool that matches its quality. Suno can generate music for intros and background music, but for voice-over narration, ElevenLabs is currently the most capable option.",
      },
    ],
  },

  // ── Microsoft Copilot ─────────────────────────────────────────────────────
  {
    toolSlug: "microsoft-copilot",
    summary:
      "Microsoft Copilot integrates AI into the Microsoft 365 suite, but at $30/user/month for the enterprise version, it is a significant investment. These are the best Microsoft Copilot alternatives for productivity and business AI.",
    verdict:
      "Claude or ChatGPT are the best Copilot alternatives for individual users and small teams, offering comparable AI capabilities at $20/mo without requiring Microsoft 365 licensing.",
    verdictSlug: "chatgpt",
    alternatives: [
      {
        slug: "chatgpt",
        reason:
          "ChatGPT at $20/mo offers GPT-4o for writing, summarisation, data analysis, email drafting, and all the productivity tasks Copilot covers. It lacks the deep Office 365 integration but works across any tool via copy-paste and the web interface.",
        bestFor: "Individual productivity, writing, and general AI tasks without M365 lock-in",
        rating: "excellent",
      },
      {
        slug: "claude",
        reason:
          "Claude is particularly strong at tasks that Copilot handles in Word and Outlook: drafting documents, summarising long reports, and editing for tone and clarity. Its 200K context window handles entire documents with ease.",
        bestFor: "Document drafting, report summarisation, and long-form writing",
        rating: "excellent",
      },
      {
        slug: "gemini",
        reason:
          "For users in the Google Workspace ecosystem, Gemini in Workspace is the most direct alternative to Copilot in Microsoft 365. It integrates into Google Docs, Sheets, Slides, and Gmail at comparable pricing.",
        bestFor: "Google Workspace users wanting native AI integration",
        rating: "great",
      },
      {
        slug: "perplexity",
        reason:
          "For knowledge work and research tasks that Copilot handles, Perplexity provides real-time, cited web research. It is not an Office integration but is an excellent complement for information gathering.",
        bestFor: "Research, fact-checking, and current information tasks",
        rating: "good",
      },
    ],
    faqs: [
      {
        question: "Is Microsoft Copilot worth $30/mo per user?",
        answer:
          "Microsoft Copilot for Microsoft 365 provides genuine value for organisations deeply embedded in the Office ecosystem, particularly for Outlook email summarisation, Teams meeting notes, and Excel data analysis. For individual users or those without M365 subscriptions, ChatGPT or Claude at $20/mo deliver comparable AI capability at lower cost.",
      },
      {
        question: "Can I use Claude or ChatGPT instead of Microsoft Copilot?",
        answer:
          "Yes. Both Claude and ChatGPT can handle the same writing, summarisation, and analysis tasks as Copilot. The key difference is that Copilot is embedded directly inside Office apps. With Claude or ChatGPT, you copy content between apps. For most individual users, the manual workflow is acceptable; enterprise teams benefit more from Copilot's native integration.",
      },
    ],
  },
]

// ────────────────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ────────────────────────────────────────────────────────────────────────────

export function getAlternativesBySlug(toolSlug: string): ResolvedAlternativesEntry | null {
  const entry = alternativesData.find((a) => a.toolSlug === toolSlug)
  if (!entry) return null

  const tool = getToolBySlug(toolSlug)
  if (!tool) return null

  const resolvedAlternatives = entry.alternatives
    .map((alt) => {
      const altTool = getToolBySlug(alt.slug)
      if (!altTool) return null
      return { ...alt, tool: altTool }
    })
    .filter((a): a is AlternativeItem & { tool: ToolEntry } => a !== null)

  return { ...entry, tool, resolvedAlternatives }
}

export function getAllAlternatives(): ResolvedAlternativesEntry[] {
  return alternativesData
    .map((entry) => getAlternativesBySlug(entry.toolSlug))
    .filter((a): a is ResolvedAlternativesEntry => a !== null)
}
