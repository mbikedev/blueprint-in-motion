'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/blueprint-manifest', label: t('blueprintManifest') },
    { href: '/books', label: t('books') },
    { href: '/fieldtalks', label: t('fieldtalks') },
    { href: '/integrity', label: t('integrity') },
  ]

  const switchLocale = (newLocale: string) => {
    // Remove current locale prefix and add new one
    const segments = pathname.split('/').filter(Boolean)
    // If first segment is a locale, remove it
    if (segments[0] === locale) {
      segments.shift()
    }
    // Build new path with new locale
    const newPath = `/${newLocale}${segments.length > 0 ? '/' + segments.join('/') : ''}`
    router.push(newPath)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/bim-logo.webp"
                alt="Blueprint In Motion Logo"
                width={40}
                height={40}
                className="h-10 w-10"
                priority
              />
              <span className="font-oswald text-xl sm:text-2xl text-bim-blue">
                Blueprint In Motion
              </span>
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

            {/* Language Switcher */}
            <div className="flex items-center gap-3 ml-4 border-l border-gray-300 pl-4">
              <button
                onClick={() => switchLocale('nl')}
                className={`flex items-center gap-1.5 transition-opacity ${
                  locale === 'nl' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                }`}
                title="Nederlands"
              >
                <span className="text-lg">🇳🇱</span>
                <span className="text-xs font-medium text-gray-700">NL</span>
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`flex items-center gap-1.5 transition-opacity ${
                  locale === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                }`}
                title="English"
              >
                <span className="text-lg">🇺🇸</span>
                <span className="text-xs font-medium text-gray-700">EN</span>
              </button>
            </div>
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

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-3 px-3 py-3 border-t border-gray-200 mt-2">
              <button
                onClick={() => {
                  switchLocale('nl')
                  setIsOpen(false)
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors ${
                  locale === 'nl' ? 'bg-bim-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">🇳🇱</span>
                <span>NL</span>
              </button>
              <button
                onClick={() => {
                  switchLocale('en')
                  setIsOpen(false)
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors ${
                  locale === 'en' ? 'bg-bim-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">🇺🇸</span>
                <span>EN</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation