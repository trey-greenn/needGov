import Link from 'next/link'

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
  
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Federal Government</h1>
      <p className="text-slate-600 mb-8">
        Explore information and services from all three branches of the federal government,
        federal laws, and national service agencies.
      </p>
      
      <div className="space-y-8">
        {branches.map((branch) => (
          <div key={branch.name} className="bg-white p-6 rounded-lg shadow-md">
            <Link href={branch.href} className="flex items-center mb-4 group">
              <span className="text-3xl mr-3">{branch.icon}</span>
              <h2 className="text-xl font-semibold text-blue-800 group-hover:text-blue-600 transition">
                {branch.name}
              </h2>
            </Link>
            <ul className="pl-10 space-y-1 text-slate-600">
              {branch.items.map((item) => (
                <li key={item} className="list-disc">{item}</li>
              ))}
            </ul>
            <div className="mt-4 ml-10">
              <Link 
                href={branch.href} 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View {branch.name} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}