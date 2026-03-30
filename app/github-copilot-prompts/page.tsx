import type { Metadata } from "next"
import GitHubCopilotPromptsPage from "./client-page"

export const metadata: Metadata = {
  title: "GitHub Copilot Prompts 2026: 50+ Code Examples for Developers",
  description:
    "Get 50+ GitHub Copilot prompts for code generation, debugging, refactoring, and documentation. Boost your development speed with proven copy-paste Copilot techniques.",
}

export default function Page() {
  return <GitHubCopilotPromptsPage />
}
