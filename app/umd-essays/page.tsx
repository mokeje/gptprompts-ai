import type { Metadata } from "next"
import UMDPageClient from "./UMDPageClient"

export const metadata: Metadata = {
  title: "UMD Essay Prompts Guide: Master University of Maryland Essays | GPTPrompts.AI",
  description:
    "Master UMD essay prompts with strategic guides for Fearless Ideas essays. Learn to write compelling 650-character responses with AI assistance.",
}

export default function UMDPage() {
  return <UMDPageClient />
}
