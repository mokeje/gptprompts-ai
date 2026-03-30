import type { Metadata } from "next"
import ExcelPromptsPage from "./client-page"

export const metadata: Metadata = {
  title: "ChatGPT Prompts for Excel 2026: 50+ Formulas, Macros & Data Tips",
  description:
    "Get 50+ ChatGPT prompts for Excel formulas, pivot tables, VBA macros, and data analysis. Copy-paste templates to automate spreadsheet tasks and save hours of work.",
}

export default function Page() {
  return <ExcelPromptsPage />
}
