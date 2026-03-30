import type { Metadata } from "next"
import JournalistsPage from "./client-page"

export const metadata: Metadata = {
  title: "AI Prompts for Journalists 2026: Expert Templates",
  description:
    "Get expert AI prompts designed for journalists. Copy-paste templates and techniques to use AI more effectively in your daily work.",
}

export default function Page() {
  return <JournalistsPage />
}
