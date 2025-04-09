import Link from 'next/link'

export default function CaliforniaPage() {
  const stateInfo = {
    name: 'California',
    abbreviation: 'CA',
    capital: 'Sacramento',
    population: '39.5 million',
    website: 'https://www.ca.gov/',
    sections: [
      {
        title: 'State Laws',
        icon: '📜',
        items: [
          { name: 'California Constitution', href: '/states/california/laws/constitution' },
          { name: 'California Penal Code', href: '/states/california/laws/penal-code' },
          { name: 'California Civil Code', href: '/states/california/laws/civil-code' },
          { name: 'California Health and Safety Code', href: '/states/california/laws/health-safety-code' },
          { name: 'California Family Code', href: '/states/california/laws/family-code' },
          { name: 'California Vehicle Code', href: '/states/california/laws/vehicle-code' },
        ]
      },
      {
        title: 'Counties',
        icon: '🏙️',
        items: [
          { name: 'Los Angeles County', href: '/states/california/counties/los-angeles' },
          { name: 'San Francisco County', href: '/states/california/counties/san-francisco' },
          { name: 'San Diego County', href: '/states/california/counties/san-diego' },
          { name: 'Orange County', href: '/states/california/counties/orange' },
          { name: 'Alameda County', href: '/states/california/counties/alameda' },
        ]
      },
      {
        title: 'Cities',
        icon: '🌆',
        items: [
          { name: 'Los Angeles', href: '/states/california/cities/los-angeles' },
          { name: 'San Francisco', href: '/states/california/cities/san-francisco' },
          { name: 'San Diego', href: '/states/california/cities/san-diego' },
          { name: 'San Jose', href: '/states/california/cities/san-jose' },
          { name: 'Sacramento', href: '/states/california/cities/sacramento' },
        ]
      }
    ]
  }
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-800 mr-4">
          {stateInfo.abbreviation}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-900">{stateInfo.name}</h1>
          <div className="flex text-sm text-slate-500 mt-1 space-x-4">
            <span>Capital: {stateInfo.capital}</span>
            <span>Population: {stateInfo.population}</span>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <a 
          href={stateInfo.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Visit Official Website
        </a>
      </div>
      
      <div className="space-y-8">
        {stateInfo.sections.map((section) => (
          <div key={section.title} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{section.icon}</span>
              <h2 className="text-xl font-semibold text-blue-800">{section.title}</h2>
            </div>
            <div className="pl-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {section.items.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className="block p-3 hover:bg-blue-50 rounded transition"
                  >
                    <span className="text-blue-600 font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <Link 
                  href={`/states/california/${section.title.toLowerCase()}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View all {section.title} →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}