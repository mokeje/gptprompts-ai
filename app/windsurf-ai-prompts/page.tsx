import type { Metadata } from "next"
import WindsurfAIPromptsClient from "./client-page"

export const metadata: Metadata = {
  title: "Windsurf AI Prompts 2026: 60+ Copy-Paste Templates for the Cascade Agent",
  description:
    "Get 60+ copy-paste prompts for Windsurf AI — Codeium's agentic IDE. Expert templates for Cascade agent tasks, chat, debugging, Flows, and architecture planning.",
  keywords:
    "Windsurf AI prompts, Windsurf Cascade prompts, Codeium Windsurf, Windsurf vs Cursor, AI code editor prompts",
}

export default function WindsurfAIPromptsPage() {
  return <WindsurfAIPromptsClient />
}
