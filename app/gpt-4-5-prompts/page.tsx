import type { Metadata } from "next"
import GPT45PromptsPage from "./client-page"

export const metadata: Metadata = {
  title: "GPT-4.5 Prompts 2026: 60+ Copy-Paste Prompts for OpenAI's Smartest Model",
  description:
    "Get 60+ copy-paste GPT-4.5 prompts for complex reasoning, writing, coding, research, and analysis. Expert templates that unlock the full capability of OpenAI's most advanced model.",
  keywords: "GPT-4.5 prompts, GPT-4.5 examples, OpenAI GPT-4.5, ChatGPT advanced prompts",
}

export default function Page() {
  return <GPT45PromptsPage />
}
