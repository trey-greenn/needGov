import React from 'react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import Layout from '@/components/Layout';
import Image from 'next/image';

const USConstitutionPage = () => {
  const constitutionSections = [
    {
      id: 'preamble',
      title: 'Preamble',
      description: 'States the purpose of the Constitution',
      link: '/us-constitution/preamble',
      icon: '📜'
    },
    {
      id: 'articles',
      title: 'Articles I–VII',
      description: 'Establish the structure of government',
      subsections: [
        { id: 'article-1', title: 'Article I', description: 'Legislative Branch (Congress)', link: '/us-constitution/article-1' },
        { id: 'article-2', title: 'Article II', description: 'Executive Branch (President)', link: '/us-constitution/article-2' },
        { id: 'article-3', title: 'Article III', description: 'Judicial Branch (Supreme Court & federal judiciary)', link: '/us-constitution/article-3' },
        { id: 'article-4', title: 'Article IV', description: 'States\' powers and relationships', link: '/us-constitution/article-4' },
        { id: 'article-5', title: 'Article V', description: 'Amendment process', link: '/us-constitution/article-5' },
        { id: 'article-6', title: 'Article VI', description: 'Federal supremacy', link: '/us-constitution/article-6' },
        { id: 'article-7', title: 'Article VII', description: 'Ratification', link: '/us-constitution/article-7' },
      ],
      icon: '⚖️'
    },
    {
      id: 'amendments',
      title: 'Amendments (1–27)',
      description: 'Key individual rights & government rules',
      subsections: [
        { id: 'bill-of-rights', title: 'Bill of Rights (1–10)', description: 'Fundamental rights of citizens', link: '/us-constitution/bill-of-rights' },
        { id: 'later-amendments', title: 'Later Amendments (11–27)', description: 'Including abolition of slavery, women\'s suffrage, term limits', link: '/us-constitution/amendments' },
      ],
      icon: '🔏'
    }
  ];

  const constitutionFacts = [
    { fact: 'Created in 1787 at the Constitutional Convention' },
    { fact: 'Ratified in 1788 by the required 9 states' },
    { fact: 'Implemented in 1789, replacing the Articles of Confederation' },
    { fact: 'Amended 27 times since ratification' },
    { fact: 'First 10 amendments (Bill of Rights) ratified in 1791' },
    { fact: 'Last amendment (27th) ratified in 1992, though proposed in 1789' }
  ];

  return (
    <>
      <SEO
        title="US Constitution | The Foundation of American Law | NeedGov"
        description="Explore the US Constitution - the supreme law of the United States. Learn about its articles, amendments, the Bill of Rights, and its significance in American government and law."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "The United States Constitution",
          "description": "The supreme law of the United States that provides the framework for the organization of the federal government and the relationship between it and the states, citizens, and all people within the United States.",
          "keywords": "US Constitution, Bill of Rights, amendments, Articles, American law, federal government, founding documents",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://needgov.com/us-constitution"
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
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-lg shadow-lg p-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('/images/constitution-bg.jpg')] bg-cover bg-center" />
            </div>
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">United States Constitution</h1>
              <p className="text-lg md:text-xl opacity-90">
                The supreme law of the United States, establishing the nation's frame of government and fundamental principles.
              </p>
            </div>
          </div>

          {/* Official Document Link */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold text-amber-800">Official Constitution Document</h2>
              <p className="text-amber-700">View the official transcript of the United States Constitution at the National Archives.</p>
            </div>
            <Link 
              href="https://www.archives.gov/founding-docs/constitution-transcript" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md transition-colors flex items-center"
            >
              View Official Transcript
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          {/* Constitution Content Sections */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-blue-800 border-b pb-3">Structure of the Constitution</h2>
            <div className="space-y-8">
              {constitutionSections.map((section) => (
                <div key={section.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-blue-600 text-white p-4 flex items-center">
                    <span className="text-2xl mr-3">{section.icon}</span>
                    <h3 className="text-xl font-medium">{section.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-4">{section.description}</p>
                    {section.subsections && (
                      <ul className="space-y-3 mb-4">
                        {section.subsections.map((subsection) => (
                          <li key={subsection.id} className="bg-slate-50 p-3 rounded border border-slate-200">
                            <Link href={subsection.link} className="flex justify-between items-center group">
                              <div>
                                <h4 className="font-medium text-blue-700 group-hover:text-blue-500 transition-colors">{subsection.title}</h4>
                                <p className="text-sm text-slate-600">{subsection.description}</p>
                              </div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.link && (
                      <Link 
                        href={section.link} 
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Explore {section.title} in detail
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Historical Facts */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Historical Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {constitutionFacts.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow-sm flex items-start">
                  <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-medium">
                    {index + 1}
                  </div>
                  <p className="text-slate-700">{item.fact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Resources */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Learn More</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/us-constitution/educational-resources" className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-medium text-blue-700">Educational Resources</h3>
                <p className="text-sm text-slate-600 mt-1">Lesson plans and study materials</p>
              </Link>
              <Link href="/us-constitution/history" className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-medium text-blue-700">Constitutional History</h3>
                <p className="text-sm text-slate-600 mt-1">The story behind its creation</p>
              </Link>
              <Link href="/us-constitution/interpretations" className="block p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-medium text-blue-700">Supreme Court Interpretations</h3>
                <p className="text-sm text-slate-600 mt-1">How the Court has shaped its meaning</p>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default USConstitutionPage;
