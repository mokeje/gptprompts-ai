import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Claude Image Analysis: Vision Understanding Prompts | GPTPrompts.AI",
  description:
    "Master Claude's vision capabilities with advanced prompts for image analysis, OCR, design review, and visual reasoning. Upload screenshots, charts, and photos.",
}

export default function ClaudeImageAnalysisPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="bg-gradient-to-r from-[#6f42c1] to-[#5a32a3] text-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold mb-12 inline-block opacity-80 hover:opacity-100">
            GPTPrompts.AI
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-8">
            Claude <br />
            <span className="italic opacity-90">Vision.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl opacity-90">
            Unlock Claude's image analysis capabilities with expert prompts for design review, chart extraction, OCR,
            and multimodal reasoning.
          </p>
        </div>
      </header>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <aside className="lg:col-span-3 lg:sticky lg:top-12 self-start">
          <nav className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#6f42c1] mb-6">Navigation</h3>
              <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                {[
                  { id: "setup", label: "Setup & Limits", num: "01" },
                  { id: "general-analysis", label: "Image Analysis", num: "02" },
                  { id: "screenshot", label: "Screenshot Review", num: "03" },
                  { id: "diagrams", label: "Diagrams & Charts", num: "04" },
                  { id: "documents", label: "Documents", num: "05" },
                  { id: "advanced", label: "Advanced Techniques", num: "06" },
                  { id: "best-practices", label: "Best Practices", num: "07" },
                  { id: "faq", label: "FAQ", num: "08" },
                ].map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="group flex items-center justify-between hover:text-[#6f42c1] transition-colors"
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
          <section id="setup" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Setup and Capabilities</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Claude processes JPEG, PNG, GIF, and WebP images (under 20MB) with advanced visual reasoning across
              design, technical, and analytical domains.
            </p>
            <Card className="p-6 border-l-4 border-[#6f42c1]">
              <h3 className="font-bold mb-4">Image Processing Features</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  • <strong>Upload:</strong> Direct chat or base64 via API
                </li>
                <li>
                  • <strong>Batch:</strong> Up to 100 images via API, 5 on claude.ai
                </li>
                <li>
                  • <strong>Capabilities:</strong> Context, spatial reasoning, OCR
                </li>
                <li>
                  • <strong>Limitations:</strong> No precise measurements, low-res struggles, privacy-focused (no face
                  ID)
                </li>
                <li>
                  • <strong>Strategy:</strong> Prompt images before text, chain follow-ups for depth
                </li>
              </ul>
            </Card>
          </section>

          <section id="general-analysis" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">General Image Analysis</h2>
            <Card className="p-6 border-l-4 border-[#6f42c1]">
              <h3 className="font-bold mb-4">Comprehensive Scene Breakdown</h3>
              <div className="space-y-3 text-sm">
                <p className="font-semibold">Analyze image in six dimensions:</p>
                <ol className="space-y-2 pl-4">
                  <li>
                    1. <strong>Overall Scene:</strong> Main subject, mood, composition
                  </li>
                  <li>
                    2. <strong>Objects/Elements:</strong> List with positions (top-left, foreground)
                  </li>
                  <li>
                    3. <strong>Text Extraction:</strong> All readable text verbatim + location
                  </li>
                  <li>
                    4. <strong>Colors/Palette:</strong> Dominant colors, emotional impact
                  </li>
                  <li>
                    5. <strong>Relationships:</strong> Element interaction and spatial layout
                  </li>
                  <li>
                    6. <strong>Anomalies:</strong> Unusual or noteworthy details
                  </li>
                </ol>
              </div>
            </Card>
          </section>

          <section id="screenshot" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Screenshot and UI Analysis</h2>
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-[#6f42c1]">
                <h3 className="font-bold mb-3">UI/UX Review Framework</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Six evaluation areas:</strong>
                  </p>
                  <ul className="space-y-2 pl-4">
                    <li>
                      • <strong>Layout:</strong> Hierarchy, whitespace, flow direction
                    </li>
                    <li>
                      • <strong>Typography:</strong> Font consistency, readability, emphasis
                    </li>
                    <li>
                      • <strong>Colors:</strong> Scheme, contrast (WCAG), branding
                    </li>
                    <li>
                      • <strong>Components:</strong> Buttons, links, forms—states and labels
                    </li>
                    <li>
                      • <strong>Issues:</strong> Accessibility problems, clutter, confusion
                    </li>
                    <li>
                      • <strong>Improvements:</strong> 5 prioritized fixes with rationale
                    </li>
                  </ul>
                </div>
              </Card>
              <Card className="p-6 border-l-4 border-[#6f42c1]">
                <h3 className="font-bold mb-3">Error Screenshot Debugging</h3>
                <p className="text-sm mb-3">Extract and analyze error messages systematically:</p>
                <ul className="space-y-2 text-sm pl-4">
                  <li>• Full error message and stack trace</li>
                  <li>• Probable cause identification</li>
                  <li>• Environment details (version, OS)</li>
                  <li>• Suggested fixes (3 ranked options)</li>
                  <li>• Prevention strategies</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="diagrams" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Diagram and Chart Interpretation</h2>
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-[#6f42c1]">
                <h3 className="font-bold mb-3">Flowchart Decoder</h3>
                <p className="text-sm mb-3">Systematically reverse-engineer diagrams:</p>
                <ol className="space-y-2 text-sm pl-4">
                  <li>1. Overall purpose and process flow</li>
                  <li>2. Decision points and branches</li>
                  <li>3. Inputs and outputs mapping</li>
                  <li>4. Key symbols and meanings</li>
                  <li>5. Bottlenecks and loops</li>
                  <li>6. Pseudocode generation</li>
                </ol>
              </Card>
              <Card className="p-6 border-l-4 border-[#6f42c1]">
                <h3 className="font-bold mb-3">Chart Data Extraction</h3>
                <p className="text-sm mb-3">Extract structured data from visual charts:</p>
                <ul className="space-y-2 text-sm pl-4">
                  <li>• Chart type and axes scales</li>
                  <li>• Key data points (top 5, extremes)</li>
                  <li>• Trends and patterns identified</li>
                  <li>• Annotations and legends decoded</li>
                  <li>• CSV export of visible data</li>
                  <li>• Strategic insights and story</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="documents" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Document and Text Processing</h2>
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-[#6f42c1]">
                <h3 className="font-bold mb-3">OCR and Content Extraction</h3>
                <p className="text-sm mb-3">Process handwritten and scanned documents:</p>
                <ul className="space-y-2 text-sm pl-4">
                  <li>• Full verbatim text (line-by-line)</li>
                  <li>• Categorization into themes</li>
                  <li>• Diagram and sketch identification</li>
                  <li>• Action items and decisions</li>
                  <li>• Clarity issues flagged</li>
                  <li>• Markdown format conversion</li>
                </ul>
              </Card>
              <Card className="p-6 border-l-4 border-[#6f42c1]">
                <h3 className="font-bold mb-3">Slide Deck Analysis (Multi-Image)</h3>
                <p className="text-sm mb-3">Analyze presentation sequences (supports up to 5 images):</p>
                <ul className="space-y-2 text-sm pl-4">
                  <li>• Narrative flow and logical progression</li>
                  <li>• Visual consistency (theme, colors, fonts)</li>
                  <li>• Key messages per slide</li>
                  <li>• Data visualization quality</li>
                  <li>• Presenter notes suggestions</li>
                  <li>• Overall effectiveness rating</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="advanced" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Advanced Vision Techniques</h2>
            <div className="space-y-4">
              <Card className="p-6 border-l-4 border-[#6f42c1]">
                <h3 className="font-bold mb-3">Comparison Mode (Multi-Image)</h3>
                <p className="text-sm mb-3">Analyze differences across image sequences:</p>
                <ul className="space-y-2 text-sm pl-4">
                  <li>• Similarities (objects, layout, colors)</li>
                  <li>• Differences (changes, additions)</li>
                  <li>• Evolution or sequence patterns</li>
                  <li>• Best/worst assessment with rationale</li>
                  <li>• Merged insights and visual summary</li>
                </ul>
              </Card>
              <Card className="p-6 border-l-4 border-[#6f42c1]">
                <h3 className="font-bold mb-3">Spatial Reasoning Query</h3>
                <p className="text-sm mb-3">Analyze layout and spatial relationships:</p>
                <ul className="space-y-2 text-sm pl-4">
                  <li>• Object inventory with bounding descriptions</li>
                  <li>• Relative positions (above, contains, adjacent)</li>
                  <li>• Proportions and scale relationships</li>
                  <li>• Movement and flow direction implied</li>
                  <li>• Simplified wireframe generation</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="best-practices" className="space-y-6">
            <h2 className="text-4xl font-bold text-pretty">Best Practices and Optimization</h2>
            <Card className="p-6">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-bold">Challenge</th>
                    <th className="text-left p-3 font-bold">Fix</th>
                    <th className="text-left p-3 font-bold">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Low accuracy</td>
                    <td className="p-3">High-res, clear images</td>
                    <td className="p-3">"Focus on center panel"</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Hallucinations</td>
                    <td className="p-3">"Quote exactly" + verify</td>
                    <td className="p-3">"List only visible text"</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Complex scenes</td>
                    <td className="p-3">Break into questions</td>
                    <td className="p-3">Image → Objects → Relationships</td>
                  </tr>
                  <tr>
                    <td className="p-3">Multi-image</td>
                    <td className="p-3">Number and reference</td>
                    <td className="p-3">"Image 1 vs Image 2"</td>
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
                  q: "What image formats does Claude support?",
                  a: "JPEG, PNG, GIF, and WebP. Maximum size 20MB per image. Higher resolution generally improves accuracy.",
                },
                {
                  q: "Can Claude identify people in images?",
                  a: "No—Claude cannot identify specific individuals for privacy reasons, but can describe people, poses, and expressions.",
                },
                {
                  q: "How many images can I analyze at once?",
                  a: "Up to 5 images on claude.ai; up to 100 via API. For sequences, reference them by number: Image 1, Image 2, etc.",
                },
                {
                  q: "Is Claude good at reading handwritten text?",
                  a: "Yes, especially for clear handwriting. Provide high-contrast, well-lit images for best OCR results.",
                },
                {
                  q: "Can Claude extract precise measurements from images?",
                  a: "No—Claude struggles with exact pixel measurements or precise dimensions. Use design tools for precise metrics.",
                },
                {
                  q: "What's the best strategy for complex image analysis?",
                  a: "Use sequential prompting: broad analysis first, then specific follow-ups. Chain of thought helps decompose complex visuals.",
                },
                {
                  q: "How do I avoid hallucinations in image interpretation?",
                  a: "Request specific details, ask Claude to quote visible text, and verify findings against primary image data.",
                },
                {
                  q: "Can Claude create visual designs from descriptions?",
                  a: "No—Claude can't generate images. It excels at analyzing existing images and providing design critique.",
                },
                {
                  q: "Is Claude better than OCR tools for document scanning?",
                  a: "Claude combines OCR with semantic understanding, making it superior for context extraction and structured formatting.",
                },
                {
                  q: "How should I structure prompts for UI/UX review?",
                  a: "Request specific dimensions: layout, typography, colors, components, issues, improvements. Get Claude to rate accessibility 1-10.",
                },
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold hover:text-[#6f42c1]">{faq.q}</AccordionTrigger>
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
                <Link href="/claude-prompts" className="hover:text-[#6f42c1]">
                  Claude Prompts
                </Link>
              </li>
              <li>
                <Link href="/claude-research-analysis" className="hover:text-[#6f42c1]">
                  Claude Research
                </Link>
              </li>
              <li>
                <Link href="/chatgpt-prompts" className="hover:text-[#6f42c1]">
                  ChatGPT Prompts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-sm">Advanced Topics</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/gemini-data-visualization" className="hover:text-[#6f42c1]">
                  Data Visualization
                </Link>
              </li>
              <li>
                <Link href="/prompt-engineering-framework" className="hover:text-[#6f42c1]">
                  8-Step Framework
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/website-links" className="hover:text-[#6f42c1]">
                  All Pages
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#6f42c1]">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-sm">Learning</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/prompt-best-practices" className="hover:text-[#6f42c1]">
                  Best Practices
                </Link>
              </li>
              <li>
                <Link href="/common-prompt-mistakes" className="hover:text-[#6f42c1]">
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
