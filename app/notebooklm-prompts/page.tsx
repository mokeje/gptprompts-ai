import type { Metadata } from "next"
import NotebookLMPromptsPage from "./client-page"

export const metadata: Metadata = {
  title: "NotebookLM Prompts 2026: Best Prompts for AI Research and Notes",
  description:
    "Get the best NotebookLM prompts for document analysis, research summaries, and podcast generation. Copy-paste templates to supercharge your AI-powered research workflow.",
}

export default function Page() {
  return <NotebookLMPromptsPage />
}
