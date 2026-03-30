import type { Metadata } from "next"
import CopyCard from "./client-page"

export const metadata: Metadata = {
  title: "Sora Prompts 2026: 50+ Copy-Paste Text-to-Video Prompts (OpenAI)",
  description:
    "Get 50+ Sora prompts for creating cinematic AI video with OpenAI's video model. Camera techniques, scene descriptions, and motion prompts with copy-paste examples.",
}

export default function Page() {
  return <CopyCard />
}
