'use client';

import { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, BarChart3, Package, Truck, Building2, Shield, Cpu } from 'lucide-react';

const accent = '#06B6D4';
const borderCol = '#001a1f';
const bgDark = '#030608';

const CopyCard = ({ title, prompt, tag }: { title: string; prompt: string; tag: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div
      className="rounded-lg border p-5 transition-colors"
      style={{ borderColor: borderCol, background: bgDark }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = `${accent}60`)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = borderCol)}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full border" style={{ borderColor: `${accent}40`, color: accent }}>{tag}</span>
          <h3 className="text-white font-semibold mt-1">{title}</h3>
        </div>
        <button onClick={handleCopy} className="shrink-0 text-gray-400 transition-colors hover:text-cyan-400">
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="whitespace-pre-wrap font-sans text-sm text-gray-300 leading-relaxed">{prompt}</pre>
    </div>
  );
};

const FAQ = ({ item }: { item: { question: string; answer: string } }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg overflow-hidden border" style={{ borderColor: borderCol }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors"
        style={{ background: bgDark }}
      >
        <span className="font-medium text-white pr-4">{item.question}</span>
        {open ? <ChevronUp size={18} className="shrink-0" style={{ color: accent }} /> : <ChevronDown size={18} className="shrink-0 text-gray-400" />}
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed" style={{ background: bgDark }}>
          {item.answer}
        </div>
      )}
    </div>
  );
};

