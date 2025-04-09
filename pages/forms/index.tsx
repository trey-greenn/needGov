import SearchBox from '@/components/Search'
import Link from 'next/link'

export default function FormsPage() {
  const popularForms = [
    {
      name: 'Passport Application',
      agency: 'Department of State',
      level: 'Federal',
      href: '/forms/passport-application'
    },
    {
      name: 'I-9 Employment Eligibility Verification',
      agency: 'U.S. Citizenship and Immigration Services',
      level: 'Federal',
      href: '/forms/i-9'
    },
    {
      name: 'Social Security Card Application',
      agency: 'Social Security Administration',
      level: 'Federal',
      href: '/forms/social-security-card'
    },
    {
      name: 'California Driver License Application',
      agency: 'California DMV',
      level: 'State',
      href: '/forms/ca-driver-license'
    }
  ]
  
  const formCategories = [
    {
      name: 'Federal Forms',
      icon: '🏛️',
      href: '/forms/federal',
      examples: ['Passport', 'IRS Tax Forms', 'Social Security', 'Medicare']
    },
    {
      name: 'State Forms',
      icon: '🗽',
      href: '/forms/states',
      examples: ['Driver License', 'Vehicle Registration', 'Vital Records', 'Professional Licensing']
    },
    {
      name: 'County Forms',
      icon: '🏙️',
      href: '/forms/counties',
      examples: ['Property Tax', 'Building Permits', 'Marriage Licenses', 'Voter Registration']
    },
    {
      name: 'City Forms',
      icon: '🌆',
      href: '/forms/cities',
      examples: ['Business Licenses', 'Parking Permits', 'Utilities', 'Local Taxes']
    }
  ]
  
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Government Forms & Applications</h1>
      
      <div className="mb-8">
        <SearchBox />
        <p className="text-sm text-slate-500 mt-2">
          Search for specific forms or browse by category below
        </p>
      </div>
      
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Popular Forms</h2>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Form Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Agency
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Level
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {popularForms.map((form) => (
                <tr key={form.name} className="hover:bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                    <Link href={form.href}>{form.name}</Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                    {form.agency}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                    {form.level}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <Link
                      href={form.href}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Download
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-4">{category.icon}</span>
                <h3 className="text-lg font-medium text-blue-800">{category.name}</h3>
              </div>
              <div className="pl-12">
                <p className="text-sm text-slate-500 mb-2">Examples:</p>
                <div className="flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <span 
                      key={example}
                      className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}