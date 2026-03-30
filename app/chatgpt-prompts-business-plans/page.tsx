import type { Metadata } from "next"
import BusinessPlansPage from "./client-page"

export const metadata: Metadata = {
  title: "ChatGPT Prompts for Business Plans 2026: 40+ Templates",
  description:
    "Get 40+ ChatGPT prompts to write a complete business plan. Templates for market analysis, financial projections, executive summaries, and investor pitches.",
}

export default function Page() {
  return <BusinessPlansPage />
}
