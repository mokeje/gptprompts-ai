import type { Metadata } from "next"
import UChicagoClientPage from "./uchicago-client-page"

export const metadata: Metadata = {
  title: "UChicago Essay Prompts Guide: Master Extended Essays | GPTPrompts.AI",
  description:
    "Decode UChicago's notoriously difficult essay prompts. Learn to tackle weird, philosophical questions with logical frameworks and AI-assisted brainstorming.",
}

export default function UChicagoPage() {
  return <UChicagoClientPage />
}
