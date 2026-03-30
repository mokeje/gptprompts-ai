import type { Metadata } from "next"
import MealPlanningPromptsPage from "./client-page"

export const metadata: Metadata = {
  title: "ChatGPT Prompts for Meal Planning 2026: 40+ Weekly Meal Templates",
  description:
    "Get 40+ ChatGPT prompts for weekly meal planning, grocery lists, and recipe ideas. Templates for dietary restrictions, budget meals, and family-friendly cooking.",
}

export default function Page() {
  return <MealPlanningPromptsPage />
}
