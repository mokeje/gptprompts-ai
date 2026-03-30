import type { Metadata } from "next"
import ClaudeProjectsPromptsPage from "./client-page"

export const metadata: Metadata = {
  title: "Claude Projects Prompts 2026: 60+ System Prompts & Templates for Claude.ai Projects",
  description:
    "Get 60+ copy-paste prompts and system prompt templates for Claude Projects. Expert guides for project instructions, knowledge upload, custom personas, and team workflows.",
  keywords: "Claude Projects prompts, Claude project instructions, Claude system prompt, Claude.ai projects",
}

export default function Page() {
  return <ClaudeProjectsPromptsPage />
}
