import type { Metadata } from "next"
import ClientPage from "./client"

export const metadata: Metadata = {
  title: "DALL-E 3 Prompts 2026: 60+ Copy-Paste Examples for Stunning AI Images",
  description:
    "Get 60+ copy-paste DALL-E 3 prompts for portraits, landscapes, product shots, art styles, and experimental concepts. Master OpenAI's image generator with proven prompt formulas.",
}

export default function DALLE3Page() {
  return <ClientPage />
}
