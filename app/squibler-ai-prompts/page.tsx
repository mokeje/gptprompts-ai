import type { Metadata } from "next"
import SquiblerPrompts from "./client-page"

export const metadata: Metadata = {
  title: "Squibler AI Prompts 2026: 50+ Creative Writing and Story Ideas",
  description:
    "Get 50+ Squibler AI prompts for novels, screenplays, and story outlines. Expert guide to using AI writing tools to overcome writer's block and develop compelling stories.",
}

export default function Page() {
  return <SquiblerPrompts />
}