const sections = [
  {
    title: 'Demand Forecasting & Planning',
    icon: BarChart3,
    description: 'Build accurate demand forecasts and integrated planning processes that reduce stockouts, cut excess inventory, and align supply with real market signals.',
    prompts: [
      {
        tag: 'Forecasting',
        title: 'Build a Statistical Demand Forecasting Model',
        prompt: `You are a supply chain analytics expert. Help me build a robust statistical demand forecasting model.

My business context:
- Industry: [describe your industry and product type]
- Historical data available: [months/years of sales history]
- Demand patterns: [seasonal, stable, lumpy, trend-driven]
- Current forecasting method: [spreadsheet, gut feel, basic moving average]

Please provide:

1. Recommended forecasting method(s) for my context:
   - Moving average vs exponential smoothing vs ARIMA vs ML-based
   - When to use each and why
   - Trade-offs between complexity and accuracy

2. Step-by-step model build:
   - Data preparation and cleaning steps
   - Handling seasonality and trend components
   - Incorporating external variables (promotions, weather, economic indicators)
   - Safety stock calculation formula

3. Accuracy measurement:
   - MAPE, MAE, and RMSE — which to use and how to interpret
   - Acceptable accuracy benchmarks by industry
   - How to segment products by forecastability (ABC-XYZ analysis)

4. Implementation roadmap:
   - How to run this in Excel, Python (statsmodels), or a planning tool
   - How often to re-train vs re-run the model
   - Governance: who owns the forecast and how to manage disagreements

Provide Python code for the core forecasting logic using statsmodels or scikit-learn.`,
      },
      {
        tag: 'S&OP',
        title: 'Design a Sales and Operations Planning Process',
        prompt: `Act as an S&OP expert. Help me design and implement a Sales and Operations Planning process from scratch.

Company profile:
- Size: [revenue range and number of employees]
- Products: [product types and number of SKUs]
- Current planning maturity: [ad hoc / basic / structured]
- Key challenges: [describe top 3 planning pain points]

Please design:

1. S&OP Process Architecture:
   - Five-step monthly cadence: data gathering, demand review, supply review, pre-S&OP, executive S&OP
   - Who participates in each step (roles, not individuals)
   - Meeting agendas and duration for each step
   - Decision rights at each stage

2. Demand Review Meeting:
   - Statistical baseline forecast vs commercial input process
   - How to document and track forecast adjustments
   - Consensus forecast sign-off procedure
   - KPIs to review: forecast accuracy, bias, volume vs prior month

3. Supply Review Meeting:
   - Capacity constraint identification and escalation
   - Inventory coverage analysis
   - Make-or-buy and outsourcing decision framework
   - Lead time change management

4. Executive S&OP:
   - One-page scorecard format
   - Three scenario plans: base, upside, downside
   - Decision log and accountability tracking

5. Technology and Tools:
   - Minimum viable S&OP toolset for a midsize company
   - How to run S&OP effectively in Excel before investing in a planning system

Provide meeting agenda templates for each of the five steps.`,
      },
      {
        tag: 'New Product Forecasting',
        title: 'Forecast Demand for New Product Launches',
        prompt: `Help me build a demand forecasting approach specifically for new product launches where historical data is unavailable.

New product context:
- Product type: [describe the product and market]
- Launch market: [geography and customer segment]
- Comparable products: [any analogous products in portfolio or market]
- Launch timeline: [planned launch date and ramp-up period]

Please provide:

1. Analogy-Based Forecasting:
   - How to identify and select analogue products
   - Adjustment factors for price, market size, distribution, and product features
   - How to weight multiple analogues into a consensus forecast
   - Uncertainty range estimation

2. Market Sizing Approach:
   - Total addressable market calculation methodology
   - Serviceable addressable market scoping
   - Target market share assumptions and how to validate them
   - Sensitivity analysis on key assumptions

3. Pre-Launch Intelligence:
   - Using pre-orders, intent surveys, and distributor input
   - Adjusting statistical models with qualitative signals
   - Sales team input process and bias correction

4. Launch Ramp Model:
   - Week-by-week expected sales ramp curve
   - Distribution build-out timeline impact on demand
   - Initial inventory stocking strategy (safety stock for launch)

5. Post-Launch Adjustment Process:
   - First 4-week actual vs forecast review
   - How quickly to update the model based on early data
   - Escalation triggers if demand deviates significantly from plan

Provide an Excel model structure and a Python quick-start script.`,
      },
      {
        tag: 'Scenario Planning',
        title: 'Build a Demand Scenario Planning Framework',
        prompt: `Create a comprehensive demand scenario planning framework to help our supply chain prepare for uncertainty.

Our planning challenge:
- We face significant demand uncertainty due to: [describe key uncertainty drivers]
- Planning horizon: [12 months / 18 months / 3 years]
- Current scenario planning maturity: [none / basic / structured]

Please build:

1. Scenario Development Framework:
   - How to identify the 3-5 most critical uncertainty drivers
   - Building a 2x2 scenario matrix from top drivers
   - Developing narrative descriptions for each scenario
   - Translating narratives into quantified demand ranges

2. Three Core Scenarios:
   - Base case: most likely outcome with probability weighting
   - Upside case: bull scenario assumptions and demand uplift
   - Downside case: bear scenario assumptions and demand reduction
   - Extreme scenario: low-probability, high-impact event planning

3. Supply Chain Implications by Scenario:
   - Inventory positioning recommendations per scenario
   - Capacity commitment decisions (firm vs flexible)
   - Supplier contract strategy per scenario
   - Capital investment go/no-go decision thresholds

4. Monitoring and Trigger Framework:
   - Leading indicators to track for each scenario
   - Decision trigger points: when to switch between scenarios
   - Pre-agreed response playbooks for each trigger
   - Review cadence for updating scenarios

5. Executive Communication:
   - One-page scenario summary for leadership
   - How to present scenario ranges without causing alarm
   - Connecting scenarios to financial planning (P&L impact per scenario)`,
      },
    ],
  },
  {
    title: 'Inventory Optimization',
    icon: Package,
    description: 'Eliminate excess stock and stockouts with data-driven inventory policies, segmentation strategies, and safety stock calculations.',
    prompts: [
      {
        tag: 'Inventory Policy',
        title: 'Design an Optimal Inventory Policy by SKU Segment',
        prompt: `You are an inventory optimization expert. Help me design SKU-level inventory policies for a distribution business.

Our inventory profile:
- Total SKU count: [number]
- Warehouse locations: [number and type]
- Lead times: [range of supplier lead times]
- Service level target: [e.g., 98% OTIF to customers]
- Current average inventory turnover: [turns per year]

Please design:

1. ABC-XYZ Segmentation:
   - ABC by revenue contribution (A: top 70%, B: next 20%, C: bottom 10%)
   - XYZ by demand variability (X: stable, Y: variable, Z: lumpy/sporadic)
   - Combined 9-cell matrix with recommended policies per segment
   - How to handle seasonal items that change segment across the year

2. Safety Stock Calculation by Segment:
   - Formula for each segment type with worked examples
   - How to determine the right service level per segment
   - Incorporating lead time variability (not just demand variability)
   - Review frequency recommendations by segment

3. Reorder Point and Order Quantity:
   - Economic order quantity calculation and when to use it
   - Periodic vs continuous review system trade-offs
   - Min/max policy setup for low-complexity SKUs
   - Batch size constraints from supplier minimums

4. Slow-Moving and Obsolete Inventory:
   - Definition thresholds for slow-moving (SLOB) inventory
   - Remediation strategies: markdowns, liquidation, donation, disposal
   - Governance process for SLOB write-offs
   - How to prevent future SLOB accumulation at the buying stage

Provide Python code to run the ABC-XYZ segmentation on a CSV of SKU data.`,
      },
      {
        tag: 'Multi-Echelon',
        title: 'Optimise a Multi-Echelon Inventory Network',
        prompt: `Help me optimise inventory across a multi-echelon supply chain network with central warehouse, regional DCs, and retail/customer locations.

Network structure:
- Echelon 1: [central warehouse / factory]
- Echelon 2: [regional distribution centres — number and location]
- Echelon 3: [retail stores / customer delivery points]

Please cover:

1. Multi-Echelon Inventory Theory:
   - How to allocate total system inventory across echelons
   - Centralisation vs decentralisation trade-offs
   - Pooling effect and its quantification (how centralisation reduces safety stock)
   - Risk pooling formula and worked example

2. Inventory Positioning Decision Framework:
   - Which products to stock at which echelon
   - Criteria: lead time, demand variability, SKU velocity, product value
   - Decision matrix for push vs pull at each echelon boundary
   - Postponement strategies: where to hold inventory in generic form

3. Replenishment Policy Design:
   - Replenishment triggers from DC to central warehouse
   - Replenishment from DC to stores (automated vs manual)
   - Emergency lateral transfer rules between DCs
   - How to handle stockout events at lower echelons

4. Performance Metrics by Echelon:
   - Inventory days of supply target per echelon
   - Fill rate measurement at each tier
   - On-hand accuracy requirements per echelon
   - Cost-to-serve by echelon

Provide a framework for calculating optimal stock at each echelon using Python.`,
      },
      {
        tag: 'Inventory Reduction',
        title: 'Build an Inventory Reduction Programme',
        prompt: `Design a structured inventory reduction programme to reduce working capital by 20-30% without compromising service levels.

Current state:
- Total inventory value: [amount]
- Inventory as % of annual revenue: [%]
- Turns per year: [number]
- Service level performance: [OTIF %]
- Main inventory categories: [raw material / WIP / finished goods / spares]

Please provide:

1. Inventory Diagnostic:
   - How to categorise current excess: safety stock excess, cycle stock excess, SLOB, in-transit excess
   - Root cause analysis framework for excess inventory
   - Benchmarking current turns against industry comparables
   - Quick assessment tool to estimate the reduction opportunity

2. Reduction Levers by Category:
   - Finished goods: tighten safety stock policy, reduce lot sizes, improve forecast accuracy
   - Raw materials: vendor-managed inventory, consignment, reduced MOQ negotiation
   - WIP: reduce batch sizes, improve flow, reduce lead times
   - Spare parts: apply service level differentiation, partner with suppliers on VMI

3. Implementation Roadmap:
   - Phase 1 (months 1-3): quick wins, SLOB clearance, policy tightening
   - Phase 2 (months 4-9): process changes, supplier negotiations, system improvements
   - Phase 3 (months 10-18): structural changes, network optimisation
   - Projected cash release by phase

4. Governance and Tracking:
   - Weekly inventory health dashboard KPIs
   - Accountability structure: who owns inventory reduction by category
   - Escalation process when targets are missed
   - How to prevent inventory creep after reduction is achieved`,
      },
      {
        tag: 'Demand Sensing',
        title: 'Implement a Demand Sensing System',
        prompt: `Help me build a demand sensing capability to improve short-term inventory decisions using real-time signals.

Business context:
- Replenishment frequency: [daily / weekly / bi-weekly]
- Data sources available: [POS data, customer orders, web traffic, IoT sensors, social data]
- Current forecast horizon used for replenishment decisions: [weeks]
- Key problem: [excess stock / stockouts / both]

Please design:

1. What Demand Sensing Is and When It Helps:
   - Difference between demand forecasting (medium-term) and demand sensing (0-10 days)
   - Best use cases: FMCG, e-commerce, seasonal spikes, promotional lift detection
   - Quantified benefit: how much inventory reduction is typically achievable
   - Prerequisite data infrastructure requirements

2. Data Inputs for Demand Sensing:
   - Point-of-sale data: collection frequency and aggregation rules
   - Web and search data signals for forward demand indicators
   - Social and sentiment signals for trend detection
   - Historical promotional uplift patterns

3. Sensing Model Architecture:
   - Short-cycle forecasting algorithm options (gradient boosting, LSTM, simple rules)
   - How to combine sensing signals with statistical baseline forecast
   - Model update frequency and re-training cadence
   - Confidence interval calculation for sensing output

4. Replenishment Integration:
   - How to feed sensing output into daily replenishment decisions
   - Rules for overriding base forecast with sensing signal
   - Alert system for significant demand signal changes
   - Inventory buffer adjustment triggers based on sensing confidence

Provide Python starter code for a simple demand sensing pipeline using daily POS data.`,
      },
    ],
  },
  {
    title: 'Logistics & Route Planning',
    icon: Truck,
    description: 'Optimize transportation networks, reduce freight costs, and build efficient last-mile delivery operations that delight customers.',
    prompts: [
      {
        tag: 'Network Design',
        title: 'Optimise a Distribution Network Design',
        prompt: `You are a logistics network design expert. Help me optimise the physical distribution network for a manufacturer serving customers across [region].

Current network:
- Manufacturing locations: [describe]
- Current warehouses and DCs: [number, locations, sizes]
- Customer locations: [describe density and geography]
- Annual freight spend: [amount]
- Current service level: [avg. delivery lead time to customers]

Please help me:

1. Network Design Methodology:
   - Centre-of-gravity analysis for optimal DC placement
   - Service level vs cost trade-off modelling
   - Make vs buy decisions for warehousing (own vs 3PL)
   - How to model network alternatives in Excel or Python

2. Warehouse Location Optimisation:
   - How to evaluate adding, closing, or relocating DCs
   - Land and labour cost considerations by region
   - Transport cost savings from each configuration
   - Customer service impact of each option

3. Transport Mode Optimisation:
   - Road vs rail vs air vs sea decision framework
   - Intermodal opportunities and cost comparisons
   - Carrier selection criteria and contract structures
   - How to build a carrier scorecard

4. Network Footprint Scenarios:
   - Current state cost and service level baseline
   - Option 1: consolidate to fewer, larger DCs (centralisation)
   - Option 2: expand to more, smaller DCs (localisation)
   - Option 3: hybrid with one central DC and regional spoke DCs

5. Implementation Considerations:
   - Transition risk during network changes
   - Inventory implications of network reconfiguration
   - Customer communication plan during transition
   - Timeline and change sequencing

Provide a Python framework for centre-of-gravity analysis with sample data.`,
      },
      {
        tag: 'Route Optimisation',
        title: 'Build a Last-Mile Route Optimisation System',
        prompt: `Help me build a last-mile delivery route optimisation system for a fleet of delivery vehicles.

Operations context:
- Fleet size: [number of vehicles]
- Daily deliveries: [number of stops per day]
- Delivery area: [urban / suburban / rural / mixed]
- Time window constraints: [do customers have specific delivery windows?]
- Current routing method: [manual / basic system / none]

Please provide:

1. Route Optimisation Fundamentals:
   - Vehicle routing problem (VRP) overview and variants (CVRP, VRPTW, VRPPD)
   - How to choose the right VRP variant for your operation
   - Key constraints to model: capacity, time windows, driver hours, vehicle types
   - Realistic cost reduction potential from route optimisation (industry benchmarks)

2. Algorithm Selection:
   - When to use exact solvers vs heuristics vs metaheuristics
   - Practical options: Google OR-Tools, OSRM, commercial tools (Route4Me, OptimoRoute)
   - Build vs buy decision framework
   - How to benchmark algorithm quality

3. Data Requirements:
   - Stop-level data needed: address, delivery window, weight/volume, special requirements
   - Vehicle data: capacity, speed profile, operating hours, cost per km
   - Geocoding and mapping data requirements
   - Historical performance data for model calibration

4. Implementation Roadmap:
   - Phase 1: data clean-up and geocoding
   - Phase 2: baseline route optimisation with Google OR-Tools
   - Phase 3: integrate with dispatch and driver app
   - Phase 4: real-time re-routing for exceptions

Provide working Python code using Google OR-Tools for a basic CVRPTW solver.`,
      },
      {
        tag: 'Freight Procurement',
        title: 'Run a Strategic Freight Procurement Process',
        prompt: `Help me design and execute a strategic freight procurement process to reduce transportation costs and improve carrier performance.

Current state:
- Annual freight spend: [amount]
- Current carrier base: [number of carriers across modes]
- Current contract structure: [spot / contracted / mix]
- Primary modes: [road / rail / air / ocean / parcel]
- Main pain points: [cost, reliability, visibility, carrier capacity]

Please provide:

1. Freight Spend Analysis:
   - How to build a lane-level spend cube (origin/destination/mode/carrier)
   - Identifying consolidation opportunities across lanes
   - Benchmarking your rates against market (sources and method)
   - Calculating the potential savings opportunity before going to market

2. RFQ Design and Process:
   - How to structure a freight RFQ that attracts competitive bids
   - Lane definition and volume commitment strategy
   - Carrier pre-qualification criteria and questionnaire
   - Evaluation scorecard: price, service, financial stability, sustainability

3. Negotiation Strategy:
   - How to use competitive tension effectively
   - Fuel surcharge and accessorial charge negotiation
   - Multi-year vs annual contract trade-offs
   - Volume commitment vs spot rate balance

4. Carrier Performance Management:
   - KPI dashboard: on-time delivery, damage rate, tender acceptance, cost per unit
   - Quarterly business review structure with top carriers
   - Performance incentive and penalty mechanisms
   - How to manage carrier base size (concentration vs competition)

5. Technology and Visibility:
   - Transport management system (TMS) selection criteria
   - Shipment tracking and ETD accuracy requirements
   - Carrier EDI and API connectivity requirements`,
      },
      {
        tag: 'Reverse Logistics',
        title: 'Design an Efficient Returns and Reverse Logistics Process',
        prompt: `Design a comprehensive reverse logistics and returns management system for an e-commerce or retail business.

Business context:
- Annual return volume: [number of units or % of forward volume]
- Product types: [describe — electronics, apparel, FMCG, etc.]
- Current return process: [describe how returns are handled today]
- Main pain points: [cost, speed, recovery rate, customer experience]

Please cover:

1. Returns Policy and Customer Experience:
   - Return policy design: window, conditions, payment method
   - Self-service returns portal requirements
   - Pre-paid returns label strategy and cost implications
   - How to reduce preventable returns (size guides, product descriptions, fit tools)

2. Physical Returns Flow:
   - Returns routing: direct to DC vs regional sort centre vs 3PL
   - Receiving and inspection process design
   - Grading system: A-stock (resell), B-stock (refurbish), C-stock (liquidate), dispose
   - Processing time targets by grade and product type

3. Recovery Value Optimisation:
   - Disposition channel strategy: restock, refurbish, outlet, liquidate, donate, destroy
   - Recovery rate benchmarks by product category
   - Refurbishment process and economics
   - Liquidation partner selection and pricing strategy

4. Financial Tracking:
   - Cost per return calculation (processing, freight, write-down)
   - Recovery value by disposition channel
   - Net return cost as % of product value
   - Budget and forecast for returns costs

5. Technology Requirements:
   - Returns management system (RMS) features needed
   - Integration with OMS, WMS, and finance systems
   - Data analytics for returns root cause analysis
   - Automation opportunities in inspection and grading`,
      },
    ],
  },
  {
    title: 'Supplier Management & Procurement',
    icon: Building2,
    description: 'Build strategic supplier relationships, improve procurement processes, and create a resilient, performance-driven supply base.',
    prompts: [
      {
        tag: 'Supplier Segmentation',
        title: 'Segment and Manage Your Supplier Base Strategically',
        prompt: `Help me build a strategic supplier segmentation and management framework for our procurement function.

Supplier base profile:
- Total number of active suppliers: [number]
- Annual spend managed: [amount]
- Number of critical/sole-source suppliers: [estimate]
- Current supplier management approach: [transactional / emerging strategic]

Please design:

1. Supplier Segmentation Model:
   - Spend-impact matrix (Kraljic matrix): Strategic, Bottleneck, Leverage, Non-critical
   - How to classify each supplier: spend data, criticality, substitutability, risk
   - Updated classification for suppliers with supply risk vs strategic importance
   - How often to re-segment and who approves changes

2. Management Approach by Segment:
   - Strategic suppliers: joint business plans, executive sponsorship, innovation programmes
   - Bottleneck suppliers: dual-source strategy, safety stock, relationship investment
   - Leverage suppliers: competitive bidding, consolidation, category management
   - Non-critical suppliers: catalogue buying, P-card, low-touch procurement

3. Supplier Performance Management System:
   - KPI scorecard per segment (quality, delivery, cost, service, sustainability)
   - Monthly vs quarterly vs annual review cadence by segment
   - Performance improvement plan (PIP) process for underperformers
   - Recognition programme for top-performing suppliers

4. Strategic Supplier Relationship Programme:
   - Joint business plan template and annual review process
   - Innovation and cost reduction idea pipeline
   - Supplier development investment criteria
   - How to measure and capture collaborative value

5. Supplier Rationalisation:
   - Criteria for removing suppliers from the active base
   - Process for safely exiting a supplier relationship
   - Preferred supplier list management and governance`,
      },
      {
        tag: 'Category Strategy',
        title: 'Develop a Category Procurement Strategy',
        prompt: `Act as a strategic procurement consultant. Help me develop a comprehensive category strategy for a major spend category.

Category overview:
- Category name: [e.g., packaging, raw materials, logistics services, IT hardware]
- Annual spend: [amount]
- Number of suppliers: [current supplier count in category]
- Current contract status: [in contract / spot / mix]
- Main challenges: [cost, quality, supply security, sustainability]

Please build a full category strategy:

1. Category Spend Analysis:
   - Spend by supplier, sub-category, and business unit
   - Spend trend over 3 years
   - Price benchmarking vs market indices
   - Demand analysis: volume trend, specification consolidation opportunities

2. Supply Market Analysis:
   - Supplier landscape: number of credible suppliers globally and locally
   - Supply market structure: competitive / oligopoly / monopoly
   - Cost driver analysis: raw material, labour, energy, logistics components
   - Market outlook: capacity, pricing trend, innovation pipeline

3. Internal Stakeholder Analysis:
   - Key internal users and their requirements
   - Specification standardisation opportunities
   - Make vs buy opportunities
   - Demand reduction levers

4. Strategy Options and Recommendation:
   - Option 1: consolidate to fewer suppliers and leverage volume
   - Option 2: dual-source to balance risk and competition
   - Option 3: develop alternative suppliers in new geographies
   - Recommended strategy with rationale and risk assessment

5. Implementation Plan:
   - 12-month action plan with owners, milestones, and savings targets
   - RFQ timeline and supplier engagement plan
   - Contract strategy and key terms to prioritise
   - Savings and value realisation tracking`,
      },
      {
        tag: 'Supplier Onboarding',
        title: 'Build a Supplier Onboarding and Qualification Process',
        prompt: `Design a comprehensive supplier onboarding and qualification process for a manufacturing company.

Context:
- Industry: [describe]
- Regulatory requirements: [food safety, ISO, CE marking, etc.]
- Annual number of new supplier onboardings: [estimate]
- Current process maturity: [ad hoc / documented / robust]

Please design:

1. Supplier Pre-Qualification:
   - Initial screening criteria (financial stability, certifications, capacity, ethical standards)
   - Supplier questionnaire: legal, financial, operational, quality, ESG sections
   - Reference check process and red flag identification
   - Rejection criteria and communication approach

2. Quality Qualification:
   - Supplier audit types: desktop, self-assessment, on-site
   - Audit checklist by supplier category (manufacturing, service, logistics)
   - Quality approval levels: approved, conditional, probationary
   - Audit frequency post-approval by risk category

3. Commercial and Legal Setup:
   - Master supply agreement key clauses to negotiate
   - Payment terms and early payment discount programme
   - Liability, IP, and data protection requirements
   - Sustainability and code of conduct requirements

4. ERP and Systems Integration:
   - Supplier master data setup checklist
   - EDI and electronic invoicing onboarding
   - Procurement system access and training for supplier
   - Bank details verification and fraud prevention process

5. Ongoing Supplier Management:
   - Probationary period KPIs and review process
   - Escalation process for early performance issues
   - Graduation from probationary to fully approved status
   - Annual re-qualification requirements

Provide a supplier onboarding checklist template in table format.`,
      },
      {
        tag: 'ESG in Procurement',
        title: 'Integrate ESG and Sustainability into Procurement',
        prompt: `Help me build a sustainable procurement programme that integrates environmental, social, and governance (ESG) considerations into our buying decisions.

Our ESG context:
- Sustainability commitments: [describe company targets — net zero, scope 3, etc.]
- Current procurement ESG maturity: [none / emerging / structured]
- Key spend categories with highest ESG risk: [describe]
- Regulatory context: [CSRD, UK Modern Slavery Act, CSDDD, etc.]

Please design:

1. Sustainable Procurement Policy:
   - Policy scope: which suppliers and categories are in scope
   - Minimum ESG requirements for new suppliers
   - ESG scoring as % of supplier evaluation criteria
   - Exceptions process and escalation

2. Supplier ESG Assessment:
   - ESG questionnaire covering: environment, labour, human rights, governance, ethics
   - How to score and tier supplier ESG performance
   - Third-party verification requirements (EcoVadis, CDP, audits)
   - High-risk supplier identification by geography and category

3. Scope 3 Emissions Management:
   - How to collect supplier emissions data (spend-based vs activity-based)
   - Setting supplier emission reduction targets
   - Supplier engagement programme for decarbonisation
   - How to report Scope 3 in line with GHG Protocol

4. Responsible Sourcing:
   - Modern slavery and forced labour due diligence process
   - Conflict minerals (3TG) tracking requirements
   - Traceability requirements for high-risk agricultural commodities
   - Living wage and fair working conditions requirements

5. Supplier Development for Sustainability:
   - How to support suppliers in improving their ESG performance
   - Co-investment in supplier sustainability improvements
   - Recognition and preferred status for top ESG performers
   - How to handle suppliers who fail to meet ESG requirements`,
      },
    ],
  },
  {
    title: 'Supply Chain Resilience',
    icon: Shield,
    description: 'Identify vulnerabilities, stress-test your supply chain, and build the redundancy and agility needed to withstand disruptions.',
    prompts: [
      {
        tag: 'Risk Assessment',
        title: 'Build a Supply Chain Risk Assessment Framework',
        prompt: `You are a supply chain risk expert. Help me build a comprehensive supply chain risk assessment and management framework.

Our supply chain context:
- Industry: [describe]
- Geographic footprint: [where you source, manufacture, and sell]
- Number of tier-1 suppliers: [number]
- Visibility into tier-2 and beyond: [none / limited / moderate / good]
- Recent disruptions experienced: [describe any recent supply issues]

Please design:

1. Risk Taxonomy and Classification:
   - Demand risks: forecast error, demand volatility, customer concentration
   - Supply risks: supplier failure, quality failure, capacity shortage, geopolitical disruption
   - Logistics risks: freight capacity, port congestion, fuel cost spikes
   - Macro risks: currency, commodity prices, regulation, natural disasters, cyber

2. Risk Assessment Methodology:
   - Probability and impact scoring matrix (5x5)
   - How to assess and score each risk category
   - Inherent risk vs residual risk after controls
   - Single point of failure identification process

3. Supplier Risk Profiling:
   - Data inputs for supplier risk score: financial health, geography, sole-source status, spend concentration
   - How to monitor supplier risk signals in real time
   - Risk tiering: critical, high, medium, low
   - Escalation protocol for critical supplier risk events

4. Risk Register Development:
   - Risk register template with all required fields
   - Risk ownership assignment by function
   - Mitigation plan documentation requirements
   - Review and update cadence (monthly / quarterly / event-triggered)

5. Business Continuity Planning:
   - How to develop supply continuity plans for top 10 risks
   - Playbook structure: trigger, escalation, response actions, recovery timeline
   - Testing and simulation exercises
   - Post-disruption after-action review process

Provide a risk register template in table format.`,
      },
      {
        tag: 'Dual Sourcing',
        title: 'Design a Dual-Sourcing and Supply Diversification Strategy',
        prompt: `Help me design a strategic dual-sourcing and supply diversification programme to reduce dependency on single suppliers and geographies.

Current exposure:
- Number of sole-source suppliers: [number]
- Spend concentration in single geography: [% in one region]
- Categories with highest single-source risk: [list top 3-5]
- Available budget for dual-source development: [range]

Please provide:

1. Prioritisation Framework:
   - How to score and rank suppliers for dual-sourcing priority
   - Criteria: business criticality, substitutability, lead time risk, financial risk, geopolitical risk
   - Decision matrix: when to dual-source vs accept single-source risk vs develop alternatives
   - Cost-benefit analysis template for dual-sourcing investment

2. Alternative Supplier Identification:
   - How to find credible alternative suppliers by category
   - Geographic diversification: nearshoring, friendshoring, and reshoring considerations
   - Qualification timeline and resource requirements per supplier type
   - Minimum viable qualification criteria for a backup supplier

3. Volume Allocation Strategy:
   - How to split volumes between primary and secondary suppliers
   - Keeping the secondary supplier active and capable
   - Contract structure for dual-source arrangements
   - How to avoid gaming and collusion between dual-source partners

4. China-Plus-One Strategy:
   - Framework for identifying and developing suppliers in alternative countries
   - Country risk and capability assessment methodology
   - Total cost of ownership comparison including tariff risk
   - Transition timeline and phased approach

5. Ongoing Programme Management:
   - How to track dual-source readiness across the supplier base
   - Annual review and update of dual-source programme
   - Scenarios where secondary supplier becomes primary`,
      },
      {
        tag: 'Crisis Response',
        title: 'Build a Supply Chain Crisis Response Playbook',
        prompt: `Help me build a supply chain crisis response playbook for rapid, coordinated action during major supply disruptions.

Disruption scenarios to plan for:
1. Major supplier failure (bankruptcy, fire, or quality crisis)
2. Logistics disruption (port closure, freight capacity crisis)
3. Geopolitical event affecting key sourcing region
4. Cyber attack on supply chain systems
5. Pandemic or extreme weather event

For each scenario, please provide:

1. Early Warning Indicators:
   - Signals to monitor that a crisis may be developing
   - Threshold triggers for activating the playbook
   - Data sources and monitoring cadence

2. Crisis Escalation Protocol:
   - Who activates the response and at what trigger
   - Crisis team structure: roles and decision authority
   - Communication tree: internal and external
   - War room setup and communication cadence

3. Immediate Response Actions (0-72 hours):
   - Supply assessment: what is affected, what is available
   - Inventory audit: how much buffer exists and at which locations
   - Customer communication: who to call first and what to say
   - Alternative supply identification and emergency sourcing

4. Short-Term Mitigation (1-4 weeks):
   - Alternative supplier activation and fast-track qualification
   - Customer allocation process if supply is constrained
   - Logistics workarounds and premium freight decisions
   - Financial impact assessment and board communication

5. Recovery and Learning:
   - Criteria for standing down the crisis response
   - After-action review process and documentation
   - How to update the risk register and playbook
   - Investment decisions to prevent recurrence`,
      },
      {
        tag: 'Visibility',
        title: 'Build End-to-End Supply Chain Visibility',
        prompt: `Help me design and implement an end-to-end supply chain visibility programme that provides real-time insight across suppliers, logistics, and inventory.

Current visibility gaps:
- Supplier production status: [no visibility / limited / moderate]
- In-transit shipment tracking: [no visibility / manual / real-time]
- Inventory visibility across locations: [siloed / partial / unified]
- Customer order status: [manual / automated]

Please design:

1. Visibility Architecture:
   - Four layers of visibility: supplier, in-transit, DC/warehouse, customer
   - Data required at each layer and how to collect it
   - Integration approach: EDI, API, IoT, manual reporting
   - Unified visibility platform vs best-of-breed point solutions

2. Supplier Visibility Programme:
   - Production order status sharing requirements
   - Supplier portal setup and data submission standards
   - How to get suppliers to participate (incentives and requirements)
   - Tier-2 and tier-3 visibility approaches

3. In-Transit Tracking:
   - Ocean freight: AIS vessel tracking, booking confirmation, bill of lading data
   - Road freight: GPS tracking requirements for carriers
   - Air freight: airway bill tracking and ETD management
   - Parcel: last-mile carrier tracking integration

4. Inventory Visibility:
   - WMS integration for real-time inventory by location
   - Cycle count programme to maintain inventory accuracy
   - Inventory data governance: who owns the golden record
   - How to build a single inventory view across ERP, WMS, and 3PLs

5. Control Tower Design:
   - What a supply chain control tower is and what it does
   - Data inputs and alert logic for the control tower
   - Exception management process and escalation rules
   - How to staff and operate a control tower function`,
      },
    ],
  },
  {
    title: 'Technology & Digital Transformation',
    icon: Cpu,
    description: 'Harness AI, automation, and digital tools to transform supply chain performance — from predictive analytics to autonomous replenishment.',
    prompts: [
      {
        tag: 'AI in Supply Chain',
        title: 'Apply AI to Supply Chain Optimization',
        prompt: `You are an AI and supply chain expert. Help me identify and prioritise AI use cases for our supply chain operations.

Our business context:
- Company type: [manufacturer / distributor / retailer / 3PL]
- Annual supply chain cost: [% of revenue]
- Digital maturity: [spreadsheets / ERP / advanced analytics / AI-enabled]
- Key pain points: [describe top 3-5 supply chain challenges]

Please provide:

1. AI Use Case Inventory for Supply Chain:
   - Demand forecasting: ML models, external signal integration, new product forecasting
   - Inventory optimisation: dynamic safety stock, automated replenishment, multi-echelon AI
   - Logistics: route optimisation, carrier selection, freight cost prediction
   - Procurement: spend analytics, price prediction, supplier risk monitoring
   - Quality: defect detection, predictive maintenance, yield optimisation

2. Use Case Prioritisation Framework:
   - Value potential (cost saving, service improvement, working capital reduction)
   - Implementation complexity (data readiness, change management, integration effort)
   - Time to value (months to first production benefit)
   - 2x2 matrix: quick wins, strategic bets, fill-ins, avoid

3. Top 3 Priority Use Cases for Your Context:
   - Use case description and business case
   - Data requirements and current data readiness gap
   - Build vs buy vs partner decision for each
   - 6-month implementation roadmap

4. Data Foundation Requirements:
   - Minimum data quality and governance standards for AI
   - Master data management for supply chain AI
   - Data lake vs data warehouse architecture choice
   - AI governance and responsible AI principles for supply chain

5. Change Management for AI Adoption:
   - How to bring planners along on the AI journey
   - Human-in-the-loop vs fully automated decision recommendations
   - Metrics to prove AI value and build trust
   - Capability building plan for the supply chain team`,
      },
      {
        tag: 'Digital Twin',
        title: 'Build a Supply Chain Digital Twin',
        prompt: `Help me understand and build a supply chain digital twin to simulate, optimise, and predict supply chain performance.

Our supply chain overview:
- Network: [number of plants, DCs, suppliers, customers]
- Annual throughput: [volume or revenue]
- Key decisions to optimise: [inventory, capacity, routing, sourcing]
- Current modelling tools: [spreadsheets / Excel / Python / none]

Please cover:

1. What a Supply Chain Digital Twin Is:
   - Definition and components: physical model, data layer, simulation engine, optimisation
   - Difference between a digital twin and a spreadsheet model
   - Types of decisions a digital twin supports
   - Industry examples and quantified benefits

2. Digital Twin Architecture:
   - Data inputs: demand, inventory, capacity, lead times, costs, network constraints
   - Model layer: mathematical representation of the supply chain
   - Simulation engine: discrete event vs system dynamics vs agent-based
   - Optimisation layer: scenario comparison and what-if analysis

3. Build Roadmap:
   - Phase 1: baseline model of current network with historical data
   - Phase 2: scenario planning (add/remove DC, change supplier)
   - Phase 3: real-time data integration for live decision support
   - Phase 4: ML-enhanced prediction and autonomous recommendations

4. Technology Options:
   - Open-source: Python (SimPy, Pyomo), OR-Tools, NetworkX
   - Commercial: Llamasoft (Coupa), AIMMS, o9, Kinaxis
   - Build vs buy decision framework
   - Integration requirements with ERP and TMS

5. Governance and Usage:
   - How supply planners use the digital twin in day-to-day decisions
   - Model maintenance and calibration cadence
   - When to trust the model vs override with human judgement

Provide a Python starter framework for a simple supply chain network simulation.`,
      },
      {
        tag: 'ERP Selection',
        title: 'Select and Implement a Supply Chain ERP',
        prompt: `Guide me through selecting and implementing a supply chain ERP or planning system to replace spreadsheet-based operations.

Current state:
- Company size: [revenue and employees]
- Current systems: [ERP, planning tools, WMS, TMS in use]
- Key gaps in current technology: [describe main problems]
- Budget range: [annual SaaS spend or implementation budget]
- Timeline expectation: [when you want to go live]

Please provide:

1. Requirements Definition:
   - How to build a business requirements document (BRD) for a supply chain system
   - Must-have vs nice-to-have vs out-of-scope features
   - Integration requirements with existing systems
   - User and data volume sizing

2. Vendor Landscape:
   - Tier 1 ERP with strong SCM: SAP, Oracle
   - Best-of-breed planning: o9, Kinaxis, Blue Yonder, Anaplan
   - Mid-market ERP with supply chain: NetSuite, Microsoft Dynamics, Infor
   - Niche tools: inventory planning (Slim4, Inventory Planner), TMS, WMS

3. RFP and Vendor Evaluation:
   - How to structure a supply chain technology RFP
   - Evaluation scorecard: functionality, integration, UX, implementation risk, TCO, support
   • How to run scripted demos to compare vendors fairly
   - Reference customer checks: what to ask

4. Implementation Risk Management:
   - Top reasons supply chain ERP implementations fail
   - How to structure the project team (internal and SI partner)
   - Data migration strategy and data quality preparation
   - Change management and user adoption plan

5. Total Cost of Ownership:
   - How to calculate 5-year TCO: licence, implementation, training, internal resource, ongoing maintenance
   - Hidden costs to watch for in contracts
   - Benefit realisation plan and how to track ROI post go-live`,
      },
      {
        tag: 'Automation',
        title: 'Automate Supply Chain Processes with RPA and AI',
        prompt: `Help me identify and implement automation opportunities across supply chain operations using RPA, AI, and low-code tools.

Automation scope:
- Functions in scope: [procurement, logistics, inventory, customer service, finance]
- Current manual process pain points: [describe top 5 time-consuming manual tasks]
- Digital maturity: [spreadsheets / ERP / some automation / advanced]
- Available tools: [RPA licences, Make/Zapier, Python, ERP workflow engine]

Please provide:

1. Supply Chain Automation Opportunity Inventory:
   - Purchase order creation and approval routing
   - Invoice matching and exception handling (3-way match)
   - Shipment booking and tracking update extraction
   - Inventory replenishment order generation
   - Supplier performance report generation and distribution
   - Customs documentation preparation and filing
   - Demand forecast exception alerting and escalation
   - Customer order status update and exception communication

2. Prioritisation Framework:
   - Volume of transactions (high volume = high automation ROI)
   - Rule-based vs judgement-dependent (rule-based = easier to automate)
   - Current error rate and rework cost
   - Quick-win vs strategic automation classification

3. Technology Selection by Use Case:
   - RPA (UiPath, Automation Anywhere): for legacy system screen scraping
   - Make / n8n / Zapier: for cloud app-to-app workflows
   - ERP workflow engine: for process orchestration within ERP
   - Python: for data transformation and analytical automation
   - AI (LLM): for document processing, classification, anomaly detection

4. Implementation Approach:
   - How to document and standardise a process before automating it
   - Bot development, testing, and go-live methodology
   - Exception handling design: what the bot cannot handle
   - Monitoring and maintenance post-deployment

Provide a prioritised automation roadmap with effort and ROI estimates.`,
      },
    ],
  },
];

