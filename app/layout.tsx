import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { generateMetadata as generateSEOMetadata, siteConfig } from "@/lib/seo-config"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  ...generateSEOMetadata({}),
  generator: "GPTPrompts.AI",
  applicationName: "GPTPrompts.AI",
  referrer: "origin-when-cross-origin",
  category: "technology",
  classification: "AI Education, Prompt Engineering",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-K214289B7J" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K214289B7J');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0431844656519748"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="US; GB; DE; FR" />
        <meta name="geo.position" content="United States; Europe" />
        <meta name="geo.placename" content="United States, United Kingdom, Germany, France" />
        <meta name="ICBM" content="37.0902,-95.7129" />

        {/* GEO (Generative Engine Optimization) Meta Tags for AI Search */}
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large" />

        {/* AI Crawler Permissions */}
        <meta name="GPTBot" content="index, follow" />
        <meta name="ChatGPT-User" content="index, follow" />
        <meta name="PerplexityBot" content="index, follow" />
        <meta name="Claude-Web" content="index, follow" />
        <meta name="Applebot-Extended" content="index, follow" />
        <meta name="Google-Extended" content="index, follow" />
        <meta name="CCBot" content="index, follow" />
        <meta name="anthropic-ai" content="index, follow" />
        <meta name="Omgilibot" content="index, follow" />

        {/* Citation and Attribution Metadata */}
        <meta name="author" content="GPTPrompts.AI Editorial Team" />
        <meta name="content-type" content="Educational Guide" />
        <meta name="audience" content="Beginners to Advanced AI Users" />
        <meta name="reading-time" content="15 minutes" />
        <meta name="last-substantial-update" content="2026-01-01" />

        {/* Structured Data - Organization Schema */}
        <Script id="schema-organization" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "GPTPrompts.AI",
            url: siteConfig.url,
            logo: `${siteConfig.url}/generative.png`,
            description: siteConfig.description,
            sameAs: [
              siteConfig.links.twitter,
              siteConfig.links.github,
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Support",
              url: siteConfig.url,
            },
          })}
        </Script>

        {/* Structured Data - Website Schema with SearchAction */}
        <Script id="schema-website" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "GPTPrompts.AI",
            url: siteConfig.url,
            description: siteConfig.description,
            inLanguage: ["en-US", "en-GB", "de-DE", "fr-FR"],
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: `${siteConfig.url}/website-links?q={search_term_string}`,
              },
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>

        {/* Structured Data - Educational Organization */}
        <Script id="schema-educational" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "GPTPrompts.AI",
            url: siteConfig.url,
            description: "Comprehensive educational resource for AI prompt engineering and best practices",
            about: {
              "@type": "Thing",
              name: "Prompt Engineering",
              description: "The art and science of crafting effective prompts for AI language models",
            },
          })}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
