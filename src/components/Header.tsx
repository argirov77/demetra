// src/components/Header.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Team' },
  
]

export default function Header() {
  const path = usePathname()

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo (smaller) */}
        <Link href="/" aria-label="Demetra Media Home">
          <Image
            src="/assets/logo.png"
            alt="Demetra Media"
            width={120}
            height={32}
            priority
          />
        </Link>

        {/* Nav */}
        <nav>
          <ul className="flex space-x-8">
            {NAV_LINKS.map((link) => {
              // mark “active” for exact "/" or in-page anchors
              const isActive =
                link.href === '/'
                  ? path === '/'
                  : path.startsWith(link.href.replace('#', ''))
              return (
                <li key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`
                      text-lg font-medium transition-colors duration-200
                      ${isActive ? 'text-teal' : 'text-gray-800'}
                      hover:text-teal
                    `}
                  >
                    {link.label}
                  </Link>
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-0.5 bg-teal transition-all
                      duration-200
                      ${isActive ? 'w-full' : 'w-0'}
                      group-hover:w-full
                    `}
                  />
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
