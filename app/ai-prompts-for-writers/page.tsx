import type { Metadata } from "next"
import WritersPage from "./client-page"

export const metadata: Metadata = {
  title: "AI Prompts for Writers 2026: 60+ Creative Writing Templates",
  description:
    "Get 60+ AI writing prompts for novelists, bloggers, copywriters, and content creators. Templates for story ideas, character development, and overcoming writer's block.",
}

export default function Page() {
  return <WritersPage />
}
