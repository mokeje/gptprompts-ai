import type { Metadata } from "next"
import ViggleAIPageClient from "./client-page"

export const metadata: Metadata = {
  title: "Viggle AI Prompts 2026: Best Motion Prompts to Animate Any Character",
  description:
    "Discover the best Viggle AI prompts to animate any character with realistic motion. Copy-paste examples for dance, action sequences, and viral AI video creation.",
}

export default function ViggleAIPage() {
  return <ViggleAIPageClient />
}
