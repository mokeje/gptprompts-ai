'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

const CopyCard = ({ prompt }: { prompt: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-red-500/50 transition-colors">
      <p className="text-gray-300 text-sm mb-3">{prompt}</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors text-sm font-medium"
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy prompt
          </>
        )}
      </button>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-900/50 transition-colors"
      >
        <span className="text-gray-200 font-medium text-left">{question}</span>
        {isOpen ? (
          <ChevronUp size={20} className="text-red-500 flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-gray-600 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-900/50 border-t border-gray-800">
          <p className="text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function RiskManagementPromptsPage() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Prompts for Risk Management',
            description: 'Comprehensive collection of AI prompts for risk assessment, compliance, threat analysis, mitigation strategies, and enterprise risk governance',
            author: {
              '@type': 'Person',
              name: 'Michael Okeje',
            },
            datePublished: '2026-03-29',
            dateModified: '2026-03-29',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How can AI improve risk assessment in my organization?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI enhances risk assessment by analyzing historical data patterns, identifying emerging threats faster than manual review, predicting probability and impact scores with greater accuracy, automating routine compliance checks, and enabling continuous monitoring instead of periodic reviews. This leads to more comprehensive risk inventories and earlier intervention opportunities.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the difference between risk mitigation and risk management?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Risk management is the comprehensive process of identifying, assessing, monitoring, and responding to risks across an organization. Risk mitigation is a specific strategy within risk management focused on reducing the likelihood or impact of identified risks. Risk management also includes risk acceptance and risk transfer strategies beyond just mitigation.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I create an effective risk register with AI assistance?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use AI to gather risk data from multiple sources (incident reports, audit findings, regulatory updates, external threat intelligence), categorize risks automatically, calculate probability and impact scores using historical data, identify risk interdependencies, and suggest appropriate response strategies. AI can also help maintain the register by flagging emerging risks and tracking mitigation progress.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are the key components of a risk mitigation plan?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A comprehensive mitigation plan includes: risk description and context, probability and impact assessment, identified mitigating controls, responsible parties and timelines, resource requirements, success metrics, contingency actions if primary mitigation fails, and regular review schedules. AI can help structure these components consistently and track progress against timelines.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can I ensure regulatory compliance using AI tools?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI tools can monitor regulatory changes in your industry, map compliance requirements to your processes, identify gaps between current practices and requirements, automate compliance documentation, conduct compliance audits, generate audit trails, and alert you to non-compliance. However, human expertise is essential for interpreting complex regulations specific to your organization.',
                },
              },
              {
                '@type': 'Question',
                name: 'What metrics should I track for risk management effectiveness?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Key metrics include: total risk exposure trend over time, number of risks in each category and severity level, percentage of risks with active mitigation plans, time from risk identification to response, cost of realized risks versus forecasted risk exposure, mitigation plan completion rates, and stakeholder awareness scores. AI can help aggregate and visualize these metrics in real-time dashboards.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I identify emerging risks before they materialize?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use AI for weak signal detection by analyzing industry news, competitor actions, regulatory trends, social media sentiment, technology changes, and supply chain disruptions. Implement scenario planning with AI to explore potential future risks. Conduct horizon scanning combining AI analysis with expert judgment. Create feedback loops from operational teams to surface emerging concerns early.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is business continuity planning and how does it relate to risk management?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Business continuity planning focuses on maintaining or restoring critical business functions during disruptions. It is a critical component of risk management that specifically addresses response and recovery for high-impact risks. A strong continuity plan identifies critical processes, establishes recovery time objectives, identifies recovery resources, and tests recovery procedures. AI can help simulate disruptions and optimize resource allocation.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can I implement a data-driven risk governance framework?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Establish clear governance structures defining roles, responsibilities, and escalation paths. Use AI to gather data from across the organization on risks, controls, and incidents. Create dashboards providing real-time visibility to decision-makers. Implement automated alerts for threshold violations. Conduct regular data-driven risk reviews using AI-generated insights. Document decisions and rationales for audit purposes.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I balance risk management costs against benefits?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Calculate the cost of risk mitigation against the probability-weighted cost of risk realization. Consider non-financial benefits like regulatory compliance, reputation protection, and stakeholder confidence. Use AI to model different mitigation strategies and their cost-benefit profiles. Align spending with strategic priorities and risk tolerance. Review the balance regularly as risk profiles change.',
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-red-500 font-semibold text-sm">RISK MANAGEMENT</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            AI Prompts for Risk Management
          </h1>
          <p className="text-xl text-gray-400">
            Comprehensive prompts for risk assessment, compliance, threat analysis, mitigation strategies, and enterprise risk governance. Master AI-assisted risk identification, quantification, and management.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-red-500">Risk Identification and Assessment</h2>
            <div className="grid gap-4">
              <CopyCard prompt="Help me identify all potential risks in [specific business area/process]. Consider operational, financial, compliance, strategic, and reputational risks. For each risk, describe how it could impact our organization, what triggers might cause it, and any early warning signs we should monitor." />
              <CopyCard prompt="Create a risk assessment framework for [industry/organization type]. Include risk categories, probability scales (1-5), impact scales (1-5), and scoring methodology. Then help me prioritize our identified risks using this framework and determine which require immediate attention." />
              <CopyCard prompt="Analyze our [supply chain/operations/technology infrastructure] for vulnerabilities. Identify single points of failure, interdependencies, and cascading risk scenarios. Suggest which vulnerabilities pose the highest potential impact and which are most likely to materialize." />
              <CopyCard prompt="Help me conduct a business continuity risk assessment. Identify our most critical business processes, estimate recovery time objectives for each, assess current recovery capabilities, and recommend priority areas for contingency planning based on impact and likelihood." />
              <CopyCard prompt="Generate a cybersecurity risk assessment for our [organization type]. Consider threats like data breaches, ransomware, insider threats, supply chain compromise, and system outages. Evaluate our current security posture against each threat and recommend remediation priorities." />
              <CopyCard prompt="Create a comprehensive risk profile for [specific project/initiative]. Analyze technical, schedule, budget, resource, stakeholder, and market risks. For each risk category, identify specific threats, probability estimates, impact assessments, and interdependencies with other risks." />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-red-500">Compliance and Regulatory Risk</h2>
            <div className="grid gap-4">
              <CopyCard prompt="Map our current business processes against [specific regulation/standard - GDPR/SOX/ISO27001/HIPAA/etc]. Identify compliance gaps where our processes fall short of requirements. Prioritize gaps by regulatory consequence severity and remediation effort." />
              <CopyCard prompt="Help me create a compliance monitoring system for [regulatory domain]. Define key compliance metrics, data collection methods, monitoring frequency, escalation triggers, and remediation processes. Generate a compliance calendar identifying key dates, audit periods, and reporting deadlines." />
              <CopyCard prompt="Assess the regulatory risk landscape for [industry/geography]. Identify upcoming regulation changes, emerging compliance requirements, and regulatory trends. Evaluate how these will impact our organization and recommend strategic preparation steps." />
              <CopyCard prompt="Create a data protection and privacy risk assessment for our organization. Identify data assets, data flows, potential exposure points, and privacy risks. Evaluate our compliance with [GDPR/CCPA/PIPEDA/etc] and recommend improvements." />
              <CopyCard prompt="Help me design an audit program for [business area/process]. Define audit scope, frequency, sampling methods, and testing procedures. Create audit checklists and identify key risk areas that audits should focus on." />
              <CopyCard prompt="Develop a regulatory change monitoring and impact assessment process. Define how we'll track regulatory updates, assess impact on our organization, coordinate response across departments, and update our compliance programs accordingly." />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-red-500">Threat Analysis and Intelligence</h2>
            <div className="grid gap-4">
              <CopyCard prompt="Conduct a threat modeling exercise for [system/process/product]. Identify potential threat actors (internal/external), their motivations, capabilities, and attack vectors. For each plausible threat, assess likelihood and potential impact to the organization." />
              <CopyCard prompt="Analyze [competitor/industry player/emerging startup] as a strategic threat. Assess their capabilities, market positioning, potential moves, and how they could disrupt our business model. Recommend defensive strategies and competitive responses." />
              <CopyCard prompt="Help me scan for emerging technology risks and opportunities. Analyze [AI/blockchain/IoT/cloud/quantum/etc] threats and risks relevant to our industry. Assess our organization's exposure and recommend risk mitigation strategies." />
              <CopyCard prompt="Create an external threat intelligence program. Define which external threats we should monitor (geopolitical, natural disasters, market volatility, technology disruption, competitor moves). Establish data sources, monitoring frequency, and escalation procedures." />
              <CopyCard prompt="Assess reputational risks from [specific situation/decision/public position]. Analyze stakeholder perspectives, media reaction potential, social media amplification likelihood, and long-term brand impact. Recommend communication and mitigation strategies." />
              <CopyCard prompt="Develop a crisis risk assessment framework. Identify plausible crisis scenarios in [industry/organization], assess probability and severity, identify potential triggers, and evaluate our crisis response capabilities. Prioritize scenarios requiring contingency planning." />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-red-500">Risk Mitigation and Controls</h2>
            <div className="grid gap-4">
              <CopyCard prompt="Help me design a risk mitigation plan for [identified risk]. Define the risk in detail, assess current controls, identify additional mitigating controls, assign accountability and timelines, define success metrics, and plan implementation phasing." />
              <CopyCard prompt="Create a control framework for [business area/process]. Identify preventive controls (stop risks from occurring), detective controls (identify when risks occur), and corrective controls (resolve impacts). For each control, specify owner, frequency, and effectiveness testing." />
              <CopyCard prompt="Evaluate our existing controls for [risk category]. Assess control design effectiveness (whether controls are appropriate), control operation effectiveness (whether controls are actually working), and identify gaps. Recommend control improvements." />
              <CopyCard prompt="Help me prioritize risk mitigation initiatives given [budget/resource constraints]. Analyze cost-benefit of different mitigation strategies. Rank initiatives by residual risk reduction per dollar spent and strategic importance. Create a phased implementation plan." />
              <CopyCard prompt="Develop a third-party risk management program. Define vendor risk assessment criteria, establish due diligence procedures, create contract risk clauses, define ongoing monitoring methods, and establish contingency plans for critical vendors." />
              <CopyCard prompt="Create a business continuity and disaster recovery plan for [business area/process]. Define recovery time objectives, recovery point objectives, critical resources, recovery procedures, communication plans, and testing schedules." />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-red-500">Risk Monitoring and Governance</h2>
            <div className="grid gap-4">
              <CopyCard prompt="Design a risk monitoring and reporting dashboard for [organizational level - board/executive/operational]. Define key risk indicators to track, visualization methods, reporting frequency, escalation triggers, and decision support metrics." />
              <CopyCard prompt="Help me establish a risk governance structure for [organization type/size]. Define roles and responsibilities for risk oversight, establish escalation procedures, create decision rights, set meeting cadences, and define risk governance documentation requirements." />
              <CopyCard prompt="Create a risk culture assessment and improvement plan. Evaluate current attitudes toward risk awareness, risk reporting, risk accountability, and risk-informed decision-making. Identify gaps and recommend programs to strengthen risk culture." />
              <CopyCard prompt="Develop a risk reporting framework for stakeholders. Define risk metrics, create executive summaries, establish reporting frequency and distribution lists, implement escalation triggers, and create drill-down capabilities for detailed analysis." />
              <CopyCard prompt="Help me design a risk review and update process. Define how frequently we review risks, what triggers special reviews, how we incorporate new information, how we update risk scores, and how we communicate changes to stakeholders." />
              <CopyCard prompt="Create a risk training and awareness program. Identify required risk competencies by role, design training curricula, plan delivery methods, establish success metrics, and create ongoing awareness campaigns to embed risk thinking in decision-making." />
            </div>
          </section>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-800">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <FAQItem
              question="How can AI improve risk assessment in my organization?"
              answer="AI enhances risk assessment by analyzing historical data patterns, identifying emerging threats faster than manual review, predicting probability and impact scores with greater accuracy, automating routine compliance checks, and enabling continuous monitoring instead of periodic reviews. This leads to more comprehensive risk inventories and earlier intervention opportunities."
            />
            <FAQItem
              question="What is the difference between risk mitigation and risk management?"
              answer="Risk management is the comprehensive process of identifying, assessing, monitoring, and responding to risks across an organization. Risk mitigation is a specific strategy within risk management focused on reducing the likelihood or impact of identified risks. Risk management also includes risk acceptance and risk transfer strategies beyond just mitigation."
            />
            <FAQItem
              question="How do I create an effective risk register with AI assistance?"
              answer="Use AI to gather risk data from multiple sources (incident reports, audit findings, regulatory updates, external threat intelligence), categorize risks automatically, calculate probability and impact scores using historical data, identify risk interdependencies, and suggest appropriate response strategies. AI can also help maintain the register by flagging emerging risks and tracking mitigation progress."
            />
            <FAQItem
              question="What are the key components of a risk mitigation plan?"
              answer="A comprehensive mitigation plan includes: risk description and context, probability and impact assessment, identified mitigating controls, responsible parties and timelines, resource requirements, success metrics, contingency actions if primary mitigation fails, and regular review schedules. AI can help structure these components consistently and track progress against timelines."
            />
            <FAQItem
              question="How can I ensure regulatory compliance using AI tools?"
              answer="AI tools can monitor regulatory changes in your industry, map compliance requirements to your processes, identify gaps between current practices and requirements, automate compliance documentation, conduct compliance audits, generate audit trails, and alert you to non-compliance. However, human expertise is essential for interpreting complex regulations specific to your organization."
            />
            <FAQItem
              question="What metrics should I track for risk management effectiveness?"
              answer="Key metrics include: total risk exposure trend over time, number of risks in each category and severity level, percentage of risks with active mitigation plans, time from risk identification to response, cost of realized risks versus forecasted risk exposure, mitigation plan completion rates, and stakeholder awareness scores. AI can help aggregate and visualize these metrics in real-time dashboards."
            />
            <FAQItem
              question="How do I identify emerging risks before they materialize?"
              answer="Use AI for weak signal detection by analyzing industry news, competitor actions, regulatory trends, social media sentiment, technology changes, and supply chain disruptions. Implement scenario planning with AI to explore potential future risks. Conduct horizon scanning combining AI analysis with expert judgment. Create feedback loops from operational teams to surface emerging concerns early."
            />
            <FAQItem
              question="What is business continuity planning and how does it relate to risk management?"
              answer="Business continuity planning focuses on maintaining or restoring critical business functions during disruptions. It is a critical component of risk management that specifically addresses response and recovery for high-impact risks. A strong continuity plan identifies critical processes, establishes recovery time objectives, identifies recovery resources, and tests recovery procedures. AI can help simulate disruptions and optimize resource allocation."
            />
            <FAQItem
              question="How can I implement a data-driven risk governance framework?"
              answer="Establish clear governance structures defining roles, responsibilities, and escalation paths. Use AI to gather data from across the organization on risks, controls, and incidents. Create dashboards providing real-time visibility to decision-makers. Implement automated alerts for threshold violations. Conduct regular data-driven risk reviews using AI-generated insights. Document decisions and rationales for audit purposes."
            />
            <FAQItem
              question="How do I balance risk management costs against benefits?"
              answer="Calculate the cost of risk mitigation against the probability-weighted cost of risk realization. Consider non-financial benefits like regulatory compliance, reputation protection, and stakeholder confidence. Use AI to model different mitigation strategies and their cost-benefit profiles. Align spending with strategic priorities and risk tolerance. Review the balance regularly as risk profiles change."
            />
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-800">
          <h2 className="text-2xl font-bold mb-8">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/ai-chat-prompts" className="p-4 border border-gray-800 rounded-lg hover:border-red-500/50 transition-colors">
              <h3 className="font-semibold text-gray-100 mb-2">AI Chat Prompts</h3>
              <p className="text-gray-400 text-sm">General-purpose AI conversation and creative writing prompts</p>
            </Link>
            <Link href="/ai-character-chat-prompts" className="p-4 border border-gray-800 rounded-lg hover:border-red-500/50 transition-colors">
              <h3 className="font-semibold text-gray-100 mb-2">Character Chat Prompts</h3>
              <p className="text-gray-400 text-sm">Roleplay and character interaction prompts for AI</p>
            </Link>
            <Link href="/ai-personal-assistant-prompts" className="p-4 border border-gray-800 rounded-lg hover:border-red-500/50 transition-colors">
              <h3 className="font-semibold text-gray-100 mb-2">Personal Assistant Prompts</h3>
              <p className="text-gray-400 text-sm">AI prompts for productivity, scheduling, and personal management</p>
            </Link>
            <Link href="/ai-generative-ai-prompts" className="p-4 border border-gray-800 rounded-lg hover:border-red-500/50 transition-colors">
              <h3 className="font-semibold text-gray-100 mb-2">Generative AI Prompts</h3>
              <p className="text-gray-400 text-sm">Advanced prompts for creative content and AI generation</p>
            </Link>
            <Link href="/ai-resume-builder-prompts" className="p-4 border border-gray-800 rounded-lg hover:border-red-500/50 transition-colors">
              <h3 className="font-semibold text-gray-100 mb-2">Resume Builder Prompts</h3>
              <p className="text-gray-400 text-sm">AI prompts for crafting resumes, cover letters, and career documents</p>
            </Link>
            <Link href="/ai-for-executives-prompts" className="p-4 border border-gray-800 rounded-lg hover:border-red-500/50 transition-colors">
              <h3 className="font-semibold text-gray-100 mb-2">Executive Prompts</h3>
              <p className="text-gray-400 text-sm">Strategic decision-making and leadership AI prompts</p>
            </Link>
            <Link href="/ai-for-leadership-prompts" className="p-4 border border-gray-800 rounded-lg hover:border-red-500/50 transition-colors">
              <h3 className="font-semibold text-gray-100 mb-2">Leadership Prompts</h3>
              <p className="text-gray-400 text-sm">Team management and organizational development prompts</p>
            </Link>
            <Link href="/ai-for-quality-management-prompts" className="p-4 border border-gray-800 rounded-lg hover:border-red-500/50 transition-colors">
              <h3 className="font-semibold text-gray-100 mb-2">Quality Management Prompts</h3>
              <p className="text-gray-400 text-sm">Quality assurance and process improvement prompts</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}