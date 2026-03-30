import type { Metadata } from "next"
import AIProductivityPromptsPage from "./client-page"

export const metadata: Metadata = {
  title: "AI Productivity Prompts 2026: 50+ Templates to Work Smarter",
  description:
    "Boost your productivity with 50+ AI prompts for task management, email drafting, meeting prep, and daily planning. Copy-paste templates for ChatGPT, Claude, and Gemini.",
}

export default function Page() {
  return <AIProductivityPromptsPage />
}
