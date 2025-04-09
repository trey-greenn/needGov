import Link from 'next/link'

export default function StatesPage() {
  // This would typically be fetched from an API or imported from a data file
  // Using sample states from gov.json
  const featuredStates = [
    {
      name: 'California',
      abbreviation: 'CA',
      href: '/states/california',
      features: [
        'State Laws',
        'Counties',
        'Cities'
      ]
    },
    {
      name: 'New York',
      abbreviation: 'NY',
      href: '/states/new-york',
      features: [
        'State Laws',
        'Counties',
        'Cities'
      ]
    },
  ]
  
  // This would be all 50 states in a real implementation
  const allStates = [
    { name: 'Alabama', abbreviation: 'AL', href: '/states/alabama' },
    { name: 'Alaska', abbreviation: 'AK', href: '/states/alaska' },
    { name: 'Arizona', abbreviation: 'AZ', href: '/states/arizona' },
    { name: 'Arkansas', abbreviation: 'AR', href: '/states/arkansas' },
    { name: 'California', abbreviation: 'CA', href: '/states/california' },
    { name: 'Colorado', abbreviation: 'CO', href: '/states/colorado' },
    // ... other states would be included
    { name: 'New York', abbreviation: 'NY', href: '/states/new-york' },
    // ... remainder of states
  ]
  
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">State Governments</h1>
      <p className="text-slate-600 mb-8">
        Find information about state laws, county and city services, and local government resources.
      </p>
      
      {/* Featured States */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Featured States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredStates.map((state) => (
            <Link 
              key={state.abbreviation}
              href={state.href}
              className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl font-bold text-blue-800 mr-4">
                  {state.abbreviation}
                </div>
                <h3 className="text-xl font-semibold text-blue-800">{state.name}</h3>
              </div>
              <ul className="pl-16 text-slate-600">
                {state.features.map((feature) => (
                  <li key={feature} className="list-disc">{feature}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>
      
      {/* All States */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Browse All States</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allStates.map((state) => (
              <Link 
                key={state.abbreviation}
                href={state.href}
                className="flex items-center p-2 hover:bg-blue-50 rounded transition"
              >
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-800 mr-2">
                  {state.abbreviation}
                </span>
                <span className="text-slate-700">{state.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}