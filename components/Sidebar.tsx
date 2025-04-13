import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<number | null>(null)
  const router = useRouter()
  const pathname = router.pathname
  
  const mainNavLinks = [
    { 
      name: '📜 U.S. Constitution', 
      href: '/constitution',
      subItems: [
        { name: 'Overview', href: '/constitution' },
        { name: 'Bill of Rights (Amendments 1–10)', href: '/constitution/bill-of-rights' },
        { name: 'Additional Amendments (11–27)', href: '/constitution/amendments' },
        { name: 'Separation of Powers', href: '/constitution/separation-of-powers' },
        { name: 'Checks and Balances', href: '/constitution/checks-and-balances' },
      ]
    },
    { 
      name: '⚖️ Federal Statutory Law', 
      href: '/federal-statutory',
      subItems: [
        { name: 'What is Statutory Law?', href: '/federal-statutory' },
        { name: 'U.S. Code (by Title)', href: '/federal-statutory/us-code' },
        { name: 'Civil Rights Laws', href: '/federal-statutory/civil-rights' },
        { name: 'Health & Safety Laws', href: '/federal-statutory/health-safety' },
        { name: 'Immigration Laws', href: '/federal-statutory/immigration' },
        { name: 'Tax Laws', href: '/federal-statutory/tax' },
      ]
    },
    { 
      name: '🏛️ Federal Administrative Law', 
      href: '/federal-administrative',
      subItems: [
        { name: 'What are Federal Agencies?', href: '/federal-administrative' },
        { name: 'Code of Federal Regulations (CFR)', href: '/federal-administrative/cfr' },
        { name: 'IRS – Tax Code', href: '/federal-administrative/irs' },
        { name: 'EPA – Environmental Rules', href: '/federal-administrative/epa' },
        { name: 'FDA – Drug & Food Regulation', href: '/federal-administrative/fda' },
        { name: 'Social Security & Medicare', href: '/federal-administrative/social-security' },
        { name: 'SEC – Financial Rules', href: '/federal-administrative/sec' },
      ]
    },
    { 
      name: '👨‍⚖️ Federal Case Law', 
      href: '/federal-case-law',
      subItems: [
        { name: 'What is Case Law?', href: '/federal-case-law' },
        { name: 'Supreme Court Decisions', href: '/federal-case-law/supreme-court' },
        { name: 'Federal Court of Appeals', href: '/federal-case-law/appeals' },
        { name: 'Key Precedents', href: '/federal-case-law/key-precedents' },
        { name: 'How to Read a Case', href: '/federal-case-law/how-to-read' },
      ]
    },
    { 
      name: '🗽 State Law', 
      href: '/state-law',
      subItems: [
        { name: 'State Constitutions', href: '/state-law/constitutions' },
        { name: 'State Statutory Law', href: '/state-law/statutory' },
        { name: 'State Administrative Law', href: '/state-law/administrative' },
        { name: 'State Case Law', href: '/state-law/case-law' },
      ]
    },
    { 
      name: '🏙️ Local Law', 
      href: '/local-law',
      subItems: [
        { name: 'What are Ordinances?', href: '/local-law' },
        { name: 'City and County Governments', href: '/local-law/governments' },
        { name: 'Common Local Laws', href: '/local-law/common' },
        { name: 'Public Safety & Zoning Rules', href: '/local-law/public-safety' },
      ]
    },
    { 
      name: '🎖️ Military Law', 
      href: '/military-law',
      subItems: [
        { name: 'UCMJ Overview', href: '/military-law' },
        { name: 'Military Court System', href: '/military-law/courts' },
        { name: 'Rights of Service Members', href: '/military-law/rights' },
      ]
    },
    { 
      name: '🪶 Tribal Law', 
      href: '/tribal-law',
      subItems: [
        { name: 'Tribal Sovereignty', href: '/tribal-law' },
        { name: 'Examples of Tribal Legal Systems', href: '/tribal-law/systems' },
        { name: 'Interplay with Federal/State Law', href: '/tribal-law/interplay' },
      ]
    },
    { 
      name: '🌍 Treaties & International Law', 
      href: '/international-law',
      subItems: [
        { name: 'Role of Treaties in U.S. Law', href: '/international-law' },
        { name: 'How Treaties Are Made', href: '/international-law/treaty-making' },
        { name: 'Examples of Treaties', href: '/international-law/examples' },
      ]
    },
    { 
      name: '🔍 Search', 
      href: '/search',
      subItems: [] 
    },
    { 
      name: '📚 Learn the Law', 
      href: '/learn',
      subItems: [
        { name: 'Legal Basics', href: '/learn' },
        { name: 'How a Bill Becomes Law', href: '/learn/bill-to-law' },
        { name: 'How Courts Work', href: '/learn/courts' },
        { name: 'How to Read Legal Texts', href: '/learn/legal-texts' },
      ]
    },
    { 
      name: '🧰 Legal Resources', 
      href: '/resources',
      subItems: [
        { name: 'Find a Lawyer', href: '/resources/find-lawyer' },
        { name: 'Government Websites', href: '/resources/websites' },
        { name: 'Downloadable PDFs & Forms', href: '/resources/forms' },
      ]
    },
  ]

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-700 text-white rounded-md"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-40 w-72 h-screen bg-blue-800 text-white overflow-y-auto
        md:sticky md:top-0 md:h-screen
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-5 flex flex-col h-full min-h-screen">
          {/* Logo */}
          <div className="mb-6 text-center">
            <Link href="/" className="text-2xl font-bold">
              NeedGov
            </Link>
            <p className="text-sm text-blue-200 mt-1">The Directory to American Law</p>
          </div>
          
          {/* Navigation */}
          <nav className="space-y-1 flex-1 overflow-y-auto">
            {mainNavLinks.map((link, index) => (
              <div key={link.href} className="mb-1">
                <div 
                  className={`flex justify-between items-center p-3 rounded-md cursor-pointer hover:bg-blue-700 ${
                    pathname.startsWith(link.href) ? 'bg-blue-700' : ''
                  }`}
                  onClick={() => link.subItems.length > 0 ? toggleSection(index) : router.push(link.href)}
                >
                  <span>{link.name}</span>
                  {link.subItems.length > 0 && (
                    <svg 
                      className={`h-4 w-4 transition-transform ${expandedSection === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
                
                {expandedSection === index && link.subItems.length > 0 && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-blue-600 pl-3">
                    {link.subItems.map((subItem) => (
                      <Link 
                        key={subItem.href}
                        href={subItem.href}
                        className={`block p-2 text-sm rounded-md hover:bg-blue-700 ${
                          pathname === subItem.href ? 'bg-blue-700' : ''
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Footer */}
          <div className="text-center pt-4 text-sm text-blue-300 border-t border-blue-700 mt-auto">
            <p>© {new Date().getFullYear()} NeedGov</p>
            <p className="mt-1">America's Legal Directory</p>
          </div>
        </div>
      </aside>
    </>
  )
}