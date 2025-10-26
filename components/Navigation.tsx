'use client'
import Link from 'next/link'
import { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/book', label: 'Book' },
    { href: '/labs', label: 'Labs' },
    { href: '/retreats', label: 'Retreats' },
    { href: '/media', label: 'Media' },
    { href: '/shop', label: 'Shop' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-oswald text-xl sm:text-2xl text-bim-blue">
              Blueprint In Motion
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-bim-blue transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/members/login"
              className="bg-bim-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Member Login
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-bim-blue hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/members/login"
              className="block px-3 py-2 bg-bim-blue text-white rounded-md hover:bg-blue-700 transition-colors text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Member Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation