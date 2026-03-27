import StableDiffusionClientPage from "./client-page"

export const metadata = {
  title: "Stable Diffusion Prompts Master Guide 2026: From Basic to Photorealism | GPTPrompts.AI",
  description:
    "Master Stable Diffusion with token weighting, negative prompting, and photorealism techniques. Complete guide to SDXL, lighting, composition, and professional workflows.",
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
