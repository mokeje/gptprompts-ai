import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gemini for Data Visualization: Charts & Insights | GPTPrompts.AI",
  description:
    "Master Gemini's data visualization capabilities. Generate interactive charts, dashboards, and insights from spreadsheets and datasets using natural language prompts.",
}

export default function GeminiDataVisualizationPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#4285f4] to-[#1f6feb] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            Gemini <br />
            <span className="italic opacity-90">Visualization.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            Generate professional charts, dashboards, and visual insights from data with natural language prompts.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#4285f4] mb-6">Navigation</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "capabilities", label: "Capabilities", num: "01" },
                  { id: "chart-generation", label: "Chart Generation", num: "02" },
                  { id: "data-insights", label: "Data Insights", num: "03" },
                  { id: "sheets-integration", label: "Sheets Integration", num: "04" },
                  { id: "storytelling", label: "Storytelling", num: "05" },
                  { id: "optimization", label: "Optimization", num: "06" },
                  { id: "faq", label: "FAQ", num: "07" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#4285f4] transition-colors"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs opacity-50 group-hover:opacity-100">{link.num}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-16">
          <section id="capabilities" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Gemini Visualization Power</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Gemini processes CSVs, spreadsheets, and public datasets to generate interactive charts, dashboards, and
              actionable insights in seconds.
            </p>
            <Card className="p-6 border-l-4 border-[#4285f4] space-y-4">
              <div>
                <h3 className="font-bold mb-2">Supported Formats</h3>
                <ul className="space-y-2 text-sm">
                  <li>• CSV and spreadsheet uploads</li>
                  <li>• Public dataset integration (auto-fetch)</li>
                  <li>• PNG/JPG chart analysis</li>
                  <li>• Google Sheets direct integration</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Output Types</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Interactive PNG/SVG exports</li>
                  <li>• Sheets embedded visuals</li>
                  <li>• Executive dashboards</li>
                  <li>• Presentation-ready graphics</li>
                </ul>
              </div>
            </Card>
          </section>

          <section id="chart-generation" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Chart Generation Mastery</h2>
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-[#4285f4]">
                <h3 className="font-bold mb-3">Universal Chart Creator Prompt</h3>
                <div className="bg-muted p-4 rounded font-mono text-xs overflow-auto mb-4">
                  <pre>{`Generate [CHART_TYPE] for [DATA].
X-axis: [CATEGORY/TIME]
Y-axis: [METRIC]
Color by: [SEGMENT]
Title: "[CUSTOM]"
Annotations: Label peaks/trends
Export: Interactive/Sheets/PNG`}</pre>
                </div>
                <p className="text-sm">Use bar/line/scatter/pie/heatmap based on data type.</p>
              </Card>
              <Card className="p-6 border-l-4 border-[#4285f4]">
                <h3 className="font-bold mb-3">Smart Chart Recommender</h3>
                <p className="text-sm mb-3">Let Gemini suggest optimal visualization:</p>
                <table className="w-full text-xs mb-3">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">
                        <strong>Bar</strong>
                      </td>
                      <td className="p-2">Comparisons across categories</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">
                        <strong>Line</strong>
                      </td>
                      <td className="p-2">Trends over time</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">
                        <strong>Scatter</strong>
                      </td>
                      <td className="p-2">Correlation analysis</td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        <strong>Heatmap</strong>
                      </td>
                      <td className="p-2">Multi-dimensional relationships</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </div>
          </section>

          <section id="data-insights" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Data Insight Extraction</h2>
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-[#4285f4]">
                <h3 className="font-bold mb-3">Trend and Anomaly Hunter</h3>
                <p className="text-sm mb-3">Analyze data for actionable insights:</p>
                <ol className="space-y-2 text-sm pl-4">
                  <li>1. Top 3 trends (% changes)</li>
                  <li>2. Anomalies and outliers</li>
                  <li>3. Correlations (top pairs)</li>
                  <li>4. Forecasts (next period)</li>
                  <li>5. Business narrative (hook → insight → action)</li>
                </ol>
              </Card>
              <Card className="p-6 border-l-4 border-[#4285f4]">
                <h3 className="font-bold mb-3">KPI Executive Brief</h3>
                <p className="text-sm mb-3">Transform metrics into executive dashboard:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Status indicators (Green/Yellow/Red)</li>
                  <li>• Key drivers breakdown</li>
                  <li>• Prioritized recommendations</li>
                  <li>• 3-panel chart suite</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="sheets-integration" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Google Sheets Integration</h2>
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-[#4285f4]">
                <h3 className="font-bold mb-3">Live Sheet Charts</h3>
                <p className="text-sm mb-3">Create dynamic charts in Sheets:</p>
                <div className="bg-muted p-3 rounded font-mono text-xs mb-3 overflow-auto">
                  <pre>{`In current sheet, create [CHART_TYPE] for A1:D50:
- Dynamic range (updates with data)
- Filters: Dropdown quarters
- Title/legend
- Insert adjacent insights table`}</pre>
                </div>
              </Card>
              <Card className="p-6 border-l-4 border-[#4285f4]">
                <h3 className="font-bold mb-3">Automated Dashboard</h3>
                <p className="text-sm mb-3">Build full BI dashboards:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Top KPI cards (4 metrics)</li>
                  <li>• Trend line (revenue/metrics)</li>
                  <li>• Heatmap (performance matrix)</li>
                  <li>• Funnel visualization</li>
                  <li>• Summary narrative</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="storytelling" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Data Storytelling</h2>
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-[#4285f4]">
                <h3 className="font-bold mb-3">Narrative Visualizer</h3>
                <p className="text-sm mb-3">Create visual narratives from data:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Hero chart (big insight)</li>
                  <li>• 3 supporting panels</li>
                  <li>• Flow annotations</li>
                  <li>• Branded colors</li>
                  <li>• Infographic style</li>
                </ul>
              </Card>
              <Card className="p-6 border-l-4 border-[#4285f4]">
                <h3 className="font-bold mb-3">Slide Deck Charts</h3>
                <p className="text-sm">Generate presentation-ready visuals:</p>
                <ol className="space-y-2 text-sm mt-3 pl-4">
                  <li>1. Overview bar chart</li>
                  <li>2. Detail drilldown</li>
                  <li>3. Comparison sparkline</li>
                  <li>4. Callout stat graphic</li>
                </ol>
              </Card>
            </div>
          </section>

          <section id="optimization" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Optimization Tips</h2>
            <Card className="p-6">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-bold">Data Type</th>
                    <th className="text-left p-3 font-bold">Best Prompt</th>
                    <th className="text-left p-3 font-bold">Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Time Series</td>
                    <td className="p-3">"Line chart with trendline"</td>
                    <td className="p-3">Trends clear</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Categories</td>
                    <td className="p-3">"Grouped bars"</td>
                    <td className="p-3">Comparisons</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Hierarchies</td>
                    <td className="p-3">"Treemap/heatmap"</td>
                    <td className="p-3">Proportions</td>
                  </tr>
                  <tr>
                    <td className="p-3">Correlations</td>
                    <td className="p-3">"Scatter + regression"</td>
                    <td className="p-3">Relationships</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </section>

          <section id="faq" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "Can Gemini fetch public data automatically?",
                  a: "Yes. Specify dataset names and Gemini pulls data directly from public sources like World Bank, GitHub, and academic databases.",
                },
                {
                  q: "How do I upload my own CSV data?",
                  a: "Paste CSV directly into Gemini, upload via Google Sheets, or provide a file URL. Gemini automatically parses and visualizes.",
                },
                {
                  q: "What chart types are best for specific scenarios?",
                  a: "Use bar/pie for comparisons, line for trends, scatter for correlations, heatmaps for multi-dimensional data, and treemaps for hierarchies.",
                },
                {
                  q: "Can I make charts interactive?",
                  a: "Yes. Charts generated in Google Sheets are fully interactive with filters, dropdowns, and live data updates.",
                },
                {
                  q: "How do I export charts for presentations?",
                  a: "Export as PNG for reports, PDF for publications, or embed live Sheets for dynamic presentations.",
                },
                {
                  q: "Does Gemini handle missing or messy data?",
                  a: "Gemini can clean data and handle missing values, but specify cleaning preferences in your prompt for transparency.",
                },
                {
                  q: "Can I combine multiple datasets in one visualization?",
                  a: "Yes. Provide multiple datasets or CSV files and Gemini merges them with joins/overlays as appropriate.",
                },
                {
                  q: "How do I iterate on chart design?",
                  a: "Charts are editable. Prompt refinements: 'Add labels', 'Switch to stacked bars', 'Highlight Q4 spike'.",
                },
                {
                  q: "What's the best workflow for BI dashboards?",
                  a: "Start with metric list → Gemini suggests layout → Create live Sheets dashboard → Add filters and interactivity.",
                },
                {
                  q: "Can Gemini forecast trends?",
                  a: "Yes. Include historical data and Gemini generates forecasts with confidence bands and scenario overlays.",
                },
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold hover:text-[#4285f4]">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16 px-6 md:px-12 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-sm">AI Models</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/gemini-prompts" className="hover:text-[#4285f4]">
                  Gemini Prompts
                </Link>
              </li>
              <li>
                <Link href="/claude-prompts" className="hover:text-[#4285f4]">
                  Claude Prompts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-sm">Advanced Topics</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-engineering-framework" className="hover:text-[#4285f4]">
                  8-Step Framework
                </Link>
              </li>
              <li>
                <Link href="/chain-of-thought-prompting" className="hover:text-[#4285f4]">
                  Chain of Thought
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/website-links" className="hover:text-[#4285f4]">
                  All Pages
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#4285f4]">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-sm">Learning</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-best-practices" className="hover:text-[#4285f4]">
                  Best Practices
                </Link>
              </li>
              <li>
                <Link href="/common-prompt-mistakes" className="hover:text-[#4285f4]">
                  Common Mistakes
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2026 GPTPrompts.AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
