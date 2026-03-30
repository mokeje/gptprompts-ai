import type { Metadata } from "next"
import GPT4OPromptsPage from "./client-page"

export const metadata: Metadata = {
  title: "GPT-4o Prompts Guide 2026: Advanced Techniques and Examples",
  description:
    "Master GPT-4o with 60+ prompts covering multimodal inputs, reasoning, coding, and creative tasks. Copy-paste examples for getting the most out of GPT-4o's capabilities.",
}

export default function Page() {
  return <GPT4OPromptsPage />
}
