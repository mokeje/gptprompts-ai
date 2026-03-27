import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Prompts for Microsoft 365 Copilot: Teams, Outlook & Business Reports (2026)",
  description:
    "Master Microsoft 365 Copilot with 50+ copy-paste prompts for Teams meetings, Outlook emails, and business reports. Complete guide with best practices.",
  keywords: "Microsoft 365 Copilot, Teams prompts, Outlook prompts, business report prompts",
}

export default function Microsoft365CopilotPromptsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
