import type { Metadata } from "next"
import GoogleSheetsPage from "./client-page"

export const metadata: Metadata = {
  title: "ChatGPT Prompts for Google Sheets 2026: 50+ Formulas & Automation",
  description:
    "Get 50+ ChatGPT prompts for Google Sheets formulas, Apps Script, and data automation. Copy-paste templates to build dashboards, automate workflows, and analyze data.",
}

export default function Page() {
  return <GoogleSheetsPage />
}
