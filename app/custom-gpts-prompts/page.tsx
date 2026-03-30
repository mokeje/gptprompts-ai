import type { Metadata } from "next"
import CustomGPTsPromptsPage from "./client-page"

export const metadata: Metadata = {
  title: "Custom GPTs Prompts 2026: 60+ System Prompts & Instructions for Building GPTs",
  description:
    "Get 60+ copy-paste system prompts and instructions for building powerful Custom GPTs. Expert templates for writing GPT instructions, personas, knowledge bases, and actions.",
  keywords: "custom GPTs prompts, GPT builder instructions, custom GPT system prompt, how to build a custom GPT",
}

export default function Page() {
  return <CustomGPTsPromptsPage />
}
