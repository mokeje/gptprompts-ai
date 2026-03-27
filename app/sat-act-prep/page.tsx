import type { Metadata } from "next"
import SATACTClientPage from "./sat-act-prep-client"

export const metadata: Metadata = {
  title: "SAT & ACT Prep: ChatGPT Prompts for Test Success | GPTPrompts.AI",
  description:
    "Master SAT and ACT with ChatGPT. Discover targeted prompts for reading, math, writing, and science sections with personalized study plans and practice strategies.",
}

export default function SATACTPage() {
  return <SATACTClientPage />
}
