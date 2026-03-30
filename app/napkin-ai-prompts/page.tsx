import type { Metadata } from "next"
import NapkinAIPrompts from "./client-page"

export const metadata: Metadata = {
  title: "Napkin AI Prompts 2026: Turn Text into Visual Diagrams Instantly",
  description:
    "Master Napkin AI with prompts to transform text into flowcharts, diagrams, and visual frameworks. Copy-paste templates for business presentations and concept maps.",
}

export default function Page() {
  return <NapkinAIPrompts />
}