const faqs = [
  {
    question: 'What is supply chain management and why does it matter to business performance?',
    answer: 'Supply chain management (SCM) is the coordination of all activities involved in sourcing raw materials, transforming them into products, and delivering them to end customers. It spans procurement, manufacturing, logistics, inventory management, and demand planning. SCM matters enormously to business performance because supply chain costs typically represent 50-80% of revenue for manufacturing and retail businesses. Getting supply chain right directly impacts gross margin, working capital, and customer satisfaction. Companies with superior supply chains consistently outperform peers on both profitability and growth, as lower costs free up investment capacity and better service levels drive customer loyalty.',
  },
  {
    question: 'What is the difference between supply chain and logistics?',
    answer: 'Logistics is a subset of supply chain management. Logistics refers specifically to the physical movement and storage of goods: warehousing, transportation, distribution, and delivery. Supply chain management is the broader discipline that includes logistics but also encompasses demand planning, procurement, supplier management, inventory strategy, production planning, and supply-demand balancing. You can think of it this way: logistics answers "how do we move goods from A to B efficiently?" while supply chain management answers "how do we ensure we have the right goods, in the right quantity, at the right place, at the right time, at the right cost?" The two are deeply interconnected but are distinct functions in most large organisations.',
  },
  {
    question: 'What is OTIF and why is it the most important supply chain KPI?',
    answer: 'OTIF stands for On Time In Full. It measures the percentage of customer orders delivered both on time (within the agreed delivery window) and in full (the complete quantity ordered). It is the most important supply chain KPI because it directly captures the customer experience — a delivery that is late or partial fails the customer regardless of how efficient the internal operations were. OTIF typically ranges from 85-98% depending on the industry, with grocery and FMCG retailers often demanding 98%+ from suppliers. Poor OTIF results in penalties from retailers, lost sales, and customer attrition, making it the key measure that connects supply chain performance to commercial outcomes.',
  },
  {
    question: 'What is the bullwhip effect and how do you prevent it?',
    answer: 'The bullwhip effect describes the phenomenon where small fluctuations in consumer demand become increasingly amplified as you move upstream through the supply chain — from retailer to distributor to manufacturer to raw material supplier. A 5% demand blip at retail can translate to 50% demand swings at the manufacturer level. It is caused by batch ordering, demand forecast errors, lead time variability, and each tier independently adding safety stock buffers. Prevention strategies include sharing point-of-sale data upstream (demand-driven planning), reducing order batching through more frequent, smaller replenishments, shortening lead times, and implementing collaborative planning with key supply chain partners. Technology like S&OP and control towers significantly reduce bullwhip effect by improving demand signal quality across the chain.',
  },
  {
    question: 'How do you calculate safety stock and what factors affect it?',
    answer: 'The standard safety stock formula is: Safety Stock = Z-score × Standard Deviation of Demand × Square Root of Lead Time, where Z-score corresponds to your target service level (e.g., 1.65 for 95%, 2.05 for 98%). The factors that affect safety stock are: demand variability (more variable demand requires more safety stock), lead time length (longer lead times require more safety stock), lead time variability (variable lead times compound the risk), and target service level (higher service levels require exponentially more safety stock). Many companies also need to account for forecast bias — if you consistently under-forecast, you need additional buffer beyond the statistical calculation. Using coefficient of variation (CV = standard deviation / mean) helps segment SKUs by forecastability and apply appropriate safety stock policies by segment.',
  },
  {
    question: 'What is the Kraljic matrix and how is it used in procurement?',
    answer: 'The Kraljic matrix, developed by Peter Kraljic in 1983, is the foundational tool of strategic procurement. It classifies supply categories into four quadrants based on two dimensions: supply risk (how difficult is it to obtain?) and profit impact (how much does it affect costs or revenue?). The four quadrants are: Strategic (high risk, high impact) — manage with long-term partnerships; Bottleneck (high risk, low impact) — secure supply even at higher cost; Leverage (low risk, high impact) — exploit buying power through competitive bidding; Non-critical (low risk, low impact) — simplify and automate. The matrix helps procurement teams allocate their limited time and resources to where they create the most value, rather than treating all categories and suppliers the same way.',
  },
  {
    question: 'What is supply chain visibility and why is it so difficult to achieve?',
    answer: 'Supply chain visibility means having real-time or near-real-time insight into the status of orders, inventory, and shipments across your end-to-end supply chain — from supplier production through to customer delivery. It is difficult to achieve for several reasons: supply chains involve many independent organisations (suppliers, carriers, 3PLs) who have different systems and varying willingness to share data; legacy ERP systems are not designed for real-time sharing; small suppliers often lack the technology capability for digital integration; and the global nature of supply chains creates data latency across time zones. Despite the challenges, visibility is increasingly seen as a strategic asset — companies with strong supply chain visibility respond faster to disruptions, maintain lower safety stock buffers, and deliver better customer experience.',
  },
  {
    question: 'How can AI improve supply chain forecasting accuracy?',
    answer: 'AI can improve demand forecasting accuracy by ingesting a much wider range of input signals than traditional statistical methods and automatically learning complex patterns in historical data. Specifically, machine learning models can incorporate: point-of-sale data, web search trends, weather data, social media sentiment, economic indicators, promotional calendars, and competitive pricing data simultaneously — something impossible with manual or rule-based forecasting. AI is particularly valuable for new product forecasting (using analogue matching), detecting demand anomalies early, and dynamically adjusting forecasts during fast-moving events like promotions or market shocks. Industry benchmarks suggest AI forecasting can reduce forecast error (MAPE) by 20-50% compared to traditional methods, with the greatest gains for products with complex, multi-driver demand patterns.',
  },
  {
    question: 'What is the difference between a 3PL and a 4PL?',
    answer: 'A 3PL (third-party logistics provider) physically handles logistics operations on your behalf — warehousing, picking and packing, freight forwarding, customs clearance, and last-mile delivery. Examples include DHL, XPO, DB Schenker, and Ceva. A 4PL (fourth-party logistics provider) is a step above — it acts as a strategic supply chain integrator and orchestrator, managing multiple 3PLs and other service providers on your behalf. A 4PL does not necessarily own physical assets but provides the technology, data, and management capability to coordinate your entire logistics ecosystem. 4PLs are used by large multinationals who want to outsource supply chain complexity entirely, while 3PLs are the tactical execution partners. The line between 3PL and 4PL is blurring as logistics providers add technology and control tower capabilities.',
  },
  {
    question: 'How do you build supply chain resilience without excessive cost?',
    answer: 'Building supply chain resilience does not have to mean holding vast buffer inventories or paying a large premium for redundancy. The most cost-effective resilience comes from a combination of: visibility (knowing about disruptions early enough to respond), flexibility (having pre-negotiated relationships with backup suppliers who can be activated quickly), agility (operational processes that can change course fast), and risk-based investment (concentrating resilience investment on truly critical, hard-to-replace supply categories rather than across the board). Dual sourcing the top 20 critical sole-source items, holding strategic safety stock only for the highest-impact SKUs, building collaborative relationships with key logistics partners, and running regular disruption simulations are all high-value resilience investments that do not require excessive ongoing cost.',
  },
];

