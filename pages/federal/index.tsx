import Link from 'next/link'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'

export default function FederalPage() {
  const branches = [
    {
      name: 'Executive Branch',
      icon: '🏛️',
      href: '/federal/executive',
      items: [
        'President',
        'Vice President',
        'Cabinet Departments (15)',
        'Independent Agencies'
      ]
    },
    {
      name: 'Legislative Branch',
      icon: '📜',
      href: '/federal/legislative',
      items: [
        'Senate',
        'House of Representatives'
      ]
    },
    {
      name: 'Judicial Branch',
      icon: '⚖️',
      href: '/federal/judicial',
      items: [
        'Supreme Court',
        'Appellate Courts',
        'District Courts',
        'Special Courts'
      ]
    },
    {
      name: 'Federal Laws',
      icon: '📚',
      href: '/federal/laws',
      items: [
        'U.S. Constitution',
        'Federal Statutes',
        'Administrative Law',
        'Case Law'
      ]
    },
    {
      name: 'National Services',
      icon: '🇺🇸',
      href: '/federal/national-services',
      items: [
        'Social Security',
        'Medicare/Medicaid',
        'Veterans Services',
        'Immigration Services (USCIS)',
        'Federal Law Enforcement'
      ]
    }
  ]
  
  const federalLawTypes = [
    {
      id: 'statutes',
      number: '1',
      title: 'Federal Statutes',
      description: 'Laws passed by the U.S. Congress',
      details: [
        'Codified in the U.S. Code (U.S.C.)'
      ],
      examples: [
        'Civil Rights Act',
        'Immigration and Nationality Act',
        'Tax Code',
        'Affordable Care Act'
      ]
    },
    {
      id: 'regulations',
      number: '2',
      title: 'Federal Regulations',
      description: 'Rules made by federal agencies to implement statutes',
      details: [
        'Agencies derive authority from Congressional laws',
        'Published in:',
        'Federal Register (daily)',
        'Code of Federal Regulations (CFR)'
      ],
      examples: [
        'EPA, FDA, SEC, IRS, etc.'
      ]
    },
    {
      id: 'case-law',
      number: '3',
      title: 'Federal Case Law (Common Law)',
      description: 'Interpretations of the Constitution, statutes, and regulations by courts',
      details: [
        'Established by:',
        'U.S. Supreme Court',
        'U.S. Courts of Appeals',
        'U.S. District Courts',
        'Sets legal precedents (stare decisis)'
      ]
    },
    {
      id: 'treaties',
      number: '4',
      title: 'Treaties',
      description: 'International agreements made by the President and ratified by the Senate',
      details: [
        'Legally binding and have the same authority as federal statutes'
      ]
    },
    {
      id: 'executive-orders',
      number: '5',
      title: 'Executive Orders',
      description: 'Issued by the President',
      details: [
        'Direct federal agencies',
        'Cannot override laws passed by Congress or the Constitution'
      ]
    },
    {
      id: 'admin-decisions',
      number: '6',
      title: 'Administrative Law Decisions',
      description: 'Rulings by administrative law judges (ALJs) in federal agencies',
      details: [
        'Important in areas like:',
        'Immigration (EOIR)',
        'Social Security',
        'Labor law (NLRB)',
        'Trade and tariffs'
      ]
    }
  ]
  
  return (
    <>
      <SEO
        title="Federal Government | NeedGov"
        description="Explore the U.S. Federal Government structure, including executive, legislative, and judicial branches, plus federal laws and national services."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Federal Government Structure and Services",
          "description": "Comprehensive guide to the U.S. Federal Government including all three branches, federal laws, and national services.",
          "keywords": "federal government, executive branch, legislative branch, judicial branch, federal laws, national services, U.S. government",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://needgov.com/federal"
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
      <Layout>
        <div className="max-w-5xl mx-auto">
          {/* Hero section */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Federal Government</h1>
            <p className="text-lg md:text-xl opacity-90">
              Explore information and services from all three branches of the federal government,
              federal laws, and national service agencies.
            </p>
          </div>
          
          {/* Branches section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-blue-800 border-b pb-3">Government Branches & Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {branches.map((branch) => (
                <div key={branch.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Link href={branch.href} className="flex items-center mb-4 group">
                    <span className="text-3xl mr-3">{branch.icon}</span>
                    <h3 className="text-xl font-semibold text-blue-800 group-hover:text-blue-600 transition">
                      {branch.name}
                    </h3>
                  </Link>
                  <ul className="pl-10 space-y-1 text-slate-600">
                    {branch.items.map((item) => (
                      <li key={item} className="list-disc">{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 pl-10">
                    <Link 
                      href={branch.href} 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View {branch.name}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Federal Law Types section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-blue-800 border-b pb-3">Types of Federal Law</h2>
            <div className="space-y-6">
              {federalLawTypes.map((lawType) => (
                <div key={lawType.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      {lawType.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-800">{lawType.title}</h3>
                      <p className="text-slate-700 font-medium">{lawType.description}</p>
                    </div>
                  </div>
                  
                  <div className="pl-11">
                    <ul className="text-slate-600 space-y-1 mb-3">
                      {lawType.details.map((detail, index) => (
                        <li key={index} className={detail.endsWith(':') ? 'font-medium mt-2' : 'pl-4'}>{detail}</li>
                      ))}
                    </ul>
                    
                    {lawType.examples && (
                      <div className="mt-3 bg-slate-50 p-3 rounded border border-slate-200">
                        <p className="font-medium text-slate-700 mb-1">Examples:</p>
                        <ul className="pl-5 space-y-1">
                          {lawType.examples.map((example, index) => (
                            <li key={index} className="list-disc text-slate-600">{example}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="mt-4">
                      <Link 
                        href={`/federal/laws/${lawType.id}`} 
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Learn more about {lawType.title}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Quick links section */}
          <section className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Popular Federal Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/federal/executive/cabinet" className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-blue-700">Cabinet Departments</h3>
                <p className="text-sm text-slate-600 mt-1">View all 15 executive departments</p>
              </Link>
              <Link href="/federal/laws/us-code" className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-blue-700">U.S. Code</h3>
                <p className="text-sm text-slate-600 mt-1">Browse federal statutes by title</p>
              </Link>
              <Link href="/federal/services" className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-blue-700">Federal Services</h3>
                <p className="text-sm text-slate-600 mt-1">Find services for citizens</p>
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}