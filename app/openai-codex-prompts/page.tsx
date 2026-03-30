import type { Metadata } from "next"
import OpenAICodexPromptsPage from "./client-page"

export const metadata: Metadata = {
  title: "OpenAI Codex Prompts 2026: Code Generation Examples and Guide",
  description:
    "Get the best OpenAI Codex prompts for code generation, completion, and explanation. Copy-paste examples for Python, JavaScript, SQL, and more.",
}

export default function Page() {
  return <OpenAICodexPromptsPage />
}
