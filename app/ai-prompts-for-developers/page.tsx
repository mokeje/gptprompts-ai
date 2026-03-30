import type { Metadata } from "next"
import AIPromptsForDevelopers from "./client-page"

export const metadata: Metadata = {
  title: "AI Prompts for Developers 2026: 60+ Coding and Engineering Templates",
  description:
    "Get 60+ AI prompts for software developers. Templates for code generation, debugging, code review, documentation, and architecture planning with copy-paste examples.",
}

export default function Page() {
  return <AIPromptsForDevelopers />
}
