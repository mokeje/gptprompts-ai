import type { Metadata } from "next"
import CodingInterviewPromptsPage from "./client-page"

export const metadata: Metadata = {
  title: "ChatGPT Prompts for Coding Interviews 2026: 50+ Practice Templates",
  description:
    "Get 50+ ChatGPT prompts to prepare for coding interviews. LeetCode explanations, algorithm practice, system design review, and mock interview templates.",
}

export default function Page() {
  return <CodingInterviewPromptsPage />
}