export default function SupplyChainPromptsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI Prompts for Supply Chain: Forecasting, Inventory, Logistics & Resilience',
    description: 'Expert AI prompts for supply chain professionals — demand forecasting, inventory optimisation, logistics planning, supplier management, resilience, and digital transformation.',
    author: { '@type': 'Organization', name: 'GPTPrompts' },
    datePublished: '2025-01-01',
    dateModified: '2025-06-01',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen" style={{ background: '#010305' }}>
        {/* Hero */}
        <div className="border-b" style={{ borderColor: borderCol }}>
          <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
            <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border mb-6" style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}>
              <Truck size={12} /> Supply Chain & Logistics
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              AI Prompts for <span style={{ color: accent }}>Supply Chain</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mb-8">
              24 expert prompts across 6 categories — from demand forecasting and inventory optimisation to logistics, supplier management, resilience, and digital transformation.
            </p>
            <div className="flex flex-wrap gap-3">
              {['24 Prompts', '6 Categories', 'Copy in 1 Click', 'Free to Use'].map(label => (
                <span key={label} className="text-xs px-3 py-1 rounded-full border text-gray-400" style={{ borderColor: borderCol }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Prompt Sections */}
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="mb-16">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}>
                    <Icon size={18} style={{ color: accent }} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <p className="text-gray-400 mb-6 ml-12">{section.description}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  {section.prompts.map(p => (
                    <CopyCard key={p.title} {...p} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Reference Block 1: KPI Reference */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-2">Supply Chain KPI Reference</h2>
            <p className="text-gray-400 mb-6">Eight critical supply chain metrics with formulas and benchmark ranges.</p>
            <div className="rounded-lg border overflow-hidden" style={{ borderColor: borderCol }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: `${accent}15` }}>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: accent }}>Metric</th>
                    <th className="text-left px-4 py-3 text-white font-semibold">Formula</th>
                    <th className="text-left px-4 py-3 text-gray-400 font-semibold">Benchmark</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['OTIF', 'Orders delivered on time AND in full ÷ Total orders × 100', '92–98% (retail demands 98%+)'],
                    ['Inventory Turnover', 'Cost of goods sold ÷ Average inventory value', '4–12x per year (varies by industry)'],
                    ['Days Sales of Inventory (DSI)', 'Average inventory ÷ (COGS ÷ 365)', '30–90 days depending on category'],
                    ['Cash-to-Cash Cycle', 'Days inventory outstanding + Days sales outstanding − Days payable outstanding', 'Lower is better; best-in-class 20–40 days'],
                    ['Perfect Order Rate', '% orders with zero defects: correct item, qty, condition, on time, correct invoice', '95–99% for top performers'],
                    ['Forecast Accuracy (MAPE)', '(1 − Mean Absolute % Error) × 100', '70–85% is typical; 85%+ is excellent'],
                    ['Supplier OTIF', 'Inbound deliveries on time and complete ÷ Total inbound deliveries × 100', '90–97% depending on category'],
                    ['Freight Cost as % of Revenue', 'Total freight spend ÷ Revenue × 100', '2–8% depending on product density and distance'],
                  ].map(([metric, formula, benchmark]) => (
                    <tr key={metric} className="border-t" style={{ borderColor: borderCol }}>
                      <td className="px-4 py-3 font-medium" style={{ color: accent }}>{metric}</td>
                      <td className="px-4 py-3 text-gray-300 font-mono text-xs">{formula}</td>
                      <td className="px-4 py-3 text-gray-500">{benchmark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Reference Block 2: AI Tools for Supply Chain */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-2">AI and Digital Tools for Supply Chain</h2>
            <p className="text-gray-400 mb-6">Key technology categories and leading solutions for modern supply chain operations.</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { category: 'Demand Planning & S&OP', tools: 'o9 Solutions, Kinaxis RapidResponse, Blue Yonder, Anaplan, SAP IBP', use: 'Integrated demand-supply planning, scenario modelling, S&OP process support' },
                { category: 'Inventory Optimisation', tools: 'Slim4, Inventory Planner, Netstock, Relex Solutions, EazyStock', use: 'Dynamic safety stock, replenishment automation, multi-echelon optimisation' },
                { category: 'Transport Management', tools: 'MercuryGate, Oracle TMS, SAP TM, Project44, FourKites', use: 'Route optimisation, freight procurement, carrier management, real-time tracking' },
                { category: 'Warehouse Management', tools: 'Manhattan Associates, Blue Yonder WMS, SAP EWM, Körber, Deposco', use: 'Pick, pack, ship optimisation, labour management, inventory accuracy' },
                { category: 'Supply Chain Visibility', tools: 'project44, Shippeo, FourKites, Resilinc, Everstream Analytics', use: 'Real-time shipment tracking, supplier risk monitoring, disruption alerts' },
                { category: 'Procurement & Sourcing', tools: 'Coupa, Jaggaer, SAP Ariba, Ivalua, Zycus', use: 'Source-to-pay automation, spend analytics, supplier management, contract management' },
              ].map(item => (
                <div key={item.category} className="rounded-lg border p-4" style={{ borderColor: borderCol, background: bgDark }}>
                  <h3 className="font-semibold mb-1" style={{ color: accent }}>{item.category}</h3>
                  <p className="text-white text-xs mb-2">{item.tools}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.use}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-400 mb-6">Key supply chain concepts and how AI prompts can help you work smarter across the function.</p>
            <div className="space-y-2">
              {faqs.map(item => <FAQ key={item.question} item={item} />)}
            </div>
          </div>

          {/* Related Pages */}
          <div className="border-t pt-12" style={{ borderColor: borderCol }}>
            <h2 className="text-xl font-bold text-white mb-6">Related Prompt Collections</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Notion Workspace Prompts', href: '/ai-prompts-notion' },
                { label: 'Manus AI Prompts', href: '/manus-ai-prompts' },
                { label: 'Marketing Strategy', href: '/ai-prompts-marketing-strategy' },
                { label: 'Data Analysis Prompts', href: '/ai-prompts-data-analysis' },
                { label: 'PowerPoint Prompts', href: '/chatgpt-prompts-powerpoint' },
                { label: 'Executive AI Prompts', href: '/ai-for-executives-prompts' },
                { label: 'Coding Interview Prompts', href: '/chatgpt-prompts-coding-interviews' },
                { label: 'Content Writing Prompts', href: '/chatgpt-prompts-content-writing' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border px-4 py-3 text-sm text-gray-400 transition-colors hover:text-white"
                  style={{ borderColor: borderCol, background: bgDark }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${accent}50`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = borderCol; }}
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
