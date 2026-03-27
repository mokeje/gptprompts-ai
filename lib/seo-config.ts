import type { Metadata } from "next"

export const siteConfig = {
  name: "GPTPrompts.AI",
  url: "https://gptprompts.ai",
  description:
    "The internet's most comprehensive prompt engineering resource. 188+ expert guides for ChatGPT, Claude, Gemini, Midjourney, and more. Free, up-to-date, and AI-search optimized.",
  links: {
    twitter: "https://twitter.com/gptpromptsai",
    github: "https://github.com/mokeje/gptprompts-ai",
  },
}

interface SEOMetadataOptions {
  title?: string
  description?: string
  keywords?: string[]
  path?: string
  image?: string
}

export function generateMetadata({
  title,
  description,
  keywords,
  path = "",
  image,
}: SEOMetadataOptions = {}): Metadata {
  const fullTitle = title
    ? `${title} | GPTPrompts.AI`
    : "GPTPrompts.AI — Master AI Prompts & Prompt Engineering"

  const fullDescription =
    description ||
    siteConfig.description

  const url = `${siteConfig.url}${path}`
  const ogImage = image || `${siteConfig.url}/generative.png`

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords || [
      "AI prompts",
      "prompt engineering",
      "ChatGPT prompts",
      "Claude prompts",
      "Gemini prompts",
      "Midjourney prompts",
      "prompt guide",
      "best AI prompts",
    ],
    authors: [{ name: "GPTPrompts.AI Editorial Team" }],
    creator: "GPTPrompts.AI",
    publisher: "GPTPrompts.AI",
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
      creator: "@gptpromptsai",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}
