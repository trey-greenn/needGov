import React from 'react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import Layout from '@/components/Layout';

export default function StatesPage() {
  // Complete list of all 50 states with abbreviations and links
  const allStates = [
    { name: 'Alabama', abbreviation: 'AL', href: '/states/alabama' },
    { name: 'Alaska', abbreviation: 'AK', href: '/states/alaska' },
    { name: 'Arizona', abbreviation: 'AZ', href: '/states/arizona' },
    { name: 'Arkansas', abbreviation: 'AR', href: '/states/arkansas' },
    { name: 'California', abbreviation: 'CA', href: '/states/california' },
    { name: 'Colorado', abbreviation: 'CO', href: '/states/colorado' },
    { name: 'Connecticut', abbreviation: 'CT', href: '/states/connecticut' },
    { name: 'Delaware', abbreviation: 'DE', href: '/states/delaware' },
    { name: 'Florida', abbreviation: 'FL', href: '/states/florida' },
    { name: 'Georgia', abbreviation: 'GA', href: '/states/georgia' },
    { name: 'Hawaii', abbreviation: 'HI', href: '/states/hawaii' },
    { name: 'Idaho', abbreviation: 'ID', href: '/states/idaho' },
    { name: 'Illinois', abbreviation: 'IL', href: '/states/illinois' },
    { name: 'Indiana', abbreviation: 'IN', href: '/states/indiana' },
    { name: 'Iowa', abbreviation: 'IA', href: '/states/iowa' },
    { name: 'Kansas', abbreviation: 'KS', href: '/states/kansas' },
    { name: 'Kentucky', abbreviation: 'KY', href: '/states/kentucky' },
    { name: 'Louisiana', abbreviation: 'LA', href: '/states/louisiana' },
    { name: 'Maine', abbreviation: 'ME', href: '/states/maine' },
    { name: 'Maryland', abbreviation: 'MD', href: '/states/maryland' },
    { name: 'Massachusetts', abbreviation: 'MA', href: '/states/massachusetts' },
    { name: 'Michigan', abbreviation: 'MI', href: '/states/michigan' },
    { name: 'Minnesota', abbreviation: 'MN', href: '/states/minnesota' },
    { name: 'Mississippi', abbreviation: 'MS', href: '/states/mississippi' },
    { name: 'Missouri', abbreviation: 'MO', href: '/states/missouri' },
    { name: 'Montana', abbreviation: 'MT', href: '/states/montana' },
    { name: 'Nebraska', abbreviation: 'NE', href: '/states/nebraska' },
    { name: 'Nevada', abbreviation: 'NV', href: '/states/nevada' },
    { name: 'New Hampshire', abbreviation: 'NH', href: '/states/new-hampshire' },
    { name: 'New Jersey', abbreviation: 'NJ', href: '/states/new-jersey' },
    { name: 'New Mexico', abbreviation: 'NM', href: '/states/new-mexico' },
    { name: 'New York', abbreviation: 'NY', href: '/states/new-york' },
    { name: 'North Carolina', abbreviation: 'NC', href: '/states/north-carolina' },
    { name: 'North Dakota', abbreviation: 'ND', href: '/states/north-dakota' },
    { name: 'Ohio', abbreviation: 'OH', href: '/states/ohio' },
    { name: 'Oklahoma', abbreviation: 'OK', href: '/states/oklahoma' },
    { name: 'Oregon', abbreviation: 'OR', href: '/states/oregon' },
    { name: 'Pennsylvania', abbreviation: 'PA', href: '/states/pennsylvania' },
    { name: 'Rhode Island', abbreviation: 'RI', href: '/states/rhode-island' },
    { name: 'South Carolina', abbreviation: 'SC', href: '/states/south-carolina' },
    { name: 'South Dakota', abbreviation: 'SD', href: '/states/south-dakota' },
    { name: 'Tennessee', abbreviation: 'TN', href: '/states/tennessee' },
    { name: 'Texas', abbreviation: 'TX', href: '/states/texas' },
    { name: 'Utah', abbreviation: 'UT', href: '/states/utah' },
    { name: 'Vermont', abbreviation: 'VT', href: '/states/vermont' },
    { name: 'Virginia', abbreviation: 'VA', href: '/states/virginia' },
    { name: 'Washington', abbreviation: 'WA', href: '/states/washington' },
    { name: 'West Virginia', abbreviation: 'WV', href: '/states/west-virginia' },
    { name: 'Wisconsin', abbreviation: 'WI', href: '/states/wisconsin' },
    { name: 'Wyoming', abbreviation: 'WY', href: '/states/wyoming' }
  ];

  // Featured states with additional details
  const featuredStates = [
    {
      name: 'California',
      abbreviation: 'CA',
      href: '/states/california',
      population: '39.5 million',
      capital: 'Sacramento',
      features: [
        'State Constitution',
        'Administrative Agencies',
        'State Laws',
        'Local Governments'
      ]
    },
    {
      name: 'New York',
      abbreviation: 'NY',
      href: '/states/new-york',
      population: '19.5 million',
      capital: 'Albany',
      features: [
        'State Constitution',
        'Administrative Agencies',
        'State Laws',
        'Local Governments'
      ]
    },
    {
      name: 'Texas',
      abbreviation: 'TX',
      href: '/states/texas',
      population: '29.1 million',
      capital: 'Austin',
      features: [
        'State Constitution',
        'Administrative Agencies',
        'State Laws',
        'Local Governments'
      ]
    },
    {
      name: 'Florida',
      abbreviation: 'FL',
      href: '/states/florida',
      population: '21.5 million',
      capital: 'Tallahassee',
      features: [
        'State Constitution',
        'Administrative Agencies',
        'State Laws',
        'Local Governments'
      ]
    }
  ];

  // Common categories for each state
  const stateCategories = [
    'Constitution',
    'Administrative Agencies',
    'Laws',
    'Local'
  ];

  return (
    <>
      <SEO
        title="U.S. State Laws & Government Resources | NeedGov"
        description="Access laws, regulations, and government resources for all 50 U.S. states. Find state constitutions, administrative agencies, legal codes, and local government information."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "U.S. State Governments & Laws",
          "description": "Comprehensive directory of government resources for all 50 U.S. states, including state laws, constitutions, administrative agencies, and local government information.",
          "keywords": "state laws, state government, state constitution, administrative agencies, local government, U.S. states",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://needgov.com/states"
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
        <div className="max-w-6xl mx-auto">
          {/* Hero section */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">United States of America</h1>
            <p className="text-lg md:text-xl opacity-90">
              Access laws, regulations, and government resources for all 50 U.S. states.
            </p>
          </div>
          
          {/* US Map visualization placeholder - you could add an actual map here */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 flex justify-center">
            <div className="p-4 text-center text-blue-800">
              <p className="font-medium mb-2">Interactive U.S. Map Coming Soon</p>
              <p className="text-sm text-slate-600">Click on a state to explore its laws and government resources</p>
            </div>
          </div>
          
          {/* Featured States */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">Featured States</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredStates.map((state) => (
                <Link 
                  key={state.abbreviation}
                  href={state.href}
                  className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition hover:bg-blue-50"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {state.abbreviation}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-800">{state.name}</h3>
                      <div className="text-sm text-slate-500">
                        <span className="mr-3">Capital: {state.capital}</span>
                        <span>Pop: {state.population}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4 className="font-medium text-blue-700 mb-1">Resources:</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {state.features.map((feature) => (
                        <li key={feature} className="flex items-center text-slate-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          
          {/* All States - Alphabetical Grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">All 50 States</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {allStates.map((state) => (
                  <Link 
                    key={state.abbreviation}
                    href={state.href}
                    className="flex items-center p-3 hover:bg-blue-50 rounded-md transition border border-slate-200"
                  >
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-2">
                      {state.abbreviation}
                    </span>
                    <span className="text-slate-700">{state.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
          
          {/* State Resources Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">State Government Resources</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-slate-600 mb-4">
                Each state has its own government structure, including executive, legislative, and judicial branches. 
                Explore the following resources available for all states:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {stateCategories.map((category) => (
                  <div key={category} className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                    <h3 className="font-medium text-blue-800 mb-2">{category}</h3>
                    <p className="text-sm text-slate-600">
                      {category === 'Constitution' && 'Founding document establishing state government structure'}
                      {category === 'Administrative Agencies' && 'State departments and regulatory bodies'}
                      {category === 'Laws' && 'State statutes, regulations, and case law'}
                      {category === 'Local' && 'County and city governments within the state'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* State Law Comparison Tool */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">State Law Comparison Tool</h2>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-slate-600 mb-4">
                Compare laws and regulations across different states on topics like taxes, business, healthcare, and more.
              </p>
              <Link 
                href="/tools/state-law-comparison" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
              >
                Try State Comparison Tool
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}