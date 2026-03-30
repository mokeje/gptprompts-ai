import type { Metadata } from "next"
import ReplitAgentPromptsPage from "./client-page"

export const metadata: Metadata = {
  title: "Replit Agent Prompts 2026: 40+ Copy-Paste Coding Prompts",
  description:
    "Master Replit Agent with 40+ prompts for building apps, debugging code, and deploying projects. Step-by-step guide to getting faster, better results from Replit AI.",
}

export default function Page() {
  return <ReplitAgentPromptsPage />
}
