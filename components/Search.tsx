import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

interface SearchBoxProps {
  initialQuery?: string
}

export default function SearchBox({ initialQuery = '' }: SearchBoxProps) {
  const [query, setQuery] = useState(initialQuery)
  const router = useRouter()
  
  // Update local state if initialQuery changes (like when coming back to the page)
  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery)
    }
  }, [initialQuery])
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }
  
  return (
    <form onSubmit={handleSearch} className="w-full max-w-lg">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for government services, forms, or information..."
          className="w-full px-4 py-3 pr-10 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          title='search'
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-blue-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
    </form>
  )
}