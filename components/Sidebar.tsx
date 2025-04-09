'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  const mainNavLinks = [
    { name: '🏛️ Federal', href: '/federal' },
    { name: '🗽 States', href: '/states' },
    { name: '🔍 Search', href: '/search' },
    { name: '📋 Forms', href: '/forms' },
    { name: '❓ FAQs', href: '/faqs' },
    { name: '📱 Services', href: '/services' },
  ]

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
        fixed md:static top-0 left-0 z-40 w-64 h-screen bg-blue-800 text-white 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-5 flex flex-col h-full">
          {/* Logo */}
          <div className="mb-8 text-center">
            <Link href="/" className="text-2xl font-bold">
              GovHQ
            </Link>
            <p className="text-sm text-blue-200 mt-1">Government Services Directory</p>
          </div>
          
          {/* Navigation */}
          <nav className="space-y-1 flex-1">
            {mainNavLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`block p-3 rounded-md hover:bg-blue-700 ${
                  pathname === link.href ? 'bg-blue-700' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Footer */}
          <div className="text-center pt-4 text-sm text-blue-300 border-t border-blue-700">
            <p>© 2023 GovHQ</p>
            <p className="mt-1">Made with ❤️ for citizens</p>
          </div>
        </div>
      </aside>
    </>
  )
}