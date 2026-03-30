import type { Metadata } from "next"
import AIMusicGeneratorPromptsPage from "./client-page"

export const metadata: Metadata = {
  title: "AI Music Generator Prompts 2026: 50+ Copy-Paste Prompts for Suno & Udio",
  description:
    "Get 50+ AI music generator prompts for Suno, Udio, and other music AI tools. Genre descriptions, lyrics, style guides, and mood prompts with copy-paste examples.",
}

export default function Page() {
  return <AIMusicGeneratorPromptsPage />
}
