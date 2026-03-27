import type { Metadata } from "next"
import PennStateClientPage from "./_client"

export const metadata: Metadata = {
  title: "Penn State Essay Prompts Guide: Schreyer Honors Essays | GPTPrompts.AI",
  description:
    "Master Penn State and Schreyer Honors essays. Learn leadership, global perspective, and community-focused prompting strategies.",
}

export default function PennStatePage() {
  return <PennStateClientPage />
}
