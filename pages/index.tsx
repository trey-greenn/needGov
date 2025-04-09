import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  const categories = [
    { 
      name: 'Federal Government', 
      icon: '🏛️', 
      href: '/federal',
      description: 'Access services from executive, legislative, and judicial branches'
    },
    { 
      name: 'State Services', 
      icon: '🗽', 
      href: '/states',
      description: 'Find state-specific laws, counties, and city services'
    },
    { 
      name: 'National Services', 
      icon: '🇺🇸', 
      href: '/federal/national-services',
      description: 'Access Social Security, Medicare, Veterans Services, and more'
    },
    { 
      name: 'Forms & Documents', 
      icon: '📄', 
      href: '/forms',
      description: 'Download and submit government forms and applications'
    },
  ]
  
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
      <div className="max-w-5xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-3">GovHQ</h1>
        <p className="text-xl text-slate-600">
          The comprehensive directory for government services and resources
        </p>
        <div className="mt-6">
          <Link 
            href="/guide" 
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            See Beginners Guide
          </Link>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Browse Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.href} 
              href={category.href}
              className="block p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
            >
              <div className="flex items-center">
                <span className="text-3xl mr-4">{category.icon}</span>
                <div>
                  <h3 className="font-semibold text-lg text-blue-800">{category.name}</h3>
                  <p className="text-sm text-slate-600">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <section className="text-center p-8 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">Need Help?</h2>
        <p className="text-slate-600 mb-4">
          Not sure where to find a specific government service? Try our search or browse by category.
        </p>
        <Link 
          href="/search" 
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search Services
        </Link>
      </section>
    </div>
      </div>
    </Layout>
  )
}