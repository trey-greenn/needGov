import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import SearchBox from '@/components/Search'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// Define the type for search results
interface SearchResult {
  title: string
  category: string
  description: string
  href: string
}

// In a real app, this would be server-side code that accesses a database
// or calls an API to get search results
const getSearchResults = (query: string): SearchResult[] => {
  // Mock results for demonstration
  return [
    {
      title: 'Social Security Administration',
      category: 'Federal',
      description: 'Apply for benefits, check your Social Security statement, or request a replacement card.',
      href: '/federal/national-services/social-security'
    },
    {
      title: 'California DMV',
      category: 'State',
      description: 'Driver license, ID card, and vehicle registration services for California residents.',
      href: '/states/california/dmv'
    },
    {
      title: 'Los Angeles County Building Permits',
      category: 'County',
      description: 'Apply for building permits in Los Angeles County.',
      href: '/states/california/counties/los-angeles/forms/building-permits'
    },
    {
      title: 'Federal Student Aid (FAFSA)',
      category: 'Federal',
      description: 'Apply for federal student aid for college or career school.',
      href: '/federal/education/student-aid'
    },
  ]
}

export default function SearchPage() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  // Specify the state type explicitly
  const [results, setResults] = useState<SearchResult[]>([])
  
  // Use useEffect to handle client-side query parameter access
  useEffect(() => {
    // Get query from router after component mounts (client-side only)
    const { q } = router.query
    const searchQuery = typeof q === 'string' ? q : ''
    setQuery(searchQuery)
    
    // Only get results if there's a query
    if (searchQuery) {
      setResults(getSearchResults(searchQuery))
    } else {
      setResults([])
    }
  }, [router.query])
  
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Search Government Services</h1>
        
        <div className="mb-8">
          <SearchBox initialQuery={query} />
        </div>
        
        {query && (
          <div>
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              {results.length > 0 
                ? `Results for "${query}"`
                : `No results found for "${query}"`
              }
            </h2>
            
            {results.length > 0 && (
              <div className="space-y-4">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.href}
                    className="block bg-white p-5 rounded-lg shadow hover:shadow-md transition"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-blue-700">{result.title}</h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {result.category}
                      </span>
                    </div>
                    <p className="text-slate-600">{result.description}</p>
                  </Link>
                ))}
              </div>
            )}
            
            {results.length === 0 && query && (
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-slate-600 mb-4">
                  Try searching for government services, agencies, forms, or specific topics.
                </p>
                <p className="text-slate-500 text-sm">
                  Examples: "passport application", "tax forms", "California DMV", "Social Security"
                </p>
              </div>
            )}
          </div>
        )}
        
        {!query && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Find Government Services
            </h2>
            <p className="text-slate-600 mb-4">
              Enter keywords above to search for government services, agencies, forms, or specific topics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-blue-50 rounded-md">
                <h3 className="font-medium text-blue-800 mb-2">Popular Searches</h3>
                <ul className="space-y-1 text-slate-600">
                  <li>• Passport application</li>
                  <li>• Tax forms</li>
                  <li>• DMV services</li>
                  <li>• Social Security benefits</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-md">
                <h3 className="font-medium text-blue-800 mb-2">Or Browse By</h3>
                <ul className="space-y-1 text-slate-600">
                  <li>• <Link href="/federal" className="text-blue-600 hover:underline">Federal services</Link></li>
                  <li>• <Link href="/states" className="text-blue-600 hover:underline">State services</Link></li>
                  <li>• <Link href="/forms" className="text-blue-600 hover:underline">Forms & applications</Link></li>
                  <li>• <Link href="/faqs" className="text-blue-600 hover:underline">Frequently asked questions</Link></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}