import type { Metadata } from "next"
import StartupsPage from "./client-page"

export const metadata: Metadata = {
  title: "AI Prompts for Startups 2026: 50+ Templates for Founders and Teams",
  description:
    "Get 50+ AI prompts designed for startup founders. Templates for pitch decks, investor emails, market research, product specs, and growth strategy.",
}

export default function Page() {
  return <StartupsPage />
}
