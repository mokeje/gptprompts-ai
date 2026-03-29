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
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#6366F1] transition-colors">
      <h4 className="font-bold text-white mb-4">{title}</h4>
      <pre className="bg-[#0a0a0a] rounded p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono mb-4 max-h-64">{prompt}</pre>
      <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-medium py-2 px-4 rounded">
        {copied ? (<><Check className="w-4 h-4" />Copied</>) : (<><Copy className="w-4 h-4" />Copy Prompt</>)}
      </button>
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#2a2a2a] rounded-lg">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 hover:bg-[#1a1a1a] transition-colors">
        <h4 className="font-bold text-white text-left">{question}</h4>
        {open ? <ChevronUp className="w-5 h-5 text-[#6366F1]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>
      {open && <div className="px-6 pb-6 text-gray-300 border-t border-[#2a2a2a]">{answer}</div>}
    </div>
  )
}

export default function AIDocumentManagementPage() {
  const prompts = {
    "Document Classification & Organization": [
      {
        title: "Automatic Document Categorization",
        prompt: "You are an expert document classifier. Analyze the provided document and automatically categorize it based on document type (contract, invoice, memo, report, etc.), subject matter, department, and urgency level. Suggest a logical folder structure and naming convention for efficient retrieval."
      },
      {
        title: "Metadata Extraction from Unstructured Documents",
        prompt: "Extract and structure key metadata from the following unstructured document: author, date created, date modified, relevant parties/stakeholders, key topics, compliance requirements, and retention period. Format the output as JSON for integration into document management systems."
      },
      {
        title: "Document Deduplication & Version Control",
        prompt: "You have multiple versions of the same document with different names and timestamps. Analyze them and identify: the most recent version, any duplicates, conflicting information, and recommend a version control strategy. Suggest how to consolidate and archive obsolete versions."
      },
      {
        title: "Multi-Language Document Processing",
        prompt: "This document is in [LANGUAGE]. Translate key sections, extract core metadata, classify by document type, and identify any compliance or regulatory markers that would affect retention or access policies. Maintain original formatting references."
      },
      {
        title: "Document Quality Assessment",
        prompt: "Evaluate the provided document for: scanned image quality, OCR accuracy, completeness of information, data integrity, and storage format appropriateness. Flag any sections that need manual review or re-scanning and recommend optimization improvements."
      },
      {
        title: "Automated Document Tagging for Discovery",
        prompt: "Generate a comprehensive tag hierarchy for this document that would enable efficient discovery in an enterprise search system. Include tags for: industry vertical, business process, stakeholder roles, regulatory domain, project/initiative, and technical keywords."
      }
    ],
    "Compliance, Retention & Risk Management": [
      {
        title: "Regulatory Compliance Document Mapping",
        prompt: "Map this document to applicable regulations (GDPR, SOX, HIPAA, ISO 27001, etc. as relevant). Identify compliance requirements, data handling obligations, access restrictions, retention mandates, and audit trail needs. Generate a compliance checklist."
      },
      {
        title: "Document Retention & Archival Strategy",
        prompt: "Analyze this document and determine: regulatory retention requirements, business value retention period, legal hold considerations, secure deletion timeline, and appropriate archival method (cold storage, destruction, etc.). Create a retention schedule."
      },
      {
        title: "Data Privacy & Redaction Analysis",
        prompt: "Identify all personally identifiable information (PII), sensitive business data, and confidential information in this document. Recommend redaction strategy, access controls, and whether encryption is needed before storage or sharing. Flag any privacy risks."
      },
      {
        title: "Audit Trail & Access Control Framework",
        prompt: "Design an audit and access control framework for this document. Specify: who should have access (by role), what actions should be logged, required approvals for modifications, tracking requirements, and how to demonstrate compliance with audit requirements."
      },
      {
        title: "Document Risk & Breach Impact Assessment",
        prompt: "Assess the risk profile of this document if compromised or lost. Evaluate: business impact, regulatory penalties, reputation damage, financial exposure, and required incident response procedures. Recommend containment and mitigation strategies."
      },
      {
        title: "Litigation Hold & eDiscovery Preparation",
        prompt: "Prepare this document for potential litigation hold or eDiscovery. Identify: relevant metadata to preserve, chain of custody requirements, searchability needs, formatting preservation needs, and how to organize related documents for legal team review."
      }
    ],
    "Workflow Automation & Process Optimization": [
      {
        title: "Document Routing & Approval Workflow Design",
        prompt: "Design an automated document routing and approval workflow for documents of this type. Map: submission triggers, required approvals (by role/hierarchy), parallel vs. sequential routing, escalation rules, notification requirements, and completion confirmation steps."
      },
      {
        title: "OCR & Data Extraction Automation",
        prompt: "Create an automated OCR and data extraction workflow for this document type. Specify: which fields/sections to extract, confidence thresholds, error handling for low-confidence extractions, validation rules, and how to feed extracted data into downstream systems."
      },
      {
        title: "Document Assembly & Template Generation",
        prompt: "Design a template-based document assembly system for documents like this one. Specify: variable fields, conditional sections, approval/signature requirements, version control, and integration points with CRM/ERP systems to auto-populate data."
      },
      {
        title: "Intelligent Document Splitting & Organization",
        prompt: "Create a workflow to automatically split multi-section documents into relevant sub-documents. Define: splitting logic, how to maintain relationships between documents, naming conventions for fragments, and how to handle cross-references."
      },
      {
        title: "Document Comparison & Change Tracking",
        prompt: "Design an automated workflow to compare document versions and track changes. Specify: what constitutes a significant change, how to flag substantive revisions, how to maintain version history, and how to alert relevant stakeholders to material modifications."
      },
      {
        title: "Batch Document Processing & Migration",
        prompt: "Plan a batch processing workflow to migrate legacy documents into a modern DMS. Include: validation checks, error logging, performance optimization for large volumes, parallel processing considerations, and rollback procedures."
      }
    ],
    "Search, Retrieval & Knowledge Management": [
      {
        title: "Enterprise Search Optimization Strategy",
        prompt: "Design a search optimization strategy for a document management system. Specify: indexing approach, keyword strategy, faceted navigation options, relevance ranking, synonym/abbreviation handling, and how to improve search precision and recall."
      },
      {
        title: "Knowledge Base Organization for AI Search",
        prompt: "Organize documents for an AI-powered semantic search system. Recommend: how to structure documents for vector embeddings, what metadata to include, optimal chunking strategy for passages, cross-document linking, and how to handle document relationships."
      },
      {
        title: "Content Recommendation Engine Design",
        prompt: "Design a content recommendation system that suggests related documents based on user searches and browsing history. Specify: recommendation algorithm, relevance weighting, personalization rules, feedback loops, and how to prevent stale recommendations."
      },
      {
        title: "Advanced Document Query & Synthesis",
        prompt: "For documents on this topic, design an advanced query system that can: synthesize information across multiple documents, answer complex questions, cross-reference related content, and provide context-aware responses. Specify required document structure."
      },
      {
        title: "Document Lineage & Citation Tracking",
        prompt: "Design a system to track document lineage and citations. Specify: how to track which documents depend on or reference this document, how to identify outdated references, how to propagate updates, and how to build a document dependency graph."
      },
      {
        title: "Knowledge Management & Institutional Memory",
        prompt: "Design a knowledge management system using documents as the primary content source. Specify: taxonomy structure, expert tagging, knowledge decay/staleness detection, continuous improvement mechanisms, and how to make tacit knowledge explicit."
      }
    ],
    "Integration & System Connectivity": [
      {
        title: "Document Management System Integration Architecture",
        prompt: "Design the integration architecture for connecting this document management system to: email, ERP, CRM, collaboration tools, and legacy systems. Specify: API approaches, data synchronization strategy, error handling, and conflict resolution for document updates."
      },
      {
        title: "Workflow Engine Integration & Orchestration",
        prompt: "Design how to integrate documents with workflow engines (like Make, Zapier, n8n) to automate cross-system processes. Specify: trigger conditions, data mapping, conditional logic, error scenarios, and how to maintain audit trails across systems."
      },
      {
        title: "API Design for Document Access & Manipulation",
        prompt: "Design a REST/GraphQL API for third-party applications to access and manipulate documents. Specify: authentication/authorization, rate limiting, supported operations, response formats, error handling, and versioning strategy."
      },
      {
        title: "Real-Time Document Synchronization",
        prompt: "Design a real-time synchronization mechanism for documents across multiple systems or locations. Address: conflict resolution when documents are modified simultaneously, consistency guarantees, bandwidth optimization, and fallback mechanisms."
      },
      {
        title: "Document Webhook & Event System",
        prompt: "Design a webhook and event notification system for document lifecycle events (created, modified, deleted, approved, archived). Specify: events to emit, retry logic, subscriber management, and how to ensure reliable event delivery."
      },
      {
        title: "AI Integration for Document Intelligence",
        prompt: "Design an AI integration layer that adds intelligent capabilities to document management: semantic understanding, anomaly detection, predictive tagging, automated insights, and content summarization. Specify: model selection and deployment approach."
      }
    ]
  }

  const faqs = [
    {
      question: "What's the best way to organize documents by department vs. project?",
      answer: "Use a hybrid approach: primary organization by department (reflecting reporting structure), with secondary tagging/cross-referencing for projects. This ensures documents are found both through organizational hierarchy and project context. Implement role-based access so employees see both their departmental folder and relevant projects. Document type (contracts, policies, reports) should have their own top-level categories cutting across departments."
    },
    {
      question: "How do I ensure document management compliance with GDPR and data privacy regulations?",
      answer: "Implement: automated data classification (PII detection), access controls (role-based), encryption (in transit and at rest), audit logging (every document access), retention schedules aligned with regulations, and data deletion workflows. Use document metadata to track processing purposes, data subjects, and legal basis. Conduct regular privacy impact assessments and maintain documentation of your data handling practices. Consider automated redaction tools for sensitive information."
    },
    {
      question: "What OCR confidence threshold should I use when extracting data from scanned documents?",
      answer: "Start with 95% confidence threshold to minimize manual review effort, but adjust based on document type and downstream impact. For financial/legal documents, use 99% (manual review for lower confidence). For internal memos/notes, 85% is acceptable. Implement graduated responses: high confidence (95%+) auto-processes, medium (80-95%) requires human verification, low (<80%) routes to manual data entry. Monitor false negatives/positives and adjust over time."
    },
    {
      question: "How can I reduce the time and cost of document migration from legacy systems?",
      answer: "Plan in phases: first, audit existing documents (what's actually used vs. archive candidates). Automate wherever possible (bulk OCR, batch classification, metadata extraction). Prioritize migrating high-value/frequently-accessed documents first. Use parallel systems during transition to reduce risk. Implement data validation checks to catch migration errors early. Consider cloud-based DMS to avoid expensive infrastructure investment. Train users incrementally rather than forcing adoption of entire system simultaneously."
    },
    {
      question: "What's the ideal folder structure depth and breadth for enterprise document management?",
      answer: "Aim for 3-4 levels deep max (e.g., Department > Document Type > Year > Month). Keep breadth under 15 folders per level to avoid overwhelming users. Use consistent naming conventions and avoid deep nesting that makes navigation difficult. Supplement folder structure with robust tagging, search, and filters rather than relying solely on hierarchy. For large organizations, department-level personalization (showing only relevant folders) improves navigation. Regularly audit folder structure—it evolves as the organization changes."
    },
    {
      question: "How do I implement document version control while preventing users from losing work?",
      answer: "Use automatic versioning (every save creates a version) combined with version retention policies (keep last 10 versions, delete old versions after 6 months). Implement clear version history UI showing who changed what and when. Lock documents during editing to prevent simultaneous modifications causing conflicts. For collaborative editing, use real-time conflict resolution. Provide 'restore from version' functionality prominently. Train users that versions are automatic (they don't need to manually name versions)."
    },
    {
      question: "What's the best approach to implement full-text search across millions of documents?",
      answer: "Use dedicated search engines (Elasticsearch, Solr) rather than database native search for scale and performance. Index documents upon upload/modification using background workers. Implement faceted search (narrow by date, type, author, etc.) to reduce result sets. Use relevance ranking algorithms that consider document recency, access patterns, and match context. Implement spell-correction and synonym handling. For very large repositories, consider vector embeddings and semantic search for concept-based retrieval. Monitor and refine search queries based on user feedback."
    },
    {
      question: "How do I balance document accessibility with security and confidentiality?",
      answer: "Implement role-based access control (RBAC) where permissions are tied to job function. Use attribute-based access control (ABAC) for granular control (e.g., 'can view documents in their business unit'). Distinguish between 'can access' (read) and 'can modify/delete' permissions. Implement audit logging so you can prove who accessed what. Use encryption for sensitive documents. Consider watermarking or view-only access for highly sensitive content. Provide self-service access requests with approval workflows rather than requiring IT intervention for every access change."
    },
    {
      question: "What metrics should I track to measure document management system success?",
      answer: "Track: (1) adoption (% of users accessing system regularly), (2) efficiency (time to find/retrieve documents vs. baseline), (3) compliance (audit log completeness, retention policy adherence), (4) quality (OCR accuracy rate, data extraction error rate), (5) cost (cost per document, vs. previous system), (6) risk (number of access violations detected, compliance incidents). Set targets for each metric and review quarterly. Conduct user satisfaction surveys and document search success rates (% of searches returning useful results)."
    },
    {
      question: "How do I manage document lifecycle from creation through destruction?",
      answer: "Implement: (1) creation policies (templates, metadata requirements), (2) active use phase (version control, access management), (3) review point (is this still relevant?), (4) archival (move to cold storage if infrequently accessed), (5) retention hold (if regulatory/legal hold applies), (6) scheduled deletion (based on retention policies), (7) destruction verification (audit trail of deletion). Automate where possible, but maintain manual override for edge cases. Map retention requirements by document type and regulatory domain. Consider 'tombstone' records (metadata preserved, content deleted) for compliance."
    }
  ]

  const relatedPages = [
    { title: "AI for Workforce Management", href: "/ai-for-workforce-management-prompts" },
    { title: "AI for Operations Management", href: "/ai-for-operations-management-prompts" },
    { title: "AI for Facilities Management", href: "/ai-for-facilities-management-prompts" },
    { title: "AI Question Answering", href: "/ai-question-answering-prompts" },
    { title: "AI for News & Media", href: "/ai-for-news-prompts" },
    { title: "Squibler AI", href: "/squibler-ai-prompts" },
    { title: "AI Summarizer", href: "/ai-summarizer-prompts" },
    { title: "AI for Management Consulting", href: "/ai-for-management-consulting-prompts" }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "30 Essential AI Prompts for Document Management",
        description: "AI prompts for document classification, compliance, workflow automation, search optimization, and system integration in enterprise document management.",
        datePublished: "2026-03-29",
        dateModified: "2026-03-29"
      })}} />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">AI Document Management Prompts</h1>
        <p className="text-xl text-gray-300 mb-12">30 powerful AI prompts for document classification, compliance management, workflow automation, intelligent search, and system integration.</p>

        {Object.entries(prompts).map((section) => (
          <div key={section[0]} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-[#6366F1]"></span>
              {section[0]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section[1].map((prompt, idx) => (
                <CopyCard key={idx} title={prompt.title} prompt={prompt.prompt} />
              ))}
            </div>
          </div>
        ))}

        <div className="my-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#6366F1]"></span>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="my-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#6366F1]"></span>
            Related Pages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedPages.map((page, idx) => (
              <Link key={idx} href={page.href} className="p-4 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#6366F1] transition-colors">
                <span className="text-[#6366F1] font-medium">{page.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
