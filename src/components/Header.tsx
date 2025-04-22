'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Логотип */}
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Demetra Media"
            width={160}
            height={40}
          />
        </Link>
        {/* Навигационное меню */}
        <nav className="flex space-x-6 text-darkBlue font-medium">
          <Link href="/" className="hover:text-teal transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-teal transition-colors">
            About
          </Link>
          <Link href="#services" className="hover:text-teal transition-colors">
            Services
          </Link>
          <Link href="#how-it-works" className="hover:text-teal transition-colors">
            How It Works
          </Link>
          <Link href="#team" className="hover:text-teal transition-colors">
            Team
          </Link>
          <Link href="#contact" className="hover:text-teal transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
