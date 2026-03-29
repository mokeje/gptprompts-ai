"use client"
import { useState } from "react"
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const CopyCard = ({ title, prompt }: { title: string; prompt: string }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#D97706] transition-colors">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono mb-4 max-h-64">{prompt}</pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#D97706] hover:bg-[#b45309] text-white font-medium py-2 px-4 rounded">
        {copied ? (<><Check className="w-4 h-4" />Copied</>) : (<><Copy className="w-4 h-4" />Copy Prompt</>)}
      </button>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 bg-[#1a1a1a] hover:bg-[#242424] transition-colors">
        <span className="font-semibold text-white text-left">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#D97706] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="p-4 bg-[#0a0a0a] border-t border-[#2a2a2a] text-gray-300">{answer}</div>}
    </div>
  )
}

export default function WarehouseManagementPromptsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "100+ Best AI Prompts for Warehouse Management",
    description: "Expert AI prompts for warehouse operations including inventory optimization, layout planning, picking efficiency, safety procedures, demand forecasting, and logistics.",
    datePublished: "2026-03-29",
    dateModified: "2026-03-29",
    image: "https://gptprompts.ai/og.png",
    author: { "@type": "Organization", name: "GPTPrompts.AI" }
  }
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How can AI improve warehouse operations?", acceptedAnswer: { "@type": "Answer", text: "AI can optimize inventory levels, improve picking routes, forecast demand, automate quality checks, enhance safety compliance, streamline receiving processes, and provide real-time analytics for warehouse performance." } },
      { "@type": "Question", name: "What AI tools are used in warehouse management?", acceptedAnswer: { "@type": "Answer", text: "Common AI tools include WMS (Warehouse Management Systems) with AI features, demand forecasting platforms, robotic process automation, computer vision for quality inspection, and conversational AI for generating reports and procedures." } },
      { "@type": "Question", name: "Can AI help reduce warehouse costs?", acceptedAnswer: { "@type": "Answer", text: "Yes, AI helps reduce costs through optimized inventory levels (less carrying cost), efficient picking routes (less labor time), better demand forecasting (less overstock/stockout), and predictive maintenance (less equipment downtime)." } },
      { "@type": "Question", name: "How does AI help with inventory management?", acceptedAnswer: { "@type": "Answer", text: "AI analyzes historical sales data, seasonality, and market trends to forecast demand, set optimal reorder points, calculate safety stock levels, and identify slow-moving inventory for markdown or redistribution." } },
      { "@type": "Question", name: "What is slotting optimization?", acceptedAnswer: { "@type": "Answer", text: "Slotting optimization is the process of determining the ideal storage location for each SKU in a warehouse. AI considers pick frequency, item size, weight, affinity groupings, and ergonomics to minimize travel time and improve efficiency." } },
      { "@type": "Question", name: "Can AI improve warehouse safety?", acceptedAnswer: { "@type": "Answer", text: "AI can help by generating comprehensive safety procedures, analyzing incident data for patterns, creating training materials, monitoring compliance through checklists, and identifying high-risk areas or processes that need additional controls." } },
      { "@type": "Question", name: "How does demand forecasting work in warehouses?", acceptedAnswer: { "@type": "Answer", text: "Demand forecasting uses historical data, seasonal patterns, promotional calendars, and market indicators to predict future demand. This helps warehouses pre-position inventory, plan labor schedules, and allocate space efficiently." } },
      { "@type": "Question", name: "What KPIs should warehouses track?", acceptedAnswer: { "@type": "Answer", text: "Key KPIs include order accuracy rate, pick rate per hour, inventory accuracy, on-time shipping rate, receiving dock-to-stock time, space utilization percentage, cost per order shipped, and employee productivity metrics." } },
      { "@type": "Question", name: "Can AI help with warehouse labor planning?", acceptedAnswer: { "@type": "Answer", text: "AI can forecast labor needs based on order volume predictions, optimize shift scheduling, balance workloads across zones, identify training needs, and help plan for seasonal peaks and valleys in demand." } },
      { "@type": "Question", name: "How do I get started with AI in my warehouse?", acceptedAnswer: { "@type": "Answer", text: "Start with low-hanging fruit: use AI to generate SOPs and training materials, analyze your existing data for insights, create dashboards for KPI tracking, and automate routine reports. Then progress to demand forecasting and optimization." } }
    ]
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D97706]/10 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1 bg-[#D97706]/10 border border-[#D97706]/30 rounded-full text-sm text-[#D97706] mb-6">100+ Warehouse Management Prompts</div>
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Best AI Prompts for Warehouse Management</h1>
          <p className="text-xl text-gray-400 mb-8">Optimize warehouse operations with AI prompts for inventory management, layout planning, picking efficiency, safety compliance, demand forecasting, and logistics optimization.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#D97706]">Inventory Optimization</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="ABC/XYZ Inventory Classification" prompt="Analyze our inventory of [number] SKUs and create an ABC/XYZ classification matrix. Use this data: [paste or describe data with SKU, annual revenue, demand variability]. Classify by: A (top 80% revenue), B (next 15%), C (bottom 5%) AND X (stable demand, CV<0.5), Y (variable, CV 0.5-1.0), Z (erratic, CV>1.0). For each combination (AX, AY, AZ, BX, etc.), recommend: reorder strategy, safety stock approach, review frequency, and storage priority zone." />
            <CopyCard title="Safety Stock Calculator" prompt="Calculate optimal safety stock levels for our top 20 SKUs. For each SKU, I have: average daily demand, demand standard deviation, lead time (days), lead time variability, and desired service level (95%/99%). Use the formula that accounts for both demand and lead time variability. Present results in a table showing: SKU, current safety stock, recommended safety stock, reorder point, and estimated annual carrying cost impact of the change." />
            <CopyCard title="Slow-Moving Inventory Action Plan" prompt="Create an action plan for our slow-moving and dead stock inventory. Current situation: [number] SKUs with no movement in 90+ days, valued at approximately [dollar amount]. Provide a tiered approach: Tier 1 (90-180 days): strategies to increase velocity (bundling, promotions, repositioning). Tier 2 (180-365 days): markdown and redistribution plans. Tier 3 (365+ days): liquidation and write-off procedures. Include decision criteria for each tier and financial impact estimates." />
            <CopyCard title="Cycle Count Program Design" prompt="Design a comprehensive cycle count program for our warehouse with [number] SKU locations. Include: counting frequency by ABC classification (A items daily/weekly, B monthly, C quarterly), zone rotation schedule, variance threshold triggers (by dollar value and unit count), root cause investigation procedure for variances exceeding [X]%, reconciliation workflow, performance metrics (accuracy by zone, counter productivity), and annual physical inventory avoidance criteria." />
            <CopyCard title="Demand Forecasting Framework" prompt="Build a demand forecasting framework for our [product category] inventory. Historical data available: [describe timeframe and granularity]. Account for: seasonal patterns, promotional events calendar, new product introductions, product lifecycle stage, market trends, and cannibalization effects. Recommend forecasting method for each product segment, define forecast accuracy targets (MAPE), and create an exception management process for items that deviate more than [X]% from forecast." />
            <CopyCard title="Reorder Point Optimization" prompt="Optimize reorder points and order quantities for our [number] SKUs across [number] warehouse locations. Current approach: [describe current method]. Consider: variable lead times by supplier, volume discounts and MOQs, storage constraints by location, carrying cost rate of [X]%, ordering cost of [X] per PO, and target fill rate of [X]%. Calculate economic order quantity (EOQ) for each SKU and recommend a replenishment calendar that balances cost efficiency with service levels." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#D97706]">Layout &amp; Space Planning</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="Warehouse Layout Optimization" prompt="Optimize the layout of our [size] sq ft warehouse. Current configuration: [describe zones and approximate areas]. Product mix: [describe high/medium/low velocity split]. Operations: receiving [X] pallets/day, shipping [X] orders/day, [picking method]. Recommend: zone placement relative to dock doors, aisle width by zone type, storage media selection (selective rack, drive-in, flow rack, shelving) for each product category, and staging area sizing. Prioritize minimizing travel distance for the top 20% of SKUs." />
            <CopyCard title="Slotting Strategy" prompt="Develop a slotting strategy for our pick area with [number] locations. Analyze these SKU attributes: pick frequency (hits per day), units per pick, item dimensions and weight, product affinity (items frequently ordered together), and special handling requirements (temperature, hazmat, fragile). Recommend: golden zone allocation (waist-to-shoulder height), forward pick location sizing, velocity-based zone assignments, and a re-slotting trigger criteria and frequency." />
            <CopyCard title="Dock Door Assignment Plan" prompt="Create a dock door assignment plan for our warehouse with [number] inbound and [number] outbound doors. Daily volumes: receiving [X] trucks, shipping [X] trucks. Consider: carrier appointment windows, cross-dock opportunities, trailer yard staging capacity, product flow patterns (receiving to storage zones), seasonal peak adjustments, and LTL vs FTL mix. Provide a standard daily schedule and a peak season variation with door utilization targets." />
            <CopyCard title="Storage Media Selection Guide" prompt="Create a decision matrix for selecting the right storage media for different product categories in our warehouse. Compare: selective pallet rack, double-deep rack, drive-in/drive-through, push-back rack, pallet flow rack, carton flow rack, static shelving, mezzanine, and automated storage (AS/RS). For each option, evaluate: cost per pallet position, space utilization %, selectivity %, throughput capacity, best-suited product profile, and FIFO/LIFO compatibility. Then recommend the optimal media for each of our product categories: [list categories]." />
            <CopyCard title="Expansion Planning Analysis" prompt="Our warehouse is at [X]% capacity and growing [X]% annually. Analyze options for addressing our space constraints: 1) Layout optimization of current space (quick wins), 2) Vertical expansion (mezzanines, taller racking), 3) Automation investment (AS/RS, goods-to-person), 4) External overflow facility, 5) New facility construction. For each option, estimate: capacity gain, implementation timeline, capital cost, ongoing operational cost impact, and risk factors. Recommend a phased approach." />
            <CopyCard title="Returns Processing Area Design" prompt="Design a returns processing area for our warehouse handling [X] returns per day. Include: receiving and sorting zone (by return reason), inspection and grading stations (A-grade resale, B-grade refurbish, C-grade liquidate, D-grade dispose), repackaging workstations, inventory reintegration process, quarantine area for quality holds, and waste/recycling staging. Calculate required space based on processing time per return type and daily volumes. Include equipment list and staffing model." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#D97706]">Picking &amp; Fulfillment Efficiency</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="Pick Path Optimization" prompt="Optimize our picking routes in a warehouse with [number] aisles, [racking configuration]. Current method: [describe - discrete, batch, zone, wave]. Average order profile: [X] lines per order, [X] orders per day. Recommend: optimal pick path algorithm (serpentine, return, midpoint, largest gap), batch size and composition rules, zone boundary definitions if using zone picking, and expected productivity improvement. Include a comparison of current vs. optimized travel distance for a sample of 50 orders." />
            <CopyCard title="Wave Planning Strategy" prompt="Design a wave planning strategy for our fulfillment operation. Order characteristics: [X] orders/day, [X] carrier cutoff times, [average lines per order], [single-line vs multi-line split]. Resources: [X] pickers, [X] pack stations, [X] shipping lanes. Create wave grouping rules based on: carrier/service level priority, ship date, order similarity (for batch efficiency), zone balancing, and resource availability. Include wave release cadence, progress monitoring checkpoints, and exception handling for late-arriving orders." />
            <CopyCard title="Pack Station Productivity" prompt="Analyze and improve our packing station operations. Current metrics: [X] orders packed per hour per person, [X]% accuracy rate. Process: [describe current packing workflow]. Identify bottlenecks and recommend improvements for: workstation ergonomic layout, materials positioning, box size selection logic (right-sizing), packing material usage optimization, quality verification steps, label printing workflow, and suggested standard work sequence. Target: [X]% productivity improvement while maintaining 99.9% accuracy." />
            <CopyCard title="Order Prioritization Engine" prompt="Create an order prioritization logic for our warehouse. Order attributes to consider: promised delivery date, shipping service level (next-day, 2-day, ground), customer tier (VIP, standard, wholesale), order value, order complexity (single item vs multi-item), special handling requirements, and carrier pickup schedule. Define a scoring system that automatically ranks orders for processing sequence. Include rules for: rush order handling, backorder partial fulfillment decisions, and end-of-day priority cutoff adjustments." />
            <CopyCard title="Labor Planning Model" prompt="Build a labor planning model for our warehouse operations. Inputs: weekly order forecast by day, lines per order distribution, engineered labor standards by function (receiving: [X] pallets/hr, putaway: [X] pallets/hr, picking: [X] lines/hr, packing: [X] orders/hr, shipping: [X] pallets/hr). Calculate: headcount needed per function per shift, flex labor requirements for peak days, overtime projections, cross-training needs for volume balancing. Factor in: planned absences ([X]%), break schedules, indirect time ([X]%), and a learning curve for temporary workers." />
            <CopyCard title="Same-Day Shipping Process" prompt="Design a same-day shipping fulfillment process for orders received by [cutoff time]. Current challenges: [describe]. Create an end-to-end workflow: order receipt and validation, inventory allocation and reservation, priority pick wave creation, expedited picking procedure, dedicated pack lane setup, carrier manifest and label generation, and dock staging for carrier pickup. Include escalation procedures for inventory shortages, SLAs for each process step, and real-time visibility dashboard requirements." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#D97706]">Safety &amp; Compliance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="Warehouse Safety Program" prompt="Develop a comprehensive warehouse safety program covering: 1) Forklift/PIT operation safety (certification, pre-shift inspection, pedestrian zones), 2) Ergonomic lifting guidelines with weight limits by lift type, 3) Racking inspection and load capacity procedures, 4) Fire prevention and emergency evacuation plan, 5) Hazardous material handling SOPs, 6) Personal protective equipment requirements by zone, 7) Incident reporting and investigation procedure, 8) Monthly safety audit checklist. Include OSHA compliance requirements relevant to warehouse operations." />
            <CopyCard title="Dock Safety Procedures" prompt="Write detailed dock safety procedures for our shipping and receiving area. Cover: trailer restraint and dock lock verification before entry, dock plate/leveler inspection and operation, trailer condition check before loading/unloading, forklift speed limits in dock area, pedestrian traffic management around dock doors, weather-related hazards (wet floors, ice, wind), trailer securement for live loads vs. drop trailers, and emergency procedures for dock incidents. Include a pre-shift dock safety checklist." />
            <CopyCard title="Hazardous Materials Handling" prompt="Create a hazardous materials handling procedure for our warehouse that stores [types of hazmat]. Include: receiving and identification procedures, SDS (Safety Data Sheet) management, proper storage segregation based on compatibility, labeling and signage requirements, spill response procedures with containment steps, PPE requirements for handling, quantity limits by storage area, inspection frequency, employee training requirements, and regulatory reporting obligations (EPA, OSHA, DOT)." />
            <CopyCard title="New Employee Safety Orientation" prompt="Create a comprehensive safety orientation program for new warehouse employees. Structure as a 4-hour training covering: facility tour with hazard identification, general safety rules and policies, PPE fitting and usage training, powered industrial truck awareness (even for non-operators), emergency procedures and exit routes, ergonomic lifting techniques with hands-on practice, hazard communication and SDS locations, near-miss and incident reporting process, and safety culture expectations. Include a written assessment (20 questions) and practical demonstration checklist." />
            <CopyCard title="Racking Safety Inspection" prompt="Create a racking safety inspection procedure and checklist for our warehouse with [racking type and height]. Monthly inspection should cover: upright frame damage (dents, bends, rust), beam connector condition and locking pin presence, load capacity label verification, overloaded or improperly stored pallets, base plate anchoring, row spacer and cross-bracing integrity, column protector condition, and clearance from sprinkler heads. Define damage classification: green (monitor), yellow (reduce load/repair within 30 days), red (immediate unload and repair). Include photo reference guide for each damage level." />
            <CopyCard title="Emergency Response Plan" prompt="Develop a warehouse emergency response plan covering these scenarios: fire, severe weather (tornado, hurricane), chemical spill, medical emergency, active threat, power outage, and structural collapse. For each scenario: immediate response actions, evacuation routes and assembly points, communication protocol (internal and external), roles and responsibilities, emergency contact numbers, business continuity steps, and post-incident procedures. Include a wallet-sized quick reference card for employees and quarterly drill schedule." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-[#D97706]">Analytics &amp; Reporting</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CopyCard title="Warehouse KPI Dashboard" prompt="Design a real-time warehouse KPI dashboard with these metric categories: Inbound (receiving dock-to-stock hours, put-away accuracy, appointment compliance), Storage (space utilization %, inventory accuracy, inventory turns), Outbound (orders shipped per hour, on-time shipping %, pick accuracy, cost per order), Labor (units per labor hour by function, overtime %, absenteeism rate), and Quality (order accuracy %, damage rate, return rate). For each KPI, define: calculation formula, data source, target, alert threshold, and suggested visualization type." />
            <CopyCard title="Weekly Operations Report" prompt="Generate a weekly warehouse operations report template. Include sections: Executive summary (3 highlights, 2 concerns), volume metrics (received, shipped, returns) vs. plan with variance explanation, labor productivity by department with trend analysis, quality metrics (accuracy, damage, customer complaints), inventory health (stock levels, aging, accuracy), safety incidents and near-misses, equipment uptime and maintenance log, upcoming week forecast and preparation plan, and action items with owners and due dates from the previous week." />
            <CopyCard title="Cost-Per-Order Analysis" prompt="Build a cost-per-order analysis framework for our warehouse. Break down total cost into: labor (by function: receiving, putaway, picking, packing, shipping), facility (rent, utilities, insurance, maintenance per sq ft), equipment (depreciation, fuel, maintenance), packaging materials, technology (WMS, RF scanners, labels), and overhead allocation. Calculate cost per order for: single-item orders, multi-item orders, wholesale/bulk orders, and returns. Identify the top 5 cost reduction opportunities with estimated savings." />
            <CopyCard title="Seasonal Demand Preparation" prompt="Create a seasonal peak preparation plan for our warehouse. Peak period: [dates], expected volume increase: [X]%. Address: labor (temporary hiring timeline, training schedule, shift additions), space (overflow areas, external storage, receiving staging), equipment (additional rentals, maintenance pre-checks), inventory (pre-positioning strategy, safety stock adjustments), systems (WMS capacity, label printing speed), carrier (volume commitments, pickup schedule changes), and contingency plans for volumes exceeding forecast by 10%, 25%, and 50%." />
            <CopyCard title="Automation ROI Analysis" prompt="Analyze the ROI for implementing [automation type: conveyor system / AS/RS / robotic picking / AMRs / sortation system] in our warehouse. Current state: [describe manual process, labor cost, throughput]. Proposed automation: [describe solution]. Calculate: total investment cost (equipment, installation, integration, training), annual labor savings, throughput improvement, accuracy improvement, maintenance costs, useful life and depreciation, payback period, NPV at [X]% discount rate, and IRR. Include risk factors and a sensitivity analysis for volume changes of +/-20%." />
            <CopyCard title="Carrier Performance Scorecard" prompt="Create a carrier performance scorecard for our [number] transportation partners. Track monthly metrics: on-time pickup percentage, on-time delivery percentage, damage claim rate and dollar value, billing accuracy, transit time consistency (vs. quoted), customer complaint rate attributable to carrier, capacity availability during peak, and responsiveness to issues. Define scoring methodology (weighted average across metrics), performance tiers (preferred, approved, probation, suspended), quarterly business review agenda, and improvement plan template for underperforming carriers." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="How can AI improve warehouse operations?" answer="AI can optimize inventory levels, improve picking routes, forecast demand, automate quality checks, enhance safety compliance, streamline receiving processes, and provide real-time analytics for warehouse performance." />
            <FAQItem question="What AI tools are used in warehouse management?" answer="Common AI tools include WMS (Warehouse Management Systems) with AI features, demand forecasting platforms, robotic process automation, computer vision for quality inspection, and conversational AI for generating reports and procedures." />
            <FAQItem question="Can AI help reduce warehouse costs?" answer="Yes, AI helps reduce costs through optimized inventory levels (less carrying cost), efficient picking routes (less labor time), better demand forecasting (less overstock/stockout), and predictive maintenance (less equipment downtime)." />
            <FAQItem question="How does AI help with inventory management?" answer="AI analyzes historical sales data, seasonality, and market trends to forecast demand, set optimal reorder points, calculate safety stock levels, and identify slow-moving inventory for markdown or redistribution." />
            <FAQItem question="What is slotting optimization?" answer="Slotting optimization is the process of determining the ideal storage location for each SKU in a warehouse. AI considers pick frequency, item size, weight, affinity groupings, and ergonomics to minimize travel time and improve efficiency." />
            <FAQItem question="Can AI improve warehouse safety?" answer="AI can help by generating comprehensive safety procedures, analyzing incident data for patterns, creating training materials, monitoring compliance through checklists, and identifying high-risk areas or processes that need additional controls." />
            <FAQItem question="How does demand forecasting work in warehouses?" answer="Demand forecasting uses historical data, seasonal patterns, promotional calendars, and market indicators to predict future demand. This helps warehouses pre-position inventory, plan labor schedules, and allocate space efficiently." />
            <FAQItem question="What KPIs should warehouses track?" answer="Key KPIs include order accuracy rate, pick rate per hour, inventory accuracy, on-time shipping rate, receiving dock-to-stock time, space utilization percentage, cost per order shipped, and employee productivity metrics." />
            <FAQItem question="Can AI help with warehouse labor planning?" answer="AI can forecast labor needs based on order volume predictions, optimize shift scheduling, balance workloads across zones, identify training needs, and help plan for seasonal peaks and valleys in demand." />
            <FAQItem question="How do I get started with AI in my warehouse?" answer="Start with low-hanging fruit: use AI to generate SOPs and training materials, analyze your existing data for insights, create dashboards for KPI tracking, and automate routine reports. Then progress to demand forecasting and optimization." />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Explore More Prompts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "ChatGPT Prompts", href: "/chatgpt-prompts", color: "#10A37F" },
              { title: "Claude Prompts", href: "/claude-prompts", color: "#D97706" },
              { title: "AI for Supply Chain", href: "/ai-prompts-supply-chain", color: "#8B5CF6" },
              { title: "AI for Operations", href: "/ai-for-operations-management-prompts", color: "#F97316" },
              { title: "AI for Small Business", href: "/ai-prompts-small-business", color: "#10B981" },
              { title: "AI for Quality", href: "/ai-for-quality-management-prompts", color: "#059669" },
              { title: "AI for Finance", href: "/ai-prompts-finance", color: "#6366F1" },
              { title: "AI for Risk Management", href: "/ai-for-risk-management-prompts", color: "#DC2626" },
            ].map((page) => (
              <Link key={page.href} href={page.href} className="block p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:border-opacity-60 transition-colors text-center" style={{ borderColor: page.color + "40" }}>
                <span className="font-medium text-white text-sm">{page.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}