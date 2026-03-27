import type { Metadata } from "next"
import ViggleAIPageClient from "./client-page"

export const metadata: Metadata = {
  title: "Viggle AI Prompts: The Ultimate Guide to AI Video Generation | GPTPrompts.AI",
  description:
    "Master Viggle AI with advanced motion prompts, character consistency techniques, and professional-grade animation workflows. Learn JST-1 model optimization.",
}

export default function ViggleAIPage() {
  return <ViggleAIPageClient />
}
