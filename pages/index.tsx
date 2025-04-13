import Layout from '../components/Layout'
import Link from 'next/link'
import SEO from '../components/SEO'

export default function Home() {
  const mainCategories = [
    { 
      name: 'U.S. Constitution', 
      icon: '📜', 
      href: '/constitution',
      description: 'The supreme law of the land, establishing our government structure and fundamental rights'
    },
    { 
      name: 'Federal Law', 
      icon: '⚖️', 
      href: '/federal-statutory',
      description: 'Statutes passed by Congress, regulations by federal agencies, and federal court decisions'
    },
    { 
      name: 'State & Local Law', 
      icon: '🗽', 
      href: '/state-law',
      description: 'Laws and regulations at the state and local level, varying by jurisdiction'
    },
    { 
      name: 'Special Legal Systems', 
      icon: '🎖️', 
      href: '/military-law',
      description: 'Military, tribal, and international law affecting the United States'
    },
  ]
  
  const quickLinks = [
    { name: 'Find Federal Forms', href: '/resources/forms' },
    { name: 'Supreme Court Decisions', href: '/federal-case-law/supreme-court' },
    { name: 'State-by-State Laws', href: '/state-law/statutory' },
    { name: 'U.S. Code Search', href: '/federal-statutory/us-code' },
    { name: 'Learn Legal Basics', href: '/learn' },
    { name: 'Common Legal Questions', href: '/learn/legal-basics' },
  ]
  
  return (
    <>
      <SEO
        title="NeedGov | The Directory to American Law and Government Services"
        description="Your trusted resource for accessing and understanding U.S. laws, regulations, and government services at federal, state, and local levels. Find what you need in one place."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "NeedGov",
          "url": "https://needgov.com",
          "description": "The comprehensive directory for American law and government services",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://needgov.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      
      <Layout>
        <div className="max-w-5xl mx-auto">
          <section className="text-center mb-12 pt-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Navigate the American Legal System
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your comprehensive guide to understanding and accessing U.S. laws, 
              regulations, and government services at all levels.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/search" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto text-center"
              >
                Search Legal Information
              </Link>
              <Link 
                href="/learn" 
                className="inline-block bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors w-full sm:w-auto text-center"
              >
                Learn the Basics
              </Link>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
              Explore Legal Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mainCategories.map((category) => (
                <Link 
                  key={category.href} 
                  href={category.href}
                  className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">{category.icon}</span>
                    <div>
                      <h3 className="font-semibold text-lg text-blue-800">{category.name}</h3>
                      <p className="text-slate-600">{category.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <section className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">
                Why Use NeedGov?
              </h2>
              <div className="space-y-4 text-slate-600">
              <p>
                  Navigating the complex web of American laws and government services can be overwhelming. 
                  NeedGov provides a straightforward directory to help citizens, students, legal professionals, 
                  and businesses find the legal information they need.
                </p>
                <p>
                  Whether you're researching constitutional rights, looking up specific statutes, 
                  seeking government services, or trying to understand legal processes, our structured 
                  approach makes finding information simpler and more accessible.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center text-sm bg-blue-50 px-3 py-1 rounded">
                    <span className="text-blue-700 mr-2">✓</span> 
                    <span>Accurate & Up-to-date</span>
                  </div>
                  <div className="flex items-center text-sm bg-blue-50 px-3 py-1 rounded">
                    <span className="text-blue-700 mr-2">✓</span> 
                    <span>Plain Language Explanations</span>
                  </div>
                  <div className="flex items-center text-sm bg-blue-50 px-3 py-1 rounded">
                    <span className="text-blue-700 mr-2">✓</span> 
                    <span>All Government Levels</span>
                  </div>
                  <div className="flex items-center text-sm bg-blue-50 px-3 py-1 rounded">
                    <span className="text-blue-700 mr-2">✓</span> 
                    <span>Direct Links to Official Sources</span>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">
                Quick Links
              </h2>
              <div className="divide-y divide-slate-100">
                {quickLinks.map((link, index) => (
                  <Link 
                    key={index}
                    href={link.href}
                    className="block py-3 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {link.name} →
                  </Link>
                ))}
              </div>
            </section>
          </div>
          
          <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📜</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Understanding the Law</h3>
              <p className="text-slate-600 mb-4">
                Explore our comprehensive guides that break down complex legal concepts into 
                easy-to-understand language.
              </p>
              <Link 
                href="/learn"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Find Official Forms</h3>
              <p className="text-slate-600 mb-4">
                Access government forms and applications for federal, state, and local services
                all in one convenient location.
              </p>
              <Link 
                href="/resources/forms"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Browse Forms →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Legal Assistance</h3>
              <p className="text-slate-600 mb-4">
                Find resources to connect with legal aid organizations, law libraries, and
                bar association referral services.
              </p>
              <Link 
                href="/resources/find-lawyer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Get Help →
              </Link>
            </div>
          </section>
          
          <section className="text-center p-8 bg-blue-50 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-3">Looking for Something Specific?</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Our comprehensive search allows you to find specific laws, regulations, court cases,
              and government services across all levels of government.
            </p>
            <Link 
              href="/search" 
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Advanced Search
            </Link>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
              Popular Legal Topics
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: 'Immigration', href: '/federal-statutory/immigration' },
                { name: 'Criminal Law', href: '/federal-statutory/criminal' },
                { name: 'Tax Law', href: '/federal-statutory/tax' },
                { name: 'Employment Law', href: '/federal-statutory/employment' },
                { name: 'Family Law', href: '/state-law/statutory/family' },
                { name: 'Property Rights', href: '/state-law/statutory/property' },
                { name: 'Consumer Protection', href: '/federal-administrative/ftc' },
                { name: 'Civil Rights', href: '/federal-statutory/civil-rights' },
              ].map((topic, index) => (
                <Link
                  key={index}
                  href={topic.href}
                  className="bg-white p-4 rounded-lg shadow-sm text-center hover:bg-blue-50 transition-colors"
                >
                  <span className="text-blue-800 font-medium">{topic.name}</span>
                </Link>
              ))}
            </div>
          </section>
          
          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              About NeedGov
            </h2>
            <p className="text-slate-600 mb-4">
              NeedGov is dedicated to making American legal information accessible to everyone.
              Our mission is to provide a comprehensive, easy-to-navigate directory of U.S. laws,
              regulations, and government services at the federal, state, and local levels.
            </p>
            <p className="text-slate-600">
              We gather information from official government sources and organize it in a
              user-friendly format, helping citizens better understand and access the legal
              system that affects their daily lives.
            </p>
            <div className="mt-4">
              <Link 
                href="/about"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More About Us →
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}