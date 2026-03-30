import type { Metadata } from "next"
import ResearchersPage from "./client-page"

export const metadata: Metadata = {
  title: "AI Prompts for Researchers 2026: Expert Templates",
  description:
    "Get expert AI prompts designed for researchers. Copy-paste templates and techniques to use AI more effectively in your daily work.",
}

export default function Page() {
  return <ResearchersPage />
}
