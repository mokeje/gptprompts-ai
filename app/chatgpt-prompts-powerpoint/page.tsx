import type { Metadata } from "next"
import PowerPointPromptsPage from "./client-page"

export const metadata: Metadata = {
  title: "ChatGPT Prompts for PowerPoint 2026: 40+ Presentation Templates",
  description:
    "Get 40+ ChatGPT prompts to create, improve, and design PowerPoint presentations. Slide structure, speaker notes, design guidance, and content prompts with copy-paste examples.",
}

export default function Page() {
  return <PowerPointPromptsPage />
}
