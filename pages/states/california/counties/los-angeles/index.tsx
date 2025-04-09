import Link from 'next/link'

export default function LosAngelesCountyPage() {
  const countyInfo = {
    name: 'Los Angeles County',
    state: 'California',
    population: '10.04 million',
    website: 'https://lacounty.gov/',
    sections: [
      {
        title: 'County Ordinances',
        icon: '📝',
        items: [
          { name: 'Zoning', href: '/states/california/counties/los-angeles/ordinances/zoning' },
          { name: 'Noise Regulations', href: '/states/california/counties/los-angeles/ordinances/noise' },
          { name: 'Public Safety Codes', href: '/states/california/counties/los-angeles/ordinances/public-safety' },
        ]
      },
      {
        title: 'Services',
        icon: '🛠️',
        items: [
          { name: "Sheriff's Department", href: '/states/california/counties/los-angeles/services/sheriff' },
          { name: 'County Health Department', href: '/states/california/counties/los-angeles/services/health' },
          { name: 'Public Works', href: '/states/california/counties/los-angeles/services/public-works' },
        ]
      },
      {
        title: 'Forms & Applications',
        icon: '📋',
        items: [
          { name: 'Building Permits', href: '/states/california/counties/los-angeles/forms/building-permits' },
          { name: 'Business Licenses', href: '/states/california/counties/los-angeles/forms/business-licenses' },
          { name: 'Property Tax Assessment', href: '/states/california/counties/los-angeles/forms/property-tax' },
        ]
      }
    ]
  }
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <div className="text-sm text-blue-600 mb-1">
            <Link href="/states/california">California</Link> &gt; Counties
          </div>
          <h1 className="text-3xl font-bold text-blue-900">{countyInfo.name}</h1>
          <div className="text-sm text-slate-500 mt-1">
            <span>Population: {countyInfo.population}</span>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <a 
            href={countyInfo.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Visit Official Website
          </a>
        </div>
      </div>
      
      <div className="space-y-8">
        {countyInfo.sections.map((section) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}