import StableDiffusionClientPage from "./client-page"

export const metadata = {
  title: "Stable Diffusion Guide 2026: Complete Prompts, Settings & SDXL Tutorial",
  description:
    "Master Stable Diffusion from scratch. Learn SDXL prompting, negative prompts, and photorealism techniques. Free step-by-step guide with copy-paste examples.",
}

export default function StableDiffusionPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Stable Diffusion Prompts Master Guide: From Basic Concepts to Photorealism",
    description:
      "Complete guide to mastering Stable Diffusion with advanced prompting techniques, token weighting, and photorealism methods.",
    datePublished: "2026-01-07",
    dateModified: "2026-01-07",
    author: {
      "@type": "Organization",
      name: "GPTPrompts.AI",
    },
    image: "https://gptprompts.ai/stable-diffusion-guide.jpg",
    articleBody: "Master Stable Diffusion from basics to photorealism...",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <StableDiffusionClientPage />
    </>
  )
}
