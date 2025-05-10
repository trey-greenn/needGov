import React from 'react'
import SEO from '@/components/SEO'

const AdministrativeLawPage = () => {
  return (
    <>
      <SEO
        title="Administrative Law in the U.S. | NeedGov"
        description="Learn about U.S. administrative law, including federal executive agencies, independent regulatory agencies, administrative law judges (ALJs), and state agencies."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Administrative Law in the U.S.",
          "description": "Administrative law is created and enforced by government agencies, primarily under the executive branch, at both the federal and state levels.",
          "keywords": "administrative law, federal agencies, regulatory agencies, ALJs, state agencies, government regulation, executive branch",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://needgov.com/administration-law"
          },
          "publisher": {
            "@type": "Organization",
            "name": "NeedGov",
            "logo": {
              "@type": "ImageObject",
              "url": "https://needgov.com/logo.png"
            }
          }
        }}
      />
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Administrative Law in the U.S.</h1>
        
        <p className="mb-6 text-lg">
          Administrative law is created and enforced by government agencies, primarily under the executive branch, at both the federal and state levels.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Main Bodies That Make Up Administrative Law:</h2>

        <div className="space-y-8">
          <section className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="text-xl font-medium mb-3">1. Federal Executive Agencies</h3>
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <li>Created by Congress through enabling statutes.</li>
              <li>Headed by secretaries appointed by the President.</li>
              <li>Report directly to the President.</li>
            </ul>
            <p className="font-medium">Examples:</p>
            <ul className="list-disc pl-8 text-gray-700">
              <li>Department of Health and Human Services (HHS)</li>
              <li>Department of Homeland Security (DHS)</li>
              <li>Department of the Treasury (includes IRS)</li>
            </ul>
          </section>

          <section className="border-l-4 border-green-500 pl-4 py-2">
            <h3 className="text-xl font-medium mb-3">2. Independent Regulatory Agencies</h3>
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <li>Operate independently of presidential control.</li>
              <li>Commissioners have fixed terms and limited removal.</li>
              <li>Created to regulate sensitive areas of public policy.</li>
            </ul>
            <p className="font-medium">Examples:</p>
            <ul className="list-disc pl-8 text-gray-700">
              <li>Federal Trade Commission (FTC)</li>
              <li>Securities and Exchange Commission (SEC)</li>
              <li>Environmental Protection Agency (EPA)</li>
            </ul>
          </section>

          <section className="border-l-4 border-purple-500 pl-4 py-2">
            <h3 className="text-xl font-medium mb-3">3. Administrative Law Judges (ALJs)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Part of agencies; conduct quasi-judicial hearings.</li>
              <li>Hear disputes between agencies and individuals.</li>
              <li>Issue rulings that can be appealed in court.</li>
            </ul>
          </section>

          <section className="border-l-4 border-amber-500 pl-4 py-2">
            <h3 className="text-xl font-medium mb-3">4. State Agencies</h3>
            <ul className="list-disc pl-5 mb-3 space-y-1">
              <li>Each state has its own administrative bodies.</li>
              <li>Enforce state laws (education, labor, licensing, etc.).</li>
            </ul>
            <p className="font-medium">Examples:</p>
            <ul className="list-disc pl-8 text-gray-700">
              <li>California Department of Motor Vehicles (DMV)</li>
              <li>New York State Department of Environmental Conservation</li>
              <li>Texas Education Agency</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}

export default AdministrativeLawPage
